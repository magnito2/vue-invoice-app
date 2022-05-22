// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcGqIhd2JolR_QN8w18164oEpQuOeQeuw",
  authDomain: "invoice-app-19a6b.firebaseapp.com",
  projectId: "invoice-app-19a6b",
  storageBucket: "invoice-app-19a6b.appspot.com",
  messagingSenderId: "382347098095",
  appId: "1:382347098095:web:f42a2e98a56fda5aeaa81a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export default db;