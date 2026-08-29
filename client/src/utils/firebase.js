
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-4a099.firebaseapp.com",
  projectId: "interviewiq-4a099",
  storageBucket: "interviewiq-4a099.firebasestorage.app",
  messagingSenderId: "883100559908",
  appId: "1:883100559908:web:33a6bf5346ad1518bc46b1"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export {auth , provider}