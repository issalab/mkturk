/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/mkfiles.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/mkfiles.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "#mkquery-form {\n  display: grid;\n  grid-gap: 6px;\n  padding: 40px;\n\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  grid-template-areas:\n    'qry-selector field-selector keyword-0 go'\n    'x y keyword-1 plot'\n    ' . . keyword-2 .';\n}\n\n#qry-loc-selector {\n  grid-area: qry-selector;\n}\n\n#field-selector {\n  grid-area: field-selector;\n}\n\n#keyword-input-0 {\n  grid-area: keyword-0;\n}\n\n#keyword-input-1 {\n  grid-area: keyword-1;\n}\n\n#keyword-input-2 {\n  grid-area: keyword-2;\n}\n\n#go-btn {\n  grid-area: go;\n}\n\n#quick-plot-x {\n  grid-area: x;\n  visibility: hidden;\n}\n\n#quick-plot-y {\n  grid-area: y;\n  visibility: hidden;\n}\n\n#plot-btn {\n  grid-area: plot;\n  visibility: hidden;\n}\n\n#finder-card {\n  display: grid;\n}\n\n#finder-div {\n  grid-column: 1;\n  grid-row: 1;\n  z-index: 2;\n\n  display: grid;\n  grid-template-rows: 1fr 16fr 0.25fr;\n  grid-template-areas:\n    'controls'\n    'finder'\n    'controls-2';\n\n  max-height: inherit;\n  height: 100%;\n  width: 100%;\n  max-width: 100%;\n}\n\n#finder-controls {\n  grid-area: controls;\n  border: solid 2px white;\n\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 0.5fr;\n  grid-template-areas:\n    'back forward filter filter'\n    'show-images n-img-slider n-img-slider n-img-slider'\n    'path-name path-name path-name path-name';\n  grid-gap: 4px;\n  padding: 6px;\n  padding-bottom: 0px;\n}\n\n#finder-controls-2 {\n  grid-area: controls-2;\n\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: 'upload download';\n}\n\n#chart-div {\n  grid-column: 1;\n  grid-row: 1;\n  z-index: 1;\n}\n\n#filter-value {\n  grid-area: filter;\n}\n\n#back-button {\n  grid-area: back;\n  text-align: center;\n}\n\n#forward-button {\n  grid-area: forward;\n  text-align: center;\n}\n\n#upload-file {\n  grid-area: upload;\n  text-align: center;\n}\n\n#download-file {\n  grid-area: download;\n  text-align: center;\n}\n\n#show-images-button {\n  grid-area: show-images;\n  text-align: center;\n}\n\n#num-image-slider-p {\n  grid-area: n-img-slider;\n  margin: 8px;\n}\n\n#path-name-span {\n  grid-area: path-name;\n  margin-bottom: 0px;\n  font-weight: bold;\n}\n\n#finder {\n  margin: 6px;\n  margin-top: 3px;\n  grid-area: finder;\n  border: 0px;\n}\n\n#media-card {\n  display: grid;\n}\n\n#editor-div {\n  z-index: 3;\n  grid-column: 1;\n  grid-row: 1;\n\n  display: grid;\n\n  grid-template-rows: 0.125fr 10fr 0.25fr;\n  grid-template-areas:\n    'file-name'\n    'editor'\n    'btn-box';\n\n  max-height: inherit;\n  height: 100%;\n  width: 100%;\n  max-width: 100%;\n}\n\n#editor {\n  grid-area: editor;\n  max-height: 100%;\n  background-color: white;\n  overflow-y: hidden;\n}\n\n#file-name-span {\n  grid-area: file-name;\n  margin-bottom: 0px;\n  font-weight: bold;\n}\n\n#button-box {\n  grid-area: btn-box;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: 'update-btn update-btn';\n}\n\n#update-btn {\n  grid-area: update-btn;\n}\n\n#render-btn {\n  grid-area: render-btn;\n  display: none;\n}\n\n#active-btn {\n  grid-area: active-btn;\n  display: none;\n}\n\n#store-param-btn {\n  grid-area: store-param-btn;\n  display: none;\n  /* visibility: hidden; */\n}\n\n/* #generate-btn {\n  grid-area: gen-btn;\n  display: none;\n} */\n\n#param-gen-btn-box {\n  grid-area: param-gen-btn-box;\n  display: none;\n}\n\n#save-scene-param-btn {\n  grid-area: sv-scene-param-btn;\n  display: none;\n}\n\n#image-canvas-div {\n  z-index: 2;\n  grid-column: 1;\n  grid-row: 1;\n  height: 100%;\n  max-height: 100%;\n  height: 100%;\n  max-width: 100%;\n  overflow-y: auto;\n  background-color: white;\n}\n\n#image-canvas {\n  min-height: 100%;\n  max-height: 100%;\n  width: 100%;\n  max-width: 100%;\n  margin: 0px;\n  padding: 0px;\n  background-color: white;\n  display: grid;\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n  grid-gap: 10px;\n  list-style-type: none;\n}\n\n.imageList {\n  display: block;\n  height: auto;\n  width: 100%;\n  display: block;\n}\n\n.imageList div {\n  height: auto;\n  width: 100%;\n  max-width: 100%;\n  display: block;\n}\n\n.imageList div img {\n  height: auto;\n  width: 100%;\n}\n\n.imageList div p {\n  font-size: 12px;\n  color: black;\n  height: auto;\n  display: block;\n  word-wrap: break-word;\n}\n\n/* #three-canvas {\n  z-index: 1;\n  grid-column: 1;\n  grid-row: 1;\n  display: block;\n} */\n\n#dat-gui-div {\n  z-index: 1;\n  grid-column: 1;\n  grid-row: 1;\n  display: block;\n}\n\n#dat-gui-div * {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: normal;\n}\n\n.page-content > * {\n  max-height: 80vh;\n}\n\n#file-name-div {\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-left: 10px;\n  margin-left: 10px;\n  width: 50%;\n}\n\n#file-rename-btn {\n  display: none;\n  float: right;\n}\n\n#file-dup-btn {\n  display: none;\n  float: right;\n}\n\n#file-dup-modal {\n  min-width: 400px;\n}\n\n#dup-file-name {\n  color: black;\n  font-size: medium;\n}\n\n#gen-scene-param-btn {\n  display: none;\n  float: right;\n  grid-area: gen-scene-param-btn;\n}\n\n#gen-scene-param-modal {\n  min-width: 600px;\n}\n\n.collapsible {\n  background-color: #777;\n  color: white;\n  cursor: pointer;\n  padding: 18px;\n  width: 100%;\n  border: none;\n  text-align: left;\n  outline: none;\n  font-size: 15px;\n}\n\n.active,\n.collapsible:hover {\n  background-color: #555;\n}\n\n.collapsible:after {\n  content: '\\02795';\n  font-size: 13px;\n  color: white;\n  float: right;\n  margin-left: 5px;\n}\n\n.active:after {\n  content: '\\2796';\n}\n\n.coll-content {\n  padding: 18px;\n  display: none;\n  overflow: hidden;\n  background-color: #f1f1f1;\n}\n\n.gen-scene-rule-box {\n  display: grid;\n  grid-template-rows: 1fr 4fr;\n  grid-template-areas:\n    'table-controls'\n    'rule-table';\n}\n\n.rule-table {\n  grid-area: rule-table;\n  z-index: 9999;\n}\n\n.add-rule-btn {\n  grid-area: add-rule-btn;\n}\n\n.undo-edit-btn {\n  grid-area: undo-edit-btn;\n}\n\n.rule-table-controls {\n  grid-area: table-controls;\n  display: grid;\n  grid-template-rows: repeat(1, 1fr);\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-areas: 'add-rule-btn undo-edit-btn';\n}\n\n.color-node-bio div.jsoneditor-field {\n  background-color: #c7ceea;\n}\n\n.color-node-automator div.jsoneditor-field {\n  background-color: #fdf1ed;\n}\n\n.color-node-general div.jsoneditor-field {\n  background-color: #e2f0cb;\n}\n\n.color-node-grid div.jsoneditor-field {\n  background-color: #ffdac1;\n}\n\n.color-node-fixation div.jsoneditor-field {\n  background-color: #ffb7b2;\n}\n\n.color-node-fixation-config div.jsoneditor-field {\n  background-color: #ffff99;\n}\n\n.color-node-sample div.jsoneditor-field {\n  background-color: #ff9aa2;\n}\n\n.color-node-test div.jsoneditor-field {\n  background-color: #dcf2de;\n}\n\n.color-node-choice div.jsoneditor-field {\n  background-color: #bde8e7;\n}\n\n.color-node-reward div.jsoneditor-field {\n  background-color: #b5ead7;\n}\n\n.color-node-nuisance div.jsoneditor-field {\n  background-color: #fde2e6;\n}\n", "",{"version":3,"sources":["webpack://./src/mkfiles.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,aAAa;EACb,aAAa;;EAEb,qCAAqC;EACrC,kCAAkC;EAClC;;;sBAGoB;AACtB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,WAAW;EACX,UAAU;;EAEV,aAAa;EACb,mCAAmC;EACnC;;;gBAGc;;EAEd,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;;EAEvB,aAAa;EACb,sCAAsC;EACtC,iCAAiC;EACjC;;;6CAG2C;EAC3C,aAAa;EACb,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;;EAErB,aAAa;EACb,8BAA8B;EAC9B,sCAAsC;AACxC;;AAEA;EACE,cAAc;EACd,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;EACV,cAAc;EACd,WAAW;;EAEX,aAAa;;EAEb,uCAAuC;EACvC;;;aAGW;;EAEX,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,8BAA8B;EAC9B,4CAA4C;AAC9C;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,aAAa;AACf;;AAEA;EACE,0BAA0B;EAC1B,aAAa;EACb,wBAAwB;AAC1B;;AAEA;;;GAGG;;AAEH;EACE,4BAA4B;EAC5B,aAAa;AACf;;AAEA;EACE,6BAA6B;EAC7B,aAAa;AACf;;AAEA;EACE,UAAU;EACV,cAAc;EACd,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,WAAW;EACX,eAAe;EACf,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,aAAa;EACb,gDAAgD;EAChD,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,cAAc;EACd,qBAAqB;AACvB;;AAEA;;;;;GAKG;;AAEH;EACE,UAAU;EACV,cAAc;EACd,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,yCAAyC;EACzC,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,eAAe;EACf,aAAa;EACb,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,eAAe;AACjB;;AAEA;;EAEE,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B;;gBAEc;AAChB;;AAEA;EACE,qBAAqB;EACrB,aAAa;AACf;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,kCAAkC;EAClC,qCAAqC;EACrC,iDAAiD;AACnD;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":["#mkquery-form {\n  display: grid;\n  grid-gap: 6px;\n  padding: 40px;\n\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  grid-template-areas:\n    'qry-selector field-selector keyword-0 go'\n    'x y keyword-1 plot'\n    ' . . keyword-2 .';\n}\n\n#qry-loc-selector {\n  grid-area: qry-selector;\n}\n\n#field-selector {\n  grid-area: field-selector;\n}\n\n#keyword-input-0 {\n  grid-area: keyword-0;\n}\n\n#keyword-input-1 {\n  grid-area: keyword-1;\n}\n\n#keyword-input-2 {\n  grid-area: keyword-2;\n}\n\n#go-btn {\n  grid-area: go;\n}\n\n#quick-plot-x {\n  grid-area: x;\n  visibility: hidden;\n}\n\n#quick-plot-y {\n  grid-area: y;\n  visibility: hidden;\n}\n\n#plot-btn {\n  grid-area: plot;\n  visibility: hidden;\n}\n\n#finder-card {\n  display: grid;\n}\n\n#finder-div {\n  grid-column: 1;\n  grid-row: 1;\n  z-index: 2;\n\n  display: grid;\n  grid-template-rows: 1fr 16fr 0.25fr;\n  grid-template-areas:\n    'controls'\n    'finder'\n    'controls-2';\n\n  max-height: inherit;\n  height: 100%;\n  width: 100%;\n  max-width: 100%;\n}\n\n#finder-controls {\n  grid-area: controls;\n  border: solid 2px white;\n\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 0.5fr;\n  grid-template-areas:\n    'back forward filter filter'\n    'show-images n-img-slider n-img-slider n-img-slider'\n    'path-name path-name path-name path-name';\n  grid-gap: 4px;\n  padding: 6px;\n  padding-bottom: 0px;\n}\n\n#finder-controls-2 {\n  grid-area: controls-2;\n\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: 'upload download';\n}\n\n#chart-div {\n  grid-column: 1;\n  grid-row: 1;\n  z-index: 1;\n}\n\n#filter-value {\n  grid-area: filter;\n}\n\n#back-button {\n  grid-area: back;\n  text-align: center;\n}\n\n#forward-button {\n  grid-area: forward;\n  text-align: center;\n}\n\n#upload-file {\n  grid-area: upload;\n  text-align: center;\n}\n\n#download-file {\n  grid-area: download;\n  text-align: center;\n}\n\n#show-images-button {\n  grid-area: show-images;\n  text-align: center;\n}\n\n#num-image-slider-p {\n  grid-area: n-img-slider;\n  margin: 8px;\n}\n\n#path-name-span {\n  grid-area: path-name;\n  margin-bottom: 0px;\n  font-weight: bold;\n}\n\n#finder {\n  margin: 6px;\n  margin-top: 3px;\n  grid-area: finder;\n  border: 0px;\n}\n\n#media-card {\n  display: grid;\n}\n\n#editor-div {\n  z-index: 3;\n  grid-column: 1;\n  grid-row: 1;\n\n  display: grid;\n\n  grid-template-rows: 0.125fr 10fr 0.25fr;\n  grid-template-areas:\n    'file-name'\n    'editor'\n    'btn-box';\n\n  max-height: inherit;\n  height: 100%;\n  width: 100%;\n  max-width: 100%;\n}\n\n#editor {\n  grid-area: editor;\n  max-height: 100%;\n  background-color: white;\n  overflow-y: hidden;\n}\n\n#file-name-span {\n  grid-area: file-name;\n  margin-bottom: 0px;\n  font-weight: bold;\n}\n\n#button-box {\n  grid-area: btn-box;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: 'update-btn update-btn';\n}\n\n#update-btn {\n  grid-area: update-btn;\n}\n\n#render-btn {\n  grid-area: render-btn;\n  display: none;\n}\n\n#active-btn {\n  grid-area: active-btn;\n  display: none;\n}\n\n#store-param-btn {\n  grid-area: store-param-btn;\n  display: none;\n  /* visibility: hidden; */\n}\n\n/* #generate-btn {\n  grid-area: gen-btn;\n  display: none;\n} */\n\n#param-gen-btn-box {\n  grid-area: param-gen-btn-box;\n  display: none;\n}\n\n#save-scene-param-btn {\n  grid-area: sv-scene-param-btn;\n  display: none;\n}\n\n#image-canvas-div {\n  z-index: 2;\n  grid-column: 1;\n  grid-row: 1;\n  height: 100%;\n  max-height: 100%;\n  height: 100%;\n  max-width: 100%;\n  overflow-y: auto;\n  background-color: white;\n}\n\n#image-canvas {\n  min-height: 100%;\n  max-height: 100%;\n  width: 100%;\n  max-width: 100%;\n  margin: 0px;\n  padding: 0px;\n  background-color: white;\n  display: grid;\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n  grid-gap: 10px;\n  list-style-type: none;\n}\n\n.imageList {\n  display: block;\n  height: auto;\n  width: 100%;\n  display: block;\n}\n\n.imageList div {\n  height: auto;\n  width: 100%;\n  max-width: 100%;\n  display: block;\n}\n\n.imageList div img {\n  height: auto;\n  width: 100%;\n}\n\n.imageList div p {\n  font-size: 12px;\n  color: black;\n  height: auto;\n  display: block;\n  word-wrap: break-word;\n}\n\n/* #three-canvas {\n  z-index: 1;\n  grid-column: 1;\n  grid-row: 1;\n  display: block;\n} */\n\n#dat-gui-div {\n  z-index: 1;\n  grid-column: 1;\n  grid-row: 1;\n  display: block;\n}\n\n#dat-gui-div * {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: normal;\n}\n\n.page-content > * {\n  max-height: 80vh;\n}\n\n#file-name-div {\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-left: 10px;\n  margin-left: 10px;\n  width: 50%;\n}\n\n#file-rename-btn {\n  display: none;\n  float: right;\n}\n\n#file-dup-btn {\n  display: none;\n  float: right;\n}\n\n#file-dup-modal {\n  min-width: 400px;\n}\n\n#dup-file-name {\n  color: black;\n  font-size: medium;\n}\n\n#gen-scene-param-btn {\n  display: none;\n  float: right;\n  grid-area: gen-scene-param-btn;\n}\n\n#gen-scene-param-modal {\n  min-width: 600px;\n}\n\n.collapsible {\n  background-color: #777;\n  color: white;\n  cursor: pointer;\n  padding: 18px;\n  width: 100%;\n  border: none;\n  text-align: left;\n  outline: none;\n  font-size: 15px;\n}\n\n.active,\n.collapsible:hover {\n  background-color: #555;\n}\n\n.collapsible:after {\n  content: '\\02795';\n  font-size: 13px;\n  color: white;\n  float: right;\n  margin-left: 5px;\n}\n\n.active:after {\n  content: '\\2796';\n}\n\n.coll-content {\n  padding: 18px;\n  display: none;\n  overflow: hidden;\n  background-color: #f1f1f1;\n}\n\n.gen-scene-rule-box {\n  display: grid;\n  grid-template-rows: 1fr 4fr;\n  grid-template-areas:\n    'table-controls'\n    'rule-table';\n}\n\n.rule-table {\n  grid-area: rule-table;\n  z-index: 9999;\n}\n\n.add-rule-btn {\n  grid-area: add-rule-btn;\n}\n\n.undo-edit-btn {\n  grid-area: undo-edit-btn;\n}\n\n.rule-table-controls {\n  grid-area: table-controls;\n  display: grid;\n  grid-template-rows: repeat(1, 1fr);\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-areas: 'add-rule-btn undo-edit-btn';\n}\n\n.color-node-bio div.jsoneditor-field {\n  background-color: #c7ceea;\n}\n\n.color-node-automator div.jsoneditor-field {\n  background-color: #fdf1ed;\n}\n\n.color-node-general div.jsoneditor-field {\n  background-color: #e2f0cb;\n}\n\n.color-node-grid div.jsoneditor-field {\n  background-color: #ffdac1;\n}\n\n.color-node-fixation div.jsoneditor-field {\n  background-color: #ffb7b2;\n}\n\n.color-node-fixation-config div.jsoneditor-field {\n  background-color: #ffff99;\n}\n\n.color-node-sample div.jsoneditor-field {\n  background-color: #ff9aa2;\n}\n\n.color-node-test div.jsoneditor-field {\n  background-color: #dcf2de;\n}\n\n.color-node-choice div.jsoneditor-field {\n  background-color: #bde8e7;\n}\n\n.color-node-reward div.jsoneditor-field {\n  background-color: #b5ead7;\n}\n\n.color-node-nuisance div.jsoneditor-field {\n  background-color: #fde2e6;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/mkfiles.css":
/*!*************************!*\
  !*** ./src/mkfiles.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_mkfiles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./mkfiles.css */ "./node_modules/css-loader/dist/cjs.js!./src/mkfiles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_mkfiles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_mkfiles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_mkfiles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_mkfiles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/editor-params.ts":
/*!******************************!*\
  !*** ./src/editor-params.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.taskParamSchema = void 0;
exports.taskParamSchema = {
    title: 'MkTurk Task Params',
    description: 'Object containing MkTurk task parameters',
    type: ['object', 'array'],
    properties: {
        Agent: {
            type: 'string',
        },
        CheckRFID: {
            type: 'integer',
        },
        Automator: {
            type: ['string', 'integer'],
        },
        AutomatorFilePath: {
            type: 'string',
            examples: [
                '/mkturkfiles/paramterfiles/automators/touch_m2s_objectome.json',
            ],
        },
        CurrentAutomatorStage: {
            type: 'integer',
        },
        MinPercentCriterion: {
            type: 'integer',
        },
        MinTrialsCriterion: {
            type: 'integer',
        },
        DragtoRespond: {
            type: 'integer',
        },
        CalibrateEye: {
            type: 'integer',
        },
        NRSVP: {
            type: 'integer',
        },
        SameDifferent: {
            type: 'integer',
        },
        SamplingStrategy: {
            type: 'string',
        },
        NStickyResponse: {
            type: 'integer',
        },
        NTrialsPerBagBlock: {
            type: 'integer',
        },
        NGridPoints: {
            type: 'integer',
            minimum: 1,
        },
        GridSpacingInches: {
            type: 'number',
        },
        GridXOffsetInches: {
            type: 'number',
        },
        GridYOffsetInches: {
            type: 'number',
        },
        FixationGridIndex: {
            type: 'integer',
            minimum: -1,
        },
        SampleGridIndex: {
            type: 'integer',
            minimum: -1,
        },
        ObjectGridIndex: {
            type: 'array',
            items: {
                type: 'integer',
                minimum: 0,
            },
        },
        ChoiceGridIndex: {
            type: 'array',
            items: {
                type: 'integer',
                minimum: 0,
            },
        },
        TestGridIndex: {
            type: 'array',
            items: {
                type: 'integer',
                minimum: 0,
            },
        },
        NFixations: {
            type: 'integer',
            minimum: 1,
        },
        FixationUsesSample: {
            type: 'integer',
        },
        FixationSizeInches: {
            type: 'number',
        },
        FixationDuration: {
            type: 'integer',
        },
        FixationTimeOut: {
            type: 'integer',
        },
        FixationWindowSizeInches: {
            type: 'number',
        },
        FixationDotSizeInches: {
            type: 'number',
        },
        ImageBagsSample: {
            type: 'array',
            items: {
                type: 'string',
            },
        },
        KeepSampleON: {
            type: 'integer',
        },
        SamplePRE: {
            type: 'integer',
            minimum: 0,
        },
        SampleOFF: {
            type: 'integer',
            minimum: 0,
        },
        ImageBagsTest: {
            type: 'array',
            items: {
                type: 'string',
            },
        },
        KeepTestON: {
            type: 'integer',
        },
        TestOFF: {
            type: 'integer',
        },
        HideTestDistractors: {
            type: 'integer',
        },
        ChoiceSizeInches: {
            type: 'number',
            minimum: 0,
        },
        HideChoiceDistractors: {
            type: 'integer',
        },
        ChoiceTimeOut: {
            type: 'integer',
            minimum: 0,
        },
        RewardStage: {
            type: 'integer',
        },
        RewardPer1000Trials: {
            type: 'integer',
        },
        NRewardMax: {
            type: 'integer',
        },
        NConsecutiveHitsforBonus: {
            type: 'integer',
        },
        PunishTimeOut: {
            type: 'integer',
            minimum: 0,
        },
        ConsecutiveHitsITI: {
            type: 'integer',
            minimum: 0,
        },
        InterTrialInterval: {
            type: 'integer',
            minimum: 0,
        },
        BackgroundColor2D: {
            type: 'string',
        },
        Homecage: {
            type: 'integer',
        },
        Separated: {
            type: 'integer',
        },
        Species: {
            type: 'string',
            examples: ['human', 'marmoset', 'model'],
        },
        Liquid: {
            type: 'integer',
        },
    },
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const app_1 = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
const firestore_1 = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
const storage_1 = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
const auth_1 = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
const functions_1 = __webpack_require__(/*! firebase/functions */ "./node_modules/firebase/functions/dist/index.esm.js");
__webpack_require__(/*! ./mkfiles.css */ "./src/mkfiles.css");
// import 'dat.gui/build/dat.gui.css';
const firebaseConfig = {
    apiKey: 'AIzaSyA0fbv2VqE-AfF6V_nxSSXCEqaTlBlZnTI',
    authDomain: 'sandbox-ce2c5.firebaseapp.com',
    databaseURL: 'https://sandbox-ce2c5.firebaseio.com',
    projectId: 'sandbox-ce2c5',
    storageBucket: 'sandbox-ce2c5.appspot.com',
    messagingSenderId: '1003719887944',
};
let firebaseApp = (0, app_1.initializeApp)(firebaseConfig);
const mkquery_1 = __webpack_require__(/*! ./mkquery */ "./src/mkquery.ts");
const mkfinder_1 = __webpack_require__(/*! ./mkfinder */ "./src/mkfinder.ts");
const auth = (0, auth_1.getAuth)(firebaseApp);
const provider = new auth_1.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
(0, auth_1.getRedirectResult)(auth).then((result) => {
    if (result) {
        console.log('Sign-In Redirect Result, USER:', result.user.email, 'is signed in');
    }
    else if (auth.currentUser) {
        console.log('Sign-In Redirect Result, USER:', auth.currentUser, 'is signed in');
    }
    else {
        (0, auth_1.signInWithRedirect)(auth, provider);
    }
});
const functions = (0, functions_1.getFunctions)(firebaseApp);
const db = (0, firestore_1.getFirestore)(firebaseApp);
const storage = (0, storage_1.getStorage)(firebaseApp);
const storageRef = (0, storage_1.ref)(storage);
const rootRef = (0, storage_1.ref)(storageRef, 'mkturkfiles');
const mturkRootRef = (0, storage_1.ref)(storageRef, 'mkturkfiles_mturk');
let isRoot = true;
let mkq = new mkquery_1.Mkquery();
let mkf = new mkfinder_1.Mkfinder();
let bqListDatasets = (0, functions_1.httpsCallable)(functions, 'bqListDatasets');
let bqDatasetList = bqListDatasets();
bqDatasetList.then((datasetList) => {
    let bqOptgroup = document.querySelector('#bigquery-optgroup');
    datasetList.data.forEach((dataset) => {
        let option = document.createElement('option');
        option.value = dataset;
        option.textContent = 'bq/' + dataset;
        bqOptgroup.appendChild(option);
    });
});
let rfidToggle = document.querySelector('#rfid-switch');
let qryLocSelc = document.querySelector('#qry-loc-selector');
let fieldSelector = document.querySelector('#field-selector');
/* Quick Links */
let homeLink = document.querySelector('#quick-link-home');
let paramsLink = document.querySelector('#quick-link-params');
let paramstorageLink = document.querySelector('#quick-link-paramstorage');
let sceneParamsLink = document.querySelector('#quick-link-sceneparams');
let dailyDataLink = document.querySelector('#quick-link-dailydata');
let marmosetsLink = document.querySelector('#quick-link-marmosets');
window.addEventListener('load', (evt) => {
    evt.preventDefault();
    isRoot = false;
    qryLocSelc.value = 'mkturkfiles';
    qryLocSelc.dispatchEvent(new Event('change'));
    mkf.listStorageFiles(rootRef);
});
marmosetsLink.addEventListener('click', (ev) => {
    ev.preventDefault();
    qryLocSelc.value = 'marmosets';
    fieldSelector.value = 'name';
    qryLocSelc.dispatchEvent(new Event('change'));
    fieldSelector.dispatchEvent(new Event('change'));
    let ret = mkq.decodeQuery((0, firestore_1.collection)(db, 'marmosets'));
    ret.then((docs) => {
        mkf.listFirestoreDocs(docs, 'marmosets');
    });
});
paramsLink.addEventListener('click' || 0, (ev) => {
    ev.preventDefault();
    isRoot = false;
    qryLocSelc.value = 'mkturkfiles';
    qryLocSelc.dispatchEvent(new Event('change'));
    mkf.listStorageFiles((0, storage_1.ref)(storageRef, 'mkturkfiles/parameterfiles/subjects'));
});
paramstorageLink.addEventListener('click' || 0, (ev) => {
    ev.preventDefault();
    isRoot = false;
    qryLocSelc.value = 'mkturkfiles';
    qryLocSelc.dispatchEvent(new Event('change'));
    mkf.listStorageFiles((0, storage_1.ref)(storageRef, 'mkturkfiles/parameterfiles/params_storage'));
});
homeLink.addEventListener('click' || 0, (ev) => {
    ev.preventDefault();
    isRoot = false;
    qryLocSelc.value = 'mkturkfiles';
    qryLocSelc.dispatchEvent(new Event('change'));
    // mkf.listStorageFiles(storageRef.child("mkturkfiles"));
    mkf.listStorageFiles(rootRef);
});
sceneParamsLink.addEventListener('click' || 0, (ev) => {
    ev.preventDefault();
    isRoot = false;
    qryLocSelc.value = 'mkturkfiles';
    qryLocSelc.dispatchEvent(new Event('change'));
    // mkf.listStorageFiles(storageRef.child("mkturkfiles/scenebags/objectome3d"));
    mkf.listStorageFiles((0, storage_1.ref)(rootRef, 'scenebags/objectome3d'));
});
dailyDataLink.addEventListener('click' || 0, (ev) => {
    ev.preventDefault();
    isRoot = false;
    qryLocSelc.value = 'mkturkfiles';
    qryLocSelc.dispatchEvent(new Event('change'));
    // mkf.listStorageFiles(storageRef.child('mkturkfiles/mkdailydata'));
    mkf.listStorageFiles((0, storage_1.ref)(rootRef, 'mkdailydata'));
});
qryLocSelc.addEventListener('change', (ev) => {
    let fs = document.querySelector('#field-selector');
    let ki0 = document.querySelector('#keyword-input-0');
    let ki1 = document.querySelector('#keyword-input-1');
    let ki2 = document.querySelector('#keyword-input-2');
    let goBtn = document.querySelector('#go-btn');
    let plotX = document.querySelector('#quick-plot-x');
    let plotY = document.querySelector('#quick-plot-y');
    let plotBtn = document.querySelector('#plot-btn');
    let queryResult;
    switch (qryLocSelc.value) {
        case 'marmosets':
            fs.style.visibility = 'visible';
            ki0.style.visibility = 'visible';
            ki1.style.visibility = 'hidden';
            ki2.style.visibility = 'hidden';
            goBtn.style.visibility = 'visible';
            resetPlaceholder();
            removeElementsByClassName('field-options');
            let nameMarmosets = document.createElement('option');
            nameMarmosets.setAttribute('class', 'field-options');
            nameMarmosets.setAttribute('value', 'name');
            nameMarmosets.setAttribute('selected', 'true');
            nameMarmosets.textContent = 'name';
            let sexMarmosets = document.createElement('option');
            sexMarmosets.setAttribute('class', 'field-options');
            sexMarmosets.setAttribute('value', 'sex');
            sexMarmosets.textContent = 'sex';
            let rfidMarmosets = document.createElement('option');
            rfidMarmosets.setAttribute('class', 'field-options');
            rfidMarmosets.setAttribute('value', 'rfid');
            rfidMarmosets.textContent = 'RFID';
            let breedingMarmosets = document.createElement('option');
            breedingMarmosets.setAttribute('class', 'field-options');
            breedingMarmosets.setAttribute('value', 'breeding');
            breedingMarmosets.textContent = 'breeding';
            let birthdateMarmosets = document.createElement('option');
            birthdateMarmosets.setAttribute('class', 'field-options');
            birthdateMarmosets.setAttribute('value', 'birthdate');
            birthdateMarmosets.textContent = 'birthdate';
            let fieldSelectorMarmosets = document.querySelector('#field-selector');
            fieldSelectorMarmosets.appendChild(nameMarmosets);
            fieldSelectorMarmosets.appendChild(sexMarmosets);
            fieldSelectorMarmosets.appendChild(rfidMarmosets);
            fieldSelectorMarmosets.appendChild(breedingMarmosets);
            fieldSelectorMarmosets.appendChild(birthdateMarmosets);
            fieldSelectorMarmosets.dispatchEvent(new Event('change'));
            break;
        case 'mkturkdata':
            fs.style.visibility = 'visible';
            ki0.style.visibility = 'visible';
            ki1.style.visibility = 'visible';
            ki2.style.visibility = 'hidden';
            goBtn.style.visibility = 'visible';
            plotX.style.visibility = 'hidden';
            plotY.style.visibility = 'hidden';
            plotBtn.style.visibility = 'hidden';
            resetPlaceholder();
            removeElementsByClassName('field-options');
            let agentTypeCurDate = document.createElement('option');
            agentTypeCurDate.setAttribute('class', 'field-options');
            agentTypeCurDate.setAttribute('value', 'agentTypeCurDate');
            agentTypeCurDate.setAttribute('selected', 'true');
            agentTypeCurDate.textContent = 'Agent & CurrentDate';
            let fieldSelectorMkturk = document.querySelector('#field-selector');
            fieldSelectorMkturk.appendChild(agentTypeCurDate);
            fieldSelectorMkturk.dispatchEvent(new Event('change'));
            break;
        case 'objects':
            fs.style.visibility = 'visible';
            ki0.style.visibility = 'visible';
            ki1.style.visibility = 'hidden';
            ki2.style.visibility = 'hidden';
            goBtn.style.visibility = 'visible';
            plotX.style.visibility = 'hidden';
            plotY.style.visibility = 'hidden';
            plotBtn.style.visibility = 'hidden';
            resetPlaceholder();
            removeElementsByClassName('field-options');
            let identityObjects = document.createElement('option');
            identityObjects.setAttribute('class', 'field-options');
            identityObjects.setAttribute('value', 'identity');
            identityObjects.setAttribute('selected', 'true');
            identityObjects.textContent = 'identity';
            let meshObjects = document.createElement('option');
            meshObjects.setAttribute('class', 'field-options');
            meshObjects.setAttribute('value', 'mesh');
            meshObjects.textContent = 'mesh';
            let nounObjects = document.createElement('option');
            nounObjects.setAttribute('class', 'field-options');
            nounObjects.setAttribute('value', 'noun');
            nounObjects.textContent = 'noun';
            let fieldSelectorObjects = document.querySelector('#field-selector');
            fieldSelectorObjects.appendChild(identityObjects);
            fieldSelectorObjects.appendChild(meshObjects);
            fieldSelectorObjects.appendChild(nounObjects);
            fieldSelectorObjects.dispatchEvent(new Event('change'));
            break;
        case 'mkdailydata':
            // let ret = mkq.decodeQuery(db.collection('mkdailydata'));
            let ret = mkq.decodeQuery((0, firestore_1.collection)(db, 'mkdailydata'));
            ret.then((docs) => {
                mkf.listFirestoreDocs(docs, 'mkdailydata');
            });
            break;
        case 'mkturkfiles':
            console.log('qryLocSelc change mkturkfiles');
            fs.style.visibility = 'hidden';
            ki0.style.visibility = 'hidden';
            ki1.style.visibility = 'hidden';
            ki2.style.visibility = 'hidden';
            goBtn.style.visibility = 'hidden';
            plotX.style.visibility = 'hidden';
            plotY.style.visibility = 'hidden';
            plotBtn.style.visibility = 'hidden';
            removeElementsByClassName('field-options');
            mkf.listStorageFiles(rootRef);
            if (isRoot) {
                mkf.listStorageFiles(rootRef);
            }
            break;
        case 'mkturkfiles_mturk':
            fs.style.visibility = 'hidden';
            ki0.style.visibility = 'hidden';
            ki1.style.visibility = 'hidden';
            ki2.style.visibility = 'hidden';
            goBtn.style.visibility = 'hidden';
            plotX.style.visibility = 'hidden';
            plotY.style.visibility = 'hidden';
            plotBtn.style.visibility = 'hidden';
            removeElementsByClassName('field-options');
            mkf.listStorageFiles(mturkRootRef);
            if (isRoot) {
                mkf.listStorageFiles(mturkRootRef);
            }
            break;
        case 'devices':
            fs.style.visibility = 'hidden';
            ki0.style.visibility = 'hidden';
            ki1.style.visibility = 'hidden';
            ki2.style.visibility = 'hidden';
            goBtn.style.visibility = 'hidden';
            plotX.style.visibility = 'hidden';
            plotY.style.visibility = 'hidden';
            plotBtn.style.visibility = 'hidden';
            resetPlaceholder();
            removeElementsByClassName('field-options');
            // queryResult = mkq.decodeQuery(db.collection("devices"));
            queryResult = mkq.decodeQuery((0, firestore_1.collection)(db, 'devices'));
            queryResult.then((docs) => {
                mkf.listFirestoreDocs(docs, 'devices');
            });
            break;
        case 'mturkhits':
            fs.style.visibility = 'hidden';
            ki0.style.visibility = 'hidden';
            ki1.style.visibility = 'hidden';
            ki2.style.visibility = 'hidden';
            goBtn.style.visibility = 'hidden';
            plotX.style.visibility = 'hidden';
            plotY.style.visibility = 'hidden';
            plotBtn.style.visibility = 'hidden';
            resetPlaceholder();
            removeElementsByClassName('field-options');
            queryResult = mkq.decodeQuery((0, firestore_1.collection)(db, 'mturkhits'));
            queryResult.then((docs) => {
                mkf.listFirestoreDocs(docs, 'mturkhits');
            });
            break;
        case 'mturkusers':
            fs.style.visibility = 'hidden';
            ki0.style.visibility = 'hidden';
            ki1.style.visibility = 'hidden';
            ki2.style.visibility = 'hidden';
            goBtn.style.visibility = 'hidden';
            plotX.style.visibility = 'hidden';
            plotY.style.visibility = 'hidden';
            plotBtn.style.visibility = 'hidden';
            resetPlaceholder();
            removeElementsByClassName('field-options');
            queryResult = mkq.decodeQuery((0, firestore_1.collection)(db, 'mturkusers'));
            queryResult.then((docs) => {
                mkf.listFirestoreDocs(docs, 'mturkusers');
            });
            break;
        case 'mturkdata':
            fs.style.visibility = 'hidden';
            ki0.style.visibility = 'hidden';
            ki1.style.visibility = 'hidden';
            ki2.style.visibility = 'hidden';
            goBtn.style.visibility = 'hidden';
            plotX.style.visibility = 'hidden';
            plotY.style.visibility = 'hidden';
            plotBtn.style.visibility = 'hidden';
            resetPlaceholder();
            removeElementsByClassName('field-options');
            queryResult = mkq.decodeQuery((0, firestore_1.collection)(db, 'mturkdata'));
            queryResult.then((docs) => {
                mkf.listFirestoreDocs(docs, 'mturkdata');
            });
            break;
        case 'eyecalibrations':
            console.log('eye');
            fs.style.visibility = 'hidden';
            ki0.style.visibility = 'hidden';
            ki1.style.visibility = 'hidden';
            ki2.style.visibility = 'hidden';
            goBtn.style.visibility = 'hidden';
            plotX.style.visibility = 'hidden';
            plotY.style.visibility = 'hidden';
            plotBtn.style.visibility = 'hidden';
            resetPlaceholder();
            removeElementsByClassName('field-options');
            // queryResult = mkq.decodeQuery(db.collection("eyecalibrations"));
            queryResult = mkq.decodeQuery((0, firestore_1.collection)(db, 'eyecalibrations'));
            queryResult.then((docs) => {
                mkf.listFirestoreDocs(docs, 'eyecalibrations');
            });
            break;
        case 'mkscale':
            fs.style.visibility = 'visible';
            ki0.style.visibility = 'visible';
            ki1.style.visibility = 'visible';
            ki2.style.visibility = 'hidden';
            goBtn.style.visibility = 'visible';
            plotX.style.visibility = 'visible';
            plotY.style.visibility = 'visible';
            plotBtn.style.visibility = 'visible';
            resetPlaceholder();
            removeElementsByClassName('field-options');
            let nameCurDate = document.createElement('option');
            nameCurDate.setAttribute('class', 'field-options');
            nameCurDate.setAttribute('value', 'nameCurDate');
            nameCurDate.setAttribute('selected', 'true');
            nameCurDate.textContent = 'Name & CurrentDate';
            fs.appendChild(nameCurDate);
            fs.dispatchEvent(new Event('change'));
            break;
        case 'eyedata':
            fs.style.visibility = 'visible';
            ki0.style.visibility = 'visible';
            ki1.style.visibility = 'visible';
            ki2.style.visibility = 'hidden';
            goBtn.style.visibility = 'visible';
            plotX.style.visibility = 'visible';
            plotY.style.visibility = 'visible';
            plotBtn.style.visibility = 'visible';
            resetPlaceholder();
            removeElementsByClassName('field-options');
            let bqAgentDate = document.createElement('option');
            bqAgentDate.setAttribute('class', 'field-options');
            bqAgentDate.setAttribute('value', 'nameCurDate');
            bqAgentDate.setAttribute('selected', 'true');
            bqAgentDate.textContent = 'Name & CurrentDate';
            fs.appendChild(bqAgentDate);
            fs.dispatchEvent(new Event('change'));
            break;
    }
});
fieldSelector === null || fieldSelector === void 0 ? void 0 : fieldSelector.addEventListener('change', (ev) => {
    let field = fieldSelector === null || fieldSelector === void 0 ? void 0 : fieldSelector.value;
    let ki0 = document.querySelector('#keyword-input-0');
    let ki1 = document.querySelector('#keyword-input-1');
    let ki2 = document.querySelector('#keyword-input-2');
    let plotX = document.querySelector('#quick-plot-x');
    let plotY = document.querySelector('#quick-plot-y');
    let plotBtn = document.querySelector('#plot-btn');
    switch (field) {
        case 'name':
            resetPlaceholder();
            ki0.setAttribute('placeholder', 'name');
            plotX.style.visibility = 'visible';
            plotY.style.visibility = 'visible';
            plotBtn.style.visibility = 'visible';
            break;
        case 'sex':
            resetPlaceholder();
            ki0.setAttribute('placeholder', 'sex');
            plotX.style.visibility = 'hidden';
            plotY.style.visibility = 'hidden';
            plotBtn.style.visibility = 'hidden';
            break;
        case 'rfid':
            resetPlaceholder();
            ki0.setAttribute('placeholder', 'RFID');
            plotX.style.visibility = 'visible';
            plotY.style.visibility = 'visible';
            plotBtn.style.visibility = 'visible';
            break;
        case 'breeding':
            resetPlaceholder();
            ki0.setAttribute('placeholder', 'breeding');
            plotX.style.visibility = 'hidden';
            plotY.style.visibility = 'hidden';
            plotBtn.style.visibility = 'hidden';
            break;
        case 'birthdate':
            resetPlaceholder();
            ki0.setAttribute('placeholder', 'birthdate (e.g. 04/17/2019; +-7)');
            plotX.style.visibility = 'hidden';
            plotY.style.visibility = 'hidden';
            plotBtn.style.visibility = 'hidden';
            break;
        case 'agentTypeCurDate':
            ki0.setAttribute('placeholder', 'Agent');
            ki1.setAttribute('placeholder', 'CurrentDate (e.g. 04/17/2019; +-7)');
            plotX.style.visibility = 'hidden';
            plotY.style.visibility = 'hidden';
            plotBtn.style.visibility = 'hidden';
            break;
        case 'nameCurDate':
            ki0.setAttribute('placeholder', 'Name');
            ki1.setAttribute('placeholder', 'CurrentDate (e.g. 04/17/2019; +-7)');
            break;
        case 'eyedata':
            ki0.setAttribute('placeholder', 'Agent');
            ki1.setAttribute('Placeholder', 'Date (e.g. 04/17/2019)');
            break;
    }
});
let queryForm = document.querySelector('#mkquery-form');
queryForm === null || queryForm === void 0 ? void 0 : queryForm.addEventListener('submit', async (ev) => {
    var _a, _b, _c;
    ev.preventDefault();
    console.log('test weird');
    let qryLoc = qryLocSelc === null || qryLocSelc === void 0 ? void 0 : qryLocSelc.value;
    let field = fieldSelector === null || fieldSelector === void 0 ? void 0 : fieldSelector.value;
    let k0 = (_a = document.querySelector('#keyword-input-0')) === null || _a === void 0 ? void 0 : _a.value;
    let k1 = (_b = document.querySelector('#keyword-input-1')) === null || _b === void 0 ? void 0 : _b.value;
    let k2 = (_c = document.querySelector('#keyword-input-2')) === null || _c === void 0 ? void 0 : _c.value;
    let queryParam = [];
    let queryStr = '';
    let queryResult;
    switch (qryLoc) {
        case 'marmosets':
            if (k0) {
                queryParam.push({ field: field, keyword: k0 });
            }
            else {
                console.error('No query arguments!');
                alert('No query arguments!');
            }
            queryResult = (0, firestore_1.query)((0, firestore_1.collection)(db, 'marmosets'), (0, firestore_1.where)(queryParam[0].field, '==', queryParam[0].keyword));
            // queryStr = "db.collection('marmosets')" + mkq.mkquery(queryParam);
            // queryStr = "query(collection(db, 'marmosets')"
            queryStr = `query(collection(db, 'marmosets'), ${mkq.mkquery(queryParam)})`;
            break;
        case 'mkturkdata':
            if (k0) {
                queryParam.push({ field: 'Agent', keyword: k0 });
            }
            // if (k1) {
            //   queryParam.push({ field: "Doctype", keyword: k1 });
            // }
            if (k1) {
                queryParam.push({ field: 'CurrentDate', keyword: k1 });
            }
            if (queryParam.length == 0) {
                console.error('No query arguments!');
                alert('No query arguments!');
            }
            else if (queryParam.length == 1) {
                queryResult = (0, firestore_1.query)((0, firestore_1.collection)(db, 'mkturkdata'), (0, firestore_1.where)(queryParam[0].field, '==', queryParam[0].keyword));
            }
            else if (queryParam.length == 2) {
                queryResult = (0, firestore_1.query)((0, firestore_1.collection)(db, 'mkturkdata'), (0, firestore_1.where)(queryParam[0].field, '==', queryParam[0].keyword), (0, firestore_1.where)(queryParam[1].field, '==', queryParam[1].keyword));
            }
            else if (queryParam.length == 3) {
                queryResult = (0, firestore_1.query)((0, firestore_1.collection)(db, 'mkturkdata'), (0, firestore_1.where)(queryParam[0].field, '==', queryParam[0].keyword), (0, firestore_1.where)(queryParam[1].field, '==', queryParam[1].keyword), (0, firestore_1.where)(queryParam[2].field, '==', queryParam[2].keyword));
            }
            if (queryParam.length > 0) {
                queryStr = "db.collection('mkturkdata')" + mkq.mkquery(queryParam);
            }
            else {
                console.error('No query arguments!');
                alert('No query arguments!');
            }
            break;
        case 'objects':
            if (k0) {
                queryParam.push({ field: field, keyword: k0 });
            }
            else {
                console.error('No query arguments!');
                alert('No query arguments!');
            }
            queryStr = "db.collection('objects')" + mkq.mkquery(queryParam);
            break;
        case 'mkscale':
            if (k0) {
                queryParam.push({ field: 'Name', keyword: k0 });
            }
            if (k1) {
                queryParam.push({ field: 'CurrentDate', keyword: k1 });
            }
            if (queryParam.length > 0) {
                queryStr = "db.collection('mkscale')" + mkq.mkquery(queryParam);
            }
            else {
                console.error('No query arguments!');
                alert('No query arguments!');
            }
            break;
        case 'eyedata':
            if (k0 && k1) {
                queryStr = mkq.mkbquery('eyedata', k0, k1);
            }
            else {
                console.error('Incorrect query: Need two query arguments!');
                alert('Incorrect query: Need two query arguments!');
            }
            break;
    }
    if (queryStr.startsWith('query')) {
        console.log(queryStr);
        // query = eval(queryStr);
        let ret = mkq.decodeQuery(queryResult);
        ret.then((docs) => {
            mkf.listFirestoreDocs(docs, qryLoc);
            if (rfidToggle.checked) {
                mkf.finder.selectRow();
                mkf.mke.displayFirebaseTextFile(mkf.finder.getData()[0], 'marmosets');
            }
        });
    }
    else if (queryStr.startsWith('SELECT *')) {
        let test = mkq.decodeBigQuery(queryStr);
        console.log(test);
        test.then((data) => {
            if (Array.isArray(data.data)) {
                mkf.listBigQueryTable(data.data, qryLoc, k0);
            }
            // mkf.listBigQueryTable(data.data, qryLoc, k0!);
        });
    }
});
function resetPlaceholder() {
    let keywordInputs = [
        ...document.querySelectorAll('.keyword-input'),
    ];
    for (let i = 0; i < keywordInputs.length; i++) {
        keywordInputs[i].placeholder = '';
        keywordInputs[i].value = '';
    }
}
function removeElementsByClassName(cName) {
    var _a;
    let elements = document.getElementsByClassName(cName);
    while (elements.length > 0) {
        (_a = elements[0].parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(elements[0]);
    }
}


/***/ }),

/***/ "./src/mkfinder.ts":
/*!*************************!*\
  !*** ./src/mkfinder.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Mkfinder = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const app_1 = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
const firestore_1 = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
const mkmedia_1 = __webpack_require__(/*! ./mkmedia */ "./src/mkmedia.ts");
const file_saver_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js"));
const storage_1 = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
const db = (0, firestore_1.getFirestore)();
class Mkfinder {
    constructor() {
        this.finder = new Tabulator('#finder');
        this.previousPath = '';
        this.storage = (0, storage_1.getStorage)((0, app_1.getApp)());
        this.storageRef = (0, storage_1.ref)(this.storage);
        this.selectedImages = [];
        this.backBtn = document.querySelector('#back-btn');
        this.showImagesBtn = document.querySelector('#show-images-btn');
        this.numImgSlider = document.querySelector('#num-image-slider');
        this.downloadBtn = document.querySelector('#download-file');
        this.pathName = document.querySelector('#path-name-span');
        this.renderBtn = document.querySelector('#render-btn');
        this.backBtnAction();
        this.showImagesBtnAction();
        this.numImgSliderAction();
        this.downloadBtnAction();
        this.refreshStorageTable();
        this.mkt = new mkmedia_1.Mkthree();
        this.mki = new mkmedia_1.Mkimage();
        this.mke = new mkmedia_1.Mkeditor();
        this.mkc = new mkmedia_1.Mkchart();
        this.renderBtnAction();
    }
    listFirestoreDocs(dataArr, database) {
        this.displayFirestoreTable(dataArr, database);
    }
    renderBtnAction() {
        this.renderBtn.addEventListener('onRenderRequest', (evt) => {
            this.mkt.destroy();
            this.mki.removeImages();
            this.mkt.canvas.style.zIndex = '3';
            this.mke.editorDivElement.style.zIndex = '2';
            this.mki.imgCanvasDiv.style.zIndex = '1';
            this.mkt.renderCubeMap(evt.detail);
        });
    }
    displayFirestoreTable(dataArr, database) {
        dataArr = this.timestampToDate(dataArr);
        this.mke.makeActiveBtn.style.display = 'none';
        this.mke.storeParamBtn.style.display = 'none';
        if (database == 'marmosets') {
            this.finder.destroy();
            this.pathName.innerText = 'marmosets';
            this.finder = new Tabulator('#finder', {
                data: dataArr,
                index: 'name',
                layout: 'fitColumns',
                initialSort: [{ column: 'name', dir: 'asc' }],
                columns: [
                    {
                        title: "<input id='select-all' type='checkbox'/>",
                        width: 15,
                        headerSort: false,
                    },
                    { title: 'Name', field: 'name' },
                    { title: 'Sex', field: 'sex' },
                    { title: 'DOB', field: 'birthdate' },
                    { title: 'RFID', field: 'rfid' },
                ],
                selectable: true,
                selectableRangeMode: 'click',
                rowClick: (event, row) => {
                    event.stopPropagation();
                    this.mkt.destroy();
                    this.mki.removeImages();
                    this.mke.editorDivElement.style.zIndex = '3';
                    this.mki.imgCanvasDiv.style.zIndex = '2';
                    this.mkt.canvas.style.zIndex = '1';
                    this.mke.displayFirebaseTextFile(row.getData(), database);
                    this.mkc.removeElementsByClassName('axis-options');
                    this.mkc.populateAxisFields(row.getData());
                },
                rowTap: (event, row) => {
                    event.stopPropagation();
                    this.mkt.destroy();
                    this.mki.removeImages();
                    this.mke.editorDivElement.style.zIndex = '3';
                    this.mki.imgCanvasDiv.style.zIndex = '2';
                    this.mkt.canvas.style.zIndex = '1';
                    this.mke.displayFirebaseTextFile(row.getData(), database);
                    this.mkc.removeElementsByClassName('axis-options');
                    this.mkc.populateAxisFields(row.getData());
                },
                tableBuilt: () => {
                    /* selectAllBox function */
                    let selectAllBox = document.querySelector('#select-all');
                    selectAllBox.addEventListener('change', (ev) => {
                        if (selectAllBox.checked == true) {
                            this.finder.selectRow();
                        }
                        else {
                            this.finder.deselectRow();
                        }
                    });
                },
            });
        }
        else if (database == 'mkturkdata') {
            this.finder.destroy();
            this.pathName.innerText = 'mkturkdata';
            this.finder = new Tabulator('#finder', {
                data: dataArr,
                index: 'index',
                layout: 'fitColumns',
                initialSort: [{ column: 'Agent', dir: 'asc' }],
                columns: [
                    {
                        title: "<input id='select-all' type='checkbox'/>",
                        width: 15,
                        headerSort: false,
                    },
                    { title: 'Agent', field: 'Agent' },
                    { title: 'Doctype', field: 'Doctype' },
                    { title: 'CurrentDate', field: 'CurrentDate' },
                    {
                        title: 'FirestoreDocRoot',
                        field: 'FirestoreDocRoot',
                        visible: false,
                    },
                ],
                selectable: true,
                selectableRangeMode: 'click',
                rowClick: (event, row) => {
                    event.stopPropagation();
                    this.mkt.destroy();
                    this.mki.removeImages();
                    this.mke.editorDivElement.style.zIndex = '3';
                    this.mki.imgCanvasDiv.style.zIndex = '2';
                    this.mkt.canvas.style.zIndex = '1';
                    this.mke.displayFirebaseTextFile(row.getData(), database);
                },
                rowTap: (event, row) => {
                    event.stopPropagation();
                    this.mkt.destroy();
                    this.mki.removeImages();
                    this.mke.editorDivElement.style.zIndex = '3';
                    this.mki.imgCanvasDiv.style.zIndex = '2';
                    this.mkt.canvas.style.zIndex = '1';
                    this.mke.displayFirebaseTextFile(row.getData(), database);
                },
                tableBuilt: () => {
                    /* selectAllBox function */
                    let selectAllBox = document.querySelector('#select-all');
                    selectAllBox.addEventListener('change', (ev) => {
                        if (selectAllBox.checked == true) {
                            this.finder.selectRow();
                        }
                        else {
                            this.finder.deselectRow();
                        }
                    });
                },
            });
        }
        else if (database == 'mkdailydata') {
            this.finder.destroy();
            this.pathName.innerText = 'mkdailydata';
            this.finder = new Tabulator('#finder', {
                data: dataArr,
                index: 'index',
                layout: 'fitColumns',
                initialSort: [{ column: 'agent', dir: 'asc' }],
                columns: [
                    {
                        title: "<input id='select-all' type='checkbox'/>",
                        width: 15,
                        headerSort: false,
                    },
                    { title: 'Agent', field: 'agent' },
                ],
                selectable: true,
                selectableRangeMode: 'click',
                rowClick: (event, row) => {
                    event.stopPropagation();
                    this.mkt.destroy();
                    this.mki.removeImages();
                    this.mke.editorDivElement.style.zIndex = '3';
                    this.mki.imgCanvasDiv.style.zIndex = '2';
                    this.mkt.canvas.style.zIndex = '1';
                    this.mke.displayFirebaseTextFile(row.getData(), database);
                },
                rowTap: (event, row) => {
                    event.stopPropagation();
                    this.mkt.destroy();
                    this.mki.removeImages();
                    this.mke.editorDivElement.style.zIndex = '3';
                    this.mki.imgCanvasDiv.style.zIndex = '2';
                    this.mkt.canvas.style.zIndex = '1';
                    this.mke.displayFirebaseTextFile(row.getData(), database);
                },
                tableBuilt: () => {
                    /* selectAllBox function */
                    let selectAllBox = document.querySelector('#select-all');
                    selectAllBox.addEventListener('change', (ev) => {
                        if (selectAllBox.checked == true) {
                            this.finder.selectRow();
                        }
                        else {
                            this.finder.deselectRow();
                        }
                    });
                },
            });
        }
        else if (database == 'objects') {
            this.finder.destroy();
            this.pathName.innerText = 'objects';
            this.finder = new Tabulator('#finder', {
                data: dataArr,
                index: 'docname',
                layout: 'fitColumns',
                initialSort: [{ column: 'identity', dir: 'asc' }],
                columns: [
                    {
                        title: "<input id='select-all' type='checkbox'/>",
                        width: 15,
                        headerSort: false,
                    },
                    { title: 'Identity', field: 'identity' },
                    { title: 'Mesh', field: 'mesh' },
                    { title: 'Noun', field: 'noun' },
                    { title: 'Meshfile', field: 'meshfile' },
                    { title: 'MeshfilePath', field: 'meshfilepath' },
                ],
                selectable: true,
                selectableRangeMode: 'click',
                rowClick: (event, row) => {
                    event.stopPropagation();
                    this.mkt.destroy();
                    this.mki.removeImages();
                    this.mke.editorDivElement.style.zIndex = '3';
                    this.mki.imgCanvasDiv.style.zIndex = '2';
                    this.mkt.canvas.style.zIndex = '1';
                    this.mke.displayFirebaseTextFile(row.getData(), database);
                },
                rowTap: (event, row) => {
                    event.stopPropagation();
                    this.mkt.destroy();
                    this.mki.removeImages();
                    this.mke.editorDivElement.style.zIndex = '3';
                    this.mki.imgCanvasDiv.style.zIndex = '2';
                    this.mkt.canvas.style.zIndex = '1';
                    this.mke.displayFirebaseTextFile(row.getData(), database);
                },
                tableBuilt: () => {
                    /* selectAllBox function */
                    let selectAllBox = document.querySelector('#select-all');
                    selectAllBox.addEventListener('change', (ev) => {
                        if (selectAllBox.checked == true) {
                            this.finder.selectRow();
                        }
                        else {
                            this.finder.deselectRow();
                        }
                    });
                },
            });
        }
        else if (database == 'devices') {
            this.finder.destroy();
            this.pathName.innerText = 'devices';
            this.finder = new Tabulator('#finder', {
                data: dataArr,
                index: 'docname',
                layout: 'fitColumns',
                initialSort: [{ column: 'model', dir: 'asc' }],
                columns: [
                    {
                        title: "<input id='select-all' type='checkbox'/>",
                        width: 15,
                        headerSort: false,
                    },
                    { title: 'Model', field: 'model' },
                    { title: 'Brand', field: 'brand' },
                    { title: 'Type', field: 'type' },
                    { title: 'PPI', field: 'ppi' },
                ],
                selectable: true,
                selectableRangeMode: 'click',
                rowClick: (event, row) => {
                    event.stopPropagation();
                    this.mkt.destroy();
                    this.mki.removeImages();
                    this.mke.editorDivElement.style.zIndex = '3';
                    this.mki.imgCanvasDiv.style.zIndex = '2';
                    this.mkt.canvas.style.zIndex = '1';
                    this.mke.displayFirebaseTextFile(row.getData(), database);
                },
                rowTap: (event, row) => {
                    event.stopPropagation();
                    this.mkt.destroy();
                    this.mki.removeImages();
                    this.mke.editorDivElement.style.zIndex = '3';
                    this.mki.imgCanvasDiv.style.zIndex = '2';
                    this.mkt.canvas.style.zIndex = '1';
                    this.mke.displayFirebaseTextFile(row.getData(), database);
                },
                tableBuilt: () => {
                    /* selectAllBox function */
                    let selectAllBox = document.querySelector('#select-all');
                    selectAllBox.addEventListener('change', (ev) => {
                        if (selectAllBox.checked == true) {
                            this.finder.selectRow();
                        }
                        else {
                            this.finder.deselectRow();
                        }
                    });
                },
            });
        }
        else if (database == 'eyecalibrations') {
            this.finder.destroy();
            this.pathName.innerText = 'eyecalibrations';
            this.finder = new Tabulator('#finder', {
                data: dataArr,
                index: 'Taskdoc',
                layout: 'fitColumns',
                initialSort: [{ column: 'Agent', dir: 'asc' }],
                columns: [
                    {
                        title: "<input id='select-all' type='checkbox'/>",
                        width: 15,
                        headerSort: false,
                    },
                    { title: 'Agent', field: 'Agent' },
                    { title: 'CurrentDate', field: 'CurrentDate' },
                ],
                selectable: true,
                selectableRangeMode: 'click',
                rowClick: (event, row) => {
                    event.stopPropagation();
                    this.mkt.destroy();
                    this.mki.removeImages();
                    this.mke.editorDivElement.style.zIndex = '3';
                    this.mki.imgCanvasDiv.style.zIndex = '2';
                    this.mkt.canvas.style.zIndex = '1';
                    this.mke.displayFirebaseTextFile(row.getData(), database);
                },
                rowTap: (event, row) => {
                    event.stopPropagation();
                    this.mkt.destroy();
                    this.mki.removeImages();
                    this.mke.editorDivElement.style.zIndex = '3';
                    this.mki.imgCanvasDiv.style.zIndex = '2';
                    this.mkt.canvas.style.zIndex = '1';
                    this.mke.displayFirebaseTextFile(row.getData(), database);
                },
                tableBuilt: () => {
                    /* selectAllBox function */
                    let selectAllBox = document.querySelector('#select-all');
                    selectAllBox.addEventListener('change', (ev) => {
                        if (selectAllBox.checked == true) {
                            this.finder.selectRow();
                        }
                        else {
                            this.finder.deselectRow();
                        }
                    });
                },
            });
        }
        else if (database == 'mkscale') {
            this.finder.destroy();
            this.pathName.innerText = 'mkscale';
            this.finder = new Tabulator('#finder', {
                data: dataArr,
                index: 'Docname',
                layout: 'fitColumns',
                initialSort: [{ column: 'CurrentDate', dir: 'asc' }],
                columns: [
                    {
                        title: "<input id='select-all' type='checkbox'/>",
                        width: 15,
                        headerSort: false,
                    },
                    { title: 'Name', field: 'Name' },
                    { title: 'CurrentDate', field: 'CurrentDate' },
                ],
                selectable: true,
                selectableRangeMode: 'click',
                rowClick: (event, row) => {
                    event.stopPropagation();
                    this.mkt.destroy();
                    this.mki.removeImages();
                    this.mke.editorDivElement.style.zIndex = '3';
                    this.mki.imgCanvasDiv.style.zIndex = '2';
                    this.mkt.canvas.style.zIndex = '1';
                    this.mke.displayFirebaseTextFile(row.getData(), database);
                    this.mkc.populateAxisFields(row.getData());
                },
                rowTap: (event, row) => {
                    event.stopPropagation();
                    this.mkt.destroy();
                    this.mki.removeImages();
                    this.mke.editorDivElement.style.zIndex = '3';
                    this.mki.imgCanvasDiv.style.zIndex = '2';
                    this.mkt.canvas.style.zIndex = '1';
                    this.mke.displayFirebaseTextFile(row.getData(), database);
                    this.mkc.populateAxisFields(row.getData());
                },
                tableBuilt: () => {
                    /* selectAllBox function */
                    let selectAllBox = document.querySelector('#select-all');
                    selectAllBox.addEventListener('change', (ev) => {
                        if (selectAllBox.checked == true) {
                            this.finder.selectRow();
                        }
                        else {
                            this.finder.deselectRow();
                        }
                    });
                },
            });
        }
        else if (database === 'mturkhits') {
            this.finder.destroy();
            this.pathName.innerText = 'mturkhits';
            this.finder = new Tabulator('#finder', {
                data: dataArr,
                index: 'hitId',
                layout: 'fitColumns',
                initialSort: [{ column: 'hitId', dir: 'asc' }],
                columns: [
                    {
                        title: "<input id='select-all' type='checkbox'/>",
                        width: 15,
                        headerSort: false,
                    },
                    { title: 'HIT ID', field: 'hitId' },
                ],
                selectable: true,
                selectableRangeMode: 'click',
                rowClick: (event, row) => {
                    event.stopPropagation();
                    this.mkt.destroy();
                    this.mki.removeImages();
                    this.mke.editorDivElement.style.zIndex = '3';
                    this.mki.imgCanvasDiv.style.zIndex = '2';
                    this.mkt.canvas.style.zIndex = '1';
                    this.mke.displayFirebaseTextFile(row.getData(), database);
                },
                rowTap: (event, row) => {
                    event.stopPropagation();
                    this.mkt.destroy();
                    this.mki.removeImages();
                    this.mke.editorDivElement.style.zIndex = '3';
                    this.mki.imgCanvasDiv.style.zIndex = '2';
                    this.mkt.canvas.style.zIndex = '1';
                    this.mke.displayFirebaseTextFile(row.getData(), database);
                },
                tableBuilt: () => {
                    /* selectAllBox function */
                    let selectAllBox = document.querySelector('#select-all');
                    selectAllBox.addEventListener('change', (ev) => {
                        if (selectAllBox.checked == true) {
                            this.finder.selectRow();
                        }
                        else {
                            this.finder.deselectRow();
                        }
                    });
                },
            });
        }
        else if (database === 'mturkusers') {
            this.finder.destroy();
            this.pathName.innerText = 'mturkusers';
            this.finder = new Tabulator('#finder', {
                data: dataArr,
                index: 'workerId',
                layout: 'fitColumns',
                initialSort: [{ column: 'workerId', dir: 'asc' }],
                columns: [
                    {
                        title: "<input id='select-all' type='checkbox'/>",
                        width: 15,
                        headerSort: false,
                    },
                    { title: 'Worker ID', field: 'workerId' },
                ],
                selectable: true,
                selectableRangeMode: 'click',
                rowClick: (event, row) => {
                    event.stopPropagation();
                    this.mkt.destroy();
                    this.mki.removeImages();
                    this.mke.editorDivElement.style.zIndex = '3';
                    this.mki.imgCanvasDiv.style.zIndex = '2';
                    this.mkt.canvas.style.zIndex = '1';
                    this.mke.displayFirebaseTextFile(row.getData(), database);
                },
                rowTap: (event, row) => {
                    event.stopPropagation();
                    this.mkt.destroy();
                    this.mki.removeImages();
                    this.mke.editorDivElement.style.zIndex = '3';
                    this.mki.imgCanvasDiv.style.zIndex = '2';
                    this.mkt.canvas.style.zIndex = '1';
                    this.mke.displayFirebaseTextFile(row.getData(), database);
                },
                tableBuilt: () => {
                    /* selectAllBox function */
                    let selectAllBox = document.querySelector('#select-all');
                    selectAllBox.addEventListener('change', (ev) => {
                        if (selectAllBox.checked == true) {
                            this.finder.selectRow();
                        }
                        else {
                            this.finder.deselectRow();
                        }
                    });
                },
            });
        }
        else if (database === 'mturkdata') {
            this.finder.destroy();
            this.pathName.innerText = 'mturkdata';
            this.finder = new Tabulator('#finder', {
                data: dataArr,
                index: 'Docname',
                layout: 'fitColumns',
                initialSort: [{ column: 'Docname', dir: 'asc' }],
                columns: [
                    {
                        title: "<input id='select-all' type='checkbox'/>",
                        width: 15,
                        headerSort: false,
                    },
                    { title: 'Docname', field: 'Docname' },
                ],
                selectable: true,
                selectableRangeMode: 'click',
                rowClick: (event, row) => {
                    event.stopPropagation();
                    this.mkt.destroy();
                    this.mki.removeImages();
                    this.mke.editorDivElement.style.zIndex = '3';
                    this.mki.imgCanvasDiv.style.zIndex = '2';
                    this.mkt.canvas.style.zIndex = '1';
                    this.mke.displayFirebaseTextFile(row.getData(), database);
                },
                rowTap: (event, row) => {
                    event.stopPropagation();
                    this.mkt.destroy();
                    this.mki.removeImages();
                    this.mke.editorDivElement.style.zIndex = '3';
                    this.mki.imgCanvasDiv.style.zIndex = '2';
                    this.mkt.canvas.style.zIndex = '1';
                    this.mke.displayFirebaseTextFile(row.getData(), database);
                },
                tableBuilt: () => {
                    /* selectAllBox function */
                    let selectAllBox = document.querySelector('#select-all');
                    selectAllBox.addEventListener('change', (ev) => {
                        if (selectAllBox.checked == true) {
                            this.finder.selectRow();
                        }
                        else {
                            this.finder.deselectRow();
                        }
                    });
                },
            });
        }
        else {
            console.error('Wrong or Invalid database trying to be tabularized');
        }
    }
    timestampToDate(dataArr) {
        function _timestampToDate(element, idx, arr) {
            try {
                arr[idx] = element.toDate().toJSON();
            }
            catch { }
        }
        console.time('Timestamp Conversion');
        dataArr.forEach((data) => {
            for (let key of Object.keys(data)) {
                console.log('timestampconv: data[key] = data[' + key + ']=' + data[key]);
                if (Array.isArray(data[key])) {
                    data[key].forEach(_timestampToDate);
                }
                else if (this.isDict(data[key])) {
                    try {
                        data[key] = data[key].toDate().toJSON();
                        continue;
                    }
                    catch (e) {
                        // console.log(e);
                    }
                    for (let key2 of Object.keys(data[key])) {
                        try {
                            data[key][key2] = data[key][key2].toDate().toJSON();
                        }
                        catch {
                            // console.log("Not Timestamp Object");
                        }
                    }
                }
                else if (data[key] != null &&
                    !this.isString(data[key]) &&
                    !this.isNumber(data[key])) {
                    try {
                        data[key] = data[key].toDate().toJSON();
                    }
                    catch {
                        // console.log("Not Timestamp Object");
                    }
                }
            }
        });
        console.timeEnd('Timestamp Conversion');
        return dataArr;
    }
    isDict(val) {
        return val && typeof val === 'object' && val.constructor === Object;
    }
    isString(val) {
        return typeof val === 'string' || val.constructor === String;
    }
    isNumber(val) {
        return typeof val === 'number' && isFinite(val);
    }
    async listStorageFiles(fileRef) {
        function formatFileSize(size) {
            let threshold = 1000;
            if (Math.abs(size) < threshold) {
                return size + ' B';
            }
            let units = ['kB', 'MB', 'GB', 'TB'];
            let u = -1;
            do {
                size /= threshold;
                ++u;
            } while (Math.abs(size) >= threshold && u < units.length - 1);
            return size.toFixed(1) + ' ' + units[u];
        }
        async function loadMetadata(fileArr) {
            await (0, storage_1.getMetadata)(fileArr).then((md) => {
                mdArr.push({
                    name: md.name,
                    contentType: md.contentType,
                    fullPath: md.fullPath,
                    size: formatFileSize(md.size),
                    timeCreated: md.timeCreated,
                });
            });
        }
        this.backBtn.disabled = fileRef.fullPath == 'mkturkfiles' ? true : false;
        if (fileRef.fullPath == 'mkturkfiles/parameterfiles/params_storage') {
            this.mke.storeParamBtn.style.display = 'none';
            this.mke.paramGenBtnBox.style.display = 'none';
            this.mke.svSceneBtn.style.display = 'none';
            this.mke.renderBtn.style.display = 'none';
            this.mke.makeActiveBtn.style.display = 'inline-block';
            this.mke.updateBtn.style.display = 'inline-block';
            this.mke.btnBoxDiv.style.gridTemplateAreas = '"update-btn active-btn"';
        }
        else if (fileRef.fullPath == 'mkturkfiles/parameterfiles/subjects') {
            this.mke.makeActiveBtn.style.display = 'none';
            this.mke.paramGenBtnBox.style.display = 'none';
            this.mke.svSceneBtn.style.display = 'none';
            this.mke.renderBtn.style.display = 'none';
            this.mke.updateBtn.style.display = 'inline-block';
            this.mke.storeParamBtn.style.display = 'inline-block';
            this.mke.btnBoxDiv.style.gridTemplateAreas =
                '"update-btn store-param-btn"';
        }
        else if (fileRef.fullPath == 'mkturkfiles/scenebags/objectome3d/templates') {
            this.mke.makeActiveBtn.style.display = 'none';
            this.mke.storeParamBtn.style.display = 'none';
            this.mke.svSceneBtn.style.display = 'none';
            this.mke.renderBtn.style.display = 'none';
            // this.mke.genBtn.style.display = 'inline-block';
            this.mke.paramGenBtnBox.style.display = 'inline-block';
            this.mke.updateBtn.style.display = 'inline-block';
            this.mke.btnBoxDiv.style.gridTemplateAreas =
                '"param-gen-btn-box update-btn"';
        }
        else if (fileRef.fullPath == 'mkturkfiles/scenebags/objectome3d/background') {
            this.mke.makeActiveBtn.style.display = 'none';
            this.mke.storeParamBtn.style.display = 'none';
            this.mke.paramGenBtnBox.style.display = 'none';
            this.mke.svSceneBtn.style.display = 'none';
            this.mke.updateBtn.style.display = 'inline-block';
            this.mke.renderBtn.style.display = 'inline-block';
            this.mke.btnBoxDiv.style.gridTemplateAreas = '"update-btn render-btn"';
        }
        else {
            this.mke.makeActiveBtn.style.display = 'none';
            this.mke.storeParamBtn.style.display = 'none';
            this.mke.renderBtn.style.display = 'none';
            this.mke.paramGenBtnBox.style.display = 'none';
            this.mke.svSceneBtn.style.display = 'none';
            this.mke.updateBtn.style.display = 'inline-block';
            this.mke.btnBoxDiv.style.gridTemplateAreas = '"update-btn update-btn"';
        }
        this.pathName.innerText = fileRef.fullPath;
        let pathArr = fileRef.fullPath.split('/');
        let mdArr = new Array();
        let fileList = await (0, storage_1.listAll)(fileRef);
        let filePromise;
        /* Resolve previous path */
        this.previousPath = '';
        for (let i = 0; i < pathArr.length - 1; i++) {
            this.previousPath += pathArr[i] + '/';
        }
        /* Resolve metadata of all folders */
        fileList.prefixes.forEach((folder) => {
            mdArr.push({
                name: folder.name,
                contentType: 'folder',
                fullPath: folder.fullPath,
                size: 'N/A',
            });
        });
        /* Resolve metadata of all files */
        filePromise = fileList.items.map(loadMetadata);
        await Promise.all(filePromise);
        this.displayStorageTable(mdArr);
    }
    refreshStorageTable() {
        document.addEventListener('storageFileChanged', (ev) => {
            let folderRef = this.mke.getActiveFile().id;
            this.listStorageFiles(folderRef.parent);
        });
    }
    displayStorageTable(metadataArr) {
        this.finder.destroy();
        this.finder = new Tabulator('#finder', {
            data: metadataArr,
            index: 'name',
            responsiveLayout: true,
            layout: 'fitColumns',
            resizableColumns: true,
            initialSort: [{ column: 'name', dir: 'asc' }],
            columns: [
                {
                    title: "<input id='select-all' type='checkbox'/>",
                    width: 15,
                    headerSort: false,
                },
                { title: 'Name', field: 'name', widthGrow: 3 },
                { title: 'Type', field: 'contentType' },
                { title: 'Path', field: 'fullPath' },
                { title: 'Size', field: 'size' },
            ],
            selectable: true,
            selectableRangeMode: 'click',
            rowDblClick: (ev, row) => {
                ev.preventDefault();
                ev.stopPropagation();
                if (row.getData().contentType === 'folder') {
                    console.log('rowDblClick', row.getData().fullPath);
                    // this.listStorageFiles(this.storageRef.child(row.getData().fullPath));
                    this.listStorageFiles((0, storage_1.ref)(this.storageRef, row.getData().fullPath));
                }
            },
            rowDblTap: (ev, row) => {
                ev.preventDefault();
                ev.stopPropagation();
                if (row.getData().contentType === 'folder') {
                    console.log(row.getData().fullPath);
                    // this.listStorageFiles(this.storageRef.child(row.getData().fullPath));
                    this.listStorageFiles((0, storage_1.ref)(this.storageRef, row.getData().fullPath));
                }
            },
            rowClick: async (ev, row) => {
                ev.stopPropagation();
                if (row.getData().contentType === 'folder') {
                    console.log('rowClick', row.getData().fullPath);
                }
                else if (row.getData().contentType.includes('text') ||
                    row.getData().contentType.includes('json')) {
                    this.mkt.destroy();
                    this.mki.removeImages();
                    this.mke.editorDivElement.style.zIndex = '3';
                    this.mki.imgCanvasDiv.style.zIndex = '2';
                    this.mkt.canvas.style.zIndex = '1';
                    // let fileRef = this.storageRef.child(row.getData().fullPath);
                    let fileRef = (0, storage_1.ref)(this.storageRef, row.getData().fullPath);
                    this.mke.displayStorageTextFile(fileRef);
                }
                else if (row.getData().contentType.includes('image')) {
                    this.mkt.destroy();
                    this.mki.removeImages();
                    this.mki.imgCanvasDiv.style.zIndex = '3';
                    this.mke.editorDivElement.style.zIndex = '2';
                    this.mkt.canvas.style.zIndex = '1';
                    // let imgRef = this.storageRef.child(row.getData().fullPath);
                    let imgRef = (0, storage_1.ref)(this.storageRef, row.getData().fullPath);
                    let imgName = row.getData().name;
                    this.mki.displayImage(imgRef, imgName);
                }
                else if (row.getData().contentType === 'application/octet-stream' &&
                    row.getData().name.includes('.glb')) {
                    this.mkt.destroy();
                    this.mki.removeImages();
                    this.mkt.canvas.style.zIndex = '3';
                    this.mke.editorDivElement.style.zIndex = '2';
                    this.mki.imgCanvasDiv.style.zIndex = '1';
                    // let meshRef = this.storageRef.child(row.getData().fullPath);
                    let meshRef = (0, storage_1.ref)(this.storageRef, row.getData().fullPath);
                    this.mkt.displayMesh(meshRef);
                }
            },
            rowSelectionChanged: (data, rows) => {
                this.showImagesBtn.disabled = !this.imageTypeTest(data);
                if (this.imageTypeTest(data)) {
                    this.selectedImages = data;
                }
            },
            tableBuilt: () => {
                let selectAllBox = document.querySelector('#select-all');
                selectAllBox.addEventListener('change', (ev) => {
                    if (selectAllBox.checked == true) {
                        this.finder.selectRow();
                    }
                    else {
                        this.finder.deselectRow();
                    }
                });
            },
        });
    }
    listBigQueryTable(dataArr, dataset, agent) {
        this.displayBigqueryTable(dataArr);
        this.pathName.innerText = `${dataset}.${agent}`;
    }
    displayBigqueryTable(dataArr) {
        this.finder.destroy();
        this.finder = new Tabulator('#finder', {
            data: dataArr,
            index: 'timestamp.value',
            responsiveLayout: true,
            layout: 'fitColumns',
            resizableColumns: true,
            initialSort: [{ column: 'timestamp.value', dir: 'asc' }],
            columns: [
                {
                    title: "<input id='select-all' type='checkbox'/>",
                    width: 15,
                    headerSort: false,
                },
                { title: 'Timestamp', field: 'timestamp.value' },
            ],
            selectable: true,
            selectableRangeMode: 'click',
            rowClick: async (ev, row) => {
                ev.stopPropagation();
                this.mke.displayBigQueryTableRow(row.getData());
            },
            rowTap: (ev, row) => {
                ev.stopPropagation();
                this.mke.displayBigQueryTableRow(row.getData());
            },
            dataLoaded: (data) => {
                console.log('table data', data);
                this.mkc.removeElementsByClassName('axis-options');
                this.mkc.bqPopulateAxisFields(data, 'eyedata');
            },
        });
    }
    /* Mkfinder controls */
    backBtnAction() {
        this.backBtn.addEventListener('click' || 0, (ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            console.log('[backBtn Pressed]: previousPath:', this.previousPath);
            // this.listStorageFiles(this.storageRef.child(this.previousPath));
            this.listStorageFiles((0, storage_1.ref)(this.storageRef, this.previousPath));
        });
    }
    numImgSliderAction() {
        this.numImgSlider.addEventListener('change', (ev) => {
            console.log(this.numImgSlider.value);
            this.mki.imgCanvas.style.gridTemplateColumns =
                'repeat(' + String(this.numImgSlider.value) + ', minmax(0,1fr))';
        });
    }
    showImagesBtnAction() {
        this.showImagesBtn.addEventListener('click' || 0, async (ev) => {
            this.mkt.destroy();
            this.mki.removeImages();
            this.mki.imgCanvasDiv.style.zIndex = '3';
            this.mke.editorDivElement.style.zIndex = '2';
            this.mkt.canvas.style.zIndex = '1';
            for (let i = 0; i < this.selectedImages.length; i++) {
                // let imgRef = this.storageRef.child(this.selectedImages[i].fullPath);
                let imgRef = (0, storage_1.ref)(this.storageRef, this.selectedImages[i].fullPath);
                let imgName = this.selectedImages[i].name;
                await this.mki.displayImage(imgRef, imgName);
            }
        });
    }
    imageTypeTest(data) {
        if (data.length == 0 || data.length == 1) {
            return false;
        }
        else {
            for (var i = 0; i < data.length; i++) {
                if (!data[i].contentType.includes('image')) {
                    return false;
                }
            }
            return true;
        }
    }
    downloadBtnAction() {
        this.downloadBtn.addEventListener('click' || 0, async (ev) => {
            let row = this.finder.getSelectedRows();
            let qryLoc = document.querySelector('#qry-loc-selector');
            if (qryLoc.value == 'mkturkfiles' &&
                !row[0].getData().contentType.includes('folder')) {
                for (let i = 0; i < row.length; i++) {
                    (0, storage_1.getDownloadURL)((0, storage_1.ref)(this.storageRef, row[i].getData().fullPath)).then(async (url) => {
                        let file = await (await fetch(url)).blob();
                        file_saver_1.default.saveAs(file, row[i].getData().name);
                    });
                }
            }
            else if (qryLoc.value == 'marmosets') {
                for (let i = 0; i < row.length; i++) {
                    let file = row[i].getData();
                    let blob = new Blob([JSON.stringify(file, null, 1)], {
                        type: 'application/json; charset=utf-8',
                    });
                    file_saver_1.default.saveAs(blob, file.name + '.json');
                }
            }
            else if (qryLoc.value == 'mkdailydata') {
                for (let i = 0; i < row.length; i++) {
                    let file = row[i].getData();
                    let blob = new Blob([JSON.stringify(file, null, 1)], {
                        type: 'application/json; charset=utf-8',
                    });
                    file_saver_1.default.saveAs(blob, file.agent + '.json');
                }
            }
            else if (qryLoc.value == 'mkturkdata') {
                for (let i = 0; i < row.length; i++) {
                    let docName = row[i].getData().FirestoreDocRoot +
                        '_' +
                        row[i].getData().Doctype;
                    let file = row[i].getData();
                    let blob = new Blob([JSON.stringify(file, null, 1)], {
                        type: 'application/json; charset=utf-8',
                    });
                    file_saver_1.default.saveAs(blob, docName + '.json');
                }
            }
            else if (qryLoc.value == 'devices') {
                for (let i = 0; i < row.length; i++) {
                    let file = row[i].getData();
                    let blob = new Blob([JSON.stringify(file, null, 1)], {
                        type: 'application/json; charset=utf-8',
                    });
                    file_saver_1.default.saveAs(blob, file.docname + '.json');
                }
            }
            else if (qryLoc.value == 'eyecalibration') {
                for (let i = 0; i < row.length; i++) {
                    let file = row[i].getData();
                    let blob = new Blob([JSON.stringify(file, null, 1)], {
                        type: 'application/json; charset=utf-8',
                    });
                    file_saver_1.default.saveAs(blob, file.Docname + '.json');
                }
            }
            else if (qryLoc.value == 'mkscale') {
                for (let i = 0; i < row.length; i++) {
                    let file = row[i].getData();
                    let blob = new Blob([JSON.stringify(file, null, 1)], {
                        type: 'application/json; charset=utf-8',
                    });
                    file_saver_1.default.saveAs(blob, file.Docname + '.json');
                }
            }
            else if (qryLoc.value == 'objects') {
                for (let i = 0; i < row.length; i++) {
                    let file = row[i].getData();
                    let blob = new Blob([JSON.stringify(file, null, 1)], {
                        type: 'application/json; charset=utf-8',
                    });
                    file_saver_1.default.saveAs(blob, file.docname + '.json');
                }
            }
        });
    }
}
exports.Mkfinder = Mkfinder;


/***/ }),

/***/ "./src/mkmedia.ts":
/*!************************!*\
  !*** ./src/mkmedia.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Mkchart = exports.Mkimage = exports.Mkthree = exports.Mkeditor = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const app_1 = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
const firestore_1 = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
const storage_1 = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
const jsoneditor_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! jsoneditor */ "./node_modules/jsoneditor/dist/jsoneditor.min.js"));
const viewerjs_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! viewerjs */ "./node_modules/viewerjs/dist/viewer.js"));
const EditorParams = (0, tslib_1.__importStar)(__webpack_require__(/*! ./editor-params */ "./src/editor-params.ts"));
const THREE = (0, tslib_1.__importStar)(__webpack_require__(/*! three */ "./node_modules/three/build/three.module.js"));
const OrbitControls_1 = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
const GLTFLoader_1 = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js");
const dat_gui_1 = __webpack_require__(/*! dat.gui */ "./node_modules/dat.gui/build/dat.gui.module.js");
const parser_1 = __webpack_require__(/*! ./parser */ "./src/parser.ts");
const db = (0, firestore_1.getFirestore)((0, app_1.getApp)());
const storage = (0, storage_1.getStorage)((0, app_1.getApp)());
class Mkeditor {
    constructor() {
        this.editorDivElement = document.querySelector('#editor-div');
        this.editorElement = document.querySelector('#editor');
        this.editor = new jsoneditor_1.default(this.editorElement);
        this.updateBtn = document.querySelector('#update-btn');
        this.renderBtn = document.querySelector('#render-btn');
        this.btnBoxDiv = document.querySelector('#button-box');
        this.paramGenBtnBox = document.querySelector('#param-gen-btn-box');
        this.makeActiveBtn = document.querySelector('#active-btn');
        this.storeParamBtn = document.querySelector('#store-param-btn');
        this.activeFile = { loc: '', id: '' };
        this.updateBtnAction();
        this.renderBtnAction();
        this.makeActiveBtnAction();
        this.storeParamBtnAction();
        this.fileNameInput = document.querySelector('#file-name-input');
        this.fileRenameBtn = document.querySelector('#file-rename-btn');
        this.fileDupBtn = document.querySelector('#file-dup-btn');
        this.fileDupModal = document.querySelector('#file-dup-modal');
        this.renameBtnAction();
        this.renameTextFieldAction();
        this.getActiveFile();
        this.fileDupBtnAction();
        // this.genSceneParamBtn
        //   = document.querySelector('#gen-scene-param-btn') as HTMLButtonElement;
        // this.genSceneParamModal
        //   = document.querySelector('#gen-scene-param-modal') as HTMLDivElement;
        // this.generateSceneParamModalAction()
        this.genBtn = document.querySelector('#generate-btn');
        this.expandBtn = document.querySelector('#expand-btn');
        this.svSceneBtn = document.querySelector('#save-scene-param-btn');
        this.genBtnAction();
        this.svSceneBtnAction();
        this.pe = new parser_1.ParseEngine();
        this.userEditedSceneParam = {};
        this.generatedSceneParam = {};
    }
    getActiveFile() {
        return this.activeFile;
    }
    destoryEditor() {
        this.editor.destroy();
    }
    displayFirebaseTextFile(file, loc) {
        this.fileRenameBtn.style.display = 'none';
        this.fileDupBtn.style.display = 'none';
        // this.genSceneParamBtn.style.display = 'none';
        this.storeParamBtn.style.display = 'none';
        this.updateBtn.style.display = 'inline-block';
        this.btnBoxDiv.style.gridTemplateAreas = '"update-btn update-btn"';
        this.fileNameInput.value = '';
        this.fileNameInput.disabled = true;
        try {
            let options = {
                modes: ['tree', 'code'],
                sortObjectKeys: true,
            };
            this.editor.destroy();
            this.editor = new jsoneditor_1.default(this.editorElement, options, file);
            this.trackFirebaseActiveFile(loc, file);
        }
        catch (error) {
            console.error('JSONEditor Error:', error);
        }
    }
    displayBigQueryTableRow(data) {
        this.btnBoxDiv.style.display = 'none';
        try {
            this.editor.destroy();
            let options = {
                modes: ['tree', 'code'],
            };
            this.editor = new jsoneditor_1.default(this.editorElement, options, data);
            this.fileNameInput.placeholder = data.timestamp.value;
            // console.log("displayBigQueryTableRow", data);
        }
        catch (error) {
            console.error('JSONEditor Error:', error);
        }
    }
    trackFirebaseActiveFile(loc, file) {
        if (loc === 'marmosets') {
            this.activeFile = { loc: loc, id: file.name };
            this.fileNameInput.placeholder = String(this.activeFile.id);
        }
        else if (loc === 'mkturkdata') {
            if (file.Doctype === 'task') {
                this.activeFile = { loc: loc, id: file.Taskdoc };
                this.fileNameInput.placeholder = String(this.activeFile.id);
            }
            else if (file.Doctype === 'images') {
                this.activeFile = { loc: loc, id: file.Imagesdoc };
                this.fileNameInput.placeholder = String(this.activeFile.id);
            }
        }
        else if (loc === 'mkdailydata') {
            this.activeFile = { loc: loc, id: file.agent };
            this.fileNameInput.placeholder = String(this.activeFile.id);
        }
        // else if (loc === 'mkdailydatatest') {
        //   this.activeFile = { loc: loc, id: file.agent };
        //   this.fileNameInput.placeholder = String(this.activeFile.id);
        // }
        else if (loc === 'objects') {
            this.activeFile = { loc: loc, id: file.docname };
            this.fileNameInput.placeholder = String(this.activeFile.id);
        }
        else if (loc === 'eyecalibrations') {
            this.activeFile = { loc: loc, id: file.Docname };
            this.fileNameInput.placeholder = String(this.activeFile.id);
        }
        else if (loc === 'devices') {
            this.activeFile = { loc: loc, id: file.docname };
            this.fileNameInput.placeholder = String(this.activeFile.id);
        }
        else if (loc === 'mkscale') {
            this.activeFile = { loc: loc, id: file.Docname };
            this.fileNameInput.placeholder = String(this.activeFile.id);
        }
        console.log('activeFile', this.activeFile);
    }
    async displayStorageTextFile(fileRef) {
        console.log('diplayStorageTextFile FILEREF', fileRef);
        this.fileNameInput.disabled = false;
        this.fileRenameBtn.style.display = 'inline-block';
        this.fileNameInput.value = '';
        const sceneParamPath = 'mkturkfiles/scenebags/objectome3d';
        const taskParamPath = 'mkturkfiles/parameterfiles';
        function onClassName(classNameParams) {
            console.log(`onClassName path=${classNameParams.path}, field=${classNameParams.field}, value=${classNameParams.value}`);
            const bioKeys = ['Agent', 'CheckRFID'];
            const automatorKeys = [
                'Automator',
                'AutomatorFilePath',
                'CurrentAutomatorStage',
                'MinPercentCriterion',
                'MinTrialsCriterion',
            ];
            const generalKeys = [
                'DragtoRespond',
                'CalibrateEye',
                'NRSVP',
                'NRSVPMax',
                'SameDifferent',
                'SamplingStrategy',
                'NStickyResponse',
                'NTrialsPerBagBlock',
            ];
            const gridKeys = [
                'NGridPoints',
                'GridSpacingInches',
                'GridXOffsetInches',
                'GridYOffsetInches',
                'FixationGridIndex',
                'SampleGridIndex',
                'ObjectGridIndex',
                'ChoiceGridIndex',
                'TestGridIndex',
            ];
            const fixationKeys = [
                'NFixations',
                'FixationUsesSample',
                'FixationSizeInches',
                'FixationDuration',
                'FixationTimeOut',
            ];
            const fixationConfigKeys = [
                'FixationWindowSizeInches',
                'FixationDotSizeInches',
            ];
            const sampleKeys = [
                'ImageBagsSample',
                'KeepSampleON',
                'SamplePRE',
                'SampleOFF',
            ];
            const testKeys = [
                'ImageBagsTest',
                'KeepTestON',
                'TestOFF',
                'HideTestDistractors',
            ];
            const choiceKeys = [
                'ChoiceSizeInches',
                'HideChoiceDistractors',
                'ChoiceTimeOut',
            ];
            const rewardKeys = [
                'RewardStage',
                'RewardPer1000Trials',
                'NRewardMax',
                'NConsecutiveHitsforBonus',
                'PunishTimeOut',
                'ConsecutiveHitsITI',
            ];
            if (bioKeys.includes(classNameParams.field)) {
                return 'color-node-bio';
            }
            else if (automatorKeys.includes(classNameParams.field)) {
                return 'color-node-automator';
            }
            else if (generalKeys.includes(classNameParams.field)) {
                return 'color-node-general';
            }
            else if (gridKeys.includes(classNameParams.field)) {
                return 'color-node-grid';
            }
            else if (fixationKeys.includes(classNameParams.field)) {
                return 'color-node-fixation';
            }
            else if (fixationConfigKeys.includes(classNameParams.field)) {
                return 'color-node-fixation-config';
            }
            else if (sampleKeys.includes(classNameParams.field)) {
                return 'color-node-sample';
            }
            else if (testKeys.includes(classNameParams.field)) {
                return 'color-node-test';
            }
            else if (choiceKeys.includes(classNameParams.field)) {
                return 'color-node-choice';
            }
            else if (rewardKeys.includes(classNameParams.field)) {
                return 'color-node-reward';
            }
            else {
                return 'color-node-nuisance';
            }
        }
        let sceneTemplateOptions = {
            modes: ['tree', 'code'],
            templates: [
                {
                    text: 'Camera',
                    title: 'Insert a Camera node',
                    field: 'CameraTemplate',
                    value: {
                        type: 'PerspectiveCamera',
                        fieldOfView: 45,
                        near: 0.1,
                        far: 2000,
                        position: {
                            x: [0],
                            y: [0],
                            z: [0],
                        },
                        targetInches: {
                            x: [0],
                            y: [0],
                            z: [0],
                        },
                        visible: [1],
                    },
                },
                {
                    text: 'Light',
                    title: 'Insert a Light node',
                    field: 'LightTemplate',
                    value: {
                        type: 'DirectionalLight',
                        color: '0xffffff',
                        intensity: [5],
                        position: {
                            x: [0],
                            y: [0],
                            z: [0],
                        },
                        visible: [1],
                    },
                },
                {
                    text: 'Object',
                    title: 'Insert an Object node',
                    field: 'ObjectTemplate',
                    value: {
                        meshpath: '',
                        objectdoc: '',
                        sizeInches: [0.5],
                        positionInches: {
                            x: [0],
                            y: [0],
                            z: [0],
                        },
                        rotationDegrees: {
                            x: [0],
                            y: [0],
                            z: [0],
                        },
                        material: {
                            type: 'MeshPhysicalMaterial',
                            color: '#7F7F7F',
                            metalness: 0.25,
                            roughness: 0.65,
                            reflectivity: 0.5,
                            opacity: [1],
                            transparent: false,
                        },
                        visible: [1],
                        morphTarget: [],
                    },
                },
                {
                    text: 'Background',
                    title: 'Insert a Background node',
                    field: 'ImagesTemplate',
                    value: {
                        imagebag: '',
                        imageidx: [],
                    },
                },
            ],
        };
        let options = {
            modes: ['tree', 'code'],
        };
        let taskParamOptions = {
            modes: ['tree', 'code'],
            onClassName: onClassName,
            schema: EditorParams.taskParamSchema,
        };
        // let fileUrl = await getDownloadURL(fileRef).catch(e => {
        //   console.error('Error getting download URL:', e);
        // });
        // let response;
        // let file;
        let file = await (0, storage_1.getDownloadURL)(fileRef)
            .then(async (url) => {
            let response = await fetch(url);
            return await response.json();
        })
            .catch((e) => {
            console.error('Error getting download URL:', e);
        });
        // let fileUrl = await fileRef.getDownloadURL().catch(e => {
        //   console.error("Error getting download URL", e);
        // });
        // let response = await fetch(fileUrl);
        // let file = await response.json();
        if (fileRef.fullPath.includes(sceneParamPath)) {
            if (fileRef.fullPath.includes('template')) {
                this.fileDupBtn.style.display = 'inline-block';
                // this.genSceneParamBtn.style.display = 'inline-block';
                options = sceneTemplateOptions;
            }
            else {
                this.fileDupBtn.style.display = 'inline-block';
                // this.genSceneParamBtn.style.display = 'none';
            }
        }
        else if (fileRef.fullPath.includes(taskParamPath)) {
            console.log('FILEEEE:', file);
            this.fileDupBtn.style.display = 'inline-block';
            let taskParamKeys = Object.keys(JSON.parse(JSON.stringify(EditorParams.taskParamSchema, null, 1))
                .properties);
            if (Array.isArray(file)) {
                // CASE: Automator
                for (let idx in file) {
                    let json = JSON.parse(JSON.stringify(file[idx], taskParamKeys, 1));
                    let json2 = {};
                    Object.keys(file[idx]).forEach((key) => {
                        if (!(key in json)) {
                            json2[key] = file[idx][key];
                        }
                    });
                    file[idx] = Object.assign(json, json2);
                    console.log('json:', json, 'json2:', json2);
                }
                console.log('FILE AFTER PROCESSING:', file);
            }
            else {
                let json = JSON.parse(JSON.stringify(file, taskParamKeys, 1));
                let json2 = {};
                Object.keys(file).forEach((key) => {
                    if (!(key in json)) {
                        json2[key] = file[key];
                    }
                });
                console.log('json:', json, 'json2:', json2);
                file = Object.assign(json, json2);
            }
            options = taskParamOptions;
            // this.genSceneParamBtn.style.display = 'none';
        }
        else {
            this.fileDupBtn.style.display = 'none';
            // this.genSceneParamBtn.style.display = 'none';
        }
        this.editor.destroy();
        this.editor = new jsoneditor_1.default(this.editorElement, options, file);
        this.activeFile = { loc: 'mkturkfiles', id: fileRef };
        console.log('activeFile', this.activeFile);
        this.fileNameInput.placeholder = fileRef.name;
    }
    fileDupBtnAction() {
        var _a, _b;
        let fileName = this.fileDupModal.querySelector('#dup-file-name');
        this.fileDupBtn.addEventListener('click', (ev) => {
            ev.preventDefault();
            this.fileDupModal;
            this.fileDupModal.showModal();
            let activeFileName = this.activeFile.id;
            fileName.value = 'Copy of ' + activeFileName.name;
            fileName.focus();
            fileName.select();
        });
        (_a = this.fileDupModal.querySelector('.close')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            this.fileDupModal.close();
        });
        (_b = this.fileDupModal.querySelector('.save')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
            let srcFileRef = this.activeFile.id;
            // let dupFileRef = srcFileRef.parent?.child(fileName.value);
            let dupFileRef = (0, storage_1.ref)(srcFileRef.parent, fileName.value);
            let dupFile = new Blob([JSON.stringify(this.editor.get(), null, 1)]);
            let md = {
                contentType: 'application/json',
            };
            (0, storage_1.uploadBytes)(dupFileRef, dupFile, md)
                .then(async (snapshot) => {
                console.log('[DOCUMENT DUPLICATED]:', snapshot);
                alert('Document Duplicated');
                let fileDupEvent = new Event('storageFileChanged');
                this.fileNameInput.value = '';
                this.displayStorageTextFile(dupFileRef);
                document.dispatchEvent(fileDupEvent);
            })
                .catch((e) => {
                console.error('[DOCUMENT DUPLICATE FAILED]:', e);
                console.error('srcFile:', srcFileRef, 'destFile:', dupFileRef);
                alert('Document Duplication Failed');
            });
            // dupFileRef?.put(dupFile, md).then(async (snapshot) => {
            //   console.log('[DOCUMENT DUPLICATED]', snapshot);
            //   alert('Document Duplicated');
            //   let fileDupEvent = new Event('storageFileChanged');
            //   this.fileNameInput.value = '';
            //   this.displayStorageTextFile(dupFileRef!);
            //   document.dispatchEvent(fileDupEvent);
            // }).catch(e => {
            //   console.error('[DOCUMENT DUPLICATE FAILED]:', e);
            //   console.error('srcFile', srcFileRef, 'dupFile', dupFileRef);
            //   alert('Document Dup Failed');
            // });
            this.fileDupModal.close();
        });
    }
    generateSceneParamModalAction() {
        let collapsibles = document.getElementsByClassName('collapsible');
        for (let i = 0; i < collapsibles.length; i++) {
            let coll = collapsibles[i];
            coll.addEventListener('click', (ev) => {
                ev.preventDefault();
                coll.classList.toggle('active');
                let content = coll.nextElementSibling;
                if (content.style.display === 'block') {
                    content.style.display = 'none';
                }
                else {
                    content.style.display = 'block';
                }
            });
        }
        let initDataSize = [{ sampling: 'gaussian', params: '0, 1', n: 5 }];
        let rtSize = new Tabulator('#size-inches-table', {
            data: initDataSize,
            layout: 'fitColumns',
            history: true,
            columns: [
                {
                    title: 'Sampling',
                    field: 'sampling',
                    editor: 'select',
                    editorParams: { values: ['gaussian', 'uniform', 'range'] },
                },
                { title: 'Params', field: 'params', editor: 'input', editable: true },
                {
                    title: 'n || step size',
                    field: 'n',
                    editor: 'input',
                    editable: true,
                },
            ],
        });
        let szDiv = document.querySelector('.size-inches');
        let addRowSize = szDiv.querySelector('.add-rule-btn');
        let undoSz = szDiv.querySelector('.undo-edit-btn');
        addRowSize.addEventListener('click', (ev) => {
            ev.preventDefault();
            rtSize.addRow({ sampling: '', params: '', n: NaN }, false);
        });
        undoSz.addEventListener('click', (ev) => {
            rtSize.undo();
        });
        let initDataPos = [
            { target: 'x', sampling: 'gaussian', params: '0, 1', n: 5 },
        ];
        let rtPos = new Tabulator('#position-inches-table', {
            data: initDataPos,
            layout: 'fitColumns',
            history: true,
            columns: [
                {
                    title: 'Target',
                    field: 'target',
                    editor: 'select',
                    editorParams: { values: ['x', 'y', 'z'] },
                },
                {
                    title: 'Sampling',
                    field: 'sampling',
                    editor: 'select',
                    editorParams: { values: ['gaussian', 'uniform', 'range'] },
                },
                { title: 'Params', field: 'params', editor: 'input', editable: true },
                {
                    title: 'n || step size',
                    field: 'n',
                    editor: 'input',
                    editable: true,
                },
            ],
        });
        let posDiv = document.querySelector('.position-inches');
        let addRowPos = posDiv.querySelector('.add-rule-btn');
        let undoPos = posDiv.querySelector('.undo-edit-btn');
        addRowPos.addEventListener('click', (ev) => {
            ev.preventDefault();
            rtPos.addRow({ target: '', sampling: '', params: '', n: NaN });
        });
        undoPos.addEventListener('click', (ev) => {
            rtPos.undo();
        });
        let initDataDeg = [
            { target: 'x', sampling: 'gaussian', params: '0, 1', n: 5 },
        ];
        let rtDeg = new Tabulator('#rotation-degrees-table', {
            data: initDataDeg,
            layout: 'fitColumns',
            history: true,
            columns: [
                {
                    title: 'Target',
                    field: 'target',
                    editor: 'select',
                    editorParams: { values: ['x', 'y', 'z'] },
                },
                {
                    title: 'Sampling',
                    field: 'sampling',
                    editor: 'select',
                    editorParams: { values: ['gaussian', 'uniform', 'range'] },
                },
                { title: 'Params', field: 'params', editor: 'input', editable: true },
                {
                    title: 'n || step size',
                    field: 'n',
                    editor: 'input',
                    editable: true,
                },
            ],
        });
        let degDiv = document.querySelector('.rotation-degrees');
        let addRowDeg = degDiv.querySelector('.add-rule-btn');
        let undoDeg = degDiv.querySelector('.undo-edit-btn');
        addRowDeg.addEventListener('click', (ev) => {
            ev.preventDefault();
            rtDeg.addRow({ target: '', sampling: '', params: '', n: NaN });
        });
        undoDeg.addEventListener('click', (ev) => {
            rtDeg.undo();
        });
    }
    renameTextFieldAction() {
        this.fileNameInput.addEventListener('click', (ev) => {
            let tmpName = this.activeFile.id;
            let curFileName = tmpName.name;
            this.fileNameInput.value = curFileName;
            this.fileNameInput.focus();
            this.fileNameInput.select();
        });
    }
    renameBtnAction() {
        this.fileRenameBtn.addEventListener('click', (ev) => {
            if (this.fileNameInput.value) {
                let oldFileRef = this.activeFile.id;
                let newFileRef = (0, storage_1.ref)(oldFileRef.parent, this.fileNameInput.value);
                // let newFileRef = oldFileRef.parent?.child(this.fileNameInput.value);
                let newFile = new Blob([JSON.stringify(this.editor.get(), null, 1)]);
                let md = {
                    contentType: 'application/json',
                };
                (0, storage_1.uploadBytes)(newFileRef, newFile, md)
                    .then(async (snapshot) => {
                    await (0, storage_1.deleteObject)(oldFileRef);
                    console.log('[DOCUMENT RENAMED]:', snapshot);
                    alert('Document Renamed');
                    let renameEvent = new Event('storageFileChanged');
                    this.fileNameInput.value = '';
                    this.displayStorageTextFile(newFileRef);
                    document.dispatchEvent(renameEvent);
                })
                    .catch((e) => {
                    console.error('[DOCUMENT RENAME FAILED]:', e);
                    console.error('oldFile', oldFileRef, 'newFile', newFileRef);
                    alert('Document Rename Failed');
                });
                // });
            }
            else {
                console.log('file name input field is null');
            }
        });
    }
    renderBtnAction() {
        this.renderBtn.addEventListener('click', (evt) => {
            evt.preventDefault();
            evt.stopPropagation();
            console.log(this.editor.get());
            const renderRequest = new CustomEvent('onRenderRequest', {
                detail: this.editor.get(),
            });
            this.renderBtn.dispatchEvent(renderRequest);
        });
        // const renderRequest = new CustomEvent('onRenderRequest', {
        //   detail: this.editor.get(),
        // });
    }
    updateBtnAction() {
        this.updateBtn.addEventListener('click' || 0, (ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            let loc = this.activeFile.loc;
            if (loc === 'marmosets' ||
                loc === 'mkturkdata' ||
                loc === 'devices' ||
                loc === 'mkscale' ||
                loc === 'eyecalibrations' ||
                loc === 'mkdailydata') {
                // handle marmosets && mkturkdata
                let id = this.activeFile.id;
                (0, firestore_1.setDoc)((0, firestore_1.doc)(db, loc, id), this.dateToTimestamp(this.editor.get()))
                    .then(() => {
                    console.log('[DOCUMENT UPDATED]:', id);
                    alert('Document Updated');
                })
                    .catch((e) => {
                    console.error('[DOCUMENT UPDATE FAILED]', 'FILE:', id, 'ERROR:', e);
                    alert('Document Update Failed');
                });
                // db.collection(loc).doc(id).set(
                //   this.dateToTimestamp(this.editor.get())
                // ).then(() => {
                //   console.log("[DOCUMENT UPDATED]:", id);
                //   alert("Document Updated");
                // }).catch(e => {
                //   console.error("[DOCUMENT UPDATE FAILED]", "FILE:", id, "ERROR:", e);
                //   alert("Document Update Failed");
                // });
            }
            else if (this.activeFile.loc === 'mkturkfiles') {
                // handle mkturkfiles
                let id = this.activeFile.id;
                let updatedFile = new Blob([
                    JSON.stringify(this.editor.get(), null, 1),
                ]);
                let metadata = {
                    contentType: 'application/json',
                };
                (0, storage_1.uploadBytes)(id, updatedFile, metadata)
                    .then((snapshot) => {
                    console.log(this.editor.get());
                    console.log('[DOCUMENT UPDATED]:', snapshot.metadata.name);
                    alert('Document Updated');
                    document.dispatchEvent(new Event('storageFileChanged'));
                })
                    .catch((e) => {
                    console.error('[DOCUMENT UPDATE FAILED]', 'FILE:', id, 'ERROR:', e);
                    alert('Document Update Failed');
                });
                // id.put(updatedFile, metadata).then(snapshot => {
                //   console.log(this.editor.get());
                //   console.log("[DOCUMENT UPDATED]:", snapshot.metadata.name);
                //   alert("Document Updated");
                //   document.dispatchEvent(new Event('storageFileChanged'));
                // }).catch(e => {
                //   console.error("[DOCUMENT UPDATE FAILED]", "FILE:", id, "ERROR:", e);
                //   alert("Document Update Failed");
                // });
            }
            else {
                console.error('[DOCUMENT UPDATE FAILED] ERROR: Location Error');
            }
        });
    }
    makeActiveBtnAction() {
        this.makeActiveBtn.addEventListener('click' || 0, (ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            console.log(this.activeFile);
            let storageRef = (0, storage_1.ref)(storage);
            let file = this.editor.get();
            let fileName = 'mkturkfiles/parameterfiles/subjects/' + file.Agent + '_params.json';
            // let fileRef = storageRef.child(fileName);
            let fileRef = (0, storage_1.ref)(storageRef, fileName);
            file = new Blob([JSON.stringify(file, null, 1)]);
            let metadata = {
                contentType: 'application/json',
            };
            (0, storage_1.uploadBytes)(fileRef, file, metadata)
                .then((snapshot) => {
                console.log('[PARAM MADE ACTIVE]:', snapshot.metadata.name);
                alert('Param Active');
            })
                .catch((e) => {
                console.error('[PARAM ACTIVATION FAILED]', 'FILE:', fileRef, 'ERROR', e);
                alert('Param Activation Failed');
            });
            // fileRef.put(file, metadata).then(snapshot => {
            //   console.log("[PARAM MADE ACTIVE]:", snapshot.metadata.name);
            //   alert("Param Active");
            // }).catch(e => {
            //   console.error("[PARAM ACTIVATION FAILED]", "FILE:", fileRef, "ERROR", e);
            //   alert("Param Activation Failed");
            // });
        });
    }
    storeParamBtnAction() {
        this.storeParamBtn.addEventListener('click' || 0, (ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            console.log(this.activeFile);
            // let storageRef = storage.ref();
            let storageRef = (0, storage_1.ref)(storage);
            let file = this.editor.get();
            let date = new Date();
            let fileName = 'mkturkfiles/parameterfiles/params_storage/' +
                file.Agent +
                '_params_' +
                date.toJSON().split('T')[0] +
                '.json';
            // let fileRef = storageRef.child(fileName);
            let fileRef = (0, storage_1.ref)(storageRef, fileName);
            file = new Blob([JSON.stringify(file, null, 1)]);
            let metadata = {
                contentType: 'application/json',
            };
            (0, storage_1.uploadBytes)(fileRef, file, metadata)
                .then((snapshot) => {
                console.log('[PARAM STORED]:', snapshot.metadata.name);
                alert('Param stored');
            })
                .catch((e) => {
                console.error('[PARAM STORAGE FAILED]', 'FILE:', fileRef, 'ERROR', e);
                alert('Param Storage Failed');
            });
            // fileRef.put(file, metadata).then(snapshot => {
            //   console.log('[PARAM STORED]:', snapshot.metadata.name);
            //   alert('Param stored');
            // }).catch(e => {
            //   console.error('[PARAM STORAGE FAILED]', 'FILE:', fileRef, 'ERROR', e);
            //   alert('Param Storage Failed');
            // });
        });
    }
    genBtnAction() {
        this.genBtn.addEventListener('click', (ev) => {
            if (this.genBtn.value == 'generate') {
                this.userEditedSceneParam = this.editor.get();
                this.generatedSceneParam = this.pe.generateParamObject(this.userEditedSceneParam, 'vectorize');
                this.editor.destroy();
                let options = {
                    modes: ['tree', 'code'],
                };
                this.editor = new jsoneditor_1.default(this.editorElement, options, this.generatedSceneParam);
                this.genBtn.value = 'revert';
                this.genBtn.textContent = 'Revert';
                this.updateBtn.style.display = 'none';
                this.svSceneBtn.style.display = 'inline-block';
                this.btnBoxDiv.style.gridTemplateAreas =
                    '"param-gen-btn-box sv-scene-param-btn"';
            }
            else if (this.genBtn.value == 'revert') {
                this.editor.destroy();
                this.generatedSceneParam = {};
                let options = {
                    modes: ['tree', 'code'],
                };
                this.editor = new jsoneditor_1.default(this.editorElement, options, this.userEditedSceneParam);
                this.genBtn.value = 'generate';
                this.genBtn.textContent = 'Vectorize Param';
                this.svSceneBtn.style.display = 'none';
                this.updateBtn.style.display = 'inline-block';
                this.btnBoxDiv.style.gridTemplateAreas =
                    '"param-gen-btn-box update-btn"';
            }
        });
        this.expandBtn.addEventListener('click', (ev) => {
            if (this.expandBtn.value == 'expand') {
                this.userEditedSceneParam = this.editor.get();
                this.generatedSceneParam = this.pe.generateParamObject(this.userEditedSceneParam, 'expand');
                this.editor.destroy();
                let options = {
                    modes: ['tree', 'code'],
                };
                this.editor = new jsoneditor_1.default(this.editorElement, options, this.generatedSceneParam);
                this.expandBtn.value = 'revert';
                this.expandBtn.textContent = 'Revert';
                this.updateBtn.style.display = 'none';
                this.svSceneBtn.style.display = 'inline-block';
                this.btnBoxDiv.style.gridTemplateAreas =
                    '"param-gen-btn-box sv-scene-param-btn"';
            }
            else if (this.expandBtn.value == 'revert') {
                this.editor.destroy();
                this.generatedSceneParam = {};
                let options = {
                    modes: ['tree', 'code'],
                };
                this.editor = new jsoneditor_1.default(this.editorElement, options, this.userEditedSceneParam);
                this.expandBtn.value = 'expand';
                this.expandBtn.textContent = 'Expand Param';
                this.svSceneBtn.style.display = 'none';
                this.updateBtn.style.display = 'inline-block';
                this.btnBoxDiv.style.gridTemplateAreas =
                    '"param-gen-btn-box update-btn"';
            }
        });
    }
    svSceneBtnAction() {
        var _a, _b;
        let modal = document.querySelector('#filename-modal');
        let modalFilename = modal.querySelector('.filename-input');
        this.svSceneBtn.addEventListener('click', (ev) => {
            ev.preventDefault();
            modal.showModal();
            let activeFileName = this.activeFile.id;
            let now = new Date();
            modalFilename.value =
                now.toLocaleDateString('en-CA') + '_' + activeFileName.name;
            modalFilename.focus();
            modalFilename.select();
        });
        (_a = modal.querySelector('.cl')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            modal.close();
        });
        (_b = modal.querySelector('.sv')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
            var _a, _b;
            let srcRef = this.activeFile.id;
            // let destRef = srcRef.parent?.parent?.child('generatedParams').child(modalFilename.value);
            let destRef = (0, storage_1.ref)((_a = srcRef.parent) === null || _a === void 0 ? void 0 : _a.parent, `generatedParams/${modalFilename.value}`);
            let sceneSrcFileName = modalFilename.value.split('.')[0] +
                '_source.' +
                modalFilename.value.split('.')[1];
            // let sceneSrcDestRef = srcRef.parent?.parent?.child('generatedParams').child(sceneSrcFileName);
            let sceneSrcDestRef = (0, storage_1.ref)((_b = srcRef.parent) === null || _b === void 0 ? void 0 : _b.parent, `generatedParams/${sceneSrcFileName}`);
            let file = new Blob([JSON.stringify(this.generatedSceneParam, null, 1)]);
            let sceneSrcFile = new Blob([
                JSON.stringify(this.userEditedSceneParam, null, 1),
            ]);
            let md = {
                contentType: 'application/json',
            };
            (0, storage_1.uploadBytes)(destRef, file, md)
                .then((snapshot) => {
                alert('Generated param file was saved');
                this.generatedSceneParam = {};
                this.userEditedSceneParam = {};
                this.displayStorageTextFile(srcRef);
            })
                .catch((e) => {
                console.error('Param Generation Failed:', e);
                alert('Generated param file was NOT saved');
            });
            (0, storage_1.uploadBytes)(sceneSrcDestRef, sceneSrcFile, md);
            modal.close();
            // destRef?.put(file, md).then(async (sns) => {
            //   alert('Generated param file was saved');
            //   this.generatedSceneParam = {};
            //   this.userEditedSceneParam = {};
            //   this.displayStorageTextFile(srcRef);
            // }).catch(e => {
            //   console.error('Param Generation Failed');
            //   alert('Generated param file was NOT saved');
            // });
            // sceneSrcDestRef?.put(sceneSrcFile, md);
            // modal.close();
        });
    }
    dateToTimestamp(data) {
        function _dateToTimestamp(element, idx, arr) {
            let dt = new Date(element);
            if (!isNaN(Number(dt)) &&
                dt instanceof Date &&
                typeof element === 'string') {
                arr[idx] = firestore_1.Timestamp.fromDate(dt);
            }
        }
        for (let key of Object.keys(data)) {
            if (Array.isArray(data[key]) &&
                (key.toLowerCase().includes('time') ||
                    key.toLowerCase().includes('dates'))) {
                console.log('ARRAY ' + 'data[' + key + ']' + '=' + data[key]);
                data[key].forEach(_dateToTimestamp);
            }
            else if (this.isDict(data[key])) {
                for (let key2 of Object.keys(data[key])) {
                    let dt = new Date(data[key][key2]);
                    if (!isNaN(Number(dt)) &&
                        dt instanceof Date &&
                        this.isString(data[key][key2])) {
                        console.log('Dictionary ' + 'data[' + key + ']' + '=' + data[key]);
                        data[key][key2] = firestore_1.Timestamp.fromDate(dt);
                    }
                }
            }
            else if (this.isString(data[key]) &&
                (key.toLowerCase().includes('date') ||
                    key.toLowerCase().includes('time'))) {
                let dt = new Date(data[key]);
                if (!isNaN(Number(dt)) && dt instanceof Date) {
                    data[key] = firestore_1.Timestamp.fromDate(dt);
                }
            }
        }
        return data;
    }
    isDict(val) {
        return val && typeof val === 'object' && val.constructor === Object;
    }
    isString(val) {
        return typeof val === 'string' || val.constructor === String;
    }
}
exports.Mkeditor = Mkeditor;
class Mkthree {
    /* constructor */
    constructor() {
        this.datGui = null;
        this.scene = null;
        this.camera = null;
        this.cameraPos = null;
        this.controls = null;
        this.dirLight = null;
        this.dirLightPos = null;
        this.light = null;
        this.loader = null;
        this.renderer = null;
        this.animationID = -1;
        this.active = false;
        this.canvas = document.querySelector('#dat-gui-div');
        this.ccanvas = document.querySelector('#three-canvas');
        let editorDiv = document.querySelector('#editor-div');
        this.ccanvas.width = editorDiv.offsetWidth;
        this.ccanvas.height = editorDiv.offsetHeight;
        this.ccanvas.style.width = String(editorDiv.offsetWidth);
        this.ccanvas.style.height = String(editorDiv.offsetHeight);
        this.resizeCanvasAction();
    }
    async renderCubeMap(cubeMapList) {
        if (this.active) {
            this.destroy();
        }
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.ccanvas,
            antialias: true,
        });
        this.renderer.physicallyCorrectLights = true;
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        // camera setup for cubemap defaults inside the cube
        this.cameraPos = new THREE.Vector3(0, 0, 10);
        this.camera = new THREE.PerspectiveCamera(45, this.ccanvas.width / this.ccanvas.height, 0.1, 2000);
        this.camera.position.set(this.cameraPos.x, this.cameraPos.y, this.cameraPos.z);
        this.controls = new OrbitControls_1.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.target.set(0, 0, 0);
        this.controls.update();
        this.dirLightPos = new THREE.Vector3(0, 2, 0);
        this.dirLight = new THREE.DirectionalLight(0xffffff, 0);
        this.dirLight.position.set(this.dirLightPos.x, this.dirLightPos.y, this.dirLightPos.z);
        this.light = new THREE.AmbientLight(0x404040, 0.05); // (0x404040, 0.1)
        const ambientLightParams = {
            color: '#404040',
            intensity: 0.05,
        };
        this.scene = new THREE.Scene();
        this.scene.add(this.camera);
        this.scene.add(this.dirLight);
        this.scene.add(this.light);
        // order: xright, xleft, ytop, ybottom, zfront, zback
        const cubeMapURLs = [
            await (0, storage_1.getDownloadURL)((0, storage_1.ref)(storage, cubeMapList.xright)),
            await (0, storage_1.getDownloadURL)((0, storage_1.ref)(storage, cubeMapList.xleft)),
            await (0, storage_1.getDownloadURL)((0, storage_1.ref)(storage, cubeMapList.ytop)),
            await (0, storage_1.getDownloadURL)((0, storage_1.ref)(storage, cubeMapList.ybottom)),
            await (0, storage_1.getDownloadURL)((0, storage_1.ref)(storage, cubeMapList.zfront)),
            await (0, storage_1.getDownloadURL)((0, storage_1.ref)(storage, cubeMapList.zback)),
        ];
        const loader = new THREE.CubeTextureLoader();
        const texture = loader.load(cubeMapURLs);
        this.datGui = new dat_gui_1.GUI({ autoPlace: false });
        const dirLightParams = {
            x: 0,
            y: 2,
            z: 0,
            color: '#ffffff',
            intensity: 0,
        };
        const cameraPositionParams = {
            x: 0,
            y: 0,
            z: 10,
        };
        const cameraPositionFolder = this.datGui.addFolder('Camera Position');
        cameraPositionFolder
            .add(cameraPositionParams, 'x', -10, 10, 1)
            .onFinishChange((val) => {
            var _a, _b;
            (_a = this.camera) === null || _a === void 0 ? void 0 : _a.position.setX(val);
            (_b = this.controls) === null || _b === void 0 ? void 0 : _b.update();
        });
        cameraPositionFolder
            .add(cameraPositionParams, 'y', -10, 10, 1)
            .onFinishChange((val) => {
            var _a, _b;
            (_a = this.camera) === null || _a === void 0 ? void 0 : _a.position.setY(val);
            (_b = this.controls) === null || _b === void 0 ? void 0 : _b.update();
        });
        cameraPositionFolder
            .add(cameraPositionParams, 'z', -10, 10, 1)
            .onFinishChange((val) => {
            var _a, _b;
            (_a = this.camera) === null || _a === void 0 ? void 0 : _a.position.setZ(val);
            (_b = this.controls) === null || _b === void 0 ? void 0 : _b.update();
        });
        const ambientLightFolder = this.datGui.addFolder('Ambient Light');
        ambientLightFolder.addColor(ambientLightParams, 'color').onChange((val) => {
            var _a;
            (_a = this.light) === null || _a === void 0 ? void 0 : _a.color.set(val);
        });
        ambientLightFolder
            .add(ambientLightParams, 'intensity', 0, 1, 0.05)
            .onChange((val) => {
            if (this.light) {
                this.light.intensity = val;
            }
        });
        ambientLightFolder.open();
        const dirLightFolder = this.datGui.addFolder('Directional Light');
        dirLightFolder.addColor(dirLightParams, 'color').onFinishChange((val) => {
            var _a;
            (_a = this.dirLight) === null || _a === void 0 ? void 0 : _a.color.set(val);
        });
        dirLightFolder
            .add(dirLightParams, 'intensity', 0, 1, 0.05)
            .onChange((val) => {
            if (this.dirLight) {
                this.dirLight.intensity = val;
            }
        });
        dirLightFolder
            .add(dirLightParams, 'x', -10, 10, 1)
            .onChange((val) => {
            if (this.dirLight) {
                this.dirLight.position.setX(val);
            }
        })
            .name('xPos');
        dirLightFolder
            .add(dirLightParams, 'y', -10, 10, 1)
            .onChange((val) => {
            if (this.dirLight) {
                this.dirLight.position.setY(val);
            }
        })
            .name('yPos');
        dirLightFolder
            .add(dirLightParams, 'x', -10, 10, 1)
            .onChange((val) => {
            if (this.dirLight) {
                this.dirLight.position.setZ(val);
            }
        })
            .name('zPos');
        dirLightFolder.open();
        const controlFolder = this.datGui.addFolder('Controls');
        let orbitControls = {};
        orbitControls.resetControl = () => {
            var _a;
            (_a = this.controls) === null || _a === void 0 ? void 0 : _a.reset();
        };
        controlFolder.add(orbitControls, 'resetControl');
        // this.datGui
        //   .add(this.dirLight, 'intensity', 0, 1, 0.05)
        //   .name('DirectionalLight Intensity');
        const containerrr = document.querySelector('#dat-container');
        containerrr.style.position = 'absolute';
        containerrr.style.top = '0px';
        containerrr.style.right = '0px';
        containerrr.appendChild(this.datGui.domElement);
        this.scene.background = texture;
        requestAnimationFrame(this.animate.bind(this));
        this.renderer.render(this.scene, this.camera);
        this.active = true;
    }
    /**
     * Public function to display mesh specified by filepath to a canvas
     * specified by canvas
     *
     * @param {string} filePath
     * @param {HTMLCanvasElement} canvas
     * @public
     */
    async displayMesh(meshRef) {
        console.time('displayMesh()');
        if (this.active) {
            this.destroy();
        }
        /* renderer setup */
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.ccanvas,
            antialias: true,
        });
        this.renderer.setClearColor(0xffffff);
        this.renderer.physicallyCorrectLights = true;
        this.renderer.toneMapping = THREE.LinearToneMapping;
        this.renderer.toneMappingExposure = 10;
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        /* camera setup */
        this.cameraPos = new THREE.Vector3(0, 0, 10);
        this.camera = new THREE.PerspectiveCamera(45, this.ccanvas.width / this.ccanvas.height, 0.1, 2000);
        this.camera.position.set(this.cameraPos.x, this.cameraPos.y, this.cameraPos.z);
        /* light setup */
        this.dirLightPos = new THREE.Vector3(0, 2, 0);
        this.dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
        this.dirLight.position.set(this.dirLightPos.x, this.dirLightPos.y, this.dirLightPos.z);
        const dirLightParams = {
            x: 0,
            y: 2,
            z: 0,
            color: '#ffffff',
            intensity: 0.5,
        };
        this.light = new THREE.AmbientLight(0x404040, 0.05); // (0x404040, 0.1)
        const ambientLightParams = {
            color: '#404040',
            intensity: 0.05,
        };
        /* control setup */
        this.controls = new OrbitControls_1.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.target = new THREE.Vector3(0, 0, 0);
        /* scene setup */
        this.scene = new THREE.Scene();
        this.scene.add(this.camera);
        this.scene.add(this.dirLight);
        this.scene.add(this.light);
        this.datGui = new dat_gui_1.GUI({ autoPlace: false });
        /* load mesh */
        let objectMesh = await this.loadMesh(meshRef);
        console.log('objectMesh:', objectMesh);
        const objectParams = {
            x: 0,
            y: 0,
            z: 0,
        };
        const objectFolder = this.datGui.addFolder('Object Rotation');
        objectFolder.add(objectParams, 'x', -180, 180, 5).onChange((val) => {
            objectMesh.scene.rotation.x = THREE.MathUtils.degToRad(val);
        });
        objectFolder.add(objectParams, 'y', -180, 180, 5).onChange((val) => {
            objectMesh.scene.rotation.y = THREE.MathUtils.degToRad(val);
        });
        objectFolder.add(objectParams, 'z', -180, 180, 5).onChange((val) => {
            objectMesh.scene.rotation.z = THREE.MathUtils.degToRad(val);
        });
        objectFolder.open();
        const ambientLightFolder = this.datGui.addFolder('Ambient Light');
        ambientLightFolder.addColor(ambientLightParams, 'color').onChange((val) => {
            var _a;
            (_a = this.light) === null || _a === void 0 ? void 0 : _a.color.set(val);
        });
        ambientLightFolder
            .add(ambientLightParams, 'intensity', 0, 1, 0.05)
            .onChange((val) => {
            if (this.light) {
                this.light.intensity = val;
            }
        });
        ambientLightFolder.open();
        const dirLightFolder = this.datGui.addFolder('Directional Light');
        dirLightFolder.addColor(dirLightParams, 'color').onFinishChange((val) => {
            var _a;
            (_a = this.dirLight) === null || _a === void 0 ? void 0 : _a.color.set(val);
        });
        dirLightFolder
            .add(dirLightParams, 'intensity', 0, 1, 0.05)
            .onChange((val) => {
            if (this.dirLight) {
                this.dirLight.intensity = val;
            }
        });
        dirLightFolder
            .add(dirLightParams, 'x', -10, 10, 1)
            .onChange((val) => {
            if (this.dirLight) {
                this.dirLight.position.setX(val);
            }
        })
            .name('xPos');
        dirLightFolder
            .add(dirLightParams, 'y', -10, 10, 1)
            .onChange((val) => {
            if (this.dirLight) {
                this.dirLight.position.setY(val);
            }
        })
            .name('yPos');
        dirLightFolder
            .add(dirLightParams, 'x', -10, 10, 1)
            .onChange((val) => {
            if (this.dirLight) {
                this.dirLight.position.setZ(val);
            }
        })
            .name('zPos');
        dirLightFolder.open();
        const controlFolder = this.datGui.addFolder('Controls');
        let orbitControls = {};
        orbitControls.resetControl = () => {
            var _a;
            (_a = this.controls) === null || _a === void 0 ? void 0 : _a.reset();
        };
        controlFolder.add(orbitControls, 'resetControl');
        // this.datGui
        //   .add(this.dirLight, 'intensity', 0, 1, 0.05)
        //   .name('DirectionalLight Intensity');
        const containerrr = document.querySelector('#dat-container');
        containerrr.style.position = 'absolute';
        containerrr.style.top = '0px';
        containerrr.style.right = '0px';
        containerrr.appendChild(this.datGui.domElement);
        /* add loaded mesh to scene */
        this.scene.add(objectMesh.scene);
        requestAnimationFrame(this.animate.bind(this));
        this.renderer.render(this.scene, this.camera);
        this.active = true;
        console.timeEnd('displayMesh()');
    }
    /**
     * Private function to load and return mesh specified by filepath
     *
     * @param {string} filePath
     * @returns {Promise}
     * @private
     */
    async loadMesh(meshRef) {
        try {
            let meshUrl = (await (0, storage_1.getDownloadURL)(meshRef).catch((e) => {
                console.error('Error:', e);
            }));
            // let meshUrl = await meshRef.getDownloadURL().catch(e => {
            //   console.error("Error:", e);
            // });
            this.loader = new GLTFLoader_1.GLTFLoader();
            return new Promise((resolve, reject) => {
                var _a;
                try {
                    (_a = this.loader) === null || _a === void 0 ? void 0 : _a.load(meshUrl, function (gltf) {
                        gltf.scene.traverse((child) => {
                            if (child.material) {
                                child.material.metalness = 0;
                                child.material.transparent = true;
                            }
                        });
                        resolve(gltf);
                    });
                }
                catch (error) {
                    console.error('Error:', error);
                }
            });
        }
        catch (error) {
            console.error('Error:', error);
        }
    }
    animate() {
        var _a;
        this.animationID = requestAnimationFrame(this.animate.bind(this));
        if (this.scene && this.camera) {
            (_a = this.renderer) === null || _a === void 0 ? void 0 : _a.render(this.scene, this.camera);
        }
    }
    destroy() {
        var _a, _b, _c;
        try {
            (_a = this.datGui) === null || _a === void 0 ? void 0 : _a.domElement.remove();
            (_b = this.datGui) === null || _b === void 0 ? void 0 : _b.destroy();
            this.scene = null;
            this.camera = null;
            this.cameraPos = null;
            this.controls = null;
            this.dirLight = null;
            this.dirLightPos = null;
            this.light = null;
            this.loader = null;
            (_c = this.renderer) === null || _c === void 0 ? void 0 : _c.clear();
            this.renderer = null;
            this.animationID = -1;
            this.active = false;
            cancelAnimationFrame(this.animationID);
        }
        catch (error) {
            console.error('Error destroying THREE Objects:', error);
        }
    }
    resizeCanvasAction() {
        window.addEventListener('resize', (ev) => {
            let editorDiv = document.querySelector('#editor-div');
            this.ccanvas.width = editorDiv.offsetWidth;
            this.ccanvas.height = editorDiv.offsetHeight;
            this.ccanvas.style.width = String(editorDiv.offsetWidth);
            this.ccanvas.style.height = String(editorDiv.offsetHeight);
        });
    }
}
exports.Mkthree = Mkthree;
class Mkimage {
    constructor() {
        this.imgCanvasDiv = document.querySelector('#image-canvas-div');
        this.imgCanvas = document.querySelector('#image-canvas');
        this.imgGallery = new viewerjs_1.default(document.getElementById('image-canvas'));
    }
    async displayImage(fileRef, fileName) {
        let li = document.createElement('li');
        li.setAttribute('class', 'imageList');
        let imgDiv = document.createElement('div');
        let img = document.createElement('img');
        let imgLabel = document.createElement('p');
        imgLabel.innerHTML = fileName;
        // await fileRef.getDownloadURL().then(url => {
        //   img.src = url;
        // });
        await (0, storage_1.getDownloadURL)(fileRef).then((url) => {
            img.src = url;
        });
        imgDiv.appendChild(img);
        imgDiv.appendChild(imgLabel);
        li.appendChild(imgDiv);
        this.imgCanvas.appendChild(li);
        this.imgGallery.destroy();
        this.imgGallery = new viewerjs_1.default(document.getElementById('image-canvas'));
    }
    removeImages() {
        var _a;
        let elements = document.getElementsByClassName('imageList');
        while (elements.length > 0) {
            (_a = elements[0].parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(elements[0]);
        }
    }
}
exports.Mkimage = Mkimage;
class Mkchart {
    constructor() {
        google.charts.load('current', { packages: ['corechart'] });
        this.chartDiv = document.querySelector('#chart-div');
        this.finderDiv = document.querySelector('#finder-div');
        this.plotX = document.querySelector('#quick-plot-x');
        this.plotY = document.querySelector('#quick-plot-y');
        this.plotBtn = document.querySelector('#plot-btn');
        this.isActive = false;
        this.isBigQuery = false;
        this.data = null;
        this.plotBtnAction();
    }
    plotBtnAction() {
        this.plotBtn.addEventListener('click', (ev) => {
            ev.preventDefault();
            this.isActive = !this.isActive;
            if (this.isBigQuery == false) {
                if (this.isActive) {
                    this.plotBtn.textContent = 'Close Quick Plot';
                    this.chartDiv.style.zIndex = '2';
                    this.finderDiv.style.zIndex = '1';
                    let vizData = new google.visualization.DataTable();
                    vizData.addColumn('datetime', this.plotX.value);
                    vizData.addColumn('number', this.plotY.value);
                    for (let i = 0; i < this.data[this.plotX.value].length; i++) {
                        vizData.addRow([
                            new Date(this.data[this.plotX.value][i]),
                            parseFloat(this.data[this.plotY.value][i]),
                        ]);
                    }
                    console.log(this.chartDiv.clientWidth);
                    let chart = new google.visualization.LineChart(this.chartDiv);
                    let options = {
                        title: this.plotY.value,
                        width: this.chartDiv.offsetWidth,
                        height: this.chartDiv.offsetHeight,
                        legend: 'none',
                        pointSize: 10,
                    };
                    chart.draw(vizData, options);
                }
                else {
                    this.plotBtn.textContent = 'Quick Plot';
                    this.finderDiv.style.zIndex = '2';
                    this.chartDiv.style.zIndex = '1';
                }
            }
            else if (this.isBigQuery == true) {
                if (this.isActive) {
                    this.plotBtn.textContent = 'Close Quick Plot';
                    this.chartDiv.style.zIndex = '2';
                    this.finderDiv.style.zIndex = '1';
                    let vizData = new google.visualization.DataTable();
                    if (this.plotX.value === 'timestamp') {
                        vizData.addColumn('datetime', this.plotX.value);
                    }
                    else {
                        vizData.addColumn('number', this.plotX.value);
                    }
                    if (this.plotY.value === 'timestamp') {
                        vizData.addColumn('datetime', this.plotY.value);
                    }
                    else {
                        vizData.addColumn('number', this.plotY.value);
                    }
                    for (let i = 0; i < this.data[this.plotX.value].length; i++) {
                        vizData.addRow([
                            this.data[this.plotX.value][i],
                            this.data[this.plotY.value][i],
                        ]);
                    }
                    let chart = new google.visualization.LineChart(this.chartDiv);
                    let options = {
                        title: this.plotY.value,
                        width: this.chartDiv.offsetWidth,
                        height: this.chartDiv.offsetHeight,
                        legend: 'none',
                        pointSize: 10,
                    };
                    chart.draw(vizData, options);
                }
                else {
                    this.plotBtn.textContent = 'Quick Plot';
                    this.finderDiv.style.zIndex = '2';
                    this.chartDiv.style.zIndex = '1';
                }
            }
        });
    }
    populateAxisFields(data) {
        this.data = data;
        this.isBigQuery = false;
        for (let key of Object.keys(data)) {
            if (Array.isArray(data[key]) &&
                (key.includes('_dates') || key.toLowerCase().includes('times'))) {
                let option = document.createElement('option');
                option.setAttribute('class', 'axis-options');
                option.setAttribute('value', key);
                option.textContent = key;
                this.plotX.appendChild(option);
            }
            else if ((Array.isArray(data[key]) && key.includes('_values')) ||
                key.toLowerCase().includes('values')) {
                let option = document.createElement('option');
                option.setAttribute('class', 'axis-options');
                option.setAttribute('value', key);
                option.textContent = key;
                this.plotY.appendChild(option);
            }
        }
    }
    bqPopulateAxisFields(dataArr, dataset) {
        this.isBigQuery = true;
        if (dataset === 'eyedata') {
            let eyedataObj = {};
            //console.log('bqpopulate axis dataArr', dataArr);
            dataArr.forEach((data) => {
                // console.log('data in dataArr', data);
                for (let key of Object.keys(data)) {
                    //console.log('key', key);
                    if (key === 'timestamp') {
                        try {
                            eyedataObj[key].push(new Date(data[key].value));
                        }
                        catch {
                            eyedataObj[key] = [];
                            eyedataObj[key].push(new Date(data[key].value));
                            this.addAxisOption(key);
                        }
                    }
                    else {
                        try {
                            eyedataObj[key].push(parseFloat(data[key]));
                        }
                        catch {
                            eyedataObj[key] = [];
                            eyedataObj[key].push(parseFloat(data[key]));
                            this.addAxisOption(key);
                        }
                    }
                }
            });
            this.data = eyedataObj;
        }
    }
    addAxisOption(key) {
        let optionX = document.createElement('option');
        optionX.setAttribute('class', 'axis-options');
        optionX.setAttribute('value', key);
        optionX.textContent = key;
        let optionY = document.createElement('option');
        optionY.setAttribute('class', 'axis-options');
        optionY.setAttribute('value', key);
        optionY.textContent = key;
        this.plotX.appendChild(optionX);
        this.plotY.appendChild(optionY);
    }
    removeElementsByClassName(cName) {
        var _a;
        let elements = document.getElementsByClassName(cName);
        while (elements.length > 0) {
            (_a = elements[0].parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(elements[0]);
        }
    }
}
exports.Mkchart = Mkchart;


/***/ }),

/***/ "./src/mkquery.ts":
/*!************************!*\
  !*** ./src/mkquery.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Mkquery = void 0;
const app_1 = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
const functions_1 = __webpack_require__(/*! firebase/functions */ "./node_modules/firebase/functions/dist/index.esm.js");
const firestore_1 = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
const functions = (0, functions_1.getFunctions)((0, app_1.getApp)());
// const functions = firebase.functions();
// const listTables = functions.httpsCallable('listTables');
const listTables = (0, functions_1.httpsCallable)(functions, 'listTables');
// const bqQuery = functions.httpsCallable('bqQuery');
const bqQuery = (0, functions_1.httpsCallable)(functions, 'bqQuery');
class Mkquery {
    constructor() {
        this.rfidMode = false;
    }
    ;
    /**
     * Connects and returns query strings
     *
     * @param {{field: string, keyword: string}[]} queryParams
     * @returns {string} returns a string of connected query strings
     */
    mkquery(queryParams) {
        let queryString;
        queryString = "";
        queryParams.forEach(queryParam => {
            queryString += this._mkquery(queryParam.field, queryParam.keyword);
        });
        return queryString;
    }
    /**
     * Generates and returns individual query string for a given field and keyword
     *
     * @param {string} field
     * @param {string} keyword
     * @returns {string} returns generated query string
     * @private
     */
    _mkquery(field, keyword) {
        if (field.toLowerCase().includes("date")) {
            const DAY_TO_MS = 86400000;
            let dateStr;
            let refDate;
            dateStr = keyword.split(";");
            dateStr.length === 2 ? dateStr[1] = dateStr[1].trim() : dateStr[1] = "";
            refDate = new Date(dateStr[0]);
            if (dateStr[1].includes("+-")) {
                let upperDate;
                let lowerDate;
                let range;
                let queryStr;
                range = Number(dateStr[1].substring(2, dateStr[1].length));
                upperDate = new Date(refDate.getTime() + range * DAY_TO_MS);
                lowerDate = new Date(refDate.getTime() - range * DAY_TO_MS);
                queryStr = ".where(" + `"${field}"` + ", '>=', " + "new Date("
                    + String(lowerDate.getTime()) + ")).where(" + `"${field}"`
                    + ", '<=', " + "new Date(" + String(upperDate.getTime()) + "))";
                return queryStr;
            }
            else if (dateStr[1].includes("+") && !dateStr[1].includes("-")) {
                let upperDate;
                let range;
                let queryStr;
                range = Number(dateStr[1].substring(1, dateStr[1].length));
                upperDate = new Date(refDate.getTime() + range * DAY_TO_MS);
                queryStr = ".where(" + `"${field}"` + ", '>=', " + "new Date("
                    + String(refDate.getTime()) + ")).where(" + `"${field}"`
                    + ", '<=', " + "new Date(" + String(upperDate.getTime()) + "))";
                return queryStr;
            }
            else if (dateStr[1].includes("-") && !dateStr[1].includes("+")) {
                let lowerDate;
                let range;
                let queryStr;
                range = Number(dateStr[1].substring(1, dateStr[1].length));
                lowerDate = new Date(refDate.getTime() + range * DAY_TO_MS);
                queryStr = ".where(" + `"${field}"` + ", '>=', " + "new Date("
                    + String(lowerDate.getTime()) + ")).where(" + `"${field}"`
                    + ", '<=', " + "new Date(" + String(refDate.getTime()) + "))";
                return queryStr;
            }
            else if (!(dateStr[1].includes("+") || dateStr[1].includes("-"))) {
                let upperDate;
                let queryStr;
                upperDate = new Date(refDate.getTime() + DAY_TO_MS);
                queryStr = ".where(" + `"${field}"` + ", '>=', " + "new Date("
                    + String(refDate.getTime()) + ")).where(" + `"${field}"` + ", '<=', "
                    + "new Date(" + String(upperDate.getTime()) + "))";
                return queryStr;
            }
        }
        else {
            let queryStr;
            // queryStr = ".where(" + `"${field}"` + ", '==', " + `"${keyword}"` + ")";
            queryStr = `where('${field}', '==', '${keyword}')`;
            return queryStr;
        }
    }
    async decodeQuery(query) {
        async function loadData(doc, arr) {
            await arr.push(doc.data());
        }
        let arr = new Array();
        await (0, firestore_1.getDocs)(query).then(async (querySnapshot) => {
            if (!querySnapshot.empty) {
                let promises = querySnapshot.docs.map(doc => loadData(doc, arr));
                await Promise.all(promises);
            }
            else {
                console.log('Found No Documents');
                alert('Found No Documents');
            }
        }).catch((e) => {
            console.error('Error Getting Documents:', e);
        });
        return arr;
        // await query.get().then(async querySnapshot => {
        //   if (!querySnapshot.empty) {
        //     let promises = querySnapshot.docs.map(doc => loadData(doc, arr));
        //     await Promise.all(promises);
        //   }
        //   else {
        //     console.log("Found No Documents");
        //     alert("Found No Documents");
        //   }
        // }).catch(e => {
        //   console.error("Error getting documents:", e);
        // });
        // return arr;
    }
    mkbquery(dataset, agent, date) {
        let queryDateLower = new Date(date);
        let queryDateUpper = new Date(date);
        queryDateUpper.setDate(queryDateUpper.getDate() + 1);
        queryDateLower = queryDateLower.toJSON().split('T')[0];
        queryDateUpper = queryDateUpper.toJSON().split('T')[0];
        let str = `SELECT *
              FROM \`sandbox-ce2c5.${dataset}.${agent}\`
              WHERE timestamp BETWEEN '${queryDateLower}' AND '${queryDateUpper}'
              ORDER BY timestamp ASC`;
        console.log("querystr", str);
        return str;
    }
    async decodeBigQuery(queryStr) {
        let test = await bqQuery(queryStr);
        return test;
    }
}
exports.Mkquery = Mkquery;


/***/ }),

/***/ "./src/parser.ts":
/*!***********************!*\
  !*** ./src/parser.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParseEngine = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const mathjs_1 = __webpack_require__(/*! mathjs */ "./node_modules/mathjs/lib/cjs/index.js");
const { random, multiply, log, pi, sqrt, cos, add, dotMultiply, range } = (0, mathjs_1.create)({
    randomDependencies: mathjs_1.randomDependencies,
    multiplyDependencies: mathjs_1.multiplyDependencies,
    logDependencies: mathjs_1.logDependencies,
    piDependencies: mathjs_1.piDependencies,
    sqrtDependencies: mathjs_1.sqrtDependencies,
    cosDependencies: mathjs_1.cosDependencies,
    dotMultiplyDependencies: mathjs_1.dotMultiplyDependencies,
    rangeDependencies: mathjs_1.rangeDependencies,
});
const lodash_clonedeep_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! lodash.clonedeep */ "./node_modules/lodash.clonedeep/index.js"));
const isPlainObject_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js"));
const isArray_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! lodash/isArray */ "./node_modules/lodash/isArray.js"));
class ParseEngine {
    constructor() { }
    generateParamObject(obj, scheme) {
        let userObj = (0, lodash_clonedeep_1.default)(obj);
        console.log(userObj);
        let totalLen = 1;
        let minLen = 1;
        let maxLen = 1;
        let path = [
            'CAMERAS',
            'LIGHTS',
            'OBJECTS',
            'IMAGES',
            'durationMS',
            'IMAGEFILTERS',
            'OBJECTFILTERS',
        ];
        // Parse and generate based on smart text
        path.forEach((module, index) => {
            if ((0, isArray_1.default)(userObj[module]) && userObj[module].length > 0) {
                userObj[module] = this.parseAndGenerate2(userObj[module]);
                totalLen *= userObj[module].length;
                minLen =
                    userObj[module].length > minLen ? minLen : userObj[module].length;
                maxLen =
                    maxLen > userObj[module].length ? maxLen : userObj[module].length;
            }
            else if ((0, isPlainObject_1.default)(userObj[module])) {
                for (let key in userObj[module]) {
                    if ((0, isArray_1.default)(userObj[module][key]) &&
                        userObj[module][key].length > 0) {
                        userObj[module][key] = this.parseAndGenerate2(userObj[module][key]);
                        totalLen *= userObj[module][key].length;
                        minLen =
                            userObj[module][key].length > minLen
                                ? minLen
                                : userObj[module][key].length;
                        maxLen =
                            maxLen > userObj[module][key].length
                                ? maxLen
                                : userObj[module][key].length;
                    }
                    else if ((0, isPlainObject_1.default)(userObj[module][key])) {
                        for (let key2 in userObj[module][key]) {
                            if ((0, isArray_1.default)(userObj[module][key][key2]) &&
                                userObj[module][key][key2].length > 0) {
                                userObj[module][key][key2] = this.parseAndGenerate2(userObj[module][key][key2]);
                                totalLen *= userObj[module][key][key2].length;
                                minLen =
                                    userObj[module][key][key2].length > minLen
                                        ? minLen
                                        : userObj[module][key][key2].length;
                                maxLen =
                                    maxLen > userObj[module][key][key2].length
                                        ? maxLen
                                        : userObj[module][key][key2].length;
                            }
                            else if ((0, isPlainObject_1.default)(userObj[module][key][key2])) {
                                for (let key3 in userObj[module][key][key2]) {
                                    if ((0, isArray_1.default)(userObj[module][key][key2][key3]) &&
                                        userObj[module][key][key2][key3].length > 0) {
                                        userObj[module][key][key2][key3] = this.parseAndGenerate2(userObj[module][key][key2][key3]);
                                        totalLen *= userObj[module][key][key2][key3].length;
                                        minLen =
                                            userObj[module][key][key2][key3].length > minLen
                                                ? minLen
                                                : userObj[module][key][key2][key3].length;
                                        maxLen =
                                            maxLen > userObj[module][key][key2][key3].length
                                                ? maxLen
                                                : userObj[module][key][key2][key3].length;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
        if (scheme == 'vectorize') {
            path.forEach((module, index) => {
                if ((0, isArray_1.default)(userObj[module]) && userObj[module].length > 1) {
                    let tmp = [];
                    for (let i = 0; i < totalLen; i++) {
                        tmp.push(userObj[module][i % userObj[module].length]);
                    }
                    userObj[module] = tmp;
                }
                else if ((0, isPlainObject_1.default)(userObj[module])) {
                    for (let key in userObj[module]) {
                        if ((0, isArray_1.default)(userObj[module][key]) &&
                            userObj[module][key].length > 1) {
                            let tmp = [];
                            for (let i = 0; i < totalLen; i++) {
                                tmp.push(userObj[module][key][i % userObj[module][key].length]);
                            }
                            userObj[module][key] = tmp;
                        }
                        else if ((0, isPlainObject_1.default)(userObj[module][key])) {
                            for (let key2 in userObj[module][key]) {
                                if ((0, isArray_1.default)(userObj[module][key][key2]) &&
                                    userObj[module][key][key2].length > 1) {
                                    let tmp = [];
                                    for (let i = 0; i < totalLen; i++) {
                                        tmp.push(userObj[module][key][key2][i % userObj[module][key][key2].length]);
                                    }
                                    userObj[module][key][key2] = tmp;
                                }
                                else if ((0, isPlainObject_1.default)(userObj[module][key][key2])) {
                                    for (let key3 in userObj[module][key][key2]) {
                                        if ((0, isArray_1.default)(userObj[module][key][key2][key3]) &&
                                            userObj[module][key][key2][key3].length > 1) {
                                            let tmp = [];
                                            for (let i = 0; i < totalLen; i++) {
                                                tmp.push(userObj[module][key][key2][key3][i % userObj[module][key][key2][key3].length]);
                                            }
                                            userObj[module][key][key2][key3] = tmp;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });
        }
        else if (scheme == 'expand') {
            path.forEach((module, index) => {
                if ((0, isArray_1.default)(userObj[module]) &&
                    userObj[module].length > 1 &&
                    userObj[module].length != maxLen) {
                    let err = new Error(`Length Mismatch: ${module}.length=${userObj[module].length} != maxLen=${maxLen}`);
                    alert(err.message);
                    throw err;
                }
                else if ((0, isPlainObject_1.default)(userObj[module])) {
                    for (let key in userObj[module]) {
                        if ((0, isArray_1.default)(userObj[module][key]) &&
                            userObj[module][key].length > 1 &&
                            userObj[module][key].length != maxLen) {
                            let err = new Error(`Length Mismatch: ${module}[${key}].length=${userObj[module][key].length} != maxLen=${maxLen}`);
                            alert(err.message);
                            throw err;
                        }
                        else if ((0, isPlainObject_1.default)(userObj[module][key])) {
                            for (let key2 in userObj[module][key]) {
                                if ((0, isArray_1.default)(userObj[module][key][key2]) &&
                                    userObj[module][key][key2].length > 1 &&
                                    userObj[module][key][key2].length != maxLen) {
                                    let err = new Error(`Length Mismatch: ${module}[${key}][${key2}].length=${userObj[module][key][key2].length} != maxLen=${maxLen}`);
                                    alert(err.message);
                                    throw err;
                                }
                                else if ((0, isPlainObject_1.default)(userObj[module][key][key2])) {
                                    for (let key3 in userObj[module][key][key2]) {
                                        if ((0, isArray_1.default)(userObj[module][key][key2][key3]) &&
                                            userObj[module][key][key2][key3].length > 1 &&
                                            userObj[module][key][key2][key3].length != maxLen) {
                                            let err = new Error(`Length Mismatch: ${module}[${key}][${key2}][${key3}].length=${userObj[module][key][key2][key3].length} != maxLen=${maxLen}`);
                                            alert(err.message);
                                            throw err;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });
        }
        console.log('userObj', userObj, 'totalLen:', totalLen);
        return userObj;
    }
    genParamObj(type, obj) {
        if (type == 'CAMERAS') {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    obj[key].position = this.vectorize(obj[key].position, 'cartesianObj');
                    obj[key].targetInches = this.vectorize(obj[key].targetInches, 'cartesianObj');
                    obj[key].visible = this.vectorize(obj[key].visible, 'array');
                }
            }
        }
        else if (type == 'LIGHTS') {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    obj[key].position = this.vectorize(obj[key].position, 'cartesianObj');
                    obj[key].intensity = this.vectorize(obj[key].intensity, 'array');
                    obj[key].visible = this.vectorize(obj[key].visible, 'array');
                }
            }
        }
        else if (type == 'OBJECTS') {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    obj[key].positionInches = this.vectorize(obj[key].positionInches, 'cartesianObj');
                    obj[key].rotationDegrees = this.vectorize(obj[key].rotationDegrees, 'cartesianObj');
                    obj[key].sizeInches = this.vectorize(obj[key].sizeInches, 'array');
                    obj[key].material.opacity = this.vectorize(obj[key].material.opacity, 'array');
                    obj[key].visible = this.vectorize(obj[key].visible, 'array');
                }
            }
        }
        else if (type == 'IMAGES') {
            obj.imageidx = this.vectorize(obj.imageidx, 'array');
        }
    }
    normal(mu, sigma, n) {
        let u1 = random([n]);
        let u2 = random([n]);
        let R_sq = multiply(-2, log(u1));
        let theta = multiply(2 * pi, u2);
        let z1 = dotMultiply(sqrt(R_sq), cos(theta));
        let sample = add(mu, multiply(z1, sigma));
        return sample;
    }
    parseAndGenerate2(row) {
        let sample;
        if (Object.prototype.toString.call(row[0]) === '[object String]') {
            let recipe = row[0].split('/');
            if (recipe[0] == 'normal' || recipe[0] == 'n') {
                console.log('row:', row);
                console.log('recipe:', recipe);
                let mu = Number(recipe[1].split(',')[0]);
                let sigma = Number(recipe[1].split(',')[1]);
                let n = Number(recipe[2]);
                sample = this.normal(mu, sigma, n);
                console.log(sample);
            }
            else if (recipe[0] == 'uniform' || recipe[0] == 'u') {
                let min = Number(recipe[1].split(',')[0]);
                let max = Number(recipe[1].split(',')[1]);
                let size = [Number(recipe[2])];
                sample = random(size, min, max);
            }
            else if (recipe[0] == 'range' || recipe[0] == 'r') {
                let start = Number(recipe[1].split(',')[0]);
                let end = Number(recipe[1].split(',')[1]);
                let step = Number(recipe[2]);
                let rangeArr = range(start, end, step);
                sample = [];
                rangeArr.forEach((value) => {
                    sample.push(Number(parseFloat(value).toPrecision(4)));
                });
            }
            else if (recipe[0] == 'linspace' || recipe[0] == 'l') {
                let start = Number(recipe[1].split(',')[0]);
                let end = Number(recipe[1].split(',')[1]);
                let num = Number(recipe[2]);
                let step = (end - start) / (num - 1);
                let linspaceRange = range(start, end, step, true);
                sample = [];
                linspaceRange.forEach((value) => {
                    sample.push(Number(parseFloat(value).toPrecision(4)));
                });
            }
            else if (recipe[0] == 'movie' || recipe[0] == 'm') {
                let list = recipe[1].split(',');
                let tmp = [];
                list.forEach((value) => {
                    tmp.push(Number(parseFloat(value).toPrecision(4)));
                });
                sample = [];
                sample.push(tmp);
            }
            else {
                let list = recipe[0].split(',');
                sample = [];
                list.forEach((value) => {
                    sample.push(Number(parseFloat(value).toPrecision(4)));
                });
            }
        }
        else {
            return row;
        }
        // else {
        //   if (isNaN(row[0]) == false) {
        //     console.log('single number', row);
        //     sample = [];
        //     sample.push(row);
        //   }
        // }
        return sample;
    }
    parseAndGenerate(row) {
        let sample;
        if (Object.prototype.toString.call(row) === '[object String]') {
            let recipe = row.split('/');
            if (recipe[0] == 'normal' || recipe[0] == 'n') {
                console.log('row:', row);
                let mu = Number(recipe[1].split(',')[0]);
                let sigma = Number(recipe[1].split(',')[1]);
                let n = Number(recipe[2]);
                sample = this.normal(mu, sigma, n);
            }
            else if (recipe[0] == 'uniform' || recipe[0] == 'u') {
                let min = Number(recipe[1].split(',')[0]);
                let max = Number(recipe[1].split(',')[1]);
                let size = [Number(recipe[2])];
                sample = random(size, min, max);
            }
            else if (recipe[0] == 'range' || recipe[0] == 'r') {
                let start = Number(recipe[1].split(',')[0]);
                let end = Number(recipe[1].split(',')[1]);
                let step = Number(recipe[2]);
                let rangeArr = range(start, end, step);
                sample = [];
                rangeArr.forEach((value) => {
                    sample.push(Number(parseFloat(value).toPrecision(4)));
                });
            }
            else if (recipe[0] == 'linspace' || recipe[0] == 'l') {
                let start = Number(recipe[1].split(',')[0]);
                let end = Number(recipe[1].split(',')[1]);
                let num = Number(recipe[2]);
                let step = (end - start) / (num - 1);
                let linspace = range(start, end, step, true);
                sample = [];
                linspace.forEach((value) => {
                    sample.push(Number(parseFloat(value).toPrecision(4)));
                });
            }
            else if (recipe[0] == 'movie' || recipe[0] == 'm') {
                let list = recipe[1].split(',');
                let tmp = [];
                list.forEach((value) => {
                    tmp.push(Number(parseFloat(value).toPrecision(4)));
                });
                sample = [];
                sample.push(tmp);
            }
            else {
                let list = recipe[0].split(',');
                sample = [];
                list.forEach((value) => {
                    sample.push(Number(parseFloat(value).toPrecision(4)));
                });
            }
        }
        else {
            if (isNaN(row) == false) {
                console.log('single number', row);
                sample = [];
                sample.push(row);
            }
        }
        return sample;
    }
    vectorize(obj, type) {
        let tmp;
        if (type == 'array') {
            tmp = [];
            obj.forEach((row) => {
                tmp.push(...this.parseAndGenerate(row));
            });
        }
        else if (type == 'cartesianObj') {
            tmp = { x: [], y: [], z: [] };
            let tmp2 = { x: [], y: [], z: [] };
            for (let axis in obj) {
                if (obj.hasOwnProperty(axis)) {
                    obj[axis].forEach((row) => {
                        tmp2[axis].push(...this.parseAndGenerate(row));
                    });
                }
            }
            if (!(tmp2.x.length == tmp2.y.length && tmp2.y.length == tmp2.z.length)) {
                tmp2.x.forEach((x) => {
                    tmp2.y.forEach((y) => {
                        tmp2.z.forEach((z) => {
                            tmp.x.push(x);
                            tmp.y.push(y);
                            tmp.z.push(z);
                        });
                    });
                });
            }
            else {
                tmp.x = tmp2.x;
                tmp.y = tmp2.y;
                tmp.z = tmp2.z;
            }
        }
        return tmp;
    }
}
exports.ParseEngine = ParseEngine;


/***/ }),

/***/ "?d4c0":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

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
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
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
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmkfiles"] = self["webpackChunkmkfiles"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-90cbcc"], () => (__webpack_require__("./src/main.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksY0FBYyxXQUFXLFlBQVksYUFBYSxRQUFRLE9BQU8sV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLFFBQVEsTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sU0FBUyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSx5Q0FBeUMsa0JBQWtCLGtCQUFrQixrQkFBa0IsNENBQTRDLHVDQUF1QywySEFBMkgsR0FBRyx1QkFBdUIsNEJBQTRCLEdBQUcscUJBQXFCLDhCQUE4QixHQUFHLHNCQUFzQix5QkFBeUIsR0FBRyxzQkFBc0IseUJBQXlCLEdBQUcsc0JBQXNCLHlCQUF5QixHQUFHLGFBQWEsa0JBQWtCLEdBQUcsbUJBQW1CLGlCQUFpQix1QkFBdUIsR0FBRyxtQkFBbUIsaUJBQWlCLHVCQUF1QixHQUFHLGVBQWUsb0JBQW9CLHVCQUF1QixHQUFHLGtCQUFrQixrQkFBa0IsR0FBRyxpQkFBaUIsbUJBQW1CLGdCQUFnQixlQUFlLG9CQUFvQix3Q0FBd0MseUVBQXlFLDBCQUEwQixpQkFBaUIsZ0JBQWdCLG9CQUFvQixHQUFHLHNCQUFzQix3QkFBd0IsNEJBQTRCLG9CQUFvQiwyQ0FBMkMsc0NBQXNDLG9LQUFvSyxrQkFBa0IsaUJBQWlCLHdCQUF3QixHQUFHLHdCQUF3QiwwQkFBMEIsb0JBQW9CLG1DQUFtQywyQ0FBMkMsR0FBRyxnQkFBZ0IsbUJBQW1CLGdCQUFnQixlQUFlLEdBQUcsbUJBQW1CLHNCQUFzQixHQUFHLGtCQUFrQixvQkFBb0IsdUJBQXVCLEdBQUcscUJBQXFCLHVCQUF1Qix1QkFBdUIsR0FBRyxrQkFBa0Isc0JBQXNCLHVCQUF1QixHQUFHLG9CQUFvQix3QkFBd0IsdUJBQXVCLEdBQUcseUJBQXlCLDJCQUEyQix1QkFBdUIsR0FBRyx5QkFBeUIsNEJBQTRCLGdCQUFnQixHQUFHLHFCQUFxQix5QkFBeUIsdUJBQXVCLHNCQUFzQixHQUFHLGFBQWEsZ0JBQWdCLG9CQUFvQixzQkFBc0IsZ0JBQWdCLEdBQUcsaUJBQWlCLGtCQUFrQixHQUFHLGlCQUFpQixlQUFlLG1CQUFtQixnQkFBZ0Isb0JBQW9CLDhDQUE4Qyx1RUFBdUUsMEJBQTBCLGlCQUFpQixnQkFBZ0Isb0JBQW9CLEdBQUcsYUFBYSxzQkFBc0IscUJBQXFCLDRCQUE0Qix1QkFBdUIsR0FBRyxxQkFBcUIseUJBQXlCLHVCQUF1QixzQkFBc0IsR0FBRyxpQkFBaUIsdUJBQXVCLGtCQUFrQixtQ0FBbUMsaURBQWlELEdBQUcsaUJBQWlCLDBCQUEwQixHQUFHLGlCQUFpQiwwQkFBMEIsa0JBQWtCLEdBQUcsaUJBQWlCLDBCQUEwQixrQkFBa0IsR0FBRyxzQkFBc0IsK0JBQStCLGtCQUFrQiwyQkFBMkIsS0FBSyxzQkFBc0IsdUJBQXVCLGtCQUFrQixJQUFJLDBCQUEwQixpQ0FBaUMsa0JBQWtCLEdBQUcsMkJBQTJCLGtDQUFrQyxrQkFBa0IsR0FBRyx1QkFBdUIsZUFBZSxtQkFBbUIsZ0JBQWdCLGlCQUFpQixxQkFBcUIsaUJBQWlCLG9CQUFvQixxQkFBcUIsNEJBQTRCLEdBQUcsbUJBQW1CLHFCQUFxQixxQkFBcUIsZ0JBQWdCLG9CQUFvQixnQkFBZ0IsaUJBQWlCLDRCQUE0QixrQkFBa0IscURBQXFELG1CQUFtQiwwQkFBMEIsR0FBRyxnQkFBZ0IsbUJBQW1CLGlCQUFpQixnQkFBZ0IsbUJBQW1CLEdBQUcsb0JBQW9CLGlCQUFpQixnQkFBZ0Isb0JBQW9CLG1CQUFtQixHQUFHLHdCQUF3QixpQkFBaUIsZ0JBQWdCLEdBQUcsc0JBQXNCLG9CQUFvQixpQkFBaUIsaUJBQWlCLG1CQUFtQiwwQkFBMEIsR0FBRyxzQkFBc0IsZUFBZSxtQkFBbUIsZ0JBQWdCLG1CQUFtQixJQUFJLG9CQUFvQixlQUFlLG1CQUFtQixnQkFBZ0IsbUJBQW1CLEdBQUcsb0JBQW9CLDhDQUE4Qyx3QkFBd0IsR0FBRyx1QkFBdUIscUJBQXFCLEdBQUcsb0JBQW9CLG1CQUFtQixzQkFBc0IsdUJBQXVCLHNCQUFzQixlQUFlLEdBQUcsc0JBQXNCLGtCQUFrQixpQkFBaUIsR0FBRyxtQkFBbUIsa0JBQWtCLGlCQUFpQixHQUFHLHFCQUFxQixxQkFBcUIsR0FBRyxvQkFBb0IsaUJBQWlCLHNCQUFzQixHQUFHLDBCQUEwQixrQkFBa0IsaUJBQWlCLG1DQUFtQyxHQUFHLDRCQUE0QixxQkFBcUIsR0FBRyxrQkFBa0IsMkJBQTJCLGlCQUFpQixvQkFBb0Isa0JBQWtCLGdCQUFnQixpQkFBaUIscUJBQXFCLGtCQUFrQixvQkFBb0IsR0FBRyxrQ0FBa0MsMkJBQTJCLEdBQUcsd0JBQXdCLHVCQUF1QixvQkFBb0IsaUJBQWlCLGlCQUFpQixxQkFBcUIsR0FBRyxtQkFBbUIsc0JBQXNCLEdBQUcsbUJBQW1CLGtCQUFrQixrQkFBa0IscUJBQXFCLDhCQUE4QixHQUFHLHlCQUF5QixrQkFBa0IsZ0NBQWdDLGlFQUFpRSxHQUFHLGlCQUFpQiwwQkFBMEIsa0JBQWtCLEdBQUcsbUJBQW1CLDRCQUE0QixHQUFHLG9CQUFvQiw2QkFBNkIsR0FBRywwQkFBMEIsOEJBQThCLGtCQUFrQix1Q0FBdUMsMENBQTBDLHNEQUFzRCxHQUFHLDBDQUEwQyw4QkFBOEIsR0FBRyxnREFBZ0QsOEJBQThCLEdBQUcsOENBQThDLDhCQUE4QixHQUFHLDJDQUEyQyw4QkFBOEIsR0FBRywrQ0FBK0MsOEJBQThCLEdBQUcsc0RBQXNELDhCQUE4QixHQUFHLDZDQUE2Qyw4QkFBOEIsR0FBRywyQ0FBMkMsOEJBQThCLEdBQUcsNkNBQTZDLDhCQUE4QixHQUFHLDZDQUE2Qyw4QkFBOEIsR0FBRywrQ0FBK0MsOEJBQThCLEdBQUcscUJBQXFCO0FBQzdwaUI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnZDLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQXFHO0FBQ3JHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsd0ZBQU87Ozs7QUFJK0M7QUFDdkUsT0FBTyxpRUFBZSx3RkFBTyxJQUFJLCtGQUFjLEdBQUcsK0ZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMxQmhFLHVCQUFlLEdBQUc7SUFDN0IsS0FBSyxFQUFFLG9CQUFvQjtJQUMzQixXQUFXLEVBQUUsMENBQTBDO0lBQ3ZELElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7SUFDekIsVUFBVSxFQUFFO1FBQ1YsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLFFBQVE7U0FDZjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTO1NBQ2hCO1FBRUQsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQztTQUM1QjtRQUNELGlCQUFpQixFQUFFO1lBQ2pCLElBQUksRUFBRSxRQUFRO1lBQ2QsUUFBUSxFQUFFO2dCQUNSLGdFQUFnRTthQUNqRTtTQUNGO1FBQ0QscUJBQXFCLEVBQUU7WUFDckIsSUFBSSxFQUFFLFNBQVM7U0FDaEI7UUFDRCxtQkFBbUIsRUFBRTtZQUNuQixJQUFJLEVBQUUsU0FBUztTQUNoQjtRQUNELGtCQUFrQixFQUFFO1lBQ2xCLElBQUksRUFBRSxTQUFTO1NBQ2hCO1FBQ0QsYUFBYSxFQUFFO1lBQ2IsSUFBSSxFQUFFLFNBQVM7U0FDaEI7UUFDRCxZQUFZLEVBQUU7WUFDWixJQUFJLEVBQUUsU0FBUztTQUNoQjtRQUNELEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxTQUFTO1NBQ2hCO1FBQ0QsYUFBYSxFQUFFO1lBQ2IsSUFBSSxFQUFFLFNBQVM7U0FDaEI7UUFDRCxnQkFBZ0IsRUFBRTtZQUNoQixJQUFJLEVBQUUsUUFBUTtTQUNmO1FBQ0QsZUFBZSxFQUFFO1lBQ2YsSUFBSSxFQUFFLFNBQVM7U0FDaEI7UUFDRCxrQkFBa0IsRUFBRTtZQUNsQixJQUFJLEVBQUUsU0FBUztTQUNoQjtRQUNELFdBQVcsRUFBRTtZQUNYLElBQUksRUFBRSxTQUFTO1lBQ2YsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELGlCQUFpQixFQUFFO1lBQ2pCLElBQUksRUFBRSxRQUFRO1NBQ2Y7UUFDRCxpQkFBaUIsRUFBRTtZQUNqQixJQUFJLEVBQUUsUUFBUTtTQUNmO1FBQ0QsaUJBQWlCLEVBQUU7WUFDakIsSUFBSSxFQUFFLFFBQVE7U0FDZjtRQUNELGlCQUFpQixFQUFFO1lBQ2pCLElBQUksRUFBRSxTQUFTO1lBQ2YsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUNaO1FBQ0QsZUFBZSxFQUFFO1lBQ2YsSUFBSSxFQUFFLFNBQVM7WUFDZixPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQ1o7UUFDRCxlQUFlLEVBQUU7WUFDZixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsU0FBUztnQkFDZixPQUFPLEVBQUUsQ0FBQzthQUNYO1NBQ0Y7UUFDRCxlQUFlLEVBQUU7WUFDZixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsU0FBUztnQkFDZixPQUFPLEVBQUUsQ0FBQzthQUNYO1NBQ0Y7UUFDRCxhQUFhLEVBQUU7WUFDYixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsU0FBUztnQkFDZixPQUFPLEVBQUUsQ0FBQzthQUNYO1NBQ0Y7UUFDRCxVQUFVLEVBQUU7WUFDVixJQUFJLEVBQUUsU0FBUztZQUNmLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxrQkFBa0IsRUFBRTtZQUNsQixJQUFJLEVBQUUsU0FBUztTQUNoQjtRQUNELGtCQUFrQixFQUFFO1lBQ2xCLElBQUksRUFBRSxRQUFRO1NBQ2Y7UUFDRCxnQkFBZ0IsRUFBRTtZQUNoQixJQUFJLEVBQUUsU0FBUztTQUNoQjtRQUNELGVBQWUsRUFBRTtZQUNmLElBQUksRUFBRSxTQUFTO1NBQ2hCO1FBQ0Qsd0JBQXdCLEVBQUU7WUFDeEIsSUFBSSxFQUFFLFFBQVE7U0FDZjtRQUNELHFCQUFxQixFQUFFO1lBQ3JCLElBQUksRUFBRSxRQUFRO1NBQ2Y7UUFDRCxlQUFlLEVBQUU7WUFDZixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsUUFBUTthQUNmO1NBQ0Y7UUFDRCxZQUFZLEVBQUU7WUFDWixJQUFJLEVBQUUsU0FBUztTQUNoQjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTO1lBQ2YsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTO1lBQ2YsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUVELGFBQWEsRUFBRTtZQUNiLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxRQUFRO2FBQ2Y7U0FDRjtRQUNELFVBQVUsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTO1NBQ2hCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFNBQVM7U0FDaEI7UUFDRCxtQkFBbUIsRUFBRTtZQUNuQixJQUFJLEVBQUUsU0FBUztTQUNoQjtRQUVELGdCQUFnQixFQUFFO1lBQ2hCLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELHFCQUFxQixFQUFFO1lBQ3JCLElBQUksRUFBRSxTQUFTO1NBQ2hCO1FBQ0QsYUFBYSxFQUFFO1lBQ2IsSUFBSSxFQUFFLFNBQVM7WUFDZixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBRUQsV0FBVyxFQUFFO1lBQ1gsSUFBSSxFQUFFLFNBQVM7U0FDaEI7UUFDRCxtQkFBbUIsRUFBRTtZQUNuQixJQUFJLEVBQUUsU0FBUztTQUNoQjtRQUNELFVBQVUsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTO1NBQ2hCO1FBQ0Qsd0JBQXdCLEVBQUU7WUFDeEIsSUFBSSxFQUFFLFNBQVM7U0FDaEI7UUFDRCxhQUFhLEVBQUU7WUFDYixJQUFJLEVBQUUsU0FBUztZQUNmLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxrQkFBa0IsRUFBRTtZQUNsQixJQUFJLEVBQUUsU0FBUztZQUNmLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxrQkFBa0IsRUFBRTtZQUNsQixJQUFJLEVBQUUsU0FBUztZQUNmLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxpQkFBaUIsRUFBRTtZQUNqQixJQUFJLEVBQUUsUUFBUTtTQUNmO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFLFNBQVM7U0FDaEI7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsU0FBUztTQUNoQjtRQUNELE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxRQUFRO1lBQ2QsUUFBUSxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUM7U0FDekM7UUFDRCxNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsU0FBUztTQUNoQjtLQUNGO0NBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUMxTUYsdUdBQTZDO0FBQzdDLHlIQU80QjtBQUM1QixtSEFBcUU7QUFDckUsMEdBS3VCO0FBQ3ZCLHlIQUFpRTtBQUNqRSw4REFBdUI7QUFDdkIsc0NBQXNDO0FBRXRDLE1BQU0sY0FBYyxHQUFHO0lBQ3JCLE1BQU0sRUFBRSx5Q0FBeUM7SUFDakQsVUFBVSxFQUFFLCtCQUErQjtJQUMzQyxXQUFXLEVBQUUsc0NBQXNDO0lBQ25ELFNBQVMsRUFBRSxlQUFlO0lBQzFCLGFBQWEsRUFBRSwyQkFBMkI7SUFDMUMsaUJBQWlCLEVBQUUsZUFBZTtDQUNuQyxDQUFDO0FBQ0YsSUFBSSxXQUFXLEdBQUcsdUJBQWEsRUFBQyxjQUFjLENBQUMsQ0FBQztBQUVoRCwyRUFBb0M7QUFDcEMsOEVBQXNDO0FBRXRDLE1BQU0sSUFBSSxHQUFHLGtCQUFPLEVBQUMsV0FBVyxDQUFDLENBQUM7QUFFbEMsTUFBTSxRQUFRLEdBQUcsSUFBSSx5QkFBa0IsRUFBRSxDQUFDO0FBQzFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsbURBQW1ELENBQUMsQ0FBQztBQUN2RSw0QkFBaUIsRUFBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtJQUN0QyxJQUFJLE1BQU0sRUFBRTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQ1QsZ0NBQWdDLEVBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUNqQixjQUFjLENBQ2YsQ0FBQztLQUNIO1NBQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQ1QsZ0NBQWdDLEVBQ2hDLElBQUksQ0FBQyxXQUFXLEVBQ2hCLGNBQWMsQ0FDZixDQUFDO0tBQ0g7U0FBTTtRQUNMLDZCQUFrQixFQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztLQUNwQztBQUNILENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxTQUFTLEdBQUcsNEJBQVksRUFBQyxXQUFXLENBQUMsQ0FBQztBQUM1QyxNQUFNLEVBQUUsR0FBRyw0QkFBWSxFQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3JDLE1BQU0sT0FBTyxHQUFHLHdCQUFVLEVBQUMsV0FBVyxDQUFDLENBQUM7QUFDeEMsTUFBTSxVQUFVLEdBQUcsaUJBQUcsRUFBQyxPQUFPLENBQUMsQ0FBQztBQUNoQyxNQUFNLE9BQU8sR0FBRyxpQkFBRyxFQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUMvQyxNQUFNLFlBQVksR0FBRyxpQkFBRyxFQUFDLFVBQVUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0FBQzFELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztBQUVsQixJQUFJLEdBQUcsR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztBQUN4QixJQUFJLEdBQUcsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztBQUV6QixJQUFJLGNBQWMsR0FBRyw2QkFBYSxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBRWhFLElBQUksYUFBYSxHQUFHLGNBQWMsRUFBRSxDQUFDO0FBQ3JDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFnQixFQUFFLEVBQUU7SUFDdEMsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FDckMsb0JBQW9CLENBQ0UsQ0FBQztJQUN6QixXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQVksRUFBRSxFQUFFO1FBQ3hDLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsTUFBTSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDdkIsTUFBTSxDQUFDLFdBQVcsR0FBRyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ3JDLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFxQixDQUFDO0FBQzVFLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQ3JDLG1CQUFtQixDQUNDLENBQUM7QUFDdkIsSUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FDeEMsaUJBQWlCLENBQ0csQ0FBQztBQUV2QixpQkFBaUI7QUFDakIsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBZ0IsQ0FBQztBQUN6RSxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFnQixDQUFDO0FBQzdFLElBQUksZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FDM0MsMEJBQTBCLENBQ1osQ0FBQztBQUNqQixJQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUMxQyx5QkFBeUIsQ0FDWCxDQUFDO0FBQ2pCLElBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQ3hDLHVCQUF1QixDQUNULENBQUM7QUFDakIsSUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FDeEMsdUJBQXVCLENBQ1QsQ0FBQztBQUVqQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBVSxFQUFFLEVBQUU7SUFDN0MsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBRXJCLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDZixVQUFVLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztJQUNqQyxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDOUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQyxDQUFDO0FBRUgsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQVMsRUFBRSxFQUFFO0lBQ3BELEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUVwQixVQUFVLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQztJQUMvQixhQUFjLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztJQUM5QixVQUFXLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDL0MsYUFBYyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRWxELElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsMEJBQVUsRUFBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUN2RCxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDaEIsR0FBRyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sSUFBSSxDQUFXLEVBQUUsQ0FBQyxFQUFTLEVBQUUsRUFBRTtJQUNoRSxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7SUFFcEIsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNmLFVBQVUsQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO0lBQ2pDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM5QyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsaUJBQUcsRUFBQyxVQUFVLEVBQUUscUNBQXFDLENBQUMsQ0FBQyxDQUFDO0FBQy9FLENBQUMsQ0FBQyxDQUFDO0FBRUgsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxJQUFJLENBQVcsRUFBRSxDQUFDLEVBQVMsRUFBRSxFQUFFO0lBQ3RFLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUVwQixNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ2YsVUFBVSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7SUFDakMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzlDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FDbEIsaUJBQUcsRUFBQyxVQUFVLEVBQUUsMkNBQTJDLENBQUMsQ0FDN0QsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDO0FBRUgsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sSUFBSSxDQUFXLEVBQUUsQ0FBQyxFQUFTLEVBQUUsRUFBRTtJQUM5RCxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7SUFFcEIsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNmLFVBQVUsQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO0lBQ2pDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM5Qyx5REFBeUQ7SUFDekQsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQyxDQUFDO0FBRUgsZUFBZSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sSUFBSSxDQUFXLEVBQUUsQ0FBQyxFQUFTLEVBQUUsRUFBRTtJQUNyRSxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7SUFFcEIsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNmLFVBQVUsQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO0lBQ2pDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM5QywrRUFBK0U7SUFDL0UsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGlCQUFHLEVBQUMsT0FBTyxFQUFFLHVCQUF1QixDQUFDLENBQUMsQ0FBQztBQUM5RCxDQUFDLENBQUMsQ0FBQztBQUVILGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLElBQUksQ0FBVyxFQUFFLENBQUMsRUFBUyxFQUFFLEVBQUU7SUFDbkUsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3BCLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDZixVQUFVLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztJQUNqQyxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDOUMscUVBQXFFO0lBQ3JFLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBRyxFQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQyxDQUFDO0FBRUgsVUFBVyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO0lBQzVDLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQXNCLENBQUM7SUFDeEUsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBcUIsQ0FBQztJQUN6RSxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFxQixDQUFDO0lBQ3pFLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQXFCLENBQUM7SUFDekUsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQXNCLENBQUM7SUFDbkUsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQXNCLENBQUM7SUFDekUsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQXNCLENBQUM7SUFDekUsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQXNCLENBQUM7SUFDdkUsSUFBSSxXQUEyQixDQUFDO0lBRWhDLFFBQVEsVUFBVSxDQUFDLEtBQUssRUFBRTtRQUN4QixLQUFLLFdBQVc7WUFDZCxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDaEMsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQ2pDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUNoQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDaEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBRW5DLGdCQUFnQixFQUFFLENBQUM7WUFDbkIseUJBQXlCLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFM0MsSUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNyRCxhQUFhLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztZQUNyRCxhQUFhLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM1QyxhQUFhLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMvQyxhQUFhLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztZQUVuQyxJQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELFlBQVksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBQ3BELFlBQVksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzFDLFlBQVksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBRWpDLElBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDckQsYUFBYSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFDckQsYUFBYSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDNUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7WUFFbkMsSUFBSSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pELGlCQUFpQixDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFDekQsaUJBQWlCLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNwRCxpQkFBaUIsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1lBRTNDLElBQUksa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxRCxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBQzFELGtCQUFrQixDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDdEQsa0JBQWtCLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztZQUU3QyxJQUFJLHNCQUFzQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQ2pELGlCQUFpQixDQUNHLENBQUM7WUFDdkIsc0JBQXNCLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2xELHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNqRCxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDbEQsc0JBQXNCLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDdEQsc0JBQXNCLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDdkQsc0JBQXNCLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFFMUQsTUFBTTtRQUVSLEtBQUssWUFBWTtZQUNmLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUNoQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDakMsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQ2pDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUNoQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDbkMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBQ2xDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUNsQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFFcEMsZ0JBQWdCLEVBQUUsQ0FBQztZQUNuQix5QkFBeUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUUzQyxJQUFJLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEQsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztZQUN4RCxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLENBQUM7WUFDM0QsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNsRCxnQkFBZ0IsQ0FBQyxXQUFXLEdBQUcscUJBQXFCLENBQUM7WUFFckQsSUFBSSxtQkFBbUIsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUM5QyxpQkFBaUIsQ0FDRyxDQUFDO1lBQ3ZCLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ2xELG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBRXZELE1BQU07UUFFUixLQUFLLFNBQVM7WUFDWixFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDaEMsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQ2pDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUNoQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDaEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQ25DLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUNsQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDbEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBRXBDLGdCQUFnQixFQUFFLENBQUM7WUFDbkIseUJBQXlCLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFM0MsSUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2RCxlQUFlLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztZQUN2RCxlQUFlLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNsRCxlQUFlLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNqRCxlQUFlLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztZQUV6QyxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25ELFdBQVcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBQ25ELFdBQVcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzFDLFdBQVcsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1lBRWpDLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkQsV0FBVyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFDbkQsV0FBVyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDMUMsV0FBVyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7WUFFakMsSUFBSSxvQkFBb0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUMvQyxpQkFBaUIsQ0FDRyxDQUFDO1lBQ3ZCLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNsRCxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDOUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzlDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBRXhELE1BQU07UUFFUixLQUFLLGFBQWE7WUFDaEIsMkRBQTJEO1lBQzNELElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsMEJBQVUsRUFBQyxFQUFFLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN6RCxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ2hCLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDN0MsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNO1FBRVIsS0FBSyxhQUFhO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztZQUM3QyxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDL0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBQ2hDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUNoQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDaEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBQ2xDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUNsQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDbEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBRXBDLHlCQUF5QixDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5QixJQUFJLE1BQU0sRUFBRTtnQkFDVixHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDL0I7WUFDRCxNQUFNO1FBRVIsS0FBSyxtQkFBbUI7WUFDdEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBQy9CLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUNoQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDaEMsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBQ2hDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUNsQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDbEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUVwQyx5QkFBeUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUMzQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDbkMsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ3BDO1lBQ0QsTUFBTTtRQUVSLEtBQUssU0FBUztZQUNaLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUMvQixHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDaEMsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBQ2hDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUNoQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDbEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBQ2xDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUNsQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFFcEMsZ0JBQWdCLEVBQUUsQ0FBQztZQUNuQix5QkFBeUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUUzQywyREFBMkQ7WUFDM0QsV0FBVyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsMEJBQVUsRUFBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN6RCxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ3hCLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDekMsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNO1FBRVIsS0FBSyxXQUFXO1lBQ2QsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBQy9CLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUNoQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDaEMsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBQ2hDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUNsQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDbEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUVwQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ25CLHlCQUF5QixDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRTNDLFdBQVcsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLDBCQUFVLEVBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDM0QsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUN4QixHQUFHLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzNDLENBQUMsQ0FBQyxDQUFDO1lBRUgsTUFBTTtRQUVSLEtBQUssWUFBWTtZQUNmLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUMvQixHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDaEMsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBQ2hDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUNoQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDbEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBQ2xDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUNsQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFFcEMsZ0JBQWdCLEVBQUUsQ0FBQztZQUNuQix5QkFBeUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUUzQyxXQUFXLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQywwQkFBVSxFQUFDLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQzVELFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDeEIsR0FBRyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztZQUVILE1BQU07UUFFUixLQUFLLFdBQVc7WUFDZCxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDL0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBQ2hDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUNoQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDaEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBQ2xDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUNsQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDbEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBRXBDLGdCQUFnQixFQUFFLENBQUM7WUFDbkIseUJBQXlCLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFM0MsV0FBVyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsMEJBQVUsRUFBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUMzRCxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ3hCLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDM0MsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNO1FBRVIsS0FBSyxpQkFBaUI7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDL0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBQ2hDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUNoQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDaEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBQ2xDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUNsQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDbEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBRXBDLGdCQUFnQixFQUFFLENBQUM7WUFDbkIseUJBQXlCLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFM0MsbUVBQW1FO1lBQ25FLFdBQVcsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLDBCQUFVLEVBQUMsRUFBRSxFQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQztZQUNqRSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ3hCLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztZQUNqRCxDQUFDLENBQUMsQ0FBQztZQUVILE1BQU07UUFFUixLQUFLLFNBQVM7WUFDWixFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDaEMsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQ2pDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUNqQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDaEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQ25DLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUNuQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDbkMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBRXJDLGdCQUFnQixFQUFFLENBQUM7WUFDbkIseUJBQXlCLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFM0MsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuRCxXQUFXLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztZQUNuRCxXQUFXLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQztZQUNqRCxXQUFXLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM3QyxXQUFXLENBQUMsV0FBVyxHQUFHLG9CQUFvQixDQUFDO1lBRS9DLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDNUIsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBRXRDLE1BQU07UUFFUixLQUFLLFNBQVM7WUFDWixFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDaEMsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQ2pDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUNqQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDaEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQ25DLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUNuQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDbkMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBRXJDLGdCQUFnQixFQUFFLENBQUM7WUFDbkIseUJBQXlCLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFM0MsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuRCxXQUFXLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztZQUNuRCxXQUFXLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQztZQUNqRCxXQUFXLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM3QyxXQUFXLENBQUMsV0FBVyxHQUFHLG9CQUFvQixDQUFDO1lBRS9DLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDNUIsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLE1BQU07S0FDVDtBQUNILENBQUMsQ0FBQyxDQUFDO0FBRUgsYUFBYSxhQUFiLGFBQWEsdUJBQWIsYUFBYSxDQUFFLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO0lBQy9DLElBQUksS0FBSyxHQUFHLGFBQWEsYUFBYixhQUFhLHVCQUFiLGFBQWEsQ0FBRSxLQUFLLENBQUM7SUFDakMsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBcUIsQ0FBQztJQUN6RSxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFxQixDQUFDO0lBQ3pFLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQXFCLENBQUM7SUFDekUsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQXNCLENBQUM7SUFDekUsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQXNCLENBQUM7SUFDekUsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQXNCLENBQUM7SUFFdkUsUUFBUSxLQUFLLEVBQUU7UUFDYixLQUFLLE1BQU07WUFDVCxnQkFBZ0IsRUFBRSxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUNuQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDbkMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQ3JDLE1BQU07UUFFUixLQUFLLEtBQUs7WUFDUixnQkFBZ0IsRUFBRSxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUNsQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDbEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBQ3BDLE1BQU07UUFFUixLQUFLLE1BQU07WUFDVCxnQkFBZ0IsRUFBRSxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUNuQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDbkMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQ3JDLE1BQU07UUFFUixLQUFLLFVBQVU7WUFDYixnQkFBZ0IsRUFBRSxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQzVDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUNsQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDbEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBQ3BDLE1BQU07UUFFUixLQUFLLFdBQVc7WUFDZCxnQkFBZ0IsRUFBRSxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLGtDQUFrQyxDQUFDLENBQUM7WUFDcEUsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBQ2xDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUNsQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDcEMsTUFBTTtRQUVSLEtBQUssa0JBQWtCO1lBQ3JCLEdBQUcsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3pDLEdBQUcsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLG9DQUFvQyxDQUFDLENBQUM7WUFDdEUsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBQ2xDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUNsQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDcEMsTUFBTTtRQUVSLEtBQUssYUFBYTtZQUNoQixHQUFHLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN4QyxHQUFHLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxvQ0FBb0MsQ0FBQyxDQUFDO1lBQ3RFLE1BQU07UUFFUixLQUFLLFNBQVM7WUFDWixHQUFHLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUN6QyxHQUFHLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1lBQzFELE1BQU07S0FDVDtBQUNILENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBa0IsZUFBZSxDQUFDLENBQUM7QUFDekUsU0FBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUU7O0lBQ2pELEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFCLElBQUksTUFBTSxHQUFHLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxLQUFLLENBQUM7SUFDL0IsSUFBSSxLQUFLLEdBQUcsYUFBYSxhQUFiLGFBQWEsdUJBQWIsYUFBYSxDQUFFLEtBQUssQ0FBQztJQUNqQyxJQUFJLEVBQUUsR0FBRyxjQUFRLENBQUMsYUFBYSxDQUFtQixrQkFBa0IsQ0FBQywwQ0FBRSxLQUFLLENBQUM7SUFDN0UsSUFBSSxFQUFFLEdBQUcsY0FBUSxDQUFDLGFBQWEsQ0FBbUIsa0JBQWtCLENBQUMsMENBQUUsS0FBSyxDQUFDO0lBQzdFLElBQUksRUFBRSxHQUFHLGNBQVEsQ0FBQyxhQUFhLENBQW1CLGtCQUFrQixDQUFDLDBDQUFFLEtBQUssQ0FBQztJQUU3RSxJQUFJLFVBQVUsR0FBeUMsRUFBRSxDQUFDO0lBQzFELElBQUksUUFBUSxHQUFXLEVBQUUsQ0FBQztJQUMxQixJQUFJLFdBQWtCLENBQUM7SUFFdkIsUUFBUSxNQUFNLEVBQUU7UUFDZCxLQUFLLFdBQVc7WUFDZCxJQUFJLEVBQUUsRUFBRTtnQkFDTixVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNoRDtpQkFBTTtnQkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBQ3JDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2FBQzlCO1lBQ0QsV0FBVyxHQUFHLHFCQUFLLEVBQ2pCLDBCQUFVLEVBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxFQUMzQixxQkFBSyxFQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FDeEQsQ0FBQztZQUNGLHFFQUFxRTtZQUNyRSxpREFBaUQ7WUFDakQsUUFBUSxHQUFHLHNDQUFzQyxHQUFHLENBQUMsT0FBTyxDQUMxRCxVQUFVLENBQ1gsR0FBRyxDQUFDO1lBQ0wsTUFBTTtRQUVSLEtBQUssWUFBWTtZQUNmLElBQUksRUFBRSxFQUFFO2dCQUNOLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ2xEO1lBQ0QsWUFBWTtZQUNaLHdEQUF3RDtZQUN4RCxJQUFJO1lBQ0osSUFBSSxFQUFFLEVBQUU7Z0JBQ04sVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDeEQ7WUFFRCxJQUFJLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUMxQixPQUFPLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBQ3JDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2FBQzlCO2lCQUFNLElBQUksVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQ2pDLFdBQVcsR0FBRyxxQkFBSyxFQUNqQiwwQkFBVSxFQUFDLEVBQUUsRUFBRSxZQUFZLENBQUMsRUFDNUIscUJBQUssRUFBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQ3hELENBQUM7YUFDSDtpQkFBTSxJQUFJLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUNqQyxXQUFXLEdBQUcscUJBQUssRUFDakIsMEJBQVUsRUFBQyxFQUFFLEVBQUUsWUFBWSxDQUFDLEVBQzVCLHFCQUFLLEVBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUN2RCxxQkFBSyxFQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FDeEQsQ0FBQzthQUNIO2lCQUFNLElBQUksVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQ2pDLFdBQVcsR0FBRyxxQkFBSyxFQUNqQiwwQkFBVSxFQUFDLEVBQUUsRUFBRSxZQUFZLENBQUMsRUFDNUIscUJBQUssRUFBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQ3ZELHFCQUFLLEVBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUN2RCxxQkFBSyxFQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FDeEQsQ0FBQzthQUNIO1lBRUQsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDekIsUUFBUSxHQUFHLDZCQUE2QixHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDcEU7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUNyQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQzthQUM5QjtZQUNELE1BQU07UUFFUixLQUFLLFNBQVM7WUFDWixJQUFJLEVBQUUsRUFBRTtnQkFDTixVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNoRDtpQkFBTTtnQkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBQ3JDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2FBQzlCO1lBQ0QsUUFBUSxHQUFHLDBCQUEwQixHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDaEUsTUFBTTtRQUVSLEtBQUssU0FBUztZQUNaLElBQUksRUFBRSxFQUFFO2dCQUNOLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ2pEO1lBQ0QsSUFBSSxFQUFFLEVBQUU7Z0JBQ04sVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDeEQ7WUFFRCxJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN6QixRQUFRLEdBQUcsMEJBQTBCLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNqRTtpQkFBTTtnQkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBQ3JDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2FBQzlCO1lBQ0QsTUFBTTtRQUVSLEtBQUssU0FBUztZQUNaLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtnQkFDWixRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQzVDO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztnQkFDNUQsS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7YUFDckQ7WUFDRCxNQUFNO0tBQ1Q7SUFFRCxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QiwwQkFBMEI7UUFFMUIsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxXQUFZLENBQUMsQ0FBQztRQUN4QyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDaEIsR0FBRyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxNQUFPLENBQUMsQ0FBQztZQUNyQyxJQUFJLFVBQVUsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3RCLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3ZCLEdBQUcsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQzthQUN2RTtRQUNILENBQUMsQ0FBQyxDQUFDO0tBQ0o7U0FBTSxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDMUMsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtZQUN0QixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM1QixHQUFHLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRyxDQUFDLENBQUM7YUFDL0M7WUFDRCxpREFBaUQ7UUFDbkQsQ0FBQyxDQUFDLENBQUM7S0FDSjtBQUNILENBQUMsQ0FBQyxDQUFDO0FBRUgsU0FBUyxnQkFBZ0I7SUFDdkIsSUFBSSxhQUFhLEdBQUc7UUFDbEIsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQW1CLGdCQUFnQixDQUFDO0tBQ2pFLENBQUM7SUFFRixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUM3QyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUNsQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztLQUM3QjtBQUNILENBQUM7QUFFRCxTQUFTLHlCQUF5QixDQUFDLEtBQWE7O0lBQzlDLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RCxPQUFPLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQzFCLGNBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLDBDQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNsRDtBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNodEJELHVHQUFzQztBQUN0Qyx5SEFBNkQ7QUFDN0QsMkVBQWdFO0FBQ2hFLDRJQUFtQztBQUNuQyxtSEFRMEI7QUFRMUIsTUFBTSxFQUFFLEdBQUcsNEJBQVksR0FBRSxDQUFDO0FBRTFCLE1BQWEsUUFBUTtJQWlCbkI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsd0JBQVUsRUFBQyxnQkFBTSxHQUFFLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLGlCQUFHLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBRXpCLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQXNCLENBQUM7UUFDeEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUN6QyxrQkFBa0IsQ0FDRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FDeEMsbUJBQW1CLENBQ0EsQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQ3ZDLGdCQUFnQixDQUNJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUNwQyxpQkFBaUIsQ0FDTSxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQXNCLENBQUM7UUFFNUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBRTNCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksa0JBQVEsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7UUFFekIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTSxpQkFBaUIsQ0FBQyxPQUFjLEVBQUUsUUFBZ0I7UUFDdkQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU8sZUFBZTtRQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFLENBQUMsR0FBZ0IsRUFBRSxFQUFFO1lBQ3RFLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUV4QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxxQkFBcUIsQ0FBQyxPQUFjLEVBQUUsUUFBZ0I7UUFDNUQsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDOUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFFOUMsSUFBSSxRQUFRLElBQUksV0FBVyxFQUFFO1lBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxTQUFTLENBQUMsU0FBUyxFQUFFO2dCQUNyQyxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsTUFBTTtnQkFDYixNQUFNLEVBQUUsWUFBWTtnQkFDcEIsV0FBVyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQztnQkFDN0MsT0FBTyxFQUFFO29CQUNQO3dCQUNFLEtBQUssRUFBRSwwQ0FBMEM7d0JBQ2pELEtBQUssRUFBRSxFQUFFO3dCQUNULFVBQVUsRUFBRSxLQUFLO3FCQUNsQjtvQkFDRCxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtvQkFDaEMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7b0JBQzlCLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFO29CQUNwQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtpQkFDakM7Z0JBQ0QsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLG1CQUFtQixFQUFFLE9BQU87Z0JBQzVCLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtvQkFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUV4QixJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUMxRCxJQUFJLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUNuRCxJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUM3QyxDQUFDO2dCQUNELE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtvQkFDckIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUV4QixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUV4QixJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUMxRCxJQUFJLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUNuRCxJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUM3QyxDQUFDO2dCQUNELFVBQVUsRUFBRSxHQUFHLEVBQUU7b0JBQ2YsMkJBQTJCO29CQUMzQixJQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUN2QyxhQUFhLENBQ00sQ0FBQztvQkFDdEIsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO3dCQUM3QyxJQUFJLFlBQVksQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFOzRCQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO3lCQUN6Qjs2QkFBTTs0QkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO3lCQUMzQjtvQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7YUFBTSxJQUFJLFFBQVEsSUFBSSxZQUFZLEVBQUU7WUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7WUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFNBQVMsQ0FBQyxTQUFTLEVBQUU7Z0JBQ3JDLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxPQUFPO2dCQUNkLE1BQU0sRUFBRSxZQUFZO2dCQUNwQixXQUFXLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDO2dCQUM5QyxPQUFPLEVBQUU7b0JBQ1A7d0JBQ0UsS0FBSyxFQUFFLDBDQUEwQzt3QkFDakQsS0FBSyxFQUFFLEVBQUU7d0JBQ1QsVUFBVSxFQUFFLEtBQUs7cUJBQ2xCO29CQUNELEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO29CQUNsQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtvQkFDdEMsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUU7b0JBQzlDO3dCQUNFLEtBQUssRUFBRSxrQkFBa0I7d0JBQ3pCLEtBQUssRUFBRSxrQkFBa0I7d0JBQ3pCLE9BQU8sRUFBRSxLQUFLO3FCQUNmO2lCQUNGO2dCQUNELFVBQVUsRUFBRSxJQUFJO2dCQUNoQixtQkFBbUIsRUFBRSxPQUFPO2dCQUM1QixRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7b0JBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFFeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDNUQsQ0FBQztnQkFDRCxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7b0JBQ3JCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFFeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDNUQsQ0FBQztnQkFDRCxVQUFVLEVBQUUsR0FBRyxFQUFFO29CQUNmLDJCQUEyQjtvQkFDM0IsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FDdkMsYUFBYSxDQUNNLENBQUM7b0JBQ3RCLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRTt3QkFDN0MsSUFBSSxZQUFZLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTs0QkFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQzt5QkFDekI7NkJBQU07NEJBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQzt5QkFDM0I7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQzthQUNGLENBQUMsQ0FBQztTQUNKO2FBQU0sSUFBSSxRQUFRLElBQUksYUFBYSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxTQUFTLENBQUMsU0FBUyxFQUFFO2dCQUNyQyxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsT0FBTztnQkFDZCxNQUFNLEVBQUUsWUFBWTtnQkFDcEIsV0FBVyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQztnQkFDOUMsT0FBTyxFQUFFO29CQUNQO3dCQUNFLEtBQUssRUFBRSwwQ0FBMEM7d0JBQ2pELEtBQUssRUFBRSxFQUFFO3dCQUNULFVBQVUsRUFBRSxLQUFLO3FCQUNsQjtvQkFDRCxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtpQkFDbkM7Z0JBQ0QsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLG1CQUFtQixFQUFFLE9BQU87Z0JBQzVCLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtvQkFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUV4QixJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUM1RCxDQUFDO2dCQUNELE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtvQkFDckIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUV4QixJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUM1RCxDQUFDO2dCQUNELFVBQVUsRUFBRSxHQUFHLEVBQUU7b0JBQ2YsMkJBQTJCO29CQUMzQixJQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUN2QyxhQUFhLENBQ00sQ0FBQztvQkFDdEIsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO3dCQUM3QyxJQUFJLFlBQVksQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFOzRCQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO3lCQUN6Qjs2QkFBTTs0QkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO3lCQUMzQjtvQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7YUFBTSxJQUFJLFFBQVEsSUFBSSxTQUFTLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFNBQVMsQ0FBQyxTQUFTLEVBQUU7Z0JBQ3JDLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxTQUFTO2dCQUNoQixNQUFNLEVBQUUsWUFBWTtnQkFDcEIsV0FBVyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQztnQkFDakQsT0FBTyxFQUFFO29CQUNQO3dCQUNFLEtBQUssRUFBRSwwQ0FBMEM7d0JBQ2pELEtBQUssRUFBRSxFQUFFO3dCQUNULFVBQVUsRUFBRSxLQUFLO3FCQUNsQjtvQkFDRCxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtvQkFDeEMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7b0JBQ2hDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO29CQUNoQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtvQkFDeEMsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUU7aUJBQ2pEO2dCQUNELFVBQVUsRUFBRSxJQUFJO2dCQUNoQixtQkFBbUIsRUFBRSxPQUFPO2dCQUM1QixRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7b0JBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFFeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDNUQsQ0FBQztnQkFDRCxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7b0JBQ3JCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFFeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDNUQsQ0FBQztnQkFDRCxVQUFVLEVBQUUsR0FBRyxFQUFFO29CQUNmLDJCQUEyQjtvQkFDM0IsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FDdkMsYUFBYSxDQUNNLENBQUM7b0JBQ3RCLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRTt3QkFDN0MsSUFBSSxZQUFZLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTs0QkFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQzt5QkFDekI7NkJBQU07NEJBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQzt5QkFDM0I7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQzthQUNGLENBQUMsQ0FBQztTQUNKO2FBQU0sSUFBSSxRQUFRLElBQUksU0FBUyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxTQUFTLENBQUMsU0FBUyxFQUFFO2dCQUNyQyxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsU0FBUztnQkFDaEIsTUFBTSxFQUFFLFlBQVk7Z0JBQ3BCLFdBQVcsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUM7Z0JBQzlDLE9BQU8sRUFBRTtvQkFDUDt3QkFDRSxLQUFLLEVBQUUsMENBQTBDO3dCQUNqRCxLQUFLLEVBQUUsRUFBRTt3QkFDVCxVQUFVLEVBQUUsS0FBSztxQkFDbEI7b0JBQ0QsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7b0JBQ2xDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO29CQUNsQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtvQkFDaEMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7aUJBQy9CO2dCQUNELFVBQVUsRUFBRSxJQUFJO2dCQUNoQixtQkFBbUIsRUFBRSxPQUFPO2dCQUM1QixRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7b0JBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFFeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDNUQsQ0FBQztnQkFDRCxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7b0JBQ3JCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFFeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDNUQsQ0FBQztnQkFDRCxVQUFVLEVBQUUsR0FBRyxFQUFFO29CQUNmLDJCQUEyQjtvQkFDM0IsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FDdkMsYUFBYSxDQUNNLENBQUM7b0JBQ3RCLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRTt3QkFDN0MsSUFBSSxZQUFZLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTs0QkFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQzt5QkFDekI7NkJBQU07NEJBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQzt5QkFDM0I7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQzthQUNGLENBQUMsQ0FBQztTQUNKO2FBQU0sSUFBSSxRQUFRLElBQUksaUJBQWlCLEVBQUU7WUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQztZQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksU0FBUyxDQUFDLFNBQVMsRUFBRTtnQkFDckMsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLE1BQU0sRUFBRSxZQUFZO2dCQUNwQixXQUFXLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDO2dCQUM5QyxPQUFPLEVBQUU7b0JBQ1A7d0JBQ0UsS0FBSyxFQUFFLDBDQUEwQzt3QkFDakQsS0FBSyxFQUFFLEVBQUU7d0JBQ1QsVUFBVSxFQUFFLEtBQUs7cUJBQ2xCO29CQUNELEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO29CQUNsQyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRTtpQkFDL0M7Z0JBQ0QsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLG1CQUFtQixFQUFFLE9BQU87Z0JBQzVCLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtvQkFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUV4QixJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUM1RCxDQUFDO2dCQUNELE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtvQkFDckIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUV4QixJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUM1RCxDQUFDO2dCQUNELFVBQVUsRUFBRSxHQUFHLEVBQUU7b0JBQ2YsMkJBQTJCO29CQUMzQixJQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUN2QyxhQUFhLENBQ00sQ0FBQztvQkFDdEIsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO3dCQUM3QyxJQUFJLFlBQVksQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFOzRCQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO3lCQUN6Qjs2QkFBTTs0QkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO3lCQUMzQjtvQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7YUFBTSxJQUFJLFFBQVEsSUFBSSxTQUFTLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFNBQVMsQ0FBQyxTQUFTLEVBQUU7Z0JBQ3JDLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxTQUFTO2dCQUNoQixNQUFNLEVBQUUsWUFBWTtnQkFDcEIsV0FBVyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQztnQkFDcEQsT0FBTyxFQUFFO29CQUNQO3dCQUNFLEtBQUssRUFBRSwwQ0FBMEM7d0JBQ2pELEtBQUssRUFBRSxFQUFFO3dCQUNULFVBQVUsRUFBRSxLQUFLO3FCQUNsQjtvQkFDRCxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtvQkFDaEMsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUU7aUJBQy9DO2dCQUNELFVBQVUsRUFBRSxJQUFJO2dCQUNoQixtQkFBbUIsRUFBRSxPQUFPO2dCQUM1QixRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7b0JBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFFeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDMUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFDN0MsQ0FBQztnQkFDRCxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7b0JBQ3JCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFFeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDMUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFDN0MsQ0FBQztnQkFDRCxVQUFVLEVBQUUsR0FBRyxFQUFFO29CQUNmLDJCQUEyQjtvQkFDM0IsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FDdkMsYUFBYSxDQUNNLENBQUM7b0JBQ3RCLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRTt3QkFDN0MsSUFBSSxZQUFZLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTs0QkFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQzt5QkFDekI7NkJBQU07NEJBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQzt5QkFDM0I7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQzthQUNGLENBQUMsQ0FBQztTQUNKO2FBQU0sSUFBSSxRQUFRLEtBQUssV0FBVyxFQUFFO1lBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxTQUFTLENBQUMsU0FBUyxFQUFFO2dCQUNyQyxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsT0FBTztnQkFDZCxNQUFNLEVBQUUsWUFBWTtnQkFDcEIsV0FBVyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQztnQkFDOUMsT0FBTyxFQUFFO29CQUNQO3dCQUNFLEtBQUssRUFBRSwwQ0FBMEM7d0JBQ2pELEtBQUssRUFBRSxFQUFFO3dCQUNULFVBQVUsRUFBRSxLQUFLO3FCQUNsQjtvQkFDRCxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtpQkFDcEM7Z0JBQ0QsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLG1CQUFtQixFQUFFLE9BQU87Z0JBQzVCLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtvQkFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUV4QixJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUM1RCxDQUFDO2dCQUNELE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtvQkFDckIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUV4QixJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUM1RCxDQUFDO2dCQUNELFVBQVUsRUFBRSxHQUFHLEVBQUU7b0JBQ2YsMkJBQTJCO29CQUMzQixJQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUN2QyxhQUFhLENBQ00sQ0FBQztvQkFDdEIsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO3dCQUM3QyxJQUFJLFlBQVksQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFOzRCQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO3lCQUN6Qjs2QkFBTTs0QkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO3lCQUMzQjtvQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7YUFBTSxJQUFJLFFBQVEsS0FBSyxZQUFZLEVBQUU7WUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7WUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFNBQVMsQ0FBQyxTQUFTLEVBQUU7Z0JBQ3JDLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxVQUFVO2dCQUNqQixNQUFNLEVBQUUsWUFBWTtnQkFDcEIsV0FBVyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQztnQkFDakQsT0FBTyxFQUFFO29CQUNQO3dCQUNFLEtBQUssRUFBRSwwQ0FBMEM7d0JBQ2pELEtBQUssRUFBRSxFQUFFO3dCQUNULFVBQVUsRUFBRSxLQUFLO3FCQUNsQjtvQkFDRCxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtpQkFDMUM7Z0JBQ0QsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLG1CQUFtQixFQUFFLE9BQU87Z0JBQzVCLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtvQkFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUV4QixJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUM1RCxDQUFDO2dCQUNELE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtvQkFDckIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUV4QixJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUM1RCxDQUFDO2dCQUNELFVBQVUsRUFBRSxHQUFHLEVBQUU7b0JBQ2YsMkJBQTJCO29CQUMzQixJQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUN2QyxhQUFhLENBQ00sQ0FBQztvQkFDdEIsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO3dCQUM3QyxJQUFJLFlBQVksQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFOzRCQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO3lCQUN6Qjs2QkFBTTs0QkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO3lCQUMzQjtvQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7YUFBTSxJQUFJLFFBQVEsS0FBSyxXQUFXLEVBQUU7WUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7WUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFNBQVMsQ0FBQyxTQUFTLEVBQUU7Z0JBQ3JDLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxTQUFTO2dCQUNoQixNQUFNLEVBQUUsWUFBWTtnQkFDcEIsV0FBVyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQztnQkFDaEQsT0FBTyxFQUFFO29CQUNQO3dCQUNFLEtBQUssRUFBRSwwQ0FBMEM7d0JBQ2pELEtBQUssRUFBRSxFQUFFO3dCQUNULFVBQVUsRUFBRSxLQUFLO3FCQUNsQjtvQkFDRCxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtpQkFDdkM7Z0JBQ0QsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLG1CQUFtQixFQUFFLE9BQU87Z0JBQzVCLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtvQkFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUV4QixJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUM1RCxDQUFDO2dCQUNELE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtvQkFDckIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUV4QixJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUM1RCxDQUFDO2dCQUNELFVBQVUsRUFBRSxHQUFHLEVBQUU7b0JBQ2YsMkJBQTJCO29CQUMzQixJQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUN2QyxhQUFhLENBQ00sQ0FBQztvQkFDdEIsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO3dCQUM3QyxJQUFJLFlBQVksQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFOzRCQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO3lCQUN6Qjs2QkFBTTs0QkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO3lCQUMzQjtvQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0RBQW9ELENBQUMsQ0FBQztTQUNyRTtJQUNILENBQUM7SUFFTyxlQUFlLENBQUMsT0FBYztRQUNwQyxTQUFTLGdCQUFnQixDQUFDLE9BQWtCLEVBQUUsR0FBVyxFQUFFLEdBQVU7WUFDbkUsSUFBSTtnQkFDRixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3RDO1lBQUMsTUFBTSxHQUFFO1FBQ1osQ0FBQztRQUVELE9BQU8sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNyQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDdkIsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNqQyxPQUFPLENBQUMsR0FBRyxDQUNULGtDQUFrQyxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUM1RCxDQUFDO2dCQUNGLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUNyQztxQkFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQ2pDLElBQUk7d0JBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzt3QkFDeEMsU0FBUztxQkFDVjtvQkFBQyxPQUFPLENBQUMsRUFBRTt3QkFDVixrQkFBa0I7cUJBQ25CO29CQUVELEtBQUssSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTt3QkFDdkMsSUFBSTs0QkFDRixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO3lCQUNyRDt3QkFBQyxNQUFNOzRCQUNOLHVDQUF1Qzt5QkFDeEM7cUJBQ0Y7aUJBQ0Y7cUJBQU0sSUFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSTtvQkFDakIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDekIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUN6QjtvQkFDQSxJQUFJO3dCQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7cUJBQ3pDO29CQUFDLE1BQU07d0JBQ04sdUNBQXVDO3FCQUN4QztpQkFDRjthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFeEMsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVPLE1BQU0sQ0FBQyxHQUFRO1FBQ3JCLE9BQU8sR0FBRyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxHQUFHLENBQUMsV0FBVyxLQUFLLE1BQU0sQ0FBQztJQUN0RSxDQUFDO0lBRU8sUUFBUSxDQUFDLEdBQVE7UUFDdkIsT0FBTyxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksR0FBRyxDQUFDLFdBQVcsS0FBSyxNQUFNLENBQUM7SUFDL0QsQ0FBQztJQUVPLFFBQVEsQ0FBQyxHQUFRO1FBQ3ZCLE9BQU8sT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0sS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQXlCO1FBQ3JELFNBQVMsY0FBYyxDQUFDLElBQVk7WUFDbEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLEVBQUU7Z0JBQzlCLE9BQU8sSUFBSSxHQUFHLElBQUksQ0FBQzthQUNwQjtZQUVELElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFWCxHQUFHO2dCQUNELElBQUksSUFBSSxTQUFTLENBQUM7Z0JBQ2xCLEVBQUUsQ0FBQyxDQUFDO2FBQ0wsUUFBUSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDOUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUVELEtBQUssVUFBVSxZQUFZLENBQUMsT0FBWTtZQUN0QyxNQUFNLHlCQUFXLEVBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBTyxFQUFFLEVBQUU7Z0JBQzFDLEtBQUssQ0FBQyxJQUFJLENBQUM7b0JBQ1QsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJO29CQUNiLFdBQVcsRUFBRSxFQUFFLENBQUMsV0FBVztvQkFDM0IsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRO29CQUNyQixJQUFJLEVBQUUsY0FBYyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0JBQzdCLFdBQVcsRUFBRSxFQUFFLENBQUMsV0FBVztpQkFDNUIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBRXpFLElBQUksT0FBTyxDQUFDLFFBQVEsSUFBSSwyQ0FBMkMsRUFBRTtZQUNuRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUM5QyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUMvQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUMzQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztZQUN0RCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztZQUNsRCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEdBQUcseUJBQXlCLENBQUM7U0FDeEU7YUFBTSxJQUFJLE9BQU8sQ0FBQyxRQUFRLElBQUkscUNBQXFDLEVBQUU7WUFDcEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDOUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDL0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDM0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7WUFDbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7WUFDdEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGlCQUFpQjtnQkFDeEMsOEJBQThCLENBQUM7U0FDbEM7YUFBTSxJQUNMLE9BQU8sQ0FBQyxRQUFRLElBQUksNkNBQTZDLEVBQ2pFO1lBQ0EsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDOUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDOUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDM0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDMUMsa0RBQWtEO1lBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO1lBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxpQkFBaUI7Z0JBQ3hDLGdDQUFnQyxDQUFDO1NBQ3BDO2FBQU0sSUFDTCxPQUFPLENBQUMsUUFBUSxJQUFJLDhDQUE4QyxFQUNsRTtZQUNBLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQzlDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQzlDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQzNDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO1lBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO1lBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyx5QkFBeUIsQ0FBQztTQUN4RTthQUFNO1lBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDOUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDOUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDL0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDM0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7WUFDbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGlCQUFpQixHQUFHLHlCQUF5QixDQUFDO1NBQ3hFO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUUzQyxJQUFJLE9BQU8sR0FBYSxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwRCxJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ3hCLElBQUksUUFBUSxHQUFHLE1BQU0scUJBQU8sRUFBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxJQUFJLFdBQWdCLENBQUM7UUFFckIsMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFJLENBQUMsWUFBWSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDdkM7UUFFRCxxQ0FBcUM7UUFDckMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNuQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNULElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtnQkFDakIsV0FBVyxFQUFFLFFBQVE7Z0JBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtnQkFDekIsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILG1DQUFtQztRQUNuQyxXQUFXLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0MsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRS9CLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU8sbUJBQW1CO1FBQ3pCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLEVBQVMsRUFBRSxFQUFFO1lBQzVELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBc0IsQ0FBQztZQUNoRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLE1BQU8sQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLG1CQUFtQixDQUFDLFdBQWtCO1FBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDckMsSUFBSSxFQUFFLFdBQVc7WUFDakIsS0FBSyxFQUFFLE1BQU07WUFDYixnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLE1BQU0sRUFBRSxZQUFZO1lBQ3BCLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsV0FBVyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQztZQUM3QyxPQUFPLEVBQUU7Z0JBQ1A7b0JBQ0UsS0FBSyxFQUFFLDBDQUEwQztvQkFDakQsS0FBSyxFQUFFLEVBQUU7b0JBQ1QsVUFBVSxFQUFFLEtBQUs7aUJBQ2xCO2dCQUNELEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUU7Z0JBQzlDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFO2dCQUN2QyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtnQkFDcEMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7YUFDakM7WUFDRCxVQUFVLEVBQUUsSUFBSTtZQUNoQixtQkFBbUIsRUFBRSxPQUFPO1lBQzVCLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRTtnQkFDdkIsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNwQixFQUFFLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3JCLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsS0FBSyxRQUFRLEVBQUU7b0JBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDbkQsd0VBQXdFO29CQUN4RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQUcsRUFBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2lCQUNyRTtZQUNILENBQUM7WUFDRCxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQ3JCLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDcEIsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUNyQixJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEtBQUssUUFBUSxFQUFFO29CQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDcEMsd0VBQXdFO29CQUN4RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQUcsRUFBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2lCQUNyRTtZQUNILENBQUM7WUFDRCxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRTtnQkFDMUIsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUNyQixJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEtBQUssUUFBUSxFQUFFO29CQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ2pEO3FCQUFNLElBQ0wsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO29CQUMxQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFDMUM7b0JBQ0EsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFFeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUVuQywrREFBK0Q7b0JBQy9ELElBQUksT0FBTyxHQUFHLGlCQUFHLEVBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzNELElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQzFDO3FCQUFNLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ3RELElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBRXhCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFFbkMsOERBQThEO29CQUM5RCxJQUFJLE1BQU0sR0FBRyxpQkFBRyxFQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUMxRCxJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO29CQUNqQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7aUJBQ3hDO3FCQUFNLElBQ0wsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsS0FBSywwQkFBMEI7b0JBQ3hELEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUNuQztvQkFDQSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUV4QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBRXpDLCtEQUErRDtvQkFDL0QsSUFBSSxPQUFPLEdBQUcsaUJBQUcsRUFBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDM0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQy9CO1lBQ0gsQ0FBQztZQUNELG1CQUFtQixFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7aUJBQzVCO1lBQ0gsQ0FBQztZQUVELFVBQVUsRUFBRSxHQUFHLEVBQUU7Z0JBQ2YsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FDdkMsYUFBYSxDQUNNLENBQUM7Z0JBQ3RCLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRTtvQkFDN0MsSUFBSSxZQUFZLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTt3QkFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztxQkFDekI7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztxQkFDM0I7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLGlCQUFpQixDQUFDLE9BQWMsRUFBRSxPQUFlLEVBQUUsS0FBYTtRQUNyRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsR0FBRyxPQUFPLElBQUksS0FBSyxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVPLG9CQUFvQixDQUFDLE9BQWM7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUNyQyxJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxpQkFBaUI7WUFDeEIsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixNQUFNLEVBQUUsWUFBWTtZQUNwQixnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLFdBQVcsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQztZQUN4RCxPQUFPLEVBQUU7Z0JBQ1A7b0JBQ0UsS0FBSyxFQUFFLDBDQUEwQztvQkFDakQsS0FBSyxFQUFFLEVBQUU7b0JBQ1QsVUFBVSxFQUFFLEtBQUs7aUJBQ2xCO2dCQUNELEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUU7YUFDakQ7WUFDRCxVQUFVLEVBQUUsSUFBSTtZQUNoQixtQkFBbUIsRUFBRSxPQUFPO1lBQzVCLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFO2dCQUMxQixFQUFFLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDbEQsQ0FBQztZQUNELE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRTtnQkFDbEIsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ2xELENBQUM7WUFDRCxVQUFVLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2pELENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsdUJBQXVCO0lBQ2YsYUFBYTtRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sSUFBSSxDQUFXLEVBQUUsQ0FBQyxFQUFTLEVBQUUsRUFBRTtZQUNsRSxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDcEIsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ25FLG1FQUFtRTtZQUNuRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQUcsRUFBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGtCQUFrQjtRQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQVMsRUFBRSxFQUFFO1lBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsbUJBQW1CO2dCQUMxQyxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsa0JBQWtCLENBQUM7UUFDckUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sbUJBQW1CO1FBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQ2pDLE9BQU8sSUFBSSxDQUFXLEVBQ3RCLEtBQUssRUFBRSxFQUFTLEVBQUUsRUFBRTtZQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7WUFFeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUVuQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ25ELHVFQUF1RTtnQkFDdkUsSUFBSSxNQUFNLEdBQUcsaUJBQUcsRUFBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ25FLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMxQyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQzthQUM5QztRQUNILENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVPLGFBQWEsQ0FBQyxJQUFXO1FBQy9CLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDeEMsT0FBTyxLQUFLLENBQUM7U0FDZDthQUFNO1lBQ0wsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDMUMsT0FBTyxLQUFLLENBQUM7aUJBQ2Q7YUFDRjtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRU8saUJBQWlCO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQy9CLE9BQU8sSUFBSSxDQUFXLEVBQ3RCLEtBQUssRUFBRSxFQUFTLEVBQUUsRUFBRTtZQUNsQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3hDLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQ2pDLG1CQUFtQixDQUNDLENBQUM7WUFFdkIsSUFDRSxNQUFNLENBQUMsS0FBSyxJQUFJLGFBQWE7Z0JBQzdCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQ2hEO2dCQUNBLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNuQyw0QkFBYyxFQUNaLGlCQUFHLEVBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQ2hELENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFXLEVBQUUsRUFBRTt3QkFDM0IsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQzNDLG9CQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2hELENBQUMsQ0FBQyxDQUFDO2lCQUNKO2FBQ0Y7aUJBQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLFdBQVcsRUFBRTtnQkFDdEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ25DLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDNUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDbkQsSUFBSSxFQUFFLGlDQUFpQztxQkFDeEMsQ0FBQyxDQUFDO29CQUNILG9CQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDO2lCQUM3QzthQUNGO2lCQUFNLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxhQUFhLEVBQUU7Z0JBQ3hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNuQyxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQzVCLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ25ELElBQUksRUFBRSxpQ0FBaUM7cUJBQ3hDLENBQUMsQ0FBQztvQkFDSCxvQkFBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQztpQkFDOUM7YUFDRjtpQkFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksWUFBWSxFQUFFO2dCQUN2QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDbkMsSUFBSSxPQUFPLEdBQ1QsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQjt3QkFDakMsR0FBRzt3QkFDSCxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDO29CQUMzQixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQzVCLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ25ELElBQUksRUFBRSxpQ0FBaUM7cUJBQ3hDLENBQUMsQ0FBQztvQkFDSCxvQkFBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDO2lCQUMzQzthQUNGO2lCQUFNLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxTQUFTLEVBQUU7Z0JBQ3BDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNuQyxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQzVCLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ25ELElBQUksRUFBRSxpQ0FBaUM7cUJBQ3hDLENBQUMsQ0FBQztvQkFDSCxvQkFBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQztpQkFDaEQ7YUFDRjtpQkFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksZ0JBQWdCLEVBQUU7Z0JBQzNDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNuQyxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQzVCLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ25ELElBQUksRUFBRSxpQ0FBaUM7cUJBQ3hDLENBQUMsQ0FBQztvQkFDSCxvQkFBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQztpQkFDaEQ7YUFDRjtpQkFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksU0FBUyxFQUFFO2dCQUNwQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDbkMsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUM1QixJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUNuRCxJQUFJLEVBQUUsaUNBQWlDO3FCQUN4QyxDQUFDLENBQUM7b0JBQ0gsb0JBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUM7aUJBQ2hEO2FBQ0Y7aUJBQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLFNBQVMsRUFBRTtnQkFDcEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ25DLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDNUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDbkQsSUFBSSxFQUFFLGlDQUFpQztxQkFDeEMsQ0FBQyxDQUFDO29CQUNILG9CQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDO2lCQUNoRDthQUNGO1FBQ0gsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFoa0NELDRCQWdrQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0bENELHVHQUFzQztBQUN0Qyx5SEFNNEI7QUFDNUIsbUhBTzBCO0FBQzFCLDZJQUFvQztBQUNwQywrSEFBOEI7QUFDOUIscUhBQWdEO0FBRWhELHdIQUErQjtBQUMvQiw0SkFBMEU7QUFDMUUsaUpBQW1FO0FBQ25FLHVHQUE4QjtBQUM5Qix3RUFBdUM7QUFHdkMsTUFBTSxFQUFFLEdBQUcsNEJBQVksRUFBQyxnQkFBTSxHQUFFLENBQUMsQ0FBQztBQUNsQyxNQUFNLE9BQU8sR0FBRyx3QkFBVSxFQUFDLGdCQUFNLEdBQUUsQ0FBQyxDQUFDO0FBRXJDLE1BQWEsUUFBUTtJQXdCbkI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FDNUMsYUFBYSxDQUNJLENBQUM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBbUIsQ0FBQztRQUN6RSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksb0JBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBc0IsQ0FBQztRQUM1RSxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFzQixDQUFDO1FBQzVFLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQW1CLENBQUM7UUFDekUsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUMxQyxvQkFBb0IsQ0FDSCxDQUFDO1FBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FDekMsYUFBYSxDQUNPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUN6QyxrQkFBa0IsQ0FDRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FDekMsa0JBQWtCLENBQ0MsQ0FBQztRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQ3pDLGtCQUFrQixDQUNFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUN0QyxlQUFlLENBQ0ssQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQ3hDLGlCQUFpQixDQUNHLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUV4Qix3QkFBd0I7UUFDeEIsMkVBQTJFO1FBQzNFLDBCQUEwQjtRQUMxQiwwRUFBMEU7UUFDMUUsdUNBQXVDO1FBRXZDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQXNCLENBQUM7UUFDM0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBc0IsQ0FBQztRQUM1RSxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQ3RDLHVCQUF1QixDQUNILENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxvQkFBVyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFTSxhQUFhO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRU0sYUFBYTtRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTSx1QkFBdUIsQ0FBQyxJQUFZLEVBQUUsR0FBVztRQUN0RCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQzFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdkMsZ0RBQWdEO1FBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztRQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyx5QkFBeUIsQ0FBQztRQUNuRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRW5DLElBQUk7WUFDRixJQUFJLE9BQU8sR0FBRztnQkFDWixLQUFLLEVBQUUsQ0FBQyxNQUFnQixFQUFFLE1BQWdCLENBQUM7Z0JBQzNDLGNBQWMsRUFBRSxJQUFJO2FBQ3JCLENBQUM7WUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxvQkFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDekM7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBRU0sdUJBQXVCLENBQUMsSUFBUztRQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RDLElBQUk7WUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3RCLElBQUksT0FBTyxHQUFHO2dCQUNaLEtBQUssRUFBRSxDQUFDLE1BQWdCLEVBQUUsTUFBZ0IsQ0FBQzthQUM1QyxDQUFDO1lBQ0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLG9CQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDaEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEQsZ0RBQWdEO1NBQ2pEO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzNDO0lBQ0gsQ0FBQztJQUVPLHVCQUF1QixDQUFDLEdBQVcsRUFBRSxJQUFTO1FBQ3BELElBQUksR0FBRyxLQUFLLFdBQVcsRUFBRTtZQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzlDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzdEO2FBQU0sSUFBSSxHQUFHLEtBQUssWUFBWSxFQUFFO1lBQy9CLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxNQUFNLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzdEO2lCQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzdEO1NBQ0Y7YUFBTSxJQUFJLEdBQUcsS0FBSyxhQUFhLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMvQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM3RDtRQUVELHdDQUF3QztRQUN4QyxvREFBb0Q7UUFDcEQsaUVBQWlFO1FBQ2pFLElBQUk7YUFDQyxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM3RDthQUFNLElBQUksR0FBRyxLQUFLLGlCQUFpQixFQUFFO1lBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDN0Q7YUFBTSxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM3RDthQUFNLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pELElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzdEO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTSxLQUFLLENBQUMsc0JBQXNCLENBQUMsT0FBZ0I7UUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztRQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFOUIsTUFBTSxjQUFjLEdBQUcsbUNBQW1DLENBQUM7UUFDM0QsTUFBTSxhQUFhLEdBQUcsNEJBQTRCLENBQUM7UUFFbkQsU0FBUyxXQUFXLENBQUMsZUFJcEI7WUFDQyxPQUFPLENBQUMsR0FBRyxDQUNULG9CQUFvQixlQUFlLENBQUMsSUFBSSxXQUFXLGVBQWUsQ0FBQyxLQUFLLFdBQVcsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUMzRyxDQUFDO1lBRUYsTUFBTSxPQUFPLEdBQUcsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDdkMsTUFBTSxhQUFhLEdBQUc7Z0JBQ3BCLFdBQVc7Z0JBQ1gsbUJBQW1CO2dCQUNuQix1QkFBdUI7Z0JBQ3ZCLHFCQUFxQjtnQkFDckIsb0JBQW9CO2FBQ3JCLENBQUM7WUFDRixNQUFNLFdBQVcsR0FBRztnQkFDbEIsZUFBZTtnQkFDZixjQUFjO2dCQUNkLE9BQU87Z0JBQ1AsVUFBVTtnQkFDVixlQUFlO2dCQUNmLGtCQUFrQjtnQkFDbEIsaUJBQWlCO2dCQUNqQixvQkFBb0I7YUFDckIsQ0FBQztZQUNGLE1BQU0sUUFBUSxHQUFHO2dCQUNmLGFBQWE7Z0JBQ2IsbUJBQW1CO2dCQUNuQixtQkFBbUI7Z0JBQ25CLG1CQUFtQjtnQkFDbkIsbUJBQW1CO2dCQUNuQixpQkFBaUI7Z0JBQ2pCLGlCQUFpQjtnQkFDakIsaUJBQWlCO2dCQUNqQixlQUFlO2FBQ2hCLENBQUM7WUFDRixNQUFNLFlBQVksR0FBRztnQkFDbkIsWUFBWTtnQkFDWixvQkFBb0I7Z0JBQ3BCLG9CQUFvQjtnQkFDcEIsa0JBQWtCO2dCQUNsQixpQkFBaUI7YUFDbEIsQ0FBQztZQUNGLE1BQU0sa0JBQWtCLEdBQUc7Z0JBQ3pCLDBCQUEwQjtnQkFDMUIsdUJBQXVCO2FBQ3hCLENBQUM7WUFDRixNQUFNLFVBQVUsR0FBRztnQkFDakIsaUJBQWlCO2dCQUNqQixjQUFjO2dCQUNkLFdBQVc7Z0JBQ1gsV0FBVzthQUNaLENBQUM7WUFDRixNQUFNLFFBQVEsR0FBRztnQkFDZixlQUFlO2dCQUNmLFlBQVk7Z0JBQ1osU0FBUztnQkFDVCxxQkFBcUI7YUFDdEIsQ0FBQztZQUNGLE1BQU0sVUFBVSxHQUFHO2dCQUNqQixrQkFBa0I7Z0JBQ2xCLHVCQUF1QjtnQkFDdkIsZUFBZTthQUNoQixDQUFDO1lBQ0YsTUFBTSxVQUFVLEdBQUc7Z0JBQ2pCLGFBQWE7Z0JBQ2IscUJBQXFCO2dCQUNyQixZQUFZO2dCQUNaLDBCQUEwQjtnQkFDMUIsZUFBZTtnQkFDZixvQkFBb0I7YUFDckIsQ0FBQztZQUVGLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzNDLE9BQU8sZ0JBQWdCLENBQUM7YUFDekI7aUJBQU0sSUFBSSxhQUFhLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDeEQsT0FBTyxzQkFBc0IsQ0FBQzthQUMvQjtpQkFBTSxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN0RCxPQUFPLG9CQUFvQixDQUFDO2FBQzdCO2lCQUFNLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ25ELE9BQU8saUJBQWlCLENBQUM7YUFDMUI7aUJBQU0sSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDdkQsT0FBTyxxQkFBcUIsQ0FBQzthQUM5QjtpQkFBTSxJQUFJLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzdELE9BQU8sNEJBQTRCLENBQUM7YUFDckM7aUJBQU0sSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDckQsT0FBTyxtQkFBbUIsQ0FBQzthQUM1QjtpQkFBTSxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNuRCxPQUFPLGlCQUFpQixDQUFDO2FBQzFCO2lCQUFNLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3JELE9BQU8sbUJBQW1CLENBQUM7YUFDNUI7aUJBQU0sSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDckQsT0FBTyxtQkFBbUIsQ0FBQzthQUM1QjtpQkFBTTtnQkFDTCxPQUFPLHFCQUFxQixDQUFDO2FBQzlCO1FBQ0gsQ0FBQztRQUVELElBQUksb0JBQW9CLEdBQUc7WUFDekIsS0FBSyxFQUFFLENBQUMsTUFBZ0IsRUFBRSxNQUFnQixDQUFDO1lBQzNDLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxJQUFJLEVBQUUsUUFBUTtvQkFDZCxLQUFLLEVBQUUsc0JBQXNCO29CQUM3QixLQUFLLEVBQUUsZ0JBQWdCO29CQUN2QixLQUFLLEVBQUU7d0JBQ0wsSUFBSSxFQUFFLG1CQUFtQjt3QkFDekIsV0FBVyxFQUFFLEVBQUU7d0JBQ2YsSUFBSSxFQUFFLEdBQUc7d0JBQ1QsR0FBRyxFQUFFLElBQUk7d0JBQ1QsUUFBUSxFQUFFOzRCQUNSLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDTixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQ04sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3lCQUNQO3dCQUNELFlBQVksRUFBRTs0QkFDWixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQ04sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOzRCQUNOLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt5QkFDUDt3QkFDRCxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQ2I7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLE9BQU87b0JBQ2IsS0FBSyxFQUFFLHFCQUFxQjtvQkFDNUIsS0FBSyxFQUFFLGVBQWU7b0JBQ3RCLEtBQUssRUFBRTt3QkFDTCxJQUFJLEVBQUUsa0JBQWtCO3dCQUN4QixLQUFLLEVBQUUsVUFBVTt3QkFDakIsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNkLFFBQVEsRUFBRTs0QkFDUixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQ04sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOzRCQUNOLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt5QkFDUDt3QkFDRCxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQ2I7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsS0FBSyxFQUFFLHVCQUF1QjtvQkFDOUIsS0FBSyxFQUFFLGdCQUFnQjtvQkFDdkIsS0FBSyxFQUFFO3dCQUNMLFFBQVEsRUFBRSxFQUFFO3dCQUNaLFNBQVMsRUFBRSxFQUFFO3dCQUNiLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQzt3QkFDakIsY0FBYyxFQUFFOzRCQUNkLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDTixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQ04sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3lCQUNQO3dCQUNELGVBQWUsRUFBRTs0QkFDZixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQ04sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOzRCQUNOLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt5QkFDUDt3QkFDRCxRQUFRLEVBQUU7NEJBQ1IsSUFBSSxFQUFFLHNCQUFzQjs0QkFDNUIsS0FBSyxFQUFFLFNBQVM7NEJBQ2hCLFNBQVMsRUFBRSxJQUFJOzRCQUNmLFNBQVMsRUFBRSxJQUFJOzRCQUNmLFlBQVksRUFBRSxHQUFHOzRCQUNqQixPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQ1osV0FBVyxFQUFFLEtBQUs7eUJBQ25CO3dCQUNELE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDWixXQUFXLEVBQUUsRUFBRTtxQkFDaEI7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFlBQVk7b0JBQ2xCLEtBQUssRUFBRSwwQkFBMEI7b0JBQ2pDLEtBQUssRUFBRSxnQkFBZ0I7b0JBQ3ZCLEtBQUssRUFBRTt3QkFDTCxRQUFRLEVBQUUsRUFBRTt3QkFDWixRQUFRLEVBQUUsRUFBRTtxQkFDYjtpQkFDRjthQUNGO1NBQ0YsQ0FBQztRQUVGLElBQUksT0FBTyxHQUFHO1lBQ1osS0FBSyxFQUFFLENBQUMsTUFBZ0IsRUFBRSxNQUFnQixDQUFDO1NBQzVDLENBQUM7UUFFRixJQUFJLGdCQUFnQixHQUFHO1lBQ3JCLEtBQUssRUFBRSxDQUFDLE1BQWdCLEVBQUUsTUFBZ0IsQ0FBQztZQUMzQyxXQUFXLEVBQUUsV0FBVztZQUN4QixNQUFNLEVBQUUsWUFBWSxDQUFDLGVBQWU7U0FDckMsQ0FBQztRQUVGLDJEQUEyRDtRQUMzRCxxREFBcUQ7UUFDckQsTUFBTTtRQUVOLGdCQUFnQjtRQUNoQixZQUFZO1FBRVosSUFBSSxJQUFJLEdBQUcsTUFBTSw0QkFBYyxFQUFDLE9BQU8sQ0FBQzthQUNyQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQVcsRUFBRSxFQUFFO1lBQzFCLElBQUksUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDL0IsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBUSxFQUFFLEVBQUU7WUFDbEIsT0FBTyxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztRQUVMLDREQUE0RDtRQUM1RCxvREFBb0Q7UUFDcEQsTUFBTTtRQUNOLHVDQUF1QztRQUN2QyxvQ0FBb0M7UUFFcEMsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUM3QyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUN6QyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO2dCQUMvQyx3REFBd0Q7Z0JBQ3hELE9BQU8sR0FBRyxvQkFBb0IsQ0FBQzthQUNoQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO2dCQUMvQyxnREFBZ0Q7YUFDakQ7U0FDRjthQUFNLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztZQUMvQyxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQzlELFVBQVUsQ0FDZCxDQUFDO1lBQ0YsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN2QixrQkFBa0I7Z0JBRWxCLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO29CQUNwQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuRSxJQUFJLEtBQUssR0FBUSxFQUFFLENBQUM7b0JBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7d0JBQ3JDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFBRTs0QkFDbEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzt5QkFDN0I7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUM3QztnQkFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzdDO2lCQUFNO2dCQUNMLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELElBQUksS0FBSyxHQUFRLEVBQUUsQ0FBQztnQkFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtvQkFDaEMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxFQUFFO3dCQUNsQixLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUN4QjtnQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDbkM7WUFDRCxPQUFPLEdBQUcsZ0JBQWdCLENBQUM7WUFFM0IsZ0RBQWdEO1NBQ2pEO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ3ZDLGdEQUFnRDtTQUNqRDtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLG9CQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDO1FBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQ2hELENBQUM7SUFFTyxnQkFBZ0I7O1FBQ3RCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUM1QyxnQkFBZ0IsQ0FDRyxDQUFDO1FBRXRCLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBUyxFQUFFLEVBQUU7WUFDdEQsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUM5QixJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQWEsQ0FBQztZQUNuRCxRQUFRLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQ2xELFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNqQixRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFFSCxVQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsMENBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUN4RSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBRUgsVUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLDBDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDdkUsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFhLENBQUM7WUFDL0MsNkRBQTZEO1lBQzdELElBQUksVUFBVSxHQUFHLGlCQUFHLEVBQUMsVUFBVSxDQUFDLE1BQU8sRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekQsSUFBSSxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRSxJQUFJLEVBQUUsR0FBRztnQkFDUCxXQUFXLEVBQUUsa0JBQWtCO2FBQ2hDLENBQUM7WUFFRix5QkFBVyxFQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDO2lCQUNqQyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxFQUFFO2dCQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUNoRCxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxZQUFZLEdBQUcsSUFBSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUM5QixJQUFJLENBQUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3hDLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkMsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxDQUFDLENBQVEsRUFBRSxFQUFFO2dCQUNsQixPQUFPLENBQUMsS0FBSyxDQUFDLDhCQUE4QixFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNqRCxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUMvRCxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztZQUVMLDBEQUEwRDtZQUMxRCxvREFBb0Q7WUFDcEQsa0NBQWtDO1lBQ2xDLHdEQUF3RDtZQUN4RCxtQ0FBbUM7WUFDbkMsOENBQThDO1lBQzlDLDBDQUEwQztZQUMxQyxrQkFBa0I7WUFDbEIsc0RBQXNEO1lBQ3RELGlFQUFpRTtZQUNqRSxrQ0FBa0M7WUFDbEMsTUFBTTtZQUVOLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sNkJBQTZCO1FBQ25DLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FDaEQsYUFBYSxDQUN5QixDQUFDO1FBQ3pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLElBQUksSUFBSSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBUyxFQUFFLEVBQUU7Z0JBQzNDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2hDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBdUMsQ0FBQztnQkFDM0QsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQUU7b0JBQ3JDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztpQkFDaEM7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2lCQUNqQztZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLFlBQVksR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXBFLElBQUksTUFBTSxHQUFHLElBQUksU0FBUyxDQUFDLG9CQUFvQixFQUFFO1lBQy9DLElBQUksRUFBRSxZQUFZO1lBQ2xCLE1BQU0sRUFBRSxZQUFZO1lBQ3BCLE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FBTyxFQUFFO2dCQUNQO29CQUNFLEtBQUssRUFBRSxVQUFVO29CQUNqQixLQUFLLEVBQUUsVUFBVTtvQkFDakIsTUFBTSxFQUFFLFFBQVE7b0JBQ2hCLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLEVBQUU7aUJBQzNEO2dCQUNELEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtnQkFDckU7b0JBQ0UsS0FBSyxFQUFFLGdCQUFnQjtvQkFDdkIsS0FBSyxFQUFFLEdBQUc7b0JBQ1YsTUFBTSxFQUFFLE9BQU87b0JBQ2YsUUFBUSxFQUFFLElBQUk7aUJBQ2Y7YUFDRjtTQUNGLENBQUMsQ0FBQztRQUVILElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFtQixDQUFDO1FBQ3JFLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFzQixDQUFDO1FBQzNFLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQXNCLENBQUM7UUFFeEUsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQVMsRUFBRSxFQUFFO1lBQ2pELEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNwQixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3RCxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFTLEVBQUUsRUFBRTtZQUM3QyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLFdBQVcsR0FBRztZQUNoQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7U0FDNUQsQ0FBQztRQUVGLElBQUksS0FBSyxHQUFHLElBQUksU0FBUyxDQUFDLHdCQUF3QixFQUFFO1lBQ2xELElBQUksRUFBRSxXQUFXO1lBQ2pCLE1BQU0sRUFBRSxZQUFZO1lBQ3BCLE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FBTyxFQUFFO2dCQUNQO29CQUNFLEtBQUssRUFBRSxRQUFRO29CQUNmLEtBQUssRUFBRSxRQUFRO29CQUNmLE1BQU0sRUFBRSxRQUFRO29CQUNoQixZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFO2lCQUMxQztnQkFDRDtvQkFDRSxLQUFLLEVBQUUsVUFBVTtvQkFDakIsS0FBSyxFQUFFLFVBQVU7b0JBQ2pCLE1BQU0sRUFBRSxRQUFRO29CQUNoQixZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxFQUFFO2lCQUMzRDtnQkFDRCxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7Z0JBQ3JFO29CQUNFLEtBQUssRUFBRSxnQkFBZ0I7b0JBQ3ZCLEtBQUssRUFBRSxHQUFHO29CQUNWLE1BQU0sRUFBRSxPQUFPO29CQUNmLFFBQVEsRUFBRSxJQUFJO2lCQUNmO2FBQ0Y7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFtQixDQUFDO1FBQzFFLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFzQixDQUFDO1FBQzNFLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQXNCLENBQUM7UUFFMUUsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQVMsRUFBRSxFQUFFO1lBQ2hELEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNwQixLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBUyxFQUFFLEVBQUU7WUFDOUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLFdBQVcsR0FBRztZQUNoQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7U0FDNUQsQ0FBQztRQUVGLElBQUksS0FBSyxHQUFHLElBQUksU0FBUyxDQUFDLHlCQUF5QixFQUFFO1lBQ25ELElBQUksRUFBRSxXQUFXO1lBQ2pCLE1BQU0sRUFBRSxZQUFZO1lBQ3BCLE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FBTyxFQUFFO2dCQUNQO29CQUNFLEtBQUssRUFBRSxRQUFRO29CQUNmLEtBQUssRUFBRSxRQUFRO29CQUNmLE1BQU0sRUFBRSxRQUFRO29CQUNoQixZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFO2lCQUMxQztnQkFDRDtvQkFDRSxLQUFLLEVBQUUsVUFBVTtvQkFDakIsS0FBSyxFQUFFLFVBQVU7b0JBQ2pCLE1BQU0sRUFBRSxRQUFRO29CQUNoQixZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxFQUFFO2lCQUMzRDtnQkFDRCxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7Z0JBQ3JFO29CQUNFLEtBQUssRUFBRSxnQkFBZ0I7b0JBQ3ZCLEtBQUssRUFBRSxHQUFHO29CQUNWLE1BQU0sRUFBRSxPQUFPO29CQUNmLFFBQVEsRUFBRSxJQUFJO2lCQUNmO2FBQ0Y7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFtQixDQUFDO1FBQzNFLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFzQixDQUFDO1FBQzNFLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQXNCLENBQUM7UUFFMUUsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQVMsRUFBRSxFQUFFO1lBQ2hELEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNwQixLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBUyxFQUFFLEVBQUU7WUFDOUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8scUJBQXFCO1FBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBUyxFQUFFLEVBQUU7WUFDekQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFhLENBQUM7WUFDNUMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUM7WUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGVBQWU7UUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFTLEVBQUUsRUFBRTtZQUN6RCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFO2dCQUM1QixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQWEsQ0FBQztnQkFDL0MsSUFBSSxVQUFVLEdBQUcsaUJBQUcsRUFBQyxVQUFVLENBQUMsTUFBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25FLHVFQUF1RTtnQkFDdkUsSUFBSSxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckUsSUFBSSxFQUFFLEdBQUc7b0JBQ1AsV0FBVyxFQUFFLGtCQUFrQjtpQkFDaEMsQ0FBQztnQkFFRix5QkFBVyxFQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDO3FCQUNqQyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxFQUFFO29CQUN2QixNQUFNLDBCQUFZLEVBQUMsVUFBVSxDQUFDLENBQUM7b0JBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQzdDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO29CQUMxQixJQUFJLFdBQVcsR0FBRyxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO29CQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7b0JBQzlCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFXLENBQUMsQ0FBQztvQkFDekMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDdEMsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxDQUFDLENBQVEsRUFBRSxFQUFFO29CQUNsQixPQUFPLENBQUMsS0FBSyxDQUFDLDJCQUEyQixFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUM5QyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQUM1RCxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztnQkFDbEMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsTUFBTTthQUNQO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQzthQUM5QztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGVBQWU7UUFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFVLEVBQUUsRUFBRTtZQUN0RCxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDckIsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQy9CLE1BQU0sYUFBYSxHQUFHLElBQUksV0FBVyxDQUFDLGlCQUFpQixFQUFFO2dCQUN2RCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUU7YUFDMUIsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7UUFDSCw2REFBNkQ7UUFDN0QsK0JBQStCO1FBQy9CLE1BQU07SUFDUixDQUFDO0lBRU8sZUFBZTtRQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sSUFBSSxDQUFXLEVBQUUsQ0FBQyxFQUFTLEVBQUUsRUFBRTtZQUNwRSxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDcEIsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3JCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1lBRTlCLElBQ0UsR0FBRyxLQUFLLFdBQVc7Z0JBQ25CLEdBQUcsS0FBSyxZQUFZO2dCQUNwQixHQUFHLEtBQUssU0FBUztnQkFDakIsR0FBRyxLQUFLLFNBQVM7Z0JBQ2pCLEdBQUcsS0FBSyxpQkFBaUI7Z0JBQ3pCLEdBQUcsS0FBSyxhQUFhLEVBQ3JCO2dCQUNBLGlDQUFpQztnQkFDakMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFZLENBQUM7Z0JBRXRDLHNCQUFNLEVBQUMsbUJBQUcsRUFBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO3FCQUM5RCxJQUFJLENBQUMsR0FBRyxFQUFFO29CQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ3ZDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUM1QixDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBUSxFQUFFLEVBQUU7b0JBQ2xCLE9BQU8sQ0FBQyxLQUFLLENBQUMsMEJBQTBCLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3BFLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDLENBQUMsQ0FBQztnQkFFTCxrQ0FBa0M7Z0JBQ2xDLDRDQUE0QztnQkFDNUMsaUJBQWlCO2dCQUNqQiw0Q0FBNEM7Z0JBQzVDLCtCQUErQjtnQkFDL0Isa0JBQWtCO2dCQUNsQix5RUFBeUU7Z0JBQ3pFLHFDQUFxQztnQkFDckMsTUFBTTthQUNQO2lCQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEtBQUssYUFBYSxFQUFFO2dCQUNoRCxxQkFBcUI7Z0JBQ3JCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBYSxDQUFDO2dCQUN2QyxJQUFJLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQztvQkFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7aUJBQzNDLENBQUMsQ0FBQztnQkFDSCxJQUFJLFFBQVEsR0FBRztvQkFDYixXQUFXLEVBQUUsa0JBQWtCO2lCQUNoQyxDQUFDO2dCQUVGLHlCQUFXLEVBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxRQUFRLENBQUM7cUJBQ25DLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO29CQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztvQkFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMzRCxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztvQkFDMUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7Z0JBQzFELENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFRLEVBQUUsRUFBRTtvQkFDbEIsT0FBTyxDQUFDLEtBQUssQ0FBQywwQkFBMEIsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDcEUsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7Z0JBQ2xDLENBQUMsQ0FBQyxDQUFDO2dCQUVMLG1EQUFtRDtnQkFDbkQsb0NBQW9DO2dCQUNwQyxnRUFBZ0U7Z0JBQ2hFLCtCQUErQjtnQkFDL0IsNkRBQTZEO2dCQUM3RCxrQkFBa0I7Z0JBQ2xCLHlFQUF5RTtnQkFDekUscUNBQXFDO2dCQUNyQyxNQUFNO2FBQ1A7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO2FBQ2pFO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sbUJBQW1CO1FBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxJQUFJLENBQVcsRUFBRSxDQUFDLEVBQVMsRUFBRSxFQUFFO1lBQ3hFLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNwQixFQUFFLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDN0IsSUFBSSxVQUFVLEdBQUcsaUJBQUcsRUFBQyxPQUFPLENBQUMsQ0FBQztZQUM5QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzdCLElBQUksUUFBUSxHQUNWLHNDQUFzQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO1lBQ3ZFLDRDQUE0QztZQUM1QyxJQUFJLE9BQU8sR0FBRyxpQkFBRyxFQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN4QyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pELElBQUksUUFBUSxHQUFHO2dCQUNiLFdBQVcsRUFBRSxrQkFBa0I7YUFDaEMsQ0FBQztZQUVGLHlCQUFXLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUM7aUJBQ2pDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVELEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBUSxFQUFFLEVBQUU7Z0JBQ2xCLE9BQU8sQ0FBQyxLQUFLLENBQ1gsMkJBQTJCLEVBQzNCLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLENBQUMsQ0FDRixDQUFDO2dCQUNGLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUFDO1lBRUwsaURBQWlEO1lBQ2pELGlFQUFpRTtZQUNqRSwyQkFBMkI7WUFDM0Isa0JBQWtCO1lBQ2xCLDhFQUE4RTtZQUM5RSxzQ0FBc0M7WUFDdEMsTUFBTTtRQUNSLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLG1CQUFtQjtRQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sSUFBSSxDQUFXLEVBQUUsQ0FBQyxFQUFTLEVBQUUsRUFBRTtZQUN4RSxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDcEIsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzdCLGtDQUFrQztZQUNsQyxJQUFJLFVBQVUsR0FBRyxpQkFBRyxFQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDN0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUN0QixJQUFJLFFBQVEsR0FDViw0Q0FBNEM7Z0JBQzVDLElBQUksQ0FBQyxLQUFLO2dCQUNWLFVBQVU7Z0JBQ1YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLE9BQU8sQ0FBQztZQUVWLDRDQUE0QztZQUM1QyxJQUFJLE9BQU8sR0FBRyxpQkFBRyxFQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUV4QyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pELElBQUksUUFBUSxHQUFHO2dCQUNiLFdBQVcsRUFBRSxrQkFBa0I7YUFDaEMsQ0FBQztZQUVGLHlCQUFXLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUM7aUJBQ2pDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZELEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBUSxFQUFFLEVBQUU7Z0JBQ2xCLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RFLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDO1lBRUwsaURBQWlEO1lBQ2pELDREQUE0RDtZQUM1RCwyQkFBMkI7WUFDM0Isa0JBQWtCO1lBQ2xCLDJFQUEyRTtZQUMzRSxtQ0FBbUM7WUFDbkMsTUFBTTtRQUNSLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLFlBQVk7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFTLEVBQUUsRUFBRTtZQUNsRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLFVBQVUsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUNwRCxJQUFJLENBQUMsb0JBQW9CLEVBQ3pCLFdBQVcsQ0FDWixDQUFDO2dCQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3RCLElBQUksT0FBTyxHQUFHO29CQUNaLEtBQUssRUFBRSxDQUFDLE1BQWdCLEVBQUUsTUFBZ0IsQ0FBQztpQkFDNUMsQ0FBQztnQkFDRixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksb0JBQVUsQ0FDMUIsSUFBSSxDQUFDLGFBQWEsRUFDbEIsT0FBTyxFQUNQLElBQUksQ0FBQyxtQkFBbUIsQ0FDekIsQ0FBQztnQkFDRixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztnQkFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCO29CQUNwQyx3Q0FBd0MsQ0FBQzthQUM1QztpQkFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLFFBQVEsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztnQkFDOUIsSUFBSSxPQUFPLEdBQUc7b0JBQ1osS0FBSyxFQUFFLENBQUMsTUFBZ0IsRUFBRSxNQUFnQixDQUFDO2lCQUM1QyxDQUFDO2dCQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxvQkFBVSxDQUMxQixJQUFJLENBQUMsYUFBYSxFQUNsQixPQUFPLEVBQ1AsSUFBSSxDQUFDLG9CQUFvQixDQUMxQixDQUFDO2dCQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGlCQUFpQjtvQkFDcEMsZ0NBQWdDLENBQUM7YUFDcEM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBUyxFQUFFLEVBQUU7WUFDckQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssSUFBSSxRQUFRLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUM5QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FDcEQsSUFBSSxDQUFDLG9CQUFvQixFQUN6QixRQUFRLENBQ1QsQ0FBQztnQkFDRixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN0QixJQUFJLE9BQU8sR0FBRztvQkFDWixLQUFLLEVBQUUsQ0FBQyxNQUFnQixFQUFFLE1BQWdCLENBQUM7aUJBQzVDLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLG9CQUFVLENBQzFCLElBQUksQ0FBQyxhQUFhLEVBQ2xCLE9BQU8sRUFDUCxJQUFJLENBQUMsbUJBQW1CLENBQ3pCLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO2dCQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGlCQUFpQjtvQkFDcEMsd0NBQXdDLENBQUM7YUFDNUM7aUJBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssSUFBSSxRQUFRLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUM7Z0JBQzlCLElBQUksT0FBTyxHQUFHO29CQUNaLEtBQUssRUFBRSxDQUFDLE1BQWdCLEVBQUUsTUFBZ0IsQ0FBQztpQkFDNUMsQ0FBQztnQkFDRixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksb0JBQVUsQ0FDMUIsSUFBSSxDQUFDLGFBQWEsRUFDbEIsT0FBTyxFQUNQLElBQUksQ0FBQyxvQkFBb0IsQ0FDMUIsQ0FBQztnQkFDRixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztnQkFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztnQkFDOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCO29CQUNwQyxnQ0FBZ0MsQ0FBQzthQUNwQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGdCQUFnQjs7UUFDdEIsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBc0IsQ0FBQztRQUMzRSxJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUNyQyxpQkFBaUIsQ0FDRSxDQUFDO1FBRXRCLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBUyxFQUFFLEVBQUU7WUFDdEQsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3BCLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNsQixJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQWEsQ0FBQztZQUNuRCxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ3JCLGFBQWEsQ0FBQyxLQUFLO2dCQUNqQixHQUFHLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDOUQsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3RCLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztRQUVILFdBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLDBDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDekQsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBRUgsV0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsMENBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTs7WUFDekQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFhLENBQUM7WUFDM0MsNEZBQTRGO1lBQzVGLElBQUksT0FBTyxHQUFHLGlCQUFHLEVBQ2YsWUFBTSxDQUFDLE1BQU0sMENBQUUsTUFBTyxFQUN0QixtQkFBbUIsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUN6QyxDQUFDO1lBQ0YsSUFBSSxnQkFBZ0IsR0FDbEIsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxVQUFVO2dCQUNWLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLGlHQUFpRztZQUNqRyxJQUFJLGVBQWUsR0FBRyxpQkFBRyxFQUN2QixZQUFNLENBQUMsTUFBTSwwQ0FBRSxNQUFPLEVBQ3RCLG1CQUFtQixnQkFBZ0IsRUFBRSxDQUN0QyxDQUFDO1lBQ0YsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLElBQUksWUFBWSxHQUFHLElBQUksSUFBSSxDQUFDO2dCQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQ25ELENBQUMsQ0FBQztZQUNILElBQUksRUFBRSxHQUFHO2dCQUNQLFdBQVcsRUFBRSxrQkFBa0I7YUFDaEMsQ0FBQztZQUVGLHlCQUFXLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7aUJBQzNCLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUNqQixLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFRLEVBQUUsRUFBRTtnQkFDbEIsT0FBTyxDQUFDLEtBQUssQ0FBQywwQkFBMEIsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDN0MsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7WUFDOUMsQ0FBQyxDQUFDLENBQUM7WUFFTCx5QkFBVyxFQUFDLGVBQWUsRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDL0MsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRWQsK0NBQStDO1lBQy9DLDZDQUE2QztZQUM3QyxtQ0FBbUM7WUFDbkMsb0NBQW9DO1lBQ3BDLHlDQUF5QztZQUN6QyxrQkFBa0I7WUFDbEIsOENBQThDO1lBQzlDLGlEQUFpRDtZQUNqRCxNQUFNO1lBQ04sMENBQTBDO1lBQzFDLGlCQUFpQjtRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxlQUFlLENBQUMsSUFBUztRQUMvQixTQUFTLGdCQUFnQixDQUFDLE9BQWUsRUFBRSxHQUFXLEVBQUUsR0FBVTtZQUNoRSxJQUFJLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzQixJQUNFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDbEIsRUFBRSxZQUFZLElBQUk7Z0JBQ2xCLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFDM0I7Z0JBQ0EsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLHFCQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ25DO1FBQ0gsQ0FBQztRQUVELEtBQUssSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNqQyxJQUNFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QixDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO29CQUNqQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQ3RDO2dCQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDOUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2FBQ3JDO2lCQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDakMsS0FBSyxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUN2QyxJQUFJLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDbkMsSUFDRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ2xCLEVBQUUsWUFBWSxJQUFJO3dCQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUM5Qjt3QkFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ25FLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztxQkFDMUM7aUJBQ0Y7YUFDRjtpQkFBTSxJQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QixDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO29CQUNqQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQ3JDO2dCQUNBLElBQUksRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsWUFBWSxJQUFJLEVBQUU7b0JBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDcEM7YUFDRjtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8sTUFBTSxDQUFDLEdBQVE7UUFDckIsT0FBTyxHQUFHLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLEdBQUcsQ0FBQyxXQUFXLEtBQUssTUFBTSxDQUFDO0lBQ3RFLENBQUM7SUFFTyxRQUFRLENBQUMsR0FBUTtRQUN2QixPQUFPLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxHQUFHLENBQUMsV0FBVyxLQUFLLE1BQU0sQ0FBQztJQUMvRCxDQUFDO0NBQ0Y7QUEzakNELDRCQTJqQ0M7QUFFRCxNQUFhLE9BQU87SUFrQmxCLGlCQUFpQjtJQUNqQjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBbUIsQ0FBQztRQUN2RSxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFzQixDQUFDO1FBQzVFLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFtQixDQUFDO1FBQ3hFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU0sS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFnQjtRQUN6QyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEI7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQztZQUN0QyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDcEIsU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUVsRCxvREFBb0Q7UUFDcEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUN2QyxFQUFFLEVBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQ3hDLEdBQUcsRUFDSCxJQUFJLENBQ0wsQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FDakIsQ0FBQztRQUVGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSw2QkFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRXZCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUNuQixDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsa0JBQWtCO1FBQ3ZFLE1BQU0sa0JBQWtCLEdBQUc7WUFDekIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FBQztRQUVGLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFM0IscURBQXFEO1FBQ3JELE1BQU0sV0FBVyxHQUFHO1lBQ2xCLE1BQU0sNEJBQWMsRUFBQyxpQkFBRyxFQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEQsTUFBTSw0QkFBYyxFQUFDLGlCQUFHLEVBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyRCxNQUFNLDRCQUFjLEVBQUMsaUJBQUcsRUFBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BELE1BQU0sNEJBQWMsRUFBQyxpQkFBRyxFQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkQsTUFBTSw0QkFBYyxFQUFDLGlCQUFHLEVBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0RCxNQUFNLDRCQUFjLEVBQUMsaUJBQUcsRUFBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RELENBQUM7UUFFRixNQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzdDLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGFBQUcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sY0FBYyxHQUFHO1lBQ3JCLENBQUMsRUFBRSxDQUFDO1lBQ0osQ0FBQyxFQUFFLENBQUM7WUFDSixDQUFDLEVBQUUsQ0FBQztZQUNKLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFNBQVMsRUFBRSxDQUFDO1NBQ2IsQ0FBQztRQUVGLE1BQU0sb0JBQW9CLEdBQUc7WUFDM0IsQ0FBQyxFQUFFLENBQUM7WUFDSixDQUFDLEVBQUUsQ0FBQztZQUNKLENBQUMsRUFBRSxFQUFFO1NBQ04sQ0FBQztRQUVGLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN0RSxvQkFBb0I7YUFDakIsR0FBRyxDQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQzFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFOztZQUN0QixVQUFJLENBQUMsTUFBTSwwQ0FBRSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hDLFVBQUksQ0FBQyxRQUFRLDBDQUFFLE1BQU0sRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsb0JBQW9CO2FBQ2pCLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUMxQyxjQUFjLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTs7WUFDdEIsVUFBSSxDQUFDLE1BQU0sMENBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQyxVQUFJLENBQUMsUUFBUSwwQ0FBRSxNQUFNLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUNMLG9CQUFvQjthQUNqQixHQUFHLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDMUMsY0FBYyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7O1lBQ3RCLFVBQUksQ0FBQyxNQUFNLDBDQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEMsVUFBSSxDQUFDLFFBQVEsMENBQUUsTUFBTSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFFTCxNQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2xFLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTs7WUFDeEUsVUFBSSxDQUFDLEtBQUssMENBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUNILGtCQUFrQjthQUNmLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUM7YUFDaEQsUUFBUSxDQUFDLENBQUMsR0FBVyxFQUFFLEVBQUU7WUFDeEIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQzthQUM1QjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFMUIsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNsRSxjQUFjLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTs7WUFDdEUsVUFBSSxDQUFDLFFBQVEsMENBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNILGNBQWM7YUFDWCxHQUFHLENBQUMsY0FBYyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQzthQUM1QyxRQUFRLENBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRTtZQUN4QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQzthQUMvQjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsY0FBYzthQUNYLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDcEMsUUFBUSxDQUFDLENBQUMsR0FBVyxFQUFFLEVBQUU7WUFDeEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEM7UUFDSCxDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFaEIsY0FBYzthQUNYLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDcEMsUUFBUSxDQUFDLENBQUMsR0FBVyxFQUFFLEVBQUU7WUFDeEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEM7UUFDSCxDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFaEIsY0FBYzthQUNYLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDcEMsUUFBUSxDQUFDLENBQUMsR0FBVyxFQUFFLEVBQUU7WUFDeEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEM7UUFDSCxDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFaEIsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXRCLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hELElBQUksYUFBYSxHQUFRLEVBQUUsQ0FBQztRQUM1QixhQUFhLENBQUMsWUFBWSxHQUFHLEdBQUcsRUFBRTs7WUFDaEMsVUFBSSxDQUFDLFFBQVEsMENBQUUsS0FBSyxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDO1FBRUYsYUFBYSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFakQsY0FBYztRQUNkLGlEQUFpRDtRQUNqRCx5Q0FBeUM7UUFDekMsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FDeEMsZ0JBQWdCLENBQ0MsQ0FBQztRQUNwQixXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDeEMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBQzlCLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNoQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1FBRWhDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQXlCO1FBQ2hELE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFOUIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hCO1FBRUQsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDO1lBQ3RDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNwQixTQUFTLEVBQUUsSUFBSTtTQUNoQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQztRQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUVsRCxrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUN2QyxFQUFFLEVBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQ3hDLEdBQUcsRUFDSCxJQUFJLENBQ0wsQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FDakIsQ0FBQztRQUVGLGlCQUFpQjtRQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FDbkIsQ0FBQztRQUNGLE1BQU0sY0FBYyxHQUFHO1lBQ3JCLENBQUMsRUFBRSxDQUFDO1lBQ0osQ0FBQyxFQUFFLENBQUM7WUFDSixDQUFDLEVBQUUsQ0FBQztZQUNKLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFNBQVMsRUFBRSxHQUFHO1NBQ2YsQ0FBQztRQUVGLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLGtCQUFrQjtRQUN2RSxNQUFNLGtCQUFrQixHQUFHO1lBQ3pCLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFNBQVMsRUFBRSxJQUFJO1NBQ2hCLENBQUM7UUFFRixtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLDZCQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWxELGlCQUFpQjtRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTNCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxhQUFHLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUU1QyxlQUFlO1FBQ2YsSUFBSSxVQUFVLEdBQVEsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sWUFBWSxHQUFHO1lBQ25CLENBQUMsRUFBRSxDQUFDO1lBQ0osQ0FBQyxFQUFFLENBQUM7WUFDSixDQUFDLEVBQUUsQ0FBQztTQUNMLENBQUM7UUFDRixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzlELFlBQVksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDakUsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlELENBQUMsQ0FBQyxDQUFDO1FBRUgsWUFBWSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNqRSxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUQsQ0FBQyxDQUFDLENBQUM7UUFDSCxZQUFZLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2pFLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5RCxDQUFDLENBQUMsQ0FBQztRQUNILFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVwQixNQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2xFLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTs7WUFDeEUsVUFBSSxDQUFDLEtBQUssMENBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUNILGtCQUFrQjthQUNmLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUM7YUFDaEQsUUFBUSxDQUFDLENBQUMsR0FBVyxFQUFFLEVBQUU7WUFDeEIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQzthQUM1QjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFMUIsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNsRSxjQUFjLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTs7WUFDdEUsVUFBSSxDQUFDLFFBQVEsMENBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNILGNBQWM7YUFDWCxHQUFHLENBQUMsY0FBYyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQzthQUM1QyxRQUFRLENBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRTtZQUN4QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQzthQUMvQjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsY0FBYzthQUNYLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDcEMsUUFBUSxDQUFDLENBQUMsR0FBVyxFQUFFLEVBQUU7WUFDeEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEM7UUFDSCxDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFaEIsY0FBYzthQUNYLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDcEMsUUFBUSxDQUFDLENBQUMsR0FBVyxFQUFFLEVBQUU7WUFDeEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEM7UUFDSCxDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFaEIsY0FBYzthQUNYLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDcEMsUUFBUSxDQUFDLENBQUMsR0FBVyxFQUFFLEVBQUU7WUFDeEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEM7UUFDSCxDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFaEIsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXRCLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hELElBQUksYUFBYSxHQUFRLEVBQUUsQ0FBQztRQUM1QixhQUFhLENBQUMsWUFBWSxHQUFHLEdBQUcsRUFBRTs7WUFDaEMsVUFBSSxDQUFDLFFBQVEsMENBQUUsS0FBSyxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDO1FBRUYsYUFBYSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFakQsY0FBYztRQUNkLGlEQUFpRDtRQUNqRCx5Q0FBeUM7UUFDekMsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FDeEMsZ0JBQWdCLENBQ0MsQ0FBQztRQUNwQixXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDeEMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBQzlCLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNoQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFaEQsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRW5CLE9BQU8sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBeUI7UUFDOUMsSUFBSTtZQUNGLElBQUksT0FBTyxHQUFHLENBQUMsTUFBTSw0QkFBYyxFQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQVEsRUFBRSxFQUFFO2dCQUM5RCxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBVyxDQUFDO1lBRWQsNERBQTREO1lBQzVELGdDQUFnQztZQUNoQyxNQUFNO1lBRU4sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztZQUUvQixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFOztnQkFDckMsSUFBSTtvQkFDRixVQUFJLENBQUMsTUFBTSwwQ0FBRSxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSTt3QkFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRTs0QkFDakMsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFO2dDQUNsQixLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7Z0NBQzdCLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzs2QkFDbkM7d0JBQ0gsQ0FBQyxDQUFDLENBQUM7d0JBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNoQixDQUFDLENBQUMsQ0FBQztpQkFDSjtnQkFBQyxPQUFPLEtBQUssRUFBRTtvQkFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDaEM7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7SUFFTyxPQUFPOztRQUNiLElBQUksQ0FBQyxXQUFXLEdBQUcscUJBQXFCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsRSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUM3QixVQUFJLENBQUMsUUFBUSwwQ0FBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0lBRU0sT0FBTzs7UUFDWixJQUFJO1lBQ0YsVUFBSSxDQUFDLE1BQU0sMENBQUUsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2pDLFVBQUksQ0FBQyxNQUFNLDBDQUFFLE9BQU8sRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLFVBQUksQ0FBQyxRQUFRLDBDQUFFLEtBQUssRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3hDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3pEO0lBQ0gsQ0FBQztJQUVPLGtCQUFrQjtRQUN4QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBUyxFQUFFLEVBQUU7WUFDOUMsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQW1CLENBQUM7WUFDeEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQztZQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDO1lBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBdGRELDBCQXNkQztBQUVELE1BQWEsT0FBTztJQUtsQjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FDeEMsbUJBQW1CLENBQ0YsQ0FBQztRQUVwQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFnQixDQUFDO1FBRXhFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQkFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFFLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRU0sS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFnQixFQUFFLFFBQWdCO1FBQzFELElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDdEMsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0MsUUFBUSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDOUIsK0NBQStDO1FBQy9DLG1CQUFtQjtRQUNuQixNQUFNO1FBQ04sTUFBTSw0QkFBYyxFQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3pDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QixNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksa0JBQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBRSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVNLFlBQVk7O1FBQ2pCLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1RCxPQUFPLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzFCLGNBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLDBDQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsRDtJQUNILENBQUM7Q0FDRjtBQTNDRCwwQkEyQ0M7QUFFRCxNQUFhLE9BQU87SUFXbEI7UUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBbUIsQ0FBQztRQUN2RSxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFtQixDQUFDO1FBQ3pFLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQXNCLENBQUM7UUFDMUUsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBc0IsQ0FBQztRQUMxRSxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFzQixDQUFDO1FBQ3hFLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBRXhCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWpCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU0sYUFBYTtRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQVMsRUFBRSxFQUFFO1lBQ25ELEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvQixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksS0FBSyxFQUFFO2dCQUM1QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLGtCQUFrQixDQUFDO29CQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUNsQyxJQUFJLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ25ELE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2hELE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBRTlDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUMzRCxPQUFPLENBQUMsTUFBTSxDQUFDOzRCQUNiLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDeEMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDM0MsQ0FBQyxDQUFDO3FCQUNKO29CQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzlELElBQUksT0FBTyxHQUFHO3dCQUNaLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7d0JBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVc7d0JBQ2hDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVk7d0JBQ2xDLE1BQU0sRUFBRSxNQUFnQjt3QkFDeEIsU0FBUyxFQUFFLEVBQUU7cUJBQ2QsQ0FBQztvQkFDRixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztpQkFDOUI7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDO29CQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO2lCQUNsQzthQUNGO2lCQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUU7Z0JBQ2xDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsa0JBQWtCLENBQUM7b0JBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBRWxDLElBQUksT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDbkQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxXQUFXLEVBQUU7d0JBQ3BDLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ2pEO3lCQUFNO3dCQUNMLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQy9DO29CQUVELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssV0FBVyxFQUFFO3dCQUNwQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUNqRDt5QkFBTTt3QkFDTCxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUMvQztvQkFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDM0QsT0FBTyxDQUFDLE1BQU0sQ0FBQzs0QkFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUMvQixDQUFDLENBQUM7cUJBQ0o7b0JBQ0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzlELElBQUksT0FBTyxHQUFHO3dCQUNaLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7d0JBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVc7d0JBQ2hDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVk7d0JBQ2xDLE1BQU0sRUFBRSxNQUFnQjt3QkFDeEIsU0FBUyxFQUFFLEVBQUU7cUJBQ2QsQ0FBQztvQkFDRixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztpQkFDOUI7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDO29CQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO2lCQUNsQzthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sa0JBQWtCLENBQUMsSUFBUztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDakMsSUFDRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDeEIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsRUFDL0Q7Z0JBQ0EsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDOUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0JBQzdDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztnQkFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDaEM7aUJBQU0sSUFDTCxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDckQsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFDcEM7Z0JBQ0EsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDOUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0JBQzdDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztnQkFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDaEM7U0FDRjtJQUNILENBQUM7SUFFTSxvQkFBb0IsQ0FBQyxPQUFZLEVBQUUsT0FBZTtRQUN2RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDekIsSUFBSSxVQUFVLEdBQVEsRUFBRSxDQUFDO1lBQ3pCLGtEQUFrRDtZQUNsRCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7Z0JBQzVCLHdDQUF3QztnQkFDeEMsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNqQywwQkFBMEI7b0JBQzFCLElBQUksR0FBRyxLQUFLLFdBQVcsRUFBRTt3QkFDdkIsSUFBSTs0QkFDRixVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3lCQUNqRDt3QkFBQyxNQUFNOzRCQUNOLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7NEJBQ3JCLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7NEJBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7eUJBQ3pCO3FCQUNGO3lCQUFNO3dCQUNMLElBQUk7NEJBQ0YsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDN0M7d0JBQUMsTUFBTTs0QkFDTixVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDOzRCQUNyQixVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUM1QyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUN6QjtxQkFDRjtpQkFDRjtZQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRU8sYUFBYSxDQUFDLEdBQVc7UUFDL0IsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNuQyxPQUFPLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUMxQixJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSx5QkFBeUIsQ0FBQyxLQUFhOztRQUM1QyxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEQsT0FBTyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMxQixjQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSwwQ0FBRSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEQ7SUFDSCxDQUFDO0NBQ0Y7QUFyTEQsMEJBcUxDOzs7Ozs7Ozs7Ozs7Ozs7QUNyeERELHVHQUFzQztBQUN0Qyx5SEFBaUU7QUFDakUseUhBQWlFO0FBRWpFLE1BQU0sU0FBUyxHQUFHLDRCQUFZLEVBQUMsZ0JBQU0sR0FBRSxDQUFDLENBQUM7QUFDekMsMENBQTBDO0FBRTFDLDREQUE0RDtBQUM1RCxNQUFNLFVBQVUsR0FBRyw2QkFBYSxFQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUUxRCxzREFBc0Q7QUFDdEQsTUFBTSxPQUFPLEdBQUcsNkJBQWEsRUFBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFFcEQsTUFBYSxPQUFPO0lBR2xCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFFeEIsQ0FBQztJQUFBLENBQUM7SUFDRjs7Ozs7T0FLRztJQUNJLE9BQU8sQ0FBQyxXQUErQztRQUM1RCxJQUFJLFdBQW1CLENBQUM7UUFFeEIsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQy9CLFdBQVcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JFLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSyxRQUFRLENBQUMsS0FBYSxFQUFFLE9BQWU7UUFDN0MsSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3hDLE1BQU0sU0FBUyxHQUFXLFFBQVEsQ0FBQztZQUNuQyxJQUFJLE9BQWlCLENBQUM7WUFDdEIsSUFBSSxPQUFhLENBQUM7WUFFbEIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0IsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDeEUsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRS9CLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDN0IsSUFBSSxTQUFlLENBQUM7Z0JBQ3BCLElBQUksU0FBZSxDQUFDO2dCQUNwQixJQUFJLEtBQWEsQ0FBQztnQkFDbEIsSUFBSSxRQUFnQixDQUFDO2dCQUVyQixLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUMzRCxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLEtBQUssR0FBRyxTQUFTLENBQUMsQ0FBQztnQkFDNUQsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUM7Z0JBQzVELFFBQVEsR0FBRyxTQUFTLEdBQUcsSUFBSSxLQUFLLEdBQUcsR0FBRyxVQUFVLEdBQUcsV0FBVztzQkFDMUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLFdBQVcsR0FBRyxJQUFJLEtBQUssR0FBRztzQkFDeEQsVUFBVSxHQUFHLFdBQVcsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUVsRSxPQUFPLFFBQVEsQ0FBQzthQUNqQjtpQkFFSSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM5RCxJQUFJLFNBQWUsQ0FBQztnQkFDcEIsSUFBSSxLQUFhLENBQUM7Z0JBQ2xCLElBQUksUUFBZ0IsQ0FBQztnQkFFckIsS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDM0QsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUM7Z0JBQzVELFFBQVEsR0FBRyxTQUFTLEdBQUcsSUFBSSxLQUFLLEdBQUcsR0FBRyxVQUFVLEdBQUcsV0FBVztzQkFDMUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLFdBQVcsR0FBRyxJQUFJLEtBQUssR0FBRztzQkFDdEQsVUFBVSxHQUFHLFdBQVcsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUVsRSxPQUFPLFFBQVEsQ0FBQzthQUNqQjtpQkFFSSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM5RCxJQUFJLFNBQWUsQ0FBQztnQkFDcEIsSUFBSSxLQUFhLENBQUM7Z0JBQ2xCLElBQUksUUFBZ0IsQ0FBQztnQkFFckIsS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDM0QsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUM7Z0JBQzVELFFBQVEsR0FBRyxTQUFTLEdBQUcsSUFBSSxLQUFLLEdBQUcsR0FBRyxVQUFVLEdBQUcsV0FBVztzQkFDMUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLFdBQVcsR0FBRyxJQUFJLEtBQUssR0FBRztzQkFDeEQsVUFBVSxHQUFHLFdBQVcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUVoRSxPQUFPLFFBQVEsQ0FBQzthQUNqQjtpQkFFSSxJQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRztnQkFDbEUsSUFBSSxTQUFlLENBQUM7Z0JBQ3BCLElBQUksUUFBZ0IsQ0FBQztnQkFFckIsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxTQUFTLENBQUMsQ0FBQztnQkFDcEQsUUFBUSxHQUFHLFNBQVMsR0FBRyxJQUFJLEtBQUssR0FBRyxHQUFHLFVBQVUsR0FBRyxXQUFXO3NCQUMxRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsV0FBVyxHQUFHLElBQUksS0FBSyxHQUFHLEdBQUcsVUFBVTtzQkFDbkUsV0FBVyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBRXJELE9BQU8sUUFBUSxDQUFDO2FBQ2pCO1NBQ0Y7YUFDSTtZQUNILElBQUksUUFBZ0IsQ0FBQztZQUVyQiwyRUFBMkU7WUFDM0UsUUFBUSxHQUFHLFVBQVUsS0FBSyxhQUFhLE9BQU8sSUFBSSxDQUFDO1lBRW5ELE9BQU8sUUFBUSxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQztJQUlNLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBWTtRQUNuQyxLQUFLLFVBQVUsUUFBUSxDQUFDLEdBQVEsRUFBRSxHQUFVO1lBQzFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM3QixDQUFDO1FBRUQsSUFBSSxHQUFHLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUV0QixNQUFNLHVCQUFPLEVBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsRUFBRTtZQUNoRCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRTtnQkFDeEIsSUFBSSxRQUFRLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pFLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM3QjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBQ2xDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2FBQzdCO1FBQ0gsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBUSxFQUFFLEVBQUU7WUFDcEIsT0FBTyxDQUFDLEtBQUssQ0FBQywwQkFBMEIsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sR0FBRyxDQUFDO1FBRVgsa0RBQWtEO1FBQ2xELGdDQUFnQztRQUNoQyx3RUFBd0U7UUFDeEUsbUNBQW1DO1FBQ25DLE1BQU07UUFFTixXQUFXO1FBQ1gseUNBQXlDO1FBQ3pDLG1DQUFtQztRQUNuQyxNQUFNO1FBQ04sa0JBQWtCO1FBQ2xCLGtEQUFrRDtRQUNsRCxNQUFNO1FBRU4sY0FBYztJQUNoQixDQUFDO0lBRU0sUUFBUSxDQUFDLE9BQWUsRUFBRSxLQUFhLEVBQUUsSUFBWTtRQUMxRCxJQUFJLGNBQWMsR0FBa0IsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkQsSUFBSSxjQUFjLEdBQWtCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELGNBQWMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JELGNBQWMsR0FBRyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELGNBQWMsR0FBRyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXZELElBQUksR0FBRyxHQUFHO3FDQUN1QixPQUFPLElBQUksS0FBSzt5Q0FDWixjQUFjLFVBQVUsY0FBYztxQ0FDMUMsQ0FBQztRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM3QixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFTSxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQWdCO1FBQzFDLElBQUksSUFBSSxHQUFHLE1BQU0sT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUVGO0FBeEtELDBCQXdLQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JMRCw2RkFXZ0I7QUFFaEIsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEdBQ3JFLG1CQUFNLEVBQUM7SUFDTCxrQkFBa0IsRUFBbEIsMkJBQWtCO0lBQ2xCLG9CQUFvQixFQUFwQiw2QkFBb0I7SUFDcEIsZUFBZSxFQUFmLHdCQUFlO0lBQ2YsY0FBYyxFQUFkLHVCQUFjO0lBQ2QsZ0JBQWdCLEVBQWhCLHlCQUFnQjtJQUNoQixlQUFlLEVBQWYsd0JBQWU7SUFDZix1QkFBdUIsRUFBdkIsZ0NBQXVCO0lBQ3ZCLGlCQUFpQixFQUFqQiwwQkFBaUI7Q0FDbEIsQ0FBQyxDQUFDO0FBRUwsaUpBQXlDO0FBQ3pDLGdKQUFpRDtBQUNqRCw4SEFBcUM7QUFFckMsTUFBYSxXQUFXO0lBQ3RCLGdCQUFlLENBQUM7SUFFVCxtQkFBbUIsQ0FBQyxHQUFRLEVBQUUsTUFBYztRQUNqRCxJQUFJLE9BQU8sR0FBRyw4QkFBUyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksSUFBSSxHQUFHO1lBQ1QsU0FBUztZQUNULFFBQVE7WUFDUixTQUFTO1lBQ1QsUUFBUTtZQUNSLFlBQVk7WUFDWixjQUFjO1lBQ2QsZUFBZTtTQUNoQixDQUFDO1FBRUYseUNBQXlDO1FBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDN0IsSUFBSSxxQkFBTyxFQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUMxRCxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUMxRCxRQUFRLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztnQkFDbkMsTUFBTTtvQkFDSixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUNwRSxNQUFNO29CQUNKLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7YUFDckU7aUJBQU0sSUFBSSwyQkFBYSxFQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFO2dCQUN6QyxLQUFLLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDL0IsSUFDRSxxQkFBTyxFQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDN0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQy9CO3dCQUNBLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ3BFLFFBQVEsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO3dCQUN4QyxNQUFNOzRCQUNKLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTTtnQ0FDbEMsQ0FBQyxDQUFDLE1BQU07Z0NBQ1IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7d0JBQ2xDLE1BQU07NEJBQ0osTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNO2dDQUNsQyxDQUFDLENBQUMsTUFBTTtnQ0FDUixDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztxQkFDbkM7eUJBQU0sSUFBSSwyQkFBYSxFQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO3dCQUM5QyxLQUFLLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTs0QkFDckMsSUFDRSxxQkFBTyxFQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQ0FDbkMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3JDO2dDQUNBLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQ2pELE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FDM0IsQ0FBQztnQ0FDRixRQUFRLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQztnQ0FDOUMsTUFBTTtvQ0FDSixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU07d0NBQ3hDLENBQUMsQ0FBQyxNQUFNO3dDQUNSLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDO2dDQUN4QyxNQUFNO29DQUNKLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTTt3Q0FDeEMsQ0FBQyxDQUFDLE1BQU07d0NBQ1IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUM7NkJBQ3pDO2lDQUFNLElBQUksMkJBQWEsRUFBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtnQ0FDcEQsS0FBSyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7b0NBQzNDLElBQ0UscUJBQU8sRUFBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7d0NBQ3pDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUMzQzt3Q0FDQSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUN2RCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQ2pDLENBQUM7d0NBQ0YsUUFBUSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUM7d0NBQ3BELE1BQU07NENBQ0osT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNO2dEQUM5QyxDQUFDLENBQUMsTUFBTTtnREFDUixDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQzt3Q0FDOUMsTUFBTTs0Q0FDSixNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU07Z0RBQzlDLENBQUMsQ0FBQyxNQUFNO2dEQUNSLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDO3FDQUMvQztpQ0FDRjs2QkFDRjt5QkFDRjtxQkFDRjtpQkFDRjthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLE1BQU0sSUFBSSxXQUFXLEVBQUU7WUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDN0IsSUFBSSxxQkFBTyxFQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUMxRCxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7b0JBQ2IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDakMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3FCQUN2RDtvQkFDRCxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDO2lCQUN2QjtxQkFBTSxJQUFJLDJCQUFhLEVBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7b0JBQ3pDLEtBQUssSUFBSSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO3dCQUMvQixJQUNFLHFCQUFPLEVBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUM3QixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDL0I7NEJBQ0EsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDOzRCQUNiLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0NBQ2pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs2QkFDakU7NEJBQ0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQzt5QkFDNUI7NkJBQU0sSUFBSSwyQkFBYSxFQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFOzRCQUM5QyxLQUFLLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQ0FDckMsSUFDRSxxQkFBTyxFQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQ0FDbkMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3JDO29DQUNBLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztvQ0FDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFO3dDQUNqQyxHQUFHLENBQUMsSUFBSSxDQUNOLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FDeEIsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQ3RDLENBQ0YsQ0FBQztxQ0FDSDtvQ0FDRCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO2lDQUNsQztxQ0FBTSxJQUFJLDJCQUFhLEVBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7b0NBQ3BELEtBQUssSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO3dDQUMzQyxJQUNFLHFCQUFPLEVBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDOzRDQUN6QyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDM0M7NENBQ0EsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDOzRDQUNiLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0RBQ2pDLEdBQUcsQ0FBQyxJQUFJLENBQ04sT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUM5QixDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FDNUMsQ0FDRixDQUFDOzZDQUNIOzRDQUNELE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7eUNBQ3hDO3FDQUNGO2lDQUNGOzZCQUNGO3lCQUNGO3FCQUNGO2lCQUNGO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNLElBQUksTUFBTSxJQUFJLFFBQVEsRUFBRTtZQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUM3QixJQUNFLHFCQUFPLEVBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7b0JBQzFCLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxFQUNoQztvQkFDQSxJQUFJLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FDakIsb0JBQW9CLE1BQU0sV0FBVyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxjQUFjLE1BQU0sRUFBRSxDQUNsRixDQUFDO29CQUNGLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ25CLE1BQU0sR0FBRyxDQUFDO2lCQUNYO3FCQUFNLElBQUksMkJBQWEsRUFBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRTtvQkFDekMsS0FBSyxJQUFJLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7d0JBQy9CLElBQ0UscUJBQU8sRUFBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQzdCLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQzs0QkFDL0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxNQUFNLEVBQ3JDOzRCQUNBLElBQUksR0FBRyxHQUFHLElBQUksS0FBSyxDQUNqQixvQkFBb0IsTUFBTSxJQUFJLEdBQUcsWUFBWSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxjQUFjLE1BQU0sRUFBRSxDQUMvRixDQUFDOzRCQUNGLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBQ25CLE1BQU0sR0FBRyxDQUFDO3lCQUNYOzZCQUFNLElBQUksMkJBQWEsRUFBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTs0QkFDOUMsS0FBSyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0NBQ3JDLElBQ0UscUJBQU8sRUFBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7b0NBQ25DLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztvQ0FDckMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSxNQUFNLEVBQzNDO29DQUNBLElBQUksR0FBRyxHQUFHLElBQUksS0FBSyxDQUNqQixvQkFBb0IsTUFBTSxJQUFJLEdBQUcsS0FBSyxJQUFJLFlBQVksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sY0FBYyxNQUFNLEVBQUUsQ0FDOUcsQ0FBQztvQ0FDRixLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29DQUNuQixNQUFNLEdBQUcsQ0FBQztpQ0FDWDtxQ0FBTSxJQUFJLDJCQUFhLEVBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7b0NBQ3BELEtBQUssSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO3dDQUMzQyxJQUNFLHFCQUFPLEVBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDOzRDQUN6QyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7NENBQzNDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxFQUNqRDs0Q0FDQSxJQUFJLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FDakIsb0JBQW9CLE1BQU0sSUFBSSxHQUFHLEtBQUssSUFBSSxLQUFLLElBQUksWUFBWSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxjQUFjLE1BQU0sRUFBRSxDQUM3SCxDQUFDOzRDQUNGLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7NENBQ25CLE1BQU0sR0FBRyxDQUFDO3lDQUNYO3FDQUNGO2lDQUNGOzZCQUNGO3lCQUNGO3FCQUNGO2lCQUNGO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdkQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVPLFdBQVcsQ0FBQyxJQUFZLEVBQUUsR0FBUTtRQUN4QyxJQUFJLElBQUksSUFBSSxTQUFTLEVBQUU7WUFDckIsS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUU7Z0JBQ25CLElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLENBQUM7b0JBQ3RFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FDcEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksRUFDckIsY0FBYyxDQUNmLENBQUM7b0JBQ0YsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7aUJBQzlEO2FBQ0Y7U0FDRjthQUFNLElBQUksSUFBSSxJQUFJLFFBQVEsRUFBRTtZQUMzQixLQUFLLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRTtnQkFDbkIsSUFBSSxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUMzQixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsQ0FBQztvQkFDdEUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ2pFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2lCQUM5RDthQUNGO1NBQ0Y7YUFBTSxJQUFJLElBQUksSUFBSSxTQUFTLEVBQUU7WUFDNUIsS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUU7Z0JBQ25CLElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUN0QyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxFQUN2QixjQUFjLENBQ2YsQ0FBQztvQkFDRixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQ3ZDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLEVBQ3hCLGNBQWMsQ0FDZixDQUFDO29CQUNGLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUNuRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUN4QyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFDekIsT0FBTyxDQUNSLENBQUM7b0JBQ0YsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7aUJBQzlEO2FBQ0Y7U0FDRjthQUFNLElBQUksSUFBSSxJQUFJLFFBQVEsRUFBRTtZQUMzQixHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUN0RDtJQUNILENBQUM7SUFFTyxNQUFNLENBQUMsRUFBVSxFQUFFLEtBQWEsRUFBRSxDQUFTO1FBQ2pELElBQUksRUFBRSxHQUFHLE1BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsSUFBSSxFQUFFLEdBQUcsTUFBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV0QixJQUFJLElBQUksR0FBRyxRQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBSSxLQUFLLEdBQUcsUUFBUyxDQUFDLENBQUMsR0FBRyxFQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFbkMsSUFBSSxFQUFFLEdBQUcsV0FBWSxDQUFDLElBQUssQ0FBQyxJQUFjLENBQUMsRUFBRSxHQUFJLENBQUMsS0FBZSxDQUFDLENBQUMsQ0FBQztRQUNwRSxJQUFJLE1BQU0sR0FBRyxHQUFJLENBQUMsRUFBRSxFQUFFLFFBQVMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUU1QyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU8saUJBQWlCLENBQUMsR0FBVTtRQUNsQyxJQUFJLE1BQVcsQ0FBQztRQUVoQixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxpQkFBaUIsRUFBRTtZQUNoRSxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQy9CLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFO2dCQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQy9CLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQWEsQ0FBQztnQkFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNyQjtpQkFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRTtnQkFDckQsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsTUFBTSxHQUFHLE1BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ2xDO2lCQUFNLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFO2dCQUNuRCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLElBQUksUUFBUSxHQUFHLEtBQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN4QyxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUNaLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELENBQUMsQ0FBQyxDQUFDO2FBQ0o7aUJBQU0sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUU7Z0JBQ3RELElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVDLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLElBQUksYUFBYSxHQUFHLEtBQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDbkQsTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDWixhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxDQUFDLENBQUMsQ0FBQzthQUNKO2lCQUFNLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFO2dCQUNuRCxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLEdBQUcsR0FBVSxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRTtvQkFDN0IsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JELENBQUMsQ0FBQyxDQUFDO2dCQUNILE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNsQjtpQkFBTTtnQkFDTCxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRTtvQkFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELENBQUMsQ0FBQyxDQUFDO2FBQ0o7U0FDRjthQUFNO1lBQ0wsT0FBTyxHQUFHLENBQUM7U0FDWjtRQUNELFNBQVM7UUFDVCxrQ0FBa0M7UUFDbEMseUNBQXlDO1FBQ3pDLG1CQUFtQjtRQUNuQix3QkFBd0I7UUFDeEIsTUFBTTtRQUNOLElBQUk7UUFFSixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU8sZ0JBQWdCLENBQUMsR0FBUTtRQUMvQixJQUFJLE1BQVcsQ0FBQztRQUNoQixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxpQkFBaUIsRUFBRTtZQUM3RCxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFO2dCQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDekIsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekMsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBYSxDQUFDO2FBQ2hEO2lCQUFNLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFO2dCQUNyRCxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixNQUFNLEdBQUcsTUFBTyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDbEM7aUJBQU0sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUU7Z0JBQ25ELElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVDLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxRQUFRLEdBQUcsS0FBTSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3hDLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ1osUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO29CQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEQsQ0FBQyxDQUFDLENBQUM7YUFDSjtpQkFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRTtnQkFDdEQsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDckMsSUFBSSxRQUFRLEdBQUcsS0FBTSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUM5QyxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUNaLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELENBQUMsQ0FBQyxDQUFDO2FBQ0o7aUJBQU0sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUU7Z0JBQ25ELElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hDLElBQUksR0FBRyxHQUFVLEVBQUUsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFO29CQUM3QixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckQsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDWixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2xCO2lCQUFNO2dCQUNMLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hDLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFO29CQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEQsQ0FBQyxDQUFDLENBQUM7YUFDSjtTQUNGO2FBQU07WUFDTCxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLEVBQUU7Z0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEI7U0FDRjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxTQUFTLENBQUMsR0FBUSxFQUFFLElBQVk7UUFDdEMsSUFBSSxHQUFRLENBQUM7UUFDYixJQUFJLElBQUksSUFBSSxPQUFPLEVBQUU7WUFDbkIsR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNULEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtnQkFDdkIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTSxJQUFJLElBQUksSUFBSSxjQUFjLEVBQUU7WUFDakMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUU5QixJQUFJLElBQUksR0FBUSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFFeEMsS0FBSyxJQUFJLElBQUksSUFBSSxHQUFHLEVBQUU7Z0JBQ3BCLElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDNUIsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO3dCQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ2pELENBQUMsQ0FBQyxDQUFDO2lCQUNKO2FBQ0Y7WUFFRCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN2RSxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQVMsRUFBRSxFQUFFO29CQUMzQixJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQVMsRUFBRSxFQUFFO3dCQUMzQixJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQVMsRUFBRSxFQUFFOzRCQUMzQixHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDZCxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDZCxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDaEIsQ0FBQyxDQUFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNmLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNoQjtTQUNGO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0NBQ0Y7QUE3YUQsa0NBNmFDOzs7Ozs7Ozs7OztBQzFjRDs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTs7Ozs7V0NGQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0pBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21rZmlsZXMvLi9zcmMvbWtmaWxlcy5jc3MiLCJ3ZWJwYWNrOi8vbWtmaWxlcy8uL3NyYy9ta2ZpbGVzLmNzcz81Y2MyIiwid2VicGFjazovL21rZmlsZXMvLi9zcmMvZWRpdG9yLXBhcmFtcy50cyIsIndlYnBhY2s6Ly9ta2ZpbGVzLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vbWtmaWxlcy8uL3NyYy9ta2ZpbmRlci50cyIsIndlYnBhY2s6Ly9ta2ZpbGVzLy4vc3JjL21rbWVkaWEudHMiLCJ3ZWJwYWNrOi8vbWtmaWxlcy8uL3NyYy9ta3F1ZXJ5LnRzIiwid2VicGFjazovL21rZmlsZXMvLi9zcmMvcGFyc2VyLnRzIiwid2VicGFjazovL21rZmlsZXMvaWdub3JlZHwvVXNlcnMvaGVjdG9yL3dvcmsvbWt0dXJrL3NyYy9ta2ZpbGVzL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tfGNyeXB0byIsIndlYnBhY2s6Ly9ta2ZpbGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21rZmlsZXMvd2VicGFjay9ydW50aW1lL2FtZCBkZWZpbmUiLCJ3ZWJwYWNrOi8vbWtmaWxlcy93ZWJwYWNrL3J1bnRpbWUvYW1kIG9wdGlvbnMiLCJ3ZWJwYWNrOi8vbWtmaWxlcy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL21rZmlsZXMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbWtmaWxlcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWtmaWxlcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21rZmlsZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ta2ZpbGVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWtmaWxlcy93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL21rZmlsZXMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbWtmaWxlcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL21rZmlsZXMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL21rZmlsZXMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI21rcXVlcnktZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDZweDtcXG4gIHBhZGRpbmc6IDQwcHg7XFxuXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdxcnktc2VsZWN0b3IgZmllbGQtc2VsZWN0b3Iga2V5d29yZC0wIGdvJ1xcbiAgICAneCB5IGtleXdvcmQtMSBwbG90J1xcbiAgICAnIC4gLiBrZXl3b3JkLTIgLic7XFxufVxcblxcbiNxcnktbG9jLXNlbGVjdG9yIHtcXG4gIGdyaWQtYXJlYTogcXJ5LXNlbGVjdG9yO1xcbn1cXG5cXG4jZmllbGQtc2VsZWN0b3Ige1xcbiAgZ3JpZC1hcmVhOiBmaWVsZC1zZWxlY3RvcjtcXG59XFxuXFxuI2tleXdvcmQtaW5wdXQtMCB7XFxuICBncmlkLWFyZWE6IGtleXdvcmQtMDtcXG59XFxuXFxuI2tleXdvcmQtaW5wdXQtMSB7XFxuICBncmlkLWFyZWE6IGtleXdvcmQtMTtcXG59XFxuXFxuI2tleXdvcmQtaW5wdXQtMiB7XFxuICBncmlkLWFyZWE6IGtleXdvcmQtMjtcXG59XFxuXFxuI2dvLWJ0biB7XFxuICBncmlkLWFyZWE6IGdvO1xcbn1cXG5cXG4jcXVpY2stcGxvdC14IHtcXG4gIGdyaWQtYXJlYTogeDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuI3F1aWNrLXBsb3QteSB7XFxuICBncmlkLWFyZWE6IHk7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbiNwbG90LWJ0biB7XFxuICBncmlkLWFyZWE6IHBsb3Q7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbiNmaW5kZXItY2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4jZmluZGVyLWRpdiB7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93OiAxO1xcbiAgei1pbmRleDogMjtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxNmZyIDAuMjVmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdjb250cm9scydcXG4gICAgJ2ZpbmRlcidcXG4gICAgJ2NvbnRyb2xzLTInO1xcblxcbiAgbWF4LWhlaWdodDogaW5oZXJpdDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jZmluZGVyLWNvbnRyb2xzIHtcXG4gIGdyaWQtYXJlYTogY29udHJvbHM7XFxuICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAwLjVmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdiYWNrIGZvcndhcmQgZmlsdGVyIGZpbHRlcidcXG4gICAgJ3Nob3ctaW1hZ2VzIG4taW1nLXNsaWRlciBuLWltZy1zbGlkZXIgbi1pbWctc2xpZGVyJ1xcbiAgICAncGF0aC1uYW1lIHBhdGgtbmFtZSBwYXRoLW5hbWUgcGF0aC1uYW1lJztcXG4gIGdyaWQtZ2FwOiA0cHg7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xcbn1cXG5cXG4jZmluZGVyLWNvbnRyb2xzLTIge1xcbiAgZ3JpZC1hcmVhOiBjb250cm9scy0yO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICd1cGxvYWQgZG93bmxvYWQnO1xcbn1cXG5cXG4jY2hhcnQtZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDE7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jZmlsdGVyLXZhbHVlIHtcXG4gIGdyaWQtYXJlYTogZmlsdGVyO1xcbn1cXG5cXG4jYmFjay1idXR0b24ge1xcbiAgZ3JpZC1hcmVhOiBiYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jZm9yd2FyZC1idXR0b24ge1xcbiAgZ3JpZC1hcmVhOiBmb3J3YXJkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jdXBsb2FkLWZpbGUge1xcbiAgZ3JpZC1hcmVhOiB1cGxvYWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNkb3dubG9hZC1maWxlIHtcXG4gIGdyaWQtYXJlYTogZG93bmxvYWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNzaG93LWltYWdlcy1idXR0b24ge1xcbiAgZ3JpZC1hcmVhOiBzaG93LWltYWdlcztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI251bS1pbWFnZS1zbGlkZXItcCB7XFxuICBncmlkLWFyZWE6IG4taW1nLXNsaWRlcjtcXG4gIG1hcmdpbjogOHB4O1xcbn1cXG5cXG4jcGF0aC1uYW1lLXNwYW4ge1xcbiAgZ3JpZC1hcmVhOiBwYXRoLW5hbWU7XFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2ZpbmRlciB7XFxuICBtYXJnaW46IDZweDtcXG4gIG1hcmdpbi10b3A6IDNweDtcXG4gIGdyaWQtYXJlYTogZmluZGVyO1xcbiAgYm9yZGVyOiAwcHg7XFxufVxcblxcbiNtZWRpYS1jYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbiNlZGl0b3ItZGl2IHtcXG4gIHotaW5kZXg6IDM7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93OiAxO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG5cXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC4xMjVmciAxMGZyIDAuMjVmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdmaWxlLW5hbWUnXFxuICAgICdlZGl0b3InXFxuICAgICdidG4tYm94JztcXG5cXG4gIG1heC1oZWlnaHQ6IGluaGVyaXQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuI2VkaXRvciB7XFxuICBncmlkLWFyZWE6IGVkaXRvcjtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuI2ZpbGUtbmFtZS1zcGFuIHtcXG4gIGdyaWQtYXJlYTogZmlsZS1uYW1lO1xcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNidXR0b24tYm94IHtcXG4gIGdyaWQtYXJlYTogYnRuLWJveDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAndXBkYXRlLWJ0biB1cGRhdGUtYnRuJztcXG59XFxuXFxuI3VwZGF0ZS1idG4ge1xcbiAgZ3JpZC1hcmVhOiB1cGRhdGUtYnRuO1xcbn1cXG5cXG4jcmVuZGVyLWJ0biB7XFxuICBncmlkLWFyZWE6IHJlbmRlci1idG47XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jYWN0aXZlLWJ0biB7XFxuICBncmlkLWFyZWE6IGFjdGl2ZS1idG47XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jc3RvcmUtcGFyYW0tYnRuIHtcXG4gIGdyaWQtYXJlYTogc3RvcmUtcGFyYW0tYnRuO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIC8qIHZpc2liaWxpdHk6IGhpZGRlbjsgKi9cXG59XFxuXFxuLyogI2dlbmVyYXRlLWJ0biB7XFxuICBncmlkLWFyZWE6IGdlbi1idG47XFxuICBkaXNwbGF5OiBub25lO1xcbn0gKi9cXG5cXG4jcGFyYW0tZ2VuLWJ0bi1ib3gge1xcbiAgZ3JpZC1hcmVhOiBwYXJhbS1nZW4tYnRuLWJveDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNzYXZlLXNjZW5lLXBhcmFtLWJ0biB7XFxuICBncmlkLWFyZWE6IHN2LXNjZW5lLXBhcmFtLWJ0bjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNpbWFnZS1jYW52YXMtZGl2IHtcXG4gIHotaW5kZXg6IDI7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93OiAxO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2ltYWdlLWNhbnZhcyB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBtaW5tYXgoMCwgMWZyKSk7XFxuICBncmlkLWdhcDogMTBweDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLmltYWdlTGlzdCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5pbWFnZUxpc3QgZGl2IHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5pbWFnZUxpc3QgZGl2IGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmltYWdlTGlzdCBkaXYgcCB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLyogI3RocmVlLWNhbnZhcyB7XFxuICB6LWluZGV4OiAxO1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogMTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn0gKi9cXG5cXG4jZGF0LWd1aS1kaXYge1xcbiAgei1pbmRleDogMTtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuI2RhdC1ndWktZGl2ICoge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4ucGFnZS1jb250ZW50ID4gKiB7XFxuICBtYXgtaGVpZ2h0OiA4MHZoO1xcbn1cXG5cXG4jZmlsZS1uYW1lLWRpdiB7XFxuICBwYWRkaW5nLXRvcDogMDtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4jZmlsZS1yZW5hbWUtYnRuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbiNmaWxlLWR1cC1idG4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuXFxuI2ZpbGUtZHVwLW1vZGFsIHtcXG4gIG1pbi13aWR0aDogNDAwcHg7XFxufVxcblxcbiNkdXAtZmlsZS1uYW1lIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbn1cXG5cXG4jZ2VuLXNjZW5lLXBhcmFtLWJ0biB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZ3JpZC1hcmVhOiBnZW4tc2NlbmUtcGFyYW0tYnRuO1xcbn1cXG5cXG4jZ2VuLXNjZW5lLXBhcmFtLW1vZGFsIHtcXG4gIG1pbi13aWR0aDogNjAwcHg7XFxufVxcblxcbi5jb2xsYXBzaWJsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMThweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5hY3RpdmUsXFxuLmNvbGxhcHNpYmxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcblxcbi5jb2xsYXBzaWJsZTphZnRlciB7XFxuICBjb250ZW50OiAnXFxcXDAyNzk1JztcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5hY3RpdmU6YWZ0ZXIge1xcbiAgY29udGVudDogJ1xcXFwyNzk2JztcXG59XFxuXFxuLmNvbGwtY29udGVudCB7XFxuICBwYWRkaW5nOiAxOHB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbn1cXG5cXG4uZ2VuLXNjZW5lLXJ1bGUtYm94IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAndGFibGUtY29udHJvbHMnXFxuICAgICdydWxlLXRhYmxlJztcXG59XFxuXFxuLnJ1bGUtdGFibGUge1xcbiAgZ3JpZC1hcmVhOiBydWxlLXRhYmxlO1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuXFxuLmFkZC1ydWxlLWJ0biB7XFxuICBncmlkLWFyZWE6IGFkZC1ydWxlLWJ0bjtcXG59XFxuXFxuLnVuZG8tZWRpdC1idG4ge1xcbiAgZ3JpZC1hcmVhOiB1bmRvLWVkaXQtYnRuO1xcbn1cXG5cXG4ucnVsZS10YWJsZS1jb250cm9scyB7XFxuICBncmlkLWFyZWE6IHRhYmxlLWNvbnRyb2xzO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2FkZC1ydWxlLWJ0biB1bmRvLWVkaXQtYnRuJztcXG59XFxuXFxuLmNvbG9yLW5vZGUtYmlvIGRpdi5qc29uZWRpdG9yLWZpZWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjN2NlZWE7XFxufVxcblxcbi5jb2xvci1ub2RlLWF1dG9tYXRvciBkaXYuanNvbmVkaXRvci1maWVsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmMWVkO1xcbn1cXG5cXG4uY29sb3Itbm9kZS1nZW5lcmFsIGRpdi5qc29uZWRpdG9yLWZpZWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmYwY2I7XFxufVxcblxcbi5jb2xvci1ub2RlLWdyaWQgZGl2Lmpzb25lZGl0b3ItZmllbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGFjMTtcXG59XFxuXFxuLmNvbG9yLW5vZGUtZml4YXRpb24gZGl2Lmpzb25lZGl0b3ItZmllbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjdiMjtcXG59XFxuXFxuLmNvbG9yLW5vZGUtZml4YXRpb24tY29uZmlnIGRpdi5qc29uZWRpdG9yLWZpZWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmOTk7XFxufVxcblxcbi5jb2xvci1ub2RlLXNhbXBsZSBkaXYuanNvbmVkaXRvci1maWVsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5YWEyO1xcbn1cXG5cXG4uY29sb3Itbm9kZS10ZXN0IGRpdi5qc29uZWRpdG9yLWZpZWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkY2YyZGU7XFxufVxcblxcbi5jb2xvci1ub2RlLWNob2ljZSBkaXYuanNvbmVkaXRvci1maWVsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRlOGU3O1xcbn1cXG5cXG4uY29sb3Itbm9kZS1yZXdhcmQgZGl2Lmpzb25lZGl0b3ItZmllbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1ZWFkNztcXG59XFxuXFxuLmNvbG9yLW5vZGUtbnVpc2FuY2UgZGl2Lmpzb25lZGl0b3ItZmllbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZTJlNjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21rZmlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixhQUFhOztFQUViLHFDQUFxQztFQUNyQyxrQ0FBa0M7RUFDbEM7OztzQkFHb0I7QUFDdEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFVBQVU7O0VBRVYsYUFBYTtFQUNiLG1DQUFtQztFQUNuQzs7O2dCQUdjOztFQUVkLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCOztFQUV2QixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLGlDQUFpQztFQUNqQzs7OzZDQUcyQztFQUMzQyxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjs7RUFFckIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFB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QTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCOztnQkFFYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxxQ0FBcUM7RUFDckMsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNta3F1ZXJ5LWZvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiA2cHg7XFxuICBwYWRkaW5nOiA0MHB4O1xcblxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAncXJ5LXNlbGVjdG9yIGZpZWxkLXNlbGVjdG9yIGtleXdvcmQtMCBnbydcXG4gICAgJ3ggeSBrZXl3b3JkLTEgcGxvdCdcXG4gICAgJyAuIC4ga2V5d29yZC0yIC4nO1xcbn1cXG5cXG4jcXJ5LWxvYy1zZWxlY3RvciB7XFxuICBncmlkLWFyZWE6IHFyeS1zZWxlY3RvcjtcXG59XFxuXFxuI2ZpZWxkLXNlbGVjdG9yIHtcXG4gIGdyaWQtYXJlYTogZmllbGQtc2VsZWN0b3I7XFxufVxcblxcbiNrZXl3b3JkLWlucHV0LTAge1xcbiAgZ3JpZC1hcmVhOiBrZXl3b3JkLTA7XFxufVxcblxcbiNrZXl3b3JkLWlucHV0LTEge1xcbiAgZ3JpZC1hcmVhOiBrZXl3b3JkLTE7XFxufVxcblxcbiNrZXl3b3JkLWlucHV0LTIge1xcbiAgZ3JpZC1hcmVhOiBrZXl3b3JkLTI7XFxufVxcblxcbiNnby1idG4ge1xcbiAgZ3JpZC1hcmVhOiBnbztcXG59XFxuXFxuI3F1aWNrLXBsb3QteCB7XFxuICBncmlkLWFyZWE6IHg7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbiNxdWljay1wbG90LXkge1xcbiAgZ3JpZC1hcmVhOiB5O1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4jcGxvdC1idG4ge1xcbiAgZ3JpZC1hcmVhOiBwbG90O1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4jZmluZGVyLWNhcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuI2ZpbmRlci1kaXYge1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogMTtcXG4gIHotaW5kZXg6IDI7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTZmciAwLjI1ZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAnY29udHJvbHMnXFxuICAgICdmaW5kZXInXFxuICAgICdjb250cm9scy0yJztcXG5cXG4gIG1heC1oZWlnaHQ6IGluaGVyaXQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuI2ZpbmRlci1jb250cm9scyB7XFxuICBncmlkLWFyZWE6IGNvbnRyb2xzO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMC41ZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAnYmFjayBmb3J3YXJkIGZpbHRlciBmaWx0ZXInXFxuICAgICdzaG93LWltYWdlcyBuLWltZy1zbGlkZXIgbi1pbWctc2xpZGVyIG4taW1nLXNsaWRlcidcXG4gICAgJ3BhdGgtbmFtZSBwYXRoLW5hbWUgcGF0aC1uYW1lIHBhdGgtbmFtZSc7XFxuICBncmlkLWdhcDogNHB4O1xcbiAgcGFkZGluZzogNnB4O1xcbiAgcGFkZGluZy1ib3R0b206IDBweDtcXG59XFxuXFxuI2ZpbmRlci1jb250cm9scy0yIHtcXG4gIGdyaWQtYXJlYTogY29udHJvbHMtMjtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAndXBsb2FkIGRvd25sb2FkJztcXG59XFxuXFxuI2NoYXJ0LWRpdiB7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93OiAxO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuI2ZpbHRlci12YWx1ZSB7XFxuICBncmlkLWFyZWE6IGZpbHRlcjtcXG59XFxuXFxuI2JhY2stYnV0dG9uIHtcXG4gIGdyaWQtYXJlYTogYmFjaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2ZvcndhcmQtYnV0dG9uIHtcXG4gIGdyaWQtYXJlYTogZm9yd2FyZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3VwbG9hZC1maWxlIHtcXG4gIGdyaWQtYXJlYTogdXBsb2FkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jZG93bmxvYWQtZmlsZSB7XFxuICBncmlkLWFyZWE6IGRvd25sb2FkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jc2hvdy1pbWFnZXMtYnV0dG9uIHtcXG4gIGdyaWQtYXJlYTogc2hvdy1pbWFnZXM7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNudW0taW1hZ2Utc2xpZGVyLXAge1xcbiAgZ3JpZC1hcmVhOiBuLWltZy1zbGlkZXI7XFxuICBtYXJnaW46IDhweDtcXG59XFxuXFxuI3BhdGgtbmFtZS1zcGFuIHtcXG4gIGdyaWQtYXJlYTogcGF0aC1uYW1lO1xcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNmaW5kZXIge1xcbiAgbWFyZ2luOiA2cHg7XFxuICBtYXJnaW4tdG9wOiAzcHg7XFxuICBncmlkLWFyZWE6IGZpbmRlcjtcXG4gIGJvcmRlcjogMHB4O1xcbn1cXG5cXG4jbWVkaWEtY2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4jZWRpdG9yLWRpdiB7XFxuICB6LWluZGV4OiAzO1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogMTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMTI1ZnIgMTBmciAwLjI1ZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAnZmlsZS1uYW1lJ1xcbiAgICAnZWRpdG9yJ1xcbiAgICAnYnRuLWJveCc7XFxuXFxuICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbiNlZGl0b3Ige1xcbiAgZ3JpZC1hcmVhOiBlZGl0b3I7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbiNmaWxlLW5hbWUtc3BhbiB7XFxuICBncmlkLWFyZWE6IGZpbGUtbmFtZTtcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jYnV0dG9uLWJveCB7XFxuICBncmlkLWFyZWE6IGJ0bi1ib3g7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ3VwZGF0ZS1idG4gdXBkYXRlLWJ0bic7XFxufVxcblxcbiN1cGRhdGUtYnRuIHtcXG4gIGdyaWQtYXJlYTogdXBkYXRlLWJ0bjtcXG59XFxuXFxuI3JlbmRlci1idG4ge1xcbiAgZ3JpZC1hcmVhOiByZW5kZXItYnRuO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2FjdGl2ZS1idG4ge1xcbiAgZ3JpZC1hcmVhOiBhY3RpdmUtYnRuO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3N0b3JlLXBhcmFtLWJ0biB7XFxuICBncmlkLWFyZWE6IHN0b3JlLXBhcmFtLWJ0bjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICAvKiB2aXNpYmlsaXR5OiBoaWRkZW47ICovXFxufVxcblxcbi8qICNnZW5lcmF0ZS1idG4ge1xcbiAgZ3JpZC1hcmVhOiBnZW4tYnRuO1xcbiAgZGlzcGxheTogbm9uZTtcXG59ICovXFxuXFxuI3BhcmFtLWdlbi1idG4tYm94IHtcXG4gIGdyaWQtYXJlYTogcGFyYW0tZ2VuLWJ0bi1ib3g7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jc2F2ZS1zY2VuZS1wYXJhbS1idG4ge1xcbiAgZ3JpZC1hcmVhOiBzdi1zY2VuZS1wYXJhbS1idG47XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jaW1hZ2UtY2FudmFzLWRpdiB7XFxuICB6LWluZGV4OiAyO1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogMTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbiNpbWFnZS1jYW52YXMge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgbWlubWF4KDAsIDFmcikpO1xcbiAgZ3JpZC1nYXA6IDEwcHg7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5pbWFnZUxpc3Qge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uaW1hZ2VMaXN0IGRpdiB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uaW1hZ2VMaXN0IGRpdiBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5pbWFnZUxpc3QgZGl2IHAge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi8qICN0aHJlZS1jYW52YXMge1xcbiAgei1pbmRleDogMTtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBkaXNwbGF5OiBibG9jaztcXG59ICovXFxuXFxuI2RhdC1ndWktZGl2IHtcXG4gIHotaW5kZXg6IDE7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93OiAxO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNkYXQtZ3VpLWRpdiAqIHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLnBhZ2UtY29udGVudCA+ICoge1xcbiAgbWF4LWhlaWdodDogODB2aDtcXG59XFxuXFxuI2ZpbGUtbmFtZS1kaXYge1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuI2ZpbGUtcmVuYW1lLWJ0biB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG4jZmlsZS1kdXAtYnRuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbiNmaWxlLWR1cC1tb2RhbCB7XFxuICBtaW4td2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4jZHVwLWZpbGUtbmFtZSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG59XFxuXFxuI2dlbi1zY2VuZS1wYXJhbS1idG4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGdyaWQtYXJlYTogZ2VuLXNjZW5lLXBhcmFtLWJ0bjtcXG59XFxuXFxuI2dlbi1zY2VuZS1wYXJhbS1tb2RhbCB7XFxuICBtaW4td2lkdGg6IDYwMHB4O1xcbn1cXG5cXG4uY29sbGFwc2libGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3NztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDE4cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4uYWN0aXZlLFxcbi5jb2xsYXBzaWJsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG5cXG4uY29sbGFwc2libGU6YWZ0ZXIge1xcbiAgY29udGVudDogJ1xcXFwwMjc5NSc7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4uYWN0aXZlOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICdcXFxcMjc5Nic7XFxufVxcblxcbi5jb2xsLWNvbnRlbnQge1xcbiAgcGFkZGluZzogMThweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG59XFxuXFxuLmdlbi1zY2VuZS1ydWxlLWJveCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJ3RhYmxlLWNvbnRyb2xzJ1xcbiAgICAncnVsZS10YWJsZSc7XFxufVxcblxcbi5ydWxlLXRhYmxlIHtcXG4gIGdyaWQtYXJlYTogcnVsZS10YWJsZTtcXG4gIHotaW5kZXg6IDk5OTk7XFxufVxcblxcbi5hZGQtcnVsZS1idG4ge1xcbiAgZ3JpZC1hcmVhOiBhZGQtcnVsZS1idG47XFxufVxcblxcbi51bmRvLWVkaXQtYnRuIHtcXG4gIGdyaWQtYXJlYTogdW5kby1lZGl0LWJ0bjtcXG59XFxuXFxuLnJ1bGUtdGFibGUtY29udHJvbHMge1xcbiAgZ3JpZC1hcmVhOiB0YWJsZS1jb250cm9scztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdhZGQtcnVsZS1idG4gdW5kby1lZGl0LWJ0bic7XFxufVxcblxcbi5jb2xvci1ub2RlLWJpbyBkaXYuanNvbmVkaXRvci1maWVsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdjZWVhO1xcbn1cXG5cXG4uY29sb3Itbm9kZS1hdXRvbWF0b3IgZGl2Lmpzb25lZGl0b3ItZmllbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZjFlZDtcXG59XFxuXFxuLmNvbG9yLW5vZGUtZ2VuZXJhbCBkaXYuanNvbmVkaXRvci1maWVsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJmMGNiO1xcbn1cXG5cXG4uY29sb3Itbm9kZS1ncmlkIGRpdi5qc29uZWRpdG9yLWZpZWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmRhYzE7XFxufVxcblxcbi5jb2xvci1ub2RlLWZpeGF0aW9uIGRpdi5qc29uZWRpdG9yLWZpZWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI3YjI7XFxufVxcblxcbi5jb2xvci1ub2RlLWZpeGF0aW9uLWNvbmZpZyBkaXYuanNvbmVkaXRvci1maWVsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjk5O1xcbn1cXG5cXG4uY29sb3Itbm9kZS1zYW1wbGUgZGl2Lmpzb25lZGl0b3ItZmllbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOWFhMjtcXG59XFxuXFxuLmNvbG9yLW5vZGUtdGVzdCBkaXYuanNvbmVkaXRvci1maWVsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNmMmRlO1xcbn1cXG5cXG4uY29sb3Itbm9kZS1jaG9pY2UgZGl2Lmpzb25lZGl0b3ItZmllbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkZThlNztcXG59XFxuXFxuLmNvbG9yLW5vZGUtcmV3YXJkIGRpdi5qc29uZWRpdG9yLWZpZWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNWVhZDc7XFxufVxcblxcbi5jb2xvci1ub2RlLW51aXNhbmNlIGRpdi5qc29uZWRpdG9yLWZpZWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGUyZTY7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWtmaWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21rZmlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiZXhwb3J0IGNvbnN0IHRhc2tQYXJhbVNjaGVtYSA9IHtcbiAgdGl0bGU6ICdNa1R1cmsgVGFzayBQYXJhbXMnLFxuICBkZXNjcmlwdGlvbjogJ09iamVjdCBjb250YWluaW5nIE1rVHVyayB0YXNrIHBhcmFtZXRlcnMnLFxuICB0eXBlOiBbJ29iamVjdCcsICdhcnJheSddLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgQWdlbnQ6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIH0sXG4gICAgQ2hlY2tSRklEOiB7XG4gICAgICB0eXBlOiAnaW50ZWdlcicsXG4gICAgfSxcblxuICAgIEF1dG9tYXRvcjoge1xuICAgICAgdHlwZTogWydzdHJpbmcnLCAnaW50ZWdlciddLFxuICAgIH0sXG4gICAgQXV0b21hdG9yRmlsZVBhdGg6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZXhhbXBsZXM6IFtcbiAgICAgICAgJy9ta3R1cmtmaWxlcy9wYXJhbXRlcmZpbGVzL2F1dG9tYXRvcnMvdG91Y2hfbTJzX29iamVjdG9tZS5qc29uJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBDdXJyZW50QXV0b21hdG9yU3RhZ2U6IHtcbiAgICAgIHR5cGU6ICdpbnRlZ2VyJyxcbiAgICB9LFxuICAgIE1pblBlcmNlbnRDcml0ZXJpb246IHtcbiAgICAgIHR5cGU6ICdpbnRlZ2VyJyxcbiAgICB9LFxuICAgIE1pblRyaWFsc0NyaXRlcmlvbjoge1xuICAgICAgdHlwZTogJ2ludGVnZXInLFxuICAgIH0sXG4gICAgRHJhZ3RvUmVzcG9uZDoge1xuICAgICAgdHlwZTogJ2ludGVnZXInLFxuICAgIH0sXG4gICAgQ2FsaWJyYXRlRXllOiB7XG4gICAgICB0eXBlOiAnaW50ZWdlcicsXG4gICAgfSxcbiAgICBOUlNWUDoge1xuICAgICAgdHlwZTogJ2ludGVnZXInLFxuICAgIH0sXG4gICAgU2FtZURpZmZlcmVudDoge1xuICAgICAgdHlwZTogJ2ludGVnZXInLFxuICAgIH0sXG4gICAgU2FtcGxpbmdTdHJhdGVneToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgfSxcbiAgICBOU3RpY2t5UmVzcG9uc2U6IHtcbiAgICAgIHR5cGU6ICdpbnRlZ2VyJyxcbiAgICB9LFxuICAgIE5UcmlhbHNQZXJCYWdCbG9jazoge1xuICAgICAgdHlwZTogJ2ludGVnZXInLFxuICAgIH0sXG4gICAgTkdyaWRQb2ludHM6IHtcbiAgICAgIHR5cGU6ICdpbnRlZ2VyJyxcbiAgICAgIG1pbmltdW06IDEsXG4gICAgfSxcbiAgICBHcmlkU3BhY2luZ0luY2hlczoge1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgfSxcbiAgICBHcmlkWE9mZnNldEluY2hlczoge1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgfSxcbiAgICBHcmlkWU9mZnNldEluY2hlczoge1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgfSxcbiAgICBGaXhhdGlvbkdyaWRJbmRleDoge1xuICAgICAgdHlwZTogJ2ludGVnZXInLFxuICAgICAgbWluaW11bTogLTEsXG4gICAgfSxcbiAgICBTYW1wbGVHcmlkSW5kZXg6IHtcbiAgICAgIHR5cGU6ICdpbnRlZ2VyJyxcbiAgICAgIG1pbmltdW06IC0xLFxuICAgIH0sXG4gICAgT2JqZWN0R3JpZEluZGV4OiB7XG4gICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgaXRlbXM6IHtcbiAgICAgICAgdHlwZTogJ2ludGVnZXInLFxuICAgICAgICBtaW5pbXVtOiAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIENob2ljZUdyaWRJbmRleDoge1xuICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgIGl0ZW1zOiB7XG4gICAgICAgIHR5cGU6ICdpbnRlZ2VyJyxcbiAgICAgICAgbWluaW11bTogMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBUZXN0R3JpZEluZGV4OiB7XG4gICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgaXRlbXM6IHtcbiAgICAgICAgdHlwZTogJ2ludGVnZXInLFxuICAgICAgICBtaW5pbXVtOiAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIE5GaXhhdGlvbnM6IHtcbiAgICAgIHR5cGU6ICdpbnRlZ2VyJyxcbiAgICAgIG1pbmltdW06IDEsXG4gICAgfSxcbiAgICBGaXhhdGlvblVzZXNTYW1wbGU6IHtcbiAgICAgIHR5cGU6ICdpbnRlZ2VyJyxcbiAgICB9LFxuICAgIEZpeGF0aW9uU2l6ZUluY2hlczoge1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgfSxcbiAgICBGaXhhdGlvbkR1cmF0aW9uOiB7XG4gICAgICB0eXBlOiAnaW50ZWdlcicsXG4gICAgfSxcbiAgICBGaXhhdGlvblRpbWVPdXQ6IHtcbiAgICAgIHR5cGU6ICdpbnRlZ2VyJyxcbiAgICB9LFxuICAgIEZpeGF0aW9uV2luZG93U2l6ZUluY2hlczoge1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgfSxcbiAgICBGaXhhdGlvbkRvdFNpemVJbmNoZXM6IHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgIH0sXG4gICAgSW1hZ2VCYWdzU2FtcGxlOiB7XG4gICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgaXRlbXM6IHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICB9LFxuICAgIH0sXG4gICAgS2VlcFNhbXBsZU9OOiB7XG4gICAgICB0eXBlOiAnaW50ZWdlcicsXG4gICAgfSxcbiAgICBTYW1wbGVQUkU6IHtcbiAgICAgIHR5cGU6ICdpbnRlZ2VyJyxcbiAgICAgIG1pbmltdW06IDAsXG4gICAgfSxcbiAgICBTYW1wbGVPRkY6IHtcbiAgICAgIHR5cGU6ICdpbnRlZ2VyJyxcbiAgICAgIG1pbmltdW06IDAsXG4gICAgfSxcblxuICAgIEltYWdlQmFnc1Rlc3Q6IHtcbiAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICBpdGVtczoge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBLZWVwVGVzdE9OOiB7XG4gICAgICB0eXBlOiAnaW50ZWdlcicsXG4gICAgfSxcbiAgICBUZXN0T0ZGOiB7XG4gICAgICB0eXBlOiAnaW50ZWdlcicsXG4gICAgfSxcbiAgICBIaWRlVGVzdERpc3RyYWN0b3JzOiB7XG4gICAgICB0eXBlOiAnaW50ZWdlcicsXG4gICAgfSxcblxuICAgIENob2ljZVNpemVJbmNoZXM6IHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgbWluaW11bTogMCxcbiAgICB9LFxuICAgIEhpZGVDaG9pY2VEaXN0cmFjdG9yczoge1xuICAgICAgdHlwZTogJ2ludGVnZXInLFxuICAgIH0sXG4gICAgQ2hvaWNlVGltZU91dDoge1xuICAgICAgdHlwZTogJ2ludGVnZXInLFxuICAgICAgbWluaW11bTogMCxcbiAgICB9LFxuXG4gICAgUmV3YXJkU3RhZ2U6IHtcbiAgICAgIHR5cGU6ICdpbnRlZ2VyJyxcbiAgICB9LFxuICAgIFJld2FyZFBlcjEwMDBUcmlhbHM6IHtcbiAgICAgIHR5cGU6ICdpbnRlZ2VyJyxcbiAgICB9LFxuICAgIE5SZXdhcmRNYXg6IHtcbiAgICAgIHR5cGU6ICdpbnRlZ2VyJyxcbiAgICB9LFxuICAgIE5Db25zZWN1dGl2ZUhpdHNmb3JCb251czoge1xuICAgICAgdHlwZTogJ2ludGVnZXInLFxuICAgIH0sXG4gICAgUHVuaXNoVGltZU91dDoge1xuICAgICAgdHlwZTogJ2ludGVnZXInLFxuICAgICAgbWluaW11bTogMCxcbiAgICB9LFxuICAgIENvbnNlY3V0aXZlSGl0c0lUSToge1xuICAgICAgdHlwZTogJ2ludGVnZXInLFxuICAgICAgbWluaW11bTogMCxcbiAgICB9LFxuICAgIEludGVyVHJpYWxJbnRlcnZhbDoge1xuICAgICAgdHlwZTogJ2ludGVnZXInLFxuICAgICAgbWluaW11bTogMCxcbiAgICB9LFxuICAgIEJhY2tncm91bmRDb2xvcjJEOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICB9LFxuICAgIEhvbWVjYWdlOiB7XG4gICAgICB0eXBlOiAnaW50ZWdlcicsXG4gICAgfSxcbiAgICBTZXBhcmF0ZWQ6IHtcbiAgICAgIHR5cGU6ICdpbnRlZ2VyJyxcbiAgICB9LFxuICAgIFNwZWNpZXM6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZXhhbXBsZXM6IFsnaHVtYW4nLCAnbWFybW9zZXQnLCAnbW9kZWwnXSxcbiAgICB9LFxuICAgIExpcXVpZDoge1xuICAgICAgdHlwZTogJ2ludGVnZXInLFxuICAgIH0sXG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQge1xuICBnZXRGaXJlc3RvcmUsXG4gIGRvYyxcbiAgY29sbGVjdGlvbixcbiAgUXVlcnksXG4gIHF1ZXJ5LFxuICB3aGVyZSxcbn0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcbmltcG9ydCB7IGdldFN0b3JhZ2UsIFN0b3JhZ2VSZWZlcmVuY2UsIHJlZiB9IGZyb20gJ2ZpcmViYXNlL3N0b3JhZ2UnO1xuaW1wb3J0IHtcbiAgZ2V0QXV0aCxcbiAgR29vZ2xlQXV0aFByb3ZpZGVyLFxuICBnZXRSZWRpcmVjdFJlc3VsdCxcbiAgc2lnbkluV2l0aFJlZGlyZWN0LFxufSBmcm9tICdmaXJlYmFzZS9hdXRoJztcbmltcG9ydCB7IGdldEZ1bmN0aW9ucywgaHR0cHNDYWxsYWJsZSB9IGZyb20gJ2ZpcmViYXNlL2Z1bmN0aW9ucyc7XG5pbXBvcnQgJy4vbWtmaWxlcy5jc3MnO1xuLy8gaW1wb3J0ICdkYXQuZ3VpL2J1aWxkL2RhdC5ndWkuY3NzJztcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogJ0FJemFTeUEwZmJ2MlZxRS1BZkY2Vl9ueFNTWENFcWFUbEJsWm5USScsXG4gIGF1dGhEb21haW46ICdzYW5kYm94LWNlMmM1LmZpcmViYXNlYXBwLmNvbScsXG4gIGRhdGFiYXNlVVJMOiAnaHR0cHM6Ly9zYW5kYm94LWNlMmM1LmZpcmViYXNlaW8uY29tJyxcbiAgcHJvamVjdElkOiAnc2FuZGJveC1jZTJjNScsXG4gIHN0b3JhZ2VCdWNrZXQ6ICdzYW5kYm94LWNlMmM1LmFwcHNwb3QuY29tJyxcbiAgbWVzc2FnaW5nU2VuZGVySWQ6ICcxMDAzNzE5ODg3OTQ0Jyxcbn07XG5sZXQgZmlyZWJhc2VBcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcblxuaW1wb3J0IHsgTWtxdWVyeSB9IGZyb20gJy4vbWtxdWVyeSc7XG5pbXBvcnQgeyBNa2ZpbmRlciB9IGZyb20gJy4vbWtmaW5kZXInO1xuXG5jb25zdCBhdXRoID0gZ2V0QXV0aChmaXJlYmFzZUFwcCk7XG5cbmNvbnN0IHByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xucHJvdmlkZXIuYWRkU2NvcGUoJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY29udGFjdHMucmVhZG9ubHknKTtcbmdldFJlZGlyZWN0UmVzdWx0KGF1dGgpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICBpZiAocmVzdWx0KSB7XG4gICAgY29uc29sZS5sb2coXG4gICAgICAnU2lnbi1JbiBSZWRpcmVjdCBSZXN1bHQsIFVTRVI6JyxcbiAgICAgIHJlc3VsdC51c2VyLmVtYWlsLFxuICAgICAgJ2lzIHNpZ25lZCBpbidcbiAgICApO1xuICB9IGVsc2UgaWYgKGF1dGguY3VycmVudFVzZXIpIHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgICdTaWduLUluIFJlZGlyZWN0IFJlc3VsdCwgVVNFUjonLFxuICAgICAgYXV0aC5jdXJyZW50VXNlcixcbiAgICAgICdpcyBzaWduZWQgaW4nXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBzaWduSW5XaXRoUmVkaXJlY3QoYXV0aCwgcHJvdmlkZXIpO1xuICB9XG59KTtcblxuY29uc3QgZnVuY3Rpb25zID0gZ2V0RnVuY3Rpb25zKGZpcmViYXNlQXBwKTtcbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGZpcmViYXNlQXBwKTtcbmNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKGZpcmViYXNlQXBwKTtcbmNvbnN0IHN0b3JhZ2VSZWYgPSByZWYoc3RvcmFnZSk7XG5jb25zdCByb290UmVmID0gcmVmKHN0b3JhZ2VSZWYsICdta3R1cmtmaWxlcycpO1xuY29uc3QgbXR1cmtSb290UmVmID0gcmVmKHN0b3JhZ2VSZWYsICdta3R1cmtmaWxlc19tdHVyaycpO1xubGV0IGlzUm9vdCA9IHRydWU7XG5cbmxldCBta3EgPSBuZXcgTWtxdWVyeSgpO1xubGV0IG1rZiA9IG5ldyBNa2ZpbmRlcigpO1xuXG5sZXQgYnFMaXN0RGF0YXNldHMgPSBodHRwc0NhbGxhYmxlKGZ1bmN0aW9ucywgJ2JxTGlzdERhdGFzZXRzJyk7XG5cbmxldCBicURhdGFzZXRMaXN0ID0gYnFMaXN0RGF0YXNldHMoKTtcbmJxRGF0YXNldExpc3QudGhlbigoZGF0YXNldExpc3Q6IGFueSkgPT4ge1xuICBsZXQgYnFPcHRncm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJyNiaWdxdWVyeS1vcHRncm91cCdcbiAgKSBhcyBIVE1MT3B0R3JvdXBFbGVtZW50O1xuICBkYXRhc2V0TGlzdC5kYXRhLmZvckVhY2goKGRhdGFzZXQ6IGFueSkgPT4ge1xuICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb24udmFsdWUgPSBkYXRhc2V0O1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9ICdicS8nICsgZGF0YXNldDtcbiAgICBicU9wdGdyb3VwLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH0pO1xufSk7XG5cbmxldCByZmlkVG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JmaWQtc3dpdGNoJykgYXMgSFRNTElucHV0RWxlbWVudDtcbmxldCBxcnlMb2NTZWxjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgJyNxcnktbG9jLXNlbGVjdG9yJ1xuKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbmxldCBmaWVsZFNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgJyNmaWVsZC1zZWxlY3RvcidcbikgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbi8qIFF1aWNrIExpbmtzICovXG5sZXQgaG9tZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcXVpY2stbGluay1ob21lJykgYXMgSFRNTEVsZW1lbnQ7XG5sZXQgcGFyYW1zTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNxdWljay1saW5rLXBhcmFtcycpIGFzIEhUTUxFbGVtZW50O1xubGV0IHBhcmFtc3RvcmFnZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAnI3F1aWNrLWxpbmstcGFyYW1zdG9yYWdlJ1xuKSBhcyBIVE1MRWxlbWVudDtcbmxldCBzY2VuZVBhcmFtc0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAnI3F1aWNrLWxpbmstc2NlbmVwYXJhbXMnXG4pIGFzIEhUTUxFbGVtZW50O1xubGV0IGRhaWx5RGF0YUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAnI3F1aWNrLWxpbmstZGFpbHlkYXRhJ1xuKSBhcyBIVE1MRWxlbWVudDtcbmxldCBtYXJtb3NldHNMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgJyNxdWljay1saW5rLW1hcm1vc2V0cydcbikgYXMgSFRNTEVsZW1lbnQ7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGV2dDogRXZlbnQpID0+IHtcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgaXNSb290ID0gZmFsc2U7XG4gIHFyeUxvY1NlbGMudmFsdWUgPSAnbWt0dXJrZmlsZXMnO1xuICBxcnlMb2NTZWxjLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gIG1rZi5saXN0U3RvcmFnZUZpbGVzKHJvb3RSZWYpO1xufSk7XG5cbm1hcm1vc2V0c0xpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXY6IEV2ZW50KSA9PiB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgcXJ5TG9jU2VsYy52YWx1ZSA9ICdtYXJtb3NldHMnO1xuICBmaWVsZFNlbGVjdG9yIS52YWx1ZSA9ICduYW1lJztcbiAgcXJ5TG9jU2VsYyEuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgZmllbGRTZWxlY3RvciEuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcblxuICBsZXQgcmV0ID0gbWtxLmRlY29kZVF1ZXJ5KGNvbGxlY3Rpb24oZGIsICdtYXJtb3NldHMnKSk7XG4gIHJldC50aGVuKChkb2NzKSA9PiB7XG4gICAgbWtmLmxpc3RGaXJlc3RvcmVEb2NzKGRvY3MsICdtYXJtb3NldHMnKTtcbiAgfSk7XG59KTtcblxucGFyYW1zTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycgfHwgJ3BvaW50ZXJ1cCcsIChldjogRXZlbnQpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICBpc1Jvb3QgPSBmYWxzZTtcbiAgcXJ5TG9jU2VsYy52YWx1ZSA9ICdta3R1cmtmaWxlcyc7XG4gIHFyeUxvY1NlbGMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgbWtmLmxpc3RTdG9yYWdlRmlsZXMocmVmKHN0b3JhZ2VSZWYsICdta3R1cmtmaWxlcy9wYXJhbWV0ZXJmaWxlcy9zdWJqZWN0cycpKTtcbn0pO1xuXG5wYXJhbXN0b3JhZ2VMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyB8fCAncG9pbnRlcnVwJywgKGV2OiBFdmVudCkgPT4ge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGlzUm9vdCA9IGZhbHNlO1xuICBxcnlMb2NTZWxjLnZhbHVlID0gJ21rdHVya2ZpbGVzJztcbiAgcXJ5TG9jU2VsYy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICBta2YubGlzdFN0b3JhZ2VGaWxlcyhcbiAgICByZWYoc3RvcmFnZVJlZiwgJ21rdHVya2ZpbGVzL3BhcmFtZXRlcmZpbGVzL3BhcmFtc19zdG9yYWdlJylcbiAgKTtcbn0pO1xuXG5ob21lTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycgfHwgJ3BvaW50ZXJ1cCcsIChldjogRXZlbnQpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICBpc1Jvb3QgPSBmYWxzZTtcbiAgcXJ5TG9jU2VsYy52YWx1ZSA9ICdta3R1cmtmaWxlcyc7XG4gIHFyeUxvY1NlbGMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgLy8gbWtmLmxpc3RTdG9yYWdlRmlsZXMoc3RvcmFnZVJlZi5jaGlsZChcIm1rdHVya2ZpbGVzXCIpKTtcbiAgbWtmLmxpc3RTdG9yYWdlRmlsZXMocm9vdFJlZik7XG59KTtcblxuc2NlbmVQYXJhbXNMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyB8fCAncG9pbnRlcnVwJywgKGV2OiBFdmVudCkgPT4ge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGlzUm9vdCA9IGZhbHNlO1xuICBxcnlMb2NTZWxjLnZhbHVlID0gJ21rdHVya2ZpbGVzJztcbiAgcXJ5TG9jU2VsYy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAvLyBta2YubGlzdFN0b3JhZ2VGaWxlcyhzdG9yYWdlUmVmLmNoaWxkKFwibWt0dXJrZmlsZXMvc2NlbmViYWdzL29iamVjdG9tZTNkXCIpKTtcbiAgbWtmLmxpc3RTdG9yYWdlRmlsZXMocmVmKHJvb3RSZWYsICdzY2VuZWJhZ3Mvb2JqZWN0b21lM2QnKSk7XG59KTtcblxuZGFpbHlEYXRhTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycgfHwgJ3BvaW50ZXJ1cCcsIChldjogRXZlbnQpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgaXNSb290ID0gZmFsc2U7XG4gIHFyeUxvY1NlbGMudmFsdWUgPSAnbWt0dXJrZmlsZXMnO1xuICBxcnlMb2NTZWxjLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gIC8vIG1rZi5saXN0U3RvcmFnZUZpbGVzKHN0b3JhZ2VSZWYuY2hpbGQoJ21rdHVya2ZpbGVzL21rZGFpbHlkYXRhJykpO1xuICBta2YubGlzdFN0b3JhZ2VGaWxlcyhyZWYocm9vdFJlZiwgJ21rZGFpbHlkYXRhJykpO1xufSk7XG5cbnFyeUxvY1NlbGMhLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldikgPT4ge1xuICBsZXQgZnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmllbGQtc2VsZWN0b3InKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgbGV0IGtpMCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrZXl3b3JkLWlucHV0LTAnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBsZXQga2kxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2tleXdvcmQtaW5wdXQtMScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGxldCBraTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja2V5d29yZC1pbnB1dC0yJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgbGV0IGdvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dvLWJ0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICBsZXQgcGxvdFggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcXVpY2stcGxvdC14JykgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG4gIGxldCBwbG90WSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNxdWljay1wbG90LXknKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgbGV0IHBsb3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxvdC1idG4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgbGV0IHF1ZXJ5UmVzdWx0OiBQcm9taXNlPGFueVtdPjtcblxuICBzd2l0Y2ggKHFyeUxvY1NlbGMudmFsdWUpIHtcbiAgICBjYXNlICdtYXJtb3NldHMnOlxuICAgICAgZnMuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgIGtpMC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAga2kxLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIGtpMi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBnb0J0bi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuXG4gICAgICByZXNldFBsYWNlaG9sZGVyKCk7XG4gICAgICByZW1vdmVFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWVsZC1vcHRpb25zJyk7XG5cbiAgICAgIGxldCBuYW1lTWFybW9zZXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBuYW1lTWFybW9zZXRzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmllbGQtb3B0aW9ucycpO1xuICAgICAgbmFtZU1hcm1vc2V0cy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ25hbWUnKTtcbiAgICAgIG5hbWVNYXJtb3NldHMuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgICBuYW1lTWFybW9zZXRzLnRleHRDb250ZW50ID0gJ25hbWUnO1xuXG4gICAgICBsZXQgc2V4TWFybW9zZXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBzZXhNYXJtb3NldHMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmaWVsZC1vcHRpb25zJyk7XG4gICAgICBzZXhNYXJtb3NldHMuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdzZXgnKTtcbiAgICAgIHNleE1hcm1vc2V0cy50ZXh0Q29udGVudCA9ICdzZXgnO1xuXG4gICAgICBsZXQgcmZpZE1hcm1vc2V0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgcmZpZE1hcm1vc2V0cy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZpZWxkLW9wdGlvbnMnKTtcbiAgICAgIHJmaWRNYXJtb3NldHMuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdyZmlkJyk7XG4gICAgICByZmlkTWFybW9zZXRzLnRleHRDb250ZW50ID0gJ1JGSUQnO1xuXG4gICAgICBsZXQgYnJlZWRpbmdNYXJtb3NldHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIGJyZWVkaW5nTWFybW9zZXRzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmllbGQtb3B0aW9ucycpO1xuICAgICAgYnJlZWRpbmdNYXJtb3NldHMuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdicmVlZGluZycpO1xuICAgICAgYnJlZWRpbmdNYXJtb3NldHMudGV4dENvbnRlbnQgPSAnYnJlZWRpbmcnO1xuXG4gICAgICBsZXQgYmlydGhkYXRlTWFybW9zZXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBiaXJ0aGRhdGVNYXJtb3NldHMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmaWVsZC1vcHRpb25zJyk7XG4gICAgICBiaXJ0aGRhdGVNYXJtb3NldHMuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdiaXJ0aGRhdGUnKTtcbiAgICAgIGJpcnRoZGF0ZU1hcm1vc2V0cy50ZXh0Q29udGVudCA9ICdiaXJ0aGRhdGUnO1xuXG4gICAgICBsZXQgZmllbGRTZWxlY3Rvck1hcm1vc2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICcjZmllbGQtc2VsZWN0b3InXG4gICAgICApIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuICAgICAgZmllbGRTZWxlY3Rvck1hcm1vc2V0cy5hcHBlbmRDaGlsZChuYW1lTWFybW9zZXRzKTtcbiAgICAgIGZpZWxkU2VsZWN0b3JNYXJtb3NldHMuYXBwZW5kQ2hpbGQoc2V4TWFybW9zZXRzKTtcbiAgICAgIGZpZWxkU2VsZWN0b3JNYXJtb3NldHMuYXBwZW5kQ2hpbGQocmZpZE1hcm1vc2V0cyk7XG4gICAgICBmaWVsZFNlbGVjdG9yTWFybW9zZXRzLmFwcGVuZENoaWxkKGJyZWVkaW5nTWFybW9zZXRzKTtcbiAgICAgIGZpZWxkU2VsZWN0b3JNYXJtb3NldHMuYXBwZW5kQ2hpbGQoYmlydGhkYXRlTWFybW9zZXRzKTtcbiAgICAgIGZpZWxkU2VsZWN0b3JNYXJtb3NldHMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdta3R1cmtkYXRhJzpcbiAgICAgIGZzLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICBraTAuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgIGtpMS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAga2kyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIGdvQnRuLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICBwbG90WC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBwbG90WS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBwbG90QnRuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblxuICAgICAgcmVzZXRQbGFjZWhvbGRlcigpO1xuICAgICAgcmVtb3ZlRWxlbWVudHNCeUNsYXNzTmFtZSgnZmllbGQtb3B0aW9ucycpO1xuXG4gICAgICBsZXQgYWdlbnRUeXBlQ3VyRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgYWdlbnRUeXBlQ3VyRGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZpZWxkLW9wdGlvbnMnKTtcbiAgICAgIGFnZW50VHlwZUN1ckRhdGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdhZ2VudFR5cGVDdXJEYXRlJyk7XG4gICAgICBhZ2VudFR5cGVDdXJEYXRlLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICAgICAgYWdlbnRUeXBlQ3VyRGF0ZS50ZXh0Q29udGVudCA9ICdBZ2VudCAmIEN1cnJlbnREYXRlJztcblxuICAgICAgbGV0IGZpZWxkU2VsZWN0b3JNa3R1cmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnI2ZpZWxkLXNlbGVjdG9yJ1xuICAgICAgKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICAgIGZpZWxkU2VsZWN0b3JNa3R1cmsuYXBwZW5kQ2hpbGQoYWdlbnRUeXBlQ3VyRGF0ZSk7XG4gICAgICBmaWVsZFNlbGVjdG9yTWt0dXJrLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnb2JqZWN0cyc6XG4gICAgICBmcy5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAga2kwLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICBraTEuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAga2kyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIGdvQnRuLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICBwbG90WC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBwbG90WS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBwbG90QnRuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblxuICAgICAgcmVzZXRQbGFjZWhvbGRlcigpO1xuICAgICAgcmVtb3ZlRWxlbWVudHNCeUNsYXNzTmFtZSgnZmllbGQtb3B0aW9ucycpO1xuXG4gICAgICBsZXQgaWRlbnRpdHlPYmplY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBpZGVudGl0eU9iamVjdHMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmaWVsZC1vcHRpb25zJyk7XG4gICAgICBpZGVudGl0eU9iamVjdHMuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdpZGVudGl0eScpO1xuICAgICAgaWRlbnRpdHlPYmplY3RzLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICAgICAgaWRlbnRpdHlPYmplY3RzLnRleHRDb250ZW50ID0gJ2lkZW50aXR5JztcblxuICAgICAgbGV0IG1lc2hPYmplY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBtZXNoT2JqZWN0cy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZpZWxkLW9wdGlvbnMnKTtcbiAgICAgIG1lc2hPYmplY3RzLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbWVzaCcpO1xuICAgICAgbWVzaE9iamVjdHMudGV4dENvbnRlbnQgPSAnbWVzaCc7XG5cbiAgICAgIGxldCBub3VuT2JqZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgbm91bk9iamVjdHMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmaWVsZC1vcHRpb25zJyk7XG4gICAgICBub3VuT2JqZWN0cy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ25vdW4nKTtcbiAgICAgIG5vdW5PYmplY3RzLnRleHRDb250ZW50ID0gJ25vdW4nO1xuXG4gICAgICBsZXQgZmllbGRTZWxlY3Rvck9iamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnI2ZpZWxkLXNlbGVjdG9yJ1xuICAgICAgKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICAgIGZpZWxkU2VsZWN0b3JPYmplY3RzLmFwcGVuZENoaWxkKGlkZW50aXR5T2JqZWN0cyk7XG4gICAgICBmaWVsZFNlbGVjdG9yT2JqZWN0cy5hcHBlbmRDaGlsZChtZXNoT2JqZWN0cyk7XG4gICAgICBmaWVsZFNlbGVjdG9yT2JqZWN0cy5hcHBlbmRDaGlsZChub3VuT2JqZWN0cyk7XG4gICAgICBmaWVsZFNlbGVjdG9yT2JqZWN0cy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ21rZGFpbHlkYXRhJzpcbiAgICAgIC8vIGxldCByZXQgPSBta3EuZGVjb2RlUXVlcnkoZGIuY29sbGVjdGlvbignbWtkYWlseWRhdGEnKSk7XG4gICAgICBsZXQgcmV0ID0gbWtxLmRlY29kZVF1ZXJ5KGNvbGxlY3Rpb24oZGIsICdta2RhaWx5ZGF0YScpKTtcbiAgICAgIHJldC50aGVuKChkb2NzKSA9PiB7XG4gICAgICAgIG1rZi5saXN0RmlyZXN0b3JlRG9jcyhkb2NzLCAnbWtkYWlseWRhdGEnKTtcbiAgICAgIH0pO1xuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ21rdHVya2ZpbGVzJzpcbiAgICAgIGNvbnNvbGUubG9nKCdxcnlMb2NTZWxjIGNoYW5nZSBta3R1cmtmaWxlcycpO1xuICAgICAgZnMuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAga2kwLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIGtpMS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBraTIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgZ29CdG4uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgcGxvdFguc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgcGxvdFkuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgcGxvdEJ0bi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cbiAgICAgIHJlbW92ZUVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpZWxkLW9wdGlvbnMnKTtcbiAgICAgIG1rZi5saXN0U3RvcmFnZUZpbGVzKHJvb3RSZWYpO1xuICAgICAgaWYgKGlzUm9vdCkge1xuICAgICAgICBta2YubGlzdFN0b3JhZ2VGaWxlcyhyb290UmVmKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnbWt0dXJrZmlsZXNfbXR1cmsnOlxuICAgICAgZnMuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAga2kwLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIGtpMS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBraTIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgZ29CdG4uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgcGxvdFguc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgcGxvdFkuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgcGxvdEJ0bi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cbiAgICAgIHJlbW92ZUVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpZWxkLW9wdGlvbnMnKTtcbiAgICAgIG1rZi5saXN0U3RvcmFnZUZpbGVzKG10dXJrUm9vdFJlZik7XG4gICAgICBpZiAoaXNSb290KSB7XG4gICAgICAgIG1rZi5saXN0U3RvcmFnZUZpbGVzKG10dXJrUm9vdFJlZik7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2RldmljZXMnOlxuICAgICAgZnMuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAga2kwLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIGtpMS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBraTIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgZ29CdG4uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgcGxvdFguc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgcGxvdFkuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgcGxvdEJ0bi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cbiAgICAgIHJlc2V0UGxhY2Vob2xkZXIoKTtcbiAgICAgIHJlbW92ZUVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpZWxkLW9wdGlvbnMnKTtcblxuICAgICAgLy8gcXVlcnlSZXN1bHQgPSBta3EuZGVjb2RlUXVlcnkoZGIuY29sbGVjdGlvbihcImRldmljZXNcIikpO1xuICAgICAgcXVlcnlSZXN1bHQgPSBta3EuZGVjb2RlUXVlcnkoY29sbGVjdGlvbihkYiwgJ2RldmljZXMnKSk7XG4gICAgICBxdWVyeVJlc3VsdC50aGVuKChkb2NzKSA9PiB7XG4gICAgICAgIG1rZi5saXN0RmlyZXN0b3JlRG9jcyhkb2NzLCAnZGV2aWNlcycpO1xuICAgICAgfSk7XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnbXR1cmtoaXRzJzpcbiAgICAgIGZzLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIGtpMC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBraTEuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAga2kyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIGdvQnRuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIHBsb3RYLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIHBsb3RZLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIHBsb3RCdG4uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXG4gICAgICByZXNldFBsYWNlaG9sZGVyKCk7XG4gICAgICByZW1vdmVFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWVsZC1vcHRpb25zJyk7XG5cbiAgICAgIHF1ZXJ5UmVzdWx0ID0gbWtxLmRlY29kZVF1ZXJ5KGNvbGxlY3Rpb24oZGIsICdtdHVya2hpdHMnKSk7XG4gICAgICBxdWVyeVJlc3VsdC50aGVuKChkb2NzKSA9PiB7XG4gICAgICAgIG1rZi5saXN0RmlyZXN0b3JlRG9jcyhkb2NzLCAnbXR1cmtoaXRzJyk7XG4gICAgICB9KTtcblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdtdHVya3VzZXJzJzpcbiAgICAgIGZzLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIGtpMC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBraTEuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAga2kyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIGdvQnRuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIHBsb3RYLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIHBsb3RZLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIHBsb3RCdG4uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXG4gICAgICByZXNldFBsYWNlaG9sZGVyKCk7XG4gICAgICByZW1vdmVFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWVsZC1vcHRpb25zJyk7XG5cbiAgICAgIHF1ZXJ5UmVzdWx0ID0gbWtxLmRlY29kZVF1ZXJ5KGNvbGxlY3Rpb24oZGIsICdtdHVya3VzZXJzJykpO1xuICAgICAgcXVlcnlSZXN1bHQudGhlbigoZG9jcykgPT4ge1xuICAgICAgICBta2YubGlzdEZpcmVzdG9yZURvY3MoZG9jcywgJ210dXJrdXNlcnMnKTtcbiAgICAgIH0pO1xuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ210dXJrZGF0YSc6XG4gICAgICBmcy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBraTAuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAga2kxLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIGtpMi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBnb0J0bi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBwbG90WC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBwbG90WS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBwbG90QnRuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblxuICAgICAgcmVzZXRQbGFjZWhvbGRlcigpO1xuICAgICAgcmVtb3ZlRWxlbWVudHNCeUNsYXNzTmFtZSgnZmllbGQtb3B0aW9ucycpO1xuXG4gICAgICBxdWVyeVJlc3VsdCA9IG1rcS5kZWNvZGVRdWVyeShjb2xsZWN0aW9uKGRiLCAnbXR1cmtkYXRhJykpO1xuICAgICAgcXVlcnlSZXN1bHQudGhlbigoZG9jcykgPT4ge1xuICAgICAgICBta2YubGlzdEZpcmVzdG9yZURvY3MoZG9jcywgJ210dXJrZGF0YScpO1xuICAgICAgfSk7XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnZXllY2FsaWJyYXRpb25zJzpcbiAgICAgIGNvbnNvbGUubG9nKCdleWUnKTtcbiAgICAgIGZzLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIGtpMC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBraTEuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAga2kyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIGdvQnRuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIHBsb3RYLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIHBsb3RZLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIHBsb3RCdG4uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXG4gICAgICByZXNldFBsYWNlaG9sZGVyKCk7XG4gICAgICByZW1vdmVFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWVsZC1vcHRpb25zJyk7XG5cbiAgICAgIC8vIHF1ZXJ5UmVzdWx0ID0gbWtxLmRlY29kZVF1ZXJ5KGRiLmNvbGxlY3Rpb24oXCJleWVjYWxpYnJhdGlvbnNcIikpO1xuICAgICAgcXVlcnlSZXN1bHQgPSBta3EuZGVjb2RlUXVlcnkoY29sbGVjdGlvbihkYiwgJ2V5ZWNhbGlicmF0aW9ucycpKTtcbiAgICAgIHF1ZXJ5UmVzdWx0LnRoZW4oKGRvY3MpID0+IHtcbiAgICAgICAgbWtmLmxpc3RGaXJlc3RvcmVEb2NzKGRvY3MsICdleWVjYWxpYnJhdGlvbnMnKTtcbiAgICAgIH0pO1xuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ21rc2NhbGUnOlxuICAgICAgZnMuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgIGtpMC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAga2kxLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICBraTIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgZ29CdG4uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgIHBsb3RYLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICBwbG90WS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgcGxvdEJ0bi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuXG4gICAgICByZXNldFBsYWNlaG9sZGVyKCk7XG4gICAgICByZW1vdmVFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWVsZC1vcHRpb25zJyk7XG5cbiAgICAgIGxldCBuYW1lQ3VyRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgbmFtZUN1ckRhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmaWVsZC1vcHRpb25zJyk7XG4gICAgICBuYW1lQ3VyRGF0ZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ25hbWVDdXJEYXRlJyk7XG4gICAgICBuYW1lQ3VyRGF0ZS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3RydWUnKTtcbiAgICAgIG5hbWVDdXJEYXRlLnRleHRDb250ZW50ID0gJ05hbWUgJiBDdXJyZW50RGF0ZSc7XG5cbiAgICAgIGZzLmFwcGVuZENoaWxkKG5hbWVDdXJEYXRlKTtcbiAgICAgIGZzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnZXllZGF0YSc6XG4gICAgICBmcy5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAga2kwLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICBraTEuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgIGtpMi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBnb0J0bi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgcGxvdFguc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgIHBsb3RZLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICBwbG90QnRuLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG5cbiAgICAgIHJlc2V0UGxhY2Vob2xkZXIoKTtcbiAgICAgIHJlbW92ZUVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpZWxkLW9wdGlvbnMnKTtcblxuICAgICAgbGV0IGJxQWdlbnREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBicUFnZW50RGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZpZWxkLW9wdGlvbnMnKTtcbiAgICAgIGJxQWdlbnREYXRlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbmFtZUN1ckRhdGUnKTtcbiAgICAgIGJxQWdlbnREYXRlLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICAgICAgYnFBZ2VudERhdGUudGV4dENvbnRlbnQgPSAnTmFtZSAmIEN1cnJlbnREYXRlJztcblxuICAgICAgZnMuYXBwZW5kQ2hpbGQoYnFBZ2VudERhdGUpO1xuICAgICAgZnMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgIGJyZWFrO1xuICB9XG59KTtcblxuZmllbGRTZWxlY3Rvcj8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2KSA9PiB7XG4gIGxldCBmaWVsZCA9IGZpZWxkU2VsZWN0b3I/LnZhbHVlO1xuICBsZXQga2kwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2tleXdvcmQtaW5wdXQtMCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGxldCBraTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja2V5d29yZC1pbnB1dC0xJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgbGV0IGtpMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrZXl3b3JkLWlucHV0LTInKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBsZXQgcGxvdFggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcXVpY2stcGxvdC14JykgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG4gIGxldCBwbG90WSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNxdWljay1wbG90LXknKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgbGV0IHBsb3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxvdC1idG4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcblxuICBzd2l0Y2ggKGZpZWxkKSB7XG4gICAgY2FzZSAnbmFtZSc6XG4gICAgICByZXNldFBsYWNlaG9sZGVyKCk7XG4gICAgICBraTAuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICduYW1lJyk7XG4gICAgICBwbG90WC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgcGxvdFkuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgIHBsb3RCdG4uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnc2V4JzpcbiAgICAgIHJlc2V0UGxhY2Vob2xkZXIoKTtcbiAgICAgIGtpMC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ3NleCcpO1xuICAgICAgcGxvdFguc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgcGxvdFkuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgcGxvdEJ0bi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3JmaWQnOlxuICAgICAgcmVzZXRQbGFjZWhvbGRlcigpO1xuICAgICAga2kwLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUkZJRCcpO1xuICAgICAgcGxvdFguc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgIHBsb3RZLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICBwbG90QnRuLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2JyZWVkaW5nJzpcbiAgICAgIHJlc2V0UGxhY2Vob2xkZXIoKTtcbiAgICAgIGtpMC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ2JyZWVkaW5nJyk7XG4gICAgICBwbG90WC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBwbG90WS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBwbG90QnRuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnYmlydGhkYXRlJzpcbiAgICAgIHJlc2V0UGxhY2Vob2xkZXIoKTtcbiAgICAgIGtpMC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ2JpcnRoZGF0ZSAoZS5nLiAwNC8xNy8yMDE5OyArLTcpJyk7XG4gICAgICBwbG90WC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBwbG90WS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBwbG90QnRuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnYWdlbnRUeXBlQ3VyRGF0ZSc6XG4gICAgICBraTAuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdBZ2VudCcpO1xuICAgICAga2kxLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnQ3VycmVudERhdGUgKGUuZy4gMDQvMTcvMjAxOTsgKy03KScpO1xuICAgICAgcGxvdFguc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgcGxvdFkuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgcGxvdEJ0bi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ25hbWVDdXJEYXRlJzpcbiAgICAgIGtpMC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ05hbWUnKTtcbiAgICAgIGtpMS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0N1cnJlbnREYXRlIChlLmcuIDA0LzE3LzIwMTk7ICstNyknKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnZXllZGF0YSc6XG4gICAgICBraTAuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdBZ2VudCcpO1xuICAgICAga2kxLnNldEF0dHJpYnV0ZSgnUGxhY2Vob2xkZXInLCAnRGF0ZSAoZS5nLiAwNC8xNy8yMDE5KScpO1xuICAgICAgYnJlYWs7XG4gIH1cbn0pO1xuXG5sZXQgcXVlcnlGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRm9ybUVsZW1lbnQ+KCcjbWtxdWVyeS1mb3JtJyk7XG5xdWVyeUZvcm0/LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChldikgPT4ge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zb2xlLmxvZygndGVzdCB3ZWlyZCcpO1xuICBsZXQgcXJ5TG9jID0gcXJ5TG9jU2VsYz8udmFsdWU7XG4gIGxldCBmaWVsZCA9IGZpZWxkU2VsZWN0b3I/LnZhbHVlO1xuICBsZXQgazAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCcja2V5d29yZC1pbnB1dC0wJyk/LnZhbHVlO1xuICBsZXQgazEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCcja2V5d29yZC1pbnB1dC0xJyk/LnZhbHVlO1xuICBsZXQgazIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCcja2V5d29yZC1pbnB1dC0yJyk/LnZhbHVlO1xuXG4gIGxldCBxdWVyeVBhcmFtOiB7IGZpZWxkOiBzdHJpbmc7IGtleXdvcmQ6IHN0cmluZyB9W10gPSBbXTtcbiAgbGV0IHF1ZXJ5U3RyOiBzdHJpbmcgPSAnJztcbiAgbGV0IHF1ZXJ5UmVzdWx0OiBRdWVyeTtcblxuICBzd2l0Y2ggKHFyeUxvYykge1xuICAgIGNhc2UgJ21hcm1vc2V0cyc6XG4gICAgICBpZiAoazApIHtcbiAgICAgICAgcXVlcnlQYXJhbS5wdXNoKHsgZmllbGQ6IGZpZWxkLCBrZXl3b3JkOiBrMCB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIHF1ZXJ5IGFyZ3VtZW50cyEnKTtcbiAgICAgICAgYWxlcnQoJ05vIHF1ZXJ5IGFyZ3VtZW50cyEnKTtcbiAgICAgIH1cbiAgICAgIHF1ZXJ5UmVzdWx0ID0gcXVlcnkoXG4gICAgICAgIGNvbGxlY3Rpb24oZGIsICdtYXJtb3NldHMnKSxcbiAgICAgICAgd2hlcmUocXVlcnlQYXJhbVswXS5maWVsZCwgJz09JywgcXVlcnlQYXJhbVswXS5rZXl3b3JkKVxuICAgICAgKTtcbiAgICAgIC8vIHF1ZXJ5U3RyID0gXCJkYi5jb2xsZWN0aW9uKCdtYXJtb3NldHMnKVwiICsgbWtxLm1rcXVlcnkocXVlcnlQYXJhbSk7XG4gICAgICAvLyBxdWVyeVN0ciA9IFwicXVlcnkoY29sbGVjdGlvbihkYiwgJ21hcm1vc2V0cycpXCJcbiAgICAgIHF1ZXJ5U3RyID0gYHF1ZXJ5KGNvbGxlY3Rpb24oZGIsICdtYXJtb3NldHMnKSwgJHtta3EubWtxdWVyeShcbiAgICAgICAgcXVlcnlQYXJhbVxuICAgICAgKX0pYDtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnbWt0dXJrZGF0YSc6XG4gICAgICBpZiAoazApIHtcbiAgICAgICAgcXVlcnlQYXJhbS5wdXNoKHsgZmllbGQ6ICdBZ2VudCcsIGtleXdvcmQ6IGswIH0pO1xuICAgICAgfVxuICAgICAgLy8gaWYgKGsxKSB7XG4gICAgICAvLyAgIHF1ZXJ5UGFyYW0ucHVzaCh7IGZpZWxkOiBcIkRvY3R5cGVcIiwga2V5d29yZDogazEgfSk7XG4gICAgICAvLyB9XG4gICAgICBpZiAoazEpIHtcbiAgICAgICAgcXVlcnlQYXJhbS5wdXNoKHsgZmllbGQ6ICdDdXJyZW50RGF0ZScsIGtleXdvcmQ6IGsxIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAocXVlcnlQYXJhbS5sZW5ndGggPT0gMCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdObyBxdWVyeSBhcmd1bWVudHMhJyk7XG4gICAgICAgIGFsZXJ0KCdObyBxdWVyeSBhcmd1bWVudHMhJyk7XG4gICAgICB9IGVsc2UgaWYgKHF1ZXJ5UGFyYW0ubGVuZ3RoID09IDEpIHtcbiAgICAgICAgcXVlcnlSZXN1bHQgPSBxdWVyeShcbiAgICAgICAgICBjb2xsZWN0aW9uKGRiLCAnbWt0dXJrZGF0YScpLFxuICAgICAgICAgIHdoZXJlKHF1ZXJ5UGFyYW1bMF0uZmllbGQsICc9PScsIHF1ZXJ5UGFyYW1bMF0ua2V5d29yZClcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAocXVlcnlQYXJhbS5sZW5ndGggPT0gMikge1xuICAgICAgICBxdWVyeVJlc3VsdCA9IHF1ZXJ5KFxuICAgICAgICAgIGNvbGxlY3Rpb24oZGIsICdta3R1cmtkYXRhJyksXG4gICAgICAgICAgd2hlcmUocXVlcnlQYXJhbVswXS5maWVsZCwgJz09JywgcXVlcnlQYXJhbVswXS5rZXl3b3JkKSxcbiAgICAgICAgICB3aGVyZShxdWVyeVBhcmFtWzFdLmZpZWxkLCAnPT0nLCBxdWVyeVBhcmFtWzFdLmtleXdvcmQpXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKHF1ZXJ5UGFyYW0ubGVuZ3RoID09IDMpIHtcbiAgICAgICAgcXVlcnlSZXN1bHQgPSBxdWVyeShcbiAgICAgICAgICBjb2xsZWN0aW9uKGRiLCAnbWt0dXJrZGF0YScpLFxuICAgICAgICAgIHdoZXJlKHF1ZXJ5UGFyYW1bMF0uZmllbGQsICc9PScsIHF1ZXJ5UGFyYW1bMF0ua2V5d29yZCksXG4gICAgICAgICAgd2hlcmUocXVlcnlQYXJhbVsxXS5maWVsZCwgJz09JywgcXVlcnlQYXJhbVsxXS5rZXl3b3JkKSxcbiAgICAgICAgICB3aGVyZShxdWVyeVBhcmFtWzJdLmZpZWxkLCAnPT0nLCBxdWVyeVBhcmFtWzJdLmtleXdvcmQpXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChxdWVyeVBhcmFtLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcXVlcnlTdHIgPSBcImRiLmNvbGxlY3Rpb24oJ21rdHVya2RhdGEnKVwiICsgbWtxLm1rcXVlcnkocXVlcnlQYXJhbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdObyBxdWVyeSBhcmd1bWVudHMhJyk7XG4gICAgICAgIGFsZXJ0KCdObyBxdWVyeSBhcmd1bWVudHMhJyk7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ29iamVjdHMnOlxuICAgICAgaWYgKGswKSB7XG4gICAgICAgIHF1ZXJ5UGFyYW0ucHVzaCh7IGZpZWxkOiBmaWVsZCwga2V5d29yZDogazAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdObyBxdWVyeSBhcmd1bWVudHMhJyk7XG4gICAgICAgIGFsZXJ0KCdObyBxdWVyeSBhcmd1bWVudHMhJyk7XG4gICAgICB9XG4gICAgICBxdWVyeVN0ciA9IFwiZGIuY29sbGVjdGlvbignb2JqZWN0cycpXCIgKyBta3EubWtxdWVyeShxdWVyeVBhcmFtKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnbWtzY2FsZSc6XG4gICAgICBpZiAoazApIHtcbiAgICAgICAgcXVlcnlQYXJhbS5wdXNoKHsgZmllbGQ6ICdOYW1lJywga2V5d29yZDogazAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoazEpIHtcbiAgICAgICAgcXVlcnlQYXJhbS5wdXNoKHsgZmllbGQ6ICdDdXJyZW50RGF0ZScsIGtleXdvcmQ6IGsxIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAocXVlcnlQYXJhbS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHF1ZXJ5U3RyID0gXCJkYi5jb2xsZWN0aW9uKCdta3NjYWxlJylcIiArIG1rcS5ta3F1ZXJ5KHF1ZXJ5UGFyYW0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTm8gcXVlcnkgYXJndW1lbnRzIScpO1xuICAgICAgICBhbGVydCgnTm8gcXVlcnkgYXJndW1lbnRzIScpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdleWVkYXRhJzpcbiAgICAgIGlmIChrMCAmJiBrMSkge1xuICAgICAgICBxdWVyeVN0ciA9IG1rcS5ta2JxdWVyeSgnZXllZGF0YScsIGswLCBrMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdJbmNvcnJlY3QgcXVlcnk6IE5lZWQgdHdvIHF1ZXJ5IGFyZ3VtZW50cyEnKTtcbiAgICAgICAgYWxlcnQoJ0luY29ycmVjdCBxdWVyeTogTmVlZCB0d28gcXVlcnkgYXJndW1lbnRzIScpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cblxuICBpZiAocXVlcnlTdHIuc3RhcnRzV2l0aCgncXVlcnknKSkge1xuICAgIGNvbnNvbGUubG9nKHF1ZXJ5U3RyKTtcbiAgICAvLyBxdWVyeSA9IGV2YWwocXVlcnlTdHIpO1xuXG4gICAgbGV0IHJldCA9IG1rcS5kZWNvZGVRdWVyeShxdWVyeVJlc3VsdCEpO1xuICAgIHJldC50aGVuKChkb2NzKSA9PiB7XG4gICAgICBta2YubGlzdEZpcmVzdG9yZURvY3MoZG9jcywgcXJ5TG9jISk7XG4gICAgICBpZiAocmZpZFRvZ2dsZS5jaGVja2VkKSB7XG4gICAgICAgIG1rZi5maW5kZXIuc2VsZWN0Um93KCk7XG4gICAgICAgIG1rZi5ta2UuZGlzcGxheUZpcmViYXNlVGV4dEZpbGUobWtmLmZpbmRlci5nZXREYXRhKClbMF0sICdtYXJtb3NldHMnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIGlmIChxdWVyeVN0ci5zdGFydHNXaXRoKCdTRUxFQ1QgKicpKSB7XG4gICAgbGV0IHRlc3QgPSBta3EuZGVjb2RlQmlnUXVlcnkocXVlcnlTdHIpO1xuICAgIGNvbnNvbGUubG9nKHRlc3QpO1xuICAgIHRlc3QudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLmRhdGEpKSB7XG4gICAgICAgIG1rZi5saXN0QmlnUXVlcnlUYWJsZShkYXRhLmRhdGEsIHFyeUxvYywgazAhKTtcbiAgICAgIH1cbiAgICAgIC8vIG1rZi5saXN0QmlnUXVlcnlUYWJsZShkYXRhLmRhdGEsIHFyeUxvYywgazAhKTtcbiAgICB9KTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHJlc2V0UGxhY2Vob2xkZXIoKSB7XG4gIGxldCBrZXl3b3JkSW5wdXRzID0gW1xuICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTElucHV0RWxlbWVudD4oJy5rZXl3b3JkLWlucHV0JyksXG4gIF07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXl3b3JkSW5wdXRzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5d29yZElucHV0c1tpXS5wbGFjZWhvbGRlciA9ICcnO1xuICAgIGtleXdvcmRJbnB1dHNbaV0udmFsdWUgPSAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVFbGVtZW50c0J5Q2xhc3NOYW1lKGNOYW1lOiBzdHJpbmcpIHtcbiAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjTmFtZSk7XG4gIHdoaWxlIChlbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgZWxlbWVudHNbMF0ucGFyZW50Tm9kZT8ucmVtb3ZlQ2hpbGQoZWxlbWVudHNbMF0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRBcHAgfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlLCBUaW1lc3RhbXAgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuaW1wb3J0IHsgTWtlZGl0b3IsIE1rdGhyZWUsIE1raW1hZ2UsIE1rY2hhcnQgfSBmcm9tICcuL21rbWVkaWEnO1xuaW1wb3J0IEZpbGVTYXZlciBmcm9tICdmaWxlLXNhdmVyJztcbmltcG9ydCB7XG4gIEZpcmViYXNlU3RvcmFnZSxcbiAgU3RvcmFnZVJlZmVyZW5jZSxcbiAgZ2V0U3RvcmFnZSxcbiAgcmVmLFxuICBsaXN0QWxsLFxuICBnZXREb3dubG9hZFVSTCxcbiAgZ2V0TWV0YWRhdGEsXG59IGZyb20gJ2ZpcmViYXNlL3N0b3JhZ2UnO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudEV2ZW50TWFwIHtcbiAgICBvblJlbmRlclJlcXVlc3Q6IEN1c3RvbUV2ZW50O1xuICB9XG59XG5cbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKCk7XG5cbmV4cG9ydCBjbGFzcyBNa2ZpbmRlciB7XG4gIGZpbmRlcjogVGFidWxhdG9yO1xuICBta2U6IE1rZWRpdG9yO1xuICBwcmV2aW91c1BhdGg6IHN0cmluZztcbiAgc3RvcmFnZTogRmlyZWJhc2VTdG9yYWdlO1xuICBzdG9yYWdlUmVmOiBTdG9yYWdlUmVmZXJlbmNlO1xuICBiYWNrQnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgZG93bmxvYWRCdG46IEhUTUxCdXR0b25FbGVtZW50O1xuICBta3Q6IE1rdGhyZWU7XG4gIG1raTogTWtpbWFnZTtcbiAgbWtjOiBNa2NoYXJ0O1xuICBudW1JbWdTbGlkZXI6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gIHNob3dJbWFnZXNCdG46IEhUTUxCdXR0b25FbGVtZW50O1xuICByZW5kZXJCdG46IEhUTUxCdXR0b25FbGVtZW50O1xuICBzZWxlY3RlZEltYWdlczogYW55W107XG4gIHBhdGhOYW1lOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZpbmRlciA9IG5ldyBUYWJ1bGF0b3IoJyNmaW5kZXInKTtcbiAgICB0aGlzLnByZXZpb3VzUGF0aCA9ICcnO1xuICAgIHRoaXMuc3RvcmFnZSA9IGdldFN0b3JhZ2UoZ2V0QXBwKCkpO1xuICAgIHRoaXMuc3RvcmFnZVJlZiA9IHJlZih0aGlzLnN0b3JhZ2UpO1xuICAgIHRoaXMuc2VsZWN0ZWRJbWFnZXMgPSBbXTtcblxuICAgIHRoaXMuYmFja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYWNrLWJ0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIHRoaXMuc2hvd0ltYWdlc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnI3Nob3ctaW1hZ2VzLWJ0bidcbiAgICApIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIHRoaXMubnVtSW1nU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcjbnVtLWltYWdlLXNsaWRlcidcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgdGhpcy5kb3dubG9hZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnI2Rvd25sb2FkLWZpbGUnXG4gICAgKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICB0aGlzLnBhdGhOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcjcGF0aC1uYW1lLXNwYW4nXG4gICAgKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcbiAgICB0aGlzLnJlbmRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZW5kZXItYnRuJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cbiAgICB0aGlzLmJhY2tCdG5BY3Rpb24oKTtcbiAgICB0aGlzLnNob3dJbWFnZXNCdG5BY3Rpb24oKTtcbiAgICB0aGlzLm51bUltZ1NsaWRlckFjdGlvbigpO1xuICAgIHRoaXMuZG93bmxvYWRCdG5BY3Rpb24oKTtcbiAgICB0aGlzLnJlZnJlc2hTdG9yYWdlVGFibGUoKTtcblxuICAgIHRoaXMubWt0ID0gbmV3IE1rdGhyZWUoKTtcbiAgICB0aGlzLm1raSA9IG5ldyBNa2ltYWdlKCk7XG4gICAgdGhpcy5ta2UgPSBuZXcgTWtlZGl0b3IoKTtcbiAgICB0aGlzLm1rYyA9IG5ldyBNa2NoYXJ0KCk7XG5cbiAgICB0aGlzLnJlbmRlckJ0bkFjdGlvbigpO1xuICB9XG5cbiAgcHVibGljIGxpc3RGaXJlc3RvcmVEb2NzKGRhdGFBcnI6IGFueVtdLCBkYXRhYmFzZTogc3RyaW5nKSB7XG4gICAgdGhpcy5kaXNwbGF5RmlyZXN0b3JlVGFibGUoZGF0YUFyciwgZGF0YWJhc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJCdG5BY3Rpb24oKSB7XG4gICAgdGhpcy5yZW5kZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignb25SZW5kZXJSZXF1ZXN0JywgKGV2dDogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgIHRoaXMubWt0LmRlc3Ryb3koKTtcbiAgICAgIHRoaXMubWtpLnJlbW92ZUltYWdlcygpO1xuXG4gICAgICB0aGlzLm1rdC5jYW52YXMuc3R5bGUuekluZGV4ID0gJzMnO1xuICAgICAgdGhpcy5ta2UuZWRpdG9yRGl2RWxlbWVudC5zdHlsZS56SW5kZXggPSAnMic7XG4gICAgICB0aGlzLm1raS5pbWdDYW52YXNEaXYuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgICAgdGhpcy5ta3QucmVuZGVyQ3ViZU1hcChldnQuZGV0YWlsKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZGlzcGxheUZpcmVzdG9yZVRhYmxlKGRhdGFBcnI6IGFueVtdLCBkYXRhYmFzZTogc3RyaW5nKSB7XG4gICAgZGF0YUFyciA9IHRoaXMudGltZXN0YW1wVG9EYXRlKGRhdGFBcnIpO1xuICAgIHRoaXMubWtlLm1ha2VBY3RpdmVCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLm1rZS5zdG9yZVBhcmFtQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICBpZiAoZGF0YWJhc2UgPT0gJ21hcm1vc2V0cycpIHtcbiAgICAgIHRoaXMuZmluZGVyLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMucGF0aE5hbWUuaW5uZXJUZXh0ID0gJ21hcm1vc2V0cyc7XG4gICAgICB0aGlzLmZpbmRlciA9IG5ldyBUYWJ1bGF0b3IoJyNmaW5kZXInLCB7XG4gICAgICAgIGRhdGE6IGRhdGFBcnIsXG4gICAgICAgIGluZGV4OiAnbmFtZScsXG4gICAgICAgIGxheW91dDogJ2ZpdENvbHVtbnMnLFxuICAgICAgICBpbml0aWFsU29ydDogW3sgY29sdW1uOiAnbmFtZScsIGRpcjogJ2FzYycgfV0sXG4gICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogXCI8aW5wdXQgaWQ9J3NlbGVjdC1hbGwnIHR5cGU9J2NoZWNrYm94Jy8+XCIsXG4gICAgICAgICAgICB3aWR0aDogMTUsXG4gICAgICAgICAgICBoZWFkZXJTb3J0OiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgdGl0bGU6ICdOYW1lJywgZmllbGQ6ICduYW1lJyB9LFxuICAgICAgICAgIHsgdGl0bGU6ICdTZXgnLCBmaWVsZDogJ3NleCcgfSxcbiAgICAgICAgICB7IHRpdGxlOiAnRE9CJywgZmllbGQ6ICdiaXJ0aGRhdGUnIH0sXG4gICAgICAgICAgeyB0aXRsZTogJ1JGSUQnLCBmaWVsZDogJ3JmaWQnIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHNlbGVjdGFibGU6IHRydWUsXG4gICAgICAgIHNlbGVjdGFibGVSYW5nZU1vZGU6ICdjbGljaycsXG4gICAgICAgIHJvd0NsaWNrOiAoZXZlbnQsIHJvdykgPT4ge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHRoaXMubWt0LmRlc3Ryb3koKTtcbiAgICAgICAgICB0aGlzLm1raS5yZW1vdmVJbWFnZXMoKTtcblxuICAgICAgICAgIHRoaXMubWtlLmVkaXRvckRpdkVsZW1lbnQuc3R5bGUuekluZGV4ID0gJzMnO1xuICAgICAgICAgIHRoaXMubWtpLmltZ0NhbnZhc0Rpdi5zdHlsZS56SW5kZXggPSAnMic7XG4gICAgICAgICAgdGhpcy5ta3QuY2FudmFzLnN0eWxlLnpJbmRleCA9ICcxJztcbiAgICAgICAgICB0aGlzLm1rZS5kaXNwbGF5RmlyZWJhc2VUZXh0RmlsZShyb3cuZ2V0RGF0YSgpLCBkYXRhYmFzZSk7XG4gICAgICAgICAgdGhpcy5ta2MucmVtb3ZlRWxlbWVudHNCeUNsYXNzTmFtZSgnYXhpcy1vcHRpb25zJyk7XG4gICAgICAgICAgdGhpcy5ta2MucG9wdWxhdGVBeGlzRmllbGRzKHJvdy5nZXREYXRhKCkpO1xuICAgICAgICB9LFxuICAgICAgICByb3dUYXA6IChldmVudCwgcm93KSA9PiB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICB0aGlzLm1rdC5kZXN0cm95KCk7XG4gICAgICAgICAgdGhpcy5ta2kucmVtb3ZlSW1hZ2VzKCk7XG5cbiAgICAgICAgICB0aGlzLm1rZS5lZGl0b3JEaXZFbGVtZW50LnN0eWxlLnpJbmRleCA9ICczJztcbiAgICAgICAgICB0aGlzLm1raS5pbWdDYW52YXNEaXYuc3R5bGUuekluZGV4ID0gJzInO1xuICAgICAgICAgIHRoaXMubWt0LmNhbnZhcy5zdHlsZS56SW5kZXggPSAnMSc7XG4gICAgICAgICAgdGhpcy5ta2UuZGlzcGxheUZpcmViYXNlVGV4dEZpbGUocm93LmdldERhdGEoKSwgZGF0YWJhc2UpO1xuICAgICAgICAgIHRoaXMubWtjLnJlbW92ZUVsZW1lbnRzQnlDbGFzc05hbWUoJ2F4aXMtb3B0aW9ucycpO1xuICAgICAgICAgIHRoaXMubWtjLnBvcHVsYXRlQXhpc0ZpZWxkcyhyb3cuZ2V0RGF0YSgpKTtcbiAgICAgICAgfSxcbiAgICAgICAgdGFibGVCdWlsdDogKCkgPT4ge1xuICAgICAgICAgIC8qIHNlbGVjdEFsbEJveCBmdW5jdGlvbiAqL1xuICAgICAgICAgIGxldCBzZWxlY3RBbGxCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJyNzZWxlY3QtYWxsJ1xuICAgICAgICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICBzZWxlY3RBbGxCb3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2KSA9PiB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0QWxsQm94LmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICB0aGlzLmZpbmRlci5zZWxlY3RSb3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuZmluZGVyLmRlc2VsZWN0Um93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGRhdGFiYXNlID09ICdta3R1cmtkYXRhJykge1xuICAgICAgdGhpcy5maW5kZXIuZGVzdHJveSgpO1xuICAgICAgdGhpcy5wYXRoTmFtZS5pbm5lclRleHQgPSAnbWt0dXJrZGF0YSc7XG4gICAgICB0aGlzLmZpbmRlciA9IG5ldyBUYWJ1bGF0b3IoJyNmaW5kZXInLCB7XG4gICAgICAgIGRhdGE6IGRhdGFBcnIsXG4gICAgICAgIGluZGV4OiAnaW5kZXgnLFxuICAgICAgICBsYXlvdXQ6ICdmaXRDb2x1bW5zJyxcbiAgICAgICAgaW5pdGlhbFNvcnQ6IFt7IGNvbHVtbjogJ0FnZW50JywgZGlyOiAnYXNjJyB9XSxcbiAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIjxpbnB1dCBpZD0nc2VsZWN0LWFsbCcgdHlwZT0nY2hlY2tib3gnLz5cIixcbiAgICAgICAgICAgIHdpZHRoOiAxNSxcbiAgICAgICAgICAgIGhlYWRlclNvcnQ6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyB0aXRsZTogJ0FnZW50JywgZmllbGQ6ICdBZ2VudCcgfSxcbiAgICAgICAgICB7IHRpdGxlOiAnRG9jdHlwZScsIGZpZWxkOiAnRG9jdHlwZScgfSxcbiAgICAgICAgICB7IHRpdGxlOiAnQ3VycmVudERhdGUnLCBmaWVsZDogJ0N1cnJlbnREYXRlJyB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnRmlyZXN0b3JlRG9jUm9vdCcsXG4gICAgICAgICAgICBmaWVsZDogJ0ZpcmVzdG9yZURvY1Jvb3QnLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgICAgICAgc2VsZWN0YWJsZVJhbmdlTW9kZTogJ2NsaWNrJyxcbiAgICAgICAgcm93Q2xpY2s6IChldmVudCwgcm93KSA9PiB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgdGhpcy5ta3QuZGVzdHJveSgpO1xuICAgICAgICAgIHRoaXMubWtpLnJlbW92ZUltYWdlcygpO1xuXG4gICAgICAgICAgdGhpcy5ta2UuZWRpdG9yRGl2RWxlbWVudC5zdHlsZS56SW5kZXggPSAnMyc7XG4gICAgICAgICAgdGhpcy5ta2kuaW1nQ2FudmFzRGl2LnN0eWxlLnpJbmRleCA9ICcyJztcbiAgICAgICAgICB0aGlzLm1rdC5jYW52YXMuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgICAgICAgIHRoaXMubWtlLmRpc3BsYXlGaXJlYmFzZVRleHRGaWxlKHJvdy5nZXREYXRhKCksIGRhdGFiYXNlKTtcbiAgICAgICAgfSxcbiAgICAgICAgcm93VGFwOiAoZXZlbnQsIHJvdykgPT4ge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHRoaXMubWt0LmRlc3Ryb3koKTtcbiAgICAgICAgICB0aGlzLm1raS5yZW1vdmVJbWFnZXMoKTtcblxuICAgICAgICAgIHRoaXMubWtlLmVkaXRvckRpdkVsZW1lbnQuc3R5bGUuekluZGV4ID0gJzMnO1xuICAgICAgICAgIHRoaXMubWtpLmltZ0NhbnZhc0Rpdi5zdHlsZS56SW5kZXggPSAnMic7XG4gICAgICAgICAgdGhpcy5ta3QuY2FudmFzLnN0eWxlLnpJbmRleCA9ICcxJztcbiAgICAgICAgICB0aGlzLm1rZS5kaXNwbGF5RmlyZWJhc2VUZXh0RmlsZShyb3cuZ2V0RGF0YSgpLCBkYXRhYmFzZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHRhYmxlQnVpbHQ6ICgpID0+IHtcbiAgICAgICAgICAvKiBzZWxlY3RBbGxCb3ggZnVuY3Rpb24gKi9cbiAgICAgICAgICBsZXQgc2VsZWN0QWxsQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICcjc2VsZWN0LWFsbCdcbiAgICAgICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgc2VsZWN0QWxsQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldikgPT4ge1xuICAgICAgICAgICAgaWYgKHNlbGVjdEFsbEJveC5jaGVja2VkID09IHRydWUpIHtcbiAgICAgICAgICAgICAgdGhpcy5maW5kZXIuc2VsZWN0Um93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmZpbmRlci5kZXNlbGVjdFJvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChkYXRhYmFzZSA9PSAnbWtkYWlseWRhdGEnKSB7XG4gICAgICB0aGlzLmZpbmRlci5kZXN0cm95KCk7XG4gICAgICB0aGlzLnBhdGhOYW1lLmlubmVyVGV4dCA9ICdta2RhaWx5ZGF0YSc7XG4gICAgICB0aGlzLmZpbmRlciA9IG5ldyBUYWJ1bGF0b3IoJyNmaW5kZXInLCB7XG4gICAgICAgIGRhdGE6IGRhdGFBcnIsXG4gICAgICAgIGluZGV4OiAnaW5kZXgnLFxuICAgICAgICBsYXlvdXQ6ICdmaXRDb2x1bW5zJyxcbiAgICAgICAgaW5pdGlhbFNvcnQ6IFt7IGNvbHVtbjogJ2FnZW50JywgZGlyOiAnYXNjJyB9XSxcbiAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIjxpbnB1dCBpZD0nc2VsZWN0LWFsbCcgdHlwZT0nY2hlY2tib3gnLz5cIixcbiAgICAgICAgICAgIHdpZHRoOiAxNSxcbiAgICAgICAgICAgIGhlYWRlclNvcnQ6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyB0aXRsZTogJ0FnZW50JywgZmllbGQ6ICdhZ2VudCcgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgICAgICAgc2VsZWN0YWJsZVJhbmdlTW9kZTogJ2NsaWNrJyxcbiAgICAgICAgcm93Q2xpY2s6IChldmVudCwgcm93KSA9PiB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgdGhpcy5ta3QuZGVzdHJveSgpO1xuICAgICAgICAgIHRoaXMubWtpLnJlbW92ZUltYWdlcygpO1xuXG4gICAgICAgICAgdGhpcy5ta2UuZWRpdG9yRGl2RWxlbWVudC5zdHlsZS56SW5kZXggPSAnMyc7XG4gICAgICAgICAgdGhpcy5ta2kuaW1nQ2FudmFzRGl2LnN0eWxlLnpJbmRleCA9ICcyJztcbiAgICAgICAgICB0aGlzLm1rdC5jYW52YXMuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgICAgICAgIHRoaXMubWtlLmRpc3BsYXlGaXJlYmFzZVRleHRGaWxlKHJvdy5nZXREYXRhKCksIGRhdGFiYXNlKTtcbiAgICAgICAgfSxcbiAgICAgICAgcm93VGFwOiAoZXZlbnQsIHJvdykgPT4ge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHRoaXMubWt0LmRlc3Ryb3koKTtcbiAgICAgICAgICB0aGlzLm1raS5yZW1vdmVJbWFnZXMoKTtcblxuICAgICAgICAgIHRoaXMubWtlLmVkaXRvckRpdkVsZW1lbnQuc3R5bGUuekluZGV4ID0gJzMnO1xuICAgICAgICAgIHRoaXMubWtpLmltZ0NhbnZhc0Rpdi5zdHlsZS56SW5kZXggPSAnMic7XG4gICAgICAgICAgdGhpcy5ta3QuY2FudmFzLnN0eWxlLnpJbmRleCA9ICcxJztcbiAgICAgICAgICB0aGlzLm1rZS5kaXNwbGF5RmlyZWJhc2VUZXh0RmlsZShyb3cuZ2V0RGF0YSgpLCBkYXRhYmFzZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHRhYmxlQnVpbHQ6ICgpID0+IHtcbiAgICAgICAgICAvKiBzZWxlY3RBbGxCb3ggZnVuY3Rpb24gKi9cbiAgICAgICAgICBsZXQgc2VsZWN0QWxsQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICcjc2VsZWN0LWFsbCdcbiAgICAgICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgc2VsZWN0QWxsQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldikgPT4ge1xuICAgICAgICAgICAgaWYgKHNlbGVjdEFsbEJveC5jaGVja2VkID09IHRydWUpIHtcbiAgICAgICAgICAgICAgdGhpcy5maW5kZXIuc2VsZWN0Um93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmZpbmRlci5kZXNlbGVjdFJvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChkYXRhYmFzZSA9PSAnb2JqZWN0cycpIHtcbiAgICAgIHRoaXMuZmluZGVyLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMucGF0aE5hbWUuaW5uZXJUZXh0ID0gJ29iamVjdHMnO1xuICAgICAgdGhpcy5maW5kZXIgPSBuZXcgVGFidWxhdG9yKCcjZmluZGVyJywge1xuICAgICAgICBkYXRhOiBkYXRhQXJyLFxuICAgICAgICBpbmRleDogJ2RvY25hbWUnLFxuICAgICAgICBsYXlvdXQ6ICdmaXRDb2x1bW5zJyxcbiAgICAgICAgaW5pdGlhbFNvcnQ6IFt7IGNvbHVtbjogJ2lkZW50aXR5JywgZGlyOiAnYXNjJyB9XSxcbiAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIjxpbnB1dCBpZD0nc2VsZWN0LWFsbCcgdHlwZT0nY2hlY2tib3gnLz5cIixcbiAgICAgICAgICAgIHdpZHRoOiAxNSxcbiAgICAgICAgICAgIGhlYWRlclNvcnQ6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyB0aXRsZTogJ0lkZW50aXR5JywgZmllbGQ6ICdpZGVudGl0eScgfSxcbiAgICAgICAgICB7IHRpdGxlOiAnTWVzaCcsIGZpZWxkOiAnbWVzaCcgfSxcbiAgICAgICAgICB7IHRpdGxlOiAnTm91bicsIGZpZWxkOiAnbm91bicgfSxcbiAgICAgICAgICB7IHRpdGxlOiAnTWVzaGZpbGUnLCBmaWVsZDogJ21lc2hmaWxlJyB9LFxuICAgICAgICAgIHsgdGl0bGU6ICdNZXNoZmlsZVBhdGgnLCBmaWVsZDogJ21lc2hmaWxlcGF0aCcgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgICAgICAgc2VsZWN0YWJsZVJhbmdlTW9kZTogJ2NsaWNrJyxcbiAgICAgICAgcm93Q2xpY2s6IChldmVudCwgcm93KSA9PiB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgdGhpcy5ta3QuZGVzdHJveSgpO1xuICAgICAgICAgIHRoaXMubWtpLnJlbW92ZUltYWdlcygpO1xuXG4gICAgICAgICAgdGhpcy5ta2UuZWRpdG9yRGl2RWxlbWVudC5zdHlsZS56SW5kZXggPSAnMyc7XG4gICAgICAgICAgdGhpcy5ta2kuaW1nQ2FudmFzRGl2LnN0eWxlLnpJbmRleCA9ICcyJztcbiAgICAgICAgICB0aGlzLm1rdC5jYW52YXMuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgICAgICAgIHRoaXMubWtlLmRpc3BsYXlGaXJlYmFzZVRleHRGaWxlKHJvdy5nZXREYXRhKCksIGRhdGFiYXNlKTtcbiAgICAgICAgfSxcbiAgICAgICAgcm93VGFwOiAoZXZlbnQsIHJvdykgPT4ge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHRoaXMubWt0LmRlc3Ryb3koKTtcbiAgICAgICAgICB0aGlzLm1raS5yZW1vdmVJbWFnZXMoKTtcblxuICAgICAgICAgIHRoaXMubWtlLmVkaXRvckRpdkVsZW1lbnQuc3R5bGUuekluZGV4ID0gJzMnO1xuICAgICAgICAgIHRoaXMubWtpLmltZ0NhbnZhc0Rpdi5zdHlsZS56SW5kZXggPSAnMic7XG4gICAgICAgICAgdGhpcy5ta3QuY2FudmFzLnN0eWxlLnpJbmRleCA9ICcxJztcbiAgICAgICAgICB0aGlzLm1rZS5kaXNwbGF5RmlyZWJhc2VUZXh0RmlsZShyb3cuZ2V0RGF0YSgpLCBkYXRhYmFzZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHRhYmxlQnVpbHQ6ICgpID0+IHtcbiAgICAgICAgICAvKiBzZWxlY3RBbGxCb3ggZnVuY3Rpb24gKi9cbiAgICAgICAgICBsZXQgc2VsZWN0QWxsQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICcjc2VsZWN0LWFsbCdcbiAgICAgICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgc2VsZWN0QWxsQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldikgPT4ge1xuICAgICAgICAgICAgaWYgKHNlbGVjdEFsbEJveC5jaGVja2VkID09IHRydWUpIHtcbiAgICAgICAgICAgICAgdGhpcy5maW5kZXIuc2VsZWN0Um93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmZpbmRlci5kZXNlbGVjdFJvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChkYXRhYmFzZSA9PSAnZGV2aWNlcycpIHtcbiAgICAgIHRoaXMuZmluZGVyLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMucGF0aE5hbWUuaW5uZXJUZXh0ID0gJ2RldmljZXMnO1xuICAgICAgdGhpcy5maW5kZXIgPSBuZXcgVGFidWxhdG9yKCcjZmluZGVyJywge1xuICAgICAgICBkYXRhOiBkYXRhQXJyLFxuICAgICAgICBpbmRleDogJ2RvY25hbWUnLFxuICAgICAgICBsYXlvdXQ6ICdmaXRDb2x1bW5zJyxcbiAgICAgICAgaW5pdGlhbFNvcnQ6IFt7IGNvbHVtbjogJ21vZGVsJywgZGlyOiAnYXNjJyB9XSxcbiAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIjxpbnB1dCBpZD0nc2VsZWN0LWFsbCcgdHlwZT0nY2hlY2tib3gnLz5cIixcbiAgICAgICAgICAgIHdpZHRoOiAxNSxcbiAgICAgICAgICAgIGhlYWRlclNvcnQ6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyB0aXRsZTogJ01vZGVsJywgZmllbGQ6ICdtb2RlbCcgfSxcbiAgICAgICAgICB7IHRpdGxlOiAnQnJhbmQnLCBmaWVsZDogJ2JyYW5kJyB9LFxuICAgICAgICAgIHsgdGl0bGU6ICdUeXBlJywgZmllbGQ6ICd0eXBlJyB9LFxuICAgICAgICAgIHsgdGl0bGU6ICdQUEknLCBmaWVsZDogJ3BwaScgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgICAgICAgc2VsZWN0YWJsZVJhbmdlTW9kZTogJ2NsaWNrJyxcbiAgICAgICAgcm93Q2xpY2s6IChldmVudCwgcm93KSA9PiB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgdGhpcy5ta3QuZGVzdHJveSgpO1xuICAgICAgICAgIHRoaXMubWtpLnJlbW92ZUltYWdlcygpO1xuXG4gICAgICAgICAgdGhpcy5ta2UuZWRpdG9yRGl2RWxlbWVudC5zdHlsZS56SW5kZXggPSAnMyc7XG4gICAgICAgICAgdGhpcy5ta2kuaW1nQ2FudmFzRGl2LnN0eWxlLnpJbmRleCA9ICcyJztcbiAgICAgICAgICB0aGlzLm1rdC5jYW52YXMuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgICAgICAgIHRoaXMubWtlLmRpc3BsYXlGaXJlYmFzZVRleHRGaWxlKHJvdy5nZXREYXRhKCksIGRhdGFiYXNlKTtcbiAgICAgICAgfSxcbiAgICAgICAgcm93VGFwOiAoZXZlbnQsIHJvdykgPT4ge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHRoaXMubWt0LmRlc3Ryb3koKTtcbiAgICAgICAgICB0aGlzLm1raS5yZW1vdmVJbWFnZXMoKTtcblxuICAgICAgICAgIHRoaXMubWtlLmVkaXRvckRpdkVsZW1lbnQuc3R5bGUuekluZGV4ID0gJzMnO1xuICAgICAgICAgIHRoaXMubWtpLmltZ0NhbnZhc0Rpdi5zdHlsZS56SW5kZXggPSAnMic7XG4gICAgICAgICAgdGhpcy5ta3QuY2FudmFzLnN0eWxlLnpJbmRleCA9ICcxJztcbiAgICAgICAgICB0aGlzLm1rZS5kaXNwbGF5RmlyZWJhc2VUZXh0RmlsZShyb3cuZ2V0RGF0YSgpLCBkYXRhYmFzZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHRhYmxlQnVpbHQ6ICgpID0+IHtcbiAgICAgICAgICAvKiBzZWxlY3RBbGxCb3ggZnVuY3Rpb24gKi9cbiAgICAgICAgICBsZXQgc2VsZWN0QWxsQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICcjc2VsZWN0LWFsbCdcbiAgICAgICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgc2VsZWN0QWxsQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldikgPT4ge1xuICAgICAgICAgICAgaWYgKHNlbGVjdEFsbEJveC5jaGVja2VkID09IHRydWUpIHtcbiAgICAgICAgICAgICAgdGhpcy5maW5kZXIuc2VsZWN0Um93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmZpbmRlci5kZXNlbGVjdFJvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChkYXRhYmFzZSA9PSAnZXllY2FsaWJyYXRpb25zJykge1xuICAgICAgdGhpcy5maW5kZXIuZGVzdHJveSgpO1xuICAgICAgdGhpcy5wYXRoTmFtZS5pbm5lclRleHQgPSAnZXllY2FsaWJyYXRpb25zJztcbiAgICAgIHRoaXMuZmluZGVyID0gbmV3IFRhYnVsYXRvcignI2ZpbmRlcicsIHtcbiAgICAgICAgZGF0YTogZGF0YUFycixcbiAgICAgICAgaW5kZXg6ICdUYXNrZG9jJyxcbiAgICAgICAgbGF5b3V0OiAnZml0Q29sdW1ucycsXG4gICAgICAgIGluaXRpYWxTb3J0OiBbeyBjb2x1bW46ICdBZ2VudCcsIGRpcjogJ2FzYycgfV0sXG4gICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogXCI8aW5wdXQgaWQ9J3NlbGVjdC1hbGwnIHR5cGU9J2NoZWNrYm94Jy8+XCIsXG4gICAgICAgICAgICB3aWR0aDogMTUsXG4gICAgICAgICAgICBoZWFkZXJTb3J0OiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgdGl0bGU6ICdBZ2VudCcsIGZpZWxkOiAnQWdlbnQnIH0sXG4gICAgICAgICAgeyB0aXRsZTogJ0N1cnJlbnREYXRlJywgZmllbGQ6ICdDdXJyZW50RGF0ZScgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgICAgICAgc2VsZWN0YWJsZVJhbmdlTW9kZTogJ2NsaWNrJyxcbiAgICAgICAgcm93Q2xpY2s6IChldmVudCwgcm93KSA9PiB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgdGhpcy5ta3QuZGVzdHJveSgpO1xuICAgICAgICAgIHRoaXMubWtpLnJlbW92ZUltYWdlcygpO1xuXG4gICAgICAgICAgdGhpcy5ta2UuZWRpdG9yRGl2RWxlbWVudC5zdHlsZS56SW5kZXggPSAnMyc7XG4gICAgICAgICAgdGhpcy5ta2kuaW1nQ2FudmFzRGl2LnN0eWxlLnpJbmRleCA9ICcyJztcbiAgICAgICAgICB0aGlzLm1rdC5jYW52YXMuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgICAgICAgIHRoaXMubWtlLmRpc3BsYXlGaXJlYmFzZVRleHRGaWxlKHJvdy5nZXREYXRhKCksIGRhdGFiYXNlKTtcbiAgICAgICAgfSxcbiAgICAgICAgcm93VGFwOiAoZXZlbnQsIHJvdykgPT4ge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHRoaXMubWt0LmRlc3Ryb3koKTtcbiAgICAgICAgICB0aGlzLm1raS5yZW1vdmVJbWFnZXMoKTtcblxuICAgICAgICAgIHRoaXMubWtlLmVkaXRvckRpdkVsZW1lbnQuc3R5bGUuekluZGV4ID0gJzMnO1xuICAgICAgICAgIHRoaXMubWtpLmltZ0NhbnZhc0Rpdi5zdHlsZS56SW5kZXggPSAnMic7XG4gICAgICAgICAgdGhpcy5ta3QuY2FudmFzLnN0eWxlLnpJbmRleCA9ICcxJztcbiAgICAgICAgICB0aGlzLm1rZS5kaXNwbGF5RmlyZWJhc2VUZXh0RmlsZShyb3cuZ2V0RGF0YSgpLCBkYXRhYmFzZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHRhYmxlQnVpbHQ6ICgpID0+IHtcbiAgICAgICAgICAvKiBzZWxlY3RBbGxCb3ggZnVuY3Rpb24gKi9cbiAgICAgICAgICBsZXQgc2VsZWN0QWxsQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICcjc2VsZWN0LWFsbCdcbiAgICAgICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgc2VsZWN0QWxsQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldikgPT4ge1xuICAgICAgICAgICAgaWYgKHNlbGVjdEFsbEJveC5jaGVja2VkID09IHRydWUpIHtcbiAgICAgICAgICAgICAgdGhpcy5maW5kZXIuc2VsZWN0Um93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmZpbmRlci5kZXNlbGVjdFJvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChkYXRhYmFzZSA9PSAnbWtzY2FsZScpIHtcbiAgICAgIHRoaXMuZmluZGVyLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMucGF0aE5hbWUuaW5uZXJUZXh0ID0gJ21rc2NhbGUnO1xuICAgICAgdGhpcy5maW5kZXIgPSBuZXcgVGFidWxhdG9yKCcjZmluZGVyJywge1xuICAgICAgICBkYXRhOiBkYXRhQXJyLFxuICAgICAgICBpbmRleDogJ0RvY25hbWUnLFxuICAgICAgICBsYXlvdXQ6ICdmaXRDb2x1bW5zJyxcbiAgICAgICAgaW5pdGlhbFNvcnQ6IFt7IGNvbHVtbjogJ0N1cnJlbnREYXRlJywgZGlyOiAnYXNjJyB9XSxcbiAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIjxpbnB1dCBpZD0nc2VsZWN0LWFsbCcgdHlwZT0nY2hlY2tib3gnLz5cIixcbiAgICAgICAgICAgIHdpZHRoOiAxNSxcbiAgICAgICAgICAgIGhlYWRlclNvcnQ6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyB0aXRsZTogJ05hbWUnLCBmaWVsZDogJ05hbWUnIH0sXG4gICAgICAgICAgeyB0aXRsZTogJ0N1cnJlbnREYXRlJywgZmllbGQ6ICdDdXJyZW50RGF0ZScgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgICAgICAgc2VsZWN0YWJsZVJhbmdlTW9kZTogJ2NsaWNrJyxcbiAgICAgICAgcm93Q2xpY2s6IChldmVudCwgcm93KSA9PiB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgdGhpcy5ta3QuZGVzdHJveSgpO1xuICAgICAgICAgIHRoaXMubWtpLnJlbW92ZUltYWdlcygpO1xuXG4gICAgICAgICAgdGhpcy5ta2UuZWRpdG9yRGl2RWxlbWVudC5zdHlsZS56SW5kZXggPSAnMyc7XG4gICAgICAgICAgdGhpcy5ta2kuaW1nQ2FudmFzRGl2LnN0eWxlLnpJbmRleCA9ICcyJztcbiAgICAgICAgICB0aGlzLm1rdC5jYW52YXMuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgICAgICAgIHRoaXMubWtlLmRpc3BsYXlGaXJlYmFzZVRleHRGaWxlKHJvdy5nZXREYXRhKCksIGRhdGFiYXNlKTtcbiAgICAgICAgICB0aGlzLm1rYy5wb3B1bGF0ZUF4aXNGaWVsZHMocm93LmdldERhdGEoKSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJvd1RhcDogKGV2ZW50LCByb3cpID0+IHtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB0aGlzLm1rdC5kZXN0cm95KCk7XG4gICAgICAgICAgdGhpcy5ta2kucmVtb3ZlSW1hZ2VzKCk7XG5cbiAgICAgICAgICB0aGlzLm1rZS5lZGl0b3JEaXZFbGVtZW50LnN0eWxlLnpJbmRleCA9ICczJztcbiAgICAgICAgICB0aGlzLm1raS5pbWdDYW52YXNEaXYuc3R5bGUuekluZGV4ID0gJzInO1xuICAgICAgICAgIHRoaXMubWt0LmNhbnZhcy5zdHlsZS56SW5kZXggPSAnMSc7XG4gICAgICAgICAgdGhpcy5ta2UuZGlzcGxheUZpcmViYXNlVGV4dEZpbGUocm93LmdldERhdGEoKSwgZGF0YWJhc2UpO1xuICAgICAgICAgIHRoaXMubWtjLnBvcHVsYXRlQXhpc0ZpZWxkcyhyb3cuZ2V0RGF0YSgpKTtcbiAgICAgICAgfSxcbiAgICAgICAgdGFibGVCdWlsdDogKCkgPT4ge1xuICAgICAgICAgIC8qIHNlbGVjdEFsbEJveCBmdW5jdGlvbiAqL1xuICAgICAgICAgIGxldCBzZWxlY3RBbGxCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJyNzZWxlY3QtYWxsJ1xuICAgICAgICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICBzZWxlY3RBbGxCb3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2KSA9PiB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0QWxsQm94LmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICB0aGlzLmZpbmRlci5zZWxlY3RSb3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuZmluZGVyLmRlc2VsZWN0Um93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGRhdGFiYXNlID09PSAnbXR1cmtoaXRzJykge1xuICAgICAgdGhpcy5maW5kZXIuZGVzdHJveSgpO1xuICAgICAgdGhpcy5wYXRoTmFtZS5pbm5lclRleHQgPSAnbXR1cmtoaXRzJztcbiAgICAgIHRoaXMuZmluZGVyID0gbmV3IFRhYnVsYXRvcignI2ZpbmRlcicsIHtcbiAgICAgICAgZGF0YTogZGF0YUFycixcbiAgICAgICAgaW5kZXg6ICdoaXRJZCcsXG4gICAgICAgIGxheW91dDogJ2ZpdENvbHVtbnMnLFxuICAgICAgICBpbml0aWFsU29ydDogW3sgY29sdW1uOiAnaGl0SWQnLCBkaXI6ICdhc2MnIH1dLFxuICAgICAgICBjb2x1bW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiPGlucHV0IGlkPSdzZWxlY3QtYWxsJyB0eXBlPSdjaGVja2JveCcvPlwiLFxuICAgICAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICAgICAgaGVhZGVyU29ydDogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IHRpdGxlOiAnSElUIElEJywgZmllbGQ6ICdoaXRJZCcgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgICAgICAgc2VsZWN0YWJsZVJhbmdlTW9kZTogJ2NsaWNrJyxcbiAgICAgICAgcm93Q2xpY2s6IChldmVudCwgcm93KSA9PiB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgdGhpcy5ta3QuZGVzdHJveSgpO1xuICAgICAgICAgIHRoaXMubWtpLnJlbW92ZUltYWdlcygpO1xuXG4gICAgICAgICAgdGhpcy5ta2UuZWRpdG9yRGl2RWxlbWVudC5zdHlsZS56SW5kZXggPSAnMyc7XG4gICAgICAgICAgdGhpcy5ta2kuaW1nQ2FudmFzRGl2LnN0eWxlLnpJbmRleCA9ICcyJztcbiAgICAgICAgICB0aGlzLm1rdC5jYW52YXMuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgICAgICAgIHRoaXMubWtlLmRpc3BsYXlGaXJlYmFzZVRleHRGaWxlKHJvdy5nZXREYXRhKCksIGRhdGFiYXNlKTtcbiAgICAgICAgfSxcbiAgICAgICAgcm93VGFwOiAoZXZlbnQsIHJvdykgPT4ge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHRoaXMubWt0LmRlc3Ryb3koKTtcbiAgICAgICAgICB0aGlzLm1raS5yZW1vdmVJbWFnZXMoKTtcblxuICAgICAgICAgIHRoaXMubWtlLmVkaXRvckRpdkVsZW1lbnQuc3R5bGUuekluZGV4ID0gJzMnO1xuICAgICAgICAgIHRoaXMubWtpLmltZ0NhbnZhc0Rpdi5zdHlsZS56SW5kZXggPSAnMic7XG4gICAgICAgICAgdGhpcy5ta3QuY2FudmFzLnN0eWxlLnpJbmRleCA9ICcxJztcbiAgICAgICAgICB0aGlzLm1rZS5kaXNwbGF5RmlyZWJhc2VUZXh0RmlsZShyb3cuZ2V0RGF0YSgpLCBkYXRhYmFzZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHRhYmxlQnVpbHQ6ICgpID0+IHtcbiAgICAgICAgICAvKiBzZWxlY3RBbGxCb3ggZnVuY3Rpb24gKi9cbiAgICAgICAgICBsZXQgc2VsZWN0QWxsQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICcjc2VsZWN0LWFsbCdcbiAgICAgICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgc2VsZWN0QWxsQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldikgPT4ge1xuICAgICAgICAgICAgaWYgKHNlbGVjdEFsbEJveC5jaGVja2VkID09IHRydWUpIHtcbiAgICAgICAgICAgICAgdGhpcy5maW5kZXIuc2VsZWN0Um93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmZpbmRlci5kZXNlbGVjdFJvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChkYXRhYmFzZSA9PT0gJ210dXJrdXNlcnMnKSB7XG4gICAgICB0aGlzLmZpbmRlci5kZXN0cm95KCk7XG4gICAgICB0aGlzLnBhdGhOYW1lLmlubmVyVGV4dCA9ICdtdHVya3VzZXJzJztcbiAgICAgIHRoaXMuZmluZGVyID0gbmV3IFRhYnVsYXRvcignI2ZpbmRlcicsIHtcbiAgICAgICAgZGF0YTogZGF0YUFycixcbiAgICAgICAgaW5kZXg6ICd3b3JrZXJJZCcsXG4gICAgICAgIGxheW91dDogJ2ZpdENvbHVtbnMnLFxuICAgICAgICBpbml0aWFsU29ydDogW3sgY29sdW1uOiAnd29ya2VySWQnLCBkaXI6ICdhc2MnIH1dLFxuICAgICAgICBjb2x1bW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiPGlucHV0IGlkPSdzZWxlY3QtYWxsJyB0eXBlPSdjaGVja2JveCcvPlwiLFxuICAgICAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICAgICAgaGVhZGVyU29ydDogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IHRpdGxlOiAnV29ya2VyIElEJywgZmllbGQ6ICd3b3JrZXJJZCcgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgICAgICAgc2VsZWN0YWJsZVJhbmdlTW9kZTogJ2NsaWNrJyxcbiAgICAgICAgcm93Q2xpY2s6IChldmVudCwgcm93KSA9PiB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgdGhpcy5ta3QuZGVzdHJveSgpO1xuICAgICAgICAgIHRoaXMubWtpLnJlbW92ZUltYWdlcygpO1xuXG4gICAgICAgICAgdGhpcy5ta2UuZWRpdG9yRGl2RWxlbWVudC5zdHlsZS56SW5kZXggPSAnMyc7XG4gICAgICAgICAgdGhpcy5ta2kuaW1nQ2FudmFzRGl2LnN0eWxlLnpJbmRleCA9ICcyJztcbiAgICAgICAgICB0aGlzLm1rdC5jYW52YXMuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgICAgICAgIHRoaXMubWtlLmRpc3BsYXlGaXJlYmFzZVRleHRGaWxlKHJvdy5nZXREYXRhKCksIGRhdGFiYXNlKTtcbiAgICAgICAgfSxcbiAgICAgICAgcm93VGFwOiAoZXZlbnQsIHJvdykgPT4ge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHRoaXMubWt0LmRlc3Ryb3koKTtcbiAgICAgICAgICB0aGlzLm1raS5yZW1vdmVJbWFnZXMoKTtcblxuICAgICAgICAgIHRoaXMubWtlLmVkaXRvckRpdkVsZW1lbnQuc3R5bGUuekluZGV4ID0gJzMnO1xuICAgICAgICAgIHRoaXMubWtpLmltZ0NhbnZhc0Rpdi5zdHlsZS56SW5kZXggPSAnMic7XG4gICAgICAgICAgdGhpcy5ta3QuY2FudmFzLnN0eWxlLnpJbmRleCA9ICcxJztcbiAgICAgICAgICB0aGlzLm1rZS5kaXNwbGF5RmlyZWJhc2VUZXh0RmlsZShyb3cuZ2V0RGF0YSgpLCBkYXRhYmFzZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHRhYmxlQnVpbHQ6ICgpID0+IHtcbiAgICAgICAgICAvKiBzZWxlY3RBbGxCb3ggZnVuY3Rpb24gKi9cbiAgICAgICAgICBsZXQgc2VsZWN0QWxsQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICcjc2VsZWN0LWFsbCdcbiAgICAgICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgc2VsZWN0QWxsQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldikgPT4ge1xuICAgICAgICAgICAgaWYgKHNlbGVjdEFsbEJveC5jaGVja2VkID09IHRydWUpIHtcbiAgICAgICAgICAgICAgdGhpcy5maW5kZXIuc2VsZWN0Um93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmZpbmRlci5kZXNlbGVjdFJvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChkYXRhYmFzZSA9PT0gJ210dXJrZGF0YScpIHtcbiAgICAgIHRoaXMuZmluZGVyLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMucGF0aE5hbWUuaW5uZXJUZXh0ID0gJ210dXJrZGF0YSc7XG4gICAgICB0aGlzLmZpbmRlciA9IG5ldyBUYWJ1bGF0b3IoJyNmaW5kZXInLCB7XG4gICAgICAgIGRhdGE6IGRhdGFBcnIsXG4gICAgICAgIGluZGV4OiAnRG9jbmFtZScsXG4gICAgICAgIGxheW91dDogJ2ZpdENvbHVtbnMnLFxuICAgICAgICBpbml0aWFsU29ydDogW3sgY29sdW1uOiAnRG9jbmFtZScsIGRpcjogJ2FzYycgfV0sXG4gICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogXCI8aW5wdXQgaWQ9J3NlbGVjdC1hbGwnIHR5cGU9J2NoZWNrYm94Jy8+XCIsXG4gICAgICAgICAgICB3aWR0aDogMTUsXG4gICAgICAgICAgICBoZWFkZXJTb3J0OiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgdGl0bGU6ICdEb2NuYW1lJywgZmllbGQ6ICdEb2NuYW1lJyB9LFxuICAgICAgICBdLFxuICAgICAgICBzZWxlY3RhYmxlOiB0cnVlLFxuICAgICAgICBzZWxlY3RhYmxlUmFuZ2VNb2RlOiAnY2xpY2snLFxuICAgICAgICByb3dDbGljazogKGV2ZW50LCByb3cpID0+IHtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB0aGlzLm1rdC5kZXN0cm95KCk7XG4gICAgICAgICAgdGhpcy5ta2kucmVtb3ZlSW1hZ2VzKCk7XG5cbiAgICAgICAgICB0aGlzLm1rZS5lZGl0b3JEaXZFbGVtZW50LnN0eWxlLnpJbmRleCA9ICczJztcbiAgICAgICAgICB0aGlzLm1raS5pbWdDYW52YXNEaXYuc3R5bGUuekluZGV4ID0gJzInO1xuICAgICAgICAgIHRoaXMubWt0LmNhbnZhcy5zdHlsZS56SW5kZXggPSAnMSc7XG4gICAgICAgICAgdGhpcy5ta2UuZGlzcGxheUZpcmViYXNlVGV4dEZpbGUocm93LmdldERhdGEoKSwgZGF0YWJhc2UpO1xuICAgICAgICB9LFxuICAgICAgICByb3dUYXA6IChldmVudCwgcm93KSA9PiB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgdGhpcy5ta3QuZGVzdHJveSgpO1xuICAgICAgICAgIHRoaXMubWtpLnJlbW92ZUltYWdlcygpO1xuXG4gICAgICAgICAgdGhpcy5ta2UuZWRpdG9yRGl2RWxlbWVudC5zdHlsZS56SW5kZXggPSAnMyc7XG4gICAgICAgICAgdGhpcy5ta2kuaW1nQ2FudmFzRGl2LnN0eWxlLnpJbmRleCA9ICcyJztcbiAgICAgICAgICB0aGlzLm1rdC5jYW52YXMuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgICAgICAgIHRoaXMubWtlLmRpc3BsYXlGaXJlYmFzZVRleHRGaWxlKHJvdy5nZXREYXRhKCksIGRhdGFiYXNlKTtcbiAgICAgICAgfSxcbiAgICAgICAgdGFibGVCdWlsdDogKCkgPT4ge1xuICAgICAgICAgIC8qIHNlbGVjdEFsbEJveCBmdW5jdGlvbiAqL1xuICAgICAgICAgIGxldCBzZWxlY3RBbGxCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJyNzZWxlY3QtYWxsJ1xuICAgICAgICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICBzZWxlY3RBbGxCb3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2KSA9PiB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0QWxsQm94LmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICB0aGlzLmZpbmRlci5zZWxlY3RSb3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuZmluZGVyLmRlc2VsZWN0Um93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignV3Jvbmcgb3IgSW52YWxpZCBkYXRhYmFzZSB0cnlpbmcgdG8gYmUgdGFidWxhcml6ZWQnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRpbWVzdGFtcFRvRGF0ZShkYXRhQXJyOiBhbnlbXSkge1xuICAgIGZ1bmN0aW9uIF90aW1lc3RhbXBUb0RhdGUoZWxlbWVudDogVGltZXN0YW1wLCBpZHg6IG51bWJlciwgYXJyOiBhbnlbXSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXJyW2lkeF0gPSBlbGVtZW50LnRvRGF0ZSgpLnRvSlNPTigpO1xuICAgICAgfSBjYXRjaCB7fVxuICAgIH1cblxuICAgIGNvbnNvbGUudGltZSgnVGltZXN0YW1wIENvbnZlcnNpb24nKTtcbiAgICBkYXRhQXJyLmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhkYXRhKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAndGltZXN0YW1wY29udjogZGF0YVtrZXldID0gZGF0YVsnICsga2V5ICsgJ109JyArIGRhdGFba2V5XVxuICAgICAgICApO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhW2tleV0pKSB7XG4gICAgICAgICAgZGF0YVtrZXldLmZvckVhY2goX3RpbWVzdGFtcFRvRGF0ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0RpY3QoZGF0YVtrZXldKSkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkYXRhW2tleV0gPSBkYXRhW2tleV0udG9EYXRlKCkudG9KU09OKCk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKGxldCBrZXkyIG9mIE9iamVjdC5rZXlzKGRhdGFba2V5XSkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGRhdGFba2V5XVtrZXkyXSA9IGRhdGFba2V5XVtrZXkyXS50b0RhdGUoKS50b0pTT04oKTtcbiAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIk5vdCBUaW1lc3RhbXAgT2JqZWN0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBkYXRhW2tleV0gIT0gbnVsbCAmJlxuICAgICAgICAgICF0aGlzLmlzU3RyaW5nKGRhdGFba2V5XSkgJiZcbiAgICAgICAgICAhdGhpcy5pc051bWJlcihkYXRhW2tleV0pXG4gICAgICAgICkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkYXRhW2tleV0gPSBkYXRhW2tleV0udG9EYXRlKCkudG9KU09OKCk7XG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIk5vdCBUaW1lc3RhbXAgT2JqZWN0XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnNvbGUudGltZUVuZCgnVGltZXN0YW1wIENvbnZlcnNpb24nKTtcblxuICAgIHJldHVybiBkYXRhQXJyO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0RpY3QodmFsOiBhbnkpIHtcbiAgICByZXR1cm4gdmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIHZhbC5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0O1xuICB9XG5cbiAgcHJpdmF0ZSBpc1N0cmluZyh2YWw6IGFueSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyB8fCB2YWwuY29uc3RydWN0b3IgPT09IFN0cmluZztcbiAgfVxuXG4gIHByaXZhdGUgaXNOdW1iZXIodmFsOiBhbnkpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBsaXN0U3RvcmFnZUZpbGVzKGZpbGVSZWY6IFN0b3JhZ2VSZWZlcmVuY2UpIHtcbiAgICBmdW5jdGlvbiBmb3JtYXRGaWxlU2l6ZShzaXplOiBudW1iZXIpIHtcbiAgICAgIGxldCB0aHJlc2hvbGQgPSAxMDAwO1xuICAgICAgaWYgKE1hdGguYWJzKHNpemUpIDwgdGhyZXNob2xkKSB7XG4gICAgICAgIHJldHVybiBzaXplICsgJyBCJztcbiAgICAgIH1cblxuICAgICAgbGV0IHVuaXRzID0gWydrQicsICdNQicsICdHQicsICdUQiddO1xuICAgICAgbGV0IHUgPSAtMTtcblxuICAgICAgZG8ge1xuICAgICAgICBzaXplIC89IHRocmVzaG9sZDtcbiAgICAgICAgKyt1O1xuICAgICAgfSB3aGlsZSAoTWF0aC5hYnMoc2l6ZSkgPj0gdGhyZXNob2xkICYmIHUgPCB1bml0cy5sZW5ndGggLSAxKTtcbiAgICAgIHJldHVybiBzaXplLnRvRml4ZWQoMSkgKyAnICcgKyB1bml0c1t1XTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkTWV0YWRhdGEoZmlsZUFycjogYW55KSB7XG4gICAgICBhd2FpdCBnZXRNZXRhZGF0YShmaWxlQXJyKS50aGVuKChtZDogYW55KSA9PiB7XG4gICAgICAgIG1kQXJyLnB1c2goe1xuICAgICAgICAgIG5hbWU6IG1kLm5hbWUsXG4gICAgICAgICAgY29udGVudFR5cGU6IG1kLmNvbnRlbnRUeXBlLFxuICAgICAgICAgIGZ1bGxQYXRoOiBtZC5mdWxsUGF0aCxcbiAgICAgICAgICBzaXplOiBmb3JtYXRGaWxlU2l6ZShtZC5zaXplKSxcbiAgICAgICAgICB0aW1lQ3JlYXRlZDogbWQudGltZUNyZWF0ZWQsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5iYWNrQnRuLmRpc2FibGVkID0gZmlsZVJlZi5mdWxsUGF0aCA9PSAnbWt0dXJrZmlsZXMnID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgaWYgKGZpbGVSZWYuZnVsbFBhdGggPT0gJ21rdHVya2ZpbGVzL3BhcmFtZXRlcmZpbGVzL3BhcmFtc19zdG9yYWdlJykge1xuICAgICAgdGhpcy5ta2Uuc3RvcmVQYXJhbUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGhpcy5ta2UucGFyYW1HZW5CdG5Cb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMubWtlLnN2U2NlbmVCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMubWtlLnJlbmRlckJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGhpcy5ta2UubWFrZUFjdGl2ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICB0aGlzLm1rZS51cGRhdGVCdG4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgdGhpcy5ta2UuYnRuQm94RGl2LnN0eWxlLmdyaWRUZW1wbGF0ZUFyZWFzID0gJ1widXBkYXRlLWJ0biBhY3RpdmUtYnRuXCInO1xuICAgIH0gZWxzZSBpZiAoZmlsZVJlZi5mdWxsUGF0aCA9PSAnbWt0dXJrZmlsZXMvcGFyYW1ldGVyZmlsZXMvc3ViamVjdHMnKSB7XG4gICAgICB0aGlzLm1rZS5tYWtlQWN0aXZlQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLm1rZS5wYXJhbUdlbkJ0bkJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGhpcy5ta2Uuc3ZTY2VuZUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGhpcy5ta2UucmVuZGVyQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLm1rZS51cGRhdGVCdG4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgdGhpcy5ta2Uuc3RvcmVQYXJhbUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICB0aGlzLm1rZS5idG5Cb3hEaXYuc3R5bGUuZ3JpZFRlbXBsYXRlQXJlYXMgPVxuICAgICAgICAnXCJ1cGRhdGUtYnRuIHN0b3JlLXBhcmFtLWJ0blwiJztcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgZmlsZVJlZi5mdWxsUGF0aCA9PSAnbWt0dXJrZmlsZXMvc2NlbmViYWdzL29iamVjdG9tZTNkL3RlbXBsYXRlcydcbiAgICApIHtcbiAgICAgIHRoaXMubWtlLm1ha2VBY3RpdmVCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMubWtlLnN0b3JlUGFyYW1CdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMubWtlLnN2U2NlbmVCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMubWtlLnJlbmRlckJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgLy8gdGhpcy5ta2UuZ2VuQnRuLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgIHRoaXMubWtlLnBhcmFtR2VuQnRuQm94LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgIHRoaXMubWtlLnVwZGF0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICB0aGlzLm1rZS5idG5Cb3hEaXYuc3R5bGUuZ3JpZFRlbXBsYXRlQXJlYXMgPVxuICAgICAgICAnXCJwYXJhbS1nZW4tYnRuLWJveCB1cGRhdGUtYnRuXCInO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBmaWxlUmVmLmZ1bGxQYXRoID09ICdta3R1cmtmaWxlcy9zY2VuZWJhZ3Mvb2JqZWN0b21lM2QvYmFja2dyb3VuZCdcbiAgICApIHtcbiAgICAgIHRoaXMubWtlLm1ha2VBY3RpdmVCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMubWtlLnN0b3JlUGFyYW1CdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMubWtlLnBhcmFtR2VuQnRuQm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLm1rZS5zdlNjZW5lQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLm1rZS51cGRhdGVCdG4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgdGhpcy5ta2UucmVuZGVyQnRuLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgIHRoaXMubWtlLmJ0bkJveERpdi5zdHlsZS5ncmlkVGVtcGxhdGVBcmVhcyA9ICdcInVwZGF0ZS1idG4gcmVuZGVyLWJ0blwiJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ta2UubWFrZUFjdGl2ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGhpcy5ta2Uuc3RvcmVQYXJhbUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGhpcy5ta2UucmVuZGVyQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLm1rZS5wYXJhbUdlbkJ0bkJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGhpcy5ta2Uuc3ZTY2VuZUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGhpcy5ta2UudXBkYXRlQnRuLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgIHRoaXMubWtlLmJ0bkJveERpdi5zdHlsZS5ncmlkVGVtcGxhdGVBcmVhcyA9ICdcInVwZGF0ZS1idG4gdXBkYXRlLWJ0blwiJztcbiAgICB9XG5cbiAgICB0aGlzLnBhdGhOYW1lLmlubmVyVGV4dCA9IGZpbGVSZWYuZnVsbFBhdGg7XG5cbiAgICBsZXQgcGF0aEFycjogc3RyaW5nW10gPSBmaWxlUmVmLmZ1bGxQYXRoLnNwbGl0KCcvJyk7XG4gICAgbGV0IG1kQXJyID0gbmV3IEFycmF5KCk7XG4gICAgbGV0IGZpbGVMaXN0ID0gYXdhaXQgbGlzdEFsbChmaWxlUmVmKTtcbiAgICBsZXQgZmlsZVByb21pc2U6IGFueTtcblxuICAgIC8qIFJlc29sdmUgcHJldmlvdXMgcGF0aCAqL1xuICAgIHRoaXMucHJldmlvdXNQYXRoID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoQXJyLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgdGhpcy5wcmV2aW91c1BhdGggKz0gcGF0aEFycltpXSArICcvJztcbiAgICB9XG5cbiAgICAvKiBSZXNvbHZlIG1ldGFkYXRhIG9mIGFsbCBmb2xkZXJzICovXG4gICAgZmlsZUxpc3QucHJlZml4ZXMuZm9yRWFjaCgoZm9sZGVyKSA9PiB7XG4gICAgICBtZEFyci5wdXNoKHtcbiAgICAgICAgbmFtZTogZm9sZGVyLm5hbWUsXG4gICAgICAgIGNvbnRlbnRUeXBlOiAnZm9sZGVyJyxcbiAgICAgICAgZnVsbFBhdGg6IGZvbGRlci5mdWxsUGF0aCxcbiAgICAgICAgc2l6ZTogJ04vQScsXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8qIFJlc29sdmUgbWV0YWRhdGEgb2YgYWxsIGZpbGVzICovXG4gICAgZmlsZVByb21pc2UgPSBmaWxlTGlzdC5pdGVtcy5tYXAobG9hZE1ldGFkYXRhKTtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChmaWxlUHJvbWlzZSk7XG5cbiAgICB0aGlzLmRpc3BsYXlTdG9yYWdlVGFibGUobWRBcnIpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoU3RvcmFnZVRhYmxlKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2VGaWxlQ2hhbmdlZCcsIChldjogRXZlbnQpID0+IHtcbiAgICAgIGxldCBmb2xkZXJSZWYgPSB0aGlzLm1rZS5nZXRBY3RpdmVGaWxlKCkuaWQgYXMgU3RvcmFnZVJlZmVyZW5jZTtcbiAgICAgIHRoaXMubGlzdFN0b3JhZ2VGaWxlcyhmb2xkZXJSZWYucGFyZW50ISk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGRpc3BsYXlTdG9yYWdlVGFibGUobWV0YWRhdGFBcnI6IGFueVtdKSB7XG4gICAgdGhpcy5maW5kZXIuZGVzdHJveSgpO1xuICAgIHRoaXMuZmluZGVyID0gbmV3IFRhYnVsYXRvcignI2ZpbmRlcicsIHtcbiAgICAgIGRhdGE6IG1ldGFkYXRhQXJyLFxuICAgICAgaW5kZXg6ICduYW1lJyxcbiAgICAgIHJlc3BvbnNpdmVMYXlvdXQ6IHRydWUsXG4gICAgICBsYXlvdXQ6ICdmaXRDb2x1bW5zJyxcbiAgICAgIHJlc2l6YWJsZUNvbHVtbnM6IHRydWUsXG4gICAgICBpbml0aWFsU29ydDogW3sgY29sdW1uOiAnbmFtZScsIGRpcjogJ2FzYycgfV0sXG4gICAgICBjb2x1bW5zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogXCI8aW5wdXQgaWQ9J3NlbGVjdC1hbGwnIHR5cGU9J2NoZWNrYm94Jy8+XCIsXG4gICAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICAgIGhlYWRlclNvcnQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7IHRpdGxlOiAnTmFtZScsIGZpZWxkOiAnbmFtZScsIHdpZHRoR3JvdzogMyB9LFxuICAgICAgICB7IHRpdGxlOiAnVHlwZScsIGZpZWxkOiAnY29udGVudFR5cGUnIH0sXG4gICAgICAgIHsgdGl0bGU6ICdQYXRoJywgZmllbGQ6ICdmdWxsUGF0aCcgfSxcbiAgICAgICAgeyB0aXRsZTogJ1NpemUnLCBmaWVsZDogJ3NpemUnIH0sXG4gICAgICBdLFxuICAgICAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgICAgIHNlbGVjdGFibGVSYW5nZU1vZGU6ICdjbGljaycsXG4gICAgICByb3dEYmxDbGljazogKGV2LCByb3cpID0+IHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmIChyb3cuZ2V0RGF0YSgpLmNvbnRlbnRUeXBlID09PSAnZm9sZGVyJykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdyb3dEYmxDbGljaycsIHJvdy5nZXREYXRhKCkuZnVsbFBhdGgpO1xuICAgICAgICAgIC8vIHRoaXMubGlzdFN0b3JhZ2VGaWxlcyh0aGlzLnN0b3JhZ2VSZWYuY2hpbGQocm93LmdldERhdGEoKS5mdWxsUGF0aCkpO1xuICAgICAgICAgIHRoaXMubGlzdFN0b3JhZ2VGaWxlcyhyZWYodGhpcy5zdG9yYWdlUmVmLCByb3cuZ2V0RGF0YSgpLmZ1bGxQYXRoKSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICByb3dEYmxUYXA6IChldiwgcm93KSA9PiB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAocm93LmdldERhdGEoKS5jb250ZW50VHlwZSA9PT0gJ2ZvbGRlcicpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyb3cuZ2V0RGF0YSgpLmZ1bGxQYXRoKTtcbiAgICAgICAgICAvLyB0aGlzLmxpc3RTdG9yYWdlRmlsZXModGhpcy5zdG9yYWdlUmVmLmNoaWxkKHJvdy5nZXREYXRhKCkuZnVsbFBhdGgpKTtcbiAgICAgICAgICB0aGlzLmxpc3RTdG9yYWdlRmlsZXMocmVmKHRoaXMuc3RvcmFnZVJlZiwgcm93LmdldERhdGEoKS5mdWxsUGF0aCkpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcm93Q2xpY2s6IGFzeW5jIChldiwgcm93KSA9PiB7XG4gICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAocm93LmdldERhdGEoKS5jb250ZW50VHlwZSA9PT0gJ2ZvbGRlcicpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygncm93Q2xpY2snLCByb3cuZ2V0RGF0YSgpLmZ1bGxQYXRoKTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICByb3cuZ2V0RGF0YSgpLmNvbnRlbnRUeXBlLmluY2x1ZGVzKCd0ZXh0JykgfHxcbiAgICAgICAgICByb3cuZ2V0RGF0YSgpLmNvbnRlbnRUeXBlLmluY2x1ZGVzKCdqc29uJylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5ta3QuZGVzdHJveSgpO1xuICAgICAgICAgIHRoaXMubWtpLnJlbW92ZUltYWdlcygpO1xuXG4gICAgICAgICAgdGhpcy5ta2UuZWRpdG9yRGl2RWxlbWVudC5zdHlsZS56SW5kZXggPSAnMyc7XG4gICAgICAgICAgdGhpcy5ta2kuaW1nQ2FudmFzRGl2LnN0eWxlLnpJbmRleCA9ICcyJztcbiAgICAgICAgICB0aGlzLm1rdC5jYW52YXMuc3R5bGUuekluZGV4ID0gJzEnO1xuXG4gICAgICAgICAgLy8gbGV0IGZpbGVSZWYgPSB0aGlzLnN0b3JhZ2VSZWYuY2hpbGQocm93LmdldERhdGEoKS5mdWxsUGF0aCk7XG4gICAgICAgICAgbGV0IGZpbGVSZWYgPSByZWYodGhpcy5zdG9yYWdlUmVmLCByb3cuZ2V0RGF0YSgpLmZ1bGxQYXRoKTtcbiAgICAgICAgICB0aGlzLm1rZS5kaXNwbGF5U3RvcmFnZVRleHRGaWxlKGZpbGVSZWYpO1xuICAgICAgICB9IGVsc2UgaWYgKHJvdy5nZXREYXRhKCkuY29udGVudFR5cGUuaW5jbHVkZXMoJ2ltYWdlJykpIHtcbiAgICAgICAgICB0aGlzLm1rdC5kZXN0cm95KCk7XG4gICAgICAgICAgdGhpcy5ta2kucmVtb3ZlSW1hZ2VzKCk7XG5cbiAgICAgICAgICB0aGlzLm1raS5pbWdDYW52YXNEaXYuc3R5bGUuekluZGV4ID0gJzMnO1xuICAgICAgICAgIHRoaXMubWtlLmVkaXRvckRpdkVsZW1lbnQuc3R5bGUuekluZGV4ID0gJzInO1xuICAgICAgICAgIHRoaXMubWt0LmNhbnZhcy5zdHlsZS56SW5kZXggPSAnMSc7XG5cbiAgICAgICAgICAvLyBsZXQgaW1nUmVmID0gdGhpcy5zdG9yYWdlUmVmLmNoaWxkKHJvdy5nZXREYXRhKCkuZnVsbFBhdGgpO1xuICAgICAgICAgIGxldCBpbWdSZWYgPSByZWYodGhpcy5zdG9yYWdlUmVmLCByb3cuZ2V0RGF0YSgpLmZ1bGxQYXRoKTtcbiAgICAgICAgICBsZXQgaW1nTmFtZSA9IHJvdy5nZXREYXRhKCkubmFtZTtcbiAgICAgICAgICB0aGlzLm1raS5kaXNwbGF5SW1hZ2UoaW1nUmVmLCBpbWdOYW1lKTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICByb3cuZ2V0RGF0YSgpLmNvbnRlbnRUeXBlID09PSAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyAmJlxuICAgICAgICAgIHJvdy5nZXREYXRhKCkubmFtZS5pbmNsdWRlcygnLmdsYicpXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMubWt0LmRlc3Ryb3koKTtcbiAgICAgICAgICB0aGlzLm1raS5yZW1vdmVJbWFnZXMoKTtcblxuICAgICAgICAgIHRoaXMubWt0LmNhbnZhcy5zdHlsZS56SW5kZXggPSAnMyc7XG4gICAgICAgICAgdGhpcy5ta2UuZWRpdG9yRGl2RWxlbWVudC5zdHlsZS56SW5kZXggPSAnMic7XG4gICAgICAgICAgdGhpcy5ta2kuaW1nQ2FudmFzRGl2LnN0eWxlLnpJbmRleCA9ICcxJztcblxuICAgICAgICAgIC8vIGxldCBtZXNoUmVmID0gdGhpcy5zdG9yYWdlUmVmLmNoaWxkKHJvdy5nZXREYXRhKCkuZnVsbFBhdGgpO1xuICAgICAgICAgIGxldCBtZXNoUmVmID0gcmVmKHRoaXMuc3RvcmFnZVJlZiwgcm93LmdldERhdGEoKS5mdWxsUGF0aCk7XG4gICAgICAgICAgdGhpcy5ta3QuZGlzcGxheU1lc2gobWVzaFJlZik7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICByb3dTZWxlY3Rpb25DaGFuZ2VkOiAoZGF0YSwgcm93cykgPT4ge1xuICAgICAgICB0aGlzLnNob3dJbWFnZXNCdG4uZGlzYWJsZWQgPSAhdGhpcy5pbWFnZVR5cGVUZXN0KGRhdGEpO1xuICAgICAgICBpZiAodGhpcy5pbWFnZVR5cGVUZXN0KGRhdGEpKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEltYWdlcyA9IGRhdGE7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIHRhYmxlQnVpbHQ6ICgpID0+IHtcbiAgICAgICAgbGV0IHNlbGVjdEFsbEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgJyNzZWxlY3QtYWxsJ1xuICAgICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIHNlbGVjdEFsbEJveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXYpID0+IHtcbiAgICAgICAgICBpZiAoc2VsZWN0QWxsQm94LmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5maW5kZXIuc2VsZWN0Um93KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmluZGVyLmRlc2VsZWN0Um93KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbGlzdEJpZ1F1ZXJ5VGFibGUoZGF0YUFycjogYW55W10sIGRhdGFzZXQ6IHN0cmluZywgYWdlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuZGlzcGxheUJpZ3F1ZXJ5VGFibGUoZGF0YUFycik7XG4gICAgdGhpcy5wYXRoTmFtZS5pbm5lclRleHQgPSBgJHtkYXRhc2V0fS4ke2FnZW50fWA7XG4gIH1cblxuICBwcml2YXRlIGRpc3BsYXlCaWdxdWVyeVRhYmxlKGRhdGFBcnI6IGFueVtdKSB7XG4gICAgdGhpcy5maW5kZXIuZGVzdHJveSgpO1xuICAgIHRoaXMuZmluZGVyID0gbmV3IFRhYnVsYXRvcignI2ZpbmRlcicsIHtcbiAgICAgIGRhdGE6IGRhdGFBcnIsXG4gICAgICBpbmRleDogJ3RpbWVzdGFtcC52YWx1ZScsXG4gICAgICByZXNwb25zaXZlTGF5b3V0OiB0cnVlLFxuICAgICAgbGF5b3V0OiAnZml0Q29sdW1ucycsXG4gICAgICByZXNpemFibGVDb2x1bW5zOiB0cnVlLFxuICAgICAgaW5pdGlhbFNvcnQ6IFt7IGNvbHVtbjogJ3RpbWVzdGFtcC52YWx1ZScsIGRpcjogJ2FzYycgfV0sXG4gICAgICBjb2x1bW5zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogXCI8aW5wdXQgaWQ9J3NlbGVjdC1hbGwnIHR5cGU9J2NoZWNrYm94Jy8+XCIsXG4gICAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICAgIGhlYWRlclNvcnQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7IHRpdGxlOiAnVGltZXN0YW1wJywgZmllbGQ6ICd0aW1lc3RhbXAudmFsdWUnIH0sXG4gICAgICBdLFxuICAgICAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgICAgIHNlbGVjdGFibGVSYW5nZU1vZGU6ICdjbGljaycsXG4gICAgICByb3dDbGljazogYXN5bmMgKGV2LCByb3cpID0+IHtcbiAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMubWtlLmRpc3BsYXlCaWdRdWVyeVRhYmxlUm93KHJvdy5nZXREYXRhKCkpO1xuICAgICAgfSxcbiAgICAgIHJvd1RhcDogKGV2LCByb3cpID0+IHtcbiAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMubWtlLmRpc3BsYXlCaWdRdWVyeVRhYmxlUm93KHJvdy5nZXREYXRhKCkpO1xuICAgICAgfSxcbiAgICAgIGRhdGFMb2FkZWQ6IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0YWJsZSBkYXRhJywgZGF0YSk7XG4gICAgICAgIHRoaXMubWtjLnJlbW92ZUVsZW1lbnRzQnlDbGFzc05hbWUoJ2F4aXMtb3B0aW9ucycpO1xuICAgICAgICB0aGlzLm1rYy5icVBvcHVsYXRlQXhpc0ZpZWxkcyhkYXRhLCAnZXllZGF0YScpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qIE1rZmluZGVyIGNvbnRyb2xzICovXG4gIHByaXZhdGUgYmFja0J0bkFjdGlvbigpIHtcbiAgICB0aGlzLmJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snIHx8ICdwb2ludGVydXAnLCAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zb2xlLmxvZygnW2JhY2tCdG4gUHJlc3NlZF06IHByZXZpb3VzUGF0aDonLCB0aGlzLnByZXZpb3VzUGF0aCk7XG4gICAgICAvLyB0aGlzLmxpc3RTdG9yYWdlRmlsZXModGhpcy5zdG9yYWdlUmVmLmNoaWxkKHRoaXMucHJldmlvdXNQYXRoKSk7XG4gICAgICB0aGlzLmxpc3RTdG9yYWdlRmlsZXMocmVmKHRoaXMuc3RvcmFnZVJlZiwgdGhpcy5wcmV2aW91c1BhdGgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbnVtSW1nU2xpZGVyQWN0aW9uKCkge1xuICAgIHRoaXMubnVtSW1nU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldjogRXZlbnQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMubnVtSW1nU2xpZGVyLnZhbHVlKTtcbiAgICAgIHRoaXMubWtpLmltZ0NhbnZhcy5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID1cbiAgICAgICAgJ3JlcGVhdCgnICsgU3RyaW5nKHRoaXMubnVtSW1nU2xpZGVyLnZhbHVlKSArICcsIG1pbm1heCgwLDFmcikpJztcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2hvd0ltYWdlc0J0bkFjdGlvbigpIHtcbiAgICB0aGlzLnNob3dJbWFnZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycgfHwgJ3BvaW50ZXJ1cCcsXG4gICAgICBhc3luYyAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMubWt0LmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5ta2kucmVtb3ZlSW1hZ2VzKCk7XG5cbiAgICAgICAgdGhpcy5ta2kuaW1nQ2FudmFzRGl2LnN0eWxlLnpJbmRleCA9ICczJztcbiAgICAgICAgdGhpcy5ta2UuZWRpdG9yRGl2RWxlbWVudC5zdHlsZS56SW5kZXggPSAnMic7XG4gICAgICAgIHRoaXMubWt0LmNhbnZhcy5zdHlsZS56SW5kZXggPSAnMSc7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGVkSW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgLy8gbGV0IGltZ1JlZiA9IHRoaXMuc3RvcmFnZVJlZi5jaGlsZCh0aGlzLnNlbGVjdGVkSW1hZ2VzW2ldLmZ1bGxQYXRoKTtcbiAgICAgICAgICBsZXQgaW1nUmVmID0gcmVmKHRoaXMuc3RvcmFnZVJlZiwgdGhpcy5zZWxlY3RlZEltYWdlc1tpXS5mdWxsUGF0aCk7XG4gICAgICAgICAgbGV0IGltZ05hbWUgPSB0aGlzLnNlbGVjdGVkSW1hZ2VzW2ldLm5hbWU7XG4gICAgICAgICAgYXdhaXQgdGhpcy5ta2kuZGlzcGxheUltYWdlKGltZ1JlZiwgaW1nTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpbWFnZVR5cGVUZXN0KGRhdGE6IGFueVtdKSB7XG4gICAgaWYgKGRhdGEubGVuZ3RoID09IDAgfHwgZGF0YS5sZW5ndGggPT0gMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFkYXRhW2ldLmNvbnRlbnRUeXBlLmluY2x1ZGVzKCdpbWFnZScpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRvd25sb2FkQnRuQWN0aW9uKCkge1xuICAgIHRoaXMuZG93bmxvYWRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycgfHwgJ3BvaW50ZXJ1cCcsXG4gICAgICBhc3luYyAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICAgIGxldCByb3cgPSB0aGlzLmZpbmRlci5nZXRTZWxlY3RlZFJvd3MoKTtcbiAgICAgICAgbGV0IHFyeUxvYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgJyNxcnktbG9jLXNlbGVjdG9yJ1xuICAgICAgICApIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBxcnlMb2MudmFsdWUgPT0gJ21rdHVya2ZpbGVzJyAmJlxuICAgICAgICAgICFyb3dbMF0uZ2V0RGF0YSgpLmNvbnRlbnRUeXBlLmluY2x1ZGVzKCdmb2xkZXInKVxuICAgICAgICApIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZ2V0RG93bmxvYWRVUkwoXG4gICAgICAgICAgICAgIHJlZih0aGlzLnN0b3JhZ2VSZWYsIHJvd1tpXS5nZXREYXRhKCkuZnVsbFBhdGgpXG4gICAgICAgICAgICApLnRoZW4oYXN5bmMgKHVybDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBmaWxlID0gYXdhaXQgKGF3YWl0IGZldGNoKHVybCkpLmJsb2IoKTtcbiAgICAgICAgICAgICAgRmlsZVNhdmVyLnNhdmVBcyhmaWxlLCByb3dbaV0uZ2V0RGF0YSgpLm5hbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHFyeUxvYy52YWx1ZSA9PSAnbWFybW9zZXRzJykge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZmlsZSA9IHJvd1tpXS5nZXREYXRhKCk7XG4gICAgICAgICAgICBsZXQgYmxvYiA9IG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShmaWxlLCBudWxsLCAxKV0sIHtcbiAgICAgICAgICAgICAgdHlwZTogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBGaWxlU2F2ZXIuc2F2ZUFzKGJsb2IsIGZpbGUubmFtZSArICcuanNvbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChxcnlMb2MudmFsdWUgPT0gJ21rZGFpbHlkYXRhJykge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZmlsZSA9IHJvd1tpXS5nZXREYXRhKCk7XG4gICAgICAgICAgICBsZXQgYmxvYiA9IG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShmaWxlLCBudWxsLCAxKV0sIHtcbiAgICAgICAgICAgICAgdHlwZTogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBGaWxlU2F2ZXIuc2F2ZUFzKGJsb2IsIGZpbGUuYWdlbnQgKyAnLmpzb24nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocXJ5TG9jLnZhbHVlID09ICdta3R1cmtkYXRhJykge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZG9jTmFtZSA9XG4gICAgICAgICAgICAgIHJvd1tpXS5nZXREYXRhKCkuRmlyZXN0b3JlRG9jUm9vdCArXG4gICAgICAgICAgICAgICdfJyArXG4gICAgICAgICAgICAgIHJvd1tpXS5nZXREYXRhKCkuRG9jdHlwZTtcbiAgICAgICAgICAgIGxldCBmaWxlID0gcm93W2ldLmdldERhdGEoKTtcbiAgICAgICAgICAgIGxldCBibG9iID0gbmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KGZpbGUsIG51bGwsIDEpXSwge1xuICAgICAgICAgICAgICB0eXBlOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIEZpbGVTYXZlci5zYXZlQXMoYmxvYiwgZG9jTmFtZSArICcuanNvbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChxcnlMb2MudmFsdWUgPT0gJ2RldmljZXMnKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3cubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBmaWxlID0gcm93W2ldLmdldERhdGEoKTtcbiAgICAgICAgICAgIGxldCBibG9iID0gbmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KGZpbGUsIG51bGwsIDEpXSwge1xuICAgICAgICAgICAgICB0eXBlOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIEZpbGVTYXZlci5zYXZlQXMoYmxvYiwgZmlsZS5kb2NuYW1lICsgJy5qc29uJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHFyeUxvYy52YWx1ZSA9PSAnZXllY2FsaWJyYXRpb24nKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3cubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBmaWxlID0gcm93W2ldLmdldERhdGEoKTtcbiAgICAgICAgICAgIGxldCBibG9iID0gbmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KGZpbGUsIG51bGwsIDEpXSwge1xuICAgICAgICAgICAgICB0eXBlOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIEZpbGVTYXZlci5zYXZlQXMoYmxvYiwgZmlsZS5Eb2NuYW1lICsgJy5qc29uJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHFyeUxvYy52YWx1ZSA9PSAnbWtzY2FsZScpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGZpbGUgPSByb3dbaV0uZ2V0RGF0YSgpO1xuICAgICAgICAgICAgbGV0IGJsb2IgPSBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkoZmlsZSwgbnVsbCwgMSldLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgRmlsZVNhdmVyLnNhdmVBcyhibG9iLCBmaWxlLkRvY25hbWUgKyAnLmpzb24nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocXJ5TG9jLnZhbHVlID09ICdvYmplY3RzJykge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZmlsZSA9IHJvd1tpXS5nZXREYXRhKCk7XG4gICAgICAgICAgICBsZXQgYmxvYiA9IG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShmaWxlLCBudWxsLCAxKV0sIHtcbiAgICAgICAgICAgICAgdHlwZTogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBGaWxlU2F2ZXIuc2F2ZUFzKGJsb2IsIGZpbGUuZG9jbmFtZSArICcuanNvbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGdldEFwcCB9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQge1xuICBnZXRGaXJlc3RvcmUsXG4gIGRvYyxcbiAgY29sbGVjdGlvbixcbiAgc2V0RG9jLFxuICBUaW1lc3RhbXAsXG59IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XG5pbXBvcnQge1xuICBnZXRTdG9yYWdlLFxuICBTdG9yYWdlUmVmZXJlbmNlLFxuICBnZXREb3dubG9hZFVSTCxcbiAgcmVmLFxuICB1cGxvYWRCeXRlcyxcbiAgZGVsZXRlT2JqZWN0LFxufSBmcm9tICdmaXJlYmFzZS9zdG9yYWdlJztcbmltcG9ydCBKU09ORWRpdG9yIGZyb20gJ2pzb25lZGl0b3InO1xuaW1wb3J0IFZpZXdlciBmcm9tICd2aWV3ZXJqcyc7XG5pbXBvcnQgKiBhcyBFZGl0b3JQYXJhbXMgZnJvbSAnLi9lZGl0b3ItcGFyYW1zJztcblxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzJztcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyJztcbmltcG9ydCB7IEdVSSB9IGZyb20gJ2RhdC5ndWknO1xuaW1wb3J0IHsgUGFyc2VFbmdpbmUgfSBmcm9tICcuL3BhcnNlcic7XG5cbnR5cGUgRmlsZVJlZiA9IFN0b3JhZ2VSZWZlcmVuY2U7XG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZShnZXRBcHAoKSk7XG5jb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZShnZXRBcHAoKSk7XG5cbmV4cG9ydCBjbGFzcyBNa2VkaXRvciB7XG4gIHB1YmxpYyBlZGl0b3JEaXZFbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcbiAgcHJpdmF0ZSBlZGl0b3JFbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcbiAgcHJpdmF0ZSBlZGl0b3I6IEpTT05FZGl0b3I7XG4gIHB1YmxpYyB1cGRhdGVCdG46IEhUTUxCdXR0b25FbGVtZW50O1xuICBwdWJsaWMgYnRuQm94RGl2OiBIVE1MRGl2RWxlbWVudDtcbiAgcHVibGljIG1ha2VBY3RpdmVCdG46IEhUTUxCdXR0b25FbGVtZW50O1xuICBwdWJsaWMgc3RvcmVQYXJhbUJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIHB1YmxpYyByZW5kZXJCdG46IEhUTUxCdXR0b25FbGVtZW50O1xuICBwcml2YXRlIGFjdGl2ZUZpbGU6IHsgbG9jOiBzdHJpbmc7IGlkOiBzdHJpbmcgfCBGaWxlUmVmIH07XG5cbiAgcHVibGljIGZpbGVOYW1lSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gIHByaXZhdGUgZmlsZVJlbmFtZUJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIHByaXZhdGUgZmlsZUR1cEJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIHByaXZhdGUgZmlsZUR1cE1vZGFsOiBIVE1MRGlhbG9nRWxlbWVudDtcbiAgcHVibGljIGdlbkJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIHB1YmxpYyBwYXJhbUdlbkJ0bkJveDogSFRNTERpdkVsZW1lbnQ7XG5cbiAgcHVibGljIGV4cGFuZEJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIHB1YmxpYyBzdlNjZW5lQnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgcHJpdmF0ZSBwZTogUGFyc2VFbmdpbmU7XG4gIHByaXZhdGUgdXNlckVkaXRlZFNjZW5lUGFyYW06IE9iamVjdDtcbiAgcHJpdmF0ZSBnZW5lcmF0ZWRTY2VuZVBhcmFtOiBPYmplY3Q7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5lZGl0b3JEaXZFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcjZWRpdG9yLWRpdidcbiAgICApIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgIHRoaXMuZWRpdG9yRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0b3InKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICB0aGlzLmVkaXRvciA9IG5ldyBKU09ORWRpdG9yKHRoaXMuZWRpdG9yRWxlbWVudCk7XG4gICAgdGhpcy51cGRhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlLWJ0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIHRoaXMucmVuZGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlbmRlci1idG4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICB0aGlzLmJ0bkJveERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b24tYm94JykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgdGhpcy5wYXJhbUdlbkJ0bkJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnI3BhcmFtLWdlbi1idG4tYm94J1xuICAgICkgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgdGhpcy5tYWtlQWN0aXZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcjYWN0aXZlLWJ0bidcbiAgICApIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIHRoaXMuc3RvcmVQYXJhbUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnI3N0b3JlLXBhcmFtLWJ0bidcbiAgICApIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIHRoaXMuYWN0aXZlRmlsZSA9IHsgbG9jOiAnJywgaWQ6ICcnIH07XG4gICAgdGhpcy51cGRhdGVCdG5BY3Rpb24oKTtcbiAgICB0aGlzLnJlbmRlckJ0bkFjdGlvbigpO1xuICAgIHRoaXMubWFrZUFjdGl2ZUJ0bkFjdGlvbigpO1xuICAgIHRoaXMuc3RvcmVQYXJhbUJ0bkFjdGlvbigpO1xuICAgIHRoaXMuZmlsZU5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnI2ZpbGUtbmFtZS1pbnB1dCdcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgdGhpcy5maWxlUmVuYW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcjZmlsZS1yZW5hbWUtYnRuJ1xuICAgICkgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgdGhpcy5maWxlRHVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcjZmlsZS1kdXAtYnRuJ1xuICAgICkgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgdGhpcy5maWxlRHVwTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJyNmaWxlLWR1cC1tb2RhbCdcbiAgICApIGFzIEhUTUxEaWFsb2dFbGVtZW50O1xuICAgIHRoaXMucmVuYW1lQnRuQWN0aW9uKCk7XG4gICAgdGhpcy5yZW5hbWVUZXh0RmllbGRBY3Rpb24oKTtcbiAgICB0aGlzLmdldEFjdGl2ZUZpbGUoKTtcbiAgICB0aGlzLmZpbGVEdXBCdG5BY3Rpb24oKTtcblxuICAgIC8vIHRoaXMuZ2VuU2NlbmVQYXJhbUJ0blxuICAgIC8vICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2VuLXNjZW5lLXBhcmFtLWJ0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIC8vIHRoaXMuZ2VuU2NlbmVQYXJhbU1vZGFsXG4gICAgLy8gICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnZW4tc2NlbmUtcGFyYW0tbW9kYWwnKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAvLyB0aGlzLmdlbmVyYXRlU2NlbmVQYXJhbU1vZGFsQWN0aW9uKClcblxuICAgIHRoaXMuZ2VuQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dlbmVyYXRlLWJ0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIHRoaXMuZXhwYW5kQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V4cGFuZC1idG4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICB0aGlzLnN2U2NlbmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJyNzYXZlLXNjZW5lLXBhcmFtLWJ0bidcbiAgICApIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIHRoaXMuZ2VuQnRuQWN0aW9uKCk7XG4gICAgdGhpcy5zdlNjZW5lQnRuQWN0aW9uKCk7XG5cbiAgICB0aGlzLnBlID0gbmV3IFBhcnNlRW5naW5lKCk7XG4gICAgdGhpcy51c2VyRWRpdGVkU2NlbmVQYXJhbSA9IHt9O1xuICAgIHRoaXMuZ2VuZXJhdGVkU2NlbmVQYXJhbSA9IHt9O1xuICB9XG5cbiAgcHVibGljIGdldEFjdGl2ZUZpbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlRmlsZTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0b3J5RWRpdG9yKCkge1xuICAgIHRoaXMuZWRpdG9yLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNwbGF5RmlyZWJhc2VUZXh0RmlsZShmaWxlOiBPYmplY3QsIGxvYzogc3RyaW5nKSB7XG4gICAgdGhpcy5maWxlUmVuYW1lQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy5maWxlRHVwQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgLy8gdGhpcy5nZW5TY2VuZVBhcmFtQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy5zdG9yZVBhcmFtQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy51cGRhdGVCdG4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgIHRoaXMuYnRuQm94RGl2LnN0eWxlLmdyaWRUZW1wbGF0ZUFyZWFzID0gJ1widXBkYXRlLWJ0biB1cGRhdGUtYnRuXCInO1xuICAgIHRoaXMuZmlsZU5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgIHRoaXMuZmlsZU5hbWVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICB0cnkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgIG1vZGVzOiBbJ3RyZWUnIGFzICd0cmVlJywgJ2NvZGUnIGFzICdjb2RlJ10sXG4gICAgICAgIHNvcnRPYmplY3RLZXlzOiB0cnVlLFxuICAgICAgfTtcbiAgICAgIHRoaXMuZWRpdG9yLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuZWRpdG9yID0gbmV3IEpTT05FZGl0b3IodGhpcy5lZGl0b3JFbGVtZW50LCBvcHRpb25zLCBmaWxlKTtcbiAgICAgIHRoaXMudHJhY2tGaXJlYmFzZUFjdGl2ZUZpbGUobG9jLCBmaWxlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignSlNPTkVkaXRvciBFcnJvcjonLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRpc3BsYXlCaWdRdWVyeVRhYmxlUm93KGRhdGE6IGFueSkge1xuICAgIHRoaXMuYnRuQm94RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZWRpdG9yLmRlc3Ryb3koKTtcbiAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICBtb2RlczogWyd0cmVlJyBhcyAndHJlZScsICdjb2RlJyBhcyAnY29kZSddLFxuICAgICAgfTtcbiAgICAgIHRoaXMuZWRpdG9yID0gbmV3IEpTT05FZGl0b3IodGhpcy5lZGl0b3JFbGVtZW50LCBvcHRpb25zLCBkYXRhKTtcbiAgICAgIHRoaXMuZmlsZU5hbWVJbnB1dC5wbGFjZWhvbGRlciA9IGRhdGEudGltZXN0YW1wLnZhbHVlO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJkaXNwbGF5QmlnUXVlcnlUYWJsZVJvd1wiLCBkYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignSlNPTkVkaXRvciBFcnJvcjonLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0cmFja0ZpcmViYXNlQWN0aXZlRmlsZShsb2M6IHN0cmluZywgZmlsZTogYW55KSB7XG4gICAgaWYgKGxvYyA9PT0gJ21hcm1vc2V0cycpIHtcbiAgICAgIHRoaXMuYWN0aXZlRmlsZSA9IHsgbG9jOiBsb2MsIGlkOiBmaWxlLm5hbWUgfTtcbiAgICAgIHRoaXMuZmlsZU5hbWVJbnB1dC5wbGFjZWhvbGRlciA9IFN0cmluZyh0aGlzLmFjdGl2ZUZpbGUuaWQpO1xuICAgIH0gZWxzZSBpZiAobG9jID09PSAnbWt0dXJrZGF0YScpIHtcbiAgICAgIGlmIChmaWxlLkRvY3R5cGUgPT09ICd0YXNrJykge1xuICAgICAgICB0aGlzLmFjdGl2ZUZpbGUgPSB7IGxvYzogbG9jLCBpZDogZmlsZS5UYXNrZG9jIH07XG4gICAgICAgIHRoaXMuZmlsZU5hbWVJbnB1dC5wbGFjZWhvbGRlciA9IFN0cmluZyh0aGlzLmFjdGl2ZUZpbGUuaWQpO1xuICAgICAgfSBlbHNlIGlmIChmaWxlLkRvY3R5cGUgPT09ICdpbWFnZXMnKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlRmlsZSA9IHsgbG9jOiBsb2MsIGlkOiBmaWxlLkltYWdlc2RvYyB9O1xuICAgICAgICB0aGlzLmZpbGVOYW1lSW5wdXQucGxhY2Vob2xkZXIgPSBTdHJpbmcodGhpcy5hY3RpdmVGaWxlLmlkKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGxvYyA9PT0gJ21rZGFpbHlkYXRhJykge1xuICAgICAgdGhpcy5hY3RpdmVGaWxlID0geyBsb2M6IGxvYywgaWQ6IGZpbGUuYWdlbnQgfTtcbiAgICAgIHRoaXMuZmlsZU5hbWVJbnB1dC5wbGFjZWhvbGRlciA9IFN0cmluZyh0aGlzLmFjdGl2ZUZpbGUuaWQpO1xuICAgIH1cblxuICAgIC8vIGVsc2UgaWYgKGxvYyA9PT0gJ21rZGFpbHlkYXRhdGVzdCcpIHtcbiAgICAvLyAgIHRoaXMuYWN0aXZlRmlsZSA9IHsgbG9jOiBsb2MsIGlkOiBmaWxlLmFnZW50IH07XG4gICAgLy8gICB0aGlzLmZpbGVOYW1lSW5wdXQucGxhY2Vob2xkZXIgPSBTdHJpbmcodGhpcy5hY3RpdmVGaWxlLmlkKTtcbiAgICAvLyB9XG4gICAgZWxzZSBpZiAobG9jID09PSAnb2JqZWN0cycpIHtcbiAgICAgIHRoaXMuYWN0aXZlRmlsZSA9IHsgbG9jOiBsb2MsIGlkOiBmaWxlLmRvY25hbWUgfTtcbiAgICAgIHRoaXMuZmlsZU5hbWVJbnB1dC5wbGFjZWhvbGRlciA9IFN0cmluZyh0aGlzLmFjdGl2ZUZpbGUuaWQpO1xuICAgIH0gZWxzZSBpZiAobG9jID09PSAnZXllY2FsaWJyYXRpb25zJykge1xuICAgICAgdGhpcy5hY3RpdmVGaWxlID0geyBsb2M6IGxvYywgaWQ6IGZpbGUuRG9jbmFtZSB9O1xuICAgICAgdGhpcy5maWxlTmFtZUlucHV0LnBsYWNlaG9sZGVyID0gU3RyaW5nKHRoaXMuYWN0aXZlRmlsZS5pZCk7XG4gICAgfSBlbHNlIGlmIChsb2MgPT09ICdkZXZpY2VzJykge1xuICAgICAgdGhpcy5hY3RpdmVGaWxlID0geyBsb2M6IGxvYywgaWQ6IGZpbGUuZG9jbmFtZSB9O1xuICAgICAgdGhpcy5maWxlTmFtZUlucHV0LnBsYWNlaG9sZGVyID0gU3RyaW5nKHRoaXMuYWN0aXZlRmlsZS5pZCk7XG4gICAgfSBlbHNlIGlmIChsb2MgPT09ICdta3NjYWxlJykge1xuICAgICAgdGhpcy5hY3RpdmVGaWxlID0geyBsb2M6IGxvYywgaWQ6IGZpbGUuRG9jbmFtZSB9O1xuICAgICAgdGhpcy5maWxlTmFtZUlucHV0LnBsYWNlaG9sZGVyID0gU3RyaW5nKHRoaXMuYWN0aXZlRmlsZS5pZCk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ2FjdGl2ZUZpbGUnLCB0aGlzLmFjdGl2ZUZpbGUpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGRpc3BsYXlTdG9yYWdlVGV4dEZpbGUoZmlsZVJlZjogRmlsZVJlZikge1xuICAgIGNvbnNvbGUubG9nKCdkaXBsYXlTdG9yYWdlVGV4dEZpbGUgRklMRVJFRicsIGZpbGVSZWYpO1xuICAgIHRoaXMuZmlsZU5hbWVJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZmlsZVJlbmFtZUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgdGhpcy5maWxlTmFtZUlucHV0LnZhbHVlID0gJyc7XG5cbiAgICBjb25zdCBzY2VuZVBhcmFtUGF0aCA9ICdta3R1cmtmaWxlcy9zY2VuZWJhZ3Mvb2JqZWN0b21lM2QnO1xuICAgIGNvbnN0IHRhc2tQYXJhbVBhdGggPSAnbWt0dXJrZmlsZXMvcGFyYW1ldGVyZmlsZXMnO1xuXG4gICAgZnVuY3Rpb24gb25DbGFzc05hbWUoY2xhc3NOYW1lUGFyYW1zOiB7XG4gICAgICBwYXRoOiBSZWFkb25seUFycmF5PHN0cmluZz47XG4gICAgICBmaWVsZDogc3RyaW5nO1xuICAgICAgdmFsdWU6IHN0cmluZztcbiAgICB9KSB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYG9uQ2xhc3NOYW1lIHBhdGg9JHtjbGFzc05hbWVQYXJhbXMucGF0aH0sIGZpZWxkPSR7Y2xhc3NOYW1lUGFyYW1zLmZpZWxkfSwgdmFsdWU9JHtjbGFzc05hbWVQYXJhbXMudmFsdWV9YFxuICAgICAgKTtcblxuICAgICAgY29uc3QgYmlvS2V5cyA9IFsnQWdlbnQnLCAnQ2hlY2tSRklEJ107XG4gICAgICBjb25zdCBhdXRvbWF0b3JLZXlzID0gW1xuICAgICAgICAnQXV0b21hdG9yJyxcbiAgICAgICAgJ0F1dG9tYXRvckZpbGVQYXRoJyxcbiAgICAgICAgJ0N1cnJlbnRBdXRvbWF0b3JTdGFnZScsXG4gICAgICAgICdNaW5QZXJjZW50Q3JpdGVyaW9uJyxcbiAgICAgICAgJ01pblRyaWFsc0NyaXRlcmlvbicsXG4gICAgICBdO1xuICAgICAgY29uc3QgZ2VuZXJhbEtleXMgPSBbXG4gICAgICAgICdEcmFndG9SZXNwb25kJyxcbiAgICAgICAgJ0NhbGlicmF0ZUV5ZScsXG4gICAgICAgICdOUlNWUCcsXG4gICAgICAgICdOUlNWUE1heCcsXG4gICAgICAgICdTYW1lRGlmZmVyZW50JyxcbiAgICAgICAgJ1NhbXBsaW5nU3RyYXRlZ3knLFxuICAgICAgICAnTlN0aWNreVJlc3BvbnNlJyxcbiAgICAgICAgJ05UcmlhbHNQZXJCYWdCbG9jaycsXG4gICAgICBdO1xuICAgICAgY29uc3QgZ3JpZEtleXMgPSBbXG4gICAgICAgICdOR3JpZFBvaW50cycsXG4gICAgICAgICdHcmlkU3BhY2luZ0luY2hlcycsXG4gICAgICAgICdHcmlkWE9mZnNldEluY2hlcycsXG4gICAgICAgICdHcmlkWU9mZnNldEluY2hlcycsXG4gICAgICAgICdGaXhhdGlvbkdyaWRJbmRleCcsXG4gICAgICAgICdTYW1wbGVHcmlkSW5kZXgnLFxuICAgICAgICAnT2JqZWN0R3JpZEluZGV4JyxcbiAgICAgICAgJ0Nob2ljZUdyaWRJbmRleCcsXG4gICAgICAgICdUZXN0R3JpZEluZGV4JyxcbiAgICAgIF07XG4gICAgICBjb25zdCBmaXhhdGlvbktleXMgPSBbXG4gICAgICAgICdORml4YXRpb25zJyxcbiAgICAgICAgJ0ZpeGF0aW9uVXNlc1NhbXBsZScsXG4gICAgICAgICdGaXhhdGlvblNpemVJbmNoZXMnLFxuICAgICAgICAnRml4YXRpb25EdXJhdGlvbicsXG4gICAgICAgICdGaXhhdGlvblRpbWVPdXQnLFxuICAgICAgXTtcbiAgICAgIGNvbnN0IGZpeGF0aW9uQ29uZmlnS2V5cyA9IFtcbiAgICAgICAgJ0ZpeGF0aW9uV2luZG93U2l6ZUluY2hlcycsXG4gICAgICAgICdGaXhhdGlvbkRvdFNpemVJbmNoZXMnLFxuICAgICAgXTtcbiAgICAgIGNvbnN0IHNhbXBsZUtleXMgPSBbXG4gICAgICAgICdJbWFnZUJhZ3NTYW1wbGUnLFxuICAgICAgICAnS2VlcFNhbXBsZU9OJyxcbiAgICAgICAgJ1NhbXBsZVBSRScsXG4gICAgICAgICdTYW1wbGVPRkYnLFxuICAgICAgXTtcbiAgICAgIGNvbnN0IHRlc3RLZXlzID0gW1xuICAgICAgICAnSW1hZ2VCYWdzVGVzdCcsXG4gICAgICAgICdLZWVwVGVzdE9OJyxcbiAgICAgICAgJ1Rlc3RPRkYnLFxuICAgICAgICAnSGlkZVRlc3REaXN0cmFjdG9ycycsXG4gICAgICBdO1xuICAgICAgY29uc3QgY2hvaWNlS2V5cyA9IFtcbiAgICAgICAgJ0Nob2ljZVNpemVJbmNoZXMnLFxuICAgICAgICAnSGlkZUNob2ljZURpc3RyYWN0b3JzJyxcbiAgICAgICAgJ0Nob2ljZVRpbWVPdXQnLFxuICAgICAgXTtcbiAgICAgIGNvbnN0IHJld2FyZEtleXMgPSBbXG4gICAgICAgICdSZXdhcmRTdGFnZScsXG4gICAgICAgICdSZXdhcmRQZXIxMDAwVHJpYWxzJyxcbiAgICAgICAgJ05SZXdhcmRNYXgnLFxuICAgICAgICAnTkNvbnNlY3V0aXZlSGl0c2ZvckJvbnVzJyxcbiAgICAgICAgJ1B1bmlzaFRpbWVPdXQnLFxuICAgICAgICAnQ29uc2VjdXRpdmVIaXRzSVRJJyxcbiAgICAgIF07XG5cbiAgICAgIGlmIChiaW9LZXlzLmluY2x1ZGVzKGNsYXNzTmFtZVBhcmFtcy5maWVsZCkpIHtcbiAgICAgICAgcmV0dXJuICdjb2xvci1ub2RlLWJpbyc7XG4gICAgICB9IGVsc2UgaWYgKGF1dG9tYXRvcktleXMuaW5jbHVkZXMoY2xhc3NOYW1lUGFyYW1zLmZpZWxkKSkge1xuICAgICAgICByZXR1cm4gJ2NvbG9yLW5vZGUtYXV0b21hdG9yJztcbiAgICAgIH0gZWxzZSBpZiAoZ2VuZXJhbEtleXMuaW5jbHVkZXMoY2xhc3NOYW1lUGFyYW1zLmZpZWxkKSkge1xuICAgICAgICByZXR1cm4gJ2NvbG9yLW5vZGUtZ2VuZXJhbCc7XG4gICAgICB9IGVsc2UgaWYgKGdyaWRLZXlzLmluY2x1ZGVzKGNsYXNzTmFtZVBhcmFtcy5maWVsZCkpIHtcbiAgICAgICAgcmV0dXJuICdjb2xvci1ub2RlLWdyaWQnO1xuICAgICAgfSBlbHNlIGlmIChmaXhhdGlvbktleXMuaW5jbHVkZXMoY2xhc3NOYW1lUGFyYW1zLmZpZWxkKSkge1xuICAgICAgICByZXR1cm4gJ2NvbG9yLW5vZGUtZml4YXRpb24nO1xuICAgICAgfSBlbHNlIGlmIChmaXhhdGlvbkNvbmZpZ0tleXMuaW5jbHVkZXMoY2xhc3NOYW1lUGFyYW1zLmZpZWxkKSkge1xuICAgICAgICByZXR1cm4gJ2NvbG9yLW5vZGUtZml4YXRpb24tY29uZmlnJztcbiAgICAgIH0gZWxzZSBpZiAoc2FtcGxlS2V5cy5pbmNsdWRlcyhjbGFzc05hbWVQYXJhbXMuZmllbGQpKSB7XG4gICAgICAgIHJldHVybiAnY29sb3Itbm9kZS1zYW1wbGUnO1xuICAgICAgfSBlbHNlIGlmICh0ZXN0S2V5cy5pbmNsdWRlcyhjbGFzc05hbWVQYXJhbXMuZmllbGQpKSB7XG4gICAgICAgIHJldHVybiAnY29sb3Itbm9kZS10ZXN0JztcbiAgICAgIH0gZWxzZSBpZiAoY2hvaWNlS2V5cy5pbmNsdWRlcyhjbGFzc05hbWVQYXJhbXMuZmllbGQpKSB7XG4gICAgICAgIHJldHVybiAnY29sb3Itbm9kZS1jaG9pY2UnO1xuICAgICAgfSBlbHNlIGlmIChyZXdhcmRLZXlzLmluY2x1ZGVzKGNsYXNzTmFtZVBhcmFtcy5maWVsZCkpIHtcbiAgICAgICAgcmV0dXJuICdjb2xvci1ub2RlLXJld2FyZCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ2NvbG9yLW5vZGUtbnVpc2FuY2UnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBzY2VuZVRlbXBsYXRlT3B0aW9ucyA9IHtcbiAgICAgIG1vZGVzOiBbJ3RyZWUnIGFzICd0cmVlJywgJ2NvZGUnIGFzICdjb2RlJ10sXG4gICAgICB0ZW1wbGF0ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdDYW1lcmEnLFxuICAgICAgICAgIHRpdGxlOiAnSW5zZXJ0IGEgQ2FtZXJhIG5vZGUnLFxuICAgICAgICAgIGZpZWxkOiAnQ2FtZXJhVGVtcGxhdGUnLFxuICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICB0eXBlOiAnUGVyc3BlY3RpdmVDYW1lcmEnLFxuICAgICAgICAgICAgZmllbGRPZlZpZXc6IDQ1LFxuICAgICAgICAgICAgbmVhcjogMC4xLFxuICAgICAgICAgICAgZmFyOiAyMDAwLFxuICAgICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgICAgeDogWzBdLFxuICAgICAgICAgICAgICB5OiBbMF0sXG4gICAgICAgICAgICAgIHo6IFswXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YXJnZXRJbmNoZXM6IHtcbiAgICAgICAgICAgICAgeDogWzBdLFxuICAgICAgICAgICAgICB5OiBbMF0sXG4gICAgICAgICAgICAgIHo6IFswXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2aXNpYmxlOiBbMV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdMaWdodCcsXG4gICAgICAgICAgdGl0bGU6ICdJbnNlcnQgYSBMaWdodCBub2RlJyxcbiAgICAgICAgICBmaWVsZDogJ0xpZ2h0VGVtcGxhdGUnLFxuICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICB0eXBlOiAnRGlyZWN0aW9uYWxMaWdodCcsXG4gICAgICAgICAgICBjb2xvcjogJzB4ZmZmZmZmJyxcbiAgICAgICAgICAgIGludGVuc2l0eTogWzVdLFxuICAgICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgICAgeDogWzBdLFxuICAgICAgICAgICAgICB5OiBbMF0sXG4gICAgICAgICAgICAgIHo6IFswXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2aXNpYmxlOiBbMV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdPYmplY3QnLFxuICAgICAgICAgIHRpdGxlOiAnSW5zZXJ0IGFuIE9iamVjdCBub2RlJyxcbiAgICAgICAgICBmaWVsZDogJ09iamVjdFRlbXBsYXRlJyxcbiAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgbWVzaHBhdGg6ICcnLFxuICAgICAgICAgICAgb2JqZWN0ZG9jOiAnJyxcbiAgICAgICAgICAgIHNpemVJbmNoZXM6IFswLjVdLFxuICAgICAgICAgICAgcG9zaXRpb25JbmNoZXM6IHtcbiAgICAgICAgICAgICAgeDogWzBdLFxuICAgICAgICAgICAgICB5OiBbMF0sXG4gICAgICAgICAgICAgIHo6IFswXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByb3RhdGlvbkRlZ3JlZXM6IHtcbiAgICAgICAgICAgICAgeDogWzBdLFxuICAgICAgICAgICAgICB5OiBbMF0sXG4gICAgICAgICAgICAgIHo6IFswXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYXRlcmlhbDoge1xuICAgICAgICAgICAgICB0eXBlOiAnTWVzaFBoeXNpY2FsTWF0ZXJpYWwnLFxuICAgICAgICAgICAgICBjb2xvcjogJyM3RjdGN0YnLFxuICAgICAgICAgICAgICBtZXRhbG5lc3M6IDAuMjUsXG4gICAgICAgICAgICAgIHJvdWdobmVzczogMC42NSxcbiAgICAgICAgICAgICAgcmVmbGVjdGl2aXR5OiAwLjUsXG4gICAgICAgICAgICAgIG9wYWNpdHk6IFsxXSxcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZpc2libGU6IFsxXSxcbiAgICAgICAgICAgIG1vcnBoVGFyZ2V0OiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0JhY2tncm91bmQnLFxuICAgICAgICAgIHRpdGxlOiAnSW5zZXJ0IGEgQmFja2dyb3VuZCBub2RlJyxcbiAgICAgICAgICBmaWVsZDogJ0ltYWdlc1RlbXBsYXRlJyxcbiAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgaW1hZ2ViYWc6ICcnLFxuICAgICAgICAgICAgaW1hZ2VpZHg6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG5cbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgIG1vZGVzOiBbJ3RyZWUnIGFzICd0cmVlJywgJ2NvZGUnIGFzICdjb2RlJ10sXG4gICAgfTtcblxuICAgIGxldCB0YXNrUGFyYW1PcHRpb25zID0ge1xuICAgICAgbW9kZXM6IFsndHJlZScgYXMgJ3RyZWUnLCAnY29kZScgYXMgJ2NvZGUnXSxcbiAgICAgIG9uQ2xhc3NOYW1lOiBvbkNsYXNzTmFtZSxcbiAgICAgIHNjaGVtYTogRWRpdG9yUGFyYW1zLnRhc2tQYXJhbVNjaGVtYSxcbiAgICB9O1xuXG4gICAgLy8gbGV0IGZpbGVVcmwgPSBhd2FpdCBnZXREb3dubG9hZFVSTChmaWxlUmVmKS5jYXRjaChlID0+IHtcbiAgICAvLyAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGdldHRpbmcgZG93bmxvYWQgVVJMOicsIGUpO1xuICAgIC8vIH0pO1xuXG4gICAgLy8gbGV0IHJlc3BvbnNlO1xuICAgIC8vIGxldCBmaWxlO1xuXG4gICAgbGV0IGZpbGUgPSBhd2FpdCBnZXREb3dubG9hZFVSTChmaWxlUmVmKVxuICAgICAgLnRoZW4oYXN5bmMgKHVybDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlOiBFcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nIGRvd25sb2FkIFVSTDonLCBlKTtcbiAgICAgIH0pO1xuXG4gICAgLy8gbGV0IGZpbGVVcmwgPSBhd2FpdCBmaWxlUmVmLmdldERvd25sb2FkVVJMKCkuY2F0Y2goZSA9PiB7XG4gICAgLy8gICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBkb3dubG9hZCBVUkxcIiwgZSk7XG4gICAgLy8gfSk7XG4gICAgLy8gbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZmlsZVVybCk7XG4gICAgLy8gbGV0IGZpbGUgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBpZiAoZmlsZVJlZi5mdWxsUGF0aC5pbmNsdWRlcyhzY2VuZVBhcmFtUGF0aCkpIHtcbiAgICAgIGlmIChmaWxlUmVmLmZ1bGxQYXRoLmluY2x1ZGVzKCd0ZW1wbGF0ZScpKSB7XG4gICAgICAgIHRoaXMuZmlsZUR1cEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIC8vIHRoaXMuZ2VuU2NlbmVQYXJhbUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIG9wdGlvbnMgPSBzY2VuZVRlbXBsYXRlT3B0aW9ucztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZmlsZUR1cEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIC8vIHRoaXMuZ2VuU2NlbmVQYXJhbUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZmlsZVJlZi5mdWxsUGF0aC5pbmNsdWRlcyh0YXNrUGFyYW1QYXRoKSkge1xuICAgICAgY29uc29sZS5sb2coJ0ZJTEVFRUU6JywgZmlsZSk7XG4gICAgICB0aGlzLmZpbGVEdXBCdG4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgbGV0IHRhc2tQYXJhbUtleXMgPSBPYmplY3Qua2V5cyhcbiAgICAgICAgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShFZGl0b3JQYXJhbXMudGFza1BhcmFtU2NoZW1hLCBudWxsLCAxKSlcbiAgICAgICAgICAucHJvcGVydGllc1xuICAgICAgKTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpbGUpKSB7XG4gICAgICAgIC8vIENBU0U6IEF1dG9tYXRvclxuXG4gICAgICAgIGZvciAobGV0IGlkeCBpbiBmaWxlKSB7XG4gICAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZpbGVbaWR4XSwgdGFza1BhcmFtS2V5cywgMSkpO1xuICAgICAgICAgIGxldCBqc29uMjogYW55ID0ge307XG4gICAgICAgICAgT2JqZWN0LmtleXMoZmlsZVtpZHhdKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICghKGtleSBpbiBqc29uKSkge1xuICAgICAgICAgICAgICBqc29uMltrZXldID0gZmlsZVtpZHhdW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZmlsZVtpZHhdID0gT2JqZWN0LmFzc2lnbihqc29uLCBqc29uMik7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2pzb246JywganNvbiwgJ2pzb24yOicsIGpzb24yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdGSUxFIEFGVEVSIFBST0NFU1NJTkc6JywgZmlsZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZmlsZSwgdGFza1BhcmFtS2V5cywgMSkpO1xuICAgICAgICBsZXQganNvbjI6IGFueSA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhmaWxlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICBpZiAoIShrZXkgaW4ganNvbikpIHtcbiAgICAgICAgICAgIGpzb24yW2tleV0gPSBmaWxlW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ2pzb246JywganNvbiwgJ2pzb24yOicsIGpzb24yKTtcbiAgICAgICAgZmlsZSA9IE9iamVjdC5hc3NpZ24oanNvbiwganNvbjIpO1xuICAgICAgfVxuICAgICAgb3B0aW9ucyA9IHRhc2tQYXJhbU9wdGlvbnM7XG5cbiAgICAgIC8vIHRoaXMuZ2VuU2NlbmVQYXJhbUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbGVEdXBCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIC8vIHRoaXMuZ2VuU2NlbmVQYXJhbUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIHRoaXMuZWRpdG9yLmRlc3Ryb3koKTtcbiAgICB0aGlzLmVkaXRvciA9IG5ldyBKU09ORWRpdG9yKHRoaXMuZWRpdG9yRWxlbWVudCwgb3B0aW9ucywgZmlsZSk7XG4gICAgdGhpcy5hY3RpdmVGaWxlID0geyBsb2M6ICdta3R1cmtmaWxlcycsIGlkOiBmaWxlUmVmIH07XG4gICAgY29uc29sZS5sb2coJ2FjdGl2ZUZpbGUnLCB0aGlzLmFjdGl2ZUZpbGUpO1xuICAgIHRoaXMuZmlsZU5hbWVJbnB1dC5wbGFjZWhvbGRlciA9IGZpbGVSZWYubmFtZTtcbiAgfVxuXG4gIHByaXZhdGUgZmlsZUR1cEJ0bkFjdGlvbigpIHtcbiAgICBsZXQgZmlsZU5hbWUgPSB0aGlzLmZpbGVEdXBNb2RhbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJyNkdXAtZmlsZS1uYW1lJ1xuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcblxuICAgIHRoaXMuZmlsZUR1cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldjogRXZlbnQpID0+IHtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmZpbGVEdXBNb2RhbDtcbiAgICAgIHRoaXMuZmlsZUR1cE1vZGFsLnNob3dNb2RhbCgpO1xuICAgICAgbGV0IGFjdGl2ZUZpbGVOYW1lID0gdGhpcy5hY3RpdmVGaWxlLmlkIGFzIEZpbGVSZWY7XG4gICAgICBmaWxlTmFtZS52YWx1ZSA9ICdDb3B5IG9mICcgKyBhY3RpdmVGaWxlTmFtZS5uYW1lO1xuICAgICAgZmlsZU5hbWUuZm9jdXMoKTtcbiAgICAgIGZpbGVOYW1lLnNlbGVjdCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5maWxlRHVwTW9kYWwucXVlcnlTZWxlY3RvcignLmNsb3NlJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5maWxlRHVwTW9kYWwuY2xvc2UoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZmlsZUR1cE1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5zYXZlJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbGV0IHNyY0ZpbGVSZWYgPSB0aGlzLmFjdGl2ZUZpbGUuaWQgYXMgRmlsZVJlZjtcbiAgICAgIC8vIGxldCBkdXBGaWxlUmVmID0gc3JjRmlsZVJlZi5wYXJlbnQ/LmNoaWxkKGZpbGVOYW1lLnZhbHVlKTtcbiAgICAgIGxldCBkdXBGaWxlUmVmID0gcmVmKHNyY0ZpbGVSZWYucGFyZW50ISwgZmlsZU5hbWUudmFsdWUpO1xuICAgICAgbGV0IGR1cEZpbGUgPSBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkodGhpcy5lZGl0b3IuZ2V0KCksIG51bGwsIDEpXSk7XG4gICAgICBsZXQgbWQgPSB7XG4gICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9O1xuXG4gICAgICB1cGxvYWRCeXRlcyhkdXBGaWxlUmVmLCBkdXBGaWxlLCBtZClcbiAgICAgICAgLnRoZW4oYXN5bmMgKHNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1tET0NVTUVOVCBEVVBMSUNBVEVEXTonLCBzbmFwc2hvdCk7XG4gICAgICAgICAgYWxlcnQoJ0RvY3VtZW50IER1cGxpY2F0ZWQnKTtcbiAgICAgICAgICBsZXQgZmlsZUR1cEV2ZW50ID0gbmV3IEV2ZW50KCdzdG9yYWdlRmlsZUNoYW5nZWQnKTtcbiAgICAgICAgICB0aGlzLmZpbGVOYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICB0aGlzLmRpc3BsYXlTdG9yYWdlVGV4dEZpbGUoZHVwRmlsZVJlZik7XG4gICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChmaWxlRHVwRXZlbnQpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGU6IEVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignW0RPQ1VNRU5UIERVUExJQ0FURSBGQUlMRURdOicsIGUpO1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3NyY0ZpbGU6Jywgc3JjRmlsZVJlZiwgJ2Rlc3RGaWxlOicsIGR1cEZpbGVSZWYpO1xuICAgICAgICAgIGFsZXJ0KCdEb2N1bWVudCBEdXBsaWNhdGlvbiBGYWlsZWQnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIC8vIGR1cEZpbGVSZWY/LnB1dChkdXBGaWxlLCBtZCkudGhlbihhc3luYyAoc25hcHNob3QpID0+IHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ1tET0NVTUVOVCBEVVBMSUNBVEVEXScsIHNuYXBzaG90KTtcbiAgICAgIC8vICAgYWxlcnQoJ0RvY3VtZW50IER1cGxpY2F0ZWQnKTtcbiAgICAgIC8vICAgbGV0IGZpbGVEdXBFdmVudCA9IG5ldyBFdmVudCgnc3RvcmFnZUZpbGVDaGFuZ2VkJyk7XG4gICAgICAvLyAgIHRoaXMuZmlsZU5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgLy8gICB0aGlzLmRpc3BsYXlTdG9yYWdlVGV4dEZpbGUoZHVwRmlsZVJlZiEpO1xuICAgICAgLy8gICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGZpbGVEdXBFdmVudCk7XG4gICAgICAvLyB9KS5jYXRjaChlID0+IHtcbiAgICAgIC8vICAgY29uc29sZS5lcnJvcignW0RPQ1VNRU5UIERVUExJQ0FURSBGQUlMRURdOicsIGUpO1xuICAgICAgLy8gICBjb25zb2xlLmVycm9yKCdzcmNGaWxlJywgc3JjRmlsZVJlZiwgJ2R1cEZpbGUnLCBkdXBGaWxlUmVmKTtcbiAgICAgIC8vICAgYWxlcnQoJ0RvY3VtZW50IER1cCBGYWlsZWQnKTtcbiAgICAgIC8vIH0pO1xuXG4gICAgICB0aGlzLmZpbGVEdXBNb2RhbC5jbG9zZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZVNjZW5lUGFyYW1Nb2RhbEFjdGlvbigpIHtcbiAgICBsZXQgY29sbGFwc2libGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICdjb2xsYXBzaWJsZSdcbiAgICApIGFzIEhUTUxDb2xsZWN0aW9uT2Y8SFRNTEJ1dHRvbkVsZW1lbnQ+O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGFwc2libGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY29sbCA9IGNvbGxhcHNpYmxlc1tpXTtcbiAgICAgIGNvbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbGwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgIGxldCBjb250ZW50ID0gY29sbC5uZXh0RWxlbWVudFNpYmxpbmcgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgICAgIGlmIChjb250ZW50LnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcbiAgICAgICAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IGluaXREYXRhU2l6ZSA9IFt7IHNhbXBsaW5nOiAnZ2F1c3NpYW4nLCBwYXJhbXM6ICcwLCAxJywgbjogNSB9XTtcblxuICAgIGxldCBydFNpemUgPSBuZXcgVGFidWxhdG9yKCcjc2l6ZS1pbmNoZXMtdGFibGUnLCB7XG4gICAgICBkYXRhOiBpbml0RGF0YVNpemUsXG4gICAgICBsYXlvdXQ6ICdmaXRDb2x1bW5zJyxcbiAgICAgIGhpc3Rvcnk6IHRydWUsXG4gICAgICBjb2x1bW5zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ1NhbXBsaW5nJyxcbiAgICAgICAgICBmaWVsZDogJ3NhbXBsaW5nJyxcbiAgICAgICAgICBlZGl0b3I6ICdzZWxlY3QnLFxuICAgICAgICAgIGVkaXRvclBhcmFtczogeyB2YWx1ZXM6IFsnZ2F1c3NpYW4nLCAndW5pZm9ybScsICdyYW5nZSddIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHsgdGl0bGU6ICdQYXJhbXMnLCBmaWVsZDogJ3BhcmFtcycsIGVkaXRvcjogJ2lucHV0JywgZWRpdGFibGU6IHRydWUgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnbiB8fCBzdGVwIHNpemUnLFxuICAgICAgICAgIGZpZWxkOiAnbicsXG4gICAgICAgICAgZWRpdG9yOiAnaW5wdXQnLFxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIGxldCBzekRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXplLWluY2hlcycpIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgIGxldCBhZGRSb3dTaXplID0gc3pEaXYucXVlcnlTZWxlY3RvcignLmFkZC1ydWxlLWJ0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIGxldCB1bmRvU3ogPSBzekRpdi5xdWVyeVNlbGVjdG9yKCcudW5kby1lZGl0LWJ0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuXG4gICAgYWRkUm93U2l6ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldjogRXZlbnQpID0+IHtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBydFNpemUuYWRkUm93KHsgc2FtcGxpbmc6ICcnLCBwYXJhbXM6ICcnLCBuOiBOYU4gfSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gICAgdW5kb1N6LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2OiBFdmVudCkgPT4ge1xuICAgICAgcnRTaXplLnVuZG8oKTtcbiAgICB9KTtcblxuICAgIGxldCBpbml0RGF0YVBvcyA9IFtcbiAgICAgIHsgdGFyZ2V0OiAneCcsIHNhbXBsaW5nOiAnZ2F1c3NpYW4nLCBwYXJhbXM6ICcwLCAxJywgbjogNSB9LFxuICAgIF07XG5cbiAgICBsZXQgcnRQb3MgPSBuZXcgVGFidWxhdG9yKCcjcG9zaXRpb24taW5jaGVzLXRhYmxlJywge1xuICAgICAgZGF0YTogaW5pdERhdGFQb3MsXG4gICAgICBsYXlvdXQ6ICdmaXRDb2x1bW5zJyxcbiAgICAgIGhpc3Rvcnk6IHRydWUsXG4gICAgICBjb2x1bW5zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ1RhcmdldCcsXG4gICAgICAgICAgZmllbGQ6ICd0YXJnZXQnLFxuICAgICAgICAgIGVkaXRvcjogJ3NlbGVjdCcsXG4gICAgICAgICAgZWRpdG9yUGFyYW1zOiB7IHZhbHVlczogWyd4JywgJ3knLCAneiddIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ1NhbXBsaW5nJyxcbiAgICAgICAgICBmaWVsZDogJ3NhbXBsaW5nJyxcbiAgICAgICAgICBlZGl0b3I6ICdzZWxlY3QnLFxuICAgICAgICAgIGVkaXRvclBhcmFtczogeyB2YWx1ZXM6IFsnZ2F1c3NpYW4nLCAndW5pZm9ybScsICdyYW5nZSddIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHsgdGl0bGU6ICdQYXJhbXMnLCBmaWVsZDogJ3BhcmFtcycsIGVkaXRvcjogJ2lucHV0JywgZWRpdGFibGU6IHRydWUgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnbiB8fCBzdGVwIHNpemUnLFxuICAgICAgICAgIGZpZWxkOiAnbicsXG4gICAgICAgICAgZWRpdG9yOiAnaW5wdXQnLFxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIGxldCBwb3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zaXRpb24taW5jaGVzJykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgbGV0IGFkZFJvd1BvcyA9IHBvc0Rpdi5xdWVyeVNlbGVjdG9yKCcuYWRkLXJ1bGUtYnRuJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgbGV0IHVuZG9Qb3MgPSBwb3NEaXYucXVlcnlTZWxlY3RvcignLnVuZG8tZWRpdC1idG4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcblxuICAgIGFkZFJvd1Bvcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldjogRXZlbnQpID0+IHtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBydFBvcy5hZGRSb3coeyB0YXJnZXQ6ICcnLCBzYW1wbGluZzogJycsIHBhcmFtczogJycsIG46IE5hTiB9KTtcbiAgICB9KTtcblxuICAgIHVuZG9Qb3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICBydFBvcy51bmRvKCk7XG4gICAgfSk7XG5cbiAgICBsZXQgaW5pdERhdGFEZWcgPSBbXG4gICAgICB7IHRhcmdldDogJ3gnLCBzYW1wbGluZzogJ2dhdXNzaWFuJywgcGFyYW1zOiAnMCwgMScsIG46IDUgfSxcbiAgICBdO1xuXG4gICAgbGV0IHJ0RGVnID0gbmV3IFRhYnVsYXRvcignI3JvdGF0aW9uLWRlZ3JlZXMtdGFibGUnLCB7XG4gICAgICBkYXRhOiBpbml0RGF0YURlZyxcbiAgICAgIGxheW91dDogJ2ZpdENvbHVtbnMnLFxuICAgICAgaGlzdG9yeTogdHJ1ZSxcbiAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnVGFyZ2V0JyxcbiAgICAgICAgICBmaWVsZDogJ3RhcmdldCcsXG4gICAgICAgICAgZWRpdG9yOiAnc2VsZWN0JyxcbiAgICAgICAgICBlZGl0b3JQYXJhbXM6IHsgdmFsdWVzOiBbJ3gnLCAneScsICd6J10gfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnU2FtcGxpbmcnLFxuICAgICAgICAgIGZpZWxkOiAnc2FtcGxpbmcnLFxuICAgICAgICAgIGVkaXRvcjogJ3NlbGVjdCcsXG4gICAgICAgICAgZWRpdG9yUGFyYW1zOiB7IHZhbHVlczogWydnYXVzc2lhbicsICd1bmlmb3JtJywgJ3JhbmdlJ10gfSxcbiAgICAgICAgfSxcbiAgICAgICAgeyB0aXRsZTogJ1BhcmFtcycsIGZpZWxkOiAncGFyYW1zJywgZWRpdG9yOiAnaW5wdXQnLCBlZGl0YWJsZTogdHJ1ZSB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICduIHx8IHN0ZXAgc2l6ZScsXG4gICAgICAgICAgZmllbGQ6ICduJyxcbiAgICAgICAgICBlZGl0b3I6ICdpbnB1dCcsXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgbGV0IGRlZ0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGlvbi1kZWdyZWVzJykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgbGV0IGFkZFJvd0RlZyA9IGRlZ0Rpdi5xdWVyeVNlbGVjdG9yKCcuYWRkLXJ1bGUtYnRuJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgbGV0IHVuZG9EZWcgPSBkZWdEaXYucXVlcnlTZWxlY3RvcignLnVuZG8tZWRpdC1idG4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcblxuICAgIGFkZFJvd0RlZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldjogRXZlbnQpID0+IHtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBydERlZy5hZGRSb3coeyB0YXJnZXQ6ICcnLCBzYW1wbGluZzogJycsIHBhcmFtczogJycsIG46IE5hTiB9KTtcbiAgICB9KTtcblxuICAgIHVuZG9EZWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICBydERlZy51bmRvKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlbmFtZVRleHRGaWVsZEFjdGlvbigpIHtcbiAgICB0aGlzLmZpbGVOYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICBsZXQgdG1wTmFtZSA9IHRoaXMuYWN0aXZlRmlsZS5pZCBhcyBGaWxlUmVmO1xuICAgICAgbGV0IGN1ckZpbGVOYW1lID0gdG1wTmFtZS5uYW1lO1xuICAgICAgdGhpcy5maWxlTmFtZUlucHV0LnZhbHVlID0gY3VyRmlsZU5hbWU7XG4gICAgICB0aGlzLmZpbGVOYW1lSW5wdXQuZm9jdXMoKTtcbiAgICAgIHRoaXMuZmlsZU5hbWVJbnB1dC5zZWxlY3QoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuYW1lQnRuQWN0aW9uKCkge1xuICAgIHRoaXMuZmlsZVJlbmFtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldjogRXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmZpbGVOYW1lSW5wdXQudmFsdWUpIHtcbiAgICAgICAgbGV0IG9sZEZpbGVSZWYgPSB0aGlzLmFjdGl2ZUZpbGUuaWQgYXMgRmlsZVJlZjtcbiAgICAgICAgbGV0IG5ld0ZpbGVSZWYgPSByZWYob2xkRmlsZVJlZi5wYXJlbnQhLCB0aGlzLmZpbGVOYW1lSW5wdXQudmFsdWUpO1xuICAgICAgICAvLyBsZXQgbmV3RmlsZVJlZiA9IG9sZEZpbGVSZWYucGFyZW50Py5jaGlsZCh0aGlzLmZpbGVOYW1lSW5wdXQudmFsdWUpO1xuICAgICAgICBsZXQgbmV3RmlsZSA9IG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeSh0aGlzLmVkaXRvci5nZXQoKSwgbnVsbCwgMSldKTtcbiAgICAgICAgbGV0IG1kID0ge1xuICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH07XG5cbiAgICAgICAgdXBsb2FkQnl0ZXMobmV3RmlsZVJlZiwgbmV3RmlsZSwgbWQpXG4gICAgICAgICAgLnRoZW4oYXN5bmMgKHNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICBhd2FpdCBkZWxldGVPYmplY3Qob2xkRmlsZVJlZik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW0RPQ1VNRU5UIFJFTkFNRURdOicsIHNuYXBzaG90KTtcbiAgICAgICAgICAgIGFsZXJ0KCdEb2N1bWVudCBSZW5hbWVkJyk7XG4gICAgICAgICAgICBsZXQgcmVuYW1lRXZlbnQgPSBuZXcgRXZlbnQoJ3N0b3JhZ2VGaWxlQ2hhbmdlZCcpO1xuICAgICAgICAgICAgdGhpcy5maWxlTmFtZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlTdG9yYWdlVGV4dEZpbGUobmV3RmlsZVJlZiEpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChyZW5hbWVFdmVudCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGU6IEVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbRE9DVU1FTlQgUkVOQU1FIEZBSUxFRF06JywgZSk7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdvbGRGaWxlJywgb2xkRmlsZVJlZiwgJ25ld0ZpbGUnLCBuZXdGaWxlUmVmKTtcbiAgICAgICAgICAgIGFsZXJ0KCdEb2N1bWVudCBSZW5hbWUgRmFpbGVkJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIC8vIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2ZpbGUgbmFtZSBpbnB1dCBmaWVsZCBpcyBudWxsJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckJ0bkFjdGlvbigpIHtcbiAgICB0aGlzLnJlbmRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQ6IEV2ZW50KSA9PiB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZWRpdG9yLmdldCgpKTtcbiAgICAgIGNvbnN0IHJlbmRlclJlcXVlc3QgPSBuZXcgQ3VzdG9tRXZlbnQoJ29uUmVuZGVyUmVxdWVzdCcsIHtcbiAgICAgICAgZGV0YWlsOiB0aGlzLmVkaXRvci5nZXQoKSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5yZW5kZXJCdG4uZGlzcGF0Y2hFdmVudChyZW5kZXJSZXF1ZXN0KTtcbiAgICB9KTtcbiAgICAvLyBjb25zdCByZW5kZXJSZXF1ZXN0ID0gbmV3IEN1c3RvbUV2ZW50KCdvblJlbmRlclJlcXVlc3QnLCB7XG4gICAgLy8gICBkZXRhaWw6IHRoaXMuZWRpdG9yLmdldCgpLFxuICAgIC8vIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVCdG5BY3Rpb24oKSB7XG4gICAgdGhpcy51cGRhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snIHx8ICdwb2ludGVydXAnLCAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBsZXQgbG9jID0gdGhpcy5hY3RpdmVGaWxlLmxvYztcblxuICAgICAgaWYgKFxuICAgICAgICBsb2MgPT09ICdtYXJtb3NldHMnIHx8XG4gICAgICAgIGxvYyA9PT0gJ21rdHVya2RhdGEnIHx8XG4gICAgICAgIGxvYyA9PT0gJ2RldmljZXMnIHx8XG4gICAgICAgIGxvYyA9PT0gJ21rc2NhbGUnIHx8XG4gICAgICAgIGxvYyA9PT0gJ2V5ZWNhbGlicmF0aW9ucycgfHxcbiAgICAgICAgbG9jID09PSAnbWtkYWlseWRhdGEnXG4gICAgICApIHtcbiAgICAgICAgLy8gaGFuZGxlIG1hcm1vc2V0cyAmJiBta3R1cmtkYXRhXG4gICAgICAgIGxldCBpZCA9IHRoaXMuYWN0aXZlRmlsZS5pZCBhcyBzdHJpbmc7XG5cbiAgICAgICAgc2V0RG9jKGRvYyhkYiwgbG9jLCBpZCksIHRoaXMuZGF0ZVRvVGltZXN0YW1wKHRoaXMuZWRpdG9yLmdldCgpKSlcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW0RPQ1VNRU5UIFVQREFURURdOicsIGlkKTtcbiAgICAgICAgICAgIGFsZXJ0KCdEb2N1bWVudCBVcGRhdGVkJyk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGU6IEVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbRE9DVU1FTlQgVVBEQVRFIEZBSUxFRF0nLCAnRklMRTonLCBpZCwgJ0VSUk9SOicsIGUpO1xuICAgICAgICAgICAgYWxlcnQoJ0RvY3VtZW50IFVwZGF0ZSBGYWlsZWQnKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAvLyBkYi5jb2xsZWN0aW9uKGxvYykuZG9jKGlkKS5zZXQoXG4gICAgICAgIC8vICAgdGhpcy5kYXRlVG9UaW1lc3RhbXAodGhpcy5lZGl0b3IuZ2V0KCkpXG4gICAgICAgIC8vICkudGhlbigoKSA9PiB7XG4gICAgICAgIC8vICAgY29uc29sZS5sb2coXCJbRE9DVU1FTlQgVVBEQVRFRF06XCIsIGlkKTtcbiAgICAgICAgLy8gICBhbGVydChcIkRvY3VtZW50IFVwZGF0ZWRcIik7XG4gICAgICAgIC8vIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgICAvLyAgIGNvbnNvbGUuZXJyb3IoXCJbRE9DVU1FTlQgVVBEQVRFIEZBSUxFRF1cIiwgXCJGSUxFOlwiLCBpZCwgXCJFUlJPUjpcIiwgZSk7XG4gICAgICAgIC8vICAgYWxlcnQoXCJEb2N1bWVudCBVcGRhdGUgRmFpbGVkXCIpO1xuICAgICAgICAvLyB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVGaWxlLmxvYyA9PT0gJ21rdHVya2ZpbGVzJykge1xuICAgICAgICAvLyBoYW5kbGUgbWt0dXJrZmlsZXNcbiAgICAgICAgbGV0IGlkID0gdGhpcy5hY3RpdmVGaWxlLmlkIGFzIEZpbGVSZWY7XG4gICAgICAgIGxldCB1cGRhdGVkRmlsZSA9IG5ldyBCbG9iKFtcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLmVkaXRvci5nZXQoKSwgbnVsbCwgMSksXG4gICAgICAgIF0pO1xuICAgICAgICBsZXQgbWV0YWRhdGEgPSB7XG4gICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfTtcblxuICAgICAgICB1cGxvYWRCeXRlcyhpZCwgdXBkYXRlZEZpbGUsIG1ldGFkYXRhKVxuICAgICAgICAgIC50aGVuKChzbmFwc2hvdCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5lZGl0b3IuZ2V0KCkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tET0NVTUVOVCBVUERBVEVEXTonLCBzbmFwc2hvdC5tZXRhZGF0YS5uYW1lKTtcbiAgICAgICAgICAgIGFsZXJ0KCdEb2N1bWVudCBVcGRhdGVkJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnc3RvcmFnZUZpbGVDaGFuZ2VkJykpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlOiBFcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignW0RPQ1VNRU5UIFVQREFURSBGQUlMRURdJywgJ0ZJTEU6JywgaWQsICdFUlJPUjonLCBlKTtcbiAgICAgICAgICAgIGFsZXJ0KCdEb2N1bWVudCBVcGRhdGUgRmFpbGVkJyk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gaWQucHV0KHVwZGF0ZWRGaWxlLCBtZXRhZGF0YSkudGhlbihzbmFwc2hvdCA9PiB7XG4gICAgICAgIC8vICAgY29uc29sZS5sb2codGhpcy5lZGl0b3IuZ2V0KCkpO1xuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwiW0RPQ1VNRU5UIFVQREFURURdOlwiLCBzbmFwc2hvdC5tZXRhZGF0YS5uYW1lKTtcbiAgICAgICAgLy8gICBhbGVydChcIkRvY3VtZW50IFVwZGF0ZWRcIik7XG4gICAgICAgIC8vICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3N0b3JhZ2VGaWxlQ2hhbmdlZCcpKTtcbiAgICAgICAgLy8gfSkuY2F0Y2goZSA9PiB7XG4gICAgICAgIC8vICAgY29uc29sZS5lcnJvcihcIltET0NVTUVOVCBVUERBVEUgRkFJTEVEXVwiLCBcIkZJTEU6XCIsIGlkLCBcIkVSUk9SOlwiLCBlKTtcbiAgICAgICAgLy8gICBhbGVydChcIkRvY3VtZW50IFVwZGF0ZSBGYWlsZWRcIik7XG4gICAgICAgIC8vIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignW0RPQ1VNRU5UIFVQREFURSBGQUlMRURdIEVSUk9SOiBMb2NhdGlvbiBFcnJvcicpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBtYWtlQWN0aXZlQnRuQWN0aW9uKCkge1xuICAgIHRoaXMubWFrZUFjdGl2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycgfHwgJ3BvaW50ZXJ1cCcsIChldjogRXZlbnQpID0+IHtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuYWN0aXZlRmlsZSk7XG4gICAgICBsZXQgc3RvcmFnZVJlZiA9IHJlZihzdG9yYWdlKTtcbiAgICAgIGxldCBmaWxlID0gdGhpcy5lZGl0b3IuZ2V0KCk7XG4gICAgICBsZXQgZmlsZU5hbWUgPVxuICAgICAgICAnbWt0dXJrZmlsZXMvcGFyYW1ldGVyZmlsZXMvc3ViamVjdHMvJyArIGZpbGUuQWdlbnQgKyAnX3BhcmFtcy5qc29uJztcbiAgICAgIC8vIGxldCBmaWxlUmVmID0gc3RvcmFnZVJlZi5jaGlsZChmaWxlTmFtZSk7XG4gICAgICBsZXQgZmlsZVJlZiA9IHJlZihzdG9yYWdlUmVmLCBmaWxlTmFtZSk7XG4gICAgICBmaWxlID0gbmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KGZpbGUsIG51bGwsIDEpXSk7XG4gICAgICBsZXQgbWV0YWRhdGEgPSB7XG4gICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9O1xuXG4gICAgICB1cGxvYWRCeXRlcyhmaWxlUmVmLCBmaWxlLCBtZXRhZGF0YSlcbiAgICAgICAgLnRoZW4oKHNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1tQQVJBTSBNQURFIEFDVElWRV06Jywgc25hcHNob3QubWV0YWRhdGEubmFtZSk7XG4gICAgICAgICAgYWxlcnQoJ1BhcmFtIEFjdGl2ZScpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGU6IEVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICdbUEFSQU0gQUNUSVZBVElPTiBGQUlMRURdJyxcbiAgICAgICAgICAgICdGSUxFOicsXG4gICAgICAgICAgICBmaWxlUmVmLFxuICAgICAgICAgICAgJ0VSUk9SJyxcbiAgICAgICAgICAgIGVcbiAgICAgICAgICApO1xuICAgICAgICAgIGFsZXJ0KCdQYXJhbSBBY3RpdmF0aW9uIEZhaWxlZCcpO1xuICAgICAgICB9KTtcblxuICAgICAgLy8gZmlsZVJlZi5wdXQoZmlsZSwgbWV0YWRhdGEpLnRoZW4oc25hcHNob3QgPT4ge1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhcIltQQVJBTSBNQURFIEFDVElWRV06XCIsIHNuYXBzaG90Lm1ldGFkYXRhLm5hbWUpO1xuICAgICAgLy8gICBhbGVydChcIlBhcmFtIEFjdGl2ZVwiKTtcbiAgICAgIC8vIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgLy8gICBjb25zb2xlLmVycm9yKFwiW1BBUkFNIEFDVElWQVRJT04gRkFJTEVEXVwiLCBcIkZJTEU6XCIsIGZpbGVSZWYsIFwiRVJST1JcIiwgZSk7XG4gICAgICAvLyAgIGFsZXJ0KFwiUGFyYW0gQWN0aXZhdGlvbiBGYWlsZWRcIik7XG4gICAgICAvLyB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc3RvcmVQYXJhbUJ0bkFjdGlvbigpIHtcbiAgICB0aGlzLnN0b3JlUGFyYW1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snIHx8ICdwb2ludGVydXAnLCAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmFjdGl2ZUZpbGUpO1xuICAgICAgLy8gbGV0IHN0b3JhZ2VSZWYgPSBzdG9yYWdlLnJlZigpO1xuICAgICAgbGV0IHN0b3JhZ2VSZWYgPSByZWYoc3RvcmFnZSk7XG4gICAgICBsZXQgZmlsZSA9IHRoaXMuZWRpdG9yLmdldCgpO1xuICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgbGV0IGZpbGVOYW1lID1cbiAgICAgICAgJ21rdHVya2ZpbGVzL3BhcmFtZXRlcmZpbGVzL3BhcmFtc19zdG9yYWdlLycgK1xuICAgICAgICBmaWxlLkFnZW50ICtcbiAgICAgICAgJ19wYXJhbXNfJyArXG4gICAgICAgIGRhdGUudG9KU09OKCkuc3BsaXQoJ1QnKVswXSArXG4gICAgICAgICcuanNvbic7XG5cbiAgICAgIC8vIGxldCBmaWxlUmVmID0gc3RvcmFnZVJlZi5jaGlsZChmaWxlTmFtZSk7XG4gICAgICBsZXQgZmlsZVJlZiA9IHJlZihzdG9yYWdlUmVmLCBmaWxlTmFtZSk7XG5cbiAgICAgIGZpbGUgPSBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkoZmlsZSwgbnVsbCwgMSldKTtcbiAgICAgIGxldCBtZXRhZGF0YSA9IHtcbiAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH07XG5cbiAgICAgIHVwbG9hZEJ5dGVzKGZpbGVSZWYsIGZpbGUsIG1ldGFkYXRhKVxuICAgICAgICAudGhlbigoc25hcHNob3QpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnW1BBUkFNIFNUT1JFRF06Jywgc25hcHNob3QubWV0YWRhdGEubmFtZSk7XG4gICAgICAgICAgYWxlcnQoJ1BhcmFtIHN0b3JlZCcpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGU6IEVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignW1BBUkFNIFNUT1JBR0UgRkFJTEVEXScsICdGSUxFOicsIGZpbGVSZWYsICdFUlJPUicsIGUpO1xuICAgICAgICAgIGFsZXJ0KCdQYXJhbSBTdG9yYWdlIEZhaWxlZCcpO1xuICAgICAgICB9KTtcblxuICAgICAgLy8gZmlsZVJlZi5wdXQoZmlsZSwgbWV0YWRhdGEpLnRoZW4oc25hcHNob3QgPT4ge1xuICAgICAgLy8gICBjb25zb2xlLmxvZygnW1BBUkFNIFNUT1JFRF06Jywgc25hcHNob3QubWV0YWRhdGEubmFtZSk7XG4gICAgICAvLyAgIGFsZXJ0KCdQYXJhbSBzdG9yZWQnKTtcbiAgICAgIC8vIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgLy8gICBjb25zb2xlLmVycm9yKCdbUEFSQU0gU1RPUkFHRSBGQUlMRURdJywgJ0ZJTEU6JywgZmlsZVJlZiwgJ0VSUk9SJywgZSk7XG4gICAgICAvLyAgIGFsZXJ0KCdQYXJhbSBTdG9yYWdlIEZhaWxlZCcpO1xuICAgICAgLy8gfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdlbkJ0bkFjdGlvbigpIHtcbiAgICB0aGlzLmdlbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldjogRXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmdlbkJ0bi52YWx1ZSA9PSAnZ2VuZXJhdGUnKSB7XG4gICAgICAgIHRoaXMudXNlckVkaXRlZFNjZW5lUGFyYW0gPSB0aGlzLmVkaXRvci5nZXQoKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZWRTY2VuZVBhcmFtID0gdGhpcy5wZS5nZW5lcmF0ZVBhcmFtT2JqZWN0KFxuICAgICAgICAgIHRoaXMudXNlckVkaXRlZFNjZW5lUGFyYW0sXG4gICAgICAgICAgJ3ZlY3Rvcml6ZSdcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5lZGl0b3IuZGVzdHJveSgpO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICBtb2RlczogWyd0cmVlJyBhcyAndHJlZScsICdjb2RlJyBhcyAnY29kZSddLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVkaXRvciA9IG5ldyBKU09ORWRpdG9yKFxuICAgICAgICAgIHRoaXMuZWRpdG9yRWxlbWVudCxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIHRoaXMuZ2VuZXJhdGVkU2NlbmVQYXJhbVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmdlbkJ0bi52YWx1ZSA9ICdyZXZlcnQnO1xuICAgICAgICB0aGlzLmdlbkJ0bi50ZXh0Q29udGVudCA9ICdSZXZlcnQnO1xuICAgICAgICB0aGlzLnVwZGF0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnN2U2NlbmVCdG4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICB0aGlzLmJ0bkJveERpdi5zdHlsZS5ncmlkVGVtcGxhdGVBcmVhcyA9XG4gICAgICAgICAgJ1wicGFyYW0tZ2VuLWJ0bi1ib3ggc3Ytc2NlbmUtcGFyYW0tYnRuXCInO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmdlbkJ0bi52YWx1ZSA9PSAncmV2ZXJ0Jykge1xuICAgICAgICB0aGlzLmVkaXRvci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVkU2NlbmVQYXJhbSA9IHt9O1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICBtb2RlczogWyd0cmVlJyBhcyAndHJlZScsICdjb2RlJyBhcyAnY29kZSddLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVkaXRvciA9IG5ldyBKU09ORWRpdG9yKFxuICAgICAgICAgIHRoaXMuZWRpdG9yRWxlbWVudCxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIHRoaXMudXNlckVkaXRlZFNjZW5lUGFyYW1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5nZW5CdG4udmFsdWUgPSAnZ2VuZXJhdGUnO1xuICAgICAgICB0aGlzLmdlbkJ0bi50ZXh0Q29udGVudCA9ICdWZWN0b3JpemUgUGFyYW0nO1xuICAgICAgICB0aGlzLnN2U2NlbmVCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy51cGRhdGVCdG4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICB0aGlzLmJ0bkJveERpdi5zdHlsZS5ncmlkVGVtcGxhdGVBcmVhcyA9XG4gICAgICAgICAgJ1wicGFyYW0tZ2VuLWJ0bi1ib3ggdXBkYXRlLWJ0blwiJztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZXhwYW5kQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2OiBFdmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZXhwYW5kQnRuLnZhbHVlID09ICdleHBhbmQnKSB7XG4gICAgICAgIHRoaXMudXNlckVkaXRlZFNjZW5lUGFyYW0gPSB0aGlzLmVkaXRvci5nZXQoKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZWRTY2VuZVBhcmFtID0gdGhpcy5wZS5nZW5lcmF0ZVBhcmFtT2JqZWN0KFxuICAgICAgICAgIHRoaXMudXNlckVkaXRlZFNjZW5lUGFyYW0sXG4gICAgICAgICAgJ2V4cGFuZCdcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5lZGl0b3IuZGVzdHJveSgpO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICBtb2RlczogWyd0cmVlJyBhcyAndHJlZScsICdjb2RlJyBhcyAnY29kZSddLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVkaXRvciA9IG5ldyBKU09ORWRpdG9yKFxuICAgICAgICAgIHRoaXMuZWRpdG9yRWxlbWVudCxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIHRoaXMuZ2VuZXJhdGVkU2NlbmVQYXJhbVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmV4cGFuZEJ0bi52YWx1ZSA9ICdyZXZlcnQnO1xuICAgICAgICB0aGlzLmV4cGFuZEJ0bi50ZXh0Q29udGVudCA9ICdSZXZlcnQnO1xuICAgICAgICB0aGlzLnVwZGF0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnN2U2NlbmVCdG4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICB0aGlzLmJ0bkJveERpdi5zdHlsZS5ncmlkVGVtcGxhdGVBcmVhcyA9XG4gICAgICAgICAgJ1wicGFyYW0tZ2VuLWJ0bi1ib3ggc3Ytc2NlbmUtcGFyYW0tYnRuXCInO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmV4cGFuZEJ0bi52YWx1ZSA9PSAncmV2ZXJ0Jykge1xuICAgICAgICB0aGlzLmVkaXRvci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVkU2NlbmVQYXJhbSA9IHt9O1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICBtb2RlczogWyd0cmVlJyBhcyAndHJlZScsICdjb2RlJyBhcyAnY29kZSddLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVkaXRvciA9IG5ldyBKU09ORWRpdG9yKFxuICAgICAgICAgIHRoaXMuZWRpdG9yRWxlbWVudCxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIHRoaXMudXNlckVkaXRlZFNjZW5lUGFyYW1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5leHBhbmRCdG4udmFsdWUgPSAnZXhwYW5kJztcbiAgICAgICAgdGhpcy5leHBhbmRCdG4udGV4dENvbnRlbnQgPSAnRXhwYW5kIFBhcmFtJztcbiAgICAgICAgdGhpcy5zdlNjZW5lQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMudXBkYXRlQnRuLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgdGhpcy5idG5Cb3hEaXYuc3R5bGUuZ3JpZFRlbXBsYXRlQXJlYXMgPVxuICAgICAgICAgICdcInBhcmFtLWdlbi1idG4tYm94IHVwZGF0ZS1idG5cIic7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHN2U2NlbmVCdG5BY3Rpb24oKSB7XG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbGVuYW1lLW1vZGFsJykgYXMgSFRNTERpYWxvZ0VsZW1lbnQ7XG4gICAgbGV0IG1vZGFsRmlsZW5hbWUgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5maWxlbmFtZS1pbnB1dCdcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICB0aGlzLnN2U2NlbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbW9kYWwuc2hvd01vZGFsKCk7XG4gICAgICBsZXQgYWN0aXZlRmlsZU5hbWUgPSB0aGlzLmFjdGl2ZUZpbGUuaWQgYXMgRmlsZVJlZjtcbiAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgbW9kYWxGaWxlbmFtZS52YWx1ZSA9XG4gICAgICAgIG5vdy50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLUNBJykgKyAnXycgKyBhY3RpdmVGaWxlTmFtZS5uYW1lO1xuICAgICAgbW9kYWxGaWxlbmFtZS5mb2N1cygpO1xuICAgICAgbW9kYWxGaWxlbmFtZS5zZWxlY3QoKTtcbiAgICB9KTtcblxuICAgIG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5jbCcpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuc3YnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBsZXQgc3JjUmVmID0gdGhpcy5hY3RpdmVGaWxlLmlkIGFzIEZpbGVSZWY7XG4gICAgICAvLyBsZXQgZGVzdFJlZiA9IHNyY1JlZi5wYXJlbnQ/LnBhcmVudD8uY2hpbGQoJ2dlbmVyYXRlZFBhcmFtcycpLmNoaWxkKG1vZGFsRmlsZW5hbWUudmFsdWUpO1xuICAgICAgbGV0IGRlc3RSZWYgPSByZWYoXG4gICAgICAgIHNyY1JlZi5wYXJlbnQ/LnBhcmVudCEsXG4gICAgICAgIGBnZW5lcmF0ZWRQYXJhbXMvJHttb2RhbEZpbGVuYW1lLnZhbHVlfWBcbiAgICAgICk7XG4gICAgICBsZXQgc2NlbmVTcmNGaWxlTmFtZSA9XG4gICAgICAgIG1vZGFsRmlsZW5hbWUudmFsdWUuc3BsaXQoJy4nKVswXSArXG4gICAgICAgICdfc291cmNlLicgK1xuICAgICAgICBtb2RhbEZpbGVuYW1lLnZhbHVlLnNwbGl0KCcuJylbMV07XG4gICAgICAvLyBsZXQgc2NlbmVTcmNEZXN0UmVmID0gc3JjUmVmLnBhcmVudD8ucGFyZW50Py5jaGlsZCgnZ2VuZXJhdGVkUGFyYW1zJykuY2hpbGQoc2NlbmVTcmNGaWxlTmFtZSk7XG4gICAgICBsZXQgc2NlbmVTcmNEZXN0UmVmID0gcmVmKFxuICAgICAgICBzcmNSZWYucGFyZW50Py5wYXJlbnQhLFxuICAgICAgICBgZ2VuZXJhdGVkUGFyYW1zLyR7c2NlbmVTcmNGaWxlTmFtZX1gXG4gICAgICApO1xuICAgICAgbGV0IGZpbGUgPSBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkodGhpcy5nZW5lcmF0ZWRTY2VuZVBhcmFtLCBudWxsLCAxKV0pO1xuICAgICAgbGV0IHNjZW5lU3JjRmlsZSA9IG5ldyBCbG9iKFtcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy51c2VyRWRpdGVkU2NlbmVQYXJhbSwgbnVsbCwgMSksXG4gICAgICBdKTtcbiAgICAgIGxldCBtZCA9IHtcbiAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH07XG5cbiAgICAgIHVwbG9hZEJ5dGVzKGRlc3RSZWYsIGZpbGUsIG1kKVxuICAgICAgICAudGhlbigoc25hcHNob3QpID0+IHtcbiAgICAgICAgICBhbGVydCgnR2VuZXJhdGVkIHBhcmFtIGZpbGUgd2FzIHNhdmVkJyk7XG4gICAgICAgICAgdGhpcy5nZW5lcmF0ZWRTY2VuZVBhcmFtID0ge307XG4gICAgICAgICAgdGhpcy51c2VyRWRpdGVkU2NlbmVQYXJhbSA9IHt9O1xuICAgICAgICAgIHRoaXMuZGlzcGxheVN0b3JhZ2VUZXh0RmlsZShzcmNSZWYpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGU6IEVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignUGFyYW0gR2VuZXJhdGlvbiBGYWlsZWQ6JywgZSk7XG4gICAgICAgICAgYWxlcnQoJ0dlbmVyYXRlZCBwYXJhbSBmaWxlIHdhcyBOT1Qgc2F2ZWQnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIHVwbG9hZEJ5dGVzKHNjZW5lU3JjRGVzdFJlZiwgc2NlbmVTcmNGaWxlLCBtZCk7XG4gICAgICBtb2RhbC5jbG9zZSgpO1xuXG4gICAgICAvLyBkZXN0UmVmPy5wdXQoZmlsZSwgbWQpLnRoZW4oYXN5bmMgKHNucykgPT4ge1xuICAgICAgLy8gICBhbGVydCgnR2VuZXJhdGVkIHBhcmFtIGZpbGUgd2FzIHNhdmVkJyk7XG4gICAgICAvLyAgIHRoaXMuZ2VuZXJhdGVkU2NlbmVQYXJhbSA9IHt9O1xuICAgICAgLy8gICB0aGlzLnVzZXJFZGl0ZWRTY2VuZVBhcmFtID0ge307XG4gICAgICAvLyAgIHRoaXMuZGlzcGxheVN0b3JhZ2VUZXh0RmlsZShzcmNSZWYpO1xuICAgICAgLy8gfSkuY2F0Y2goZSA9PiB7XG4gICAgICAvLyAgIGNvbnNvbGUuZXJyb3IoJ1BhcmFtIEdlbmVyYXRpb24gRmFpbGVkJyk7XG4gICAgICAvLyAgIGFsZXJ0KCdHZW5lcmF0ZWQgcGFyYW0gZmlsZSB3YXMgTk9UIHNhdmVkJyk7XG4gICAgICAvLyB9KTtcbiAgICAgIC8vIHNjZW5lU3JjRGVzdFJlZj8ucHV0KHNjZW5lU3JjRmlsZSwgbWQpO1xuICAgICAgLy8gbW9kYWwuY2xvc2UoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZGF0ZVRvVGltZXN0YW1wKGRhdGE6IGFueSkge1xuICAgIGZ1bmN0aW9uIF9kYXRlVG9UaW1lc3RhbXAoZWxlbWVudDogc3RyaW5nLCBpZHg6IG51bWJlciwgYXJyOiBhbnlbXSkge1xuICAgICAgbGV0IGR0ID0gbmV3IERhdGUoZWxlbWVudCk7XG4gICAgICBpZiAoXG4gICAgICAgICFpc05hTihOdW1iZXIoZHQpKSAmJlxuICAgICAgICBkdCBpbnN0YW5jZW9mIERhdGUgJiZcbiAgICAgICAgdHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnXG4gICAgICApIHtcbiAgICAgICAgYXJyW2lkeF0gPSBUaW1lc3RhbXAuZnJvbURhdGUoZHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhkYXRhKSkge1xuICAgICAgaWYgKFxuICAgICAgICBBcnJheS5pc0FycmF5KGRhdGFba2V5XSkgJiZcbiAgICAgICAgKGtleS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCd0aW1lJykgfHxcbiAgICAgICAgICBrZXkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnZGF0ZXMnKSlcbiAgICAgICkge1xuICAgICAgICBjb25zb2xlLmxvZygnQVJSQVkgJyArICdkYXRhWycgKyBrZXkgKyAnXScgKyAnPScgKyBkYXRhW2tleV0pO1xuICAgICAgICBkYXRhW2tleV0uZm9yRWFjaChfZGF0ZVRvVGltZXN0YW1wKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0RpY3QoZGF0YVtrZXldKSkge1xuICAgICAgICBmb3IgKGxldCBrZXkyIG9mIE9iamVjdC5rZXlzKGRhdGFba2V5XSkpIHtcbiAgICAgICAgICBsZXQgZHQgPSBuZXcgRGF0ZShkYXRhW2tleV1ba2V5Ml0pO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFpc05hTihOdW1iZXIoZHQpKSAmJlxuICAgICAgICAgICAgZHQgaW5zdGFuY2VvZiBEYXRlICYmXG4gICAgICAgICAgICB0aGlzLmlzU3RyaW5nKGRhdGFba2V5XVtrZXkyXSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEaWN0aW9uYXJ5ICcgKyAnZGF0YVsnICsga2V5ICsgJ10nICsgJz0nICsgZGF0YVtrZXldKTtcbiAgICAgICAgICAgIGRhdGFba2V5XVtrZXkyXSA9IFRpbWVzdGFtcC5mcm9tRGF0ZShkdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0aGlzLmlzU3RyaW5nKGRhdGFba2V5XSkgJiZcbiAgICAgICAgKGtleS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdkYXRlJykgfHxcbiAgICAgICAgICBrZXkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygndGltZScpKVxuICAgICAgKSB7XG4gICAgICAgIGxldCBkdCA9IG5ldyBEYXRlKGRhdGFba2V5XSk7XG4gICAgICAgIGlmICghaXNOYU4oTnVtYmVyKGR0KSkgJiYgZHQgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgZGF0YVtrZXldID0gVGltZXN0YW1wLmZyb21EYXRlKGR0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHByaXZhdGUgaXNEaWN0KHZhbDogYW55KSB7XG4gICAgcmV0dXJuIHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JyAmJiB2YWwuY29uc3RydWN0b3IgPT09IE9iamVjdDtcbiAgfVxuXG4gIHByaXZhdGUgaXNTdHJpbmcodmFsOiBhbnkpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgfHwgdmFsLmNvbnN0cnVjdG9yID09PSBTdHJpbmc7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1rdGhyZWUge1xuICAvKiBUSFJFRS5qcyBtZW1iZXIgdmFyaWFibGVzICovXG4gIHByaXZhdGUgc2NlbmU6IFRIUkVFLlNjZW5lIHwgbnVsbDtcbiAgcHJpdmF0ZSBjYW1lcmE6IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhIHwgbnVsbDtcbiAgcHJpdmF0ZSBjYW1lcmFQb3M6IFRIUkVFLlZlY3RvcjMgfCBudWxsO1xuICBwcml2YXRlIGNvbnRyb2xzOiBPcmJpdENvbnRyb2xzIHwgbnVsbDtcbiAgcHJpdmF0ZSBkaXJMaWdodDogVEhSRUUuRGlyZWN0aW9uYWxMaWdodCB8IG51bGw7XG4gIHByaXZhdGUgZGlyTGlnaHRQb3M6IFRIUkVFLlZlY3RvcjMgfCBudWxsO1xuICBwcml2YXRlIGxpZ2h0OiBUSFJFRS5BbWJpZW50TGlnaHQgfCBudWxsO1xuICBwcml2YXRlIGxvYWRlcjogR0xURkxvYWRlciB8IG51bGw7XG4gIHByaXZhdGUgcmVuZGVyZXI6IFRIUkVFLldlYkdMUmVuZGVyZXIgfCBudWxsO1xuICBwdWJsaWMgYW5pbWF0aW9uSUQ6IG51bWJlcjtcbiAgcHVibGljIGFjdGl2ZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBkYXRHdWk6IEdVSSB8IG51bGw7XG5cbiAgcHVibGljIGNhbnZhczogSFRNTERpdkVsZW1lbnQ7XG4gIHB1YmxpYyBjY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcblxuICAvKiBjb25zdHJ1Y3RvciAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRhdEd1aSA9IG51bGw7XG4gICAgdGhpcy5zY2VuZSA9IG51bGw7XG4gICAgdGhpcy5jYW1lcmEgPSBudWxsO1xuICAgIHRoaXMuY2FtZXJhUG9zID0gbnVsbDtcbiAgICB0aGlzLmNvbnRyb2xzID0gbnVsbDtcbiAgICB0aGlzLmRpckxpZ2h0ID0gbnVsbDtcbiAgICB0aGlzLmRpckxpZ2h0UG9zID0gbnVsbDtcbiAgICB0aGlzLmxpZ2h0ID0gbnVsbDtcbiAgICB0aGlzLmxvYWRlciA9IG51bGw7XG4gICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XG4gICAgdGhpcy5hbmltYXRpb25JRCA9IC0xO1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0LWd1aS1kaXYnKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICB0aGlzLmNjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhyZWUtY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgbGV0IGVkaXRvckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0b3ItZGl2JykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgdGhpcy5jY2FudmFzLndpZHRoID0gZWRpdG9yRGl2Lm9mZnNldFdpZHRoO1xuICAgIHRoaXMuY2NhbnZhcy5oZWlnaHQgPSBlZGl0b3JEaXYub2Zmc2V0SGVpZ2h0O1xuICAgIHRoaXMuY2NhbnZhcy5zdHlsZS53aWR0aCA9IFN0cmluZyhlZGl0b3JEaXYub2Zmc2V0V2lkdGgpO1xuICAgIHRoaXMuY2NhbnZhcy5zdHlsZS5oZWlnaHQgPSBTdHJpbmcoZWRpdG9yRGl2Lm9mZnNldEhlaWdodCk7XG4gICAgdGhpcy5yZXNpemVDYW52YXNBY3Rpb24oKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyByZW5kZXJDdWJlTWFwKGN1YmVNYXBMaXN0OiBhbnkpIHtcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4gICAgICBjYW52YXM6IHRoaXMuY2NhbnZhcyxcbiAgICAgIGFudGlhbGlhczogdHJ1ZSxcbiAgICB9KTtcblxuICAgIHRoaXMucmVuZGVyZXIucGh5c2ljYWxseUNvcnJlY3RMaWdodHMgPSB0cnVlO1xuICAgIHRoaXMucmVuZGVyZXIub3V0cHV0RW5jb2RpbmcgPSBUSFJFRS5zUkdCRW5jb2Rpbmc7XG5cbiAgICAvLyBjYW1lcmEgc2V0dXAgZm9yIGN1YmVtYXAgZGVmYXVsdHMgaW5zaWRlIHRoZSBjdWJlXG4gICAgdGhpcy5jYW1lcmFQb3MgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAxMCk7XG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoXG4gICAgICA0NSxcbiAgICAgIHRoaXMuY2NhbnZhcy53aWR0aCAvIHRoaXMuY2NhbnZhcy5oZWlnaHQsXG4gICAgICAwLjEsXG4gICAgICAyMDAwXG4gICAgKTtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5zZXQoXG4gICAgICB0aGlzLmNhbWVyYVBvcy54LFxuICAgICAgdGhpcy5jYW1lcmFQb3MueSxcbiAgICAgIHRoaXMuY2FtZXJhUG9zLnpcbiAgICApO1xuXG4gICAgdGhpcy5jb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKHRoaXMuY2FtZXJhLCB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuICAgIHRoaXMuY29udHJvbHMudGFyZ2V0LnNldCgwLCAwLCAwKTtcbiAgICB0aGlzLmNvbnRyb2xzLnVwZGF0ZSgpO1xuXG4gICAgdGhpcy5kaXJMaWdodFBvcyA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDIsIDApO1xuICAgIHRoaXMuZGlyTGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZiwgMCk7XG4gICAgdGhpcy5kaXJMaWdodC5wb3NpdGlvbi5zZXQoXG4gICAgICB0aGlzLmRpckxpZ2h0UG9zLngsXG4gICAgICB0aGlzLmRpckxpZ2h0UG9zLnksXG4gICAgICB0aGlzLmRpckxpZ2h0UG9zLnpcbiAgICApO1xuICAgIHRoaXMubGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4NDA0MDQwLCAwLjA1KTsgLy8gKDB4NDA0MDQwLCAwLjEpXG4gICAgY29uc3QgYW1iaWVudExpZ2h0UGFyYW1zID0ge1xuICAgICAgY29sb3I6ICcjNDA0MDQwJyxcbiAgICAgIGludGVuc2l0eTogMC4wNSxcbiAgICB9O1xuXG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuY2FtZXJhKTtcbiAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmRpckxpZ2h0KTtcbiAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmxpZ2h0KTtcblxuICAgIC8vIG9yZGVyOiB4cmlnaHQsIHhsZWZ0LCB5dG9wLCB5Ym90dG9tLCB6ZnJvbnQsIHpiYWNrXG4gICAgY29uc3QgY3ViZU1hcFVSTHMgPSBbXG4gICAgICBhd2FpdCBnZXREb3dubG9hZFVSTChyZWYoc3RvcmFnZSwgY3ViZU1hcExpc3QueHJpZ2h0KSksXG4gICAgICBhd2FpdCBnZXREb3dubG9hZFVSTChyZWYoc3RvcmFnZSwgY3ViZU1hcExpc3QueGxlZnQpKSxcbiAgICAgIGF3YWl0IGdldERvd25sb2FkVVJMKHJlZihzdG9yYWdlLCBjdWJlTWFwTGlzdC55dG9wKSksXG4gICAgICBhd2FpdCBnZXREb3dubG9hZFVSTChyZWYoc3RvcmFnZSwgY3ViZU1hcExpc3QueWJvdHRvbSkpLFxuICAgICAgYXdhaXQgZ2V0RG93bmxvYWRVUkwocmVmKHN0b3JhZ2UsIGN1YmVNYXBMaXN0Lnpmcm9udCkpLFxuICAgICAgYXdhaXQgZ2V0RG93bmxvYWRVUkwocmVmKHN0b3JhZ2UsIGN1YmVNYXBMaXN0LnpiYWNrKSksXG4gICAgXTtcblxuICAgIGNvbnN0IGxvYWRlciA9IG5ldyBUSFJFRS5DdWJlVGV4dHVyZUxvYWRlcigpO1xuICAgIGNvbnN0IHRleHR1cmUgPSBsb2FkZXIubG9hZChjdWJlTWFwVVJMcyk7XG5cbiAgICB0aGlzLmRhdEd1aSA9IG5ldyBHVUkoeyBhdXRvUGxhY2U6IGZhbHNlIH0pO1xuICAgIGNvbnN0IGRpckxpZ2h0UGFyYW1zID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDIsXG4gICAgICB6OiAwLFxuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIGludGVuc2l0eTogMCxcbiAgICB9O1xuXG4gICAgY29uc3QgY2FtZXJhUG9zaXRpb25QYXJhbXMgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICAgIHo6IDEwLFxuICAgIH07XG5cbiAgICBjb25zdCBjYW1lcmFQb3NpdGlvbkZvbGRlciA9IHRoaXMuZGF0R3VpLmFkZEZvbGRlcignQ2FtZXJhIFBvc2l0aW9uJyk7XG4gICAgY2FtZXJhUG9zaXRpb25Gb2xkZXJcbiAgICAgIC5hZGQoY2FtZXJhUG9zaXRpb25QYXJhbXMsICd4JywgLTEwLCAxMCwgMSlcbiAgICAgIC5vbkZpbmlzaENoYW5nZSgodmFsKSA9PiB7XG4gICAgICAgIHRoaXMuY2FtZXJhPy5wb3NpdGlvbi5zZXRYKHZhbCk7XG4gICAgICAgIHRoaXMuY29udHJvbHM/LnVwZGF0ZSgpO1xuICAgICAgfSk7XG4gICAgY2FtZXJhUG9zaXRpb25Gb2xkZXJcbiAgICAgIC5hZGQoY2FtZXJhUG9zaXRpb25QYXJhbXMsICd5JywgLTEwLCAxMCwgMSlcbiAgICAgIC5vbkZpbmlzaENoYW5nZSgodmFsKSA9PiB7XG4gICAgICAgIHRoaXMuY2FtZXJhPy5wb3NpdGlvbi5zZXRZKHZhbCk7XG4gICAgICAgIHRoaXMuY29udHJvbHM/LnVwZGF0ZSgpO1xuICAgICAgfSk7XG4gICAgY2FtZXJhUG9zaXRpb25Gb2xkZXJcbiAgICAgIC5hZGQoY2FtZXJhUG9zaXRpb25QYXJhbXMsICd6JywgLTEwLCAxMCwgMSlcbiAgICAgIC5vbkZpbmlzaENoYW5nZSgodmFsKSA9PiB7XG4gICAgICAgIHRoaXMuY2FtZXJhPy5wb3NpdGlvbi5zZXRaKHZhbCk7XG4gICAgICAgIHRoaXMuY29udHJvbHM/LnVwZGF0ZSgpO1xuICAgICAgfSk7XG5cbiAgICBjb25zdCBhbWJpZW50TGlnaHRGb2xkZXIgPSB0aGlzLmRhdEd1aS5hZGRGb2xkZXIoJ0FtYmllbnQgTGlnaHQnKTtcbiAgICBhbWJpZW50TGlnaHRGb2xkZXIuYWRkQ29sb3IoYW1iaWVudExpZ2h0UGFyYW1zLCAnY29sb3InKS5vbkNoYW5nZSgodmFsKSA9PiB7XG4gICAgICB0aGlzLmxpZ2h0Py5jb2xvci5zZXQodmFsKTtcbiAgICB9KTtcbiAgICBhbWJpZW50TGlnaHRGb2xkZXJcbiAgICAgIC5hZGQoYW1iaWVudExpZ2h0UGFyYW1zLCAnaW50ZW5zaXR5JywgMCwgMSwgMC4wNSlcbiAgICAgIC5vbkNoYW5nZSgodmFsOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHRoaXMubGlnaHQpIHtcbiAgICAgICAgICB0aGlzLmxpZ2h0LmludGVuc2l0eSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgYW1iaWVudExpZ2h0Rm9sZGVyLm9wZW4oKTtcblxuICAgIGNvbnN0IGRpckxpZ2h0Rm9sZGVyID0gdGhpcy5kYXRHdWkuYWRkRm9sZGVyKCdEaXJlY3Rpb25hbCBMaWdodCcpO1xuICAgIGRpckxpZ2h0Rm9sZGVyLmFkZENvbG9yKGRpckxpZ2h0UGFyYW1zLCAnY29sb3InKS5vbkZpbmlzaENoYW5nZSgodmFsKSA9PiB7XG4gICAgICB0aGlzLmRpckxpZ2h0Py5jb2xvci5zZXQodmFsKTtcbiAgICB9KTtcbiAgICBkaXJMaWdodEZvbGRlclxuICAgICAgLmFkZChkaXJMaWdodFBhcmFtcywgJ2ludGVuc2l0eScsIDAsIDEsIDAuMDUpXG4gICAgICAub25DaGFuZ2UoKHZhbDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmRpckxpZ2h0KSB7XG4gICAgICAgICAgdGhpcy5kaXJMaWdodC5pbnRlbnNpdHkgPSB2YWw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIGRpckxpZ2h0Rm9sZGVyXG4gICAgICAuYWRkKGRpckxpZ2h0UGFyYW1zLCAneCcsIC0xMCwgMTAsIDEpXG4gICAgICAub25DaGFuZ2UoKHZhbDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmRpckxpZ2h0KSB7XG4gICAgICAgICAgdGhpcy5kaXJMaWdodC5wb3NpdGlvbi5zZXRYKHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAubmFtZSgneFBvcycpO1xuXG4gICAgZGlyTGlnaHRGb2xkZXJcbiAgICAgIC5hZGQoZGlyTGlnaHRQYXJhbXMsICd5JywgLTEwLCAxMCwgMSlcbiAgICAgIC5vbkNoYW5nZSgodmFsOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZGlyTGlnaHQpIHtcbiAgICAgICAgICB0aGlzLmRpckxpZ2h0LnBvc2l0aW9uLnNldFkodmFsKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5uYW1lKCd5UG9zJyk7XG5cbiAgICBkaXJMaWdodEZvbGRlclxuICAgICAgLmFkZChkaXJMaWdodFBhcmFtcywgJ3gnLCAtMTAsIDEwLCAxKVxuICAgICAgLm9uQ2hhbmdlKCh2YWw6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAodGhpcy5kaXJMaWdodCkge1xuICAgICAgICAgIHRoaXMuZGlyTGlnaHQucG9zaXRpb24uc2V0Wih2YWwpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLm5hbWUoJ3pQb3MnKTtcblxuICAgIGRpckxpZ2h0Rm9sZGVyLm9wZW4oKTtcblxuICAgIGNvbnN0IGNvbnRyb2xGb2xkZXIgPSB0aGlzLmRhdEd1aS5hZGRGb2xkZXIoJ0NvbnRyb2xzJyk7XG4gICAgbGV0IG9yYml0Q29udHJvbHM6IGFueSA9IHt9O1xuICAgIG9yYml0Q29udHJvbHMucmVzZXRDb250cm9sID0gKCkgPT4ge1xuICAgICAgdGhpcy5jb250cm9scz8ucmVzZXQoKTtcbiAgICB9O1xuXG4gICAgY29udHJvbEZvbGRlci5hZGQob3JiaXRDb250cm9scywgJ3Jlc2V0Q29udHJvbCcpO1xuXG4gICAgLy8gdGhpcy5kYXRHdWlcbiAgICAvLyAgIC5hZGQodGhpcy5kaXJMaWdodCwgJ2ludGVuc2l0eScsIDAsIDEsIDAuMDUpXG4gICAgLy8gICAubmFtZSgnRGlyZWN0aW9uYWxMaWdodCBJbnRlbnNpdHknKTtcbiAgICBjb25zdCBjb250YWluZXJyciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnI2RhdC1jb250YWluZXInXG4gICAgKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBjb250YWluZXJyci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgY29udGFpbmVycnIuc3R5bGUudG9wID0gJzBweCc7XG4gICAgY29udGFpbmVycnIuc3R5bGUucmlnaHQgPSAnMHB4JztcbiAgICBjb250YWluZXJyci5hcHBlbmRDaGlsZCh0aGlzLmRhdEd1aS5kb21FbGVtZW50KTtcbiAgICB0aGlzLnNjZW5lLmJhY2tncm91bmQgPSB0ZXh0dXJlO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSk7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBmdW5jdGlvbiB0byBkaXNwbGF5IG1lc2ggc3BlY2lmaWVkIGJ5IGZpbGVwYXRoIHRvIGEgY2FudmFzXG4gICAqIHNwZWNpZmllZCBieSBjYW52YXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVQYXRoXG4gICAqIEBwYXJhbSB7SFRNTENhbnZhc0VsZW1lbnR9IGNhbnZhc1xuICAgKiBAcHVibGljXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZGlzcGxheU1lc2gobWVzaFJlZjogU3RvcmFnZVJlZmVyZW5jZSkge1xuICAgIGNvbnNvbGUudGltZSgnZGlzcGxheU1lc2goKScpO1xuXG4gICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvKiByZW5kZXJlciBzZXR1cCAqL1xuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4gICAgICBjYW52YXM6IHRoaXMuY2NhbnZhcyxcbiAgICAgIGFudGlhbGlhczogdHJ1ZSxcbiAgICB9KTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IoMHhmZmZmZmYpO1xuICAgIHRoaXMucmVuZGVyZXIucGh5c2ljYWxseUNvcnJlY3RMaWdodHMgPSB0cnVlO1xuICAgIHRoaXMucmVuZGVyZXIudG9uZU1hcHBpbmcgPSBUSFJFRS5MaW5lYXJUb25lTWFwcGluZztcbiAgICB0aGlzLnJlbmRlcmVyLnRvbmVNYXBwaW5nRXhwb3N1cmUgPSAxMDtcbiAgICB0aGlzLnJlbmRlcmVyLm91dHB1dEVuY29kaW5nID0gVEhSRUUuc1JHQkVuY29kaW5nO1xuXG4gICAgLyogY2FtZXJhIHNldHVwICovXG4gICAgdGhpcy5jYW1lcmFQb3MgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAxMCk7XG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoXG4gICAgICA0NSxcbiAgICAgIHRoaXMuY2NhbnZhcy53aWR0aCAvIHRoaXMuY2NhbnZhcy5oZWlnaHQsXG4gICAgICAwLjEsXG4gICAgICAyMDAwXG4gICAgKTtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5zZXQoXG4gICAgICB0aGlzLmNhbWVyYVBvcy54LFxuICAgICAgdGhpcy5jYW1lcmFQb3MueSxcbiAgICAgIHRoaXMuY2FtZXJhUG9zLnpcbiAgICApO1xuXG4gICAgLyogbGlnaHQgc2V0dXAgKi9cbiAgICB0aGlzLmRpckxpZ2h0UG9zID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMiwgMCk7XG4gICAgdGhpcy5kaXJMaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmLCAwLjUpO1xuICAgIHRoaXMuZGlyTGlnaHQucG9zaXRpb24uc2V0KFxuICAgICAgdGhpcy5kaXJMaWdodFBvcy54LFxuICAgICAgdGhpcy5kaXJMaWdodFBvcy55LFxuICAgICAgdGhpcy5kaXJMaWdodFBvcy56XG4gICAgKTtcbiAgICBjb25zdCBkaXJMaWdodFBhcmFtcyA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAyLFxuICAgICAgejogMCxcbiAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICBpbnRlbnNpdHk6IDAuNSxcbiAgICB9O1xuXG4gICAgdGhpcy5saWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHg0MDQwNDAsIDAuMDUpOyAvLyAoMHg0MDQwNDAsIDAuMSlcbiAgICBjb25zdCBhbWJpZW50TGlnaHRQYXJhbXMgPSB7XG4gICAgICBjb2xvcjogJyM0MDQwNDAnLFxuICAgICAgaW50ZW5zaXR5OiAwLjA1LFxuICAgIH07XG5cbiAgICAvKiBjb250cm9sIHNldHVwICovXG4gICAgdGhpcy5jb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKHRoaXMuY2FtZXJhLCB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuICAgIHRoaXMuY29udHJvbHMudGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCk7XG5cbiAgICAvKiBzY2VuZSBzZXR1cCAqL1xuICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmNhbWVyYSk7XG4gICAgdGhpcy5zY2VuZS5hZGQodGhpcy5kaXJMaWdodCk7XG4gICAgdGhpcy5zY2VuZS5hZGQodGhpcy5saWdodCk7XG5cbiAgICB0aGlzLmRhdEd1aSA9IG5ldyBHVUkoeyBhdXRvUGxhY2U6IGZhbHNlIH0pO1xuXG4gICAgLyogbG9hZCBtZXNoICovXG4gICAgbGV0IG9iamVjdE1lc2g6IGFueSA9IGF3YWl0IHRoaXMubG9hZE1lc2gobWVzaFJlZik7XG4gICAgY29uc29sZS5sb2coJ29iamVjdE1lc2g6Jywgb2JqZWN0TWVzaCk7XG4gICAgY29uc3Qgb2JqZWN0UGFyYW1zID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgICB6OiAwLFxuICAgIH07XG4gICAgY29uc3Qgb2JqZWN0Rm9sZGVyID0gdGhpcy5kYXRHdWkuYWRkRm9sZGVyKCdPYmplY3QgUm90YXRpb24nKTtcbiAgICBvYmplY3RGb2xkZXIuYWRkKG9iamVjdFBhcmFtcywgJ3gnLCAtMTgwLCAxODAsIDUpLm9uQ2hhbmdlKCh2YWwpID0+IHtcbiAgICAgIG9iamVjdE1lc2guc2NlbmUucm90YXRpb24ueCA9IFRIUkVFLk1hdGhVdGlscy5kZWdUb1JhZCh2YWwpO1xuICAgIH0pO1xuXG4gICAgb2JqZWN0Rm9sZGVyLmFkZChvYmplY3RQYXJhbXMsICd5JywgLTE4MCwgMTgwLCA1KS5vbkNoYW5nZSgodmFsKSA9PiB7XG4gICAgICBvYmplY3RNZXNoLnNjZW5lLnJvdGF0aW9uLnkgPSBUSFJFRS5NYXRoVXRpbHMuZGVnVG9SYWQodmFsKTtcbiAgICB9KTtcbiAgICBvYmplY3RGb2xkZXIuYWRkKG9iamVjdFBhcmFtcywgJ3onLCAtMTgwLCAxODAsIDUpLm9uQ2hhbmdlKCh2YWwpID0+IHtcbiAgICAgIG9iamVjdE1lc2guc2NlbmUucm90YXRpb24ueiA9IFRIUkVFLk1hdGhVdGlscy5kZWdUb1JhZCh2YWwpO1xuICAgIH0pO1xuICAgIG9iamVjdEZvbGRlci5vcGVuKCk7XG5cbiAgICBjb25zdCBhbWJpZW50TGlnaHRGb2xkZXIgPSB0aGlzLmRhdEd1aS5hZGRGb2xkZXIoJ0FtYmllbnQgTGlnaHQnKTtcbiAgICBhbWJpZW50TGlnaHRGb2xkZXIuYWRkQ29sb3IoYW1iaWVudExpZ2h0UGFyYW1zLCAnY29sb3InKS5vbkNoYW5nZSgodmFsKSA9PiB7XG4gICAgICB0aGlzLmxpZ2h0Py5jb2xvci5zZXQodmFsKTtcbiAgICB9KTtcbiAgICBhbWJpZW50TGlnaHRGb2xkZXJcbiAgICAgIC5hZGQoYW1iaWVudExpZ2h0UGFyYW1zLCAnaW50ZW5zaXR5JywgMCwgMSwgMC4wNSlcbiAgICAgIC5vbkNoYW5nZSgodmFsOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHRoaXMubGlnaHQpIHtcbiAgICAgICAgICB0aGlzLmxpZ2h0LmludGVuc2l0eSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgYW1iaWVudExpZ2h0Rm9sZGVyLm9wZW4oKTtcblxuICAgIGNvbnN0IGRpckxpZ2h0Rm9sZGVyID0gdGhpcy5kYXRHdWkuYWRkRm9sZGVyKCdEaXJlY3Rpb25hbCBMaWdodCcpO1xuICAgIGRpckxpZ2h0Rm9sZGVyLmFkZENvbG9yKGRpckxpZ2h0UGFyYW1zLCAnY29sb3InKS5vbkZpbmlzaENoYW5nZSgodmFsKSA9PiB7XG4gICAgICB0aGlzLmRpckxpZ2h0Py5jb2xvci5zZXQodmFsKTtcbiAgICB9KTtcbiAgICBkaXJMaWdodEZvbGRlclxuICAgICAgLmFkZChkaXJMaWdodFBhcmFtcywgJ2ludGVuc2l0eScsIDAsIDEsIDAuMDUpXG4gICAgICAub25DaGFuZ2UoKHZhbDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmRpckxpZ2h0KSB7XG4gICAgICAgICAgdGhpcy5kaXJMaWdodC5pbnRlbnNpdHkgPSB2YWw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIGRpckxpZ2h0Rm9sZGVyXG4gICAgICAuYWRkKGRpckxpZ2h0UGFyYW1zLCAneCcsIC0xMCwgMTAsIDEpXG4gICAgICAub25DaGFuZ2UoKHZhbDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmRpckxpZ2h0KSB7XG4gICAgICAgICAgdGhpcy5kaXJMaWdodC5wb3NpdGlvbi5zZXRYKHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAubmFtZSgneFBvcycpO1xuXG4gICAgZGlyTGlnaHRGb2xkZXJcbiAgICAgIC5hZGQoZGlyTGlnaHRQYXJhbXMsICd5JywgLTEwLCAxMCwgMSlcbiAgICAgIC5vbkNoYW5nZSgodmFsOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZGlyTGlnaHQpIHtcbiAgICAgICAgICB0aGlzLmRpckxpZ2h0LnBvc2l0aW9uLnNldFkodmFsKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5uYW1lKCd5UG9zJyk7XG5cbiAgICBkaXJMaWdodEZvbGRlclxuICAgICAgLmFkZChkaXJMaWdodFBhcmFtcywgJ3gnLCAtMTAsIDEwLCAxKVxuICAgICAgLm9uQ2hhbmdlKCh2YWw6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAodGhpcy5kaXJMaWdodCkge1xuICAgICAgICAgIHRoaXMuZGlyTGlnaHQucG9zaXRpb24uc2V0Wih2YWwpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLm5hbWUoJ3pQb3MnKTtcblxuICAgIGRpckxpZ2h0Rm9sZGVyLm9wZW4oKTtcblxuICAgIGNvbnN0IGNvbnRyb2xGb2xkZXIgPSB0aGlzLmRhdEd1aS5hZGRGb2xkZXIoJ0NvbnRyb2xzJyk7XG4gICAgbGV0IG9yYml0Q29udHJvbHM6IGFueSA9IHt9O1xuICAgIG9yYml0Q29udHJvbHMucmVzZXRDb250cm9sID0gKCkgPT4ge1xuICAgICAgdGhpcy5jb250cm9scz8ucmVzZXQoKTtcbiAgICB9O1xuXG4gICAgY29udHJvbEZvbGRlci5hZGQob3JiaXRDb250cm9scywgJ3Jlc2V0Q29udHJvbCcpO1xuXG4gICAgLy8gdGhpcy5kYXRHdWlcbiAgICAvLyAgIC5hZGQodGhpcy5kaXJMaWdodCwgJ2ludGVuc2l0eScsIDAsIDEsIDAuMDUpXG4gICAgLy8gICAubmFtZSgnRGlyZWN0aW9uYWxMaWdodCBJbnRlbnNpdHknKTtcbiAgICBjb25zdCBjb250YWluZXJyciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnI2RhdC1jb250YWluZXInXG4gICAgKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBjb250YWluZXJyci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgY29udGFpbmVycnIuc3R5bGUudG9wID0gJzBweCc7XG4gICAgY29udGFpbmVycnIuc3R5bGUucmlnaHQgPSAnMHB4JztcbiAgICBjb250YWluZXJyci5hcHBlbmRDaGlsZCh0aGlzLmRhdEd1aS5kb21FbGVtZW50KTtcblxuICAgIC8qIGFkZCBsb2FkZWQgbWVzaCB0byBzY2VuZSAqL1xuICAgIHRoaXMuc2NlbmUuYWRkKG9iamVjdE1lc2guc2NlbmUpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcblxuICAgIGNvbnNvbGUudGltZUVuZCgnZGlzcGxheU1lc2goKScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgZnVuY3Rpb24gdG8gbG9hZCBhbmQgcmV0dXJuIG1lc2ggc3BlY2lmaWVkIGJ5IGZpbGVwYXRoXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlUGF0aFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgYXN5bmMgbG9hZE1lc2gobWVzaFJlZjogU3RvcmFnZVJlZmVyZW5jZSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgbWVzaFVybCA9IChhd2FpdCBnZXREb3dubG9hZFVSTChtZXNoUmVmKS5jYXRjaCgoZTogRXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZSk7XG4gICAgICB9KSkgYXMgc3RyaW5nO1xuXG4gICAgICAvLyBsZXQgbWVzaFVybCA9IGF3YWl0IG1lc2hSZWYuZ2V0RG93bmxvYWRVUkwoKS5jYXRjaChlID0+IHtcbiAgICAgIC8vICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlKTtcbiAgICAgIC8vIH0pO1xuXG4gICAgICB0aGlzLmxvYWRlciA9IG5ldyBHTFRGTG9hZGVyKCk7XG5cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5sb2FkZXI/LmxvYWQobWVzaFVybCwgZnVuY3Rpb24gKGdsdGYpIHtcbiAgICAgICAgICAgIGdsdGYuc2NlbmUudHJhdmVyc2UoKGNoaWxkOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGNoaWxkLm1hdGVyaWFsKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQubWF0ZXJpYWwubWV0YWxuZXNzID0gMDtcbiAgICAgICAgICAgICAgICBjaGlsZC5tYXRlcmlhbC50cmFuc3BhcmVudCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVzb2x2ZShnbHRmKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhbmltYXRlKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uSUQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIGlmICh0aGlzLnNjZW5lICYmIHRoaXMuY2FtZXJhKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyPy5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmRhdEd1aT8uZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIHRoaXMuZGF0R3VpPy5kZXN0cm95KCk7XG4gICAgICB0aGlzLnNjZW5lID0gbnVsbDtcbiAgICAgIHRoaXMuY2FtZXJhID0gbnVsbDtcbiAgICAgIHRoaXMuY2FtZXJhUG9zID0gbnVsbDtcbiAgICAgIHRoaXMuY29udHJvbHMgPSBudWxsO1xuICAgICAgdGhpcy5kaXJMaWdodCA9IG51bGw7XG4gICAgICB0aGlzLmRpckxpZ2h0UG9zID0gbnVsbDtcbiAgICAgIHRoaXMubGlnaHQgPSBudWxsO1xuICAgICAgdGhpcy5sb2FkZXIgPSBudWxsO1xuICAgICAgdGhpcy5yZW5kZXJlcj8uY2xlYXIoKTtcbiAgICAgIHRoaXMucmVuZGVyZXIgPSBudWxsO1xuICAgICAgdGhpcy5hbmltYXRpb25JRCA9IC0xO1xuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uSUQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZXN0cm95aW5nIFRIUkVFIE9iamVjdHM6JywgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVzaXplQ2FudmFzQWN0aW9uKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICBsZXQgZWRpdG9yRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRvci1kaXYnKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgIHRoaXMuY2NhbnZhcy53aWR0aCA9IGVkaXRvckRpdi5vZmZzZXRXaWR0aDtcbiAgICAgIHRoaXMuY2NhbnZhcy5oZWlnaHQgPSBlZGl0b3JEaXYub2Zmc2V0SGVpZ2h0O1xuICAgICAgdGhpcy5jY2FudmFzLnN0eWxlLndpZHRoID0gU3RyaW5nKGVkaXRvckRpdi5vZmZzZXRXaWR0aCk7XG4gICAgICB0aGlzLmNjYW52YXMuc3R5bGUuaGVpZ2h0ID0gU3RyaW5nKGVkaXRvckRpdi5vZmZzZXRIZWlnaHQpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNa2ltYWdlIHtcbiAgaW1nQ2FudmFzRGl2OiBIVE1MRGl2RWxlbWVudDtcbiAgaW1nQ2FudmFzOiBIVE1MRWxlbWVudDtcbiAgaW1nR2FsbGVyeTogVmlld2VyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW1nQ2FudmFzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcjaW1hZ2UtY2FudmFzLWRpdidcbiAgICApIGFzIEhUTUxEaXZFbGVtZW50O1xuXG4gICAgdGhpcy5pbWdDYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2UtY2FudmFzJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICB0aGlzLmltZ0dhbGxlcnkgPSBuZXcgVmlld2VyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWFnZS1jYW52YXMnKSEpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGRpc3BsYXlJbWFnZShmaWxlUmVmOiBGaWxlUmVmLCBmaWxlTmFtZTogc3RyaW5nKSB7XG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ltYWdlTGlzdCcpO1xuICAgIGxldCBpbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbGV0IGltZ0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGltZ0xhYmVsLmlubmVySFRNTCA9IGZpbGVOYW1lO1xuICAgIC8vIGF3YWl0IGZpbGVSZWYuZ2V0RG93bmxvYWRVUkwoKS50aGVuKHVybCA9PiB7XG4gICAgLy8gICBpbWcuc3JjID0gdXJsO1xuICAgIC8vIH0pO1xuICAgIGF3YWl0IGdldERvd25sb2FkVVJMKGZpbGVSZWYpLnRoZW4oKHVybCkgPT4ge1xuICAgICAgaW1nLnNyYyA9IHVybDtcbiAgICB9KTtcblxuICAgIGltZ0Rpdi5hcHBlbmRDaGlsZChpbWcpO1xuICAgIGltZ0Rpdi5hcHBlbmRDaGlsZChpbWdMYWJlbCk7XG4gICAgbGkuYXBwZW5kQ2hpbGQoaW1nRGl2KTtcbiAgICB0aGlzLmltZ0NhbnZhcy5hcHBlbmRDaGlsZChsaSk7XG4gICAgdGhpcy5pbWdHYWxsZXJ5LmRlc3Ryb3koKTtcbiAgICB0aGlzLmltZ0dhbGxlcnkgPSBuZXcgVmlld2VyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWFnZS1jYW52YXMnKSEpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZUltYWdlcygpIHtcbiAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbWFnZUxpc3QnKTtcbiAgICB3aGlsZSAoZWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgZWxlbWVudHNbMF0ucGFyZW50Tm9kZT8ucmVtb3ZlQ2hpbGQoZWxlbWVudHNbMF0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWtjaGFydCB7XG4gIGNoYXJ0RGl2OiBIVE1MRGl2RWxlbWVudDtcbiAgcGxvdFg6IEhUTUxTZWxlY3RFbGVtZW50O1xuICBwbG90WTogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gIHBsb3RCdG46IEhUTUxCdXR0b25FbGVtZW50O1xuICBmaW5kZXJEaXY6IEhUTUxEaXZFbGVtZW50O1xuICBjaGFydDogYW55O1xuICBkYXRhOiBhbnk7XG4gIGlzQWN0aXZlOiBib29sZWFuO1xuICBpc0JpZ1F1ZXJ5OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGdvb2dsZS5jaGFydHMubG9hZCgnY3VycmVudCcsIHsgcGFja2FnZXM6IFsnY29yZWNoYXJ0J10gfSk7XG4gICAgdGhpcy5jaGFydERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGFydC1kaXYnKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICB0aGlzLmZpbmRlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaW5kZXItZGl2JykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgdGhpcy5wbG90WCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNxdWljay1wbG90LXgnKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICB0aGlzLnBsb3RZID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3F1aWNrLXBsb3QteScpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHRoaXMucGxvdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbG90LWJ0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmlzQmlnUXVlcnkgPSBmYWxzZTtcblxuICAgIHRoaXMuZGF0YSA9IG51bGw7XG5cbiAgICB0aGlzLnBsb3RCdG5BY3Rpb24oKTtcbiAgfVxuXG4gIHB1YmxpYyBwbG90QnRuQWN0aW9uKCkge1xuICAgIHRoaXMucGxvdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldjogRXZlbnQpID0+IHtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gIXRoaXMuaXNBY3RpdmU7XG4gICAgICBpZiAodGhpcy5pc0JpZ1F1ZXJ5ID09IGZhbHNlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5wbG90QnRuLnRleHRDb250ZW50ID0gJ0Nsb3NlIFF1aWNrIFBsb3QnO1xuICAgICAgICAgIHRoaXMuY2hhcnREaXYuc3R5bGUuekluZGV4ID0gJzInO1xuICAgICAgICAgIHRoaXMuZmluZGVyRGl2LnN0eWxlLnpJbmRleCA9ICcxJztcbiAgICAgICAgICBsZXQgdml6RGF0YSA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUoKTtcbiAgICAgICAgICB2aXpEYXRhLmFkZENvbHVtbignZGF0ZXRpbWUnLCB0aGlzLnBsb3RYLnZhbHVlKTtcbiAgICAgICAgICB2aXpEYXRhLmFkZENvbHVtbignbnVtYmVyJywgdGhpcy5wbG90WS52YWx1ZSk7XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YVt0aGlzLnBsb3RYLnZhbHVlXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdml6RGF0YS5hZGRSb3coW1xuICAgICAgICAgICAgICBuZXcgRGF0ZSh0aGlzLmRhdGFbdGhpcy5wbG90WC52YWx1ZV1baV0pLFxuICAgICAgICAgICAgICBwYXJzZUZsb2F0KHRoaXMuZGF0YVt0aGlzLnBsb3RZLnZhbHVlXVtpXSksXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNoYXJ0RGl2LmNsaWVudFdpZHRoKTtcbiAgICAgICAgICBsZXQgY2hhcnQgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uTGluZUNoYXJ0KHRoaXMuY2hhcnREaXYpO1xuICAgICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGU6IHRoaXMucGxvdFkudmFsdWUsXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5jaGFydERpdi5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5jaGFydERpdi5vZmZzZXRIZWlnaHQsXG4gICAgICAgICAgICBsZWdlbmQ6ICdub25lJyBhcyAnbm9uZScsXG4gICAgICAgICAgICBwb2ludFNpemU6IDEwLFxuICAgICAgICAgIH07XG4gICAgICAgICAgY2hhcnQuZHJhdyh2aXpEYXRhLCBvcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBsb3RCdG4udGV4dENvbnRlbnQgPSAnUXVpY2sgUGxvdCc7XG4gICAgICAgICAgdGhpcy5maW5kZXJEaXYuc3R5bGUuekluZGV4ID0gJzInO1xuICAgICAgICAgIHRoaXMuY2hhcnREaXYuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNCaWdRdWVyeSA9PSB0cnVlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5wbG90QnRuLnRleHRDb250ZW50ID0gJ0Nsb3NlIFF1aWNrIFBsb3QnO1xuICAgICAgICAgIHRoaXMuY2hhcnREaXYuc3R5bGUuekluZGV4ID0gJzInO1xuICAgICAgICAgIHRoaXMuZmluZGVyRGl2LnN0eWxlLnpJbmRleCA9ICcxJztcblxuICAgICAgICAgIGxldCB2aXpEYXRhID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSgpO1xuICAgICAgICAgIGlmICh0aGlzLnBsb3RYLnZhbHVlID09PSAndGltZXN0YW1wJykge1xuICAgICAgICAgICAgdml6RGF0YS5hZGRDb2x1bW4oJ2RhdGV0aW1lJywgdGhpcy5wbG90WC52YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpekRhdGEuYWRkQ29sdW1uKCdudW1iZXInLCB0aGlzLnBsb3RYLnZhbHVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5wbG90WS52YWx1ZSA9PT0gJ3RpbWVzdGFtcCcpIHtcbiAgICAgICAgICAgIHZpekRhdGEuYWRkQ29sdW1uKCdkYXRldGltZScsIHRoaXMucGxvdFkudmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aXpEYXRhLmFkZENvbHVtbignbnVtYmVyJywgdGhpcy5wbG90WS52YWx1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGFbdGhpcy5wbG90WC52YWx1ZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZpekRhdGEuYWRkUm93KFtcbiAgICAgICAgICAgICAgdGhpcy5kYXRhW3RoaXMucGxvdFgudmFsdWVdW2ldLFxuICAgICAgICAgICAgICB0aGlzLmRhdGFbdGhpcy5wbG90WS52YWx1ZV1baV0sXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IGNoYXJ0ID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkxpbmVDaGFydCh0aGlzLmNoYXJ0RGl2KTtcbiAgICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnBsb3RZLnZhbHVlLFxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuY2hhcnREaXYub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuY2hhcnREaXYub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgICAgbGVnZW5kOiAnbm9uZScgYXMgJ25vbmUnLFxuICAgICAgICAgICAgcG9pbnRTaXplOiAxMCxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNoYXJ0LmRyYXcodml6RGF0YSwgb3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wbG90QnRuLnRleHRDb250ZW50ID0gJ1F1aWNrIFBsb3QnO1xuICAgICAgICAgIHRoaXMuZmluZGVyRGl2LnN0eWxlLnpJbmRleCA9ICcyJztcbiAgICAgICAgICB0aGlzLmNoYXJ0RGl2LnN0eWxlLnpJbmRleCA9ICcxJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHBvcHVsYXRlQXhpc0ZpZWxkcyhkYXRhOiBhbnkpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMuaXNCaWdRdWVyeSA9IGZhbHNlO1xuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhkYXRhKSkge1xuICAgICAgaWYgKFxuICAgICAgICBBcnJheS5pc0FycmF5KGRhdGFba2V5XSkgJiZcbiAgICAgICAgKGtleS5pbmNsdWRlcygnX2RhdGVzJykgfHwga2V5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3RpbWVzJykpXG4gICAgICApIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdheGlzLW9wdGlvbnMnKTtcbiAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBrZXkpO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBrZXk7XG4gICAgICAgIHRoaXMucGxvdFguYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIChBcnJheS5pc0FycmF5KGRhdGFba2V5XSkgJiYga2V5LmluY2x1ZGVzKCdfdmFsdWVzJykpIHx8XG4gICAgICAgIGtleS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCd2YWx1ZXMnKVxuICAgICAgKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYXhpcy1vcHRpb25zJyk7XG4gICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywga2V5KTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0ga2V5O1xuICAgICAgICB0aGlzLnBsb3RZLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGJxUG9wdWxhdGVBeGlzRmllbGRzKGRhdGFBcnI6IGFueSwgZGF0YXNldDogc3RyaW5nKSB7XG4gICAgdGhpcy5pc0JpZ1F1ZXJ5ID0gdHJ1ZTtcbiAgICBpZiAoZGF0YXNldCA9PT0gJ2V5ZWRhdGEnKSB7XG4gICAgICBsZXQgZXllZGF0YU9iajogYW55ID0ge307XG4gICAgICAvL2NvbnNvbGUubG9nKCdicXBvcHVsYXRlIGF4aXMgZGF0YUFycicsIGRhdGFBcnIpO1xuICAgICAgZGF0YUFyci5mb3JFYWNoKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2RhdGEgaW4gZGF0YUFycicsIGRhdGEpO1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMoZGF0YSkpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdrZXknLCBrZXkpO1xuICAgICAgICAgIGlmIChrZXkgPT09ICd0aW1lc3RhbXAnKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBleWVkYXRhT2JqW2tleV0ucHVzaChuZXcgRGF0ZShkYXRhW2tleV0udmFsdWUpKTtcbiAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICBleWVkYXRhT2JqW2tleV0gPSBbXTtcbiAgICAgICAgICAgICAgZXllZGF0YU9ialtrZXldLnB1c2gobmV3IERhdGUoZGF0YVtrZXldLnZhbHVlKSk7XG4gICAgICAgICAgICAgIHRoaXMuYWRkQXhpc09wdGlvbihrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBleWVkYXRhT2JqW2tleV0ucHVzaChwYXJzZUZsb2F0KGRhdGFba2V5XSkpO1xuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgIGV5ZWRhdGFPYmpba2V5XSA9IFtdO1xuICAgICAgICAgICAgICBleWVkYXRhT2JqW2tleV0ucHVzaChwYXJzZUZsb2F0KGRhdGFba2V5XSkpO1xuICAgICAgICAgICAgICB0aGlzLmFkZEF4aXNPcHRpb24oa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5kYXRhID0gZXllZGF0YU9iajtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZEF4aXNPcHRpb24oa2V5OiBzdHJpbmcpIHtcbiAgICBsZXQgb3B0aW9uWCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvblguc2V0QXR0cmlidXRlKCdjbGFzcycsICdheGlzLW9wdGlvbnMnKTtcbiAgICBvcHRpb25YLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBrZXkpO1xuICAgIG9wdGlvblgudGV4dENvbnRlbnQgPSBrZXk7XG4gICAgbGV0IG9wdGlvblkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb25ZLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYXhpcy1vcHRpb25zJyk7XG4gICAgb3B0aW9uWS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywga2V5KTtcbiAgICBvcHRpb25ZLnRleHRDb250ZW50ID0ga2V5O1xuICAgIHRoaXMucGxvdFguYXBwZW5kQ2hpbGQob3B0aW9uWCk7XG4gICAgdGhpcy5wbG90WS5hcHBlbmRDaGlsZChvcHRpb25ZKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVFbGVtZW50c0J5Q2xhc3NOYW1lKGNOYW1lOiBzdHJpbmcpIHtcbiAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNOYW1lKTtcbiAgICB3aGlsZSAoZWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgZWxlbWVudHNbMF0ucGFyZW50Tm9kZT8ucmVtb3ZlQ2hpbGQoZWxlbWVudHNbMF0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0QXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHsgZ2V0RnVuY3Rpb25zLCBodHRwc0NhbGxhYmxlIH0gZnJvbSBcImZpcmViYXNlL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgUXVlcnksIGRvYywgZ2V0RG9jLCBnZXREb2NzIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcblxuY29uc3QgZnVuY3Rpb25zID0gZ2V0RnVuY3Rpb25zKGdldEFwcCgpKTtcbi8vIGNvbnN0IGZ1bmN0aW9ucyA9IGZpcmViYXNlLmZ1bmN0aW9ucygpO1xuXG4vLyBjb25zdCBsaXN0VGFibGVzID0gZnVuY3Rpb25zLmh0dHBzQ2FsbGFibGUoJ2xpc3RUYWJsZXMnKTtcbmNvbnN0IGxpc3RUYWJsZXMgPSBodHRwc0NhbGxhYmxlKGZ1bmN0aW9ucywgJ2xpc3RUYWJsZXMnKTtcblxuLy8gY29uc3QgYnFRdWVyeSA9IGZ1bmN0aW9ucy5odHRwc0NhbGxhYmxlKCdicVF1ZXJ5Jyk7XG5jb25zdCBicVF1ZXJ5ID0gaHR0cHNDYWxsYWJsZShmdW5jdGlvbnMsICdicVF1ZXJ5Jyk7XG5cbmV4cG9ydCBjbGFzcyBNa3F1ZXJ5IHtcbiAgcHVibGljIHJmaWRNb2RlOiBib29sZWFuO1xuICBcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yZmlkTW9kZSA9IGZhbHNlO1xuXG4gIH07XG4gIC8qKlxuICAgKiBDb25uZWN0cyBhbmQgcmV0dXJucyBxdWVyeSBzdHJpbmdzXG4gICAqIFxuICAgKiBAcGFyYW0ge3tmaWVsZDogc3RyaW5nLCBrZXl3b3JkOiBzdHJpbmd9W119IHF1ZXJ5UGFyYW1zXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybnMgYSBzdHJpbmcgb2YgY29ubmVjdGVkIHF1ZXJ5IHN0cmluZ3NcbiAgICovXG4gIHB1YmxpYyBta3F1ZXJ5KHF1ZXJ5UGFyYW1zOiB7ZmllbGQ6IHN0cmluZywga2V5d29yZDogc3RyaW5nfVtdKSB7XG4gICAgbGV0IHF1ZXJ5U3RyaW5nOiBzdHJpbmc7XG4gICAgXG4gICAgcXVlcnlTdHJpbmcgPSBcIlwiO1xuICAgIHF1ZXJ5UGFyYW1zLmZvckVhY2gocXVlcnlQYXJhbSA9PiB7XG4gICAgICBxdWVyeVN0cmluZyArPSB0aGlzLl9ta3F1ZXJ5KHF1ZXJ5UGFyYW0uZmllbGQsIHF1ZXJ5UGFyYW0ua2V5d29yZCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcXVlcnlTdHJpbmc7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYW5kIHJldHVybnMgaW5kaXZpZHVhbCBxdWVyeSBzdHJpbmcgZm9yIGEgZ2l2ZW4gZmllbGQgYW5kIGtleXdvcmRcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5d29yZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIGdlbmVyYXRlZCBxdWVyeSBzdHJpbmdcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgX21rcXVlcnkoZmllbGQ6IHN0cmluZywga2V5d29yZDogc3RyaW5nKSB7XG4gICAgaWYgKGZpZWxkLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJkYXRlXCIpKSB7XG4gICAgICBjb25zdCBEQVlfVE9fTVM6IG51bWJlciA9IDg2NDAwMDAwO1xuICAgICAgbGV0IGRhdGVTdHI6IHN0cmluZ1tdO1xuICAgICAgbGV0IHJlZkRhdGU6IERhdGU7XG5cbiAgICAgIGRhdGVTdHIgPSBrZXl3b3JkLnNwbGl0KFwiO1wiKTtcbiAgICAgIGRhdGVTdHIubGVuZ3RoID09PSAyID8gZGF0ZVN0clsxXSA9IGRhdGVTdHJbMV0udHJpbSgpIDogZGF0ZVN0clsxXSA9IFwiXCI7XG4gICAgICByZWZEYXRlID0gbmV3IERhdGUoZGF0ZVN0clswXSk7XG5cbiAgICAgIGlmIChkYXRlU3RyWzFdLmluY2x1ZGVzKFwiKy1cIikpIHtcbiAgICAgICAgbGV0IHVwcGVyRGF0ZTogRGF0ZTtcbiAgICAgICAgbGV0IGxvd2VyRGF0ZTogRGF0ZTtcbiAgICAgICAgbGV0IHJhbmdlOiBudW1iZXI7XG4gICAgICAgIGxldCBxdWVyeVN0cjogc3RyaW5nO1xuXG4gICAgICAgIHJhbmdlID0gTnVtYmVyKGRhdGVTdHJbMV0uc3Vic3RyaW5nKDIsIGRhdGVTdHJbMV0ubGVuZ3RoKSk7XG4gICAgICAgIHVwcGVyRGF0ZSA9IG5ldyBEYXRlKHJlZkRhdGUuZ2V0VGltZSgpICsgcmFuZ2UgKiBEQVlfVE9fTVMpO1xuICAgICAgICBsb3dlckRhdGUgPSBuZXcgRGF0ZShyZWZEYXRlLmdldFRpbWUoKSAtIHJhbmdlICogREFZX1RPX01TKTtcbiAgICAgICAgcXVlcnlTdHIgPSBcIi53aGVyZShcIiArIGBcIiR7ZmllbGR9XCJgICsgXCIsICc+PScsIFwiICsgXCJuZXcgRGF0ZShcIlxuICAgICAgICAgICsgU3RyaW5nKGxvd2VyRGF0ZS5nZXRUaW1lKCkpICsgXCIpKS53aGVyZShcIiArIGBcIiR7ZmllbGR9XCJgXG4gICAgICAgICAgKyBcIiwgJzw9JywgXCIgKyBcIm5ldyBEYXRlKFwiICsgU3RyaW5nKHVwcGVyRGF0ZS5nZXRUaW1lKCkpICsgXCIpKVwiO1xuXG4gICAgICAgIHJldHVybiBxdWVyeVN0cjtcbiAgICAgIH1cblxuICAgICAgZWxzZSBpZiAoZGF0ZVN0clsxXS5pbmNsdWRlcyhcIitcIikgJiYgIWRhdGVTdHJbMV0uaW5jbHVkZXMoXCItXCIpKSB7XG4gICAgICAgIGxldCB1cHBlckRhdGU6IERhdGU7XG4gICAgICAgIGxldCByYW5nZTogbnVtYmVyO1xuICAgICAgICBsZXQgcXVlcnlTdHI6IHN0cmluZztcblxuICAgICAgICByYW5nZSA9IE51bWJlcihkYXRlU3RyWzFdLnN1YnN0cmluZygxLCBkYXRlU3RyWzFdLmxlbmd0aCkpO1xuICAgICAgICB1cHBlckRhdGUgPSBuZXcgRGF0ZShyZWZEYXRlLmdldFRpbWUoKSArIHJhbmdlICogREFZX1RPX01TKTtcbiAgICAgICAgcXVlcnlTdHIgPSBcIi53aGVyZShcIiArIGBcIiR7ZmllbGR9XCJgICsgXCIsICc+PScsIFwiICsgXCJuZXcgRGF0ZShcIlxuICAgICAgICAgICsgU3RyaW5nKHJlZkRhdGUuZ2V0VGltZSgpKSArIFwiKSkud2hlcmUoXCIgKyBgXCIke2ZpZWxkfVwiYFxuICAgICAgICAgICsgXCIsICc8PScsIFwiICsgXCJuZXcgRGF0ZShcIiArIFN0cmluZyh1cHBlckRhdGUuZ2V0VGltZSgpKSArIFwiKSlcIjtcblxuICAgICAgICByZXR1cm4gcXVlcnlTdHI7XG4gICAgICB9XG5cbiAgICAgIGVsc2UgaWYgKGRhdGVTdHJbMV0uaW5jbHVkZXMoXCItXCIpICYmICFkYXRlU3RyWzFdLmluY2x1ZGVzKFwiK1wiKSkge1xuICAgICAgICBsZXQgbG93ZXJEYXRlOiBEYXRlO1xuICAgICAgICBsZXQgcmFuZ2U6IG51bWJlcjtcbiAgICAgICAgbGV0IHF1ZXJ5U3RyOiBzdHJpbmc7XG5cbiAgICAgICAgcmFuZ2UgPSBOdW1iZXIoZGF0ZVN0clsxXS5zdWJzdHJpbmcoMSwgZGF0ZVN0clsxXS5sZW5ndGgpKTtcbiAgICAgICAgbG93ZXJEYXRlID0gbmV3IERhdGUocmVmRGF0ZS5nZXRUaW1lKCkgKyByYW5nZSAqIERBWV9UT19NUyk7XG4gICAgICAgIHF1ZXJ5U3RyID0gXCIud2hlcmUoXCIgKyBgXCIke2ZpZWxkfVwiYCArIFwiLCAnPj0nLCBcIiArIFwibmV3IERhdGUoXCJcbiAgICAgICAgICArIFN0cmluZyhsb3dlckRhdGUuZ2V0VGltZSgpKSArIFwiKSkud2hlcmUoXCIgKyBgXCIke2ZpZWxkfVwiYFxuICAgICAgICAgICsgXCIsICc8PScsIFwiICsgXCJuZXcgRGF0ZShcIiArIFN0cmluZyhyZWZEYXRlLmdldFRpbWUoKSkgKyBcIikpXCI7XG5cbiAgICAgICAgcmV0dXJuIHF1ZXJ5U3RyO1xuICAgICAgfVxuXG4gICAgICBlbHNlIGlmICggIShkYXRlU3RyWzFdLmluY2x1ZGVzKFwiK1wiKSB8fCBkYXRlU3RyWzFdLmluY2x1ZGVzKFwiLVwiKSkgKSB7XG4gICAgICAgIGxldCB1cHBlckRhdGU6IERhdGU7XG4gICAgICAgIGxldCBxdWVyeVN0cjogc3RyaW5nO1xuICAgICAgICBcbiAgICAgICAgdXBwZXJEYXRlID0gbmV3IERhdGUocmVmRGF0ZS5nZXRUaW1lKCkgKyBEQVlfVE9fTVMpO1xuICAgICAgICBxdWVyeVN0ciA9IFwiLndoZXJlKFwiICsgYFwiJHtmaWVsZH1cImAgKyBcIiwgJz49JywgXCIgKyBcIm5ldyBEYXRlKFwiXG4gICAgICAgICAgKyBTdHJpbmcocmVmRGF0ZS5nZXRUaW1lKCkpICsgXCIpKS53aGVyZShcIiArIGBcIiR7ZmllbGR9XCJgICsgXCIsICc8PScsIFwiXG4gICAgICAgICAgKyBcIm5ldyBEYXRlKFwiICsgU3RyaW5nKHVwcGVyRGF0ZS5nZXRUaW1lKCkpICsgXCIpKVwiO1xuXG4gICAgICAgIHJldHVybiBxdWVyeVN0cjtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgcXVlcnlTdHI6IHN0cmluZztcblxuICAgICAgLy8gcXVlcnlTdHIgPSBcIi53aGVyZShcIiArIGBcIiR7ZmllbGR9XCJgICsgXCIsICc9PScsIFwiICsgYFwiJHtrZXl3b3JkfVwiYCArIFwiKVwiO1xuICAgICAgcXVlcnlTdHIgPSBgd2hlcmUoJyR7ZmllbGR9JywgJz09JywgJyR7a2V5d29yZH0nKWA7XG5cbiAgICAgIHJldHVybiBxdWVyeVN0cjtcbiAgICB9XG4gIH1cblxuXG5cbiAgcHVibGljIGFzeW5jIGRlY29kZVF1ZXJ5KHF1ZXJ5OiBRdWVyeSkge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWREYXRhKGRvYzogYW55LCBhcnI6IGFueVtdKSB7XG4gICAgICBhd2FpdCBhcnIucHVzaChkb2MuZGF0YSgpKTtcbiAgICB9XG5cbiAgICBsZXQgYXJyID0gbmV3IEFycmF5KCk7XG5cbiAgICBhd2FpdCBnZXREb2NzKHF1ZXJ5KS50aGVuKGFzeW5jIChxdWVyeVNuYXBzaG90KSA9PiB7XG4gICAgICBpZiAoIXF1ZXJ5U25hcHNob3QuZW1wdHkpIHtcbiAgICAgICAgbGV0IHByb21pc2VzID0gcXVlcnlTbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4gbG9hZERhdGEoZG9jLCBhcnIpKTtcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ZvdW5kIE5vIERvY3VtZW50cycpO1xuICAgICAgICBhbGVydCgnRm91bmQgTm8gRG9jdW1lbnRzJyk7XG4gICAgICB9XG4gICAgfSkuY2F0Y2goKGU6IEVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBHZXR0aW5nIERvY3VtZW50czonLCBlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBhcnI7XG5cbiAgICAvLyBhd2FpdCBxdWVyeS5nZXQoKS50aGVuKGFzeW5jIHF1ZXJ5U25hcHNob3QgPT4ge1xuICAgIC8vICAgaWYgKCFxdWVyeVNuYXBzaG90LmVtcHR5KSB7XG4gICAgLy8gICAgIGxldCBwcm9taXNlcyA9IHF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoZG9jID0+IGxvYWREYXRhKGRvYywgYXJyKSk7XG4gICAgLy8gICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICAvLyAgIH1cbiAgICAgIFxuICAgIC8vICAgZWxzZSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiRm91bmQgTm8gRG9jdW1lbnRzXCIpO1xuICAgIC8vICAgICBhbGVydChcIkZvdW5kIE5vIERvY3VtZW50c1wiKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9KS5jYXRjaChlID0+IHtcbiAgICAvLyAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZXR0aW5nIGRvY3VtZW50czpcIiwgZSk7XG4gICAgLy8gfSk7XG5cbiAgICAvLyByZXR1cm4gYXJyO1xuICB9XG4gIFxuICBwdWJsaWMgbWticXVlcnkoZGF0YXNldDogc3RyaW5nLCBhZ2VudDogc3RyaW5nLCBkYXRlOiBzdHJpbmcpIHtcbiAgICBsZXQgcXVlcnlEYXRlTG93ZXI6IHN0cmluZyB8IERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICBsZXQgcXVlcnlEYXRlVXBwZXI6IHN0cmluZyB8IERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICBxdWVyeURhdGVVcHBlci5zZXREYXRlKHF1ZXJ5RGF0ZVVwcGVyLmdldERhdGUoKSArIDEpO1xuICAgIHF1ZXJ5RGF0ZUxvd2VyID0gcXVlcnlEYXRlTG93ZXIudG9KU09OKCkuc3BsaXQoJ1QnKVswXTtcbiAgICBxdWVyeURhdGVVcHBlciA9IHF1ZXJ5RGF0ZVVwcGVyLnRvSlNPTigpLnNwbGl0KCdUJylbMF07XG5cbiAgICBsZXQgc3RyID0gYFNFTEVDVCAqXG4gICAgICAgICAgICAgIEZST00gXFxgc2FuZGJveC1jZTJjNS4ke2RhdGFzZXR9LiR7YWdlbnR9XFxgXG4gICAgICAgICAgICAgIFdIRVJFIHRpbWVzdGFtcCBCRVRXRUVOICcke3F1ZXJ5RGF0ZUxvd2VyfScgQU5EICcke3F1ZXJ5RGF0ZVVwcGVyfSdcbiAgICAgICAgICAgICAgT1JERVIgQlkgdGltZXN0YW1wIEFTQ2A7XG4gICAgY29uc29sZS5sb2coXCJxdWVyeXN0clwiLCBzdHIpO1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZGVjb2RlQmlnUXVlcnkocXVlcnlTdHI6IHN0cmluZykge1xuICAgIGxldCB0ZXN0ID0gYXdhaXQgYnFRdWVyeShxdWVyeVN0cik7XG4gICAgcmV0dXJuIHRlc3Q7XG4gIH1cbiAgXG59IiwiaW1wb3J0IHtcbiAgY3JlYXRlLFxuICByYW5kb21EZXBlbmRlbmNpZXMsXG4gIG11bHRpcGx5RGVwZW5kZW5jaWVzLFxuICBsb2dEZXBlbmRlbmNpZXMsXG4gIHBpRGVwZW5kZW5jaWVzLFxuICBzcXJ0RGVwZW5kZW5jaWVzLFxuICBjb3NEZXBlbmRlbmNpZXMsXG4gIGRvdE11bHRpcGx5RGVwZW5kZW5jaWVzLFxuICBNYXRyaXgsXG4gIHJhbmdlRGVwZW5kZW5jaWVzLFxufSBmcm9tICdtYXRoanMnO1xuXG5jb25zdCB7IHJhbmRvbSwgbXVsdGlwbHksIGxvZywgcGksIHNxcnQsIGNvcywgYWRkLCBkb3RNdWx0aXBseSwgcmFuZ2UgfSA9XG4gIGNyZWF0ZSh7XG4gICAgcmFuZG9tRGVwZW5kZW5jaWVzLFxuICAgIG11bHRpcGx5RGVwZW5kZW5jaWVzLFxuICAgIGxvZ0RlcGVuZGVuY2llcyxcbiAgICBwaURlcGVuZGVuY2llcyxcbiAgICBzcXJ0RGVwZW5kZW5jaWVzLFxuICAgIGNvc0RlcGVuZGVuY2llcyxcbiAgICBkb3RNdWx0aXBseURlcGVuZGVuY2llcyxcbiAgICByYW5nZURlcGVuZGVuY2llcyxcbiAgfSk7XG5cbmltcG9ydCBjbG9uZURlZXAgZnJvbSAnbG9kYXNoLmNsb25lZGVlcCc7XG5pbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gvaXNQbGFpbk9iamVjdCc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICdsb2Rhc2gvaXNBcnJheSc7XG5cbmV4cG9ydCBjbGFzcyBQYXJzZUVuZ2luZSB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBwdWJsaWMgZ2VuZXJhdGVQYXJhbU9iamVjdChvYmo6IGFueSwgc2NoZW1lOiBzdHJpbmcpIHtcbiAgICBsZXQgdXNlck9iaiA9IGNsb25lRGVlcChvYmopO1xuICAgIGNvbnNvbGUubG9nKHVzZXJPYmopO1xuICAgIGxldCB0b3RhbExlbiA9IDE7XG4gICAgbGV0IG1pbkxlbiA9IDE7XG4gICAgbGV0IG1heExlbiA9IDE7XG4gICAgbGV0IHBhdGggPSBbXG4gICAgICAnQ0FNRVJBUycsXG4gICAgICAnTElHSFRTJyxcbiAgICAgICdPQkpFQ1RTJyxcbiAgICAgICdJTUFHRVMnLFxuICAgICAgJ2R1cmF0aW9uTVMnLFxuICAgICAgJ0lNQUdFRklMVEVSUycsXG4gICAgICAnT0JKRUNURklMVEVSUycsXG4gICAgXTtcblxuICAgIC8vIFBhcnNlIGFuZCBnZW5lcmF0ZSBiYXNlZCBvbiBzbWFydCB0ZXh0XG4gICAgcGF0aC5mb3JFYWNoKChtb2R1bGUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaXNBcnJheSh1c2VyT2JqW21vZHVsZV0pICYmIHVzZXJPYmpbbW9kdWxlXS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHVzZXJPYmpbbW9kdWxlXSA9IHRoaXMucGFyc2VBbmRHZW5lcmF0ZTIodXNlck9ialttb2R1bGVdKTtcbiAgICAgICAgdG90YWxMZW4gKj0gdXNlck9ialttb2R1bGVdLmxlbmd0aDtcbiAgICAgICAgbWluTGVuID1cbiAgICAgICAgICB1c2VyT2JqW21vZHVsZV0ubGVuZ3RoID4gbWluTGVuID8gbWluTGVuIDogdXNlck9ialttb2R1bGVdLmxlbmd0aDtcbiAgICAgICAgbWF4TGVuID1cbiAgICAgICAgICBtYXhMZW4gPiB1c2VyT2JqW21vZHVsZV0ubGVuZ3RoID8gbWF4TGVuIDogdXNlck9ialttb2R1bGVdLmxlbmd0aDtcbiAgICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh1c2VyT2JqW21vZHVsZV0pKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiB1c2VyT2JqW21vZHVsZV0pIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBpc0FycmF5KHVzZXJPYmpbbW9kdWxlXVtrZXldKSAmJlxuICAgICAgICAgICAgdXNlck9ialttb2R1bGVdW2tleV0ubGVuZ3RoID4gMFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdXNlck9ialttb2R1bGVdW2tleV0gPSB0aGlzLnBhcnNlQW5kR2VuZXJhdGUyKHVzZXJPYmpbbW9kdWxlXVtrZXldKTtcbiAgICAgICAgICAgIHRvdGFsTGVuICo9IHVzZXJPYmpbbW9kdWxlXVtrZXldLmxlbmd0aDtcbiAgICAgICAgICAgIG1pbkxlbiA9XG4gICAgICAgICAgICAgIHVzZXJPYmpbbW9kdWxlXVtrZXldLmxlbmd0aCA+IG1pbkxlblxuICAgICAgICAgICAgICAgID8gbWluTGVuXG4gICAgICAgICAgICAgICAgOiB1c2VyT2JqW21vZHVsZV1ba2V5XS5sZW5ndGg7XG4gICAgICAgICAgICBtYXhMZW4gPVxuICAgICAgICAgICAgICBtYXhMZW4gPiB1c2VyT2JqW21vZHVsZV1ba2V5XS5sZW5ndGhcbiAgICAgICAgICAgICAgICA/IG1heExlblxuICAgICAgICAgICAgICAgIDogdXNlck9ialttb2R1bGVdW2tleV0ubGVuZ3RoO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh1c2VyT2JqW21vZHVsZV1ba2V5XSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleTIgaW4gdXNlck9ialttb2R1bGVdW2tleV0pIHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGlzQXJyYXkodXNlck9ialttb2R1bGVdW2tleV1ba2V5Ml0pICYmXG4gICAgICAgICAgICAgICAgdXNlck9ialttb2R1bGVdW2tleV1ba2V5Ml0ubGVuZ3RoID4gMFxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB1c2VyT2JqW21vZHVsZV1ba2V5XVtrZXkyXSA9IHRoaXMucGFyc2VBbmRHZW5lcmF0ZTIoXG4gICAgICAgICAgICAgICAgICB1c2VyT2JqW21vZHVsZV1ba2V5XVtrZXkyXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdG90YWxMZW4gKj0gdXNlck9ialttb2R1bGVdW2tleV1ba2V5Ml0ubGVuZ3RoO1xuICAgICAgICAgICAgICAgIG1pbkxlbiA9XG4gICAgICAgICAgICAgICAgICB1c2VyT2JqW21vZHVsZV1ba2V5XVtrZXkyXS5sZW5ndGggPiBtaW5MZW5cbiAgICAgICAgICAgICAgICAgICAgPyBtaW5MZW5cbiAgICAgICAgICAgICAgICAgICAgOiB1c2VyT2JqW21vZHVsZV1ba2V5XVtrZXkyXS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgbWF4TGVuID1cbiAgICAgICAgICAgICAgICAgIG1heExlbiA+IHVzZXJPYmpbbW9kdWxlXVtrZXldW2tleTJdLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICA/IG1heExlblxuICAgICAgICAgICAgICAgICAgICA6IHVzZXJPYmpbbW9kdWxlXVtrZXldW2tleTJdLmxlbmd0aDtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHVzZXJPYmpbbW9kdWxlXVtrZXldW2tleTJdKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleTMgaW4gdXNlck9ialttb2R1bGVdW2tleV1ba2V5Ml0pIHtcbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgaXNBcnJheSh1c2VyT2JqW21vZHVsZV1ba2V5XVtrZXkyXVtrZXkzXSkgJiZcbiAgICAgICAgICAgICAgICAgICAgdXNlck9ialttb2R1bGVdW2tleV1ba2V5Ml1ba2V5M10ubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJPYmpbbW9kdWxlXVtrZXldW2tleTJdW2tleTNdID0gdGhpcy5wYXJzZUFuZEdlbmVyYXRlMihcbiAgICAgICAgICAgICAgICAgICAgICB1c2VyT2JqW21vZHVsZV1ba2V5XVtrZXkyXVtrZXkzXVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB0b3RhbExlbiAqPSB1c2VyT2JqW21vZHVsZV1ba2V5XVtrZXkyXVtrZXkzXS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIG1pbkxlbiA9XG4gICAgICAgICAgICAgICAgICAgICAgdXNlck9ialttb2R1bGVdW2tleV1ba2V5Ml1ba2V5M10ubGVuZ3RoID4gbWluTGVuXG4gICAgICAgICAgICAgICAgICAgICAgICA/IG1pbkxlblxuICAgICAgICAgICAgICAgICAgICAgICAgOiB1c2VyT2JqW21vZHVsZV1ba2V5XVtrZXkyXVtrZXkzXS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIG1heExlbiA9XG4gICAgICAgICAgICAgICAgICAgICAgbWF4TGVuID4gdXNlck9ialttb2R1bGVdW2tleV1ba2V5Ml1ba2V5M10ubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICA/IG1heExlblxuICAgICAgICAgICAgICAgICAgICAgICAgOiB1c2VyT2JqW21vZHVsZV1ba2V5XVtrZXkyXVtrZXkzXS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc2NoZW1lID09ICd2ZWN0b3JpemUnKSB7XG4gICAgICBwYXRoLmZvckVhY2goKG1vZHVsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGlzQXJyYXkodXNlck9ialttb2R1bGVdKSAmJiB1c2VyT2JqW21vZHVsZV0ubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGxldCB0bXAgPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsTGVuOyBpKyspIHtcbiAgICAgICAgICAgIHRtcC5wdXNoKHVzZXJPYmpbbW9kdWxlXVtpICUgdXNlck9ialttb2R1bGVdLmxlbmd0aF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1c2VyT2JqW21vZHVsZV0gPSB0bXA7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh1c2VyT2JqW21vZHVsZV0pKSB7XG4gICAgICAgICAgZm9yIChsZXQga2V5IGluIHVzZXJPYmpbbW9kdWxlXSkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBpc0FycmF5KHVzZXJPYmpbbW9kdWxlXVtrZXldKSAmJlxuICAgICAgICAgICAgICB1c2VyT2JqW21vZHVsZV1ba2V5XS5sZW5ndGggPiAxXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgbGV0IHRtcCA9IFtdO1xuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsTGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0bXAucHVzaCh1c2VyT2JqW21vZHVsZV1ba2V5XVtpICUgdXNlck9ialttb2R1bGVdW2tleV0ubGVuZ3RoXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdXNlck9ialttb2R1bGVdW2tleV0gPSB0bXA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QodXNlck9ialttb2R1bGVdW2tleV0pKSB7XG4gICAgICAgICAgICAgIGZvciAobGV0IGtleTIgaW4gdXNlck9ialttb2R1bGVdW2tleV0pIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBpc0FycmF5KHVzZXJPYmpbbW9kdWxlXVtrZXldW2tleTJdKSAmJlxuICAgICAgICAgICAgICAgICAgdXNlck9ialttb2R1bGVdW2tleV1ba2V5Ml0ubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgbGV0IHRtcCA9IFtdO1xuICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbExlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRtcC5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgIHVzZXJPYmpbbW9kdWxlXVtrZXldW2tleTJdW1xuICAgICAgICAgICAgICAgICAgICAgICAgaSAlIHVzZXJPYmpbbW9kdWxlXVtrZXldW2tleTJdLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHVzZXJPYmpbbW9kdWxlXVtrZXldW2tleTJdID0gdG1wO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh1c2VyT2JqW21vZHVsZV1ba2V5XVtrZXkyXSkpIHtcbiAgICAgICAgICAgICAgICAgIGZvciAobGV0IGtleTMgaW4gdXNlck9ialttb2R1bGVdW2tleV1ba2V5Ml0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgIGlzQXJyYXkodXNlck9ialttb2R1bGVdW2tleV1ba2V5Ml1ba2V5M10pICYmXG4gICAgICAgICAgICAgICAgICAgICAgdXNlck9ialttb2R1bGVdW2tleV1ba2V5Ml1ba2V5M10ubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgdG1wID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbExlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0bXAucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlck9ialttb2R1bGVdW2tleV1ba2V5Ml1ba2V5M11bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSAlIHVzZXJPYmpbbW9kdWxlXVtrZXldW2tleTJdW2tleTNdLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB1c2VyT2JqW21vZHVsZV1ba2V5XVtrZXkyXVtrZXkzXSA9IHRtcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChzY2hlbWUgPT0gJ2V4cGFuZCcpIHtcbiAgICAgIHBhdGguZm9yRWFjaCgobW9kdWxlLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNBcnJheSh1c2VyT2JqW21vZHVsZV0pICYmXG4gICAgICAgICAgdXNlck9ialttb2R1bGVdLmxlbmd0aCA+IDEgJiZcbiAgICAgICAgICB1c2VyT2JqW21vZHVsZV0ubGVuZ3RoICE9IG1heExlblxuICAgICAgICApIHtcbiAgICAgICAgICBsZXQgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgYExlbmd0aCBNaXNtYXRjaDogJHttb2R1bGV9Lmxlbmd0aD0ke3VzZXJPYmpbbW9kdWxlXS5sZW5ndGh9ICE9IG1heExlbj0ke21heExlbn1gXG4gICAgICAgICAgKTtcbiAgICAgICAgICBhbGVydChlcnIubWVzc2FnZSk7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QodXNlck9ialttb2R1bGVdKSkge1xuICAgICAgICAgIGZvciAobGV0IGtleSBpbiB1c2VyT2JqW21vZHVsZV0pIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgaXNBcnJheSh1c2VyT2JqW21vZHVsZV1ba2V5XSkgJiZcbiAgICAgICAgICAgICAgdXNlck9ialttb2R1bGVdW2tleV0ubGVuZ3RoID4gMSAmJlxuICAgICAgICAgICAgICB1c2VyT2JqW21vZHVsZV1ba2V5XS5sZW5ndGggIT0gbWF4TGVuXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgbGV0IGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgTGVuZ3RoIE1pc21hdGNoOiAke21vZHVsZX1bJHtrZXl9XS5sZW5ndGg9JHt1c2VyT2JqW21vZHVsZV1ba2V5XS5sZW5ndGh9ICE9IG1heExlbj0ke21heExlbn1gXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGFsZXJ0KGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHVzZXJPYmpbbW9kdWxlXVtrZXldKSkge1xuICAgICAgICAgICAgICBmb3IgKGxldCBrZXkyIGluIHVzZXJPYmpbbW9kdWxlXVtrZXldKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgaXNBcnJheSh1c2VyT2JqW21vZHVsZV1ba2V5XVtrZXkyXSkgJiZcbiAgICAgICAgICAgICAgICAgIHVzZXJPYmpbbW9kdWxlXVtrZXldW2tleTJdLmxlbmd0aCA+IDEgJiZcbiAgICAgICAgICAgICAgICAgIHVzZXJPYmpbbW9kdWxlXVtrZXldW2tleTJdLmxlbmd0aCAhPSBtYXhMZW5cbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIGxldCBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIGBMZW5ndGggTWlzbWF0Y2g6ICR7bW9kdWxlfVske2tleX1dWyR7a2V5Mn1dLmxlbmd0aD0ke3VzZXJPYmpbbW9kdWxlXVtrZXldW2tleTJdLmxlbmd0aH0gIT0gbWF4TGVuPSR7bWF4TGVufWBcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBhbGVydChlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHVzZXJPYmpbbW9kdWxlXVtrZXldW2tleTJdKSkge1xuICAgICAgICAgICAgICAgICAgZm9yIChsZXQga2V5MyBpbiB1c2VyT2JqW21vZHVsZV1ba2V5XVtrZXkyXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgaXNBcnJheSh1c2VyT2JqW21vZHVsZV1ba2V5XVtrZXkyXVtrZXkzXSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICB1c2VyT2JqW21vZHVsZV1ba2V5XVtrZXkyXVtrZXkzXS5sZW5ndGggPiAxICYmXG4gICAgICAgICAgICAgICAgICAgICAgdXNlck9ialttb2R1bGVdW2tleV1ba2V5Ml1ba2V5M10ubGVuZ3RoICE9IG1heExlblxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgYExlbmd0aCBNaXNtYXRjaDogJHttb2R1bGV9WyR7a2V5fV1bJHtrZXkyfV1bJHtrZXkzfV0ubGVuZ3RoPSR7dXNlck9ialttb2R1bGVdW2tleV1ba2V5Ml1ba2V5M10ubGVuZ3RofSAhPSBtYXhMZW49JHttYXhMZW59YFxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ3VzZXJPYmonLCB1c2VyT2JqLCAndG90YWxMZW46JywgdG90YWxMZW4pO1xuICAgIHJldHVybiB1c2VyT2JqO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5QYXJhbU9iaih0eXBlOiBzdHJpbmcsIG9iajogYW55KSB7XG4gICAgaWYgKHR5cGUgPT0gJ0NBTUVSQVMnKSB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIG9ialtrZXldLnBvc2l0aW9uID0gdGhpcy52ZWN0b3JpemUob2JqW2tleV0ucG9zaXRpb24sICdjYXJ0ZXNpYW5PYmonKTtcbiAgICAgICAgICBvYmpba2V5XS50YXJnZXRJbmNoZXMgPSB0aGlzLnZlY3Rvcml6ZShcbiAgICAgICAgICAgIG9ialtrZXldLnRhcmdldEluY2hlcyxcbiAgICAgICAgICAgICdjYXJ0ZXNpYW5PYmonXG4gICAgICAgICAgKTtcbiAgICAgICAgICBvYmpba2V5XS52aXNpYmxlID0gdGhpcy52ZWN0b3JpemUob2JqW2tleV0udmlzaWJsZSwgJ2FycmF5Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJ0xJR0hUUycpIHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgb2JqW2tleV0ucG9zaXRpb24gPSB0aGlzLnZlY3Rvcml6ZShvYmpba2V5XS5wb3NpdGlvbiwgJ2NhcnRlc2lhbk9iaicpO1xuICAgICAgICAgIG9ialtrZXldLmludGVuc2l0eSA9IHRoaXMudmVjdG9yaXplKG9ialtrZXldLmludGVuc2l0eSwgJ2FycmF5Jyk7XG4gICAgICAgICAgb2JqW2tleV0udmlzaWJsZSA9IHRoaXMudmVjdG9yaXplKG9ialtrZXldLnZpc2libGUsICdhcnJheScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09ICdPQkpFQ1RTJykge1xuICAgICAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBvYmpba2V5XS5wb3NpdGlvbkluY2hlcyA9IHRoaXMudmVjdG9yaXplKFxuICAgICAgICAgICAgb2JqW2tleV0ucG9zaXRpb25JbmNoZXMsXG4gICAgICAgICAgICAnY2FydGVzaWFuT2JqJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgb2JqW2tleV0ucm90YXRpb25EZWdyZWVzID0gdGhpcy52ZWN0b3JpemUoXG4gICAgICAgICAgICBvYmpba2V5XS5yb3RhdGlvbkRlZ3JlZXMsXG4gICAgICAgICAgICAnY2FydGVzaWFuT2JqJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgb2JqW2tleV0uc2l6ZUluY2hlcyA9IHRoaXMudmVjdG9yaXplKG9ialtrZXldLnNpemVJbmNoZXMsICdhcnJheScpO1xuICAgICAgICAgIG9ialtrZXldLm1hdGVyaWFsLm9wYWNpdHkgPSB0aGlzLnZlY3Rvcml6ZShcbiAgICAgICAgICAgIG9ialtrZXldLm1hdGVyaWFsLm9wYWNpdHksXG4gICAgICAgICAgICAnYXJyYXknXG4gICAgICAgICAgKTtcbiAgICAgICAgICBvYmpba2V5XS52aXNpYmxlID0gdGhpcy52ZWN0b3JpemUob2JqW2tleV0udmlzaWJsZSwgJ2FycmF5Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJ0lNQUdFUycpIHtcbiAgICAgIG9iai5pbWFnZWlkeCA9IHRoaXMudmVjdG9yaXplKG9iai5pbWFnZWlkeCwgJ2FycmF5Jyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBub3JtYWwobXU6IG51bWJlciwgc2lnbWE6IG51bWJlciwgbjogbnVtYmVyKSB7XG4gICAgbGV0IHUxID0gcmFuZG9tIShbbl0pO1xuICAgIGxldCB1MiA9IHJhbmRvbSEoW25dKTtcblxuICAgIGxldCBSX3NxID0gbXVsdGlwbHkhKC0yLCBsb2chKHUxKSk7XG4gICAgbGV0IHRoZXRhID0gbXVsdGlwbHkhKDIgKiBwaSEsIHUyKTtcblxuICAgIGxldCB6MSA9IGRvdE11bHRpcGx5IShzcXJ0IShSX3NxIGFzIE1hdHJpeCksIGNvcyEodGhldGEgYXMgTWF0cml4KSk7XG4gICAgbGV0IHNhbXBsZSA9IGFkZCEobXUsIG11bHRpcGx5ISh6MSwgc2lnbWEpKTtcblxuICAgIHJldHVybiBzYW1wbGU7XG4gIH1cblxuICBwcml2YXRlIHBhcnNlQW5kR2VuZXJhdGUyKHJvdzogYW55W10pIHtcbiAgICBsZXQgc2FtcGxlOiBhbnk7XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHJvd1swXSkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSB7XG4gICAgICBsZXQgcmVjaXBlID0gcm93WzBdLnNwbGl0KCcvJyk7XG4gICAgICBpZiAocmVjaXBlWzBdID09ICdub3JtYWwnIHx8IHJlY2lwZVswXSA9PSAnbicpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JvdzonLCByb3cpO1xuICAgICAgICBjb25zb2xlLmxvZygncmVjaXBlOicsIHJlY2lwZSk7XG4gICAgICAgIGxldCBtdSA9IE51bWJlcihyZWNpcGVbMV0uc3BsaXQoJywnKVswXSk7XG4gICAgICAgIGxldCBzaWdtYSA9IE51bWJlcihyZWNpcGVbMV0uc3BsaXQoJywnKVsxXSk7XG4gICAgICAgIGxldCBuID0gTnVtYmVyKHJlY2lwZVsyXSk7XG4gICAgICAgIHNhbXBsZSA9IHRoaXMubm9ybWFsKG11LCBzaWdtYSwgbikgYXMgbnVtYmVyW107XG4gICAgICAgIGNvbnNvbGUubG9nKHNhbXBsZSk7XG4gICAgICB9IGVsc2UgaWYgKHJlY2lwZVswXSA9PSAndW5pZm9ybScgfHwgcmVjaXBlWzBdID09ICd1Jykge1xuICAgICAgICBsZXQgbWluID0gTnVtYmVyKHJlY2lwZVsxXS5zcGxpdCgnLCcpWzBdKTtcbiAgICAgICAgbGV0IG1heCA9IE51bWJlcihyZWNpcGVbMV0uc3BsaXQoJywnKVsxXSk7XG4gICAgICAgIGxldCBzaXplID0gW051bWJlcihyZWNpcGVbMl0pXTtcbiAgICAgICAgc2FtcGxlID0gcmFuZG9tIShzaXplLCBtaW4sIG1heCk7XG4gICAgICB9IGVsc2UgaWYgKHJlY2lwZVswXSA9PSAncmFuZ2UnIHx8IHJlY2lwZVswXSA9PSAncicpIHtcbiAgICAgICAgbGV0IHN0YXJ0ID0gTnVtYmVyKHJlY2lwZVsxXS5zcGxpdCgnLCcpWzBdKTtcbiAgICAgICAgbGV0IGVuZCA9IE51bWJlcihyZWNpcGVbMV0uc3BsaXQoJywnKVsxXSk7XG4gICAgICAgIGxldCBzdGVwID0gTnVtYmVyKHJlY2lwZVsyXSk7XG4gICAgICAgIGxldCByYW5nZUFyciA9IHJhbmdlIShzdGFydCwgZW5kLCBzdGVwKTtcbiAgICAgICAgc2FtcGxlID0gW107XG4gICAgICAgIHJhbmdlQXJyLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgc2FtcGxlLnB1c2goTnVtYmVyKHBhcnNlRmxvYXQodmFsdWUpLnRvUHJlY2lzaW9uKDQpKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChyZWNpcGVbMF0gPT0gJ2xpbnNwYWNlJyB8fCByZWNpcGVbMF0gPT0gJ2wnKSB7XG4gICAgICAgIGxldCBzdGFydCA9IE51bWJlcihyZWNpcGVbMV0uc3BsaXQoJywnKVswXSk7XG4gICAgICAgIGxldCBlbmQgPSBOdW1iZXIocmVjaXBlWzFdLnNwbGl0KCcsJylbMV0pO1xuICAgICAgICBsZXQgbnVtID0gTnVtYmVyKHJlY2lwZVsyXSk7XG4gICAgICAgIGxldCBzdGVwID0gKGVuZCAtIHN0YXJ0KSAvIChudW0gLSAxKTtcbiAgICAgICAgbGV0IGxpbnNwYWNlUmFuZ2UgPSByYW5nZSEoc3RhcnQsIGVuZCwgc3RlcCwgdHJ1ZSk7XG4gICAgICAgIHNhbXBsZSA9IFtdO1xuICAgICAgICBsaW5zcGFjZVJhbmdlLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgc2FtcGxlLnB1c2goTnVtYmVyKHBhcnNlRmxvYXQodmFsdWUpLnRvUHJlY2lzaW9uKDQpKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChyZWNpcGVbMF0gPT0gJ21vdmllJyB8fCByZWNpcGVbMF0gPT0gJ20nKSB7XG4gICAgICAgIGxldCBsaXN0ID0gcmVjaXBlWzFdLnNwbGl0KCcsJyk7XG4gICAgICAgIGxldCB0bXA6IGFueVtdID0gW107XG4gICAgICAgIGxpc3QuZm9yRWFjaCgodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgIHRtcC5wdXNoKE51bWJlcihwYXJzZUZsb2F0KHZhbHVlKS50b1ByZWNpc2lvbig0KSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2FtcGxlID0gW107XG4gICAgICAgIHNhbXBsZS5wdXNoKHRtcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgbGlzdCA9IHJlY2lwZVswXS5zcGxpdCgnLCcpO1xuICAgICAgICBzYW1wbGUgPSBbXTtcbiAgICAgICAgbGlzdC5mb3JFYWNoKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgc2FtcGxlLnB1c2goTnVtYmVyKHBhcnNlRmxvYXQodmFsdWUpLnRvUHJlY2lzaW9uKDQpKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcm93O1xuICAgIH1cbiAgICAvLyBlbHNlIHtcbiAgICAvLyAgIGlmIChpc05hTihyb3dbMF0pID09IGZhbHNlKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdzaW5nbGUgbnVtYmVyJywgcm93KTtcbiAgICAvLyAgICAgc2FtcGxlID0gW107XG4gICAgLy8gICAgIHNhbXBsZS5wdXNoKHJvdyk7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIHNhbXBsZTtcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VBbmRHZW5lcmF0ZShyb3c6IGFueSkge1xuICAgIGxldCBzYW1wbGU6IGFueTtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHJvdykgPT09ICdbb2JqZWN0IFN0cmluZ10nKSB7XG4gICAgICBsZXQgcmVjaXBlID0gcm93LnNwbGl0KCcvJyk7XG4gICAgICBpZiAocmVjaXBlWzBdID09ICdub3JtYWwnIHx8IHJlY2lwZVswXSA9PSAnbicpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JvdzonLCByb3cpO1xuICAgICAgICBsZXQgbXUgPSBOdW1iZXIocmVjaXBlWzFdLnNwbGl0KCcsJylbMF0pO1xuICAgICAgICBsZXQgc2lnbWEgPSBOdW1iZXIocmVjaXBlWzFdLnNwbGl0KCcsJylbMV0pO1xuICAgICAgICBsZXQgbiA9IE51bWJlcihyZWNpcGVbMl0pO1xuICAgICAgICBzYW1wbGUgPSB0aGlzLm5vcm1hbChtdSwgc2lnbWEsIG4pIGFzIG51bWJlcltdO1xuICAgICAgfSBlbHNlIGlmIChyZWNpcGVbMF0gPT0gJ3VuaWZvcm0nIHx8IHJlY2lwZVswXSA9PSAndScpIHtcbiAgICAgICAgbGV0IG1pbiA9IE51bWJlcihyZWNpcGVbMV0uc3BsaXQoJywnKVswXSk7XG4gICAgICAgIGxldCBtYXggPSBOdW1iZXIocmVjaXBlWzFdLnNwbGl0KCcsJylbMV0pO1xuICAgICAgICBsZXQgc2l6ZSA9IFtOdW1iZXIocmVjaXBlWzJdKV07XG4gICAgICAgIHNhbXBsZSA9IHJhbmRvbSEoc2l6ZSwgbWluLCBtYXgpO1xuICAgICAgfSBlbHNlIGlmIChyZWNpcGVbMF0gPT0gJ3JhbmdlJyB8fCByZWNpcGVbMF0gPT0gJ3InKSB7XG4gICAgICAgIGxldCBzdGFydCA9IE51bWJlcihyZWNpcGVbMV0uc3BsaXQoJywnKVswXSk7XG4gICAgICAgIGxldCBlbmQgPSBOdW1iZXIocmVjaXBlWzFdLnNwbGl0KCcsJylbMV0pO1xuICAgICAgICBsZXQgc3RlcCA9IE51bWJlcihyZWNpcGVbMl0pO1xuICAgICAgICBsZXQgcmFuZ2VBcnIgPSByYW5nZSEoc3RhcnQsIGVuZCwgc3RlcCk7XG4gICAgICAgIHNhbXBsZSA9IFtdO1xuICAgICAgICByYW5nZUFyci5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHNhbXBsZS5wdXNoKE51bWJlcihwYXJzZUZsb2F0KHZhbHVlKS50b1ByZWNpc2lvbig0KSkpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAocmVjaXBlWzBdID09ICdsaW5zcGFjZScgfHwgcmVjaXBlWzBdID09ICdsJykge1xuICAgICAgICBsZXQgc3RhcnQgPSBOdW1iZXIocmVjaXBlWzFdLnNwbGl0KCcsJylbMF0pO1xuICAgICAgICBsZXQgZW5kID0gTnVtYmVyKHJlY2lwZVsxXS5zcGxpdCgnLCcpWzFdKTtcbiAgICAgICAgbGV0IG51bSA9IE51bWJlcihyZWNpcGVbMl0pO1xuICAgICAgICBsZXQgc3RlcCA9IChlbmQgLSBzdGFydCkgLyAobnVtIC0gMSk7XG4gICAgICAgIGxldCBsaW5zcGFjZSA9IHJhbmdlIShzdGFydCwgZW5kLCBzdGVwLCB0cnVlKTtcbiAgICAgICAgc2FtcGxlID0gW107XG4gICAgICAgIGxpbnNwYWNlLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgc2FtcGxlLnB1c2goTnVtYmVyKHBhcnNlRmxvYXQodmFsdWUpLnRvUHJlY2lzaW9uKDQpKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChyZWNpcGVbMF0gPT0gJ21vdmllJyB8fCByZWNpcGVbMF0gPT0gJ20nKSB7XG4gICAgICAgIGxldCBsaXN0ID0gcmVjaXBlWzFdLnNwbGl0KCcsJyk7XG4gICAgICAgIGxldCB0bXA6IGFueVtdID0gW107XG4gICAgICAgIGxpc3QuZm9yRWFjaCgodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgIHRtcC5wdXNoKE51bWJlcihwYXJzZUZsb2F0KHZhbHVlKS50b1ByZWNpc2lvbig0KSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2FtcGxlID0gW107XG4gICAgICAgIHNhbXBsZS5wdXNoKHRtcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgbGlzdCA9IHJlY2lwZVswXS5zcGxpdCgnLCcpO1xuICAgICAgICBzYW1wbGUgPSBbXTtcbiAgICAgICAgbGlzdC5mb3JFYWNoKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgc2FtcGxlLnB1c2goTnVtYmVyKHBhcnNlRmxvYXQodmFsdWUpLnRvUHJlY2lzaW9uKDQpKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaXNOYU4ocm93KSA9PSBmYWxzZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnc2luZ2xlIG51bWJlcicsIHJvdyk7XG4gICAgICAgIHNhbXBsZSA9IFtdO1xuICAgICAgICBzYW1wbGUucHVzaChyb3cpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzYW1wbGU7XG4gIH1cblxuICBwcml2YXRlIHZlY3Rvcml6ZShvYmo6IGFueSwgdHlwZTogc3RyaW5nKSB7XG4gICAgbGV0IHRtcDogYW55O1xuICAgIGlmICh0eXBlID09ICdhcnJheScpIHtcbiAgICAgIHRtcCA9IFtdO1xuICAgICAgb2JqLmZvckVhY2goKHJvdzogYW55KSA9PiB7XG4gICAgICAgIHRtcC5wdXNoKC4uLnRoaXMucGFyc2VBbmRHZW5lcmF0ZShyb3cpKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PSAnY2FydGVzaWFuT2JqJykge1xuICAgICAgdG1wID0geyB4OiBbXSwgeTogW10sIHo6IFtdIH07XG5cbiAgICAgIGxldCB0bXAyOiBhbnkgPSB7IHg6IFtdLCB5OiBbXSwgejogW10gfTtcblxuICAgICAgZm9yIChsZXQgYXhpcyBpbiBvYmopIHtcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShheGlzKSkge1xuICAgICAgICAgIG9ialtheGlzXS5mb3JFYWNoKChyb3c6IGFueSkgPT4ge1xuICAgICAgICAgICAgdG1wMltheGlzXS5wdXNoKC4uLnRoaXMucGFyc2VBbmRHZW5lcmF0ZShyb3cpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoISh0bXAyLngubGVuZ3RoID09IHRtcDIueS5sZW5ndGggJiYgdG1wMi55Lmxlbmd0aCA9PSB0bXAyLnoubGVuZ3RoKSkge1xuICAgICAgICB0bXAyLnguZm9yRWFjaCgoeDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgdG1wMi55LmZvckVhY2goKHk6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgdG1wMi56LmZvckVhY2goKHo6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICB0bXAueC5wdXNoKHgpO1xuICAgICAgICAgICAgICB0bXAueS5wdXNoKHkpO1xuICAgICAgICAgICAgICB0bXAuei5wdXNoKHopO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG1wLnggPSB0bXAyLng7XG4gICAgICAgIHRtcC55ID0gdG1wMi55O1xuICAgICAgICB0bXAueiA9IHRtcDIuejtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRtcDtcbiAgfVxufVxuIiwiLyogKGlnbm9yZWQpICovIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uYW1kRCA9IGZ1bmN0aW9uICgpIHtcblx0dGhyb3cgbmV3IEVycm9yKCdkZWZpbmUgY2Fubm90IGJlIHVzZWQgaW5kaXJlY3QnKTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5hbWRPID0ge307IiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rbWtmaWxlc1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtta2ZpbGVzXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfcnVudGltZV9hcGlfanMtbm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdF9ydW50aW1lX3NvdXItOTBjYmNjXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21haW4udHNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==