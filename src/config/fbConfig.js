import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyBMFZfdWx8EYxYXHP1VVS5MEFaCrMjrwAo",
  authDomain: "picnic-mp123456789.firebaseapp.com",
  databaseURL: "https://picnic-mp123456789.firebaseio.com",
  projectId: "picnic-mp123456789",
  storageBucket: "picnic-mp123456789.appspot.com",
  messagingSenderId: "476634464886"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;
