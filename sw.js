const CACHE_NAME = 'yellowstone-field-notes-v21';
const APP_SHELL = ['./', './index.html', './design-system.html', './styles.css', './timeline.css', './overnight-link.css', './interaction.css', './card-variants.css', './theme.css', './tokens.css', './design-system.css', './design-system-components.css', './design-system-config.js', './design-system.js', './app.js'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))));
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
    return response;
  })));
});
