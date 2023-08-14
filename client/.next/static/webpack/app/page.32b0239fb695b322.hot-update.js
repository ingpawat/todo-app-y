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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _edit_delete_dialog_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-delete-dialog.scss */ \"(app-pages-browser)/./src/app/components/edit-delete-dialog/edit-delete-dialog.scss\");\n/* harmony import */ var _utils_fetchTodos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/fetchTodos */ \"(app-pages-browser)/./src/app/utils/fetchTodos.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst EditDeleteDialog = (param)=>{\n    let { todoId, title, refreshData } = param;\n    _s();\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleEditClick = ()=>{\n        setIsEditing(true);\n    };\n    const handleSaveClick = async ()=>{\n        try {\n            await (0,_utils_fetchTodos__WEBPACK_IMPORTED_MODULE_3__.patchTodo)(todoId, {\n                title: newTitle\n            });\n            setIsEditing(false);\n            refreshData();\n        } catch (error) {\n            console.error(\"Error editing todo:\", error);\n        }\n    };\n    const handleDeleteClick = async ()=>{\n        try {\n            await (0,_utils_fetchTodos__WEBPACK_IMPORTED_MODULE_3__.deleteTodo)(todoId);\n            refreshData();\n        } catch (error) {\n            console.error(\"Error deleting todo:\", error);\n        }\n    };\n    const handleKeyDown = (e)=>{\n        if (e.key === \"Enter\") {\n            e.preventDefault();\n            handleSaveClick();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"dialog-container \".concat(isEditing ? \"\" : \"edit-input-container\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"action-buttons\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"action-button edit\",\n                    onClick: handleEditClick,\n                    children: \"Edit\"\n                }, void 0, false, {\n                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/components/edit-delete-dialog/edit-delete-dialog.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"action-button delete\",\n                    onClick: handleDeleteClick,\n                    children: \"Delete\"\n                }, void 0, false, {\n                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/components/edit-delete-dialog/edit-delete-dialog.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/components/edit-delete-dialog/edit-delete-dialog.tsx\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/components/edit-delete-dialog/edit-delete-dialog.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EditDeleteDialog, \"N4qUVpaen/rROL8jPu/4huFD8lA=\");\n_c = EditDeleteDialog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditDeleteDialog);\nvar _c;\n$RefreshReg$(_c, \"EditDeleteDialog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9lZGl0LWRlbGV0ZS1kaWFsb2cvZWRpdC1kZWxldGUtZGlhbG9nLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUNMO0FBQzRCO0FBRS9ELE1BQU1JLG1CQUFtQjtRQUFDLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUU7O0lBRXRELE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNUyxrQkFBa0I7UUFDdEJELGFBQWE7SUFDZjtJQUVBLE1BQU1FLGtCQUFrQjtRQUN0QixJQUFJO1lBQ0YsTUFBTVQsNERBQVNBLENBQUNHLFFBQVE7Z0JBQUVDLE9BQU9NO1lBQVM7WUFDMUNILGFBQWE7WUFDYkY7UUFDRixFQUFFLE9BQU9NLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHVCQUF1QkE7UUFDdkM7SUFDRjtJQUVBLE1BQU1FLG9CQUFvQjtRQUN4QixJQUFJO1lBQ0YsTUFBTVosNkRBQVVBLENBQUNFO1lBQ2pCRTtRQUNGLEVBQUUsT0FBT00sT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtRQUN4QztJQUNGO0lBRUEsTUFBTUcsZ0JBQWdCLENBQUNDO1FBQ3JCLElBQUlBLEVBQUVDLEdBQUcsS0FBSyxTQUFTO1lBQ3JCRCxFQUFFRSxjQUFjO1lBQ2hCUjtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVyxvQkFBNEQsT0FBeENiLFlBQVksS0FBSztrQkFDbkQsNEVBQUNZO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBRUQsV0FBVTtvQkFBcUJFLFNBQVNiOzhCQUFpQjs7Ozs7OzhCQUc1RCw4REFBQ1k7b0JBQUVELFdBQVU7b0JBQXVCRSxTQUFTUjs4QkFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhFO0dBOUNNWDtLQUFBQTtBQWdETiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9lZGl0LWRlbGV0ZS1kaWFsb2cvZWRpdC1kZWxldGUtZGlhbG9nLnRzeD84YmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9lZGl0LWRlbGV0ZS1kaWFsb2cuc2Nzcyc7XG5pbXBvcnQgeyBwYXRjaFRvZG8sIGRlbGV0ZVRvZG8gfSBmcm9tICcuLi8uLi91dGlscy9mZXRjaFRvZG9zJztcblxuY29uc3QgRWRpdERlbGV0ZURpYWxvZyA9ICh7IHRvZG9JZCwgdGl0bGUsIHJlZnJlc2hEYXRhIH0pID0+IHtcblxuICBjb25zdCBbaXNFZGl0aW5nLCBzZXRJc0VkaXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUVkaXRDbGljayA9ICgpID0+IHtcbiAgICBzZXRJc0VkaXRpbmcodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2F2ZUNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBwYXRjaFRvZG8odG9kb0lkLCB7IHRpdGxlOiBuZXdUaXRsZSB9KTtcbiAgICAgIHNldElzRWRpdGluZyhmYWxzZSk7XG4gICAgICByZWZyZXNoRGF0YSgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBlZGl0aW5nIHRvZG86JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVDbGljayA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGVsZXRlVG9kbyh0b2RvSWQpO1xuICAgICAgcmVmcmVzaERhdGEoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgdG9kbzonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaGFuZGxlU2F2ZUNsaWNrKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BkaWFsb2ctY29udGFpbmVyICR7aXNFZGl0aW5nID8gJycgOiAnZWRpdC1pbnB1dC1jb250YWluZXInfWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24tYnV0dG9uc1wiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJhY3Rpb24tYnV0dG9uIGVkaXRcIiBvbkNsaWNrPXtoYW5kbGVFZGl0Q2xpY2t9PlxuICAgICAgICAgIEVkaXRcbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJhY3Rpb24tYnV0dG9uIGRlbGV0ZVwiIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZUNsaWNrfT5cbiAgICAgICAgICBEZWxldGVcbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFZGl0RGVsZXRlRGlhbG9nO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJwYXRjaFRvZG8iLCJkZWxldGVUb2RvIiwiRWRpdERlbGV0ZURpYWxvZyIsInRvZG9JZCIsInRpdGxlIiwicmVmcmVzaERhdGEiLCJpc0VkaXRpbmciLCJzZXRJc0VkaXRpbmciLCJoYW5kbGVFZGl0Q2xpY2siLCJoYW5kbGVTYXZlQ2xpY2siLCJuZXdUaXRsZSIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZURlbGV0ZUNsaWNrIiwiaGFuZGxlS2V5RG93biIsImUiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsImNsYXNzTmFtZSIsImEiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/edit-delete-dialog/edit-delete-dialog.tsx\n"));

/***/ })

});