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
        console.log(month);
        for (let item of fileList.prefixes) {
            let subFileList = (await this.getFileList(path + item.name + '/', ext));
            files = [...files, ...subFileList];
        }
        for (let i = 0; i < fileList.items.length; i++) {
            if (typeof (ext) == 'string') {
                if (fileList.items[i].name.endsWith(ext)) { // if file extension is correct
                    files.push({
                        fullpath: fileList.items[i].fullPath,
                        name: fileList.items[i].name
                    });
                }
            }
            else if (parseInt(fileList.items[i].name.slice(0, 4)) >= year) {
                files.push({
                    fullpath: fileList.items[i].fullPath,
                    name: fileList.items[i].name
                });
            }
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsYUFBYSxhQUFhLFdBQVcsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FB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QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBOzs7OztXQ1ZBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0pBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7V0NoREE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGl2ZXBsb3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9saXZlcGxvdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vbGl2ZXBsb3QvLi9zcmMvY2hhcnRzLnRzIiwid2VicGFjazovL2xpdmVwbG90Ly4vc3JjL2xpdmVwbG90LnRzIiwid2VicGFjazovL2xpdmVwbG90Ly4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vbGl2ZXBsb3QvLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vbGl2ZXBsb3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGl2ZXBsb3Qvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9saXZlcGxvdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9saXZlcGxvdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGl2ZXBsb3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9saXZlcGxvdC93ZWJwYWNrL3J1bnRpbWUvaGFybW9ueSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2xpdmVwbG90L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGl2ZXBsb3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9saXZlcGxvdC93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2xpdmVwbG90L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2xpdmVwbG90L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9saXZlcGxvdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2xpdmVwbG90L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9saXZlcGxvdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxcbiAqXFxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFxcXCJMaWNlbnNlXFxcIik7XFxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxcbiAqXFxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcXG4gKlxcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcXFwiQVMgSVNcXFwiIEJBU0lTLFxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cXG4gKi9cXG5cXG5odG1sLCBib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgJ0hlbHZldGljYScsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXRfX2hlYWRlci1yb3cge1xcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXQuaXMtc21hbGwtc2NyZWVuIC5tZGwtbGF5b3V0X19oZWFkZXItcm93IGgzIHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0X190YWItYmFyLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXQuaXMtc21hbGwtc2NyZWVuIC5tZGwtbGF5b3V0X190YWItYmFyIC5tZGwtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dDpub3QoLmlzLXNtYWxsLXNjcmVlbikgLm1kbC1sYXlvdXRfX3RhYi1iYXIsXFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0Om5vdCguaXMtc21hbGwtc2NyZWVuKSAubWRsLWxheW91dF9fdGFiLWJhci1jb250YWluZXIge1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dF9fdGFiLWJhci1jb250YWluZXIge1xcbiAgaGVpZ2h0OiA2NHB4O1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXRfX3RhYi1iYXIge1xcbiAgcGFkZGluZzogMDtcXG4gIHBhZGRpbmctbGVmdDogMTZweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0X190YWItYmFyIC5tZGwtbGF5b3V0X190YWIge1xcbiAgaGVpZ2h0OiA2NHB4O1xcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dF9fdGFiLWJhciAubWRsLWxheW91dF9fdGFiLmlzLWFjdGl2ZTo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDRweDtcXG59XFxuLm1kbC1kZW1vIG1haW4gPiAubWRsLWxheW91dF9fdGFiLXBhbmVsIHtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIHBhZGRpbmctdG9wOiAyNHB4O1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1jYXJkIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1kbC1kZW1vIC5tZGwtY2FyZCA+ICoge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1jYXJkIC5tZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0IHtcXG4gIG1hcmdpbjogNDBweDtcXG4gIC13ZWJraXQtZmxleC1ncm93OiAxO1xcbiAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XFxufVxcbi5tZGwtZGVtby5tZGwtZGVtbyAubWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCBoNCB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtY2FyZF9fYWN0aW9ucyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiA0cHggNDBweDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1jYXJkX19hY3Rpb25zIGEge1xcbiAgY29sb3I6ICMwMEJDRDQ7XFxuICBtYXJnaW46IDA7XFxufVxcbi5tZGwtZGVtbyAubWRsLWNhcmRfX2FjdGlvbnMgYTpob3ZlcixcXG4ubWRsLWRlbW8gLm1kbC1jYXJkX19hY3Rpb25zIGE6YWN0aXZlIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5tZGwtZGVtbyAubWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCArIC5tZGwtY2FyZF9fYWN0aW9ucyB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kbC1kZW1vICNhZGQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDQwcHg7XFxuICB0b3A6IDM2cHg7XFxuICB6LWluZGV4OiA5OTk7XFxufVxcblxcbi5tZGwtZGVtbyAubWRsLWxheW91dF9fY29udGVudCBzZWN0aW9uOm5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbi5zZWN0aW9uLS1jZW50ZXIge1xcbiAgbWF4LXdpZHRoOiAxMjkwcHg7XFxufVxcbi5tZGwtZGVtbyAjZmVhdHVyZXMgc2VjdGlvbi5zZWN0aW9uLS1jZW50ZXIge1xcbiAgbWF4LXdpZHRoOiA2MjBweDtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24gPiBoZWFkZXJ7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24gPiAuc2VjdGlvbl9fcGxheS1idG4ge1xcbiAgbWluLWhlaWdodDogMjAwcHg7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uID4gaGVhZGVyID4gLm1hdGVyaWFsLWljb25zIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24gPiBidXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogOTk7XFxuICB0b3A6IDhweDtcXG4gIHJpZ2h0OiA4cHg7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uIC5zZWN0aW9uX19jaXJjbGUge1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDA7XFxuICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDA7XFxuICAgICAgICAgIGZsZXgtZ3JvdzogMDtcXG4gIC13ZWJraXQtZmxleC1zaHJpbms6IDE7XFxuICAgICAgLW1zLWZsZXgtbmVnYXRpdmU6IDE7XFxuICAgICAgICAgIGZsZXgtc2hyaW5rOiAxO1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiAuc2VjdGlvbl9fdGV4dCB7XFxuICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcXG4gICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcXG4gICAgICAgICAgZmxleC1ncm93OiAxO1xcbiAgLXdlYmtpdC1mbGV4LXNocmluazogMDtcXG4gICAgICAtbXMtZmxleC1uZWdhdGl2ZTogMDtcXG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XFxuICBwYWRkaW5nLXRvcDogOHB4O1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiAuc2VjdGlvbl9fdGV4dCBoNSB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24gLnNlY3Rpb25fX3RleHQgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uIC5zZWN0aW9uX19jaXJjbGUtY29udGFpbmVyID4gLnNlY3Rpb25fX2NpcmNsZS1jb250YWluZXJfX2NpcmNsZSB7XFxuICB3aWR0aDogNjRweDtcXG4gIGhlaWdodDogNjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XFxuICBtYXJnaW46IDhweCAwO1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbi5zZWN0aW9uLS1mb290ZXIgLnNlY3Rpb25fX2NpcmNsZS0tYmlnIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgbWFyZ2luOiA4cHggMzJweDtcXG59XFxuLm1kbC1kZW1vIC5pcy1zbWFsbC1zY3JlZW4gc2VjdGlvbi5zZWN0aW9uLS1mb290ZXIgLnNlY3Rpb25fX2NpcmNsZS0tYmlnIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIG1hcmdpbjogOHB4IDE2cHg7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uLnNlY3Rpb24tLWZvb3RlciB7XFxuICBwYWRkaW5nOiA2NHB4IDA7XFxuICBtYXJnaW46IDAgLThweCAtOHB4IC04cHg7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uLnNlY3Rpb24tLWNlbnRlciAuc2VjdGlvbl9fdGV4dDpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMyk7XFxufVxcbi5tZGwtZGVtbyAubWRsLWNhcmQgLm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHQgPiBoMzpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXRfX3RhYi1wYW5lbDpub3QoI292ZXJ2aWV3KSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLm1kbC1kZW1vICNmZWF0dXJlcyBzZWN0aW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDcycHg7XFxufVxcbi5tZGwtZGVtbyAjZmVhdHVyZXMgaDQsICNmZWF0dXJlcyBoNSB7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG4ubWRsLWRlbW8gLnRvYyB7XFxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNDMUVFRjQ7XFxuICBtYXJnaW46IDI0cHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tZGwtZGVtbyAudG9jIGg0IHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuLm1kbC1kZW1vIC50b2MgYSB7XFxuICBjb2xvcjogIzRERDBFMTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5tZGwtZGVtbyAubWRsLW1lbnVfX2NvbnRhaW5lciB7XFxuICB6LWluZGV4OiA5OTtcXG59XFxuXFxuLmRhc2hib2FyZCB7XFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxufVxcblxcbi5kYXNoYm9hcmQtcGxvdCB7XFxuICBoZWlnaHQ6IDgwJTtcXG59XFxuXFxuLmRhc2hib2FyZC1maWx0ZXIge1xcbiAgaGVpZ2h0OiAyMCU7XFxufVxcblxcbi5iYXItcGxvdCB7XFxuICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxufVxcblxcbi52aXRhbC1zcGFuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7Ozs7Ozs7RUFjRTs7QUFFRjtFQUNFLDhDQUE4QztFQUM5QyxTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTs7RUFFRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDhCQUE4QjtNQUMxQiwwQkFBMEI7VUFDdEIsc0JBQXNCO0FBQ2hDO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7TUFDaEIsb0JBQW9CO1VBQ2hCLFlBQVk7RUFDcEIsVUFBVTtFQUNWLGNBQWM7RUFDZCx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztFQUNkLFNBQVM7QUFDWDtBQUNBOztFQUVFLGNBQWM7RUFDZCw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLHlDQUF5QztBQUMzQztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDJCQUEyQjtNQUN2QixzQkFBc0I7VUFDbEIsbUJBQW1CO0VBQzNCLCtCQUErQjtNQUMzQixxQkFBcUI7VUFDakIsdUJBQXVCO0FBQ2pDO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtFQUNSLFVBQVU7QUFDWjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsMkJBQTJCO01BQ3ZCLHNCQUFzQjtVQUNsQixtQkFBbUI7RUFDM0IsbUNBQW1DO01BQy9CLG9CQUFvQjtVQUNoQiwyQkFBMkI7RUFDbkMsb0JBQW9CO01BQ2hCLG9CQUFvQjtVQUNoQixZQUFZO0VBQ3BCLHNCQUFzQjtNQUNsQixvQkFBb0I7VUFDaEIsY0FBYztBQUN4QjtBQUNBO0VBQ0Usb0JBQW9CO01BQ2hCLG9CQUFvQjtVQUNoQixZQUFZO0VBQ3BCLHNCQUFzQjtNQUNsQixvQkFBb0I7VUFDaEIsY0FBYztFQUN0QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1Qsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLHdDQUF3QztBQUMxQztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLFVBQVU7RUFDVixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsOEJBQThCO01BQzFCLDBCQUEwQjtVQUN0QixzQkFBc0I7QUFDaEM7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXFxuICpcXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXFxcIkxpY2Vuc2VcXFwiKTtcXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXFxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XFxuICpcXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxcbiAqXFxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFxcXCJBUyBJU1xcXCIgQkFTSVMsXFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXFxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxcbiAqL1xcblxcbmh0bWwsIGJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCAnSGVsdmV0aWNhJywgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dF9faGVhZGVyLXJvdyB7XFxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dC5pcy1zbWFsbC1zY3JlZW4gLm1kbC1sYXlvdXRfX2hlYWRlci1yb3cgaDMge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXRfX3RhYi1iYXItYnV0dG9uIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dC5pcy1zbWFsbC1zY3JlZW4gLm1kbC1sYXlvdXRfX3RhYi1iYXIgLm1kbC1idXR0b24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0Om5vdCguaXMtc21hbGwtc2NyZWVuKSAubWRsLWxheW91dF9fdGFiLWJhcixcXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXQ6bm90KC5pcy1zbWFsbC1zY3JlZW4pIC5tZGwtbGF5b3V0X190YWItYmFyLWNvbnRhaW5lciB7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0X190YWItYmFyLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDY0cHg7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dF9fdGFiLWJhciB7XFxuICBwYWRkaW5nOiAwO1xcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXRfX3RhYi1iYXIgLm1kbC1sYXlvdXRfX3RhYiB7XFxuICBoZWlnaHQ6IDY0cHg7XFxuICBsaW5lLWhlaWdodDogNjRweDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0X190YWItYmFyIC5tZGwtbGF5b3V0X190YWIuaXMtYWN0aXZlOjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogNHB4O1xcbn1cXG4ubWRsLWRlbW8gbWFpbiA+IC5tZGwtbGF5b3V0X190YWItcGFuZWwge1xcbiAgcGFkZGluZzogOHB4O1xcbiAgcGFkZGluZy10b3A6IDI0cHg7XFxufVxcbi5tZGwtZGVtbyAubWRsLWNhcmQge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1jYXJkID4gKiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5tZGwtZGVtbyAubWRsLWNhcmQgLm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHQge1xcbiAgbWFyZ2luOiA0MHB4O1xcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XFxuICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XFxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcXG59XFxuLm1kbC1kZW1vLm1kbC1kZW1vIC5tZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0IGg0IHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1jYXJkX19hY3Rpb25zIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDRweCA0MHB4O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcbi5tZGwtZGVtbyAubWRsLWNhcmRfX2FjdGlvbnMgYSB7XFxuICBjb2xvcjogIzAwQkNENDtcXG4gIG1hcmdpbjogMDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtY2FyZF9fYWN0aW9ucyBhOmhvdmVyLFxcbi5tZGwtZGVtbyAubWRsLWNhcmRfX2FjdGlvbnMgYTphY3RpdmUge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0ICsgLm1kbC1jYXJkX19hY3Rpb25zIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWRsLWRlbW8gI2FkZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNDBweDtcXG4gIHRvcDogMzZweDtcXG4gIHotaW5kZXg6IDk5OTtcXG59XFxuXFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0X19jb250ZW50IHNlY3Rpb246bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uLnNlY3Rpb24tLWNlbnRlciB7XFxuICBtYXgtd2lkdGg6IDEyOTBweDtcXG59XFxuLm1kbC1kZW1vICNmZWF0dXJlcyBzZWN0aW9uLnNlY3Rpb24tLWNlbnRlciB7XFxuICBtYXgtd2lkdGg6IDYyMHB4O1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiA+IGhlYWRlcntcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiA+IC5zZWN0aW9uX19wbGF5LWJ0biB7XFxuICBtaW4taGVpZ2h0OiAyMDBweDtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24gPiBoZWFkZXIgPiAubWF0ZXJpYWwtaWNvbnMge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiA+IGJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5OTtcXG4gIHRvcDogOHB4O1xcbiAgcmlnaHQ6IDhweDtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24gLnNlY3Rpb25fX2NpcmNsZSB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAtd2Via2l0LWZsZXgtZ3JvdzogMDtcXG4gICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMDtcXG4gICAgICAgICAgZmxleC1ncm93OiAwO1xcbiAgLXdlYmtpdC1mbGV4LXNocmluazogMTtcXG4gICAgICAtbXMtZmxleC1uZWdhdGl2ZTogMTtcXG4gICAgICAgICAgZmxleC1zaHJpbms6IDE7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uIC5zZWN0aW9uX190ZXh0IHtcXG4gIC13ZWJraXQtZmxleC1ncm93OiAxO1xcbiAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICAtd2Via2l0LWZsZXgtc2hyaW5rOiAwO1xcbiAgICAgIC1tcy1mbGV4LW5lZ2F0aXZlOiAwO1xcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcXG4gIHBhZGRpbmctdG9wOiA4cHg7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uIC5zZWN0aW9uX190ZXh0IGg1IHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiAuc2VjdGlvbl9fdGV4dCBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24gLnNlY3Rpb25fX2NpcmNsZS1jb250YWluZXIgPiAuc2VjdGlvbl9fY2lyY2xlLWNvbnRhaW5lcl9fY2lyY2xlIHtcXG4gIHdpZHRoOiA2NHB4O1xcbiAgaGVpZ2h0OiA2NHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcXG4gIG1hcmdpbjogOHB4IDA7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uLnNlY3Rpb24tLWZvb3RlciAuc2VjdGlvbl9fY2lyY2xlLS1iaWcge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBtYXJnaW46IDhweCAzMnB4O1xcbn1cXG4ubWRsLWRlbW8gLmlzLXNtYWxsLXNjcmVlbiBzZWN0aW9uLnNlY3Rpb24tLWZvb3RlciAuc2VjdGlvbl9fY2lyY2xlLS1iaWcge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgbWFyZ2luOiA4cHggMTZweDtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24uc2VjdGlvbi0tZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDY0cHggMDtcXG4gIG1hcmdpbjogMCAtOHB4IC04cHggLThweDtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24uc2VjdGlvbi0tY2VudGVyIC5zZWN0aW9uX190ZXh0Om5vdCg6bGFzdC1jaGlsZCkge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEzKTtcXG59XFxuLm1kbC1kZW1vIC5tZGwtY2FyZCAubWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCA+IGgzOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dF9fdGFiLXBhbmVsOm5vdCgjb3ZlcnZpZXcpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4ubWRsLWRlbW8gI2ZlYXR1cmVzIHNlY3Rpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogNzJweDtcXG59XFxuLm1kbC1kZW1vICNmZWF0dXJlcyBoNCwgI2ZlYXR1cmVzIGg1IHtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcbi5tZGwtZGVtbyAudG9jIHtcXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI0MxRUVGNDtcXG4gIG1hcmdpbjogMjRweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1kbC1kZW1vIC50b2MgaDQge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG4ubWRsLWRlbW8gLnRvYyBhIHtcXG4gIGNvbG9yOiAjNEREMEUxO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLm1kbC1kZW1vIC5tZGwtbWVudV9fY29udGFpbmVyIHtcXG4gIHotaW5kZXg6IDk5O1xcbn1cXG5cXG4uZGFzaGJvYXJkIHtcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG59XFxuXFxuLmRhc2hib2FyZC1wbG90IHtcXG4gIGhlaWdodDogODAlO1xcbn1cXG5cXG4uZGFzaGJvYXJkLWZpbHRlciB7XFxuICBoZWlnaHQ6IDIwJTtcXG59XFxuXFxuLmJhci1wbG90IHtcXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG59XFxuXFxuLnZpdGFsLXNwYW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBfLCB7IGxhc3QsIHNhbXBsZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBGaWxlVHlwZSwgTGl2ZXBsb3REYXRhVHlwZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgY29sb3JNYXBKZXQgPSBbXG4gICcjMDAwMDhGJyxcbiAgJyMwMDAwOUYnLFxuICAnIzAwMDBBRicsXG4gICcjMDAwMEJGJyxcbiAgJyMwMDAwQ0YnLFxuICAnIzAwMDBERicsXG4gICcjMDAwMEVGJyxcbiAgJyMwMDAwRkYnLFxuICAnIzAwMTBGRicsXG4gICcjMDAyMEZGJyxcbiAgJyMwMDMwRkYnLFxuICAnIzAwNDBGRicsXG4gICcjMDA1MEZGJyxcbiAgJyMwMDYwRkYnLFxuICAnIzAwNzBGRicsXG4gICcjMDA4MEZGJyxcbiAgJyMwMDhGRkYnLFxuICAnIzAwOUZGRicsXG4gICcjMDBBRkZGJyxcbiAgJyMwMEJGRkYnLFxuICAnIzAwQ0ZGRicsXG4gICcjMDBERkZGJyxcbiAgJyMwMEVGRkYnLFxuICAnIzAwRkZGRicsXG4gICcjMTBGRkVGJyxcbiAgJyMyMEZGREYnLFxuICAnIzMwRkZDRicsXG4gICcjNDBGRkJGJyxcbiAgJyM1MEZGQUYnLFxuICAnIzYwRkY5RicsXG4gICcjNzBGRjhGJyxcbiAgJyM4MEZGODAnLFxuICAnIzhGRkY3MCcsXG4gICcjOUZGRjYwJyxcbiAgJyNBRkZGNTAnLFxuICAnI0JGRkY0MCcsXG4gICcjQ0ZGRjMwJyxcbiAgJyNERkZGMjAnLFxuICAnI0VGRkYxMCcsXG4gICcjRkZGRjAwJyxcbiAgJyNGRkVGMDAnLFxuICAnI0ZGREYwMCcsXG4gICcjRkZDRjAwJyxcbiAgJyNGRkJGMDAnLFxuICAnI0ZGQUYwMCcsXG4gICcjRkY5RjAwJyxcbiAgJyNGRjhGMDAnLFxuICAnI0ZGODAwMCcsXG4gICcjRkY3MDAwJyxcbiAgJyNGRjYwMDAnLFxuICAnI0ZGNTAwMCcsXG4gICcjRkY0MDAwJyxcbiAgJyNGRjMwMDAnLFxuICAnI0ZGMjAwMCcsXG4gICcjRkYxMDAwJyxcbiAgJyNGRjAwMDAnLFxuICAnI0VGMDAwMCcsXG4gICcjREYwMDAwJyxcbiAgJyNDRjAwMDAnLFxuICAnI0JGMDAwMCcsXG4gICcjQUYwMDAwJyxcbiAgJyM5RjAwMDAnLFxuICAnIzhGMDAwMCcsXG4gICcjODAwMDAwJyxcbl07XG5cbmNvbnN0IHJ0Q29sb3JNYXAgPSBbXG4gICcjZmZlMTAwJyxcbiAgJyNmZmMzMDAnLFxuICAnI2ZmYTUwMCcsXG4gICcjZmY2ZTAwJyxcbiAgJyNmZjM3MDAnLFxuICAnI2ZmMDAwMCcsXG4gICcjZDUwMDJiJyxcbiAgJyNhYTAwNTUnLFxuICAnIzgwMDA4MCcsXG4gICcjNTUwMGFhJyxcbiAgJyMyYjAwZDUnLFxuICAnIzAwMDBmZicsXG4gICcjMDAyYmFhJyxcbiAgJyMwMDU1NTUnLFxuICAnIzAwODAwMCcsXG5dO1xuXG5jb25zdCB1dGlscyA9IG5ldyBVdGlscygpO1xuXG5leHBvcnQgY2xhc3MgQ2hhcnRzIHtcbiAgcHVibGljIGVsZW1PYmplY3Q6IGFueTtcbiAgcHVibGljIHBlcmZEYXRhVGFibGU6IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZTtcbiAgcHVibGljIGN1bXVsRGF0YVRhYmxlOiBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGU7XG4gIHB1YmxpYyB4eVBvc0RhdGFUYWJsZTogZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlO1xuICBwdWJsaWMgcnhuVGltZURhdGFUYWJsZTogZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlO1xuICBwdWJsaWMgcmV3YXJkRGF0YVRhYmxlOiBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGU7XG4gIHB1YmxpYyBjaG9pY2VEYXRhVGFibGU6IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZTtcbiAgcHVibGljIG9ialBlcmZEYXRhVGFibGU6IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZTtcbiAgcHVibGljIHJlYWx0aW1lRGF0YVRhYmxlOiBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGU7XG4gIHB1YmxpYyBoZWFsdGhEYXRhVGFibGU6IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZTtcblxuICBwdWJsaWMgcGVyZkRhc2hib2FyZDogZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGFzaGJvYXJkO1xuICBwdWJsaWMgdHJpYWxEYXNoYm9hcmQ6IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhc2hib2FyZDtcbiAgcHVibGljIGhlYWx0aERhc2hib2FyZDogZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGFzaGJvYXJkO1xuXG4gIHB1YmxpYyBwZXJmUGxvdDogZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ2hhcnRXcmFwcGVyO1xuICBwdWJsaWMgcGVyZlBsb3RDb25maWc6IGdvb2dsZS52aXN1YWxpemF0aW9uLkNoYXJ0U3BlY3M7XG4gIHB1YmxpYyBwZXJmUGxvdE9wdGlvbnM6IGdvb2dsZS52aXN1YWxpemF0aW9uLkxpbmVDaGFydE9wdGlvbnM7XG4gIHB1YmxpYyBwZXJmRmlsdGVyOiBnb29nbGUudmlzdWFsaXphdGlvbi5Db250cm9sV3JhcHBlcjtcbiAgcHVibGljIHBlcmZGaWx0ZXJDb25maWc6IGdvb2dsZS52aXN1YWxpemF0aW9uLkNvbnRyb2xXcmFwcGVyT3B0aW9ucztcbiAgcHVibGljIHBlcmZGaWx0ZXJPcHRpb25zOiBPYmplY3Q7XG5cbiAgcHVibGljIHRyaWFsUGxvdDogZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ2hhcnRXcmFwcGVyO1xuICBwdWJsaWMgdHJpYWxQbG90Q29uZmlnOiBnb29nbGUudmlzdWFsaXphdGlvbi5DaGFydFNwZWNzO1xuICBwdWJsaWMgdHJpYWxQbG90T3B0aW9uczogZ29vZ2xlLnZpc3VhbGl6YXRpb24uQXJlYUNoYXJ0T3B0aW9ucztcbiAgcHVibGljIHRyaWFsRmlsdGVyOiBnb29nbGUudmlzdWFsaXphdGlvbi5Db250cm9sV3JhcHBlcjtcbiAgcHVibGljIHRyaWFsRmlsdGVyQ29uZmlnOiBnb29nbGUudmlzdWFsaXphdGlvbi5Db250cm9sV3JhcHBlck9wdGlvbnM7XG4gIHB1YmxpYyB0cmlhbEZpbHRlck9wdGlvbnM6IE9iamVjdDtcblxuICBwdWJsaWMgaGVhbHRoUGxvdDogZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ2hhcnRXcmFwcGVyO1xuICBwdWJsaWMgaGVhbHRoUGxvdENvbmZpZzogZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ2hhcnRTcGVjcztcbiAgcHVibGljIGhlYWx0aFBsb3RPcHRpb25zOiBnb29nbGUudmlzdWFsaXphdGlvbi5TY2F0dGVyQ2hhcnRPcHRpb25zO1xuICBwdWJsaWMgaGVhbHRoRmlsdGVyOiBnb29nbGUudmlzdWFsaXphdGlvbi5Db250cm9sV3JhcHBlcjtcbiAgcHVibGljIGhlYWx0aEZpbHRlckNvbmZpZzogZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ29udHJvbFdyYXBwZXJPcHRpb25zO1xuICBwdWJsaWMgaGVhbHRoRmlsdGVyT3B0aW9uczogT2JqZWN0O1xuXG4gIHB1YmxpYyBzY3JlZW5QbG90OiBnb29nbGUudmlzdWFsaXphdGlvbi5Db21ib0NoYXJ0O1xuICBwdWJsaWMgc2NyZWVuUGxvdE9wdGlvbnM6IGdvb2dsZS52aXN1YWxpemF0aW9uLkNvbWJvQ2hhcnRPcHRpb25zO1xuXG4gIHB1YmxpYyByZWFsdGltZVBsb3Q6IGdvb2dsZS52aXN1YWxpemF0aW9uLkNoYXJ0V3JhcHBlcjtcbiAgcHVibGljIHJlYWx0aW1lUGxvdENvbmZpZzogZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ2hhcnRTcGVjcztcbiAgcHVibGljIHJlYWx0aW1lUGxvdE9wdGlvbnM6IGdvb2dsZS52aXN1YWxpemF0aW9uLkNvbWJvQ2hhcnRPcHRpb25zO1xuICBwdWJsaWMgcmVhbHRpbWVQbG90QWN0aXZlOiBib29sZWFuO1xuICBwdWJsaWMgcmVhbHRpbWVSb3dEYXRhQWRkZWQ6IGJvb2xlYW47XG4gIHB1YmxpYyBydERhdGE6IGFueTtcbiAgcHVibGljIHByZXZDb29yZDogYW55O1xuICBwdWJsaWMgcHJldkNvbG9ySWR4OiBudW1iZXI7XG5cbiAgcHVibGljIHJ4blBsb3Q6IGdvb2dsZS52aXN1YWxpemF0aW9uLkhpc3RvZ3JhbTtcbiAgcHVibGljIHJ4blBsb3RPcHRpb25zOiBnb29nbGUudmlzdWFsaXphdGlvbi5IaXN0b2dyYW1PcHRpb25zO1xuXG4gIHB1YmxpYyByZXdhcmRQbG90OiBnb29nbGUudmlzdWFsaXphdGlvbi5Db2x1bW5DaGFydDtcbiAgcHVibGljIHJld2FyZFBsb3RPcHRpb25zOiBnb29nbGUudmlzdWFsaXphdGlvbi5Db2x1bW5DaGFydE9wdGlvbnM7XG5cbiAgcHVibGljIGNob2ljZVBsb3Q6IGdvb2dsZS52aXN1YWxpemF0aW9uLkNvbHVtbkNoYXJ0O1xuICBwdWJsaWMgY2hvaWNlUGxvdE9wdGlvbnM6IGdvb2dsZS52aXN1YWxpemF0aW9uLkNvbHVtbkNoYXJ0T3B0aW9ucztcblxuICBwdWJsaWMgb2JqUGVyZlBsb3Q6IGdvb2dsZS52aXN1YWxpemF0aW9uLkNvbHVtbkNoYXJ0O1xuICBwdWJsaWMgb2JqUGVyZlBsb3RPcHRpb25zOiBnb29nbGUudmlzdWFsaXphdGlvbi5Db2x1bW5DaGFydE9wdGlvbnM7XG5cbiAgcHJpdmF0ZSB2aXRhbHM6IGFueTtcbiAgcHJpdmF0ZSBuVHJpYWxzOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoZWxlbU9iajogYW55KSB7XG4gICAgdGhpcy5lbGVtT2JqZWN0ID0gZWxlbU9iajtcbiAgICB0aGlzLnJlYWx0aW1lUGxvdEFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuc2V0dXBDaGFydHMoKTtcblxuICAgIHRoaXMudml0YWxzID0ge1xuICAgICAgc3ViamVjdDogbnVsbCxcbiAgICAgIHBjdENvcnJlY3Q6IDAsXG4gICAgICB0cmlhbHM6IDAsXG4gICAgICB0aW1lOiAwLFxuICAgICAgYmF0dGVyeUxlZnQ6IDAsXG4gICAgICBiYXR0ZXJ5VXNlZDogMCxcbiAgICAgIHJld2FyZEVzdGltYXRlOiAwLFxuICAgICAgYXV0b21hdG9yOiAnJyxcbiAgICAgIGF1dG9tYXRvclN0YWdlOiAwLFxuICAgICAgYXV0b21hdG9yU3RhZ2VOYW1lOiAnJyxcbiAgICAgIG51bVJld2FyZDogMCxcbiAgICAgIHJmaWRUYWc6ICcnLFxuICAgICAgcmZpZFRpbWU6IDAsXG4gICAgICB0YWdDb3VudDoge30sXG4gICAgfTtcblxuICAgIHRoaXMucHJldkNvb3JkID0geyB4OiAwLCB5OiAwIH07XG4gICAgdGhpcy5wcmV2Q29sb3JJZHggPSAwO1xuICB9XG5cbiAgcHVibGljIHNldHVwRGF0YVRhYmxlcygpIHtcbiAgICB0aGlzLnBlcmZEYXRhVGFibGUgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlKCk7XG4gICAgdGhpcy5oZWFsdGhEYXRhVGFibGUgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlKCk7XG4gICAgdGhpcy5jdW11bERhdGFUYWJsZSA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUoKTtcbiAgICB0aGlzLnh5UG9zRGF0YVRhYmxlID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSgpO1xuICAgIHRoaXMucnhuVGltZURhdGFUYWJsZSA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUoKTtcbiAgICB0aGlzLnJld2FyZERhdGFUYWJsZSA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUoKTtcbiAgICB0aGlzLmNob2ljZURhdGFUYWJsZSA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUoKTtcbiAgICB0aGlzLm9ialBlcmZEYXRhVGFibGUgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlKCk7XG4gICAgdGhpcy5yZWFsdGltZURhdGFUYWJsZSA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUoKTtcbiAgICB0aGlzLnJ0RGF0YSA9IHt9O1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHNldHVwQ2hhcnRzKCkge1xuICAgIGF3YWl0IGdvb2dsZS5jaGFydHMubG9hZCgnNTAnLCB7IHBhY2thZ2VzOiBbJ2NvcmVjaGFydCcsICdjb250cm9scyddIH0pO1xuICAgIHRoaXMuc2V0dXBDaGFydE9wdGlvbnMoKTtcbiAgICB0aGlzLnNldHVwRGF0YVRhYmxlcygpO1xuXG4gICAgdGhpcy5wZXJmRGFzaGJvYXJkID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhc2hib2FyZChcbiAgICAgIHRoaXMuZWxlbU9iamVjdC5wZXJmRGl2XG4gICAgKTtcbiAgICB0aGlzLnBlcmZQbG90ID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkNoYXJ0V3JhcHBlcih0aGlzLnBlcmZQbG90Q29uZmlnKTtcbiAgICB0aGlzLnBlcmZGaWx0ZXIgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ29udHJvbFdyYXBwZXIoXG4gICAgICB0aGlzLnBlcmZGaWx0ZXJDb25maWdcbiAgICApO1xuXG4gICAgdGhpcy50cmlhbERhc2hib2FyZCA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5EYXNoYm9hcmQoXG4gICAgICB0aGlzLmVsZW1PYmplY3QudHJpYWxEaXZcbiAgICApO1xuICAgIHRoaXMudHJpYWxQbG90ID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkNoYXJ0V3JhcHBlcihcbiAgICAgIHRoaXMudHJpYWxQbG90Q29uZmlnXG4gICAgKTtcbiAgICB0aGlzLnRyaWFsRmlsdGVyID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkNvbnRyb2xXcmFwcGVyKFxuICAgICAgdGhpcy50cmlhbEZpbHRlckNvbmZpZ1xuICAgICk7XG5cbiAgICB0aGlzLmhlYWx0aERhc2hib2FyZCA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5EYXNoYm9hcmQoXG4gICAgICB0aGlzLmVsZW1PYmplY3QuaGVhbHRoRGl2XG4gICAgKTtcbiAgICB0aGlzLmhlYWx0aFBsb3QgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ2hhcnRXcmFwcGVyKFxuICAgICAgdGhpcy5oZWFsdGhQbG90Q29uZmlnXG4gICAgKTtcbiAgICB0aGlzLmhlYWx0aEZpbHRlciA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5Db250cm9sV3JhcHBlcihcbiAgICAgIHRoaXMuaGVhbHRoRmlsdGVyQ29uZmlnXG4gICAgKTtcblxuICAgIHRoaXMucGVyZkRhc2hib2FyZC5iaW5kKHRoaXMucGVyZkZpbHRlciwgdGhpcy5wZXJmUGxvdCk7XG4gICAgdGhpcy50cmlhbERhc2hib2FyZC5iaW5kKHRoaXMudHJpYWxGaWx0ZXIsIHRoaXMudHJpYWxQbG90KTtcbiAgICB0aGlzLmhlYWx0aERhc2hib2FyZC5iaW5kKHRoaXMuaGVhbHRoRmlsdGVyLCB0aGlzLmhlYWx0aFBsb3QpO1xuXG4gICAgdGhpcy5zY3JlZW5QbG90ID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkNvbWJvQ2hhcnQoXG4gICAgICB0aGlzLmVsZW1PYmplY3Quc2NyZWVuUGxvdFxuICAgICk7XG4gICAgLy8gdGhpcy5yZWFsdGltZVBsb3QgPSAoXG4gICAgLy8gICBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ2hhcnRXcmFwcGVyKHRoaXMucmVhbHRpbWVQbG90Q29uZmlnKVxuICAgIC8vICk7XG4gICAgdGhpcy5yeG5QbG90ID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkhpc3RvZ3JhbSh0aGlzLmVsZW1PYmplY3QucnhuUGxvdCk7XG4gICAgdGhpcy5yZXdhcmRQbG90ID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkNvbHVtbkNoYXJ0KFxuICAgICAgdGhpcy5lbGVtT2JqZWN0LnJld2FyZFBsb3RcbiAgICApO1xuICAgIHRoaXMuY2hvaWNlUGxvdCA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5Db2x1bW5DaGFydChcbiAgICAgIHRoaXMuZWxlbU9iamVjdC5jaG9pY2VQbG90XG4gICAgKTtcbiAgICB0aGlzLm9ialBlcmZQbG90ID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkNvbHVtbkNoYXJ0KFxuICAgICAgdGhpcy5lbGVtT2JqZWN0Lm9ialBlcmZQbG90XG4gICAgKTtcbiAgfS8vRlVOQ1RJT04gc2V0dXBDaGFydHNcblxuICBwdWJsaWMgc2V0dXBDaGFydE9wdGlvbnMoKSB7XG4gICAgdGhpcy5wZXJmUGxvdE9wdGlvbnMgPSB7XG4gICAgICB3aWR0aDogdGhpcy5lbGVtT2JqZWN0LnBlcmZQbG90LmNsaWVudFdpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmVsZW1PYmplY3QucGVyZlBsb3QuY2xpZW50SGVpZ2h0LFxuICAgICAgaEF4aXM6IHsgdGl0bGU6ICdUcmlhbCMnIH0sXG4gICAgICB2QXhpczogeyB0aXRsZTogJ0NvcnJlY3QgKCUpJywgdmlld1dpbmRvdzogeyBtaW46IDAsIG1heDogMS4wIH0gfSxcbiAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICBlYXNpbmc6ICdsaW5lYXInLFxuICAgICAgICBzdGFydHVwOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHNlcmllczoge1xuICAgICAgICAwOiB7IGNvbG9yOiAnIzQzNDU5ZCcgfSxcbiAgICAgICAgMTogeyBjb2xvcjogJyNlMjQzMWUnIH0sXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0aGlzLnBlcmZQbG90Q29uZmlnID0ge1xuICAgICAgY2hhcnRUeXBlOiAnTGluZUNoYXJ0JyxcbiAgICAgIGNvbnRhaW5lcklkOiAncGVyZm9ybWFuY2UtcGxvdCcsXG4gICAgICBvcHRpb25zOiB0aGlzLnBlcmZQbG90T3B0aW9ucyxcbiAgICB9O1xuICAgIHRoaXMucGVyZkZpbHRlck9wdGlvbnMgPSB7XG4gICAgICBmaWx0ZXJDb2x1bW5MYWJlbDogJ2N1cnJlbnRUcmlhbCcsXG4gICAgICB1aToge1xuICAgICAgICBjaGFydFR5cGU6ICdMaW5lQ2hhcnQnLFxuICAgICAgICBjaGFydE9wdGlvbnM6IHtcbiAgICAgICAgICBzbW9vdGg6IDIwLFxuICAgICAgICAgIGhBeGlzOiB7IGJhc2VsaW5lQ29sb3I6ICdub25lJywgdGl0bGU6ICdUcmlhbCMnIH0sXG4gICAgICAgICAgdkF4aXM6IHsgdGl0bGU6ICclJywgdmlld1dpbmRvdzogeyBtaW46IDAsIG1heDogMS4wIH0gfSxcbiAgICAgICAgICB3aWR0aDogdGhpcy5lbGVtT2JqZWN0LnBlcmZGaWx0ZXIuY2xpZW50V2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLmVsZW1PYmplY3QucGVyZkZpbHRlci5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgYW5pbWF0aW9uOiB7IGR1cmF0aW9uOiAxMDAwLCBlYXNpbmc6ICdvdXQnIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGNoYXJ0Vmlldzoge1xuICAgICAgICAgIGNvbHVtbnM6IFswLCAxXSxcbiAgICAgICAgfSxcbiAgICAgICAgbWluUmFuZ2VTaXplOiAyLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHRoaXMucGVyZkZpbHRlckNvbmZpZyA9IHtcbiAgICAgIGNvbnRyb2xUeXBlOiAnQ2hhcnRSYW5nZUZpbHRlcicsXG4gICAgICBjb250YWluZXJJZDogJ3BlcmZvcm1hbmNlLWZpbHRlcicsXG4gICAgICBzdGF0ZTogeyByYW5nZTogeyBzdGFydDogMCwgZW5kOiAxMDAgfSB9LFxuICAgICAgb3B0aW9uczogdGhpcy5wZXJmRmlsdGVyT3B0aW9ucyxcbiAgICB9O1xuICAgIHRoaXMudHJpYWxQbG90T3B0aW9ucyA9IHtcbiAgICAgIHdpZHRoOiB0aGlzLmVsZW1PYmplY3QudHJpYWxQbG90LmNsaWVudFdpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmVsZW1PYmplY3QudHJpYWxQbG90LmNsaWVudEhlaWdodCxcbiAgICAgIGFyZWFPcGFjaXR5OiAwLjUsXG4gICAgICBoQXhpczogeyB0aXRsZTogJ1RpbWUgKGgpICcgfSxcbiAgICAgIHZBeGVzOiB7XG4gICAgICAgIDA6IHsgdGl0bGU6ICdUcmlhbCBjb3VudCcgfSxcbiAgICAgICAgMTogeyB0aXRsZTogJ1JGSUQnIH0sXG4gICAgICB9LFxuICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgIGVhc2luZzogJ2xpbmVhcicsXG4gICAgICB9LFxuICAgICAgc2VyaWVzOiB7XG4gICAgICAgIDA6IHsgdGFyZ2V0QXhpc0luZGV4OiAwIH0sXG4gICAgICAgIDE6IHsgdGFyZ2V0QXhpc0luZGV4OiAwIH0sXG4gICAgICAgIDI6IHsgdGFyZ2V0QXhpc0luZGV4OiAxIH0sXG4gICAgICB9LFxuICAgIH07XG4gICAgdGhpcy50cmlhbFBsb3RDb25maWcgPSB7XG4gICAgICBjaGFydFR5cGU6ICdBcmVhQ2hhcnQnLFxuICAgICAgY29udGFpbmVySWQ6ICd0cmlhbC1wbG90JyxcbiAgICAgIG9wdGlvbnM6IHRoaXMudHJpYWxQbG90T3B0aW9ucyxcbiAgICB9O1xuICAgIHRoaXMudHJpYWxGaWx0ZXJPcHRpb25zID0ge1xuICAgICAgZmlsdGVyQ29sdW1uTGFiZWw6ICd0aW1lJyxcbiAgICAgIHVpOiB7XG4gICAgICAgIGNoYXJ0VHlwZTogJ0xpbmVDaGFydCcsXG4gICAgICAgIGNoYXJ0T3B0aW9uczoge1xuICAgICAgICAgIGhBeGlzOiB7IGJhc2VsaW5lQ29sb3I6ICdub25lJywgdGl0bGU6ICdUaW1lJyB9LFxuICAgICAgICAgIHZBeGlzOiB7IHRpdGxlOiAnIycgfSxcbiAgICAgICAgICB3aWR0aDogdGhpcy5lbGVtT2JqZWN0LnRyaWFsRmlsdGVyLmNsaWVudFdpZHRoLFxuICAgICAgICAgIGhlaWdodDogdGhpcy5lbGVtT2JqZWN0LnRyaWFsRmlsdGVyLmNsaWVudEhlaWdodCxcbiAgICAgICAgICBhbmltYXRpb246IHsgZHVyYXRpb246IDEwMDAsIGVhc2luZzogJ291dCcgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBjaGFydFZpZXc6IHtcbiAgICAgICAgY29sdW1uczogWzAsIDFdLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHRoaXMudHJpYWxGaWx0ZXJDb25maWcgPSB7XG4gICAgICBjb250cm9sVHlwZTogJ0NoYXJ0UmFuZ2VGaWx0ZXInLFxuICAgICAgY29udGFpbmVySWQ6ICd0cmlhbC1maWx0ZXInLFxuICAgICAgc3RhdGU6IHsgcmFuZ2U6IHsgc3RhcnQ6IDAsIGVuZDogMTAwIH0gfSxcbiAgICAgIG9wdGlvbnM6IHRoaXMudHJpYWxGaWx0ZXJPcHRpb25zLFxuICAgIH07XG5cbiAgICB0aGlzLmhlYWx0aFBsb3RPcHRpb25zID0ge1xuICAgICAgd2lkdGg6IHRoaXMuZWxlbU9iamVjdC5oZWFsdGhQbG90LmNsaWVudFdpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmVsZW1PYmplY3QuaGVhbHRoUGxvdC5jbGllbnRIZWlnaHQsXG4gICAgICBoQXhpczogeyB0aXRsZTogJ1RyaWFsIycgfSxcbiAgICAgIHZBeGlzOiB7IHRpdGxlOiAnVGltZSAobXMpJyB9LFxuICAgICAgLy8gYW5pbWF0aW9uOiB7XG4gICAgICAvLyAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAvLyAgIGVhc2luZzogJ2xpbmVhcicsXG4gICAgICAvLyAgIHN0YXJ0dXA6IHRydWVcbiAgICAgIC8vIH1cbiAgICB9O1xuXG4gICAgdGhpcy5oZWFsdGhQbG90Q29uZmlnID0ge1xuICAgICAgY2hhcnRUeXBlOiAnU2NhdHRlckNoYXJ0JyxcbiAgICAgIGNvbnRhaW5lcklkOiAnaGVhbHRoLXBsb3QnLFxuICAgICAgb3B0aW9uczogdGhpcy5oZWFsdGhQbG90T3B0aW9ucyxcbiAgICB9O1xuICAgIHRoaXMuaGVhbHRoRmlsdGVyT3B0aW9ucyA9IHtcbiAgICAgIGZpbHRlckNvbHVtbkxhYmVsOiAndHJpYWwnLFxuICAgICAgdWk6IHtcbiAgICAgICAgY2hhcnRUeXBlOiAnU2NhdHRlckNoYXJ0JyxcbiAgICAgICAgY2hhcnRPcHRpb25zOiB7XG4gICAgICAgICAgc21vb3RoOiAyMCxcbiAgICAgICAgICBoQXhpczogeyBiYXNlbGluZUNvbG9yOiAnbm9uZScsIHRpdGxlOiAnVHJpYWwjJyB9LFxuICAgICAgICAgIHZBeGlzOiB7IHRpdGxlOiAnbXMnIH0sXG4gICAgICAgICAgd2lkdGg6IHRoaXMuZWxlbU9iamVjdC5oZWFsdGhGaWx0ZXIuY2xpZW50V2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLmVsZW1PYmplY3QuaGVhbHRoRmlsdGVyLmNsaWVudEhlaWdodCxcbiAgICAgICAgICAvLyBhbmltYXRpb246IHsgZHVyYXRpb246IDEwMDAsIGVhc2luZzogJ2xpbmVhcicgfVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICAgIHRoaXMuaGVhbHRoRmlsdGVyQ29uZmlnID0ge1xuICAgICAgY29udHJvbFR5cGU6ICdDaGFydFJhbmdlRmlsdGVyJyxcbiAgICAgIGNvbnRhaW5lcklkOiAnaGVhbHRoLWZpbHRlcicsXG4gICAgICBzdGF0ZTogeyByYW5nZTogeyBzdGFydDogMCwgZW5kOiAxMDAgfSB9LFxuICAgICAgb3B0aW9uczogdGhpcy5oZWFsdGhGaWx0ZXJPcHRpb25zLFxuICAgIH07XG5cbiAgICAvLyB0aGlzLmhlYWx0aFBsb3RPcHRpb25zID0ge1xuICAgIC8vICAgd2lkdGg6IHRoaXMuZWxlbU9iamVjdC5oZWFsdGhQbG90LmNsaWVudFdpZHRoLFxuICAgIC8vICAgaGVpZ2h0OiB0aGlzLmVsZW1PYmplY3QuaGVhbHRoUGxvdC5jbGllbnRIZWlnaHQsXG4gICAgLy8gICBoQXhpczogeyB0aXRsZTogJ1RyaWFsICMnIH0sXG4gICAgLy8gICB2QXhpczogeyB0aXRsZTogJ1RpbWUgKG1zKScgfSxcbiAgICAvLyAgIGFuaW1hdGlvbjoge1xuICAgIC8vICAgICBkdXJhdGlvbjogNTAwLFxuICAgIC8vICAgICBlYXNpbmc6ICdsaW5lYXInLFxuICAgIC8vICAgICBzdGFydHVwOiB0cnVlXG4gICAgLy8gICB9XG4gICAgLy8gfTtcbiAgICAvLyB0aGlzLmhlYWx0aFBsb3RDb25maWcgPSB7XG4gICAgLy8gICBjaGFydFR5cGU6ICdTY2F0dGVyQ2hhcnQnLFxuICAgIC8vICAgY29udGFpbmVySWQ6ICdoZWFsdGgtcGxvdCcsXG4gICAgLy8gICBvcHRpb25zOiB0aGlzLmhlYWx0aFBsb3RPcHRpb25zXG4gICAgLy8gfTtcbiAgICAvLyB0aGlzLmhlYWx0aEZpbHRlck9wdGlvbnMgPSB7XG4gICAgLy8gICBmaWx0ZXJDb2x1bW5MYWJlbDogJ3RyaWFsJyxcbiAgICAvLyAgIHVpOiB7XG4gICAgLy8gICAgIGNoYXJ0VHlwZTogJ1NjYXR0ZXJDaGFydCcsXG4gICAgLy8gICAgIGNoYXJ0T3B0aW9uczoge1xuICAgIC8vICAgICAgIGhBeGlzOiB7IGJhc2VsaW5lQ29sb3I6ICdub25lJywgdGl0bGU6ICdUcmlhbCAjJyB9LFxuICAgIC8vICAgICAgIHZBeGlzOiB7IHRpdGxlOiAnbXMnIH0sXG4gICAgLy8gICAgICAgd2lkdGg6IHRoaXMuZWxlbU9iamVjdC5oZWFsdGhGaWx0ZXIuY2xpZW50V2lkdGgsXG4gICAgLy8gICAgICAgaGVpZ2h0OiB0aGlzLmVsZW1PYmplY3QuaGVhbHRoRmlsdGVyLmNsaWVudEhlaWdodCxcbiAgICAvLyAgICAgICBhbmltYXRpb246IHsgZHVyYXRpb246IDEwMDAsIGVhc2luZzogJ291dCcgfVxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICBtaW5SYW5nZVNpemU6IDJcbiAgICAvLyAgIH1cbiAgICAvLyB9O1xuICAgIC8vIHRoaXMuaGVhbHRoRmlsdGVyQ29uZmlnID0ge1xuICAgIC8vICAgY29udHJvbFR5cGU6ICdDaGFydFJhbmdlRmlsdGVyJyxcbiAgICAvLyAgIGNvbnRhaW5lcklkOiAnaGVhbHRoLWZpbHRlcicsXG4gICAgLy8gICBzdGF0ZTogeyByYW5nZTogeyBzdGFydDogMCwgZW5kOiAxMDAgfSB9LFxuICAgIC8vICAgb3B0aW9uczogdGhpcy5oZWFsdGhGaWx0ZXJPcHRpb25zXG4gICAgLy8gfTtcblxuICAgIHRoaXMuc2NyZWVuUGxvdE9wdGlvbnMgPSB7XG4gICAgICBzZXJpZXNUeXBlOiAnc2NhdHRlcicsXG4gICAgICBwb2ludFNpemU6IDEsXG4gICAgfTtcbiAgICB0aGlzLnJ4blBsb3RPcHRpb25zID0ge1xuICAgICAgd2lkdGg6IHRoaXMuZWxlbU9iamVjdC5yeG5QbG90LmNsaWVudFdpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmVsZW1PYmplY3QucnhuUGxvdC5jbGllbnRIZWlnaHQsXG4gICAgICB0aXRsZTogJ1JlYWN0aW9uIFRpbWUgKG1zKScsXG4gICAgICBhbmltYXRpb246IHtcbiAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgZWFzaW5nOiAnbGluZWFyJyxcbiAgICAgICAgc3RhcnR1cDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBsZWdlbmQ6IHsgcG9zaXRpb246ICdub25lJyB9LFxuICAgIH07XG4gICAgdGhpcy5yZXdhcmRQbG90T3B0aW9ucyA9IHtcbiAgICAgIHdpZHRoOiB0aGlzLmVsZW1PYmplY3QucmV3YXJkUGxvdC5jbGllbnRXaWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5lbGVtT2JqZWN0LnJld2FyZFBsb3QuY2xpZW50SGVpZ2h0LFxuICAgICAgdGl0bGU6ICdBbW91bnQgb2YgUmV3YXJkJyxcbiAgICAgIGhBeGlzOiB7IHRpdGxlOiAncmV3YXJkIGFtb3VudCcgfSxcbiAgICAgIHZBeGlzOiB7IHRpdGxlOiAnY291bnRzJywgbWluVmFsdWU6IDAsIG1heFZhbHVlOiAxIH0sXG4gICAgICBsZWdlbmQ6IHsgcG9zaXRpb246ICdub25lJyB9LFxuICAgIH07XG4gICAgdGhpcy5jaG9pY2VQbG90T3B0aW9ucyA9IHtcbiAgICAgIHdpZHRoOiB0aGlzLmVsZW1PYmplY3QuY2hvaWNlUGxvdC5jbGllbnRXaWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5lbGVtT2JqZWN0LmNob2ljZVBsb3QuY2xpZW50SGVpZ2h0LFxuICAgICAgaEF4aXM6IHsgdGl0bGU6ICdDaG9pY2UnIH0sXG4gICAgICB2QXhpczogeyB0aXRsZTogJ2NvdW50cycsIG1pblZhbHVlOiAwLCBtYXhWYWx1ZTogMSB9LFxuICAgICAgbGVnZW5kOiB7IHBvc2l0aW9uOiAnbm9uZScgfSxcbiAgICB9O1xuICAgIHRoaXMub2JqUGVyZlBsb3RPcHRpb25zID0ge1xuICAgICAgd2lkdGg6IHRoaXMuZWxlbU9iamVjdC5vYmpQZXJmUGxvdC5jbGllbnRXaWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5lbGVtT2JqZWN0Lm9ialBlcmZQbG90LmNsaWVudEhlaWdodCxcbiAgICAgIGhBeGlzOiB7IHRpdGxlOiAnT2JqZWN0cycgfSxcbiAgICAgIHZBeGlzOiB7IHRpdGxlOiAnY291bnRzJywgbWluVmFsdWU6IDAsIG1heFZhbHVlOiAxIH0sXG4gICAgICB0aXRsZTogJ09iamVjdCBQZXJmb3JtYW5jZScsXG4gICAgICBsZWdlbmQ6IHsgcG9zaXRpb246ICdub25lJyB9LFxuICAgIH07XG4gIH0vL0ZVTkNUSU9OIHNldHVwQ2hhcnRPcHRpb25zXG5cbiAgcHVibGljIGluaXRpYWxpemVDaGFydERhdGEoZmlsZTogRmlsZVR5cGUsIHBsb3RPcHRpb25zOiBhbnkpIHtcbiAgICAvLyBSZW1vdmUgcm93cyBhbmQgY29sdW1uc1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucGVyZkRhdGFUYWJsZSk7XG4gICAgdGhpcy5wZXJmRGF0YVRhYmxlLnJlbW92ZVJvd3MoMCwgdGhpcy5wZXJmRGF0YVRhYmxlLmdldE51bWJlck9mUm93cygpKTtcbiAgICB0aGlzLnBlcmZEYXRhVGFibGUucmVtb3ZlQ29sdW1ucyhcbiAgICAgIDAsXG4gICAgICB0aGlzLnBlcmZEYXRhVGFibGUuZ2V0TnVtYmVyT2ZDb2x1bW5zKClcbiAgICApO1xuXG4gICAgdGhpcy5jdW11bERhdGFUYWJsZS5yZW1vdmVSb3dzKDAsIHRoaXMuY3VtdWxEYXRhVGFibGUuZ2V0TnVtYmVyT2ZSb3dzKCkpO1xuICAgIHRoaXMuY3VtdWxEYXRhVGFibGUucmVtb3ZlQ29sdW1ucyhcbiAgICAgIDAsXG4gICAgICB0aGlzLmN1bXVsRGF0YVRhYmxlLmdldE51bWJlck9mQ29sdW1ucygpXG4gICAgKTtcblxuICAgIHRoaXMuaGVhbHRoRGF0YVRhYmxlLnJlbW92ZVJvd3MoMCwgdGhpcy5oZWFsdGhEYXRhVGFibGUuZ2V0TnVtYmVyT2ZSb3dzKCkpO1xuICAgIHRoaXMuaGVhbHRoRGF0YVRhYmxlLnJlbW92ZUNvbHVtbnMoXG4gICAgICAwLFxuICAgICAgdGhpcy5oZWFsdGhEYXRhVGFibGUuZ2V0TnVtYmVyT2ZDb2x1bW5zKClcbiAgICApO1xuXG4gICAgdGhpcy54eVBvc0RhdGFUYWJsZS5yZW1vdmVSb3dzKDAsIHRoaXMueHlQb3NEYXRhVGFibGUuZ2V0TnVtYmVyT2ZSb3dzKCkpO1xuICAgIHRoaXMueHlQb3NEYXRhVGFibGUucmVtb3ZlQ29sdW1ucyhcbiAgICAgIDAsXG4gICAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLmdldE51bWJlck9mQ29sdW1ucygpXG4gICAgKTtcblxuICAgIHRoaXMucmVhbHRpbWVEYXRhVGFibGUucmVtb3ZlUm93cyhcbiAgICAgIDAsXG4gICAgICB0aGlzLnJlYWx0aW1lRGF0YVRhYmxlLmdldE51bWJlck9mUm93cygpXG4gICAgKTtcbiAgICB0aGlzLnJlYWx0aW1lRGF0YVRhYmxlLnJlbW92ZUNvbHVtbnMoXG4gICAgICAwLFxuICAgICAgdGhpcy5yZWFsdGltZURhdGFUYWJsZS5nZXROdW1iZXJPZkNvbHVtbnMoKVxuICAgICk7XG4gICAgdGhpcy5yZWFsdGltZVBsb3RBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnJlYWx0aW1lUm93RGF0YUFkZGVkID0gZmFsc2U7XG4gICAgdGhpcy5ydERhdGFbJ3Rlc3QnXSA9IFtdO1xuICAgIHRoaXMucnREYXRhWydjaG9pY2UnXSA9IFtdO1xuXG4gICAgdGhpcy5yeG5UaW1lRGF0YVRhYmxlLnJlbW92ZVJvd3MoXG4gICAgICAwLFxuICAgICAgdGhpcy5yeG5UaW1lRGF0YVRhYmxlLmdldE51bWJlck9mUm93cygpXG4gICAgKTtcbiAgICB0aGlzLnJ4blRpbWVEYXRhVGFibGUucmVtb3ZlQ29sdW1ucyhcbiAgICAgIDAsXG4gICAgICB0aGlzLnJ4blRpbWVEYXRhVGFibGUuZ2V0TnVtYmVyT2ZDb2x1bW5zKClcbiAgICApO1xuXG4gICAgdGhpcy5yZXdhcmREYXRhVGFibGUucmVtb3ZlUm93cygwLCB0aGlzLnJld2FyZERhdGFUYWJsZS5nZXROdW1iZXJPZlJvd3MoKSk7XG4gICAgdGhpcy5yZXdhcmREYXRhVGFibGUucmVtb3ZlQ29sdW1ucyhcbiAgICAgIDAsXG4gICAgICB0aGlzLnJld2FyZERhdGFUYWJsZS5nZXROdW1iZXJPZkNvbHVtbnMoKVxuICAgICk7XG5cbiAgICB0aGlzLmNob2ljZURhdGFUYWJsZS5yZW1vdmVSb3dzKDAsIHRoaXMuY2hvaWNlRGF0YVRhYmxlLmdldE51bWJlck9mUm93cygpKTtcbiAgICB0aGlzLmNob2ljZURhdGFUYWJsZS5yZW1vdmVDb2x1bW5zKFxuICAgICAgMCxcbiAgICAgIHRoaXMuY2hvaWNlRGF0YVRhYmxlLmdldE51bWJlck9mQ29sdW1ucygpXG4gICAgKTtcblxuICAgIHRoaXMub2JqUGVyZkRhdGFUYWJsZS5yZW1vdmVSb3dzKFxuICAgICAgMCxcbiAgICAgIHRoaXMub2JqUGVyZkRhdGFUYWJsZS5nZXROdW1iZXJPZlJvd3MoKVxuICAgICk7XG4gICAgdGhpcy5vYmpQZXJmRGF0YVRhYmxlLnJlbW92ZUNvbHVtbnMoXG4gICAgICAwLFxuICAgICAgdGhpcy5vYmpQZXJmRGF0YVRhYmxlLmdldE51bWJlck9mQ29sdW1ucygpXG4gICAgKTtcblxuICAgIC8vIEFkZCBjb2x1bW5zXG4gICAgdGhpcy5wZXJmRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ2N1cnJlbnRUcmlhbCcpO1xuICAgIHRoaXMucGVyZkRhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdjdXJyZW50Jyk7XG4gICAgdGhpcy5wZXJmRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJzEwMHRyaWFsc0F2ZycpO1xuXG4gICAgdGhpcy5jdW11bERhdGFUYWJsZS5hZGRDb2x1bW4oJ2RhdGV0aW1lJywgJ3RpbWUnKTtcbiAgICB0aGlzLmN1bXVsRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ1RyaWFscycpO1xuICAgIHRoaXMuY3VtdWxEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAnUGVyZm9ybWFuY2UnKTtcbiAgICB0aGlzLmN1bXVsRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ1JGSUQnKTtcbiAgICAvLyB0aGlzLmN1bXVsRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ1dlaWdodCcpO1xuXG4gICAgdGhpcy5yeG5UaW1lRGF0YVRhYmxlLmFkZENvbHVtbignc3RyaW5nJywgJ3N1Y2Nlc3MnKTtcbiAgICB0aGlzLnJ4blRpbWVEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAnZHVyYXRpb25NUycpO1xuXG4gICAgLyoqXG4gICAgICogeHlQb3NEYXRhVGFibGUgR3VpZGVcbiAgICAgKiAwOiB4XG4gICAgICogMTogeSBmaXggKGJveClcbiAgICAgKiAyOiB5IHNhbXBsZSAoYm94KVxuICAgICAqIDM6IHkgdGVzdDEgKGJveCkgfCB5IHNhbWUgKGJveClcbiAgICAgKiA0OiB5IHRlc3QyIChib3gpIHwgeSBkaWZmZXJlbnQgKGJveClcbiAgICAgKiA1OiB5IEZpeF9yZXdhcmQgKGRvdHMpXG4gICAgICogNjogeSBGaXhfcHVuaXNoIChkb3RzKVxuICAgICAqIDc6IHkgVGFyZ2V0X3Jld2FyZCAoZG90cylcbiAgICAgKiA4OiB5IFRhcmdldF9wdW5pc2ggKGRvdHMpXG4gICAgICovXG4gICAgdGhpcy54eVBvc0RhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICd4cG9zJyk7XG4gICAgdGhpcy54eVBvc0RhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdGaXhhdGlvbicpO1xuICAgIHRoaXMueHlQb3NEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAnU2FtcGxlJyk7XG4gICAgdGhpcy5yZWFsdGltZURhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdnbG9iYWxYJyk7XG4gICAgdGhpcy5yZWFsdGltZURhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdmaXhZJyk7XG4gICAgdGhpcy5yZWFsdGltZURhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdzYW1wbGVZJyk7XG5cbiAgICBpZiAoZmlsZS5kYXRhIS5TYW1lRGlmZmVyZW50IDw9IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZS5kYXRhIS5UZXN0R3JpZEluZGV4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMueHlQb3NEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCBgVGVzdCR7aSArIDF9YCk7XG4gICAgICAgIHRoaXMucmVhbHRpbWVEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCBgdGVzdFkke2kgKyAxfWApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZmlsZS5kYXRhIS5TYW1lRGlmZmVyZW50ID4gMCkge1xuICAgICAgdGhpcy54eVBvc0RhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdTYW1lJyk7XG4gICAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ0RpZmZlcmVudCcpO1xuICAgICAgdGhpcy5yZWFsdGltZURhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdzYW1lWScpO1xuICAgICAgdGhpcy5yZWFsdGltZURhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdkaWZmZXJlbnRZJyk7XG4gICAgfVxuXG4gICAgdGhpcy54eVBvc0RhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdGaXhfUmV3YXJkJyk7XG4gICAgdGhpcy54eVBvc0RhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdGaXhfUHVuaXNoJyk7XG4gICAgdGhpcy54eVBvc0RhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdUYXJnZXRfUmV3YXJkJyk7XG4gICAgdGhpcy54eVBvc0RhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdUYXJnZXRfUHVuaXNoJyk7XG5cbiAgICB0aGlzLnJlYWx0aW1lRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ2N1clknKTtcbiAgICB0aGlzLnJlYWx0aW1lRGF0YVRhYmxlLmFkZENvbHVtbih7IHR5cGU6ICdzdHJpbmcnLCByb2xlOiAnc3R5bGUnIH0pO1xuXG4gICAgdGhpcy5yZXdhcmREYXRhVGFibGUuYWRkQ29sdW1uKCdzdHJpbmcnLCAncmV3YXJkIHNpemUnKTtcbiAgICB0aGlzLnJld2FyZERhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICducmV3YXJkcycpO1xuXG4gICAgdGhpcy5jaG9pY2VEYXRhVGFibGUuYWRkQ29sdW1uKCdzdHJpbmcnLCAnY2hvaWNlJyk7XG4gICAgdGhpcy5jaG9pY2VEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAnIyBvZiByZXNwb25zZXMnKTtcblxuICAgIHRoaXMub2JqUGVyZkRhdGFUYWJsZS5hZGRDb2x1bW4oJ3N0cmluZycsICdvYmplY3QnKTtcbiAgICB0aGlzLm9ialBlcmZEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAncGVyZm9ybWFuY2UnKTtcblxuICAgIHRoaXMuaGVhbHRoRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ3RyaWFsJyk7XG4gICAgdGhpcy5oZWFsdGhEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAnc2FtcGxlIGNvbW1hbmQnKTtcbiAgICB0aGlzLmhlYWx0aERhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdzYW1wbGUgY29tbWFuZCBvZmYnKTtcbiAgICB0aGlzLmhlYWx0aERhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICd0ZGlzcGxheV9sYXN0Jyk7XG4gICAgdGhpcy5oZWFsdGhEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAndGRpc3BsYXlfZmlyc3QnKTtcbiAgICB0aGlzLmhlYWx0aERhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdleWUgaW50ZXJ2YWwnKTtcblxuICAgIHRoaXMudXBkYXRlUGxvdHMoZmlsZSwgcGxvdE9wdGlvbnMpO1xuICB9Ly9GVU5DVElPTiBpbml0aWFsaXplQ2hhcnREYXRhXG5cbiAgcHVibGljIHVwZGF0ZVBsb3RzKGZpbGU6IEZpbGVUeXBlLCBwbG90T3B0aW9uczogYW55KSB7XG4gICAgbGV0IGZpbGVEYXRhOiBMaXZlcGxvdERhdGFUeXBlO1xuICAgIGlmICghXy5pc1VuZGVmaW5lZChmaWxlLmRhdGEpKSB7XG4gICAgICBmaWxlRGF0YSA9IGZpbGUuZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgJ2ZpbGUuZGF0YSBpcyBVbmRlZmluZWQnO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygncGxvdCB1cGRhdGVkJyk7XG4gICAgdGhpcy5sb2FkVml0YWxzKGZpbGUpO1xuICAgIHRoaXMubG9hZFZpdGFsc1RleHQoZmlsZSk7XG4gICAgdGhpcy5sb2FkUGVyZm9ybWFuY2VEYXRhKGZpbGUpO1xuICAgIHRoaXMubG9hZEhlYWx0aERhdGEoZmlsZURhdGEpO1xuICAgIHRoaXMubG9hZE9ialBlcmZEYXRhKGZpbGVEYXRhKTtcbiAgICB0aGlzLmxvYWRDaG9pY2VEYXRhKGZpbGVEYXRhKTtcbiAgICB0aGlzLmxvYWRSZXdhcmREYXRhKGZpbGVEYXRhKTtcbiAgICB0aGlzLmxvYWRUb3VjaFNEVGV4dCgpOy8vVG91Y2hTRCB0ZXh0IGZvciBTY3JlZW5QbG90XG5cbiAgICB0aGlzLmRyYXdQZXJmb3JtYW5jZVBsb3QoZmlsZSk7IC8vJUNvcnJlY3RcbiAgICB0aGlzLmRyYXdUcmlhbFBsb3QoZmlsZSk7IC8vI1RyaWFsc1xuICAgIHRoaXMuZHJhd0hlYWx0aFBsb3QoZmlsZSk7IC8vRGlzcGxheVRpbWluZywgU2FtcGxlQ29tbWFuZCwgRXllSW50ZXJ2YWxcbiAgICB0aGlzLmRyYXdPYmpQZXJmUGxvdCgpOy8vJUNvcnJlY3QgYnkgT2JqZWN0XG4gICAgdGhpcy5kcmF3UnhuVGltZVBsb3QoKTsvL1JlYWN0aW9uVGltZSBoaXN0b2dyYW1cbiAgICB0aGlzLmRyYXdDaG9pY2VQbG90KCk7Ly9DaG9pc2VCaWFzIGJhciBwbG90XG4gICAgdGhpcy5kcmF3UmV3YXJkUGxvdCgpOy8vTlJld2FyZHMgYmFyIHBsb3RcbiAgICBsZXQgc3RyZWFtQWN0aXZlID0gcGxvdE9wdGlvbnMuc3RyZWFtQWN0aXZlO1xuICAgIHRoaXMuZHJhd1NjcmVlblBsb3QoZmlsZURhdGEsIHN0cmVhbUFjdGl2ZSk7Ly9Ub3VjaCBMb2NhdGlvbnNcblxuICAgIC8vUmVhbHRpbWUgUGxvdFxuICAgIGlmIChzdHJlYW1BY3RpdmUgJiYgIXRoaXMucmVhbHRpbWVQbG90QWN0aXZlKSB7XG4gICAgICB0aGlzLmRyYXdSZWFsdGltZVBsb3QyKGZpbGVEYXRhKTtcbiAgICAgIHRoaXMucmVhbHRpbWVQbG90QWN0aXZlID0gdHJ1ZTtcbiAgICB9Ly9JRiByZWFsdGltZSBzdHJlYW0gYWN0aXZlXG4gIH0vL0ZVTkNUSU9OIHVwZGF0ZVBsb3RzXG5cbiAgcHJpdmF0ZSBsb2FkVml0YWxzKGZpbGU6IEZpbGVUeXBlKSB7XG4gICAgbGV0IGRhdGE7XG4gICAgaWYgKCFfLmlzVW5kZWZpbmVkKGZpbGUuZGF0YSkpIHtcbiAgICAgIGRhdGEgPSBmaWxlLmRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93ICdmaWxlLmRhdGEgaXMgVW5kZWZpbmVkJztcbiAgICB9XG5cbiAgICB0aGlzLnZpdGFscy5zdWJqZWN0ID0gZGF0YS5TdWJqZWN0O1xuICAgIHRoaXMudml0YWxzLnRyaWFscyA9IGRhdGEuUmVzcG9uc2UubGVuZ3RoO1xuXG4gICAgLy8gQ29udmVydCBtaWxsaXNlY29uZHMgdG8gbWludXRlc1xuICAgIGxldCBzdGFydFRpbWUgPSBkYXRhLlN0YXJ0VGltZTtcbiAgICB0aGlzLnZpdGFscy50aW1lID0gXy5yb3VuZChcbiAgICAgIF8ucm91bmQoXy50b051bWJlcihfLmxhc3Qoc3RhcnRUaW1lKSkgLSBzdGFydFRpbWVbMF0pIC8gNjAwMDBcbiAgICApO1xuXG4gICAgLyoqXG4gICAgICogUkZJRCBQcm9jZXNzaW5nXG4gICAgICogT25seSBzdXBwb3J0cyBjdXJyZW50IGRhdGEgZm9ybWF0XG4gICAgICogZmlsZS5kYXRhLlJGSURUYWcgPSB7XG4gICAgICogICAwOiBbMCwgMjAyMC0xMC0yN1QxOToxOToxOS45OTlaLCAwMDc4MkE3RTg4QTRdLFxuICAgICAqICAgMTogW10sXG4gICAgICogICAuLi5cbiAgICAgKiB9O1xuICAgICAqL1xuICAgIGxldCByZmlkVGFnID0gZGF0YS5SRklEVGFnO1xuICAgIGlmICghXy5pc1VuZGVmaW5lZChyZmlkVGFnKSAmJiBfLnNpemUocmZpZFRhZykgPiAwKSB7XG4gICAgICB0aGlzLnZpdGFscy5yZmlkVGFnID0gcmZpZFRhZ1tfLnNpemUocmZpZFRhZykgLSAxXVsyXTtcbiAgICAgIHRoaXMudml0YWxzLnJmaWRUaW1lID0gbmV3IERhdGUoXG4gICAgICAgIHJmaWRUYWdbXy5zaXplKHJmaWRUYWcpIC0gMV1bMV1cbiAgICAgICkudG9Mb2NhbGVUaW1lU3RyaW5nKCdlbi1VUycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZpdGFscy5yZmlkVGFnID0gbnVsbDtcbiAgICAgIHRoaXMudml0YWxzLnJmaWRUaW1lID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBBdXRvbWF0b3IsIEF1dG9tYXRvclN0YWdlLCBBdXRvbWF0b3JTdGFnZU5hbWVcbiAgICBpZiAoXy5pc1VuZGVmaW5lZChkYXRhLkF1dG9tYXRvcikpIHtcbiAgICAgIHRoaXMudml0YWxzLmF1dG9tYXRvciA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudml0YWxzLmF1dG9tYXRvciA9IGZpbGUuZGF0YS5BdXRvbWF0b3I7XG4gICAgfVxuXG4gICAgaWYgKF8uaXNVbmRlZmluZWQoZGF0YS5DdXJyZW50QXV0b21hdG9yU3RhZ2UpKSB7XG4gICAgICB0aGlzLnZpdGFscy5hdXRvbWF0b3JTdGFnZSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudml0YWxzLmF1dG9tYXRvclN0YWdlID0gZGF0YS5DdXJyZW50QXV0b21hdG9yU3RhZ2U7XG4gICAgfVxuXG4gICAgaWYgKF8uaXNVbmRlZmluZWQoZGF0YS5DdXJyZW50QXV0b21hdG9yU3RhZ2VOYW1lKSkge1xuICAgICAgdGhpcy52aXRhbHMuYXV0b21hdG9yU3RhZ2VOYW1lID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aXRhbHMuYXV0b21hdG9yU3RhZ2VOYW1lID0gZGF0YS5DdXJyZW50QXV0b21hdG9yU3RhZ2VOYW1lO1xuICAgIH1cblxuICAgIC8vIEJhdHRlcnksIG9ubHkgc3VwcG9ydHMgY3VycmVudCBkYXRhIGZvcm1hdFxuICAgIGxldCBiYXR0ZXJ5ID0gZGF0YS5CYXR0ZXJ5O1xuICAgIGlmICghXy5pc1VuZGVmaW5lZChiYXR0ZXJ5KSAmJiBfLnNpemUoYmF0dGVyeSkgPiAwKSB7XG4gICAgICB0aGlzLnZpdGFscy5iYXR0ZXJ5TGVmdCA9IF8ucm91bmQoYmF0dGVyeVtfLnNpemUoYmF0dGVyeSkgLSAxXVsyXSAqIDEwMCk7XG4gICAgICB0aGlzLnZpdGFscy5iYXR0ZXJ5VXNlZCA9IF8ucm91bmQoXG4gICAgICAgIGJhdHRlcnlbMF1bMl0gKiAxMDAgLSB0aGlzLnZpdGFscy5iYXR0ZXJ5TGVmdFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aXRhbHMuYmF0dGVyeUxlZnQgPSBudWxsO1xuICAgICAgdGhpcy52aXRhbHMuYmF0dGVyeVVzZWQgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFBlcmZvcm1hbmNlXG4gICAgbGV0IG51bUNvcnJlY3QgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgXy5zaXplKGRhdGEuQ29ycmVjdEl0ZW0pOyBpKyspIHtcbiAgICAgIGlmIChkYXRhLkNvcnJlY3RJdGVtW2ldID09IGRhdGEuUmVzcG9uc2VbaV0pIHtcbiAgICAgICAgbnVtQ29ycmVjdCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudml0YWxzLm51bUNvcnJlY3QgPSBudW1Db3JyZWN0O1xuICAgIHRoaXMudml0YWxzLnBjdENvcnJlY3QgPSBfLnJvdW5kKCgxMDAgKiBudW1Db3JyZWN0KSAvIGRhdGEuUmVzcG9uc2UubGVuZ3RoKTtcblxuICAgIGlmICghXy5pc1VuZGVmaW5lZChkYXRhLk5SZXdhcmQpKSB7XG4gICAgICB0aGlzLnZpdGFscy5udW1SZXdhcmQgPSBkYXRhLk5SZXdhcmQucmVkdWNlKChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4ge1xuICAgICAgICByZXR1cm4gYSArIGI7XG4gICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICB0aGlzLnZpdGFscy5yZXdhcmRFc3RpbWF0ZSA9IDA7XG4gICAgaWYgKCFfLmlzVW5kZWZpbmVkKGRhdGEuUmV3YXJkUGVyMTAwMFRyaWFscykpIHtcbiAgICAgIHRoaXMudml0YWxzLnJld2FyZEVzdGltYXRlID0gXy5yb3VuZChcbiAgICAgICAgKGRhdGEuUmV3YXJkUGVyMTAwMFRyaWFscyAqIHRoaXMudml0YWxzLm51bVJld2FyZCkgLyAxMDAwXG4gICAgICApO1xuICAgIH1cbiAgfS8vRlVOQ1RJT04gbG9hZFZpdGFsc1xuXG4gIHByaXZhdGUgbG9hZFZpdGFsc1RleHQoZmlsZTogRmlsZVR5cGUpIHtcbiAgICB0aGlzLmVsZW1PYmplY3QucGVyZlZpdGFscy5pbm5lckhUTUwgPSBgJHt0aGlzLnZpdGFscy5zdWJqZWN0fTogJHt0aGlzLnZpdGFscy5wY3RDb3JyZWN0fSUgKG4gPSAke3RoaXMudml0YWxzLm51bUNvcnJlY3R9IG91dCBvZiAke3RoaXMudml0YWxzLnRyaWFsc30sIHI9JHt0aGlzLnZpdGFscy5udW1SZXdhcmR9PSR7dGhpcy52aXRhbHMucmV3YXJkRXN0aW1hdGV9bUwsICR7dGhpcy52aXRhbHMudGltZX0gbWlucylgO1xuXG4gICAgLy8gVE9ETzogYWRkIHRoaXMudml0YWxzLnRhZ0NvdW50IGRhdGFcbiAgICB0aGlzLmVsZW1PYmplY3QucmZpZFZpdGFscy5pbm5lckhUTUwgPSBgUkZJRDogJHt0aGlzLnZpdGFscy5yZmlkVGFnfSAoJHt0aGlzLnZpdGFscy5yZmlkVGltZX0pYDtcblxuICAgIHRoaXMuZWxlbU9iamVjdC5iYXR0ZXJ5Vml0YWxzLmlubmVySFRNTCA9IGBCYXR0ZXJ5OiAke3RoaXMudml0YWxzLmJhdHRlcnlMZWZ0fSUgKC0ke3RoaXMudml0YWxzLmJhdHRlcnlVc2VkfSUpYDtcblxuICAgIHRoaXMuZWxlbU9iamVjdC50cmlhbFZpdGFscy5pbm5lckhUTUwgPSBgTGFzdCBUcmlhbDogJHtmaWxlLmRhdGVTYXZlZCEudG9Mb2NhbGVUaW1lU3RyaW5nKFxuICAgICAgJ2VuLVVTJ1xuICAgICl9YDtcbiAgfS8vRlVOQ1RJT04gbG9hZFZpdGFsc1RleHRcblxuICBwcml2YXRlIGxvYWRUb3VjaFNEVGV4dCgpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5zY3JlZW5QbG90T3B0aW9ucy50aXRsZSA9IGBUb3VjaCBMb2NhdGlvbnMgLS0gc3RhbmRhcmQgZGV2OiBcXG4gRml4YXRpb246ICR7XG4gICAgICAgIE1hdGgucm91bmQodGhpcy52aXRhbHMuc3RkZXZGaXggKiAxMCkgLyAxMFxuICAgICAgfSBwaXhlbHNgO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZpdGFscy5zdGRldlRlc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5zY3JlZW5QbG90T3B0aW9ucy50aXRsZSA9XG4gICAgICAgICAgdGhpcy5zY3JlZW5QbG90T3B0aW9ucy50aXRsZSArXG4gICAgICAgICAgYFxcbiBUYXJnZXQgJHtpfTogJHtNYXRoLnJvdW5kKHRoaXMudml0YWxzLnN0ZGV2VGVzdFtpXSAqIDEwKSAvIDEwfWA7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIHRvdWNoIFNEIHRleHQnLCBlcnIpO1xuICAgIH1cbiAgfS8vRlVOQ1RJT04gbG9hZFRvdWNoU0RUZXh0XG5cbiAgcHJpdmF0ZSBsb2FkUGVyZm9ybWFuY2VEYXRhKGZpbGU6IEZpbGVUeXBlKSB7XG4gICAgLy8gVHlwZWNoZWNraW5nIGZpbGUuZGF0YVxuICAgIGxldCBkYXRhO1xuICAgIGlmICghXy5pc1VuZGVmaW5lZChmaWxlLmRhdGEpKSB7XG4gICAgICBkYXRhID0gZmlsZS5kYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyAnZmlsZS5kYXRhIGlzIFVuZGVmaW5lZCc7XG4gICAgfVxuXG4gICAgdGhpcy5wZXJmRGF0YVRhYmxlLnJlbW92ZVJvd3MoMCwgdGhpcy5wZXJmRGF0YVRhYmxlLmdldE51bWJlck9mUm93cygpKTtcbiAgICB0aGlzLmN1bXVsRGF0YVRhYmxlLnJlbW92ZVJvd3MoMCwgdGhpcy5jdW11bERhdGFUYWJsZS5nZXROdW1iZXJPZlJvd3MoKSk7XG4gICAgdGhpcy5yeG5UaW1lRGF0YVRhYmxlLnJlbW92ZVJvd3MoXG4gICAgICAwLFxuICAgICAgdGhpcy5yeG5UaW1lRGF0YVRhYmxlLmdldE51bWJlck9mUm93cygpXG4gICAgKTtcbiAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLnJlbW92ZVJvd3MoMCwgdGhpcy54eVBvc0RhdGFUYWJsZS5nZXROdW1iZXJPZlJvd3MoKSk7XG5cbiAgICAvLyBDcmVhdGUgRGF0YSBUYWJsZVxuICAgIGxldCB4RGF0YSA9IFtdO1xuICAgIGxldCB5RGF0YTogbnVtYmVyW10gPSBbXTtcbiAgICBsZXQgeURhdGFTbWFsbCA9IFtdOyAvLyBrZWVwcyA1IHJlY2VudFxuICAgIGxldCB5RGF0YUxhcmdlID0gW107IC8vIGtlZXBzIDEwMCByZWNlbnRcbiAgICBsZXQgbnVtVG90YWwgPSBbXTtcbiAgICBsZXQgbnVtQ29ycmVjdDogbnVtYmVyW10gPSBbXTtcbiAgICBsZXQgdEN1cnJlbnQgPSBbXTtcbiAgICBsZXQgbnVtUkZJRCA9IFtdO1xuICAgIGxldCB4UG9zOiBudW1iZXI7XG4gICAgbGV0IHlQb3M6IG51bWJlcjtcbiAgICBsZXQgdG91Y2hldmVudDogbnVtYmVyW11bXSA9IFtdO1xuICAgIGxldCBydCA9IFtdO1xuXG4gICAgLy8gcGVyZm9ybWFuY2VcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuQ29ycmVjdEl0ZW0ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChkYXRhLkNvcnJlY3RJdGVtW2ldID09IGRhdGEuUmVzcG9uc2VbaV0pIHtcbiAgICAgICAgeURhdGFbaV0gPSAxOyAvLyBjb3JyZWN0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB5RGF0YVtpXSA9IDA7IC8vIGluY29ycmVjdFxuICAgICAgfVxuXG4gICAgICB4RGF0YVtpXSA9IGk7XG5cbiAgICAgIC8vIEN1bXVsYXRpdmUgdHJpYWxzICYgY29ycmVjdCB0cmlhbHNcbiAgICAgIG51bVRvdGFsW2ldID0geERhdGEubGVuZ3RoO1xuICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgIG51bUNvcnJlY3RbaV0gPSBudW1Db3JyZWN0W2kgLSAxXSArIHlEYXRhW2ldO1xuICAgICAgfSBlbHNlIGlmIChpID09IDApIHtcbiAgICAgICAgbnVtQ29ycmVjdFtpXSA9IHlEYXRhW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5OUmV3YXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZGF0YS5SZXdhcmRTdGFnZSA9PSAwKSB7XG4gICAgICAgIHJ0W2ldID0gZGF0YS5GaXhhdGlvblhZVFsyXVtpXSAtIGRhdGEuU3RhcnRUaW1lW2ldO1xuICAgICAgICB0aGlzLnJ4blRpbWVEYXRhVGFibGUuYWRkUm93cyhbXG4gICAgICAgICAgW2ZpbGUuZGF0YS5GaXhhdGlvblRvdWNoRXZlbnRbaV0sIHJ0W2ldXSxcbiAgICAgICAgXSk7XG4gICAgICB9IGVsc2UgaWYgKGRhdGEuTlJTVlAgPiAwKSB7XG4gICAgICAgIHJ0W2ldID0gZGF0YS5TYW1wbGVGaXhhdGlvblhZVFsyXVtpXSAtIGRhdGEuU2FtcGxlU3RhcnRUaW1lW2ldO1xuICAgICAgICB0aGlzLnJ4blRpbWVEYXRhVGFibGUuYWRkUm93cyhbXG4gICAgICAgICAgW2RhdGEuU2FtcGxlRml4YXRpb25Ub3VjaEV2ZW50W2ldLCBydFtpXV0sXG4gICAgICAgIF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcnRbaV0gPSBkYXRhLlJlc3BvbnNlWFlUWzJdW2ldIC0gZGF0YS5TYW1wbGVTdGFydFRpbWVbaV07XG4gICAgICAgIGlmIChkYXRhLlJlc3BvbnNlW2ldID09IC0xKSB7XG4gICAgICAgICAgdGhpcy5yeG5UaW1lRGF0YVRhYmxlLmFkZFJvd3MoW1sndGltZW91dCcsIGRhdGEuQ2hvaWNlVGltZU91dF1dKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLkNvcnJlY3RJdGVtW2ldID09IGRhdGEuUmVzcG9uc2VbaV0pIHtcbiAgICAgICAgICB0aGlzLnJ4blRpbWVEYXRhVGFibGUuYWRkUm93cyhbWydjb3JyZWN0JywgcnRbaV1dXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yeG5UaW1lRGF0YVRhYmxlLmFkZFJvd3MoW1snd3JvbmcnLCBydFtpXV1dKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKHJ0KTtcblxuICAgIC8qKlxuICAgICAqIFRvdWNoIFhZXG4gICAgICogU3RvcmUgZml4YXRpb24gaW4gb2RkIGluZGljZXMgYW5kIGNob2ljZSBpbiBldmVuXG4gICAgICogQWxsIHRvdWNoZXZlbnRzLiB0b3VjaGV2ZW50IGhhcyBhIGxlbmd0aCB0aGF0IGlzIHR3aWNlIHRoZSBsZW5ndGhcbiAgICAgKiBvZiBmaWxlLmRhdGEuRml4YXRpb25YWVQgb3IgZmlsZS5kYXRhLlJlc3BvbnNlWFlUXG4gICAgICovXG4gICAgaWYgKFxuICAgICAgIV8uaXNVbmRlZmluZWQoZGF0YS5SZXNwb25zZVhZVCkgJiZcbiAgICAgIF8uc2l6ZShkYXRhLlJlc3BvbnNlWFlUKSA+IDAgJiZcbiAgICAgIF8uc2l6ZShmaWxlLmRhdGEuUmVzcG9uc2VYWVRbMF0pID4gMFxuICAgICkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfLnNpemUoZGF0YS5GaXhhdGlvblhZVFswXSkgKiAyOyBpICs9IDIpIHtcbiAgICAgICAgdG91Y2hldmVudFtpXSA9IFtdO1xuICAgICAgICB0b3VjaGV2ZW50W2kgKyAxXSA9IFtdO1xuICAgICAgICB0b3VjaGV2ZW50W2ldWzBdID0gZmlsZS5kYXRhLkZpeGF0aW9uWFlUWzBdW2kgLyAyXTtcbiAgICAgICAgdG91Y2hldmVudFtpICsgMV1bMF0gPSBmaWxlLmRhdGEuUmVzcG9uc2VYWVRbMF1baSAvIDJdO1xuICAgICAgICB0b3VjaGV2ZW50W2ldWzFdID0gZmlsZS5kYXRhLkZpeGF0aW9uWFlUWzFdW2kgLyAyXTtcbiAgICAgICAgdG91Y2hldmVudFtpICsgMV1bMV0gPSBmaWxlLmRhdGEuUmVzcG9uc2VYWVRbMV1baSAvIDJdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF8uc2l6ZShkYXRhLkZpeGF0aW9uWFlUWzBdKSAqIDI7IGkgKz0gMikge1xuICAgICAgICB0b3VjaGV2ZW50W2ldID0gW107XG4gICAgICAgIHRvdWNoZXZlbnRbaSArIDFdID0gW107XG4gICAgICAgIHRvdWNoZXZlbnRbaV1bMF0gPSBmaWxlLmRhdGEuRml4YXRpb25YWVRbMF1baSAvIDJdO1xuICAgICAgICB0b3VjaGV2ZW50W2kgKyAxXVswXSA9IGZpbGUuZGF0YS5GaXhhdGlvblhZVFswXVtpIC8gMl07XG4gICAgICAgIHRvdWNoZXZlbnRbaV1bMV0gPSBmaWxlLmRhdGEuRml4YXRpb25YWVRbMV1baSAvIDJdO1xuICAgICAgICB0b3VjaGV2ZW50W2kgKyAxXVsxXSA9IGZpbGUuZGF0YS5GaXhhdGlvblhZVFsxXVtpIC8gMl07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2FtcGxlICYgVGVzdCBCb3hlcyAtLSBEcmF3IHRoZW0gYXMgYSBib3VuZGluZyBib3ggaW4gdGhlIHRvdWNoIHBsb3RcbiAgICBsZXQgbnVtQ29sdW1uWFlQb3MgPSB0aGlzLnh5UG9zRGF0YVRhYmxlLmdldE51bWJlck9mQ29sdW1ucygpO1xuICAgIGxldCBudW1Db2xSZWFsdGltZSA9IHRoaXMucmVhbHRpbWVEYXRhVGFibGUuZ2V0TnVtYmVyT2ZDb2x1bW5zKCk7XG4gICAgbGV0IHNhbXBsZVdpZHRoID0gdGhpcy5nZXRTYW1wbGVXaWR0aChmaWxlLmRhdGEpO1xuICAgIGxldCBzYW1wbGVIZWlnaHQgPSBzYW1wbGVXaWR0aDtcbiAgICBsZXQgdGVzdFdpZHRoID0gdGhpcy5nZXRUZXN0V2lkdGgoZmlsZS5kYXRhKTtcbiAgICBsZXQgdGVzdEhlaWdodCA9IHRlc3RXaWR0aDtcblxuICAgIC8vIEZpeGF0aW9uICYgQ2hvaWNlIEJveGVzXG4gICAgbGV0IGZpeGF0aW9uV2lkdGggPSB0aGlzLmdldEZpeGF0aW9uV2lkdGgoZmlsZS5kYXRhLCBzYW1wbGVXaWR0aCk7XG4gICAgbGV0IGZpeGF0aW9uSGVpZ2h0ID0gZml4YXRpb25XaWR0aDtcbiAgICBsZXQgY2hvaWNlV2lkdGggPSB0aGlzLmdldENob2ljZVdpZHRoKGZpbGUuZGF0YSk7XG4gICAgbGV0IGNob2ljZUhlaWdodCA9IGNob2ljZVdpZHRoO1xuXG4gICAgLyoqXG4gICAgICogTk9URSBmb3IgcG9zaXRpb25pbmcgZWxlbWVudHM6XG4gICAgICogZ3JpZCB4LCB5IGlzIG9mZnNldCB8fCBmaXhhdGlvbiAmIHJlc3BvbnNlIHgsIHkgaXMgbm90XG4gICAgICovXG5cbiAgICAvLyBGSVhBVElPTlxuICAgIGxldCBudW1EaXNwbGF5RWxlbXMgPSAxO1xuICAgIC8vIGxldCB4eVBvc0FycmF5ID0gW107XG4gICAgbGV0IGZpeFg6IG51bWJlcjtcbiAgICBsZXQgZml4WTogbnVtYmVyO1xuICAgIGxldCBtYXhGaXhhdGlvbkdyaWRJbmRleCA9IF8ubWF4KGZpbGUuZGF0YS5GaXhhdGlvbkdyaWRJbmRleCk7XG4gICAgaWYgKF8uaXNOdW1iZXIobWF4Rml4YXRpb25HcmlkSW5kZXgpKSB7XG4gICAgICBmaXhYID0gZmlsZS5kYXRhLlhHcmlkQ2VudGVyW21heEZpeGF0aW9uR3JpZEluZGV4XTtcbiAgICAgIGZpeFkgPVxuICAgICAgICBmaWxlLmRhdGEuVmlld3BvcnRQaXhlbHNbMV0gLVxuICAgICAgICAoZmlsZS5kYXRhLllHcmlkQ2VudGVyW21heEZpeGF0aW9uR3JpZEluZGV4XSArIGZpbGUuZGF0YS5vZmZzZXR0b3ApO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2ZpeFknLCBmaXhZKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgJ2RhdGEuRml4YXRpb25HcmlkSW5kZXggaXMgbm90IG9mIHR5cGUgbnVtYmVyW10nO1xuICAgIH1cblxuICAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKHRoaXMueHlQb3NEYXRhVGFibGUsIG51bUNvbHVtblhZUG9zLCB7XG4gICAgICAwOiBmaXhYIC0gZml4YXRpb25XaWR0aCAvIDIsXG4gICAgICAxOiBmaXhZIC0gZml4YXRpb25IZWlnaHQgLyAyLFxuICAgIH0pO1xuICAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKHRoaXMueHlQb3NEYXRhVGFibGUsIG51bUNvbHVtblhZUG9zLCB7XG4gICAgICAwOiBmaXhYICsgZml4YXRpb25XaWR0aCAvIDIsXG4gICAgICAxOiBmaXhZIC0gZml4YXRpb25IZWlnaHQgLyAyLFxuICAgIH0pO1xuICAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKHRoaXMueHlQb3NEYXRhVGFibGUsIG51bUNvbHVtblhZUG9zLCB7XG4gICAgICAwOiBmaXhYICsgZml4YXRpb25XaWR0aCAvIDIsXG4gICAgICAxOiBmaXhZICsgZml4YXRpb25IZWlnaHQgLyAyLFxuICAgIH0pO1xuICAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKHRoaXMueHlQb3NEYXRhVGFibGUsIG51bUNvbHVtblhZUG9zLCB7XG4gICAgICAwOiBmaXhYIC0gZml4YXRpb25XaWR0aCAvIDIsXG4gICAgICAxOiBmaXhZICsgZml4YXRpb25IZWlnaHQgLyAyLFxuICAgIH0pO1xuICAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKHRoaXMueHlQb3NEYXRhVGFibGUsIG51bUNvbHVtblhZUG9zLCB7XG4gICAgICAwOiBmaXhYIC0gZml4YXRpb25XaWR0aCAvIDIsXG4gICAgICAxOiBmaXhZIC0gZml4YXRpb25IZWlnaHQgLyAyLFxuICAgIH0pO1xuXG4gICAgaWYgKCF0aGlzLnJlYWx0aW1lUm93RGF0YUFkZGVkICYmICF0aGlzLnJlYWx0aW1lUGxvdEFjdGl2ZSkge1xuICAgICAgY29uc29sZS5sb2coJ3JlYWx0aW1lIG5vdCBhY3RpdmUnKTtcbiAgICAgIHRoaXMucnREYXRhWydmaXhhdGlvbiddID0ge1xuICAgICAgICB4OiBmaXhYLFxuICAgICAgICB5OiBmaXhZLFxuICAgICAgICB3aWR0aDogZml4YXRpb25XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBmaXhhdGlvbkhlaWdodCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gU0FNUExFXG4gICAgbnVtRGlzcGxheUVsZW1zID0gMjtcbiAgICBsZXQgc2FtcGxlWDogbnVtYmVyO1xuICAgIGxldCBzYW1wbGVZOiBudW1iZXI7XG4gICAgbGV0IG1heFNhbXBsZUdyaWRJbmRleCA9IF8ubWF4KGRhdGEuU2FtcGxlR3JpZEluZGV4KTtcblxuICAgIGlmIChkYXRhLlJld2FyZFN0YWdlID4gMCkge1xuICAgICAgaWYgKF8uaXNOdW1iZXIobWF4U2FtcGxlR3JpZEluZGV4KSkge1xuICAgICAgICBzYW1wbGVYID0gZGF0YS5YR3JpZENlbnRlclttYXhTYW1wbGVHcmlkSW5kZXhdO1xuICAgICAgICBzYW1wbGVZID1cbiAgICAgICAgICBkYXRhLlZpZXdwb3J0UGl4ZWxzWzFdIC1cbiAgICAgICAgICAoZGF0YS5ZR3JpZENlbnRlclttYXhTYW1wbGVHcmlkSW5kZXhdICsgZGF0YS5vZmZzZXR0b3ApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgJ2RhdGEuU2FtcGxlR3JpZEluZGV4IGlzIG5vdCBvZiB0eXBlIG51bWJlcltdJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2FtcGxlWCA9IGZpeFg7XG4gICAgICBzYW1wbGVZID0gZml4WTtcbiAgICB9XG5cbiAgICB0aGlzLmdlbmVyYXRlQW5kQWRkUm93RGF0YSh0aGlzLnh5UG9zRGF0YVRhYmxlLCBudW1Db2x1bW5YWVBvcywge1xuICAgICAgMDogc2FtcGxlWCAtIHNhbXBsZVdpZHRoIC8gMixcbiAgICAgIDI6IHNhbXBsZVkgLSBzYW1wbGVIZWlnaHQgLyAyLFxuICAgIH0pO1xuICAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKHRoaXMueHlQb3NEYXRhVGFibGUsIG51bUNvbHVtblhZUG9zLCB7XG4gICAgICAwOiBzYW1wbGVYICsgc2FtcGxlV2lkdGggLyAyLFxuICAgICAgMjogc2FtcGxlWSAtIHNhbXBsZUhlaWdodCAvIDIsXG4gICAgfSk7XG4gICAgdGhpcy5nZW5lcmF0ZUFuZEFkZFJvd0RhdGEodGhpcy54eVBvc0RhdGFUYWJsZSwgbnVtQ29sdW1uWFlQb3MsIHtcbiAgICAgIDA6IHNhbXBsZVggKyBzYW1wbGVXaWR0aCAvIDIsXG4gICAgICAyOiBzYW1wbGVZICsgc2FtcGxlSGVpZ2h0IC8gMixcbiAgICB9KTtcbiAgICB0aGlzLmdlbmVyYXRlQW5kQWRkUm93RGF0YSh0aGlzLnh5UG9zRGF0YVRhYmxlLCBudW1Db2x1bW5YWVBvcywge1xuICAgICAgMDogc2FtcGxlWCAtIHNhbXBsZVdpZHRoIC8gMixcbiAgICAgIDI6IHNhbXBsZVkgKyBzYW1wbGVIZWlnaHQgLyAyLFxuICAgIH0pO1xuICAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKHRoaXMueHlQb3NEYXRhVGFibGUsIG51bUNvbHVtblhZUG9zLCB7XG4gICAgICAwOiBzYW1wbGVYIC0gc2FtcGxlV2lkdGggLyAyLFxuICAgICAgMjogc2FtcGxlWSAtIHNhbXBsZUhlaWdodCAvIDIsXG4gICAgfSk7XG5cbiAgICBpZiAoIXRoaXMucmVhbHRpbWVSb3dEYXRhQWRkZWQgJiYgIXRoaXMucmVhbHRpbWVQbG90QWN0aXZlKSB7XG4gICAgICB0aGlzLnJ0RGF0YVsnc2FtcGxlJ10gPSB7XG4gICAgICAgIHg6IHNhbXBsZVgsXG4gICAgICAgIHk6IHNhbXBsZVksXG4gICAgICAgIHdpZHRoOiBzYW1wbGVXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBzYW1wbGVIZWlnaHQsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIFRFU1Q6XG4gICAgbGV0IHRlc3RYOiBudW1iZXJbXSA9IFtdO1xuICAgIGxldCB0ZXN0WTogbnVtYmVyW10gPSBbXTtcblxuICAgIGlmIChkYXRhLlJld2FyZFN0YWdlICE9IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgXy5zaXplKGRhdGEuVGVzdEdyaWRJbmRleCk7IGkrKykge1xuICAgICAgICAvLyBJZiBTYW1lLURpZmZlcmVudCwgb25seSBzaG93IHRoZSBmaXJzdCB0ZXN0XG4gICAgICAgIGlmIChkYXRhLlNhbWVEaWZmZXJlbnQgPiAwIHx8IGRhdGEuTlJTVlAgPiAwKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBudW1EaXNwbGF5RWxlbXMrKztcbiAgICAgICAgaWYgKGRhdGEuTlJTVlAgPiAwKSB7XG4gICAgICAgICAgdGVzdFgucHVzaChkYXRhLlhHcmlkQ2VudGVyW21heFNhbXBsZUdyaWRJbmRleCBhcyBudW1iZXJdKTtcbiAgICAgICAgICB0ZXN0WS5wdXNoKFxuICAgICAgICAgICAgZGF0YS5WaWV3cG9ydFBpeGVsc1sxXSAtXG4gICAgICAgICAgICAgIChkYXRhLllHcmlkQ2VudGVyW21heFNhbXBsZUdyaWRJbmRleCBhcyBudW1iZXJdICsgZGF0YS5vZmZzZXR0b3ApXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZXN0WC5wdXNoKGRhdGEuWEdyaWRDZW50ZXJbZGF0YS5UZXN0R3JpZEluZGV4W2ldXSk7XG4gICAgICAgICAgdGVzdFkucHVzaChcbiAgICAgICAgICAgIGRhdGEuVmlld3BvcnRQaXhlbHNbMV0gLVxuICAgICAgICAgICAgICAoZGF0YS5ZR3JpZENlbnRlcltkYXRhLlRlc3RHcmlkSW5kZXhbaV1dICsgZGF0YS5vZmZzZXR0b3ApXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKHRoaXMueHlQb3NEYXRhVGFibGUsIG51bUNvbHVtblhZUG9zLCB7XG4gICAgICAgICAgMDogdGVzdFhbaV0gLSB0ZXN0V2lkdGggLyAyLFxuICAgICAgICAgIFtudW1EaXNwbGF5RWxlbXNdOiB0ZXN0WVtpXSAtIHRlc3RIZWlnaHQgLyAyLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUFuZEFkZFJvd0RhdGEodGhpcy54eVBvc0RhdGFUYWJsZSwgbnVtQ29sdW1uWFlQb3MsIHtcbiAgICAgICAgICAwOiB0ZXN0WFtpXSArIHRlc3RXaWR0aCAvIDIsXG4gICAgICAgICAgW251bURpc3BsYXlFbGVtc106IHRlc3RZW2ldIC0gdGVzdEhlaWdodCAvIDIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdlbmVyYXRlQW5kQWRkUm93RGF0YSh0aGlzLnh5UG9zRGF0YVRhYmxlLCBudW1Db2x1bW5YWVBvcywge1xuICAgICAgICAgIDA6IHRlc3RYW2ldICsgdGVzdFdpZHRoIC8gMixcbiAgICAgICAgICBbbnVtRGlzcGxheUVsZW1zXTogdGVzdFlbaV0gKyB0ZXN0SGVpZ2h0IC8gMixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKHRoaXMueHlQb3NEYXRhVGFibGUsIG51bUNvbHVtblhZUG9zLCB7XG4gICAgICAgICAgMDogdGVzdFhbaV0gLSB0ZXN0V2lkdGggLyAyLFxuICAgICAgICAgIFtudW1EaXNwbGF5RWxlbXNdOiB0ZXN0WVtpXSArIHRlc3RIZWlnaHQgLyAyLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUFuZEFkZFJvd0RhdGEodGhpcy54eVBvc0RhdGFUYWJsZSwgbnVtQ29sdW1uWFlQb3MsIHtcbiAgICAgICAgICAwOiB0ZXN0WFtpXSAtIHRlc3RXaWR0aCAvIDIsXG4gICAgICAgICAgW251bURpc3BsYXlFbGVtc106IHRlc3RZW2ldIC0gdGVzdEhlaWdodCAvIDIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghdGhpcy5yZWFsdGltZVJvd0RhdGFBZGRlZCAmJiAhdGhpcy5yZWFsdGltZVBsb3RBY3RpdmUpIHtcbiAgICAgICAgICBsZXQgdG1wID0ge1xuICAgICAgICAgICAgeDogdGVzdFhbaV0sXG4gICAgICAgICAgICB5OiB0ZXN0WVtpXSxcbiAgICAgICAgICAgIHdpZHRoOiB0ZXN0V2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHRlc3RIZWlnaHQsXG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLnJ0RGF0YVsndGVzdCddLnB1c2godG1wKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENIT0lDRTpcbiAgICBsZXQgY2hvaWNlWDogbnVtYmVyW10gPSBbXTtcbiAgICBsZXQgY2hvaWNlWTogbnVtYmVyW10gPSBbXTtcblxuICAgIGlmIChkYXRhLlJld2FyZFN0YWdlICE9IDAgJiYgZGF0YS5TYW1lRGlmZmVyZW50ID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfLnNpemUoZGF0YS5DaG9pY2VHcmlkSW5kZXgpOyBpKyspIHtcbiAgICAgICAgbnVtRGlzcGxheUVsZW1zKys7XG4gICAgICAgIGNob2ljZVgucHVzaChkYXRhLlhHcmlkQ2VudGVyW2RhdGEuQ2hvaWNlR3JpZEluZGV4W2ldXSk7XG4gICAgICAgIGNob2ljZVkucHVzaChcbiAgICAgICAgICBkYXRhLlZpZXdwb3J0UGl4ZWxzWzFdIC1cbiAgICAgICAgICAgIChkYXRhLllHcmlkQ2VudGVyW2RhdGEuQ2hvaWNlR3JpZEluZGV4W2ldXSArIGRhdGEub2Zmc2V0dG9wKVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKHRoaXMueHlQb3NEYXRhVGFibGUsIG51bUNvbHVtblhZUG9zLCB7XG4gICAgICAgICAgMDogY2hvaWNlWFtpXSAtIGNob2ljZVdpZHRoIC8gMixcbiAgICAgICAgICBbbnVtRGlzcGxheUVsZW1zXTogY2hvaWNlWVtpXSAtIGNob2ljZUhlaWdodCAvIDIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdlbmVyYXRlQW5kQWRkUm93RGF0YSh0aGlzLnh5UG9zRGF0YVRhYmxlLCBudW1Db2x1bW5YWVBvcywge1xuICAgICAgICAgIDA6IGNob2ljZVhbaV0gKyBjaG9pY2VXaWR0aCAvIDIsXG4gICAgICAgICAgW251bURpc3BsYXlFbGVtc106IGNob2ljZVlbaV0gLSBjaG9pY2VIZWlnaHQgLyAyLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUFuZEFkZFJvd0RhdGEodGhpcy54eVBvc0RhdGFUYWJsZSwgbnVtQ29sdW1uWFlQb3MsIHtcbiAgICAgICAgICAwOiBjaG9pY2VYW2ldICsgY2hvaWNlV2lkdGggLyAyLFxuICAgICAgICAgIFtudW1EaXNwbGF5RWxlbXNdOiBjaG9pY2VZW2ldICsgY2hvaWNlSGVpZ2h0IC8gMixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKHRoaXMueHlQb3NEYXRhVGFibGUsIG51bUNvbHVtblhZUG9zLCB7XG4gICAgICAgICAgMDogY2hvaWNlWFtpXSAtIGNob2ljZVdpZHRoIC8gMixcbiAgICAgICAgICBbbnVtRGlzcGxheUVsZW1zXTogY2hvaWNlWVtpXSArIGNob2ljZUhlaWdodCAvIDIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdlbmVyYXRlQW5kQWRkUm93RGF0YSh0aGlzLnh5UG9zRGF0YVRhYmxlLCBudW1Db2x1bW5YWVBvcywge1xuICAgICAgICAgIDA6IGNob2ljZVhbaV0gLSBjaG9pY2VXaWR0aCAvIDIsXG4gICAgICAgICAgW251bURpc3BsYXlFbGVtc106IGNob2ljZVlbaV0gLSBjaG9pY2VIZWlnaHQgLyAyLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyByZWFsdGltZSBub3QgYWN0aXZlXG4gICAgICAgIGlmICghdGhpcy5yZWFsdGltZVJvd0RhdGFBZGRlZCAmJiAhdGhpcy5yZWFsdGltZVBsb3RBY3RpdmUpIHtcbiAgICAgICAgICB0aGlzLnJ0RGF0YVsnY2hvaWNlJ10ucHVzaCh7XG4gICAgICAgICAgICB4OiBjaG9pY2VYW2ldLFxuICAgICAgICAgICAgeTogY2hvaWNlWVtpXSxcbiAgICAgICAgICAgIHdpZHRoOiBjaG9pY2VXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogY2hvaWNlSGVpZ2h0LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVhbHRpbWVSb3dEYXRhQWRkZWQgPSB0cnVlO1xuXG4gICAgbGV0IGZpeFhQb3M6IG51bWJlcltdID0gW107XG4gICAgbGV0IGZpeFlQb3M6IG51bWJlcltdID0gW107XG4gICAgbGV0IHRlc3RYUG9zOiBudW1iZXJbXVtdID0gW107XG4gICAgbGV0IHRlc3RZUG9zOiBudW1iZXJbXVtdID0gW107XG4gICAgbGV0IG51bVRhcmdldCA9IFswLCAwXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG91Y2hldmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgeFBvcyA9IHRvdWNoZXZlbnRbaV1bMF07XG4gICAgICB5UG9zID0gZGF0YS5WaWV3cG9ydFBpeGVsc1sxXSAtIHRvdWNoZXZlbnRbaV1bMV07XG5cbiAgICAgIGxldCB5RGF0YUluZGV4OiBudW1iZXI7XG4gICAgICBpZiAoaSAlIDIgPT0gMCkge1xuICAgICAgICB5RGF0YUluZGV4ID0gaSAvIDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB5RGF0YUluZGV4ID0gKGkgLSAxKSAvIDI7XG4gICAgICB9XG5cbiAgICAgIGlmICh4UG9zICE9IC0xKSB7XG4gICAgICAgIGxldCBhcnIgPSBuZXcgQXJyYXkobnVtQ29sdW1uWFlQb3MpO1xuICAgICAgICBhcnJbMF0gPSB4UG9zO1xuXG4gICAgICAgIGlmIChpICUgMiA9PSAwKSB7XG4gICAgICAgICAgZml4WFBvcy5wdXNoKHhQb3MpO1xuICAgICAgICAgIGZpeFlQb3MucHVzaCh5UG9zKTtcblxuICAgICAgICAgIGlmICh5RGF0YVt5RGF0YUluZGV4XSA9PSAxKSB7XG4gICAgICAgICAgICBhcnJbbnVtRGlzcGxheUVsZW1zICsgMV0gPSB5UG9zO1xuICAgICAgICAgICAgdGhpcy54eVBvc0RhdGFUYWJsZS5hZGRSb3dzKFthcnJdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJyW251bURpc3BsYXlFbGVtcyArIDJdID0geVBvcztcbiAgICAgICAgICAgIHRoaXMueHlQb3NEYXRhVGFibGUuYWRkUm93cyhbYXJyXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCB0ZXN0WFBvc0FycjogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgICBsZXQgdGVzdFlQb3NBcnI6IG51bWJlcltdID0gW107XG5cbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IF8uc2l6ZShkYXRhLlRlc3RHcmlkSW5kZXgpOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChkYXRhLlJlc3BvbnNlW3lEYXRhSW5kZXhdID09IGopIHtcbiAgICAgICAgICAgICAgdGVzdFhQb3NBcnIucHVzaCh4UG9zKTtcbiAgICAgICAgICAgICAgdGVzdFlQb3NBcnIucHVzaCh5UG9zKTtcbiAgICAgICAgICAgICAgbnVtVGFyZ2V0W2pdICs9IDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0ZXN0WFBvc0Fyci5wdXNoKDApO1xuICAgICAgICAgICAgICB0ZXN0WVBvc0Fyci5wdXNoKDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0ZXN0WFBvcy5wdXNoKHRlc3RYUG9zQXJyKTtcbiAgICAgICAgICAgIHRlc3RZUG9zLnB1c2godGVzdFlQb3NBcnIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh5RGF0YVt5RGF0YUluZGV4XSA9PSAxKSB7XG4gICAgICAgICAgICBhcnJbbnVtRGlzcGxheUVsZW1zICsgM10gPSB5UG9zO1xuICAgICAgICAgICAgdGhpcy54eVBvc0RhdGFUYWJsZS5hZGRSb3dzKFthcnJdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJyW251bURpc3BsYXlFbGVtcyArIDRdID0geVBvcztcbiAgICAgICAgICAgIHRoaXMueHlQb3NEYXRhVGFibGUuYWRkUm93cyhbYXJyXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBtZWFuRml4WFBvcyA9IF8ubWVhbihmaXhYUG9zKTtcbiAgICAgIGxldCBtZWFuRml4WVBvcyA9IF8ubWVhbihmaXhZUG9zKTtcbiAgICAgIGxldCBkaXN0Rml4WFBvcyA9IGZpeFhQb3MubWFwKChhOiBudW1iZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KE1hdGguYWJzKGEgLSBtZWFuRml4WFBvcyksIDIpO1xuICAgICAgfSk7XG4gICAgICBsZXQgZGlzdEZpeFlQb3MgPSBmaXhZUG9zLm1hcCgoYTogbnVtYmVyKSA9PiB7XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyhNYXRoLmFicyhhIC0gbWVhbkZpeFlQb3MpLCAyKTtcbiAgICAgIH0pO1xuICAgICAgbGV0IHN0ZGV2Rml4ID1cbiAgICAgICAgZGlzdEZpeFhQb3NcbiAgICAgICAgICAubWFwKChhOiBudW1iZXIsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGEgKyBkaXN0Rml4WVBvc1tpZHhdKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5yZWR1Y2UoKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYSArIGI7XG4gICAgICAgICAgfSwgMCkgLyBfLnNpemUoZGlzdEZpeFhQb3MpO1xuICAgICAgdGhpcy52aXRhbHMuc3RkZXZGaXggPSBzdGRldkZpeDtcblxuICAgICAgbGV0IHN0ZGV2VGVzdDogbnVtYmVyW10gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgXy5zaXplKGRhdGEuVGVzdEdyaWRJbmRleCk7IGorKykge1xuICAgICAgICBsZXQgYWxsVGVzdFhQb3MgPSB0ZXN0WFBvc1xuICAgICAgICAgIC5tYXAoKGE6IG51bWJlcltdKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYVtqXTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5maWx0ZXIoKGE6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGEgIT0gMDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbWVhblRlc3RYUG9zID1cbiAgICAgICAgICBhbGxUZXN0WFBvcy5yZWR1Y2UoKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYSArIGI7XG4gICAgICAgICAgfSwgMCkgLyBfLnNpemUoYWxsVGVzdFhQb3MpO1xuXG4gICAgICAgIGxldCBkaXN0VGVzdFhQb3MgPSBhbGxUZXN0WFBvcy5tYXAoKGE6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHJldHVybiBNYXRoLnBvdyhNYXRoLmFicyhhIC0gbWVhblRlc3RYUG9zKSwgMik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBhbGxUZXN0WVBvcyA9IHRlc3RZUG9zXG4gICAgICAgICAgLm1hcCgoYTogbnVtYmVyW10pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhW2pdO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmZpbHRlcigoYTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYSAhPSAwO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtZWFuVGVzdFlQb3MgPVxuICAgICAgICAgIGFsbFRlc3RZUG9zLnJlZHVjZSgoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhICsgYjtcbiAgICAgICAgICB9LCAwKSAvIF8uc2l6ZShhbGxUZXN0WVBvcyk7XG5cbiAgICAgICAgbGV0IGRpc3RUZXN0WVBvcyA9IGFsbFRlc3RZUG9zLm1hcCgoYTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgucG93KE1hdGguYWJzKGEgLSBtZWFuVGVzdFlQb3MpLCAyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3RkZXZUZXN0LnB1c2goXG4gICAgICAgICAgZGlzdFRlc3RYUG9zXG4gICAgICAgICAgICAubWFwKChhOiBudW1iZXIsIGk6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGEgKyBkaXN0VGVzdFlQb3NbaV0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5yZWR1Y2UoKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBhICsgYjtcbiAgICAgICAgICAgIH0sIDApIC8gXy5zaXplKGFsbFRlc3RYUG9zKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdGhpcy52aXRhbHMuc3RkZXZUZXN0ID0gc3RkZXZUZXN0O1xuICAgIH1cblxuICAgIHlEYXRhU21hbGwgPSB1dGlscy5zbW9vdGgoeURhdGEsIDUpO1xuICAgIHlEYXRhTGFyZ2UgPSB1dGlscy5zbW9vdGgoeURhdGEsIDEwMCk7XG5cbiAgICAvLyBDYWxjdWxhdGUgdGltZUVuZFxuICAgIGxldCB0aW1lRW5kOiBudW1iZXI7XG4gICAgaWYgKFxuICAgICAgXy5pc1VuZGVmaW5lZChkYXRhLlJlc3BvbnNlWFlUKSB8fFxuICAgICAgXy5zaXplKGRhdGEuUmVzcG9uc2VYWVQpIDwgMSB8fFxuICAgICAgXy5pc1VuZGVmaW5lZChkYXRhLlJlc3BvbnNlWFlUWzJdW18uc2l6ZShkYXRhLlJlc3BvbnNlWFlUWzJdKSAtIDFdKVxuICAgICkge1xuICAgICAgdGltZUVuZCA9IGRhdGEuRml4YXRpb25YWVRbMl1bXy5zaXplKGRhdGEuRml4YXRpb25YWVRbMl0pIC0gMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbWVFbmQgPSBkYXRhLlJlc3BvbnNlWFlUWzJdW18uc2l6ZShkYXRhLlJlc3BvbnNlWFlUWzJdKSAtIDFdO1xuICAgIH1cblxuICAgIC8vIFJGSURcbiAgICBsZXQgbnVtVHJpYWxzID0gXy5zaXplKHlEYXRhKTtcbiAgICBsZXQgbnVtUmVhZHMgPSBfLnNpemUoZGF0YS5SRklEVGFnKTtcbiAgICBudW1SRklEID0gXy5maWxsKEFycmF5KG51bVRyaWFscyksIDApO1xuICAgIHRoaXMudml0YWxzLnRhZ0NvdW50ID0ge307XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVJlYWRzOyBpKyspIHtcbiAgICAgIGlmIChfLmlzVW5kZWZpbmVkKHRoaXMudml0YWxzLnRhZ0NvdW50W2RhdGEuUkZJRFRhZ1tpXVsyXV0pKSB7XG4gICAgICAgIHRoaXMudml0YWxzLnRhZ0NvdW50W2RhdGEuUkZJRFRhZ1tpXVsyXV0gPSAwO1xuICAgICAgfVxuICAgICAgdGhpcy52aXRhbHMudGFnQ291bnRbZGF0YS5SRklEVGFnW2ldWzJdXSArPSAxO1xuICAgICAgbnVtUkZJRFtkYXRhLlJGSURUYWdbaV1bMF1dICs9IDE7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBfLnNpemUobnVtUkZJRCk7IGkrKykge1xuICAgICAgbnVtUkZJRFtpXSA9IG51bVJGSURbaV0gKyBudW1SRklEW2kgLSAxXTtcbiAgICB9XG5cbiAgICAvLyBBZGRpbmcgcmVzdCBvZiB0aGUgZGF0YVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgXy5zaXplKHlEYXRhKTsgaSsrKSB7XG4gICAgICBsZXQgdGltZUZpeCA9IGRhdGEuRml4YXRpb25YWVRbMl1baV07IC8vIGluIG1pbGxpc2Vjb25kc1xuICAgICAgaWYgKHRpbWVGaXggPCAwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgdCA9IG5ldyBEYXRlKGZpbGUuZGF0ZVNhdmVkISk7XG4gICAgICB0LnNldFRpbWUodC5nZXRUaW1lKCkgLSAodGltZUVuZCAtIHRpbWVGaXgpKTtcblxuICAgICAgdGhpcy5wZXJmRGF0YVRhYmxlLmFkZFJvd3MoW1t4RGF0YVtpXSwgeURhdGFTbWFsbFtpXSwgeURhdGFMYXJnZVtpXV1dKTtcbiAgICAgIHRoaXMuY3VtdWxEYXRhVGFibGUuYWRkUm93cyhbXG4gICAgICAgIFt0LCBudW1Ub3RhbFtpXSwgbnVtQ29ycmVjdFtpXSwgbnVtUkZJRFtpXV0sXG4gICAgICBdKTtcbiAgICB9XG4gICAgdGhpcy5mb3JtYXREYXRlKHRoaXMuY3VtdWxEYXRhVGFibGUsIDApO1xuICB9Ly9GVU5DVElPTiBsb2FkUGVyZm9ybWFuY2VEYXRhXG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZUFuZEFkZFJvd0RhdGEoXG4gICAgdGFyZ2V0OiBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUsXG4gICAgbnVtQ29sdW1uczogbnVtYmVyLFxuICAgIGRhdGE6IFJlY29yZDxudW1iZXIsIG51bWJlciB8IHN0cmluZz5cbiAgKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2RhdGEnLCBkYXRhKTtcbiAgICBsZXQgYXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db2x1bW5zOyBpKyspIHtcbiAgICAgIGlmIChfLmhhcyhkYXRhLCBpKSkge1xuICAgICAgICBhcnIucHVzaChkYXRhW2ldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFyci5wdXNoKG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnYXJyOicsIGFycik7XG4gICAgdGFyZ2V0LmFkZFJvd3MoW2Fycl0pO1xuICB9Ly9GVU5DVElPTiBnZW5lcmF0ZUFuZEFkZFJvd0RhdGFcblxuICAvLyBUT0RPOiBkZWFsIHdpdGggY2FzZSB3aGVyZSBTYW1wbGVTY2VuZXNbMF0uT0JKRUNUU1tmaXJzdEtleV0uc2l6ZUluY2hlcyBpcyBhblxuICAvLyBBcnJheSBvZiBhcnJheXMgLS0gaS5lLiBzY2VuZSBtb3ZpZVxuICBwcml2YXRlIGdldFNhbXBsZVdpZHRoKGZpbGVEYXRhOiBMaXZlcGxvdERhdGFUeXBlKSB7XG4gICAgbGV0IHNhbXBsZVdpZHRoID0gMDtcbiAgICBpZiAoXy5zaXplKGZpbGVEYXRhLlNhbXBsZVNjZW5lc1swXS5JTUFHRVMuaW1hZ2VpZHgpID4gMCkge1xuICAgICAgaWYgKF8uaXNBcnJheShmaWxlRGF0YS5TYW1wbGVTY2VuZXNbMF0uSU1BR0VTLnNpemVJbmNoZXMpKSB7XG4gICAgICAgIGxldCBtYXhTaXplSW5jaGVzID0gXy5tYXgoZmlsZURhdGEuU2FtcGxlU2NlbmVzWzBdLklNQUdFUy5zaXplSW5jaGVzKTtcbiAgICAgICAgaWYgKF8uaXNOdW1iZXIobWF4U2l6ZUluY2hlcykpIHtcbiAgICAgICAgICBzYW1wbGVXaWR0aCA9IG1heFNpemVJbmNoZXMgKiBmaWxlRGF0YS5WaWV3cG9ydFBQSTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignU2FtcGxlU2NlbmVzWzBdLklNQUdFUy5zaXplSW5jaGVzIGlzIG5vdCBhbiBhcnJheS4gUGxlYXNlIGZpeCEnKTtcbiAgICAgICAgc2FtcGxlV2lkdGggPSBmaWxlRGF0YS5TYW1wbGVTY2VuZXNbMF0uSU1BR0VTLnNpemVJbmNoZXMgKiBmaWxlRGF0YS5WaWV3cG9ydFBQSTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGZpcnN0S2V5ID0gXy5maW5kS2V5KGZpbGVEYXRhLlNhbXBsZVNjZW5lc1swXS5PQkpFQ1RTKTtcbiAgICAgIGlmIChfLmlzU3RyaW5nKGZpcnN0S2V5KSkge1xuICAgICAgICBsZXQgbWF4U2l6ZUluY2hlcyA9IF8ubWF4KFxuICAgICAgICAgIGZpbGVEYXRhLlNhbXBsZVNjZW5lc1swXS5PQkpFQ1RTW2ZpcnN0S2V5XS5zaXplSW5jaGVzXG4gICAgICAgICk7XG4gICAgICAgIGlmIChfLmlzTnVtYmVyKG1heFNpemVJbmNoZXMpKSB7XG4gICAgICAgICAgc2FtcGxlV2lkdGggPSBtYXhTaXplSW5jaGVzICogZmlsZURhdGEuVmlld3BvcnRQUEk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2ZpcnN0S2V5IG9mIFNhbXBsZVNjZW5lc1swXS5PQkpFQ1RTIGlzIG5vdCBvZiB0eXBlIHN0cmluZycpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2FtcGxlV2lkdGg7XG4gIH0vL0ZVTkNUSU9OIGdldFNhbXBsZVdpZHRoXG5cbiAgcHJpdmF0ZSBnZXRUZXN0V2lkdGgoZmlsZURhdGE6IExpdmVwbG90RGF0YVR5cGUpIHtcbiAgICBsZXQgdGVzdFdpZHRoID0gMDtcblxuICAgIGlmIChmaWxlRGF0YS5UZXN0U2NlbmVzWzBdLklNQUdFUy5pbWFnZWlkeC5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoXy5pc0FycmF5KGZpbGVEYXRhLlRlc3RTY2VuZXNbMF0uSU1BR0VTLnNpemVJbmNoZXMpKSB7XG4gICAgICAgIGxldCBtYXhTaXplSW5jaGVzID0gXy5tYXgoZmlsZURhdGEuVGVzdFNjZW5lc1swXS5JTUFHRVMuc2l6ZUluY2hlcyk7XG4gICAgICAgIGlmIChfLmlzTnVtYmVyKG1heFNpemVJbmNoZXMpKSB7XG4gICAgICAgICAgdGVzdFdpZHRoID0gbWF4U2l6ZUluY2hlcyAqIGZpbGVEYXRhLlZpZXdwb3J0UFBJO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1Rlc3RTY2VuZXNbMF0uSU1BR0VTLnNpemVJbmNoZXMgaXMgbm90IG9mIHR5cGUgbnVtYmVyJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1Rlc3RTY2VuZXNbMF0uSU1BR0VTLnNpemVJbmNoZXMgaXMgbm90IGFuIGFycmF5LiBQbGVhc2UgZml4IScpO1xuICAgICAgICB0ZXN0V2lkdGggPSBmaWxlRGF0YS5UZXN0U2NlbmVzWzBdLklNQUdFUy5zaXplSW5jaGVzICogZmlsZURhdGEuVmlld3BvcnRQUEk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBmaXJzdEtleSA9IF8uZmluZEtleShmaWxlRGF0YS5UZXN0U2NlbmVzWzBdLk9CSkVDVFMpO1xuICAgICAgaWYgKF8uaXNTdHJpbmcoZmlyc3RLZXkpKSB7XG4gICAgICAgIGxldCBtYXhTaXplSW5jaGVzID0gXy5tYXgoXG4gICAgICAgICAgZmlsZURhdGEuVGVzdFNjZW5lc1swXS5PQkpFQ1RTW2ZpcnN0S2V5XS5zaXplSW5jaGVzXG4gICAgICAgICk7XG4gICAgICAgIGlmIChfLmlzTnVtYmVyKG1heFNpemVJbmNoZXMpKSB7XG4gICAgICAgICAgdGVzdFdpZHRoID0gbWF4U2l6ZUluY2hlcyAqIGZpbGVEYXRhLlZpZXdwb3J0UFBJO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2ZpcnN0S2V5IG9mIFRlc3RTY2VuZXNbMF0uT0JKRUNUUyBpcyBub3Qgb2YgdHlwZSBzdHJpbmcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghXy5pc1VuZGVmaW5lZChmaWxlRGF0YS5OUlNWUCkgJiYgZmlsZURhdGEuTlJTVlAgPiAwKSB7XG4gICAgICB0ZXN0V2lkdGggPSBmaWxlRGF0YS5TYW1wbGVGaXhhdGlvblNpemVJbmNoZXMgKiBmaWxlRGF0YS5WaWV3cG9ydFBQSTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVzdFdpZHRoO1xuICB9Ly9GVU5DVElPTiBnZXRUZXN0V2lkdGhcblxuICBwcml2YXRlIGdldEZpeGF0aW9uV2lkdGgoZmlsZURhdGE6IExpdmVwbG90RGF0YVR5cGUsIHNhbXBsZVdpZHRoOiBudW1iZXIpIHtcbiAgICBsZXQgZml4YXRpb25XaWR0aCA9IDA7XG5cbiAgICBpZiAoZmlsZURhdGEuRml4YXRpb25Vc2VzU2FtcGxlIDw9IDApIHtcbiAgICAgIGZpeGF0aW9uV2lkdGggPSBmaWxlRGF0YS5GaXhhdGlvblNpemVJbmNoZXMgKiBmaWxlRGF0YS5WaWV3cG9ydFBQSTtcbiAgICB9IGVsc2Uge1xuICAgICAgZml4YXRpb25XaWR0aCA9IHNhbXBsZVdpZHRoO1xuICAgIH1cbiAgICByZXR1cm4gZml4YXRpb25XaWR0aDtcbiAgfS8vRlVOQ1RJT04gZ2V0Rml4YXRpb25XaWR0aFxuXG4gIHByaXZhdGUgZ2V0Q2hvaWNlV2lkdGgoZmlsZURhdGE6IExpdmVwbG90RGF0YVR5cGUpIHtcbiAgICBsZXQgY2hvaWNlV2lkdGggPSAwO1xuICAgIGlmICghXy5pc1VuZGVmaW5lZChmaWxlRGF0YS5TYW1lRGlmZmVyZW50KSAmJiBmaWxlRGF0YS5TYW1lRGlmZmVyZW50ID4gMCkge1xuICAgICAgY2hvaWNlV2lkdGggPSBmaWxlRGF0YS5DaG9pY2VTaXplSW5jaGVzICogZmlsZURhdGEuVmlld3BvcnRQUEk7XG4gICAgfVxuICAgIHJldHVybiBjaG9pY2VXaWR0aDtcbiAgfS8vRlVOQ1RJT04gZ2V0Q2hvaWNlV2lkdGhcblxuICBwcml2YXRlIGxvYWRPYmpQZXJmRGF0YShkYXRhOiBMaXZlcGxvdERhdGFUeXBlKSB7XG4gICAgdGhpcy5vYmpQZXJmRGF0YVRhYmxlLnJlbW92ZVJvd3MoXG4gICAgICAwLFxuICAgICAgdGhpcy5vYmpQZXJmRGF0YVRhYmxlLmdldE51bWJlck9mUm93cygpXG4gICAgKTtcblxuICAgIGxldCBsZW5TYW1wbGVPYmo6IG51bWJlcjtcbiAgICBpZiAoZGF0YS5SZXdhcmRTdGFnZSA9PSAxKSB7XG4gICAgICBsZXQgc2FtcGxlT2JqID0gW107XG4gICAgICBpZiAoZGF0YS5OVHJpYWxzUGVyQmFnQmxvY2sgPiA1MDAwKSB7XG4gICAgICAgIHNhbXBsZU9iai5wdXNoKGRhdGEuSW1hZ2VCYWdzU2FtcGxlWzBdLnNwbGl0KCcvJylbNV0pO1xuICAgICAgICB0aGlzLm9ialBlcmZEYXRhVGFibGUuYWRkUm93KFtzYW1wbGVPYmpbMF0sIDBdKTtcbiAgICAgICAgbGVuU2FtcGxlT2JqID0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgXy5zaXplKGRhdGEuSW1hZ2VCYWdzU2FtcGxlKTsgaSsrKSB7XG4gICAgICAgICAgc2FtcGxlT2JqLnB1c2goZGF0YS5JbWFnZUJhZ3NTYW1wbGVbaV0uc3BsaXQoJy8nKVs1XSk7XG4gICAgICAgICAgdGhpcy5vYmpQZXJmRGF0YVRhYmxlLmFkZFJvdyhbc2FtcGxlT2JqW2ldLCAwXSk7XG4gICAgICAgIH1cbiAgICAgICAgbGVuU2FtcGxlT2JqID0gXy5zaXplKHNhbXBsZU9iaik7XG4gICAgICB9XG5cbiAgICAgIGxldCBORGlmZk9ialBlcmYgPSBfLmZpbGwoQXJyYXkobGVuU2FtcGxlT2JqKSwgMCk7XG4gICAgICBsZXQgTkRpZmZPYmogPSBfLmZpbGwoQXJyYXkobGVuU2FtcGxlT2JqKSwgMCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF8uc2l6ZShkYXRhLlNhbXBsZVswXSk7IGkrKykge1xuICAgICAgICAvLyBGb3IgaSB0cmlhbHNcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW5TYW1wbGVPYmo7IGorKykge1xuICAgICAgICAgIC8vIElmIHNhbXBsZSB3YXMgdGhhdCBvYmplY3RcbiAgICAgICAgICBpZiAoZGF0YS5TYW1wbGVCYWdJZHhbZGF0YS5TYW1wbGVbMF1baV1dID09IGopIHtcbiAgICAgICAgICAgIE5EaWZmT2JqW2pdICs9IDE7XG4gICAgICAgICAgICAvLyBJZiBjb3JyZWN0XG4gICAgICAgICAgICBpZiAoZGF0YS5SZXNwb25zZVtpXSA9PSBkYXRhLkNvcnJlY3RJdGVtW2ldKSB7XG4gICAgICAgICAgICAgIE5EaWZmT2JqUGVyZltqXSArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLm9ialBlcmZEYXRhVGFibGUuc2V0VmFsdWUoaiwgMSwgTkRpZmZPYmpQZXJmW2pdIC8gTkRpZmZPYmpbal0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9Ly9GVU5DVElPTiBsb2FkT2JqUGVyZkRhdGFcblxuICBwcml2YXRlIGxvYWRDaG9pY2VEYXRhKGRhdGE6IExpdmVwbG90RGF0YVR5cGUpIHtcbiAgICB0aGlzLmNob2ljZURhdGFUYWJsZS5yZW1vdmVSb3dzKDAsIHRoaXMuY2hvaWNlRGF0YVRhYmxlLmdldE51bWJlck9mUm93cygpKTtcblxuICAgIGlmIChkYXRhLlJld2FyZFN0YWdlICE9IDApIHtcbiAgICAgIC8vIGxldCBwb3NzaWJsZVJlc3AgPSBfLmZpbGwoQXJyYXkoXy5zaXplKGRhdGEuT2JqZWN0R3JpZEluZGV4KSksIDApO1xuICAgICAgbGV0IHBvc3NpYmxlUmVzcCA9IFtdO1xuXG4gICAgICBpZiAoXG4gICAgICAgIF8uc2l6ZShkYXRhLk9iamVjdEdyaWRJbmRleCkgIT0gMCAmJlxuICAgICAgICAoXy5pc1VuZGVmaW5lZChkYXRhLk5UcmlhbHNQZXJCYWdCbG9jaykgfHxcbiAgICAgICAgICBkYXRhLk5UcmlhbHNQZXJCYWdCbG9jayA8IDEwMDApXG4gICAgICApIHtcbiAgICAgICAgbGV0IG9iakdyaWRJbmRleCA9IF8uY2xvbmVEZWVwKGRhdGEuT2JqZWN0R3JpZEluZGV4KTtcbiAgICAgICAgb2JqR3JpZEluZGV4LnNvcnQoKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGFsbGluZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF8uc2l6ZShvYmpHcmlkSW5kZXgpOyBpKyspIHtcbiAgICAgICAgICAvLyBhbGxpbmQucHVzaChfLmZpbmRJbmRleChkYXRhLk9iamVjdEdyaWRJbmRleCwgb2JqR3JpZEluZGV4W2ldKSk7XG4gICAgICAgICAgYWxsaW5kLnB1c2goZGF0YS5PYmplY3RHcmlkSW5kZXguaW5kZXhPZihvYmpHcmlkSW5kZXhbaV0pKTtcbiAgICAgICAgICB0aGlzLmNob2ljZURhdGFUYWJsZS5hZGRSb3coW1xuICAgICAgICAgICAgZGF0YS5JbWFnZUJhZ3NTYW1wbGVbYWxsaW5kW2ldXS5zcGxpdCgnLycpWzVdLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICBdKTtcbiAgICAgICAgICBwb3NzaWJsZVJlc3AucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfLnNpemUoZGF0YS5UZXN0R3JpZEluZGV4KTsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5jaG9pY2VEYXRhVGFibGUuYWRkUm93KFsnY2hvaWNlJyArIChpICsgMSksIDBdKTtcbiAgICAgICAgICBwb3NzaWJsZVJlc3AucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgTkRpZmZDaG9pY2UgPSBfLmZpbGwoQXJyYXkoXy5zaXplKHBvc3NpYmxlUmVzcCkpLCAwKTtcbiAgICAgIGxldCBOQWxsQ2hvaWNlID0gMDtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfLnNpemUoZGF0YS5SZXNwb25zZSk7IGkrKykge1xuICAgICAgICBpZiAoZGF0YS5SZXNwb25zZVtpXSAhPSAtMSkge1xuICAgICAgICAgIE5BbGxDaG9pY2UrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgXy5zaXplKHBvc3NpYmxlUmVzcCk7IGorKykge1xuICAgICAgICAgIGlmIChkYXRhLlJlc3BvbnNlW2ldID09IHBvc3NpYmxlUmVzcFtqXSAmJiBkYXRhLlJlc3BvbnNlW2ldICE9IC0xKSB7XG4gICAgICAgICAgICBORGlmZkNob2ljZVtqXSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmNob2ljZURhdGFUYWJsZS5zZXRWYWx1ZShqLCAxLCBORGlmZkNob2ljZVtqXSAvIE5BbGxDaG9pY2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hvaWNlRGF0YVRhYmxlLmFkZFJvdyhbJ291dHNpZGUgRml4JywgMF0pO1xuICAgICAgdGhpcy5jaG9pY2VEYXRhVGFibGUuYWRkUm93KFsnaW5zaWRlIEZpeCcsIDBdKTtcblxuICAgICAgbGV0IE5EaWZmQ2hvaWNlID0gXy5maWxsKEFycmF5KDIpLCAwKTtcbiAgICAgIGxldCBOQWxsQ2hvaWNlID0gMDtcbiAgICAgIGxldCB5RGF0YSA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF8uc2l6ZShkYXRhLkNvcnJlY3RJdGVtKTsgaSsrKSB7XG4gICAgICAgIGlmIChkYXRhLkNvcnJlY3RJdGVtW2ldID09IGRhdGEuUmVzcG9uc2VbaV0pIHtcbiAgICAgICAgICB5RGF0YS5wdXNoKDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHlEYXRhLnB1c2goMCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfLnNpemUoeURhdGEpOyBpKyspIHtcbiAgICAgICAgTkFsbENob2ljZSsrO1xuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMjsgaisrKSB7XG4gICAgICAgICAgaWYgKHlEYXRhW2ldID09IGopIHtcbiAgICAgICAgICAgIE5EaWZmQ2hvaWNlW2pdICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuY2hvaWNlRGF0YVRhYmxlLnNldFZhbHVlKGosIDEsIE5EaWZmQ2hvaWNlW2pdIC8gTkFsbENob2ljZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0vL0ZVTkNUSU9OIGxvYWRDaG9pY2VEYXRhXG5cbiAgcHJpdmF0ZSBsb2FkUmV3YXJkRGF0YShkYXRhOiBMaXZlcGxvdERhdGFUeXBlKSB7XG4gICAgdGhpcy5yZXdhcmREYXRhVGFibGUucmVtb3ZlUm93cygwLCB0aGlzLnJld2FyZERhdGFUYWJsZS5nZXROdW1iZXJPZlJvd3MoKSk7XG5cbiAgICBsZXQgbnJld2FyZEFycjogbnVtYmVyW10gPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGRhdGEuTlJld2FyZE1heDsgaSsrKSB7XG4gICAgICBucmV3YXJkQXJyLnB1c2goMCk7XG4gICAgfVxuXG4gICAgZGF0YS5OUmV3YXJkLmZvckVhY2goKGVsZW06IG51bWJlcikgPT4ge1xuICAgICAgbnJld2FyZEFycltlbGVtXSsrO1xuICAgIH0pO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBucmV3YXJkQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnJld2FyZERhdGFUYWJsZS5hZGRSb3coW2kudG9TdHJpbmcoKSwgbnJld2FyZEFycltpXV0pO1xuICAgIH1cbiAgfS8vRlVOQ1RJT04gbG9hZFJld2FyZERhdGFcblxuICBwcml2YXRlIGxvYWRIZWFsdGhEYXRhKGRhdGE6IExpdmVwbG90RGF0YVR5cGUpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnW2xvYWRIZWFsdGhEYXRhOjpmaWxlRGF0YV0nLCBkYXRhKTtcbiAgICB0aGlzLmhlYWx0aERhdGFUYWJsZS5yZW1vdmVSb3dzKDAsIHRoaXMuaGVhbHRoRGF0YVRhYmxlLmdldE51bWJlck9mUm93cygpKTtcblxuICAgIGlmIChkYXRhLlJld2FyZFN0YWdlID4gMCkge1xuICAgICAgY29uc3QgbGFzdElkeCA9IE9iamVjdC5rZXlzKGRhdGEuVFNlcXVlbmNlQWN0dWFsQ2xpcCkubGVuZ3RoIC0gMTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLlRTZXF1ZW5jZUFjdHVhbENsaXBbbGFzdElkeF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGR0OiBhbnk7XG4gICAgICAgIGxldCBkdDI6IGFueTtcbiAgICAgICAgbGV0IHNhbXBsZUNtZEludGVydmFsOiBhbnk7XG4gICAgICAgIGxldCBzYW1wbGVDbWRPZmZJbnRlcnZhbDogYW55O1xuICAgICAgICBsZXQgZXllVHJhY2tlclNhbXBsZUludGVydmFsOiBhbnk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoZGF0YS5UU2VxdWVuY2VBY3R1YWxDbGlwW2xhc3RJZHhdW2ldIDwgMCkge1xuICAgICAgICAgICAgZHQgPSBudWxsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkdCA9XG4gICAgICAgICAgICAgIGRhdGEuVFNlcXVlbmNlQWN0dWFsQ2xpcFtsYXN0SWR4XVtpXSAtXG4gICAgICAgICAgICAgIGRhdGEuVFNlcXVlbmNlRGVzaXJlZENsaXBbbGFzdElkeF1baV07XG4gICAgICAgICAgICBkdCA9IE1hdGguYWJzKE1hdGgucm91bmQoZHQpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIGR0ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKGRhdGEuVFNlcXVlbmNlQWN0dWFsQ2xpcFsxXVtpXSA8IDApIHtcbiAgICAgICAgICAgIGR0MiA9IG51bGw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGR0MiA9XG4gICAgICAgICAgICAgIGRhdGEuVFNlcXVlbmNlQWN0dWFsQ2xpcFsxXVtpXSAtIGRhdGEuVFNlcXVlbmNlRGVzaXJlZENsaXBbMV1baV07XG4gICAgICAgICAgICBkdDIgPSBNYXRoLmFicyhNYXRoLnJvdW5kKGR0MikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgZHQyID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgZGF0YS5TYW1wbGVDb21tYW5kUmV0dXJuVGltZVtpXSA9PSBudWxsIHx8XG4gICAgICAgICAgICBkYXRhLlNhbXBsZUNvbW1hbmRSZXR1cm5UaW1lW2ldIDwgMCB8fFxuICAgICAgICAgICAgZGF0YS5TYW1wbGVDb21tYW5kUmV0dXJuVGltZVtpXSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBzYW1wbGVDbWRJbnRlcnZhbCA9IG51bGw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNhbXBsZUNtZEludGVydmFsID1cbiAgICAgICAgICAgICAgZGF0YS5TYW1wbGVDb21tYW5kUmV0dXJuVGltZVtpXSAtIGRhdGEuU2FtcGxlU3RhcnRUaW1lW2ldO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgc2FtcGxlQ21kSW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBkYXRhLlNhbXBsZUNvbW1hbmRPZmZSZXR1cm5UaW1lW2ldID09IG51bGwgfHxcbiAgICAgICAgICAgIGRhdGEuU2FtcGxlQ29tbWFuZE9mZlJldHVyblRpbWVbaV0gPCAwIHx8XG4gICAgICAgICAgICBkYXRhLlNhbXBsZUNvbW1hbmRPZmZSZXR1cm5UaW1lW2ldID09PSB1bmRlZmluZWRcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHNhbXBsZUNtZE9mZkludGVydmFsID0gbnVsbDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2FtcGxlQ21kT2ZmSW50ZXJ2YWwgPVxuICAgICAgICAgICAgICBkYXRhLlNhbXBsZUNvbW1hbmRPZmZSZXR1cm5UaW1lW2ldIC0gZGF0YS5FbmRUaW1lW2ldO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgc2FtcGxlQ21kT2ZmSW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBleWVUcmFja2VyU2FtcGxlSW50ZXJ2YWwgPSBkYXRhLkV5ZXRyYWNrZXJTYW1wbGVJbnRlcnZhbFtpXTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgZXllVHJhY2tlclNhbXBsZUludGVydmFsID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGVhbHRoRGF0YVRhYmxlLmFkZFJvd3MoW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBzYW1wbGVDbWRJbnRlcnZhbCxcbiAgICAgICAgICAgIHNhbXBsZUNtZE9mZkludGVydmFsLFxuICAgICAgICAgICAgZHQsXG4gICAgICAgICAgICBkdDIsXG4gICAgICAgICAgICBleWVUcmFja2VyU2FtcGxlSW50ZXJ2YWwsXG4gICAgICAgICAgXSxcbiAgICAgICAgXSk7XG4gICAgICB9XG4gICAgfVxuICB9Ly9GVU5DVElPTiBsb2FkSGVhbHRoRGF0YVxuXG4gIHByaXZhdGUgZHJhd1BlcmZvcm1hbmNlUGxvdChmaWxlOiBGaWxlVHlwZSkge1xuICAgIGxldCBudW1Sb3dzID0gdGhpcy5wZXJmRGF0YVRhYmxlLmdldE51bWJlck9mUm93cygpO1xuICAgIHRoaXMublRyaWFscyA9IG51bVJvd3M7XG4gICAgbGV0IHBlcmZGaWx0ZXJTdGF0ZTogYW55ID0gdGhpcy5wZXJmRmlsdGVyLmdldFN0YXRlKCk7XG5cbiAgICAvLyB1cGRhdGluZyBwZXJmRmlsdGVyXG4gICAgaWYgKGZpbGUuZGF0YUNoYW5nZWQgJiYgIWZpbGUuZmlsZUNoYW5nZWQpIHtcbiAgICAgIGlmIChudW1Sb3dzIDw9IDEwMCkge1xuICAgICAgICAvLyBleHBhbmQgd2luZG93IHNpemUgYXV0b21hdGljYWxseSB1cCB0byAxMDBcbiAgICAgICAgcGVyZkZpbHRlclN0YXRlLnJhbmdlLnN0YXJ0ID0gMDtcbiAgICAgICAgcGVyZkZpbHRlclN0YXRlLnJhbmdlLmVuZCA9IG51bVJvd3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZFRyaWFscyA9IG51bVJvd3MgLSBfLnNpemUoZmlsZS5kYXRhPy5GaXhhdGlvbkdyaWRJbmRleCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkdHJpYWxzJywgZFRyaWFscyk7XG4gICAgICAgIHBlcmZGaWx0ZXJTdGF0ZS5yYW5nZS5zdGFydCA9IG51bVJvd3MgLSAxMDA7XG4gICAgICAgIHBlcmZGaWx0ZXJTdGF0ZS5yYW5nZS5lbmQgPSBudW1Sb3dzO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlQ2hhbmdlZCkge1xuICAgICAgbGV0IGRTbGlkZXIgPSAxMDA7XG4gICAgICBwZXJmRmlsdGVyU3RhdGUucmFuZ2Uuc3RhcnQgPSBudW1Sb3dzIC0gZFNsaWRlcjtcbiAgICAgIHBlcmZGaWx0ZXJTdGF0ZS5yYW5nZS5lbmQgPSBudW1Sb3dzO1xuICAgICAgaWYgKHBlcmZGaWx0ZXJTdGF0ZS5yYW5nZS5zdGFydCA8IDApIHtcbiAgICAgICAgcGVyZkZpbHRlclN0YXRlLnJhbmdlLnN0YXJ0ID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnBlcmZQbG90LnNldE9wdGlvbnModGhpcy5wZXJmUGxvdE9wdGlvbnMpO1xuICAgIHRoaXMucGVyZkZpbHRlci5zZXRTdGF0ZSh7XG4gICAgICByYW5nZToge1xuICAgICAgICBzdGFydDogcGVyZkZpbHRlclN0YXRlLnJhbmdlLnN0YXJ0LFxuICAgICAgICBlbmQ6IHBlcmZGaWx0ZXJTdGF0ZS5yYW5nZS5lbmQsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHRoaXMucGVyZkRhc2hib2FyZC5kcmF3KHRoaXMucGVyZkRhdGFUYWJsZSk7XG4gIH0vL0ZVTkNUSU9OIGRyYXdQZXJmb3JtYW5jZVBsb3RcblxuICBwcml2YXRlIGRyYXdIZWFsdGhQbG90KGZpbGU6IEZpbGVUeXBlKSB7XG4gICAgbGV0IG51bVJvd3MgPSB0aGlzLmhlYWx0aERhdGFUYWJsZS5nZXROdW1iZXJPZlJvd3MoKTtcbiAgICAvLyBjb25zb2xlLmxvZygnW2RyYXdIZWFsdGhQbG90OjpudW1Sb3dzXTonLCBudW1Sb3dzKTtcbiAgICBsZXQgaGVhbHRoRmlsdGVyU3RhdGU6IGFueSA9IHRoaXMuaGVhbHRoRmlsdGVyLmdldFN0YXRlKCk7XG4gICAgLy8gY29uc29sZS5sb2coJ1tkcmF3SGVhbHRoUGxvdDo6aGVhbHRoRmlsdGVyU3RhdGVdOicsIGhlYWx0aEZpbHRlclN0YXRlKTtcblxuICAgIGlmIChmaWxlLmRhdGFDaGFuZ2VkICYmICFmaWxlLmZpbGVDaGFuZ2VkKSB7XG4gICAgICBpZiAobnVtUm93cyA8PSAxMDApIHtcbiAgICAgICAgaGVhbHRoRmlsdGVyU3RhdGUucmFuZ2Uuc3RhcnQgPSAwO1xuICAgICAgICBoZWFsdGhGaWx0ZXJTdGF0ZS5yYW5nZS5lbmQgPSBudW1Sb3dzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVhbHRoRmlsdGVyU3RhdGUucmFuZ2Uuc3RhcnQgPSBudW1Sb3dzIC0gMTAwO1xuICAgICAgICBoZWFsdGhGaWx0ZXJTdGF0ZS5yYW5nZS5lbmQgPSBudW1Sb3dzO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlQ2hhbmdlZCkge1xuICAgICAgbGV0IGRTbGlkZXIgPSAxMDA7XG4gICAgICBoZWFsdGhGaWx0ZXJTdGF0ZS5yYW5nZS5zdGFydCA9IG51bVJvd3MgLSBkU2xpZGVyO1xuICAgICAgaGVhbHRoRmlsdGVyU3RhdGUucmFuZ2UuZW5kID0gbnVtUm93cztcbiAgICAgIGlmIChoZWFsdGhGaWx0ZXJTdGF0ZS5yYW5nZS5zdGFydCA8IDApIHtcbiAgICAgICAgaGVhbHRoRmlsdGVyU3RhdGUucmFuZ2Uuc3RhcnQgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaGVhbHRoUGxvdC5zZXRPcHRpb25zKHRoaXMuaGVhbHRoUGxvdE9wdGlvbnMpO1xuICAgIHRoaXMuaGVhbHRoRmlsdGVyLnNldFN0YXRlKHtcbiAgICAgIHJhbmdlOiB7XG4gICAgICAgIHN0YXJ0OiBoZWFsdGhGaWx0ZXJTdGF0ZS5yYW5nZS5zdGFydCxcbiAgICAgICAgZW5kOiBoZWFsdGhGaWx0ZXJTdGF0ZS5yYW5nZS5lbmQsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHRoaXMuaGVhbHRoRGFzaGJvYXJkLmRyYXcodGhpcy5oZWFsdGhEYXRhVGFibGUpO1xuICB9Ly9GVU5DVElPTiBkcmF3SGVhbHRoUGxvdFxuXG4gIHByaXZhdGUgZHJhd1RyaWFsUGxvdChmaWxlOiBGaWxlVHlwZSkge1xuICAgIGxldCB0cmlhbEZpbHRlclN0YXRlOiBhbnkgPSB0aGlzLnRyaWFsRmlsdGVyLmdldFN0YXRlKCk7XG4gICAgbGV0IHRtaW4gPSBuZXcgRGF0ZSh0aGlzLmN1bXVsRGF0YVRhYmxlLmdldENvbHVtblJhbmdlKDApLm1pbik7XG4gICAgbGV0IHRtYXggPSBuZXcgRGF0ZSh0aGlzLmN1bXVsRGF0YVRhYmxlLmdldENvbHVtblJhbmdlKDApLm1heCk7XG5cbiAgICBpZiAoZmlsZS5kYXRhQ2hhbmdlZCB8fCBmaWxlLmZpbGVDaGFuZ2VkKSB7XG4gICAgICB0cmlhbEZpbHRlclN0YXRlLnJhbmdlLnN0YXJ0ID0gdG1pbjtcbiAgICAgIHRyaWFsRmlsdGVyU3RhdGUucmFuZ2UuZW5kID0gdG1heDtcbiAgICB9XG5cbiAgICB0aGlzLnRyaWFsRmlsdGVyLnNldFN0YXRlKHtcbiAgICAgIHJhbmdlOiB7XG4gICAgICAgIHN0YXJ0OiB0cmlhbEZpbHRlclN0YXRlLnJhbmdlLnN0YXJ0LFxuICAgICAgICBlbmQ6IHRyaWFsRmlsdGVyU3RhdGUucmFuZ2UuZW5kLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICB0aGlzLnRyaWFsUGxvdC5zZXRPcHRpb25zKHRoaXMudHJpYWxQbG90T3B0aW9ucyk7XG4gICAgdGhpcy50cmlhbERhc2hib2FyZC5kcmF3KHRoaXMuY3VtdWxEYXRhVGFibGUpO1xuICB9Ly9GVU5DVElPTiBkcmF3VHJpYWxQbG90XG5cbiAgcHJpdmF0ZSBkcmF3T2JqUGVyZlBsb3QoKSB7XG4gICAgdGhpcy5vYmpQZXJmUGxvdC5kcmF3KHRoaXMub2JqUGVyZkRhdGFUYWJsZSwgdGhpcy5vYmpQZXJmUGxvdE9wdGlvbnMpO1xuICB9Ly9GVU5DVElPTiBkcmF3T2JqUGVyZlBsb3RcblxuICBwcml2YXRlIGRyYXdSeG5UaW1lUGxvdCgpIHtcbiAgICB0aGlzLnJ4blBsb3QuZHJhdyh0aGlzLnJ4blRpbWVEYXRhVGFibGUsIHRoaXMucnhuUGxvdE9wdGlvbnMpO1xuICB9Ly9GVU5DVElPTiBkcmF3UnhuVGltZVBsb3RcblxuICBwcml2YXRlIGRyYXdDaG9pY2VQbG90KCkge1xuICAgIHRoaXMuY2hvaWNlUGxvdC5kcmF3KHRoaXMuY2hvaWNlRGF0YVRhYmxlLCB0aGlzLmNob2ljZVBsb3RPcHRpb25zKTtcbiAgfS8vRlVOQ1RJT04gZHJhd0Nob2ljZVBsb3RcblxuICBwcml2YXRlIGRyYXdSZXdhcmRQbG90KCkge1xuICAgIHRoaXMucmV3YXJkUGxvdC5kcmF3KHRoaXMucmV3YXJkRGF0YVRhYmxlLCB0aGlzLnJld2FyZFBsb3RPcHRpb25zKTtcbiAgfS8vRlVOQ1RJT04gZHJhd1Jld2FyZFBsb3RcblxuICAvLyBwcml2YXRlIGRyYXdSZWFsdGltZVBsb3QoZGF0YTogTGl2ZXBsb3REYXRhVHlwZSkge1xuICAvLyAgIGxldCBpZHggPSAwO1xuICAvLyAgIHRoaXMucmVhbHRpbWVQbG90T3B0aW9ucyA9IHtcbiAgLy8gICAgIHNlcmllc1R5cGU6ICdzY2F0dGVyJyxcbiAgLy8gICAgIHdpZHRoOiBkYXRhLndvcmtzcGFjZVsyXSAqIGRhdGEuQ2FudmFzUmF0aW8sXG4gIC8vICAgICBoZWlnaHQ6IGRhdGEuVmlld3BvcnRQaXhlbHNbMV0gLSBkYXRhLm9mZnNldHRvcCxcbiAgLy8gICAgIGxlZ2VuZDoge1xuICAvLyAgICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gIC8vICAgICB9LFxuICAvLyAgICAgaEF4aXM6IHtcbiAgLy8gICAgICAgdGl0bGU6ICdYIHBvc2l0aW9uIChweCknLFxuICAvLyAgICAgICB2aWV3V2luZG93OiB7XG4gIC8vICAgICAgICAgbWluOiAwLFxuICAvLyAgICAgICAgIG1heDogZGF0YS53b3Jrc3BhY2VbMl0gKiBkYXRhLkNhbnZhc1JhdGlvLFxuICAvLyAgICAgICB9LFxuICAvLyAgICAgfSxcbiAgLy8gICAgIHZBeGlzOiB7XG4gIC8vICAgICAgIHRpdGxlOiAnWSBwb3NpdGlvbiAocHgpJyxcbiAgLy8gICAgICAgdmlld1dpbmRvdzoge1xuICAvLyAgICAgICAgIG1pbjogMCxcbiAgLy8gICAgICAgICBtYXg6IGRhdGEuVmlld3BvcnRQaXhlbHNbMV0gLSBkYXRhLm9mZnNldHRvcCxcbiAgLy8gICAgICAgfSxcbiAgLy8gICAgIH0sXG4gIC8vICAgfTtcbiAgLy8gICB0aGlzLnJlYWx0aW1lUGxvdE9wdGlvbnMuaEF4aXMgPSB7XG4gIC8vICAgICB0aXRsZTogJ1ggcG9zaXRpb24gKHB4KScsXG4gIC8vICAgICB2aWV3V2luZG93OiB7XG4gIC8vICAgICAgIG1pbjogMCxcbiAgLy8gICAgICAgbWF4OiBkYXRhLndvcmtzcGFjZVsyXSAqIGRhdGEuQ2FudmFzUmF0aW8sXG4gIC8vICAgICB9LFxuICAvLyAgIH07XG4gIC8vICAgdGhpcy5yZWFsdGltZVBsb3RPcHRpb25zLnZBeGlzID0ge1xuICAvLyAgICAgdGl0bGU6ICdZIHBvc2l0aW9uIChweCknLFxuICAvLyAgICAgdmlld1dpbmRvdzoge1xuICAvLyAgICAgICBtaW46IDAsXG4gIC8vICAgICAgIG1heDogZGF0YS5WaWV3cG9ydFBpeGVsc1sxXSAtIGRhdGEub2Zmc2V0dG9wLFxuICAvLyAgICAgfSxcbiAgLy8gICB9O1xuICAvLyAgIGxldCBudW1Db2wgPSB0aGlzLnJlYWx0aW1lRGF0YVRhYmxlLmdldE51bWJlck9mQ29sdW1ucygpO1xuICAvLyAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKHRoaXMucmVhbHRpbWVEYXRhVGFibGUsIG51bUNvbCwge1xuICAvLyAgICAgMDogMCxcbiAgLy8gICAgIFtudW1Db2wgLSAyXTogMCxcbiAgLy8gICB9KTtcbiAgLy8gICBsZXQgbnVtUm93cyA9IHRoaXMucmVhbHRpbWVEYXRhVGFibGUuZ2V0TnVtYmVyT2ZSb3dzKCk7XG5cbiAgLy8gICB0aGlzLnJlYWx0aW1lUGxvdENvbmZpZyA9IHtcbiAgLy8gICAgIGNoYXJ0VHlwZTogJ0NvbWJvQ2hhcnQnLFxuICAvLyAgICAgY29udGFpbmVySWQ6ICdyZWFsdGltZS1wbG90JyxcbiAgLy8gICAgIG9wdGlvbnM6IHRoaXMucmVhbHRpbWVQbG90T3B0aW9ucyxcbiAgLy8gICB9O1xuICAvLyAgIHRoaXMucmVhbHRpbWVQbG90ID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkNoYXJ0V3JhcHBlcihcbiAgLy8gICAgIHRoaXMucmVhbHRpbWVQbG90Q29uZmlnXG4gIC8vICAgKTtcbiAgLy8gICB0aGlzLnJlYWx0aW1lUGxvdC5zZXREYXRhVGFibGUodGhpcy5yZWFsdGltZURhdGFUYWJsZSk7XG4gIC8vICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RhdGFfYXJyaXZlZCcsIChldnQ6IEN1c3RvbUV2ZW50SW5pdCkgPT4ge1xuICAvLyAgICAgaWYgKGlkeCAlIDIgPT0gMCkge1xuICAvLyAgICAgICB0aGlzLnJlYWx0aW1lRGF0YVRhYmxlLnNldFZhbHVlKFxuICAvLyAgICAgICAgIG51bVJvd3MgLSAxLFxuICAvLyAgICAgICAgIDAsXG4gIC8vICAgICAgICAgTWF0aC5mbG9vcihldnQuZGV0YWlsLngpXG4gIC8vICAgICAgICk7XG4gIC8vICAgICAgIHRoaXMucmVhbHRpbWVEYXRhVGFibGUuc2V0VmFsdWUoXG4gIC8vICAgICAgICAgbnVtUm93cyAtIDEsXG4gIC8vICAgICAgICAgbnVtQ29sIC0gMixcbiAgLy8gICAgICAgICBNYXRoLmZsb29yKGV2dC5kZXRhaWwueSlcbiAgLy8gICAgICAgKTtcbiAgLy8gICAgICAgdGhpcy5yZWFsdGltZVBsb3QuZHJhdygpO1xuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgcHJpdmF0ZSBkcmF3U3RhdGljRWxlbWVudHMoXG4gICAgY3ZzOiBIVE1MQ2FudmFzRWxlbWVudCxcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGwsXG4gICAgZGF0YTogTGl2ZXBsb3REYXRhVHlwZSxcbiAgICBldnQ6IEN1c3RvbUV2ZW50SW5pdFxuICApIHtcbiAgICBpZiAoY3R4KSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ2dyYXknO1xuICAgICAgY3R4LmZpbGxSZWN0KFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICBkYXRhLndvcmtzcGFjZVsyXSAqIGRhdGEuQ2FudmFzUmF0aW8sXG4gICAgICAgIGRhdGEuVmlld3BvcnRQaXhlbHNbMV0gLSBkYXRhLm9mZnNldHRvcFxuICAgICAgKTtcblxuICAgICAgZm9yIChsZXQgaWR4IGluIGV2dC5kZXRhaWwuYm91bmRpbmdCb3hlcykge1xuICAgICAgICBsZXQgd2lkdGggPVxuICAgICAgICAgIGV2dC5kZXRhaWwuYm91bmRpbmdCb3hlc1tpZHhdWyd4XzEnXSAtXG4gICAgICAgICAgZXZ0LmRldGFpbC5ib3VuZGluZ0JveGVzW2lkeF1bJ3hfMCddO1xuICAgICAgICBsZXQgaGVpZ2h0ID1cbiAgICAgICAgICBldnQuZGV0YWlsLmJvdW5kaW5nQm94ZXNbaWR4XVsneV8xJ10gLVxuICAgICAgICAgIGV2dC5kZXRhaWwuYm91bmRpbmdCb3hlc1tpZHhdWyd5XzAnXTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgucmVjdChcbiAgICAgICAgICBfLmZsb29yKGV2dC5kZXRhaWwuYm91bmRpbmdCb3hlc1tpZHhdWyd4XzAnXSksXG4gICAgICAgICAgXy5mbG9vcihjdnMuaGVpZ2h0IC0gZXZ0LmRldGFpbC5ib3VuZGluZ0JveGVzW2lkeF1bJ3lfMCddKSxcbiAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAtaGVpZ2h0XG4gICAgICAgICk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0vL0ZVTkNUSU9OIGRyYXdTdGF0aWNFbGVtZW50c1xuXG4gIHByaXZhdGUgZHJhd1JlYWx0aW1lUGxvdDIoZGF0YTogTGl2ZXBsb3REYXRhVHlwZSkge1xuICAgIGxldCBjdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVhbHRpbWUtY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgY3ZzLndpZHRoID0gZGF0YS53b3Jrc3BhY2VbMl0gKiBkYXRhLkNhbnZhc1JhdGlvO1xuICAgIGN2cy5oZWlnaHQgPSBkYXRhLlZpZXdwb3J0UGl4ZWxzWzFdIC0gZGF0YS5vZmZzZXR0b3A7XG4gICAgbGV0IGN0eCA9IGN2cy5nZXRDb250ZXh0KCcyZCcpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBjb25zdCBsb25nZXJBeGlzID0gY3ZzLndpZHRoID4gY3ZzLmhlaWdodCA/IGN2cy53aWR0aCA6IGN2cy5oZWlnaHQ7XG5cbiAgICAvLyBjb25zdCByZWFsdGltZU9uRGF0YSA9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RhdGFfYXJyaXZlZCcsIChldnQ6IEN1c3RvbUV2ZW50SW5pdCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0xPTkdFUiBBWElTOicsIGxvbmdlckF4aXMpO1xuICAgICAgaWYgKGV2dC5kZXRhaWwubWV0YSA9PSAyKSB7XG4gICAgICAgIHRoaXMuZHJhd1N0YXRpY0VsZW1lbnRzKGN2cywgY3R4LCBkYXRhLCBldnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZ0LmRldGFpbC5tZXRhID09IDEgfHwgZXZ0LmRldGFpbC5tZXRhID09IDApIHtcbiAgICAgICAgY29uc3QgeCA9IF8uZmxvb3IoZXZ0LmRldGFpbC54KTtcbiAgICAgICAgY29uc3QgeSA9IF8uZmxvb3IoY3ZzLmhlaWdodCAtIGV2dC5kZXRhaWwueSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdYOicsIHgsICdZOicsIHkpO1xuICAgICAgICBjb25zdCB4UXVhbnRpdHkgPSB4IC0gdGhpcy5wcmV2Q29vcmQueDtcbiAgICAgICAgY29uc3QgeFNxdWFyZWQgPSBNYXRoLnBvdyh4UXVhbnRpdHksIDIpO1xuICAgICAgICBjb25zdCB5UXVhbnRpdHkgPSB5IC0gdGhpcy5wcmV2Q29vcmQueTtcbiAgICAgICAgY29uc3QgeVNxdWFyZWQgPSBNYXRoLnBvdyh5UXVhbnRpdHksIDIpO1xuICAgICAgICBjb25zdCBkaXN0ID0gTWF0aC5zcXJ0KHhTcXVhcmVkICsgeVNxdWFyZWQpO1xuICAgICAgICBjb25zb2xlLmxvZygnRElTVDonLCBkaXN0KTtcbiAgICAgICAgY29uc29sZS5sb2coJ3hRdWFudGl0eTonLCB4UXVhbnRpdHksICd5UXVhbnRpdHk6JywgeVF1YW50aXR5KTtcbiAgICAgICAgY29uc29sZS5sb2coJ3hTcXVhcmVkOicsIHhTcXVhcmVkLCAneVNxdWFyZWQ6JywgeVNxdWFyZWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAncHJldkNvb3JkWDonLFxuICAgICAgICAgIHRoaXMucHJldkNvb3JkLngsXG4gICAgICAgICAgJ3ByZXZDb29yZFk6JyxcbiAgICAgICAgICB0aGlzLnByZXZDb29yZC55XG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGRpc3QgPiBsb25nZXJBeGlzICogMC4wMTUpIHtcbiAgICAgICAgICBpZiAodGhpcy5wcmV2Q29sb3JJZHggPT0gMTQpIHtcbiAgICAgICAgICAgIHRoaXMucHJldkNvbG9ySWR4ID0gMDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcmV2Q29sb3JJZHgrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gcnRDb2xvck1hcFt0aGlzLnByZXZDb2xvcklkeF07XG4gICAgICAgIGN0eD8uYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eD8uYXJjKHgsIHksIDIsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgY3R4Py5maWxsKCk7XG5cbiAgICAgICAgdGhpcy5wcmV2Q29vcmQueCA9IHg7XG4gICAgICAgIHRoaXMucHJldkNvb3JkLnkgPSB5O1xuICAgICAgfVxuICAgIH0pO1xuICB9Ly9GVU5DVElPTiBkcmF3UmVhbHRpbWVQbG90MlxuXG4gIHByaXZhdGUgZHJhd1NjcmVlblBsb3QoZGF0YTogTGl2ZXBsb3REYXRhVHlwZSwgc2NyZWVuQWN0aXZlOiBib29sZWFuKSB7XG4gICAgdGhpcy5zY3JlZW5QbG90T3B0aW9ucy5zZXJpZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMueHlQb3NEYXRhVGFibGUuZ2V0TnVtYmVyT2ZDb2x1bW5zKCk7IGkrKykge1xuICAgICAgaWYgKHRoaXMueHlQb3NEYXRhVGFibGUuZ2V0Q29sdW1uTGFiZWwoaSkgPT0gJ0ZpeGF0aW9uJykge1xuICAgICAgICB0aGlzLnNjcmVlblBsb3RPcHRpb25zLnNlcmllc1tpIC0gMV0gPSB7IHR5cGU6ICdsaW5lJywgY29sb3I6ICdncmF5JyB9O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnh5UG9zRGF0YVRhYmxlLmdldENvbHVtbkxhYmVsKGkpID09ICdTYW1wbGUnKSB7XG4gICAgICAgIHRoaXMuc2NyZWVuUGxvdE9wdGlvbnMuc2VyaWVzW2kgLSAxXSA9IHsgdHlwZTogJ2xpbmUnLCBjb2xvcjogJ2JsYWNrJyB9O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnh5UG9zRGF0YVRhYmxlLmdldENvbHVtbkxhYmVsKGkpID09ICdTYW1lJykge1xuICAgICAgICB0aGlzLnNjcmVlblBsb3RPcHRpb25zLnNlcmllc1tpIC0gMV0gPSB7IHR5cGU6ICdsaW5lJywgY29sb3I6ICdncmVlbicgfTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy54eVBvc0RhdGFUYWJsZS5nZXRDb2x1bW5MYWJlbChpKSA9PSAnRGlmZmVyZW50Jykge1xuICAgICAgICB0aGlzLnNjcmVlblBsb3RPcHRpb25zLnNlcmllc1tpIC0gMV0gPSB7IHR5cGU6ICdsaW5lJywgY29sb3I6ICdyZWQnIH07XG4gICAgICB9IGVsc2UgaWYgKHRoaXMueHlQb3NEYXRhVGFibGUuZ2V0Q29sdW1uTGFiZWwoaSkgPT0gJ0ZpeF9SZXdhcmQnKSB7XG4gICAgICAgIHRoaXMuc2NyZWVuUGxvdE9wdGlvbnMuc2VyaWVzW2kgLSAxXSA9IHsgY29sb3I6ICdibHVlJyB9O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnh5UG9zRGF0YVRhYmxlLmdldENvbHVtbkxhYmVsKGkpID09ICdGaXhfUHVuaXNoJykge1xuICAgICAgICB0aGlzLnNjcmVlblBsb3RPcHRpb25zLnNlcmllc1tpIC0gMV0gPSB7IGNvbG9yOiAncmVkJyB9O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnh5UG9zRGF0YVRhYmxlLmdldENvbHVtbkxhYmVsKGkpID09ICdUYXJnZXRfUmV3YXJkJykge1xuICAgICAgICB0aGlzLnNjcmVlblBsb3RPcHRpb25zLnNlcmllc1tpIC0gMV0gPSB7IGNvbG9yOiAnZ3JlZW4nIH07XG4gICAgICB9IGVsc2UgaWYgKHRoaXMueHlQb3NEYXRhVGFibGUuZ2V0Q29sdW1uTGFiZWwoaSkgPT0gJ1RhcmdldF9QdW5pc2gnKSB7XG4gICAgICAgIHRoaXMuc2NyZWVuUGxvdE9wdGlvbnMuc2VyaWVzW2kgLSAxXSA9IHsgY29sb3I6ICdibGFjaycgfTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy54eVBvc0RhdGFUYWJsZS5nZXRDb2x1bW5MYWJlbChpKS5pbmNsdWRlcygnVGVzdCcpKSB7XG4gICAgICAgIHRoaXMuc2NyZWVuUGxvdE9wdGlvbnMuc2VyaWVzW2kgLSAxXSA9IHsgdHlwZTogJ2xpbmUnLCBjb2xvcjogJ2JsYWNrJyB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2NyZWVuUGxvdE9wdGlvbnMuaGVpZ2h0ID0gZGF0YS5WaWV3cG9ydFBpeGVsc1sxXTtcbiAgICB0aGlzLnNjcmVlblBsb3RPcHRpb25zLndpZHRoID0gZGF0YS5WaWV3cG9ydFBpeGVsc1swXTtcbiAgICB0aGlzLnNjcmVlblBsb3RPcHRpb25zLmhBeGlzID0ge1xuICAgICAgdGl0bGU6ICdYIHBvc2l0aW9uIChweCknLFxuICAgICAgdmlld1dpbmRvdzoge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogZGF0YS5WaWV3cG9ydFBpeGVsc1swXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICB0aGlzLnNjcmVlblBsb3RPcHRpb25zLnZBeGlzID0ge1xuICAgICAgdGl0bGU6ICdZIHBvc2l0aW9uIChweCknLFxuICAgICAgdmlld1dpbmRvdzoge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogZGF0YS5WaWV3cG9ydFBpeGVsc1sxXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBpZiAoIXRoaXMucmVhbHRpbWVQbG90QWN0aXZlKSB7XG4gICAgICB0aGlzLnNjcmVlblBsb3QuZHJhdyh0aGlzLnh5UG9zRGF0YVRhYmxlLCB0aGlzLnNjcmVlblBsb3RPcHRpb25zKTtcbiAgICB9XG4gIH0vL0ZVTkNUSU9OIGRyYXdTY3JlZW5QbG90XG5cbiAgcHJpdmF0ZSBmb3JtYXREYXRlKFxuICAgIGRhdGE6IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSxcbiAgICBjb2xJZHg6IG51bWJlclxuICApOiB2b2lkIHtcbiAgICBsZXQgZm9ybWF0dGVyID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGVGb3JtYXQoe1xuICAgICAgcGF0dGVybjogJ2ggYWEnLFxuICAgIH0pO1xuICAgIGZvcm1hdHRlci5mb3JtYXQoZGF0YSwgY29sSWR4KTtcbiAgfS8vRlVOQ1RJT04gZm9ybWF0RGF0ZVxuXG4gIHByaXZhdGUgZm9ybWF0TnVtYmVyKGRhdGE6IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSwgY29sSWR4OiBudW1iZXIpIHtcbiAgICBsZXQgZm9ybWF0dGVyID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLk51bWJlckZvcm1hdCh7XG4gICAgICBmcmFjdGlvbkRpZ2l0czogMixcbiAgICB9KTtcbiAgICBmb3JtYXR0ZXIuZm9ybWF0KGRhdGEsIGNvbElkeCk7XG4gIH0vL0ZVTkNUSU9OIGZvcm1hdE51bWJlclxuXG4gIHByaXZhdGUgZm9ybWF0Q29sb3IoZGF0YTogZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlLCBjb2xJZHg6IG51bWJlcikge1xuICAgIGxldCBmb3JtYXR0ZXIgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ29sb3JGb3JtYXQoKTtcbiAgICBsZXQgZHggPSAxIC8gKGNvbG9yTWFwSmV0Lmxlbmd0aCAtIDEpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sb3JNYXBKZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvcm1hdHRlci5hZGRSYW5nZShpICogZHgsIChpICsgMSkgKiBkeCwgJ2dyYXknLCBjb2xvck1hcEpldFtpXSk7XG4gICAgfVxuICAgIGZvcm1hdHRlci5mb3JtYXQoZGF0YSwgY29sSWR4KTtcbiAgfS8vRlVOQ1RJT04gZm9ybWF0Q29sb3Jcbn0vL0NMQVNTIENoYXJ0cyIsImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0ICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuaW1wb3J0ICdmaXJlYmFzZS9zdG9yYWdlJztcbmltcG9ydCAnZmlyZWJhc2UvZGF0YWJhc2UnO1xuaW1wb3J0IEpTT05FZGl0b3IgZnJvbSAnanNvbmVkaXRvcic7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuLy8gaW1wb3J0ICdqc29uZWRpdG9yL2Rpc3QvanNvbmVkaXRvci5jc3MnXG4vLyBpbXBvcnQgJy4vanNvbmVkaXRvci5jc3MnO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IENoYXJ0cyB9IGZyb20gJy4vY2hhcnRzJztcbmltcG9ydCB7IEZpbGVUeXBlLCBMaXZlcGxvdERhdGFUeXBlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IHN0b3JhZ2UgPSBmaXJlYmFzZS5zdG9yYWdlKCk7XG5jb25zdCBzdG9yYWdlUmVmID0gc3RvcmFnZS5yZWYoKTtcbmNvbnN0IHJ0ZGIgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xuXG5jb25zdCBEQVRBX1BBVEggPSAnbWt0dXJrZmlsZXMvZGF0YWZpbGVzLyc7XG5jb25zdCBEQVRBX1JFRiA9IHN0b3JhZ2VSZWYuY2hpbGQoREFUQV9QQVRIKTtcbmNvbnN0IFBBUkFNX1BBVEggPSAnbWt0dXJrZmlsZXMvcGFyYW1ldGVyZmlsZXMvc3ViamVjdHMvJztcbmNvbnN0IFBBUkFNX1JFRiA9IHN0b3JhZ2VSZWYuY2hpbGQoUEFSQU1fUEFUSCk7XG5jb25zdCBBR0VOVFNfUkVGID0gcnRkYi5yZWYoJ2FnZW50cy8nKTtcbmNvbnN0IHV0aWxzID0gbmV3IFV0aWxzKCk7XG5cbmV4cG9ydCBjbGFzcyBMaXZlcGxvdCB7XG4gIHB1YmxpYyB3a3I6IFdvcmtlcjtcbiAgcHVibGljIGZpbGU6IEZpbGVUeXBlO1xuICBwdWJsaWMgZWxlbU9ianM6IGFueTtcbiAgcHVibGljIGVkaXRvcjogSlNPTkVkaXRvcjtcbiAgcHVibGljIGNoYXJ0czogQ2hhcnRzO1xuICBwdWJsaWMgc3RyZWFtQWN0aXZlOiBib29sZWFuO1xuICBwdWJsaWMgYWdlbnRDbGllbnRSZWY6IGZpcmViYXNlLmRhdGFiYXNlLlJlZmVyZW5jZTtcblxuICBjb25zdHJ1Y3RvcihlbGVtT2JqOiBhbnkpIHtcbiAgICB0aGlzLmVsZW1PYmpzID0gZWxlbU9iajtcbiAgICB0aGlzLmZpbGUgPSB7XG4gICAgICBwYXRoOiBEQVRBX1BBVEgsXG4gICAgICBsaXN0OiBbXSxcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgdmVyOiBudWxsLFxuICAgICAgZGF0ZTogbnVsbCxcbiAgICAgIGRhdGFDaGFuZ2VkOiBmYWxzZSxcbiAgICAgIGZpbGVDaGFuZ2VkOiBmYWxzZSxcbiAgICB9O1xuICAgIHRoaXMuY2hhcnRzID0gbmV3IENoYXJ0cyhlbGVtT2JqKTtcbiAgICB0aGlzLnN0cmVhbUFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMucmVxdWVzdFJlYWx0aW1lQnRuQWN0aW9uKCk7XG4gICAgdGhpcy5vbkRpc2Nvbm5lY3RBY3Rpb24oKTtcbiAgfVxuXG4gIHB1YmxpYyBmaWxlU2VsZWN0aW9uQ2hhbmdlZExpc3RlbmVyKGVsZW06IEhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldnQ6IEV2ZW50KSA9PiB7XG4gICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLnN0cmVhbUFjdGl2ZSkge1xuICAgICAgICBsZXQgYWdlbnQgPSB0aGlzLmZpbGUuZGF0YT8uQWdlbnQhO1xuICAgICAgICBydGRiLnJlZihgZGF0YS8ke2FnZW50fWApLm9mZigpO1xuICAgICAgICB0aGlzLmFnZW50Q2xpZW50UmVmLnJlbW92ZSgoZXJyKSA9PiB7XG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgUmVtb3ZpbmcgYWdlbnRDbGllbnRSZWY6ICR7ZXJyfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RyZWFtQWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLmZpbGUubmFtZSA9IHRoaXMuZmlsZS5saXN0W3BhcnNlSW50KGVsZW0udmFsdWUpXS5mdWxscGF0aDtcbiAgICAgIHRoaXMuZmlsZS5maWxlQ2hhbmdlZCA9IHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25EaXNjb25uZWN0QWN0aW9uKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd1bmxvYWQnLCAoZXZ0OiBFdmVudCkgPT4ge1xuICAgICAgdGhpcy5hZ2VudENsaWVudFJlZi5vbkRpc2Nvbm5lY3QoKS5yZW1vdmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyByZXF1ZXN0UmVhbHRpbWVCdG5BY3Rpb24oKSB7XG4gICAgbGV0IHJlYWx0aW1lQnRuID0gdGhpcy5lbGVtT2Jqcy5yZWFsdGltZUJ0bjtcbiAgICByZWFsdGltZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChldnQ6IEV2ZW50KSA9PiB7XG4gICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxldCBhZ2VudCA9IHRoaXMuZmlsZS5kYXRhPy5BZ2VudCE7XG4gICAgICBpZiAodGhpcy5zdHJlYW1BY3RpdmUpIHtcbiAgICAgICAgcmVhbHRpbWVCdG4uaW5uZXJIVE1MID0gJ1JlcXVlc3QgUmVhbHRpbWUgU3RyZWFtJztcbiAgICAgICAgcnRkYi5yZWYoYGRhdGEvJHthZ2VudH1gKS5vZmYoKTtcbiAgICAgICAgdGhpcy5hZ2VudENsaWVudFJlZi5yZW1vdmUoKGVycikgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIFJlbW92aW5nIGFnZW50Q2xpZW50UmVmOiAke2Vycn1gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBydGRiLnJlZihgZGF0YS8ke2FnZW50fWApLm9mZigpO1xuICAgICAgICB0aGlzLnN0cmVhbUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVhbHRpbWVCdG4uaW5uZXJIVE1MID0gJ0RlYWN0aXZhdGUgUmVhbHRpbWUgU3RyZWFtJztcbiAgICAgICAgbGV0IGFnZW50Q2xpZW50S2V5ID0gcnRkYi5yZWYoYGFnZW50cy8ke2FnZW50fWApLnB1c2goKS5rZXk7XG4gICAgICAgIHRoaXMuYWdlbnRDbGllbnRSZWYgPSBydGRiLnJlZihgYWdlbnRzLyR7YWdlbnR9LyR7YWdlbnRDbGllbnRLZXl9YCk7XG4gICAgICAgIGlmIChfLmlzU3RyaW5nKGFnZW50Q2xpZW50S2V5KSkge1xuICAgICAgICAgIHJ0ZGIucmVmKGBhZ2VudHMvJHthZ2VudH1gKS51cGRhdGUoe1xuICAgICAgICAgICAgW2FnZW50Q2xpZW50S2V5XTogdHJ1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBydGRiLnJlZihgZGF0YS8ke2FnZW50fWApLm9uKCd2YWx1ZScsIChzbmFwKSA9PiB7XG4gICAgICAgICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdkYXRhX2Fycml2ZWQnLCB7IGRldGFpbDogc25hcC52YWwoKSB9KTtcbiAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0cmVhbUFjdGl2ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcG9wdWxhdGVGaWxlTGlzdChlbGVtOiBIVE1MU2VsZWN0RWxlbWVudCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZmlsZUxpc3QgPSBhd2FpdCB1dGlscy5nZXRGaWxlTGlzdCh0aGlzLmZpbGUucGF0aCk7XG5cbiAgICAgIGZpbGVMaXN0LnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICAgIGxldCBuYW1lQSA9IGEubmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBsZXQgbmFtZUIgPSBiLm5hbWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgICBpZiAobmFtZUEgPiBuYW1lQikge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuYW1lQSA8IG5hbWVCKSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmZpbGUubGlzdCA9IGZpbGVMaXN0O1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0LnZhbHVlID0gaS50b1N0cmluZygpO1xuICAgICAgICBvcHQuaW5uZXJIVE1MID0gZmlsZUxpc3RbaV0ubmFtZTtcbiAgICAgICAgZWxlbS5hcHBlbmRDaGlsZChvcHQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmZpbGUubmFtZSA9IHRoaXMuZmlsZS5saXN0WzBdLmZ1bGxwYXRoO1xuICAgICAgdGhpcy5maWxlLmZpbGVDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIGxldCByYXdTdG9yYWdlRmlsZSA9IGF3YWl0IHV0aWxzLmdldFN0b3JhZ2VGaWxlKHRoaXMuZmlsZS5uYW1lKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdyYXdGaWxlJywgcmF3U3RvcmFnZUZpbGUpO1xuXG4gICAgICB0aGlzLnByb2Nlc3NEYXRhKHJhd1N0b3JhZ2VGaWxlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRVJST1IgI2ZpbGUtbGlzdDonLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmbGF0dGVuRGF0YShkYXRhOiBhbnkpIHtcbiAgICBsZXQgdG1wOiBhbnkgPSB7fTtcblxuICAgIGZvciAobGV0IG91dGVyS2V5IGluIGRhdGEpIHtcbiAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KG91dGVyS2V5KSkge1xuICAgICAgICBmb3IgKGxldCBpbm5lcktleSBpbiBkYXRhW291dGVyS2V5XSkge1xuICAgICAgICAgIGlmIChkYXRhW291dGVyS2V5XS5oYXNPd25Qcm9wZXJ0eShpbm5lcktleSkpIHtcbiAgICAgICAgICAgIHRtcFtpbm5lcktleV0gPSBkYXRhW291dGVyS2V5XVtpbm5lcktleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRtcDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcHJvY2Vzc0RhdGEoZGF0YTogYW55KSB7XG4gICAgY29uc29sZS50aW1lKCd0aGlzLmZsYXR0ZW5EYXRhJyk7XG4gICAgdGhpcy5maWxlLmRhdGEgPSB0aGlzLmZsYXR0ZW5EYXRhKGRhdGEpO1xuICAgIGNvbnNvbGUudGltZUVuZCgndGhpcy5mbGF0dGVuRGF0YScpO1xuICAgIHRoaXMubG9hZERhdGFUb0VkaXRvcih0aGlzLmZpbGUuZGF0YSk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5maWxlLmRhdGEpO1xuXG4gICAgbGV0IG1ldGFkYXRhID0gYXdhaXQgdXRpbHMuZ2V0U3RvcmFnZUZpbGVNZXRhZGF0YSh0aGlzLmZpbGUubmFtZSk7XG4gICAgY29uc29sZS5sb2coJ1N1Y2Nlc3MhIExvYWRlZCBGaWxlIFNpemU6JywgbWV0YWRhdGEuc2l6ZSAvIDEwMDAsICdLQicpO1xuICAgIHRoaXMuZmlsZS52ZXIgPSBtZXRhZGF0YS5nZW5lcmF0aW9uO1xuICAgIHRoaXMuZmlsZS5kYXRlU2F2ZWQgPSBuZXcgRGF0ZShtZXRhZGF0YS51cGRhdGVkKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGUuZGF0ZVNhdmVkKTtcblxuICAgIGlmICh0aGlzLmZpbGUuZmlsZUNoYW5nZWQpIHtcbiAgICAgIHRoaXMuY2hhcnRzLmluaXRpYWxpemVDaGFydERhdGEodGhpcy5maWxlLCB7XG4gICAgICAgIHN0cmVhbUFjdGl2ZTogdGhpcy5zdHJlYW1BY3RpdmUsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuY2hlY2tGaWxlU3RhdHVzKCk7XG4gICAgICB0aGlzLmZpbGUuZmlsZUNoYW5nZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuZmlsZS5kYXRhQ2hhbmdlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5maWxlLmRhdGFDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmNoYXJ0cy51cGRhdGVQbG90cyh0aGlzLmZpbGUsIHsgc3RyZWFtQWN0aXZlOiB0aGlzLnN0cmVhbUFjdGl2ZSB9KTtcbiAgICAgIHRoaXMuZmlsZS5kYXRhQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5jaGVja0ZpbGVTdGF0dXMoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0dXBFZGl0b3IoZWxlbTogSFRNTERpdkVsZW1lbnQpIHtcbiAgICB0aGlzLmVkaXRvciA9IG5ldyBKU09ORWRpdG9yKGVsZW0pO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkRGF0YVRvRWRpdG9yKGRhdGE6IGFueSkge1xuICAgIGlmICh0aGlzLmZpbGUuZmlsZUNoYW5nZWQpIHtcbiAgICAgIHRoaXMuZWRpdG9yLnNldChkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lZGl0b3IudXBkYXRlKGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2hlY2tGaWxlU3RhdHVzKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgbWV0YWRhdGEgPSBhd2FpdCB1dGlscy5nZXRTdG9yYWdlRmlsZU1ldGFkYXRhKHRoaXMuZmlsZS5uYW1lKTtcblxuICAgICAgaWYgKHRoaXMuZmlsZS52ZXIgIT0gbWV0YWRhdGEuZ2VuZXJhdGlvbikge1xuICAgICAgICB0aGlzLmZpbGUudmVyID0gbWV0YWRhdGEuZ2VuZXJhdGlvbjtcbiAgICAgICAgdGhpcy5maWxlLmRhdGVTYXZlZCA9IG5ldyBEYXRlKG1ldGFkYXRhLnVwZGF0ZWQpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGUuZGF0ZVNhdmVkKTtcbiAgICAgICAgdGhpcy5maWxlLmRhdGFDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2coJ0ZpbGUgd2FzIHVwZGF0ZWQgdmVyPScgKyB0aGlzLmZpbGUudmVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZmlsZS5kYXRhQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5maWxlLmZpbGVDaGFuZ2VkID09IHRydWUgfHwgdGhpcy5maWxlLmRhdGFDaGFuZ2VkID09IHRydWUpIHtcbiAgICAgICAgbGV0IHJhd1N0b3JhZ2VGaWxlID0gYXdhaXQgdXRpbHMuZ2V0U3RvcmFnZUZpbGUodGhpcy5maWxlLm5hbWUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygncmF3RmlsZScsIHJhd1N0b3JhZ2VGaWxlKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzRGF0YShyYXdTdG9yYWdlRmlsZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNoZWNrRmlsZVN0YXR1cygpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignY2hlY2tGaWxlU3RhdHVzIEVycm9yOicsIGVycm9yKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlOyAvLyB3aHkgbmVlZGVkXG4gIH1cbn1cbiIsImltcG9ydCAnLi9zdHlsZXMuY3NzJ1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnO1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUEwZmJ2MlZxRS1BZkY2Vl9ueFNTWENFcWFUbEJsWm5USVwiLFxuICBhdXRoRG9tYWluOiBcInNhbmRib3gtY2UyYzUuZmlyZWJhc2VhcHAuY29tXCIsXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vc2FuZGJveC1jZTJjNS5maXJlYmFzZWlvLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwic2FuZGJveC1jZTJjNVwiLFxuICBzdG9yYWdlQnVja2V0OiBcInNhbmRib3gtY2UyYzUuYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMTAwMzcxOTg4Nzk0NFwiLFxuICBjbGllbnRJZDogXCIxMDAzNzE5ODg3OTQ0LXJsYzA2Y2plY3FycDlmZ3Ztdm81NnZxb3Axb3RtOWh0LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCJcbn07XG5maXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcblxuaW1wb3J0IHsgTGl2ZXBsb3QgfSBmcm9tICcuL2xpdmVwbG90JztcblxubGV0IGZpbGVMaXN0U2VsZWN0b3IgPSAoXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWxlLWxpc3QnKSBhcyBIVE1MU2VsZWN0RWxlbWVudFxuKTtcblxubGV0IGVkaXRvckRpdiA9IChcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRvcicpIGFzIEhUTUxEaXZFbGVtZW50XG4pO1xuXG5sZXQgZWxlbU9iaiA9IHtcbiAgcGVyZkRpdjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BlcmZvcm1hbmNlLWRhc2hib2FyZCcpIGFzIEhUTUxEaXZFbGVtZW50LFxuICBwZXJmUGxvdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BlcmZvcm1hbmNlLXBsb3QnKSBhcyBIVE1MRGl2RWxlbWVudCxcbiAgcGVyZkZpbHRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BlcmZvcm1hbmNlLWZpbHRlcicpIGFzIEhUTUxEaXZFbGVtZW50LFxuICB0cmlhbERpdjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyaWFsLWRhc2hib2FyZCcpIGFzIEhUTUxEaXZFbGVtZW50LFxuICB0cmlhbFBsb3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmlhbC1wbG90JykgYXMgSFRNTERpdkVsZW1lbnQsXG4gIHRyaWFsRmlsdGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJpYWwtZmlsdGVyJykgYXMgSFRNTERpdkVsZW1lbnQsXG4gIGhlYWx0aERpdjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWx0aC1kYXNoYm9hcmQnKSBhcyBIVE1MRGl2RWxlbWVudCxcbiAgaGVhbHRoUGxvdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWx0aC1wbG90JykgYXMgSFRNTERpdkVsZW1lbnQsXG4gIGhlYWx0aEZpbHRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWx0aC1maWx0ZXInKSBhcyBIVE1MRGl2RWxlbWVudCxcbiAgc2NyZWVuUGxvdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NjcmVlbi1wbG90JykgYXMgSFRNTERpdkVsZW1lbnQsXG4gIC8vIHJlYWx0aW1lUGxvdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlYWx0aW1lLXBsb3QnKSBhcyBIVE1MRGl2RWxlbWVudCxcbiAgcnhuUGxvdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlYWN0aW9uLXBsb3QnKSBhcyBIVE1MRGl2RWxlbWVudCxcbiAgY2hvaWNlUGxvdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nob2ljZS1wbG90JykgYXMgSFRNTERpdkVsZW1lbnQsXG4gIG9ialBlcmZQbG90OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb2JqLXBlcmYtcGxvdCcpIGFzIEhUTUxEaXZFbGVtZW50LFxuICByZXdhcmRQbG90OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmV3YXJkLXBsb3QnKSBhcyBIVE1MRGl2RWxlbWVudCxcbiAgXG4gIHBlcmZWaXRhbHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwZXJmb3JtYW5jZS12aXRhbHMnKSBhcyBIVE1MU3BhbkVsZW1lbnQsXG4gIHJmaWRWaXRhbHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZmlkLXZpdGFscycpIGFzIEhUTUxTcGFuRWxlbWVudCxcbiAgYmF0dGVyeVZpdGFsczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JhdHRlcnktdml0YWxzJykgYXMgSFRNTFNwYW5FbGVtZW50LFxuICB0cmlhbFZpdGFsczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyaWFsLXZpdGFscycpIGFzIEhUTUxTcGFuRWxlbWVudCxcbiAgZml4U3RkZXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaXhhdGlvbi1zdGRldicpIGFzIEhUTUxTcGFuRWxlbWVudCxcbiAgdGFyWmVyb1N0ZGV2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFyZ2V0MC1zdGRldicpIGFzIEhUTUxTcGFuRWxlbWVudCxcbiAgdGFyT25lU3RkZXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXJnZXQxLXN0ZGV2JykgYXMgSFRNTFNwYW5FbGVtZW50LFxuICBzZFRleHREaXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3VjaC1zZC10ZXh0JykgYXMgSFRNTERpdkVsZW1lbnQsXG4gIHJlYWx0aW1lQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVxdWVzdC1yZWFsdGltZScpIGFzIEhUTUxCdXR0b25FbGVtZW50LFxufTtcblxuY29uc3QgbHAgPSBuZXcgTGl2ZXBsb3QoZWxlbU9iaik7XG5scC5zZXR1cEVkaXRvcihlZGl0b3JEaXYpO1xubHAuZmlsZVNlbGVjdGlvbkNoYW5nZWRMaXN0ZW5lcihmaWxlTGlzdFNlbGVjdG9yKTtcbmxwLnBvcHVsYXRlRmlsZUxpc3QoZmlsZUxpc3RTZWxlY3Rvcik7XG5cbmxldCBwcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xucHJvdmlkZXIuYWRkU2NvcGUoJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY29udGFjdHMucmVhZG9ubHknKTtcbmZpcmViYXNlLmF1dGgoKS5nZXRSZWRpcmVjdFJlc3VsdCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gIGlmIChyZXN1bHQudXNlcikge1xuICAgIC8vIFVzZXIganVzdCBzaWduZWQgaW4uIHlvdSBjYW4gZ2V0IHRoZSByZXN1bHQuY3JlZGVudGlhbC5cblx0Y29uc29sZS5sb2coJ1NpZ24tSW4gUmVkaXJlY3QgUmVzdWx0LCBVU0VSICcgKyByZXN1bHQudXNlci5lbWFpbCArICcgaXMgc2lnbmVkIGluJylcbiAgfVxuICBlbHNlIGlmIChmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIpIHtcbiAgICAvLyBVc2VyIGFscmVhZHkgc2lnbmVkIGluLlxuXHRjb25zb2xlLmxvZygnU2lnbi1JbiBSZWRpcmVjdCBSZXN1bHQsIFVTRVIgaXMgc2lnbmVkIGluJylcbiAgfVxuICBlbHNlIHtcbiAgICAvLyBObyB1c2VyIHNpZ25lZCBpbiwgdXBkYXRlIHlvdXIgVUksIHNob3cgdGhlIHJlZGlyZWN0IHNpZ24taW4gc2NyZWVuLlxuXHRmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aFJlZGlyZWN0KHByb3ZpZGVyKVxuICB9XG59KTsiLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCAnZmlyZWJhc2Uvc3RvcmFnZSc7XG5pbXBvcnQgJ2ZpcmViYXNlL2RhdGFiYXNlJztcblxuY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcbmNvbnN0IHN0b3JhZ2VSZWYgPSBzdG9yYWdlLnJlZigpO1xuXG5leHBvcnQgY2xhc3MgVXRpbHMge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIGFzeW5jIGdldEZpbGVMaXN0KHBhdGg6IHN0cmluZywgZXh0Pzogc3RyaW5nKSB7XG4gICAgbGV0IGZpbGVMaXN0ID0gYXdhaXQgc3RvcmFnZVJlZi5jaGlsZChwYXRoKS5saXN0QWxsKCk7XG4gICAgLyogb25seSBrZWVwIGZpbGVzIHdpdGhpbiB0aGUgbGFzdCAyIHllYXJzKi9cbiAgICBsZXQgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICBsZXQgbW9udGggPSBuZXcgRGF0ZSgpLmdldE1vbnRoKCk7XG4gICAgbGV0IGZpbGVzOiBhbnkgPSBbXTtcbiAgICBjb25zb2xlLmxvZyhtb250aClcblxuICAgIGZvciAobGV0IGl0ZW0gb2YgZmlsZUxpc3QucHJlZml4ZXMpIHtcbiAgICAgIGxldCBzdWJGaWxlTGlzdCA9IChcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRGaWxlTGlzdChwYXRoICsgaXRlbS5uYW1lICsgJy8nLCBleHQpXG4gICAgICApO1xuICAgICAgZmlsZXMgPSBbLi4uZmlsZXMsIC4uLnN1YkZpbGVMaXN0XTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVMaXN0Lml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodHlwZW9mKGV4dCkgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKGZpbGVMaXN0Lml0ZW1zW2ldLm5hbWUuZW5kc1dpdGgoZXh0KSkgeyAvLyBpZiBmaWxlIGV4dGVuc2lvbiBpcyBjb3JyZWN0XG4gICAgICAgICAgZmlsZXMucHVzaCh7XG4gICAgICAgICAgICBmdWxscGF0aDogZmlsZUxpc3QuaXRlbXNbaV0uZnVsbFBhdGgsXG4gICAgICAgICAgICBuYW1lOiBmaWxlTGlzdC5pdGVtc1tpXS5uYW1lXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQoZmlsZUxpc3QuaXRlbXNbaV0ubmFtZS5zbGljZSgwLCA0KSkgPj0geWVhcikge1xuICAgICAgICBmaWxlcy5wdXNoKHtcbiAgICAgICAgICBmdWxscGF0aDogZmlsZUxpc3QuaXRlbXNbaV0uZnVsbFBhdGgsXG4gICAgICAgICAgbmFtZTogZmlsZUxpc3QuaXRlbXNbaV0ubmFtZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmlsZXM7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZ2V0U3RvcmFnZUZpbGUocGF0aDogc3RyaW5nKSB7XG4gICAgbGV0IGZpbGVSZWYgPSBzdG9yYWdlUmVmLmNoaWxkKHBhdGgpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdmaWxlUmVmOicsIGZpbGVSZWYpO1xuICAgIGxldCBmaWxlID0gYXdhaXQgc3RvcmFnZVJlZi5jaGlsZChwYXRoKS5nZXREb3dubG9hZFVSTCgpLnRoZW4oYXN5bmMgKHVybDogc3RyaW5nKSA9PiB7XG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KS5jYXRjaChlID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIEdldHRpbmcgVVJMOicsIGUpO1xuICAgIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKCdmaWxlOicsIGZpbGUpO1xuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGdldFN0b3JhZ2VGaWxlTWV0YWRhdGEocGF0aDogc3RyaW5nKSB7XG4gICAgbGV0IGZpbGVSZWYgPSBzdG9yYWdlUmVmLmNoaWxkKHBhdGgpO1xuICAgIGxldCBtZXRhZGF0YSA9IGF3YWl0IGZpbGVSZWYuZ2V0TWV0YWRhdGEoKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH1cblxuICBwdWJsaWMgc21vb3RoKGRhdGE6IGFueVtdLCBuOiBudW1iZXIpIHtcbiAgICBsZXQgc21vb3RoZWREYXRhID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA8IG4gLSAxKSB7XG4gICAgICAgIGxldCB0bXAgPSBkYXRhLnNsaWNlKDAsIGkgKyAxKTtcbiAgICAgICAgc21vb3RoZWREYXRhW2ldID0gdG1wLnJlZHVjZSgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gYSArIGI7XG4gICAgICAgIH0pO1xuICAgICAgICBzbW9vdGhlZERhdGFbaV0gLz0gKGkgKyAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCB0bXAgPSBkYXRhLnNsaWNlKGkgLSBuICsgMSwgaSArIDEpO1xuICAgICAgICBzbW9vdGhlZERhdGFbaV0gPSB0bXAucmVkdWNlKChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHJldHVybiBhICsgYjtcbiAgICAgICAgfSk7XG4gICAgICAgIHNtb290aGVkRGF0YVtpXSAvPSBuO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc21vb3RoZWREYXRhO1xuICB9XG5cbiAgcHVibGljIGNhbGNEaXN0YW5jZShhOiBudW1iZXIsIGI6IG51bWJlcikge1xuICAgIHJldHVybiBNYXRoLnBvdyhNYXRoLmFicyhhIC0gYiksIDIpO1xuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmhtZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlID0gT2JqZWN0LmNyZWF0ZShtb2R1bGUpO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsICdleHBvcnRzJywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0c2V0OiAoKSA9PiB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0VTIE1vZHVsZXMgbWF5IG5vdCBhc3NpZ24gbW9kdWxlLmV4cG9ydHMgb3IgZXhwb3J0cy4qLCBVc2UgRVNNIGV4cG9ydCBzeW50YXgsIGluc3RlYWQ6ICcgKyBtb2R1bGUuaWQpO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtsaXZlcGxvdFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtsaXZlcGxvdFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfY3NzLWxvYWRlcl9kaXN0X3J1bnRpbWVfYXBpX2pzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfcnVudGltZV9zb3VyLWE5ZmUyOVwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tYWluLnRzXCIpKSlcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfY3NzLWxvYWRlcl9kaXN0X3J1bnRpbWVfYXBpX2pzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfcnVudGltZV9zb3VyLWE5ZmUyOVwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy91dGlscy50c1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9