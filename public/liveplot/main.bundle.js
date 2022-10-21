/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\nhtml, body {\n  font-family: 'Roboto', 'Helvetica', sans-serif;\n  margin: 0;\n  padding: 0;\n}\n.mdl-demo .mdl-layout__header-row {\n  padding-left: 40px;\n}\n.mdl-demo .mdl-layout.is-small-screen .mdl-layout__header-row h3 {\n  font-size: inherit;\n}\n.mdl-demo .mdl-layout__tab-bar-button {\n  display: none;\n}\n.mdl-demo .mdl-layout.is-small-screen .mdl-layout__tab-bar .mdl-button {\n  display: none;\n}\n.mdl-demo .mdl-layout:not(.is-small-screen) .mdl-layout__tab-bar,\n.mdl-demo .mdl-layout:not(.is-small-screen) .mdl-layout__tab-bar-container {\n  overflow: visible;\n}\n.mdl-demo .mdl-layout__tab-bar-container {\n  height: 64px;\n}\n.mdl-demo .mdl-layout__tab-bar {\n  padding: 0;\n  padding-left: 16px;\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n}\n.mdl-demo .mdl-layout__tab-bar .mdl-layout__tab {\n  height: 64px;\n  line-height: 64px;\n}\n.mdl-demo .mdl-layout__tab-bar .mdl-layout__tab.is-active::after {\n  background-color: white;\n  height: 4px;\n}\n.mdl-demo main > .mdl-layout__tab-panel {\n  padding: 8px;\n  padding-top: 24px;\n}\n.mdl-demo .mdl-card {\n  height: auto;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.mdl-demo .mdl-card > * {\n  height: auto;\n}\n.mdl-demo .mdl-card .mdl-card__supporting-text {\n  margin: 40px;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  padding: 0;\n  color: inherit;\n  width: calc(100% - 80px);\n}\n.mdl-demo.mdl-demo .mdl-card__supporting-text h4 {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\n.mdl-demo .mdl-card__actions {\n  margin: 0;\n  padding: 4px 40px;\n  color: inherit;\n}\n.mdl-demo .mdl-card__actions a {\n  color: #00BCD4;\n  margin: 0;\n}\n.mdl-demo .mdl-card__actions a:hover,\n.mdl-demo .mdl-card__actions a:active {\n  color: inherit;\n  background-color: transparent;\n}\n.mdl-demo .mdl-card__supporting-text + .mdl-card__actions {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n}\n.mdl-demo #add {\n  position: absolute;\n  right: 40px;\n  top: 36px;\n  z-index: 999;\n}\n\n.mdl-demo .mdl-layout__content section:not(:last-of-type) {\n  position: relative;\n  margin-bottom: 24px;\n}\n.mdl-demo section.section--center {\n  max-width: 1290px;\n}\n.mdl-demo #features section.section--center {\n  max-width: 620px;\n}\n.mdl-demo section > header{\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.mdl-demo section > .section__play-btn {\n  min-height: 200px;\n}\n.mdl-demo section > header > .material-icons {\n  font-size: 3rem;\n}\n.mdl-demo section > button {\n  position: absolute;\n  z-index: 99;\n  top: 8px;\n  right: 8px;\n}\n.mdl-demo section .section__circle {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-flex-grow: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -webkit-flex-shrink: 1;\n      -ms-flex-negative: 1;\n          flex-shrink: 1;\n}\n.mdl-demo section .section__text {\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n  padding-top: 8px;\n}\n.mdl-demo section .section__text h5 {\n  font-size: inherit;\n  margin: 0;\n  margin-bottom: 0.5em;\n}\n.mdl-demo section .section__text a {\n  text-decoration: none;\n}\n.mdl-demo section .section__circle-container > .section__circle-container__circle {\n  width: 64px;\n  height: 64px;\n  border-radius: 32px;\n  margin: 8px 0;\n}\n.mdl-demo section.section--footer .section__circle--big {\n  width: 100px;\n  height: 100px;\n  border-radius: 50px;\n  margin: 8px 32px;\n}\n.mdl-demo .is-small-screen section.section--footer .section__circle--big {\n  width: 50px;\n  height: 50px;\n  border-radius: 25px;\n  margin: 8px 16px;\n}\n.mdl-demo section.section--footer {\n  padding: 64px 0;\n  margin: 0 -8px -8px -8px;\n}\n.mdl-demo section.section--center .section__text:not(:last-child) {\n  border-bottom: 1px solid rgba(0,0,0,.13);\n}\n.mdl-demo .mdl-card .mdl-card__supporting-text > h3:first-child {\n  margin-bottom: 24px;\n}\n.mdl-demo .mdl-layout__tab-panel:not(#overview) {\n  background-color: white;\n}\n.mdl-demo #features section {\n  margin-bottom: 72px;\n}\n.mdl-demo #features h4, #features h5 {\n  margin-bottom: 16px;\n}\n.mdl-demo .toc {\n  border-left: 4px solid #C1EEF4;\n  margin: 24px;\n  padding: 0;\n  padding-left: 8px;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.mdl-demo .toc h4 {\n  font-size: 0.9rem;\n  margin-top: 0;\n}\n.mdl-demo .toc a {\n  color: #4DD0E1;\n  text-decoration: none;\n  font-size: 16px;\n  line-height: 28px;\n  display: block;\n}\n.mdl-demo .mdl-menu__container {\n  z-index: 99;\n}\n\n.dashboard {\n  min-height: 500px;\n  height: 500px;\n}\n\n.dashboard-plot {\n  height: 80%;\n}\n\n.dashboard-filter {\n  height: 20%;\n}\n\n.bar-plot {\n  min-height: 300px;\n  height: 300px;\n}\n\n.vital-span {\n  display: block;\n  font-weight: bold;\n  font-size: 1.125rem;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;EAcE;;AAEF;EACE,8CAA8C;EAC9C,SAAS;EACT,UAAU;AACZ;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;;EAEE,iBAAiB;AACnB;AACA;EACE,YAAY;AACd;AACA;EACE,UAAU;EACV,kBAAkB;EAClB,sBAAsB;EACtB,YAAY;EACZ,WAAW;AACb;AACA;EACE,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,uBAAuB;EACvB,WAAW;AACb;AACA;EACE,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,YAAY;EACZ,qBAAqB;EACrB,oBAAoB;EACpB,aAAa;EACb,8BAA8B;MAC1B,0BAA0B;UACtB,sBAAsB;AAChC;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;EACZ,oBAAoB;MAChB,oBAAoB;UAChB,YAAY;EACpB,UAAU;EACV,cAAc;EACd,wBAAwB;AAC1B;AACA;EACE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,SAAS;EACT,iBAAiB;EACjB,cAAc;AAChB;AACA;EACE,cAAc;EACd,SAAS;AACX;AACA;;EAEE,cAAc;EACd,6BAA6B;AAC/B;AACA;EACE,yCAAyC;AAC3C;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,qBAAqB;EACrB,oBAAoB;EACpB,aAAa;EACb,2BAA2B;MACvB,sBAAsB;UAClB,mBAAmB;EAC3B,+BAA+B;MAC3B,qBAAqB;UACjB,uBAAuB;AACjC;AACA;EACE,iBAAiB;AACnB;AACA;EACE,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,QAAQ;EACR,UAAU;AACZ;AACA;EACE,qBAAqB;EACrB,oBAAoB;EACpB,aAAa;EACb,2BAA2B;MACvB,sBAAsB;UAClB,mBAAmB;EAC3B,mCAAmC;MAC/B,oBAAoB;UAChB,2BAA2B;EACnC,oBAAoB;MAChB,oBAAoB;UAChB,YAAY;EACpB,sBAAsB;MAClB,oBAAoB;UAChB,cAAc;AACxB;AACA;EACE,oBAAoB;MAChB,oBAAoB;UAChB,YAAY;EACpB,sBAAsB;MAClB,oBAAoB;UAChB,cAAc;EACtB,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,oBAAoB;AACtB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,wBAAwB;AAC1B;AACA;EACE,wCAAwC;AAC1C;AACA;EACE,mBAAmB;AACrB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,8BAA8B;EAC9B,YAAY;EACZ,UAAU;EACV,iBAAiB;EACjB,qBAAqB;EACrB,oBAAoB;EACpB,aAAa;EACb,8BAA8B;MAC1B,0BAA0B;UACtB,sBAAsB;AAChC;AACA;EACE,iBAAiB;EACjB,aAAa;AACf;AACA;EACE,cAAc;EACd,qBAAqB;EACrB,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB;AACA;EACE,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,mBAAmB;AACrB","sourcesContent":["/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\nhtml, body {\n  font-family: 'Roboto', 'Helvetica', sans-serif;\n  margin: 0;\n  padding: 0;\n}\n.mdl-demo .mdl-layout__header-row {\n  padding-left: 40px;\n}\n.mdl-demo .mdl-layout.is-small-screen .mdl-layout__header-row h3 {\n  font-size: inherit;\n}\n.mdl-demo .mdl-layout__tab-bar-button {\n  display: none;\n}\n.mdl-demo .mdl-layout.is-small-screen .mdl-layout__tab-bar .mdl-button {\n  display: none;\n}\n.mdl-demo .mdl-layout:not(.is-small-screen) .mdl-layout__tab-bar,\n.mdl-demo .mdl-layout:not(.is-small-screen) .mdl-layout__tab-bar-container {\n  overflow: visible;\n}\n.mdl-demo .mdl-layout__tab-bar-container {\n  height: 64px;\n}\n.mdl-demo .mdl-layout__tab-bar {\n  padding: 0;\n  padding-left: 16px;\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n}\n.mdl-demo .mdl-layout__tab-bar .mdl-layout__tab {\n  height: 64px;\n  line-height: 64px;\n}\n.mdl-demo .mdl-layout__tab-bar .mdl-layout__tab.is-active::after {\n  background-color: white;\n  height: 4px;\n}\n.mdl-demo main > .mdl-layout__tab-panel {\n  padding: 8px;\n  padding-top: 24px;\n}\n.mdl-demo .mdl-card {\n  height: auto;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.mdl-demo .mdl-card > * {\n  height: auto;\n}\n.mdl-demo .mdl-card .mdl-card__supporting-text {\n  margin: 40px;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  padding: 0;\n  color: inherit;\n  width: calc(100% - 80px);\n}\n.mdl-demo.mdl-demo .mdl-card__supporting-text h4 {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\n.mdl-demo .mdl-card__actions {\n  margin: 0;\n  padding: 4px 40px;\n  color: inherit;\n}\n.mdl-demo .mdl-card__actions a {\n  color: #00BCD4;\n  margin: 0;\n}\n.mdl-demo .mdl-card__actions a:hover,\n.mdl-demo .mdl-card__actions a:active {\n  color: inherit;\n  background-color: transparent;\n}\n.mdl-demo .mdl-card__supporting-text + .mdl-card__actions {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n}\n.mdl-demo #add {\n  position: absolute;\n  right: 40px;\n  top: 36px;\n  z-index: 999;\n}\n\n.mdl-demo .mdl-layout__content section:not(:last-of-type) {\n  position: relative;\n  margin-bottom: 24px;\n}\n.mdl-demo section.section--center {\n  max-width: 1290px;\n}\n.mdl-demo #features section.section--center {\n  max-width: 620px;\n}\n.mdl-demo section > header{\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.mdl-demo section > .section__play-btn {\n  min-height: 200px;\n}\n.mdl-demo section > header > .material-icons {\n  font-size: 3rem;\n}\n.mdl-demo section > button {\n  position: absolute;\n  z-index: 99;\n  top: 8px;\n  right: 8px;\n}\n.mdl-demo section .section__circle {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-flex-grow: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -webkit-flex-shrink: 1;\n      -ms-flex-negative: 1;\n          flex-shrink: 1;\n}\n.mdl-demo section .section__text {\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n  padding-top: 8px;\n}\n.mdl-demo section .section__text h5 {\n  font-size: inherit;\n  margin: 0;\n  margin-bottom: 0.5em;\n}\n.mdl-demo section .section__text a {\n  text-decoration: none;\n}\n.mdl-demo section .section__circle-container > .section__circle-container__circle {\n  width: 64px;\n  height: 64px;\n  border-radius: 32px;\n  margin: 8px 0;\n}\n.mdl-demo section.section--footer .section__circle--big {\n  width: 100px;\n  height: 100px;\n  border-radius: 50px;\n  margin: 8px 32px;\n}\n.mdl-demo .is-small-screen section.section--footer .section__circle--big {\n  width: 50px;\n  height: 50px;\n  border-radius: 25px;\n  margin: 8px 16px;\n}\n.mdl-demo section.section--footer {\n  padding: 64px 0;\n  margin: 0 -8px -8px -8px;\n}\n.mdl-demo section.section--center .section__text:not(:last-child) {\n  border-bottom: 1px solid rgba(0,0,0,.13);\n}\n.mdl-demo .mdl-card .mdl-card__supporting-text > h3:first-child {\n  margin-bottom: 24px;\n}\n.mdl-demo .mdl-layout__tab-panel:not(#overview) {\n  background-color: white;\n}\n.mdl-demo #features section {\n  margin-bottom: 72px;\n}\n.mdl-demo #features h4, #features h5 {\n  margin-bottom: 16px;\n}\n.mdl-demo .toc {\n  border-left: 4px solid #C1EEF4;\n  margin: 24px;\n  padding: 0;\n  padding-left: 8px;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.mdl-demo .toc h4 {\n  font-size: 0.9rem;\n  margin-top: 0;\n}\n.mdl-demo .toc a {\n  color: #4DD0E1;\n  text-decoration: none;\n  font-size: 16px;\n  line-height: 28px;\n  display: block;\n}\n.mdl-demo .mdl-menu__container {\n  z-index: 99;\n}\n\n.dashboard {\n  min-height: 500px;\n  height: 500px;\n}\n\n.dashboard-plot {\n  height: 80%;\n}\n\n.dashboard-filter {\n  height: 20%;\n}\n\n.bar-plot {\n  min-height: 300px;\n  height: 300px;\n}\n\n.vital-span {\n  display: block;\n  font-weight: bold;\n  font-size: 1.125rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/charts.ts":
/*!***********************!*\
  !*** ./src/charts.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Charts = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const lodash_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"));
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
const colorMapJet = [
    '#00008F',
    '#00009F',
    '#0000AF',
    '#0000BF',
    '#0000CF',
    '#0000DF',
    '#0000EF',
    '#0000FF',
    '#0010FF',
    '#0020FF',
    '#0030FF',
    '#0040FF',
    '#0050FF',
    '#0060FF',
    '#0070FF',
    '#0080FF',
    '#008FFF',
    '#009FFF',
    '#00AFFF',
    '#00BFFF',
    '#00CFFF',
    '#00DFFF',
    '#00EFFF',
    '#00FFFF',
    '#10FFEF',
    '#20FFDF',
    '#30FFCF',
    '#40FFBF',
    '#50FFAF',
    '#60FF9F',
    '#70FF8F',
    '#80FF80',
    '#8FFF70',
    '#9FFF60',
    '#AFFF50',
    '#BFFF40',
    '#CFFF30',
    '#DFFF20',
    '#EFFF10',
    '#FFFF00',
    '#FFEF00',
    '#FFDF00',
    '#FFCF00',
    '#FFBF00',
    '#FFAF00',
    '#FF9F00',
    '#FF8F00',
    '#FF8000',
    '#FF7000',
    '#FF6000',
    '#FF5000',
    '#FF4000',
    '#FF3000',
    '#FF2000',
    '#FF1000',
    '#FF0000',
    '#EF0000',
    '#DF0000',
    '#CF0000',
    '#BF0000',
    '#AF0000',
    '#9F0000',
    '#8F0000',
    '#800000',
];
const rtColorMap = [
    '#ffe100',
    '#ffc300',
    '#ffa500',
    '#ff6e00',
    '#ff3700',
    '#ff0000',
    '#d5002b',
    '#aa0055',
    '#800080',
    '#5500aa',
    '#2b00d5',
    '#0000ff',
    '#002baa',
    '#005555',
    '#008000',
];
const utils = new utils_1.Utils();
class Charts {
    constructor(elemObj) {
        this.elemObject = elemObj;
        this.realtimePlotActive = false;
        this.setupCharts();
        this.vitals = {
            subject: null,
            pctCorrect: 0,
            trials: 0,
            time: 0,
            batteryLeft: 0,
            batteryUsed: 0,
            rewardEstimate: 0,
            automator: '',
            automatorStage: 0,
            automatorStageName: '',
            numReward: 0,
            rfidTag: '',
            rfidTime: 0,
            tagCount: {},
        };
        this.prevCoord = { x: 0, y: 0 };
        this.prevColorIdx = 0;
    }
    setupDataTables() {
        this.perfDataTable = new google.visualization.DataTable();
        this.healthDataTable = new google.visualization.DataTable();
        this.cumulDataTable = new google.visualization.DataTable();
        this.xyPosDataTable = new google.visualization.DataTable();
        this.rxnTimeDataTable = new google.visualization.DataTable();
        this.rewardDataTable = new google.visualization.DataTable();
        this.choiceDataTable = new google.visualization.DataTable();
        this.objPerfDataTable = new google.visualization.DataTable();
        this.realtimeDataTable = new google.visualization.DataTable();
        this.rtData = {};
    }
    async setupCharts() {
        await google.charts.load('50', { packages: ['corechart', 'controls'] });
        this.setupChartOptions();
        this.setupDataTables();
        this.perfDashboard = new google.visualization.Dashboard(this.elemObject.perfDiv);
        this.perfPlot = new google.visualization.ChartWrapper(this.perfPlotConfig);
        this.perfFilter = new google.visualization.ControlWrapper(this.perfFilterConfig);
        this.trialDashboard = new google.visualization.Dashboard(this.elemObject.trialDiv);
        this.trialPlot = new google.visualization.ChartWrapper(this.trialPlotConfig);
        this.trialFilter = new google.visualization.ControlWrapper(this.trialFilterConfig);
        this.healthDashboard = new google.visualization.Dashboard(this.elemObject.healthDiv);
        this.healthPlot = new google.visualization.ChartWrapper(this.healthPlotConfig);
        this.healthFilter = new google.visualization.ControlWrapper(this.healthFilterConfig);
        this.perfDashboard.bind(this.perfFilter, this.perfPlot);
        this.trialDashboard.bind(this.trialFilter, this.trialPlot);
        this.healthDashboard.bind(this.healthFilter, this.healthPlot);
        this.screenPlot = new google.visualization.ComboChart(this.elemObject.screenPlot);
        // this.realtimePlot = (
        //   new google.visualization.ChartWrapper(this.realtimePlotConfig)
        // );
        this.rxnPlot = new google.visualization.Histogram(this.elemObject.rxnPlot);
        this.rewardPlot = new google.visualization.ColumnChart(this.elemObject.rewardPlot);
        this.choicePlot = new google.visualization.ColumnChart(this.elemObject.choicePlot);
        this.objPerfPlot = new google.visualization.ColumnChart(this.elemObject.objPerfPlot);
    } //FUNCTION setupCharts
    setupChartOptions() {
        this.perfPlotOptions = {
            width: this.elemObject.perfPlot.clientWidth,
            height: this.elemObject.perfPlot.clientHeight,
            hAxis: { title: 'Trial#' },
            vAxis: { title: 'Correct (%)', viewWindow: { min: 0, max: 1.0 } },
            animation: {
                duration: 500,
                easing: 'linear',
                startup: true,
            },
            series: {
                0: { color: '#43459d' },
                1: { color: '#e2431e' },
            },
        };
        this.perfPlotConfig = {
            chartType: 'LineChart',
            containerId: 'performance-plot',
            options: this.perfPlotOptions,
        };
        this.perfFilterOptions = {
            filterColumnLabel: 'currentTrial',
            ui: {
                chartType: 'LineChart',
                chartOptions: {
                    smooth: 20,
                    hAxis: { baselineColor: 'none', title: 'Trial#' },
                    vAxis: { title: '%', viewWindow: { min: 0, max: 1.0 } },
                    width: this.elemObject.perfFilter.clientWidth,
                    height: this.elemObject.perfFilter.clientHeight,
                    animation: { duration: 1000, easing: 'out' },
                },
                chartView: {
                    columns: [0, 1],
                },
                minRangeSize: 2,
            },
        };
        this.perfFilterConfig = {
            controlType: 'ChartRangeFilter',
            containerId: 'performance-filter',
            state: { range: { start: 0, end: 100 } },
            options: this.perfFilterOptions,
        };
        this.trialPlotOptions = {
            width: this.elemObject.trialPlot.clientWidth,
            height: this.elemObject.trialPlot.clientHeight,
            areaOpacity: 0.5,
            hAxis: { title: 'Time (h) ' },
            vAxes: {
                0: { title: 'Trial count' },
                1: { title: 'RFID' },
            },
            animation: {
                duration: 500,
                easing: 'linear',
            },
            series: {
                0: { targetAxisIndex: 0 },
                1: { targetAxisIndex: 0 },
                2: { targetAxisIndex: 1 },
            },
        };
        this.trialPlotConfig = {
            chartType: 'AreaChart',
            containerId: 'trial-plot',
            options: this.trialPlotOptions,
        };
        this.trialFilterOptions = {
            filterColumnLabel: 'time',
            ui: {
                chartType: 'LineChart',
                chartOptions: {
                    hAxis: { baselineColor: 'none', title: 'Time' },
                    vAxis: { title: '#' },
                    width: this.elemObject.trialFilter.clientWidth,
                    height: this.elemObject.trialFilter.clientHeight,
                    animation: { duration: 1000, easing: 'out' },
                },
            },
            chartView: {
                columns: [0, 1],
            },
        };
        this.trialFilterConfig = {
            controlType: 'ChartRangeFilter',
            containerId: 'trial-filter',
            state: { range: { start: 0, end: 100 } },
            options: this.trialFilterOptions,
        };
        this.healthPlotOptions = {
            width: this.elemObject.healthPlot.clientWidth,
            height: this.elemObject.healthPlot.clientHeight,
            hAxis: { title: 'Trial#' },
            vAxis: { title: 'Time (ms)' },
            // animation: {
            //   duration: 500,
            //   easing: 'linear',
            //   startup: true
            // }
        };
        this.healthPlotConfig = {
            chartType: 'ScatterChart',
            containerId: 'health-plot',
            options: this.healthPlotOptions,
        };
        this.healthFilterOptions = {
            filterColumnLabel: 'trial',
            ui: {
                chartType: 'ScatterChart',
                chartOptions: {
                    smooth: 20,
                    hAxis: { baselineColor: 'none', title: 'Trial#' },
                    vAxis: { title: 'ms' },
                    width: this.elemObject.healthFilter.clientWidth,
                    height: this.elemObject.healthFilter.clientHeight,
                    // animation: { duration: 1000, easing: 'linear' }
                },
            },
        };
        this.healthFilterConfig = {
            controlType: 'ChartRangeFilter',
            containerId: 'health-filter',
            state: { range: { start: 0, end: 100 } },
            options: this.healthFilterOptions,
        };
        // this.healthPlotOptions = {
        //   width: this.elemObject.healthPlot.clientWidth,
        //   height: this.elemObject.healthPlot.clientHeight,
        //   hAxis: { title: 'Trial #' },
        //   vAxis: { title: 'Time (ms)' },
        //   animation: {
        //     duration: 500,
        //     easing: 'linear',
        //     startup: true
        //   }
        // };
        // this.healthPlotConfig = {
        //   chartType: 'ScatterChart',
        //   containerId: 'health-plot',
        //   options: this.healthPlotOptions
        // };
        // this.healthFilterOptions = {
        //   filterColumnLabel: 'trial',
        //   ui: {
        //     chartType: 'ScatterChart',
        //     chartOptions: {
        //       hAxis: { baselineColor: 'none', title: 'Trial #' },
        //       vAxis: { title: 'ms' },
        //       width: this.elemObject.healthFilter.clientWidth,
        //       height: this.elemObject.healthFilter.clientHeight,
        //       animation: { duration: 1000, easing: 'out' }
        //     },
        //     minRangeSize: 2
        //   }
        // };
        // this.healthFilterConfig = {
        //   controlType: 'ChartRangeFilter',
        //   containerId: 'health-filter',
        //   state: { range: { start: 0, end: 100 } },
        //   options: this.healthFilterOptions
        // };
        this.screenPlotOptions = {
            seriesType: 'scatter',
            pointSize: 1,
        };
        this.rxnPlotOptions = {
            width: this.elemObject.rxnPlot.clientWidth,
            height: this.elemObject.rxnPlot.clientHeight,
            title: 'Reaction Time (ms)',
            animation: {
                duration: 500,
                easing: 'linear',
                startup: true,
            },
            legend: { position: 'none' },
        };
        this.rewardPlotOptions = {
            width: this.elemObject.rewardPlot.clientWidth,
            height: this.elemObject.rewardPlot.clientHeight,
            title: 'Amount of Reward',
            hAxis: { title: 'reward amount' },
            vAxis: { title: 'counts', minValue: 0, maxValue: 1 },
            legend: { position: 'none' },
        };
        this.choicePlotOptions = {
            width: this.elemObject.choicePlot.clientWidth,
            height: this.elemObject.choicePlot.clientHeight,
            hAxis: { title: 'Choice' },
            vAxis: { title: 'counts', minValue: 0, maxValue: 1 },
            legend: { position: 'none' },
        };
        this.objPerfPlotOptions = {
            width: this.elemObject.objPerfPlot.clientWidth,
            height: this.elemObject.objPerfPlot.clientHeight,
            hAxis: { title: 'Objects' },
            vAxis: { title: 'counts', minValue: 0, maxValue: 1 },
            title: 'Object Performance',
            legend: { position: 'none' },
        };
    } //FUNCTION setupChartOptions
    initializeChartData(file, plotOptions) {
        // Remove rows and columns
        // console.log(this.perfDataTable);
        this.perfDataTable.removeRows(0, this.perfDataTable.getNumberOfRows());
        this.perfDataTable.removeColumns(0, this.perfDataTable.getNumberOfColumns());
        this.cumulDataTable.removeRows(0, this.cumulDataTable.getNumberOfRows());
        this.cumulDataTable.removeColumns(0, this.cumulDataTable.getNumberOfColumns());
        this.healthDataTable.removeRows(0, this.healthDataTable.getNumberOfRows());
        this.healthDataTable.removeColumns(0, this.healthDataTable.getNumberOfColumns());
        this.xyPosDataTable.removeRows(0, this.xyPosDataTable.getNumberOfRows());
        this.xyPosDataTable.removeColumns(0, this.xyPosDataTable.getNumberOfColumns());
        this.realtimeDataTable.removeRows(0, this.realtimeDataTable.getNumberOfRows());
        this.realtimeDataTable.removeColumns(0, this.realtimeDataTable.getNumberOfColumns());
        this.realtimePlotActive = false;
        this.realtimeRowDataAdded = false;
        this.rtData['test'] = [];
        this.rtData['choice'] = [];
        this.rxnTimeDataTable.removeRows(0, this.rxnTimeDataTable.getNumberOfRows());
        this.rxnTimeDataTable.removeColumns(0, this.rxnTimeDataTable.getNumberOfColumns());
        this.rewardDataTable.removeRows(0, this.rewardDataTable.getNumberOfRows());
        this.rewardDataTable.removeColumns(0, this.rewardDataTable.getNumberOfColumns());
        this.choiceDataTable.removeRows(0, this.choiceDataTable.getNumberOfRows());
        this.choiceDataTable.removeColumns(0, this.choiceDataTable.getNumberOfColumns());
        this.objPerfDataTable.removeRows(0, this.objPerfDataTable.getNumberOfRows());
        this.objPerfDataTable.removeColumns(0, this.objPerfDataTable.getNumberOfColumns());
        // Add columns
        this.perfDataTable.addColumn('number', 'currentTrial');
        this.perfDataTable.addColumn('number', 'current');
        this.perfDataTable.addColumn('number', '100trialsAvg');
        this.cumulDataTable.addColumn('datetime', 'time');
        this.cumulDataTable.addColumn('number', 'Trials');
        this.cumulDataTable.addColumn('number', 'Performance');
        this.cumulDataTable.addColumn('number', 'RFID');
        // this.cumulDataTable.addColumn('number', 'Weight');
        this.rxnTimeDataTable.addColumn('string', 'success');
        this.rxnTimeDataTable.addColumn('number', 'durationMS');
        /**
         * xyPosDataTable Guide
         * 0: x
         * 1: y fix (box)
         * 2: y sample (box)
         * 3: y test1 (box) | y same (box)
         * 4: y test2 (box) | y different (box)
         * 5: y Fix_reward (dots)
         * 6: y Fix_punish (dots)
         * 7: y Target_reward (dots)
         * 8: y Target_punish (dots)
         */
        this.xyPosDataTable.addColumn('number', 'xpos');
        this.xyPosDataTable.addColumn('number', 'Fixation');
        this.xyPosDataTable.addColumn('number', 'Sample');
        this.realtimeDataTable.addColumn('number', 'globalX');
        this.realtimeDataTable.addColumn('number', 'fixY');
        this.realtimeDataTable.addColumn('number', 'sampleY');
        if (file.data.SameDifferent <= 0) {
            for (let i = 0; i < file.data.TestGridIndex.length; i++) {
                this.xyPosDataTable.addColumn('number', `Test${i + 1}`);
                this.realtimeDataTable.addColumn('number', `testY${i + 1}`);
            }
        }
        else if (file.data.SameDifferent > 0) {
            this.xyPosDataTable.addColumn('number', 'Same');
            this.xyPosDataTable.addColumn('number', 'Different');
            this.realtimeDataTable.addColumn('number', 'sameY');
            this.realtimeDataTable.addColumn('number', 'differentY');
        }
        this.xyPosDataTable.addColumn('number', 'Fix_Reward');
        this.xyPosDataTable.addColumn('number', 'Fix_Punish');
        this.xyPosDataTable.addColumn('number', 'Target_Reward');
        this.xyPosDataTable.addColumn('number', 'Target_Punish');
        this.realtimeDataTable.addColumn('number', 'curY');
        this.realtimeDataTable.addColumn({ type: 'string', role: 'style' });
        this.rewardDataTable.addColumn('string', 'reward size');
        this.rewardDataTable.addColumn('number', 'nrewards');
        this.choiceDataTable.addColumn('string', 'choice');
        this.choiceDataTable.addColumn('number', '# of responses');
        this.objPerfDataTable.addColumn('string', 'object');
        this.objPerfDataTable.addColumn('number', 'performance');
        this.healthDataTable.addColumn('number', 'trial');
        this.healthDataTable.addColumn('number', 'sample command');
        this.healthDataTable.addColumn('number', 'sample command off');
        this.healthDataTable.addColumn('number', 'tdisplay_last');
        this.healthDataTable.addColumn('number', 'tdisplay_first');
        this.healthDataTable.addColumn('number', 'eye interval');
        this.updatePlots(file, plotOptions);
    } //FUNCTION initializeChartData
    updatePlots(file, plotOptions) {
        let fileData;
        if (!lodash_1.default.isUndefined(file.data)) {
            fileData = file.data;
        }
        else {
            throw 'file.data is Undefined';
        }
        console.log('plot updated');
        this.loadVitals(file);
        this.loadVitalsText(file);
        this.loadPerformanceData(file);
        this.loadHealthData(fileData);
        this.loadObjPerfData(fileData);
        this.loadChoiceData(fileData);
        this.loadRewardData(fileData);
        this.loadTouchSDText(); //TouchSD text for ScreenPlot
        this.drawPerformancePlot(file); //%Correct
        this.drawTrialPlot(file); //#Trials
        this.drawHealthPlot(file); //DisplayTiming, SampleCommand, EyeInterval
        this.drawObjPerfPlot(); //%Correct by Object
        this.drawRxnTimePlot(); //ReactionTime histogram
        this.drawChoicePlot(); //ChoiseBias bar plot
        this.drawRewardPlot(); //NRewards bar plot
        let streamActive = plotOptions.streamActive;
        this.drawScreenPlot(fileData, streamActive); //Touch Locations
        //Realtime Plot
        if (streamActive && !this.realtimePlotActive) {
            this.drawRealtimePlot2(fileData);
            this.realtimePlotActive = true;
        } //IF realtime stream active
    } //FUNCTION updatePlots
    loadVitals(file) {
        let data;
        if (!lodash_1.default.isUndefined(file.data)) {
            data = file.data;
        }
        else {
            throw 'file.data is Undefined';
        }
        this.vitals.subject = data.Subject;
        this.vitals.trials = data.Response.length;
        // Convert milliseconds to minutes
        let startTime = data.StartTime;
        this.vitals.time = lodash_1.default.round(lodash_1.default.round(lodash_1.default.toNumber(lodash_1.default.last(startTime)) - startTime[0]) / 60000);
        /**
         * RFID Processing
         * Only supports current data format
         * file.data.RFIDTag = {
         *   0: [0, 2020-10-27T19:19:19.999Z, 00782A7E88A4],
         *   1: [],
         *   ...
         * };
         */
        let rfidTag = data.RFIDTag;
        if (!lodash_1.default.isUndefined(rfidTag) && lodash_1.default.size(rfidTag) > 0) {
            this.vitals.rfidTag = rfidTag[lodash_1.default.size(rfidTag) - 1][2];
            this.vitals.rfidTime = new Date(rfidTag[lodash_1.default.size(rfidTag) - 1][1]).toLocaleTimeString('en-US');
        }
        else {
            this.vitals.rfidTag = null;
            this.vitals.rfidTime = null;
        }
        // Automator, AutomatorStage, AutomatorStageName
        if (lodash_1.default.isUndefined(data.Automator)) {
            this.vitals.automator = null;
        }
        else {
            this.vitals.automator = file.data.Automator;
        }
        if (lodash_1.default.isUndefined(data.CurrentAutomatorStage)) {
            this.vitals.automatorStage = null;
        }
        else {
            this.vitals.automatorStage = data.CurrentAutomatorStage;
        }
        if (lodash_1.default.isUndefined(data.CurrentAutomatorStageName)) {
            this.vitals.automatorStageName = null;
        }
        else {
            this.vitals.automatorStageName = data.CurrentAutomatorStageName;
        }
        // Battery, only supports current data format
        let battery = data.Battery;
        if (!lodash_1.default.isUndefined(battery) && lodash_1.default.size(battery) > 0) {
            this.vitals.batteryLeft = lodash_1.default.round(battery[lodash_1.default.size(battery) - 1][2] * 100);
            this.vitals.batteryUsed = lodash_1.default.round(battery[0][2] * 100 - this.vitals.batteryLeft);
        }
        else {
            this.vitals.batteryLeft = null;
            this.vitals.batteryUsed = null;
        }
        // Performance
        let numCorrect = 0;
        for (let i = 0; i < lodash_1.default.size(data.CorrectItem); i++) {
            if (data.CorrectItem[i] == data.Response[i]) {
                numCorrect++;
            }
        }
        this.vitals.numCorrect = numCorrect;
        this.vitals.pctCorrect = lodash_1.default.round((100 * numCorrect) / data.Response.length);
        if (!lodash_1.default.isUndefined(data.NReward)) {
            this.vitals.numReward = data.NReward.reduce((a, b) => {
                return a + b;
            }, 0);
        }
        this.vitals.rewardEstimate = 0;
        if (!lodash_1.default.isUndefined(data.RewardPer1000Trials)) {
            this.vitals.rewardEstimate = lodash_1.default.round((data.RewardPer1000Trials * this.vitals.numReward) / 1000);
        }
    } //FUNCTION loadVitals
    loadVitalsText(file) {
        this.elemObject.perfVitals.innerHTML = `${this.vitals.subject}: ${this.vitals.pctCorrect}% (n = ${this.vitals.numCorrect} out of ${this.vitals.trials}, r=${this.vitals.numReward}=${this.vitals.rewardEstimate}mL, ${this.vitals.time} mins)`;
        // TODO: add this.vitals.tagCount data
        this.elemObject.rfidVitals.innerHTML = `RFID: ${this.vitals.rfidTag} (${this.vitals.rfidTime})`;
        this.elemObject.batteryVitals.innerHTML = `Battery: ${this.vitals.batteryLeft}% (-${this.vitals.batteryUsed}%)`;
        this.elemObject.trialVitals.innerHTML = `Last Trial: ${file.dateSaved.toLocaleTimeString('en-US')}`;
    } //FUNCTION loadVitalsText
    loadTouchSDText() {
        try {
            this.screenPlotOptions.title = `Touch Locations -- standard dev: \n Fixation: ${Math.round(this.vitals.stdevFix * 10) / 10} pixels`;
            for (let i = 0; i < this.vitals.stdevTest.length; i++) {
                this.screenPlotOptions.title =
                    this.screenPlotOptions.title +
                        `\n Target ${i}: ${Math.round(this.vitals.stdevTest[i] * 10) / 10}`;
            }
        }
        catch (err) {
            console.error('Error loading touch SD text', err);
        }
    } //FUNCTION loadTouchSDText
    loadPerformanceData(file) {
        // Typechecking file.data
        let data;
        if (!lodash_1.default.isUndefined(file.data)) {
            data = file.data;
        }
        else {
            throw 'file.data is Undefined';
        }
        this.perfDataTable.removeRows(0, this.perfDataTable.getNumberOfRows());
        this.cumulDataTable.removeRows(0, this.cumulDataTable.getNumberOfRows());
        this.rxnTimeDataTable.removeRows(0, this.rxnTimeDataTable.getNumberOfRows());
        this.xyPosDataTable.removeRows(0, this.xyPosDataTable.getNumberOfRows());
        // Create Data Table
        let xData = [];
        let yData = [];
        let yDataSmall = []; // keeps 5 recent
        let yDataLarge = []; // keeps 100 recent
        let numTotal = [];
        let numCorrect = [];
        let tCurrent = [];
        let numRFID = [];
        let xPos;
        let yPos;
        let touchevent = [];
        let rt = [];
        // performance
        for (let i = 0; i < data.CorrectItem.length; i++) {
            if (data.CorrectItem[i] == data.Response[i]) {
                yData[i] = 1; // correct
            }
            else {
                yData[i] = 0; // incorrect
            }
            xData[i] = i;
            // Cumulative trials & correct trials
            numTotal[i] = xData.length;
            if (i > 0) {
                numCorrect[i] = numCorrect[i - 1] + yData[i];
            }
            else if (i == 0) {
                numCorrect[i] = yData[i];
            }
        }
        for (let i = 0; i < data.NReward.length; i++) {
            if (data.RewardStage == 0) {
                rt[i] = data.FixationXYT[2][i] - data.StartTime[i];
                this.rxnTimeDataTable.addRows([
                    [file.data.FixationTouchEvent[i], rt[i]],
                ]);
            }
            else if (data.NRSVP > 0) {
                rt[i] = data.SampleFixationXYT[2][i] - data.SampleStartTime[i];
                this.rxnTimeDataTable.addRows([
                    [data.SampleFixationTouchEvent[i], rt[i]],
                ]);
            }
            else {
                rt[i] = data.ResponseXYT[2][i] - data.SampleStartTime[i];
                if (data.Response[i] == -1) {
                    this.rxnTimeDataTable.addRows([['timeout', data.ChoiceTimeOut]]);
                }
                else if (data.CorrectItem[i] == data.Response[i]) {
                    this.rxnTimeDataTable.addRows([['correct', rt[i]]]);
                }
                else {
                    this.rxnTimeDataTable.addRows([['wrong', rt[i]]]);
                }
            }
        }
        // console.log(rt);
        /**
         * Touch XY
         * Store fixation in odd indices and choice in even
         * All touchevents. touchevent has a length that is twice the length
         * of file.data.FixationXYT or file.data.ResponseXYT
         */
        if (!lodash_1.default.isUndefined(data.ResponseXYT) &&
            lodash_1.default.size(data.ResponseXYT) > 0 &&
            lodash_1.default.size(file.data.ResponseXYT[0]) > 0) {
            for (let i = 0; i < lodash_1.default.size(data.FixationXYT[0]) * 2; i += 2) {
                touchevent[i] = [];
                touchevent[i + 1] = [];
                touchevent[i][0] = file.data.FixationXYT[0][i / 2];
                touchevent[i + 1][0] = file.data.ResponseXYT[0][i / 2];
                touchevent[i][1] = file.data.FixationXYT[1][i / 2];
                touchevent[i + 1][1] = file.data.ResponseXYT[1][i / 2];
            }
        }
        else {
            for (let i = 0; i < lodash_1.default.size(data.FixationXYT[0]) * 2; i += 2) {
                touchevent[i] = [];
                touchevent[i + 1] = [];
                touchevent[i][0] = file.data.FixationXYT[0][i / 2];
                touchevent[i + 1][0] = file.data.FixationXYT[0][i / 2];
                touchevent[i][1] = file.data.FixationXYT[1][i / 2];
                touchevent[i + 1][1] = file.data.FixationXYT[1][i / 2];
            }
        }
        // Sample & Test Boxes -- Draw them as a bounding box in the touch plot
        let numColumnXYPos = this.xyPosDataTable.getNumberOfColumns();
        let numColRealtime = this.realtimeDataTable.getNumberOfColumns();
        let sampleWidth = this.getSampleWidth(file.data);
        let sampleHeight = sampleWidth;
        let testWidth = this.getTestWidth(file.data);
        let testHeight = testWidth;
        // Fixation & Choice Boxes
        let fixationWidth = this.getFixationWidth(file.data, sampleWidth);
        let fixationHeight = fixationWidth;
        let choiceWidth = this.getChoiceWidth(file.data);
        let choiceHeight = choiceWidth;
        /**
         * NOTE for positioning elements:
         * grid x, y is offset || fixation & response x, y is not
         */
        // FIXATION
        let numDisplayElems = 1;
        // let xyPosArray = [];
        let fixX;
        let fixY;
        let maxFixationGridIndex = lodash_1.default.max(file.data.FixationGridIndex);
        if (lodash_1.default.isNumber(maxFixationGridIndex)) {
            fixX = file.data.XGridCenter[maxFixationGridIndex];
            fixY =
                file.data.ViewportPixels[1] -
                    (file.data.YGridCenter[maxFixationGridIndex] + file.data.offsettop);
            // console.log('fixY', fixY);
        }
        else {
            throw 'data.FixationGridIndex is not of type number[]';
        }
        this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
            0: fixX - fixationWidth / 2,
            1: fixY - fixationHeight / 2,
        });
        this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
            0: fixX + fixationWidth / 2,
            1: fixY - fixationHeight / 2,
        });
        this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
            0: fixX + fixationWidth / 2,
            1: fixY + fixationHeight / 2,
        });
        this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
            0: fixX - fixationWidth / 2,
            1: fixY + fixationHeight / 2,
        });
        this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
            0: fixX - fixationWidth / 2,
            1: fixY - fixationHeight / 2,
        });
        if (!this.realtimeRowDataAdded && !this.realtimePlotActive) {
            console.log('realtime not active');
            this.rtData['fixation'] = {
                x: fixX,
                y: fixY,
                width: fixationWidth,
                height: fixationHeight,
            };
        }
        // SAMPLE
        numDisplayElems = 2;
        let sampleX;
        let sampleY;
        let maxSampleGridIndex = lodash_1.default.max(data.SampleGridIndex);
        if (data.RewardStage > 0) {
            if (lodash_1.default.isNumber(maxSampleGridIndex)) {
                sampleX = data.XGridCenter[maxSampleGridIndex];
                sampleY =
                    data.ViewportPixels[1] -
                        (data.YGridCenter[maxSampleGridIndex] + data.offsettop);
            }
            else {
                throw 'data.SampleGridIndex is not of type number[]';
            }
        }
        else {
            sampleX = fixX;
            sampleY = fixY;
        }
        this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
            0: sampleX - sampleWidth / 2,
            2: sampleY - sampleHeight / 2,
        });
        this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
            0: sampleX + sampleWidth / 2,
            2: sampleY - sampleHeight / 2,
        });
        this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
            0: sampleX + sampleWidth / 2,
            2: sampleY + sampleHeight / 2,
        });
        this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
            0: sampleX - sampleWidth / 2,
            2: sampleY + sampleHeight / 2,
        });
        this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
            0: sampleX - sampleWidth / 2,
            2: sampleY - sampleHeight / 2,
        });
        if (!this.realtimeRowDataAdded && !this.realtimePlotActive) {
            this.rtData['sample'] = {
                x: sampleX,
                y: sampleY,
                width: sampleWidth,
                height: sampleHeight,
            };
        }
        // TEST:
        let testX = [];
        let testY = [];
        if (data.RewardStage != 0) {
            for (let i = 0; i < lodash_1.default.size(data.TestGridIndex); i++) {
                // If Same-Different, only show the first test
                if (data.SameDifferent > 0 || data.NRSVP > 0) {
                    break;
                }
                numDisplayElems++;
                if (data.NRSVP > 0) {
                    testX.push(data.XGridCenter[maxSampleGridIndex]);
                    testY.push(data.ViewportPixels[1] -
                        (data.YGridCenter[maxSampleGridIndex] + data.offsettop));
                }
                else {
                    testX.push(data.XGridCenter[data.TestGridIndex[i]]);
                    testY.push(data.ViewportPixels[1] -
                        (data.YGridCenter[data.TestGridIndex[i]] + data.offsettop));
                }
                this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
                    0: testX[i] - testWidth / 2,
                    [numDisplayElems]: testY[i] - testHeight / 2,
                });
                this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
                    0: testX[i] + testWidth / 2,
                    [numDisplayElems]: testY[i] - testHeight / 2,
                });
                this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
                    0: testX[i] + testWidth / 2,
                    [numDisplayElems]: testY[i] + testHeight / 2,
                });
                this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
                    0: testX[i] - testWidth / 2,
                    [numDisplayElems]: testY[i] + testHeight / 2,
                });
                this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
                    0: testX[i] - testWidth / 2,
                    [numDisplayElems]: testY[i] - testHeight / 2,
                });
                if (!this.realtimeRowDataAdded && !this.realtimePlotActive) {
                    let tmp = {
                        x: testX[i],
                        y: testY[i],
                        width: testWidth,
                        height: testHeight,
                    };
                    this.rtData['test'].push(tmp);
                }
            }
        }
        // CHOICE:
        let choiceX = [];
        let choiceY = [];
        if (data.RewardStage != 0 && data.SameDifferent > 0) {
            for (let i = 0; i < lodash_1.default.size(data.ChoiceGridIndex); i++) {
                numDisplayElems++;
                choiceX.push(data.XGridCenter[data.ChoiceGridIndex[i]]);
                choiceY.push(data.ViewportPixels[1] -
                    (data.YGridCenter[data.ChoiceGridIndex[i]] + data.offsettop));
                this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
                    0: choiceX[i] - choiceWidth / 2,
                    [numDisplayElems]: choiceY[i] - choiceHeight / 2,
                });
                this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
                    0: choiceX[i] + choiceWidth / 2,
                    [numDisplayElems]: choiceY[i] - choiceHeight / 2,
                });
                this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
                    0: choiceX[i] + choiceWidth / 2,
                    [numDisplayElems]: choiceY[i] + choiceHeight / 2,
                });
                this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
                    0: choiceX[i] - choiceWidth / 2,
                    [numDisplayElems]: choiceY[i] + choiceHeight / 2,
                });
                this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
                    0: choiceX[i] - choiceWidth / 2,
                    [numDisplayElems]: choiceY[i] - choiceHeight / 2,
                });
                // realtime not active
                if (!this.realtimeRowDataAdded && !this.realtimePlotActive) {
                    this.rtData['choice'].push({
                        x: choiceX[i],
                        y: choiceY[i],
                        width: choiceWidth,
                        height: choiceHeight,
                    });
                }
            }
        }
        this.realtimeRowDataAdded = true;
        let fixXPos = [];
        let fixYPos = [];
        let testXPos = [];
        let testYPos = [];
        let numTarget = [0, 0];
        for (let i = 0; i < touchevent.length; i++) {
            xPos = touchevent[i][0];
            yPos = data.ViewportPixels[1] - touchevent[i][1];
            let yDataIndex;
            if (i % 2 == 0) {
                yDataIndex = i / 2;
            }
            else {
                yDataIndex = (i - 1) / 2;
            }
            if (xPos != -1) {
                let arr = new Array(numColumnXYPos);
                arr[0] = xPos;
                if (i % 2 == 0) {
                    fixXPos.push(xPos);
                    fixYPos.push(yPos);
                    if (yData[yDataIndex] == 1) {
                        arr[numDisplayElems + 1] = yPos;
                        this.xyPosDataTable.addRows([arr]);
                    }
                    else {
                        arr[numDisplayElems + 2] = yPos;
                        this.xyPosDataTable.addRows([arr]);
                    }
                }
                else {
                    let testXPosArr = [];
                    let testYPosArr = [];
                    for (let j = 0; j < lodash_1.default.size(data.TestGridIndex); j++) {
                        if (data.Response[yDataIndex] == j) {
                            testXPosArr.push(xPos);
                            testYPosArr.push(yPos);
                            numTarget[j] += 1;
                        }
                        else {
                            testXPosArr.push(0);
                            testYPosArr.push(0);
                        }
                        testXPos.push(testXPosArr);
                        testYPos.push(testYPosArr);
                    }
                    if (yData[yDataIndex] == 1) {
                        arr[numDisplayElems + 3] = yPos;
                        this.xyPosDataTable.addRows([arr]);
                    }
                    else {
                        arr[numDisplayElems + 4] = yPos;
                        this.xyPosDataTable.addRows([arr]);
                    }
                }
            }
            let meanFixXPos = lodash_1.default.mean(fixXPos);
            let meanFixYPos = lodash_1.default.mean(fixYPos);
            let distFixXPos = fixXPos.map((a) => {
                return Math.pow(Math.abs(a - meanFixXPos), 2);
            });
            let distFixYPos = fixYPos.map((a) => {
                return Math.pow(Math.abs(a - meanFixYPos), 2);
            });
            let stdevFix = distFixXPos
                .map((a, idx) => {
                return Math.sqrt(a + distFixYPos[idx]);
            })
                .reduce((a, b) => {
                return a + b;
            }, 0) / lodash_1.default.size(distFixXPos);
            this.vitals.stdevFix = stdevFix;
            let stdevTest = [];
            for (let j = 0; j < lodash_1.default.size(data.TestGridIndex); j++) {
                let allTestXPos = testXPos
                    .map((a) => {
                    return a[j];
                })
                    .filter((a) => {
                    return a != 0;
                });
                let meanTestXPos = allTestXPos.reduce((a, b) => {
                    return a + b;
                }, 0) / lodash_1.default.size(allTestXPos);
                let distTestXPos = allTestXPos.map((a) => {
                    return Math.pow(Math.abs(a - meanTestXPos), 2);
                });
                let allTestYPos = testYPos
                    .map((a) => {
                    return a[j];
                })
                    .filter((a) => {
                    return a != 0;
                });
                let meanTestYPos = allTestYPos.reduce((a, b) => {
                    return a + b;
                }, 0) / lodash_1.default.size(allTestYPos);
                let distTestYPos = allTestYPos.map((a) => {
                    return Math.pow(Math.abs(a - meanTestYPos), 2);
                });
                stdevTest.push(distTestXPos
                    .map((a, i) => {
                    return Math.sqrt(a + distTestYPos[i]);
                })
                    .reduce((a, b) => {
                    return a + b;
                }, 0) / lodash_1.default.size(allTestXPos));
            }
            this.vitals.stdevTest = stdevTest;
        }
        yDataSmall = utils.smooth(yData, 5);
        yDataLarge = utils.smooth(yData, 100);
        // Calculate timeEnd
        let timeEnd;
        if (lodash_1.default.isUndefined(data.ResponseXYT) ||
            lodash_1.default.size(data.ResponseXYT) < 1 ||
            lodash_1.default.isUndefined(data.ResponseXYT[2][lodash_1.default.size(data.ResponseXYT[2]) - 1])) {
            timeEnd = data.FixationXYT[2][lodash_1.default.size(data.FixationXYT[2]) - 1];
        }
        else {
            timeEnd = data.ResponseXYT[2][lodash_1.default.size(data.ResponseXYT[2]) - 1];
        }
        // RFID
        let numTrials = lodash_1.default.size(yData);
        let numReads = lodash_1.default.size(data.RFIDTag);
        numRFID = lodash_1.default.fill(Array(numTrials), 0);
        this.vitals.tagCount = {};
        for (let i = 0; i < numReads; i++) {
            if (lodash_1.default.isUndefined(this.vitals.tagCount[data.RFIDTag[i][2]])) {
                this.vitals.tagCount[data.RFIDTag[i][2]] = 0;
            }
            this.vitals.tagCount[data.RFIDTag[i][2]] += 1;
            numRFID[data.RFIDTag[i][0]] += 1;
        }
        for (let i = 1; i < lodash_1.default.size(numRFID); i++) {
            numRFID[i] = numRFID[i] + numRFID[i - 1];
        }
        // Adding rest of the data
        for (let i = 0; i < lodash_1.default.size(yData); i++) {
            let timeFix = data.FixationXYT[2][i]; // in milliseconds
            if (timeFix < 0) {
                continue;
            }
            let t = new Date(file.dateSaved);
            t.setTime(t.getTime() - (timeEnd - timeFix));
            this.perfDataTable.addRows([[xData[i], yDataSmall[i], yDataLarge[i]]]);
            this.cumulDataTable.addRows([
                [t, numTotal[i], numCorrect[i], numRFID[i]],
            ]);
        }
        this.formatDate(this.cumulDataTable, 0);
    } //FUNCTION loadPerformanceData
    generateAndAddRowData(target, numColumns, data) {
        // console.log('data', data);
        let arr = [];
        for (let i = 0; i < numColumns; i++) {
            if (lodash_1.default.has(data, i)) {
                arr.push(data[i]);
            }
            else {
                arr.push(null);
            }
        }
        // console.log('arr:', arr);
        target.addRows([arr]);
    } //FUNCTION generateAndAddRowData
    // TODO: deal with case where SampleScenes[0].OBJECTS[firstKey].sizeInches is an
    // Array of arrays -- i.e. scene movie
    getSampleWidth(fileData) {
        let sampleWidth = 0;
        if (lodash_1.default.size(fileData.SampleScenes[0].IMAGES.imageidx) > 0) {
            if (lodash_1.default.isArray(fileData.SampleScenes[0].IMAGES.sizeInches)) {
                let maxSizeInches = lodash_1.default.max(fileData.SampleScenes[0].IMAGES.sizeInches);
                if (lodash_1.default.isNumber(maxSizeInches)) {
                    sampleWidth = maxSizeInches * fileData.ViewportPPI;
                }
            }
            else {
                console.error('SampleScenes[0].IMAGES.sizeInches is not an array. Please fix!');
                sampleWidth = fileData.SampleScenes[0].IMAGES.sizeInches * fileData.ViewportPPI;
            }
        }
        else {
            let firstKey = lodash_1.default.findKey(fileData.SampleScenes[0].OBJECTS);
            if (lodash_1.default.isString(firstKey)) {
                let maxSizeInches = lodash_1.default.max(fileData.SampleScenes[0].OBJECTS[firstKey].sizeInches);
                if (lodash_1.default.isNumber(maxSizeInches)) {
                    sampleWidth = maxSizeInches * fileData.ViewportPPI;
                }
            }
            else {
                console.error('firstKey of SampleScenes[0].OBJECTS is not of type string');
            }
        }
        return sampleWidth;
    } //FUNCTION getSampleWidth
    getTestWidth(fileData) {
        let testWidth = 0;
        if (fileData.TestScenes[0].IMAGES.imageidx.length > 0) {
            if (lodash_1.default.isArray(fileData.TestScenes[0].IMAGES.sizeInches)) {
                let maxSizeInches = lodash_1.default.max(fileData.TestScenes[0].IMAGES.sizeInches);
                if (lodash_1.default.isNumber(maxSizeInches)) {
                    testWidth = maxSizeInches * fileData.ViewportPPI;
                }
                else {
                    console.error('TestScenes[0].IMAGES.sizeInches is not of type number');
                }
            }
            else {
                console.error('TestScenes[0].IMAGES.sizeInches is not an array. Please fix!');
                testWidth = fileData.TestScenes[0].IMAGES.sizeInches * fileData.ViewportPPI;
            }
        }
        else {
            let firstKey = lodash_1.default.findKey(fileData.TestScenes[0].OBJECTS);
            if (lodash_1.default.isString(firstKey)) {
                let maxSizeInches = lodash_1.default.max(fileData.TestScenes[0].OBJECTS[firstKey].sizeInches);
                if (lodash_1.default.isNumber(maxSizeInches)) {
                    testWidth = maxSizeInches * fileData.ViewportPPI;
                }
                else {
                    console.error('firstKey of TestScenes[0].OBJECTS is not of type string');
                }
            }
        }
        if (!lodash_1.default.isUndefined(fileData.NRSVP) && fileData.NRSVP > 0) {
            testWidth = fileData.SampleFixationSizeInches * fileData.ViewportPPI;
        }
        return testWidth;
    } //FUNCTION getTestWidth
    getFixationWidth(fileData, sampleWidth) {
        let fixationWidth = 0;
        if (fileData.FixationUsesSample <= 0) {
            fixationWidth = fileData.FixationSizeInches * fileData.ViewportPPI;
        }
        else {
            fixationWidth = sampleWidth;
        }
        return fixationWidth;
    } //FUNCTION getFixationWidth
    getChoiceWidth(fileData) {
        let choiceWidth = 0;
        if (!lodash_1.default.isUndefined(fileData.SameDifferent) && fileData.SameDifferent > 0) {
            choiceWidth = fileData.ChoiceSizeInches * fileData.ViewportPPI;
        }
        return choiceWidth;
    } //FUNCTION getChoiceWidth
    loadObjPerfData(data) {
        this.objPerfDataTable.removeRows(0, this.objPerfDataTable.getNumberOfRows());
        let lenSampleObj;
        if (data.RewardStage == 1) {
            let sampleObj = [];
            if (data.NTrialsPerBagBlock > 5000) {
                sampleObj.push(data.ImageBagsSample[0].split('/')[5]);
                this.objPerfDataTable.addRow([sampleObj[0], 0]);
                lenSampleObj = 1;
            }
            else {
                for (let i = 0; i < lodash_1.default.size(data.ImageBagsSample); i++) {
                    sampleObj.push(data.ImageBagsSample[i].split('/')[5]);
                    this.objPerfDataTable.addRow([sampleObj[i], 0]);
                }
                lenSampleObj = lodash_1.default.size(sampleObj);
            }
            let NDiffObjPerf = lodash_1.default.fill(Array(lenSampleObj), 0);
            let NDiffObj = lodash_1.default.fill(Array(lenSampleObj), 0);
            for (let i = 0; i < lodash_1.default.size(data.Sample[0]); i++) {
                // For i trials
                for (let j = 0; j < lenSampleObj; j++) {
                    // If sample was that object
                    if (data.SampleBagIdx[data.Sample[0][i]] == j) {
                        NDiffObj[j] += 1;
                        // If correct
                        if (data.Response[i] == data.CorrectItem[i]) {
                            NDiffObjPerf[j] += 1;
                        }
                    }
                    this.objPerfDataTable.setValue(j, 1, NDiffObjPerf[j] / NDiffObj[j]);
                }
            }
        }
    } //FUNCTION loadObjPerfData
    loadChoiceData(data) {
        this.choiceDataTable.removeRows(0, this.choiceDataTable.getNumberOfRows());
        if (data.RewardStage != 0) {
            // let possibleResp = _.fill(Array(_.size(data.ObjectGridIndex)), 0);
            let possibleResp = [];
            if (lodash_1.default.size(data.ObjectGridIndex) != 0 &&
                (lodash_1.default.isUndefined(data.NTrialsPerBagBlock) ||
                    data.NTrialsPerBagBlock < 1000)) {
                let objGridIndex = lodash_1.default.cloneDeep(data.ObjectGridIndex);
                objGridIndex.sort((a, b) => {
                    return a - b;
                });
                let allind = [];
                for (let i = 0; i < lodash_1.default.size(objGridIndex); i++) {
                    // allind.push(_.findIndex(data.ObjectGridIndex, objGridIndex[i]));
                    allind.push(data.ObjectGridIndex.indexOf(objGridIndex[i]));
                    this.choiceDataTable.addRow([
                        data.ImageBagsSample[allind[i]].split('/')[5],
                        0,
                    ]);
                    possibleResp.push(i);
                }
            }
            else {
                for (let i = 0; i < lodash_1.default.size(data.TestGridIndex); i++) {
                    this.choiceDataTable.addRow(['choice' + (i + 1), 0]);
                    possibleResp.push(i);
                }
            }
            let NDiffChoice = lodash_1.default.fill(Array(lodash_1.default.size(possibleResp)), 0);
            let NAllChoice = 0;
            for (let i = 0; i < lodash_1.default.size(data.Response); i++) {
                if (data.Response[i] != -1) {
                    NAllChoice++;
                }
                for (let j = 0; j < lodash_1.default.size(possibleResp); j++) {
                    if (data.Response[i] == possibleResp[j] && data.Response[i] != -1) {
                        NDiffChoice[j]++;
                    }
                    this.choiceDataTable.setValue(j, 1, NDiffChoice[j] / NAllChoice);
                }
            }
        }
        else {
            this.choiceDataTable.addRow(['outside Fix', 0]);
            this.choiceDataTable.addRow(['inside Fix', 0]);
            let NDiffChoice = lodash_1.default.fill(Array(2), 0);
            let NAllChoice = 0;
            let yData = [];
            for (let i = 0; i < lodash_1.default.size(data.CorrectItem); i++) {
                if (data.CorrectItem[i] == data.Response[i]) {
                    yData.push(1);
                }
                else {
                    yData.push(0);
                }
            }
            for (let i = 0; i < lodash_1.default.size(yData); i++) {
                NAllChoice++;
                for (let j = 0; j < 2; j++) {
                    if (yData[i] == j) {
                        NDiffChoice[j] += 1;
                    }
                    this.choiceDataTable.setValue(j, 1, NDiffChoice[j] / NAllChoice);
                }
            }
        }
    } //FUNCTION loadChoiceData
    loadRewardData(data) {
        this.rewardDataTable.removeRows(0, this.rewardDataTable.getNumberOfRows());
        let nrewardArr = [];
        for (let i = 0; i <= data.NRewardMax; i++) {
            nrewardArr.push(0);
        }
        data.NReward.forEach((elem) => {
            nrewardArr[elem]++;
        });
        for (let i = 0; i < nrewardArr.length; i++) {
            this.rewardDataTable.addRow([i.toString(), nrewardArr[i]]);
        }
    } //FUNCTION loadRewardData
    loadHealthData(data) {
        // console.log('[loadHealthData::fileData]', data);
        this.healthDataTable.removeRows(0, this.healthDataTable.getNumberOfRows());
        if (data.RewardStage > 0) {
            const lastIdx = Object.keys(data.TSequenceActualClip).length - 1;
            for (let i = 0; i < data.TSequenceActualClip[lastIdx].length; i++) {
                let dt;
                let dt2;
                let sampleCmdInterval;
                let sampleCmdOffInterval;
                let eyeTrackerSampleInterval;
                try {
                    if (data.TSequenceActualClip[lastIdx][i] < 0) {
                        dt = null;
                    }
                    else {
                        dt =
                            data.TSequenceActualClip[lastIdx][i] -
                                data.TSequenceDesiredClip[lastIdx][i];
                        dt = Math.abs(Math.round(dt));
                    }
                }
                catch {
                    dt = null;
                }
                try {
                    if (data.TSequenceActualClip[1][i] < 0) {
                        dt2 = null;
                    }
                    else {
                        dt2 =
                            data.TSequenceActualClip[1][i] - data.TSequenceDesiredClip[1][i];
                        dt2 = Math.abs(Math.round(dt2));
                    }
                }
                catch {
                    dt2 = null;
                }
                try {
                    if (data.SampleCommandReturnTime[i] == null ||
                        data.SampleCommandReturnTime[i] < 0 ||
                        data.SampleCommandReturnTime[i] === undefined) {
                        sampleCmdInterval = null;
                    }
                    else {
                        sampleCmdInterval =
                            data.SampleCommandReturnTime[i] - data.SampleStartTime[i];
                    }
                }
                catch {
                    sampleCmdInterval = null;
                }
                try {
                    if (data.SampleCommandOffReturnTime[i] == null ||
                        data.SampleCommandOffReturnTime[i] < 0 ||
                        data.SampleCommandOffReturnTime[i] === undefined) {
                        sampleCmdOffInterval = null;
                    }
                    else {
                        sampleCmdOffInterval =
                            data.SampleCommandOffReturnTime[i] - data.EndTime[i];
                    }
                }
                catch {
                    sampleCmdOffInterval = null;
                }
                try {
                    eyeTrackerSampleInterval = data.EyetrackerSampleInterval[i];
                }
                catch {
                    eyeTrackerSampleInterval = null;
                }
                this.healthDataTable.addRows([
                    [
                        i,
                        sampleCmdInterval,
                        sampleCmdOffInterval,
                        dt,
                        dt2,
                        eyeTrackerSampleInterval,
                    ],
                ]);
            }
        }
    } //FUNCTION loadHealthData
    drawPerformancePlot(file) {
        var _a;
        let numRows = this.perfDataTable.getNumberOfRows();
        this.nTrials = numRows;
        let perfFilterState = this.perfFilter.getState();
        // updating perfFilter
        if (file.dataChanged && !file.fileChanged) {
            if (numRows <= 100) {
                // expand window size automatically up to 100
                perfFilterState.range.start = 0;
                perfFilterState.range.end = numRows;
            }
            else {
                let dTrials = numRows - lodash_1.default.size((_a = file.data) === null || _a === void 0 ? void 0 : _a.FixationGridIndex);
                console.log('dtrials', dTrials);
                perfFilterState.range.start = numRows - 100;
                perfFilterState.range.end = numRows;
            }
        }
        else if (file.fileChanged) {
            let dSlider = 100;
            perfFilterState.range.start = numRows - dSlider;
            perfFilterState.range.end = numRows;
            if (perfFilterState.range.start < 0) {
                perfFilterState.range.start = 0;
            }
        }
        this.perfPlot.setOptions(this.perfPlotOptions);
        this.perfFilter.setState({
            range: {
                start: perfFilterState.range.start,
                end: perfFilterState.range.end,
            },
        });
        this.perfDashboard.draw(this.perfDataTable);
    } //FUNCTION drawPerformancePlot
    drawHealthPlot(file) {
        let numRows = this.healthDataTable.getNumberOfRows();
        // console.log('[drawHealthPlot::numRows]:', numRows);
        let healthFilterState = this.healthFilter.getState();
        // console.log('[drawHealthPlot::healthFilterState]:', healthFilterState);
        if (file.dataChanged && !file.fileChanged) {
            if (numRows <= 100) {
                healthFilterState.range.start = 0;
                healthFilterState.range.end = numRows;
            }
            else {
                healthFilterState.range.start = numRows - 100;
                healthFilterState.range.end = numRows;
            }
        }
        else if (file.fileChanged) {
            let dSlider = 100;
            healthFilterState.range.start = numRows - dSlider;
            healthFilterState.range.end = numRows;
            if (healthFilterState.range.start < 0) {
                healthFilterState.range.start = 0;
            }
        }
        this.healthPlot.setOptions(this.healthPlotOptions);
        this.healthFilter.setState({
            range: {
                start: healthFilterState.range.start,
                end: healthFilterState.range.end,
            },
        });
        this.healthDashboard.draw(this.healthDataTable);
    } //FUNCTION drawHealthPlot
    drawTrialPlot(file) {
        let trialFilterState = this.trialFilter.getState();
        let tmin = new Date(this.cumulDataTable.getColumnRange(0).min);
        let tmax = new Date(this.cumulDataTable.getColumnRange(0).max);
        if (file.dataChanged || file.fileChanged) {
            trialFilterState.range.start = tmin;
            trialFilterState.range.end = tmax;
        }
        this.trialFilter.setState({
            range: {
                start: trialFilterState.range.start,
                end: trialFilterState.range.end,
            },
        });
        this.trialPlot.setOptions(this.trialPlotOptions);
        this.trialDashboard.draw(this.cumulDataTable);
    } //FUNCTION drawTrialPlot
    drawObjPerfPlot() {
        this.objPerfPlot.draw(this.objPerfDataTable, this.objPerfPlotOptions);
    } //FUNCTION drawObjPerfPlot
    drawRxnTimePlot() {
        this.rxnPlot.draw(this.rxnTimeDataTable, this.rxnPlotOptions);
    } //FUNCTION drawRxnTimePlot
    drawChoicePlot() {
        this.choicePlot.draw(this.choiceDataTable, this.choicePlotOptions);
    } //FUNCTION drawChoicePlot
    drawRewardPlot() {
        this.rewardPlot.draw(this.rewardDataTable, this.rewardPlotOptions);
    } //FUNCTION drawRewardPlot
    // private drawRealtimePlot(data: LiveplotDataType) {
    //   let idx = 0;
    //   this.realtimePlotOptions = {
    //     seriesType: 'scatter',
    //     width: data.workspace[2] * data.CanvasRatio,
    //     height: data.ViewportPixels[1] - data.offsettop,
    //     legend: {
    //       position: 'top',
    //     },
    //     hAxis: {
    //       title: 'X position (px)',
    //       viewWindow: {
    //         min: 0,
    //         max: data.workspace[2] * data.CanvasRatio,
    //       },
    //     },
    //     vAxis: {
    //       title: 'Y position (px)',
    //       viewWindow: {
    //         min: 0,
    //         max: data.ViewportPixels[1] - data.offsettop,
    //       },
    //     },
    //   };
    //   this.realtimePlotOptions.hAxis = {
    //     title: 'X position (px)',
    //     viewWindow: {
    //       min: 0,
    //       max: data.workspace[2] * data.CanvasRatio,
    //     },
    //   };
    //   this.realtimePlotOptions.vAxis = {
    //     title: 'Y position (px)',
    //     viewWindow: {
    //       min: 0,
    //       max: data.ViewportPixels[1] - data.offsettop,
    //     },
    //   };
    //   let numCol = this.realtimeDataTable.getNumberOfColumns();
    //   this.generateAndAddRowData(this.realtimeDataTable, numCol, {
    //     0: 0,
    //     [numCol - 2]: 0,
    //   });
    //   let numRows = this.realtimeDataTable.getNumberOfRows();
    //   this.realtimePlotConfig = {
    //     chartType: 'ComboChart',
    //     containerId: 'realtime-plot',
    //     options: this.realtimePlotOptions,
    //   };
    //   this.realtimePlot = new google.visualization.ChartWrapper(
    //     this.realtimePlotConfig
    //   );
    //   this.realtimePlot.setDataTable(this.realtimeDataTable);
    //   window.addEventListener('data_arrived', (evt: CustomEventInit) => {
    //     if (idx % 2 == 0) {
    //       this.realtimeDataTable.setValue(
    //         numRows - 1,
    //         0,
    //         Math.floor(evt.detail.x)
    //       );
    //       this.realtimeDataTable.setValue(
    //         numRows - 1,
    //         numCol - 2,
    //         Math.floor(evt.detail.y)
    //       );
    //       this.realtimePlot.draw();
    //     }
    //   });
    // }
    drawStaticElements(cvs, ctx, data, evt) {
        if (ctx) {
            ctx.fillStyle = 'gray';
            ctx.fillRect(0, 0, data.workspace[2] * data.CanvasRatio, data.ViewportPixels[1] - data.offsettop);
            for (let idx in evt.detail.boundingBoxes) {
                let width = evt.detail.boundingBoxes[idx]['x_1'] -
                    evt.detail.boundingBoxes[idx]['x_0'];
                let height = evt.detail.boundingBoxes[idx]['y_1'] -
                    evt.detail.boundingBoxes[idx]['y_0'];
                ctx.beginPath();
                ctx.rect(lodash_1.default.floor(evt.detail.boundingBoxes[idx]['x_0']), lodash_1.default.floor(cvs.height - evt.detail.boundingBoxes[idx]['y_0']), width, -height);
                ctx.stroke();
            }
        }
    } //FUNCTION drawStaticElements
    drawRealtimePlot2(data) {
        let cvs = document.querySelector('#realtime-canvas');
        cvs.width = data.workspace[2] * data.CanvasRatio;
        cvs.height = data.ViewportPixels[1] - data.offsettop;
        let ctx = cvs.getContext('2d');
        const longerAxis = cvs.width > cvs.height ? cvs.width : cvs.height;
        // const realtimeOnData =
        window.addEventListener('data_arrived', (evt) => {
            console.log('LONGER AXIS:', longerAxis);
            if (evt.detail.meta == 2) {
                this.drawStaticElements(cvs, ctx, data, evt);
            }
            if (evt.detail.meta == 1 || evt.detail.meta == 0) {
                const x = lodash_1.default.floor(evt.detail.x);
                const y = lodash_1.default.floor(cvs.height - evt.detail.y);
                console.log('X:', x, 'Y:', y);
                const xQuantity = x - this.prevCoord.x;
                const xSquared = Math.pow(xQuantity, 2);
                const yQuantity = y - this.prevCoord.y;
                const ySquared = Math.pow(yQuantity, 2);
                const dist = Math.sqrt(xSquared + ySquared);
                console.log('DIST:', dist);
                console.log('xQuantity:', xQuantity, 'yQuantity:', yQuantity);
                console.log('xSquared:', xSquared, 'ySquared:', ySquared);
                console.log('prevCoordX:', this.prevCoord.x, 'prevCoordY:', this.prevCoord.y);
                if (dist > longerAxis * 0.015) {
                    if (this.prevColorIdx == 14) {
                        this.prevColorIdx = 0;
                    }
                    else {
                        this.prevColorIdx++;
                    }
                }
                ctx.fillStyle = rtColorMap[this.prevColorIdx];
                ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
                ctx === null || ctx === void 0 ? void 0 : ctx.arc(x, y, 2, 0, Math.PI * 2, true);
                ctx === null || ctx === void 0 ? void 0 : ctx.fill();
                this.prevCoord.x = x;
                this.prevCoord.y = y;
            }
        });
    } //FUNCTION drawRealtimePlot2
    drawScreenPlot(data, screenActive) {
        this.screenPlotOptions.series = [];
        for (let i = 0; i < this.xyPosDataTable.getNumberOfColumns(); i++) {
            if (this.xyPosDataTable.getColumnLabel(i) == 'Fixation') {
                this.screenPlotOptions.series[i - 1] = { type: 'line', color: 'gray' };
            }
            else if (this.xyPosDataTable.getColumnLabel(i) == 'Sample') {
                this.screenPlotOptions.series[i - 1] = { type: 'line', color: 'black' };
            }
            else if (this.xyPosDataTable.getColumnLabel(i) == 'Same') {
                this.screenPlotOptions.series[i - 1] = { type: 'line', color: 'green' };
            }
            else if (this.xyPosDataTable.getColumnLabel(i) == 'Different') {
                this.screenPlotOptions.series[i - 1] = { type: 'line', color: 'red' };
            }
            else if (this.xyPosDataTable.getColumnLabel(i) == 'Fix_Reward') {
                this.screenPlotOptions.series[i - 1] = { color: 'blue' };
            }
            else if (this.xyPosDataTable.getColumnLabel(i) == 'Fix_Punish') {
                this.screenPlotOptions.series[i - 1] = { color: 'red' };
            }
            else if (this.xyPosDataTable.getColumnLabel(i) == 'Target_Reward') {
                this.screenPlotOptions.series[i - 1] = { color: 'green' };
            }
            else if (this.xyPosDataTable.getColumnLabel(i) == 'Target_Punish') {
                this.screenPlotOptions.series[i - 1] = { color: 'black' };
            }
            else if (this.xyPosDataTable.getColumnLabel(i).includes('Test')) {
                this.screenPlotOptions.series[i - 1] = { type: 'line', color: 'black' };
            }
        }
        this.screenPlotOptions.height = data.ViewportPixels[1];
        this.screenPlotOptions.width = data.ViewportPixels[0];
        this.screenPlotOptions.hAxis = {
            title: 'X position (px)',
            viewWindow: {
                min: 0,
                max: data.ViewportPixels[0],
            },
        };
        this.screenPlotOptions.vAxis = {
            title: 'Y position (px)',
            viewWindow: {
                min: 0,
                max: data.ViewportPixels[1],
            },
        };
        if (!this.realtimePlotActive) {
            this.screenPlot.draw(this.xyPosDataTable, this.screenPlotOptions);
        }
    } //FUNCTION drawScreenPlot
    formatDate(data, colIdx) {
        let formatter = new google.visualization.DateFormat({
            pattern: 'h aa',
        });
        formatter.format(data, colIdx);
    } //FUNCTION formatDate
    formatNumber(data, colIdx) {
        let formatter = new google.visualization.NumberFormat({
            fractionDigits: 2,
        });
        formatter.format(data, colIdx);
    } //FUNCTION formatNumber
    formatColor(data, colIdx) {
        let formatter = new google.visualization.ColorFormat();
        let dx = 1 / (colorMapJet.length - 1);
        for (let i = 0; i < colorMapJet.length; i++) {
            formatter.addRange(i * dx, (i + 1) * dx, 'gray', colorMapJet[i]);
        }
        formatter.format(data, colIdx);
    } //FUNCTION formatColor
} //CLASS Charts
exports.Charts = Charts;


/***/ }),

/***/ "./src/liveplot.ts":
/*!*************************!*\
  !*** ./src/liveplot.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Liveplot = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const app_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js"));
__webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
__webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
__webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
const jsoneditor_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! jsoneditor */ "./node_modules/jsoneditor/dist/jsoneditor.min.js"));
const lodash_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"));
// import 'jsoneditor/dist/jsoneditor.css'
// import './jsoneditor.css';
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
const charts_1 = __webpack_require__(/*! ./charts */ "./src/charts.ts");
const storage = app_1.default.storage();
const storageRef = storage.ref();
const rtdb = app_1.default.database();
const DATA_PATH = 'mkturkfiles/datafiles/';
const DATA_REF = storageRef.child(DATA_PATH);
const PARAM_PATH = 'mkturkfiles/parameterfiles/subjects/';
const PARAM_REF = storageRef.child(PARAM_PATH);
const AGENTS_REF = rtdb.ref('agents/');
const utils = new utils_1.Utils();
class Liveplot {
    constructor(elemObj) {
        this.elemObjs = elemObj;
        this.file = {
            path: DATA_PATH,
            list: [],
            name: '',
            ver: null,
            date: null,
            dataChanged: false,
            fileChanged: false,
        };
        this.charts = new charts_1.Charts(elemObj);
        this.streamActive = false;
        this.requestRealtimeBtnAction();
        this.onDisconnectAction();
    }
    fileSelectionChangedListener(elem) {
        elem.addEventListener('input', (evt) => {
            var _a;
            evt.stopPropagation();
            evt.preventDefault();
            if (this.streamActive) {
                let agent = (_a = this.file.data) === null || _a === void 0 ? void 0 : _a.Agent;
                rtdb.ref(`data/${agent}`).off();
                this.agentClientRef.remove((err) => {
                    if (err) {
                        console.error(`Error Removing agentClientRef: ${err}`);
                    }
                });
                this.streamActive = false;
            }
            this.file.name = this.file.list[parseInt(elem.value)].fullpath;
            this.file.fileChanged = true;
        });
    }
    onDisconnectAction() {
        window.addEventListener('unload', (evt) => {
            this.agentClientRef.onDisconnect().remove();
        });
    }
    requestRealtimeBtnAction() {
        let realtimeBtn = this.elemObjs.realtimeBtn;
        realtimeBtn.addEventListener('click', async (evt) => {
            var _a;
            evt.stopPropagation();
            evt.preventDefault();
            let agent = (_a = this.file.data) === null || _a === void 0 ? void 0 : _a.Agent;
            if (this.streamActive) {
                realtimeBtn.innerHTML = 'Request Realtime Stream';
                rtdb.ref(`data/${agent}`).off();
                this.agentClientRef.remove((err) => {
                    if (err) {
                        console.error(`Error Removing agentClientRef: ${err}`);
                    }
                });
                rtdb.ref(`data/${agent}`).off();
                this.streamActive = false;
            }
            else {
                realtimeBtn.innerHTML = 'Deactivate Realtime Stream';
                let agentClientKey = rtdb.ref(`agents/${agent}`).push().key;
                this.agentClientRef = rtdb.ref(`agents/${agent}/${agentClientKey}`);
                if (lodash_1.default.isString(agentClientKey)) {
                    rtdb.ref(`agents/${agent}`).update({
                        [agentClientKey]: true,
                    });
                }
                rtdb.ref(`data/${agent}`).on('value', (snap) => {
                    let event = new CustomEvent('data_arrived', { detail: snap.val() });
                    window.dispatchEvent(event);
                });
                this.streamActive = true;
            }
        });
    }
    async populateFileList(elem) {
        try {
            let fileList = await utils.getFileList(this.file.path);
            fileList.sort((a, b) => {
                let nameA = a.name.toUpperCase();
                let nameB = b.name.toUpperCase();
                if (nameA > nameB) {
                    return -1;
                }
                if (nameA < nameB) {
                    return 1;
                }
                return 0;
            });
            this.file.list = fileList;
            for (let i = 0; i < fileList.length; i++) {
                let opt = document.createElement('option');
                opt.value = i.toString();
                opt.innerHTML = fileList[i].name;
                elem.appendChild(opt);
            }
            this.file.name = this.file.list[0].fullpath;
            this.file.fileChanged = true;
            let rawStorageFile = await utils.getStorageFile(this.file.name);
            // console.log('rawFile', rawStorageFile);
            this.processData(rawStorageFile);
        }
        catch (error) {
            console.error('ERROR #file-list:', error);
        }
    }
    flattenData(data) {
        let tmp = {};
        for (let outerKey in data) {
            if (data.hasOwnProperty(outerKey)) {
                for (let innerKey in data[outerKey]) {
                    if (data[outerKey].hasOwnProperty(innerKey)) {
                        tmp[innerKey] = data[outerKey][innerKey];
                    }
                }
            }
        }
        return tmp;
    }
    async processData(data) {
        console.time('this.flattenData');
        this.file.data = this.flattenData(data);
        console.timeEnd('this.flattenData');
        this.loadDataToEditor(this.file.data);
        // console.log(this.file.data);
        let metadata = await utils.getStorageFileMetadata(this.file.name);
        console.log('Success! Loaded File Size:', metadata.size / 1000, 'KB');
        this.file.ver = metadata.generation;
        this.file.dateSaved = new Date(metadata.updated);
        console.log(this.file.dateSaved);
        if (this.file.fileChanged) {
            this.charts.initializeChartData(this.file, {
                streamActive: this.streamActive,
            });
            this.checkFileStatus();
            this.file.fileChanged = false;
            this.file.dataChanged = false;
        }
        else if (this.file.dataChanged) {
            this.charts.updatePlots(this.file, { streamActive: this.streamActive });
            this.file.dataChanged = false;
            this.checkFileStatus();
        }
    }
    setupEditor(elem) {
        this.editor = new jsoneditor_1.default(elem);
    }
    loadDataToEditor(data) {
        if (this.file.fileChanged) {
            this.editor.set(data);
        }
        else {
            this.editor.update(data);
        }
    }
    async checkFileStatus() {
        try {
            let metadata = await utils.getStorageFileMetadata(this.file.name);
            if (this.file.ver != metadata.generation) {
                this.file.ver = metadata.generation;
                this.file.dateSaved = new Date(metadata.updated);
                console.log(this.file.dateSaved);
                this.file.dataChanged = true;
                console.log('File was updated ver=' + this.file.ver);
            }
            else {
                this.file.dataChanged = false;
            }
            if (this.file.fileChanged == true || this.file.dataChanged == true) {
                let rawStorageFile = await utils.getStorageFile(this.file.name);
                // console.log('rawFile', rawStorageFile);
                this.processData(rawStorageFile);
            }
            else {
                setTimeout(() => {
                    this.checkFileStatus();
                }, 1000);
            }
        }
        catch (error) {
            console.error('checkFileStatus Error:', error);
        }
        return false; // why needed
    }
}
exports.Liveplot = Liveplot;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
__webpack_require__(/*! ./styles.css */ "./src/styles.css");
const app_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js"));
__webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
const firebaseConfig = {
    apiKey: "AIzaSyA0fbv2VqE-AfF6V_nxSSXCEqaTlBlZnTI",
    authDomain: "sandbox-ce2c5.firebaseapp.com",
    databaseURL: "https://sandbox-ce2c5.firebaseio.com",
    projectId: "sandbox-ce2c5",
    storageBucket: "sandbox-ce2c5.appspot.com",
    messagingSenderId: "1003719887944",
    clientId: "1003719887944-rlc06cjecqrp9fgvmvo56vqop1otm9ht.apps.googleusercontent.com"
};
app_1.default.initializeApp(firebaseConfig);
const liveplot_1 = __webpack_require__(/*! ./liveplot */ "./src/liveplot.ts");
let fileListSelector = document.querySelector('#file-list');
let editorDiv = document.querySelector('#editor');
let elemObj = {
    perfDiv: document.querySelector('#performance-dashboard'),
    perfPlot: document.querySelector('#performance-plot'),
    perfFilter: document.querySelector('#performance-filter'),
    trialDiv: document.querySelector('#trial-dashboard'),
    trialPlot: document.querySelector('#trial-plot'),
    trialFilter: document.querySelector('#trial-filter'),
    healthDiv: document.querySelector('#health-dashboard'),
    healthPlot: document.querySelector('#health-plot'),
    healthFilter: document.querySelector('#health-filter'),
    screenPlot: document.querySelector('#screen-plot'),
    // realtimePlot: document.querySelector('#realtime-plot') as HTMLDivElement,
    rxnPlot: document.querySelector('#reaction-plot'),
    choicePlot: document.querySelector('#choice-plot'),
    objPerfPlot: document.querySelector('#obj-perf-plot'),
    rewardPlot: document.querySelector('#reward-plot'),
    perfVitals: document.querySelector('#performance-vitals'),
    rfidVitals: document.querySelector('#rfid-vitals'),
    batteryVitals: document.querySelector('#battery-vitals'),
    trialVitals: document.querySelector('#trial-vitals'),
    fixStdev: document.querySelector('#fixation-stdev'),
    tarZeroStdev: document.querySelector('#target0-stdev'),
    tarOneStdev: document.querySelector('#target1-stdev'),
    sdTextDiv: document.querySelector('#touch-sd-text'),
    realtimeBtn: document.querySelector('#request-realtime'),
};
const lp = new liveplot_1.Liveplot(elemObj);
lp.setupEditor(editorDiv);
lp.fileSelectionChangedListener(fileListSelector);
lp.populateFileList(fileListSelector);
let provider = new app_1.default.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
app_1.default.auth().getRedirectResult().then(function (result) {
    if (result.user) {
        // User just signed in. you can get the result.credential.
        console.log('Sign-In Redirect Result, USER ' + result.user.email + ' is signed in');
    }
    else if (app_1.default.auth().currentUser) {
        // User already signed in.
        console.log('Sign-In Redirect Result, USER is signed in');
    }
    else {
        // No user signed in, update your UI, show the redirect sign-in screen.
        app_1.default.auth().signInWithRedirect(provider);
    }
});


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Utils = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const app_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js"));
__webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
__webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
const storage = app_1.default.storage();
const storageRef = storage.ref();
class Utils {
    constructor() { }
    async getFileList(path, ext) {
        let fileList = await storageRef.child(path).listAll();
        /* only keep files within the last 2 years*/
        let year = new Date().getFullYear();
        let month = new Date().getMonth();
        let files = [];
        for (let item of fileList.prefixes) {
            let subFileList = (await this.getFileList(path + item.name + '/', ext));
            files = [...files, ...subFileList];
        } //FOR items
        for (let i = 0; i < fileList.items.length; i++) {
            if (typeof (ext) == 'string') {
                if (fileList.items[i].name.endsWith(ext)) { // if file extension is correct
                    files.push({
                        fullpath: fileList.items[i].fullPath,
                        name: fileList.items[i].name
                    });
                }
            }
            else {
                let year_file = parseInt(fileList.items[i].name.slice(0, 4));
                let month_file = parseInt(fileList.items[i].name.slice(5, 7));
                if ((year_file * 12 + month_file) >= (year * 12 + month - 6)) {
                    files.push({
                        fullpath: fileList.items[i].fullPath,
                        name: fileList.items[i].name
                    });
                } //ELSE IF within last 6 months
            } //ELSE
        } //FOR i fileList.items
        return files;
    }
    async getStorageFile(path) {
        let fileRef = storageRef.child(path);
        // console.log('fileRef:', fileRef);
        let file = await storageRef.child(path).getDownloadURL().then(async (url) => {
            let response = await fetch(url);
            return response.json();
        }).catch(e => {
            console.error('Error Getting URL:', e);
        });
        // console.log('file:', file);
        return file;
    }
    async getStorageFileMetadata(path) {
        let fileRef = storageRef.child(path);
        let metadata = await fileRef.getMetadata();
        return metadata;
    }
    smooth(data, n) {
        let smoothedData = [];
        for (let i = 0; i < data.length; i++) {
            if (i < n - 1) {
                let tmp = data.slice(0, i + 1);
                smoothedData[i] = tmp.reduce((a, b) => {
                    return a + b;
                });
                smoothedData[i] /= (i + 1);
            }
            else {
                let tmp = data.slice(i - n + 1, i + 1);
                smoothedData[i] = tmp.reduce((a, b) => {
                    return a + b;
                });
                smoothedData[i] /= n;
            }
        }
        return smoothedData;
    }
    calcDistance(a, b) {
        return Math.pow(Math.abs(a - b), 2);
    }
}
exports.Utils = Utils;


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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
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
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkliveplot"] = self["webpackChunkliveplot"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-a9fe29"], () => (__webpack_require__("./src/main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-a9fe29"], () => (__webpack_require__("./src/utils.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsYUFBYSxhQUFhLFdBQVcsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSwySkFBMkosMGdCQUEwZ0IsbURBQW1ELGNBQWMsZUFBZSxHQUFHLHFDQUFxQyx1QkFBdUIsR0FBRyxvRUFBb0UsdUJBQXVCLEdBQUcseUNBQXlDLGtCQUFrQixHQUFHLDBFQUEwRSxrQkFBa0IsR0FBRyxpSkFBaUosc0JBQXNCLEdBQUcsNENBQTRDLGlCQUFpQixHQUFHLGtDQUFrQyxlQUFlLHVCQUF1QiwyQkFBMkIsaUJBQWlCLGdCQUFnQixHQUFHLG1EQUFtRCxpQkFBaUIsc0JBQXNCLEdBQUcsb0VBQW9FLDRCQUE0QixnQkFBZ0IsR0FBRywyQ0FBMkMsaUJBQWlCLHNCQUFzQixHQUFHLHVCQUF1QixpQkFBaUIsMEJBQTBCLHlCQUF5QixrQkFBa0IsbUNBQW1DLG1DQUFtQyxtQ0FBbUMsR0FBRywyQkFBMkIsaUJBQWlCLEdBQUcsa0RBQWtELGlCQUFpQix5QkFBeUIsNkJBQTZCLHlCQUF5QixlQUFlLG1CQUFtQiw2QkFBNkIsR0FBRyxvREFBb0Qsa0JBQWtCLHdCQUF3QixHQUFHLGdDQUFnQyxjQUFjLHNCQUFzQixtQkFBbUIsR0FBRyxrQ0FBa0MsbUJBQW1CLGNBQWMsR0FBRyxnRkFBZ0YsbUJBQW1CLGtDQUFrQyxHQUFHLDZEQUE2RCw4Q0FBOEMsR0FBRyxrQkFBa0IsdUJBQXVCLGdCQUFnQixjQUFjLGlCQUFpQixHQUFHLCtEQUErRCx1QkFBdUIsd0JBQXdCLEdBQUcscUNBQXFDLHNCQUFzQixHQUFHLCtDQUErQyxxQkFBcUIsR0FBRyw2QkFBNkIsMEJBQTBCLHlCQUF5QixrQkFBa0IsZ0NBQWdDLCtCQUErQixnQ0FBZ0Msb0NBQW9DLDhCQUE4QixvQ0FBb0MsR0FBRywwQ0FBMEMsc0JBQXNCLEdBQUcsZ0RBQWdELG9CQUFvQixHQUFHLDhCQUE4Qix1QkFBdUIsZ0JBQWdCLGFBQWEsZUFBZSxHQUFHLHNDQUFzQywwQkFBMEIseUJBQXlCLGtCQUFrQixnQ0FBZ0MsK0JBQStCLGdDQUFnQyx3Q0FBd0MsNkJBQTZCLHdDQUF3Qyx5QkFBeUIsNkJBQTZCLHlCQUF5QiwyQkFBMkIsNkJBQTZCLDJCQUEyQixHQUFHLG9DQUFvQyx5QkFBeUIsNkJBQTZCLHlCQUF5QiwyQkFBMkIsNkJBQTZCLDJCQUEyQixxQkFBcUIsR0FBRyx1Q0FBdUMsdUJBQXVCLGNBQWMseUJBQXlCLEdBQUcsc0NBQXNDLDBCQUEwQixHQUFHLHFGQUFxRixnQkFBZ0IsaUJBQWlCLHdCQUF3QixrQkFBa0IsR0FBRywyREFBMkQsaUJBQWlCLGtCQUFrQix3QkFBd0IscUJBQXFCLEdBQUcsNEVBQTRFLGdCQUFnQixpQkFBaUIsd0JBQXdCLHFCQUFxQixHQUFHLHFDQUFxQyxvQkFBb0IsNkJBQTZCLEdBQUcscUVBQXFFLDZDQUE2QyxHQUFHLG1FQUFtRSx3QkFBd0IsR0FBRyxtREFBbUQsNEJBQTRCLEdBQUcsK0JBQStCLHdCQUF3QixHQUFHLHdDQUF3Qyx3QkFBd0IsR0FBRyxrQkFBa0IsbUNBQW1DLGlCQUFpQixlQUFlLHNCQUFzQiwwQkFBMEIseUJBQXlCLGtCQUFrQixtQ0FBbUMsbUNBQW1DLG1DQUFtQyxHQUFHLHFCQUFxQixzQkFBc0Isa0JBQWtCLEdBQUcsb0JBQW9CLG1CQUFtQiwwQkFBMEIsb0JBQW9CLHNCQUFzQixtQkFBbUIsR0FBRyxrQ0FBa0MsZ0JBQWdCLEdBQUcsZ0JBQWdCLHNCQUFzQixrQkFBa0IsR0FBRyxxQkFBcUIsZ0JBQWdCLEdBQUcsdUJBQXVCLGdCQUFnQixHQUFHLGVBQWUsc0JBQXNCLGtCQUFrQixHQUFHLGlCQUFpQixtQkFBbUIsc0JBQXNCLHdCQUF3QixHQUFHLHFCQUFxQjtBQUNqN2M7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOdkMsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksOEZBQWMsR0FBRyw4RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzFCN0Usb0hBQXlDO0FBRXpDLHFFQUFnQztBQUVoQyxNQUFNLFdBQVcsR0FBRztJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0NBQ1YsQ0FBQztBQUVGLE1BQU0sVUFBVSxHQUFHO0lBQ2pCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztDQUNWLENBQUM7QUFFRixNQUFNLEtBQUssR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO0FBRTFCLE1BQWEsTUFBTTtJQWdFakIsWUFBWSxPQUFZO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1FBQzFCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRW5CLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDWixPQUFPLEVBQUUsSUFBSTtZQUNiLFVBQVUsRUFBRSxDQUFDO1lBQ2IsTUFBTSxFQUFFLENBQUM7WUFDVCxJQUFJLEVBQUUsQ0FBQztZQUNQLFdBQVcsRUFBRSxDQUFDO1lBQ2QsV0FBVyxFQUFFLENBQUM7WUFDZCxjQUFjLEVBQUUsQ0FBQztZQUNqQixTQUFTLEVBQUUsRUFBRTtZQUNiLGNBQWMsRUFBRSxDQUFDO1lBQ2pCLGtCQUFrQixFQUFFLEVBQUU7WUFDdEIsU0FBUyxFQUFFLENBQUM7WUFDWixPQUFPLEVBQUUsRUFBRTtZQUNYLFFBQVEsRUFBRSxDQUFDO1lBQ1gsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDO1FBRUYsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxlQUFlO1FBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzVELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzNELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDN0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDNUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDNUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzlELElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFTSxLQUFLLENBQUMsV0FBVztRQUN0QixNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXZCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FDckQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQ3hCLENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FDdkQsSUFBSSxDQUFDLGdCQUFnQixDQUN0QixDQUFDO1FBRUYsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUN0RCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FDekIsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FDcEQsSUFBSSxDQUFDLGVBQWUsQ0FDckIsQ0FBQztRQUNGLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FDeEQsSUFBSSxDQUFDLGlCQUFpQixDQUN2QixDQUFDO1FBRUYsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUN2RCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FDMUIsQ0FBQztRQUNGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FDckQsSUFBSSxDQUFDLGdCQUFnQixDQUN0QixDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUN6RCxJQUFJLENBQUMsa0JBQWtCLENBQ3hCLENBQUM7UUFFRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUU5RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQ25ELElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUMzQixDQUFDO1FBQ0Ysd0JBQXdCO1FBQ3hCLG1FQUFtRTtRQUNuRSxLQUFLO1FBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUNwRCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FDM0IsQ0FBQztRQUNGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FDcEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQzNCLENBQUM7UUFDRixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQ3JELElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUM1QixDQUFDO0lBQ0osQ0FBQyx1QkFBc0I7SUFFaEIsaUJBQWlCO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUc7WUFDckIsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFdBQVc7WUFDM0MsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFlBQVk7WUFDN0MsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtZQUMxQixLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ2pFLFNBQVMsRUFBRTtnQkFDVCxRQUFRLEVBQUUsR0FBRztnQkFDYixNQUFNLEVBQUUsUUFBUTtnQkFDaEIsT0FBTyxFQUFFLElBQUk7YUFDZDtZQUNELE1BQU0sRUFBRTtnQkFDTixDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO2dCQUN2QixDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO2FBQ3hCO1NBQ0YsQ0FBQztRQUVGLElBQUksQ0FBQyxjQUFjLEdBQUc7WUFDcEIsU0FBUyxFQUFFLFdBQVc7WUFDdEIsV0FBVyxFQUFFLGtCQUFrQjtZQUMvQixPQUFPLEVBQUUsSUFBSSxDQUFDLGVBQWU7U0FDOUIsQ0FBQztRQUNGLElBQUksQ0FBQyxpQkFBaUIsR0FBRztZQUN2QixpQkFBaUIsRUFBRSxjQUFjO1lBQ2pDLEVBQUUsRUFBRTtnQkFDRixTQUFTLEVBQUUsV0FBVztnQkFDdEIsWUFBWSxFQUFFO29CQUNaLE1BQU0sRUFBRSxFQUFFO29CQUNWLEtBQUssRUFBRSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtvQkFDakQsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtvQkFDdkQsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFdBQVc7b0JBQzdDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxZQUFZO29CQUMvQyxTQUFTLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7aUJBQzdDO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUNoQjtnQkFDRCxZQUFZLEVBQUUsQ0FBQzthQUNoQjtTQUNGLENBQUM7UUFDRixJQUFJLENBQUMsZ0JBQWdCLEdBQUc7WUFDdEIsV0FBVyxFQUFFLGtCQUFrQjtZQUMvQixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ3hDLE9BQU8sRUFBRSxJQUFJLENBQUMsaUJBQWlCO1NBQ2hDLENBQUM7UUFDRixJQUFJLENBQUMsZ0JBQWdCLEdBQUc7WUFDdEIsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFdBQVc7WUFDNUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFlBQVk7WUFDOUMsV0FBVyxFQUFFLEdBQUc7WUFDaEIsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTtZQUM3QixLQUFLLEVBQUU7Z0JBQ0wsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRTtnQkFDM0IsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTthQUNyQjtZQUNELFNBQVMsRUFBRTtnQkFDVCxRQUFRLEVBQUUsR0FBRztnQkFDYixNQUFNLEVBQUUsUUFBUTthQUNqQjtZQUNELE1BQU0sRUFBRTtnQkFDTixDQUFDLEVBQUUsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFO2dCQUN6QixDQUFDLEVBQUUsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFO2dCQUN6QixDQUFDLEVBQUUsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFO2FBQzFCO1NBQ0YsQ0FBQztRQUNGLElBQUksQ0FBQyxlQUFlLEdBQUc7WUFDckIsU0FBUyxFQUFFLFdBQVc7WUFDdEIsV0FBVyxFQUFFLFlBQVk7WUFDekIsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0I7U0FDL0IsQ0FBQztRQUNGLElBQUksQ0FBQyxrQkFBa0IsR0FBRztZQUN4QixpQkFBaUIsRUFBRSxNQUFNO1lBQ3pCLEVBQUUsRUFBRTtnQkFDRixTQUFTLEVBQUUsV0FBVztnQkFDdEIsWUFBWSxFQUFFO29CQUNaLEtBQUssRUFBRSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtvQkFDL0MsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtvQkFDckIsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFdBQVc7b0JBQzlDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxZQUFZO29CQUNoRCxTQUFTLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7aUJBQzdDO2FBQ0Y7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNoQjtTQUNGLENBQUM7UUFDRixJQUFJLENBQUMsaUJBQWlCLEdBQUc7WUFDdkIsV0FBVyxFQUFFLGtCQUFrQjtZQUMvQixXQUFXLEVBQUUsY0FBYztZQUMzQixLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUN4QyxPQUFPLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjtTQUNqQyxDQUFDO1FBRUYsSUFBSSxDQUFDLGlCQUFpQixHQUFHO1lBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxXQUFXO1lBQzdDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxZQUFZO1lBQy9DLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7WUFDMUIsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTtZQUM3QixlQUFlO1lBQ2YsbUJBQW1CO1lBQ25CLHNCQUFzQjtZQUN0QixrQkFBa0I7WUFDbEIsSUFBSTtTQUNMLENBQUM7UUFFRixJQUFJLENBQUMsZ0JBQWdCLEdBQUc7WUFDdEIsU0FBUyxFQUFFLGNBQWM7WUFDekIsV0FBVyxFQUFFLGFBQWE7WUFDMUIsT0FBTyxFQUFFLElBQUksQ0FBQyxpQkFBaUI7U0FDaEMsQ0FBQztRQUNGLElBQUksQ0FBQyxtQkFBbUIsR0FBRztZQUN6QixpQkFBaUIsRUFBRSxPQUFPO1lBQzFCLEVBQUUsRUFBRTtnQkFDRixTQUFTLEVBQUUsY0FBYztnQkFDekIsWUFBWSxFQUFFO29CQUNaLE1BQU0sRUFBRSxFQUFFO29CQUNWLEtBQUssRUFBRSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtvQkFDakQsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtvQkFDdEIsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFdBQVc7b0JBQy9DLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxZQUFZO29CQUNqRCxrREFBa0Q7aUJBQ25EO2FBQ0Y7U0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLGtCQUFrQixHQUFHO1lBQ3hCLFdBQVcsRUFBRSxrQkFBa0I7WUFDL0IsV0FBVyxFQUFFLGVBQWU7WUFDNUIsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDeEMsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUI7U0FDbEMsQ0FBQztRQUVGLDZCQUE2QjtRQUM3QixtREFBbUQ7UUFDbkQscURBQXFEO1FBQ3JELGlDQUFpQztRQUNqQyxtQ0FBbUM7UUFDbkMsaUJBQWlCO1FBQ2pCLHFCQUFxQjtRQUNyQix3QkFBd0I7UUFDeEIsb0JBQW9CO1FBQ3BCLE1BQU07UUFDTixLQUFLO1FBQ0wsNEJBQTRCO1FBQzVCLCtCQUErQjtRQUMvQixnQ0FBZ0M7UUFDaEMsb0NBQW9DO1FBQ3BDLEtBQUs7UUFDTCwrQkFBK0I7UUFDL0IsZ0NBQWdDO1FBQ2hDLFVBQVU7UUFDVixpQ0FBaUM7UUFDakMsc0JBQXNCO1FBQ3RCLDREQUE0RDtRQUM1RCxnQ0FBZ0M7UUFDaEMseURBQXlEO1FBQ3pELDJEQUEyRDtRQUMzRCxxREFBcUQ7UUFDckQsU0FBUztRQUNULHNCQUFzQjtRQUN0QixNQUFNO1FBQ04sS0FBSztRQUNMLDhCQUE4QjtRQUM5QixxQ0FBcUM7UUFDckMsa0NBQWtDO1FBQ2xDLDhDQUE4QztRQUM5QyxzQ0FBc0M7UUFDdEMsS0FBSztRQUVMLElBQUksQ0FBQyxpQkFBaUIsR0FBRztZQUN2QixVQUFVLEVBQUUsU0FBUztZQUNyQixTQUFTLEVBQUUsQ0FBQztTQUNiLENBQUM7UUFDRixJQUFJLENBQUMsY0FBYyxHQUFHO1lBQ3BCLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQzFDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxZQUFZO1lBQzVDLEtBQUssRUFBRSxvQkFBb0I7WUFDM0IsU0FBUyxFQUFFO2dCQUNULFFBQVEsRUFBRSxHQUFHO2dCQUNiLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixPQUFPLEVBQUUsSUFBSTthQUNkO1lBQ0QsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtTQUM3QixDQUFDO1FBQ0YsSUFBSSxDQUFDLGlCQUFpQixHQUFHO1lBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxXQUFXO1lBQzdDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxZQUFZO1lBQy9DLEtBQUssRUFBRSxrQkFBa0I7WUFDekIsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRTtZQUNqQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRTtZQUNwRCxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO1NBQzdCLENBQUM7UUFDRixJQUFJLENBQUMsaUJBQWlCLEdBQUc7WUFDdkIsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFdBQVc7WUFDN0MsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFlBQVk7WUFDL0MsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtZQUMxQixLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRTtZQUNwRCxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO1NBQzdCLENBQUM7UUFDRixJQUFJLENBQUMsa0JBQWtCLEdBQUc7WUFDeEIsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFdBQVc7WUFDOUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFlBQVk7WUFDaEQsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtZQUMzQixLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRTtZQUNwRCxLQUFLLEVBQUUsb0JBQW9CO1lBQzNCLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7U0FDN0IsQ0FBQztJQUNKLENBQUMsNkJBQTRCO0lBRXRCLG1CQUFtQixDQUFDLElBQWMsRUFBRSxXQUFnQjtRQUN6RCwwQkFBMEI7UUFDMUIsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQzlCLENBQUMsRUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLENBQ3hDLENBQUM7UUFFRixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUMvQixDQUFDLEVBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRSxDQUN6QyxDQUFDO1FBRUYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FDaEMsQ0FBQyxFQUNELElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLEVBQUUsQ0FDMUMsQ0FBQztRQUVGLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQy9CLENBQUMsRUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixFQUFFLENBQ3pDLENBQUM7UUFFRixJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUMvQixDQUFDLEVBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxDQUN6QyxDQUFDO1FBQ0YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FDbEMsQ0FBQyxFQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUM1QyxDQUFDO1FBQ0YsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRTNCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQzlCLENBQUMsRUFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLENBQ3hDLENBQUM7UUFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUNqQyxDQUFDLEVBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQzNDLENBQUM7UUFFRixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUNoQyxDQUFDLEVBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsRUFBRSxDQUMxQyxDQUFDO1FBRUYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FDaEMsQ0FBQyxFQUNELElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLEVBQUUsQ0FDMUMsQ0FBQztRQUVGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQzlCLENBQUMsRUFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLENBQ3hDLENBQUM7UUFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUNqQyxDQUFDLEVBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQzNDLENBQUM7UUFFRixjQUFjO1FBQ2QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFdkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELHFEQUFxRDtRQUVyRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUV4RDs7Ozs7Ozs7Ozs7V0FXRztRQUNILElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRXRELElBQUksSUFBSSxDQUFDLElBQUssQ0FBQyxhQUFhLElBQUksQ0FBQyxFQUFFO1lBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hELElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN4RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzdEO1NBQ0Y7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFLLENBQUMsYUFBYSxHQUFHLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQzFEO1FBRUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBRXBFLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFckQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBRTNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsK0JBQThCO0lBRXhCLFdBQVcsQ0FBQyxJQUFjLEVBQUUsV0FBZ0I7UUFDakQsSUFBSSxRQUEwQixDQUFDO1FBQy9CLElBQUksQ0FBQyxnQkFBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDN0IsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDdEI7YUFBTTtZQUNMLE1BQU0sd0JBQXdCLENBQUM7U0FDaEM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsOEJBQTZCO1FBRXBELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLDJDQUEyQztRQUN0RSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMscUJBQW9CO1FBQzNDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyx5QkFBd0I7UUFDL0MsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLHNCQUFxQjtRQUMzQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsb0JBQW1CO1FBQ3pDLElBQUksWUFBWSxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUM7UUFDNUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUMsa0JBQWlCO1FBRTdELGVBQWU7UUFDZixJQUFJLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUM1QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztTQUNoQyw0QkFBMkI7SUFDOUIsQ0FBQyx1QkFBc0I7SUFFZixVQUFVLENBQUMsSUFBYztRQUMvQixJQUFJLElBQUksQ0FBQztRQUNULElBQUksQ0FBQyxnQkFBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDN0IsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDbEI7YUFBTTtZQUNMLE1BQU0sd0JBQXdCLENBQUM7U0FDaEM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBRTFDLGtDQUFrQztRQUNsQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLGdCQUFDLENBQUMsS0FBSyxDQUN4QixnQkFBQyxDQUFDLEtBQUssQ0FBQyxnQkFBQyxDQUFDLFFBQVEsQ0FBQyxnQkFBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FDOUQsQ0FBQztRQUVGOzs7Ozs7OztXQVFHO1FBQ0gsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUMzQixJQUFJLENBQUMsZ0JBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksZ0JBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxnQkFBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FDN0IsT0FBTyxDQUFDLGdCQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNoQyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQy9CO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQzdCO1FBRUQsZ0RBQWdEO1FBQ2hELElBQUksZ0JBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUM5QjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDN0M7UUFFRCxJQUFJLGdCQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO1lBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztTQUNuQzthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1NBQ3pEO1FBRUQsSUFBSSxnQkFBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsRUFBRTtZQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztTQUN2QzthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUM7U0FDakU7UUFFRCw2Q0FBNkM7UUFDN0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUMzQixJQUFJLENBQUMsZ0JBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksZ0JBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLGdCQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxnQkFBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUN6RSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxnQkFBQyxDQUFDLEtBQUssQ0FDL0IsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FDOUMsQ0FBQztTQUNIO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQ2hDO1FBRUQsY0FBYztRQUNkLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMzQyxVQUFVLEVBQUUsQ0FBQzthQUNkO1NBQ0Y7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsZ0JBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU1RSxJQUFJLENBQUMsZ0JBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxFQUFFO2dCQUNuRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDUDtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsZ0JBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEdBQUcsZ0JBQUMsQ0FBQyxLQUFLLENBQ2xDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUMxRCxDQUFDO1NBQ0g7SUFDSCxDQUFDLHNCQUFxQjtJQUVkLGNBQWMsQ0FBQyxJQUFjO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxVQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxXQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxRQUFRLENBQUM7UUFFL08sc0NBQXNDO1FBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxTQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUM7UUFFaEcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLFlBQVksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLElBQUksQ0FBQztRQUVoSCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsZUFBZSxJQUFJLENBQUMsU0FBVSxDQUFDLGtCQUFrQixDQUN2RixPQUFPLENBQ1IsRUFBRSxDQUFDO0lBQ04sQ0FBQywwQkFBeUI7SUFFbEIsZUFBZTtRQUNyQixJQUFJO1lBQ0YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssR0FBRyxpREFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUMxQyxTQUFTLENBQUM7WUFDVixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNyRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSztvQkFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUs7d0JBQzVCLGFBQWEsQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7YUFDdkU7U0FDRjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUMsMkJBQTBCO0lBRW5CLG1CQUFtQixDQUFDLElBQWM7UUFDeEMseUJBQXlCO1FBQ3pCLElBQUksSUFBSSxDQUFDO1FBQ1QsSUFBSSxDQUFDLGdCQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM3QixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNsQjthQUFNO1lBQ0wsTUFBTSx3QkFBd0IsQ0FBQztTQUNoQztRQUVELElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUM5QixDQUFDLEVBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxDQUN4QyxDQUFDO1FBQ0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUV6RSxvQkFBb0I7UUFDcEIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxLQUFLLEdBQWEsRUFBRSxDQUFDO1FBQ3pCLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQjtRQUN0QyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQyxtQkFBbUI7UUFDeEMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksVUFBVSxHQUFhLEVBQUUsQ0FBQztRQUM5QixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksSUFBWSxDQUFDO1FBQ2pCLElBQUksSUFBWSxDQUFDO1FBQ2pCLElBQUksVUFBVSxHQUFlLEVBQUUsQ0FBQztRQUNoQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFFWixjQUFjO1FBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2hELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMzQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVTthQUN6QjtpQkFBTTtnQkFDTCxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWTthQUMzQjtZQUVELEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFYixxQ0FBcUM7WUFDckMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNULFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM5QztpQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pCLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDMUI7U0FDRjtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxFQUFFO2dCQUN6QixFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO29CQUM1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN6QyxDQUFDLENBQUM7YUFDSjtpQkFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFO2dCQUN6QixFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9ELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7b0JBQzVCLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDMUMsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO29CQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDbEU7cUJBQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ2xELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3JEO3FCQUFNO29CQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ25EO2FBQ0Y7U0FDRjtRQUVELG1CQUFtQjtRQUVuQjs7Ozs7V0FLRztRQUNILElBQ0UsQ0FBQyxnQkFBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ2hDLGdCQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO1lBQzVCLGdCQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUNwQztZQUNBLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzNELFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ25CLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNuRCxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDdkQsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDbkQsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDeEQ7U0FDRjthQUFNO1lBQ0wsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDM0QsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDbkIsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ3ZCLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ25ELFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNuRCxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN4RDtTQUNGO1FBRUQsdUVBQXVFO1FBQ3ZFLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM5RCxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUNqRSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxJQUFJLFlBQVksR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBRTNCLDBCQUEwQjtRQUMxQixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNsRSxJQUFJLGNBQWMsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxZQUFZLEdBQUcsV0FBVyxDQUFDO1FBRS9COzs7V0FHRztRQUVILFdBQVc7UUFDWCxJQUFJLGVBQWUsR0FBRyxDQUFDLENBQUM7UUFDeEIsdUJBQXVCO1FBQ3ZCLElBQUksSUFBWSxDQUFDO1FBQ2pCLElBQUksSUFBWSxDQUFDO1FBQ2pCLElBQUksb0JBQW9CLEdBQUcsZ0JBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzlELElBQUksZ0JBQUMsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsRUFBRTtZQUNwQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUNuRCxJQUFJO2dCQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFDM0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdEUsNkJBQTZCO1NBQzlCO2FBQU07WUFDTCxNQUFNLGdEQUFnRCxDQUFDO1NBQ3hEO1FBRUQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsY0FBYyxFQUFFO1lBQzlELENBQUMsRUFBRSxJQUFJLEdBQUcsYUFBYSxHQUFHLENBQUM7WUFDM0IsQ0FBQyxFQUFFLElBQUksR0FBRyxjQUFjLEdBQUcsQ0FBQztTQUM3QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxjQUFjLEVBQUU7WUFDOUQsQ0FBQyxFQUFFLElBQUksR0FBRyxhQUFhLEdBQUcsQ0FBQztZQUMzQixDQUFDLEVBQUUsSUFBSSxHQUFHLGNBQWMsR0FBRyxDQUFDO1NBQzdCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLGNBQWMsRUFBRTtZQUM5RCxDQUFDLEVBQUUsSUFBSSxHQUFHLGFBQWEsR0FBRyxDQUFDO1lBQzNCLENBQUMsRUFBRSxJQUFJLEdBQUcsY0FBYyxHQUFHLENBQUM7U0FDN0IsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsY0FBYyxFQUFFO1lBQzlELENBQUMsRUFBRSxJQUFJLEdBQUcsYUFBYSxHQUFHLENBQUM7WUFDM0IsQ0FBQyxFQUFFLElBQUksR0FBRyxjQUFjLEdBQUcsQ0FBQztTQUM3QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxjQUFjLEVBQUU7WUFDOUQsQ0FBQyxFQUFFLElBQUksR0FBRyxhQUFhLEdBQUcsQ0FBQztZQUMzQixDQUFDLEVBQUUsSUFBSSxHQUFHLGNBQWMsR0FBRyxDQUFDO1NBQzdCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUc7Z0JBQ3hCLENBQUMsRUFBRSxJQUFJO2dCQUNQLENBQUMsRUFBRSxJQUFJO2dCQUNQLEtBQUssRUFBRSxhQUFhO2dCQUNwQixNQUFNLEVBQUUsY0FBYzthQUN2QixDQUFDO1NBQ0g7UUFFRCxTQUFTO1FBQ1QsZUFBZSxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLE9BQWUsQ0FBQztRQUNwQixJQUFJLE9BQWUsQ0FBQztRQUNwQixJQUFJLGtCQUFrQixHQUFHLGdCQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUVyRCxJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFO1lBQ3hCLElBQUksZ0JBQUMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRTtnQkFDbEMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDL0MsT0FBTztvQkFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQzt3QkFDdEIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzNEO2lCQUFNO2dCQUNMLE1BQU0sOENBQThDLENBQUM7YUFDdEQ7U0FDRjthQUFNO1lBQ0wsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNmLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDaEI7UUFFRCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxjQUFjLEVBQUU7WUFDOUQsQ0FBQyxFQUFFLE9BQU8sR0FBRyxXQUFXLEdBQUcsQ0FBQztZQUM1QixDQUFDLEVBQUUsT0FBTyxHQUFHLFlBQVksR0FBRyxDQUFDO1NBQzlCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLGNBQWMsRUFBRTtZQUM5RCxDQUFDLEVBQUUsT0FBTyxHQUFHLFdBQVcsR0FBRyxDQUFDO1lBQzVCLENBQUMsRUFBRSxPQUFPLEdBQUcsWUFBWSxHQUFHLENBQUM7U0FDOUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsY0FBYyxFQUFFO1lBQzlELENBQUMsRUFBRSxPQUFPLEdBQUcsV0FBVyxHQUFHLENBQUM7WUFDNUIsQ0FBQyxFQUFFLE9BQU8sR0FBRyxZQUFZLEdBQUcsQ0FBQztTQUM5QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxjQUFjLEVBQUU7WUFDOUQsQ0FBQyxFQUFFLE9BQU8sR0FBRyxXQUFXLEdBQUcsQ0FBQztZQUM1QixDQUFDLEVBQUUsT0FBTyxHQUFHLFlBQVksR0FBRyxDQUFDO1NBQzlCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLGNBQWMsRUFBRTtZQUM5RCxDQUFDLEVBQUUsT0FBTyxHQUFHLFdBQVcsR0FBRyxDQUFDO1lBQzVCLENBQUMsRUFBRSxPQUFPLEdBQUcsWUFBWSxHQUFHLENBQUM7U0FDOUIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMxRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHO2dCQUN0QixDQUFDLEVBQUUsT0FBTztnQkFDVixDQUFDLEVBQUUsT0FBTztnQkFDVixLQUFLLEVBQUUsV0FBVztnQkFDbEIsTUFBTSxFQUFFLFlBQVk7YUFDckIsQ0FBQztTQUNIO1FBRUQsUUFBUTtRQUNSLElBQUksS0FBSyxHQUFhLEVBQUUsQ0FBQztRQUN6QixJQUFJLEtBQUssR0FBYSxFQUFFLENBQUM7UUFFekIsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsRUFBRTtZQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNuRCw4Q0FBOEM7Z0JBQzlDLElBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7b0JBQzVDLE1BQU07aUJBQ1A7Z0JBRUQsZUFBZSxFQUFFLENBQUM7Z0JBQ2xCLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7b0JBQ2xCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBNEIsQ0FBQyxDQUFDLENBQUM7b0JBQzNELEtBQUssQ0FBQyxJQUFJLENBQ1IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBNEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FDcEUsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BELEtBQUssQ0FBQyxJQUFJLENBQ1IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUM3RCxDQUFDO2lCQUNIO2dCQUVELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLGNBQWMsRUFBRTtvQkFDOUQsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQztvQkFDM0IsQ0FBQyxlQUFlLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUM7aUJBQzdDLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxjQUFjLEVBQUU7b0JBQzlELENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUM7b0JBQzNCLENBQUMsZUFBZSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDO2lCQUM3QyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsY0FBYyxFQUFFO29CQUM5RCxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDO29CQUMzQixDQUFDLGVBQWUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQztpQkFDN0MsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLGNBQWMsRUFBRTtvQkFDOUQsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQztvQkFDM0IsQ0FBQyxlQUFlLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUM7aUJBQzdDLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxjQUFjLEVBQUU7b0JBQzlELENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUM7b0JBQzNCLENBQUMsZUFBZSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDO2lCQUM3QyxDQUFDLENBQUM7Z0JBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtvQkFDMUQsSUFBSSxHQUFHLEdBQUc7d0JBQ1IsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ1gsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ1gsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE1BQU0sRUFBRSxVQUFVO3FCQUNuQixDQUFDO29CQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUMvQjthQUNGO1NBQ0Y7UUFFRCxVQUFVO1FBQ1YsSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO1FBQzNCLElBQUksT0FBTyxHQUFhLEVBQUUsQ0FBQztRQUUzQixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFO1lBQ25ELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3JELGVBQWUsRUFBRSxDQUFDO2dCQUNsQixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELE9BQU8sQ0FBQyxJQUFJLENBQ1YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUMvRCxDQUFDO2dCQUVGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLGNBQWMsRUFBRTtvQkFDOUQsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLEdBQUcsQ0FBQztvQkFDL0IsQ0FBQyxlQUFlLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxHQUFHLENBQUM7aUJBQ2pELENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxjQUFjLEVBQUU7b0JBQzlELENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxHQUFHLENBQUM7b0JBQy9CLENBQUMsZUFBZSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksR0FBRyxDQUFDO2lCQUNqRCxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsY0FBYyxFQUFFO29CQUM5RCxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsR0FBRyxDQUFDO29CQUMvQixDQUFDLGVBQWUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxZQUFZLEdBQUcsQ0FBQztpQkFDakQsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLGNBQWMsRUFBRTtvQkFDOUQsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLEdBQUcsQ0FBQztvQkFDL0IsQ0FBQyxlQUFlLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxHQUFHLENBQUM7aUJBQ2pELENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxjQUFjLEVBQUU7b0JBQzlELENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxHQUFHLENBQUM7b0JBQy9CLENBQUMsZUFBZSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksR0FBRyxDQUFDO2lCQUNqRCxDQUFDLENBQUM7Z0JBRUgsc0JBQXNCO2dCQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO29CQUMxRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDekIsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ2IsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ2IsS0FBSyxFQUFFLFdBQVc7d0JBQ2xCLE1BQU0sRUFBRSxZQUFZO3FCQUNyQixDQUFDLENBQUM7aUJBQ0o7YUFDRjtTQUNGO1FBQ0QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztRQUVqQyxJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7UUFDM0IsSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO1FBQzNCLElBQUksUUFBUSxHQUFlLEVBQUUsQ0FBQztRQUM5QixJQUFJLFFBQVEsR0FBZSxFQUFFLENBQUM7UUFDOUIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFakQsSUFBSSxVQUFrQixDQUFDO1lBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2QsVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDcEI7aUJBQU07Z0JBQ0wsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMxQjtZQUVELElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUNkLElBQUksR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNwQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUVkLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbkIsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFFbkIsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUMxQixHQUFHLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUNwQzt5QkFBTTt3QkFDTCxHQUFHLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUNwQztpQkFDRjtxQkFBTTtvQkFDTCxJQUFJLFdBQVcsR0FBYSxFQUFFLENBQUM7b0JBQy9CLElBQUksV0FBVyxHQUFhLEVBQUUsQ0FBQztvQkFFL0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDbkQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTs0QkFDbEMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDdkIsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDdkIsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzt5QkFDbkI7NkJBQU07NEJBQ0wsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDcEIsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDckI7d0JBRUQsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDM0IsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztxQkFDNUI7b0JBRUQsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUMxQixHQUFHLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUNwQzt5QkFBTTt3QkFDTCxHQUFHLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUNwQztpQkFDRjthQUNGO1lBRUQsSUFBSSxXQUFXLEdBQUcsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEMsSUFBSSxXQUFXLEdBQUcsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQVMsRUFBRSxFQUFFO2dCQUMxQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEQsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBUyxFQUFFLEVBQUU7Z0JBQzFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoRCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksUUFBUSxHQUNWLFdBQVc7aUJBQ1IsR0FBRyxDQUFDLENBQUMsQ0FBUyxFQUFFLEdBQVcsRUFBRSxFQUFFO2dCQUM5QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLENBQUMsQ0FBQztpQkFDRCxNQUFNLENBQUMsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLEVBQUU7Z0JBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNmLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxnQkFBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFFaEMsSUFBSSxTQUFTLEdBQWEsRUFBRSxDQUFDO1lBQzdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ25ELElBQUksV0FBVyxHQUFHLFFBQVE7cUJBQ3ZCLEdBQUcsQ0FBQyxDQUFDLENBQVcsRUFBRSxFQUFFO29CQUNuQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDZCxDQUFDLENBQUM7cUJBQ0QsTUFBTSxDQUFDLENBQUMsQ0FBUyxFQUFFLEVBQUU7b0JBQ3BCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDaEIsQ0FBQyxDQUFDLENBQUM7Z0JBRUwsSUFBSSxZQUFZLEdBQ2QsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsRUFBRTtvQkFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxnQkFBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFFOUIsSUFBSSxZQUFZLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQVMsRUFBRSxFQUFFO29CQUMvQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pELENBQUMsQ0FBQyxDQUFDO2dCQUVILElBQUksV0FBVyxHQUFHLFFBQVE7cUJBQ3ZCLEdBQUcsQ0FBQyxDQUFDLENBQVcsRUFBRSxFQUFFO29CQUNuQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDZCxDQUFDLENBQUM7cUJBQ0QsTUFBTSxDQUFDLENBQUMsQ0FBUyxFQUFFLEVBQUU7b0JBQ3BCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDaEIsQ0FBQyxDQUFDLENBQUM7Z0JBRUwsSUFBSSxZQUFZLEdBQ2QsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsRUFBRTtvQkFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxnQkFBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFFOUIsSUFBSSxZQUFZLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQVMsRUFBRSxFQUFFO29CQUMvQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pELENBQUMsQ0FBQyxDQUFDO2dCQUVILFNBQVMsQ0FBQyxJQUFJLENBQ1osWUFBWTtxQkFDVCxHQUFHLENBQUMsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLEVBQUU7b0JBQzVCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLENBQUMsQ0FBQztxQkFDRCxNQUFNLENBQUMsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLEVBQUU7b0JBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQzlCLENBQUM7YUFDSDtZQUNELElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztTQUNuQztRQUVELFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQyxVQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFdEMsb0JBQW9CO1FBQ3BCLElBQUksT0FBZSxDQUFDO1FBQ3BCLElBQ0UsZ0JBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUMvQixnQkFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztZQUM1QixnQkFBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUNuRTtZQUNBLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNoRTthQUFNO1lBQ0wsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2hFO1FBRUQsT0FBTztRQUNQLElBQUksU0FBUyxHQUFHLGdCQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLElBQUksUUFBUSxHQUFHLGdCQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxPQUFPLEdBQUcsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUUxQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pDLElBQUksZ0JBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDOUM7WUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xDO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMxQztRQUVELDBCQUEwQjtRQUMxQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQjtZQUN4RCxJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUU7Z0JBQ2YsU0FBUzthQUNWO1lBRUQsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVUsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFFN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO2dCQUMxQixDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM1QyxDQUFDLENBQUM7U0FDSjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDLCtCQUE4QjtJQUV2QixxQkFBcUIsQ0FDM0IsTUFBc0MsRUFDdEMsVUFBa0IsRUFDbEIsSUFBcUM7UUFFckMsNkJBQTZCO1FBQzdCLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNiLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsSUFBSSxnQkFBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2xCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbkI7aUJBQU07Z0JBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNoQjtTQUNGO1FBQ0QsNEJBQTRCO1FBQzVCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLENBQUMsaUNBQWdDO0lBRWpDLGdGQUFnRjtJQUNoRixzQ0FBc0M7SUFDOUIsY0FBYyxDQUFDLFFBQTBCO1FBQy9DLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLGdCQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN4RCxJQUFJLGdCQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUN6RCxJQUFJLGFBQWEsR0FBRyxnQkFBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDdEUsSUFBSSxnQkFBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtvQkFDN0IsV0FBVyxHQUFHLGFBQWEsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO2lCQUNwRDthQUNGO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0VBQWdFLENBQUMsQ0FBQztnQkFDaEYsV0FBVyxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO2FBQ2pGO1NBQ0Y7YUFBTTtZQUNMLElBQUksUUFBUSxHQUFHLGdCQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0QsSUFBSSxnQkFBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDeEIsSUFBSSxhQUFhLEdBQUcsZ0JBQUMsQ0FBQyxHQUFHLENBQ3ZCLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FDdEQsQ0FBQztnQkFDRixJQUFJLGdCQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFO29CQUM3QixXQUFXLEdBQUcsYUFBYSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUM7aUJBQ3BEO2FBQ0Y7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQywyREFBMkQsQ0FBQyxDQUFDO2FBQzVFO1NBQ0Y7UUFDRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDLDBCQUF5QjtJQUVsQixZQUFZLENBQUMsUUFBMEI7UUFDN0MsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWxCLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckQsSUFBSSxnQkFBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDdkQsSUFBSSxhQUFhLEdBQUcsZ0JBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3BFLElBQUksZ0JBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUU7b0JBQzdCLFNBQVMsR0FBRyxhQUFhLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQztpQkFDbEQ7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO2lCQUN4RTthQUNGO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsOERBQThELENBQUMsQ0FBQztnQkFDOUUsU0FBUyxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO2FBQzdFO1NBQ0Y7YUFBTTtZQUNMLElBQUksUUFBUSxHQUFHLGdCQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDekQsSUFBSSxnQkFBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDeEIsSUFBSSxhQUFhLEdBQUcsZ0JBQUMsQ0FBQyxHQUFHLENBQ3ZCLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FDcEQsQ0FBQztnQkFDRixJQUFJLGdCQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFO29CQUM3QixTQUFTLEdBQUcsYUFBYSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUM7aUJBQ2xEO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMseURBQXlELENBQUMsQ0FBQztpQkFDMUU7YUFDRjtTQUNGO1FBRUQsSUFBSSxDQUFDLGdCQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtZQUN4RCxTQUFTLEdBQUcsUUFBUSxDQUFDLHdCQUF3QixHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUM7U0FDdEU7UUFFRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDLHdCQUF1QjtJQUVoQixnQkFBZ0IsQ0FBQyxRQUEwQixFQUFFLFdBQW1CO1FBQ3RFLElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQztRQUV0QixJQUFJLFFBQVEsQ0FBQyxrQkFBa0IsSUFBSSxDQUFDLEVBQUU7WUFDcEMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO1NBQ3BFO2FBQU07WUFDTCxhQUFhLEdBQUcsV0FBVyxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQyw0QkFBMkI7SUFFcEIsY0FBYyxDQUFDLFFBQTBCO1FBQy9DLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsZ0JBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFO1lBQ3hFLFdBQVcsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQztTQUNoRTtRQUNELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUMsMEJBQXlCO0lBRWxCLGVBQWUsQ0FBQyxJQUFzQjtRQUM1QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUM5QixDQUFDLEVBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxDQUN4QyxDQUFDO1FBRUYsSUFBSSxZQUFvQixDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLEVBQUU7WUFDekIsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ25CLElBQUksSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksRUFBRTtnQkFDbEMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELFlBQVksR0FBRyxDQUFDLENBQUM7YUFDbEI7aUJBQU07Z0JBQ0wsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDckQsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN0RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2pEO2dCQUNELFlBQVksR0FBRyxnQkFBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNsQztZQUVELElBQUksWUFBWSxHQUFHLGdCQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNsRCxJQUFJLFFBQVEsR0FBRyxnQkFBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDL0MsZUFBZTtnQkFDZixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNyQyw0QkFBNEI7b0JBQzVCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUM3QyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNqQixhQUFhO3dCQUNiLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFOzRCQUMzQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUN0QjtxQkFDRjtvQkFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNyRTthQUNGO1NBQ0Y7SUFDSCxDQUFDLDJCQUEwQjtJQUVuQixjQUFjLENBQUMsSUFBc0I7UUFDM0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUUzRSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxFQUFFO1lBQ3pCLHFFQUFxRTtZQUNyRSxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7WUFFdEIsSUFDRSxnQkFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQztnQkFDakMsQ0FBQyxnQkFBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsRUFDakM7Z0JBQ0EsSUFBSSxZQUFZLEdBQUcsZ0JBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUNyRCxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxFQUFFO29CQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzdDLG1FQUFtRTtvQkFDbkUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzRCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQzt3QkFDMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM3QyxDQUFDO3FCQUNGLENBQUMsQ0FBQztvQkFDSCxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN0QjthQUNGO2lCQUFNO2dCQUNMLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ25ELElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JELFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3RCO2FBQ0Y7WUFFRCxJQUFJLFdBQVcsR0FBRyxnQkFBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN6RCxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFFbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDOUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO29CQUMxQixVQUFVLEVBQUUsQ0FBQztpQkFDZDtnQkFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzdDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTt3QkFDakUsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7cUJBQ2xCO29CQUNELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDO2lCQUNsRTthQUNGO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUUvQyxJQUFJLFdBQVcsR0FBRyxnQkFBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUVmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUMzQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNmO3FCQUFNO29CQUNMLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2Y7YUFDRjtZQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDdEMsVUFBVSxFQUFFLENBQUM7Z0JBRWIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDMUIsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUNqQixXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUNyQjtvQkFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQztpQkFDbEU7YUFDRjtTQUNGO0lBQ0gsQ0FBQywwQkFBeUI7SUFFbEIsY0FBYyxDQUFDLElBQXNCO1FBQzNDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFFM0UsSUFBSSxVQUFVLEdBQWEsRUFBRSxDQUFDO1FBRTlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEI7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVksRUFBRSxFQUFFO1lBQ3BDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBRUgsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM1RDtJQUNILENBQUMsMEJBQXlCO0lBRWxCLGNBQWMsQ0FBQyxJQUFzQjtRQUMzQyxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUUzRSxJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFO1lBQ3hCLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUVqRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDakUsSUFBSSxFQUFPLENBQUM7Z0JBQ1osSUFBSSxHQUFRLENBQUM7Z0JBQ2IsSUFBSSxpQkFBc0IsQ0FBQztnQkFDM0IsSUFBSSxvQkFBeUIsQ0FBQztnQkFDOUIsSUFBSSx3QkFBNkIsQ0FBQztnQkFFbEMsSUFBSTtvQkFDRixJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQzVDLEVBQUUsR0FBRyxJQUFJLENBQUM7cUJBQ1g7eUJBQU07d0JBQ0wsRUFBRTs0QkFDQSxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNwQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3hDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztxQkFDL0I7aUJBQ0Y7Z0JBQUMsTUFBTTtvQkFDTixFQUFFLEdBQUcsSUFBSSxDQUFDO2lCQUNYO2dCQUVELElBQUk7b0JBQ0YsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUN0QyxHQUFHLEdBQUcsSUFBSSxDQUFDO3FCQUNaO3lCQUFNO3dCQUNMLEdBQUc7NEJBQ0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbkUsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUNqQztpQkFDRjtnQkFBQyxNQUFNO29CQUNOLEdBQUcsR0FBRyxJQUFJLENBQUM7aUJBQ1o7Z0JBRUQsSUFBSTtvQkFDRixJQUNFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJO3dCQUN2QyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQzt3QkFDbkMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsRUFDN0M7d0JBQ0EsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO3FCQUMxQjt5QkFBTTt3QkFDTCxpQkFBaUI7NEJBQ2YsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQzdEO2lCQUNGO2dCQUFDLE1BQU07b0JBQ04saUJBQWlCLEdBQUcsSUFBSSxDQUFDO2lCQUMxQjtnQkFFRCxJQUFJO29CQUNGLElBQ0UsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUk7d0JBQzFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO3dCQUN0QyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxFQUNoRDt3QkFDQSxvQkFBb0IsR0FBRyxJQUFJLENBQUM7cUJBQzdCO3lCQUFNO3dCQUNMLG9CQUFvQjs0QkFDbEIsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3hEO2lCQUNGO2dCQUFDLE1BQU07b0JBQ04sb0JBQW9CLEdBQUcsSUFBSSxDQUFDO2lCQUM3QjtnQkFFRCxJQUFJO29CQUNGLHdCQUF3QixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDN0Q7Z0JBQUMsTUFBTTtvQkFDTix3QkFBd0IsR0FBRyxJQUFJLENBQUM7aUJBQ2pDO2dCQUVELElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDO29CQUMzQjt3QkFDRSxDQUFDO3dCQUNELGlCQUFpQjt3QkFDakIsb0JBQW9CO3dCQUNwQixFQUFFO3dCQUNGLEdBQUc7d0JBQ0gsd0JBQXdCO3FCQUN6QjtpQkFDRixDQUFDLENBQUM7YUFDSjtTQUNGO0lBQ0gsQ0FBQywwQkFBeUI7SUFFbEIsbUJBQW1CLENBQUMsSUFBYzs7UUFDeEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLGVBQWUsR0FBUSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXRELHNCQUFzQjtRQUN0QixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3pDLElBQUksT0FBTyxJQUFJLEdBQUcsRUFBRTtnQkFDbEIsNkNBQTZDO2dCQUM3QyxlQUFlLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ2hDLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQzthQUNyQztpQkFBTTtnQkFDTCxJQUFJLE9BQU8sR0FBRyxPQUFPLEdBQUcsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsVUFBSSxDQUFDLElBQUksMENBQUUsaUJBQWlCLENBQUMsQ0FBQztnQkFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLGVBQWUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUM7Z0JBQzVDLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQzthQUNyQztTQUNGO2FBQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQzNCLElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNsQixlQUFlLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ2hELGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztZQUNwQyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtnQkFDbkMsZUFBZSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2FBQ2pDO1NBQ0Y7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDdkIsS0FBSyxFQUFFO2dCQUNMLEtBQUssRUFBRSxlQUFlLENBQUMsS0FBSyxDQUFDLEtBQUs7Z0JBQ2xDLEdBQUcsRUFBRSxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUc7YUFDL0I7U0FDRixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUMsQ0FBQywrQkFBOEI7SUFFdkIsY0FBYyxDQUFDLElBQWM7UUFDbkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNyRCxzREFBc0Q7UUFDdEQsSUFBSSxpQkFBaUIsR0FBUSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFELDBFQUEwRTtRQUUxRSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3pDLElBQUksT0FBTyxJQUFJLEdBQUcsRUFBRTtnQkFDbEIsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ2xDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNMLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxHQUFHLEdBQUcsQ0FBQztnQkFDOUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7YUFDdkM7U0FDRjthQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUMzQixJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDbEIsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ2xELGlCQUFpQixDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO1lBQ3RDLElBQUksaUJBQWlCLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0JBQ3JDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2FBQ25DO1NBQ0Y7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztZQUN6QixLQUFLLEVBQUU7Z0JBQ0wsS0FBSyxFQUFFLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxLQUFLO2dCQUNwQyxHQUFHLEVBQUUsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEdBQUc7YUFDakM7U0FDRixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsQ0FBQywwQkFBeUI7SUFFbEIsYUFBYSxDQUFDLElBQWM7UUFDbEMsSUFBSSxnQkFBZ0IsR0FBUSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3hELElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9ELElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRS9ELElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3hDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1NBQ25DO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7WUFDeEIsS0FBSyxFQUFFO2dCQUNMLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsS0FBSztnQkFDbkMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxHQUFHO2FBQ2hDO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hELENBQUMseUJBQXdCO0lBRWpCLGVBQWU7UUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3hFLENBQUMsMkJBQTBCO0lBRW5CLGVBQWU7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNoRSxDQUFDLDJCQUEwQjtJQUVuQixjQUFjO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDckUsQ0FBQywwQkFBeUI7SUFFbEIsY0FBYztRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3JFLENBQUMsMEJBQXlCO0lBRTFCLHFEQUFxRDtJQUNyRCxpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLDZCQUE2QjtJQUM3QixtREFBbUQ7SUFDbkQsdURBQXVEO0lBQ3ZELGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsU0FBUztJQUNULGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixxREFBcUQ7SUFDckQsV0FBVztJQUNYLFNBQVM7SUFDVCxlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsd0RBQXdEO0lBQ3hELFdBQVc7SUFDWCxTQUFTO0lBQ1QsT0FBTztJQUNQLHVDQUF1QztJQUN2QyxnQ0FBZ0M7SUFDaEMsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixtREFBbUQ7SUFDbkQsU0FBUztJQUNULE9BQU87SUFDUCx1Q0FBdUM7SUFDdkMsZ0NBQWdDO0lBQ2hDLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsc0RBQXNEO0lBQ3RELFNBQVM7SUFDVCxPQUFPO0lBQ1AsOERBQThEO0lBQzlELGlFQUFpRTtJQUNqRSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFFBQVE7SUFDUiw0REFBNEQ7SUFFNUQsZ0NBQWdDO0lBQ2hDLCtCQUErQjtJQUMvQixvQ0FBb0M7SUFDcEMseUNBQXlDO0lBQ3pDLE9BQU87SUFDUCwrREFBK0Q7SUFDL0QsOEJBQThCO0lBQzlCLE9BQU87SUFDUCw0REFBNEQ7SUFDNUQsd0VBQXdFO0lBQ3hFLDBCQUEwQjtJQUMxQix5Q0FBeUM7SUFDekMsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsV0FBVztJQUNYLHlDQUF5QztJQUN6Qyx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyxXQUFXO0lBQ1gsa0NBQWtDO0lBQ2xDLFFBQVE7SUFDUixRQUFRO0lBQ1IsSUFBSTtJQUVJLGtCQUFrQixDQUN4QixHQUFzQixFQUN0QixHQUFvQyxFQUNwQyxJQUFzQixFQUN0QixHQUFvQjtRQUVwQixJQUFJLEdBQUcsRUFBRTtZQUNQLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1lBQ3ZCLEdBQUcsQ0FBQyxRQUFRLENBQ1YsQ0FBQyxFQUNELENBQUMsRUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQ3BDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FDeEMsQ0FBQztZQUVGLEtBQUssSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUU7Z0JBQ3hDLElBQUksS0FBSyxHQUNQLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDcEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZDLElBQUksTUFBTSxHQUNSLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDcEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDaEIsR0FBRyxDQUFDLElBQUksQ0FDTixnQkFBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUM3QyxnQkFBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQzFELEtBQUssRUFDTCxDQUFDLE1BQU0sQ0FDUixDQUFDO2dCQUNGLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNkO1NBQ0Y7SUFDSCxDQUFDLDhCQUE2QjtJQUV0QixpQkFBaUIsQ0FBQyxJQUFzQjtRQUM5QyxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFzQixDQUFDO1FBQzFFLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ2pELEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3JELElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUE2QixDQUFDO1FBQzNELE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUVuRSx5QkFBeUI7UUFDekIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDLEdBQW9CLEVBQUUsRUFBRTtZQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUN4QyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQzlDO1lBRUQsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO2dCQUNoRCxNQUFNLENBQUMsR0FBRyxnQkFBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxNQUFNLENBQUMsR0FBRyxnQkFBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLE1BQU0sU0FBUyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLE1BQU0sU0FBUyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDO2dCQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FDVCxhQUFhLEVBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQ2hCLGFBQWEsRUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FDakIsQ0FBQztnQkFFRixJQUFJLElBQUksR0FBRyxVQUFVLEdBQUcsS0FBSyxFQUFFO29CQUM3QixJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxFQUFFO3dCQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztxQkFDdkI7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO3FCQUNyQjtpQkFDRjtnQkFFRCxHQUFHLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzlDLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxTQUFTLEVBQUUsQ0FBQztnQkFDakIsR0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3hDLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxJQUFJLEVBQUUsQ0FBQztnQkFFWixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN0QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyw2QkFBNEI7SUFFckIsY0FBYyxDQUFDLElBQXNCLEVBQUUsWUFBcUI7UUFDbEUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqRSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsRUFBRTtnQkFDdkQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQzthQUN4RTtpQkFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRTtnQkFDNUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUN6RTtpQkFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sRUFBRTtnQkFDMUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUN6RTtpQkFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLFdBQVcsRUFBRTtnQkFDL0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQzthQUN2RTtpQkFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLFlBQVksRUFBRTtnQkFDaEUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUM7YUFDMUQ7aUJBQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxZQUFZLEVBQUU7Z0JBQ2hFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO2FBQ3pEO2lCQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksZUFBZSxFQUFFO2dCQUNuRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUMzRDtpQkFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLGVBQWUsRUFBRTtnQkFDbkUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDM0Q7aUJBQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ2pFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDekU7U0FDRjtRQUVELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssR0FBRztZQUM3QixLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCLFVBQVUsRUFBRTtnQkFDVixHQUFHLEVBQUUsQ0FBQztnQkFDTixHQUFHLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7YUFDNUI7U0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssR0FBRztZQUM3QixLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCLFVBQVUsRUFBRTtnQkFDVixHQUFHLEVBQUUsQ0FBQztnQkFDTixHQUFHLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7YUFDNUI7U0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ25FO0lBQ0gsQ0FBQywwQkFBeUI7SUFFbEIsVUFBVSxDQUNoQixJQUFvQyxFQUNwQyxNQUFjO1FBRWQsSUFBSSxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztZQUNsRCxPQUFPLEVBQUUsTUFBTTtTQUNoQixDQUFDLENBQUM7UUFDSCxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDLHNCQUFxQjtJQUVkLFlBQVksQ0FBQyxJQUFvQyxFQUFFLE1BQWM7UUFDdkUsSUFBSSxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztZQUNwRCxjQUFjLEVBQUUsQ0FBQztTQUNsQixDQUFDLENBQUM7UUFDSCxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDLHdCQUF1QjtJQUVoQixXQUFXLENBQUMsSUFBb0MsRUFBRSxNQUFjO1FBQ3RFLElBQUksU0FBUyxHQUFHLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2RCxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xFO1FBQ0QsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQyx1QkFBc0I7Q0FDeEIsZUFBYztBQW55RGYsd0JBbXlEQzs7Ozs7Ozs7Ozs7Ozs7O0FDOTNERCxxSUFBb0M7QUFDcEMscUdBQTRCO0FBQzVCLGlHQUEwQjtBQUMxQixtR0FBMkI7QUFDM0IsNklBQW9DO0FBQ3BDLG9IQUF1QjtBQUN2QiwwQ0FBMEM7QUFDMUMsNkJBQTZCO0FBQzdCLHFFQUFnQztBQUNoQyx3RUFBa0M7QUFHbEMsTUFBTSxPQUFPLEdBQUcsYUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ25DLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNqQyxNQUFNLElBQUksR0FBRyxhQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7QUFFakMsTUFBTSxTQUFTLEdBQUcsd0JBQXdCLENBQUM7QUFDM0MsTUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM3QyxNQUFNLFVBQVUsR0FBRyxzQ0FBc0MsQ0FBQztBQUMxRCxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQy9DLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdkMsTUFBTSxLQUFLLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztBQUUxQixNQUFhLFFBQVE7SUFTbkIsWUFBWSxPQUFZO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUc7WUFDVixJQUFJLEVBQUUsU0FBUztZQUNmLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixHQUFHLEVBQUUsSUFBSTtZQUNULElBQUksRUFBRSxJQUFJO1lBQ1YsV0FBVyxFQUFFLEtBQUs7WUFDbEIsV0FBVyxFQUFFLEtBQUs7U0FDbkIsQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVNLDRCQUE0QixDQUFDLElBQXVCO1FBQ3pELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFVLEVBQUUsRUFBRTs7WUFDNUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3RCLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNyQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3JCLElBQUksS0FBSyxHQUFHLFVBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSwwQ0FBRSxLQUFNLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO29CQUNqQyxJQUFJLEdBQUcsRUFBRTt3QkFDUCxPQUFPLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO3FCQUN4RDtnQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzthQUMzQjtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDL0QsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLGtCQUFrQjtRQUN2QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBVSxFQUFFLEVBQUU7WUFDL0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSx3QkFBd0I7UUFDN0IsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFDNUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBVSxFQUFFLEVBQUU7O1lBQ3pELEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN0QixHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDckIsSUFBSSxLQUFLLEdBQUcsVUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLDBDQUFFLEtBQU0sQ0FBQztZQUNuQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3JCLFdBQVcsQ0FBQyxTQUFTLEdBQUcseUJBQXlCLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO29CQUNqQyxJQUFJLEdBQUcsRUFBRTt3QkFDUCxPQUFPLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO3FCQUN4RDtnQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7YUFDM0I7aUJBQU07Z0JBQ0wsV0FBVyxDQUFDLFNBQVMsR0FBRyw0QkFBNEIsQ0FBQztnQkFDckQsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDO2dCQUM1RCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxLQUFLLElBQUksY0FBYyxFQUFFLENBQUMsQ0FBQztnQkFDcEUsSUFBSSxnQkFBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRTtvQkFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO3dCQUNqQyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUk7cUJBQ3ZCLENBQUMsQ0FBQztpQkFDSjtnQkFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQzdDLElBQUksS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUNwRSxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5QixDQUFDLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzthQUMxQjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxJQUF1QjtRQUNuRCxJQUFJO1lBQ0YsSUFBSSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFdkQsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQU0sRUFBRSxDQUFNLEVBQUUsRUFBRTtnQkFDL0IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDakMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFFakMsSUFBSSxLQUFLLEdBQUcsS0FBSyxFQUFFO29CQUNqQixPQUFPLENBQUMsQ0FBQyxDQUFDO2lCQUNYO2dCQUVELElBQUksS0FBSyxHQUFHLEtBQUssRUFBRTtvQkFDakIsT0FBTyxDQUFDLENBQUM7aUJBQ1Y7Z0JBRUQsT0FBTyxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztZQUUxQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDeEMsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDM0MsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3pCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN2QjtZQUVELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDN0IsSUFBSSxjQUFjLEdBQUcsTUFBTSxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEUsMENBQTBDO1lBRTFDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDbEM7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBRU8sV0FBVyxDQUFDLElBQVM7UUFDM0IsSUFBSSxHQUFHLEdBQVEsRUFBRSxDQUFDO1FBRWxCLEtBQUssSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ3pCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDakMsS0FBSyxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQ25DLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTt3QkFDM0MsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDMUM7aUJBQ0Y7YUFDRjtTQUNGO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRU8sS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFTO1FBQ2pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QywrQkFBK0I7UUFFL0IsSUFBSSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRSxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixFQUFFLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVqQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDekMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO2FBQ2hDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQy9CO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1lBQ3hFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUM5QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRU0sV0FBVyxDQUFDLElBQW9CO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxvQkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxJQUFTO1FBQ2hDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVPLEtBQUssQ0FBQyxlQUFlO1FBQzNCLElBQUk7WUFDRixJQUFJLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWxFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksUUFBUSxDQUFDLFVBQVUsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3REO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQzthQUMvQjtZQUVELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksRUFBRTtnQkFDbEUsSUFBSSxjQUFjLEdBQUcsTUFBTSxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hFLDBDQUEwQztnQkFDMUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUNsQztpQkFBTTtnQkFDTCxVQUFVLENBQUMsR0FBRyxFQUFFO29CQUNkLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDekIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ1Y7U0FDRjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNoRDtRQUNELE9BQU8sS0FBSyxDQUFDLENBQUMsYUFBYTtJQUM3QixDQUFDO0NBQ0Y7QUEvTUQsNEJBK01DOzs7Ozs7Ozs7Ozs7OztBQ3RPRCw0REFBcUI7QUFDckIscUlBQW9DO0FBQ3BDLDJGQUF1QjtBQUV2QixNQUFNLGNBQWMsR0FBRztJQUNyQixNQUFNLEVBQUUseUNBQXlDO0lBQ2pELFVBQVUsRUFBRSwrQkFBK0I7SUFDM0MsV0FBVyxFQUFFLHNDQUFzQztJQUNuRCxTQUFTLEVBQUUsZUFBZTtJQUMxQixhQUFhLEVBQUUsMkJBQTJCO0lBQzFDLGlCQUFpQixFQUFFLGVBQWU7SUFDbEMsUUFBUSxFQUFFLDJFQUEyRTtDQUN0RixDQUFDO0FBQ0YsYUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUV2Qyw4RUFBc0M7QUFFdEMsSUFBSSxnQkFBZ0IsR0FDbEIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQ3BDLENBQUM7QUFFRixJQUFJLFNBQVMsR0FDWCxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FDakMsQ0FBQztBQUVGLElBQUksT0FBTyxHQUFHO0lBQ1osT0FBTyxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQW1CO0lBQzNFLFFBQVEsRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFtQjtJQUN2RSxVQUFVLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBbUI7SUFDM0UsUUFBUSxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQW1CO0lBQ3RFLFNBQVMsRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBbUI7SUFDbEUsV0FBVyxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFtQjtJQUN0RSxTQUFTLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBbUI7SUFDeEUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFtQjtJQUNwRSxZQUFZLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBbUI7SUFDeEUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFtQjtJQUNwRSw0RUFBNEU7SUFDNUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQW1CO0lBQ25FLFVBQVUsRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBbUI7SUFDcEUsV0FBVyxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQW1CO0lBQ3ZFLFVBQVUsRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBbUI7SUFFcEUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQW9CO0lBQzVFLFVBQVUsRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBb0I7SUFDckUsYUFBYSxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQW9CO0lBQzNFLFdBQVcsRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBb0I7SUFDdkUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQW9CO0lBQ3RFLFlBQVksRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFvQjtJQUN6RSxXQUFXLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBb0I7SUFDeEUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQW1CO0lBQ3JFLFdBQVcsRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFzQjtDQUM5RSxDQUFDO0FBRUYsTUFBTSxFQUFFLEdBQUcsSUFBSSxtQkFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2pDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDMUIsRUFBRSxDQUFDLDRCQUE0QixDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDbEQsRUFBRSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFFdEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxhQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7QUFDdEQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO0FBQ3ZFLGFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLE1BQU07SUFDdEQsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ2YsMERBQTBEO1FBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDO0tBQ2pGO1NBQ0ksSUFBSSxhQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFO1FBQ3BDLDBCQUEwQjtRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDO0tBQ3ZEO1NBQ0k7UUFDSCx1RUFBdUU7UUFDMUUsYUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQztLQUMxQztBQUNILENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN6RUgscUlBQW9DO0FBQ3BDLGlHQUEwQjtBQUMxQixtR0FBMkI7QUFFM0IsTUFBTSxPQUFPLEdBQUcsYUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ25DLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUVqQyxNQUFhLEtBQUs7SUFDaEIsZ0JBQWUsQ0FBQztJQUVULEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBWSxFQUFFLEdBQVk7UUFDakQsSUFBSSxRQUFRLEdBQUcsTUFBTSxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3RELDRDQUE0QztRQUM1QyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEMsSUFBSSxLQUFLLEdBQVEsRUFBRSxDQUFDO1FBRXBCLEtBQUssSUFBSSxJQUFJLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRTtZQUNsQyxJQUFJLFdBQVcsR0FBRyxDQUNoQixNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUNwRCxDQUFDO1lBQ0YsS0FBSyxHQUFHLENBQUMsR0FBRyxLQUFLLEVBQUUsR0FBRyxXQUFXLENBQUMsQ0FBQztTQUNwQyxZQUFXO1FBRVosS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzlDLElBQUksT0FBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFFBQVEsRUFBRTtnQkFDM0IsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSwrQkFBK0I7b0JBQ3pFLEtBQUssQ0FBQyxJQUFJLENBQUM7d0JBQ1QsUUFBUSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUTt3QkFDcEMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtxQkFDN0IsQ0FBQyxDQUFDO2lCQUNKO2FBQ0Y7aUJBQUs7Z0JBQ0YsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0QsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0QsSUFBSyxDQUFDLFNBQVMsR0FBQyxFQUFFLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsRUFBRSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRztvQkFDMUQsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDVCxRQUFRLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRO3dCQUNwQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO3FCQUM3QixDQUFDLENBQUM7aUJBQ0osK0JBQThCO2FBQ2xDLE9BQU07U0FDUix1QkFBc0I7UUFFdkIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRU0sS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFZO1FBQ3RDLElBQUksT0FBTyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsb0NBQW9DO1FBQ3BDLElBQUksSUFBSSxHQUFHLE1BQU0sVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQVcsRUFBRSxFQUFFO1lBQ2xGLElBQUksUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7UUFDSCw4QkFBOEI7UUFDOUIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sS0FBSyxDQUFDLHNCQUFzQixDQUFDLElBQVk7UUFDOUMsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLFFBQVEsR0FBRyxNQUFNLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMzQyxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRU0sTUFBTSxDQUFDLElBQVcsRUFBRSxDQUFTO1FBQ2xDLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNiLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFNLEVBQUUsQ0FBTSxFQUFFLEVBQUU7b0JBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixDQUFDLENBQUMsQ0FBQztnQkFDSCxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDNUI7aUJBQU07Z0JBQ0wsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxFQUFFO29CQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN0QjtTQUNGO1FBQ0QsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVNLFlBQVksQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUN0QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUNGO0FBbEZELHNCQWtGQzs7Ozs7OztVQ3pGRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7Ozs7O1dDVkE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztXQ2hEQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXZlcGxvdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2xpdmVwbG90Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9saXZlcGxvdC8uL3NyYy9jaGFydHMudHMiLCJ3ZWJwYWNrOi8vbGl2ZXBsb3QvLi9zcmMvbGl2ZXBsb3QudHMiLCJ3ZWJwYWNrOi8vbGl2ZXBsb3QvLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9saXZlcGxvdC8uL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly9saXZlcGxvdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9saXZlcGxvdC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2xpdmVwbG90L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xpdmVwbG90L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9saXZlcGxvdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2xpdmVwbG90L3dlYnBhY2svcnVudGltZS9oYXJtb255IG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vbGl2ZXBsb3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9saXZlcGxvdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xpdmVwbG90L3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vbGl2ZXBsb3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbGl2ZXBsb3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2xpdmVwbG90L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbGl2ZXBsb3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2xpdmVwbG90L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXFxuICpcXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXFxcIkxpY2Vuc2VcXFwiKTtcXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXFxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XFxuICpcXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxcbiAqXFxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFxcXCJBUyBJU1xcXCIgQkFTSVMsXFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXFxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxcbiAqL1xcblxcbmh0bWwsIGJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCAnSGVsdmV0aWNhJywgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dF9faGVhZGVyLXJvdyB7XFxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dC5pcy1zbWFsbC1zY3JlZW4gLm1kbC1sYXlvdXRfX2hlYWRlci1yb3cgaDMge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXRfX3RhYi1iYXItYnV0dG9uIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dC5pcy1zbWFsbC1zY3JlZW4gLm1kbC1sYXlvdXRfX3RhYi1iYXIgLm1kbC1idXR0b24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0Om5vdCguaXMtc21hbGwtc2NyZWVuKSAubWRsLWxheW91dF9fdGFiLWJhcixcXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXQ6bm90KC5pcy1zbWFsbC1zY3JlZW4pIC5tZGwtbGF5b3V0X190YWItYmFyLWNvbnRhaW5lciB7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0X190YWItYmFyLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDY0cHg7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dF9fdGFiLWJhciB7XFxuICBwYWRkaW5nOiAwO1xcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXRfX3RhYi1iYXIgLm1kbC1sYXlvdXRfX3RhYiB7XFxuICBoZWlnaHQ6IDY0cHg7XFxuICBsaW5lLWhlaWdodDogNjRweDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0X190YWItYmFyIC5tZGwtbGF5b3V0X190YWIuaXMtYWN0aXZlOjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogNHB4O1xcbn1cXG4ubWRsLWRlbW8gbWFpbiA+IC5tZGwtbGF5b3V0X190YWItcGFuZWwge1xcbiAgcGFkZGluZzogOHB4O1xcbiAgcGFkZGluZy10b3A6IDI0cHg7XFxufVxcbi5tZGwtZGVtbyAubWRsLWNhcmQge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1jYXJkID4gKiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5tZGwtZGVtbyAubWRsLWNhcmQgLm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHQge1xcbiAgbWFyZ2luOiA0MHB4O1xcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XFxuICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XFxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcXG59XFxuLm1kbC1kZW1vLm1kbC1kZW1vIC5tZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0IGg0IHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1jYXJkX19hY3Rpb25zIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDRweCA0MHB4O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcbi5tZGwtZGVtbyAubWRsLWNhcmRfX2FjdGlvbnMgYSB7XFxuICBjb2xvcjogIzAwQkNENDtcXG4gIG1hcmdpbjogMDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtY2FyZF9fYWN0aW9ucyBhOmhvdmVyLFxcbi5tZGwtZGVtbyAubWRsLWNhcmRfX2FjdGlvbnMgYTphY3RpdmUge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0ICsgLm1kbC1jYXJkX19hY3Rpb25zIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWRsLWRlbW8gI2FkZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNDBweDtcXG4gIHRvcDogMzZweDtcXG4gIHotaW5kZXg6IDk5OTtcXG59XFxuXFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0X19jb250ZW50IHNlY3Rpb246bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uLnNlY3Rpb24tLWNlbnRlciB7XFxuICBtYXgtd2lkdGg6IDEyOTBweDtcXG59XFxuLm1kbC1kZW1vICNmZWF0dXJlcyBzZWN0aW9uLnNlY3Rpb24tLWNlbnRlciB7XFxuICBtYXgtd2lkdGg6IDYyMHB4O1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiA+IGhlYWRlcntcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiA+IC5zZWN0aW9uX19wbGF5LWJ0biB7XFxuICBtaW4taGVpZ2h0OiAyMDBweDtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24gPiBoZWFkZXIgPiAubWF0ZXJpYWwtaWNvbnMge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiA+IGJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5OTtcXG4gIHRvcDogOHB4O1xcbiAgcmlnaHQ6IDhweDtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24gLnNlY3Rpb25fX2NpcmNsZSB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAtd2Via2l0LWZsZXgtZ3JvdzogMDtcXG4gICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMDtcXG4gICAgICAgICAgZmxleC1ncm93OiAwO1xcbiAgLXdlYmtpdC1mbGV4LXNocmluazogMTtcXG4gICAgICAtbXMtZmxleC1uZWdhdGl2ZTogMTtcXG4gICAgICAgICAgZmxleC1zaHJpbms6IDE7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uIC5zZWN0aW9uX190ZXh0IHtcXG4gIC13ZWJraXQtZmxleC1ncm93OiAxO1xcbiAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICAtd2Via2l0LWZsZXgtc2hyaW5rOiAwO1xcbiAgICAgIC1tcy1mbGV4LW5lZ2F0aXZlOiAwO1xcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcXG4gIHBhZGRpbmctdG9wOiA4cHg7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uIC5zZWN0aW9uX190ZXh0IGg1IHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiAuc2VjdGlvbl9fdGV4dCBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24gLnNlY3Rpb25fX2NpcmNsZS1jb250YWluZXIgPiAuc2VjdGlvbl9fY2lyY2xlLWNvbnRhaW5lcl9fY2lyY2xlIHtcXG4gIHdpZHRoOiA2NHB4O1xcbiAgaGVpZ2h0OiA2NHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcXG4gIG1hcmdpbjogOHB4IDA7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uLnNlY3Rpb24tLWZvb3RlciAuc2VjdGlvbl9fY2lyY2xlLS1iaWcge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBtYXJnaW46IDhweCAzMnB4O1xcbn1cXG4ubWRsLWRlbW8gLmlzLXNtYWxsLXNjcmVlbiBzZWN0aW9uLnNlY3Rpb24tLWZvb3RlciAuc2VjdGlvbl9fY2lyY2xlLS1iaWcge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgbWFyZ2luOiA4cHggMTZweDtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24uc2VjdGlvbi0tZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDY0cHggMDtcXG4gIG1hcmdpbjogMCAtOHB4IC04cHggLThweDtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24uc2VjdGlvbi0tY2VudGVyIC5zZWN0aW9uX190ZXh0Om5vdCg6bGFzdC1jaGlsZCkge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEzKTtcXG59XFxuLm1kbC1kZW1vIC5tZGwtY2FyZCAubWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCA+IGgzOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dF9fdGFiLXBhbmVsOm5vdCgjb3ZlcnZpZXcpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4ubWRsLWRlbW8gI2ZlYXR1cmVzIHNlY3Rpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogNzJweDtcXG59XFxuLm1kbC1kZW1vICNmZWF0dXJlcyBoNCwgI2ZlYXR1cmVzIGg1IHtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcbi5tZGwtZGVtbyAudG9jIHtcXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI0MxRUVGNDtcXG4gIG1hcmdpbjogMjRweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1kbC1kZW1vIC50b2MgaDQge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG4ubWRsLWRlbW8gLnRvYyBhIHtcXG4gIGNvbG9yOiAjNEREMEUxO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLm1kbC1kZW1vIC5tZGwtbWVudV9fY29udGFpbmVyIHtcXG4gIHotaW5kZXg6IDk5O1xcbn1cXG5cXG4uZGFzaGJvYXJkIHtcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG59XFxuXFxuLmRhc2hib2FyZC1wbG90IHtcXG4gIGhlaWdodDogODAlO1xcbn1cXG5cXG4uZGFzaGJvYXJkLWZpbHRlciB7XFxuICBoZWlnaHQ6IDIwJTtcXG59XFxuXFxuLmJhci1wbG90IHtcXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG59XFxuXFxuLnZpdGFsLXNwYW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7OztFQWNFOztBQUVGO0VBQ0UsOENBQThDO0VBQzlDLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBOztFQUVFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztBQUNiO0FBQ0E7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Q0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqXFxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cXG4gKlxcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcXFwiTGljZW5zZVxcXCIpO1xcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcXG4gKlxcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXFxuICpcXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXFxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXFxcIkFTIElTXFxcIiBCQVNJUyxcXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXFxuICovXFxuXFxuaHRtbCwgYm9keSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsICdIZWx2ZXRpY2EnLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0X19oZWFkZXItcm93IHtcXG4gIHBhZGRpbmctbGVmdDogNDBweDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0LmlzLXNtYWxsLXNjcmVlbiAubWRsLWxheW91dF9faGVhZGVyLXJvdyBoMyB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dF9fdGFiLWJhci1idXR0b24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0LmlzLXNtYWxsLXNjcmVlbiAubWRsLWxheW91dF9fdGFiLWJhciAubWRsLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXQ6bm90KC5pcy1zbWFsbC1zY3JlZW4pIC5tZGwtbGF5b3V0X190YWItYmFyLFxcbi5tZGwtZGVtbyAubWRsLWxheW91dDpub3QoLmlzLXNtYWxsLXNjcmVlbikgLm1kbC1sYXlvdXRfX3RhYi1iYXItY29udGFpbmVyIHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXRfX3RhYi1iYXItY29udGFpbmVyIHtcXG4gIGhlaWdodDogNjRweDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0X190YWItYmFyIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dF9fdGFiLWJhciAubWRsLWxheW91dF9fdGFiIHtcXG4gIGhlaWdodDogNjRweDtcXG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXRfX3RhYi1iYXIgLm1kbC1sYXlvdXRfX3RhYi5pcy1hY3RpdmU6OmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiA0cHg7XFxufVxcbi5tZGwtZGVtbyBtYWluID4gLm1kbC1sYXlvdXRfX3RhYi1wYW5lbCB7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBwYWRkaW5nLXRvcDogMjRweDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtY2FyZCB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tZGwtZGVtbyAubWRsLWNhcmQgPiAqIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLm1kbC1kZW1vIC5tZGwtY2FyZCAubWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCB7XFxuICBtYXJnaW46IDQwcHg7XFxuICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcXG4gICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcXG4gICAgICAgICAgZmxleC1ncm93OiAxO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xcbn1cXG4ubWRsLWRlbW8ubWRsLWRlbW8gLm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHQgaDQge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5tZGwtZGVtbyAubWRsLWNhcmRfX2FjdGlvbnMge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogNHB4IDQwcHg7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtY2FyZF9fYWN0aW9ucyBhIHtcXG4gIGNvbG9yOiAjMDBCQ0Q0O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1jYXJkX19hY3Rpb25zIGE6aG92ZXIsXFxuLm1kbC1kZW1vIC5tZGwtY2FyZF9fYWN0aW9ucyBhOmFjdGl2ZSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHQgKyAubWRsLWNhcmRfX2FjdGlvbnMge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZGwtZGVtbyAjYWRkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA0MHB4O1xcbiAgdG9wOiAzNnB4O1xcbiAgei1pbmRleDogOTk5O1xcbn1cXG5cXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXRfX2NvbnRlbnQgc2VjdGlvbjpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24uc2VjdGlvbi0tY2VudGVyIHtcXG4gIG1heC13aWR0aDogMTI5MHB4O1xcbn1cXG4ubWRsLWRlbW8gI2ZlYXR1cmVzIHNlY3Rpb24uc2VjdGlvbi0tY2VudGVyIHtcXG4gIG1heC13aWR0aDogNjIwcHg7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uID4gaGVhZGVye1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uID4gLnNlY3Rpb25fX3BsYXktYnRuIHtcXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiA+IGhlYWRlciA+IC5tYXRlcmlhbC1pY29ucyB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uID4gYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDk5O1xcbiAgdG9wOiA4cHg7XFxuICByaWdodDogOHB4O1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiAuc2VjdGlvbl9fY2lyY2xlIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIC13ZWJraXQtZmxleC1ncm93OiAwO1xcbiAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAwO1xcbiAgICAgICAgICBmbGV4LWdyb3c6IDA7XFxuICAtd2Via2l0LWZsZXgtc2hyaW5rOiAxO1xcbiAgICAgIC1tcy1mbGV4LW5lZ2F0aXZlOiAxO1xcbiAgICAgICAgICBmbGV4LXNocmluazogMTtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24gLnNlY3Rpb25fX3RleHQge1xcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XFxuICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XFxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcXG4gIC13ZWJraXQtZmxleC1zaHJpbms6IDA7XFxuICAgICAgLW1zLWZsZXgtbmVnYXRpdmU6IDA7XFxuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgcGFkZGluZy10b3A6IDhweDtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24gLnNlY3Rpb25fX3RleHQgaDUge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uIC5zZWN0aW9uX190ZXh0IGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiAuc2VjdGlvbl9fY2lyY2xlLWNvbnRhaW5lciA+IC5zZWN0aW9uX19jaXJjbGUtY29udGFpbmVyX19jaXJjbGUge1xcbiAgd2lkdGg6IDY0cHg7XFxuICBoZWlnaHQ6IDY0cHg7XFxuICBib3JkZXItcmFkaXVzOiAzMnB4O1xcbiAgbWFyZ2luOiA4cHggMDtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24uc2VjdGlvbi0tZm9vdGVyIC5zZWN0aW9uX19jaXJjbGUtLWJpZyB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIG1hcmdpbjogOHB4IDMycHg7XFxufVxcbi5tZGwtZGVtbyAuaXMtc21hbGwtc2NyZWVuIHNlY3Rpb24uc2VjdGlvbi0tZm9vdGVyIC5zZWN0aW9uX19jaXJjbGUtLWJpZyB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBtYXJnaW46IDhweCAxNnB4O1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbi5zZWN0aW9uLS1mb290ZXIge1xcbiAgcGFkZGluZzogNjRweCAwO1xcbiAgbWFyZ2luOiAwIC04cHggLThweCAtOHB4O1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbi5zZWN0aW9uLS1jZW50ZXIgLnNlY3Rpb25fX3RleHQ6bm90KDpsYXN0LWNoaWxkKSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTMpO1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1jYXJkIC5tZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0ID4gaDM6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0X190YWItcGFuZWw6bm90KCNvdmVydmlldykge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5tZGwtZGVtbyAjZmVhdHVyZXMgc2VjdGlvbiB7XFxuICBtYXJnaW4tYm90dG9tOiA3MnB4O1xcbn1cXG4ubWRsLWRlbW8gI2ZlYXR1cmVzIGg0LCAjZmVhdHVyZXMgaDUge1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuLm1kbC1kZW1vIC50b2Mge1xcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjQzFFRUY0O1xcbiAgbWFyZ2luOiAyNHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubWRsLWRlbW8gLnRvYyBoNCB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcbi5tZGwtZGVtbyAudG9jIGEge1xcbiAgY29sb3I6ICM0REQwRTE7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMjhweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1tZW51X19jb250YWluZXIge1xcbiAgei1pbmRleDogOTk7XFxufVxcblxcbi5kYXNoYm9hcmQge1xcbiAgbWluLWhlaWdodDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbn1cXG5cXG4uZGFzaGJvYXJkLXBsb3Qge1xcbiAgaGVpZ2h0OiA4MCU7XFxufVxcblxcbi5kYXNoYm9hcmQtZmlsdGVyIHtcXG4gIGhlaWdodDogMjAlO1xcbn1cXG5cXG4uYmFyLXBsb3Qge1xcbiAgbWluLWhlaWdodDogMzAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbn1cXG5cXG4udml0YWwtc3BhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IF8sIHsgbGFzdCwgc2FtcGxlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEZpbGVUeXBlLCBMaXZlcGxvdERhdGFUeXBlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBjb2xvck1hcEpldCA9IFtcbiAgJyMwMDAwOEYnLFxuICAnIzAwMDA5RicsXG4gICcjMDAwMEFGJyxcbiAgJyMwMDAwQkYnLFxuICAnIzAwMDBDRicsXG4gICcjMDAwMERGJyxcbiAgJyMwMDAwRUYnLFxuICAnIzAwMDBGRicsXG4gICcjMDAxMEZGJyxcbiAgJyMwMDIwRkYnLFxuICAnIzAwMzBGRicsXG4gICcjMDA0MEZGJyxcbiAgJyMwMDUwRkYnLFxuICAnIzAwNjBGRicsXG4gICcjMDA3MEZGJyxcbiAgJyMwMDgwRkYnLFxuICAnIzAwOEZGRicsXG4gICcjMDA5RkZGJyxcbiAgJyMwMEFGRkYnLFxuICAnIzAwQkZGRicsXG4gICcjMDBDRkZGJyxcbiAgJyMwMERGRkYnLFxuICAnIzAwRUZGRicsXG4gICcjMDBGRkZGJyxcbiAgJyMxMEZGRUYnLFxuICAnIzIwRkZERicsXG4gICcjMzBGRkNGJyxcbiAgJyM0MEZGQkYnLFxuICAnIzUwRkZBRicsXG4gICcjNjBGRjlGJyxcbiAgJyM3MEZGOEYnLFxuICAnIzgwRkY4MCcsXG4gICcjOEZGRjcwJyxcbiAgJyM5RkZGNjAnLFxuICAnI0FGRkY1MCcsXG4gICcjQkZGRjQwJyxcbiAgJyNDRkZGMzAnLFxuICAnI0RGRkYyMCcsXG4gICcjRUZGRjEwJyxcbiAgJyNGRkZGMDAnLFxuICAnI0ZGRUYwMCcsXG4gICcjRkZERjAwJyxcbiAgJyNGRkNGMDAnLFxuICAnI0ZGQkYwMCcsXG4gICcjRkZBRjAwJyxcbiAgJyNGRjlGMDAnLFxuICAnI0ZGOEYwMCcsXG4gICcjRkY4MDAwJyxcbiAgJyNGRjcwMDAnLFxuICAnI0ZGNjAwMCcsXG4gICcjRkY1MDAwJyxcbiAgJyNGRjQwMDAnLFxuICAnI0ZGMzAwMCcsXG4gICcjRkYyMDAwJyxcbiAgJyNGRjEwMDAnLFxuICAnI0ZGMDAwMCcsXG4gICcjRUYwMDAwJyxcbiAgJyNERjAwMDAnLFxuICAnI0NGMDAwMCcsXG4gICcjQkYwMDAwJyxcbiAgJyNBRjAwMDAnLFxuICAnIzlGMDAwMCcsXG4gICcjOEYwMDAwJyxcbiAgJyM4MDAwMDAnLFxuXTtcblxuY29uc3QgcnRDb2xvck1hcCA9IFtcbiAgJyNmZmUxMDAnLFxuICAnI2ZmYzMwMCcsXG4gICcjZmZhNTAwJyxcbiAgJyNmZjZlMDAnLFxuICAnI2ZmMzcwMCcsXG4gICcjZmYwMDAwJyxcbiAgJyNkNTAwMmInLFxuICAnI2FhMDA1NScsXG4gICcjODAwMDgwJyxcbiAgJyM1NTAwYWEnLFxuICAnIzJiMDBkNScsXG4gICcjMDAwMGZmJyxcbiAgJyMwMDJiYWEnLFxuICAnIzAwNTU1NScsXG4gICcjMDA4MDAwJyxcbl07XG5cbmNvbnN0IHV0aWxzID0gbmV3IFV0aWxzKCk7XG5cbmV4cG9ydCBjbGFzcyBDaGFydHMge1xuICBwdWJsaWMgZWxlbU9iamVjdDogYW55O1xuICBwdWJsaWMgcGVyZkRhdGFUYWJsZTogZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlO1xuICBwdWJsaWMgY3VtdWxEYXRhVGFibGU6IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZTtcbiAgcHVibGljIHh5UG9zRGF0YVRhYmxlOiBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGU7XG4gIHB1YmxpYyByeG5UaW1lRGF0YVRhYmxlOiBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGU7XG4gIHB1YmxpYyByZXdhcmREYXRhVGFibGU6IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZTtcbiAgcHVibGljIGNob2ljZURhdGFUYWJsZTogZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlO1xuICBwdWJsaWMgb2JqUGVyZkRhdGFUYWJsZTogZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlO1xuICBwdWJsaWMgcmVhbHRpbWVEYXRhVGFibGU6IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZTtcbiAgcHVibGljIGhlYWx0aERhdGFUYWJsZTogZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlO1xuXG4gIHB1YmxpYyBwZXJmRGFzaGJvYXJkOiBnb29nbGUudmlzdWFsaXphdGlvbi5EYXNoYm9hcmQ7XG4gIHB1YmxpYyB0cmlhbERhc2hib2FyZDogZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGFzaGJvYXJkO1xuICBwdWJsaWMgaGVhbHRoRGFzaGJvYXJkOiBnb29nbGUudmlzdWFsaXphdGlvbi5EYXNoYm9hcmQ7XG5cbiAgcHVibGljIHBlcmZQbG90OiBnb29nbGUudmlzdWFsaXphdGlvbi5DaGFydFdyYXBwZXI7XG4gIHB1YmxpYyBwZXJmUGxvdENvbmZpZzogZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ2hhcnRTcGVjcztcbiAgcHVibGljIHBlcmZQbG90T3B0aW9uczogZ29vZ2xlLnZpc3VhbGl6YXRpb24uTGluZUNoYXJ0T3B0aW9ucztcbiAgcHVibGljIHBlcmZGaWx0ZXI6IGdvb2dsZS52aXN1YWxpemF0aW9uLkNvbnRyb2xXcmFwcGVyO1xuICBwdWJsaWMgcGVyZkZpbHRlckNvbmZpZzogZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ29udHJvbFdyYXBwZXJPcHRpb25zO1xuICBwdWJsaWMgcGVyZkZpbHRlck9wdGlvbnM6IE9iamVjdDtcblxuICBwdWJsaWMgdHJpYWxQbG90OiBnb29nbGUudmlzdWFsaXphdGlvbi5DaGFydFdyYXBwZXI7XG4gIHB1YmxpYyB0cmlhbFBsb3RDb25maWc6IGdvb2dsZS52aXN1YWxpemF0aW9uLkNoYXJ0U3BlY3M7XG4gIHB1YmxpYyB0cmlhbFBsb3RPcHRpb25zOiBnb29nbGUudmlzdWFsaXphdGlvbi5BcmVhQ2hhcnRPcHRpb25zO1xuICBwdWJsaWMgdHJpYWxGaWx0ZXI6IGdvb2dsZS52aXN1YWxpemF0aW9uLkNvbnRyb2xXcmFwcGVyO1xuICBwdWJsaWMgdHJpYWxGaWx0ZXJDb25maWc6IGdvb2dsZS52aXN1YWxpemF0aW9uLkNvbnRyb2xXcmFwcGVyT3B0aW9ucztcbiAgcHVibGljIHRyaWFsRmlsdGVyT3B0aW9uczogT2JqZWN0O1xuXG4gIHB1YmxpYyBoZWFsdGhQbG90OiBnb29nbGUudmlzdWFsaXphdGlvbi5DaGFydFdyYXBwZXI7XG4gIHB1YmxpYyBoZWFsdGhQbG90Q29uZmlnOiBnb29nbGUudmlzdWFsaXphdGlvbi5DaGFydFNwZWNzO1xuICBwdWJsaWMgaGVhbHRoUGxvdE9wdGlvbnM6IGdvb2dsZS52aXN1YWxpemF0aW9uLlNjYXR0ZXJDaGFydE9wdGlvbnM7XG4gIHB1YmxpYyBoZWFsdGhGaWx0ZXI6IGdvb2dsZS52aXN1YWxpemF0aW9uLkNvbnRyb2xXcmFwcGVyO1xuICBwdWJsaWMgaGVhbHRoRmlsdGVyQ29uZmlnOiBnb29nbGUudmlzdWFsaXphdGlvbi5Db250cm9sV3JhcHBlck9wdGlvbnM7XG4gIHB1YmxpYyBoZWFsdGhGaWx0ZXJPcHRpb25zOiBPYmplY3Q7XG5cbiAgcHVibGljIHNjcmVlblBsb3Q6IGdvb2dsZS52aXN1YWxpemF0aW9uLkNvbWJvQ2hhcnQ7XG4gIHB1YmxpYyBzY3JlZW5QbG90T3B0aW9uczogZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ29tYm9DaGFydE9wdGlvbnM7XG5cbiAgcHVibGljIHJlYWx0aW1lUGxvdDogZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ2hhcnRXcmFwcGVyO1xuICBwdWJsaWMgcmVhbHRpbWVQbG90Q29uZmlnOiBnb29nbGUudmlzdWFsaXphdGlvbi5DaGFydFNwZWNzO1xuICBwdWJsaWMgcmVhbHRpbWVQbG90T3B0aW9uczogZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ29tYm9DaGFydE9wdGlvbnM7XG4gIHB1YmxpYyByZWFsdGltZVBsb3RBY3RpdmU6IGJvb2xlYW47XG4gIHB1YmxpYyByZWFsdGltZVJvd0RhdGFBZGRlZDogYm9vbGVhbjtcbiAgcHVibGljIHJ0RGF0YTogYW55O1xuICBwdWJsaWMgcHJldkNvb3JkOiBhbnk7XG4gIHB1YmxpYyBwcmV2Q29sb3JJZHg6IG51bWJlcjtcblxuICBwdWJsaWMgcnhuUGxvdDogZ29vZ2xlLnZpc3VhbGl6YXRpb24uSGlzdG9ncmFtO1xuICBwdWJsaWMgcnhuUGxvdE9wdGlvbnM6IGdvb2dsZS52aXN1YWxpemF0aW9uLkhpc3RvZ3JhbU9wdGlvbnM7XG5cbiAgcHVibGljIHJld2FyZFBsb3Q6IGdvb2dsZS52aXN1YWxpemF0aW9uLkNvbHVtbkNoYXJ0O1xuICBwdWJsaWMgcmV3YXJkUGxvdE9wdGlvbnM6IGdvb2dsZS52aXN1YWxpemF0aW9uLkNvbHVtbkNoYXJ0T3B0aW9ucztcblxuICBwdWJsaWMgY2hvaWNlUGxvdDogZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ29sdW1uQ2hhcnQ7XG4gIHB1YmxpYyBjaG9pY2VQbG90T3B0aW9uczogZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ29sdW1uQ2hhcnRPcHRpb25zO1xuXG4gIHB1YmxpYyBvYmpQZXJmUGxvdDogZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ29sdW1uQ2hhcnQ7XG4gIHB1YmxpYyBvYmpQZXJmUGxvdE9wdGlvbnM6IGdvb2dsZS52aXN1YWxpemF0aW9uLkNvbHVtbkNoYXJ0T3B0aW9ucztcblxuICBwcml2YXRlIHZpdGFsczogYW55O1xuICBwcml2YXRlIG5UcmlhbHM6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihlbGVtT2JqOiBhbnkpIHtcbiAgICB0aGlzLmVsZW1PYmplY3QgPSBlbGVtT2JqO1xuICAgIHRoaXMucmVhbHRpbWVQbG90QWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5zZXR1cENoYXJ0cygpO1xuXG4gICAgdGhpcy52aXRhbHMgPSB7XG4gICAgICBzdWJqZWN0OiBudWxsLFxuICAgICAgcGN0Q29ycmVjdDogMCxcbiAgICAgIHRyaWFsczogMCxcbiAgICAgIHRpbWU6IDAsXG4gICAgICBiYXR0ZXJ5TGVmdDogMCxcbiAgICAgIGJhdHRlcnlVc2VkOiAwLFxuICAgICAgcmV3YXJkRXN0aW1hdGU6IDAsXG4gICAgICBhdXRvbWF0b3I6ICcnLFxuICAgICAgYXV0b21hdG9yU3RhZ2U6IDAsXG4gICAgICBhdXRvbWF0b3JTdGFnZU5hbWU6ICcnLFxuICAgICAgbnVtUmV3YXJkOiAwLFxuICAgICAgcmZpZFRhZzogJycsXG4gICAgICByZmlkVGltZTogMCxcbiAgICAgIHRhZ0NvdW50OiB7fSxcbiAgICB9O1xuXG4gICAgdGhpcy5wcmV2Q29vcmQgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICB0aGlzLnByZXZDb2xvcklkeCA9IDA7XG4gIH1cblxuICBwdWJsaWMgc2V0dXBEYXRhVGFibGVzKCkge1xuICAgIHRoaXMucGVyZkRhdGFUYWJsZSA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUoKTtcbiAgICB0aGlzLmhlYWx0aERhdGFUYWJsZSA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUoKTtcbiAgICB0aGlzLmN1bXVsRGF0YVRhYmxlID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSgpO1xuICAgIHRoaXMueHlQb3NEYXRhVGFibGUgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlKCk7XG4gICAgdGhpcy5yeG5UaW1lRGF0YVRhYmxlID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSgpO1xuICAgIHRoaXMucmV3YXJkRGF0YVRhYmxlID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSgpO1xuICAgIHRoaXMuY2hvaWNlRGF0YVRhYmxlID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSgpO1xuICAgIHRoaXMub2JqUGVyZkRhdGFUYWJsZSA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUoKTtcbiAgICB0aGlzLnJlYWx0aW1lRGF0YVRhYmxlID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSgpO1xuICAgIHRoaXMucnREYXRhID0ge307XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgc2V0dXBDaGFydHMoKSB7XG4gICAgYXdhaXQgZ29vZ2xlLmNoYXJ0cy5sb2FkKCc1MCcsIHsgcGFja2FnZXM6IFsnY29yZWNoYXJ0JywgJ2NvbnRyb2xzJ10gfSk7XG4gICAgdGhpcy5zZXR1cENoYXJ0T3B0aW9ucygpO1xuICAgIHRoaXMuc2V0dXBEYXRhVGFibGVzKCk7XG5cbiAgICB0aGlzLnBlcmZEYXNoYm9hcmQgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGFzaGJvYXJkKFxuICAgICAgdGhpcy5lbGVtT2JqZWN0LnBlcmZEaXZcbiAgICApO1xuICAgIHRoaXMucGVyZlBsb3QgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ2hhcnRXcmFwcGVyKHRoaXMucGVyZlBsb3RDb25maWcpO1xuICAgIHRoaXMucGVyZkZpbHRlciA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5Db250cm9sV3JhcHBlcihcbiAgICAgIHRoaXMucGVyZkZpbHRlckNvbmZpZ1xuICAgICk7XG5cbiAgICB0aGlzLnRyaWFsRGFzaGJvYXJkID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhc2hib2FyZChcbiAgICAgIHRoaXMuZWxlbU9iamVjdC50cmlhbERpdlxuICAgICk7XG4gICAgdGhpcy50cmlhbFBsb3QgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ2hhcnRXcmFwcGVyKFxuICAgICAgdGhpcy50cmlhbFBsb3RDb25maWdcbiAgICApO1xuICAgIHRoaXMudHJpYWxGaWx0ZXIgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ29udHJvbFdyYXBwZXIoXG4gICAgICB0aGlzLnRyaWFsRmlsdGVyQ29uZmlnXG4gICAgKTtcblxuICAgIHRoaXMuaGVhbHRoRGFzaGJvYXJkID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhc2hib2FyZChcbiAgICAgIHRoaXMuZWxlbU9iamVjdC5oZWFsdGhEaXZcbiAgICApO1xuICAgIHRoaXMuaGVhbHRoUGxvdCA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5DaGFydFdyYXBwZXIoXG4gICAgICB0aGlzLmhlYWx0aFBsb3RDb25maWdcbiAgICApO1xuICAgIHRoaXMuaGVhbHRoRmlsdGVyID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkNvbnRyb2xXcmFwcGVyKFxuICAgICAgdGhpcy5oZWFsdGhGaWx0ZXJDb25maWdcbiAgICApO1xuXG4gICAgdGhpcy5wZXJmRGFzaGJvYXJkLmJpbmQodGhpcy5wZXJmRmlsdGVyLCB0aGlzLnBlcmZQbG90KTtcbiAgICB0aGlzLnRyaWFsRGFzaGJvYXJkLmJpbmQodGhpcy50cmlhbEZpbHRlciwgdGhpcy50cmlhbFBsb3QpO1xuICAgIHRoaXMuaGVhbHRoRGFzaGJvYXJkLmJpbmQodGhpcy5oZWFsdGhGaWx0ZXIsIHRoaXMuaGVhbHRoUGxvdCk7XG5cbiAgICB0aGlzLnNjcmVlblBsb3QgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ29tYm9DaGFydChcbiAgICAgIHRoaXMuZWxlbU9iamVjdC5zY3JlZW5QbG90XG4gICAgKTtcbiAgICAvLyB0aGlzLnJlYWx0aW1lUGxvdCA9IChcbiAgICAvLyAgIG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5DaGFydFdyYXBwZXIodGhpcy5yZWFsdGltZVBsb3RDb25maWcpXG4gICAgLy8gKTtcbiAgICB0aGlzLnJ4blBsb3QgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uSGlzdG9ncmFtKHRoaXMuZWxlbU9iamVjdC5yeG5QbG90KTtcbiAgICB0aGlzLnJld2FyZFBsb3QgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ29sdW1uQ2hhcnQoXG4gICAgICB0aGlzLmVsZW1PYmplY3QucmV3YXJkUGxvdFxuICAgICk7XG4gICAgdGhpcy5jaG9pY2VQbG90ID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkNvbHVtbkNoYXJ0KFxuICAgICAgdGhpcy5lbGVtT2JqZWN0LmNob2ljZVBsb3RcbiAgICApO1xuICAgIHRoaXMub2JqUGVyZlBsb3QgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ29sdW1uQ2hhcnQoXG4gICAgICB0aGlzLmVsZW1PYmplY3Qub2JqUGVyZlBsb3RcbiAgICApO1xuICB9Ly9GVU5DVElPTiBzZXR1cENoYXJ0c1xuXG4gIHB1YmxpYyBzZXR1cENoYXJ0T3B0aW9ucygpIHtcbiAgICB0aGlzLnBlcmZQbG90T3B0aW9ucyA9IHtcbiAgICAgIHdpZHRoOiB0aGlzLmVsZW1PYmplY3QucGVyZlBsb3QuY2xpZW50V2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuZWxlbU9iamVjdC5wZXJmUGxvdC5jbGllbnRIZWlnaHQsXG4gICAgICBoQXhpczogeyB0aXRsZTogJ1RyaWFsIycgfSxcbiAgICAgIHZBeGlzOiB7IHRpdGxlOiAnQ29ycmVjdCAoJSknLCB2aWV3V2luZG93OiB7IG1pbjogMCwgbWF4OiAxLjAgfSB9LFxuICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgIGVhc2luZzogJ2xpbmVhcicsXG4gICAgICAgIHN0YXJ0dXA6IHRydWUsXG4gICAgICB9LFxuICAgICAgc2VyaWVzOiB7XG4gICAgICAgIDA6IHsgY29sb3I6ICcjNDM0NTlkJyB9LFxuICAgICAgICAxOiB7IGNvbG9yOiAnI2UyNDMxZScgfSxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMucGVyZlBsb3RDb25maWcgPSB7XG4gICAgICBjaGFydFR5cGU6ICdMaW5lQ2hhcnQnLFxuICAgICAgY29udGFpbmVySWQ6ICdwZXJmb3JtYW5jZS1wbG90JyxcbiAgICAgIG9wdGlvbnM6IHRoaXMucGVyZlBsb3RPcHRpb25zLFxuICAgIH07XG4gICAgdGhpcy5wZXJmRmlsdGVyT3B0aW9ucyA9IHtcbiAgICAgIGZpbHRlckNvbHVtbkxhYmVsOiAnY3VycmVudFRyaWFsJyxcbiAgICAgIHVpOiB7XG4gICAgICAgIGNoYXJ0VHlwZTogJ0xpbmVDaGFydCcsXG4gICAgICAgIGNoYXJ0T3B0aW9uczoge1xuICAgICAgICAgIHNtb290aDogMjAsXG4gICAgICAgICAgaEF4aXM6IHsgYmFzZWxpbmVDb2xvcjogJ25vbmUnLCB0aXRsZTogJ1RyaWFsIycgfSxcbiAgICAgICAgICB2QXhpczogeyB0aXRsZTogJyUnLCB2aWV3V2luZG93OiB7IG1pbjogMCwgbWF4OiAxLjAgfSB9LFxuICAgICAgICAgIHdpZHRoOiB0aGlzLmVsZW1PYmplY3QucGVyZkZpbHRlci5jbGllbnRXaWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMuZWxlbU9iamVjdC5wZXJmRmlsdGVyLmNsaWVudEhlaWdodCxcbiAgICAgICAgICBhbmltYXRpb246IHsgZHVyYXRpb246IDEwMDAsIGVhc2luZzogJ291dCcgfSxcbiAgICAgICAgfSxcbiAgICAgICAgY2hhcnRWaWV3OiB7XG4gICAgICAgICAgY29sdW1uczogWzAsIDFdLFxuICAgICAgICB9LFxuICAgICAgICBtaW5SYW5nZVNpemU6IDIsXG4gICAgICB9LFxuICAgIH07XG4gICAgdGhpcy5wZXJmRmlsdGVyQ29uZmlnID0ge1xuICAgICAgY29udHJvbFR5cGU6ICdDaGFydFJhbmdlRmlsdGVyJyxcbiAgICAgIGNvbnRhaW5lcklkOiAncGVyZm9ybWFuY2UtZmlsdGVyJyxcbiAgICAgIHN0YXRlOiB7IHJhbmdlOiB7IHN0YXJ0OiAwLCBlbmQ6IDEwMCB9IH0sXG4gICAgICBvcHRpb25zOiB0aGlzLnBlcmZGaWx0ZXJPcHRpb25zLFxuICAgIH07XG4gICAgdGhpcy50cmlhbFBsb3RPcHRpb25zID0ge1xuICAgICAgd2lkdGg6IHRoaXMuZWxlbU9iamVjdC50cmlhbFBsb3QuY2xpZW50V2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuZWxlbU9iamVjdC50cmlhbFBsb3QuY2xpZW50SGVpZ2h0LFxuICAgICAgYXJlYU9wYWNpdHk6IDAuNSxcbiAgICAgIGhBeGlzOiB7IHRpdGxlOiAnVGltZSAoaCkgJyB9LFxuICAgICAgdkF4ZXM6IHtcbiAgICAgICAgMDogeyB0aXRsZTogJ1RyaWFsIGNvdW50JyB9LFxuICAgICAgICAxOiB7IHRpdGxlOiAnUkZJRCcgfSxcbiAgICAgIH0sXG4gICAgICBhbmltYXRpb246IHtcbiAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgZWFzaW5nOiAnbGluZWFyJyxcbiAgICAgIH0sXG4gICAgICBzZXJpZXM6IHtcbiAgICAgICAgMDogeyB0YXJnZXRBeGlzSW5kZXg6IDAgfSxcbiAgICAgICAgMTogeyB0YXJnZXRBeGlzSW5kZXg6IDAgfSxcbiAgICAgICAgMjogeyB0YXJnZXRBeGlzSW5kZXg6IDEgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICB0aGlzLnRyaWFsUGxvdENvbmZpZyA9IHtcbiAgICAgIGNoYXJ0VHlwZTogJ0FyZWFDaGFydCcsXG4gICAgICBjb250YWluZXJJZDogJ3RyaWFsLXBsb3QnLFxuICAgICAgb3B0aW9uczogdGhpcy50cmlhbFBsb3RPcHRpb25zLFxuICAgIH07XG4gICAgdGhpcy50cmlhbEZpbHRlck9wdGlvbnMgPSB7XG4gICAgICBmaWx0ZXJDb2x1bW5MYWJlbDogJ3RpbWUnLFxuICAgICAgdWk6IHtcbiAgICAgICAgY2hhcnRUeXBlOiAnTGluZUNoYXJ0JyxcbiAgICAgICAgY2hhcnRPcHRpb25zOiB7XG4gICAgICAgICAgaEF4aXM6IHsgYmFzZWxpbmVDb2xvcjogJ25vbmUnLCB0aXRsZTogJ1RpbWUnIH0sXG4gICAgICAgICAgdkF4aXM6IHsgdGl0bGU6ICcjJyB9LFxuICAgICAgICAgIHdpZHRoOiB0aGlzLmVsZW1PYmplY3QudHJpYWxGaWx0ZXIuY2xpZW50V2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLmVsZW1PYmplY3QudHJpYWxGaWx0ZXIuY2xpZW50SGVpZ2h0LFxuICAgICAgICAgIGFuaW1hdGlvbjogeyBkdXJhdGlvbjogMTAwMCwgZWFzaW5nOiAnb3V0JyB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNoYXJ0Vmlldzoge1xuICAgICAgICBjb2x1bW5zOiBbMCwgMV0sXG4gICAgICB9LFxuICAgIH07XG4gICAgdGhpcy50cmlhbEZpbHRlckNvbmZpZyA9IHtcbiAgICAgIGNvbnRyb2xUeXBlOiAnQ2hhcnRSYW5nZUZpbHRlcicsXG4gICAgICBjb250YWluZXJJZDogJ3RyaWFsLWZpbHRlcicsXG4gICAgICBzdGF0ZTogeyByYW5nZTogeyBzdGFydDogMCwgZW5kOiAxMDAgfSB9LFxuICAgICAgb3B0aW9uczogdGhpcy50cmlhbEZpbHRlck9wdGlvbnMsXG4gICAgfTtcblxuICAgIHRoaXMuaGVhbHRoUGxvdE9wdGlvbnMgPSB7XG4gICAgICB3aWR0aDogdGhpcy5lbGVtT2JqZWN0LmhlYWx0aFBsb3QuY2xpZW50V2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuZWxlbU9iamVjdC5oZWFsdGhQbG90LmNsaWVudEhlaWdodCxcbiAgICAgIGhBeGlzOiB7IHRpdGxlOiAnVHJpYWwjJyB9LFxuICAgICAgdkF4aXM6IHsgdGl0bGU6ICdUaW1lIChtcyknIH0sXG4gICAgICAvLyBhbmltYXRpb246IHtcbiAgICAgIC8vICAgZHVyYXRpb246IDUwMCxcbiAgICAgIC8vICAgZWFzaW5nOiAnbGluZWFyJyxcbiAgICAgIC8vICAgc3RhcnR1cDogdHJ1ZVxuICAgICAgLy8gfVxuICAgIH07XG5cbiAgICB0aGlzLmhlYWx0aFBsb3RDb25maWcgPSB7XG4gICAgICBjaGFydFR5cGU6ICdTY2F0dGVyQ2hhcnQnLFxuICAgICAgY29udGFpbmVySWQ6ICdoZWFsdGgtcGxvdCcsXG4gICAgICBvcHRpb25zOiB0aGlzLmhlYWx0aFBsb3RPcHRpb25zLFxuICAgIH07XG4gICAgdGhpcy5oZWFsdGhGaWx0ZXJPcHRpb25zID0ge1xuICAgICAgZmlsdGVyQ29sdW1uTGFiZWw6ICd0cmlhbCcsXG4gICAgICB1aToge1xuICAgICAgICBjaGFydFR5cGU6ICdTY2F0dGVyQ2hhcnQnLFxuICAgICAgICBjaGFydE9wdGlvbnM6IHtcbiAgICAgICAgICBzbW9vdGg6IDIwLFxuICAgICAgICAgIGhBeGlzOiB7IGJhc2VsaW5lQ29sb3I6ICdub25lJywgdGl0bGU6ICdUcmlhbCMnIH0sXG4gICAgICAgICAgdkF4aXM6IHsgdGl0bGU6ICdtcycgfSxcbiAgICAgICAgICB3aWR0aDogdGhpcy5lbGVtT2JqZWN0LmhlYWx0aEZpbHRlci5jbGllbnRXaWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMuZWxlbU9iamVjdC5oZWFsdGhGaWx0ZXIuY2xpZW50SGVpZ2h0LFxuICAgICAgICAgIC8vIGFuaW1hdGlvbjogeyBkdXJhdGlvbjogMTAwMCwgZWFzaW5nOiAnbGluZWFyJyB9XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG4gICAgdGhpcy5oZWFsdGhGaWx0ZXJDb25maWcgPSB7XG4gICAgICBjb250cm9sVHlwZTogJ0NoYXJ0UmFuZ2VGaWx0ZXInLFxuICAgICAgY29udGFpbmVySWQ6ICdoZWFsdGgtZmlsdGVyJyxcbiAgICAgIHN0YXRlOiB7IHJhbmdlOiB7IHN0YXJ0OiAwLCBlbmQ6IDEwMCB9IH0sXG4gICAgICBvcHRpb25zOiB0aGlzLmhlYWx0aEZpbHRlck9wdGlvbnMsXG4gICAgfTtcblxuICAgIC8vIHRoaXMuaGVhbHRoUGxvdE9wdGlvbnMgPSB7XG4gICAgLy8gICB3aWR0aDogdGhpcy5lbGVtT2JqZWN0LmhlYWx0aFBsb3QuY2xpZW50V2lkdGgsXG4gICAgLy8gICBoZWlnaHQ6IHRoaXMuZWxlbU9iamVjdC5oZWFsdGhQbG90LmNsaWVudEhlaWdodCxcbiAgICAvLyAgIGhBeGlzOiB7IHRpdGxlOiAnVHJpYWwgIycgfSxcbiAgICAvLyAgIHZBeGlzOiB7IHRpdGxlOiAnVGltZSAobXMpJyB9LFxuICAgIC8vICAgYW5pbWF0aW9uOiB7XG4gICAgLy8gICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgLy8gICAgIGVhc2luZzogJ2xpbmVhcicsXG4gICAgLy8gICAgIHN0YXJ0dXA6IHRydWVcbiAgICAvLyAgIH1cbiAgICAvLyB9O1xuICAgIC8vIHRoaXMuaGVhbHRoUGxvdENvbmZpZyA9IHtcbiAgICAvLyAgIGNoYXJ0VHlwZTogJ1NjYXR0ZXJDaGFydCcsXG4gICAgLy8gICBjb250YWluZXJJZDogJ2hlYWx0aC1wbG90JyxcbiAgICAvLyAgIG9wdGlvbnM6IHRoaXMuaGVhbHRoUGxvdE9wdGlvbnNcbiAgICAvLyB9O1xuICAgIC8vIHRoaXMuaGVhbHRoRmlsdGVyT3B0aW9ucyA9IHtcbiAgICAvLyAgIGZpbHRlckNvbHVtbkxhYmVsOiAndHJpYWwnLFxuICAgIC8vICAgdWk6IHtcbiAgICAvLyAgICAgY2hhcnRUeXBlOiAnU2NhdHRlckNoYXJ0JyxcbiAgICAvLyAgICAgY2hhcnRPcHRpb25zOiB7XG4gICAgLy8gICAgICAgaEF4aXM6IHsgYmFzZWxpbmVDb2xvcjogJ25vbmUnLCB0aXRsZTogJ1RyaWFsICMnIH0sXG4gICAgLy8gICAgICAgdkF4aXM6IHsgdGl0bGU6ICdtcycgfSxcbiAgICAvLyAgICAgICB3aWR0aDogdGhpcy5lbGVtT2JqZWN0LmhlYWx0aEZpbHRlci5jbGllbnRXaWR0aCxcbiAgICAvLyAgICAgICBoZWlnaHQ6IHRoaXMuZWxlbU9iamVjdC5oZWFsdGhGaWx0ZXIuY2xpZW50SGVpZ2h0LFxuICAgIC8vICAgICAgIGFuaW1hdGlvbjogeyBkdXJhdGlvbjogMTAwMCwgZWFzaW5nOiAnb3V0JyB9XG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIG1pblJhbmdlU2l6ZTogMlxuICAgIC8vICAgfVxuICAgIC8vIH07XG4gICAgLy8gdGhpcy5oZWFsdGhGaWx0ZXJDb25maWcgPSB7XG4gICAgLy8gICBjb250cm9sVHlwZTogJ0NoYXJ0UmFuZ2VGaWx0ZXInLFxuICAgIC8vICAgY29udGFpbmVySWQ6ICdoZWFsdGgtZmlsdGVyJyxcbiAgICAvLyAgIHN0YXRlOiB7IHJhbmdlOiB7IHN0YXJ0OiAwLCBlbmQ6IDEwMCB9IH0sXG4gICAgLy8gICBvcHRpb25zOiB0aGlzLmhlYWx0aEZpbHRlck9wdGlvbnNcbiAgICAvLyB9O1xuXG4gICAgdGhpcy5zY3JlZW5QbG90T3B0aW9ucyA9IHtcbiAgICAgIHNlcmllc1R5cGU6ICdzY2F0dGVyJyxcbiAgICAgIHBvaW50U2l6ZTogMSxcbiAgICB9O1xuICAgIHRoaXMucnhuUGxvdE9wdGlvbnMgPSB7XG4gICAgICB3aWR0aDogdGhpcy5lbGVtT2JqZWN0LnJ4blBsb3QuY2xpZW50V2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuZWxlbU9iamVjdC5yeG5QbG90LmNsaWVudEhlaWdodCxcbiAgICAgIHRpdGxlOiAnUmVhY3Rpb24gVGltZSAobXMpJyxcbiAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICBlYXNpbmc6ICdsaW5lYXInLFxuICAgICAgICBzdGFydHVwOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGxlZ2VuZDogeyBwb3NpdGlvbjogJ25vbmUnIH0sXG4gICAgfTtcbiAgICB0aGlzLnJld2FyZFBsb3RPcHRpb25zID0ge1xuICAgICAgd2lkdGg6IHRoaXMuZWxlbU9iamVjdC5yZXdhcmRQbG90LmNsaWVudFdpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmVsZW1PYmplY3QucmV3YXJkUGxvdC5jbGllbnRIZWlnaHQsXG4gICAgICB0aXRsZTogJ0Ftb3VudCBvZiBSZXdhcmQnLFxuICAgICAgaEF4aXM6IHsgdGl0bGU6ICdyZXdhcmQgYW1vdW50JyB9LFxuICAgICAgdkF4aXM6IHsgdGl0bGU6ICdjb3VudHMnLCBtaW5WYWx1ZTogMCwgbWF4VmFsdWU6IDEgfSxcbiAgICAgIGxlZ2VuZDogeyBwb3NpdGlvbjogJ25vbmUnIH0sXG4gICAgfTtcbiAgICB0aGlzLmNob2ljZVBsb3RPcHRpb25zID0ge1xuICAgICAgd2lkdGg6IHRoaXMuZWxlbU9iamVjdC5jaG9pY2VQbG90LmNsaWVudFdpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmVsZW1PYmplY3QuY2hvaWNlUGxvdC5jbGllbnRIZWlnaHQsXG4gICAgICBoQXhpczogeyB0aXRsZTogJ0Nob2ljZScgfSxcbiAgICAgIHZBeGlzOiB7IHRpdGxlOiAnY291bnRzJywgbWluVmFsdWU6IDAsIG1heFZhbHVlOiAxIH0sXG4gICAgICBsZWdlbmQ6IHsgcG9zaXRpb246ICdub25lJyB9LFxuICAgIH07XG4gICAgdGhpcy5vYmpQZXJmUGxvdE9wdGlvbnMgPSB7XG4gICAgICB3aWR0aDogdGhpcy5lbGVtT2JqZWN0Lm9ialBlcmZQbG90LmNsaWVudFdpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmVsZW1PYmplY3Qub2JqUGVyZlBsb3QuY2xpZW50SGVpZ2h0LFxuICAgICAgaEF4aXM6IHsgdGl0bGU6ICdPYmplY3RzJyB9LFxuICAgICAgdkF4aXM6IHsgdGl0bGU6ICdjb3VudHMnLCBtaW5WYWx1ZTogMCwgbWF4VmFsdWU6IDEgfSxcbiAgICAgIHRpdGxlOiAnT2JqZWN0IFBlcmZvcm1hbmNlJyxcbiAgICAgIGxlZ2VuZDogeyBwb3NpdGlvbjogJ25vbmUnIH0sXG4gICAgfTtcbiAgfS8vRlVOQ1RJT04gc2V0dXBDaGFydE9wdGlvbnNcblxuICBwdWJsaWMgaW5pdGlhbGl6ZUNoYXJ0RGF0YShmaWxlOiBGaWxlVHlwZSwgcGxvdE9wdGlvbnM6IGFueSkge1xuICAgIC8vIFJlbW92ZSByb3dzIGFuZCBjb2x1bW5zXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wZXJmRGF0YVRhYmxlKTtcbiAgICB0aGlzLnBlcmZEYXRhVGFibGUucmVtb3ZlUm93cygwLCB0aGlzLnBlcmZEYXRhVGFibGUuZ2V0TnVtYmVyT2ZSb3dzKCkpO1xuICAgIHRoaXMucGVyZkRhdGFUYWJsZS5yZW1vdmVDb2x1bW5zKFxuICAgICAgMCxcbiAgICAgIHRoaXMucGVyZkRhdGFUYWJsZS5nZXROdW1iZXJPZkNvbHVtbnMoKVxuICAgICk7XG5cbiAgICB0aGlzLmN1bXVsRGF0YVRhYmxlLnJlbW92ZVJvd3MoMCwgdGhpcy5jdW11bERhdGFUYWJsZS5nZXROdW1iZXJPZlJvd3MoKSk7XG4gICAgdGhpcy5jdW11bERhdGFUYWJsZS5yZW1vdmVDb2x1bW5zKFxuICAgICAgMCxcbiAgICAgIHRoaXMuY3VtdWxEYXRhVGFibGUuZ2V0TnVtYmVyT2ZDb2x1bW5zKClcbiAgICApO1xuXG4gICAgdGhpcy5oZWFsdGhEYXRhVGFibGUucmVtb3ZlUm93cygwLCB0aGlzLmhlYWx0aERhdGFUYWJsZS5nZXROdW1iZXJPZlJvd3MoKSk7XG4gICAgdGhpcy5oZWFsdGhEYXRhVGFibGUucmVtb3ZlQ29sdW1ucyhcbiAgICAgIDAsXG4gICAgICB0aGlzLmhlYWx0aERhdGFUYWJsZS5nZXROdW1iZXJPZkNvbHVtbnMoKVxuICAgICk7XG5cbiAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLnJlbW92ZVJvd3MoMCwgdGhpcy54eVBvc0RhdGFUYWJsZS5nZXROdW1iZXJPZlJvd3MoKSk7XG4gICAgdGhpcy54eVBvc0RhdGFUYWJsZS5yZW1vdmVDb2x1bW5zKFxuICAgICAgMCxcbiAgICAgIHRoaXMueHlQb3NEYXRhVGFibGUuZ2V0TnVtYmVyT2ZDb2x1bW5zKClcbiAgICApO1xuXG4gICAgdGhpcy5yZWFsdGltZURhdGFUYWJsZS5yZW1vdmVSb3dzKFxuICAgICAgMCxcbiAgICAgIHRoaXMucmVhbHRpbWVEYXRhVGFibGUuZ2V0TnVtYmVyT2ZSb3dzKClcbiAgICApO1xuICAgIHRoaXMucmVhbHRpbWVEYXRhVGFibGUucmVtb3ZlQ29sdW1ucyhcbiAgICAgIDAsXG4gICAgICB0aGlzLnJlYWx0aW1lRGF0YVRhYmxlLmdldE51bWJlck9mQ29sdW1ucygpXG4gICAgKTtcbiAgICB0aGlzLnJlYWx0aW1lUGxvdEFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMucmVhbHRpbWVSb3dEYXRhQWRkZWQgPSBmYWxzZTtcbiAgICB0aGlzLnJ0RGF0YVsndGVzdCddID0gW107XG4gICAgdGhpcy5ydERhdGFbJ2Nob2ljZSddID0gW107XG5cbiAgICB0aGlzLnJ4blRpbWVEYXRhVGFibGUucmVtb3ZlUm93cyhcbiAgICAgIDAsXG4gICAgICB0aGlzLnJ4blRpbWVEYXRhVGFibGUuZ2V0TnVtYmVyT2ZSb3dzKClcbiAgICApO1xuICAgIHRoaXMucnhuVGltZURhdGFUYWJsZS5yZW1vdmVDb2x1bW5zKFxuICAgICAgMCxcbiAgICAgIHRoaXMucnhuVGltZURhdGFUYWJsZS5nZXROdW1iZXJPZkNvbHVtbnMoKVxuICAgICk7XG5cbiAgICB0aGlzLnJld2FyZERhdGFUYWJsZS5yZW1vdmVSb3dzKDAsIHRoaXMucmV3YXJkRGF0YVRhYmxlLmdldE51bWJlck9mUm93cygpKTtcbiAgICB0aGlzLnJld2FyZERhdGFUYWJsZS5yZW1vdmVDb2x1bW5zKFxuICAgICAgMCxcbiAgICAgIHRoaXMucmV3YXJkRGF0YVRhYmxlLmdldE51bWJlck9mQ29sdW1ucygpXG4gICAgKTtcblxuICAgIHRoaXMuY2hvaWNlRGF0YVRhYmxlLnJlbW92ZVJvd3MoMCwgdGhpcy5jaG9pY2VEYXRhVGFibGUuZ2V0TnVtYmVyT2ZSb3dzKCkpO1xuICAgIHRoaXMuY2hvaWNlRGF0YVRhYmxlLnJlbW92ZUNvbHVtbnMoXG4gICAgICAwLFxuICAgICAgdGhpcy5jaG9pY2VEYXRhVGFibGUuZ2V0TnVtYmVyT2ZDb2x1bW5zKClcbiAgICApO1xuXG4gICAgdGhpcy5vYmpQZXJmRGF0YVRhYmxlLnJlbW92ZVJvd3MoXG4gICAgICAwLFxuICAgICAgdGhpcy5vYmpQZXJmRGF0YVRhYmxlLmdldE51bWJlck9mUm93cygpXG4gICAgKTtcbiAgICB0aGlzLm9ialBlcmZEYXRhVGFibGUucmVtb3ZlQ29sdW1ucyhcbiAgICAgIDAsXG4gICAgICB0aGlzLm9ialBlcmZEYXRhVGFibGUuZ2V0TnVtYmVyT2ZDb2x1bW5zKClcbiAgICApO1xuXG4gICAgLy8gQWRkIGNvbHVtbnNcbiAgICB0aGlzLnBlcmZEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAnY3VycmVudFRyaWFsJyk7XG4gICAgdGhpcy5wZXJmRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ2N1cnJlbnQnKTtcbiAgICB0aGlzLnBlcmZEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAnMTAwdHJpYWxzQXZnJyk7XG5cbiAgICB0aGlzLmN1bXVsRGF0YVRhYmxlLmFkZENvbHVtbignZGF0ZXRpbWUnLCAndGltZScpO1xuICAgIHRoaXMuY3VtdWxEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAnVHJpYWxzJyk7XG4gICAgdGhpcy5jdW11bERhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdQZXJmb3JtYW5jZScpO1xuICAgIHRoaXMuY3VtdWxEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAnUkZJRCcpO1xuICAgIC8vIHRoaXMuY3VtdWxEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAnV2VpZ2h0Jyk7XG5cbiAgICB0aGlzLnJ4blRpbWVEYXRhVGFibGUuYWRkQ29sdW1uKCdzdHJpbmcnLCAnc3VjY2VzcycpO1xuICAgIHRoaXMucnhuVGltZURhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdkdXJhdGlvbk1TJyk7XG5cbiAgICAvKipcbiAgICAgKiB4eVBvc0RhdGFUYWJsZSBHdWlkZVxuICAgICAqIDA6IHhcbiAgICAgKiAxOiB5IGZpeCAoYm94KVxuICAgICAqIDI6IHkgc2FtcGxlIChib3gpXG4gICAgICogMzogeSB0ZXN0MSAoYm94KSB8IHkgc2FtZSAoYm94KVxuICAgICAqIDQ6IHkgdGVzdDIgKGJveCkgfCB5IGRpZmZlcmVudCAoYm94KVxuICAgICAqIDU6IHkgRml4X3Jld2FyZCAoZG90cylcbiAgICAgKiA2OiB5IEZpeF9wdW5pc2ggKGRvdHMpXG4gICAgICogNzogeSBUYXJnZXRfcmV3YXJkIChkb3RzKVxuICAgICAqIDg6IHkgVGFyZ2V0X3B1bmlzaCAoZG90cylcbiAgICAgKi9cbiAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ3hwb3MnKTtcbiAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ0ZpeGF0aW9uJyk7XG4gICAgdGhpcy54eVBvc0RhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdTYW1wbGUnKTtcbiAgICB0aGlzLnJlYWx0aW1lRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ2dsb2JhbFgnKTtcbiAgICB0aGlzLnJlYWx0aW1lRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ2ZpeFknKTtcbiAgICB0aGlzLnJlYWx0aW1lRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ3NhbXBsZVknKTtcblxuICAgIGlmIChmaWxlLmRhdGEhLlNhbWVEaWZmZXJlbnQgPD0gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlLmRhdGEhLlRlc3RHcmlkSW5kZXgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy54eVBvc0RhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsIGBUZXN0JHtpICsgMX1gKTtcbiAgICAgICAgdGhpcy5yZWFsdGltZURhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsIGB0ZXN0WSR7aSArIDF9YCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChmaWxlLmRhdGEhLlNhbWVEaWZmZXJlbnQgPiAwKSB7XG4gICAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ1NhbWUnKTtcbiAgICAgIHRoaXMueHlQb3NEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAnRGlmZmVyZW50Jyk7XG4gICAgICB0aGlzLnJlYWx0aW1lRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ3NhbWVZJyk7XG4gICAgICB0aGlzLnJlYWx0aW1lRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ2RpZmZlcmVudFknKTtcbiAgICB9XG5cbiAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ0ZpeF9SZXdhcmQnKTtcbiAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ0ZpeF9QdW5pc2gnKTtcbiAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ1RhcmdldF9SZXdhcmQnKTtcbiAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ1RhcmdldF9QdW5pc2gnKTtcblxuICAgIHRoaXMucmVhbHRpbWVEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAnY3VyWScpO1xuICAgIHRoaXMucmVhbHRpbWVEYXRhVGFibGUuYWRkQ29sdW1uKHsgdHlwZTogJ3N0cmluZycsIHJvbGU6ICdzdHlsZScgfSk7XG5cbiAgICB0aGlzLnJld2FyZERhdGFUYWJsZS5hZGRDb2x1bW4oJ3N0cmluZycsICdyZXdhcmQgc2l6ZScpO1xuICAgIHRoaXMucmV3YXJkRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ25yZXdhcmRzJyk7XG5cbiAgICB0aGlzLmNob2ljZURhdGFUYWJsZS5hZGRDb2x1bW4oJ3N0cmluZycsICdjaG9pY2UnKTtcbiAgICB0aGlzLmNob2ljZURhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICcjIG9mIHJlc3BvbnNlcycpO1xuXG4gICAgdGhpcy5vYmpQZXJmRGF0YVRhYmxlLmFkZENvbHVtbignc3RyaW5nJywgJ29iamVjdCcpO1xuICAgIHRoaXMub2JqUGVyZkRhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdwZXJmb3JtYW5jZScpO1xuXG4gICAgdGhpcy5oZWFsdGhEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAndHJpYWwnKTtcbiAgICB0aGlzLmhlYWx0aERhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdzYW1wbGUgY29tbWFuZCcpO1xuICAgIHRoaXMuaGVhbHRoRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ3NhbXBsZSBjb21tYW5kIG9mZicpO1xuICAgIHRoaXMuaGVhbHRoRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ3RkaXNwbGF5X2xhc3QnKTtcbiAgICB0aGlzLmhlYWx0aERhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICd0ZGlzcGxheV9maXJzdCcpO1xuICAgIHRoaXMuaGVhbHRoRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ2V5ZSBpbnRlcnZhbCcpO1xuXG4gICAgdGhpcy51cGRhdGVQbG90cyhmaWxlLCBwbG90T3B0aW9ucyk7XG4gIH0vL0ZVTkNUSU9OIGluaXRpYWxpemVDaGFydERhdGFcblxuICBwdWJsaWMgdXBkYXRlUGxvdHMoZmlsZTogRmlsZVR5cGUsIHBsb3RPcHRpb25zOiBhbnkpIHtcbiAgICBsZXQgZmlsZURhdGE6IExpdmVwbG90RGF0YVR5cGU7XG4gICAgaWYgKCFfLmlzVW5kZWZpbmVkKGZpbGUuZGF0YSkpIHtcbiAgICAgIGZpbGVEYXRhID0gZmlsZS5kYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyAnZmlsZS5kYXRhIGlzIFVuZGVmaW5lZCc7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdwbG90IHVwZGF0ZWQnKTtcbiAgICB0aGlzLmxvYWRWaXRhbHMoZmlsZSk7XG4gICAgdGhpcy5sb2FkVml0YWxzVGV4dChmaWxlKTtcbiAgICB0aGlzLmxvYWRQZXJmb3JtYW5jZURhdGEoZmlsZSk7XG4gICAgdGhpcy5sb2FkSGVhbHRoRGF0YShmaWxlRGF0YSk7XG4gICAgdGhpcy5sb2FkT2JqUGVyZkRhdGEoZmlsZURhdGEpO1xuICAgIHRoaXMubG9hZENob2ljZURhdGEoZmlsZURhdGEpO1xuICAgIHRoaXMubG9hZFJld2FyZERhdGEoZmlsZURhdGEpO1xuICAgIHRoaXMubG9hZFRvdWNoU0RUZXh0KCk7Ly9Ub3VjaFNEIHRleHQgZm9yIFNjcmVlblBsb3RcblxuICAgIHRoaXMuZHJhd1BlcmZvcm1hbmNlUGxvdChmaWxlKTsgLy8lQ29ycmVjdFxuICAgIHRoaXMuZHJhd1RyaWFsUGxvdChmaWxlKTsgLy8jVHJpYWxzXG4gICAgdGhpcy5kcmF3SGVhbHRoUGxvdChmaWxlKTsgLy9EaXNwbGF5VGltaW5nLCBTYW1wbGVDb21tYW5kLCBFeWVJbnRlcnZhbFxuICAgIHRoaXMuZHJhd09ialBlcmZQbG90KCk7Ly8lQ29ycmVjdCBieSBPYmplY3RcbiAgICB0aGlzLmRyYXdSeG5UaW1lUGxvdCgpOy8vUmVhY3Rpb25UaW1lIGhpc3RvZ3JhbVxuICAgIHRoaXMuZHJhd0Nob2ljZVBsb3QoKTsvL0Nob2lzZUJpYXMgYmFyIHBsb3RcbiAgICB0aGlzLmRyYXdSZXdhcmRQbG90KCk7Ly9OUmV3YXJkcyBiYXIgcGxvdFxuICAgIGxldCBzdHJlYW1BY3RpdmUgPSBwbG90T3B0aW9ucy5zdHJlYW1BY3RpdmU7XG4gICAgdGhpcy5kcmF3U2NyZWVuUGxvdChmaWxlRGF0YSwgc3RyZWFtQWN0aXZlKTsvL1RvdWNoIExvY2F0aW9uc1xuXG4gICAgLy9SZWFsdGltZSBQbG90XG4gICAgaWYgKHN0cmVhbUFjdGl2ZSAmJiAhdGhpcy5yZWFsdGltZVBsb3RBY3RpdmUpIHtcbiAgICAgIHRoaXMuZHJhd1JlYWx0aW1lUGxvdDIoZmlsZURhdGEpO1xuICAgICAgdGhpcy5yZWFsdGltZVBsb3RBY3RpdmUgPSB0cnVlO1xuICAgIH0vL0lGIHJlYWx0aW1lIHN0cmVhbSBhY3RpdmVcbiAgfS8vRlVOQ1RJT04gdXBkYXRlUGxvdHNcblxuICBwcml2YXRlIGxvYWRWaXRhbHMoZmlsZTogRmlsZVR5cGUpIHtcbiAgICBsZXQgZGF0YTtcbiAgICBpZiAoIV8uaXNVbmRlZmluZWQoZmlsZS5kYXRhKSkge1xuICAgICAgZGF0YSA9IGZpbGUuZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgJ2ZpbGUuZGF0YSBpcyBVbmRlZmluZWQnO1xuICAgIH1cblxuICAgIHRoaXMudml0YWxzLnN1YmplY3QgPSBkYXRhLlN1YmplY3Q7XG4gICAgdGhpcy52aXRhbHMudHJpYWxzID0gZGF0YS5SZXNwb25zZS5sZW5ndGg7XG5cbiAgICAvLyBDb252ZXJ0IG1pbGxpc2Vjb25kcyB0byBtaW51dGVzXG4gICAgbGV0IHN0YXJ0VGltZSA9IGRhdGEuU3RhcnRUaW1lO1xuICAgIHRoaXMudml0YWxzLnRpbWUgPSBfLnJvdW5kKFxuICAgICAgXy5yb3VuZChfLnRvTnVtYmVyKF8ubGFzdChzdGFydFRpbWUpKSAtIHN0YXJ0VGltZVswXSkgLyA2MDAwMFxuICAgICk7XG5cbiAgICAvKipcbiAgICAgKiBSRklEIFByb2Nlc3NpbmdcbiAgICAgKiBPbmx5IHN1cHBvcnRzIGN1cnJlbnQgZGF0YSBmb3JtYXRcbiAgICAgKiBmaWxlLmRhdGEuUkZJRFRhZyA9IHtcbiAgICAgKiAgIDA6IFswLCAyMDIwLTEwLTI3VDE5OjE5OjE5Ljk5OVosIDAwNzgyQTdFODhBNF0sXG4gICAgICogICAxOiBbXSxcbiAgICAgKiAgIC4uLlxuICAgICAqIH07XG4gICAgICovXG4gICAgbGV0IHJmaWRUYWcgPSBkYXRhLlJGSURUYWc7XG4gICAgaWYgKCFfLmlzVW5kZWZpbmVkKHJmaWRUYWcpICYmIF8uc2l6ZShyZmlkVGFnKSA+IDApIHtcbiAgICAgIHRoaXMudml0YWxzLnJmaWRUYWcgPSByZmlkVGFnW18uc2l6ZShyZmlkVGFnKSAtIDFdWzJdO1xuICAgICAgdGhpcy52aXRhbHMucmZpZFRpbWUgPSBuZXcgRGF0ZShcbiAgICAgICAgcmZpZFRhZ1tfLnNpemUocmZpZFRhZykgLSAxXVsxXVxuICAgICAgKS50b0xvY2FsZVRpbWVTdHJpbmcoJ2VuLVVTJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudml0YWxzLnJmaWRUYWcgPSBudWxsO1xuICAgICAgdGhpcy52aXRhbHMucmZpZFRpbWUgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIEF1dG9tYXRvciwgQXV0b21hdG9yU3RhZ2UsIEF1dG9tYXRvclN0YWdlTmFtZVxuICAgIGlmIChfLmlzVW5kZWZpbmVkKGRhdGEuQXV0b21hdG9yKSkge1xuICAgICAgdGhpcy52aXRhbHMuYXV0b21hdG9yID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aXRhbHMuYXV0b21hdG9yID0gZmlsZS5kYXRhLkF1dG9tYXRvcjtcbiAgICB9XG5cbiAgICBpZiAoXy5pc1VuZGVmaW5lZChkYXRhLkN1cnJlbnRBdXRvbWF0b3JTdGFnZSkpIHtcbiAgICAgIHRoaXMudml0YWxzLmF1dG9tYXRvclN0YWdlID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aXRhbHMuYXV0b21hdG9yU3RhZ2UgPSBkYXRhLkN1cnJlbnRBdXRvbWF0b3JTdGFnZTtcbiAgICB9XG5cbiAgICBpZiAoXy5pc1VuZGVmaW5lZChkYXRhLkN1cnJlbnRBdXRvbWF0b3JTdGFnZU5hbWUpKSB7XG4gICAgICB0aGlzLnZpdGFscy5hdXRvbWF0b3JTdGFnZU5hbWUgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZpdGFscy5hdXRvbWF0b3JTdGFnZU5hbWUgPSBkYXRhLkN1cnJlbnRBdXRvbWF0b3JTdGFnZU5hbWU7XG4gICAgfVxuXG4gICAgLy8gQmF0dGVyeSwgb25seSBzdXBwb3J0cyBjdXJyZW50IGRhdGEgZm9ybWF0XG4gICAgbGV0IGJhdHRlcnkgPSBkYXRhLkJhdHRlcnk7XG4gICAgaWYgKCFfLmlzVW5kZWZpbmVkKGJhdHRlcnkpICYmIF8uc2l6ZShiYXR0ZXJ5KSA+IDApIHtcbiAgICAgIHRoaXMudml0YWxzLmJhdHRlcnlMZWZ0ID0gXy5yb3VuZChiYXR0ZXJ5W18uc2l6ZShiYXR0ZXJ5KSAtIDFdWzJdICogMTAwKTtcbiAgICAgIHRoaXMudml0YWxzLmJhdHRlcnlVc2VkID0gXy5yb3VuZChcbiAgICAgICAgYmF0dGVyeVswXVsyXSAqIDEwMCAtIHRoaXMudml0YWxzLmJhdHRlcnlMZWZ0XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZpdGFscy5iYXR0ZXJ5TGVmdCA9IG51bGw7XG4gICAgICB0aGlzLnZpdGFscy5iYXR0ZXJ5VXNlZCA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gUGVyZm9ybWFuY2VcbiAgICBsZXQgbnVtQ29ycmVjdCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfLnNpemUoZGF0YS5Db3JyZWN0SXRlbSk7IGkrKykge1xuICAgICAgaWYgKGRhdGEuQ29ycmVjdEl0ZW1baV0gPT0gZGF0YS5SZXNwb25zZVtpXSkge1xuICAgICAgICBudW1Db3JyZWN0Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy52aXRhbHMubnVtQ29ycmVjdCA9IG51bUNvcnJlY3Q7XG4gICAgdGhpcy52aXRhbHMucGN0Q29ycmVjdCA9IF8ucm91bmQoKDEwMCAqIG51bUNvcnJlY3QpIC8gZGF0YS5SZXNwb25zZS5sZW5ndGgpO1xuXG4gICAgaWYgKCFfLmlzVW5kZWZpbmVkKGRhdGEuTlJld2FyZCkpIHtcbiAgICAgIHRoaXMudml0YWxzLm51bVJld2FyZCA9IGRhdGEuTlJld2FyZC5yZWR1Y2UoKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiB7XG4gICAgICAgIHJldHVybiBhICsgYjtcbiAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIHRoaXMudml0YWxzLnJld2FyZEVzdGltYXRlID0gMDtcbiAgICBpZiAoIV8uaXNVbmRlZmluZWQoZGF0YS5SZXdhcmRQZXIxMDAwVHJpYWxzKSkge1xuICAgICAgdGhpcy52aXRhbHMucmV3YXJkRXN0aW1hdGUgPSBfLnJvdW5kKFxuICAgICAgICAoZGF0YS5SZXdhcmRQZXIxMDAwVHJpYWxzICogdGhpcy52aXRhbHMubnVtUmV3YXJkKSAvIDEwMDBcbiAgICAgICk7XG4gICAgfVxuICB9Ly9GVU5DVElPTiBsb2FkVml0YWxzXG5cbiAgcHJpdmF0ZSBsb2FkVml0YWxzVGV4dChmaWxlOiBGaWxlVHlwZSkge1xuICAgIHRoaXMuZWxlbU9iamVjdC5wZXJmVml0YWxzLmlubmVySFRNTCA9IGAke3RoaXMudml0YWxzLnN1YmplY3R9OiAke3RoaXMudml0YWxzLnBjdENvcnJlY3R9JSAobiA9ICR7dGhpcy52aXRhbHMubnVtQ29ycmVjdH0gb3V0IG9mICR7dGhpcy52aXRhbHMudHJpYWxzfSwgcj0ke3RoaXMudml0YWxzLm51bVJld2FyZH09JHt0aGlzLnZpdGFscy5yZXdhcmRFc3RpbWF0ZX1tTCwgJHt0aGlzLnZpdGFscy50aW1lfSBtaW5zKWA7XG5cbiAgICAvLyBUT0RPOiBhZGQgdGhpcy52aXRhbHMudGFnQ291bnQgZGF0YVxuICAgIHRoaXMuZWxlbU9iamVjdC5yZmlkVml0YWxzLmlubmVySFRNTCA9IGBSRklEOiAke3RoaXMudml0YWxzLnJmaWRUYWd9ICgke3RoaXMudml0YWxzLnJmaWRUaW1lfSlgO1xuXG4gICAgdGhpcy5lbGVtT2JqZWN0LmJhdHRlcnlWaXRhbHMuaW5uZXJIVE1MID0gYEJhdHRlcnk6ICR7dGhpcy52aXRhbHMuYmF0dGVyeUxlZnR9JSAoLSR7dGhpcy52aXRhbHMuYmF0dGVyeVVzZWR9JSlgO1xuXG4gICAgdGhpcy5lbGVtT2JqZWN0LnRyaWFsVml0YWxzLmlubmVySFRNTCA9IGBMYXN0IFRyaWFsOiAke2ZpbGUuZGF0ZVNhdmVkIS50b0xvY2FsZVRpbWVTdHJpbmcoXG4gICAgICAnZW4tVVMnXG4gICAgKX1gO1xuICB9Ly9GVU5DVElPTiBsb2FkVml0YWxzVGV4dFxuXG4gIHByaXZhdGUgbG9hZFRvdWNoU0RUZXh0KCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnNjcmVlblBsb3RPcHRpb25zLnRpdGxlID0gYFRvdWNoIExvY2F0aW9ucyAtLSBzdGFuZGFyZCBkZXY6IFxcbiBGaXhhdGlvbjogJHtcbiAgICAgICAgTWF0aC5yb3VuZCh0aGlzLnZpdGFscy5zdGRldkZpeCAqIDEwKSAvIDEwXG4gICAgICB9IHBpeGVsc2A7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudml0YWxzLnN0ZGV2VGVzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnNjcmVlblBsb3RPcHRpb25zLnRpdGxlID1cbiAgICAgICAgICB0aGlzLnNjcmVlblBsb3RPcHRpb25zLnRpdGxlICtcbiAgICAgICAgICBgXFxuIFRhcmdldCAke2l9OiAke01hdGgucm91bmQodGhpcy52aXRhbHMuc3RkZXZUZXN0W2ldICogMTApIC8gMTB9YDtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgdG91Y2ggU0QgdGV4dCcsIGVycik7XG4gICAgfVxuICB9Ly9GVU5DVElPTiBsb2FkVG91Y2hTRFRleHRcblxuICBwcml2YXRlIGxvYWRQZXJmb3JtYW5jZURhdGEoZmlsZTogRmlsZVR5cGUpIHtcbiAgICAvLyBUeXBlY2hlY2tpbmcgZmlsZS5kYXRhXG4gICAgbGV0IGRhdGE7XG4gICAgaWYgKCFfLmlzVW5kZWZpbmVkKGZpbGUuZGF0YSkpIHtcbiAgICAgIGRhdGEgPSBmaWxlLmRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93ICdmaWxlLmRhdGEgaXMgVW5kZWZpbmVkJztcbiAgICB9XG5cbiAgICB0aGlzLnBlcmZEYXRhVGFibGUucmVtb3ZlUm93cygwLCB0aGlzLnBlcmZEYXRhVGFibGUuZ2V0TnVtYmVyT2ZSb3dzKCkpO1xuICAgIHRoaXMuY3VtdWxEYXRhVGFibGUucmVtb3ZlUm93cygwLCB0aGlzLmN1bXVsRGF0YVRhYmxlLmdldE51bWJlck9mUm93cygpKTtcbiAgICB0aGlzLnJ4blRpbWVEYXRhVGFibGUucmVtb3ZlUm93cyhcbiAgICAgIDAsXG4gICAgICB0aGlzLnJ4blRpbWVEYXRhVGFibGUuZ2V0TnVtYmVyT2ZSb3dzKClcbiAgICApO1xuICAgIHRoaXMueHlQb3NEYXRhVGFibGUucmVtb3ZlUm93cygwLCB0aGlzLnh5UG9zRGF0YVRhYmxlLmdldE51bWJlck9mUm93cygpKTtcblxuICAgIC8vIENyZWF0ZSBEYXRhIFRhYmxlXG4gICAgbGV0IHhEYXRhID0gW107XG4gICAgbGV0IHlEYXRhOiBudW1iZXJbXSA9IFtdO1xuICAgIGxldCB5RGF0YVNtYWxsID0gW107IC8vIGtlZXBzIDUgcmVjZW50XG4gICAgbGV0IHlEYXRhTGFyZ2UgPSBbXTsgLy8ga2VlcHMgMTAwIHJlY2VudFxuICAgIGxldCBudW1Ub3RhbCA9IFtdO1xuICAgIGxldCBudW1Db3JyZWN0OiBudW1iZXJbXSA9IFtdO1xuICAgIGxldCB0Q3VycmVudCA9IFtdO1xuICAgIGxldCBudW1SRklEID0gW107XG4gICAgbGV0IHhQb3M6IG51bWJlcjtcbiAgICBsZXQgeVBvczogbnVtYmVyO1xuICAgIGxldCB0b3VjaGV2ZW50OiBudW1iZXJbXVtdID0gW107XG4gICAgbGV0IHJ0ID0gW107XG5cbiAgICAvLyBwZXJmb3JtYW5jZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5Db3JyZWN0SXRlbS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGRhdGEuQ29ycmVjdEl0ZW1baV0gPT0gZGF0YS5SZXNwb25zZVtpXSkge1xuICAgICAgICB5RGF0YVtpXSA9IDE7IC8vIGNvcnJlY3RcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHlEYXRhW2ldID0gMDsgLy8gaW5jb3JyZWN0XG4gICAgICB9XG5cbiAgICAgIHhEYXRhW2ldID0gaTtcblxuICAgICAgLy8gQ3VtdWxhdGl2ZSB0cmlhbHMgJiBjb3JyZWN0IHRyaWFsc1xuICAgICAgbnVtVG90YWxbaV0gPSB4RGF0YS5sZW5ndGg7XG4gICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgbnVtQ29ycmVjdFtpXSA9IG51bUNvcnJlY3RbaSAtIDFdICsgeURhdGFbaV07XG4gICAgICB9IGVsc2UgaWYgKGkgPT0gMCkge1xuICAgICAgICBudW1Db3JyZWN0W2ldID0geURhdGFbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLk5SZXdhcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChkYXRhLlJld2FyZFN0YWdlID09IDApIHtcbiAgICAgICAgcnRbaV0gPSBkYXRhLkZpeGF0aW9uWFlUWzJdW2ldIC0gZGF0YS5TdGFydFRpbWVbaV07XG4gICAgICAgIHRoaXMucnhuVGltZURhdGFUYWJsZS5hZGRSb3dzKFtcbiAgICAgICAgICBbZmlsZS5kYXRhLkZpeGF0aW9uVG91Y2hFdmVudFtpXSwgcnRbaV1dLFxuICAgICAgICBdKTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5OUlNWUCA+IDApIHtcbiAgICAgICAgcnRbaV0gPSBkYXRhLlNhbXBsZUZpeGF0aW9uWFlUWzJdW2ldIC0gZGF0YS5TYW1wbGVTdGFydFRpbWVbaV07XG4gICAgICAgIHRoaXMucnhuVGltZURhdGFUYWJsZS5hZGRSb3dzKFtcbiAgICAgICAgICBbZGF0YS5TYW1wbGVGaXhhdGlvblRvdWNoRXZlbnRbaV0sIHJ0W2ldXSxcbiAgICAgICAgXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBydFtpXSA9IGRhdGEuUmVzcG9uc2VYWVRbMl1baV0gLSBkYXRhLlNhbXBsZVN0YXJ0VGltZVtpXTtcbiAgICAgICAgaWYgKGRhdGEuUmVzcG9uc2VbaV0gPT0gLTEpIHtcbiAgICAgICAgICB0aGlzLnJ4blRpbWVEYXRhVGFibGUuYWRkUm93cyhbWyd0aW1lb3V0JywgZGF0YS5DaG9pY2VUaW1lT3V0XV0pO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEuQ29ycmVjdEl0ZW1baV0gPT0gZGF0YS5SZXNwb25zZVtpXSkge1xuICAgICAgICAgIHRoaXMucnhuVGltZURhdGFUYWJsZS5hZGRSb3dzKFtbJ2NvcnJlY3QnLCBydFtpXV1dKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJ4blRpbWVEYXRhVGFibGUuYWRkUm93cyhbWyd3cm9uZycsIHJ0W2ldXV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5sb2cocnQpO1xuXG4gICAgLyoqXG4gICAgICogVG91Y2ggWFlcbiAgICAgKiBTdG9yZSBmaXhhdGlvbiBpbiBvZGQgaW5kaWNlcyBhbmQgY2hvaWNlIGluIGV2ZW5cbiAgICAgKiBBbGwgdG91Y2hldmVudHMuIHRvdWNoZXZlbnQgaGFzIGEgbGVuZ3RoIHRoYXQgaXMgdHdpY2UgdGhlIGxlbmd0aFxuICAgICAqIG9mIGZpbGUuZGF0YS5GaXhhdGlvblhZVCBvciBmaWxlLmRhdGEuUmVzcG9uc2VYWVRcbiAgICAgKi9cbiAgICBpZiAoXG4gICAgICAhXy5pc1VuZGVmaW5lZChkYXRhLlJlc3BvbnNlWFlUKSAmJlxuICAgICAgXy5zaXplKGRhdGEuUmVzcG9uc2VYWVQpID4gMCAmJlxuICAgICAgXy5zaXplKGZpbGUuZGF0YS5SZXNwb25zZVhZVFswXSkgPiAwXG4gICAgKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF8uc2l6ZShkYXRhLkZpeGF0aW9uWFlUWzBdKSAqIDI7IGkgKz0gMikge1xuICAgICAgICB0b3VjaGV2ZW50W2ldID0gW107XG4gICAgICAgIHRvdWNoZXZlbnRbaSArIDFdID0gW107XG4gICAgICAgIHRvdWNoZXZlbnRbaV1bMF0gPSBmaWxlLmRhdGEuRml4YXRpb25YWVRbMF1baSAvIDJdO1xuICAgICAgICB0b3VjaGV2ZW50W2kgKyAxXVswXSA9IGZpbGUuZGF0YS5SZXNwb25zZVhZVFswXVtpIC8gMl07XG4gICAgICAgIHRvdWNoZXZlbnRbaV1bMV0gPSBmaWxlLmRhdGEuRml4YXRpb25YWVRbMV1baSAvIDJdO1xuICAgICAgICB0b3VjaGV2ZW50W2kgKyAxXVsxXSA9IGZpbGUuZGF0YS5SZXNwb25zZVhZVFsxXVtpIC8gMl07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgXy5zaXplKGRhdGEuRml4YXRpb25YWVRbMF0pICogMjsgaSArPSAyKSB7XG4gICAgICAgIHRvdWNoZXZlbnRbaV0gPSBbXTtcbiAgICAgICAgdG91Y2hldmVudFtpICsgMV0gPSBbXTtcbiAgICAgICAgdG91Y2hldmVudFtpXVswXSA9IGZpbGUuZGF0YS5GaXhhdGlvblhZVFswXVtpIC8gMl07XG4gICAgICAgIHRvdWNoZXZlbnRbaSArIDFdWzBdID0gZmlsZS5kYXRhLkZpeGF0aW9uWFlUWzBdW2kgLyAyXTtcbiAgICAgICAgdG91Y2hldmVudFtpXVsxXSA9IGZpbGUuZGF0YS5GaXhhdGlvblhZVFsxXVtpIC8gMl07XG4gICAgICAgIHRvdWNoZXZlbnRbaSArIDFdWzFdID0gZmlsZS5kYXRhLkZpeGF0aW9uWFlUWzFdW2kgLyAyXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTYW1wbGUgJiBUZXN0IEJveGVzIC0tIERyYXcgdGhlbSBhcyBhIGJvdW5kaW5nIGJveCBpbiB0aGUgdG91Y2ggcGxvdFxuICAgIGxldCBudW1Db2x1bW5YWVBvcyA9IHRoaXMueHlQb3NEYXRhVGFibGUuZ2V0TnVtYmVyT2ZDb2x1bW5zKCk7XG4gICAgbGV0IG51bUNvbFJlYWx0aW1lID0gdGhpcy5yZWFsdGltZURhdGFUYWJsZS5nZXROdW1iZXJPZkNvbHVtbnMoKTtcbiAgICBsZXQgc2FtcGxlV2lkdGggPSB0aGlzLmdldFNhbXBsZVdpZHRoKGZpbGUuZGF0YSk7XG4gICAgbGV0IHNhbXBsZUhlaWdodCA9IHNhbXBsZVdpZHRoO1xuICAgIGxldCB0ZXN0V2lkdGggPSB0aGlzLmdldFRlc3RXaWR0aChmaWxlLmRhdGEpO1xuICAgIGxldCB0ZXN0SGVpZ2h0ID0gdGVzdFdpZHRoO1xuXG4gICAgLy8gRml4YXRpb24gJiBDaG9pY2UgQm94ZXNcbiAgICBsZXQgZml4YXRpb25XaWR0aCA9IHRoaXMuZ2V0Rml4YXRpb25XaWR0aChmaWxlLmRhdGEsIHNhbXBsZVdpZHRoKTtcbiAgICBsZXQgZml4YXRpb25IZWlnaHQgPSBmaXhhdGlvbldpZHRoO1xuICAgIGxldCBjaG9pY2VXaWR0aCA9IHRoaXMuZ2V0Q2hvaWNlV2lkdGgoZmlsZS5kYXRhKTtcbiAgICBsZXQgY2hvaWNlSGVpZ2h0ID0gY2hvaWNlV2lkdGg7XG5cbiAgICAvKipcbiAgICAgKiBOT1RFIGZvciBwb3NpdGlvbmluZyBlbGVtZW50czpcbiAgICAgKiBncmlkIHgsIHkgaXMgb2Zmc2V0IHx8IGZpeGF0aW9uICYgcmVzcG9uc2UgeCwgeSBpcyBub3RcbiAgICAgKi9cblxuICAgIC8vIEZJWEFUSU9OXG4gICAgbGV0IG51bURpc3BsYXlFbGVtcyA9IDE7XG4gICAgLy8gbGV0IHh5UG9zQXJyYXkgPSBbXTtcbiAgICBsZXQgZml4WDogbnVtYmVyO1xuICAgIGxldCBmaXhZOiBudW1iZXI7XG4gICAgbGV0IG1heEZpeGF0aW9uR3JpZEluZGV4ID0gXy5tYXgoZmlsZS5kYXRhLkZpeGF0aW9uR3JpZEluZGV4KTtcbiAgICBpZiAoXy5pc051bWJlcihtYXhGaXhhdGlvbkdyaWRJbmRleCkpIHtcbiAgICAgIGZpeFggPSBmaWxlLmRhdGEuWEdyaWRDZW50ZXJbbWF4Rml4YXRpb25HcmlkSW5kZXhdO1xuICAgICAgZml4WSA9XG4gICAgICAgIGZpbGUuZGF0YS5WaWV3cG9ydFBpeGVsc1sxXSAtXG4gICAgICAgIChmaWxlLmRhdGEuWUdyaWRDZW50ZXJbbWF4Rml4YXRpb25HcmlkSW5kZXhdICsgZmlsZS5kYXRhLm9mZnNldHRvcCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZml4WScsIGZpeFkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyAnZGF0YS5GaXhhdGlvbkdyaWRJbmRleCBpcyBub3Qgb2YgdHlwZSBudW1iZXJbXSc7XG4gICAgfVxuXG4gICAgdGhpcy5nZW5lcmF0ZUFuZEFkZFJvd0RhdGEodGhpcy54eVBvc0RhdGFUYWJsZSwgbnVtQ29sdW1uWFlQb3MsIHtcbiAgICAgIDA6IGZpeFggLSBmaXhhdGlvbldpZHRoIC8gMixcbiAgICAgIDE6IGZpeFkgLSBmaXhhdGlvbkhlaWdodCAvIDIsXG4gICAgfSk7XG4gICAgdGhpcy5nZW5lcmF0ZUFuZEFkZFJvd0RhdGEodGhpcy54eVBvc0RhdGFUYWJsZSwgbnVtQ29sdW1uWFlQb3MsIHtcbiAgICAgIDA6IGZpeFggKyBmaXhhdGlvbldpZHRoIC8gMixcbiAgICAgIDE6IGZpeFkgLSBmaXhhdGlvbkhlaWdodCAvIDIsXG4gICAgfSk7XG4gICAgdGhpcy5nZW5lcmF0ZUFuZEFkZFJvd0RhdGEodGhpcy54eVBvc0RhdGFUYWJsZSwgbnVtQ29sdW1uWFlQb3MsIHtcbiAgICAgIDA6IGZpeFggKyBmaXhhdGlvbldpZHRoIC8gMixcbiAgICAgIDE6IGZpeFkgKyBmaXhhdGlvbkhlaWdodCAvIDIsXG4gICAgfSk7XG4gICAgdGhpcy5nZW5lcmF0ZUFuZEFkZFJvd0RhdGEodGhpcy54eVBvc0RhdGFUYWJsZSwgbnVtQ29sdW1uWFlQb3MsIHtcbiAgICAgIDA6IGZpeFggLSBmaXhhdGlvbldpZHRoIC8gMixcbiAgICAgIDE6IGZpeFkgKyBmaXhhdGlvbkhlaWdodCAvIDIsXG4gICAgfSk7XG4gICAgdGhpcy5nZW5lcmF0ZUFuZEFkZFJvd0RhdGEodGhpcy54eVBvc0RhdGFUYWJsZSwgbnVtQ29sdW1uWFlQb3MsIHtcbiAgICAgIDA6IGZpeFggLSBmaXhhdGlvbldpZHRoIC8gMixcbiAgICAgIDE6IGZpeFkgLSBmaXhhdGlvbkhlaWdodCAvIDIsXG4gICAgfSk7XG5cbiAgICBpZiAoIXRoaXMucmVhbHRpbWVSb3dEYXRhQWRkZWQgJiYgIXRoaXMucmVhbHRpbWVQbG90QWN0aXZlKSB7XG4gICAgICBjb25zb2xlLmxvZygncmVhbHRpbWUgbm90IGFjdGl2ZScpO1xuICAgICAgdGhpcy5ydERhdGFbJ2ZpeGF0aW9uJ10gPSB7XG4gICAgICAgIHg6IGZpeFgsXG4gICAgICAgIHk6IGZpeFksXG4gICAgICAgIHdpZHRoOiBmaXhhdGlvbldpZHRoLFxuICAgICAgICBoZWlnaHQ6IGZpeGF0aW9uSGVpZ2h0LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBTQU1QTEVcbiAgICBudW1EaXNwbGF5RWxlbXMgPSAyO1xuICAgIGxldCBzYW1wbGVYOiBudW1iZXI7XG4gICAgbGV0IHNhbXBsZVk6IG51bWJlcjtcbiAgICBsZXQgbWF4U2FtcGxlR3JpZEluZGV4ID0gXy5tYXgoZGF0YS5TYW1wbGVHcmlkSW5kZXgpO1xuXG4gICAgaWYgKGRhdGEuUmV3YXJkU3RhZ2UgPiAwKSB7XG4gICAgICBpZiAoXy5pc051bWJlcihtYXhTYW1wbGVHcmlkSW5kZXgpKSB7XG4gICAgICAgIHNhbXBsZVggPSBkYXRhLlhHcmlkQ2VudGVyW21heFNhbXBsZUdyaWRJbmRleF07XG4gICAgICAgIHNhbXBsZVkgPVxuICAgICAgICAgIGRhdGEuVmlld3BvcnRQaXhlbHNbMV0gLVxuICAgICAgICAgIChkYXRhLllHcmlkQ2VudGVyW21heFNhbXBsZUdyaWRJbmRleF0gKyBkYXRhLm9mZnNldHRvcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyAnZGF0YS5TYW1wbGVHcmlkSW5kZXggaXMgbm90IG9mIHR5cGUgbnVtYmVyW10nO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzYW1wbGVYID0gZml4WDtcbiAgICAgIHNhbXBsZVkgPSBmaXhZO1xuICAgIH1cblxuICAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKHRoaXMueHlQb3NEYXRhVGFibGUsIG51bUNvbHVtblhZUG9zLCB7XG4gICAgICAwOiBzYW1wbGVYIC0gc2FtcGxlV2lkdGggLyAyLFxuICAgICAgMjogc2FtcGxlWSAtIHNhbXBsZUhlaWdodCAvIDIsXG4gICAgfSk7XG4gICAgdGhpcy5nZW5lcmF0ZUFuZEFkZFJvd0RhdGEodGhpcy54eVBvc0RhdGFUYWJsZSwgbnVtQ29sdW1uWFlQb3MsIHtcbiAgICAgIDA6IHNhbXBsZVggKyBzYW1wbGVXaWR0aCAvIDIsXG4gICAgICAyOiBzYW1wbGVZIC0gc2FtcGxlSGVpZ2h0IC8gMixcbiAgICB9KTtcbiAgICB0aGlzLmdlbmVyYXRlQW5kQWRkUm93RGF0YSh0aGlzLnh5UG9zRGF0YVRhYmxlLCBudW1Db2x1bW5YWVBvcywge1xuICAgICAgMDogc2FtcGxlWCArIHNhbXBsZVdpZHRoIC8gMixcbiAgICAgIDI6IHNhbXBsZVkgKyBzYW1wbGVIZWlnaHQgLyAyLFxuICAgIH0pO1xuICAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKHRoaXMueHlQb3NEYXRhVGFibGUsIG51bUNvbHVtblhZUG9zLCB7XG4gICAgICAwOiBzYW1wbGVYIC0gc2FtcGxlV2lkdGggLyAyLFxuICAgICAgMjogc2FtcGxlWSArIHNhbXBsZUhlaWdodCAvIDIsXG4gICAgfSk7XG4gICAgdGhpcy5nZW5lcmF0ZUFuZEFkZFJvd0RhdGEodGhpcy54eVBvc0RhdGFUYWJsZSwgbnVtQ29sdW1uWFlQb3MsIHtcbiAgICAgIDA6IHNhbXBsZVggLSBzYW1wbGVXaWR0aCAvIDIsXG4gICAgICAyOiBzYW1wbGVZIC0gc2FtcGxlSGVpZ2h0IC8gMixcbiAgICB9KTtcblxuICAgIGlmICghdGhpcy5yZWFsdGltZVJvd0RhdGFBZGRlZCAmJiAhdGhpcy5yZWFsdGltZVBsb3RBY3RpdmUpIHtcbiAgICAgIHRoaXMucnREYXRhWydzYW1wbGUnXSA9IHtcbiAgICAgICAgeDogc2FtcGxlWCxcbiAgICAgICAgeTogc2FtcGxlWSxcbiAgICAgICAgd2lkdGg6IHNhbXBsZVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHNhbXBsZUhlaWdodCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gVEVTVDpcbiAgICBsZXQgdGVzdFg6IG51bWJlcltdID0gW107XG4gICAgbGV0IHRlc3RZOiBudW1iZXJbXSA9IFtdO1xuXG4gICAgaWYgKGRhdGEuUmV3YXJkU3RhZ2UgIT0gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfLnNpemUoZGF0YS5UZXN0R3JpZEluZGV4KTsgaSsrKSB7XG4gICAgICAgIC8vIElmIFNhbWUtRGlmZmVyZW50LCBvbmx5IHNob3cgdGhlIGZpcnN0IHRlc3RcbiAgICAgICAgaWYgKGRhdGEuU2FtZURpZmZlcmVudCA+IDAgfHwgZGF0YS5OUlNWUCA+IDApIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIG51bURpc3BsYXlFbGVtcysrO1xuICAgICAgICBpZiAoZGF0YS5OUlNWUCA+IDApIHtcbiAgICAgICAgICB0ZXN0WC5wdXNoKGRhdGEuWEdyaWRDZW50ZXJbbWF4U2FtcGxlR3JpZEluZGV4IGFzIG51bWJlcl0pO1xuICAgICAgICAgIHRlc3RZLnB1c2goXG4gICAgICAgICAgICBkYXRhLlZpZXdwb3J0UGl4ZWxzWzFdIC1cbiAgICAgICAgICAgICAgKGRhdGEuWUdyaWRDZW50ZXJbbWF4U2FtcGxlR3JpZEluZGV4IGFzIG51bWJlcl0gKyBkYXRhLm9mZnNldHRvcClcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlc3RYLnB1c2goZGF0YS5YR3JpZENlbnRlcltkYXRhLlRlc3RHcmlkSW5kZXhbaV1dKTtcbiAgICAgICAgICB0ZXN0WS5wdXNoKFxuICAgICAgICAgICAgZGF0YS5WaWV3cG9ydFBpeGVsc1sxXSAtXG4gICAgICAgICAgICAgIChkYXRhLllHcmlkQ2VudGVyW2RhdGEuVGVzdEdyaWRJbmRleFtpXV0gKyBkYXRhLm9mZnNldHRvcClcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nZW5lcmF0ZUFuZEFkZFJvd0RhdGEodGhpcy54eVBvc0RhdGFUYWJsZSwgbnVtQ29sdW1uWFlQb3MsIHtcbiAgICAgICAgICAwOiB0ZXN0WFtpXSAtIHRlc3RXaWR0aCAvIDIsXG4gICAgICAgICAgW251bURpc3BsYXlFbGVtc106IHRlc3RZW2ldIC0gdGVzdEhlaWdodCAvIDIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdlbmVyYXRlQW5kQWRkUm93RGF0YSh0aGlzLnh5UG9zRGF0YVRhYmxlLCBudW1Db2x1bW5YWVBvcywge1xuICAgICAgICAgIDA6IHRlc3RYW2ldICsgdGVzdFdpZHRoIC8gMixcbiAgICAgICAgICBbbnVtRGlzcGxheUVsZW1zXTogdGVzdFlbaV0gLSB0ZXN0SGVpZ2h0IC8gMixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKHRoaXMueHlQb3NEYXRhVGFibGUsIG51bUNvbHVtblhZUG9zLCB7XG4gICAgICAgICAgMDogdGVzdFhbaV0gKyB0ZXN0V2lkdGggLyAyLFxuICAgICAgICAgIFtudW1EaXNwbGF5RWxlbXNdOiB0ZXN0WVtpXSArIHRlc3RIZWlnaHQgLyAyLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUFuZEFkZFJvd0RhdGEodGhpcy54eVBvc0RhdGFUYWJsZSwgbnVtQ29sdW1uWFlQb3MsIHtcbiAgICAgICAgICAwOiB0ZXN0WFtpXSAtIHRlc3RXaWR0aCAvIDIsXG4gICAgICAgICAgW251bURpc3BsYXlFbGVtc106IHRlc3RZW2ldICsgdGVzdEhlaWdodCAvIDIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdlbmVyYXRlQW5kQWRkUm93RGF0YSh0aGlzLnh5UG9zRGF0YVRhYmxlLCBudW1Db2x1bW5YWVBvcywge1xuICAgICAgICAgIDA6IHRlc3RYW2ldIC0gdGVzdFdpZHRoIC8gMixcbiAgICAgICAgICBbbnVtRGlzcGxheUVsZW1zXTogdGVzdFlbaV0gLSB0ZXN0SGVpZ2h0IC8gMixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnJlYWx0aW1lUm93RGF0YUFkZGVkICYmICF0aGlzLnJlYWx0aW1lUGxvdEFjdGl2ZSkge1xuICAgICAgICAgIGxldCB0bXAgPSB7XG4gICAgICAgICAgICB4OiB0ZXN0WFtpXSxcbiAgICAgICAgICAgIHk6IHRlc3RZW2ldLFxuICAgICAgICAgICAgd2lkdGg6IHRlc3RXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGVzdEhlaWdodCxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMucnREYXRhWyd0ZXN0J10ucHVzaCh0bXApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ0hPSUNFOlxuICAgIGxldCBjaG9pY2VYOiBudW1iZXJbXSA9IFtdO1xuICAgIGxldCBjaG9pY2VZOiBudW1iZXJbXSA9IFtdO1xuXG4gICAgaWYgKGRhdGEuUmV3YXJkU3RhZ2UgIT0gMCAmJiBkYXRhLlNhbWVEaWZmZXJlbnQgPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF8uc2l6ZShkYXRhLkNob2ljZUdyaWRJbmRleCk7IGkrKykge1xuICAgICAgICBudW1EaXNwbGF5RWxlbXMrKztcbiAgICAgICAgY2hvaWNlWC5wdXNoKGRhdGEuWEdyaWRDZW50ZXJbZGF0YS5DaG9pY2VHcmlkSW5kZXhbaV1dKTtcbiAgICAgICAgY2hvaWNlWS5wdXNoKFxuICAgICAgICAgIGRhdGEuVmlld3BvcnRQaXhlbHNbMV0gLVxuICAgICAgICAgICAgKGRhdGEuWUdyaWRDZW50ZXJbZGF0YS5DaG9pY2VHcmlkSW5kZXhbaV1dICsgZGF0YS5vZmZzZXR0b3ApXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5nZW5lcmF0ZUFuZEFkZFJvd0RhdGEodGhpcy54eVBvc0RhdGFUYWJsZSwgbnVtQ29sdW1uWFlQb3MsIHtcbiAgICAgICAgICAwOiBjaG9pY2VYW2ldIC0gY2hvaWNlV2lkdGggLyAyLFxuICAgICAgICAgIFtudW1EaXNwbGF5RWxlbXNdOiBjaG9pY2VZW2ldIC0gY2hvaWNlSGVpZ2h0IC8gMixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKHRoaXMueHlQb3NEYXRhVGFibGUsIG51bUNvbHVtblhZUG9zLCB7XG4gICAgICAgICAgMDogY2hvaWNlWFtpXSArIGNob2ljZVdpZHRoIC8gMixcbiAgICAgICAgICBbbnVtRGlzcGxheUVsZW1zXTogY2hvaWNlWVtpXSAtIGNob2ljZUhlaWdodCAvIDIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdlbmVyYXRlQW5kQWRkUm93RGF0YSh0aGlzLnh5UG9zRGF0YVRhYmxlLCBudW1Db2x1bW5YWVBvcywge1xuICAgICAgICAgIDA6IGNob2ljZVhbaV0gKyBjaG9pY2VXaWR0aCAvIDIsXG4gICAgICAgICAgW251bURpc3BsYXlFbGVtc106IGNob2ljZVlbaV0gKyBjaG9pY2VIZWlnaHQgLyAyLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUFuZEFkZFJvd0RhdGEodGhpcy54eVBvc0RhdGFUYWJsZSwgbnVtQ29sdW1uWFlQb3MsIHtcbiAgICAgICAgICAwOiBjaG9pY2VYW2ldIC0gY2hvaWNlV2lkdGggLyAyLFxuICAgICAgICAgIFtudW1EaXNwbGF5RWxlbXNdOiBjaG9pY2VZW2ldICsgY2hvaWNlSGVpZ2h0IC8gMixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKHRoaXMueHlQb3NEYXRhVGFibGUsIG51bUNvbHVtblhZUG9zLCB7XG4gICAgICAgICAgMDogY2hvaWNlWFtpXSAtIGNob2ljZVdpZHRoIC8gMixcbiAgICAgICAgICBbbnVtRGlzcGxheUVsZW1zXTogY2hvaWNlWVtpXSAtIGNob2ljZUhlaWdodCAvIDIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHJlYWx0aW1lIG5vdCBhY3RpdmVcbiAgICAgICAgaWYgKCF0aGlzLnJlYWx0aW1lUm93RGF0YUFkZGVkICYmICF0aGlzLnJlYWx0aW1lUGxvdEFjdGl2ZSkge1xuICAgICAgICAgIHRoaXMucnREYXRhWydjaG9pY2UnXS5wdXNoKHtcbiAgICAgICAgICAgIHg6IGNob2ljZVhbaV0sXG4gICAgICAgICAgICB5OiBjaG9pY2VZW2ldLFxuICAgICAgICAgICAgd2lkdGg6IGNob2ljZVdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBjaG9pY2VIZWlnaHQsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZWFsdGltZVJvd0RhdGFBZGRlZCA9IHRydWU7XG5cbiAgICBsZXQgZml4WFBvczogbnVtYmVyW10gPSBbXTtcbiAgICBsZXQgZml4WVBvczogbnVtYmVyW10gPSBbXTtcbiAgICBsZXQgdGVzdFhQb3M6IG51bWJlcltdW10gPSBbXTtcbiAgICBsZXQgdGVzdFlQb3M6IG51bWJlcltdW10gPSBbXTtcbiAgICBsZXQgbnVtVGFyZ2V0ID0gWzAsIDBdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3VjaGV2ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB4UG9zID0gdG91Y2hldmVudFtpXVswXTtcbiAgICAgIHlQb3MgPSBkYXRhLlZpZXdwb3J0UGl4ZWxzWzFdIC0gdG91Y2hldmVudFtpXVsxXTtcblxuICAgICAgbGV0IHlEYXRhSW5kZXg6IG51bWJlcjtcbiAgICAgIGlmIChpICUgMiA9PSAwKSB7XG4gICAgICAgIHlEYXRhSW5kZXggPSBpIC8gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHlEYXRhSW5kZXggPSAoaSAtIDEpIC8gMjtcbiAgICAgIH1cblxuICAgICAgaWYgKHhQb3MgIT0gLTEpIHtcbiAgICAgICAgbGV0IGFyciA9IG5ldyBBcnJheShudW1Db2x1bW5YWVBvcyk7XG4gICAgICAgIGFyclswXSA9IHhQb3M7XG5cbiAgICAgICAgaWYgKGkgJSAyID09IDApIHtcbiAgICAgICAgICBmaXhYUG9zLnB1c2goeFBvcyk7XG4gICAgICAgICAgZml4WVBvcy5wdXNoKHlQb3MpO1xuXG4gICAgICAgICAgaWYgKHlEYXRhW3lEYXRhSW5kZXhdID09IDEpIHtcbiAgICAgICAgICAgIGFycltudW1EaXNwbGF5RWxlbXMgKyAxXSA9IHlQb3M7XG4gICAgICAgICAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLmFkZFJvd3MoW2Fycl0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcnJbbnVtRGlzcGxheUVsZW1zICsgMl0gPSB5UG9zO1xuICAgICAgICAgICAgdGhpcy54eVBvc0RhdGFUYWJsZS5hZGRSb3dzKFthcnJdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IHRlc3RYUG9zQXJyOiBudW1iZXJbXSA9IFtdO1xuICAgICAgICAgIGxldCB0ZXN0WVBvc0FycjogbnVtYmVyW10gPSBbXTtcblxuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgXy5zaXplKGRhdGEuVGVzdEdyaWRJbmRleCk7IGorKykge1xuICAgICAgICAgICAgaWYgKGRhdGEuUmVzcG9uc2VbeURhdGFJbmRleF0gPT0gaikge1xuICAgICAgICAgICAgICB0ZXN0WFBvc0Fyci5wdXNoKHhQb3MpO1xuICAgICAgICAgICAgICB0ZXN0WVBvc0Fyci5wdXNoKHlQb3MpO1xuICAgICAgICAgICAgICBudW1UYXJnZXRbal0gKz0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRlc3RYUG9zQXJyLnB1c2goMCk7XG4gICAgICAgICAgICAgIHRlc3RZUG9zQXJyLnB1c2goMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRlc3RYUG9zLnB1c2godGVzdFhQb3NBcnIpO1xuICAgICAgICAgICAgdGVzdFlQb3MucHVzaCh0ZXN0WVBvc0Fycik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHlEYXRhW3lEYXRhSW5kZXhdID09IDEpIHtcbiAgICAgICAgICAgIGFycltudW1EaXNwbGF5RWxlbXMgKyAzXSA9IHlQb3M7XG4gICAgICAgICAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLmFkZFJvd3MoW2Fycl0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcnJbbnVtRGlzcGxheUVsZW1zICsgNF0gPSB5UG9zO1xuICAgICAgICAgICAgdGhpcy54eVBvc0RhdGFUYWJsZS5hZGRSb3dzKFthcnJdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IG1lYW5GaXhYUG9zID0gXy5tZWFuKGZpeFhQb3MpO1xuICAgICAgbGV0IG1lYW5GaXhZUG9zID0gXy5tZWFuKGZpeFlQb3MpO1xuICAgICAgbGV0IGRpc3RGaXhYUG9zID0gZml4WFBvcy5tYXAoKGE6IG51bWJlcikgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3coTWF0aC5hYnMoYSAtIG1lYW5GaXhYUG9zKSwgMik7XG4gICAgICB9KTtcbiAgICAgIGxldCBkaXN0Rml4WVBvcyA9IGZpeFlQb3MubWFwKChhOiBudW1iZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KE1hdGguYWJzKGEgLSBtZWFuRml4WVBvcyksIDIpO1xuICAgICAgfSk7XG4gICAgICBsZXQgc3RkZXZGaXggPVxuICAgICAgICBkaXN0Rml4WFBvc1xuICAgICAgICAgIC5tYXAoKGE6IG51bWJlciwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoYSArIGRpc3RGaXhZUG9zW2lkeF0pO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLnJlZHVjZSgoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhICsgYjtcbiAgICAgICAgICB9LCAwKSAvIF8uc2l6ZShkaXN0Rml4WFBvcyk7XG4gICAgICB0aGlzLnZpdGFscy5zdGRldkZpeCA9IHN0ZGV2Rml4O1xuXG4gICAgICBsZXQgc3RkZXZUZXN0OiBudW1iZXJbXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBfLnNpemUoZGF0YS5UZXN0R3JpZEluZGV4KTsgaisrKSB7XG4gICAgICAgIGxldCBhbGxUZXN0WFBvcyA9IHRlc3RYUG9zXG4gICAgICAgICAgLm1hcCgoYTogbnVtYmVyW10pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhW2pdO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmZpbHRlcigoYTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYSAhPSAwO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtZWFuVGVzdFhQb3MgPVxuICAgICAgICAgIGFsbFRlc3RYUG9zLnJlZHVjZSgoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhICsgYjtcbiAgICAgICAgICB9LCAwKSAvIF8uc2l6ZShhbGxUZXN0WFBvcyk7XG5cbiAgICAgICAgbGV0IGRpc3RUZXN0WFBvcyA9IGFsbFRlc3RYUG9zLm1hcCgoYTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgucG93KE1hdGguYWJzKGEgLSBtZWFuVGVzdFhQb3MpLCAyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGFsbFRlc3RZUG9zID0gdGVzdFlQb3NcbiAgICAgICAgICAubWFwKChhOiBudW1iZXJbXSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGFbal07XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZmlsdGVyKChhOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhICE9IDA7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG1lYW5UZXN0WVBvcyA9XG4gICAgICAgICAgYWxsVGVzdFlQb3MucmVkdWNlKChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGEgKyBiO1xuICAgICAgICAgIH0sIDApIC8gXy5zaXplKGFsbFRlc3RZUG9zKTtcblxuICAgICAgICBsZXQgZGlzdFRlc3RZUG9zID0gYWxsVGVzdFlQb3MubWFwKChhOiBudW1iZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5wb3coTWF0aC5hYnMoYSAtIG1lYW5UZXN0WVBvcyksIDIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzdGRldlRlc3QucHVzaChcbiAgICAgICAgICBkaXN0VGVzdFhQb3NcbiAgICAgICAgICAgIC5tYXAoKGE6IG51bWJlciwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoYSArIGRpc3RUZXN0WVBvc1tpXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnJlZHVjZSgoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGEgKyBiO1xuICAgICAgICAgICAgfSwgMCkgLyBfLnNpemUoYWxsVGVzdFhQb3MpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0aGlzLnZpdGFscy5zdGRldlRlc3QgPSBzdGRldlRlc3Q7XG4gICAgfVxuXG4gICAgeURhdGFTbWFsbCA9IHV0aWxzLnNtb290aCh5RGF0YSwgNSk7XG4gICAgeURhdGFMYXJnZSA9IHV0aWxzLnNtb290aCh5RGF0YSwgMTAwKTtcblxuICAgIC8vIENhbGN1bGF0ZSB0aW1lRW5kXG4gICAgbGV0IHRpbWVFbmQ6IG51bWJlcjtcbiAgICBpZiAoXG4gICAgICBfLmlzVW5kZWZpbmVkKGRhdGEuUmVzcG9uc2VYWVQpIHx8XG4gICAgICBfLnNpemUoZGF0YS5SZXNwb25zZVhZVCkgPCAxIHx8XG4gICAgICBfLmlzVW5kZWZpbmVkKGRhdGEuUmVzcG9uc2VYWVRbMl1bXy5zaXplKGRhdGEuUmVzcG9uc2VYWVRbMl0pIC0gMV0pXG4gICAgKSB7XG4gICAgICB0aW1lRW5kID0gZGF0YS5GaXhhdGlvblhZVFsyXVtfLnNpemUoZGF0YS5GaXhhdGlvblhZVFsyXSkgLSAxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGltZUVuZCA9IGRhdGEuUmVzcG9uc2VYWVRbMl1bXy5zaXplKGRhdGEuUmVzcG9uc2VYWVRbMl0pIC0gMV07XG4gICAgfVxuXG4gICAgLy8gUkZJRFxuICAgIGxldCBudW1UcmlhbHMgPSBfLnNpemUoeURhdGEpO1xuICAgIGxldCBudW1SZWFkcyA9IF8uc2l6ZShkYXRhLlJGSURUYWcpO1xuICAgIG51bVJGSUQgPSBfLmZpbGwoQXJyYXkobnVtVHJpYWxzKSwgMCk7XG4gICAgdGhpcy52aXRhbHMudGFnQ291bnQgPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUmVhZHM7IGkrKykge1xuICAgICAgaWYgKF8uaXNVbmRlZmluZWQodGhpcy52aXRhbHMudGFnQ291bnRbZGF0YS5SRklEVGFnW2ldWzJdXSkpIHtcbiAgICAgICAgdGhpcy52aXRhbHMudGFnQ291bnRbZGF0YS5SRklEVGFnW2ldWzJdXSA9IDA7XG4gICAgICB9XG4gICAgICB0aGlzLnZpdGFscy50YWdDb3VudFtkYXRhLlJGSURUYWdbaV1bMl1dICs9IDE7XG4gICAgICBudW1SRklEW2RhdGEuUkZJRFRhZ1tpXVswXV0gKz0gMTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IF8uc2l6ZShudW1SRklEKTsgaSsrKSB7XG4gICAgICBudW1SRklEW2ldID0gbnVtUkZJRFtpXSArIG51bVJGSURbaSAtIDFdO1xuICAgIH1cblxuICAgIC8vIEFkZGluZyByZXN0IG9mIHRoZSBkYXRhXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfLnNpemUoeURhdGEpOyBpKyspIHtcbiAgICAgIGxldCB0aW1lRml4ID0gZGF0YS5GaXhhdGlvblhZVFsyXVtpXTsgLy8gaW4gbWlsbGlzZWNvbmRzXG4gICAgICBpZiAodGltZUZpeCA8IDApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxldCB0ID0gbmV3IERhdGUoZmlsZS5kYXRlU2F2ZWQhKTtcbiAgICAgIHQuc2V0VGltZSh0LmdldFRpbWUoKSAtICh0aW1lRW5kIC0gdGltZUZpeCkpO1xuXG4gICAgICB0aGlzLnBlcmZEYXRhVGFibGUuYWRkUm93cyhbW3hEYXRhW2ldLCB5RGF0YVNtYWxsW2ldLCB5RGF0YUxhcmdlW2ldXV0pO1xuICAgICAgdGhpcy5jdW11bERhdGFUYWJsZS5hZGRSb3dzKFtcbiAgICAgICAgW3QsIG51bVRvdGFsW2ldLCBudW1Db3JyZWN0W2ldLCBudW1SRklEW2ldXSxcbiAgICAgIF0pO1xuICAgIH1cbiAgICB0aGlzLmZvcm1hdERhdGUodGhpcy5jdW11bERhdGFUYWJsZSwgMCk7XG4gIH0vL0ZVTkNUSU9OIGxvYWRQZXJmb3JtYW5jZURhdGFcblxuICBwcml2YXRlIGdlbmVyYXRlQW5kQWRkUm93RGF0YShcbiAgICB0YXJnZXQ6IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSxcbiAgICBudW1Db2x1bW5zOiBudW1iZXIsXG4gICAgZGF0YTogUmVjb3JkPG51bWJlciwgbnVtYmVyIHwgc3RyaW5nPlxuICApIHtcbiAgICAvLyBjb25zb2xlLmxvZygnZGF0YScsIGRhdGEpO1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvbHVtbnM7IGkrKykge1xuICAgICAgaWYgKF8uaGFzKGRhdGEsIGkpKSB7XG4gICAgICAgIGFyci5wdXNoKGRhdGFbaV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyLnB1c2gobnVsbCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdhcnI6JywgYXJyKTtcbiAgICB0YXJnZXQuYWRkUm93cyhbYXJyXSk7XG4gIH0vL0ZVTkNUSU9OIGdlbmVyYXRlQW5kQWRkUm93RGF0YVxuXG4gIC8vIFRPRE86IGRlYWwgd2l0aCBjYXNlIHdoZXJlIFNhbXBsZVNjZW5lc1swXS5PQkpFQ1RTW2ZpcnN0S2V5XS5zaXplSW5jaGVzIGlzIGFuXG4gIC8vIEFycmF5IG9mIGFycmF5cyAtLSBpLmUuIHNjZW5lIG1vdmllXG4gIHByaXZhdGUgZ2V0U2FtcGxlV2lkdGgoZmlsZURhdGE6IExpdmVwbG90RGF0YVR5cGUpIHtcbiAgICBsZXQgc2FtcGxlV2lkdGggPSAwO1xuICAgIGlmIChfLnNpemUoZmlsZURhdGEuU2FtcGxlU2NlbmVzWzBdLklNQUdFUy5pbWFnZWlkeCkgPiAwKSB7XG4gICAgICBpZiAoXy5pc0FycmF5KGZpbGVEYXRhLlNhbXBsZVNjZW5lc1swXS5JTUFHRVMuc2l6ZUluY2hlcykpIHtcbiAgICAgICAgbGV0IG1heFNpemVJbmNoZXMgPSBfLm1heChmaWxlRGF0YS5TYW1wbGVTY2VuZXNbMF0uSU1BR0VTLnNpemVJbmNoZXMpO1xuICAgICAgICBpZiAoXy5pc051bWJlcihtYXhTaXplSW5jaGVzKSkge1xuICAgICAgICAgIHNhbXBsZVdpZHRoID0gbWF4U2l6ZUluY2hlcyAqIGZpbGVEYXRhLlZpZXdwb3J0UFBJO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdTYW1wbGVTY2VuZXNbMF0uSU1BR0VTLnNpemVJbmNoZXMgaXMgbm90IGFuIGFycmF5LiBQbGVhc2UgZml4IScpO1xuICAgICAgICBzYW1wbGVXaWR0aCA9IGZpbGVEYXRhLlNhbXBsZVNjZW5lc1swXS5JTUFHRVMuc2l6ZUluY2hlcyAqIGZpbGVEYXRhLlZpZXdwb3J0UFBJO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZmlyc3RLZXkgPSBfLmZpbmRLZXkoZmlsZURhdGEuU2FtcGxlU2NlbmVzWzBdLk9CSkVDVFMpO1xuICAgICAgaWYgKF8uaXNTdHJpbmcoZmlyc3RLZXkpKSB7XG4gICAgICAgIGxldCBtYXhTaXplSW5jaGVzID0gXy5tYXgoXG4gICAgICAgICAgZmlsZURhdGEuU2FtcGxlU2NlbmVzWzBdLk9CSkVDVFNbZmlyc3RLZXldLnNpemVJbmNoZXNcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKF8uaXNOdW1iZXIobWF4U2l6ZUluY2hlcykpIHtcbiAgICAgICAgICBzYW1wbGVXaWR0aCA9IG1heFNpemVJbmNoZXMgKiBmaWxlRGF0YS5WaWV3cG9ydFBQSTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignZmlyc3RLZXkgb2YgU2FtcGxlU2NlbmVzWzBdLk9CSkVDVFMgaXMgbm90IG9mIHR5cGUgc3RyaW5nJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzYW1wbGVXaWR0aDtcbiAgfS8vRlVOQ1RJT04gZ2V0U2FtcGxlV2lkdGhcblxuICBwcml2YXRlIGdldFRlc3RXaWR0aChmaWxlRGF0YTogTGl2ZXBsb3REYXRhVHlwZSkge1xuICAgIGxldCB0ZXN0V2lkdGggPSAwO1xuXG4gICAgaWYgKGZpbGVEYXRhLlRlc3RTY2VuZXNbMF0uSU1BR0VTLmltYWdlaWR4Lmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChfLmlzQXJyYXkoZmlsZURhdGEuVGVzdFNjZW5lc1swXS5JTUFHRVMuc2l6ZUluY2hlcykpIHtcbiAgICAgICAgbGV0IG1heFNpemVJbmNoZXMgPSBfLm1heChmaWxlRGF0YS5UZXN0U2NlbmVzWzBdLklNQUdFUy5zaXplSW5jaGVzKTtcbiAgICAgICAgaWYgKF8uaXNOdW1iZXIobWF4U2l6ZUluY2hlcykpIHtcbiAgICAgICAgICB0ZXN0V2lkdGggPSBtYXhTaXplSW5jaGVzICogZmlsZURhdGEuVmlld3BvcnRQUEk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVGVzdFNjZW5lc1swXS5JTUFHRVMuc2l6ZUluY2hlcyBpcyBub3Qgb2YgdHlwZSBudW1iZXInKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVGVzdFNjZW5lc1swXS5JTUFHRVMuc2l6ZUluY2hlcyBpcyBub3QgYW4gYXJyYXkuIFBsZWFzZSBmaXghJyk7XG4gICAgICAgIHRlc3RXaWR0aCA9IGZpbGVEYXRhLlRlc3RTY2VuZXNbMF0uSU1BR0VTLnNpemVJbmNoZXMgKiBmaWxlRGF0YS5WaWV3cG9ydFBQSTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGZpcnN0S2V5ID0gXy5maW5kS2V5KGZpbGVEYXRhLlRlc3RTY2VuZXNbMF0uT0JKRUNUUyk7XG4gICAgICBpZiAoXy5pc1N0cmluZyhmaXJzdEtleSkpIHtcbiAgICAgICAgbGV0IG1heFNpemVJbmNoZXMgPSBfLm1heChcbiAgICAgICAgICBmaWxlRGF0YS5UZXN0U2NlbmVzWzBdLk9CSkVDVFNbZmlyc3RLZXldLnNpemVJbmNoZXNcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKF8uaXNOdW1iZXIobWF4U2l6ZUluY2hlcykpIHtcbiAgICAgICAgICB0ZXN0V2lkdGggPSBtYXhTaXplSW5jaGVzICogZmlsZURhdGEuVmlld3BvcnRQUEk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignZmlyc3RLZXkgb2YgVGVzdFNjZW5lc1swXS5PQkpFQ1RTIGlzIG5vdCBvZiB0eXBlIHN0cmluZycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFfLmlzVW5kZWZpbmVkKGZpbGVEYXRhLk5SU1ZQKSAmJiBmaWxlRGF0YS5OUlNWUCA+IDApIHtcbiAgICAgIHRlc3RXaWR0aCA9IGZpbGVEYXRhLlNhbXBsZUZpeGF0aW9uU2l6ZUluY2hlcyAqIGZpbGVEYXRhLlZpZXdwb3J0UFBJO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXN0V2lkdGg7XG4gIH0vL0ZVTkNUSU9OIGdldFRlc3RXaWR0aFxuXG4gIHByaXZhdGUgZ2V0Rml4YXRpb25XaWR0aChmaWxlRGF0YTogTGl2ZXBsb3REYXRhVHlwZSwgc2FtcGxlV2lkdGg6IG51bWJlcikge1xuICAgIGxldCBmaXhhdGlvbldpZHRoID0gMDtcblxuICAgIGlmIChmaWxlRGF0YS5GaXhhdGlvblVzZXNTYW1wbGUgPD0gMCkge1xuICAgICAgZml4YXRpb25XaWR0aCA9IGZpbGVEYXRhLkZpeGF0aW9uU2l6ZUluY2hlcyAqIGZpbGVEYXRhLlZpZXdwb3J0UFBJO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaXhhdGlvbldpZHRoID0gc2FtcGxlV2lkdGg7XG4gICAgfVxuICAgIHJldHVybiBmaXhhdGlvbldpZHRoO1xuICB9Ly9GVU5DVElPTiBnZXRGaXhhdGlvbldpZHRoXG5cbiAgcHJpdmF0ZSBnZXRDaG9pY2VXaWR0aChmaWxlRGF0YTogTGl2ZXBsb3REYXRhVHlwZSkge1xuICAgIGxldCBjaG9pY2VXaWR0aCA9IDA7XG4gICAgaWYgKCFfLmlzVW5kZWZpbmVkKGZpbGVEYXRhLlNhbWVEaWZmZXJlbnQpICYmIGZpbGVEYXRhLlNhbWVEaWZmZXJlbnQgPiAwKSB7XG4gICAgICBjaG9pY2VXaWR0aCA9IGZpbGVEYXRhLkNob2ljZVNpemVJbmNoZXMgKiBmaWxlRGF0YS5WaWV3cG9ydFBQSTtcbiAgICB9XG4gICAgcmV0dXJuIGNob2ljZVdpZHRoO1xuICB9Ly9GVU5DVElPTiBnZXRDaG9pY2VXaWR0aFxuXG4gIHByaXZhdGUgbG9hZE9ialBlcmZEYXRhKGRhdGE6IExpdmVwbG90RGF0YVR5cGUpIHtcbiAgICB0aGlzLm9ialBlcmZEYXRhVGFibGUucmVtb3ZlUm93cyhcbiAgICAgIDAsXG4gICAgICB0aGlzLm9ialBlcmZEYXRhVGFibGUuZ2V0TnVtYmVyT2ZSb3dzKClcbiAgICApO1xuXG4gICAgbGV0IGxlblNhbXBsZU9iajogbnVtYmVyO1xuICAgIGlmIChkYXRhLlJld2FyZFN0YWdlID09IDEpIHtcbiAgICAgIGxldCBzYW1wbGVPYmogPSBbXTtcbiAgICAgIGlmIChkYXRhLk5UcmlhbHNQZXJCYWdCbG9jayA+IDUwMDApIHtcbiAgICAgICAgc2FtcGxlT2JqLnB1c2goZGF0YS5JbWFnZUJhZ3NTYW1wbGVbMF0uc3BsaXQoJy8nKVs1XSk7XG4gICAgICAgIHRoaXMub2JqUGVyZkRhdGFUYWJsZS5hZGRSb3coW3NhbXBsZU9ialswXSwgMF0pO1xuICAgICAgICBsZW5TYW1wbGVPYmogPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfLnNpemUoZGF0YS5JbWFnZUJhZ3NTYW1wbGUpOyBpKyspIHtcbiAgICAgICAgICBzYW1wbGVPYmoucHVzaChkYXRhLkltYWdlQmFnc1NhbXBsZVtpXS5zcGxpdCgnLycpWzVdKTtcbiAgICAgICAgICB0aGlzLm9ialBlcmZEYXRhVGFibGUuYWRkUm93KFtzYW1wbGVPYmpbaV0sIDBdKTtcbiAgICAgICAgfVxuICAgICAgICBsZW5TYW1wbGVPYmogPSBfLnNpemUoc2FtcGxlT2JqKTtcbiAgICAgIH1cblxuICAgICAgbGV0IE5EaWZmT2JqUGVyZiA9IF8uZmlsbChBcnJheShsZW5TYW1wbGVPYmopLCAwKTtcbiAgICAgIGxldCBORGlmZk9iaiA9IF8uZmlsbChBcnJheShsZW5TYW1wbGVPYmopLCAwKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgXy5zaXplKGRhdGEuU2FtcGxlWzBdKTsgaSsrKSB7XG4gICAgICAgIC8vIEZvciBpIHRyaWFsc1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlblNhbXBsZU9iajsgaisrKSB7XG4gICAgICAgICAgLy8gSWYgc2FtcGxlIHdhcyB0aGF0IG9iamVjdFxuICAgICAgICAgIGlmIChkYXRhLlNhbXBsZUJhZ0lkeFtkYXRhLlNhbXBsZVswXVtpXV0gPT0gaikge1xuICAgICAgICAgICAgTkRpZmZPYmpbal0gKz0gMTtcbiAgICAgICAgICAgIC8vIElmIGNvcnJlY3RcbiAgICAgICAgICAgIGlmIChkYXRhLlJlc3BvbnNlW2ldID09IGRhdGEuQ29ycmVjdEl0ZW1baV0pIHtcbiAgICAgICAgICAgICAgTkRpZmZPYmpQZXJmW2pdICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMub2JqUGVyZkRhdGFUYWJsZS5zZXRWYWx1ZShqLCAxLCBORGlmZk9ialBlcmZbal0gLyBORGlmZk9ialtqXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0vL0ZVTkNUSU9OIGxvYWRPYmpQZXJmRGF0YVxuXG4gIHByaXZhdGUgbG9hZENob2ljZURhdGEoZGF0YTogTGl2ZXBsb3REYXRhVHlwZSkge1xuICAgIHRoaXMuY2hvaWNlRGF0YVRhYmxlLnJlbW92ZVJvd3MoMCwgdGhpcy5jaG9pY2VEYXRhVGFibGUuZ2V0TnVtYmVyT2ZSb3dzKCkpO1xuXG4gICAgaWYgKGRhdGEuUmV3YXJkU3RhZ2UgIT0gMCkge1xuICAgICAgLy8gbGV0IHBvc3NpYmxlUmVzcCA9IF8uZmlsbChBcnJheShfLnNpemUoZGF0YS5PYmplY3RHcmlkSW5kZXgpKSwgMCk7XG4gICAgICBsZXQgcG9zc2libGVSZXNwID0gW107XG5cbiAgICAgIGlmIChcbiAgICAgICAgXy5zaXplKGRhdGEuT2JqZWN0R3JpZEluZGV4KSAhPSAwICYmXG4gICAgICAgIChfLmlzVW5kZWZpbmVkKGRhdGEuTlRyaWFsc1BlckJhZ0Jsb2NrKSB8fFxuICAgICAgICAgIGRhdGEuTlRyaWFsc1BlckJhZ0Jsb2NrIDwgMTAwMClcbiAgICAgICkge1xuICAgICAgICBsZXQgb2JqR3JpZEluZGV4ID0gXy5jbG9uZURlZXAoZGF0YS5PYmplY3RHcmlkSW5kZXgpO1xuICAgICAgICBvYmpHcmlkSW5kZXguc29ydCgoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gYSAtIGI7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgYWxsaW5kID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgXy5zaXplKG9iakdyaWRJbmRleCk7IGkrKykge1xuICAgICAgICAgIC8vIGFsbGluZC5wdXNoKF8uZmluZEluZGV4KGRhdGEuT2JqZWN0R3JpZEluZGV4LCBvYmpHcmlkSW5kZXhbaV0pKTtcbiAgICAgICAgICBhbGxpbmQucHVzaChkYXRhLk9iamVjdEdyaWRJbmRleC5pbmRleE9mKG9iakdyaWRJbmRleFtpXSkpO1xuICAgICAgICAgIHRoaXMuY2hvaWNlRGF0YVRhYmxlLmFkZFJvdyhbXG4gICAgICAgICAgICBkYXRhLkltYWdlQmFnc1NhbXBsZVthbGxpbmRbaV1dLnNwbGl0KCcvJylbNV0sXG4gICAgICAgICAgICAwLFxuICAgICAgICAgIF0pO1xuICAgICAgICAgIHBvc3NpYmxlUmVzcC5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF8uc2l6ZShkYXRhLlRlc3RHcmlkSW5kZXgpOyBpKyspIHtcbiAgICAgICAgICB0aGlzLmNob2ljZURhdGFUYWJsZS5hZGRSb3coWydjaG9pY2UnICsgKGkgKyAxKSwgMF0pO1xuICAgICAgICAgIHBvc3NpYmxlUmVzcC5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBORGlmZkNob2ljZSA9IF8uZmlsbChBcnJheShfLnNpemUocG9zc2libGVSZXNwKSksIDApO1xuICAgICAgbGV0IE5BbGxDaG9pY2UgPSAwO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF8uc2l6ZShkYXRhLlJlc3BvbnNlKTsgaSsrKSB7XG4gICAgICAgIGlmIChkYXRhLlJlc3BvbnNlW2ldICE9IC0xKSB7XG4gICAgICAgICAgTkFsbENob2ljZSsrO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBfLnNpemUocG9zc2libGVSZXNwKTsgaisrKSB7XG4gICAgICAgICAgaWYgKGRhdGEuUmVzcG9uc2VbaV0gPT0gcG9zc2libGVSZXNwW2pdICYmIGRhdGEuUmVzcG9uc2VbaV0gIT0gLTEpIHtcbiAgICAgICAgICAgIE5EaWZmQ2hvaWNlW2pdKys7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuY2hvaWNlRGF0YVRhYmxlLnNldFZhbHVlKGosIDEsIE5EaWZmQ2hvaWNlW2pdIC8gTkFsbENob2ljZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaG9pY2VEYXRhVGFibGUuYWRkUm93KFsnb3V0c2lkZSBGaXgnLCAwXSk7XG4gICAgICB0aGlzLmNob2ljZURhdGFUYWJsZS5hZGRSb3coWydpbnNpZGUgRml4JywgMF0pO1xuXG4gICAgICBsZXQgTkRpZmZDaG9pY2UgPSBfLmZpbGwoQXJyYXkoMiksIDApO1xuICAgICAgbGV0IE5BbGxDaG9pY2UgPSAwO1xuICAgICAgbGV0IHlEYXRhID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgXy5zaXplKGRhdGEuQ29ycmVjdEl0ZW0pOyBpKyspIHtcbiAgICAgICAgaWYgKGRhdGEuQ29ycmVjdEl0ZW1baV0gPT0gZGF0YS5SZXNwb25zZVtpXSkge1xuICAgICAgICAgIHlEYXRhLnB1c2goMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeURhdGEucHVzaCgwKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF8uc2l6ZSh5RGF0YSk7IGkrKykge1xuICAgICAgICBOQWxsQ2hvaWNlKys7XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAyOyBqKyspIHtcbiAgICAgICAgICBpZiAoeURhdGFbaV0gPT0gaikge1xuICAgICAgICAgICAgTkRpZmZDaG9pY2Vbal0gKz0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jaG9pY2VEYXRhVGFibGUuc2V0VmFsdWUoaiwgMSwgTkRpZmZDaG9pY2Vbal0gLyBOQWxsQ2hvaWNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfS8vRlVOQ1RJT04gbG9hZENob2ljZURhdGFcblxuICBwcml2YXRlIGxvYWRSZXdhcmREYXRhKGRhdGE6IExpdmVwbG90RGF0YVR5cGUpIHtcbiAgICB0aGlzLnJld2FyZERhdGFUYWJsZS5yZW1vdmVSb3dzKDAsIHRoaXMucmV3YXJkRGF0YVRhYmxlLmdldE51bWJlck9mUm93cygpKTtcblxuICAgIGxldCBucmV3YXJkQXJyOiBudW1iZXJbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gZGF0YS5OUmV3YXJkTWF4OyBpKyspIHtcbiAgICAgIG5yZXdhcmRBcnIucHVzaCgwKTtcbiAgICB9XG5cbiAgICBkYXRhLk5SZXdhcmQuZm9yRWFjaCgoZWxlbTogbnVtYmVyKSA9PiB7XG4gICAgICBucmV3YXJkQXJyW2VsZW1dKys7XG4gICAgfSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5yZXdhcmRBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMucmV3YXJkRGF0YVRhYmxlLmFkZFJvdyhbaS50b1N0cmluZygpLCBucmV3YXJkQXJyW2ldXSk7XG4gICAgfVxuICB9Ly9GVU5DVElPTiBsb2FkUmV3YXJkRGF0YVxuXG4gIHByaXZhdGUgbG9hZEhlYWx0aERhdGEoZGF0YTogTGl2ZXBsb3REYXRhVHlwZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdbbG9hZEhlYWx0aERhdGE6OmZpbGVEYXRhXScsIGRhdGEpO1xuICAgIHRoaXMuaGVhbHRoRGF0YVRhYmxlLnJlbW92ZVJvd3MoMCwgdGhpcy5oZWFsdGhEYXRhVGFibGUuZ2V0TnVtYmVyT2ZSb3dzKCkpO1xuXG4gICAgaWYgKGRhdGEuUmV3YXJkU3RhZ2UgPiAwKSB7XG4gICAgICBjb25zdCBsYXN0SWR4ID0gT2JqZWN0LmtleXMoZGF0YS5UU2VxdWVuY2VBY3R1YWxDbGlwKS5sZW5ndGggLSAxO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuVFNlcXVlbmNlQWN0dWFsQ2xpcFtsYXN0SWR4XS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZHQ6IGFueTtcbiAgICAgICAgbGV0IGR0MjogYW55O1xuICAgICAgICBsZXQgc2FtcGxlQ21kSW50ZXJ2YWw6IGFueTtcbiAgICAgICAgbGV0IHNhbXBsZUNtZE9mZkludGVydmFsOiBhbnk7XG4gICAgICAgIGxldCBleWVUcmFja2VyU2FtcGxlSW50ZXJ2YWw6IGFueTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChkYXRhLlRTZXF1ZW5jZUFjdHVhbENsaXBbbGFzdElkeF1baV0gPCAwKSB7XG4gICAgICAgICAgICBkdCA9IG51bGw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGR0ID1cbiAgICAgICAgICAgICAgZGF0YS5UU2VxdWVuY2VBY3R1YWxDbGlwW2xhc3RJZHhdW2ldIC1cbiAgICAgICAgICAgICAgZGF0YS5UU2VxdWVuY2VEZXNpcmVkQ2xpcFtsYXN0SWR4XVtpXTtcbiAgICAgICAgICAgIGR0ID0gTWF0aC5hYnMoTWF0aC5yb3VuZChkdCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgZHQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoZGF0YS5UU2VxdWVuY2VBY3R1YWxDbGlwWzFdW2ldIDwgMCkge1xuICAgICAgICAgICAgZHQyID0gbnVsbDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHQyID1cbiAgICAgICAgICAgICAgZGF0YS5UU2VxdWVuY2VBY3R1YWxDbGlwWzFdW2ldIC0gZGF0YS5UU2VxdWVuY2VEZXNpcmVkQ2xpcFsxXVtpXTtcbiAgICAgICAgICAgIGR0MiA9IE1hdGguYWJzKE1hdGgucm91bmQoZHQyKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICBkdDIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBkYXRhLlNhbXBsZUNvbW1hbmRSZXR1cm5UaW1lW2ldID09IG51bGwgfHxcbiAgICAgICAgICAgIGRhdGEuU2FtcGxlQ29tbWFuZFJldHVyblRpbWVbaV0gPCAwIHx8XG4gICAgICAgICAgICBkYXRhLlNhbXBsZUNvbW1hbmRSZXR1cm5UaW1lW2ldID09PSB1bmRlZmluZWRcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHNhbXBsZUNtZEludGVydmFsID0gbnVsbDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2FtcGxlQ21kSW50ZXJ2YWwgPVxuICAgICAgICAgICAgICBkYXRhLlNhbXBsZUNvbW1hbmRSZXR1cm5UaW1lW2ldIC0gZGF0YS5TYW1wbGVTdGFydFRpbWVbaV07XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICBzYW1wbGVDbWRJbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGRhdGEuU2FtcGxlQ29tbWFuZE9mZlJldHVyblRpbWVbaV0gPT0gbnVsbCB8fFxuICAgICAgICAgICAgZGF0YS5TYW1wbGVDb21tYW5kT2ZmUmV0dXJuVGltZVtpXSA8IDAgfHxcbiAgICAgICAgICAgIGRhdGEuU2FtcGxlQ29tbWFuZE9mZlJldHVyblRpbWVbaV0gPT09IHVuZGVmaW5lZFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgc2FtcGxlQ21kT2ZmSW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzYW1wbGVDbWRPZmZJbnRlcnZhbCA9XG4gICAgICAgICAgICAgIGRhdGEuU2FtcGxlQ29tbWFuZE9mZlJldHVyblRpbWVbaV0gLSBkYXRhLkVuZFRpbWVbaV07XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICBzYW1wbGVDbWRPZmZJbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGV5ZVRyYWNrZXJTYW1wbGVJbnRlcnZhbCA9IGRhdGEuRXlldHJhY2tlclNhbXBsZUludGVydmFsW2ldO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICBleWVUcmFja2VyU2FtcGxlSW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oZWFsdGhEYXRhVGFibGUuYWRkUm93cyhbXG4gICAgICAgICAgW1xuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIHNhbXBsZUNtZEludGVydmFsLFxuICAgICAgICAgICAgc2FtcGxlQ21kT2ZmSW50ZXJ2YWwsXG4gICAgICAgICAgICBkdCxcbiAgICAgICAgICAgIGR0MixcbiAgICAgICAgICAgIGV5ZVRyYWNrZXJTYW1wbGVJbnRlcnZhbCxcbiAgICAgICAgICBdLFxuICAgICAgICBdKTtcbiAgICAgIH1cbiAgICB9XG4gIH0vL0ZVTkNUSU9OIGxvYWRIZWFsdGhEYXRhXG5cbiAgcHJpdmF0ZSBkcmF3UGVyZm9ybWFuY2VQbG90KGZpbGU6IEZpbGVUeXBlKSB7XG4gICAgbGV0IG51bVJvd3MgPSB0aGlzLnBlcmZEYXRhVGFibGUuZ2V0TnVtYmVyT2ZSb3dzKCk7XG4gICAgdGhpcy5uVHJpYWxzID0gbnVtUm93cztcbiAgICBsZXQgcGVyZkZpbHRlclN0YXRlOiBhbnkgPSB0aGlzLnBlcmZGaWx0ZXIuZ2V0U3RhdGUoKTtcblxuICAgIC8vIHVwZGF0aW5nIHBlcmZGaWx0ZXJcbiAgICBpZiAoZmlsZS5kYXRhQ2hhbmdlZCAmJiAhZmlsZS5maWxlQ2hhbmdlZCkge1xuICAgICAgaWYgKG51bVJvd3MgPD0gMTAwKSB7XG4gICAgICAgIC8vIGV4cGFuZCB3aW5kb3cgc2l6ZSBhdXRvbWF0aWNhbGx5IHVwIHRvIDEwMFxuICAgICAgICBwZXJmRmlsdGVyU3RhdGUucmFuZ2Uuc3RhcnQgPSAwO1xuICAgICAgICBwZXJmRmlsdGVyU3RhdGUucmFuZ2UuZW5kID0gbnVtUm93cztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBkVHJpYWxzID0gbnVtUm93cyAtIF8uc2l6ZShmaWxlLmRhdGE/LkZpeGF0aW9uR3JpZEluZGV4KTtcbiAgICAgICAgY29uc29sZS5sb2coJ2R0cmlhbHMnLCBkVHJpYWxzKTtcbiAgICAgICAgcGVyZkZpbHRlclN0YXRlLnJhbmdlLnN0YXJ0ID0gbnVtUm93cyAtIDEwMDtcbiAgICAgICAgcGVyZkZpbHRlclN0YXRlLnJhbmdlLmVuZCA9IG51bVJvd3M7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChmaWxlLmZpbGVDaGFuZ2VkKSB7XG4gICAgICBsZXQgZFNsaWRlciA9IDEwMDtcbiAgICAgIHBlcmZGaWx0ZXJTdGF0ZS5yYW5nZS5zdGFydCA9IG51bVJvd3MgLSBkU2xpZGVyO1xuICAgICAgcGVyZkZpbHRlclN0YXRlLnJhbmdlLmVuZCA9IG51bVJvd3M7XG4gICAgICBpZiAocGVyZkZpbHRlclN0YXRlLnJhbmdlLnN0YXJ0IDwgMCkge1xuICAgICAgICBwZXJmRmlsdGVyU3RhdGUucmFuZ2Uuc3RhcnQgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucGVyZlBsb3Quc2V0T3B0aW9ucyh0aGlzLnBlcmZQbG90T3B0aW9ucyk7XG4gICAgdGhpcy5wZXJmRmlsdGVyLnNldFN0YXRlKHtcbiAgICAgIHJhbmdlOiB7XG4gICAgICAgIHN0YXJ0OiBwZXJmRmlsdGVyU3RhdGUucmFuZ2Uuc3RhcnQsXG4gICAgICAgIGVuZDogcGVyZkZpbHRlclN0YXRlLnJhbmdlLmVuZCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgdGhpcy5wZXJmRGFzaGJvYXJkLmRyYXcodGhpcy5wZXJmRGF0YVRhYmxlKTtcbiAgfS8vRlVOQ1RJT04gZHJhd1BlcmZvcm1hbmNlUGxvdFxuXG4gIHByaXZhdGUgZHJhd0hlYWx0aFBsb3QoZmlsZTogRmlsZVR5cGUpIHtcbiAgICBsZXQgbnVtUm93cyA9IHRoaXMuaGVhbHRoRGF0YVRhYmxlLmdldE51bWJlck9mUm93cygpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdbZHJhd0hlYWx0aFBsb3Q6Om51bVJvd3NdOicsIG51bVJvd3MpO1xuICAgIGxldCBoZWFsdGhGaWx0ZXJTdGF0ZTogYW55ID0gdGhpcy5oZWFsdGhGaWx0ZXIuZ2V0U3RhdGUoKTtcbiAgICAvLyBjb25zb2xlLmxvZygnW2RyYXdIZWFsdGhQbG90OjpoZWFsdGhGaWx0ZXJTdGF0ZV06JywgaGVhbHRoRmlsdGVyU3RhdGUpO1xuXG4gICAgaWYgKGZpbGUuZGF0YUNoYW5nZWQgJiYgIWZpbGUuZmlsZUNoYW5nZWQpIHtcbiAgICAgIGlmIChudW1Sb3dzIDw9IDEwMCkge1xuICAgICAgICBoZWFsdGhGaWx0ZXJTdGF0ZS5yYW5nZS5zdGFydCA9IDA7XG4gICAgICAgIGhlYWx0aEZpbHRlclN0YXRlLnJhbmdlLmVuZCA9IG51bVJvd3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoZWFsdGhGaWx0ZXJTdGF0ZS5yYW5nZS5zdGFydCA9IG51bVJvd3MgLSAxMDA7XG4gICAgICAgIGhlYWx0aEZpbHRlclN0YXRlLnJhbmdlLmVuZCA9IG51bVJvd3M7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChmaWxlLmZpbGVDaGFuZ2VkKSB7XG4gICAgICBsZXQgZFNsaWRlciA9IDEwMDtcbiAgICAgIGhlYWx0aEZpbHRlclN0YXRlLnJhbmdlLnN0YXJ0ID0gbnVtUm93cyAtIGRTbGlkZXI7XG4gICAgICBoZWFsdGhGaWx0ZXJTdGF0ZS5yYW5nZS5lbmQgPSBudW1Sb3dzO1xuICAgICAgaWYgKGhlYWx0aEZpbHRlclN0YXRlLnJhbmdlLnN0YXJ0IDwgMCkge1xuICAgICAgICBoZWFsdGhGaWx0ZXJTdGF0ZS5yYW5nZS5zdGFydCA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5oZWFsdGhQbG90LnNldE9wdGlvbnModGhpcy5oZWFsdGhQbG90T3B0aW9ucyk7XG4gICAgdGhpcy5oZWFsdGhGaWx0ZXIuc2V0U3RhdGUoe1xuICAgICAgcmFuZ2U6IHtcbiAgICAgICAgc3RhcnQ6IGhlYWx0aEZpbHRlclN0YXRlLnJhbmdlLnN0YXJ0LFxuICAgICAgICBlbmQ6IGhlYWx0aEZpbHRlclN0YXRlLnJhbmdlLmVuZCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgdGhpcy5oZWFsdGhEYXNoYm9hcmQuZHJhdyh0aGlzLmhlYWx0aERhdGFUYWJsZSk7XG4gIH0vL0ZVTkNUSU9OIGRyYXdIZWFsdGhQbG90XG5cbiAgcHJpdmF0ZSBkcmF3VHJpYWxQbG90KGZpbGU6IEZpbGVUeXBlKSB7XG4gICAgbGV0IHRyaWFsRmlsdGVyU3RhdGU6IGFueSA9IHRoaXMudHJpYWxGaWx0ZXIuZ2V0U3RhdGUoKTtcbiAgICBsZXQgdG1pbiA9IG5ldyBEYXRlKHRoaXMuY3VtdWxEYXRhVGFibGUuZ2V0Q29sdW1uUmFuZ2UoMCkubWluKTtcbiAgICBsZXQgdG1heCA9IG5ldyBEYXRlKHRoaXMuY3VtdWxEYXRhVGFibGUuZ2V0Q29sdW1uUmFuZ2UoMCkubWF4KTtcblxuICAgIGlmIChmaWxlLmRhdGFDaGFuZ2VkIHx8IGZpbGUuZmlsZUNoYW5nZWQpIHtcbiAgICAgIHRyaWFsRmlsdGVyU3RhdGUucmFuZ2Uuc3RhcnQgPSB0bWluO1xuICAgICAgdHJpYWxGaWx0ZXJTdGF0ZS5yYW5nZS5lbmQgPSB0bWF4O1xuICAgIH1cblxuICAgIHRoaXMudHJpYWxGaWx0ZXIuc2V0U3RhdGUoe1xuICAgICAgcmFuZ2U6IHtcbiAgICAgICAgc3RhcnQ6IHRyaWFsRmlsdGVyU3RhdGUucmFuZ2Uuc3RhcnQsXG4gICAgICAgIGVuZDogdHJpYWxGaWx0ZXJTdGF0ZS5yYW5nZS5lbmQsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHRoaXMudHJpYWxQbG90LnNldE9wdGlvbnModGhpcy50cmlhbFBsb3RPcHRpb25zKTtcbiAgICB0aGlzLnRyaWFsRGFzaGJvYXJkLmRyYXcodGhpcy5jdW11bERhdGFUYWJsZSk7XG4gIH0vL0ZVTkNUSU9OIGRyYXdUcmlhbFBsb3RcblxuICBwcml2YXRlIGRyYXdPYmpQZXJmUGxvdCgpIHtcbiAgICB0aGlzLm9ialBlcmZQbG90LmRyYXcodGhpcy5vYmpQZXJmRGF0YVRhYmxlLCB0aGlzLm9ialBlcmZQbG90T3B0aW9ucyk7XG4gIH0vL0ZVTkNUSU9OIGRyYXdPYmpQZXJmUGxvdFxuXG4gIHByaXZhdGUgZHJhd1J4blRpbWVQbG90KCkge1xuICAgIHRoaXMucnhuUGxvdC5kcmF3KHRoaXMucnhuVGltZURhdGFUYWJsZSwgdGhpcy5yeG5QbG90T3B0aW9ucyk7XG4gIH0vL0ZVTkNUSU9OIGRyYXdSeG5UaW1lUGxvdFxuXG4gIHByaXZhdGUgZHJhd0Nob2ljZVBsb3QoKSB7XG4gICAgdGhpcy5jaG9pY2VQbG90LmRyYXcodGhpcy5jaG9pY2VEYXRhVGFibGUsIHRoaXMuY2hvaWNlUGxvdE9wdGlvbnMpO1xuICB9Ly9GVU5DVElPTiBkcmF3Q2hvaWNlUGxvdFxuXG4gIHByaXZhdGUgZHJhd1Jld2FyZFBsb3QoKSB7XG4gICAgdGhpcy5yZXdhcmRQbG90LmRyYXcodGhpcy5yZXdhcmREYXRhVGFibGUsIHRoaXMucmV3YXJkUGxvdE9wdGlvbnMpO1xuICB9Ly9GVU5DVElPTiBkcmF3UmV3YXJkUGxvdFxuXG4gIC8vIHByaXZhdGUgZHJhd1JlYWx0aW1lUGxvdChkYXRhOiBMaXZlcGxvdERhdGFUeXBlKSB7XG4gIC8vICAgbGV0IGlkeCA9IDA7XG4gIC8vICAgdGhpcy5yZWFsdGltZVBsb3RPcHRpb25zID0ge1xuICAvLyAgICAgc2VyaWVzVHlwZTogJ3NjYXR0ZXInLFxuICAvLyAgICAgd2lkdGg6IGRhdGEud29ya3NwYWNlWzJdICogZGF0YS5DYW52YXNSYXRpbyxcbiAgLy8gICAgIGhlaWdodDogZGF0YS5WaWV3cG9ydFBpeGVsc1sxXSAtIGRhdGEub2Zmc2V0dG9wLFxuICAvLyAgICAgbGVnZW5kOiB7XG4gIC8vICAgICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgLy8gICAgIH0sXG4gIC8vICAgICBoQXhpczoge1xuICAvLyAgICAgICB0aXRsZTogJ1ggcG9zaXRpb24gKHB4KScsXG4gIC8vICAgICAgIHZpZXdXaW5kb3c6IHtcbiAgLy8gICAgICAgICBtaW46IDAsXG4gIC8vICAgICAgICAgbWF4OiBkYXRhLndvcmtzcGFjZVsyXSAqIGRhdGEuQ2FudmFzUmF0aW8sXG4gIC8vICAgICAgIH0sXG4gIC8vICAgICB9LFxuICAvLyAgICAgdkF4aXM6IHtcbiAgLy8gICAgICAgdGl0bGU6ICdZIHBvc2l0aW9uIChweCknLFxuICAvLyAgICAgICB2aWV3V2luZG93OiB7XG4gIC8vICAgICAgICAgbWluOiAwLFxuICAvLyAgICAgICAgIG1heDogZGF0YS5WaWV3cG9ydFBpeGVsc1sxXSAtIGRhdGEub2Zmc2V0dG9wLFxuICAvLyAgICAgICB9LFxuICAvLyAgICAgfSxcbiAgLy8gICB9O1xuICAvLyAgIHRoaXMucmVhbHRpbWVQbG90T3B0aW9ucy5oQXhpcyA9IHtcbiAgLy8gICAgIHRpdGxlOiAnWCBwb3NpdGlvbiAocHgpJyxcbiAgLy8gICAgIHZpZXdXaW5kb3c6IHtcbiAgLy8gICAgICAgbWluOiAwLFxuICAvLyAgICAgICBtYXg6IGRhdGEud29ya3NwYWNlWzJdICogZGF0YS5DYW52YXNSYXRpbyxcbiAgLy8gICAgIH0sXG4gIC8vICAgfTtcbiAgLy8gICB0aGlzLnJlYWx0aW1lUGxvdE9wdGlvbnMudkF4aXMgPSB7XG4gIC8vICAgICB0aXRsZTogJ1kgcG9zaXRpb24gKHB4KScsXG4gIC8vICAgICB2aWV3V2luZG93OiB7XG4gIC8vICAgICAgIG1pbjogMCxcbiAgLy8gICAgICAgbWF4OiBkYXRhLlZpZXdwb3J0UGl4ZWxzWzFdIC0gZGF0YS5vZmZzZXR0b3AsXG4gIC8vICAgICB9LFxuICAvLyAgIH07XG4gIC8vICAgbGV0IG51bUNvbCA9IHRoaXMucmVhbHRpbWVEYXRhVGFibGUuZ2V0TnVtYmVyT2ZDb2x1bW5zKCk7XG4gIC8vICAgdGhpcy5nZW5lcmF0ZUFuZEFkZFJvd0RhdGEodGhpcy5yZWFsdGltZURhdGFUYWJsZSwgbnVtQ29sLCB7XG4gIC8vICAgICAwOiAwLFxuICAvLyAgICAgW251bUNvbCAtIDJdOiAwLFxuICAvLyAgIH0pO1xuICAvLyAgIGxldCBudW1Sb3dzID0gdGhpcy5yZWFsdGltZURhdGFUYWJsZS5nZXROdW1iZXJPZlJvd3MoKTtcblxuICAvLyAgIHRoaXMucmVhbHRpbWVQbG90Q29uZmlnID0ge1xuICAvLyAgICAgY2hhcnRUeXBlOiAnQ29tYm9DaGFydCcsXG4gIC8vICAgICBjb250YWluZXJJZDogJ3JlYWx0aW1lLXBsb3QnLFxuICAvLyAgICAgb3B0aW9uczogdGhpcy5yZWFsdGltZVBsb3RPcHRpb25zLFxuICAvLyAgIH07XG4gIC8vICAgdGhpcy5yZWFsdGltZVBsb3QgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ2hhcnRXcmFwcGVyKFxuICAvLyAgICAgdGhpcy5yZWFsdGltZVBsb3RDb25maWdcbiAgLy8gICApO1xuICAvLyAgIHRoaXMucmVhbHRpbWVQbG90LnNldERhdGFUYWJsZSh0aGlzLnJlYWx0aW1lRGF0YVRhYmxlKTtcbiAgLy8gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGF0YV9hcnJpdmVkJywgKGV2dDogQ3VzdG9tRXZlbnRJbml0KSA9PiB7XG4gIC8vICAgICBpZiAoaWR4ICUgMiA9PSAwKSB7XG4gIC8vICAgICAgIHRoaXMucmVhbHRpbWVEYXRhVGFibGUuc2V0VmFsdWUoXG4gIC8vICAgICAgICAgbnVtUm93cyAtIDEsXG4gIC8vICAgICAgICAgMCxcbiAgLy8gICAgICAgICBNYXRoLmZsb29yKGV2dC5kZXRhaWwueClcbiAgLy8gICAgICAgKTtcbiAgLy8gICAgICAgdGhpcy5yZWFsdGltZURhdGFUYWJsZS5zZXRWYWx1ZShcbiAgLy8gICAgICAgICBudW1Sb3dzIC0gMSxcbiAgLy8gICAgICAgICBudW1Db2wgLSAyLFxuICAvLyAgICAgICAgIE1hdGguZmxvb3IoZXZ0LmRldGFpbC55KVxuICAvLyAgICAgICApO1xuICAvLyAgICAgICB0aGlzLnJlYWx0aW1lUGxvdC5kcmF3KCk7XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICBwcml2YXRlIGRyYXdTdGF0aWNFbGVtZW50cyhcbiAgICBjdnM6IEhUTUxDYW52YXNFbGVtZW50LFxuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbCxcbiAgICBkYXRhOiBMaXZlcGxvdERhdGFUeXBlLFxuICAgIGV2dDogQ3VzdG9tRXZlbnRJbml0XG4gICkge1xuICAgIGlmIChjdHgpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAnZ3JheSc7XG4gICAgICBjdHguZmlsbFJlY3QoXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIGRhdGEud29ya3NwYWNlWzJdICogZGF0YS5DYW52YXNSYXRpbyxcbiAgICAgICAgZGF0YS5WaWV3cG9ydFBpeGVsc1sxXSAtIGRhdGEub2Zmc2V0dG9wXG4gICAgICApO1xuXG4gICAgICBmb3IgKGxldCBpZHggaW4gZXZ0LmRldGFpbC5ib3VuZGluZ0JveGVzKSB7XG4gICAgICAgIGxldCB3aWR0aCA9XG4gICAgICAgICAgZXZ0LmRldGFpbC5ib3VuZGluZ0JveGVzW2lkeF1bJ3hfMSddIC1cbiAgICAgICAgICBldnQuZGV0YWlsLmJvdW5kaW5nQm94ZXNbaWR4XVsneF8wJ107XG4gICAgICAgIGxldCBoZWlnaHQgPVxuICAgICAgICAgIGV2dC5kZXRhaWwuYm91bmRpbmdCb3hlc1tpZHhdWyd5XzEnXSAtXG4gICAgICAgICAgZXZ0LmRldGFpbC5ib3VuZGluZ0JveGVzW2lkeF1bJ3lfMCddO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5yZWN0KFxuICAgICAgICAgIF8uZmxvb3IoZXZ0LmRldGFpbC5ib3VuZGluZ0JveGVzW2lkeF1bJ3hfMCddKSxcbiAgICAgICAgICBfLmZsb29yKGN2cy5oZWlnaHQgLSBldnQuZGV0YWlsLmJvdW5kaW5nQm94ZXNbaWR4XVsneV8wJ10pLFxuICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgIC1oZWlnaHRcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfS8vRlVOQ1RJT04gZHJhd1N0YXRpY0VsZW1lbnRzXG5cbiAgcHJpdmF0ZSBkcmF3UmVhbHRpbWVQbG90MihkYXRhOiBMaXZlcGxvdERhdGFUeXBlKSB7XG4gICAgbGV0IGN2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWFsdGltZS1jYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBjdnMud2lkdGggPSBkYXRhLndvcmtzcGFjZVsyXSAqIGRhdGEuQ2FudmFzUmF0aW87XG4gICAgY3ZzLmhlaWdodCA9IGRhdGEuVmlld3BvcnRQaXhlbHNbMV0gLSBkYXRhLm9mZnNldHRvcDtcbiAgICBsZXQgY3R4ID0gY3ZzLmdldENvbnRleHQoJzJkJykgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIGNvbnN0IGxvbmdlckF4aXMgPSBjdnMud2lkdGggPiBjdnMuaGVpZ2h0ID8gY3ZzLndpZHRoIDogY3ZzLmhlaWdodDtcblxuICAgIC8vIGNvbnN0IHJlYWx0aW1lT25EYXRhID1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGF0YV9hcnJpdmVkJywgKGV2dDogQ3VzdG9tRXZlbnRJbml0KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnTE9OR0VSIEFYSVM6JywgbG9uZ2VyQXhpcyk7XG4gICAgICBpZiAoZXZ0LmRldGFpbC5tZXRhID09IDIpIHtcbiAgICAgICAgdGhpcy5kcmF3U3RhdGljRWxlbWVudHMoY3ZzLCBjdHgsIGRhdGEsIGV2dCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChldnQuZGV0YWlsLm1ldGEgPT0gMSB8fCBldnQuZGV0YWlsLm1ldGEgPT0gMCkge1xuICAgICAgICBjb25zdCB4ID0gXy5mbG9vcihldnQuZGV0YWlsLngpO1xuICAgICAgICBjb25zdCB5ID0gXy5mbG9vcihjdnMuaGVpZ2h0IC0gZXZ0LmRldGFpbC55KTtcbiAgICAgICAgY29uc29sZS5sb2coJ1g6JywgeCwgJ1k6JywgeSk7XG4gICAgICAgIGNvbnN0IHhRdWFudGl0eSA9IHggLSB0aGlzLnByZXZDb29yZC54O1xuICAgICAgICBjb25zdCB4U3F1YXJlZCA9IE1hdGgucG93KHhRdWFudGl0eSwgMik7XG4gICAgICAgIGNvbnN0IHlRdWFudGl0eSA9IHkgLSB0aGlzLnByZXZDb29yZC55O1xuICAgICAgICBjb25zdCB5U3F1YXJlZCA9IE1hdGgucG93KHlRdWFudGl0eSwgMik7XG4gICAgICAgIGNvbnN0IGRpc3QgPSBNYXRoLnNxcnQoeFNxdWFyZWQgKyB5U3F1YXJlZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdESVNUOicsIGRpc3QpO1xuICAgICAgICBjb25zb2xlLmxvZygneFF1YW50aXR5OicsIHhRdWFudGl0eSwgJ3lRdWFudGl0eTonLCB5UXVhbnRpdHkpO1xuICAgICAgICBjb25zb2xlLmxvZygneFNxdWFyZWQ6JywgeFNxdWFyZWQsICd5U3F1YXJlZDonLCB5U3F1YXJlZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICdwcmV2Q29vcmRYOicsXG4gICAgICAgICAgdGhpcy5wcmV2Q29vcmQueCxcbiAgICAgICAgICAncHJldkNvb3JkWTonLFxuICAgICAgICAgIHRoaXMucHJldkNvb3JkLnlcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoZGlzdCA+IGxvbmdlckF4aXMgKiAwLjAxNSkge1xuICAgICAgICAgIGlmICh0aGlzLnByZXZDb2xvcklkeCA9PSAxNCkge1xuICAgICAgICAgICAgdGhpcy5wcmV2Q29sb3JJZHggPSAwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByZXZDb2xvcklkeCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBydENvbG9yTWFwW3RoaXMucHJldkNvbG9ySWR4XTtcbiAgICAgICAgY3R4Py5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Py5hcmMoeCwgeSwgMiwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgICBjdHg/LmZpbGwoKTtcblxuICAgICAgICB0aGlzLnByZXZDb29yZC54ID0geDtcbiAgICAgICAgdGhpcy5wcmV2Q29vcmQueSA9IHk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0vL0ZVTkNUSU9OIGRyYXdSZWFsdGltZVBsb3QyXG5cbiAgcHJpdmF0ZSBkcmF3U2NyZWVuUGxvdChkYXRhOiBMaXZlcGxvdERhdGFUeXBlLCBzY3JlZW5BY3RpdmU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNjcmVlblBsb3RPcHRpb25zLnNlcmllcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy54eVBvc0RhdGFUYWJsZS5nZXROdW1iZXJPZkNvbHVtbnMoKTsgaSsrKSB7XG4gICAgICBpZiAodGhpcy54eVBvc0RhdGFUYWJsZS5nZXRDb2x1bW5MYWJlbChpKSA9PSAnRml4YXRpb24nKSB7XG4gICAgICAgIHRoaXMuc2NyZWVuUGxvdE9wdGlvbnMuc2VyaWVzW2kgLSAxXSA9IHsgdHlwZTogJ2xpbmUnLCBjb2xvcjogJ2dyYXknIH07XG4gICAgICB9IGVsc2UgaWYgKHRoaXMueHlQb3NEYXRhVGFibGUuZ2V0Q29sdW1uTGFiZWwoaSkgPT0gJ1NhbXBsZScpIHtcbiAgICAgICAgdGhpcy5zY3JlZW5QbG90T3B0aW9ucy5zZXJpZXNbaSAtIDFdID0geyB0eXBlOiAnbGluZScsIGNvbG9yOiAnYmxhY2snIH07XG4gICAgICB9IGVsc2UgaWYgKHRoaXMueHlQb3NEYXRhVGFibGUuZ2V0Q29sdW1uTGFiZWwoaSkgPT0gJ1NhbWUnKSB7XG4gICAgICAgIHRoaXMuc2NyZWVuUGxvdE9wdGlvbnMuc2VyaWVzW2kgLSAxXSA9IHsgdHlwZTogJ2xpbmUnLCBjb2xvcjogJ2dyZWVuJyB9O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnh5UG9zRGF0YVRhYmxlLmdldENvbHVtbkxhYmVsKGkpID09ICdEaWZmZXJlbnQnKSB7XG4gICAgICAgIHRoaXMuc2NyZWVuUGxvdE9wdGlvbnMuc2VyaWVzW2kgLSAxXSA9IHsgdHlwZTogJ2xpbmUnLCBjb2xvcjogJ3JlZCcgfTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy54eVBvc0RhdGFUYWJsZS5nZXRDb2x1bW5MYWJlbChpKSA9PSAnRml4X1Jld2FyZCcpIHtcbiAgICAgICAgdGhpcy5zY3JlZW5QbG90T3B0aW9ucy5zZXJpZXNbaSAtIDFdID0geyBjb2xvcjogJ2JsdWUnIH07XG4gICAgICB9IGVsc2UgaWYgKHRoaXMueHlQb3NEYXRhVGFibGUuZ2V0Q29sdW1uTGFiZWwoaSkgPT0gJ0ZpeF9QdW5pc2gnKSB7XG4gICAgICAgIHRoaXMuc2NyZWVuUGxvdE9wdGlvbnMuc2VyaWVzW2kgLSAxXSA9IHsgY29sb3I6ICdyZWQnIH07XG4gICAgICB9IGVsc2UgaWYgKHRoaXMueHlQb3NEYXRhVGFibGUuZ2V0Q29sdW1uTGFiZWwoaSkgPT0gJ1RhcmdldF9SZXdhcmQnKSB7XG4gICAgICAgIHRoaXMuc2NyZWVuUGxvdE9wdGlvbnMuc2VyaWVzW2kgLSAxXSA9IHsgY29sb3I6ICdncmVlbicgfTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy54eVBvc0RhdGFUYWJsZS5nZXRDb2x1bW5MYWJlbChpKSA9PSAnVGFyZ2V0X1B1bmlzaCcpIHtcbiAgICAgICAgdGhpcy5zY3JlZW5QbG90T3B0aW9ucy5zZXJpZXNbaSAtIDFdID0geyBjb2xvcjogJ2JsYWNrJyB9O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnh5UG9zRGF0YVRhYmxlLmdldENvbHVtbkxhYmVsKGkpLmluY2x1ZGVzKCdUZXN0JykpIHtcbiAgICAgICAgdGhpcy5zY3JlZW5QbG90T3B0aW9ucy5zZXJpZXNbaSAtIDFdID0geyB0eXBlOiAnbGluZScsIGNvbG9yOiAnYmxhY2snIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zY3JlZW5QbG90T3B0aW9ucy5oZWlnaHQgPSBkYXRhLlZpZXdwb3J0UGl4ZWxzWzFdO1xuICAgIHRoaXMuc2NyZWVuUGxvdE9wdGlvbnMud2lkdGggPSBkYXRhLlZpZXdwb3J0UGl4ZWxzWzBdO1xuICAgIHRoaXMuc2NyZWVuUGxvdE9wdGlvbnMuaEF4aXMgPSB7XG4gICAgICB0aXRsZTogJ1ggcG9zaXRpb24gKHB4KScsXG4gICAgICB2aWV3V2luZG93OiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgbWF4OiBkYXRhLlZpZXdwb3J0UGl4ZWxzWzBdLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHRoaXMuc2NyZWVuUGxvdE9wdGlvbnMudkF4aXMgPSB7XG4gICAgICB0aXRsZTogJ1kgcG9zaXRpb24gKHB4KScsXG4gICAgICB2aWV3V2luZG93OiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgbWF4OiBkYXRhLlZpZXdwb3J0UGl4ZWxzWzFdLFxuICAgICAgfSxcbiAgICB9O1xuICAgIGlmICghdGhpcy5yZWFsdGltZVBsb3RBY3RpdmUpIHtcbiAgICAgIHRoaXMuc2NyZWVuUGxvdC5kcmF3KHRoaXMueHlQb3NEYXRhVGFibGUsIHRoaXMuc2NyZWVuUGxvdE9wdGlvbnMpO1xuICAgIH1cbiAgfS8vRlVOQ1RJT04gZHJhd1NjcmVlblBsb3RcblxuICBwcml2YXRlIGZvcm1hdERhdGUoXG4gICAgZGF0YTogZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlLFxuICAgIGNvbElkeDogbnVtYmVyXG4gICk6IHZvaWQge1xuICAgIGxldCBmb3JtYXR0ZXIgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0ZUZvcm1hdCh7XG4gICAgICBwYXR0ZXJuOiAnaCBhYScsXG4gICAgfSk7XG4gICAgZm9ybWF0dGVyLmZvcm1hdChkYXRhLCBjb2xJZHgpO1xuICB9Ly9GVU5DVElPTiBmb3JtYXREYXRlXG5cbiAgcHJpdmF0ZSBmb3JtYXROdW1iZXIoZGF0YTogZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlLCBjb2xJZHg6IG51bWJlcikge1xuICAgIGxldCBmb3JtYXR0ZXIgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uTnVtYmVyRm9ybWF0KHtcbiAgICAgIGZyYWN0aW9uRGlnaXRzOiAyLFxuICAgIH0pO1xuICAgIGZvcm1hdHRlci5mb3JtYXQoZGF0YSwgY29sSWR4KTtcbiAgfS8vRlVOQ1RJT04gZm9ybWF0TnVtYmVyXG5cbiAgcHJpdmF0ZSBmb3JtYXRDb2xvcihkYXRhOiBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUsIGNvbElkeDogbnVtYmVyKSB7XG4gICAgbGV0IGZvcm1hdHRlciA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5Db2xvckZvcm1hdCgpO1xuICAgIGxldCBkeCA9IDEgLyAoY29sb3JNYXBKZXQubGVuZ3RoIC0gMSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvck1hcEpldC5sZW5ndGg7IGkrKykge1xuICAgICAgZm9ybWF0dGVyLmFkZFJhbmdlKGkgKiBkeCwgKGkgKyAxKSAqIGR4LCAnZ3JheScsIGNvbG9yTWFwSmV0W2ldKTtcbiAgICB9XG4gICAgZm9ybWF0dGVyLmZvcm1hdChkYXRhLCBjb2xJZHgpO1xuICB9Ly9GVU5DVElPTiBmb3JtYXRDb2xvclxufS8vQ0xBU1MgQ2hhcnRzIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XG5pbXBvcnQgJ2ZpcmViYXNlL3N0b3JhZ2UnO1xuaW1wb3J0ICdmaXJlYmFzZS9kYXRhYmFzZSc7XG5pbXBvcnQgSlNPTkVkaXRvciBmcm9tICdqc29uZWRpdG9yJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG4vLyBpbXBvcnQgJ2pzb25lZGl0b3IvZGlzdC9qc29uZWRpdG9yLmNzcydcbi8vIGltcG9ydCAnLi9qc29uZWRpdG9yLmNzcyc7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgQ2hhcnRzIH0gZnJvbSAnLi9jaGFydHMnO1xuaW1wb3J0IHsgRmlsZVR5cGUsIExpdmVwbG90RGF0YVR5cGUgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcbmNvbnN0IHN0b3JhZ2VSZWYgPSBzdG9yYWdlLnJlZigpO1xuY29uc3QgcnRkYiA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XG5cbmNvbnN0IERBVEFfUEFUSCA9ICdta3R1cmtmaWxlcy9kYXRhZmlsZXMvJztcbmNvbnN0IERBVEFfUkVGID0gc3RvcmFnZVJlZi5jaGlsZChEQVRBX1BBVEgpO1xuY29uc3QgUEFSQU1fUEFUSCA9ICdta3R1cmtmaWxlcy9wYXJhbWV0ZXJmaWxlcy9zdWJqZWN0cy8nO1xuY29uc3QgUEFSQU1fUkVGID0gc3RvcmFnZVJlZi5jaGlsZChQQVJBTV9QQVRIKTtcbmNvbnN0IEFHRU5UU19SRUYgPSBydGRiLnJlZignYWdlbnRzLycpO1xuY29uc3QgdXRpbHMgPSBuZXcgVXRpbHMoKTtcblxuZXhwb3J0IGNsYXNzIExpdmVwbG90IHtcbiAgcHVibGljIHdrcjogV29ya2VyO1xuICBwdWJsaWMgZmlsZTogRmlsZVR5cGU7XG4gIHB1YmxpYyBlbGVtT2JqczogYW55O1xuICBwdWJsaWMgZWRpdG9yOiBKU09ORWRpdG9yO1xuICBwdWJsaWMgY2hhcnRzOiBDaGFydHM7XG4gIHB1YmxpYyBzdHJlYW1BY3RpdmU6IGJvb2xlYW47XG4gIHB1YmxpYyBhZ2VudENsaWVudFJlZjogZmlyZWJhc2UuZGF0YWJhc2UuUmVmZXJlbmNlO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1PYmo6IGFueSkge1xuICAgIHRoaXMuZWxlbU9ianMgPSBlbGVtT2JqO1xuICAgIHRoaXMuZmlsZSA9IHtcbiAgICAgIHBhdGg6IERBVEFfUEFUSCxcbiAgICAgIGxpc3Q6IFtdLFxuICAgICAgbmFtZTogJycsXG4gICAgICB2ZXI6IG51bGwsXG4gICAgICBkYXRlOiBudWxsLFxuICAgICAgZGF0YUNoYW5nZWQ6IGZhbHNlLFxuICAgICAgZmlsZUNoYW5nZWQ6IGZhbHNlLFxuICAgIH07XG4gICAgdGhpcy5jaGFydHMgPSBuZXcgQ2hhcnRzKGVsZW1PYmopO1xuICAgIHRoaXMuc3RyZWFtQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5yZXF1ZXN0UmVhbHRpbWVCdG5BY3Rpb24oKTtcbiAgICB0aGlzLm9uRGlzY29ubmVjdEFjdGlvbigpO1xuICB9XG5cbiAgcHVibGljIGZpbGVTZWxlY3Rpb25DaGFuZ2VkTGlzdGVuZXIoZWxlbTogSFRNTFNlbGVjdEVsZW1lbnQpIHtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2dDogRXZlbnQpID0+IHtcbiAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRoaXMuc3RyZWFtQWN0aXZlKSB7XG4gICAgICAgIGxldCBhZ2VudCA9IHRoaXMuZmlsZS5kYXRhPy5BZ2VudCE7XG4gICAgICAgIHJ0ZGIucmVmKGBkYXRhLyR7YWdlbnR9YCkub2ZmKCk7XG4gICAgICAgIHRoaXMuYWdlbnRDbGllbnRSZWYucmVtb3ZlKChlcnIpID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBSZW1vdmluZyBhZ2VudENsaWVudFJlZjogJHtlcnJ9YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdHJlYW1BY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZmlsZS5uYW1lID0gdGhpcy5maWxlLmxpc3RbcGFyc2VJbnQoZWxlbS52YWx1ZSldLmZ1bGxwYXRoO1xuICAgICAgdGhpcy5maWxlLmZpbGVDaGFuZ2VkID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkRpc2Nvbm5lY3RBY3Rpb24oKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VubG9hZCcsIChldnQ6IEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmFnZW50Q2xpZW50UmVmLm9uRGlzY29ubmVjdCgpLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHJlcXVlc3RSZWFsdGltZUJ0bkFjdGlvbigpIHtcbiAgICBsZXQgcmVhbHRpbWVCdG4gPSB0aGlzLmVsZW1PYmpzLnJlYWx0aW1lQnRuO1xuICAgIHJlYWx0aW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGV2dDogRXZlbnQpID0+IHtcbiAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGV0IGFnZW50ID0gdGhpcy5maWxlLmRhdGE/LkFnZW50ITtcbiAgICAgIGlmICh0aGlzLnN0cmVhbUFjdGl2ZSkge1xuICAgICAgICByZWFsdGltZUJ0bi5pbm5lckhUTUwgPSAnUmVxdWVzdCBSZWFsdGltZSBTdHJlYW0nO1xuICAgICAgICBydGRiLnJlZihgZGF0YS8ke2FnZW50fWApLm9mZigpO1xuICAgICAgICB0aGlzLmFnZW50Q2xpZW50UmVmLnJlbW92ZSgoZXJyKSA9PiB7XG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgUmVtb3ZpbmcgYWdlbnRDbGllbnRSZWY6ICR7ZXJyfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJ0ZGIucmVmKGBkYXRhLyR7YWdlbnR9YCkub2ZmKCk7XG4gICAgICAgIHRoaXMuc3RyZWFtQWN0aXZlID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWFsdGltZUJ0bi5pbm5lckhUTUwgPSAnRGVhY3RpdmF0ZSBSZWFsdGltZSBTdHJlYW0nO1xuICAgICAgICBsZXQgYWdlbnRDbGllbnRLZXkgPSBydGRiLnJlZihgYWdlbnRzLyR7YWdlbnR9YCkucHVzaCgpLmtleTtcbiAgICAgICAgdGhpcy5hZ2VudENsaWVudFJlZiA9IHJ0ZGIucmVmKGBhZ2VudHMvJHthZ2VudH0vJHthZ2VudENsaWVudEtleX1gKTtcbiAgICAgICAgaWYgKF8uaXNTdHJpbmcoYWdlbnRDbGllbnRLZXkpKSB7XG4gICAgICAgICAgcnRkYi5yZWYoYGFnZW50cy8ke2FnZW50fWApLnVwZGF0ZSh7XG4gICAgICAgICAgICBbYWdlbnRDbGllbnRLZXldOiB0cnVlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJ0ZGIucmVmKGBkYXRhLyR7YWdlbnR9YCkub24oJ3ZhbHVlJywgKHNuYXApID0+IHtcbiAgICAgICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2RhdGFfYXJyaXZlZCcsIHsgZGV0YWlsOiBzbmFwLnZhbCgpIH0pO1xuICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RyZWFtQWN0aXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBwb3B1bGF0ZUZpbGVMaXN0KGVsZW06IEhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBmaWxlTGlzdCA9IGF3YWl0IHV0aWxzLmdldEZpbGVMaXN0KHRoaXMuZmlsZS5wYXRoKTtcblxuICAgICAgZmlsZUxpc3Quc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgICAgbGV0IG5hbWVBID0gYS5uYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGxldCBuYW1lQiA9IGIubmFtZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgIGlmIChuYW1lQSA+IG5hbWVCKSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5hbWVBIDwgbmFtZUIpIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZmlsZS5saXN0ID0gZmlsZUxpc3Q7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHQudmFsdWUgPSBpLnRvU3RyaW5nKCk7XG4gICAgICAgIG9wdC5pbm5lckhUTUwgPSBmaWxlTGlzdFtpXS5uYW1lO1xuICAgICAgICBlbGVtLmFwcGVuZENoaWxkKG9wdCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmlsZS5uYW1lID0gdGhpcy5maWxlLmxpc3RbMF0uZnVsbHBhdGg7XG4gICAgICB0aGlzLmZpbGUuZmlsZUNoYW5nZWQgPSB0cnVlO1xuICAgICAgbGV0IHJhd1N0b3JhZ2VGaWxlID0gYXdhaXQgdXRpbHMuZ2V0U3RvcmFnZUZpbGUodGhpcy5maWxlLm5hbWUpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3Jhd0ZpbGUnLCByYXdTdG9yYWdlRmlsZSk7XG5cbiAgICAgIHRoaXMucHJvY2Vzc0RhdGEocmF3U3RvcmFnZUZpbGUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFUlJPUiAjZmlsZS1saXN0OicsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZsYXR0ZW5EYXRhKGRhdGE6IGFueSkge1xuICAgIGxldCB0bXA6IGFueSA9IHt9O1xuXG4gICAgZm9yIChsZXQgb3V0ZXJLZXkgaW4gZGF0YSkge1xuICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkob3V0ZXJLZXkpKSB7XG4gICAgICAgIGZvciAobGV0IGlubmVyS2V5IGluIGRhdGFbb3V0ZXJLZXldKSB7XG4gICAgICAgICAgaWYgKGRhdGFbb3V0ZXJLZXldLmhhc093blByb3BlcnR5KGlubmVyS2V5KSkge1xuICAgICAgICAgICAgdG1wW2lubmVyS2V5XSA9IGRhdGFbb3V0ZXJLZXldW2lubmVyS2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG1wO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBwcm9jZXNzRGF0YShkYXRhOiBhbnkpIHtcbiAgICBjb25zb2xlLnRpbWUoJ3RoaXMuZmxhdHRlbkRhdGEnKTtcbiAgICB0aGlzLmZpbGUuZGF0YSA9IHRoaXMuZmxhdHRlbkRhdGEoZGF0YSk7XG4gICAgY29uc29sZS50aW1lRW5kKCd0aGlzLmZsYXR0ZW5EYXRhJyk7XG4gICAgdGhpcy5sb2FkRGF0YVRvRWRpdG9yKHRoaXMuZmlsZS5kYXRhKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpbGUuZGF0YSk7XG5cbiAgICBsZXQgbWV0YWRhdGEgPSBhd2FpdCB1dGlscy5nZXRTdG9yYWdlRmlsZU1ldGFkYXRhKHRoaXMuZmlsZS5uYW1lKTtcbiAgICBjb25zb2xlLmxvZygnU3VjY2VzcyEgTG9hZGVkIEZpbGUgU2l6ZTonLCBtZXRhZGF0YS5zaXplIC8gMTAwMCwgJ0tCJyk7XG4gICAgdGhpcy5maWxlLnZlciA9IG1ldGFkYXRhLmdlbmVyYXRpb247XG4gICAgdGhpcy5maWxlLmRhdGVTYXZlZCA9IG5ldyBEYXRlKG1ldGFkYXRhLnVwZGF0ZWQpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZS5kYXRlU2F2ZWQpO1xuXG4gICAgaWYgKHRoaXMuZmlsZS5maWxlQ2hhbmdlZCkge1xuICAgICAgdGhpcy5jaGFydHMuaW5pdGlhbGl6ZUNoYXJ0RGF0YSh0aGlzLmZpbGUsIHtcbiAgICAgICAgc3RyZWFtQWN0aXZlOiB0aGlzLnN0cmVhbUFjdGl2ZSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jaGVja0ZpbGVTdGF0dXMoKTtcbiAgICAgIHRoaXMuZmlsZS5maWxlQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5maWxlLmRhdGFDaGFuZ2VkID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZpbGUuZGF0YUNoYW5nZWQpIHtcbiAgICAgIHRoaXMuY2hhcnRzLnVwZGF0ZVBsb3RzKHRoaXMuZmlsZSwgeyBzdHJlYW1BY3RpdmU6IHRoaXMuc3RyZWFtQWN0aXZlIH0pO1xuICAgICAgdGhpcy5maWxlLmRhdGFDaGFuZ2VkID0gZmFsc2U7XG4gICAgICB0aGlzLmNoZWNrRmlsZVN0YXR1cygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXR1cEVkaXRvcihlbGVtOiBIVE1MRGl2RWxlbWVudCkge1xuICAgIHRoaXMuZWRpdG9yID0gbmV3IEpTT05FZGl0b3IoZWxlbSk7XG4gIH1cblxuICBwcml2YXRlIGxvYWREYXRhVG9FZGl0b3IoZGF0YTogYW55KSB7XG4gICAgaWYgKHRoaXMuZmlsZS5maWxlQ2hhbmdlZCkge1xuICAgICAgdGhpcy5lZGl0b3Iuc2V0KGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVkaXRvci51cGRhdGUoZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGVja0ZpbGVTdGF0dXMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBtZXRhZGF0YSA9IGF3YWl0IHV0aWxzLmdldFN0b3JhZ2VGaWxlTWV0YWRhdGEodGhpcy5maWxlLm5hbWUpO1xuXG4gICAgICBpZiAodGhpcy5maWxlLnZlciAhPSBtZXRhZGF0YS5nZW5lcmF0aW9uKSB7XG4gICAgICAgIHRoaXMuZmlsZS52ZXIgPSBtZXRhZGF0YS5nZW5lcmF0aW9uO1xuICAgICAgICB0aGlzLmZpbGUuZGF0ZVNhdmVkID0gbmV3IERhdGUobWV0YWRhdGEudXBkYXRlZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZS5kYXRlU2F2ZWQpO1xuICAgICAgICB0aGlzLmZpbGUuZGF0YUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZygnRmlsZSB3YXMgdXBkYXRlZCB2ZXI9JyArIHRoaXMuZmlsZS52ZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5maWxlLmRhdGFDaGFuZ2VkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmZpbGUuZmlsZUNoYW5nZWQgPT0gdHJ1ZSB8fCB0aGlzLmZpbGUuZGF0YUNoYW5nZWQgPT0gdHJ1ZSkge1xuICAgICAgICBsZXQgcmF3U3RvcmFnZUZpbGUgPSBhd2FpdCB1dGlscy5nZXRTdG9yYWdlRmlsZSh0aGlzLmZpbGUubmFtZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyYXdGaWxlJywgcmF3U3RvcmFnZUZpbGUpO1xuICAgICAgICB0aGlzLnByb2Nlc3NEYXRhKHJhd1N0b3JhZ2VGaWxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2hlY2tGaWxlU3RhdHVzKCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdjaGVja0ZpbGVTdGF0dXMgRXJyb3I6JywgZXJyb3IpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7IC8vIHdoeSBuZWVkZWRcbiAgfVxufVxuIiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCAnZmlyZWJhc2UvYXV0aCc7XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5QTBmYnYyVnFFLUFmRjZWX254U1NYQ0VxYVRsQmxablRJXCIsXG4gIGF1dGhEb21haW46IFwic2FuZGJveC1jZTJjNS5maXJlYmFzZWFwcC5jb21cIixcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9zYW5kYm94LWNlMmM1LmZpcmViYXNlaW8uY29tXCIsXG4gIHByb2plY3RJZDogXCJzYW5kYm94LWNlMmM1XCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwic2FuZGJveC1jZTJjNS5hcHBzcG90LmNvbVwiLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIxMDAzNzE5ODg3OTQ0XCIsXG4gIGNsaWVudElkOiBcIjEwMDM3MTk4ODc5NDQtcmxjMDZjamVjcXJwOWZndm12bzU2dnFvcDFvdG05aHQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIlxufTtcbmZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuXG5pbXBvcnQgeyBMaXZlcGxvdCB9IGZyb20gJy4vbGl2ZXBsb3QnO1xuXG5sZXQgZmlsZUxpc3RTZWxlY3RvciA9IChcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbGUtbGlzdCcpIGFzIEhUTUxTZWxlY3RFbGVtZW50XG4pO1xuXG5sZXQgZWRpdG9yRGl2ID0gKFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdG9yJykgYXMgSFRNTERpdkVsZW1lbnRcbik7XG5cbmxldCBlbGVtT2JqID0ge1xuICBwZXJmRGl2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGVyZm9ybWFuY2UtZGFzaGJvYXJkJykgYXMgSFRNTERpdkVsZW1lbnQsXG4gIHBlcmZQbG90OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGVyZm9ybWFuY2UtcGxvdCcpIGFzIEhUTUxEaXZFbGVtZW50LFxuICBwZXJmRmlsdGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGVyZm9ybWFuY2UtZmlsdGVyJykgYXMgSFRNTERpdkVsZW1lbnQsXG4gIHRyaWFsRGl2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJpYWwtZGFzaGJvYXJkJykgYXMgSFRNTERpdkVsZW1lbnQsXG4gIHRyaWFsUGxvdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyaWFsLXBsb3QnKSBhcyBIVE1MRGl2RWxlbWVudCxcbiAgdHJpYWxGaWx0ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmlhbC1maWx0ZXInKSBhcyBIVE1MRGl2RWxlbWVudCxcbiAgaGVhbHRoRGl2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhbHRoLWRhc2hib2FyZCcpIGFzIEhUTUxEaXZFbGVtZW50LFxuICBoZWFsdGhQbG90OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhbHRoLXBsb3QnKSBhcyBIVE1MRGl2RWxlbWVudCxcbiAgaGVhbHRoRmlsdGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhbHRoLWZpbHRlcicpIGFzIEhUTUxEaXZFbGVtZW50LFxuICBzY3JlZW5QbG90OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NyZWVuLXBsb3QnKSBhcyBIVE1MRGl2RWxlbWVudCxcbiAgLy8gcmVhbHRpbWVQbG90OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVhbHRpbWUtcGxvdCcpIGFzIEhUTUxEaXZFbGVtZW50LFxuICByeG5QbG90OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVhY3Rpb24tcGxvdCcpIGFzIEhUTUxEaXZFbGVtZW50LFxuICBjaG9pY2VQbG90OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hvaWNlLXBsb3QnKSBhcyBIVE1MRGl2RWxlbWVudCxcbiAgb2JqUGVyZlBsb3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvYmotcGVyZi1wbG90JykgYXMgSFRNTERpdkVsZW1lbnQsXG4gIHJld2FyZFBsb3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXdhcmQtcGxvdCcpIGFzIEhUTUxEaXZFbGVtZW50LFxuICBcbiAgcGVyZlZpdGFsczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BlcmZvcm1hbmNlLXZpdGFscycpIGFzIEhUTUxTcGFuRWxlbWVudCxcbiAgcmZpZFZpdGFsczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JmaWQtdml0YWxzJykgYXMgSFRNTFNwYW5FbGVtZW50LFxuICBiYXR0ZXJ5Vml0YWxzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmF0dGVyeS12aXRhbHMnKSBhcyBIVE1MU3BhbkVsZW1lbnQsXG4gIHRyaWFsVml0YWxzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJpYWwtdml0YWxzJykgYXMgSFRNTFNwYW5FbGVtZW50LFxuICBmaXhTdGRldjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpeGF0aW9uLXN0ZGV2JykgYXMgSFRNTFNwYW5FbGVtZW50LFxuICB0YXJaZXJvU3RkZXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXJnZXQwLXN0ZGV2JykgYXMgSFRNTFNwYW5FbGVtZW50LFxuICB0YXJPbmVTdGRldjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhcmdldDEtc3RkZXYnKSBhcyBIVE1MU3BhbkVsZW1lbnQsXG4gIHNkVGV4dERpdjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvdWNoLXNkLXRleHQnKSBhcyBIVE1MRGl2RWxlbWVudCxcbiAgcmVhbHRpbWVCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXF1ZXN0LXJlYWx0aW1lJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQsXG59O1xuXG5jb25zdCBscCA9IG5ldyBMaXZlcGxvdChlbGVtT2JqKTtcbmxwLnNldHVwRWRpdG9yKGVkaXRvckRpdik7XG5scC5maWxlU2VsZWN0aW9uQ2hhbmdlZExpc3RlbmVyKGZpbGVMaXN0U2VsZWN0b3IpO1xubHAucG9wdWxhdGVGaWxlTGlzdChmaWxlTGlzdFNlbGVjdG9yKTtcblxubGV0IHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XG5wcm92aWRlci5hZGRTY29wZSgnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9jb250YWN0cy5yZWFkb25seScpO1xuZmlyZWJhc2UuYXV0aCgpLmdldFJlZGlyZWN0UmVzdWx0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgaWYgKHJlc3VsdC51c2VyKSB7XG4gICAgLy8gVXNlciBqdXN0IHNpZ25lZCBpbi4geW91IGNhbiBnZXQgdGhlIHJlc3VsdC5jcmVkZW50aWFsLlxuXHRjb25zb2xlLmxvZygnU2lnbi1JbiBSZWRpcmVjdCBSZXN1bHQsIFVTRVIgJyArIHJlc3VsdC51c2VyLmVtYWlsICsgJyBpcyBzaWduZWQgaW4nKVxuICB9XG4gIGVsc2UgaWYgKGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlcikge1xuICAgIC8vIFVzZXIgYWxyZWFkeSBzaWduZWQgaW4uXG5cdGNvbnNvbGUubG9nKCdTaWduLUluIFJlZGlyZWN0IFJlc3VsdCwgVVNFUiBpcyBzaWduZWQgaW4nKVxuICB9XG4gIGVsc2Uge1xuICAgIC8vIE5vIHVzZXIgc2lnbmVkIGluLCB1cGRhdGUgeW91ciBVSSwgc2hvdyB0aGUgcmVkaXJlY3Qgc2lnbi1pbiBzY3JlZW4uXG5cdGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoUmVkaXJlY3QocHJvdmlkZXIpXG4gIH1cbn0pOyIsImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0ICdmaXJlYmFzZS9zdG9yYWdlJztcbmltcG9ydCAnZmlyZWJhc2UvZGF0YWJhc2UnO1xuXG5jb25zdCBzdG9yYWdlID0gZmlyZWJhc2Uuc3RvcmFnZSgpO1xuY29uc3Qgc3RvcmFnZVJlZiA9IHN0b3JhZ2UucmVmKCk7XG5cbmV4cG9ydCBjbGFzcyBVdGlscyB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBwdWJsaWMgYXN5bmMgZ2V0RmlsZUxpc3QocGF0aDogc3RyaW5nLCBleHQ/OiBzdHJpbmcpIHtcbiAgICBsZXQgZmlsZUxpc3QgPSBhd2FpdCBzdG9yYWdlUmVmLmNoaWxkKHBhdGgpLmxpc3RBbGwoKTtcbiAgICAvKiBvbmx5IGtlZXAgZmlsZXMgd2l0aGluIHRoZSBsYXN0IDIgeWVhcnMqL1xuICAgIGxldCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgIGxldCBtb250aCA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKTtcbiAgICBsZXQgZmlsZXM6IGFueSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaXRlbSBvZiBmaWxlTGlzdC5wcmVmaXhlcykge1xuICAgICAgbGV0IHN1YkZpbGVMaXN0ID0gKFxuICAgICAgICBhd2FpdCB0aGlzLmdldEZpbGVMaXN0KHBhdGggKyBpdGVtLm5hbWUgKyAnLycsIGV4dClcbiAgICAgICk7XG4gICAgICBmaWxlcyA9IFsuLi5maWxlcywgLi4uc3ViRmlsZUxpc3RdO1xuICAgIH0vL0ZPUiBpdGVtc1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlTGlzdC5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHR5cGVvZihleHQpID09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmIChmaWxlTGlzdC5pdGVtc1tpXS5uYW1lLmVuZHNXaXRoKGV4dCkpIHsgLy8gaWYgZmlsZSBleHRlbnNpb24gaXMgY29ycmVjdFxuICAgICAgICAgIGZpbGVzLnB1c2goe1xuICAgICAgICAgICAgZnVsbHBhdGg6IGZpbGVMaXN0Lml0ZW1zW2ldLmZ1bGxQYXRoLFxuICAgICAgICAgICAgbmFtZTogZmlsZUxpc3QuaXRlbXNbaV0ubmFtZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2V7XG4gICAgICAgICAgbGV0IHllYXJfZmlsZSA9IHBhcnNlSW50KGZpbGVMaXN0Lml0ZW1zW2ldLm5hbWUuc2xpY2UoMCwgNCkpO1xuICAgICAgICAgIGxldCBtb250aF9maWxlID0gcGFyc2VJbnQoZmlsZUxpc3QuaXRlbXNbaV0ubmFtZS5zbGljZSg1LDcpKTtcbiAgICAgICAgICBpZiAoICh5ZWFyX2ZpbGUqMTIgKyBtb250aF9maWxlKSA+PSAoeWVhcioxMiArIG1vbnRoIC0gNikgKSB7XG4gICAgICAgICAgICBmaWxlcy5wdXNoKHtcbiAgICAgICAgICAgICAgZnVsbHBhdGg6IGZpbGVMaXN0Lml0ZW1zW2ldLmZ1bGxQYXRoLFxuICAgICAgICAgICAgICBuYW1lOiBmaWxlTGlzdC5pdGVtc1tpXS5uYW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9Ly9FTFNFIElGIHdpdGhpbiBsYXN0IDYgbW9udGhzXG4gICAgICB9Ly9FTFNFXG4gICAgfS8vRk9SIGkgZmlsZUxpc3QuaXRlbXNcblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBnZXRTdG9yYWdlRmlsZShwYXRoOiBzdHJpbmcpIHtcbiAgICBsZXQgZmlsZVJlZiA9IHN0b3JhZ2VSZWYuY2hpbGQocGF0aCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2ZpbGVSZWY6JywgZmlsZVJlZik7XG4gICAgbGV0IGZpbGUgPSBhd2FpdCBzdG9yYWdlUmVmLmNoaWxkKHBhdGgpLmdldERvd25sb2FkVVJMKCkudGhlbihhc3luYyAodXJsOiBzdHJpbmcpID0+IHtcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgR2V0dGluZyBVUkw6JywgZSk7XG4gICAgfSk7XG4gICAgLy8gY29uc29sZS5sb2coJ2ZpbGU6JywgZmlsZSk7XG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZ2V0U3RvcmFnZUZpbGVNZXRhZGF0YShwYXRoOiBzdHJpbmcpIHtcbiAgICBsZXQgZmlsZVJlZiA9IHN0b3JhZ2VSZWYuY2hpbGQocGF0aCk7XG4gICAgbGV0IG1ldGFkYXRhID0gYXdhaXQgZmlsZVJlZi5nZXRNZXRhZGF0YSgpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfVxuXG4gIHB1YmxpYyBzbW9vdGgoZGF0YTogYW55W10sIG46IG51bWJlcikge1xuICAgIGxldCBzbW9vdGhlZERhdGEgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpIDwgbiAtIDEpIHtcbiAgICAgICAgbGV0IHRtcCA9IGRhdGEuc2xpY2UoMCwgaSArIDEpO1xuICAgICAgICBzbW9vdGhlZERhdGFbaV0gPSB0bXAucmVkdWNlKChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiBhICsgYjtcbiAgICAgICAgfSk7XG4gICAgICAgIHNtb290aGVkRGF0YVtpXSAvPSAoaSArIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHRtcCA9IGRhdGEuc2xpY2UoaSAtIG4gKyAxLCBpICsgMSk7XG4gICAgICAgIHNtb290aGVkRGF0YVtpXSA9IHRtcC5yZWR1Y2UoKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGEgKyBiO1xuICAgICAgICB9KTtcbiAgICAgICAgc21vb3RoZWREYXRhW2ldIC89IG47XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzbW9vdGhlZERhdGE7XG4gIH1cblxuICBwdWJsaWMgY2FsY0Rpc3RhbmNlKGE6IG51bWJlciwgYjogbnVtYmVyKSB7XG4gICAgcmV0dXJuIE1hdGgucG93KE1hdGguYWJzKGEgLSBiKSwgMik7XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaG1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG1vZHVsZSk7XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgJ2V4cG9ydHMnLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRzZXQ6ICgpID0+IHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignRVMgTW9kdWxlcyBtYXkgbm90IGFzc2lnbiBtb2R1bGUuZXhwb3J0cyBvciBleHBvcnRzLiosIFVzZSBFU00gZXhwb3J0IHN5bnRheCwgaW5zdGVhZDogJyArIG1vZHVsZS5pZCk7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2xpdmVwbG90XCJdID0gc2VsZltcIndlYnBhY2tDaHVua2xpdmVwbG90XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfcnVudGltZV9hcGlfanMtbm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdF9ydW50aW1lX3NvdXItYTlmZTI5XCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21haW4udHNcIikpKVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfcnVudGltZV9hcGlfanMtbm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdF9ydW50aW1lX3NvdXItYTlmZTI5XCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3V0aWxzLnRzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=