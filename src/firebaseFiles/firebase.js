import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCfrj364XdQGKkX0gsNA2l0LWs1JJSaQ1I",
  authDomain: "moody-e6de7.firebaseapp.com",
  projectId: "moody-e6de7",
  storageBucket: "moody-e6de7.firebasestorage.app",
};


// Initialized Firebase app
const app = initializeApp(firebaseConfig);


// Firebase Authentication
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Firestore Database
const db = getFirestore(app);
const postsCollection = collection(db, "posts"); // Updated to match new approach

const projectId = app.options.projectId;

export {
  auth,
  createUserWithEmailAndPassword,
  googleProvider,
  signInWithPopup,
  signOut,
  projectId,
  db,
  postsCollection,
};


