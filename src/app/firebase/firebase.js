import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';


const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
})


export const firebaseRef = firebase;
export const auth = app.auth();
export const firestore = app.firestore();
export const analytics = app.analytics();


//Google login
const googleProvider = new firebase.auth.GoogleAuthProvider()

export const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider).then((res) => {
    }).catch((error) => {
        console.log(error.message)
    })
}


export default app