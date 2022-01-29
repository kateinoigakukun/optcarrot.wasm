// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8wcER":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"h7u1C":[function(require,module,exports) {
var _comlink = require("comlink");
var _keyEventBus = require("./key-event-bus");
var _ringbufJs = require("ringbuf.js");
const optcarrot = _comlink.wrap(// @ts-ignore
new Worker(require("be0c7d56a7a80908")));
class NESView {
    constructor(canvas){
        this.canvasContext = canvas.getContext("2d");
        this.scalingCanvas = document.createElement('canvas');
        this.scalingCanvas.width = canvas.width;
        this.scalingCanvas.height = canvas.height;
        this.scalingContext = this.scalingCanvas.getContext("2d");
        this.canvasContext.scale(2, 2);
    }
    draw(bytes) {
        const rgba = new Uint8ClampedArray(bytes.buffer);
        const image = new ImageData(rgba, 256, 240);
        this.scalingContext.putImageData(image, 0, 0);
        this.canvasContext.drawImage(this.scalingCanvas, 0, 0);
    }
}
class NESAudio {
    constructor(){
        this.context = new AudioContext({
            sampleRate: 11050
        });
        this.scheduledTime = 0;
    }
    push(input) {
        const buffer = this.context.createBuffer(1, input.length, this.context.sampleRate);
        const bufferSrc = this.context.createBufferSource();
        const bufferData = buffer.getChannelData(0);
        const currentTime = this.context.currentTime;
        for(let i = 0; i < input.length; i++)bufferData[i] = input[i] / 65536;
        bufferSrc.buffer = buffer;
        bufferSrc.connect(this.context.destination);
        if (currentTime < this.scheduledTime) {
            bufferSrc.start(this.scheduledTime);
            this.scheduledTime += buffer.duration;
        } else {
            console.warn("Audio buffer underrun :(", this.scheduledTime - currentTime);
            bufferSrc.start(currentTime);
            this.scheduledTime = currentTime + buffer.duration;
        }
    }
}
class FpsCounter {
    constructor(){
        this.times = [];
    }
    tick() {
        const now = performance.now();
        while(this.times.length > 0 && this.times[0] <= now - 1000)this.times.shift();
        this.times.push(now);
        return this.times.length;
    }
}
const padCodeFromKey = (key)=>{
    switch(key){
        case "KeyA":
            return 0;
        case "KeyB":
            return 1;
        // case "SELECT": return 0x2; // select
        // case "START": return 0x3; // select
        case "ArrowUp":
            return 4;
        case "ArrowDown":
            return 5;
        case "ArrowLeft":
            return 6;
        case "ArrowRight":
            return 7;
        default:
            return null;
    }
};
const play = async ()=>{
    const nesView = new NESView(document.getElementById("nes-video"));
    const keyEventBuffer = _ringbufJs.RingBuffer.getStorageForCapacity(1024, Uint8Array);
    const keyEventProducer = new _keyEventBus.KeyEventProducer(new _ringbufJs.RingBuffer(keyEventBuffer, Uint8Array));
    let nesAudio = null;
    console.log("Initializing Optcarrot...");
    const fps = new FpsCounter();
    const fpsIndicator = document.getElementById("fps-indicator");
    const isAudioEnabledCheckbox = document.getElementById("audio-enabled");
    let audioEnabled = isAudioEnabledCheckbox.checked;
    isAudioEnabledCheckbox.onclick = ()=>{
        audioEnabled = isAudioEnabledCheckbox.checked;
    };
    document.addEventListener("keydown", (event)=>{
        const code = padCodeFromKey(event.key);
        if (code !== null) keyEventProducer.push(code, true);
    });
    document.addEventListener("keyup", (event)=>{
        const code = padCodeFromKey(event.key);
        if (code !== null) keyEventProducer.push(code, false);
    });
    optcarrot.init(// render
    _comlink.proxy((bytes)=>{
        nesView.draw(bytes);
        fpsIndicator.innerText = fps.tick().toString();
    }), // playAudio
    _comlink.proxy((bytes)=>{
        if (!audioEnabled) return;
        if (nesAudio === null) nesAudio = new NESAudio();
        nesAudio.push(bytes);
    }), keyEventProducer.buffer.buf);
};
play() // document.getElementById("play-button").addEventListener("click", play);
;

},{"comlink":"jUFlY","be0c7d56a7a80908":"iJP86","./key-event-bus":"akRdm","ringbuf.js":"ajurf"}],"jUFlY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createEndpoint", ()=>createEndpoint
);
parcelHelpers.export(exports, "expose", ()=>expose
);
parcelHelpers.export(exports, "proxy", ()=>proxy
);
parcelHelpers.export(exports, "proxyMarker", ()=>proxyMarker
);
parcelHelpers.export(exports, "releaseProxy", ()=>releaseProxy
);
parcelHelpers.export(exports, "transfer", ()=>transfer
);
parcelHelpers.export(exports, "transferHandlers", ()=>transferHandlers
);
parcelHelpers.export(exports, "windowEndpoint", ()=>windowEndpoint
);
parcelHelpers.export(exports, "wrap", ()=>wrap
);
/**
 * Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const proxyMarker = Symbol("Comlink.proxy");
const createEndpoint = Symbol("Comlink.endpoint");
const releaseProxy = Symbol("Comlink.releaseProxy");
const throwMarker = Symbol("Comlink.thrown");
const isObject = (val)=>typeof val === "object" && val !== null || typeof val === "function"
;
/**
 * Internal transfer handle to handle objects marked to proxy.
 */ const proxyTransferHandler = {
    canHandle: (val)=>isObject(val) && val[proxyMarker]
    ,
    serialize (obj) {
        const { port1 , port2  } = new MessageChannel();
        expose(obj, port1);
        return [
            port2,
            [
                port2
            ]
        ];
    },
    deserialize (port) {
        port.start();
        return wrap(port);
    }
};
/**
 * Internal transfer handler to handle thrown exceptions.
 */ const throwTransferHandler = {
    canHandle: (value)=>isObject(value) && throwMarker in value
    ,
    serialize ({ value  }) {
        let serialized;
        if (value instanceof Error) serialized = {
            isError: true,
            value: {
                message: value.message,
                name: value.name,
                stack: value.stack
            }
        };
        else serialized = {
            isError: false,
            value
        };
        return [
            serialized,
            []
        ];
    },
    deserialize (serialized) {
        if (serialized.isError) throw Object.assign(new Error(serialized.value.message), serialized.value);
        throw serialized.value;
    }
};
/**
 * Allows customizing the serialization of certain values.
 */ const transferHandlers = new Map([
    [
        "proxy",
        proxyTransferHandler
    ],
    [
        "throw",
        throwTransferHandler
    ], 
]);
function expose(obj1, ep = self) {
    ep.addEventListener("message", function callback(ev) {
        if (!ev || !ev.data) return;
        const { id , type , path  } = Object.assign({
            path: []
        }, ev.data);
        const argumentList = (ev.data.argumentList || []).map(fromWireValue);
        let returnValue1;
        try {
            const parent = path.slice(0, -1).reduce((obj, prop)=>obj[prop]
            , obj1);
            const rawValue = path.reduce((obj, prop)=>obj[prop]
            , obj1);
            switch(type){
                case "GET" /* GET */ :
                    returnValue1 = rawValue;
                    break;
                case "SET" /* SET */ :
                    parent[path.slice(-1)[0]] = fromWireValue(ev.data.value);
                    returnValue1 = true;
                    break;
                case "APPLY" /* APPLY */ :
                    returnValue1 = rawValue.apply(parent, argumentList);
                    break;
                case "CONSTRUCT" /* CONSTRUCT */ :
                    {
                        const value = new rawValue(...argumentList);
                        returnValue1 = proxy(value);
                    }
                    break;
                case "ENDPOINT" /* ENDPOINT */ :
                    {
                        const { port1 , port2  } = new MessageChannel();
                        expose(obj1, port2);
                        returnValue1 = transfer(port1, [
                            port1
                        ]);
                    }
                    break;
                case "RELEASE" /* RELEASE */ :
                    returnValue1 = undefined;
                    break;
                default:
                    return;
            }
        } catch (value1) {
            returnValue1 = {
                value: value1,
                [throwMarker]: 0
            };
        }
        Promise.resolve(returnValue1).catch((value)=>{
            return {
                value,
                [throwMarker]: 0
            };
        }).then((returnValue)=>{
            const [wireValue, transferables] = toWireValue(returnValue);
            ep.postMessage(Object.assign(Object.assign({
            }, wireValue), {
                id
            }), transferables);
            if (type === "RELEASE" /* RELEASE */ ) {
                // detach and deactive after sending release response above.
                ep.removeEventListener("message", callback);
                closeEndPoint(ep);
            }
        });
    });
    if (ep.start) ep.start();
}
function isMessagePort(endpoint) {
    return endpoint.constructor.name === "MessagePort";
}
function closeEndPoint(endpoint) {
    if (isMessagePort(endpoint)) endpoint.close();
}
function wrap(ep, target) {
    return createProxy(ep, [], target);
}
function throwIfProxyReleased(isReleased) {
    if (isReleased) throw new Error("Proxy has been released and is not useable");
}
function createProxy(ep, path = [], target = function() {
}) {
    let isProxyReleased = false;
    const proxy1 = new Proxy(target, {
        get (_target, prop) {
            throwIfProxyReleased(isProxyReleased);
            if (prop === releaseProxy) return ()=>{
                return requestResponseMessage(ep, {
                    type: "RELEASE" /* RELEASE */ ,
                    path: path.map((p)=>p.toString()
                    )
                }).then(()=>{
                    closeEndPoint(ep);
                    isProxyReleased = true;
                });
            };
            if (prop === "then") {
                if (path.length === 0) return {
                    then: ()=>proxy1
                };
                const r = requestResponseMessage(ep, {
                    type: "GET" /* GET */ ,
                    path: path.map((p)=>p.toString()
                    )
                }).then(fromWireValue);
                return r.then.bind(r);
            }
            return createProxy(ep, [
                ...path,
                prop
            ]);
        },
        set (_target, prop, rawValue) {
            throwIfProxyReleased(isProxyReleased);
            // FIXME: ES6 Proxy Handler `set` methods are supposed to return a
            // boolean. To show good will, we return true asynchronously ¯\_(ツ)_/¯
            const [value, transferables] = toWireValue(rawValue);
            return requestResponseMessage(ep, {
                type: "SET" /* SET */ ,
                path: [
                    ...path,
                    prop
                ].map((p)=>p.toString()
                ),
                value
            }, transferables).then(fromWireValue);
        },
        apply (_target, _thisArg, rawArgumentList) {
            throwIfProxyReleased(isProxyReleased);
            const last = path[path.length - 1];
            if (last === createEndpoint) return requestResponseMessage(ep, {
                type: "ENDPOINT" /* ENDPOINT */ 
            }).then(fromWireValue);
            // We just pretend that `bind()` didn’t happen.
            if (last === "bind") return createProxy(ep, path.slice(0, -1));
            const [argumentList, transferables] = processArguments(rawArgumentList);
            return requestResponseMessage(ep, {
                type: "APPLY" /* APPLY */ ,
                path: path.map((p)=>p.toString()
                ),
                argumentList
            }, transferables).then(fromWireValue);
        },
        construct (_target, rawArgumentList) {
            throwIfProxyReleased(isProxyReleased);
            const [argumentList, transferables] = processArguments(rawArgumentList);
            return requestResponseMessage(ep, {
                type: "CONSTRUCT" /* CONSTRUCT */ ,
                path: path.map((p)=>p.toString()
                ),
                argumentList
            }, transferables).then(fromWireValue);
        }
    });
    return proxy1;
}
function myFlat(arr) {
    return Array.prototype.concat.apply([], arr);
}
function processArguments(argumentList) {
    const processed = argumentList.map(toWireValue);
    return [
        processed.map((v)=>v[0]
        ),
        myFlat(processed.map((v)=>v[1]
        ))
    ];
}
const transferCache = new WeakMap();
function transfer(obj, transfers) {
    transferCache.set(obj, transfers);
    return obj;
}
function proxy(obj) {
    return Object.assign(obj, {
        [proxyMarker]: true
    });
}
function windowEndpoint(w, context = self, targetOrigin = "*") {
    return {
        postMessage: (msg, transferables)=>w.postMessage(msg, targetOrigin, transferables)
        ,
        addEventListener: context.addEventListener.bind(context),
        removeEventListener: context.removeEventListener.bind(context)
    };
}
function toWireValue(value) {
    for (const [name, handler] of transferHandlers)if (handler.canHandle(value)) {
        const [serializedValue, transferables] = handler.serialize(value);
        return [
            {
                type: "HANDLER" /* HANDLER */ ,
                name,
                value: serializedValue
            },
            transferables, 
        ];
    }
    return [
        {
            type: "RAW" /* RAW */ ,
            value
        },
        transferCache.get(value) || [], 
    ];
}
function fromWireValue(value) {
    switch(value.type){
        case "HANDLER" /* HANDLER */ :
            return transferHandlers.get(value.name).deserialize(value.value);
        case "RAW" /* RAW */ :
            return value.value;
    }
}
function requestResponseMessage(ep, msg, transfers) {
    return new Promise((resolve)=>{
        const id = generateUUID();
        ep.addEventListener("message", function l(ev) {
            if (!ev.data || !ev.data.id || ev.data.id !== id) return;
            ep.removeEventListener("message", l);
            resolve(ev.data);
        });
        if (ep.start) ep.start();
        ep.postMessage(Object.assign({
            id
        }, msg), transfers);
    });
}
function generateUUID() {
    return new Array(4).fill(0).map(()=>Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)
    ).join("-");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"iJP86":[function(require,module,exports) {
let workerURL = require('./helpers/get-worker-url');
let bundleURL = require('./helpers/bundle-url');
let url = bundleURL.getBundleURL('7UhFu') + "optcarrot.worker.0de869fa.js" + "?" + Date.now();
module.exports = workerURL(url, bundleURL.getOrigin(url), false);

},{"./helpers/get-worker-url":"cn2gM","./helpers/bundle-url":"lgJ39"}],"cn2gM":[function(require,module,exports) {
"use strict";
module.exports = function(workerUrl, origin, isESM) {
    if (origin === self.location.origin) // If the worker bundle's url is on the same origin as the document,
    // use the worker bundle's own url.
    return workerUrl;
    else {
        // Otherwise, create a blob URL which loads the worker bundle with `importScripts`.
        var source = isESM ? 'import ' + JSON.stringify(workerUrl) + ';' : 'importScripts(' + JSON.stringify(workerUrl) + ');';
        return URL.createObjectURL(new Blob([
            source
        ], {
            type: 'application/javascript'
        }));
    }
};

},{}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"akRdm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "KeyEventProducer", ()=>KeyEventProducer
);
parcelHelpers.export(exports, "KeyEventConsumer", ()=>KeyEventConsumer
);
const DATA_SIZE_FIELD_OFFSET = 0;
const DATA_LOCK_FIELD_OFFSET = 1;
const DATA_BEGIN_OFFSET = 3;
const KEY_EVENT_SIZE = 4;
class KeyEventProducer {
    constructor(buffer){
        this.buffer = buffer;
    }
    push(code, pressed) {
        this.buffer.push(new Uint8Array([
            code,
            pressed ? 1 : 0
        ]), undefined);
    }
}
class KeyEventConsumer {
    constructor(buffer){
        this.buffer = buffer;
    }
    consume() {
        const bytes = new Uint8Array(2);
        const read = this.buffer.pop(bytes, 2);
        if (read === 0) return null;
        return [
            bytes[0],
            bytes[1] === 1
        ];
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ajurf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AudioReader", ()=>AudioReader
);
parcelHelpers.export(exports, "AudioWriter", ()=>AudioWriter
);
parcelHelpers.export(exports, "ParameterReader", ()=>ParameterReader
);
parcelHelpers.export(exports, "ParameterWriter", ()=>ParameterWriter
);
parcelHelpers.export(exports, "RingBuffer", ()=>RingBuffer
);
parcelHelpers.export(exports, "deinterleave", ()=>deinterleave
);
parcelHelpers.export(exports, "interleave", ()=>interleave
);
/**
 * Interleaved -> Planar audio buffer conversion
 *
 * This is useful to get data from a codec, the network, or anything that is
 * interleaved, into a planar format, for example a Web Audio API AudioBuffer or
 * the output parameter of an AudioWorkletProcessor.
 *
 * @param {Float32Array} input is an array of n*128 frames arrays, interleaved,
 * where n is the channel count.
 * @param {Float32Array} output is an array of 128-frames arrays.
 */ function deinterleave(input, output) {
    var channel_count = input.length / 256;
    if (output.length != channel_count) throw "not enough space in output arrays";
    for(var i = 0; i < channelCount; i++){
        let out_channel = output[i];
        let interleaved_idx = i;
        for(var j = 0; j < 128; ++j){
            out_channel[j] = input[interleaved_idx];
            interleaved_idx += channel_count;
        }
    }
}
/**
 * Planar -> Interleaved audio buffer conversion
 *
 * This function is useful to get data from the Web Audio API (that uses a
 * planar format), into something that a codec or network streaming library
 * would expect.
 *
 * @param {Float32Array} input An array of n*128 frames Float32Array that hold the audio data.
 * @param {Float32Array} output A Float32Array that is n*128 elements long.
 */ function interleave(input, output) {
    if (input.length * 128 != output.length) throw "input and output of incompatible sizes";
    var out_idx = 0;
    for(var i = 0; i < 128; i++)for(var channel = 0; channel < input.length; channel++){
        output[out_idx] = input[channel][i];
        out_idx++;
    }
}
/**
 * Send interleaved audio frames to another thread, wait-free.
 *
 * These classes allow communicating between a non-real time thread (browser
 * main thread or worker) and a real-time thread (in an AudioWorkletProcessor).
 * Write and Reader cannot change role after setup, unless externally
 * synchronized.
 *
 * GC _can_ happen during the initial construction of this object when hopefully
 * no audio is being output. This depends on how implementations schedule GC
 * passes. After the setup phase no GC is triggered on either side of the queue.
 */ class AudioWriter {
    /**
   * From a RingBuffer, build an object that can enqueue enqueue audio in a ring
   * buffer.
   * @constructor
   */ constructor(ringbuf){
        if (ringbuf.type() != "Float32Array") throw "This class requires a ring buffer of Float32Array";
        this.ringbuf = ringbuf;
    }
    /**
   * Enqueue a buffer of interleaved audio into the ring buffer.
   *
   *
   * Care should be taken to enqueue a number of samples that is a multiple of the
   * channel count of the audio stream.
   *
   * @param {Float32Array} buf An array of interleaved audio frames.
   *
   * @return The number of samples that have been successfuly written to the
   * queue. `buf` is not written to during this call, so the samples that
   * haven't been written to the queue are still available.
   */ enqueue(buf) {
        return this.ringbuf.push(buf);
    }
    /**
   * @return The free space in the ring buffer. This is the amount of samples
   * that can be queued, with a guarantee of success.
   */ available_write() {
        return this.ringbuf.available_write();
    }
}
/**
 * Receive interleaved audio frames to another thread, wait-free.
 *
 * GC _can_ happen during the initial construction of this object when hopefully
 * no audio is being output. This depends on how implementations schedule GC
 * passes. After the setup phase no GC is triggered on either side of the queue.
 */ class AudioReader {
    /**
   * From a RingBuffer, build an object that can dequeue audio in a ring
   * buffer.
   * @constructor
   */ constructor(ringbuf){
        if (ringbuf.type() != "Float32Array") throw "This class requires a ring buffer of Float32Array";
        this.ringbuf = ringbuf;
    }
    /**
   * Attempt to dequeue at most `buf.length` samples from the queue. This
   * returns the number of samples dequeued. If greater than 0, the samples are
   * at the beginning of `buf`.
   *
   * Care should be taken to dequeue a number of samples that is a multiple of the
   * channel count of the audio stream.
   *
   * @param {Float32Array} buf A buffer in which to copy the dequeued
   * interleaved audio frames.
   * @return The number of samples dequeued.
   */ dequeue(buf) {
        if (this.ringbuf.empty()) return 0;
        return this.ringbuf.pop(buf);
    }
    /**
   * Query the occupied space in the queue. 
   *
   * @return The amount of samples that can be read with a guarantee of success.
   *
   */ available_read() {
        return this.ringbuf.available_read();
    }
}
/**
 * Send parameter changes, lock free, no gc, between a UI thread (browser
 * main thread or worker) and a real-time thread (in an AudioWorkletProcessor).
 * Write and Reader cannot change role after setup, unless externally
 * synchronized.
 *
 * GC _can_ happen during the initial construction of this object when hopefully
 * no audio is being output. This depends on the implementation.
 *
 * Parameter changes are like in the VST framework: an index and a float value
 * (no restriction on the value).
 *
 * This class supports up to 256 parameters, but this is easy to extend if
 * needed.
 *
 * An element is an index, that is an unsigned byte, and a float32, which is 4
 * bytes.
 */ class ParameterWriter {
    /**
   * From a RingBuffer, build an object that can enqueue a parameter change in
   * the queue.
   * @param {RingBuffer} ringbuf A RingBuffer object of Uint8Array.
   * @constructor
   */ constructor(ringbuf){
        if (ringbuf.type() != "Uint8Array") throw "This class requires a ring buffer of Uint8Array";
        const SIZE_ELEMENT = 5;
        this.ringbuf = ringbuf;
        this.mem = new ArrayBuffer(SIZE_ELEMENT);
        this.array = new Uint8Array(this.mem);
        this.view = new DataView(this.mem);
    }
    /*
   * Enqueue a parameter change for parameter of index `index`, with a new value
   * of `value`.
   *
   * @param {number} index The index of the parameter.
   * @param {number} value The value of the parameter.
   * @return True if enqueuing suceeded, false otherwise.
   */ enqueue_change(index, value) {
        const SIZE_ELEMENT = 5;
        this.view.setUint8(0, index);
        this.view.setFloat32(1, value);
        if (this.ringbuf.available_write() < SIZE_ELEMENT) return false;
        return this.ringbuf.push(this.array) == SIZE_ELEMENT;
    }
}
/**
 * Receive parameter changes, lock free, no gc, between a UI thread (browser
 * main thread or worker) and a real-time thread (in an AudioWorkletProcessor).
 * Write and Reader cannot change role after setup, unless externally
 * synchronized.
 *
 * GC _can_ happen during the initial construction of this object when hopefully
 * no audio is being output. This depends on the implementation.
 *
 * Parameter changes are like in the VST framework: an index and a float value
 * (no restriction on the value).
 *
 * This class supports up to 256 parameters, but this is easy to extend if
 * needed.
 *
 * An element is an index, that is an unsigned byte, and a float32, which is 4
 * bytes.
 */ class ParameterReader {
    /**
   * @constructor
   * @param {RingBuffer} ringbuf A RingBuffer setup to hold Uint8.
  */ constructor(ringbuf){
        const SIZE_ELEMENT = 5;
        this.ringbuf = ringbuf;
        this.mem = new ArrayBuffer(SIZE_ELEMENT);
        this.array = new Uint8Array(this.mem);
        this.view = new DataView(this.mem);
    }
    /**
   * Attempt to dequeue a single parameter change.
   * @param {Object} o An object with two attributes: `index` and `value`.
   * @return true if a parameter change has been dequeued, false otherwise.
   */ dequeue_change(o) {
        if (this.ringbuf.empty()) return false;
        var rv = this.ringbuf.pop(this.array);
        o.index = this.view.getUint8(0);
        o.value = this.view.getFloat32(1);
        return true;
    }
}
/** The base RingBuffer class
 *
 * A Single Producer - Single Consumer thread-safe wait-free ring buffer.
 *
 * The producer and the consumer can be on separate threads, but cannot change roles,
 * except with external synchronization.
 */ class RingBuffer {
    /** Allocate the SharedArrayBuffer for a RingBuffer, based on the type and
   * capacity required
   * @param {number} capacity The number of elements the ring buffer will be
   * able to hold.
   * @param {TypedArray} type A typed array constructor, the type that this ring
   * buffer will hold.
   * @return {SharedArrayBuffer} A SharedArrayBuffer of the right size.
   * @static
   */ static getStorageForCapacity(capacity, type) {
        if (!type.BYTES_PER_ELEMENT) throw "Pass in a ArrayBuffer subclass";
        var bytes = 8 + (capacity + 1) * type.BYTES_PER_ELEMENT;
        return new SharedArrayBuffer(bytes);
    }
    /**
   * @constructor
   * @param {SharedArrayBuffer} sab A SharedArrayBuffer obtained by calling
   * {@link RingBuffer.getStorageFromCapacity}.
   * @param {TypedArray} type A typed array constructor, the type that this ring
   * buffer will hold.
   */ constructor(sab, type){
        if (!ArrayBuffer.__proto__.isPrototypeOf(type) && type.BYTES_PER_ELEMENT !== undefined) throw "Pass a concrete typed array class as second argument";
        // Maximum usable size is 1<<32 - type.BYTES_PER_ELEMENT bytes in the ring
        // buffer for this version, easily changeable.
        // -4 for the write ptr (uint32_t offsets)
        // -4 for the read ptr (uint32_t offsets)
        // capacity counts the empty slot to distinguish between full and empty.
        this._type = type;
        this._capacity = (sab.byteLength - 8) / type.BYTES_PER_ELEMENT;
        this.buf = sab;
        this.write_ptr = new Uint32Array(this.buf, 0, 1);
        this.read_ptr = new Uint32Array(this.buf, 4, 1);
        this.storage = new type(this.buf, 8, this._capacity);
    }
    /**
   * @return the type of the underlying ArrayBuffer for this RingBuffer. This
   * allows implementing crude type checking.
   */ type() {
        return this._type.name;
    }
    /**
   * Push elements to the ring buffer.
   * @param {TypedArray} elements A typed array of the same type as passed in the ctor, to be written to the queue.
   * @param {Number} length If passed, the maximum number of elements to push.
   * If not passed, all elements in the input array are pushed.
   * @return the number of elements written to the queue.
   */ push(elements, length) {
        var rd = Atomics.load(this.read_ptr, 0);
        var wr = Atomics.load(this.write_ptr, 0);
        if ((wr + 1) % this._storage_capacity() == rd) // full
        return 0;
        var len = length != undefined ? length : elements.length;
        let to_write = Math.min(this._available_write(rd, wr), len);
        let first_part = Math.min(this._storage_capacity() - wr, to_write);
        let second_part = to_write - first_part;
        this._copy(elements, 0, this.storage, wr, first_part);
        this._copy(elements, first_part, this.storage, 0, second_part);
        // publish the enqueued data to the other side
        Atomics.store(this.write_ptr, 0, (wr + to_write) % this._storage_capacity());
        return to_write;
    }
    /**
   * Write bytes to the ring buffer using callbacks. This create wrapper
   * objects and can GC, so it's best to no use this variant from a real-time
   * thread such as an AudioWorklerProcessor `process` method.
   * The callback is passed two typed arrays of the same type, to be filled.
   * This allows skipping copies if the API that produces the data writes is
   * passed arrays to write to, such as `AudioData.copyTo`.
   * @param {number} amount The maximum number of elements to write to the ring
   * buffer. If amount is more than the number of slots available for writing,
    * then the number of slots available for writing will be made available: no
    * overwriting of elements can happen.
    * @param {Function} cb A callback with two parameters, that are two typed
    * array of the correct type, in which the data need to be copied. It is
    * necessary to write exactly the number of elements determined by the size
    * of the two typed arrays.
    * @return The number of elements written to the queue.
   */ writeCallback(amount, cb) {
        var rd = Atomics.load(this.read_ptr, 0);
        var wr = Atomics.load(this.write_ptr, 0);
        if ((wr + 1) % this._storage_capacity() == rd) // full
        return 0;
        let to_write = Math.min(this._available_write(rd, wr), amount);
        let first_part = Math.min(this._storage_capacity() - wr, to_write);
        let second_part = to_write - first_part;
        // This part will cause GC: don't use in the real time thread.
        var first_part_buf = new this._type(this.storage.buffer, 8 + wr * 4, first_part);
        var second_part_buf = new this._type(this.storage.buffer, 8, second_part);
        cb(first_part_buf, second_part_buf);
        // publish the enqueued data to the other side
        Atomics.store(this.write_ptr, 0, (wr + to_write) % this._storage_capacity());
        return to_write;
    }
    /**
   * Read up to `elements.length` elements from the ring buffer. `elements` is a typed
   * array of the same type as passed in the ctor.
   * Returns the number of elements read from the queue, they are placed at the
   * beginning of the array passed as parameter.
   * @param {TypedArray} elements An array in which the elements read from the
   * queue will be written, starting at the beginning of the array.
   * @param {Number} length If passed, the maximum number of elements to pop. If
   * not passed, up to elements.length are popped.
   * @return The number of elements read from the queue.
   */ pop(elements, length) {
        var rd = Atomics.load(this.read_ptr, 0);
        var wr = Atomics.load(this.write_ptr, 0);
        if (wr == rd) return 0;
        var len = length != undefined ? length : elements.length;
        let to_read = Math.min(this._available_read(rd, wr), len);
        let first_part = Math.min(this._storage_capacity() - rd, to_read);
        let second_part = to_read - first_part;
        this._copy(this.storage, rd, elements, 0, first_part);
        this._copy(this.storage, 0, elements, first_part, second_part);
        Atomics.store(this.read_ptr, 0, (rd + to_read) % this._storage_capacity());
        return to_read;
    }
    /**
   * @return True if the ring buffer is empty false otherwise. This can be late
   * on the reader side: it can return true even if something has just been
   * pushed.
   */ empty() {
        var rd = Atomics.load(this.read_ptr, 0);
        var wr = Atomics.load(this.write_ptr, 0);
        return wr == rd;
    }
    /**
   * @return True if the ring buffer is full, false otherwise. This can be late
   * on the write side: it can return true when something has just been popped.
   */ full() {
        var rd = Atomics.load(this.read_ptr, 0);
        var wr = Atomics.load(this.write_ptr, 0);
        return (wr + 1) % this._storage_capacity() == rd;
    }
    /**
   * @return The usable capacity for the ring buffer: the number of elements
   * that can be stored.
   */ capacity() {
        return this._capacity - 1;
    }
    /**
   * @return The number of elements available for reading. This can be late, and
   * report less elements that is actually in the queue, when something has just
   * been enqueued.
   */ available_read() {
        var rd = Atomics.load(this.read_ptr, 0);
        var wr = Atomics.load(this.write_ptr, 0);
        return this._available_read(rd, wr);
    }
    /**
   * @return The number of elements available for writing. This can be late, and
   * report less elements that is actually available for writing, when something
   * has just been dequeued.
   */ available_write() {
        var rd = Atomics.load(this.read_ptr, 0);
        var wr = Atomics.load(this.write_ptr, 0);
        return this._available_write(rd, wr);
    }
    // private methods //
    /**
   * @return Number of elements available for reading, given a read and write
   * pointer.
   * @private
   */ _available_read(rd, wr) {
        return (wr + this._storage_capacity() - rd) % this._storage_capacity();
    }
    /**
   * @return Number of elements available from writing, given a read and write
   * pointer.
   * @private
   */ _available_write(rd, wr) {
        return this.capacity() - this._available_read(rd, wr);
    }
    /**
   * @return The size of the storage for elements not accounting the space for
   * the index, counting the empty slot.
   * @private
   */ _storage_capacity() {
        return this._capacity;
    }
    /**
   * Copy `size` elements from `input`, starting at offset `offset_input`, to
   * `output`, starting at offset `offset_output`.
   * @param {TypedArray} input The array to copy from
   * @param {Number} offset_input The index at which to start the copy
   * @param {TypedArray} output The array to copy to
   * @param {Number} offset_output The index at which to start copying the elements to
   * @param {Number} size The number of elements to copy
   * @private
   */ _copy(input, offset_input, output, offset_output, size) {
        for(var i = 0; i < size; i++)output[offset_output + i] = input[offset_input + i];
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["8wcER","h7u1C"], "h7u1C", "parcelRequire8e51")

//# sourceMappingURL=index.b71e74eb.js.map
