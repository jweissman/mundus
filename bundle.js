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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/game.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/game.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".game {\r\n    padding: 550px;\r\n};\r\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
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
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
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

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
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
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

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

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
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
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


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
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

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
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/Engine.ts":
/*!***********************!*\
  !*** ./src/Engine.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var World_1 = __webpack_require__(/*! ./models/World */ "./src/models/World.ts");
var Engine = /** @class */ (function () {
    function Engine(options) {
        if (options === void 0) { options = {}; }
        this.options = options;
        this.world = new World_1.World(options.worldNameIdeas, options.rulerNameIdeas);
    }
    Object.defineProperty(Engine, "version", {
        get: function () { return "1.0.0"; },
        enumerable: true,
        configurable: true
    });
    Engine.prototype.narrate = function () {
        var narrative = "This land is " + this.world.describe() + ".";
        narrative += "Our ruler is " + this.world.ruler.description + ".";
        return narrative;
    };
    Engine.prototype.exampleIndividual = function () {
        return this.world.randomPerson();
    };
    Engine.prototype.exampleLocation = function () {
        return this.world.randomPlace();
    };
    return Engine;
}());
exports.Engine = Engine;


/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Engine_1 = __webpack_require__(/*! ./Engine */ "./src/Engine.ts");
var Game = /** @class */ (function () {
    function Game() {
        this.engine = new Engine_1.Engine();
    }
    Game.prototype.play = function () {
        return [
            this.history(),
            this.heroJourney(),
        ].join("\r\n");
    };
    Game.prototype.history = function () {
        var message = "HISTORY. ";
        message += "Let me tell you about the history of our world, ";
        // message += this.engine.world.describe();
        message += this.engine.narrate();
        message += ". In the beginning Eru (One) created Luminous (Light) and Sonus (Music)...";
        // message += "\r\n" + this.heroJourney();
        return message;
    };
    Game.prototype.heroJourney = function () {
        var message = "JOURNEY. ";
        var person = this.engine.exampleIndividual();
        var place = this.engine.exampleLocation();
        message += "I am " + person.description + ", ";
        message += "and I am on a journey to " + place.description + ". ";
        message += "Let's go! ";
        var anotherPlace = this.engine.exampleLocation();
        message += "We will visit " + anotherPlace.description + ". ";
        return message;
    };
    return Game;
}());
exports.default = Game;


/***/ }),

/***/ "./src/Util.ts":
/*!*********************!*\
  !*** ./src/Util.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
function sample(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
exports.sample = sample;
function sampleN(arr, n) {
    var picks = [];
    var i = 0;
    while (i < n) {
        i++;
        picks.push(sample(arr));
    }
    return picks;
}
// export function sample<T>(arr: T[], n = 1): T | T[] {
//   if (arr) {
//     if (n === 1) {
//       return sampleOnce(arr);
//     } else if (n > 1) {
//       return sampleN(arr, n);
//     }
//   } else {
//     // tslint:disable-next-line:no-console
//     console.warn("Tried to sample, but given non-array: ", { arr });
//   }
// }
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
exports.capitalize = capitalize;
function genArray(n, cb) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr.push(cb());
    }
    return arr;
}
exports.genArray = genArray;
/*
Copyright (c) 2011 Andrei Mackenzie
Permission is hereby granted, free of charge,
to any person obtaining a copy of this software
and associated documentation files (the "Software"),
to deal in the Software without restriction,
including without limitation the rights to use, copy,
modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom
the Software is furnished to do so, subject to the following
conditions:
The above copyright notice and this permission notice shall
be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// Compute the edit distance between the two given strings
function getEditDistance(a, b) {
    if (a.length === 0) {
        return b.length;
    }
    if (b.length === 0) {
        return a.length;
    }
    var matrix = [];
    // increment along the first column of each row
    var i;
    for (i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    // increment each column in the first row
    var j;
    for (j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }
    // Fill in the rest of the matrix
    for (i = 1; i <= b.length; i++) {
        for (j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            }
            else {
                matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, // substitution
                Math.min(matrix[i][j - 1] + 1, // insertion
                matrix[i - 1][j] + 1)); // deletion
            }
        }
    }
    return matrix[b.length][a.length];
}
exports.getEditDistance = getEditDistance;
function zipToObject(array, other) {
    return array.reduce(function (obj, k, i) {
        var _a;
        return (__assign({}, obj, (_a = {}, _a[k] = other[i], _a)));
    }, {});
}
exports.zipToObject = zipToObject;
;
function shuffle(arr) {
    return arr.slice().sort(function () { return Math.random() > 0.5 ? -1 : 1; });
}
exports.shuffle = shuffle;
;


/***/ }),

