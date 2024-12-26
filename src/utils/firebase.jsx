// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuZ3AmE3rovDqPhyNH2vmOfhFgq2kI7FU",
  authDomain: "netflix-search-2ffd4.firebaseapp.com",
  projectId: "netflix-search-2ffd4",
  storageBucket: "netflix-search-2ffd4.firebasestorage.app",
  messagingSenderId: "610725116378",
  appId: "1:610725116378:web:6c839c3d0c15eb69ab28e3",
  measurementId: "G-2JY5634BJL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
