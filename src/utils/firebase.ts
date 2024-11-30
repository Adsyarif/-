// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
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

if (app) {
  console.log("Firebase connected");
}

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = async () =>
  await signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export interface UserAuthProps {
  uid: string;
  displayName: string;
  email: string;
}

export const createUserDocumentFromAuth = async (
  userAuth: User,
  addtionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth?.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...addtionalInformation,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
