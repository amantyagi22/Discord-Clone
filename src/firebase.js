import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBeqBknVosQIk_mkNTR_77J6OeLsEeVrKY",
  authDomain: "discord-clone-yt-60442.firebaseapp.com",
  databaseURL: "https://discord-clone-yt-60442.firebaseio.com",
  projectId: "discord-clone-yt-60442",
  storageBucket: "discord-clone-yt-60442.appspot.com",
  messagingSenderId: "216629331069",
  appId: "1:216629331069:web:02dc2e85492bfdd4531d14",
  measurementId: "G-WBZBFE3ER1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
