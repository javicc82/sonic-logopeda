// Service Worker — Sonic Speech Run
// Cachea todos los archivos para uso offline

const CACHE_NAME = 'sonic-speech-run-v2';
const FILES = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './sonic.png',
  './ring.png',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800;900&family=Bangers&display=swap'
];

// Instalar: cachear todos los archivos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES).catch(err => {
        console.log('Cache parcial (fuentes pueden fallar offline):', err);
      });
    })
  );
  self.skipWaiting();
});

// Activar: limpiar caches viejas
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: servir desde caché, con fallback a red
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).then(response => {
        // Cachear recursos nuevos dinámicamente
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      });
    }).catch(() => {
      // Offline fallback
      if (event.request.destination === 'document') {
        return caches.match('./index.html');
      }
    })
  );
});
