// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChvbUzWwlcyvq09jkQ79tTBZw_Lx5CS_E",
    authDomain: "omar-photography.firebaseapp.com",
    projectId: "omar-photography",
    storageBucket: "omar-photography.appspot.com",
    messagingSenderId: "192549353935",
    appId: "1:192549353935:web:4bbc4c4ee548f3a90ebaba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;