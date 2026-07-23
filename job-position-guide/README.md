# 岗位扫盲 · 应届生（部署包 · 纯静态）

面向应届生的「岗位扫盲 + 霍兰德兴趣测试 + 按岗位情景测评」小站。
**纯静态站点，零后端、零构建、零配置即可部署到 Vercel。**

## 部署到 Vercel（3 步，默认设置就行）

1. 把本文件夹的**全部内容**复制到你 GitHub 仓库的根目录（覆盖旧文件，旧的 `demo/` 可删）。
2. 在 Vercel 导入该 GitHub 仓库：
   - Framework Preset：**Other**
   - Root Directory：**`./`（仓库根，保持默认，千万别填 demo）**
   - Build Command / Output Directory：**都留空**
3. 推送后 Vercel 自动部署，打开 `*.vercel.app` 域名即可用。

> ⚠️ 如果你之前在这个 Vercel 项目里把 **Root Directory 设成了 `demo`**，
> 这就是一直 404 / 白屏的原因。两个解决办法（任选其一）：
> - 进 Project Settings → General → **Root Directory 改回 `./`**，Save 后 Redeploy；
> - **最省事、最彻底**：直接删掉这个 Vercel 项目，重新 Import 一次仓库
>   （全新导入默认就是仓库根，绝不会再 404）。

## 压力题 AI 判分（免费、无需 API key）

- **默认就是浏览器端调用 Pollinations 公共接口**：完全免费、不用任何密钥，
  访客打开即用，结果页标注「免费AI（浏览器端）」。
- 接口偶尔慢或限流时，会自动回退到本地规则打分（结果页标注「规则兜底」），
  **测评流程永不中断**。
- 想接你自己更强的大模型后端：在「我的」页填 `SCORE_API` 地址即可（可选，不填也行）。

## 目录结构（全部在仓库根，无需子目录）

```
index.html      ← 站点入口（必须在仓库根）
app.js          ← 主逻辑（含浏览器端免费 AI 判分）
data.js         ← 31 个岗位 + 每岗 24 道情景题
styles.css      ← 样式
theme.js        ← 主题控制面板
bg.jpg / bg.webp ← 背景图
README.md
（其余 .py / .js 为开发/数据脚本，不影响线上运行，可保留也可删）
```

## 本地预览

直接用浏览器打开 `index.html` 即可；或在文件夹内执行：

```bash
python -m http.server 8080
# 浏览器访问 http://127.0.0.1:8080/
```
