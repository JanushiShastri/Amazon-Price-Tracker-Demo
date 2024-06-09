
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBozwmFLNB6ntUSGZRAICAHSgRcwKo3560",
    authDomain: "pricetrackerdemo-a5979.firebaseapp.com",
    projectId: "pricetrackerdemo-a5979",
    storageBucket: "pricetrackerdemo-a5979.appspot.com",
    messagingSenderId: "305680103804",
    appId: "1:305680103804:web:f9401364ae61d779f54cf9",
    measurementId: "G-FMGZXNZ26N"
  };
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

//intializing firebase store
const db = getFirestore(app);

export { auth,db };
