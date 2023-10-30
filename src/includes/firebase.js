import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRE2NNH4ZAgIdWDrJejYPxc0ZoC1yPUU4",
  authDomain: "music-66501.firebaseapp.com",
  projectId: "music-66501",
  storageBucket: "music-66501.appspot.com",
  appId: "1:29975798349:web:dd9927b57158834fbff204",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection("users");

export { auth, db, usersCollection };
