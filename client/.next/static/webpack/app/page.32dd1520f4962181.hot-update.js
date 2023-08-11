"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ \"(app-pages-browser)/./src/app/style.scss\");\n/* harmony import */ var _ramonak_react_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ramonak/react-progress-bar */ \"(app-pages-browser)/./node_modules/@ramonak/react-progress-bar/dist/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const API_BASE_URL = \"http://localhost:3001\";\n    const API_TODOS_PATH = \"/todos\";\n    async function handler(req, res) {\n        if (req.method === \"GET\") {\n            const todoId = parseInt(req.query.id, 10);\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:3001/todos/\");\n                const todo = response.data;\n                res.status(200).json(todo);\n            } catch (error) {\n                res.status(404).json({\n                    message: \"Todo not found\"\n                });\n            }\n        } else {\n            res.status(405).json({\n                message: \"Method not allowed\"\n            });\n        }\n    }\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const fetchData = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/getTodos\"); // Replace with \n            setTodos(response.data);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    console.log(todos);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"main\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"progress-box\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"left-side\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"progress-title\",\n                                    children: \"Progress\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"progress-bar-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ramonak_react_progress_bar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        completed: 50,\n                                        bgColor: \"#fff\",\n                                        height: \"7.343px\",\n                                        width: \"480px\",\n                                        borderRadius: \"999px\",\n                                        labelAlignment: \"outside\",\n                                        isLabelVisible: false,\n                                        baseBgColor: \"#3B3B3B\",\n                                        labelColor: \"#e80909\",\n                                        animateOnRender: true,\n                                        maxCompleted: 100\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"completed-text\",\n                                    children: \"... completed\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"right-side\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: todo.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: todo.completed ? \"Completed\" : \"Not Completed\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, todo.id, true, {\n                                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 19\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"4w2FR3x+JAhc2MKl4V8naiLXs70=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ3pCO0FBQ0o7QUFDZ0M7QUFHdkMsU0FBU0s7O0lBQ3RCLE1BQU1DLGVBQWVDLHVCQUFvQztJQUN6RCxNQUFNRyxpQkFBaUJILFFBQXNDO0lBRTdELGVBQWVLLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CO1FBQzlELElBQUlELElBQUlFLE1BQU0sS0FBSyxPQUFPO1lBQ3hCLE1BQU1DLFNBQVNDLFNBQVNKLElBQUlLLEtBQUssQ0FBQ0MsRUFBRSxFQUFZO1lBRWhELElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNakIsNkNBQUtBLENBQUNrQixHQUFHLENBQUU7Z0JBQ2xDLE1BQU1DLE9BQU9GLFNBQVNHLElBQUk7Z0JBQzFCVCxJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSDtZQUN2QixFQUFFLE9BQU9JLE9BQU87Z0JBQ2RaLElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVFLFNBQVM7Z0JBQWlCO1lBQ25EO1FBQ0YsT0FBTztZQUNMYixJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFRSxTQUFTO1lBQXFCO1FBQ3ZEO0lBQ0Y7SUFDQSxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBRzVCLCtDQUFRQSxDQUFDLEVBQUU7SUFFckNDLGdEQUFTQSxDQUFDO1FBQ1I0QjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1BLFlBQVk7UUFDaEIsSUFBSTtZQUNGLE1BQU1WLFdBQVcsTUFBTWpCLDZDQUFLQSxDQUFDa0IsR0FBRyxDQUFDLGtCQUFrQixnQkFBZ0I7WUFDbkVRLFNBQVNULFNBQVNHLElBQUk7UUFDeEIsRUFBRSxPQUFPRyxPQUFPO1lBQ2RLLFFBQVFMLEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3hDO0lBQ0Y7SUFFQUssUUFBUUMsR0FBRyxDQUFDSjtJQUVaLHFCQUNFO2tCQUNFLDRFQUFDSztZQUFLQyxXQUFVO3NCQUNkLDRFQUFDQztnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFBSUQsV0FBVTs7OENBQ2IsOERBQUNFO29DQUFFRixXQUFVOzhDQUFpQjs7Ozs7OzhDQUM5Qiw4REFBQ0M7b0NBQUlELFdBQVU7OENBQ2IsNEVBQUM5QixtRUFBV0E7d0NBQ1ZpQyxXQUFXO3dDQUNYQyxTQUFRO3dDQUNSQyxRQUFPO3dDQUNQQyxPQUFNO3dDQUNOQyxjQUFhO3dDQUNiQyxnQkFBZTt3Q0FDZkMsZ0JBQWdCO3dDQUNoQkMsYUFBWTt3Q0FDWkMsWUFBVzt3Q0FDWEMsZUFBZTt3Q0FDZkMsY0FBYzs7Ozs7Ozs7Ozs7OENBR2xCLDhEQUFDWDtvQ0FBRUYsV0FBVTs4Q0FBaUI7Ozs7Ozs7Ozs7OztzQ0FFaEMsOERBQUNDOzRCQUFJRCxXQUFVO3NDQUNiLDRFQUFDYzswQ0FDRXBCLE1BQU1xQixHQUFHLENBQUMzQixDQUFBQSxxQkFDVCw4REFBQzRCOzswREFDQyw4REFBQ2Q7MERBQUdkLEtBQUs2QixLQUFLOzs7Ozs7MERBQ2QsOERBQUNmOzBEQUFHZCxLQUFLZSxTQUFTLEdBQUcsY0FBYzs7Ozs7Ozt1Q0FGNUJmLEtBQUtILEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWWxDO0dBM0V3QmQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIkByYW1vbmFrL3JlYWN0LXByb2dyZXNzLWJhclwiO1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBBUElfQkFTRV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfQkFTRV9VUkxcbiAgY29uc3QgQVBJX1RPRE9TX1BBVEggPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVE9ET1NfUEFUSFxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgIGNvbnN0IHRvZG9JZCA9IHBhcnNlSW50KHJlcS5xdWVyeS5pZCBhcyBzdHJpbmcsIDEwKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS90b2Rvcy9gKTtcbiAgICAgICAgY29uc3QgdG9kbyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRvZG8pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnVG9kbyBub3QgZm91bmQnIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6ICdNZXRob2Qgbm90IGFsbG93ZWQnIH0pO1xuICAgIH1cbiAgfVxuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9nZXRUb2RvcycpOyAvLyBSZXBsYWNlIHdpdGggXG4gICAgICBzZXRUb2RvcyhyZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnNvbGUubG9nKHRvZG9zKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT0nbWFpbic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9ncmVzcy1ib3gnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LXNpZGVcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdwcm9ncmVzcy10aXRsZSc+UHJvZ3Jlc3M8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9ncmVzcy1iYXItY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NCYXJcbiAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZD17NTB9XG4gICAgICAgICAgICAgICAgICBiZ0NvbG9yPVwiI2ZmZlwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI3LjM0M3B4XCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDgwcHhcIlxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiOTk5cHhcIlxuICAgICAgICAgICAgICAgICAgbGFiZWxBbGlnbm1lbnQ9XCJvdXRzaWRlXCJcbiAgICAgICAgICAgICAgICAgIGlzTGFiZWxWaXNpYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgIGJhc2VCZ0NvbG9yPVwiIzNCM0IzQlwiXG4gICAgICAgICAgICAgICAgICBsYWJlbENvbG9yPVwiI2U4MDkwOVwiXG4gICAgICAgICAgICAgICAgICBhbmltYXRlT25SZW5kZXJcbiAgICAgICAgICAgICAgICAgIG1heENvbXBsZXRlZD17MTAwfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2NvbXBsZXRlZC10ZXh0Jz4uLi4gY29tcGxldGVkPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LXNpZGVcIj5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHt0b2Rvcy5tYXAodG9kbyA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXt0b2RvLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3RvZG8udGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD57dG9kby5jb21wbGV0ZWQgPyAnQ29tcGxldGVkJyA6ICdOb3QgQ29tcGxldGVkJ308L3A+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIlByb2dyZXNzQmFyIiwiSG9tZSIsIkFQSV9CQVNFX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfQkFTRV9VUkwiLCJBUElfVE9ET1NfUEFUSCIsIk5FWFRfUFVCTElDX0FQSV9UT0RPU19QQVRIIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInRvZG9JZCIsInBhcnNlSW50IiwicXVlcnkiLCJpZCIsInJlc3BvbnNlIiwiZ2V0IiwidG9kbyIsImRhdGEiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJtZXNzYWdlIiwidG9kb3MiLCJzZXRUb2RvcyIsImZldGNoRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwicCIsImNvbXBsZXRlZCIsImJnQ29sb3IiLCJoZWlnaHQiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsImxhYmVsQWxpZ25tZW50IiwiaXNMYWJlbFZpc2libGUiLCJiYXNlQmdDb2xvciIsImxhYmVsQ29sb3IiLCJhbmltYXRlT25SZW5kZXIiLCJtYXhDb21wbGV0ZWQiLCJ1bCIsIm1hcCIsImxpIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});