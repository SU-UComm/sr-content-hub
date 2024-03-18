/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 6130:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ./src/modules/Home/PageHeading.jsx
var PageHeading = __webpack_require__(4244);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(9581);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(9218);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(115);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
;// CONCATENATED MODULE: ./src/modules/Home/InsightsCard.jsx



var InsightsCard_InsightsCard = function InsightsCard(_ref) {
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
    src: __webpack_require__(3907)("./".concat(arrowImage)),
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, percentage))), /*#__PURE__*/react.createElement("p", {
    className: "su-text-m5 su-leading-[0.7] su-mb-0 su-font-bold"
  }, value));
};
InsightsCard_InsightsCard.propTypes = {
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
  return /*#__PURE__*/React.createElement("section", {
    className: "su-mb-90"
  }, /*#__PURE__*/React.createElement("div", {
    className: "su-flex su-flex-col md:su-flex-row su-justify-between md:su-items-center su-mb-20 su-gap-xs"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "su-text-h4 md:su-text-h3 su-font-serif su-mb-0"
  }, "Insights"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: window.globalData.pageHrefs.insights,
    className: "su-flex su-items-center su-text-[18px] hover:su-underline"
  }, "View all Insights", /*#__PURE__*/React.createElement("img", {
    className: "su-inline su-ml-6",
    alt: "",
    src: __webpack_require__(1205)
  })))), /*#__PURE__*/React.createElement("div", {
    className: "su-grid su-grid-cols-1 lg:su-grid-cols-3 su-gap-xs"
  }, insightsData.map(function (insight, index) {
    return /*#__PURE__*/React.createElement(InsightsCard, _extends({
      key: index
    }, insight));
  })));
};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(8741);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(5086);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(8379);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__(475);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(7136);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(785);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(4913);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(3534);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(590);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(4216);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(8665);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(9979);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(4602);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(5195);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(9193);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.async-iterator.js
var es_symbol_async_iterator = __webpack_require__(7727);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.to-string-tag.js
var es_symbol_to_string_tag = __webpack_require__(9576);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.to-string-tag.js
var es_json_to_string_tag = __webpack_require__(1586);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.math.to-string-tag.js
var es_math_to_string_tag = __webpack_require__(6982);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-prototype-of.js
var es_object_get_prototype_of = __webpack_require__(1412);
// EXTERNAL MODULE: ./src/modules/Card/Card.jsx + 1 modules
var Card = __webpack_require__(6438);
// EXTERNAL MODULE: ./src/modules/Helpers/helperFunctions.js
var helperFunctions = __webpack_require__(7904);
// EXTERNAL MODULE: ./src/modules/Helpers/requests.js
var requests = __webpack_require__(1787);
// EXTERNAL MODULE: ./node_modules/react-loader-spinner/dist/module.js + 13 modules
var dist_module = __webpack_require__(5298);
// EXTERNAL MODULE: ./src/modules/Filters/StatusFilter.jsx
var StatusFilter = __webpack_require__(6749);
// EXTERNAL MODULE: ./src/modules/Filters/SelectedFilters.jsx
var SelectedFilters = __webpack_require__(25);
// EXTERNAL MODULE: ./src/modules/NoContent/NoContent.jsx
var NoContent = __webpack_require__(5984);
;// CONCATENATED MODULE: ./src/modules/Home/ContentRegion.jsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
























