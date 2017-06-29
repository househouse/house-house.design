/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/src/assets/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_js_scripts__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_js_serviceworker_serviceworker__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_js_serviceworker_serviceworker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_js_serviceworker_serviceworker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_js_serviceworker_serviceworker_cache_polyfill__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_js_serviceworker_serviceworker_cache_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_js_serviceworker_serviceworker_cache_polyfill__);




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal__ = __webpack_require__(2);
/* jshint esversion: 6 */
// Make eslint shutup about undef global vars
/* global window, document */



// Init new Modals

const statement = new __WEBPACK_IMPORTED_MODULE_0__modal__["a" /* default */]('statement');
// const process = new Modal('process');

// Lazy Load
const sections = document.getElementsByClassName('c-card__image');
const cardImage = document.getElementsByClassName('js-card-visible');

window.onscroll = () => {
  // Don't run the rest of the code if every section is already visible
  if (document.querySelectorAll('.c-card__image:not(.js-card-visible)').length === 0) return;

  // Run the check for every section in sections; add the visibile class
  for (let i = 0; i < sections.length; i += 1) {
    if (sections[i].getBoundingClientRect().top <= window.innerHeight * 0.75 && sections[i].getBoundingClientRect().top > 0) {
      sections[i].classList.add('js-card-visible');
    }
  }

  // If a card image is visible (above), swap out the `data-` attribute
  for (let i = 0; i < cardImage.length; i += 1) {
    if (cardImage[i].getAttribute('data-style')) {
      cardImage[i].setAttribute('style', cardImage[i].getAttribute('data-style'));
      cardImage[i].removeAttribute('data-style');
    }
  }
};

