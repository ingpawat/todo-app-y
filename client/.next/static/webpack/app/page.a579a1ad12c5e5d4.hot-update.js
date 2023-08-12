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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ \"(app-pages-browser)/./src/app/style.scss\");\n/* harmony import */ var _ramonak_react_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ramonak/react-progress-bar */ \"(app-pages-browser)/./node_modules/@ramonak/react-progress-bar/dist/index.js\");\n/* harmony import */ var _utils_fetchTodos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/fetchTodos */ \"(app-pages-browser)/./src/app/utils/fetchTodos.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _app_assets_tickBox_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/assets/tickBox.svg */ \"(app-pages-browser)/./src/app/assets/tickBox.svg\");\n/* harmony import */ var _app_assets_3dot_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/assets/3dot.svg */ \"(app-pages-browser)/./src/app/assets/3dot.svg\");\n/* harmony import */ var _app_assets_chevron_down_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/assets/chevron-down.svg */ \"(app-pages-browser)/./src/app/assets/chevron-down.svg\");\n/* harmony import */ var _app_components_edit_delete_dialog_edit_delete_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/app/components/edit-delete-dialog/edit-delete-dialog */ \"(app-pages-browser)/./src/app/components/edit-delete-dialog/edit-delete-dialog.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [isDialogOpen, setDialogOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [todoIdforEditDelete, setTodoIdforEditDelete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [howManyCompleted, setHowManyCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const fetchData = async ()=>{\n        try {\n            const todosData = await (0,_utils_fetchTodos__WEBPACK_IMPORTED_MODULE_4__.getAllTodo)();\n            setTodos(todosData);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error fetching todos:\", error);\n        }\n    };\n    const handleTickClick = async (todoId, updatedFields)=>{\n        try {\n            const todo = todos.find((todo)=>todo.id === todoId);\n            const updatedFields = {\n                completed: !todo.completed\n            };\n            await (0,_utils_fetchTodos__WEBPACK_IMPORTED_MODULE_4__.patchTodo)(todoId, updatedFields);\n            fetchData();\n        } catch (error) {\n            console.error(\"Error updating todo:\", error);\n        }\n    };\n    const completeCount = ()=>{\n        return todos.filter((todo)=>todo.completed).length;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setHowManyCompleted(completeCount());\n    }, [\n        todos\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"main\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"progress-box\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"left-side\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"progress-title\",\n                                    children: \"Progress\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"progress-bar-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ramonak_react_progress_bar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        completed: howManyCompleted / todos.length * 100,\n                                        bgColor: \"#fff\",\n                                        height: \"7.343px\",\n                                        width: \"480px\",\n                                        borderRadius: \"999px\",\n                                        labelAlignment: \"outside\",\n                                        isLabelVisible: false,\n                                        baseBgColor: \"#3B3B3B\",\n                                        labelColor: \"#e80909\",\n                                        animateOnRender: true,\n                                        maxCompleted: 100\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"completed-text\",\n                                    children: [\n                                        howManyCompleted,\n                                        \" completed\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 21\n                    }, this),\n                    loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"loader\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 25\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"task-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"task-filter-container\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"task-title\",\n                                        children: \"Tasks\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"filter-dropdown\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"ALL\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                                src: _app_assets_chevron_down_svg__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                                                className: \"chevron-down\",\n                                                alt: \"ChevronDown\",\n                                                width: 14,\n                                                height: 14\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 29\n                            }, this),\n                            todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"task-capsule\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"tick-box\",\n                                            onClick: ()=>handleTickClick(todo.id, \"\"),\n                                            style: {\n                                                backgroundColor: todo.completed ? \"#585292\" : \"transparent\"\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                                src: _app_assets_tickBox_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                                alt: \"TickBox\",\n                                                width: 17,\n                                                height: 17\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                                lineNumber: 99,\n                                                columnNumber: 41\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 37\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: todo.completed ? \"completed-todo\" : \"todo-title\",\n                                            children: todo.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                            lineNumber: 103,\n                                            columnNumber: 37\n                                        }, this),\n                                        isDialogOpen && todoIdforEditDelete === todo.id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"edit-delete-dialog-warpper\",\n                                                    style: {\n                                                        zIndex: 90\n                                                    },\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_edit_delete_dialog_edit_delete_dialog__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                                        todoId: todoIdforEditDelete\n                                                    }, todo.id, false, {\n                                                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                                        lineNumber: 113,\n                                                        columnNumber: 49\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                                    lineNumber: 112,\n                                                    columnNumber: 45\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"background\",\n                                                    onClick: ()=>setDialogOpen(false),\n                                                    style: {\n                                                        zIndex: 50\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                                    lineNumber: 115,\n                                                    columnNumber: 45\n                                                }, this)\n                                            ]\n                                        }, void 0, true),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            style: {\n                                                zIndex: 80\n                                            },\n                                            onClick: ()=>{\n                                                setDialogOpen(true);\n                                                setTodoIdforEditDelete(todo.id);\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                                src: _app_assets_3dot_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                                alt: \"Dot\",\n                                                width: 17,\n                                                height: 17,\n                                                style: {\n                                                    cursor: \"pointer\"\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                                lineNumber: 124,\n                                                columnNumber: 41\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                            lineNumber: 118,\n                                            columnNumber: 37\n                                        }, this)\n                                    ]\n                                }, todo.id, true, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 33\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"task-capsule-add-todo\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"add-your-todo\",\n                                    children: \"Add your todo...\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 131,\n                                    columnNumber: 33\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                lineNumber: 130,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                lineNumber: 56,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n            lineNumber: 55,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"o75Q4crejIjWDwYZ7tmyJfmySN8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCJAcmFtb25hay9yZWFjdC1wcm9ncmVzcy1iYXJcIjtcbmltcG9ydCB7IGdldEFsbFRvZG8sIHBhdGNoVG9kbyB9IGZyb20gJy4vdXRpbHMvZmV0Y2hUb2Rvcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgVGlja0JveCBmcm9tICcuLi9hcHAvYXNzZXRzL3RpY2tCb3guc3ZnJztcbmltcG9ydCBEb3QgZnJvbSAnLi4vYXBwL2Fzc2V0cy8zZG90LnN2ZydcbmltcG9ydCBDaGV2cm9uRG93biBmcm9tICcuLi9hcHAvYXNzZXRzL2NoZXZyb24tZG93bi5zdmcnO1xuaW1wb3J0IEVkaXREZWxldGVEaWFsb2cgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9lZGl0LWRlbGV0ZS1kaWFsb2cvZWRpdC1kZWxldGUtZGlhbG9nJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuICAgIGNvbnN0IFtpc0RpYWxvZ09wZW4sIHNldERpYWxvZ09wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIGNvbnN0IFt0b2RvSWRmb3JFZGl0RGVsZXRlLCBzZXRUb2RvSWRmb3JFZGl0RGVsZXRlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IFtob3dNYW55Q29tcGxldGVkLCBzZXRIb3dNYW55Q29tcGxldGVkXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG5cblxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9zRGF0YSA9IGF3YWl0IGdldEFsbFRvZG8oKTtcbiAgICAgICAgICAgIHNldFRvZG9zKHRvZG9zRGF0YSk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHRvZG9zOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVUaWNrQ2xpY2sgPSBhc3luYyAodG9kb0lkOiBzdHJpbmcsIHVwZGF0ZWRGaWVsZHM6IGFueSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdG9kbyA9IHRvZG9zLmZpbmQodG9kbyA9PiB0b2RvLmlkID09PSB0b2RvSWQpO1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEZpZWxkcyA9IHsgY29tcGxldGVkOiAhdG9kby5jb21wbGV0ZWQgfTtcbiAgICAgICAgICAgIGF3YWl0IHBhdGNoVG9kbyh0b2RvSWQsIHVwZGF0ZWRGaWVsZHMpO1xuICAgICAgICAgICAgZmV0Y2hEYXRhKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyB0b2RvOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBjb21wbGV0ZUNvdW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5jb21wbGV0ZWQpLmxlbmd0aDtcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0SG93TWFueUNvbXBsZXRlZChjb21wbGV0ZUNvdW50KCkpO1xuICAgIH0sIFt0b2Rvc10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hEYXRhKCk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT0nbWFpbic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9ncmVzcy1ib3gnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LXNpZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3Byb2dyZXNzLXRpdGxlJz5Qcm9ncmVzczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZ3Jlc3MtYmFyLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzc0JhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkPXsoaG93TWFueUNvbXBsZXRlZCAvIHRvZG9zLmxlbmd0aCkgKiAxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ0NvbG9yPVwiI2ZmZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI3LjM0M3B4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDgwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiOTk5cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxBbGlnbm1lbnQ9XCJvdXRzaWRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTGFiZWxWaXNpYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VCZ0NvbG9yPVwiIzNCM0IzQlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbENvbG9yPVwiI2U4MDkwOVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlT25SZW5kZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heENvbXBsZXRlZD17MTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nY29tcGxldGVkLXRleHQnPntob3dNYW55Q29tcGxldGVkfSBjb21wbGV0ZWQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9hZGVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Rhc2stY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFzay1maWx0ZXItY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGFzay10aXRsZSc+VGFza3M8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlsdGVyLWRyb3Bkb3duJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFMTDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e0NoZXZyb25Eb3dufSBjbGFzc05hbWU9J2NoZXZyb24tZG93bicgYWx0PSdDaGV2cm9uRG93bicgd2lkdGg9ezE0fSBoZWlnaHQ9ezE0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG9kb3MubWFwKHRvZG8gPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFzay1jYXBzdWxlJyBrZXk9e3RvZG8uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFRpY2sgYm94ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGljay1ib3gnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVGlja0NsaWNrKHRvZG8uaWQsICcnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRvZG8uY29tcGxldGVkID8gJyM1ODUyOTInIDogJ3RyYW5zcGFyZW50J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17VGlja0JveH0gYWx0PSdUaWNrQm94JyB3aWR0aD17MTd9IGhlaWdodD17MTd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFRvZG8gLSBUaXRsZSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0b2RvLmNvbXBsZXRlZCA/ICdjb21wbGV0ZWQtdG9kbycgOiAndG9kby10aXRsZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RvZG8udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAzIERvdHMgY2xpY2sgdG8gb3BlbiB0aGUgZWRpdCBkZWxldGUgZGlhbG9nICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzRGlhbG9nT3BlbiAmJiB0b2RvSWRmb3JFZGl0RGVsZXRlID09PSB0b2RvLmlkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZWRpdC1kZWxldGUtZGlhbG9nLXdhcnBwZXInIHN0eWxlPXt7IHpJbmRleDogOTAgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXREZWxldGVEaWFsb2cgdG9kb0lkPXt0b2RvSWRmb3JFZGl0RGVsZXRlfSBrZXk9e3RvZG8uaWR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmFja2dyb3VuZCcgb25DbGljaz17KCkgPT4gc2V0RGlhbG9nT3BlbihmYWxzZSl9IHN0eWxlPXt7IHpJbmRleDogNTAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDo4MCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERpYWxvZ09wZW4odHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG9kb0lkZm9yRWRpdERlbGV0ZSh0b2RvLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e0RvdH0gYWx0PSdEb3QnIHdpZHRoPXsxN30gaGVpZ2h0PXsxN30gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YXNrLWNhcHN1bGUtYWRkLXRvZG8nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2FkZC15b3VyLXRvZG8nPkFkZCB5b3VyIHRvZG8uLi48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlByb2dyZXNzQmFyIiwiZ2V0QWxsVG9kbyIsInBhdGNoVG9kbyIsIkltYWdlIiwiVGlja0JveCIsIkRvdCIsIkNoZXZyb25Eb3duIiwiRWRpdERlbGV0ZURpYWxvZyIsIkhvbWUiLCJ0b2RvcyIsInNldFRvZG9zIiwibG9hZGluZyIsInNldExvYWRpbmciLCJpc0RpYWxvZ09wZW4iLCJzZXREaWFsb2dPcGVuIiwidG9kb0lkZm9yRWRpdERlbGV0ZSIsInNldFRvZG9JZGZvckVkaXREZWxldGUiLCJob3dNYW55Q29tcGxldGVkIiwic2V0SG93TWFueUNvbXBsZXRlZCIsImZldGNoRGF0YSIsInRvZG9zRGF0YSIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZVRpY2tDbGljayIsInRvZG9JZCIsInVwZGF0ZWRGaWVsZHMiLCJ0b2RvIiwiZmluZCIsImlkIiwiY29tcGxldGVkIiwiY29tcGxldGVDb3VudCIsImZpbHRlciIsImxlbmd0aCIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJwIiwiYmdDb2xvciIsImhlaWdodCIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwibGFiZWxBbGlnbm1lbnQiLCJpc0xhYmVsVmlzaWJsZSIsImJhc2VCZ0NvbG9yIiwibGFiZWxDb2xvciIsImFuaW1hdGVPblJlbmRlciIsIm1heENvbXBsZXRlZCIsInNwYW4iLCJoMiIsInNyYyIsImFsdCIsIm1hcCIsIm9uQ2xpY2siLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInRpdGxlIiwiekluZGV4IiwiYSIsImN1cnNvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});