function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var ContentRegion = function ContentRegion() {
  var _window3, _window3$data, _window3$data$user, _window4, _window4$data, _window4$data$user, _window5, _window5$data, _window5$data$user, _window6, _window6$data, _window6$data$user, _window7, _window7$data, _window8, _window8$data, _window8$data$user;

  var baseUrl = "".concat(window.globalData.urls.fb, "/s/search.json");

  var _useState = (0,react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1]; // Loader flag
  // const [data, setData] = useState([]); // data from endpoint


  var _useState3 = (0,react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      results = _useState4[0],
      setResults = _useState4[1]; // data from endpoint


  var _useState5 = (0,react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      resultsSummary = _useState6[0],
      setResultsSummary = _useState6[1];

  var _useState7 = (0,react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      statusLabel = _useState8[0],
      setStatusLabels = _useState8[1];

  var _useState9 = (0,react.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      facets = _useState10[0],
      setFacets = _useState10[1];

  var _useState11 = (0,react.useState)('All'),
      _useState12 = _slicedToArray(_useState11, 2),
      statusSelected = _useState12[0],
      setStatusSelected = _useState12[1];

  var _useState13 = (0,react.useState)(''),
      _useState14 = _slicedToArray(_useState13, 2),
      dataLocation = _useState14[0],
      setDataLocation = _useState14[1];

  var _useState15 = (0,react.useState)([]),
      _useState16 = _slicedToArray(_useState15, 2),
      hubStatuses = _useState16[0],
      setHubStatuses = _useState16[1];

  var fetchData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, func) {
      var d, sourceIdsArray, statuses, _d2, _sourceIdsArray, _statuses;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsLoading(true);

              if (!(func == 'fb')) {
                _context.next = 28;
                break;
              }

              _context.prev = 2;
              _context.next = 5;
              return (0,requests/* fetchFBData */.j2)(url);

            case 5:
              d = _context.sent;
              d.response.facets.map(function (item) {
                if (item.name == 'hubStatus') {
                  setStatusLabels(item.allValues);
                }
              });
              setFacets(d.response.facets); // setData(d);

              setResults(d.response.resultPacket.results);
              setResultsSummary(d.response.resultPacket.resultsSummary);
              console.log('REQUEST FUNCTION data in home: ', d);
              sourceIdsArray = [];
              d.response.resultPacket.results.forEach(function (item) {
                if (item.listMetadata.assetId && item.listMetadata.assetId.length > 0) {
                  sourceIdsArray.push(item.listMetadata.assetId[0]);
                }
              });
              _context.next = 15;
              return (0,requests/* getHubStatus */.cL)(sourceIdsArray.join(','));

            case 15:
              statuses = _context.sent;
              console.log('Statuses:', statuses);
              setHubStatuses(statuses);
              _context.next = 23;
              break;

            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](2);
              console.error('Error fetching data:', _context.t0);

            case 23:
              _context.prev = 23;
              setIsLoading(false);
              return _context.finish(23);

            case 26:
              _context.next = 52;
              break;

            case 28:
              _context.prev = 28;
              _context.next = 31;
              return (0,requests/* getSearchData */.DW)(url);

            case 31:
              _d2 = _context.sent;

              _d2.response.facets.map(function (item) {
                if (item.name == 'hubStatus') {
                  setStatusLabels(item.allValues);
                }
              });

              setFacets(_d2.response.facets); // setData(d);

              setResults(_d2.response.resultPacket.results);
              setResultsSummary(_d2.response.resultPacket.resultsSummary);
              console.log('REQUEST FUNCTION data in home matrix: ', _d2);
              _sourceIdsArray = [];

              _d2.response.resultPacket.results.forEach(function (item) {
                if (item.listMetadata.assetId && item.listMetadata.assetId.length > 0) {
                  _sourceIdsArray.push(item.listMetadata.assetId[0]);
                }
              });

              _context.next = 41;
              return (0,requests/* getHubStatus */.cL)(_sourceIdsArray.join(','));

            case 41:
              _statuses = _context.sent;
              console.log('Statuses:', _statuses);
              setHubStatuses(_statuses);
              _context.next = 49;
              break;

            case 46:
              _context.prev = 46;
              _context.t1 = _context["catch"](28);
              console.error('Error fetching data:', _context.t1);

            case 49:
              _context.prev = 49;
              setIsLoading(false);
              return _context.finish(49);

            case 52:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 20, 23, 26], [28, 46, 49, 52]]);
    }));

    return function fetchData(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  (0,react.useEffect)(function () {
    var _window, _window$data, _window2, _window2$data, _window2$data$content;

    var userType = (_window = window) === null || _window === void 0 ? void 0 : (_window$data = _window.data) === null || _window$data === void 0 ? void 0 : _window$data.user.userType;
    var urlCheck = (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$data = _window2.data) === null || _window2$data === void 0 ? void 0 : (_window2$data$content = _window2$data.contentHubAPI) === null || _window2$data$content === void 0 ? void 0 : _window2$data$content.search;

    if (urlCheck) {
      var url = userType == 'CP' ? window.data.contentHubAPI.search.myContent : window.data.contentHubAPI.search.newContent;
      fetchData(url, 'matrix');
      setDataLocation('matrix');
    } else {
      fetchData("".concat(window.globalData.urls.fb, "/s/search.json?f.hubStatus%7ChubStatus=submitted&profile=search&num_ranks=10&query=%21nullquery&collection=sug%7Esp-stanford-university-content-hub&sort=dmetamtxCreated"), 'fb');
      setDataLocation('fb');
    }
  }, []);

  var onChange = function onChange(name, value, selectedVal) {
    console.log('ON CHANGE: ', name, ' || ', value, '    ||    ', selectedVal);

    if (name == 'status') {
      var selected = (0,helperFunctions/* getLabel */.p9)(selectedVal);
      setStatusSelected(selected);
    }

    if (name == 'unselect') {
      console.log('check');

      if (selectedVal == 'hubStatus') {
        setStatusSelected('All');
      }
    }

    var fetchUrl = baseUrl + value;
    fetchData(fetchUrl, dataLocation);
  };

  return isLoading ? /*#__PURE__*/react.createElement(dist_module/* Oval */.BM, {
    visible: true,
    height: "80",
    width: "80",
    color: "#B1040E",
    secondaryColor: "gray",
    ariaLabel: "oval-loading"
  }) : /*#__PURE__*/react.createElement("section", null, /*#__PURE__*/react.createElement("div", {
    className: "su-flex su-flex-col md:su-flex-row su-justify-between md:su-items-center su-mb-20 su-gap-xs"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "su-text-h4 md:su-text-h3 su-font-serif su-mb-0"
  }, ((_window3 = window) === null || _window3 === void 0 ? void 0 : (_window3$data = _window3.data) === null || _window3$data === void 0 ? void 0 : (_window3$data$user = _window3$data.user) === null || _window3$data$user === void 0 ? void 0 : _window3$data$user.userType) === 'UCOMM' ? 'Latest content for review' : 'My Recent Content'), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("a", {
    href: ((_window4 = window) === null || _window4 === void 0 ? void 0 : (_window4$data = _window4.data) === null || _window4$data === void 0 ? void 0 : (_window4$data$user = _window4$data.user) === null || _window4$data$user === void 0 ? void 0 : _window4$data$user.userType) === 'UCOMM' ? window.globalData.pageHrefs.newContent : window.globalData.pageHrefs.myContent,
    className: "su-flex su-items-center su-text-[18px] hover:su-underline"
  }, "View all ", ((_window5 = window) === null || _window5 === void 0 ? void 0 : (_window5$data = _window5.data) === null || _window5$data === void 0 ? void 0 : (_window5$data$user = _window5$data.user) === null || _window5$data$user === void 0 ? void 0 : _window5$data$user.userType) === 'UCOMM' ? 'Latest Content' : 'My Content', /*#__PURE__*/react.createElement("img", {
    className: "su-inline su-ml-6",
    src: __webpack_require__(1205)
  })))), ((_window6 = window) === null || _window6 === void 0 ? void 0 : (_window6$data = _window6.data) === null || _window6$data === void 0 ? void 0 : (_window6$data$user = _window6$data.user) === null || _window6$data$user === void 0 ? void 0 : _window6$data$user.userType) === 'CP' && results.length > 1 ? /*#__PURE__*/react.createElement("div", {
    className: "su-mb-60"
  }, /*#__PURE__*/react.createElement("div", {
    className: "su-w-full md:su-w-1/2"
  }, /*#__PURE__*/react.createElement(StatusFilter/* StatusFilter */.B, {
    facets: statusLabel,
    onChange: onChange,
    selectedValue: statusSelected
  })), /*#__PURE__*/react.createElement(SelectedFilters/* SelectedFacets */.e, {
    onChange: onChange,
    facets: facets,
    page: ((_window7 = window) === null || _window7 === void 0 ? void 0 : (_window7$data = _window7.data) === null || _window7$data === void 0 ? void 0 : _window7$data.user.userType) == 'CP' ? 'myContent' : 'newContent'
  })) : null, /*#__PURE__*/react.createElement("p", {
    className: "su-leading-[2] su-mb-20"
  }, ((_window8 = window) === null || _window8 === void 0 ? void 0 : (_window8$data = _window8.data) === null || _window8$data === void 0 ? void 0 : (_window8$data$user = _window8$data.user) === null || _window8$data$user === void 0 ? void 0 : _window8$data$user.userType) === 'UCOMM' ? "1-".concat(resultsSummary.totalMatching > 5 ? '5' : resultsSummary.totalMatching, " of ").concat(resultsSummary.totalMatching, " results waiting for review") : ''), /*#__PURE__*/react.createElement("ul", {
    className: "su-flex su-flex-col su-gap-y-xs su-list-none su-p-0 su-m-0",
    id: "latest-content"
  }, results.length > 0 ? results.slice(0, 5).map(function (contentItem, index) {
    return /*#__PURE__*/react.createElement(Card/* Card */.Z, {
      key: index,
      data: contentItem,
      statuses: hubStatuses
    });
  }) : /*#__PURE__*/react.createElement(NoContent/* NoContent */.R, null)));
};
;// CONCATENATED MODULE: ./src/modules/Home/Home.jsx




