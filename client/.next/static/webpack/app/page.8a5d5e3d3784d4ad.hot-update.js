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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ \"(app-pages-browser)/./src/app/style.scss\");\n/* harmony import */ var _ramonak_react_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ramonak/react-progress-bar */ \"(app-pages-browser)/./node_modules/@ramonak/react-progress-bar/dist/index.js\");\n/* harmony import */ var _utils_fetchTodos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/fetchTodos */ \"(app-pages-browser)/./src/app/utils/fetchTodos.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _app_assets_tickBox_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/assets/tickBox.svg */ \"(app-pages-browser)/./src/app/assets/tickBox.svg\");\n/* harmony import */ var _app_assets_3dot_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/assets/3dot.svg */ \"(app-pages-browser)/./src/app/assets/3dot.svg\");\n/* harmony import */ var _app_assets_chevron_down_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/assets/chevron-down.svg */ \"(app-pages-browser)/./src/app/assets/chevron-down.svg\");\n/* harmony import */ var _app_components_edit_delete_dialog_edit_delete_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/app/components/edit-delete-dialog/edit-delete-dialog */ \"(app-pages-browser)/./src/app/components/edit-delete-dialog/edit-delete-dialog.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [selectedTodoId, setSelectedTodoId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [dialogOpen, setDialogOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const fetchData = async ()=>{\n        try {\n            const todosData = await (0,_utils_fetchTodos__WEBPACK_IMPORTED_MODULE_4__.getAllTodo)();\n            setTodos(todosData);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error fetching todos:\", error);\n        }\n    };\n    const handleTickClick = (todoId)=>{\n        if (selectedTodoId === todoId) {\n            setSelectedTodoId(null);\n        } else {\n            setSelectedTodoId(todoId);\n        }\n    };\n    const handleDialog = ()=>{\n        setDialogOpen(!dialogOpen); // Toggle dialog open/close\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"main\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"progress-box\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"left-side\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"progress-title\",\n                                    children: \"Progress\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"progress-bar-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ramonak_react_progress_bar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        completed: 50,\n                                        bgColor: \"#fff\",\n                                        height: \"7.343px\",\n                                        width: \"480px\",\n                                        borderRadius: \"999px\",\n                                        labelAlignment: \"outside\",\n                                        isLabelVisible: false,\n                                        baseBgColor: \"#3B3B3B\",\n                                        labelColor: \"#e80909\",\n                                        animateOnRender: true,\n                                        maxCompleted: 100\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"completed-text\",\n                                    children: \"... completed\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 21\n                    }, this),\n                    loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"loader\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 25\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"task-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"task-filter-container\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"task-title\",\n                                        children: \"Tasks\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"filter-dropdown\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"ALL\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 42\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                                src: _app_assets_chevron_down_svg__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                                                className: \"chevron-down\",\n                                                alt: \"ChevronDown\",\n                                                width: 14,\n                                                height: 14\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 42\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 29\n                            }, this),\n                            todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"task-capsule\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"tick-box\",\n                                            onClick: ()=>handleTickClick(todo.id),\n                                            style: {\n                                                backgroundColor: selectedTodoId === todo.id ? \"#585292\" : \"transparent\"\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                                src: _app_assets_tickBox_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                                alt: \"TickBox\",\n                                                width: 17,\n                                                height: 17\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                                lineNumber: 89,\n                                                columnNumber: 41\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 37\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"todo-title\",\n                                            children: todo.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 37\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                            src: _app_assets_3dot_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                            alt: \"Dot\",\n                                            width: 17,\n                                            height: 17,\n                                            style: {\n                                                cursor: \"pointer\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 41\n                                        }, this),\n                                        dialogOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_edit_delete_dialog_edit_delete_dialog__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                            todoId: selectedTodoId\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                            lineNumber: 94,\n                                            columnNumber: 41\n                                        }, this)\n                                    ]\n                                }, todo.id, true, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 33\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"task-capsule\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"add-your-todo\",\n                                    children: \"Add your todo...\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 33\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                lineNumber: 47,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n            lineNumber: 46,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"J0Xt/6vGqcaf5CAcdFvFFFhvkjE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVE7NENBQVU7Ozs7Ozt3Q0FDNUVuQyw0QkFDRCw4REFBQ1IsNkZBQWdCQTs0Q0FBQ2UsUUFBUVQ7Ozs7Ozs7bUNBYkMrQixLQUFLRSxFQUFFOzs7OzswQ0FpQjlDLDhEQUFDcEI7Z0NBQUlELFdBQVU7MENBQ1gsNEVBQUNFO29DQUFFRixXQUFVOzhDQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRN0Q7R0EvRndCakI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiQHJhbW9uYWsvcmVhY3QtcHJvZ3Jlc3MtYmFyXCI7XG5pbXBvcnQgeyBnZXRBbGxUb2RvLCBwdXRUb2RvLCBwYXRjaFRvZG8sIGRlbGV0ZVRvZG8sIGdldFRvZG9JZCB9IGZyb20gJy4vdXRpbHMvZmV0Y2hUb2Rvcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgVGlja0JveCBmcm9tICcuLi9hcHAvYXNzZXRzL3RpY2tCb3guc3ZnJztcbmltcG9ydCBEb3QgZnJvbSAnLi4vYXBwL2Fzc2V0cy8zZG90LnN2ZydcbmltcG9ydCBDaGV2cm9uRG93biBmcm9tICcuLi9hcHAvYXNzZXRzL2NoZXZyb24tZG93bi5zdmcnO1xuaW1wb3J0IEVkaXREZWxldGVEaWFsb2cgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9lZGl0LWRlbGV0ZS1kaWFsb2cvZWRpdC1kZWxldGUtZGlhbG9nJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFtzZWxlY3RlZFRvZG9JZCwgc2V0U2VsZWN0ZWRUb2RvSWRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2RpYWxvZ09wZW4sIHNldERpYWxvZ09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hEYXRhKCk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdG9kb3NEYXRhID0gYXdhaXQgZ2V0QWxsVG9kbygpO1xuICAgICAgICAgICAgc2V0VG9kb3ModG9kb3NEYXRhKTtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdG9kb3M6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVRpY2tDbGljayA9ICh0b2RvSWQpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkVG9kb0lkID09PSB0b2RvSWQpIHtcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVG9kb0lkKG51bGwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWRUb2RvSWQodG9kb0lkKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVEaWFsb2cgPSAoKSA9PiB7XG4gICAgICAgIHNldERpYWxvZ09wZW4oIWRpYWxvZ09wZW4pOyAvLyBUb2dnbGUgZGlhbG9nIG9wZW4vY2xvc2VcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT0nbWFpbic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9ncmVzcy1ib3gnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LXNpZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3Byb2dyZXNzLXRpdGxlJz5Qcm9ncmVzczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZ3Jlc3MtYmFyLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzc0JhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkPXs1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnQ29sb3I9XCIjZmZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjcuMzQzcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI0ODBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCI5OTlweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEFsaWdubWVudD1cIm91dHNpZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNMYWJlbFZpc2libGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZUJnQ29sb3I9XCIjM0IzQjNCXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsQ29sb3I9XCIjZTgwOTA5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVPblJlbmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4Q29tcGxldGVkPXsxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdjb21wbGV0ZWQtdGV4dCc+Li4uIGNvbXBsZXRlZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2FkZXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFzay1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YXNrLWZpbHRlci1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0YXNrLXRpdGxlJz5UYXNrczwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXItZHJvcGRvd24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BTEw8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e0NoZXZyb25Eb3dufSBjbGFzc05hbWU9J2NoZXZyb24tZG93bicgYWx0PSdDaGV2cm9uRG93bicgd2lkdGg9ezE0fSBoZWlnaHQ9ezE0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG9kb3MubWFwKHRvZG8gPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFzay1jYXBzdWxlJyBrZXk9e3RvZG8uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGljay1ib3gnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVGlja0NsaWNrKHRvZG8uaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc2VsZWN0ZWRUb2RvSWQgPT09IHRvZG8uaWQgPyAnIzU4NTI5MicgOiAndHJhbnNwYXJlbnQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtUaWNrQm94fSBhbHQ9J1RpY2tCb3gnIHdpZHRoPXsxN30gaGVpZ2h0PXsxN30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0b2RvLXRpdGxlJz57dG9kby50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17RG90fSBhbHQ9J0RvdCcgd2lkdGg9ezE3fSBoZWlnaHQ9ezE3fSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZ09wZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0RGVsZXRlRGlhbG9nIHRvZG9JZD17c2VsZWN0ZWRUb2RvSWR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFzay1jYXBzdWxlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdhZGQteW91ci10b2RvJz5BZGQgeW91ciB0b2RvLi4uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUHJvZ3Jlc3NCYXIiLCJnZXRBbGxUb2RvIiwiSW1hZ2UiLCJUaWNrQm94IiwiRG90IiwiQ2hldnJvbkRvd24iLCJFZGl0RGVsZXRlRGlhbG9nIiwiSG9tZSIsInRvZG9zIiwic2V0VG9kb3MiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNlbGVjdGVkVG9kb0lkIiwic2V0U2VsZWN0ZWRUb2RvSWQiLCJkaWFsb2dPcGVuIiwic2V0RGlhbG9nT3BlbiIsImZldGNoRGF0YSIsInRvZG9zRGF0YSIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZVRpY2tDbGljayIsInRvZG9JZCIsImhhbmRsZURpYWxvZyIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJwIiwiY29tcGxldGVkIiwiYmdDb2xvciIsImhlaWdodCIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwibGFiZWxBbGlnbm1lbnQiLCJpc0xhYmVsVmlzaWJsZSIsImJhc2VCZ0NvbG9yIiwibGFiZWxDb2xvciIsImFuaW1hdGVPblJlbmRlciIsIm1heENvbXBsZXRlZCIsInNwYW4iLCJoMiIsInNyYyIsImFsdCIsIm1hcCIsInRvZG8iLCJvbkNsaWNrIiwiaWQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInRpdGxlIiwiY3Vyc29yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});