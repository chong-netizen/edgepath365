import { DATA } from "./data.js";
import { LABS, MACHINES } from "./labs.js";
import { DEVICE_MODULES, CAPABILITIES, SIGNAL_STAGES, SCENES } from "./device.js";

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const app = $("#app");
const KEY = "edgepath365.progress.v3";
const pad = (n, len = 2) => String(n).padStart(len, "0");
const dayCode = (n) => `D${pad(n, 3)}`;
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const PHASE = Object.fromEntries(DATA.phases.map((p) => [p.code, p]));
const WEEK = Object.fromEntries(DATA.weeks.map((w) => [w.n, w]));
const DAY = Object.fromEntries(DATA.days.map((d) => [d.d, d]));
const PROJECT = Object.fromEntries(DATA.projects.map((p) => [p.code, p]));
const LAB_ORDER = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8"];

const checkSvg = `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8.5l3.2 3.2L13 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const arrow = "→";

function loadProgress() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || "{}");
    return {
      done: raw.done && typeof raw.done === "object" ? raw.done : {},
      labs: raw.labs && typeof raw.labs === "object" ? raw.labs : {},
      lastLesson: Number(raw.lastLesson) || 1,
      notes: typeof raw.notes === "string" ? raw.notes : ""
    };
  } catch {
    return { done: {}, labs: {}, lastLesson: 1, notes: "" };
  }
}

const progress = loadProgress();
let labFilter = "all";
let activeDeviceModule = "camera";
let activeScene = "factory";
let simState = { lab: null, step: 0, res: 416, precision: "INT8", runtime: "ONNX", roi: true, running: false };
const focus = { seconds: 25 * 60, running: false, timer: null };

function save() {
  try { localStorage.setItem(KEY, JSON.stringify(progress)); } catch { /* local only */ }
}

function countDone() {
  return DATA.days.filter((d) => progress.done[d.d]).length;
}

function overallPct() {
  const n = countDone();
  return n ? Math.max(1, Math.round((n / 365) * 100)) : 0;
}

function dayDone(n) { return Boolean(progress.done[n]); }

function weekDone(n) {
  const w = WEEK[n];
  return Boolean(w && w.days.every((d) => dayDone(d.d)));
}

function weekDoneCount(n) {
  const w = WEEK[n];
  return w ? w.days.filter((d) => dayDone(d.d)).length : 0;
}

function phaseStats(code) {
  const weeks = DATA.weeks.filter((w) => w.phase === code);
  const total = weeks.length * 7;
  const done = weeks.reduce((sum, w) => sum + w.days.filter((d) => dayDone(d.d)).length, 0);
  return { total, done, pct: total ? Math.round((done / total) * 100) : 0 };
}

function firstIncompleteDay() {
  return DATA.days.find((d) => !dayDone(d.d)) || DATA.days[DATA.days.length - 1];
}

function nextIncompleteWeek() {
  const d = firstIncompleteDay();
  return Math.min(52, Math.max(1, Math.ceil(d.d / 7)));
}

function phaseOfWeek(n) {
  return PHASE[WEEK[n]?.phase] || DATA.phases[0];
}

function phaseFirstWeek(code) {
  return DATA.weeks.find((w) => w.phase === code)?.n || 1;
}

function labChecked(id) {
  const arr = progress.labs[id];
  return Array.isArray(arr) ? arr : [];
}

function labDone(id) {
  const lab = LABS[id];
  return Boolean(lab && lab.deliverables.length && labChecked(id).filter(Boolean).length === lab.deliverables.length);
}

function labDoneCount() {
  return Object.keys(LABS).filter((id) => labDone(id)).length;
}

function ensureLab(id) {
  if (!Array.isArray(progress.labs[id])) progress.labs[id] = LABS[id].deliverables.map(() => false);
  return progress.labs[id];
}

function updateChrome() {
  const pct = overallPct();
  $("#topProgress").textContent = `${pct}%`;
  $("#topDay").textContent = dayCode(firstIncompleteDay().d);
  const courseNav = document.querySelector('[data-nav="lesson"]');
  if (courseNav) courseNav.href = `#/lesson/${progress.lastLesson || 1}`;
  const route = parseRoute();
  $$(".main-nav a").forEach((a) => {
    const active = a.dataset.nav === route.name
      || (route.name === "labDetail" && a.dataset.nav === "lab")
      || (route.name === "lesson" && a.dataset.nav === "lesson");
    a.classList.toggle("active", active);
  });
}

function updateScroll() {
  const h = document.documentElement;
  const max = h.scrollHeight - h.clientHeight;
  const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
  $("#scrollBar").style.width = `${pct}%`;
}

function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove("show"), 2800);
}

