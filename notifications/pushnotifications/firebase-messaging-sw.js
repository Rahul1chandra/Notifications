importScripts("https://www.gstatic.com/firebasejs/4.1.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/4.1.1/firebase-messaging.js");
  var config = {
    apiKey: "AIzaSyCykFKzz4wXx9hZw85HhuLO1UUA1Bal-cY",
    authDomain: "test-d786b.firebaseapp.com",
    databaseURL: "https://test-d786b.firebaseio.com",
    projectId: "test-d786b",
    storageBucket: "test-d786b.appspot.com",
    messagingSenderId: "626851496668"
  };

  firebase.initializeApp(config);
  const messaging = firebase.messaging();
