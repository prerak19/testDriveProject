module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./contexts/CarDataContext.js":
/*!************************************!*\
  !*** ./contexts/CarDataContext.js ***!
  \************************************/
/*! exports provided: CarDataContext, CarDataUpdateContext, useCarData, useUpdateCarData, CarDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CarDataContext\", function() { return CarDataContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CarDataUpdateContext\", function() { return CarDataUpdateContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useCarData\", function() { return useCarData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useUpdateCarData\", function() { return useUpdateCarData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CarDataProvider\", function() { return CarDataProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/encora/Documents/projects/testDrive/tdn/contexts/CarDataContext.js\";\n\nconst CarDataContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();\nconst CarDataUpdateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();\nfunction useCarData() {\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(CarDataContext);\n}\nfunction useUpdateCarData(data) {\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(CarDataUpdateContext);\n}\nfunction CarDataProvider({\n  children\n}) {\n  const {\n    0: carData,\n    1: setCarData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({});\n\n  function updateData(data) {\n    setCarData(data);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CarDataContext.Provider, {\n    value: carData,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CarDataUpdateContext.Provider, {\n      value: updateData,\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9DYXJEYXRhQ29udGV4dC5qcz82YjI1Il0sIm5hbWVzIjpbIkNhckRhdGFDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiQ2FyRGF0YVVwZGF0ZUNvbnRleHQiLCJ1c2VDYXJEYXRhIiwidXNlQ29udGV4dCIsInVzZVVwZGF0ZUNhckRhdGEiLCJkYXRhIiwiQ2FyRGF0YVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjYXJEYXRhIiwic2V0Q2FyRGF0YSIsInVzZVN0YXRlIiwidXBkYXRlRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxjQUFjLGdCQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLEVBQXZCO0FBQ0EsTUFBTUMsb0JBQW9CLGdCQUFHRiw0Q0FBSyxDQUFDQyxhQUFOLEVBQTdCO0FBRUEsU0FBU0UsVUFBVCxHQUFzQjtBQUMzQixTQUFPQyx3REFBVSxDQUFDTCxjQUFELENBQWpCO0FBQ0Q7QUFDTSxTQUFTTSxnQkFBVCxDQUEwQkMsSUFBMUIsRUFBZ0M7QUFDckMsU0FBT0Ysd0RBQVUsQ0FBQ0Ysb0JBQUQsQ0FBakI7QUFDRDtBQUVNLFNBQVNLLGVBQVQsQ0FBeUI7QUFBRUM7QUFBRixDQUF6QixFQUF1QztBQUM1QyxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLHNEQUFRLENBQUMsRUFBRCxDQUF0Qzs7QUFFQSxXQUFTQyxVQUFULENBQW9CTixJQUFwQixFQUEwQjtBQUN4QkksY0FBVSxDQUFDSixJQUFELENBQVY7QUFDRDs7QUFFRCxzQkFDRSxxRUFBQyxjQUFELENBQWdCLFFBQWhCO0FBQXlCLFNBQUssRUFBRUcsT0FBaEM7QUFBQSwyQkFDRSxxRUFBQyxvQkFBRCxDQUFzQixRQUF0QjtBQUErQixXQUFLLEVBQUVHLFVBQXRDO0FBQUEsZ0JBQ0dKO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EIiwiZmlsZSI6Ii4vY29udGV4dHMvQ2FyRGF0YUNvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBDYXJEYXRhQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcbmV4cG9ydCBjb25zdCBDYXJEYXRhVXBkYXRlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNhckRhdGEoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KENhckRhdGFDb250ZXh0KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VVcGRhdGVDYXJEYXRhKGRhdGEpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoQ2FyRGF0YVVwZGF0ZUNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2FyRGF0YVByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbY2FyRGF0YSwgc2V0Q2FyRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlRGF0YShkYXRhKSB7XG4gICAgc2V0Q2FyRGF0YShkYXRhKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENhckRhdGFDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjYXJEYXRhfT5cbiAgICAgIDxDYXJEYXRhVXBkYXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dXBkYXRlRGF0YX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQ2FyRGF0YVVwZGF0ZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgPC9DYXJEYXRhQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/CarDataContext.js\n");

/***/ }),

/***/ "./contexts/DateTimeDataContext.js":
/*!*****************************************!*\
  !*** ./contexts/DateTimeDataContext.js ***!
  \*****************************************/