function parseRoute() {
  const h = (location.hash || "#/").replace(/^#/, "");
  if (h === "/" || h === "") return { name: "home" };
  if (h === "/route") return { name: "route" };
  if (h === "/device") return { name: "device" };
  if (h === "/lab") return { name: "lab" };
  if (h.startsWith("/lab/")) return { name: "labDetail", id: h.split("/")[2] };
  if (h === "/machine") return { name: "machine" };
  if (h === "/manual") return { name: "manual" };
  if (h === "/journal") return { name: "journal" };
  if (h.startsWith("/lesson/")) {
    const n = Math.max(1, Math.min(52, Number(h.split("/")[2]) || 1));
    return { name: "lesson", n };
  }
  return { name: "home" };
}

function go(hash) {
  if (location.hash === hash) render();
  else location.hash = hash;
}

function goLesson(n) {
  go(`#/lesson/${Math.max(1, Math.min(52, n))}`);
}

function goLab(id) {
  go(`#/lab/${id}`);
}

function setMenu(open) {
  const nav = $("#mainNav");
  const btn = $("#menuBtn");
  nav.classList.toggle("open", open);
  btn.setAttribute("aria-expanded", String(open));
}

function pageHead(eyebrow, title, desc, side = "") {
  return `<div class="page-head">
    <div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1><p>${desc}</p></div>
    ${side ? `<div class="head-side">${side}</div>` : ""}
  </div>`;
}

function progressMarkup() {
  const n = countDone();
  const pct = overallPct();
  return `<div class="route-stat"><strong>${pct}%</strong><span>365 天进度</span></div>
    <div class="route-stat"><strong>${n}</strong><span>已完成天数</span></div>`;
}

/* ------------------------------- HOME ------------------------------- */
function renderHome() {
  const nextWeek = nextIncompleteWeek();
  const nextDay = firstIncompleteDay();
  const p = overallPct();
  const phaseCards = DATA.phases.map((ph) => {
    const st = phaseStats(ph.code);
    return `<a class="phase-card" href="#/lesson/${phaseFirstWeek(ph.code)}" style="--pc:${ph.color}">
      <div class="phase-code">${ph.code} / ${ph.weeks}</div>
      <h3>${ph.title}</h3>
      <p>${ph.days}</p>
      <div class="phase-bar"><span style="width:${st.pct}%"></span></div>
    </a>`;
  }).join("");

  const previews = ["p1", "p3", "p8"].map((id) => {
    const l = LABS[id];
    const pj = PROJECT[l.code];
    return `<a class="preview-card" href="#/lab/${id}">
      <img src="${l.image}" alt="${esc(l.imageAlt)}" loading="lazy">
      <div class="preview-top"><span class="tag mint">${l.code}</span><span class="tag">${l.weeks}</span></div>
      <div class="preview-body">
        <h3>${l.title}</h3>
        <p>${esc(l.intro).slice(0, 80)}…</p>
        <div class="kicker-row"><span class="tag amber">${pj?.accept ? "验收" : "MISSION"}</span><span class="link-arrow">${arrow}</span></div>
      </div>
    </a>`;
  }).join("");

  return `<div class="page">
    <section class="hero wrap">
      <div class="hero-grid">
        <div class="hero-copy">
          <div class="hero-kicker"><span class="line"></span><span class="eyebrow">EDGEPATH / 365</span></div>
          <h1>从零到<br><span class="mint">边缘智能</span><br><span class="outline">做一台设备</span></h1>
          <p class="hero-sub">嵌入式 Linux × 机器视觉。不是两份课表拼在一起，而是一条从 C/C++、驱动、系统构建，到模型训练与边缘部署的完整路径。</p>
          <div class="hero-cta">
            <a class="btn btn-primary" href="#/lesson/${nextWeek}">${p ? "继续学习" : "开始第 1 天"} ${arrow}</a>
            <a class="btn btn-ghost" href="#/lab">打开项目实验室</a>
          </div>
          <div class="hero-meta">
            <div class="hero-stat"><strong>52</strong><span>WEEKS</span></div>
            <div class="hero-stat"><strong>365</strong><span>DAYS</span></div>
            <div class="hero-stat"><strong>8</strong><span>PROJECTS</span></div>
            <div class="hero-stat"><strong>3</strong><span>GATES</span></div>
          </div>
        </div>
        <div class="hero-art">
          <div class="hero-frame"></div>
          <div class="hero-img">
            <img src="assets/edge-box.jpg" alt="Edge Vision Box 边缘视觉设备" fetchpriority="high">
            <div class="hero-overlay">
              <div class="status"><i></i> SYSTEM READY</div>
              <div class="coord">EDGE VISION BOX / V1.0<br>PI 5 · CAMERA · ONNX</div>
            </div>
          </div>
          <div class="hero-badge"><strong>${p}%</strong><span>YOUR PROGRESS</span></div>
        </div>
      </div>
    </section>

    <div class="wrap home-today">
      <div class="panel today-card">
        <div>
          <div class="day-label">TODAY / D${pad(nextDay.d, 3)} · W${pad(nextWeek)}</div>
          <h3>${WEEK[nextWeek].title}</h3>
          <p>${nextDay.task}</p>
        </div>
        <div class="today-side">
          <span class="big">${nextDay.weekday}</span>
          <a class="btn btn-primary" href="#/lesson/${nextWeek}">进入本课 ${arrow}</a>
        </div>
      </div>
      <div class="home-stat-row">
        <div class="panel mini-stat"><strong>${DATA.weeks.filter((w) => weekDone(w.n)).length}</strong><span>WEEKS DONE</span></div>
        <div class="panel mini-stat"><strong>${labDoneCount()}</strong><span>LABS DONE</span></div>
        <div class="panel mini-stat"><strong>${overallPct()}%</strong><span>OVERALL</span></div>
      </div>
    </div>

    <section class="wrap">
      <div class="section-head"><div><div class="eyebrow">THE ROUTE</div><h2>六个阶段，一条完整路径</h2></div><a class="link-arrow" href="#/route">查看全部 52 周 ${arrow}</a></div>
      <div class="phase-rail">${phaseCards}</div>
    </section>

    <section class="wrap">
      <div class="section-head"><div><div class="eyebrow">PROJECT LAB</div><h2>项目不是作业，是证据</h2></div><a class="link-arrow" href="#/lab">进入实验室 ${arrow}</a></div>
      <div class="lab-preview-grid">${previews}</div>
    </section>

    <section class="wrap">
      <div class="section-head"><div><div class="eyebrow">THE MACHINE</div><h2>机器不是黑盒</h2></div><a class="link-arrow" href="#/machine">看设备解剖 ${arrow}</a></div>
      <div class="machine-strip">
        <a class="machine-thumb" href="#/machine"><img src="assets/board.jpg" alt="单板计算机" loading="lazy"><span>SBC / COMPUTE</span></a>
        <a class="machine-thumb" href="#/machine"><img src="assets/camera.jpg" alt="相机模块" loading="lazy"><span>CAMERA / SENSE</span></a>
        <a class="machine-thumb" href="#/machine"><img src="assets/edge-box.jpg" alt="边缘视觉盒子" loading="lazy"><span>EDGE BOX / PRODUCT</span></a>
        <a class="machine-thumb" href="#/machine"><img src="assets/bench.jpg" alt="调试工作台" loading="lazy"><span>BENCH / TOOLS</span></a>
      </div>
    </section>

    <section class="wrap">
      <div class="section-head"><div><div class="eyebrow">HOW IT WORKS</div><h2>把一年拆成今天</h2></div></div>
      <div class="principles">
        <div class="principle"><div class="num">01</div><h3>每天写，不只每天看</h3><p>周一至周五 2 小时，周六 4 小时项目，周日复盘。看视频不算学习，跑通、改错、提交才算。</p></div>
        <div class="principle"><div class="num">02</div><h3>每周一个可演示产出</h3><p>脚本、驱动、镜像、Notebook、报告或 60 秒演示。没有证据，就不算完成这一周。</p></div>
        <div class="principle"><div class="num">03</div><h3>三个 Gate，不是三次考试</h3><p>D70、D168、D294 各一次能力验收。Gate 不过，不进入下一阶段；补项目，不补焦虑。</p></div>
      </div>
    </section>

    <div class="wrap"><div class="split-callout">
      <div><h3>想先体验“项目落地”是什么感觉？</h3><p>从 Edge Vision Box 的七模块拆解开始，拖动参数看延迟与精度如何互相拉扯。</p></div>
      <a class="btn btn-primary" href="#/lab/p8">进入 Capstone 实验室 ${arrow}</a>
    </div></div>
  </div>`;
}

/* ------------------------------- ROUTE ------------------------------- */
function renderRoute() {
  const phaseRows = DATA.phases.map((ph) => {
    const st = phaseStats(ph.code);
    return `<a class="phase-row" href="#/lesson/${phaseFirstWeek(ph.code)}" style="--pc:${ph.color}">
      <div class="idx">${ph.code}</div>
      <div><h3>${ph.title}</h3><p>${ph.days} · ${ph.weeks}</p></div>
      <div class="phase-progress"><div class="bar"><span style="width:${st.pct}%"></span></div><small>${st.done}/${st.total}</small></div>
    </a>`;
  }).join("");

  const weekCards = DATA.weeks.map((w) => {
    const ph = PHASE[w.phase];
    const done = weekDone(w.n);
    const dots = w.days.map((d) => `<i class="${dayDone(d.d) ? "on" : ""}"></i>`).join("");
    return `<a class="week-card ${done ? "done" : ""}" href="#/lesson/${w.n}" style="--pc:${ph.color}">
      <div class="phase-tick"></div>
      <div class="wk">W${pad(w.n)} / ${w.phase}</div>
      <h4>${w.title}</h4>
      <p>${dayCode(w.days[0].d)}–${dayCode(w.days[6].d)} · ${weekDoneCount(w.n)}/7</p>
      <div class="week-dots">${dots}</div>
    </a>`;
  }).join("");

  return `<div class="page wrap">
    ${pageHead("ROADMAP / 52 WEEKS", "路线总览", "先打地基，再进入嵌入式 Linux，随后补机器视觉，最后把两条线合并到边缘设备。顺序不能反。", `${progressMarkup()}`)}
    <div class="route-hero">
      <div class="panel">
        <div class="eyebrow">LANGUAGE STRATEGY</div>
        <h2>C++ 优先，<br>C 不缺席。</h2>
        <p>先用 2 周掌握 C 的指针与内存，再用 3 周进入 C++/STL/RAII；Linux 系统编程仍用 C，驱动与内核阶段继续读 C。这样既不会在 C 语法里困太久，也不会在板端变成“只会调包”。</p>
        <div class="kicker-row" style="margin-top:18px"><span class="tag mint">C++17</span><span class="tag">STL / RAII</span><span class="tag amber">Kernel C</span></div>
      </div>
      <div class="route-stat-stack">
        <div class="panel route-stat"><strong>${countDone()}</strong><span>DAYS DONE</span></div>
        <div class="panel route-stat"><strong>${DATA.weeks.filter((w) => weekDone(w.n)).length}</strong><span>WEEKS DONE</span></div>
        <div class="panel route-stat"><strong>${labDoneCount()}</strong><span>LABS DONE</span></div>
        <div class="panel route-stat"><strong>${overallPct()}%</strong><span>OVERALL</span></div>
      </div>
    </div>

    <div class="section-head"><div><div class="eyebrow">PHASE MAP</div><h2>六阶段进度</h2></div><span class="tag">3 个正式 Gate</span></div>
    <div class="phase-board">${phaseRows}</div>

    <div class="section-head"><div><div class="eyebrow">WEEK BY WEEK</div><h2>52 周课程</h2></div><div class="legend"><span><i></i> 已完成</span><span><i class="dim"></i> 未开始</span></div></div>
    <div class="week-grid">${weekCards}</div>

    <div class="section-head"><div><div class="eyebrow">LANGUAGE MAP</div><h2>每种语言，用在哪</h2></div></div>
    <div class="panel panel-pad">
      <table class="language-table">
        <thead><tr><th>语言</th><th>用在哪</th><th>学到什么程度</th><th>阶段</th></tr></thead>
        <tbody>
          <tr><td>C</td><td>内核、U-Boot、字符驱动、系统调用、V4L2</td><td>指针、结构体、内存布局、ABI、GDB；能读能写</td><td>P1 核心 + P2/P3</td></tr>
          <tr><td>C++</td><td>OpenCV、TensorRT、ONNX Runtime、Qt、应用层</td><td>RAII、STL、智能指针、CMake、测试</td><td>P1 后半 + P5</td></tr>
          <tr><td>Python</td><td>训练、数据处理、脚本、快速验证</td><td>能训练/评估/可视化，不依赖 Python 上板</td><td>P4</td></tr>
          <tr><td>Shell</td><td>构建、部署、日志、远程运维</td><td>能写可复现脚本，不靠手敲命令</td><td>全程</td></tr>
        </tbody>
      </table>
    </div>

    <div class="split-callout"><div><h3>下一次 Gate：D70 · Gate 1</h3><p>C/C++ 工具、GDB/Valgrind、串口传感器、进程/线程。过不了就用 1–2 周 buffer 重做项目。</p></div><a class="btn btn-primary" href="#/lesson/${nextIncompleteWeek()}">继续第 ${nextIncompleteWeek()} 周 ${arrow}</a></div>
  </div>`;
}

/* ------------------------------- LESSON ------------------------------- */
function renderLesson(n) {
  const week = WEEK[n];
  if (!week) return `<div class="page wrap"><div class="empty">没有这一周。</div></div>`;
  const ph = PHASE[week.phase];
  const days = week.days;
  const done = days.filter((d) => dayDone(d.d)).length;
  const pct = Math.round((done / 7) * 100);
  progress.lastLesson = n;
  save();

  const dayRows = days.map((d) => {
    const isDone = dayDone(d.d);
    const badges = [
      d.gate ? `<span class="tag amber">GATE</span>` : "",
      d.rest ? `<span class="tag">REST</span>` : ""
    ].join("");
    return `<div class="day-row ${isDone ? "is-done" : ""}" data-day-row="${d.d}">
      <button class="day-check" data-day="${d.d}" aria-label="标记 ${dayCode(d.d)} 完成" aria-pressed="${isDone}">${checkSvg}</button>
      <div class="day-main">
        <div class="day-top"><span class="day-num">${dayCode(d.d)}</span><span class="day-weekday">${d.weekday}</span>${badges}</div>
        <div class="day-task">${d.task}</div>
        <div class="day-out"><b>产出</b> · ${d.output}</div>
      </div>
      <div class="day-badges">${d.gate ? `<span class="tag amber">阶段验收</span>` : d.rest ? `<span class="tag">恢复</span>` : `<span class="tag mint">2–3 h</span>`}</div>
    </div>`;
  }).join("");

  return `<div class="page wrap">
    <a class="back-link" href="#/route">${"←"} 返回路线</a>
    <div class="lesson-head">
      <div class="eyebrow">WEEK ${pad(n)} / ${ph.code} · ${ph.title}</div>
      <h1>${week.title}</h1>
      <p class="muted" style="max-width:760px;margin:0">${ph.summary}</p>
      <div class="lesson-tags">
        <span class="tag mint">${dayCode(days[0].d)}–${dayCode(days[6].d)}</span>
        <span class="tag">2–3 h / 天</span>
        <span class="tag amber">${ph.days}</span>
        ${n >= 6 && n <= 8 ? `<span class="tag mint">C++ FIRST</span>` : ""}
      </div>
    </div>

    <div class="lesson-layout">
      <div>
        <div class="section-head" style="margin:0 0 12px"><div><div class="eyebrow">DAILY MISSIONS</div><h2 style="font-size:22px">本周 7 天</h2></div><span class="mono dim" style="font-size:9px">${done}/7 COMPLETE</span></div>
        <div class="day-list">${dayRows}</div>
        <div class="lesson-nav">
          <button class="btn btn-ghost" data-go="prev" ${n <= 1 ? "disabled" : ""}><span><small>PREVIOUS</small><strong>上一课</strong></span><span>${"←"}</span></button>
          <button class="btn btn-primary" data-go="next" ${n >= 52 ? "disabled" : ""}><span><small>NEXT</small><strong>下一课</strong></span><span>${arrow}</span></button>
        </div>
      </div>

      <aside class="lesson-side">
        <div class="panel side-card">
          <h3>WEEK PROGRESS</h3>
          <div class="progress-ring" id="weekRing" style="--p:${pct}"><div><strong id="weekRingValue">${pct}%</strong><span>THIS WEEK</span></div></div>
          <div class="side-progress-label" id="weekDoneLabel">${done} / 7 DAYS</div>
          <div class="rule"></div>
          <button class="btn btn-ghost" style="width:100%" data-complete-week="${n}" id="completeWeekBtn">${done === 7 ? "本周已完成" : "标记本周完成"}</button>
        </div>

        <div class="panel side-card">
          <h3>FOCUS TIMER</h3>
          <div class="focus-time" id="focusTime">25:00</div>
          <div class="focus-actions">
            <button class="btn btn-ghost" data-focus="toggle" id="focusToggle">${focus.running ? "暂停" : "开始"}</button>
            <button class="btn btn-ghost" data-focus="reset">重置</button>
          </div>
          <div class="rule"></div>
          <div class="key-hint"><kbd>←</kbd><kbd>→</kbd> 切换课程 · 完成一天自动保存</div>
        </div>

        <div class="panel side-card">
          <h3>THIS PHASE</h3>
          <div class="kicker-row"><span class="tag mint">${ph.code}</span><span class="tag">${ph.weeks}</span></div>
          <p style="margin:10px 0 0;font-size:10.5px;color:var(--muted);line-height:1.65">${ph.gate}</p>
          <div class="rule"></div>
          <a class="link-arrow" href="#/route">查看阶段地图 ${arrow}</a>
        </div>
      </aside>
    </div>
  </div>`;
}

/* ------------------------------- LAB LIST ------------------------------- */
function labGroup(phase) {
  if (phase === "P1") return "fundamentals";
  if (phase === "P2" || phase === "P3") return "embedded";
  if (phase === "P4") return "vision";
  return "capstone";
}

function projectCard(id) {
  const l = LABS[id];
  const p = PROJECT[l.code];
  return `<a class="project-card" href="#/lab/${id}" data-lab-card="${id}">
    <div class="pc-image"><img src="${l.image}" alt="${esc(l.imageAlt)}" loading="lazy"><span class="project-code">${l.code}</span></div>
    <div class="pc-body">
      <div class="kicker-row"><span class="tag mint">${l.phase}</span><span class="tag">${l.weeks}</span></div>
      <h3>${l.title}</h3>
      <p>${esc(l.intro).slice(0, 92)}…</p>
      <div class="project-meta"><span>${p?.deliver.length || 4} DELIVERABLES</span><b>打开拆解 ${arrow}</b></div>
    </div>
  </a>`;
}

function projectGrid() {
  const ids = LAB_ORDER.filter((id) => labFilter === "all" || labGroup(LABS[id].phase) === labFilter)
    .filter((id) => !(labFilter === "all" && id === "p8"));
  return ids.map(projectCard).join("");
}

function renderLabList() {
  const chips = [
    ["all", "全部"], ["fundamentals", "基础"], ["embedded", "嵌入式"], ["vision", "视觉"], ["capstone", "Capstone"]
  ].map(([v, label]) => `<button class="chip ${labFilter === v ? "active" : ""}" data-filter="${v}">${label}</button>`).join("");

  return `<div class="page wrap">
    ${pageHead("PROJECT LAB / 8 MISSIONS", "把项目拆开", "每个项目都有目标、步骤、失败模式、验收与参数模拟。先点开一台机器，再决定怎么拆。", `<div class="head-side"><strong>${labDoneCount()}/8</strong>LABS DONE</div>`)}
    <div class="featured-lab">
      <div class="fl-image"><img src="assets/device/effect-warehouse.jpg" alt="Edge Vision Box 仓库入侵检测场景"></div>
      <div class="fl-copy">
        <div class="kicker-row"><span class="tag mint">FEATURED / CAPSTONE</span><span class="tag amber">P8</span></div>
        <h2>Edge Vision Box<br>从画面到事件</h2>
        <p>七层硬件拆解、四个落地场景、可调参数与事件输出。先看清设备，再谈模型精度。</p>
        <div class="fl-actions"><a class="btn btn-primary" href="#/device">打开设备全景 ${arrow}</a><a class="btn btn-ghost" href="#/lab/p8">看 P8 拆解</a></div>
      </div>
    </div>
    <div class="filter-row">${chips}</div>
    <div class="project-grid" id="projectGrid">${projectGrid()}</div>
    <div class="split-callout"><div><h3>不知道从哪开始？</h3><p>先看 P8 的七模块拆解，再回到 P1 做第一个 C++ 工具。项目是递进的，不是八个孤岛。</p></div><a class="btn btn-primary" href="#/lab/p8">打开 Capstone ${arrow}</a></div>
  </div>`;
}

/* ------------------------------- LAB DETAIL ------------------------------- */
function calcSim() {
  const base = { 320: 42, 416: 60, 512: 84, 640: 125 }[simState.res] || 60;
  const rf = { ONNX: 1, NCNN: 0.78, TensorRT: 0.55 }[simState.runtime] || 1;
  const pf = { FP32: 1, FP16: 0.82, INT8: 0.62 }[simState.precision] || 0.62;
  const roi = simState.roi ? 0.72 : 1;
  const latency = base * rf * pf * roi;
  const fps = 1000 / latency;
  let acc = 95.8 + (simState.res - 416) * 0.003;
  acc += simState.precision === "INT8" ? -1.8 : simState.precision === "FP16" ? -0.3 : 0;
  acc += simState.runtime === "TensorRT" ? 0.3 : simState.runtime === "NCNN" ? -0.4 : 0;
  acc += simState.roi ? -0.6 : 0;
  const mem = 120 + (simState.res / 640) * 180 + (simState.precision === "FP32" ? 160 : simState.precision === "FP16" ? 80 : 40) + (simState.runtime === "TensorRT" ? 80 : simState.runtime === "NCNN" ? 30 : 60);
  return { latency: Math.round(latency), fps: Math.round(fps * 10) / 10, acc: Math.round(Math.max(80, Math.min(99.4, acc)) * 10) / 10, mem: Math.round(mem) };
}

function simMetricsHTML() {
  const m = calcSim();
  return `<div class="sim-metric mint"><span>END-TO-END LATENCY</span><strong id="simLatency">${m.latency}<em>ms</em></strong><div class="sim-bar"><span style="width:${Math.min(100, (m.latency / 180) * 100)}%"></span></div></div>
    <div class="sim-metric"><span>THROUGHPUT</span><strong id="simFps">${m.fps}<em>FPS</em></strong><div class="sim-bar"><span style="width:${Math.min(100, (m.fps / 32) * 100)}%"></span></div></div>
    <div class="sim-metric amber"><span>EST. ACCURACY</span><strong id="simAcc">${m.acc}<em>%</em></strong><div class="sim-bar"><span style="width:${m.acc}%"></span></div></div>
    <div class="sim-metric"><span>MEMORY FOOTPRINT</span><strong id="simMem">${m.mem}<em>MB</em></strong><div class="sim-bar"><span style="width:${Math.min(100, (m.mem / 600) * 100)}%"></span></div></div>`;
}

function simHTML(lab) {
  const stages = lab.pipeline.map((s, i) => `<div class="pstage" data-stage="${i}">
    <div class="pnum">${pad(i + 1)}</div><span class="pname">${s}</span><span class="ptime">${lab.id === "p8" && i === 3 ? "dynamic" : ["3 ms", "2 ms", "6 ms", "—", "2 ms", "1 ms", "1 ms"][i] || "1 ms"}</span>
  </div>`).join("");

  if (lab.id === "p8") {
    return `<section class="panel sim-panel" id="simPanel">
      <div class="sim-head"><div><div class="eyebrow">INTERACTIVE / TRADE-OFF</div><h3>调参台：延迟、精度、成本</h3></div><p>${lab.simNote}</p></div>
      <div class="pipeline" style="--cols:${lab.pipeline.length}">${stages}</div>
      <div class="sim-controls">
        <div class="control"><label>INPUT RESOLUTION</label><div class="segmented" data-seg-group="res">${[320, 416, 512, 640].map((v) => `<button data-seg="res" data-val="${v}" class="${simState.res === v ? "active" : ""}">${v}</button>`).join("")}</div></div>
        <div class="control"><label>PRECISION</label><div class="segmented" data-seg-group="precision">${["FP32", "FP16", "INT8"].map((v) => `<button data-seg="precision" data-val="${v}" class="${simState.precision === v ? "active" : ""}">${v}</button>`).join("")}</div></div>
        <div class="control"><label>RUNTIME</label><div class="segmented" data-seg-group="runtime">${["ONNX", "NCNN", "TensorRT"].map((v) => `<button data-seg="runtime" data-val="${v}" class="${simState.runtime === v ? "active" : ""}">${v}</button>`).join("")}</div></div>
      </div>
      <div class="sim-metrics" id="simMetrics">${simMetricsHTML()}</div>
      <div class="sim-actions">
        <div class="kicker-row">
          <button class="btn btn-primary" data-sim-run>运行推理 ${arrow}</button>
          <label class="tag mint" style="cursor:pointer"><input type="checkbox" id="roiToggle" data-roi ${simState.roi ? "checked" : ""} style="accent-color:#5eead4;margin-right:4px"> ROI 裁剪</label>
        </div>
        <span class="sim-note">示意模型，不是实测。真实项目必须用自己的数据、板子和参数跑 benchmark。</span>
      </div>
    </section>`;
  }

  const metrics = lab.metrics.map(([k, v]) => `<div class="sim-metric"><span>${k}</span><strong style="font-size:16px">${v}</strong></div>`).join("");
  return `<section class="panel sim-panel" id="simPanel">
    <div class="sim-head"><div><div class="eyebrow">INTERACTIVE / PIPELINE</div><h3>跑一遍项目管线</h3></div><p>${lab.simNote}</p></div>
    <div class="pipeline" style="--cols:${lab.pipeline.length}">${stages}</div>
    <div class="sim-metrics" style="grid-template-columns:repeat(${lab.metrics.length},1fr)">${metrics}</div>
    <div class="sim-actions">
      <button class="btn btn-primary" data-sim-run>运行拆解 ${arrow}</button>
      <span class="sim-note">点击后按阶段点亮；真正做项目时，每一步都要留下日志或截图。</span>
    </div>
  </section>`;
}

function stepDetailHTML(lab, i) {
  const s = lab.steps[i];
  return `<div class="step-eyebrow">STEP ${pad(i + 1)} / ${pad(lab.steps.length)}</div>
    <h3>${s.title}</h3><p>${s.detail}</p>
    <div class="step-facts">
      <div class="step-fact"><span>TIME</span><strong>${s.time}</strong></div>
      <div class="step-fact"><span>OUTPUT</span><strong>${s.output}</strong></div>
      <div class="step-fact"><span>PHASE</span><strong>${lab.phase}</strong></div>
    </div>`;
}

function renderLab(id) {
  const lab = LABS[id];
  if (!lab) return `<div class="page wrap"><div class="empty">没有这个实验室。</div></div>`;
  const p = PROJECT[lab.code];
  simState.lab = id;
  simState.step = 0;
  simState.res = 416;
  simState.precision = "INT8";
  simState.runtime = "ONNX";
  simState.roi = true;
  simState.running = false;
  const checked = ensureLab(id);
  const h = lab.hotspots?.[0];
  const hotspotBtns = (lab.hotspots || []).map((x, i) => `<button class="hotspot ${i === 0 ? "active" : ""}" style="left:${x.x}%;top:${x.y}%" data-hotspot="${i}" aria-label="${esc(x.label)}">${pad(i + 1)}</button>`).join("");
  const stepBtns = lab.steps.map((s, i) => `<button class="step-btn ${i === 0 ? "active" : ""}" data-step="${i}"><span class="sn">${pad(i + 1)}</span><span class="st">${s.title}</span></button>`).join("");
  const checkItems = lab.deliverables.map((x, i) => `<div class="check-item ${checked[i] ? "done" : ""}" data-check-row="${i}"><button data-lab-check="${i}" aria-label="${esc(x)}">${checkSvg}</button><span>${x}</span></div>`).join("");
  const idx = LAB_ORDER.indexOf(id);
  const prev = LAB_ORDER[idx - 1];
  const next = LAB_ORDER[idx + 1];
  const stageWide = lab.id === "p8" ? " wide contain" : "";
  const done = labDone(id);
  const io = lab.id === "p8"
    ? { input: "Camera / 4MP MJPEG", process: "V4L2 → 预处理 → ONNX/NCNN → NMS → 规则", output: "事件 JSON + 抓拍 + Dashboard" }
    : { input: `${lab.pipeline[0]} / 采集`, process: lab.pipeline.slice(1, -1).join(" → "), output: `${lab.pipeline[lab.pipeline.length - 1]} / 交付` };

  return `<div class="page wrap">
    <a class="back-link" href="#/lab">${"←"} 返回实验室</a>
    <div class="lab-title-row">
      <div><div class="eyebrow">${lab.eyebrow}</div><h1>${lab.title}</h1><p>${lab.intro}</p></div>
      <div class="head-side"><strong>${done ? "DONE" : lab.code}</strong>${lab.weeks}<br>${lab.phase} / PROJECT LAB</div>
    </div>

    <div class="lab-hero">
      <div class="lab-stage${stageWide}">
        <img src="${lab.image}" alt="${esc(lab.imageAlt)}">
        ${lab.id === "p8" ? "" : `<div class="stage-label">EXPLODED VIEW / CLICK THE DOTS</div>`}
        ${hotspotBtns}
        <div class="hotspot-info" id="hotspotInfo"><strong>${h?.label || "MISSION"}</strong><p>${h?.detail || lab.intro}</p></div>
      </div>
      <div class="panel mission-panel">
        <div class="kicker-row"><span class="tag mint">${lab.code}</span><span class="tag">${lab.weeks}</span>${done ? `<span class="tag amber">COMPLETE</span>` : ""}</div>
        <h2>MISSION CONTROL</h2>
        <p>${p?.goal || lab.intro}</p>
        <div class="rule"></div>
        <div class="eyebrow" style="font-size:9px">DELIVERABLES</div>
        <div class="check-list">${checkItems}</div>
        <div class="risk-box"><b class="amber">风险：</b>${lab.risk}</div>
        <div class="rule"></div>
        <div class="eyebrow" style="font-size:9px">ACCEPTANCE</div>
        <p>${p?.accept || lab.accept}</p>
      </div>
    </div>

    <div class="lab-io-grid">
      <div class="lab-io-card"><span>INPUT / 输入</span><strong>${io.input}</strong><p>先确认画面、光照、帧率与触发条件。</p></div>
      <div class="lab-io-card"><span>PROCESS / 处理</span><strong>${io.process}</strong><p>模型只做感知；区域、连续帧、阈值由规则决定。</p></div>
      <div class="lab-io-card"><span>OUTPUT / 结果</span><strong>${io.output}</strong><p>结果必须可查询、可处置、可追溯，而不只是一个标签。</p></div>
    </div>
    ${lab.id === "p8" ? `<div class="split-callout"><div><h3>这就是网站首页那台设备。</h3><p>去“设备”页看 7 层拆解、外部接口和 4 个落地场景模拟。</p></div><a class="btn btn-primary" href="#/device">打开设备全景 ${arrow}</a></div>` : ""}

    <div class="lab-content">
      <div><div class="eyebrow" style="margin-bottom:10px">DECOMPOSITION / ${lab.steps.length} STEPS</div><div class="step-list">${stepBtns}</div></div>
      <div class="panel step-detail" id="stepDetail">${stepDetailHTML(lab, 0)}</div>
    </div>

    ${simHTML(lab)}

    <div class="lab-bottom-nav">
      ${prev ? `<a class="btn btn-ghost" href="#/lab/${prev}"><span><small>PREVIOUS LAB</small><strong>${LABS[prev].title}</strong></span><span>${"←"}</span></a>` : `<span></span>`}
      ${next ? `<a class="btn btn-primary" href="#/lab/${next}"><span><small>NEXT LAB</small><strong>${LABS[next].title}</strong></span><span>${arrow}</span></a>` : `<a class="btn btn-primary" href="#/journal"><span><small>FINISH</small><strong>查看学习日志</strong></span><span>${arrow}</span></a>`}
    </div>
  </div>`;
}

/* ------------------------------- MACHINE ------------------------------- */
function renderMachine() {
  const cards = MACHINES.map((m) => `<div class="machine-card">
    <img src="${m.image}" alt="${esc(m.title)}" loading="lazy">
    <div class="mc-body">
      <div class="kicker-row"><span class="tag mint">${m.tag}</span></div>
      <h3>${m.title}</h3><div class="spec">${m.spec}</div><p>${m.body}</p>
      <div class="mc-checks">${m.checks.map((c) => `<span class="tag">${c}</span>`).join("")}</div>
    </div>
  </div>`).join("");

  const modules = [
    ["01", "Camera", "采集画面；曝光、白平衡、帧率"],
    ["02", "SBC", "Linux、推理、服务；内存与散热"],
    ["03", "Thermal", "被动散热；避免降频与 FPS 骤降"],
    ["04", "Storage", "rootfs、模型、日志；只读与配额"],
    ["05", "Power", "稳定 5V；独立供电与保护"],
    ["06", "Network", "SSH、RTSP、MQTT、OTA"],
    ["07", "Debug", "UART、dmesg、GDB、日志"]
  ].map(([n, t, d]) => `<div class="module-item"><div class="mi">${n}</div><div><strong>${t}</strong><span>${d}</span></div></div>`).join("");

  return `<div class="page wrap">
    ${pageHead("MACHINE / FIELD NOTES", "先看机器，再看代码", "项目落地时，问题往往不在算法，而在电源、散热、存储、网络和可维护性。先学会看设备。", `<div class="head-side"><strong>4</strong>HARDWARE LAYERS</div>`)}
    <div class="machine-grid">${cards}</div>

    <div class="section-head"><div><div class="eyebrow">EXPLODED VIEW</div><h2>一台设备的七个模块</h2></div><a class="link-arrow" href="#/lab/p8">进入 Capstone ${arrow}</a></div>
    <div class="exploded-block">
      <div class="exploded-img"><img src="assets/exploded.png" alt="Edge Vision Box 拆解图"></div>
      <div class="module-list">${modules}</div>
    </div>

    <div class="section-head"><div><div class="eyebrow">BUY IN STAGES</div><h2>采购路线：不要第一天买齐</h2></div></div>
    <div class="buy-grid">
      <div class="buy-card"><div class="eyebrow">MINIMUM</div><h3>先开始</h3><p>Pi 4B/5 8GB、64GB TF、官方电源、USB 摄像头、USB-TTL、万用表。</p><strong>¥1,100–1,800</strong></div>
      <div class="buy-card"><div class="eyebrow">RECOMMENDED</div><h3>做视觉</h3><p>Pi 5 + Camera Module + 散热壳 + 逻辑分析仪；驱动、V4L2、实时视觉更顺。</p><strong>¥1,800–2,800</strong></div>
      <div class="buy-card"><div class="eyebrow">EDGE AI</div><h3>要算力时</h3><p>Jetson Orin Nano；TensorRT、NPU、Capstone。先确认你的模型真的需要它。</p><strong>¥3,000–4,500</strong></div>
    </div>
    <div class="split-callout"><div><h3>没有板子也能开始</h3><p>QEMU + 笔记本摄像头 + Colab 可以学完前 10 周；第 9 周再买板子。</p></div><a class="btn btn-ghost" href="#/lesson/1">从第 1 周开始 ${arrow}</a></div>
  </div>`;
}

/* ------------------------------- MANUAL ------------------------------- */
function renderManual() {
  const resources = [
    ["MIT Missing Semester", "Shell / Git / 调试", "https://missing.csail.mit.edu/"],
    ["CS50", "计算机通识", "https://cs50.harvard.edu/x/"],
    ["cppreference", "C++ 语法 / STL", "https://en.cppreference.com/w/"],
    ["CMake Docs", "构建 / 测试", "https://cmake.org/documentation/"],
    ["Bootlin", "内核 / 驱动 / DT", "https://bootlin.com/docs/"],
    ["LDD3", "字符设备 / 并发", "https://lwn.net/Kernel/LDD3/"],
    ["Buildroot", "系统构建", "https://buildroot.org/downloads/manual/manual.html"],
    ["Yocto", "layer / recipe", "https://docs.yoctoproject.org/"],
    ["PyTorch", "训练 / 迁移", "https://pytorch.org/tutorials/"],
    ["CS231n", "CNN / 视觉", "https://cs231n.github.io/"],
    ["OpenCV", "图像 / 相机", "https://docs.opencv.org/"],
    ["ONNX Runtime", "端侧推理", "https://onnxruntime.ai/docs/"]
  ].map(([n, d, u]) => `<a href="${u}" target="_blank" rel="noopener"><span>${n}<br><em style="font-style:normal;color:var(--dim)">${d}</em></span><span>${arrow}</span></a>`).join("");

  return `<div class="page wrap">
    ${pageHead("FIELD MANUAL / READ THIS", "学习手册", "四件事决定你能不能走完：语言策略、每日节奏、阶段 Gate、资源克制。", `<div class="head-side"><strong>52</strong>WEEKS / 800 H</div>`)}
    <div class="manual-grid">
      <div class="panel manual-card">
        <div class="eyebrow">01 / LANGUAGE</div><h2>C++ 优先，C 不缺席</h2>
        <p>C 是内核、驱动、U-Boot 和系统调用的语言；C++ 是应用、视觉与推理工程的语言。不要用 C++ 写内核模块，也不要用 C 手写所有应用层抽象。</p>
        <ul><li>C 核心 2 周：指针、内存、结构体、GDB</li><li>C++ 3 周：RAII、STL、智能指针、CMake</li><li>Linux 系统编程：仍然用 C</li><li>P2/P3 驱动：读 C、写 C、调 C</li></ul>
      </div>
      <div class="panel manual-card">
        <div class="eyebrow">02 / DAILY LOOP</div><h2>每天 2 小时，怎么切</h2>
        <p>不要“看两小时视频”。把时间切成回忆、概念、动手、记录四段，确保每天都有可验证的动作。</p>
        <ul><li>20 min：合上资料回忆</li><li>50 min：只读一个来源</li><li>50 min：从空目录动手</li><li>10 min：日志 + commit</li></ul>
      </div>
    </div>

    <div class="section-head"><div><div class="eyebrow">GATES</div><h2>三个 Gate，不是三次考试</h2></div><span class="tag">能力证据</span></div>
    <div class="gate-grid">
      <div class="gate-card"><div class="g-day">D70 / GATE 1</div><h3>C/C++ + Linux + 硬件</h3><p>500 行 C/C++ 工具、GDB/Valgrind、串口传感器、进程/线程。过不了，用 1–2 周重做项目。</p></div>
      <div class="gate-card"><div class="g-day">D168 / GATE 2</div><h3>嵌入式系统集成</h3><p>从零构建镜像、V4L2 取流、RTSP 拉流、字符驱动 + DT、远程部署。能 30 分钟复现设备。</p></div>
      <div class="gate-card"><div class="g-day">D294 / GATE 3</div><h3>边缘部署</h3><p>摄像头→推理→事件端到端；延迟/内存表；8 小时稳定；部署手册。先稳定，再优化。</p></div>
    </div>

    <div class="manual-grid" style="margin-top:12px">
      <div class="panel manual-card">
        <div class="eyebrow">03 / HARDWARE</div><h2>最低启动条件</h2>
        <p>一台能装 Ubuntu 的电脑（16GB 内存最好）、一块 Pi 4B/5 或同级 Linux 板、一个摄像头、一根 USB-TTL、一个万用表。没有板子可以先用 QEMU + 摄像头 + Colab。</p>
        <ul><li>第 1 周：USB-TTL + 万用表</li><li>第 9 周：板子 + 摄像头</li><li>第 35 周：按 Capstone 决定是否上 Jetson</li></ul>
      </div>
      <div class="panel manual-card">
        <div class="eyebrow">04 / RESOURCES</div><h2>少而准的资料</h2>
        <p>同一时间只跟一个主资源；第二资源只用于查漏。每看完一章必须做一个最小实验。</p>
        <div class="resource-list">${resources}</div>
      </div>
    </div>
  </div>`;
}

/* ------------------------------- JOURNAL ------------------------------- */
function renderJournal() {
  const done = countDone();
  const pct = overallPct();
  const phaseLines = DATA.phases.map((p) => {
    const st = phaseStats(p.code);
    return `<div class="phase-line" style="--pc:${p.color}"><span class="pl-code">${p.code}</span><div class="pl-bar"><span style="width:${st.pct}%"></span></div><span class="pl-val">${st.pct}%</span></div>`;
  }).join("");

  return `<div class="page wrap">
    ${pageHead("JOURNAL / LOCAL FIRST", "学习日志", "进度只保存在你的浏览器。完成一天、一个项目拆解，都会在这里留下证据。", `<div class="head-side"><strong>${pct}%</strong>OVERALL</div>`)}
    <div class="journal-stats">
      <div class="panel journal-stat"><strong>${done}</strong><span>DAYS DONE</span></div>
      <div class="panel journal-stat"><strong>${DATA.weeks.filter((w) => weekDone(w.n)).length}</strong><span>WEEKS DONE</span></div>
      <div class="panel journal-stat"><strong>${labDoneCount()}</strong><span>LABS DONE</span></div>
      <div class="panel journal-stat"><strong>${pct}%</strong><span>COMPLETE</span></div>
    </div>

    <div class="journal-grid">
      <div class="panel journal-card">
        <div class="eyebrow">PHASE BREAKDOWN</div><h2>六个阶段的进度</h2>
        <div class="phase-lines">${phaseLines}</div>
        <div class="rule"></div>
        <div class="kicker-row"><span class="tag mint">NEXT</span><span class="tag">W${pad(nextIncompleteWeek())}</span><span class="tag">${WEEK[nextIncompleteWeek()].title}</span></div>
        <div style="margin-top:14px"><a class="btn btn-primary" href="#/lesson/${nextIncompleteWeek()}">继续学习 ${arrow}</a></div>
      </div>
      <div class="panel journal-card">
        <div class="eyebrow">WEEKLY REFLECTION</div><h2>写下这周的事实</h2>
        <textarea class="journal-note" id="journalNote" placeholder="完成了什么？最大的卡点？根因？下周只改哪一件事？">${esc(progress.notes)}</textarea>
        <div class="journal-actions"><span class="tag" id="noteState">自动保存到本地</span><button class="danger-link" data-reset>重置全部进度</button></div>
      </div>
    </div>

    <div class="split-callout"><div><h3>进度不是目的，证据才是</h3><p>每周至少留下 1 个 commit、1 页概念图、1 份实验记录、1 个错误根因、1 段 60 秒演示。</p></div><a class="btn btn-ghost" href="#/lab">去实验室 ${arrow}</a></div>
  </div>`;
}

/* ------------------------------- DEVICE ------------------------------- */
function moduleInspectorHTML(id) {
  const m = DEVICE_MODULES.find((x) => x.id === id) || DEVICE_MODULES[0];
  return `<div class="inspector-top">
      <span class="tag mint">MODULE ${m.num} / 07</span>
      <span class="tag ${m.tone === "amber" ? "amber" : ""}">${m.short}</span>
    </div>
    <h2>${m.title}</h2>
    <p>${m.role}</p>
    <div class="spec-stack">
      <div class="spec-row"><span>规格</span><strong>${m.spec}</strong></div>
      <div class="spec-row"><span>接口</span><strong>${m.io}</strong></div>
      <div class="spec-row"><span>失效</span><strong>${m.failure}</strong></div>
    </div>
    <div class="inspector-test"><span>验收动作</span><p>${m.test}</p></div>
    <a class="link-arrow" href="#/lab/p8">回到 Capstone 项目 ${arrow}</a>`;
}

function updateDeviceModule(id) {
  const m = DEVICE_MODULES.find((x) => x.id === id);
  if (!m) return;
  activeDeviceModule = id;
  const box = $("#moduleInspector");
  if (box) box.innerHTML = moduleInspectorHTML(id);
  $$("[data-module]").forEach((b) => b.classList.toggle("active", b.dataset.module === id));
}

function sceneStageHTML(scene) {
  const zone = scene.zone
    ? `<svg class="scene-zone" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="${scene.zone.map((p) => p.join(",")).join(" ")}"></polygon>
      </svg>`
    : "";
  const boxes = scene.boxes.map((b, i) => `<div class="det-box ${b.tone}" style="left:${b.x}%;top:${b.y}%;width:${b.w}%;height:${b.h}%;--i:${i}">
      <span>${b.label}</span>
    </div>`).join("");
  const metrics = scene.metrics.map((m) => `<div><span>${m[0]}</span><strong>${m[1]}</strong></div>`).join("");
  return `<div class="scene-frame" id="sceneFrame">
    <img src="${scene.image}" alt="${scene.title}">
    <div class="scene-top">
      <div class="scene-live"><i></i> LIVE / ${scene.tag}</div>
      <div class="scene-time">14:32:05 · CAM-01</div>
    </div>
    ${zone}
    ${boxes}
    <div class="scene-hud">${metrics}</div>
  </div>`;
}

function sceneConsoleHTML(scene) {
  const dets = scene.detections.map((d) => `<div class="det-row">
    <span class="det-dot ${d.status === "NG" || d.status === "ALERT" ? "red" : "green"}"></span>
    <div><strong>${d.name}</strong><small>${d.meta}</small></div>
    <span class="tag ${d.status === "NG" || d.status === "ALERT" ? "red" : "mint"}">${d.status}</span>
  </div>`).join("");
  return `<div class="scene-console-head">
      <div><div class="eyebrow">INFERENCE OUTPUT</div><h3>当前帧结果</h3></div>
      <span class="tag mint">${scene.tag}</span>
    </div>
    <div class="det-list">${dets}</div>
    <div class="event-json"><div class="event-json-head">EVENT / JSON</div><pre>${esc(JSON.stringify(scene.event, null, 2))}</pre></div>
    <div class="scene-result"><span>RESULT</span><strong>${scene.result}</strong></div>
    <div class="scene-actions">
      <button class="btn btn-primary" data-scene-run>运行检测 ${arrow}</button>
      <button class="btn btn-ghost" data-lightbox="${scene.effect}" data-caption="${scene.title} · 标注效果图">查看标注图</button>
    </div>`;
}

function renderSceneSim() {
  const scene = SCENES[activeScene] || SCENES.factory;
  return `<div class="scene-layout">
    ${sceneStageHTML(scene)}
    <aside class="panel scene-console" id="sceneConsole">${sceneConsoleHTML(scene)}</aside>
  </div>
  <div class="scene-explain">
    <div><span>01 / INPUT</span><strong>摄像头画面</strong><p>固定机位、稳定光照；先保证能看清，再谈模型。</p></div>
    <div><span>02 / PROCESS</span><strong>检测 + 规则</strong><p>模型给出框和类别，规则判断区域、连续帧和业务阈值。</p></div>
    <div><span>03 / OUTPUT</span><strong>事件 + 证据</strong><p>不是一张热力图，而是可查询、可处置的事件。</p></div>
  </div>`;
}

function updateScene(id) {
  if (!SCENES[id]) return;
  activeScene = id;
  const host = $("#sceneSim");
  if (host) host.innerHTML = renderSceneSim();
  $$("[data-scene]").forEach((b) => b.classList.toggle("active", b.dataset.scene === id));
}

function renderDevice() {
  const m = DEVICE_MODULES.find((x) => x.id === activeDeviceModule) || DEVICE_MODULES[0];
  const hotspots = DEVICE_MODULES.map((x) => `<button class="hotspot ${x.id === activeDeviceModule ? "active" : ""}" style="left:${x.x}%;top:${x.y}%" data-module="${x.id}" aria-label="${x.title}">${x.num}</button>`).join("");
  const moduleCards = DEVICE_MODULES.map((x) => `<button class="module-card ${x.id === activeDeviceModule ? "active" : ""}" data-module="${x.id}">
    <span class="mc-num">${x.num}</span>
    <strong>${x.title}</strong>
    <small>${x.short}</small>
  </button>`).join("");
  const caps = CAPABILITIES.map((c) => `<div class="cap-card">
    <div class="cap-code">${c.code} / ${c.en}</div>
    <h3>${c.title}</h3><p>${c.body}</p><span class="cap-out">${c.out}</span>
  </div>`).join("");
  const tabs = Object.values(SCENES).map((s) => `<button class="scene-tab ${s.id === activeScene ? "active" : ""}" data-scene="${s.id}"><span>${s.tag.split(" / ")[0]}</span><strong>${s.label}</strong></button>`).join("");
  const stages = SIGNAL_STAGES.map((s, i) => `<div class="signal-stage ${s.tone}">
    <div class="signal-num">${s.n}</div><h4>${s.t}</h4><p>${s.s}</p><small>${s.d}</small>
    ${i < SIGNAL_STAGES.length - 1 ? `<span class="signal-arrow">${arrow}</span>` : ""}
  </div>`).join("");
  const gallery = Object.values(SCENES).map((s) => `<button class="scene-shot" data-lightbox="${s.effect}" data-caption="${s.title} · ${s.tag} · 标注效果图">
    <img src="${s.effect}" alt="${s.title} 标注效果图" loading="lazy">
    <span><b>${s.label}</b>${s.tag}</span>
  </button>`).join("");

  return `<div class="page wrap device-page">
    <a class="back-link" href="#/lab">${"←"} 返回实验室</a>
    ${pageHead("DEVICE / EDGE VISION BOX", "一台设备，七层拆解", "不是黑盒。先看清每一层做什么、怎么坏、怎么验，再谈模型和指标。", `<div class="head-side"><strong>7</strong>MODULES / P8</div>`)}

    <div class="device-hero">
      <div class="device-stage">
        <img src="assets/device/exploded-clean.jpg" alt="Edge Vision Box 内部爆炸图">
        <div class="stage-label">EXPLODED ASSEMBLY / CLICK A MODULE</div>
        ${hotspots}
        <div class="device-stage-foot">7 MODULES · 7 FAILURE MODES · 7 ACCEPTANCE TESTS</div>
      </div>
      <aside class="panel module-inspector" id="moduleInspector">${moduleInspectorHTML(m.id)}</aside>
    </div>

    <div class="module-strip">${moduleCards}</div>

    <div class="device-plates">
      <button class="plate-card" data-lightbox="assets/device/exploded-annotated.jpg" data-caption="内部拆解技术图 · 7 个模块">
        <span>01 / TECHNICAL PLATE</span><strong>内部拆解图</strong><small>模块 / 接口 / 失效 / 验收</small>
      </button>
      <button class="plate-card" data-lightbox="assets/device/device-external.jpg" data-caption="外部接口与安装 · 概念设计">
        <span>02 / EXTERNAL PLATE</span><strong>外部接口图</strong><small>镜头 / 网口 / USB-C / 散热</small>
      </button>
    </div>

    <section class="device-section">
      <div class="section-head"><div><div class="eyebrow">CAPABILITIES</div><h2>它到底能做什么</h2></div><span class="tag">从像素到事件</span></div>
      <div class="cap-grid">${caps}</div>
      <div class="io-formula">
        <div><span>INPUT</span><strong>FRAME</strong><small>摄像头 / 视频流</small></div>
        <b>${arrow}</b>
        <div><span>MODEL</span><strong>PERCEPTION</strong><small>检测 / 分类 / 分割</small></div>
        <b>${arrow}</b>
        <div><span>RULE</span><strong>DECISION</strong><small>区域 / 连续帧 / 阈值</small></div>
        <b>${arrow}</b>
        <div><span>OUTPUT</span><strong>EVENT</strong><small>JSON + 抓拍 + 告警</small></div>
      </div>
    </section>

    <section class="device-section">
      <div class="section-head"><div><div class="eyebrow">SCENE SIMULATOR</div><h2>落地场景，不是口号</h2><p>切换应用，观察同一台设备如何把画面变成不同的业务结果。</p></div><a class="link-arrow" href="#/lab/p8">进入 Capstone 项目 ${arrow}</a></div>
      <div class="scene-tabs">${tabs}</div>
      <div id="sceneSim">${renderSceneSim()}</div>
      <div class="scene-gallery">${gallery}</div>
    </section>

    <section class="device-section">
      <div class="section-head"><div><div class="eyebrow">SIGNAL CHAIN</div><h2>一帧画面，六段旅程</h2></div><span class="tag">端到端 &lt; 100 ms</span></div>
      <div class="signal-map">${stages}</div>
    </section>

    <div class="split-callout"><div><h3>还想看它怎么被做出来？</h3><p>从 C++ 工具、驱动、镜像，到模型训练和端侧推理，Capstone 把七个模块串成一条链。</p></div><a class="btn btn-primary" href="#/lab/p8">打开 P8 拆解 ${arrow}</a></div>
  </div>`;
}


/* ------------------------------- ROUTER / EVENTS ------------------------------- */
function render() {
  const route = parseRoute();
  setMenu(false);
  let html = "";
  if (route.name === "home") html = renderHome();
  else if (route.name === "route") html = renderRoute();
  else if (route.name === "device") html = renderDevice();
  else if (route.name === "lesson") html = renderLesson(route.n);
  else if (route.name === "lab") html = renderLabList();
  else if (route.name === "labDetail") html = renderLab(route.id);
  else if (route.name === "machine") html = renderMachine();
  else if (route.name === "manual") html = renderManual();
  else if (route.name === "journal") html = renderJournal();
  else html = renderHome();

  app.innerHTML = html;
  updateChrome();
  updateScroll();
  document.title = `${route.name === "home" ? "从零到边缘智能" : route.name === "device" ? "设备 · Edge Vision Box" : route.name === "lesson" ? `W${pad(route.n)} · ${WEEK[route.n]?.title || ""}` : route.name === "labDetail" ? LABS[route.id]?.title || "实验室" : "EDGEPATH 365"} · EDGEPATH 365`;
  window.scrollTo(0, 0);
  if (route.name === "lesson") updateFocusUI();
  if (route.name === "labDetail") updateSimMetrics();
}

function updateWeekUI(n) {
  const week = WEEK[n];
  if (!week) return;
  const done = week.days.filter((d) => dayDone(d.d)).length;
  const pct = Math.round((done / 7) * 100);
  const ring = $("#weekRing");
  if (ring) ring.style.setProperty("--p", pct);
  const val = $("#weekRingValue");
  if (val) val.textContent = `${pct}%`;
  const label = $("#weekDoneLabel");
  if (label) label.textContent = `${done} / 7 DAYS`;
  const btn = $("#completeWeekBtn");
  if (btn) {
    btn.textContent = done === 7 ? "本周已完成" : "标记本周完成";
    btn.disabled = done === 7;
  }
  week.days.forEach((d) => {
    const row = $(`[data-day-row="${d.d}"]`);
    if (!row) return;
    row.classList.toggle("is-done", dayDone(d.d));
    const b = row.querySelector("[data-day]");
    if (b) b.setAttribute("aria-pressed", String(dayDone(d.d)));
  });
  updateChrome();
}

function toggleDay(n) {
  if (dayDone(n)) delete progress.done[n];
  else progress.done[n] = true;
  save();
  updateWeekUI(parseRoute().n);
  const w = parseRoute().n;
  if (w && weekDone(w)) toast(`W${pad(w)} 完成：本周 7 天全部打勾。`);
}

function completeWeek(n) {
  const w = WEEK[n];
  if (!w) return;
  w.days.forEach((d) => { progress.done[d.d] = true; });
  save();
  updateWeekUI(n);
  toast(`W${pad(n)} 已标记完成。下一步：提交本周产出。`);
}

function updateSimMetrics() {
  if (!simState.lab) return;
  const m = calcSim();
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.innerHTML = `${v}<em>${id === "simLatency" ? "ms" : id === "simFps" ? "FPS" : id === "simAcc" ? "%" : "MB"}</em>`; };
  set("simLatency", m.latency);
  set("simFps", m.fps);
  set("simAcc", m.acc);
  set("simMem", m.mem);
  const bars = $$(".sim-metrics .sim-bar span");
  if (bars.length >= 4) {
    bars[0].style.width = `${Math.min(100, (m.latency / 180) * 100)}%`;
    bars[1].style.width = `${Math.min(100, (m.fps / 32) * 100)}%`;
    bars[2].style.width = `${m.acc}%`;
    bars[3].style.width = `${Math.min(100, (m.mem / 600) * 100)}%`;
  }
}

