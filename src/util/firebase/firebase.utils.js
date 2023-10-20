// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwW2U91NC9gsMvz-wXeEQ7QodMeI6OOPU",
  authDomain: "e-commerce-f82c9.firebaseapp.com",
  projectId: "e-commerce-f82c9",
  storageBucket: "e-commerce-f82c9.appspot.com",
  messagingSenderId: "799763545193",
  appId: "1:799763545193:web:ce80d1d7a37acf261336f8",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// forces users to select an account when interacting with providers
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();



// creating user documents in firestore db
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date(); //when signed in

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log(error);
    }
  }

  return userDocRef
};

// if user data exists, return userDocRef
// else create/set the document with the userdata using
