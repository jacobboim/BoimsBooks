// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBD5KMsKlUq_QqorzR4_ibtiY1gVL5cr2Q",
  authDomain: "home-3120c.firebaseapp.com",
  projectId: "home-3120c",
  storageBucket: "home-3120c.appspot.com",
  messagingSenderId: "244399357693",
  appId: "1:244399357693:web:4bf87b6ec686676abf0894",
  measurementId: "G-BDZXBZTP71",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
