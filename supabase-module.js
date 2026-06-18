// ═══════════════════════════════════════════════════════════════════════════════
// TEENVESTOR — SUPABASE MODULE  (с экраном авторизации)
// Порядок подключения в index.html:
//   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
//   <script src="supabase-module.js"></script>
//   <script src="app.js"></script>
// ═══════════════════════════════════════════════════════════════════════════════

// ─── 1. КЛИЕНТ ────────────────────────────────────────────────────────────────
const SUPABASE_URL  = "https://ygxwfrnlywrvbjzipdvi.supabase.co";
const SUPABASE_ANON = "sb_publishable_FeqvfrHIDU3TfizaUJQFoA_DZFoX-6d";
const _sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

// ─── 2. ЭКРАН АВТОРИЗАЦИИ (вставляется до лендинга) ──────────────────────────
function _injectAuthScreen() {
  const style = document.createElement("style");
  style.textContent = `
    /* ── Auth Screen ── */
    #screen-auth {
      display: flex;
      min-height: 100vh;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 24px;
      position: relative;
      overflow: hidden;
      background: var(--bg, #07090f);
    }
    #screen-auth .auth-glow {
      position: absolute; top: 20%; left: 50%;
      transform: translateX(-50%);
      width: 600px; height: 300px;
      background: radial-gradient(ellipse, rgba(108,110,245,0.08) 0%, transparent 70%);
      pointer-events: none; filter: blur(14px);
    }
    #screen-auth .auth-inner {
      width: 100%; max-width: 420px;
      animation: fadeUp 0.6s ease forwards;
    }
    #screen-auth .auth-logo {
      text-align: center; margin-bottom: 36px;
    }
    #screen-auth .auth-logo-text {
      font-size: 42px; font-weight: 900; letter-spacing: -2px;
      background: linear-gradient(135deg, #e8eaf0 0%, #a5b4fc 50%, #f5c842 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text; line-height: 1.1; margin-bottom: 8px;
    }
    #screen-auth .auth-tagline {
      font-size: 11px; letter-spacing: 4px;
      text-transform: uppercase; color: rgba(255,255,255,0.35);
    }
    /* Tabs */
    .auth-tabs {
      display: flex; gap: 0;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 14px 14px 0 0;
      overflow: hidden;
    }
    .auth-tab-btn {
      flex: 1; padding: 14px;
      background: transparent; border: none;
      color: rgba(255,255,255,0.35);
      font-size: 13px; font-weight: 700;
      letter-spacing: 0.8px; text-transform: uppercase;
      cursor: pointer; transition: all 0.2s;
    }
    .auth-tab-btn.active {
      background: rgba(108,110,245,0.15);
      color: #a5b4fc;
      border-bottom: 2px solid #6c6ef5;
    }
    /* Card */
    .auth-card {
      background: #0e1117;
      border: 1px solid rgba(255,255,255,0.06);
      border-top: none;
      border-radius: 0 0 20px 20px;
      padding: 32px;
    }
    .auth-form { display: flex; flex-direction: column; gap: 0; }
    .auth-field-label {
      font-size: 11px; font-weight: 600;
      color: rgba(255,255,255,0.35);
      letter-spacing: 1px; text-transform: uppercase;
      margin-bottom: 8px;
    }
    .auth-input {
      width: 100%; padding: 13px 16px;
      border-radius: 10px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.06);
      color: #e8eaf0; font-size: 15px;
      margin-bottom: 16px; outline: none;
      transition: border 0.15s;
      font-family: inherit;
    }
    .auth-input:focus { border-color: rgba(108,110,245,0.5); }
    .auth-input.err   { border-color: #f43f5e; }
    /* Grade select — same style as auth-input */
    .auth-select {
      width: 100%; padding: 13px 16px;
      border-radius: 10px;
      background: rgba(15,15,25,0.95);
      border: 1px solid rgba(255,255,255,0.06);
      color: #e8eaf0; font-size: 15px;
      margin-bottom: 16px; outline: none;
      appearance: none; -webkit-appearance: none;
      cursor: pointer; font-family: inherit;
    }
    .auth-select.placeholder { color: rgba(255,255,255,0.35); }
    /* Message */
    .auth-msg {
      min-height: 20px; font-size: 12px;
      text-align: center; margin-bottom: 14px;
      border-radius: 8px; padding: 0 8px;
      transition: all 0.2s;
    }
    .auth-msg.error   { color: #f43f5e; }
    .auth-msg.success { color: #3ddc84; }
    .auth-msg.info    { color: #a5b4fc; }
    /* Submit button — reuses .btn-primary look */
    .auth-btn {
      width: 100%; padding: 15px;
      border-radius: 12px;
      background: linear-gradient(90deg, #7b61ff 0%, #5ad0ff 50%, #7b61ff 100%);
      border: none; color: #071018;
      font-size: 15px; font-weight: 800;
      letter-spacing: 0.6px; cursor: pointer;
      box-shadow: 0 8px 30px rgba(91,72,255,0.18);
      transition: transform 220ms cubic-bezier(.2,.9,.2,1), box-shadow 220ms;
      font-family: inherit;
    }
    .auth-btn:hover   { transform: translateY(-3px); box-shadow: 0 14px 36px rgba(91,72,255,0.28); }
    .auth-btn:active  { transform: translateY(-1px); }
    .auth-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
    /* Divider */
    .auth-divider {
      text-align: center; font-size: 12px;
      color: rgba(255,255,255,0.2);
      margin: 18px 0 0;
    }
    .auth-divider span {
      cursor: pointer; color: #a5b4fc;
      text-decoration: underline;
    }
    /* Password toggle */
    .auth-pw-wrap { position: relative; }
    .auth-pw-wrap .auth-input { padding-right: 46px; }
    .auth-pw-toggle {
      position: absolute; right: 14px; top: 50%;
      transform: translateY(-60%);
      background: none; border: none;
      color: rgba(255,255,255,0.3);
      cursor: pointer; font-size: 16px;
      padding: 4px; line-height: 1;
    }
    .auth-pw-toggle:hover { color: rgba(255,255,255,0.7); }
    /* Spinner */
    .auth-spinner {
      display: inline-block; width: 14px; height: 14px;
      border: 2px solid rgba(7,16,24,0.4);
      border-top-color: #071018;
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
      vertical-align: middle; margin-right: 6px;
    }
  `;
  document.head.appendChild(style);

  const div = document.createElement("div");
  div.id = "screen-auth";
  div.innerHTML = `
    <div class="auth-glow"></div>
    <div class="auth-inner">
      <div class="auth-logo">
        <div class="auth-logo-text">TEENVESTOR</div>
        <div class="auth-tagline" id="auth-tagline">Учись. Зарабатывай. Побеждай.</div>
      </div>

      <div class="auth-tabs">
        <button class="auth-tab-btn active" id="auth-tab-login"  onclick="sbShowTab('login')">Войти</button>
        <button class="auth-tab-btn"        id="auth-tab-register" onclick="sbShowTab('register')">Регистрация</button>
      </div>

      <div class="auth-card">

        <!-- LOGIN FORM -->
        <div id="auth-form-login">
          <div class="auth-form">
            <div class="auth-field-label">Email</div>
            <input id="login-email" class="auth-input" type="email" placeholder="your@email.com" autocomplete="email" />

            <div class="auth-field-label">Пароль</div>
            <div class="auth-pw-wrap">
              <input id="login-password" class="auth-input" type="password" placeholder="••••••••" autocomplete="current-password" />
              <button class="auth-pw-toggle" onclick="sbTogglePw('login-password', this)" tabindex="-1">👁</button>
            </div>

            <div class="auth-msg" id="login-msg"></div>
            <button class="auth-btn" id="login-btn" onclick="sbHandleLogin()">Войти</button>
          </div>
          <div class="auth-divider">Нет аккаунта? <span onclick="sbShowTab('register')">Зарегистрируйся</span></div>
        </div>

        <!-- REGISTER FORM -->
        <div id="auth-form-register" style="display:none">
          <div class="auth-form">
            <div class="auth-field-label">Никнейм</div>
            <input id="reg-username" class="auth-input" type="text" placeholder="Твой игровой ник" autocomplete="off" maxlength="32" />

            <div class="auth-field-label">Класс</div>
            <select id="reg-grade" class="auth-select placeholder">
              <option value="">Выбери класс</option>
              ${[5,6,7,8,9,10,11].map(g => `<option value="${g}">${g} класс</option>`).join("")}
            </select>

            <div class="auth-field-label">Email</div>
            <input id="reg-email" class="auth-input" type="email" placeholder="your@email.com" autocomplete="email" />

            <div class="auth-field-label">Пароль</div>
            <div class="auth-pw-wrap">
              <input id="reg-password" class="auth-input" type="password" placeholder="Минимум 6 символов" autocomplete="new-password" />
              <button class="auth-pw-toggle" onclick="sbTogglePw('reg-password', this)" tabindex="-1">👁</button>
            </div>

            <div class="auth-msg" id="reg-msg"></div>
            <button class="auth-btn" id="reg-btn" onclick="sbHandleRegister()">Создать аккаунт</button>
          </div>
          <div class="auth-divider">Уже есть аккаунт? <span onclick="sbShowTab('login')">Войти</span></div>
        </div>

      </div><!-- /auth-card -->
    </div><!-- /auth-inner -->
  `;

  // Вставляем ПЕРЕД #app
  document.body.insertBefore(div, document.getElementById("app"));
}

