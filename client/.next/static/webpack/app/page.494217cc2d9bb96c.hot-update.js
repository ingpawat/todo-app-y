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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ \"(app-pages-browser)/./src/app/style.scss\");\n/* harmony import */ var _ramonak_react_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ramonak/react-progress-bar */ \"(app-pages-browser)/./node_modules/@ramonak/react-progress-bar/dist/index.js\");\n/* harmony import */ var _utils_fetchTodos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/fetchTodos */ \"(app-pages-browser)/./src/app/utils/fetchTodos.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _app_assets_tickBox_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/assets/tickBox.svg */ \"(app-pages-browser)/./src/app/assets/tickBox.svg\");\n/* harmony import */ var _app_assets_3dot_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/assets/3dot.svg */ \"(app-pages-browser)/./src/app/assets/3dot.svg\");\n/* harmony import */ var _app_assets_chevron_down_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/assets/chevron-down.svg */ \"(app-pages-browser)/./src/app/assets/chevron-down.svg\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [selectedTodoId, setSelectedTodoId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const fetchData = async ()=>{\n        try {\n            const todosData = await (0,_utils_fetchTodos__WEBPACK_IMPORTED_MODULE_4__.getAllTodo)();\n            setTodos(todosData);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error fetching todos:\", error);\n        }\n    };\n    const handleTickClick = (todoId)=>{\n        if (selectedTodoId === todoId) {\n            setSelectedTodoId(null);\n        } else {\n            setSelectedTodoId(todoId);\n        }\n    };\n    const handleDialog = (todoId)=>{\n        console.log(\"edit\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"main\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"progress-box\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"left-side\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"progress-title\",\n                                    children: \"Progress\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"progress-bar-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ramonak_react_progress_bar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        completed: 50,\n                                        bgColor: \"#fff\",\n                                        height: \"7.343px\",\n                                        width: \"480px\",\n                                        borderRadius: \"999px\",\n                                        labelAlignment: \"outside\",\n                                        isLabelVisible: false,\n                                        baseBgColor: \"#3B3B3B\",\n                                        labelColor: \"#e80909\",\n                                        animateOnRender: true,\n                                        maxCompleted: 100\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"completed-text\",\n                                    children: \"... completed\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 21\n                    }, this),\n                    loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"loader\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 25\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"task-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"task-filter-container\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"task-title\",\n                                        children: \"Tasks\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"filter-dropdown\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"ALL\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 42\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                                src: _app_assets_chevron_down_svg__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                                                className: \"chevron-down\",\n                                                alt: \"ChevronDown\",\n                                                width: 14,\n                                                height: 14\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 42\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 29\n                            }, this),\n                            todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"task-capsule\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"tick-box\",\n                                            onClick: ()=>handleTickClick(todo.id),\n                                            style: {\n                                                backgroundColor: selectedTodoId === todo.id ? \"#585292\" : \"transparent\"\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                                src: _app_assets_tickBox_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                                alt: \"TickBox\",\n                                                width: 17,\n                                                height: 17\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 41\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 37\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"todo-title\",\n                                            children: todo.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 37\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            onClick: ()=>handleDialog(),\n                                            style: {\n                                                cursor: \"pointer\"\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                                src: _app_assets_3dot_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                                alt: \"TickBox\",\n                                                width: 17,\n                                                height: 17\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                                lineNumber: 96,\n                                                columnNumber: 41\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 37\n                                        }, this)\n                                    ]\n                                }, todo.id, true, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 33\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"task-capsule\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"add-your-todo\",\n                                    children: \"Add your todo...\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 33\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                lineNumber: 46,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n            lineNumber: 45,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"GEyEJW2AJ9ibfTvYJlgb3Pu+cfw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7O21DQWhCdkJjLEtBQUtFLEVBQUU7Ozs7OzBDQXNCOUMsOERBQUNwQjtnQ0FBSUQsV0FBVTswQ0FDWCw0RUFBQ0U7b0NBQUVGLFdBQVU7OENBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVE3RDtHQW5Hd0JoQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCJAcmFtb25hay9yZWFjdC1wcm9ncmVzcy1iYXJcIjtcbmltcG9ydCB7IGdldEFsbFRvZG8sIHB1dFRvZG8sIHBhdGNoVG9kbywgZGVsZXRlVG9kbywgZ2V0VG9kb0lkIH0gZnJvbSAnLi91dGlscy9mZXRjaFRvZG9zJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBUaWNrQm94IGZyb20gJy4uL2FwcC9hc3NldHMvdGlja0JveC5zdmcnO1xuaW1wb3J0IERvdCBmcm9tICcuLi9hcHAvYXNzZXRzLzNkb3Quc3ZnJ1xuaW1wb3J0IENoZXZyb25Eb3duIGZyb20gJy4uL2FwcC9hc3NldHMvY2hldnJvbi1kb3duLnN2Zyc7XG5pbXBvcnQgRWRpdERlbGV0ZURpYWxvZyBmcm9tICdAL2FwcC9jb21wb25lbnRzL2VkaXQtZGVsZXRlLWRpYWxvZy9lZGl0LWRlbGV0ZS1kaWFsb2cnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3NlbGVjdGVkVG9kb0lkLCBzZXRTZWxlY3RlZFRvZG9JZF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoRGF0YSgpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9zRGF0YSA9IGF3YWl0IGdldEFsbFRvZG8oKTtcbiAgICAgICAgICAgIHNldFRvZG9zKHRvZG9zRGF0YSk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHRvZG9zOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVUaWNrQ2xpY2sgPSAodG9kb0lkKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RlZFRvZG9JZCA9PT0gdG9kb0lkKSB7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZFRvZG9JZChudWxsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVG9kb0lkKHRvZG9JZCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlRGlhbG9nID0gKHRvZG9JZCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZWRpdCcpXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9J21haW4nPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZ3Jlc3MtYm94Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1zaWRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdwcm9ncmVzcy10aXRsZSc+UHJvZ3Jlc3M8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2dyZXNzLWJhci1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NCYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZD17NTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ0NvbG9yPVwiI2ZmZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI3LjM0M3B4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDgwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiOTk5cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxBbGlnbm1lbnQ9XCJvdXRzaWRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTGFiZWxWaXNpYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VCZ0NvbG9yPVwiIzNCM0IzQlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbENvbG9yPVwiI2U4MDkwOVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlT25SZW5kZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heENvbXBsZXRlZD17MTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nY29tcGxldGVkLXRleHQnPi4uLiBjb21wbGV0ZWQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9hZGVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Rhc2stY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFzay1maWx0ZXItY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGFzay10aXRsZSc+VGFza3M8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlsdGVyLWRyb3Bkb3duJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QUxMPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtDaGV2cm9uRG93bn0gY2xhc3NOYW1lPSdjaGV2cm9uLWRvd24nIGFsdD0nQ2hldnJvbkRvd24nIHdpZHRoPXsxNH0gaGVpZ2h0PXsxNH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RvZG9zLm1hcCh0b2RvID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Rhc2stY2Fwc3VsZScga2V5PXt0b2RvLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RpY2stYm94J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRpY2tDbGljayh0b2RvLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNlbGVjdGVkVG9kb0lkID09PSB0b2RvLmlkID8gJyM1ODUyOTInIDogJ3RyYW5zcGFyZW50J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17VGlja0JveH0gYWx0PSdUaWNrQm94JyB3aWR0aD17MTd9IGhlaWdodD17MTd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndG9kby10aXRsZSc+e3RvZG8udGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGlhbG9nKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtEb3R9IGFsdD0nVGlja0JveCcgd2lkdGg9ezE3fSBoZWlnaHQ9ezE3fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YXNrLWNhcHN1bGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2FkZC15b3VyLXRvZG8nPkFkZCB5b3VyIHRvZG8uLi48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQcm9ncmVzc0JhciIsImdldEFsbFRvZG8iLCJJbWFnZSIsIlRpY2tCb3giLCJEb3QiLCJDaGV2cm9uRG93biIsIkhvbWUiLCJ0b2RvcyIsInNldFRvZG9zIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZWxlY3RlZFRvZG9JZCIsInNldFNlbGVjdGVkVG9kb0lkIiwiZmV0Y2hEYXRhIiwidG9kb3NEYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlVGlja0NsaWNrIiwidG9kb0lkIiwiaGFuZGxlRGlhbG9nIiwibG9nIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsInAiLCJjb21wbGV0ZWQiLCJiZ0NvbG9yIiwiaGVpZ2h0Iiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJsYWJlbEFsaWdubWVudCIsImlzTGFiZWxWaXNpYmxlIiwiYmFzZUJnQ29sb3IiLCJsYWJlbENvbG9yIiwiYW5pbWF0ZU9uUmVuZGVyIiwibWF4Q29tcGxldGVkIiwic3BhbiIsImgyIiwic3JjIiwiYWx0IiwibWFwIiwidG9kbyIsIm9uQ2xpY2siLCJpZCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwidGl0bGUiLCJhIiwiaHJlZiIsImN1cnNvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});