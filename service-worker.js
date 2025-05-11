self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('isms-app-cache').then((cache) => {
      return cache.addAll([
        'index.html',
        'icon-192x192.png',
        'icon-512x512.png',
        'cvtms-192x192.png',
        'iscd-192x192.png',
        'sacs-192x192.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close(); // Close the notification
  const targetUrl = event.notification.data?.url || '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
      // If a window/tab is already open, focus it
      for (const client of clientList) {
        if (client.url.includes(targetUrl) && 'focus' in client) {
          return client.focus();
        }
      }

      // Otherwise, open a new window/tab
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});