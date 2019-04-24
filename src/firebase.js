import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyA9D9NSqBUwyvSArRVGOfzEMoNoaIqcfT0",
    authDomain: "man-city-76299.firebaseapp.com",
    databaseURL: "https://man-city-76299.firebaseio.com",
    projectId: "man-city-76299",
    storageBucket: "man-city-76299.appspot.com",
    messagingSenderId: "666915138661"
};

firebase.initializeApp(config);

const db = firebase.database();
const firebaseMatches = db.ref('matches');
const firebasePromo = db.ref('promotions');
const firebaseTeams = db.ref('teams');
const firebasePlayers = db.ref('players');


export {
    firebase,
    firebaseMatches,
    firebasePromo,
    firebaseTeams,
    db,
    firebasePlayers
}