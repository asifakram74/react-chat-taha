/*
title - New message from Open Chat
icon - image URL from Flaticon
body - main content of the notification
*/
function sendNotification(message, user) {
    const notification = new Notification("New message from Open Chat", {
      icon: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
      body: `@${user}: ${message}`
    })
    notification.onclick = ()=> function() {
      window.open("http://localhost:3000/chat")
    }

    // document.onvisibilitychange = ()=> {
    //     console.log('checking document is hidden 1',document.hidden);

    //     if(document.hidden) {
    //         console.log('checking document is hidden',document.hidden);
    //       const notification = new Notification("New message from Open Chat", {
    //         icon: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
    //         body: `@${user}: ${message}`
    //       })
    //       notification.onclick = ()=> function() {
    //         window.open("http://localhost:3000/chat")
    //       }
    //     }
    // }  
}

export default function checkPageStatus(message, user){
    
    if(user !== localStorage.getItem("userName")) {
        if(!("Notification" in window)) {
            console.log('notificaiton not in window');
          alert("This browser does not support system notifications!")
        } else if(Notification.permission === "granted") {
            console.log('notificaiton granted in window');
          sendNotification(message, user)
        }else if(Notification.permission !== "denied") {
            console.log('notificaiton denied in window');

           Notification.requestPermission((permission)=> {
              if (permission === "granted") {
                sendNotification(message, user)
              }
           })
        }
      } 
}