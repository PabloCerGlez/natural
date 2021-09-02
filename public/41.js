(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/@react-page/editor/lib-es/editor/EditableEditor.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@react-page/editor/lib-es/editor/EditableEditor.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_page_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-page/core */ "./node_modules/@react-page/core/lib-es/index.js");
/* harmony import */ var _react_page_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-page/ui */ "./node_modules/@react-page/ui/lib-es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _StickyWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StickyWrapper */ "./node_modules/@react-page/editor/lib-es/editor/StickyWrapper.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_4__);
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





var EditableEditor = function (_a) {
    var plugins = _a.plugins, defaultPlugin = _a.defaultPlugin, value = _a.value, onChange = _a.onChange, dndBackend = _a.dndBackend, defaultDisplayMode = _a.defaultDisplayMode, blurGateDisabled = _a.blurGateDisabled, lang = _a.lang, languages = _a.languages, onChangeLang = _a.onChangeLang, hideEditorSidebar = _a.hideEditorSidebar, rest = __rest(_a, ["plugins", "defaultPlugin", "value", "onChange", "dndBackend", "defaultDisplayMode", "blurGateDisabled", "lang", "languages", "onChangeLang", "hideEditorSidebar"]);
    var theValue = value || Object(_react_page_core__WEBPACK_IMPORTED_MODULE_0__["createEmptyState"])();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var lastValueRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
    var editorRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(new _react_page_core__WEBPACK_IMPORTED_MODULE_0__["Editor"]({ defaultPlugin: defaultPlugin, plugins: plugins, languages: languages, lang: lang }));
    var onChangeCallback = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (newValue) {
        lastValueRef.current = newValue;
        onChange(newValue);
    }, [onChange]);
    var equal = fast_deep_equal__WEBPACK_IMPORTED_MODULE_4___default()(theValue, lastValueRef === null || lastValueRef === void 0 ? void 0 : lastValueRef.current);
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
        if (!equal) {
            lastValueRef.current = theValue;
            editorRef.current.trigger.editable.update(theValue);
        }
    }, [equal]);
    var editor = editorRef.current;
    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_page_core__WEBPACK_IMPORTED_MODULE_0__["Provider"], { editor: editor, dndBackend: dndBackend, blurGateDisabled: blurGateDisabled, blurGateDefaultMode: defaultDisplayMode },
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_StickyWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], null, function (stickyNess) { return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_page_core__WEBPACK_IMPORTED_MODULE_0__["Editable"], __assign({ lang: lang, onChangeLang: onChangeLang, id: theValue === null || theValue === void 0 ? void 0 : theValue.id, onChange: onChangeCallback }, rest)),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_page_ui__WEBPACK_IMPORTED_MODULE_1__["default"], { stickyNess: stickyNess, hideEditorSidebar: hideEditorSidebar }))); })));
};
/* harmony default export */ __webpack_exports__["default"] = (EditableEditor);
//# sourceMappingURL=EditableEditor.js.map

/***/ }),

/***/ "./node_modules/@react-page/editor/lib-es/editor/StickyWrapper.js":
/*!************************************************************************!*\
  !*** ./node_modules/@react-page/editor/lib-es/editor/StickyWrapper.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

/* harmony default export */ __webpack_exports__["default"] = (function (_a) {
    var children = _a.children;
    var ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    var stickyElRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    var _b = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), 2), shouldStickToTop = _b[0], setShouldStickToTop = _b[1];
    var _c = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true), 2), shouldStickToBottom = _c[0], setShouldStickToBottom = _c[1];
    var _d = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), 2), rightOffset = _d[0], setRightOffset = _d[1];
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        var calc = function () {
            if (ref.current) {
                var _a = ref.current.getBoundingClientRect(), top_1 = _a.top, left = _a.left;
                var bottom = top_1 + ref.current.clientHeight;
                // document.documentElement.clientWidth is without scrollbars, so better for us
                var right = document.documentElement.clientWidth - left - ref.current.clientWidth;
                var uiHeight = stickyElRef.current
                    ? stickyElRef.current.clientHeight
                    : 400;
                setRightOffset(right);
                setShouldStickToTop(top_1 > window.innerHeight - uiHeight);
                setShouldStickToBottom(bottom < window.innerHeight);
            }
        };
        document.addEventListener('scroll', calc);
        window.addEventListener('resize', calc);
        var observer = null;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (global.IntersectionObserver) {
            observer = new IntersectionObserver(calc);
            if (ref.current) {
                observer.observe(ref.current);
            }
        }
        // do it once
        calc();
        return function () {
            document.removeEventListener('scroll', calc);
            window.removeEventListener('resize', calc);
            observer === null || observer === void 0 ? void 0 : observer.disconnect();
        };
    }, [ref, stickyElRef]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { position: 'relative' }, ref: ref }, children({
        rightOffset: rightOffset,
        stickyElRef: stickyElRef,
        shouldStickToTop: shouldStickToTop,
        shouldStickToBottom: shouldStickToBottom,
    })));
});
//# sourceMappingURL=StickyWrapper.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);