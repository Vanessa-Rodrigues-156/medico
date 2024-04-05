//config file 
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import firebase from "firebase"; 
// Import the 'firebase' module
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBobX-SSAObkkLFvU9riiL8hcXMwYNWS0g",
  authDomain: "medico-d8d7d.firebaseapp.com",
  projectId: "medico-d8d7d",
  storageBucket: "medico-d8d7d.appspot.com",
  messagingSenderId: "882756049242",
  appId: "1:882756049242:web:bdd6f1316bd353b4027b63",
  measurementId: "G-K792X9BTNN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

