self.addEventListener("fetch",function(e){if(e.request.mode==="navigate"){e.respondWith(fetch(e.request,{cache:"no-store"}));}});
