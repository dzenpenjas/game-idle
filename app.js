const storageKey = "life-hustle-idle-accounts";

const jobs = [
  {
    id: "builder",
    title: "Bangun Tower",
    tag: "Konstruksi",
    salary: 95000,
    rep: 2,
    desc: "Jatuhkan lantai gedung saat posisinya pas. Bangun 7 lantai untuk menyelesaikan misi.",
    game: "tower"
  },
  {
    id: "fruit",
    title: "Pisau Semangka",
    tag: "Arcade Buah",
    salary: 125000,
    rep: 3,
    desc: "Lempar pisau ke semangka yang berputar. Jangan mengenai pisau yang sudah menancap.",
    game: "knife"
  },
  {
    id: "admin",
    title: "Admin Data",
    tag: "Kantor",
    salary: 150000,
    rep: 4,
    desc: "Ketik kode dokumen dengan tepat untuk menyelesaikan shift.",
    game: "typing"
  },
  {
    id: "gudang",
    title: "Sorter Gudang",
    tag: "Warehouse",
    salary: 175000,
    rep: 5,
    desc: "Pilih kategori barang yang cocok dengan instruksi.",
    game: "sorter"
  },
  {
    id: "teknisi",
    title: "Teknisi Rumah",
    tag: "Jasa",
    salary: 225000,
    rep: 6,
    desc: "Perbaiki semua kabel rusak untuk mendapat bayaran tinggi.",
    game: "repair"
  }
];

const assets = [
  { id: "sepeda", name: "Sepeda Kerja", price: 1200000, rep: 2, label: "SPD", desc: "Mobilitas awal dan simbol kerja keras pertama." },
  { id: "motor", name: "Motor Bekas", price: 8500000, rep: 4, label: "MTR", desc: "Upgrade gaya hidup yang bikin reputasi naik." },
  { id: "laptop", name: "Laptop Produktif", price: 11500000, rep: 7, label: "LTP", desc: "Peralatan serius untuk pribadi yang makin berkembang." },
  { id: "mobil", name: "Mobil Harian", price: 145000000, rep: 12, label: "CAR", desc: "Aset besar pertama yang terasa prestisius." },
  { id: "kontrakan", name: "Rumah Kontrakan", price: 350000000, rep: 22, label: "HOME", desc: "Simbol kestabilan hidup dan status sosial." },
  { id: "ruko", name: "Ruko Kecil", price: 850000000, rep: 45, label: "SHOP", desc: "Aset impian yang menunjukkan kelas ekonomi baru." }
];

const investments = [
  { id: "tabungan", mode: "term", name: "Tabungan Bank Digital", tag: "Likuid", min: 100000, max: 5000000, seconds: 25, low: 0.2, high: 0.8, risk: 1, repReq: 0, desc: "Sangat aman dan cepat cair, return kecil seperti bunga tabungan." },
  { id: "deposito", mode: "term", name: "Deposito Rupiah 1 Bulan", tag: "Bank", min: 1000000, max: 50000000, seconds: 45, low: 1.8, high: 3.2, risk: 2, repReq: 0, desc: "Simulasi deposito bank: stabil, cocok untuk modal pertama." },
  { id: "emas", mode: "term", name: "Emas Antam Digital", tag: "Emas", min: 500000, max: 30000000, seconds: 55, low: -1.5, high: 6.5, risk: 8, repReq: 2, desc: "Harga bisa naik turun, tapi terasa familiar di Indonesia." },
  { id: "pasar-uang", mode: "term", name: "Reksa Dana Pasar Uang", tag: "RDPU", min: 100000, max: 25000000, seconds: 60, low: 1.5, high: 4.5, risk: 4, repReq: 4, desc: "Relatif stabil, cocok untuk parkir uang sambil mengejar target." },
  { id: "sbr", mode: "coupon", name: "SBR - Savings Bond Ritel", tag: "SBN", min: 1000000, max: 50000000, seconds: 112, annualLow: 5.6, annualHigh: 6.4, couponEvery: 14, periods: 8, tenorLabel: "2 tahun", couponLabel: "kupon bulanan", risk: 3, repReq: 7, desc: "SBN ritel non-tradable: kupon berkala, pokok kembali saat jatuh tempo." },
  { id: "ori", mode: "coupon", name: "ORI - Obligasi Negara Ritel", tag: "SBN", min: 1000000, max: 75000000, seconds: 140, annualLow: 5.8, annualHigh: 7.0, couponEvery: 14, periods: 10, tenorLabel: "3 tahun", couponLabel: "kupon bulanan", risk: 5, repReq: 10, desc: "Obligasi negara ritel: kupon berkala dan pokok kembali saat jatuh tempo." },
  { id: "sukuk", mode: "coupon", name: "SR/ST - Sukuk Ritel", tag: "Syariah", min: 1000000, max: 75000000, seconds: 168, annualLow: 5.7, annualHigh: 6.9, couponEvery: 14, periods: 12, tenorLabel: "3-5 tahun", couponLabel: "imbal hasil bulanan", risk: 4, repReq: 12, desc: "Sukuk negara syariah: imbal hasil berkala dan pokok kembali." },
  { id: "rdpt", mode: "term", name: "Reksa Dana Pendapatan Tetap", tag: "RDPT", min: 500000, max: 60000000, seconds: 110, low: -2.0, high: 10.0, risk: 12, repReq: 15, desc: "Berbasis obligasi, potensi lebih tinggi tapi harga bisa berfluktuasi." },
  { id: "idx-bluechip", mode: "term", name: "Saham IDX Blue Chip", tag: "IDX", min: 1000000, max: 100000000, seconds: 130, low: -8.0, high: 18.0, risk: 22, repReq: 20, desc: "Simulasi saham besar di Bursa Efek Indonesia, return bisa naik turun." },
  { id: "umkm", mode: "coupon", name: "Bagi Hasil UMKM Warung Kopi", tag: "UMKM", min: 2000000, max: 80000000, seconds: 150, annualLow: 8.0, annualHigh: 18.0, couponEvery: 25, periods: 6, tenorLabel: "1 tahun usaha", couponLabel: "bagi hasil bulanan", risk: 20, repReq: 24, desc: "Modal usaha lokal: bagi hasil berkala, pokok kembali di akhir kontrak." },
  { id: "p2p", mode: "coupon", name: "Pendanaan P2P Produktif", tag: "P2P", min: 1000000, max: 50000000, seconds: 120, annualLow: 10.0, annualHigh: 21.0, couponEvery: 20, periods: 6, tenorLabel: "6 bulan", couponLabel: "cicilan imbal hasil", risk: 30, repReq: 28, desc: "Pendanaan produktif: imbal hasil berkala, tapi ada risiko keterlambatan." },
  { id: "properti", mode: "coupon", name: "Patungan Properti Kos", tag: "Properti", min: 10000000, max: 250000000, seconds: 220, annualLow: 6.0, annualHigh: 12.0, couponEvery: 22, periods: 10, tenorLabel: "5 tahun", couponLabel: "sewa tahunan", risk: 18, repReq: 36, desc: "Properti kos: simulasi sewa berkala selama tenor panjang, pokok kembali di akhir." },
  { id: "franchise", mode: "coupon", name: "Franchise Minuman Kekinian", tag: "Bisnis", min: 15000000, max: 200000000, seconds: 210, annualLow: 12.0, annualHigh: 28.0, couponEvery: 30, periods: 7, tenorLabel: "2 tahun", couponLabel: "profit share bulanan", risk: 28, repReq: 45, desc: "Bisnis ritel: profit share berkala, hasil tergantung ramai tidaknya outlet." },
  { id: "startup", mode: "term", name: "Startup Teknologi Lokal", tag: "Venture", min: 25000000, max: 500000000, seconds: 260, low: -35.0, high: 85.0, risk: 45, repReq: 60, desc: "Investasi ambisius: bisa rugi besar, bisa jadi lompatan ekonomi." }
];

