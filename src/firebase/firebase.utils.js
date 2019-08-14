import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDoOPIgQEfiXXO5gNmMIIN9SYVOP44yn70",
    authDomain: "crwn-db-cf909.firebaseapp.com",
    databaseURL: "https://crwn-db-cf909.firebaseio.com",
    projectId: "crwn-db-cf909",
    storageBucket: "",
    messagingSenderId: "1049692996378",
    appId: "1:1049692996378:web:d968fe415ed42286"
};
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;