/*! exports provided: DateTimeContext, DateTimeUpdatedContext, useDateTimeData, useUpdatedDateTimeData, DateTimeDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DateTimeContext\", function() { return DateTimeContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DateTimeUpdatedContext\", function() { return DateTimeUpdatedContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useDateTimeData\", function() { return useDateTimeData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useUpdatedDateTimeData\", function() { return useUpdatedDateTimeData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DateTimeDataProvider\", function() { return DateTimeDataProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/encora/Documents/projects/testDrive/tdn/contexts/DateTimeDataContext.js\";\n\nconst DateTimeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();\nconst DateTimeUpdatedContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();\nfunction useDateTimeData() {\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(DateTimeContext);\n}\nfunction useUpdatedDateTimeData() {\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(DateTimeUpdatedContext);\n}\nfunction DateTimeDataProvider({\n  children\n}) {\n  const {\n    0: DateTime,\n    1: setDateTime\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n\n  function updateData(data) {\n    setDateTime(data);\n  } //   setTimeout(() => {\n  //       setUserData(\"raja\")\n  //   }, 10000);\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DateTimeContext.Provider, {\n    value: DateTime,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DateTimeUpdatedContext.Provider, {\n      value: updateData,\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9EYXRlVGltZURhdGFDb250ZXh0LmpzP2I2MTMiXSwibmFtZXMiOlsiRGF0ZVRpbWVDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiRGF0ZVRpbWVVcGRhdGVkQ29udGV4dCIsInVzZURhdGVUaW1lRGF0YSIsInVzZUNvbnRleHQiLCJ1c2VVcGRhdGVkRGF0ZVRpbWVEYXRhIiwiRGF0ZVRpbWVEYXRhUHJvdmlkZXIiLCJjaGlsZHJlbiIsIkRhdGVUaW1lIiwic2V0RGF0ZVRpbWUiLCJ1c2VTdGF0ZSIsInVwZGF0ZURhdGEiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLE1BQU1BLGVBQWUsZ0JBQUdDLDRDQUFLLENBQUNDLGFBQU4sRUFBeEI7QUFDQSxNQUFNQyxzQkFBc0IsZ0JBQUdGLDRDQUFLLENBQUNDLGFBQU4sRUFBL0I7QUFFQSxTQUFTRSxlQUFULEdBQTJCO0FBQ2hDLFNBQU9DLHdEQUFVLENBQUNMLGVBQUQsQ0FBakI7QUFDRDtBQUNNLFNBQVNNLHNCQUFULEdBQWtDO0FBQ3ZDLFNBQU9ELHdEQUFVLENBQUNGLHNCQUFELENBQWpCO0FBQ0Q7QUFFTSxTQUFTSSxvQkFBVCxDQUE4QjtBQUFFQztBQUFGLENBQTlCLEVBQTRDO0FBQ2pELFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBQyxJQUFELENBQXhDOztBQUVBLFdBQVNDLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCO0FBQ3hCSCxlQUFXLENBQUNHLElBQUQsQ0FBWDtBQUNELEdBTGdELENBTWpEO0FBQ0E7QUFDQTs7O0FBRUEsc0JBQ0UscUVBQUMsZUFBRCxDQUFpQixRQUFqQjtBQUEwQixTQUFLLEVBQUVKLFFBQWpDO0FBQUEsMkJBQ0UscUVBQUMsc0JBQUQsQ0FBd0IsUUFBeEI7QUFBaUMsV0FBSyxFQUFFRyxVQUF4QztBQUFBLGdCQUNHSjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRCIsImZpbGUiOiIuL2NvbnRleHRzL0RhdGVUaW1lRGF0YUNvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBEYXRlVGltZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5leHBvcnQgY29uc3QgRGF0ZVRpbWVVcGRhdGVkQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZURhdGVUaW1lRGF0YSgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoRGF0ZVRpbWVDb250ZXh0KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VVcGRhdGVkRGF0ZVRpbWVEYXRhKCkge1xuICByZXR1cm4gdXNlQ29udGV4dChEYXRlVGltZVVwZGF0ZWRDb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERhdGVUaW1lRGF0YVByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbRGF0ZVRpbWUsIHNldERhdGVUaW1lXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZURhdGEoZGF0YSkge1xuICAgIHNldERhdGVUaW1lKGRhdGEpO1xuICB9XG4gIC8vICAgc2V0VGltZW91dCgoKSA9PiB7XG4gIC8vICAgICAgIHNldFVzZXJEYXRhKFwicmFqYVwiKVxuICAvLyAgIH0sIDEwMDAwKTtcblxuICByZXR1cm4gKFxuICAgIDxEYXRlVGltZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e0RhdGVUaW1lfT5cbiAgICAgIDxEYXRlVGltZVVwZGF0ZWRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt1cGRhdGVEYXRhfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9EYXRlVGltZVVwZGF0ZWRDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvRGF0ZVRpbWVDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/DateTimeDataContext.js\n");

/***/ }),

/***/ "./contexts/UserDataContext.js":
/*!*************************************!*\
  !*** ./contexts/UserDataContext.js ***!
  \*************************************/