const defaultAccount = (name) => ({
  name,
  money: 250000,
  reputation: 0,
  completedMissions: 0,
  ownedAssets: {},
  activeInvestments: [],
  lastSeen: Date.now()
});

const $ = (selector) => document.querySelector(selector);

const state = {
  accounts: loadAccounts(),
  current: null,
  selectedJob: jobs[0],
  missionReady: false,
  pendingReward: null,
  cleanupGame: null
};

const formatMoney = (value) => `Rp${Math.floor(value).toLocaleString("id-ID")}`;

function loadAccounts() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch {
    return {};
  }
}

function saveAccounts() {
  localStorage.setItem(storageKey, JSON.stringify(state.accounts));
}

function currentAccount() {
  const account = state.accounts[state.current];
  normalizeAccount(account);
  return account;
}

function normalizeAccount(account) {
  if (!account) return;
  if (!account.ownedAssets) account.ownedAssets = {};
  if (!Array.isArray(account.activeInvestments)) account.activeInvestments = [];
  account.activeInvestments.forEach((item) => {
    if (!item.mode) item.mode = "term";
    if (item.mode === "coupon") {
      if (!item.claimedCoupons) item.claimedCoupons = 0;
      if (!item.periods) item.periods = 1;
      if (!item.couponEvery) item.couponEvery = Math.max(1, Math.round((item.dueAt - item.startedAt) / 1000));
      if (!item.couponAmount) item.couponAmount = Math.max(1000, Math.round(item.amount * (item.returnRate / 100) / 12));
    }
  });
  if (!account.lastSeen) account.lastSeen = Date.now();
  if (!account.rupiahMigrated) {
    if (account.money < 100000) account.money = Math.max(250000, Math.round(account.money * 1000));
    account.rupiahMigrated = true;
  }
}

function maturedInvestmentCount(account = currentAccount()) {
  const now = Date.now();
  return account.activeInvestments.filter((item) => investmentClaimInfo(item, now).claimable > 0).length;
}

function activeInvestmentTotal(account = currentAccount()) {
  return account.activeInvestments.reduce((total, item) => total + item.amount, 0);
}

function markSeen(account) {
  account.lastSeen = Date.now();
}

function renderSavedAccounts() {
  const wrap = $("#savedAccounts");
  const names = Object.keys(state.accounts);
  wrap.innerHTML = "";
  if (!names.length) {
    wrap.innerHTML = `<span class="muted-text">Belum ada akun.</span>`;
    return;
  }
  names.forEach((name) => {
    const button = document.createElement("button");
    button.className = "account-chip";
    button.textContent = name;
    button.addEventListener("click", () => login(name));
    wrap.appendChild(button);
  });
}

