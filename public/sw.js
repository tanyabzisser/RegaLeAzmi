// Self-destructing Service Worker to rescue users from stuck cache
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.map((key) => caches.delete(key)));
    }).then(() => {
      return self.registration.unregister();
    }).then(() => {
      return self.clients.claim();
    }).then(() => {
      return self.clients.matchAll().then((clients) => {
        clients.forEach((client) => {
          if (client.url && 'navigate' in client) {
            try {
              client.navigate(client.url);
            } catch (e) {
              console.error('Failed to navigate client:', e);
            }
          }
        });
      });
    })
  );
});
