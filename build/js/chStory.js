/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 7463:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
;// CONCATENATED MODULE: ./src/modules/Story/StoryView.jsx

var StoryView = function StoryView() {
  return /*#__PURE__*/react.createElement("div", {
    className: "su-col-span-full xl:su-col-start-2 xl:su-col-span-10",
    id: "view-story",
    "data-id": "128004"
  }, /*#__PURE__*/react.createElement("section", {
    className: "su-relative su-border-b su-border-gray su-mt-60 su-mb-50 su-pb-[5.5rem] su-pt-60 md:su-mt-45 md:su-pt-70"
  }, /*#__PURE__*/react.createElement("div", {
    className: "su-absolute su-top-0 su-left-0 lg:su-left-[-64px]"
  }, /*#__PURE__*/react.createElement("a", {
    className: "su-flex su-items-center su-text-[18px] hover:su-underline",
    href: "https://sug-web.matrix.squiz.cloud/content/home-page"
  }, /*#__PURE__*/react.createElement("svg", {
    className: "su-mr-6",
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M8.33333 15.8337L2.5 10.0003M2.5 10.0003L8.33334 4.16699M2.5 10.0003L17.5 10.0003",
    stroke: "#E50808",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), "Back to Home Page")), /*#__PURE__*/react.createElement("div", {
    className: "su-flex su-flex-col lg:su-flex-row su-gap-xs su-justify-between su-items-center"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "su-font-serif su-mb-0"
  }, "View Story"), /*#__PURE__*/react.createElement("div", {
    className: "su-flex su-flex-col sm:su-flex-row su-items-center su-gap-[10px]"
  }, /*#__PURE__*/react.createElement("button", {
    className: "button-green js-action--send-to-sr c-button-send"
  }, "Send to Stanford Report"), ' ', /*#__PURE__*/react.createElement("button", {
    className: "c-button-decline js-action--decline"
  }, "Decline"), /*#__PURE__*/react.createElement("dialog", {
    "data-id": "128004",
    className: "c-dialog-send su-fixed su-p-0 su-rounded su-border-gray su-bg-white su-w-full su-max-w-[57.4rem]"
  }, /*#__PURE__*/react.createElement("button", {
    "aria-label": "close",
    className: "su-w-[23px] su-h-[23px] su-p-0 su-absolute su-right-15 su-top-15 su-border-none su-flex su-items-center su-justify-center hover:su-bg-transparent"
  }, /*#__PURE__*/react.createElement("svg", {
    className: "",
    xmlns: "http://www.w3.org/2000/svg",
    width: "13",
    height: "13",
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M12.0554 1.9502L1.94434 11.0502",
    stroke: "#E50808",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M1.94434 1.9502L12.0554 11.0502",
    stroke: "#E50808",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "c-dialog-body su-p-30 sm:su-p-60"
  }, /*#__PURE__*/react.createElement("h3", {
    className: "su-mb-0 su-font-serif su-text-center su-tracking-normal"
  }, "You are accepting this story for publication on Stanford Report"), /*#__PURE__*/react.createElement("div", {
    className: "su-mt-40 su-flex su-flex-col sm:su-flex-row su-gap-[15px] su-justify-center"
  }, /*#__PURE__*/react.createElement("button", {
    "aria-label": "Send teaser",
    className: "button-green js-send-teaser"
  }, "Send Teaser"), /*#__PURE__*/react.createElement("button", {
    "aria-label": "Send full content",
    className: "button-green js-send-content"
  }, "Send Full Content"), /*#__PURE__*/react.createElement("button", {
    "aria-label": "cancel",
    className: "js-decline"
  }, "Cancel")))), /*#__PURE__*/react.createElement("dialog", {
    "data-id": "128004",
    className: "c-dialog-decline su-fixed su-p-0 su-rounded su-border-gray su-bg-white su-w-full su-max-w-[57.4rem]"
  }, /*#__PURE__*/react.createElement("button", {
    "aria-label": "close",
    className: "su-w-[23px] su-h-[23px] su-p-0 su-absolute su-right-15 su-top-15 su-border-none su-flex su-items-center su-justify-center hover:su-bg-transparent"
  }, /*#__PURE__*/react.createElement("svg", {
    className: "",
    xmlns: "http://www.w3.org/2000/svg",
    width: "13",
    height: "13",
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M12.0554 1.9502L1.94434 11.0502",
    stroke: "#E50808",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M1.94434 1.9502L12.0554 11.0502",
    stroke: "#E50808",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "c-dialog-body su-p-30 sm:su-p-60"
  }, /*#__PURE__*/react.createElement("h3", {
    className: "su-mb-10 su-font-serif su-leading-[125%] su-text-center"
  }, "You are declining this story"), /*#__PURE__*/react.createElement("p", {
    className: "su-mb-10 su-leading-[125%] su-text-center"
  }, "Add optional note (viewable by content partner)"), /*#__PURE__*/react.createElement("textarea", {
    className: "su-resize-none su-leading-display su-mx-2 su-p-16 su-text-16 su-bg-gray-bg su-rounded su-border-gray su-w-full su-max-w-[450px] su-max-h-[100px]",
    name: "message-128004",
    id: "",
    rows: "5",
    autoComplete: "off",
    "aria-label": "Optional note (viewable by content partner)"
  }), /*#__PURE__*/react.createElement("div", {
    className: "su-mt-40 su-flex su-flex-col sm:su-flex-row su-gap-[15px] su-justify-center"
  }, /*#__PURE__*/react.createElement("button", {
    "aria-label": "confirm decline",
    className: "button-green js-decline-true"
  }, "Yes, Decline"), /*#__PURE__*/react.createElement("button", {
    "aria-label": "cancel",
    className: "js-decline-false"
  }, "Cancel")))), ' ', /*#__PURE__*/react.createElement("span", {
    id: "js-story-reviewing",
    "data-value": "true"
  })))), /*#__PURE__*/react.createElement("section", {
    className: "su-flex su-flex-col su-gap-[30px] su-mb-80"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("p", {
    className: "small-heading"
  }, "Headline"), /*#__PURE__*/react.createElement("h2", {
    className: "su-py-20 su-mb-0"
  }, "A team of scientists invent a method to modify the behavior of cells")), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("p", {
    className: "small-heading"
  }, "Summary"), /*#__PURE__*/react.createElement("p", {
    className: "su-mb-0 su-py-20 su-leading-normal"
  }, "To demonstrate the new technique, researchers genetically reprogrammed neurons to cover themselves with an artificial mesh that changed their electrochemical functions.")), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("ul", {
    className: "su-m-0 su-p-0 su-list-none su-gap-y-[12px] sm:su-gap-y-[24px] su-gap-x-[24px] md:su-gap-x-2xl su-grid su-grid-cols-1 sm:su-grid-cols-2"
  }, /*#__PURE__*/react.createElement("li", {
    className: "mb-0"
  }, /*#__PURE__*/react.createElement("p", {
    className: "su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8"
  }, "Main Category"), /*#__PURE__*/react.createElement("p", {
    className: "su-leading-[3.6rem] su-mb-0"
  }, /*#__PURE__*/react.createElement("em", null, "N/A"))), /*#__PURE__*/react.createElement("li", {
    className: "mb-0"
  }, /*#__PURE__*/react.createElement("p", {
    className: "su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8"
  }, "Submitted by"), /*#__PURE__*/react.createElement("p", {
    className: "su-leading-[3.6rem] su-mb-0"
  }, "School of Engineering")), /*#__PURE__*/react.createElement("li", {
    className: "mb-0"
  }, /*#__PURE__*/react.createElement("p", {
    className: "su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8"
  }, "Byline"), /*#__PURE__*/react.createElement("p", {
    className: "su-leading-[3.6rem] su-mb-0"
  }, "Tom Abate")), /*#__PURE__*/react.createElement("li", {
    className: "mb-0"
  }, /*#__PURE__*/react.createElement("p", {
    className: "su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8"
  }, "Submitted on"), /*#__PURE__*/react.createElement("p", {
    className: "su-leading-[3.6rem] su-mb-0"
  }, "January 15, 2024")), /*#__PURE__*/react.createElement("li", {
    className: "mb-0"
  }, /*#__PURE__*/react.createElement("p", {
    className: "su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8"
  }, "Other Topics"), /*#__PURE__*/react.createElement("p", {
    className: "su-leading-[3.6rem] su-mb-0"
  }, /*#__PURE__*/react.createElement("em", null, "N/A"))), /*#__PURE__*/react.createElement("li", {
    className: "mb-0"
  }, /*#__PURE__*/react.createElement("p", {
    className: "su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8"
  }, "First Published"), /*#__PURE__*/react.createElement("p", {
    className: "su-leading-[3.6rem] su-mb-0"
  }, "March 24, 2020")), /*#__PURE__*/react.createElement("li", {
    className: "mb-0"
  }, /*#__PURE__*/react.createElement("p", {
    className: "su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8"
  }, "Other keywords"), /*#__PURE__*/react.createElement("p", {
    className: "su-leading-[3.6rem] su-mb-0"
  }, /*#__PURE__*/react.createElement("em", null, "N/A"))))), /*#__PURE__*/react.createElement("div", {
    className: "su-mb-15 su-pb-45 su su-border-b su-flex su-flex-col su-gap-[10px] su-border-gray"
  }, /*#__PURE__*/react.createElement("p", {
    className: "small-heading su-m-0 su-p-0"
  }, "Original URL"), /*#__PURE__*/react.createElement("p", {
    className: "su-mb-10 su-py-20"
  }, /*#__PURE__*/react.createElement("a", {
    id: "story-link",
    href: "https://engineering.stanford.edu/magazine/article/team-scientists-invent-method-modify-behavior-cells",
    className: "su-underline hover:su-cursor-pointer su-break-words",
    target: "_blank",
    rel: "noreferrer"
  }, "https://engineering.stanford.edu/magazine/article/team-scientists-invent-method-modify-behavior-cells")), /*#__PURE__*/react.createElement("div", {
    className: "su-flex su-flex-col sm:su-flex-row su-gap-[10px]"
  }, /*#__PURE__*/react.createElement("a", {
    id: "story-mtx-link",
    className: "button su-group su-flex -su-tracking-[0.176px] su-items-center su-justify-center sm:su-justify-start",
    href: "https://sug-web.matrix.squiz.cloud/content/stories/content-partners/stanford-engineering/a-team-of-scientists-invent-a-method-to-modify-the-behavior-of-cells",
    target: "_blank",
    rel: "noreferrer"
  }, "View full story", /*#__PURE__*/react.createElement("svg", {
    className: "su-ml-5 su-transition-colors su-text-red group-hover:su-text-white",
    width: "18",
    height: "18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.918 4.546a.9.9 0 0 1 .9-.9h7.637a.9.9 0 0 1 .9.9v7.636a.9.9 0 0 1-1.8 0V6.718l-7.373 7.373a.9.9 0 1 1-1.273-1.272l7.373-7.373H5.818a.9.9 0 0 1-.9-.9Z",
    fill: "currentColor"
  })), /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h18v18H0z"
  }))))), /*#__PURE__*/react.createElement("button", {
    className: "js-copy-link su-group su-flex su-items-center -su-tracking-[0.176px] su-justify-center sm:su-justify-start"
  }, "Copy Link", /*#__PURE__*/react.createElement("svg", {
    className: "su-ml-5 su-transition-colors su-text-red group-hover:su-text-white",
    xmlns: "http://www.w3.org/2000/svg",
    width: "19",
    height: "18",
    viewBox: "0 0 19 18",
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.6201 6.87995L14.6591 7.841C14.3036 8.19649 13.7608 8.22842 13.4448 7.91243C13.1288 7.59643 13.1608 7.05366 13.5163 6.69817L14.4394 5.77504C15.0244 5.19006 14.9875 4.20179 14.3572 3.57152C13.727 2.94125 12.7387 2.90439 12.1537 3.48938L8.48886 7.15423C7.90451 7.73857 7.94137 8.72684 8.57164 9.35711C8.88764 9.6731 8.85571 10.2159 8.50021 10.5714C8.14472 10.9269 7.60195 10.9588 7.28596 10.6428C6.02541 9.38225 6.05262 7.3048 7.34603 6.0114L11.0488 2.30862C11.0642 2.29319 11.0802 2.27833 11.0962 2.26469C12.3938 1.05272 14.4098 1.05272 15.6429 2.28583C16.876 3.51895 16.876 5.53491 15.6641 6.8326C15.6504 6.84852 15.6356 6.86452 15.6201 6.87995Z",
    fill: "currentColor"
  }), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.654 11.9889L7.9512 15.6917C7.93577 15.7071 7.91977 15.722 7.90384 15.7356C6.60616 16.9476 4.5902 16.9476 3.35708 15.7145C2.12397 14.4814 2.12397 12.4654 3.33594 11.1677C3.34958 11.1518 3.36444 11.1358 3.37987 11.1204L4.34092 10.1593C4.69641 9.80384 5.23918 9.77192 5.55518 10.0879C5.87117 10.4039 5.83924 10.9467 5.48375 11.3022L4.56063 12.2253C3.97628 12.8096 4.0125 13.7985 4.64277 14.4288C5.27304 15.0591 6.26195 15.0953 6.84629 14.511L10.5111 10.8461C11.0955 10.2618 11.0586 9.2735 10.4284 8.64323C10.1124 8.32723 10.1449 7.78382 10.4998 7.42897C10.8553 7.07347 11.3981 7.04155 11.714 7.35754C12.9746 8.61808 12.948 10.6949 11.654 11.9889Z",
    fill: "currentColor"
  }))))), /*#__PURE__*/react.createElement("div", {
    className: "su-flex su-flex-col su-gap-[10px]"
  })), /*#__PURE__*/react.createElement("section", {
    id: "full-story",
    className: "su-group full-width-bg su-relative [&[class~='open']]:su-pb-120 su-bg-gray-bg before:su-bg-gray-bg after:su-bg-gray-bg"
  }, /*#__PURE__*/react.createElement("div", {
    id: "full-story-toggle",
    className: "su-pb-60 su-pt-80 su-flex su-justify-between su-items-center su-border-gray hover:su-cursor-pointer group-[.open]:su-border-b"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "su-font-serif su-mb-0"
  }, "Full Story"), /*#__PURE__*/react.createElement("button", {
    className: "su-w-50 su-border-none su-bg-transparent hover:su-bg-transparent"
  }, /*#__PURE__*/react.createElement("svg", {
    className: "su-inline group-[.open]:su-rotate-180",
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
    className: "su-hidden group-[.open]:su-flex su-mt-45 su-flex-col su-gap-[30px]"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("p", {
    className: "small-heading"
  }, "Author"), /*#__PURE__*/react.createElement("p", {
    className: "su-py-20 su-mb-0"
  }, "Tom Abate")), /*#__PURE__*/react.createElement("div", {
    className: "su-pb-45  su-border-b su-border-gray "
  }, /*#__PURE__*/react.createElement("p", {
    className: "small-heading"
  }, "Story"), /*#__PURE__*/react.createElement("div", {
    className: "su-py-20 [&>p:last-child]:su-mb-0"
  }, /*#__PURE__*/react.createElement("div", {
    className: "su-py-20 [&>p:last-child]:su-mb-0"
  }, /*#__PURE__*/react.createElement("iframe", {
    id: "story-content-iframe",
    src: "https://sug-web.matrix.squiz.cloud/content/stories/content-partners/stanford-engineering/a-team-of-scientists-invent-a-method-to-modify-the-behavior-of-cells?SQ_DESIGN_NAME=content_only",
    "data-src": "https://sug-web.matrix.squiz.cloud/content/stories/content-partners/stanford-engineering/a-team-of-scientists-invent-a-method-to-modify-the-behavior-of-cells",
    style: "width: 100%; height: 750px; border-color: rgb(201, 201, 201); border-width: 1px; border-style: solid;"
  })))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("p", {
    className: "small-heading su-mb-30"
  }, "Media"), /*#__PURE__*/react.createElement("div", {
    className: "su-mt-40 su-pt-30 first:su-mt-0 first:su-pt-0 su-flex su-flex-col lg:su-flex-row su-gap-xl"
  }, /*#__PURE__*/react.createElement("div", {
    className: "su-flex su-items-center su-justify-center su-w-full lg:su-max-w-[610px] lg:su-max-h-[402px]"
  }, /*#__PURE__*/react.createElement("img", {
    src: "https://sug-web.matrix.squiz.cloud/_media/images/content-partners/stanford-engineering/worker-cells.jpg",
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
  }, "The synthetic mesh (in gold) can change the behavior of neurons shown here.\xA0| Ella Maru Studio and Yoon Seok Kim/Jia Liu, Deisseroth/Bao Labs)")), /*#__PURE__*/react.createElement("li", {
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
  }, "2012x946"))))))));
};
;// CONCATENATED MODULE: ./src/modules/StoryView.jsx
// Imports



var rootNode = document.getElementById('content-hub--story');

if (rootNode) {
  client.createRoot(rootNode).render( /*#__PURE__*/react.createElement(react.StrictMode, null, /*#__PURE__*/react.createElement(StoryView, null)));
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
/******/ 		__webpack_require__.j = 202;
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
/******/ 			202: 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [736], function() { return __webpack_require__(7463); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=chStory.js.map