// =============================================
// SONIC SPEECH RUN — app.js
// 100% Infantil, Sin Almacenamiento, Con Reto Diario
// =============================================

// ---- EJERCICIOS (Deglución Atípica) ----
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

// =============================================
// EFECTOS DE SONIDO SINTETIZADOS (Web Audio API)
// 100% Offline, sin archivos de audio externos
// =============================================
let audioCtx = null;
let soundEnabled = true;

function getAudioContext() {
  if (!audioCtx) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) audioCtx = new AudioCtx();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playRingSound(count = 1) {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      try {
        const now = ctx.currentTime;
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();

        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(987.77, now); // B5

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(1318.51, now + 0.04); // E6

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);

        osc1.start(now);
        osc1.stop(now + 0.06);
        osc2.start(now + 0.04);
        osc2.stop(now + 0.22);
      } catch (e) {}
    }, i * 110);
  }
}

function playVictorySound() {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const notes = [523.25, 659.25, 783.99, 1046.50];
  notes.forEach((freq, idx) => {
    setTimeout(() => {
      try {
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + (idx === notes.length - 1 ? 0.9 : 0.25));
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + (idx === notes.length - 1 ? 0.9 : 0.25));
      } catch (e) {}
    }, idx * 130);
  });
}

function playCheerSound() {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const notes = [659.25, 880.00];
  notes.forEach((freq, idx) => {
    setTimeout(() => {
      try {
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.4);
      } catch (e) {}
    }, idx * 160);
  });
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  const btns = document.querySelectorAll('.btn-sound-toggle');
  btns.forEach(b => { b.textContent = soundEnabled ? '🔊' : '🔇'; });
}

// =============================================
// OBJETIVO DIARIO DINÁMICO (Cero memoria persistente)
// =============================================
function getDailyTarget() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  // Semilla única y predecible por fecha
  const seed = (year * 372) + (month * 31) + day;
  // Objetivo entre 32 y 44 anillos (el máximo es 48)
  return 32 + (seed % 13);
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

// =============================================
// ESTADO EN MEMORIA VOLÁTIL (Se reinicia siempre)
// =============================================
let state = {
  currentExercise: 0,
  ratings: [],
  ringsCollected: 0,
  dailyTarget: getDailyTarget(),
  timerInterval: null,
  timerSeconds: 60,
  timerRunning: false,
  timerDone: false,
};

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
  // Inicializar contexto de audio con la primera interacción del usuario
  getAudioContext();

  // Reiniciar estado completamente
  state.currentExercise = 0;
  state.ratings         = new Array(EXERCISES.length).fill(0);
  state.ringsCollected  = 0;
  state.dailyTarget     = getDailyTarget();
  clearTimerIfRunning();

  document.getElementById('total-ex').textContent = EXERCISES.length;
  document.getElementById('hud-target-num').textContent = state.dailyTarget;
  updateRingsBar();
  loadExercise(0);
  showScreen('screen-exercises');
}

// =============================================
// PANTALLA INICIO
// =============================================
function updateHomeScreen() {
  const today = getTodayStr();
  document.getElementById('date-display').textContent = formatDate(today);

  state.dailyTarget = getDailyTarget();
  const targetEl = document.getElementById('home-target-num');
  if (targetEl) targetEl.textContent = state.dailyTarget;

  const btn = document.getElementById('btn-start');
  btn.textContent = '▶ PRESS START';
  btn.style.background = '';
}

// =============================================
// EJERCICIOS
// =============================================
function loadExercise(index) {
  const ex = EXERCISES[index];

  clearTimerIfRunning();
  state.timerDone = false;

  // Actualizar HUD
  document.getElementById('current-ex').textContent = index + 1;
  document.getElementById('rings-count').textContent = state.ringsCollected;
  document.getElementById('hud-target-num').textContent = state.dailyTarget;
  updateRingsBar();

  // Tarjeta de ejercicio
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

function spawnFloatingText(text, x, y) {
  const el = document.createElement('div');
  el.className = 'floating-ring-text';
  el.textContent = text;
  el.style.left = `${x}px`;
  el.style.top  = `${y}px`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 900);
}

function rateExercise(value, evt) {
  state.ratings[state.currentExercise] = value;

  // Visual de botones seleccionados
  for (let i = 1; i <= 3; i++) {
    const btn = document.getElementById('ring-' + i);
    if (!btn) continue;
    i <= value ? btn.classList.add('selected') : btn.classList.remove('selected');
  }

  // Sonido de anillo estilo Sonic
  playRingSound(value);

  // Animación de texto flotante (+1, +2, +3 anillos)
  if (evt && evt.clientX) {
    spawnFloatingText(`+${value} 💍`, evt.clientX - 20, evt.clientY - 40);
  } else {
    const btn = document.getElementById('ring-' + value);
    if (btn) {
      const rect = btn.getBoundingClientRect();
      spawnFloatingText(`+${value} 💍`, rect.left + rect.width / 2 - 20, rect.top - 20);
    }
  }

  // Habilitar botón ZONE CLEAR (si tiene timer, solo si ya terminó)
  const ex = EXERCISES[state.currentExercise];
  if (!ex.hasTimer || state.timerDone) {
    document.getElementById('btn-done').disabled = false;
  }

  // Mensaje Sonic
  const msgs = {
    1: ['¡Buen esfuerzo! 💪', '¡Sigue así, velocista! 🌱'],
    2: ['¡Gran trabajo! 👍', '¡A toda velocidad! ⚡'],
    3: ['¡RING GET! 💍✨', '¡INCREÍBLE! 🌟', '¡PERFECTO! 🏆']
  };
  const pool = msgs[value] || msgs[3];
  document.getElementById('mascot-speech').textContent = pool[Math.floor(Math.random() * pool.length)];
}

