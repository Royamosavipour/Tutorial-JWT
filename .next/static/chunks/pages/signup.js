/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/signup"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fs2300299%2FDownloads%2FNext168-jwt-sections%2Fpages%2Fsignup%2Findex.js&page=%2Fsignup!":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fs2300299%2FDownloads%2FNext168-jwt-sections%2Fpages%2Fsignup%2Findex.js&page=%2Fsignup! ***!
  \******************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/signup\",\n      function () {\n        return __webpack_require__(/*! ./pages/signup/index.js */ \"./pages/signup/index.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/signup\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRnMyMzAwMjk5JTJGRG93bmxvYWRzJTJGTmV4dDE2OC1qd3Qtc2VjdGlvbnMlMkZwYWdlcyUyRnNpZ251cCUyRmluZGV4LmpzJnBhZ2U9JTJGc2lnbnVwISIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLHdEQUF5QjtBQUNoRDtBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/YWEzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL3NpZ251cFwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vcGFnZXMvc2lnbnVwL2luZGV4LmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9zaWdudXBcIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fs2300299%2FDownloads%2FNext168-jwt-sections%2Fpages%2Fsignup%2Findex.js&page=%2Fsignup!\n"));

/***/ }),

/***/ "./pages/signup/index.js":
/*!*******************************!*\
  !*** ./pages/signup/index.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Index() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [firstname, setFirstname] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [lastname, setLastname] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [Username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const signup = async (event)=>{\n        event.preventDefault();\n        const user = {\n            firstname,\n            lastname,\n            Username,\n            email,\n            password\n        };\n        const res = await fetch(\"/api/auth/signup\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(user)\n        });\n        if (res.status === 201) {\n            setFirstname(\"\");\n            setLastname(\"\");\n            setUsername(\"\");\n            setEmail(\"\");\n            setPassword(\"\");\n            alert(\"Registered Successfully :))\");\n            router.replace(\"/dashboard\");\n        } else if (res.status === 422) {\n            alert(\"firstname or email already exist !!\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                align: \"center\",\n                children: \"SignUp Form\"\n            }, void 0, false, {\n                fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                role: \"form\",\n                method: \"post\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"inputBox\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: firstname,\n                                onChange: (event)=>setFirstname(event.target.value),\n                                autoComplete: \"off\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Firstname\"\n                            }, void 0, false, {\n                                fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"inputBox\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: lastname,\n                                onChange: (event)=>setLastname(event.target.value),\n                                autoComplete: \"off\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Lastname\"\n                            }, void 0, false, {\n                                fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"inputBox\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: Username,\n                                onChange: (event)=>setUsername(event.target.value),\n                                autoComplete: \"off\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Username\"\n                            }, void 0, false, {\n                                fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"inputBox\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                value: email,\n                                onChange: (event)=>setEmail(event.target.value),\n                                autoComplete: \"off\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"inputBox\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                value: password,\n                                onChange: (event)=>setPassword(event.target.value),\n                                autoComplete: \"off\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Password\"\n                            }, void 0, false, {\n                                fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        className: \"register-btn\",\n                        value: \"Sign Up\",\n                        onClick: signup\n                    }, void 0, false, {\n                        fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(Index, \"2SWP8QiRUAM4DTIu5+BOXH8NLtI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtuQjtHQW5HU1o7O1FBQ1FILGtEQUFTQTs7O0tBRGpCRztBQXFHVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaWdudXAvaW5kZXguanM/MjExMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgW2ZpcnN0bmFtZSwgc2V0Rmlyc3RuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbGFzdG5hbWUsIHNldExhc3RuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbVXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IHNpZ251cCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdXNlciA9IHsgZmlyc3RuYW1lLCBsYXN0bmFtZSwgVXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCB9O1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL2F1dGgvc2lnbnVwXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpLFxuICAgIH0pO1xuXG4gICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgc2V0Rmlyc3RuYW1lKFwiXCIpO1xuICAgICAgc2V0TGFzdG5hbWUoXCJcIik7XG4gICAgICBzZXRVc2VybmFtZShcIlwiKTtcbiAgICAgIHNldEVtYWlsKFwiXCIpO1xuICAgICAgc2V0UGFzc3dvcmQoXCJcIik7XG5cbiAgICAgIGFsZXJ0KFwiUmVnaXN0ZXJlZCBTdWNjZXNzZnVsbHkgOikpXCIpO1xuICAgICAgcm91dGVyLnJlcGxhY2UoXCIvZGFzaGJvYXJkXCIpO1xuICAgIH0gZWxzZSBpZiAocmVzLnN0YXR1cyA9PT0gNDIyKSB7XG4gICAgICBhbGVydChcImZpcnN0bmFtZSBvciBlbWFpbCBhbHJlYWR5IGV4aXN0ICEhXCIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICA8aDEgYWxpZ249XCJjZW50ZXJcIj5TaWduVXAgRm9ybTwvaDE+XG4gICAgICA8Zm9ybSByb2xlPVwiZm9ybVwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dEJveFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e2ZpcnN0bmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEZpcnN0bmFtZShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWw+Rmlyc3RuYW1lPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRCb3hcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtsYXN0bmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldExhc3RuYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbD5MYXN0bmFtZTwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0Qm94XCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17VXNlcm5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRVc2VybmFtZShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWw+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dEJveFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0Qm94XCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0UGFzc3dvcmQoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwicmVnaXN0ZXItYnRuXCJcbiAgICAgICAgICB2YWx1ZT1cIlNpZ24gVXBcIlxuICAgICAgICAgIG9uQ2xpY2s9e3NpZ251cH1cbiAgICAgICAgLz5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkluZGV4Iiwicm91dGVyIiwiZmlyc3RuYW1lIiwic2V0Rmlyc3RuYW1lIiwibGFzdG5hbWUiLCJzZXRMYXN0bmFtZSIsIlVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInNpZ251cCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ1c2VyIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJhbGVydCIsInJlcGxhY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImFsaWduIiwiZm9ybSIsInJvbGUiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYXV0b0NvbXBsZXRlIiwicmVxdWlyZWQiLCJsYWJlbCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/signup/index.js\n"));

/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/client/router */ \"./node_modules/next/dist/client/router.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9yb3V0ZXIuanMiLCJtYXBwaW5ncyI6IkFBQUEsNkdBQWdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L3JvdXRlci5qcz8xYmI2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9yb3V0ZXInKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/router.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fs2300299%2FDownloads%2FNext168-jwt-sections%2Fpages%2Fsignup%2Findex.js&page=%2Fsignup!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);