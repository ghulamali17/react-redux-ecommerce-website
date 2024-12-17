// Import the functions you need from the SDKs you need
import { initializeApp,  } from "firebase/app";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZpZWIJ0mLgOqAzMC5jMbBdOgAgn_rL2M",
  authDomain: "ecommerce-19ff4.firebaseapp.com",
  projectId: "ecommerce-19ff4",
  storageBucket: "ecommerce-19ff4.firebasestorage.app",
  messagingSenderId: "521272247200",
  appId: "1:521272247200:web:7996007c1a00fe39ecdac5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {
  app,
  getAuth, 
  onAuthStateChanged,
  createUserWithEmailAndPassword
}