function markDone() {
  const index = state.currentExercise;
  const rating = state.ratings[index] || 1;

  // Sumar anillos
  state.ringsCollected += rating;
  document.getElementById('rings-count').textContent = state.ringsCollected;

  // Animación del contador de anillos en HUD
  const counterEl = document.querySelector('.rings-counter');
  if (counterEl) {
    counterEl.classList.remove('ring-bump');
    void counterEl.offsetWidth; // trigger reflow
    counterEl.classList.add('ring-bump');
  }

  // Tarjeta en verde
  const card = document.getElementById('exercise-card');
  card.classList.add('completed');
  if (!card.querySelector('.done-check')) {
    const check = document.createElement('div');
    check.className = 'done-check';
    check.textContent = '✓ ZONE CLEAR';
    card.appendChild(check);
  }

  // Siguiente ejercicio o celebración
  setTimeout(() => {
    const next = state.currentExercise + 1;
    if (next < EXERCISES.length) {
      state.currentExercise = next;
      loadExercise(next);
    } else {
      finishSession();
    }
  }, 450);
}

// =============================================
// CRONÓMETRO
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
  getAudioContext();

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

    const progress = state.timerSeconds / total;
    circle.style.strokeDashoffset = CIRCUMFERENCE * (1 - progress);

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

      if (state.ratings[state.currentExercise] > 0) {
        document.getElementById('btn-done').disabled = false;
      } else {
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
// FINALIZAR SESIÓN Y CELEBRACIÓN
// =============================================
function finishSession() {
  showCelebration(state.ratings, state.ringsCollected);
}

function showCelebration(ratings, totalRings) {
  const achieved = totalRings >= state.dailyTarget;
  const celBadge = document.getElementById('cel-badge');
  const celMainTitle = document.getElementById('cel-main-title');
  const celSonicImg = document.getElementById('cel-sonic-img');
  const celMessage = document.getElementById('cel-message');
  const celRings = document.getElementById('cel-rings');
  const celTarget = document.getElementById('cel-target');
  const celResult = document.getElementById('cel-result');

  celRings.textContent  = totalRings + ' 💍';
  celTarget.textContent = state.dailyTarget + ' 🎯';

  if (achieved) {
    celBadge.textContent = '🏆 ¡RETO CONSEGUIDO!';
    celBadge.className = 'cel-badge badge-win';
    celMainTitle.textContent = 'MISIÓN CUMPLIDA!!';
    if (celSonicImg) {
      celSonicImg.src = 'sonic-win.png';
      celSonicImg.alt = 'Sonic ¡Misión Cumplida!';
    }
    celMessage.textContent = '¡Increíble! ¡Has superado el reto de hoy con velocidad supersónica!';
    celResult.textContent = '¡SUPERADO! 🏆';
    celResult.style.color = '#00E676';
    playVictorySound();
  } else {
    celBadge.textContent = '⭐ ¡GRAN ENTRENAMIENTO!';
    celBadge.className = 'cel-badge badge-good';
    celMainTitle.textContent = '¡MUY BIEN HECHO!';
    if (celSonicImg) {
      celSonicImg.src = 'sonic-win.png';
      celSonicImg.alt = 'Sonic ¡Gran Entrenamiento!';
    }
    celMessage.textContent = `¡Has sumado ${totalRings} anillos! Cada día lo haces mejor. ¡Mañana habrá un reto nuevo!`;
    celResult.textContent = '¡CASI! Mañana más 🔥';
    celResult.style.color = '#FFD600';
    playCheerSound();
  }

  // Anillos visuales obtenidos
  const RING_SVG = `<svg class="cel-ring" viewBox="0 0 40 40"><circle cx="20" cy="20" r="14" fill="none" stroke="url(#goldRing)" stroke-width="7"/><circle cx="20" cy="20" r="14" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2" stroke-dasharray="4 9" transform="rotate(-30,20,20)"/></svg>`;
  const display = document.getElementById('rings-earned-display');
  display.innerHTML = ratings.map(r =>
    r >= 1 ? RING_SVG : '<span style="opacity:0.2;font-size:22px;">○</span>'
  ).join('');

  launchConfetti();
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
  // Limpiar cualquier residuo de localStorage anterior
  try { localStorage.removeItem('sonic-speech-run'); } catch(e) {}

  updateHomeScreen();

  // Prevenir scroll rebote en iOS
  document.addEventListener('touchmove', e => {
    if (e.target === document.body) e.preventDefault();
  }, { passive: false });

  // Registrar Service Worker (PWA)
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(e => console.log('SW error:', e));
  }
});
