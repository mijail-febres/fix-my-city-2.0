import { useEffect, useState } from "react";
import { fetchIssues, fetchProfileInfo } from "../src/Axios/fetches";

  //check in console whether the service worker exists and push notifications are possible
  function isPushNotificationSupported(){return "serviceWorker" in navigator && "PushManager" in window}

  console.log(isPushNotificationSupported()); 
  
  //push notification to ask user to allow for further notifications
  async function askUserPermission() {
      return await Notification.requestPermission();
    }
  askUserPermission();
  
  //display 
  function displayInstallNotification() {
    if (Notification.permission === 'granted') {
      navigator.serviceWorker.getRegistration().then(function(reg) {
        var options = {
          body: 'You can now install Fix My City on your home screen!', //adds main description to notification
          vibrate: [100, 50, 100], //vibrate pattern for phone receiving notification
          data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
          },
        };
        console.log ("display install notification");
        reg.showNotification('Add to Home Screen', options);
      });
    }
  }


  // const NearbyIssues = () => {
    // const [currentUser, setCurrentUser] = useState(null);

  
    // useEffect(() => {
    //   async function fetchNearIssues() {
    //     const profileInfo = await fetchProfileInfo();
    //     setCurrentUser(profileInfo);

    //     const latitude = currentUser.latitude;
    //     const longitude = currentUser.longitude;

    //     const issues = await fetchIssues()
        
    //     if (issues.latitude - latitude <= 50 && issues.longitude - longitude <=50) {
    //       displayNearbyIssueNotification()
    //     }
    //   }
    //   fetchNearIssues();
    // }, []);

    function displayNearbyIssueNotification() {
      if (Notification.permission === 'granted') 
        navigator.serviceWorker.getRegistration().then(function(reg) {
          var options = {
            body: 'An issue was posted in your neighborhood', //adds main description to notification
            vibrate: [100, 50, 100], //vibrate pattern for phone receiving notification
            data: {
              dateOfArrival: Date.now(),
              primaryKey: 2
            },
            requireInteraction: true,
            actions: [
              {action: 'ok', title: 'OK, I check the map!'},
              {action: 'no', title: 'Not now'},
            ]
          };
          console.log ("display issue notification");
          reg.showNotification('Issue Nearby!', options);
        });
      }
    displayNearbyIssueNotification();
  // };


function registerServiceWorker() {
      return navigator.serviceWorker.register("/sw.js");
  }
  
export {
      isPushNotificationSupported,
      askUserPermission,
      displayInstallNotification,
      //NearbyIssues,
      //displayNearbyIssueNotification,
      registerServiceWorker,
}
