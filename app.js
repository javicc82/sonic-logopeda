// =============================================
// SONIC SPEECH RUN — app.js
// =============================================

// ---- EJERCICIOS (Deglución Atípica - Actualizado) ----
const EXERCISES = [
  {
    id: 1,
    name: "Respirar por la nariz",
    emoji: "👃",
    desc: "Inspira y espira usando SOLO la nariz, nunca la boca. Por una narina y luego por la otra.",
    reps: "5 veces cada lado",
    speech: "¡Respira fuerte, como Sonic antes de correr! 💨",
    color: "#29B6F6"
  },
  {
    id: 2,
    name: "Soplar con pajita",
    emoji: "🥤",
    desc: "Con un vaso de agua, sopla burbujas con la pajita. ¡Intenta hacer muchas burbujas sin parar!",
    reps: "10 segundos",
    speech: "¡Burbujas a toda velocidad! 🫧",
    color: "#06d6a0"
  },
  {
    id: 3,
    name: "Lengua por fuera de los dientes",
    emoji: "👄",
    desc: "Con la boca cerrada, pasa la lengua por fuera de todos los dientes. Hacia un lado y luego hacia el otro.",
    reps: "5 vueltas cada lado",
    speech: "¡Da la vuelta entera como un loop! 🔄",
    color: "#9C27B0"
  },
  {
    id: 4,
    name: "Lengua por los labios",
    emoji: "👅",
    desc: "Pasa la lengua bien estirada por el labio de arriba y luego por el labio de abajo.",
    reps: "8 veces",
    speech: "¡Arriba y abajo como saltando plataformas! ⬆️⬇️",
    color: "#FF9800"
  },
  {
    id: 5,
    name: "Sostener el lápiz",
    emoji: "🖊️",
    desc: "Pon los labios en morritos y aguanta un lápiz sujeto solo con los labios. ¡Sin que se caiga un minuto entero!",
    reps: "1 minuto",
    speech: "¡Quieto! ¡Que no caiga el lápiz! 🎯",
    color: "#FFD600",
    hasTimer: true,
    timerDuration: 60,
    timerMsg: "¡No sueltes el lápiz!"
  },
  {
    id: 6,
    name: "Soplar globos por la nariz",
    emoji: "🎈",
    desc: "Coge aire exclusivamente por la nariz e intenta inflar el globo soplando con fuerza.",
    reps: "5 veces",
    speech: "¡Infla el globo con propulsión sónica! 🚀",
    color: "#FF5722"
  },
  {
    id: 7,
    name: "Lengua hacia la nariz",
    emoji: "🫦",
    desc: "Abre la boca grande, saca la lengua sin rozar los labios. Intenta tocar la nariz, bajar a la barbilla y a los laterales.",
    reps: "5 veces cada dirección",
    speech: "¡A por la nariz! ¡Tú puedes, velocista! 🎯",
    color: "#00BCD4"
  },
  {
    id: 8,
    name: "Morritos y sonrisa",
    emoji: "😁",
    desc: "Pon los labios en morritos (como un besito) y luego haz una gran sonrisa. ¡Alterna rápido!",
    reps: "10 veces",
    speech: "¡Morritos... SONRISA! 😄 ¡A máxima velocidad!",
    color: "#F44336"
  },
  {
    id: 9,
    name: "Morritos a los lados",
    emoji: "😗",
    desc: "Pon los labios en morritos juntos y muévelos de izquierda a derecha sin abrir la boca.",
    reps: "10 veces",
    speech: "¡Curvas cerradas a toda marcha! ↔️",
    color: "#AB47BC"
  },
  {
    id: 10,
    name: "Pomperos",
    emoji: "🫧",
    desc: "Usa el pompero para hacer pompas de jabón. ¡Sopla despacio y continuo para hacerlas gigantes!",
    reps: "5 pompas",
    speech: "¡Pompas mágicas doradas al estilo Sonic! ✨",
    color: "#00E676"
  },
  {
    id: 11,
    name: "El Pez",
    emoji: "🐟",
    desc: "Haz cara de pez apretando y frunciendo bien los morritos hacia adelante.",
    reps: "10 veces",
    speech: "¡Boca de pez en la zona acuática! 🌊",
    color: "#03A9F4"
  },
  {
    id: 12,
    name: "El Besito",
    emoji: "💋",
    desc: "Desde la posición de labios en beso, lanza besitos sonoros fuertes hacia adelante.",
    reps: "10 besos",
    speech: "¡Lanza un beso supersónico! 💥",
    color: "#E91E63"
  },
  {
    id: 13,
    name: "El Caballo",
    emoji: "🐎",
    desc: "Haz chasquidos fuertes con la lengua contra el paladar imitando el galope de un caballo.",
    reps: "15 chasquidos",
    speech: "¡Galope veloz por Green Hill! 🏇",
    color: "#8D6E63"
  },
  {
    id: 14,
    name: "Barrido lingual",
    emoji: "🧹",
    desc: "Coloca la lengua detrás de los dientes arriba y barre con fuerza todo el paladar hacia atrás.",
    reps: "8 veces",
    speech: "¡Limpia la pista a toda velocidad! 🏎️",
    color: "#26A69A"
  },
  {
    id: 15,
    name: "Independizar la lengua",
    emoji: "🎪",
    desc: "Mueve la punta de la lengua arriba y abajo sin mover la mandíbula ni la barbilla.",
    reps: "10 veces",
    speech: "¡Control total de lengua nivel Master! 🎮",
    color: "#7E57C2"
  },
  {
    id: 16,
    name: "Sujetar gusanito lingual",
    emoji: "🐛",
    desc: "Coloca un trocito de gusanito en la punta de la lengua contra el paladar y sujétalo firme sin moverte.",
    reps: "30 segundos",
    speech: "¡Mantén el tesoro bien pegado arriba! 🏆",
    color: "#FFC107",
    hasTimer: true,
    timerDuration: 30,
    timerMsg: "¡Sujeta el gusanito contra el paladar!"
  }
];

