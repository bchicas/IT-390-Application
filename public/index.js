import firebase from "firebase/app";
import "firebase/auth";
import "firebaseui/dist/firebaseui.css";
import * as firebaseui from "firebaseui";
const firebaseConfig = {
  apiKey: "AIzaSyCL5XSNiNJ6rZBora7WfhlecToSJO8p8Mo",
  authDomain: "bookworm-12345.firebaseapp.com",
  projectId: "bookworm-12345",
  storageBucket: "bookworm-12345.appspot.com",
  messagingSenderId: "1015960933719",
  appId: "1:1015960933719:web:a6e9de27a3d48f3b91da12",
  measurementId: "G-BSDLSJYQC7",
};

firebase.initializeApp(firebaseConfig);

const ui = new firebaseui.auth.AuthUI(firebase.auth());

document.getElementById("google-sign-in-btn").addEventListener("click", () => {
  ui.start("#firebaseui-auth-container", {
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    // Other FirebaseUI auth options...
  });
});
