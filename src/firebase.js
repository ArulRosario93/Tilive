// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// import firebase from "firebase";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFPKU8yrKG_KacJD2O-3y1j_vrSXyyUsY",
  authDomain: "upload-img-vid.firebaseapp.com",
  projectId: "upload-img-vid",
  storageBucket: "upload-img-vid.appspot.com",
  messagingSenderId: "941312954631",
  appId: "1:941312954631:web:9a535530ab5b365fddf5a2",
  measurementId: "G-LKY5M9N3LT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebasee = getFirestore(app);
export const storage  = getStorage(app);