import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, listAll, ref } from 'firebase/storage';
import {
  getAuth,
  GoogleAuthProvider,
  getRedirectResult,
  signInWithRedirect,
} from 'firebase/auth';

import { CurrentTrial, Image, Sample, Trial, TrialSequence } from './dataTypes';

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

const numTrials = 50;
let currentTrial: CurrentTrial;
let trialSequence: TrialSequence;
let trialInProgress = false;

let start: number | undefined;
let prevTimestamp: number;
let prevDrawTime: number;
let reqId: number | undefined;
let done = false;
let imagesLoaded = false;
const punishTimeout = 2000; // 2000 ms
const interTrialInterval = 1000; // 1000 ms

const imageCanvas = document.querySelector('#image-cvs') as HTMLCanvasElement;
const canvasBoundingRect: DOMRect = imageCanvas.getBoundingClientRect();
const imageCanvasCtx = imageCanvas.getContext('2d');
if (imageCanvasCtx) {
  imageCanvasCtx.fillStyle = 'gray';
  imageCanvasCtx.fillRect(0, 0, imageCanvas.width, imageCanvas.height);
  imageCanvasCtx.strokeStyle = 'red';
  imageCanvasCtx.strokeRect(310, 310, 100, 100);
}

let loadedImages: Image[] = [];
let imageBitmaps: ImageBitmap[] = [];

imageCanvas.addEventListener('imagesLoaded', (evt: Event) => {
  console.log('can do stuff now');
  imagesLoaded = true;
  trialSequence = generateTrialSequence(loadedImages, numTrials);
  console.log(trialSequence);
});

imageCanvas.addEventListener('pointerdown', (evt: PointerEvent) => {
  evt.preventDefault();
  console.log('pointerdown');
  if (imagesLoaded && isInBoundingBox(evt) && !trialInProgress) {
    trialInProgress = true;
    reqId = animate();
  }
});

imageCanvas.addEventListener('pointermove', (evt: PointerEvent) => {
  // console.log('pointermove:', evt);
  if (reqId !== undefined && !isInBoundingBox(evt)) {
    trialInProgress = false;
    cancelAnimationFrame(reqId);
    reqId = undefined;
    if (imageCanvasCtx) {
      imageCanvasCtx.fillStyle = 'orange';
      imageCanvasCtx.fillRect(0, 0, 720, 720);
    }
    setTimeout(() => {
      if (imageCanvasCtx) {
        imageCanvasCtx.fillStyle = 'gray';
        imageCanvasCtx.fillRect(0, 0, 720, 720);
        imageCanvasCtx.strokeStyle = 'red';
        imageCanvasCtx.strokeRect(310, 310, 100, 100);
      }
    }, punishTimeout);

    console.log('pointermove cancelAnimation called');
  }
});

function isInBoundingBox(evt: PointerEvent): boolean {
  const trueX = evt.clientX - canvasBoundingRect.left;
  const trueY = evt.clientY - canvasBoundingRect.top;

  if (trueX >= 310 && trueX <= 410 && trueY >= 310 && trueY <= 410) {
    return true;
  }

  return false;
}

imageCanvas.addEventListener('pointerup', (evt: PointerEvent) => {
  if (reqId !== undefined) {
    trialInProgress = false;
    cancelAnimationFrame(reqId);
    reqId = undefined;
    if (imageCanvasCtx) {
      imageCanvasCtx.fillStyle = 'orange';
      imageCanvasCtx.fillRect(0, 0, 720, 720);
    }
    setTimeout(() => {
      if (imageCanvasCtx) {
        imageCanvasCtx.fillStyle = 'gray';
        imageCanvasCtx.fillRect(0, 0, 720, 720);
        imageCanvasCtx.strokeStyle = 'red';
        imageCanvasCtx.strokeRect(310, 310, 100, 100);
      }
    }, punishTimeout);
    console.log('pointerup cancelAnimation called');
  }
});

function generateTrialSequence(
  imageBag: Image[],
  numTrials: number
): TrialSequence {
  let trialSequence: TrialSequence = [];
  for (let i = 0; i < numTrials; i++) {
    const idx = Math.floor(Math.random() * imageBag.length);
    const numFrames = 50;
    const sample: Sample = { image: imageBag[idx], numFrames: numFrames };
    const trial: Trial = [sample];
    trialSequence.push(trial);
  }
  return trialSequence;
}

function loadAllImages(dirName: string, targetArr: Image[]) {
  imagesLoaded = false;
  let thisRef = ref(storageRootRef, dirName);
  listAll(thisRef).then((listAllResult) => {
    const bitmapPromises = listAllResult.items.map(async (fileRef) => {
      return getDownloadURL(ref(thisRef, fileRef.name)).then(
        async (url: string) => {
          return {
            name: fileRef.name,
            bitmap: await createImageBitmap(await (await fetch(url)).blob()),
          };
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
  const trial = trialSequence.shift();
  if (trial !== undefined) {
    currentTrial = {
      trial: trial,
      frameCounter: 0,
      sampleIdxSeq: Array(trial[0].numFrames).fill(0),
    };
    start = undefined;
  }
  return requestAnimationFrame(updateCanvas);
}

function updateCanvas(timestamp: number) {
  if (start === undefined) {
    start = timestamp;
  }
  const elapsed = timestamp - start;

  if (
    prevTimestamp !== timestamp &&
    currentTrial.frameCounter < currentTrial.sampleIdxSeq.length
  ) {
    if (imageCanvasCtx) {
      imageCanvasCtx.drawImage(
        currentTrial.trial[currentTrial.sampleIdxSeq[currentTrial.frameCounter]]
          .image.bitmap,
        0,
        0
      );
      if (currentTrial.frameCounter % 2 == 0) {
        imageCanvasCtx.fillStyle = 'white';
      } else {
        imageCanvasCtx.fillStyle = 'black';
      }
      imageCanvasCtx.fillRect(670, 670, 50, 50);
      imageCanvasCtx.strokeStyle = 'red';
      imageCanvasCtx.strokeRect(310, 310, 100, 100);
      console.log(performance.now() - timestamp);
      // if (currentTrial.frameCounter == 0) {
      //   prevDrawTime = performance.now();
      //   console.log('first frame');
      // } else {
      //   let now = performance.now();
      //   console.log('time from previous draw:', now - prevDrawTime);
      //   prevDrawTime = now;
      // }
    }

    prevTimestamp = timestamp;
    currentTrial.frameCounter++;
    reqId = requestAnimationFrame(updateCanvas);
  } else {
    if (reqId !== undefined) {
      cancelAnimationFrame(reqId);
    }
    if (imageCanvasCtx) {
      imageCanvasCtx.fillStyle = 'green';
      imageCanvasCtx.fillRect(0, 0, 720, 720);
    }
    setTimeout(() => {
      if (imageCanvasCtx) {
        imageCanvasCtx.fillStyle = 'gray';
        imageCanvasCtx.fillRect(0, 0, 720, 720);
        imageCanvasCtx.strokeStyle = 'red';
        imageCanvasCtx.strokeRect(310, 310, 100, 100);
      }
    }, 500);

    reqId = undefined;
    trialInProgress = false;
    console.log('no more frames');
  }
}

loadAllImages(
  'scenebags/Blascotestimages/20211018_newfile_bkgddur=800ms_camerafar/zback',
  loadedImages
);