// ─── 3. ПЕРЕКЛЮЧЕНИЕ ВКЛАДОК ──────────────────────────────────────────────────
function sbShowTab(tab) {
  const isLogin = tab === "login";
  document.getElementById("auth-form-login").style.display    = isLogin ? "block" : "none";
  document.getElementById("auth-form-register").style.display = isLogin ? "none"  : "block";
  document.getElementById("auth-tab-login").classList.toggle("active",    isLogin);
  document.getElementById("auth-tab-register").classList.toggle("active", !isLogin);
  // сбрасываем сообщения
  ["login-msg","reg-msg"].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.textContent = ""; el.className = "auth-msg"; }
  });
}
window.sbShowTab = sbShowTab;

// ─── 4. ПОКАЗАТЬ / СКРЫТЬ ПАРОЛЬ ─────────────────────────────────────────────
function sbTogglePw(inputId, btn) {
  const inp = document.getElementById(inputId);
  if (!inp) return;
  const hidden = inp.type === "password";
  inp.type = hidden ? "text" : "password";
  btn.textContent = hidden ? "🙈" : "👁";
}
window.sbTogglePw = sbTogglePw;

// ─── 5. ВСПОМОГАЛКИ UI ────────────────────────────────────────────────────────
function _setMsg(id, text, type) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = text;
  el.className = `auth-msg ${type}`;
}

