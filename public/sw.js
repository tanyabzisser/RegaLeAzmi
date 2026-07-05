const CACHE_NAME = 'mom-habits-v2';
const ASSETS_TO_CACHE = [
  './index.html',
  './manifest.json'
];

// Install Event
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activate Event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event (Network First Strategy)
self.addEventListener('fetch', (event) => {
  // Only cache GET requests and non-API requests
  // Also bypass media files (mp3) and /audio/ folder to allow browser-native Range requests (especially for iOS Safari)
  if (
    event.request.method !== 'GET' || 
    event.request.url.includes('/api/') ||
    event.request.url.match(/\.(mp3|wav|ogg|m4a|aac)$/i) ||
    event.request.url.includes('/audio/')
  ) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // If network request is successful, clone it and put in cache
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // If network fails, try to return cached response
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // Offline fallback
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html') || caches.match('/');
          }
        });
      })
  );
});
