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
  }

  query(callback) {
    // console.log(this.database)
    var ref = this.app.database().ref()
    ref.child("UserID/Analysis/0216/Exercise 1/Name").once("value").then((snapshot)=>{
      callback(snapshot)
    })
  }

  queryOn(url, callback) {
    var ref = this.app.database().ref()
    ref.child(url).on("value", function(snapshot) {
      callback(snapshot);
    })
  }
}


module.exports = FirebaseController;