import { authService, firebaseInstance } from "fbase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "firebase";
import React, { useState } from "react";
import AuthForm from "components/AuthForm";

const Auth = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      // Google Authentication
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };
  return (
    <div>
      <AuthForm />
      <div>
        <button onClick={onSocialClick} name="google">
          Continue with Google
        </button>
      </div>
    </div>
  );
};
export default Auth;
