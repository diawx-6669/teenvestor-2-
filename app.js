// ─── TRANSLATIONS ────────────────────────────────────────────────────────────
const T = {
  ru: {
    appName: "TEENVESTOR",
    tagline: "Учись. Зарабатывай. Побеждай.",
    enterName: "Введи своё имя",
    selectClass: "Выбери класс",
    startJourney: "Начать путь",
    namePlaceholder: "Твоё имя...",
    nav: { tasks: "Задачи", leaderboard: "Рейтинг", profile: "Профиль", shop: "Магазин", reviews: "Отзывы", bank: "Банк" },
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
    mapTitle: "Карта квеста", mapDesc: "Проходи острова по порядку, чтобы открывать новые темы",
    locked: "Заблокировано", available: "Доступно", completed: "Пройдено",
    backToMap: "Вернуться к карте",
    bonusCoins: "бонус монет",
    nextTask: "Следующая задача →",
    allDone: "Все задачи выполнены!",
    // Quest / Detective
    detectiveQuest: "Детектив-квест",
    questMapTitle: "Карта квестов",
    mainQuest: "Главный квест",
    goldenKey: "Золотой Ключ",
    goldenKeyDesc: "Выполни 3 миссии, чтобы получить Золотой Ключ и огромный бонус!",
    mission: "Миссия",
    missionComplete: "Миссия выполнена!",
    goldenKeyUnlocked: "ЗОЛОТОЙ КЛЮЧ ПОЛУЧЕН!",
    goldenKeyBonus: "+500 монет + легендарный скин",
    easterEgg: "Пасхалка найдена!",
    easterEggBonus: "+50 монет бонус!",
    hiddenCode: "Введи секретный шифр",
    hiddenCodePlaceholder: "Шифр...",
    checkCode: "Проверить",
    codeCorrect: "Шифр верный! Бонус получен!",
    codeWrong: "Неверный шифр",
    timeChallenge: "Тайм-Челлендж",
    timeChallengeDesc: "Квест открыт 24 часа! Найди Ключ первым.",
    timeChallengeActive: "АКТИВЕН",
    timeLeft: "Осталось",
    // Titles / RPG
    titleNovice: "Новичок-Сберегатель",
    titleAssistant: "Трейдер-Ассистент",
    titleWolf: "Волк Степной-Стрит",
    titleMagnate: "Финансовый Магнат",
    titleLegend: "Легенда Биржи",
    title: "Титул",
    // Bank
    bankTitle: "Банк & Депозиты",
    bankDesc: "Положи монеты на депозит под 10% годовых. Узнай, как работают сложные проценты!",
    deposit: "Депозит",
    depositBtn: "Открыть депозит",
    withdrawBtn: "Снять деньги",
    depositAmount: "Сумма депозита",
    currentDeposit: "Текущий депозит",
    interest: "Начисленные %",
    totalDeposit: "Итого",
    depositOpen: "Депозит открыт",
    depositClosed: "Депозит закрыт",
    depositRate: "Ставка: 10% годовых",
    depositWithdrawn: "Снято с депозита",
    noDeposit: "Нет активного депозита",
    depositMin: "Минимум 10 монет",
    notEnoughForDeposit: "Недостаточно монет",
    // Inventory
    inventory: "Инвентарь",
    inventoryDesc: "Предметы из кейсов сохраняются здесь",
    emptyInventory: "Инвентарь пуст. Открой кейс!",
    // Team
    teamChallenge: "Командный Челлендж",
    teamGoal: "Цель: 5000 монет за неделю",
    teamProgress: "Прогресс команды",
    teamBonus: "Сундук открыт! +200 монет каждому",
  },
  kz: {
    appName: "TEENVESTOR",
    tagline: "Оқы. Тап. Жең.",
    enterName: "Атыңды жаз",
    selectClass: "Сыныпты таңда",
    startJourney: "Жолды бастау",
    namePlaceholder: "Атың...",
    nav: { tasks: "Тапсырмалар", leaderboard: "Рейтинг", profile: "Профиль", shop: "Дүкен", reviews: "Пікірлер", bank: "Банк" },
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
    mapTitle: "Квест картасы", mapDesc: "Жаңа тақырыптарды ашу үшін аралдарды ретімен өт",
    locked: "Бұғатталған", available: "Қолжетімді", completed: "Аяқталды",
    backToMap: "Картаға оралу",
    bonusCoins: "бонус монета",
    nextTask: "Келесі тапсырма →",
    allDone: "Барлық тапсырма орындалды!",
    detectiveQuest: "Детектив-квест",
    questMapTitle: "Квест картасы",
    mainQuest: "Басты квест",
    goldenKey: "Алтын Кілт",
    goldenKeyDesc: "Алтын Кілт алу үшін 3 миссияны орында!",
    mission: "Миссия",
    missionComplete: "Миссия орындалды!",
    goldenKeyUnlocked: "АЛТЫН КІЛТ АЛЫНДЫ!",
    goldenKeyBonus: "+500 монета + аңыздық скин",
    easterEgg: "Жасырын табылды!",
    easterEggBonus: "+50 монета бонус!",
    hiddenCode: "Жасырын шифрді енгізіңіз",
    hiddenCodePlaceholder: "Шифр...",
    checkCode: "Тексеру",
    codeCorrect: "Шифр дұрыс! Бонус алынды!",
    codeWrong: "Қате шифр",
    timeChallenge: "Уақыт Челлендж",
    timeChallengeDesc: "Квест 24 сағат ашық! Кілтті бірінші тап.",
    timeChallengeActive: "БЕЛСЕНДІ",
    timeLeft: "Қалды",
    titleNovice: "Жаңадан Келген",
    titleAssistant: "Трейдер-Көмекші",
    titleWolf: "Дала Бөрісі",
    titleMagnate: "Қаржы Магнаты",
    titleLegend: "Биржа Аңызы",
    title: "Атақ",
    bankTitle: "Банк & Депозиттер",
    bankDesc: "Жылына 10% депозитке монета сал. Күрделі пайыздар қалай жұмыс істейтінін біл!",
    deposit: "Депозит",
    depositBtn: "Депозит ашу",
    withdrawBtn: "Ақша алу",
    depositAmount: "Депозит сомасы",
    currentDeposit: "Ағымдағы депозит",
    interest: "Есептелген %",
    totalDeposit: "Барлығы",
    depositOpen: "Депозит ашылды",
    depositClosed: "Депозит жабылды",
    depositRate: "Ставка: жылына 10%",
    depositWithdrawn: "Депозиттен алынды",
    noDeposit: "Белсенді депозит жоқ",
    depositMin: "Ең аз 10 монета",
    notEnoughForDeposit: "Монета жетіспейді",
    inventory: "Инвентарь",
    inventoryDesc: "Кейстерден алынған заттар",
    emptyInventory: "Инвентарь бос. Кейс ашыңыз!",
    teamChallenge: "Команда Челлендж",
    teamGoal: "Мақсат: Аптада 5000 монета",
    teamProgress: "Команда прогресі",
    teamBonus: "Сандық ашылды! +200 монета әркімге",
  },
  en: {
    appName: "TEENVESTOR",
    tagline: "Learn. Earn. Win.",
    enterName: "Enter your name",
    selectClass: "Select your grade",
    startJourney: "Begin Journey",
    namePlaceholder: "Your name...",
    nav: { tasks: "Tasks", leaderboard: "Leaderboard", profile: "Profile", shop: "Shop", reviews: "Reviews", bank: "Bank" },
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
    mapTitle: "Quest Map", mapDesc: "Complete islands in order to unlock new topics",
    locked: "Locked", available: "Available", completed: "Completed",
    backToMap: "Back to Map",
    bonusCoins: "bonus coins",
    nextTask: "Next Task →",
    allDone: "All tasks done!",
    detectiveQuest: "Detective Quest",
    questMapTitle: "Quest Map",
    mainQuest: "Main Quest",
    goldenKey: "Golden Key",
    goldenKeyDesc: "Complete 3 missions to earn the Golden Key and a huge bonus!",
    mission: "Mission",
    missionComplete: "Mission Complete!",
    goldenKeyUnlocked: "GOLDEN KEY UNLOCKED!",
    goldenKeyBonus: "+500 coins + legendary skin",
    easterEgg: "Easter Egg Found!",
    easterEggBonus: "+50 coins bonus!",
    hiddenCode: "Enter the secret cipher",
    hiddenCodePlaceholder: "Cipher...",
    checkCode: "Check",
    codeCorrect: "Correct! Bonus received!",
    codeWrong: "Wrong cipher",
    timeChallenge: "Time Challenge",
    timeChallengeDesc: "Quest is open for 24 hours! Find the Key first.",
    timeChallengeActive: "ACTIVE",
    timeLeft: "Left",
    titleNovice: "Saver Novice",
    titleAssistant: "Trader Assistant",
    titleWolf: "Wolf of Steppe Street",
    titleMagnate: "Finance Magnate",
    titleLegend: "Exchange Legend",
    title: "Title",
    bankTitle: "Bank & Deposits",
    bankDesc: "Deposit coins at 10% annual interest. See how compound interest works!",
    deposit: "Deposit",
    depositBtn: "Open Deposit",
    withdrawBtn: "Withdraw",
    depositAmount: "Deposit Amount",
    currentDeposit: "Current Deposit",
    interest: "Interest Earned",
    totalDeposit: "Total",
    depositOpen: "Deposit opened",
    depositClosed: "Deposit closed",
    depositRate: "Rate: 10% annually",
    depositWithdrawn: "Withdrawn from deposit",
    noDeposit: "No active deposit",
    depositMin: "Minimum 10 coins",
    notEnoughForDeposit: "Not enough coins",
    inventory: "Inventory",
    inventoryDesc: "Items from cases are stored here",
    emptyInventory: "Inventory empty. Open a case!",
    teamChallenge: "Team Challenge",
    teamGoal: "Goal: 5000 coins in a week",
    teamProgress: "Team Progress",
    teamBonus: "Chest unlocked! +200 coins each",
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

// Easter egg hidden codes (scattered throughout app — find them in reviews, cases descriptions, etc.)
const EASTER_CODES = {
  "WOLF777":  { coins: 50, xp: 30 },
  "HIDDEN42": { coins: 50, xp: 20 },
  "STEPPE":   { coins: 50, xp: 25 },
};

// ─── QUEST MISSIONS ──────────────────────────────────────────────────────────
const MISSIONS = [
  { id: 1, icon: "", title: { ru: "Мастер Чисел", kz: "Сан Шебері", en: "Number Master" }, desc: { ru: "Реши 3 задачи за одну сессию", kz: "Бір сессияда 3 тапсырма шеш", en: "Solve 3 tasks in one session" }, requirement: "solve3", reward: 80 },
  { id: 2, icon: "", title: { ru: "Без Подсказок", kz: "Кеңессіз", en: "No Hints" }, desc: { ru: "Реши задачу без использования подсказки", kz: "Кеңессіз тапсырма шеш", en: "Solve a task without using a hint" }, requirement: "noHint", reward: 60 },
  { id: 3, icon: "", title: { ru: "Серия x5", kz: "x5 Серия", en: "Streak x5" }, desc: { ru: "Набери серию из 5 правильных ответов", kz: "5 дұрыс жауап серияны жина", en: "Get a streak of 5 correct answers" }, requirement: "streak5", reward: 120 },
];

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
    // ПАСХАЛКА: Код WOLF777 спрятан в этом кейсе. Внимательный читатель найдёт его!
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

// ─── RPG TITLES ──────────────────────────────────────────────────────────────
function getTitle(xpVal) {
  if (xpVal >= 2000) return { key: "titleLegend", color: "#f43f5e", icon: "" };
  if (xpVal >= 1000) return { key: "titleMagnate", color: "#f5a623", icon: "" };
  if (xpVal >= 500)  return { key: "titleWolf",    color: "#b06de3", icon: "" };
  if (xpVal >= 200)  return { key: "titleAssistant",color: "#4c9eff", icon: "" };
  return { key: "titleNovice", color: "#8b9cb5", icon: "" };
}

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
  { name: "Arman", text: "Отличная платформа! Решаю каждый день. Кстати, нашёл шифр STEPPE в одном из кейсов!", stars: 5, grade: 9 },
  { name: "Aisha", text: "Кейсы — отлично! Хочу больше наград. P.S. ищите пасхалки в описаниях кейсов", stars: 5, grade: 10 },
  { name: "Berik", text: "Система кейсов мотивирует решать больше задач! Код HIDDEN42 — секрет для своих", stars: 5, grade: 9 },
];
let activeCaseObj = null;
let selectedIslandId = null;
let questPopupTimer = null;
let audioCtx = null;

// Quest starter state
let questStarted = false;
let keysFound = 0;
const KEYS_REQUIRED = 3;

function sanitizeText(str) {
  try { return String(str).replace(/[\u{1F300}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}]/gu, '').trim(); }
  catch(e) { return String(str); }
}