/***/ "./src/game.css":
/*!**********************!*\
  !*** ./src/game.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./game.css */ "./node_modules/css-loader/dist/cjs.js!./src/game.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = __webpack_require__(/*! ./Game */ "./src/Game.ts");
__webpack_require__(/*! ./game.css */ "./src/game.css");
if (typeof document !== "undefined") {
    var game = new Game_1.default();
    var root = document.createElement("div");
    root.classList.add("game");
    var history_1 = document.createElement("div");
    history_1.textContent = game.history();
    root.appendChild(history_1);
    var journey = document.createElement("div");
    journey.textContent = game.heroJourney();
    root.appendChild(journey);
    document.body.appendChild(root);
}
exports.default = Game_1.default;


/***/ }),

/***/ "./src/models/Culture.ts":
/*!*******************************!*\
  !*** ./src/models/Culture.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__(/*! ../Util */ "./src/Util.ts");
var Idea_1 = __webpack_require__(/*! ./Idea */ "./src/models/Idea.ts");
var Language_1 = __webpack_require__(/*! ./Language */ "./src/models/Language.ts");
var Life_1 = __webpack_require__(/*! ./Life */ "./src/models/Life.ts");
var Culture = /** @class */ (function () {
    function Culture(life, language) {
        if (life === void 0) { life = Life_1.Life.natural; }
        if (language === void 0) { language = Language_1.Language.common; }
        this.life = life;
        this.language = language;
    }
    Culture.prototype.bestowIndividualAspect = function (profession) {
        if (profession === void 0) { profession = this.bestowProfession(); }
        return this.life.generateAspect(profession);
    };
    Culture.prototype.bestowProfession = function () {
        return this.life.generateActivity();
    };
    Culture.prototype.bestowGivenName = function (individual) {
        return Util_1.sample(Idea_1.allAspects.slice());
    };
    Culture.prototype.bestowMidName = function (individual) {
        return Util_1.sample([
            "humble",
            "steady",
            "industrious",
        ]); // allAspects);
    };
    Culture.prototype.bestowFamilyName = function (individual) {
        return Util_1.sample(Idea_1.allThings);
    };
    Culture.prototype.bestowName = function (entity) {
        return Util_1.sample(Idea_1.allIdeas);
    };
    Culture.prototype.say = function (word) {
        return this.language.write(word);
    };
    Culture.prototype.bestowIndividualName = function (individual, nameOpts) {
        if (nameOpts === void 0) { nameOpts = {}; }
        var forename = nameOpts.forename, midname = nameOpts.midname, surname = nameOpts.surname;
        return [
            forename || this.bestowGivenName(individual),
            midname || this.bestowMidName(individual),
            surname || this.bestowFamilyName(individual),
        ];
    };
    Culture.major = new Culture();
    return Culture;
}());
exports.Culture = Culture;


/***/ }),

