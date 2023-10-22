// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDetEU1WcjRfQ5G0t86U3YBJpFXKOrH3o8",
  authDomain: "native-hw-49fee.firebaseapp.com",
  projectId: "native-hw-49fee",
  storageBucket: "native-hw-49fee.appspot.com",
  messagingSenderId: "486130567857",
  appId: "1:486130567857:web:9753bb532a95c0df3f3090",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// export const auth = getAuth(app)
export const db = getFirestore(app);
export const myStorage = getStorage(app);
