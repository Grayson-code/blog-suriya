// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNTa3rbeHATDfDLaT2CIZGZz5jUmOH0KA",
  authDomain: "blog-suriya.firebaseapp.com",
  projectId: "blog-suriya",
  storageBucket: "blog-suriya.appspot.com",
  messagingSenderId: "668641214817",
  appId: "1:668641214817:web:9c69bf9556938164718520",
  measurementId: "G-N7ZVEP40FP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)