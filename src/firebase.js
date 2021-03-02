// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDJrAApsv833x7AiNPItfErd_LaArFbvek",
    authDomain: "clone-7b6b9.firebaseapp.com",
    projectId: "clone-7b6b9",
    storageBucket: "clone-7b6b9.appspot.com",
    messagingSenderId: "73855330870",
    appId: "1:73855330870:web:11764b98fa4be4d9174697",
    measurementId: "G-QXEKY38S90"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};