// ---- CHAOS EMERALDS (medallas) — todas usan anillo dorado ----
const EMERALDS = [
  { id: "first_day",   name: "1er Día",    condition: d => d.totalDays >= 1 },
  { id: "three_days",  name: "3 Días",      condition: d => d.totalDays >= 3 },
  { id: "perfect",     name: "Perfecto",    condition: d => d.perfectDays >= 1 },
  { id: "streak_3",    name: "Racha x3",    condition: d => d.maxStreak >= 3 },
  { id: "streak_7",    name: "¡Semana!",    condition: d => d.maxStreak >= 7 },
  { id: "rings_50",    name: "50 Anillos",  condition: d => d.totalRings >= 50 },
  { id: "all_emeralds",name: "Super Sonic", condition: d => d.perfectDays >= 3 },
];

// =============================================
// ESTADO
// =============================================
let state = {
  currentExercise: 0,
  ratings: [],
  ringsCollected: 0,
  timerInterval: null,
  timerSeconds: 60,
  timerRunning: false,
  timerDone: false,
};

// =============================================
// LOCAL STORAGE
// =============================================
function loadData() {
  try {
    const s = localStorage.getItem('sonic-speech-run');
    return s ? JSON.parse(s) : defaultData();
  } catch { return defaultData(); }
}

function defaultData() {
  return {
    history: [],
    streak: 0,
    maxStreak: 0,
    lastDate: null,
    totalDays: 0,
    perfectDays: 0,
    totalRings: 0,
  };
}

function saveData(data) {
  localStorage.setItem('sonic-speech-run', JSON.stringify(data));
}

function getTodayStr() {
  return new Date().toISOString().split('T')[0];
}

function formatDate(str) {
  const days   = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
  const months = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto',
                  'septiembre','octubre','noviembre','diciembre'];
  const d = new Date(str + 'T12:00:00');
  return `${days[d.getDay()]}, ${d.getDate()} de ${months[d.getMonth()]}`;
}

function hasDoneToday() {
  const data = loadData();
  return data.history.some(h => h.date === getTodayStr());
}

