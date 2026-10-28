/* Dentaria se mudó a /app.html: este archivo retira el service worker antiguo de /app/ y sus copias guardadas.
   No toca los datos de nadie (esos están en el navegador y en la nube). */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate('/app.html' + new URL(c.url).hash);
})()));
