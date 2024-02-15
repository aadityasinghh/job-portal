// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc6icohL2DCwI3p64B5v8LoSjgLvRjhm0",
  authDomain: "pob-portal-96166.firebaseapp.com",
  projectId: "pob-portal-96166",
  storageBucket: "pob-portal-96166.appspot.com",
  messagingSenderId: "1054270569276",
  appId: "1:1054270569276:web:31f42318cd4a70aa41bc39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID
// };
