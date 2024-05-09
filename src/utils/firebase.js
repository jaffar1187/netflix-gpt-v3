// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM5BvG8ZNDoAlxGbqJ-8BKNZfqsnjWGzs",
  authDomain: "netflix-gpt-c77a1.firebaseapp.com",
  projectId: "netflix-gpt-c77a1",
  storageBucket: "netflix-gpt-c77a1.appspot.com",
  messagingSenderId: "760206630664",
  appId: "1:760206630664:web:0b2c7bc5cff121dd9a56bd",
  measurementId: "G-84C78FKHYX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export default auth;