// Google Analytics
/* eslint-disable */
!function (a, b, c, d, e, f, g) {
  a.GoogleAnalyticsObject = e, a[e] = a[e] || function () {
    (a[e].q = a[e].q || []).push(arguments);
  }, a[e].l = 1 * new Date(), f = b.createElement(c), g = b.getElementsByTagName(c)[0], f.async = 1, f.src = d, g.parentNode.insertBefore(f, g);
}(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga'), ga('create', 'UA-87162611-1', 'auto'), ga('send', 'pageview');
/* eslint-enable */

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Modal {
  /**
    * Create a new Modal instance
    *
    * @param {string} selector
    */

  constructor(selector) {
    this.self = document.querySelector(`[data-modal="${selector}"]`);
    this.content = document.querySelector(`[data-modal-inner="${selector}"]`);
    this.triggers = document.querySelectorAll(`[data-modal-trigger="${selector}"]`);
    this.isOpen = false;
    this.openTimer = 250;
    this.openDelayTimer = null;

    this.init();
  }

  /**
    * Initialize the modal
    */

  init() {
    for (const trigger of this.triggers) {
      trigger.addEventListener('click', e => {
        if (this.isOpen) {
          e.preventDefault();
          this.close();
        } else {
          e.preventDefault();
          this.open();
        }
      });
    }
  }

  /**
    * Open the modal
    */

  open() {
    // Only open the modal if delay timer has expired
    if (this.openDelayTimer === null) {
      this.isOpening = true;
      this.self.style.display = 'block';

      this.openDelayTimer = setTimeout(() => {
        clearTimeout(this.openDelayTimer);
        this.openDelayTimer = null;
        this.isOpening = false;
        this.isOpen = true;
      }, this.openTimer);
    }
  }

  /**
    * Close the modal
    */

  close() {
    // Close modal if delay timer is expired
    if (this.openDelayTimer === null) {
      this.isClosing = true;
      this.content.style.animation = 'slide-out 0.5s forwards';
      this.self.style.opacity = 0;

      this.openDelayTimer = setTimeout(() => {
        clearTimeout(this.openDelayTimer);
        this.openDelayTimer = null;
        this.isClosing = false;
        this.isOpen = false;
        this.self.style.display = 'none';
        this.self.style.opacity = 1;
        this.content.style.animation = '';
      }, this.openTimer);
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Modal);

const statement = new Modal('statement');
const process = new Modal('process');

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// Chrome's currently missing some useful cache methods; this polyfill adds 'em.


// Here comes the install event! This only happens once, when the browser sees
// this version of the ServiceWorker for the first time.
self.addEventListener('install', function (event) {

    // Only one version of your app can run at once. That's often useful, but we
    // don't need it right now. `self.skipWaiting` called within a ServiceWorker
    // means it won't wait for tabs to stop using the old version before it
    // takes over.
    if (self.skipWaiting) {
        self.skipWaiting();
    }

    // We pass a promise to event.waitUntil to signal how long install takes,
    // and if it failed
    event.waitUntil(

    // We open a cache…
    caches.open('simple-sw-v5-17-06-29a').then(function (cache) {

        // And add resources to it
        return cache.addAll(['/', '/assets/js/logging.js', '/assets/css/main.css', '/assets/video/house-house--glitch.mp4', '/assets/img/glitch.jpg', '/assets/img/housecss-logo.png', '/assets/img/project--kost.jpg', '/assets/img/project--bitchpop.gif', '/assets/img/project--stanford.jpg', '/assets/img/project--askwill.gif', '/assets/img/project--blancink.jpg', '/assets/img/project--lawnpartyfilms.jpg', '/assets/img/portrait--ben-groulx--animated.gif', '/assets/img/portrait--sean-durfee--animated.gif', '/assets/img/portrait--caitlin-farquharson--animated.gif', '/assets/img/parrot.gif']);
    }));
});

// The fetch event happens for the page request with the ServiceWorker's scope,
// and any request made within that page
self.addEventListener('fetch', function (event) {

    // Calling event.respondWith means we're in charge of providing the
    // response. We pass in a promise that resolves with a response object
    event.respondWith(

    // First we look for something in the caches that matches the request
    caches.match(event.request).then(function (response) {

        // If we get something, we return it, otherwise it's null, and we'll
        // pass the request to fetch, which will use the network.
        return response || fetch(event.request);
    }));
});

self.addEventListener('activate', function (event) {
    var cacheWhiteList = ['simple-sw-v5-17-06-29a'];

    event.waitUntil(caches.keys().then(function (keyList) {
        return Promise.all(keyList.map(function (key) {
            if (cacheWhiteList.indexOf(key) === -1) {
                return caches.delete(key);
            }
        }));
    }));
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

if (!Cache.prototype.add) {
  Cache.prototype.add = function add(request) {
    return this.addAll([request]);
  };
}

if (!Cache.prototype.addAll) {
  Cache.prototype.addAll = function addAll(requests) {
    var cache = this;

    // Since DOMExceptions are not constructable:
    function NetworkError(message) {
      this.name = 'NetworkError';
      this.code = 19;
      this.message = message;
    }
    NetworkError.prototype = Object.create(Error.prototype);

    return Promise.resolve().then(function () {
      if (arguments.length < 1) throw new TypeError();

      // Simulate sequence<(Request or USVString)> binding:
      var sequence = [];

      requests = requests.map(function (request) {
        if (request instanceof Request) {
          return request;
        } else {
          return String(request); // may throw TypeError
        }
      });

      return Promise.all(requests.map(function (request) {
        if (typeof request === 'string') {
          request = new Request(request);
        }

        var scheme = new URL(request.url).protocol;

        if (scheme !== 'http:' && scheme !== 'https:') {
          throw new NetworkError("Invalid scheme");
        }

        return fetch(request.clone());
      }));
    }).then(function (responses) {
      // TODO: check that requests don't overwrite one another
      // (don't think this is possible to polyfill due to opaque responses)
      return Promise.all(responses.map(function (response, i) {
        return cache.put(requests[i], response);
      }));
    }).then(function () {
      return undefined;
    });
  };
}

if (!CacheStorage.prototype.match) {
  // This is probably vulnerable to race conditions (removing caches etc)
  CacheStorage.prototype.match = function match(request, opts) {
    var caches = this;

    return this.keys().then(function (cacheNames) {
      var match;

      return cacheNames.reduce(function (chain, cacheName) {
        return chain.then(function () {
          return match || caches.open(cacheName).then(function (cache) {
            return cache.match(request, opts);
          }).then(function (response) {
            match = response;
            return match;
          });
        });
      }, Promise.resolve());
    });
  };
}

/***/ })
/******/ ]);