// Archivo de activación mínimo para cumplir los requisitos de Android
const CACHE_NAME = 'necesidades-casa-v1';

self.addEventListener('install', (event) => {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Deja pasar todas las peticiones a internet de forma normal
    return;
});