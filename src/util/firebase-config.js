//import firebase from 'firebase/app';
import firebase from 'firebase'
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEdTsmCfPMqllzBB_RRZWhJ1mYsavL_aE",
  authDomain: "react-app-4d136.firebaseapp.com",
  databaseURL: "https://react-app-4d136-default-rtdb.firebaseio.com",
  projectId: "react-app-4d136",
  storageBucket: "react-app-4d136.appspot.com",
  messagingSenderId: "2620611315",
  appId: "1:2620611315:web:6e4eb51b2bebf900b67586"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth()

export { db, auth }