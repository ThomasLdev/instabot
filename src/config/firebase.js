import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBy8QUIUfIfQW4pmOpBa1X6fGHaZWSI338",
  authDomain: "instabot-f86d1.firebaseapp.com",
  projectId: "instabot-f86d1",
  storageBucket: "instabot-f86d1.appspot.com",
  messagingSenderId: "138138087485",
  appId: "1:138138087485:web:4da2a9997529203de97a54"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const db = getFirestore(app);