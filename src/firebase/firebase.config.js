// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,
    apiKey: "AIzaSyA7t_H2pXERHmDIu1Mk0tE2oFnliuh-AJs",
    authDomain: "resellerhub-assignment-12.firebaseapp.com",
    projectId: "resellerhub-assignment-12",
    storageBucket: "resellerhub-assignment-12.appspot.com",
    messagingSenderId: "485564549871",
    appId: "1:485564549871:web:1842668ecbf550ec87691a"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;