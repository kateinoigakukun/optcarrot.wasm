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
})({"Q5Cvw":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "a8fb9c35fdafe466";
module.bundle.HMR_BUNDLE_ID = "2cf03cbb0de869fa";
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

},{}],"hI9f5":[function(require,module,exports) {
var _comlink = require("comlink");
var _wasi = require("@wasmer/wasi");
var _wasmfs = require("@wasmer/wasmfs");
var _rubyWasmWasi = require("ruby-wasm-wasi");
var _pathBrowserify = require("path-browserify");
class App {
    constructor(){
        this.wasmFs = new _wasmfs.WasmFs();
        this.wasmFs.fs.mkdirSync("/OPTCARROT_TMP", 511);
        const args = [
            "ruby.wasm",
            "-e_=0"
        ];
        this.wasi = new _wasi.WASI({
            bindings: {
                ..._wasi.WASI.defaultBindings,
                fs: this.wasmFs.fs,
                path: _pathBrowserify
            },
            args,
            preopenDirectories: {
                "/OPTCARROT_TMP": "/OPTCARROT_TMP"
            }
        });
        const originalWriteSync = this.wasmFs.fs.writeSync.bind(this.wasmFs.fs);
        // @ts-ignore
        this.wasmFs.fs.writeSync = (fd, buffer, offset, length, position)=>{
            const text = new TextDecoder("utf-8").decode(buffer);
            const handlers = {
                1: (line)=>console.log(line)
                ,
                2: (line)=>console.warn(line)
            };
            if (handlers[fd]) handlers[fd](text);
            return originalWriteSync(fd, buffer, offset, length, position);
        };
    }
    async init(render) {
        this.remoteRender = render;
        // Fetch and instantiate WebAssembly binary
        const response = await fetch("./optcarrot.wasm");
        const buffer = await response.arrayBuffer();
        const imports = {
            wasi_snapshot_preview1: this.wasi.wasiImport
        };
        const vm = new _rubyWasmWasi.RubyVM();
        vm.addToImports(imports);
        // Instantiate the WebAssembly module
        const { instance  } = await WebAssembly.instantiate(buffer, imports);
        await vm.setInstance(instance);
        // Initialize WASI application
        this.wasi.setMemory(instance.exports.memory);
        instance.exports._initialize();
        // Initialize Ruby VM
        vm.initialize();
        console.time("init-optcarrot");
        vm.eval(`
      require "js"
      JS::eval("console.time('require-optcarrot')")
      require_relative "/optcarrot/lib/optcarrot.rb"
      JS::eval("console.timeEnd('require-optcarrot')")
      args = [
          "--video=canvas",
          "--audio=none",
          "--input=none",
          "/optcarrot/examples/Lan_Master.nes",
      ]
      JS::eval("console.time('Optcarrot::NES.new')")
      nes = Optcarrot::NES.new(args)
      JS::eval("console.timeEnd('Optcarrot::NES.new')")
      nes.run
    `);
    }
    tick() {
        this.remoteRender(this.videoImageBytes());
    }
    videoImageBytes() {
        return this.wasmFs.fs.readFileSync("/OPTCARROT_TMP/video.data");
    }
}
const app = new App();
// @ts-ignore
globalThis.Optcarrot = app;
_comlink.expose({
    init (render) {
        app.init(render);
    }
});

},{"comlink":"ln7cn","@wasmer/wasi":"ijibs","@wasmer/wasmfs":"2d86p","ruby-wasm-wasi":"4Q9Dn","path-browserify":"i1BLo"}],"ln7cn":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"fn8Fk":[function(require,module,exports) {
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

},{}],"ijibs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WASI", ()=>dc
);
parcelHelpers.export(exports, "WASIError", ()=>ac
);
parcelHelpers.export(exports, "WASIExitError", ()=>nb
);
parcelHelpers.export(exports, "WASIKillError", ()=>ob
);
var global = arguments[3];
/*
 *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
*****************************************************************************/ function aa(a1, b1) {
    aa = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(a, b) {
        a.__proto__ = b;
    } || function(a, b) {
        for(var c in b)b.hasOwnProperty(c) && (a[c] = b[c]);
    };
    return aa(a1, b1);
}
function ba(a, b) {
    function c() {
        this.constructor = a;
    }
    aa(a, b);
    a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c);
}
function ca(a) {
    var b = "function" === typeof Symbol && a[Symbol.iterator], c = 0;
    return b ? b.call(a) : {
        next: function() {
            a && c >= a.length && (a = void 0);
            return {
                value: a && a[c++],
                done: !a
            };
        }
    };
}
function da(a, b) {
    var c = "function" === typeof Symbol && a[Symbol.iterator];
    if (!c) return a;
    a = c.call(a);
    var d, e = [];
    try {
        for(; (void 0 === b || 0 < b--) && !(d = a.next()).done;)e.push(d.value);
    } catch (g) {
        var f = {
            error: g
        };
    } finally{
        try {
            d && !d.done && (c = a["return"]) && c.call(a);
        } finally{
            if (f) throw f.error;
        }
    }
    return e;
}
function fa() {
    for(var a = [], b = 0; b < arguments.length; b++)a = a.concat(da(arguments[b]));
    return a;
}
var ha = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : {
}, k = "undefined" !== typeof BigInt ? BigInt : ha.BigInt || Number, ia = DataView;
ia.prototype.setBigUint64 || (ia.prototype.setBigUint64 = function(a, b, c) {
    if (b < Math.pow(2, 32)) {
        b = Number(b);
        var d = 0;
    } else {
        d = b.toString(2);
        b = "";
        for(var e = 0; e < 64 - d.length; e++)b += "0";
        b += d;
        d = parseInt(b.substring(0, 32), 2);
        b = parseInt(b.substring(32), 2);
    }
    this.setUint32(a + (c ? 0 : 4), b, c);
    this.setUint32(a + (c ? 4 : 0), d, c);
}, ia.prototype.getBigUint64 = function(a, b) {
    var c = this.getUint32(a + (b ? 0 : 4), b);
    a = this.getUint32(a + (b ? 4 : 0), b);
    c = c.toString(2);
    a = a.toString(2);
    b = "";
    for(var d = 0; d < 32 - c.length; d++)b += "0";
    return k("0b" + a + (b + c));
});
var ja = "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {
}, m = [], u = [], ka = "undefined" !== typeof Uint8Array ? Uint8Array : Array, la = !1;
function ma() {
    la = !0;
    for(var a = 0; 64 > a; ++a)m[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[a], u["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(a)] = a;
    u[45] = 62;
    u[95] = 63;
}
function na(a, b, c) {
    for(var d = [], e = b; e < c; e += 3)b = (a[e] << 16) + (a[e + 1] << 8) + a[e + 2], d.push(m[b >> 18 & 63] + m[b >> 12 & 63] + m[b >> 6 & 63] + m[b & 63]);
    return d.join("");
}
function oa(a) {
    la || ma();
    for(var b = a.length, c = b % 3, d = "", e = [], f = 0, g = b - c; f < g; f += 16383)e.push(na(a, f, f + 16383 > g ? g : f + 16383));
    1 === c ? (a = a[b - 1], d += m[a >> 2], d += m[a << 4 & 63], d += "==") : 2 === c && (a = (a[b - 2] << 8) + a[b - 1], d += m[a >> 10], d += m[a >> 4 & 63], d += m[a << 2 & 63], d += "=");
    e.push(d);
    return e.join("");
}
function pa(a, b, c, d, e) {
    var f = 8 * e - d - 1;
    var g = (1 << f) - 1, h = g >> 1, l = -7;
    e = c ? e - 1 : 0;
    var n = c ? -1 : 1, r = a[b + e];
    e += n;
    c = r & (1 << -l) - 1;
    r >>= -l;
    for(l += f; 0 < l; c = 256 * c + a[b + e], e += n, l -= 8);
    f = c & (1 << -l) - 1;
    c >>= -l;
    for(l += d; 0 < l; f = 256 * f + a[b + e], e += n, l -= 8);
    if (0 === c) c = 1 - h;
    else {
        if (c === g) return f ? NaN : Infinity * (r ? -1 : 1);
        f += Math.pow(2, d);
        c -= h;
    }
    return (r ? -1 : 1) * f * Math.pow(2, c - d);
}
function qa(a, b, c, d, e, f) {
    var g, h = 8 * f - e - 1, l = (1 << h) - 1, n = l >> 1, r = 23 === e ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    f = d ? 0 : f - 1;
    var p = d ? 1 : -1, y = 0 > b || 0 === b && 0 > 1 / b ? 1 : 0;
    b = Math.abs(b);
    isNaN(b) || Infinity === b ? (b = isNaN(b) ? 1 : 0, d = l) : (d = Math.floor(Math.log(b) / Math.LN2), 1 > b * (g = Math.pow(2, -d)) && (d--, g *= 2), b = 1 <= d + n ? b + r / g : b + r * Math.pow(2, 1 - n), 2 <= b * g && (d++, g /= 2), d + n >= l ? (b = 0, d = l) : 1 <= d + n ? (b = (b * g - 1) * Math.pow(2, e), d += n) : (b = b * Math.pow(2, n - 1) * Math.pow(2, e), d = 0));
    for(; 8 <= e; a[c + f] = b & 255, f += p, b /= 256, e -= 8);
    d = d << e | b;
    for(h += e; 0 < h; a[c + f] = d & 255, f += p, d /= 256, h -= 8);
    a[c + f - p] |= 128 * y;
}
var ra = {
}.toString, sa = Array.isArray || function(a) {
    return "[object Array]" == ra.call(a);
};
v.TYPED_ARRAY_SUPPORT = void 0 !== ja.TYPED_ARRAY_SUPPORT ? ja.TYPED_ARRAY_SUPPORT : !0;
var ta = v.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
function w(a, b) {
    if ((v.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823) < b) throw new RangeError("Invalid typed array length");
    v.TYPED_ARRAY_SUPPORT ? (a = new Uint8Array(b), a.__proto__ = v.prototype) : (null === a && (a = new v(b)), a.length = b);
    return a;
}
function v(a, b, c) {
    if (!(v.TYPED_ARRAY_SUPPORT || this instanceof v)) return new v(a, b, c);
    if ("number" === typeof a) {
        if ("string" === typeof b) throw Error("If encoding is specified then the first argument must be a string");
        return va(this, a);
    }
    return wa(this, a, b, c);
}
v.poolSize = 8192;
v._augment = function(a) {
    a.__proto__ = v.prototype;
    return a;
};
function wa(a, b, c, d) {
    if ("number" === typeof b) throw new TypeError('"value" argument must not be a number');
    if ("undefined" !== typeof ArrayBuffer && b instanceof ArrayBuffer) {
        b.byteLength;
        if (0 > c || b.byteLength < c) throw new RangeError("'offset' is out of bounds");
        if (b.byteLength < c + (d || 0)) throw new RangeError("'length' is out of bounds");
        b = void 0 === c && void 0 === d ? new Uint8Array(b) : void 0 === d ? new Uint8Array(b, c) : new Uint8Array(b, c, d);
        v.TYPED_ARRAY_SUPPORT ? (a = b, a.__proto__ = v.prototype) : a = xa(a, b);
        return a;
    }
    if ("string" === typeof b) {
        d = a;
        a = c;
        if ("string" !== typeof a || "" === a) a = "utf8";
        if (!v.isEncoding(a)) throw new TypeError('"encoding" must be a valid string encoding');
        c = ya(b, a) | 0;
        d = w(d, c);
        b = d.write(b, a);
        b !== c && (d = d.slice(0, b));
        return d;
    }
    return za(a, b);
}
v.from = function(a, b, c) {
    return wa(null, a, b, c);
};
v.TYPED_ARRAY_SUPPORT && (v.prototype.__proto__ = Uint8Array.prototype, v.__proto__ = Uint8Array);
function Aa(a) {
    if ("number" !== typeof a) throw new TypeError('"size" argument must be a number');
    if (0 > a) throw new RangeError('"size" argument must not be negative');
}
v.alloc = function(a, b, c) {
    Aa(a);
    a = 0 >= a ? w(null, a) : void 0 !== b ? "string" === typeof c ? w(null, a).fill(b, c) : w(null, a).fill(b) : w(null, a);
    return a;
};
function va(a, b) {
    Aa(b);
    a = w(a, 0 > b ? 0 : Ba(b) | 0);
    if (!v.TYPED_ARRAY_SUPPORT) for(var c = 0; c < b; ++c)a[c] = 0;
    return a;
}
v.allocUnsafe = function(a) {
    return va(null, a);
};
v.allocUnsafeSlow = function(a) {
    return va(null, a);
};
function xa(a, b) {
    var c = 0 > b.length ? 0 : Ba(b.length) | 0;
    a = w(a, c);
    for(var d = 0; d < c; d += 1)a[d] = b[d] & 255;
    return a;
}
function za(a, b) {
    if (z(b)) {
        var c = Ba(b.length) | 0;
        a = w(a, c);
        if (0 === a.length) return a;
        b.copy(a, 0, 0, c);
        return a;
    }
    if (b) {
        if ("undefined" !== typeof ArrayBuffer && b.buffer instanceof ArrayBuffer || "length" in b) return (c = "number" !== typeof b.length) || (c = b.length, c = c !== c), c ? w(a, 0) : xa(a, b);
        if ("Buffer" === b.type && sa(b.data)) return xa(a, b.data);
    }
    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function Ba(a) {
    if (a >= (v.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823)) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + (v.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823).toString(16) + " bytes");
    return a | 0;
}
v.isBuffer = Ca;
function z(a) {
    return !(null == a || !a._isBuffer);
}
v.compare = function(a, b) {
    if (!z(a) || !z(b)) throw new TypeError("Arguments must be Buffers");
    if (a === b) return 0;
    for(var c = a.length, d = b.length, e = 0, f = Math.min(c, d); e < f; ++e)if (a[e] !== b[e]) {
        c = a[e];
        d = b[e];
        break;
    }
    return c < d ? -1 : d < c ? 1 : 0;
};
v.isEncoding = function(a) {
    switch(String(a).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return !0;
        default:
            return !1;
    }
};
v.concat = function(a, b) {
    if (!sa(a)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (0 === a.length) return v.alloc(0);
    var c;
    if (void 0 === b) for(c = b = 0; c < a.length; ++c)b += a[c].length;
    b = v.allocUnsafe(b);
    var d = 0;
    for(c = 0; c < a.length; ++c){
        var e = a[c];
        if (!z(e)) throw new TypeError('"list" argument must be an Array of Buffers');
        e.copy(b, d);
        d += e.length;
    }
    return b;
};
function ya(a, b) {
    if (z(a)) return a.length;
    if ("undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(a) || a instanceof ArrayBuffer)) return a.byteLength;
    "string" !== typeof a && (a = "" + a);
    var c = a.length;
    if (0 === c) return 0;
    for(var d = !1;;)switch(b){
        case "ascii":
        case "latin1":
        case "binary":
            return c;
        case "utf8":
        case "utf-8":
        case void 0:
            return Da(a).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return 2 * c;
        case "hex":
            return c >>> 1;
        case "base64":
            return Ea(a).length;
        default:
            if (d) return Da(a).length;
            b = ("" + b).toLowerCase();
            d = !0;
    }
}
v.byteLength = ya;
function Fa(a, b, c) {
    var d = !1;
    if (void 0 === b || 0 > b) b = 0;
    if (b > this.length) return "";
    if (void 0 === c || c > this.length) c = this.length;
    if (0 >= c) return "";
    c >>>= 0;
    b >>>= 0;
    if (c <= b) return "";
    for(a || (a = "utf8");;)switch(a){
        case "hex":
            a = b;
            b = c;
            c = this.length;
            if (!a || 0 > a) a = 0;
            if (!b || 0 > b || b > c) b = c;
            d = "";
            for(c = a; c < b; ++c)a = d, d = this[c], d = 16 > d ? "0" + d.toString(16) : d.toString(16), d = a + d;
            return d;
        case "utf8":
        case "utf-8":
            return Ga(this, b, c);
        case "ascii":
            a = "";
            for(c = Math.min(this.length, c); b < c; ++b)a += String.fromCharCode(this[b] & 127);
            return a;
        case "latin1":
        case "binary":
            a = "";
            for(c = Math.min(this.length, c); b < c; ++b)a += String.fromCharCode(this[b]);
            return a;
        case "base64":
            return b = 0 === b && c === this.length ? oa(this) : oa(this.slice(b, c)), b;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            b = this.slice(b, c);
            c = "";
            for(a = 0; a < b.length; a += 2)c += String.fromCharCode(b[a] + 256 * b[a + 1]);
            return c;
        default:
            if (d) throw new TypeError("Unknown encoding: " + a);
            a = (a + "").toLowerCase();
            d = !0;
    }
}
v.prototype._isBuffer = !0;
function A(a, b, c) {
    var d = a[b];
    a[b] = a[c];
    a[c] = d;
}
v.prototype.swap16 = function() {
    var a = this.length;
    if (0 !== a % 2) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(var b = 0; b < a; b += 2)A(this, b, b + 1);
    return this;
};
v.prototype.swap32 = function() {
    var a = this.length;
    if (0 !== a % 4) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(var b = 0; b < a; b += 4)A(this, b, b + 3), A(this, b + 1, b + 2);
    return this;
};
v.prototype.swap64 = function() {
    var a = this.length;
    if (0 !== a % 8) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(var b = 0; b < a; b += 8)A(this, b, b + 7), A(this, b + 1, b + 6), A(this, b + 2, b + 5), A(this, b + 3, b + 4);
    return this;
};
v.prototype.toString = function() {
    var a = this.length | 0;
    return 0 === a ? "" : 0 === arguments.length ? Ga(this, 0, a) : Fa.apply(this, arguments);
};
v.prototype.equals = function(a) {
    if (!z(a)) throw new TypeError("Argument must be a Buffer");
    return this === a ? !0 : 0 === v.compare(this, a);
};
v.prototype.inspect = function() {
    var a = "";
    0 < this.length && (a = this.toString("hex", 0, 50).match(/.{2}/g).join(" "), 50 < this.length && (a += " ... "));
    return "<Buffer " + a + ">";
};
v.prototype.compare = function(a, b, c, d, e) {
    if (!z(a)) throw new TypeError("Argument must be a Buffer");
    void 0 === b && (b = 0);
    void 0 === c && (c = a ? a.length : 0);
    void 0 === d && (d = 0);
    void 0 === e && (e = this.length);
    if (0 > b || c > a.length || 0 > d || e > this.length) throw new RangeError("out of range index");
    if (d >= e && b >= c) return 0;
    if (d >= e) return -1;
    if (b >= c) return 1;
    b >>>= 0;
    c >>>= 0;
    d >>>= 0;
    e >>>= 0;
    if (this === a) return 0;
    var f = e - d, g = c - b, h = Math.min(f, g);
    d = this.slice(d, e);
    a = a.slice(b, c);
    for(b = 0; b < h; ++b)if (d[b] !== a[b]) {
        f = d[b];
        g = a[b];
        break;
    }
    return f < g ? -1 : g < f ? 1 : 0;
};
function Ha(a, b, c, d, e) {
    if (0 === a.length) return -1;
    "string" === typeof c ? (d = c, c = 0) : 2147483647 < c ? c = 2147483647 : -2147483648 > c && (c = -2147483648);
    c = +c;
    isNaN(c) && (c = e ? 0 : a.length - 1);
    0 > c && (c = a.length + c);
    if (c >= a.length) {
        if (e) return -1;
        c = a.length - 1;
    } else if (0 > c) {
        if (e) c = 0;
        else return -1;
    }
    "string" === typeof b && (b = v.from(b, d));
    if (z(b)) return 0 === b.length ? -1 : Ia(a, b, c, d, e);
    if ("number" === typeof b) return b &= 255, v.TYPED_ARRAY_SUPPORT && "function" === typeof Uint8Array.prototype.indexOf ? e ? Uint8Array.prototype.indexOf.call(a, b, c) : Uint8Array.prototype.lastIndexOf.call(a, b, c) : Ia(a, [
        b
    ], c, d, e);
    throw new TypeError("val must be string, number or Buffer");
}
function Ia(a2, b2, c, d, e) {
    function f(a, b) {
        return 1 === g ? a[b] : a.readUInt16BE(b * g);
    }
    var g = 1, h = a2.length, l = b2.length;
    if (void 0 !== d && (d = String(d).toLowerCase(), "ucs2" === d || "ucs-2" === d || "utf16le" === d || "utf-16le" === d)) {
        if (2 > a2.length || 2 > b2.length) return -1;
        g = 2;
        h /= 2;
        l /= 2;
        c /= 2;
    }
    if (e) for(d = -1; c < h; c++)if (f(a2, c) === f(b2, -1 === d ? 0 : c - d)) {
        if (-1 === d && (d = c), c - d + 1 === l) return d * g;
    } else -1 !== d && (c -= c - d), d = -1;
    else for(c + l > h && (c = h - l); 0 <= c; c--){
        h = !0;
        for(d = 0; d < l; d++)if (f(a2, c + d) !== f(b2, d)) {
            h = !1;
            break;
        }
        if (h) return c;
    }
    return -1;
}
v.prototype.includes = function(a, b, c) {
    return -1 !== this.indexOf(a, b, c);
};
v.prototype.indexOf = function(a, b, c) {
    return Ha(this, a, b, c, !0);
};
v.prototype.lastIndexOf = function(a, b, c) {
    return Ha(this, a, b, c, !1);
};
v.prototype.write = function(a, b, c, d) {
    if (void 0 === b) d = "utf8", c = this.length, b = 0;
    else if (void 0 === c && "string" === typeof b) d = b, c = this.length, b = 0;
    else if (isFinite(b)) b |= 0, isFinite(c) ? (c |= 0, void 0 === d && (d = "utf8")) : (d = c, c = void 0);
    else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    var e = this.length - b;
    if (void 0 === c || c > e) c = e;
    if (0 < a.length && (0 > c || 0 > b) || b > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    d || (d = "utf8");
    for(e = !1;;)switch(d){
        case "hex":
            a: {
                b = Number(b) || 0;
                d = this.length - b;
                c ? (c = Number(c), c > d && (c = d)) : c = d;
                d = a.length;
                if (0 !== d % 2) throw new TypeError("Invalid hex string");
                c > d / 2 && (c = d / 2);
                for(d = 0; d < c; ++d){
                    e = parseInt(a.substr(2 * d, 2), 16);
                    if (isNaN(e)) {
                        a = d;
                        break a;
                    }
                    this[b + d] = e;
                }
                a = d;
            }
            return a;
        case "utf8":
        case "utf-8":
            return Ja(Da(a, this.length - b), this, b, c);
        case "ascii":
            return Ja(Ka(a), this, b, c);
        case "latin1":
        case "binary":
            return Ja(Ka(a), this, b, c);
        case "base64":
            return Ja(Ea(a), this, b, c);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            d = a;
            e = this.length - b;
            for(var f = [], g = 0; g < d.length && !(0 > (e -= 2)); ++g){
                var h = d.charCodeAt(g);
                a = h >> 8;
                h %= 256;
                f.push(h);
                f.push(a);
            }
            return Ja(f, this, b, c);
        default:
            if (e) throw new TypeError("Unknown encoding: " + d);
            d = ("" + d).toLowerCase();
            e = !0;
    }
};
v.prototype.toJSON = function() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function Ga(a, b, c) {
    c = Math.min(a.length, c);
    for(var d = []; b < c;){
        var e = a[b], f = null, g = 239 < e ? 4 : 223 < e ? 3 : 191 < e ? 2 : 1;
        if (b + g <= c) switch(g){
            case 1:
                128 > e && (f = e);
                break;
            case 2:
                var h = a[b + 1];
                128 === (h & 192) && (e = (e & 31) << 6 | h & 63, 127 < e && (f = e));
                break;
            case 3:
                h = a[b + 1];
                var l = a[b + 2];
                128 === (h & 192) && 128 === (l & 192) && (e = (e & 15) << 12 | (h & 63) << 6 | l & 63, 2047 < e && (55296 > e || 57343 < e) && (f = e));
                break;
            case 4:
                h = a[b + 1];
                l = a[b + 2];
                var n = a[b + 3];
                128 === (h & 192) && 128 === (l & 192) && 128 === (n & 192) && (e = (e & 15) << 18 | (h & 63) << 12 | (l & 63) << 6 | n & 63, 65535 < e && 1114112 > e && (f = e));
        }
        null === f ? (f = 65533, g = 1) : 65535 < f && (f -= 65536, d.push(f >>> 10 & 1023 | 55296), f = 56320 | f & 1023);
        d.push(f);
        b += g;
    }
    a = d.length;
    if (a <= La) d = String.fromCharCode.apply(String, d);
    else {
        c = "";
        for(b = 0; b < a;)c += String.fromCharCode.apply(String, d.slice(b, b += La));
        d = c;
    }
    return d;
}
var La = 4096;
v.prototype.slice = function(a, b) {
    var c = this.length;
    a = ~~a;
    b = void 0 === b ? c : ~~b;
    0 > a ? (a += c, 0 > a && (a = 0)) : a > c && (a = c);
    0 > b ? (b += c, 0 > b && (b = 0)) : b > c && (b = c);
    b < a && (b = a);
    if (v.TYPED_ARRAY_SUPPORT) b = this.subarray(a, b), b.__proto__ = v.prototype;
    else {
        c = b - a;
        b = new v(c, void 0);
        for(var d = 0; d < c; ++d)b[d] = this[d + a];
    }
    return b;
};
function C(a, b, c) {
    if (0 !== a % 1 || 0 > a) throw new RangeError("offset is not uint");
    if (a + b > c) throw new RangeError("Trying to access beyond buffer length");
}
v.prototype.readUIntLE = function(a, b, c) {
    a |= 0;
    b |= 0;
    c || C(a, b, this.length);
    c = this[a];
    for(var d = 1, e = 0; ++e < b && (d *= 256);)c += this[a + e] * d;
    return c;
};
v.prototype.readUIntBE = function(a, b, c) {
    a |= 0;
    b |= 0;
    c || C(a, b, this.length);
    c = this[a + --b];
    for(var d = 1; 0 < b && (d *= 256);)c += this[a + --b] * d;
    return c;
};
v.prototype.readUInt8 = function(a, b) {
    b || C(a, 1, this.length);
    return this[a];
};
v.prototype.readUInt16LE = function(a, b) {
    b || C(a, 2, this.length);
    return this[a] | this[a + 1] << 8;
};
v.prototype.readUInt16BE = function(a, b) {
    b || C(a, 2, this.length);
    return this[a] << 8 | this[a + 1];
};
v.prototype.readUInt32LE = function(a, b) {
    b || C(a, 4, this.length);
    return (this[a] | this[a + 1] << 8 | this[a + 2] << 16) + 16777216 * this[a + 3];
};
v.prototype.readUInt32BE = function(a, b) {
    b || C(a, 4, this.length);
    return 16777216 * this[a] + (this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3]);
};
v.prototype.readIntLE = function(a, b, c) {
    a |= 0;
    b |= 0;
    c || C(a, b, this.length);
    c = this[a];
    for(var d = 1, e = 0; ++e < b && (d *= 256);)c += this[a + e] * d;
    c >= 128 * d && (c -= Math.pow(2, 8 * b));
    return c;
};
v.prototype.readIntBE = function(a, b, c) {
    a |= 0;
    b |= 0;
    c || C(a, b, this.length);
    c = b;
    for(var d = 1, e = this[a + --c]; 0 < c && (d *= 256);)e += this[a + --c] * d;
    e >= 128 * d && (e -= Math.pow(2, 8 * b));
    return e;
};
v.prototype.readInt8 = function(a, b) {
    b || C(a, 1, this.length);
    return this[a] & 128 ? -1 * (255 - this[a] + 1) : this[a];
};
v.prototype.readInt16LE = function(a, b) {
    b || C(a, 2, this.length);
    a = this[a] | this[a + 1] << 8;
    return a & 32768 ? a | 4294901760 : a;
};
v.prototype.readInt16BE = function(a, b) {
    b || C(a, 2, this.length);
    a = this[a + 1] | this[a] << 8;
    return a & 32768 ? a | 4294901760 : a;
};
v.prototype.readInt32LE = function(a, b) {
    b || C(a, 4, this.length);
    return this[a] | this[a + 1] << 8 | this[a + 2] << 16 | this[a + 3] << 24;
};
v.prototype.readInt32BE = function(a, b) {
    b || C(a, 4, this.length);
    return this[a] << 24 | this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3];
};
v.prototype.readFloatLE = function(a, b) {
    b || C(a, 4, this.length);
    return pa(this, a, !0, 23, 4);
};
v.prototype.readFloatBE = function(a, b) {
    b || C(a, 4, this.length);
    return pa(this, a, !1, 23, 4);
};
v.prototype.readDoubleLE = function(a, b) {
    b || C(a, 8, this.length);
    return pa(this, a, !0, 52, 8);
};
v.prototype.readDoubleBE = function(a, b) {
    b || C(a, 8, this.length);
    return pa(this, a, !1, 52, 8);
};
function D(a, b, c, d, e, f) {
    if (!z(a)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (b > e || b < f) throw new RangeError('"value" argument is out of bounds');
    if (c + d > a.length) throw new RangeError("Index out of range");
}
v.prototype.writeUIntLE = function(a, b, c, d) {
    a = +a;
    b |= 0;
    c |= 0;
    d || D(this, a, b, c, Math.pow(2, 8 * c) - 1, 0);
    d = 1;
    var e = 0;
    for(this[b] = a & 255; ++e < c && (d *= 256);)this[b + e] = a / d & 255;
    return b + c;
};
v.prototype.writeUIntBE = function(a, b, c, d) {
    a = +a;
    b |= 0;
    c |= 0;
    d || D(this, a, b, c, Math.pow(2, 8 * c) - 1, 0);
    d = c - 1;
    var e = 1;
    for(this[b + d] = a & 255; 0 <= --d && (e *= 256);)this[b + d] = a / e & 255;
    return b + c;
};
v.prototype.writeUInt8 = function(a, b, c) {
    a = +a;
    b |= 0;
    c || D(this, a, b, 1, 255, 0);
    v.TYPED_ARRAY_SUPPORT || (a = Math.floor(a));
    this[b] = a & 255;
    return b + 1;
};
function Ma(a, b, c, d) {
    0 > b && (b = 65535 + b + 1);
    for(var e = 0, f = Math.min(a.length - c, 2); e < f; ++e)a[c + e] = (b & 255 << 8 * (d ? e : 1 - e)) >>> 8 * (d ? e : 1 - e);
}
v.prototype.writeUInt16LE = function(a, b, c) {
    a = +a;
    b |= 0;
    c || D(this, a, b, 2, 65535, 0);
    v.TYPED_ARRAY_SUPPORT ? (this[b] = a & 255, this[b + 1] = a >>> 8) : Ma(this, a, b, !0);
    return b + 2;
};
v.prototype.writeUInt16BE = function(a, b, c) {
    a = +a;
    b |= 0;
    c || D(this, a, b, 2, 65535, 0);
    v.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 8, this[b + 1] = a & 255) : Ma(this, a, b, !1);
    return b + 2;
};
function Na(a, b, c, d) {
    0 > b && (b = 4294967295 + b + 1);
    for(var e = 0, f = Math.min(a.length - c, 4); e < f; ++e)a[c + e] = b >>> 8 * (d ? e : 3 - e) & 255;
}
v.prototype.writeUInt32LE = function(a, b, c) {
    a = +a;
    b |= 0;
    c || D(this, a, b, 4, 4294967295, 0);
    v.TYPED_ARRAY_SUPPORT ? (this[b + 3] = a >>> 24, this[b + 2] = a >>> 16, this[b + 1] = a >>> 8, this[b] = a & 255) : Na(this, a, b, !0);
    return b + 4;
};
v.prototype.writeUInt32BE = function(a, b, c) {
    a = +a;
    b |= 0;
    c || D(this, a, b, 4, 4294967295, 0);
    v.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 24, this[b + 1] = a >>> 16, this[b + 2] = a >>> 8, this[b + 3] = a & 255) : Na(this, a, b, !1);
    return b + 4;
};
v.prototype.writeIntLE = function(a, b, c, d) {
    a = +a;
    b |= 0;
    d || (d = Math.pow(2, 8 * c - 1), D(this, a, b, c, d - 1, -d));
    d = 0;
    var e = 1, f = 0;
    for(this[b] = a & 255; ++d < c && (e *= 256);)0 > a && 0 === f && 0 !== this[b + d - 1] && (f = 1), this[b + d] = (a / e >> 0) - f & 255;
    return b + c;
};
v.prototype.writeIntBE = function(a, b, c, d) {
    a = +a;
    b |= 0;
    d || (d = Math.pow(2, 8 * c - 1), D(this, a, b, c, d - 1, -d));
    d = c - 1;
    var e = 1, f = 0;
    for(this[b + d] = a & 255; 0 <= --d && (e *= 256);)0 > a && 0 === f && 0 !== this[b + d + 1] && (f = 1), this[b + d] = (a / e >> 0) - f & 255;
    return b + c;
};
v.prototype.writeInt8 = function(a, b, c) {
    a = +a;
    b |= 0;
    c || D(this, a, b, 1, 127, -128);
    v.TYPED_ARRAY_SUPPORT || (a = Math.floor(a));
    0 > a && (a = 255 + a + 1);
    this[b] = a & 255;
    return b + 1;
};
v.prototype.writeInt16LE = function(a, b, c) {
    a = +a;
    b |= 0;
    c || D(this, a, b, 2, 32767, -32768);
    v.TYPED_ARRAY_SUPPORT ? (this[b] = a & 255, this[b + 1] = a >>> 8) : Ma(this, a, b, !0);
    return b + 2;
};
v.prototype.writeInt16BE = function(a, b, c) {
    a = +a;
    b |= 0;
    c || D(this, a, b, 2, 32767, -32768);
    v.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 8, this[b + 1] = a & 255) : Ma(this, a, b, !1);
    return b + 2;
};
v.prototype.writeInt32LE = function(a, b, c) {
    a = +a;
    b |= 0;
    c || D(this, a, b, 4, 2147483647, -2147483648);
    v.TYPED_ARRAY_SUPPORT ? (this[b] = a & 255, this[b + 1] = a >>> 8, this[b + 2] = a >>> 16, this[b + 3] = a >>> 24) : Na(this, a, b, !0);
    return b + 4;
};
v.prototype.writeInt32BE = function(a, b, c) {
    a = +a;
    b |= 0;
    c || D(this, a, b, 4, 2147483647, -2147483648);
    0 > a && (a = 4294967295 + a + 1);
    v.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 24, this[b + 1] = a >>> 16, this[b + 2] = a >>> 8, this[b + 3] = a & 255) : Na(this, a, b, !1);
    return b + 4;
};
function Oa(a, b, c, d) {
    if (c + d > a.length) throw new RangeError("Index out of range");
    if (0 > c) throw new RangeError("Index out of range");
}
v.prototype.writeFloatLE = function(a, b, c) {
    c || Oa(this, a, b, 4);
    qa(this, a, b, !0, 23, 4);
    return b + 4;
};
v.prototype.writeFloatBE = function(a, b, c) {
    c || Oa(this, a, b, 4);
    qa(this, a, b, !1, 23, 4);
    return b + 4;
};
v.prototype.writeDoubleLE = function(a, b, c) {
    c || Oa(this, a, b, 8);
    qa(this, a, b, !0, 52, 8);
    return b + 8;
};
v.prototype.writeDoubleBE = function(a, b, c) {
    c || Oa(this, a, b, 8);
    qa(this, a, b, !1, 52, 8);
    return b + 8;
};
v.prototype.copy = function(a, b, c, d) {
    c || (c = 0);
    d || 0 === d || (d = this.length);
    b >= a.length && (b = a.length);
    b || (b = 0);
    0 < d && d < c && (d = c);
    if (d === c || 0 === a.length || 0 === this.length) return 0;
    if (0 > b) throw new RangeError("targetStart out of bounds");
    if (0 > c || c >= this.length) throw new RangeError("sourceStart out of bounds");
    if (0 > d) throw new RangeError("sourceEnd out of bounds");
    d > this.length && (d = this.length);
    a.length - b < d - c && (d = a.length - b + c);
    var e = d - c;
    if (this === a && c < b && b < d) for(d = e - 1; 0 <= d; --d)a[d + b] = this[d + c];
    else if (1000 > e || !v.TYPED_ARRAY_SUPPORT) for(d = 0; d < e; ++d)a[d + b] = this[d + c];
    else Uint8Array.prototype.set.call(a, this.subarray(c, c + e), b);
    return e;
};
v.prototype.fill = function(a, b, c, d) {
    if ("string" === typeof a) {
        "string" === typeof b ? (d = b, b = 0, c = this.length) : "string" === typeof c && (d = c, c = this.length);
        if (1 === a.length) {
            var e = a.charCodeAt(0);
            256 > e && (a = e);
        }
        if (void 0 !== d && "string" !== typeof d) throw new TypeError("encoding must be a string");
        if ("string" === typeof d && !v.isEncoding(d)) throw new TypeError("Unknown encoding: " + d);
    } else "number" === typeof a && (a &= 255);
    if (0 > b || this.length < b || this.length < c) throw new RangeError("Out of range index");
    if (c <= b) return this;
    b >>>= 0;
    c = void 0 === c ? this.length : c >>> 0;
    a || (a = 0);
    if ("number" === typeof a) for(d = b; d < c; ++d)this[d] = a;
    else for(a = z(a) ? a : Da(new v(a, d).toString()), e = a.length, d = 0; d < c - b; ++d)this[d + b] = a[d % e];
    return this;
};
var Pa = /[^+\/0-9A-Za-z-_]/g;
function Da(a, b) {
    b = b || Infinity;
    for(var c, d = a.length, e = null, f = [], g = 0; g < d; ++g){
        c = a.charCodeAt(g);
        if (55295 < c && 57344 > c) {
            if (!e) {
                if (56319 < c) {
                    -1 < (b -= 3) && f.push(239, 191, 189);
                    continue;
                } else if (g + 1 === d) {
                    -1 < (b -= 3) && f.push(239, 191, 189);
                    continue;
                }
                e = c;
                continue;
            }
            if (56320 > c) {
                -1 < (b -= 3) && f.push(239, 191, 189);
                e = c;
                continue;
            }
            c = (e - 55296 << 10 | c - 56320) + 65536;
        } else e && -1 < (b -= 3) && f.push(239, 191, 189);
        e = null;
        if (128 > c) {
            if (0 > --b) break;
            f.push(c);
        } else if (2048 > c) {
            if (0 > (b -= 2)) break;
            f.push(c >> 6 | 192, c & 63 | 128);
        } else if (65536 > c) {
            if (0 > (b -= 3)) break;
            f.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128);
        } else if (1114112 > c) {
            if (0 > (b -= 4)) break;
            f.push(c >> 18 | 240, c >> 12 & 63 | 128, c >> 6 & 63 | 128, c & 63 | 128);
        } else throw Error("Invalid code point");
    }
    return f;
}
function Ka(a) {
    for(var b = [], c = 0; c < a.length; ++c)b.push(a.charCodeAt(c) & 255);
    return b;
}
function Ea(a) {
    a = (a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, "")).replace(Pa, "");
    if (2 > a.length) a = "";
    else for(; 0 !== a.length % 4;)a += "=";
    la || ma();
    var b = a.length;
    if (0 < b % 4) throw Error("Invalid string. Length must be a multiple of 4");
    var c = "=" === a[b - 2] ? 2 : "=" === a[b - 1] ? 1 : 0;
    var d = new ka(3 * b / 4 - c);
    var e = 0 < c ? b - 4 : b;
    var f = 0;
    for(b = 0; b < e; b += 4){
        var g = u[a.charCodeAt(b)] << 18 | u[a.charCodeAt(b + 1)] << 12 | u[a.charCodeAt(b + 2)] << 6 | u[a.charCodeAt(b + 3)];
        d[f++] = g >> 16 & 255;
        d[f++] = g >> 8 & 255;
        d[f++] = g & 255;
    }
    2 === c ? (g = u[a.charCodeAt(b)] << 2 | u[a.charCodeAt(b + 1)] >> 4, d[f++] = g & 255) : 1 === c && (g = u[a.charCodeAt(b)] << 10 | u[a.charCodeAt(b + 1)] << 4 | u[a.charCodeAt(b + 2)] >> 2, d[f++] = g >> 8 & 255, d[f++] = g & 255);
    return d;
}
function Ja(a, b, c, d) {
    for(var e = 0; e < d && !(e + c >= b.length || e >= a.length); ++e)b[e + c] = a[e];
    return e;
}
function Ca(a) {
    return null != a && (!!a._isBuffer || Qa(a) || "function" === typeof a.readFloatLE && "function" === typeof a.slice && Qa(a.slice(0, 0)));
}
function Qa(a) {
    return !!a.constructor && "function" === typeof a.constructor.isBuffer && a.constructor.isBuffer(a);
}
var Ra = Object.freeze({
    __proto__: null,
    INSPECT_MAX_BYTES: 50,
    kMaxLength: ta,
    Buffer: v,
    SlowBuffer: function(a) {
        +a != a && (a = 0);
        return v.alloc(+a);
    },
    isBuffer: Ca
}), E = v, Sa = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {
};
function Ta(a, b) {
    return b = {
        exports: {
        }
    }, a(b, b.exports), b.exports;
}
function Ua() {
    throw Error("setTimeout has not been defined");
}
function Va() {
    throw Error("clearTimeout has not been defined");
}
var F = Ua, G = Va;
"function" === typeof ja.setTimeout && (F = setTimeout);
"function" === typeof ja.clearTimeout && (G = clearTimeout);
function Wa(a) {
    if (F === setTimeout) return setTimeout(a, 0);
    if ((F === Ua || !F) && setTimeout) return F = setTimeout, setTimeout(a, 0);
    try {
        return F(a, 0);
    } catch (b) {
        try {
            return F.call(null, a, 0);
        } catch (c) {
            return F.call(this, a, 0);
        }
    }
}
function Xa(a) {
    if (G === clearTimeout) return clearTimeout(a);
    if ((G === Va || !G) && clearTimeout) return G = clearTimeout, clearTimeout(a);
    try {
        return G(a);
    } catch (b) {
        try {
            return G.call(null, a);
        } catch (c) {
            return G.call(this, a);
        }
    }
}
var H = [], I = !1, J, Ya = -1;
function Za() {
    I && J && (I = !1, J.length ? H = J.concat(H) : Ya = -1, H.length && $a());
}
function $a() {
    if (!I) {
        var a = Wa(Za);
        I = !0;
        for(var b = H.length; b;){
            J = H;
            for(H = []; ++Ya < b;)J && J[Ya].run();
            Ya = -1;
            b = H.length;
        }
        J = null;
        I = !1;
        Xa(a);
    }
}
function ab(a) {
    var b = Array(arguments.length - 1);
    if (1 < arguments.length) for(var c = 1; c < arguments.length; c++)b[c - 1] = arguments[c];
    H.push(new bb(a, b));
    1 !== H.length || I || Wa($a);
}
function bb(a, b) {
    this.fun = a;
    this.array = b;
}
bb.prototype.run = function() {
    this.fun.apply(null, this.array);
};
function K() {
}
var L = ja.performance || {
}, cb = L.now || L.mozNow || L.msNow || L.oNow || L.webkitNow || function() {
    return (new Date).getTime();
}, db = new Date, eb = {
    nextTick: ab,
    title: "browser",
    browser: !0,
    env: {
    },
    argv: [],
    version: "",
    versions: {
    },
    on: K,
    addListener: K,
    once: K,
    off: K,
    removeListener: K,
    removeAllListeners: K,
    emit: K,
    binding: function() {
        throw Error("process.binding is not supported");
    },
    cwd: function() {
        return "/";
    },
    chdir: function() {
        throw Error("process.chdir is not supported");
    },
    umask: function() {
        return 0;
    },
    hrtime: function(a) {
        var b = 0.001 * cb.call(L), c = Math.floor(b);
        b = Math.floor(b % 1 * 1000000000);
        a && (c -= a[0], b -= a[1], 0 > b && (c--, b += 1000000000));
        return [
            c,
            b
        ];
    },
    platform: "browser",
    release: {
    },
    config: {
    },
    uptime: function() {
        return (new Date - db) / 1000;
    }
}, fb = Ta(function(a3, b3) {
    function c1(a, b) {
        for(var c in a)b[c] = a[c];
    }
    function d(a, b, c) {
        return e(a, b, c);
    }
    var e = Ra.Buffer;
    e.from && e.alloc && e.allocUnsafe && e.allocUnsafeSlow ? a3.exports = Ra : (c1(Ra, b3), b3.Buffer = d);
    d.prototype = Object.create(e.prototype);
    c1(e, d);
    d.from = function(a, b, c) {
        if ("number" === typeof a) throw new TypeError("Argument must not be a number");
        return e(a, b, c);
    };
    d.alloc = function(a, b, c) {
        if ("number" !== typeof a) throw new TypeError("Argument must be a number");
        a = e(a);
        void 0 !== b ? "string" === typeof c ? a.fill(b, c) : a.fill(b) : a.fill(0);
        return a;
    };
    d.allocUnsafe = function(a) {
        if ("number" !== typeof a) throw new TypeError("Argument must be a number");
        return e(a);
    };
    d.allocUnsafeSlow = function(a) {
        if ("number" !== typeof a) throw new TypeError("Argument must be a number");
        return Ra.SlowBuffer(a);
    };
}), gb = Ta(function(a4, b4) {
    function c2() {
        throw Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11");
    }
    function d1(a, b) {
        if ("number" !== typeof a || a !== a) throw new TypeError("offset must be a number");
        if (a > p || 0 > a) throw new TypeError("offset must be a uint32");
        if (a > n || a > b) throw new RangeError("offset out of range");
    }
    function e(a, b, c) {
        if ("number" !== typeof a || a !== a) throw new TypeError("size must be a number");
        if (a > p || 0 > a) throw new TypeError("size must be a uint32");
        if (a + b > c || a > n) throw new RangeError("buffer too small");
    }
    function f1(a, b, c, f) {
        if (!(l.isBuffer(a) || a instanceof Sa.Uint8Array)) throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
        if ("function" === typeof b) f = b, b = 0, c = a.length;
        else if ("function" === typeof c) f = c, c = a.length - b;
        else if ("function" !== typeof f) throw new TypeError('"cb" argument must be a function');
        d1(b, a.length);
        e(c, b, a.length);
        return g(a, b, c, f);
    }
    function g(a, b, c, d) {
        b = new Uint8Array(a.buffer, b, c);
        r.getRandomValues(b);
        if (d) ab(function() {
            d(null, a);
        });
        else return a;
    }
    function h(a, b, c) {
        "undefined" === typeof b && (b = 0);
        if (!(l.isBuffer(a) || a instanceof Sa.Uint8Array)) throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
        d1(b, a.length);
        void 0 === c && (c = a.length - b);
        e(c, b, a.length);
        return g(a, b, c);
    }
    var l = fb.Buffer, n = fb.kMaxLength, r = Sa.crypto || Sa.msCrypto, p = Math.pow(2, 32) - 1;
    r && r.getRandomValues ? (b4.randomFill = f1, b4.randomFillSync = h) : (b4.randomFill = c2, b4.randomFillSync = c2);
}), hb = Ta(function(a) {
    a.exports = gb;
}).randomFillSync, ib = Math.floor(0.001 * (Date.now() - performance.now()));
function M(a) {
    if ("string" !== typeof a) throw new TypeError("Path must be a string. Received " + JSON.stringify(a));
}
function jb(a, b) {
    for(var c = "", d = 0, e = -1, f = 0, g, h = 0; h <= a.length; ++h){
        if (h < a.length) g = a.charCodeAt(h);
        else if (47 === g) break;
        else g = 47;
        if (47 === g) {
            if (e !== h - 1 && 1 !== f) {
                if (e !== h - 1 && 2 === f) {
                    if (2 > c.length || 2 !== d || 46 !== c.charCodeAt(c.length - 1) || 46 !== c.charCodeAt(c.length - 2)) {
                        if (2 < c.length) {
                            if (e = c.lastIndexOf("/"), e !== c.length - 1) {
                                -1 === e ? (c = "", d = 0) : (c = c.slice(0, e), d = c.length - 1 - c.lastIndexOf("/"));
                                e = h;
                                f = 0;
                                continue;
                            }
                        } else if (2 === c.length || 1 === c.length) {
                            c = "";
                            d = 0;
                            e = h;
                            f = 0;
                            continue;
                        }
                    }
                    b && (c = 0 < c.length ? c + "/.." : "..", d = 2);
                } else c = 0 < c.length ? c + ("/" + a.slice(e + 1, h)) : a.slice(e + 1, h), d = h - e - 1;
            }
            e = h;
            f = 0;
        } else 46 === g && -1 !== f ? ++f : f = -1;
    }
    return c;
}
var kb = {
    resolve: function() {
        for(var a = "", b = !1, c, d = arguments.length - 1; -1 <= d && !b; d--){
            if (0 <= d) var e = arguments[d];
            else void 0 === c && (c = eb.cwd()), e = c;
            M(e);
            0 !== e.length && (a = e + "/" + a, b = 47 === e.charCodeAt(0));
        }
        a = jb(a, !b);
        return b ? 0 < a.length ? "/" + a : "/" : 0 < a.length ? a : ".";
    },
    normalize: function(a) {
        M(a);
        if (0 === a.length) return ".";
        var b = 47 === a.charCodeAt(0), c = 47 === a.charCodeAt(a.length - 1);
        a = jb(a, !b);
        0 !== a.length || b || (a = ".");
        0 < a.length && c && (a += "/");
        return b ? "/" + a : a;
    },
    isAbsolute: function(a) {
        M(a);
        return 0 < a.length && 47 === a.charCodeAt(0);
    },
    join: function() {
        if (0 === arguments.length) return ".";
        for(var a, b = 0; b < arguments.length; ++b){
            var c = arguments[b];
            M(c);
            0 < c.length && (a = void 0 === a ? c : a + ("/" + c));
        }
        return void 0 === a ? "." : kb.normalize(a);
    },
    relative: function(a, b) {
        M(a);
        M(b);
        if (a === b) return "";
        a = kb.resolve(a);
        b = kb.resolve(b);
        if (a === b) return "";
        for(var c = 1; c < a.length && 47 === a.charCodeAt(c); ++c);
        for(var d = a.length, e = d - c, f = 1; f < b.length && 47 === b.charCodeAt(f); ++f);
        for(var g = b.length - f, h = e < g ? e : g, l = -1, n = 0; n <= h; ++n){
            if (n === h) {
                if (g > h) {
                    if (47 === b.charCodeAt(f + n)) return b.slice(f + n + 1);
                    if (0 === n) return b.slice(f + n);
                } else e > h && (47 === a.charCodeAt(c + n) ? l = n : 0 === n && (l = 0));
                break;
            }
            var r = a.charCodeAt(c + n), p = b.charCodeAt(f + n);
            if (r !== p) break;
            else 47 === r && (l = n);
        }
        e = "";
        for(n = c + l + 1; n <= d; ++n)if (n === d || 47 === a.charCodeAt(n)) e = 0 === e.length ? e + ".." : e + "/..";
        if (0 < e.length) return e + b.slice(f + l);
        f += l;
        47 === b.charCodeAt(f) && ++f;
        return b.slice(f);
    },
    _makeLong: function(a) {
        return a;
    },
    dirname: function(a) {
        M(a);
        if (0 === a.length) return ".";
        for(var b = a.charCodeAt(0), c = 47 === b, d = -1, e = !0, f = a.length - 1; 1 <= f; --f)if (b = a.charCodeAt(f), 47 === b) {
            if (!e) {
                d = f;
                break;
            }
        } else e = !1;
        return -1 === d ? c ? "/" : "." : c && 1 === d ? "//" : a.slice(0, d);
    },
    basename: function(a, b) {
        if (void 0 !== b && "string" !== typeof b) throw new TypeError('"ext" argument must be a string');
        M(a);
        var c = 0, d = -1, e = !0, f;
        if (void 0 !== b && 0 < b.length && b.length <= a.length) {
            if (b.length === a.length && b === a) return "";
            var g = b.length - 1, h = -1;
            for(f = a.length - 1; 0 <= f; --f){
                var l = a.charCodeAt(f);
                if (47 === l) {
                    if (!e) {
                        c = f + 1;
                        break;
                    }
                } else -1 === h && (e = !1, h = f + 1), 0 <= g && (l === b.charCodeAt(g) ? -1 === --g && (d = f) : (g = -1, d = h));
            }
            c === d ? d = h : -1 === d && (d = a.length);
            return a.slice(c, d);
        }
        for(f = a.length - 1; 0 <= f; --f)if (47 === a.charCodeAt(f)) {
            if (!e) {
                c = f + 1;
                break;
            }
        } else -1 === d && (e = !1, d = f + 1);
        return -1 === d ? "" : a.slice(c, d);
    },
    extname: function(a) {
        M(a);
        for(var b = -1, c = 0, d = -1, e = !0, f = 0, g = a.length - 1; 0 <= g; --g){
            var h = a.charCodeAt(g);
            if (47 === h) {
                if (!e) {
                    c = g + 1;
                    break;
                }
            } else -1 === d && (e = !1, d = g + 1), 46 === h ? -1 === b ? b = g : 1 !== f && (f = 1) : -1 !== b && (f = -1);
        }
        return -1 === b || -1 === d || 0 === f || 1 === f && b === d - 1 && b === c + 1 ? "" : a.slice(b, d);
    },
    format: function(a) {
        if (null === a || "object" !== typeof a) throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof a);
        var b = a.dir || a.root, c = a.base || (a.name || "") + (a.ext || "");
        a = b ? b === a.root ? b + c : b + "/" + c : c;
        return a;
    },
    parse: function(a) {
        M(a);
        var b = {
            root: "",
            dir: "",
            base: "",
            ext: "",
            name: ""
        };
        if (0 === a.length) return b;
        var c = a.charCodeAt(0), d = 47 === c;
        if (d) {
            b.root = "/";
            var e = 1;
        } else e = 0;
        for(var f = -1, g = 0, h = -1, l = !0, n = a.length - 1, r = 0; n >= e; --n)if (c = a.charCodeAt(n), 47 === c) {
            if (!l) {
                g = n + 1;
                break;
            }
        } else -1 === h && (l = !1, h = n + 1), 46 === c ? -1 === f ? f = n : 1 !== r && (r = 1) : -1 !== f && (r = -1);
        -1 === f || -1 === h || 0 === r || 1 === r && f === h - 1 && f === g + 1 ? -1 !== h && (b.base = 0 === g && d ? b.name = a.slice(1, h) : b.name = a.slice(g, h)) : (0 === g && d ? (b.name = a.slice(1, f), b.base = a.slice(1, h)) : (b.name = a.slice(g, f), b.base = a.slice(g, h)), b.ext = a.slice(f, h));
        0 < g ? b.dir = a.slice(0, g - 1) : d && (b.dir = "/");
        return b;
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
}, lb = kb.posix = kb, mb = Object.freeze({
    __proto__: null,
    "default": lb,
    __moduleExports: lb
}), pb = {
    hrtime: function(a) {
        return function(b) {
            b = a(b);
            return 1000000000 * b[0] + b[1];
        };
    }(function(a) {
        var b = 0.001 * performance.now(), c = Math.floor(b) + ib;
        b = Math.floor(b % 1 * 1000000000);
        a && (c -= a[0], b -= a[1], 0 > b && (c--, b += 1000000000));
        return [
            c,
            b
        ];
    }),
    exit: function(a) {
        throw new nb(a);
    },
    kill: function(a) {
        throw new ob(a);
    },
    randomFillSync: hb,
    isTTY: function() {
        return !0;
    },
    path: mb,
    fs: null
}, N, O = k(1), P = k(2), Q = k(4), R = k(8), S = k(16), qb = k(32), T = k(64), V = k(128), sb = k(256), tb = k(512), ub = k(1024), vb = k(2048), wb = k(4096), xb = k(8192), yb = k(16384), zb = k(32768), Ab = k(65536), Bb = k(131072), Cb = k(262144), Db = k(524288), Eb = k(1048576), W = k(2097152), Ib = k(4194304), Jb = k(8388608), Kb = k(16777216), Lb = k(33554432), Mb = k(67108864), X = k(134217728), Nb = k(268435456), Ob = O | P | Q | R | S | qb | T | V | sb | tb | ub | vb | wb | xb | yb | zb | Ab | Bb | Cb | Db | Eb | W | Jb | Ib | Kb | Mb | Lb | X | Nb, Pb = O | P | Q | R | S | qb | T | V | sb | W | Ib | Jb | X, Qb = k(0), Rb = R | S | V | tb | ub | vb | wb | xb | yb | zb | Ab | Bb | Cb | Db | Eb | W | Jb | Kb | Mb | Lb | X, Sb = Rb | Pb, Tb = P | R | T | W | X | Nb, Ub = P | R | T | W | X, Vb = k(0), Wb = {
    E2BIG: 1,
    EACCES: 2,
    EADDRINUSE: 3,
    EADDRNOTAVAIL: 4,
    EAFNOSUPPORT: 5,
    EALREADY: 7,
    EAGAIN: 6,
    EBADF: 8,
    EBADMSG: 9,
    EBUSY: 10,
    ECANCELED: 11,
    ECHILD: 12,
    ECONNABORTED: 13,
    ECONNREFUSED: 14,
    ECONNRESET: 15,
    EDEADLOCK: 16,
    EDESTADDRREQ: 17,
    EDOM: 18,
    EDQUOT: 19,
    EEXIST: 20,
    EFAULT: 21,
    EFBIG: 22,
    EHOSTDOWN: 23,
    EHOSTUNREACH: 23,
    EIDRM: 24,
    EILSEQ: 25,
    EINPROGRESS: 26,
    EINTR: 27,
    EINVAL: 28,
    EIO: 29,
    EISCONN: 30,
    EISDIR: 31,
    ELOOP: 32,
    EMFILE: 33,
    EMLINK: 34,
    EMSGSIZE: 35,
    EMULTIHOP: 36,
    ENAMETOOLONG: 37,
    ENETDOWN: 38,
    ENETRESET: 39,
    ENETUNREACH: 40,
    ENFILE: 41,
    ENOBUFS: 42,
    ENODEV: 43,
    ENOENT: 44,
    ENOEXEC: 45,
    ENOLCK: 46,
    ENOLINK: 47,
    ENOMEM: 48,
    ENOMSG: 49,
    ENOPROTOOPT: 50,
    ENOSPC: 51,
    ENOSYS: 52,
    ENOTCONN: 53,
    ENOTDIR: 54,
    ENOTEMPTY: 55,
    ENOTRECOVERABLE: 56,
    ENOTSOCK: 57,
    ENOTTY: 59,
    ENXIO: 60,
    EOVERFLOW: 61,
    EOWNERDEAD: 62,
    EPERM: 63,
    EPIPE: 64,
    EPROTO: 65,
    EPROTONOSUPPORT: 66,
    EPROTOTYPE: 67,
    ERANGE: 68,
    EROFS: 69,
    ESPIPE: 70,
    ESRCH: 71,
    ESTALE: 72,
    ETIMEDOUT: 73,
    ETXTBSY: 74,
    EXDEV: 75
}, Xb = (N = {
}, N[6] = "SIGHUP", N[8] = "SIGINT", N[11] = "SIGQUIT", N[7] = "SIGILL", N[15] = "SIGTRAP", N[0] = "SIGABRT", N[2] = "SIGBUS", N[5] = "SIGFPE", N[9] = "SIGKILL", N[20] = "SIGUSR1", N[12] = "SIGSEGV", N[21] = "SIGUSR2", N[10] = "SIGPIPE", N[1] = "SIGALRM", N[14] = "SIGTERM", N[3] = "SIGCHLD", N[4] = "SIGCONT", N[13] = "SIGSTOP", N[16] = "SIGTSTP", N[17] = "SIGTTIN", N[18] = "SIGTTOU", N[19] = "SIGURG", N[23] = "SIGXCPU", N[24] = "SIGXFSZ", N[22] = "SIGVTALRM", N), Yb = O | P | S | V | W | X, Zb = O | T | S | V | W | X;
function Y(a) {
    var b = Math.trunc(a);
    a = k(Math.round(1000000 * (a - b)));
    return k(b) * k(1000000) + a;
}
function $b(a) {
    "number" === typeof a && (a = Math.trunc(a));
    a = k(a);
    return Number(a / k(1000000));
}
function Z(a) {
    return function() {
        for(var b = [], c = 0; c < arguments.length; c++)b[c] = arguments[c];
        try {
            return a.apply(void 0, fa(b));
        } catch (d) {
            if (d && d.code && "string" === typeof d.code) return Wb[d.code] || 28;
            if (d instanceof ac) return d.errno;
            throw d;
        }
    };
}
function bc(a, b) {
    var c = a.FD_MAP.get(b);
    if (!c) throw new ac(8);
    if (void 0 === c.filetype) {
        var d = a.bindings.fs.fstatSync(c.real);
        a = cc(a, b, d);
        b = a.rightsBase;
        d = a.rightsInheriting;
        c.filetype = a.filetype;
        c.rights || (c.rights = {
            base: b,
            inheriting: d
        });
    }
    return c;
}
function cc(a, b, c) {
    switch(!0){
        case c.isBlockDevice():
            return {
                filetype: 1,
                rightsBase: Ob,
                rightsInheriting: Ob
            };
        case c.isCharacterDevice():
            return void 0 !== b && a.bindings.isTTY(b) ? {
                filetype: 2,
                rightsBase: Ub,
                rightsInheriting: Vb
            } : {
                filetype: 2,
                rightsBase: Ob,
                rightsInheriting: Ob
            };
        case c.isDirectory():
            return {
                filetype: 3,
                rightsBase: Rb,
                rightsInheriting: Sb
            };
        case c.isFIFO():
            return {
                filetype: 6,
                rightsBase: Tb,
                rightsInheriting: Ob
            };
        case c.isFile():
            return {
                filetype: 4,
                rightsBase: Pb,
                rightsInheriting: Qb
            };
        case c.isSocket():
            return {
                filetype: 6,
                rightsBase: Tb,
                rightsInheriting: Ob
            };
        case c.isSymbolicLink():
            return {
                filetype: 7,
                rightsBase: k(0),
                rightsInheriting: k(0)
            };
        default:
            return {
                filetype: 0,
                rightsBase: k(0),
                rightsInheriting: k(0)
            };
    }
}
var ac = function(a) {
    function b(c) {
        var d = a.call(this) || this;
        d.errno = c;
        Object.setPrototypeOf(d, b.prototype);
        return d;
    }
    ba(b, a);
    return b;
}(Error), nb = function(a) {
    function b(c) {
        var d = a.call(this, "WASI Exit error: " + c) || this;
        d.code = c;
        Object.setPrototypeOf(d, b.prototype);
        return d;
    }
    ba(b, a);
    return b;
}(Error), ob = function(a) {
    function b(c) {
        var d = a.call(this, "WASI Kill signal: " + c) || this;
        d.signal = c;
        Object.setPrototypeOf(d, b.prototype);
        return d;
    }
    ba(b, a);
    return b;
}(Error), dc = function() {
    function a5(a6) {
        function b5(a) {
            switch(a){
                case 1:
                    return r1.hrtime();
                case 0:
                    return Y(Date.now());
                case 2:
                case 3:
                    return r1.hrtime() - ec;
                default:
                    return null;
            }
        }
        function d2(a, b) {
            a = bc(g1, a);
            if (b !== k(0) && (a.rights.base & b) === k(0)) throw new ac(63);
            return a;
        }
        function e1(a, b6) {
            g1.refreshMemory();
            return Array.from({
                length: b6
            }, function(b, c) {
                c = a + 8 * c;
                b = g1.view.getUint32(c, !0);
                c = g1.view.getUint32(c + 4, !0);
                return new Uint8Array(g1.memory.buffer, b, c);
            });
        }
        var f2, g1 = this, h1 = {
        };
        a6 && a6.preopens ? h1 = a6.preopens : a6 && a6.preopenDirectories && (h1 = a6.preopenDirectories);
        var l1 = {
        };
        a6 && a6.env && (l1 = a6.env);
        var n1 = [];
        a6 && a6.args && (n1 = a6.args);
        var r1 = pb;
        a6 && a6.bindings && (r1 = a6.bindings);
        this.view = this.memory = void 0;
        this.bindings = r1;
        this.FD_MAP = new Map([
            [
                0,
                {
                    real: 0,
                    filetype: 2,
                    rights: {
                        base: Yb,
                        inheriting: k(0)
                    },
                    path: void 0
                }
            ],
            [
                1,
                {
                    real: 1,
                    filetype: 2,
                    rights: {
                        base: Zb,
                        inheriting: k(0)
                    },
                    path: void 0
                }
            ],
            [
                2,
                {
                    real: 2,
                    filetype: 2,
                    rights: {
                        base: Zb,
                        inheriting: k(0)
                    },
                    path: void 0
                }
            ]
        ]);
        var p1 = this.bindings.fs, y1 = this.bindings.path;
        try {
            for(var ua = ca(Object.entries(h1)), ea = ua.next(); !ea.done; ea = ua.next()){
                var rb = da(ea.value, 2), fc = rb[0], Fb = rb[1], gc = p1.openSync(Fb, p1.constants.O_RDONLY), hc = fa(this.FD_MAP.keys()).reverse()[0] + 1;
                this.FD_MAP.set(hc, {
                    real: gc,
                    filetype: 3,
                    rights: {
                        base: Rb,
                        inheriting: Sb
                    },
                    fakePath: fc,
                    path: Fb
                });
            }
        } catch (t1) {
            var Gb = {
                error: t1
            };
        } finally{
            try {
                ea && !ea.done && (f2 = ua.return) && f2.call(ua);
            } finally{
                if (Gb) throw Gb.error;
            }
        }
        var ec = r1.hrtime();
        this.wasiImport = {
            args_get: function(a7, b) {
                g1.refreshMemory();
                var c = a7, d = b;
                n1.forEach(function(a) {
                    g1.view.setUint32(c, d, !0);
                    c += 4;
                    d += E.from(g1.memory.buffer).write(a + "\x00", d);
                });
                return 0;
            },
            args_sizes_get: function(a8, b7) {
                g1.refreshMemory();
                g1.view.setUint32(a8, n1.length, !0);
                a8 = n1.reduce(function(a, b) {
                    return a + E.byteLength(b) + 1;
                }, 0);
                g1.view.setUint32(b7, a8, !0);
                return 0;
            },
            environ_get: function(a9, b8) {
                g1.refreshMemory();
                var c = a9, d = b8;
                Object.entries(l1).forEach(function(a) {
                    var b = da(a, 2);
                    a = b[0];
                    b = b[1];
                    g1.view.setUint32(c, d, !0);
                    c += 4;
                    d += E.from(g1.memory.buffer).write(a + "=" + b + "\x00", d);
                });
                return 0;
            },
            environ_sizes_get: function(a10, b9) {
                g1.refreshMemory();
                var c = Object.entries(l1).map(function(a) {
                    a = da(a, 2);
                    return a[0] + "=" + a[1] + "\x00";
                }), d = c.reduce(function(a, b) {
                    return a + E.byteLength(b);
                }, 0);
                g1.view.setUint32(a10, c.length, !0);
                g1.view.setUint32(b9, d, !0);
                return 0;
            },
            clock_res_get: function(a, b) {
                switch(a){
                    case 1:
                    case 2:
                    case 3:
                        var c = k(1);
                        break;
                    case 0:
                        c = k(1000);
                }
                g1.view.setBigUint64(b, c);
                return 0;
            },
            clock_time_get: function(a, c, d) {
                g1.refreshMemory();
                a = b5(a);
                if (null === a) return 28;
                g1.view.setBigUint64(d, k(a), !0);
                return 0;
            },
            fd_advise: Z(function(a) {
                d2(a, V);
                return 52;
            }),
            fd_allocate: Z(function(a) {
                d2(a, sb);
                return 52;
            }),
            fd_close: Z(function(a) {
                var b = d2(a, k(0));
                p1.closeSync(b.real);
                g1.FD_MAP.delete(a);
                return 0;
            }),
            fd_datasync: Z(function(a) {
                a = d2(a, O);
                p1.fdatasyncSync(a.real);
                return 0;
            }),
            fd_fdstat_get: Z(function(a, b) {
                a = d2(a, k(0));
                g1.refreshMemory();
                g1.view.setUint8(b, a.filetype);
                g1.view.setUint16(b + 2, 0, !0);
                g1.view.setUint16(b + 4, 0, !0);
                g1.view.setBigUint64(b + 8, k(a.rights.base), !0);
                g1.view.setBigUint64(b + 8 + 8, k(a.rights.inheriting), !0);
                return 0;
            }),
            fd_fdstat_set_flags: Z(function(a) {
                d2(a, R);
                return 52;
            }),
            fd_fdstat_set_rights: Z(function(a, b, c) {
                a = d2(a, k(0));
                if ((a.rights.base | b) > a.rights.base || (a.rights.inheriting | c) > a.rights.inheriting) return 63;
                a.rights.base = b;
                a.rights.inheriting = c;
                return 0;
            }),
            fd_filestat_get: Z(function(a, b) {
                a = d2(a, W);
                var c = p1.fstatSync(a.real);
                g1.refreshMemory();
                g1.view.setBigUint64(b, k(c.dev), !0);
                b += 8;
                g1.view.setBigUint64(b, k(c.ino), !0);
                b += 8;
                g1.view.setUint8(b, a.filetype);
                b += 8;
                g1.view.setBigUint64(b, k(c.nlink), !0);
                b += 8;
                g1.view.setBigUint64(b, k(c.size), !0);
                b += 8;
                g1.view.setBigUint64(b, Y(c.atimeMs), !0);
                b += 8;
                g1.view.setBigUint64(b, Y(c.mtimeMs), !0);
                g1.view.setBigUint64(b + 8, Y(c.ctimeMs), !0);
                return 0;
            }),
            fd_filestat_set_size: Z(function(a, b) {
                a = d2(a, Ib);
                p1.ftruncateSync(a.real, Number(b));
                return 0;
            }),
            fd_filestat_set_times: Z(function(a, c, e, g) {
                a = d2(a, Jb);
                var f = p1.fstatSync(a.real), t = f.atime;
                f = f.mtime;
                var q = $b(b5(0));
                if (3 === (g & 3) || 12 === (g & 12)) return 28;
                1 === (g & 1) ? t = $b(c) : 2 === (g & 2) && (t = q);
                4 === (g & 4) ? f = $b(e) : 8 === (g & 8) && (f = q);
                p1.futimesSync(a.real, new Date(t), new Date(f));
                return 0;
            }),
            fd_prestat_get: Z(function(a, b) {
                a = d2(a, k(0));
                if (!a.path) return 28;
                g1.refreshMemory();
                g1.view.setUint8(b, 0);
                g1.view.setUint32(b + 4, E.byteLength(a.fakePath), !0);
                return 0;
            }),
            fd_prestat_dir_name: Z(function(a, b, c) {
                a = d2(a, k(0));
                if (!a.path) return 28;
                g1.refreshMemory();
                E.from(g1.memory.buffer).write(a.fakePath, b, c, "utf8");
                return 0;
            }),
            fd_pwrite: Z(function(a11, b10, c, f, h) {
                var t = d2(a11, T | Q), q = 0;
                e1(b10, c).forEach(function(a) {
                    for(var b = 0; b < a.byteLength;)b += p1.writeSync(t.real, a, b, a.byteLength - b, Number(f) + q + b);
                    q += b;
                });
                g1.view.setUint32(h, q, !0);
                return 0;
            }),
            fd_write: Z(function(a12, b11, c3, f) {
                var t = d2(a12, T), q = 0;
                e1(b11, c3).forEach(function(a) {
                    for(var b = 0; b < a.byteLength;){
                        var c = p1.writeSync(t.real, a, b, a.byteLength - b, t.offset ? Number(t.offset) : null);
                        t.offset && (t.offset += k(c));
                        b += c;
                    }
                    q += b;
                });
                g1.view.setUint32(f, q, !0);
                return 0;
            }),
            fd_pread: Z(function(a, b, c, f, h) {
                var t;
                a = d2(a, P | Q);
                var q = 0;
                try {
                    var x = ca(e1(b, c)), l = x.next();
                    a: for(; !l.done; l = x.next()){
                        var n = l.value;
                        for(b = 0; b < n.byteLength;){
                            var ic = n.byteLength - b, B = p1.readSync(a.real, n, b, n.byteLength - b, Number(f) + q + b);
                            b += B;
                            q += B;
                            if (0 === B || B < ic) break a;
                        }
                        q += b;
                    }
                } catch (U) {
                    var r = {
                        error: U
                    };
                } finally{
                    try {
                        l && !l.done && (t = x.return) && t.call(x);
                    } finally{
                        if (r) throw r.error;
                    }
                }
                g1.view.setUint32(h, q, !0);
                return 0;
            }),
            fd_read: Z(function(a, b, c, f) {
                var t;
                a = d2(a, P);
                var q = 0 === a.real, h = 0;
                try {
                    var x = ca(e1(b, c)), l = x.next();
                    a: for(; !l.done; l = x.next()){
                        var n = l.value;
                        for(b = 0; b < n.byteLength;){
                            var B = n.byteLength - b, r = p1.readSync(a.real, n, b, B, q || void 0 === a.offset ? null : Number(a.offset));
                            q || (a.offset = (a.offset ? a.offset : k(0)) + k(r));
                            b += r;
                            h += r;
                            if (0 === r || r < B) break a;
                        }
                    }
                } catch (U) {
                    var y = {
                        error: U
                    };
                } finally{
                    try {
                        l && !l.done && (t = x.return) && t.call(x);
                    } finally{
                        if (y) throw y.error;
                    }
                }
                g1.view.setUint32(f, h, !0);
                return 0;
            }),
            fd_readdir: Z(function(a, b, c, e, f) {
                a = d2(a, yb);
                g1.refreshMemory();
                var t = p1.readdirSync(a.path, {
                    withFileTypes: !0
                }), q = b;
                for(e = Number(e); e < t.length; e += 1){
                    var h = t[e], x = E.byteLength(h.name);
                    if (b - q > c) break;
                    g1.view.setBigUint64(b, k(e + 1), !0);
                    b += 8;
                    if (b - q > c) break;
                    var l = p1.statSync(y1.resolve(a.path, h.name));
                    g1.view.setBigUint64(b, k(l.ino), !0);
                    b += 8;
                    if (b - q > c) break;
                    g1.view.setUint32(b, x, !0);
                    b += 4;
                    if (b - q > c) break;
                    switch(!0){
                        case l.isBlockDevice():
                            l = 1;
                            break;
                        case l.isCharacterDevice():
                            l = 2;
                            break;
                        case l.isDirectory():
                            l = 3;
                            break;
                        case l.isFIFO():
                            l = 6;
                            break;
                        case l.isFile():
                            l = 4;
                            break;
                        case l.isSocket():
                            l = 6;
                            break;
                        case l.isSymbolicLink():
                            l = 7;
                            break;
                        default:
                            l = 0;
                    }
                    g1.view.setUint8(b, l);
                    b += 1;
                    b += 3;
                    if (b + x >= q + c) break;
                    E.from(g1.memory.buffer).write(h.name, b);
                    b += x;
                }
                g1.view.setUint32(f, Math.min(b - q, c), !0);
                return 0;
            }),
            fd_renumber: Z(function(a, b) {
                d2(a, k(0));
                d2(b, k(0));
                p1.closeSync(g1.FD_MAP.get(a).real);
                g1.FD_MAP.set(a, g1.FD_MAP.get(b));
                g1.FD_MAP.delete(b);
                return 0;
            }),
            fd_seek: Z(function(a, b, c, e) {
                a = d2(a, Q);
                g1.refreshMemory();
                switch(c){
                    case 1:
                        a.offset = (a.offset ? a.offset : k(0)) + k(b);
                        break;
                    case 2:
                        c = p1.fstatSync(a.real).size;
                        a.offset = k(c) + k(b);
                        break;
                    case 0:
                        a.offset = k(b);
                }
                g1.view.setBigUint64(e, a.offset, !0);
                return 0;
            }),
            fd_tell: Z(function(a, b) {
                a = d2(a, qb);
                g1.refreshMemory();
                a.offset || (a.offset = k(0));
                g1.view.setBigUint64(b, a.offset, !0);
                return 0;
            }),
            fd_sync: Z(function(a) {
                a = d2(a, S);
                p1.fsyncSync(a.real);
                return 0;
            }),
            path_create_directory: Z(function(a, b, c) {
                a = d2(a, tb);
                if (!a.path) return 28;
                g1.refreshMemory();
                b = E.from(g1.memory.buffer, b, c).toString();
                p1.mkdirSync(y1.resolve(a.path, b));
                return 0;
            }),
            path_filestat_get: Z(function(a, b, c, e, f) {
                a = d2(a, Cb);
                if (!a.path) return 28;
                g1.refreshMemory();
                c = E.from(g1.memory.buffer, c, e).toString();
                c = p1.statSync(y1.resolve(a.path, c));
                g1.view.setBigUint64(f, k(c.dev), !0);
                f += 8;
                g1.view.setBigUint64(f, k(c.ino), !0);
                f += 8;
                g1.view.setUint8(f, cc(g1, void 0, c).filetype);
                f += 8;
                g1.view.setBigUint64(f, k(c.nlink), !0);
                f += 8;
                g1.view.setBigUint64(f, k(c.size), !0);
                f += 8;
                g1.view.setBigUint64(f, Y(c.atimeMs), !0);
                f += 8;
                g1.view.setBigUint64(f, Y(c.mtimeMs), !0);
                g1.view.setBigUint64(f + 8, Y(c.ctimeMs), !0);
                return 0;
            }),
            path_filestat_set_times: Z(function(a, c, e, f, h, l, n) {
                a = d2(a, Eb);
                if (!a.path) return 28;
                g1.refreshMemory();
                var t = p1.fstatSync(a.real);
                c = t.atime;
                t = t.mtime;
                var q = $b(b5(0));
                if (3 === (n & 3) || 12 === (n & 12)) return 28;
                1 === (n & 1) ? c = $b(h) : 2 === (n & 2) && (c = q);
                4 === (n & 4) ? t = $b(l) : 8 === (n & 8) && (t = q);
                e = E.from(g1.memory.buffer, e, f).toString();
                p1.utimesSync(y1.resolve(a.path, e), new Date(c), new Date(t));
                return 0;
            }),
            path_link: Z(function(a, b, c, e, f, h, l) {
                a = d2(a, vb);
                f = d2(f, wb);
                if (!a.path || !f.path) return 28;
                g1.refreshMemory();
                c = E.from(g1.memory.buffer, c, e).toString();
                h = E.from(g1.memory.buffer, h, l).toString();
                p1.linkSync(y1.resolve(a.path, c), y1.resolve(f.path, h));
                return 0;
            }),
            path_open: Z(function(a, b, c, e, f, h, l, n, r) {
                b = d2(a, xb);
                h = k(h);
                l = k(l);
                a = (h & (P | yb)) !== k(0);
                var t = (h & (O | T | sb | Ib)) !== k(0);
                if (t && a) var q = p1.constants.O_RDWR;
                else a ? q = p1.constants.O_RDONLY : t && (q = p1.constants.O_WRONLY);
                a = h | xb;
                h |= l;
                0 !== (f & 1) && (q |= p1.constants.O_CREAT, a |= ub);
                0 !== (f & 2) && (q |= p1.constants.O_DIRECTORY);
                0 !== (f & 4) && (q |= p1.constants.O_EXCL);
                0 !== (f & 8) && (q |= p1.constants.O_TRUNC, a |= Db);
                0 !== (n & 1) && (q |= p1.constants.O_APPEND);
                0 !== (n & 2) && (q = p1.constants.O_DSYNC ? q | p1.constants.O_DSYNC : q | p1.constants.O_SYNC, h |= O);
                0 !== (n & 4) && (q |= p1.constants.O_NONBLOCK);
                0 !== (n & 8) && (q = p1.constants.O_RSYNC ? q | p1.constants.O_RSYNC : q | p1.constants.O_SYNC, h |= S);
                0 !== (n & 16) && (q |= p1.constants.O_SYNC, h |= S);
                t && 0 === (q & (p1.constants.O_APPEND | p1.constants.O_TRUNC)) && (h |= Q);
                g1.refreshMemory();
                c = E.from(g1.memory.buffer, c, e).toString();
                c = y1.resolve(b.path, c);
                if (y1.relative(b.path, c).startsWith("..")) return 76;
                try {
                    var x = p1.realpathSync(c);
                    if (y1.relative(b.path, x).startsWith("..")) return 76;
                } catch (U) {
                    if ("ENOENT" === U.code) x = c;
                    else throw U;
                }
                try {
                    var B = p1.statSync(x).isDirectory();
                } catch (U1) {
                }
                q = !t && B ? p1.openSync(x, p1.constants.O_RDONLY) : p1.openSync(x, q);
                B = fa(g1.FD_MAP.keys()).reverse()[0] + 1;
                g1.FD_MAP.set(B, {
                    real: q,
                    filetype: void 0,
                    rights: {
                        base: a,
                        inheriting: h
                    },
                    path: x
                });
                bc(g1, B);
                g1.view.setUint32(r, B, !0);
                return 0;
            }),
            path_readlink: Z(function(a, b, c, e, f, h) {
                a = d2(a, zb);
                if (!a.path) return 28;
                g1.refreshMemory();
                b = E.from(g1.memory.buffer, b, c).toString();
                b = y1.resolve(a.path, b);
                b = p1.readlinkSync(b);
                e = E.from(g1.memory.buffer).write(b, e, f);
                g1.view.setUint32(h, e, !0);
                return 0;
            }),
            path_remove_directory: Z(function(a, b, c) {
                a = d2(a, Lb);
                if (!a.path) return 28;
                g1.refreshMemory();
                b = E.from(g1.memory.buffer, b, c).toString();
                p1.rmdirSync(y1.resolve(a.path, b));
                return 0;
            }),
            path_rename: Z(function(a, b, c, e, f, h) {
                a = d2(a, Ab);
                e = d2(e, Bb);
                if (!a.path || !e.path) return 28;
                g1.refreshMemory();
                b = E.from(g1.memory.buffer, b, c).toString();
                f = E.from(g1.memory.buffer, f, h).toString();
                p1.renameSync(y1.resolve(a.path, b), y1.resolve(e.path, f));
                return 0;
            }),
            path_symlink: Z(function(a, b, c, e, f) {
                c = d2(c, Kb);
                if (!c.path) return 28;
                g1.refreshMemory();
                a = E.from(g1.memory.buffer, a, b).toString();
                e = E.from(g1.memory.buffer, e, f).toString();
                p1.symlinkSync(a, y1.resolve(c.path, e));
                return 0;
            }),
            path_unlink_file: Z(function(a, b, c) {
                a = d2(a, Mb);
                if (!a.path) return 28;
                g1.refreshMemory();
                b = E.from(g1.memory.buffer, b, c).toString();
                p1.unlinkSync(y1.resolve(a.path, b));
                return 0;
            }),
            poll_oneoff: function(a, c, d, e) {
                var f = 0, h = 0;
                g1.refreshMemory();
                for(var l = 0; l < d; l += 1){
                    var n = g1.view.getBigUint64(a, !0);
                    a += 8;
                    var p = g1.view.getUint8(a);
                    a += 1;
                    switch(p){
                        case 0:
                            a += 7;
                            g1.view.getBigUint64(a, !0);
                            a += 8;
                            var q = g1.view.getUint32(a, !0);
                            a += 4;
                            a += 4;
                            p = g1.view.getBigUint64(a, !0);
                            a += 8;
                            g1.view.getBigUint64(a, !0);
                            a += 8;
                            var t = g1.view.getUint16(a, !0);
                            a += 2;
                            a += 6;
                            var x = 1 === t;
                            t = 0;
                            q = k(b5(q));
                            null === q ? t = 28 : (p = x ? p : q + p, h = p > h ? p : h);
                            g1.view.setBigUint64(c, n, !0);
                            c += 8;
                            g1.view.setUint16(c, t, !0);
                            c += 2;
                            g1.view.setUint8(c, 0);
                            c += 1;
                            c += 5;
                            f += 1;
                            break;
                        case 1:
                        case 2:
                            a += 3;
                            g1.view.getUint32(a, !0);
                            a += 4;
                            g1.view.setBigUint64(c, n, !0);
                            c += 8;
                            g1.view.setUint16(c, 52, !0);
                            c += 2;
                            g1.view.setUint8(c, p);
                            c += 1;
                            c += 5;
                            f += 1;
                            break;
                        default:
                            return 28;
                    }
                }
                for(g1.view.setUint32(e, f, !0); r1.hrtime() < h;);
                return 0;
            },
            proc_exit: function(a) {
                r1.exit(a);
                return 0;
            },
            proc_raise: function(a) {
                if (!(a in Xb)) return 28;
                r1.kill(Xb[a]);
                return 0;
            },
            random_get: function(a, b) {
                g1.refreshMemory();
                r1.randomFillSync(new Uint8Array(g1.memory.buffer), a, b);
                return 0;
            },
            sched_yield: function() {
                return 0;
            },
            sock_recv: function() {
                return 52;
            },
            sock_send: function() {
                return 52;
            },
            sock_shutdown: function() {
                return 52;
            }
        };
        a6.traceSyscalls && Object.keys(this.wasiImport).forEach(function(a) {
            var b = g1.wasiImport[a];
            g1.wasiImport[a] = function() {
                for(var c = [], d = 0; d < arguments.length; d++)c[d] = arguments[d];
                console.log("WASI: wasiImport called: " + a + " (" + c + ")");
                try {
                    var e = b.apply(void 0, fa(c));
                    console.log("WASI:  => " + e);
                    return e;
                } catch (Hb) {
                    throw console.log("Catched error: " + Hb), Hb;
                }
            };
        });
    }
    a5.prototype.refreshMemory = function() {
        this.view && 0 !== this.view.buffer.byteLength || (this.view = new ia(this.memory.buffer));
    };
    a5.prototype.setMemory = function(a) {
        this.memory = a;
    };
    a5.prototype.start = function(a) {
        a = a.exports;
        if (null === a || "object" !== typeof a) throw Error("instance.exports must be an Object. Received " + a + ".");
        var b = a.memory;
        if (!(b instanceof WebAssembly.Memory)) throw Error("instance.exports.memory must be a WebAssembly.Memory. Recceived " + b + ".");
        this.setMemory(b);
        a._start && a._start();
    };
    a5.prototype.getImportNamespace = function(a) {
        var b, d = null;
        try {
            for(var e = ca(WebAssembly.Module.imports(a)), f = e.next(); !f.done; f = e.next()){
                var g = f.value;
                if ("function" === g.kind && g.module.startsWith("wasi_")) {
                    if (!d) d = g.module;
                    else if (d !== g.module) throw Error("Multiple namespaces detected.");
                }
            }
        } catch (l) {
            var h = {
                error: l
            };
        } finally{
            try {
                f && !f.done && (b = e.return) && b.call(e);
            } finally{
                if (h) throw h.error;
            }
        }
        return d;
    };
    a5.prototype.getImports = function(a) {
        switch(this.getImportNamespace(a)){
            case "wasi_unstable":
                return {
                    wasi_unstable: this.wasiImport
                };
            case "wasi_snapshot_preview1":
                return {
                    wasi_snapshot_preview1: this.wasiImport
                };
            default:
                throw Error("Can't detect a WASI namespace for the WebAssembly Module");
        }
    };
    a5.defaultBindings = pb;
    return a5;
}();
exports.default = dc;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"2d86p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WasmFs", ()=>sf
);
var global = arguments[3];
/*
 *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
**************************************************************************** https://mths.be/punycode v1.4.1 by @mathias */ function ba(a1, b1, c, d) {
    return new (c || (c = Promise))(function(e, f) {
        function g(a) {
            try {
                k(d.next(a));
            } catch (n) {
                f(n);
            }
        }
        function h(a) {
            try {
                k(d["throw"](a));
            } catch (n) {
                f(n);
            }
        }
        function k(a) {
            a.done ? e(a.value) : new c(function(b) {
                b(a.value);
            }).then(g, h);
        }
        k((d = d.apply(a1, b1 || [])).next());
    });
}
function ca(a2, b2) {
    function c1(a) {
        return function(b) {
            return d([
                a,
                b
            ]);
        };
    }
    function d(c) {
        if (f) throw new TypeError("Generator is already executing.");
        for(; e;)try {
            if (f = 1, g && (h = c[0] & 2 ? g["return"] : c[0] ? g["throw"] || ((h = g["return"]) && h.call(g), 0) : g.next) && !(h = h.call(g, c[1])).done) return h;
            if (g = 0, h) c = [
                c[0] & 2,
                h.value
            ];
            switch(c[0]){
                case 0:
                case 1:
                    h = c;
                    break;
                case 4:
                    return e.label++, {
                        value: c[1],
                        done: !1
                    };
                case 5:
                    e.label++;
                    g = c[1];
                    c = [
                        0
                    ];
                    continue;
                case 7:
                    c = e.ops.pop();
                    e.trys.pop();
                    continue;
                default:
                    if (!(h = e.trys, h = 0 < h.length && h[h.length - 1]) && (6 === c[0] || 2 === c[0])) {
                        e = 0;
                        continue;
                    }
                    if (3 === c[0] && (!h || c[1] > h[0] && c[1] < h[3])) e.label = c[1];
                    else if (6 === c[0] && e.label < h[1]) e.label = h[1], h = c;
                    else if (h && e.label < h[2]) e.label = h[2], e.ops.push(c);
                    else {
                        h[2] && e.ops.pop();
                        e.trys.pop();
                        continue;
                    }
            }
            c = b2.call(a2, e);
        } catch (n) {
            c = [
                6,
                n
            ], g = 0;
        } finally{
            f = h = 0;
        }
        if (c[0] & 5) throw c[1];
        return {
            value: c[0] ? c[1] : void 0,
            done: !0
        };
    }
    var e = {
        label: 0,
        sent: function() {
            if (h[0] & 1) throw h[1];
            return h[1];
        },
        trys: [],
        ops: []
    }, f, g, h, k;
    return k = {
        next: c1(0),
        "throw": c1(1),
        "return": c1(2)
    }, "function" === typeof Symbol && (k[Symbol.iterator] = function() {
        return this;
    }), k;
}
function da(a) {
    var b = "function" === typeof Symbol && a[Symbol.iterator], c = 0;
    return b ? b.call(a) : {
        next: function() {
            a && c >= a.length && (a = void 0);
            return {
                value: a && a[c++],
                done: !a
            };
        }
    };
}
function ea(a, b) {
    var c = "function" === typeof Symbol && a[Symbol.iterator];
    if (!c) return a;
    a = c.call(a);
    var d, e = [];
    try {
        for(; (void 0 === b || 0 < b--) && !(d = a.next()).done;)e.push(d.value);
    } catch (g) {
        var f = {
            error: g
        };
    } finally{
        try {
            d && !d.done && (c = a["return"]) && c.call(a);
        } finally{
            if (f) throw f.error;
        }
    }
    return e;
}
function ia() {
    for(var a = [], b = 0; b < arguments.length; b++)a = a.concat(ea(arguments[b]));
    return a;
}
var l = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {
};
function t(a) {
    return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a["default"] : a;
}
function u(a, b) {
    return b = {
        exports: {
        }
    }, a(b, b.exports), b.exports;
}
var w = u(function(a, b) {
    Object.defineProperty(b, "__esModule", {
        value: !0
    });
    b.constants = {
        O_RDONLY: 0,
        O_WRONLY: 1,
        O_RDWR: 2,
        S_IFMT: 61440,
        S_IFREG: 32768,
        S_IFDIR: 16384,
        S_IFCHR: 8192,
        S_IFBLK: 24576,
        S_IFIFO: 4096,
        S_IFLNK: 40960,
        S_IFSOCK: 49152,
        O_CREAT: 64,
        O_EXCL: 128,
        O_NOCTTY: 256,
        O_TRUNC: 512,
        O_APPEND: 1024,
        O_DIRECTORY: 65536,
        O_NOATIME: 262144,
        O_NOFOLLOW: 131072,
        O_SYNC: 1052672,
        O_DIRECT: 16384,
        O_NONBLOCK: 2048,
        S_IRWXU: 448,
        S_IRUSR: 256,
        S_IWUSR: 128,
        S_IXUSR: 64,
        S_IRWXG: 56,
        S_IRGRP: 32,
        S_IWGRP: 16,
        S_IXGRP: 8,
        S_IRWXO: 7,
        S_IROTH: 4,
        S_IWOTH: 2,
        S_IXOTH: 1,
        F_OK: 0,
        R_OK: 4,
        W_OK: 2,
        X_OK: 1,
        UV_FS_SYMLINK_DIR: 1,
        UV_FS_SYMLINK_JUNCTION: 2,
        UV_FS_COPYFILE_EXCL: 1,
        UV_FS_COPYFILE_FICLONE: 2,
        UV_FS_COPYFILE_FICLONE_FORCE: 4,
        COPYFILE_EXCL: 1,
        COPYFILE_FICLONE: 2,
        COPYFILE_FICLONE_FORCE: 4
    };
});
t(w);
var ja = u(function(a, b) {
    b.default = "function" === typeof BigInt ? BigInt : function() {
        throw Error("BigInt is not supported in this environment.");
    };
}), ka = u(function(a3, b3) {
    Object.defineProperty(b3, "__esModule", {
        value: !0
    });
    var c2 = w.constants.S_IFMT, d1 = w.constants.S_IFDIR, e1 = w.constants.S_IFREG, f1 = w.constants.S_IFBLK, g1 = w.constants.S_IFCHR, h1 = w.constants.S_IFLNK, k = w.constants.S_IFIFO, p = w.constants.S_IFSOCK;
    a3 = (function() {
        function a4() {
        }
        a4.build = function(b, c) {
            void 0 === c && (c = !1);
            var d = new a4, e = b.gid, f = b.atime, g = b.mtime, h = b.ctime;
            c = c ? ja.default : function(a) {
                return a;
            };
            d.uid = c(b.uid);
            d.gid = c(e);
            d.rdev = c(0);
            d.blksize = c(4096);
            d.ino = c(b.ino);
            d.size = c(b.getSize());
            d.blocks = c(1);
            d.atime = f;
            d.mtime = g;
            d.ctime = h;
            d.birthtime = h;
            d.atimeMs = c(f.getTime());
            d.mtimeMs = c(g.getTime());
            e = c(h.getTime());
            d.ctimeMs = e;
            d.birthtimeMs = e;
            d.dev = c(0);
            d.mode = c(b.mode);
            d.nlink = c(b.nlink);
            return d;
        };
        a4.prototype._checkModeProperty = function(a) {
            return (Number(this.mode) & c2) === a;
        };
        a4.prototype.isDirectory = function() {
            return this._checkModeProperty(d1);
        };
        a4.prototype.isFile = function() {
            return this._checkModeProperty(e1);
        };
        a4.prototype.isBlockDevice = function() {
            return this._checkModeProperty(f1);
        };
        a4.prototype.isCharacterDevice = function() {
            return this._checkModeProperty(g1);
        };
        a4.prototype.isSymbolicLink = function() {
            return this._checkModeProperty(h1);
        };
        a4.prototype.isFIFO = function() {
            return this._checkModeProperty(k);
        };
        a4.prototype.isSocket = function() {
            return this._checkModeProperty(p);
        };
        return a4;
    })();
    b3.Stats = a3;
    b3.default = a3;
});
t(ka);
var la = "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {
}, x = [], y = [], ma = "undefined" !== typeof Uint8Array ? Uint8Array : Array, oa = !1;
function pa() {
    oa = !0;
    for(var a = 0; 64 > a; ++a)x[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[a], y["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(a)] = a;
    y[45] = 62;
    y[95] = 63;
}
function qa(a, b, c) {
    for(var d = [], e = b; e < c; e += 3)b = (a[e] << 16) + (a[e + 1] << 8) + a[e + 2], d.push(x[b >> 18 & 63] + x[b >> 12 & 63] + x[b >> 6 & 63] + x[b & 63]);
    return d.join("");
}
function ra(a) {
    oa || pa();
    for(var b = a.length, c = b % 3, d = "", e = [], f = 0, g = b - c; f < g; f += 16383)e.push(qa(a, f, f + 16383 > g ? g : f + 16383));
    1 === c ? (a = a[b - 1], d += x[a >> 2], d += x[a << 4 & 63], d += "==") : 2 === c && (a = (a[b - 2] << 8) + a[b - 1], d += x[a >> 10], d += x[a >> 4 & 63], d += x[a << 2 & 63], d += "=");
    e.push(d);
    return e.join("");
}
function sa(a, b, c, d, e) {
    var f = 8 * e - d - 1;
    var g = (1 << f) - 1, h = g >> 1, k = -7;
    e = c ? e - 1 : 0;
    var p = c ? -1 : 1, n = a[b + e];
    e += p;
    c = n & (1 << -k) - 1;
    n >>= -k;
    for(k += f; 0 < k; c = 256 * c + a[b + e], e += p, k -= 8);
    f = c & (1 << -k) - 1;
    c >>= -k;
    for(k += d; 0 < k; f = 256 * f + a[b + e], e += p, k -= 8);
    if (0 === c) c = 1 - h;
    else {
        if (c === g) return f ? NaN : Infinity * (n ? -1 : 1);
        f += Math.pow(2, d);
        c -= h;
    }
    return (n ? -1 : 1) * f * Math.pow(2, c - d);
}
function ta(a, b, c, d, e, f) {
    var g, h = 8 * f - e - 1, k = (1 << h) - 1, p = k >> 1, n = 23 === e ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    f = d ? 0 : f - 1;
    var q = d ? 1 : -1, B = 0 > b || 0 === b && 0 > 1 / b ? 1 : 0;
    b = Math.abs(b);
    isNaN(b) || Infinity === b ? (b = isNaN(b) ? 1 : 0, d = k) : (d = Math.floor(Math.log(b) / Math.LN2), 1 > b * (g = Math.pow(2, -d)) && (d--, g *= 2), b = 1 <= d + p ? b + n / g : b + n * Math.pow(2, 1 - p), 2 <= b * g && (d++, g /= 2), d + p >= k ? (b = 0, d = k) : 1 <= d + p ? (b = (b * g - 1) * Math.pow(2, e), d += p) : (b = b * Math.pow(2, p - 1) * Math.pow(2, e), d = 0));
    for(; 8 <= e; a[c + f] = b & 255, f += q, b /= 256, e -= 8);
    d = d << e | b;
    for(h += e; 0 < h; a[c + f] = d & 255, f += q, d /= 256, h -= 8);
    a[c + f - q] |= 128 * B;
}
var wa = {
}.toString, ya = Array.isArray || function(a) {
    return "[object Array]" == wa.call(a);
};
z.TYPED_ARRAY_SUPPORT = void 0 !== la.TYPED_ARRAY_SUPPORT ? la.TYPED_ARRAY_SUPPORT : !0;
var za = z.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
function Aa(a, b) {
    if ((z.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823) < b) throw new RangeError("Invalid typed array length");
    z.TYPED_ARRAY_SUPPORT ? (a = new Uint8Array(b), a.__proto__ = z.prototype) : (null === a && (a = new z(b)), a.length = b);
    return a;
}
function z(a, b, c) {
    if (!(z.TYPED_ARRAY_SUPPORT || this instanceof z)) return new z(a, b, c);
    if ("number" === typeof a) {
        if ("string" === typeof b) throw Error("If encoding is specified then the first argument must be a string");
        return Ba(this, a);
    }
    return Ca(this, a, b, c);
}
z.poolSize = 8192;
z._augment = function(a) {
    a.__proto__ = z.prototype;
    return a;
};
function Ca(a, b, c, d) {
    if ("number" === typeof b) throw new TypeError('"value" argument must not be a number');
    if ("undefined" !== typeof ArrayBuffer && b instanceof ArrayBuffer) {
        b.byteLength;
        if (0 > c || b.byteLength < c) throw new RangeError("'offset' is out of bounds");
        if (b.byteLength < c + (d || 0)) throw new RangeError("'length' is out of bounds");
        b = void 0 === c && void 0 === d ? new Uint8Array(b) : void 0 === d ? new Uint8Array(b, c) : new Uint8Array(b, c, d);
        z.TYPED_ARRAY_SUPPORT ? (a = b, a.__proto__ = z.prototype) : a = Da(a, b);
        return a;
    }
    if ("string" === typeof b) {
        d = a;
        a = c;
        if ("string" !== typeof a || "" === a) a = "utf8";
        if (!z.isEncoding(a)) throw new TypeError('"encoding" must be a valid string encoding');
        c = Ea(b, a) | 0;
        d = Aa(d, c);
        b = d.write(b, a);
        b !== c && (d = d.slice(0, b));
        return d;
    }
    return Fa(a, b);
}
z.from = function(a, b, c) {
    return Ca(null, a, b, c);
};
z.TYPED_ARRAY_SUPPORT && (z.prototype.__proto__ = Uint8Array.prototype, z.__proto__ = Uint8Array);
function Ga(a) {
    if ("number" !== typeof a) throw new TypeError('"size" argument must be a number');
    if (0 > a) throw new RangeError('"size" argument must not be negative');
}
z.alloc = function(a, b, c) {
    Ga(a);
    a = 0 >= a ? Aa(null, a) : void 0 !== b ? "string" === typeof c ? Aa(null, a).fill(b, c) : Aa(null, a).fill(b) : Aa(null, a);
    return a;
};
function Ba(a, b) {
    Ga(b);
    a = Aa(a, 0 > b ? 0 : Ma(b) | 0);
    if (!z.TYPED_ARRAY_SUPPORT) for(var c = 0; c < b; ++c)a[c] = 0;
    return a;
}
z.allocUnsafe = function(a) {
    return Ba(null, a);
};
z.allocUnsafeSlow = function(a) {
    return Ba(null, a);
};
function Da(a, b) {
    var c = 0 > b.length ? 0 : Ma(b.length) | 0;
    a = Aa(a, c);
    for(var d = 0; d < c; d += 1)a[d] = b[d] & 255;
    return a;
}
function Fa(a, b) {
    if (A(b)) {
        var c = Ma(b.length) | 0;
        a = Aa(a, c);
        if (0 === a.length) return a;
        b.copy(a, 0, 0, c);
        return a;
    }
    if (b) {
        if ("undefined" !== typeof ArrayBuffer && b.buffer instanceof ArrayBuffer || "length" in b) return (c = "number" !== typeof b.length) || (c = b.length, c = c !== c), c ? Aa(a, 0) : Da(a, b);
        if ("Buffer" === b.type && ya(b.data)) return Da(a, b.data);
    }
    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function Ma(a) {
    if (a >= (z.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823)) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + (z.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823).toString(16) + " bytes");
    return a | 0;
}
z.isBuffer = Na;
function A(a) {
    return !(null == a || !a._isBuffer);
}
z.compare = function(a, b) {
    if (!A(a) || !A(b)) throw new TypeError("Arguments must be Buffers");
    if (a === b) return 0;
    for(var c = a.length, d = b.length, e = 0, f = Math.min(c, d); e < f; ++e)if (a[e] !== b[e]) {
        c = a[e];
        d = b[e];
        break;
    }
    return c < d ? -1 : d < c ? 1 : 0;
};
z.isEncoding = function(a) {
    switch(String(a).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return !0;
        default:
            return !1;
    }
};
z.concat = function(a, b) {
    if (!ya(a)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (0 === a.length) return z.alloc(0);
    var c;
    if (void 0 === b) for(c = b = 0; c < a.length; ++c)b += a[c].length;
    b = z.allocUnsafe(b);
    var d = 0;
    for(c = 0; c < a.length; ++c){
        var e = a[c];
        if (!A(e)) throw new TypeError('"list" argument must be an Array of Buffers');
        e.copy(b, d);
        d += e.length;
    }
    return b;
};
function Ea(a, b) {
    if (A(a)) return a.length;
    if ("undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(a) || a instanceof ArrayBuffer)) return a.byteLength;
    "string" !== typeof a && (a = "" + a);
    var c = a.length;
    if (0 === c) return 0;
    for(var d = !1;;)switch(b){
        case "ascii":
        case "latin1":
        case "binary":
            return c;
        case "utf8":
        case "utf-8":
        case void 0:
            return Oa(a).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return 2 * c;
        case "hex":
            return c >>> 1;
        case "base64":
            return Pa(a).length;
        default:
            if (d) return Oa(a).length;
            b = ("" + b).toLowerCase();
            d = !0;
    }
}
z.byteLength = Ea;
function Qa(a, b, c) {
    var d = !1;
    if (void 0 === b || 0 > b) b = 0;
    if (b > this.length) return "";
    if (void 0 === c || c > this.length) c = this.length;
    if (0 >= c) return "";
    c >>>= 0;
    b >>>= 0;
    if (c <= b) return "";
    for(a || (a = "utf8");;)switch(a){
        case "hex":
            a = b;
            b = c;
            c = this.length;
            if (!a || 0 > a) a = 0;
            if (!b || 0 > b || b > c) b = c;
            d = "";
            for(c = a; c < b; ++c)a = d, d = this[c], d = 16 > d ? "0" + d.toString(16) : d.toString(16), d = a + d;
            return d;
        case "utf8":
        case "utf-8":
            return Ra(this, b, c);
        case "ascii":
            a = "";
            for(c = Math.min(this.length, c); b < c; ++b)a += String.fromCharCode(this[b] & 127);
            return a;
        case "latin1":
        case "binary":
            a = "";
            for(c = Math.min(this.length, c); b < c; ++b)a += String.fromCharCode(this[b]);
            return a;
        case "base64":
            return b = 0 === b && c === this.length ? ra(this) : ra(this.slice(b, c)), b;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            b = this.slice(b, c);
            c = "";
            for(a = 0; a < b.length; a += 2)c += String.fromCharCode(b[a] + 256 * b[a + 1]);
            return c;
        default:
            if (d) throw new TypeError("Unknown encoding: " + a);
            a = (a + "").toLowerCase();
            d = !0;
    }
}
z.prototype._isBuffer = !0;
function Sa(a, b, c) {
    var d = a[b];
    a[b] = a[c];
    a[c] = d;
}
z.prototype.swap16 = function() {
    var a = this.length;
    if (0 !== a % 2) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(var b = 0; b < a; b += 2)Sa(this, b, b + 1);
    return this;
};
z.prototype.swap32 = function() {
    var a = this.length;
    if (0 !== a % 4) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(var b = 0; b < a; b += 4)Sa(this, b, b + 3), Sa(this, b + 1, b + 2);
    return this;
};
z.prototype.swap64 = function() {
    var a = this.length;
    if (0 !== a % 8) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(var b = 0; b < a; b += 8)Sa(this, b, b + 7), Sa(this, b + 1, b + 6), Sa(this, b + 2, b + 5), Sa(this, b + 3, b + 4);
    return this;
};
z.prototype.toString = function() {
    var a = this.length | 0;
    return 0 === a ? "" : 0 === arguments.length ? Ra(this, 0, a) : Qa.apply(this, arguments);
};
z.prototype.equals = function(a) {
    if (!A(a)) throw new TypeError("Argument must be a Buffer");
    return this === a ? !0 : 0 === z.compare(this, a);
};
z.prototype.inspect = function() {
    var a = "";
    0 < this.length && (a = this.toString("hex", 0, 50).match(/.{2}/g).join(" "), 50 < this.length && (a += " ... "));
    return "<Buffer " + a + ">";
};
z.prototype.compare = function(a, b, c, d, e) {
    if (!A(a)) throw new TypeError("Argument must be a Buffer");
    void 0 === b && (b = 0);
    void 0 === c && (c = a ? a.length : 0);
    void 0 === d && (d = 0);
    void 0 === e && (e = this.length);
    if (0 > b || c > a.length || 0 > d || e > this.length) throw new RangeError("out of range index");
    if (d >= e && b >= c) return 0;
    if (d >= e) return -1;
    if (b >= c) return 1;
    b >>>= 0;
    c >>>= 0;
    d >>>= 0;
    e >>>= 0;
    if (this === a) return 0;
    var f = e - d, g = c - b, h = Math.min(f, g);
    d = this.slice(d, e);
    a = a.slice(b, c);
    for(b = 0; b < h; ++b)if (d[b] !== a[b]) {
        f = d[b];
        g = a[b];
        break;
    }
    return f < g ? -1 : g < f ? 1 : 0;
};
function Ta(a, b, c, d, e) {
    if (0 === a.length) return -1;
    "string" === typeof c ? (d = c, c = 0) : 2147483647 < c ? c = 2147483647 : -2147483648 > c && (c = -2147483648);
    c = +c;
    isNaN(c) && (c = e ? 0 : a.length - 1);
    0 > c && (c = a.length + c);
    if (c >= a.length) {
        if (e) return -1;
        c = a.length - 1;
    } else if (0 > c) {
        if (e) c = 0;
        else return -1;
    }
    "string" === typeof b && (b = z.from(b, d));
    if (A(b)) return 0 === b.length ? -1 : Ua(a, b, c, d, e);
    if ("number" === typeof b) return b &= 255, z.TYPED_ARRAY_SUPPORT && "function" === typeof Uint8Array.prototype.indexOf ? e ? Uint8Array.prototype.indexOf.call(a, b, c) : Uint8Array.prototype.lastIndexOf.call(a, b, c) : Ua(a, [
        b
    ], c, d, e);
    throw new TypeError("val must be string, number or Buffer");
}
function Ua(a5, b4, c, d, e) {
    function f(a, b) {
        return 1 === g ? a[b] : a.readUInt16BE(b * g);
    }
    var g = 1, h = a5.length, k = b4.length;
    if (void 0 !== d && (d = String(d).toLowerCase(), "ucs2" === d || "ucs-2" === d || "utf16le" === d || "utf-16le" === d)) {
        if (2 > a5.length || 2 > b4.length) return -1;
        g = 2;
        h /= 2;
        k /= 2;
        c /= 2;
    }
    if (e) for(d = -1; c < h; c++)if (f(a5, c) === f(b4, -1 === d ? 0 : c - d)) {
        if (-1 === d && (d = c), c - d + 1 === k) return d * g;
    } else -1 !== d && (c -= c - d), d = -1;
    else for(c + k > h && (c = h - k); 0 <= c; c--){
        h = !0;
        for(d = 0; d < k; d++)if (f(a5, c + d) !== f(b4, d)) {
            h = !1;
            break;
        }
        if (h) return c;
    }
    return -1;
}
z.prototype.includes = function(a, b, c) {
    return -1 !== this.indexOf(a, b, c);
};
z.prototype.indexOf = function(a, b, c) {
    return Ta(this, a, b, c, !0);
};
z.prototype.lastIndexOf = function(a, b, c) {
    return Ta(this, a, b, c, !1);
};
z.prototype.write = function(a, b, c, d) {
    if (void 0 === b) d = "utf8", c = this.length, b = 0;
    else if (void 0 === c && "string" === typeof b) d = b, c = this.length, b = 0;
    else if (isFinite(b)) b |= 0, isFinite(c) ? (c |= 0, void 0 === d && (d = "utf8")) : (d = c, c = void 0);
    else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    var e = this.length - b;
    if (void 0 === c || c > e) c = e;
    if (0 < a.length && (0 > c || 0 > b) || b > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    d || (d = "utf8");
    for(e = !1;;)switch(d){
        case "hex":
            a: {
                b = Number(b) || 0;
                d = this.length - b;
                c ? (c = Number(c), c > d && (c = d)) : c = d;
                d = a.length;
                if (0 !== d % 2) throw new TypeError("Invalid hex string");
                c > d / 2 && (c = d / 2);
                for(d = 0; d < c; ++d){
                    e = parseInt(a.substr(2 * d, 2), 16);
                    if (isNaN(e)) {
                        a = d;
                        break a;
                    }
                    this[b + d] = e;
                }
                a = d;
            }
            return a;
        case "utf8":
        case "utf-8":
            return Va(Oa(a, this.length - b), this, b, c);
        case "ascii":
            return Va(Wa(a), this, b, c);
        case "latin1":
        case "binary":
            return Va(Wa(a), this, b, c);
        case "base64":
            return Va(Pa(a), this, b, c);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            d = a;
            e = this.length - b;
            for(var f = [], g = 0; g < d.length && !(0 > (e -= 2)); ++g){
                var h = d.charCodeAt(g);
                a = h >> 8;
                h %= 256;
                f.push(h);
                f.push(a);
            }
            return Va(f, this, b, c);
        default:
            if (e) throw new TypeError("Unknown encoding: " + d);
            d = ("" + d).toLowerCase();
            e = !0;
    }
};
z.prototype.toJSON = function() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function Ra(a, b, c) {
    c = Math.min(a.length, c);
    for(var d = []; b < c;){
        var e = a[b], f = null, g = 239 < e ? 4 : 223 < e ? 3 : 191 < e ? 2 : 1;
        if (b + g <= c) switch(g){
            case 1:
                128 > e && (f = e);
                break;
            case 2:
                var h = a[b + 1];
                128 === (h & 192) && (e = (e & 31) << 6 | h & 63, 127 < e && (f = e));
                break;
            case 3:
                h = a[b + 1];
                var k = a[b + 2];
                128 === (h & 192) && 128 === (k & 192) && (e = (e & 15) << 12 | (h & 63) << 6 | k & 63, 2047 < e && (55296 > e || 57343 < e) && (f = e));
                break;
            case 4:
                h = a[b + 1];
                k = a[b + 2];
                var p = a[b + 3];
                128 === (h & 192) && 128 === (k & 192) && 128 === (p & 192) && (e = (e & 15) << 18 | (h & 63) << 12 | (k & 63) << 6 | p & 63, 65535 < e && 1114112 > e && (f = e));
        }
        null === f ? (f = 65533, g = 1) : 65535 < f && (f -= 65536, d.push(f >>> 10 & 1023 | 55296), f = 56320 | f & 1023);
        d.push(f);
        b += g;
    }
    a = d.length;
    if (a <= ab) d = String.fromCharCode.apply(String, d);
    else {
        c = "";
        for(b = 0; b < a;)c += String.fromCharCode.apply(String, d.slice(b, b += ab));
        d = c;
    }
    return d;
}
var ab = 4096;
z.prototype.slice = function(a, b) {
    var c = this.length;
    a = ~~a;
    b = void 0 === b ? c : ~~b;
    0 > a ? (a += c, 0 > a && (a = 0)) : a > c && (a = c);
    0 > b ? (b += c, 0 > b && (b = 0)) : b > c && (b = c);
    b < a && (b = a);
    if (z.TYPED_ARRAY_SUPPORT) b = this.subarray(a, b), b.__proto__ = z.prototype;
    else {
        c = b - a;
        b = new z(c, void 0);
        for(var d = 0; d < c; ++d)b[d] = this[d + a];
    }
    return b;
};
function C(a, b, c) {
    if (0 !== a % 1 || 0 > a) throw new RangeError("offset is not uint");
    if (a + b > c) throw new RangeError("Trying to access beyond buffer length");
}
z.prototype.readUIntLE = function(a, b, c) {
    a |= 0;
    b |= 0;
    c || C(a, b, this.length);
    c = this[a];
    for(var d = 1, e = 0; ++e < b && (d *= 256);)c += this[a + e] * d;
    return c;
};
z.prototype.readUIntBE = function(a, b, c) {
    a |= 0;
    b |= 0;
    c || C(a, b, this.length);
    c = this[a + --b];
    for(var d = 1; 0 < b && (d *= 256);)c += this[a + --b] * d;
    return c;
};
z.prototype.readUInt8 = function(a, b) {
    b || C(a, 1, this.length);
    return this[a];
};
z.prototype.readUInt16LE = function(a, b) {
    b || C(a, 2, this.length);
    return this[a] | this[a + 1] << 8;
};
z.prototype.readUInt16BE = function(a, b) {
    b || C(a, 2, this.length);
    return this[a] << 8 | this[a + 1];
};
z.prototype.readUInt32LE = function(a, b) {
    b || C(a, 4, this.length);
    return (this[a] | this[a + 1] << 8 | this[a + 2] << 16) + 16777216 * this[a + 3];
};
z.prototype.readUInt32BE = function(a, b) {
    b || C(a, 4, this.length);
    return 16777216 * this[a] + (this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3]);
};
z.prototype.readIntLE = function(a, b, c) {
    a |= 0;
    b |= 0;
    c || C(a, b, this.length);
    c = this[a];
    for(var d = 1, e = 0; ++e < b && (d *= 256);)c += this[a + e] * d;
    c >= 128 * d && (c -= Math.pow(2, 8 * b));
    return c;
};
z.prototype.readIntBE = function(a, b, c) {
    a |= 0;
    b |= 0;
    c || C(a, b, this.length);
    c = b;
    for(var d = 1, e = this[a + --c]; 0 < c && (d *= 256);)e += this[a + --c] * d;
    e >= 128 * d && (e -= Math.pow(2, 8 * b));
    return e;
};
z.prototype.readInt8 = function(a, b) {
    b || C(a, 1, this.length);
    return this[a] & 128 ? -1 * (255 - this[a] + 1) : this[a];
};
z.prototype.readInt16LE = function(a, b) {
    b || C(a, 2, this.length);
    a = this[a] | this[a + 1] << 8;
    return a & 32768 ? a | 4294901760 : a;
};
z.prototype.readInt16BE = function(a, b) {
    b || C(a, 2, this.length);
    a = this[a + 1] | this[a] << 8;
    return a & 32768 ? a | 4294901760 : a;
};
z.prototype.readInt32LE = function(a, b) {
    b || C(a, 4, this.length);
    return this[a] | this[a + 1] << 8 | this[a + 2] << 16 | this[a + 3] << 24;
};
z.prototype.readInt32BE = function(a, b) {
    b || C(a, 4, this.length);
    return this[a] << 24 | this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3];
};
z.prototype.readFloatLE = function(a, b) {
    b || C(a, 4, this.length);
    return sa(this, a, !0, 23, 4);
};
z.prototype.readFloatBE = function(a, b) {
    b || C(a, 4, this.length);
    return sa(this, a, !1, 23, 4);
};
z.prototype.readDoubleLE = function(a, b) {
    b || C(a, 8, this.length);
    return sa(this, a, !0, 52, 8);
};
z.prototype.readDoubleBE = function(a, b) {
    b || C(a, 8, this.length);
    return sa(this, a, !1, 52, 8);
};
function E(a, b, c, d, e, f) {
    if (!A(a)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (b > e || b < f) throw new RangeError('"value" argument is out of bounds');
    if (c + d > a.length) throw new RangeError("Index out of range");
}
z.prototype.writeUIntLE = function(a, b, c, d) {
    a = +a;
    b |= 0;
    c |= 0;
    d || E(this, a, b, c, Math.pow(2, 8 * c) - 1, 0);
    d = 1;
    var e = 0;
    for(this[b] = a & 255; ++e < c && (d *= 256);)this[b + e] = a / d & 255;
    return b + c;
};
z.prototype.writeUIntBE = function(a, b, c, d) {
    a = +a;
    b |= 0;
    c |= 0;
    d || E(this, a, b, c, Math.pow(2, 8 * c) - 1, 0);
    d = c - 1;
    var e = 1;
    for(this[b + d] = a & 255; 0 <= --d && (e *= 256);)this[b + d] = a / e & 255;
    return b + c;
};
z.prototype.writeUInt8 = function(a, b, c) {
    a = +a;
    b |= 0;
    c || E(this, a, b, 1, 255, 0);
    z.TYPED_ARRAY_SUPPORT || (a = Math.floor(a));
    this[b] = a & 255;
    return b + 1;
};
function bb(a, b, c, d) {
    0 > b && (b = 65535 + b + 1);
    for(var e = 0, f = Math.min(a.length - c, 2); e < f; ++e)a[c + e] = (b & 255 << 8 * (d ? e : 1 - e)) >>> 8 * (d ? e : 1 - e);
}
z.prototype.writeUInt16LE = function(a, b, c) {
    a = +a;
    b |= 0;
    c || E(this, a, b, 2, 65535, 0);
    z.TYPED_ARRAY_SUPPORT ? (this[b] = a & 255, this[b + 1] = a >>> 8) : bb(this, a, b, !0);
    return b + 2;
};
z.prototype.writeUInt16BE = function(a, b, c) {
    a = +a;
    b |= 0;
    c || E(this, a, b, 2, 65535, 0);
    z.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 8, this[b + 1] = a & 255) : bb(this, a, b, !1);
    return b + 2;
};
function cb(a, b, c, d) {
    0 > b && (b = 4294967295 + b + 1);
    for(var e = 0, f = Math.min(a.length - c, 4); e < f; ++e)a[c + e] = b >>> 8 * (d ? e : 3 - e) & 255;
}
z.prototype.writeUInt32LE = function(a, b, c) {
    a = +a;
    b |= 0;
    c || E(this, a, b, 4, 4294967295, 0);
    z.TYPED_ARRAY_SUPPORT ? (this[b + 3] = a >>> 24, this[b + 2] = a >>> 16, this[b + 1] = a >>> 8, this[b] = a & 255) : cb(this, a, b, !0);
    return b + 4;
};
z.prototype.writeUInt32BE = function(a, b, c) {
    a = +a;
    b |= 0;
    c || E(this, a, b, 4, 4294967295, 0);
    z.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 24, this[b + 1] = a >>> 16, this[b + 2] = a >>> 8, this[b + 3] = a & 255) : cb(this, a, b, !1);
    return b + 4;
};
z.prototype.writeIntLE = function(a, b, c, d) {
    a = +a;
    b |= 0;
    d || (d = Math.pow(2, 8 * c - 1), E(this, a, b, c, d - 1, -d));
    d = 0;
    var e = 1, f = 0;
    for(this[b] = a & 255; ++d < c && (e *= 256);)0 > a && 0 === f && 0 !== this[b + d - 1] && (f = 1), this[b + d] = (a / e >> 0) - f & 255;
    return b + c;
};
z.prototype.writeIntBE = function(a, b, c, d) {
    a = +a;
    b |= 0;
    d || (d = Math.pow(2, 8 * c - 1), E(this, a, b, c, d - 1, -d));
    d = c - 1;
    var e = 1, f = 0;
    for(this[b + d] = a & 255; 0 <= --d && (e *= 256);)0 > a && 0 === f && 0 !== this[b + d + 1] && (f = 1), this[b + d] = (a / e >> 0) - f & 255;
    return b + c;
};
z.prototype.writeInt8 = function(a, b, c) {
    a = +a;
    b |= 0;
    c || E(this, a, b, 1, 127, -128);
    z.TYPED_ARRAY_SUPPORT || (a = Math.floor(a));
    0 > a && (a = 255 + a + 1);
    this[b] = a & 255;
    return b + 1;
};
z.prototype.writeInt16LE = function(a, b, c) {
    a = +a;
    b |= 0;
    c || E(this, a, b, 2, 32767, -32768);
    z.TYPED_ARRAY_SUPPORT ? (this[b] = a & 255, this[b + 1] = a >>> 8) : bb(this, a, b, !0);
    return b + 2;
};
z.prototype.writeInt16BE = function(a, b, c) {
    a = +a;
    b |= 0;
    c || E(this, a, b, 2, 32767, -32768);
    z.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 8, this[b + 1] = a & 255) : bb(this, a, b, !1);
    return b + 2;
};
z.prototype.writeInt32LE = function(a, b, c) {
    a = +a;
    b |= 0;
    c || E(this, a, b, 4, 2147483647, -2147483648);
    z.TYPED_ARRAY_SUPPORT ? (this[b] = a & 255, this[b + 1] = a >>> 8, this[b + 2] = a >>> 16, this[b + 3] = a >>> 24) : cb(this, a, b, !0);
    return b + 4;
};
z.prototype.writeInt32BE = function(a, b, c) {
    a = +a;
    b |= 0;
    c || E(this, a, b, 4, 2147483647, -2147483648);
    0 > a && (a = 4294967295 + a + 1);
    z.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 24, this[b + 1] = a >>> 16, this[b + 2] = a >>> 8, this[b + 3] = a & 255) : cb(this, a, b, !1);
    return b + 4;
};
function db(a, b, c, d) {
    if (c + d > a.length) throw new RangeError("Index out of range");
    if (0 > c) throw new RangeError("Index out of range");
}
z.prototype.writeFloatLE = function(a, b, c) {
    c || db(this, a, b, 4);
    ta(this, a, b, !0, 23, 4);
    return b + 4;
};
z.prototype.writeFloatBE = function(a, b, c) {
    c || db(this, a, b, 4);
    ta(this, a, b, !1, 23, 4);
    return b + 4;
};
z.prototype.writeDoubleLE = function(a, b, c) {
    c || db(this, a, b, 8);
    ta(this, a, b, !0, 52, 8);
    return b + 8;
};
z.prototype.writeDoubleBE = function(a, b, c) {
    c || db(this, a, b, 8);
    ta(this, a, b, !1, 52, 8);
    return b + 8;
};
z.prototype.copy = function(a, b, c, d) {
    c || (c = 0);
    d || 0 === d || (d = this.length);
    b >= a.length && (b = a.length);
    b || (b = 0);
    0 < d && d < c && (d = c);
    if (d === c || 0 === a.length || 0 === this.length) return 0;
    if (0 > b) throw new RangeError("targetStart out of bounds");
    if (0 > c || c >= this.length) throw new RangeError("sourceStart out of bounds");
    if (0 > d) throw new RangeError("sourceEnd out of bounds");
    d > this.length && (d = this.length);
    a.length - b < d - c && (d = a.length - b + c);
    var e = d - c;
    if (this === a && c < b && b < d) for(d = e - 1; 0 <= d; --d)a[d + b] = this[d + c];
    else if (1000 > e || !z.TYPED_ARRAY_SUPPORT) for(d = 0; d < e; ++d)a[d + b] = this[d + c];
    else Uint8Array.prototype.set.call(a, this.subarray(c, c + e), b);
    return e;
};
z.prototype.fill = function(a, b, c, d) {
    if ("string" === typeof a) {
        "string" === typeof b ? (d = b, b = 0, c = this.length) : "string" === typeof c && (d = c, c = this.length);
        if (1 === a.length) {
            var e = a.charCodeAt(0);
            256 > e && (a = e);
        }
        if (void 0 !== d && "string" !== typeof d) throw new TypeError("encoding must be a string");
        if ("string" === typeof d && !z.isEncoding(d)) throw new TypeError("Unknown encoding: " + d);
    } else "number" === typeof a && (a &= 255);
    if (0 > b || this.length < b || this.length < c) throw new RangeError("Out of range index");
    if (c <= b) return this;
    b >>>= 0;
    c = void 0 === c ? this.length : c >>> 0;
    a || (a = 0);
    if ("number" === typeof a) for(d = b; d < c; ++d)this[d] = a;
    else for(a = A(a) ? a : Oa(new z(a, d).toString()), e = a.length, d = 0; d < c - b; ++d)this[d + b] = a[d % e];
    return this;
};
var eb = /[^+\/0-9A-Za-z-_]/g;
function Oa(a, b) {
    b = b || Infinity;
    for(var c, d = a.length, e = null, f = [], g = 0; g < d; ++g){
        c = a.charCodeAt(g);
        if (55295 < c && 57344 > c) {
            if (!e) {
                if (56319 < c) {
                    -1 < (b -= 3) && f.push(239, 191, 189);
                    continue;
                } else if (g + 1 === d) {
                    -1 < (b -= 3) && f.push(239, 191, 189);
                    continue;
                }
                e = c;
                continue;
            }
            if (56320 > c) {
                -1 < (b -= 3) && f.push(239, 191, 189);
                e = c;
                continue;
            }
            c = (e - 55296 << 10 | c - 56320) + 65536;
        } else e && -1 < (b -= 3) && f.push(239, 191, 189);
        e = null;
        if (128 > c) {
            if (0 > --b) break;
            f.push(c);
        } else if (2048 > c) {
            if (0 > (b -= 2)) break;
            f.push(c >> 6 | 192, c & 63 | 128);
        } else if (65536 > c) {
            if (0 > (b -= 3)) break;
            f.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128);
        } else if (1114112 > c) {
            if (0 > (b -= 4)) break;
            f.push(c >> 18 | 240, c >> 12 & 63 | 128, c >> 6 & 63 | 128, c & 63 | 128);
        } else throw Error("Invalid code point");
    }
    return f;
}
function Wa(a) {
    for(var b = [], c = 0; c < a.length; ++c)b.push(a.charCodeAt(c) & 255);
    return b;
}
function Pa(a) {
    a = (a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, "")).replace(eb, "");
    if (2 > a.length) a = "";
    else for(; 0 !== a.length % 4;)a += "=";
    oa || pa();
    var b = a.length;
    if (0 < b % 4) throw Error("Invalid string. Length must be a multiple of 4");
    var c = "=" === a[b - 2] ? 2 : "=" === a[b - 1] ? 1 : 0;
    var d = new ma(3 * b / 4 - c);
    var e = 0 < c ? b - 4 : b;
    var f = 0;
    for(b = 0; b < e; b += 4){
        var g = y[a.charCodeAt(b)] << 18 | y[a.charCodeAt(b + 1)] << 12 | y[a.charCodeAt(b + 2)] << 6 | y[a.charCodeAt(b + 3)];
        d[f++] = g >> 16 & 255;
        d[f++] = g >> 8 & 255;
        d[f++] = g & 255;
    }
    2 === c ? (g = y[a.charCodeAt(b)] << 2 | y[a.charCodeAt(b + 1)] >> 4, d[f++] = g & 255) : 1 === c && (g = y[a.charCodeAt(b)] << 10 | y[a.charCodeAt(b + 1)] << 4 | y[a.charCodeAt(b + 2)] >> 2, d[f++] = g >> 8 & 255, d[f++] = g & 255);
    return d;
}
function Va(a, b, c, d) {
    for(var e = 0; e < d && !(e + c >= b.length || e >= a.length); ++e)b[e + c] = a[e];
    return e;
}
function Na(a) {
    return null != a && (!!a._isBuffer || fb(a) || "function" === typeof a.readFloatLE && "function" === typeof a.slice && fb(a.slice(0, 0)));
}
function fb(a) {
    return !!a.constructor && "function" === typeof a.constructor.isBuffer && a.constructor.isBuffer(a);
}
var gb = Object.freeze({
    __proto__: null,
    INSPECT_MAX_BYTES: 50,
    kMaxLength: za,
    Buffer: z,
    SlowBuffer: function(a) {
        +a != a && (a = 0);
        return z.alloc(+a);
    },
    isBuffer: Na
}), F = u(function(a6, b5) {
    function c3(a) {
        for(var b = [], c = 1; c < arguments.length; c++)b[c - 1] = arguments[c];
        return new (gb.Buffer.bind.apply(gb.Buffer, d2([
            void 0,
            a
        ], b)));
    }
    var d2 = l && l.__spreadArrays || function() {
        for(var a = 0, b = 0, c = arguments.length; b < c; b++)a += arguments[b].length;
        a = Array(a);
        var d = 0;
        for(b = 0; b < c; b++)for(var k = arguments[b], p = 0, n = k.length; p < n; p++, d++)a[d] = k[p];
        return a;
    };
    Object.defineProperty(b5, "__esModule", {
        value: !0
    });
    b5.Buffer = gb.Buffer;
    b5.bufferAllocUnsafe = gb.Buffer.allocUnsafe || c3;
    b5.bufferFrom = gb.Buffer.from || c3;
});
t(F);
function hb() {
    throw Error("setTimeout has not been defined");
}
function ib() {
    throw Error("clearTimeout has not been defined");
}
var jb = hb, kb = ib;
"function" === typeof la.setTimeout && (jb = setTimeout);
"function" === typeof la.clearTimeout && (kb = clearTimeout);
function pb(a) {
    if (jb === setTimeout) return setTimeout(a, 0);
    if ((jb === hb || !jb) && setTimeout) return jb = setTimeout, setTimeout(a, 0);
    try {
        return jb(a, 0);
    } catch (b) {
        try {
            return jb.call(null, a, 0);
        } catch (c) {
            return jb.call(this, a, 0);
        }
    }
}
function rb(a) {
    if (kb === clearTimeout) return clearTimeout(a);
    if ((kb === ib || !kb) && clearTimeout) return kb = clearTimeout, clearTimeout(a);
    try {
        return kb(a);
    } catch (b) {
        try {
            return kb.call(null, a);
        } catch (c) {
            return kb.call(this, a);
        }
    }
}
var sb = [], tb = !1, ub, vb = -1;
function wb() {
    tb && ub && (tb = !1, ub.length ? sb = ub.concat(sb) : vb = -1, sb.length && xb());
}
function xb() {
    if (!tb) {
        var a = pb(wb);
        tb = !0;
        for(var b = sb.length; b;){
            ub = sb;
            for(sb = []; ++vb < b;)ub && ub[vb].run();
            vb = -1;
            b = sb.length;
        }
        ub = null;
        tb = !1;
        rb(a);
    }
}
function G(a) {
    var b = Array(arguments.length - 1);
    if (1 < arguments.length) for(var c = 1; c < arguments.length; c++)b[c - 1] = arguments[c];
    sb.push(new yb(a, b));
    1 !== sb.length || tb || pb(xb);
}
function yb(a, b) {
    this.fun = a;
    this.array = b;
}
yb.prototype.run = function() {
    this.fun.apply(null, this.array);
};
function zb() {
}
var performance = la.performance || {
}, Ab = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function() {
    return (new Date).getTime();
}, Bb = new Date, Cb = {
    nextTick: G,
    title: "browser",
    browser: !0,
    env: {
    },
    argv: [],
    version: "",
    versions: {
    },
    on: zb,
    addListener: zb,
    once: zb,
    off: zb,
    removeListener: zb,
    removeAllListeners: zb,
    emit: zb,
    binding: function() {
        throw Error("process.binding is not supported");
    },
    cwd: function() {
        return "/";
    },
    chdir: function() {
        throw Error("process.chdir is not supported");
    },
    umask: function() {
        return 0;
    },
    hrtime: function(a) {
        var b = 0.001 * Ab.call(performance), c = Math.floor(b);
        b = Math.floor(b % 1 * 1000000000);
        a && (c -= a[0], b -= a[1], 0 > b && (c--, b += 1000000000));
        return [
            c,
            b
        ];
    },
    platform: "browser",
    release: {
    },
    config: {
    },
    uptime: function() {
        return (new Date - Bb) / 1000;
    }
}, Db = "function" === typeof Object.create ? function(a, b) {
    a.super_ = b;
    a.prototype = Object.create(b.prototype, {
        constructor: {
            value: a,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    });
} : function(a, b) {
    function c() {
    }
    a.super_ = b;
    c.prototype = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
}, Eb = /%[sdj%]/g;
function Fb(a7) {
    if (!Gb(a7)) {
        for(var b = [], c = 0; c < arguments.length; c++)b.push(H(arguments[c]));
        return b.join(" ");
    }
    c = 1;
    var d = arguments, e = d.length;
    b = String(a7).replace(Eb, function(a) {
        if ("%%" === a) return "%";
        if (c >= e) return a;
        switch(a){
            case "%s":
                return String(d[c++]);
            case "%d":
                return Number(d[c++]);
            case "%j":
                try {
                    return JSON.stringify(d[c++]);
                } catch (h) {
                    return "[Circular]";
                }
            default:
                return a;
        }
    });
    for(var f = d[c]; c < e; f = d[++c])b = null !== f && Hb(f) ? b + (" " + H(f)) : b + (" " + f);
    return b;
}
function Ib(a, b) {
    if (Jb(la.process)) return function() {
        return Ib(a, b).apply(this, arguments);
    };
    if (!0 === Cb.noDeprecation) return a;
    var c = !1;
    return function() {
        if (!c) {
            if (Cb.throwDeprecation) throw Error(b);
            Cb.traceDeprecation ? console.trace(b) : console.error(b);
            c = !0;
        }
        return a.apply(this, arguments);
    };
}
var Kb = {
}, Lb;
function Mb(a) {
    Jb(Lb) && (Lb = Cb.env.NODE_DEBUG || "");
    a = a.toUpperCase();
    Kb[a] || (new RegExp("\\b" + a + "\\b", "i").test(Lb) ? Kb[a] = function() {
        var b = Fb.apply(null, arguments);
        console.error("%s %d: %s", a, 0, b);
    } : Kb[a] = function() {
    });
    return Kb[a];
}
function H(a, b) {
    var c = {
        seen: [],
        stylize: Nb
    };
    3 <= arguments.length && (c.depth = arguments[2]);
    4 <= arguments.length && (c.colors = arguments[3]);
    Ob(b) ? c.showHidden = b : b && Pb(c, b);
    Jb(c.showHidden) && (c.showHidden = !1);
    Jb(c.depth) && (c.depth = 2);
    Jb(c.colors) && (c.colors = !1);
    Jb(c.customInspect) && (c.customInspect = !0);
    c.colors && (c.stylize = Qb);
    return Rb(c, a, c.depth);
}
H.colors = {
    bold: [
        1,
        22
    ],
    italic: [
        3,
        23
    ],
    underline: [
        4,
        24
    ],
    inverse: [
        7,
        27
    ],
    white: [
        37,
        39
    ],
    grey: [
        90,
        39
    ],
    black: [
        30,
        39
    ],
    blue: [
        34,
        39
    ],
    cyan: [
        36,
        39
    ],
    green: [
        32,
        39
    ],
    magenta: [
        35,
        39
    ],
    red: [
        31,
        39
    ],
    yellow: [
        33,
        39
    ]
};
H.styles = {
    special: "cyan",
    number: "yellow",
    "boolean": "yellow",
    undefined: "grey",
    "null": "bold",
    string: "green",
    date: "magenta",
    regexp: "red"
};
function Qb(a, b) {
    return (b = H.styles[b]) ? "\u001b[" + H.colors[b][0] + "m" + a + "\u001b[" + H.colors[b][1] + "m" : a;
}
function Nb(a) {
    return a;
}
function Sb(a) {
    var b = {
    };
    a.forEach(function(a) {
        b[a] = !0;
    });
    return b;
}
function Rb(a, b, c) {
    if (a.customInspect && b && Tb(b.inspect) && b.inspect !== H && (!b.constructor || b.constructor.prototype !== b)) {
        var d = b.inspect(c, a);
        Gb(d) || (d = Rb(a, d, c));
        return d;
    }
    if (d = Ub(a, b)) return d;
    var e = Object.keys(b), f = Sb(e);
    a.showHidden && (e = Object.getOwnPropertyNames(b));
    if (Vb(b) && (0 <= e.indexOf("message") || 0 <= e.indexOf("description"))) return Zb(b);
    if (0 === e.length) {
        if (Tb(b)) return a.stylize("[Function" + (b.name ? ": " + b.name : "") + "]", "special");
        if (ac(b)) return a.stylize(RegExp.prototype.toString.call(b), "regexp");
        if (bc(b)) return a.stylize(Date.prototype.toString.call(b), "date");
        if (Vb(b)) return Zb(b);
    }
    d = "";
    var g = !1, h = [
        "{",
        "}"
    ];
    cc(b) && (g = !0, h = [
        "[",
        "]"
    ]);
    Tb(b) && (d = " [Function" + (b.name ? ": " + b.name : "") + "]");
    ac(b) && (d = " " + RegExp.prototype.toString.call(b));
    bc(b) && (d = " " + Date.prototype.toUTCString.call(b));
    Vb(b) && (d = " " + Zb(b));
    if (0 === e.length && (!g || 0 == b.length)) return h[0] + d + h[1];
    if (0 > c) return ac(b) ? a.stylize(RegExp.prototype.toString.call(b), "regexp") : a.stylize("[Object]", "special");
    a.seen.push(b);
    e = g ? dc(a, b, c, f, e) : e.map(function(d) {
        return ec(a, b, c, f, d, g);
    });
    a.seen.pop();
    return fc(e, d, h);
}
function Ub(a, b) {
    if (Jb(b)) return a.stylize("undefined", "undefined");
    if (Gb(b)) return b = "'" + JSON.stringify(b).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'", a.stylize(b, "string");
    if (gc(b)) return a.stylize("" + b, "number");
    if (Ob(b)) return a.stylize("" + b, "boolean");
    if (null === b) return a.stylize("null", "null");
}
function Zb(a) {
    return "[" + Error.prototype.toString.call(a) + "]";
}
function dc(a, b, c, d, e2) {
    for(var f = [], g = 0, h = b.length; g < h; ++g)Object.prototype.hasOwnProperty.call(b, String(g)) ? f.push(ec(a, b, c, d, String(g), !0)) : f.push("");
    e2.forEach(function(e) {
        e.match(/^\d+$/) || f.push(ec(a, b, c, d, e, !0));
    });
    return f;
}
function ec(a8, b, c, d, e, f) {
    var g, h;
    b = Object.getOwnPropertyDescriptor(b, e) || {
        value: b[e]
    };
    b.get ? h = b.set ? a8.stylize("[Getter/Setter]", "special") : a8.stylize("[Getter]", "special") : b.set && (h = a8.stylize("[Setter]", "special"));
    Object.prototype.hasOwnProperty.call(d, e) || (g = "[" + e + "]");
    h || (0 > a8.seen.indexOf(b.value) ? (h = null === c ? Rb(a8, b.value, null) : Rb(a8, b.value, c - 1), -1 < h.indexOf("\n") && (h = f ? h.split("\n").map(function(a) {
        return "  " + a;
    }).join("\n").substr(2) : "\n" + h.split("\n").map(function(a) {
        return "   " + a;
    }).join("\n"))) : h = a8.stylize("[Circular]", "special"));
    if (Jb(g)) {
        if (f && e.match(/^\d+$/)) return h;
        g = JSON.stringify("" + e);
        g.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (g = g.substr(1, g.length - 2), g = a8.stylize(g, "name")) : (g = g.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), g = a8.stylize(g, "string"));
    }
    return g + ": " + h;
}
function fc(a9, b6, c) {
    return 60 < a9.reduce(function(a, b) {
        b.indexOf("\n");
        return a + b.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0) ? c[0] + ("" === b6 ? "" : b6 + "\n ") + " " + a9.join(",\n  ") + " " + c[1] : c[0] + b6 + " " + a9.join(", ") + " " + c[1];
}
function cc(a) {
    return Array.isArray(a);
}
function Ob(a) {
    return "boolean" === typeof a;
}
function gc(a) {
    return "number" === typeof a;
}
function Gb(a) {
    return "string" === typeof a;
}
function Jb(a) {
    return void 0 === a;
}
function ac(a) {
    return Hb(a) && "[object RegExp]" === Object.prototype.toString.call(a);
}
function Hb(a) {
    return "object" === typeof a && null !== a;
}
function bc(a) {
    return Hb(a) && "[object Date]" === Object.prototype.toString.call(a);
}
function Vb(a) {
    return Hb(a) && ("[object Error]" === Object.prototype.toString.call(a) || a instanceof Error);
}
function Tb(a) {
    return "function" === typeof a;
}
function hc(a) {
    return null === a || "boolean" === typeof a || "number" === typeof a || "string" === typeof a || "symbol" === typeof a || "undefined" === typeof a;
}
function ic(a) {
    return 10 > a ? "0" + a.toString(10) : a.toString(10);
}
var jc = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
function kc() {
    var a = new Date, b = [
        ic(a.getHours()),
        ic(a.getMinutes()),
        ic(a.getSeconds())
    ].join(":");
    return [
        a.getDate(),
        jc[a.getMonth()],
        b
    ].join(" ");
}
function Pb(a, b) {
    if (!b || !Hb(b)) return a;
    for(var c = Object.keys(b), d = c.length; d--;)a[c[d]] = b[c[d]];
    return a;
}
var lc = {
    inherits: Db,
    _extend: Pb,
    log: function() {
        console.log("%s - %s", kc(), Fb.apply(null, arguments));
    },
    isBuffer: function(a) {
        return Na(a);
    },
    isPrimitive: hc,
    isFunction: Tb,
    isError: Vb,
    isDate: bc,
    isObject: Hb,
    isRegExp: ac,
    isUndefined: Jb,
    isSymbol: function(a) {
        return "symbol" === typeof a;
    },
    isString: Gb,
    isNumber: gc,
    isNullOrUndefined: function(a) {
        return null == a;
    },
    isNull: function(a) {
        return null === a;
    },
    isBoolean: Ob,
    isArray: cc,
    inspect: H,
    deprecate: Ib,
    format: Fb,
    debuglog: Mb
};
function mc(a, b) {
    if (a === b) return 0;
    for(var c = a.length, d = b.length, e = 0, f = Math.min(c, d); e < f; ++e)if (a[e] !== b[e]) {
        c = a[e];
        d = b[e];
        break;
    }
    return c < d ? -1 : d < c ? 1 : 0;
}
var nc = Object.prototype.hasOwnProperty, oc = Object.keys || function(a) {
    var b = [], c;
    for(c in a)nc.call(a, c) && b.push(c);
    return b;
}, pc = Array.prototype.slice, qc;
function rc() {
    return "undefined" !== typeof qc ? qc : qc = (function() {
        return "foo" === (function() {
        }).name;
    })();
}
function sc(a) {
    return Na(a) || "function" !== typeof la.ArrayBuffer ? !1 : "function" === typeof ArrayBuffer.isView ? ArrayBuffer.isView(a) : a ? a instanceof DataView || a.buffer && a.buffer instanceof ArrayBuffer ? !0 : !1 : !1;
}
function I(a, b) {
    a || J(a, !0, b, "==", tc);
}
var uc = /\s*function\s+([^\(\s]*)\s*/;
function vc(a) {
    if (Tb(a)) return rc() ? a.name : (a = a.toString().match(uc)) && a[1];
}
I.AssertionError = wc;
function wc(a) {
    this.name = "AssertionError";
    this.actual = a.actual;
    this.expected = a.expected;
    this.operator = a.operator;
    a.message ? (this.message = a.message, this.generatedMessage = !1) : (this.message = xc(yc(this.actual), 128) + " " + this.operator + " " + xc(yc(this.expected), 128), this.generatedMessage = !0);
    var b = a.stackStartFunction || J;
    Error.captureStackTrace ? Error.captureStackTrace(this, b) : (a = Error(), a.stack && (a = a.stack, b = vc(b), b = a.indexOf("\n" + b), 0 <= b && (b = a.indexOf("\n", b + 1), a = a.substring(b + 1)), this.stack = a));
}
Db(wc, Error);
function xc(a, b) {
    return "string" === typeof a ? a.length < b ? a : a.slice(0, b) : a;
}
function yc(a) {
    if (rc() || !Tb(a)) return H(a);
    a = vc(a);
    return "[Function" + (a ? ": " + a : "") + "]";
}
function J(a, b, c, d, e) {
    throw new wc({
        message: c,
        actual: a,
        expected: b,
        operator: d,
        stackStartFunction: e
    });
}
I.fail = J;
function tc(a, b) {
    a || J(a, !0, b, "==", tc);
}
I.ok = tc;
I.equal = zc;
function zc(a, b, c) {
    a != b && J(a, b, c, "==", zc);
}
I.notEqual = Ac;
function Ac(a, b, c) {
    a == b && J(a, b, c, "!=", Ac);
}
I.deepEqual = Bc;
function Bc(a, b, c) {
    Cc(a, b, !1) || J(a, b, c, "deepEqual", Bc);
}
I.deepStrictEqual = Dc;
function Dc(a, b, c) {
    Cc(a, b, !0) || J(a, b, c, "deepStrictEqual", Dc);
}
function Cc(a, b, c, d) {
    if (a === b) return !0;
    if (Na(a) && Na(b)) return 0 === mc(a, b);
    if (bc(a) && bc(b)) return a.getTime() === b.getTime();
    if (ac(a) && ac(b)) return a.source === b.source && a.global === b.global && a.multiline === b.multiline && a.lastIndex === b.lastIndex && a.ignoreCase === b.ignoreCase;
    if (null !== a && "object" === typeof a || null !== b && "object" === typeof b) {
        if (!sc(a) || !sc(b) || Object.prototype.toString.call(a) !== Object.prototype.toString.call(b) || a instanceof Float32Array || a instanceof Float64Array) {
            if (Na(a) !== Na(b)) return !1;
            d = d || {
                actual: [],
                expected: []
            };
            var e = d.actual.indexOf(a);
            if (-1 !== e && e === d.expected.indexOf(b)) return !0;
            d.actual.push(a);
            d.expected.push(b);
            return Ec(a, b, c, d);
        }
        return 0 === mc(new Uint8Array(a.buffer), new Uint8Array(b.buffer));
    }
    return c ? a === b : a == b;
}
function Fc(a) {
    return "[object Arguments]" == Object.prototype.toString.call(a);
}
function Ec(a, b, c, d) {
    if (null === a || void 0 === a || null === b || void 0 === b) return !1;
    if (hc(a) || hc(b)) return a === b;
    if (c && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) return !1;
    var e = Fc(a), f = Fc(b);
    if (e && !f || !e && f) return !1;
    if (e) return a = pc.call(a), b = pc.call(b), Cc(a, b, c);
    e = oc(a);
    var g = oc(b);
    if (e.length !== g.length) return !1;
    e.sort();
    g.sort();
    for(f = e.length - 1; 0 <= f; f--)if (e[f] !== g[f]) return !1;
    for(f = e.length - 1; 0 <= f; f--)if (g = e[f], !Cc(a[g], b[g], c, d)) return !1;
    return !0;
}
I.notDeepEqual = Gc;
function Gc(a, b, c) {
    Cc(a, b, !1) && J(a, b, c, "notDeepEqual", Gc);
}
I.notDeepStrictEqual = Hc;
function Hc(a, b, c) {
    Cc(a, b, !0) && J(a, b, c, "notDeepStrictEqual", Hc);
}
I.strictEqual = Ic;
function Ic(a, b, c) {
    a !== b && J(a, b, c, "===", Ic);
}
I.notStrictEqual = Jc;
function Jc(a, b, c) {
    a === b && J(a, b, c, "!==", Jc);
}
function Kc(a, b) {
    if (!a || !b) return !1;
    if ("[object RegExp]" == Object.prototype.toString.call(b)) return b.test(a);
    try {
        if (a instanceof b) return !0;
    } catch (c) {
    }
    return Error.isPrototypeOf(b) ? !1 : !0 === b.call({
    }, a);
}
function Lc(a, b, c, d) {
    if ("function" !== typeof b) throw new TypeError('"block" argument must be a function');
    "string" === typeof c && (d = c, c = null);
    try {
        b();
    } catch (h) {
        var e = h;
    }
    b = e;
    d = (c && c.name ? " (" + c.name + ")." : ".") + (d ? " " + d : ".");
    a && !b && J(b, c, "Missing expected exception" + d);
    e = "string" === typeof d;
    var f = !a && Vb(b), g = !a && b && !c;
    (f && e && Kc(b, c) || g) && J(b, c, "Got unwanted exception" + d);
    if (a && b && c && !Kc(b, c) || !a && b) throw b;
}
I.throws = Mc;
function Mc(a, b, c) {
    Lc(!0, a, b, c);
}
I.doesNotThrow = Nc;
function Nc(a, b, c) {
    Lc(!1, a, b, c);
}
I.ifError = Oc;
function Oc(a) {
    if (a) throw a;
}
var Pc = u(function(a10, b7) {
    function c4(a11) {
        return (function(a) {
            function b8(b) {
                for(var c = [], e = 1; e < arguments.length; e++)c[e - 1] = arguments[e];
                c = a.call(this, d3(b, c)) || this;
                c.code = b;
                c[h] = b;
                c.name = a.prototype.name + " [" + c[h] + "]";
                return c;
            }
            g(b8, a);
            return b8;
        })(a11);
    }
    function d3(a, b) {
        I.strictEqual(typeof a, "string");
        var c = k[a];
        I(c, "An invalid error message key was used: " + a + ".");
        if ("function" === typeof c) a = c;
        else {
            a = lc.format;
            if (void 0 === b || 0 === b.length) return c;
            b.unshift(c);
        }
        return String(a.apply(null, b));
    }
    function e3(a, b) {
        k[a] = "function" === typeof b ? b : String(b);
    }
    function f(a12, b) {
        I(a12, "expected is required");
        I("string" === typeof b, "thing is required");
        if (Array.isArray(a12)) {
            var c = a12.length;
            I(0 < c, "At least one expected value needs to be specified");
            a12 = a12.map(function(a) {
                return String(a);
            });
            return 2 < c ? "one of " + b + " " + a12.slice(0, c - 1).join(", ") + ", or " + a12[c - 1] : 2 === c ? "one of " + b + " " + a12[0] + " or " + a12[1] : "of " + b + " " + a12[0];
        }
        return "of " + b + " " + String(a12);
    }
    var g = l && l.__extends || function() {
        function a13(b9, c5) {
            a13 = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(a, b) {
                a.__proto__ = b;
            } || function(a, b) {
                for(var c in b)b.hasOwnProperty(c) && (a[c] = b[c]);
            };
            return a13(b9, c5);
        }
        return function(b, c) {
            function d() {
                this.constructor = b;
            }
            a13(b, c);
            b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d);
        };
    }();
    Object.defineProperty(b7, "__esModule", {
        value: !0
    });
    var h = "undefined" === typeof Symbol ? "_kCode" : Symbol("code"), k = {
    };
    a10 = (function(a) {
        function c6(c) {
            if ("object" !== typeof c || null === c) throw new b7.TypeError("ERR_INVALID_ARG_TYPE", "options", "object");
            var d = c.message ? a.call(this, c.message) || this : a.call(this, lc.inspect(c.actual).slice(0, 128) + " " + (c.operator + " " + lc.inspect(c.expected).slice(0, 128))) || this;
            d.generatedMessage = !c.message;
            d.name = "AssertionError [ERR_ASSERTION]";
            d.code = "ERR_ASSERTION";
            d.actual = c.actual;
            d.expected = c.expected;
            d.operator = c.operator;
            b7.Error.captureStackTrace(d, c.stackStartFunction);
            return d;
        }
        g(c6, a);
        return c6;
    })(l.Error);
    b7.AssertionError = a10;
    b7.message = d3;
    b7.E = e3;
    b7.Error = c4(l.Error);
    b7.TypeError = c4(l.TypeError);
    b7.RangeError = c4(l.RangeError);
    e3("ERR_ARG_NOT_ITERABLE", "%s must be iterable");
    e3("ERR_ASSERTION", "%s");
    e3("ERR_BUFFER_OUT_OF_BOUNDS", function(a, b) {
        return b ? "Attempt to write outside buffer bounds" : '"' + a + '" is outside of buffer bounds';
    });
    e3("ERR_CHILD_CLOSED_BEFORE_REPLY", "Child closed before reply received");
    e3("ERR_CONSOLE_WRITABLE_STREAM", "Console expects a writable stream instance for %s");
    e3("ERR_CPU_USAGE", "Unable to obtain cpu usage %s");
    e3("ERR_DNS_SET_SERVERS_FAILED", function(a, b) {
        return 'c-ares failed to set servers: "' + a + '" [' + b + "]";
    });
    e3("ERR_FALSY_VALUE_REJECTION", "Promise was rejected with falsy value");
    e3("ERR_ENCODING_NOT_SUPPORTED", function(a) {
        return 'The "' + a + '" encoding is not supported';
    });
    e3("ERR_ENCODING_INVALID_ENCODED_DATA", function(a) {
        return "The encoded data was not valid for encoding " + a;
    });
    e3("ERR_HTTP_HEADERS_SENT", "Cannot render headers after they are sent to the client");
    e3("ERR_HTTP_INVALID_STATUS_CODE", "Invalid status code: %s");
    e3("ERR_HTTP_TRAILER_INVALID", "Trailers are invalid with this transfer encoding");
    e3("ERR_INDEX_OUT_OF_RANGE", "Index out of range");
    e3("ERR_INVALID_ARG_TYPE", function(a14, b, c) {
        I(a14, "name is required");
        if (b.includes("not ")) {
            var d = "must not be";
            b = b.split("not ")[1];
        } else d = "must be";
        if (Array.isArray(a14)) d = "The " + a14.map(function(a) {
            return '"' + a + '"';
        }).join(", ") + " arguments " + d + " " + f(b, "type");
        else if (a14.includes(" argument")) d = "The " + a14 + " " + d + " " + f(b, "type");
        else {
            var e = a14.includes(".") ? "property" : "argument";
            d = 'The "' + a14 + '" ' + e + " " + d + " " + f(b, "type");
        }
        3 <= arguments.length && (d += ". Received type " + (null !== c ? typeof c : "null"));
        return d;
    });
    e3("ERR_INVALID_ARRAY_LENGTH", function(a, b, c) {
        I.strictEqual(typeof c, "number");
        return 'The array "' + a + '" (length ' + c + ") must be of length " + b + ".";
    });
    e3("ERR_INVALID_BUFFER_SIZE", "Buffer size must be a multiple of %s");
    e3("ERR_INVALID_CALLBACK", "Callback must be a function");
    e3("ERR_INVALID_CHAR", "Invalid character in %s");
    e3("ERR_INVALID_CURSOR_POS", "Cannot set cursor row without setting its column");
    e3("ERR_INVALID_FD", '"fd" must be a positive integer: %s');
    e3("ERR_INVALID_FILE_URL_HOST", 'File URL host must be "localhost" or empty on %s');
    e3("ERR_INVALID_FILE_URL_PATH", "File URL path %s");
    e3("ERR_INVALID_HANDLE_TYPE", "This handle type cannot be sent");
    e3("ERR_INVALID_IP_ADDRESS", "Invalid IP address: %s");
    e3("ERR_INVALID_OPT_VALUE", function(a, b) {
        return 'The value "' + String(b) + '" is invalid for option "' + a + '"';
    });
    e3("ERR_INVALID_OPT_VALUE_ENCODING", function(a) {
        return 'The value "' + String(a) + '" is invalid for option "encoding"';
    });
    e3("ERR_INVALID_REPL_EVAL_CONFIG", 'Cannot specify both "breakEvalOnSigint" and "eval" for REPL');
    e3("ERR_INVALID_SYNC_FORK_INPUT", "Asynchronous forks do not support Buffer, Uint8Array or string input: %s");
    e3("ERR_INVALID_THIS", 'Value of "this" must be of type %s');
    e3("ERR_INVALID_TUPLE", "%s must be an iterable %s tuple");
    e3("ERR_INVALID_URL", "Invalid URL: %s");
    e3("ERR_INVALID_URL_SCHEME", function(a) {
        return "The URL must be " + f(a, "scheme");
    });
    e3("ERR_IPC_CHANNEL_CLOSED", "Channel closed");
    e3("ERR_IPC_DISCONNECTED", "IPC channel is already disconnected");
    e3("ERR_IPC_ONE_PIPE", "Child process can have only one IPC pipe");
    e3("ERR_IPC_SYNC_FORK", "IPC cannot be used with synchronous forks");
    e3("ERR_MISSING_ARGS", function() {
        for(var a15 = [], b = 0; b < arguments.length; b++)a15[b] = arguments[b];
        I(0 < a15.length, "At least one arg needs to be specified");
        b = "The ";
        var c = a15.length;
        a15 = a15.map(function(a) {
            return '"' + a + '"';
        });
        switch(c){
            case 1:
                b += a15[0] + " argument";
                break;
            case 2:
                b += a15[0] + " and " + a15[1] + " arguments";
                break;
            default:
                b += a15.slice(0, c - 1).join(", "), b += ", and " + a15[c - 1] + " arguments";
        }
        return b + " must be specified";
    });
    e3("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
    e3("ERR_NAPI_CONS_FUNCTION", "Constructor must be a function");
    e3("ERR_NAPI_CONS_PROTOTYPE_OBJECT", "Constructor.prototype must be an object");
    e3("ERR_NO_CRYPTO", "Node.js is not compiled with OpenSSL crypto support");
    e3("ERR_NO_LONGER_SUPPORTED", "%s is no longer supported");
    e3("ERR_PARSE_HISTORY_DATA", "Could not parse history data in %s");
    e3("ERR_SOCKET_ALREADY_BOUND", "Socket is already bound");
    e3("ERR_SOCKET_BAD_PORT", "Port should be > 0 and < 65536");
    e3("ERR_SOCKET_BAD_TYPE", "Bad socket type specified. Valid types are: udp4, udp6");
    e3("ERR_SOCKET_CANNOT_SEND", "Unable to send data");
    e3("ERR_SOCKET_CLOSED", "Socket is closed");
    e3("ERR_SOCKET_DGRAM_NOT_RUNNING", "Not running");
    e3("ERR_STDERR_CLOSE", "process.stderr cannot be closed");
    e3("ERR_STDOUT_CLOSE", "process.stdout cannot be closed");
    e3("ERR_STREAM_WRAP", "Stream has StringDecoder set or is in objectMode");
    e3("ERR_TLS_CERT_ALTNAME_INVALID", "Hostname/IP does not match certificate's altnames: %s");
    e3("ERR_TLS_DH_PARAM_SIZE", function(a) {
        return "DH parameter size " + a + " is less than 2048";
    });
    e3("ERR_TLS_HANDSHAKE_TIMEOUT", "TLS handshake timeout");
    e3("ERR_TLS_RENEGOTIATION_FAILED", "Failed to renegotiate");
    e3("ERR_TLS_REQUIRED_SERVER_NAME", '"servername" is required parameter for Server.addContext');
    e3("ERR_TLS_SESSION_ATTACK", "TSL session renegotiation attack detected");
    e3("ERR_TRANSFORM_ALREADY_TRANSFORMING", "Calling transform done when still transforming");
    e3("ERR_TRANSFORM_WITH_LENGTH_0", "Calling transform done when writableState.length != 0");
    e3("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s");
    e3("ERR_UNKNOWN_SIGNAL", "Unknown signal: %s");
    e3("ERR_UNKNOWN_STDIN_TYPE", "Unknown stdin file type");
    e3("ERR_UNKNOWN_STREAM_TYPE", "Unknown stream file type");
    e3("ERR_V8BREAKITERATOR", "Full ICU data not installed. See https://github.com/nodejs/node/wiki/Intl");
});
t(Pc);
var K = u(function(a16, b) {
    Object.defineProperty(b, "__esModule", {
        value: !0
    });
    b.ENCODING_UTF8 = "utf8";
    b.assertEncoding = function(a) {
        if (a && !F.Buffer.isEncoding(a)) throw new Pc.TypeError("ERR_INVALID_OPT_VALUE_ENCODING", a);
    };
    b.strToEncoding = function(a, d) {
        return d && d !== b.ENCODING_UTF8 ? "buffer" === d ? new F.Buffer(a) : new F.Buffer(a).toString(d) : a;
    };
});
t(K);
var Qc = u(function(a17, b10) {
    Object.defineProperty(b10, "__esModule", {
        value: !0
    });
    var c7 = w.constants.S_IFMT, d4 = w.constants.S_IFDIR, e4 = w.constants.S_IFREG, f = w.constants.S_IFBLK, g = w.constants.S_IFCHR, h = w.constants.S_IFLNK, k = w.constants.S_IFIFO, p = w.constants.S_IFSOCK;
    a17 = (function() {
        function a18() {
            this.name = "";
            this.mode = 0;
        }
        a18.build = function(b, c) {
            var d = new a18, e = b.getNode().mode;
            d.name = K.strToEncoding(b.getName(), c);
            d.mode = e;
            return d;
        };
        a18.prototype._checkModeProperty = function(a) {
            return (this.mode & c7) === a;
        };
        a18.prototype.isDirectory = function() {
            return this._checkModeProperty(d4);
        };
        a18.prototype.isFile = function() {
            return this._checkModeProperty(e4);
        };
        a18.prototype.isBlockDevice = function() {
            return this._checkModeProperty(f);
        };
        a18.prototype.isCharacterDevice = function() {
            return this._checkModeProperty(g);
        };
        a18.prototype.isSymbolicLink = function() {
            return this._checkModeProperty(h);
        };
        a18.prototype.isFIFO = function() {
            return this._checkModeProperty(k);
        };
        a18.prototype.isSocket = function() {
            return this._checkModeProperty(p);
        };
        return a18;
    })();
    b10.Dirent = a17;
    b10.default = a17;
});
t(Qc);
function Rc(a, b) {
    for(var c = 0, d = a.length - 1; 0 <= d; d--){
        var e = a[d];
        "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--);
    }
    if (b) for(; c--;)a.unshift("..");
    return a;
}
var Sc = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
function Tc() {
    for(var a19 = "", b = !1, c = arguments.length - 1; -1 <= c && !b; c--){
        var d = 0 <= c ? arguments[c] : "/";
        if ("string" !== typeof d) throw new TypeError("Arguments to path.resolve must be strings");
        d && (a19 = d + "/" + a19, b = "/" === d.charAt(0));
    }
    a19 = Rc(Uc(a19.split("/"), function(a) {
        return !!a;
    }), !b).join("/");
    return (b ? "/" : "") + a19 || ".";
}
function Vc(a20) {
    var b = Wc(a20), c = "/" === Xc(a20, -1);
    (a20 = Rc(Uc(a20.split("/"), function(a) {
        return !!a;
    }), !b).join("/")) || b || (a20 = ".");
    a20 && c && (a20 += "/");
    return (b ? "/" : "") + a20;
}
function Wc(a) {
    return "/" === a.charAt(0);
}
function Yc(a21, b11) {
    function c8(a) {
        for(var b = 0; b < a.length && "" === a[b]; b++);
        for(var c = a.length - 1; 0 <= c && "" === a[c]; c--);
        return b > c ? [] : a.slice(b, c - b + 1);
    }
    a21 = Tc(a21).substr(1);
    b11 = Tc(b11).substr(1);
    a21 = c8(a21.split("/"));
    b11 = c8(b11.split("/"));
    for(var d = Math.min(a21.length, b11.length), e = d, f = 0; f < d; f++)if (a21[f] !== b11[f]) {
        e = f;
        break;
    }
    d = [];
    for(f = e; f < a21.length; f++)d.push("..");
    d = d.concat(b11.slice(e));
    return d.join("/");
}
var Zc = {
    extname: function(a) {
        return Sc.exec(a).slice(1)[3];
    },
    basename: function(a, b) {
        a = Sc.exec(a).slice(1)[2];
        b && a.substr(-1 * b.length) === b && (a = a.substr(0, a.length - b.length));
        return a;
    },
    dirname: function(a) {
        var b = Sc.exec(a).slice(1);
        a = b[0];
        b = b[1];
        if (!a && !b) return ".";
        b && (b = b.substr(0, b.length - 1));
        return a + b;
    },
    sep: "/",
    delimiter: ":",
    relative: Yc,
    join: function() {
        var a22 = Array.prototype.slice.call(arguments, 0);
        return Vc(Uc(a22, function(a) {
            if ("string" !== typeof a) throw new TypeError("Arguments to path.join must be strings");
            return a;
        }).join("/"));
    },
    isAbsolute: Wc,
    normalize: Vc,
    resolve: Tc
};
function Uc(a, b) {
    if (a.filter) return a.filter(b);
    for(var c = [], d = 0; d < a.length; d++)b(a[d], d, a) && c.push(a[d]);
    return c;
}
var Xc = "b" === "ab".substr(-1) ? function(a, b, c) {
    return a.substr(b, c);
} : function(a, b, c) {
    0 > b && (b = a.length + b);
    return a.substr(b, c);
}, $c = u(function(a, b) {
    Object.defineProperty(b, "__esModule", {
        value: !0
    });
    a = "function" === typeof setImmediate ? setImmediate.bind(l) : setTimeout.bind(l);
    b.default = a;
});
t($c);
var L = u(function(a23, b12) {
    function c() {
        var a24 = Cb || {
        };
        a24.getuid || (a24.getuid = function() {
            return 0;
        });
        a24.getgid || (a24.getgid = function() {
            return 0;
        });
        a24.cwd || (a24.cwd = function() {
            return "/";
        });
        a24.nextTick || (a24.nextTick = $c.default);
        a24.emitWarning || (a24.emitWarning = function(a, b) {
            console.warn("" + b + (b ? ": " : "") + a);
        });
        a24.env || (a24.env = {
        });
        return a24;
    }
    Object.defineProperty(b12, "__esModule", {
        value: !0
    });
    b12.createProcess = c;
    b12.default = c();
});
t(L);
function ad() {
}
ad.prototype = Object.create(null);
function O() {
    O.init.call(this);
}
O.EventEmitter = O;
O.usingDomains = !1;
O.prototype.domain = void 0;
O.prototype._events = void 0;
O.prototype._maxListeners = void 0;
O.defaultMaxListeners = 10;
O.init = function() {
    this.domain = null;
    this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = new ad, this._eventsCount = 0);
    this._maxListeners = this._maxListeners || void 0;
};
O.prototype.setMaxListeners = function(a) {
    if ("number" !== typeof a || 0 > a || isNaN(a)) throw new TypeError('"n" argument must be a positive number');
    this._maxListeners = a;
    return this;
};
O.prototype.getMaxListeners = function() {
    return void 0 === this._maxListeners ? O.defaultMaxListeners : this._maxListeners;
};
O.prototype.emit = function(a) {
    var b, c;
    var d = "error" === a;
    if (b = this._events) d = d && null == b.error;
    else if (!d) return !1;
    var e = this.domain;
    if (d) {
        b = arguments[1];
        if (e) b || (b = Error('Uncaught, unspecified "error" event')), b.domainEmitter = this, b.domain = e, b.domainThrown = !1, e.emit("error", b);
        else {
            if (b instanceof Error) throw b;
            e = Error('Uncaught, unspecified "error" event. (' + b + ")");
            e.context = b;
            throw e;
        }
        return !1;
    }
    e = b[a];
    if (!e) return !1;
    b = "function" === typeof e;
    var f = arguments.length;
    switch(f){
        case 1:
            if (b) e.call(this);
            else for(b = e.length, e = bd(e, b), d = 0; d < b; ++d)e[d].call(this);
            break;
        case 2:
            d = arguments[1];
            if (b) e.call(this, d);
            else for(b = e.length, e = bd(e, b), f = 0; f < b; ++f)e[f].call(this, d);
            break;
        case 3:
            d = arguments[1];
            f = arguments[2];
            if (b) e.call(this, d, f);
            else for(b = e.length, e = bd(e, b), c = 0; c < b; ++c)e[c].call(this, d, f);
            break;
        case 4:
            d = arguments[1];
            f = arguments[2];
            c = arguments[3];
            if (b) e.call(this, d, f, c);
            else {
                b = e.length;
                e = bd(e, b);
                for(var g = 0; g < b; ++g)e[g].call(this, d, f, c);
            }
            break;
        default:
            d = Array(f - 1);
            for(c = 1; c < f; c++)d[c - 1] = arguments[c];
            if (b) e.apply(this, d);
            else for(b = e.length, e = bd(e, b), f = 0; f < b; ++f)e[f].apply(this, d);
    }
    return !0;
};
function cd(a, b, c, d) {
    var e;
    if ("function" !== typeof c) throw new TypeError('"listener" argument must be a function');
    if (e = a._events) {
        e.newListener && (a.emit("newListener", b, c.listener ? c.listener : c), e = a._events);
        var f = e[b];
    } else e = a._events = new ad, a._eventsCount = 0;
    f ? ("function" === typeof f ? f = e[b] = d ? [
        c,
        f
    ] : [
        f,
        c
    ] : d ? f.unshift(c) : f.push(c), f.warned || (c = void 0 === a._maxListeners ? O.defaultMaxListeners : a._maxListeners) && 0 < c && f.length > c && (f.warned = !0, c = Error("Possible EventEmitter memory leak detected. " + f.length + " " + b + " listeners added. Use emitter.setMaxListeners() to increase limit"), c.name = "MaxListenersExceededWarning", c.emitter = a, c.type = b, c.count = f.length, "function" === typeof console.warn ? console.warn(c) : console.log(c))) : (e[b] = c, ++a._eventsCount);
    return a;
}
O.prototype.addListener = function(a, b) {
    return cd(this, a, b, !1);
};
O.prototype.on = O.prototype.addListener;
O.prototype.prependListener = function(a, b) {
    return cd(this, a, b, !0);
};
function dd(a, b, c) {
    function d() {
        a.removeListener(b, d);
        e || (e = !0, c.apply(a, arguments));
    }
    var e = !1;
    d.listener = c;
    return d;
}
O.prototype.once = function(a, b) {
    if ("function" !== typeof b) throw new TypeError('"listener" argument must be a function');
    this.on(a, dd(this, a, b));
    return this;
};
O.prototype.prependOnceListener = function(a, b) {
    if ("function" !== typeof b) throw new TypeError('"listener" argument must be a function');
    this.prependListener(a, dd(this, a, b));
    return this;
};
O.prototype.removeListener = function(a, b) {
    var c;
    if ("function" !== typeof b) throw new TypeError('"listener" argument must be a function');
    var d = this._events;
    if (!d) return this;
    var e = d[a];
    if (!e) return this;
    if (e === b || e.listener && e.listener === b) 0 === --this._eventsCount ? this._events = new ad : (delete d[a], d.removeListener && this.emit("removeListener", a, e.listener || b));
    else if ("function" !== typeof e) {
        var f = -1;
        for(c = e.length; 0 < c--;)if (e[c] === b || e[c].listener && e[c].listener === b) {
            var g = e[c].listener;
            f = c;
            break;
        }
        if (0 > f) return this;
        if (1 === e.length) {
            e[0] = void 0;
            if (0 === --this._eventsCount) return this._events = new ad, this;
            delete d[a];
        } else {
            c = f + 1;
            for(var h = e.length; c < h; f += 1, c += 1)e[f] = e[c];
            e.pop();
        }
        d.removeListener && this.emit("removeListener", a, g || b);
    }
    return this;
};
O.prototype.removeAllListeners = function(a) {
    var b = this._events;
    if (!b) return this;
    if (!b.removeListener) return 0 === arguments.length ? (this._events = new ad, this._eventsCount = 0) : b[a] && (0 === --this._eventsCount ? this._events = new ad : delete b[a]), this;
    if (0 === arguments.length) {
        b = Object.keys(b);
        for(var c = 0, d; c < b.length; ++c)d = b[c], "removeListener" !== d && this.removeAllListeners(d);
        this.removeAllListeners("removeListener");
        this._events = new ad;
        this._eventsCount = 0;
        return this;
    }
    b = b[a];
    if ("function" === typeof b) this.removeListener(a, b);
    else if (b) do this.removeListener(a, b[b.length - 1]);
    while (b[0])
    return this;
};
O.prototype.listeners = function(a) {
    var b = this._events;
    if (b) {
        if (a = b[a]) {
            if ("function" === typeof a) a = [
                a.listener || a
            ];
            else {
                b = Array(a.length);
                for(var c = 0; c < b.length; ++c)b[c] = a[c].listener || a[c];
                a = b;
            }
        } else a = [];
    } else a = [];
    return a;
};
O.listenerCount = function(a, b) {
    return "function" === typeof a.listenerCount ? a.listenerCount(b) : ed.call(a, b);
};
O.prototype.listenerCount = ed;
function ed(a) {
    var b = this._events;
    if (b) {
        a = b[a];
        if ("function" === typeof a) return 1;
        if (a) return a.length;
    }
    return 0;
}
O.prototype.eventNames = function() {
    return 0 < this._eventsCount ? Reflect.ownKeys(this._events) : [];
};
function bd(a, b) {
    for(var c = Array(b); b--;)c[b] = a[b];
    return c;
}
var fd = u(function(a25, b13) {
    var c9 = l && l.__extends || function() {
        function a26(b14, c10) {
            a26 = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(a, b) {
                a.__proto__ = b;
            } || function(a, b) {
                for(var c in b)b.hasOwnProperty(c) && (a[c] = b[c]);
            };
            return a26(b14, c10);
        }
        return function(b, c) {
            function d() {
                this.constructor = b;
            }
            a26(b, c);
            b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d);
        };
    }();
    Object.defineProperty(b13, "__esModule", {
        value: !0
    });
    var d5 = w.constants.S_IFMT, e5 = w.constants.S_IFDIR, f = w.constants.S_IFREG, g = w.constants.S_IFLNK, h = w.constants.O_APPEND;
    b13.SEP = "/";
    a25 = (function(a27) {
        function b15(b, c) {
            void 0 === c && (c = 438);
            var d = a27.call(this) || this;
            d.uid = L.default.getuid();
            d.gid = L.default.getgid();
            d.atime = new Date;
            d.mtime = new Date;
            d.ctime = new Date;
            d.perm = 438;
            d.mode = f;
            d.nlink = 1;
            d.perm = c;
            d.mode |= c;
            d.ino = b;
            return d;
        }
        c9(b15, a27);
        b15.prototype.getString = function(a) {
            void 0 === a && (a = "utf8");
            return this.getBuffer().toString(a);
        };
        b15.prototype.setString = function(a) {
            this.buf = F.bufferFrom(a, "utf8");
            this.touch();
        };
        b15.prototype.getBuffer = function() {
            this.buf || this.setBuffer(F.bufferAllocUnsafe(0));
            return F.bufferFrom(this.buf);
        };
        b15.prototype.setBuffer = function(a) {
            this.buf = F.bufferFrom(a);
            this.touch();
        };
        b15.prototype.getSize = function() {
            return this.buf ? this.buf.length : 0;
        };
        b15.prototype.setModeProperty = function(a) {
            this.mode = this.mode & ~d5 | a;
        };
        b15.prototype.setIsFile = function() {
            this.setModeProperty(f);
        };
        b15.prototype.setIsDirectory = function() {
            this.setModeProperty(e5);
        };
        b15.prototype.setIsSymlink = function() {
            this.setModeProperty(g);
        };
        b15.prototype.isFile = function() {
            return (this.mode & d5) === f;
        };
        b15.prototype.isDirectory = function() {
            return (this.mode & d5) === e5;
        };
        b15.prototype.isSymlink = function() {
            return (this.mode & d5) === g;
        };
        b15.prototype.makeSymlink = function(a) {
            this.symlink = a;
            this.setIsSymlink();
        };
        b15.prototype.write = function(a, b, c, d) {
            void 0 === b && (b = 0);
            void 0 === c && (c = a.length);
            void 0 === d && (d = 0);
            this.buf || (this.buf = F.bufferAllocUnsafe(0));
            if (d + c > this.buf.length) {
                var e = F.bufferAllocUnsafe(d + c);
                this.buf.copy(e, 0, 0, this.buf.length);
                this.buf = e;
            }
            a.copy(this.buf, d, b, b + c);
            this.touch();
            return c;
        };
        b15.prototype.read = function(a, b, c, d) {
            void 0 === b && (b = 0);
            void 0 === c && (c = a.byteLength);
            void 0 === d && (d = 0);
            this.buf || (this.buf = F.bufferAllocUnsafe(0));
            c > a.byteLength && (c = a.byteLength);
            c + d > this.buf.length && (c = this.buf.length - d);
            this.buf.copy(a, b, d, d + c);
            return c;
        };
        b15.prototype.truncate = function(a) {
            void 0 === a && (a = 0);
            if (a) {
                if (this.buf || (this.buf = F.bufferAllocUnsafe(0)), a <= this.buf.length) this.buf = this.buf.slice(0, a);
                else {
                    var b = F.bufferAllocUnsafe(0);
                    this.buf.copy(b);
                    b.fill(0, a);
                }
            } else this.buf = F.bufferAllocUnsafe(0);
            this.touch();
        };
        b15.prototype.chmod = function(a) {
            this.perm = a;
            this.mode = this.mode & -512 | a;
            this.touch();
        };
        b15.prototype.chown = function(a, b) {
            this.uid = a;
            this.gid = b;
            this.touch();
        };
        b15.prototype.touch = function() {
            this.mtime = new Date;
            this.emit("change", this);
        };
        b15.prototype.canRead = function(a, b) {
            void 0 === a && (a = L.default.getuid());
            void 0 === b && (b = L.default.getgid());
            return this.perm & 4 || b === this.gid && this.perm & 32 || a === this.uid && this.perm & 256 ? !0 : !1;
        };
        b15.prototype.canWrite = function(a, b) {
            void 0 === a && (a = L.default.getuid());
            void 0 === b && (b = L.default.getgid());
            return this.perm & 2 || b === this.gid && this.perm & 16 || a === this.uid && this.perm & 128 ? !0 : !1;
        };
        b15.prototype.del = function() {
            this.emit("delete", this);
        };
        b15.prototype.toJSON = function() {
            return {
                ino: this.ino,
                uid: this.uid,
                gid: this.gid,
                atime: this.atime.getTime(),
                mtime: this.mtime.getTime(),
                ctime: this.ctime.getTime(),
                perm: this.perm,
                mode: this.mode,
                nlink: this.nlink,
                symlink: this.symlink,
                data: this.getString()
            };
        };
        return b15;
    })(O.EventEmitter);
    b13.Node = a25;
    a25 = (function(a28) {
        function d6(b, c, d) {
            var e = a28.call(this) || this;
            e.children = {
            };
            e.steps = [];
            e.ino = 0;
            e.length = 0;
            e.vol = b;
            e.parent = c;
            e.steps = c ? c.steps.concat([
                d
            ]) : [
                d
            ];
            return e;
        }
        c9(d6, a28);
        d6.prototype.setNode = function(a) {
            this.node = a;
            this.ino = a.ino;
        };
        d6.prototype.getNode = function() {
            return this.node;
        };
        d6.prototype.createChild = function(a, b) {
            void 0 === b && (b = this.vol.createNode());
            var c = new d6(this.vol, this, a);
            c.setNode(b);
            b.isDirectory();
            this.setChild(a, c);
            return c;
        };
        d6.prototype.setChild = function(a, b) {
            void 0 === b && (b = new d6(this.vol, this, a));
            this.children[a] = b;
            b.parent = this;
            this.length++;
            this.emit("child:add", b, this);
            return b;
        };
        d6.prototype.deleteChild = function(a) {
            delete this.children[a.getName()];
            this.length--;
            this.emit("child:delete", a, this);
        };
        d6.prototype.getChild = function(a) {
            if (Object.hasOwnProperty.call(this.children, a)) return this.children[a];
        };
        d6.prototype.getPath = function() {
            return this.steps.join(b13.SEP);
        };
        d6.prototype.getName = function() {
            return this.steps[this.steps.length - 1];
        };
        d6.prototype.walk = function(a, b, c) {
            void 0 === b && (b = a.length);
            void 0 === c && (c = 0);
            if (c >= a.length || c >= b) return this;
            var d = this.getChild(a[c]);
            return d ? d.walk(a, b, c + 1) : null;
        };
        d6.prototype.toJSON = function() {
            return {
                steps: this.steps,
                ino: this.ino,
                children: Object.keys(this.children)
            };
        };
        return d6;
    })(O.EventEmitter);
    b13.Link = a25;
    a25 = (function() {
        function a29(a, b, c, d) {
            this.position = 0;
            this.link = a;
            this.node = b;
            this.flags = c;
            this.fd = d;
        }
        a29.prototype.getString = function() {
            return this.node.getString();
        };
        a29.prototype.setString = function(a) {
            this.node.setString(a);
        };
        a29.prototype.getBuffer = function() {
            return this.node.getBuffer();
        };
        a29.prototype.setBuffer = function(a) {
            this.node.setBuffer(a);
        };
        a29.prototype.getSize = function() {
            return this.node.getSize();
        };
        a29.prototype.truncate = function(a) {
            this.node.truncate(a);
        };
        a29.prototype.seekTo = function(a) {
            this.position = a;
        };
        a29.prototype.stats = function() {
            return ka.default.build(this.node);
        };
        a29.prototype.write = function(a, b, c, d) {
            void 0 === b && (b = 0);
            void 0 === c && (c = a.length);
            "number" !== typeof d && (d = this.position);
            this.flags & h && (d = this.getSize());
            a = this.node.write(a, b, c, d);
            this.position = d + a;
            return a;
        };
        a29.prototype.read = function(a, b, c, d) {
            void 0 === b && (b = 0);
            void 0 === c && (c = a.byteLength);
            "number" !== typeof d && (d = this.position);
            a = this.node.read(a, b, c, d);
            this.position = d + a;
            return a;
        };
        a29.prototype.chmod = function(a) {
            this.node.chmod(a);
        };
        a29.prototype.chown = function(a, b) {
            this.node.chown(a, b);
        };
        return a29;
    })();
    b13.File = a25;
});
t(fd);
var gd = fd.Node, hd = u(function(a, b) {
    Object.defineProperty(b, "__esModule", {
        value: !0
    });
    b.default = function(a, b, e) {
        var c = setTimeout.apply(null, arguments);
        c && "object" === typeof c && "function" === typeof c.unref && c.unref();
        return c;
    };
});
t(hd);
function id() {
    this.tail = this.head = null;
    this.length = 0;
}
id.prototype.push = function(a) {
    a = {
        data: a,
        next: null
    };
    0 < this.length ? this.tail.next = a : this.head = a;
    this.tail = a;
    ++this.length;
};
id.prototype.unshift = function(a) {
    a = {
        data: a,
        next: this.head
    };
    0 === this.length && (this.tail = a);
    this.head = a;
    ++this.length;
};
id.prototype.shift = function() {
    if (0 !== this.length) {
        var a = this.head.data;
        this.head = 1 === this.length ? this.tail = null : this.head.next;
        --this.length;
        return a;
    }
};
id.prototype.clear = function() {
    this.head = this.tail = null;
    this.length = 0;
};
id.prototype.join = function(a) {
    if (0 === this.length) return "";
    for(var b = this.head, c = "" + b.data; b = b.next;)c += a + b.data;
    return c;
};
id.prototype.concat = function(a) {
    if (0 === this.length) return z.alloc(0);
    if (1 === this.length) return this.head.data;
    a = z.allocUnsafe(a >>> 0);
    for(var b = this.head, c = 0; b;)b.data.copy(a, c), c += b.data.length, b = b.next;
    return a;
};
var jd = z.isEncoding || function(a) {
    switch(a && a.toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
            return !0;
        default:
            return !1;
    }
};
function kd(a) {
    this.encoding = (a || "utf8").toLowerCase().replace(/[-_]/, "");
    if (a && !jd(a)) throw Error("Unknown encoding: " + a);
    switch(this.encoding){
        case "utf8":
            this.surrogateSize = 3;
            break;
        case "ucs2":
        case "utf16le":
            this.surrogateSize = 2;
            this.detectIncompleteChar = ld;
            break;
        case "base64":
            this.surrogateSize = 3;
            this.detectIncompleteChar = md;
            break;
        default:
            this.write = nd;
            return;
    }
    this.charBuffer = new z(6);
    this.charLength = this.charReceived = 0;
}
kd.prototype.write = function(a) {
    for(var b = ""; this.charLength;){
        b = a.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : a.length;
        a.copy(this.charBuffer, this.charReceived, 0, b);
        this.charReceived += b;
        if (this.charReceived < this.charLength) return "";
        a = a.slice(b, a.length);
        b = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
        var c = b.charCodeAt(b.length - 1);
        if (55296 <= c && 56319 >= c) this.charLength += this.surrogateSize, b = "";
        else {
            this.charReceived = this.charLength = 0;
            if (0 === a.length) return b;
            break;
        }
    }
    this.detectIncompleteChar(a);
    var d = a.length;
    this.charLength && (a.copy(this.charBuffer, 0, a.length - this.charReceived, d), d -= this.charReceived);
    b += a.toString(this.encoding, 0, d);
    d = b.length - 1;
    c = b.charCodeAt(d);
    return 55296 <= c && 56319 >= c ? (c = this.surrogateSize, this.charLength += c, this.charReceived += c, this.charBuffer.copy(this.charBuffer, c, 0, c), a.copy(this.charBuffer, 0, 0, c), b.substring(0, d)) : b;
};
kd.prototype.detectIncompleteChar = function(a) {
    for(var b = 3 <= a.length ? 3 : a.length; 0 < b; b--){
        var c = a[a.length - b];
        if (1 == b && 6 == c >> 5) {
            this.charLength = 2;
            break;
        }
        if (2 >= b && 14 == c >> 4) {
            this.charLength = 3;
            break;
        }
        if (3 >= b && 30 == c >> 3) {
            this.charLength = 4;
            break;
        }
    }
    this.charReceived = b;
};
kd.prototype.end = function(a) {
    var b = "";
    a && a.length && (b = this.write(a));
    this.charReceived && (a = this.encoding, b += this.charBuffer.slice(0, this.charReceived).toString(a));
    return b;
};
function nd(a) {
    return a.toString(this.encoding);
}
function ld(a) {
    this.charLength = (this.charReceived = a.length % 2) ? 2 : 0;
}
function md(a) {
    this.charLength = (this.charReceived = a.length % 3) ? 3 : 0;
}
P.ReadableState = od;
var Q = Mb("stream");
Db(P, O);
function pd(a, b, c) {
    if ("function" === typeof a.prependListener) return a.prependListener(b, c);
    if (a._events && a._events[b]) Array.isArray(a._events[b]) ? a._events[b].unshift(c) : a._events[b] = [
        c,
        a._events[b]
    ];
    else a.on(b, c);
}
function od(a, b) {
    a = a || {
    };
    this.objectMode = !!a.objectMode;
    b instanceof V && (this.objectMode = this.objectMode || !!a.readableObjectMode);
    b = a.highWaterMark;
    var c = this.objectMode ? 16 : 16384;
    this.highWaterMark = b || 0 === b ? b : c;
    this.highWaterMark = ~~this.highWaterMark;
    this.buffer = new id;
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.reading = this.endEmitted = this.ended = !1;
    this.sync = !0;
    this.resumeScheduled = this.readableListening = this.emittedReadable = this.needReadable = !1;
    this.defaultEncoding = a.defaultEncoding || "utf8";
    this.ranOut = !1;
    this.awaitDrain = 0;
    this.readingMore = !1;
    this.encoding = this.decoder = null;
    a.encoding && (this.decoder = new kd(a.encoding), this.encoding = a.encoding);
}
function P(a) {
    if (!(this instanceof P)) return new P(a);
    this._readableState = new od(a, this);
    this.readable = !0;
    a && "function" === typeof a.read && (this._read = a.read);
    O.call(this);
}
P.prototype.push = function(a, b) {
    var c = this._readableState;
    c.objectMode || "string" !== typeof a || (b = b || c.defaultEncoding, b !== c.encoding && (a = z.from(a, b), b = ""));
    return qd(this, c, a, b, !1);
};
P.prototype.unshift = function(a) {
    return qd(this, this._readableState, a, "", !0);
};
P.prototype.isPaused = function() {
    return !1 === this._readableState.flowing;
};
function qd(a, b, c, d, e) {
    var f = c;
    var g = null;
    Na(f) || "string" === typeof f || null === f || void 0 === f || b.objectMode || (g = new TypeError("Invalid non-string/buffer chunk"));
    if (f = g) a.emit("error", f);
    else if (null === c) b.reading = !1, b.ended || (b.decoder && (c = b.decoder.end()) && c.length && (b.buffer.push(c), b.length += b.objectMode ? 1 : c.length), b.ended = !0, rd(a));
    else if (b.objectMode || c && 0 < c.length) {
        if (b.ended && !e) a.emit("error", Error("stream.push() after EOF"));
        else if (b.endEmitted && e) a.emit("error", Error("stream.unshift() after end event"));
        else {
            if (b.decoder && !e && !d) {
                c = b.decoder.write(c);
                var h = !b.objectMode && 0 === c.length;
            }
            e || (b.reading = !1);
            h || (b.flowing && 0 === b.length && !b.sync ? (a.emit("data", c), a.read(0)) : (b.length += b.objectMode ? 1 : c.length, e ? b.buffer.unshift(c) : b.buffer.push(c), b.needReadable && rd(a)));
            b.readingMore || (b.readingMore = !0, G(sd, a, b));
        }
    } else e || (b.reading = !1);
    return !b.ended && (b.needReadable || b.length < b.highWaterMark || 0 === b.length);
}
P.prototype.setEncoding = function(a) {
    this._readableState.decoder = new kd(a);
    this._readableState.encoding = a;
    return this;
};
function td(a, b) {
    if (0 >= a || 0 === b.length && b.ended) return 0;
    if (b.objectMode) return 1;
    if (a !== a) return b.flowing && b.length ? b.buffer.head.data.length : b.length;
    if (a > b.highWaterMark) {
        var c = a;
        8388608 <= c ? c = 8388608 : (c--, c |= c >>> 1, c |= c >>> 2, c |= c >>> 4, c |= c >>> 8, c |= c >>> 16, c++);
        b.highWaterMark = c;
    }
    return a <= b.length ? a : b.ended ? b.length : (b.needReadable = !0, 0);
}
P.prototype.read = function(a) {
    Q("read", a);
    a = parseInt(a, 10);
    var b = this._readableState, c = a;
    0 !== a && (b.emittedReadable = !1);
    if (0 === a && b.needReadable && (b.length >= b.highWaterMark || b.ended)) return Q("read: emitReadable", b.length, b.ended), 0 === b.length && b.ended ? Jd(this) : rd(this), null;
    a = td(a, b);
    if (0 === a && b.ended) return 0 === b.length && Jd(this), null;
    var d = b.needReadable;
    Q("need readable", d);
    if (0 === b.length || b.length - a < b.highWaterMark) d = !0, Q("length less than watermark", d);
    b.ended || b.reading ? Q("reading or ended", !1) : d && (Q("do read"), b.reading = !0, b.sync = !0, 0 === b.length && (b.needReadable = !0), this._read(b.highWaterMark), b.sync = !1, b.reading || (a = td(c, b)));
    d = 0 < a ? Kd(a, b) : null;
    null === d ? (b.needReadable = !0, a = 0) : b.length -= a;
    0 === b.length && (b.ended || (b.needReadable = !0), c !== a && b.ended && Jd(this));
    null !== d && this.emit("data", d);
    return d;
};
function rd(a) {
    var b = a._readableState;
    b.needReadable = !1;
    b.emittedReadable || (Q("emitReadable", b.flowing), b.emittedReadable = !0, b.sync ? G(Ld, a) : Ld(a));
}
function Ld(a) {
    Q("emit readable");
    a.emit("readable");
    Md(a);
}
function sd(a, b) {
    for(var c = b.length; !b.reading && !b.flowing && !b.ended && b.length < b.highWaterMark && (Q("maybeReadMore read 0"), a.read(0), c !== b.length);)c = b.length;
    b.readingMore = !1;
}
P.prototype._read = function() {
    this.emit("error", Error("not implemented"));
};
P.prototype.pipe = function(a30, b16) {
    function c(a) {
        Q("onunpipe");
        a === n && e();
    }
    function d() {
        Q("onend");
        a30.end();
    }
    function e() {
        Q("cleanup");
        a30.removeListener("close", h);
        a30.removeListener("finish", k);
        a30.removeListener("drain", B);
        a30.removeListener("error", g);
        a30.removeListener("unpipe", c);
        n.removeListener("end", d);
        n.removeListener("end", e);
        n.removeListener("data", f);
        m = !0;
        !q.awaitDrain || a30._writableState && !a30._writableState.needDrain || B();
    }
    function f(b) {
        Q("ondata");
        v = !1;
        !1 !== a30.write(b) || v || ((1 === q.pipesCount && q.pipes === a30 || 1 < q.pipesCount && -1 !== Nd(q.pipes, a30)) && !m && (Q("false write response, pause", n._readableState.awaitDrain), n._readableState.awaitDrain++, v = !0), n.pause());
    }
    function g(b) {
        Q("onerror", b);
        p();
        a30.removeListener("error", g);
        0 === a30.listeners("error").length && a30.emit("error", b);
    }
    function h() {
        a30.removeListener("finish", k);
        p();
    }
    function k() {
        Q("onfinish");
        a30.removeListener("close", h);
        p();
    }
    function p() {
        Q("unpipe");
        n.unpipe(a30);
    }
    var n = this, q = this._readableState;
    switch(q.pipesCount){
        case 0:
            q.pipes = a30;
            break;
        case 1:
            q.pipes = [
                q.pipes,
                a30
            ];
            break;
        default:
            q.pipes.push(a30);
    }
    q.pipesCount += 1;
    Q("pipe count=%d opts=%j", q.pipesCount, b16);
    b16 = b16 && !1 === b16.end ? e : d;
    if (q.endEmitted) G(b16);
    else n.once("end", b16);
    a30.on("unpipe", c);
    var B = Od(n);
    a30.on("drain", B);
    var m = !1, v = !1;
    n.on("data", f);
    pd(a30, "error", g);
    a30.once("close", h);
    a30.once("finish", k);
    a30.emit("pipe", n);
    q.flowing || (Q("pipe resume"), n.resume());
    return a30;
};
function Od(a) {
    return function() {
        var b = a._readableState;
        Q("pipeOnDrain", b.awaitDrain);
        b.awaitDrain && b.awaitDrain--;
        0 === b.awaitDrain && a.listeners("data").length && (b.flowing = !0, Md(a));
    };
}
P.prototype.unpipe = function(a) {
    var b = this._readableState;
    if (0 === b.pipesCount) return this;
    if (1 === b.pipesCount) {
        if (a && a !== b.pipes) return this;
        a || (a = b.pipes);
        b.pipes = null;
        b.pipesCount = 0;
        b.flowing = !1;
        a && a.emit("unpipe", this);
        return this;
    }
    if (!a) {
        a = b.pipes;
        var c = b.pipesCount;
        b.pipes = null;
        b.pipesCount = 0;
        b.flowing = !1;
        for(b = 0; b < c; b++)a[b].emit("unpipe", this);
        return this;
    }
    c = Nd(b.pipes, a);
    if (-1 === c) return this;
    b.pipes.splice(c, 1);
    --b.pipesCount;
    1 === b.pipesCount && (b.pipes = b.pipes[0]);
    a.emit("unpipe", this);
    return this;
};
P.prototype.on = function(a, b) {
    b = O.prototype.on.call(this, a, b);
    "data" === a ? !1 !== this._readableState.flowing && this.resume() : "readable" === a && (a = this._readableState, a.endEmitted || a.readableListening || (a.readableListening = a.needReadable = !0, a.emittedReadable = !1, a.reading ? a.length && rd(this) : G(Pd, this)));
    return b;
};
P.prototype.addListener = P.prototype.on;
function Pd(a) {
    Q("readable nexttick read 0");
    a.read(0);
}
P.prototype.resume = function() {
    var a = this._readableState;
    a.flowing || (Q("resume"), a.flowing = !0, a.resumeScheduled || (a.resumeScheduled = !0, G(Qd, this, a)));
    return this;
};
function Qd(a, b) {
    b.reading || (Q("resume read 0"), a.read(0));
    b.resumeScheduled = !1;
    b.awaitDrain = 0;
    a.emit("resume");
    Md(a);
    b.flowing && !b.reading && a.read(0);
}
P.prototype.pause = function() {
    Q("call pause flowing=%j", this._readableState.flowing);
    !1 !== this._readableState.flowing && (Q("pause"), this._readableState.flowing = !1, this.emit("pause"));
    return this;
};
function Md(a) {
    var b = a._readableState;
    for(Q("flow", b.flowing); b.flowing && null !== a.read(););
}
P.prototype.wrap = function(a31) {
    var b17 = this._readableState, c = !1, d = this;
    a31.on("end", function() {
        Q("wrapped end");
        if (b17.decoder && !b17.ended) {
            var a = b17.decoder.end();
            a && a.length && d.push(a);
        }
        d.push(null);
    });
    a31.on("data", function(e) {
        Q("wrapped data");
        b17.decoder && (e = b17.decoder.write(e));
        b17.objectMode && (null === e || void 0 === e) || !(b17.objectMode || e && e.length) || d.push(e) || (c = !0, a31.pause());
    });
    for(var e6 in a31)void 0 === this[e6] && "function" === typeof a31[e6] && (this[e6] = (function(b) {
        return function() {
            return a31[b].apply(a31, arguments);
        };
    })(e6));
    Rd([
        "error",
        "close",
        "destroy",
        "pause",
        "resume"
    ], function(b) {
        a31.on(b, d.emit.bind(d, b));
    });
    d._read = function(b) {
        Q("wrapped _read", b);
        c && (c = !1, a31.resume());
    };
    return d;
};
P._fromList = Kd;
function Kd(a, b) {
    if (0 === b.length) return null;
    if (b.objectMode) var c = b.buffer.shift();
    else if (!a || a >= b.length) c = b.decoder ? b.buffer.join("") : 1 === b.buffer.length ? b.buffer.head.data : b.buffer.concat(b.length), b.buffer.clear();
    else {
        c = b.buffer;
        b = b.decoder;
        if (a < c.head.data.length) b = c.head.data.slice(0, a), c.head.data = c.head.data.slice(a);
        else {
            if (a === c.head.data.length) c = c.shift();
            else if (b) {
                b = c.head;
                var d = 1, e = b.data;
                for(a -= e.length; b = b.next;){
                    var f = b.data, g = a > f.length ? f.length : a;
                    e = g === f.length ? e + f : e + f.slice(0, a);
                    a -= g;
                    if (0 === a) {
                        g === f.length ? (++d, c.head = b.next ? b.next : c.tail = null) : (c.head = b, b.data = f.slice(g));
                        break;
                    }
                    ++d;
                }
                c.length -= d;
                c = e;
            } else {
                b = z.allocUnsafe(a);
                d = c.head;
                e = 1;
                d.data.copy(b);
                for(a -= d.data.length; d = d.next;){
                    f = d.data;
                    g = a > f.length ? f.length : a;
                    f.copy(b, b.length - a, 0, g);
                    a -= g;
                    if (0 === a) {
                        g === f.length ? (++e, c.head = d.next ? d.next : c.tail = null) : (c.head = d, d.data = f.slice(g));
                        break;
                    }
                    ++e;
                }
                c.length -= e;
                c = b;
            }
            b = c;
        }
        c = b;
    }
    return c;
}
function Jd(a) {
    var b = a._readableState;
    if (0 < b.length) throw Error('"endReadable()" called on non-empty stream');
    b.endEmitted || (b.ended = !0, G(Sd, b, a));
}
function Sd(a, b) {
    a.endEmitted || 0 !== a.length || (a.endEmitted = !0, b.readable = !1, b.emit("end"));
}
function Rd(a, b) {
    for(var c = 0, d = a.length; c < d; c++)b(a[c], c);
}
function Nd(a, b) {
    for(var c = 0, d = a.length; c < d; c++)if (a[c] === b) return c;
    return -1;
}
W.WritableState = Td;
Db(W, O);
function Ud() {
}
function Vd(a, b, c) {
    this.chunk = a;
    this.encoding = b;
    this.callback = c;
    this.next = null;
}
function Td(a32, b) {
    Object.defineProperty(this, "buffer", {
        get: Ib(function() {
            return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.")
    });
    a32 = a32 || {
    };
    this.objectMode = !!a32.objectMode;
    b instanceof V && (this.objectMode = this.objectMode || !!a32.writableObjectMode);
    var c11 = a32.highWaterMark, d7 = this.objectMode ? 16 : 16384;
    this.highWaterMark = c11 || 0 === c11 ? c11 : d7;
    this.highWaterMark = ~~this.highWaterMark;
    this.finished = this.ended = this.ending = this.needDrain = !1;
    this.decodeStrings = !1 !== a32.decodeStrings;
    this.defaultEncoding = a32.defaultEncoding || "utf8";
    this.length = 0;
    this.writing = !1;
    this.corked = 0;
    this.sync = !0;
    this.bufferProcessing = !1;
    this.onwrite = function(a) {
        var c = b._writableState, d = c.sync, e = c.writecb;
        c.writing = !1;
        c.writecb = null;
        c.length -= c.writelen;
        c.writelen = 0;
        a ? (--c.pendingcb, d ? G(e, a) : e(a), b._writableState.errorEmitted = !0, b.emit("error", a)) : ((a = Wd(c)) || c.corked || c.bufferProcessing || !c.bufferedRequest || Xd(b, c), d ? G(Yd, b, c, a, e) : Yd(b, c, a, e));
    };
    this.writecb = null;
    this.writelen = 0;
    this.lastBufferedRequest = this.bufferedRequest = null;
    this.pendingcb = 0;
    this.errorEmitted = this.prefinished = !1;
    this.bufferedRequestCount = 0;
    this.corkedRequestsFree = new Zd(this);
}
Td.prototype.getBuffer = function() {
    for(var a = this.bufferedRequest, b = []; a;)b.push(a), a = a.next;
    return b;
};
function W(a) {
    if (!(this instanceof W || this instanceof V)) return new W(a);
    this._writableState = new Td(a, this);
    this.writable = !0;
    a && ("function" === typeof a.write && (this._write = a.write), "function" === typeof a.writev && (this._writev = a.writev));
    O.call(this);
}
W.prototype.pipe = function() {
    this.emit("error", Error("Cannot pipe, not readable"));
};
W.prototype.write = function(a, b, c) {
    var d = this._writableState, e = !1;
    "function" === typeof b && (c = b, b = null);
    z.isBuffer(a) ? b = "buffer" : b || (b = d.defaultEncoding);
    "function" !== typeof c && (c = Ud);
    if (d.ended) d = c, a = Error("write after end"), this.emit("error", a), G(d, a);
    else {
        var f = c, g = !0, h = !1;
        null === a ? h = new TypeError("May not write null values to stream") : z.isBuffer(a) || "string" === typeof a || void 0 === a || d.objectMode || (h = new TypeError("Invalid non-string/buffer chunk"));
        h && (this.emit("error", h), G(f, h), g = !1);
        g && (d.pendingcb++, e = b, d.objectMode || !1 === d.decodeStrings || "string" !== typeof a || (a = z.from(a, e)), z.isBuffer(a) && (e = "buffer"), f = d.objectMode ? 1 : a.length, d.length += f, b = d.length < d.highWaterMark, b || (d.needDrain = !0), d.writing || d.corked ? (f = d.lastBufferedRequest, d.lastBufferedRequest = new Vd(a, e, c), f ? f.next = d.lastBufferedRequest : d.bufferedRequest = d.lastBufferedRequest, d.bufferedRequestCount += 1) : $d(this, d, !1, f, a, e, c), e = b);
    }
    return e;
};
W.prototype.cork = function() {
    this._writableState.corked++;
};
W.prototype.uncork = function() {
    var a = this._writableState;
    a.corked && (a.corked--, a.writing || a.corked || a.finished || a.bufferProcessing || !a.bufferedRequest || Xd(this, a));
};
W.prototype.setDefaultEncoding = function(a) {
    "string" === typeof a && (a = a.toLowerCase());
    if (!(-1 < "hex utf8 utf-8 ascii binary base64 ucs2 ucs-2 utf16le utf-16le raw".split(" ").indexOf((a + "").toLowerCase()))) throw new TypeError("Unknown encoding: " + a);
    this._writableState.defaultEncoding = a;
    return this;
};
function $d(a, b, c, d, e, f, g) {
    b.writelen = d;
    b.writecb = g;
    b.writing = !0;
    b.sync = !0;
    c ? a._writev(e, b.onwrite) : a._write(e, f, b.onwrite);
    b.sync = !1;
}
function Yd(a, b, c, d) {
    !c && 0 === b.length && b.needDrain && (b.needDrain = !1, a.emit("drain"));
    b.pendingcb--;
    d();
    ae(a, b);
}
function Xd(a, b) {
    b.bufferProcessing = !0;
    var c = b.bufferedRequest;
    if (a._writev && c && c.next) {
        var d = Array(b.bufferedRequestCount), e = b.corkedRequestsFree;
        e.entry = c;
        for(var f = 0; c;)d[f] = c, c = c.next, f += 1;
        $d(a, b, !0, b.length, d, "", e.finish);
        b.pendingcb++;
        b.lastBufferedRequest = null;
        e.next ? (b.corkedRequestsFree = e.next, e.next = null) : b.corkedRequestsFree = new Zd(b);
    } else {
        for(; c && (d = c.chunk, $d(a, b, !1, b.objectMode ? 1 : d.length, d, c.encoding, c.callback), c = c.next, !b.writing););
        null === c && (b.lastBufferedRequest = null);
    }
    b.bufferedRequestCount = 0;
    b.bufferedRequest = c;
    b.bufferProcessing = !1;
}
W.prototype._write = function(a, b, c) {
    c(Error("not implemented"));
};
W.prototype._writev = null;
W.prototype.end = function(a, b, c) {
    var d = this._writableState;
    "function" === typeof a ? (c = a, b = a = null) : "function" === typeof b && (c = b, b = null);
    null !== a && void 0 !== a && this.write(a, b);
    d.corked && (d.corked = 1, this.uncork());
    if (!d.ending && !d.finished) {
        a = c;
        d.ending = !0;
        ae(this, d);
        if (a) {
            if (d.finished) G(a);
            else this.once("finish", a);
        }
        d.ended = !0;
        this.writable = !1;
    }
};
function Wd(a) {
    return a.ending && 0 === a.length && null === a.bufferedRequest && !a.finished && !a.writing;
}
function ae(a, b) {
    var c = Wd(b);
    c && (0 === b.pendingcb ? (b.prefinished || (b.prefinished = !0, a.emit("prefinish")), b.finished = !0, a.emit("finish")) : b.prefinished || (b.prefinished = !0, a.emit("prefinish")));
    return c;
}
function Zd(a) {
    var b = this;
    this.entry = this.next = null;
    this.finish = function(c) {
        var d = b.entry;
        for(b.entry = null; d;){
            var e = d.callback;
            a.pendingcb--;
            e(c);
            d = d.next;
        }
        a.corkedRequestsFree ? a.corkedRequestsFree.next = b : a.corkedRequestsFree = b;
    };
}
Db(V, P);
for(var be = Object.keys(W.prototype), ce = 0; ce < be.length; ce++){
    var de = be[ce];
    V.prototype[de] || (V.prototype[de] = W.prototype[de]);
}
function V(a) {
    if (!(this instanceof V)) return new V(a);
    P.call(this, a);
    W.call(this, a);
    a && !1 === a.readable && (this.readable = !1);
    a && !1 === a.writable && (this.writable = !1);
    this.allowHalfOpen = !0;
    a && !1 === a.allowHalfOpen && (this.allowHalfOpen = !1);
    this.once("end", ee);
}
function ee() {
    this.allowHalfOpen || this._writableState.ended || G(fe, this);
}
function fe(a) {
    a.end();
}
Db(X, V);
function ge(a) {
    this.afterTransform = function(b, c) {
        var d = a._transformState;
        d.transforming = !1;
        var e = d.writecb;
        e ? (d.writechunk = null, d.writecb = null, null !== c && void 0 !== c && a.push(c), e(b), b = a._readableState, b.reading = !1, (b.needReadable || b.length < b.highWaterMark) && a._read(b.highWaterMark), b = void 0) : b = a.emit("error", Error("no writecb in Transform class"));
        return b;
    };
    this.transforming = this.needTransform = !1;
    this.writeencoding = this.writechunk = this.writecb = null;
}
function X(a33) {
    if (!(this instanceof X)) return new X(a33);
    V.call(this, a33);
    this._transformState = new ge(this);
    var b = this;
    this._readableState.needReadable = !0;
    this._readableState.sync = !1;
    a33 && ("function" === typeof a33.transform && (this._transform = a33.transform), "function" === typeof a33.flush && (this._flush = a33.flush));
    this.once("prefinish", function() {
        "function" === typeof this._flush ? this._flush(function(a) {
            he(b, a);
        }) : he(b);
    });
}
X.prototype.push = function(a, b) {
    this._transformState.needTransform = !1;
    return V.prototype.push.call(this, a, b);
};
X.prototype._transform = function() {
    throw Error("Not implemented");
};
X.prototype._write = function(a, b, c) {
    var d = this._transformState;
    d.writecb = c;
    d.writechunk = a;
    d.writeencoding = b;
    d.transforming || (a = this._readableState, (d.needTransform || a.needReadable || a.length < a.highWaterMark) && this._read(a.highWaterMark));
};
X.prototype._read = function() {
    var a = this._transformState;
    null !== a.writechunk && a.writecb && !a.transforming ? (a.transforming = !0, this._transform(a.writechunk, a.writeencoding, a.afterTransform)) : a.needTransform = !0;
};
function he(a, b) {
    if (b) return a.emit("error", b);
    b = a._transformState;
    if (a._writableState.length) throw Error("Calling transform done when ws.length != 0");
    if (b.transforming) throw Error("Calling transform done when still transforming");
    return a.push(null);
}
Db(ie, X);
function ie(a) {
    if (!(this instanceof ie)) return new ie(a);
    X.call(this, a);
}
ie.prototype._transform = function(a, b, c) {
    c(null, a);
};
Db(Y, O);
Y.Readable = P;
Y.Writable = W;
Y.Duplex = V;
Y.Transform = X;
Y.PassThrough = ie;
Y.Stream = Y;
function Y() {
    O.call(this);
}
Y.prototype.pipe = function(a34, b18) {
    function c(b) {
        a34.writable && !1 === a34.write(b) && k.pause && k.pause();
    }
    function d() {
        k.readable && k.resume && k.resume();
    }
    function e() {
        p || (p = !0, a34.end());
    }
    function f() {
        p || (p = !0, "function" === typeof a34.destroy && a34.destroy());
    }
    function g(a) {
        h();
        if (0 === O.listenerCount(this, "error")) throw a;
    }
    function h() {
        k.removeListener("data", c);
        a34.removeListener("drain", d);
        k.removeListener("end", e);
        k.removeListener("close", f);
        k.removeListener("error", g);
        a34.removeListener("error", g);
        k.removeListener("end", h);
        k.removeListener("close", h);
        a34.removeListener("close", h);
    }
    var k = this;
    k.on("data", c);
    a34.on("drain", d);
    a34._isStdio || b18 && !1 === b18.end || (k.on("end", e), k.on("close", f));
    var p = !1;
    k.on("error", g);
    a34.on("error", g);
    k.on("end", h);
    k.on("close", h);
    a34.on("close", h);
    a34.emit("pipe", k);
    return a34;
};
var je = Array.prototype.slice, le = {
    extend: function ke(a, b) {
        for(var d in b)a[d] = b[d];
        return 3 > arguments.length ? a : ke.apply(null, [
            a
        ].concat(je.call(arguments, 2)));
    }
}, me = u(function(a35, b19) {
    function c12(a36, b20, c) {
        void 0 === c && (c = function(a) {
            return a;
        });
        return function() {
            for(var e = [], f2 = 0; f2 < arguments.length; f2++)e[f2] = arguments[f2];
            return new Promise(function(f, g) {
                a36[b20].bind(a36).apply(void 0, d8(e, [
                    function(a, b) {
                        return a ? g(a) : f(c(b));
                    }
                ]));
            });
        };
    }
    var d8 = l && l.__spreadArrays || function() {
        for(var a = 0, b = 0, c = arguments.length; b < c; b++)a += arguments[b].length;
        a = Array(a);
        var d = 0;
        for(b = 0; b < c; b++)for(var e = arguments[b], n = 0, q = e.length; n < q; n++, d++)a[d] = e[n];
        return a;
    };
    Object.defineProperty(b19, "__esModule", {
        value: !0
    });
    var e7 = function() {
        function a37(a, b) {
            this.vol = a;
            this.fd = b;
        }
        a37.prototype.appendFile = function(a, b) {
            return c12(this.vol, "appendFile")(this.fd, a, b);
        };
        a37.prototype.chmod = function(a) {
            return c12(this.vol, "fchmod")(this.fd, a);
        };
        a37.prototype.chown = function(a, b) {
            return c12(this.vol, "fchown")(this.fd, a, b);
        };
        a37.prototype.close = function() {
            return c12(this.vol, "close")(this.fd);
        };
        a37.prototype.datasync = function() {
            return c12(this.vol, "fdatasync")(this.fd);
        };
        a37.prototype.read = function(a, b21, d, e) {
            return c12(this.vol, "read", function(b) {
                return {
                    bytesRead: b,
                    buffer: a
                };
            })(this.fd, a, b21, d, e);
        };
        a37.prototype.readFile = function(a) {
            return c12(this.vol, "readFile")(this.fd, a);
        };
        a37.prototype.stat = function(a) {
            return c12(this.vol, "fstat")(this.fd, a);
        };
        a37.prototype.sync = function() {
            return c12(this.vol, "fsync")(this.fd);
        };
        a37.prototype.truncate = function(a) {
            return c12(this.vol, "ftruncate")(this.fd, a);
        };
        a37.prototype.utimes = function(a, b) {
            return c12(this.vol, "futimes")(this.fd, a, b);
        };
        a37.prototype.write = function(a, b22, d, e) {
            return c12(this.vol, "write", function(b) {
                return {
                    bytesWritten: b,
                    buffer: a
                };
            })(this.fd, a, b22, d, e);
        };
        a37.prototype.writeFile = function(a, b) {
            return c12(this.vol, "writeFile")(this.fd, a, b);
        };
        return a37;
    }();
    b19.FileHandle = e7;
    b19.default = function(a) {
        return "undefined" === typeof Promise ? null : {
            FileHandle: e7,
            access: function(b, d) {
                return c12(a, "access")(b, d);
            },
            appendFile: function(b, d, f) {
                return c12(a, "appendFile")(b instanceof e7 ? b.fd : b, d, f);
            },
            chmod: function(b, d) {
                return c12(a, "chmod")(b, d);
            },
            chown: function(b, d, e) {
                return c12(a, "chown")(b, d, e);
            },
            copyFile: function(b, d, e) {
                return c12(a, "copyFile")(b, d, e);
            },
            lchmod: function(b, d) {
                return c12(a, "lchmod")(b, d);
            },
            lchown: function(b, d, e) {
                return c12(a, "lchown")(b, d, e);
            },
            link: function(b, d) {
                return c12(a, "link")(b, d);
            },
            lstat: function(b, d) {
                return c12(a, "lstat")(b, d);
            },
            mkdir: function(b, d) {
                return c12(a, "mkdir")(b, d);
            },
            mkdtemp: function(b, d) {
                return c12(a, "mkdtemp")(b, d);
            },
            open: function(b23, d, f) {
                return c12(a, "open", function(b) {
                    return new e7(a, b);
                })(b23, d, f);
            },
            readdir: function(b, d) {
                return c12(a, "readdir")(b, d);
            },
            readFile: function(b, d) {
                return c12(a, "readFile")(b instanceof e7 ? b.fd : b, d);
            },
            readlink: function(b, d) {
                return c12(a, "readlink")(b, d);
            },
            realpath: function(b, d) {
                return c12(a, "realpath")(b, d);
            },
            rename: function(b, d) {
                return c12(a, "rename")(b, d);
            },
            rmdir: function(b) {
                return c12(a, "rmdir")(b);
            },
            stat: function(b, d) {
                return c12(a, "stat")(b, d);
            },
            symlink: function(b, d, e) {
                return c12(a, "symlink")(b, d, e);
            },
            truncate: function(b, d) {
                return c12(a, "truncate")(b, d);
            },
            unlink: function(b) {
                return c12(a, "unlink")(b);
            },
            utimes: function(b, d, e) {
                return c12(a, "utimes")(b, d, e);
            },
            writeFile: function(b, d, f) {
                return c12(a, "writeFile")(b instanceof e7 ? b.fd : b, d, f);
            }
        };
    };
});
t(me);
var ne = /[^\x20-\x7E]/, oe = /[\x2E\u3002\uFF0E\uFF61]/g, pe = {
    overflow: "Overflow: input needs wider integers to process",
    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
    "invalid-input": "Invalid input"
}, qe = Math.floor, re = String.fromCharCode;
function se(a, b) {
    var c = a.split("@"), d = "";
    1 < c.length && (d = c[0] + "@", a = c[1]);
    a = a.replace(oe, ".");
    a = a.split(".");
    c = a.length;
    for(var e = []; c--;)e[c] = b(a[c]);
    b = e.join(".");
    return d + b;
}
function te(a, b) {
    return a + 22 + 75 * (26 > a) - ((0 != b) << 5);
}
function ue(a38) {
    return se(a38, function(a) {
        if (ne.test(a)) {
            var b;
            var d = [];
            var e = [];
            var f = 0;
            for(b = a.length; f < b;){
                var g = a.charCodeAt(f++);
                if (55296 <= g && 56319 >= g && f < b) {
                    var h = a.charCodeAt(f++);
                    56320 == (h & 64512) ? e.push(((g & 1023) << 10) + (h & 1023) + 65536) : (e.push(g), f--);
                } else e.push(g);
            }
            a = e;
            h = a.length;
            e = 128;
            var k = 0;
            var p = 72;
            for(g = 0; g < h; ++g){
                var n = a[g];
                128 > n && d.push(re(n));
            }
            for((f = b = d.length) && d.push("-"); f < h;){
                var q = 2147483647;
                for(g = 0; g < h; ++g)n = a[g], n >= e && n < q && (q = n);
                var B = f + 1;
                if (q - e > qe((2147483647 - k) / B)) throw new RangeError(pe.overflow);
                k += (q - e) * B;
                e = q;
                for(g = 0; g < h; ++g){
                    n = a[g];
                    if (n < e && 2147483647 < ++k) throw new RangeError(pe.overflow);
                    if (n == e) {
                        var m = k;
                        for(q = 36;; q += 36){
                            n = q <= p ? 1 : q >= p + 26 ? 26 : q - p;
                            if (m < n) break;
                            var v = m - n;
                            m = 36 - n;
                            d.push(re(te(n + v % m, 0)));
                            m = qe(v / m);
                        }
                        d.push(re(te(m, 0)));
                        p = B;
                        q = 0;
                        k = f == b ? qe(k / 700) : k >> 1;
                        for(k += qe(k / p); 455 < k; q += 36)k = qe(k / 35);
                        p = qe(q + 36 * k / (k + 38));
                        k = 0;
                        ++f;
                    }
                }
                ++k;
                ++e;
            }
            d = "xn--" + d.join("");
        } else d = a;
        return d;
    });
}
var ve = Array.isArray || function(a) {
    return "[object Array]" === Object.prototype.toString.call(a);
};
function we(a) {
    switch(typeof a){
        case "string":
            return a;
        case "boolean":
            return a ? "true" : "false";
        case "number":
            return isFinite(a) ? a : "";
        default:
            return "";
    }
}
function xe(a39, b, c, d9) {
    b = b || "&";
    c = c || "=";
    null === a39 && (a39 = void 0);
    return "object" === typeof a39 ? ye(ze(a39), function(d) {
        var e = encodeURIComponent(we(d)) + c;
        return ve(a39[d]) ? ye(a39[d], function(a) {
            return e + encodeURIComponent(we(a));
        }).join(b) : e + encodeURIComponent(we(a39[d]));
    }).join(b) : d9 ? encodeURIComponent(we(d9)) + c + encodeURIComponent(we(a39)) : "";
}
function ye(a, b) {
    if (a.map) return a.map(b);
    for(var c = [], d = 0; d < a.length; d++)c.push(b(a[d], d));
    return c;
}
var ze = Object.keys || function(a) {
    var b = [], c;
    for(c in a)Object.prototype.hasOwnProperty.call(a, c) && b.push(c);
    return b;
};
function Ae(a, b, c, d) {
    c = c || "=";
    var e = {
    };
    if ("string" !== typeof a || 0 === a.length) return e;
    var f = /\+/g;
    a = a.split(b || "&");
    b = 1000;
    d && "number" === typeof d.maxKeys && (b = d.maxKeys);
    d = a.length;
    0 < b && d > b && (d = b);
    for(b = 0; b < d; ++b){
        var g = a[b].replace(f, "%20"), h = g.indexOf(c);
        if (0 <= h) {
            var k = g.substr(0, h);
            g = g.substr(h + 1);
        } else k = g, g = "";
        k = decodeURIComponent(k);
        g = decodeURIComponent(g);
        Object.prototype.hasOwnProperty.call(e, k) ? ve(e[k]) ? e[k].push(g) : e[k] = [
            e[k],
            g
        ] : e[k] = g;
    }
    return e;
}
var Fe = {
    parse: Be,
    resolve: Ce,
    resolveObject: De,
    format: Ee,
    Url: Z
};
function Z() {
    this.href = this.path = this.pathname = this.query = this.search = this.hash = this.hostname = this.port = this.host = this.auth = this.slashes = this.protocol = null;
}
var Ge = /^([a-z0-9.+-]+:)/i, He = /:[0-9]*$/, Ie = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, Je = "{}|\\^`".split("").concat('<>"` \r\n\t'.split("")), Ke = [
    "'"
].concat(Je), Le = [
    "%",
    "/",
    "?",
    ";",
    "#"
].concat(Ke), Me = [
    "/",
    "?",
    "#"
], Ne = 255, Oe = /^[+a-z0-9A-Z_-]{0,63}$/, Pe = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Qe = {
    javascript: !0,
    "javascript:": !0
}, Re = {
    javascript: !0,
    "javascript:": !0
}, Se = {
    http: !0,
    https: !0,
    ftp: !0,
    gopher: !0,
    file: !0,
    "http:": !0,
    "https:": !0,
    "ftp:": !0,
    "gopher:": !0,
    "file:": !0
};
function Be(a, b, c) {
    if (a && Hb(a) && a instanceof Z) return a;
    var d = new Z;
    d.parse(a, b, c);
    return d;
}
Z.prototype.parse = function(a, b, c) {
    return Te(this, a, b, c);
};
function Te(a, b, c, d) {
    if (!Gb(b)) throw new TypeError("Parameter 'url' must be a string, not " + typeof b);
    var e = b.indexOf("?");
    e = -1 !== e && e < b.indexOf("#") ? "?" : "#";
    b = b.split(e);
    b[0] = b[0].replace(/\\/g, "/");
    b = b.join(e);
    e = b.trim();
    if (!d && 1 === b.split("#").length && (b = Ie.exec(e))) return a.path = e, a.href = e, a.pathname = b[1], b[2] ? (a.search = b[2], a.query = c ? Ae(a.search.substr(1)) : a.search.substr(1)) : c && (a.search = "", a.query = {
    }), a;
    if (b = Ge.exec(e)) {
        b = b[0];
        var f = b.toLowerCase();
        a.protocol = f;
        e = e.substr(b.length);
    }
    if (d || b || e.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var g = "//" === e.substr(0, 2);
        !g || b && Re[b] || (e = e.substr(2), a.slashes = !0);
    }
    if (!Re[b] && (g || b && !Se[b])) {
        b = -1;
        for(d = 0; d < Me.length; d++)g = e.indexOf(Me[d]), -1 !== g && (-1 === b || g < b) && (b = g);
        g = -1 === b ? e.lastIndexOf("@") : e.lastIndexOf("@", b);
        -1 !== g && (d = e.slice(0, g), e = e.slice(g + 1), a.auth = decodeURIComponent(d));
        b = -1;
        for(d = 0; d < Le.length; d++)g = e.indexOf(Le[d]), -1 !== g && (-1 === b || g < b) && (b = g);
        -1 === b && (b = e.length);
        a.host = e.slice(0, b);
        e = e.slice(b);
        Ue(a);
        a.hostname = a.hostname || "";
        g = "[" === a.hostname[0] && "]" === a.hostname[a.hostname.length - 1];
        if (!g) {
            var h = a.hostname.split(/\./);
            d = 0;
            for(b = h.length; d < b; d++){
                var k = h[d];
                if (k && !k.match(Oe)) {
                    for(var p = "", n = 0, q = k.length; n < q; n++)p = 127 < k.charCodeAt(n) ? p + "x" : p + k[n];
                    if (!p.match(Oe)) {
                        b = h.slice(0, d);
                        d = h.slice(d + 1);
                        if (k = k.match(Pe)) b.push(k[1]), d.unshift(k[2]);
                        d.length && (e = "/" + d.join(".") + e);
                        a.hostname = b.join(".");
                        break;
                    }
                }
            }
        }
        a.hostname = a.hostname.length > Ne ? "" : a.hostname.toLowerCase();
        g || (a.hostname = ue(a.hostname));
        d = a.port ? ":" + a.port : "";
        a.host = (a.hostname || "") + d;
        a.href += a.host;
        g && (a.hostname = a.hostname.substr(1, a.hostname.length - 2), "/" !== e[0] && (e = "/" + e));
    }
    if (!Qe[f]) for(d = 0, b = Ke.length; d < b; d++)g = Ke[d], -1 !== e.indexOf(g) && (k = encodeURIComponent(g), k === g && (k = escape(g)), e = e.split(g).join(k));
    d = e.indexOf("#");
    -1 !== d && (a.hash = e.substr(d), e = e.slice(0, d));
    d = e.indexOf("?");
    -1 !== d ? (a.search = e.substr(d), a.query = e.substr(d + 1), c && (a.query = Ae(a.query)), e = e.slice(0, d)) : c && (a.search = "", a.query = {
    });
    e && (a.pathname = e);
    Se[f] && a.hostname && !a.pathname && (a.pathname = "/");
    if (a.pathname || a.search) d = a.pathname || "", a.path = d + (a.search || "");
    a.href = Ve(a);
    return a;
}
function Ee(a) {
    Gb(a) && (a = Te({
    }, a));
    return Ve(a);
}
function Ve(a40) {
    var b = a40.auth || "";
    b && (b = encodeURIComponent(b), b = b.replace(/%3A/i, ":"), b += "@");
    var c = a40.protocol || "", d = a40.pathname || "", e = a40.hash || "", f = !1, g = "";
    a40.host ? f = b + a40.host : a40.hostname && (f = b + (-1 === a40.hostname.indexOf(":") ? a40.hostname : "[" + this.hostname + "]"), a40.port && (f += ":" + a40.port));
    a40.query && Hb(a40.query) && Object.keys(a40.query).length && (g = xe(a40.query));
    b = a40.search || g && "?" + g || "";
    c && ":" !== c.substr(-1) && (c += ":");
    a40.slashes || (!c || Se[c]) && !1 !== f ? (f = "//" + (f || ""), d && "/" !== d.charAt(0) && (d = "/" + d)) : f || (f = "");
    e && "#" !== e.charAt(0) && (e = "#" + e);
    b && "?" !== b.charAt(0) && (b = "?" + b);
    d = d.replace(/[?#]/g, function(a) {
        return encodeURIComponent(a);
    });
    b = b.replace("#", "%23");
    return c + f + d + b + e;
}
Z.prototype.format = function() {
    return Ve(this);
};
function Ce(a, b) {
    return Be(a, !1, !0).resolve(b);
}
Z.prototype.resolve = function(a) {
    return this.resolveObject(Be(a, !1, !0)).format();
};
function De(a, b) {
    return a ? Be(a, !1, !0).resolveObject(b) : b;
}
Z.prototype.resolveObject = function(a) {
    if (Gb(a)) {
        var b = new Z;
        b.parse(a, !1, !0);
        a = b;
    }
    b = new Z;
    for(var c = Object.keys(this), d = 0; d < c.length; d++){
        var e = c[d];
        b[e] = this[e];
    }
    b.hash = a.hash;
    if ("" === a.href) return b.href = b.format(), b;
    if (a.slashes && !a.protocol) {
        c = Object.keys(a);
        for(d = 0; d < c.length; d++)e = c[d], "protocol" !== e && (b[e] = a[e]);
        Se[b.protocol] && b.hostname && !b.pathname && (b.path = b.pathname = "/");
        b.href = b.format();
        return b;
    }
    var f;
    if (a.protocol && a.protocol !== b.protocol) {
        if (!Se[a.protocol]) {
            c = Object.keys(a);
            for(d = 0; d < c.length; d++)e = c[d], b[e] = a[e];
            b.href = b.format();
            return b;
        }
        b.protocol = a.protocol;
        if (a.host || Re[a.protocol]) b.pathname = a.pathname;
        else {
            for(f = (a.pathname || "").split("/"); f.length && !(a.host = f.shift()););
            a.host || (a.host = "");
            a.hostname || (a.hostname = "");
            "" !== f[0] && f.unshift("");
            2 > f.length && f.unshift("");
            b.pathname = f.join("/");
        }
        b.search = a.search;
        b.query = a.query;
        b.host = a.host || "";
        b.auth = a.auth;
        b.hostname = a.hostname || a.host;
        b.port = a.port;
        if (b.pathname || b.search) b.path = (b.pathname || "") + (b.search || "");
        b.slashes = b.slashes || a.slashes;
        b.href = b.format();
        return b;
    }
    c = b.pathname && "/" === b.pathname.charAt(0);
    var g = a.host || a.pathname && "/" === a.pathname.charAt(0), h = c = g || c || b.host && a.pathname;
    d = b.pathname && b.pathname.split("/") || [];
    e = b.protocol && !Se[b.protocol];
    f = a.pathname && a.pathname.split("/") || [];
    e && (b.hostname = "", b.port = null, b.host && ("" === d[0] ? d[0] = b.host : d.unshift(b.host)), b.host = "", a.protocol && (a.hostname = null, a.port = null, a.host && ("" === f[0] ? f[0] = a.host : f.unshift(a.host)), a.host = null), c = c && ("" === f[0] || "" === d[0]));
    if (g) b.host = a.host || "" === a.host ? a.host : b.host, b.hostname = a.hostname || "" === a.hostname ? a.hostname : b.hostname, b.search = a.search, b.query = a.query, d = f;
    else if (f.length) d || (d = []), d.pop(), d = d.concat(f), b.search = a.search, b.query = a.query;
    else if (null != a.search) {
        e && (b.hostname = b.host = d.shift(), e = b.host && 0 < b.host.indexOf("@") ? b.host.split("@") : !1) && (b.auth = e.shift(), b.host = b.hostname = e.shift());
        b.search = a.search;
        b.query = a.query;
        if (null !== b.pathname || null !== b.search) b.path = (b.pathname ? b.pathname : "") + (b.search ? b.search : "");
        b.href = b.format();
        return b;
    }
    if (!d.length) return b.pathname = null, b.path = b.search ? "/" + b.search : null, b.href = b.format(), b;
    g = d.slice(-1)[0];
    f = (b.host || a.host || 1 < d.length) && ("." === g || ".." === g) || "" === g;
    for(var k = 0, p = d.length; 0 <= p; p--)g = d[p], "." === g ? d.splice(p, 1) : ".." === g ? (d.splice(p, 1), k++) : k && (d.splice(p, 1), k--);
    if (!c && !h) for(; k--;)d.unshift("..");
    !c || "" === d[0] || d[0] && "/" === d[0].charAt(0) || d.unshift("");
    f && "/" !== d.join("/").substr(-1) && d.push("");
    h = "" === d[0] || d[0] && "/" === d[0].charAt(0);
    e && (b.hostname = b.host = h ? "" : d.length ? d.shift() : "", e = b.host && 0 < b.host.indexOf("@") ? b.host.split("@") : !1) && (b.auth = e.shift(), b.host = b.hostname = e.shift());
    (c = c || b.host && d.length) && !h && d.unshift("");
    d.length ? b.pathname = d.join("/") : (b.pathname = null, b.path = null);
    if (null !== b.pathname || null !== b.search) b.path = (b.pathname ? b.pathname : "") + (b.search ? b.search : "");
    b.auth = a.auth || b.auth;
    b.slashes = b.slashes || a.slashes;
    b.href = b.format();
    return b;
};
Z.prototype.parseHost = function() {
    return Ue(this);
};
function Ue(a) {
    var b = a.host, c = He.exec(b);
    c && (c = c[0], ":" !== c && (a.port = c.substr(1)), b = b.substr(0, b.length - c.length));
    b && (a.hostname = b);
}
var We = u(function(a41, b24) {
    function c(a, b) {
        a = a[b];
        return 0 < b && ("/" === a || e && "\\" === a);
    }
    function d10(a) {
        var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !0;
        if (e) {
            var d = a;
            if ("string" !== typeof d) throw new TypeError("expected a string");
            d = d.replace(/[\\\/]+/g, "/");
            if (!1 !== b) {
                if (b = d, d = b.length - 1, 2 > d) d = b;
                else {
                    for(; c(b, d);)d--;
                    d = b.substr(0, d + 1);
                }
            }
            return d.replace(/^([a-zA-Z]+:|\.\/)/, "");
        }
        return a;
    }
    Object.defineProperty(b24, "__esModule", {
        value: !0
    });
    b24.unixify = d10;
    b24.correctPath = function(a) {
        return d10(a.replace(/^\\\\\?\\.:\\/, "\\"));
    };
    var e = "win32" === Cb.platform;
});
t(We);
var Xe = u(function(a42, b25) {
    function c13(a, b) {
        void 0 === b && (b = L.default.cwd());
        return cf(b, a);
    }
    function d11(a, b) {
        return "function" === typeof a ? [
            e8(),
            a
        ] : [
            e8(a),
            q(b)
        ];
    }
    function e8(a) {
        void 0 === a && (a = {
        });
        return aa({
        }, df, a);
    }
    function f3(a) {
        return "number" === typeof a ? aa({
        }, ud, {
            mode: a
        }) : aa({
        }, ud, a);
    }
    function g2(a, b, c, d) {
        void 0 === b && (b = "");
        void 0 === c && (c = "");
        void 0 === d && (d = "");
        var e = "";
        c && (e = " '" + c + "'");
        d && (e += " -> '" + d + "'");
        switch(a){
            case "ENOENT":
                return "ENOENT: no such file or directory, " + b + e;
            case "EBADF":
                return "EBADF: bad file descriptor, " + b + e;
            case "EINVAL":
                return "EINVAL: invalid argument, " + b + e;
            case "EPERM":
                return "EPERM: operation not permitted, " + b + e;
            case "EPROTO":
                return "EPROTO: protocol error, " + b + e;
            case "EEXIST":
                return "EEXIST: file already exists, " + b + e;
            case "ENOTDIR":
                return "ENOTDIR: not a directory, " + b + e;
            case "EISDIR":
                return "EISDIR: illegal operation on a directory, " + b + e;
            case "EACCES":
                return "EACCES: permission denied, " + b + e;
            case "ENOTEMPTY":
                return "ENOTEMPTY: directory not empty, " + b + e;
            case "EMFILE":
                return "EMFILE: too many open files, " + b + e;
            case "ENOSYS":
                return "ENOSYS: function not implemented, " + b + e;
            default:
                return a + ": error occurred, " + b + e;
        }
    }
    function h2(a, b, c, d, e) {
        void 0 === b && (b = "");
        void 0 === c && (c = "");
        void 0 === d && (d = "");
        void 0 === e && (e = Error);
        b = new e(g2(a, b, c, d));
        b.code = a;
        return b;
    }
    function k1(a) {
        if ("number" === typeof a) return a;
        if ("string" === typeof a) {
            var b = ua[a];
            if ("undefined" !== typeof b) return b;
        }
        throw new Pc.TypeError("ERR_INVALID_OPT_VALUE", "flags", a);
    }
    function p1(a, b) {
        if (b) {
            var c = typeof b;
            switch(c){
                case "string":
                    a = aa({
                    }, a, {
                        encoding: b
                    });
                    break;
                case "object":
                    a = aa({
                    }, a, b);
                    break;
                default:
                    throw TypeError("Expected options to be either an object or a string, but got " + c + " instead");
            }
        } else return a;
        "buffer" !== a.encoding && K.assertEncoding(a.encoding);
        return a;
    }
    function n1(a) {
        return function(b) {
            return p1(a, b);
        };
    }
    function q(a) {
        if ("function" !== typeof a) throw TypeError(fa.CB);
        return a;
    }
    function B(a) {
        return function(b, c) {
            return "function" === typeof b ? [
                a(),
                b
            ] : [
                a(b),
                q(c)
            ];
        };
    }
    function m1(a) {
        if ("string" !== typeof a && !F.Buffer.isBuffer(a)) {
            try {
                if (!(a instanceof Fe.URL)) throw new TypeError(fa.PATH_STR);
            } catch (Xa) {
                throw new TypeError(fa.PATH_STR);
            }
            if ("" !== a.hostname) throw new Pc.TypeError("ERR_INVALID_FILE_URL_HOST", L.default.platform);
            a = a.pathname;
            for(var b = 0; b < a.length; b++)if ("%" === a[b]) {
                var c = a.codePointAt(b + 2) | 32;
                if ("2" === a[b + 1] && 102 === c) throw new Pc.TypeError("ERR_INVALID_FILE_URL_PATH", "must not include encoded / characters");
            }
            a = decodeURIComponent(a);
        }
        a = String(a);
        qb(a);
        return a;
    }
    function v1(a, b) {
        return (a = c13(a, b).substr(1)) ? a.split(S) : [];
    }
    function xa(a) {
        return v1(m1(a));
    }
    function La(a, b) {
        void 0 === b && (b = K.ENCODING_UTF8);
        return F.Buffer.isBuffer(a) ? a : a instanceof Uint8Array ? F.bufferFrom(a) : F.bufferFrom(String(a), b);
    }
    function $b(a, b) {
        return b && "buffer" !== b ? a.toString(b) : a;
    }
    function qb(a, b) {
        if (-1 !== ("" + a).indexOf("\x00")) {
            a = Error("Path must be a string without null bytes");
            a.code = "ENOENT";
            if ("function" !== typeof b) throw a;
            L.default.nextTick(b, a);
            return !1;
        }
        return !0;
    }
    function M(a, b) {
        a = "number" === typeof a ? a : "string" === typeof a ? parseInt(a, 8) : b ? M(b) : void 0;
        if ("number" !== typeof a || isNaN(a)) throw new TypeError(fa.MODE_INT);
        return a;
    }
    function Ya(a) {
        if (a >>> 0 !== a) throw TypeError(fa.FD);
    }
    function ha(a) {
        if ("string" === typeof a && +a == a) return +a;
        if (a instanceof Date) return a.getTime() / 1000;
        if (isFinite(a)) return 0 > a ? Date.now() / 1000 : a;
        throw Error("Cannot parse time: " + a);
    }
    function Ha(a) {
        if ("number" !== typeof a) throw TypeError(fa.UID);
    }
    function Ia(a) {
        if ("number" !== typeof a) throw TypeError(fa.GID);
    }
    function ef(a) {
        a.emit("stop");
    }
    function T(a, b, c) {
        if (!(this instanceof T)) return new T(a, b, c);
        this._vol = a;
        c = aa({
        }, p1(c, {
        }));
        void 0 === c.highWaterMark && (c.highWaterMark = 65536);
        Y.Readable.call(this, c);
        this.path = m1(b);
        this.fd = void 0 === c.fd ? null : c.fd;
        this.flags = void 0 === c.flags ? "r" : c.flags;
        this.mode = void 0 === c.mode ? 438 : c.mode;
        this.start = c.start;
        this.end = c.end;
        this.autoClose = void 0 === c.autoClose ? !0 : c.autoClose;
        this.pos = void 0;
        this.bytesRead = 0;
        if (void 0 !== this.start) {
            if ("number" !== typeof this.start) throw new TypeError('"start" option must be a Number');
            if (void 0 === this.end) this.end = Infinity;
            else if ("number" !== typeof this.end) throw new TypeError('"end" option must be a Number');
            if (this.start > this.end) throw Error('"start" option must be <= "end" option');
            this.pos = this.start;
        }
        "number" !== typeof this.fd && this.open();
        this.on("end", function() {
            this.autoClose && this.destroy && this.destroy();
        });
    }
    function ff() {
        this.close();
    }
    function R(a, b, c) {
        if (!(this instanceof R)) return new R(a, b, c);
        this._vol = a;
        c = aa({
        }, p1(c, {
        }));
        Y.Writable.call(this, c);
        this.path = m1(b);
        this.fd = void 0 === c.fd ? null : c.fd;
        this.flags = void 0 === c.flags ? "w" : c.flags;
        this.mode = void 0 === c.mode ? 438 : c.mode;
        this.start = c.start;
        this.autoClose = void 0 === c.autoClose ? !0 : !!c.autoClose;
        this.pos = void 0;
        this.bytesWritten = 0;
        if (void 0 !== this.start) {
            if ("number" !== typeof this.start) throw new TypeError('"start" option must be a Number');
            if (0 > this.start) throw Error('"start" must be >= zero');
            this.pos = this.start;
        }
        c.encoding && this.setDefaultEncoding(c.encoding);
        "number" !== typeof this.fd && this.open();
        this.once("finish", function() {
            this.autoClose && this.close();
        });
    }
    var Ja = l && l.__extends || function() {
        function a43(b26, c14) {
            a43 = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(a, b) {
                a.__proto__ = b;
            } || function(a, b) {
                for(var c in b)b.hasOwnProperty(c) && (a[c] = b[c]);
            };
            return a43(b26, c14);
        }
        return function(b, c) {
            function d() {
                this.constructor = b;
            }
            a43(b, c);
            b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d);
        };
    }(), Xb = l && l.__spreadArrays || function() {
        for(var a = 0, b = 0, c = arguments.length; b < c; b++)a += arguments[b].length;
        a = Array(a);
        var d = 0;
        for(b = 0; b < c; b++)for(var e = arguments[b], f = 0, g = e.length; f < g; f++, d++)a[d] = e[f];
        return a;
    };
    Object.defineProperty(b25, "__esModule", {
        value: !0
    });
    var aa = le.extend, cf = Zc.resolve, mb = w.constants.O_RDONLY, Ka = w.constants.O_WRONLY, na = w.constants.O_RDWR, U = w.constants.O_CREAT, nb = w.constants.O_EXCL, Za = w.constants.O_TRUNC, $a = w.constants.O_APPEND, vd = w.constants.O_SYNC, gf = w.constants.O_DIRECTORY, wd = w.constants.F_OK, hf = w.constants.COPYFILE_EXCL, jf = w.constants.COPYFILE_FICLONE_FORCE;
    var S = Zc.sep;
    var xd = Zc.relative;
    var Yb = "win32" === L.default.platform, fa = {
        PATH_STR: "path must be a string or Buffer",
        FD: "fd must be a file descriptor",
        MODE_INT: "mode must be an int",
        CB: "callback must be a function",
        UID: "uid must be an unsigned int",
        GID: "gid must be an unsigned int",
        LEN: "len must be an integer",
        ATIME: "atime must be an integer",
        MTIME: "mtime must be an integer",
        PREFIX: "filename prefix is required",
        BUFFER: "buffer must be an instance of Buffer or StaticBuffer",
        OFFSET: "offset must be an integer",
        LENGTH: "length must be an integer",
        POSITION: "position must be an integer"
    }, ua;
    (function(a) {
        a[a.r = mb] = "r";
        a[a["r+"] = na] = "r+";
        a[a.rs = mb | vd] = "rs";
        a[a.sr = a.rs] = "sr";
        a[a["rs+"] = na | vd] = "rs+";
        a[a["sr+"] = a["rs+"]] = "sr+";
        a[a.w = Ka | U | Za] = "w";
        a[a.wx = Ka | U | Za | nb] = "wx";
        a[a.xw = a.wx] = "xw";
        a[a["w+"] = na | U | Za] = "w+";
        a[a["wx+"] = na | U | Za | nb] = "wx+";
        a[a["xw+"] = a["wx+"]] = "xw+";
        a[a.a = Ka | $a | U] = "a";
        a[a.ax = Ka | $a | U | nb] = "ax";
        a[a.xa = a.ax] = "xa";
        a[a["a+"] = na | $a | U] = "a+";
        a[a["ax+"] = na | $a | U | nb] = "ax+";
        a[a["xa+"] = a["ax+"]] = "xa+";
    })(ua = b25.FLAGS || (b25.FLAGS = {
    }));
    b25.flagsToNumber = k1;
    a42 = {
        encoding: "utf8"
    };
    var ob = n1(a42), yd = B(ob), zd = n1({
        flag: "r"
    }), Ad = {
        encoding: "utf8",
        mode: 438,
        flag: ua[ua.w]
    }, Bd = n1(Ad), Cd = {
        encoding: "utf8",
        mode: 438,
        flag: ua[ua.a]
    }, Dd = n1(Cd), kf = B(Dd), Ed = n1(a42), lf = B(Ed), ud = {
        mode: 511,
        recursive: !1
    }, Fd = {
        recursive: !1
    }, Gd = n1({
        encoding: "utf8",
        withFileTypes: !1
    }), mf = B(Gd), df = {
        bigint: !1
    };
    b25.pathToFilename = m1;
    if (Yb) {
        var nf = c13, of = We.unixify;
        c13 = function(a, b) {
            return of(nf(a, b));
        };
    }
    b25.filenameToSteps = v1;
    b25.pathToSteps = xa;
    b25.dataToStr = function(a, b) {
        void 0 === b && (b = K.ENCODING_UTF8);
        return F.Buffer.isBuffer(a) ? a.toString(b) : a instanceof Uint8Array ? F.bufferFrom(a).toString(b) : String(a);
    };
    b25.dataToBuffer = La;
    b25.bufferToEncoding = $b;
    b25.toUnixTimestamp = ha;
    a42 = (function() {
        function a44(a45) {
            void 0 === a45 && (a45 = {
            });
            this.ino = 0;
            this.inodes = {
            };
            this.releasedInos = [];
            this.fds = {
            };
            this.releasedFds = [];
            this.maxFiles = 10000;
            this.openFiles = 0;
            this.promisesApi = me.default(this);
            this.statWatchers = {
            };
            this.props = aa({
                Node: fd.Node,
                Link: fd.Link,
                File: fd.File
            }, a45);
            a45 = this.createLink();
            a45.setNode(this.createNode(!0));
            var b = this;
            this.StatWatcher = (function(a) {
                function c() {
                    return a.call(this, b) || this;
                }
                Ja(c, a);
                return c;
            })(Hd);
            this.ReadStream = (function(a) {
                function c15() {
                    for(var c = [], d = 0; d < arguments.length; d++)c[d] = arguments[d];
                    return a.apply(this, Xb([
                        b
                    ], c)) || this;
                }
                Ja(c15, a);
                return c15;
            })(T);
            this.WriteStream = (function(a) {
                function c16() {
                    for(var c = [], d = 0; d < arguments.length; d++)c[d] = arguments[d];
                    return a.apply(this, Xb([
                        b
                    ], c)) || this;
                }
                Ja(c16, a);
                return c16;
            })(R);
            this.FSWatcher = (function(a) {
                function c() {
                    return a.call(this, b) || this;
                }
                Ja(c, a);
                return c;
            })(Id);
            this.root = a45;
        }
        a44.fromJSON = function(b, c) {
            var d = new a44;
            d.fromJSON(b, c);
            return d;
        };
        Object.defineProperty(a44.prototype, "promises", {
            get: function() {
                if (null === this.promisesApi) throw Error("Promise is not supported in this environment.");
                return this.promisesApi;
            },
            enumerable: !0,
            configurable: !0
        });
        a44.prototype.createLink = function(a, b, c, d) {
            void 0 === c && (c = !1);
            if (!a) return new this.props.Link(this, null, "");
            if (!b) throw Error("createLink: name cannot be empty");
            return a.createChild(b, this.createNode(c, d));
        };
        a44.prototype.deleteLink = function(a) {
            var b = a.parent;
            return b ? (b.deleteChild(a), !0) : !1;
        };
        a44.prototype.newInoNumber = function() {
            var a = this.releasedInos.pop();
            return a ? a : this.ino = (this.ino + 1) % 4294967295;
        };
        a44.prototype.newFdNumber = function() {
            var b = this.releasedFds.pop();
            return "number" === typeof b ? b : a44.fd--;
        };
        a44.prototype.createNode = function(a, b) {
            void 0 === a && (a = !1);
            b = new this.props.Node(this.newInoNumber(), b);
            a && b.setIsDirectory();
            return this.inodes[b.ino] = b;
        };
        a44.prototype.getNode = function(a) {
            return this.inodes[a];
        };
        a44.prototype.deleteNode = function(a) {
            a.del();
            delete this.inodes[a.ino];
            this.releasedInos.push(a.ino);
        };
        a44.prototype.genRndStr = function() {
            var a = (Math.random() + 1).toString(36).substr(2, 6);
            return 6 === a.length ? a : this.genRndStr();
        };
        a44.prototype.getLink = function(a) {
            return this.root.walk(a);
        };
        a44.prototype.getLinkOrThrow = function(a, b) {
            var c = v1(a);
            c = this.getLink(c);
            if (!c) throw h2("ENOENT", b, a);
            return c;
        };
        a44.prototype.getResolvedLink = function(a) {
            a = "string" === typeof a ? v1(a) : a;
            for(var b = this.root, c = 0; c < a.length;){
                b = b.getChild(a[c]);
                if (!b) return null;
                var d = b.getNode();
                d.isSymlink() ? (a = d.symlink.concat(a.slice(c + 1)), b = this.root, c = 0) : c++;
            }
            return b;
        };
        a44.prototype.getResolvedLinkOrThrow = function(a, b) {
            var c = this.getResolvedLink(a);
            if (!c) throw h2("ENOENT", b, a);
            return c;
        };
        a44.prototype.resolveSymlinks = function(a) {
            return this.getResolvedLink(a.steps.slice(1));
        };
        a44.prototype.getLinkAsDirOrThrow = function(a, b) {
            var c = this.getLinkOrThrow(a, b);
            if (!c.getNode().isDirectory()) throw h2("ENOTDIR", b, a);
            return c;
        };
        a44.prototype.getLinkParent = function(a) {
            return this.root.walk(a, a.length - 1);
        };
        a44.prototype.getLinkParentAsDirOrThrow = function(a, b) {
            a = a instanceof Array ? a : v1(a);
            var c = this.getLinkParent(a);
            if (!c) throw h2("ENOENT", b, S + a.join(S));
            if (!c.getNode().isDirectory()) throw h2("ENOTDIR", b, S + a.join(S));
            return c;
        };
        a44.prototype.getFileByFd = function(a) {
            return this.fds[String(a)];
        };
        a44.prototype.getFileByFdOrThrow = function(a, b) {
            if (a >>> 0 !== a) throw TypeError(fa.FD);
            a = this.getFileByFd(a);
            if (!a) throw h2("EBADF", b);
            return a;
        };
        a44.prototype.getNodeByIdOrCreate = function(a, b, c) {
            if ("number" === typeof a) {
                a = this.getFileByFd(a);
                if (!a) throw Error("File nto found");
                return a.node;
            }
            var d = xa(a), e = this.getLink(d);
            if (e) return e.getNode();
            if (b & U && (b = this.getLinkParent(d))) return e = this.createLink(b, d[d.length - 1], !1, c), e.getNode();
            throw h2("ENOENT", "getNodeByIdOrCreate", m1(a));
        };
        a44.prototype.wrapAsync = function(a, b, c) {
            var d = this;
            q(c);
            $c.default(function() {
                try {
                    c(null, a.apply(d, b));
                } catch (va) {
                    c(va);
                }
            });
        };
        a44.prototype._toJSON = function(a, b, c) {
            var d;
            void 0 === a && (a = this.root);
            void 0 === b && (b = {
            });
            var e = !0, r = a.children;
            a.getNode().isFile() && (r = (d = {
            }, d[a.getName()] = a.parent.getChild(a.getName()), d), a = a.parent);
            for(var D in r){
                e = !1;
                r = a.getChild(D);
                if (!r) throw Error("_toJSON: unexpected undefined");
                d = r.getNode();
                d.isFile() ? (r = r.getPath(), c && (r = xd(c, r)), b[r] = d.getString()) : d.isDirectory() && this._toJSON(r, b, c);
            }
            a = a.getPath();
            c && (a = xd(c, a));
            a && e && (b[a] = null);
            return b;
        };
        a44.prototype.toJSON = function(a, b, c) {
            void 0 === b && (b = {
            });
            void 0 === c && (c = !1);
            var d = [];
            if (a) {
                a instanceof Array || (a = [
                    a
                ]);
                for(var e = 0; e < a.length; e++){
                    var r = m1(a[e]);
                    (r = this.getResolvedLink(r)) && d.push(r);
                }
            } else d.push(this.root);
            if (!d.length) return b;
            for(e = 0; e < d.length; e++)r = d[e], this._toJSON(r, b, c ? r.getPath() : "");
            return b;
        };
        a44.prototype.fromJSON = function(a, b) {
            void 0 === b && (b = L.default.cwd());
            for(var d in a){
                var e = a[d];
                if ("string" === typeof e) {
                    d = c13(d, b);
                    var r = v1(d);
                    1 < r.length && (r = S + r.slice(0, r.length - 1).join(S), this.mkdirpBase(r, 511));
                    this.writeFileSync(d, e);
                } else this.mkdirpBase(d, 511);
            }
        };
        a44.prototype.reset = function() {
            this.ino = 0;
            this.inodes = {
            };
            this.releasedInos = [];
            this.fds = {
            };
            this.releasedFds = [];
            this.openFiles = 0;
            this.root = this.createLink();
            this.root.setNode(this.createNode(!0));
        };
        a44.prototype.mountSync = function(a, b) {
            this.fromJSON(b, a);
        };
        a44.prototype.openLink = function(a, b, c) {
            void 0 === c && (c = !0);
            if (this.openFiles >= this.maxFiles) throw h2("EMFILE", "open", a.getPath());
            var d = a;
            c && (d = this.resolveSymlinks(a));
            if (!d) throw h2("ENOENT", "open", a.getPath());
            c = d.getNode();
            if (c.isDirectory()) {
                if ((b & (mb | na | Ka)) !== mb) throw h2("EISDIR", "open", a.getPath());
            } else if (b & gf) throw h2("ENOTDIR", "open", a.getPath());
            if (!(b & Ka || c.canRead())) throw h2("EACCES", "open", a.getPath());
            a = new this.props.File(a, c, b, this.newFdNumber());
            this.fds[a.fd] = a;
            this.openFiles++;
            b & Za && a.truncate();
            return a;
        };
        a44.prototype.openFile = function(a, b, c, d) {
            void 0 === d && (d = !0);
            var e = v1(a), r = d ? this.getResolvedLink(e) : this.getLink(e);
            if (!r && b & U) {
                var D = this.getResolvedLink(e.slice(0, e.length - 1));
                if (!D) throw h2("ENOENT", "open", S + e.join(S));
                b & U && "number" === typeof c && (r = this.createLink(D, e[e.length - 1], !1, c));
            }
            if (r) return this.openLink(r, b, d);
            throw h2("ENOENT", "open", a);
        };
        a44.prototype.openBase = function(a, b, c, d) {
            void 0 === d && (d = !0);
            b = this.openFile(a, b, c, d);
            if (!b) throw h2("ENOENT", "open", a);
            return b.fd;
        };
        a44.prototype.openSync = function(a, b, c) {
            void 0 === c && (c = 438);
            c = M(c);
            a = m1(a);
            b = k1(b);
            return this.openBase(a, b, c);
        };
        a44.prototype.open = function(a, b, c, d) {
            var e = c;
            "function" === typeof c && (e = 438, d = c);
            c = M(e || 438);
            a = m1(a);
            b = k1(b);
            this.wrapAsync(this.openBase, [
                a,
                b,
                c
            ], d);
        };
        a44.prototype.closeFile = function(a) {
            this.fds[a.fd] && (this.openFiles--, delete this.fds[a.fd], this.releasedFds.push(a.fd));
        };
        a44.prototype.closeSync = function(a) {
            Ya(a);
            a = this.getFileByFdOrThrow(a, "close");
            this.closeFile(a);
        };
        a44.prototype.close = function(a, b) {
            Ya(a);
            this.wrapAsync(this.closeSync, [
                a
            ], b);
        };
        a44.prototype.openFileOrGetById = function(a, b, c) {
            if ("number" === typeof a) {
                a = this.fds[a];
                if (!a) throw h2("ENOENT");
                return a;
            }
            return this.openFile(m1(a), b, c);
        };
        a44.prototype.readBase = function(a, b, c, d, e) {
            return this.getFileByFdOrThrow(a).read(b, Number(c), Number(d), e);
        };
        a44.prototype.readSync = function(a, b, c, d, e) {
            Ya(a);
            return this.readBase(a, b, c, d, e);
        };
        a44.prototype.read = function(a, b, c, d, e, f) {
            var r = this;
            q(f);
            if (0 === d) return L.default.nextTick(function() {
                f && f(null, 0, b);
            });
            $c.default(function() {
                try {
                    var D = r.readBase(a, b, c, d, e);
                    f(null, D, b);
                } catch (pf) {
                    f(pf);
                }
            });
        };
        a44.prototype.readFileBase = function(a, b, c) {
            var d = "number" === typeof a && a >>> 0 === a;
            if (!d) {
                var e = m1(a);
                e = v1(e);
                if ((e = this.getResolvedLink(e)) && e.getNode().isDirectory()) throw h2("EISDIR", "open", e.getPath());
                a = this.openSync(a, b);
            }
            try {
                var r = $b(this.getFileByFdOrThrow(a).getBuffer(), c);
            } finally{
                d || this.closeSync(a);
            }
            return r;
        };
        a44.prototype.readFileSync = function(a, b) {
            b = zd(b);
            var c = k1(b.flag);
            return this.readFileBase(a, c, b.encoding);
        };
        a44.prototype.readFile = function(a, b, c) {
            c = B(zd)(b, c);
            b = c[0];
            c = c[1];
            var d = k1(b.flag);
            this.wrapAsync(this.readFileBase, [
                a,
                d,
                b.encoding
            ], c);
        };
        a44.prototype.writeBase = function(a, b, c, d, e) {
            return this.getFileByFdOrThrow(a, "write").write(b, c, d, e);
        };
        a44.prototype.writeSync = function(a, b, c, d, e) {
            Ya(a);
            var r = "string" !== typeof b;
            if (r) {
                var D = (c || 0) | 0;
                var f = d;
                c = e;
            } else var Xa = d;
            b = La(b, Xa);
            r ? "undefined" === typeof f && (f = b.length) : (D = 0, f = b.length);
            return this.writeBase(a, b, D, f, c);
        };
        a44.prototype.write = function(a, b, c17, d, e, f) {
            var r = this;
            Ya(a);
            var D = typeof b, Xa = typeof c17, g = typeof d, h = typeof e;
            if ("string" !== D) {
                if ("function" === Xa) var k = c17;
                else if ("function" === g) {
                    var lb = c17 | 0;
                    k = d;
                } else if ("function" === h) {
                    lb = c17 | 0;
                    var m = d;
                    k = e;
                } else {
                    lb = c17 | 0;
                    m = d;
                    var n = e;
                    k = f;
                }
            } else if ("function" === Xa) k = c17;
            else if ("function" === g) n = c17, k = d;
            else if ("function" === h) {
                n = c17;
                var va = d;
                k = e;
            }
            var p = La(b, va);
            "string" !== D ? "undefined" === typeof m && (m = p.length) : (lb = 0, m = p.length);
            var v = q(k);
            $c.default(function() {
                try {
                    var c = r.writeBase(a, p, lb, m, n);
                    "string" !== D ? v(null, c, p) : v(null, c, b);
                } catch (qf) {
                    v(qf);
                }
            });
        };
        a44.prototype.writeFileBase = function(a, b, c, d) {
            var e = "number" === typeof a;
            a = e ? a : this.openBase(m1(a), c, d);
            d = 0;
            var r = b.length;
            c = c & $a ? void 0 : 0;
            try {
                for(; 0 < r;){
                    var D = this.writeSync(a, b, d, r, c);
                    d += D;
                    r -= D;
                    void 0 !== c && (c += D);
                }
            } finally{
                e || this.closeSync(a);
            }
        };
        a44.prototype.writeFileSync = function(a, b, c) {
            var d = Bd(c);
            c = k1(d.flag);
            var e = M(d.mode);
            b = La(b, d.encoding);
            this.writeFileBase(a, b, c, e);
        };
        a44.prototype.writeFile = function(a, b, c, d) {
            var e = c;
            "function" === typeof c && (e = Ad, d = c);
            c = q(d);
            var r = Bd(e);
            e = k1(r.flag);
            d = M(r.mode);
            b = La(b, r.encoding);
            this.wrapAsync(this.writeFileBase, [
                a,
                b,
                e,
                d
            ], c);
        };
        a44.prototype.linkBase = function(a, b) {
            var c = v1(a), d = this.getLink(c);
            if (!d) throw h2("ENOENT", "link", a, b);
            var e = v1(b);
            c = this.getLinkParent(e);
            if (!c) throw h2("ENOENT", "link", a, b);
            e = e[e.length - 1];
            if (c.getChild(e)) throw h2("EEXIST", "link", a, b);
            a = d.getNode();
            a.nlink++;
            c.createChild(e, a);
        };
        a44.prototype.copyFileBase = function(a, b, c) {
            var d = this.readFileSync(a);
            if (c & hf && this.existsSync(b)) throw h2("EEXIST", "copyFile", a, b);
            if (c & jf) throw h2("ENOSYS", "copyFile", a, b);
            this.writeFileBase(b, d, ua.w, 438);
        };
        a44.prototype.copyFileSync = function(a, b, c) {
            a = m1(a);
            b = m1(b);
            return this.copyFileBase(a, b, (c || 0) | 0);
        };
        a44.prototype.copyFile = function(a, b, c, d) {
            a = m1(a);
            b = m1(b);
            if ("function" === typeof c) var e = 0;
            else e = c, c = d;
            q(c);
            this.wrapAsync(this.copyFileBase, [
                a,
                b,
                e
            ], c);
        };
        a44.prototype.linkSync = function(a, b) {
            a = m1(a);
            b = m1(b);
            this.linkBase(a, b);
        };
        a44.prototype.link = function(a, b, c) {
            a = m1(a);
            b = m1(b);
            this.wrapAsync(this.linkBase, [
                a,
                b
            ], c);
        };
        a44.prototype.unlinkBase = function(a) {
            var b = v1(a);
            b = this.getLink(b);
            if (!b) throw h2("ENOENT", "unlink", a);
            if (b.length) throw Error("Dir not empty...");
            this.deleteLink(b);
            a = b.getNode();
            a.nlink--;
            0 >= a.nlink && this.deleteNode(a);
        };
        a44.prototype.unlinkSync = function(a) {
            a = m1(a);
            this.unlinkBase(a);
        };
        a44.prototype.unlink = function(a, b) {
            a = m1(a);
            this.wrapAsync(this.unlinkBase, [
                a
            ], b);
        };
        a44.prototype.symlinkBase = function(a, b) {
            var c = v1(b), d = this.getLinkParent(c);
            if (!d) throw h2("ENOENT", "symlink", a, b);
            c = c[c.length - 1];
            if (d.getChild(c)) throw h2("EEXIST", "symlink", a, b);
            b = d.createChild(c);
            b.getNode().makeSymlink(v1(a));
            return b;
        };
        a44.prototype.symlinkSync = function(a, b) {
            a = m1(a);
            b = m1(b);
            this.symlinkBase(a, b);
        };
        a44.prototype.symlink = function(a, b, c, d) {
            c = q("function" === typeof c ? c : d);
            a = m1(a);
            b = m1(b);
            this.wrapAsync(this.symlinkBase, [
                a,
                b
            ], c);
        };
        a44.prototype.realpathBase = function(a, b) {
            var c = v1(a);
            c = this.getResolvedLink(c);
            if (!c) throw h2("ENOENT", "realpath", a);
            return K.strToEncoding(c.getPath(), b);
        };
        a44.prototype.realpathSync = function(a, b) {
            return this.realpathBase(m1(a), Ed(b).encoding);
        };
        a44.prototype.realpath = function(a, b, c) {
            c = lf(b, c);
            b = c[0];
            c = c[1];
            a = m1(a);
            this.wrapAsync(this.realpathBase, [
                a,
                b.encoding
            ], c);
        };
        a44.prototype.lstatBase = function(a, b) {
            void 0 === b && (b = !1);
            var c = this.getLink(v1(a));
            if (!c) throw h2("ENOENT", "lstat", a);
            return ka.default.build(c.getNode(), b);
        };
        a44.prototype.lstatSync = function(a, b) {
            return this.lstatBase(m1(a), e8(b).bigint);
        };
        a44.prototype.lstat = function(a, b, c) {
            c = d11(b, c);
            b = c[0];
            c = c[1];
            this.wrapAsync(this.lstatBase, [
                m1(a),
                b.bigint
            ], c);
        };
        a44.prototype.statBase = function(a, b) {
            void 0 === b && (b = !1);
            var c = this.getResolvedLink(v1(a));
            if (!c) throw h2("ENOENT", "stat", a);
            return ka.default.build(c.getNode(), b);
        };
        a44.prototype.statSync = function(a, b) {
            return this.statBase(m1(a), e8(b).bigint);
        };
        a44.prototype.stat = function(a, b, c) {
            c = d11(b, c);
            b = c[0];
            c = c[1];
            this.wrapAsync(this.statBase, [
                m1(a),
                b.bigint
            ], c);
        };
        a44.prototype.fstatBase = function(a, b) {
            void 0 === b && (b = !1);
            a = this.getFileByFd(a);
            if (!a) throw h2("EBADF", "fstat");
            return ka.default.build(a.node, b);
        };
        a44.prototype.fstatSync = function(a, b) {
            return this.fstatBase(a, e8(b).bigint);
        };
        a44.prototype.fstat = function(a, b, c) {
            b = d11(b, c);
            this.wrapAsync(this.fstatBase, [
                a,
                b[0].bigint
            ], b[1]);
        };
        a44.prototype.renameBase = function(a, b) {
            var c = this.getLink(v1(a));
            if (!c) throw h2("ENOENT", "rename", a, b);
            var d = v1(b), e = this.getLinkParent(d);
            if (!e) throw h2("ENOENT", "rename", a, b);
            (a = c.parent) && a.deleteChild(c);
            c.steps = Xb(e.steps, [
                d[d.length - 1]
            ]);
            e.setChild(c.getName(), c);
        };
        a44.prototype.renameSync = function(a, b) {
            a = m1(a);
            b = m1(b);
            this.renameBase(a, b);
        };
        a44.prototype.rename = function(a, b, c) {
            a = m1(a);
            b = m1(b);
            this.wrapAsync(this.renameBase, [
                a,
                b
            ], c);
        };
        a44.prototype.existsBase = function(a) {
            return !!this.statBase(a);
        };
        a44.prototype.existsSync = function(a) {
            try {
                return this.existsBase(m1(a));
            } catch (D) {
                return !1;
            }
        };
        a44.prototype.exists = function(a, b) {
            var c = this, d = m1(a);
            if ("function" !== typeof b) throw Error(fa.CB);
            $c.default(function() {
                try {
                    b(c.existsBase(d));
                } catch (va) {
                    b(!1);
                }
            });
        };
        a44.prototype.accessBase = function(a) {
            this.getLinkOrThrow(a, "access");
        };
        a44.prototype.accessSync = function(a, b) {
            void 0 === b && (b = wd);
            a = m1(a);
            this.accessBase(a, b | 0);
        };
        a44.prototype.access = function(a, b, c) {
            var d = wd;
            "function" !== typeof b && (d = b | 0, b = q(c));
            a = m1(a);
            this.wrapAsync(this.accessBase, [
                a,
                d
            ], b);
        };
        a44.prototype.appendFileSync = function(a, b, c) {
            void 0 === c && (c = Cd);
            c = Dd(c);
            c.flag && a >>> 0 !== a || (c.flag = "a");
            this.writeFileSync(a, b, c);
        };
        a44.prototype.appendFile = function(a, b, c, d) {
            d = kf(c, d);
            c = d[0];
            d = d[1];
            c.flag && a >>> 0 !== a || (c.flag = "a");
            this.writeFile(a, b, c, d);
        };
        a44.prototype.readdirBase = function(a46, b27) {
            var c = v1(a46);
            c = this.getResolvedLink(c);
            if (!c) throw h2("ENOENT", "readdir", a46);
            if (!c.getNode().isDirectory()) throw h2("ENOTDIR", "scandir", a46);
            if (b27.withFileTypes) {
                var d = [];
                for(e in c.children)(a46 = c.getChild(e)) && d.push(Qc.default.build(a46, b27.encoding));
                Yb || "buffer" === b27.encoding || d.sort(function(a, b) {
                    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
                });
                return d;
            }
            var e = [];
            for(d in c.children)e.push(K.strToEncoding(d, b27.encoding));
            Yb || "buffer" === b27.encoding || e.sort();
            return e;
        };
        a44.prototype.readdirSync = function(a, b) {
            b = Gd(b);
            a = m1(a);
            return this.readdirBase(a, b);
        };
        a44.prototype.readdir = function(a, b, c) {
            c = mf(b, c);
            b = c[0];
            c = c[1];
            a = m1(a);
            this.wrapAsync(this.readdirBase, [
                a,
                b
            ], c);
        };
        a44.prototype.readlinkBase = function(a, b) {
            var c = this.getLinkOrThrow(a, "readlink").getNode();
            if (!c.isSymlink()) throw h2("EINVAL", "readlink", a);
            a = S + c.symlink.join(S);
            return K.strToEncoding(a, b);
        };
        a44.prototype.readlinkSync = function(a, b) {
            b = ob(b);
            a = m1(a);
            return this.readlinkBase(a, b.encoding);
        };
        a44.prototype.readlink = function(a, b, c) {
            c = yd(b, c);
            b = c[0];
            c = c[1];
            a = m1(a);
            this.wrapAsync(this.readlinkBase, [
                a,
                b.encoding
            ], c);
        };
        a44.prototype.fsyncBase = function(a) {
            this.getFileByFdOrThrow(a, "fsync");
        };
        a44.prototype.fsyncSync = function(a) {
            this.fsyncBase(a);
        };
        a44.prototype.fsync = function(a, b) {
            this.wrapAsync(this.fsyncBase, [
                a
            ], b);
        };
        a44.prototype.fdatasyncBase = function(a) {
            this.getFileByFdOrThrow(a, "fdatasync");
        };
        a44.prototype.fdatasyncSync = function(a) {
            this.fdatasyncBase(a);
        };
        a44.prototype.fdatasync = function(a, b) {
            this.wrapAsync(this.fdatasyncBase, [
                a
            ], b);
        };
        a44.prototype.ftruncateBase = function(a, b) {
            this.getFileByFdOrThrow(a, "ftruncate").truncate(b);
        };
        a44.prototype.ftruncateSync = function(a, b) {
            this.ftruncateBase(a, b);
        };
        a44.prototype.ftruncate = function(a, b, c) {
            var d = "number" === typeof b ? b : 0;
            b = q("number" === typeof b ? c : b);
            this.wrapAsync(this.ftruncateBase, [
                a,
                d
            ], b);
        };
        a44.prototype.truncateBase = function(a, b) {
            a = this.openSync(a, "r+");
            try {
                this.ftruncateSync(a, b);
            } finally{
                this.closeSync(a);
            }
        };
        a44.prototype.truncateSync = function(a, b) {
            if (a >>> 0 === a) return this.ftruncateSync(a, b);
            this.truncateBase(a, b);
        };
        a44.prototype.truncate = function(a, b, c) {
            var d = "number" === typeof b ? b : 0;
            b = q("number" === typeof b ? c : b);
            if (a >>> 0 === a) return this.ftruncate(a, d, b);
            this.wrapAsync(this.truncateBase, [
                a,
                d
            ], b);
        };
        a44.prototype.futimesBase = function(a, b, c) {
            a = this.getFileByFdOrThrow(a, "futimes").node;
            a.atime = new Date(1000 * b);
            a.mtime = new Date(1000 * c);
        };
        a44.prototype.futimesSync = function(a, b, c) {
            this.futimesBase(a, ha(b), ha(c));
        };
        a44.prototype.futimes = function(a, b, c, d) {
            this.wrapAsync(this.futimesBase, [
                a,
                ha(b),
                ha(c)
            ], d);
        };
        a44.prototype.utimesBase = function(a, b, c) {
            a = this.openSync(a, "r+");
            try {
                this.futimesBase(a, b, c);
            } finally{
                this.closeSync(a);
            }
        };
        a44.prototype.utimesSync = function(a, b, c) {
            this.utimesBase(m1(a), ha(b), ha(c));
        };
        a44.prototype.utimes = function(a, b, c, d) {
            this.wrapAsync(this.utimesBase, [
                m1(a),
                ha(b),
                ha(c)
            ], d);
        };
        a44.prototype.mkdirBase = function(a, b) {
            var c = v1(a);
            if (!c.length) throw h2("EISDIR", "mkdir", a);
            var d = this.getLinkParentAsDirOrThrow(a, "mkdir");
            c = c[c.length - 1];
            if (d.getChild(c)) throw h2("EEXIST", "mkdir", a);
            d.createChild(c, this.createNode(!0, b));
        };
        a44.prototype.mkdirpBase = function(a, b) {
            a = v1(a);
            for(var c = this.root, d = 0; d < a.length; d++){
                var e = a[d];
                if (!c.getNode().isDirectory()) throw h2("ENOTDIR", "mkdir", c.getPath());
                var f = c.getChild(e);
                if (f) {
                    if (f.getNode().isDirectory()) c = f;
                    else throw h2("ENOTDIR", "mkdir", f.getPath());
                } else c = c.createChild(e, this.createNode(!0, b));
            }
        };
        a44.prototype.mkdirSync = function(a, b) {
            b = f3(b);
            var c = M(b.mode, 511);
            a = m1(a);
            b.recursive ? this.mkdirpBase(a, c) : this.mkdirBase(a, c);
        };
        a44.prototype.mkdir = function(a, b, c) {
            var d = f3(b);
            b = q("function" === typeof b ? b : c);
            c = M(d.mode, 511);
            a = m1(a);
            d.recursive ? this.wrapAsync(this.mkdirpBase, [
                a,
                c
            ], b) : this.wrapAsync(this.mkdirBase, [
                a,
                c
            ], b);
        };
        a44.prototype.mkdirpSync = function(a, b) {
            this.mkdirSync(a, {
                mode: b,
                recursive: !0
            });
        };
        a44.prototype.mkdirp = function(a, b, c) {
            var d = "function" === typeof b ? void 0 : b;
            b = q("function" === typeof b ? b : c);
            this.mkdir(a, {
                mode: d,
                recursive: !0
            }, b);
        };
        a44.prototype.mkdtempBase = function(a, b, c) {
            void 0 === c && (c = 5);
            var d = a + this.genRndStr();
            try {
                return this.mkdirBase(d, 511), K.strToEncoding(d, b);
            } catch (va) {
                if ("EEXIST" === va.code) {
                    if (1 < c) return this.mkdtempBase(a, b, c - 1);
                    throw Error("Could not create temp dir.");
                }
                throw va;
            }
        };
        a44.prototype.mkdtempSync = function(a, b) {
            b = ob(b).encoding;
            if (!a || "string" !== typeof a) throw new TypeError("filename prefix is required");
            qb(a);
            return this.mkdtempBase(a, b);
        };
        a44.prototype.mkdtemp = function(a, b, c) {
            c = yd(b, c);
            b = c[0].encoding;
            c = c[1];
            if (!a || "string" !== typeof a) throw new TypeError("filename prefix is required");
            qb(a) && this.wrapAsync(this.mkdtempBase, [
                a,
                b
            ], c);
        };
        a44.prototype.rmdirBase = function(a, b) {
            b = aa({
            }, Fd, b);
            var c = this.getLinkAsDirOrThrow(a, "rmdir");
            if (c.length && !b.recursive) throw h2("ENOTEMPTY", "rmdir", a);
            this.deleteLink(c);
        };
        a44.prototype.rmdirSync = function(a, b) {
            this.rmdirBase(m1(a), b);
        };
        a44.prototype.rmdir = function(a, b, c) {
            var d = aa({
            }, Fd, b);
            b = q("function" === typeof b ? b : c);
            this.wrapAsync(this.rmdirBase, [
                m1(a),
                d
            ], b);
        };
        a44.prototype.fchmodBase = function(a, b) {
            this.getFileByFdOrThrow(a, "fchmod").chmod(b);
        };
        a44.prototype.fchmodSync = function(a, b) {
            this.fchmodBase(a, M(b));
        };
        a44.prototype.fchmod = function(a, b, c) {
            this.wrapAsync(this.fchmodBase, [
                a,
                M(b)
            ], c);
        };
        a44.prototype.chmodBase = function(a, b) {
            a = this.openSync(a, "r+");
            try {
                this.fchmodBase(a, b);
            } finally{
                this.closeSync(a);
            }
        };
        a44.prototype.chmodSync = function(a, b) {
            b = M(b);
            a = m1(a);
            this.chmodBase(a, b);
        };
        a44.prototype.chmod = function(a, b, c) {
            b = M(b);
            a = m1(a);
            this.wrapAsync(this.chmodBase, [
                a,
                b
            ], c);
        };
        a44.prototype.lchmodBase = function(a, b) {
            a = this.openBase(a, na, 0, !1);
            try {
                this.fchmodBase(a, b);
            } finally{
                this.closeSync(a);
            }
        };
        a44.prototype.lchmodSync = function(a, b) {
            b = M(b);
            a = m1(a);
            this.lchmodBase(a, b);
        };
        a44.prototype.lchmod = function(a, b, c) {
            b = M(b);
            a = m1(a);
            this.wrapAsync(this.lchmodBase, [
                a,
                b
            ], c);
        };
        a44.prototype.fchownBase = function(a, b, c) {
            this.getFileByFdOrThrow(a, "fchown").chown(b, c);
        };
        a44.prototype.fchownSync = function(a, b, c) {
            Ha(b);
            Ia(c);
            this.fchownBase(a, b, c);
        };
        a44.prototype.fchown = function(a, b, c, d) {
            Ha(b);
            Ia(c);
            this.wrapAsync(this.fchownBase, [
                a,
                b,
                c
            ], d);
        };
        a44.prototype.chownBase = function(a, b, c) {
            this.getResolvedLinkOrThrow(a, "chown").getNode().chown(b, c);
        };
        a44.prototype.chownSync = function(a, b, c) {
            Ha(b);
            Ia(c);
            this.chownBase(m1(a), b, c);
        };
        a44.prototype.chown = function(a, b, c, d) {
            Ha(b);
            Ia(c);
            this.wrapAsync(this.chownBase, [
                m1(a),
                b,
                c
            ], d);
        };
        a44.prototype.lchownBase = function(a, b, c) {
            this.getLinkOrThrow(a, "lchown").getNode().chown(b, c);
        };
        a44.prototype.lchownSync = function(a, b, c) {
            Ha(b);
            Ia(c);
            this.lchownBase(m1(a), b, c);
        };
        a44.prototype.lchown = function(a, b, c, d) {
            Ha(b);
            Ia(c);
            this.wrapAsync(this.lchownBase, [
                m1(a),
                b,
                c
            ], d);
        };
        a44.prototype.watchFile = function(a, b, c) {
            a = m1(a);
            var d = b;
            "function" === typeof d && (c = b, d = null);
            if ("function" !== typeof c) throw Error('"watchFile()" requires a listener function');
            b = 5007;
            var e = !0;
            d && "object" === typeof d && ("number" === typeof d.interval && (b = d.interval), "boolean" === typeof d.persistent && (e = d.persistent));
            d = this.statWatchers[a];
            d || (d = new this.StatWatcher, d.start(a, e, b), this.statWatchers[a] = d);
            d.addListener("change", c);
            return d;
        };
        a44.prototype.unwatchFile = function(a, b) {
            a = m1(a);
            var c = this.statWatchers[a];
            c && ("function" === typeof b ? c.removeListener("change", b) : c.removeAllListeners("change"), 0 === c.listenerCount("change") && (c.stop(), delete this.statWatchers[a]));
        };
        a44.prototype.createReadStream = function(a, b) {
            return new this.ReadStream(a, b);
        };
        a44.prototype.createWriteStream = function(a, b) {
            return new this.WriteStream(a, b);
        };
        a44.prototype.watch = function(a, b, c) {
            a = m1(a);
            var d = b;
            "function" === typeof b && (c = b, d = null);
            var e = ob(d);
            b = e.persistent;
            d = e.recursive;
            e = e.encoding;
            void 0 === b && (b = !0);
            void 0 === d && (d = !1);
            var f = new this.FSWatcher;
            f.start(a, b, d, e);
            c && f.addListener("change", c);
            return f;
        };
        a44.fd = 2147483647;
        return a44;
    })();
    b25.Volume = a42;
    var Hd = function(a47) {
        function b28(b) {
            var c = a47.call(this) || this;
            c.onInterval = function() {
                try {
                    var a = c.vol.statSync(c.filename);
                    c.hasChanged(a) && (c.emit("change", a, c.prev), c.prev = a);
                } finally{
                    c.loop();
                }
            };
            c.vol = b;
            return c;
        }
        Ja(b28, a47);
        b28.prototype.loop = function() {
            this.timeoutRef = this.setTimeout(this.onInterval, this.interval);
        };
        b28.prototype.hasChanged = function(a) {
            return a.mtimeMs > this.prev.mtimeMs || a.nlink !== this.prev.nlink ? !0 : !1;
        };
        b28.prototype.start = function(a, b, c) {
            void 0 === b && (b = !0);
            void 0 === c && (c = 5007);
            this.filename = m1(a);
            this.setTimeout = b ? setTimeout : hd.default;
            this.interval = c;
            this.prev = this.vol.statSync(this.filename);
            this.loop();
        };
        b28.prototype.stop = function() {
            clearTimeout(this.timeoutRef);
            L.default.nextTick(ef, this);
        };
        return b28;
    }(O.EventEmitter);
    b25.StatWatcher = Hd;
    var N;
    lc.inherits(T, Y.Readable);
    b25.ReadStream = T;
    T.prototype.open = function() {
        var a = this;
        this._vol.open(this.path, this.flags, this.mode, function(b, c) {
            b ? (a.autoClose && a.destroy && a.destroy(), a.emit("error", b)) : (a.fd = c, a.emit("open", c), a.read());
        });
    };
    T.prototype._read = function(a48) {
        if ("number" !== typeof this.fd) return this.once("open", function() {
            this._read(a48);
        });
        if (!this.destroyed) {
            if (!N || 128 > N.length - N.used) N = F.bufferAllocUnsafe(this._readableState.highWaterMark), N.used = 0;
            var b = N, c18 = Math.min(N.length - N.used, a48), d = N.used;
            void 0 !== this.pos && (c18 = Math.min(this.end - this.pos + 1, c18));
            if (0 >= c18) return this.push(null);
            var e = this;
            this._vol.read(this.fd, N, N.used, c18, this.pos, function(a, c) {
                a ? (e.autoClose && e.destroy && e.destroy(), e.emit("error", a)) : (a = null, 0 < c && (e.bytesRead += c, a = b.slice(d, d + c)), e.push(a));
            });
            void 0 !== this.pos && (this.pos += c18);
            N.used += c18;
        }
    };
    T.prototype._destroy = function(a, b) {
        this.close(function(c) {
            b(a || c);
        });
    };
    T.prototype.close = function(a49) {
        var b = this;
        if (a49) this.once("close", a49);
        if (this.closed || "number" !== typeof this.fd) {
            if ("number" !== typeof this.fd) {
                this.once("open", ff);
                return;
            }
            return L.default.nextTick(function() {
                return b.emit("close");
            });
        }
        this.closed = !0;
        this._vol.close(this.fd, function(a) {
            a ? b.emit("error", a) : b.emit("close");
        });
        this.fd = null;
    };
    lc.inherits(R, Y.Writable);
    b25.WriteStream = R;
    R.prototype.open = function() {
        this._vol.open(this.path, this.flags, this.mode, (function(a, b) {
            a ? (this.autoClose && this.destroy && this.destroy(), this.emit("error", a)) : (this.fd = b, this.emit("open", b));
        }).bind(this));
    };
    R.prototype._write = function(a50, b29, c) {
        if (!(a50 instanceof F.Buffer)) return this.emit("error", Error("Invalid data"));
        if ("number" !== typeof this.fd) return this.once("open", function() {
            this._write(a50, b29, c);
        });
        var d = this;
        this._vol.write(this.fd, a50, 0, a50.length, this.pos, function(a, b) {
            if (a) return d.autoClose && d.destroy && d.destroy(), c(a);
            d.bytesWritten += b;
            c();
        });
        void 0 !== this.pos && (this.pos += a50.length);
    };
    R.prototype._writev = function(a51, b) {
        if ("number" !== typeof this.fd) return this.once("open", function() {
            this._writev(a51, b);
        });
        for(var c = this, d12 = a51.length, e = Array(d12), f = 0, g = 0; g < d12; g++){
            var h = a51[g].chunk;
            e[g] = h;
            f += h.length;
        }
        d12 = F.Buffer.concat(e);
        this._vol.write(this.fd, d12, 0, d12.length, this.pos, function(a, d) {
            if (a) return c.destroy && c.destroy(), b(a);
            c.bytesWritten += d;
            b();
        });
        void 0 !== this.pos && (this.pos += f);
    };
    R.prototype._destroy = T.prototype._destroy;
    R.prototype.close = T.prototype.close;
    R.prototype.destroySoon = R.prototype.end;
    var Id = function(a52) {
        function b30(b) {
            var c = a52.call(this) || this;
            c._filename = "";
            c._filenameEncoded = "";
            c._recursive = !1;
            c._encoding = K.ENCODING_UTF8;
            c._onNodeChange = function() {
                c._emit("change");
            };
            c._onParentChild = function(a) {
                a.getName() === c._getName() && c._emit("rename");
            };
            c._emit = function(a) {
                c.emit("change", a, c._filenameEncoded);
            };
            c._persist = function() {
                c._timer = setTimeout(c._persist, 1000000);
            };
            c._vol = b;
            return c;
        }
        Ja(b30, a52);
        b30.prototype._getName = function() {
            return this._steps[this._steps.length - 1];
        };
        b30.prototype.start = function(a, b, c, d) {
            void 0 === b && (b = !0);
            void 0 === c && (c = !1);
            void 0 === d && (d = K.ENCODING_UTF8);
            this._filename = m1(a);
            this._steps = v1(this._filename);
            this._filenameEncoded = K.strToEncoding(this._filename);
            this._recursive = c;
            this._encoding = d;
            try {
                this._link = this._vol.getLinkOrThrow(this._filename, "FSWatcher");
            } catch (Wb) {
                throw b = Error("watch " + this._filename + " " + Wb.code), b.code = Wb.code, b.errno = Wb.code, b;
            }
            this._link.getNode().on("change", this._onNodeChange);
            this._link.on("child:add", this._onNodeChange);
            this._link.on("child:delete", this._onNodeChange);
            if (a = this._link.parent) a.setMaxListeners(a.getMaxListeners() + 1), a.on("child:delete", this._onParentChild);
            b && this._persist();
        };
        b30.prototype.close = function() {
            clearTimeout(this._timer);
            this._link.getNode().removeListener("change", this._onNodeChange);
            var a = this._link.parent;
            a && a.removeListener("child:delete", this._onParentChild);
        };
        return b30;
    }(O.EventEmitter);
    b25.FSWatcher = Id;
});
t(Xe);
var Ye = Xe.pathToFilename, Ze = Xe.filenameToSteps, $e = Xe.Volume, af = u(function(a, b) {
    Object.defineProperty(b, "__esModule", {
        value: !0
    });
    b.fsProps = "constants F_OK R_OK W_OK X_OK Stats".split(" ");
    b.fsSyncMethods = "renameSync ftruncateSync truncateSync chownSync fchownSync lchownSync chmodSync fchmodSync lchmodSync statSync lstatSync fstatSync linkSync symlinkSync readlinkSync realpathSync unlinkSync rmdirSync mkdirSync mkdirpSync readdirSync closeSync openSync utimesSync futimesSync fsyncSync writeSync readSync readFileSync writeFileSync appendFileSync existsSync accessSync fdatasyncSync mkdtempSync copyFileSync createReadStream createWriteStream".split(" ");
    b.fsAsyncMethods = "rename ftruncate truncate chown fchown lchown chmod fchmod lchmod stat lstat fstat link symlink readlink realpath unlink rmdir mkdir mkdirp readdir close open utimes futimes fsync write read readFile writeFile appendFile exists access fdatasync mkdtemp copyFile watchFile unwatchFile watch".split(" ");
});
t(af);
var bf = u(function(a53, b31) {
    function c20(a) {
        for(var b = {
            F_OK: g,
            R_OK: h,
            W_OK: k,
            X_OK: p,
            constants: w.constants,
            Stats: ka.default,
            Dirent: Qc.default
        }, c = 0, d = e9; c < d.length; c++){
            var n = d[c];
            "function" === typeof a[n] && (b[n] = a[n].bind(a));
        }
        c = 0;
        for(d = f; c < d.length; c++)n = d[c], "function" === typeof a[n] && (b[n] = a[n].bind(a));
        b.StatWatcher = a.StatWatcher;
        b.FSWatcher = a.FSWatcher;
        b.WriteStream = a.WriteStream;
        b.ReadStream = a.ReadStream;
        b.promises = a.promises;
        b._toUnixTimestamp = Xe.toUnixTimestamp;
        return b;
    }
    var d13 = l && l.__assign || function() {
        d13 = Object.assign || function(a) {
            for(var b, c = 1, d = arguments.length; c < d; c++){
                b = arguments[c];
                for(var e in b)Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e]);
            }
            return a;
        };
        return d13.apply(this, arguments);
    };
    Object.defineProperty(b31, "__esModule", {
        value: !0
    });
    var e9 = af.fsSyncMethods, f = af.fsAsyncMethods, g = w.constants.F_OK, h = w.constants.R_OK, k = w.constants.W_OK, p = w.constants.X_OK;
    b31.Volume = Xe.Volume;
    b31.vol = new Xe.Volume;
    b31.createFsFromVolume = c20;
    b31.fs = c20(b31.vol);
    a53.exports = d13(d13({
    }, a53.exports), b31.fs);
    a53.exports.semantic = !0;
});
t(bf);
var rf = bf.createFsFromVolume;
gd.prototype.emit = function(a) {
    for(var b, c, d = [], e = 1; e < arguments.length; e++)d[e - 1] = arguments[e];
    e = this.listeners(a);
    try {
        for(var f = da(e), g = f.next(); !g.done; g = f.next()){
            var h = g.value;
            try {
                h.apply(void 0, ia(d));
            } catch (k) {
                console.error(k);
            }
        }
    } catch (k) {
        b = {
            error: k
        };
    } finally{
        try {
            g && !g.done && (c = f.return) && c.call(f);
        } finally{
            if (b) throw b.error;
        }
    }
    return 0 < e.length;
};
var sf = function() {
    function a54() {
        this.volume = new $e;
        this.fs = rf(this.volume);
        this.fromJSON({
            "/dev/stdin": "",
            "/dev/stdout": "",
            "/dev/stderr": ""
        });
    }
    a54.prototype._toJSON = function(a, c, d) {
        void 0 === c && (c = {
        });
        var b = !0, f;
        for(f in a.children){
            b = !1;
            var g = a.getChild(f);
            if (g) {
                var h = g.getNode();
                h && h.isFile() ? (g = g.getPath(), d && (g = Yc(d, g)), c[g] = h.getBuffer()) : h && h.isDirectory() && this._toJSON(g, c, d);
            }
        }
        a = a.getPath();
        d && (a = Yc(d, a));
        a && b && (c[a] = null);
        return c;
    };
    a54.prototype.toJSON = function(a, c, d) {
        var b, f;
        void 0 === c && (c = {
        });
        void 0 === d && (d = !1);
        var g = [];
        if (a) {
            a instanceof Array || (a = [
                a
            ]);
            try {
                for(var h = da(a), k = h.next(); !k.done; k = h.next()){
                    var p = Ye(k.value), n = this.volume.getResolvedLink(p);
                    n && g.push(n);
                }
            } catch (xa) {
                var q = {
                    error: xa
                };
            } finally{
                try {
                    k && !k.done && (b = h.return) && b.call(h);
                } finally{
                    if (q) throw q.error;
                }
            }
        } else g.push(this.volume.root);
        if (!g.length) return c;
        try {
            for(var B = da(g), m = B.next(); !m.done; m = B.next())n = m.value, this._toJSON(n, c, d ? n.getPath() : "");
        } catch (xa) {
            var v = {
                error: xa
            };
        } finally{
            try {
                m && !m.done && (f = B.return) && f.call(B);
            } finally{
                if (v) throw v.error;
            }
        }
        return c;
    };
    a54.prototype.fromJSONFixed = function(a, c) {
        for(var b in c){
            var e = c[b];
            if (e ? null !== Object.getPrototypeOf(e) : null !== e) {
                var f = Ze(b);
                1 < f.length && (f = "/" + f.slice(0, f.length - 1).join("/"), a.mkdirpBase(f, 511));
                a.writeFileSync(b, e || "");
            } else a.mkdirpBase(b, 511);
        }
    };
    a54.prototype.fromJSON = function(a) {
        this.volume = new $e;
        this.fromJSONFixed(this.volume, a);
        this.fs = rf(this.volume);
        this.volume.releasedFds = [
            0,
            1,
            2
        ];
        a = this.volume.openSync("/dev/stderr", "w");
        var b = this.volume.openSync("/dev/stdout", "w"), d = this.volume.openSync("/dev/stdin", "r");
        if (2 !== a) throw Error("invalid handle for stderr: " + a);
        if (1 !== b) throw Error("invalid handle for stdout: " + b);
        if (0 !== d) throw Error("invalid handle for stdin: " + d);
    };
    a54.prototype.getStdOut = function() {
        return ba(this, void 0, void 0, function() {
            var a55, c = this;
            return ca(this, function() {
                a55 = new Promise(function(a) {
                    a(c.fs.readFileSync("/dev/stdout", "utf8"));
                });
                return [
                    2,
                    a55
                ];
            });
        });
    };
    return a54;
}();
exports.default = sf;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"4Q9Dn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RbError", ()=>RbError
);
parcelHelpers.export(exports, "RbValue", ()=>RbValue
);
parcelHelpers.export(exports, "RubyVM", ()=>RubyVM
);
var global = arguments[3];
function clamp_host(i, min, max) {
    if (!Number.isInteger(i)) throw new TypeError(`must be an integer`);
    if (i < min || i > max) throw new RangeError(`must be between ${min} and ${max}`);
    return i;
}
let DATA_VIEW = new DataView(new ArrayBuffer());
function data_view(mem) {
    if (DATA_VIEW.buffer !== mem.buffer) DATA_VIEW = new DataView(mem.buffer);
    return DATA_VIEW;
}
const UTF8_DECODER = new TextDecoder('utf-8');
const UTF8_ENCODER = new TextEncoder('utf-8');
function utf8_encode(s, realloc, memory) {
    if (typeof s !== 'string') throw new TypeError('expected a string');
    if (s.length === 0) {
        UTF8_ENCODED_LEN = 0;
        return 1;
    }
    let alloc_len = 0;
    let ptr = 0;
    let writtenTotal = 0;
    while(s.length > 0){
        ptr = realloc(ptr, alloc_len, 1, alloc_len + s.length);
        alloc_len += s.length;
        const { read , written  } = UTF8_ENCODER.encodeInto(s, new Uint8Array(memory.buffer, ptr + writtenTotal, alloc_len - writtenTotal));
        writtenTotal += written;
        s = s.slice(read);
    }
    if (alloc_len > writtenTotal) ptr = realloc(ptr, alloc_len, 1, writtenTotal);
    UTF8_ENCODED_LEN = writtenTotal;
    return ptr;
}
let UTF8_ENCODED_LEN = 0;
class Slab {
    constructor(){
        this.list = [];
        this.head = 0;
    }
    insert(val) {
        if (this.head >= this.list.length) this.list.push({
            next: this.list.length + 1,
            val: undefined
        });
        const ret = this.head;
        const slot = this.list[ret];
        this.head = slot.next;
        slot.next = -1;
        slot.val = val;
        return ret;
    }
    get(idx) {
        if (idx >= this.list.length) throw new RangeError('handle index not valid');
        const slot = this.list[idx];
        if (slot.next === -1) return slot.val;
        throw new RangeError('handle index not valid');
    }
    remove(idx) {
        const ret = this.get(idx); // validate the slot
        const slot = this.list[idx];
        slot.val = undefined;
        slot.next = this.head;
        this.head = idx;
        return ret;
    }
}
class RbAbiGuest {
    constructor(){
        this._resource0_slab = new Slab();
        this._resource1_slab = new Slab();
    }
    addToImports(imports) {
        if (!("canonical_abi" in imports)) imports["canonical_abi"] = {
        };
        imports.canonical_abi['resource_drop_rb-iseq'] = (i)=>{
            this._resource0_slab.remove(i).drop();
        };
        imports.canonical_abi['resource_clone_rb-iseq'] = (i)=>{
            const obj = this._resource0_slab.get(i);
            return this._resource0_slab.insert(obj.clone());
        };
        imports.canonical_abi['resource_get_rb-iseq'] = (i)=>{
            return this._resource0_slab.get(i)._wasm_val;
        };
        imports.canonical_abi['resource_new_rb-iseq'] = (i)=>{
            this._registry0;
            return this._resource0_slab.insert(new RbIseq(i, this));
        };
        imports.canonical_abi['resource_drop_rb-abi-value'] = (i)=>{
            this._resource1_slab.remove(i).drop();
        };
        imports.canonical_abi['resource_clone_rb-abi-value'] = (i)=>{
            const obj = this._resource1_slab.get(i);
            return this._resource1_slab.insert(obj.clone());
        };
        imports.canonical_abi['resource_get_rb-abi-value'] = (i)=>{
            return this._resource1_slab.get(i)._wasm_val;
        };
        imports.canonical_abi['resource_new_rb-abi-value'] = (i)=>{
            this._registry1;
            return this._resource1_slab.insert(new RbAbiValue(i, this));
        };
    }
    async instantiate(module, imports) {
        imports = imports || {
        };
        this.addToImports(imports);
        if (module instanceof WebAssembly.Instance) this.instance = module;
        else if (module instanceof WebAssembly.Module) this.instance = await WebAssembly.instantiate(module, imports);
        else if (module instanceof ArrayBuffer || module instanceof Uint8Array) {
            const { instance  } = await WebAssembly.instantiate(module, imports);
            this.instance = instance;
        } else {
            const { instance  } = await WebAssembly.instantiateStreaming(module, imports);
            this.instance = instance;
        }
        this._exports = this.instance.exports;
        this._registry0 = new FinalizationRegistry(this._exports['canonical_abi_drop_rb-iseq']);
        this._registry1 = new FinalizationRegistry(this._exports['canonical_abi_drop_rb-abi-value']);
    }
    rubyShowVersion() {
        this._exports['ruby-show-version']();
    }
    rubyInit() {
        this._exports['ruby-init']();
    }
    rubySysinit(arg0) {
        const memory = this._exports.memory;
        const realloc = this._exports["canonical_abi_realloc"];
        const vec1 = arg0;
        const len1 = vec1.length;
        const result1 = realloc(0, 0, 4, len1 * 8);
        for(let i = 0; i < vec1.length; i++){
            const e = vec1[i];
            const base = result1 + i * 8;
            const ptr0 = utf8_encode(e, realloc, memory);
            const len0 = UTF8_ENCODED_LEN;
            data_view(memory).setInt32(base + 4, len0, true);
            data_view(memory).setInt32(base + 0, ptr0, true);
        }
        this._exports['ruby-sysinit'](result1, len1);
    }
    rubyOptions(arg0) {
        const memory = this._exports.memory;
        const realloc = this._exports["canonical_abi_realloc"];
        const vec1 = arg0;
        const len1 = vec1.length;
        const result1 = realloc(0, 0, 4, len1 * 8);
        for(let i = 0; i < vec1.length; i++){
            const e = vec1[i];
            const base = result1 + i * 8;
            const ptr0 = utf8_encode(e, realloc, memory);
            const len0 = UTF8_ENCODED_LEN;
            data_view(memory).setInt32(base + 4, len0, true);
            data_view(memory).setInt32(base + 0, ptr0, true);
        }
        const ret = this._exports['ruby-options'](result1, len1);
        return this._resource0_slab.remove(ret);
    }
    rubyScript(arg0) {
        const memory = this._exports.memory;
        const realloc = this._exports["canonical_abi_realloc"];
        const ptr0 = utf8_encode(arg0, realloc, memory);
        const len0 = UTF8_ENCODED_LEN;
        this._exports['ruby-script'](ptr0, len0);
    }
    rubyInitLoadpath() {
        this._exports['ruby-init-loadpath']();
    }
    rbEvalStringProtect(arg0) {
        const memory = this._exports.memory;
        const realloc = this._exports["canonical_abi_realloc"];
        const ptr0 = utf8_encode(arg0, realloc, memory);
        const len0 = UTF8_ENCODED_LEN;
        const ret = this._exports['rb-eval-string-protect'](ptr0, len0);
        return [
            this._resource1_slab.remove(data_view(memory).getInt32(ret + 0, true)),
            data_view(memory).getInt32(ret + 8, true)
        ];
    }
    rbFuncallvProtect(arg0, arg1, arg2) {
        const memory = this._exports.memory;
        const realloc = this._exports["canonical_abi_realloc"];
        const obj0 = arg0;
        if (!(obj0 instanceof RbAbiValue)) throw new TypeError('expected instance of RbAbiValue');
        const vec2 = arg2;
        const len2 = vec2.length;
        const result2 = realloc(0, 0, 4, len2 * 4);
        for(let i = 0; i < vec2.length; i++){
            const e = vec2[i];
            const base = result2 + i * 4;
            const obj1 = e;
            if (!(obj1 instanceof RbAbiValue)) throw new TypeError('expected instance of RbAbiValue');
            data_view(memory).setInt32(base + 0, this._resource1_slab.insert(obj1.clone()), true);
        }
        const ret = this._exports['rb-funcallv-protect'](this._resource1_slab.insert(obj0.clone()), clamp_host(arg1, 0, 4294967295), result2, len2);
        return [
            this._resource1_slab.remove(data_view(memory).getInt32(ret + 0, true)),
            data_view(memory).getInt32(ret + 8, true)
        ];
    }
    rbIntern(arg0) {
        const memory = this._exports.memory;
        const realloc = this._exports["canonical_abi_realloc"];
        const ptr0 = utf8_encode(arg0, realloc, memory);
        const len0 = UTF8_ENCODED_LEN;
        const ret = this._exports['rb-intern'](ptr0, len0);
        return ret >>> 0;
    }
    rbErrinfo() {
        const ret = this._exports['rb-errinfo']();
        return this._resource1_slab.remove(ret);
    }
    rstringPtr(arg0) {
        const memory = this._exports.memory;
        const free = this._exports["canonical_abi_free"];
        const obj0 = arg0;
        if (!(obj0 instanceof RbAbiValue)) throw new TypeError('expected instance of RbAbiValue');
        const ret = this._exports['rstring-ptr'](this._resource1_slab.insert(obj0.clone()));
        const ptr1 = data_view(memory).getInt32(ret + 0, true);
        const len1 = data_view(memory).getInt32(ret + 8, true);
        const list1 = UTF8_DECODER.decode(new Uint8Array(memory.buffer, ptr1, len1));
        free(ptr1, len1, 1);
        return list1;
    }
}
class RbIseq {
    constructor(wasm_val, obj){
        this._wasm_val = wasm_val;
        this._obj = obj;
        this._refcnt = 1;
        obj._registry0.register(this, wasm_val, this);
    }
    clone() {
        this._refcnt += 1;
        return this;
    }
    drop() {
        this._refcnt -= 1;
        if (this._refcnt !== 0) return;
        this._obj._registry0.unregister(this);
        const dtor = this._obj._exports['canonical_abi_drop_rb-iseq'];
        const wasm_val = this._wasm_val;
        delete this._obj;
        delete this._refcnt;
        delete this._wasm_val;
        dtor(wasm_val);
    }
}
class RbAbiValue {
    constructor(wasm_val, obj){
        this._wasm_val = wasm_val;
        this._obj = obj;
        this._refcnt = 1;
        obj._registry1.register(this, wasm_val, this);
    }
    clone() {
        this._refcnt += 1;
        return this;
    }
    drop() {
        this._refcnt -= 1;
        if (this._refcnt !== 0) return;
        this._obj._registry1.unregister(this);
        const dtor = this._obj._exports['canonical_abi_drop_rb-abi-value'];
        const wasm_val = this._wasm_val;
        delete this._obj;
        delete this._refcnt;
        delete this._wasm_val;
        dtor(wasm_val);
    }
}
function addRbJsAbiHostToImports(imports, obj, get_export) {
    if (!("rb-js-abi-host" in imports)) imports["rb-js-abi-host"] = {
    };
    imports["rb-js-abi-host"]["eval-js"] = function(arg0, arg1) {
        const memory = get_export("memory");
        const ptr0 = arg0;
        const len0 = arg1;
        const ret = obj.evalJs(UTF8_DECODER.decode(new Uint8Array(memory.buffer, ptr0, len0)));
        return resources0.insert(ret);
    };
    imports["rb-js-abi-host"]["is-js"] = function(arg0) {
        const ret = obj.isJs(resources0.get(arg0));
        const variant0 = ret;
        let variant0_0;
        switch(variant0){
            case false:
                variant0_0 = 0;
                break;
            case true:
                variant0_0 = 1;
                break;
            default:
                throw new RangeError("invalid variant specified for bool");
        }
        return variant0_0;
    };
    imports["rb-js-abi-host"]["instance-of"] = function(arg0, arg1) {
        const ret = obj.instanceOf(resources0.get(arg0), resources0.get(arg1));
        const variant0 = ret;
        let variant0_0;
        switch(variant0){
            case false:
                variant0_0 = 0;
                break;
            case true:
                variant0_0 = 1;
                break;
            default:
                throw new RangeError("invalid variant specified for bool");
        }
        return variant0_0;
    };
    imports["rb-js-abi-host"]["global-this"] = function() {
        const ret = obj.globalThis();
        return resources0.insert(ret);
    };
    imports["rb-js-abi-host"]["int-to-js-number"] = function(arg0) {
        const ret = obj.intToJsNumber(arg0);
        return resources0.insert(ret);
    };
    imports["rb-js-abi-host"]["string-to-js-string"] = function(arg0, arg1) {
        const memory = get_export("memory");
        const ptr0 = arg0;
        const len0 = arg1;
        const ret = obj.stringToJsString(UTF8_DECODER.decode(new Uint8Array(memory.buffer, ptr0, len0)));
        return resources0.insert(ret);
    };
    imports["rb-js-abi-host"]["bool-to-js-bool"] = function(arg0) {
        let variant0;
        switch(arg0){
            case 0:
                variant0 = false;
                break;
            case 1:
                variant0 = true;
                break;
            default:
                throw new RangeError("invalid variant discriminant for bool");
        }
        const ret = obj.boolToJsBool(variant0);
        return resources0.insert(ret);
    };
    imports["rb-js-abi-host"]["js-value-to-string"] = function(arg0, arg1) {
        const memory = get_export("memory");
        const realloc = get_export("canonical_abi_realloc");
        const ret = obj.jsValueToString(resources0.get(arg0));
        const ptr0 = utf8_encode(ret, realloc, memory);
        const len0 = UTF8_ENCODED_LEN;
        data_view(memory).setInt32(arg1 + 8, len0, true);
        data_view(memory).setInt32(arg1 + 0, ptr0, true);
    };
    imports["rb-js-abi-host"]["take-js-value"] = function(arg0) {
        obj.takeJsValue(resources0.get(arg0));
    };
    imports["rb-js-abi-host"]["reflect-apply"] = function(arg0, arg1, arg2, arg3) {
        const memory = get_export("memory");
        const len0 = arg3;
        const base0 = arg2;
        const result0 = [];
        for(let i = 0; i < len0; i++){
            const base = base0 + i * 4;
            result0.push(resources0.get(data_view(memory).getInt32(base + 0, true)));
        }
        const ret = obj.reflectApply(resources0.get(arg0), resources0.get(arg1), result0);
        return resources0.insert(ret);
    };
    imports["rb-js-abi-host"]["reflect-construct"] = function(arg0, arg1, arg2) {
        const memory = get_export("memory");
        const len0 = arg2;
        const base0 = arg1;
        const result0 = [];
        for(let i = 0; i < len0; i++){
            const base = base0 + i * 4;
            result0.push(resources0.get(data_view(memory).getInt32(base + 0, true)));
        }
        const ret = obj.reflectConstruct(resources0.get(arg0), result0);
        return resources0.insert(ret);
    };
    imports["rb-js-abi-host"]["reflect-delete-property"] = function(arg0, arg1, arg2) {
        const memory = get_export("memory");
        const ptr0 = arg1;
        const len0 = arg2;
        const ret = obj.reflectDeleteProperty(resources0.get(arg0), UTF8_DECODER.decode(new Uint8Array(memory.buffer, ptr0, len0)));
        const variant1 = ret;
        let variant1_0;
        switch(variant1){
            case false:
                variant1_0 = 0;
                break;
            case true:
                variant1_0 = 1;
                break;
            default:
                throw new RangeError("invalid variant specified for bool");
        }
        return variant1_0;
    };
    imports["rb-js-abi-host"]["reflect-get"] = function(arg0, arg1, arg2) {
        const memory = get_export("memory");
        const ptr0 = arg1;
        const len0 = arg2;
        const ret = obj.reflectGet(resources0.get(arg0), UTF8_DECODER.decode(new Uint8Array(memory.buffer, ptr0, len0)));
        return resources0.insert(ret);
    };
    imports["rb-js-abi-host"]["reflect-get-own-property-descriptor"] = function(arg0, arg1, arg2) {
        const memory = get_export("memory");
        const ptr0 = arg1;
        const len0 = arg2;
        const ret = obj.reflectGetOwnPropertyDescriptor(resources0.get(arg0), UTF8_DECODER.decode(new Uint8Array(memory.buffer, ptr0, len0)));
        return resources0.insert(ret);
    };
    imports["rb-js-abi-host"]["reflect-get-prototype-of"] = function(arg0) {
        const ret = obj.reflectGetPrototypeOf(resources0.get(arg0));
        return resources0.insert(ret);
    };
    imports["rb-js-abi-host"]["reflect-has"] = function(arg0, arg1, arg2) {
        const memory = get_export("memory");
        const ptr0 = arg1;
        const len0 = arg2;
        const ret = obj.reflectHas(resources0.get(arg0), UTF8_DECODER.decode(new Uint8Array(memory.buffer, ptr0, len0)));
        const variant1 = ret;
        let variant1_0;
        switch(variant1){
            case false:
                variant1_0 = 0;
                break;
            case true:
                variant1_0 = 1;
                break;
            default:
                throw new RangeError("invalid variant specified for bool");
        }
        return variant1_0;
    };
    imports["rb-js-abi-host"]["reflect-is-extensible"] = function(arg0) {
        const ret = obj.reflectIsExtensible(resources0.get(arg0));
        const variant0 = ret;
        let variant0_0;
        switch(variant0){
            case false:
                variant0_0 = 0;
                break;
            case true:
                variant0_0 = 1;
                break;
            default:
                throw new RangeError("invalid variant specified for bool");
        }
        return variant0_0;
    };
    imports["rb-js-abi-host"]["reflect-own-keys"] = function(arg0, arg1) {
        const memory = get_export("memory");
        const realloc = get_export("canonical_abi_realloc");
        const ret = obj.reflectOwnKeys(resources0.get(arg0));
        const vec0 = ret;
        const len0 = vec0.length;
        const result0 = realloc(0, 0, 4, len0 * 4);
        for(let i = 0; i < vec0.length; i++){
            const e = vec0[i];
            const base = result0 + i * 4;
            data_view(memory).setInt32(base + 0, resources0.insert(e), true);
        }
        data_view(memory).setInt32(arg1 + 8, len0, true);
        data_view(memory).setInt32(arg1 + 0, result0, true);
    };
    imports["rb-js-abi-host"]["reflect-prevent-extensions"] = function(arg0) {
        const ret = obj.reflectPreventExtensions(resources0.get(arg0));
        const variant0 = ret;
        let variant0_0;
        switch(variant0){
            case false:
                variant0_0 = 0;
                break;
            case true:
                variant0_0 = 1;
                break;
            default:
                throw new RangeError("invalid variant specified for bool");
        }
        return variant0_0;
    };
    imports["rb-js-abi-host"]["reflect-set"] = function(arg0, arg1, arg2, arg3) {
        const memory = get_export("memory");
        const ptr0 = arg1;
        const len0 = arg2;
        const ret = obj.reflectSet(resources0.get(arg0), UTF8_DECODER.decode(new Uint8Array(memory.buffer, ptr0, len0)), resources0.get(arg3));
        const variant1 = ret;
        let variant1_0;
        switch(variant1){
            case false:
                variant1_0 = 0;
                break;
            case true:
                variant1_0 = 1;
                break;
            default:
                throw new RangeError("invalid variant specified for bool");
        }
        return variant1_0;
    };
    imports["rb-js-abi-host"]["reflect-set-prototype-of"] = function(arg0, arg1) {
        const ret = obj.reflectSetPrototypeOf(resources0.get(arg0), resources0.get(arg1));
        const variant0 = ret;
        let variant0_0;
        switch(variant0){
            case false:
                variant0_0 = 0;
                break;
            case true:
                variant0_0 = 1;
                break;
            default:
                throw new RangeError("invalid variant specified for bool");
        }
        return variant0_0;
    };
    if (!("canonical_abi" in imports)) imports["canonical_abi"] = {
    };
    const resources0 = new Slab();
    imports.canonical_abi["resource_drop_js-abi-value"] = (i)=>{
        const val = resources0.remove(i);
        if (obj.dropJsAbiValue) obj.dropJsAbiValue(val);
    };
}
/**
 * A Ruby VM instance
 *
 * @example
 *
 * const wasi = new WASI();
 * const vm = new RubyVM();
 * const imports = {
 *   wasi_snapshot_preview1: wasi.wasiImport,
 * };
 *
 * vm.addToImports(imports);
 *
 * const instance = await WebAssembly.instantiate(rubyModule, imports);
 * await vm.setInstance(instance);
 * wasi.initialize(instance);
 *
 */ class RubyVM {
    constructor(){
        this.instance = null;
        this.guest = new RbAbiGuest();
        this.exporter = new JsValueExporter();
    }
    /**
     * Initialize the Ruby VM with the given command line arguments
     * @param args The command line arguments to pass to Ruby. Must be
     * an array of strings starting with the Ruby program name.
     */ initialize(args = [
        "ruby.wasm",
        "--disable-gems",
        "-e_=0"
    ]) {
        const c_args = args.map((arg)=>arg + "\0"
        );
        this.guest.rubyInit();
        this.guest.rubySysinit(c_args);
        this.guest.rubyOptions(c_args);
    }
    /**
     * Set a given instance to interact JavaScript and Ruby's
     * WebAssembly instance. This method must be called before calling
     * Ruby API.
     *
     * @param instance The WebAssembly instance to interact with. Must
     * be instantiated from a Ruby built with JS extension, and built
     * with Reactor ABI instead of command line.
     */ async setInstance(instance) {
        this.instance = instance;
        await this.guest.instantiate(instance);
    }
    /**
     * Add intrinsic import entries, which is necessary to interact JavaScript
     * and Ruby's WebAssembly instance.
     * @param imports The import object to add to the WebAssembly instance
     */ addToImports(imports) {
        this.guest.addToImports(imports);
        addRbJsAbiHostToImports(imports, {
            evalJs: (code)=>{
                return Function(code)();
            },
            isJs: (value)=>{
                return value == null || !(value instanceof RbValue);
            },
            globalThis: ()=>{
                if (typeof globalThis !== "undefined") return globalThis;
                else if (typeof global !== "undefined") return global;
                else if (typeof window !== "undefined") return window;
                throw new Error("unable to locate global object");
            },
            intToJsNumber: (value)=>{
                return value;
            },
            stringToJsString: (value)=>{
                return value;
            },
            boolToJsBool: (value)=>{
                return value;
            },
            jsValueToString: (value)=>{
                return value.toString();
            },
            takeJsValue: (value)=>{
                this.exporter.takeJsValue(value);
            },
            instanceOf: (value, klass)=>{
                if (typeof klass === "function") return value instanceof klass;
                else return false;
            },
            reflectApply: function(target, thisArgument, args) {
                return Reflect.apply(target, thisArgument, args);
            },
            reflectConstruct: function(target, args) {
                throw new Error("Function not implemented.");
            },
            reflectDeleteProperty: function(target, propertyKey) {
                throw new Error("Function not implemented.");
            },
            reflectGet: function(target, propertyKey) {
                return Reflect.get(target, propertyKey);
            },
            reflectGetOwnPropertyDescriptor: function(target, propertyKey) {
                throw new Error("Function not implemented.");
            },
            reflectGetPrototypeOf: function(target) {
                throw new Error("Function not implemented.");
            },
            reflectHas: function(target, propertyKey) {
                throw new Error("Function not implemented.");
            },
            reflectIsExtensible: function(target) {
                throw new Error("Function not implemented.");
            },
            reflectOwnKeys: function(target) {
                throw new Error("Function not implemented.");
            },
            reflectPreventExtensions: function(target) {
                throw new Error("Function not implemented.");
            },
            reflectSet: function(target, propertyKey, value) {
                return Reflect.set(target, propertyKey, value);
            },
            reflectSetPrototypeOf: function(target, prototype) {
                throw new Error("Function not implemented.");
            }
        }, (name)=>{
            return this.instance.exports[name];
        });
    }
    /**
     * Print the Ruby version to stdout
     */ printVersion() {
        this.guest.rubyShowVersion();
    }
    /**
     * Runs a string of Ruby code from JavaScript
     * @param code The Ruby code to run
     * @returns the result of the last expression
     *
     * @example
     * vm.eval("puts 'hello world'");
     * const result = vm.eval("1 + 2");
     * console.log(result.toString()); // 3
     *
     */ eval(code) {
        return evalRbCode(this, this.exporter, code);
    }
}
class JsValueExporter {
    constructor(){
        this._takenJsValues = null;
    }
    takeJsValue(value) {
        this._takenJsValues = value;
    }
    exportJsValue() {
        return this._takenJsValues;
    }
}
/**
 * A RbValue is an object that represents a value in Ruby
 */ class RbValue {
    constructor(inner, vm, exporter){
        this.inner = inner;
        this.vm = vm;
        this.exporter = exporter;
    }
    /**
     * Call a given method with given arguments
     *
     * @param callee name of the Ruby method to call
     * @param args arguments to pass to the method. Must be an array of RbValue
     *
     * @example
     * const ary = vm.eval("[1, 2, 3]");
     * ary.call("push", 4);
     * console.log(ary.call("sample").toString());
     *
     */ call(callee, ...args) {
        const innerArgs = args.map((arg)=>arg.inner
        );
        return new RbValue(callRbMethod(this.vm, this.exporter, this.inner, callee, innerArgs), this.vm, this.exporter);
    }
    /**
     * @see {@link https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive}
     */ [Symbol.toPrimitive](hint) {
        if (hint === "string" || hint === "default") return this.toString();
        else if (hint === "number") return null;
        return null;
    }
    /**
     * Returns a string representation of the value by calling `to_s`
     */ toString() {
        const rbString = callRbMethod(this.vm, this.exporter, this.inner, "to_s", []);
        return this.vm.guest.rstringPtr(rbString);
    }
    /**
     * Returns a JavaScript object representation of the value
     * by calling `to_js`.
     *
     * Returns null if the value is not convertible to a JavaScript object.
     */ toJS() {
        const JS = this.vm.eval("JS");
        const jsValue = JS.call("try_convert", this);
        if (jsValue.call("nil?").toString() === "true") return null;
        jsValue.call("__export_to_js");
        return this.exporter.exportJsValue();
    }
}
var ruby_tag_type;
(function(ruby_tag_type1) {
    ruby_tag_type1[ruby_tag_type1["None"] = 0] = "None";
    ruby_tag_type1[ruby_tag_type1["Return"] = 1] = "Return";
    ruby_tag_type1[ruby_tag_type1["Break"] = 2] = "Break";
    ruby_tag_type1[ruby_tag_type1["Next"] = 3] = "Next";
    ruby_tag_type1[ruby_tag_type1["Retry"] = 4] = "Retry";
    ruby_tag_type1[ruby_tag_type1["Redo"] = 5] = "Redo";
    ruby_tag_type1[ruby_tag_type1["Raise"] = 6] = "Raise";
    ruby_tag_type1[ruby_tag_type1["Throw"] = 7] = "Throw";
    ruby_tag_type1[ruby_tag_type1["Fatal"] = 8] = "Fatal";
    ruby_tag_type1[ruby_tag_type1["Mask"] = 15] = "Mask";
})(ruby_tag_type || (ruby_tag_type = {
}));
const formatException = (klass, message, backtrace)=>{
    return `${backtrace[0]}: ${message} (${klass})\n${backtrace[1]}`;
};
const checkStatusTag = (rawTag, vm, exporter)=>{
    switch(rawTag & ruby_tag_type.Mask){
        case ruby_tag_type.None:
            break;
        case ruby_tag_type.Return:
            throw new RbError("unexpected return");
        case ruby_tag_type.Next:
            throw new RbError("unexpected next");
        case ruby_tag_type.Break:
            throw new RbError("unexpected break");
        case ruby_tag_type.Redo:
            throw new RbError("unexpected redo");
        case ruby_tag_type.Retry:
            throw new RbError("retry outside of rescue clause");
        case ruby_tag_type.Throw:
            throw new RbError("unexpected throw");
        case ruby_tag_type.Raise:
        case ruby_tag_type.Fatal:
            const error = new RbValue(vm.guest.rbErrinfo(), vm, exporter);
            const newLine = evalRbCode(vm, exporter, `"\n"`);
            const backtrace = error.call("backtrace");
            const firstLine = backtrace.call("at", evalRbCode(vm, exporter, "0"));
            const restLines = backtrace.call("drop", evalRbCode(vm, exporter, "1")).call("join", newLine);
            throw new RbError(formatException(error.call("class").toString(), error.toString(), [
                firstLine.toString(),
                restLines.toString(), 
            ]));
        default:
            throw new RbError(`unknown error tag: ${rawTag}`);
    }
};
const callRbMethod = (vm, exporter, recv, callee, args)=>{
    const mid = vm.guest.rbIntern(callee + "\0");
    const [value, status] = vm.guest.rbFuncallvProtect(recv, mid, args);
    checkStatusTag(status, vm, exporter);
    return value;
};
const evalRbCode = (vm, exporter, code)=>{
    const [value, status] = vm.guest.rbEvalStringProtect(code + "\0");
    checkStatusTag(status, vm, exporter);
    return new RbValue(value, vm, exporter);
};
/**
 * Error class thrown by Ruby execution
 */ class RbError extends Error {
    constructor(message){
        super(message);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"i1BLo":[function(require,module,exports) {
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
var process = require("process");
function assertPath(path) {
    if (typeof path !== 'string') throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
}
// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
    var res = '';
    var lastSegmentLength = 0;
    var lastSlash = -1;
    var dots = 0;
    var code;
    for(var i = 0; i <= path.length; ++i){
        if (i < path.length) code = path.charCodeAt(i);
        else if (code === 47 /*/*/ ) break;
        else code = 47 /*/*/ ;
        if (code === 47 /*/*/ ) {
            if (lastSlash === i - 1 || dots === 1) ;
            else if (lastSlash !== i - 1 && dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/  || res.charCodeAt(res.length - 2) !== 46 /*.*/ ) {
                    if (res.length > 2) {
                        var lastSlashIndex = res.lastIndexOf('/');
                        if (lastSlashIndex !== res.length - 1) {
                            if (lastSlashIndex === -1) {
                                res = '';
                                lastSegmentLength = 0;
                            } else {
                                res = res.slice(0, lastSlashIndex);
                                lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
                            }
                            lastSlash = i;
                            dots = 0;
                            continue;
                        }
                    } else if (res.length === 2 || res.length === 1) {
                        res = '';
                        lastSegmentLength = 0;
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    if (res.length > 0) res += '/..';
                    else res = '..';
                    lastSegmentLength = 2;
                }
            } else {
                if (res.length > 0) res += '/' + path.slice(lastSlash + 1, i);
                else res = path.slice(lastSlash + 1, i);
                lastSegmentLength = i - lastSlash - 1;
            }
            lastSlash = i;
            dots = 0;
        } else if (code === 46 /*.*/  && dots !== -1) ++dots;
        else dots = -1;
    }
    return res;
}
function _format(sep, pathObject) {
    var dir = pathObject.dir || pathObject.root;
    var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');
    if (!dir) return base;
    if (dir === pathObject.root) return dir + base;
    return dir + sep + base;
}
var posix = {
    // path.resolve([from ...], to)
    resolve: function resolve() {
        var resolvedPath = '';
        var resolvedAbsolute = false;
        var cwd;
        for(var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--){
            var path;
            if (i >= 0) path = arguments[i];
            else {
                if (cwd === undefined) cwd = process.cwd();
                path = cwd;
            }
            assertPath(path);
            // Skip empty entries
            if (path.length === 0) continue;
            resolvedPath = path + '/' + resolvedPath;
            resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        // Normalize the path
        resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
        if (resolvedAbsolute) {
            if (resolvedPath.length > 0) return '/' + resolvedPath;
            else return '/';
        } else if (resolvedPath.length > 0) return resolvedPath;
        else return '.';
    },
    normalize: function normalize(path) {
        assertPath(path);
        if (path.length === 0) return '.';
        var isAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/ ;
        // Normalize the path
        path = normalizeStringPosix(path, !isAbsolute);
        if (path.length === 0 && !isAbsolute) path = '.';
        if (path.length > 0 && trailingSeparator) path += '/';
        if (isAbsolute) return '/' + path;
        return path;
    },
    isAbsolute: function isAbsolute(path) {
        assertPath(path);
        return path.length > 0 && path.charCodeAt(0) === 47 /*/*/ ;
    },
    join: function join() {
        if (arguments.length === 0) return '.';
        var joined;
        for(var i = 0; i < arguments.length; ++i){
            var arg = arguments[i];
            assertPath(arg);
            if (arg.length > 0) {
                if (joined === undefined) joined = arg;
                else joined += '/' + arg;
            }
        }
        if (joined === undefined) return '.';
        return posix.normalize(joined);
    },
    relative: function relative(from, to) {
        assertPath(from);
        assertPath(to);
        if (from === to) return '';
        from = posix.resolve(from);
        to = posix.resolve(to);
        if (from === to) return '';
        // Trim any leading backslashes
        var fromStart = 1;
        for(; fromStart < from.length; ++fromStart){
            if (from.charCodeAt(fromStart) !== 47 /*/*/ ) break;
        }
        var fromEnd = from.length;
        var fromLen = fromEnd - fromStart;
        // Trim any leading backslashes
        var toStart = 1;
        for(; toStart < to.length; ++toStart){
            if (to.charCodeAt(toStart) !== 47 /*/*/ ) break;
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;
        // Compare paths to find the longest common path from root
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for(; i <= length; ++i){
            if (i === length) {
                if (toLen > length) {
                    if (to.charCodeAt(toStart + i) === 47 /*/*/ ) // We get here if `from` is the exact base path for `to`.
                    // For example: from='/foo/bar'; to='/foo/bar/baz'
                    return to.slice(toStart + i + 1);
                    else if (i === 0) // We get here if `from` is the root
                    // For example: from='/'; to='/foo'
                    return to.slice(toStart + i);
                } else if (fromLen > length) {
                    if (from.charCodeAt(fromStart + i) === 47 /*/*/ ) // We get here if `to` is the exact base path for `from`.
                    // For example: from='/foo/bar/baz'; to='/foo/bar'
                    lastCommonSep = i;
                    else if (i === 0) // We get here if `to` is the root.
                    // For example: from='/foo'; to='/'
                    lastCommonSep = 0;
                }
                break;
            }
            var fromCode = from.charCodeAt(fromStart + i);
            var toCode = to.charCodeAt(toStart + i);
            if (fromCode !== toCode) break;
            else if (fromCode === 47 /*/*/ ) lastCommonSep = i;
        }
        var out = '';
        // Generate the relative path based on the path difference between `to`
        // and `from`
        for(i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i)if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/ ) {
            if (out.length === 0) out += '..';
            else out += '/..';
        }
        // Lastly, append the rest of the destination (`to`) path that comes after
        // the common path parts
        if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
        else {
            toStart += lastCommonSep;
            if (to.charCodeAt(toStart) === 47 /*/*/ ) ++toStart;
            return to.slice(toStart);
        }
    },
    _makeLong: function _makeLong(path) {
        return path;
    },
    dirname: function dirname(path) {
        assertPath(path);
        if (path.length === 0) return '.';
        var code = path.charCodeAt(0);
        var hasRoot = code === 47 /*/*/ ;
        var end = -1;
        var matchedSlash = true;
        for(var i = path.length - 1; i >= 1; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            } else // We saw the first non-path separator
            matchedSlash = false;
        }
        if (end === -1) return hasRoot ? '/' : '.';
        if (hasRoot && end === 1) return '//';
        return path.slice(0, end);
    },
    basename: function basename(path, ext) {
        if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
        assertPath(path);
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;
        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
            if (ext.length === path.length && ext === path) return '';
            var extIdx = ext.length - 1;
            var firstNonSlashEnd = -1;
            for(i = path.length - 1; i >= 0; --i){
                var code = path.charCodeAt(i);
                if (code === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else {
                    if (firstNonSlashEnd === -1) {
                        // We saw the first non-path separator, remember this index in case
                        // we need it if the extension ends up not matching
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        // Try to match the explicit extension
                        if (code === ext.charCodeAt(extIdx)) {
                            if (--extIdx === -1) // We matched the extension, so mark this as the end of our path
                            // component
                            end = i;
                        } else {
                            // Extension does not match, so our result is the entire path
                            // component
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end) end = firstNonSlashEnd;
            else if (end === -1) end = path.length;
            return path.slice(start, end);
        } else {
            for(i = path.length - 1; i >= 0; --i){
                if (path.charCodeAt(i) === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else if (end === -1) {
                    // We saw the first non-path separator, mark this as the end of our
                    // path component
                    matchedSlash = false;
                    end = i + 1;
                }
            }
            if (end === -1) return '';
            return path.slice(start, end);
        }
    },
    extname: function extname(path) {
        assertPath(path);
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        for(var i = path.length - 1; i >= 0; --i){
            var code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) return '';
        return path.slice(startDot, end);
    },
    format: function format(pathObject) {
        if (pathObject === null || typeof pathObject !== 'object') throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
        return _format('/', pathObject);
    },
    parse: function parse(path) {
        assertPath(path);
        var ret = {
            root: '',
            dir: '',
            base: '',
            ext: '',
            name: ''
        };
        if (path.length === 0) return ret;
        var code = path.charCodeAt(0);
        var isAbsolute = code === 47 /*/*/ ;
        var start;
        if (isAbsolute) {
            ret.root = '/';
            start = 1;
        } else start = 0;
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i = path.length - 1;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        // Get non-dir info
        for(; i >= start; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            if (end !== -1) {
                if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);
                else ret.base = ret.name = path.slice(startPart, end);
            }
        } else {
            if (startPart === 0 && isAbsolute) {
                ret.name = path.slice(1, startDot);
                ret.base = path.slice(1, end);
            } else {
                ret.name = path.slice(startPart, startDot);
                ret.base = path.slice(startPart, end);
            }
            ret.ext = path.slice(startDot, end);
        }
        if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
        else if (isAbsolute) ret.dir = '/';
        return ret;
    },
    sep: '/',
    delimiter: ':',
    win32: null,
    posix: null
};
posix.posix = posix;
module.exports = posix;

},{"process":"kKEHw"}],"kKEHw":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {
};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {
};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {
};
function noop() {
}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}]},["Q5Cvw","hI9f5"], "hI9f5", "parcelRequire8e51")

//# sourceMappingURL=optcarrot.worker.0de869fa.js.map