function login(rawName) {
  const name = rawName.trim().replace(/\s+/g, " ");
  if (!name) return;
  if (!state.accounts[name]) {
    state.accounts[name] = defaultAccount(name);
  }
  state.current = name;
  normalizeAccount(currentAccount());
  markSeen(currentAccount());
  const ready = maturedInvestmentCount(currentAccount());
  saveAccounts();
  $("#loginScreen").classList.add("hidden");
  $("#gameScreen").classList.remove("hidden");
  selectJob(state.selectedJob.id);
  renderAll();
  if (ready > 0) {
    setStatus(`Selamat datang kembali. Ada ${ready} investasi matang yang bisa diklaim.`);
  }
}

function logout() {
  if (state.current) {
    currentAccount().lastSeen = Date.now();
    saveAccounts();
  }
  state.current = null;
  $("#gameScreen").classList.add("hidden");
  $("#loginScreen").classList.remove("hidden");
  $("#playerName").value = "";
  renderSavedAccounts();
}

function renderAll() {
  renderStats();
  renderJobs();
  renderAssets();
  renderInvestments();
  renderProfile();
}

function renderStats() {
  const account = currentAccount();
  $("#accountName").textContent = account.name;
  $("#moneyText").textContent = formatMoney(account.money);
  $("#repText").textContent = account.reputation.toLocaleString("id-ID");
  $("#idleText").textContent = `${account.activeInvestments.length} | ${formatMoney(activeInvestmentTotal(account))}`;
}

function renderJobs() {
  const wrap = $("#jobsContainer");
  wrap.innerHTML = "";
  jobs.forEach((job) => {
    const button = document.createElement("button");
    button.className = `job-card ${job.id === state.selectedJob.id ? "active" : ""}`;
    button.innerHTML = `<span>${job.tag}</span><strong>${job.title}</strong><span>Gaji ${formatMoney(job.salary)} | Rep +${job.rep}</span>`;
    button.addEventListener("click", () => selectJob(job.id));
    wrap.appendChild(button);
  });
}

function selectJob(jobId) {
  stopActiveGame();
  state.selectedJob = jobs.find((job) => job.id === jobId) || jobs[0];
  state.missionReady = false;
  state.pendingReward = null;
  $("#jobTag").textContent = state.selectedJob.tag;
  $("#jobTitle").textContent = state.selectedJob.title;
  $("#rewardText").textContent = `Gaji ${formatMoney(state.selectedJob.salary)}`;
  $("#jobDesc").textContent = state.selectedJob.desc;
  $("#claimButton").disabled = true;
  $("#startMissionButton").disabled = false;
  $("#gameArea").innerHTML = `<div class="phrase-box">Tekan mulai misi untuk bekerja.</div>`;
  $("#gameArea").classList.remove("is-playing", "is-complete");
  setStatus("Misi siap dipilih.");
  renderJobs();
}

function setStatus(text) {
  $("#missionStatus").textContent = text;
}

function completeMission(multiplier = 1) {
  const salary = Math.round(state.selectedJob.salary * multiplier);
  state.pendingReward = {
    money: salary,
    rep: state.selectedJob.rep
  };
  state.missionReady = true;
  $("#claimButton").disabled = false;
  $("#startMissionButton").disabled = true;
  playArenaEffect("is-complete");
  showMoneyFloat(`Misi selesai! ${formatMoney(salary)}`);
  setStatus(`Misi selesai. Gaji siap diambil: ${formatMoney(salary)} dan reputasi +${state.selectedJob.rep}.`);
}

function claimReward() {
  if (!state.missionReady || !state.pendingReward) return;
  const account = currentAccount();
  const rewardMoney = state.pendingReward.money;
  account.money += rewardMoney;
  account.reputation += state.pendingReward.rep;
  account.completedMissions += 1;
  account.lastSeen = Date.now();
  state.missionReady = false;
  state.pendingReward = null;
  saveAccounts();
  burstConfetti();
  showMoneyFloat(`+${formatMoney(rewardMoney)}`);
  renderAll();
  $("#claimButton").disabled = true;
  $("#startMissionButton").disabled = false;
  setStatus("Gaji masuk. Pilih misi lagi atau beli aset.");
}

function startMission() {
  stopActiveGame();
  state.missionReady = false;
  state.pendingReward = null;
  $("#claimButton").disabled = true;
  const game = state.selectedJob.game;
  playArenaEffect("is-playing");
  if (game === "tower") renderTowerGame();
  if (game === "knife") renderKnifeGame();
  if (game === "tapTargets") renderTapTargets();
  if (game === "route") renderRouteGame();
  if (game === "typing") renderTypingGame();
  if (game === "sorter") renderSorterGame();
  if (game === "repair") renderRepairGame();
}

function stopActiveGame() {
  if (typeof state.cleanupGame === "function") {
    state.cleanupGame();
    state.cleanupGame = null;
  }
}

function playArenaEffect(className) {
  const area = $("#gameArea");
  area.classList.remove("is-playing", "is-complete");
  void area.offsetWidth;
  area.classList.add(className);
}

function showMoneyFloat(text) {
  const existing = document.querySelector(".money-float");
  if (existing) existing.remove();
  const pop = document.createElement("div");
  pop.className = "money-float";
  pop.textContent = text;
  document.body.appendChild(pop);
  window.setTimeout(() => pop.remove(), 1300);
}

function burstConfetti() {
  const colors = ["#ffd447", "#ff4d8d", "#2878ff", "#14a44d", "#f79009"];
  for (let i = 0; i < 28; i += 1) {
    const piece = document.createElement("div");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[i % colors.length];
    piece.style.animationDelay = `${Math.random() * 0.28}s`;
    piece.style.transform = `rotate(${Math.random() * 180}deg)`;
    document.body.appendChild(piece);
    window.setTimeout(() => piece.remove(), 1500);
  }
}

