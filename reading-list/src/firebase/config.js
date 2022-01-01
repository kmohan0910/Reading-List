import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyALeUYBjVtZObj3dbhtFlk14gvxrqb5p-Y",
    authDomain: "myreading-list.firebaseapp.com",
    projectId: "myreading-list",
    storageBucket: "myreading-list.appspot.com",
    messagingSenderId: "708627217885",
    appId: "1:708627217885:web:b86a234732ba44b2340a34"
  };

  initializeApp(firebaseConfig)

  const db = getFirestore()
  const auth = getAuth()
  export {db , auth}