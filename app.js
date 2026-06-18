// ─── TRANSLATIONS ────────────────────────────────────────────────────────────
const T = {
  ru: {
    appName: "TEENVESTOR",
    tagline: "Учись. Зарабатывай. Побеждай.",
    enterName: "Введи своё имя",
    selectClass: "Выбери класс",
    startJourney: "Начать путь",
    namePlaceholder: "Твоё имя...",
    nav: { tasks: "Задачи", leaderboard: "Рейтинг", profile: "Профиль", shop: "Магазин", reviews: "Отзывы" },
    hint: "Подсказка",
    hintCost: "Подсказка — −5 монет",
    correct: "Верно! +",
    wrong: "Неверно. Попробуй ещё.",
    coins: "монет",
    byXP: "По XP", byCoins: "По монетам", byRewards: "По наградам", bySolved: "По решённым",
    totalSolved: "Решено задач", totalXP: "Всего XP", totalCoins: "TV Монеты",
    rewards: "Награды", unfinished: "Непройденные темы",
    openCase: "Открыть кейс", caseCost: "Стоимость",
    promoCode: "Промокод", promoPlaceholder: "Введи промокод...", applyPromo: "Применить",
    promoSuccess: "Промокод активирован!", promoError: "Неверный промокод", promoUsed: "Промокод уже использован",
    leaveReview: "Оставить отзыв", reviewPlaceholder: "Напиши своё мнение...", submit: "Отправить",
    class: "Класс", youWon: "Ты выиграл:", challengeBonus: "БОНУС ЗА СЕРИЮ",
    streak: "Серия", spinning: "Запускаем рулетку...", tapToClose: "Нажми чтобы закрыть",
    notEnoughCoins: "Нужно", questTitle: "Активный квест",
    questDesc: "Реши 3 задачи подряд без ошибок", questDesc5: "Реши 5 задач подряд — получи БОНУС",
    questHint: "Не хватает монет на подсказку", nameError: "Введи имя и выбери класс",
    gradeLabel: (g) => `${g} класс`, level: "Уровень",
    shopDesc: "Открывай кейсы за TV монеты. Зарабатывай монеты, решая задачи.",
    mapTitle: "Карта тем", mapDesc: "Проходи острова по порядку, чтобы открывать новые темы",
    locked: "Заблокировано", available: "Доступно", completed: "Пройдено",
    backToMap: "Вернуться к карте",
    bonusCoins: "бонус монет",
  },
  kz: {
    appName: "TEENVESTOR",
    tagline: "Оқы. Тап. Жең.",
    enterName: "Атыңды жаз",
    selectClass: "Сыныпты таңда",
    startJourney: "Жолды бастау",
    namePlaceholder: "Атың...",
    nav: { tasks: "Тапсырмалар", leaderboard: "Рейтинг", profile: "Профиль", shop: "Дүкен", reviews: "Пікірлер" },
    hint: "Кеңес",
    hintCost: "Кеңес — −5 монета",
    correct: "Дұрыс! +",
    wrong: "Қате. Қайтадан көр.",
    coins: "монета",
    byXP: "XP бойынша", byCoins: "Монеталар бойынша", byRewards: "Марапаттар бойынша", bySolved: "Шешілген бойынша",
    totalSolved: "Шешілген тапсырмалар", totalXP: "Барлық XP", totalCoins: "TV Монеталар",
    rewards: "Марапаттар", unfinished: "Аяқталмаған тақырыптар",
    openCase: "Кейсті ашу", caseCost: "Құны",
    promoCode: "Промокод", promoPlaceholder: "Промокод енгіз...", applyPromo: "Қолдану",
    promoSuccess: "Промокод белсендірілді!", promoError: "Жарамсыз промокод", promoUsed: "Промокод бұрын пайдаланылды",
    leaveReview: "Пікір қалдыру", reviewPlaceholder: "Пікіріңді жаз...", submit: "Жіберу",
    class: "Сынып", youWon: "Жеңдің:", challengeBonus: "СЕРИЯ БОНУСЫ",
    streak: "Серия", spinning: "Рулетка іске қосылуда...", tapToClose: "Жабу үшін басу",
    notEnoughCoins: "Керек", questTitle: "Белсенді квест",
    questDesc: "Қатесіз 3 тапсырманы шешіңіз", questDesc5: "5 тапсырманы қатарынан шешіңіз — БОНУС",
    questHint: "Кеңес алуға монета жетіспейді", nameError: "Атыңды жазып, сыныпты таңда",
    gradeLabel: (g) => `${g} сынып`, level: "Деңгей",
    shopDesc: "TV монеталарға кейстерді аш. Тапсырмаларды шешіп монета жина.",
    mapTitle: "Тақырып картасы", mapDesc: "Жаңа тақырыптарды ашу үшін аралдарды ретімен өт",
    locked: "Бұғатталған", available: "Қолжетімді", completed: "Аяқталды",
    backToMap: "Картаға оралу",
    bonusCoins: "бонус монета",
  },
  en: {
    appName: "TEENVESTOR",
    tagline: "Learn. Earn. Win.",
    enterName: "Enter your name",
    selectClass: "Select your grade",
    startJourney: "Begin Journey",
    namePlaceholder: "Your name...",
    nav: { tasks: "Tasks", leaderboard: "Leaderboard", profile: "Profile", shop: "Shop", reviews: "Reviews" },
    hint: "Hint",
    hintCost: "Hint — -5 coins",
    correct: "Correct! +",
    wrong: "Wrong. Try again.",
    coins: "coins",
    byXP: "By XP", byCoins: "By Coins", byRewards: "By Rewards", bySolved: "By Solved",
    totalSolved: "Tasks Solved", totalXP: "Total XP", totalCoins: "TV Coins",
    rewards: "Rewards", unfinished: "Unfinished Topics",
    openCase: "Open Case", caseCost: "Cost",
    promoCode: "Promo Code", promoPlaceholder: "Enter promo code...", applyPromo: "Apply",
    promoSuccess: "Promo code activated!", promoError: "Invalid promo code", promoUsed: "Promo code already used",
    leaveReview: "Leave a Review", reviewPlaceholder: "Write your opinion...", submit: "Submit",
    class: "Grade", youWon: "You won:", challengeBonus: "STREAK BONUS",
    streak: "Streak", spinning: "Spinning...", tapToClose: "Tap to close",
    notEnoughCoins: "Need", questTitle: "Active Quest",
    questDesc: "Solve 3 tasks in a row without mistakes", questDesc5: "Solve 5 tasks in a row — get a BONUS",
    questHint: "Not enough coins for a hint", nameError: "Enter name and select grade",
    gradeLabel: (g) => `Grade ${g}`, level: "Level",
    shopDesc: "Open cases with TV Coins earned by solving tasks.",
    mapTitle: "Topic Map", mapDesc: "Complete islands in order to unlock new topics",
    locked: "Locked", available: "Available", completed: "Completed",
    backToMap: "Back to Map",
    bonusCoins: "bonus coins",
  },
};

