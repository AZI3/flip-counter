/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

"use strict";

var document = window.document;
var defaults = {
    step: 1,
    speed: 0,
    minDigits: 4,
    start: 0
};
var extend = function extend(target, defaults) {
    for (var p in defaults) {
        if (!target.hasOwnProperty(p)) target[p] = defaults[p];
    }
    return target;
};

var FlipCounter = function () {
    function FlipCounter(element, options) {
        _classCallCheck(this, FlipCounter);

        this.element = element;
        if (!options) {
            options = {};
        }
        this.options = extend(options, defaults);
        this.counter = this.options.start;
        this.init();
        if (this.options.speed > 0) {
            (function (self) {
                setInterval(function () {
                    self.increment(self.options.step);
                }, self.options.speed);
            })(this);
        }
    }

    _createClass(FlipCounter, [{
        key: 'init',
        value: function init() {
            var container = this.element;
            var fc = document.createElement('div');
            fc.classList.add('fc');
            container.appendChild(fc);
            this.numberArray = numberToArray(this.counter);
            this.numberArray = fillingZeros(this.options.minDigits, this.numberArray);
            var i = void 0;
            var html = '';
            for (i = 0; i < this.numberArray.length; i++) {
                var value = this.numberArray[i];
                html += createDigitCardContainer(value, value);
            }

            fc.innerHTML = html;
        }
    }, {
        key: 'increment',
        value: function increment(value) {
            var val = value;
            if (!val || isNaN(val)) {
                val = this.options.step;
            }
            var newCounter = this.counter + val;
            var newNumberArray = numberToArray(newCounter);
            newNumberArray = fillingZeros(this.options.minDigits, newNumberArray);
            var oldNumberArray = this.numberArray;
            var fc = this.element.getElementsByClassName('fc')[0];
            var i = newNumberArray.length - 1;
            while (i >= 0) {

                if (i > oldNumberArray.length - 1) {
                    var v = newNumberArray[i];
                    fc.innerHTML += createDigitCardContainer(v, v);
                } else if (newNumberArray[i] != oldNumberArray[i]) {
                    var dcc = fc.getElementsByClassName('dcc')[i];
                    var newFront = dcc.querySelector('.front .digit');
                    var oldBack = dcc.querySelector('.back .digit');
                    newFront.innerHTML = newNumberArray[i];
                    var newBack = dcc.querySelector('.perspective-wrapper .switchover .back .digit');
                    var oldFront = dcc.querySelector('.perspective-wrapper .switchover .front .digit');
                    newBack.innerHTML = newNumberArray[i];
                    dcc.classList.add('animate');
                    (function (i, dcc) {
                        setTimeout(function () {
                            fc.replaceChild(parseDom(createDigitCardContainer(newNumberArray[i], newNumberArray[i])), dcc);
                        }, 400);
                    })(i, dcc);
                }
                i--;
            }
            this.counter = newCounter;
            this.numberArray = newNumberArray;
        }
    }]);

    return FlipCounter;
}();

exports.default = FlipCounter;


function numberToArray(number) {
    if (isNaN(number)) {
        return [];
    }
    return number.toString().split("").reverse();
}

function createDigitCardContainer(oldVal, newVal) {
    return '<div class="dcc">\n' + '        <div class="tile front"><span class="digit">' + newVal + '</span></div>\n' + '        <div class="hinge"></div>\n' + '        <div class="tile back"><span class="digit">' + oldVal + '</span></div>\n' + '        <div class="perspective-wrapper">\n' + '            <div class="switchover">\n' + '                <div class="tile front"><span class="digit">' + oldVal + '</span></div>\n' + '                <div class="tile back"><span class="digit">' + newVal + '</span></div>\n' + '            </div>\n' + '        </div>\n' + '    </div>';
}

function parseDom(html) {
    var temp = document.createElement("div");
    temp.innerHTML = html;
    return temp.childNodes[0];
}

function fillingZeros(minDigits, numberArray) {
    var diff = minDigits - numberArray.length;
    while (diff > 0) {
        numberArray.push('0');
        diff--;
    }
    return numberArray;
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=flip-counter-js.js.map