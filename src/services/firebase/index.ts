import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getDatabase, ref, DataSnapshot } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBuP26lQbWkl5pD66ZrsXZjOtB9Lt47aUQ",
  authDomain: "claire-dev-87971.firebaseapp.com",
  databaseURL: "https://claire-dev-87971-default-rtdb.firebaseio.com",
  projectId: "claire-dev-87971",
  storageBucket: "claire-dev-87971.appspot.com",
  messagingSenderId: "790428269592",
  appId: "1:790428269592:web:2b8feb0fe730168ac3576d",
  measurementId: "G-94C5TQD588"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp); // For Authentication
const fireStore = getFirestore(firebaseApp); // For Using Database
const dbRef = ref(getDatabase());
const realtimeDB = (name: string) => ref(getDatabase(), name);

export { auth, fireStore, dbRef, realtimeDB, DataSnapshot };