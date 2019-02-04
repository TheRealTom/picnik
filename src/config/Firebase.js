import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBMFZfdWx8EYxYXHP1VVS5MEFaCrMjrwAo",
  authDomain: "picnic-mp123456789.firebaseapp.com",
  databaseURL: "https://picnic-mp123456789.firebaseio.com",
  projectId: "picnic-mp123456789",
  storageBucket: "picnic-mp123456789.appspot.com",
  messagingSenderId: "476634464886"
};

const fire = firebase.initializeApp(config);

export default fire;
