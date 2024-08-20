// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy6pI6uVN7hgMELHq8R_r-Nfzeei_GDSU",
  authDomain: "portfolio-site-649c8.firebaseapp.com",
  projectId: "portfolio-site-649c8",
  storageBucket: "portfolio-site-649c8.appspot.com",
  messagingSenderId: "818159082001",
  appId: "1:818159082001:web:f355b4c6210be30c336fb0",
  measurementId: "G-R4H4GH3SL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);