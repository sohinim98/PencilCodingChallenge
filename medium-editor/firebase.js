import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "medium-editor-c7333.firebaseapp.com",
  databaseURL: "https://medium-editor-c7333.firebaseio.com",
  projectId: "medium-editor-c7333",
  storageBucket: "medium-editor-c7333.appspot.com",
  messagingSenderId: "773473168883",
  appId: "1:773473168883:web:7f32921de6a77425b6f686",
  measurementId: "G-Z2V5XBCZSZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

export const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

export const saveContent  = async (user, content) => {
  if (!user) return;

  const dataRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await dataRef.get();

  if (snapshot.exists) {
    try {
      await dataRef.update({
        content: content,
      });
    } catch (error) {
      console.error("Error creating content document", error);
    }
  }
};
