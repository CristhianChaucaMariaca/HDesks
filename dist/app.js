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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dev/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dev/Sass/style.scss":
/*!*****************************!*\
  !*** ./dev/Sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYvU2Fzcy9zdHlsZS5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZGV2L1Nhc3Mvc3R5bGUuc2Nzcz9jNDI5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./dev/Sass/style.scss\n");

/***/ }),

/***/ "./dev/js/index.js":
/*!*************************!*\
  !*** ./dev/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Sass/style.scss */ \"./dev/Sass/style.scss\");\n/* harmony import */ var _Sass_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Sass_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../assets/'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n// Importamos la libreria Jquery\r\n// import $ from 'jquery'; \r\n\r\n //Importamos los archivos de SASS\r\n\r\n\r\n// $(function () {\r\n//     // alert(\"Estamos listos\");\r\n//    $(window).scroll(function () { \r\n//        var winheight= $(this.window).scrollTop();\r\n//        console.log(winheight);\r\n//        var offset1 = $('#rotate-1').offset();\r\n//        var offset2 = $('#rotate-2').offset();\r\n//        var offset3 = $('#rotate-3').offset();\r\n//        var offset4 = $('#rotate-4').offset();\r\n//        var top1 = offset1.top;\r\n//        var top2 = offset2.top;\r\n//        var top3 = offset3.top;\r\n//        var top4 = offset4.top;\r\n//        if (winheight >= top1-600) {\r\n//            $('#rotate-1').css('animation-play-state', 'running');\r\n//        }\r\n//        if (winheight >= top2-600) {\r\n//         $('#rotate-2').css('animation-play-state', 'running');\r\n//        }\r\n//        if (winheight >= top3-600) {\r\n//         $('#rotate-3').css('animation-play-state', 'running');\r\n//        }\r\n//        if (winheight >= top4-600) {\r\n//         $('#rotate-4').css('animation-play-state', 'running');\r\n//        }\r\n\r\n//        var offsetPeople = $('.peoples').offset();\r\n//        var topPeople = offsetPeople.top;\r\n\r\n//        if (winheight >= topPeople-600) {\r\n//            $('.rotar-y').css('animation-play-state', 'running');\r\n//            $('.rotar-y-r').css('animation-play-state', 'running');\r\n//        }\r\n//    });\r\n// });\r\n\r\n\r\n// Trabajaremos solo con JavaScript\r\n\r\n// Se carga todo el documento HTML\r\nwindow.addEventListener('load',inicio);\r\n\r\nfunction inicio() {\r\n    document.getElementById('ccchm').addEventListener('mouseover', zoomImage)\r\n    document.getElementById('ccchm').addEventListener('mouseout', zoomImageno)\r\n}\r\nfunction zoomImage(){\r\n    document.getElementById('ccchm-image').style.transform=\"scale(1.3)\"\r\n    document.getElementById('ccchm-image').style.transition=\".3s\"\r\n}\r\nfunction zoomImageno(){\r\n    document.getElementById('ccchm-image').style.transform=\"scale(1)\"\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvaW5kZXguanM/YzQxMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRhbW9zIGxhIGxpYnJlcmlhIEpxdWVyeVxyXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknOyBcclxuXHJcbmltcG9ydCBcIi4uL1Nhc3Mvc3R5bGUuc2Nzc1wiOyAvL0ltcG9ydGFtb3MgbG9zIGFyY2hpdm9zIGRlIFNBU1NcclxuaW1wb3J0IGltZyBmcm9tICcuLi9hc3NldHMvJztcclxuXHJcbi8vICQoZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgLy8gYWxlcnQoXCJFc3RhbW9zIGxpc3Rvc1wiKTtcclxuLy8gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7IFxyXG4vLyAgICAgICAgdmFyIHdpbmhlaWdodD0gJCh0aGlzLndpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbi8vICAgICAgICBjb25zb2xlLmxvZyh3aW5oZWlnaHQpO1xyXG4vLyAgICAgICAgdmFyIG9mZnNldDEgPSAkKCcjcm90YXRlLTEnKS5vZmZzZXQoKTtcclxuLy8gICAgICAgIHZhciBvZmZzZXQyID0gJCgnI3JvdGF0ZS0yJykub2Zmc2V0KCk7XHJcbi8vICAgICAgICB2YXIgb2Zmc2V0MyA9ICQoJyNyb3RhdGUtMycpLm9mZnNldCgpO1xyXG4vLyAgICAgICAgdmFyIG9mZnNldDQgPSAkKCcjcm90YXRlLTQnKS5vZmZzZXQoKTtcclxuLy8gICAgICAgIHZhciB0b3AxID0gb2Zmc2V0MS50b3A7XHJcbi8vICAgICAgICB2YXIgdG9wMiA9IG9mZnNldDIudG9wO1xyXG4vLyAgICAgICAgdmFyIHRvcDMgPSBvZmZzZXQzLnRvcDtcclxuLy8gICAgICAgIHZhciB0b3A0ID0gb2Zmc2V0NC50b3A7XHJcbi8vICAgICAgICBpZiAod2luaGVpZ2h0ID49IHRvcDEtNjAwKSB7XHJcbi8vICAgICAgICAgICAgJCgnI3JvdGF0ZS0xJykuY3NzKCdhbmltYXRpb24tcGxheS1zdGF0ZScsICdydW5uaW5nJyk7XHJcbi8vICAgICAgICB9XHJcbi8vICAgICAgICBpZiAod2luaGVpZ2h0ID49IHRvcDItNjAwKSB7XHJcbi8vICAgICAgICAgJCgnI3JvdGF0ZS0yJykuY3NzKCdhbmltYXRpb24tcGxheS1zdGF0ZScsICdydW5uaW5nJyk7XHJcbi8vICAgICAgICB9XHJcbi8vICAgICAgICBpZiAod2luaGVpZ2h0ID49IHRvcDMtNjAwKSB7XHJcbi8vICAgICAgICAgJCgnI3JvdGF0ZS0zJykuY3NzKCdhbmltYXRpb24tcGxheS1zdGF0ZScsICdydW5uaW5nJyk7XHJcbi8vICAgICAgICB9XHJcbi8vICAgICAgICBpZiAod2luaGVpZ2h0ID49IHRvcDQtNjAwKSB7XHJcbi8vICAgICAgICAgJCgnI3JvdGF0ZS00JykuY3NzKCdhbmltYXRpb24tcGxheS1zdGF0ZScsICdydW5uaW5nJyk7XHJcbi8vICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgdmFyIG9mZnNldFBlb3BsZSA9ICQoJy5wZW9wbGVzJykub2Zmc2V0KCk7XHJcbi8vICAgICAgICB2YXIgdG9wUGVvcGxlID0gb2Zmc2V0UGVvcGxlLnRvcDtcclxuXHJcbi8vICAgICAgICBpZiAod2luaGVpZ2h0ID49IHRvcFBlb3BsZS02MDApIHtcclxuLy8gICAgICAgICAgICAkKCcucm90YXIteScpLmNzcygnYW5pbWF0aW9uLXBsYXktc3RhdGUnLCAncnVubmluZycpO1xyXG4vLyAgICAgICAgICAgICQoJy5yb3Rhci15LXInKS5jc3MoJ2FuaW1hdGlvbi1wbGF5LXN0YXRlJywgJ3J1bm5pbmcnKTtcclxuLy8gICAgICAgIH1cclxuLy8gICAgfSk7XHJcbi8vIH0pO1xyXG5cclxuXHJcbi8vIFRyYWJhamFyZW1vcyBzb2xvIGNvbiBKYXZhU2NyaXB0XHJcblxyXG4vLyBTZSBjYXJnYSB0b2RvIGVsIGRvY3VtZW50byBIVE1MXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJyxpbmljaW8pO1xyXG5cclxuZnVuY3Rpb24gaW5pY2lvKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NjY2htJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgem9vbUltYWdlKVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NjY2htJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCB6b29tSW1hZ2VubylcclxufVxyXG5mdW5jdGlvbiB6b29tSW1hZ2UoKXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjY2NobS1pbWFnZScpLnN0eWxlLnRyYW5zZm9ybT1cInNjYWxlKDEuMylcIlxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NjY2htLWltYWdlJykuc3R5bGUudHJhbnNpdGlvbj1cIi4zc1wiXHJcbn1cclxuZnVuY3Rpb24gem9vbUltYWdlbm8oKXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjY2NobS1pbWFnZScpLnN0eWxlLnRyYW5zZm9ybT1cInNjYWxlKDEpXCJcclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dev/js/index.js\n");

/***/ })

/******/ });