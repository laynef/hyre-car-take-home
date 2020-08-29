exports.id = "main";
exports.modules = {

/***/ "./src/server/middleware/render.tsx":
/*!******************************************!*\
  !*** ./src/server/middleware/render.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var escape_string_regexp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! escape-string-regexp */ \"escape-string-regexp\");\n/* harmony import */ var escape_string_regexp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(escape_string_regexp__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst renderMiddleware = () => (req, res) => {\n  let html = req.html || '';\n  const htmlReplacements = {\n    HTML_CONTENT: ''\n  };\n  Object.keys(htmlReplacements).forEach(key => {\n    const value = htmlReplacements[key];\n    html = html.replace(new RegExp('__' + escape_string_regexp__WEBPACK_IMPORTED_MODULE_0___default()(key) + '__', 'g'), value);\n  });\n  res.send(html);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderMiddleware);\n\n//# sourceURL=webpack:///./src/server/middleware/render.tsx?");

/***/ }),

/***/ "escape-string-regexp":
/*!***************************************!*\
  !*** external "escape-string-regexp" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"escape-string-regexp\");\n\n//# sourceURL=webpack:///external_%22escape-string-regexp%22?");

/***/ })

};