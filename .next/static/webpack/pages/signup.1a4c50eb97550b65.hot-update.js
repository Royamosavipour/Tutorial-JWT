"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./pages/signup/index.js":
/*!*******************************!*\
  !*** ./pages/signup/index.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Index() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [firstname, setFirstname] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [lastname, setLastname] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const signup = async (event)=>{\n        event.preventDefault();\n        const user = {\n            firstname,\n            lastname,\n            username,\n            email,\n            password\n        };\n        const res = await fetch(\"/api/auth/signup\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(user)\n        }).then((res)=>{\n            if (res.ok) {\n                return res.json();\n            }\n            return res.text();\n        });\n    };\n    // if (res.status === 201) {\n    //   setFirstname(\"\");\n    //   setLastname(\"\");\n    //   setUsername(\"\");\n    //   setEmail(\"\");\n    //   setPassword(\"\");\n    //   alert(\"Registered Successfully :))\");\n    //   router.replace(\"/dashboard\");\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                align: \"center\",\n                children: \"SignUp Form\"\n            }, void 0, false, {\n                fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                role: \"form\",\n                method: \"post\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"inputBox\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: firstname,\n                                onChange: (event)=>setFirstname(event.target.value),\n                                autoComplete: \"off\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Firstname\"\n                            }, void 0, false, {\n                                fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"inputBox\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: lastname,\n                                onChange: (event)=>setLastname(event.target.value),\n                                autoComplete: \"off\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Lastname\"\n                            }, void 0, false, {\n                                fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"inputBox\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: username,\n                                onChange: (event)=>setUsername(event.target.value),\n                                autoComplete: \"off\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Username\"\n                            }, void 0, false, {\n                                fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"inputBox\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                value: email,\n                                onChange: (event)=>setEmail(event.target.value),\n                                autoComplete: \"off\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"inputBox\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                value: password,\n                                onChange: (event)=>setPassword(event.target.value),\n                                autoComplete: \"off\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Password\"\n                            }, void 0, false, {\n                                fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        className: \"register-btn\",\n                        value: \"Sign Up\",\n                        onClick: signup\n                    }, void 0, false, {\n                        fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/s2300299/Downloads/Next168-jwt-sections/pages/signup/index.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Index, \"zJC6+jRruaEDR03YHr4xT53z0bU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQUs7d0JBQ0xOLFdBQVU7d0JBQ1ZPLE9BQU07d0JBQ05NLFNBQVM3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS25CO0dBckdTWjs7UUFDUUgsa0RBQVNBOzs7S0FEakJHO0FBdUdULCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NpZ251cC9pbmRleC5qcz8yMTEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBbZmlyc3RuYW1lLCBzZXRGaXJzdG5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsYXN0bmFtZSwgc2V0TGFzdG5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3Qgc2lnbnVwID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB1c2VyID0geyBmaXJzdG5hbWUsIGxhc3RuYW1lLCB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkIH07XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9hcGkvYXV0aC9zaWdudXBcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlciksXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy50ZXh0KCk7XG4gICAgfSk7XG4gIH07XG4gIC8vIGlmIChyZXMuc3RhdHVzID09PSAyMDEpIHtcbiAgLy8gICBzZXRGaXJzdG5hbWUoXCJcIik7XG4gIC8vICAgc2V0TGFzdG5hbWUoXCJcIik7XG4gIC8vICAgc2V0VXNlcm5hbWUoXCJcIik7XG4gIC8vICAgc2V0RW1haWwoXCJcIik7XG4gIC8vICAgc2V0UGFzc3dvcmQoXCJcIik7XG5cbiAgLy8gICBhbGVydChcIlJlZ2lzdGVyZWQgU3VjY2Vzc2Z1bGx5IDopKVwiKTtcbiAgLy8gICByb3V0ZXIucmVwbGFjZShcIi9kYXNoYm9hcmRcIik7XG4gIC8vIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICA8aDEgYWxpZ249XCJjZW50ZXJcIj5TaWduVXAgRm9ybTwvaDE+XG4gICAgICA8Zm9ybSByb2xlPVwiZm9ybVwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dEJveFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e2ZpcnN0bmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEZpcnN0bmFtZShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWw+Rmlyc3RuYW1lPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRCb3hcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtsYXN0bmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldExhc3RuYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbD5MYXN0bmFtZTwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0Qm94XCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRVc2VybmFtZShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWw+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dEJveFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0Qm94XCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0UGFzc3dvcmQoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwicmVnaXN0ZXItYnRuXCJcbiAgICAgICAgICB2YWx1ZT1cIlNpZ24gVXBcIlxuICAgICAgICAgIG9uQ2xpY2s9e3NpZ251cH1cbiAgICAgICAgLz5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkluZGV4Iiwicm91dGVyIiwiZmlyc3RuYW1lIiwic2V0Rmlyc3RuYW1lIiwibGFzdG5hbWUiLCJzZXRMYXN0bmFtZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInNpZ251cCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ1c2VyIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwib2siLCJqc29uIiwidGV4dCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiYWxpZ24iLCJmb3JtIiwicm9sZSIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJhdXRvQ29tcGxldGUiLCJyZXF1aXJlZCIsImxhYmVsIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/signup/index.js\n"));

/***/ })

});