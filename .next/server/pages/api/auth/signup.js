"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/signup";
exports.ids = ["pages/api/auth/signup"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fsignup&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fauth%2Fsignup.js&middlewareConfigBase64=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fsignup&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fauth%2Fsignup.js&middlewareConfigBase64=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_auth_signup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/api/auth/signup.js */ \"(api)/./pages/api/auth/signup.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_signup_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_signup_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/auth/signup\",\n        pathname: \"/api/auth/signup\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_auth_signup_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmF1dGglMkZzaWdudXAmcHJlZmVycmVkUmVnaW9uPSZhYnNvbHV0ZVBhZ2VQYXRoPS4lMkZwYWdlcyUyRmFwaSUyRmF1dGglMkZzaWdudXAuanMmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ0w7QUFDMUQ7QUFDdUQ7QUFDdkQ7QUFDQSxpRUFBZSx3RUFBSyxDQUFDLHNEQUFRLFlBQVksRUFBQztBQUMxQztBQUNPLGVBQWUsd0VBQUssQ0FBQyxzREFBUTtBQUNwQztBQUNPLHdCQUF3QixnSEFBbUI7QUFDbEQ7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWTtBQUNaLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoLz84NjkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9wYWdlcy9hcGkvYXV0aC9zaWdudXAuanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL3NpZ251cFwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvc2lnbnVwXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogXCJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwiXCJcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMtYXBpLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fsignup&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fauth%2Fsignup.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./Utils/auth.js":
/*!***********************!*\
  !*** ./Utils/auth.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generatToken: () => (/* binding */ generatToken),\n/* harmony export */   hashPassword: () => (/* binding */ hashPassword)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst hashPassword = async (password)=>{\n    const hashedPassword = await (0,bcrypt__WEBPACK_IMPORTED_MODULE_0__.hash)(password, 12);\n    return hashedPassword;\n};\nconst generatToken = (data)=>{\n    const token = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__.sign)({\n        ...data\n    }, process.env.privateKey, {\n        expiresIn: \"24h\"\n    });\n    return token;\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9VdGlscy9hdXRoLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4QjtBQUNNO0FBRXBDLE1BQU1FLGVBQWUsT0FBT0M7SUFDMUIsTUFBTUMsaUJBQWlCLE1BQU1KLDRDQUFJQSxDQUFDRyxVQUFVO0lBQzVDLE9BQU9DO0FBQ1Q7QUFFQSxNQUFNQyxlQUFlLENBQUNDO0lBQ3BCLE1BQU1DLFFBQVFOLGtEQUFJQSxDQUFDO1FBQUUsR0FBR0ssSUFBSTtJQUFDLEdBQUdFLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVSxFQUFFO1FBQUVDLFdBQVc7SUFBTTtJQUMzRSxPQUFPSjtBQUNUO0FBRXNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXV0aC8uL1V0aWxzL2F1dGguanM/MmFkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYXNoIH0gZnJvbSBcImJjcnlwdFwiO1xuaW1wb3J0IHsgc2lnbiB9IGZyb20gXCJqc29ud2VidG9rZW5cIjtcblxuY29uc3QgaGFzaFBhc3N3b3JkID0gYXN5bmMgKHBhc3N3b3JkKSA9PiB7XG4gIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgaGFzaChwYXNzd29yZCwgMTIpO1xuICByZXR1cm4gaGFzaGVkUGFzc3dvcmQ7XG59O1xuXG5jb25zdCBnZW5lcmF0VG9rZW4gPSAoZGF0YSkgPT4ge1xuICBjb25zdCB0b2tlbiA9IHNpZ24oeyAuLi5kYXRhIH0sIHByb2Nlc3MuZW52LnByaXZhdGVLZXksIHsgZXhwaXJlc0luOiBcIjI0aFwiIH0pO1xuICByZXR1cm4gdG9rZW47XG59O1xuXG5leHBvcnQgeyBoYXNoUGFzc3dvcmQsIGdlbmVyYXRUb2tlbiB9O1xuIl0sIm5hbWVzIjpbImhhc2giLCJzaWduIiwiaGFzaFBhc3N3b3JkIiwicGFzc3dvcmQiLCJoYXNoZWRQYXNzd29yZCIsImdlbmVyYXRUb2tlbiIsImRhdGEiLCJ0b2tlbiIsInByb2Nlc3MiLCJlbnYiLCJwcml2YXRlS2V5IiwiZXhwaXJlc0luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./Utils/auth.js\n");

/***/ }),

