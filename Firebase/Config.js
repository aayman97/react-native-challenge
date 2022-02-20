import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

import {getAuth} from 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDLr5ESH7WAeVr6chB0TCOEXrObGgietd0",
    authDomain: "phone-contacts-5a5e1.firebaseapp.com",
    projectId: "phone-contacts-5a5e1",
    storageBucket: "phone-contacts-5a5e1.appspot.com",
    messagingSenderId: "3520579866",
    appId: "1:3520579866:web:e4762ce04b3563e36d84a3",
    measurementId: "G-GZTQWWB0R4"
  };
  // Initialize Firebase



var app =  initializeApp(firebaseConfig);
var firebaseAuth = getAuth(app)
var projectFirestore = getFirestore(app)




export {projectFirestore,firebaseAuth}