var Home = function Home() {
  var _window, _window$data, _window$data$texts, _window$data$texts$ho, _window2, _window2$data, _window2$data$texts, _window2$data$texts$h;

  return /*#__PURE__*/react.createElement("div", {
    className: "su-col-span-full xl:su-col-start-2 xl:su-col-span-10"
  }, /*#__PURE__*/react.createElement(PageHeading/* PageHeading */.A, {
    headingText: (_window = window) === null || _window === void 0 ? void 0 : (_window$data = _window.data) === null || _window$data === void 0 ? void 0 : (_window$data$texts = _window$data.texts) === null || _window$data$texts === void 0 ? void 0 : (_window$data$texts$ho = _window$data$texts.home) === null || _window$data$texts$ho === void 0 ? void 0 : _window$data$texts$ho.headingText,
    subHeadingText: (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$data = _window2.data) === null || _window2$data === void 0 ? void 0 : (_window2$data$texts = _window2$data.texts) === null || _window2$data$texts === void 0 ? void 0 : (_window2$data$texts$h = _window2$data$texts.home) === null || _window2$data$texts$h === void 0 ? void 0 : _window2$data$texts$h.subHeadingText
  }), /*#__PURE__*/react.createElement(ContentRegion, null));
};
;// CONCATENATED MODULE: ./src/modules/Home.jsx
// Imports



var rootNode = document.getElementById('content-hub--home');

if (rootNode) {
  client.createRoot(rootNode).render( /*#__PURE__*/react.createElement(react.StrictMode, null, /*#__PURE__*/react.createElement(Home, null)));
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
/******/ 		__webpack_require__.j = 171;
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
/******/ 			171: 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [121], function() { return __webpack_require__(6130); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=chHome.js.map