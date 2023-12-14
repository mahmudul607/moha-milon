// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGUevajNAdR819hgu4QmfWDDj7S832k3M",
  authDomain: "moha-milon-d89f7.firebaseapp.com",
  projectId: "moha-milon-d89f7",
  storageBucket: "moha-milon-d89f7.appspot.com",
  messagingSenderId: "1080039401233",
  appId: "1:1080039401233:web:471f6581d1f2f599d54eb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 export default auth;