function _setLoading(btnId, loading) {
  const btn = document.getElementById(btnId);
  if (!btn) return;
  btn.disabled = loading;
  if (loading) {
    btn._origText = btn.textContent;
    btn.innerHTML = `<span class="auth-spinner"></span>Загрузка…`;
  } else {
    btn.innerHTML = btn._origText || "OK";
  }
}

// ─── 6. РЕГИСТРАЦИЯ ───────────────────────────────────────────────────────────
async function sbHandleRegister() {
  const username = document.getElementById("reg-username")?.value.trim();
  const grade    = document.getElementById("reg-grade")?.value;
  const email    = document.getElementById("reg-email")?.value.trim();
  const password = document.getElementById("reg-password")?.value;

  // Валидация
  if (!username) { _setMsg("reg-msg", "Введи никнейм", "error"); return; }
  if (!grade)    { _setMsg("reg-msg", "Выбери класс",  "error"); return; }
  if (!email)    { _setMsg("reg-msg", "Введи email",   "error"); return; }
  if (!password || password.length < 6) {
    _setMsg("reg-msg", "Пароль — минимум 6 символов", "error"); return;
  }

  _setLoading("reg-btn", true);
  _setMsg("reg-msg", "", "");

  const { data, error } = await _sb.auth.signUp({
    email, password,
    options: { data: { username, grade } },
  });

  _setLoading("reg-btn", false);

  if (error) {
    const msgs = {
      "User already registered": "Этот email уже зарегистрирован",
      "Password should be at least 6 characters": "Пароль — минимум 6 символов",
    };
    _setMsg("reg-msg", msgs[error.message] ?? error.message, "error");
    return;
  }

  // Supabase может сразу вернуть сессию или потребовать подтверждение email
  if (data.session) {
    _enterGame(data.user, username, grade);
  } else {
    _setMsg("reg-msg", "Проверь почту и подтверди аккаунт!", "success");
  }
}
window.sbHandleRegister = sbHandleRegister;

// ─── 7. ВХОД ──────────────────────────────────────────────────────────────────
async function sbHandleLogin() {
  const email    = document.getElementById("login-email")?.value.trim();
  const password = document.getElementById("login-password")?.value;

  if (!email)    { _setMsg("login-msg", "Введи email",   "error"); return; }
  if (!password) { _setMsg("login-msg", "Введи пароль",  "error"); return; }

  _setLoading("login-btn", true);
  _setMsg("login-msg", "", "");

  const { data, error } = await _sb.auth.signInWithPassword({ email, password });

  _setLoading("login-btn", false);

  if (error) {
    const msgs = {
      "Invalid login credentials": "Неверный email или пароль",
      "Email not confirmed":       "Сначала подтверди email",
    };
    _setMsg("login-msg", msgs[error.message] ?? error.message, "error");
    return;
  }

  const meta     = data.user.user_metadata ?? {};
  const username = meta.username ?? email.split("@")[0];
  const grade    = meta.grade    ?? "";
  _enterGame(data.user, username, grade);
}
window.sbHandleLogin = sbHandleLogin;

