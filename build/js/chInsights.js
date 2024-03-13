/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 6993:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(1249);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(9601);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(2222);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
;// CONCATENATED MODULE: ./src/modules/Home/InsightsCard.jsx



var InsightsCard = function InsightsCard(_ref) {
  var title = _ref.title,
      value = _ref.value,
      percentage = _ref.percentage,
      isPositive = _ref.isPositive;
  var colorClass = isPositive ? 'su-text-green' : 'su-text-red-dark';
  var arrowImage = isPositive ? 'chevron-up.svg' : 'chevron-down.svg';
  return /*#__PURE__*/react.createElement("div", {
    className: "su-rounded su-border su-border-gray su-bg-white su-shadow-sm su-p-30 su-pb-40 lg:su-max-h-[182px]"
  }, /*#__PURE__*/react.createElement("div", {
    className: "su-flex su-items-center su-justify-between su-mb-30"
  }, /*#__PURE__*/react.createElement("p", {
    className: "su-text-16 su-mb-0"
  }, title), /*#__PURE__*/react.createElement("div", {
    className: "".concat(colorClass, " su-text-14 su-font-semibold ").concat(isPositive ? 'su-bg-green/10' : 'su-bg-red-dark/10', " su-flex su-items-center su-px-10 su-py-8 su-rounded")
  }, /*#__PURE__*/react.createElement("img", {
    className: "su-inline su-mt-1 su-mr-5",
    src: __webpack_require__(6303)("./".concat(arrowImage)),
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, percentage))), /*#__PURE__*/react.createElement("p", {
    className: "su-text-m5 su-leading-[0.7] su-mb-0 su-font-bold"
  }, value));
};
InsightsCard.propTypes = {
  title: prop_types.PropTypes.string,
  value: prop_types.PropTypes.string,
  percentage: prop_types.PropTypes.string,
  isPositive: prop_types.PropTypes.bool
};
;// CONCATENATED MODULE: ./src/modules/Home/HomeInsights.jsx
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var HomeInsights = function HomeInsights() {
  var insightsData = [{
    title: 'Insights placeholder',
    value: '4,635',
    percentage: '80%',
    isPositive: true
  }, {
    title: 'Insights placeholder',
    value: '3.05',
    percentage: '80%',
    isPositive: true
  }, {
    title: 'Insights placeholder',
    value: '949',
    percentage: '9%',
    isPositive: false
  }];
  return /*#__PURE__*/react.createElement("section", {
    className: "su-mb-90"
  }, /*#__PURE__*/react.createElement("div", {
    className: "su-flex su-flex-col md:su-flex-row su-justify-between md:su-items-center su-mb-20 su-gap-xs"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "su-text-h4 md:su-text-h3 su-font-serif su-mb-0"
  }, "Insights"), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("a", {
    href: window.globalData.pageHrefs.insights,
    className: "su-flex su-items-center su-text-[18px] hover:su-underline"
  }, "View all Insights", /*#__PURE__*/react.createElement("img", {
    className: "su-inline su-ml-6",
    alt: "",
    src: __webpack_require__(7142)
  })))), /*#__PURE__*/react.createElement("div", {
    className: "su-grid su-grid-cols-1 lg:su-grid-cols-3 su-gap-xs"
  }, insightsData.map(function (insight, index) {
    return /*#__PURE__*/react.createElement(InsightsCard, _extends({
      key: index
    }, insight));
  })));
};
// EXTERNAL MODULE: ./src/modules/Home/PageHeading.jsx
var PageHeading = __webpack_require__(7774);
;// CONCATENATED MODULE: ./src/modules/Insights/Insights.jsx



var Insights = function Insights() {
  var _window, _window$data, _window$data$texts, _window$data$texts$in, _window2, _window2$data, _window2$data$texts, _window2$data$texts$i;

  return /*#__PURE__*/react.createElement("div", {
    className: "su-col-span-full xl:su-col-start-2 xl:su-col-span-10"
  }, /*#__PURE__*/react.createElement(PageHeading/* PageHeading */.C, {
    headingText: (_window = window) === null || _window === void 0 ? void 0 : (_window$data = _window.data) === null || _window$data === void 0 ? void 0 : (_window$data$texts = _window$data.texts) === null || _window$data$texts === void 0 ? void 0 : (_window$data$texts$in = _window$data$texts.insights) === null || _window$data$texts$in === void 0 ? void 0 : _window$data$texts$in.headingText,
    subHeadingText: (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$data = _window2.data) === null || _window2$data === void 0 ? void 0 : (_window2$data$texts = _window2$data.texts) === null || _window2$data$texts === void 0 ? void 0 : (_window2$data$texts$i = _window2$data$texts.insights) === null || _window2$data$texts$i === void 0 ? void 0 : _window2$data$texts$i.subHeadingText,
    homeButton: true
  }), /*#__PURE__*/react.createElement("section", {
    className: "su-relative su-text-center su-mt-60 su-mb-50 su-pt-60 md:su-mt-45 md:su-pt-70 md:su-mb-100"
<<<<<<< HEAD
  }, /*#__PURE__*/react.createElement(HomeInsights, null), /*#__PURE__*/react.createElement(HomeInsights, null), /*#__PURE__*/react.createElement(HomeInsights, null)));
=======
  }, /*#__PURE__*/react.createElement(HomeInsights/* HomeInsights */.r, null), /*#__PURE__*/react.createElement(HomeInsights/* HomeInsights */.r, null), /*#__PURE__*/react.createElement(HomeInsights/* HomeInsights */.r, null)));
>>>>>>> origin/master
};
;// CONCATENATED MODULE: ./src/modules/Insights.jsx
// Imports


 // import {StoryView} from './Story/StoryView.jsx';

var rootNode = document.getElementById('content-hub--insights');

if (rootNode) {
  react_dom.createRoot(rootNode).render( /*#__PURE__*/react.createElement(react.StrictMode, null, /*#__PURE__*/react.createElement(Insights, null)));
}

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
/******/ 		__webpack_require__.j = 906;
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
/******/ 			906: 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [736], function() { return __webpack_require__(6993); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=chInsights.js.map