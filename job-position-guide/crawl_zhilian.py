#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
智联招聘爬虫（公开搜索页 HTML 抓取，无强反爬）

智联公开搜索页（sou.zhaopin.com）通常可直接抓取，无需登录/cookie。
本脚本用纯标准库解析（urllib + re），零第三方依赖。

⚠️ 合规说明：
  - 本脚本仅用于个人学习/产品验证
  - 抓取频率默认 QPS<=0.5（每页 2.5 秒），请勿高频刷
  - 抓取结果请人工 review 与去重再入业务库
  - 仅抓取公开展示的岗位卡片信息，不绕过任何登录/付费墙

使用：
  python crawl_zhilian.py "前端开发" --city 北京 --pages 3
  python crawl_zhilian.py "产品经理" --city 上海 --out jobs_pm.json

输出：每行一个岗位 JSON（JSON Lines），字段：
  id          临时 id（公司+职位哈希）
  name        职位名
  company     公司名
  salary      薪资原文
  city        工作城市
  experience  经验要求
  education   学历要求
  tags        职位标签列表（最多 6 个）
  url         详情页 URL
  source      固定为 "zhilian"
  keyword     搜索关键词

抓取后导入：python import_jobs.py jobs_xxx.json
"""
import argparse
import hashlib
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

# 智联公开搜索页（旧版更稳定）
SEARCH_URL = "https://sou.zhaopin.com/jobs/searchresult.ashx"
# 备选新版（页面改版时尝试）
SEARCH_URL_V2 = "https://www.zhaopin.com/web/geek/job"

CITY_MAP = {
    "北京": "530", "上海": "538", "广州": "763", "深圳": "765",
    "杭州": "653", "成都": "801", "武汉": "736", "南京": "635",
    "西安": "854", "苏州": "639", "天津": "531", "重庆": "753",
    "厦门": "682", "长沙": "749", "青岛": "622", "济南": "702",
    "郑州": "719", "合肥": "667",
}


# ---------- HTTP ----------
def fetch(url, headers=None, timeout=15, max_retries=2):
    h = {
        "User-Agent": UA,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    }
    if headers:
        h.update(headers)
    last_err = None
    for i in range(max_retries + 1):
        try:
            req = urllib.request.Request(url, headers=h, method="GET")
            with urllib.request.urlopen(req, timeout=timeout) as resp:
                data = resp.read()
                # 智联新页可能 gbk
                try:
                    return data.decode("utf-8")
                except UnicodeDecodeError:
                    try:
                        return data.decode("gbk")
                    except Exception:
                        return data.decode("utf-8", errors="ignore")
        except urllib.error.HTTPError as e:
            last_err = "HTTP " + str(e.code)
            if e.code in (403, 429):
                time.sleep(2 + i * 2)
        except Exception as e:
            last_err = str(e)
            time.sleep(1)
    raise RuntimeError("fetch failed: " + (last_err or "?") + " " + url)


# ---------- 解析（纯正则，按职位名 anchor 切分） ----------
def split_cards(html):
    """
    按 <a class="...jobname..." title="职位名">职位名</a> 切分 HTML。
    智联搜索页每个职位名 anchor 是一张卡片的稳定锚点。
    """
    pattern = re.compile(
        r'<a[^>]*class="[^"]*\bjobname\b[^"]*"[^>]*title="([^"]+)"',
        re.IGNORECASE
    )
    matches = list(pattern.finditer(html))
    if not matches:
        return []
    cards = []
    for i, m in enumerate(matches):
        start = m.start()
        end = matches[i + 1].start() if i + 1 < len(matches) else min(start + 2000, len(html))
        chunk = html[start:end]
        text = re.sub(r"<[^>]+>", " ", chunk)
        text = re.sub(r"\s+", " ", text).strip()
        cards.append({"name": m.group(1).strip(), "text": text, "html": chunk})
    return cards


def extract_jobs_from_html(html, keyword):
    """从 HTML 中抽取职位卡片，提取结构化字段。"""
    cards = split_cards(html)
    jobs = []
    for card in cards:
        name = card["name"]
        text = card["text"]
        # 薪资：覆盖常见格式
        m_sal = re.search(
            r"(\d+(?:\.\d+)?\s*[-~到至]\s*\d+(?:\.\d+)?\s*[kKwW万]|\d+[-~]\d+\s*元[/日]|\d+\s*[kKwW万]\s*[-~]\s*\d+\s*[kKwW万]|面议)",
            text,
        )
        salary = m_sal.group(1).replace(" ", "") if m_sal else ""
        # 公司：贪婪匹配到第一个结尾词
        m_co = re.search(
            r"([\u4e00-\u9fa5A-Za-z·（）()0-9\-\.]{2,40}(?:公司|集团|科技|有限|股份|银行|事务所|医院|学校|学院))",
            text,
        )
        company = m_co.group(1).strip() if m_co else ""
        # 经验 / 学历
        experience = ""
        m_exp = re.search(r"(\d+[-~]\d+年|\d+年以上|应届|在校生|无经验|经验不限|不限)", text)
        if m_exp:
            experience = m_exp.group(1)
        education = ""
        for ed in ["博士", "硕士", "本科", "大专", "高中", "中专", "学历不限"]:
            if ed in text:
                education = ed
                break
        # 详情页 URL
        m_url = re.search(r'href="(https?://[^\"]+)"', card["html"])
        url = m_url.group(1) if m_url else ""
        # 标签（去掉职位名/公司/数字/学历/经验）
        words = re.findall(r"[\u4e00-\u9fa5A-Za-z]{2,10}", text)
        skip = {name, company, salary, experience, education}
        tags = []
        for w in words:
            if w in skip or not w:
                continue
            if w in ("经验", "以上", "应届", "在校", "五险", "一金", "周末", "双休", "六险"):
                continue
            if w not in tags:
                tags.append(w)
            if len(tags) >= 6:
                break
        # id
        key = (company + "::" + name).encode("utf-8")
        pid = hashlib.md5(key).hexdigest()[:12]
        jobs.append({
            "id": pid,
            "name": name,
            "company": company,
            "salary": salary,
            "city": "",
            "experience": experience,
            "education": education,
            "tags": tags,
            "url": url,
            "source": "zhilian",
            "keyword": keyword,
        })
    # 去重
    seen = set()
    out = []
    for j in jobs:
        if j["name"] in seen:
            continue
        seen.add(j["name"])
        out.append(j)
    return out


# ---------- 抓取主流程 ----------
def crawl(keyword, city="", pages=2, sleep=2.5):
    city_code = CITY_MAP.get(city, "")
    out = []
    for p in range(1, pages + 1):
        params = {"jl": city_code, "kw": keyword, "p": p}
        url = SEARCH_URL + "?" + urllib.parse.urlencode(params)
        print(f"[page {p}] GET {url[:90]}...", file=sys.stderr)
        try:
            html = fetch(url)
            jobs = extract_jobs_from_html(html, keyword)
            for j in jobs:
                j["city"] = city or ""
            print(f"[page {p}] got {len(jobs)} jobs", file=sys.stderr)
            out.extend(jobs)
        except Exception as e:
            print(f"[page {p}] ERR {e}", file=sys.stderr)
        time.sleep(sleep)
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("keyword", help="搜索关键词，如 '前端开发' / '产品经理'")
    ap.add_argument("--city", default="北京", help="城市（中文），如 '北京' / '上海' / '深圳'")
    ap.add_argument("--pages", type=int, default=2, help="抓取页数（每页约 60 条）")
    ap.add_argument("--sleep", type=float, default=2.5, help="每页间隔秒（>=2 推荐）")
    ap.add_argument("--out", default="-", help="输出文件，- 表示 stdout")
    args = ap.parse_args()

    jobs = crawl(args.keyword, args.city, args.pages, args.sleep)

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
