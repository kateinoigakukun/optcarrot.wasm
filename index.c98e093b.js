function t(t,e,r,a){Object.defineProperty(t,e,{get:r,set:a,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},n=e.parcelRequire8e51;null==n&&((n=function(t){if(t in r)return r[t].exports;if(t in a){var e=a[t];delete a[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){a[t]=e},e.parcelRequire8e51=n),n.register("27Lyk",(function(e,r){var a,n;t(e.exports,"register",(()=>a),(t=>a=t)),t(e.exports,"resolve",(()=>n),(t=>n=t));var i={};a=function(t){for(var e=Object.keys(t),r=0;r<e.length;r++)i[e[r]]=t[e[r]]},n=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),n("27Lyk").register(JSON.parse('{"1LzKV":"index.c98e093b.js","7yeQP":"sw.js","3YKzz":"optcarrot.worker.13184cd9.js"}'));const i=Symbol("Comlink.proxy"),s=Symbol("Comlink.endpoint"),o=Symbol("Comlink.releaseProxy"),c=Symbol("Comlink.thrown"),l=t=>"object"==typeof t&&null!==t||"function"==typeof t,u=new Map([["proxy",{canHandle:t=>l(t)&&t[i],serialize(t){const{port1:e,port2:r}=new MessageChannel;return h(t,e),[r,[r]]},deserialize:t=>(t.start(),d(t))}],["throw",{canHandle:t=>l(t)&&c in t,serialize({value:t}){let e;return e=t instanceof Error?{isError:!0,value:{message:t.message,name:t.name,stack:t.stack}}:{isError:!1,value:t},[e,[]]},deserialize(t){if(t.isError)throw Object.assign(new Error(t.value.message),t.value);throw t.value}}]]);function h(t,e=self){e.addEventListener("message",(function r(a){if(!a||!a.data)return;const{id:n,type:i,path:s}=Object.assign({path:[]},a.data),o=(a.data.argumentList||[]).map(w);let l;try{const e=s.slice(0,-1).reduce(((t,e)=>t[e]),t),r=s.reduce(((t,e)=>t[e]),t);switch(i){case"GET":l=r;break;case"SET":e[s.slice(-1)[0]]=w(a.data.value),l=!0;break;case"APPLY":l=r.apply(e,o);break;case"CONSTRUCT":l=_(new r(...o));break;case"ENDPOINT":{const{port1:e,port2:r}=new MessageChannel;h(t,r),u=e,d=[e],y.set(u,d),l=u}break;case"RELEASE":l=void 0;break;default:return}}catch(t){l={value:t,[c]:0}}var u,d;Promise.resolve(l).catch((t=>({value:t,[c]:0}))).then((t=>{const[a,s]=v(t);e.postMessage(Object.assign(Object.assign({},a),{id:n}),s),"RELEASE"===i&&(e.removeEventListener("message",r),p(e))}))})),e.start&&e.start()}function p(t){(function(t){return"MessagePort"===t.constructor.name})(t)&&t.close()}function d(t,e){return g(t,[],e)}function f(t){if(t)throw new Error("Proxy has been released and is not useable")}function g(t,e=[],r=function(){}){let a=!1;const n=new Proxy(r,{get(r,i){if(f(a),i===o)return()=>b(t,{type:"RELEASE",path:e.map((t=>t.toString()))}).then((()=>{p(t),a=!0}));if("then"===i){if(0===e.length)return{then:()=>n};const r=b(t,{type:"GET",path:e.map((t=>t.toString()))}).then(w);return r.then.bind(r)}return g(t,[...e,i])},set(r,n,i){f(a);const[s,o]=v(i);return b(t,{type:"SET",path:[...e,n].map((t=>t.toString())),value:s},o).then(w)},apply(r,n,i){f(a);const o=e[e.length-1];if(o===s)return b(t,{type:"ENDPOINT"}).then(w);if("bind"===o)return g(t,e.slice(0,-1));const[c,l]=m(i);return b(t,{type:"APPLY",path:e.map((t=>t.toString())),argumentList:c},l).then(w)},construct(r,n){f(a);const[i,s]=m(n);return b(t,{type:"CONSTRUCT",path:e.map((t=>t.toString())),argumentList:i},s).then(w)}});return n}function m(t){const e=t.map(v);return[e.map((t=>t[0])),(r=e.map((t=>t[1])),Array.prototype.concat.apply([],r))];var r}const y=new WeakMap;function _(t){return Object.assign(t,{[i]:!0})}function v(t){for(const[e,r]of u)if(r.canHandle(t)){const[a,n]=r.serialize(t);return[{type:"HANDLER",name:e,value:a},n]}return[{type:"RAW",value:t},y.get(t)||[]]}function w(t){switch(t.type){case"HANDLER":return u.get(t.name).deserialize(t.value);case"RAW":return t.value}}function b(t,e,r){return new Promise((a=>{const n=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");t.addEventListener("message",(function e(r){r.data&&r.data.id&&r.data.id===n&&(t.removeEventListener("message",e),a(r.data))})),t.start&&t.start(),t.postMessage(Object.assign({id:n},e),r)}))}class E{constructor(t){this.buffer=t}push(t,e){this.buffer.push(new Uint8Array([t,e?1:0]),void 0)}}class A{static getStorageForCapacity(t,e){if(!e.BYTES_PER_ELEMENT)throw"Pass in a ArrayBuffer subclass";var r=8+(t+1)*e.BYTES_PER_ELEMENT;return new SharedArrayBuffer(r)}constructor(t,e){if(!ArrayBuffer.__proto__.isPrototypeOf(e)&&void 0!==e.BYTES_PER_ELEMENT)throw"Pass a concrete typed array class as second argument";this._type=e,this._capacity=(t.byteLength-8)/e.BYTES_PER_ELEMENT,this.buf=t,this.write_ptr=new Uint32Array(this.buf,0,1),this.read_ptr=new Uint32Array(this.buf,4,1),this.storage=new e(this.buf,8,this._capacity)}type(){return this._type.name}push(t,e){var r=Atomics.load(this.read_ptr,0),a=Atomics.load(this.write_ptr,0);if((a+1)%this._storage_capacity()==r)return 0;var n=null!=e?e:t.length;let i=Math.min(this._available_write(r,a),n),s=Math.min(this._storage_capacity()-a,i),o=i-s;return this._copy(t,0,this.storage,a,s),this._copy(t,s,this.storage,0,o),Atomics.store(this.write_ptr,0,(a+i)%this._storage_capacity()),i}writeCallback(t,e){var r=Atomics.load(this.read_ptr,0),a=Atomics.load(this.write_ptr,0);if((a+1)%this._storage_capacity()==r)return 0;let n=Math.min(this._available_write(r,a),t),i=Math.min(this._storage_capacity()-a,n),s=n-i;return e(new this._type(this.storage.buffer,8+4*a,i),new this._type(this.storage.buffer,8,s)),Atomics.store(this.write_ptr,0,(a+n)%this._storage_capacity()),n}pop(t,e){var r=Atomics.load(this.read_ptr,0),a=Atomics.load(this.write_ptr,0);if(a==r)return 0;var n=null!=e?e:t.length;let i=Math.min(this._available_read(r,a),n),s=Math.min(this._storage_capacity()-r,i),o=i-s;return this._copy(this.storage,r,t,0,s),this._copy(this.storage,0,t,s,o),Atomics.store(this.read_ptr,0,(r+i)%this._storage_capacity()),i}empty(){var t=Atomics.load(this.read_ptr,0);return Atomics.load(this.write_ptr,0)==t}full(){var t=Atomics.load(this.read_ptr,0);return(Atomics.load(this.write_ptr,0)+1)%this._storage_capacity()==t}capacity(){return this._capacity-1}available_read(){var t=Atomics.load(this.read_ptr,0),e=Atomics.load(this.write_ptr,0);return this._available_read(t,e)}available_write(){var t=Atomics.load(this.read_ptr,0),e=Atomics.load(this.write_ptr,0);return this._available_write(t,e)}_available_read(t,e){return(e+this._storage_capacity()-t)%this._storage_capacity()}_available_write(t,e){return this.capacity()-this._available_read(t,e)}_storage_capacity(){return this._capacity}_copy(t,e,r,a,n){for(var i=0;i<n;i++)r[a+i]=t[e+i]}}var S;S=new URL(n("27Lyk").resolve("7yeQP"),import.meta.url).toString(),"serviceWorker"in navigator?navigator.serviceWorker.register(S).then((function(t){console.log("COOP/COEP Service Worker registered",t.scope),t.active&&!navigator.serviceWorker.controller&&window.location.reload()}),(function(t){console.log("COOP/COEP Service Worker failed to register",t)})):console.warn("Cannot register a service worker");var k,C;C=function(t,e,r){if(e===self.location.origin)return t;var a=r?"import "+JSON.stringify(t)+";":"importScripts("+JSON.stringify(t)+");";return URL.createObjectURL(new Blob([a],{type:"application/javascript"}))};let L=new URL(n("27Lyk").resolve("3YKzz"),import.meta.url);k=C(L.toString(),L.origin,!0);const T=d(new Worker(k));class x{constructor(t){this.canvasContext=t.getContext("2d"),this.scalingCanvas=document.createElement("canvas"),this.scalingCanvas.width=t.width,this.scalingCanvas.height=t.height,this.scalingContext=this.scalingCanvas.getContext("2d"),this.canvasContext.scale(2,2)}draw(t){const e=new Uint8ClampedArray(t.buffer),r=new ImageData(e,256,240);this.scalingContext.putImageData(r,0,0),this.canvasContext.drawImage(this.scalingCanvas,0,0)}}class O{constructor(){this.context=new AudioContext({sampleRate:11050}),this.scheduledTime=0}push(t){const e=this.context.createBuffer(1,t.length,this.context.sampleRate),r=this.context.createBufferSource(),a=e.getChannelData(0),n=this.context.currentTime;for(let e=0;e<t.length;e++)a[e]=t[e]/65536;r.buffer=e,r.connect(this.context.destination),n<this.scheduledTime?(r.start(this.scheduledTime),this.scheduledTime+=e.duration):(console.warn("Audio buffer underrun :(",this.scheduledTime-n),r.start(n),this.scheduledTime=n+e.duration)}}class P{constructor(){this.times=[]}tick(){const t=performance.now();for(;this.times.length>0&&this.times[0]<=t-1e3;)this.times.shift();return this.times.push(t),this.times.length}}const R=t=>{switch(t){case"KeyA":return 0;case"KeyB":return 1;case"ArrowUp":return 4;case"ArrowDown":return 5;case"ArrowLeft":return 6;case"ArrowRight":return 7;default:return null}};(async()=>{const t=new x(document.getElementById("nes-video")),e=A.getStorageForCapacity(1024,Uint8Array),r=new E(new A(e,Uint8Array));let a=null;console.log("Initializing Optcarrot...");const n=new P,i=document.getElementById("fps-indicator"),s=document.getElementById("audio-enabled");let o=s.checked;s.onclick=()=>{o=s.checked},document.addEventListener("keydown",(t=>{const e=R(t.key);null!==e&&r.push(e,!0)})),document.addEventListener("keyup",(t=>{const e=R(t.key);null!==e&&r.push(e,!1)})),T.init(_((e=>{t.draw(e),i.innerText=n.tick().toString()})),_((t=>{o&&(null===a&&(a=new O),a.push(t))})),r.buffer.buf)})();
//# sourceMappingURL=index.c98e093b.js.map
