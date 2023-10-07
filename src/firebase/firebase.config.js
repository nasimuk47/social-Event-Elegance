// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCH90JmVYFAJnT94-DAa1-AU4RkkyWHpw",
    authDomain: "social-event-elegance.firebaseapp.com",
    projectId: "social-event-elegance",
    storageBucket: "social-event-elegance.appspot.com",
    messagingSenderId: "790001912812",
    appId: "1:790001912812:web:48feeca6c603e59e610ec9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
