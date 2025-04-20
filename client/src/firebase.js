// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: ,
//     authDomain: "resume-builder-97419.firebaseapp.com",
//     projectId: "resume-builder-97419",
//     storageBucket: "resume-builder-97419.appspot.com",
//     messagingSenderId: "1049637171309",
//     appId: "1:1049637171309:web:309feb043ca848892b8f64",
//     measurementId: "G-FMVD6HHJMR"
// };

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "photoframe-36904.firebaseapp.com",
    projectId: "photoframe-36904",
    storageBucket: "photoframe-36904.firebasestorage.app",
    messagingSenderId: "1064640457153",
    appId: "1:1064640457153:web:426a7a1c259e324aaca740",
    measurementId: "G-TV01J6GD1P"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);