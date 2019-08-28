module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/help-info.js":
/*!****************************!*\
  !*** ./pages/help-info.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class WalkthroughInfo extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    if (this.props.field == "faq") {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "THIS IS THE FAQ SECTION");
    }

    if (this.props.field == "contact-us") {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "THIS IS CONTACT US SECTION");
    }

    if (this.props.field == "other-products") {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "THIS IS THE OTHER PRODUCTS SECTION");
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (WalkthroughInfo);

/***/ }),

/***/ "./pages/help.js":
/*!***********************!*\
  !*** ./pages/help.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _help_info_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./help-info.js */ "./pages/help-info.js");





class Help extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleTabChange", selectedTabIndex => {
      this.setState({
        selected: selectedTabIndex
      });
    });

    this.state = {
      selected: 0
    };
  }

  render() {
    const selected = this.state.selected;
    const tabs = [{
      id: 'faq',
      content: 'FAQ'
    }, {
      id: 'contact-us',
      content: 'Contact Us'
    }, {
      id: 'other-products',
      content: 'Other Products'
    }];
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
      tabs: tabs,
      selected: selected,
      onSelect: this.handleTabChange
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"].Section, {
      title: tabs[selected].header
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_help_info_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      field: tabs[selected].id
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Help);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selector.js */ "./pages/selector.js");
/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./window.js */ "./pages/window.js");
/* harmony import */ var _help_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./help.js */ "./pages/help.js");







class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_selector_js__WEBPACK_IMPORTED_MODULE_3__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_window_js__WEBPACK_IMPORTED_MODULE_4__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_help_js__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./pages/selector.js":
/*!***************************!*\
  !*** ./pages/selector.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);





class Selector extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getThemes", async () => {
      fetch("/themes", {
        method: "GET"
      }).then(response => response.json()).then(json => this.setState({
        themes: json.data.themes,
        loading: false
      }));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleChange", newValue => {
      this.setState({
        selected: newValue
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderRedirect", () => {
      if (this.state.redirect && !this.state.loading) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].Section, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          target: "_blank",
          style: {
            textDecoration: 'none'
          },
          href: 'http://' + js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('shopOrigin') + `/admin/themes/${this.state.selected}/editor`
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          primary: true
        }, "OPEN CUSTOMIZER")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          primary: true,
          onClick: this.triggerReset
        }, "ADD MARQUEE TO ANOTHER THEME"));
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderSpinner", () => {
      if (this.state.loading) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["EmptyState"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Spinner"], null));
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "triggerReset", () => {
      this.setState({
        selecting: true,
        selected: '',
        redirect: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderSelector", () => {
      if (this.state.selecting && !this.state.loading) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["EmptyState"], {
          sty: true
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Select"], {
          options: this.state.themes ? this.state.themes.map(el => {
            return {
              label: `${el.name}`,
              value: `${el.id}`
            };
          }) : null,
          onChange: this.handleChange,
          value: this.state.selected,
          placeholder: "select a theme"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          primary: true,
          onClick: this.assetUpdateRequest
        }, "Add"));
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "assetUpdateRequest", async () => {
      this.state.selected ? this.setState({
        loading: true
      }) : null;
      var fetchUrl = "/api/" + this.state.selected;
      var method = "PUT";
      fetch(fetchUrl, {
        method: method
      }).then(response => response.json()).then(json => {
        if (json.status === 'success') {
          this.setState({
            redirect: true,
            selecting: false,
            loading: false
          });
        }
      });
    });

    this.state = {
      selecting: true,
      loading: true,
      selected: '',
      themes: [],
      redirect: false
    };
  }

  componentDidMount() {
    this.getThemes();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].Section, null, this.renderSelector(), this.renderRedirect(), this.renderSpinner());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Selector);

/***/ }),

/***/ "./pages/walkthrough-info.js":
/*!***********************************!*\
  !*** ./pages/walkthrough-info.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class WalkthroughInfo extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    if (this.props.field == "homepage") {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "THIS IS THE HOMEPAGE INFO SECTION");
    }

    if (this.props.field == "other-pages") {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "THIS IS THE OTHER PAGES SECTION");
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (WalkthroughInfo);

/***/ }),

/***/ "./pages/window.js":
/*!*************************!*\
  !*** ./pages/window.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _walkthrough_info_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./walkthrough-info.js */ "./pages/walkthrough-info.js");





class Window extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleTabChange", selectedTabIndex => {
      this.setState({
        selected: selectedTabIndex
      });
    });

    this.state = {
      selected: 0
    };
  }

  render() {
    const selected = this.state.selected;
    const tabs = [{
      id: 'homepage',
      content: 'Homepage'
    }, {
      id: 'other-pages',
      content: 'Other Pages'
    }];
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
      tabs: tabs,
      selected: selected,
      onSelect: this.handleTabChange
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"].Section, {
      title: tabs[selected].header
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_walkthrough_info_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      field: tabs[selected].id
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Window);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/userone/Documents/App-dev/marquee3/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map