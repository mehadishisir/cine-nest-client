// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhqr-4A-AH-IL3ou1LRrnKcgbURlcihJw",
  authDomain: "cine-nest-22375.firebaseapp.com",
  projectId: "cine-nest-22375",
  storageBucket: "cine-nest-22375.firebasestorage.app",
  messagingSenderId: "229899354331",
  appId: "1:229899354331:web:592c6d4f9473d8cb058cfe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
