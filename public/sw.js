self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("nddc-cache").then((cache) => {
      return cache.addAll(["/", "/index.html", "/offline.html"]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches
        .match(event.request)
        .then((res) => res || caches.match("/offline.html"))
    )
  );
});
