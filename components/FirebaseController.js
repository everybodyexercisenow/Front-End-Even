import firebase from 'firebase';
const config={
  apiKey: "AIzaSyBH9OeWQ99kDI3TMVX08Clj1ircvTZbAvs",
  authDomain: "treehack-even.firebaseapp.com",
  databaseURL: "https://treehack-even.firebaseio.com",
  projectId: "treehack-even",
  storageBucket: "treehack-even.appspot.com",
  messagingSenderId: "845314858207"
}
const Firebase = firebase.initializeApp(config);
export default Firebase;