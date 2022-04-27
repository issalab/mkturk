import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { initializeApp } from 'firebase/app';
import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  getMetadata,
  FullMetadata,
  StorageReference,
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

interface DataFileEntry {
  fullPath: string;
  name: string;
}

export const mkturkliteApp = initializeApp(firebaseConfig);
const authProvider = new GoogleAuthProvider();

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

export const firebaseApi = createApi({
  reducerPath: 'firebaseApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getMetadataGeneration: builder.query<string, DataFileEntry>({
      queryFn: async (arg: DataFileEntry) => {
        try {
          const metadata: FullMetadata = await getMetadata(
            ref(storage, arg.fullPath)
          );
          return { data: metadata.generation };
        } catch {
          console.error('[getMetadataGeneration]::getMetadata() failed');
          return { error: '[getMetadataGeneration]::getMetadata() failed' };
        }
      },
    }),
    getDatafile: builder.query<object, DataFileEntry>({
      queryFn: async (arg: DataFileEntry) => {
        try {
          const data = await getDownloadURL(ref(storage, arg.fullPath))
            .then(async (url: string) => {
              const response = await fetch(url);
              const responseJson = await response.json();
              const flattenedData: any = {};
              for (const outerKey in responseJson) {
                if (responseJson.hasOwnProperty(outerKey)) {
                  for (const innerKey in responseJson[outerKey]) {
                    if (responseJson[outerKey].hasOwnProperty(innerKey)) {
                      flattenedData[innerKey] =
                        responseJson[outerKey][innerKey];
                    }
                  }
                }
              }
              return flattenedData;
            })
            .catch((e: Error) => {
              console.error('getDatafile::getDownloadURL error:', e);
            });
          if (data['code'] == 403) {
            throw 'error';
          }
          return { data: data };
        } catch {
          return { error: 'getDatafile::failed' };
        }
      },
    }),
    getFolders: builder.query<StorageReference[], string>({
      queryFn: async (entryPath: string) => {
        try {
          const folders = (await listAll(ref(storage, entryPath))).prefixes;
          return { data: folders };
        } catch {
          console.error('[getFolders]::listAll() failed');
          return { error: '[getFolders]::listAll() failed' };
        }
      },
    }),
    getDatafilesList: builder.query<DataFileEntry[], string>({
      queryFn: async (entryPath: string) => {
        try {
          const folders = (await listAll(ref(storage, entryPath))).prefixes;
          let datafilesList: DataFileEntry[] = [];
          const listPromises = folders.map(async (folder) => {
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

          await Promise.all(listPromises).then((subject) => {
            subject.forEach((datafiles) => {
              if (datafiles !== undefined) {
                datafilesList = datafilesList.concat(datafiles);
              }
            });
          });

          datafilesList.sort((a, b) => {
            const tmpA = new Date(a.name.split('_')[0]);
            const tmpB = new Date(b.name.split('_')[0]);
            return tmpB.getTime() - tmpA.getTime();
          });

          return { data: datafilesList };
        } catch {
          console.error('[getDatafilesList]::failed');
          return { error: '[getDatafilesList]::failed' };
        }
      },
    }),
  }),
});

export const {
  useGetMetadataGenerationQuery,
  useGetDatafileQuery,
  useGetFoldersQuery,
  useGetDatafilesListQuery,
} = firebaseApi;
