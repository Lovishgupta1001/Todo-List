import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCYFjRkXQFmXAoHEJs6sI5bUnQEeP2_mPI",
    authDomain: "todos-88b3d.firebaseapp.com",
    projectId: "todos-88b3d",
    storageBucket: "todos-88b3d.appspot.com",
    messagingSenderId: "438212100117",
    appId: "1:438212100117:web:538de326b7d512ee1b0e1c"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };