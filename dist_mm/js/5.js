(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./src/http/apis/Dashboard.js":
/*!************************************!*\
  !*** ./src/http/apis/Dashboard.js ***!
  \************************************/
/*! exports provided: ApiGetDashboard, ApiDownloadReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiGetDashboard\", function() { return ApiGetDashboard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiDownloadReport\", function() { return ApiDownloadReport; });\n/* harmony import */ var _https_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../https.js */ \"./src/http/https.js\");\n\r\n\r\nconst ApiGetDashboard = {\r\n    get: (courseid) => {\r\n        return Object(_https_js__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(`/dash/crsstatus/${courseid}`)\r\n    },\r\n};\r\n\r\nconst ApiDownloadReport = {\r\n    post:(courseid,obj) => {\r\n        console.log(`/dash/requestreport/${courseid}`,obj);\r\n        return Object(_https_js__WEBPACK_IMPORTED_MODULE_0__[\"post\"])(`/dash/requestreport/${courseid}`,obj)\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/http/apis/Dashboard.js?");

/***/ })

}]);