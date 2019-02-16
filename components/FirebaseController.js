import * as firebase from 'firebase';

// var admin = require("firebase-admin");
class FirebaseController{
    constructor() {
        this.state = {
        
        };
        var serviceAccount = require("../serviceAccountKey.json");
        
        this.app = firebase.initializeApp({
          credential: admin.credential.cert(serviceAccount),
          databaseURL: "https://treehack-even.firebaseio.com"
        });
        // this.app = firebase.initializeApp(firebaseConfig);
    };
            

    // const firebaseConfig = {
    // apiKey: "<your-api-key>",
    // authDomain: "<your-auth-domain>",
    // databaseURL: "<your-database-url>",
    // storageBucket: "<your-storage-bucket>",
}

module.exports = FirebaseController;