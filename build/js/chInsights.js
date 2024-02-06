/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 2767:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./src/modules/Home/HomeInsights.jsx + 1 modules
var HomeInsights = __webpack_require__(792);
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
  }, /*#__PURE__*/react.createElement(HomeInsights/* HomeInsights */.r, null), /*#__PURE__*/react.createElement(HomeInsights/* HomeInsights */.r, null), /*#__PURE__*/react.createElement(HomeInsights/* HomeInsights */.r, null)));
};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(8309);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(2526);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(1817);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(2165);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(6992);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(8783);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(3948);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(7042);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(1038);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(4916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8674);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.async-iterator.js
var es_symbol_async_iterator = __webpack_require__(2443);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.to-string-tag.js
var es_symbol_to_string_tag = __webpack_require__(3680);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.to-string-tag.js
var es_json_to_string_tag = __webpack_require__(3706);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.math.to-string-tag.js
var es_math_to_string_tag = __webpack_require__(7059);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-prototype-of.js
var es_object_get_prototype_of = __webpack_require__(489);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(4747);
// EXTERNAL MODULE: ./src/modules/Helpers/requests.js
var requests = __webpack_require__(9072);
// EXTERNAL MODULE: ./src/modules/Home/BackToPageButton.jsx
var Home_BackToPageButton = __webpack_require__(8220);
// EXTERNAL MODULE: ./node_modules/react-loader-spinner/dist/module.js + 5 modules
var dist_module = __webpack_require__(6665);
// EXTERNAL MODULE: ./src/modules/Card/CardButtons.jsx
var Card_CardButtons = __webpack_require__(9993);
// EXTERNAL MODULE: ./src/modules/Helpers/dateHelpers.js
var dateHelpers = __webpack_require__(9113);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./src/modules/Story/FullStory.jsx












function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var FullStory_FullStory = function FullStory(props) {
  var _useState = (0,react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var toggleFullStory = function toggleFullStory() {
    setIsOpen(!isOpen);
  };

  return /*#__PURE__*/react.createElement("section", {
    id: "full-story",
    className: "su-group full-width-bg su-relative ".concat(isOpen ? 'su-pb-120 open' : '', "  su-bg-gray-bg before:su-bg-gray-bg after:su-bg-gray-bg")
  }, /*#__PURE__*/react.createElement("div", {
    id: "full-story-toggle",
    onClick: toggleFullStory,
    className: "su-pb-60 su-pt-80 su-flex su-justify-between su-items-center su-border-gray hover:su-cursor-pointer group-[.open]:su-border-b"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "su-font-serif su-mb-0"
  }, "Full Story"), /*#__PURE__*/react.createElement("button", {
    className: "su-w-50 su-border-none su-bg-transparent hover:su-bg-transparent"
  }, /*#__PURE__*/react.createElement("svg", {
    className: "su-inline ".concat(isOpen ? 'su-rotate-180' : ''),
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "13",
    viewBox: "0 0 12 8",
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.41416 7.54297L11.7071 2.25007C12.0976 1.85954 12.0976 1.22638 11.7071 0.835856L11.6213 0.750069C11.2307 0.359544 10.5976 0.359545 10.207 0.75007L4.91416 6.04297L6.41416 7.54297Z",
    fill: "#E50808"
  }), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.41416 7.54297L7.91416 6.04297L2.62126 0.750069C2.23074 0.359544 1.59757 0.359545 1.20705 0.75007L1.12126 0.835857C0.730738 1.22638 0.730738 1.85955 1.12126 2.25007L6.41416 7.54297Z",
    fill: "#E50808"
  })))), /*#__PURE__*/react.createElement("div", {
    className: "".concat(isOpen ? 'su-flex' : 'su-hidden', " su-mt-45 su-flex-col su-gap-[30px]")
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("p", {
    className: "small-heading"
  }, "Author"), /*#__PURE__*/react.createElement("p", {
    className: "su-py-20 su-mb-0"
  }, props.data.bylineAuthor ? props.data.bylineAuthor : 'NA')), /*#__PURE__*/react.createElement("div", {
    className: "su-pb-45  su-border-b su-border-gray "
  }, /*#__PURE__*/react.createElement("p", {
    className: "small-heading"
  }, "Story"), /*#__PURE__*/react.createElement("div", {
    className: "su-py-20 [&>p:last-child]:su-mb-0"
  }, /*#__PURE__*/react.createElement("div", {
    className: "su-py-20 [&>p:last-child]:su-mb-0"
  }))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("p", {
    className: "small-heading su-mb-30"
  }, "Media"), /*#__PURE__*/react.createElement("div", {
    className: "su-mt-40 su-pt-30 first:su-mt-0 first:su-pt-0 su-flex su-flex-col lg:su-flex-row su-gap-xl"
  }, /*#__PURE__*/react.createElement("div", {
    className: "su-flex su-items-center su-justify-center su-w-full lg:su-max-w-[610px] lg:su-max-h-[402px]"
  }, /*#__PURE__*/react.createElement("img", {
    src: "https://sug-web.matrix.squiz.cloud/_media/images/content-partners/stanford-law-school/sls-relaunches-stanford-legal-podcast2.jpg",
    alt: "",
    className: "su-aspect-[3/2] su-object-cover"
  })), /*#__PURE__*/react.createElement("ul", {
    className: "su-m-0 su-p-0 su-list-none su-gap-[15px] su-grid su-grid-cols-1 sm:su-grid-cols-2 lg:su-grid-cols-1"
  }, /*#__PURE__*/react.createElement("li", {
    className: "mb-0"
  }, /*#__PURE__*/react.createElement("p", {
    className: "su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8"
  }, "Credit"), /*#__PURE__*/react.createElement("p", {
    className: "su-leading-[3.6rem] su-mb-0"
  }, /*#__PURE__*/react.createElement("em", null, "N/A"))), /*#__PURE__*/react.createElement("li", {
    className: "mb-0"
  }, /*#__PURE__*/react.createElement("p", {
    className: "su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8"
  }, "Alternative Text"), /*#__PURE__*/react.createElement("p", {
    className: "su-leading-[3.6rem] su-mb-0"
  })), /*#__PURE__*/react.createElement("li", {
    className: "mb-0"
  }, /*#__PURE__*/react.createElement("p", {
    className: "su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8"
  }, "Captions"), /*#__PURE__*/react.createElement("p", {
    className: "su-leading-[3.6rem] su-mb-0"
  }, /*#__PURE__*/react.createElement("em", null, "N/A"))), /*#__PURE__*/react.createElement("li", {
    className: "mb-0"
  }, /*#__PURE__*/react.createElement("p", {
    className: "su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8"
  }, "Dimensions"), /*#__PURE__*/react.createElement("p", {
    className: "su-leading-[3.6rem] su-mb-0"
  }, "750x500")))))));
};
FullStory_FullStory.propTypes = {
  data: prop_types_default().shape({
    bylineAuthor: (prop_types_default()).string,
    name: (prop_types_default()).string
  })
};
;// CONCATENATED MODULE: ./src/modules/Story/StoryView.jsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }




















