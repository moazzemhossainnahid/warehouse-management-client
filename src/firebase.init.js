// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSrwsYieKUJv3XsZMmYEaIo7Wm4ttOjSM",
  authDomain: "vegetables-planet.firebaseapp.com",
  projectId: "vegetables-planet",
  storageBucket: "vegetables-planet.appspot.com",
  messagingSenderId: "654271735289",
  appId: "1:654271735289:web:b202c64d63cf172d458928",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;





// apiKey: "AIzaSyBSrwsYieKUJv3XsZMmYEaIo7Wm4ttOjSM",
// authDomain: "vegetables-planet.firebaseapp.com",
// projectId: "vegetables-planet",
// storageBucket: "vegetables-planet.appspot.com",
// messagingSenderId: "654271735289",
// appId: "1:654271735289:web:b202c64d63cf172d458928",