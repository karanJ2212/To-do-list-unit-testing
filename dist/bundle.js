<<<<<<< HEAD
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n  height: 100vh;\\n  display: flex;\\n  align-items: center;\\n  font-family: sans-serif;\\n  font-size: 15px;\\n  font-weight: normal;\\n}\\n\\nul {\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\n.main-panel {\\n  min-width: 40%;\\n  max-width: 75%;\\n  margin: auto;\\n  display: grid;\\n  box-shadow: 0 0 10px #888;\\n}\\n\\n.list-title {\\n  font-size: inherit;\\n  margin: 0;\\n}\\n\\n.add-input {\\n  border: 1px solid black;\\n  font-style: italic;\\n}\\n\\n.add-input,\\n.clear-btn {\\n  border: none;\\n}\\n\\n.list-title,\\n.add-input,\\n.item-container,\\n.clear-btn {\\n  padding: 15px;\\n  border-bottom: 1px solid #b5b5b5;\\n  display: flex;\\n}\\n\\n.clear-btn {\\n  color: gray;\\n  font-size: 14px;\\n  border: none;\\n}\\n\\n.complete {\\n  text-decoration: line-through;\\n  color: grey;\\n}\\n\\n.text-area {\\n  display: none;\\n}\\n\\n.item-container {\\n  justify-content: space-between;\\n  gap: 5px;\\n}\\n\\n.item-container span,\\n.item-container textarea {\\n  width: 200px;\\n  flex-grow: 1;\\n}\\n\\n.cancel-btn {\\n  height: 20px;\\n  width: 20px;\\n}\\n\\n.edit-item {\\n  display: inline;\\n  font: inherit;\\n  padding: 0;\\n  height: 18px;\\n  border: none;\\n  outline: none;\\n  resize: none;\\n  cursor: text;\\n  overflow: auto;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/crud.js":
/*!*********************!*\
  !*** ./src/crud.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"deleteAllCompleted\": () => (/* binding */ deleteAllCompleted),\n/* harmony export */   \"edit\": () => (/* binding */ edit),\n/* harmony export */   \"populateList\": () => (/* binding */ populateList),\n/* harmony export */   \"remove\": () => (/* binding */ remove)\n/* harmony export */ });\n/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList.js */ \"./src/todoList.js\");\n/* harmony import */ var _delete_btn_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-btn.png */ \"./src/delete-btn.png\");\n\n\n\n// Add functionality\nfunction add(value) {\n  // Create new item\n  const newItem = new _todoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](value);\n  // Update local storage\n  localStorage.setItem('todoList', JSON.stringify(newItem.getList()));\n}\n\n// Remove Functionality\nfunction remove(index) {\n  _todoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].list = _todoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].list.filter((item) => item !== _todoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].list[index]);\n  // Update indexes\n  _todoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].list.forEach((item, i) => {\n    item.index = i;\n  });\n  // Update local storage\n  localStorage.setItem('todoList', JSON.stringify(_todoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].list));\n}\n\nfunction edit(index, text) {\n  _todoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].list[index].description = text;\n  // Update local storage\n  localStorage.setItem('todoList', JSON.stringify(_todoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].list));\n}\n\n// Add items to UI\nfunction populateList() {\n  // eslint-disable-next-line no-undef, no-unused-vars, no-useless-concat\n  const todoList = document.getElementById('todo-list');\n  todoList.innerHTML = '';\n\n  _todoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].list.forEach((item) => {\n    const listItem = document.createElement('li');\n    listItem.setAttribute('id', item.index);\n    listItem.classList = 'item-container';\n\n    listItem.innerHTML = `\n    <input class=\"checkbox\" type=\"checkbox\">\n    <span>${item.description}</span>\n    <textarea class=\"text-area\" maxlength=\"30\">${item.description}</textarea>\n    <img class=\"cancel-btn\" src=\"${_delete_btn_png__WEBPACK_IMPORTED_MODULE_1__}\">\n    `;\n    // eslint-disable-next-line no-undef, no-unused-vars, no-useless-concat\n    todoList.appendChild(listItem);\n\n    const checkbox = listItem.querySelector('input');\n    const text = listItem.querySelector('span');\n    const textInput = listItem.querySelector('textarea');\n    const deleteButton = listItem.querySelector('img');\n\n    // Update\n    checkbox.addEventListener('change', () => {\n      const index = parseInt(listItem.id, 10);\n      _todoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].list[index].update();\n      text.classList.toggle('complete');\n      textInput.classList.toggle('complete');\n      localStorage.setItem('todoList', JSON.stringify(_todoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].list));\n    });\n\n    // Edit functionality\n    text.addEventListener('click', () => {\n      text.style.display = 'none';\n      textInput.classList.toggle('edit-item');\n    });\n\n    textInput.addEventListener('keydown', (e) => {\n      // Follow value\n      text.innerHTML = textInput.value;\n\n      // Update list\n      const index = parseInt(listItem.id, 10);\n      edit(index, text.innerHTML);\n\n      if (e.code === 'Enter') {\n        // Update UI\n        text.style.display = 'block';\n        textInput.classList.toggle('edit-item');\n      }\n    });\n\n    // Delete functionality\n    deleteButton.addEventListener('click', () => {\n      // Update list\n      const index = parseInt(listItem.id, 10);\n      // Delete item\n      remove(index);\n      // Update UI\n      populateList();\n    });\n\n    if (item.complete) {\n      checkbox.checked = true;\n      text.classList = 'complete';\n    }\n  });\n}\n\n// Clear completed functionality\nfunction deleteAllCompleted(todo) {\n  // Update list\n  todo.list = todo.list.filter((item) => item.complete === false);\n  // Update indexes\n  todo.list.forEach((item, i) => {\n    item.index = i;\n  });\n  // Update local storage\n  localStorage.setItem('todoList', JSON.stringify(todo.list));\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/crud.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _crud_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crud.js */ \"./src/crud.js\");\n/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoList.js */ \"./src/todoList.js\");\n\n\n\n\n// Window load\nconst list = JSON.parse(localStorage.getItem('todoList'));\nif (list) {\n  list.forEach((item) => new _todoList_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](item.description, item.complete));\n}\n\n// Add\nconst addInput = document.getElementById('add-input');\naddInput.addEventListener('keydown', (event) => {\n  if (event.key === 'Enter') {\n    (0,_crud_js__WEBPACK_IMPORTED_MODULE_1__.add)(addInput.value);\n    addInput.value = '';\n    (0,_crud_js__WEBPACK_IMPORTED_MODULE_1__.populateList)();\n  }\n});\n\n// Delete all completed\nconst clearButton = document.getElementById('clear-btn');\nclearButton.addEventListener('click', () => {\n  (0,_crud_js__WEBPACK_IMPORTED_MODULE_1__.deleteAllCompleted)(_todoList_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  (0,_crud_js__WEBPACK_IMPORTED_MODULE_1__.populateList)();\n});\n\n// Populate UI\n(0,_crud_js__WEBPACK_IMPORTED_MODULE_1__.populateList)();\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDo)\n/* harmony export */ });\nclass ToDo {\n  static list = [];\n\n  constructor(description, complete = false) {\n    this.description = description;\n    this.complete = complete;\n    this.index = ToDo.list.length;\n    ToDo.list.push(this);\n    this.getList = () => ToDo.list;\n  }\n\n  update() {\n    if (this.complete) {\n      this.complete = false;\n    } else {\n      this.complete = true;\n    }\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/todoList.js?");

