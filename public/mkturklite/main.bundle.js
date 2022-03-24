/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const app_1 = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
const storage_1 = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
const auth_1 = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
const firebaseConfig = {
    apiKey: 'AIzaSyA0fbv2VqE-AfF6V_nxSSXCEqaTlBlZnTI',
    authDomain: 'sandbox-ce2c5.firebaseapp.com',
    databaseURL: 'https://sandbox-ce2c5.firebaseio.com',
    projectId: 'sandbox-ce2c5',
    storageBucket: 'sandbox-ce2c5.appspot.com',
    messagingSenderId: '1003719887944',
};
const mkturkliteApp = (0, app_1.initializeApp)(firebaseConfig);
const auth = (0, auth_1.getAuth)(mkturkliteApp);
const authProvider = new auth_1.GoogleAuthProvider();
(0, auth_1.getRedirectResult)(auth).then((result) => {
    if (result) {
        console.log('Sign-In Redirect Result, USER:', result.user.email, 'is signed in');
    }
    else if (auth.currentUser) {
        console.log('Sign-In Redirect Result, USER:', auth.currentUser.email, 'is signed in');
    }
    else {
        (0, auth_1.signInWithRedirect)(auth, authProvider);
    }
});
const storage = (0, storage_1.getStorage)(mkturkliteApp);
const storageRef = (0, storage_1.ref)(storage);
const storageRootRef = (0, storage_1.ref)(storageRef, 'mkturkfiles');
const imagesRef = (0, storage_1.ref)(storageRootRef, 'scenebags/Blascotestimages/20211018_newfile_bkgddur=800ms_camerafar/zback');
const numTrials = 50;
let currentTrial;
let trialSequence;
let trialInProgress = false;
let start;
let prevTimestamp;
let prevDrawTime;
let reqId;
let done = false;
let imagesLoaded = false;
const punishTimeout = 2000; // 2000 ms
const interTrialInterval = 1000; // 1000 ms
const imageCanvas = document.querySelector('#image-cvs');
const canvasBoundingRect = imageCanvas.getBoundingClientRect();
const imageCanvasCtx = imageCanvas.getContext('2d');
if (imageCanvasCtx) {
    imageCanvasCtx.fillStyle = 'gray';
    imageCanvasCtx.fillRect(0, 0, imageCanvas.width, imageCanvas.height);
    imageCanvasCtx.strokeStyle = 'red';
    imageCanvasCtx.strokeRect(310, 310, 100, 100);
}
let loadedImages = [];
let imageBitmaps = [];
imageCanvas.addEventListener('imagesLoaded', (evt) => {
    console.log('can do stuff now');
    imagesLoaded = true;
    trialSequence = generateTrialSequence(loadedImages, numTrials);
    console.log(trialSequence);
});
imageCanvas.addEventListener('pointerdown', (evt) => {
    evt.preventDefault();
    console.log('pointerdown');
    if (imagesLoaded && isInBoundingBox(evt) && !trialInProgress) {
        trialInProgress = true;
        reqId = animate();
    }
});
imageCanvas.addEventListener('pointermove', (evt) => {
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
function isInBoundingBox(evt) {
    const trueX = evt.clientX - canvasBoundingRect.left;
    const trueY = evt.clientY - canvasBoundingRect.top;
    if (trueX >= 310 && trueX <= 410 && trueY >= 310 && trueY <= 410) {
        return true;
    }
    return false;
}
imageCanvas.addEventListener('pointerup', (evt) => {
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
function generateTrialSequence(imageBag, numTrials) {
    let trialSequence = [];
    for (let i = 0; i < numTrials; i++) {
        const idx = Math.floor(Math.random() * imageBag.length);
        const numFrames = 50;
        const sample = { image: imageBag[idx], numFrames: numFrames };
        const trial = [sample];
        trialSequence.push(trial);
    }
    return trialSequence;
}
function loadAllImages(dirName, targetArr) {
    imagesLoaded = false;
    let thisRef = (0, storage_1.ref)(storageRootRef, dirName);
    (0, storage_1.listAll)(thisRef).then((listAllResult) => {
        const bitmapPromises = listAllResult.items.map(async (fileRef) => {
            return (0, storage_1.getDownloadURL)((0, storage_1.ref)(thisRef, fileRef.name)).then(async (url) => {
                return {
                    name: fileRef.name,
                    bitmap: await createImageBitmap(await (await fetch(url)).blob()),
                };
            });
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
    imageCanvasCtx === null || imageCanvasCtx === void 0 ? void 0 : imageCanvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
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
function updateCanvas(timestamp) {
    if (start === undefined) {
        start = timestamp;
    }
    const elapsed = timestamp - start;
    if (prevTimestamp !== timestamp &&
        currentTrial.frameCounter < currentTrial.sampleIdxSeq.length) {
        if (imageCanvasCtx) {
            imageCanvasCtx.drawImage(currentTrial.trial[currentTrial.sampleIdxSeq[currentTrial.frameCounter]]
                .image.bitmap, 0, 0);
            if (currentTrial.frameCounter % 2 == 0) {
                imageCanvasCtx.fillStyle = 'white';
            }
            else {
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
    }
    else {
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
loadAllImages('scenebags/Blascotestimages/20211018_newfile_bkgddur=800ms_camerafar/zback', loadedImages);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmkturklite"] = self["webpackChunkmkturklite"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_firebase_app_dist_index_esm_js-node_modules_firebase_auth_dist_index_esm-7754d1"], () => (__webpack_require__("./src/main.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21rdHVya2xpdGUvLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9ta3R1cmtsaXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21rdHVya2xpdGUvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9ta3R1cmtsaXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ta3R1cmtsaXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbWt0dXJrbGl0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21rdHVya2xpdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ta3R1cmtsaXRlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL21rdHVya2xpdGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9ta3R1cmtsaXRlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9ta3R1cmtsaXRlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCB7IGdldERvd25sb2FkVVJMLCBnZXRTdG9yYWdlLCBsaXN0QWxsLCByZWYgfSBmcm9tICdmaXJlYmFzZS9zdG9yYWdlJztcbmltcG9ydCB7XG4gIGdldEF1dGgsXG4gIEdvb2dsZUF1dGhQcm92aWRlcixcbiAgZ2V0UmVkaXJlY3RSZXN1bHQsXG4gIHNpZ25JbldpdGhSZWRpcmVjdCxcbn0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XG5cbmltcG9ydCB7IEN1cnJlbnRUcmlhbCwgSW1hZ2UsIFNhbXBsZSwgVHJpYWwsIFRyaWFsU2VxdWVuY2UgfSBmcm9tICcuL2RhdGFUeXBlcyc7XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6ICdBSXphU3lBMGZidjJWcUUtQWZGNlZfbnhTU1hDRXFhVGxCbFpuVEknLFxuICBhdXRoRG9tYWluOiAnc2FuZGJveC1jZTJjNS5maXJlYmFzZWFwcC5jb20nLFxuICBkYXRhYmFzZVVSTDogJ2h0dHBzOi8vc2FuZGJveC1jZTJjNS5maXJlYmFzZWlvLmNvbScsXG4gIHByb2plY3RJZDogJ3NhbmRib3gtY2UyYzUnLFxuICBzdG9yYWdlQnVja2V0OiAnc2FuZGJveC1jZTJjNS5hcHBzcG90LmNvbScsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiAnMTAwMzcxOTg4Nzk0NCcsXG59O1xuXG5jb25zdCBta3R1cmtsaXRlQXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5jb25zdCBhdXRoID0gZ2V0QXV0aChta3R1cmtsaXRlQXBwKTtcblxuY29uc3QgYXV0aFByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xuZ2V0UmVkaXJlY3RSZXN1bHQoYXV0aCkudGhlbigocmVzdWx0KSA9PiB7XG4gIGlmIChyZXN1bHQpIHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgICdTaWduLUluIFJlZGlyZWN0IFJlc3VsdCwgVVNFUjonLFxuICAgICAgcmVzdWx0LnVzZXIuZW1haWwsXG4gICAgICAnaXMgc2lnbmVkIGluJ1xuICAgICk7XG4gIH0gZWxzZSBpZiAoYXV0aC5jdXJyZW50VXNlcikge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgJ1NpZ24tSW4gUmVkaXJlY3QgUmVzdWx0LCBVU0VSOicsXG4gICAgICBhdXRoLmN1cnJlbnRVc2VyLmVtYWlsLFxuICAgICAgJ2lzIHNpZ25lZCBpbidcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHNpZ25JbldpdGhSZWRpcmVjdChhdXRoLCBhdXRoUHJvdmlkZXIpO1xuICB9XG59KTtcblxuY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UobWt0dXJrbGl0ZUFwcCk7XG5jb25zdCBzdG9yYWdlUmVmID0gcmVmKHN0b3JhZ2UpO1xuY29uc3Qgc3RvcmFnZVJvb3RSZWYgPSByZWYoc3RvcmFnZVJlZiwgJ21rdHVya2ZpbGVzJyk7XG5jb25zdCBpbWFnZXNSZWYgPSByZWYoXG4gIHN0b3JhZ2VSb290UmVmLFxuICAnc2NlbmViYWdzL0JsYXNjb3Rlc3RpbWFnZXMvMjAyMTEwMThfbmV3ZmlsZV9ia2dkZHVyPTgwMG1zX2NhbWVyYWZhci96YmFjaydcbik7XG5cbmNvbnN0IG51bVRyaWFscyA9IDUwO1xubGV0IGN1cnJlbnRUcmlhbDogQ3VycmVudFRyaWFsO1xubGV0IHRyaWFsU2VxdWVuY2U6IFRyaWFsU2VxdWVuY2U7XG5sZXQgdHJpYWxJblByb2dyZXNzID0gZmFsc2U7XG5cbmxldCBzdGFydDogbnVtYmVyIHwgdW5kZWZpbmVkO1xubGV0IHByZXZUaW1lc3RhbXA6IG51bWJlcjtcbmxldCBwcmV2RHJhd1RpbWU6IG51bWJlcjtcbmxldCByZXFJZDogbnVtYmVyIHwgdW5kZWZpbmVkO1xubGV0IGRvbmUgPSBmYWxzZTtcbmxldCBpbWFnZXNMb2FkZWQgPSBmYWxzZTtcbmNvbnN0IHB1bmlzaFRpbWVvdXQgPSAyMDAwOyAvLyAyMDAwIG1zXG5jb25zdCBpbnRlclRyaWFsSW50ZXJ2YWwgPSAxMDAwOyAvLyAxMDAwIG1zXG5cbmNvbnN0IGltYWdlQ2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlLWN2cycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuY29uc3QgY2FudmFzQm91bmRpbmdSZWN0OiBET01SZWN0ID0gaW1hZ2VDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5jb25zdCBpbWFnZUNhbnZhc0N0eCA9IGltYWdlQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5pZiAoaW1hZ2VDYW52YXNDdHgpIHtcbiAgaW1hZ2VDYW52YXNDdHguZmlsbFN0eWxlID0gJ2dyYXknO1xuICBpbWFnZUNhbnZhc0N0eC5maWxsUmVjdCgwLCAwLCBpbWFnZUNhbnZhcy53aWR0aCwgaW1hZ2VDYW52YXMuaGVpZ2h0KTtcbiAgaW1hZ2VDYW52YXNDdHguc3Ryb2tlU3R5bGUgPSAncmVkJztcbiAgaW1hZ2VDYW52YXNDdHguc3Ryb2tlUmVjdCgzMTAsIDMxMCwgMTAwLCAxMDApO1xufVxuXG5sZXQgbG9hZGVkSW1hZ2VzOiBJbWFnZVtdID0gW107XG5sZXQgaW1hZ2VCaXRtYXBzOiBJbWFnZUJpdG1hcFtdID0gW107XG5cbmltYWdlQ2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2ltYWdlc0xvYWRlZCcsIChldnQ6IEV2ZW50KSA9PiB7XG4gIGNvbnNvbGUubG9nKCdjYW4gZG8gc3R1ZmYgbm93Jyk7XG4gIGltYWdlc0xvYWRlZCA9IHRydWU7XG4gIHRyaWFsU2VxdWVuY2UgPSBnZW5lcmF0ZVRyaWFsU2VxdWVuY2UobG9hZGVkSW1hZ2VzLCBudW1UcmlhbHMpO1xuICBjb25zb2xlLmxvZyh0cmlhbFNlcXVlbmNlKTtcbn0pO1xuXG5pbWFnZUNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIChldnQ6IFBvaW50ZXJFdmVudCkgPT4ge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc29sZS5sb2coJ3BvaW50ZXJkb3duJyk7XG4gIGlmIChpbWFnZXNMb2FkZWQgJiYgaXNJbkJvdW5kaW5nQm94KGV2dCkgJiYgIXRyaWFsSW5Qcm9ncmVzcykge1xuICAgIHRyaWFsSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgcmVxSWQgPSBhbmltYXRlKCk7XG4gIH1cbn0pO1xuXG5pbWFnZUNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIChldnQ6IFBvaW50ZXJFdmVudCkgPT4ge1xuICAvLyBjb25zb2xlLmxvZygncG9pbnRlcm1vdmU6JywgZXZ0KTtcbiAgaWYgKHJlcUlkICE9PSB1bmRlZmluZWQgJiYgIWlzSW5Cb3VuZGluZ0JveChldnQpKSB7XG4gICAgdHJpYWxJblByb2dyZXNzID0gZmFsc2U7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxSWQpO1xuICAgIHJlcUlkID0gdW5kZWZpbmVkO1xuICAgIGlmIChpbWFnZUNhbnZhc0N0eCkge1xuICAgICAgaW1hZ2VDYW52YXNDdHguZmlsbFN0eWxlID0gJ29yYW5nZSc7XG4gICAgICBpbWFnZUNhbnZhc0N0eC5maWxsUmVjdCgwLCAwLCA3MjAsIDcyMCk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGltYWdlQ2FudmFzQ3R4KSB7XG4gICAgICAgIGltYWdlQ2FudmFzQ3R4LmZpbGxTdHlsZSA9ICdncmF5JztcbiAgICAgICAgaW1hZ2VDYW52YXNDdHguZmlsbFJlY3QoMCwgMCwgNzIwLCA3MjApO1xuICAgICAgICBpbWFnZUNhbnZhc0N0eC5zdHJva2VTdHlsZSA9ICdyZWQnO1xuICAgICAgICBpbWFnZUNhbnZhc0N0eC5zdHJva2VSZWN0KDMxMCwgMzEwLCAxMDAsIDEwMCk7XG4gICAgICB9XG4gICAgfSwgcHVuaXNoVGltZW91dCk7XG5cbiAgICBjb25zb2xlLmxvZygncG9pbnRlcm1vdmUgY2FuY2VsQW5pbWF0aW9uIGNhbGxlZCcpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gaXNJbkJvdW5kaW5nQm94KGV2dDogUG9pbnRlckV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHRydWVYID0gZXZ0LmNsaWVudFggLSBjYW52YXNCb3VuZGluZ1JlY3QubGVmdDtcbiAgY29uc3QgdHJ1ZVkgPSBldnQuY2xpZW50WSAtIGNhbnZhc0JvdW5kaW5nUmVjdC50b3A7XG5cbiAgaWYgKHRydWVYID49IDMxMCAmJiB0cnVlWCA8PSA0MTAgJiYgdHJ1ZVkgPj0gMzEwICYmIHRydWVZIDw9IDQxMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5pbWFnZUNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCAoZXZ0OiBQb2ludGVyRXZlbnQpID0+IHtcbiAgaWYgKHJlcUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICB0cmlhbEluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXFJZCk7XG4gICAgcmVxSWQgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGltYWdlQ2FudmFzQ3R4KSB7XG4gICAgICBpbWFnZUNhbnZhc0N0eC5maWxsU3R5bGUgPSAnb3JhbmdlJztcbiAgICAgIGltYWdlQ2FudmFzQ3R4LmZpbGxSZWN0KDAsIDAsIDcyMCwgNzIwKTtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoaW1hZ2VDYW52YXNDdHgpIHtcbiAgICAgICAgaW1hZ2VDYW52YXNDdHguZmlsbFN0eWxlID0gJ2dyYXknO1xuICAgICAgICBpbWFnZUNhbnZhc0N0eC5maWxsUmVjdCgwLCAwLCA3MjAsIDcyMCk7XG4gICAgICAgIGltYWdlQ2FudmFzQ3R4LnN0cm9rZVN0eWxlID0gJ3JlZCc7XG4gICAgICAgIGltYWdlQ2FudmFzQ3R4LnN0cm9rZVJlY3QoMzEwLCAzMTAsIDEwMCwgMTAwKTtcbiAgICAgIH1cbiAgICB9LCBwdW5pc2hUaW1lb3V0KTtcbiAgICBjb25zb2xlLmxvZygncG9pbnRlcnVwIGNhbmNlbEFuaW1hdGlvbiBjYWxsZWQnKTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVHJpYWxTZXF1ZW5jZShcbiAgaW1hZ2VCYWc6IEltYWdlW10sXG4gIG51bVRyaWFsczogbnVtYmVyXG4pOiBUcmlhbFNlcXVlbmNlIHtcbiAgbGV0IHRyaWFsU2VxdWVuY2U6IFRyaWFsU2VxdWVuY2UgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1UcmlhbHM7IGkrKykge1xuICAgIGNvbnN0IGlkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGltYWdlQmFnLmxlbmd0aCk7XG4gICAgY29uc3QgbnVtRnJhbWVzID0gNTA7XG4gICAgY29uc3Qgc2FtcGxlOiBTYW1wbGUgPSB7IGltYWdlOiBpbWFnZUJhZ1tpZHhdLCBudW1GcmFtZXM6IG51bUZyYW1lcyB9O1xuICAgIGNvbnN0IHRyaWFsOiBUcmlhbCA9IFtzYW1wbGVdO1xuICAgIHRyaWFsU2VxdWVuY2UucHVzaCh0cmlhbCk7XG4gIH1cbiAgcmV0dXJuIHRyaWFsU2VxdWVuY2U7XG59XG5cbmZ1bmN0aW9uIGxvYWRBbGxJbWFnZXMoZGlyTmFtZTogc3RyaW5nLCB0YXJnZXRBcnI6IEltYWdlW10pIHtcbiAgaW1hZ2VzTG9hZGVkID0gZmFsc2U7XG4gIGxldCB0aGlzUmVmID0gcmVmKHN0b3JhZ2VSb290UmVmLCBkaXJOYW1lKTtcbiAgbGlzdEFsbCh0aGlzUmVmKS50aGVuKChsaXN0QWxsUmVzdWx0KSA9PiB7XG4gICAgY29uc3QgYml0bWFwUHJvbWlzZXMgPSBsaXN0QWxsUmVzdWx0Lml0ZW1zLm1hcChhc3luYyAoZmlsZVJlZikgPT4ge1xuICAgICAgcmV0dXJuIGdldERvd25sb2FkVVJMKHJlZih0aGlzUmVmLCBmaWxlUmVmLm5hbWUpKS50aGVuKFxuICAgICAgICBhc3luYyAodXJsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogZmlsZVJlZi5uYW1lLFxuICAgICAgICAgICAgYml0bWFwOiBhd2FpdCBjcmVhdGVJbWFnZUJpdG1hcChhd2FpdCAoYXdhaXQgZmV0Y2godXJsKSkuYmxvYigpKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICAgIFByb21pc2UuYWxsKGJpdG1hcFByb21pc2VzKVxuICAgICAgLnRoZW4oYXN5bmMgKHJlc3VsdCkgPT4ge1xuICAgICAgICBjb25zdCBsb2FkaW5nU3VjY2Vzc0V2dCA9IG5ldyBFdmVudCgnaW1hZ2VzTG9hZGVkJywge1xuICAgICAgICAgIGJ1YmJsZXM6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmVzdWx0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICB0YXJnZXRBcnIucHVzaChpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGltYWdlQ2FudmFzLmRpc3BhdGNoRXZlbnQobG9hZGluZ1N1Y2Nlc3NFdnQpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignSW1hZ2UgTG9hZGluZyBFcnJvcjonLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gIGltYWdlQ2FudmFzQ3R4Py5jbGVhclJlY3QoMCwgMCwgaW1hZ2VDYW52YXMud2lkdGgsIGltYWdlQ2FudmFzLmhlaWdodCk7XG4gIGNvbnN0IHRyaWFsID0gdHJpYWxTZXF1ZW5jZS5zaGlmdCgpO1xuICBpZiAodHJpYWwgIT09IHVuZGVmaW5lZCkge1xuICAgIGN1cnJlbnRUcmlhbCA9IHtcbiAgICAgIHRyaWFsOiB0cmlhbCxcbiAgICAgIGZyYW1lQ291bnRlcjogMCxcbiAgICAgIHNhbXBsZUlkeFNlcTogQXJyYXkodHJpYWxbMF0ubnVtRnJhbWVzKS5maWxsKDApLFxuICAgIH07XG4gICAgc3RhcnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVDYW52YXMpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDYW52YXModGltZXN0YW1wOiBudW1iZXIpIHtcbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydCA9IHRpbWVzdGFtcDtcbiAgfVxuICBjb25zdCBlbGFwc2VkID0gdGltZXN0YW1wIC0gc3RhcnQ7XG5cbiAgaWYgKFxuICAgIHByZXZUaW1lc3RhbXAgIT09IHRpbWVzdGFtcCAmJlxuICAgIGN1cnJlbnRUcmlhbC5mcmFtZUNvdW50ZXIgPCBjdXJyZW50VHJpYWwuc2FtcGxlSWR4U2VxLmxlbmd0aFxuICApIHtcbiAgICBpZiAoaW1hZ2VDYW52YXNDdHgpIHtcbiAgICAgIGltYWdlQ2FudmFzQ3R4LmRyYXdJbWFnZShcbiAgICAgICAgY3VycmVudFRyaWFsLnRyaWFsW2N1cnJlbnRUcmlhbC5zYW1wbGVJZHhTZXFbY3VycmVudFRyaWFsLmZyYW1lQ291bnRlcl1dXG4gICAgICAgICAgLmltYWdlLmJpdG1hcCxcbiAgICAgICAgMCxcbiAgICAgICAgMFxuICAgICAgKTtcbiAgICAgIGlmIChjdXJyZW50VHJpYWwuZnJhbWVDb3VudGVyICUgMiA9PSAwKSB7XG4gICAgICAgIGltYWdlQ2FudmFzQ3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbWFnZUNhbnZhc0N0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgICAgfVxuICAgICAgaW1hZ2VDYW52YXNDdHguZmlsbFJlY3QoNjcwLCA2NzAsIDUwLCA1MCk7XG4gICAgICBpbWFnZUNhbnZhc0N0eC5zdHJva2VTdHlsZSA9ICdyZWQnO1xuICAgICAgaW1hZ2VDYW52YXNDdHguc3Ryb2tlUmVjdCgzMTAsIDMxMCwgMTAwLCAxMDApO1xuICAgICAgY29uc29sZS5sb2cocGVyZm9ybWFuY2Uubm93KCkgLSB0aW1lc3RhbXApO1xuICAgICAgLy8gaWYgKGN1cnJlbnRUcmlhbC5mcmFtZUNvdW50ZXIgPT0gMCkge1xuICAgICAgLy8gICBwcmV2RHJhd1RpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ2ZpcnN0IGZyYW1lJyk7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgLy8gICBsZXQgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKCd0aW1lIGZyb20gcHJldmlvdXMgZHJhdzonLCBub3cgLSBwcmV2RHJhd1RpbWUpO1xuICAgICAgLy8gICBwcmV2RHJhd1RpbWUgPSBub3c7XG4gICAgICAvLyB9XG4gICAgfVxuXG4gICAgcHJldlRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcbiAgICBjdXJyZW50VHJpYWwuZnJhbWVDb3VudGVyKys7XG4gICAgcmVxSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlQ2FudmFzKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAocmVxSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxSWQpO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VDYW52YXNDdHgpIHtcbiAgICAgIGltYWdlQ2FudmFzQ3R4LmZpbGxTdHlsZSA9ICdncmVlbic7XG4gICAgICBpbWFnZUNhbnZhc0N0eC5maWxsUmVjdCgwLCAwLCA3MjAsIDcyMCk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGltYWdlQ2FudmFzQ3R4KSB7XG4gICAgICAgIGltYWdlQ2FudmFzQ3R4LmZpbGxTdHlsZSA9ICdncmF5JztcbiAgICAgICAgaW1hZ2VDYW52YXNDdHguZmlsbFJlY3QoMCwgMCwgNzIwLCA3MjApO1xuICAgICAgICBpbWFnZUNhbnZhc0N0eC5zdHJva2VTdHlsZSA9ICdyZWQnO1xuICAgICAgICBpbWFnZUNhbnZhc0N0eC5zdHJva2VSZWN0KDMxMCwgMzEwLCAxMDAsIDEwMCk7XG4gICAgICB9XG4gICAgfSwgNTAwKTtcblxuICAgIHJlcUlkID0gdW5kZWZpbmVkO1xuICAgIHRyaWFsSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgIGNvbnNvbGUubG9nKCdubyBtb3JlIGZyYW1lcycpO1xuICB9XG59XG5cbmxvYWRBbGxJbWFnZXMoXG4gICdzY2VuZWJhZ3MvQmxhc2NvdGVzdGltYWdlcy8yMDIxMTAxOF9uZXdmaWxlX2JrZ2RkdXI9ODAwbXNfY2FtZXJhZmFyL3piYWNrJyxcbiAgbG9hZGVkSW1hZ2VzXG4pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua21rdHVya2xpdGVcIl0gPSBzZWxmW1wid2VicGFja0NodW5rbWt0dXJrbGl0ZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfZmlyZWJhc2VfYXBwX2Rpc3RfaW5kZXhfZXNtX2pzLW5vZGVfbW9kdWxlc19maXJlYmFzZV9hdXRoX2Rpc3RfaW5kZXhfZXNtLTc3NTRkMVwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tYWluLnRzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=