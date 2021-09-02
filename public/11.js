(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/@react-page/ui/lib-es/PluginDrawer/Draggable/helper/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@react-page/ui/lib-es/PluginDrawer/Draggable/helper/index.js ***!
  \***********************************************************************************/
/*! exports provided: source, collect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "source", function() { return source; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collect", function() { return collect; });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var source = {
    beginDrag: function (_a) {
        var insert = _a.insert, props = __rest(_a, ["insert"]);
        props.layoutMode();
        return __assign({ node: insert, rawNode: function () { return insert; } }, props);
    },
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var collect = function (connect, monitor) { return ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    connectDragPreview: connect.dragPreview(),
}); };
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@react-page/ui/lib-es/PluginDrawer/Draggable/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@react-page/ui/lib-es/PluginDrawer/Draggable/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_page_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-page/core */ "./node_modules/@react-page/core/lib-es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helper_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper/index */ "./node_modules/@react-page/ui/lib-es/PluginDrawer/Draggable/helper/index.js");
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




var instances = {};
var Draggable = /** @class */ (function (_super) {
    __extends(Draggable, _super);
    function Draggable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Draggable.prototype.componentDidMount = function () {
        var _this = this;
        var img = new Image();
        img.onload = function () { return _this.props.connectDragPreview(img); };
        img.src =
            // tslint:disable-next-line:max-line-length
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAhCAYAAACbffiEAAAA6UlEQVRYhe2ZQQ6CMBBFX0njHg7ESXTp1p3uvIBewc3Em3AfdelSFwRDCAm01JRO+pa0lP8zzc9kMCKyAa7AFqhIixdwB44WuACHuHq8KWm1vwtgF1lMCPaWkevUNE3Qr9R17XTu1P5uvUdV+IpbG2qMGBH5xBYRAjUVUWPEjj10SS3XRFry3kha/VBTETVGcmqtDTVGFqdWn7k9ku96f88QNRVRYySn1tpQY8QptXz7qinmnpt7rZTIqbU21BgJ2mv1+XfCDVFTETVGjIg8SG8KP+RZ0I7lU+dmgRNgaKfyZVw9znT/R85fOHJJE77U6UcAAAAASUVORK5CYII=';
    };
    Draggable.prototype.render = function () {
        var _a = this.props, connectDragSource = _a.connectDragSource, isDragging = _a.isDragging, children = _a.children, className = _a.className;
        var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, { 'ory-toolbar-draggable-is-dragged': isDragging }, 'ory-toolbar-draggable');
        return connectDragSource(react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: classes }, children));
    };
    return Draggable;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]));
