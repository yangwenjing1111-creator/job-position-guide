/* ============================================================
   主题控制台
   - 浮在 .stage 右上角的齿轮按钮（仅桌面可见）
   - 点击后从右侧滑出 320px 抽屉
   - 控制：背景图（透明度/位置/缩放/模糊）、组件（圆角/间距/手机宽度）、
         字体（中文/标题/数字 方案 + 基础字号倍率）
   - 实时写入 CSS 变量 + localStorage 持久化
   ============================================================ */
(function () {
  "use strict";

  // ---------- 默认配置 ----------
  var DEFAULTS = {
    "bg-opacity": 0.7,
    "bg-pos-x": 50,
    "bg-pos-y": 0,
    "bg-scale": 100,
    "bg-blur": 1,
    "bg-phone-opacity": 0.32,
    "bg-phone-blur": 0.5,
    "card-radius": 16,
    "card-pad": 16,
    "card-gap": 10,
    "shadow-strength": 1,
    "font-size-scale": 1,
    "page-max-width": 480,
    "page-radius": 0,
    "font-cn-key": "default",
    "font-display-key": "default",
    "font-mono-key": "default"
  };

  // ---------- 字体方案预设 ----------
  var FONT_PRESETS = {
    default: { cn: '"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Source Han Sans CN", sans-serif',
               display: '"SF Pro Display", "SF Pro", -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Inter", "PingFang SC", sans-serif',
               mono: 'ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Consolas, "Roboto Mono", monospace' },
    pingfang: { cn: '"PingFang SC", "Hiragino Sans GB", sans-serif',
                display: '"SF Pro Display", "PingFang SC", "Helvetica Neue", sans-serif',
                mono: '"SF Mono", Menlo, Consolas, monospace' },
    helvetica: { cn: '"Helvetica Neue", Helvetica, "PingFang SC", Arial, sans-serif',
                 display: 'Helvetica, "Helvetica Neue", Arial, "PingFang SC", sans-serif',
                 mono: '"SF Mono", Menlo, Consolas, monospace' },
    noto: { cn: '"Source Han Sans CN", "Noto Sans CJK SC", "PingFang SC", "Microsoft YaHei", sans-serif',
            display: '"Source Han Sans CN", "Noto Sans CJK SC", "PingFang SC", sans-serif',
            mono: '"JetBrains Mono", "Roboto Mono", monospace' },
    yahei: { cn: '"Microsoft YaHei", "微软雅黑", "PingFang SC", sans-serif',
             display: '"Microsoft YaHei", "微软雅黑", "PingFang SC", sans-serif',
             mono: 'Consolas, "Courier New", monospace' },
    songti: { cn: '"Songti SC", "STSong", "SimSun", "宋体", serif',
              display: '"Songti SC", "STSong", "SimSun", serif',
              mono: '"Courier New", monospace' },
    kaiti: { cn: '"Kaiti SC", "STKaiti", "KaiTi", "楷体", serif',
             display: '"Kaiti SC", "STKaiti", "KaiTi", serif',
             mono: '"Courier New", monospace' }
  };

  var FONT_OPTIONS = [
    { key: "default", label: "系统默认（苹方优先）" },
    { key: "pingfang", label: "苹方（PingFang）" },
    { key: "helvetica", label: "Helvetica" },
    { key: "noto", label: "思源黑体（Source Han）" },
    { key: "yahei", label: "微软雅黑" },
    { key: "songti", label: "宋体（Songti）" },
    { key: "kaiti", label: "楷体（Kaiti）" }
  ];

  var STORAGE_KEY = "job_blind_theme_v1";
  var current = load();

  // ---------- 持久化 ----------
  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return Object.assign({}, DEFAULTS, JSON.parse(raw));
    } catch (e) {}
    return Object.assign({}, DEFAULTS);
  }
  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(current)); } catch (e) {}
  }

  // ---------- 写 CSS 变量 ----------
  function apply() {
    var r = document.documentElement.style;
    r.setProperty("--bg-opacity", String(current["bg-opacity"]));
    r.setProperty("--bg-pos-x", current["bg-pos-x"] + "%");
    r.setProperty("--bg-pos-y", current["bg-pos-y"] + "%");
    r.setProperty("--bg-scale", current["bg-scale"] + "%");
    r.setProperty("--bg-blur", current["bg-blur"] + "px");
    r.setProperty("--bg-phone-opacity", String(current["bg-phone-opacity"]));
    r.setProperty("--bg-phone-blur", current["bg-phone-blur"] + "px");
    r.setProperty("--card-radius", current["card-radius"] + "px");
    r.setProperty("--card-pad", current["card-pad"] + "px");
    r.setProperty("--card-gap", current["card-gap"] + "px");
    r.setProperty("--shadow-strength", String(current["shadow-strength"]));
    r.setProperty("--font-size-scale", String(current["font-size-scale"]));
    r.setProperty("--page-max-width", current["page-max-width"] + "px");
    r.setProperty("--page-radius", current["page-radius"] + "px");
    // 字体方案
    var fcn = FONT_PRESETS[current["font-cn-key"]] || FONT_PRESETS.default;
    r.setProperty("--font-cn-family", fcn.cn);
    r.setProperty("--font-sans-family", fcn.cn);
    r.setProperty("--font-display-family", fcn.display);
    r.setProperty("--font-mono-family", fcn.mono);
  }

  // ---------- 控件定义 ----------
  var controls = [
    { section: "背景图" },
    { key: "bg-opacity", label: "整体透明度", min: 0, max: 1, step: 0.01, fmt: function (v) { return Math.round(v * 100) + "%"; } },
    { key: "bg-pos-x", label: "水平位置", min: 0, max: 100, step: 1, fmt: function (v) { return v + "%"; } },
    { key: "bg-pos-y", label: "垂直位置", min: 0, max: 100, step: 1, fmt: function (v) { return v + "%"; } },
    { key: "bg-scale", label: "缩放", min: 50, max: 200, step: 1, fmt: function (v) { return v + "%"; } },
    { key: "bg-blur", label: "整体模糊", min: 0, max: 10, step: 0.1, fmt: function (v) { return v.toFixed(1) + "px"; } },
    { key: "bg-phone-opacity", label: "页面内透明度", min: 0, max: 1, step: 0.01, fmt: function (v) { return Math.round(v * 100) + "%"; } },
    { key: "bg-phone-blur", label: "页面内模糊", min: 0, max: 5, step: 0.1, fmt: function (v) { return v.toFixed(1) + "px"; } },
    { section: "组件" },
    { key: "page-max-width", label: "页面宽度", min: 360, max: 1200, step: 10, fmt: function (v) { return v + "px"; } },
    { key: "page-radius", label: "页面圆角", min: 0, max: 40, step: 1, fmt: function (v) { return v + "px"; } },
    { key: "card-radius", label: "卡片圆角", min: 0, max: 32, step: 1, fmt: function (v) { return v + "px"; } },
    { key: "card-pad", label: "卡片内边距", min: 8, max: 28, step: 1, fmt: function (v) { return v + "px"; } },
    { key: "card-gap", label: "列表项间距", min: 4, max: 24, step: 1, fmt: function (v) { return v + "px"; } },
    { key: "shadow-strength", label: "阴影强度", min: 0, max: 1.5, step: 0.05, fmt: function (v) { return Math.round(v * 100) + "%"; } },
    { section: "字体" },
    { key: "font-cn-key", label: "中文/正文字体", type: "select", options: FONT_OPTIONS },
    { key: "font-display-key", label: "标题字体（暂跟随中文）", type: "select", options: FONT_OPTIONS, disabled: true,
      hint: "（当前为简化版，标题与中文同方案）" },
    { key: "font-size-scale", label: "基础字号倍率", min: 0.8, max: 1.4, step: 0.05, fmt: function (v) { return Math.round(v * 100) + "%"; } }
  ];

  // ---------- 渲染面板 ----------
  function build() {
    var root = document.createElement("div");
    root.id = "theme-panel";
    root.className = "tpanel";
    root.innerHTML =
      '<div class="tpanel-head">' +
        '<div class="tpanel-title">主题控制台</div>' +
        '<button class="tpanel-x" data-act="close" aria-label="关闭">×</button>' +
      "</div>" +
      '<div class="tpanel-body">' + controls.map(function (c) {
        if (c.section) return '<div class="tsec">' + c.section + "</div>";
        if (c.type === "select") {
          return '<div class="trow' + (c.disabled ? " disabled" : "") + '">' +
            '<label>' + c.label + '</label>' +
            '<select data-key="' + c.key + '"' + (c.disabled ? " disabled" : "") + '>' +
            c.options.map(function (o) {
              return '<option value="' + o.key + '"' + (current[c.key] === o.key ? " selected" : "") + '>' + o.label + "</option>";
            }).join("") +
            "</select>" +
            (c.hint ? '<div class="thint">' + c.hint + "</div>" : "") +
          "</div>";
        }
        var v = current[c.key];
        return '<div class="trow">' +
          '<label>' + c.label + '<span class="tv" data-v="' + c.key + '">' + c.fmt(v) + "</span></label>" +
          '<input type="range" data-key="' + c.key + '" min="' + c.min + '" max="' + c.max + '" step="' + c.step + '" value="' + v + '">' +
        "</div>";
      }).join("") + "</div>" +
      '<div class="tpanel-foot">' +
        '<button class="tbtn" data-act="reset">重置默认</button>' +
        '<button class="tbtn" data-act="export">导出配置</button>' +
        '<button class="tbtn primary" data-act="import">导入</button>' +
      "</div>";

    // 齿轮按钮
    var btn = document.createElement("button");
    btn.id = "theme-toggle";
    btn.className = "tgear";
    btn.title = "打开主题控制台";
    btn.setAttribute("aria-label", "打开主题控制台");
    btn.innerHTML =
      '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
        '<circle cx="12" cy="12" r="3"/>' +
        '<path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1.08-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1.08 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>' +
      "</svg>";

    // 事件绑定
    btn.addEventListener("click", function () { root.classList.toggle("open"); });
    root.addEventListener("click", function (e) {
      var act = e.target.getAttribute && e.target.getAttribute("data-act");
      if (act === "close") { root.classList.remove("open"); return; }
      if (act === "reset") {
        current = Object.assign({}, DEFAULTS);
        apply(); save(); rebuild();
        toast("已重置为默认");
        return;
      }
      if (act === "export") {
        var blob = new Blob([JSON.stringify(current, null, 2)], { type: "application/json" });
        var a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "job-blind-theme.json";
        a.click();
        setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
        toast("已导出配置 JSON");
        return;
      }
      if (act === "import") {
        var inp = document.createElement("input");
        inp.type = "file"; inp.accept = "application/json";
        inp.addEventListener("change", function () {
          var f = inp.files && inp.files[0]; if (!f) return;
          var r = new FileReader();
          r.onload = function () {
            try {
              var data = JSON.parse(r.result);
              current = Object.assign({}, DEFAULTS, data);
              apply(); save(); rebuild();
              toast("已导入配置");
            } catch (e) { toast("配置 JSON 解析失败"); }
          };
          r.readAsText(f);
        });
        inp.click();
        return;
      }
    });
    // range / select 实时调节
    root.addEventListener("input", function (e) {
      var t = e.target;
      if (!t.getAttribute) return;
      var k = t.getAttribute("data-key"); if (!k) return;
      var v = t.value;
      if (t.tagName === "SELECT") {
        current[k] = v;
      } else {
        current[k] = parseFloat(v);
        // 同步显示
        var lbl = root.querySelector('[data-v="' + k + '"]');
        if (lbl) {
          var c = controls.find(function (x) { return x.key === k; });
          if (c && c.fmt) lbl.textContent = c.fmt(parseFloat(v));
        }
      }
      apply(); save();
    });

    document.body.appendChild(btn);
    document.body.appendChild(root);
  }

  function rebuild() {
    var old = document.getElementById("theme-panel");
    if (old) old.remove();
    build();
    if (current && document.getElementById("theme-panel")) {
      document.getElementById("theme-panel").classList.add("open");
    }
  }

  // ---------- toast（沿用 app.js 的） ----------
  function toast(msg) {
    var old = document.getElementById("__toast"); if (old) old.remove();
    var t = document.createElement("div");
    t.id = "__toast"; t.className = "toast"; t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 1500);
  }

  // ---------- 启动 ----------
  function boot() {
    apply();
    build();
    // URL 带 #open 自动展开面板（方便截图/调试）
    if (location.hash === "#open") {
      var p = document.getElementById("theme-panel");
      if (p) p.classList.add("open");
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
