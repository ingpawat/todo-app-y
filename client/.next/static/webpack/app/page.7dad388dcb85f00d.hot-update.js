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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handler; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nconst BASE_URL = \"http://localhost:3001\"; // Update with your API base URL\nasync function handler(req, res) {\n    const todoId = parseInt(req.query.id, 10);\n    switch(req.method){\n        case \"GET\":\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\".concat(BASE_URL, \"/todos/\").concat(todoId));\n                const todo = response.data;\n                res.status(200).json(todo);\n            } catch (error) {\n                res.status(404).json({\n                    message: \"Todo not found\"\n                });\n            }\n            break;\n        case \"PUT\":\n            // Handle PUT request here\n            try {\n                const updatedTodo = req.body; // Assuming you're sending the updated todo in the request body\n                const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].put(\"\".concat(BASE_URL, \"/todos/\").concat(todoId), updatedTodo);\n                res.status(200).json(response.data);\n            } catch (error) {\n                res.status(500).json({\n                    message: \"Error updating todo\"\n                });\n            }\n            break;\n        case \"PATCH\":\n            // Handle PATCH request here\n            try {\n                const updatedFields = req.body; // Assuming you're sending the updated fields in the request body\n                const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].patch(\"\".concat(BASE_URL, \"/todos/\").concat(todoId), updatedFields);\n                res.status(200).json(response.data);\n            } catch (error) {\n                res.status(500).json({\n                    message: \"Error updating todo\"\n                });\n            }\n            break;\n        case \"DELETE\":\n            // Handle DELETE request here\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].delete(\"\".concat(BASE_URL, \"/todos/\").concat(todoId));\n                res.status(204).end();\n            } catch (error) {\n                res.status(500).json({\n                    message: \"Error deleting todo\"\n                });\n            }\n            break;\n        default:\n            res.status(405).json({\n                message: \"Method not allowed\"\n            });\n            break;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdXRpbHMvZmV0Y2hUb2Rvcy50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUMwQjtBQUUxQixNQUFNQyxXQUFXLHlCQUF5QixnQ0FBZ0M7QUFFM0QsZUFBZUMsUUFBUUMsR0FBbUIsRUFBRUMsR0FBb0I7SUFDN0UsTUFBTUMsU0FBU0MsU0FBU0gsSUFBSUksS0FBSyxDQUFDQyxFQUFFLEVBQVk7SUFFaEQsT0FBUUwsSUFBSU0sTUFBTTtRQUNoQixLQUFLO1lBQ0gsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1WLDZDQUFLQSxDQUFDVyxHQUFHLENBQUMsR0FBcUJOLE9BQWxCSixVQUFTLFdBQWdCLE9BQVBJO2dCQUN0RCxNQUFNTyxPQUFPRixTQUFTRyxJQUFJO2dCQUMxQlQsSUFBSVUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0g7WUFDdkIsRUFBRSxPQUFPSSxPQUFPO2dCQUNkWixJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFRSxTQUFTO2dCQUFpQjtZQUNuRDtZQUNBO1FBRUYsS0FBSztZQUNILDBCQUEwQjtZQUMxQixJQUFJO2dCQUNGLE1BQU1DLGNBQWNmLElBQUlnQixJQUFJLEVBQUUsK0RBQStEO2dCQUM3RixNQUFNVCxXQUFXLE1BQU1WLDZDQUFLQSxDQUFDb0IsR0FBRyxDQUFDLEdBQXFCZixPQUFsQkosVUFBUyxXQUFnQixPQUFQSSxTQUFVYTtnQkFDaEVkLElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNMLFNBQVNHLElBQUk7WUFDcEMsRUFBRSxPQUFPRyxPQUFPO2dCQUNkWixJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFRSxTQUFTO2dCQUFzQjtZQUN4RDtZQUNBO1FBRUYsS0FBSztZQUNILDRCQUE0QjtZQUM1QixJQUFJO2dCQUNGLE1BQU1JLGdCQUFnQmxCLElBQUlnQixJQUFJLEVBQUUsaUVBQWlFO2dCQUNqRyxNQUFNVCxXQUFXLE1BQU1WLDZDQUFLQSxDQUFDc0IsS0FBSyxDQUFDLEdBQXFCakIsT0FBbEJKLFVBQVMsV0FBZ0IsT0FBUEksU0FBVWdCO2dCQUNsRWpCLElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNMLFNBQVNHLElBQUk7WUFDcEMsRUFBRSxPQUFPRyxPQUFPO2dCQUNkWixJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFRSxTQUFTO2dCQUFzQjtZQUN4RDtZQUNBO1FBRUYsS0FBSztZQUNILDZCQUE2QjtZQUM3QixJQUFJO2dCQUNGLE1BQU1QLFdBQVcsTUFBTVYsNkNBQUtBLENBQUN1QixNQUFNLENBQUMsR0FBcUJsQixPQUFsQkosVUFBUyxXQUFnQixPQUFQSTtnQkFDekRELElBQUlVLE1BQU0sQ0FBQyxLQUFLVSxHQUFHO1lBQ3JCLEVBQUUsT0FBT1IsT0FBTztnQkFDZFosSUFBSVUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUUsU0FBUztnQkFBc0I7WUFDeEQ7WUFDQTtRQUVGO1lBQ0ViLElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVFLFNBQVM7WUFBcUI7WUFDckQ7SUFDSjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdXRpbHMvZmV0Y2hUb2Rvcy50cz84MGE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IEJBU0VfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMSc7IC8vIFVwZGF0ZSB3aXRoIHlvdXIgQVBJIGJhc2UgVVJMXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgY29uc3QgdG9kb0lkID0gcGFyc2VJbnQocmVxLnF1ZXJ5LmlkIGFzIHN0cmluZywgMTApO1xuXG4gIHN3aXRjaCAocmVxLm1ldGhvZCkge1xuICAgIGNhc2UgJ0dFVCc6XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtCQVNFX1VSTH0vdG9kb3MvJHt0b2RvSWR9YCk7XG4gICAgICAgIGNvbnN0IHRvZG8gPSByZXNwb25zZS5kYXRhO1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih0b2RvKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ1RvZG8gbm90IGZvdW5kJyB9KTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFVUJzpcbiAgICAgIC8vIEhhbmRsZSBQVVQgcmVxdWVzdCBoZXJlXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB1cGRhdGVkVG9kbyA9IHJlcS5ib2R5OyAvLyBBc3N1bWluZyB5b3UncmUgc2VuZGluZyB0aGUgdXBkYXRlZCB0b2RvIGluIHRoZSByZXF1ZXN0IGJvZHlcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wdXQoYCR7QkFTRV9VUkx9L3RvZG9zLyR7dG9kb0lkfWAsIHVwZGF0ZWRUb2RvKTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdFcnJvciB1cGRhdGluZyB0b2RvJyB9KTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUEFUQ0gnOlxuICAgICAgLy8gSGFuZGxlIFBBVENIIHJlcXVlc3QgaGVyZVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXBkYXRlZEZpZWxkcyA9IHJlcS5ib2R5OyAvLyBBc3N1bWluZyB5b3UncmUgc2VuZGluZyB0aGUgdXBkYXRlZCBmaWVsZHMgaW4gdGhlIHJlcXVlc3QgYm9keVxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBhdGNoKGAke0JBU0VfVVJMfS90b2Rvcy8ke3RvZG9JZH1gLCB1cGRhdGVkRmllbGRzKTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdFcnJvciB1cGRhdGluZyB0b2RvJyB9KTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnREVMRVRFJzpcbiAgICAgIC8vIEhhbmRsZSBERUxFVEUgcmVxdWVzdCBoZXJlXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShgJHtCQVNFX1VSTH0vdG9kb3MvJHt0b2RvSWR9YCk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjA0KS5lbmQoKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ0Vycm9yIGRlbGV0aW5nIHRvZG8nIH0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiAnTWV0aG9kIG5vdCBhbGxvd2VkJyB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJCQVNFX1VSTCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ0b2RvSWQiLCJwYXJzZUludCIsInF1ZXJ5IiwiaWQiLCJtZXRob2QiLCJyZXNwb25zZSIsImdldCIsInRvZG8iLCJkYXRhIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibWVzc2FnZSIsInVwZGF0ZWRUb2RvIiwiYm9keSIsInB1dCIsInVwZGF0ZWRGaWVsZHMiLCJwYXRjaCIsImRlbGV0ZSIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/utils/fetchTodos.ts\n"));

/***/ })

});