function updateHotspot(i) {
  const route = parseRoute();
  const lab = LABS[route.id];
  if (!lab) return;
  const h = lab.hotspots?.[i];
  if (!h) return;
  $$(".hotspot").forEach((b) => b.classList.toggle("active", Number(b.dataset.hotspot) === i));
  const info = $("#hotspotInfo");
  if (info) info.innerHTML = `<strong>${h.label}</strong><p>${h.detail}</p>`;
}

function updateStep(i) {
  const route = parseRoute();
  const lab = LABS[route.id];
  if (!lab) return;
  const idx = Math.max(0, Math.min(lab.steps.length - 1, i));
  simState.step = idx;
  $$(".step-btn").forEach((b) => b.classList.toggle("active", Number(b.dataset.step) === idx));
  const detail = $("#stepDetail");
  if (detail) detail.innerHTML = stepDetailHTML(lab, idx);
}

async function runSim() {
  if (simState.running) return;
  const stages = $$(".pstage");
  if (!stages.length) return;
  simState.running = true;
  const btn = $("[data-sim-run]");
  const old = btn?.textContent || "";
  if (btn) { btn.disabled = true; btn.textContent = "RUNNING…"; }
  stages.forEach((s) => s.classList.remove("active", "done"));
  for (const stage of stages) {
    stage.classList.add("active");
    await sleep(480);
    stage.classList.remove("active");
    stage.classList.add("done");
  }
  simState.running = false;
  if (btn) { btn.disabled = false; btn.textContent = old; }
  if (!document.querySelector(".pstage")) return;
  const m = calcSim();
  toast(simState.lab === "p8" ? `推理完成：${m.latency} ms · ${m.fps} FPS · ${m.acc}%` : "管线跑通：每一步都要留下日志或截图。");
}

