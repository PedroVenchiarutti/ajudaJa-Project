// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc5T4qPpktv7Q-fvjZTlgyQ0uKC7hXfWs",
  authDomain: "ajudaja-b3740.firebaseapp.com",
  projectId: "ajudaja-b3740",
  storageBucket: "ajudaja-b3740.appspot.com",
  messagingSenderId: "1071885231999",
  appId: "1:1071885231999:web:555069672ef657d6aedc4a",
  measurementId: "G-LK09Y8S9B3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);