/***/ "(api)/./configes/db.js":
/*!************************!*\
  !*** ./configes/db.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst { default: mongoose } = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst connectToDB = async ()=>{\n    try {\n        if (mongoose.connections[0].readyState) {\n            return true;\n        } else {\n            await mongoose.connect(\"mongodb://localhost:27017/next-auth\");\n            console.log(\"Connect To DB Successfully :))\");\n        }\n    } catch (err) {\n        console.log(\"DB Connection Has Error =>\", err);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectToDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWdlcy9kYi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxFQUFFQSxTQUFTQyxRQUFRLEVBQUUsR0FBR0MsbUJBQU9BLENBQUMsMEJBQVU7QUFFaEQsTUFBTUMsY0FBYztJQUNsQixJQUFJO1FBQ0YsSUFBSUYsU0FBU0csV0FBVyxDQUFDLEVBQUUsQ0FBQ0MsVUFBVSxFQUFFO1lBQ3RDLE9BQU87UUFDVCxPQUFPO1lBQ0wsTUFBTUosU0FBU0ssT0FBTyxDQUFDO1lBQ3ZCQyxRQUFRQyxHQUFHLENBQUM7UUFDZDtJQUNGLEVBQUUsT0FBT0MsS0FBSztRQUNaRixRQUFRQyxHQUFHLENBQUMsOEJBQThCQztJQUM1QztBQUNGO0FBRUEsaUVBQWVOLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoLy4vY29uZmlnZXMvZGIuanM/ZTZkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGRlZmF1bHQ6IG1vbmdvb3NlIH0gPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XG5cbmNvbnN0IGNvbm5lY3RUb0RCID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGlmIChtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChcIm1vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvbmV4dC1hdXRoXCIpO1xuICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0IFRvIERCIFN1Y2Nlc3NmdWxseSA6KSlcIik7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhcIkRCIENvbm5lY3Rpb24gSGFzIEVycm9yID0+XCIsIGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RUb0RCOyJdLCJuYW1lcyI6WyJkZWZhdWx0IiwibW9uZ29vc2UiLCJyZXF1aXJlIiwiY29ubmVjdFRvREIiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25uZWN0IiwiY29uc29sZSIsImxvZyIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./configes/db.js\n");

/***/ }),