// ─── TASKS ───────────────────────────────────────────────────────────────────
const TASKS = [
  { id: 1, topic: "Числовые последовательности", question: "Найдите пропущенное число: 2, 3, 6, 12, ?, 48", options: ["20","24","18","30"], answer: "24", hint: "Каждое число умножается на 2. 12 × 2 = ?", xp: 20, coins: 15 },
  { id: 2, topic: "Абсолютные значения", question: "Определите неверное сравнение:", options: ["|−25| < 191 < |−345|","−700 < |0| < |−2|","−24 < 99 < |−199|","−42 < |−88| < 19"], answer: "−42 < |−88| < 19", hint: "|−88| = 88. Верно ли что 19 > 88?", xp: 25, coins: 20 },
  { id: 3, topic: "Дроби", question: "Вычислите: (−1¼) + (2½) + 1", options: ["9/4","3/4","4/5","5/6"], answer: "9/4", hint: "−5/4 + 5/2 + 1 = −5/4 + 10/4 + 4/4 = ?", xp: 30, coins: 25 },
  { id: 4, topic: "Неравенства", question: "Найдите наибольшее целое x при (x+7)/16 < 3/4", options: ["4","6","8","10"], answer: "4", hint: "x+7 < 12, значит x < 5. Наибольшее целое?", xp: 35, coins: 30 },
  { id: 5, topic: "Делимость", question: "Трёхзначное число 84a делится на 2 и 3. Найди a.", options: ["{0,2,4,6}","{2,4,6,8}","{4,6,8}","{0,6}"], answer: "{0,6}", hint: "Сумма цифр 8+4+a должна делиться на 3.", xp: 40, coins: 35 },
  { id: 6, topic: "Пропорции", question: "36 км газопровода: 1/3 — 50м трубы, остаток — 60м. Сколько труб?", options: ["600","620","640","660"], answer: "640", hint: "1/3 от 36км = 12000м. 12000/50 + 24000/60 = ?", xp: 45, coins: 40 },
  { id: 7, topic: "Логические паттерны", question: "KLM − 234 = 583. Найдите K+L+M = ?", options: ["10","12","14","16"], answer: "14", hint: "KLM = 583+234 = 817. K=8, L=1, M=7.", xp: 30, coins: 25 },
  { id: 8, topic: "Углы", question: "Угол AED = 120°, AEB = BEC = CED. Найди угол CED.", options: ["90°","80°","70°","60°"], answer: "60°", hint: "Три равных угла = 180°. 180°/3 = ?", xp: 35, coins: 30 },
  { id: 9, topic: "Проценты", question: "Товар подорожал на 20%, затем на 25%. Итоговый рост?", options: ["40%","45%","50%","55%"], answer: "50%", hint: "1.2 × 1.25 = 1.5, итого +50%", xp: 40, coins: 35 },
  { id: 10, topic: "Площадь", question: "Прямоугольник 8×6 см. Диагональ делит его. Площадь треугольника?", options: ["24 см²","48 см²","12 см²","36 см²"], answer: "24 см²", hint: "Площадь треугольника = ½ × 8 × 6 = ?", xp: 45, coins: 40 },
];

const ISLAND_OFFSETS = [0, 120, 40, 160, 60, 180, 20, 140, 80, 160];

// ─── PROMO CODES ─────────────────────────────────────────────────────────────
const PROMO_CODES = {
  "TEEN2025":  { coins: 100, xp: 50 },
  "INVEST100": { coins: 200, xp: 0 },
  "KAZMATH":   { coins: 0,   xp: 150 },
  "BONUS2025": { coins: 150, xp: 100 },
  "WELCOME":   { coins: 75,  xp: 25 },
};

// ─── RARITY ──────────────────────────────────────────────────────────────────
const RARITY_COLOR = {
  common: "#8b9cb5", uncommon: "#3ddc84", rare: "#4c9eff",
  epic: "#b06de3", legendary: "#f5a623", ultra: "#f43f5e",
};

