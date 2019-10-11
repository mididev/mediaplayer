var cacheName = 'hello-pwa';
var filesToCache = [
  '/mediaplayer/',
  '/mediaplayer/index.html',
  '/mediaplayer/css/style.css',
  '/mediaplayer/js/main.js',
  '/mediaplayer/images/artists/chaka-khan.jpg',
  '/mediaplayer/images/artists/nate-smith.jpg',
  '/mediaplayer/mp3/Pages.mp3'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