function renderTowerGame() {
  let floors = 0;
  let direction = 1;
  let x = 0;
  let speed = 2.4;
  let perfect = 0;
  let frameId = null;
  let isDropping = false;
  let cameraOffset = 0;
  let blockWidth = 148;
  let previousLeft = 0;
  const floorHeight = 26;
  const targetFloors = 8;
  $("#gameArea").innerHTML = `
    <div class="arcade-stage tower-stage">
      <div class="tower-clouds"></div>
      <div class="tower-crane"></div>
      <div id="movingFloor" class="moving-floor"></div>
      <div id="towerWorld" class="tower-world">
        <div id="towerSkyline" class="tower-skyline"></div>
        <div class="tower-base">BASE</div>
      </div>
    </div>
    <div class="progress-track"><div id="towerProgress" class="progress-fill"></div></div>
    <button id="dropFloorButton" class="arcade-main-button">Drop lantai</button>
  `;
  const mover = $("#movingFloor");
  const skyline = $("#towerSkyline");
  const world = $("#towerWorld");
  const stage = $(".tower-stage");
  const base = $(".tower-base");
  const progress = $("#towerProgress");
  const dropButton = $("#dropFloorButton");

  function setupStage() {
    const stageWidth = stage.clientWidth;
    blockWidth = Math.min(148, Math.floor(stageWidth * 0.38));
    previousLeft = Math.round((stageWidth - blockWidth) / 2);
    x = previousLeft;
    base.style.width = `${blockWidth}px`;
    mover.style.width = `${blockWidth}px`;
    mover.style.left = `${x}px`;
    mover.style.bottom = `${floorHeight + 210}px`;
  }

  function animate() {
    const maxX = stage.clientWidth - blockWidth - 18;
    const minX = 18;
    x += direction * speed;
    if (x >= maxX || x <= minX) {
      direction *= -1;
      x = Math.max(minX, Math.min(maxX, x));
    }
    mover.style.left = `${x}px`;
    frameId = window.requestAnimationFrame(animate);
  }

  state.cleanupGame = () => window.cancelAnimationFrame(frameId);

  dropButton.addEventListener("click", () => {
    if (isDropping) return;
    isDropping = true;
    dropButton.disabled = true;
    window.cancelAnimationFrame(frameId);
    const currentLeft = Math.round(x);
    const currentRight = currentLeft + blockWidth;
    const previousRight = previousLeft + blockWidth;
    const overlapLeft = Math.max(currentLeft, previousLeft);
    const overlapRight = Math.min(currentRight, previousRight);
    const overlap = overlapRight - overlapLeft;
    const miss = blockWidth - overlap;
    const finalBottom = floors * floorHeight + 18;
    const moverBottom = Number.parseFloat(mover.style.bottom) || 236;
    const dropDistance = Math.max(28, moverBottom - finalBottom - cameraOffset);

    if (overlap <= 18) {
      mover.classList.add("tower-crash");
      createFallingPiece(currentLeft, finalBottom + 26, blockWidth, true);
      window.cancelAnimationFrame(frameId);
      state.cleanupGame = null;
      setStatus("Gedung roboh karena balok tidak overlap. Tetap dapat gaji latihan.");
      window.setTimeout(() => {
        mover.classList.add("hidden");
        completeMission(Math.max(0.55, floors / targetFloors));
      }, 720);
      return;
    }

    const floor = document.createElement("div");
    floor.className = "tower-floor dropping-floor";
    floor.style.left = `${overlapLeft}px`;
    floor.style.bottom = `${finalBottom}px`;
    floor.style.width = `${overlap}px`;
    floor.style.backgroundColor = floorColor(floors);
    floor.style.setProperty("--drop-distance", `${dropDistance}px`);
    skyline.appendChild(floor);
    mover.classList.add("hidden");
    stage.classList.remove("tower-impact");
    void stage.offsetWidth;
    window.setTimeout(() => stage.classList.add("tower-impact"), 190);

    if (miss > 5) {
      const cutLeft = currentLeft < previousLeft ? currentLeft : overlapRight;
      window.setTimeout(() => createFallingPiece(cutLeft, finalBottom + 26, miss, false), 210);
      perfect = 0;
    } else {
      perfect += 1;
      window.setTimeout(() => showMoneyFloat("Perfect stack!"), 170);
    }

    blockWidth = overlap;
    previousLeft = overlapLeft;
    floors += 1;
    progress.style.width = `${Math.min(100, (floors / targetFloors) * 100)}%`;

    if (miss <= 5) {
      floor.classList.add("perfect-floor");
      setStatus(`Lantai ${floors}/${targetFloors} sempurna. Combo ${perfect}.`);
    } else {
      floor.classList.add("wobbly-floor");
      setStatus(`Lantai ${floors}/${targetFloors}. Terpotong ${Math.round(miss)}px, hati-hati makin sempit.`);
    }

    cameraOffset = Math.max(0, Math.min(128, (floors - 4) * floorHeight));
    world.style.transform = `translateY(${cameraOffset}px)`;
    stage.style.setProperty("--camera-offset", `${cameraOffset}px`);
    speed += 0.24;

    if (floors >= targetFloors) {
      window.cancelAnimationFrame(frameId);
      state.cleanupGame = null;
      mover.classList.add("hidden");
      stage.classList.remove("tower-impact");
      completeMission(perfect >= 3 ? 1.45 : 1.18);
      return;
    }

    window.setTimeout(() => {
      mover.classList.remove("hidden");
      mover.classList.remove("tower-crash");
      mover.style.width = `${blockWidth}px`;
      mover.style.bottom = `${Math.min(250, floors * floorHeight + 210 - cameraOffset)}px`;
      isDropping = false;
      stage.classList.remove("tower-impact");
      dropButton.disabled = false;
      animate();
    }, 300);
  });

  function createFallingPiece(left, bottom, width, isCrash) {
    if (width <= 3) return;
    const piece = document.createElement("div");
    piece.className = `falling-piece ${isCrash ? "crash-piece" : ""}`;
    piece.style.left = `${left}px`;
    piece.style.bottom = `${bottom}px`;
    piece.style.width = `${width}px`;
    skyline.appendChild(piece);
    window.setTimeout(() => piece.remove(), 900);
  }

  function floorColor(index) {
    const colors = ["#ff4d8d", "#2878ff", "#ffd447", "#14a44d", "#f79009", "#a855f7"];
    return colors[index % colors.length];
  }

  setupStage();
  setStatus("Drop saat balok sejajar. Bagian yang meleset akan jatuh.");
  animate();
}

