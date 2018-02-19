import './style.scss';

(function (undefined) {
    "use strict";
    var elClassName = 'flip-counter';
    var _global = (function () {
        return this || (0, eval)('this');
    })();
    var document = _global.document;
    var defaults = {
        step: 1,
        speed: 0,
        minDigits: 4,
        start: 0
    };
    var extend = function (target, defaults) {
        for (var p in defaults) {
            if ((!target.hasOwnProperty(p)))
                target[p] = defaults[p];
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
                    self.increment(self.options.step)
                }, self.options.speed);
            })(this);
        }
    }

    var numberToArray = function (number) {
        if (isNaN(number)) {
            return []
        }
        return number.toString().split("").reverse();
    };

    function createDigitCardContainer(oldVal, newVal) {
        return '<div class="dcc">\n' +
            '        <div class="tile front"><span class="digit">' + newVal + '</span></div>\n' +
            '        <div class="hinge"></div>\n' +
            '        <div class="tile back"><span class="digit">' + oldVal + '</span></div>\n' +
            '        <div class="perspective-wrapper">\n' +
            '            <div class="switchover">\n' +
            '                <div class="tile front"><span class="digit">' + oldVal + '</span></div>\n' +
            '                <div class="tile back"><span class="digit">' + newVal + '</span></div>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>';
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
        init: function () {
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
        increment: function (value) {
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
                        }, 400)
                    })(i, dcc);
                }
                i--;
            }
            this.counter = newCounter;
            this.numberArray = newNumberArray;
        }
    };
    FlipCounter.prototype.constructor = FlipCounter;

    if(typeof module === 'object' && module && typeof module.exports === 'object') {
        module.exports = FlipCounter;
    } else {
        if(typeof define === 'function' && define.amd) {
            define('FlipCounter', [], function () {
                return FlipCounter;
            });
        }
    }
    if(typeof window === 'object' && typeof window.document === 'object') {
        window.FlipCounter = FlipCounter;
    }
})();
