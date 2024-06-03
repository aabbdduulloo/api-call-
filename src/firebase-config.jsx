// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL_5Bpk6R8Z3vGxStajIo3-jNdWCDl8zo",
  authDomain: "react-firebase-e3b9d.firebaseapp.com",
  projectId: "react-firebase-e3b9d",
  storageBucket: "react-firebase-e3b9d.appspot.com",
  messagingSenderId: "466273955064",
  appId: "1:466273955064:web:aa71fb940399baf3df1f0d",
  measurementId: "G-1V3VLJY0DT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
