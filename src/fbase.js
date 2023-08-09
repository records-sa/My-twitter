import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STRAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MASSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);

export const firebaseInstance = firebaseConfig;
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const authService = firebase.auth();