function renderKnifeGame() {
  let knives = 0;
  let rotation = 0;
  let speed = 2.7;
  let frameId = null;
  const stuckAngles = [38, 196];
  $("#gameArea").innerHTML = `
    <div class="arcade-stage knife-stage">
      <div id="watermelonTarget" class="watermelon-target">
        <div class="watermelon-ring"></div>
      </div>
      <div id="flyingKnife" class="flying-knife"></div>
    </div>
    <div class="progress-track"><div id="knifeProgress" class="progress-fill"></div></div>
    <button id="throwKnifeButton" class="arcade-main-button">Lempar pisau</button>
  `;
  const target = $("#watermelonTarget");
  const knife = $("#flyingKnife");
  const progress = $("#knifeProgress");
  const throwButton = $("#throwKnifeButton");

  function animate() {
    rotation = (rotation + speed) % 360;
    target.style.transform = `rotate(${rotation}deg)`;
    frameId = window.requestAnimationFrame(animate);
  }

  state.cleanupGame = () => window.cancelAnimationFrame(frameId);

  throwButton.addEventListener("click", () => {
    const hitAngle = normalizeAngle(180 - rotation);
    const tooClose = stuckAngles.some((angle) => angleDistance(angle, hitAngle) < 22);
    knife.classList.remove("knife-throw");
    void knife.offsetWidth;
    knife.classList.add("knife-throw");

    if (tooClose) {
      window.cancelAnimationFrame(frameId);
      state.cleanupGame = null;
      throwButton.disabled = true;
      setStatus("Pisau kena pisau lain. Misi gagal kecil, tapi tetap dapat gaji dasar.");
      window.setTimeout(() => completeMission(0.75), 420);
      return;
    }

    knives += 1;
    stuckAngles.push(hitAngle);
    const stuck = document.createElement("div");
    stuck.className = "stuck-knife";
    stuck.style.transform = `rotate(${hitAngle}deg) translateY(-88px)`;
    target.appendChild(stuck);
    progress.style.width = `${Math.min(100, (knives / 5) * 100)}%`;
    speed += 0.35;
    setStatus(`Pisau menancap ${knives}/5. Cari celah berikutnya.`);

    if (knives >= 5) {
      window.cancelAnimationFrame(frameId);
      state.cleanupGame = null;
      throwButton.disabled = true;
      completeMission(1.3);
    }
  });

  setStatus("Lempar saat sisi bawah semangka punya celah kosong.");
  animate();
}

function normalizeAngle(angle) {
  return ((angle % 360) + 360) % 360;
}

function angleDistance(a, b) {
  const diff = Math.abs(normalizeAngle(a) - normalizeAngle(b));
  return Math.min(diff, 360 - diff);
}

function renderTapTargets() {
  let score = 0;
  let mistakes = 0;
  const target = "Kopi";
  const words = ["Kopi", "Teh", "Kopi", "Roti", "Kopi", "Jus", "Kopi", "Kopi"];
  $("#gameArea").innerHTML = `
    <div class="phrase-box">Pesanan: pilih 5 tombol "${target}"</div>
    <div class="progress-track"><div id="tapProgress" class="progress-fill"></div></div>
    <div class="target-grid"></div>
  `;
  const grid = $(".target-grid");
  shuffle(words).forEach((word) => {
    const button = document.createElement("button");
    button.className = "tile-button";
    button.textContent = word;
    button.addEventListener("click", () => {
      if (word === target) {
        score += 1;
        button.classList.add("good");
        button.disabled = true;
      } else {
        mistakes += 1;
        button.classList.add("bad");
      }
      $("#tapProgress").style.width = `${Math.min(100, score * 20)}%`;
      setStatus(`Pesanan benar ${score}/5. Salah ${mistakes}.`);
      if (score >= 5) completeMission(mistakes === 0 ? 1.2 : 1);
    });
    grid.appendChild(button);
  });
  setStatus("Klik semua pesanan kopi.");
}

