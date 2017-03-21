/**
 * Created by nette on 18.03.17.
 */
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBgjCLv901qEiWg4JfR7QmKEQDCIT0wnWY",
    authDomain: "smplanner-5183f.firebaseapp.com",
    databaseURL: "https://smplanner-5183f.firebaseio.com",
    storageBucket: "smplanner-5183f.appspot.com",
    messagingSenderId: "64892828390"
};
firebase.initializeApp(config);
const database = firebase.database();

export default database;