import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyDUwUB-hya3qSK-C9PHpuxSC7o0SNxkel4",
    authDomain: "netflix-fec06.firebaseapp.com",
    projectId: "netflix-fec06",
    storageBucket: "netflix-fec06.appspot.com",
    messagingSenderId: "79022342540",
    appId: "1:79022342540:web:ddad00e5a772f8f65f96a9",
    measurementId: "G-XS4JSHB2LP"
  };
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth,provider};
