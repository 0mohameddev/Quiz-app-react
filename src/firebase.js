// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3AvPClbQkfAqnaI-YRIEk28G79vawNOk",
  authDomain: "loginform-beaec.firebaseapp.com",
  projectId: "loginform-beaec",
  storageBucket: "loginform-beaec.appspot.com",
  messagingSenderId: "1013421793255",
  appId: "1:1013421793255:web:bb1956fdad0bd768282742"
};

// Initialize Firebase
const fireapp = initializeApp(firebaseConfig);
export default fireapp;