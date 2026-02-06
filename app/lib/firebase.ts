import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDi1l1cih0OZ2uA4t9NWr9DwN5E7CyjVQ",
  authDomain: "akhil-1234.firebaseapp.com",
  projectId: "akhil-1234",
  storageBucket: "akhil-1234.firebasestorage.app",
  messagingSenderId: "567856804563",
  appId: "1:567856804563:web:c89864cfdc8f812f815a26",
};

// ✅ Safe init for Next.js
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
