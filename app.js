/* Le grand quiz de l'Avent
   Deux modes dans la même page :
   - la télé (par défaut) : affiche le calendrier, les questions et le score ;
   - la manette (?m=<id>) : le téléphone, qui envoie les réponses à la télé.
   Les deux se parlent en direct grâce à PeerJS (WebRTC). */

const YEAR = 2026;
const PEER_PREFIX = "quiznoel-fxp-";
const params = new URLSearchParams(location.search);
const padTarget = params.get("m");
const preview = location.hash === "#apercu";

function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
function isOpen(d) { return preview || new Date() >= new Date(YEAR, 11, d); }
function isToday(d) { const t = new Date(); return t.getFullYear() === YEAR && t.getMonth() === 11 && t.getDate() === d; }
function title(d) { return d === 24 ? "24 décembre · La grande finale de Noël" : `${d} décembre`; }
const LETTERS = "ABCD";

if (padTarget) startPad(padTarget); else startTv();

/* ======================================================================
   TÉLÉ
   ====================================================================== */
function startTv() {
  const KEY = "quiz-avent-2026";
  const store = {
    get() { try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { return {}; } },
    set(v) { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) {} }
  };
  let answers = store.get();
  let view = { screen: "grid" };       // grid | locked | q | end
  let peer = null, peerId = null;
  const conns = new Set();

  document.getElementById("app").innerHTML = `
  <div class="wrap">
    <header>
      <p class="eyebrow">Décembre 2026</p>
      <h1>Le grand quiz de l'Avent</h1>
      <p class="intro">Cinq questions par jour sur la France, de Redon à Marseille, et une grande finale de 24 questions sur Noël le 24. Une bonne réponse, un bonbon. Je compte les points.</p>
      <div class="scorebar" id="scorebar"></div>
      <div><button type="button" class="conn" id="conn"><span class="led"></span><span id="conn-t">Connecter le téléphone</span></button></div>
    </header>
    <div class="grid" id="grid" aria-label="Les 24 jours du quiz"></div>
    <footer>Chaque jour se débloque à sa date. Pas de triche.</footer>
  </div>
  <div class="stage" id="stage" role="dialog" aria-modal="true" aria-labelledby="stage-title"><div class="stage-in" id="stage-in"></div></div>
  <div class="qr-panel" id="qrp" role="dialog" aria-modal="true" aria-labelledby="qr-title">
    <div class="qr-card">
      <h2 id="qr-title">Ta manette</h2>
      <p>Scanne ce code avec ton téléphone pour répondre depuis le canapé.</p>
      <div id="qr"></div>
      <p class="url" id="qr-url">Connexion en cours…</p>
      <button type="button" class="btn" id="qr-close">C'est bon</button>
    </div>
  </div>`;

  const stage = document.getElementById("stage");
  const inner = document.getElementById("stage-in");
  const qrp = document.getElementById("qrp");

  function dayScore(d) { const a = answers[d] || []; return a.reduce((s, c, i) => s + (c === QUIZ[d][i][2] ? 1 : 0), 0); }
  function totals() {
    let pts = 0, played = 0, total = 0;
    for (const d in QUIZ) { played += (answers[d] || []).length; pts += dayScore(+d); total += QUIZ[d].length; }
    return { pts, played, total };
  }
  function dayLabel(d) {
    const n = QUIZ[d].length, a = answers[d] || [];
    if (!isOpen(d)) return d === 24 ? "finale" : "fermé";
    if (a.length >= n) return `${dayScore(d)} / ${n}`;
    if (a.length > 0) return `en cours ${a.length}/${n}`;
    return d === 24 ? "24 questions" : "à jouer";
  }

  /* ---------- rendu ---------- */
  function renderScore() {
    const t = totals();
    document.getElementById("scorebar").innerHTML =
      `<span>Bonbons gagnés : <strong>${t.pts}</strong></span><span>Questions jouées : <strong>${t.played} / ${t.total}</strong></span>` +
      (preview ? `<span class="flag">Mode aperçu : tout est ouvert</span>` : "");
  }
  function renderGrid() {
    const g = document.getElementById("grid");
    g.innerHTML = "";
    for (let d = 1; d <= 24; d++) {
      const n = QUIZ[d].length, a = answers[d] || [];
      const b = document.createElement("button");
      b.type = "button";
      b.className = "day" + (d === 24 ? " big" : "");
      if (!isOpen(d)) b.classList.add("locked");
      else if (a.length >= n) b.classList.add("done");
      if (isToday(d)) b.classList.add("today");
      const label = dayLabel(d);
      b.innerHTML = `<span class="n">${d}</span><span class="s">${label}</span>`;
      b.setAttribute("aria-label", `${d} décembre, ${label}`);
      b.addEventListener("click", () => openDay(d));
      g.appendChild(b);
    }
    renderScore();
  }
  function connHtml() {
    const on = conns.size > 0;
    return `<span class="mini-conn ${on ? "on" : ""}"><span class="led"></span>${on ? "Téléphone connecté" : "Téléphone non connecté"}</span>`;
  }
  function topHtml(d) {
    return `<div class="top"><p class="t" id="stage-title">${title(d)}</p><div class="top-r"><span id="mini">${connHtml()}</span><button type="button" class="btn-ghost" id="close">Fermer</button></div></div>`;
  }
  function bindClose() { document.getElementById("close").addEventListener("click", closeStage); }

  function closeStage() {
    stage.classList.remove("open");
    document.body.style.overflow = "";
    view = { screen: "grid" };
    renderGrid();
    broadcast();
  }

  function openDay(d) {
    stage.classList.add("open");
    document.body.style.overflow = "hidden";
    if (!isOpen(d)) {
      view = { screen: "locked", d };
      inner.innerHTML = `${topHtml(d)}<h2 class="q">Pas si vite !</h2><p class="locked-msg">Celui-là se joue le ${d} décembre. Patience.</p>`;
      bindClose();
      broadcast();
      return;
    }
    const a = answers[d] || [];
    if (a.length >= QUIZ[d].length) showEnd(d); else showQ(d, a.length);
  }

  function dotsHtml(d, idx) {
    const a = answers[d] || [];
    return QUIZ[d].map((q, i) => {
      let c = "dot";
      if (i < a.length) c += a[i] === q[2] ? " ok" : " ko";
      else if (i === idx) c += " cur";
      return `<span class="${c}"></span>`;
    }).join("");
  }

  function showQ(d, i) {
    view = { screen: "q", d, i };
    const [q, o] = QUIZ[d][i];
    inner.innerHTML = `${topHtml(d)}
      <div class="dots" aria-hidden="true">${dotsHtml(d, i)}</div>
      <p class="count">Question ${i + 1} sur ${QUIZ[d].length}</p>
      <h2 class="q">${esc(q)}</h2>
      <div class="opts">${o.map((t, k) => `<button type="button" class="opt" data-k="${k}"><span class="k">${LETTERS[k]}</span><span>${esc(t)}</span></button>`).join("")}</div>
      <div class="feedback" id="fb" aria-live="polite"></div>
      <div class="actions"><button type="button" class="btn" id="next" hidden>Question suivante</button></div>`;
    bindClose();
    inner.querySelectorAll(".opt").forEach(b => b.addEventListener("click", () => choose(d, i, +b.dataset.k)));
    stage.scrollTop = 0;
    broadcast();
  }

  function choose(d, i, k) {
    const a = answers[d] || (answers[d] = []);
    if (a.length !== i) return;
    a.push(k);
    store.set(answers);
    const [, o, good, x] = QUIZ[d][i];
    inner.querySelectorAll(".opt").forEach(b => {
      const kk = +b.dataset.k;
      b.disabled = true;
      if (kk === good) b.classList.add("right");
      else if (kk === k) b.classList.add("wrong");
      else b.classList.add("dim");
    });
    inner.querySelector(".dots").innerHTML = dotsHtml(d, i + 1);
    const fb = document.getElementById("fb");
    const ok = k === good;
    fb.innerHTML = `<p class="v ${ok ? "ok" : "ko"}">${ok ? "Bien joué, un bonbon !" : "Raté ! C'était : " + esc(o[good])}</p><p>${esc(x)}</p>`;
    fb.classList.add("show");
    const nx = document.getElementById("next");
    const last = i + 1 >= QUIZ[d].length;
    nx.textContent = last ? "Voir le score" : "Question suivante";
    nx.hidden = false;
    nx.onclick = () => goNext();
    broadcast();
  }

  function goNext() {
    if (view.screen !== "q") return;
    const { d, i } = view;
    const a = answers[d] || [];
    if (a.length <= i) return;            // pas encore répondu
    if (i + 1 >= QUIZ[d].length) showEnd(d); else showQ(d, i + 1);
  }

  function showEnd(d) {
    view = { screen: "end", d };
    const n = QUIZ[d].length, s = dayScore(d), a = answers[d];
    const r = s / n;
    const msg = r === 1 ? "Sans faute. Plus française que moi."
      : r >= .6 ? "Belle performance. Les bonbons sont mérités."
      : r >= .4 ? "Pas mal du tout. On fera mieux demain."
      : "Journée difficile. Un bonbon de consolation quand même ?";
    inner.innerHTML = `${topHtml(d)}
      <div class="end">
        <p class="count">Score du jour</p>
        <p class="big">${s} / ${n}</p>
        <p>${msg}</p>
        <ol class="recap">${QUIZ[d].map((q, i) => {
          const ok = a[i] === q[2];
          return `<li><span class="m ${ok ? "ok" : "ko"}">${ok ? "✓" : "✗"}</span><span>${esc(q[0])}<br><span class="a">${esc(q[1][q[2]])}</span></span></li>`;
        }).join("")}</ol>
        <button type="button" class="btn" id="back">Retour au calendrier</button>
      </div>`;
    bindClose();
    document.getElementById("back").addEventListener("click", closeStage);
    stage.scrollTop = 0;
    broadcast();
  }

  /* ---------- clavier (secours) ---------- */
  document.addEventListener("keydown", e => {
    if (qrp.classList.contains("open")) { if (e.key === "Escape") qrp.classList.remove("open"); return; }
    if (!stage.classList.contains("open")) return;
    if (e.key === "Escape") closeStage();
    if (view.screen === "q" && /^[1-4]$/.test(e.key)) choose(view.d, view.i, +e.key - 1);
    if (view.screen === "q" && e.key === "Enter") { e.preventDefault(); goNext(); }
  });

  /* ---------- état envoyé au téléphone ---------- */
  function stateMsg() {
    const t = totals();
    const base = { type: "state", pts: t.pts };
    if (view.screen === "grid") {
      const days = [];
      for (let d = 1; d <= 24; d++) days.push({ d, open: isOpen(d), today: isToday(d), label: dayLabel(d), done: (answers[d] || []).length >= QUIZ[d].length });
      return { ...base, screen: "grid", days };
    }
    if (view.screen === "locked") return { ...base, screen: "locked", d: view.d, title: title(view.d) };
    if (view.screen === "end") return { ...base, screen: "end", d: view.d, title: title(view.d), s: dayScore(view.d), n: QUIZ[view.d].length };
    const { d, i } = view;
    const [, o, good] = QUIZ[d][i];
    const a = answers[d] || [];
    const answered = a.length > i ? a[i] : null;
    return { ...base, screen: "q", d, i, n: QUIZ[d].length, title: title(d), opts: o, answered, good: answered === null ? null : good, last: i + 1 >= QUIZ[d].length };
  }
  function send(c, m) { try { if (c.open) c.send(m); } catch (e) {} }
  function broadcast() { const m = stateMsg(); conns.forEach(c => send(c, m)); }

  function onPadMsg(m) {
    if (!m || typeof m !== "object") return;
    if (m.type === "hello") { broadcast(); return; }
    if (m.type === "answer" && view.screen === "q" && m.d === view.d && m.i === view.i && Number.isInteger(m.k) && m.k >= 0 && m.k < QUIZ[view.d][view.i][1].length) {
      choose(view.d, view.i, m.k); return;
    }
    if (m.type === "next") { goNext(); return; }
    if (m.type === "open" && view.screen === "grid" && Number.isInteger(m.d) && m.d >= 1 && m.d <= 24) { openDay(m.d); return; }
    if (m.type === "back" && view.screen !== "grid") { closeStage(); return; }
  }

  function renderConn() {
    const on = conns.size > 0;
    const b = document.getElementById("conn");
    b.classList.toggle("on", on);
    document.getElementById("conn-t").textContent = on ? "Téléphone connecté" : (peerId ? "Connecter le téléphone" : "Connexion en cours…");
    const mini = document.getElementById("mini");
    if (mini) mini.innerHTML = connHtml();
  }

  /* ---------- PeerJS ---------- */
  function padUrl() { return location.origin + location.pathname + "?m=" + encodeURIComponent(peerId); }
  function renderQr() {
    const box = document.getElementById("qr");
    box.innerHTML = "";
    if (!peerId) return;
    try { new QRCode(box, { text: padUrl(), width: 220, height: 220, correctLevel: QRCode.CorrectLevel.M }); } catch (e) {}
    document.getElementById("qr-url").textContent = padUrl();
  }
  function newId() { return PEER_PREFIX + Math.random().toString(36).slice(2, 8); }
  function getId() {
    try { const v = localStorage.getItem("quiz-avent-peer"); if (v) return v; } catch (e) {}
    const v = newId();
    try { localStorage.setItem("quiz-avent-peer", v); } catch (e) {}
    return v;
  }
  let retried = false;
  function startPeer(id) {
    if (typeof Peer === "undefined") { document.getElementById("conn-t").textContent = "Manette indisponible"; return; }
    peer = new Peer(id, { debug: 0 });
    peer.on("open", pid => { peerId = pid; renderQr(); renderConn(); });
    peer.on("connection", c => {
      c.on("open", () => { conns.add(c); renderConn(); send(c, stateMsg()); });
      c.on("data", onPadMsg);
      c.on("close", () => { conns.delete(c); renderConn(); });
      c.on("error", () => { conns.delete(c); renderConn(); });
    });
    peer.on("disconnected", () => { try { peer.reconnect(); } catch (e) {} });
    peer.on("error", err => {
      if (err && err.type === "unavailable-id") {
        // l'identifiant est encore réservé par une session précédente
        try { peer.destroy(); } catch (e) {}
        if (!retried) { retried = true; setTimeout(() => startPeer(id), 4000); }
        else { const v = newId(); try { localStorage.setItem("quiz-avent-peer", v); } catch (e) {} retried = false; startPeer(v); }
      }
    });
  }

  document.getElementById("conn").addEventListener("click", () => { qrp.classList.add("open"); renderQr(); document.getElementById("qr-close").focus(); });
  document.getElementById("qr-close").addEventListener("click", () => qrp.classList.remove("open"));
  window.addEventListener("hashchange", () => location.reload());
  setInterval(broadcast, 4000);   // renvoie l'état au cas où un message se serait perdu

  renderGrid();
  startPeer(getId());
}

