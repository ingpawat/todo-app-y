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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ \"(app-pages-browser)/./src/app/style.scss\");\n/* harmony import */ var _ramonak_react_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ramonak/react-progress-bar */ \"(app-pages-browser)/./node_modules/@ramonak/react-progress-bar/dist/index.js\");\n/* harmony import */ var _utils_fetchTodos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/fetchTodos */ \"(app-pages-browser)/./src/app/utils/fetchTodos.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _app_assets_tickBox_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/assets/tickBox.svg */ \"(app-pages-browser)/./src/app/assets/tickBox.svg\");\n/* harmony import */ var _app_assets_3dot_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/assets/3dot.svg */ \"(app-pages-browser)/./src/app/assets/3dot.svg\");\n/* harmony import */ var _app_assets_chevron_down_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/assets/chevron-down.svg */ \"(app-pages-browser)/./src/app/assets/chevron-down.svg\");\n/* harmony import */ var _app_components_edit_delete_dialog_edit_delete_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/app/components/edit-delete-dialog/edit-delete-dialog */ \"(app-pages-browser)/./src/app/components/edit-delete-dialog/edit-delete-dialog.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [selectedTodoId, setSelectedTodoId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isDialogOpen, setDialogOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const fetchData = async ()=>{\n        try {\n            const todosData = await (0,_utils_fetchTodos__WEBPACK_IMPORTED_MODULE_4__.getAllTodo)();\n            setTodos(todosData);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error fetching todos:\", error);\n        }\n    };\n    const handleTickClick = (todoId)=>{\n        if (selectedTodoId === todoId) {\n            setSelectedTodoId(null);\n        } else {\n            setSelectedTodoId(todoId);\n        }\n    };\n    const handleToDoId = (todoId)=>{\n        setSelectedTodoId(todoId);\n    };\n    console.log(selectedTodoId);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"main\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"progress-box\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"left-side\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"progress-title\",\n                                    children: \"Progress\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"progress-bar-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ramonak_react_progress_bar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        completed: 50,\n                                        bgColor: \"#fff\",\n                                        height: \"7.343px\",\n                                        width: \"480px\",\n                                        borderRadius: \"999px\",\n                                        labelAlignment: \"outside\",\n                                        isLabelVisible: false,\n                                        baseBgColor: \"#3B3B3B\",\n                                        labelColor: \"#e80909\",\n                                        animateOnRender: true,\n                                        maxCompleted: 100\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"completed-text\",\n                                    children: \"... completed\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 21\n                    }, this),\n                    loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"loader\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 25\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"task-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"task-filter-container\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"task-title\",\n                                        children: \"Tasks\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"filter-dropdown\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"ALL\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                                src: _app_assets_chevron_down_svg__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                                                className: \"chevron-down\",\n                                                alt: \"ChevronDown\",\n                                                width: 14,\n                                                height: 14\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 29\n                            }, this),\n                            todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"task-capsule\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"tick-box\",\n                                            onClick: ()=>handleTickClick(todo.id),\n                                            style: {\n                                                backgroundColor: selectedTodoId === todo.id ? \"#585292\" : \"transparent\"\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                                src: _app_assets_tickBox_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                                alt: \"TickBox\",\n                                                width: 17,\n                                                height: 17\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                                lineNumber: 92,\n                                                columnNumber: 41\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 37\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"todo-title\",\n                                            children: todo.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 37\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            onClick: (key)=>{\n                                                setDialogOpen(true);\n                                                handleToDoId(todo.id);\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                                src: _app_assets_3dot_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                                alt: \"Dot\",\n                                                width: 17,\n                                                height: 17,\n                                                style: {\n                                                    cursor: \"pointer\"\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                                lineNumber: 103,\n                                                columnNumber: 41\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 37\n                                        }, this),\n                                        isDialogOpen && selectedTodoId === todo.id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_edit_delete_dialog_edit_delete_dialog__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                            todoId: selectedTodoId\n                                        }, todo.id, false, {\n                                            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                            lineNumber: 106,\n                                            columnNumber: 84\n                                        }, this)\n                                    ]\n                                }, todo.id, true, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 33\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"task-capsule\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"add-your-todo\",\n                                    children: \"Add your todo...\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 33\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                lineNumber: 49,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n            lineNumber: 48,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"wOoAubakLOV/wM/rGTDglksjsb4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LG1EQUFLQTtnREFBQ3VDLEtBQUtyQyw0REFBR0E7Z0RBQUVzQyxLQUFJO2dEQUFNWCxPQUFPO2dEQUFJRCxRQUFRO2dEQUFJaUIsT0FBTztvREFBRUssUUFBUTtnREFBVTs7Ozs7Ozs7Ozs7d0NBR2hGdEMsZ0JBQWdCRixtQkFBbUJnQyxLQUFLRSxFQUFFLGtCQUFJLDhEQUFDeEMsNkZBQWdCQTs0Q0FBQ2UsUUFBUVQ7MkNBQXFCZ0MsS0FBS0UsRUFBRTs7Ozs7O21DQXZCdEVGLEtBQUtFLEVBQUU7Ozs7OzBDQTBCOUMsOERBQUNwQjtnQ0FBSUQsV0FBVTswQ0FDWCw0RUFBQ0U7b0NBQUVGLFdBQVU7OENBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVE3RDtHQTFHd0JsQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCJAcmFtb25hay9yZWFjdC1wcm9ncmVzcy1iYXJcIjtcbmltcG9ydCB7IGdldEFsbFRvZG8gfSBmcm9tICcuL3V0aWxzL2ZldGNoVG9kb3MnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IFRpY2tCb3ggZnJvbSAnLi4vYXBwL2Fzc2V0cy90aWNrQm94LnN2Zyc7XG5pbXBvcnQgRG90IGZyb20gJy4uL2FwcC9hc3NldHMvM2RvdC5zdmcnXG5pbXBvcnQgQ2hldnJvbkRvd24gZnJvbSAnLi4vYXBwL2Fzc2V0cy9jaGV2cm9uLWRvd24uc3ZnJztcbmltcG9ydCBFZGl0RGVsZXRlRGlhbG9nIGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvZWRpdC1kZWxldGUtZGlhbG9nL2VkaXQtZGVsZXRlLWRpYWxvZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbc2VsZWN0ZWRUb2RvSWQsIHNldFNlbGVjdGVkVG9kb0lkXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtpc0RpYWxvZ09wZW4sIHNldERpYWxvZ09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hEYXRhKCk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdG9kb3NEYXRhID0gYXdhaXQgZ2V0QWxsVG9kbygpO1xuICAgICAgICAgICAgc2V0VG9kb3ModG9kb3NEYXRhKTtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdG9kb3M6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVRpY2tDbGljayA9ICh0b2RvSWQpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkVG9kb0lkID09PSB0b2RvSWQpIHtcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVG9kb0lkKG51bGwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWRUb2RvSWQodG9kb0lkKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVUb0RvSWQgPSAodG9kb0lkKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkVG9kb0lkKHRvZG9JZCk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWRUb2RvSWQpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT0nbWFpbic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9ncmVzcy1ib3gnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LXNpZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3Byb2dyZXNzLXRpdGxlJz5Qcm9ncmVzczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZ3Jlc3MtYmFyLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzc0JhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkPXs1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnQ29sb3I9XCIjZmZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjcuMzQzcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI0ODBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCI5OTlweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEFsaWdubWVudD1cIm91dHNpZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNMYWJlbFZpc2libGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZUJnQ29sb3I9XCIjM0IzQjNCXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsQ29sb3I9XCIjZTgwOTA5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVPblJlbmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4Q29tcGxldGVkPXsxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdjb21wbGV0ZWQtdGV4dCc+Li4uIGNvbXBsZXRlZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2FkZXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFzay1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YXNrLWZpbHRlci1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0YXNrLXRpdGxlJz5UYXNrczwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXItZHJvcGRvd24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QUxMPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17Q2hldnJvbkRvd259IGNsYXNzTmFtZT0nY2hldnJvbi1kb3duJyBhbHQ9J0NoZXZyb25Eb3duJyB3aWR0aD17MTR9IGhlaWdodD17MTR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b2Rvcy5tYXAodG9kbyA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YXNrLWNhcHN1bGUnIGtleT17dG9kby5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogVGljayBib3ggKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0aWNrLWJveCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUaWNrQ2xpY2sodG9kby5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzZWxlY3RlZFRvZG9JZCA9PT0gdG9kby5pZCA/ICcjNTg1MjkyJyA6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e1RpY2tCb3h9IGFsdD0nVGlja0JveCcgd2lkdGg9ezE3fSBoZWlnaHQ9ezE3fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBUb2RvIC0gVGl0bGUgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RvZG8tdGl0bGUnPnt0b2RvLnRpdGxlfTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDMgRG90cyBjbGljayB0byBvcGVuIHRoZSBlZGl0IGRlbGV0ZSBkaWFsb2cgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGlhbG9nT3Blbih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVUb0RvSWQodG9kby5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtEb3R9IGFsdD0nRG90JyB3aWR0aD17MTd9IGhlaWdodD17MTd9IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0RpYWxvZ09wZW4gJiYgc2VsZWN0ZWRUb2RvSWQgPT09IHRvZG8uaWQgJiYgPEVkaXREZWxldGVEaWFsb2cgdG9kb0lkPXtzZWxlY3RlZFRvZG9JZH0ga2V5PXt0b2RvLmlkfSAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Rhc2stY2Fwc3VsZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYWRkLXlvdXItdG9kbyc+QWRkIHlvdXIgdG9kby4uLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICA8Lz5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUHJvZ3Jlc3NCYXIiLCJnZXRBbGxUb2RvIiwiSW1hZ2UiLCJUaWNrQm94IiwiRG90IiwiQ2hldnJvbkRvd24iLCJFZGl0RGVsZXRlRGlhbG9nIiwiSG9tZSIsInRvZG9zIiwic2V0VG9kb3MiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNlbGVjdGVkVG9kb0lkIiwic2V0U2VsZWN0ZWRUb2RvSWQiLCJpc0RpYWxvZ09wZW4iLCJzZXREaWFsb2dPcGVuIiwiZmV0Y2hEYXRhIiwidG9kb3NEYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlVGlja0NsaWNrIiwidG9kb0lkIiwiaGFuZGxlVG9Eb0lkIiwibG9nIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsInAiLCJjb21wbGV0ZWQiLCJiZ0NvbG9yIiwiaGVpZ2h0Iiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJsYWJlbEFsaWdubWVudCIsImlzTGFiZWxWaXNpYmxlIiwiYmFzZUJnQ29sb3IiLCJsYWJlbENvbG9yIiwiYW5pbWF0ZU9uUmVuZGVyIiwibWF4Q29tcGxldGVkIiwic3BhbiIsImgyIiwic3JjIiwiYWx0IiwibWFwIiwidG9kbyIsIm9uQ2xpY2siLCJpZCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwidGl0bGUiLCJhIiwia2V5IiwiY3Vyc29yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});