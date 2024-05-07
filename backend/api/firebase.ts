import { initializeApp } from "firebase/app";
import { getFirestore,collection } from "firebase/firestore";
import { firebaseConfig } from "./firebase-config";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const requestDemoCollection = collection(db, "requestDemo");