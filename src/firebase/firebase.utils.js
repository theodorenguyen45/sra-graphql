import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD5W6bi1rGKIKp6g6e0wL6oeA8Lt1asXZk',
  authDomain: 'second-react-app-db.firebaseapp.com',
  databaseURL: 'https://second-react-app-db.firebaseio.com',
  projectId: 'second-react-app-db',
  storageBucket: '',
  messagingSenderId: '26963433143',
  appId: '1:26963433143:web:b60adb88ca624744'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
