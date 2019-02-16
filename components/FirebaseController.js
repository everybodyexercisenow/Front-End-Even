// import * as firebase from 'firebase';
import firebase from 'firebase';
// var admin = require("firebase-admin");
class FirebaseController{
  constructor() {
    const self = this;
    this.state = {
      
    };
    
    this.app = firebase.initializeApp({
      apiKey: "AIzaSyBH9OeWQ99kDI3TMVX08Clj1ircvTZbAvs",
      authDomain: "treehack-even.firebaseapp.com",
      databaseURL: "https://treehack-even.firebaseio.com",
      projectId: "treehack-even",
      storageBucket: "treehack-even.appspot.com",
      messagingSenderId: "845314858207"
    });
    // this.auth = this.app.auth();
    // firebase.auth().onAuthStateChanged(function(user) {
    //   if (user) {
    //     // User is signed in.
    //     var isAnonymous = user.isAnonymous;
    //     this.uid = user.uid;
    //     // ...
    //   } else {
    //     // User is signed out.
    //     // ...
    //   }
    //   // ...
    // });
    // this.auth.signInAnonymously().catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // ...
    // })
    
    // this.database = firebase.database();
  }

  query(callback) {
    // console.log(this.database)
    var ref = this.app.database().ref()
    ref.child("UserID/Analysis/0216/Exercise 1/Name").once("value").then((snapshot)=>{
      console.log(snapshot)
      callback(snapshot)
    })
  }
}


module.exports = FirebaseController;