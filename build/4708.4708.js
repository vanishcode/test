/*! For license information please see 4708.4708.js.LICENSE.txt */
"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4708],{4323:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.validateObject=e.createHmacDrbg=e.bitMask=e.bitSet=e.bitGet=e.bitLen=e.utf8ToBytes=e.equalBytes=e.concatBytes=e.ensureBytes=e.numberToVarBytesBE=e.numberToBytesLE=e.numberToBytesBE=e.bytesToNumberLE=e.bytesToNumberBE=e.hexToBytes=e.hexToNumber=e.numberToHexUnpadded=e.bytesToHex=void 0;const r=BigInt(0),n=BigInt(1),o=BigInt(2),s=t=>t instanceof Uint8Array,i=Array.from({length:256},((t,e)=>e.toString(16).padStart(2,"0")));function u(t){if(!s(t))throw new Error("Uint8Array expected");let e="";for(let r=0;r<t.length;r++)e+=i[t[r]];return e}function c(t){const e=t.toString(16);return 1&e.length?`0${e}`:e}function a(t){if("string"!=typeof t)throw new Error("hex string expected, got "+typeof t);return BigInt(""===t?"0":`0x${t}`)}function f(t){if("string"!=typeof t)throw new Error("hex string expected, got "+typeof t);if(t.length%2)throw new Error("hex string is invalid: unpadded "+t.length);const e=new Uint8Array(t.length/2);for(let r=0;r<e.length;r++){const n=2*r,o=t.slice(n,n+2),s=Number.parseInt(o,16);if(Number.isNaN(s)||s<0)throw new Error("invalid byte sequence");e[r]=s}return e}function h(...t){const e=new Uint8Array(t.reduce(((t,e)=>t+e.length),0));let r=0;return t.forEach((t=>{if(!s(t))throw new Error("Uint8Array expected");e.set(t,r),r+=t.length})),e}e.bytesToHex=u,e.numberToHexUnpadded=c,e.hexToNumber=a,e.hexToBytes=f,e.bytesToNumberBE=function(t){return a(u(t))},e.bytesToNumberLE=function(t){if(!s(t))throw new Error("Uint8Array expected");return a(u(Uint8Array.from(t).reverse()))},e.numberToBytesBE=(t,e)=>f(t.toString(16).padStart(2*e,"0")),e.numberToBytesLE=(t,r)=>(0,e.numberToBytesBE)(t,r).reverse(),e.numberToVarBytesBE=t=>f(c(t)),e.ensureBytes=function(t,e,r){let n;if("string"==typeof e)try{n=f(e)}catch(r){throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${r}`)}else{if(!s(e))throw new Error(`${t} must be hex string or Uint8Array`);n=Uint8Array.from(e)}const o=n.length;if("number"==typeof r&&o!==r)throw new Error(`${t} expected ${r} bytes, got ${o}`);return n},e.concatBytes=h,e.equalBytes=function(t,e){if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0},e.utf8ToBytes=function(t){if("string"!=typeof t)throw new Error("utf8ToBytes expected string, got "+typeof t);return(new TextEncoder).encode(t)},e.bitLen=function(t){let e;for(e=0;t>r;t>>=n,e+=1);return e},e.bitGet=(t,e)=>t>>BigInt(e)&n,e.bitSet=(t,e,o)=>t|(o?n:r)<<BigInt(e),e.bitMask=t=>(o<<BigInt(t-1))-n;const l=t=>new Uint8Array(t),d=t=>Uint8Array.from(t);e.createHmacDrbg=function(t,e,r){if("number"!=typeof t||t<2)throw new Error("hashLen must be a number");if("number"!=typeof e||e<2)throw new Error("qByteLen must be a number");if("function"!=typeof r)throw new Error("hmacFn must be a function");let n=l(t),o=l(t),s=0;const i=()=>{n.fill(1),o.fill(0),s=0},u=(...t)=>r(o,n,...t),c=(t=l())=>{o=u(d([0]),t),n=u(),0!==t.length&&(o=u(d([1]),t),n=u())},a=()=>{if(s++>=1e3)throw new Error("drbg: tried 1000 values");let t=0;const r=[];for(;t<e;){n=u();const e=n.slice();r.push(e),t+=n.length}return h(...r)};return(t,e)=>{let r;for(i(),c(t);!(r=e(a()));)c();return i(),r}};const y={bigint:t=>"bigint"==typeof t,function:t=>"function"==typeof t,boolean:t=>"boolean"==typeof t,string:t=>"string"==typeof t,isSafeInteger:t=>Number.isSafeInteger(t),array:t=>Array.isArray(t),field:(t,e)=>e.Fp.isValid(t),hash:t=>"function"==typeof t&&Number.isSafeInteger(t.outputLen)};e.validateObject=function(t,e,r={}){const n=(e,r,n)=>{const o=y[r];if("function"!=typeof o)throw new Error(`Invalid validator "${r}", expected function`);const s=t[e];if(!(n&&void 0===s||o(s,t)))throw new Error(`Invalid param ${String(e)}=${s} (${typeof s}), expected ${r}`)};for(const[t,r]of Object.entries(e))n(t,r,!1);for(const[t,e]of Object.entries(r))n(t,e,!0);return t}},53525:(t,e)=>{function r(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function n(t){if("boolean"!=typeof t)throw new Error(`Expected boolean, not ${t}`)}function o(t,...e){if(!(t instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new TypeError(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function s(t){if("function"!=typeof t||"function"!=typeof t.create)throw new Error("Hash should be wrapped by utils.wrapConstructor");r(t.outputLen),r(t.blockLen)}function i(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function u(t,e){o(t);const r=e.outputLen;if(t.length<r)throw new Error(`digestInto() expects output buffer of length at least ${r}`)}Object.defineProperty(e,"__esModule",{value:!0}),e.output=e.exists=e.hash=e.bytes=e.bool=e.number=void 0,e.number=r,e.bool=n,e.bytes=o,e.hash=s,e.exists=i,e.output=u;const c={number:r,bool:n,bytes:o,hash:s,exists:i,output:u};e.default=c},11655:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.add=e.toBig=e.split=e.fromBig=void 0;const r=BigInt(2**32-1),n=BigInt(32);function o(t,e=!1){return e?{h:Number(t&r),l:Number(t>>n&r)}:{h:0|Number(t>>n&r),l:0|Number(t&r)}}function s(t,e=!1){let r=new Uint32Array(t.length),n=new Uint32Array(t.length);for(let s=0;s<t.length;s++){const{h:i,l:u}=o(t[s],e);[r[s],n[s]]=[i,u]}return[r,n]}function i(t,e,r,n){const o=(e>>>0)+(n>>>0);return{h:t+r+(o/2**32|0)|0,l:0|o}}e.fromBig=o,e.split=s,e.toBig=(t,e)=>BigInt(t>>>0)<<n|BigInt(e>>>0),e.add=i;const u={fromBig:o,split:s,toBig:e.toBig,shrSH:(t,e,r)=>t>>>r,shrSL:(t,e,r)=>t<<32-r|e>>>r,rotrSH:(t,e,r)=>t>>>r|e<<32-r,rotrSL:(t,e,r)=>t<<32-r|e>>>r,rotrBH:(t,e,r)=>t<<64-r|e>>>r-32,rotrBL:(t,e,r)=>t>>>r-32|e<<64-r,rotr32H:(t,e)=>e,rotr32L:(t,e)=>t,rotlSH:(t,e,r)=>t<<r|e>>>32-r,rotlSL:(t,e,r)=>e<<r|t>>>32-r,rotlBH:(t,e,r)=>e<<r-32|t>>>64-r,rotlBL:(t,e,r)=>t<<r-32|e>>>64-r,add:i,add3L:(t,e,r)=>(t>>>0)+(e>>>0)+(r>>>0),add3H:(t,e,r,n)=>e+r+n+(t/2**32|0)|0,add4L:(t,e,r,n)=>(t>>>0)+(e>>>0)+(r>>>0)+(n>>>0),add4H:(t,e,r,n,o)=>e+r+n+o+(t/2**32|0)|0,add5H:(t,e,r,n,o,s)=>e+r+n+o+s+(t/2**32|0)|0,add5L:(t,e,r,n,o)=>(t>>>0)+(e>>>0)+(r>>>0)+(n>>>0)+(o>>>0)};e.default=u},70825:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.crypto=void 0,e.crypto="object"==typeof globalThis&&"crypto"in globalThis?globalThis.crypto:void 0},80125:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.shake256=e.shake128=e.keccak_512=e.keccak_384=e.keccak_256=e.keccak_224=e.sha3_512=e.sha3_384=e.sha3_256=e.sha3_224=e.Keccak=e.keccakP=void 0;const n=r(53525),o=r(11655),s=r(70064),[i,u,c]=[[],[],[]],a=BigInt(0),f=BigInt(1),h=BigInt(2),l=BigInt(7),d=BigInt(256),y=BigInt(113);for(let t=0,e=f,r=1,n=0;t<24;t++){[r,n]=[n,(2*r+3*n)%5],i.push(2*(5*n+r)),u.push((t+1)*(t+2)/2%64);let o=a;for(let t=0;t<7;t++)e=(e<<f^(e>>l)*y)%d,e&h&&(o^=f<<(f<<BigInt(t))-f);c.push(o)}const[p,b]=o.default.split(c,!0),g=(t,e,r)=>r>32?o.default.rotlBH(t,e,r):o.default.rotlSH(t,e,r),w=(t,e,r)=>r>32?o.default.rotlBL(t,e,r):o.default.rotlSL(t,e,r);function B(t,e=24){const r=new Uint32Array(10);for(let n=24-e;n<24;n++){for(let e=0;e<10;e++)r[e]=t[e]^t[e+10]^t[e+20]^t[e+30]^t[e+40];for(let e=0;e<10;e+=2){const n=(e+8)%10,o=(e+2)%10,s=r[o],i=r[o+1],u=g(s,i,1)^r[n],c=w(s,i,1)^r[n+1];for(let r=0;r<50;r+=10)t[e+r]^=u,t[e+r+1]^=c}let e=t[2],o=t[3];for(let r=0;r<24;r++){const n=u[r],s=g(e,o,n),c=w(e,o,n),a=i[r];e=t[a],o=t[a+1],t[a]=s,t[a+1]=c}for(let e=0;e<50;e+=10){for(let n=0;n<10;n++)r[n]=t[e+n];for(let n=0;n<10;n++)t[e+n]^=~r[(n+2)%10]&r[(n+4)%10]}t[0]^=p[n],t[1]^=b[n]}r.fill(0)}e.keccakP=B;class k extends s.Hash{constructor(t,e,r,o=!1,i=24){if(super(),this.blockLen=t,this.suffix=e,this.outputLen=r,this.enableXOF=o,this.rounds=i,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,n.default.number(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=(0,s.u32)(this.state)}keccak(){B(this.state32,this.rounds),this.posOut=0,this.pos=0}update(t){n.default.exists(this);const{blockLen:e,state:r}=this,o=(t=(0,s.toBytes)(t)).length;for(let n=0;n<o;){const s=Math.min(e-this.pos,o-n);for(let e=0;e<s;e++)r[this.pos++]^=t[n++];this.pos===e&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:t,suffix:e,pos:r,blockLen:n}=this;t[r]^=e,0!=(128&e)&&r===n-1&&this.keccak(),t[n-1]^=128,this.keccak()}writeInto(t){n.default.exists(this,!1),n.default.bytes(t),this.finish();const e=this.state,{blockLen:r}=this;for(let n=0,o=t.length;n<o;){this.posOut>=r&&this.keccak();const s=Math.min(r-this.posOut,o-n);t.set(e.subarray(this.posOut,this.posOut+s),n),this.posOut+=s,n+=s}return t}xofInto(t){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(t)}xof(t){return n.default.number(t),this.xofInto(new Uint8Array(t))}digestInto(t){if(n.default.output(t,this),this.finished)throw new Error("digest() was already called");return this.writeInto(t),this.destroy(),t}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(t){const{blockLen:e,suffix:r,outputLen:n,rounds:o,enableXOF:s}=this;return t||(t=new k(e,r,n,s,o)),t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=o,t.suffix=r,t.outputLen=n,t.enableXOF=s,t.destroyed=this.destroyed,t}}e.Keccak=k;const m=(t,e,r)=>(0,s.wrapConstructor)((()=>new k(e,t,r)));e.sha3_224=m(6,144,28),e.sha3_256=m(6,136,32),e.sha3_384=m(6,104,48),e.sha3_512=m(6,72,64),e.keccak_224=m(1,144,28),e.keccak_256=m(1,136,32),e.keccak_384=m(1,104,48),e.keccak_512=m(1,72,64);const E=(t,e,r)=>(0,s.wrapConstructorWithOpts)(((n={})=>new k(e,t,void 0===n.dkLen?r:n.dkLen,!0)));e.shake128=E(31,168,16),e.shake256=E(31,136,32)},70064:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.randomBytes=e.wrapConstructorWithOpts=e.wrapConstructor=e.checkOpts=e.Hash=e.concatBytes=e.toBytes=e.utf8ToBytes=e.asyncLoop=e.nextTick=e.hexToBytes=e.bytesToHex=e.isLE=e.rotr=e.createView=e.u32=e.u8=void 0;const n=r(70825);if(e.u8=t=>new Uint8Array(t.buffer,t.byteOffset,t.byteLength),e.u32=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),e.createView=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),e.rotr=(t,e)=>t<<32-e|t>>>e,e.isLE=68===new Uint8Array(new Uint32Array([287454020]).buffer)[0],!e.isLE)throw new Error("Non little-endian hardware is not supported");const o=Array.from({length:256},((t,e)=>e.toString(16).padStart(2,"0")));function s(t){if("string"!=typeof t)throw new TypeError("utf8ToBytes expected string, got "+typeof t);return(new TextEncoder).encode(t)}function i(t){if("string"==typeof t&&(t=s(t)),!(t instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof t})`);return t}e.bytesToHex=function(t){if(!(t instanceof Uint8Array))throw new Error("Uint8Array expected");let e="";for(let r=0;r<t.length;r++)e+=o[t[r]];return e},e.hexToBytes=function(t){if("string"!=typeof t)throw new TypeError("hexToBytes: expected string, got "+typeof t);if(t.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const e=new Uint8Array(t.length/2);for(let r=0;r<e.length;r++){const n=2*r,o=t.slice(n,n+2),s=Number.parseInt(o,16);if(Number.isNaN(s)||s<0)throw new Error("Invalid byte sequence");e[r]=s}return e},e.nextTick=async()=>{},e.asyncLoop=async function(t,r,n){let o=Date.now();for(let s=0;s<t;s++){n(s);const t=Date.now()-o;t>=0&&t<r||(await(0,e.nextTick)(),o+=t)}},e.utf8ToBytes=s,e.toBytes=i,e.concatBytes=function(...t){if(!t.every((t=>t instanceof Uint8Array)))throw new Error("Uint8Array list expected");if(1===t.length)return t[0];const e=t.reduce(((t,e)=>t+e.length),0),r=new Uint8Array(e);for(let e=0,n=0;e<t.length;e++){const o=t[e];r.set(o,n),n+=o.length}return r},e.Hash=class{clone(){return this._cloneInto()}},e.checkOpts=function(t,e){if(void 0!==e&&("object"!=typeof e||(r=e,"[object Object]"!==Object.prototype.toString.call(r)||r.constructor!==Object)))throw new TypeError("Options should be object or undefined");var r;return Object.assign(t,e)},e.wrapConstructor=function(t){const e=e=>t().update(i(e)).digest(),r=t();return e.outputLen=r.outputLen,e.blockLen=r.blockLen,e.create=()=>t(),e},e.wrapConstructorWithOpts=function(t){const e=(e,r)=>t(r).update(i(e)).digest(),r=t({});return e.outputLen=r.outputLen,e.blockLen=r.blockLen,e.create=e=>t(e),e},e.randomBytes=function(t=32){if(n.crypto&&"function"==typeof n.crypto.getRandomValues)return n.crypto.getRandomValues(new Uint8Array(t));throw new Error("crypto.getRandomValues must be defined")}}}]);