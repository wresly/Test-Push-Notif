self.addEventListener('push', (event) => {
    const notification = event.data.json();
    // {"title":"Informasi Kelas" , "body":"Kosong 1, Terisi 32" , "url":"./?message=123"}
    event.waitUntil(self.registration.showNotification(notification.title, {
        body: notification.body,
        icon: "icon.png",
        data: {
            notifURL: notification.url
        }
    }));

    self.addEventListener("notificationclick", (event) => {
        event.waitUntil(clients.openWindow(event.notification.data.notifURL));
    });
})

