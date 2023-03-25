import { initializeApp } from 'firebase/app';
import { getAuth ,signInWithEmailAndPassword} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE7kmh4bHnLHs7GFMqtpwtAf9oRDZeA_E",
  authDomain: "fir-1a20f.firebaseapp.com",
  projectId: "fir-1a20f",
  storageBucket: "fir-1a20f.appspot.com",
  messagingSenderId: "164271859563",
  appId: "1:164271859563:web:18b9ecf3d43dc0ea2ece2e",
  measurementId: "G-S6718B4D6B"
};

const firebaseApp = initializeApp(firebaseConfig); 

const db=getFirestore(firebaseApp);
const auth = getAuth();
const signInEmailAndPassword=signInWithEmailAndPassword();

export {db,auth,signInEmailAndPassword}; 