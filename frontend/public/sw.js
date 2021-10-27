var CACHE_NAME = 'fix-my-city-2.0'; //we don't have to reload the image every time
var urlsToCache = [
 'index.html',
 'offline.html'
];
 
// Install a service worker
this.self.addEventListener('install', event => {
 // Perform install steps
 event.waitUntil(
   caches.open(CACHE_NAME)
     .then((cache) => {
       console.log('Opened cache');
       return cache.addAll(urlsToCache);
     })
 );
});
 
// Cache and return requests
this.self.addEventListener('fetch', event => {
 event.respondWith(
   caches.match(event.request) //cache all request our page is receiving e.g. fetch, API call, another image etc
     .then(() => {
        return fetch(event.request) //for all requests, fetch new data again
          .catch(() => caches.match('offline.html')) //if it cannot fetch data, there is no internet connection 
     })
 );
});
 
// Update a service worker
this.self.addEventListener('activate', event => {
 var cacheWhitelist = []; //we don't want to store everything in our cache. just keep new one.
 cacheWhitelist.push(CACHE_NAME);
 event.waitUntil(
   caches.keys().then((cacheNames) => Promise.all(
       cacheNames.map((cacheName) => {
         if (!cacheWhitelist.includes(cacheName)) { //if cachewhitelist does not include the cachename, then we want to delete the name
           return caches.delete(cacheName);
         }
       })
     ))
   )
});