/***/ "./src/models/Dictionary.ts":
/*!**********************************!*\
  !*** ./src/models/Dictionary.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable: object-literal-sort-keys
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__(/*! ../Util */ "./src/Util.ts");
var Idea_1 = __webpack_require__(/*! ./Idea */ "./src/models/Idea.ts");
var Word_1 = __webpack_require__(/*! ./Word */ "./src/models/Word.ts");
var streamline = function (str) {
    var repeats = 3;
    var streamlineVowels = function (s) { return s.replace(/[aeiouy]+/gi, function (v) { return v.slice(0, repeats); }); };
    var streamlineConsonants = function (s) { return s.replace(/[^aeiouy]+/gi, function (v) { return v.slice(0, repeats); }); };
    var streamlineRepeats = function (s) { return Array.from(new Set(s)).join(""); };
    // remove repeated characters
    return streamlineRepeats(streamlineConsonants(streamlineVowels(str)));
};
var pickForm = function (phonemes) {
    var roots = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        roots[_i - 1] = arguments[_i];
    }
    return streamline(roots.concat([phonemes.stems[0]]).join(phonemes.stems[0]));
};
function searchDictionary(dictionary, target) {
    return dictionary[target];
}
exports.searchDictionary = searchDictionary;
function makeDictionary(phonemes, randomize) {
    if (randomize === void 0) { randomize = false; }
    var form = function () {
        var rts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rts[_i] = arguments[_i];
        }
        return pickForm.apply(void 0, [phonemes].concat(rts));
    };
    var word = Word_1.defineWord;
    var suffix = {
        adjective: phonemes.leaves[0],
        noun: phonemes.leaves[1],
    };
    var noun = function (idea, f) { return word(idea, "noun", streamline([f, suffix.noun].join(""))); };
    var adj = function (idea, f) { return word(idea, "adjective", streamline([f, suffix.adjective].join(""))); };
    var theRoots = (phonemes.roots);
    if (randomize) {
        theRoots = Util_1.shuffle(theRoots);
    }
    // zip to object, so that we don't repeat roots
    var roots = Idea_1.allKeyIdeas.reduce(function (obj, k, i) {
        var _a;
        return (__assign({}, obj, (_a = {}, _a[k] = theRoots[i], _a)));
    }, {});
    var powerForms = {
        aurochs: form(roots.power, roots.beauty),
        courage: form(roots.power, roots.labor),
        honor: form(roots.power, roots.wealth),
        might: form(roots.power, roots.knowledge),
        haven: form(roots.power, roots.nature),
    };
    var wealthForms = {
        cattle: form(roots.wealth, roots.nature),
        plenty: form(roots.wealth, roots.labor),
        shine: form(roots.wealth, roots.power),
        glitter: form(roots.wealth, roots.beauty),
    };
    var beautyForms = {
        gift: form(roots.beauty, roots.labor),
        glimmer: form(roots.beauty, roots.power),
        glory: form(roots.beauty, roots.nature),
        inspiration: form(roots.beauty, roots.wealth),
        height: form(roots.beauty, roots.wealth),
        beauty: roots.beauty,
    };
    var forms = __assign({}, powerForms, wealthForms, beautyForms, { need: form(roots.labor), reliability: form(roots.labor), steadiness: form(roots.labor), energy: form(roots.labor, roots.power), ice: form(roots.nature), stillness: form(roots.nature), quiet: form(roots.nature), journey: form(roots.nature), brilliance: form(roots.nature), sharpness: form(roots.nature, roots.power), time: form(roots.power, roots.labor) });
    var dict = {
        aurochs: noun("aurochs", forms.aurochs),
        power: noun("power", roots.power),
        powerful: adj("powerful", form(roots.power)),
        wild: adj("wild", form(forms.aurochs)),
        courage: noun("courage", forms.courage),
        courageous: adj("courageous", form(forms.courage)),
        honor: noun("honor", forms.honor),
        honorable: adj("honorable", form(forms.honor)),
        might: noun("might", forms.might),
        mighty: adj("mighty", form(forms.might)),
        haven: noun("haven", forms.haven),
        careful: adj("careful", form(forms.haven)),
        wealth: noun("wealth", roots.wealth),
        wealthy: adj("wealthy", form(roots.wealth)),
        cattle: noun("cattle", forms.cattle),
        tame: adj("tame", form(forms.cattle)),
        plenty: noun("plenty", forms.plenty),
        plentiful: adj("plentiful", form(forms.plenty)),
        shine: noun("shine", forms.shine),
        shining: adj("shining", form(forms.shine)),
        glitter: noun("glitter", forms.glitter),
        glittering: adj("glitter", form(forms.glitter)),
        beauty: noun("beauty", roots.beauty),
        beautiful: adj("beautiful", form(roots.beauty)),
        gift: noun("gift", forms.gift),
        blessed: adj("blessed", form(forms.gift)),
        glimmer: noun("glimmer", forms.glimmer),
        glimmering: adj("glimmering", form(forms.glimmer)),
        glory: noun("glory", forms.glory),
        glorious: adj("glorious", form(forms.glory)),
        inspiration: noun("inspiration", forms.inspiration),
        inspiring: adj("inspiring", form(forms.inspiration)),
        height: noun("height", forms.height),
        elevated: adj("elevated", form(forms.height)),
        humble: noun("humble", form(forms.height)),
        humility: adj("humility", form(forms.height)),
        need: noun("need", forms.need),
        desperate: adj("desperate", form(forms.need)),
        labor: noun("labor", roots.labor),
        hardworking: adj("hardworking", form(roots.labor)),
        reliability: noun("reliability", forms.reliability),
        reliable: adj("reliable", form(forms.reliability)),
        steadiness: noun("steadiness", forms.steadiness),
        steady: adj("steady", form(forms.steadiness)),
        energy: noun("energy", forms.energy),
        industrious: adj("industrious", form(forms.energy)),
        ice: noun("ice", forms.ice),
        cold: adj("cold", form(forms.ice)),
        journey: noun("journey", forms.journey),
        vast: adj("vast", form(forms.journey)),
        stillness: noun("stillness", forms.stillness),
        still: adj("still", form(forms.stillness)),
        quiet: noun("quiet", forms.quiet),
        silent: adj("silent", form(forms.quiet)),
        brilliance: noun("brilliance", forms.brilliance),
        brilliant: adj("brilliant", form(forms.brilliance)),
        sharpness: noun("sharpness", forms.sharpness),
        sharp: adj("sharp", form(forms.sharpness)),
        yew: noun("yew", roots.nature),
        forest: noun("forest", form(roots.nature)),
        mountain: noun("forest", form(forms.height)),
        // sun: word('sun', 'noun', form(roots.nature)),
        farmer: noun("farmer", form(roots.nature, forms.cattle)),
        fighter: noun("fighter", form(forms.stillness, forms.sharpness)),
        horse: noun("horse", form(forms.energy, forms.reliability)),
        birch: noun("birch", form(roots.nature, forms.ice)),
        year: noun("year", form(forms.time, roots.nature)),
        day: noun("day", form(forms.time, forms.reliability)),
        light: noun("light", form(roots.nature, forms.height)),
        knowledge: noun("knowledge", roots.knowledge),
        nature: noun("nature", roots.nature),
        marsh: noun("marsh", form(roots.nature, forms.stillness)),
        monarch: noun("monarch", form(roots.power, forms.brilliance)),
    };
    // Konsole.log(`made the dictionary for ${this.name}`, { dict });
    return dict;
}
exports.makeDictionary = makeDictionary;


