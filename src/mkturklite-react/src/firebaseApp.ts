import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA0fbv2VqE-AfF6V_nxSSXCEqaTlBlZnTI',
  authDomain: 'sandbox-ce2c5.firebaseapp.com',
  databaseURL: 'https://sandbox-ce2c5.firebaseio.com',
  projectId: 'sandbox-ce2c5',
  storageBucket: 'sandbox-ce2c5.appspot.com',
  messagingSenderId: '1003719887944',
};

const mkturkliteApp = initializeApp(firebaseConfig);
const auth = getAuth(mkturkliteApp);

export default auth;