function renderRouteGame() {
  const route = [0, 1, 2, 7, 12, 13, 14];
  let step = 0;
  $("#gameArea").innerHTML = `
    <div class="phrase-box">Ikuti rute A ke B. Klik kotak yang menyala.</div>
    <div class="route-grid"></div>
  `;
  const grid = $(".route-grid");
  for (let i = 0; i < 15; i += 1) {
    const cell = document.createElement("button");
    cell.className = "route-cell";
    cell.textContent = i === 0 ? "A" : i === 14 ? "B" : "";
    cell.addEventListener("click", () => {
      if (i === route[step]) {
        cell.classList.remove("active");
        cell.classList.add("done");
        step += 1;
        markRouteActive();
        setStatus(`Rute terkirim ${step}/${route.length}.`);
        if (step >= route.length) completeMission(1.15);
      } else {
        setStatus("Rute salah. Cari kotak yang menyala.");
      }
    });
    grid.appendChild(cell);
  }
  function markRouteActive() {
    [...grid.children].forEach((cell) => cell.classList.remove("active"));
    if (route[step] !== undefined) grid.children[route[step]].classList.add("active");
  }
  markRouteActive();
}

function renderTypingGame() {
  const phrase = `DATA-${Math.floor(1000 + Math.random() * 8999)}-RAPI`;
  $("#gameArea").innerHTML = `
    <div class="phrase-box">${phrase}</div>
    <input id="typingMissionInput" class="typing-input" type="text" autocomplete="off" placeholder="Ketik kode di sini" />
    <div class="progress-track"><div id="typingProgress" class="progress-fill"></div></div>
  `;
  const input = $("#typingMissionInput");
  input.focus();
  input.addEventListener("input", () => {
    const value = input.value.toUpperCase();
    input.value = value;
    let correct = 0;
    for (let i = 0; i < value.length; i += 1) {
      if (value[i] === phrase[i]) correct += 1;
    }
    $("#typingProgress").style.width = `${Math.min(100, (correct / phrase.length) * 100)}%`;
    if (value === phrase) {
      input.disabled = true;
      completeMission(1.25);
    } else {
      setStatus(`Akurasi kode ${correct}/${phrase.length}.`);
    }
  });
  setStatus("Ketik kode dokumen dengan tepat.");
}

function renderSorterGame() {
  const rounds = [
    { item: "Paket dingin", answer: "Makanan", choices: ["Elektronik", "Makanan", "Pakaian"] },
    { item: "Sepatu lari", answer: "Pakaian", choices: ["Pakaian", "Makanan", "Dokumen"] },
    { item: "Router wifi", answer: "Elektronik", choices: ["Dokumen", "Elektronik", "Makanan"] },
    { item: "Kontrak kerja", answer: "Dokumen", choices: ["Elektronik", "Pakaian", "Dokumen"] }
  ];
  let round = 0;
  let streak = 0;
  drawSorterRound();

  function drawSorterRound() {
    const data = rounds[round];
    $("#gameArea").innerHTML = `
      <div class="phrase-box">Sortir: ${data.item}</div>
      <div class="sorter-grid"></div>
    `;
    const grid = $(".sorter-grid");
    data.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.className = "tile-button";
      button.textContent = choice;
      button.addEventListener("click", () => {
        if (choice === data.answer) {
          streak += 1;
          round += 1;
          setStatus(`Benar. Paket rapi ${round}/${rounds.length}.`);
          if (round >= rounds.length) completeMission(streak === rounds.length ? 1.25 : 1);
          else drawSorterRound();
        } else {
          streak = 0;
          setStatus("Kategori salah. Coba lagi.");
          button.classList.add("bad");
        }
      });
      grid.appendChild(button);
    });
  }
}

function renderRepairGame() {
  let fixed = 0;
  const broken = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, 6);
  $("#gameArea").innerHTML = `
    <div class="phrase-box">Perbaiki 6 kabel rusak yang bertanda X.</div>
    <div class="repair-grid"></div>
  `;
  const grid = $(".repair-grid");
  for (let i = 1; i <= 10; i += 1) {
    const isBroken = broken.includes(i);
    const button = document.createElement("button");
    button.className = "wire-button";
    button.textContent = isBroken ? `X${i}` : `OK${i}`;
    button.addEventListener("click", () => {
      if (!isBroken) {
        setStatus("Kabel itu masih bagus. Cari tanda X.");
        return;
      }
      if (button.classList.contains("fixed")) return;
      button.classList.add("fixed");
      button.textContent = `FIX${i}`;
      fixed += 1;
      setStatus(`Kabel diperbaiki ${fixed}/6.`);
      if (fixed >= 6) completeMission(1.2);
    });
    grid.appendChild(button);
  }
}

function renderAssets() {
  const account = currentAccount();
  const wrap = $("#assetsContainer");
  wrap.innerHTML = "";
  assets.forEach((asset) => {
    const owned = account.ownedAssets[asset.id] || 0;
    const price = asset.price * (owned + 1);
    const card = document.createElement("article");
    card.className = "asset-card";
    card.innerHTML = `
      <div class="asset-art">${asset.label}</div>
      <h4>${asset.name}</h4>
      <p>${asset.desc}</p>
      <div class="asset-meta"><span>Harga</span><span>${formatMoney(price)}</span></div>
      <div class="asset-meta"><span>Reputasi</span><span>+${asset.rep}</span></div>
      <div class="asset-meta"><span>Dimiliki</span><span>${owned}</span></div>
    `;
    const button = document.createElement("button");
    button.textContent = "Beli aset";
    button.disabled = account.money < price;
    button.addEventListener("click", () => buyAsset(asset.id));
    card.appendChild(button);
    wrap.appendChild(card);
  });
}

