// ═══════════════════════════════════════════════════════════════════════════════
// TEENVESTOR — SUPABASE MODULE
// Подключи этот файл в index.html ПОСЛЕ CDN Supabase и ПЕРЕД app.js:
//   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
//   <script src="supabase-module.js"></script>
//   <script src="app.js"></script>
// ═══════════════════════════════════════════════════════════════════════════════

// ─── 1. ИНИЦИАЛИЗАЦИЯ КЛИЕНТА ─────────────────────────────────────────────────
const SUPABASE_URL  = "https://ygxwfrnlywrvbjzipdvi.supabase.co";
const SUPABASE_ANON = "sb_publishable_FeqvfrHIDU3TfizaUJQFoA_DZFoX-6d";

const _sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

// ─── 2. КАТЕГОРИИ ЛИДЕРБОРДА ──────────────────────────────────────────────────
// Соответствие фильтров app.js → названия категорий в таблице leaderboards
const LB_CATEGORIES = {
  xp:      "xp",
  coins:   "coins",
  rewards: "rewards",
  solved:  "solved",
};

// ─── 3. РЕГИСТРАЦИЯ (Sign Up) ─────────────────────────────────────────────────
/**
 * Регистрирует нового пользователя в Supabase Auth.
 * Никнейм передаётся в options.data.username — триггер БД создаст запись в profiles.
 *
 * @param {string} email
 * @param {string} password
 * @param {string} username  — никнейм игрока
 * @returns {{ user, error }}
 */
async function sbSignUp(email, password, username) {
  const { data, error } = await _sb.auth.signUp({
    email,
    password,
    options: {
      data: { username },
    },
  });

  if (error) {
    console.error("[Supabase] Sign Up error:", error.message);
    return { user: null, error };
  }

  console.log("[Supabase] Sign Up success:", data.user?.id);
  return { user: data.user, error: null };
}

// ─── 4. ВХОД (Sign In) ────────────────────────────────────────────────────────
/**
 * Авторизует существующего пользователя.
 *
 * @param {string} email
 * @param {string} password
 * @returns {{ user, error }}
 */
async function sbSignIn(email, password) {
  const { data, error } = await _sb.auth.signInWithPassword({ email, password });

  if (error) {
    console.error("[Supabase] Sign In error:", error.message);
    return { user: null, error };
  }

  console.log("[Supabase] Sign In success:", data.user?.id);
  return { user: data.user, error: null };
}

// ─── 5. ВЫХОД (Sign Out) ──────────────────────────────────────────────────────
async function sbSignOut() {
  const { error } = await _sb.auth.signOut();
  if (error) console.error("[Supabase] Sign Out error:", error.message);
}

// ─── 6. ПОЛУЧИТЬ ТЕКУЩЕГО ПОЛЬЗОВАТЕЛЯ ───────────────────────────────────────
/**
 * Возвращает текущего авторизованного пользователя или null.
 * @returns {User|null}
 */
async function sbGetCurrentUser() {
  const { data: { user } } = await _sb.auth.getUser();
  return user ?? null;
}

// ─── 7. ОБНОВЛЕНИЕ РЕКОРДА В ЛИДЕРБОРДЕ ──────────────────────────────────────
/**
 * Upsert-записи в таблицу leaderboards.
 * Если запись для этого user_id + category уже есть — обновляет score,
 * если нет — создаёт новую.
 *
 * Структура таблицы leaderboards (минимум):
 *   id          uuid  PK default gen_random_uuid()
 *   user_id     uuid  FK → auth.users(id)
 *   category    text  ('xp' | 'coins' | 'rewards' | 'solved')
 *   score       int
 *   updated_at  timestamptz default now()
 *
 * На колонки (user_id, category) должен стоять UNIQUE constraint,
 * чтобы upsert работал через onConflict.
 *
 * @param {string} category  — одна из: 'xp', 'coins', 'rewards', 'solved'
 * @param {number} score     — текущее значение очков
 * @returns {{ data, error }}
 */