function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function StoryView_slicedToArray(arr, i) { return StoryView_arrayWithHoles(arr) || StoryView_iterableToArrayLimit(arr, i) || StoryView_unsupportedIterableToArray(arr, i) || StoryView_nonIterableRest(); }

function StoryView_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function StoryView_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return StoryView_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return StoryView_arrayLikeToArray(o, minLen); }

function StoryView_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function StoryView_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function StoryView_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var dataObj = {
  id: '128334',
  type: 'page_standard',
  type_name: 'Standard Page',
  version: '0.0.7',
  name: 'SLS Relaunches ‘Stanford Legal’ Podcast',
  short_name: 'SLS Relaunches ‘Stanford Legal’ Podcast',
  status: {
    id: 2,
    code: 'under_construction',
    name: 'Under Construction'
  },
  created: {
    date: '2024-01-23T13:56:10-08:00',
    user_id: '6004'
  },
  updated: {
    date: '2024-01-25T02:46:43-08:00',
    user_id: '57'
  },
  published: {
    date: null,
    user_id: null
  },
  status_changed: {
    date: '2024-01-23T13:56:10-08:00',
    user_id: '6004'
  },
  attributes: {
    short_name: 'SLS Relaunches ‘Stanford Legal’ Podcast',
    name: 'SLS Relaunches ‘Stanford Legal’ Podcast'
  },
  metadata: {
    hubStatus: ['submitted'],
    hubStatusDescription: [],
    hubVersionHistory: ['[{"date":1706054817693,"message":"New version of story pushed from source"}]'],
    hubReviewMsg: [],
    seoTitle: ['SLS Relaunches ‘Stanford Legal’ Podcast'],
    canonicalUrl: ['https://law.stanford.edu/press/sls-relaunches-stanford-legal-podcast/'],
    seoDescription: [],
    seoKeywords: ['Stanford Legal, SLS News and Announcements, Yes, Public'],
    robots: ['index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'],
    publishedDate: ['2023-12-18 01:42:35'],
    modifiedDate: ['2023-12-18 01:48:01'],
    srAudience: [],
    srMessage: [],
    srContentType: [],
    srFeaturedUnit: [],
    srContentCategory: [],
    srContentMainTopic: [],
    srContentTopic: [],
    srContentSubtopic: [],
    embargoFlag: [],
    embargoPublishDate: ['2024-01-01 00:00:00'],
    pageType: ['story'],
    teaser: ['<p>STANFORD, CA, December 18, 2023&mdash;Stanford Law School (SLS) announced today the relaunch of Stanford Legal, a bi-weekly podcast that delves into the cases, questions, conflicts, and legal issues that are [&hellip;]</p>'],
    featuredImage: ['128338'],
    featuredVideo: [],
    mediaContacts: [],
    featuredMediaOrientation: ['vertical'],
    storyLayout: ['Basic'],
    bannerImg: [],
    bannerCaption: [],
    bannerImgType: ['normal'],
    summary: ['<p>STANFORD, CA, December 18, 2023&mdash;Stanford Law School (SLS) announced today the relaunch of Stanford Legal, a bi-weekly podcast that delves into the cases, questions, conflicts, and legal issues that are [&hellip;]</p>'],
    storyFormat: ['standard'],
    mediaAttachments: ['128338'],
    featuredImageTwitter: [],
    featuredImageOg: [],
    hideSocialMedia: [],
    hideBottomBox: [],
    contributorsAuthors: [],
    contributorsProducers: [],
    contributorsWriters: [],
    contributorsEditors: [],
    contributorsVideographers: [],
    contributorsPhotographyDirector: [],
    contributorsMediaContacts: [],
    bylineAuthor: ['Monica Schreiber'],
    bylineText: [],
    bylineUrl: [],
    ogLocale: ['en_US'],
    ogType: ['article'],
    twitterCard: ['summary_large_image'],
    authorId: [],
    authorName: [],
    srcOrigin: ['law.stanford.edu'],
    srcOriginType: ['Wordpress'],
    srcContentSource: ['Stanford Law School'],
    srcTitle: ['SLS Relaunches ‘Stanford Legal’ Podcast'],
    srcSummary: ['<p>STANFORD, CA, December 18, 2023&mdash;Stanford Law School (SLS) announced today the relaunch of Stanford Legal, a bi-weekly podcast that delves into the cases, questions, conflicts, and legal issues that are [&hellip;]</p>'],
    srcPublishedDate: ['2023-12-18 01:42:35'],
    srcFeaturedImage: [],
    slug: ['sls-relaunches-stanford-legal-podcast'],
    srcKeywords: ['Stanford Legal, SLS News and Announcements, Yes, Public'],
    srcPostId: ['458351'],
    srcUrl: ['https://law.stanford.edu/press/sls-relaunches-stanford-legal-podcast/'],
    srcStatus: ['publish'],
    debugFeedUrl: ['https://law.stanford.edu/wp-json/wp/v2/news/458351'],
    debugPushTs: ['1706054760164'],
    debugBlueprintId: ['128334'],
    storyType: ['5981'],
    sections: [],
    topics: [],
    messages: [],
    feeds: [],
    contentPartners: ['5859'],
    storyAudience: [],
    debug: []
  }
};
var StoryView = function StoryView(id) {
  var _useState = useState(dataObj),
      _useState2 = StoryView_slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1]; // data from endpoint


  var _useState3 = useState(false),
      _useState4 = StoryView_slicedToArray(_useState3, 2),
      isLoading = _useState4[0],
      setIsLoading = _useState4[1]; // Loader flag


  var fetchData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(id) {
      var d;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsLoading(true); // replace with getSearchData from requests.js with blank query once CORS is resolved

              _context.prev = 1;
              _context.next = 4;
              return getAPIData(id);

            case 4:
              d = _context.sent;
              console.log('Story data: ', d);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.error('Error fetching data:', _context.t0);

            case 11:
              _context.prev = 11;
              setIsLoading(false);
              return _context.finish(11);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8, 11, 14]]);
    }));

    return function fetchData(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  useEffect(function () {
    var _window, _window$data, _window$data$contentH;

    var url = (_window = window) === null || _window === void 0 ? void 0 : (_window$data = _window.data) === null || _window$data === void 0 ? void 0 : (_window$data$contentH = _window$data.contentHubAPI) === null || _window$data$contentH === void 0 ? void 0 : _window$data$contentH.module;

    if (url) {
      fetchData(id);
      console.log('story fetch url: ', url);
    } else {
      // setData(dataObj);
      console.log('story data: ', data);
    }
  }, []);
  return isLoading ? /*#__PURE__*/React.createElement(Oval, {
    visible: true,
    height: "80",
    width: "80",
    color: "#B1040E",
    secondaryColor: "gray",
    ariaLabel: "oval-loading"
  }) : /*#__PURE__*/React.createElement("div", {
    className: "su-col-span-full xl:su-col-start-2 xl:su-col-span-10",
    id: "view-story",
    "data-id": data.id
  }, /*#__PURE__*/React.createElement("section", {
    className: "su-relative su-border-b su-border-gray su-mt-60 su-mb-50 su-pb-[5.5rem] su-pt-60 md:su-mt-45 md:su-pt-70"
  }, /*#__PURE__*/React.createElement(BackToPageButton, {
    page: "home"
  }), /*#__PURE__*/React.createElement("div", {
    className: "su-flex su-flex-col lg:su-flex-row su-gap-xs su-justify-between su-items-center"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "su-font-serif su-mb-0"
  }, "View Story"), /*#__PURE__*/React.createElement("div", {
    className: "su-flex su-flex-col sm:su-flex-row su-items-center su-gap-[10px]"
  }, /*#__PURE__*/React.createElement(CardButtons, {
    assetId: data.id
  })))), /*#__PURE__*/React.createElement("section", {
    className: "su-flex su-flex-col su-gap-[30px] su-mb-80"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "small-heading"
  }, "Headline"), /*#__PURE__*/React.createElement("h2", {
    className: "su-py-20 su-mb-0"
  }, data.name)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "small-heading"
  }, "Summary"), /*#__PURE__*/React.createElement("p", {
    className: "su-mb-0 su-py-20 su-leading-normal"
  }, data.metadata.summary)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", {
    className: "su-m-0 su-p-0 su-list-none su-gap-y-[12px] sm:su-gap-y-[24px] su-gap-x-[24px] md:su-gap-x-2xl su-grid su-grid-cols-1 sm:su-grid-cols-2"
  }, /*#__PURE__*/React.createElement("li", {
    className: "mb-0"
  }, /*#__PURE__*/React.createElement("p", {
    className: "su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8"
  }, "Main Category"), /*#__PURE__*/React.createElement("p", {
    className: "su-leading-[3.6rem] su-mb-0"
  }, /*#__PURE__*/React.createElement("em", null, data.metadata.srContentMainTopic.length > 0 ? data.metadata.srContentMainTopic : 'NA'))), /*#__PURE__*/React.createElement("li", {
    className: "mb-0"
  }, /*#__PURE__*/React.createElement("p", {
    className: "su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8"
  }, "Submitted by"), /*#__PURE__*/React.createElement("p", {
    className: "su-leading-[3.6rem] su-mb-0"
  }, data.metadata.srcContentSource)), /*#__PURE__*/React.createElement("li", {
    className: "mb-0"
  }, /*#__PURE__*/React.createElement("p", {
    className: "su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8"
  }, "Byline"), /*#__PURE__*/React.createElement("p", {
    className: "su-leading-[3.6rem] su-mb-0"
  }, data.metadata.bylineAuthor)), /*#__PURE__*/React.createElement("li", {
    className: "mb-0"
  }, /*#__PURE__*/React.createElement("p", {
    className: "su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8"
  }, "Submitted on"), /*#__PURE__*/React.createElement("p", {
    className: "su-leading-[3.6rem] su-mb-0"
  }, data.created.date)), /*#__PURE__*/React.createElement("li", {
    className: "mb-0"
  }, /*#__PURE__*/React.createElement("p", {
    className: "su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8"
  }, "Other Topics"), /*#__PURE__*/React.createElement("p", {
    className: "su-leading-[3.6rem] su-mb-0"
  }, data.metadata.topics.length > 0 ? data.metadata.topics : 'NA')), /*#__PURE__*/React.createElement("li", {
    className: "mb-0"
  }, /*#__PURE__*/React.createElement("p", {
    className: "su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8"
  }, "First Published"), /*#__PURE__*/React.createElement("p", {
    className: "su-leading-[3.6rem] su-mb-0"
  }, data.metadata.publishedDate)), /*#__PURE__*/React.createElement("li", {
    className: "mb-0"
  }, /*#__PURE__*/React.createElement("p", {
    className: "su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8"
  }, "Other keywords"), /*#__PURE__*/React.createElement("p", {
    className: "su-leading-[3.6rem] su-mb-0"
  }, /*#__PURE__*/React.createElement("em", null, data.metadata.srcKeywords.length > 0 ? data.metadata.srcKeywords : 'NA'))))), /*#__PURE__*/React.createElement("div", {
    className: "su-mb-15 su-pb-45 su su-border-b su-flex su-flex-col su-gap-[10px] su-border-gray"
  }, /*#__PURE__*/React.createElement("p", {
    className: "small-heading su-m-0 su-p-0"
  }, "Original URL"), /*#__PURE__*/React.createElement("p", {
    className: "su-mb-10 su-py-20"
  }, /*#__PURE__*/React.createElement("a", {
    id: "story-link",
    href: "https://engineering.stanford.edu/magazine/article/team-scientists-invent-method-modify-behavior-cells",
    className: "su-underline hover:su-cursor-pointer su-break-words",
    target: "_blank",
    rel: "noreferrer"
  }, "https://engineering.stanford.edu/magazine/article/team-scientists-invent-method-modify-behavior-cells")), /*#__PURE__*/React.createElement("div", {
    className: "su-flex su-flex-col sm:su-flex-row su-gap-[10px]"
  }, /*#__PURE__*/React.createElement("a", {
    id: "story-mtx-link",
    className: "button su-group su-flex -su-tracking-[0.176px] su-items-center su-justify-center sm:su-justify-start",
    href: "https://sug-web.matrix.squiz.cloud/content/stories/content-partners/stanford-engineering/a-team-of-scientists-invent-a-method-to-modify-the-behavior-of-cells",
    target: "_blank",
    rel: "noreferrer"
  }, "View full story", /*#__PURE__*/React.createElement("svg", {
    className: "su-ml-5 su-transition-colors su-text-red group-hover:su-text-white",
    width: "18",
    height: "18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.918 4.546a.9.9 0 0 1 .9-.9h7.637a.9.9 0 0 1 .9.9v7.636a.9.9 0 0 1-1.8 0V6.718l-7.373 7.373a.9.9 0 1 1-1.273-1.272l7.373-7.373H5.818a.9.9 0 0 1-.9-.9Z",
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h18v18H0z"
  }))))), /*#__PURE__*/React.createElement("button", {
    className: "js-copy-link su-group su-flex su-items-center -su-tracking-[0.176px] su-justify-center sm:su-justify-start"
  }, "Copy Link", /*#__PURE__*/React.createElement("svg", {
    className: "su-ml-5 su-transition-colors su-text-red group-hover:su-text-white",
    xmlns: "http://www.w3.org/2000/svg",
    width: "19",
    height: "18",
    viewBox: "0 0 19 18",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.6201 6.87995L14.6591 7.841C14.3036 8.19649 13.7608 8.22842 13.4448 7.91243C13.1288 7.59643 13.1608 7.05366 13.5163 6.69817L14.4394 5.77504C15.0244 5.19006 14.9875 4.20179 14.3572 3.57152C13.727 2.94125 12.7387 2.90439 12.1537 3.48938L8.48886 7.15423C7.90451 7.73857 7.94137 8.72684 8.57164 9.35711C8.88764 9.6731 8.85571 10.2159 8.50021 10.5714C8.14472 10.9269 7.60195 10.9588 7.28596 10.6428C6.02541 9.38225 6.05262 7.3048 7.34603 6.0114L11.0488 2.30862C11.0642 2.29319 11.0802 2.27833 11.0962 2.26469C12.3938 1.05272 14.4098 1.05272 15.6429 2.28583C16.876 3.51895 16.876 5.53491 15.6641 6.8326C15.6504 6.84852 15.6356 6.86452 15.6201 6.87995Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.654 11.9889L7.9512 15.6917C7.93577 15.7071 7.91977 15.722 7.90384 15.7356C6.60616 16.9476 4.5902 16.9476 3.35708 15.7145C2.12397 14.4814 2.12397 12.4654 3.33594 11.1677C3.34958 11.1518 3.36444 11.1358 3.37987 11.1204L4.34092 10.1593C4.69641 9.80384 5.23918 9.77192 5.55518 10.0879C5.87117 10.4039 5.83924 10.9467 5.48375 11.3022L4.56063 12.2253C3.97628 12.8096 4.0125 13.7985 4.64277 14.4288C5.27304 15.0591 6.26195 15.0953 6.84629 14.511L10.5111 10.8461C11.0955 10.2618 11.0586 9.2735 10.4284 8.64323C10.1124 8.32723 10.1449 7.78382 10.4998 7.42897C10.8553 7.07347 11.3981 7.04155 11.714 7.35754C12.9746 8.61808 12.948 10.6949 11.654 11.9889Z",
    fill: "currentColor"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "su-flex su-flex-col su-gap-[10px]"
  })), /*#__PURE__*/React.createElement(FullStory, {
    data: data
  }));
};
;// CONCATENATED MODULE: ./src/modules/Insights.jsx
// Imports




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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [736], function() { return __webpack_require__(2767); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=chInsights.js.map