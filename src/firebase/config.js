// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDD4EouWpIVA39Fy0TP-8dR35CB7geVCQ",
    authDomain: "hexxa-protocol.firebaseapp.com",
    projectId: "hexxa-protocol",
    storageBucket: "hexxa-protocol.firebasestorage.app",
    messagingSenderId: "330162384777",
    appId: "1:330162384777:web:e98a1fd819708d7198bb58",
    measurementId: "G-2F3752L6GG"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Make sure we're exporting db properly
export { app, auth, db };