var mapStateToProps = null;
var _a = _react_page_core__WEBPACK_IMPORTED_MODULE_0__["Actions"].Display, insertMode = _a.insertMode, editMode = _a.editMode, layoutMode = _a.layoutMode;
var clearHover = _react_page_core__WEBPACK_IMPORTED_MODULE_0__["Actions"].Cell.clearHover;
var mapDispatchToProps = { insertMode: insertMode, editMode: editMode, layoutMode: layoutMode, clearHover: clearHover };
/* harmony default export */ __webpack_exports__["default"] = (function (dragType) {
    if (dragType === void 0) { dragType = 'CELL'; }
    if (!instances[dragType]) {
        instances[dragType] = Object(_react_page_core__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_react_page_core__WEBPACK_IMPORTED_MODULE_0__["DragSource"])(dragType, _helper_index__WEBPACK_IMPORTED_MODULE_3__["source"], _helper_index__WEBPACK_IMPORTED_MODULE_3__["collect"])(Draggable));
    }
    return instances[dragType];
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@react-page/ui/lib-es/PluginDrawer/Item/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@react-page/ui/lib-es/PluginDrawer/Item/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _react_page_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-page/core */ "./node_modules/@react-page/core/lib-es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Draggable_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Draggable/index */ "./node_modules/@react-page/ui/lib-es/PluginDrawer/Draggable/index.js");






var Item = function (_a) {
    var plugin = _a.plugin, insert = _a.insert, translations = _a.translations;
    if (!plugin.IconComponent && !plugin.text) {
        return null;
    }
    var insertAtEnd = Object(_react_page_core__WEBPACK_IMPORTED_MODULE_3__["useInsertCellAtTheEnd"])();
    var Draggable = Object(_Draggable_index__WEBPACK_IMPORTED_MODULE_5__["default"])(plugin.name);
    return (react__WEBPACK_IMPORTED_MODULE_4__["createElement"](Draggable, { insert: insert },
        react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_1__["default"], { title: "Click to add or drag and drop it somwhere on your page!", className: "ory-plugin-drawer-item", onClick: function () { return insertAtEnd(insert); } },
            react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_0__["default"], { children: plugin.IconComponent || plugin.text[0], style: {
                    marginRight: 16,
                } }),
            react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_2__["default"], { primary: plugin.text, secondary: plugin.description }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Item);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@react-page/ui/lib-es/PluginDrawer/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@react-page/ui/lib-es/PluginDrawer/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "./node_modules/@material-ui/core/esm/ListSubheader/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _react_page_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-page/core */ "./node_modules/@react-page/core/lib-es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-portal */ "./node_modules/react-portal/es/index.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/lib/index.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Item_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Item/index */ "./node_modules/@react-page/ui/lib-es/PluginDrawer/Item/index.js");
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
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};










var defaultTranslations = {
    noPluginFoundContent: 'No plugins found',
    searchPlaceholder: 'Search plugins',
    layoutPlugins: 'Layout plugins',
    contentPlugins: 'Content plugins',
    insertPlugin: 'Add plugin to content',
    dragMe: 'Drag me!',
};
var Raw = /** @class */ (function (_super) {
    __extends(Raw, _super);
    function Raw(props) {
        var _this = _super.call(this, props) || this;
        _this.onRef = function (component) {
            _this.input = component;
        };
        _this.onSearch = function (e) {
            var target = e.target;
            if (target instanceof HTMLInputElement) {
                _this.setState({
                    isSearching: target.value.length > 0,
                    searchText: target.value,
                });
            }
        };
        _this.state = {
            isSearching: false,
            searchText: '',
        };
        _this.onSearch = _this.onSearch.bind(_this);
        _this.searchFilter = _this.searchFilter.bind(_this);
        return _this;
    }
    Raw.prototype.componentDidUpdate = function () {
        var input = this.input;
        if (input && this.props.isInsertMode && input instanceof HTMLElement) {
            setTimeout(function () {
                var e = input.querySelector('input');
                if (e) {
                    e.focus();
                }
            }, 100);
        }
    };
    Raw.prototype.searchFilter = function (plugin) {
        return (plugin &&
            plugin.name &&
            !plugin.hideInMenu &&
            (plugin.name
                .toLowerCase()
                .startsWith(this.state.searchText.toLowerCase()) ||
                (plugin.description &&
                    plugin.description
                        .toLowerCase()
                        .startsWith(this.state.searchText.toLowerCase())) ||
                (plugin.text &&
                    plugin.text
                        .toLowerCase()
                        .startsWith(this.state.searchText.toLowerCase()))));
    };
    Raw.prototype.render = function () {
        var _this = this;
        var plugins = this.props.editor.plugins;
        var content = plugins.plugins.content.filter(this.searchFilter);
        var layout = plugins.plugins.layout.filter(this.searchFilter);
        return (react__WEBPACK_IMPORTED_MODULE_6__["createElement"](react_portal__WEBPACK_IMPORTED_MODULE_7__["Portal"], null,
            react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_0__["default"], { variant: "persistent", className: "ory-plugin-drawer", open: this.props.isInsertMode, PaperProps: {
                    style: {
                        width: 320,
                    },
                } },
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core_List__WEBPACK_IMPORTED_MODULE_1__["default"], { subheader: react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_3__["default"], null, this.props.translations.insertPlugin) },
                    react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__["default"], null,
                        react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], { inputRef: this.onRef, placeholder: this.props.translations.searchPlaceholder, fullWidth: true, onChange: this.onSearch })),
                    layout.length + content.length === 0 && (react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_3__["default"], null, this.props.translations.noPluginFoundContent))),
                content.length > 0 && (react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core_List__WEBPACK_IMPORTED_MODULE_1__["default"], { subheader: react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_3__["default"], null, this.props.translations.contentPlugins) }, content.map(function (plugin, k) {
                    var initialState = plugin.createInitialState();
                    return (react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_Item_index__WEBPACK_IMPORTED_MODULE_9__["default"], { translations: _this.props.translations, plugin: plugin, key: k.toString(), insert: {
                            content: {
                                plugin: plugin,
                                state: initialState,
                            },
                        } }));
                }))),
                layout.length > 0 && (react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core_List__WEBPACK_IMPORTED_MODULE_1__["default"], { subheader: react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_3__["default"], null, this.props.translations.layoutPlugins) }, layout.map(function (plugin, k) {
                    var initialState = plugin.createInitialState();
                    var children = Object(_react_page_core__WEBPACK_IMPORTED_MODULE_5__["sanitizeInitialChildren"])(plugin.createInitialChildren());
                    return (react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_Item_index__WEBPACK_IMPORTED_MODULE_9__["default"], { translations: _this.props.translations, plugin: plugin, key: k.toString(), insert: __assign(__assign({}, children), { layout: {
                                plugin: plugin,
                                state: initialState,
                            } }) }));
                }))))));
    };
    Raw.defaultProps = {
        translations: defaultTranslations,
    };
    return Raw;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]));
var mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_8__["createStructuredSelector"])({
    isInsertMode: _react_page_core__WEBPACK_IMPORTED_MODULE_5__["Selectors"].Display.isInsertMode,
});
var Decorated = Object(_react_page_core__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps)(Raw);
var Toolbar = function () {
    var editor = Object(_react_page_core__WEBPACK_IMPORTED_MODULE_5__["useEditor"])();
    return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](Decorated, { editor: editor });
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_6__["memo"](Toolbar));
//# sourceMappingURL=index.js.map

/***/ })

}]);