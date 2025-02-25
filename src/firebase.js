// src/firebase.js

// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyBtmsju6LaKVDJCEYTvMwHA8-42EUW0CqU",
  authDomain: "class-4b894.firebaseapp.com",
  projectId: "class-4b894",
  storageBucket: "class-4b894.appspot.com",
  messagingSenderId: "165266333133",
  appId: "1:165266333133:web:52391b90439bc7128f3884",
  measurementId: "G-WTR2PPTQ1G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
