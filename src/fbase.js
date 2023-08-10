import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEHE9egQO1Uh0nnGt_Nzt_ZmbTMRMFQdQ",
  authDomain: "my-twitter-b8efe.firebaseapp.com",
  projectId: "my-twitter-b8efe",
  storageBucket: "my-twitter-b8efe.appspot.com",
  messagingSenderId: "508173721402",
  appId: "1:508173721402:web:f2ffba74d7a85181bbfa03",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export { createUserWithEmailAndPassword, signInWithEmailAndPassword };
// export { firebaseApp, auth };

// export const firebaseInstance = firebaseConfig;
// export const googleProvider = new firebase.auth.GoogleAuthProvider();
// export const authService = firebase.auth();
