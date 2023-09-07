// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCy6DUQCMfuWHail2X0sJhLk12HDYh1JD0",
  authDomain: "linkedin-ce5ff.firebaseapp.com",
  projectId: "linkedin-ce5ff",
  storageBucket: "linkedin-ce5ff.appspot.com",
  messagingSenderId: "175131170927",
  appId: "1:175131170927:web:c42f353a3e00e92a82d59a",
  measurementId: "G-DMZ96JZE84",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
