module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/getRooftops.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/getRooftops.js":
/*!**********************************!*\
  !*** ./pages/api/getRooftops.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_airtable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/airtable */ \"./pages/api/utils/airtable.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  let rooftops = [];\n\n  try {\n    const rooftops = await _utils_airtable__WEBPACK_IMPORTED_MODULE_0__[\"rooftopTableBase\"].select().firstPage();\n    const minifiedRecords = Object(_utils_airtable__WEBPACK_IMPORTED_MODULE_0__[\"minifyRecords\"])(rooftops);\n    res.statusCode = 200;\n    res.json(minifiedRecords);\n  } catch (err) {\n    res.statusCode = 500;\n    res.json({\n      msg: err\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZ2V0Um9vZnRvcHMuanM/ZWQxOCJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJyb29mdG9wcyIsInJvb2Z0b3BUYWJsZUJhc2UiLCJzZWxlY3QiLCJmaXJzdFBhZ2UiLCJtaW5pZmllZFJlY29yZHMiLCJtaW5pZnlSZWNvcmRzIiwic3RhdHVzQ29kZSIsImpzb24iLCJlcnIiLCJtc2ciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVlLHNFQUFPQSxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDakMsTUFBSUMsUUFBUSxHQUFHLEVBQWY7O0FBRUEsTUFBSTtBQUNGLFVBQU1BLFFBQVEsR0FBRyxNQUFNQyxnRUFBZ0IsQ0FBQ0MsTUFBakIsR0FBMEJDLFNBQTFCLEVBQXZCO0FBQ0EsVUFBTUMsZUFBZSxHQUFHQyxxRUFBYSxDQUFDTCxRQUFELENBQXJDO0FBQ0FELE9BQUcsQ0FBQ08sVUFBSixHQUFpQixHQUFqQjtBQUNBUCxPQUFHLENBQUNRLElBQUosQ0FBU0gsZUFBVDtBQUNELEdBTEQsQ0FLRSxPQUFPSSxHQUFQLEVBQVk7QUFDWlQsT0FBRyxDQUFDTyxVQUFKLEdBQWlCLEdBQWpCO0FBQ0FQLE9BQUcsQ0FBQ1EsSUFBSixDQUFTO0FBQUVFLFNBQUcsRUFBRUQ7QUFBUCxLQUFUO0FBQ0Q7QUFDRixDQVpEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2dldFJvb2Z0b3BzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcm9vZnRvcFRhYmxlQmFzZSwgbWluaWZ5UmVjb3JkcyB9IGZyb20gJy4vdXRpbHMvYWlydGFibGUnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgbGV0IHJvb2Z0b3BzID0gW107XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByb29mdG9wcyA9IGF3YWl0IHJvb2Z0b3BUYWJsZUJhc2Uuc2VsZWN0KCkuZmlyc3RQYWdlKCk7XG4gICAgY29uc3QgbWluaWZpZWRSZWNvcmRzID0gbWluaWZ5UmVjb3Jkcyhyb29mdG9wcyk7XG4gICAgcmVzLnN0YXR1c0NvZGUgPSAyMDA7XG4gICAgcmVzLmpzb24obWluaWZpZWRSZWNvcmRzKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmVzLnN0YXR1c0NvZGUgPSA1MDA7XG4gICAgcmVzLmpzb24oeyBtc2c6IGVyciB9KTtcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/getRooftops.js\n");

/***/ }),

/***/ "./pages/api/utils/airtable.js":
/*!*************************************!*\
  !*** ./pages/api/utils/airtable.js ***!
  \*************************************/
