// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
// import 'firebase/functions';

import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  collection,
  Query,
  query,
  where,
} from 'firebase/firestore';
import { getStorage, StorageReference, ref } from 'firebase/storage';
import {
  getAuth,
  GoogleAuthProvider,
  getRedirectResult,
  signInWithRedirect,
} from 'firebase/auth';
import { getFunctions, httpsCallable } from 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyA0fbv2VqE-AfF6V_nxSSXCEqaTlBlZnTI",
  authDomain: "sandbox-ce2c5.firebaseapp.com",
  databaseURL: "https://sandbox-ce2c5.firebaseio.com",
  projectId: "sandbox-ce2c5",
  storageBucket: "sandbox-ce2c5.appspot.com",
  messagingSenderId: "1003719887944",
  clientId: "1003719887944-rlc06cjecqrp9fgvmvo56vqop1otm9ht.apps.googleusercontent.com"
};

// firebase.initializeApp(firebaseConfig);
let firebaseApp = initializeApp(firebaseConfig);

// const auth = firebase.auth();
const auth = getAuth(firebaseApp);

// const db = firebase.firestore();
const db = getFirestore(firebaseApp);
const functions = getFunctions(firebaseApp);

import { Mkcolony } from './mkcolony';

let signInNavLink = document.querySelector('#sign-in-nav-link') as HTMLElement;
let signOutNavLink = document.querySelector('#sign-out-nav-link') as HTMLElement;

// auth.getRedirectResult().then(result => {
//   // authenticated
//   if (result.credential) {
//     console.log('user authenticated', result.credential);
//   } else if (firebase.auth().currentUser) {
//     console.log('already signed in');
//     console.log('result:', result);
//     console.log(firebase.auth().currentUser);
//   } else {
//     // not yet authenticated
//     let provider = new firebase.auth.GoogleAuthProvider();
//     provider.addScope('https://www.googleapis.com/auth/plus.me');
//     provider.addScope('https://www.googleapis.com/auth/user.emails.read');
//     provider.addScope('https://www.googleapis.com/auth/userinfo.email');
//     auth.signInWithRedirect(provider);
//   }
// }).catch(e => {
//   console.error('Error with authentication:', e);
// });
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
getRedirectResult(auth).then((result) => {
  if (result) {
    console.log('Sign-In Redirect Result, USER:',result.user.email,'is signed in'
    );
  } else if (auth.currentUser) {
    console.log(
      'Sign-In Redirect Result, USER:',
      auth.currentUser,
      'is signed in'
    );
  } else {
    signInWithRedirect(auth, provider);
  }
});

let mkcolony: Mkcolony | null;
auth.onAuthStateChanged(user => {
  if (user) {
    user.getIdTokenResult(true).then(idTokenResult => {
      console.log('idtokenresult:', idTokenResult.token);
      if (idTokenResult.claims.labMember) {
        console.log('Authorized user', user);
        console.log('idTokenResult', idTokenResult);
        console.log('idToken:', idTokenResult.token);
        mkcolony = new Mkcolony();
        mkcolony.init();
        // let ret = mkcolony.loadWtData(db.collection('marmosets'));
        // ret.then(docs => {
        //   mkcolony?.populateTable(docs);
        //   mkcolony?.plotColonyData();
        // });
      } else {
        console.log('Unauthorized user');
        let alertStr = 'You do not have permission to view this app.'
          + 'To request access, please email hector.cho@columbia.edu';
        alert(alertStr);
      }
    });
  } else {
    mkcolony?.deleteAll();
    mkcolony = null;
  }
});

// signInNavLink.addEventListener('click', (ev: Event) => {
//   if (!auth.currentUser) {
//     let provider = new firebase.auth.GoogleAuthProvider();
//     provider.addScope('https://www.googleapis.com/auth/plus.me');
//     provider.addScope('https://www.googleapis.com/auth/user.emails.read');
//     provider.addScope('https://www.googleapis.com/auth/userinfo.email');
//     auth.signInWithRedirect(provider);
//   } else {
//     console.log('User already signed-in');
//   }
// });

signOutNavLink.addEventListener('click', (ev: Event) => {
  console.log('User signed out');
  auth.signOut();
});