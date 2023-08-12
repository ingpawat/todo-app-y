"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dev",{

/***/ "./src/app/components/edit-delete-dialog/edit-delete-dialog.tsx":
/*!**********************************************************************!*\
  !*** ./src/app/components/edit-delete-dialog/edit-delete-dialog.tsx ***!
  \**********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _edit_delete_dialog_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-delete-dialog.scss */ \"./src/app/components/edit-delete-dialog/edit-delete-dialog.scss\");\n/* harmony import */ var _edit_delete_dialog_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_edit_delete_dialog_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_fetchTodos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/fetchTodos */ \"./src/app/utils/fetchTodos.ts\");\n\n\n\n // Import the necessary functions for editing and deleting\nconst EditDeleteDialog = (param)=>{\n    let { todoId } = param;\n    const handleEditClick = async ()=>{\n        try {\n            // Modify the following code to perform the actual edit operation\n            await (0,_utils_fetchTodos__WEBPACK_IMPORTED_MODULE_3__.putTodo)(todoId);\n            console.log(\"Edit successful\");\n        } catch (error) {\n            console.error(\"Error editing todo:\", error);\n        }\n    };\n    const handleDeleteClick = async ()=>{\n        // Perform the delete operation using deleteTodo\n        try {\n            await (0,_utils_fetchTodos__WEBPACK_IMPORTED_MODULE_3__.deleteTodo)(todoId);\n            console.log(\"Delete successful\");\n        } catch (error) {\n            console.error(\"Error deleting todo:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"edit\",\n                onClick: handleEditClick,\n                children: \"Edit\"\n            }, void 0, false, {\n                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/components/edit-delete-dialog/edit-delete-dialog.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"delete\",\n                onClick: handleDeleteClick,\n                children: \"Delete\"\n            }, void 0, false, {\n                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/components/edit-delete-dialog/edit-delete-dialog.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/components/edit-delete-dialog/edit-delete-dialog.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_c = EditDeleteDialog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditDeleteDialog);\nvar _c;\n$RefreshReg$(_c, \"EditDeleteDialog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1kZWxldGUtZGlhbG9nL2VkaXQtZGVsZXRlLWRpYWxvZy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFDUztBQUMwQixDQUFDLDBEQUEwRDtBQUV4SCxNQUFNRyxtQkFBbUI7UUFBQyxFQUFFQyxNQUFNLEVBQUU7SUFDbEMsTUFBTUMsa0JBQWtCO1FBRXRCLElBQUk7WUFDRixpRUFBaUU7WUFDakUsTUFBTUosMERBQU9BLENBQUNHO1lBQ2RFLFFBQVFDLEdBQUcsQ0FBQztRQUNkLEVBQUUsT0FBT0MsT0FBTztZQUNkRixRQUFRRSxLQUFLLENBQUMsdUJBQXVCQTtRQUN2QztJQUNGO0lBRUEsTUFBTUMsb0JBQW9CO1FBQ3hCLGdEQUFnRDtRQUNoRCxJQUFJO1lBQ0YsTUFBTVAsNkRBQVVBLENBQUNFO1lBQ2pCRSxRQUFRQyxHQUFHLENBQUM7UUFDZCxFQUFFLE9BQU9DLE9BQU87WUFDZEYsUUFBUUUsS0FBSyxDQUFDLHdCQUF3QkE7UUFDeEM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUVELFdBQVU7Z0JBQU9FLFNBQVNSOzBCQUFpQjs7Ozs7OzBCQUc5Qyw4REFBQ087Z0JBQUVELFdBQVU7Z0JBQVNFLFNBQVNKOzBCQUFtQjs7Ozs7Ozs7Ozs7O0FBS3hEO0tBaENNTjtBQWtDTiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9lZGl0LWRlbGV0ZS1kaWFsb2cvZWRpdC1kZWxldGUtZGlhbG9nLnRzeD84YmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vZWRpdC1kZWxldGUtZGlhbG9nLnNjc3MnO1xuaW1wb3J0IHsgcHV0VG9kbywgZGVsZXRlVG9kbyB9IGZyb20gJy4uLy4uL3V0aWxzL2ZldGNoVG9kb3MnOyAvLyBJbXBvcnQgdGhlIG5lY2Vzc2FyeSBmdW5jdGlvbnMgZm9yIGVkaXRpbmcgYW5kIGRlbGV0aW5nXG5cbmNvbnN0IEVkaXREZWxldGVEaWFsb2cgPSAoeyB0b2RvSWQgfSkgPT4ge1xuICBjb25zdCBoYW5kbGVFZGl0Q2xpY2sgPSBhc3luYyAoKSA9PiB7XG5cbiAgICB0cnkge1xuICAgICAgLy8gTW9kaWZ5IHRoZSBmb2xsb3dpbmcgY29kZSB0byBwZXJmb3JtIHRoZSBhY3R1YWwgZWRpdCBvcGVyYXRpb25cbiAgICAgIGF3YWl0IHB1dFRvZG8odG9kb0lkLCAvKiBVcGRhdGVkIHRvZG8gZGF0YSAqLyk7XG4gICAgICBjb25zb2xlLmxvZygnRWRpdCBzdWNjZXNzZnVsJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGVkaXRpbmcgdG9kbzonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vIFBlcmZvcm0gdGhlIGRlbGV0ZSBvcGVyYXRpb24gdXNpbmcgZGVsZXRlVG9kb1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBkZWxldGVUb2RvKHRvZG9JZCk7XG4gICAgICBjb25zb2xlLmxvZygnRGVsZXRlIHN1Y2Nlc3NmdWwnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgdG9kbzonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICA8YSBjbGFzc05hbWU9J2VkaXQnIG9uQ2xpY2s9e2hhbmRsZUVkaXRDbGlja30+XG4gICAgICAgIEVkaXRcbiAgICAgIDwvYT5cbiAgICAgIDxhIGNsYXNzTmFtZT0nZGVsZXRlJyBvbkNsaWNrPXtoYW5kbGVEZWxldGVDbGlja30+XG4gICAgICAgIERlbGV0ZVxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRWRpdERlbGV0ZURpYWxvZztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInB1dFRvZG8iLCJkZWxldGVUb2RvIiwiRWRpdERlbGV0ZURpYWxvZyIsInRvZG9JZCIsImhhbmRsZUVkaXRDbGljayIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImhhbmRsZURlbGV0ZUNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiYSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/components/edit-delete-dialog/edit-delete-dialog.tsx\n"));

/***/ })

});