/* ======================================================================
   MANETTE (téléphone)
   ====================================================================== */
function startPad(target) {
  document.body.classList.add("pad");
  const app = document.getElementById("app");
  let conn = null, peer = null, last = null, pending = null, retryT = null;
  function retry(ms) { if (retryT) return; retryT = setTimeout(() => { retryT = null; connect(); }, ms); }

  function status(on, text) {
    return `<p class="status-pad ${on ? "on" : ""}"><span class="led"></span>${text}</p>`;
  }
  function frame(inner, t) {
    app.innerHTML = `<div class="pad-wrap">
      <div class="pad-head"><p class="t">${t || "Le grand quiz de l'Avent"}</p>${last ? `<span class="sub">${last.pts} 🍬</span>` : ""}</div>
      ${inner}
    </div>`;
  }
  function renderWaiting(msg) {
    frame(`<h2>${msg}</h2>${status(false, "En attente de la télé")}<p class="sub">Vérifie que le quiz est bien ouvert sur la télé. La connexion se relance toute seule.</p>`);
  }
  function sendMsg(m) { try { if (conn && conn.open) conn.send(m); } catch (e) {} }

  function render(s) {
    last = s;
    if (s.screen === "grid") {
      frame(`<h2>Choisis le jour</h2>${status(true, "Connectée à la télé")}
        <div class="pad-days">${s.days.map(x => `<button type="button" class="day ${x.d === 24 ? "big" : ""} ${x.open ? "" : "locked"} ${x.done ? "done" : ""} ${x.today ? "today" : ""}" data-d="${x.d}" ${x.open ? "" : "disabled"}><span class="n">${x.d}</span><span class="s">${esc(x.label)}</span></button>`).join("")}</div>`);
      app.querySelectorAll(".pad-days .day").forEach(b => b.addEventListener("click", () => sendMsg({ type: "open", d: +b.dataset.d })));
      return;
    }
    if (s.screen === "locked") {
      frame(`<h2>Pas si vite !</h2><p class="sub">Celui-là se joue plus tard.</p><button type="button" class="btn" id="back">Retour au calendrier</button>`, esc(s.title));
      document.getElementById("back").addEventListener("click", () => sendMsg({ type: "back" }));
      return;
    }
    if (s.screen === "end") {
      frame(`<p class="sub">Score du jour</p><p class="big">${s.s} / ${s.n}</p><button type="button" class="btn" id="back">Retour au calendrier</button>`, esc(s.title));
      document.getElementById("back").addEventListener("click", () => sendMsg({ type: "back" }));
      return;
    }
    // question
    const answered = s.answered;
    const locked = answered !== null || (pending && pending.d === s.d && pending.i === s.i);
    let verdict = "";
    if (answered !== null) {
      const ok = answered === s.good;
      verdict = `<p class="verdict-pad ${ok ? "ok" : "ko"}">${ok ? "Bien joué, un bonbon !" : "Raté ! Regarde la télé."}</p>
        <button type="button" class="btn" id="next">${s.last ? "Voir le score" : "Question suivante"}</button>`;
    }
    frame(`<p class="sub">Question ${s.i + 1} sur ${s.n} · la question est sur la télé</p>
      <div class="keys">${s.opts.map((t, k) => {
        let c = "key";
        if (answered !== null) c += k === s.good ? " right" : k === answered ? " wrong" : " dim";
        return `<button type="button" class="${c}" data-k="${k}" ${locked ? "disabled" : ""}><span class="k">${LETTERS[k]}</span><span>${esc(t)}</span></button>`;
      }).join("")}</div>${verdict}`, esc(s.title));
    app.querySelectorAll(".key").forEach(b => b.addEventListener("click", () => {
      pending = { d: s.d, i: s.i };
      app.querySelectorAll(".key").forEach(x => x.disabled = true);
      sendMsg({ type: "answer", d: s.d, i: s.i, k: +b.dataset.k });
      setTimeout(() => { if (last && last.screen === "q" && last.answered === null) { pending = null; render(last); } }, 3000);
    }));
    const nx = document.getElementById("next");
    if (nx) nx.addEventListener("click", () => sendMsg({ type: "next" }));
  }

  function connect() {
    if (!peer || peer.destroyed) return;
    if (conn) { try { conn.close(); } catch (e) {} }
    conn = peer.connect(target, { reliable: true });
    conn.on("open", () => sendMsg({ type: "hello" }));
    conn.on("data", m => { if (m && m.type === "state") { if (pending && (m.screen !== "q" || m.answered !== null || m.d !== pending.d || m.i !== pending.i)) pending = null; render(m); } });
    conn.on("close", () => { renderWaiting("Connexion perdue"); retry(3000); });
  }

  renderWaiting("Connexion à la télé…");
  if (typeof Peer === "undefined") { renderWaiting("Impossible de charger la manette"); return; }
  peer = new Peer({ debug: 0 });
  peer.on("open", () => connect());
  peer.on("disconnected", () => { try { peer.reconnect(); } catch (e) {} });
  peer.on("error", err => {
    if (err && err.type === "peer-unavailable") { renderWaiting("La télé n'est pas joignable"); retry(4000); }
  });
}
