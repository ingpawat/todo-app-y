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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _edit_delete_dialog_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-delete-dialog.scss */ \"(app-pages-browser)/./src/app/components/edit-delete-dialog/edit-delete-dialog.scss\");\n/* harmony import */ var _utils_fetchTodos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/fetchTodos */ \"(app-pages-browser)/./src/app/utils/fetchTodos.ts\");\n\n\n\n // Make sure to import deleteTodo\nconst EditDeleteDialog = (param)=>{\n    let { todoId, key } = param;\n    console.log(\"pass\", todoId);\n    const handleEditClick = async (todoId)=>{\n        console.log(\"edit\", todoId);\n        try {\n            await (0,_utils_fetchTodos__WEBPACK_IMPORTED_MODULE_3__.putTodo)(todoId, d);\n            console.log(\"Edit successful\");\n        } catch (error) {\n            console.error(\"Error editing todo:\", error);\n        }\n    };\n    const handleDeleteClick = async (todoId)=>{\n        console.log(\"delete\", todoId);\n        try {\n            await (0,_utils_fetchTodos__WEBPACK_IMPORTED_MODULE_3__.deleteTodo)(todoId); // Make sure deleteTodo is defined and implemented\n            console.log(\"Delete successful\");\n        } catch (error) {\n            console.error(\"Error deleting todo:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"dialog-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"edit\",\n                onClick: handleEditClick,\n                children: \"Edit\"\n            }, void 0, false, {\n                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/components/edit-delete-dialog/edit-delete-dialog.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"delete\",\n                onClick: handleDeleteClick,\n                children: \"Delete\"\n            }, void 0, false, {\n                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/components/edit-delete-dialog/edit-delete-dialog.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/components/edit-delete-dialog/edit-delete-dialog.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_c = EditDeleteDialog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditDeleteDialog);\nvar _c;\n$RefreshReg$(_c, \"EditDeleteDialog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9lZGl0LWRlbGV0ZS1kaWFsb2cvZWRpdC1kZWxldGUtZGlhbG9nLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBQ1M7QUFDMEIsQ0FBQyxpQ0FBaUM7QUFFL0YsTUFBTUcsbUJBQW1CO1FBQUMsRUFBRUMsTUFBTSxFQUFFQyxHQUFHLEVBQUU7SUFDckNDLFFBQVFDLEdBQUcsQ0FBQyxRQUFPSDtJQUVyQixNQUFNSSxrQkFBa0IsT0FBT0o7UUFDN0JFLFFBQVFDLEdBQUcsQ0FBQyxRQUFPSDtRQUNuQixJQUFJO1lBQ0YsTUFBTUgsMERBQU9BLENBQUNHLFFBQVFLO1lBQ3RCSCxRQUFRQyxHQUFHLENBQUM7UUFDZCxFQUFFLE9BQU9HLE9BQU87WUFDZEosUUFBUUksS0FBSyxDQUFDLHVCQUF1QkE7UUFDdkM7SUFDRjtJQUVBLE1BQU1DLG9CQUFvQixPQUFPUDtRQUMvQkUsUUFBUUMsR0FBRyxDQUFDLFVBQVNIO1FBQ3JCLElBQUk7WUFDRixNQUFNRiw2REFBVUEsQ0FBQ0UsU0FBUyxrREFBa0Q7WUFDNUVFLFFBQVFDLEdBQUcsQ0FBQztRQUNkLEVBQUUsT0FBT0csT0FBTztZQUNkSixRQUFRSSxLQUFLLENBQUMsd0JBQXdCQTtRQUN4QztJQUNGO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBRUQsV0FBVTtnQkFBT0UsU0FBU1A7MEJBQWlCOzs7Ozs7MEJBRzlDLDhEQUFDTTtnQkFBRUQsV0FBVTtnQkFBU0UsU0FBU0o7MEJBQW1COzs7Ozs7Ozs7Ozs7QUFLeEQ7S0FqQ01SO0FBbUNOLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL2VkaXQtZGVsZXRlLWRpYWxvZy9lZGl0LWRlbGV0ZS1kaWFsb2cudHN4PzhiZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9lZGl0LWRlbGV0ZS1kaWFsb2cuc2Nzcyc7XG5pbXBvcnQgeyBwdXRUb2RvLCBkZWxldGVUb2RvIH0gZnJvbSAnLi4vLi4vdXRpbHMvZmV0Y2hUb2Rvcyc7IC8vIE1ha2Ugc3VyZSB0byBpbXBvcnQgZGVsZXRlVG9kb1xuXG5jb25zdCBFZGl0RGVsZXRlRGlhbG9nID0gKHsgdG9kb0lkLCBrZXkgfSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdwYXNzJyx0b2RvSWQpXG5cbiAgY29uc3QgaGFuZGxlRWRpdENsaWNrID0gYXN5bmMgKHRvZG9JZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdlZGl0Jyx0b2RvSWQpXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHB1dFRvZG8odG9kb0lkLCBkKTtcbiAgICAgIGNvbnNvbGUubG9nKCdFZGl0IHN1Y2Nlc3NmdWwnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZWRpdGluZyB0b2RvOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlQ2xpY2sgPSBhc3luYyAodG9kb0lkKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2RlbGV0ZScsdG9kb0lkKVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBkZWxldGVUb2RvKHRvZG9JZCk7IC8vIE1ha2Ugc3VyZSBkZWxldGVUb2RvIGlzIGRlZmluZWQgYW5kIGltcGxlbWVudGVkXG4gICAgICBjb25zb2xlLmxvZygnRGVsZXRlIHN1Y2Nlc3NmdWwnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgdG9kbzonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2RpYWxvZy1jb250YWluZXInPlxuICAgICAgPGEgY2xhc3NOYW1lPSdlZGl0JyBvbkNsaWNrPXtoYW5kbGVFZGl0Q2xpY2t9PlxuICAgICAgICBFZGl0XG4gICAgICA8L2E+XG4gICAgICA8YSBjbGFzc05hbWU9J2RlbGV0ZScgb25DbGljaz17aGFuZGxlRGVsZXRlQ2xpY2t9PlxuICAgICAgICBEZWxldGVcbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXREZWxldGVEaWFsb2c7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJwdXRUb2RvIiwiZGVsZXRlVG9kbyIsIkVkaXREZWxldGVEaWFsb2ciLCJ0b2RvSWQiLCJrZXkiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRWRpdENsaWNrIiwiZCIsImVycm9yIiwiaGFuZGxlRGVsZXRlQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJhIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/edit-delete-dialog/edit-delete-dialog.tsx\n"));

/***/ })

});