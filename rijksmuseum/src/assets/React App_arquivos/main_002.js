webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/containers/App/App.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/containers/App/App.css ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Inconsolata|Oswald);", ""]);

// module
exports.push([module.i, "html, body{\n  height: 100vh;\n  width: 100vw;\n  margin: 0 !important; \n}\n", ""]);

// exports


/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: API_ENDPOINT, API_KEY, MASHAPE_KEY, CORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_ENDPOINT", function() { return API_ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_KEY", function() { return API_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MASHAPE_KEY", function() { return MASHAPE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CORS", function() { return CORS; });
var API_ENDPOINT = "https://community-rijksmuseum.p.mashape.com/en/";
var API_KEY = "MFtrv9X3";
var MASHAPE_KEY = "mn4uddDIV8mshCmdALohqzK2ZHU9p1k87m8jsnMrL7onzILla2";
var CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET',
  'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type'
};

/***/ }),

/***/ "./src/containers/App/App.css":
/*!************************************!*\
  !*** ./src/containers/App/App.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/containers/App/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/containers/App/App.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/containers/App/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/containers/App/index.js":
/*!*************************************!*\
  !*** ./src/containers/App/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_riversong_Documentos_T_cnico_DAW_TP_RESTFul_App_rijksmuseum_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_riversong_Documentos_T_cnico_DAW_TP_RESTFul_App_rijksmuseum_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_riversong_Documentos_T_cnico_DAW_TP_RESTFul_App_rijksmuseum_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_riversong_Documentos_T_cnico_DAW_TP_RESTFul_App_rijksmuseum_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_riversong_Documentos_T_cnico_DAW_TP_RESTFul_App_rijksmuseum_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.css */ "./src/containers/App/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/riversong/Documentos/T\xE9cnico/DAW/TP-RESTFul-App/rijksmuseum/src/containers/App/index.js";



var App =
/*#__PURE__*/
function (_Component) {
  Object(_home_riversong_Documentos_T_cnico_DAW_TP_RESTFul_App_rijksmuseum_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    Object(_home_riversong_Documentos_T_cnico_DAW_TP_RESTFul_App_rijksmuseum_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_home_riversong_Documentos_T_cnico_DAW_TP_RESTFul_App_rijksmuseum_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_riversong_Documentos_T_cnico_DAW_TP_RESTFul_App_rijksmuseum_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_home_riversong_Documentos_T_cnico_DAW_TP_RESTFul_App_rijksmuseum_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      });
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/containers/ArtWork/index.js":
/*!*****************************************!*\
  !*** ./src/containers/ArtWork/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_riversong_Documentos_T_cnico_DAW_TP_RESTFul_App_rijksmuseum_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_riversong_Documentos_T_cnico_DAW_TP_RESTFul_App_rijksmuseum_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_riversong_Documentos_T_cnico_DAW_TP_RESTFul_App_rijksmuseum_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_riversong_Documentos_T_cnico_DAW_TP_RESTFul_App_rijksmuseum_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_riversong_Documentos_T_cnico_DAW_TP_RESTFul_App_rijksmuseum_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants.js */ "./src/constants.js");





var _jsxFileName = "/home/riversong/Documentos/T\xE9cnico/DAW/TP-RESTFul-App/rijksmuseum/src/containers/ArtWork/index.js";



