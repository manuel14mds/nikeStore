// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcchnc0c5ejSfRkmgpJQEYHRbIt-JAp4k",
    authDomain: "ecomerce-9cfe2.firebaseapp.com",
    projectId: "ecomerce-9cfe2",
    storageBucket: "ecomerce-9cfe2.appspot.com",
    messagingSenderId: "1032831956122",
    appId: "1:1032831956122:web:e95b14d2a058e9bdc19b23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return(
        app
    )
}