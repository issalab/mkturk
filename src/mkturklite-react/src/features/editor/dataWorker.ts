import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import { getAuth, getRedirectResult } from 'firebase/auth';
const self = globalThis as unknown as DedicatedWorkerGlobalScope;
const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyA0fbv2VqE-AfF6V_nxSSXCEqaTlBlZnTI',
  authDomain: 'sandbox-ce2c5.firebaseapp.com',
  databaseURL: 'https://sandbox-ce2c5.firebaseio.com',
  projectId: 'sandbox-ce2c5',
  storageBucket: 'sandbox-ce2c5.appspot.com',
  messagingSenderId: '1003719887944',
};
const mkturkliteApp = initializeApp(firebaseConfig);
const auth = getAuth(mkturkliteApp);
getRedirectResult(auth).then((result) => {
  console.log('result', result);
});

const mdGeneration = '';

self.onmessage = (e: MessageEvent) => {
  console.log('Worker received:', e.data);
  const storage = getStorage(mkturkliteApp);
  // self.postMessage(e.data + ' and cats');
  const toPullRef = ref(storage, e.data.fullPath);
  console.log(toPullRef);
  getDownloadURL(toPullRef).then((url) => {
    console.log(url);
  });
};
