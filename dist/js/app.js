/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function($) {\r\n  $(document).ready(function() {\r\n    const btn = $(\".show-modal-btn\"),\r\n      clBtn = $(\".close-btn\"),\r\n      wrapperName = $(\".simple-modal-wrapper\");\r\n\r\n    btn.on(\"click\", function(me) {\r\n      wrapperName.addClass(\"show-modal\");\r\n      me.preventDefault();\r\n    });\r\n\r\n    clBtn.on(\"click\", function(me) {\r\n      wrapperName.removeClass(\"show-modal\");\r\n\r\n      me.preventDefault();\r\n    });\r\n\r\n    $(window).on(\"click\", function(ev) {\r\n      if (ev.target == document.querySelector(\".simple-modal-wrapper\")) {\r\n        wrapperName.removeClass(\"show-modal\");\r\n      }\r\n    });\r\n  });\r\n})(jQuery);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcz85MGU5Il0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKSB7XHJcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBidG4gPSAkKFwiLnNob3ctbW9kYWwtYnRuXCIpLFxyXG4gICAgICBjbEJ0biA9ICQoXCIuY2xvc2UtYnRuXCIpLFxyXG4gICAgICB3cmFwcGVyTmFtZSA9ICQoXCIuc2ltcGxlLW1vZGFsLXdyYXBwZXJcIik7XHJcblxyXG4gICAgYnRuLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24obWUpIHtcclxuICAgICAgd3JhcHBlck5hbWUuYWRkQ2xhc3MoXCJzaG93LW1vZGFsXCIpO1xyXG4gICAgICBtZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2xCdG4ub24oXCJjbGlja1wiLCBmdW5jdGlvbihtZSkge1xyXG4gICAgICB3cmFwcGVyTmFtZS5yZW1vdmVDbGFzcyhcInNob3ctbW9kYWxcIik7XHJcblxyXG4gICAgICBtZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCh3aW5kb3cpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXYpIHtcclxuICAgICAgaWYgKGV2LnRhcmdldCA9PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpbXBsZS1tb2RhbC13cmFwcGVyXCIpKSB7XHJcbiAgICAgICAgd3JhcHBlck5hbWUucmVtb3ZlQ2xhc3MoXCJzaG93LW1vZGFsXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufSkoalF1ZXJ5KTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi .//src/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/xampp/htdocs/testingGround/playWithCustomModal//src/js/app.js */"./src/js/app.js");


/***/ })

/******/ });