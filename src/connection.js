// This file is used to connect to the Firebase database
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Remove the unused import statement
// import dotenv from 'dotenv';
export const firebaseConfig = {
  apiKey: "AIzaSyBobX-SSAObkkLFvU9riiL8hcXMwYNWS0g",
  //apiKey: process.env.API_KEY,
  authDomain: "medico-d8d7d.firebaseapp.com",
  projectId: "medico-d8d7d",
  storageBucket: "medico-d8d7d.appspot.com",
  messagingSenderId: "882756049242",
  appId: "1:882756049242:web:bdd6f1316bd353b4027b63",
  measurementId: "G-K792X9BTNN"
};

// Initialize Firebase
export const dbapp = initializeApp(firebaseConfig);
export const db = getFirestore(dbapp);
export const auth = getAuth(dbapp);