function setQuestStarted(v) {
  questStarted = !!v;
  if (questStarted) { keysFound = 0; }
  renderTasks();
}

function startAndScroll() {
  // run startGame and only proceed if it succeeded
  const started = startGame();
  if (!started) return;
  setQuestStarted(true);
  setTimeout(() => { document.getElementById('main-app')?.scrollIntoView({ behavior: 'smooth' }); }, 80);
}
// Quest / Mission state
let completedMissions = {};
let sessionSolvedCount = 0;
let sessionNoHintSolved = false;
let goldenKeyEarned = false;
let timeChallengeStart = Date.now();
let usedEasterCodes = [];
let easterStatus = null;
let easterStatusTimer = null;

// Bank state
let depositAmount = 0;
let depositOpenTime = null;
let depositInputVal = "";
let bankMsg = null;
let bankMsgTimer = null;

// Team challenge
let teamCoins = 1247;
const TEAM_GOAL = 5000;

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

function formatTime(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  return `${h}ч ${m}м`;
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
  const titleObj = getTitle(xp);
  get("topbar-logo").textContent = t.appName;
  get("stat-coins").textContent = `TV ${coins}`;
  get("stat-coins").style.color = "#f5c842";
  get("stat-xp").textContent = `${xp} XP`;
  get("stat-xp").style.color = "#a5b4fc";
  get("stat-streak").textContent = `${streak} ${t.streak}`;
  get("stat-streak").style.color = streak >= 3 ? "#f59e0b" : "rgba(255,255,255,0.35)";
  get("stat-level").textContent = `${titleObj.icon} ${t.level} ${lvl}`;
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
  else if (tab === "bank") renderBank();
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
    ${buildDetectiveQuestPanel()}
    ${buildIslandMap()}
  `;
  bindIslandMapEvents();
  bindQuestPanelEvents();
}

function buildDetectiveQuestPanel() {
  const allDone = MISSIONS.every(m => completedMissions[m.id]);
  const timeLeft = Math.max(0, 86400000 - (Date.now() - timeChallengeStart));
  const mCount = MISSIONS.filter(m => completedMissions[m.id]).length;

  const detectiveTitle = sanitizeText(t.detectiveQuest);
  const easterLabel = sanitizeText(t.hiddenCode);
  return `
    <div class="detective-panel">
      <div class="detective-header">
        <div class="detective-title">${detectiveTitle}</div>
        <div class="time-chip ${timeLeft > 0 ? 'active' : ''}">
          ${timeLeft > 0 ? formatTime(timeLeft) : "—"}
        </div>
      </div>

      ${questStarted ? `<div class="quest-keys-counter" id="quest-keys-counter">Ключи: ${keysFound} / ${KEYS_REQUIRED}</div>` : ``}

      <!-- Golden Key progress -->
      <div class="golden-key-card ${goldenKeyEarned ? 'earned' : ''}">
        <div class="gk-icon">${goldenKeyEarned ? "" : ""}</div>
        <div class="gk-body">
          <div class="gk-title">${sanitizeText(t.goldenKey)}</div>
          <div class="gk-desc">${sanitizeText(goldenKeyEarned ? t.goldenKeyBonus : t.goldenKeyDesc)}</div>
          <div class="gk-progress-bar">
            <div class="gk-progress-fill" style="width:${(mCount/MISSIONS.length)*100}%"></div>
          </div>
          <div class="gk-progress-label">${mCount}/${MISSIONS.length} ${sanitizeText(t.mission)}</div>
        </div>
      </div>

      <!-- Missions -->
      <div class="missions-grid">
        ${MISSIONS.map(m => {
          const done = completedMissions[m.id];
          return `
            <div class="mission-card ${done ? 'done' : ''}">
              <div class="mission-icon">${done ? "OK" : ""}</div>
              <div class="mission-body">
                <div class="mission-title">${sanitizeText(m.title[lang])}</div>
                <div class="mission-desc">${sanitizeText(m.desc[lang])}</div>
                <div class="mission-reward">+${m.reward} TV</div>
              </div>
            </div>
          `;
        }).join("")}
      </div>

      <!-- Easter egg -->
      <div class="easter-section">
        <div class="easter-label">${easterLabel}</div>
        <div class="easter-row">
          <input id="easter-input" class="easter-input" placeholder="${t.hiddenCodePlaceholder}" autocomplete="off" />
          <button id="easter-btn" class="easter-btn">${t.checkCode}</button>
        </div>
        <div class="easter-msg" id="easter-msg"></div>
      </div>

      <!-- Team challenge -->
      <div class="team-card">
        <div class="team-title">${sanitizeText(t.teamChallenge)}</div>
        <div class="team-goal">${sanitizeText(t.teamGoal)}</div>
        <div class="team-bar-wrap">
          <div class="team-bar-fill" style="width:${Math.min((teamCoins/TEAM_GOAL)*100,100)}%"></div>
        </div>
        <div class="team-stats">
          <span class="team-coins">${teamCoins.toLocaleString()} / ${TEAM_GOAL.toLocaleString()} TV</span>
          ${teamCoins >= TEAM_GOAL ? `<span class="team-bonus">${sanitizeText(t.teamBonus)}</span>` : ""}
        </div>
      </div>
    </div>
  `;
}

function bindQuestPanelEvents() {
  const eBtn = get("easter-btn");
  const eInput = get("easter-input");
  if (eBtn) eBtn.addEventListener("click", checkEasterCode);
  if (eInput) eInput.addEventListener("keydown", e => { if (e.key === "Enter") checkEasterCode(); });
}

function checkEasterCode() {
  const code = get("easter-input").value.trim().toUpperCase();
  const msgEl = get("easter-msg");
  if (easterStatusTimer) clearTimeout(easterStatusTimer);

  if (!EASTER_CODES[code]) {
    msgEl.textContent = t.codeWrong;
    msgEl.className = "easter-msg error visible";
  } else if (usedEasterCodes.includes(code)) {
    msgEl.textContent = t.promoUsed;
    msgEl.className = "easter-msg error visible";
  } else {
    const reward = EASTER_CODES[code];
    coins += reward.coins;
    xp += reward.xp;
    usedEasterCodes.push(code);
    get("easter-input").value = "";
    msgEl.textContent = `${t.codeCorrect} +${reward.coins} TV`;
    msgEl.className = "easter-msg success visible";
    renderTopBar();
    renderXpBar();
    showQuestPopup(0, reward.coins, sanitizeText(t.easterEgg));
  }
  easterStatusTimer = setTimeout(() => { msgEl.className = "easter-msg"; }, 3500);
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
    if (idx > 0) html += `<div class="${connectorClass}"></div>`;

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

    if (idx < TASKS.length - 1) html += `<div class="${connectorClass}"></div>`;
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

  const taskIdx = TASKS.findIndex(t2 => t2.id === task.id);
  const nextTask = TASKS[taskIdx + 1];
  const hasNext = nextTask && !solvedTasks[nextTask.id];
  const allSolved = TASKS.every(tk => solvedTasks[tk.id]);

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

  // Next button shown after solving
  let nextHtml = "";
  if (isSolved) {
    if (allSolved) {
      nextHtml = `<div class="all-done-banner">🏆 ${t.allDone}</div>`;
    } else if (hasNext) {
      nextHtml = `<button class="next-task-btn" id="next-task-btn" data-next-id="${nextTask.id}">${t.nextTask}</button>`;
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
      ${nextHtml}
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

  const nextBtn = get("next-task-btn");
  if (nextBtn) nextBtn.addEventListener("click", () => {
    const nextId = parseInt(nextBtn.dataset.nextId);
    selectedIslandId = nextId;
    renderTasks();
  });
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
    sessionSolvedCount++;
    teamCoins += task.coins;

    if (!shownHints[taskId]) sessionNoHintSolved = true;

    // Check missions
    checkMissions(newStreak);

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

function checkMissions(currentStreak) {
  let anyNew = false;

  // Mission 1: solve 3 in session
  if (!completedMissions[1] && sessionSolvedCount >= 3) {
    completedMissions[1] = true;
    coins += MISSIONS[0].reward;
    keysFound = Math.min(KEYS_REQUIRED, keysFound + 1);
    anyNew = true;
    setTimeout(() => showQuestPopup(0, MISSIONS[0].reward, sanitizeText(MISSIONS[0].title[lang])), 500);
  }

  // Mission 2: solve without hint
  if (!completedMissions[2] && sessionNoHintSolved) {
    completedMissions[2] = true;
    coins += MISSIONS[1].reward;
    keysFound = Math.min(KEYS_REQUIRED, keysFound + 1);
    anyNew = true;
    setTimeout(() => showQuestPopup(0, MISSIONS[1].reward, sanitizeText(MISSIONS[1].title[lang])), 800);
  }

  // Mission 3: streak 5
  if (!completedMissions[3] && currentStreak >= 5) {
    completedMissions[3] = true;
    coins += MISSIONS[2].reward;
    keysFound = Math.min(KEYS_REQUIRED, keysFound + 1);
    anyNew = true;
    setTimeout(() => showQuestPopup(0, MISSIONS[2].reward, sanitizeText(MISSIONS[2].title[lang])), 1100);
  }

  // Golden key
  if (!goldenKeyEarned && MISSIONS.every(m => completedMissions[m.id])) {
    goldenKeyEarned = true;
    coins += 500;
    xp += 200;
    earnedRewards.push({ name: { ru: "Золотой Ключ", kz: "Алтын Кілт", en: "Golden Key" }, rarity: "legendary", type: "badge", value: "goldenkey" });
    keysFound = KEYS_REQUIRED;
    setTimeout(() => showQuestPopup(0, 500, sanitizeText(t.goldenKeyUnlocked)), 1500);
  }

  if (anyNew) { renderTopBar(); renderXpBar(); }
  // update tasks panel to reflect new quest/keys state
  renderTasks();
}

function useHint(taskId) {
  if (coins < 5) return;
  coins -= 5;
  shownHints[taskId] = true;
  renderTopBar();
  renderTasks();
}

function showQuestPopup(streakVal, bonus, customTitle) {
  const popup = get("quest-popup");
  get("quest-popup-title").textContent = customTitle || `${t.challengeBonus} x${streakVal}`;
  get("quest-popup-sub").textContent = `+${bonus} TV`;
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

  const usedWrap = get("used-promos");
  usedWrap.innerHTML = usedPromos.map(c => `<div class="promo-tag">${c}</div>`).join("");

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
          ${c.rewards.map(rw => `
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

  // Inventory
  renderInventory();
}

