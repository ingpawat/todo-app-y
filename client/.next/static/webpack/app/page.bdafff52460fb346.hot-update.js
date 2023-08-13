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

/***/ "(app-pages-browser)/./src/app/components/edit-delete-dialog/edit-delete-dialog.tsx":
/*!**********************************************************************!*\
  !*** ./src/app/components/edit-delete-dialog/edit-delete-dialog.tsx ***!
  \**********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _edit_delete_dialog_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-delete-dialog.scss */ \"(app-pages-browser)/./src/app/components/edit-delete-dialog/edit-delete-dialog.scss\");\n/* harmony import */ var _utils_fetchTodos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/fetchTodos */ \"(app-pages-browser)/./src/app/utils/fetchTodos.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst EditDeleteDialog = (param)=>{\n    let { todoId, title, refreshData } = param;\n    _s();\n    const [newTitle, setNewTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(title);\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleEditClick = async ()=>{\n        setIsEditing(true);\n    };\n    const handleSaveClick = async ()=>{\n        try {\n            await (0,_utils_fetchTodos__WEBPACK_IMPORTED_MODULE_3__.patchTodo)(todoId, {\n                title: newTitle\n            });\n            setIsEditing(false);\n            console.log(\"Edit successful\");\n        } catch (error) {\n            console.error(\"Error editing todo:\", error);\n        }\n    };\n    const handleDeleteClick = async ()=>{\n        try {\n            await (0,_utils_fetchTodos__WEBPACK_IMPORTED_MODULE_3__.deleteTodo)(todoId);\n            refreshData();\n            console.log(\"Delete successful\");\n        } catch (error) {\n            console.error(\"Error deleting todo:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"dialog-container\",\n        children: isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"edit-field\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    value: newTitle,\n                    onChange: (e)=>setNewTitle(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/components/edit-delete-dialog/edit-delete-dialog.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"action-button save\",\n                    onClick: handleSaveClick,\n                    children: \"Save\"\n                }, void 0, false, {\n                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/components/edit-delete-dialog/edit-delete-dialog.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/components/edit-delete-dialog/edit-delete-dialog.tsx\",\n            lineNumber: 36,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"action-button edit\",\n                    onClick: handleEditClick,\n                    children: \"Edit\"\n                }, void 0, false, {\n                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/components/edit-delete-dialog/edit-delete-dialog.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"action-button delete\",\n                    onClick: handleDeleteClick,\n                    children: \"Delete\"\n                }, void 0, false, {\n                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/components/edit-delete-dialog/edit-delete-dialog.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/components/edit-delete-dialog/edit-delete-dialog.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EditDeleteDialog, \"uvXkIUOq3otW6dfpvZnyYReiuXE=\");\n_c = EditDeleteDialog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditDeleteDialog);\nvar _c;\n$RefreshReg$(_c, \"EditDeleteDialog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9lZGl0LWRlbGV0ZS1kaWFsb2cvZWRpdC1kZWxldGUtZGlhbG9nLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUNMO0FBQzRCO0FBRS9ELE1BQU1JLG1CQUFtQjtRQUFDLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUU7O0lBQ3RELE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQ0s7SUFDekMsTUFBTSxDQUFDSSxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU1XLGtCQUFrQjtRQUN0QkQsYUFBYTtJQUNmO0lBRUEsTUFBTUUsa0JBQWtCO1FBQ3RCLElBQUk7WUFDRixNQUFNWCw0REFBU0EsQ0FBQ0csUUFBUTtnQkFBRUMsT0FBT0U7WUFBUztZQUMxQ0csYUFBYTtZQUNiRyxRQUFRQyxHQUFHLENBQUM7UUFDZCxFQUFFLE9BQU9DLE9BQU87WUFDZEYsUUFBUUUsS0FBSyxDQUFDLHVCQUF1QkE7UUFDdkM7SUFDRjtJQUVBLE1BQU1DLG9CQUFvQjtRQUN4QixJQUFJO1lBQ0YsTUFBTWQsNkRBQVVBLENBQUNFO1lBQ2pCRTtZQUNBTyxRQUFRQyxHQUFHLENBQUM7UUFDZCxFQUFFLE9BQU9DLE9BQU87WUFDZEYsUUFBUUUsS0FBSyxDQUFDLHdCQUF3QkE7UUFDeEM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVO2tCQUNaVCwwQkFDQyw4REFBQ1E7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUNDQyxNQUFLO29CQUNMQyxPQUFPZDtvQkFDUGUsVUFBVSxDQUFDQyxJQUFNZixZQUFZZSxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs4QkFFN0MsOERBQUNJO29CQUFPUCxXQUFVO29CQUFxQlEsU0FBU2Q7OEJBQWlCOzs7Ozs7Ozs7OztzQ0FLbkU7OzhCQUNFLDhEQUFDZTtvQkFBRVQsV0FBVTtvQkFBcUJRLFNBQVNmOzhCQUFpQjs7Ozs7OzhCQUc1RCw4REFBQ2dCO29CQUFFVCxXQUFVO29CQUF1QlEsU0FBU1Y7OEJBQW1COzs7Ozs7Ozs7Ozs7O0FBTzFFO0dBckRNYjtLQUFBQTtBQXVETiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9lZGl0LWRlbGV0ZS1kaWFsb2cvZWRpdC1kZWxldGUtZGlhbG9nLnRzeD84YmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9lZGl0LWRlbGV0ZS1kaWFsb2cuc2Nzcyc7XG5pbXBvcnQgeyBwYXRjaFRvZG8sIGRlbGV0ZVRvZG8gfSBmcm9tICcuLi8uLi91dGlscy9mZXRjaFRvZG9zJztcblxuY29uc3QgRWRpdERlbGV0ZURpYWxvZyA9ICh7IHRvZG9JZCwgdGl0bGUsIHJlZnJlc2hEYXRhIH0pID0+IHtcbiAgY29uc3QgW25ld1RpdGxlLCBzZXROZXdUaXRsZV0gPSB1c2VTdGF0ZSh0aXRsZSk7XG4gIGNvbnN0IFtpc0VkaXRpbmcsIHNldElzRWRpdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlRWRpdENsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldElzRWRpdGluZyh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTYXZlQ2xpY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHBhdGNoVG9kbyh0b2RvSWQsIHsgdGl0bGU6IG5ld1RpdGxlIH0pO1xuICAgICAgc2V0SXNFZGl0aW5nKGZhbHNlKTtcbiAgICAgIGNvbnNvbGUubG9nKCdFZGl0IHN1Y2Nlc3NmdWwnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZWRpdGluZyB0b2RvOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlQ2xpY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRlbGV0ZVRvZG8odG9kb0lkKTtcbiAgICAgIHJlZnJlc2hEYXRhKCk7XG4gICAgICBjb25zb2xlLmxvZygnRGVsZXRlIHN1Y2Nlc3NmdWwnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgdG9kbzonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2RpYWxvZy1jb250YWluZXInPlxuICAgICAge2lzRWRpdGluZyA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VkaXQtZmllbGQnPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgIHZhbHVlPXtuZXdUaXRsZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3VGl0bGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2FjdGlvbi1idXR0b24gc2F2ZScgb25DbGljaz17aGFuZGxlU2F2ZUNsaWNrfT5cbiAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT0nYWN0aW9uLWJ1dHRvbiBlZGl0JyBvbkNsaWNrPXtoYW5kbGVFZGl0Q2xpY2t9PlxuICAgICAgICAgICAgRWRpdFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9J2FjdGlvbi1idXR0b24gZGVsZXRlJyBvbkNsaWNrPXtoYW5kbGVEZWxldGVDbGlja30+XG4gICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXREZWxldGVEaWFsb2c7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInBhdGNoVG9kbyIsImRlbGV0ZVRvZG8iLCJFZGl0RGVsZXRlRGlhbG9nIiwidG9kb0lkIiwidGl0bGUiLCJyZWZyZXNoRGF0YSIsIm5ld1RpdGxlIiwic2V0TmV3VGl0bGUiLCJpc0VkaXRpbmciLCJzZXRJc0VkaXRpbmciLCJoYW5kbGVFZGl0Q2xpY2siLCJoYW5kbGVTYXZlQ2xpY2siLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJoYW5kbGVEZWxldGVDbGljayIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/edit-delete-dialog/edit-delete-dialog.tsx\n"));

/***/ })

});