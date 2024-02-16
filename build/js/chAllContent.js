/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 5230:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(4916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(4765);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(9826);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(8309);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(1249);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(2526);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(1817);
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
// EXTERNAL MODULE: ./src/modules/Home/PageHeading.jsx
var PageHeading = __webpack_require__(7774);
// EXTERNAL MODULE: ./src/modules/Filters/StatusFilter.jsx
var StatusFilter = __webpack_require__(1948);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./src/modules/Filters/DateFilter.jsx













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var DateRangeFilter = function DateRangeFilter(props) {
  var _useState = (0,react.useState)(props.selectedValue),
      _useState2 = _slicedToArray(_useState, 2),
      selectedRange = _useState2[0],
      setSelectedRange = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  var wrapperRef = (0,react.useRef)(null);

  var _useState5 = (0,react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      statusOptions = _useState6[0],
      setStatusOptions = _useState6[1];

  var _useState7 = (0,react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isLoading = _useState8[0],
      setIsLoading = _useState8[1]; // Loader flag


  var handleRangeChange = function handleRangeChange(value, option) {
    setSelectedRange(value);
    handleClose();
    props.onChange('date', option.toggleUrl, option.label);
  };

  var handleOpen = function handleOpen() {
    return setOpen(true);
  };

  var handleClose = function handleClose() {
    return setOpen(false);
  };

  (0,react.useEffect)(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return function () {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  (0,react.useEffect)(function () {
    if (props.facets) {
      setStatusOptions(props.facets);
      setIsLoading(false);
      console.log('DATE OPTIONS', props.facets);
    } else {
      setIsLoading(true);
    }
  }, [props.facets]);
  return !isLoading && /*#__PURE__*/react.createElement("div", {
    className: "su-flex-[calc(100%/3)_1_1]"
  }, /*#__PURE__*/react.createElement("label", {
    htmlFor: "date-filter",
    className: "su-block su-text-18 su-font-bold su-leading-[2] su-mb-10"
  }, "Date Range"), /*#__PURE__*/react.createElement("div", {
    className: "c-select su-min-w-full"
  }, /*#__PURE__*/react.createElement("select", {
    className: "su-opacity-0 su-float-right su-border-0 su-w-0 su-h-0 su-p-0 su-m-0",
    name: "f.date|d",
    id: "date-filter",
    value: selectedRange // onChange={(e) => handleRangeChange(e.target.value)}

  }, statusOptions.map(function (option) {
    return /*#__PURE__*/react.createElement("option", {
      key: option.label,
      value: option.label
    }, option.label);
  })), /*#__PURE__*/react.createElement("div", {
    className: "c-wrapper su-relative su-group ".concat(open ? 'open' : ''),
    ref: wrapperRef
  }, /*#__PURE__*/react.createElement("button", {
    className: "c-button su-transition-none group-[.open]:su-mb-1 group-[.open]:su-border-b-transparent group-[.open]:su-rounded-b-none su-leading-[3.6rem] su-pr-20 su-w-full su-text-18 su-flex su-items-center su-justify-between su-text-left su-bg-white su-font-regular hover:su-bg-white hover:su-border-gray hover:su-text-black",
    "aria-expanded": "false",
    onClick: handleOpen
  }, /*#__PURE__*/react.createElement("span", {
    className: "su-mr-10"
  }, selectedRange), /*#__PURE__*/react.createElement("img", {
    className: "su-inline su-ml-6",
    alt: "",
    src: __webpack_require__(1466)
  })), /*#__PURE__*/react.createElement("div", {
    className: "su-z-10 ".concat(open ? 'su-block' : 'su-hidden', " su-overflow-y-auto su-absolute su-border-t-0 su-border su-border-gray su-w-full su-bg-white su-rounded-b su-top-full")
  }, /*#__PURE__*/react.createElement("ul", {
    className: "su-z-10 c-list su-max-h-[209px] su-overflow-y-auto su-p-0 su-list-none"
  }, statusOptions.map(function (option) {
    return /*#__PURE__*/react.createElement("li", {
      key: option.label,
      role: "button",
      "data-value": option.label,
      className: "su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light ".concat(option.label === selectedRange ? 'su-bg-gray-light' : ''),
      tabIndex: "-1",
      onClick: function onClick() {
        return handleRangeChange(option.label, option);
      }
    }, option.label);
  }))))));
};
DateRangeFilter.propTypes = {
  facets: prop_types.PropTypes.array,
  onChange: prop_types.PropTypes.func
};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(7327);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(6699);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(2023);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(5306);
;// CONCATENATED MODULE: ./src/modules/Filters/CPFilter.jsx

















function CPFilter_slicedToArray(arr, i) { return CPFilter_arrayWithHoles(arr) || CPFilter_iterableToArrayLimit(arr, i) || CPFilter_unsupportedIterableToArray(arr, i) || CPFilter_nonIterableRest(); }

function CPFilter_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function CPFilter_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return CPFilter_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return CPFilter_arrayLikeToArray(o, minLen); }

function CPFilter_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function CPFilter_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function CPFilter_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var CPFilter = function CPFilter(props) {
  var _useState = (0,react.useState)(''),
      _useState2 = CPFilter_slicedToArray(_useState, 2),
      selectedPartner = _useState2[0],
      setSelectedPartner = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = CPFilter_slicedToArray(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  var wrapperRef = (0,react.useRef)(null);

  var _useState5 = (0,react.useState)([]),
      _useState6 = CPFilter_slicedToArray(_useState5, 2),
      statusOptions = _useState6[0],
      setStatusOptions = _useState6[1];

  var _useState7 = (0,react.useState)(false),
      _useState8 = CPFilter_slicedToArray(_useState7, 2),
      isLoading = _useState8[0],
      setIsLoading = _useState8[1]; // Loader flag


  var _useState9 = (0,react.useState)(''),
      _useState10 = CPFilter_slicedToArray(_useState9, 2),
      searchInput = _useState10[0],
      setSearchInput = _useState10[1];

  var handleChange = function handleChange(value, partner) {
    setSelectedPartner(value);
    handleClose(); // console.log('CP FILTER partner: ', partner.toggleUrl);

    props.onChange('CP', partner.toggleUrl);
  };

  var onInputChange = function onInputChange(e) {
    var inputValue = e.target.value;
    setSearchInput(inputValue);
    var filteredOptions = props.facets.filter(function (partner) {
      return partner.label.replace(/&amp;/g, '&').toLowerCase().includes(inputValue.toLowerCase());
    });
    setStatusOptions(filteredOptions);
  };

  var handleOpen = function handleOpen() {
    return setOpen(true);
  };

  var handleClose = function handleClose() {
    return setOpen(false);
  };

  (0,react.useEffect)(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return function () {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  (0,react.useEffect)(function () {
    if (props.facets) {
      setStatusOptions(props.facets);
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [props.facets]);
  return !isLoading && /*#__PURE__*/react.createElement("div", {
    className: "c-select c-select--search su-min-w-full"
  }, /*#__PURE__*/react.createElement("select", {
    className: "su-opacity-0 su-float-right su-border-0 su-w-0 su-h-0 su-p-0 su-m-0",
    name: "f.contentPartner%7CtaxonomyContentPartnerText",
    id: "cp-filter",
    value: selectedPartner // onChange={(e) => handleChange(e.target.value, e)}

  }, /*#__PURE__*/react.createElement("option", {
    value: ""
  }, "-- Choose Content Partner --"), statusOptions.map(function (partner) {
    return /*#__PURE__*/react.createElement("option", {
      key: partner.label,
      value: partner.label
    }, partner.label);
  })), /*#__PURE__*/react.createElement("div", {
    ref: wrapperRef,
    className: "c-wrapper su-relative su-group ".concat(open ? 'open' : '')
  }, /*#__PURE__*/react.createElement("button", {
    className: "c-button su-transition-none group-[.open]:su-mb-1 group-[.open]:su-border-b-transparent group-[.open]:su-rounded-b-none su-leading-[3.6rem] su-pr-20 su-w-full su-text-18 su-flex su-items-center su-justify-between su-text-left su-bg-white su-font-regular hover:su-bg-white hover:su-border-gray hover:su-text-black",
    "aria-expanded": open,
    onClick: handleOpen
  }, /*#__PURE__*/react.createElement("span", {
    className: "su-mr-10 su-line-clamp-1"
  }, selectedPartner || '-- Choose Content Partner --'), /*#__PURE__*/react.createElement("img", {
    className: "su-inline su-ml-6",
    alt: "",
    src: __webpack_require__(1466)
  })), /*#__PURE__*/react.createElement("div", {
    className: "u-z-10 ".concat(open ? 'su-block' : 'su-hidden', " group-[.open]:su-block su-overflow-y-auto su-absolute su-border-t-0 su-border su-border-gray su-w-full su-bg-white su-rounded-b su-top-full")
  }, /*#__PURE__*/react.createElement("div", {
    className: "su-leading-[3.6rem] su-px-8 su-pt-4 su-pb-8"
  }, /*#__PURE__*/react.createElement("input", {
    className: "su-w-full su-rounded su-border-gray su-text-18 su-py-8 focus:su-border-red focus:su-ring-red",
    placeholder: "Search",
    type: "text",
    name: "cp-search",
    id: "cp-search",
    value: searchInput,
    onChange: onInputChange
  })), /*#__PURE__*/react.createElement("ul", {
    className: "su-z-10 c-list su-max-h-[209px] su-overflow-y-auto su-p-0 su-list-none"
  }, statusOptions.map(function (partner) {
    return /*#__PURE__*/react.createElement("li", {
      key: partner.label,
      "data-value": partner.data,
      role: "button",
      className: "su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light",
      tabIndex: "0",
      onClick: function onClick(e) {
        return handleChange(partner.label, partner);
      }
    }, partner.label.replace(/&amp;/g, '&'));
  })))));
};
// EXTERNAL MODULE: ./src/modules/Helpers/requests.js
var requests = __webpack_require__(9072);
// EXTERNAL MODULE: ./src/modules/Filters/SortByFilter.jsx
var SortByFilter = __webpack_require__(7009);
// EXTERNAL MODULE: ./src/modules/Card/Card.jsx
var Card = __webpack_require__(8649);
// EXTERNAL MODULE: ./src/modules/_ReactApp/Pagination/Pagination.jsx
var Pagination = __webpack_require__(5569);
;// CONCATENATED MODULE: ./src/modules/Search/SearchBar.jsx












function SearchBar_slicedToArray(arr, i) { return SearchBar_arrayWithHoles(arr) || SearchBar_iterableToArrayLimit(arr, i) || SearchBar_unsupportedIterableToArray(arr, i) || SearchBar_nonIterableRest(); }

function SearchBar_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function SearchBar_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return SearchBar_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SearchBar_arrayLikeToArray(o, minLen); }

function SearchBar_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function SearchBar_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function SearchBar_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var SearchBar = function SearchBar(props) {
  var _useState = (0,react.useState)(props.selectedValue),
      _useState2 = SearchBar_slicedToArray(_useState, 2),
      searchQuery = _useState2[0],
      setSearchQuery = _useState2[1];

  var handleInputChange = function handleInputChange(event) {
    setSearchQuery(event.target.value);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setSearchQuery(event.target.value);
    props.onChange('search', searchQuery);
  };

  return /*#__PURE__*/react.createElement("form", {
    id: "all-content",
    className: "su-flex su-justify-center su-items-center su-gap-xs su-mb-80",
    action: "?",
    method: "get",
    onSubmit: function onSubmit(e) {
      return handleSubmit(e);
    }
  }, /*#__PURE__*/react.createElement("input", {
    type: "text",
    name: "query",
    id: "search",
    placeholder: "Search Content from over 20 content partners",
    className: "su-w-full su-max-w-[540px] su-text-18 sm:su-text-22 md:su-text-25 su-bg-transparent su-leading-display su-px-20 su-pt-12 su-pb-18 su-text-gray-dark su-border-2 su-border-transparent su-border-b-2 su-border-b-gray focus:su-ring-0 focus:su-border-gray focus:su-shadow-none su-shadow-transparent focus:su-outline-none",
    autoComplete: "off",
    value: searchQuery,
    onChange: function onChange(e) {
      return handleInputChange(e);
    },
    "aria-label": "content search"
  }), /*#__PURE__*/react.createElement("button", {
    className: "su-bg-transparent su-p-0 su-border-none hover:su-bg-transparent hover:su-border-none",
    type: "submit",
    "aria-label": "submit"
  }, /*#__PURE__*/react.createElement("span", {
    className: "sr-only"
  }, "Search"), /*#__PURE__*/react.createElement("img", {
    className: "su-bg-red su-p-7 su-rounded-full",
    src: "https://sug-web.matrix.squiz.cloud/__data/assets/file/0023/31982/search.svg",
    alt: ""
  })));
};
SearchBar.propTypes = {
  onChange: (prop_types_default()).func,
  selectedValue: (prop_types_default()).string
};
// EXTERNAL MODULE: ./src/modules/Filters/SelectedFilters.jsx
var SelectedFilters = __webpack_require__(5634);
// EXTERNAL MODULE: ./src/modules/Helpers/helperFunctions.js
var helperFunctions = __webpack_require__(6859);
// EXTERNAL MODULE: ./node_modules/react-loader-spinner/dist/module.js + 5 modules
var dist_module = __webpack_require__(6665);
// EXTERNAL MODULE: ./node_modules/react-router-dom/index.js
var react_router_dom = __webpack_require__(9342);
;// CONCATENATED MODULE: ./src/modules/AllContent/AllContent.jsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }























function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function AllContent_slicedToArray(arr, i) { return AllContent_arrayWithHoles(arr) || AllContent_iterableToArrayLimit(arr, i) || AllContent_unsupportedIterableToArray(arr, i) || AllContent_nonIterableRest(); }

function AllContent_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function AllContent_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return AllContent_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return AllContent_arrayLikeToArray(o, minLen); }

function AllContent_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function AllContent_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function AllContent_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















var AllContent = function AllContent() {
  var _window2, _window2$data, _window2$data$texts, _window2$data$texts$a, _window3, _window3$data, _window3$data$texts, _window3$data$texts$n;

  var _useState = (0,react.useState)(false),
      _useState2 = AllContent_slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1]; // Loader flag


  var _useState3 = (0,react.useState)([]),
      _useState4 = AllContent_slicedToArray(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1]; // data from endpoint


  var _useState5 = (0,react.useState)([]),
      _useState6 = AllContent_slicedToArray(_useState5, 2),
      userData = _useState6[0],
      setUserData = _useState6[1]; // user data from endpoint


  var _useState7 = (0,react.useState)([]),
      _useState8 = AllContent_slicedToArray(_useState7, 2),
      CPLabels = _useState8[0],
      setCPLabels = _useState8[1];

  var _useState9 = (0,react.useState)([]),
      _useState10 = AllContent_slicedToArray(_useState9, 2),
      facets = _useState10[0],
      setFacets = _useState10[1];

  var _useState11 = (0,react.useState)([]),
      _useState12 = AllContent_slicedToArray(_useState11, 2),
      statusLabel = _useState12[0],
      setStatusLabels = _useState12[1];

  var _useState13 = (0,react.useState)([]),
      _useState14 = AllContent_slicedToArray(_useState13, 2),
      dateLabel = _useState14[0],
      setDateLabels = _useState14[1];

  var _useState15 = (0,react.useState)([]),
      _useState16 = AllContent_slicedToArray(_useState15, 2),
      resultsSummary = _useState16[0],
      setResultsSummary = _useState16[1];

  var _useState17 = (0,react.useState)([]),
      _useState18 = AllContent_slicedToArray(_useState17, 2),
      results = _useState18[0],
      setResults = _useState18[1]; // data from endpoint


  var _useState19 = (0,react.useState)([]),
      _useState20 = AllContent_slicedToArray(_useState19, 2),
      queryParams = _useState20[0],
      setQueryParams = _useState20[1];

  var _useState21 = (0,react.useState)('https://dxp-us-stage-search.funnelback.squiz.cloud/s/search.json'),
      _useState22 = AllContent_slicedToArray(_useState21, 2),
      baseUrl = _useState22[0],
      setUrl = _useState22[1];

  var _useState23 = (0,react.useState)(''),
      _useState24 = AllContent_slicedToArray(_useState23, 2),
      dataLocation = _useState24[0],
      setDataLocation = _useState24[1];

  var _useState25 = (0,react.useState)('Select an option'),
      _useState26 = AllContent_slicedToArray(_useState25, 2),
      sortBySelected = _useState26[0],
      setSortBySelected = _useState26[1];

  var _useState27 = (0,react.useState)('All'),
      _useState28 = AllContent_slicedToArray(_useState27, 2),
      statusSelected = _useState28[0],
      setStatusSelected = _useState28[1];

  var _useState29 = (0,react.useState)('All'),
      _useState30 = AllContent_slicedToArray(_useState29, 2),
      dateSelected = _useState30[0],
      setDateSelected = _useState30[1];

  var _useState31 = (0,react.useState)(''),
      _useState32 = AllContent_slicedToArray(_useState31, 2),
      query = _useState32[0],
      setQuery = _useState32[1];

  var fetchData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, func) {
      var d, params, _d2, _params;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsLoading(true); // replace with getSearchData from requests.js with blank query once CORS is resolved

              if (!(func == 'fb')) {
                _context.next = 27;
                break;
              }

              _context.prev = 2;
              _context.next = 5;
              return (0,requests/* fetchFBData */.gV)(url);

            case 5:
              d = _context.sent;
              setStatusLabels(d.response.facets[1].allValues);
              setCPLabels(d.response.facets[2].allValues);
              setDateLabels(d.response.facets[0].allValues);
              setFacets(d.response.facets);
              setData(d);
              setResults(d.response.resultPacket.results);
              setResultsSummary(d.response.resultPacket.resultsSummary);
              params = (0,helperFunctions/* getQueryStringParams */.hp)(url);
              setQueryParams(params);
              setQuery(d.question.query == '!nullquery' ? '' : d.question.query);
              console.log('REQUEST FUNCTION data in all content: ', d);
              _context.next = 22;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](2);
              console.error('Error fetching data:', _context.t0);

            case 22:
              _context.prev = 22;
              setIsLoading(false);
              return _context.finish(22);

            case 25:
              _context.next = 49;
              break;

            case 27:
              _context.prev = 27;
              _context.next = 30;
              return (0,requests/* getSearchData */.Im)(url, '');

            case 30:
              _d2 = _context.sent;
              setStatusLabels(_d2.response.facets[1].allValues);
              setCPLabels(_d2.response.facets[2].allValues);
              setDateLabels(_d2.response.facets[0].allValues);
              setFacets(_d2.response.facets);
              setData(_d2);
              setResults(_d2.response.resultPacket.results);
              setResultsSummary(_d2.response.resultPacket.resultsSummary);
              _params = (0,helperFunctions/* getQueryStringParams */.hp)(url);
              setQueryParams(_params);
              console.log('REQUEST FUNCTION data in all content matrix: ', _d2);
              _context.next = 46;
              break;

            case 43:
              _context.prev = 43;
              _context.t1 = _context["catch"](27);
              console.error('Error fetching data:', _context.t1);

            case 46:
              _context.prev = 46;
              setIsLoading(false);
              return _context.finish(46);

            case 49:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 19, 22, 25], [27, 43, 46, 49]]);
    }));

    return function fetchData(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  (0,react.useEffect)(function () {
    var _window, _window$data, _window$data$contentH;

    var url = (_window = window) === null || _window === void 0 ? void 0 : (_window$data = _window.data) === null || _window$data === void 0 ? void 0 : (_window$data$contentH = _window$data.contentHubAPI) === null || _window$data$contentH === void 0 ? void 0 : _window$data$contentH.search;

    if (url) {
      fetchData('allContent', 'matrix'); // getSearchData('newContent', '');

      setDataLocation('matrix');
      setUrl(url);
    } else {
      fetchData('https://dxp-us-stage-search.funnelback.squiz.cloud/s/search.json?profile=search&collection=sug~sp-stanford-university-content-hub&num_ranks=10&start_rank=1&sort=dmetamtxCreated&&query=!nullquery', 'fb');
      setDataLocation('fb');
    }
  }, []);

  var onChange = function onChange(name, value, selectedVal) {
    console.log('ON CHANGE: ', name, ' || ', value, '    ||    ', selectedVal);

    if (name == 'search') {
      var newParams = queryParams;
      var queryParam = newParams.find(function (param) {
        return param.name === 'query';
      });

      if (queryParam) {
        if (value == '' || value.length < 1) {
          queryParam.value = '!nullquery';
        } else {
          queryParam.value = value;
        }
      } else {
        newParams.push({
          name: 'query',
          value: value
        });
      }

      setQueryParams(newParams);
      var fetchUrl = baseUrl + '?' + (0,helperFunctions/* createUrl */.uJ)(queryParams);
      console.log('CREATED URL: ', fetchUrl);
      fetchData(fetchUrl, dataLocation);
    } else if (name == 'pagination') {
      var _newParams = queryParams;

      var hasStartRank = _newParams.find(function (entry) {
        return entry.name === 'start_rank';
      });

      if (!hasStartRank) {
        queryParams.push({
          name: 'start_rank',
          value: value
        });
      } else {
        hasStartRank.value = value;
      }

      setQueryParams(_newParams);

      var _fetchUrl = baseUrl + '?' + (0,helperFunctions/* createUrl */.uJ)(queryParams);

      console.log('CREATED URL: ', _fetchUrl);
      fetchData(_fetchUrl, dataLocation);
    } else if (name == 'sortBy') {
      var _newParams2 = queryParams;
      var selected = value === 'dmetamtxCreated' ? 'Newest to Oldest' : 'Oldest to Newest';
      setSortBySelected(selected);

      var sortBy = _newParams2.find(function (entry) {
        return entry.name === 'sort';
      });

      if (!sortBy) {
        queryParams.push({
          name: 'sort',
          value: value
        });
      } else {
        sortBy.value = value;
      }

      setQueryParams(_newParams2);

      var _fetchUrl2 = baseUrl + '?' + (0,helperFunctions/* createUrl */.uJ)(queryParams);

      console.log('CREATED URL sort: ', _fetchUrl2);
      fetchData(_fetchUrl2, dataLocation);
    } else {
      if (name == 'status') {
        var _selected = (0,helperFunctions/* getLabel */.id)(selectedVal);

        setStatusSelected(_selected);
      } else if (name == 'date') {
        var _selected2 = selectedVal;
        setDateSelected(_selected2);
      }

      if (name == 'unselect') {
        console.log('check');

        if (selectedVal == 'hubStatus') {
          setStatusSelected('All');
        } else if (selectedVal == 'date') {
          setDateSelected('All');
        }
      }

      var _fetchUrl3 = baseUrl + value;

      fetchData(_fetchUrl3, dataLocation);
    }
  };

  return isLoading ? /*#__PURE__*/react.createElement(dist_module/* Oval */.iT, {
    visible: true,
    height: "80",
    width: "80",
    color: "#B1040E",
    secondaryColor: "gray",
    ariaLabel: "oval-loading"
  }) : /*#__PURE__*/react.createElement("div", {
    className: "su-col-span-full xl:su-col-start-2 xl:su-col-span-10"
  }, /*#__PURE__*/react.createElement(PageHeading/* PageHeading */.C, {
    headingText: (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$data = _window2.data) === null || _window2$data === void 0 ? void 0 : (_window2$data$texts = _window2$data.texts) === null || _window2$data$texts === void 0 ? void 0 : (_window2$data$texts$a = _window2$data$texts.allcontent) === null || _window2$data$texts$a === void 0 ? void 0 : _window2$data$texts$a.headingText,
    subHeadingText: (_window3 = window) === null || _window3 === void 0 ? void 0 : (_window3$data = _window3.data) === null || _window3$data === void 0 ? void 0 : (_window3$data$texts = _window3$data.texts) === null || _window3$data$texts === void 0 ? void 0 : (_window3$data$texts$n = _window3$data$texts.newcontent) === null || _window3$data$texts$n === void 0 ? void 0 : _window3$data$texts$n.subHeadingText,
    homeButton: true
  }), /*#__PURE__*/react.createElement(SearchBar, {
    onChange: onChange,
    selectedValue: query
  }), /*#__PURE__*/react.createElement("section", null, /*#__PURE__*/react.createElement("div", {
    className: "su-mb-20"
  }, /*#__PURE__*/react.createElement("div", {
    className: "su-flex su-flex-col lg:su-flex-row su-gap-xs"
  }, /*#__PURE__*/react.createElement("div", {
    className: "su-flex-[calc(100%/3)_1_1]"
  }, /*#__PURE__*/react.createElement("label", {
    htmlFor: "cp-filter",
    className: "su-block su-text-18 su-font-bold su-leading-[2] su-mb-10"
  }, "Content partners"), /*#__PURE__*/react.createElement("div", {
    className: "undefined"
  }, /*#__PURE__*/react.createElement(CPFilter, {
    facets: CPLabels,
    onChange: onChange
  }))), /*#__PURE__*/react.createElement(StatusFilter/* StatusFilter */.r, {
    facets: statusLabel,
    onChange: onChange,
    selectedValue: statusSelected
  }), /*#__PURE__*/react.createElement(DateRangeFilter, {
    facets: dateLabel,
    onChange: onChange,
    selectedValue: dateSelected
  })), /*#__PURE__*/react.createElement(SelectedFilters/* SelectedFacets */.w, {
    onChange: onChange,
    facets: facets
  })), /*#__PURE__*/react.createElement("div", {
    className: "su-flex su-flex-col sm:su-flex-row su-gap-y-xs su-justify-between su-mb-20"
  }, /*#__PURE__*/react.createElement("p", {
    className: "su-leading-[2] su-mb-0"
  }, resultsSummary.currStart, "-", resultsSummary.currEnd, " of ", resultsSummary.totalMatching, " results"), /*#__PURE__*/react.createElement("div", {
    className: "su-flex su-shrink-0 su-gap-xs su-items-center"
  }, /*#__PURE__*/react.createElement(SortByFilter/* SortByFilter */.S, {
    onChange: onChange,
    selectedValue: sortBySelected
  }))), /*#__PURE__*/react.createElement("ul", {
    className: "searchResults__items su-flex su-flex-col su-gap-y-xs su-list-none su-p-0 su-m-0 su-mb-60"
  }, results.map(function (contentItem, index) {
    return /*#__PURE__*/react.createElement(react_router_dom/* BrowserRouter */.VK, {
      key: index
    }, /*#__PURE__*/react.createElement(Card/* Card */.Z, {
      key: index,
      data: contentItem
    }));
  })), /*#__PURE__*/react.createElement(Pagination/* Pagination */.t, {
    data: data,
    summary: resultsSummary,
    onChange: onChange
  })));
};
;// CONCATENATED MODULE: ./src/modules/AllContent.jsx
// Imports



var rootNode = document.getElementById('content-hub--all-content');

if (rootNode) {
  client.createRoot(rootNode).render( /*#__PURE__*/react.createElement(react.StrictMode, null, /*#__PURE__*/react.createElement(AllContent, null)));
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
/******/ 		__webpack_require__.j = 690;
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
/******/ 			690: 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [736], function() { return __webpack_require__(5230); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=chAllContent.js.map