import { auth, db } from "./firebase";

export async function createUserWithEmailAndPassword(data) {
  try {
    let result = await auth().createUserWithEmailAndPassword(
      data.email,
      data.password
    );
    const { user } = result;
    await user.updateProfile({
      displayName: data.displayName,
      photoURL: data.photoURL
    });
    return user;
  } catch (error) {
    // Handle Errors here.
    console.error(`Code: ${error.code}`, `Message: ${error.message}`);
  }
}

export async function signInWithEmailAndPassword(data) {
  try {
    return auth().signInWithEmailAndPassword(data.email, data.password);
  } catch (error) {
    console.error(`Code: ${error.code}`, `Message: ${error.message}`);
  }
}

export function logout() {
  auth()
    .signOut()
    .catch(function(error) {
      console.error(error);
    });
}

export function onAuthStateChanged(callback) {
  return auth().onAuthStateChanged(function(auth) {
    callback(auth);
  });
}

export function setDoc(path, data) {
  const document = db.doc(path);
  document.get().then(doc => {
    if (!doc.exists) {
      document.set({ data }, { merge: true });
      // console.log('set user into db');
    }
  });
}

export async function getDoc(path) {
  const doc = await db.doc(path).get();
  if (doc.exists) {
    return doc.data();
  }
}
