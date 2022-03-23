import { createSlice } from '@reduxjs/toolkit';
import { initializeApp, FirebaseApp, FirebaseOptions } from 'firebase/app';
import {
  getAuth,
  Auth,
  GoogleAuthProvider,
  getRedirectResult,
  signInWithRedirect,
} from 'firebase/auth';
// import auth from '../../firebaseApp';

export interface FirebaseState {
  instance: FirebaseApp;
  auth?: Auth;
  config: FirebaseOptions;
  authenticated: boolean;
}

const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyA0fbv2VqE-AfF6V_nxSSXCEqaTlBlZnTI',
  authDomain: 'sandbox-ce2c5.firebaseapp.com',
  databaseURL: 'https://sandbox-ce2c5.firebaseio.com',
  projectId: 'sandbox-ce2c5',
  storageBucket: 'sandbox-ce2c5.appspot.com',
  messagingSenderId: '1003719887944',
};

const initialState: FirebaseState = {
  instance: initializeApp(firebaseConfig),
  config: firebaseConfig,
  authenticated: false,
};

// const provider = new GoogleAuthProvider();
const authProvider = new GoogleAuthProvider();

// export const signIn = createAsyncThunk(
//   'firebase/signIn',
//   async (auth: Auth) => {
//     getRedirectResult(auth).then((result) => {

//     })
//   }
// )

export const firebaseSlice = createSlice({
  name: 'firebase',
  initialState: initialState,
  reducers: {
    init: (state) => {
      // state.instance = initializeApp(state.config);
      const auth = getAuth(state.instance);
      getRedirectResult(auth)
        .then((result) => {
          if (result) {
            console.log(
              'Sign-In Redirect Result, USER:',
              result.user.email,
              'is signed in'
            );
            state.auth = auth;
            state.authenticated = true;
          } else if (auth.currentUser) {
            console.log(
              'Sign-In Redirect Result, USER:',
              auth.currentUser.email,
              'is signed in'
            );
            state.auth = auth;
            state.authenticated = true;
          } else {
            signInWithRedirect(auth, authProvider);
          }
        })
        .catch((error) => {
          console.error('getRedirectResult Error:', error);
        });
    },
  },
});

export const { init } = firebaseSlice.actions;

export default firebaseSlice.reducer;