/*! exports provided: carsTableBase, minifyRecords, getMinifiedRecord, brandsTableBase, dealersTableBase, rooftopTableBase, leadTableBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"carsTableBase\", function() { return carsTableBase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"minifyRecords\", function() { return minifyRecords; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMinifiedRecord\", function() { return getMinifiedRecord; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"brandsTableBase\", function() { return brandsTableBase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dealersTableBase\", function() { return dealersTableBase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rooftopTableBase\", function() { return rooftopTableBase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"leadTableBase\", function() { return leadTableBase; });\nconst Airtable = __webpack_require__(/*! airtable */ \"airtable\");\n\nconst base = new Airtable({\n  apiKey: process.env.API_KEY\n}).base(process.env.BASE_ID);\nconst rooftopTableBase = base('Rooftops');\nconst carsTableBase = base('Cars');\nconst brandsTableBase = base('Car Brands');\nconst dealersTableBase = base('Dealership Groups');\nconst leadTableBase = base('Leads');\n\nconst getMinifiedRecord = record => {\n  return {\n    id: record.id,\n    fields: record.fields\n  };\n};\n\nconst minifyRecords = records => {\n  return records.map(record => getMinifiedRecord(record));\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXRpbHMvYWlydGFibGUuanM/ODFiNyJdLCJuYW1lcyI6WyJBaXJ0YWJsZSIsInJlcXVpcmUiLCJiYXNlIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIkFQSV9LRVkiLCJCQVNFX0lEIiwicm9vZnRvcFRhYmxlQmFzZSIsImNhcnNUYWJsZUJhc2UiLCJicmFuZHNUYWJsZUJhc2UiLCJkZWFsZXJzVGFibGVCYXNlIiwibGVhZFRhYmxlQmFzZSIsImdldE1pbmlmaWVkUmVjb3JkIiwicmVjb3JkIiwiaWQiLCJmaWVsZHMiLCJtaW5pZnlSZWNvcmRzIiwicmVjb3JkcyIsIm1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU1BLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQywwQkFBRCxDQUF4Qjs7QUFFQSxNQUFNQyxJQUFJLEdBQUcsSUFBSUYsUUFBSixDQUFhO0FBQUVHLFFBQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDO0FBQXRCLENBQWIsRUFBOENKLElBQTlDLENBQ1hFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxPQURELENBQWI7QUFJQSxNQUFNQyxnQkFBZ0IsR0FBR04sSUFBSSxDQUFDLFVBQUQsQ0FBN0I7QUFDQSxNQUFNTyxhQUFhLEdBQUdQLElBQUksQ0FBQyxNQUFELENBQTFCO0FBQ0EsTUFBTVEsZUFBZSxHQUFHUixJQUFJLENBQUMsWUFBRCxDQUE1QjtBQUNBLE1BQU1TLGdCQUFnQixHQUFHVCxJQUFJLENBQUMsbUJBQUQsQ0FBN0I7QUFDQSxNQUFNVSxhQUFhLEdBQUdWLElBQUksQ0FBQyxPQUFELENBQTFCOztBQUVBLE1BQU1XLGlCQUFpQixHQUFJQyxNQUFELElBQVk7QUFDcEMsU0FBTztBQUNMQyxNQUFFLEVBQUVELE1BQU0sQ0FBQ0MsRUFETjtBQUVMQyxVQUFNLEVBQUVGLE1BQU0sQ0FBQ0U7QUFGVixHQUFQO0FBSUQsQ0FMRDs7QUFPQSxNQUFNQyxhQUFhLEdBQUlDLE9BQUQsSUFBYTtBQUNqQyxTQUFPQSxPQUFPLENBQUNDLEdBQVIsQ0FBYUwsTUFBRCxJQUFZRCxpQkFBaUIsQ0FBQ0MsTUFBRCxDQUF6QyxDQUFQO0FBQ0QsQ0FGRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS91dGlscy9haXJ0YWJsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcblxuY29uc3QgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7IGFwaUtleTogcHJvY2Vzcy5lbnYuQVBJX0tFWSB9KS5iYXNlKFxuICBwcm9jZXNzLmVudi5CQVNFX0lEXG4pO1xuXG5jb25zdCByb29mdG9wVGFibGVCYXNlID0gYmFzZSgnUm9vZnRvcHMnKTtcbmNvbnN0IGNhcnNUYWJsZUJhc2UgPSBiYXNlKCdDYXJzJyk7XG5jb25zdCBicmFuZHNUYWJsZUJhc2UgPSBiYXNlKCdDYXIgQnJhbmRzJyk7XG5jb25zdCBkZWFsZXJzVGFibGVCYXNlID0gYmFzZSgnRGVhbGVyc2hpcCBHcm91cHMnKTtcbmNvbnN0IGxlYWRUYWJsZUJhc2UgPSBiYXNlKCdMZWFkcycpO1xuXG5jb25zdCBnZXRNaW5pZmllZFJlY29yZCA9IChyZWNvcmQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBpZDogcmVjb3JkLmlkLFxuICAgIGZpZWxkczogcmVjb3JkLmZpZWxkcyxcbiAgfTtcbn07XG5cbmNvbnN0IG1pbmlmeVJlY29yZHMgPSAocmVjb3JkcykgPT4ge1xuICByZXR1cm4gcmVjb3Jkcy5tYXAoKHJlY29yZCkgPT4gZ2V0TWluaWZpZWRSZWNvcmQocmVjb3JkKSk7XG59O1xuXG5leHBvcnQge1xuICBjYXJzVGFibGVCYXNlLFxuICBtaW5pZnlSZWNvcmRzLFxuICBnZXRNaW5pZmllZFJlY29yZCxcbiAgYnJhbmRzVGFibGVCYXNlLFxuICBkZWFsZXJzVGFibGVCYXNlLFxuICByb29mdG9wVGFibGVCYXNlLFxuICBsZWFkVGFibGVCYXNlLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/utils/airtable.js\n");

/***/ }),

/***/ "airtable":
/*!***************************!*\
  !*** external "airtable" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"airtable\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhaXJ0YWJsZVwiPzQxYzgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYWlydGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhaXJ0YWJsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///airtable\n");

/***/ })

/******/ });