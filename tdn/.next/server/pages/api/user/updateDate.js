module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/user/updateDate.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/user/updateDate.js":
/*!**************************************!*\
  !*** ./pages/api/user/updateDate.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_airtable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/airtable */ \"./pages/api/utils/airtable.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    UserID = 'recSubqlo3rs94JZs',\n    Date = '2021-01-30T04:09:00.000Z'\n  } = req.body;\n\n  try {\n    const data = await _utils_airtable__WEBPACK_IMPORTED_MODULE_0__[\"leadTableBase\"].update([{\n      id: UserID,\n      fields: {\n        Date\n      }\n    }]);\n    res.statusCode = 200;\n    res.json(data);\n  } catch (err) {\n    res.statusCode = 500;\n    res.json({\n      msg: err\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlci91cGRhdGVEYXRlLmpzPzU3OGQiXSwibmFtZXMiOlsicmVxIiwicmVzIiwiVXNlcklEIiwiRGF0ZSIsImJvZHkiLCJkYXRhIiwibGVhZFRhYmxlQmFzZSIsInVwZGF0ZSIsImlkIiwiZmllbGRzIiwic3RhdHVzQ29kZSIsImpzb24iLCJlcnIiLCJtc2ciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVlLHNFQUFPQSxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDakMsUUFBTTtBQUNKQyxVQUFNLEdBQUcsbUJBREw7QUFFSkMsUUFBSSxHQUFHO0FBRkgsTUFHRkgsR0FBRyxDQUFDSSxJQUhSOztBQUlBLE1BQUk7QUFDRixVQUFNQyxJQUFJLEdBQUcsTUFBTUMsNkRBQWEsQ0FBQ0MsTUFBZCxDQUFxQixDQUN0QztBQUNFQyxRQUFFLEVBQUVOLE1BRE47QUFFRU8sWUFBTSxFQUFFO0FBQ05OO0FBRE07QUFGVixLQURzQyxDQUFyQixDQUFuQjtBQVFBRixPQUFHLENBQUNTLFVBQUosR0FBaUIsR0FBakI7QUFDQVQsT0FBRyxDQUFDVSxJQUFKLENBQVNOLElBQVQ7QUFDRCxHQVhELENBV0UsT0FBT08sR0FBUCxFQUFZO0FBQ1pYLE9BQUcsQ0FBQ1MsVUFBSixHQUFpQixHQUFqQjtBQUNBVCxPQUFHLENBQUNVLElBQUosQ0FBUztBQUFFRSxTQUFHLEVBQUVEO0FBQVAsS0FBVDtBQUNEO0FBQ0YsQ0FwQkQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXNlci91cGRhdGVEYXRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGVhZFRhYmxlQmFzZSB9IGZyb20gJy4uL3V0aWxzL2FpcnRhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBVc2VySUQgPSAncmVjU3VicWxvM3JzOTRKWnMnLFxuICAgIERhdGUgPSAnMjAyMS0wMS0zMFQwNDowOTowMC4wMDBaJyxcbiAgfSA9IHJlcS5ib2R5O1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBsZWFkVGFibGVCYXNlLnVwZGF0ZShbXG4gICAgICB7XG4gICAgICAgIGlkOiBVc2VySUQsXG4gICAgICAgIGZpZWxkczoge1xuICAgICAgICAgIERhdGUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0pO1xuICAgIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xuICAgIHJlcy5qc29uKGRhdGEpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXMuc3RhdHVzQ29kZSA9IDUwMDtcbiAgICByZXMuanNvbih7IG1zZzogZXJyIH0pO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/user/updateDate.js\n");

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