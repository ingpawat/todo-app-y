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

/***/ "(app-pages-browser)/./src/app/utils/fetchTodos.ts":
/*!*************************************!*\
  !*** ./src/app/utils/fetchTodos.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteTodo: function() { return /* binding */ deleteTodo; },\n/* harmony export */   getAllTodo: function() { return /* binding */ getAllTodo; },\n/* harmony export */   getTodoId: function() { return /* binding */ getTodoId; },\n/* harmony export */   patchTodo: function() { return /* binding */ patchTodo; },\n/* harmony export */   putTodo: function() { return /* binding */ putTodo; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nconst BASE_URL = \"http://localhost:3001\";\nasync function getAllTodo() {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\".concat(BASE_URL, \"/todos\"));\n        return response.data;\n    } catch (error) {\n        throw new Error(\"Error while fetching all todos\");\n    }\n}\nasync function getTodoId(todoId) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\".concat(BASE_URL, \"/todos/\").concat(todoId));\n        return response.data;\n    } catch (error) {\n        throw new Error(\"Error while fetching a todo by ID\");\n    }\n}\nasync function putTodo(todoId, updatedTodo) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].put(\"\".concat(BASE_URL, \"/todos/\").concat(todoId));\n        return response.data;\n    } catch (error) {\n        throw new Error(\"Error while updating a todo\");\n    }\n}\nasync function patchTodo(todoId, updatedFields) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].patch(\"\".concat(BASE_URL, \"/todos/\").concat(todoId), updatedFields);\n        return response.data;\n    } catch (error) {\n        throw new Error(\"Error while partially updating a todo\");\n    }\n}\nasync function deleteTodo(todoId) {\n    try {\n        await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].delete(\"\".concat(BASE_URL, \"/todos/\").concat(todoId));\n    } catch (error) {\n        throw new Error(\"Error while deleting a todo\");\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdXRpbHMvZmV0Y2hUb2Rvcy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFFMUIsTUFBTUMsV0FBVztBQUVWLGVBQWVDO0lBQ3BCLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1ILDZDQUFLQSxDQUFDSSxHQUFHLENBQUMsR0FBWSxPQUFUSCxVQUFTO1FBQzdDLE9BQU9FLFNBQVNFLElBQUk7SUFDdEIsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0FBQ0Y7QUFFTyxlQUFlQyxVQUFVQyxNQUFjO0lBQzVDLElBQUk7UUFDRixNQUFNTixXQUFXLE1BQU1ILDZDQUFLQSxDQUFDSSxHQUFHLENBQUMsR0FBcUJLLE9BQWxCUixVQUFTLFdBQWdCLE9BQVBRO1FBQ3RELE9BQU9OLFNBQVNFLElBQUk7SUFDdEIsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0FBQ0Y7QUFFTyxlQUFlRyxRQUFRRCxNQUFXLEVBQUVFLFdBQW1CO0lBQzVELElBQUk7UUFDRixNQUFNUixXQUFXLE1BQU1ILDZDQUFLQSxDQUFDWSxHQUFHLENBQUMsR0FBcUJILE9BQWxCUixVQUFTLFdBQWdCLE9BQVBRO1FBQ3RELE9BQU9OLFNBQVNFLElBQUk7SUFDdEIsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0FBQ0Y7QUFFTyxlQUFlTSxVQUFVSixNQUFjLEVBQUVLLGFBQXFCO0lBQ25FLElBQUk7UUFDRixNQUFNWCxXQUFXLE1BQU1ILDZDQUFLQSxDQUFDZSxLQUFLLENBQUMsR0FBcUJOLE9BQWxCUixVQUFTLFdBQWdCLE9BQVBRLFNBQVVLO1FBQ2xFLE9BQU9YLFNBQVNFLElBQUk7SUFDdEIsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0FBQ0Y7QUFFTyxlQUFlUyxXQUFXUCxNQUFjO0lBQzdDLElBQUk7UUFDRixNQUFNVCw2Q0FBS0EsQ0FBQ2lCLE1BQU0sQ0FBQyxHQUFxQlIsT0FBbEJSLFVBQVMsV0FBZ0IsT0FBUFE7SUFDMUMsRUFBRSxPQUFPSCxPQUFPO1FBQ2QsTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC91dGlscy9mZXRjaFRvZG9zLnRzPzgwYTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgQkFTRV9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAxJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFRvZG8oKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7QkFTRV9VUkx9L3RvZG9zYCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciB3aGlsZSBmZXRjaGluZyBhbGwgdG9kb3MnKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9kb0lkKHRvZG9JZDogbnVtYmVyKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7QkFTRV9VUkx9L3RvZG9zLyR7dG9kb0lkfWApO1xuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IG5ldyBFcnJvcignRXJyb3Igd2hpbGUgZmV0Y2hpbmcgYSB0b2RvIGJ5IElEJyk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHB1dFRvZG8odG9kb0lkOiBhbnksIHVwZGF0ZWRUb2RvOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnB1dChgJHtCQVNFX1VSTH0vdG9kb3MvJHt0b2RvSWR9YCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciB3aGlsZSB1cGRhdGluZyBhIHRvZG8nKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGF0Y2hUb2RvKHRvZG9JZDogbnVtYmVyLCB1cGRhdGVkRmllbGRzOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBhdGNoKGAke0JBU0VfVVJMfS90b2Rvcy8ke3RvZG9JZH1gLCB1cGRhdGVkRmllbGRzKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIHdoaWxlIHBhcnRpYWxseSB1cGRhdGluZyBhIHRvZG8nKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlVG9kbyh0b2RvSWQ6IG51bWJlcikge1xuICB0cnkge1xuICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShgJHtCQVNFX1VSTH0vdG9kb3MvJHt0b2RvSWR9YCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciB3aGlsZSBkZWxldGluZyBhIHRvZG8nKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiQkFTRV9VUkwiLCJnZXRBbGxUb2RvIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiZXJyb3IiLCJFcnJvciIsImdldFRvZG9JZCIsInRvZG9JZCIsInB1dFRvZG8iLCJ1cGRhdGVkVG9kbyIsInB1dCIsInBhdGNoVG9kbyIsInVwZGF0ZWRGaWVsZHMiLCJwYXRjaCIsImRlbGV0ZVRvZG8iLCJkZWxldGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/utils/fetchTodos.ts\n"));

/***/ })

});