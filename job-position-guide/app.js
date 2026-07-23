(function () {
  "use strict";
  var app = document.getElementById("app");
  var P = window.POSITIONS || [];
  var qs = null; // 岗位测评状态
  var hs = null; // Holland 测试状态
  window.SCORE_API = sget("scoreApiUrl") || window.SCORE_API || "";
  var DEFAULT_RUBRIC =
    "评估回答是否展现出：主动担责不甩锅、理性拆解问题根因、推动具体解决动作、沟通透明。按契合度给 0-100 分，并附一句简短点评。";

  /* ---------- 60 道霍兰德职业兴趣测试题（前端嵌入；后端 init_db.py 保持一致） ---------- */
  /* 维度：R 现实型 / I 研究型 / A 艺术型 / S 社会型 / E 企业型 / C 常规型 */
  var HOLLAND = [
    /* R 现实型 */ "我喜欢动手操作工具或机械类物品。","我喜欢修理电器、家具等实物让它们重新工作。","我愿意在户外做体力或操作类的工作。","我喜欢按说明书一步步组装/拆解物品。","我偏好具体明确的任务，而不是抽象讨论。","我喜欢用双手解决看得见、摸得着的问题。","我愿意从事农业、林业、建筑、施工类工作。","我喜欢做能立刻看到结果的事情。","我对设备操作、机械原理感兴趣。","我喜欢制作类手工（木工/烹饪/种植等）。",
    /* I 研究型 */ "我喜欢研究问题背后的原理和原因。","我喜欢做实验、整理数据并发现规律。","我喜欢阅读学术、科普或深度分析类内容。","我对未知事物充满好奇，喜欢刨根问底。","我喜欢解数学题、逻辑题或推理题。","我喜欢独立思考复杂、抽象的问题。","我喜欢寻找现象背后的原因并形成理论。","我倾向于用数据和逻辑做判断而非直觉。","我喜欢研究新技术、新方法并尝试应用。","我愿意做长期深入、需要专注的研究类工作。",
    /* A 艺术型 */ "我喜欢创作艺术作品（绘画/写作/音乐/设计等）。","我喜欢有创意的、不拘一格的工作方式。","我对美学、风格、色彩有较高敏感度。","我喜欢表达自己的想法、情感或观点。","我愿意尝试新的表达形式或媒介。","我讨厌一成不变、重复刻板的工作。","我喜欢自由度比较高的工作安排。","我对色彩、形状、声音、文字都敏感。","我喜欢开放式、没有标准答案的问题。","我愿意从事艺术、媒体、设计、影视类工作。",
    /* S 社会型 */ "我喜欢帮助他人解决困难或答疑解惑。","我喜欢和人打交道、合作或交流。","我愿意做志愿者、公益或社区类工作。","我喜欢教别人做事、分享知识。","我对他人的情绪、关系比较敏感。","我愿意倾听他人倾诉并给建议。","我喜欢团队合作胜过单打独斗。","我愿意做医生、教师、咨询、社工类工作。","我关心社会议题并愿意参与讨论。","我觉得为他人服务是有意义的事。",
    /* E 企业型 */ "我喜欢领导团队完成目标、做出决策。","我喜欢说服、影响他人接受我的想法。","我有强烈的好胜心和进取心。","我敢于决策并愿意承担相应风险。","我愿意从事商业、销售、管理类工作。","我享受竞争性、有挑战的环境。","我追求成就感、影响力和社会地位。","我喜欢制定计划并推动他人执行。","我擅长说服别人接受我的观点。","我愿意做创业者、管理者、销售或律师。",
    /* C 常规型 */ "我喜欢有明确规则和流程的工作。","我喜欢整理、归档、记录信息。","我做事仔细、有条理、喜欢清单和表格。","我喜欢按部就班的常规任务。","我对数字、日期、数据敏感。","我喜欢做表格、文档、行政事务类工作。","我愿意做会计、文员、秘书、档案员类工作。","我注重细节和准确性，不喜欢出错。","我偏好稳定、可预测的工作节奏。","我喜欢在结构化、有规范的环境中工作。"
  ];
  var HOLLAND_DIMS = ["R","R","R","R","R","R","R","R","R","R","I","I","I","I","I","I","I","I","I","I","A","A","A","A","A","A","A","A","A","A","S","S","S","S","S","S","S","S","S","S","E","E","E","E","E","E","E","E","E","E","C","C","C","C","C","C","C","C","C","C"];
  var HOLLAND_LABELS = {
    R: { name: "现实型", desc: "动手 / 操作 / 机械" },
    I: { name: "研究型", desc: "分析 / 思考 / 研究" },
    A: { name: "艺术型", desc: "创造 / 表达 / 艺术" },
    S: { name: "社会型", desc: "帮助 / 人际 / 教学" },
    E: { name: "企业型", desc: "领导 / 说服 / 销售" },
    C: { name: "常规型", desc: "组织 / 数据 / 规则" }
  };

  /* ---------- 存储（file:// 退回内存） ---------- */
  var memStore = {};
  function sget(k) { try { return localStorage.getItem(k); } catch (e) { return memStore[k] != null ? memStore[k] : null; } }
  function sset(k, v) { try { localStorage.setItem(k, v); } catch (e) { memStore[k] = v; } }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }
  function getPos(id) { for (var i = 0; i < P.length; i++) if (P[i].id === id) return P[i]; return null; }
  function clamp(v) { return Math.max(0, Math.min(100, v)); }

  /* ---------- 图标库（细线 1.5 stroke） ---------- */
  function icon(name) {
    var a = 'fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"';
    var m = {
      back: '<polyline points="13 5 7 10 13 15"/>',
      forward: '<polyline points="7 4 13 10 7 16"/>',
      home: '<path d="M3 9.5L10 3.5l7 6V16a1 1 0 01-1 1h-3v-5h-6v5H4a1 1 0 01-1-1V9.5z"/>',
      pen: '<path d="M4 16l3-1 9-9-2-2-9 9-1 3z"/><path d="M13 4l3 3"/>',
      chart: '<line x1="4" y1="16" x2="4" y2="11"/><line x1="10" y1="16" x2="10" y2="6"/><line x1="16" y1="16" x2="16" y2="9"/>',
      user: '<circle cx="10" cy="7" r="3.2"/><path d="M3.5 17a6.5 6.5 0 0113 0"/>',
      settings: '<circle cx="10" cy="10" r="2.6"/><path d="M10 2.5v2M10 15.5v2M17.5 10h-2M4.5 10h-2M15.3 4.7l-1.4 1.4M6.1 13.9l-1.4 1.4M15.3 15.3l-1.4-1.4M6.1 6.1L4.7 4.7"/>',
      plus: '<line x1="10" y1="4" x2="10" y2="16"/><line x1="4" y1="10" x2="16" y2="10"/>',
      check: '<polyline points="4 10 8.5 14.5 16 6.5"/>',
      info: '<circle cx="10" cy="10" r="7.4"/><line x1="10" y1="9" x2="10" y2="14.5"/><circle cx="10" cy="6.3" r="0.7" fill="currentColor" stroke="none"/>',
      warning: '<path d="M10 3l8 14H2L10 3z"/><line x1="10" y1="9" x2="10" y2="13"/><circle cx="10" cy="15.6" r="0.7" fill="currentColor" stroke="none"/>',
      briefcase: '<rect x="3" y="6" width="14" height="10" rx="1.5"/><path d="M7 6V4.5a1 1 0 011-1h4a1 1 0 011 1V6"/><line x1="3" y1="11" x2="17" y2="11"/>',
      compass: '<circle cx="10" cy="10" r="7"/><polygon points="10,4.2 12,10 10,12 8,10"/><circle cx="10" cy="10" r="0.8" fill="currentColor" stroke="none"/>',
      code: '<polyline points="7.5,7 4,10 7.5,13"/><polyline points="12.5,7 16,10 12.5,13"/><line x1="11.5" y1="6" x2="8.5" y2="14"/>',
      penTool: '<path d="M3 17L13 7l3 3L6 20H3v-3z"/><line x1="12" y1="5" x2="15" y2="8"/><circle cx="14" cy="6" r="1.1" fill="currentColor" stroke="none"/>',
      mega: '<path d="M3 9h2l6-4v10L5 11H3z"/><path d="M14 7.5a3 3 0 010 5"/><path d="M16 5a6 6 0 010 10"/>',
      bag: '<path d="M5 8h10l-1 9H6L5 8z"/><path d="M8 8V6a2 2 0 014 0v2"/><line x1="9" y1="12" x2="11" y2="12"/>',
      badge: '<rect x="3" y="5" width="14" height="10" rx="1.5"/><circle cx="7.5" cy="10" r="1.4"/><line x1="10.5" y1="9" x2="15" y2="9"/><line x1="10.5" y1="11" x2="13.5" y2="11"/><line x1="10" y1="3" x2="10" y2="5"/>',
      chevR: '<polyline points="7 4 13 10 7 16"/>',
      arrowR: '<line x1="4" y1="10" x2="16" y2="10"/><polyline points="11 5 16 10 11 15"/>',
      calendar: '<rect x="3.5" y="4.5" width="13" height="13" rx="1.5"/><line x1="3.5" y1="8" x2="16.5" y2="8"/><line x1="7" y1="2.5" x2="7" y2="5"/><line x1="13" y1="2.5" x2="13" y2="5"/>',
      book: '<path d="M4 5.5C4 4.7 4.7 4 5.5 4H9v13H5.5C4.7 17 4 16.3 4 15.5V5.5z"/><path d="M16 5.5C16 4.7 15.3 4 14.5 4H11v13h3.5c0.8 0 1.5-0.7 1.5-1.5V5.5z"/>',
      globe: '<circle cx="10" cy="10" r="7"/><line x1="3" y1="10" x2="17" y2="10"/><path d="M10 3c2 2 3 4.5 3 7s-1 5-3 7c-2-2-3-4.5-3-7s1-5 3-7z"/>',
      heart: '<path d="M10 16S3.5 11.5 3.5 7.5A3.5 3.5 0 0110 5a3.5 3.5 0 016.5 2.5C16.5 11.5 10 16 10 16z"/>',
      film: '<rect x="3" y="4.5" width="14" height="11" rx="1.5"/><line x1="6.5" y1="4.5" x2="6.5" y2="15.5"/><line x1="13.5" y1="4.5" x2="13.5" y2="15.5"/><line x1="3" y1="10" x2="17" y2="10"/>',
      archive: '<rect x="3.5" y="5" width="13" height="3.5" rx="1"/><path d="M4.5 8.5V15a1 1 0 001 1h9a1 1 0 001-1V8.5"/><line x1="8" y1="11.5" x2="12" y2="11.5"/>',
      handshake: '<path d="M3 11l3.2-3.2 3.3 3.2M17 11l-3.2-3.2-3.3 3.2"/><path d="M6.2 11v4a1 1 0 001 1h5.6a1 1 0 001-1v-4"/>'
    };
    return '<svg viewBox="0 0 20 20" width="18" height="18" ' + a + '>' + (m[name] || "") + "</svg>";
  }

  /* 各岗位的代表性图标 */
  function posIcon(id) {
    var m = {
      pm: "compass", fe: "code", ui: "penTool", op: "mega", sales: "bag", hr: "badge",
      copywriter: "pen", journalist: "pen", editor: "book", translator: "globe",
      guide: "globe", bd: "handshake", pr: "mega", event: "calendar", ngo: "heart",
      ip: "film", screenwriter: "film", archivist: "archive"
    };
    return icon(m[id] || "briefcase");
  }

  function loadAnswers(id) { var r = sget("quiz_" + id); if (r) return JSON.parse(r); return null; }
  function saveAnswers(id, a) { sset("quiz_" + id, JSON.stringify(a)); }
  function loadHistory() { var r = sget("assess_history"); if (r) return JSON.parse(r); return []; }
  function pushHistory(rec) { var h = loadHistory(); h.push(rec); sset("assess_history", JSON.stringify(h)); }

  /* ---------- 通用：顶部 + tabbar ---------- */
  function topbar(title, backHref, rightHtml) {
    var back = backHref
      ? '<a class="back" href="' + backHref + '">' + icon("back") + "</a>"
      : '<span class="back" style="visibility:hidden">' + icon("back") + "</span>";
    var right = rightHtml || '<span class="right" style="visibility:hidden"></span>';
    return '<div class="topbar">' + back + '<span class="title">' + esc(title) + "</span>" + right + "</div>";
  }
  function tabbar(active) {
    var items = [
      { k: "home",    n: "首页", href: "#/",            i: "home" },
      { k: "quiz",    n: "测评", href: "#/p/pm/quiz",   i: "pen" },
      { k: "history", n: "记录", href: "#/history",     i: "chart" },
      { k: "mine",    n: "我的", href: "#/mine",        i: "user" }
    ];
    var html = '<nav class="tabbar">';
    items.forEach(function (t) {
      html += '<a class="tab' + (t.k === active ? " active" : "") + '" href="' + t.href + '">' +
        icon(t.i) + "<span>" + t.n + "</span></a>";
    });
    return html + "</nav>";
  }
  function activeTab() {
    var h = location.hash || "#/";
    if (h.indexOf("/quiz") >= 0) return "quiz";
    if (h === "#/history" || h.indexOf("/result") >= 0) return "history";
    if (h === "#/mine") return "mine";
    return "home";
  }
  /* ---------- toast ---------- */
  function toast(msg) {
    var old = document.getElementById("__toast"); if (old) old.remove();
    var t = document.createElement("div");
    t.id = "__toast"; t.className = "toast"; t.textContent = msg;
    document.getElementById("app").appendChild(t);
    setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 1600);
  }

  /* ---------- 首页 ---------- */
  function home() {
    var scroller = P.map(function (p, idx) {
      return (
        '<a class="poscard' + (idx > 0 ? " dim" : "") + '" href="#/p/' + p.id + '">' +
        '<div class="arrow">' + icon("arrowR") + "</div>" +
        '<div class="icn">' + posIcon(p.id) + "</div>" +
        '<div><h3>' + esc(p.name) + "</h3>" +
        '<div class="line">' + esc(p.line || p.jd.slice(0, 18)) + "</div></div></a>"
      );
    }).join("");

    var list = P.map(function (p) {
      return (
        '<a class="row" href="#/p/' + p.id + '">' +
        '<div class="ic">' + posIcon(p.id) + "</div>" +
        '<div class="info"><div class="n">' + esc(p.name) + '</div><div class="l">' + esc(p.line || p.jd.slice(0, 24)) + "</div></div>" +
        '<div class="chev">' + icon("chevR") + "</div></a>"
      );
    }).join("");

    app.innerHTML =
      topbar("岗位扫盲", null, '<a class="right" href="#/history">' + icon("chart") + "</a>") +
      '<section class="hero">' +
      "<h1>找到你的<br/>职业兴趣方向</h1>" +
      "<p>用霍兰德职业兴趣测试（RIASEC），算出你的兴趣代码，再看适合的岗位。</p>" +
      '<a class="cta" href="#/holland">开始职业兴趣测试 ' + icon("arrowR") + "</a>" +
      '<div style="margin-top:12px;font-size:12.5px;opacity:.85">或 <a href="#/p/pm/quiz" style="color:#fff;text-decoration:underline;font-weight:600">按岗位深入测评 →</a></div>' +
      "</section>" +
      '<div class="sec"><h2>岗位一览 <span class="more">横向滑动 ' + icon("chevR") + "</span></h2></div>" +
      '<div class="scroller">' + scroller + "</div>" +
      '<div class="sec"><h2>全部岗位 <span class="more">共 ' + P.length + " 个</span></h2></div>" +
      '<div class="list">' + list + "</div>";
    document.body.insertAdjacentHTML("beforeend", tabbar(activeTab()));
  }

  /* ---------- 岗位详情 ---------- */
  function detail(p) {
    var fit = p.fitFor.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("");
    var hard = p.hardSkills.map(function (x) { return '<span class="tag">' + esc(x) + "</span>"; }).join("");
    var soft = p.softSkills.map(function (x) { return '<span class="tag soft">' + esc(x) + "</span>"; }).join("");
    var ind = Object.keys(p.industryNotes).map(function (k) {
      return '<div class="ind"><b>' + esc(k) + "</b><span>" + esc(p.industryNotes[k]) + "</span></div>";
    }).join("");
    var tab = p.taboos.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("");
    var hasQ = p.questions && p.questions.length > 0;
    var actions = hasQ
      ? '<div class="actions"><a class="btn primary" href="#/p/' + p.id + '/quiz">开始情景测评 ' + icon("arrowR") + "</a></div>"
      : '<div class="actions"><span class="btn ghost" style="flex:1;text-align:center;opacity:.7">情景测评待上线</span></div>';
    app.innerHTML =
      topbar(p.name, "#/", '<a class="right" href="#/history">' + icon("chart") + "</a>") +
      '<div class="blocks">' +
      '<div class="block soft"><h2><span class="num">01</span>JD 简述</h2><p>' + esc(p.jd) + "</p></div>" +
      '<div class="block"><h2><span class="num">02</span>适合人群</h2><ul>' + fit + "</ul></div>" +
      '<div class="block"><h2><span class="num">03</span>硬实力 · 要会的技术/工具</h2><div class="tags">' + hard + "</div></div>" +
      '<div class="block"><h2><span class="num">04</span>软实力 · 要成为的人</h2><div class="tags">' + soft + "</div></div>" +
      '<div class="block"><h2><span class="num">05</span>同岗位 · 不同行业差异点</h2><div class="inds">' + ind + "</div></div>" +
      '<div class="block"><h2><span class="num">06</span>0基础快速补齐 · 转行竞争力</h2><ul>' + tab + "</ul></div>" +
      '<div class="block"><h2><span class="num">07</span>Holland 适配代码</h2>' +
      '<p class="read">该岗位的兴趣适配代码：<b style="font-family:var(--font-mono);color:var(--blue);font-weight:800">' + esc(p.hollandCode || "-") + '</b>（对照霍兰德 RIASEC 六维：现实/研究/艺术/社会/企业/常规）</p></div>' +
      "</div>" +
      actions;
    document.body.insertAdjacentHTML("beforeend", tabbar(activeTab()));
  }

  /* ---------- 测评 ---------- */
  function quiz(p) {
    if (!qs || qs.posId !== p.id) qs = { posId: p.id, idx: 0, answers: new Array(p.questions.length).fill(null), scoring: false, draft: {} };
    var i = qs.idx, q = p.questions[i], total = p.questions.length;
    var pct = Math.round((i) / total * 100);

    var body;
    if (q.type === "压力") {
      var val = qs.draft[i] || "";
      body =
        '<textarea id="ans" class="ans" placeholder="写下你会怎么应对（尽量具体，越真实越准）…">' + esc(val) + "</textarea>" +
        (qs.scoring ? '<p class="hint" style="text-align:center;margin:8px 0 0">AI 评分中…</p>' : "") +
        '<button class="btn primary subbtn" onclick="window.__submitOpen()"' + (qs.scoring ? " disabled" : "") + ">提交回答并继续 " + icon("arrowR") + "</button>";
    } else {
      body = q.options.map(function (o, oi) {
        var sel = qs.answers[i] === oi ? " sel" : "";
        return (
          '<button class="opt' + sel + '" onclick="window.__sel(' + i + "," + oi + ')">' +
          '<span class="ok">' + String.fromCharCode(65 + oi) + "</span><span>" + esc(o.text) + "</span></button>"
        );
      }).join("");
    }

    var prevBtn = i > 0 ? '<button class="btn ghost" onclick="window.__prev()">上一题</button>' : '<span style="flex:1"></span>';

    var qhint = q.type === "压力" ? "" :
      '<p class="qhint">选择你<strong>最可能会做</strong>的选项，而不是你觉得“正确”的选项。</p>';

    app.innerHTML =
      topbar(q.type, "#/p/" + p.id, '<a class="right" href="#/history">' + icon("chart") + "</a>") +
      '<div class="quiz">' +
      '<div class="bar"><div class="fill" style="width:' + pct + '%"></div></div>' +
      '<div class="qtype' + (q.type === "压力" ? " pressure" : "") + '"><span>' + (q.type === "压力" ? "压力·问答" : esc(q.type)) + '</span><span class="qpos">' + (i + 1) + " / " + total + "</span></div>" +
      qhint +
      '<p class="scene">' + esc(q.scenario) + "</p>" +
      '<div class="opts">' + body + "</div>" +
      '<div class="qactions">' + prevBtn + "</div>" +
      "</div>";
    document.body.insertAdjacentHTML("beforeend", tabbar(activeTab()));
  }

  window.__sel = function (i, oi) {
    var p = getPos(qs.posId);
    qs.answers[i] = oi; quiz(p);
    var startIdx = i;
    setTimeout(function () {
      if (qs.idx !== startIdx) return; // 用户已手动翻页，不抢跳
      if (startIdx < p.questions.length - 1) { qs.idx++; quiz(p); }
      else { finish(p); }
    }, 300);
  };
  window.__submitOpen = function () {
    var ta = document.getElementById("ans"); if (!ta) return;
    var text = ta.value.trim(); if (!text) { ta.focus(); return; }
    var p = getPos(qs.posId), i = qs.idx;
    qs.draft[i] = text; qs.scoring = true; quiz(p);
    scoreOpen(p, i, text).then(function (res) {
      qs.answers[i] = { score: res.score, text: text, comment: res.comment || "" };
      qs.scoring = false;
      if (qs.idx !== i) return; // 用户已手动翻页，不抢跳
      if (i < p.questions.length - 1) { qs.idx++; quiz(p); }
      else { finish(p); }
    });
  };
  window.__prev = function () { var p = getPos(qs.posId); if (qs.idx > 0) { qs.idx--; quiz(p); } };
  window.__saveApi = function () {
    var inp = document.getElementById("scoreApiInput"); if (!inp) return;
    var v = inp.value.trim();
    sset("scoreApiUrl", v); window.SCORE_API = v;
    toast(v ? "已保存 · 压力题将走真实 AI 判分" : "已清空 · 压力题改用规则兜底");
  };

  function finish(p) {
    var sc = score(p, qs.answers);
    pushHistory({ id: p.id, name: p.name, composite: sc.composite, D1: sc.D1, D2: sc.D2, D3: sc.D3, ts: Date.now() });
    saveAnswers(p.id, qs.answers);
    location.hash = "#/p/" + p.id + "/result";
  }

  // 是否使用了用户自建后端（非默认的免费浏览器端判分）
  function usingCustomApi() { return !!window.SCORE_API && window.SCORE_API !== "/api/score"; }

  // 免费、免 API key 的浏览器端判分（Pollinations 公共接口，支持 CORS）
  function scorePollinations(payload) {
    var prompt = "你是资深招聘面试官。请评估候选人的回答。\n【情境】" + payload.scenario +
      "\n【评分要点】" + payload.rubric +
      "\n【候选人回答】" + payload.answer +
      "\n请严格按以下格式只输出两行：\n分数：<0到100的整数>\n点评：<一句中文简短点评>";
    var url = "https://text.pollinations.ai/" + encodeURIComponent(prompt);
    return fetch(url, { method: "GET", mode: "cors" })
      .then(function (r) { if (!r.ok) throw new Error("bad"); return r.text(); })
      .then(function (txt) {
        var sc = 60, cm = "";
        var m = txt.match(/分数[:：]\s*(\d{1,3})/);
        if (m) sc = clamp(Number(m[1]));
        var c = txt.match(/点评[:：]\s*(.+)/);
        if (c) cm = c[1].trim();
        return { score: sc, comment: cm, source: "免费AI" };
      });
  }

  function scoreOpen(p, i, text) {
    var q = p.questions[i];
    var payload = { scenario: q.scenario, rubric: q.reference || DEFAULT_RUBRIC, answer: text };
    if (usingCustomApi()) {
      return fetch(window.SCORE_API, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })
        .then(function (r) { return r.json(); })
        .then(function (d) { return { score: clamp(Number(d.score) || 0), comment: d.comment || "", source: "已接AI" }; })
        .catch(function () { return { score: heuristic(text), comment: "", source: "规则兜底" }; });
    }
    // 默认：浏览器端免费 AI 判分（无后端、无 key）
    return scorePollinations(payload)
      .catch(function () { return { score: heuristic(text), comment: "", source: "规则兜底" }; });
  }
  function heuristic(text) {
    var t = (text || "").trim();
    if (!t) return 20;
    var keys = ["担责", "负责", "归因", "根因", "复盘", "沟通", "推动", "解决", "对齐", "透明", "优先", "用户", "数据", "先认", "拉"];
    var hit = 0; keys.forEach(function (k) { if (t.indexOf(k) >= 0) hit++; });
    var lenScore = Math.min(92, 42 + Math.floor(t.length / 6));
    var kwScore = Math.min(95, 45 + hit * 8);
    return Math.round((lenScore + kwScore) / 2);
  }

  /* ---------- 评分 ---------- */
  function score(p, answers) {
    var s = { D1: 0, D2: 0, D3: 0 }, c = { D1: 0, D2: 0, D3: 0 };
    p.questions.forEach(function (q, i) {
      var dim = q.type === "日常" ? "D1" : q.type === "压力" ? "D2" : "D3";
      c[dim]++;
      var a = answers[i]; if (a == null) return;
      var sc;
      if (typeof a === "object" && a.score != null) sc = a.score;
      else if (typeof a === "number") sc = q.options[a].score[dim];
      if (typeof sc === "number") s[dim] += sc;
    });
    var D1 = c.D1 ? clamp((s.D1 / (10 * c.D1)) * 100) : 0;
    var D2 = c.D2 ? clamp(s.D2 / c.D2) : 0;
    var D3 = c.D3 ? clamp((s.D3 / (10 * c.D3)) * 100) : 0;
    var composite = Math.round(0.4 * D1 + 0.35 * D2 + 0.25 * D3);
    return { D1: Math.round(D1), D2: Math.round(D2), D3: Math.round(D3), composite: composite };
  }
  function band(c) {
    if (c >= 80) return { t: "强烈推荐", d: "这个岗位和你高度契合，可以重点投。", cls: "good" };
    if (c >= 60) return { t: "较匹配", d: "整体合适，留意短板维度再决定是否投。", cls: "ok" };
    if (c >= 40) return { t: "需谨慎", d: "匹配度一般，建议先做更多了解或实习验证。", cls: "warn" };
    return { t: "大概率不合适", d: "当前画像和这个岗位差距较大，慎重考虑。", cls: "bad" };
  }
  function radar(D1, D2, D3) {
    var cx = 120, cy = 120, R = 90;
    var ang = [-90, 30, 150].map(function (d) { return d * Math.PI / 180; });
    function pt(v, a) { return [cx + (v / 100 * R) * Math.cos(a), cy + (v / 100 * R) * Math.sin(a)]; }
    function ring(f) {
      var ps = ang.map(function (a) { return pt(100 * f, a).map(function (n) { return n.toFixed(1); }).join(","); }).join(" ");
      return '<polygon class="ring" points="' + ps + '"/>';
    }
    var axis = ang.map(function (a) { var x = pt(100, a); return '<line class="axis" x1="' + cx + '" y1="' + cy + '" x2="' + x[0].toFixed(1) + '" y2="' + x[1].toFixed(1) + '"/>'; }).join("");
    var data = ang.map(function (a, i) { return pt([D1, D2, D3][i], a).map(function (n) { return n.toFixed(1); }).join(","); }).join(" ");
    var labels = [["日常", D1], ["压力", D2], ["发展", D3]].map(function (lb, i) {
      var x = pt(120, ang[i]);
      return '<text x="' + x[0].toFixed(1) + '" y="' + x[1].toFixed(1) + '" class="rlabel">' + lb[0] + " " + lb[1] + "</text>";
    }).join("");
    return '<svg viewBox="0 0 240 240" class="radar" width="260" height="260">' + ring(1) + ring(0.66) + ring(0.33) + axis +
      '<polygon class="data" points="' + data + '"/>' + labels + "</svg>";
  }

  /* ---------- 结果 ---------- */
  function result(p) {
    var answers = loadAnswers(p.id);
    if (!answers && qs && qs.posId === p.id && qs.answers) answers = qs.answers;
    if (!answers) { location.hash = "#/p/" + p.id + "/quiz"; return; }
    var sc = score(p, answers);
    var b = band(sc.composite);
    var dims = [["日常适配", sc.D1], ["压力适配", sc.D2], ["发展适配", sc.D3]];
    var minDim = dims[0]; dims.forEach(function (d) { if (d[1] < minDim[1]) minDim = d; });
    var recs = P.filter(function (x) { return x.id !== p.id; }).slice(0, 3).map(function (x) {
      return '<a class="rec" href="#/p/' + x.id + '"><span>' + esc(x.name) + "</span>" + icon("chevR") + "</a>";
    }).join("");
    var ind = Object.keys(p.industryNotes).map(function (k) {
      return '<div class="ind"><b>' + esc(k) + "</b><span>" + esc(p.industryNotes[k]) + "</span></div>";
    }).join("");
    app.innerHTML =
      topbar("测评结果", "#/p/" + p.id, '<a class="right" href="#/history">' + icon("chart") + "</a>") +
      '<div class="score ' + b.cls + '"><div class="num">' + sc.composite + '</div><div class="band">' + b.t +
      '</div><div class="comp">综合匹配度</div></div>' +
      '<div class="radar-wrap">' + radar(sc.D1, sc.D2, sc.D3) + "</div>" +
      '<div class="blocks">' +
      '<div class="block soft"><p class="read">' + esc(b.d) + " 你相对最弱的维度是「" + minDim[0] + "（" + minDim[1] + "）」，可针对性了解或找实习验证。</p></div>" +
      '<div class="block"><h2><span class="num">01</span>同岗位 · 跨行业差异（回顾）</h2><div class="inds">' + ind + "</div></div>" +
      '<div class="block"><h2><span class="num">02</span>压力题 · 你的回答 / AI 评分 / 正确思路</h2>' + openComments(p, answers) + "</div>" +
      '<div class="block"><h2><span class="num">03</span>想去别的岗位看看？</h2><div class="recs">' + recs + "</div></div>" +
      "</div>" +
      '<div class="actions">' +
      '<a class="btn ghost" href="#/p/' + p.id + '" onclick="window.__reset(\'' + p.id + '\')">重新测评</a>' +
      '<a class="btn primary" href="#/history">查看我的对比</a></div>';
    document.body.insertAdjacentHTML("beforeend", tabbar(activeTab()));
  }
  function openComments(p, answers) {
    var html = "";
    p.questions.forEach(function (q, i) {
      if (q.type !== "压力") return;
      var a = answers[i];
      if (!a || typeof a !== "object") return;
      html += '<div class="cmt"><div class="cmtq">' + esc(q.scenario) + "</div>" +
        '<div class="cmts">你的回答：' + esc(a.text || "") + "</div>" +
        '<div class="cmtscore">AI 评分：<b>' + a.score + "</b>/100" + (a.comment ? " · " + esc(a.comment) : "") + "</div>" +
        (q.reference ? '<div class="cmtref"><span class="lab">正确思路</span>' + esc(q.reference) + "</div>" : "") + "</div>";
    });
    return html || '<p class="read">（无）</p>';
  }
  window.__reset = function (id) { try { sset("quiz_" + id, ""); } catch (e) {} qs = null; };

  /* ---------- 我的测评记录 ---------- */
  function history() {
    var h = loadHistory().slice().sort(function (a, b) { return b.composite - a.composite; });
    var top = h[0];
    var rows = h.map(function (r, idx) {
      var bc = band(r.composite).cls;
      return (
        '<div class="hrow">' +
        '<div class="hname">' + (idx === 0 ? '<span class="best">最匹配</span>' : "") + esc(r.name) + "</div>" +
        '<div class="hscore ' + bc + '">' + r.composite + "</div>" +
        '<div class="hbar"><div class="hfill ' + bc + '" style="width:' + r.composite + '%"></div></div>' +
        '<div class="hmeta">日常<span class="d">' + r.D1 + '</span><span class="sep">/</span>压力<span class="d">' + r.D2 + '</span><span class="sep">/</span>发展<span class="d">' + r.D3 + "</span></div>" +
        '<a class="hlink" href="#/p/' + r.id + '">重看岗位卡 →</a></div>'
      );
    }).join("");
    var summary = top
      ? '<b>你目前最匹配的岗位是 ' + esc(top.name) + '</b><p>综合分 <b style="font-family:var(--font-mono);font-weight:900;font-size:14px;letter-spacing:-0.01em">' + top.composite + '</b> · 共完成 ' + h.length + " 个岗位测评</p>"
      : "<b>还没有测评记录</b><p>去首页选个岗位开始吧</p>";
    app.innerHTML =
      topbar("我的记录", "#/", null) +
      '<div class="summary">' + summary + "</div>" +
      (h.length ? '<div class="blocks"><div class="block">' + rows + "</div></div>" : "") +
      (h.length ? '<div class="actions"><a class="btn ghost" href="#/">去做测评</a><button class="btn danger" onclick="window.__clear()">清空记录</button></div>' : '<div class="actions"><a class="btn primary" href="#/">去做测评</a></div>');
    document.body.insertAdjacentHTML("beforeend", tabbar(activeTab()));
  }
  window.__clear = function () { sset("assess_history", "[]"); location.hash = "#/history"; };

  /* ---------- 我的（设置） ---------- */
  function mine() {
    var apiVal = esc(sget("scoreApiUrl") || "");
    app.innerHTML =
      topbar("我的", "#/", null) +
      '<div class="blocks">' +
      '<div class="block"><h2><span class="num">' + icon("settings") + '</span>AI 判分服务（可选）</h2>' +
      '<p class="read">填本地服务地址后，压力题将走真实大模型判分。配置方法见 <b>AI_SCORING_README.md</b>。</p>' +
      '<div class="setrow"><input id="scoreApiInput" class="setin" placeholder="http://localhost:8787/api/score" value="' + apiVal + '">' +
      '<button class="btn small primary" onclick="window.__saveApi()">保存</button></div></div>' +
      '<div class="block"><h2><span class="num">' + icon("info") + '</span>关于</h2>' +
      '<p class="about">岗位扫盲 · 应届生版<br/>6 个岗位 · 每岗 24 道情景题 · 匿名测评<br/>结果仅存本地，不会上传</p></div>' +
      '<div class="block"><h2><span class="num">' + icon("warning") + '</span>数据</h2>' +
      '<div class="kv"><span class="k">已测评岗位</span><span class="v mono">' + loadHistory().length + "</span></div>" +
      '<div class="kv"><span class="k">存储位置</span><span class="v">localStorage</span></div>' +
      '<div class="kv"><span class="k">压力题判分</span><span class="v">' + (usingCustomApi() ? "已接自建后端" : "免费AI（浏览器端）") + "</span></div>" +
      '</div><div class="actions"><button class="btn danger" onclick="window.__clear()">清空所有记录</button></div>' +
      "</div>";
    document.body.insertAdjacentHTML("beforeend", tabbar(activeTab()));
  }

  /* ---------- Holland 职业兴趣测试 ---------- */
  function loadHollandState() {
    var r = sget("holland_state");
    if (r) {
      try { return JSON.parse(r); } catch (e) {}
    }
    return { idx: 0, answers: new Array(60).fill(null) };
  }
  function saveHollandState(st) { sset("holland_state", JSON.stringify(st)); }

  function holland() {
    if (!hs) hs = loadHollandState();
    var i = hs.idx, total = HOLLAND.length, pct = Math.round(i / total * 100);
    var dim = HOLLAND_DIMS[i], lbl = HOLLAND_LABELS[dim];
    var cur = hs.answers[i];
    var optLabels = [
      { k: 0, t: "不喜欢", c: "不喜欢这道陈述" },
      { k: 1, t: "中立",   c: "说不上喜欢或不喜欢" },
      { k: 2, t: "喜欢",   c: "这道陈述符合我" }
    ];
    var body = optLabels.map(function (o) {
      var sel = cur === o.k ? " sel" : "";
      return '<button class="opt' + sel + '" onclick="window.__hollandSel(' + i + "," + o.k + ')">' +
        '<span class="ok">' + esc(o.t) + '</span><span>' + esc(o.c) + '</span></button>';
    }).join("");

    var isLast = i === total - 1;
    var prevBtn = i > 0 ? '<button class="btn ghost" onclick="window.__hollandPrev()">上一题</button>' : '<span style="flex:1"></span>';
    var nextBtn = cur != null
      ? '<button class="btn primary" onclick="window.__hollandNext()">' + (isLast ? "查看结果" : "下一题") + " " + icon("arrowR") + "</button>"
      : '<span class="hint">选一项再继续</span>';

    app.innerHTML =
      topbar("职业兴趣测试", "#/", '<a class="right" href="#/history">' + icon("chart") + "</a>") +
      '<div class="quiz">' +
      '<div class="bar"><div class="fill" style="width:' + pct + '%"></div></div>' +
      '<div class="qtype"><span>' + esc(lbl.name) + '</span><span class="qpos">' + (i + 1) + " / " + total + "</span></div>" +
      '<p class="qhint">第 ' + (i + 1) + ' / 60 题 · 维度 <b>' + esc(lbl.name) + '</b> · 核心特征：' + esc(lbl.desc) + '</p>' +
      '<p class="scene">' + esc(HOLLAND[i]) + "</p>" +
      '<div class="opts">' + body + "</div>" +
      '<div class="qactions">' + prevBtn + nextBtn + "</div>" +
      "</div>";
    document.body.insertAdjacentHTML("beforeend", tabbar(activeTab()));
  }

  window.__hollandSel = function (i, v) { if (!hs) hs = loadHollandState(); hs.answers[i] = v; saveHollandState(hs); holland(); };
  window.__hollandNext = function () {
    if (!hs) hs = loadHollandState();
    if (hs.answers[hs.idx] == null) return;
    if (hs.idx < HOLLAND.length - 1) { hs.idx++; saveHollandState(hs); holland(); } else { hollandSubmit(); }
  };
  window.__hollandPrev = function () { if (!hs) hs = loadHollandState(); if (hs.idx > 0) { hs.idx--; saveHollandState(hs); holland(); } };
  window.__hollandReset = function () { hs = { idx: 0, answers: new Array(60).fill(null) }; saveHollandState(hs); location.hash = "#/holland"; };

  function hollandSubmit() {
    if (!hs) hs = loadHollandState();
    var answers = hs.answers.slice();
    var body = JSON.stringify({ answers: answers });
    // 先本地算（保证后端不可达也能看结果）
    var local = localHolland(answers);
    sset("holland_result", JSON.stringify(Object.assign({}, local, { ts: Date.now() })));
    pushHistory({ id: "holland", name: "职业兴趣测试 · " + local.code, composite: local.pct_avg || 0,
                  D1: local.pct.R || 0, D2: local.pct.I || 0, D3: local.pct.A || 0, ts: Date.now() });
    location.hash = "#/holland/result";
    // 再尝试调后端拉推荐岗位（覆盖本地）
    fetch("http://localhost:8787/api/holland/submit", {
      method: "POST", headers: { "Content-Type": "application/json" }, body: body
    }).then(function (r) { return r.json(); }).then(function (d) {
      if (d && d.code) {
        sset("holland_result", JSON.stringify(Object.assign({}, d, { ts: Date.now() })));
        if (location.hash === "#/holland/result") hollandResult();
      }
    }).catch(function () { /* 后端不可达用本地结果 */ });
  }

  function localHolland(answers) {
    var bucket = { R:0,I:0,A:0,S:0,E:0,C:0 };
    for (var i = 0; i < answers.length; i++) {
      var a = Math.max(0, Math.min(2, answers[i] || 0));
      bucket[HOLLAND_DIMS[i]] += a;
    }
    var dims = ["R","I","A","S","E","C"];
    var pct = {};
    var sum = 0;
    for (var k = 0; k < dims.length; k++) { var d = dims[k]; pct[d] = Math.round(bucket[d] / 20 * 100); sum += pct[d]; }
    var top3 = dims.map(function (d) { return { dim: d, score: bucket[d], pct: pct[d] }; })
                   .sort(function (a, b) { return b.score - a.score; }).slice(0, 3);
    var code = top3.map(function (x) { return x.dim; }).join("");
    var recs = (window.POSITIONS || []).map(function (p) {
      var pc = p.holland_code || "";
      if (!pc) return null;
      var hit = 0;
      var codeSet = {}; code.split("").forEach(function (c) { codeSet[c] = 1; });
      pc.split("").forEach(function (c) { if (codeSet[c]) hit++; });
      var score = Math.round(hit / pc.length * 100);
      var order_bonus = 0;
      for (var i2 = 0; i2 < code.length && i2 < pc.length; i2++) {
        if (code[i2] === pc[i2]) order_bonus += 3;
      }
      score = Math.min(100, score + order_bonus);
      return { id: p.id, name: p.name, line: p.line, holland_code: pc, match: score,
               reason: score >= 80 ? "高度匹配 · 你的兴趣方向与该岗位核心适配维度高度重合"
                       : score >= 60 ? "较匹配 · 大方向一致，可进一步看 JD 与情景测评"
                       : score >= 40 ? "需谨慎 · 有部分重合，但岗位核心能力可能与你的偏好有差距"
                       : "大概率不合适 · 该岗位核心兴趣维度与你的画像偏差较大" };
    }).filter(Boolean).sort(function (a, b) { return b.match - a.match; });
    var top3Detail = top3.map(function (x) {
      var lbl = HOLLAND_LABELS[x.dim];
      return { dim: x.dim, name: lbl.name, desc: lbl.desc, score: x.score, pct: x.pct };
    });
    return { scores: bucket, pct: pct, code: code, top3: top3Detail, dim_labels: HOLLAND_LABELS, recs: recs, pct_avg: Math.round(sum / 6) };
  }

  function hollandResult() {
    var r = sget("holland_result");
    if (!r) { location.hash = "#/holland"; return; }
    try { r = JSON.parse(r); } catch (e) { location.hash = "#/holland"; return; }
    var dims = ["R","I","A","S","E","C"];
    var dimHtml = dims.map(function (d) {
      var v = r.pct[d] || 0;
      var lbl = r.dim_labels && r.dim_labels[d] ? r.dim_labels[d] : HOLLAND_LABELS[d];
      var isTop = r.top3 && r.top3.some(function (t) { return t.dim === d; });
      return '<div class="hrw"><div class="hrname">' +
        '<span class="hrk">' + d + '</span><span class="hrn">' + esc(lbl.name) + '</span>' +
        (isTop ? '<span class="hrtop">最强</span>' : "") +
        '</div><div class="hrb"><div class="hrf" style="width:' + v + '%"></div></div>' +
        '<div class="hrv mono">' + v + '</div></div>';
    }).join("");
    var recsHtml = (r.recs || []).slice(0, 6).map(function (rec) {
      var bc = rec.match >= 80 ? "good" : rec.match >= 60 ? "ok" : rec.match >= 40 ? "warn" : "bad";
      return '<a class="rec" href="#/p/' + esc(rec.id) + '"><span>' + esc(rec.name) +
        ' <span class="mono" style="opacity:.7;font-size:12px;margin-left:4px">' + esc(rec.holland_code) + '</span></span>' +
        '<span class="recscore mono ' + bc + '">' + rec.match + '</span></a>';
    }).join("");

    var codeHtml = (r.code || "").split("").map(function (d) {
      var lbl = r.dim_labels && r.dim_labels[d] ? r.dim_labels[d] : HOLLAND_LABELS[d];
      return '<div class="cl"><div class="cll mono">' + d + '</div><div class="cln">' + esc(lbl.name) + '</div></div>';
    }).join("");

    app.innerHTML =
      topbar("测试结果", "#/", '<a class="right" href="#/history">' + icon("chart") + "</a>") +
      '<div class="score good"><div class="code3">' + codeHtml + '</div>' +
      '<div class="band">RIASEC 兴趣代码</div>' +
      '<div class="comp">你的霍兰德代码 · 6 维测评 Top3</div></div>' +
      '<div class="blocks">' +
      '<div class="block"><h2><span class="num">01</span>6 维兴趣得分</h2>' + dimHtml + '</div>' +
      '<div class="block"><h2><span class="num">02</span>推荐岗位（按兴趣匹配）</h2><div class="recs">' + recsHtml + '</div></div>' +
      '<div class="block"><h2><span class="num">03</span>如何解读</h2>' +
      '<p class="read">3 字母代码（如 <b>RIA</b>）= 你的兴趣 Top3 维度。可点进岗位查看 JD · 硬软实力 · 0基础快速补齐，再做 24 道情景题做深度匹配。</p></div>' +
      '</div>' +
      '<div class="actions"><button class="btn ghost" onclick="window.__hollandReset()">重新测试</button>' +
      '<a class="btn primary" href="#/">返回首页</a></div>';
    document.body.insertAdjacentHTML("beforeend", tabbar(activeTab()));
  }

  /* ---------- 路由 ---------- */
  function route() {
    document.querySelectorAll(".tabbar").forEach(function (n) { n.remove(); });
    var h = location.hash || "#/";
    if (h === "#/" || h === "") { home(); return; }
    if (h === "#/history") { history(); return; }
    if (h === "#/mine") { mine(); return; }
    if (h === "#/holland") { holland(); return; }
    if (h === "#/holland/result") { hollandResult(); return; }
    var m = h.match(/^#\/p\/([^\/]+)(\/(quiz|result))?$/);
    if (m) {
      var p = getPos(m[1]); if (!p) { home(); return; }
      if (m[3] === "quiz") { quiz(p); return; }
      if (m[3] === "result") { result(p); return; }
      detail(p); return;
    }
    home();
  }
  window.addEventListener("hashchange", route);
  route();
})();