// ─── 8. ПЕРЕХОД В ИГРУ ────────────────────────────────────────────────────────
function _enterGame(user, username, grade) {
  // Прячем экран авторизации
  document.getElementById("screen-auth").style.display = "none";

  // Пробрасываем данные в app.js
  if (typeof playerName !== "undefined") playerName = username;
  if (typeof playerGrade !== "undefined") playerGrade = grade;

  // Если лендинг всё ещё активен — автозаполняем и запускаем игру
  const nameInput  = document.getElementById("landing-name");
  const gradeInput = document.getElementById("landing-grade");
  if (nameInput)  nameInput.value  = username;
  if (gradeInput && grade) {
    gradeInput.value = grade;
    gradeInput.classList.remove("placeholder");
  }

  // Запускаем игру через функцию app.js
  if (typeof startAndScroll === "function") {
    startAndScroll();
  } else if (typeof startGame === "function") {
    startGame();
  }

  // Патчим handleAnswer для авто-синхронизации очков
  sbPatchHandleAnswer();
}

// ─── 9. ОБНОВЛЕНИЕ РЕКОРДА В ЛИДЕРБОРДЕ ──────────────────────────────────────
async function sbUpdateScore(category, score) {
  const { data: { user } } = await _sb.auth.getUser();
  if (!user) return;

  const { error } = await _sb
    .from("leaderboards")
    .upsert(
      { user_id: user.id, category, score, updated_at: new Date().toISOString() },
      { onConflict: "user_id,category" }
    );

  if (error) console.error(`[Supabase] sbUpdateScore(${category}):`, error.message);
}
window.sbUpdateScore = sbUpdateScore;

// ─── 10. ЗАГРУЗИТЬ ТОП-10 ────────────────────────────────────────────────────
async function sbLoadLeaderboard(category) {
  const listEl = document.getElementById("leaderboard-list");
  if (!listEl) return;

  listEl.innerHTML = `<div class="lb-loading">Загрузка…</div>`;

  const { data, error } = await _sb
    .from("leaderboards")
    .select("score, profiles(username)")   // JOIN через FK leaderboards.user_id → profiles.id
    .eq("category", category)              // 'xp' | 'coins' | 'rewards' | 'solved'
    .order("score", { ascending: false })  // сортировка по убыванию
    .limit(10);

  if (error) {
    console.error("[Supabase] sbLoadLeaderboard:", error.message);
    listEl.innerHTML = `<div class="lb-error">Ошибка загрузки рейтинга</div>`;
    return;
  }

  if (!data || data.length === 0) {
    listEl.innerHTML = `<div class="lb-empty">Рейтинг пока пуст — будь первым!</div>`;
    return;
  }

  const medalColors = ["#f5c842", "#b0b8c4", "#cd7f32"];
  const medalIcons  = ["🥇", "🥈", "🥉"];
  const catLabel    = { xp: "XP", coins: "TV монеты", rewards: "Награды", solved: "Решено задач" };

  const rows = data.map((row, i) => {
    const username = row.profiles?.username ?? "Аноним";
    const score    = (row.score ?? 0).toLocaleString();
    const color    = medalColors[i] ?? "rgba(255,255,255,0.35)";
    const medal    = medalIcons[i]  ?? String(i + 1);
    const isMe     = (typeof playerName !== "undefined") && username === playerName;
    return `
      <div class="lb-online-row${isMe ? " lb-online-row--me" : ""}">
        <div class="lb-online-rank" style="color:${color}">${medal}</div>
        <div class="lb-online-name">${username.replace(/</g, "&lt;")}${isMe ? " 👈" : ""}</div>
        <div class="lb-online-score" style="color:${color}">${score}</div>
      </div>`;
  }).join("");

  listEl.innerHTML = `
    <div class="lb-online-category">${catLabel[category] ?? category}</div>
    ${rows}
  `;
  return data;
}
window.sbLoadLeaderboard = sbLoadLeaderboard;