/*! exports provided: UserDataContext, UserDataUpdateContext, useUserData, useUpdateUserData, UserDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserDataContext\", function() { return UserDataContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserDataUpdateContext\", function() { return UserDataUpdateContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useUserData\", function() { return useUserData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useUpdateUserData\", function() { return useUpdateUserData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserDataProvider\", function() { return UserDataProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/encora/Documents/projects/testDrive/tdn/contexts/UserDataContext.js\";\n\nconst UserDataContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();\nconst UserDataUpdateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();\nfunction useUserData() {\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(UserDataContext);\n}\nfunction useUpdateUserData() {\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(UserDataUpdateContext);\n}\nfunction UserDataProvider({\n  children\n}) {\n  const {\n    0: userData,\n    1: setUserData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n\n  function updateData(data) {\n    setUserData(data);\n  } //   setTimeout(() => {\n  //       setUserData(\"raja\")\n  //   }, 10000);\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(UserDataContext.Provider, {\n    value: userData,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(UserDataUpdateContext.Provider, {\n      value: updateData,\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9Vc2VyRGF0YUNvbnRleHQuanM/OWFlZiJdLCJuYW1lcyI6WyJVc2VyRGF0YUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJVc2VyRGF0YVVwZGF0ZUNvbnRleHQiLCJ1c2VVc2VyRGF0YSIsInVzZUNvbnRleHQiLCJ1c2VVcGRhdGVVc2VyRGF0YSIsIlVzZXJEYXRhUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJ1c2VTdGF0ZSIsInVwZGF0ZURhdGEiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLE1BQU1BLGVBQWUsZ0JBQUdDLDRDQUFLLENBQUNDLGFBQU4sRUFBeEI7QUFDQSxNQUFNQyxxQkFBcUIsZ0JBQUdGLDRDQUFLLENBQUNDLGFBQU4sRUFBOUI7QUFFQSxTQUFTRSxXQUFULEdBQXVCO0FBQzVCLFNBQU9DLHdEQUFVLENBQUNMLGVBQUQsQ0FBakI7QUFDRDtBQUNNLFNBQVNNLGlCQUFULEdBQTZCO0FBQ2xDLFNBQU9ELHdEQUFVLENBQUNGLHFCQUFELENBQWpCO0FBQ0Q7QUFFTSxTQUFTSSxnQkFBVCxDQUEwQjtBQUFFQztBQUFGLENBQTFCLEVBQXdDO0FBQzdDLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBQyxJQUFELENBQXhDOztBQUVBLFdBQVNDLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCO0FBQ3hCSCxlQUFXLENBQUNHLElBQUQsQ0FBWDtBQUNELEdBTDRDLENBTTdDO0FBQ0E7QUFDQTs7O0FBRUEsc0JBQ0UscUVBQUMsZUFBRCxDQUFpQixRQUFqQjtBQUEwQixTQUFLLEVBQUVKLFFBQWpDO0FBQUEsMkJBQ0UscUVBQUMscUJBQUQsQ0FBdUIsUUFBdkI7QUFBZ0MsV0FBSyxFQUFFRyxVQUF2QztBQUFBLGdCQUNHSjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRCIsImZpbGUiOiIuL2NvbnRleHRzL1VzZXJEYXRhQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IFVzZXJEYXRhQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcbmV4cG9ydCBjb25zdCBVc2VyRGF0YVVwZGF0ZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VVc2VyRGF0YSgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoVXNlckRhdGFDb250ZXh0KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VVcGRhdGVVc2VyRGF0YSgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoVXNlckRhdGFVcGRhdGVDb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJEYXRhUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFt1c2VyRGF0YSwgc2V0VXNlckRhdGFdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlRGF0YShkYXRhKSB7XG4gICAgc2V0VXNlckRhdGEoZGF0YSk7XG4gIH1cbiAgLy8gICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgLy8gICAgICAgc2V0VXNlckRhdGEoXCJyYWphXCIpXG4gIC8vICAgfSwgMTAwMDApO1xuXG4gIHJldHVybiAoXG4gICAgPFVzZXJEYXRhQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dXNlckRhdGF9PlxuICAgICAgPFVzZXJEYXRhVXBkYXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dXBkYXRlRGF0YX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvVXNlckRhdGFVcGRhdGVDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvVXNlckRhdGFDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/UserDataContext.js\n");

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/antd/dist/antd.css\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/bootstrap/dist/css/bootstrap.min.css\n");

/***/ }),

