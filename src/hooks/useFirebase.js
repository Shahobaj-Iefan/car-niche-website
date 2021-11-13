import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  //register user
  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // send name to firebase after user creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch(error => {});
        history.replace("/");
      })
      .catch(error => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //Login user
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setAuthError("");
      })
      .catch(error => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // sign in with google
  // if i needed i can take history and location parameter
  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        const user = result.user;
        setAuthError("");
      })
      .catch(error => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // user observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        const uid = user.uid;
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  // sign out user
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch(error => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };
  return {
    user,
    authError,
    registerUser,
    logOut,
    loginUser,
    isLoading,
    signInWithGoogle,
  };
};
export default useFirebase;
