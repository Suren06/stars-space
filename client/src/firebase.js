// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "stars-space-18980.firebaseapp.com",
  projectId: "stars-space-18980",
  storageBucket: "stars-space-18980.appspot.com",
  messagingSenderId: "189999973259",
  appId: "1:189999973259:web:1bb2022b3dc013d0afe58e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

