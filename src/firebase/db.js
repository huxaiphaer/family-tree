// Get a RTDB instance
import firebase from 'firebase/app'
import 'firebase/database'

export const db = firebase
    .initializeApp({ databaseURL: 'https://family-tree-ngonge.firebaseio.com' })
    .database()