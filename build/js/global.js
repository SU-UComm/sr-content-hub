/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 4306:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1539);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4747);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);


document.addEventListener('DOMContentLoaded', function () {
  var hamburgerToggle = document.querySelector('#header-mobile-menu-toggle');
  var mobileMenu = document.querySelector('#header-mobile-menu');
  if (!hamburgerToggle || !mobileMenu) return;
  var mobileMenuItems = mobileMenu.querySelectorAll('a');
  mobileMenuItems.forEach(function (item) {
    item.setAttribute('tabindex', '-1');
  });
  hamburgerToggle.addEventListener('click', function () {
    hamburgerToggle.classList.toggle('active');
    hamburgerToggle.setAttribute('aria-expanded', hamburgerToggle.classList.contains('active'));
    mobileMenu.classList.toggle('su-hidden');

    if (hamburgerToggle.classList.contains('active')) {
      mobileMenuItems.forEach(function (item) {
        item.setAttribute('tabindex', '0');
      });
    } else {
      mobileMenuItems.forEach(function (item) {
        item.setAttribute('tabindex', '-1');
      });
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var toggleOpen = function toggleOpen(isOpen, button, list) {
    var listItems = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

    if (isOpen) {
      button.setAttribute('aria-expanded', 'true');
      list.focus();
      listItems.forEach(function (listItem) {
        listItem.setAttribute('tabindex', '0');
      });
      return;
    }

    button.setAttribute('aria-expanded', 'false');
    listItems.forEach(function (listItem) {
      listItem.setAttribute('tabindex', '-1');
    });
  };

  var customSelects = document.querySelectorAll('.c-select');
  if (customSelects.length === 0) return;
  customSelects.forEach(function (select) {
    var selectInput = select.querySelector('select');
    var selectOptions = selectInput.querySelectorAll('option');
    var wrapper = select.querySelector('.c-wrapper');
    var button = select.querySelector('.c-button');
    var buttonText = select.querySelector('.c-button span');
    var list = select.querySelector('.c-list');
    var listElements = select.querySelectorAll('.c-list li');
    var searchInput = select.classList.contains('c-select--search') ? select.querySelector('input') : null;

    var resetSearch = function resetSearch() {
      if (!searchInput) return;
      searchInput.value = '';
      listElements.forEach(function (listItem) {
        listItem.classList.remove('su-hidden');
      });
    };

    var handleItemClick = function handleItemClick(listItem, event) {
      event.target.blur();
      wrapper.classList.toggle('open');
      buttonText.innerHTML = listItem.innerText;
      selectInput.value = listItem.dataset.value;
      if (searchInput) resetSearch();
      selectOptions.forEach(function (option) {
        if (option.value === listItem.dataset.value) {
          option.setAttribute('selected', '');
        } else {
          option.removeAttribute('selected');
        }
      });
      selectInput.dispatchEvent(new Event('change'));
    };

    document.addEventListener('click', function (event) {
      if (!wrapper.contains(event.target)) {
        wrapper.classList.remove('open');
        toggleOpen(false, button, list, listElements);
        if (searchInput) resetSearch();
      }
    });

    if (searchInput) {
      searchInput.addEventListener('input', function () {
        var searchValue = searchInput.value.toLowerCase();
        listElements.forEach(function (listItem) {
          if (listItem.innerText.toLowerCase().indexOf(searchValue) > -1) {
            listItem.classList.remove('su-hidden');
          } else {
            listItem.classList.add('su-hidden');
          }
        });
      });
    }

    button.addEventListener('click', function () {
      wrapper.classList.toggle('open');

      if (wrapper.classList.contains('open')) {
        toggleOpen(true, button, list, listElements);
        if (searchInput) searchInput.focus();
      } else {
        toggleOpen(false, button, list, listElements);
        resetSearch();
      }
    });
    listElements.forEach(function (listItem) {
      listItem.addEventListener('keydown', function (event) {
        if (event.keyCode === 13) {
          handleItemClick(listItem, event);
        }
      });
      listItem.addEventListener('click', function (event) {
        handleItemClick(listItem, event);
      });
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var sendButtons = document.querySelectorAll('.c-button-send');
  if (sendButtons.length === 0) return;
  sendButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var dialog = button.parentElement.querySelector('.c-dialog-send');
      dialog.addEventListener('click', function () {
        dialog.close();
      });
      dialog.querySelector('.c-dialog-body').addEventListener('click', function (e) {
        e.stopPropagation();
      });
      dialog.querySelectorAll('button').forEach(function (button) {
        button.addEventListener('click', function () {
          dialog.close();
        });
      });
      dialog.showModal();
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var declineButtons = document.querySelectorAll('.c-button-decline');
  if (declineButtons.length === 0) return;
  declineButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var dialog = button.parentElement.querySelector('.c-dialog-decline');
      dialog.addEventListener('click', function () {
        dialog.close();
      });
      dialog.querySelector('.c-dialog-body').addEventListener('click', function (e) {
        e.stopPropagation();
      });
      dialog.querySelectorAll('button').forEach(function (button) {
        button.addEventListener('click', function () {
          dialog.close();
        });
      });
      dialog.addEventListener('close', function () {
        document.body.style.overflowY = 'auto';
      });
      dialog.showModal();
      document.body.style.overflowY = 'hidden';
    });
  });
});

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
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
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
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/runtimeId */
/******/ 	!function() {
/******/ 		__webpack_require__.j = 172;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/__data/assets/git_bridge/0029/128747/build/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			172: 0
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
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkreact_starter"] = self["webpackChunkreact_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [736], function() { return __webpack_require__(4306); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=global.js.map