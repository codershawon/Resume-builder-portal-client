// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
console.log(import.meta.env.VITE_ApiKey)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_ApiKey,
  authDomain: import.meta.env.VITE_AuthDomain,
  projectId: import.meta.env.VITE_ProjectId,
  storageBucket: import.meta.env.VITE_StorageBucket,
  messagingSenderId: import.meta.env.VITE_MessagingSenderId,
  appId: import.meta.env.VITE_AppId,
  measurementId: import.meta.env.VITE_MeasurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;