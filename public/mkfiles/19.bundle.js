"use strict";(self.webpackChunkmkfiles=self.webpackChunkmkfiles||[]).push([[19],{19:(e,t,n)=>{n.d(t,{u7:()=>du,Jj:()=>cc,IX:()=>$a,hx:()=>Fa,my:()=>La,xU:()=>Bc,Lz:()=>oc,GH:()=>uc,gg:()=>za,WA:()=>E,F8:()=>hc,tO:()=>Ka,AE:()=>Ra,O$:()=>Qc,$q:()=>Kc,W:()=>$c,oZ:()=>Uc,EK:()=>O,YW:()=>Lu,PU:()=>gu,l7:()=>va,Ky:()=>se,Vi:()=>N,Xb:()=>z,Cf:()=>Da,K9:()=>I,Me:()=>j,yq:()=>g,Wi:()=>ba,ET:()=>Du,Ab:()=>Vu,vr:()=>Ou,Fc:()=>Xa,hJ:()=>Ma,B$:()=>Oa,at:()=>Ca,oe:()=>_u,AK:()=>Fu,TF:()=>tc,JU:()=>Va,Jm:()=>ac,ST:()=>Wa,fH:()=>Ya,Ix:()=>ec,Wu:()=>au,Lx:()=>ou,qY:()=>Qa,GL:()=>xu,QT:()=>yu,kl:()=>Iu,Xk:()=>vu,PL:()=>Tu,UQ:()=>Eu,zN:()=>bu,ad:()=>ja,nP:()=>qu,LV:()=>Ga,b9:()=>eu,vh:()=>tu,Pb:()=>rc,L$:()=>sc,cf:()=>Au,sc:()=>ku,Xo:()=>Xc,IO:()=>Hc,iE:()=>Pa,Eo:()=>qa,i3:()=>Ru,Bt:()=>Mu,pl:()=>Su,Ub:()=>d,qK:()=>Gc,TQ:()=>su,e0:()=>ru,RA:()=>nc,r7:()=>Nu,Mx:()=>Za,ar:()=>Yc,qs:()=>Pu});var r=n(94258),s=n(48886),i=n(76934),o=n(74444),a=n(43510);
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
class c{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");
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
let u="9.1.0";
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
 */const h=new i.Yd("@firebase/firestore");function l(){return h.logLevel}function d(e){h.setLogLevel(e)}function f(e,...t){if(h.logLevel<=i.in.DEBUG){const n=t.map(p);h.debug(`Firestore (${u}): ${e}`,...n)}}function m(e,...t){if(h.logLevel<=i.in.ERROR){const n=t.map(p);h.error(`Firestore (${u}): ${e}`,...n)}}function g(e,...t){if(h.logLevel<=i.in.WARN){const n=t.map(p);h.warn(`Firestore (${u}): ${e}`,...n)}}function p(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */var t}
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
 */function y(e="Unexpected state"){const t=`FIRESTORE (${u}) INTERNAL ASSERTION FAILED: `+e;throw m(t),new Error(t)}function w(e,t){e||y()}function I(e,t){e||y()}function v(e,t){return e}
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class b{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */class S{constructor(e,t){this.user=t,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class N{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(c.UNAUTHENTICATED)))}shutdown(){}}class _{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class D{constructor(e){this.t=e,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new b;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new b,e.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const t=s;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{f("FirebaseCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(f("FirebaseCredentialsProvider","Auth not yet detected"),s.resolve(),s=new b)}}),0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(f("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(w("string"==typeof t.accessToken),new S(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return w(null===e||"string"==typeof e),new c(e)}}class A{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=c.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},t=this.h.auth.getAuthHeaderValueForFirstParty([]);return t&&(e.Authorization=t),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class k{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new A(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(c.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */class x{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.g(e),this.p=e=>t.writeSequenceNumber(e))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}
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
 */function C(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
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
 */x.T=-1;class L{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=C(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<t&&(n+=e.charAt(r[s]%e.length))}return n}}function R(e,t){return e<t?-1:e>t?1:0}function F(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function M(e){return e+"\0"}
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
 */class O{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new E(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new E(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new E(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new E(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return O.fromMillis(Date.now())}static fromDate(e){return O.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new O(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?R(this.nanoseconds,e.nanoseconds):R(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class V{constructor(e){this.timestamp=e}static fromTimestamp(e){return new V(e)}static min(){return new V(new O(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */function q(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function P(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function U(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */class B{constructor(e,t,n){void 0===t?t=0:t>e.length&&y(),void 0===n?n=e.length-t:n>e.length-t&&y(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===B.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof B?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),s=t.get(r);if(n<s)return-1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class K extends B{construct(e,t,n){return new K(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new E(T.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new K(t)}static emptyPath(){return new K([])}}const $=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class z extends B{construct(e,t,n){return new z(e,t,n)}static isValidIdentifier(e){return $.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),z.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new z(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const s=()=>{if(0===n.length)throw new E(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new E(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new E(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(s(),r++)}if(s(),i)throw new E(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new z(t)}static emptyPath(){return new z([])}}
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
 */class G{constructor(e){this.fields=e,e.sort(z.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return F(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
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
 */function j(){return"undefined"!=typeof atob}
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
 */class Q{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Q(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Q(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return R(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Q.EMPTY_BYTE_STRING=new Q("");const H=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function W(e){if(w(!!e),"string"==typeof e){let t=0;const n=H.exec(e);if(w(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Y(e.seconds),nanos:Y(e.nanos)}}function Y(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function J(e){return"string"==typeof e?Q.fromBase64String(e):Q.fromUint8Array(e)}
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
 */function X(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Z(e){const t=e.mapValue.fields.__previous_value__;return X(t)?Z(t):t}function ee(e){const t=W(e.mapValue.fields.__local_write_time__.timestampValue);return new O(t.seconds,t.nanos)}
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
 */function te(e){return null==e}function ne(e){return 0===e&&1/e==-1/0}function re(e){return"number"==typeof e&&Number.isInteger(e)&&!ne(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
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
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(K.fromString(e))}static fromName(e){return new se(K.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===K.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return K.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new K(e.slice()))}}
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
 */function ie(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?X(e)?4:10:y()}function oe(e,t){const n=ie(e);if(n!==ie(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ee(e).isEqual(ee(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=W(e.timestampValue),r=W(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return J(e.bytesValue).isEqual(J(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Y(e.geoPointValue.latitude)===Y(t.geoPointValue.latitude)&&Y(e.geoPointValue.longitude)===Y(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Y(e.integerValue)===Y(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Y(e.doubleValue),r=Y(t.doubleValue);return n===r?ne(n)===ne(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return F(e.arrayValue.values||[],t.arrayValue.values||[],oe);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(q(n)!==q(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!oe(n[e],r[e])))return!1;return!0}(e,t);default:return y()}}function ae(e,t){return void 0!==(e.values||[]).find((e=>oe(e,t)))}function ce(e,t){const n=ie(e),r=ie(t);if(n!==r)return R(n,r);switch(n){case 0:return 0;case 1:return R(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Y(e.integerValue||e.doubleValue),r=Y(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ue(e.timestampValue,t.timestampValue);case 4:return ue(ee(e),ee(t));case 5:return R(e.stringValue,t.stringValue);case 6:return function(e,t){const n=J(e),r=J(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=R(n[e],r[e]);if(0!==t)return t}return R(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=R(Y(e.latitude),Y(t.latitude));return 0!==n?n:R(Y(e.longitude),Y(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=ce(n[e],r[e]);if(t)return t}return R(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),s=t.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let e=0;e<r.length&&e<i.length;++e){const t=R(r[e],i[e]);if(0!==t)return t;const o=ce(n[r[e]],s[i[e]]);if(0!==o)return o}return R(r.length,i.length)}(e.mapValue,t.mapValue);default:throw y()}}function ue(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return R(e,t);const n=W(e),r=W(t),s=R(n.seconds,r.seconds);return 0!==s?s:R(n.nanos,r.nanos)}function he(e){return le(e)}function le(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=W(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?J(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,se.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=le(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const s of t)r?r=!1:n+=",",n+=`${s}:${le(e.fields[s])}`;return n+"}"}(e.mapValue):y();var t,n}function de(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function fe(e){return!!e&&"integerValue"in e}function me(e){return!!e&&"arrayValue"in e}function ge(e){return!!e&&"nullValue"in e}function pe(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ye(e){return!!e&&"mapValue"in e}function we(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return P(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=we(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=we(e.arrayValue.values[n]);return t}return Object.assign({},e)}
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
 */class Ie{constructor(e){this.value=e}static empty(){return new Ie({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ye(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=we(t)}setAll(e){let t=z.emptyPath(),n={},r=[];e.forEach(((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=s.popLast()}e?n[s.lastSegment()]=we(e):r.push(s.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){const t=this.field(e.popLast());ye(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return oe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ye(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){P(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new Ie(we(this.value))}}function ve(e){const t=[];return P(e.fields,((e,n)=>{const r=new z([e]);if(ye(n)){const e=ve(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new G(t)
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
 */}class Te{constructor(e,t,n,r,s){this.key=e,this.documentType=t,this.version=n,this.data=r,this.documentState=s}static newInvalidDocument(e){return new Te(e,0,V.min(),Ie.empty(),0)}static newFoundDocument(e,t,n){return new Te(e,1,t,n,0)}static newNoDocument(e,t){return new Te(e,2,t,Ie.empty(),0)}static newUnknownDocument(e,t){return new Te(e,3,t,Ie.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ie.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ie.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Te&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Te(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class Ee{constructor(e,t=null,n=[],r=[],s=null,i=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.A=null}}function be(e,t=null,n=[],r=[],s=null,i=null,o=null){return new Ee(e,t,n,r,s,i,o)}function Se(e){const t=v(e);if(null===t.A){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>function(e){return e.field.canonicalString()+e.op.toString()+he(e.value)}(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),te(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=Ve(t.startAt)),t.endAt&&(e+="|ub:",e+=Ve(t.endAt)),t.A=e}return t.A}function Ne(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Pe(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let s=0;s<e.filters.length;s++)if(n=e.filters[s],r=t.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!oe(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Be(e.startAt,t.startAt)&&Be(e.endAt,t.endAt)}function _e(e){return se.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class De extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.R(e,t,n):new Ae(e,t,n):"array-contains"===t?new Le(e,n):"in"===t?new Re(e,n):"not-in"===t?new Fe(e,n):"array-contains-any"===t?new Me(e,n):new De(e,t,n)}static R(e,t,n){return"in"===t?new ke(e,n):new xe(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.P(ce(t,this.value)):null!==t&&ie(this.value)===ie(t)&&this.P(ce(t,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return y()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Ae extends De{constructor(e,t,n){super(e,t,n),this.key=se.fromName(n.referenceValue)}matches(e){const t=se.comparator(e.key,this.key);return this.P(t)}}class ke extends De{constructor(e,t){super(e,"in",t),this.keys=Ce("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class xe extends De{constructor(e,t){super(e,"not-in",t),this.keys=Ce("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Ce(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>se.fromName(e.referenceValue)))}class Le extends De{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return me(t)&&ae(t.arrayValue,this.value)}}class Re extends De{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&ae(this.value.arrayValue,t)}}class Fe extends De{constructor(e,t){super(e,"not-in",t)}matches(e){if(ae(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!ae(this.value.arrayValue,t)}}class Me extends De{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!me(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>ae(this.value.arrayValue,e)))}}class Oe{constructor(e,t){this.position=e,this.before=t}}function Ve(e){return`${e.before?"b":"a"}:${e.position.map((e=>he(e))).join(",")}`}class qe{constructor(e,t="asc"){this.field=e,this.dir=t}}function Pe(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Ue(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(r=i.field.isKeyField()?se.comparator(se.fromName(o.referenceValue),n.key):ce(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return e.before?r<=0:r<0}function Be(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!oe(e.position[n],t.position[n]))return!1;return!0}
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
 */class Ke{constructor(e,t=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function $e(e,t,n,r,s,i,o,a){return new Ke(e,t,n,r,s,i,o,a)}function ze(e){return new Ke(e)}function Ge(e){return!te(e.limit)&&"F"===e.limitType}function je(e){return!te(e.limit)&&"L"===e.limitType}function Qe(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function He(e){for(const t of e.filters)if(t.v())return t.field;return null}function We(e){return null!==e.collectionGroup}function Ye(e){const t=v(e);if(null===t.V){t.V=[];const e=He(t),n=Qe(t);if(null!==e&&null===n)e.isKeyField()||t.V.push(new qe(e)),t.V.push(new qe(z.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.V.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.V.push(new qe(z.keyField(),e))}}}return t.V}function Je(e){const t=v(e);if(!t.S)if("F"===t.limitType)t.S=be(t.path,t.collectionGroup,Ye(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of Ye(t)){const t="desc"===n.dir?"asc":"desc";e.push(new qe(n.field,t))}const n=t.endAt?new Oe(t.endAt.position,!t.endAt.before):null,r=t.startAt?new Oe(t.startAt.position,!t.startAt.before):null;t.S=be(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.S}function Xe(e,t,n){return new Ke(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ze(e,t){return Ne(Je(e),Je(t))&&e.limitType===t.limitType}function et(e){return`${Se(Je(e))}|lt:${e.limitType}`}function tt(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${he(t.value)}`;var t})).join(", ")}]`),te(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: "+Ve(e.startAt)),e.endAt&&(t+=", endAt: "+Ve(e.endAt)),`Target(${t})`}(Je(e))}; limitType=${e.limitType})`}function nt(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):se.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!Ue(e.startAt,Ye(e),t))&&(!e.endAt||!Ue(e.endAt,Ye(e),t))}(e,t)}function rt(e){return(t,n)=>{let r=!1;for(const s of Ye(e)){const e=st(s,t,n);if(0!==e)return e;r=r||s.field.isKeyField()}return 0}}function st(e,t,n){const r=e.field.isKeyField()?se.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),s=n.data.field(e);return null!==r&&null!==s?ce(r,s):y()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return y()}}
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
 */function it(e,t){if(e.D){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ne(t)?"-0":t}}function ot(e){return{integerValue:""+e}}function at(e,t){return re(t)?ot(t):it(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ct{constructor(){this._=void 0}}function ut(e,t,n){return e instanceof dt?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof ft?mt(e,t):e instanceof gt?pt(e,t):function(e,t){const n=lt(e,t),r=wt(n)+wt(e.C);return fe(n)&&fe(e.C)?ot(r):it(e.N,r)}(e,t)}function ht(e,t,n){return e instanceof ft?mt(e,t):e instanceof gt?pt(e,t):n}function lt(e,t){return e instanceof yt?fe(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class dt extends ct{}class ft extends ct{constructor(e){super(),this.elements=e}}function mt(e,t){const n=It(t);for(const t of e.elements)n.some((e=>oe(e,t)))||n.push(t);return{arrayValue:{values:n}}}class gt extends ct{constructor(e){super(),this.elements=e}}function pt(e,t){let n=It(t);for(const t of e.elements)n=n.filter((e=>!oe(e,t)));return{arrayValue:{values:n}}}class yt extends ct{constructor(e,t){super(),this.N=e,this.C=t}}function wt(e){return Y(e.integerValue||e.doubleValue)}function It(e){return me(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */class vt{constructor(e,t){this.field=e,this.transform=t}}class Tt{constructor(e,t){this.version=e,this.transformResults=t}}class Et{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Et}static exists(e){return new Et(void 0,e)}static updateTime(e){return new Et(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bt(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class St{}function Nt(e,t,n){e instanceof xt?function(e,t,n){const r=e.value.clone(),s=Rt(e.fieldTransforms,t,n.transformResults);r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Ct?function(e,t,n){if(!bt(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Rt(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(Lt(e)),s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function _t(e,t,n){e instanceof xt?function(e,t,n){if(!bt(e.precondition,t))return;const r=e.value.clone(),s=Ft(e.fieldTransforms,n,t);r.setAll(s),t.convertToFoundDocument(kt(t),r).setHasLocalMutations()}(e,t,n):e instanceof Ct?function(e,t,n){if(!bt(e.precondition,t))return;const r=Ft(e.fieldTransforms,n,t),s=t.data;s.setAll(Lt(e)),s.setAll(r),t.convertToFoundDocument(kt(t),s).setHasLocalMutations()}(e,t,n):function(e,t){bt(e.precondition,t)&&t.convertToNoDocument(V.min())}(e,t)}function Dt(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),s=lt(r.transform,e||null);null!=s&&(null==n&&(n=Ie.empty()),n.set(r.field,s))}return n||null}function At(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&F(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof ft&&t instanceof ft||e instanceof gt&&t instanceof gt?F(e.elements,t.elements,oe):e instanceof yt&&t instanceof yt?oe(e.C,t.C):e instanceof dt&&t instanceof dt}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function kt(e){return e.isFoundDocument()?e.version:V.min()}class xt extends St{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Ct extends St{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}}function Lt(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Rt(e,t,n){const r=new Map;w(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,ht(o,a,n[s]))}return r}function Ft(e,t,n){const r=new Map;for(const s of e){const e=s.transform,i=n.data.field(s.field);r.set(s.field,ut(e,i,t))}return r}class Mt extends St{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Ot extends St{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
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
 */class Vt{constructor(e){this.count=e}}
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
 */var qt,Pt;function Ut(e){switch(e){default:return y();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function Bt(e){if(void 0===e)return m("GRPC error has no .code"),T.UNKNOWN;switch(e){case qt.OK:return T.OK;case qt.CANCELLED:return T.CANCELLED;case qt.UNKNOWN:return T.UNKNOWN;case qt.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case qt.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case qt.INTERNAL:return T.INTERNAL;case qt.UNAVAILABLE:return T.UNAVAILABLE;case qt.UNAUTHENTICATED:return T.UNAUTHENTICATED;case qt.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case qt.NOT_FOUND:return T.NOT_FOUND;case qt.ALREADY_EXISTS:return T.ALREADY_EXISTS;case qt.PERMISSION_DENIED:return T.PERMISSION_DENIED;case qt.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case qt.ABORTED:return T.ABORTED;case qt.OUT_OF_RANGE:return T.OUT_OF_RANGE;case qt.UNIMPLEMENTED:return T.UNIMPLEMENTED;case qt.DATA_LOSS:return T.DATA_LOSS;default:return y()}}(Pt=qt||(qt={}))[Pt.OK=0]="OK",Pt[Pt.CANCELLED=1]="CANCELLED",Pt[Pt.UNKNOWN=2]="UNKNOWN",Pt[Pt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pt[Pt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pt[Pt.NOT_FOUND=5]="NOT_FOUND",Pt[Pt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pt[Pt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pt[Pt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pt[Pt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pt[Pt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pt[Pt.ABORTED=10]="ABORTED",Pt[Pt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pt[Pt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pt[Pt.INTERNAL=13]="INTERNAL",Pt[Pt.UNAVAILABLE=14]="UNAVAILABLE",Pt[Pt.DATA_LOSS=15]="DATA_LOSS";
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
class Kt{constructor(e,t){this.comparator=e,this.root=t||zt.EMPTY}insert(e,t){return new Kt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,zt.BLACK,null,null))}remove(e){return new Kt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,zt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $t(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $t(this.root,e,this.comparator,!1)}getReverseIterator(){return new $t(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $t(this.root,e,this.comparator,!0)}}class $t{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class zt{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:zt.RED,this.left=null!=r?r:zt.EMPTY,this.right=null!=s?s:zt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new zt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return zt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return zt.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const e=this.left.check();if(e!==this.right.check())throw y();return e+(this.isRed()?0:1)}}zt.EMPTY=null,zt.RED=!0,zt.BLACK=!1,zt.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(e,t,n,r,s){return this}insert(e,t,n){return new zt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Gt{constructor(e){this.comparator=e,this.data=new Kt(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new jt(this.data.getIterator())}getIteratorFrom(e){return new jt(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Gt))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Gt(this.comparator);return t.data=e,t}}class jt{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
 */const Qt=new Kt(se.comparator);function Ht(){return Qt}const Wt=new Kt(se.comparator);function Yt(){return Wt}const Jt=new Kt(se.comparator);function Xt(){return Jt}const Zt=new Gt(se.comparator);function en(...e){let t=Zt;for(const n of e)t=t.add(n);return t}const tn=new Gt(R);function nn(){return tn}
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
 */class rn{constructor(e,t,n,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,sn.createSynthesizedTargetChangeForCurrentChange(e,t)),new rn(V.min(),n,nn(),Ht(),en())}}class sn{constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t){return new sn(Q.EMPTY_BYTE_STRING,t,en(),en(),en())}}
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
 */class on{constructor(e,t,n,r){this.k=e,this.removedTargetIds=t,this.key=n,this.$=r}}class an{constructor(e,t){this.targetId=e,this.O=t}}class cn{constructor(e,t,n=Q.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class un{constructor(){this.F=0,this.M=dn(),this.L=Q.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=en(),t=en(),n=en();return this.M.forEach(((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:y()}})),new sn(this.L,this.B,e,t,n)}G(){this.U=!1,this.M=dn()}H(e,t){this.U=!0,this.M=this.M.insert(e,t)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class hn{constructor(e){this.tt=e,this.et=new Map,this.nt=Ht(),this.st=ln(),this.it=new Gt(R)}rt(e){for(const t of e.k)e.$&&e.$.isFoundDocument()?this.ot(t,e.$):this.at(t,e.key,e.$);for(const t of e.removedTargetIds)this.at(t,e.key,e.$)}ct(e){this.forEachTarget(e,(t=>{const n=this.ut(t);switch(e.state){case 0:this.ht(t)&&n.j(e.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(e.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(t);break;case 3:this.ht(t)&&(n.Z(),n.j(e.resumeToken));break;case 4:this.ht(t)&&(this.lt(t),n.j(e.resumeToken));break;default:y()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.et.forEach(((e,n)=>{this.ht(n)&&t(n)}))}ft(e){const t=e.targetId,n=e.O.count,r=this.dt(t);if(r){const e=r.target;if(_e(e))if(0===n){const n=new se(e.path);this.at(t,n,Te.newNoDocument(n,V.min()))}else w(1===n);else this.wt(t)!==n&&(this.lt(t),this.it=this.it.add(t))}}_t(e){const t=new Map;this.et.forEach(((n,r)=>{const s=this.dt(r);if(s){if(n.current&&_e(s.target)){const t=new se(s.target.path);null!==this.nt.get(t)||this.gt(r,t)||this.at(r,t,Te.newNoDocument(t,e))}n.K&&(t.set(r,n.W()),n.G())}}));let n=en();this.st.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.dt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))}));const r=new rn(e,t,this.it,this.nt,n);return this.nt=Ht(),this.st=ln(),this.it=new Gt(R),r}ot(e,t){if(!this.ht(e))return;const n=this.gt(e,t.key)?2:0;this.ut(e).H(t.key,n),this.nt=this.nt.insert(t.key,t),this.st=this.st.insert(t.key,this.yt(t.key).add(e))}at(e,t,n){if(!this.ht(e))return;const r=this.ut(e);this.gt(e,t)?r.H(t,1):r.J(t),this.st=this.st.insert(t,this.yt(t).delete(e)),n&&(this.nt=this.nt.insert(t,n))}removeTarget(e){this.et.delete(e)}wt(e){const t=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let t=this.et.get(e);return t||(t=new un,this.et.set(e,t)),t}yt(e){let t=this.st.get(e);return t||(t=new Gt(R),this.st=this.st.insert(e,t)),t}ht(e){const t=null!==this.dt(e);return t||f("WatchChangeAggregator","Detected inactive target",e),t}dt(e){const t=this.et.get(e);return t&&t.q?null:this.tt.Et(e)}lt(e){this.et.set(e,new un),this.tt.getRemoteKeysForTarget(e).forEach((t=>{this.at(e,t,null)}))}gt(e,t){return this.tt.getRemoteKeysForTarget(e).has(t)}}function ln(){return new Kt(se.comparator)}function dn(){return new Kt(se.comparator)}
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
 */const fn={asc:"ASCENDING",desc:"DESCENDING"},mn={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class gn{constructor(e,t){this.databaseId=e,this.D=t}}function pn(e,t){return e.D?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function yn(e,t){return e.D?t.toBase64():t.toUint8Array()}function wn(e,t){return pn(e,t.toTimestamp())}function In(e){return w(!!e),V.fromTimestamp(function(e){const t=W(e);return new O(t.seconds,t.nanos)}(e))}function vn(e,t){return function(e){return new K(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Tn(e){const t=K.fromString(e);return w(Gn(t)),t}function En(e,t){return vn(e.databaseId,t.path)}function bn(e,t){const n=Tn(t);if(n.get(1)!==e.databaseId.projectId)throw new E(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new E(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new se(Dn(n))}function Sn(e,t){return vn(e.databaseId,t)}function Nn(e){const t=Tn(e);return 4===t.length?K.emptyPath():Dn(t)}function _n(e){return new K(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Dn(e){return w(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function An(e,t,n){return{name:En(e,t),fields:n.value.mapValue.fields}}function kn(e,t,n){const r=bn(e,t.name),s=In(t.updateTime),i=new Ie({mapValue:{fields:t.fields}}),o=Te.newFoundDocument(r,s,i);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function xn(e,t){let n;if(t instanceof xt)n={update:An(e,t.key,t.value)};else if(t instanceof Mt)n={delete:En(e,t.key)};else if(t instanceof Ct)n={update:An(e,t.key,t.data),updateMask:zn(t.fieldMask)};else{if(!(t instanceof Ot))return y();n={verify:En(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof dt)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ft)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof gt)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof yt)return{fieldPath:t.field.canonicalString(),increment:n.C};throw y()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:wn(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:y()}(e,t.precondition)),n}function Cn(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?Et.updateTime(In(e.updateTime)):void 0!==e.exists?Et.exists(e.exists):Et.none()}(t.currentDocument):Et.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)w("REQUEST_TIME"===t.setToServerValue),n=new dt;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new ft(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new gt(e)}else"increment"in t?n=new yt(e,t.increment):y();const r=z.fromServerFormat(t.fieldPath);return new vt(r,n)}(e,t))):[];if(t.update){t.update.name;const s=bn(e,t.update.name),i=new Ie({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new G(t.map((e=>z.fromServerFormat(e))))}(t.updateMask);return new Ct(s,i,e,n,r)}return new xt(s,i,n,r)}if(t.delete){const r=bn(e,t.delete);return new Mt(r,n)}if(t.verify){const r=bn(e,t.verify);return new Ot(r,n)}return y()}function Ln(e,t){return{documents:[Sn(e,t.path)]}}function Rn(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Sn(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Sn(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(pe(e.value))return{unaryFilter:{field:Un(e.field),op:"IS_NAN"}};if(ge(e.value))return{unaryFilter:{field:Un(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(pe(e.value))return{unaryFilter:{field:Un(e.field),op:"IS_NOT_NAN"}};if(ge(e.value))return{unaryFilter:{field:Un(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Un(e.field),op:Pn(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);s&&(n.structuredQuery.where=s);const i=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Un(e.field),direction:qn(e.dir)}}(e)))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(e,t){return e.D||te(t)?t:{value:t}}(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=On(t.startAt)),t.endAt&&(n.structuredQuery.endAt=On(t.endAt)),n}function Fn(e){let t=Nn(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){w(1===r);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=Mn(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new qe(Bn(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,te(t)?null:t}(n.limit));let c=null;n.startAt&&(c=Vn(n.startAt));let u=null;return n.endAt&&(u=Vn(n.endAt)),$e(t,s,o,i,a,"F",c,u)}function Mn(e){return e?void 0!==e.unaryFilter?[$n(e)]:void 0!==e.fieldFilter?[Kn(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>Mn(e))).reduce(((e,t)=>e.concat(t))):y():[]}function On(e){return{before:e.before,values:e.position}}function Vn(e){const t=!!e.before,n=e.values||[];return new Oe(n,t)}function qn(e){return fn[e]}function Pn(e){return mn[e]}function Un(e){return{fieldPath:e.canonicalString()}}function Bn(e){return z.fromServerFormat(e.fieldPath)}function Kn(e){return De.create(Bn(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(e.fieldFilter.op),e.fieldFilter.value)}function $n(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Bn(e.unaryFilter.field);return De.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Bn(e.unaryFilter.field);return De.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Bn(e.unaryFilter.field);return De.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Bn(e.unaryFilter.field);return De.create(s,"!=",{nullValue:"NULL_VALUE"});default:return y()}}function zn(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Gn(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */function jn(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Hn(t)),t=Qn(e.get(n),t);return Hn(t)}function Qn(e,t){let n=t;const r=e.length;for(let t=0;t<r;t++){const r=e.charAt(t);switch(r){case"\0":n+="";break;case"":n+="";break;default:n+=r}}return n}function Hn(e){return e+""}function Wn(e){const t=e.length;if(w(t>=2),2===t)return w(""===e.charAt(0)&&""===e.charAt(1)),K.emptyPath();const n=t-2,r=[];let s="";for(let i=0;i<t;){const t=e.indexOf("",i);switch((t<0||t>n)&&y(),e.charAt(t+1)){case"":const n=e.substring(i,t);let o;0===s.length?o=n:(s+=n,o=s,s=""),r.push(o);break;case"":s+=e.substring(i,t),s+="\0";break;case"":s+=e.substring(i,t+1);break;default:y()}i=t+2}return new K(r)}
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
 */class Yn{constructor(e,t){this.seconds=e,this.nanoseconds=t}}class Jn{constructor(e,t,n){this.ownerId=e,this.allowTabSynchronization=t,this.leaseTimestampMs=n}}Jn.store="owner",Jn.key="owner";class Xn{constructor(e,t,n){this.userId=e,this.lastAcknowledgedBatchId=t,this.lastStreamToken=n}}Xn.store="mutationQueues",Xn.keyPath="userId";class Zn{constructor(e,t,n,r,s){this.userId=e,this.batchId=t,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=s}}Zn.store="mutations",Zn.keyPath="batchId",Zn.userMutationsIndex="userMutationsIndex",Zn.userMutationsKeyPath=["userId","batchId"];class er{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,t){return[e,jn(t)]}static key(e,t,n){return[e,jn(t),n]}}er.store="documentMutations",er.PLACEHOLDER=new er;class tr{constructor(e,t){this.path=e,this.readTime=t}}class nr{constructor(e,t){this.path=e,this.version=t}}class rr{constructor(e,t,n,r,s,i){this.unknownDocument=e,this.noDocument=t,this.document=n,this.hasCommittedMutations=r,this.readTime=s,this.parentPath=i}}rr.store="remoteDocuments",rr.readTimeIndex="readTimeIndex",rr.readTimeIndexPath="readTime",rr.collectionReadTimeIndex="collectionReadTimeIndex",rr.collectionReadTimeIndexPath=["parentPath","readTime"];class sr{constructor(e){this.byteSize=e}}sr.store="remoteDocumentGlobal",sr.key="remoteDocumentGlobalKey";class ir{constructor(e,t,n,r,s,i,o){this.targetId=e,this.canonicalId=t,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=s,this.lastLimboFreeSnapshotVersion=i,this.query=o}}ir.store="targets",ir.keyPath="targetId",ir.queryTargetsIndexName="queryTargetsIndex",ir.queryTargetsKeyPath=["canonicalId","targetId"];class or{constructor(e,t,n){this.targetId=e,this.path=t,this.sequenceNumber=n}}or.store="targetDocuments",or.keyPath=["targetId","path"],or.documentTargetsIndex="documentTargetsIndex",or.documentTargetsKeyPath=["path","targetId"];class ar{constructor(e,t,n,r){this.highestTargetId=e,this.highestListenSequenceNumber=t,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}ar.key="targetGlobalKey",ar.store="targetGlobal";class cr{constructor(e,t){this.collectionId=e,this.parent=t}}cr.store="collectionParents",cr.keyPath=["collectionId","parent"];class ur{constructor(e,t,n,r){this.clientId=e,this.updateTimeMs=t,this.networkEnabled=n,this.inForeground=r}}ur.store="clientMetadata",ur.keyPath="clientId";class hr{constructor(e,t,n){this.bundleId=e,this.createTime=t,this.version=n}}hr.store="bundles",hr.keyPath="bundleId";class lr{constructor(e,t,n){this.name=e,this.readTime=t,this.bundledQuery=n}}lr.store="namedQueries",lr.keyPath="name";const dr=[Xn.store,Zn.store,er.store,rr.store,ir.store,Jn.store,ar.store,or.store,ur.store,sr.store,cr.store,hr.store,lr.store],fr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
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
 */class gr{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new gr(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof gr?t:gr.resolve(t)}catch(e){return gr.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):gr.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):gr.reject(t)}static resolve(e){return new gr(((t,n)=>{t(e)}))}static reject(e){return new gr(((t,n)=>{n(e)}))}static waitFor(e){return new gr(((t,n)=>{let r=0,s=0,i=!1;e.forEach((e=>{++r,e.next((()=>{++s,i&&s===r&&t()}),(e=>n(e)))})),i=!0,s===r&&t()}))}static or(e){let t=gr.resolve(!1);for(const n of e)t=t.next((e=>e?gr.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}}
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
 */class pr{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.Tt=new b,this.transaction.oncomplete=()=>{this.Tt.resolve()},this.transaction.onabort=()=>{t.error?this.Tt.reject(new Ir(e,t.error)):this.Tt.resolve()},this.transaction.onerror=t=>{const n=Sr(t.target.error);this.Tt.reject(new Ir(e,n))}}static open(e,t,n,r){try{return new pr(t,e.transaction(r,n))}catch(e){throw new Ir(t,e)}}get It(){return this.Tt.promise}abort(e){e&&this.Tt.reject(e),this.aborted||(f("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(e){const t=this.transaction.objectStore(e);return new Tr(t)}}class yr{constructor(e,t,n){this.name=e,this.version=t,this.At=n,12.2===yr.Rt((0,o.z$)())&&m("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return f("SimpleDb","Removing database:",e),Er(window.indexedDB.deleteDatabase(e)).toPromise()}static bt(){if(!(0,o.hl)())return!1;if(yr.Pt())return!0;const e=(0,o.z$)(),t=yr.Rt(e),n=0<t&&t<10,r=yr.vt(e),s=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static Pt(){var e;return"undefined"!=typeof process&&"YES"===(null===(e=process.env)||void 0===e?void 0:e.Vt)}static St(e,t){return e.store(t)}static Rt(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static vt(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Dt(e){return this.db||(f("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Ir(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new E(T.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new E(T.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Ir(e,r))},r.onupgradeneeded=e=>{f("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.At.Ct(t,r.transaction,e.oldVersion,this.version).next((()=>{f("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.Nt&&(this.db.onversionchange=e=>this.Nt(e)),this.db}xt(e){this.Nt=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const s="readonly"===t;let i=0;for(;;){++i;try{this.db=await this.Dt(e);const t=pr.open(this.db,e,s?"readonly":"readwrite",n),i=r(t).catch((e=>(t.abort(e),gr.reject(e)))).toPromise();return i.catch((()=>{})),await t.It,i}catch(e){const t="FirebaseError"!==e.name&&i<3;if(f("SimpleDb","Transaction failed with error:",e.message,"Retrying:",t),this.close(),!t)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}class wr{constructor(e){this.kt=e,this.$t=!1,this.Ot=null}get isDone(){return this.$t}get Ft(){return this.Ot}set cursor(e){this.kt=e}done(){this.$t=!0}Mt(e){this.Ot=e}delete(){return Er(this.kt.delete())}}class Ir extends E{constructor(e,t){super(T.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function vr(e){return"IndexedDbTransactionError"===e.name}class Tr{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(f("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(f("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Er(n)}add(e){return f("SimpleDb","ADD",this.store.name,e,e),Er(this.store.add(e))}get(e){return Er(this.store.get(e)).next((t=>(void 0===t&&(t=null),f("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return f("SimpleDb","DELETE",this.store.name,e),Er(this.store.delete(e))}count(){return f("SimpleDb","COUNT",this.store.name),Er(this.store.count())}Lt(e,t){const n=this.cursor(this.options(e,t)),r=[];return this.Bt(n,((e,t)=>{r.push(t)})).next((()=>r))}Ut(e,t){f("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.qt=!1;const r=this.cursor(n);return this.Bt(r,((e,t,n)=>n.delete()))}Kt(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.Bt(r,t)}jt(e){const t=this.cursor({});return new gr(((n,r)=>{t.onerror=e=>{const t=Sr(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}Bt(e,t){const n=[];return new gr(((r,s)=>{e.onerror=e=>{s(e.target.error)},e.onsuccess=e=>{const s=e.target.result;if(!s)return void r();const i=new wr(s),o=t(s.primaryKey,s.value,i);if(o instanceof gr){const e=o.catch((e=>(i.done(),gr.reject(e))));n.push(e)}i.isDone?r():null===i.Ft?s.continue():s.continue(i.Ft)}})).next((()=>gr.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.qt?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Er(e){return new gr(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=Sr(e.target.error);n(t)}}))}let br=!1;function Sr(e){const t=yr.Rt((0,o.z$)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new E("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return br||(br=!0,setTimeout((()=>{throw e}),0)),e}}return e}
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
 */class Nr extends mr{constructor(e,t){super(),this.Qt=e,this.currentSequenceNumber=t}}function _r(e,t){const n=v(e);return yr.St(n.Qt,t)}
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
 */class Dr{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&Nt(r,e,n[t])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&_t(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&_t(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(V.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),en())}isEqual(e){return this.batchId===e.batchId&&F(this.mutations,e.mutations,((e,t)=>At(e,t)))&&F(this.baseMutations,e.baseMutations,((e,t)=>At(e,t)))}}class Ar{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){w(e.mutations.length===n.length);let r=Xt();const s=e.mutations;for(let e=0;e<s.length;e++)r=r.insert(s[e].key,n[e].version);return new Ar(e,t,n,r)}}
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
 */class kr{constructor(e,t,n,r,s=V.min(),i=V.min(),o=Q.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(e){return new kr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
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
 */class xr{constructor(e){this.Wt=e}}function Cr(e,t){if(t.document)return kn(e.Wt,t.document,!!t.hasCommittedMutations);if(t.noDocument){const e=se.fromSegments(t.noDocument.path),n=Or(t.noDocument.readTime),r=Te.newNoDocument(e,n);return t.hasCommittedMutations?r.setHasCommittedMutations():r}if(t.unknownDocument){const e=se.fromSegments(t.unknownDocument.path),n=Or(t.unknownDocument.version);return Te.newUnknownDocument(e,n)}return y()}function Lr(e,t,n){const r=Rr(n),s=t.key.path.popLast().toArray();if(t.isFoundDocument()){const n=function(e,t){return{name:En(e,t.key),fields:t.data.value.mapValue.fields,updateTime:pn(e,t.version.toTimestamp())}}(e.Wt,t),i=t.hasCommittedMutations;return new rr(null,null,n,i,r,s)}if(t.isNoDocument()){const e=t.key.path.toArray(),n=Mr(t.version),i=t.hasCommittedMutations;return new rr(null,new tr(e,n),null,i,r,s)}if(t.isUnknownDocument()){const e=t.key.path.toArray(),n=Mr(t.version);return new rr(new nr(e,n),null,null,!0,r,s)}return y()}function Rr(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Fr(e){const t=new O(e[0],e[1]);return V.fromTimestamp(t)}function Mr(e){const t=e.toTimestamp();return new Yn(t.seconds,t.nanoseconds)}function Or(e){const t=new O(e.seconds,e.nanoseconds);return V.fromTimestamp(t)}function Vr(e,t){const n=(t.baseMutations||[]).map((t=>Cn(e.Wt,t)));for(let e=0;e<t.mutations.length-1;++e){const n=t.mutations[e];if(e+1<t.mutations.length&&void 0!==t.mutations[e+1].transform){const r=t.mutations[e+1];n.updateTransforms=r.transform.fieldTransforms,t.mutations.splice(e+1,1),++e}}const r=t.mutations.map((t=>Cn(e.Wt,t))),s=O.fromMillis(t.localWriteTimeMs);return new Dr(t.batchId,s,n,r)}function qr(e){const t=Or(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Or(e.lastLimboFreeSnapshotVersion):V.min();let r;var s;return void 0!==e.query.documents?(w(1===(s=e.query).documents.length),r=Je(ze(Nn(s.documents[0])))):r=function(e){return Je(Fn(e))}(e.query),new kr(r,e.targetId,0,e.lastListenSequenceNumber,t,n,Q.fromBase64String(e.resumeToken))}function Pr(e,t){const n=Mr(t.snapshotVersion),r=Mr(t.lastLimboFreeSnapshotVersion);let s;s=_e(t.target)?Ln(e.Wt,t.target):Rn(e.Wt,t.target);const i=t.resumeToken.toBase64();return new ir(t.targetId,Se(t.target),n,i,t.sequenceNumber,r,s)}function Ur(e){const t=Fn({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Xe(t,t.limit,"L"):t}
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
 */class Br{getBundleMetadata(e,t){return Kr(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:Or(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return Kr(e).put({bundleId:(n=t).id,createTime:Mr(In(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return $r(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:Ur(t.bundledQuery),readTime:Or(t.readTime)};var t}))}saveNamedQuery(e,t){return $r(e).put(function(e){return{name:e.name,readTime:Mr(In(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function Kr(e){return _r(e,hr.store)}function $r(e){return _r(e,lr.store)}
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
 */class zr{constructor(){this.Gt=new Gr}addToCollectionParentIndex(e,t){return this.Gt.add(t),gr.resolve()}getCollectionParents(e,t){return gr.resolve(this.Gt.getEntries(t))}}class Gr{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Gt(K.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Gt(K.comparator)).toArray()}}
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
 */class jr{constructor(){this.zt=new Gr}addToCollectionParentIndex(e,t){if(!this.zt.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.zt.add(t)}));const s={collectionId:n,parent:jn(r)};return Qr(e).put(s)}return gr.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[M(t),""],!1,!0);return Qr(e).Lt(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(Wn(r.parent))}return n}))}}function Qr(e){return _r(e,cr.store)}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Hr={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Wr{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Wr(e,Wr.DEFAULT_COLLECTION_PERCENTILE,Wr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */function Yr(e,t,n){const r=e.store(Zn.store),s=e.store(er.store),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Kt({range:o},((e,t,n)=>(a++,n.delete())));i.push(c.next((()=>{w(1===a)})));const u=[];for(const e of n.mutations){const r=er.key(t,e.key.path,n.batchId);i.push(s.delete(r)),u.push(e.key)}return gr.waitFor(i).next((()=>u))}function Jr(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw y();t=e.noDocument}return JSON.stringify(t).length}
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
 */Wr.DEFAULT_COLLECTION_PERCENTILE=10,Wr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Wr.DEFAULT=new Wr(41943040,Wr.DEFAULT_COLLECTION_PERCENTILE,Wr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Wr.DISABLED=new Wr(-1,0,0);class Xr{constructor(e,t,n,r){this.userId=e,this.N=t,this.Ht=n,this.referenceDelegate=r,this.Jt={}}static Yt(e,t,n,r){w(""!==e.uid);const s=e.isAuthenticated()?e.uid:"";return new Xr(s,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return es(e).Kt({index:Zn.userMutationsIndex,range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const s=ts(e),i=es(e);return i.add({}).next((o=>{w("number"==typeof o);const a=new Dr(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>xn(e.Wt,t))),s=n.mutations.map((t=>xn(e.Wt,t)));return new Zn(t,n.batchId,n.localWriteTime.toMillis(),r,s)}(this.N,this.userId,a),u=[];let h=new Gt(((e,t)=>R(e.canonicalString(),t.canonicalString())));for(const e of r){const t=er.key(this.userId,e.key.path,o);h=h.add(e.key.path.popLast()),u.push(i.put(c)),u.push(s.put(t,er.PLACEHOLDER))}return h.forEach((t=>{u.push(this.Ht.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.Jt[o]=a.keys()})),gr.waitFor(u).next((()=>a))}))}lookupMutationBatch(e,t){return es(e).get(t).next((e=>e?(w(e.userId===this.userId),Vr(this.N,e)):null))}Xt(e,t){return this.Jt[t]?gr.resolve(this.Jt[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.Jt[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return es(e).Kt({index:Zn.userMutationsIndex,range:r},((e,t,r)=>{t.userId===this.userId&&(w(t.batchId>=n),s=Vr(this.N,t)),r.done()})).next((()=>s))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return es(e).Kt({index:Zn.userMutationsIndex,range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return es(e).Lt(Zn.userMutationsIndex,t).next((e=>e.map((e=>Vr(this.N,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=er.prefixForPath(this.userId,t.path),r=IDBKeyRange.lowerBound(n),s=[];return ts(e).Kt({range:r},((n,r,i)=>{const[o,a,c]=n,u=Wn(a);if(o===this.userId&&t.path.isEqual(u))return es(e).get(c).next((e=>{if(!e)throw y();w(e.userId===this.userId),s.push(Vr(this.N,e))}));i.done()})).next((()=>s))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Gt(R);const r=[];return t.forEach((t=>{const s=er.prefixForPath(this.userId,t.path),i=IDBKeyRange.lowerBound(s),o=ts(e).Kt({range:i},((e,r,s)=>{const[i,o,a]=e,c=Wn(o);i===this.userId&&t.path.isEqual(c)?n=n.add(a):s.done()}));r.push(o)})),gr.waitFor(r).next((()=>this.Zt(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,s=er.prefixForPath(this.userId,n),i=IDBKeyRange.lowerBound(s);let o=new Gt(R);return ts(e).Kt({range:i},((e,t,s)=>{const[i,a,c]=e,u=Wn(a);i===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):s.done()})).next((()=>this.Zt(e,o)))}Zt(e,t){const n=[],r=[];return t.forEach((t=>{r.push(es(e).get(t).next((e=>{if(null===e)throw y();w(e.userId===this.userId),n.push(Vr(this.N,e))})))})),gr.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return Yr(e.Qt,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.te(t.batchId)})),gr.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}te(e){delete this.Jt[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return gr.resolve();const n=IDBKeyRange.lowerBound(er.prefixForUser(this.userId)),r=[];return ts(e).Kt({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=Wn(e[1]);r.push(t)}else n.done()})).next((()=>{w(0===r.length)}))}))}containsKey(e,t){return Zr(e,this.userId,t)}ee(e){return ns(e).get(this.userId).next((e=>e||new Xn(this.userId,-1,"")))}}function Zr(e,t,n){const r=er.prefixForPath(t,n.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return ts(e).Kt({range:i,qt:!0},((e,n,r)=>{const[i,a,c]=e;i===t&&a===s&&(o=!0),r.done()})).next((()=>o))}function es(e){return _r(e,Zn.store)}function ts(e){return _r(e,er.store)}function ns(e){return _r(e,Xn.store)}
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
 */class rs{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new rs(0)}static ie(){return new rs(-1)}}
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
 */class ss{constructor(e,t){this.referenceDelegate=e,this.N=t}allocateTargetId(e){return this.re(e).next((t=>{const n=new rs(t.highestTargetId);return t.highestTargetId=n.next(),this.oe(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.re(e).next((e=>V.fromTimestamp(new O(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.re(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.re(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.oe(e,r))))}addTargetData(e,t){return this.ae(e,t).next((()=>this.re(e).next((n=>(n.targetCount+=1,this.ce(t,n),this.oe(e,n))))))}updateTargetData(e,t){return this.ae(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>is(e).delete(t.targetId))).next((()=>this.re(e))).next((t=>(w(t.targetCount>0),t.targetCount-=1,this.oe(e,t))))}removeTargets(e,t,n){let r=0;const s=[];return is(e).Kt(((i,o)=>{const a=qr(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,s.push(this.removeTargetData(e,a)))})).next((()=>gr.waitFor(s))).next((()=>r))}forEachTarget(e,t){return is(e).Kt(((e,n)=>{const r=qr(n);t(r)}))}re(e){return os(e).get(ar.key).next((e=>(w(null!==e),e)))}oe(e,t){return os(e).put(ar.key,t)}ae(e,t){return is(e).put(Pr(this.N,t))}ce(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.re(e).next((e=>e.targetCount))}getTargetData(e,t){const n=Se(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return is(e).Kt({range:r,index:ir.queryTargetsIndexName},((e,n,r)=>{const i=qr(n);Ne(t,i.target)&&(s=i,r.done())})).next((()=>s))}addMatchingKeys(e,t,n){const r=[],s=as(e);return t.forEach((t=>{const i=jn(t.path);r.push(s.put(new or(n,i))),r.push(this.referenceDelegate.addReference(e,n,t))})),gr.waitFor(r)}removeMatchingKeys(e,t,n){const r=as(e);return gr.forEach(t,(t=>{const s=jn(t.path);return gr.waitFor([r.delete([n,s]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=as(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=as(e);let s=en();return r.Kt({range:n,qt:!0},((e,t,n)=>{const r=Wn(e[1]),i=new se(r);s=s.add(i)})).next((()=>s))}containsKey(e,t){const n=jn(t.path),r=IDBKeyRange.bound([n],[M(n)],!1,!0);let s=0;return as(e).Kt({index:or.documentTargetsIndex,qt:!0,range:r},(([e,t],n,r)=>{0!==e&&(s++,r.done())})).next((()=>s>0))}Et(e,t){return is(e).get(t).next((e=>e?qr(e):null))}}function is(e){return _r(e,ir.store)}function os(e){return _r(e,ar.store)}function as(e){return _r(e,or.store)}
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
 */async function cs(e){if(e.code!==T.FAILED_PRECONDITION||e.message!==fr)throw e;f("LocalStore","Unexpectedly lost primary lease")}
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
 */function us([e,t],[n,r]){const s=R(e,n);return 0===s?R(t,r):s}class hs{constructor(e){this.ue=e,this.buffer=new Gt(us),this.he=0}le(){return++this.he}fe(e){const t=[e,this.le()];if(this.buffer.size<this.ue)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();us(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ls{constructor(e,t){this.garbageCollector=e,this.asyncQueue=t,this.de=!1,this.we=null}start(e){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this._e(e)}stop(){this.we&&(this.we.cancel(),this.we=null)}get started(){return null!==this.we}_e(e){const t=this.de?3e5:6e4;f("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.we=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.we=null,this.de=!0;try{await e.collectGarbage(this.garbageCollector)}catch(e){vr(e)?f("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await cs(e)}await this._e(e)}))}}class ds{constructor(e,t){this.me=e,this.params=t}calculateTargetCount(e,t){return this.me.ge(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return gr.resolve(x.T);const n=new hs(t);return this.me.forEachTarget(e,(e=>n.fe(e.sequenceNumber))).next((()=>this.me.ye(e,(e=>n.fe(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.me.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.me.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(f("LruGarbageCollector","Garbage collection skipped; disabled"),gr.resolve(Hr)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(f("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Hr):this.pe(e,t)))}getCacheSize(e){return this.me.getCacheSize(e)}pe(e,t){let n,r,s,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(f("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,o=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,a=Date.now(),this.removeTargets(e,n,t)))).next((t=>(s=t,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(u=Date.now(),l()<=i.in.DEBUG&&f("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-h}ms\n\tDetermined least recently used ${r} in `+(a-o)+"ms\n"+`\tRemoved ${s} targets in `+(c-a)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-h}ms`),gr.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:e}))))}}
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
 */class fs{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new ds(e,t)}(this,t)}ge(e){const t=this.Ee(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}Ee(e){let t=0;return this.ye(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}ye(e,t){return this.Te(e,((e,n)=>t(n)))}addReference(e,t,n){return ms(e,n)}removeReference(e,t,n){return ms(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return ms(e,t)}Ie(e,t){return function(e,t){let n=!1;return ns(e).jt((r=>Zr(e,r,t).next((e=>(e&&(n=!0),gr.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let s=0;return this.Te(e,((i,o)=>{if(o<=t){const t=this.Ie(e,i).next((t=>{if(!t)return s++,n.getEntry(e,i).next((()=>(n.removeEntry(i),as(e).delete([0,jn(i.path)]))))}));r.push(t)}})).next((()=>gr.waitFor(r))).next((()=>n.apply(e))).next((()=>s))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return ms(e,t)}Te(e,t){const n=as(e);let r,s=x.T;return n.Kt({index:or.documentTargetsIndex},(([e,n],{path:i,sequenceNumber:o})=>{0===e?(s!==x.T&&t(new se(Wn(r)),s),s=o,r=i):s=x.T})).next((()=>{s!==x.T&&t(new se(Wn(r)),s)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ms(e,t){return as(e).put(function(e,t){return new or(0,jn(e.path),t)}(t,e.currentSequenceNumber))}
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
 */class gs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),!0;return!1}forEach(e){P(this.inner,((t,n)=>{for(const[t,r]of n)e(t,r)}))}isEmpty(){return U(this.inner)}}
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
 */class ps{constructor(){this.changes=new gs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:V.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:Te.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?gr.resolve(n.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
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
 */class ys{constructor(e,t){this.N=e,this.Ht=t}addEntry(e,t,n){return vs(e).put(Ts(t),n)}removeEntry(e,t){const n=vs(e),r=Ts(t);return n.delete(r)}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Ae(e,n))))}getEntry(e,t){return vs(e).get(Ts(t)).next((e=>this.Re(t,e)))}be(e,t){return vs(e).get(Ts(t)).next((e=>({document:this.Re(t,e),size:Jr(e)})))}getEntries(e,t){let n=Ht();return this.Pe(e,t,((e,t)=>{const r=this.Re(e,t);n=n.insert(e,r)})).next((()=>n))}ve(e,t){let n=Ht(),r=new Kt(se.comparator);return this.Pe(e,t,((e,t)=>{const s=this.Re(e,t);n=n.insert(e,s),r=r.insert(e,Jr(t))})).next((()=>({documents:n,Ve:r})))}Pe(e,t,n){if(t.isEmpty())return gr.resolve();const r=IDBKeyRange.bound(t.first().path.toArray(),t.last().path.toArray()),s=t.getIterator();let i=s.getNext();return vs(e).Kt({range:r},((e,t,r)=>{const o=se.fromSegments(e);for(;i&&se.comparator(i,o)<0;)n(i,null),i=s.getNext();i&&i.isEqual(o)&&(n(i,t),i=s.hasNext()?s.getNext():null),i?r.Mt(i.path.toArray()):r.done()})).next((()=>{for(;i;)n(i,null),i=s.hasNext()?s.getNext():null}))}getDocumentsMatchingQuery(e,t,n){let r=Ht();const s=t.path.length+1,i={};if(n.isEqual(V.min())){const e=t.path.toArray();i.range=IDBKeyRange.lowerBound(e)}else{const e=t.path.toArray(),r=Rr(n);i.range=IDBKeyRange.lowerBound([e,r],!0),i.index=rr.collectionReadTimeIndex}return vs(e).Kt(i,((e,n,i)=>{if(e.length!==s)return;const o=Cr(this.N,n);t.path.isPrefixOf(o.key.path)?nt(t,o)&&(r=r.insert(o.key,o)):i.done()})).next((()=>r))}newChangeBuffer(e){return new ws(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return Is(e).get(sr.key).next((e=>(w(!!e),e)))}Ae(e,t){return Is(e).put(sr.key,t)}Re(e,t){if(t){const e=Cr(this.N,t);if(!e.isNoDocument()||!e.version.isEqual(V.min()))return e}return Te.newInvalidDocument(e)}}class ws extends ps{constructor(e,t){super(),this.Se=e,this.trackRemovals=t,this.De=new gs((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new Gt(((e,t)=>R(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((s,i)=>{const o=this.De.get(s);if(i.document.isValidDocument()){const a=Lr(this.Se.N,i.document,this.getReadTime(s));r=r.add(s.path.popLast());const c=Jr(a);n+=c-o,t.push(this.Se.addEntry(e,s,a))}else if(n-=o,this.trackRemovals){const n=Lr(this.Se.N,Te.newNoDocument(s,V.min()),this.getReadTime(s));t.push(this.Se.addEntry(e,s,n))}else t.push(this.Se.removeEntry(e,s))})),r.forEach((n=>{t.push(this.Se.Ht.addToCollectionParentIndex(e,n))})),t.push(this.Se.updateMetadata(e,n)),gr.waitFor(t)}getFromCache(e,t){return this.Se.be(e,t).next((e=>(this.De.set(t,e.size),e.document)))}getAllFromCache(e,t){return this.Se.ve(e,t).next((({documents:e,Ve:t})=>(t.forEach(((e,t)=>{this.De.set(e,t)})),e)))}}function Is(e){return _r(e,sr.store)}function vs(e){return _r(e,rr.store)}function Ts(e){return e.path.toArray()}
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
 */class Es{constructor(e){this.N=e}Ct(e,t,n,r){w(n<r&&n>=0&&r<=11);const s=new pr("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore(Jn.store)}(e),function(e){e.createObjectStore(Xn.store,{keyPath:Xn.keyPath}),e.createObjectStore(Zn.store,{keyPath:Zn.keyPath,autoIncrement:!0}).createIndex(Zn.userMutationsIndex,Zn.userMutationsKeyPath,{unique:!0}),e.createObjectStore(er.store)}(e),bs(e),function(e){e.createObjectStore(rr.store)}(e));let i=gr.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore(or.store),e.deleteObjectStore(ir.store),e.deleteObjectStore(ar.store)}(e),bs(e)),i=i.next((()=>function(e){const t=e.store(ar.store),n=new ar(0,0,V.min().toTimestamp(),0);return t.put(ar.key,n)}(s)))),n<4&&r>=4&&(0!==n&&(i=i.next((()=>function(e,t){return t.store(Zn.store).Lt().next((n=>{e.deleteObjectStore(Zn.store),e.createObjectStore(Zn.store,{keyPath:Zn.keyPath,autoIncrement:!0}).createIndex(Zn.userMutationsIndex,Zn.userMutationsKeyPath,{unique:!0});const r=t.store(Zn.store),s=n.map((e=>r.put(e)));return gr.waitFor(s)}))}(e,s)))),i=i.next((()=>{!function(e){e.createObjectStore(ur.store,{keyPath:ur.keyPath})}(e)}))),n<5&&r>=5&&(i=i.next((()=>this.Ce(s)))),n<6&&r>=6&&(i=i.next((()=>(function(e){e.createObjectStore(sr.store)}(e),this.Ne(s))))),n<7&&r>=7&&(i=i.next((()=>this.xe(s)))),n<8&&r>=8&&(i=i.next((()=>this.ke(e,s)))),n<9&&r>=9&&(i=i.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e),function(e){const t=e.objectStore(rr.store);t.createIndex(rr.readTimeIndex,rr.readTimeIndexPath,{unique:!1}),t.createIndex(rr.collectionReadTimeIndex,rr.collectionReadTimeIndexPath,{unique:!1})}(t)}))),n<10&&r>=10&&(i=i.next((()=>this.$e(s)))),n<11&&r>=11&&(i=i.next((()=>{!function(e){e.createObjectStore(hr.store,{keyPath:hr.keyPath})}(e),function(e){e.createObjectStore(lr.store,{keyPath:lr.keyPath})}
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
 */(e)}))),i}Ne(e){let t=0;return e.store(rr.store).Kt(((e,n)=>{t+=Jr(n)})).next((()=>{const n=new sr(t);return e.store(sr.store).put(sr.key,n)}))}Ce(e){const t=e.store(Xn.store),n=e.store(Zn.store);return t.Lt().next((t=>gr.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.Lt(Zn.userMutationsIndex,r).next((n=>gr.forEach(n,(n=>{w(n.userId===t.userId);const r=Vr(this.N,n);return Yr(e,t.userId,r).next((()=>{}))}))))}))))}xe(e){const t=e.store(or.store),n=e.store(rr.store);return e.store(ar.store).get(ar.key).next((e=>{const r=[];return n.Kt(((n,s)=>{const i=new K(n),o=function(e){return[0,jn(e)]}(i);r.push(t.get(o).next((n=>n?gr.resolve():(n=>t.put(new or(0,jn(n),e.highestListenSequenceNumber)))(i))))})).next((()=>gr.waitFor(r)))}))}ke(e,t){e.createObjectStore(cr.store,{keyPath:cr.keyPath});const n=t.store(cr.store),r=new Gr,s=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:jn(r)})}};return t.store(rr.store).Kt({qt:!0},((e,t)=>{const n=new K(e);return s(n.popLast())})).next((()=>t.store(er.store).Kt({qt:!0},(([e,t,n],r)=>{const i=Wn(t);return s(i.popLast())}))))}$e(e){const t=e.store(ir.store);return t.Kt(((e,n)=>{const r=qr(n),s=Pr(this.N,r);return t.put(s)}))}}function bs(e){e.createObjectStore(or.store,{keyPath:or.keyPath}).createIndex(or.documentTargetsIndex,or.documentTargetsKeyPath,{unique:!0}),e.createObjectStore(ir.store,{keyPath:ir.keyPath}).createIndex(ir.queryTargetsIndexName,ir.queryTargetsKeyPath,{unique:!0}),e.createObjectStore(ar.store)}const Ss="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Ns{constructor(e,t,n,r,s,i,o,a,c,u){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Oe=s,this.window=i,this.document=o,this.Fe=c,this.Me=u,this.Le=null,this.Be=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ue=null,this.inForeground=!1,this.qe=null,this.Ke=null,this.je=Number.NEGATIVE_INFINITY,this.Qe=e=>Promise.resolve(),!Ns.bt())throw new E(T.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new fs(this,r),this.We=t+"main",this.N=new xr(a),this.Ge=new yr(this.We,11,new Es(this.N)),this.ze=new ss(this.referenceDelegate,this.N),this.Ht=new jr,this.He=function(e,t){return new ys(e,t)}(this.N,this.Ht),this.Je=new Br,this.window&&this.window.localStorage?this.Ye=this.window.localStorage:(this.Ye=null,!1===u&&m("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Xe().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new E(T.FAILED_PRECONDITION,Ss);return this.Ze(),this.tn(),this.en(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.ze.getHighestSequenceNumber(e)))})).then((e=>{this.Le=new x(e,this.Fe)})).then((()=>{this.Be=!0})).catch((e=>(this.Ge&&this.Ge.close(),Promise.reject(e))))}nn(e){return this.Qe=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ge.xt((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Oe.enqueueAndForget((async()=>{this.started&&await this.Xe()})))}Xe(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Ds(e).put(new ur(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next((()=>{if(this.isPrimary)return this.sn(e).next((e=>{e||(this.isPrimary=!1,this.Oe.enqueueRetryable((()=>this.Qe(!1))))}))})).next((()=>this.rn(e))).next((t=>this.isPrimary&&!t?this.on(e).next((()=>!1)):!!t&&this.an(e).next((()=>!0)))))).catch((e=>{if(vr(e))return f("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return f("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Oe.enqueueRetryable((()=>this.Qe(e))),this.isPrimary=e}))}sn(e){return _s(e).get(Jn.key).next((e=>gr.resolve(this.cn(e))))}un(e){return Ds(e).delete(this.clientId)}async hn(){if(this.isPrimary&&!this.ln(this.je,18e5)){this.je=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=_r(e,ur.store);return t.Lt().next((e=>{const n=this.fn(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return gr.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.Ye)for(const t of e)this.Ye.removeItem(this.dn(t.clientId))}}en(){this.Ke=this.Oe.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Xe().then((()=>this.hn())).then((()=>this.en()))))}cn(e){return!!e&&e.ownerId===this.clientId}rn(e){return this.Me?gr.resolve(!0):_s(e).get(Jn.key).next((t=>{if(null!==t&&this.ln(t.leaseTimestampMs,5e3)&&!this.wn(t.ownerId)){if(this.cn(t)&&this.networkEnabled)return!0;if(!this.cn(t)){if(!t.allowTabSynchronization)throw new E(T.FAILED_PRECONDITION,Ss);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ds(e).Lt().next((e=>void 0===this.fn(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&f("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.Be=!1,this._n(),this.Ke&&(this.Ke.cancel(),this.Ke=null),this.mn(),this.gn(),await this.Ge.runTransaction("shutdown","readwrite",[Jn.store,ur.store],(e=>{const t=new Nr(e,x.T);return this.on(t).next((()=>this.un(t)))})),this.Ge.close(),this.yn()}fn(e,t){return e.filter((e=>this.ln(e.updateTimeMs,t)&&!this.wn(e.clientId)))}pn(){return this.runTransaction("getActiveClients","readonly",(e=>Ds(e).Lt().next((e=>this.fn(e,18e5).map((e=>e.clientId))))))}get started(){return this.Be}getMutationQueue(e){return Xr.Yt(e,this.N,this.Ht,this.referenceDelegate)}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getIndexManager(){return this.Ht}getBundleCache(){return this.Je}runTransaction(e,t,n){f("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite";let s;return this.Ge.runTransaction(e,r,dr,(r=>(s=new Nr(r,this.Le?this.Le.next():x.T),"readwrite-primary"===t?this.sn(s).next((e=>!!e||this.rn(s))).next((t=>{if(!t)throw m(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Oe.enqueueRetryable((()=>this.Qe(!1))),new E(T.FAILED_PRECONDITION,fr);return n(s)})).next((e=>this.an(s).next((()=>e)))):this.En(s).next((()=>n(s)))))).then((e=>(s.raiseOnCommittedEvent(),e)))}En(e){return _s(e).get(Jn.key).next((e=>{if(null!==e&&this.ln(e.leaseTimestampMs,5e3)&&!this.wn(e.ownerId)&&!this.cn(e)&&!(this.Me||this.allowTabSynchronization&&e.allowTabSynchronization))throw new E(T.FAILED_PRECONDITION,Ss)}))}an(e){const t=new Jn(this.clientId,this.allowTabSynchronization,Date.now());return _s(e).put(Jn.key,t)}static bt(){return yr.bt()}on(e){const t=_s(e);return t.get(Jn.key).next((e=>this.cn(e)?(f("IndexedDbPersistence","Releasing primary lease."),t.delete(Jn.key)):gr.resolve()))}ln(e,t){const n=Date.now();return!(e<n-t||e>n&&(m(`Detected an update time that is in the future: ${e} > ${n}`),1))}Ze(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.qe=()=>{this.Oe.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.Xe())))},this.document.addEventListener("visibilitychange",this.qe),this.inForeground="visible"===this.document.visibilityState)}mn(){this.qe&&(this.document.removeEventListener("visibilitychange",this.qe),this.qe=null)}tn(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Ue=()=>{this._n(),(0,o.G6)()&&navigator.appVersion.match("Version/14")&&this.Oe.enterRestrictedMode(!0),this.Oe.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Ue))}gn(){this.Ue&&(this.window.removeEventListener("pagehide",this.Ue),this.Ue=null)}wn(e){var t;try{const n=null!==(null===(t=this.Ye)||void 0===t?void 0:t.getItem(this.dn(e)));return f("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return m("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}_n(){if(this.Ye)try{this.Ye.setItem(this.dn(this.clientId),String(Date.now()))}catch(e){m("Failed to set zombie client id.",e)}}yn(){if(this.Ye)try{this.Ye.removeItem(this.dn(this.clientId))}catch(e){}}dn(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function _s(e){return _r(e,Jn.store)}function Ds(e){return _r(e,ur.store)}function As(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
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
 */}class ks{constructor(e,t){this.progress=e,this.Tn=t}}
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
 */class xs{constructor(e,t,n){this.He=e,this.In=t,this.Ht=n}An(e,t){return this.In.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.Rn(e,t,n)))}Rn(e,t,n){return this.He.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}bn(e,t){e.forEach(((e,n)=>{for(const e of t)e.applyToLocalView(n)}))}Pn(e,t){return this.He.getEntries(e,t).next((t=>this.vn(e,t).next((()=>t))))}vn(e,t){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.bn(t,e)))}getDocumentsMatchingQuery(e,t,n){return function(e){return se.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.Vn(e,t.path):We(t)?this.Sn(e,t,n):this.Dn(e,t,n)}Vn(e,t){return this.An(e,new se(t)).next((e=>{let t=Yt();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}Sn(e,t,n){const r=t.collectionGroup;let s=Yt();return this.Ht.getCollectionParents(e,r).next((i=>gr.forEach(i,(i=>{const o=function(e,t){return new Ke(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,i.child(r));return this.Dn(e,o,n).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}Dn(e,t,n){let r,s;return this.He.getDocumentsMatchingQuery(e,t,n).next((n=>(r=n,this.In.getAllMutationBatchesAffectingQuery(e,t)))).next((t=>(s=t,this.Cn(e,s,r).next((e=>{r=e;for(const e of s)for(const t of e.mutations){const n=t.key;let s=r.get(n);null==s&&(s=Te.newInvalidDocument(n),r=r.insert(n,s)),_t(t,s,e.localWriteTime),s.isFoundDocument()||(r=r.remove(n))}}))))).next((()=>(r.forEach(((e,n)=>{nt(t,n)||(r=r.remove(e))})),r)))}Cn(e,t,n){let r=en();for(const e of t)for(const t of e.mutations)t instanceof Ct&&null===n.get(t.key)&&(r=r.add(t.key));let s=n;return this.He.getEntries(e,r).next((e=>(e.forEach(((e,t)=>{t.isFoundDocument()&&(s=s.insert(e,t))})),s)))}}
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
 */class Cs{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Nn=n,this.xn=r}static kn(e,t){let n=en(),r=en();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new Cs(e,t.fromCache,n,r)}}
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
 */class Ls{$n(e){this.On=e}getDocumentsMatchingQuery(e,t,n,r){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual(V.min())?this.Fn(e,t):this.On.Pn(e,r).next((s=>{const o=this.Mn(t,s);return(Ge(t)||je(t))&&this.Ln(t.limitType,o,r,n)?this.Fn(e,t):(l()<=i.in.DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),tt(t)),this.On.getDocumentsMatchingQuery(e,t,n).next((e=>(o.forEach((t=>{e=e.insert(t.key,t)})),e))))}))}Mn(e,t){let n=new Gt(rt(e));return t.forEach(((t,r)=>{nt(e,r)&&(n=n.add(r))})),n}Ln(e,t,n,r){if(n.size!==t.size)return!0;const s="F"===e?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Fn(e,t){return l()<=i.in.DEBUG&&f("QueryEngine","Using full collection scan to execute query:",tt(t)),this.On.getDocumentsMatchingQuery(e,t,V.min())}}
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
 */class Rs{constructor(e,t,n,r){this.persistence=e,this.Bn=t,this.N=r,this.Un=new Kt(R),this.qn=new gs((e=>Se(e)),Ne),this.Kn=V.min(),this.In=e.getMutationQueue(n),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new xs(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Un)))}}function Fs(e,t,n,r){return new Rs(e,t,n,r)}async function Ms(e,t){const n=v(e);let r=n.In,s=n.Qn;const i=await n.persistence.runTransaction("Handle user change","readonly",(e=>{let i;return n.In.getAllMutationBatches(e).next((o=>(i=o,r=n.persistence.getMutationQueue(t),s=new xs(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(e)))).next((t=>{const n=[],r=[];let o=en();for(const e of i){n.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return s.Pn(e,o).next((e=>({Wn:e,removedBatchIds:n,addedBatchIds:r})))}))}));return n.In=r,n.Qn=s,n.Bn.$n(n.Qn),i}function Os(e){const t=v(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.ze.getLastRemoteSnapshotVersion(e)))}function Vs(e,t,n,r,s){let i=en();return n.forEach((e=>i=i.add(e))),t.getEntries(e,i).next((e=>{let i=Ht();return n.forEach(((n,o)=>{const a=e.get(n),c=(null==s?void 0:s.get(n))||r;o.isNoDocument()&&o.version.isEqual(V.min())?(t.removeEntry(n,c),i=i.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(o,c),i=i.insert(n,o)):f("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),i}))}function qs(e,t){const n=v(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.In.getNextMutationBatchAfterBatchId(e,t))))}function Ps(e,t){const n=v(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.ze.getTargetData(e,t).next((s=>s?(r=s,gr.resolve(r)):n.ze.allocateTargetId(e).next((s=>(r=new kr(t,s,0,e.currentSequenceNumber),n.ze.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Un.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(e.targetId,e),n.qn.set(t,e.targetId)),e}))}async function Us(e,t,n){const r=v(e),s=r.Un.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(e=>r.persistence.referenceDelegate.removeTarget(e,s)))}catch(e){if(!vr(e))throw e;f("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Un=r.Un.remove(t),r.qn.delete(s.target)}function Bs(e,t,n){const r=v(e);let s=V.min(),i=en();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=v(e),s=r.qn.get(n);return void 0!==s?gr.resolve(r.Un.get(s)):r.ze.getTargetData(t,n)}(r,e,Je(t)).next((t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(e,t.targetId).next((e=>{i=e}))})).next((()=>r.Bn.getDocumentsMatchingQuery(e,t,n?s:V.min(),n?i:en()))).next((e=>({documents:e,Gn:i})))))}function Ks(e,t){const n=v(e),r=v(n.ze),s=n.Un.get(t);return s?Promise.resolve(s.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.Et(e,t).next((e=>e?e.target:null))))}function $s(e){const t=v(e);return t.persistence.runTransaction("Get new document changes","readonly",(e=>function(e,t,n){const r=v(e);let s=Ht(),i=Rr(n);const o=vs(t),a=IDBKeyRange.lowerBound(i,!0);return o.Kt({index:rr.readTimeIndex,range:a},((e,t)=>{const n=Cr(r.N,t);s=s.insert(n.key,n),i=t.readTime})).next((()=>({Tn:s,readTime:Fr(i)})))}(t.jn,e,t.Kn))).then((({Tn:e,readTime:n})=>(t.Kn=n,e)))}async function zs(e,t,n=en()){const r=await Ps(e,Je(Ur(t.bundledQuery))),s=v(e);return s.persistence.runTransaction("Save named query","readwrite",(e=>{const i=In(t.readTime);if(r.snapshotVersion.compareTo(i)>=0)return s.Je.saveNamedQuery(e,t);const o=r.withResumeToken(Q.EMPTY_BYTE_STRING,i);return s.Un=s.Un.insert(o.targetId,o),s.ze.updateTargetData(e,o).next((()=>s.ze.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>s.ze.addMatchingKeys(e,n,r.targetId))).next((()=>s.Je.saveNamedQuery(e,t)))}))}
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
 */class Gs{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return gr.resolve(this.Yn.get(t))}saveBundleMetadata(e,t){var n;return this.Yn.set(t.id,{id:(n=t).id,version:n.version,createTime:In(n.createTime)}),gr.resolve()}getNamedQuery(e,t){return gr.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,function(e){return{name:e.name,query:Ur(e.bundledQuery),readTime:In(e.readTime)}}(t)),gr.resolve()}}
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
 */class js{constructor(){this.Zn=new Gt(Qs.ts),this.es=new Gt(Qs.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,t){const n=new Qs(e,t);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.rs(new Qs(e,t))}os(e,t){e.forEach((e=>this.removeReference(e,t)))}cs(e){const t=new se(new K([])),n=new Qs(t,e),r=new Qs(t,e+1),s=[];return this.es.forEachInRange([n,r],(e=>{this.rs(e),s.push(e.key)})),s}us(){this.Zn.forEach((e=>this.rs(e)))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const t=new se(new K([])),n=new Qs(t,e),r=new Qs(t,e+1);let s=en();return this.es.forEachInRange([n,r],(e=>{s=s.add(e.key)})),s}containsKey(e){const t=new Qs(e,0),n=this.Zn.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Qs{constructor(e,t){this.key=e,this.ls=t}static ts(e,t){return se.comparator(e.key,t.key)||R(e.ls,t.ls)}static ns(e,t){return R(e.ls,t.ls)||se.comparator(e.key,t.key)}}
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
 */class Hs{constructor(e,t){this.Ht=e,this.referenceDelegate=t,this.In=[],this.fs=1,this.ds=new Gt(Qs.ts)}checkEmpty(e){return gr.resolve(0===this.In.length)}addMutationBatch(e,t,n,r){const s=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const i=new Dr(s,t,n,r);this.In.push(i);for(const t of r)this.ds=this.ds.add(new Qs(t.key,s)),this.Ht.addToCollectionParentIndex(e,t.key.path.popLast());return gr.resolve(i)}lookupMutationBatch(e,t){return gr.resolve(this.ws(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this._s(n),s=r<0?0:r;return gr.resolve(this.In.length>s?this.In[s]:null)}getHighestUnacknowledgedBatchId(){return gr.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(e){return gr.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Qs(t,0),r=new Qs(t,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([n,r],(e=>{const t=this.ws(e.ls);s.push(t)})),gr.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Gt(R);return t.forEach((e=>{const t=new Qs(e,0),r=new Qs(e,Number.POSITIVE_INFINITY);this.ds.forEachInRange([t,r],(e=>{n=n.add(e.ls)}))})),gr.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let s=n;se.isDocumentKey(s)||(s=s.child(""));const i=new Qs(new se(s),0);let o=new Gt(R);return this.ds.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.ls)),!0)}),i),gr.resolve(this.gs(o))}gs(e){const t=[];return e.forEach((e=>{const n=this.ws(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){w(0===this.ys(t.batchId,"removed")),this.In.shift();let n=this.ds;return gr.forEach(t.mutations,(r=>{const s=new Qs(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.ds=n}))}te(e){}containsKey(e,t){const n=new Qs(t,0),r=this.ds.firstAfterOrEqual(n);return gr.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.In.length,gr.resolve()}ys(e,t){return this._s(e)}_s(e){return 0===this.In.length?0:e-this.In[0].batchId}ws(e){const t=this._s(e);return t<0||t>=this.In.length?null:this.In[t]}}
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
 */class Ws{constructor(e,t){this.Ht=e,this.ps=t,this.docs=new Kt(se.comparator),this.size=0}addEntry(e,t,n){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ps(t);return this.docs=this.docs.insert(r,{document:t.clone(),size:o,readTime:n}),this.size+=o-i,this.Ht.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return gr.resolve(n?n.document.clone():Te.newInvalidDocument(t))}getEntries(e,t){let n=Ht();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.clone():Te.newInvalidDocument(e))})),gr.resolve(n)}getDocumentsMatchingQuery(e,t,n){let r=Ht();const s=new se(t.path.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:e,value:{document:s,readTime:o}}=i.getNext();if(!t.path.isPrefixOf(e.path))break;o.compareTo(n)<=0||nt(t,s)&&(r=r.insert(s.key,s.clone()))}return gr.resolve(r)}Es(e,t){return gr.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Ys(this)}getSize(e){return gr.resolve(this.size)}}class Ys extends ps{constructor(e){super(),this.Se=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.document.isValidDocument()?t.push(this.Se.addEntry(e,r.document,this.getReadTime(n))):this.Se.removeEntry(n)})),gr.waitFor(t)}getFromCache(e,t){return this.Se.getEntry(e,t)}getAllFromCache(e,t){return this.Se.getEntries(e,t)}}
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
 */class Js{constructor(e){this.persistence=e,this.Ts=new gs((e=>Se(e)),Ne),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.Is=0,this.As=new js,this.targetCount=0,this.Rs=rs.se()}forEachTarget(e,t){return this.Ts.forEach(((e,n)=>t(n))),gr.resolve()}getLastRemoteSnapshotVersion(e){return gr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return gr.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),gr.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Is&&(this.Is=t),gr.resolve()}ae(e){this.Ts.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Rs=new rs(t),this.highestTargetId=t),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,t){return this.ae(t),this.targetCount+=1,gr.resolve()}updateTargetData(e,t){return this.ae(t),gr.resolve()}removeTargetData(e,t){return this.Ts.delete(t.target),this.As.cs(t.targetId),this.targetCount-=1,gr.resolve()}removeTargets(e,t,n){let r=0;const s=[];return this.Ts.forEach(((i,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Ts.delete(i),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),gr.waitFor(s).next((()=>r))}getTargetCount(e){return gr.resolve(this.targetCount)}getTargetData(e,t){const n=this.Ts.get(t)||null;return gr.resolve(n)}addMatchingKeys(e,t,n){return this.As.ss(t,n),gr.resolve()}removeMatchingKeys(e,t,n){this.As.os(t,n);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach((t=>{s.push(r.markPotentiallyOrphaned(e,t))})),gr.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.As.cs(t),gr.resolve()}getMatchingKeysForTargetId(e,t){const n=this.As.hs(t);return gr.resolve(n)}containsKey(e,t){return gr.resolve(this.As.containsKey(t))}}
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
 */class Xs{constructor(e,t){this.bs={},this.Le=new x(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new Js(this),this.Ht=new zr,this.He=function(e,t){return new Ws(e,t)}(this.Ht,(e=>this.referenceDelegate.Ps(e))),this.N=new xr(t),this.Je=new Gs(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let t=this.bs[e.toKey()];return t||(t=new Hs(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=t),t}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,t,n){f("MemoryPersistence","Starting transaction:",e);const r=new Zs(this.Le.next());return this.referenceDelegate.vs(),n(r).next((e=>this.referenceDelegate.Vs(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ss(e,t){return gr.or(Object.values(this.bs).map((n=>()=>n.containsKey(e,t))))}}class Zs extends mr{constructor(e){super(),this.currentSequenceNumber=e}}class ei{constructor(e){this.persistence=e,this.Ds=new js,this.Cs=null}static Ns(e){return new ei(e)}get xs(){if(this.Cs)return this.Cs;throw y()}addReference(e,t,n){return this.Ds.addReference(n,t),this.xs.delete(n.toString()),gr.resolve()}removeReference(e,t,n){return this.Ds.removeReference(n,t),this.xs.add(n.toString()),gr.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),gr.resolve()}removeTarget(e,t){this.Ds.cs(t.targetId).forEach((e=>this.xs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.xs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}vs(){this.Cs=new Set}Vs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return gr.forEach(this.xs,(n=>{const r=se.fromPath(n);return this.ks(e,r).next((e=>{e||t.removeEntry(r)}))})).next((()=>(this.Cs=null,t.apply(e))))}updateLimboDocument(e,t){return this.ks(e,t).next((e=>{e?this.xs.delete(t.toString()):this.xs.add(t.toString())}))}Ps(e){return 0}ks(e,t){return gr.or([()=>gr.resolve(this.Ds.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ss(e,t)])}}
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
 */function ti(e,t){return`firestore_clients_${e}_${t}`}function ni(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function ri(e,t){return`firestore_targets_${e}_${t}`}class si{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static $s(e,t,n){const r=JSON.parse(n);let s,i="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return i&&r.error&&(i="string"==typeof r.error.message&&"string"==typeof r.error.code,i&&(s=new E(r.error.code,r.error.message))),i?new si(e,t,r.state,s):(m("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ii{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static $s(e,t){const n=JSON.parse(t);let r,s="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return s&&n.error&&(s="string"==typeof n.error.message&&"string"==typeof n.error.code,s&&(r=new E(n.error.code,n.error.message))),s?new ii(e,n.state,r):(m("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class oi{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static $s(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,s=nn();for(let e=0;r&&e<n.activeTargetIds.length;++e)r=re(n.activeTargetIds[e]),s=s.add(n.activeTargetIds[e]);return r?new oi(e,s):(m("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class ai{constructor(e,t){this.clientId=e,this.onlineState=t}static $s(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new ai(t.clientId,t.onlineState):(m("SharedClientState",`Failed to parse online state: ${e}`),null)}}class ci{constructor(){this.activeTargetIds=nn()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ui{constructor(e,t,n,r,s){this.window=e,this.Oe=t,this.persistenceKey=n,this.Ls=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Bs=this.Us.bind(this),this.qs=new Kt(R),this.started=!1,this.Ks=[];const i=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.js=ti(this.persistenceKey,this.Ls),this.Qs=function(e){return`firestore_sequence_number_${e}`}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */(this.persistenceKey),this.qs=this.qs.insert(this.Ls,new ci),this.Ws=new RegExp(`^firestore_clients_${i}_([^_]*)$`),this.Gs=new RegExp(`^firestore_mutations_${i}_(\\d+)(?:_(.*))?$`),this.zs=new RegExp(`^firestore_targets_${i}_(\\d+)$`),this.Hs=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.Js=function(e){return`firestore_bundle_loaded_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.Bs)}static bt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.pn();for(const t of e){if(t===this.Ls)continue;const e=this.getItem(ti(this.persistenceKey,t));if(e){const n=oi.$s(t,e);n&&(this.qs=this.qs.insert(n.clientId,n))}}this.Ys();const t=this.storage.getItem(this.Hs);if(t){const e=this.Xs(t);e&&this.Zs(e)}for(const e of this.Ks)this.Us(e);this.Ks=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.Qs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ti(this.qs)}isActiveQueryTarget(e){let t=!1;return this.qs.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.ei(e,"pending")}updateMutationState(e,t,n){this.ei(e,t,n),this.ni(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(ri(this.persistenceKey,e));if(n){const r=ii.$s(e,n);r&&(t=r.state)}}return this.si.Fs(e),this.Ys(),t}removeLocalQueryTarget(e){this.si.Ms(e),this.Ys()}isLocalQueryTarget(e){return this.si.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ri(this.persistenceKey,e))}updateQueryState(e,t,n){this.ii(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.ni(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.ri(e)}notifyBundleLoaded(){this.oi()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Bs),this.removeItem(this.js),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return f("SharedClientState","READ",e,t),t}setItem(e,t){f("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){f("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Us(e){const t=e;if(t.storageArea===this.storage){if(f("SharedClientState","EVENT",t.key,t.newValue),t.key===this.js)return void m("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Oe.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.Ws.test(t.key)){if(null==t.newValue){const e=this.ai(t.key);return this.ci(e,null)}{const e=this.ui(t.key,t.newValue);if(e)return this.ci(e.clientId,e)}}else if(this.Gs.test(t.key)){if(null!==t.newValue){const e=this.hi(t.key,t.newValue);if(e)return this.li(e)}}else if(this.zs.test(t.key)){if(null!==t.newValue){const e=this.fi(t.key,t.newValue);if(e)return this.di(e)}}else if(t.key===this.Hs){if(null!==t.newValue){const e=this.Xs(t.newValue);if(e)return this.Zs(e)}}else if(t.key===this.Qs){const e=function(e){let t=x.T;if(null!=e)try{const n=JSON.parse(e);w("number"==typeof n),t=n}catch(e){m("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==x.T&&this.sequenceNumberHandler(e)}else if(t.key===this.Js)return this.syncEngine.wi()}else this.Ks.push(t)}))}}get si(){return this.qs.get(this.Ls)}Ys(){this.setItem(this.js,this.si.Os())}ei(e,t,n){const r=new si(this.currentUser,e,t,n),s=ni(this.persistenceKey,this.currentUser,e);this.setItem(s,r.Os())}ni(e){const t=ni(this.persistenceKey,this.currentUser,e);this.removeItem(t)}ri(e){const t={clientId:this.Ls,onlineState:e};this.storage.setItem(this.Hs,JSON.stringify(t))}ii(e,t,n){const r=ri(this.persistenceKey,e),s=new ii(e,t,n);this.setItem(r,s.Os())}oi(){this.setItem(this.Js,"value-not-used")}ai(e){const t=this.Ws.exec(e);return t?t[1]:null}ui(e,t){const n=this.ai(e);return oi.$s(n,t)}hi(e,t){const n=this.Gs.exec(e),r=Number(n[1]),s=void 0!==n[2]?n[2]:null;return si.$s(new c(s),r,t)}fi(e,t){const n=this.zs.exec(e),r=Number(n[1]);return ii.$s(r,t)}Xs(e){return ai.$s(e)}async li(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine._i(e.batchId,e.state,e.error);f("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}di(e){return this.syncEngine.mi(e.targetId,e.state,e.error)}ci(e,t){const n=t?this.qs.insert(e,t):this.qs.remove(e),r=this.ti(this.qs),s=this.ti(n),i=[],o=[];return s.forEach((e=>{r.has(e)||i.push(e)})),r.forEach((e=>{s.has(e)||o.push(e)})),this.syncEngine.gi(i,o).then((()=>{this.qs=n}))}Zs(e){this.qs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ti(e){let t=nn();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class hi{constructor(){this.yi=new ci,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,t,n){this.pi[e]=t}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new ci,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
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
 */class li{Ei(e){}shutdown(){}}
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
 */class di{constructor(){this.Ti=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ei(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ti),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ti),window.addEventListener("offline",this.Ai)}Ii(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */const fi={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */class mi{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}
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
 */class gi extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Fi=t+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,t,n,r){const s=this.Bi(e,t);f("RestConnection","Sending: ",s,n);const i={};return this.Ui(i,r),this.qi(e,s,i,n).then((e=>(f("RestConnection","Received: ",e),e)),(t=>{throw g("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}Ki(e,t,n,r){return this.Li(e,t,n,r)}Ui(e,t){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+u,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t)for(const n in t.authHeaders)t.authHeaders.hasOwnProperty(n)&&(e[n]=t.authHeaders[n])}Bi(e,t){const n=fi[e];return`${this.Fi}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,t,n,r){return new Promise(((s,i)=>{const o=new a.JJ;o.listenOnce(a.tw.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case a.jK.NO_ERROR:const t=o.getResponseJson();f("Connection","XHR received:",JSON.stringify(t)),s(t);break;case a.jK.TIMEOUT:f("Connection",'RPC "'+e+'" timed out'),i(new E(T.DEADLINE_EXCEEDED,"Request time out"));break;case a.jK.HTTP_ERROR:const n=o.getStatus();if(f("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(t)>=0?t:T.UNKNOWN}(e.status);i(new E(t,e.message))}else i(new E(T.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new E(T.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{f("Connection",'RPC "'+e+'" completed.')}}));const c=JSON.stringify(r);o.send(t,"POST",c,n,15)}))}ji(e,t){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=(0,a.UE)(),s=(0,a.FJ)(),i={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(i.xmlHttpFactory=new a.zI({})),this.Ui(i.initMessageHeaders,t),(0,o.uI)()||(0,o.b$)()||(0,o.d)()||(0,o.w1)()||(0,o.Mn)()||(0,o.ru)()||(i.httpHeadersOverwriteParam="$httpHeaders");const c=n.join("");f("Connection","Creating WebChannel: "+c,i);const u=r.createWebChannel(c,i);let h=!1,l=!1;const d=new mi({vi:e=>{l?f("Connection","Not sending because WebChannel is closed:",e):(h||(f("Connection","Opening WebChannel transport."),u.open(),h=!0),f("Connection","WebChannel sending:",e),u.send(e))},Vi:()=>u.close()}),m=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return m(u,a.ii.EventType.OPEN,(()=>{l||f("Connection","WebChannel transport opened.")})),m(u,a.ii.EventType.CLOSE,(()=>{l||(l=!0,f("Connection","WebChannel transport closed"),d.$i())})),m(u,a.ii.EventType.ERROR,(e=>{l||(l=!0,g("Connection","WebChannel transport errored:",e),d.$i(new E(T.UNAVAILABLE,"The operation could not be completed")))})),m(u,a.ii.EventType.MESSAGE,(e=>{var t;if(!l){const n=e.data[0];w(!!n);const r=n,s=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(s){f("Connection","WebChannel received error:",s);const e=s.status;let t=function(e){const t=qt[e];if(void 0!==t)return Bt(t)}(e),n=s.message;void 0===t&&(t=T.INTERNAL,n="Unknown error status: "+e+" with message "+s.message),l=!0,d.$i(new E(t,n)),u.close()}else f("Connection","WebChannel received:",n),d.Oi(n)}})),m(s,a.ju.STAT_EVENT,(e=>{e.stat===a.kN.PROXY?f("Connection","Detected buffering proxy"):e.stat===a.kN.NOPROXY&&f("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.ki()}),0),d}}
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
 */function pi(){return"undefined"!=typeof window?window:null}function yi(){return"undefined"!=typeof document?document:null}
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
 */function wi(e){return new gn(e,!0)}class Ii{constructor(e,t,n=1e3,r=1.5,s=6e4){this.Oe=e,this.timerId=t,this.Qi=n,this.Wi=r,this.Gi=s,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const t=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),r=Math.max(0,t-n);r>0&&f("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,(()=>(this.Ji=Date.now(),e()))),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
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
 */class vi{constructor(e,t,n,r,s,i){this.Oe=e,this.er=n,this.nr=r,this.credentialsProvider=s,this.listener=i,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new Ii(e,t)}ar(){return 1===this.state||2===this.state||4===this.state}cr(){return 2===this.state}start(){3!==this.state?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&null===this.ir&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,(()=>this.dr())))}wr(e){this._r(),this.stream.send(e)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(e,t){this._r(),this.rr.cancel(),this.sr++,3!==e?this.rr.reset():t&&t.code===T.RESOURCE_EXHAUSTED?(m(t.toString()),m("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):t&&t.code===T.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.mr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(t)}mr(){}auth(){this.state=1;const e=this.gr(this.sr),t=this.sr;this.credentialsProvider.getToken().then((e=>{this.sr===t&&this.yr(e)}),(t=>{e((()=>{const e=new E(T.UNKNOWN,"Fetching auth token failed: "+t.message);return this.pr(e)}))}))}yr(e){const t=this.gr(this.sr);this.stream=this.Er(e),this.stream.Si((()=>{t((()=>(this.state=2,this.listener.Si())))})),this.stream.Ci((e=>{t((()=>this.pr(e)))})),this.stream.onMessage((e=>{t((()=>this.onMessage(e)))}))}ur(){this.state=4,this.rr.Xi((async()=>{this.state=0,this.start()}))}pr(e){return f("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(3,e)}gr(e){return t=>{this.Oe.enqueueAndForget((()=>this.sr===e?t():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ti extends vi{constructor(e,t,n,r,s){super(e,"listen_stream_connection_backoff","listen_stream_idle",t,n,s),this.N=r}Er(e){return this.nr.ji("Listen",e)}onMessage(e){this.rr.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:y()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(e,t){return e.D?(w(void 0===t||"string"==typeof t),Q.fromBase64String(t||"")):(w(void 0===t||t instanceof Uint8Array),Q.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?T.UNKNOWN:Bt(e.code);return new E(t,e.message||"")}(o);n=new cn(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=bn(e,r.document.name),i=In(r.document.updateTime),o=new Ie({mapValue:{fields:r.document.fields}}),a=Te.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new on(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=bn(e,r.document),i=r.readTime?In(r.readTime):V.min(),o=Te.newNoDocument(s,i),a=r.removedTargetIds||[];n=new on([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=bn(e,r.document),i=r.removedTargetIds||[];n=new on([],i,s,null)}else{if(!("filter"in t))return y();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,s=new Vt(r),i=e.targetId;n=new an(i,s)}}return n}(this.N,e),n=function(e){if(!("targetChange"in e))return V.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?V.min():t.readTime?In(t.readTime):V.min()}(e);return this.listener.Tr(t,n)}Ir(e){const t={};t.database=_n(this.N),t.addTarget=function(e,t){let n;const r=t.target;return n=_e(r)?{documents:Ln(e,r)}:{query:Rn(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=yn(e,t.resumeToken):t.snapshotVersion.compareTo(V.min())>0&&(n.readTime=pn(e,t.snapshotVersion.toTimestamp())),n}(this.N,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return y()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.N,e);n&&(t.labels=n),this.wr(t)}Ar(e){const t={};t.database=_n(this.N),t.removeTarget=e,this.wr(t)}}class Ei extends vi{constructor(e,t,n,r,s){super(e,"write_stream_connection_backoff","write_stream_idle",t,n,s),this.N=r,this.Rr=!1}get br(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.Pr([])}Er(e){return this.nr.ji("Write",e)}onMessage(e){if(w(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Rr){this.rr.reset();const t=function(e,t){return e&&e.length>0?(w(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?In(e.updateTime):In(t);return n.isEqual(V.min())&&(n=In(t)),new Tt(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=In(e.commitTime);return this.listener.vr(n,t)}return w(!e.writeResults||0===e.writeResults.length),this.Rr=!0,this.listener.Vr()}Sr(){const e={};e.database=_n(this.N),this.wr(e)}Pr(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>xn(this.N,e)))};this.wr(t)}}
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
 */class bi extends class{}{constructor(e,t,n){super(),this.credentials=e,this.nr=t,this.N=n,this.Dr=!1}Cr(){if(this.Dr)throw new E(T.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,t,n){return this.Cr(),this.credentials.getToken().then((r=>this.nr.Li(e,t,n,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===T.UNAUTHENTICATED&&this.credentials.invalidateToken(),e):new E(T.UNKNOWN,e.toString())}))}Ki(e,t,n){return this.Cr(),this.credentials.getToken().then((r=>this.nr.Ki(e,t,n,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===T.UNAUTHENTICATED&&this.credentials.invalidateToken(),e):new E(T.UNKNOWN,e.toString())}))}terminate(){this.Dr=!0}}class Si{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){0===this.Nr&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve()))))}Lr(e){"Online"===this.state?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Fr("Offline")))}set(e){this.Br(),this.Nr=0,"Online"===e&&(this.$r=!1),this.Fr(e)}Fr(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Mr(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(m(t),this.$r=!1):f("OnlineStateTracker",t)}Br(){null!==this.kr&&(this.kr.cancel(),this.kr=null)}}
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
 */class Ni{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=s,this.Qr.Ei((e=>{n.enqueueAndForget((async()=>{Fi(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=v(e);t.Kr.add(4),await Di(t),t.Wr.set("Unknown"),t.Kr.delete(4),await _i(t)}(this))}))})),this.Wr=new Si(n,r)}}async function _i(e){if(Fi(e))for(const t of e.jr)await t(!0)}async function Di(e){for(const t of e.jr)await t(!1)}function Ai(e,t){const n=v(e);n.qr.has(t.targetId)||(n.qr.set(t.targetId,t),Ri(n)?Li(n):Ji(n).cr()&&xi(n,t))}function ki(e,t){const n=v(e),r=Ji(n);n.qr.delete(t),r.cr()&&Ci(n,t),0===n.qr.size&&(r.cr()?r.lr():Fi(n)&&n.Wr.set("Unknown"))}function xi(e,t){e.Gr.Y(t.targetId),Ji(e).Ir(t)}function Ci(e,t){e.Gr.Y(t),Ji(e).Ar(t)}function Li(e){e.Gr=new hn({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.qr.get(t)||null}),Ji(e).start(),e.Wr.Or()}function Ri(e){return Fi(e)&&!Ji(e).ar()&&e.qr.size>0}function Fi(e){return 0===v(e).Kr.size}function Mi(e){e.Gr=void 0}async function Oi(e){e.qr.forEach(((t,n)=>{xi(e,t)}))}async function Vi(e,t){Mi(e),Ri(e)?(e.Wr.Lr(t),Li(e)):e.Wr.set("Unknown")}async function qi(e,t,n){if(e.Wr.set("Online"),t instanceof cn&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.qr.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.qr.delete(r),e.Gr.removeTarget(r))}(e,t)}catch(n){f("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Pi(e,n)}else if(t instanceof on?e.Gr.rt(t):t instanceof an?e.Gr.ft(t):e.Gr.ct(t),!n.isEqual(V.min()))try{const t=await Os(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Gr._t(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.qr.get(r);s&&e.qr.set(r,s.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.qr.get(t);if(!n)return;e.qr.set(t,n.withResumeToken(Q.EMPTY_BYTE_STRING,n.snapshotVersion)),Ci(e,t);const r=new kr(n.target,t,1,n.sequenceNumber);xi(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){f("RemoteStore","Failed to raise snapshot:",t),await Pi(e,t)}}async function Pi(e,t,n){if(!vr(t))throw t;e.Kr.add(1),await Di(e),e.Wr.set("Offline"),n||(n=()=>Os(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{f("RemoteStore","Retrying IndexedDB access"),await n(),e.Kr.delete(1),await _i(e)}))}function Ui(e,t){return t().catch((n=>Pi(e,n,t)))}async function Bi(e){const t=v(e),n=Xi(t);let r=t.Ur.length>0?t.Ur[t.Ur.length-1].batchId:-1;for(;Ki(t);)try{const e=await qs(t.localStore,r);if(null===e){0===t.Ur.length&&n.lr();break}r=e.batchId,$i(t,e)}catch(e){await Pi(t,e)}zi(t)&&Gi(t)}function Ki(e){return Fi(e)&&e.Ur.length<10}function $i(e,t){e.Ur.push(t);const n=Xi(e);n.cr()&&n.br&&n.Pr(t.mutations)}function zi(e){return Fi(e)&&!Xi(e).ar()&&e.Ur.length>0}function Gi(e){Xi(e).start()}async function ji(e){Xi(e).Sr()}async function Qi(e){const t=Xi(e);for(const n of e.Ur)t.Pr(n.mutations)}async function Hi(e,t,n){const r=e.Ur.shift(),s=Ar.from(r,t,n);await Ui(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await Bi(e)}async function Wi(e,t){t&&Xi(e).br&&await async function(e,t){if(Ut(n=t.code)&&n!==T.ABORTED){const n=e.Ur.shift();Xi(e).hr(),await Ui(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Bi(e)}var n}(e,t),zi(e)&&Gi(e)}async function Yi(e,t){const n=v(e);t?(n.Kr.delete(2),await _i(n)):t||(n.Kr.add(2),await Di(n),n.Wr.set("Unknown"))}function Ji(e){return e.zr||(e.zr=function(e,t,n){const r=v(e);return r.Cr(),new Ti(t,r.nr,r.credentials,r.N,n)
/**
 * @license
 * Copyright 2018 Google LLC
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
 */}(e.datastore,e.asyncQueue,{Si:Oi.bind(null,e),Ci:Vi.bind(null,e),Tr:qi.bind(null,e)}),e.jr.push((async t=>{t?(e.zr.hr(),Ri(e)?Li(e):e.Wr.set("Unknown")):(await e.zr.stop(),Mi(e))}))),e.zr}function Xi(e){return e.Hr||(e.Hr=function(e,t,n){const r=v(e);return r.Cr(),new Ei(t,r.nr,r.credentials,r.N,n)}(e.datastore,e.asyncQueue,{Si:ji.bind(null,e),Ci:Wi.bind(null,e),Vr:Qi.bind(null,e),vr:Hi.bind(null,e)}),e.jr.push((async t=>{t?(e.Hr.hr(),await Bi(e)):(await e.Hr.stop(),e.Ur.length>0&&(f("RemoteStore",`Stopping write stream with ${e.Ur.length} pending writes`),e.Ur=[]))}))),e.Hr
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
 */}class Zi{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new b,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,s){const i=Date.now()+n,o=new Zi(e,t,i,r,s);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new E(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function eo(e,t){if(m("AsyncQueue",`${t}: ${e}`),vr(e))return new E(T.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */class to{constructor(e){this.comparator=e?(t,n)=>e(t,n)||se.comparator(t.key,n.key):(e,t)=>se.comparator(e.key,t.key),this.keyedMap=Yt(),this.sortedSet=new Kt(this.comparator)}static emptySet(e){return new to(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof to))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new to;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
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
 */class no{constructor(){this.Jr=new Kt(se.comparator)}track(e){const t=e.doc.key,n=this.Jr.get(t);n?0!==e.type&&3===n.type?this.Jr=this.Jr.insert(t,e):3===e.type&&1!==n.type?this.Jr=this.Jr.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Jr=this.Jr.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Jr=this.Jr.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Jr=this.Jr.remove(t):1===e.type&&2===n.type?this.Jr=this.Jr.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Jr=this.Jr.insert(t,{type:2,doc:e.doc}):y():this.Jr=this.Jr.insert(t,e)}Yr(){const e=[];return this.Jr.inorderTraversal(((t,n)=>{e.push(n)})),e}}class ro{constructor(e,t,n,r,s,i,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new ro(e,t,to.emptySet(t),s,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ze(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
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
 */class so{constructor(){this.Xr=void 0,this.listeners=[]}}class io{constructor(){this.queries=new gs((e=>et(e)),Ze),this.onlineState="Unknown",this.Zr=new Set}}async function oo(e,t){const n=v(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new so),s)try{i.Xr=await n.onListen(r)}catch(e){const n=eo(e,`Initialization of query '${tt(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,i),i.listeners.push(t),t.eo(n.onlineState),i.Xr&&t.no(i.Xr)&&ho(n)}async function ao(e,t){const n=v(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function co(e,t){const n=v(e);let r=!1;for(const e of t){const t=e.query,s=n.queries.get(t);if(s){for(const t of s.listeners)t.no(e)&&(r=!0);s.Xr=e}}r&&ho(n)}function uo(e,t,n){const r=v(e),s=r.queries.get(t);if(s)for(const e of s.listeners)e.onError(n);r.queries.delete(t)}function ho(e){e.Zr.forEach((e=>{e.next()}))}class lo{constructor(e,t,n){this.query=e,this.so=t,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=n||{}}no(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new ro(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.io?this.oo(e)&&(this.so.next(e),t=!0):this.ao(e,this.onlineState)&&(this.co(e),t=!0),this.ro=e,t}onError(e){this.so.error(e)}eo(e){this.onlineState=e;let t=!1;return this.ro&&!this.io&&this.ao(this.ro,e)&&(this.co(this.ro),t=!0),t}ao(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return!(this.options.uo&&n||e.docs.isEmpty()&&"Offline"!==t)}oo(e){if(e.docChanges.length>0)return!0;const t=this.ro&&this.ro.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}co(e){e=ro.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.io=!0,this.so.next(e)}}
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
 */class fo{constructor(e,t){this.payload=e,this.byteLength=t}ho(){return"metadata"in this.payload}}
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
 */class mo{constructor(e){this.N=e}zn(e){return bn(this.N,e)}Hn(e){return e.metadata.exists?kn(this.N,e.document,!1):Te.newNoDocument(this.zn(e.metadata.name),this.Jn(e.metadata.readTime))}Jn(e){return In(e)}}class go{constructor(e,t,n){this.lo=e,this.localStore=t,this.N=n,this.queries=[],this.documents=[],this.progress=po(e)}fo(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;return e.payload.namedQuery?this.queries.push(e.payload.namedQuery):e.payload.documentMetadata?(this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t):e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t),t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}wo(e){const t=new Map,n=new mo(this.N);for(const r of e)if(r.metadata.queries){const e=n.zn(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||en()).add(e);t.set(n,r)}}return t}async complete(){const e=await async function(e,t,n,r){const s=v(e);let i=en(),o=Ht(),a=Xt();for(const e of n){const n=t.zn(e.metadata.name);e.document&&(i=i.add(n)),o=o.insert(n,t.Hn(e)),a=a.insert(n,t.Jn(e.metadata.readTime))}const c=s.jn.newChangeBuffer({trackRemovals:!0}),u=await Ps(s,function(e){return Je(ze(K.fromString(`__bundle__/docs/${e}`)))}(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",(e=>Vs(e,c,o,V.min(),a).next((t=>(c.apply(e),t))).next((t=>s.ze.removeMatchingKeysForTargetId(e,u.targetId).next((()=>s.ze.addMatchingKeys(e,i,u.targetId))).next((()=>s.Qn.vn(e,t))).next((()=>t))))))}(this.localStore,new mo(this.N),this.documents,this.lo.id),t=this.wo(this.documents);for(const e of this.queries)await zs(this.localStore,e,t.get(e.name));return this.progress.taskState="Success",new ks(Object.assign({},this.progress),e)}}function po(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
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
 */class yo{constructor(e){this.key=e}}class wo{constructor(e){this.key=e}}class Io{constructor(e,t){this.query=e,this._o=t,this.mo=null,this.current=!1,this.yo=en(),this.mutatedKeys=en(),this.po=rt(e),this.Eo=new to(this.po)}get To(){return this._o}Io(e,t){const n=t?t.Ao:new no,r=t?t.Eo:this.Eo;let s=t?t.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a=Ge(this.query)&&r.size===this.query.limit?r.last():null,c=je(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),h=nt(this.query,t)?t:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.Ro(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.po(h,a)>0||c&&this.po(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(i=i.add(h),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))})),Ge(this.query)||je(this.query))for(;i.size>this.query.limit;){const e=Ge(this.query)?i.last():i.first();i=i.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{Eo:i,Ao:n,Ln:o,mutatedKeys:s}}Ro(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Eo;this.Eo=e.Eo,this.mutatedKeys=e.mutatedKeys;const s=e.Ao.Yr();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(e)-n(t)}
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
 */(e.type,t.type)||this.po(e.doc,t.doc))),this.bo(n);const i=t?this.Po():[],o=0===this.yo.size&&this.current?1:0,a=o!==this.mo;return this.mo=o,0!==s.length||a?{snapshot:new ro(this.query,e.Eo,r,s,e.mutatedKeys,0===o,a,!1),vo:i}:{vo:i}}eo(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Eo:this.Eo,Ao:new no,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(e){return!this._o.has(e)&&!!this.Eo.has(e)&&!this.Eo.get(e).hasLocalMutations}bo(e){e&&(e.addedDocuments.forEach((e=>this._o=this._o.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this._o=this._o.delete(e))),this.current=e.current)}Po(){if(!this.current)return[];const e=this.yo;this.yo=en(),this.Eo.forEach((e=>{this.Vo(e.key)&&(this.yo=this.yo.add(e.key))}));const t=[];return e.forEach((e=>{this.yo.has(e)||t.push(new wo(e))})),this.yo.forEach((n=>{e.has(n)||t.push(new yo(n))})),t}So(e){this._o=e.Gn,this.yo=en();const t=this.Io(e.documents);return this.applyChanges(t,!0)}Do(){return ro.fromInitialDocuments(this.query,this.Eo,this.mutatedKeys,0===this.mo)}}class vo{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class To{constructor(e){this.key=e,this.Co=!1}}class Eo{constructor(e,t,n,r,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.No={},this.xo=new gs((e=>et(e)),Ze),this.ko=new Map,this.$o=new Set,this.Oo=new Kt(se.comparator),this.Fo=new Map,this.Mo=new js,this.Lo={},this.Bo=new Map,this.Uo=rs.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return!0===this.qo}}async function bo(e,t){const n=Wo(e);let r,s;const i=n.xo.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Do();else{const e=await Ps(n.localStore,Je(t)),i=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,s=await So(n,t,r,"current"===i),n.isPrimaryClient&&Ai(n.remoteStore,e)}return s}async function So(e,t,n,r){e.Ko=(t,n,r)=>async function(e,t,n,r){let s=t.view.Io(n);s.Ln&&(s=await Bs(e.localStore,t.query,!1).then((({documents:e})=>t.view.Io(e,s))));const i=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(s,e.isPrimaryClient,i);return Mo(e,t.targetId,o.vo),o.snapshot}(e,t,n,r);const s=await Bs(e.localStore,t,!0),i=new Io(t,s.Gn),o=i.Io(s.documents),a=sn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=i.applyChanges(o,e.isPrimaryClient,a);Mo(e,n,c.vo);const u=new vo(t,n,i);return e.xo.set(t,u),e.ko.has(n)?e.ko.get(n).push(t):e.ko.set(n,[t]),c.snapshot}async function No(e,t){const n=v(e),r=n.xo.get(t),s=n.ko.get(r.targetId);if(s.length>1)return n.ko.set(r.targetId,s.filter((e=>!Ze(e,t)))),void n.xo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Us(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),ki(n.remoteStore,r.targetId),Ro(n,r.targetId)})).catch(cs)):(Ro(n,r.targetId),await Us(n.localStore,r.targetId,!0))}async function _o(e,t){const n=v(e);try{const e=await function(e,t){const n=v(e),r=t.snapshotVersion;let s=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const i=n.jn.newChangeBuffer({trackRemovals:!0});s=n.Un;const o=[];t.targetChanges.forEach(((t,i)=>{const a=s.get(i);if(!a)return;o.push(n.ze.removeMatchingKeys(e,t.removedDocuments,i).next((()=>n.ze.addMatchingKeys(e,t.addedDocuments,i))));const c=t.resumeToken;if(c.approximateByteSize()>0){const u=a.withResumeToken(c,r).withSequenceNumber(e.currentSequenceNumber);s=s.insert(i,u),function(e,t,n){return w(t.resumeToken.approximateByteSize()>0),0===e.resumeToken.approximateByteSize()||t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(a,u,t)&&o.push(n.ze.updateTargetData(e,u))}}));let a=Ht();if(t.documentUpdates.forEach(((r,s)=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(Vs(e,i,t.documentUpdates,r,void 0).next((e=>{a=e}))),!r.isEqual(V.min())){const t=n.ze.getLastRemoteSnapshotVersion(e).next((t=>n.ze.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return gr.waitFor(o).next((()=>i.apply(e))).next((()=>n.Qn.vn(e,a))).next((()=>a))})).then((e=>(n.Un=s,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Fo.get(t);r&&(w(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Co=!0:e.modifiedDocuments.size>0?w(r.Co):e.removedDocuments.size>0&&(w(r.Co),r.Co=!1))})),await qo(n,e,t)}catch(e){await cs(e)}}function Do(e,t,n){const r=v(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.xo.forEach(((n,r)=>{const s=r.view.eo(t);s.snapshot&&e.push(s.snapshot)})),function(e,t){const n=v(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.eo(t)&&(r=!0)})),r&&ho(n)}(r.eventManager,t),e.length&&r.No.Tr(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Ao(e,t,n){const r=v(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Fo.get(t),i=s&&s.key;if(i){let e=new Kt(se.comparator);e=e.insert(i,Te.newNoDocument(i,V.min()));const n=en().add(i),s=new rn(V.min(),new Map,new Gt(R),e,n);await _o(r,s),r.Oo=r.Oo.remove(i),r.Fo.delete(t),Vo(r)}else await Us(r.localStore,t,!1).then((()=>Ro(r,t,n))).catch(cs)}async function ko(e,t){const n=v(e),r=t.batch.batchId;try{const e=await function(e,t){const n=v(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),s=n.jn.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const s=n.batch,i=s.keys();let o=gr.resolve();return i.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const i=n.docVersions.get(e);w(null!==i),t.version.compareTo(i)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&r.addEntry(t,n.commitVersion))}))})),o.next((()=>e.In.removeMutationBatch(t,s)))}(n,e,t,s).next((()=>s.apply(e))).next((()=>n.In.performConsistencyCheck(e))).next((()=>n.Qn.Pn(e,r)))}))}(n.localStore,t);Lo(n,r,null),Co(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await qo(n,e)}catch(e){await cs(e)}}async function xo(e,t,n){const r=v(e);try{const e=await function(e,t){const n=v(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.In.lookupMutationBatch(e,t).next((t=>(w(null!==t),r=t.keys(),n.In.removeMutationBatch(e,t)))).next((()=>n.In.performConsistencyCheck(e))).next((()=>n.Qn.Pn(e,r)))}))}(r.localStore,t);Lo(r,t,n),Co(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await qo(r,e)}catch(n){await cs(n)}}function Co(e,t){(e.Bo.get(t)||[]).forEach((e=>{e.resolve()})),e.Bo.delete(t)}function Lo(e,t,n){const r=v(e);let s=r.Lo[r.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),r.Lo[r.currentUser.toKey()]=s}}function Ro(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ko.get(t))e.xo.delete(r),n&&e.No.jo(r,n);e.ko.delete(t),e.isPrimaryClient&&e.Mo.cs(t).forEach((t=>{e.Mo.containsKey(t)||Fo(e,t)}))}function Fo(e,t){e.$o.delete(t.path.canonicalString());const n=e.Oo.get(t);null!==n&&(ki(e.remoteStore,n),e.Oo=e.Oo.remove(t),e.Fo.delete(n),Vo(e))}function Mo(e,t,n){for(const r of n)r instanceof yo?(e.Mo.addReference(r.key,t),Oo(e,r)):r instanceof wo?(f("SyncEngine","Document no longer in limbo: "+r.key),e.Mo.removeReference(r.key,t),e.Mo.containsKey(r.key)||Fo(e,r.key)):y()}function Oo(e,t){const n=t.key,r=n.path.canonicalString();e.Oo.get(n)||e.$o.has(r)||(f("SyncEngine","New document in limbo: "+n),e.$o.add(r),Vo(e))}function Vo(e){for(;e.$o.size>0&&e.Oo.size<e.maxConcurrentLimboResolutions;){const t=e.$o.values().next().value;e.$o.delete(t);const n=new se(K.fromString(t)),r=e.Uo.next();e.Fo.set(r,new To(n)),e.Oo=e.Oo.insert(n,r),Ai(e.remoteStore,new kr(Je(ze(n.path)),r,2,x.T))}}async function qo(e,t,n){const r=v(e),s=[],i=[],o=[];r.xo.isEmpty()||(r.xo.forEach(((e,a)=>{o.push(r.Ko(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),s.push(e);const t=Cs.kn(a.targetId,e);i.push(t)}})))})),await Promise.all(o),r.No.Tr(s),await async function(e,t){const n=v(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>gr.forEach(t,(t=>gr.forEach(t.Nn,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>gr.forEach(t.xn,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!vr(e))throw e;f("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Un.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.Un=n.Un.insert(t,s)}}}(r.localStore,i))}async function Po(e,t){const n=v(e);if(!n.currentUser.isEqual(t)){f("SyncEngine","User change. New user:",t.toKey());const e=await Ms(n.localStore,t);n.currentUser=t,function(e,t){e.Bo.forEach((e=>{e.forEach((e=>{e.reject(new E(T.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),e.Bo.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await qo(n,e.Wn)}}function Uo(e,t){const n=v(e),r=n.Fo.get(t);if(r&&r.Co)return en().add(r.key);{let e=en();const r=n.ko.get(t);if(!r)return e;for(const t of r){const r=n.xo.get(t);e=e.unionWith(r.view.To)}return e}}async function Bo(e,t){const n=v(e),r=await Bs(n.localStore,t.query,!0),s=t.view.So(r);return n.isPrimaryClient&&Mo(n,t.targetId,s.vo),s}async function Ko(e){const t=v(e);return $s(t.localStore).then((e=>qo(t,e)))}async function $o(e,t,n,r){const s=v(e),i=await function(e,t){const n=v(e),r=v(n.In);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.Xt(e,t).next((t=>t?n.Qn.Pn(e,t):gr.resolve(null)))))}(s.localStore,t);null!==i?("pending"===n?await Bi(s.remoteStore):"acknowledged"===n||"rejected"===n?(Lo(s,t,r||null),Co(s,t),function(e,t){v(v(e).In).te(t)}(s.localStore,t)):y(),await qo(s,i)):f("SyncEngine","Cannot apply mutation batch with id: "+t)}async function zo(e,t,n){const r=v(e),s=[],i=[];for(const e of t){let t;const n=r.ko.get(e);if(n&&0!==n.length){t=await Ps(r.localStore,Je(n[0]));for(const e of n){const t=r.xo.get(e),n=await Bo(r,t);n.snapshot&&i.push(n.snapshot)}}else{const n=await Ks(r.localStore,e);t=await Ps(r.localStore,n),await So(r,Go(n),e,!1)}s.push(t)}return r.No.Tr(i),s}function Go(e){return $e(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function jo(e){const t=v(e);return v(v(t.localStore).persistence).pn()}async function Qo(e,t,n,r){const s=v(e);if(s.qo)f("SyncEngine","Ignoring unexpected query state notification.");else if(s.ko.has(t))switch(n){case"current":case"not-current":{const e=await $s(s.localStore),r=rn.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await qo(s,e,r);break}case"rejected":await Us(s.localStore,t,!0),Ro(s,t,r);break;default:y()}}async function Ho(e,t,n){const r=Wo(e);if(r.qo){for(const e of t){if(r.ko.has(e)){f("SyncEngine","Adding an already active target "+e);continue}const t=await Ks(r.localStore,e),n=await Ps(r.localStore,t);await So(r,Go(t),n.targetId,!1),Ai(r.remoteStore,n)}for(const e of n)r.ko.has(e)&&await Us(r.localStore,e,!1).then((()=>{ki(r.remoteStore,e),Ro(r,e)})).catch(cs)}}function Wo(e){const t=v(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=_o.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Uo.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Ao.bind(null,t),t.No.Tr=co.bind(null,t.eventManager),t.No.jo=uo.bind(null,t.eventManager),t}function Yo(e){const t=v(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ko.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=xo.bind(null,t),t}class Jo{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=wi(e.databaseInfo.databaseId),this.sharedClientState=this.Wo(e),this.persistence=this.Go(e),await this.persistence.start(),this.gcScheduler=this.zo(e),this.localStore=this.Ho(e)}zo(e){return null}Ho(e){return Fs(this.persistence,new Ls,e.initialUser,this.N)}Go(e){return new Xs(ei.Ns,this.N)}Wo(e){return new hi}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Xo extends Jo{constructor(e,t,n){super(),this.Jo=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await async function(e){const t=v(e);return t.persistence.runTransaction("Synchronize last document change read time","readonly",(e=>function(e){const t=vs(e);let n=V.min();return t.Kt({index:rr.readTimeIndex,reverse:!0},((e,t,r)=>{t.readTime&&(n=Fr(t.readTime)),r.done()})).next((()=>n))}(e))).then((e=>{t.Kn=e}))}(this.localStore),await this.Jo.initialize(this,e),await Yo(this.Jo.syncEngine),await Bi(this.Jo.remoteStore),await this.persistence.nn((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve())))}Ho(e){return Fs(this.persistence,new Ls,e.initialUser,this.N)}zo(e){const t=this.persistence.referenceDelegate.garbageCollector;return new ls(t,e.asyncQueue)}Go(e){const t=As(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Wr.withCacheSize(this.cacheSizeBytes):Wr.DEFAULT;return new Ns(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,pi(),yi(),this.N,this.sharedClientState,!!this.forceOwnership)}Wo(e){return new hi}}class Zo extends Xo{constructor(e,t){super(e,t,!1),this.Jo=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Jo.syncEngine;this.sharedClientState instanceof ui&&(this.sharedClientState.syncEngine={_i:$o.bind(null,t),mi:Qo.bind(null,t),gi:Ho.bind(null,t),pn:jo.bind(null,t),wi:Ko.bind(null,t)},await this.sharedClientState.start()),await this.persistence.nn((async e=>{await async function(e,t){const n=v(e);if(Wo(n),Yo(n),!0===t&&!0!==n.qo){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await zo(n,e.toArray());n.qo=!0,await Yi(n.remoteStore,!0);for(const e of t)Ai(n.remoteStore,e)}else if(!1===t&&!1!==n.qo){const e=[];let t=Promise.resolve();n.ko.forEach(((r,s)=>{n.sharedClientState.isLocalQueryTarget(s)?e.push(s):t=t.then((()=>(Ro(n,s),Us(n.localStore,s,!0)))),ki(n.remoteStore,s)})),await t,await zo(n,e),function(e){const t=v(e);t.Fo.forEach(((e,n)=>{ki(t.remoteStore,n)})),t.Mo.us(),t.Fo=new Map,t.Oo=new Kt(se.comparator)}(n),n.qo=!1,await Yi(n.remoteStore,!1)}}(this.Jo.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):e||this.gcScheduler.stop())}))}Wo(e){const t=pi();if(!ui.bt(t))throw new E(T.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=As(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ui(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class ea{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Do(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Po.bind(null,this.syncEngine),await Yi(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new io}createDatastore(e){const t=wi(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new gi(r));var r;return function(e,t,n){return new bi(e,t,n)}(e.credentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,s=e=>Do(this.syncEngine,e,0),i=di.bt()?new di:new li,new Ni(t,n,r,s,i);var t,n,r,s,i}createSyncEngine(e,t){return function(e,t,n,r,s,i,o){const a=new Eo(e,t,n,r,s,i);return o&&(a.qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=v(e);f("RemoteStore","RemoteStore shutting down."),t.Kr.add(5),await Di(t),t.Qr.shutdown(),t.Wr.set("Unknown")}(this.remoteStore)}}
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
 */function ta(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
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
 */class na{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Yo(this.observer.next,e)}error(e){this.observer.error?this.Yo(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Xo(){this.muted=!0}Yo(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
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
 */class ra{constructor(e,t){this.Zo=e,this.N=t,this.metadata=new b,this.buffer=new Uint8Array,this.ta=new TextDecoder("utf-8"),this.ea().then((e=>{e&&e.ho()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.payload)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Zo.cancel()}async getMetadata(){return this.metadata.promise}async Qo(){return await this.getMetadata(),this.ea()}async ea(){const e=await this.na();if(null===e)return null;const t=this.ta.decode(e),n=Number(t);isNaN(n)&&this.sa(`length string (${t}) is not valid number`);const r=await this.ia(n);return new fo(JSON.parse(r),e.length+n)}ra(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async na(){for(;this.ra()<0&&!await this.oa(););if(0===this.buffer.length)return null;const e=this.ra();e<0&&this.sa("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async ia(e){for(;this.buffer.length<e;)await this.oa()&&this.sa("Reached the end of bundle when more is expected.");const t=this.ta.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}sa(e){throw this.Zo.cancel(),new Error(`Invalid bundle format: ${e}`)}async oa(){const e=await this.Zo.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
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
 */class sa{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new E(T.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=v(e),r=_n(n.N)+"/documents",s={documents:t.map((e=>En(n.N,e)))},i=await n.Ki("BatchGetDocuments",r,s),o=new Map;i.forEach((e=>{const t=function(e,t){return"found"in t?function(e,t){w(!!t.found),t.found.name,t.found.updateTime;const n=bn(e,t.found.name),r=In(t.found.updateTime),s=new Ie({mapValue:{fields:t.found.fields}});return Te.newFoundDocument(n,r,s)}(e,t):"missing"in t?function(e,t){w(!!t.missing),w(!!t.readTime);const n=bn(e,t.missing),r=In(t.readTime);return Te.newNoDocument(n,r)}(e,t):y()}(n.N,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());w(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new Mt(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=se.fromPath(t);this.mutations.push(new Ot(n,this.precondition(n)))})),await async function(e,t){const n=v(e),r=_n(n.N)+"/documents",s={writes:t.map((e=>xn(n.N,e)))};await n.Li("Commit",r,s)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw y();t=V.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new E(T.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?Et.updateTime(t):Et.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(V.min()))throw new E(T.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Et.updateTime(t)}return Et.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
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
 */class ia{constructor(e,t,n,r){this.asyncQueue=e,this.datastore=t,this.updateFunction=n,this.deferred=r,this.aa=5,this.rr=new Ii(this.asyncQueue,"transaction_retry")}run(){this.aa-=1,this.ca()}ca(){this.rr.Xi((async()=>{const e=new sa(this.datastore),t=this.ua(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.ha(e)}))))})).catch((e=>{this.ha(e)}))}))}ua(e){try{const t=this.updateFunction(e);return!te(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}ha(e){this.aa>0&&this.la(e)?(this.aa-=1,this.asyncQueue.enqueueAndForget((()=>(this.ca(),Promise.resolve())))):this.deferred.reject(e)}la(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!Ut(t)}return!1}}
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
 */class oa{constructor(e,t,n){this.credentials=e,this.asyncQueue=t,this.databaseInfo=n,this.user=c.UNAUTHENTICATED,this.clientId=L.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(t,(async e=>{f("FirestoreClient","Received user=",e.uid),await this.credentialListener(e),this.user=e}))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new b;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(t){const n=eo(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function aa(e,t){e.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await Ms(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function ca(e,t){e.asyncQueue.verifyOperationInProgress();const n=await ua(e);f("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>async function(e,t){const n=v(e);n.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const r=Fi(n);n.Kr.add(3),await Di(n),r&&n.Wr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Kr.delete(3),await _i(n)}(t.remoteStore,e))),e.onlineComponents=t}async function ua(e){return e.offlineComponents||(f("FirestoreClient","Using default OfflineComponentProvider"),await aa(e,new Jo)),e.offlineComponents}async function ha(e){return e.onlineComponents||(f("FirestoreClient","Using default OnlineComponentProvider"),await ca(e,new ea)),e.onlineComponents}function la(e){return ua(e).then((e=>e.persistence))}function da(e){return ua(e).then((e=>e.localStore))}function fa(e){return ha(e).then((e=>e.remoteStore))}function ma(e){return ha(e).then((e=>e.syncEngine))}async function ga(e){const t=await ha(e),n=t.eventManager;return n.onListen=bo.bind(null,t.syncEngine),n.onUnlisten=No.bind(null,t.syncEngine),n}function pa(e,t,n={}){const r=new b;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,s){const i=new na({next:i=>{t.enqueueAndForget((()=>ao(e,o)));const a=i.docs.has(n);!a&&i.fromCache?s.reject(new E(T.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&r&&"server"===r.source?s.reject(new E(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(i)},error:e=>s.reject(e)}),o=new lo(ze(n.path),i,{includeMetadataChanges:!0,uo:!0});return oo(e,o)}(await ga(e),e.asyncQueue,t,n,r))),r.promise}function ya(e,t,n={}){const r=new b;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,s){const i=new na({next:n=>{t.enqueueAndForget((()=>ao(e,o))),n.fromCache&&"server"===r.source?s.reject(new E(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),o=new lo(n,i,{includeMetadataChanges:!0,uo:!0});return oo(e,o)}(await ga(e),e.asyncQueue,t,n,r))),r.promise}function wa(e,t,n,r){const s=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new ra(e,t)}(function(e,t){if(e instanceof Uint8Array)return ta(e,t);if(e instanceof ArrayBuffer)return ta(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}
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
 */(n,wi(t));e.asyncQueue.enqueueAndForget((async()=>{!function(e,t,n){const r=v(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=v(e),r=In(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.Je.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,r))return await t.close(),void n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r));n._updateProgress(po(r));const s=new go(r,e.localStore,t.N);let i=await t.Qo();for(;i;){const e=await s.fo(i);e&&n._updateProgress(e),i=await t.Qo()}const o=await s.complete();await qo(e,o.Tn,void 0),await function(e,t){const n=v(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.Je.saveBundleMetadata(e,t)))}(e.localStore,r),n._completeWith(o.progress)}catch(e){g("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e)}}
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
 */)(r,t,n).then((()=>{r.sharedClientState.notifyBundleLoaded()}))}(await ma(e),s,r)}))}class Ia{constructor(e,t,n,r,s,i,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class va{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof va&&e.projectId===this.projectId&&e.database===this.database}}
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
 */const Ta=new Map;
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
 */function Ea(e,t,n){if(!n)throw new E(T.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function ba(e,t,n,r){if(!0===t&&!0===r)throw new E(T.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Sa(e){if(!se.isDocumentKey(e))throw new E(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Na(e){if(se.isDocumentKey(e))throw new E(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function _a(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":y()}function Da(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new E(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_a(e);throw new E(T.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Aa(e,t){if(t<=0)throw new E(T.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
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
 */class ka{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new E(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new E(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,ba("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
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
 */class xa{constructor(e,t){this._credentials=t,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ka({}),this._settingsFrozen=!1,e instanceof va?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new E(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new va(e.options.projectId)}(e))}get app(){if(!this._app)throw new E(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new E(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ka(e),void 0!==e.credentials&&(this._credentials=function(e){if(!e)return new N;switch(e.type){case"gapi":const t=e.client;return w(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new k(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new E(T.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Ta.get(e);t&&(f("ComponentProvider","Removing Datastore"),Ta.delete(e),t.terminate())}(this),Promise.resolve()}}function Ca(e,t,n,r={}){var s;const i=(e=Da(e,xa))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==t&&g("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=c.MOCK_USER;else{t=(0,o.Sg)(r.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new E(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new c(i)}e._credentials=new _(new S(t,n))}}
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
 */class La{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new La(this.firestore,e,this._key)}}class Ra{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ra(this.firestore,e,this._query)}}class Fa extends Ra{constructor(e,t,n){super(e,t,ze(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new La(this.firestore,null,new se(e))}withConverter(e){return new Fa(this.firestore,e,this._path)}}function Ma(e,t,...n){if(e=(0,o.m9)(e),Ea("collection","path",t),e instanceof xa){const r=K.fromString(t,...n);return Na(r),new Fa(e,null,r)}{if(!(e instanceof La||e instanceof Fa))throw new E(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(K.fromString(t,...n));return Na(r),new Fa(e.firestore,null,r)}}function Oa(e,t){if(e=Da(e,xa),Ea("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new E(T.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Ra(e,null,function(e){return new Ke(K.emptyPath(),e)}(t))}function Va(e,t,...n){if(e=(0,o.m9)(e),1===arguments.length&&(t=L.I()),Ea("doc","path",t),e instanceof xa){const r=K.fromString(t,...n);return Sa(r),new La(e,null,new se(r))}{if(!(e instanceof La||e instanceof Fa))throw new E(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(K.fromString(t,...n));return Sa(r),new La(e.firestore,e instanceof Fa?e.converter:null,new se(r))}}function qa(e,t){return e=(0,o.m9)(e),t=(0,o.m9)(t),(e instanceof La||e instanceof Fa)&&(t instanceof La||t instanceof Fa)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function Pa(e,t){return e=(0,o.m9)(e),t=(0,o.m9)(t),e instanceof Ra&&t instanceof Ra&&e.firestore===t.firestore&&Ze(e._query,t._query)&&e.converter===t.converter
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
 */}class Ua{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new Ii(this,"async_queue_retry"),this.Ea=()=>{const e=yi();e&&f("AsyncQueue","Visibility state changed to "+e.visibilityState),this.rr.tr()};const e=yi();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ta(),this.Ia(e)}enterRestrictedMode(e){if(!this.wa){this.wa=!0,this.ya=e||!1;const t=yi();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ea)}}enqueue(e){if(this.Ta(),this.wa)return new Promise((()=>{}));const t=new b;return this.Ia((()=>this.wa&&this.ya?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.da.push(e),this.Aa())))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(e){if(!vr(e))throw e;f("AsyncQueue","Operation failed with retryable error: "+e)}this.da.length>0&&this.rr.Xi((()=>this.Aa()))}}Ia(e){const t=this.fa.then((()=>(this.ga=!0,e().catch((e=>{throw this.ma=e,this.ga=!1,m("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
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
 */(e)),e})).then((e=>(this.ga=!1,e))))));return this.fa=t,t}enqueueAfterDelay(e,t,n){this.Ta(),this.pa.indexOf(e)>-1&&(t=0);const r=Zi.createAndSchedule(this,e,t,n,(e=>this.Ra(e)));return this._a.push(r),r}Ta(){this.ma&&y()}verifyOperationInProgress(){}async ba(){let e;do{e=this.fa,await e}while(e!==this.fa)}Pa(e){for(const t of this._a)if(t.timerId===e)return!0;return!1}va(e){return this.ba().then((()=>{this._a.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this._a)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.ba()}))}Va(e){this.pa.push(e)}Ra(e){const t=this._a.indexOf(e);this._a.splice(t,1)}}function Ba(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of["next","error","complete"])if(e in n&&"function"==typeof n[e])return!0;return!1}
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
 */(e)}class Ka{constructor(){this._progressObserver={},this._taskCompletionResolver=new b,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
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
 */const $a=-1;class za extends xa{constructor(e,t){super(e,t),this.type="firestore",this._queue=new Ua,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Ha(this),this._firestoreClient.terminate()}}function Ga(e,t){const n=(0,r.qX)(e,"firestore");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,o.vZ)(r,t))return e;throw new E(T.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(void 0!==t.cacheSizeBytes&&-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new E(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:t})}function ja(e=(0,r.Mq)()){return(0,r.qX)(e,"firestore").getImmediate()}function Qa(e){return e._firestoreClient||Ha(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Ha(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new Ia(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new oa(e._credentials,e._queue,r)}function Wa(e,t){ic(e=Da(e,za));const n=Qa(e),r=e._freezeSettings(),s=new ea;return Ja(n,s,new Xo(s,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function Ya(e){ic(e=Da(e,za));const t=Qa(e),n=e._freezeSettings(),r=new ea;return Ja(t,r,new Zo(r,n.cacheSizeBytes))}function Ja(e,t,n){const r=new b;return e.asyncQueue.enqueue((async()=>{try{await aa(e,n),await ca(e,t),r.resolve()}catch(e){if(!function(e){return"FirebaseError"===e.name?e.code===T.FAILED_PRECONDITION||e.code===T.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(e))throw e;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+e),r.reject(e)}})).then((()=>r.promise))}function Xa(e){if(e._initialized&&!e._terminated)throw new E(T.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new b;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!yr.bt())return Promise.resolve();const t=e+"main";await yr.delete(t)}(As(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function Za(e){return function(e){const t=new b;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t){const n=v(e);Fi(n.remoteStore)||f("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=v(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.In.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const r=n.Bo.get(e)||[];r.push(t),n.Bo.set(e,r)}catch(e){const n=eo(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}(await ma(e),t))),t.promise}(Qa(e=Da(e,za)))}function ec(e){return function(e){return e.asyncQueue.enqueue((async()=>{const t=await la(e),n=await fa(e);return t.setNetworkEnabled(!0),function(e){const t=v(e);return t.Kr.delete(0),_i(t)}(n)}))}(Qa(e=Da(e,za)))}function tc(e){return function(e){return e.asyncQueue.enqueue((async()=>{const t=await la(e),n=await fa(e);return t.setNetworkEnabled(!1),async function(e){const t=v(e);t.Kr.add(0),await Di(t),t.Wr.set("Offline")}(n)}))}(Qa(e=Da(e,za)))}function nc(e){return(0,r.wN)(e.app,"firestore"),e._delete()}function rc(e,t){const n=Qa(e=Da(e,za)),r=new Ka;return wa(n,e._databaseId,t,r),r}function sc(e,t){return function(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=v(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.Je.getNamedQuery(e,t)))}(await da(e),t)))}(Qa(e=Da(e,za)),t).then((t=>t?new Ra(e,null,t.query):null))}function ic(e){if(e._initialized||e._terminated)throw new E(T.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
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
 */class oc{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new E(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new z(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function ac(){return new oc("__name__")}
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
 */class cc{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cc(Q.fromBase64String(e))}catch(e){throw new E(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new cc(Q.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
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
 */class uc{constructor(e){this._methodName=e}}
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
 */class hc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new E(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new E(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return R(this._lat,e._lat)||R(this._long,e._long)}}
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
 */const lc=/^__.*__$/;class dc{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Ct(e,this.data,this.fieldMask,t,this.fieldTransforms):new xt(e,this.data,t,this.fieldTransforms)}}class fc{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Ct(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function mc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class gc{constructor(e,t,n,r,s,i){this.settings=e,this.databaseId=t,this.N=n,this.ignoreUndefinedProperties=r,void 0===s&&this.Sa(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(e){return new gc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Ca({path:n,xa:!1});return r.ka(e),r}$a(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Ca({path:n,xa:!1});return r.Sa(),r}Oa(e){return this.Ca({path:void 0,xa:!0})}Fa(e){return Mc(e,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Sa(){if(this.path)for(let e=0;e<this.path.length;e++)this.ka(this.path.get(e))}ka(e){if(0===e.length)throw this.Fa("Document fields must not be empty");if(mc(this.Da)&&lc.test(e))throw this.Fa('Document fields cannot begin and end with "__"')}}class pc{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.N=n||wi(e)}Ba(e,t,n,r=!1){return new gc({Da:e,methodName:t,La:n,path:z.emptyPath(),xa:!1,Ma:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function yc(e){const t=e._freezeSettings(),n=wi(e._databaseId);return new pc(e._databaseId,!!t.ignoreUndefinedProperties,n)}function wc(e,t,n,r,s,i={}){const o=e.Ba(i.merge||i.mergeFields?2:0,t,n,s);Cc("Data must be an object, but it was:",o,r);const a=kc(r,o);let c,u;if(i.merge)c=new G(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const e=[];for(const r of i.mergeFields){const s=Lc(t,r,n);if(!o.contains(s))throw new E(T.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Oc(e,s)||e.push(s)}c=new G(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new dc(new Ie(a),c,u)}class Ic extends uc{_toFieldTransform(e){if(2!==e.Da)throw 1===e.Da?e.Fa(`${this._methodName}() can only appear at the top level of your update data`):e.Fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ic}}function vc(e,t,n){return new gc({Da:3,La:t.settings.La,methodName:e._methodName,xa:n},t.databaseId,t.N,t.ignoreUndefinedProperties)}class Tc extends uc{_toFieldTransform(e){return new vt(e.path,new dt)}isEqual(e){return e instanceof Tc}}class Ec extends uc{constructor(e,t){super(e),this.Ua=t}_toFieldTransform(e){const t=vc(this,e,!0),n=this.Ua.map((e=>Ac(e,t))),r=new ft(n);return new vt(e.path,r)}isEqual(e){return this===e}}class bc extends uc{constructor(e,t){super(e),this.Ua=t}_toFieldTransform(e){const t=vc(this,e,!0),n=this.Ua.map((e=>Ac(e,t))),r=new gt(n);return new vt(e.path,r)}isEqual(e){return this===e}}class Sc extends uc{constructor(e,t){super(e),this.qa=t}_toFieldTransform(e){const t=new yt(e.N,at(e.N,this.qa));return new vt(e.path,t)}isEqual(e){return this===e}}function Nc(e,t,n,r){const s=e.Ba(1,t,n);Cc("Data must be an object, but it was:",s,r);const i=[],a=Ie.empty();P(r,((e,r)=>{const c=Fc(t,e,n);r=(0,o.m9)(r);const u=s.$a(c);if(r instanceof Ic)i.push(c);else{const e=Ac(r,u);null!=e&&(i.push(c),a.set(c,e))}}));const c=new G(i);return new fc(a,c,s.fieldTransforms)}function _c(e,t,n,r,s,i){const a=e.Ba(1,t,n),c=[Lc(t,r,n)],u=[s];if(i.length%2!=0)throw new E(T.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<i.length;e+=2)c.push(Lc(t,i[e])),u.push(i[e+1]);const h=[],l=Ie.empty();for(let e=c.length-1;e>=0;--e)if(!Oc(h,c[e])){const t=c[e];let n=u[e];n=(0,o.m9)(n);const r=a.$a(t);if(n instanceof Ic)h.push(t);else{const e=Ac(n,r);null!=e&&(h.push(t),l.set(t,e))}}const d=new G(h);return new fc(l,d,a.fieldTransforms)}function Dc(e,t,n,r=!1){return Ac(n,e.Ba(r?4:3,t))}function Ac(e,t){if(xc(e=(0,o.m9)(e)))return Cc("Unsupported field value:",t,e),kc(e,t);if(e instanceof uc)return function(e,t){if(!mc(t.Da))throw t.Fa(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Fa(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.xa&&4!==t.Da)throw t.Fa("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const s of e){let e=Ac(s,t.Oa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,o.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return at(t.N,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=O.fromDate(e);return{timestampValue:pn(t.N,n)}}if(e instanceof O){const n=new O(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:pn(t.N,n)}}if(e instanceof hc)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof cc)return{bytesValue:yn(t.N,e._byteString)};if(e instanceof La){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:vn(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Fa(`Unsupported field value: ${_a(e)}`)}(e,t)}function kc(e,t){const n={};return U(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):P(e,((e,r)=>{const s=Ac(r,t.Na(e));null!=s&&(n[e]=s)})),{mapValue:{fields:n}}}function xc(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof O||e instanceof hc||e instanceof cc||e instanceof La||e instanceof uc)}function Cc(e,t,n){if(!xc(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=_a(n);throw"an object"===r?t.Fa(e+" a custom object"):t.Fa(e+" "+r)}}function Lc(e,t,n){if((t=(0,o.m9)(t))instanceof oc)return t._internalPath;if("string"==typeof t)return Fc(e,t);throw Mc("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const Rc=new RegExp("[~\\*/\\[\\]]");function Fc(e,t,n){if(t.search(Rc)>=0)throw Mc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new oc(...t.split("."))._internalPath}catch(r){throw Mc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Mc(e,t,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new E(T.INVALID_ARGUMENT,a+e+c)}function Oc(e,t){return e.some((e=>e.isEqual(t)))}
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
 */class Vc{constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new La(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new qc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Pc("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class qc extends Vc{data(){return super.data()}}function Pc(e,t){return"string"==typeof t?Fc(e,t):t instanceof oc?t._internalPath:t._delegate._internalPath}
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
 */class Uc{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Bc extends Vc{constructor(e,t,n,r,s,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Kc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Pc("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Kc extends Bc{data(e={}){return super.data(e)}}class $c{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Uc(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Kc(this._firestore,this._userDataWriter,n.key,n,new Uc(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new E(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new Kc(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Uc(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new Kc(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Uc(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,i=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:zc(t.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function zc(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}function Gc(e,t){return e instanceof Bc&&t instanceof Bc?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof $c&&t instanceof $c&&e._firestore===t._firestore&&Pa(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
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
 */function jc(e){if(je(e)&&0===e.explicitOrderBy.length)throw new E(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qc{}function Hc(e,...t){for(const n of t)e=n._apply(e);return e}class Wc extends Qc{constructor(e,t,n){super(),this.Ka=e,this.ja=t,this.Qa=n,this.type="where"}_apply(e){const t=yc(e.firestore),n=function(e,t,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new E(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on FieldPath.documentId().`);if("in"===i||"not-in"===i){hu(o,i);const t=[];for(const n of o)t.push(uu(r,e,n));a={arrayValue:{values:t}}}else a=uu(r,e,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||hu(o,i),a=Dc(n,"where",o,"in"===i||"not-in"===i);const c=De.create(s,i,a);return function(e,t){if(t.v()){const n=He(e);if(null!==n&&!n.isEqual(t.field))throw new E(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=Qe(e);null!==r&&lu(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new E(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new E(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,0,t,e.firestore._databaseId,this.Ka,this.ja,this.Qa);return new Ra(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new Ke(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function Yc(e,t,n){const r=t,s=Pc("where",e);return new Wc(s,r,n)}class Jc extends Qc{constructor(e,t){super(),this.Ka=e,this.Wa=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new E(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new E(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new qe(t,n);return function(e,t){if(null===Qe(e)){const n=He(e);null!==n&&lu(e,n,t.field)}}(e,r),r}(e._query,this.Ka,this.Wa);return new Ra(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Ke(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Xc(e,t="asc"){const n=t,r=Pc("orderBy",e);return new Jc(r,n)}class Zc extends Qc{constructor(e,t,n){super(),this.type=e,this.Ga=t,this.za=n}_apply(e){return new Ra(e.firestore,e.converter,Xe(e._query,this.Ga,this.za))}}function eu(e){return Aa("limit",e),new Zc("limit",e,"F")}function tu(e){return Aa("limitToLast",e),new Zc("limitToLast",e,"L")}class nu extends Qc{constructor(e,t,n){super(),this.type=e,this.Ha=t,this.Ja=n}_apply(e){const t=cu(e,this.type,this.Ha,this.Ja);return new Ra(e.firestore,e.converter,function(e,t){return new Ke(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function ru(...e){return new nu("startAt",e,!0)}function su(...e){return new nu("startAfter",e,!1)}class iu extends Qc{constructor(e,t,n){super(),this.type=e,this.Ha=t,this.Ja=n}_apply(e){const t=cu(e,this.type,this.Ha,this.Ja);return new Ra(e.firestore,e.converter,function(e,t){return new Ke(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function ou(...e){return new iu("endBefore",e,!0)}function au(...e){return new iu("endAt",e,!1)}function cu(e,t,n,r){if(n[0]=(0,o.m9)(n[0]),n[0]instanceof Vc)return function(e,t,n,r,s){if(!r)throw new E(T.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const i=[];for(const n of Ye(e))if(n.field.isKeyField())i.push(de(t,r.key));else{const e=r.data.field(n.field);if(X(e))throw new E(T.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+n.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=n.field.canonicalString();throw new E(T.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}i.push(e)}return new Oe(i,s)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const s=yc(e.firestore);return function(e,t,n,r,s,i){const o=e.explicitOrderBy;if(s.length>o.length)throw new E(T.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let i=0;i<s.length;i++){const c=s[i];if(o[i].field.isKeyField()){if("string"!=typeof c)throw new E(T.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof c}`);if(!We(e)&&-1!==c.indexOf("/"))throw new E(T.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${r}() must be a plain document ID, but '${c}' contains a slash.`);const n=e.path.child(K.fromString(c));if(!se.isDocumentKey(n))throw new E(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const s=new se(n);a.push(de(t,s))}else{const e=Dc(n,r,c);a.push(e)}}return new Oe(a,i)}(e._query,e.firestore._databaseId,s,t,n,r)}}function uu(e,t,n){if("string"==typeof(n=(0,o.m9)(n))){if(""===n)throw new E(T.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!We(t)&&-1!==n.indexOf("/"))throw new E(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(K.fromString(n));if(!se.isDocumentKey(r))throw new E(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return de(e,new se(r))}if(n instanceof La)return de(e,n._key);throw new E(T.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${_a(n)}.`)}function hu(e,t){if(!Array.isArray(e)||0===e.length)throw new E(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new E(T.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function lu(e,t,n){if(!n.isEqual(t))throw new E(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
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
 */class du{convertValue(e,t="none"){switch(ie(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Y(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(J(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw y()}}convertObject(e,t){const n={};return P(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new hc(Y(e.latitude),Y(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Z(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ee(e));default:return null}}convertTimestamp(e){const t=W(e);return new O(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=K.fromString(e);w(Gn(n));const r=new va(n.get(1),n.get(3)),s=new se(n.popFirst(5));return r.isEqual(t)||m(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
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
 */function fu(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class mu extends du{constructor(e){super(),this.firestore=e}convertBytes(e){return new cc(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new La(this.firestore,null,t)}}
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
 */class gu{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=yc(e)}set(e,t,n){this._verifyNotCommitted();const r=pu(e,this._firestore),s=fu(r.converter,t,n),i=wc(this._dataReader,"WriteBatch.set",r._key,s,null!==r.converter,n);return this._mutations.push(i.toMutation(r._key,Et.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const s=pu(e,this._firestore);let i;return i="string"==typeof(t=(0,o.m9)(t))||t instanceof oc?_c(this._dataReader,"WriteBatch.update",s._key,t,n,r):Nc(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(i.toMutation(s._key,Et.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=pu(e,this._firestore);return this._mutations=this._mutations.concat(new Mt(t._key,Et.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new E(T.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function pu(e,t){if((e=(0,o.m9)(e)).firestore!==t)throw new E(T.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
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
 */function yu(e){e=Da(e,La);const t=Da(e.firestore,za);return pa(Qa(t),e._key).then((n=>Cu(t,e,n)))}class wu extends du{constructor(e){super(),this.firestore=e}convertBytes(e){return new cc(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new La(this.firestore,null,t)}}function Iu(e){e=Da(e,La);const t=Da(e.firestore,za),n=Qa(t),r=new wu(t);return function(e,t){const n=new b;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=v(e);return n.persistence.runTransaction("read document","readonly",(e=>n.Qn.An(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new E(T.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=eo(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await da(e),t,n))),n.promise}(n,e._key).then((n=>new Bc(t,r,e._key,n,new Uc(null!==n&&n.hasLocalMutations,!0),e.converter)))}function vu(e){e=Da(e,La);const t=Da(e.firestore,za);return pa(Qa(t),e._key,{source:"server"}).then((n=>Cu(t,e,n)))}function Tu(e){e=Da(e,Ra);const t=Da(e.firestore,za),n=Qa(t),r=new wu(t);return jc(e._query),ya(n,e._query).then((n=>new $c(t,r,e,n)))}function Eu(e){e=Da(e,Ra);const t=Da(e.firestore,za),n=Qa(t),r=new wu(t);return function(e,t){const n=new b;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await Bs(e,t,!0),s=new Io(t,r.Gn),i=s.Io(r.documents),o=s.applyChanges(i,!1);n.resolve(o.snapshot)}catch(e){const r=eo(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await da(e),t,n))),n.promise}(n,e._query).then((n=>new $c(t,r,e,n)))}function bu(e){e=Da(e,Ra);const t=Da(e.firestore,za),n=Qa(t),r=new wu(t);return ya(n,e._query,{source:"server"}).then((n=>new $c(t,r,e,n)))}function Su(e,t,n){e=Da(e,La);const r=Da(e.firestore,za),s=fu(e.converter,t,n);return xu(r,[wc(yc(r),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,Et.none())])}function Nu(e,t,n,...r){e=Da(e,La);const s=Da(e.firestore,za),i=yc(s);let a;return a="string"==typeof(t=(0,o.m9)(t))||t instanceof oc?_c(i,"updateDoc",e._key,t,n,r):Nc(i,"updateDoc",e._key,t),xu(s,[a.toMutation(e._key,Et.exists(!0))])}function _u(e){return xu(Da(e.firestore,za),[new Mt(e._key,Et.none())])}function Du(e,t){const n=Da(e.firestore,za),r=Va(e),s=fu(e.converter,t);return xu(n,[wc(yc(e.firestore),"addDoc",r._key,s,null!==e.converter,{}).toMutation(r._key,Et.exists(!1))]).then((()=>r))}function Au(e,...t){var n,r,s;e=(0,o.m9)(e);let i={includeMetadataChanges:!1},a=0;"object"!=typeof t[a]||Ba(t[a])||(i=t[a],a++);const c={includeMetadataChanges:i.includeMetadataChanges};if(Ba(t[a])){const e=t[a];t[a]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[a+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[a+2]=null===(s=e.complete)||void 0===s?void 0:s.bind(e)}let u,h,l;if(e instanceof La)h=Da(e.firestore,za),l=ze(e._key.path),u={next:n=>{t[a]&&t[a](Cu(h,e,n))},error:t[a+1],complete:t[a+2]};else{const n=Da(e,Ra);h=Da(n.firestore,za),l=n._query;const r=new wu(h);u={next:e=>{t[a]&&t[a](new $c(h,r,n,e))},error:t[a+1],complete:t[a+2]},jc(e._query)}return function(e,t,n,r){const s=new na(r),i=new lo(t,s,n);return e.asyncQueue.enqueueAndForget((async()=>oo(await ga(e),i))),()=>{s.Xo(),e.asyncQueue.enqueueAndForget((async()=>ao(await ga(e),i)))}}(Qa(h),l,c,u)}function ku(e,t){return function(e,t){const n=new na(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){v(e).Zr.add(t),t.next()}(await ga(e),n))),()=>{n.Xo(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){v(e).Zr.delete(t)}(await ga(e),n)))}}(Qa(e=Da(e,za)),Ba(t)?t:{next:t})}function xu(e,t){return function(e,t){const n=new b;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const r=Yo(e);try{const e=await function(e,t){const n=v(e),r=O.now(),s=t.reduce(((e,t)=>e.add(t.key)),en());let i;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.Qn.Pn(e,s).next((s=>{i=s;const o=[];for(const e of t){const t=Dt(e,i.get(e.key));null!=t&&o.push(new Ct(e.key,t,ve(t.value.mapValue),Et.exists(!0)))}return n.In.addMutationBatch(e,r,o,t)})))).then((e=>(e.applyToLocalDocumentSet(i),{batchId:e.batchId,changes:i})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Lo[e.currentUser.toKey()];r||(r=new Kt(R)),r=r.insert(t,n),e.Lo[e.currentUser.toKey()]=r}(r,e.batchId,n),await qo(r,e.changes),await Bi(r.remoteStore)}catch(e){const t=eo(e,"Failed to persist write");n.reject(t)}}(await ma(e),t,n))),n.promise}(Qa(e),t)}function Cu(e,t,n){const r=n.docs.get(t._key),s=new wu(e);return new Bc(e,s,t._key,r,new Uc(n.hasPendingWrites,n.fromCache),t.converter)}
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
 */class Lu extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=yc(e)}get(e){const t=pu(e,this._firestore),n=new mu(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return y();const r=e[0];if(r.isFoundDocument())return new Vc(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new Vc(this._firestore,n,t._key,null,t.converter);throw y()}))}set(e,t,n){const r=pu(e,this._firestore),s=fu(r.converter,t,n),i=wc(this._dataReader,"Transaction.set",r._key,s,null!==r.converter,n);return this._transaction.set(r._key,i),this}update(e,t,n,...r){const s=pu(e,this._firestore);let i;return i="string"==typeof(t=(0,o.m9)(t))||t instanceof oc?_c(this._dataReader,"Transaction.update",s._key,t,n,r):Nc(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,i),this}delete(e){const t=pu(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=pu(e,this._firestore),n=new wu(this._firestore);return super.get(e).then((e=>new Bc(this._firestore,n,t._key,e._document,new Uc(!1,!1),t.converter)))}}function Ru(e,t){return function(e,t){const n=new b;return e.asyncQueue.enqueueAndForget((async()=>{const r=await function(e){return ha(e).then((e=>e.datastore))}(e);new ia(e.asyncQueue,r,t,n).run()})),n.promise}(Qa(e),(n=>t(new Lu(e,n))))}
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
 */function Fu(){return new Ic("deleteField")}function Mu(){return new Tc("serverTimestamp")}function Ou(...e){return new Ec("arrayUnion",e)}function Vu(...e){return new bc("arrayRemove",e)}function qu(e){return new Sc("increment",e)}
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
 */function Pu(e){return Qa(e=Da(e,za)),new gu(e,(t=>xu(e,t)))}var Uu;Uu=r.Jn,u=Uu,(0,r.Xd)(new s.wA("firestore",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=new za(n,new D(e.getProvider("auth-internal")));return t=Object.assign({useFetchStreams:!0},t),r._setSettings(t),r}),"PUBLIC")),(0,r.KN)("@firebase/firestore","3.1.0",undefined)}}]);
//# sourceMappingURL=19.bundle.js.map