/***/ "./node_modules/react-calendar/dist/Calendar.css":
/*!*******************************************************!*\
  !*** ./node_modules/react-calendar/dist/Calendar.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9yZWFjdC1jYWxlbmRhci9kaXN0L0NhbGVuZGFyLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/react-calendar/dist/Calendar.css\n");

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9zbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/slick-carousel/slick/slick-theme.css\n");

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9zbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/slick-carousel/slick/slick.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../styles/responsive.css */ \"./styles/responsive.css\");\n/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_responsive_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_fonts_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/fonts.css */ \"./public/fonts.css\");\n/* harmony import */ var _public_fonts_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_fonts_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-calendar/dist/Calendar.css */ \"./node_modules/react-calendar/dist/Calendar.css\");\n/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _contexts_UserDataContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../contexts/UserDataContext */ \"./contexts/UserDataContext.js\");\n/* harmony import */ var _contexts_CarDataContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../contexts/CarDataContext */ \"./contexts/CarDataContext.js\");\n/* harmony import */ var _contexts_DateTimeDataContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../contexts/DateTimeDataContext */ \"./contexts/DateTimeDataContext.js\");\n\nvar _jsxFileName = \"/home/encora/Documents/projects/testDrive/tdn/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/** @format */\n\n\n\n\n // import 'font-awesome-icons'\n// @import '~antd/dist/antd.css';\n// import \"~slick-carousel/slick/slick.css\";\n// import \"~slick-carousel/slick/slick-theme.css\";\n\n\n // import './../styles/responsive.css';\n\n\n\n\n // import { TableDataProvider } from './../contexts/TableDataContext';\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_contexts_UserDataContext__WEBPACK_IMPORTED_MODULE_9__[\"UserDataProvider\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_contexts_CarDataContext__WEBPACK_IMPORTED_MODULE_10__[\"CarDataProvider\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_contexts_DateTimeDataContext__WEBPACK_IMPORTED_MODULE_11__[\"DateTimeDataProvider\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBTUE7Q0FFQTs7QUFDQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkMsc0JBQ0UscUVBQUMsMEVBQUQ7QUFBQSwyQkFDRSxxRUFBQyx5RUFBRDtBQUFBLDZCQUNFLHFFQUFDLG1GQUFEO0FBQUEsK0JBRUUscUVBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXRDs7QUFDY0Ysb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0IFwiLi8uLi9zdHlsZXMvcmVzcG9uc2l2ZS5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFwiLi4vcHVibGljL2ZvbnRzLmNzc1wiO1xuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcbi8vIGltcG9ydCAnZm9udC1hd2Vzb21lLWljb25zJ1xuLy8gQGltcG9ydCAnfmFudGQvZGlzdC9hbnRkLmNzcyc7XG4vLyBpbXBvcnQgXCJ+c2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XG4vLyBpbXBvcnQgXCJ+c2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3NcIjtcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiO1xuLy8gaW1wb3J0ICcuLy4uL3N0eWxlcy9yZXNwb25zaXZlLmNzcyc7XG5pbXBvcnQgXCJyZWFjdC1jYWxlbmRhci9kaXN0L0NhbGVuZGFyLmNzc1wiO1xuaW1wb3J0IHtcbiAgdXNlVXNlckRhdGEsXG4gIHVzZVVwZGF0ZVVzZXJEYXRhLFxuICBVc2VyRGF0YVByb3ZpZGVyLFxuICBVc2VyRGF0YUNvbnRleHQsXG59IGZyb20gXCIuLi9jb250ZXh0cy9Vc2VyRGF0YUNvbnRleHRcIjtcbmltcG9ydCB7IENhckRhdGFQcm92aWRlciB9IGZyb20gXCIuLy4uL2NvbnRleHRzL0NhckRhdGFDb250ZXh0XCI7XG5pbXBvcnQgeyBEYXRlVGltZURhdGFQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0cy9EYXRlVGltZURhdGFDb250ZXh0XCI7XG4vLyBpbXBvcnQgeyBUYWJsZURhdGFQcm92aWRlciB9IGZyb20gJy4vLi4vY29udGV4dHMvVGFibGVEYXRhQ29udGV4dCc7XG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8VXNlckRhdGFQcm92aWRlcj5cbiAgICAgIDxDYXJEYXRhUHJvdmlkZXI+XG4gICAgICAgIDxEYXRlVGltZURhdGFQcm92aWRlcj5cbiAgICAgICAgICB7LyogPFRhYmxlRGF0YVByb3ZpZGVyPiAqL31cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgey8qIDwvVGFibGVEYXRhUHJvdmlkZXI+ICovfVxuICAgICAgICA8L0RhdGVUaW1lRGF0YVByb3ZpZGVyPlxuICAgICAgPC9DYXJEYXRhUHJvdmlkZXI+XG4gICAgPC9Vc2VyRGF0YVByb3ZpZGVyPlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./public/fonts.css":
/*!**************************!*\
  !*** ./public/fonts.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3B1YmxpYy9mb250cy5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/fonts.css\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/globals.css\n");

/***/ }),

/***/ "./styles/responsive.css":
/*!*******************************!*\
  !*** ./styles/responsive.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9yZXNwb25zaXZlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/responsive.css\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });