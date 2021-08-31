import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBrHXQZgtSnryrLRzWiILXzjXrn9ZfoRuY",
    authDomain: "eweflix.firebaseapp.com",
    projectId: "eweflix",
    storageBucket: "eweflix.appspot.com",
    messagingSenderId: "404845944316",
    appId: "1:404845944316:web:48b088657e94226e602679"
  };
  // Initialize Firebase
 const firebaseApp =  firebase.initializeApp(firebaseConfig);

 const auth = firebase.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

 export { auth, provider};
 export default db;
