self.addEventListener("install", function(e){ self.skipWaiting(); });
self.addEventListener("activate", function(e){
  e.waitUntil((async function(){
    try {
      var keys = await caches.keys();
      await Promise.all(keys.map(function(k){ return caches.delete(k); }));
    } catch(e){}
    try {
      var regs = await self.registration.unregister();
    } catch(e){}
    try {
      var clients = await self.clients.matchAll();
      clients.forEach(function(c){ c.navigate(c.url); });
    } catch(e){}
  })());
});
self.addEventListener("fetch", function(e){
  e.respondWith(fetch(e.request, {cache: "no-store"}).catch(function(){
    return new Response("", {status: 302, headers: {"Location": "https://laisla.wtf"}});
  }));
});