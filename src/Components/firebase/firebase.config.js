// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXFXvAU2P_-CojhMkl3F8f929g-x3kWxA",
  authDomain: "sun-media-auth.firebaseapp.com",
  projectId: "sun-media-auth",
  storageBucket: "sun-media-auth.appspot.com",
  messagingSenderId: "398171317488",
  appId: "1:398171317488:web:1ef56d1a6bb03a10b3ce35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;