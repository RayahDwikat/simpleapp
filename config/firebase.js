import * as firebase from 'firebase';

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCC9xH9JZ4q-qoqx4gTrlPZ3disKfBIQbo",
    authDomain: "simpleapp-4dc07.firebaseapp.com",
    databaseURL: "https://simpleapp-4dc07.firebaseio.com",
    projectId: "simpleapp-4dc07",
    storageBucket: "simpleapp-4dc07.appspot.com",
    messagingSenderId: "201567134097",
    appId: "1:201567134097:web:e1e46b378fe480c5813a30"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();