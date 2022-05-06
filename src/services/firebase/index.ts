import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { firebaseConfig } from "@/config/index";
import { getDatabase, ref, DataSnapshot} from "firebase/database";
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp); // For Authentication
const fireStore = getFirestore(firebaseApp); // For Using Database
const dbRef = ref(getDatabase());
const realtimeDB = (name: string) => ref(getDatabase(), name);

export { auth, fireStore, dbRef, realtimeDB, DataSnapshot };