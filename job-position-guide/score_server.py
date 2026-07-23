#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
岗位扫盲网站 · 后端服务（多端点，纯标准库）

端点：
  POST /api/score                 压力问答题 AI 判分（兼容旧版）
  GET  /api/positions             列出所有岗位基础信息（来自 SQLite）
  GET  /api/positions/:id         单个岗位详情
  GET  /api/holland/questions     60 道霍兰德测试题
  POST /api/holland/submit        提交 60 题答案，返回 RIASEC + 推荐岗位

启动：
  1) python init_db.py            # 先初始化数据库
  2) python score_server.py       # 启动服务（默认 8787 端口）

配置（可选，写入 .env）：
  LLM_API_KEY                     # 不填则走规则兜底
  LLM_BASE / LLM_MODEL            # 默认 DeepSeek
  DB_PATH                         # 数据库路径（默认同目录 positions.db）
  PORT                            # 默认 8787

自检：python score_server.py selftest
"""
import json
import os
import re
import sqlite3
import sys
import urllib.request
from http.server import BaseHTTPRequestHandler, HTTPServer

# Windows GBK 环境：让 print 支持中文/Unicode
try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

PORT = int(os.environ.get("PORT", "8787"))
HERE = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.environ.get("DB_PATH") or os.path.join(HERE, "positions.db")

# 与 init_db.py 共享逻辑（导入即用，零重复）
from init_db import score_holland, match_positions, POSITIONS, DIM_LABELS  # noqa: E402


# ---------- .env 读取 ----------
def load_env(path):
    if not os.path.exists(path):
        return
    with open(path, encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            k, v = line.split("=", 1)
            k, v = k.strip(), v.strip().strip('"').strip("'")
            os.environ.setdefault(k, v)


# ---------- LLM 配置 ----------
def resolve_config():
    api_key = os.environ.get("LLM_API_KEY") or os.environ.get("DEEPSEEK_API_KEY")
    if api_key:
        os.environ["LLM_API_KEY"] = api_key
    base = os.environ.get("LLM_BASE") or "https://api.deepseek.com/v1"
    model = os.environ.get("LLM_MODEL") or "deepseek-chat"
    return api_key, base.rstrip("/"), model


# ---------- 规则兜底 ----------
def heuristic(text):
    t = (text or "").strip()
    if not t:
        return 20, ""
    keys = ["担责", "负责", "归因", "根因", "复盘", "沟通", "推动", "解决", "对齐",
            "透明", "优先", "用户", "数据", "先认", "拉", "协调", "同步", "方案"]
    hit = sum(1 for k in keys if k in t)
    len_score = min(92, 42 + len(t) // 6)
    kw_score = min(95, 45 + hit * 8)
    return round((len_score + kw_score) / 2), ""


def parse_llm(text):
    if not text:
        return None
    t = text.strip()
    if t.startswith("```"):
        t = re.sub(r"^```[a-zA-Z]*\n?", "", t)
        t = re.sub(r"\n?```$", "", t).strip()
    try:
        return json.loads(t)
    except Exception:
        pass
    m = re.search(r"\{.*\}", t, re.DOTALL)
    if m:
        try:
            return json.loads(m.group(0))
        except Exception:
            return None
    return None


def llm_score(scenario, rubric, answer):
    """返回 (score:int, comment:str)。"""
    api_key, base, model = resolve_config()
    if not api_key:
        return heuristic(answer)
    sys_prompt = (
        "你是一位资深 HR 与职场测评专家，负责给应届生岗位扫盲测评中的「压力情景问答题」打分。"
        "你会拿到：题目场景、该题的【标准处理思路（参考作答）】、以及用户的自由回答。"
        "请判断用户回答与标准思路的契合度，给出 0-100 的整数分，并写一句中文简短点评。"
        "只输出一个 JSON，不要任何多余文字："
        '{"score": <整数0-100>, "comment": "<一句话点评>"}'
    )
    user_prompt = (
        f"【题目场景】{scenario}\n"
        f"【标准处理思路（评分参考）】{rubric}\n"
        f"【用户回答】{answer}\n"
        "请据此打分并给一句话点评，仅输出 JSON。"
    )
    payload = {
        "model": model,
        "messages": [
            {"role": "system", "content": sys_prompt},
            {"role": "user", "content": user_prompt},
        ],
        "temperature": 0.2,
        "response_format": {"type": "json_object"},
    }
    req = urllib.request.Request(
        base + "/chat/completions",
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json", "Authorization": "Bearer " + api_key},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=25) as resp:
            data = json.loads(resp.read().decode("utf-8"))
        content = data["choices"][0]["message"]["content"]
        obj = parse_llm(content)
        if not obj:
            return heuristic(answer)
        score = max(0, min(100, int(float(obj.get("score", 0)))))
        return score, str(obj.get("comment", "")).strip()
    except Exception as e:
        print("[llm_score failed, fallback]", e, file=sys.stderr)
        return heuristic(answer)


# ---------- DB 读 ----------
def db():
    if not os.path.exists(DB_PATH):
        raise FileNotFoundError(
            "Database not found: " + DB_PATH +
            "  -- run: python init_db.py"
        )
    return sqlite3.connect(DB_PATH)


def list_positions():
    conn = db()
    rows = conn.execute("""SELECT id, name, line, jd, fit_for, hard_skills, soft_skills,
                                  industry_notes, taboos, holland_code
                           FROM positions ORDER BY id""").fetchall()
    conn.close()
    out = []
    for r in rows:
        out.append({
            "id": r[0], "name": r[1], "line": r[2], "jd": r[3],
            "fit_for": json.loads(r[4] or "[]"),
            "hard_skills": json.loads(r[5] or "[]"),
            "soft_skills": json.loads(r[6] or "[]"),
            "industry_notes": json.loads(r[7] or "{}"),
            "taboos": json.loads(r[8] or "[]"),
            "holland_code": r[9] or "",
        })
    return out


def get_position(pid):
    conn = db()
    row = conn.execute("""SELECT id, name, line, jd, fit_for, hard_skills, soft_skills,
                                 industry_notes, taboos, holland_code
                          FROM positions WHERE id=?""", (pid,)).fetchone()
    conn.close()
    if not row:
        return None
    return {
        "id": row[0], "name": row[1], "line": row[2], "jd": row[3],
        "fit_for": json.loads(row[4] or "[]"),
        "hard_skills": json.loads(row[5] or "[]"),
        "soft_skills": json.loads(row[6] or "[]"),
        "industry_notes": json.loads(row[7] or "{}"),
        "taboos": json.loads(row[8] or "[]"),
        "holland_code": row[9] or "",
    }


def holland_questions():
    conn = db()
    rows = conn.execute("""SELECT idx, scenario, dimension, reverse
                           FROM holland_questions ORDER BY idx""").fetchall()
    conn.close()
    return [
        {"idx": r[0], "scenario": r[1], "dimension": r[2], "reverse": bool(r[3])}
        for r in rows
    ]


def save_submission(stype, payload, result, user_code=""):
    try:
        conn = db()
        conn.execute("""INSERT INTO submissions (type, user_code, payload, result, ts)
                        VALUES (?,?,?,?,?)""",
                     (stype, user_code, json.dumps(payload, ensure_ascii=False),
                      json.dumps(result, ensure_ascii=False), __import__("time").time()))
        conn.commit()
        conn.close()
    except Exception as e:
        print("[save_submission warn]", e, file=sys.stderr)


# ---------- HTTP ----------
class Handler(BaseHTTPRequestHandler):
    def _cors(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")

    def _json(self, obj, code=200):
        data = json.dumps(obj, ensure_ascii=False).encode("utf-8")
        self.send_response(code)
        self._cors()
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def _err(self, msg, code=400):
        self._json({"error": msg}, code=code)

    def do_OPTIONS(self):
        self.send_response(204)
        self._cors()
        self.end_headers()

    def do_GET(self):
        path = self.path.split("?")[0]
        try:
            if path == "/api/positions":
                self._json({"positions": list_positions()})
                return
            if path == "/api/holland/questions":
                qs = holland_questions()
                self._json({"count": len(qs), "dim_labels": DIM_LABELS, "questions": qs})
                return
            if path == "/api/health":
                self._json({"ok": True, "db": os.path.exists(DB_PATH),
                            "port": PORT, "pid": os.getpid()})
                return
            m = re.match(r"^/api/positions/([A-Za-z0-9_\-]+)$", path)
            if m:
                p = get_position(m.group(1))
                if p:
                    self._json(p)
                else:
                    self._err("position not found", 404)
                return
            self._err("not found", 404)
        except FileNotFoundError as e:
            self._err(str(e), 500)
        except Exception as e:
            print("[GET error]", e, file=sys.stderr)
            self._err("server error: " + str(e), 500)

    def do_POST(self):
        path = self.path.split("?")[0]
        try:
            length = int(self.headers.get("Content-Length", 0))
            body = json.loads(self.rfile.read(length) or b"{}") if length else {}
        except Exception:
            body = {}

        try:
            if path == "/api/score":
                s, c = llm_score(body.get("scenario", ""), body.get("rubric", ""), body.get("answer", ""))
                self._json({"score": s, "comment": c})
                return

            if path == "/api/holland/submit":
                answers = body.get("answers", [])
                if not isinstance(answers, list) or len(answers) != 60:
                    self._err("answers must be a list of 60 ints (0/1/2)", 400)
                    return
                # 答案容错：把任何非 0/1/2 的值归一化为 1
                answers = [2 if int(a) >= 2 else (0 if int(a) <= 0 else 1) for a in answers]
                res = score_holland(answers)
                # 读岗位
                positions = list_positions()
                recs = match_positions(res["code"], positions)
                # 维度中文名
                code_with_names = []
                for d, s in res["top3"]:
                    cn, desc = DIM_LABELS[d]
                    code_with_names.append({"dim": d, "name": cn, "desc": desc, "score": s})
                result = {
                    "scores": res["scores"],
                    "pct": res["pct"],
                    "code": res["code"],
                    "top3": code_with_names,
                    "dim_labels": DIM_LABELS,
                    "recs": recs,
                }
                # 持久化（可选，按需可关）
                save_submission("holland", {"answers": answers}, result, body.get("user_code", ""))
                self._json(result)
                return

            self._err("not found", 404)
        except FileNotFoundError as e:
            self._err(str(e), 500)
        except Exception as e:
            print("[POST error]", e, file=sys.stderr)
            self._err("server error: " + str(e), 500)

    def log_message(self, *args):
        # 静默默认访问日志
        pass


def selftest():
    print("=== selftest ===")
    # 1. 评分
    cases = [
        '{"score": 82, "comment": "ok"}',
        '```json\n{"score": 70, "comment": "fine"}\n```',
        '{"score": "88", "comment": "good"}',
    ]
    for c in cases:
        o = parse_llm(c)
        assert o and "score" in o, "parse fail: " + c
        print("parse OK ->", o)
    s, _ = heuristic("")
    assert s == 20
    print("heuristic empty -> 20 OK")
    # 2. Holland 评分
    ans = [0] * 10 + [2] * 10 + [0] * 10 + [0] * 10 + [2] * 10 + [0] * 10
    res = score_holland(ans)
    assert res["code"].startswith("I") and "E" in res["code"], "user IE expected, got " + res["code"]
    print("holland score_holland ->", res["code"], res["pct"])
    # 3. 匹配
    recs = match_positions(res["code"], POSITIONS)
    assert recs and recs[0]["match"] >= 60, "expect top1>=60, got " + str(recs[0]["match"])
    print("match_positions top1 ->", recs[0]["name"], recs[0]["match"])
    print("=== selftest passed ===")


if __name__ == "__main__":
    if "selftest" in sys.argv:
        selftest()
        sys.exit(0)
    load_env(os.path.join(HERE, ".env"))
    api_key, base, model = resolve_config()
    print(f"score_server 启动于 http://localhost:{PORT}")
    print(f"模型: {model}  ({base})")
    if api_key:
        print(f"已加载 LLM 密钥 → 压力题走真实大模型判分（{model}）")
    else:
        print("未配置 LLM_API_KEY → 压力题走规则兜底（不影响 Holland/positions）")
    if not os.path.exists(DB_PATH):
        print(f"[!] 数据库不存在：{DB_PATH}，先运行：python init_db.py")
    HTTPServer(("127.0.0.1", PORT), Handler).serve_forever()