// =============================================
// NAVEGACIÓN
// =============================================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
}

function goHome() {
  clearTimerIfRunning();
  updateHomeScreen();
  showScreen('screen-home');
}

function goToExercises() {
  const today = getTodayStr();
  const data  = loadData();
  const done  = data.history.find(h => h.date === today);

  if (done) {
    showCelebration(done.ratings, done.totalRings, true);
    return;
  }

  // Reiniciar estado
  state.currentExercise = 0;
  state.ratings         = new Array(EXERCISES.length).fill(0);
  state.ringsCollected  = 0;
  clearTimerIfRunning();

  document.getElementById('total-ex').textContent = EXERCISES.length;
  updateRingsBar();
  loadExercise(0);
  showScreen('screen-exercises');
}

function goToStats() {
  renderStats();
  showScreen('screen-stats');
}

// =============================================
// HOME SCREEN
// =============================================
function updateHomeScreen() {
  const today = getTodayStr();
  document.getElementById('date-display').textContent = formatDate(today);

  const data = loadData();
  document.getElementById('hud-total-rings').textContent = data.totalRings;
  document.getElementById('hud-streak').textContent      = data.streak + '🔥';
  document.getElementById('hud-total-days').textContent  = data.totalDays;

  const btn = document.getElementById('btn-start');
  if (hasDoneToday()) {
    btn.textContent = '✓ YA COMPLETADO HOY';
    btn.style.background = 'linear-gradient(135deg, #00897B, #00E676)';
  } else {
    btn.textContent = '▶ PRESS START';
    btn.style.background = '';
  }
}

// =============================================
// EJERCICIOS
// =============================================
function loadExercise(index) {
  const ex = EXERCISES[index];

  // Limpiar timer si lo había
  clearTimerIfRunning();
  state.timerDone = false;

  // Actualizar HUD
  document.getElementById('current-ex').textContent = index + 1;
  document.getElementById('rings-count').textContent = state.ringsCollected;
  updateRingsBar();

  // Tarjeta
  const card = document.getElementById('exercise-card');
  card.classList.remove('completed');
  const oldCheck = card.querySelector('.done-check');
  if (oldCheck) oldCheck.remove();

  card.style.borderColor = ex.color + '55';
  card.style.background  = `rgba(${hexToRgb(ex.color)}, 0.06)`;

  document.getElementById('ex-zone-badge').textContent  = `ZONA ${index + 1}`;
  document.getElementById('exercise-emoji').textContent = ex.emoji;
  document.getElementById('exercise-name').textContent  = ex.name;
  document.getElementById('exercise-desc').textContent  = ex.desc;
  document.getElementById('reps-text').textContent      = ex.reps;

  // Bocadillo Sonic
  document.getElementById('mascot-speech').textContent = ex.speech;

  // Cronómetro
  const timerWrap = document.getElementById('timer-wrap');
  if (ex.hasTimer) {
    timerWrap.style.display = 'flex';
    resetTimerUI(ex.timerDuration);
  } else {
    timerWrap.style.display = 'none';
  }

  // Botones de anillos
  resetRatingButtons();
  const btnDone = document.getElementById('btn-done');
  // Si tiene timer, el botón se habilita solo al completar el timer O al puntuar
  btnDone.disabled = true;

  // Animación de entrada
  card.style.animation = 'none';
  requestAnimationFrame(() => { card.style.animation = 'cardIn 0.35s cubic-bezier(0.4, 0, 0.2, 1)'; });
}

function updateRingsBar() {
  const pct = (state.currentExercise / EXERCISES.length) * 100;
  document.getElementById('rings-bar').style.width = pct + '%';
}

function resetRatingButtons() {
  for (let i = 1; i <= 3; i++) {
    document.getElementById('ring-' + i)?.classList.remove('selected');
  }
}

