
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// client/src/firebase.js
const firebaseConfig = {
  apiKey: "YOUR_NEW_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "XXXXXXX",
  appId: "XXXXXXXXXX"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
