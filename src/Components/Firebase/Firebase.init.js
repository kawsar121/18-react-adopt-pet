// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-MfOd9dpzKerDALgvsa-LRmA8kv3uL6c",
  authDomain: "adopt-pet-e3de9.firebaseapp.com",
  projectId: "adopt-pet-e3de9",
  storageBucket: "adopt-pet-e3de9.firebasestorage.app",
  messagingSenderId: "952499470840",
  appId: "1:952499470840:web:6e8d878d5438b7a125d60d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);