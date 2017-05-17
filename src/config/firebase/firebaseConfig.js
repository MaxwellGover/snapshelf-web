import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBXsuL7WbkJJejzZ4ayTZZduSpsJIi9Scc",
    authDomain: "snapshelf-aabb55.firebaseapp.com",
    databaseURL: "https://snapshelf-aabb55.firebaseio.com",
    projectId: "snapshelf-aabb55",
    storageBucket: "snapshelf-aabb55.appspot.com",
    messagingSenderId: "800301644812"
};
firebase.initializeApp(config);

const db = firebase.database();
const fbAuth = firebase.auth();

export { db, fbAuth };