function startFocus() {
  if (focus.running) return;
  focus.running = true;
  focus.timer = setInterval(() => {
    focus.seconds -= 1;
    if (focus.seconds <= 0) {
      focus.seconds = 0;
      focus.running = false;
      clearInterval(focus.timer);
      toast("25 分钟完成。站起来，走两步。");
    }
    updateFocusUI();
  }, 1000);
  updateFocusUI();
}

function pauseFocus() {
  focus.running = false;
  clearInterval(focus.timer);
  updateFocusUI();
}

function resetFocus() {
  pauseFocus();
  focus.seconds = 25 * 60;
  updateFocusUI();
}

function updateFocusUI() {
  const el = $("#focusTime");
  if (!el) return;
  el.textContent = `${pad(Math.floor(focus.seconds / 60))}:${pad(focus.seconds % 60)}`;
  const btn = $("#focusToggle");
  if (btn) btn.textContent = focus.running ? "暂停" : "开始";
}

function rerenderProjectGrid() {
  const grid = $("#projectGrid");
  if (grid) grid.innerHTML = projectGrid();
  $$("[data-filter]").forEach((b) => b.classList.toggle("active", b.dataset.filter === labFilter));
}

/* events */
app.addEventListener("click", (e) => {
  const day = e.target.closest("[data-day]");
  if (day) { toggleDay(Number(day.dataset.day)); return; }

  const goBtn = e.target.closest("[data-go]");
  if (goBtn) {
    const n = parseRoute().n;
    if (goBtn.dataset.go === "prev") goLesson(n - 1);
    else goLesson(n + 1);
    return;
  }

  const complete = e.target.closest("[data-complete-week]");
  if (complete) { completeWeek(Number(complete.dataset.completeWeek)); return; }

  const filter = e.target.closest("[data-filter]");
  if (filter) { labFilter = filter.dataset.filter; rerenderProjectGrid(); return; }

  const moduleBtn = e.target.closest("[data-module]");
  if (moduleBtn) { updateDeviceModule(moduleBtn.dataset.module); return; }

  const sceneTab = e.target.closest("[data-scene]");
  if (sceneTab) { updateScene(sceneTab.dataset.scene); return; }

  const sceneRun = e.target.closest("[data-scene-run]");
  if (sceneRun) { runScene(); return; }

  const lightboxBtn = e.target.closest("[data-lightbox]");
  if (lightboxBtn) { openLightbox(lightboxBtn.dataset.lightbox, lightboxBtn.dataset.caption || ""); return; }

  const hot = e.target.closest("[data-hotspot]");
  if (hot) { updateHotspot(Number(hot.dataset.hotspot)); return; }

  const step = e.target.closest("[data-step]");
  if (step) { updateStep(Number(step.dataset.step)); return; }

  const seg = e.target.closest("[data-seg]");
  if (seg) {
    const key = seg.dataset.seg;
    let val = seg.dataset.val;
    if (key === "res") val = Number(val);
    simState[key] = val;
    const group = seg.closest(".segmented");
    if (group) $$("button", group).forEach((b) => b.classList.toggle("active", b.dataset.val === String(val)));
    updateSimMetrics();
    return;
  }

  const run = e.target.closest("[data-sim-run]");
  if (run) { runSim(); return; }

  const check = e.target.closest("[data-lab-check]");
  if (check) {
    const route = parseRoute();
    const id = route.id;
    const arr = ensureLab(id);
    const i = Number(check.dataset.labCheck);
    arr[i] = !arr[i];
    progress.labs[id] = arr;
    save();
    const row = check.closest(".check-item");
    if (row) row.classList.toggle("done", Boolean(arr[i]));
    if (labDone(id)) toast(`${LABS[id].code} 交付清单完成。可以进入下一步了。`);
    updateChrome();
    return;
  }

  const reset = e.target.closest("[data-reset]");
  if (reset) {
    if (confirm("重置全部进度？这会清除所有打勾、项目清单和笔记，且不可恢复。")) {
      localStorage.removeItem(KEY);
      location.reload();
    }
    return;
  }

  const focusBtn = e.target.closest("[data-focus]");
  if (focusBtn) {
    if (focusBtn.dataset.focus === "toggle") {
      if (focus.running) pauseFocus(); else startFocus();
    } else resetFocus();
    return;
  }
});

