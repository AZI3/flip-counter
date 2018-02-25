import './style.scss';

'use strict';

if (process.env.NODE_ENV === 'production') {
    console.log('[FlipCounterJs] production mode.');
}

let document = window.document;
let defaults = {
    step: 1,
    speed: 0,
    minDigits: 4,
    start: 0,
    size: 'sm',
    mode: 'up'
};
const EVENT_MAP = {
    UPDATE_DONE: 'update_done',
    TARGET_REACHED: 'target_reached'
};

let promiseArray = [];
let updatePromise = Promise.resolve(null);

function whichTransitionEvent() {
    let t;
    const el = document.createElement('fakeelement');
    const transitions = {
        'transition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'MozTransition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd'
    };
    for (t in transitions) {
        if (el.style[t] !== undefined) {
            return transitions[t];
        }
    }
}

function extendObj(target, defaults) {
    for (let p in defaults) {
        if ((!target.hasOwnProperty(p)))
            target[p] = defaults[p];
    }
    return target;
}

export default class FlipCounterJs {
    constructor(element, options, events) {
        this.element = element;
        if (!options) {
            options = {};
        }
        this.options = extendObj(options, defaults);
        this.counter = this.options.start;
        this.events = events;

        this.init();
        if (this.options.speed > 0) {
            this.auto = true;
            if (this.options.speed < 500) {
                this.options.speed = 500;
                console.log('[FlipCounterJs] The speed can\'t be quicker(<) than 500ms, it\'s automatically adjusted.');
            }
            (function (self) {
                setTimeout(function () {
                    self.update(self.options.step);
                }, self.options.speed);
            })(this);
        }
    }

    init() {
        let container = this.element;
        let fc = document.createElement('div');
        fc.classList.add('fc');
        fc.classList.add('fc-size-' + this.options.size);
        container.innerHTML = '';
        container.appendChild(fc);
        this.numberArray = numberToArray(this.counter);
        this.numberArray = fillingZeros(this.options.minDigits, this.numberArray);
        let i;
        let html = '';
        for (i = 0; i < this.numberArray.length; i++) {
            let value = this.numberArray[i];
            html += createDigitCardContainer(value, value);
        }

        fc.innerHTML = html;
    }

    update(value) {
        const mode = this.options.mode === 'down';

        let val = value;
        if (!val || isNaN(val)) {
            val = this.options.step;
        }
        let newCounter;
        if (mode) {
            newCounter = parseInt(this.counter) - parseInt(val) >= 0 ? parseInt(this.counter) - parseInt(val) : 0;
        } else {
            newCounter = parseInt(this.counter) + parseInt(val);
        }

        let newNumberArray = numberToArray(newCounter);
        newNumberArray = fillingZeros(this.options.minDigits, newNumberArray);
        let oldNumberArray = this.numberArray;
        let fc = this.element.getElementsByClassName('fc')[0];
        let i = newNumberArray.length - 1;
        promiseArray = [];
        let transitionEventStatus = {};
        while (i >= 0) {
            transitionEventStatus[i] = false;
            promiseArray.push(new Promise((resolve, reject) => {
                if (i > oldNumberArray.length - 1) {
                    let v = newNumberArray[i];
                    fc.innerHTML += createDigitCardContainer(v, v);
                    resolve(newNumberArray[i]);
                } else if (newNumberArray[i] != oldNumberArray[i]) {
                    let dcc = fc.getElementsByClassName('dcc')[i];
                    let newFront = dcc.querySelector('.front .digit');
                    let oldBack = dcc.querySelector('.back .digit');
                    newFront.innerHTML = newNumberArray[i];
                    let newBack = dcc.querySelector('.perspective-wrapper .switchover .back .digit');
                    let oldFront = dcc.querySelector('.perspective-wrapper .switchover .front .digit');
                    newBack.innerHTML = newNumberArray[i];
                    let newDigit = newNumberArray[i];
                    dcc.classList.add('animate');
                    let handler = (fc, dcc, newDigit, resolve, transitionEventStatus, i) => {
                        transitionEventStatus[i] = true;
                        dcc.removeEventListener(whichTransitionEvent(), handler);
                        fc.replaceChild(parseDom(createDigitCardContainer(newDigit, newDigit)), dcc);
                        if (self.events && self.events[EVENT_MAP.UPDATE_DONE]) {
                            self.events[EVENT_MAP.UPDATE_DONE](newCounter);
                        }
                        resolve(newDigit);
                    };
                    (function (fc, dcc, newDigit, resolve, transitionEventStatus, i, speed) {
                        dcc.addEventListener(whichTransitionEvent(), (e) => handler(fc, dcc, newDigit, resolve, transitionEventStatus, i));
                        setTimeout(() => {
                            if (!transitionEventStatus[i]) {
                                handler(fc, dcc, newDigit, resolve, transitionEventStatus, i);
                            }
                        }, speed);
                    })(fc, dcc, newDigit, resolve, transitionEventStatus, i, this.options.speed);
                } else {
                    resolve(newNumberArray[i]);
                }
                i--;
            }));
        }
        Promise.all(promiseArray).then(() => {
            this.counter = newCounter;
            this.numberArray = newNumberArray;
            if (this.auto && !(this.options.mode === 'down' && this.counter == 0)) {
                this.update(this.options.step);
            }
        });
    }
}

function numberToArray(number) {
    if (isNaN(number)) {
        return []
    }
    return number.toString().split('').reverse();
}

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
    let temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.childNodes[0];
}

function fillingZeros(minDigits, numberArray) {
    let diff = minDigits - numberArray.length;
    while (diff > 0) {
        numberArray.push('0');
        diff--;
    }
    return numberArray;
}

function emulateTransitionEnd(duration) {
    var called = false;
    var $el = this;
    $(this).one($.support.transition.end, function () {
        called = true;
    });
    var callback = function () {
        if (!called) {
            $($el).trigger($.support.transition.end);
        }
    };
    setTimeout(callback, duration);
    return this;
}

(window => {
    let elements = window.document.querySelectorAll('[data-flip-counter-js]');
    for (let el of elements) {
        let options = {};
        for (let key of Object.keys(defaults)) {
            var attrName = 'data-fc-' + key;
            if (el.hasAttribute(attrName)) {
                options[key] = el.getAttribute(attrName);
            }
        }
        new FlipCounterJs(el, options);
    }
})(window);