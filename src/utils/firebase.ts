// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIiUPFkCfvHg-MiOrv7gU-QpO9h4Qwo1M",
  authDomain: "netflix-gpt-c8080.firebaseapp.com",
  projectId: "netflix-gpt-c8080",
  storageBucket: "netflix-gpt-c8080.appspot.com",
  messagingSenderId: "130615411058",
  appId: "1:130615411058:web:2d78a4ce51dd2ed43fddeb",
  measurementId: "G-Y66XSENJ16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);