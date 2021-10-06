import firebase from 'firebase'
require('@firebase/firestore')

// Initialize Firebase
var firebaseConfig = {
  apiKey: 'AIzaSyBfkHuNQkfaF43rDTk19fJy44oW_3Gv3nQ',
  authDomain: 'bedtimestories-6fb7a.firebaseapp.com',
  projectId: 'bedtimestories-6fb7a',
  storageBucket: 'bedtimestories-6fb7a.appspot.com',
  messagingSenderId: '908209931875',
  appId: '1:908209931875:web:55ecf3fc367da6e473da56',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase.firestore()