function rateExercise(value) {
  state.ratings[state.currentExercise] = value;

  // Visual
  for (let i = 1; i <= 3; i++) {
    const btn = document.getElementById('ring-' + i);
    if (!btn) continue;
    i <= value ? btn.classList.add('selected') : btn.classList.remove('selected');
  }

  // Habilitar "ZONE CLEAR" (si tiene timer, solo si timer ya terminó también)
  const ex = EXERCISES[state.currentExercise];
  if (!ex.hasTimer || state.timerDone) {
    document.getElementById('btn-done').disabled = false;
  }

  // Mensaje Sonic
  const msgs = {
    1: ['¡Sigue intentándolo! 💪', '¡Mañana mejor! 🌱'],
    2: ['¡Bien hecho! 👍', '¡Buen trabajo! ⚡'],
    3: ['¡RING GET! 💍', '¡INCREÍBLE! 🌟', '¡PERFECTO! 🏆']
  };
  const pool = msgs[value];
  document.getElementById('mascot-speech').textContent = pool[Math.floor(Math.random() * pool.length)];
}

function markDone() {
  const index = state.currentExercise;
  const rating = state.ratings[index] || 1;

  // Sumar anillos
  state.ringsCollected += rating;
  document.getElementById('rings-count').textContent = state.ringsCollected;

  // Efecto tarjeta completada
  const card = document.getElementById('exercise-card');
  card.classList.add('completed');
  const check = document.createElement('div');
  check.className = 'done-check';
  check.textContent = '✓ CLEAR';
  card.appendChild(check);

  const next = index + 1;
  if (next < EXERCISES.length) {
    setTimeout(() => {
      state.currentExercise = next;
      loadExercise(next);
    }, 700);
  } else {
    setTimeout(() => finishSession(), 700);
  }
}

// =============================================
// CRONÓMETRO (ejercicio lápiz)
// =============================================
const CIRCUMFERENCE = 2 * Math.PI * 52; // ~327

function resetTimerUI(seconds) {
  state.timerSeconds = seconds;
  const circle = document.getElementById('timer-circle');
  const numEl  = document.getElementById('timer-number');
  const startBtn = document.getElementById('btn-timer-start');
  const statusEl = document.getElementById('timer-status');

  circle.style.strokeDasharray  = CIRCUMFERENCE;
  circle.style.strokeDashoffset = 0;
  circle.className = 'timer-fill';

  numEl.textContent     = seconds;
  numEl.style.color     = 'var(--ring-gold)';
  startBtn.disabled     = false;
  startBtn.textContent  = '⏱ INICIAR';
  statusEl.textContent  = '';
}

function startTimer() {
  if (state.timerRunning) return;

  const ex       = EXERCISES[state.currentExercise];
  const total    = ex.timerDuration || 60;
  state.timerSeconds = total;
  state.timerRunning = true;

  const startBtn = document.getElementById('btn-timer-start');
  const statusEl = document.getElementById('timer-status');
  const circle   = document.getElementById('timer-circle');
  const numEl    = document.getElementById('timer-number');

  startBtn.disabled    = true;
  startBtn.textContent = '⏳ CORRIENDO...';
  statusEl.textContent = ex.timerMsg || '¡Aguanta la posición!';

  state.timerInterval = setInterval(() => {
    state.timerSeconds--;
    numEl.textContent = state.timerSeconds;

    // Actualizar arco SVG
    const progress = state.timerSeconds / total;
    circle.style.strokeDashoffset = CIRCUMFERENCE * (1 - progress);

    // Cambiar color si queda poco tiempo
    if (state.timerSeconds <= 10) {
      circle.className = 'timer-fill timer-warning';
      numEl.style.color = '#FF7043';
    }

    if (state.timerSeconds <= 0) {
      clearInterval(state.timerInterval);
      state.timerRunning = false;
      state.timerDone    = true;

      circle.className       = 'timer-fill timer-done';
      numEl.textContent      = '✓';
      numEl.style.color      = 'var(--green-go)';
      startBtn.textContent   = '✓ COMPLETADO';
      statusEl.textContent   = '¡RING GET! 💍 ¡Perfecto!';

      // Habilitar botón de continuar si ya tiene valoración
      if (state.ratings[state.currentExercise] > 0) {
        document.getElementById('btn-done').disabled = false;
      } else {
        // Auto-dar 3 estrellas si completó el timer completo
        rateExercise(3);
      }
    }
  }, 1000);
}

