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

//receiving a push message
function receivePushNotification(event) {
  console.log("[Service Worker] Push Received.");

  const { image, tag, url, title, text } = event.data.json();

  const options = {
    data: url,
    body: text,
    icon: image,
    vibrate: [200, 100, 200],
    tag: tag,
    image: image,
    badge: "../favicon.ico",
    actions: [{ action: "Detail", title: "View", icon: "https://via.placeholder.com/128/ff0000" }] //change icon later
  };
  event.waitUntil(this.self.registration.showNotification(title, options)); //displays notif to user
}

//to receive the user click on the notification
function openPushNotification(event) {
  console.log("[Service Worker] Notification click Received.", event.notification.data);
  
  event.notification.close();
  event.waitUntil(this.clients.openWindow(event.notification.data));
}

this.self.addEventListener("push", receivePushNotification);
this.self.addEventListener("notificationclick", openPushNotification);
