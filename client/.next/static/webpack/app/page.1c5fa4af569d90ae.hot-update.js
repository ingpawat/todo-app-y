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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _edit_delete_dialog_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-delete-dialog.scss */ \"(app-pages-browser)/./src/app/components/edit-delete-dialog/edit-delete-dialog.scss\");\n/* harmony import */ var _utils_fetchTodos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/fetchTodos */ \"(app-pages-browser)/./src/app/utils/fetchTodos.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst EditDeleteDialog = (param)=>{\n    let { todoId, title, refreshData } = param;\n    _s();\n    const [newTitle, setNewTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(title);\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const fetchData = async ()=>{\n        try {\n            await (0,_utils_fetchTodos__WEBPACK_IMPORTED_MODULE_3__.getAllTodo)();\n        } catch (error) {\n            console.error(\"Error fetching todos:\", error);\n        }\n    };\n    const handleEditClick = async ()=>{\n        setIsEditing(true);\n        fetchData();\n    };\n    const handleSaveClick = async ()=>{\n        try {\n            await (0,_utils_fetchTodos__WEBPACK_IMPORTED_MODULE_3__.patchTodo)(todoId, {\n                title: newTitle\n            });\n            setIsEditing(false);\n            console.log(\"Edit successful\");\n            refreshData(); // Refresh the data here\n        } catch (error) {\n            console.error(\"Error editing todo:\", error);\n        }\n    };\n    const handleDeleteClick = async ()=>{\n        try {\n            await (0,_utils_fetchTodos__WEBPACK_IMPORTED_MODULE_3__.deleteTodo)(todoId);\n            console.log(\"Delete successful\");\n            await fetchData();\n            console.log(\"Fetch successful after delete\");\n        } catch (error) {\n            console.error(\"Error deleting todo:\", error);\n        }\n    };\n    const handleKeyDown = async (e)=>{\n        if (e.key === \"Enter\") {\n            e.preventDefault();\n            await handleSaveClick();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"dialog-container \".concat(isEditing ? \"\" : \"edit-input-container\"),\n        children: isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"edit-field\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                className: \"edit-input\",\n                value: newTitle,\n                onChange: (e)=>setNewTitle(e.target.value),\n                onKeyDown: handleKeyDown\n            }, void 0, false, {\n                fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/components/edit-delete-dialog/edit-delete-dialog.tsx\",\n                lineNumber: 55,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/components/edit-delete-dialog/edit-delete-dialog.tsx\",\n            lineNumber: 54,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"action-button edit\",\n                    onClick: handleEditClick,\n                    children: \"Edit\"\n                }, void 0, false, {\n                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/components/edit-delete-dialog/edit-delete-dialog.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"action-button delete\",\n                    onClick: handleDeleteClick,\n                    children: \"Delete\"\n                }, void 0, false, {\n                    fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/components/edit-delete-dialog/edit-delete-dialog.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/ingpawat/todo-app-ingpawat/client/src/app/components/edit-delete-dialog/edit-delete-dialog.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EditDeleteDialog, \"uvXkIUOq3otW6dfpvZnyYReiuXE=\");\n_c = EditDeleteDialog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditDeleteDialog);\nvar _c;\n$RefreshReg$(_c, \"EditDeleteDialog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9lZGl0LWRlbGV0ZS1kaWFsb2cvZWRpdC1kZWxldGUtZGlhbG9nLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUNMO0FBQ3dDO0FBRTNFLE1BQU1LLG1CQUFtQjtRQUFDLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUU7O0lBQ3RELE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQ007SUFDekMsTUFBTSxDQUFDSSxXQUFXQyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU1ZLFlBQVk7UUFDaEIsSUFBSTtZQUNGLE1BQU1ULDZEQUFVQTtRQUNsQixFQUFFLE9BQU9VLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHlCQUF5QkE7UUFDekM7SUFDRjtJQUVBLE1BQU1FLGtCQUFrQjtRQUN0QkosYUFBYTtRQUNiQztJQUNGO0lBRUEsTUFBTUksa0JBQWtCO1FBQ3RCLElBQUk7WUFDRixNQUFNZiw0REFBU0EsQ0FBQ0ksUUFBUTtnQkFBRUMsT0FBT0U7WUFBUztZQUMxQ0csYUFBYTtZQUNiRyxRQUFRRyxHQUFHLENBQUM7WUFDWlYsZUFBZSx3QkFBd0I7UUFDekMsRUFBRSxPQUFPTSxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyx1QkFBdUJBO1FBQ3ZDO0lBQ0Y7SUFFQSxNQUFNSyxvQkFBb0I7UUFDeEIsSUFBSTtZQUNGLE1BQU1oQiw2REFBVUEsQ0FBQ0c7WUFDakJTLFFBQVFHLEdBQUcsQ0FBQztZQUNaLE1BQU1MO1lBQ05FLFFBQVFHLEdBQUcsQ0FBQztRQUNkLEVBQUUsT0FBT0osT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtRQUN4QztJQUNGO0lBRUEsTUFBTU0sZ0JBQWdCLE9BQU9DO1FBQzNCLElBQUlBLEVBQUVDLEdBQUcsS0FBSyxTQUFTO1lBQ3JCRCxFQUFFRSxjQUFjO1lBQ2hCLE1BQU1OO1FBQ1I7SUFDRjtJQUVBLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFXLG9CQUE0RCxPQUF4Q2QsWUFBWSxLQUFLO2tCQUNsREEsMEJBQ0MsOERBQUNhO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNDO2dCQUNDQyxNQUFLO2dCQUNMRixXQUFVO2dCQUNWRyxPQUFPbkI7Z0JBQ1BvQixVQUFVLENBQUNSLElBQU1YLFlBQVlXLEVBQUVTLE1BQU0sQ0FBQ0YsS0FBSztnQkFDM0NHLFdBQVdYOzs7Ozs7Ozs7O3NDQUlmOzs4QkFDRSw4REFBQ1k7b0JBQUVQLFdBQVU7b0JBQXFCUSxTQUFTakI7OEJBQWlCOzs7Ozs7OEJBRzVELDhEQUFDZ0I7b0JBQUVQLFdBQVU7b0JBQXVCUSxTQUFTZDs4QkFBbUI7Ozs7Ozs7Ozs7Ozs7QUFPMUU7R0F0RU1kO0tBQUFBO0FBd0VOLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL2VkaXQtZGVsZXRlLWRpYWxvZy9lZGl0LWRlbGV0ZS1kaWFsb2cudHN4PzhiZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL2VkaXQtZGVsZXRlLWRpYWxvZy5zY3NzJztcbmltcG9ydCB7IHBhdGNoVG9kbywgZGVsZXRlVG9kbywgZ2V0QWxsVG9kbyB9IGZyb20gJy4uLy4uL3V0aWxzL2ZldGNoVG9kb3MnO1xuXG5jb25zdCBFZGl0RGVsZXRlRGlhbG9nID0gKHsgdG9kb0lkLCB0aXRsZSwgcmVmcmVzaERhdGEgfSkgPT4ge1xuICBjb25zdCBbbmV3VGl0bGUsIHNldE5ld1RpdGxlXSA9IHVzZVN0YXRlKHRpdGxlKTtcbiAgY29uc3QgW2lzRWRpdGluZywgc2V0SXNFZGl0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGdldEFsbFRvZG8oKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdG9kb3M6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVFZGl0Q2xpY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0SXNFZGl0aW5nKHRydWUpO1xuICAgIGZldGNoRGF0YSgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNhdmVDbGljayA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgcGF0Y2hUb2RvKHRvZG9JZCwgeyB0aXRsZTogbmV3VGl0bGUgfSk7XG4gICAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xuICAgICAgY29uc29sZS5sb2coJ0VkaXQgc3VjY2Vzc2Z1bCcpO1xuICAgICAgcmVmcmVzaERhdGEoKTsgLy8gUmVmcmVzaCB0aGUgZGF0YSBoZXJlXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGVkaXRpbmcgdG9kbzonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBkZWxldGVUb2RvKHRvZG9JZCk7XG4gICAgICBjb25zb2xlLmxvZygnRGVsZXRlIHN1Y2Nlc3NmdWwnKTtcbiAgICAgIGF3YWl0IGZldGNoRGF0YSgpOyBcbiAgICAgIGNvbnNvbGUubG9nKCdGZXRjaCBzdWNjZXNzZnVsIGFmdGVyIGRlbGV0ZScpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyB0b2RvOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IGFzeW5jIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBhd2FpdCBoYW5kbGVTYXZlQ2xpY2soKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGRpYWxvZy1jb250YWluZXIgJHtpc0VkaXRpbmcgPyAnJyA6ICdlZGl0LWlucHV0LWNvbnRhaW5lcid9YH0+XG4gICAgICB7aXNFZGl0aW5nID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXQtZmllbGRcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXQtaW5wdXRcIlxuICAgICAgICAgICAgdmFsdWU9e25ld1RpdGxlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdUaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBvbktleURvd249e2hhbmRsZUtleURvd259XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFjdGlvbi1idXR0b24gZWRpdFwiIG9uQ2xpY2s9e2hhbmRsZUVkaXRDbGlja30+XG4gICAgICAgICAgICBFZGl0XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFjdGlvbi1idXR0b24gZGVsZXRlXCIgb25DbGljaz17aGFuZGxlRGVsZXRlQ2xpY2t9PlxuICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFZGl0RGVsZXRlRGlhbG9nO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJwYXRjaFRvZG8iLCJkZWxldGVUb2RvIiwiZ2V0QWxsVG9kbyIsIkVkaXREZWxldGVEaWFsb2ciLCJ0b2RvSWQiLCJ0aXRsZSIsInJlZnJlc2hEYXRhIiwibmV3VGl0bGUiLCJzZXROZXdUaXRsZSIsImlzRWRpdGluZyIsInNldElzRWRpdGluZyIsImZldGNoRGF0YSIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZUVkaXRDbGljayIsImhhbmRsZVNhdmVDbGljayIsImxvZyIsImhhbmRsZURlbGV0ZUNsaWNrIiwiaGFuZGxlS2V5RG93biIsImUiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJvbktleURvd24iLCJhIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/edit-delete-dialog/edit-delete-dialog.tsx\n"));

/***/ })

});