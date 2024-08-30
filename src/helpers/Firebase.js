// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDi13FwKqn_c81fNHMrexruivXWfqBQsdg",
    authDomain: "animedatabase-e645c.firebaseapp.com",
    projectId: "animedatabase-e645c",
    storageBucket: "animedatabase-e645c.appspot.com",
    messagingSenderId: "1022490792601",
    appId: "1:1022490792601:web:0ad7d3fbe4da1e03eade08",
    measurementId: "G-601N4DRX63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

