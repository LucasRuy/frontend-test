(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

var _initFunction = require('./components/initFunction.js');

var _initFunction2 = _interopRequireDefault(_initFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// =========================================
// Init Events  ----------------------------
window.addEventListener('load', function () {
	(0, _initFunction2.default)();
}); // =========================================
// Import Functions  -----------------------

// Default -------------------------------

},{"./components/initFunction.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var initFunction = function initFunction() {
  console.log('Initial Function');
};

exports.default = initFunction;

},{}]},{},[1]);
