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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n\n\n\nlet server;\nlet host = \"0.0.0.0\"; // This IP range means 'EVERYWHERE', which will respond to LocalHost and FQDNs.\nlet port = 3000;\nlet index;\nlet tutorial_1;\nlet tutorial_2;\nlet css;\nlet js;\nlet png;\n\nfs__WEBPACK_IMPORTED_MODULE_1__.readFile(\"./App/index.css\", (err, data) => {\n  if (err) {\n    throw err;\n  }\n  css = data;\n});\n\nfs__WEBPACK_IMPORTED_MODULE_1__.readFile(\"./App/index.js\", (err, data) => {\n  if (err) {\n    throw err;\n  }\n  js = data;\n});\n\nfs__WEBPACK_IMPORTED_MODULE_1__.readFile(\"./App/img/cv_tutorial_1.png\", (err, data) => {\n  if (err) {\n    throw err;\n  }\n  png = data;\n});\n\nfs__WEBPACK_IMPORTED_MODULE_1__.readFile(\"./App/index.html\", (err, data) => {\n  if (err) {\n    throw err;\n  }\n  index = data;\n});\n\nfs__WEBPACK_IMPORTED_MODULE_1__.readFile(\"./App/tutorial_1.html\", (err, data) => {\n  if (err) {\n    throw err;\n  }\n  tutorial_1 = data;\n});\n\nfs__WEBPACK_IMPORTED_MODULE_1__.readFile(\"./App/tutorial_2.html\", (err, data) => {\n  if (err) {\n    throw err;\n  }\n  tutorial_2 = data;\n});\n\nconst requestListener = (req, res) => {\n  const url = req.url;\n  const statusCode = 200;\n  res.statusCode = statusCode;\n\n  if (url === \"/\") {\n    res.write(index);\n    return res.end();\n  } else if (url === \"/tutorial_1\") {\n    res.write(tutorial_1);\n    return res.end();\n  } else if (url === \"/tutorial_2\") {\n    res.write(tutorial_2);\n    return res.end();\n  }\n\n  if (url.indexOf(\".css\") != -1) {\n    res.writeHead(200, { \"Content-Type\": \"text/css\" });\n    res.write(css);\n    return res.end();\n  }\n\n  if (req.url.indexOf(\".js\") != -1) {\n    res.writeHead(200, { \"Content-Type\": \"text/javascript\" });\n    res.write(js);\n    return res.end();\n  }\n\n  if (req.url.indexOf(\".png\") != -1) {\n    res.writeHead(200, { \"Content-Type\": \"image/png\" });\n    res.write(png);\n    return res.end();\n  }\n};\n\nserver = http__WEBPACK_IMPORTED_MODULE_0__.createServer(requestListener);\n\nserver.listen(port, host, () => {\n  console.log(`Server is running and listening on http://${host}:${port}`);\n});\n\n\n//# sourceURL=webpack://node-tutorials/./src/server.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.js");
/******/ 	
/******/ })()
;