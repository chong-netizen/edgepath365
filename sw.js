/* EDGEPATH 365 offline cache */
const CACHE = "edgepath365-v3";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./manifest.webmanifest",
  "./src/app.js",
  "./src/data.js",
  "./src/labs.js",
  "./src/device.js",
  "./assets/favicon.svg",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/apple-touch-icon.png",
  "./assets/edge-box.jpg",
  "./assets/board.jpg",
  "./assets/camera.jpg",
  "./assets/bench.jpg",
  "./assets/exploded.png",
  "./assets/device/exploded-clean.jpg",
  "./assets/device/exploded-annotated.jpg",
  "./assets/device/device-external.jpg",
  "./assets/device/factory.jpg",
  "./assets/device/safety.jpg",
  "./assets/device/warehouse.jpg",
  "./assets/device/logistics.jpg",
  "./assets/device/effect-factory.jpg",
  "./assets/device/effect-safety.jpg",
  "./assets/device/effect-warehouse.jpg",
  "./assets/device/effect-logistics.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      caches.match("./index.html").then((cached) =>
        cached || fetch(request).catch(() => caches.match("./index.html"))
      )
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (!response || response.status !== 200 || response.type !== "basic") return response;
        const copy = response.clone();
        caches.open(CACHE).then((cache) => cache.put(request, copy));
        return response;
      });
    })
  );
});


