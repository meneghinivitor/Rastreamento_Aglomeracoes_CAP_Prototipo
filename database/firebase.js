import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCZCXQ2nCMgDEEG0RAGGdo_ZEEP0J0YIX0",
  authDomain: "coronavirus-4cf01.firebaseapp.com",
  databaseURL: "https://coronavirus-4cf01.firebaseio.com",
  projectId: "coronavirus-4cf01",
  storageBucket: "coronavirus-4cf01.appspot.com",
  messagingSenderId: "212609824178",
  appId: "1:212609824178:web:8a1b444beb7afa8646e0ab",
};

firebase.initializeApp(firebaseConfig);

export default firebase;