document.addEventListener("click", (e) => {
  if (e.target.closest("[data-close-lightbox]") || e.target.classList.contains("lightbox")) closeLightbox();
});

document.addEventListener("change", (e) => {
  if (e.target.matches("[data-roi]")) {
    simState.roi = e.target.checked;
    updateSimMetrics();
  }
});

document.addEventListener("input", (e) => {
  if (e.target.id === "journalNote") {
    progress.notes = e.target.value;
    save();
    const st = $("#noteState");
    if (st) { st.textContent = "已保存"; setTimeout(() => { if (st) st.textContent = "自动保存到本地"; }, 1200); }
  }
});

document.addEventListener("keydown", (e) => {
  if (e.target.matches("input,textarea,select") || e.target.isContentEditable) return;
  if (e.key === "Escape") { closeLightbox(); setMenu(false); return; }
  if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
  const route = parseRoute();
  if (route.name === "lesson") {
    e.preventDefault();
    goLesson(route.n + (e.key === "ArrowRight" ? 1 : -1));
  } else if (route.name === "labDetail") {
    const lab = LABS[route.id];
    if (!lab) return;
    e.preventDefault();
    updateStep(simState.step + (e.key === "ArrowRight" ? 1 : -1));
  }
});

$("#menuBtn").addEventListener("click", () => {
  setMenu(!$("#mainNav").classList.contains("open"));
});
$$("#mainNav a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

window.addEventListener("scroll", updateScroll, { passive: true });
window.addEventListener("hashchange", render);

function runScene() {
  const frame = $("#sceneFrame");
  if (!frame) return;
  frame.classList.remove("running");
  void frame.offsetWidth;
  frame.classList.add("running");
  const scene = SCENES[activeScene];
  toast(`检测完成：${scene.result}`);
  setTimeout(() => frame.classList.remove("running"), 2400);
}

function openLightbox(src, caption) {
  const old = $("#lightbox");
  if (old) old.remove();
  const el = document.createElement("div");
  el.id = "lightbox";
  el.className = "lightbox";
  el.innerHTML = `<button class="lightbox-close" data-close-lightbox aria-label="关闭">×</button>
    <figure><img src="${src}" alt="${esc(caption)}"><figcaption>${esc(caption)}</figcaption></figure>`;
  document.body.appendChild(el);
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const el = $("#lightbox");
  if (el) el.remove();
  document.body.style.overflow = "";
}

/* boot */
updateFocusUI();
render();

if ("serviceWorker" in navigator) {
  const secure = location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1";
  if (secure) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {});
    });
  }
}

