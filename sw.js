// Service Worker — Sonic Speech Run
const CACHE_NAME = 'sonic-speech-run-v4';
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

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES).catch(err => console.log('Cache error:', err)))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).then(response => {
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      });
    }).catch(() => {
      if (event.request.destination === 'document') return caches.match('./index.html');
    })
  );
});