async function sbUpdateScore(category, score) {
  const user = await sbGetCurrentUser();
  if (!user) {
    console.warn("[Supabase] sbUpdateScore: пользователь не авторизован");
    return { data: null, error: new Error("Not authenticated") };
  }

  const { data, error } = await _sb
    .from("leaderboards")
    .upsert(
      {
        user_id:    user.id,
        category,
        score,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id,category" }   // требует UNIQUE(user_id, category)
    );

  if (error) {
    console.error(`[Supabase] sbUpdateScore(${category}) error:`, error.message);
  }

  return { data, error };
}

// ─── 8. ЗАГРУЗИТЬ ТОП-10 ЛИДЕРБОРДА ──────────────────────────────────────────
/**
 * Запрашивает топ-10 записей по категории из таблицы leaderboards,
 * джойнит никнеймы из таблицы profiles и рендерит список в #leaderboard-list.
 *
 * Структура таблицы profiles (минимум):
 *   id        uuid PK FK → auth.users(id)
 *   username  text
 *
 * @param {string} category  — одна из: 'xp', 'coins', 'rewards', 'solved'
 */
async function sbLoadLeaderboard(category) {
  const listEl = document.getElementById("leaderboard-list");
  if (listEl) listEl.innerHTML = `<div class="lb-loading">Загрузка…</div>`;

  const { data, error } = await _sb
    .from("leaderboards")
    .select("score, profiles(username)")
    .eq("category", category)
    .order("score", { ascending: false })
    .limit(10);

  if (error) {
    console.error("[Supabase] sbLoadLeaderboard error:", error.message);
    if (listEl) listEl.innerHTML = `<div class="lb-error">Ошибка загрузки рейтинга</div>`;
    return;
  }

  _renderLeaderboardList(data, category);
}

// ─── 9. РЕНДЕР СПИСКА ЛИДЕРБОРДА ─────────────────────────────────────────────
/**
 * Внутренняя функция — рендерит топ-10 в блок #leaderboard-list.
 * Медали: 1 место — золото, 2 — серебро, 3 — бронза.
 */
function _renderLeaderboardList(rows, category) {
  const listEl = document.getElementById("leaderboard-list");
  if (!listEl) return;

  if (!rows || rows.length === 0) {
    listEl.innerHTML = `<div class="lb-empty">Рейтинг пока пуст. Будь первым!</div>`;
    return;
  }

  const medalColors = ["#f5c842", "#b0b8c4", "#cd7f32"];
  const categoryLabel = {
    xp:      "XP",
    coins:   "TV монеты",
    rewards: "Награды",
    solved:  "Решено задач",
  }[category] ?? category;

  const items = rows.map((row, idx) => {
    const username = row.profiles?.username ?? "Аноним";
    const score    = row.score ?? 0;
    const rank     = idx + 1;
    const medalColor = medalColors[idx] ?? "rgba(255,255,255,0.35)";

    return `
      <div class="lb-item ${idx === 0 ? "lb-item--first" : ""}">
        <div class="lb-rank" style="color:${medalColor}">${rank}</div>
        <div class="lb-username">${_escapeHtml(username)}</div>
        <div class="lb-score" style="color:${medalColor}">${score.toLocaleString()}</div>
      </div>
    `;
  }).join("");

  listEl.innerHTML = `
    <div class="lb-category-label">${categoryLabel}</div>
    <div class="lb-items">${items}</div>
  `;
}

/** Экранирует HTML-спецсимволы в никнеймах */
function _escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ─── 10. СЛУШАТЕЛЬ ИЗМЕНЕНИЙ АВТОРИЗАЦИИ ─────────────────────────────────────
/**
 * Вызывается автоматически при входе / выходе.
 * Синхронизирует имя игрока с никнеймом из Supabase.
 */
_sb.auth.onAuthStateChange(async (event, session) => {
  if (event === "SIGNED_IN" && session?.user) {
    const meta = session.user.user_metadata;
    if (meta?.username && typeof playerName !== "undefined") {
      playerName = meta.username;
    }
    console.log("[Supabase] Auth state: SIGNED_IN →", session.user.id);
  }

  if (event === "SIGNED_OUT") {
    console.log("[Supabase] Auth state: SIGNED_OUT");
  }
});

// ─── 11. ПРИВЯЗКА ФОРМ (Sign Up / Sign In) ────────────────────────────────────
/**
 * Вызови эту функцию ПОСЛЕ того, как buildHTML() отрисует формы в DOM.
 * Она вешает обработчики на #register-form и #login-form.
 *
 * Ожидаемая структура форм в HTML:
 *
 * <!-- Форма регистрации -->
 * <form id="register-form">
 *   <input id="reg-username" type="text"     placeholder="Никнейм" />
 *   <input id="reg-email"    type="email"    placeholder="Email" />
 *   <input id="reg-password" type="password" placeholder="Пароль" />
 *   <button type="submit">Зарегистрироваться</button>
 *   <div id="reg-msg"></div>
 * </form>
 *
 * <!-- Форма входа -->
 * <form id="login-form">
 *   <input id="login-email"    type="email"    placeholder="Email" />
 *   <input id="login-password" type="password" placeholder="Пароль" />
 *   <button type="submit">Войти</button>
 *   <div id="login-msg"></div>
 * </form>
 */
function sbBindAuthForms() {
  const registerForm = document.getElementById("register-form");
  const loginForm    = document.getElementById("login-form");

  // — Регистрация —
  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const username = document.getElementById("reg-username")?.value.trim();
      const email    = document.getElementById("reg-email")?.value.trim();
      const password = document.getElementById("reg-password")?.value;
      const msgEl    = document.getElementById("reg-msg");

      if (!username || !email || !password) {
        if (msgEl) msgEl.textContent = "Заполни все поля";
        return;
      }

      if (msgEl) msgEl.textContent = "Регистрируем…";

      const { user, error } = await sbSignUp(email, password, username);

      if (error) {
        if (msgEl) msgEl.textContent = `Ошибка: ${error.message}`;
        return;
      }

      // Успешная регистрация — обновляем имя игрока и запускаем игру
      if (user) {
        playerName = username;
        if (msgEl) msgEl.textContent = "Готово! Проверь почту для подтверждения.";
      }
    });
  }

  // — Вход —
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email    = document.getElementById("login-email")?.value.trim();
      const password = document.getElementById("login-password")?.value;
      const msgEl    = document.getElementById("login-msg");

      if (!email || !password) {
        if (msgEl) msgEl.textContent = "Введи email и пароль";
        return;
      }

      if (msgEl) msgEl.textContent = "Входим…";

      const { user, error } = await sbSignIn(email, password);

      if (error) {
        if (msgEl) msgEl.textContent = `Ошибка: ${error.message}`;
        return;
      }

      if (user) {
        // Подтягиваем никнейм из metadata
        const username = user.user_metadata?.username ?? email.split("@")[0];
        playerName = username;
        if (msgEl) msgEl.textContent = `Добро пожаловать, ${username}!`;
      }
    });
  }
}

