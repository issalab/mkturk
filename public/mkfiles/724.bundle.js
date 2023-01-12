"use strict";(self.webpackChunkmkfiles=self.webpackChunkmkfiles||[]).push([[724],{76934:(t,e,n)=>{n.d(e,{in:()=>r,Yd:()=>l,Ub:()=>u,Am:()=>c});
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
const i=[];var r;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},h=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=a[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class l{constructor(t){this.name=t,this._logLevel=o,this._logHandler=h,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in r))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}}function u(t){i.forEach((e=>{e.setLogLevel(t)}))}function c(t,e){for(const n of i){let i=null;e&&e.level&&(i=s[e.level]),n.userLogHandler=null===t?null:(e,n,...s)=>{const o=s.map((t=>{if(null==t)return null;if("string"==typeof t)return t;if("number"==typeof t||"boolean"==typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(t){return null}})).filter((t=>t)).join(" ");n>=(null!=i?i:e.logLevel)&&t({level:r[n].toLowerCase(),message:o,args:s,type:e.name})}}}},74444:(t,e,n)=>{n.d(e,{BH:()=>a,LL:()=>y,ZR:()=>v,tV:()=>o,Sg:()=>h,ne:()=>C,vZ:()=>T,pd:()=>k,m9:()=>x,z$:()=>l,ru:()=>c,d:()=>p,xb:()=>w,w1:()=>d,hl:()=>m,uI:()=>u,b$:()=>f,G6:()=>_,Mn:()=>g,xO:()=>E,zd:()=>S});
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
const i=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const r=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,h=a?t[e+2]:0,l=r>>2,u=(3&r)<<4|o>>4;let c=(15&o)<<2|h>>6,f=63&h;a||(f=64,s||(c=64)),i.push(n[l],n[u],n[c],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(s>>10)),e[i++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const r=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==r||null==s||null==o||null==a)throw Error();const h=r<<2|s>>4;if(i.push(h),64!==o){const t=s<<4&240|o>>2;if(i.push(t),64!==a){const t=o<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},s=function(t){return function(t){const e=i(t);return r.encodeByteArray(e,!0)}(t).replace(/\./g,"")},o=function(t){try{return r.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
class a{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */function h(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[s(JSON.stringify({alg:"none",type:"JWT"})),s(JSON.stringify(o)),""].join(".")}
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
 */function l(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function u(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function c(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function f(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function p(){return l().indexOf("Electron/")>=0}function d(){const t=l();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function g(){return l().indexOf("MSAppHost/")>=0}function _(){return!function(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(t){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function m(){return"object"==typeof indexedDB}class v extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,v.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,y.prototype.create)}}class y{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?function(t,e){return t.replace(b,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new v(i,o,n)}}const b=/\{\$([^}]+)}/g;
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
 */function w(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function T(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(R(n)&&R(s)){if(!T(n,s))return!1}else if(n!==s)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function R(t){return null!==t&&"object"==typeof t}
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
 */function E(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function S(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function k(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
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
 */function C(t,e){const n=new O(t,e);return n.subscribe.bind(n)}class O{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=A),void 0===i.error&&(i.error=A),void 0===i.complete&&(i.complete=A);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function A(){}
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
/**
 * @license
 * Copyright 2021 Google LLC
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
function x(t){return t&&t._delegate?t._delegate:t}},43510:(t,e,n)=>{n.d(e,{jK:()=>hi,ju:()=>ui,tw:()=>li,zI:()=>fi,kN:()=>ci,ii:()=>pi,JJ:()=>di,UE:()=>oi,FJ:()=>ai});var i,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{},s={},o=o||{},a=r||self;function h(){}function l(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function u(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var c="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function d(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function g(t,e,n){return(g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:d).apply(null,arguments)}function _(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function m(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function v(){this.s=this.s,this.o=this.o}var y={};v.prototype.s=!1,v.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,c)&&t[c]||(t[c]=++f)}(this);delete y[t]}},v.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const b=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},w=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,r="string"==typeof t?t.split(""):t;for(let s=0;s<i;s++)s in r&&e.call(n,r[s],s,t)};function T(t){return Array.prototype.concat.apply([],arguments)}function R(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function E(t){return/^[\s\xa0]*$/.test(t)}var S,k=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function C(t,e){return-1!=t.indexOf(e)}function O(t,e){return t<e?-1:t>e?1:0}t:{var A=a.navigator;if(A){var x=A.userAgent;if(x){S=x;break t}}S=""}function P(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function I(t){const e={};for(const n in t)e[n]=t[n];return e}var U="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function j(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<U.length;e++)n=U[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function L(t){return L[" "](t),t}L[" "]=h;var D,B,M=C(S,"Opera"),N=C(S,"Trident")||C(S,"MSIE"),H=C(S,"Edge"),F=H||N,X=C(S,"Gecko")&&!(C(S.toLowerCase(),"webkit")&&!C(S,"Edge"))&&!(C(S,"Trident")||C(S,"MSIE"))&&!C(S,"Edge"),q=C(S.toLowerCase(),"webkit")&&!C(S,"Edge");function W(){var t=a.document;return t?t.documentMode:void 0}t:{var G="",$=(B=S,X?/rv:([^\);]+)(\)|;)/.exec(B):H?/Edge\/([\d\.]+)/.exec(B):N?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(B):q?/WebKit\/(\S+)/.exec(B):M?/(?:Version)[ \/]?(\S+)/.exec(B):void 0);if($&&(G=$?$[1]:""),N){var z=W();if(null!=z&&z>parseFloat(G)){D=String(z);break t}}D=G}var V,K={};function J(){return function(t){var e=K;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=k(String(D)).split("."),n=k("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;t=O(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||O(0==r[2].length,0==s[2].length)||O(r[2],s[2]),r=r[3],s=s[3]}while(0==t)}return 0<=t}))}if(a.document&&N){var Y=W();V=Y||(parseInt(D,10)||void 0)}else V=void 0;var Z=V,Q=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",h,e),a.removeEventListener("test",h,e)}catch(t){}return t}();function tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function et(t,e){if(tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(X){t:{try{L(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:nt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&et.Z.h.call(this)}}tt.prototype.h=function(){this.defaultPrevented=!0},m(et,tt);var nt={2:"touch",3:"pen",4:"mouse"};et.prototype.h=function(){et.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var it="closure_listenable_"+(1e6*Math.random()|0),rt=0;function st(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=r,this.key=++rt,this.ca=this.fa=!1}function ot(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function at(t){this.src=t,this.g={},this.h=0}function ht(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=b(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ot(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function lt(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==i)return r}return-1}at.prototype.add=function(t,e,n,i,r){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=lt(t,e,i,r);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new st(e,this.src,s,!!i,r)).fa=n,t.push(e)),e};var ut="closure_lm_"+(1e6*Math.random()|0),ct={};function ft(t,e,n,i,r){if(i&&i.once)return dt(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ft(t,e[s],n,i,r);return null}return n=wt(n),t&&t[it]?t.N(e,n,u(i)?!!i.capture:!!i,r):pt(t,e,n,!1,i,r)}function pt(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=u(r)?!!r.capture:!!r,a=yt(t);if(a||(t[ut]=a=new at(t)),(n=a.add(e,n,i,o,s)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}var e=vt;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Q||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(mt(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function dt(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)dt(t,e[s],n,i,r);return null}return n=wt(n),t&&t[it]?t.O(e,n,u(i)?!!i.capture:!!i,r):pt(t,e,n,!0,i,r)}function gt(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)gt(t,e[s],n,i,r);else i=u(i)?!!i.capture:!!i,n=wt(n),t&&t[it]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=lt(s=t.g[e],n,i,r))&&(ot(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=yt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=lt(e,n,i,r)),(n=-1<t?e[t]:null)&&_t(n))}function _t(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[it])ht(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(mt(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=yt(e))?(ht(n,t),0==n.h&&(n.src=null,e[ut]=null)):ot(t)}}}function mt(t){return t in ct?ct[t]:ct[t]="on"+t}function vt(t,e){if(t.ca)t=!0;else{e=new et(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&_t(t),t=n.call(i,e)}return t}function yt(t){return(t=t[ut])instanceof at?t:null}var bt="__closure_events_fn_"+(1e9*Math.random()>>>0);function wt(t){return"function"==typeof t?t:(t[bt]||(t[bt]=function(e){return t.handleEvent(e)}),t[bt])}function Tt(){v.call(this),this.i=new at(this),this.P=this,this.I=null}function Rt(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new tt(e,t);else if(e instanceof tt)e.target=e.target||t;else{var r=e;j(e=new tt(i,t),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=Et(o,i,!0,e)&&r}if(r=Et(o=e.g=t,i,!0,e)&&r,r=Et(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)r=Et(o=e.g=n[s],i,!1,e)&&r}function Et(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,h=o.ia||o.src;o.fa&&ht(t.i,o),r=!1!==a.call(h,i)&&r}}return r&&!i.defaultPrevented}m(Tt,v),Tt.prototype[it]=!0,Tt.prototype.removeEventListener=function(t,e,n,i){gt(this,t,e,n,i)},Tt.prototype.M=function(){if(Tt.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)ot(n[i]);delete e.g[t],e.h--}}this.I=null},Tt.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},Tt.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var St=a.JSON.stringify;function kt(){var t=Ut;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Ct,Ot=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new At),(t=>t.reset()));class At{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function xt(t){a.setTimeout((()=>{throw t}),0)}function Pt(t,e){Ct||function(){var t=a.Promise.resolve(void 0);Ct=function(){t.then(jt)}}(),It||(Ct(),It=!0),Ut.add(t,e)}var It=!1,Ut=new class{constructor(){this.h=this.g=null}add(t,e){const n=Ot.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function jt(){for(var t;t=kt();){try{t.h.call(t.g)}catch(t){xt(t)}var e=Ot;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}It=!1}function Lt(t,e){Tt.call(this),this.h=t||1,this.g=e||a,this.j=g(this.kb,this),this.l=Date.now()}function Dt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Bt(t,e,n){if("function"==typeof t)n&&(t=g(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=g(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function Mt(t){t.g=Bt((()=>{t.g=null,t.i&&(t.i=!1,Mt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}m(Lt,Tt),(i=Lt.prototype).da=!1,i.S=null,i.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Rt(this,"tick"),this.da&&(Dt(this),this.start()))}},i.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.M=function(){Lt.Z.M.call(this),Dt(this),delete this.g};class Nt extends v{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Mt(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ht(t){v.call(this),this.h=t,this.g={}}m(Ht,v);var Ft=[];function Xt(t,e,n,i){Array.isArray(n)||(n&&(Ft[0]=n.toString()),n=Ft);for(var r=0;r<n.length;r++){var s=ft(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function qt(t){P(t.g,(function(t,e){this.g.hasOwnProperty(e)&&_t(t)}),t),t.g={}}function Wt(){this.g=!0}function Gt(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return St(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}Ht.prototype.M=function(){Ht.Z.M.call(this),qt(this)},Ht.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Wt.prototype.Aa=function(){this.g=!1},Wt.prototype.info=function(){};var $t={},zt=null;function Vt(){return zt=zt||new Tt}function Kt(t){tt.call(this,$t.Ma,t)}function Jt(t){const e=Vt();Rt(e,new Kt(e,t))}function Yt(t,e){tt.call(this,$t.STAT_EVENT,t),this.stat=e}function Zt(t){const e=Vt();Rt(e,new Yt(e,t))}function Qt(t,e){tt.call(this,$t.Na,t),this.size=e}function te(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}$t.Ma="serverreachability",m(Kt,tt),$t.STAT_EVENT="statevent",m(Yt,tt),$t.Na="timingevent",m(Qt,tt);var ee={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ne={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ie(){}function re(t){return t.h||(t.h=t.i())}function se(){}ie.prototype.h=null;var oe,ae={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function he(){tt.call(this,"d")}function le(){tt.call(this,"c")}function ue(){}function ce(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new Ht(this),this.P=pe,t=F?125:void 0,this.W=new Lt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new fe}function fe(){this.i=null,this.g="",this.h=!1}m(he,tt),m(le,tt),m(ue,ie),ue.prototype.g=function(){return new XMLHttpRequest},ue.prototype.i=function(){return{}},oe=new ue;var pe=45e3,de={},ge={};function _e(t,e,n){t.K=1,t.v=Ne(Ue(e)),t.s=n,t.U=!0,me(t,null)}function me(t,e){t.F=Date.now(),we(t),t.A=Ue(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),Ze(n.h,"t",i),t.C=0,n=t.l.H,t.h=new fe,t.g=Qn(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Nt(g(t.Ia,t,t.g),t.O)),Xt(t.V,t.g,"readystatechange",t.gb),e=t.H?I(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Jt(1),function(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),h=0;h<a.length;h++){var l=a[h].split("=");if(1<l.length){var u=l[0];l=l[1];var c=u.split("_");o=2<=c.length&&"type"==c[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function ve(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function ye(t,e,n){let i,r=!0;for(;!t.I&&t.C<n.length;){if(i=be(t,n),i==ge){4==e&&(t.o=4,Zt(14),r=!1),Gt(t.j,t.m,null,"[Incomplete Response]");break}if(i==de){t.o=4,Zt(15),Gt(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Gt(t.j,t.m,i,null),ke(t,i)}ve(t)&&i!=ge&&i!=de&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Zt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Gn(e),e.L=!0,Zt(11))):(Gt(t.j,t.m,n,"[Invalid Chunked Response]"),Se(t),Ee(t))}function be(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?ge:(n=Number(e.substring(n,i)),isNaN(n)?de:(i+=1)+n>e.length?ge:(e=e.substr(i,n),t.C=i+n,e))}function we(t){t.Y=Date.now()+t.P,Te(t,t.P)}function Te(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=te(g(t.eb,t),e)}function Re(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function Ee(t){0==t.l.G||t.I||Vn(t.l,t)}function Se(t){Re(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Dt(t.W),qt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ke(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||sn(n.i,t)))if(n.I=t.N,!t.J&&sn(n.i,t)&&3==n.G){try{var i=n.Ca.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;zn(n),Dn(n)}Wn(n),Zt(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&0==n.A&&!n.v&&(n.v=te(g(n.ab,n),6e3));if(1>=rn(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else Jn(n,11)}else if((t.J||n.g==t)&&zn(n),!E(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const e=l[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const r=l[4];null!=r&&(n.za=r,n.h.info("SVER="+n.za));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const c=t.g;if(c){const t=c.g?c.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.i;!s.g&&(C(t,"spdy")||C(t,"quic")||C(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(on(s,s.h),s.h=null))}if(i.D){const t=c.g?c.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.sa=t,Me(i.F,i.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((i=n).oa=Zn(i,i.H?i.la:null,i.W),o.J){an(i.i,o);var a=o,h=i.K;h&&a.setTimeout(h),a.B&&(Re(a),we(a)),i.g=o}else qn(i);0<n.l.length&&Nn(n)}else"stop"!=l[0]&&"close"!=l[0]||Jn(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?Jn(n,7):Ln(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}Jt(4)}catch(t){}}function Ce(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(l(t)||"string"==typeof t)w(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(l(t)||"string"==typeof t){n=[];for(var i=t.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,t)n[i++]=r;i=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(l(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),r=i.length;for(var s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}}function Oe(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof Oe)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}function Ae(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];xe(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)xe(r,i=t.g[e])||(t.g[n++]=i,r[i]=1),e++;t.g.length=n}}function xe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(i=ce.prototype).setTimeout=function(t){this.P=t},i.gb=function(t){t=t.target;const e=this.L;e&&3==xn(t)?e.l():this.Ia(t)},i.Ia=function(t){try{if(t==this.g)t:{const c=xn(this.g);var e=this.g.Da();const f=this.g.ba();if(!(3>c)&&(3!=c||F||this.g&&(this.h.h||this.g.ga()||Pn(this.g)))){this.I||4!=c||7==e||Jt(8==e||0>=f?3:2),Re(this);var n=this.g.ba();this.N=n;e:if(ve(this)){var i=Pn(this.g);t="";var r=i.length,s=4==xn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Se(this),Ee(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){e:{if(this.g){var h,l=this.g;if((h=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(h)){var u=h;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,Zt(12),Se(this),Ee(this);break t}Gt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ke(this,n)}this.U?(ye(this,c,o),F&&this.i&&3==c&&(Xt(this.V,this.W,"tick",this.fb),this.W.start())):(Gt(this.j,this.m,o,null),ke(this,o)),4==c&&Se(this),this.i&&!this.I&&(4==c?Vn(this.l,this):(this.i=!1,we(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Zt(12)):(this.o=0,Zt(13)),Se(this),Ee(this)}}}catch(t){}},i.fb=function(){if(this.g){var t=xn(this.g),e=this.g.ga();this.C<e.length&&(Re(this),ye(this,t,e),this.i&&4!=t&&we(this))}},i.cancel=function(){this.I=!0,Se(this)},i.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Jt(3),Zt(17)),Se(this),this.o=2,Ee(this)):Te(this,this.Y-t)},(i=Oe.prototype).R=function(){Ae(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},i.T=function(){return Ae(this),this.g.concat()},i.get=function(t,e){return xe(this.h,t)?this.h[t]:e},i.set=function(t,e){xe(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},i.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);t.call(e,s,r,this)}};var Pe=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ie(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ie){this.g=void 0!==e?e:t.g,je(this,t.j),this.s=t.s,Le(this,t.i),De(this,t.m),this.l=t.l,e=t.h;var n=new Ve;n.i=e.i,e.g&&(n.g=new Oe(e.g),n.h=e.h),Be(this,n),this.o=t.o}else t&&(n=String(t).match(Pe))?(this.g=!!e,je(this,n[1]||"",!0),this.s=He(n[2]||""),Le(this,n[3]||"",!0),De(this,n[4]),this.l=He(n[5]||"",!0),Be(this,n[6]||"",!0),this.o=He(n[7]||"")):(this.g=!!e,this.h=new Ve(null,this.g))}function Ue(t){return new Ie(t)}function je(t,e,n){t.j=n?He(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Le(t,e,n){t.i=n?He(e,!0):e}function De(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Be(t,e,n){e instanceof Ve?(t.h=e,function(t,e){e&&!t.j&&(Ke(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Je(this,e),Ze(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=Fe(e,$e)),t.h=new Ve(e,t.g))}function Me(t,e,n){t.h.set(e,n)}function Ne(t){return Me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function He(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Fe(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Xe),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Xe(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Ie.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Fe(e,qe,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Fe(e,qe,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(Fe(n,"/"==n.charAt(0)?Ge:We,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Fe(n,ze)),t.join("")};var qe=/[#\/\?@]/g,We=/[#\?:]/g,Ge=/[#\?]/g,$e=/[#\?@]/g,ze=/#/g;function Ve(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ke(t){t.g||(t.g=new Oe,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Je(t,e){Ke(t),e=Qe(t,e),xe(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,xe((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ae(t)))}function Ye(t,e){return Ke(t),e=Qe(t,e),xe(t.g.h,e)}function Ze(t,e,n){Je(t,e),0<n.length&&(t.i=null,t.g.set(Qe(t,e),R(n)),t.h+=n.length)}function Qe(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(i=Ve.prototype).add=function(t,e){Ke(this),this.i=null,t=Qe(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},i.forEach=function(t,e){Ke(this),this.g.forEach((function(n,i){w(n,(function(n){t.call(e,n,i,this)}),this)}),this)},i.T=function(){Ke(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var r=t[i],s=0;s<r.length;s++)n.push(e[i]);return n},i.R=function(t){Ke(this);var e=[];if("string"==typeof t)Ye(this,t)&&(e=T(e,this.g.get(Qe(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=T(e,t[n])}return e},i.set=function(t,e){return Ke(this),this.i=null,Ye(this,t=Qe(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},i.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],r=encodeURIComponent(String(i));i=this.R(i);for(var s=0;s<i.length;s++){var o=r;""!==i[s]&&(o+="="+encodeURIComponent(String(i[s]))),t.push(o)}}return this.i=t.join("&")};function tn(t){this.l=t||en,a.PerformanceNavigationTiming?t=0<(t=a.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var en=10;function nn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function rn(t){return t.h?1:t.g?t.g.size:0}function sn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function on(t,e){t.g?t.g.add(e):t.h=e}function an(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function hn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return R(t.i)}function ln(){}function un(){this.g=new ln}function cn(t,e,n){const i=n||"";try{Ce(t,(function(t,n){let r=t;u(t)&&(r=St(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function fn(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(t){}}function pn(t){this.l=t.$b||null,this.j=t.ib||!1}function dn(t,e){Tt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=gn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tn.prototype.cancel=function(){if(this.i=hn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},ln.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},ln.prototype.parse=function(t){return a.JSON.parse(t,void 0)},m(pn,ie),pn.prototype.g=function(){return new dn(this.l,this.j)},pn.prototype.i=function(t){return function(){return t}}({}),m(dn,Tt);var gn=0;function _n(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function mn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,vn(t)}function vn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(i=dn.prototype).open=function(t,e){if(this.readyState!=gn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,vn(this)},i.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,mn(this)),this.readyState=gn},i.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,vn(this)),this.g&&(this.readyState=3,vn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_n(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},i.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?mn(this):vn(this),3==this.readyState&&_n(this)}},i.Ua=function(t){this.g&&(this.response=this.responseText=t,mn(this))},i.Ta=function(t){this.g&&(this.response=t,mn(this))},i.ha=function(){this.g&&mn(this)},i.setRequestHeader=function(t,e){this.v.append(t,e)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(dn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var yn=a.JSON.parse;function bn(t){Tt.call(this),this.headers=new Oe,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=wn,this.K=this.L=!1}m(bn,Tt);var wn="",Tn=/^https?$/i,Rn=["POST","PUT"];function En(t){return"content-type"==t.toLowerCase()}function Sn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,kn(t),On(t)}function kn(t){t.D||(t.D=!0,Rt(t,"complete"),Rt(t,"error"))}function Cn(t){if(t.h&&void 0!==o&&(!t.C[1]||4!=xn(t)||2!=t.ba()))if(t.v&&4==xn(t))Bt(t.Fa,0,t);else if(Rt(t,"readystatechange"),4==xn(t)){t.h=!1;try{const o=t.ba();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===o){var r=String(t.H).match(Pe)[1]||null;if(!r&&a.self&&a.self.location){var s=a.self.location.protocol;r=s.substr(0,s.length-1)}i=!Tn.test(r?r.toLowerCase():"")}n=i}if(n)Rt(t,"complete"),Rt(t,"success");else{t.m=6;try{var h=2<xn(t)?t.g.statusText:""}catch(t){h=""}t.j=h+" ["+t.ba()+"]",kn(t)}}finally{On(t)}}}function On(t,e){if(t.g){An(t);const n=t.g,i=t.C[0]?h:null;t.g=null,t.C=null,e||Rt(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function An(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function xn(t){return t.g?t.g.readyState:0}function Pn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case wn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function In(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=function(t){let e="";return P(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Me(t,e,n))}function Un(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function jn(t){this.za=0,this.l=[],this.h=new Wt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Un("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Un("baseRetryDelayMs",5e3,t),this.$a=Un("retryDelaySeedMs",1e4,t),this.Ya=Un("forwardChannelMaxRetries",2,t),this.ra=Un("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new tn(t&&t.concurrentRequestLimit),this.Ca=new un,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function Ln(t){if(Bn(t),3==t.G){var e=t.V++,n=Ue(t.F);Me(n,"SID",t.J),Me(n,"RID",e),Me(n,"TYPE","terminate"),Fn(t,n),(e=new ce(t,t.h,e,void 0)).K=2,e.v=Ne(Ue(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=Qn(e.l,null),e.g.ea(e.v)),e.F=Date.now(),we(e)}Yn(t)}function Dn(t){t.g&&(Gn(t),t.g.cancel(),t.g=null)}function Bn(t){Dn(t),t.u&&(a.clearTimeout(t.u),t.u=null),zn(t),t.i.cancel(),t.m&&("number"==typeof t.m&&a.clearTimeout(t.m),t.m=null)}function Mn(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&Nn(t)}function Nn(t){nn(t.i)||t.m||(t.m=!0,Pt(t.Ha,t),t.C=0)}function Hn(t,e){var n;n=e?e.m:t.V++;const i=Ue(t.F);Me(i,"SID",t.J),Me(i,"RID",n),Me(i,"AID",t.U),Fn(t,i),t.o&&t.s&&In(i,t.o,t.s),n=new ce(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Xn(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),on(t.i,n),_e(n,i,e)}function Fn(t,e){t.j&&Ce({},(function(t,n){Me(e,n,t)}))}function Xn(t,e,n){n=Math.min(t.l.length,n);var i=t.j?g(t.j.Oa,t.j,t):null;t:{var r=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=e,0>n)e=Math.max(0,r[o].h-100),s=!1;else try{cn(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(s){i=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,i}function qn(t){t.g||t.u||(t.Y=1,Pt(t.Ga,t),t.A=0)}function Wn(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=te(g(t.Ga,t),Kn(t,t.A)),t.A++,!0)}function Gn(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function $n(t){t.g=new ce(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Ue(t.oa);Me(e,"RID","rpc"),Me(e,"SID",t.J),Me(e,"CI",t.N?"0":"1"),Me(e,"AID",t.U),Fn(t,e),Me(e,"TYPE","xmlhttp"),t.o&&t.s&&In(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ne(Ue(e)),n.s=null,n.U=!0,me(n,t)}function zn(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function Vn(t,e){var n=null;if(t.g==e){zn(t),Gn(t),t.g=null;var i=2}else{if(!sn(t.i,e))return;n=e.D,an(t.i,e),i=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;Rt(i=Vt(),new Qt(i,n,e,r)),Nn(t)}else qn(t);else if(3==(r=e.o)||0==r&&0<t.I||!(1==i&&function(t,e){return!(rn(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=te(g(t.Ha,t,e),Kn(t,t.C)),t.C++,0)))}(t,e)||2==i&&Wn(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Jn(t,5);break;case 4:Jn(t,10);break;case 3:Jn(t,6);break;default:Jn(t,2)}}function Kn(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Jn(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var i=g(t.jb,t);n||(n=new Ie("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||je(n,"https"),Ne(n)),function(t,e){const n=new Wt;if(a.Image){const i=new Image;i.onload=_(fn,n,i,"TestLoadImage: loaded",!0,e),i.onerror=_(fn,n,i,"TestLoadImage: error",!1,e),i.onabort=_(fn,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=_(fn,n,i,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else Zt(2);t.G=0,t.j&&t.j.va(e),Yn(t),Bn(t)}function Yn(t){t.G=0,t.I=-1,t.j&&(0==hn(t.i).length&&0==t.l.length||(t.i.i.length=0,R(t.l),t.l.length=0),t.j.ua())}function Zn(t,e,n){let i=function(t){return t instanceof Ie?Ue(t):new Ie(t,void 0)}(n);if(""!=i.i)e&&Le(i,e+"."+i.i),De(i,i.m);else{const t=a.location;i=function(t,e,n,i){var r=new Ie(null,void 0);return t&&je(r,t),e&&Le(r,e),n&&De(r,n),i&&(r.l=i),r}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&P(t.aa,(function(t,e){Me(i,e,t)})),e=t.D,n=t.sa,e&&n&&Me(i,e,n),Me(i,"VER",t.ma),Fn(t,i),i}function Qn(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new bn(new pn({ib:!0})):new bn(t.qa)).L=t.H,e}function ti(){}function ei(){if(N&&!(10<=Number(Z)))throw Error("Environmental error: no available transport.")}function ni(t,e){Tt.call(this),this.g=new jn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!E(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!E(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new si(this)}function ii(t){he.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function ri(){le.call(this),this.status=1}function si(t){this.g=t}(i=bn.prototype).ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():oe.g(),this.C=this.u?re(this.u):re(oe),this.g.onreadystatechange=g(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void Sn(this,t)}t=n||"";const r=new Oe(this.headers);i&&Ce(i,(function(t,e){r.set(e,t)})),i=function(t){t:{var e=En;const n=t.length,i="string"==typeof t?t.split(""):t;for(let r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t)){e=r;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(r.T()),n=a.FormData&&t instanceof a.FormData,!(0<=b(Rn,e))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{An(this),0<this.B&&((this.K=function(t){return N&&J()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=g(this.pa,this)):this.A=Bt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Sn(this,t)}},i.pa=function(){void 0!==o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Rt(this,"timeout"),this.abort(8))},i.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Rt(this,"complete"),Rt(this,"abort"),On(this))},i.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),On(this,!0)),bn.Z.M.call(this)},i.Fa=function(){this.s||(this.F||this.v||this.l?Cn(this):this.cb())},i.cb=function(){Cn(this)},i.ba=function(){try{return 2<xn(this)?this.g.status:-1}catch(t){return-1}},i.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},i.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),yn(e)}},i.Da=function(){return this.m},i.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(i=jn.prototype).ma=8,i.G=1,i.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},i.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new ce(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=I(s),j(s,this.P)):s=this.P),null===this.o&&(r.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var i=this.l[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Xn(this,r,e),Me(n=Ue(this.F),"RID",t),Me(n,"CVER",22),this.D&&Me(n,"X-HTTP-Session-Id",this.D),Fn(this,n),this.o&&s&&In(n,this.o,s),on(this.i,r),this.Ra&&Me(n,"TYPE","init"),this.ja?(Me(n,"$req",e),Me(n,"SID","null"),r.$=!0,_e(r,n,null)):_e(r,n,e),this.G=2}}else 3==this.G&&(t?Hn(this,t):0==this.l.length||nn(this.i)||Hn(this))},i.Ga=function(){if(this.u=null,$n(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=te(g(this.bb,this),t)}},i.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Zt(10),Dn(this),$n(this))},i.ab=function(){null!=this.v&&(this.v=null,Dn(this),Wn(this),Zt(19))},i.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Zt(2)):(this.h.info("Failed to ping google.com"),Zt(1))},(i=ti.prototype).xa=function(){},i.wa=function(){},i.va=function(){},i.ua=function(){},i.Oa=function(){},ei.prototype.g=function(t,e){return new ni(t,e)},m(ni,Tt),ni.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Pt(g(t.hb,t,e))),Zt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Zn(t,null,t.W),Nn(t)},ni.prototype.close=function(){Ln(this.g)},ni.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,Mn(this.g,e)}else this.v?((e={}).__data__=St(t),Mn(this.g,e)):Mn(this.g,t)},ni.prototype.M=function(){this.g.j=null,delete this.j,Ln(this.g),delete this.g,ni.Z.M.call(this)},m(ii,he),m(ri,le),m(si,ti),si.prototype.xa=function(){Rt(this.g,"a")},si.prototype.wa=function(t){Rt(this.g,new ii(t))},si.prototype.va=function(t){Rt(this.g,new ri(t))},si.prototype.ua=function(){Rt(this.g,"b")},ei.prototype.createWebChannel=ei.prototype.g,ni.prototype.send=ni.prototype.u,ni.prototype.open=ni.prototype.m,ni.prototype.close=ni.prototype.close,ee.NO_ERROR=0,ee.TIMEOUT=8,ee.HTTP_ERROR=6,ne.COMPLETE="complete",se.EventType=ae,ae.OPEN="a",ae.CLOSE="b",ae.ERROR="c",ae.MESSAGE="d",Tt.prototype.listen=Tt.prototype.N,bn.prototype.listenOnce=bn.prototype.O,bn.prototype.getLastError=bn.prototype.La,bn.prototype.getLastErrorCode=bn.prototype.Da,bn.prototype.getStatus=bn.prototype.ba,bn.prototype.getResponseJson=bn.prototype.Qa,bn.prototype.getResponseText=bn.prototype.ga,bn.prototype.send=bn.prototype.ea;var oi=s.createWebChannelTransport=function(){return new ei},ai=s.getStatEventTarget=function(){return Vt()},hi=s.ErrorCode=ee,li=s.EventType=ne,ui=s.Event=$t,ci=s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},fi=s.FetchXmlHttpFactory=pn,pi=s.WebChannel=se,di=s.XhrIo=bn},5308:(t,e,n)=>{n.r(e),n.d(e,{StringFormat:()=>I,_FbsBlob:()=>M,_Location:()=>b,_TaskEvent:()=>lt,_TaskState:()=>ut,_UploadTask:()=>dt,_dataFromString:()=>j,_getChild:()=>Nt,_invalidArgument:()=>p,_invalidRootOperation:()=>g,connectStorageEmulator:()=>Ft,deleteObject:()=>Bt,getDownloadURL:()=>Dt,getMetadata:()=>It,getStorage:()=>Ht,list:()=>jt,listAll:()=>Lt,ref:()=>Mt,updateMetadata:()=>Ut,uploadBytes:()=>At,uploadBytesResumable:()=>Pt,uploadString:()=>xt});var i,r=n(94258),s=n(74444),o=n(48886);!function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"}(i||(i={}));
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
const a="firebasestorage.googleapis.com";class h extends s.ZR{constructor(t,e){super(l(t),`Firebase Storage: ${e} (${l(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}_codeEquals(t){return l(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function l(t){return"storage/"+t}function u(){return new h("unknown","An unknown error occurred, please check the error payload for server response.")}function c(){return new h("canceled","User canceled the upload/download.")}function f(){return new h("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function p(t){return new h("invalid-argument",t)}function d(){return new h("app-deleted","The Firebase app was deleted.")}function g(t){return new h("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function _(t,e){return new h("invalid-format","String does not match format '"+t+"': "+e)}function m(t){throw new h("internal-error","Internal error: "+t)}
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
 */class v{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=i.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=i.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=i.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,i){if(this.sent_)throw m("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==i)for(const t in i)i.hasOwnProperty(t)&&this.xhr_.setRequestHeader(t,i[t].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw m("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw m("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponseText(){if(!this.sent_)throw m("cannot .getResponseText() before sending");return this.xhr_.responseText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}
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
class y{createConnection(){return new v}}
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
 */class b{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=b.makeFromUrl(t,e)}catch(e){return new b(t,"")}if(""===n.path)return n;throw new h("invalid-default-bucket","Invalid default bucket '"+t+"'.")}static makeFromUrl(t,e){let n=null;const i="([A-Za-z0-9.\\-_]+)";const r=new RegExp("^gs://"+i+"(/(.*))?$","i");function s(t){t.path_=decodeURIComponent(t.path)}const o=e.replace(/[.]/g,"\\."),l=[{regex:r,indices:{bucket:1,path:3},postModify:function(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${i}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:s},{regex:new RegExp(`^https?://${e===a?"(?:storage.googleapis.com|storage.cloud.google.com)":e}/${i}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:s}];for(let e=0;e<l.length;e++){const i=l[e],r=i.regex.exec(t);if(r){const t=r[i.indices.bucket];let e=r[i.indices.path];e||(e=""),n=new b(t,e),i.postModify(n);break}}if(null==n)throw function(t){return new h("invalid-url","Invalid URL '"+t+"'.")}(t);return n}}class w{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
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
 */function T(t){return"string"==typeof t||t instanceof String}function R(t){return E()&&t instanceof Blob}function E(){return"undefined"!=typeof Blob}function S(t,e,n,i){if(i<e)throw p(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw p(`Invalid value for '${t}'. Expected ${n} or less.`)}
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
 */function k(t,e,n){let i=e;return null==n&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function C(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){n=n+(e(i)+"="+e(t[i]))+"&"}return n=n.slice(0,-1),n}
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
 */class O{constructor(t,e,n,i,r,s,o,a,h,l,u){this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=t,this.method_=e,this.headers_=n,this.body_=i,this.successCodes_=r.slice(),this.additionalRetryCodes_=s.slice(),this.callback_=o,this.errorCallback_=a,this.progressCallback_=l,this.timeout_=h,this.pool_=u,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=this;function e(e,n){const i=t.resolve_,r=t.reject_,s=n.connection;if(n.wasSuccessCode)try{const e=t.callback_(s,s.getResponseText());void 0!==e?i(e):i()}catch(t){r(t)}else if(null!==s){const e=u();e.serverResponse=s.getResponseText(),t.errorCallback_?r(t.errorCallback_(s,e)):r(e)}else if(n.canceled){r(t.appDelete_?d():c())}else{r(new h("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}}this.canceled_?e(0,new A(!1,null,!0)):this.backoffId_=function(t,e,n){let i=1,r=null,s=!1,o=0;function a(){return 2===o}let h=!1;function l(...t){h||(h=!0,e.apply(null,t))}function u(e){r=setTimeout((()=>{r=null,t(c,a())}),e)}function c(t,...e){if(h)return;if(t)return void l.call(null,t,...e);if(a()||s)return void l.call(null,t,...e);let n;i<64&&(i*=2),1===o?(o=2,n=0):n=1e3*(i+Math.random()),u(n)}let f=!1;function p(t){f||(f=!0,h||(null!==r?(t||(o=2),clearTimeout(r),u(0)):t||(o=1)))}return u(0),setTimeout((()=>{s=!0,p(!0)}),n),p}((function(e,n){if(n)return void e(!1,new A(!1,null,!0));const r=t.pool_.createConnection();function s(e){const n=e.loaded,i=e.lengthComputable?e.total:-1;null!==t.progressCallback_&&t.progressCallback_(n,i)}t.pendingConnection_=r,null!==t.progressCallback_&&r.addUploadProgressListener(s),r.send(t.url_,t.method_,t.body_,t.headers_).then((()=>{null!==t.progressCallback_&&r.removeUploadProgressListener(s),t.pendingConnection_=null;const n=r.getErrorCode()===i.NO_ERROR,o=r.getStatus();if(!n||t.isRetryStatusCode_(o)){const t=r.getErrorCode()===i.ABORT;return void e(!1,new A(!1,null,t))}const a=-1!==t.successCodes_.indexOf(o);e(!0,new A(a,r))}))}),e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const e=t>=500&&t<600,n=-1!==[408,429].indexOf(t),i=-1!==this.additionalRetryCodes_.indexOf(t);return e||n||i}}class A{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}
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
function x(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function P(...t){const e=x();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(E())return new Blob(t);throw new h("unsupported-environment","This browser doesn't seem to support creating Blobs")}
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
const I={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class U{constructor(t,e){this.data=t,this.contentType=e||null}}function j(t,e){switch(t){case I.RAW:return new U(L(e));case I.BASE64:case I.BASE64URL:return new U(D(t,e));case I.DATA_URL:return new U(function(t){const e=new B(t);return e.base64?D(I.BASE64,e.rest):function(t){let e;try{e=decodeURIComponent(t)}catch(t){throw _(I.DATA_URL,"Malformed data URL.")}return L(e)}(e.rest)}(e),new B(e).contentType)}throw u()}function L(t){const e=[];for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|63&i);else if(55296==(64512&i)){if(n<t.length-1&&56320==(64512&t.charCodeAt(n+1))){i=65536|(1023&i)<<10|1023&t.charCodeAt(++n),e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|63&i)}else e.push(239,191,189)}else 56320==(64512&i)?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|63&i)}return new Uint8Array(e)}function D(t,e){switch(t){case I.BASE64:{const n=-1!==e.indexOf("-"),i=-1!==e.indexOf("_");if(n||i){throw _(t,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case I.BASE64URL:{const n=-1!==e.indexOf("+"),i=-1!==e.indexOf("/");if(n||i){throw _(t,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=atob(e)}catch(e){throw _(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let t=0;t<n.length;t++)i[t]=n.charCodeAt(t);return i}class B{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw _(I.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=function(t,e){if(!(t.length>=e.length))return!1;return t.substring(t.length-e.length)===e}
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
 */(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=t.substring(t.indexOf(",")+1)}}class M{constructor(t,e){let n=0,i="";R(t)?(this.data_=t,n=t.size,i=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,e){if(R(this.data_)){const n=function(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */(this.data_,t,e);return null===n?null:new M(n)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new M(n,!0)}}static getBlob(...t){if(E()){const e=t.map((t=>t instanceof M?t.data_:t));return new M(P.apply(null,e))}{const e=t.map((t=>T(t)?j(I.RAW,t).data:t.data_));let n=0;e.forEach((t=>{n+=t.byteLength}));const i=new Uint8Array(n);let r=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)i[r++]=t[e]})),new M(i,!0)}}uploadData(){return this.data_}}
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
 */function N(t){let e;try{e=JSON.parse(t)}catch(t){return null}return"object"!=typeof(n=e)||Array.isArray(n)?null:e;var n}
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
 */function H(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
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
 */function F(t,e){return e}class X{constructor(t,e,n,i){this.server=t,this.local=e||t,this.writable=!!n,this.xform=i||F}}let q=null;function W(){if(q)return q;const t=[];t.push(new X("bucket")),t.push(new X("generation")),t.push(new X("metageneration")),t.push(new X("name","fullPath",!0));const e=new X("name");e.xform=function(t,e){return function(t){return!T(t)||t.length<2?t:H(t)}(e)},t.push(e);const n=new X("size");return n.xform=function(t,e){return void 0!==e?Number(e):e},t.push(n),t.push(new X("timeCreated")),t.push(new X("updated")),t.push(new X("md5Hash",null,!0)),t.push(new X("cacheControl",null,!0)),t.push(new X("contentDisposition",null,!0)),t.push(new X("contentEncoding",null,!0)),t.push(new X("contentLanguage",null,!0)),t.push(new X("contentType",null,!0)),t.push(new X("metadata","customMetadata",!0)),q=t,q}function G(t,e,n){const i={type:"file"},r=n.length;for(let t=0;t<r;t++){const r=n[t];i[r.local]=r.xform(i,e[r.server])}return function(t,e){Object.defineProperty(t,"ref",{get:function(){const n=t.bucket,i=t.fullPath,r=new b(n,i);return e._makeStorageReference(r)}})}(i,t),i}function $(t,e,n){const i=N(e);if(null===i)return null;return G(t,i,n)}function z(t,e){const n={},i=e.length;for(let r=0;r<i;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}
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
 */function V(t,e,n){const i=N(n);if(null===i)return null;return function(t,e,n){const i={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n.prefixes)for(const r of n.prefixes){const n=r.replace(/\/$/,""),s=t._makeStorageReference(new b(e,n));i.prefixes.push(s)}if(n.items)for(const r of n.items){const n=t._makeStorageReference(new b(e,r.name));i.items.push(n)}return i}(t,e,i)}class K{constructor(t,e,n,i){this.url=t,this.method=e,this.handler=n,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
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
 */function J(t){if(!t)throw u()}function Y(t,e){return function(n,i){const r=$(t,i,e);return J(null!==r),r}}function Z(t,e){return function(n,i){const r=$(t,i,e);return J(null!==r),function(t,e,n,i){const r=N(e);if(null===r)return null;if(!T(r.downloadTokens))return null;const s=r.downloadTokens;if(0===s.length)return null;const o=encodeURIComponent;return s.split(",").map((e=>{const r=t.bucket,s=t.fullPath;return k("/b/"+o(r)+"/o/"+o(s),n,i)+C({alt:"media",token:e})}))[0]}(r,i,t.host,t._protocol)}}function Q(t){return function(e,n){let i;var r,s;return 401===e.getStatus()?i=e.getResponseText().includes("Firebase App Check token is invalid")?new h("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new h("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===e.getStatus()?(s=t.bucket,i=new h("quota-exceeded","Quota for bucket '"+s+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===e.getStatus()?(r=t.path,i=new h("unauthorized","User does not have permission to access '"+r+"'.")):i=n,i.serverResponse=n.serverResponse,i}}function tt(t){const e=Q(t);return function(n,i){let r=e(n,i);var s;return 404===n.getStatus()&&(s=t.path,r=new h("object-not-found","Object '"+s+"' does not exist.")),r.serverResponse=i.serverResponse,r}}function et(t,e,n){const i=k(e.fullServerUrl(),t.host,t._protocol),r=t.maxOperationRetryTime,s=new K(i,"GET",Y(t,n),r);return s.errorHandler=tt(e),s}function nt(t,e,n,i,r){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),i&&(s.pageToken=i),r&&(s.maxResults=r);const o=k(e.bucketOnlyServerUrl(),t.host,t._protocol),a=t.maxOperationRetryTime,h=new K(o,"GET",function(t,e){return function(n,i){const r=V(t,e,i);return J(null!==r),r}}(t,e.bucket),a);return h.urlParams=s,h.errorHandler=Q(e),h}function it(t,e,n){const i=Object.assign({},n);return i.fullPath=t.path,i.size=e.size(),i.contentType||(i.contentType=function(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}(null,e)),i}function rt(t,e,n,i,r){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};const a=function(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}();o["Content-Type"]="multipart/related; boundary="+a;const h=it(e,i,r),l="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+z(h,n)+"\r\n--"+a+"\r\nContent-Type: "+h.contentType+"\r\n\r\n",u="\r\n--"+a+"--",c=M.getBlob(l,i,u);if(null===c)throw f();const p={name:h.fullPath},d=k(s,t.host,t._protocol),g=t.maxUploadRetryTime,_=new K(d,"POST",Y(t,n),g);return _.urlParams=p,_.headers=o,_.body=c.uploadData(),_.errorHandler=Q(e),_}class st{constructor(t,e,n,i){this.current=t,this.total=e,this.finalized=!!n,this.metadata=i||null}}function ot(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch(t){J(!1)}return J(!!n&&-1!==(e||["active"]).indexOf(n)),n}const at=262144;function ht(t,e,n,i,r,s,o,a){const l=new st(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=i.size()),i.size()!==l.total)throw new h("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");const u=l.total-l.current;let c=u;r>0&&(c=Math.min(c,r));const p=l.current,d=p+c,g={"X-Goog-Upload-Command":c===u?"upload, finalize":"upload","X-Goog-Upload-Offset":`${l.current}`},_=i.slice(p,d);if(null===_)throw f();const m=e.maxUploadRetryTime,v=new K(n,"POST",(function(t,n){const r=ot(t,["active","final"]),o=l.current+c,a=i.size();let h;return h="final"===r?Y(e,s)(t,n):null,new st(o,a,"final"===r,h)}),m);return v.headers=g,v.body=_.uploadData(),v.progressCallback=a||null,v.errorHandler=Q(t),v}
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
 */const lt={STATE_CHANGED:"state_changed"},ut={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ct(t){switch(t){case"running":case"pausing":case"canceling":return ut.RUNNING;case"paused":return ut.PAUSED;case"success":return ut.SUCCESS;case"canceled":return ut.CANCELED;default:return ut.ERROR}}
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
 */class ft{constructor(t,e,n){if("function"==typeof t||null!=e||null!=n)this.next=t,this.error=null!=e?e:void 0,this.complete=null!=n?n:void 0;else{const e=t;this.next=e.next,this.error=e.error,this.complete=e.complete}}}
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
 */function pt(t){return(...e)=>{Promise.resolve().then((()=>t(...e)))}}
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
 */class dt{constructor(t,e,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=n,this._mappings=W(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=t=>{this._request=void 0,this._chunkMultiplier=1,t._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=t,this._transition("error"))},this._metadataErrorHandler=t=>{this._request=void 0,t._codeEquals("canceled")?this.completeTransitions_():(this._error=t,this._transition("error"))},this._promise=new Promise(((t,e)=>{this._resolve=t,this._reject=e,this._start()})),this._promise.then(null,(()=>{}))}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([e,n])=>{switch(this._state){case"running":t(e,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}}))}_createResumable(){this._resolveToken(((t,e)=>{const n=function(t,e,n,i,r){const s=e.bucketOnlyServerUrl(),o=it(e,i,r),a={name:o.fullPath},h=k(s,t.host,t._protocol),l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${i.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},u=z(o,n),c=t.maxUploadRetryTime,f=new K(h,"POST",(function(t){let e;ot(t);try{e=t.getResponseHeader("X-Goog-Upload-URL")}catch(t){J(!1)}return J(T(e)),e}),c);return f.urlParams=a,f.headers=l,f.body=u,f.errorHandler=Q(e),f}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(n,t,e);this._request=i,i.getPromise().then((t=>{this._request=void 0,this._uploadUrl=t,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const t=this._uploadUrl;this._resolveToken(((e,n)=>{const i=function(t,e,n,i){const r=t.maxUploadRetryTime,s=new K(n,"POST",(function(t){const e=ot(t,["active","final"]);let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Size-Received")}catch(t){J(!1)}n||J(!1);const r=Number(n);return J(!isNaN(r)),new st(r,i.size(),"final"===e)}),r);return s.headers={"X-Goog-Upload-Command":"query"},s.errorHandler=Q(e),s}(this._ref.storage,this._ref._location,t,this._blob),r=this._ref.storage._makeRequest(i,e,n);this._request=r,r.getPromise().then((t=>{t=t,this._request=void 0,this._updateProgress(t.current),this._needToFetchStatus=!1,t.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const t=at*this._chunkMultiplier,e=new st(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((i,r)=>{let s;try{s=ht(this._ref._location,this._ref.storage,n,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(t){return this._error=t,void this._transition("error")}const o=this._ref.storage._makeRequest(s,i,r);this._request=o,o.getPromise().then((t=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(t.current),t.finalized?(this._metadata=t.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){at*this._chunkMultiplier<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((t,e)=>{const n=et(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(n,t,e);this._request=i,i.getPromise().then((t=>{this._request=void 0,this._metadata=t,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((t,e)=>{const n=rt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(n,t,e);this._request=i,i.getPromise().then((t=>{this._request=void 0,this._metadata=t,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,void 0!==this._request&&this._request.cancel();break;case"running":const e="paused"===this._state;this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=t,this._notifyObservers();break;case"canceled":this._error=c(),this._state=t,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){const t=ct(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,n,i){const r=new ft(e||void 0,n||void 0,i||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);-1!==e&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise();this._observers.slice().forEach((t=>{this._notifyObserver(t)}))}_finishPromise(){if(void 0!==this._resolve){let t=!0;switch(ct(this._state)){case ut.SUCCESS:pt(this._resolve.bind(null,this.snapshot))();break;case ut.CANCELED:case ut.ERROR:pt(this._reject.bind(null,this._error))();break;default:t=!1}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(ct(this._state)){case ut.RUNNING:case ut.PAUSED:t.next&&pt(t.next.bind(t,this.snapshot))();break;case ut.SUCCESS:t.complete&&pt(t.complete.bind(t))();break;case ut.CANCELED:case ut.ERROR:default:t.error&&pt(t.error.bind(t,this._error))()}}resume(){const t="paused"===this._state||"pausing"===this._state;return t&&this._transition("running"),t}pause(){const t="running"===this._state;return t&&this._transition("pausing"),t}cancel(){const t="running"===this._state||"pausing"===this._state;return t&&this._transition("canceling"),t}}
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
 */class gt{constructor(t,e){this._service=t,this._location=e instanceof b?e:b.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new gt(t,e)}get root(){const t=new b(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return H(this._location.path)}get storage(){return this._service}get parent(){const t=function(t){if(0===t.length)return null;const e=t.lastIndexOf("/");return-1===e?"":t.slice(0,e)}(this._location.path);if(null===t)return null;const e=new b(this._location.bucket,t);return new gt(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw g(t)}}function _t(t,e,n){t._throwIfRoot("uploadBytes");const i=rt(t.storage,t._location,W(),new M(e,!0),n);return t.storage.makeRequestWithTokens(i).then((t=>t.getPromise())).then((e=>({metadata:e,ref:t})))}function mt(t){const e={prefixes:[],items:[]};return vt(t,e).then((()=>e))}async function vt(t,e,n){const i={pageToken:n},r=await yt(t,i);e.prefixes.push(...r.prefixes),e.items.push(...r.items),null!=r.nextPageToken&&await vt(t,e,r.nextPageToken)}async function yt(t,e){null!=e&&"number"==typeof e.maxResults&&S("options.maxResults",1,1e3,e.maxResults);const n=e||{},i=nt(t.storage,t._location,"/",n.pageToken,n.maxResults);return(await t.storage.makeRequestWithTokens(i)).getPromise()}async function bt(t,e){t._throwIfRoot("updateMetadata");const n=function(t,e,n,i){const r=k(e.fullServerUrl(),t.host,t._protocol),s=z(n,i),o=t.maxOperationRetryTime,a=new K(r,"PATCH",Y(t,i),o);return a.headers={"Content-Type":"application/json; charset=utf-8"},a.body=s,a.errorHandler=tt(e),a}(t.storage,t._location,e,W());return(await t.storage.makeRequestWithTokens(n)).getPromise()}async function wt(t){t._throwIfRoot("getDownloadURL");const e=function(t,e,n){const i=k(e.fullServerUrl(),t.host,t._protocol),r=t.maxOperationRetryTime,s=new K(i,"GET",Z(t,n),r);return s.errorHandler=tt(e),s}(t.storage,t._location,W());return(await t.storage.makeRequestWithTokens(e)).getPromise().then((t=>{if(null===t)throw new h("no-download-url","The given file does not have any download URLs.");return t}))}async function Tt(t){t._throwIfRoot("deleteObject");const e=function(t,e){const n=k(e.fullServerUrl(),t.host,t._protocol),i=t.maxOperationRetryTime,r=new K(n,"DELETE",(function(t,e){}),i);return r.successCodes=[200,204],r.errorHandler=tt(e),r}(t.storage,t._location);return(await t.storage.makeRequestWithTokens(e)).getPromise()}function Rt(t,e){const n=function(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}(t._location.path,e),i=new b(t._location.bucket,n);return new gt(t.storage,i)}
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
 */function Et(t,e){if(t instanceof Ct){const n=t;if(null==n._bucket)throw new h("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");const i=new gt(n,n._bucket);return null!=e?Et(i,e):i}return void 0!==e?Rt(t,e):t}function St(t,e){if(e&&/^[A-Za-z]+:\/\//.test(e)){if(t instanceof Ct)return new gt(t,e);throw p("To use ref(service, url), the first argument must be a Storage instance.")}return Et(t,e)}function kt(t,e){const n=null==e?void 0:e.storageBucket;return null==n?null:b.makeFromBucketSpec(n,t)}class Ct{constructor(t,e,n,i,r,s){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._pool=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=a,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?b.makeFromBucketSpec(r,this._host):kt(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=b.makeFromBucketSpec(this._url,t):this._bucket=kt(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){S("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){S("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){return(await t.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new gt(this,t)}_makeRequest(t,e,n){if(this._deleted)return new w(d());{const i=function(t,e,n,i,r,s){const o=C(t.urlParams),a=t.url+o,h=Object.assign({},t.headers);return function(t,e){e&&(t["X-Firebase-GMPID"]=e)}(h,e),function(t,e){null!==e&&e.length>0&&(t.Authorization="Firebase "+e)}(h,n),function(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!=e?e:"AppManager")}(h,s),function(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}(h,i),new O(a,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r)}(t,this._appId,e,n,this._pool,this._firebaseVersion);return this._requests.add(i),i.getPromise().then((()=>this._requests.delete(i)),(()=>this._requests.delete(i))),i}}async makeRequestWithTokens(t){const[e,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n)}}const Ot="storage";
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
function At(t,e,n){return _t(t=(0,s.m9)(t),e,n)}function xt(t,e,n,i){return function(t,e,n=I.RAW,i){t._throwIfRoot("uploadString");const r=j(n,e),s=Object.assign({},i);return null==s.contentType&&null!=r.contentType&&(s.contentType=r.contentType),_t(t,r.data,s)}(t=(0,s.m9)(t),e,n,i)}function Pt(t,e,n){return function(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new dt(t,new M(e),n)}(t=(0,s.m9)(t),e,n)}function It(t){return async function(t){t._throwIfRoot("getMetadata");const e=et(t.storage,t._location,W());return(await t.storage.makeRequestWithTokens(e)).getPromise()}(t=(0,s.m9)(t))}function Ut(t,e){return bt(t=(0,s.m9)(t),e)}function jt(t,e){return yt(t=(0,s.m9)(t),e)}function Lt(t){return mt(t=(0,s.m9)(t))}function Dt(t){return wt(t=(0,s.m9)(t))}function Bt(t){return Tt(t=(0,s.m9)(t))}function Mt(t,e){return St(t=(0,s.m9)(t),e)}function Nt(t,e){return Rt(t,e)}function Ht(t=(0,r.Mq)(),e){t=(0,s.m9)(t);return(0,r.qX)(t,Ot).getImmediate({identifier:e})}function Ft(t,e,n,i={}){!function(t,e,n,i={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=i;r&&(t._overrideAuthToken="string"==typeof r?r:(0,s.Sg)(r,t.app.options.projectId))}(t,e,n,i)}function Xt(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Ct(n,i,s,new y,e,r.Jn)}(0,r.Xd)(new o.wA(Ot,Xt,"PUBLIC").setMultipleInstances(!0)),(0,r.KN)("@firebase/storage","0.8.3")}}]);
//# sourceMappingURL=724.bundle.js.map