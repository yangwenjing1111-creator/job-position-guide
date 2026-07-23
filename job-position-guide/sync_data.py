#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
sync_data.py - 从 init_db.py 读 19 岗基础信息 + 从旧 data.js 抽 4 岗 questions，
生成新的 demo/data.js（保持 JS 字面量语法，浏览器可 window.POSITIONS 解析）。
"""
import json
import re
import sys

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

# ---------- 1. 读 init_db.py 的 POSITIONS 块 ----------
import init_db
positions = init_db.POSITIONS
print("init_db.py positions:", len(positions))

# ---------- 2. 从旧 data.js 抽 4 岗 questions（保留原始 JS 文本） ----------
src = open("data.js", encoding="utf-8").read()
q_by_id = {}
for pid in ["pm", "op", "sales", "hr"]:
    # 找该 id 后到下一个 id 或 ]; 之间的 questions: [...] 段
    m = re.search(
        r"id:\s*['\"]" + pid + r"['\"]\s*,\s*"  # id 字段
        r".*?"  # 中间任意内容（非贪婪）
        r"questions:\s*(\[(?:[^\[\]]|\[[^\]]*\])*\])\s*\}",  # questions 数组
        src, re.DOTALL,
    )
    if m:
        q_by_id[pid] = m.group(1)
        print(pid, "questions extracted, length:", len(m.group(1)))
    else:
        print(pid, "questions NOT found")

# ---------- 3. 写新 data.js ----------
def js_str(s):
    """Python 字符串 → JS 双引号字符串。"""
    if s is None:
        return '""'
    return json.dumps(s, ensure_ascii=False)


def js_array(lst):
    return "[" + ", ".join(js_str(x) for x in lst) + "]"


def js_obj(d):
    return "{" + ", ".join(f"{k}: {js_str(v)}" for k, v in d.items()) + "}"


def js_kv_obj(d):
    """dict → JS 对象字面量。key 为合法标识符时裸用，否则加双引号。"""
    items = []
    for k, v in d.items():
        # 合法 JS 标识符
        if re.match(r"^[a-zA-Z_$][a-zA-Z0-9_$]*$", k):
            items.append(f"{k}: {js_str(v)}")
        else:
            items.append(f"{js_str(k)}: {js_str(v)}")
    return "{" + ", ".join(items) + "}"


# 把 init_db.py 的 POSITIONS 转成 JS 字面量
out_positions = []
for p in positions:
    obj = {
        "id": p["id"],
        "name": p["name"],
        "line": p.get("line", ""),
        "jd": p.get("jd", ""),
        "fitFor": p.get("fit_for", []),
        "hardSkills": p.get("hard_skills", []),
        "softSkills": p.get("soft_skills", []),
        "industryNotes": p.get("industry_notes", {}),
        "taboos": p.get("taboos", []),
        "hollandCode": p.get("holland_code", ""),
    }
    js_lines = [
        "  {",
        f"    id: {js_str(obj['id'])},",
        f"    name: {js_str(obj['name'])},",
        f"    line: {js_str(obj['line'])},",
        f"    jd: {js_str(obj['jd'])},",
        f"    fitFor: {js_array(obj['fitFor'])},",
        f"    hardSkills: {js_array(obj['hardSkills'])},",
        f"    softSkills: {js_array(obj['softSkills'])},",
        f"    industryNotes: {js_kv_obj(obj['industryNotes'])},",
        f"    taboos: {js_array(obj['taboos'])},",
        f"    holland_code: {js_str(obj['hollandCode'])},",
    ]
    # questions
    if p["id"] in q_by_id:
        js_lines.append(f"    questions: {q_by_id[p['id']]}")
    else:
        js_lines.append("    questions: []")
    js_lines.append("  }")
    out_positions.append("\n".join(js_lines))

new_data = (
    "// 岗位数据（19 岗，由 init_db.py 同步生成 + 旧 data.js 保留的 4 岗 24 道情景题）\n"
    "// 同步方法：python sync_data.py\n"
    "window.POSITIONS = [\n"
    + ",\n".join(out_positions)
    + "\n];\n"
)

open("data.js", "w", encoding="utf-8").write(new_data)
print("data.js 已生成：", len(new_data), "字节，含", len(positions), "岗，", len(q_by_id), "岗带 questions")
