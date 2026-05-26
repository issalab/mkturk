import './styles.css';
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA0fbv2VqE-AfF6V_nxSSXCEqaTlBlZnTI',
  authDomain: 'sandbox-ce2c5.firebaseapp.com',
  databaseURL: 'https://sandbox-ce2c5.firebaseio.com',
  projectId: 'sandbox-ce2c5',
  storageBucket: 'sandbox-ce2c5.appspot.com',
  messagingSenderId: '1003719887944',
  clientId:
    '1003719887944-rlc06cjecqrp9fgvmvo56vqop1otm9ht.apps.googleusercontent.com',
};
firebase.initializeApp(firebaseConfig);

import { Liveplot } from './liveplot';

let fileListSelector = document.querySelector(
  '#file-list'
) as HTMLSelectElement;

let editorDiv = document.querySelector('#editor') as HTMLDivElement;

let elemObj = {
  perfDiv: document.querySelector('#performance-dashboard') as HTMLDivElement,
  perfPlot: document.querySelector('#performance-plot') as HTMLDivElement,
  perfFilter: document.querySelector('#performance-filter') as HTMLDivElement,
  trialDiv: document.querySelector('#trial-dashboard') as HTMLDivElement,
  trialPlot: document.querySelector('#trial-plot') as HTMLDivElement,
  trialFilter: document.querySelector('#trial-filter') as HTMLDivElement,
  healthDiv: document.querySelector('#health-dashboard') as HTMLDivElement,
  healthPlot: document.querySelector('#health-plot') as HTMLDivElement,
  healthFilter: document.querySelector('#health-filter') as HTMLDivElement,
  screenPlot: document.querySelector('#screen-plot') as HTMLDivElement,
  // realtimePlot: document.querySelector('#realtime-plot') as HTMLDivElement,
  rxnPlot: document.querySelector('#reaction-plot') as HTMLDivElement,
  choicePlot: document.querySelector('#choice-plot') as HTMLDivElement,
  objPerfPlot: document.querySelector('#obj-perf-plot') as HTMLDivElement,
  rewardPlot: document.querySelector('#reward-plot') as HTMLDivElement,

  perfVitals: document.querySelector('#performance-vitals') as HTMLSpanElement,
  rfidVitals: document.querySelector('#rfid-vitals') as HTMLSpanElement,
  batteryVitals: document.querySelector('#battery-vitals') as HTMLSpanElement,
  trialVitals: document.querySelector('#trial-vitals') as HTMLSpanElement,
  fixStdev: document.querySelector('#fixation-stdev') as HTMLSpanElement,
  tarZeroStdev: document.querySelector('#target0-stdev') as HTMLSpanElement,
  tarOneStdev: document.querySelector('#target1-stdev') as HTMLSpanElement,
  sdTextDiv: document.querySelector('#touch-sd-text') as HTMLDivElement,
  realtimeBtn: document.querySelector('#request-realtime') as HTMLButtonElement,
};

const lp = new Liveplot(elemObj);
lp.setupEditor(editorDiv);
lp.fileSelectionChangedListener(fileListSelector);
console.time('populateFileList');
lp.populateFileList(fileListSelector);

let provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
firebase
  .auth()
  .getRedirectResult()
  .then(function (result) {
    if (result.user) {
      // User just signed in. you can get the result.credential.
      console.log(
        'Sign-In Redirect Result, USER ' + result.user.email + ' is signed in'
      );
    } else if (firebase.auth().currentUser) {
      // User already signed in.
      console.log('Sign-In Redirect Result, USER is signed in');
    } else {
      // No user signed in, update your UI, show the redirect sign-in screen.
      firebase.auth().signInWithRedirect(provider);
    }
  });
