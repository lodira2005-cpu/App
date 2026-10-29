const CACHE_NAME = 'iptv-pro-v1';
const urlsToCache = [
  './index.html',
  './manifest.json'
];

// Instalar y guardar en caché
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Interceptar peticiones (para que funcione offline parcialmente)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});