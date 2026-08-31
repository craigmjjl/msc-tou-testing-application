const CACHE_NAME = 'tou-test-v1';

const FILES_TO_CACHE = [
  './index.html',
  './manifest.json',
  './icon1.png',
  './icon2.png'
];

// Install — cache all core files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate — clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch — serve from cache, fall back to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).catch(() => {
        return new Response('<h2>You are offline and this resource is not cached.</h2>', {
          headers: { 'Content-Type': 'text/html' }
        });
      });
    })
  );
});