// ─── CASES ───────────────────────────────────────────────────────────────────
const CASES = [
  {
    id: "bronze", name: { ru: "Бронзовый кейс", kz: "Қола кейс", en: "Bronze Case" },
    cost: 50, color: "#cd7f32", tier: "BRONZE",
    rewards: [
      { name:{ru:"50 XP Буст",kz:"50 XP Буст",en:"50 XP Boost"}, chance:40, type:"xp", value:50, rarity:"common", desc:{ru:"+50 XP к твоему счёту",kz:"+50 XP есебіңе",en:"+50 XP to your account"} },
      { name:{ru:"30 TV Монет",kz:"30 TV Монета",en:"30 TV Coins"}, chance:30, type:"coins", value:30, rarity:"uncommon", desc:{ru:"+30 монет на кошелёк",kz:"+30 монета әмияныңа",en:"+30 coins to wallet"} },
      { name:{ru:"Сертификат 5%",kz:"5% Сертификат",en:"Certificate 5%"}, chance:20, type:"cert", value:"5", rarity:"rare", desc:{ru:"Скидка 5% на курсы Teenvestor",kz:"Teenvestor курстарына 5% жеңілдік",en:"5% discount on Teenvestor courses"} },
      { name:{ru:"Сертификат 10%",kz:"10% Сертификат",en:"Certificate 10%"}, chance:10, type:"cert", value:"10", rarity:"epic", desc:{ru:"Скидка 10% на курсы Teenvestor",kz:"Teenvestor курстарына 10% жеңілдік",en:"10% discount on Teenvestor courses"} },
    ],
  },
  {
    id: "silver", name: { ru: "Серебряный кейс", kz: "Күміс кейс", en: "Silver Case" },
    cost: 120, color: "#b0b8c4", tier: "SILVER",
    rewards: [
      { name:{ru:"100 XP Буст",kz:"100 XP Буст",en:"100 XP Boost"}, chance:35, type:"xp", value:100, rarity:"common", desc:{ru:"+100 XP к счёту",kz:"+100 XP есебіңе",en:"+100 XP to account"} },
      { name:{ru:"80 TV Монет",kz:"80 TV Монета",en:"80 TV Coins"}, chance:25, type:"coins", value:80, rarity:"uncommon", desc:{ru:"+80 монет",kz:"+80 монета",en:"+80 coins"} },
      { name:{ru:"Сертификат 15%",kz:"15% Сертификат",en:"Certificate 15%"}, chance:22, type:"cert", value:"15", rarity:"rare", desc:{ru:"Скидка 15% на курсы",kz:"Курстарға 15% жеңілдік",en:"15% off courses"} },
      { name:{ru:"Сертификат 20%",kz:"20% Сертификат",en:"Certificate 20%"}, chance:13, type:"cert", value:"20", rarity:"epic", desc:{ru:"Скидка 20% на курсы",kz:"Курстарға 20% жеңілдік",en:"20% off courses"} },
      { name:{ru:"Значок Мыслитель",kz:"Ойшыл белгісі",en:"Thinker Badge"}, chance:5, type:"badge", value:"thinker", rarity:"legendary", desc:{ru:"Редкий значок на профиль",kz:"Профильге сирек белгі",en:"Rare profile badge"} },
    ],
  },
  {
    id: "gold", name: { ru: "Золотой кейс", kz: "Алтын кейс", en: "Gold Case" },
    cost: 250, color: "#f5c842", tier: "GOLD",
    rewards: [
      { name:{ru:"200 XP Буст",kz:"200 XP Буст",en:"200 XP Boost"}, chance:30, type:"xp", value:200, rarity:"uncommon", desc:{ru:"+200 XP",kz:"+200 XP",en:"+200 XP"} },
      { name:{ru:"150 TV Монет",kz:"150 TV Монета",en:"150 TV Coins"}, chance:22, type:"coins", value:150, rarity:"rare", desc:{ru:"+150 монет",kz:"+150 монета",en:"+150 coins"} },
      { name:{ru:"Сертификат 30%",kz:"30% Сертификат",en:"Certificate 30%"}, chance:20, type:"cert", value:"30", rarity:"rare", desc:{ru:"Скидка 30% на курсы",kz:"Курстарға 30% жеңілдік",en:"30% off courses"} },
      { name:{ru:"Сертификат 40%",kz:"40% Сертификат",en:"Certificate 40%"}, chance:15, type:"cert", value:"40", rarity:"epic", desc:{ru:"Скидка 40% на курсы",kz:"Курстарға 40% жеңілдік",en:"40% off courses"} },
      { name:{ru:"Значок Гений",kz:"Данышпан белгісі",en:"Genius Badge"}, chance:8, type:"badge", value:"genius", rarity:"legendary", desc:{ru:"Легендарный значок",kz:"Аңыздық белгі",en:"Legendary badge"} },
      { name:{ru:"Книга по финансам",kz:"Қаржы кітабы",en:"Finance Book"}, chance:5, type:"luxury", value:"book", rarity:"ultra", desc:{ru:"Топ-книга по инвестированию",kz:"Инвестиция туралы үздік кітап",en:"Top investing book"} },
    ],
  },
  {
    id: "elite", name: { ru: "Элитный кейс", kz: "Элиталық кейс", en: "Elite Case" },
    cost: 500, color: "#f43f5e", tier: "ELITE",
    rewards: [
      { name:{ru:"Сертификат 30%",kz:"30% Сертификат",en:"Certificate 30%"}, chance:25, type:"cert", value:"30", rarity:"rare", desc:{ru:"Скидка 30% на курсы",kz:"Курстарға 30% жеңілдік",en:"30% off courses"} },
      { name:{ru:"Сертификат 40%",kz:"40% Сертификат",en:"Certificate 40%"}, chance:20, type:"cert", value:"40", rarity:"epic", desc:{ru:"Скидка 40% на курсы",kz:"Курстарға 40% жеңілдік",en:"40% off courses"} },
      { name:{ru:"Книга по финансам",kz:"Қаржы кітабы",en:"Finance Book"}, chance:18, type:"luxury", value:"book", rarity:"ultra", desc:{ru:"Топ-книга по инвестированию",kz:"Инвестиция туралы үздік кітап",en:"Top investing book"} },
      { name:{ru:"Смартфон — розыгрыш",kz:"Смартфон — ойын",en:"Smartphone Raffle"}, chance:12, type:"luxury", value:"phone", rarity:"ultra", desc:{ru:"Участие в розыгрыше смартфона",kz:"Смартфон ойынына қатысу",en:"Enter smartphone raffle"} },
      { name:{ru:"1 месяц Pro-доступа",kz:"1 ай Pro-қолжетімділік",en:"1 Month Pro Access"}, chance:15, type:"luxury", value:"month", rarity:"ultra", desc:{ru:"Полный месяц с наставником",kz:"Тәлімгермен толық бір ай",en:"Full month with mentor"} },
      { name:{ru:"Легенда платформы",kz:"Платформа аңызы",en:"Platform Legend"}, chance:10, type:"badge", value:"legend", rarity:"legendary", desc:{ru:"Исключительный статус",kz:"Ерекше мәртебе",en:"Exclusive platform status"} },
    ],
  },
];

const MOCK_PLAYERS = [
  { name: "Arman K.", grade: 9, xp: 1850, coins: 420, rewards: 7, solved: 62 },
  { name: "Aisha N.", grade: 10, xp: 1640, coins: 380, rewards: 5, solved: 55 },
  { name: "Daniyar S.", grade: 8, xp: 1200, coins: 290, rewards: 4, solved: 41 },
  { name: "Madina T.", grade: 11, xp: 980, coins: 210, rewards: 3, solved: 33 },
  { name: "Berik A.", grade: 9, xp: 760, coins: 180, rewards: 2, solved: 26 },
];

// ─── STATE ────────────────────────────────────────────────────────────────────
let lang = "ru";
let t = T[lang];
let screen = "landing";
let tab = "tasks";
let playerName = "";
let playerGrade = "";
let coins = 80;
let xp = 0;
let streak = 0;
let earnedRewards = [];
let solvedTasks = {};
let shownHints = {};
let selectedAnswers = {};
let taskFeedback = {};
let promoInput = "";
let usedPromos = [];
let promoStatus = null;
let promoStatusTimer = null;
let lbFilter = "xp";
let reviewStars = 5;
let reviews = [
  { name: "Arman", text: "Отличная платформа! Решаю каждый день.", stars: 5, grade: 9 },
  { name: "Aisha", text: "Кейсы — огонь! Хочу больше наград.", stars: 5, grade: 10 },
  { name: "Berik", text: "Система кейсов мотивирует решать больше задач!", stars: 5, grade: 9 },
];
let activeCaseObj = null;
let selectedIslandId = null;
let questPopupTimer = null;
let audioCtx = null;

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function get(id) { return document.getElementById(id); }
function qs(sel) { return document.querySelector(sel); }
function qsa(sel) { return document.querySelectorAll(sel); }

function getLevel(xpVal) { return Math.floor(xpVal / 100) + 1; }
function getSolvedCount() { return Object.keys(solvedTasks).length; }

function typeIcon(type) {
  if (type === "xp") return "XP";
  if (type === "coins") return "TV";
  if (type === "cert") return "%";
  if (type === "badge") return "B";
  return "S";
}

function pickReward(rewards) {
  const r = Math.random() * 100;
  let cum = 0;
  for (const rw of rewards) { cum += rw.chance; if (r <= cum) return rw; }
  return rewards[rewards.length - 1];
}

function buildStrip(rewards, winner) {
  const strip = [];
  for (let i = 0; i < 50; i++) {
    strip.push(i === 44 ? { ...winner, isWinner: true } : pickReward(rewards));
  }
  return strip;
}

function playTick() {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.frequency.value = 880;
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.07);
    osc.start(); osc.stop(audioCtx.currentTime + 0.07);
  } catch(e) {}
}

// ─── RENDER ───────────────────────────────────────────────────────────────────
function render() {
  renderTopBar();
  renderXpBar();
  renderNav();
  renderTabs();
}