function renderInventory() {
  const inv = get("inventory-list");
  if (!inv) return;
  if (earnedRewards.length === 0) {
    inv.innerHTML = `<div class="empty-inv">${t.emptyInventory}</div>`;
    return;
  }
  inv.innerHTML = earnedRewards.map(r => `
    <div class="inv-item" style="border-color:${RARITY_COLOR[r.rarity]}30">
      <div class="inv-icon" style="background:${RARITY_COLOR[r.rarity]}18; color:${RARITY_COLOR[r.rarity]}">${typeIcon(r.type)}</div>
      <div class="inv-name" style="color:${RARITY_COLOR[r.rarity]}">${r.name[lang]}</div>
      <div class="inv-rarity">${r.rarity}</div>
    </div>
  `).join("");
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
    const titleObj = getTitle(p.xp);
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
  const titleObj = getTitle(xp);

  get("profile-avatar").textContent = (playerName || "?")[0].toUpperCase();
  get("profile-avatar").style.background = `linear-gradient(135deg, ${titleObj.color}, ${titleObj.color}88)`;
  get("profile-name").textContent = playerName;

  const titleText = t[titleObj.key] || titleObj.key;
  get("profile-sub").innerHTML = `${titleObj.icon} <span style="color:${titleObj.color}">${titleText}</span> &nbsp;·&nbsp; ${t.class} ${playerGrade} &nbsp;·&nbsp; ${t.level} ${lvl}`;

  get("xp-progress-fill").style.width = pct + "%";
  get("xp-label-left").textContent = "XP Progress";
  get("xp-label-right").textContent = `${pct}/100 to ${t.level} ${lvl + 1}`;

  // Title progression
  const titles = [
    { key: "titleNovice", xpNeeded: 0, icon: "", color: "#8b9cb5" },
    { key: "titleAssistant", xpNeeded: 200, icon: "", color: "#4c9eff" },
    { key: "titleWolf", xpNeeded: 500, icon: "", color: "#b06de3" },
    { key: "titleMagnate", xpNeeded: 1000, icon: "", color: "#f5a623" },
    { key: "titleLegend", xpNeeded: 2000, icon: "", color: "#f43f5e" },
  ];

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

  // Title progression display
  const titlesEl = get("profile-titles");
  if (titlesEl) {
    titlesEl.innerHTML = `
      <div class="subsection-label">${t.title} — RPG</div>
      <div class="titles-row">
        ${titles.map(ti => {
          const isActive = ti.key === titleObj.key;
          const isUnlocked = xp >= ti.xpNeeded;
          return `<div class="title-chip ${isActive ? 'active' : ''} ${isUnlocked ? 'unlocked' : 'locked-title'}" style="${isActive ? `border-color:${ti.color}; color:${ti.color}` : ''}">
            <span>${ti.icon}</span>
            <span>${t[ti.key]}</span>
            ${!isUnlocked ? `<span class="title-xp">${ti.xpNeeded} XP</span>` : ''}
          </div>`;
        }).join("")}
      </div>
    `;
  }

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

// ─── BANK ─────────────────────────────────────────────────────────────────────
function renderBank() {
  const panel = get("tab-bank");
  if (!panel) return;

  const interestRate = 0.10 / (365 * 24 * 3600 * 1000); // per ms
  let interestEarned = 0;
  if (depositOpenTime !== null && depositAmount > 0) {
    const elapsed = Date.now() - depositOpenTime;
    interestEarned = Math.floor(depositAmount * interestRate * elapsed);
  }
  const totalWithInterest = depositAmount + interestEarned;

  const bankMsgHtml = bankMsg
    ? `<div class="bank-msg ${bankMsg.type}">${bankMsg.text}</div>`
    : `<div class="bank-msg"></div>`;

  panel.innerHTML = `
    <div class="section-label">${t.bankTitle}</div>
    <div class="bank-desc">${t.bankDesc}</div>

    <div class="bank-card">
      <div class="bank-rate-badge">📈 ${t.depositRate}</div>

      ${depositOpenTime !== null ? `
        <div class="deposit-active">
          <div class="deposit-stat-row">
            <div class="deposit-stat">
              <div class="deposit-stat-val">${depositAmount} TV</div>
              <div class="deposit-stat-lbl">${t.currentDeposit}</div>
            </div>
            <div class="deposit-stat">
              <div class="deposit-stat-val" style="color:var(--green)">+${interestEarned} TV</div>
              <div class="deposit-stat-lbl">${t.interest}</div>
            </div>
            <div class="deposit-stat">
              <div class="deposit-stat-val" style="color:var(--gold)">${totalWithInterest} TV</div>
              <div class="deposit-stat-lbl">${t.totalDeposit}</div>
            </div>
          </div>
          <div class="interest-visual">
            <div class="interest-bar" style="width:${Math.min((interestEarned/Math.max(depositAmount,1))*1000,100)}%"></div>
          </div>
          <div class="compound-explanation">
            Каждую секунду твои деньги растут! За год на ${depositAmount} TV ты получишь ~${Math.round(depositAmount * 0.1)} TV процентов.
          </div>
          <button class="bank-withdraw-btn" id="bank-withdraw-btn">${t.withdrawBtn} (${totalWithInterest} TV)</button>
        </div>
      ` : `
        <div class="deposit-form">
          <div class="bank-field-label">${t.depositAmount}</div>
          <div class="bank-input-row">
            <input id="deposit-input" class="bank-input" type="number" min="10" max="${coins}" placeholder="10 — ${coins}" value="${depositInputVal}" />
            <button id="bank-deposit-btn" class="bank-deposit-btn">${t.depositBtn}</button>
          </div>
          <div class="bank-balance">Баланс: <span style="color:var(--gold)">${coins} TV</span></div>
          <div class="bank-quick-btns">
            ${[10, 25, 50, Math.max(coins, 10)].map(v => `<button class="bank-quick-btn" data-val="${Math.min(v, coins)}">${Math.min(v, coins)} TV</button>`).join("")}
          </div>
        </div>
        <div class="noDeposit-label">${t.noDeposit}</div>
      `}

      ${bankMsgHtml}
    </div>

    <!-- How interest works -->
      <div class="bank-edu-card">
        <div class="bank-edu-title">Как работают сложные проценты?</div>
        <div class="bank-edu-text">
          Представь: ты кладёшь <strong>100 TV</strong> под 10% годовых.<br/>
          Через год: 110 TV. Через 2 года: 121 TV. Через 10 лет: <strong>259 TV!</strong><br/>
          Деньги работают на тебя — это и есть сила сложных процентов
        </div>
      <div class="compound-table">
        ${[1,2,5,10].map(yr => {
          const val = Math.round(100 * Math.pow(1.1, yr));
          return `<div class="ct-row"><span>${yr} ${yr === 1 ? "год" : yr < 5 ? "года" : "лет"}</span><span style="color:var(--green)">+${val - 100} TV</span><span style="color:var(--gold)">${val} TV</span></div>`;
        }).join("")}
      </div>
    </div>
  `;

  // Bind events
  const depBtn = get("bank-deposit-btn");
  const withBtn = get("bank-withdraw-btn");

  if (depBtn) depBtn.addEventListener("click", openDeposit);
  if (withBtn) withBtn.addEventListener("click", withdrawDeposit);

  qsa(".bank-quick-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const v = parseInt(btn.dataset.val);
      const inp = get("deposit-input");
      if (inp) inp.value = v;
      depositInputVal = v;
    });
  });

  const depInp = get("deposit-input");
  if (depInp) depInp.addEventListener("input", (e) => { depositInputVal = e.target.value; });
}

