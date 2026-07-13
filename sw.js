const CACHE_NAME = 'necesidades-casa-v1';

// Instalar el Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(self.skipWaiting());
});

// Activar el Service Worker
self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

// Capturar las peticiones (Obligatorio para que Chrome valide la App)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            // Si no hay internet, simplemente deja pasar la petición normal o falla elegantemente
            return caches.match(event.request);
        })
    );
});