// Возвращает данные лидерборда для внешних вызовов (app.js)
async function sbFetchLeaderboards(category = "xp", limit = 50) {
  const { data, error } = await _sb
    .from("leaderboards")
    .select("score, profiles(username,grade)")
    .eq("category", category)
    .order("score", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("[Supabase] sbFetchLeaderboards:", error.message);
    return [];
  }

  return (data || []).map(row => ({
    username: row.profiles?.username ?? "Аноним",
    grade: row.profiles?.grade ?? "?",
    score: row.score ?? 0,
  }));
}
window.sbFetchLeaderboards = sbFetchLeaderboards;

// Возвращает подробный список профилей с результатами (требует, чтобы в supabase была связь leaderboards->profiles)
async function sbFetchFullResults(limit = 500) {
  // Попробуем получить профили вместе с их записями в таблице leaderboards
  const { data, error } = await _sb
    .from('profiles')
    .select('id, username, email, grade, leaderboards(category,score)')
    .limit(limit);

  if (error) {
    console.error('[Supabase] sbFetchFullResults:', error.message);
    return [];
  }

  return (data || []).map(p => {
    const result = { id: p.id, username: p.username || '', email: p.email || '', grade: p.grade || '' };
    // Преобразуем массив leaderboards в объект по категориям
    (p.leaderboards || []).forEach(lb => {
      result[lb.category] = lb.score || 0;
    });
    // Убедимся, что ключи есть
    result.xp = result.xp || 0;
    result.coins = result.coins || 0;
    result.rewards = result.rewards || 0;
    result.solved = result.solved || 0;
    return result;
  });
}
window.sbFetchFullResults = sbFetchFullResults;

// ─── 11. АВТОПАТЧ handleAnswer ────────────────────────────────────────────────
function sbPatchHandleAnswer() {
  if (typeof handleAnswer !== "function" || handleAnswer._sbPatched) return;

  const _orig = handleAnswer;

  window.handleAnswer = async function(taskId, option) {
    // Сначала выполняем оригинальную логику app.js
    _orig(taskId, option);

    // Проверяем что ответ правильный
    const task = (typeof TASKS !== "undefined")
      ? TASKS.find(tk => tk.id === taskId)
      : null;

    if (!task || option !== task.answer) return;

    // 300мс — app.js успевает обновить переменные xp/coins/etc
    setTimeout(async () => {
      const currentXp      = typeof xp            !== "undefined" ? xp                              : 0;
      const currentCoins   = typeof coins         !== "undefined" ? coins                           : 0;
      const currentRewards = typeof earnedRewards !== "undefined" ? earnedRewards.length            : 0;
      const currentSolved  = typeof solvedTasks   !== "undefined" ? Object.keys(solvedTasks).length : 0;

      // Upsert по всем 4 категориям параллельно
      await Promise.all([
        sbUpdateScore("xp",      currentXp),
        sbUpdateScore("coins",   currentCoins),
        sbUpdateScore("rewards", currentRewards),
        sbUpdateScore("solved",  currentSolved),
      ]);

      // Обновляем онлайн-рейтинг если таб открыт
      const lbPanel = document.getElementById("tab-leaderboard");
      if (lbPanel && lbPanel.classList.contains("active")) {
        const cur = typeof lbFilter !== "undefined" ? lbFilter : "xp";
        sbLoadLeaderboard(cur);
      }
    }, 300);
  };

  window.handleAnswer._sbPatched = true;
  console.log("[Supabase] handleAnswer запатчен ✓");
}
window.sbPatchHandleAnswer = sbPatchHandleAnswer;

// ─── 12. СЛУШАТЕЛЬ СЕССИИ ────────────────────────────────────────────────────
_sb.auth.onAuthStateChange((event, session) => {
  if (event === "SIGNED_IN" && session?.user) {
    const meta = session.user.user_metadata ?? {};
    if (meta.username && typeof playerName !== "undefined") playerName = meta.username;
  }
});

// ─── 13. СТАРТ: вставить экран и скрыть лендинг до авторизации ───────────────
(function _init() {
  function _setup() {
    // Скрываем обычный лендинг — пользователь сначала должен войти
    const landing = document.getElementById("screen-landing");
    if (landing) landing.style.display = "none";
    _injectAuthScreen();

    // Если сессия уже есть (повторный визит) — сразу в игру
    _sb.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        const meta     = session.user.user_metadata ?? {};
        const username = meta.username ?? session.user.email.split("@")[0];
        const grade    = meta.grade    ?? "";
        _enterGame(session.user, username, grade);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", _setup);
  } else {
    _setup();
  }
})();

console.log("[Supabase] TEENVESTOR auth module loaded ✓");
