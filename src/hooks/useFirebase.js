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
  const [admin, setAdmin] = useState(false);

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
        //save to data base
        saveUser(email, name, "POST");

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
        saveUser(user.email, user.displayName, "PUT");
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

  //make admin state
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin));
  }, [user.email]);

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
  //send and save user to database
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    admin,
    authError,
    registerUser,
    logOut,
    loginUser,
    isLoading,
    signInWithGoogle,
  };
};
export default useFirebase;