function clearTimerIfRunning() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
  state.timerRunning = false;
}

// =============================================
// FINALIZAR SESIÓN
// =============================================
function finishSession() {
  const today = getTodayStr();
  const data  = loadData();

  const totalRings = state.ringsCollected;
  const maxPossible = EXERCISES.length * 3;
  const isPerfect   = totalRings === maxPossible;

  // Actualizar racha
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];

  if (data.lastDate === yesterdayStr) {
    data.streak += 1;
  } else if (data.lastDate !== today) {
    data.streak = 1;
  }

  data.maxStreak  = Math.max(data.maxStreak, data.streak);
  data.lastDate   = today;
  data.totalDays  += 1;
  data.totalRings += totalRings;
  if (isPerfect) data.perfectDays += 1;

  if (!data.history.find(h => h.date === today)) {
    data.history.push({
      date: today,
      ratings: [...state.ratings],
      totalRings,
      isPerfect
    });
  }

  saveData(data);
  showCelebration(state.ratings, totalRings, false);
}

// =============================================
// CELEBRACIÓN
// =============================================
function showCelebration(ratings, totalRings, alreadyDone) {
  const maxPossible = EXERCISES.length * 3;

  document.getElementById('cel-rings').textContent    = totalRings + ' 💍';
  document.getElementById('cel-exercises').textContent = EXERCISES.length + '/' + EXERCISES.length;
  document.getElementById('cel-bonus').textContent    = totalRings === maxPossible ? '¡PERFECTO! ⚡' : '—';

  // Mostrar anillos ganados en celebración
  const RING_SVG = `<svg class="cel-ring" viewBox="0 0 40 40"><circle cx="20" cy="20" r="14" fill="none" stroke="url(#goldRing)" stroke-width="7"/><circle cx="20" cy="20" r="14" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2" stroke-dasharray="4 9" transform="rotate(-30,20,20)"/></svg>`;
  const display = document.getElementById('rings-earned-display');
  display.innerHTML = ratings.map(r =>
    r >= 1 ? RING_SVG : '<span style="opacity:0.2;font-size:22px;">○</span>'
  ).join('');

  if (!alreadyDone) launchConfetti();
  showScreen('screen-celebration');
}

function launchConfetti() {
  const container = document.getElementById('confetti');
  container.innerHTML = '';
  const colors = ['#FFD600', '#F44336', '#29B6F6', '#00E676', '#9C27B0', '#FF9800'];

  for (let i = 0; i < 70; i++) {
    const p = document.createElement('div');
    p.className  = 'confetti-piece';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.width  = (Math.random() * 10 + 6) + 'px';
    p.style.height = (Math.random() * 10 + 6) + 'px';
    p.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    p.style.animationDuration = (Math.random() * 2 + 2) + 's';
    p.style.animationDelay   = (Math.random() * 1.5) + 's';
    container.appendChild(p);
  }
  setTimeout(() => { container.innerHTML = ''; }, 5000);
}

