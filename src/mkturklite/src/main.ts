import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, listAll, ref } from 'firebase/storage';
import {
  getAuth,
  GoogleAuthProvider,
  getRedirectResult,
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

const mkturkliteApp = initializeApp(firebaseConfig);
const auth = getAuth(mkturkliteApp);

const authProvider = new GoogleAuthProvider();
getRedirectResult(auth).then((result) => {
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
});

const storage = getStorage(mkturkliteApp);
const storageRef = ref(storage);
const storageRootRef = ref(storageRef, 'mkturkfiles');

const imagesRef = ref(
  storageRootRef,
  'scenebags/Blascotestimages/20211018_newfile_bkgddur=800ms_camerafar/zback'
);

const imageCanvas = document.querySelector('#image-cvs') as HTMLCanvasElement;
const imageCanvasCtx = imageCanvas.getContext('2d');
let imageBitmaps: ImageBitmap[] = [];

imageCanvas.addEventListener('imagesLoaded', (evt: Event) => {
  console.log('can do stuff now');
  console.log(imageBitmaps);

  imageBitmaps.forEach((oneBlob) => {
    imageCanvasCtx?.drawImage(oneBlob, 0, 0);
  });
});

// let imageBlobs: any[] = [];

// listAll(imagesRef).then((listAllResult) => {
//   console.log(listAllResult);
//   listAllResult.items.forEach((fileRef) => {
//     getDownloadURL(ref(imagesRef, fileRef.name)).then(async (url: string) => {
//       await fetch(url).then(async (result) => {
//         imageBlobs.push(await result.blob());
//       });
//     });
//     console.log;
//   });
//   console.log(imageBlobs);
// });

function loadAllImages(dirName: string, targetArr: ImageBitmap[]) {
  let thisRef = ref(storageRootRef, dirName);

  listAll(thisRef).then((listAllResult) => {
    const bitmapPromises = listAllResult.items.map(async (fileRef) => {
      return getDownloadURL(ref(thisRef, fileRef.name)).then(
        async (url: string) => {
          return await createImageBitmap(await (await fetch(url)).blob());
        }
      );
    });
    Promise.all(bitmapPromises)
      .then(async (result) => {
        const loadingSuccessEvt = new Event('imagesLoaded', {
          bubbles: false,
        });
        result.forEach((item) => {
          targetArr.push(item);
        });
        imageCanvas.dispatchEvent(loadingSuccessEvt);
      })
      .catch((error) => {
        console.error('Image Loading Error:', error);
      });
  });
}

function animate() {
  imageCanvasCtx?.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
  requestAnimationFrame(animate);
}

function drawNextFrame() {
  imageCanvasCtx;
}

loadAllImages(
  'scenebags/Blascotestimages/20211018_newfile_bkgddur=800ms_camerafar/zback',
  imageBitmaps
);
