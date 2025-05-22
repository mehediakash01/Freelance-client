import React, { Children, createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase.config";
import Swal from "sweetalert2";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [myTasks, setMyTasks] = useState([]);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  // create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login User
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // signUp/login with google
  const continueWithGoogle = () => {
    return signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "login successful",
          showConfirmButton: false,
          timer: 1500,
        });
        return user;
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error?.code || "Login Error",
          text: error?.message || "Something went wrong",
        });
      });
  };

  // signOut user

  const logOut = () => {
    return signOut(auth)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign out successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error?.code || "Login Error",
          text: error?.message || "Something went wrong",
        });
      });
  };

  // update user profile
  const UpdateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  // setUp the UserState

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const userInfo = {
    createUser,
    loginUser,
    continueWithGoogle,
    user,
    setUser,
    isLoading,
    setLoading,
    UpdateUser,
    logOut,
    myTasks,
    setMyTasks,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
