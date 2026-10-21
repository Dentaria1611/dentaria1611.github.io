/* Dentaria: la app se mudó a /app/. Este archivo retira el service worker antiguo de la raíz
   para que la página web siempre se vea actualizada. No toca los datos de nadie. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (!k.startsWith('dentaria-app')) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate(c.url);
})()));
