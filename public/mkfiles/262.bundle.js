"use strict";(self.webpackChunkmkfiles=self.webpackChunkmkfiles||[]).push([[262],{35914:(e,t,n)=>{n.d(t,{_T:()=>i});function i(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create},48886:(e,t,n)=>{n.d(t,{wA:()=>l,H0:()=>d});function i(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{c(i.next(e))}catch(e){o(e)}}function s(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))}function r(e,t){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}Object.create;function o(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],i=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function a(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var i,r,o=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(i=o.next()).done;)a.push(i.value)}catch(e){r={error:e}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return a}function s(e,t,n){if(n||2===arguments.length)for(var i,r=0,o=t.length;r<o;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}Object.create;var c=n(74444),l=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),u="[DEFAULT]",h=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new c.BH;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch(e){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:u})}catch(e){}try{for(var i=o(this.instancesDeferred.entries()),r=i.next();!r.done;r=i.next()){var s=a(r.value,2),c=s[0],l=s[1],h=this.normalizeInstanceIdentifier(c);try{var d=this.getOrInitializeService({instanceIdentifier:h});l.resolve(d)}catch(e){}}}catch(e){t={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e=u),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return i(this,void 0,void 0,(function(){var e;return r(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(s(s([],a(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),a(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e=u),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e=u),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var i=e.options,r=void 0===i?{}:i,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var c=this.getOrInitializeService({instanceIdentifier:s,options:r});try{for(var l=o(this.instancesDeferred.entries()),u=l.next();!u.done;u=l.next()){var h=a(u.value,2),d=h[0],p=h[1];s===this.normalizeInstanceIdentifier(d)&&p.resolve(c)}}catch(e){t={error:e}}finally{try{u&&!u.done&&(n=l.return)&&n.call(l)}finally{if(t)throw t.error}}return c},e.prototype.onInit=function(e,t){var n,i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);var o=this.instances.get(i);return o&&e(o,i),function(){r.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,i,r=this.onInitCallbacks.get(t);if(r)try{for(var a=o(r),s=a.next();!s.done;s=a.next()){var c=s.value;try{c(e,t)}catch(e){}}}catch(e){n={error:e}}finally{try{s&&!s.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,i=e.options,r=void 0===i?{}:i,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===u?void 0:t),options:r}),this.instances.set(n,o),this.instancesOptions.set(n,r),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch(e){}return o||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e=u),this.component?this.component.multipleInstances?e:u:e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();var d=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new h(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}()},11369:(e,t,n)=>{n.r(t),n.d(t,{ActionCodeOperation:()=>i.A,ActionCodeURL:()=>i.ac,AuthCredential:()=>i.G,AuthErrorCodes:()=>i.C,EmailAuthCredential:()=>i.H,EmailAuthProvider:()=>i.L,FacebookAuthProvider:()=>i.M,FactorId:()=>i.F,GithubAuthProvider:()=>i.Q,GoogleAuthProvider:()=>i.N,OAuthCredential:()=>i.I,OAuthProvider:()=>i.T,OperationType:()=>i.O,PhoneAuthCredential:()=>i.J,PhoneAuthProvider:()=>i.P,PhoneMultiFactorGenerator:()=>i.m,ProviderId:()=>i.o,RecaptchaVerifier:()=>i.R,SAMLAuthProvider:()=>i.U,SignInMethod:()=>i.S,TwitterAuthProvider:()=>i.V,applyActionCode:()=>i.a1,browserLocalPersistence:()=>i.b,browserPopupRedirectResolver:()=>i.k,browserSessionPersistence:()=>i.a,checkActionCode:()=>i.a2,confirmPasswordReset:()=>i.a0,connectAuthEmulator:()=>i.E,createUserWithEmailAndPassword:()=>i.a4,debugErrorMap:()=>i.z,deleteUser:()=>i.y,fetchSignInMethodsForEmail:()=>i.a9,getAdditionalUserInfo:()=>i.ak,getAuth:()=>i.n,getIdToken:()=>i.ah,getIdTokenResult:()=>i.ai,getMultiFactorResolver:()=>i.am,getRedirectResult:()=>i.j,inMemoryPersistence:()=>i.K,indexedDBLocalPersistence:()=>i.i,initializeAuth:()=>i.D,isSignInWithEmailLink:()=>i.a7,linkWithCredential:()=>i.Y,linkWithPhoneNumber:()=>i.l,linkWithPopup:()=>i.d,linkWithRedirect:()=>i.g,multiFactor:()=>i.an,onAuthStateChanged:()=>i.t,onIdTokenChanged:()=>i.q,parseActionCodeURL:()=>i.ad,prodErrorMap:()=>i.B,reauthenticateWithCredential:()=>i.Z,reauthenticateWithPhoneNumber:()=>i.r,reauthenticateWithPopup:()=>i.e,reauthenticateWithRedirect:()=>i.h,reload:()=>i.al,sendEmailVerification:()=>i.aa,sendPasswordResetEmail:()=>i.$,sendSignInLinkToEmail:()=>i.a6,setPersistence:()=>i.p,signInAnonymously:()=>i.W,signInWithCredential:()=>i.X,signInWithCustomToken:()=>i._,signInWithEmailAndPassword:()=>i.a5,signInWithEmailLink:()=>i.a8,signInWithPhoneNumber:()=>i.s,signInWithPopup:()=>i.c,signInWithRedirect:()=>i.f,signOut:()=>i.x,unlink:()=>i.aj,updateCurrentUser:()=>i.w,updateEmail:()=>i.af,updatePassword:()=>i.ag,updatePhoneNumber:()=>i.u,updateProfile:()=>i.ae,useDeviceLanguage:()=>i.v,verifyBeforeUpdateEmail:()=>i.ab,verifyPasswordResetCode:()=>i.a3});var i=n(4128);n(74444),n(94258),n(76934),n(48886)},96257:(e,t,n)=>{n.r(t),n.d(t,{AbstractUserDataWriter:()=>i.u7,Bytes:()=>i.Jj,CACHE_SIZE_UNLIMITED:()=>i.IX,CollectionReference:()=>i.hx,DocumentReference:()=>i.my,DocumentSnapshot:()=>i.xU,FieldPath:()=>i.Lz,FieldValue:()=>i.GH,Firestore:()=>i.gg,FirestoreError:()=>i.WA,GeoPoint:()=>i.F8,LoadBundleTask:()=>i.tO,Query:()=>i.AE,QueryConstraint:()=>i.O$,QueryDocumentSnapshot:()=>i.$q,QuerySnapshot:()=>i.W,SnapshotMetadata:()=>i.oZ,Timestamp:()=>i.EK,Transaction:()=>i.YW,WriteBatch:()=>i.PU,_DatabaseId:()=>i.l7,_DocumentKey:()=>i.Ky,_EmptyCredentialsProvider:()=>i.Vi,_FieldPath:()=>i.Xb,_cast:()=>i.Cf,_debugAssert:()=>i.K9,_isBase64Available:()=>i.Me,_logWarn:()=>i.yq,_validateIsNotUsedTogether:()=>i.Wi,addDoc:()=>i.ET,arrayRemove:()=>i.Ab,arrayUnion:()=>i.vr,clearIndexedDbPersistence:()=>i.Fc,collection:()=>i.hJ,collectionGroup:()=>i.B$,connectFirestoreEmulator:()=>i.at,deleteDoc:()=>i.oe,deleteField:()=>i.AK,disableNetwork:()=>i.TF,doc:()=>i.JU,documentId:()=>i.Jm,enableIndexedDbPersistence:()=>i.ST,enableMultiTabIndexedDbPersistence:()=>i.fH,enableNetwork:()=>i.Ix,endAt:()=>i.Wu,endBefore:()=>i.Lx,ensureFirestoreConfigured:()=>i.qY,executeWrite:()=>i.GL,getDoc:()=>i.QT,getDocFromCache:()=>i.kl,getDocFromServer:()=>i.Xk,getDocs:()=>i.PL,getDocsFromCache:()=>i.UQ,getDocsFromServer:()=>i.zN,getFirestore:()=>i.ad,increment:()=>i.nP,initializeFirestore:()=>i.LV,limit:()=>i.b9,limitToLast:()=>i.vh,loadBundle:()=>i.Pb,namedQuery:()=>i.L$,onSnapshot:()=>i.cf,onSnapshotsInSync:()=>i.sc,orderBy:()=>i.Xo,query:()=>i.IO,queryEqual:()=>i.iE,refEqual:()=>i.Eo,runTransaction:()=>i.i3,serverTimestamp:()=>i.Bt,setDoc:()=>i.pl,setLogLevel:()=>i.Ub,snapshotEqual:()=>i.qK,startAfter:()=>i.TQ,startAt:()=>i.e0,terminate:()=>i.RA,updateDoc:()=>i.r7,waitForPendingWrites:()=>i.Mx,where:()=>i.ar,writeBatch:()=>i.qs});var i=n(19)},31644:(e,t,n)=>{n.r(t),n.d(t,{connectFunctionsEmulator:()=>I,getFunctions:()=>v,httpsCallable:()=>b});var i=n(94258),r=n(74444),o=n(48886);function a(e,t){const n={};for(const i in e)e.hasOwnProperty(i)&&(n[i]=t(e[i]));return n}function s(e){if(null==e)return null;if(e instanceof Number&&(e=e.valueOf()),"number"==typeof e&&isFinite(e))return e;if(!0===e||!1===e)return e;if("[object String]"===Object.prototype.toString.call(e))return e;if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map((e=>s(e)));if("function"==typeof e||"object"==typeof e)return a(e,(e=>s(e)));throw new Error("Data cannot be encoded in JSON: "+e)}function c(e){if(null==e)return e;if(e["@type"])switch(e["@type"]){case"type.googleapis.com/google.protobuf.Int64Value":case"type.googleapis.com/google.protobuf.UInt64Value":{const t=Number(e.value);if(isNaN(t))throw new Error("Data cannot be decoded from JSON: "+e);return t}default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map((e=>c(e))):"function"==typeof e||"object"==typeof e?a(e,(e=>c(e))):e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l="functions",u={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h extends r.ZR{constructor(e,t,n){super(`functions/${e}`,t||""),this.details=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class d{constructor(e,t,n){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then((e=>this.auth=e),(()=>{})),this.messaging||t.get().then((e=>this.messaging=e),(()=>{})),this.appCheck||n.get().then((e=>this.appCheck=e),(()=>{}))}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return null==e?void 0:e.accessToken}catch(e){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return await this.messaging.getToken()}catch(e){return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){return{authToken:await this.getAuthToken(),messagingToken:await this.getMessagingToken(),appCheckToken:await this.getAppCheckToken()}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p="us-central1";function f(e){return new Promise(((t,n)=>{setTimeout((()=>{n(new h("deadline-exceeded","deadline-exceeded"))}),e)}))}class m{constructor(e,t,n,i,r="us-central1",o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new d(t,n,i),this.cancelAllRequests=new Promise((e=>{this.deleteService=()=>Promise.resolve(e())}));try{const e=new URL(r);this.customDomain=e.origin,this.region=p}catch(e){this.customDomain=null,this.region=r}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;if(null!==this.emulatorOrigin){return`${this.emulatorOrigin}/${t}/${this.region}/${e}`}return null!==this.customDomain?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function g(e,t,n){return i=>async function(e,t,n,i){const r=e._url(t),o={data:n=s(n)},a={},l=await e.contextProvider.getContext();l.authToken&&(a.Authorization="Bearer "+l.authToken);l.messagingToken&&(a["Firebase-Instance-ID-Token"]=l.messagingToken);null!==l.appCheckToken&&(a["X-Firebase-AppCheck"]=l.appCheckToken);const d=i.timeout||7e4,p=await Promise.race([y(r,o,a,e.fetchImpl),f(d),e.cancelAllRequests]);if(!p)throw new h("cancelled","Firebase Functions instance was deleted.");const m=function(e,t){let n,i=function(e){if(e>=200&&e<300)return"ok";switch(e){case 0:case 500:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}(e),r=i;try{const e=t&&t.error;if(e){const t=e.status;if("string"==typeof t){if(!u[t])return new h("internal","internal");i=u[t],r=t}const o=e.message;"string"==typeof o&&(r=o),n=e.details,void 0!==n&&(n=c(n))}}catch(e){}return"ok"===i?null:new h(i,r,n)}(p.status,p.json);if(m)throw m;if(!p.json)throw new h("internal","Response is not valid JSON object.");let g=p.json.data;void 0===g&&(g=p.json.result);if(void 0===g)throw new h("internal","Response is missing data field.");return{data:c(g)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,i,n||{})}async function y(e,t,n,i){let r;n["Content-Type"]="application/json";try{r=await i(e,{method:"POST",body:JSON.stringify(t),headers:n})}catch(e){return{status:0,json:null}}let o=null;try{o=await r.json()}catch(e){}return{status:r.status,json:o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function v(e=(0,i.Mq)(),t="us-central1"){return(0,i.qX)((0,r.m9)(e),l).getImmediate({identifier:t})}function I(e,t,n){!function(e,t,n){e.emulatorOrigin=`http://${t}:${n}`}((0,r.m9)(e),t,n)}function b(e,t,n){return g((0,r.m9)(e),t,n)}var w;w=fetch.bind(self),(0,i.Xd)(new o.wA(l,((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("messaging-internal"),o=e.getProvider("app-check-internal");return new m(n,i,r,o,t,w)}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)("@firebase/functions","0.7.2")}}]);
//# sourceMappingURL=262.bundle.js.map