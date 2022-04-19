import {
  createApi,
  fakeBaseQuery,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
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

export const dataApiSlice = createApi({
  reducerPath: 'dataApiSlice',
  baseQuery: fakeBaseQuery(),
  endpoints: (build) => ({
    getMetadataGeneration: build.query<string, DataFileEntry>({
      queryFn: async (arg) => {
        const metadata = await getMetadata(ref(storage, arg.fullPath));
        if (metadata) {
          return { data: metadata.generation };
        } else {
          return { error: 'error' };
        }
      },
    }),
  }),
});

export const { useGetMetadataGenerationQuery } = dataApiSlice;