/***/ }),

/***/ "./src/models/Idea.ts":
/*!****************************!*\
  !*** ./src/models/Idea.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
// tslint:disable-next-line: no-angle-bracket-type-assertion
var primalThings = [
    "aurochs",
    "cattle",
    "horse",
    "yew",
    "birch",
    "ice",
    "need",
    "gift",
    "year",
    "day",
];
// @ts-ignore
// tslint:disable-next-line: no-angle-bracket-type-assertion
var keyIdeas = [
    "beauty",
    "knowledge",
    "labor",
    "power",
    "wealth",
    "nature",
];
exports.allKeyIdeas = keyIdeas.slice();
// @ts-ignore
// tslint:disable-next-line: no-angle-bracket-type-assertion
var landscapeFeatures = [
    "forest",
    "mountain",
    "marsh",
];
exports.allLandscapeFeatures = landscapeFeatures.slice();
// @ts-ignore
// tslint:disable-next-line: no-angle-bracket-type-assertion
var professions = [
    "farmer",
    "fighter",
    "monarch",
];
exports.allProfessions = professions.slice();
// @ts-ignore
// tslint:disable-next-line: no-angle-bracket-type-assertion
var things = [
    "courage",
    "honor",
    // "power",
    "might",
    "haven",
    // "cattle",
    // "wealth",
    "plenty",
    "shine",
    "glitter",
    "light",
    // "gift",
    "glimmer",
    "glory",
    "inspiration",
    "height",
    // "beauty",
    "humility",
    // "need",
    // "labor",
    "reliability",
    "steadiness",
    "energy",
    // "ice",
    "stillness",
    "quiet",
    "journey",
    "brilliance",
    "sharpness",
];
exports.allThings = primalThings.concat(keyIdeas, landscapeFeatures, professions, things);
// @ts-ignore
// tslint:disable-next-line: no-angle-bracket-type-assertion
var aspects = [
    "wild",
    "courageous",
    "honorable",
    "powerful",
    "mighty",
    "careful",
    "tame",
    "wealthy",
    "plentiful",
    "shining",
    "glittering",
    "blessed",
    "glimmering",
    "glorious",
    "inspiring",
    "elevated",
    "beautiful",
    "humble",
    "desperate",
    "hardworking",
    "reliable",
    "steady",
    "industrious",
    "cold",
    "still",
    "silent",
    "vast",
    "brilliant",
    "sharp",
];
exports.allAspects = aspects.slice();
exports.allIdeas = primalThings.concat(keyIdeas, landscapeFeatures, things, aspects);


/***/ }),

