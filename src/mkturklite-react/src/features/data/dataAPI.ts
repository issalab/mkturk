import { initializeApp } from 'firebase/app';
import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  getMetadata,
  FullMetadata,
} from 'firebase/storage';
import {
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithRedirect,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA0fbv2VqE-AfF6V_nxSSXCEqaTlBlZnTI',
  authDomain: 'sandbox-ce2c5.firebaseapp.com',
  databaseURL: 'https://sandbox-ce2c5.firebaseio.com',
  projectId: 'sandbox-ce2c5',
  storageBucket: 'sandbox-ce2c5.appspot.com',
  messagingSenderId: '1003719887944',
};

export const mkturkliteApp = initializeApp(firebaseConfig);
const authProvider = new GoogleAuthProvider();

interface DataFileEntry {
  fullPath: string;
  name: string;
}

const auth = getAuth(mkturkliteApp);
getRedirectResult(auth)
  .then((result) => {
    if (result) {
      console.log(
        'Sign-In Redirect Result, USER:',
        result.user.email,
        'is signed in'
      );
    } else if (auth.currentUser) {
      console.log(
        'Sign-In Redirect Result, USER:',
        auth.currentUser.email,
        'is signed in'
      );
    } else {
      signInWithRedirect(auth, authProvider);
    }
  })
  .catch((error) => {
    console.error('getRedirectResult Error:', error);
  });

const storage = getStorage();

export async function listDatafiles(entry: string) {
  // let list: Array<DataFileEntry> = [];
  let datafilesList: Array<DataFileEntry> = [];
  const datafileRef = ref(storage, entry);
  const folders = (await listAll(datafileRef)).prefixes;

  const promises = folders.map(async (folder) => {
    const items = (await listAll(folder)).items;
    let list;
    if (items.length > 0) {
      list = items.flatMap((item) => {
        if (item.name.includes('.json')) {
          return { fullPath: item.fullPath, name: item.name };
        } else {
          return [];
        }
      });
    }
    return list;
  });

  await Promise.all(promises).then((subject) => {
    subject.forEach((datafiles) => {
      if (datafiles !== undefined) {
        datafilesList = datafilesList.concat(datafiles);
      }
    });
  });

  return datafilesList;
}

export async function loadDatafile(entry: DataFileEntry) {
  const currentDatafileRef = ref(storage, entry.fullPath);
  getMetadata(currentDatafileRef).then((metadata: FullMetadata) => {
    console.log('metadata:', metadata);
  });
  const data = await getDownloadURL(currentDatafileRef)
    .then(async (url: string) => {
      const response = await fetch(url);
      const responseJson = await response.json();
      const flattenedData: any = {};
      for (const outerKey in responseJson) {
        if (responseJson.hasOwnProperty(outerKey)) {
          for (const innerKey in responseJson[outerKey]) {
            if (responseJson[outerKey].hasOwnProperty(innerKey)) {
              flattenedData[innerKey] = responseJson[outerKey][innerKey];
            }
          }
        }
      }
      return flattenedData;
    })
    .catch((e: Error) => {
      console.error('Error getting download URL:', e);
    });
  return data;
}

// export async function checkFileStatus(entry: DataFileEntry) {

// }
