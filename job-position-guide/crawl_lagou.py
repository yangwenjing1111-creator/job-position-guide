#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
岗位爬虫模板（拉勾网公开搜索）

⚠️ 重要说明：
  - 拉勾网近年对未登录访问做了严格反爬，匿名直连通常只能拿到首页/搜索页 HTML，
    岗位详情列表多数需登录态或专用 API。本脚本给出两种模式：
      ① 拉勾公开搜索页 HTML 抓取（轻量但可能拿到 0 条）
      ② 拉勾「公开 JSON API」（url 需自行验证，参考下方示例）
  - 任何对真实招聘网站的高频抓取都需遵守 robots.txt 与目标站 ToS，
    请控制抓取频率（默认 QPS<=1）并仅用于个人学习/产品验证。
  - 拉取后请人工 review 抓取结果，去重/合并相似岗位（参考 holland_code 与 jd），
    再用 python import_jobs.py 导入 SQLite。

使用：
  python crawl_lagou.py "前端" --out jobs_frontend.json
  python crawl_lagou.py "产品经理" --city 北京 --pages 3
  python crawl_lagou.py "UI 设计" --json-api        # 走 JSON 端点

输出：每行一个岗位 JSON（JSON Lines 风格），方便逐行追加与去重。
"""
import argparse
import json
import os
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

UA = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/124.0.0.0 Safari/537.36"
)
BASE_HTML = "https://www.lagou.com/jobs/list_{kw}"
BASE_JSON = "https://www.lagou.com/jobs/positionAjax.json"


def fetch(url, headers=None, timeout=15):
    h = {"User-Agent": UA, "Accept-Language": "zh-CN,zh;q=0.9", "Referer": "https://www.lagou.com/"}
    if headers:
        h.update(headers)
    req = urllib.request.Request(url, headers=h, method="GET")
    return urllib.request.urlopen(req, timeout=timeout).read().decode("utf-8", errors="ignore")


def fetch_json(url, payload, headers=None, timeout=15):
    h = {"User-Agent": UA, "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
         "Referer": "https://www.lagou.com/", "X-Requested-With": "XMLHttpRequest"}
    if headers:
        h.update(headers)
    data = urllib.parse.urlencode(payload).encode("utf-8")
    req = urllib.request.Request(url, headers=h, data=data, method="POST")
    return urllib.request.urlopen(req, timeout=timeout).read().decode("utf-8", errors="ignore")


def parse_html_jobs(html, keyword):
    """从公开搜索页 HTML 抓岗位卡片（极简正则，可能因页面改版失效）"""
    jobs = []
    # 拉勾职位卡标题通常出现在 <h3 class="list_item_title"><a ... title="岗位名">岗位名</a>
    # 公司名在 <div class="company_name"><a>...</a>
    # 这里给出最小化版本，真实抓取请用 BeautifulSoup + CSS selector
    blocks = re.findall(r'<div class="list_item_top">.*?</div>\s*</div>', html, re.DOTALL)
    for b in blocks:
        title = re.search(r'title="([^"]+)"', b)
        company = re.search(r'class="company_name"[^>]*>\s*<a[^>]*>([^<]+)</a>', b)
        salary = re.search(r'<span class="money">([^<]+)</span>', b)
        if not title:
            continue
        jobs.append({
            "id": (company.group(1) if company else "") + "::" + title.group(1),
            "name": title.group(1).strip(),
            "company": company.group(1).strip() if company else "",
            "salary": salary.group(1).strip() if salary else "",
            "source": "lagou_html",
            "keyword": keyword,
        })
    return jobs


def crawl_html(keyword, city="", pages=1, sleep=2.0):
    out = []
    for p in range(1, pages + 1):
        kw = urllib.parse.quote(keyword)
        url = BASE_HTML.format(kw=kw) + ("?city=" + urllib.parse.quote(city) if city else "")
        if p > 1:
            url += f"&pn={p}"
        try:
            html = fetch(url)
            jobs = parse_html_jobs(html, keyword)
            print(f"[page {p}] {len(jobs)} 条", file=sys.stderr)
            out.extend(jobs)
        except urllib.error.HTTPError as e:
            print(f"[page {p}] HTTP {e.code}", file=sys.stderr)
        except Exception as e:
            print(f"[page {p}] ERR {e}", file=sys.stderr)
        time.sleep(sleep)
    return out


def crawl_json(keyword, city="", pages=2, sleep=2.0):
    """拉勾 positionAjax 端点（需登录态或风控放行，可能 403）"""
    out = []
    for p in range(1, pages + 1):
        payload = {
            "first": "true" if p == 1 else "false",
            "pn": str(p),
            "kd": keyword,
            "city": city,
        }
        try:
            text = fetch_json(BASE_JSON, payload)
            data = json.loads(text)
            content = data.get("content", {}).get("positionResult", {}).get("result", [])
            for c in content:
                out.append({
                    "id": str(c.get("positionId", "")),
                    "name": c.get("positionName", "").strip(),
                    "company": c.get("companyFullName", "").strip(),
                    "salary": c.get("salary", ""),
                    "city": c.get("city", ""),
                    "experience": c.get("workYear", ""),
                    "education": c.get("education", ""),
                    "source": "lagou_json",
                    "keyword": keyword,
                    "raw_jd": (c.get("positionLables") or []) + [c.get("industryField", "")],
                })
            print(f"[page {p}] {len(content)} 条", file=sys.stderr)
        except urllib.error.HTTPError as e:
            print(f"[page {p}] HTTP {e.code} (可能需登录)", file=sys.stderr)
        except Exception as e:
            print(f"[page {p}] ERR {e}", file=sys.stderr)
        time.sleep(sleep)
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("keyword", help="搜索关键词，如 '前端' / '产品经理'")
    ap.add_argument("--city", default="", help="城市，如 '北京' / '上海'")
    ap.add_argument("--pages", type=int, default=2, help="抓取页数（每页约 15 条）")
    ap.add_argument("--sleep", type=float, default=2.0, help="每页间隔秒（>=1.5 推荐）")
    ap.add_argument("--mode", choices=["html", "json"], default="html", help="抓取模式")
    ap.add_argument("--json-api", action="store_const", const="json", dest="mode", help="同 --mode json")
    ap.add_argument("--out", default="-", help="输出文件，- 表示 stdout")
    args = ap.parse_args()

    if args.mode == "json":
        jobs = crawl_json(args.keyword, args.city, args.pages, args.sleep)
    else:
        jobs = crawl_html(args.keyword, args.city, args.pages, args.sleep)

    fp = sys.stdout if args.out == "-" else open(args.out, "w", encoding="utf-8")
    try:
        for j in jobs:
            fp.write(json.dumps(j, ensure_ascii=False) + "\n")
    finally:
        if fp is not sys.stdout:
            fp.close()
    print(f"=== DONE: {len(jobs)} jobs -> {args.out} ===", file=sys.stderr)


if __name__ == "__main__":
    main()
