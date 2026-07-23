# AI 判分服务接入说明

让 Demo 的压力问答题走**真实大模型判分**（而不是规则兜底）。默认接 **DeepSeek**，也可一键切换通义/智谱/Kimi/OpenAI。

## 1. 准备密钥
1. 注册并获取 API Key：
   - DeepSeek：https://platform.deepseek.com （国内直连、便宜、中文好，默认推荐）
   - 通义千问 / 智谱 / Kimi / OpenAI：见 `.env.example` 注释
2. 把 `demo/.env.example` 复制为 `demo/.env`，填入 `LLM_API_KEY`。

## 2. 启动服务
- **最简单**：双击 `demo/run_score_server.bat`
- 或命令行：`python score_server.py`（需先 `cd demo`）
- 看到 `score_server 启动于 http://localhost:8787/api/score` 即成功

> 没填密钥也能启动，只是压力题走规则兜底，方便先验证链路。

## 3. 在网站里启用
打开 `demo/index.html` → 首页点开 **⚙ AI 判分服务设置** → 填入
`http://localhost:8787/api/score` → 保存。
之后做任何岗位的压力问答题，都会把「你的回答 + 该题正确思路」发给模型，返回真实分数与点评。

## 4. 换其它模型
编辑 `.env`，设 `LLM_BASE` 与 `LLM_MODEL`（示例见 `.env.example`），重启服务即可。

## 5. 自检（可选）
```
python score_server.py selftest
```
验证 JSON 解析与兜底逻辑正常。

## 原理
- 前端 `app.js` 在压力题提交时，若检测到判分服务地址，会 `POST` `{scenario, rubric, answer}`。
- 后端用 OpenAI 兼容接口调用模型，要求返回 `{"score":0-100, "comment":"…"}`，健壮解析（兼容代码块/混杂文字），异常自动回退规则兜底。
- 模型依据每题的「正确思路(rubric)」打分，结果页展示：你的回答 / AI 评分 / 正确思路。
