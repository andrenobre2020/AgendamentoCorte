import { initializeApp } from "firebase/app";
require('firebase/database');
import Firebase from 'firebase/compat/app';
<><script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-auth.js"></script><script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-database.js"></script></>
import 'firebase/database'; 
require('@firebase/auth');  
require('@firebase/database');  


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDB7zMvTvbBmAXzyLCIrGd5_cEG29ED3zI",
    authDomain: "barbershop-f6b18.firebaseapp.com",
    projectId: "barbershop-f6b18",
    storageBucket: "barbershop-f6b18.appspot.com",
    messagingSenderId: "387909084116",
    appId: "1:387909084116:web:6a0cb4a5c4a56c5b64ac41",
    measurementId: "G-8FG35XPXL5"
  };
  
// Initialize Firebase
export default Firebase.initializeApp(firebaseConfig);