/***/ "(api)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst schema = mongoose.Schema({\n    firstname: {\n        type: String,\n        required: true\n    },\n    lastname: {\n        type: String,\n        required: true\n    },\n    Username: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    role: {\n        type: String,\n        required: true\n    }\n});\nconst model = mongoose.models.User || mongoose.model(\"User\", schema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (model);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsV0FBV0MsbUJBQU9BLENBQUMsMEJBQVU7QUFFbkMsTUFBTUMsU0FBU0YsU0FBU0csTUFBTSxDQUFDO0lBRTNCQyxXQUFVO1FBQUNDLE1BQUtDO1FBQVFDLFVBQVM7SUFBSztJQUN0Q0MsVUFBUztRQUFDSCxNQUFLQztRQUFRQyxVQUFTO0lBQUs7SUFDckNFLFVBQVM7UUFBQ0osTUFBS0M7UUFBUUMsVUFBUztJQUFLO0lBQ3JDRyxPQUFNO1FBQUNMLE1BQUtDO1FBQVFDLFVBQVM7SUFBSztJQUNsQ0ksVUFBUztRQUFDTixNQUFLQztRQUFRQyxVQUFTO0lBQUs7SUFDckNLLE1BQUs7UUFBQ1AsTUFBS0M7UUFBUUMsVUFBUztJQUFLO0FBR3JDO0FBRUEsTUFBTU0sUUFBUWIsU0FBU2MsTUFBTSxDQUFDQyxJQUFJLElBQUlmLFNBQVNhLEtBQUssQ0FBQyxRQUFRWDtBQUM3RCxpRUFBZVcsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGgvLi9tb2RlbHMvVXNlci5qcz83MzY3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xuXG5jb25zdCBzY2hlbWEgPSBtb25nb29zZS5TY2hlbWEoe1xuXG4gICAgZmlyc3RuYW1lOnt0eXBlOlN0cmluZywgcmVxdWlyZWQ6dHJ1ZSB9LFxuICAgIGxhc3RuYW1lOnt0eXBlOlN0cmluZywgcmVxdWlyZWQ6dHJ1ZSB9LFxuICAgIFVzZXJuYW1lOnt0eXBlOlN0cmluZywgcmVxdWlyZWQ6dHJ1ZSB9LFxuICAgIGVtYWlsOnt0eXBlOlN0cmluZywgcmVxdWlyZWQ6dHJ1ZSB9LFxuICAgIHBhc3N3b3JkOnt0eXBlOlN0cmluZywgcmVxdWlyZWQ6dHJ1ZSB9LFxuICAgIHJvbGU6e3R5cGU6U3RyaW5nLCByZXF1aXJlZDp0cnVlIH0sXG5cblxufSk7XG5cbmNvbnN0IG1vZGVsID0gbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoXCJVc2VyXCIsIHNjaGVtYSk7XG5leHBvcnQgZGVmYXVsdCBtb2RlbDtcblxuXG5cbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJzY2hlbWEiLCJTY2hlbWEiLCJmaXJzdG5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJsYXN0bmFtZSIsIlVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInJvbGUiLCJtb2RlbCIsIm1vZGVscyIsIlVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/User.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/signup.js":
/*!**********************************!*\
  !*** ./pages/api/auth/signup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/User */ \"(api)/./models/User.js\");\n/* harmony import */ var _configes_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/configes/db */ \"(api)/./configes/db.js\");\n/* harmony import */ var _Utils_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Utils/auth */ \"(api)/./Utils/auth.js\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst handler = async (req, res)=>{\n    if (req.method !== \"POST\") {\n        return false;\n    }\n    try {\n        (0,_configes_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const { firstname, lastname, Username, email, password } = req.body;\n        // ========================> validation\n        if (!firstname.trim() || !lastname.trim() || !Username.trim() || !email.trim() || !password.trim()) {\n            return res.status(422).json({\n                message: \"Data is not valid\"\n            });\n        }\n        // ================>  make isUserExist\n        const isUserExist = await _models_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n            $or: [\n                {\n                    Username\n                },\n                {\n                    email\n                }\n            ]\n        });\n        if (isUserExist) {\n            return res.status(422).json({\n                message: \"firstname or email already exist !!\"\n            });\n        }\n        // =======================> make hash password\n        const hashedPasword = await (0,_Utils_auth__WEBPACK_IMPORTED_MODULE_2__.hashPassword)(password);\n        const token = (0,_Utils_auth__WEBPACK_IMPORTED_MODULE_2__.generatToken)({\n            email\n        });\n        const users = await _models_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({});\n        // ===========================>  make usermodel\n        await _models_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n            firstname,\n            lastname,\n            Username,\n            email,\n            password: hashedPasword,\n            role: users.length > 0 ? \"USER\" : \"ADMIN\"\n        });\n        return res.setHeader(\"Set-Cookie\", (0,cookie__WEBPACK_IMPORTED_MODULE_3__.serialize)(\"token\", token, {\n            httpOnly: true,\n            maxAge: 60 * 60 * 24\n        })).status(201).json({\n            message: \"user create with successfully\"\n        });\n    } catch (err) {\n        return res.status(500).json({\n            message: \"Unkown Internal server !!\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9zaWdudXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXNDO0FBQ0U7QUFDa0I7QUFDdkI7QUFFbkMsTUFBTUssVUFBVSxPQUFPQyxLQUFLQztJQUMxQixJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixPQUFPO0lBQ1Q7SUFFQSxJQUFJO1FBQ0ZQLHdEQUFXQTtRQUNYLE1BQU0sRUFBRVEsU0FBUyxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBR1AsSUFBSVEsSUFBSTtRQUNuRSx1Q0FBdUM7UUFDdkMsSUFDRSxDQUFDTCxVQUFVTSxJQUFJLE1BQ2YsQ0FBQ0wsU0FBU0ssSUFBSSxNQUNkLENBQUNKLFNBQVNJLElBQUksTUFDZCxDQUFDSCxNQUFNRyxJQUFJLE1BQ1gsQ0FBQ0YsU0FBU0UsSUFBSSxJQUNkO1lBQ0EsT0FBT1IsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUFvQjtRQUM3RDtRQUNBLHNDQUFzQztRQUN0QyxNQUFNQyxjQUFjLE1BQU1uQiw0REFBaUIsQ0FBQztZQUMxQ3FCLEtBQUs7Z0JBQUM7b0JBQUVWO2dCQUFTO2dCQUFHO29CQUFFQztnQkFBTTthQUFFO1FBQ2hDO1FBQ0EsSUFBSU8sYUFBYTtZQUNmLE9BQU9aLElBQ0pTLE1BQU0sQ0FBQyxLQUNQQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBc0M7UUFDM0Q7UUFDQSw4Q0FBOEM7UUFFOUMsTUFBTUksZ0JBQWdCLE1BQU1wQix5REFBWUEsQ0FBQ1c7UUFDdkMsTUFBTVUsUUFBUXBCLHlEQUFZQSxDQUFDO1lBQUVTO1FBQU07UUFDbkMsTUFBTVksUUFBTSxNQUFNeEIseURBQWMsQ0FBQyxDQUFDO1FBRXBDLCtDQUErQztRQUMvQyxNQUFNQSwyREFBZ0IsQ0FBQztZQUNyQlM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUMsVUFBVVM7WUFDVkssTUFBTUgsTUFBTUksTUFBTSxHQUFFLElBQUksU0FBTztRQUNqQztRQUNBLE9BQU9yQixJQUNKc0IsU0FBUyxDQUNSLGNBQ0F6QixpREFBU0EsQ0FBQyxTQUFTbUIsT0FBTztZQUN4Qk8sVUFBVTtZQUNWQyxRQUFRLEtBQUssS0FBSztRQUNwQixJQUVEZixNQUFNLENBQUMsS0FDUEMsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBZ0M7SUFDckQsRUFBRSxPQUFPYyxLQUFLO1FBQ1osT0FBT3pCLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUE0QjtJQUNyRTtBQUNGO0FBRUEsaUVBQWViLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoLy4vcGFnZXMvYXBpL2F1dGgvc2lnbnVwLmpzP2EyYTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXJNb2RlbCBmcm9tIFwiQC9tb2RlbHMvVXNlclwiO1xuaW1wb3J0IGNvbm5lY3RUb0RCIGZyb20gXCJAL2NvbmZpZ2VzL2RiXCI7XG5pbXBvcnQgeyBoYXNoUGFzc3dvcmQsIGdlbmVyYXRUb2tlbiB9IGZyb20gXCJAL1V0aWxzL2F1dGhcIjtcbmltcG9ydCB7IHNlcmlhbGl6ZSB9IGZyb20gXCJjb29raWVcIjtcblxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gXCJQT1NUXCIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbm5lY3RUb0RCKCk7XG4gICAgY29uc3QgeyBmaXJzdG5hbWUsIGxhc3RuYW1lLCBVc2VybmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT0+IHZhbGlkYXRpb25cbiAgICBpZiAoXG4gICAgICAhZmlyc3RuYW1lLnRyaW0oKSB8fFxuICAgICAgIWxhc3RuYW1lLnRyaW0oKSB8fFxuICAgICAgIVVzZXJuYW1lLnRyaW0oKSB8fFxuICAgICAgIWVtYWlsLnRyaW0oKSB8fFxuICAgICAgIXBhc3N3b3JkLnRyaW0oKVxuICAgICkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDIyKS5qc29uKHsgbWVzc2FnZTogXCJEYXRhIGlzIG5vdCB2YWxpZFwiIH0pO1xuICAgIH1cbiAgICAvLyA9PT09PT09PT09PT09PT09PiAgbWFrZSBpc1VzZXJFeGlzdFxuICAgIGNvbnN0IGlzVXNlckV4aXN0ID0gYXdhaXQgVXNlck1vZGVsLmZpbmRPbmUoe1xuICAgICAgJG9yOiBbeyBVc2VybmFtZSB9LCB7IGVtYWlsIH1dLFxuICAgIH0pO1xuICAgIGlmIChpc1VzZXJFeGlzdCkge1xuICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAuc3RhdHVzKDQyMilcbiAgICAgICAgLmpzb24oeyBtZXNzYWdlOiBcImZpcnN0bmFtZSBvciBlbWFpbCBhbHJlYWR5IGV4aXN0ICEhXCIgfSk7XG4gICAgfVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PiBtYWtlIGhhc2ggcGFzc3dvcmRcblxuICAgIGNvbnN0IGhhc2hlZFBhc3dvcmQgPSBhd2FpdCBoYXNoUGFzc3dvcmQocGFzc3dvcmQpO1xuICAgICAgY29uc3QgdG9rZW4gPSBnZW5lcmF0VG9rZW4oeyBlbWFpbCB9KTtcbiAgICAgIGNvbnN0IHVzZXJzPWF3YWl0IFVzZXJNb2RlbC5maW5kKHt9KVxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PiAgbWFrZSB1c2VybW9kZWxcbiAgICBhd2FpdCBVc2VyTW9kZWwuY3JlYXRlKHtcbiAgICAgIGZpcnN0bmFtZSxcbiAgICAgIGxhc3RuYW1lLFxuICAgICAgVXNlcm5hbWUsXG4gICAgICBlbWFpbCxcbiAgICAgIHBhc3N3b3JkOiBoYXNoZWRQYXN3b3JkLFxuICAgICAgcm9sZTogdXNlcnMubGVuZ3RoID4wID8gXCJVU0VSXCI6XCJBRE1JTlwiXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc1xuICAgICAgLnNldEhlYWRlcihcbiAgICAgICAgXCJTZXQtQ29va2llXCIsXG4gICAgICAgIHNlcmlhbGl6ZShcInRva2VuXCIsIHRva2VuLCB7XG4gICAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQsIC8vIDEgd2Vla1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnN0YXR1cygyMDEpXG4gICAgICAuanNvbih7IG1lc3NhZ2U6IFwidXNlciBjcmVhdGUgd2l0aCBzdWNjZXNzZnVsbHlcIiB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogXCJVbmtvd24gSW50ZXJuYWwgc2VydmVyICEhXCIgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwibmFtZXMiOlsiVXNlck1vZGVsIiwiY29ubmVjdFRvREIiLCJoYXNoUGFzc3dvcmQiLCJnZW5lcmF0VG9rZW4iLCJzZXJpYWxpemUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJVc2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJib2R5IiwidHJpbSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiaXNVc2VyRXhpc3QiLCJmaW5kT25lIiwiJG9yIiwiaGFzaGVkUGFzd29yZCIsInRva2VuIiwidXNlcnMiLCJmaW5kIiwiY3JlYXRlIiwicm9sZSIsImxlbmd0aCIsInNldEhlYWRlciIsImh0dHBPbmx5IiwibWF4QWdlIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/signup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fsignup&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fauth%2Fsignup.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();