function buyAsset(assetId) {
  const account = currentAccount();
  const asset = assets.find((item) => item.id === assetId);
  const owned = account.ownedAssets[asset.id] || 0;
  const price = asset.price * (owned + 1);
  if (account.money < price) return;
  account.money -= price;
  account.ownedAssets[asset.id] = owned + 1;
  account.reputation += asset.rep;
  account.lastSeen = Date.now();
  saveAccounts();
  showMoneyFloat(`${asset.name} terbeli!`);
  burstConfetti();
  renderAll();
}

function renderInvestments() {
  if (!state.current) return;
  const account = currentAccount();
  const wrap = $("#investmentsContainer");
  const portfolio = $("#portfolioContainer");
  if (!wrap || !portfolio) return;
  wrap.innerHTML = "";
  portfolio.innerHTML = "";

  investments.forEach((investment) => {
    const locked = account.reputation < investment.repReq;
    const card = document.createElement("article");
    card.className = `investment-card ${locked ? "locked-investment" : ""}`;
    const recommended = Math.min(investment.max, Math.max(investment.min, Math.floor(account.money * 0.35)));
    card.innerHTML = `
      <div class="investment-top">
        <span class="investment-tag">${investment.tag}</span>
        <strong>${investment.name}</strong>
      </div>
      <div class="investment-mode">${investment.mode === "coupon" ? "Income berkala + pokok kembali" : "Hasil sekali saat matang"}</div>
      <p>${investment.desc}</p>
      <div class="asset-meta"><span>Modal</span><span>${formatMoney(investment.min)} - ${formatMoney(investment.max)}</span></div>
      ${investment.mode === "coupon" ? `
        <div class="asset-meta"><span>Kupon/imbal hasil</span><span>${formatPercent(investment.annualLow)} - ${formatPercent(investment.annualHigh)} / tahun</span></div>
        <div class="asset-meta"><span>Tenor dunia nyata</span><span>${investment.tenorLabel}</span></div>
        <div class="asset-meta"><span>Pembayaran</span><span>${investment.couponLabel}</span></div>
        <div class="asset-meta"><span>Durasi game</span><span>${investment.periods}x kupon</span></div>
      ` : `
        <div class="asset-meta"><span>Simulasi return</span><span>${formatPercent(investment.low)} sampai ${formatPercent(investment.high)}</span></div>
        <div class="asset-meta"><span>Durasi</span><span>${formatDuration(investment.seconds)}</span></div>
      `}
      <div class="asset-meta"><span>Risiko</span><span>${investment.risk}/50</span></div>
      <input class="investment-input" type="number" min="${investment.min}" max="${investment.max}" step="50" value="${recommended}" ${locked ? "disabled" : ""} />
    `;
    const button = document.createElement("button");
    button.textContent = locked ? `Butuh rep ${investment.repReq}` : "Investasikan";
    button.disabled = locked || account.money < investment.min;
    button.addEventListener("click", () => {
      const input = card.querySelector(".investment-input");
      startInvestment(investment.id, Number(input.value));
    });
    card.appendChild(button);
    wrap.appendChild(card);
  });

  if (!account.activeInvestments.length) {
    portfolio.innerHTML = `<div class="empty-portfolio">Belum ada investasi berjalan. Pilih instrumen, tentukan nominal, lalu tunggu sampai matang.</div>`;
    return;
  }

  account.activeInvestments
    .slice()
    .sort((a, b) => a.dueAt - b.dueAt)
    .forEach((item) => {
      const investment = investments.find((entry) => entry.id === item.investmentId);
      const info = investmentClaimInfo(item);
      const ready = info.claimable > 0;
      const row = document.createElement("article");
      row.className = `portfolio-card ${ready ? "ready-investment" : ""}`;
      row.innerHTML = `
        <div>
          <span class="investment-tag">${investment?.tag || "Investasi"}</span>
          <h4>${investment?.name || "Investasi"}</h4>
          <div class="investment-mode">${item.mode === "coupon" ? "Kupon berjalan" : "Menunggu hasil akhir"}</div>
          <p>${portfolioSummary(item, investment, info)}</p>
        </div>
        <div class="portfolio-action">
          <strong>${ready ? `${info.label} siap` : formatCountdown(info.nextIn)}</strong>
        </div>
      `;
      const button = document.createElement("button");
      button.textContent = item.mode === "coupon" ? "Klaim kupon" : "Klaim";
      button.disabled = !ready;
      button.addEventListener("click", () => claimInvestment(item.id));
      row.querySelector(".portfolio-action").appendChild(button);
      portfolio.appendChild(row);
    });
}

function startInvestment(investmentId, rawAmount) {
  const account = currentAccount();
  const investment = investments.find((item) => item.id === investmentId);
  if (!investment) return;
  const amount = Math.floor(rawAmount || 0);
  if (account.reputation < investment.repReq) {
    showMoneyFloat("Reputasi kurang");
    return;
  }
  if (amount < investment.min || amount > investment.max) {
    showMoneyFloat("Nominal tidak cocok");
    return;
  }
  if (amount > account.money) {
    showMoneyFloat("Uang kurang");
    return;
  }
  const returnRate = investment.mode === "coupon"
    ? randomBetween(investment.annualLow, investment.annualHigh)
    : randomBetween(investment.low, investment.high);
  const couponAmount = investment.mode === "coupon"
    ? Math.max(1000, Math.round(amount * (returnRate / 100) / 12))
    : 0;
  const payout = investment.mode === "coupon"
    ? amount
    : Math.max(0, Math.round(amount * (1 + returnRate / 100)));
  account.money -= amount;
  account.activeInvestments.push({
    id: `${investment.id}-${Date.now()}-${Math.floor(Math.random() * 9999)}`,
    investmentId,
    mode: investment.mode || "term",
    amount,
    payout,
    returnRate,
    couponAmount,
    couponEvery: investment.couponEvery || 0,
    periods: investment.periods || 0,
    claimedCoupons: 0,
    startedAt: Date.now(),
    dueAt: Date.now() + investment.seconds * 1000
  });
  markSeen(account);
  saveAccounts();
  showMoneyFloat(`${investment.name} dimulai`);
  renderAll();
}

