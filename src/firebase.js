import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD27EItNttZelBFgU8q1jwq_BX4iy-XzrA',
  authDomain: 'react-auth-11f32.firebaseapp.com',
  databaseURL: 'https://react-auth-11f32.firebaseio.com',
  projectId: 'react-auth-11f32',
  storageBucket: 'react-auth-11f32.appspot.com',
  messagingSenderId: '948851621244',
  appId: '1:948851621244:web:03ed3b9b68338ef35538f9'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export function googleAuthProvider() {
  var provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => {
      return result;
    });
}

export function logout() {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
}

export function onAuthStateChanged(callback) {
  return firebase.auth().onAuthStateChanged(function(auth) {
    callback(auth)
  });
}


export const db = firebase.firestore();