function renderTopBar() {
  const lvl = getLevel(xp);
  get("topbar-logo").textContent = t.appName;
  get("stat-coins").textContent = `TV ${coins}`;
  get("stat-coins").style.color = "#f5c842";
  get("stat-xp").textContent = `${xp} XP`;
  get("stat-xp").style.color = "#a5b4fc";
  get("stat-streak").textContent = `${streak} ${t.streak}`;
  get("stat-streak").style.color = streak >= 3 ? "#f59e0b" : "rgba(255,255,255,0.35)";
  get("stat-level").textContent = `${t.level} ${lvl}`;
  get("stat-level").style.color = "#3ddc84";
  qsa(".lang-btn-topbar").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

function renderXpBar() {
  const pct = xp % 100;
  get("xp-bar-fill").style.width = pct + "%";
}

function renderNav() {
  qsa(".tab-btn").forEach(btn => {
    const key = btn.dataset.tab;
    btn.textContent = t.nav[key];
    btn.classList.toggle("active", tab === key);
  });
}

function renderTabs() {
  qsa(".tab-panel").forEach(p => p.classList.remove("active"));
  const panel = get("tab-" + tab);
  if (panel) panel.classList.add("active");

  if (tab === "tasks") renderTasks();
  else if (tab === "shop") renderShop();
  else if (tab === "leaderboard") renderLeaderboard();
  else if (tab === "profile") renderProfile();
  else if (tab === "reviews") renderReviews();
}

// ─── TASKS / ISLAND MAP ───────────────────────────────────────────────────────
function renderTasks() {
  const panel = get("tab-tasks");

  if (selectedIslandId !== null) {
    const task = TASKS.find(t2 => t2.id === selectedIslandId);
    panel.innerHTML = buildTaskDetail(task);
    bindTaskDetailEvents(task);
    return;
  }

  panel.innerHTML = `
    <div class="tasks-header">
      <div>
        <div class="section-label">${t.nav.tasks}</div>
        <div class="tasks-greeting">${playerName}</div>
      </div>
      <div class="quest-banner">
        <div class="quest-banner-title">${t.questTitle}</div>
        <div class="quest-banner-desc">${streak < 3 ? t.questDesc : t.questDesc5}</div>
      </div>
    </div>
    ${buildIslandMap()}
  `;
  bindIslandMapEvents();
}

function buildIslandMap() {
  const legendItems = [
    { color: "#3ddc84", label: t.completed },
    { color: "#6c6ef5", label: t.available },
    { color: "rgba(255,255,255,0.18)", label: t.locked },
  ];

  let html = `
    <div class="map-header">
      <div class="section-label">${t.mapTitle}</div>
      <div class="map-desc">${t.mapDesc}</div>
    </div>
    <div class="map-legend">
      ${legendItems.map(li => `
        <div class="legend-item">
          <div class="legend-dot" style="background:${li.color}"></div>
          ${li.label}
        </div>
      `).join("")}
    </div>
    <div class="island-chain">
  `;

  TASKS.forEach((task, idx) => {
    const isSolved = !!solvedTasks[task.id];
    const prevSolved = idx === 0 || !!solvedTasks[TASKS[idx - 1].id];
    const isAvailable = prevSolved && !isSolved;
    const isLocked = !prevSolved && !isSolved;
    const offsetX = ISLAND_OFFSETS[idx] || 0;

    let stateClass, badgeClass, badgeContent;
    if (isSolved) {
      stateClass = "state-solved";
      badgeClass = "solved";
      badgeContent = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10l4 4 8-8" stroke="#3ddc84" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    } else if (isAvailable) {
      stateClass = "state-available";
      badgeClass = "available";
      badgeContent = `${idx + 1}`;
    } else {
      stateClass = "state-locked";
      badgeClass = "";
      badgeContent = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="3" y="7" width="10" height="8" rx="2" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/><path d="M5 7V5a3 3 0 016 0v2" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/></svg>`;
    }

    const connectorClass = isSolved ? "connector-line solved" : "connector-line";

    html += `<div class="island-row" style="margin-left:${offsetX}px">`;

    if (idx > 0) {
      html += `<div class="${connectorClass}"></div>`;
    }

    html += `
      <button class="island-btn ${stateClass}" data-task-id="${task.id}" ${isLocked ? "disabled" : ""}>
        <div class="island-badge ${badgeClass}">${badgeContent}</div>
        <div class="island-text">
          <div class="island-title">${task.topic}</div>
          <div class="island-meta">+${task.xp} XP &nbsp;·&nbsp; +${task.coins} TV</div>
        </div>
        ${isAvailable ? `<div class="island-pulse"></div>` : ""}
      </button>
    `;

    if (idx < TASKS.length - 1) {
      html += `<div class="${connectorClass}"></div>`;
    }

    html += `</div>`;
  });

  html += `</div>`;
  return html;
}

function bindIslandMapEvents() {
  qsa(".island-btn:not([disabled])").forEach(btn => {
    btn.addEventListener("click", () => {
      const taskId = parseInt(btn.dataset.taskId);
      selectedIslandId = taskId;
      renderTasks();
    });
  });
}

function buildTaskDetail(task) {
  const isSolved = !!solvedTasks[task.id];
  const fb = taskFeedback[task.id];
  const hintShown = !!shownHints[task.id];
  const selected = selectedAnswers[task.id];

  const optionsHtml = task.options.map(opt => {
    const isSel = selected === opt;
    const isCorrect = isSolved && opt === task.answer;
    const isWrong = fb === "wrong" && isSel;
    let cls = "option-btn";
    if (isCorrect) cls += " correct";
    else if (isWrong) cls += " wrong";
    else if (isSel) cls += " selected";
    return `<button class="${cls}" data-opt="${opt}" ${isSolved ? "disabled" : ""}>${opt}</button>`;
  }).join("");

  const feedbackHtml = fb
    ? `<div class="feedback-bar ${fb}">
        ${fb === "correct" ? `${t.correct}${task.coins} TV &nbsp;+${task.xp} XP` : t.wrong}
       </div>`
    : `<div class="feedback-bar"></div>`;

  let hintHtml = "";
  if (!isSolved) {
    if (!hintShown) {
      const canAfford = coins >= 5;
      hintHtml = `<div class="hint-area">
        <button class="hint-btn" id="hint-btn" ${canAfford ? "" : "disabled"}>
          ${canAfford ? t.hintCost : t.questHint}
        </button>
      </div>`;
    } else {
      hintHtml = `<div class="hint-area">
        <div class="hint-text visible">${task.hint}</div>
      </div>`;
    }
  }

  return `
    <button class="back-btn" id="back-to-map">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M10 12L6 8l4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      ${t.backToMap}
    </button>
    <div class="task-card ${isSolved ? "solved" : ""}">
      <div class="task-header">
        <div class="task-topic">${task.topic}</div>
        <div class="task-reward">+${task.xp} XP &nbsp;·&nbsp; +${task.coins} TV</div>
      </div>
      <div class="task-question">${task.question}</div>
      <div class="options-grid">${optionsHtml}</div>
      ${feedbackHtml}
      ${hintHtml}
    </div>
  `;
}

function bindTaskDetailEvents(task) {
  const backBtn = get("back-to-map");
  if (backBtn) backBtn.addEventListener("click", () => {
    selectedIslandId = null;
    renderTasks();
  });

  qsa(".option-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (solvedTasks[task.id]) return;
      handleAnswer(task.id, btn.dataset.opt);
    });
  });

  const hintBtn = get("hint-btn");
  if (hintBtn) hintBtn.addEventListener("click", () => useHint(task.id));
}

// ─── GAME LOGIC ───────────────────────────────────────────────────────────────
function handleAnswer(taskId, option) {
  if (solvedTasks[taskId]) return;
  selectedAnswers[taskId] = option;
  const task = TASKS.find(tk => tk.id === taskId);

  if (option === task.answer) {
    const newStreak = streak + 1;
    streak = newStreak;
    const bonus = newStreak >= 3 ? 10 : 0;
    coins += task.coins + bonus;
    xp += task.xp + bonus;
    solvedTasks[taskId] = true;
    taskFeedback[taskId] = "correct";

    if (newStreak === 3 || newStreak === 5 || newStreak === 10) {
      showQuestPopup(newStreak, bonus);
    }
    renderTopBar();
    renderXpBar();
    renderTasks();
  } else {
    streak = 0;
    taskFeedback[taskId] = "wrong";
    renderTopBar();
    renderTasks();
    setTimeout(() => {
      delete taskFeedback[taskId];
      if (selectedIslandId === taskId) renderTasks();
    }, 2000);
  }
}

function useHint(taskId) {
  if (coins < 5) return;
  coins -= 5;
  shownHints[taskId] = true;
  renderTopBar();
  renderTasks();
}

function showQuestPopup(streakVal, bonus) {
  const popup = get("quest-popup");
  get("quest-popup-title").textContent = `${t.challengeBonus} x${streakVal}`;
  get("quest-popup-sub").textContent = `+${bonus} ${t.bonusCoins}`;
  popup.classList.add("active");
  if (questPopupTimer) clearTimeout(questPopupTimer);
  questPopupTimer = setTimeout(() => popup.classList.remove("active"), 2800);
}

// ─── SHOP ─────────────────────────────────────────────────────────────────────
function renderShop() {
  get("shop-desc").textContent = t.shopDesc;
  get("promo-label").textContent = t.promoCode;
  get("promo-input").placeholder = t.promoPlaceholder;
  get("btn-apply-promo").textContent = t.applyPromo;

  // used promos
  const usedWrap = get("used-promos");
  usedWrap.innerHTML = usedPromos.map(c => `<div class="promo-tag">${c}</div>`).join("");

  // promo message
  const msgEl = get("promo-msg");
  msgEl.className = "promo-msg";
  if (promoStatus === "success") {
    msgEl.textContent = t.promoSuccess;
    msgEl.classList.add("visible", "success");
  } else if (promoStatus === "used") {
    msgEl.textContent = t.promoUsed;
    msgEl.classList.add("visible", "error");
  } else if (promoStatus === "error") {
    msgEl.textContent = t.promoError;
    msgEl.classList.add("visible", "error");
  }

  // cases
  const grid = get("cases-grid");
  grid.innerHTML = CASES.map(c => {
    const canAfford = coins >= c.cost;
    return `
      <div class="case-card ${canAfford ? "" : "locked"}" data-case-id="${c.id}" style="border-color:${canAfford ? c.color + "30" : "var(--border)"}">
        <div class="case-card-top-bar" style="background:${canAfford ? c.color : "transparent"}"></div>
        <div class="case-tier" style="color:${c.color}">${c.tier}</div>
        <div class="case-name">${c.name[lang]}</div>
        <div class="case-cost">TV ${c.cost}</div>
        <div class="case-rewards">
          ${c.rewards.map((rw, i) => `
            <div class="case-reward-row">
              <span class="case-reward-name">${rw.name[lang].length > 16 ? rw.name[lang].slice(0,14) + "…" : rw.name[lang]}</span>
              <span class="case-reward-chance" style="color:${RARITY_COLOR[rw.rarity]}">${rw.chance}%</span>
            </div>
          `).join("")}
        </div>
        <div class="case-action" style="background:${canAfford ? c.color + "12" : "rgba(255,255,255,0.03)"}; border:1px solid ${canAfford ? c.color + "30" : "var(--border)"}; color:${canAfford ? c.color : "var(--muted)"}">
          ${canAfford ? t.openCase : `${t.notEnoughCoins} TV ${c.cost}`}
        </div>
      </div>
    `;
  }).join("");

  qsa(".case-card:not(.locked)").forEach(card => {
    card.addEventListener("click", () => {
      const cId = card.dataset.caseId;
      const cObj = CASES.find(c => c.id === cId);
      if (cObj && coins >= cObj.cost) openCase(cObj);
    });
  });
}

function applyPromo() {
  const code = get("promo-input").value.trim().toUpperCase();
  if (promoStatusTimer) clearTimeout(promoStatusTimer);
  if (!PROMO_CODES[code]) {
    promoStatus = "error";
  } else if (usedPromos.includes(code)) {
    promoStatus = "used";
  } else {
    const promo = PROMO_CODES[code];
    coins += promo.coins || 0;
    xp += promo.xp || 0;
    usedPromos.push(code);
    promoStatus = "success";
    get("promo-input").value = "";
    promoInput = "";
    renderTopBar();
    renderXpBar();
  }
  renderShop();
  promoStatusTimer = setTimeout(() => { promoStatus = null; renderShop(); }, 3000);
}

function openCase(caseObj) {
  if (coins < caseObj.cost) return;
  coins -= caseObj.cost;
  activeCaseObj = caseObj;
  renderTopBar();
  showRoulette(caseObj);
}

// ─── ROULETTE ─────────────────────────────────────────────────────────────────
function showRoulette(caseObj) {
  const overlay = get("overlay");
  overlay.classList.add("active");

  get("roulette-tier").textContent = caseObj.tier;
  get("roulette-tier").style.color = caseObj.color;
  get("roulette-name").textContent = caseObj.name[lang];
  get("roulette-status").textContent = "";
  get("roulette-result-panel").style.display = "none";
  get("roulette-spin-wrap").style.display = "block";

  get("roulette-highlight").style.borderLeft = `2px solid ${caseObj.color}88`;
  get("roulette-highlight").style.borderRight = `2px solid ${caseObj.color}88`;
  get("roulette-arrow-top").style.borderTopColor = caseObj.color;
  get("roulette-arrow-bot").style.borderBottomColor = caseObj.color;

  const openBtn = get("roulette-open-btn");
  openBtn.style.borderColor = caseObj.color + "66";
  openBtn.style.background = caseObj.color + "14";
  openBtn.style.color = caseObj.color;
  openBtn.textContent = `${t.openCase} — TV ${caseObj.cost}`;

  openBtn.onclick = () => startSpin(caseObj);
}

function startSpin(caseObj) {
  const winner = pickReward(caseObj.rewards);
  const strip = buildStrip(caseObj.rewards, winner);
  const ITEM_W = 120;

  get("roulette-open-btn").style.display = "none";
  get("roulette-status").textContent = t.spinning;

  const stripEl = get("roulette-strip");
  stripEl.innerHTML = strip.map((item, i) => `
    <div class="roulette-item" data-idx="${i}">
      <div class="roulette-item-icon" style="background:${RARITY_COLOR[item.rarity]}18; border:1px solid ${RARITY_COLOR[item.rarity]}55; color:${RARITY_COLOR[item.rarity]}">${typeIcon(item.type)}</div>
      <div class="roulette-item-name" style="color:${RARITY_COLOR[item.rarity]}">${item.name[lang].length > 12 ? item.name[lang].slice(0,10) + "…" : item.name[lang]}</div>
      <div class="roulette-item-bar" style="background:${RARITY_COLOR[item.rarity]}"></div>
    </div>
  `).join("");

  const containerW = Math.min(860, window.innerWidth - 32);
  const startX = containerW / 2 - ITEM_W / 2;
  const targetX = startX - 44 * ITEM_W;
  const duration = 5500;
  const startTime = performance.now();
  let lastTick = -1;

  function animate(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 4);
    const cur = startX + (targetX - startX) * ease;
    stripEl.style.transform = `translateX(${cur}px)`;

    const centerIdx = Math.floor((containerW / 2 - cur) / ITEM_W);
    if (centerIdx !== lastTick && centerIdx >= 0 && centerIdx < 50) {
      lastTick = centerIdx;
      playTick();
      qsa(".roulette-item").forEach((el, i) => {
        el.style.background = i === centerIdx ? `${RARITY_COLOR[strip[i].rarity]}20` : "transparent";
      });
    }

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      get("roulette-status").textContent = "";
      showResult(winner, caseObj);
    }
  }
  requestAnimationFrame(animate);
}

function showResult(winner, caseObj) {
  const rc = RARITY_COLOR[winner.rarity];
  get("roulette-spin-wrap").style.display = "none";
  const rp = get("roulette-result-panel");
  rp.style.display = "flex";
  rp.style.flexDirection = "column";
  rp.style.alignItems = "center";
  rp.style.justifyContent = "center";
  rp.style.borderColor = rc + "44";
  rp.style.boxShadow = `0 0 80px ${rc}33`;

  get("result-icon").style.background = rc + "18";
  get("result-icon").style.border = `2px solid ${rc}`;
  get("result-icon").style.color = rc;
  get("result-icon").textContent = typeIcon(winner.type);
  get("result-rarity").textContent = winner.rarity;
  get("result-rarity").style.color = rc;
  get("result-label").textContent = t.youWon;
  get("result-name").textContent = winner.name[lang];
  get("result-desc").textContent = winner.desc[lang];
  get("result-close-hint").textContent = t.tapToClose;

  const valEl = get("result-value");
  if (winner.type === "xp") { valEl.textContent = `+${winner.value} XP`; valEl.style.color = "#a5b4fc"; valEl.style.display = "block"; }
  else if (winner.type === "coins") { valEl.textContent = `+${winner.value} TV`; valEl.style.color = "#f5c842"; valEl.style.display = "block"; }
  else { valEl.style.display = "none"; }

  const okBtn = get("result-ok-btn");
  okBtn.style.background = rc;
  okBtn.onclick = () => finishCase(winner);
}

function finishCase(winner) {
  if (winner.type === "xp") xp += winner.value;
  else if (winner.type === "coins") coins += winner.value;
  else earnedRewards.push(winner);
  activeCaseObj = null;
  get("overlay").classList.remove("active");
  renderTopBar();
  renderXpBar();
  renderShop();
}

// ─── LEADERBOARD ──────────────────────────────────────────────────────────────
function renderLeaderboard() {
  const lbData = getLeaderboardData();
  const names = { ru: ["Имя","Класс","Решено"], kz: ["Аты","Сынып","Шешілген"], en: ["Name","Grade","Solved"] };
  const n = names[lang];

  qsa(".lb-filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === lbFilter);
    const map = { xp: t.byXP, coins: t.byCoins, rewards: t.byRewards, solved: t.bySolved };
    btn.textContent = map[btn.dataset.filter];
  });

  const tbody = get("lb-tbody");
  tbody.innerHTML = lbData.map((p, idx) => {
    const isMe = p.name === (playerName || "Ты");
    const mc = idx === 0 ? "#f5c842" : idx === 1 ? "#b0b8c4" : idx === 2 ? "#cd7f32" : "rgba(255,255,255,0.35)";
    return `
      <tr class="${isMe ? "me" : ""}">
        <td style="color:${mc}">${idx + 1}</td>
        <td class="${isMe ? "lb-name-me" : ""}">${p.name}${isMe ? " ·" : ""}</td>
        <td style="color:var(--muted)">${p.grade}</td>
        <td class="lb-xp">${p.xp}</td>
        <td class="lb-coins">${p.coins}</td>
        <td class="lb-solved">${p.solved}</td>
      </tr>
    `;
  }).join("");

  const headers = get("lb-headers");
  headers.innerHTML = `
    <th>#</th><th>${n[0]}</th><th>${n[1]}</th><th>XP</th><th>TV</th><th>${n[2]}</th>
  `;
}

function getLeaderboardData() {
  const me = { name: playerName || "Ты", grade: playerGrade || "?", xp, coins, rewards: earnedRewards.length, solved: getSolvedCount() };
  return [...MOCK_PLAYERS, me].sort((a, b) => {
    if (lbFilter === "xp") return b.xp - a.xp;
    if (lbFilter === "coins") return b.coins - a.coins;
    if (lbFilter === "rewards") return b.rewards - a.rewards;
    return b.solved - a.solved;
  });
}

// ─── PROFILE ──────────────────────────────────────────────────────────────────
function renderProfile() {
  const lvl = getLevel(xp);
  const pct = xp % 100;
  const solvedCnt = getSolvedCount();
  const unfinished = [...new Set(TASKS.filter(tk => !solvedTasks[tk.id]).map(tk => tk.topic))];

  get("profile-avatar").textContent = (playerName || "?")[0].toUpperCase();
  get("profile-name").textContent = playerName;
  get("profile-sub").textContent = `${t.class} ${playerGrade}  ·  ${t.level} ${lvl}`;
  get("xp-progress-fill").style.width = pct + "%";
  get("xp-label-left").textContent = "XP Progress";
  get("xp-label-right").textContent = `${pct}/100 to ${t.level} ${lvl + 1}`;

  const statsData = [
    [solvedCnt, t.totalSolved, "#3ddc84"],
    [xp, t.totalXP, "#a5b4fc"],
    [coins, t.totalCoins, "#f5c842"],
    [earnedRewards.length, t.rewards, "#f43f5e"],
    [streak, t.streak, "#f59e0b"],
    [lvl, t.level, "#6c6ef5"],
  ];
  get("stats-grid").innerHTML = statsData.map(([val, lbl, color]) => `
    <div class="stat-cell">
      <div class="stat-val" style="color:${color}">${val}</div>
      <div class="stat-lbl">${lbl}</div>
    </div>
  `).join("");

  const rewardsCard = get("rewards-card");
  if (earnedRewards.length > 0) {
    rewardsCard.classList.add("visible");
    get("rewards-title").textContent = t.rewards;
    get("rewards-tags").innerHTML = earnedRewards.map(r => `
      <div class="reward-tag" style="background:${RARITY_COLOR[r.rarity]}0e; border:1px solid ${RARITY_COLOR[r.rarity]}40; color:${RARITY_COLOR[r.rarity]}">${r.name[lang]}</div>
    `).join("");
  } else {
    rewardsCard.classList.remove("visible");
  }

  const unfinishedCard = get("unfinished-card");
  if (unfinished.length > 0) {
    unfinishedCard.classList.add("visible");
    get("unfinished-title").textContent = t.unfinished;
    get("unfinished-tags").innerHTML = unfinished.map(tp => `<div class="unfinished-tag">${tp}</div>`).join("");
  } else {
    unfinishedCard.classList.remove("visible");
  }
}

// ─── REVIEWS ──────────────────────────────────────────────────────────────────
function renderReviews() {
  get("review-form-label").textContent = t.leaveReview;
  get("review-textarea").placeholder = t.reviewPlaceholder;
  get("btn-submit-review").textContent = t.submit;
  renderStars();
  renderReviewList();
}

function renderStars() {
  qsa(".star-btn").forEach(btn => {
    const s = parseInt(btn.dataset.star);
    btn.classList.toggle("lit", s <= reviewStars);
  });
}

function renderReviewList() {
  get("reviews-list").innerHTML = reviews.map(r => `
    <div class="review-item">
      <div class="review-meta">
        <div class="review-author">
          <div class="review-avatar">${r.name[0]}</div>
          <div>
            <div class="review-name">${r.name}</div>
            ${r.grade ? `<div class="review-grade">${t.class} ${r.grade}</div>` : ""}
          </div>
        </div>
        <div class="review-stars">${"★".repeat(r.stars)}${"☆".repeat(5 - r.stars)}</div>
      </div>
      <div class="review-text">${r.text}</div>
    </div>
  `).join("");
}

function submitReview() {
  const text = get("review-textarea").value.trim();
  if (!text) return;
  reviews.unshift({ name: playerName || "Аноним", text, stars: reviewStars, grade: playerGrade });
  get("review-textarea").value = "";
  renderReviews();
}

// ─── LANDING LOGIC ────────────────────────────────────────────────────────────
function startGame() {
  const nameVal = get("landing-name").value.trim();
  const gradeVal = get("landing-grade").value;
  const nameInput = get("landing-name");
  const gradeSelect = get("landing-grade");
  const errMsg = get("name-error");

  if (!nameVal || !gradeVal) {
    nameInput.classList.toggle("error", !nameVal);
    gradeSelect.classList.toggle("error", !gradeVal);
    errMsg.textContent = t.nameError;
    errMsg.classList.add("visible");
    return;
  }
  nameInput.classList.remove("error");
  gradeSelect.classList.remove("error");
  errMsg.classList.remove("visible");

  playerName = nameVal;
  playerGrade = gradeVal;
  screen = "main";
  get("screen-landing").classList.remove("active");
  get("screen-main").classList.add("active");
  render();
}

function setLang(l) {
  lang = l;
  t = T[lang];

  // Update landing
  get("logo-tagline").textContent = t.tagline;
  get("landing-name").placeholder = t.namePlaceholder;
  get("label-name").textContent = t.enterName;
  get("label-grade").textContent = t.selectClass;
  get("btn-start").textContent = t.startJourney;
  get("name-error").textContent = t.nameError;
  updateGradeOptions();
  qsa(".lang-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.lang === lang));

  if (screen === "main") render();
}

function updateGradeOptions() {
  const sel = get("landing-grade");
  const cur = sel.value;
  sel.innerHTML = `<option value="">${t.selectClass}</option>` +
    [5,6,7,8,9,10,11].map(g => `<option value="${g}" ${cur == g ? "selected" : ""}>${t.gradeLabel(g)}</option>`).join("");
  sel.classList.toggle("placeholder", !sel.value);
}

// ─── BUILD HTML ───────────────────────────────────────────────────────────────
function buildHTML() {
  const app = get("app");
  app.innerHTML = `
    <!-- LANDING -->
    <div id="screen-landing" class="screen active">
      <div class="landing-glow"></div>
      <div class="lang-switcher-landing">
        ${["ru","kz","en"].map(l => `<button class="lang-btn ${l === lang ? "active" : ""}" data-lang="${l}" onclick="setLang('${l}')">${l.toUpperCase()}</button>`).join("")}
      </div>
      <div class="landing-inner">
        <div class="logo-wrap">
          <div class="logo-text">TEENVESTOR</div>
          <div class="logo-tagline" id="logo-tagline">${t.tagline}</div>
        </div>
        <div class="login-card">
          <div class="field-label" id="label-name">${t.enterName}</div>
          <input id="landing-name" class="text-input" placeholder="${t.namePlaceholder}" autocomplete="off" />
          <div class="field-label" id="label-grade">${t.selectClass}</div>
          <select id="landing-grade" class="select-input placeholder">
            <option value="">${t.selectClass}</option>
            ${[5,6,7,8,9,10,11].map(g => `<option value="${g}">${t.gradeLabel(g)}</option>`).join("")}
          </select>
          <div class="error-msg" id="name-error">${t.nameError}</div>
          <button id="btn-start" class="btn-primary" onclick="startGame()">${t.startJourney}</button>
        </div>
      </div>
    </div>

    <!-- MAIN -->
    <div id="screen-main" class="screen">

      <!-- TOPBAR -->
      <div class="topbar">
        <div class="topbar-logo" id="topbar-logo">TEENVESTOR</div>
        <div class="topbar-stats">
          <div class="stat-chip" id="stat-coins">TV 80</div>
          <div class="stat-chip" id="stat-xp">0 XP</div>
          <div class="stat-chip" id="stat-streak">0 ${t.streak}</div>
          <div class="stat-chip" id="stat-level">${t.level} 1</div>
        </div>
        <div class="topbar-lang">
          ${["ru","kz","en"].map(l => `<button class="lang-btn lang-btn-topbar ${l === lang ? "active" : ""}" data-lang="${l}" onclick="setLang('${l}')">${l.toUpperCase()}</button>`).join("")}
        </div>
      </div>

      <!-- XP BAR -->
      <div class="xp-bar-wrap">
        <div class="xp-bar-fill" id="xp-bar-fill" style="width:0%"></div>
      </div>

      <!-- NAV -->
      <div class="nav-tabs">
        ${["tasks","shop","leaderboard","profile","reviews"].map(key => `
          <button class="tab-btn ${key === "tasks" ? "active" : ""}" data-tab="${key}">${t.nav[key]}</button>
        `).join("")}
      </div>

      <!-- CONTENT -->
      <div class="content">

        <!-- TASKS -->
        <div id="tab-tasks" class="tab-panel active"></div>

        <!-- SHOP -->
        <div id="tab-shop" class="tab-panel">
          <div class="section-label">${t.nav.shop}</div>
          <div class="shop-desc" id="shop-desc">${t.shopDesc}</div>
          <div class="promo-card">
            <div class="subsection-label" id="promo-label">${t.promoCode}</div>
            <div class="promo-row">
              <input id="promo-input" class="promo-input" placeholder="${t.promoPlaceholder}" autocomplete="off" />
              <button id="btn-apply-promo" class="btn-apply">${t.applyPromo}</button>
            </div>
            <div class="promo-msg" id="promo-msg"></div>
            <div class="used-promos" id="used-promos"></div>
          </div>
          <div class="cases-grid" id="cases-grid"></div>
        </div>

        <!-- LEADERBOARD -->
        <div id="tab-leaderboard" class="tab-panel">
          <div class="section-label">${t.leaderboard || "Рейтинг"}</div>
          <div class="lb-filters">
            ${["xp","coins","rewards","solved"].map(f => `
              <button class="lb-filter-btn ${f === lbFilter ? "active" : ""}" data-filter="${f}">${{xp:t.byXP,coins:t.byCoins,rewards:t.byRewards,solved:t.bySolved}[f]}</button>
            `).join("")}
          </div>
          <div class="lb-table-wrap">
            <table class="lb-table">
              <thead><tr id="lb-headers"></tr></thead>
              <tbody id="lb-tbody"></tbody>
            </table>
          </div>
        </div>

        <!-- PROFILE -->
        <div id="tab-profile" class="tab-panel">
          <div class="section-label">${t.profile || "Профиль"}</div>
          <div class="profile-card">
            <div class="profile-header">
              <div class="profile-avatar" id="profile-avatar">?</div>
              <div>
                <div class="profile-name" id="profile-name"></div>
                <div class="profile-sub" id="profile-sub"></div>
              </div>
            </div>
            <div class="xp-progress-label">
              <span id="xp-label-left">XP Progress</span>
              <span id="xp-label-right"></span>
            </div>
            <div class="xp-progress-track">
              <div class="xp-progress-fill" id="xp-progress-fill" style="width:0%"></div>
            </div>
            <div class="stats-grid" id="stats-grid"></div>
          </div>
          <div class="rewards-card" id="rewards-card">
            <div class="subsection-label" id="rewards-title"></div>
            <div class="tags-wrap" id="rewards-tags"></div>
          </div>
          <div class="unfinished-card" id="unfinished-card">
            <div class="subsection-label" id="unfinished-title"></div>
            <div class="tags-wrap" id="unfinished-tags"></div>
          </div>
        </div>

        <!-- REVIEWS -->
        <div id="tab-reviews" class="tab-panel">
          <div class="section-label">${t.reviews || "Отзывы"}</div>
          <div class="review-form-card">
            <div class="subsection-label" id="review-form-label">${t.leaveReview}</div>
            <div class="stars-row" id="stars-row">
              ${[1,2,3,4,5].map(s => `<button class="star-btn ${s <= reviewStars ? "lit" : ""}" data-star="${s}">★</button>`).join("")}
            </div>
            <textarea id="review-textarea" class="review-textarea" placeholder="${t.reviewPlaceholder}"></textarea>
            <button id="btn-submit-review" class="btn-submit">${t.submit}</button>
          </div>
          <div id="reviews-list"></div>
        </div>

      </div><!-- /content -->
    </div><!-- /screen-main -->

    <!-- CASE OVERLAY -->
    <div id="overlay" class="overlay">
      <div class="roulette-wrap">
        <div class="roulette-header">
          <div class="roulette-tier" id="roulette-tier"></div>
          <div class="roulette-name" id="roulette-name"></div>
          <div class="roulette-status" id="roulette-status"></div>
        </div>

        <div id="roulette-spin-wrap">
          <div class="roulette-track">
            <div class="roulette-highlight" id="roulette-highlight"></div>
            <div class="roulette-arrow-top" id="roulette-arrow-top"></div>
            <div class="roulette-arrow-bot" id="roulette-arrow-bot"></div>
            <div class="roulette-strip" id="roulette-strip"></div>
            <div class="roulette-fade-l"></div>
            <div class="roulette-fade-r"></div>
          </div>
          <button class="roulette-open-btn" id="roulette-open-btn"></button>
        </div>

        <div class="roulette-result" id="roulette-result-panel" style="display:none">
          <div class="result-icon" id="result-icon"></div>
          <div class="result-rarity" id="result-rarity"></div>
          <div class="result-label" id="result-label"></div>
          <div class="result-name" id="result-name"></div>
          <div class="result-desc" id="result-desc"></div>
          <div class="result-value" id="result-value"></div>
          <button class="btn-ok" id="result-ok-btn">OK</button>
          <div class="result-close-hint" id="result-close-hint"></div>
        </div>
      </div>
    </div>

    <!-- QUEST POPUP -->
    <div id="quest-popup" class="quest-popup">
      <div class="quest-popup-title" id="quest-popup-title"></div>
      <div class="quest-popup-sub" id="quest-popup-sub"></div>
    </div>
  `;
}

// ─── BIND EVENTS ──────────────────────────────────────────────────────────────
function bindEvents() {
  // Landing: Enter key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && screen === "landing") startGame();
  });

  // Tab navigation
  document.addEventListener("click", (e) => {
    const tabBtn = e.target.closest(".tab-btn");
    if (tabBtn) {
      tab = tabBtn.dataset.tab;
      selectedIslandId = null;
      qsa(".tab-btn").forEach(b => b.classList.toggle("active", b.dataset.tab === tab));
      qsa(".tab-panel").forEach(p => p.classList.remove("active"));
      get("tab-" + tab).classList.add("active");
      renderTabs();
    }
  });

  // Leaderboard filters
  document.addEventListener("click", (e) => {
    const filterBtn = e.target.closest(".lb-filter-btn");
    if (filterBtn) {
      lbFilter = filterBtn.dataset.filter;
      renderLeaderboard();
    }
  });

  // Promo apply
  document.addEventListener("click", (e) => {
    if (e.target.id === "btn-apply-promo") applyPromo();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && document.activeElement === get("promo-input")) applyPromo();
  });

  // Grade select placeholder styling
  document.addEventListener("change", (e) => {
    if (e.target.id === "landing-grade") {
      e.target.classList.toggle("placeholder", !e.target.value);
    }
  });

  // Stars for review
  document.addEventListener("click", (e) => {
    const sb = e.target.closest(".star-btn");
    if (sb) { reviewStars = parseInt(sb.dataset.star); renderStars(); }
  });

  // Submit review
  document.addEventListener("click", (e) => {
    if (e.target.id === "btn-submit-review") submitReview();
  });
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
(function init() {
  buildHTML();
  bindEvents();
  // Pre-render tasks panel
  renderTasks();
  renderReviews();
})();
