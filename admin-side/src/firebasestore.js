// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMC7uHTRDoG64fjtKA5ShhpahtYqzCj9M",
  authDomain: "shop-web-6eba5.firebaseapp.com",
  projectId: "shop-web-6eba5",
  storageBucket: "shop-web-6eba5.appspot.com",
  messagingSenderId: "671997725604",
  appId: "1:671997725604:web:1f87261f0148f1d1af0f31",
  measurementId: "G-CVTQ5RE0RM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;