// ─── 12. АВТОСИНХРОНИЗАЦИЯ ОЧКОВ ──────────────────────────────────────────────
/**
 * Патчит handleAnswer() из app.js — после каждого правильного ответа
 * автоматически пушит все 4 метрики в Supabase.
 *
 * Вызови sbPatchHandleAnswer() один раз после загрузки app.js.
 * Требует, чтобы переменные xp, coins, earnedRewards, solvedTasks
 * были глобальными (они таковы в app.js).
 */
function sbPatchHandleAnswer() {
  if (typeof handleAnswer !== "function") {
    console.warn("[Supabase] handleAnswer не найдена — патч пропущен");
    return;
  }

  const _originalHandleAnswer = handleAnswer;

  // Переопределяем глобальную функцию
  window.handleAnswer = async function(taskId, option) {
    _originalHandleAnswer(taskId, option);

    // Синхронизируем только если ответ был правильным
    const task = (typeof TASKS !== "undefined")
      ? TASKS.find(tk => tk.id === taskId)
      : null;

    if (task && option === task.answer) {
      // Небольшая задержка, чтобы app.js успел обновить переменные
      setTimeout(async () => {
        await Promise.all([
          sbUpdateScore("xp",      typeof xp            !== "undefined" ? xp            : 0),
          sbUpdateScore("coins",   typeof coins         !== "undefined" ? coins         : 0),
          sbUpdateScore("rewards", typeof earnedRewards !== "undefined" ? earnedRewards.length : 0),
          sbUpdateScore("solved",  typeof solvedTasks   !== "undefined" ? Object.keys(solvedTasks).length : 0),
        ]);
      }, 200);
    }
  };

  console.log("[Supabase] handleAnswer успешно запатчен");
}

// ─── 13. ПУБЛИЧНОЕ API ────────────────────────────────────────────────────────
// Все функции уже глобальные (через window), но для удобства явно экспортируем:
window.sbSignUp          = sbSignUp;
window.sbSignIn          = sbSignIn;
window.sbSignOut         = sbSignOut;
window.sbGetCurrentUser  = sbGetCurrentUser;
window.sbUpdateScore     = sbUpdateScore;
window.sbLoadLeaderboard = sbLoadLeaderboard;
window.sbBindAuthForms   = sbBindAuthForms;
window.sbPatchHandleAnswer = sbPatchHandleAnswer;

console.log("[Supabase] TEENVESTOR module loaded ✓");
