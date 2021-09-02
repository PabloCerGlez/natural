(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/@material-ui/icons/Delete.js":
/*!***************************************************!*\
  !*** ./node_modules/@material-ui/icons/Delete.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}), 'Delete');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@react-page/ui/lib-es/EditorUI/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@react-page/ui/lib-es/EditorUI/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DisplayModeToggle_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DisplayModeToggle/index */ "./node_modules/@react-page/ui/lib-es/DisplayModeToggle/index.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ThemeProvider */ "./node_modules/@react-page/ui/lib-es/ThemeProvider/index.js");
/* harmony import */ var _PluginDrawer_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PluginDrawer/index */ "./node_modules/@react-page/ui/lib-es/PluginDrawer/index.js");
/* harmony import */ var _Trash_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Trash/index */ "./node_modules/@react-page/ui/lib-es/Trash/index.js");





/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_a) {
    var _b = _a.stickyNess, stickyNess = _b === void 0 ? {
        shouldStickToTop: false,
        shouldStickToBottom: false,
        rightOffset: 0,
    } : _b, _c = _a.hideEditorSidebar, hideEditorSidebar = _c === void 0 ? false : _c;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Trash_index__WEBPACK_IMPORTED_MODULE_4__["default"], null),
        !hideEditorSidebar && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DisplayModeToggle_index__WEBPACK_IMPORTED_MODULE_1__["default"], { stickyNess: stickyNess }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PluginDrawer_index__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@react-page/ui/lib-es/ThemeProvider/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@react-page/ui/lib-es/ThemeProvider/index.js ***!
  \*******************************************************************/
/*! exports provided: darkTheme, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _DarkTheme_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DarkTheme/index */ "./node_modules/@react-page/ui/lib-es/ThemeProvider/DarkTheme/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "darkTheme", function() { return _DarkTheme_index__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _themeOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./themeOptions */ "./node_modules/@react-page/ui/lib-es/ThemeProvider/themeOptions.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var generateClassName = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["createGenerateClassName"])({
    disableGlobal: true,
    productionPrefix: 'ory',
});
var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createMuiTheme"])(_themeOptions__WEBPACK_IMPORTED_MODULE_4__["themeOptions"]);
var ThemeProvider = /** @class */ (function (_super) {
    __extends(ThemeProvider, _super);
    function ThemeProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThemeProvider.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["StylesProvider"], { injectFirst: true, generateClassName: generateClassName },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], { theme: this.props.theme || theme }, this.props.children)));
    };
    return ThemeProvider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (ThemeProvider);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@react-page/ui/lib-es/ThemeProvider/themeOptions.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@react-page/ui/lib-es/ThemeProvider/themeOptions.js ***!
  \**************************************************************************/
/*! exports provided: themeOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeOptions", function() { return themeOptions; });
var themeOptions = {};
//# sourceMappingURL=themeOptions.js.map

/***/ }),

/***/ "./node_modules/@react-page/ui/lib-es/Trash/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@react-page/ui/lib-es/Trash/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_page_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-page/core */ "./node_modules/@react-page/core/lib-es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);






var target = {
    hover: lodash_throttle__WEBPACK_IMPORTED_MODULE_4___default()(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function (props, monitor) {
        var item = monitor.getItem();
        if (monitor.isOver({ shallow: true })) {
            item.clearHover();
        }
    }, 200, { trailing: false }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    drop: function (props, monitor) {
        var item = monitor.getItem();
        if (monitor.didDrop() || !monitor.isOver({ shallow: true })) {
            // If the item drop occurred deeper down the tree, don't do anything
            return;
        }
        props.removeCell(item.id);
    },
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var connectMonitor = function (_connect, monitor) { return ({
    connectDropTarget: _connect.dropTarget(),
    isOverCurrent: monitor.isOver({ shallow: true }),
}); };
var Raw = function (_a) {
    var isOverCurrent = _a.isOverCurrent, connectDropTarget = _a.connectDropTarget;
    var isLayoutMode = Object(_react_page_core__WEBPACK_IMPORTED_MODULE_2__["useIsLayoutMode"])();
    return connectDropTarget(react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('ory-controls-trash', {
            'ory-controls-trash-active': isLayoutMode,
        }) },
        react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_0__["default"], { color: "secondary", disabled: !isOverCurrent },
            react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_1___default.a, null))));
};
var types = function (_a) {
    var editor = _a.editor;
    var plugins = editor.plugins.getRegisteredNames();
    if (editor.plugins.hasNativePlugin()) {
        plugins.push(editor.plugins.getNativePlugin()().name);
    }
    return plugins;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var Decorated = Object(_react_page_core__WEBPACK_IMPORTED_MODULE_2__["DropTarget"])(types, target, connectMonitor)(Raw);
var Trash = function () {
    var editor = Object(_react_page_core__WEBPACK_IMPORTED_MODULE_2__["useEditor"])();
    var removeCell = Object(_react_page_core__WEBPACK_IMPORTED_MODULE_2__["useRemoveCell"])();
    return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](Decorated, { editor: editor, removeCell: removeCell });
};
/* harmony default export */ __webpack_exports__["default"] = (Trash);
//# sourceMappingURL=index.js.map

/***/ })

}]);