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
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

__webpack_require__(2);

(function (undefined) {
    "use strict";

    var elClassName = 'flip-counter';
    var _global = function () {
        return this || (0, eval)('this');
    }();
    var document = _global.document;
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

    function FlipCounter(element, options) {
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

    var numberToArray = function numberToArray(number) {
        if (isNaN(number)) {
            return [];
        }
        return number.toString().split("").reverse();
    };

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

    FlipCounter.prototype = {
        init: function init() {
            var container = this.element;
            var fc = document.createElement('div');
            fc.classList.add('fc');
            container.appendChild(fc);
            this.numberArray = numberToArray(this.counter);
            this.numberArray = fillingZeros(this.options.minDigits, this.numberArray);
            var i;
            var html = '';
            for (i = 0; i < this.numberArray.length; i++) {
                var value = this.numberArray[i];
                html += createDigitCardContainer(value, value);
            }

            fc.innerHTML = html;
        },
        increment: function increment(value) {
            if (!value || isNaN(value)) {
                value = this.options.step;
            }
            var newCounter = this.counter + value;
            var newNumberArray = numberToArray(newCounter);
            newNumberArray = fillingZeros(this.options.minDigits, newNumberArray);
            var oldNumberArray = this.numberArray;
            var fc = this.element.getElementsByClassName('fc')[0];
            var i = newNumberArray.length - 1;
            while (i >= 0) {

                if (i > oldNumberArray.length - 1) {
                    var value = newNumberArray[i];
                    fc.innerHTML += createDigitCardContainer(value, value);
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
    };
    FlipCounter.prototype.constructor = FlipCounter;

    if (( false ? 'undefined' : _typeof(module)) === 'object' && module && _typeof(module.exports) === 'object') {
        module.exports = FlipCounter;
    } else {
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
                return FlipCounter;
            }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        }
    }
    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && _typeof(window.document) === 'object') {
        window.FlipCounter = FlipCounter;
    }
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=flipCounter.js.map