// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { browserPopupRedirectResolver, browserSessionPersistence, getAuth, initializeAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZtER3cllzBpl6I_NlXCmvz9_UwnbsQE8",
  authDomain: "quizify-dot.firebaseapp.com",
  projectId: "quizify-dot",
  storageBucket: "quizify-dot.firebasestorage.app",
  messagingSenderId: "813831708598",
  appId: "1:813831708598:web:4891a6dc3d167ee8872b17",
  measurementId: "G-KXM9MY4D66"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = initializeAuth(app,{
  persistence: browserSessionPersistence,
  popupRedirectResolver: browserPopupRedirectResolver,
})