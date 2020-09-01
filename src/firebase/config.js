import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyBRx497VJOwoFhE2I7E9N5GPtYP2b6qpdo",
    authDomain: "book-shop-d54f0.firebaseapp.com",
    databaseURL: "https://book-shop-d54f0.firebaseio.com",
    projectId: "book-shop-d54f0",
    storageBucket: "book-shop-d54f0.appspot.com",
    messagingSenderId: "751494982672",
    appId: "1:751494982672:web:9fb9694524ecf1195a2e95",
    measurementId: "G-VDV5FVLMZV"
  };

// Initialize Firebase
export const fire = firebase.initializeApp(firebaseConfig);
