import React from 'react'
import { FirebaseApp } from 'firebase/app';
// import firebase from 'firebase/app'
// import 'firebase/firestore'

// import 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

 
const firebaseConfig = {
    apiKey: "AIzaSyDnnaBLrAj57KjmmSma4d9NDTeX74nDB3o",
    authDomain: "crwn-db-99e83.firebaseapp.com",
    projectId: "crwn-db-99e83",
    storageBucket: "crwn-db-99e83.appspot.com",
    messagingSenderId: "397342480115",
    appId: "1:397342480115:web:419bc145a51a7ce6494986",
    measurementId: "G-SL77J2R2Y4"
};
 
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore =firebase.firestore()
const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider)
export default firebase;