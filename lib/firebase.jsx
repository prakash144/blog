import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH9a5Mbxlj-HRSHVQOLQA0foK8-3p-wuk",
  authDomain: "blog-5b2fd.firebaseapp.com",
  projectId: "blog-5b2fd",
  storageBucket: "blog-5b2fd.appspot.com",
  messagingSenderId: "395993576339",
  appId: "1:395993576339:web:b5b874d955343793626e66",
  measurementId: "G-TQX77FL0F7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();