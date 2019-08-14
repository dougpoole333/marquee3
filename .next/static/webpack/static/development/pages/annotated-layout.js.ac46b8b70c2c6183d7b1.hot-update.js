webpackHotUpdate("static/development/pages/annotated-layout.js",{

/***/ "./pages/annotated-layout.js":
/*!***********************************!*\
  !*** ./pages/annotated-layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "../../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);













var AnnotatedLayout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(AnnotatedLayout, _React$Component);

  function AnnotatedLayout() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AnnotatedLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(AnnotatedLayout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      discount: '10%',
      enabled: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleSubmit",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var session_url, username, password, basicAuth, body;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              session_url = 'https://bismuth-dev.myshopify.com/admin/api/2019-07/themes/75057168493/assets.json';
              username = '35f5151b48c7fb8fb8c9fe4185fb7c25';
              password = '122b9134735957626720501cf4755623';
              basicAuth = 'Basic ' + btoa(username + ':' + password);
              body = {
                asset: {
                  key: "sections/marquee2.liquid",
                  value: "<div>SHIT</div>"
                }
              };
              axios__WEBPACK_IMPORTED_MODULE_11___default()({
                method: 'put',
                url: session_url,
                auth: {
                  username: username,
                  password: password
                },
                data: body,
                headers: {
                  'Authorization': +basicAuth
                }
              }).then(function (response) {
                console.log('Authenticated');
                console.log(response);
              })["catch"](function (error) {
                console.log('Error on Authentication');
              }); //
              // const response = await fetch('https://bismuth-dev.myshopify.com/admin/api/2019-07/themes/75057168493/assets.json', {
              //   method: 'PUT',
              //   headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': 'PUT', 'Access-Control-Allow-Origin':  'https://30e2e004.ngrok.io', 'Access-Control-Allow-Headers': ['Content-Type', 'Authorization'] },
              //   body: JSON.stringify({ asset: {key: "templates/index.liquid", value: "test"} })
              // })

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleChange", function (field) {
      return function (value) {
        return _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, field, value));
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleToggle", function () {
      _this.setState(function (_ref2) {
        var enabled = _ref2.enabled;
        return {
          enabled: !enabled
        };
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AnnotatedLayout, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          discount = _this$state.discount,
          enabled = _this$state.enabled;
      var contentStatus = enabled ? 'Disable' : 'Enable';
      var textStatus = enabled ? 'enabled' : 'disabled';
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Page"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Layout"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Layout"].AnnotatedSection, {
        title: "Default discount",
        description: "Add a product to Sample App, it will automatically be discounted."
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Card"], {
        sectioned: true
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Form"], {
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["FormLayout"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["TextField"], {
        value: discount,
        onChange: this.handleChange('discount'),
        label: "Discount percentage",
        type: "discount"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Stack"], {
        distribution: "trailing"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        primary: true,
        submit: true
      }, "Save")))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Layout"].AnnotatedSection, {
        title: "Price updates",
        description: "Temporarily disable all Sample App price updates"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["SettingToggle"], {
        action: {
          content: contentStatus,
          onAction: this.handleToggle
        },
        enabled: enabled
      }, "This setting is", ' ', react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["TextStyle"], {
        variation: "strong"
      }, textStatus), "."))));
    } //Access-Control-Allow-Origin:  http://127.0.0.1:3000
    // Access-Control-Allow-Methods: POST
    // Access-Control-Allow-Headers: Content-Type, Authorization
    // handleSubmit = async () => {
    //   const response = await fetch('https://bismuth-dev.myshopify.com/admin/api/2019-07/themes/75057168493/assets.json', {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': 'PUT', 'Access-Control-Allow-Origin':  'https://30e2e004.ngrok.io', 'Access-Control-Allow-Headers': ['Content-Type', 'Authorization'] },
    //     body: JSON.stringify({ asset: {key: "templates/index.liquid", value: "test"} })
    //   })
    // };

  }]);

  return AnnotatedLayout;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AnnotatedLayout);

/***/ })

})
//# sourceMappingURL=annotated-layout.js.ac46b8b70c2c6183d7b1.hot-update.js.map