/***/ "./src/models/Individual.ts":
/*!**********************************!*\
  !*** ./src/models/Individual.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__(/*! ../Util */ "./src/Util.ts");
var Culture_1 = __webpack_require__(/*! ./Culture */ "./src/models/Culture.ts");
var Idea_1 = __webpack_require__(/*! ./Idea */ "./src/models/Idea.ts");
// 'psychological' model
var Individual = /** @class */ (function () {
    function Individual(nameIdeas, home, job, culture) {
        if (nameIdeas === void 0) { nameIdeas = []; }
        if (job === void 0) { job = Culture_1.Culture.major.bestowProfession(); }
        if (culture === void 0) { culture = Culture_1.Culture.major; }
        this.nameIdeas = nameIdeas;
        this.home = home;
        this.job = job;
        this.culture = culture;
        this.aspect = culture.bestowIndividualAspect(this.job);
        var _a = culture.bestowIndividualName(this, {
            forename: nameIdeas[0] || Util_1.sample(Idea_1.allAspects),
            midname: nameIdeas[1] || Util_1.sample(Idea_1.allAspects),
            surname: nameIdeas[2] || Util_1.sample(Idea_1.allThings),
        }), forename = _a[0], midname = _a[1], surname = _a[2];
        this.forename = forename;
        this.midname = midname;
        this.surname = surname;
    }
    Object.defineProperty(Individual.prototype, "name", {
        get: function () {
            var elements = [
                this.forename,
                this.midname,
                this.surname,
            ];
            return elements;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Individual.prototype, "description", {
        get: function () {
            var _this = this;
            var name = this.name.map(function (word) {
                return Util_1.capitalize(_this.culture.say(word));
            }).join(" ");
            var meaning = this.name.join(" ");
            var title = [this.aspect, this.job].join(" ");
            var origin = this.home.description;
            return name + " (" + meaning + ") the " + title + " of " + origin;
        },
        enumerable: true,
        configurable: true
    });
    Individual.prototype.say = function (idea) {
        return this.culture.say(idea);
    };
    return Individual;
}());
exports.Individual = Individual;


/***/ }),

