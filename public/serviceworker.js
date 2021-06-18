const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"];
const self = this;
//Install SW
self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});
//Listen for requests
self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches.match(evt.request).then(() => {
      return fetch(evt.request).catch(() => caches.match("offline.html"));
    })
  );
});
//Activate the SW
self.addEventListener("activate", (evt) => {
  const cacheWhitelist = [];

  cacheWhitelist.push(CACHE_NAME);

  evt.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName))
            return caches.delete(cacheName);
        })
      )
    )
  );
});
