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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ \"(app-pages-browser)/./src/app/style.scss\");\n/* harmony import */ var _ramonak_react_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ramonak/react-progress-bar */ \"(app-pages-browser)/./node_modules/@ramonak/react-progress-bar/dist/index.js\");\n/* harmony import */ var _utils_fetchTodos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/fetchTodos */ \"(app-pages-browser)/./src/app/utils/fetchTodos.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _app_assets_tickBox_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/assets/tickBox.svg */ \"(app-pages-browser)/./src/app/assets/tickBox.svg\");\n/* harmony import */ var _app_assets_3dot_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/assets/3dot.svg */ \"(app-pages-browser)/./src/app/assets/3dot.svg\");\n/* harmony import */ var _app_assets_chevron_down_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/assets/chevron-down.svg */ \"(app-pages-browser)/./src/app/assets/chevron-down.svg\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [selectedTodoId, setSelectedTodoId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [dialogOpen, setDialogOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const fetchData = async ()=>{\n        try {\n            const todosData = await (0,_utils_fetchTodos__WEBPACK_IMPORTED_MODULE_4__.getAllTodo)();\n            setTodos(todosData);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error fetching todos:\", error);\n        }\n    };\n    const handleTickClick = (todoId1)=>{\n        if (selectedTodoId === todoId1) {\n            setSelectedTodoId(null);\n        } else {\n            setSelectedTodoId(todoId1);\n        }\n    };\n    const handleDialog = ()=>{\n        setDialogOpen((prevDialogOpen)=>!prevDialogOpen); // Toggle dialog open/close\n        setSelectedTodoId(todoId); // Set the selected todo ID\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"main\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"progress-box\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"left-side\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"progress-title\",\n                                    children: \"Progress\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"progress-bar-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ramonak_react_progress_bar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        completed: 50,\n                                        bgColor: \"#fff\",\n                                        height: \"7.343px\",\n                                        width: \"480px\",\n                                        borderRadius: \"999px\",\n                                        labelAlignment: \"outside\",\n                                        isLabelVisible: false,\n                                        baseBgColor: \"#3B3B3B\",\n                                        labelColor: \"#e80909\",\n                                        animateOnRender: true,\n                                        maxCompleted: 100\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"completed-text\",\n                                    children: \"... completed\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 21\n                    }, this),\n                    loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"loader\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 25\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"task-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"task-filter-container\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"task-title\",\n                                        children: \"Tasks\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"filter-dropdown\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"ALL\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                                src: _app_assets_chevron_down_svg__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                                                className: \"chevron-down\",\n                                                alt: \"ChevronDown\",\n                                                width: 14,\n                                                height: 14\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 29\n                            }, this),\n                            todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"task-capsule\",\n                                    children: [\n                                        \"// Tick box\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"tick-box\",\n                                            onClick: ()=>handleTickClick(todo.id),\n                                            style: {\n                                                backgroundColor: selectedTodoId === todo.id ? \"#585292\" : \"transparent\"\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                                src: _app_assets_tickBox_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                                alt: \"TickBox\",\n                                                width: 17,\n                                                height: 17\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                                lineNumber: 91,\n                                                columnNumber: 41\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 37\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"todo-title\",\n                                            children: todo.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                            lineNumber: 94,\n                                            columnNumber: 37\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                                src: _app_assets_3dot_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                                alt: \"Dot\",\n                                                width: 17,\n                                                height: 17,\n                                                style: {\n                                                    cursor: \"pointer\"\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                                lineNumber: 96,\n                                                columnNumber: 41\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                            lineNumber: 95,\n                                            columnNumber: 37\n                                        }, this)\n                                    ]\n                                }, todo.id, true, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 33\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"task-capsule\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"add-your-todo\",\n                                    children: \"Add your todo...\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 33\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                lineNumber: 48,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n            lineNumber: 47,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"J0Xt/6vGqcaf5CAcdFvFFFhvkjE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RXFDLEtBQUk7Z0RBQU1YLE9BQU87Z0RBQUlELFFBQVE7Z0RBQUlpQixPQUFPO29EQUFFSSxRQUFRO2dEQUFVOzs7Ozs7Ozs7Ozs7bUNBZGxEUCxLQUFLRSxFQUFFOzs7OzswQ0FrQjlDLDhEQUFDcEI7Z0NBQUlELFdBQVU7MENBQ1gsNEVBQUNFO29DQUFFRixXQUFVOzhDQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRN0Q7R0FqR3dCbEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiQHJhbW9uYWsvcmVhY3QtcHJvZ3Jlc3MtYmFyXCI7XG5pbXBvcnQgeyBnZXRBbGxUb2RvLCBwdXRUb2RvLCBwYXRjaFRvZG8sIGRlbGV0ZVRvZG8sIGdldFRvZG9JZCB9IGZyb20gJy4vdXRpbHMvZmV0Y2hUb2Rvcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgVGlja0JveCBmcm9tICcuLi9hcHAvYXNzZXRzL3RpY2tCb3guc3ZnJztcbmltcG9ydCBEb3QgZnJvbSAnLi4vYXBwL2Fzc2V0cy8zZG90LnN2ZydcbmltcG9ydCBDaGV2cm9uRG93biBmcm9tICcuLi9hcHAvYXNzZXRzL2NoZXZyb24tZG93bi5zdmcnO1xuaW1wb3J0IEVkaXREZWxldGVEaWFsb2cgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9lZGl0LWRlbGV0ZS1kaWFsb2cvZWRpdC1kZWxldGUtZGlhbG9nJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFtzZWxlY3RlZFRvZG9JZCwgc2V0U2VsZWN0ZWRUb2RvSWRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2RpYWxvZ09wZW4sIHNldERpYWxvZ09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hEYXRhKCk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdG9kb3NEYXRhID0gYXdhaXQgZ2V0QWxsVG9kbygpO1xuICAgICAgICAgICAgc2V0VG9kb3ModG9kb3NEYXRhKTtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdG9kb3M6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVRpY2tDbGljayA9ICh0b2RvSWQpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkVG9kb0lkID09PSB0b2RvSWQpIHtcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVG9kb0lkKG51bGwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWRUb2RvSWQodG9kb0lkKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVEaWFsb2cgPSAoKSA9PiB7XG4gICAgICAgIHNldERpYWxvZ09wZW4ocHJldkRpYWxvZ09wZW4gPT4gIXByZXZEaWFsb2dPcGVuKTsgLy8gVG9nZ2xlIGRpYWxvZyBvcGVuL2Nsb3NlXG4gICAgICAgIHNldFNlbGVjdGVkVG9kb0lkKHRvZG9JZCk7IC8vIFNldCB0aGUgc2VsZWN0ZWQgdG9kbyBJRFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPSdtYWluJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2dyZXNzLWJveCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtc2lkZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncHJvZ3Jlc3MtdGl0bGUnPlByb2dyZXNzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9ncmVzcy1iYXItY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzQmFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQ9ezUwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdDb2xvcj1cIiNmZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNy4zNDNweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQ4MHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjk5OXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsQWxpZ25tZW50PVwib3V0c2lkZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xhYmVsVmlzaWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlQmdDb2xvcj1cIiMzQjNCM0JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxDb2xvcj1cIiNlODA5MDlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZU9uUmVuZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhDb21wbGV0ZWQ9ezEwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2NvbXBsZXRlZC10ZXh0Jz4uLi4gY29tcGxldGVkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvYWRlclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YXNrLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Rhc2stZmlsdGVyLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3Rhc2stdGl0bGUnPlRhc2tzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbHRlci1kcm9wZG93bic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BTEw8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtDaGV2cm9uRG93bn0gY2xhc3NOYW1lPSdjaGV2cm9uLWRvd24nIGFsdD0nQ2hldnJvbkRvd24nIHdpZHRoPXsxNH0gaGVpZ2h0PXsxNH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RvZG9zLm1hcCh0b2RvID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Rhc2stY2Fwc3VsZScga2V5PXt0b2RvLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRpY2sgYm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0aWNrLWJveCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUaWNrQ2xpY2sodG9kby5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzZWxlY3RlZFRvZG9JZCA9PT0gdG9kby5pZCA/ICcjNTg1MjkyJyA6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e1RpY2tCb3h9IGFsdD0nVGlja0JveCcgd2lkdGg9ezE3fSBoZWlnaHQ9ezE3fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogLy8gVG9kbyBUaXRsZSAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RvZG8tdGl0bGUnPnt0b2RvLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e0RvdH0gYWx0PSdEb3QnIHdpZHRoPXsxN30gaGVpZ2h0PXsxN30gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Rhc2stY2Fwc3VsZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYWRkLXlvdXItdG9kbyc+QWRkIHlvdXIgdG9kby4uLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlByb2dyZXNzQmFyIiwiZ2V0QWxsVG9kbyIsIkltYWdlIiwiVGlja0JveCIsIkRvdCIsIkNoZXZyb25Eb3duIiwiSG9tZSIsInRvZG9zIiwic2V0VG9kb3MiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNlbGVjdGVkVG9kb0lkIiwic2V0U2VsZWN0ZWRUb2RvSWQiLCJkaWFsb2dPcGVuIiwic2V0RGlhbG9nT3BlbiIsImZldGNoRGF0YSIsInRvZG9zRGF0YSIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZVRpY2tDbGljayIsInRvZG9JZCIsImhhbmRsZURpYWxvZyIsInByZXZEaWFsb2dPcGVuIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsInAiLCJjb21wbGV0ZWQiLCJiZ0NvbG9yIiwiaGVpZ2h0Iiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJsYWJlbEFsaWdubWVudCIsImlzTGFiZWxWaXNpYmxlIiwiYmFzZUJnQ29sb3IiLCJsYWJlbENvbG9yIiwiYW5pbWF0ZU9uUmVuZGVyIiwibWF4Q29tcGxldGVkIiwic3BhbiIsImgyIiwic3JjIiwiYWx0IiwibWFwIiwidG9kbyIsIm9uQ2xpY2siLCJpZCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwidGl0bGUiLCJhIiwiY3Vyc29yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});