/***/ }),

/***/ "./src/delete-btn.png":
/*!****************************!*\
  !*** ./src/delete-btn.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"icon/delete-btn.png\";\n\n//# sourceURL=webpack://to-do-list/./src/delete-btn.png?");

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
=======
(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(81),i=n.n(r),o=n(645),a=n.n(o)()(i());a.push([t.id,"body {\r\n  margin: 0;\r\n  height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  font-family: sans-serif;\r\n  font-size: 15px;\r\n  font-weight: normal;\r\n}\r\n\r\nul {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\n.main-panel {\r\n  min-width: 40%;\r\n  max-width: 75%;\r\n  margin: auto;\r\n  display: grid;\r\n  box-shadow: 0 0 10px #888;\r\n}\r\n\r\n.list-title {\r\n  font-size: inherit;\r\n  margin: 0;\r\n}\r\n\r\n.add-input {\r\n  border: 1px solid black;\r\n  font-style: italic;\r\n}\r\n\r\n.add-input,\r\n.clear-btn {\r\n  border: none;\r\n}\r\n\r\n.list-title,\r\n.add-input,\r\n.item-container,\r\n.clear-btn {\r\n  padding: 15px;\r\n  border-bottom: 1px solid #b5b5b5;\r\n  display: flex;\r\n}\r\n\r\n.clear-btn {\r\n  color: gray;\r\n  font-size: 14px;\r\n  border: none;\r\n}\r\n\r\n.complete {\r\n  text-decoration: line-through;\r\n  color: grey;\r\n}\r\n\r\n.text-area {\r\n  display: none;\r\n}\r\n\r\n.item-container {\r\n  justify-content: space-between;\r\n  gap: 5px;\r\n}\r\n\r\n.item-container span,\r\n.item-container textarea {\r\n  width: 200px;\r\n  flex-grow: 1;\r\n}\r\n\r\n.cancel-btn {\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n\r\n.edit-item {\r\n  display: inline;\r\n  font: inherit;\r\n  padding: 0;\r\n  height: 18px;\r\n  border: none;\r\n  outline: none;\r\n  resize: none;\r\n  cursor: text;\r\n  overflow: auto;\r\n}\r\n",""]);const s=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,i,o){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);r&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},a=[],s=0;s<t.length;s++){var c=t[s],l=r.base?c[0]+r.base:c[0],d=o[l]||0,p="".concat(l," ").concat(d);o[l]=d+1;var u=n(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=i(f,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var o=r(t=t||[],i=i||{});return function(t){t=t||[];for(var a=0;a<o.length;a++){var s=n(o[a]);e[s].references--}for(var c=r(t,i),l=0;l<o.length;l++){var d=n(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),i=n.n(r),o=n(569),a=n.n(o),s=n(565),c=n.n(s),l=n(216),d=n.n(l),p=n(589),u=n.n(p),f=n(426),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;class h{static list=[];constructor(t,e=!1){this.description=t,this.complete=e,this.index=h.list.length,h.list.push(this),this.getList=()=>h.list}update(){this.complete?this.complete=!1:this.complete=!0}}const g=n.p+"icon/delete-btn.png";function v(){const t=document.getElementById("todo-list");t.innerHTML="",h.list.forEach((e=>{const n=document.createElement("li");n.setAttribute("id",e.index),n.classList="item-container",n.innerHTML=`\n    <input class="checkbox" type="checkbox">\n    <span>${e.description}</span>\n    <textarea class="text-area" maxlength="30">${e.description}</textarea>\n    <img class="cancel-btn" src="${g}">\n    `,t.appendChild(n);const r=n.querySelector("input"),i=n.querySelector("span"),o=n.querySelector("textarea"),a=n.querySelector("img");r.addEventListener("change",(()=>{const t=parseInt(n.id,10);h.list[t].update(),i.classList.toggle("complete"),o.classList.toggle("complete"),localStorage.setItem("todoList",JSON.stringify(h.list))})),i.addEventListener("click",(()=>{i.style.display="none",o.classList.toggle("edit-item")})),o.addEventListener("keydown",(t=>{i.innerHTML=o.value,function(t,e){h.list[t].description=e,localStorage.setItem("todoList",JSON.stringify(h.list))}(parseInt(n.id,10),i.innerHTML),"Enter"===t.code&&(i.style.display="block",o.classList.toggle("edit-item"))})),a.addEventListener("click",(()=>{var t;t=parseInt(n.id,10),h.list=h.list.filter((e=>e!==h.list[t])),h.list.forEach(((t,e)=>{t.index=e})),localStorage.setItem("todoList",JSON.stringify(h.list)),v()})),e.complete&&(r.checked=!0,i.classList="complete")}))}const y=JSON.parse(localStorage.getItem("todoList"));y&&y.forEach((t=>new h(t.description,t.complete)));const b=document.getElementById("add-input");b.addEventListener("keydown",(t=>{"Enter"===t.key&&(function(t){const e=new h(t);localStorage.setItem("todoList",JSON.stringify(e.getList()))}(b.value),b.value="",v())})),document.getElementById("clear-btn").addEventListener("click",(()=>{var t;(t=h).list=t.list.filter((t=>!1===t.complete)),t.list.forEach(((t,e)=>{t.index=e})),localStorage.setItem("todoList",JSON.stringify(t.list)),v()})),v()})()})();
>>>>>>> df1d86a0b37a08ace9f22bdb24401e0d6c0605d3
