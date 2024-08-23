import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCaAgC0kynSvpKd6NYIFcA6Rypk6dzYKpk",
  authDomain: "fir-basic-8c73a.firebaseapp.com",
  projectId: "fir-basic-8c73a",
  storageBucket: "fir-basic-8c73a.appspot.com",
  messagingSenderId: "970377963470",
  appId: "1:970377963470:web:f5d31f689da9aaa00c6d9f",
  measurementId: "G-ZE6H4MHFF3"
};


export const app = initializeApp(firebaseConfig);
export const fireStore = getFirestore(app);
export const storage  = getStorage(app);
// const analytics = getAnalytics(app);