import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDfCv3GBllOjXr0F3eFrWuk2GFc2YYplKk",
  authDomain: "practicas-react-js.firebaseapp.com",
  projectId: "practicas-react-js",
  storageBucket: "practicas-react-js.appspot.com",
  messagingSenderId: "132155677348",
  appId: "1:132155677348:web:12bc9ae39a386d92f1a431"
};
var app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();
const get_auth = getAuth();
var database ={
    firebase,
    db,
    get_auth,
    auth
}
export default database;