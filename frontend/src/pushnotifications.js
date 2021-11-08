//check in console whether the service worker exists and push notifications are possible
function isPushNotificationSupported(){return "serviceWorker" in navigator && "PushManager" in window}

console.log(isPushNotificationSupported()); 

//push notification to ask user to allow for further notifications
async function askUserPermission() {
    return await Notification.requestPermission();
  }
askUserPermission();

//display 
function displayNotification() {
  if (Notification.permission === 'granted') {
    navigator.serviceWorker.getRegistration().then(function(reg) {
      var options = {
        body: 'This is a test!', //adds main description to notification
        icon: "../assets/images/francesco.jpg", //can be any image to make notification appealing
        vibrate: [100, 50, 100], //vibrate pattern for phone receiving notification
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        }
      };
      console.log ("display notification");
      reg.showNotification('Hello world!', options);
    });
  }
}

function registerServiceWorker() {
    return navigator.serviceWorker.register("/sw.js");
}

export {
    displayNotification,
    isPushNotificationSupported,
    askUserPermission,
    registerServiceWorker,
}
