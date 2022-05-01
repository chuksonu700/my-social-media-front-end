import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa8z-FQLBfYYaLmve7CukPH9z7eOqxSio",
  authDomain: "my-social-media-313b3.firebaseapp.com",
  projectId: "my-social-media-313b3",
  storageBucket: "my-social-media-313b3.appspot.com",
  messagingSenderId: "208906554995",
  appId: "1:208906554995:web:1fe2a10154d18de984e406",
  measurementId: "G-ERCVE3EK4Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export default db;
export {auth,provider}