/***/ "./src/models/Language.ts":
/*!********************************!*\
  !*** ./src/models/Language.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable: object-literal-sort-keys
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__(/*! ../Util */ "./src/Util.ts");
var Dictionary_1 = __webpack_require__(/*! ./Dictionary */ "./src/models/Dictionary.ts");
var Idea_1 = __webpack_require__(/*! ./Idea */ "./src/models/Idea.ts");
var simplePhonemes = {
    roots: [
        "lyr", "ith", "mel", "kath", "phor", "lexu", "mixa", "loruz",
    ],
    stems: [
        "i", "e",
    ],
    leaves: [
        "ie", "il", "el", "al",
    ],
};
var latinatePhonemes = {
    roots: [
        "pulchr", "aqu", "industr", "chron", "ge", "phot", "tant", "natur", "audi", "circ", "jur",
        "manu", "pac", "aut", "graph", "ae", "aeth", "hydr", "log",
        "phil", "phon", "tel", "syn", "schem", "voc", "ex", "in",
        "bibl",
    ],
    stems: [
        "a", "ae",
    ],
    leaves: [
        "ae", "am", "eon", "o", "or", "ior", "yr", "os", "on", "e", "ys", "is", "ie",
    ],
};
var Language = /** @class */ (function () {
    function Language(name) {
        this.name = name;
        this.dictionary = Dictionary_1.makeDictionary(latinatePhonemes);
    }
    Language.prototype.generateName = function () {
        var theName = Util_1.sample([
            [this.adjective(), this.noun()],
            [this.noun()],
            [this.adjective()],
        ]);
        return theName;
    };
    Language.prototype.write = function (idea) {
        return this.dictionary[idea].form;
    };
    Language.prototype.say = function (ideas, delim) {
        var _this = this;
        if (delim === void 0) { delim = " "; }
        return ideas.map(function (idea) { return Util_1.capitalize(_this.write(idea)); }).join(delim);
    };
    Language.prototype.lookup = function (idea) { return this.dictionary[idea]; };
    Language.prototype.adjective = function () {
        return this.lookup(Util_1.sample(Idea_1.allAspects));
    };
    Language.prototype.noun = function () {
        return this.lookup(Util_1.sample(Idea_1.allThings));
    };
    Language.common = new Language("Common");
    return Language;
}());
exports.Language = Language;


/***/ }),

/***/ "./src/models/Life.ts":
/*!****************************!*\
  !*** ./src/models/Life.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__(/*! ../Util */ "./src/Util.ts");
var Idea_1 = __webpack_require__(/*! ./Idea */ "./src/models/Idea.ts");
var Life = /** @class */ (function () {
    function Life(professions) {
        if (professions === void 0) { professions = Idea_1.allProfessions; }
        this.professions = professions;
    }
    Life.prototype.generateAspect = function (profession) {
        if (profession === void 0) { profession = this.generateActivity(); }
        var aspects = ["humble"];
        switch (profession) {
            case "farmer":
                aspects = ["silent"];
                break;
            case "fighter":
                aspects = ["sharp", "wealthy", "desperate"];
                break;
            default: break;
        }
        return Util_1.sample(aspects);
    };
    Life.prototype.generateActivity = function () {
        return Util_1.sample(this.professions);
    };
    Life.natural = new Life();
    return Life;
}());
exports.Life = Life;


/***/ }),

/***/ "./src/models/Place.ts":
/*!*****************************!*\
  !*** ./src/models/Place.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__(/*! ../Util */ "./src/Util.ts");
var Culture_1 = __webpack_require__(/*! ./Culture */ "./src/models/Culture.ts");
var Idea_1 = __webpack_require__(/*! ./Idea */ "./src/models/Idea.ts");
// export const allFeatures: Feature[] = Object.keys(Feature).map((key: string) => Feature[key as any] as Feature);
var Place = /** @class */ (function () {
    function Place(culture, aspect, feature) {
        if (culture === void 0) { culture = Culture_1.Culture.major; }
        if (aspect === void 0) { aspect = Util_1.sample(Idea_1.allAspects); }
        if (feature === void 0) { feature = Util_1.sample(Idea_1.allLandscapeFeatures); }
        this.culture = culture;
        this.aspect = aspect;
        this.feature = feature;
        this.givenName = culture.bestowName(this);
    }
    Object.defineProperty(Place.prototype, "description", {
        get: function () {
            return [
                Util_1.capitalize(this.culture.say(this.givenName)),
                "(" + this.givenName + ")",
                "the", this.aspect, this.feature,
            ].join(" ");
        },
        enumerable: true,
        configurable: true
    });
    return Place;
}());
exports.Place = Place;


