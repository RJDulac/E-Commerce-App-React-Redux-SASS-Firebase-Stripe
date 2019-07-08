import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCAyzC1Y-w-lNt9LjuPosgoeN19L3Ouwuk",
  authDomain: "crwn-db-94217.firebaseapp.com",
  databaseURL: "https://crwn-db-94217.firebaseio.com",
  projectId: "crwn-db-94217",
  storageBucket: "",
  messagingSenderId: "953244226021",
  appId: "1:953244226021:web:2cfbb15a01e613c4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
