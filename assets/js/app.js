/* ==========================================================================
   SIM-KOPMA — Single Page App (Vanilla JS, tanpa build step)
   Berjalan 100% di browser sehingga bisa dipublikasikan via GitHub Pages.
   ========================================================================== */
(function () {
  'use strict';

  /* ---------------------------------------------------------------------- */
  /* Storage & State                                                        */
  /* ---------------------------------------------------------------------- */
  const STORE_KEY = 'kopma_state_v1';
  const SESSION_KEY = 'kopma_session_v1';
  const DEMO_PASSWORD = 'password123';
  const clone = (o) => JSON.parse(JSON.stringify(o));

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORE_KEY));
      if (saved && saved.users) return saved;
    } catch (e) { /* abaikan */ }
    return clone(window.KOPMA_SEED);
  }
  let db = loadState();
  const save = () => localStorage.setItem(STORE_KEY, JSON.stringify(db));

  let session = (() => { try { return JSON.parse(localStorage.getItem(SESSION_KEY)); } catch (e) { return null; } })();
  const currentUser = () => session && db.users.find((u) => u.id === session.userId);

  const ui = {
    posCategory: 'Semua',
    posQuery: '',
    cart: [],
    member: null,
    payMethod: 'TUNAI',
    memberQuery: '',
    productQuery: '',
    trxFilter: 'Semua',
  };

  /* ---------------------------------------------------------------------- */
  /* Helpers                                                                */
  /* ---------------------------------------------------------------------- */
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const rp = (n) => 'Rp ' + Math.round(n || 0).toLocaleString('id-ID');
  const rpShort = (n) => {
    if (n >= 1e9) return 'Rp ' + (n / 1e9).toFixed(1).replace('.', ',') + ' M';
    if (n >= 1e6) return 'Rp ' + (n / 1e6).toFixed(1).replace('.', ',') + ' jt';
    if (n >= 1e3) return 'Rp ' + Math.round(n / 1e3) + ' rb';
    return rp(n);
  };
  const fmtDate = (d, opt) => new Date(d).toLocaleString('id-ID', opt || { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  const initials = (name) => name.replace(/^(Dr\.|Ir\.)\s*/i, '').split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
  const totalSimpanan = (u) => u.simpanan_pokok + u.simpanan_wajib + u.simpanan_sukarela;
  const userById = (id) => db.users.find((u) => u.id === id);

  const ROLE_META = {
    admin: { label: 'Super Admin', badge: 'b-gold' },
    kasir: { label: 'Kasir Mart', badge: 'b-slate' },
    pengurus: { label: 'Pengurus', badge: 'b-amber' },
    anggota: { label: 'Anggota', badge: 'b-sage' },
  };
  const PAY_META = {
    TUNAI: { label: 'Tunai', badge: 'b-sage' },
    MIDTRANS_QRIS: { label: 'QRIS', badge: 'b-gold' },
    MIDTRANS_VA: { label: 'Virtual Account', badge: 'b-slate' },
    MIDTRANS_EWALLET: { label: 'E-Wallet', badge: 'b-amber' },
    SALDO_SIMPANAN: { label: 'Saldo Simpanan', badge: 'b-rose' },
  };

  /* ---------------------------------------------------------------------- */
  /* Icons (inline SVG, gaya garis tipis)                                   */
  /* ---------------------------------------------------------------------- */
  const P = {
    dashboard: '<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>',
    pos: '<path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6"/><circle cx="10" cy="20" r="1.2"/><circle cx="17" cy="20" r="1.2"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18.5 20a6.5 6.5 0 0 0-3-5.5"/>',
    box: '<path d="M21 8 12 3 3 8v8l9 5 9-5Z"/><path d="m3 8 9 5 9-5M12 13v8"/>',
    receipt: '<path d="M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2Z"/><path d="M9 8h6M9 12h6M9 16h3"/>',
    card: '<rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M2.5 10h19M6.5 15h4"/>',
    chart: '<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',
    shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6Z"/><path d="m9 12 2 2 4-4"/>',
    wallet: '<path d="M20 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-2"/><path d="M22 11h-5a2 2 0 0 0 0 4h5Z"/>',
    logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    trend: '<path d="m3 17 6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
    alert: '<path d="M12 3 2 20h20Z"/><path d="M12 10v4M12 17.5v.01"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    cash: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 12h.01M18 12h.01"/>',
    qr: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14v.01M14 20h.01M17 20h4v-3"/>',
    star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.5 2.9 1-6.1L3.2 9.5l6.1-.9Z"/>',
    calendar: '<rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/>',
    truck: '<path d="M2 6h11v10H2zM13 9h4l4 4v3h-8"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
    sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 15.5-6.3L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.5 6.3L3 16M3 21v-5h5"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    trash: '<path d="M4 7h16M10 11v6M14 11v6M5 7l1 13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1l1-13M9 7V4h6v3"/>',
  };
  const icon = (n, cls = '') => `<svg class="ico ${cls}" viewBox="0 0 24 24">${P[n] || ''}</svg>`;

  /* ---------------------------------------------------------------------- */
  /* Toast & Modal                                                          */
  /* ---------------------------------------------------------------------- */
  function toast(msg, type = 'ok') {
    const el = document.createElement('div');
    el.className = 'toast' + (type === 'err' ? ' err' : '');
    el.innerHTML = icon(type === 'err' ? 'alert' : 'check') + `<span>${esc(msg)}</span>`;
    $('#toasts').appendChild(el);
    setTimeout(() => { el.style.transition = 'opacity .3s'; el.style.opacity = '0'; setTimeout(() => el.remove(), 300); }, 3200);
  }

  function modal({ title, body, foot = '', onMount, wide }) {
    closeModal();
    const wrap = document.createElement('div');
    wrap.className = 'modal-backdrop';
    wrap.id = 'modal';
    wrap.innerHTML = `
      <div class="modal" style="${wide ? 'max-width:620px' : ''}">
        <div class="modal-head"><h3>${title}</h3><button class="icon-btn" data-close>${icon('x')}</button></div>
        <div class="modal-body">${body}</div>
        ${foot ? `<div class="modal-foot">${foot}</div>` : ''}
      </div>`;
    wrap.addEventListener('click', (e) => { if (e.target === wrap || e.target.closest('[data-close]')) closeModal(); });
    document.body.appendChild(wrap);
    if (onMount) onMount(wrap);
    return wrap;
  }
  const closeModal = () => { const m = $('#modal'); if (m) m.remove(); };

  /* ---------------------------------------------------------------------- */
  /* Analytics Engine (port dari App\Services\SmartAnalyticsService)        */
  /* ---------------------------------------------------------------------- */
  function restockPlans() {
    return db.products.map((p) => {
      const safety = Math.ceil(p.avg_daily_sales * 2);
      const rop = Math.ceil(p.avg_daily_sales * p.lead_time_days + safety);
      const daysLeft = p.avg_daily_sales > 0 ? +(p.stock / p.avg_daily_sales).toFixed(1) : 99;
      if (p.stock > rop) return null;
      const qty = Math.max(Math.ceil(p.avg_daily_sales * 14) - p.stock, p.min_stock * 2);
      return { ...p, rop, daysLeft, qty, budget: qty * p.cost_price, critical: daysLeft <= 2 };
    }).filter(Boolean).sort((a, b) => a.daysLeft - b.daysLeft);
  }

  function dailyRevenue() {
    const map = {};
    db.transactions.filter((t) => t.payment_status === 'PAID').forEach((t) => {
      const k = t.created_at.slice(0, 10);
      map[k] = (map[k] || 0) + t.grand_total;
    });
    const keys = Object.keys(map).sort();
    const actual = keys.map((k) => ({ date: k, value: map[k] }));
    // Weighted Moving Average (bobot linear) untuk proyeksi 7 hari
    const forecast = [];
    const series = actual.map((a) => a.value);
    const ymd = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    let last = keys.length ? new Date(keys[keys.length - 1] + 'T12:00:00') : new Date();
    for (let i = 0; i < 7; i++) {
      const window = series.slice(-4);
      const wsum = window.reduce((s, _, j) => s + (j + 1), 0);
      const wma = window.reduce((s, v, j) => s + v * (j + 1), 0) / (wsum || 1);
      const seasonal = 1 + 0.06 * Math.sin(i / 1.3);
      const v = Math.round(wma * seasonal * 1.03);
      series.push(v);
      last = new Date(last.getTime() + 864e5);
      forecast.push({ date: ymd(last), value: v });
    }
    return { actual, forecast };
  }

  function shuEstimates() {
    const POOL = 18500000; // Estimasi SHU tahun berjalan
    const jasaTransaksi = POOL * 0.40;
    const jasaModal = POOL * 0.25;
    const members = db.users.filter((u) => u.role === 'anggota');
    const totalSimp = members.reduce((s, u) => s + totalSimpanan(u), 0);
    const spend = {};
    db.transactions.forEach((t) => { if (t.user_id) spend[t.user_id] = (spend[t.user_id] || 0) + t.grand_total; });
    const totalSpend = members.reduce((s, u) => s + (spend[u.id] || 0), 0);
    return {
      pool: POOL, jasaTransaksi, jasaModal,
      list: members.map((u) => {
        const s = spend[u.id] || 0;
        const a = totalSpend ? (s / totalSpend) * jasaTransaksi : 0;
        const b = totalSimp ? (totalSimpanan(u) / totalSimp) * jasaModal : 0;
        return { user: u, spend: s, jasaTrx: a, jasaModal: b, total: a + b };
      }).sort((x, y) => y.total - x.total),
    };
  }

  /* ---------------------------------------------------------------------- */
  /* Charts (SVG murni)                                                     */
  /* ---------------------------------------------------------------------- */
  function lineChart(actual, forecast) {
    const W = 720, H = 260, pl = 54, pr = 16, pt = 16, pb = 30;
    const all = [...actual, ...forecast];
    const max = Math.max(...all.map((d) => d.value)) * 1.15 || 1;
    const x = (i) => pl + (i * (W - pl - pr)) / Math.max(all.length - 1, 1);
    const y = (v) => pt + (H - pt - pb) * (1 - v / max);
    const path = (pts) => pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
    const aPts = actual.map((d, i) => [x(i), y(d.value)]);
    const fPts = [aPts[aPts.length - 1], ...forecast.map((d, i) => [x(actual.length + i), y(d.value)])];
    const area = path(aPts) + ` L${aPts[aPts.length - 1][0]},${H - pb} L${aPts[0][0]},${H - pb} Z`;
    let grid = '';
    for (let i = 0; i <= 4; i++) {
      const v = (max / 4) * i, yy = y(v);
      grid += `<line class="grid-line" x1="${pl}" x2="${W - pr}" y1="${yy}" y2="${yy}"/><text class="axis" x="${pl - 10}" y="${yy + 4}" text-anchor="end">${v >= 1000 ? Math.round(v / 1000) + 'rb' : 0}</text>`;
    }
    const labels = all.map((d, i) => (i % 2 === 0 || i === all.length - 1)
      ? `<text class="axis" x="${x(i)}" y="${H - 8}" text-anchor="middle">${new Date(d.date + 'T12:00:00').toLocaleDateString('id-ID', { day: '2-digit', month: 'short' })}</text>` : '').join('');
    const dots = aPts.map((p) => `<circle cx="${p[0]}" cy="${p[1]}" r="3.5" fill="#16171b" stroke="#c8ab78" stroke-width="2"/>`).join('');
    return `
      <svg class="chart" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">
        <defs><linearGradient id="ga" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#c8ab78" stop-opacity=".28"/><stop offset="1" stop-color="#c8ab78" stop-opacity="0"/></linearGradient></defs>
        ${grid}
        <path d="${area}" fill="url(#ga)"/>
        <path d="${path(aPts)}" fill="none" stroke="#c8ab78" stroke-width="2.2"/>
        <path d="${path(fPts)}" fill="none" stroke="#93a98c" stroke-width="2" stroke-dasharray="6 6"/>
        ${dots}${labels}
      </svg>`;
  }

  function donut(items) {
    const total = items.reduce((s, i) => s + i.value, 0) || 1;
    const R = 54, C = 2 * Math.PI * R;
    let off = 0;
    const segs = items.map((it) => {
      const len = (it.value / total) * C;
      const s = `<circle r="${R}" cx="70" cy="70" fill="none" stroke="${it.color}" stroke-width="16" stroke-dasharray="${len} ${C - len}" stroke-dashoffset="${-off}" transform="rotate(-90 70 70)"/>`;
      off += len;
      return s;
    }).join('');
    return `
      <div class="donut-wrap">
        <svg width="140" height="140" viewBox="0 0 140 140">
          <circle r="${R}" cx="70" cy="70" fill="none" stroke="#2d3038" stroke-width="16"/>${segs}
          <text x="70" y="66" text-anchor="middle" fill="#847e73" font-size="10" letter-spacing="1.5">TOTAL</text>
          <text x="70" y="86" text-anchor="middle" fill="#e6e0d4" font-size="18" font-family="Cormorant Garamond" font-weight="600">${rpShort(total)}</text>
        </svg>
        <div class="donut-list">${items.map((it) => `<div><i style="background:${it.color}"></i>${esc(it.label)}<b>${Math.round((it.value / total) * 100)}%</b></div>`).join('')}</div>
      </div>`;
  }

  /* ---------------------------------------------------------------------- */
  /* Routing & Navigasi berbasis Role                                       */
  /* ---------------------------------------------------------------------- */
  const ROUTES = {
    dashboard: { title: 'Dashboard Eksekutif', icon: 'dashboard', roles: ['admin', 'pengurus'], render: viewDashboard },
    pos: { title: 'Kasir Mart', icon: 'pos', roles: ['admin', 'kasir'], render: viewPos, kbd: 'F2' },
    members: { title: 'Data Anggota', icon: 'users', roles: ['admin', 'kasir', 'pengurus'], render: viewMembers },
    products: { title: 'Produk & Stok', icon: 'box', roles: ['admin', 'pengurus'], render: viewProducts },
    transactions: { title: 'Riwayat Transaksi', icon: 'receipt', roles: ['admin', 'kasir', 'pengurus'], render: viewTransactions },
    shu: { title: 'Laporan SHU', icon: 'chart', roles: ['admin', 'pengurus'], render: viewShu },
    loans: { title: 'Persetujuan Pinjaman', icon: 'shield', roles: ['admin', 'pengurus'], render: viewLoans },
    payment: { title: 'Payment Gateway', icon: 'card', roles: ['admin'], render: viewPayment },
    home: { title: 'Beranda Anggota', icon: 'wallet', roles: ['anggota'], render: viewMemberHome },
  };
  const NAV_GROUPS = [
    { label: 'Ringkasan', items: ['dashboard', 'home'] },
    { label: 'Operasional', items: ['pos', 'transactions', 'products', 'members'] },
    { label: 'Keuangan', items: ['shu', 'loans', 'payment'] },
  ];
  const defaultRoute = (role) => ({ admin: 'dashboard', pengurus: 'dashboard', kasir: 'pos', anggota: 'home' }[role]);

  function route() {
    const user = currentUser();
    if (!user) return renderLogin();
    let r = location.hash.replace('#/', '') || defaultRoute(user.role);
    if (!ROUTES[r] || !ROUTES[r].roles.includes(user.role)) r = defaultRoute(user.role);
    renderShell(user, r);
  }
  window.addEventListener('hashchange', route);

  /* ---------------------------------------------------------------------- */
  /* Login                                                                  */
  /* ---------------------------------------------------------------------- */
  function renderLogin() {
    const demos = [db.users[0], db.users[1], db.users[2], db.users[3]];
    const members = db.users.filter((u) => u.role === 'anggota').length;
    $('#root').innerHTML = `
      <div class="login view">
        <section class="login-hero">
          <div class="brand">
            <div class="brand-mark">K</div>
            <div><div class="brand-name">SIM-KOPMA</div><div class="brand-sub">Smart Cooperative System</div></div>
          </div>
          <div class="hero-copy">
            <h1>Koperasi mahasiswa,<br/>dikelola dengan <em>elegan</em>.</h1>
            <p>Satu platform terpadu untuk kasir ritel, simpanan anggota, estimasi SHU real-time, dan analitik cerdas berbasis kalender akademik.</p>
          </div>
          <div class="hero-stats">
            <div><b>${members}</b><span>Anggota Aktif</span></div>
            <div><b>${db.products.length}</b><span>Produk Ritel</span></div>
            <div><b>${rpShort(db.transactions.reduce((s, t) => s + t.grand_total, 0))}</b><span>Omzet Pekan Ini</span></div>
          </div>
        </section>
        <section class="login-panel">
          <form class="login-card" id="loginForm" autocomplete="on">
            <h2>Selamat datang</h2>
            <p>Masuk menggunakan Email, NIM/NIP, atau Nomor HP.</p>
            <div id="loginError" class="login-error hidden"></div>
            <div class="field">
              <label>Email / NIM / No. HP</label>
              <div class="input-icon">${icon('mail')}<input class="input" id="lgId" placeholder="contoh: kasir@kopma.ac.id" required /></div>
            </div>
            <div class="field">
              <label>Kata Sandi</label>
              <div class="input-icon">${icon('lock')}<input class="input" id="lgPw" type="password" placeholder="••••••••" required /></div>
            </div>
            <button class="btn btn-gold btn-block" type="submit">Masuk ke Sistem</button>
            <div class="demo-accounts">
              <div class="label">Akun Demo · klik untuk masuk</div>
              <div class="demo-grid">
                ${demos.map((u) => `<button type="button" class="demo-btn" data-demo="${u.id}"><b>${ROLE_META[u.role].label}</b><span>${esc(u.name)}</span></button>`).join('')}
              </div>
            </div>
          </form>
        </section>
      </div>`;

    $('#loginForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const id = $('#lgId').value.trim().toLowerCase();
      const digits = id.replace(/\D/g, '');
      const user = db.users.find((u) =>
        u.email.toLowerCase() === id || u.nim_nip.toLowerCase() === id ||
        (digits.length >= 8 && u.phone.replace(/\D/g, '').replace(/^62/, '0') === digits.replace(/^62/, '0')));
      if (!user || $('#lgPw').value !== DEMO_PASSWORD) {
        const err = $('#loginError');
        err.textContent = 'Kredensial tidak cocok. Gunakan akun demo di bawah (sandi: password123).';
        err.classList.remove('hidden');
        return;
      }
      login(user);
    });
    $$('[data-demo]').forEach((b) => b.addEventListener('click', () => login(userById(+b.dataset.demo))));
  }

  function login(user) {
    session = { userId: user.id };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    location.hash = '#/' + defaultRoute(user.role);
    route();
    toast(`Selamat datang, ${user.name}`);
  }
  function logout() {
    session = null;
    localStorage.removeItem(SESSION_KEY);
    ui.cart = []; ui.member = null;
    history.replaceState(null, '', location.pathname);
    route();
  }

  /* ---------------------------------------------------------------------- */
  /* Shell                                                                  */
  /* ---------------------------------------------------------------------- */
  function renderShell(user, r) {
    const nav = NAV_GROUPS.map((g) => {
      const items = g.items.filter((k) => ROUTES[k].roles.includes(user.role));
      if (!items.length) return '';
      return `<div class="nav-label">${g.label}</div>` + items.map((k) =>
        `<a href="#/${k}" class="${k === r ? 'active' : ''}">${icon(ROUTES[k].icon)}<span>${ROUTES[k].title}</span>${ROUTES[k].kbd ? `<span class="kbd">${ROUTES[k].kbd}</span>` : ''}</a>`).join('');
    }).join('');

    $('#root').innerHTML = `
      <div class="app">
        <aside class="sidebar" id="sidebar">
          <div class="brand">
            <div class="brand-mark">K</div>
            <div><div class="brand-name">SIM-KOPMA</div><div class="brand-sub">Smart System</div></div>
          </div>
          <nav class="nav">${nav}</nav>
          <div class="sidebar-foot">
            <div class="user-chip">
              <div class="avatar">${initials(user.name)}</div>
              <div class="meta"><b>${esc(user.name)}</b><span>${esc(user.title)}</span></div>
              <button class="icon-btn" id="logoutBtn" title="Keluar">${icon('logout')}</button>
            </div>
          </div>
        </aside>
        <main class="main">
          <header class="topbar">
            <button class="icon-btn menu-toggle" id="menuToggle">${icon('menu')}</button>
            <div>
              <div class="crumb">SIM-KOPMA / ${ROLE_META[user.role].label}</div>
              <h1>${ROUTES[r].title}</h1>
            </div>
            <div class="spacer"></div>
            <span class="badge ${ROLE_META[user.role].badge} hide-sm">${ROLE_META[user.role].label}</span>
            <span class="muted hide-sm" style="font-size:12.5px">${new Date().toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </header>
          <div class="content view" id="view"></div>
        </main>
      </div>`;

    $('#logoutBtn').addEventListener('click', logout);
    $('#menuToggle').addEventListener('click', () => $('#sidebar').classList.toggle('open'));
    $$('.nav a').forEach((a) => a.addEventListener('click', () => $('#sidebar').classList.remove('open')));
    ROUTES[r].render($('#view'), user);
    window.scrollTo(0, 0);
  }

  const statCard = (label, value, ic, foot) => `
    <div class="card stat">
      <div class="stat-top"><span class="stat-label">${label}</span><span class="stat-ico">${icon(ic)}</span></div>
      <div class="stat-value">${value}</div>
      <div class="stat-foot">${foot}</div>
    </div>`;

  /* ---------------------------------------------------------------------- */
  /* View: Dashboard Eksekutif                                              */
  /* ---------------------------------------------------------------------- */
  function viewDashboard(el) {
    const paid = db.transactions.filter((t) => t.payment_status === 'PAID');
    const omzet = paid.reduce((s, t) => s + t.grand_total, 0);
    const members = db.users.filter((u) => u.role === 'anggota');
    const simpanan = db.users.reduce((s, u) => s + totalSimpanan(u), 0);
    const plans = restockPlans();
    const { actual, forecast } = dailyRevenue();
    const projTotal = forecast.reduce((s, d) => s + d.value, 0);

    const byMethod = {};
    paid.forEach((t) => { byMethod[t.payment_method] = (byMethod[t.payment_method] || 0) + t.grand_total; });
    const colors = ['#c8ab78', '#93a98c', '#8e9cb0', '#c69185', '#d0ad6c'];
    const methodItems = Object.keys(byMethod).map((k, i) => ({ label: PAY_META[k].label, value: byMethod[k], color: colors[i % colors.length] }));

    el.innerHTML = `
      <div class="grid g-4">
        ${statCard('Omzet Periode Ini', rpShort(omzet), 'trend', `<span class="up">▲ 12,4%</span> dibanding pekan lalu`)}
        ${statCard('Total Transaksi', paid.length, 'receipt', `Rata-rata ${rp(omzet / (paid.length || 1))}`)}
        ${statCard('Dana Simpanan', rpShort(simpanan), 'wallet', `${members.length} anggota aktif`)}
        ${statCard('Perlu Restock', plans.length + ' item', 'alert', `<span class="down">${plans.filter((p) => p.critical).length} kritis</span> hari ini`)}
      </div>

      <div class="grid g-main mt">
        <div class="card">
          <div class="card-head">
            <div><h3>Tren & Proyeksi Omzet</h3><p>Weighted Moving Average · proyeksi 7 hari: <b class="gold">${rpShort(projTotal)}</b></p></div>
            <div class="spacer"></div>
            <div class="legend"><span><i style="background:#c8ab78"></i>Aktual</span><span><i style="background:#93a98c"></i>Proyeksi</span></div>
          </div>
          <div class="card-body">${lineChart(actual, forecast)}</div>
        </div>
        <div class="card">
          <div class="card-head"><div><h3>Metode Pembayaran</h3><p>Distribusi nilai transaksi</p></div></div>
          <div class="card-body">${donut(methodItems)}</div>
        </div>
      </div>

      <div class="grid g-main mt">
        <div class="card">
          <div class="card-head">
            <div><h3>Rekomendasi Restock Cerdas</h3><p>Reorder Point = (rata-rata harian × lead time) + safety stock</p></div>
            <div class="spacer"></div>
            <a class="btn btn-sm" href="#/products">Lihat semua</a>
          </div>
          <div class="card-body table-wrap" style="padding-top:8px">
            <table>
              <thead><tr><th>Produk</th><th>Stok / ROP</th><th>Sisa Hari</th><th class="right">Order</th><th>Status</th></tr></thead>
              <tbody>
                ${plans.slice(0, 6).map((p) => `
                  <tr>
                    <td><b>${esc(p.name)}</b><span class="sub">${esc(p.supplier_name)}</span></td>
                    <td>${p.stock} / ${p.rop}<div class="progress" style="margin-top:6px;width:90px"><span style="width:${Math.min(100, (p.stock / p.rop) * 100)}%;background:${p.critical ? 'var(--rose)' : 'var(--amber)'}"></span></div></td>
                    <td>${p.daysLeft} hari</td>
                    <td class="right"><b>${p.qty} pcs</b><span class="sub">${rpShort(p.budget)}</span></td>
                    <td><span class="badge ${p.critical ? 'b-rose' : 'b-amber'}">${p.critical ? 'Kritis' : 'Siaga'}</span></td>
                  </tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>
        <div class="card">
          <div class="card-head"><div><h3>Rencana ke Depan</h3><p>Prediksi berbasis kalender akademik</p></div></div>
          <div class="card-body">
            ${db.academicForecast.map((f) => `
              <div class="insight">
                <div class="head"><span class="stat-ico" style="width:30px;height:30px">${icon('calendar')}</span><div style="flex:1"><h4>${esc(f.periode)}</h4><span class="muted" style="font-size:12px">${esc(f.waktu)}</span></div><span class="badge b-sage plain">${f.lonjakan}</span></div>
                <p>${esc(f.detail)}</p>
                <div class="action"><b>Aksi:</b> ${esc(f.aksi)}</div>
              </div>`).join('')}
          </div>
        </div>
      </div>
      <p class="footer-note">SIM-KOPMA Smart System · Demo publik dengan data dummy</p>`;
  }

  /* ---------------------------------------------------------------------- */
  /* View: POS Kasir                                                        */
  /* ---------------------------------------------------------------------- */
  function cartTotals() {
    let subtotal = 0, discount = 0;
    ui.cart.forEach((l) => {
      const p = db.products.find((x) => x.id === l.id);
      subtotal += p.sell_price * l.qty;
      if (ui.member) discount += p.member_discount * l.qty;
    });
    const s = db.paymentSettings;
    let fee = 0;
    if (s.fee_mode === 'dibebankan_pembeli') {
      if (ui.payMethod === 'MIDTRANS_QRIS') fee = Math.round((subtotal - discount) * s.qris_mdr_percent / 100);
      if (ui.payMethod === 'MIDTRANS_VA') fee = s.va_flat_fee;
    }
    return { subtotal, discount, fee, total: subtotal - discount + fee };
  }

  function viewPos(el) {
    const cats = ['Semua', ...new Set(db.products.map((p) => p.category))];
    const s = db.paymentSettings;
    const methods = [
      { k: 'TUNAI', label: 'Tunai', ic: 'cash', on: true },
      { k: 'MIDTRANS_QRIS', label: 'QRIS', ic: 'qr', on: s.enable_qris },
      { k: 'MIDTRANS_EWALLET', label: 'E-Wallet', ic: 'wallet', on: s.enable_gopay_shopeepay },
      { k: 'MIDTRANS_VA', label: 'VA Bank', ic: 'card', on: s.enable_va_bank },
      { k: 'SALDO_SIMPANAN', label: 'Simpanan', ic: 'shield', on: s.enable_simpanan_pay },
    ].filter((m) => m.on);
    if (!methods.find((m) => m.k === ui.payMethod)) ui.payMethod = 'TUNAI';

    el.innerHTML = `
      <div class="pos">
        <div>
          <div class="pos-toolbar">
            <div class="input-icon">${icon('search')}<input class="input" id="posSearch" placeholder="Cari nama produk, PLU, atau scan barcode…  (F1)" value="${esc(ui.posQuery)}" /></div>
            <button class="btn" id="btnMember">${icon('user')} Pilih Anggota <span class="kbd">F3</span></button>
          </div>
          <div class="chips">${cats.map((c) => `<button class="chip ${c === ui.posCategory ? 'active' : ''}" data-cat="${esc(c)}">${esc(c)}</button>`).join('')}</div>
          <div class="products" id="productGrid"></div>
          <div class="shortcuts">
            <span><span class="kbd">F1</span> Cari produk</span><span><span class="kbd">F3</span> Anggota</span>
            <span><span class="kbd">F4</span> Kosongkan</span><span><span class="kbd">F9</span> Ganti metode</span><span><span class="kbd">F10</span> Bayar</span>
          </div>
        </div>
        <div class="card cart">
          <div class="card-head" style="padding-bottom:14px"><div><h3>Keranjang</h3><p id="cartCount"></p></div><div class="spacer"></div><button class="icon-btn" id="btnClear" title="Kosongkan (F4)">${icon('trash')}</button></div>
          <div class="cart-member" id="cartMember"></div>
          <div class="cart-items" id="cartItems"></div>
          <div class="cart-summary">
            <div id="cartSum"></div>
            <div class="pay-methods">${methods.map((m) => `<button data-pay="${m.k}" class="${m.k === ui.payMethod ? 'active' : ''}">${icon(m.ic)}${m.label}</button>`).join('')}</div>
            <button class="btn btn-gold btn-block" id="btnPay">Proses Pembayaran <span class="kbd" style="background:rgba(0,0,0,.12);border-color:rgba(0,0,0,.15);color:#1c1a16">F10</span></button>
          </div>
        </div>
      </div>`;

    const renderProducts = () => {
      const q = ui.posQuery.toLowerCase();
      const list = db.products.filter((p) =>
        (ui.posCategory === 'Semua' || p.category === ui.posCategory) &&
        (!q || p.name.toLowerCase().includes(q) || p.plu_code.includes(q) || p.barcode.includes(q)));
      $('#productGrid').innerHTML = list.length ? list.map((p) => `
        <div class="product" data-add="${p.id}">
          <div class="p-top"><span class="kbd">PLU ${p.plu_code}</span>${p.stock <= p.min_stock ? '<span class="badge b-rose plain">Stok tipis</span>' : p.is_consignment ? '<span class="badge b-slate plain">Konsinyasi</span>' : ''}</div>
          <div class="p-name">${esc(p.name)}</div>
          <div class="p-price">${rp(p.sell_price)}</div>
          <div class="p-meta"><span>Stok ${p.stock}</span><span>Member −${rp(p.member_discount)}</span></div>
        </div>`).join('') : '<div class="empty">Produk tidak ditemukan.</div>';
    };

    const renderCart = () => {
      const t = cartTotals();
      const count = ui.cart.reduce((s, l) => s + l.qty, 0);
      $('#cartCount').textContent = `${count} item`;
      $('#cartMember').innerHTML = ui.member ? `
        <div class="member-box"><div class="avatar">${initials(ui.member.name)}</div>
          <div class="meta"><b>${esc(ui.member.name)}</b><span>${esc(ui.member.nim_nip)} · ${ui.member.poin_belanja} poin · Saldo ${rpShort(ui.member.simpanan_sukarela)}</span></div>
          <button class="icon-btn" id="btnUnsetMember">${icon('x')}</button></div>` : `
        <div class="member-box" style="cursor:pointer" id="memberPick"><div class="avatar">${icon('user')}</div>
          <div class="meta"><b>Pelanggan Umum</b><span>Klik untuk pilih anggota & dapatkan diskon</span></div></div>`;
      $('#cartItems').innerHTML = ui.cart.length ? ui.cart.map((l) => {
        const p = db.products.find((x) => x.id === l.id);
        const price = p.sell_price - (ui.member ? p.member_discount : 0);
        return `<div class="line">
          <div class="l-info"><b>${esc(p.name)}</b><span>${rp(price)} / pcs</span></div>
          <div class="qty"><button data-dec="${p.id}">−</button><span>${l.qty}</span><button data-inc="${p.id}">+</button></div>
          <div class="l-total">${rp(price * l.qty)}</div></div>`;
      }).join('') : `<div class="cart-empty">${icon('pos')}<div>Keranjang masih kosong.<br/>Pilih produk di sebelah kiri.</div></div>`;
      $('#cartSum').innerHTML = `
        <div class="sum-row"><span>Subtotal</span><span>${rp(t.subtotal)}</span></div>
        <div class="sum-row"><span>Diskon anggota</span><span class="up">− ${rp(t.discount)}</span></div>
        ${t.fee ? `<div class="sum-row"><span>Biaya layanan</span><span>${rp(t.fee)}</span></div>` : ''}
        <div class="sum-total"><span>Total</span><b>${rp(t.total)}</b></div>`;
      const pick = $('#memberPick'); if (pick) pick.onclick = openMemberPicker;
      const un = $('#btnUnsetMember'); if (un) un.onclick = () => { ui.member = null; renderCart(); };
    };

    const addToCart = (id) => {
      const p = db.products.find((x) => x.id === id);
      const line = ui.cart.find((l) => l.id === id);
      if ((line ? line.qty : 0) >= p.stock) return toast('Stok tidak mencukupi', 'err');
      line ? line.qty++ : ui.cart.push({ id, qty: 1 });
      renderCart();
    };

    function openMemberPicker() {
      modal({
        title: 'Cari Anggota',
        body: `<div class="input-icon">${icon('search')}<input class="input" id="mq" placeholder="Nama, NIM, atau Nomor HP…" autofocus /></div><div class="result-list" id="mres"></div>`,
        onMount: (m) => {
          const draw = () => {
            const q = $('#mq', m).value.toLowerCase().trim(), qd = q.replace(/\D/g, '');
            const res = db.users.filter((u) => !q || u.name.toLowerCase().includes(q) || u.nim_nip.toLowerCase().includes(q) || (qd && u.phone.replace(/\D/g, '').includes(qd))).slice(0, 15);
            $('#mres', m).innerHTML = res.map((u) => `<div class="result-item" data-pick="${u.id}"><div class="avatar">${initials(u.name)}</div><div style="flex:1"><b>${esc(u.name)}</b><div class="muted" style="font-size:12px">${esc(u.nim_nip)} · ${esc(u.phone)}</div></div><span class="badge ${ROLE_META[u.role].badge}">${ROLE_META[u.role].label}</span></div>`).join('') || '<div class="empty">Tidak ditemukan.</div>';
            $$('[data-pick]', m).forEach((r) => r.onclick = () => { ui.member = userById(+r.dataset.pick); closeModal(); renderCart(); toast(`Anggota ${ui.member.name} dipilih`); });
          };
          $('#mq', m).addEventListener('input', draw); draw(); $('#mq', m).focus();
        },
      });
    }

    function checkout() {
      if (!ui.cart.length) return toast('Keranjang masih kosong', 'err');
      const t = cartTotals();
      if (ui.payMethod === 'SALDO_SIMPANAN') {
        if (!ui.member) return toast('Pilih anggota untuk bayar dengan simpanan', 'err');
        if (ui.member.simpanan_sukarela < t.total) return toast('Saldo simpanan sukarela tidak cukup', 'err');
      }
      const isCash = ui.payMethod === 'TUNAI';
      const isMid = ui.payMethod.startsWith('MIDTRANS');
      modal({
        title: 'Konfirmasi Pembayaran',
        body: `
          <div style="text-align:center;margin-bottom:18px"><div class="muted" style="font-size:12px;letter-spacing:1.5px">TOTAL TAGIHAN</div><div style="font-family:var(--font-display);font-size:40px;font-weight:600;color:var(--gold)">${rp(t.total)}</div><span class="badge ${PAY_META[ui.payMethod].badge}">${PAY_META[ui.payMethod].label}</span></div>
          ${isCash ? `<div class="field"><label>Uang diterima</label><input class="input" id="cashIn" type="number" min="${t.total}" value="${Math.ceil(t.total / 10000) * 10000}" /></div><div class="sum-row"><span>Kembalian</span><b id="change"></b></div>` : ''}
          ${isMid ? `<div class="insight" style="text-align:center">${icon('qr', '')}<p style="margin-top:6px">Simulasi Midtrans Snap (${esc(db.paymentSettings.environment)}).<br/>Pada versi produksi, popup Snap akan tampil di sini.</p></div>` : ''}
          ${ui.payMethod === 'SALDO_SIMPANAN' ? `<div class="insight"><p>Saldo sukarela ${esc(ui.member.name)} akan dipotong: <b>${rp(ui.member.simpanan_sukarela)}</b> → <b class="gold">${rp(ui.member.simpanan_sukarela - t.total)}</b></p></div>` : ''}`,
        foot: `<button class="btn" data-close>Batal</button><button class="btn btn-gold" id="confirmPay">${icon('check')} Konfirmasi</button>`,
        onMount: (m) => {
          const ci = $('#cashIn', m);
          const upd = () => { if (ci) $('#change', m).textContent = rp(Math.max(0, (+ci.value || 0) - t.total)); };
          if (ci) { ci.addEventListener('input', upd); upd(); ci.select(); }
          $('#confirmPay', m).onclick = () => {
            if (ci && +ci.value < t.total) return toast('Uang diterima kurang', 'err');
            finalize(t, ci ? +ci.value : t.total);
          };
        },
      });
    }

    function finalize(t, paidAmount) {
      const now = new Date();
      const ymd = now.toISOString().slice(0, 10).replace(/-/g, '');
      const id = Math.max(0, ...db.transactions.map((x) => x.id)) + 1;
      const trx = {
        id, invoice_no: `INV-${ymd}-${String(id).padStart(3, '0')}`, user_id: ui.member ? ui.member.id : null,
        subtotal: t.subtotal, discount_total: t.discount, admin_fee: t.fee, grand_total: t.total,
        payment_method: ui.payMethod, payment_status: 'PAID',
        reference: ui.payMethod === 'TUNAI' ? null : (ui.payMethod === 'SALDO_SIMPANAN' ? 'SIMP-' : 'MID-') + Math.floor(100000 + Math.random() * 899999),
        points_earned: ui.member ? Math.floor(t.total / 10000) : 0, created_at: now.toISOString(),
        items: ui.cart.map((l) => { const p = db.products.find((x) => x.id === l.id); return { name: p.name, qty: l.qty, price: p.sell_price - (ui.member ? p.member_discount : 0) }; }),
      };
      ui.cart.forEach((l) => { const p = db.products.find((x) => x.id === l.id); p.stock -= l.qty; });
      if (ui.member) {
        const m = userById(ui.member.id);
        m.poin_belanja += trx.points_earned;
        if (ui.payMethod === 'SALDO_SIMPANAN') m.simpanan_sukarela -= t.total;
      }
      db.transactions.push(trx);
      save();
      ui.cart = []; ui.member = null;
      showReceipt(trx, paidAmount);
      renderProducts(); renderCart();
    }

    // Events
    $('#posSearch').addEventListener('input', (e) => { ui.posQuery = e.target.value; renderProducts(); });
    $('#posSearch').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const hit = db.products.find((p) => p.barcode === ui.posQuery.trim() || p.plu_code === ui.posQuery.trim());
        if (hit) { addToCart(hit.id); e.target.value = ui.posQuery = ''; renderProducts(); }
      }
    });
    $$('[data-cat]').forEach((c) => c.onclick = () => { ui.posCategory = c.dataset.cat; $$('[data-cat]').forEach((x) => x.classList.toggle('active', x === c)); renderProducts(); });
    $('#productGrid').addEventListener('click', (e) => { const p = e.target.closest('[data-add]'); if (p) addToCart(+p.dataset.add); });
    $('#cartItems').addEventListener('click', (e) => {
      const inc = e.target.closest('[data-inc]'), dec = e.target.closest('[data-dec]');
      if (inc) addToCart(+inc.dataset.inc);
      if (dec) { const l = ui.cart.find((x) => x.id === +dec.dataset.dec); l.qty--; if (!l.qty) ui.cart = ui.cart.filter((x) => x !== l); renderCart(); }
    });
    $$('[data-pay]').forEach((b) => b.onclick = () => { ui.payMethod = b.dataset.pay; $$('[data-pay]').forEach((x) => x.classList.toggle('active', x === b)); renderCart(); });
    $('#btnMember').onclick = openMemberPicker;
    $('#btnClear').onclick = () => { ui.cart = []; renderCart(); };
    $('#btnPay').onclick = checkout;

    posKeys = (e) => {
      if ($('#modal')) return;
      const map = {
        F1: () => $('#posSearch').focus(),
        F3: openMemberPicker,
        F4: () => { ui.cart = []; renderCart(); },
        F9: () => { const btns = $$('[data-pay]'); const i = btns.findIndex((b) => b.classList.contains('active')); btns[(i + 1) % btns.length].click(); },
        F10: checkout,
      };
      if (map[e.key]) { e.preventDefault(); map[e.key](); }
    };
    renderProducts(); renderCart();
  }
  let posKeys = null;
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
    const user = currentUser();
    if (e.key === 'F2' && user && ROUTES.pos.roles.includes(user.role)) { e.preventDefault(); location.hash = '#/pos'; return; }
    if (posKeys && location.hash === '#/pos') posKeys(e);
  });

  function showReceipt(trx, paid) {
    const m = trx.user_id ? userById(trx.user_id) : null;
    const items = trx.items || [];
    modal({
      title: 'Transaksi Berhasil',
      body: `
        <div class="receipt">
          <div style="text-align:center;margin-bottom:8px"><b style="color:var(--text);letter-spacing:2px">KOPMA MART</b><br/>${esc(trx.invoice_no)}<br/>${fmtDate(trx.created_at)}</div>
          <hr/>
          ${items.map((i) => `<div>${esc(i.name)}</div><div class="r-row"><span>${i.qty} × ${rp(i.price)}</span><span>${rp(i.qty * i.price)}</span></div>`).join('') || '<div class="muted">Rincian item tidak tersedia untuk data historis.</div>'}
          <hr/>
          <div class="r-row"><span>Subtotal</span><span>${rp(trx.subtotal)}</span></div>
          <div class="r-row"><span>Diskon</span><span>-${rp(trx.discount_total)}</span></div>
          ${trx.admin_fee ? `<div class="r-row"><span>Biaya</span><span>${rp(trx.admin_fee)}</span></div>` : ''}
          <div class="r-row" style="color:var(--gold);font-weight:600"><span>TOTAL</span><span>${rp(trx.grand_total)}</span></div>
          ${paid && trx.payment_method === 'TUNAI' ? `<div class="r-row"><span>Tunai</span><span>${rp(paid)}</span></div><div class="r-row"><span>Kembali</span><span>${rp(paid - trx.grand_total)}</span></div>` : ''}
          <hr/>
          <div class="r-row"><span>Metode</span><span>${PAY_META[trx.payment_method].label}</span></div>
          ${trx.reference ? `<div class="r-row"><span>Ref</span><span>${esc(trx.reference)}</span></div>` : ''}
          ${m ? `<div class="r-row"><span>Anggota</span><span>${esc(m.name)}</span></div><div class="r-row"><span>Poin</span><span>+${trx.points_earned}</span></div>` : ''}
          <hr/><div style="text-align:center">Terima kasih telah berbelanja<br/>di Koperasi Mahasiswa</div>
        </div>`,
      foot: `<button class="btn" onclick="window.print()">Cetak</button><button class="btn btn-gold" data-close>Selesai</button>`,
    });
  }

  /* ---------------------------------------------------------------------- */
  /* View: Anggota                                                          */
  /* ---------------------------------------------------------------------- */
  function viewMembers(el) {
    const members = db.users.filter((u) => u.role === 'anggota');
    el.innerHTML = `
      <div class="grid g-3">
        ${statCard('Anggota Aktif', members.length, 'users', 'Seluruh fakultas')}
        ${statCard('Total Simpanan Anggota', rpShort(members.reduce((s, u) => s + totalSimpanan(u), 0)), 'wallet', 'Pokok + Wajib + Sukarela')}
        ${statCard('Total Poin Belanja', members.reduce((s, u) => s + u.poin_belanja, 0).toLocaleString('id-ID'), 'star', 'Dapat ditukar di kasir')}
      </div>
      <div class="card mt">
        <div class="card-head"><div><h3>Direktori Pengguna</h3><p>Cari berdasarkan nama, NIM/NIP, atau nomor HP</p></div><div class="spacer"></div>
          <div class="input-icon" style="width:min(320px,100%)">${icon('search')}<input class="input" id="mSearch" placeholder="Cari…" value="${esc(ui.memberQuery)}"/></div></div>
        <div class="card-body table-wrap"><table>
          <thead><tr><th>Nama</th><th>Kontak</th><th>Fakultas / Unit</th><th>Role</th><th class="right">Simpanan</th><th class="right">Poin</th></tr></thead>
          <tbody id="mBody"></tbody></table></div>
      </div>`;
    const draw = () => {
      const q = ui.memberQuery.toLowerCase().trim(), qd = q.replace(/\D/g, '');
      const list = db.users.filter((u) => !q || u.name.toLowerCase().includes(q) || u.nim_nip.toLowerCase().includes(q) || (qd && u.phone.replace(/\D/g, '').includes(qd)));
      $('#mBody').innerHTML = list.map((u) => `
        <tr><td><div class="member-cell"><div class="avatar">${initials(u.name)}</div><div><b>${esc(u.name)}</b><span class="sub mono">${esc(u.nim_nip)}</span></div></div></td>
        <td>${esc(u.phone)}<span class="sub">${esc(u.email)}</span></td>
        <td>${esc(u.fakultas)}</td>
        <td><span class="badge ${ROLE_META[u.role].badge}">${ROLE_META[u.role].label}</span></td>
        <td class="right"><b>${rp(totalSimpanan(u))}</b><span class="sub">Sukarela ${rpShort(u.simpanan_sukarela)}</span></td>
        <td class="right">${u.poin_belanja}</td></tr>`).join('') || '<tr><td colspan="6" class="empty">Tidak ada hasil.</td></tr>';
    };
    $('#mSearch').addEventListener('input', (e) => { ui.memberQuery = e.target.value; draw(); });
    draw();
  }

  /* ---------------------------------------------------------------------- */
  /* View: Produk & Stok                                                    */
  /* ---------------------------------------------------------------------- */
  function viewProducts(el) {
    const plans = restockPlans();
    const value = db.products.reduce((s, p) => s + p.stock * p.cost_price, 0);
    el.innerHTML = `
      <div class="grid g-4">
        ${statCard('Total SKU', db.products.length, 'box', `${db.products.filter((p) => p.is_consignment).length} produk konsinyasi`)}
        ${statCard('Nilai Persediaan', rpShort(value), 'wallet', 'Berdasarkan harga pokok')}
        ${statCard('Perlu Restock', plans.length, 'alert', `<span class="down">${plans.filter((p) => p.critical).length} kritis</span>`)}
        ${statCard('Anggaran Restock', rpShort(plans.reduce((s, p) => s + p.budget, 0)), 'truck', 'Estimasi kebutuhan 14 hari')}
      </div>
      <div class="card mt">
        <div class="card-head"><div><h3>Inventori KOPMA Mart</h3><p>Margin, stok, dan reorder point setiap produk</p></div><div class="spacer"></div>
          <div class="input-icon" style="width:min(300px,100%)">${icon('search')}<input class="input" id="pSearch" placeholder="Cari produk…" value="${esc(ui.productQuery)}"/></div></div>
        <div class="card-body table-wrap"><table>
          <thead><tr><th>PLU</th><th>Produk</th><th>Kategori</th><th class="right">Harga Pokok</th><th class="right">Harga Jual</th><th class="right">Margin</th><th>Stok</th><th>Status</th></tr></thead>
          <tbody id="pBody"></tbody></table></div>
      </div>`;
    const draw = () => {
      const q = ui.productQuery.toLowerCase();
      $('#pBody').innerHTML = db.products.filter((p) => !q || p.name.toLowerCase().includes(q) || p.plu_code.includes(q) || p.category.toLowerCase().includes(q)).map((p) => {
        const plan = plans.find((x) => x.id === p.id);
        const margin = ((p.sell_price - p.cost_price) / p.sell_price) * 100;
        return `<tr>
          <td class="mono">${p.plu_code}</td>
          <td><b>${esc(p.name)}</b><span class="sub">${esc(p.supplier_name)} · ${esc(p.supplier_phone)}</span></td>
          <td>${esc(p.category)}</td>
          <td class="right">${rp(p.cost_price)}</td>
          <td class="right"><b>${rp(p.sell_price)}</b></td>
          <td class="right">${margin.toFixed(1)}%</td>
          <td>${p.stock}<div class="progress" style="margin-top:6px;width:80px"><span style="width:${Math.min(100, (p.stock / (p.min_stock * 3)) * 100)}%;background:${plan ? (plan.critical ? 'var(--rose)' : 'var(--amber)') : 'var(--sage)'}"></span></div></td>
          <td>${plan ? `<span class="badge ${plan.critical ? 'b-rose' : 'b-amber'}">${plan.critical ? 'Kritis' : 'Siaga'}</span>` : '<span class="badge b-sage">Aman</span>'}</td></tr>`;
      }).join('');
    };
    $('#pSearch').addEventListener('input', (e) => { ui.productQuery = e.target.value; draw(); });
    draw();
  }

  /* ---------------------------------------------------------------------- */
  /* View: Transaksi                                                        */
  /* ---------------------------------------------------------------------- */
  function viewTransactions(el) {
    const filters = ['Semua', ...Object.keys(PAY_META)];
    el.innerHTML = `
      <div class="card">
        <div class="card-head"><div><h3>Riwayat Transaksi</h3><p>Seluruh transaksi kasir & payment gateway</p></div></div>
        <div class="card-body">
          <div class="chips">${filters.map((f) => `<button class="chip ${f === ui.trxFilter ? 'active' : ''}" data-f="${f}">${f === 'Semua' ? 'Semua' : PAY_META[f].label}</button>`).join('')}</div>
          <div class="table-wrap"><table>
            <thead><tr><th>Invoice</th><th>Waktu</th><th>Pelanggan</th><th>Metode</th><th class="right">Diskon</th><th class="right">Total</th><th>Status</th><th></th></tr></thead>
            <tbody id="tBody"></tbody></table></div>
        </div>
      </div>`;
    const draw = () => {
      const list = db.transactions.filter((t) => ui.trxFilter === 'Semua' || t.payment_method === ui.trxFilter).slice().sort((a, b) => b.created_at.localeCompare(a.created_at));
      $('#tBody').innerHTML = list.map((t) => {
        const u = t.user_id ? userById(t.user_id) : null;
        return `<tr>
          <td class="mono">${esc(t.invoice_no)}<span class="sub">${esc(t.reference || '—')}</span></td>
          <td>${fmtDate(t.created_at)}</td>
          <td>${u ? `<b>${esc(u.name)}</b><span class="sub">${esc(u.nim_nip)}</span>` : '<span class="muted">Pelanggan Umum</span>'}</td>
          <td><span class="badge ${PAY_META[t.payment_method].badge}">${PAY_META[t.payment_method].label}</span></td>
          <td class="right">${rp(t.discount_total)}</td>
          <td class="right"><b>${rp(t.grand_total)}</b></td>
          <td><span class="badge b-sage">${t.payment_status}</span></td>
          <td><button class="btn btn-sm" data-rcpt="${t.id}">Struk</button></td></tr>`;
      }).join('') || '<tr><td colspan="8" class="empty">Belum ada transaksi.</td></tr>';
      $$('[data-rcpt]').forEach((b) => b.onclick = () => showReceipt(db.transactions.find((t) => t.id === +b.dataset.rcpt)));
    };
    $$('[data-f]').forEach((c) => c.onclick = () => { ui.trxFilter = c.dataset.f; $$('[data-f]').forEach((x) => x.classList.toggle('active', x === c)); draw(); });
    draw();
  }

  /* ---------------------------------------------------------------------- */
  /* View: Laporan SHU                                                      */
  /* ---------------------------------------------------------------------- */
  function viewShu(el) {
    const shu = shuEstimates();
    const alloc = [
      { label: 'Jasa Transaksi Anggota', value: shu.pool * 0.40, color: '#c8ab78' },
      { label: 'Jasa Modal (Simpanan)', value: shu.pool * 0.25, color: '#93a98c' },
      { label: 'Cadangan Koperasi', value: shu.pool * 0.20, color: '#8e9cb0' },
      { label: 'Dana Pengurus & Pendidikan', value: shu.pool * 0.15, color: '#c69185' },
    ];
    el.innerHTML = `
      <div class="grid g-3">
        ${statCard('Estimasi SHU Tahun Berjalan', rpShort(shu.pool), 'chart', 'Diperbarui real-time')}
        ${statCard('Alokasi Jasa Transaksi', rpShort(shu.jasaTransaksi), 'pos', '40% dari total SHU')}
        ${statCard('Alokasi Jasa Modal', rpShort(shu.jasaModal), 'wallet', '25% dari total SHU')}
      </div>
      <div class="grid g-main mt">
        <div class="card">
          <div class="card-head"><div><h3>Estimasi SHU per Anggota</h3><p>Proporsional terhadap belanja dan simpanan</p></div></div>
          <div class="card-body table-wrap"><table>
            <thead><tr><th>Anggota</th><th class="right">Belanja</th><th class="right">Jasa Transaksi</th><th class="right">Jasa Modal</th><th class="right">Estimasi SHU</th></tr></thead>
            <tbody>${shu.list.map((r) => `<tr>
              <td><div class="member-cell"><div class="avatar">${initials(r.user.name)}</div><div><b>${esc(r.user.name)}</b><span class="sub">${esc(r.user.fakultas)}</span></div></div></td>
              <td class="right">${rp(r.spend)}</td><td class="right">${rp(r.jasaTrx)}</td><td class="right">${rp(r.jasaModal)}</td>
              <td class="right"><b class="gold">${rp(r.total)}</b></td></tr>`).join('')}</tbody></table></div>
        </div>
        <div class="card">
          <div class="card-head"><div><h3>Pembagian SHU</h3><p>Sesuai AD/ART koperasi</p></div></div>
          <div class="card-body">${donut(alloc)}</div>
        </div>
      </div>`;
  }

  /* ---------------------------------------------------------------------- */
  /* View: Persetujuan Pinjaman                                             */
  /* ---------------------------------------------------------------------- */
  function viewLoans(el) {
    const TYPE = { SIMPANAN_POKOK: 'Simpanan Pokok', SIMPANAN_WAJIB: 'Simpanan Wajib', SIMPANAN_SUKARELA: 'Simpanan Sukarela', PINJAMAN_DARURAT: 'Pinjaman Darurat', ANGSURAN_PINJAMAN: 'Angsuran' };
    const STATUS = { BERHASIL: 'b-sage', MENUNGGU: 'b-amber', DITOLAK: 'b-rose' };
    const pending = db.finances.filter((f) => f.status === 'MENUNGGU');
    el.innerHTML = `
      <div class="grid g-3">
        ${statCard('Menunggu Persetujuan', pending.length, 'shield', rp(pending.reduce((s, f) => s + f.amount, 0)))}
        ${statCard('Pinjaman Tersalurkan', rpShort(db.finances.filter((f) => f.type === 'PINJAMAN_DARURAT' && f.status === 'BERHASIL').reduce((s, f) => s + f.amount, 0)), 'trend', 'Periode berjalan')}
        ${statCard('Setoran Simpanan', rpShort(db.finances.filter((f) => f.type.startsWith('SIMPANAN') && f.status === 'BERHASIL').reduce((s, f) => s + f.amount, 0)), 'wallet', 'Bulan ini')}
      </div>
      <div class="card mt">
        <div class="card-head"><div><h3>Mutasi Simpanan & Pinjaman</h3><p>Setujui atau tolak pengajuan pinjaman anggota</p></div></div>
        <div class="card-body table-wrap"><table>
          <thead><tr><th>Anggota</th><th>Jenis</th><th>Keterangan</th><th class="right">Nominal</th><th>Status</th><th class="right">Aksi</th></tr></thead>
          <tbody>${db.finances.slice().reverse().map((f) => { const u = userById(f.user_id); return `<tr>
            <td><div class="member-cell"><div class="avatar">${initials(u.name)}</div><div><b>${esc(u.name)}</b><span class="sub">${fmtDate(f.created_at, { day: '2-digit', month: 'short', year: 'numeric' })}</span></div></div></td>
            <td>${TYPE[f.type]}<span class="sub mono">${esc(f.channel)}</span></td>
            <td>${esc(f.notes)}</td>
            <td class="right"><b>${rp(f.amount)}</b></td>
            <td><span class="badge ${STATUS[f.status]}">${f.status}</span></td>
            <td class="right">${f.status === 'MENUNGGU' ? `<button class="btn btn-sm" data-reject="${f.id}">Tolak</button> <button class="btn btn-sm btn-gold" data-approve="${f.id}">Setujui</button>` : '<span class="muted">—</span>'}</td></tr>`; }).join('')}</tbody></table></div>
      </div>`;
    const act = (id, status) => { db.finances.find((f) => f.id === id).status = status; save(); toast(status === 'BERHASIL' ? 'Pinjaman disetujui' : 'Pinjaman ditolak', status === 'BERHASIL' ? 'ok' : 'err'); viewLoans(el); };
    $$('[data-approve]').forEach((b) => b.onclick = () => act(+b.dataset.approve, 'BERHASIL'));
    $$('[data-reject]').forEach((b) => b.onclick = () => act(+b.dataset.reject, 'DITOLAK'));
  }

  /* ---------------------------------------------------------------------- */
  /* View: Payment Gateway Settings                                         */
  /* ---------------------------------------------------------------------- */
  function viewPayment(el) {
    const s = db.paymentSettings;
    const mask = (k) => k.slice(0, 10) + '•'.repeat(Math.max(0, k.length - 14)) + k.slice(-4);
    el.innerHTML = `
      <div class="grid g-main">
        <form class="card" id="pgForm">
          <div class="card-head"><div><h3>Konfigurasi Midtrans</h3><p>Ubah kredensial tanpa mengedit file .env</p></div><div class="spacer"></div>
            <div class="segmented" id="envSeg"><button type="button" data-env="sandbox" class="${s.environment === 'sandbox' ? 'active' : ''}">Sandbox</button><button type="button" data-env="production" class="${s.environment === 'production' ? 'active' : ''}">Production</button></div></div>
          <div class="card-body">
            <div class="form-grid">
              <div class="field"><label>Merchant ID</label><input class="input mono" name="merchant_id" value="${esc(s.merchant_id)}" required/></div>
              <div class="field"><label>Mode Biaya</label><select class="input" name="fee_mode"><option value="ditanggung_kopma" ${s.fee_mode === 'ditanggung_kopma' ? 'selected' : ''}>Ditanggung KOPMA</option><option value="dibebankan_pembeli" ${s.fee_mode === 'dibebankan_pembeli' ? 'selected' : ''}>Dibebankan ke Pembeli</option></select></div>
              <div class="field full"><label>Client Key</label><input class="input mono" name="client_key" value="${esc(s.client_key)}" required/></div>
              <div class="field full"><label>Server Key</label><input class="input mono" name="server_key" type="password" value="${esc(s.server_key)}" required/></div>
              <div class="field"><label>MDR QRIS (%)</label><input class="input" name="qris_mdr_percent" type="number" step="0.01" min="0" max="5" value="${s.qris_mdr_percent}"/></div>
              <div class="field"><label>Biaya VA Flat (Rp)</label><input class="input" name="va_flat_fee" type="number" min="0" value="${s.va_flat_fee}"/></div>
            </div>
            <div style="margin-top:8px">
              ${[['enable_qris', 'QRIS', 'Semua e-wallet & mobile banking via QR'], ['enable_gopay_shopeepay', 'GoPay & ShopeePay', 'Pembayaran e-wallet langsung'], ['enable_va_bank', 'Virtual Account Bank', 'BCA, BNI, BRI, Mandiri, Permata'], ['enable_simpanan_pay', 'Bayar dengan Simpanan', 'Potong saldo simpanan sukarela anggota']].map(([k, t, d]) => `
                <div class="toggle-row"><div><b>${t}</b><span>${d}</span></div><label class="switch"><input type="checkbox" name="${k}" ${s[k] ? 'checked' : ''}/><i></i></label></div>`).join('')}
            </div>
            <div style="display:flex;gap:10px;justify-content:flex-end;margin-top:18px">
              <button type="button" class="btn" id="pgTest">${icon('refresh')} Tes Koneksi</button>
              <button class="btn btn-gold" type="submit">${icon('check')} Simpan Perubahan</button>
            </div>
          </div>
        </form>
        <div>
          <div class="card card-pad">
            <div class="stat-top" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px"><h3 style="font-family:var(--font-display);font-size:21px;font-weight:600">Status Integrasi</h3><span class="badge ${s.environment === 'production' ? 'b-sage' : 'b-amber'}">${s.environment === 'production' ? 'Production' : 'Sandbox'}</span></div>
            <div class="sum-row"><span>Provider</span><b>Midtrans Snap</b></div>
            <div class="sum-row"><span>Merchant</span><span class="mono">${esc(s.merchant_id)}</span></div>
            <div class="sum-row"><span>Client Key</span><span class="mono">${esc(mask(s.client_key))}</span></div>
            <div class="sum-row"><span>Snap URL</span><span class="mono" style="font-size:11px">${s.environment === 'production' ? 'app.midtrans.com' : 'app.sandbox.midtrans.com'}</span></div>
          </div>
          <div class="card card-pad mt">
            <h3 style="font-family:var(--font-display);font-size:21px;font-weight:600;margin-bottom:6px">Webhook URL</h3>
            <p class="muted" style="font-size:12.5px;margin-bottom:12px">Daftarkan URL ini di dashboard Midtrans → Settings → Payment Notification.</p>
            <div class="receipt" style="word-break:break-all">${esc(s.webhook_url)}</div>
          </div>
        </div>
      </div>`;

    let env = s.environment;
    $$('[data-env]').forEach((b) => b.onclick = () => { env = b.dataset.env; $$('[data-env]').forEach((x) => x.classList.toggle('active', x === b)); });
    $('#pgTest').onclick = (e) => {
      const btn = e.currentTarget; btn.disabled = true; btn.innerHTML = icon('refresh') + ' Menghubungkan…';
      setTimeout(() => { btn.disabled = false; btn.innerHTML = icon('refresh') + ' Tes Koneksi'; toast(`Koneksi ke Midtrans ${env} berhasil (simulasi) · 128 ms`); }, 900);
    };
    $('#pgForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const f = new FormData(e.target);
      Object.assign(db.paymentSettings, {
        environment: env, merchant_id: f.get('merchant_id'), client_key: f.get('client_key'), server_key: f.get('server_key'),
        fee_mode: f.get('fee_mode'), qris_mdr_percent: +f.get('qris_mdr_percent'), va_flat_fee: +f.get('va_flat_fee'),
        enable_qris: !!f.get('enable_qris'), enable_gopay_shopeepay: !!f.get('enable_gopay_shopeepay'),
        enable_va_bank: !!f.get('enable_va_bank'), enable_simpanan_pay: !!f.get('enable_simpanan_pay'),
      });
      save(); toast('Konfigurasi Midtrans berhasil diperbarui'); viewPayment(el);
    });
  }

  /* ---------------------------------------------------------------------- */
  /* View: Beranda Anggota                                                  */
  /* ---------------------------------------------------------------------- */
  function viewMemberHome(el, user) {
    const shu = shuEstimates().list.find((r) => r.user.id === user.id) || { total: 0 };
    const trx = db.transactions.filter((t) => t.user_id === user.id).sort((a, b) => b.created_at.localeCompare(a.created_at));
    const fin = db.finances.filter((f) => f.user_id === user.id);
    el.innerHTML = `
      <div class="grid g-main">
        <div class="wallet">
          <div class="w-label">Total Simpanan · ${esc(user.nim_nip)}</div>
          <div class="w-value">${rp(totalSimpanan(user))}</div>
          <div class="w-row">
            <div><b>${rp(user.simpanan_pokok)}</b><span>Simpanan Pokok</span></div>
            <div><b>${rp(user.simpanan_wajib)}</b><span>Simpanan Wajib</span></div>
            <div><b>${rp(user.simpanan_sukarela)}</b><span>Simpanan Sukarela</span></div>
          </div>
          <div style="margin-top:24px;display:flex;gap:10px;position:relative"><button class="btn btn-gold" id="btnTopup">${icon('plus')} Top-Up Simpanan</button></div>
        </div>
        <div class="grid" style="gap:20px">
          ${statCard('Estimasi SHU Anda', rp(shu.total), 'sparkle', 'Berdasarkan belanja & simpanan')}
          ${statCard('Poin Belanja', user.poin_belanja.toLocaleString('id-ID'), 'star', `Limit PayLater ${rpShort(user.limit_paylater)}`)}
        </div>
      </div>
      <div class="grid g-2 mt">
        <div class="card">
          <div class="card-head"><div><h3>Riwayat Belanja</h3><p>${trx.length} transaksi</p></div></div>
          <div class="card-body table-wrap"><table><tbody>
            ${trx.map((t) => `<tr><td><b class="mono">${esc(t.invoice_no)}</b><span class="sub">${fmtDate(t.created_at)}</span></td><td><span class="badge ${PAY_META[t.payment_method].badge}">${PAY_META[t.payment_method].label}</span></td><td class="right"><b>${rp(t.grand_total)}</b><span class="sub up">+${t.points_earned} poin</span></td></tr>`).join('') || '<tr><td class="empty">Belum ada transaksi.</td></tr>'}
          </tbody></table></div>
        </div>
        <div class="card">
          <div class="card-head"><div><h3>Mutasi Simpanan</h3><p>Setoran & pinjaman</p></div></div>
          <div class="card-body table-wrap"><table><tbody>
            ${fin.slice().reverse().map((f) => `<tr><td><b>${esc(f.notes)}</b><span class="sub">${esc(f.channel)}</span></td><td class="right"><b>${rp(f.amount)}</b><span class="sub">${f.status}</span></td></tr>`).join('') || '<tr><td class="empty">Belum ada mutasi.</td></tr>'}
          </tbody></table></div>
        </div>
      </div>`;

    $('#btnTopup').onclick = () => modal({
      title: 'Top-Up Simpanan Sukarela',
      body: `
        <div class="field"><label>Nominal</label><input class="input" id="tuAmt" type="number" min="10000" step="10000" value="100000"/></div>
        <div class="chips">${[50000, 100000, 250000, 500000].map((v) => `<button class="chip" data-amt="${v}">${rpShort(v)}</button>`).join('')}</div>
        <div class="field"><label>Metode</label><select class="input" id="tuCh"><option value="MIDTRANS_QRIS">QRIS</option><option value="MIDTRANS_VA_BCA">VA BCA</option><option value="MIDTRANS_VA_BRI">VA BRI</option><option value="MIDTRANS_GOPAY">GoPay</option></select></div>
        <p class="muted" style="font-size:12px">Demo: pembayaran disimulasikan, saldo langsung bertambah.</p>`,
      foot: `<button class="btn" data-close>Batal</button><button class="btn btn-gold" id="tuGo">Bayar via Midtrans</button>`,
      onMount: (m) => {
        $$('[data-amt]', m).forEach((c) => c.onclick = () => { $('#tuAmt', m).value = c.dataset.amt; });
        $('#tuGo', m).onclick = () => {
          const amt = +$('#tuAmt', m).value;
          if (amt < 10000) return toast('Minimal top-up Rp 10.000', 'err');
          user.simpanan_sukarela += amt;
          db.finances.push({ id: Math.max(0, ...db.finances.map((f) => f.id)) + 1, user_id: user.id, type: 'SIMPANAN_SUKARELA', amount: amt, channel: $('#tuCh', m).value, status: 'BERHASIL', notes: 'Top-Up Simpanan Sukarela', created_at: new Date().toISOString() });
          save(); closeModal(); toast(`Top-up ${rp(amt)} berhasil`); viewMemberHome(el, user);
        };
      },
    });
  }

  /* ---------------------------------------------------------------------- */
  /* Reset data demo: tambahkan ?reset pada URL                             */
  /* ---------------------------------------------------------------------- */
  if (new URLSearchParams(location.search).has('reset')) {
    localStorage.removeItem(STORE_KEY);
    db = clone(window.KOPMA_SEED);
    history.replaceState(null, '', location.pathname + location.hash);
  }

  route();
})();
