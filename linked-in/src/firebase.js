// import firebase  from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyC7c815UmR5uGAu2jBtCcBCsEVgvMhZMLM",
  authDomain: "linkedin-16c50.firebaseapp.com",
  projectId: "linkedin-16c50",
  storageBucket: "linkedin-16c50.appspot.com",
  messagingSenderId: "500651930376",
  appId: "1:500651930376:web:d85fde573b104481acf2bd"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth =firebase.auth();

  export {db, auth} ;
  