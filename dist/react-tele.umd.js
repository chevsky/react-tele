(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["react-tele"] = factory(require("React"));
	else
		root["react-tele"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!****************************!*\
  !*** ./src/react-tele.tsx ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 1);
	;
	var Portal = (function (_super) {
	    __extends(Portal, _super);
	    function Portal(props) {
	        _super.call(this, props);
	    }
	    Portal.prototype.updateTarget = function (children) {
	        var _this = this;
	        var target = this.props.id ? Target.Destinations[this.props.id] : this.props.target;
	        if (typeof target === 'function')
	            target = target();
	        if (!target)
	            return;
	        if (typeof target.then === 'function') {
	            target.then(function (target) { return target.update(children, _this); }).catch(function () { return void 0; });
	        }
	        else {
	            target.update(children, this);
	        }
	    };
	    Portal.prototype.close = function () {
	        this.closed = true;
	        this.props.onClose && this.props.onClose();
	    };
	    Portal.prototype.componentDidMount = function () {
	        this.updateTarget(this.props.children);
	    };
	    Portal.prototype.componentDidUpdate = function () {
	        if (!this.closed) {
	            this.updateTarget(this.props.children);
	        }
	    };
	    Portal.prototype.componentWillUnmount = function () {
	        if (!this.closed) {
	            this.updateTarget(undefined);
	        }
	    };
	    Portal.prototype.render = function () {
	        return React.createElement("span", null, null);
	    };
	    return Portal;
	})(React.Component);
	exports.Portal = Portal;
	var Target = (function (_super) {
	    __extends(Target, _super);
	    function Target(props) {
	        _super.call(this, props);
	        this.state = { children: null };
	    }
	    Target.prototype.update = function (children, portal) {
	        if (children === undefined) {
	            if (this.portal == portal) {
	                this.portal = null;
	                children = null;
	            }
	        }
	        else if (portal != this.portal) {
	            this.portal && this.portal.close();
	            this.portal = portal;
	        }
	        this.setState({ children: children });
	    };
	    Target.prototype.componentWillMount = function () {
	        this.props.id && (Target.Destinations[this.props.id] = this);
	    };
	    Target.prototype.componentWillUnmount = function () {
	        this.portal && this.portal.close();
	        this.props.id && (Target.Destinations[this.props.id] = null);
	    };
	    Target.prototype.render = function () {
	        return React.createElement("span", null, this.state.children);
	    };
	    Target.Destinations = {};
	    return Target;
	})(React.Component);
	exports.Target = Target;
	var _default = { port: Portal, target: Target };
	exports.__esModule = true;
	exports["default"] = _default;


/***/ },
/* 1 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-tele.umd.js.map