function claimInvestment(id) {
  const account = currentAccount();
  const item = account.activeInvestments.find((entry) => entry.id === id);
  if (!item) return;
  const info = investmentClaimInfo(item);
  if (info.claimable <= 0) return;
  account.money += info.claimable;
  let profit = item.mode === "coupon" ? info.claimable : item.payout - item.amount;
  if (item.mode === "coupon") {
    item.claimedCoupons += info.couponsReady;
    if (info.includesPrincipal) {
      account.activeInvestments = account.activeInvestments.filter((entry) => entry.id !== id);
      profit = info.claimable - item.amount;
    }
  } else {
    account.activeInvestments = account.activeInvestments.filter((entry) => entry.id !== id);
  }
  account.reputation += profit >= 0 ? 1 : 0;
  markSeen(account);
  saveAccounts();
  showMoneyFloat(`${profit >= 0 ? "+" : ""}${formatMoney(profit)}`);
  burstConfetti();
  renderAll();
}

function investmentClaimInfo(item, now = Date.now()) {
  if (item.mode !== "coupon") {
    const nextIn = Math.max(0, item.dueAt - now);
    const ready = nextIn <= 0;
    return {
      claimable: ready ? item.payout : 0,
      nextIn,
      label: "Hasil akhir",
      couponsReady: 0,
      includesPrincipal: ready
    };
  }
  const elapsed = Math.max(0, now - item.startedAt);
  const availableCoupons = Math.min(item.periods, Math.floor(elapsed / (item.couponEvery * 1000)));
  const couponsReady = Math.max(0, availableCoupons - (item.claimedCoupons || 0));
  const maturityReady = now >= item.dueAt;
  const unclaimedCoupons = maturityReady ? Math.max(0, item.periods - (item.claimedCoupons || 0)) : couponsReady;
  const includesPrincipal = maturityReady;
  const claimable = unclaimedCoupons * item.couponAmount + (includesPrincipal ? item.amount : 0);
  const nextCouponAt = item.startedAt + ((item.claimedCoupons || 0) + 1) * item.couponEvery * 1000;
  return {
    claimable,
    nextIn: maturityReady ? 0 : Math.max(0, nextCouponAt - now),
    label: includesPrincipal ? "Pokok + kupon" : "Kupon",
    couponsReady: unclaimedCoupons,
    includesPrincipal
  };
}

function portfolioSummary(item, investment, info) {
  if (item.mode === "coupon") {
    return [
      `Modal ${formatMoney(item.amount)}`,
      `Kupon ${formatMoney(item.couponAmount)}/${investment?.couponLabel || "periode"}`,
      `${item.claimedCoupons || 0}/${item.periods} kupon diklaim`,
      `Pokok kembali saat jatuh tempo`
    ].join(" | ");
  }
  return `Modal ${formatMoney(item.amount)} | Hasil akhir ${formatMoney(item.payout)} | Return ${formatPercent(item.returnRate)}`;
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function formatDuration(seconds) {
  if (seconds < 60) return `${seconds} detik`;
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return rest ? `${minutes}m ${rest}d` : `${minutes} menit`;
}

function formatPercent(value) {
  return `${value > 0 ? "+" : ""}${value.toFixed(1).replace(".0", "")}%`;
}

function formatCountdown(ms) {
  const seconds = Math.ceil(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  if (minutes <= 0) return `${rest}d`;
  return `${minutes}m ${String(rest).padStart(2, "0")}d`;
}

function renderProfile() {
  const account = currentAccount();
  const ownedCount = Object.values(account.ownedAssets).reduce((total, count) => total + count, 0);
  $("#profileStats").innerHTML = `
    <div class="profile-line"><span>Nama akun</span><strong>${account.name}</strong></div>
    <div class="profile-line"><span>Total uang</span><strong>${formatMoney(account.money)}</strong></div>
    <div class="profile-line"><span>Misi selesai</span><strong>${account.completedMissions}</strong></div>
    <div class="profile-line"><span>Aset dimiliki</span><strong>${ownedCount}</strong></div>
    <div class="profile-line"><span>Modal berjalan</span><strong>${formatMoney(activeInvestmentTotal(account))}</strong></div>
    <div class="profile-line"><span>Investasi matang</span><strong>${maturedInvestmentCount(account)}</strong></div>
  `;
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

$("#loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  login($("#playerName").value);
});

$("#logoutButton").addEventListener("click", logout);
$("#startMissionButton").addEventListener("click", startMission);
$("#claimButton").addEventListener("click", claimReward);

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".view").forEach((view) => view.classList.remove("active-view"));
    tab.classList.add("active");
    $(`#${tab.dataset.view}`).classList.add("active-view");
    renderAll();
  });
});

setInterval(() => {
  if (!state.current) return;
  currentAccount();
  renderStats();
  renderInvestments();
}, 1000);

renderSavedAccounts();