/***/ }),

/***/ "./src/models/Society.ts":
/*!*******************************!*\
  !*** ./src/models/Society.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__(/*! ../Util */ "./src/Util.ts");
var Idea_1 = __webpack_require__(/*! ./Idea */ "./src/models/Idea.ts");
var Individual_1 = __webpack_require__(/*! ./Individual */ "./src/models/Individual.ts");
var Place_1 = __webpack_require__(/*! ./Place */ "./src/models/Place.ts");
var Society = /** @class */ (function () {
    function Society(cultures, rulerNameIdeas) {
        if (rulerNameIdeas === void 0) { rulerNameIdeas = []; }
        this.members = [];
        var initialPop = 10;
        var home = new Place_1.Place();
        this.members = Util_1.genArray(initialPop, function () { return new Individual_1.Individual([Util_1.sample(Idea_1.allAspects), Util_1.sample(Idea_1.allAspects), Util_1.sample(Idea_1.allThings)], home, "farmer", Util_1.sample(cultures)); });
        this.members.unshift(new Individual_1.Individual(rulerNameIdeas || [Util_1.sample(Idea_1.allAspects), Util_1.sample(Idea_1.allAspects), Util_1.sample(Idea_1.allThings)], home, "monarch", Util_1.sample(cultures)));
    }
    Object.defineProperty(Society.prototype, "individuals", {
        get: function () {
            return this.members;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Society.prototype, "leader", {
        get: function () {
            return this.members[0];
        },
        enumerable: true,
        configurable: true
    });
    return Society;
}());
exports.Society = Society;


/***/ }),

/***/ "./src/models/Word.ts":
/*!****************************!*\
  !*** ./src/models/Word.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function defineWord(idea, kind, form) {
    return { idea: idea, kind: kind, form: form };
}
exports.defineWord = defineWord;


/***/ }),

/***/ "./src/models/World.ts":
/*!*****************************!*\
  !*** ./src/models/World.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__(/*! ../Util */ "./src/Util.ts");
var Culture_1 = __webpack_require__(/*! ./Culture */ "./src/models/Culture.ts");
var Idea_1 = __webpack_require__(/*! ./Idea */ "./src/models/Idea.ts");
var Language_1 = __webpack_require__(/*! ./Language */ "./src/models/Language.ts");
var Place_1 = __webpack_require__(/*! ./Place */ "./src/models/Place.ts");
var Society_1 = __webpack_require__(/*! ./Society */ "./src/models/Society.ts");
var World = /** @class */ (function () {
    function World(worldNameIdeas, rulerNameIdeas) {
        if (worldNameIdeas === void 0) { worldNameIdeas = ["vast", "beauty"]; }
        if (rulerNameIdeas === void 0) { rulerNameIdeas = ["shining", "gift"]; }
        var _this = this;
        this.worldNameIdeas = worldNameIdeas;
        this.rulerNameIdeas = rulerNameIdeas;
        this.describe = function () { return _this.name + " (" + _this.worldNameIdeas.join(" ") + ")"; };
        this.randomPlace = function () { return Util_1.sample(_this.places); };
        this.randomPerson = function () { return Util_1.sample(_this.society.individuals); };
        this.places = Util_1.genArray(10, function () { return new Place_1.Place(Culture_1.Culture.major, Util_1.sample(Idea_1.allAspects), Util_1.sample(Idea_1.allLandscapeFeatures)); });
        this.society = new Society_1.Society([Culture_1.Culture.major], rulerNameIdeas);
    }
    Object.defineProperty(World.prototype, "name", {
        get: function () {
            return Language_1.Language.common.say(this.worldNameIdeas);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(World.prototype, "ruler", {
        get: function () {
            return this.society.leader;
        },
        enumerable: true,
        configurable: true
    });
    return World;
}());
exports.World = World;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map