// =============================================
// ESTADÍSTICAS
// =============================================
function renderStats() {
  const data    = loadData();
  const last7   = data.history.slice(-7);
  const content = document.getElementById('records-content');
  content.innerHTML = '';

  // Top stats
  const topDiv = document.createElement('div');
  topDiv.className = 'stat-grid-top';
  topDiv.innerHTML = `
    <div class="stat-top-card">
      <span class="stat-top-emoji">🔥</span>
      <span class="stat-top-value">${data.streak}</span>
      <span class="stat-top-label">RACHA</span>
    </div>
    <div class="stat-top-card">
      <span class="stat-top-emoji">💍</span>
      <span class="stat-top-value">${data.totalRings}</span>
      <span class="stat-top-label">ANILLOS</span>
    </div>
    <div class="stat-top-card">
      <span class="stat-top-emoji">💎</span>
      <span class="stat-top-value">${data.perfectDays}</span>
      <span class="stat-top-label">PERFECTOS</span>
    </div>
  `;
  content.appendChild(topDiv);

  // Por ejercicio
  const label = document.createElement('p');
  label.className = 'stat-section-title';
  label.textContent = 'ÚLTIMOS 7 DÍAS POR ZONA';
  content.appendChild(label);

  EXERCISES.forEach((ex, idx) => {
    const exRatings = last7.map(d => (d.ratings && d.ratings[idx]) || 0).filter(r => r > 0);
    const avg = exRatings.length ? exRatings.reduce((a,b) => a+b, 0) / exRatings.length : 0;
    const pct = (avg / 3) * 100;
    const color = avg >= 2.5 ? '#00E676' : avg >= 1.5 ? '#FFD600' : '#F44336';

    const card = document.createElement('div');
    card.className = 'stat-ex-card';
    card.innerHTML = `
      <span class="stat-ex-emoji">${ex.emoji}</span>
      <div class="stat-ex-info">
        <div class="stat-ex-name">${ex.name}</div>
        <div class="stat-ex-bar-wrap">
          <div class="stat-ex-bar" style="width:${pct}%;background:${color};"></div>
        </div>
      </div>
      <div class="stat-ex-rings">${avg > 0 ? avg.toFixed(1)+'💍' : '—'}</div>
    `;
    content.appendChild(card);
  });

  // Chaos Emeralds
  renderEmeralds(data);
}

function renderEmeralds(data) {
  const RING_SVG = `<svg class="chaos-ring-svg" viewBox="0 0 40 40"><circle cx="20" cy="20" r="14" fill="none" stroke="url(#goldRing)" stroke-width="7"/><circle cx="20" cy="20" r="14" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2" stroke-dasharray="4 9" transform="rotate(-30,20,20)"/></svg>`;
  const grid = document.getElementById('chaos-grid');
  grid.innerHTML = '';
  EMERALDS.forEach(em => {
    const earned = em.condition(data);
    const item   = document.createElement('div');
    item.className = 'chaos-item ' + (earned ? 'earned' : 'locked');
    item.innerHTML = earned
      ? `${RING_SVG}<span class="chaos-name">${em.name}</span>`
      : `<span class="chaos-emoji">🔒</span><span class="chaos-name">${em.name}</span>`;
    grid.appendChild(item);
  });
}

// =============================================
// PANEL ADMIN (3 taps en imagen Sonic)
// =============================================
let tapCount = 0, tapTimer = null;

function handleMascotTap() {
  tapCount++;
  clearTimeout(tapTimer);
  tapTimer = setTimeout(() => { tapCount = 0; }, 600);
  if (tapCount >= 3) {
    tapCount = 0;
    document.getElementById('admin-panel').style.display = 'block';
  }
}

function closeAdmin() {
  document.getElementById('admin-panel').style.display = 'none';
}

function toggleAdminOverride() {
  const cur = state.ratings[state.currentExercise] || 0;
  rateExercise((cur % 3) + 1);
  closeAdmin();
}

// =============================================
// RESET
// =============================================
function confirmReset() {
  if (confirm('¿Resetear los datos de la semana? No se puede deshacer.')) {
    const data   = loadData();
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - 7);
    const cutoffStr = cutoff.toISOString().split('T')[0];
    data.history = data.history.filter(h => h.date < cutoffStr);
    saveData(data);
    renderStats();
  }
}

// =============================================
// UTILIDADES
// =============================================
function hexToRgb(hex) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r ? `${parseInt(r[1],16)}, ${parseInt(r[2],16)}, ${parseInt(r[3],16)}` : '255,255,255';
}

// =============================================
// INIT
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  updateHomeScreen();

  // Tap en imagen Sonic para panel admin
  const mascot = document.getElementById('mascot-ex');
  if (mascot) mascot.addEventListener('click', handleMascotTap);

  // Prevenir scroll rebote en iOS
  document.addEventListener('touchmove', e => {
    if (e.target === document.body) e.preventDefault();
  }, { passive: false });

  // Registrar Service Worker (PWA)
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(e => console.log('SW error:', e));
  }
});
