import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBXEuU9zncd_ZfZ45ZfA5H8YDgxGN71sT0",
  authDomain: "plugghast-29505.firebaseapp.com",
  databaseURL: "https://plugghast-29505.firebaseio.com",
  projectId: "plugghast-29505",
  storageBucket: "",
  messagingSenderId: "484223472499",
  appId: "1:484223472499:web:653ba7f454b97650"
};

export const firebaseApp = firebase.initializeApp(config);
