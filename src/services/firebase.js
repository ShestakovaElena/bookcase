import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBDbyWJvuTlvpWeHq6zYB5WU2SxQDqSVn4",
    authDomain: "bookcase-app-674c9.firebaseapp.com",
    databaseURL: "https://bookcase-app-674c9.firebaseio.com",
    projectId: "bookcase-app-674c9",
    storageBucket: "bookcase-app-674c9.appspot.com",
    messagingSenderId: "791331072173",
    appId: "1:791331072173:web:511e636ad8e660f6cbbe24"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth()
  export const db = firebase.firestore()

  export default firebase.firestore();
  
