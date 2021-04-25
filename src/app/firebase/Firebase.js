import * as firebase from 'firebase'
import firestore from 'firebase/firestore'

const settings = { timestampsInSnapshots: true };

const config = {
    projectid: 'care-of-u',
    apiKey: 'AIzaSyBFRb39bNyrNGcvbZO5OqsZGDGYSqRNTR0',
    databaseURL: 'https://care-of-u-default-rtdb.europe-west1.firebasedatabase.app'
}

firebase.initializeApp(config)

firebase.firestore().settings(settings);


export default firebase