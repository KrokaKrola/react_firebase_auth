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

export function createUserWithEmailAndPassword(data) {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(data.email, data.password)
    .then(result => {
      const {user} = result;
      user.updateProfile({
        displayName: data.displayName,
        photoURL: data.photoURL
      })
      return user;
    })
    .catch(function(error) {
      // Handle Errors here.
      console.error(`Code: ${error.code}`, `Message: ${error.message}`);
    });
}

export function signInWithEmailAndPassword(data) {
  return firebase
    .auth()
    .signInWithEmailAndPassword(data.email, data.password)
    .catch(function(error) {
      console.error(`Code: ${error.code}`, `Message: ${error.message}`);
    });
}

export function logout() {
  firebase
    .auth()
    .signOut()
    .catch(function(error) {
      console.error(error);
    });
}

export function onAuthStateChanged(callback) {
  return firebase.auth().onAuthStateChanged(function(auth) {
    callback(auth);
  });
}

export function setUser(data) {
  const document = db.doc(`/users/${data.uid}`);
  document.get().then(doc => {
    if (!doc.exists) {
      document.set({ data }, { merge: true });
      console.log('set user into db');
    }
  });
}

export function getUser(uid) {
  return db.doc(`/users/${uid}`).get().then(doc => {
    if(doc.exists) {
      return doc.data();
    }
  })
}

export const db = firebase.firestore();
