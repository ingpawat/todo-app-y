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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ \"(app-pages-browser)/./src/app/style.scss\");\n/* harmony import */ var _ramonak_react_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ramonak/react-progress-bar */ \"(app-pages-browser)/./node_modules/@ramonak/react-progress-bar/dist/index.js\");\n/* harmony import */ var _utils_fetchTodos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/fetchTodos */ \"(app-pages-browser)/./src/app/utils/fetchTodos.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _app_assets_tickBox_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/assets/tickBox.svg */ \"(app-pages-browser)/./src/app/assets/tickBox.svg\");\n/* harmony import */ var _app_assets_3dot_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/assets/3dot.svg */ \"(app-pages-browser)/./src/app/assets/3dot.svg\");\n/* harmony import */ var _app_assets_chevron_down_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/assets/chevron-down.svg */ \"(app-pages-browser)/./src/app/assets/chevron-down.svg\");\n/* harmony import */ var _app_components_edit_delete_dialog_edit_delete_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/app/components/edit-delete-dialog/edit-delete-dialog */ \"(app-pages-browser)/./src/app/components/edit-delete-dialog/edit-delete-dialog.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [selectedTodoId, setSelectedTodoId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isDialogOpen, setDialogOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [todoIdforEditDelete, settodoIdforEditDelete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const fetchData = async ()=>{\n        try {\n            const todosData = await (0,_utils_fetchTodos__WEBPACK_IMPORTED_MODULE_4__.getAllTodo)();\n            setTodos(todosData);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error fetching todos:\", error);\n        }\n    };\n    const handleTickClick = async (todoId, updatedFields)=>{\n        try {\n            const todo = todos.find((todo)=>todo.id === todoId);\n            const updatedFields = {\n                completed: !todo.completed\n            };\n            await (0,_utils_fetchTodos__WEBPACK_IMPORTED_MODULE_4__.patchTodo)(todoId, updatedFields);\n            console.log(\"Todo marked as \".concat(updatedFields.completed ? \"completed\" : \"incomplete\"));\n            fetchData();\n        } catch (error) {\n            console.error(\"Error updating todo:\", error);\n        }\n    };\n    // const handleToDoIdForEditDelete = (todoId) => {\n    //     settodoIdforEditDelete(todoId);\n    // }\n    console.log(selectedTodoId);\n    console.log(todos);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"main\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"progress-box\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"left-side\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"progress-title\",\n                                    children: \"Progress\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"progress-bar-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ramonak_react_progress_bar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        completed: 50,\n                                        bgColor: \"#fff\",\n                                        height: \"7.343px\",\n                                        width: \"480px\",\n                                        borderRadius: \"999px\",\n                                        labelAlignment: \"outside\",\n                                        isLabelVisible: false,\n                                        baseBgColor: \"#3B3B3B\",\n                                        labelColor: \"#e80909\",\n                                        animateOnRender: true,\n                                        maxCompleted: 100\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"completed-text\",\n                                    children: \"... completed\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 21\n                    }, this),\n                    loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"loader\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 25\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"task-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"task-filter-container\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"task-title\",\n                                        children: \"Tasks\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"filter-dropdown\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"ALL\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                                src: _app_assets_chevron_down_svg__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                                                className: \"chevron-down\",\n                                                alt: \"ChevronDown\",\n                                                width: 14,\n                                                height: 14\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 29\n                            }, this),\n                            todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"task-capsule\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"tick-box\",\n                                            onClick: ()=>handleTickClick(todo.id, \"\"),\n                                            style: {\n                                                backgroundColor: todo.completed ? \"#585292\" : \"transparent\"\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                                src: _app_assets_tickBox_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                                alt: \"TickBox\",\n                                                width: 17,\n                                                height: 17\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                                lineNumber: 98,\n                                                columnNumber: 41\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 37\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: todo.completed ? \"completed-todo\" : \"todo-title\",\n                                            onClick: ()=>handleToDoId(todo.id),\n                                            children: todo.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                            lineNumber: 102,\n                                            columnNumber: 37\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            onClick: ()=>{\n                                                setDialogOpen(true);\n                                                settodoIdforEditDelete(todo.id);\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                                src: _app_assets_3dot_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                                alt: \"Dot\",\n                                                width: 17,\n                                                height: 17,\n                                                style: {\n                                                    cursor: \"pointer\"\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                                lineNumber: 114,\n                                                columnNumber: 41\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                            lineNumber: 110,\n                                            columnNumber: 37\n                                        }, this),\n                                        isDialogOpen && todoIdforEditDelete === todo.id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_edit_delete_dialog_edit_delete_dialog__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                            todoId: todoIdforEditDelete\n                                        }, todo.id, false, {\n                                            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                            lineNumber: 116,\n                                            columnNumber: 89\n                                        }, this)\n                                    ]\n                                }, todo.id, true, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 33\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"task-capsule\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"add-your-todo\",\n                                    children: \"Add your todo...\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 33\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                                lineNumber: 119,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n                lineNumber: 55,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/page.tsx\",\n            lineNumber: 54,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"EyUNIDt+C4xj/ZGRoqa13zBf9b4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ21EO0FBQzdCO0FBQ2dDO0FBQ0s7QUFDNUI7QUFDaUI7QUFDUjtBQUNpQjtBQUM0QjtBQUV0RSxTQUFTVzs7SUFDcEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdaLCtDQUFRQSxDQUFDLEVBQUU7SUFDckMsTUFBTSxDQUFDYSxTQUFTQyxXQUFXLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2UsZ0JBQWdCQyxrQkFBa0IsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ3JELE1BQU0sQ0FBQ2lCLGNBQWNDLGNBQWMsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ21CLHFCQUFxQkMsdUJBQXVCLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUUvREMsZ0RBQVNBLENBQUM7UUFDTm9CO0lBQ0osR0FBRyxFQUFFO0lBRUwsTUFBTUEsWUFBWTtRQUNkLElBQUk7WUFDQSxNQUFNQyxZQUFZLE1BQU1uQiw2REFBVUE7WUFDbENTLFNBQVNVO1lBQ1RSLFdBQVc7UUFDZixFQUFFLE9BQU9TLE9BQU87WUFDWkMsUUFBUUQsS0FBSyxDQUFDLHlCQUF5QkE7UUFDM0M7SUFDSjtJQUVBLE1BQU1FLGtCQUFrQixPQUFPQyxRQUFnQkM7UUFDM0MsSUFBSTtZQUNBLE1BQU1DLE9BQU9qQixNQUFNa0IsSUFBSSxDQUFDRCxDQUFBQSxPQUFRQSxLQUFLRSxFQUFFLEtBQUtKO1lBQzVDLE1BQU1DLGdCQUFnQjtnQkFBRUksV0FBVyxDQUFDSCxLQUFLRyxTQUFTO1lBQUM7WUFDbkQsTUFBTTNCLDREQUFTQSxDQUFDc0IsUUFBUUM7WUFDeEJILFFBQVFRLEdBQUcsQ0FBQyxrQkFBdUUsT0FBckRMLGNBQWNJLFNBQVMsR0FBRyxjQUFjO1lBQ3RFVjtRQUNKLEVBQUUsT0FBT0UsT0FBTztZQUNaQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtRQUMxQztJQUNKO0lBRUEsa0RBQWtEO0lBQ2xELHNDQUFzQztJQUN0QyxJQUFJO0lBRUpDLFFBQVFRLEdBQUcsQ0FBQ2pCO0lBQ1pTLFFBQVFRLEdBQUcsQ0FBQ3JCO0lBRVoscUJBQ0k7a0JBQ0ksNEVBQUNzQjtZQUFLQyxXQUFVO3NCQUNaLDRFQUFDQztnQkFBSUQsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFJRCxXQUFVO2tDQUNYLDRFQUFDQzs0QkFBSUQsV0FBVTs7OENBQ1gsOERBQUNFO29DQUFFRixXQUFVOzhDQUFpQjs7Ozs7OzhDQUM5Qiw4REFBQ0M7b0NBQUlELFdBQVU7OENBQ1gsNEVBQUNoQyxtRUFBV0E7d0NBQ1I2QixXQUFXO3dDQUNYTSxTQUFRO3dDQUNSQyxRQUFPO3dDQUNQQyxPQUFNO3dDQUNOQyxjQUFhO3dDQUNiQyxnQkFBZTt3Q0FDZkMsZ0JBQWdCO3dDQUNoQkMsYUFBWTt3Q0FDWkMsWUFBVzt3Q0FDWEMsZUFBZTt3Q0FDZkMsY0FBYzs7Ozs7Ozs7Ozs7OENBR3RCLDhEQUFDVjtvQ0FBRUYsV0FBVTs4Q0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUdyQ3JCLHdCQUNHLDhEQUFDa0M7d0JBQUtiLFdBQVU7Ozs7OzZDQUVoQiw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNYLDhEQUFDQztnQ0FBSUQsV0FBVTs7a0RBQ1gsOERBQUNjO3dDQUFHZCxXQUFVO2tEQUFhOzs7Ozs7a0RBQzNCLDhEQUFDQzt3Q0FBSUQsV0FBVTs7MERBQ1gsOERBQUNFOzBEQUFFOzs7Ozs7MERBQ0gsOERBQUMvQixtREFBS0E7Z0RBQUM0QyxLQUFLekMsb0VBQVdBO2dEQUFFMEIsV0FBVTtnREFBZWdCLEtBQUk7Z0RBQWNYLE9BQU87Z0RBQUlELFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFHOUYzQixNQUFNd0MsR0FBRyxDQUFDdkIsQ0FBQUEscUJBQ1AsOERBQUNPO29DQUFJRCxXQUFVOztzREFFWCw4REFBQ0M7NENBQ0dELFdBQVU7NENBQ1ZrQixTQUFTLElBQU0zQixnQkFBZ0JHLEtBQUtFLEVBQUUsRUFBRTs0Q0FDeEN1QixPQUFPO2dEQUNIQyxpQkFBaUIxQixLQUFLRyxTQUFTLEdBQUcsWUFBWTs0Q0FDbEQ7c0RBRUEsNEVBQUMxQixtREFBS0E7Z0RBQUM0QyxLQUFLM0MsK0RBQU9BO2dEQUFFNEMsS0FBSTtnREFBVVgsT0FBTztnREFBSUQsUUFBUTs7Ozs7Ozs7Ozs7c0RBSTFELDhEQUFDRjs0Q0FDR0YsV0FBV04sS0FBS0csU0FBUyxHQUFHLG1CQUFtQjs0Q0FDL0NxQixTQUFTLElBQU1HLGFBQWEzQixLQUFLRSxFQUFFO3NEQUVsQ0YsS0FBSzRCLEtBQUs7Ozs7OztzREFJZiw4REFBQ0M7NENBQUVMLFNBQVM7Z0RBQ1JsQyxjQUFjO2dEQUNkRSx1QkFBdUJRLEtBQUtFLEVBQUU7NENBQ2xDO3NEQUNJLDRFQUFDekIsbURBQUtBO2dEQUFDNEMsS0FBSzFDLDREQUFHQTtnREFBRTJDLEtBQUk7Z0RBQU1YLE9BQU87Z0RBQUlELFFBQVE7Z0RBQUllLE9BQU87b0RBQUVLLFFBQVE7Z0RBQVU7Ozs7Ozs7Ozs7O3dDQUVoRnpDLGdCQUFnQkUsd0JBQXdCUyxLQUFLRSxFQUFFLGtCQUFJLDhEQUFDckIsNkZBQWdCQTs0Q0FBQ2lCLFFBQVFQOzJDQUEwQlMsS0FBS0UsRUFBRTs7Ozs7O21DQTNCaEZGLEtBQUtFLEVBQUU7Ozs7OzBDQThCOUMsOERBQUNLO2dDQUFJRCxXQUFVOzBDQUNYLDRFQUFDRTtvQ0FBRUYsV0FBVTs4Q0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTdEO0dBcEh3QnhCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIkByYW1vbmFrL3JlYWN0LXByb2dyZXNzLWJhclwiO1xuaW1wb3J0IHsgZ2V0QWxsVG9kbywgcGF0Y2hUb2RvIH0gZnJvbSAnLi91dGlscy9mZXRjaFRvZG9zJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBUaWNrQm94IGZyb20gJy4uL2FwcC9hc3NldHMvdGlja0JveC5zdmcnO1xuaW1wb3J0IERvdCBmcm9tICcuLi9hcHAvYXNzZXRzLzNkb3Quc3ZnJ1xuaW1wb3J0IENoZXZyb25Eb3duIGZyb20gJy4uL2FwcC9hc3NldHMvY2hldnJvbi1kb3duLnN2Zyc7XG5pbXBvcnQgRWRpdERlbGV0ZURpYWxvZyBmcm9tICdAL2FwcC9jb21wb25lbnRzL2VkaXQtZGVsZXRlLWRpYWxvZy9lZGl0LWRlbGV0ZS1kaWFsb2cnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3NlbGVjdGVkVG9kb0lkLCBzZXRTZWxlY3RlZFRvZG9JZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbaXNEaWFsb2dPcGVuLCBzZXREaWFsb2dPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdG9kb0lkZm9yRWRpdERlbGV0ZSwgc2V0dG9kb0lkZm9yRWRpdERlbGV0ZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoRGF0YSgpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9zRGF0YSA9IGF3YWl0IGdldEFsbFRvZG8oKTtcbiAgICAgICAgICAgIHNldFRvZG9zKHRvZG9zRGF0YSk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHRvZG9zOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVUaWNrQ2xpY2sgPSBhc3luYyAodG9kb0lkOiBudW1iZXIsIHVwZGF0ZWRGaWVsZHM6IHN0cmluZykgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdG9kbyA9IHRvZG9zLmZpbmQodG9kbyA9PiB0b2RvLmlkID09PSB0b2RvSWQpO1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEZpZWxkcyA9IHsgY29tcGxldGVkOiAhdG9kby5jb21wbGV0ZWQgfTtcbiAgICAgICAgICAgIGF3YWl0IHBhdGNoVG9kbyh0b2RvSWQsIHVwZGF0ZWRGaWVsZHMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFRvZG8gbWFya2VkIGFzICR7dXBkYXRlZEZpZWxkcy5jb21wbGV0ZWQgPyAnY29tcGxldGVkJyA6ICdpbmNvbXBsZXRlJ31gKTtcbiAgICAgICAgICAgIGZldGNoRGF0YSgpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgdG9kbzonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gY29uc3QgaGFuZGxlVG9Eb0lkRm9yRWRpdERlbGV0ZSA9ICh0b2RvSWQpID0+IHtcbiAgICAvLyAgICAgc2V0dG9kb0lkZm9yRWRpdERlbGV0ZSh0b2RvSWQpO1xuICAgIC8vIH1cblxuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkVG9kb0lkKTtcbiAgICBjb25zb2xlLmxvZyh0b2RvcylcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9J21haW4nPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZ3Jlc3MtYm94Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1zaWRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdwcm9ncmVzcy10aXRsZSc+UHJvZ3Jlc3M8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2dyZXNzLWJhci1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NCYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZD17NTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ0NvbG9yPVwiI2ZmZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI3LjM0M3B4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDgwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiOTk5cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxBbGlnbm1lbnQ9XCJvdXRzaWRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTGFiZWxWaXNpYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VCZ0NvbG9yPVwiIzNCM0IzQlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbENvbG9yPVwiI2U4MDkwOVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlT25SZW5kZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heENvbXBsZXRlZD17MTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nY29tcGxldGVkLXRleHQnPi4uLiBjb21wbGV0ZWQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9hZGVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Rhc2stY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFzay1maWx0ZXItY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGFzay10aXRsZSc+VGFza3M8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlsdGVyLWRyb3Bkb3duJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFMTDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e0NoZXZyb25Eb3dufSBjbGFzc05hbWU9J2NoZXZyb24tZG93bicgYWx0PSdDaGV2cm9uRG93bicgd2lkdGg9ezE0fSBoZWlnaHQ9ezE0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG9kb3MubWFwKHRvZG8gPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFzay1jYXBzdWxlJyBrZXk9e3RvZG8uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFRpY2sgYm94ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGljay1ib3gnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVGlja0NsaWNrKHRvZG8uaWQsICcnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRvZG8uY29tcGxldGVkID8gJyM1ODUyOTInIDogJ3RyYW5zcGFyZW50J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17VGlja0JveH0gYWx0PSdUaWNrQm94JyB3aWR0aD17MTd9IGhlaWdodD17MTd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFRvZG8gLSBUaXRsZSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0b2RvLmNvbXBsZXRlZCA/ICdjb21wbGV0ZWQtdG9kbycgOiAndG9kby10aXRsZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVG9Eb0lkKHRvZG8uaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b2RvLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogMyBEb3RzIGNsaWNrIHRvIG9wZW4gdGhlIGVkaXQgZGVsZXRlIGRpYWxvZyAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREaWFsb2dPcGVuKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRvZG9JZGZvckVkaXREZWxldGUodG9kby5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtEb3R9IGFsdD0nRG90JyB3aWR0aD17MTd9IGhlaWdodD17MTd9IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNEaWFsb2dPcGVuICYmIHRvZG9JZGZvckVkaXREZWxldGUgPT09IHRvZG8uaWQgJiYgPEVkaXREZWxldGVEaWFsb2cgdG9kb0lkPXt0b2RvSWRmb3JFZGl0RGVsZXRlfSBrZXk9e3RvZG8uaWR9IC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFzay1jYXBzdWxlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdhZGQteW91ci10b2RvJz5BZGQgeW91ciB0b2RvLi4uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvPlxuICAgICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQcm9ncmVzc0JhciIsImdldEFsbFRvZG8iLCJwYXRjaFRvZG8iLCJJbWFnZSIsIlRpY2tCb3giLCJEb3QiLCJDaGV2cm9uRG93biIsIkVkaXREZWxldGVEaWFsb2ciLCJIb21lIiwidG9kb3MiLCJzZXRUb2RvcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2VsZWN0ZWRUb2RvSWQiLCJzZXRTZWxlY3RlZFRvZG9JZCIsImlzRGlhbG9nT3BlbiIsInNldERpYWxvZ09wZW4iLCJ0b2RvSWRmb3JFZGl0RGVsZXRlIiwic2V0dG9kb0lkZm9yRWRpdERlbGV0ZSIsImZldGNoRGF0YSIsInRvZG9zRGF0YSIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZVRpY2tDbGljayIsInRvZG9JZCIsInVwZGF0ZWRGaWVsZHMiLCJ0b2RvIiwiZmluZCIsImlkIiwiY29tcGxldGVkIiwibG9nIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsInAiLCJiZ0NvbG9yIiwiaGVpZ2h0Iiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJsYWJlbEFsaWdubWVudCIsImlzTGFiZWxWaXNpYmxlIiwiYmFzZUJnQ29sb3IiLCJsYWJlbENvbG9yIiwiYW5pbWF0ZU9uUmVuZGVyIiwibWF4Q29tcGxldGVkIiwic3BhbiIsImgyIiwic3JjIiwiYWx0IiwibWFwIiwib25DbGljayIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiaGFuZGxlVG9Eb0lkIiwidGl0bGUiLCJhIiwiY3Vyc29yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});