/******/
(function (modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ 	// The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ 		// Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ 		// Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/            i: moduleId,
            /******/            l: false,
            /******/            exports: {}
            /******/
        };
        /******/
        /******/ 		// Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ 		// Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ 		// Return the exports of the module
        /******/
        return module.exports;
        /******/
    }

    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ 	// expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ 	// define getter function for harmony exports
    /******/
    __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {
                /******/                configurable: false,
                /******/                enumerable: true,
                /******/                get: getter
                /******/
            });
            /******/
        }
        /******/
    };
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
            /******/            function getDefault() {
                return module['default'];
            } :
            /******/            function getModuleExports() {
                return module;
            };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ 	// __webpack_public_path__
    /******/
    __webpack_require__.p = '/dist/';
    /******/
    /******/ 	// Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 1);
    /******/
})
/************************************************************************/
/******/([
    /* 0 */
    /***/ (function (module, exports, __webpack_require__) {


        var content = __webpack_require__(2);

        if (typeof content === 'string') content = [[module.i, content, '']];

        var transform;
        var insertInto;


        var options = {'hmr': true};

        options.transform = transform;
        options.insertInto = undefined;

        var update = __webpack_require__(4)(content, options);

        if (content.locals) module.exports = content.locals;

        if (false) {
            module.hot.accept('!!./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./style.scss', function () {
                var newContent = require('!!./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./style.scss');

                if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];

                var locals = (function (a, b) {
                    var key, idx = 0;

                    for (key in a) {
                        if (!b || a[key] !== b[key]) return false;
                        idx++;
                    }

                    for (key in b) idx--;

                    return idx === 0;
                }(content.locals, newContent.locals));

                if (!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

                update(newContent);
            });

            module.hot.dispose(function () {
                update();
            });
        }

        /***/
    }),
    /* 1 */
    /***/ (function (module, exports, __webpack_require__) {

        'use strict';


        __webpack_require__(0);

        var _app = __webpack_require__(6);

        var _app2 = _interopRequireDefault(_app);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

        /***/
    }),
    /* 2 */
    /***/ (function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(3)(false);
// imports


// module
        exports.push([module.i, '.fc {\n  width: 100%; }\n\n.fc::before {\n  display: table;\n  content: " "; }\n\n.fc::after {\n  display: table;\n  content: " ";\n  clear: both; }\n\n.fc-size-xs.fc .dcc {\n  width: 7px;\n  height: 12px;\n  background-color: #222222;\n  text-align: center;\n  -webkit-box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.5);\n          box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.5);\n  border-radius: 2px;\n  float: right;\n  margin-left: 2px;\n  position: relative;\n  color: #ffffff;\n  font-family: sans-serif;\n  font-size: 12px; }\n\n.fc-size-xs.fc .dcc .hinge {\n  width: 7px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.75);\n  -webkit-box-shadow: 0 5px 7px -4px rgba(0, 0, 0, 0.7);\n          box-shadow: 0 5px 7px -4px rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 6px;\n  z-index: 9; }\n\n.fc-size-xs.fc .dcc .tile {\n  position: absolute;\n  left: 0;\n  width: 7px;\n  height: 6px;\n  border-radius: 2px;\n  overflow: hidden;\n  background-color: #222222;\n  line-height: 1;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n.fc-size-xs.fc .dcc .tile.front {\n  top: 0; }\n\n.fc-size-xs.fc .dcc .tile.back {\n  bottom: 0; }\n\n.fc-size-xs.fc .dcc .digit {\n  position: absolute;\n  height: 6px;\n  width: 100%;\n  left: 0; }\n\n.fc-size-xs.fc .dcc .front .digit {\n  top: 0; }\n\n.fc-size-xs.fc .dcc .back .digit {\n  bottom: 0;\n  padding-bottom: 6px; }\n\n.fc-size-xs.fc .dcc .perspective-wrapper {\n  z-index: 8;\n  -webkit-perspective: 400px;\n          perspective: 400px; }\n\n.fc-size-xs.fc .dcc .switchover {\n  width: 7px;\n  height: 6px;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  -webkit-transform-origin: 50% 100%;\n      -ms-transform-origin: 50% 100%;\n          transform-origin: 50% 100%;\n  -webkit-transition: -webkit-transform 0.5s ease-in;\n  transition: -webkit-transform 0.5s ease-in;\n  -o-transition: transform 0.5s ease-in;\n  transition: transform 0.5s ease-in;\n  transition: transform 0.5s ease-in, -webkit-transform 0.5s ease-in; }\n\n.fc-size-xs.fc .dcc.animate .switchover {\n  -webkit-transform: rotateX(-180deg);\n          transform: rotateX(-180deg); }\n\n.fc-size-xs.fc .dcc .switchover .front {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n.fc-size-xs.fc .dcc .switchover .back {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform: rotateX(180deg);\n          transform: rotateX(180deg); }\n\n.fc-size-sm.fc .dcc {\n  width: 15px;\n  height: 24px;\n  background-color: #222222;\n  text-align: center;\n  -webkit-box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.5);\n          box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.5);\n  border-radius: 2px;\n  float: right;\n  margin-left: 2px;\n  position: relative;\n  color: #ffffff;\n  font-family: sans-serif;\n  font-size: 24px; }\n\n.fc-size-sm.fc .dcc .hinge {\n  width: 15px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.75);\n  -webkit-box-shadow: 0 5px 7px -4px rgba(0, 0, 0, 0.7);\n          box-shadow: 0 5px 7px -4px rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 12px;\n  z-index: 9; }\n\n.fc-size-sm.fc .dcc .tile {\n  position: absolute;\n  left: 0;\n  width: 15px;\n  height: 12px;\n  border-radius: 2px;\n  overflow: hidden;\n  background-color: #222222;\n  line-height: 1;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n.fc-size-sm.fc .dcc .tile.front {\n  top: 0; }\n\n.fc-size-sm.fc .dcc .tile.back {\n  bottom: 0; }\n\n.fc-size-sm.fc .dcc .digit {\n  position: absolute;\n  height: 12px;\n  width: 100%;\n  left: 0; }\n\n.fc-size-sm.fc .dcc .front .digit {\n  top: 0; }\n\n.fc-size-sm.fc .dcc .back .digit {\n  bottom: 0;\n  padding-bottom: 12px; }\n\n.fc-size-sm.fc .dcc .perspective-wrapper {\n  z-index: 8;\n  -webkit-perspective: 400px;\n          perspective: 400px; }\n\n.fc-size-sm.fc .dcc .switchover {\n  width: 15px;\n  height: 12px;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  -webkit-transform-origin: 50% 100%;\n      -ms-transform-origin: 50% 100%;\n          transform-origin: 50% 100%;\n  -webkit-transition: -webkit-transform 0.5s ease-in;\n  transition: -webkit-transform 0.5s ease-in;\n  -o-transition: transform 0.5s ease-in;\n  transition: transform 0.5s ease-in;\n  transition: transform 0.5s ease-in, -webkit-transform 0.5s ease-in; }\n\n.fc-size-sm.fc .dcc.animate .switchover {\n  -webkit-transform: rotateX(-180deg);\n          transform: rotateX(-180deg); }\n\n.fc-size-sm.fc .dcc .switchover .front {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n.fc-size-sm.fc .dcc .switchover .back {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform: rotateX(180deg);\n          transform: rotateX(180deg); }\n\n.fc-size-md.fc .dcc {\n  width: 30px;\n  height: 48px;\n  background-color: #222222;\n  text-align: center;\n  -webkit-box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.5);\n          box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.5);\n  border-radius: 5px;\n  float: right;\n  margin-left: 5px;\n  position: relative;\n  color: #ffffff;\n  font-family: sans-serif;\n  font-size: 48px; }\n\n.fc-size-md.fc .dcc .hinge {\n  width: 30px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.75);\n  -webkit-box-shadow: 0 5px 7px -4px rgba(0, 0, 0, 0.7);\n          box-shadow: 0 5px 7px -4px rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 24px;\n  z-index: 9; }\n\n.fc-size-md.fc .dcc .tile {\n  position: absolute;\n  left: 0;\n  width: 30px;\n  height: 24px;\n  border-radius: 5px;\n  overflow: hidden;\n  background-color: #222222;\n  line-height: 1;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n.fc-size-md.fc .dcc .tile.front {\n  top: 0; }\n\n.fc-size-md.fc .dcc .tile.back {\n  bottom: 0; }\n\n.fc-size-md.fc .dcc .digit {\n  position: absolute;\n  height: 24px;\n  width: 100%;\n  left: 0; }\n\n.fc-size-md.fc .dcc .front .digit {\n  top: 0; }\n\n.fc-size-md.fc .dcc .back .digit {\n  bottom: 0;\n  padding-bottom: 24px; }\n\n.fc-size-md.fc .dcc .perspective-wrapper {\n  z-index: 8;\n  -webkit-perspective: 400px;\n          perspective: 400px; }\n\n.fc-size-md.fc .dcc .switchover {\n  width: 30px;\n  height: 24px;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  -webkit-transform-origin: 50% 100%;\n      -ms-transform-origin: 50% 100%;\n          transform-origin: 50% 100%;\n  -webkit-transition: -webkit-transform 0.5s ease-in;\n  transition: -webkit-transform 0.5s ease-in;\n  -o-transition: transform 0.5s ease-in;\n  transition: transform 0.5s ease-in;\n  transition: transform 0.5s ease-in, -webkit-transform 0.5s ease-in; }\n\n.fc-size-md.fc .dcc.animate .switchover {\n  -webkit-transform: rotateX(-180deg);\n          transform: rotateX(-180deg); }\n\n.fc-size-md.fc .dcc .switchover .front {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n.fc-size-md.fc .dcc .switchover .back {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform: rotateX(180deg);\n          transform: rotateX(180deg); }\n\n.fc-size-lg.fc .dcc {\n  width: 60px;\n  height: 90px;\n  background-color: #222222;\n  text-align: center;\n  -webkit-box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.5);\n          box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.5);\n  border-radius: 7px;\n  float: right;\n  margin-left: 7px;\n  position: relative;\n  color: #ffffff;\n  font-family: sans-serif;\n  font-size: 90px; }\n\n.fc-size-lg.fc .dcc .hinge {\n  width: 60px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.75);\n  -webkit-box-shadow: 0 5px 7px -4px rgba(0, 0, 0, 0.7);\n          box-shadow: 0 5px 7px -4px rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 45px;\n  z-index: 9; }\n\n.fc-size-lg.fc .dcc .tile {\n  position: absolute;\n  left: 0;\n  width: 60px;\n  height: 45px;\n  border-radius: 7px;\n  overflow: hidden;\n  background-color: #222222;\n  line-height: 1;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n.fc-size-lg.fc .dcc .tile.front {\n  top: 0; }\n\n.fc-size-lg.fc .dcc .tile.back {\n  bottom: 0; }\n\n.fc-size-lg.fc .dcc .digit {\n  position: absolute;\n  height: 45px;\n  width: 100%;\n  left: 0; }\n\n.fc-size-lg.fc .dcc .front .digit {\n  top: 0; }\n\n.fc-size-lg.fc .dcc .back .digit {\n  bottom: 0;\n  padding-bottom: 45px; }\n\n.fc-size-lg.fc .dcc .perspective-wrapper {\n  z-index: 8;\n  -webkit-perspective: 400px;\n          perspective: 400px; }\n\n.fc-size-lg.fc .dcc .switchover {\n  width: 60px;\n  height: 45px;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  -webkit-transform-origin: 50% 100%;\n      -ms-transform-origin: 50% 100%;\n          transform-origin: 50% 100%;\n  -webkit-transition: -webkit-transform 0.5s ease-in;\n  transition: -webkit-transform 0.5s ease-in;\n  -o-transition: transform 0.5s ease-in;\n  transition: transform 0.5s ease-in;\n  transition: transform 0.5s ease-in, -webkit-transform 0.5s ease-in; }\n\n.fc-size-lg.fc .dcc.animate .switchover {\n  -webkit-transform: rotateX(-180deg);\n          transform: rotateX(-180deg); }\n\n.fc-size-lg.fc .dcc .switchover .front {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n.fc-size-lg.fc .dcc .switchover .back {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform: rotateX(180deg);\n          transform: rotateX(180deg); }\n', '']);

// exports


        /***/
    }),
    /* 3 */
    /***/ (function (module, exports) {

        /*
            MIT License http://www.opensource.org/licenses/mit-license.php
            Author Tobias Koppers @sokra
        */
// css base code, injected by the css-loader
        module.exports = function (useSourceMap) {
            var list = [];

            // return the list of modules as css string
            list.toString = function toString() {
                return this.map(function (item) {
                    var content = cssWithMappingToString(item, useSourceMap);
                    if (item[2]) {
                        return '@media ' + item[2] + '{' + content + '}';
                    } else {
                        return content;
                    }
                }).join('');
            };

            // import a list of modules into the list
            list.i = function (modules, mediaQuery) {
                if (typeof modules === 'string')
                    modules = [[null, modules, '']];
                var alreadyImportedModules = {};
                for (var i = 0; i < this.length; i++) {
                    var id = this[i][0];
                    if (typeof id === 'number')
                        alreadyImportedModules[id] = true;
                }
                for (i = 0; i < modules.length; i++) {
                    var item = modules[i];
                    // skip already imported module
                    // this implementation is not 100% perfect for weird media query combinations
                    //  when a module is imported multiple times with different media queries.
                    //  I hope this will never occur (Hey this way we have smaller bundles)
                    if (typeof item[0] !== 'number' || !alreadyImportedModules[item[0]]) {
                        if (mediaQuery && !item[2]) {
                            item[2] = mediaQuery;
                        } else if (mediaQuery) {
                            item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
                        }
                        list.push(item);
                    }
                }
            };
            return list;
        };

        function cssWithMappingToString(item, useSourceMap) {
            var content = item[1] || '';
            var cssMapping = item[3];
            if (!cssMapping) {
                return content;
            }

            if (useSourceMap && typeof btoa === 'function') {
                var sourceMapping = toComment(cssMapping);
                var sourceURLs = cssMapping.sources.map(function (source) {
                    return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
                });

                return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
            }

            return [content].join('\n');
        }

// Adapted from convert-source-map (MIT)
        function toComment(sourceMap) {
            // eslint-disable-next-line no-undef
            var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
            var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

            return '/*# ' + data + ' */';
        }


        /***/
    }),
    /* 4 */
    /***/ (function (module, exports, __webpack_require__) {

        /*
            MIT License http://www.opensource.org/licenses/mit-license.php
            Author Tobias Koppers @sokra
        */

        var stylesInDom = {};

        var memoize = function (fn) {
            var memo;

            return function () {
                if (typeof memo === 'undefined') memo = fn.apply(this, arguments);
                return memo;
            };
        };

        var isOldIE = memoize(function () {
            // Test for IE <= 9 as proposed by Browserhacks
            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
            // Tests for existence of standard globals is to allow style-loader
            // to operate correctly into non-standard environments
            // @see https://github.com/webpack-contrib/style-loader/issues/177
            return window && document && document.all && !window.atob;
        });

        var getTarget = function (target) {
            return document.querySelector(target);
        };

        var getElement = (function (fn) {
            var memo = {};

            return function (target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                    return target();
                }
                if (typeof memo[target] === 'undefined') {
                    var styleTarget = getTarget.call(this, target);
                    // Special case to return head of iframe instead of iframe itself
                    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                        try {
                            // This will throw an exception if access to iframe is blocked
                            // due to cross-origin restrictions
                            styleTarget = styleTarget.contentDocument.head;
                        } catch (e) {
                            styleTarget = null;
                        }
                    }
                    memo[target] = styleTarget;
                }
                return memo[target]
            };
        })();

        var singleton = null;
        var singletonCounter = 0;
        var stylesInsertedAtTop = [];

        var fixUrls = __webpack_require__(5);

        module.exports = function (list, options) {
            if (typeof DEBUG !== 'undefined' && DEBUG) {
                if (typeof document !== 'object') throw new Error('The style-loader cannot be used in a non-browser environment');
            }

            options = options || {};

            options.attrs = typeof options.attrs === 'object' ? options.attrs : {};

            // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
            // tags it will allow on a page
            if (!options.singleton && typeof options.singleton !== 'boolean') options.singleton = isOldIE();

            // By default, add <style> tags to the <head> element
            if (!options.insertInto) options.insertInto = 'head';

            // By default, add <style> tags to the bottom of the target
            if (!options.insertAt) options.insertAt = 'bottom';

            var styles = listToStyles(list, options);

            addStylesToDom(styles, options);

            return function update(newList) {
                var mayRemove = [];

                for (var i = 0; i < styles.length; i++) {
                    var item = styles[i];
                    var domStyle = stylesInDom[item.id];

                    domStyle.refs--;
                    mayRemove.push(domStyle);
                }

                if (newList) {
                    var newStyles = listToStyles(newList, options);
                    addStylesToDom(newStyles, options);
                }

                for (var i = 0; i < mayRemove.length; i++) {
                    var domStyle = mayRemove[i];

                    if (domStyle.refs === 0) {
                        for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

                        delete stylesInDom[domStyle.id];
                    }
                }
            };
        };

        function addStylesToDom(styles, options) {
            for (var i = 0; i < styles.length; i++) {
                var item = styles[i];
                var domStyle = stylesInDom[item.id];

                if (domStyle) {
                    domStyle.refs++;

                    for (var j = 0; j < domStyle.parts.length; j++) {
                        domStyle.parts[j](item.parts[j]);
                    }

                    for (; j < item.parts.length; j++) {
                        domStyle.parts.push(addStyle(item.parts[j], options));
                    }
                } else {
                    var parts = [];

                    for (var j = 0; j < item.parts.length; j++) {
                        parts.push(addStyle(item.parts[j], options));
                    }

                    stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
                }
            }
        }

        function listToStyles(list, options) {
            var styles = [];
            var newStyles = {};

            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                var id = options.base ? item[0] + options.base : item[0];
                var css = item[1];
                var media = item[2];
                var sourceMap = item[3];
                var part = {css: css, media: media, sourceMap: sourceMap};

                if (!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
                else newStyles[id].parts.push(part);
            }

            return styles;
        }

        function insertStyleElement(options, style) {
            var target = getElement(options.insertInto);

            if (!target) {
                throw new Error('Couldn\'t find a style target. This probably means that the value for the \'insertInto\' parameter is invalid.');
            }

            var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

            if (options.insertAt === 'top') {
                if (!lastStyleElementInsertedAtTop) {
                    target.insertBefore(style, target.firstChild);
                } else if (lastStyleElementInsertedAtTop.nextSibling) {
                    target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
                } else {
                    target.appendChild(style);
                }
                stylesInsertedAtTop.push(style);
            } else if (options.insertAt === 'bottom') {
                target.appendChild(style);
            } else if (typeof options.insertAt === 'object' && options.insertAt.before) {
                var nextSibling = getElement(options.insertInto + ' ' + options.insertAt.before);
                target.insertBefore(style, nextSibling);
            } else {
                throw new Error('[Style Loader]\n\n Invalid value for parameter \'insertAt\' (\'options.insertAt\') found.\n Must be \'top\', \'bottom\', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n');
            }
        }

        function removeStyleElement(style) {
            if (style.parentNode === null) return false;
            style.parentNode.removeChild(style);

            var idx = stylesInsertedAtTop.indexOf(style);
            if (idx >= 0) {
                stylesInsertedAtTop.splice(idx, 1);
            }
        }

        function createStyleElement(options) {
            var style = document.createElement('style');

            options.attrs.type = 'text/css';

            addAttrs(style, options.attrs);
            insertStyleElement(options, style);

            return style;
        }

        function createLinkElement(options) {
            var link = document.createElement('link');

            options.attrs.type = 'text/css';
            options.attrs.rel = 'stylesheet';

            addAttrs(link, options.attrs);
            insertStyleElement(options, link);

            return link;
        }

        function addAttrs(el, attrs) {
            Object.keys(attrs).forEach(function (key) {
                el.setAttribute(key, attrs[key]);
            });
        }

        function addStyle(obj, options) {
            var style, update, remove, result;

            // If a transform function was defined, run it on the css
            if (options.transform && obj.css) {
                result = options.transform(obj.css);

                if (result) {
                    // If transform returns a value, use that instead of the original css.
                    // This allows running runtime transformations on the css.
                    obj.css = result;
                } else {
                    // If the transform function returns a falsy value, don't add this css.
                    // This allows conditional loading of css
                    return function () {
                        // noop
                    };
                }
            }

            if (options.singleton) {
                var styleIndex = singletonCounter++;

                style = singleton || (singleton = createStyleElement(options));

                update = applyToSingletonTag.bind(null, style, styleIndex, false);
                remove = applyToSingletonTag.bind(null, style, styleIndex, true);

            } else if (
                obj.sourceMap &&
                typeof URL === 'function' &&
                typeof URL.createObjectURL === 'function' &&
                typeof URL.revokeObjectURL === 'function' &&
                typeof Blob === 'function' &&
                typeof btoa === 'function'
            ) {
                style = createLinkElement(options);
                update = updateLink.bind(null, style, options);
                remove = function () {
                    removeStyleElement(style);

                    if (style.href) URL.revokeObjectURL(style.href);
                };
            } else {
                style = createStyleElement(options);
                update = applyToTag.bind(null, style);
                remove = function () {
                    removeStyleElement(style);
                };
            }

            update(obj);

            return function updateStyle(newObj) {
                if (newObj) {
                    if (
                        newObj.css === obj.css &&
                        newObj.media === obj.media &&
                        newObj.sourceMap === obj.sourceMap
                    ) {
                        return;
                    }

                    update(obj = newObj);
                } else {
                    remove();
                }
            };
        }

        var replaceText = (function () {
            var textStore = [];

            return function (index, replacement) {
                textStore[index] = replacement;

                return textStore.filter(Boolean).join('\n');
            };
        })();

        function applyToSingletonTag(style, index, remove, obj) {
            var css = remove ? '' : obj.css;

            if (style.styleSheet) {
                style.styleSheet.cssText = replaceText(index, css);
            } else {
                var cssNode = document.createTextNode(css);
                var childNodes = style.childNodes;

                if (childNodes[index]) style.removeChild(childNodes[index]);

                if (childNodes.length) {
                    style.insertBefore(cssNode, childNodes[index]);
                } else {
                    style.appendChild(cssNode);
                }
            }
        }

        function applyToTag(style, obj) {
            var css = obj.css;
            var media = obj.media;

            if (media) {
                style.setAttribute('media', media)
            }

            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                while (style.firstChild) {
                    style.removeChild(style.firstChild);
                }

                style.appendChild(document.createTextNode(css));
            }
        }

        function updateLink(link, options, obj) {
            var css = obj.css;
            var sourceMap = obj.sourceMap;

            /*
                If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
                and there is no publicPath defined then lets turn convertToAbsoluteUrls
                on by default.  Otherwise default to the convertToAbsoluteUrls option
                directly
            */
            var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

            if (options.convertToAbsoluteUrls || autoFixUrls) {
                css = fixUrls(css);
            }

            if (sourceMap) {
                // http://stackoverflow.com/a/26603875
                css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */';
            }

            var blob = new Blob([css], {type: 'text/css'});

            var oldSrc = link.href;

            link.href = URL.createObjectURL(blob);

            if (oldSrc) URL.revokeObjectURL(oldSrc);
        }


        /***/
    }),
    /* 5 */
    /***/ (function (module, exports) {


        /**
         * When source maps are enabled, `style-loader` uses a link element with a data-uri to
         * embed the css on the page. This breaks all relative urls because now they are relative to a
         * bundle instead of the current page.
         *
         * One solution is to only use full urls, but that may be impossible.
         *
         * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
         *
         * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
         *
         */

        module.exports = function (css) {
            // get current location
            var location = typeof window !== 'undefined' && window.location;

            if (!location) {
                throw new Error('fixUrls requires window.location');
            }

            // blank or null?
            if (!css || typeof css !== 'string') {
                return css;
            }

            var baseUrl = location.protocol + '//' + location.host;
            var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, '/');

            // convert each url(...)
            /*
            This regular expression is just a way to recursively match brackets within
            a string.

             /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
               (  = Start a capturing group
                 (?:  = Start a non-capturing group
                     [^)(]  = Match anything that isn't a parentheses
                     |  = OR
                     \(  = Match a start parentheses
                         (?:  = Start another non-capturing groups
                             [^)(]+  = Match anything that isn't a parentheses
                             |  = OR
                             \(  = Match a start parentheses
                                 [^)(]*  = Match anything that isn't a parentheses
                             \)  = Match a end parentheses
                         )  = End Group
                      *\) = Match anything and then a close parens
                  )  = Close non-capturing group
                  *  = Match anything
               )  = Close capturing group
             \)  = Match a close parens

             /gi  = Get all matches, not the first.  Be case insensitive.
             */
            var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
                // strip quotes (if they exist)
                var unquotedOrigUrl = origUrl
                    .trim()
                    .replace(/^"(.*)"$/, function (o, $1) {
                        return $1;
                    })
                    .replace(/^'(.*)'$/, function (o, $1) {
                        return $1;
                    });

                // already a full url? no change
                if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
                    return fullMatch;
                }

                // convert the url to a full url
                var newUrl;

                if (unquotedOrigUrl.indexOf('//') === 0) {
                    //TODO: should we add protocol?
                    newUrl = unquotedOrigUrl;
                } else if (unquotedOrigUrl.indexOf('/') === 0) {
                    // path should be relative to the base url
                    newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
                } else {
                    // path should be relative to current directory
                    newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ''); // Strip leading './'
                }

                // send back the fixed url(...)
                return 'url(' + JSON.stringify(newUrl) + ')';
            });

            // send back the fixed css
            return fixedCss;
        };


        /***/
    }),
    /* 6 */
    /***/ (function (module, exports, __webpack_require__) {

        'use strict';
        /* WEBPACK VAR INJECTION */
        (function (process) {

            Object.defineProperty(exports, '__esModule', {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ('value' in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            __webpack_require__(0);

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            'use strict';

            if (process.env.NODE_ENV === 'production') {
                console.log('FlipCounterJs production mode.');
            }

            var document = window.document;
            var defaults = {
                step: 1,
                speed: 0,
                minDigits: 4,
                start: 0,
                size: 'sm'
            };
            var extend = function extend(target, defaults) {
                for (var p in defaults) {
                    if (!target.hasOwnProperty(p)) target[p] = defaults[p];
                }
                return target;
            };

            var FlipCounterJs = function () {
                function FlipCounterJs(element, options) {
                    _classCallCheck(this, FlipCounterJs);

                    this.element = element;
                    if (!options) {
                        options = {};
                    }
                    this.options = extend(options, defaults);
                    this.counter = this.options.start;
                    this.init();
                    if (this.options.speed > 0) {
                        if (this.options.speed < 500) {
                            this.options.speed = 500;
                            console.log('[FlipCounterJs] The speed can\'t be quicker than 500ms, it\'s automatically adjusted.');
                        }
                        (function (self) {
                            setInterval(function () {
                                self.increment(self.options.step);
                            }, self.options.speed);
                        })(this);
                    }
                }

                _createClass(FlipCounterJs, [{
                    key: 'init',
                    value: function init() {
                        var container = this.element;
                        var fc = document.createElement('div');
                        fc.classList.add('fc');
                        fc.classList.add('fc-size-' + this.options.size);
                        container.innerHTML = '';
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
                        var newCounter = parseInt(this.counter) + parseInt(val);
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
                                (function (i, fc, dcc) {
                                    setTimeout(function () {
                                        fc.replaceChild(parseDom(createDigitCardContainer(newNumberArray[i], newNumberArray[i])), dcc);
                                    }, 400);
                                })(i, fc, dcc);
                            }
                            i--;
                        }
                        this.counter = newCounter;
                        this.numberArray = newNumberArray;
                    }
                }]);

                return FlipCounterJs;
            }();

            exports.default = FlipCounterJs;


            function numberToArray(number) {
                if (isNaN(number)) {
                    return [];
                }
                return number.toString().split('').reverse();
            }

            function createDigitCardContainer(oldVal, newVal) {
                return '<div class="dcc">\n' + '        <div class="tile front"><span class="digit">' + newVal + '</span></div>\n' + '        <div class="hinge"></div>\n' + '        <div class="tile back"><span class="digit">' + oldVal + '</span></div>\n' + '        <div class="perspective-wrapper">\n' + '            <div class="switchover">\n' + '                <div class="tile front"><span class="digit">' + oldVal + '</span></div>\n' + '                <div class="tile back"><span class="digit">' + newVal + '</span></div>\n' + '            </div>\n' + '        </div>\n' + '    </div>';
            }

            function parseDom(html) {
                var temp = document.createElement('div');
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

            (function (window) {
                var elements = window.document.querySelectorAll('[data-flip-counter-js]');
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var el = _step.value;

                        var options = {};
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = Object.keys(defaults)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var key = _step2.value;

                                var attrName = 'data-fc-' + key;
                                if (el.hasAttribute(attrName)) {
                                    options[key] = el.getAttribute(attrName);
                                }
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }

                        new FlipCounterJs(el, options);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            })(window);
            /* WEBPACK VAR INJECTION */
        }.call(exports, __webpack_require__(7)))

        /***/
    }),
    /* 7 */
    /***/ (function (module, exports) {

// shim for using process in browser
        var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

        var cachedSetTimeout;
        var cachedClearTimeout;

        function defaultSetTimout() {
            throw new Error('setTimeout has not been defined');
        }

        function defaultClearTimeout() {
            throw new Error('clearTimeout has not been defined');
        }

        (function () {
            try {
                if (typeof setTimeout === 'function') {
                    cachedSetTimeout = setTimeout;
                } else {
                    cachedSetTimeout = defaultSetTimout;
                }
            } catch (e) {
                cachedSetTimeout = defaultSetTimout;
            }
            try {
                if (typeof clearTimeout === 'function') {
                    cachedClearTimeout = clearTimeout;
                } else {
                    cachedClearTimeout = defaultClearTimeout;
                }
            } catch (e) {
                cachedClearTimeout = defaultClearTimeout;
            }
        }());

        function runTimeout(fun) {
            if (cachedSetTimeout === setTimeout) {
                //normal enviroments in sane situations
                return setTimeout(fun, 0);
            }
            // if setTimeout wasn't available but was latter defined
            if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                cachedSetTimeout = setTimeout;
                return setTimeout(fun, 0);
            }
            try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedSetTimeout(fun, 0);
            } catch (e) {
                try {
                    // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                    return cachedSetTimeout.call(null, fun, 0);
                } catch (e) {
                    // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                    return cachedSetTimeout.call(this, fun, 0);
                }
            }


        }

        function runClearTimeout(marker) {
            if (cachedClearTimeout === clearTimeout) {
                //normal enviroments in sane situations
                return clearTimeout(marker);
            }
            // if clearTimeout wasn't available but was latter defined
            if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                cachedClearTimeout = clearTimeout;
                return clearTimeout(marker);
            }
            try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedClearTimeout(marker);
            } catch (e) {
                try {
                    // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                    return cachedClearTimeout.call(null, marker);
                } catch (e) {
                    // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                    // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                    return cachedClearTimeout.call(this, marker);
                }
            }


        }

        var queue = [];
        var draining = false;
        var currentQueue;
        var queueIndex = -1;

        function cleanUpNextTick() {
            if (!draining || !currentQueue) {
                return;
            }
            draining = false;
            if (currentQueue.length) {
                queue = currentQueue.concat(queue);
            } else {
                queueIndex = -1;
            }
            if (queue.length) {
                drainQueue();
            }
        }

        function drainQueue() {
            if (draining) {
                return;
            }
            var timeout = runTimeout(cleanUpNextTick);
            draining = true;

            var len = queue.length;
            while (len) {
                currentQueue = queue;
                queue = [];
                while (++queueIndex < len) {
                    if (currentQueue) {
                        currentQueue[queueIndex].run();
                    }
                }
                queueIndex = -1;
                len = queue.length;
            }
            currentQueue = null;
            draining = false;
            runClearTimeout(timeout);
        }

        process.nextTick = function (fun) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1) {
                for (var i = 1; i < arguments.length; i++) {
                    args[i - 1] = arguments[i];
                }
            }
            queue.push(new Item(fun, args));
            if (queue.length === 1 && !draining) {
                runTimeout(drainQueue);
            }
        };

// v8 likes predictible objects
        function Item(fun, array) {
            this.fun = fun;
            this.array = array;
        }

        Item.prototype.run = function () {
            this.fun.apply(null, this.array);
        };
        process.title = 'browser';
        process.browser = true;
        process.env = {};
        process.argv = [];
        process.version = ''; // empty string to avoid regexp issues
        process.versions = {};

        function noop() {
        }

        process.on = noop;
        process.addListener = noop;
        process.once = noop;
        process.off = noop;
        process.removeListener = noop;
        process.removeAllListeners = noop;
        process.emit = noop;
        process.prependListener = noop;
        process.prependOnceListener = noop;

        process.listeners = function (name) {
            return []
        };

        process.binding = function (name) {
            throw new Error('process.binding is not supported');
        };

        process.cwd = function () {
            return '/'
        };
        process.chdir = function (dir) {
            throw new Error('process.chdir is not supported');
        };
        process.umask = function () {
            return 0;
        };


        /***/
    })
    /******/]);
//# sourceMappingURL=dev.js.map