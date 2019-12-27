import {initializeApp} from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyAySaenxLF9DUoCMl3vDSSF-9M1UHan1mE",
    authDomain: "family-tree-ngonge.firebaseapp.com",
    databaseURL: "https://family-tree-ngonge.firebaseio.com",
    projectId: "family-tree-ngonge",
    storageBucket: "family-tree-ngonge.appspot.com",
    messagingSenderId: "86927066816",
    appId: "1:86927066816:web:2961d64995a7c5e43a8f25",
    measurementId: "G-P1G76C3Y7S"
})

export const db = app.database();