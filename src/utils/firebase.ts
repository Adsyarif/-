// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByJXdRi4wRcGLOERseYCPnlfl5OgqdHbU",
  authDomain: "dori-dori-d12c6.firebaseapp.com",
  projectId: "dori-dori-d12c6",
  storageBucket: "dori-dori-d12c6.firebasestorage.app",
  messagingSenderId: "1004686800589",
  appId: "1:1004686800589:web:8ec380fa89c015ddce1b84",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

const facebookProvider = new FacebookAuthProvider();
facebookProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithFacebookPopUp = () =>
  signInWithPopup(auth, facebookProvider);

export const db = getFirestore();

interface UserAuthProps {
  uid: string;
  displayName: string;
  email: string;
}

export const createUserDocumentFromAuth = async (userAuth: UserAuthProps) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return userDocRef;
};
