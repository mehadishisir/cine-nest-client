import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
import { onAuthStateChanged } from "firebase/auth/web-extension";
export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // auth state change observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("Auth State Changed:", currentUser);
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
  }, []);
  const authInfo = {
    signIn,
    signUp,
    user,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
