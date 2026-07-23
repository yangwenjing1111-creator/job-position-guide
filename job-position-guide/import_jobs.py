#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
将爬虫抓取结果（JSON Lines，每行一个岗位）合并去重，导入 positions.db。

使用：
  python import_jobs.py jobs_frontend.json jobs_pm.json ...
  python import_jobs.py jobs/*.json

⚠️ 重要：导入前请人工 review 抓取结果，本脚本只做去重和字段补齐：
  - 同名（同 name + 相似 jd 关键词）岗位会被合并为一条
  - holland_code 默认留空，由你根据岗位 JD 手工补
  - fit_for / hard_skills / soft_skills / taboos / questions 留空，
    后续在 init_db.py 里给每个新岗位补充完整元数据
"""
import json
import os
import re
import sys
import sqlite3

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

HERE = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.environ.get("DB_PATH") or os.path.join(HERE, "positions.db")


def normalize_name(n):
    """去括号/空格/常见修饰，统一岗位名用于去重"""
    n = re.sub(r"[\s（）()【】\[\]·/／\\,，、]+", "", n)
    n = re.sub(r"\d+[kK]", "", n)
    n = re.sub(r"\d+-\d+", "", n)
    return n.lower()


def similar(a, b):
    return normalize_name(a) == normalize_name(b)


def slugify(n):
    s = re.sub(r"[^a-zA-Z0-9一-龥]+", "-", n).strip("-").lower()
    return s or "pos"


def merge_jobs(files):
    seen = {}  # name -> dict
    for fp in files:
        for line in open(fp, encoding="utf-8"):
            line = line.strip()
            if not line:
                continue
            try:
                j = json.loads(line)
            except json.JSONDecodeError:
                continue
            name = (j.get("name") or "").strip()
            if not name:
                continue
            key = normalize_name(name)
            if key in seen:
                # 合并：保留已有，叠加来源
                src = seen[key].get("source", "")
                if j.get("source") and j["source"] not in src:
                    seen[key]["source"] = src + "+" + j["source"]
                continue
            seen[key] = {
                "name": name,
                "line": j.get("line") or j.get("category") or "",
                "jd": j.get("jd") or j.get("raw_jd") or "",
                "company_sample": j.get("company", ""),
                "salary_sample": j.get("salary", ""),
                "source": j.get("source", ""),
            }
    return list(seen.values())


def import_to_db(jobs):
    if not os.path.exists(DB_PATH):
        print("DB not found:", DB_PATH, "-- run init_db.py first")
        sys.exit(1)
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()
    n_new, n_skip = 0, 0
    for j in jobs:
        pid = slugify(j["name"])[:32]
        # 已存在同名则跳过
        row = cur.execute("SELECT id FROM positions WHERE id=?", (pid,)).fetchone()
        if row:
            n_skip += 1
            continue
        cur.execute("""
        INSERT INTO positions (id, name, line, jd, fit_for, hard_skills, soft_skills,
                               industry_notes, taboos, holland_code, updated_at)
        VALUES (?,?,?,?,?,?,?,?,?,?,?)""", (
            pid, j["name"], j["line"], j["jd"],
            "[]", "[]", "[]", "{}", "[]", "", 0,
        ))
        n_new += 1
    conn.commit()
    conn.close()
    print(f"新增 {n_new} 个岗位，跳过 {n_skip} 个（id 冲突）")
    print("→ 接下来请打开 init_db.py，在 POSITIONS 列表里手工补 fit_for/hard_skills/soft_skills/industry_notes/taboos/holland_code/questions，再 python init_db.py --append")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)
    files = []
    for a in sys.argv[1:]:
        if os.path.isdir(a):
            for f in sorted(os.listdir(a)):
                if f.endswith(".json") or f.endswith(".jsonl") or f.endswith(".jl"):
                    files.append(os.path.join(a, f))
        else:
            files.append(a)
    if not files:
        print("no input files")
        sys.exit(1)
    print(f"读取 {len(files)} 个文件...")
    jobs = merge_jobs(files)
    print(f"去重后 {len(jobs)} 个唯一岗位")
    for j in jobs:
        print(f"  · {j['name']}  source={j['source']}")
    import_to_db(jobs)