function openDeposit() {
  const val = parseInt(get("deposit-input").value);
  if (!val || val < 10) {
    setBankMsg(t.depositMin, "error");
    return;
  }
  if (val > coins) {
    setBankMsg(t.notEnoughForDeposit, "error");
    return;
  }
  coins -= val;
  depositAmount = val;
  depositOpenTime = Date.now();
  depositInputVal = "";
  setBankMsg(t.depositOpen + ` — ${val} TV`, "success");
  renderTopBar();
  renderBank();
}

function withdrawDeposit() {
  const interestRate = 0.10 / (365 * 24 * 3600 * 1000);
  const elapsed = Date.now() - depositOpenTime;
  const interest = Math.floor(depositAmount * interestRate * elapsed);
  const total = depositAmount + interest;
  coins += total;
  depositAmount = 0;
  depositOpenTime = null;
  setBankMsg(`${t.depositWithdrawn}: +${total} TV`, "success");
  renderTopBar();
  renderBank();
}

function setBankMsg(text, type) {
  bankMsg = { text, type };
  if (bankMsgTimer) clearTimeout(bankMsgTimer);
  bankMsgTimer = setTimeout(() => { bankMsg = null; renderBank(); }, 4000);
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
    return false;
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
  return true;
}

function setLang(l) {
  lang = l;
  t = T[lang];

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
          <button id="btn-start" class="btn-primary" onclick="startAndScroll()">${t.startJourney}</button>
        </div>
      </div>
    </div>

    <!-- MAIN -->
    <div id="screen-main" class="screen">
      <div id="main-app">

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
        ${["tasks","shop","leaderboard","profile","reviews","bank"].map(key => `
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
          <!-- Inventory -->
          <div class="inventory-card">
            <div class="subsection-label">${t.inventory}</div>
            <div class="inventory-desc">${t.inventoryDesc}</div>
            <div class="inventory-list" id="inventory-list"></div>
          </div>
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
          <div class="profile-titles-card" id="profile-titles"></div>
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

        <!-- BANK -->
        <div id="tab-bank" class="tab-panel"></div>

      </div><!-- /content -->
        </div><!-- /main-app -->
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
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && screen === "landing") startAndScroll();
  });

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

  document.addEventListener("click", (e) => {
    const filterBtn = e.target.closest(".lb-filter-btn");
    if (filterBtn) {
      lbFilter = filterBtn.dataset.filter;
      renderLeaderboard();
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target.id === "btn-apply-promo") applyPromo();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && document.activeElement === get("promo-input")) applyPromo();
  });

  document.addEventListener("change", (e) => {
    if (e.target.id === "landing-grade") {
      e.target.classList.toggle("placeholder", !e.target.value);
    }
  });

  document.addEventListener("click", (e) => {
    const sb = e.target.closest(".star-btn");
    if (sb) { reviewStars = parseInt(sb.dataset.star); renderStars(); }
  });

  document.addEventListener("click", (e) => {
    if (e.target.id === "btn-submit-review") submitReview();
  });
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
(function init() {
  buildHTML();
  bindEvents();
  renderTasks();
  renderReviews();
})();
