// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcuRCfebvNrIA3ajaglITRZHPBspw57P0",
  authDomain: "vue-firebase-1adf2.firebaseapp.com",
  projectId: "vue-firebase-1adf2",
  storageBucket: "vue-firebase-1adf2.firebasestorage.app",
  messagingSenderId: "1035753434822",
  appId: "1:1035753434822:web:e2bcf177c24f7d182071c7",
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