var ArtWork =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_riversong_Documentos_T_cnico_DAW_TP_RESTFul_App_rijksmuseum_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ArtWork, _React$Component);

  function ArtWork(props) {
    var _this;

    Object(_home_riversong_Documentos_T_cnico_DAW_TP_RESTFul_App_rijksmuseum_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ArtWork);

    _this = Object(_home_riversong_Documentos_T_cnico_DAW_TP_RESTFul_App_rijksmuseum_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_riversong_Documentos_T_cnico_DAW_TP_RESTFul_App_rijksmuseum_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ArtWork).call(this, props));
    _this.state = {
      'objectNumber': _this.props.match.params.id,
      'title': '',
      'image': '',
      'description': '',
      'painter': {
        'name': '',
        'placeOfBirth': '',
        'dateOfBirth': '',
        'placeOfDeath': '',
        'dateOfDeath': ''
      },
      'materials': [],
      'dating': ''
    };
    return _this;
  }

  Object(_home_riversong_Documentos_T_cnico_DAW_TP_RESTFul_App_rijksmuseum_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ArtWork, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      var request_url = _constants_js__WEBPACK_IMPORTED_MODULE_6__["API_ENDPOINT"] + 'collection/' + this.props.match.params.id + '?key=' + _constants_js__WEBPACK_IMPORTED_MODULE_6__["API_KEY"] + '&format=json';
      var requestOptions = {
        method: 'GET',
        headers: {
          "Accept": "text/plain",
          "X-Mashape-Key": _constants_js__WEBPACK_IMPORTED_MODULE_6__["MASHAPE_KEY"]
        }
      };
      fetch(request_url, requestOptions).then(function (response) {
        return response.json();
      }).then(function (response) {
        return response.artObject;
      }).then(function (response) {
        if (response) {
          _this2.setState({
            title: response.title,
            image: response.webImage.url,
            description: response.plaqueDescriptionEnglish,
            painter: {
              name: response.principalMakers[0].name,
              placeOfBirth: response.principalMakers[0].placeOfBirth,
              dateOfBirth: response.principalMakers[0].dateOfBirth,
              placeOfDeath: response.principalMakers[0].placeOfDeath,
              dateOfDeath: response.principalMakers[0].dateOfDeath
            },
            dating: response.dating.sortingDate,
            materials: response.materials
          });
        } else {
          window.location.href = '/not-found';
        }
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var materials = this.state.materials.join();
      console.log(this.state.description);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          'height': '100%',
          'padding': '0',
          'margin': '0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          'backgroundImage': 'url("' + this.state.image + '")',
          'backgroundPosition': 'center',
          'height': '100vh',
          'position': 'relative',
          'backgroundRepeat': 'no-repeat',
          'backgroundSize': 'cover',
          'padding': '0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          'position': 'absolute',
          'width': '100%',
          'bottom': '0',
          'background': 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4))'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        style: {
          'fontFamily': 'Inconsolata',
          'fontSize': '1.15em',
          'color': '#FFF',
          'paddingLeft': '1%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, this.state.title, ", ", this.state.painter.name, ", ", this.state.dating), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        style: {
          'fontFamily': 'Inconsolata',
          'fontSize': '0.8em',
          'color': '#afa9a9',
          'paddingLeft': '1%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, materials), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        style: {
          'fontFamily': 'Inconsolata',
          'fontSize': '0.9em',
          'color': '#FFF',
          'paddingLeft': '1%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, this.state.description)));
    }
  }]);

  return ArtWork;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ArtWork);

/***/ }),

/***/ "./src/containers/NotFound/index.js":
/*!******************************************!*\
  !*** ./src/containers/NotFound/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var _jsxFileName = "/home/riversong/Documentos/T\xE9cnico/DAW/TP-RESTFul-App/rijksmuseum/src/containers/NotFound/index.js";



function NotFound(vacancies) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Uh, seems like theres nothing here, perhaps youre looking for one those lost paintings.");
}

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./src/containers/Search/index.js":
/*!****************************************!*\
  !*** ./src/containers/Search/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/App */ "./src/containers/App/index.js");
/* harmony import */ var _containers_ArtWork__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/ArtWork */ "./src/containers/ArtWork/index.js");
/* harmony import */ var _containers_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/Search */ "./src/containers/Search/index.js");
/* harmony import */ var _containers_Search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_containers_Search__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _containers_NotFound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/NotFound */ "./src/containers/NotFound/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var _jsxFileName = "/home/riversong/Documentos/T\xE9cnico/DAW/TP-RESTFul-App/rijksmuseum/src/index.js";







react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
  path: "/",
  exact: true,
  component: _containers_App__WEBPACK_IMPORTED_MODULE_2__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
  path: "/art-work/:id",
  component: _containers_ArtWork__WEBPACK_IMPORTED_MODULE_3__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
  path: "/search/:q",
  component: _containers_Search__WEBPACK_IMPORTED_MODULE_4___default.a,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
  path: "/*",
  component: _containers_NotFound__WEBPACK_IMPORTED_MODULE_5__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
  path: "/not-found",
  component: _containers_NotFound__WEBPACK_IMPORTED_MODULE_5__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}))), document.getElementById('root'));

/***/ })

})
//# sourceMappingURL=main.2ad825f660b2d8e8156c.hot-update.js.map