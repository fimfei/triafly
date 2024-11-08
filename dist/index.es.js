import React, { isValidElement, PureComponent, Component, createContext, memo, useEffect, useLayoutEffect, useState, useCallback, useMemo, cloneElement, useContext } from "react";
import ReactDOM from "react-dom";
function _arrayLikeToArray$1(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n2 = Array(a); e < a; e++)
    n2[e] = r[e];
  return n2;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r))
    return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r))
    return _arrayLikeToArray$1(r);
}
function _classCallCheck$a(a, n2) {
  if (!(a instanceof n2))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties$1(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey$1(o.key), o);
  }
}
function _createClass$9(e, r, t) {
  return r && _defineProperties$1(e.prototype, r), t && _defineProperties$1(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray$1(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n2 = 0, F = function() {
      };
      return {
        s: F,
        n: function() {
          return n2 >= r.length ? {
            done: true
          } : {
            done: false,
            value: r[n2++]
          };
        },
        e: function(r2) {
          throw r2;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return {
    s: function() {
      t = t.call(r);
    },
    n: function() {
      var r2 = t.next();
      return a = r2.done, r2;
    },
    e: function(r2) {
      u = true, o = r2;
    },
    f: function() {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u)
          throw o;
      }
    }
  };
}
function _defineProperty$7(e, r, t) {
  return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _extends$g() {
  return _extends$g = Object.assign ? Object.assign.bind() : function(n2) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        ({}).hasOwnProperty.call(t, r) && (n2[r] = t[r]);
    }
    return n2;
  }, _extends$g.apply(null, arguments);
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"])
    return Array.from(r);
}
function _iterableToArrayLimit(r, l2) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n2, i, u, a = [], f2 = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l2) {
        if (Object(t) !== t)
          return;
        f2 = false;
      } else
        for (; !(f2 = (e = i.call(t)).done) && (a.push(e.value), a.length !== l2); f2 = true)
          ;
    } catch (r2) {
      o = true, n2 = r2;
    } finally {
      try {
        if (!f2 && null != t.return && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n2;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty$7(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray$1(r, e) || _nonIterableRest();
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray$1(r) || _nonIterableSpread();
}
function _toPrimitive$1(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
function _unsupportedIterableToArray$1(r, a) {
  if (r) {
    if ("string" == typeof r)
      return _arrayLikeToArray$1(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1(r, a) : void 0;
  }
}
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var hookCallback;
function hooks() {
  return hookCallback.apply(null, arguments);
}
function setHookCallback(callback) {
  hookCallback = callback;
}
function isArray$e(input) {
  return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
}
function isObject$a(input) {
  return input != null && Object.prototype.toString.call(input) === "[object Object]";
}
function hasOwnProp(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}
function isObjectEmpty(obj) {
  if (Object.getOwnPropertyNames) {
    return Object.getOwnPropertyNames(obj).length === 0;
  } else {
    var k2;
    for (k2 in obj) {
      if (hasOwnProp(obj, k2)) {
        return false;
      }
    }
    return true;
  }
}
function isUndefined$1(input) {
  return input === void 0;
}
function isNumber(input) {
  return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
}
function isDate(input) {
  return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
}
function map$2(arr, fn) {
  var res = [], i, arrLen = arr.length;
  for (i = 0; i < arrLen; ++i) {
    res.push(fn(arr[i], i));
  }
  return res;
}
function extend(a, b) {
  for (var i in b) {
    if (hasOwnProp(b, i)) {
      a[i] = b[i];
    }
  }
  if (hasOwnProp(b, "toString")) {
    a.toString = b.toString;
  }
  if (hasOwnProp(b, "valueOf")) {
    a.valueOf = b.valueOf;
  }
  return a;
}
function createUTC(input, format2, locale2, strict) {
  return createLocalOrUTC(input, format2, locale2, strict, true).utc();
}
function defaultParsingFlags() {
  return {
    empty: false,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: false,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: false,
    userInvalidated: false,
    iso: false,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: false,
    weekdayMismatch: false
  };
}
function getParsingFlags(m2) {
  if (m2._pf == null) {
    m2._pf = defaultParsingFlags();
  }
  return m2._pf;
}
var some;
if (Array.prototype.some) {
  some = Array.prototype.some;
} else {
  some = function(fun) {
    var t = Object(this), len = t.length >>> 0, i;
    for (i = 0; i < len; i++) {
      if (i in t && fun.call(this, t[i], i, t)) {
        return true;
      }
    }
    return false;
  };
}
function isValid(m2) {
  var flags = null, parsedParts = false, isNowValid = m2._d && !isNaN(m2._d.getTime());
  if (isNowValid) {
    flags = getParsingFlags(m2);
    parsedParts = some.call(flags.parsedDateParts, function(i) {
      return i != null;
    });
    isNowValid = flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
    if (m2._strict) {
      isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
    }
  }
  if (Object.isFrozen == null || !Object.isFrozen(m2)) {
    m2._isValid = isNowValid;
  } else {
    return isNowValid;
  }
  return m2._isValid;
}
function createInvalid(flags) {
  var m2 = createUTC(NaN);
  if (flags != null) {
    extend(getParsingFlags(m2), flags);
  } else {
    getParsingFlags(m2).userInvalidated = true;
  }
  return m2;
}
var momentProperties = hooks.momentProperties = [], updateInProgress = false;
function copyConfig(to2, from2) {
  var i, prop, val, momentPropertiesLen = momentProperties.length;
  if (!isUndefined$1(from2._isAMomentObject)) {
    to2._isAMomentObject = from2._isAMomentObject;
  }
  if (!isUndefined$1(from2._i)) {
    to2._i = from2._i;
  }
  if (!isUndefined$1(from2._f)) {
    to2._f = from2._f;
  }
  if (!isUndefined$1(from2._l)) {
    to2._l = from2._l;
  }
  if (!isUndefined$1(from2._strict)) {
    to2._strict = from2._strict;
  }
  if (!isUndefined$1(from2._tzm)) {
    to2._tzm = from2._tzm;
  }
  if (!isUndefined$1(from2._isUTC)) {
    to2._isUTC = from2._isUTC;
  }
  if (!isUndefined$1(from2._offset)) {
    to2._offset = from2._offset;
  }
  if (!isUndefined$1(from2._pf)) {
    to2._pf = getParsingFlags(from2);
  }
  if (!isUndefined$1(from2._locale)) {
    to2._locale = from2._locale;
  }
  if (momentPropertiesLen > 0) {
    for (i = 0; i < momentPropertiesLen; i++) {
      prop = momentProperties[i];
      val = from2[prop];
      if (!isUndefined$1(val)) {
        to2[prop] = val;
      }
    }
  }
  return to2;
}
function Moment(config) {
  copyConfig(this, config);
  this._d = new Date(config._d != null ? config._d.getTime() : NaN);
  if (!this.isValid()) {
    this._d = new Date(NaN);
  }
  if (updateInProgress === false) {
    updateInProgress = true;
    hooks.updateOffset(this);
    updateInProgress = false;
  }
}
function isMoment(obj) {
  return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
}
function warn(msg) {
  if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
    console.warn("Deprecation warning: " + msg);
  }
}
function deprecate(msg, fn) {
  var firstTime = true;
  return extend(function() {
    if (hooks.deprecationHandler != null) {
      hooks.deprecationHandler(null, msg);
    }
    if (firstTime) {
      var args = [], arg, i, key, argLen = arguments.length;
      for (i = 0; i < argLen; i++) {
        arg = "";
        if (typeof arguments[i] === "object") {
          arg += "\n[" + i + "] ";
          for (key in arguments[0]) {
            if (hasOwnProp(arguments[0], key)) {
              arg += key + ": " + arguments[0][key] + ", ";
            }
          }
          arg = arg.slice(0, -2);
        } else {
          arg = arguments[i];
        }
        args.push(arg);
      }
      warn(
        msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack
      );
      firstTime = false;
    }
    return fn.apply(this, arguments);
  }, fn);
}
var deprecations = {};
function deprecateSimple(name, msg) {
  if (hooks.deprecationHandler != null) {
    hooks.deprecationHandler(name, msg);
  }
  if (!deprecations[name]) {
    warn(msg);
    deprecations[name] = true;
  }
}
hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;
function isFunction$5(input) {
  return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
}
function set(config) {
  var prop, i;
  for (i in config) {
    if (hasOwnProp(config, i)) {
      prop = config[i];
      if (isFunction$5(prop)) {
        this[i] = prop;
      } else {
        this["_" + i] = prop;
      }
    }
  }
  this._config = config;
  this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function mergeConfigs(parentConfig, childConfig) {
  var res = extend({}, parentConfig), prop;
  for (prop in childConfig) {
    if (hasOwnProp(childConfig, prop)) {
      if (isObject$a(parentConfig[prop]) && isObject$a(childConfig[prop])) {
        res[prop] = {};
        extend(res[prop], parentConfig[prop]);
        extend(res[prop], childConfig[prop]);
      } else if (childConfig[prop] != null) {
        res[prop] = childConfig[prop];
      } else {
        delete res[prop];
      }
    }
  }
  for (prop in parentConfig) {
    if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject$a(parentConfig[prop])) {
      res[prop] = extend({}, res[prop]);
    }
  }
  return res;
}
function Locale(config) {
  if (config != null) {
    this.set(config);
  }
}
var keys$7;
if (Object.keys) {
  keys$7 = Object.keys;
} else {
  keys$7 = function(obj) {
    var i, res = [];
    for (i in obj) {
      if (hasOwnProp(obj, i)) {
        res.push(i);
      }
    }
    return res;
  };
}
var defaultCalendar = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function calendar(key, mom, now2) {
  var output = this._calendar[key] || this._calendar["sameElse"];
  return isFunction$5(output) ? output.call(mom, now2) : output;
}
function zeroFill(number, targetLength, forceSign) {
  var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign2 = number >= 0;
  return (sign2 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}
var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
function addFormatToken(token2, padded, ordinal2, callback) {
  var func = callback;
  if (typeof callback === "string") {
    func = function() {
      return this[callback]();
    };
  }
  if (token2) {
    formatTokenFunctions[token2] = func;
  }
  if (padded) {
    formatTokenFunctions[padded[0]] = function() {
      return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
    };
  }
  if (ordinal2) {
    formatTokenFunctions[ordinal2] = function() {
      return this.localeData().ordinal(
        func.apply(this, arguments),
        token2
      );
    };
  }
}
function removeFormattingTokens(input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|\]$/g, "");
  }
  return input.replace(/\\/g, "");
}
function makeFormatFunction(format2) {
  var array2 = format2.match(formattingTokens), i, length;
  for (i = 0, length = array2.length; i < length; i++) {
    if (formatTokenFunctions[array2[i]]) {
      array2[i] = formatTokenFunctions[array2[i]];
    } else {
      array2[i] = removeFormattingTokens(array2[i]);
    }
  }
  return function(mom) {
    var output = "", i2;
    for (i2 = 0; i2 < length; i2++) {
      output += isFunction$5(array2[i2]) ? array2[i2].call(mom, format2) : array2[i2];
    }
    return output;
  };
}
function formatMoment(m2, format2) {
  if (!m2.isValid()) {
    return m2.localeData().invalidDate();
  }
  format2 = expandFormat(format2, m2.localeData());
  formatFunctions[format2] = formatFunctions[format2] || makeFormatFunction(format2);
  return formatFunctions[format2](m2);
}
function expandFormat(format2, locale2) {
  var i = 5;
  function replaceLongDateFormatTokens(input) {
    return locale2.longDateFormat(input) || input;
  }
  localFormattingTokens.lastIndex = 0;
  while (i >= 0 && localFormattingTokens.test(format2)) {
    format2 = format2.replace(
      localFormattingTokens,
      replaceLongDateFormatTokens
    );
    localFormattingTokens.lastIndex = 0;
    i -= 1;
  }
  return format2;
}
var defaultLongDateFormat = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function longDateFormat(key) {
  var format2 = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
  if (format2 || !formatUpper) {
    return format2;
  }
  this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
    if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
      return tok.slice(1);
    }
    return tok;
  }).join("");
  return this._longDateFormat[key];
}
var defaultInvalidDate = "Invalid date";
function invalidDate() {
  return this._invalidDate;
}
var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
function ordinal(number) {
  return this._ordinal.replace("%d", number);
}
var defaultRelativeTime = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function relativeTime(number, withoutSuffix, string, isFuture) {
  var output = this._relativeTime[string];
  return isFunction$5(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
}
function pastFuture(diff2, output) {
  var format2 = this._relativeTime[diff2 > 0 ? "future" : "past"];
  return isFunction$5(format2) ? format2(output) : format2.replace(/%s/i, output);
}
var aliases = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year"
};
function normalizeUnits(units) {
  return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : void 0;
}
function normalizeObjectUnits(inputObject) {
  var normalizedInput = {}, normalizedProp, prop;
  for (prop in inputObject) {
    if (hasOwnProp(inputObject, prop)) {
      normalizedProp = normalizeUnits(prop);
      if (normalizedProp) {
        normalizedInput[normalizedProp] = inputObject[prop];
      }
    }
  }
  return normalizedInput;
}
var priorities = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1
};
function getPrioritizedUnits(unitsObj) {
  var units = [], u;
  for (u in unitsObj) {
    if (hasOwnProp(unitsObj, u)) {
      units.push({ unit: u, priority: priorities[u] });
    }
  }
  units.sort(function(a, b) {
    return a.priority - b.priority;
  });
  return units;
}
var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, match1to2NoLeadingZero = /^[1-9]\d?/, match1to2HasZero = /^([1-9]\d|\d)/, regexes;
regexes = {};
function addRegexToken(token2, regex, strictRegex) {
  regexes[token2] = isFunction$5(regex) ? regex : function(isStrict, localeData2) {
    return isStrict && strictRegex ? strictRegex : regex;
  };
}
function getParseRegexForToken(token2, config) {
  if (!hasOwnProp(regexes, token2)) {
    return new RegExp(unescapeFormat(token2));
  }
  return regexes[token2](config._strict, config._locale);
}
function unescapeFormat(s) {
  return regexEscape(
    s.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
      }
    )
  );
}
function regexEscape(s) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function absFloor(number) {
  if (number < 0) {
    return Math.ceil(number) || 0;
  } else {
    return Math.floor(number);
  }
}
function toInt(argumentForCoercion) {
  var coercedNumber = +argumentForCoercion, value = 0;
  if (coercedNumber !== 0 && isFinite(coercedNumber)) {
    value = absFloor(coercedNumber);
  }
  return value;
}
var tokens = {};
function addParseToken(token2, callback) {
  var i, func = callback, tokenLen;
  if (typeof token2 === "string") {
    token2 = [token2];
  }
  if (isNumber(callback)) {
    func = function(input, array2) {
      array2[callback] = toInt(input);
    };
  }
  tokenLen = token2.length;
  for (i = 0; i < tokenLen; i++) {
    tokens[token2[i]] = func;
  }
}
function addWeekParseToken(token2, callback) {
  addParseToken(token2, function(input, array2, config, token3) {
    config._w = config._w || {};
    callback(input, config._w, config, token3);
  });
}
function addTimeToArrayFromToken(token2, input, config) {
  if (input != null && hasOwnProp(tokens, token2)) {
    tokens[token2](input, config._a, config, token2);
  }
}
function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
addFormatToken("Y", 0, 0, function() {
  var y = this.year();
  return y <= 9999 ? zeroFill(y, 4) : "+" + y;
});
addFormatToken(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
addFormatToken(0, ["YYYY", 4], 0, "year");
addFormatToken(0, ["YYYYY", 5], 0, "year");
addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
addRegexToken("Y", matchSigned);
addRegexToken("YY", match1to2, match2);
addRegexToken("YYYY", match1to4, match4);
addRegexToken("YYYYY", match1to6, match6);
addRegexToken("YYYYYY", match1to6, match6);
addParseToken(["YYYYY", "YYYYYY"], YEAR);
addParseToken("YYYY", function(input, array2) {
  array2[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken("YY", function(input, array2) {
  array2[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken("Y", function(input, array2) {
  array2[YEAR] = parseInt(input, 10);
});
function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}
hooks.parseTwoDigitYear = function(input) {
  return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
};
var getSetYear = makeGetSet("FullYear", true);
function getIsLeapYear() {
  return isLeapYear(this.year());
}
function makeGetSet(unit, keepTime) {
  return function(value) {
    if (value != null) {
      set$1(this, unit, value);
      hooks.updateOffset(this, keepTime);
      return this;
    } else {
      return get$5(this, unit);
    }
  };
}
function get$5(mom, unit) {
  if (!mom.isValid()) {
    return NaN;
  }
  var d = mom._d, isUTC = mom._isUTC;
  switch (unit) {
    case "Milliseconds":
      return isUTC ? d.getUTCMilliseconds() : d.getMilliseconds();
    case "Seconds":
      return isUTC ? d.getUTCSeconds() : d.getSeconds();
    case "Minutes":
      return isUTC ? d.getUTCMinutes() : d.getMinutes();
    case "Hours":
      return isUTC ? d.getUTCHours() : d.getHours();
    case "Date":
      return isUTC ? d.getUTCDate() : d.getDate();
    case "Day":
      return isUTC ? d.getUTCDay() : d.getDay();
    case "Month":
      return isUTC ? d.getUTCMonth() : d.getMonth();
    case "FullYear":
      return isUTC ? d.getUTCFullYear() : d.getFullYear();
    default:
      return NaN;
  }
}
function set$1(mom, unit, value) {
  var d, isUTC, year, month, date2;
  if (!mom.isValid() || isNaN(value)) {
    return;
  }
  d = mom._d;
  isUTC = mom._isUTC;
  switch (unit) {
    case "Milliseconds":
      return void (isUTC ? d.setUTCMilliseconds(value) : d.setMilliseconds(value));
    case "Seconds":
      return void (isUTC ? d.setUTCSeconds(value) : d.setSeconds(value));
    case "Minutes":
      return void (isUTC ? d.setUTCMinutes(value) : d.setMinutes(value));
    case "Hours":
      return void (isUTC ? d.setUTCHours(value) : d.setHours(value));
    case "Date":
      return void (isUTC ? d.setUTCDate(value) : d.setDate(value));
    case "FullYear":
      break;
    default:
      return;
  }
  year = value;
  month = mom.month();
  date2 = mom.date();
  date2 = date2 === 29 && month === 1 && !isLeapYear(year) ? 28 : date2;
  void (isUTC ? d.setUTCFullYear(year, month, date2) : d.setFullYear(year, month, date2));
}
function stringGet(units) {
  units = normalizeUnits(units);
  if (isFunction$5(this[units])) {
    return this[units]();
  }
  return this;
}
function stringSet(units, value) {
  if (typeof units === "object") {
    units = normalizeObjectUnits(units);
    var prioritized = getPrioritizedUnits(units), i, prioritizedLen = prioritized.length;
    for (i = 0; i < prioritizedLen; i++) {
      this[prioritized[i].unit](units[prioritized[i].unit]);
    }
  } else {
    units = normalizeUnits(units);
    if (isFunction$5(this[units])) {
      return this[units](value);
    }
  }
  return this;
}
function mod(n2, x) {
  return (n2 % x + x) % x;
}
var indexOf;
if (Array.prototype.indexOf) {
  indexOf = Array.prototype.indexOf;
} else {
  indexOf = function(o) {
    var i;
    for (i = 0; i < this.length; ++i) {
      if (this[i] === o) {
        return i;
      }
    }
    return -1;
  };
}
function daysInMonth(year, month) {
  if (isNaN(year) || isNaN(month)) {
    return NaN;
  }
  var modMonth = mod(month, 12);
  year += (month - modMonth) / 12;
  return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
}
addFormatToken("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
addFormatToken("MMM", 0, 0, function(format2) {
  return this.localeData().monthsShort(this, format2);
});
addFormatToken("MMMM", 0, 0, function(format2) {
  return this.localeData().months(this, format2);
});
addRegexToken("M", match1to2, match1to2NoLeadingZero);
addRegexToken("MM", match1to2, match2);
addRegexToken("MMM", function(isStrict, locale2) {
  return locale2.monthsShortRegex(isStrict);
});
addRegexToken("MMMM", function(isStrict, locale2) {
  return locale2.monthsRegex(isStrict);
});
addParseToken(["M", "MM"], function(input, array2) {
  array2[MONTH] = toInt(input) - 1;
});
addParseToken(["MMM", "MMMM"], function(input, array2, config, token2) {
  var month = config._locale.monthsParse(input, token2, config._strict);
  if (month != null) {
    array2[MONTH] = month;
  } else {
    getParsingFlags(config).invalidMonth = input;
  }
});
var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
function localeMonths(m2, format2) {
  if (!m2) {
    return isArray$e(this._months) ? this._months : this._months["standalone"];
  }
  return isArray$e(this._months) ? this._months[m2.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format2) ? "format" : "standalone"][m2.month()];
}
function localeMonthsShort(m2, format2) {
  if (!m2) {
    return isArray$e(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
  }
  return isArray$e(this._monthsShort) ? this._monthsShort[m2.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format2) ? "format" : "standalone"][m2.month()];
}
function handleStrictParse(monthName, format2, strict) {
  var i, ii, mom, llc = monthName.toLocaleLowerCase();
  if (!this._monthsParse) {
    this._monthsParse = [];
    this._longMonthsParse = [];
    this._shortMonthsParse = [];
    for (i = 0; i < 12; ++i) {
      mom = createUTC([2e3, i]);
      this._shortMonthsParse[i] = this.monthsShort(
        mom,
        ""
      ).toLocaleLowerCase();
      this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
    }
  }
  if (strict) {
    if (format2 === "MMM") {
      ii = indexOf.call(this._shortMonthsParse, llc);
      return ii !== -1 ? ii : null;
    } else {
      ii = indexOf.call(this._longMonthsParse, llc);
      return ii !== -1 ? ii : null;
    }
  } else {
    if (format2 === "MMM") {
      ii = indexOf.call(this._shortMonthsParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._longMonthsParse, llc);
      return ii !== -1 ? ii : null;
    } else {
      ii = indexOf.call(this._longMonthsParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._shortMonthsParse, llc);
      return ii !== -1 ? ii : null;
    }
  }
}
function localeMonthsParse(monthName, format2, strict) {
  var i, mom, regex;
  if (this._monthsParseExact) {
    return handleStrictParse.call(this, monthName, format2, strict);
  }
  if (!this._monthsParse) {
    this._monthsParse = [];
    this._longMonthsParse = [];
    this._shortMonthsParse = [];
  }
  for (i = 0; i < 12; i++) {
    mom = createUTC([2e3, i]);
    if (strict && !this._longMonthsParse[i]) {
      this._longMonthsParse[i] = new RegExp(
        "^" + this.months(mom, "").replace(".", "") + "$",
        "i"
      );
      this._shortMonthsParse[i] = new RegExp(
        "^" + this.monthsShort(mom, "").replace(".", "") + "$",
        "i"
      );
    }
    if (!strict && !this._monthsParse[i]) {
      regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
      this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
    }
    if (strict && format2 === "MMMM" && this._longMonthsParse[i].test(monthName)) {
      return i;
    } else if (strict && format2 === "MMM" && this._shortMonthsParse[i].test(monthName)) {
      return i;
    } else if (!strict && this._monthsParse[i].test(monthName)) {
      return i;
    }
  }
}
function setMonth(mom, value) {
  if (!mom.isValid()) {
    return mom;
  }
  if (typeof value === "string") {
    if (/^\d+$/.test(value)) {
      value = toInt(value);
    } else {
      value = mom.localeData().monthsParse(value);
      if (!isNumber(value)) {
        return mom;
      }
    }
  }
  var month = value, date2 = mom.date();
  date2 = date2 < 29 ? date2 : Math.min(date2, daysInMonth(mom.year(), month));
  void (mom._isUTC ? mom._d.setUTCMonth(month, date2) : mom._d.setMonth(month, date2));
  return mom;
}
function getSetMonth(value) {
  if (value != null) {
    setMonth(this, value);
    hooks.updateOffset(this, true);
    return this;
  } else {
    return get$5(this, "Month");
  }
}
function getDaysInMonth() {
  return daysInMonth(this.year(), this.month());
}
function monthsShortRegex(isStrict) {
  if (this._monthsParseExact) {
    if (!hasOwnProp(this, "_monthsRegex")) {
      computeMonthsParse.call(this);
    }
    if (isStrict) {
      return this._monthsShortStrictRegex;
    } else {
      return this._monthsShortRegex;
    }
  } else {
    if (!hasOwnProp(this, "_monthsShortRegex")) {
      this._monthsShortRegex = defaultMonthsShortRegex;
    }
    return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
  }
}
function monthsRegex(isStrict) {
  if (this._monthsParseExact) {
    if (!hasOwnProp(this, "_monthsRegex")) {
      computeMonthsParse.call(this);
    }
    if (isStrict) {
      return this._monthsStrictRegex;
    } else {
      return this._monthsRegex;
    }
  } else {
    if (!hasOwnProp(this, "_monthsRegex")) {
      this._monthsRegex = defaultMonthsRegex;
    }
    return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
  }
}
function computeMonthsParse() {
  function cmpLenRev(a, b) {
    return b.length - a.length;
  }
  var shortPieces = [], longPieces = [], mixedPieces = [], i, mom, shortP, longP;
  for (i = 0; i < 12; i++) {
    mom = createUTC([2e3, i]);
    shortP = regexEscape(this.monthsShort(mom, ""));
    longP = regexEscape(this.months(mom, ""));
    shortPieces.push(shortP);
    longPieces.push(longP);
    mixedPieces.push(longP);
    mixedPieces.push(shortP);
  }
  shortPieces.sort(cmpLenRev);
  longPieces.sort(cmpLenRev);
  mixedPieces.sort(cmpLenRev);
  this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
  this._monthsShortRegex = this._monthsRegex;
  this._monthsStrictRegex = new RegExp(
    "^(" + longPieces.join("|") + ")",
    "i"
  );
  this._monthsShortStrictRegex = new RegExp(
    "^(" + shortPieces.join("|") + ")",
    "i"
  );
}
function createDate(y, m2, d, h, M, s, ms) {
  var date2;
  if (y < 100 && y >= 0) {
    date2 = new Date(y + 400, m2, d, h, M, s, ms);
    if (isFinite(date2.getFullYear())) {
      date2.setFullYear(y);
    }
  } else {
    date2 = new Date(y, m2, d, h, M, s, ms);
  }
  return date2;
}
function createUTCDate(y) {
  var date2, args;
  if (y < 100 && y >= 0) {
    args = Array.prototype.slice.call(arguments);
    args[0] = y + 400;
    date2 = new Date(Date.UTC.apply(null, args));
    if (isFinite(date2.getUTCFullYear())) {
      date2.setUTCFullYear(y);
    }
  } else {
    date2 = new Date(Date.UTC.apply(null, arguments));
  }
  return date2;
}
function firstWeekOffset(year, dow, doy) {
  var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
  return -fwdlw + fwd - 1;
}
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
  var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
  if (dayOfYear <= 0) {
    resYear = year - 1;
    resDayOfYear = daysInYear(resYear) + dayOfYear;
  } else if (dayOfYear > daysInYear(year)) {
    resYear = year + 1;
    resDayOfYear = dayOfYear - daysInYear(year);
  } else {
    resYear = year;
    resDayOfYear = dayOfYear;
  }
  return {
    year: resYear,
    dayOfYear: resDayOfYear
  };
}
function weekOfYear(mom, dow, doy) {
  var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
  if (week < 1) {
    resYear = mom.year() - 1;
    resWeek = week + weeksInYear(resYear, dow, doy);
  } else if (week > weeksInYear(mom.year(), dow, doy)) {
    resWeek = week - weeksInYear(mom.year(), dow, doy);
    resYear = mom.year() + 1;
  } else {
    resYear = mom.year();
    resWeek = week;
  }
  return {
    week: resWeek,
    year: resYear
  };
}
function weeksInYear(year, dow, doy) {
  var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
  return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}
addFormatToken("w", ["ww", 2], "wo", "week");
addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
addRegexToken("w", match1to2, match1to2NoLeadingZero);
addRegexToken("ww", match1to2, match2);
addRegexToken("W", match1to2, match1to2NoLeadingZero);
addRegexToken("WW", match1to2, match2);
addWeekParseToken(
  ["w", "ww", "W", "WW"],
  function(input, week, config, token2) {
    week[token2.substr(0, 1)] = toInt(input);
  }
);
function localeWeek(mom) {
  return weekOfYear(mom, this._week.dow, this._week.doy).week;
}
var defaultLocaleWeek = {
  dow: 0,
  doy: 6
};
function localeFirstDayOfWeek() {
  return this._week.dow;
}
function localeFirstDayOfYear() {
  return this._week.doy;
}
function getSetWeek(input) {
  var week = this.localeData().week(this);
  return input == null ? week : this.add((input - week) * 7, "d");
}
function getSetISOWeek(input) {
  var week = weekOfYear(this, 1, 4).week;
  return input == null ? week : this.add((input - week) * 7, "d");
}
addFormatToken("d", 0, "do", "day");
addFormatToken("dd", 0, 0, function(format2) {
  return this.localeData().weekdaysMin(this, format2);
});
addFormatToken("ddd", 0, 0, function(format2) {
  return this.localeData().weekdaysShort(this, format2);
});
addFormatToken("dddd", 0, 0, function(format2) {
  return this.localeData().weekdays(this, format2);
});
addFormatToken("e", 0, 0, "weekday");
addFormatToken("E", 0, 0, "isoWeekday");
addRegexToken("d", match1to2);
addRegexToken("e", match1to2);
addRegexToken("E", match1to2);
addRegexToken("dd", function(isStrict, locale2) {
  return locale2.weekdaysMinRegex(isStrict);
});
addRegexToken("ddd", function(isStrict, locale2) {
  return locale2.weekdaysShortRegex(isStrict);
});
addRegexToken("dddd", function(isStrict, locale2) {
  return locale2.weekdaysRegex(isStrict);
});
addWeekParseToken(["dd", "ddd", "dddd"], function(input, week, config, token2) {
  var weekday = config._locale.weekdaysParse(input, token2, config._strict);
  if (weekday != null) {
    week.d = weekday;
  } else {
    getParsingFlags(config).invalidWeekday = input;
  }
});
addWeekParseToken(["d", "e", "E"], function(input, week, config, token2) {
  week[token2] = toInt(input);
});
function parseWeekday(input, locale2) {
  if (typeof input !== "string") {
    return input;
  }
  if (!isNaN(input)) {
    return parseInt(input, 10);
  }
  input = locale2.weekdaysParse(input);
  if (typeof input === "number") {
    return input;
  }
  return null;
}
function parseIsoWeekday(input, locale2) {
  if (typeof input === "string") {
    return locale2.weekdaysParse(input) % 7 || 7;
  }
  return isNaN(input) ? null : input;
}
function shiftWeekdays(ws, n2) {
  return ws.slice(n2, 7).concat(ws.slice(0, n2));
}
var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
function localeWeekdays(m2, format2) {
  var weekdays = isArray$e(this._weekdays) ? this._weekdays : this._weekdays[m2 && m2 !== true && this._weekdays.isFormat.test(format2) ? "format" : "standalone"];
  return m2 === true ? shiftWeekdays(weekdays, this._week.dow) : m2 ? weekdays[m2.day()] : weekdays;
}
function localeWeekdaysShort(m2) {
  return m2 === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m2 ? this._weekdaysShort[m2.day()] : this._weekdaysShort;
}
function localeWeekdaysMin(m2) {
  return m2 === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m2 ? this._weekdaysMin[m2.day()] : this._weekdaysMin;
}
function handleStrictParse$1(weekdayName, format2, strict) {
  var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
  if (!this._weekdaysParse) {
    this._weekdaysParse = [];
    this._shortWeekdaysParse = [];
    this._minWeekdaysParse = [];
    for (i = 0; i < 7; ++i) {
      mom = createUTC([2e3, 1]).day(i);
      this._minWeekdaysParse[i] = this.weekdaysMin(
        mom,
        ""
      ).toLocaleLowerCase();
      this._shortWeekdaysParse[i] = this.weekdaysShort(
        mom,
        ""
      ).toLocaleLowerCase();
      this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase();
    }
  }
  if (strict) {
    if (format2 === "dddd") {
      ii = indexOf.call(this._weekdaysParse, llc);
      return ii !== -1 ? ii : null;
    } else if (format2 === "ddd") {
      ii = indexOf.call(this._shortWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    } else {
      ii = indexOf.call(this._minWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    }
  } else {
    if (format2 === "dddd") {
      ii = indexOf.call(this._weekdaysParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._shortWeekdaysParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._minWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    } else if (format2 === "ddd") {
      ii = indexOf.call(this._shortWeekdaysParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._weekdaysParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._minWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    } else {
      ii = indexOf.call(this._minWeekdaysParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._weekdaysParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._shortWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    }
  }
}
function localeWeekdaysParse(weekdayName, format2, strict) {
  var i, mom, regex;
  if (this._weekdaysParseExact) {
    return handleStrictParse$1.call(this, weekdayName, format2, strict);
  }
  if (!this._weekdaysParse) {
    this._weekdaysParse = [];
    this._minWeekdaysParse = [];
    this._shortWeekdaysParse = [];
    this._fullWeekdaysParse = [];
  }
  for (i = 0; i < 7; i++) {
    mom = createUTC([2e3, 1]).day(i);
    if (strict && !this._fullWeekdaysParse[i]) {
      this._fullWeekdaysParse[i] = new RegExp(
        "^" + this.weekdays(mom, "").replace(".", "\\.?") + "$",
        "i"
      );
      this._shortWeekdaysParse[i] = new RegExp(
        "^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$",
        "i"
      );
      this._minWeekdaysParse[i] = new RegExp(
        "^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$",
        "i"
      );
    }
    if (!this._weekdaysParse[i]) {
      regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
      this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
    }
    if (strict && format2 === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
      return i;
    } else if (strict && format2 === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
      return i;
    } else if (strict && format2 === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
      return i;
    } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
      return i;
    }
  }
}
function getSetDayOfWeek(input) {
  if (!this.isValid()) {
    return input != null ? this : NaN;
  }
  var day = get$5(this, "Day");
  if (input != null) {
    input = parseWeekday(input, this.localeData());
    return this.add(input - day, "d");
  } else {
    return day;
  }
}
function getSetLocaleDayOfWeek(input) {
  if (!this.isValid()) {
    return input != null ? this : NaN;
  }
  var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return input == null ? weekday : this.add(input - weekday, "d");
}
function getSetISODayOfWeek(input) {
  if (!this.isValid()) {
    return input != null ? this : NaN;
  }
  if (input != null) {
    var weekday = parseIsoWeekday(input, this.localeData());
    return this.day(this.day() % 7 ? weekday : weekday - 7);
  } else {
    return this.day() || 7;
  }
}
function weekdaysRegex(isStrict) {
  if (this._weekdaysParseExact) {
    if (!hasOwnProp(this, "_weekdaysRegex")) {
      computeWeekdaysParse.call(this);
    }
    if (isStrict) {
      return this._weekdaysStrictRegex;
    } else {
      return this._weekdaysRegex;
    }
  } else {
    if (!hasOwnProp(this, "_weekdaysRegex")) {
      this._weekdaysRegex = defaultWeekdaysRegex;
    }
    return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
  }
}
function weekdaysShortRegex(isStrict) {
  if (this._weekdaysParseExact) {
    if (!hasOwnProp(this, "_weekdaysRegex")) {
      computeWeekdaysParse.call(this);
    }
    if (isStrict) {
      return this._weekdaysShortStrictRegex;
    } else {
      return this._weekdaysShortRegex;
    }
  } else {
    if (!hasOwnProp(this, "_weekdaysShortRegex")) {
      this._weekdaysShortRegex = defaultWeekdaysShortRegex;
    }
    return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
  }
}
function weekdaysMinRegex(isStrict) {
  if (this._weekdaysParseExact) {
    if (!hasOwnProp(this, "_weekdaysRegex")) {
      computeWeekdaysParse.call(this);
    }
    if (isStrict) {
      return this._weekdaysMinStrictRegex;
    } else {
      return this._weekdaysMinRegex;
    }
  } else {
    if (!hasOwnProp(this, "_weekdaysMinRegex")) {
      this._weekdaysMinRegex = defaultWeekdaysMinRegex;
    }
    return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
  }
}
function computeWeekdaysParse() {
  function cmpLenRev(a, b) {
    return b.length - a.length;
  }
  var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
  for (i = 0; i < 7; i++) {
    mom = createUTC([2e3, 1]).day(i);
    minp = regexEscape(this.weekdaysMin(mom, ""));
    shortp = regexEscape(this.weekdaysShort(mom, ""));
    longp = regexEscape(this.weekdays(mom, ""));
    minPieces.push(minp);
    shortPieces.push(shortp);
    longPieces.push(longp);
    mixedPieces.push(minp);
    mixedPieces.push(shortp);
    mixedPieces.push(longp);
  }
  minPieces.sort(cmpLenRev);
  shortPieces.sort(cmpLenRev);
  longPieces.sort(cmpLenRev);
  mixedPieces.sort(cmpLenRev);
  this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
  this._weekdaysShortRegex = this._weekdaysRegex;
  this._weekdaysMinRegex = this._weekdaysRegex;
  this._weekdaysStrictRegex = new RegExp(
    "^(" + longPieces.join("|") + ")",
    "i"
  );
  this._weekdaysShortStrictRegex = new RegExp(
    "^(" + shortPieces.join("|") + ")",
    "i"
  );
  this._weekdaysMinStrictRegex = new RegExp(
    "^(" + minPieces.join("|") + ")",
    "i"
  );
}
function hFormat() {
  return this.hours() % 12 || 12;
}
function kFormat() {
  return this.hours() || 24;
}
addFormatToken("H", ["HH", 2], 0, "hour");
addFormatToken("h", ["hh", 2], 0, hFormat);
addFormatToken("k", ["kk", 2], 0, kFormat);
addFormatToken("hmm", 0, 0, function() {
  return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});
addFormatToken("hmmss", 0, 0, function() {
  return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
});
addFormatToken("Hmm", 0, 0, function() {
  return "" + this.hours() + zeroFill(this.minutes(), 2);
});
addFormatToken("Hmmss", 0, 0, function() {
  return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
});
function meridiem(token2, lowercase) {
  addFormatToken(token2, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      lowercase
    );
  });
}
meridiem("a", true);
meridiem("A", false);
function matchMeridiem(isStrict, locale2) {
  return locale2._meridiemParse;
}
addRegexToken("a", matchMeridiem);
addRegexToken("A", matchMeridiem);
addRegexToken("H", match1to2, match1to2HasZero);
addRegexToken("h", match1to2, match1to2NoLeadingZero);
addRegexToken("k", match1to2, match1to2NoLeadingZero);
addRegexToken("HH", match1to2, match2);
addRegexToken("hh", match1to2, match2);
addRegexToken("kk", match1to2, match2);
addRegexToken("hmm", match3to4);
addRegexToken("hmmss", match5to6);
addRegexToken("Hmm", match3to4);
addRegexToken("Hmmss", match5to6);
addParseToken(["H", "HH"], HOUR);
addParseToken(["k", "kk"], function(input, array2, config) {
  var kInput = toInt(input);
  array2[HOUR] = kInput === 24 ? 0 : kInput;
});
addParseToken(["a", "A"], function(input, array2, config) {
  config._isPm = config._locale.isPM(input);
  config._meridiem = input;
});
addParseToken(["h", "hh"], function(input, array2, config) {
  array2[HOUR] = toInt(input);
  getParsingFlags(config).bigHour = true;
});
addParseToken("hmm", function(input, array2, config) {
  var pos = input.length - 2;
  array2[HOUR] = toInt(input.substr(0, pos));
  array2[MINUTE] = toInt(input.substr(pos));
  getParsingFlags(config).bigHour = true;
});
addParseToken("hmmss", function(input, array2, config) {
  var pos1 = input.length - 4, pos2 = input.length - 2;
  array2[HOUR] = toInt(input.substr(0, pos1));
  array2[MINUTE] = toInt(input.substr(pos1, 2));
  array2[SECOND] = toInt(input.substr(pos2));
  getParsingFlags(config).bigHour = true;
});
addParseToken("Hmm", function(input, array2, config) {
  var pos = input.length - 2;
  array2[HOUR] = toInt(input.substr(0, pos));
  array2[MINUTE] = toInt(input.substr(pos));
});
addParseToken("Hmmss", function(input, array2, config) {
  var pos1 = input.length - 4, pos2 = input.length - 2;
  array2[HOUR] = toInt(input.substr(0, pos1));
  array2[MINUTE] = toInt(input.substr(pos1, 2));
  array2[SECOND] = toInt(input.substr(pos2));
});
function localeIsPM(input) {
  return (input + "").toLowerCase().charAt(0) === "p";
}
var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, getSetHour = makeGetSet("Hours", true);
function localeMeridiem(hours2, minutes2, isLower) {
  if (hours2 > 11) {
    return isLower ? "pm" : "PM";
  } else {
    return isLower ? "am" : "AM";
  }
}
var baseConfig = {
  calendar: defaultCalendar,
  longDateFormat: defaultLongDateFormat,
  invalidDate: defaultInvalidDate,
  ordinal: defaultOrdinal,
  dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
  relativeTime: defaultRelativeTime,
  months: defaultLocaleMonths,
  monthsShort: defaultLocaleMonthsShort,
  week: defaultLocaleWeek,
  weekdays: defaultLocaleWeekdays,
  weekdaysMin: defaultLocaleWeekdaysMin,
  weekdaysShort: defaultLocaleWeekdaysShort,
  meridiemParse: defaultLocaleMeridiemParse
};
var locales = {}, localeFamilies = {}, globalLocale;
function commonPrefix(arr1, arr2) {
  var i, minl = Math.min(arr1.length, arr2.length);
  for (i = 0; i < minl; i += 1) {
    if (arr1[i] !== arr2[i]) {
      return i;
    }
  }
  return minl;
}
function normalizeLocale(key) {
  return key ? key.toLowerCase().replace("_", "-") : key;
}
function chooseLocale(names2) {
  var i = 0, j, next, locale2, split;
  while (i < names2.length) {
    split = normalizeLocale(names2[i]).split("-");
    j = split.length;
    next = normalizeLocale(names2[i + 1]);
    next = next ? next.split("-") : null;
    while (j > 0) {
      locale2 = loadLocale(split.slice(0, j).join("-"));
      if (locale2) {
        return locale2;
      }
      if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
        break;
      }
      j--;
    }
    i++;
  }
  return globalLocale;
}
function isLocaleNameSane(name) {
  return !!(name && name.match("^[^/\\\\]*$"));
}
function loadLocale(name) {
  var oldLocale = null, aliasedRequire;
  if (locales[name] === void 0 && typeof module !== "undefined" && module && module.exports && isLocaleNameSane(name)) {
    try {
      oldLocale = globalLocale._abbr;
      aliasedRequire = require;
      aliasedRequire("./locale/" + name);
      getSetGlobalLocale(oldLocale);
    } catch (e) {
      locales[name] = null;
    }
  }
  return locales[name];
}
function getSetGlobalLocale(key, values) {
  var data;
  if (key) {
    if (isUndefined$1(values)) {
      data = getLocale(key);
    } else {
      data = defineLocale(key, values);
    }
    if (data) {
      globalLocale = data;
    } else {
      if (typeof console !== "undefined" && console.warn) {
        console.warn(
          "Locale " + key + " not found. Did you forget to load it?"
        );
      }
    }
  }
  return globalLocale._abbr;
}
function defineLocale(name, config) {
  if (config !== null) {
    var locale2, parentConfig = baseConfig;
    config.abbr = name;
    if (locales[name] != null) {
      deprecateSimple(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      );
      parentConfig = locales[name]._config;
    } else if (config.parentLocale != null) {
      if (locales[config.parentLocale] != null) {
        parentConfig = locales[config.parentLocale]._config;
      } else {
        locale2 = loadLocale(config.parentLocale);
        if (locale2 != null) {
          parentConfig = locale2._config;
        } else {
          if (!localeFamilies[config.parentLocale]) {
            localeFamilies[config.parentLocale] = [];
          }
          localeFamilies[config.parentLocale].push({
            name,
            config
          });
          return null;
        }
      }
    }
    locales[name] = new Locale(mergeConfigs(parentConfig, config));
    if (localeFamilies[name]) {
      localeFamilies[name].forEach(function(x) {
        defineLocale(x.name, x.config);
      });
    }
    getSetGlobalLocale(name);
    return locales[name];
  } else {
    delete locales[name];
    return null;
  }
}
function updateLocale(name, config) {
  if (config != null) {
    var locale2, tmpLocale, parentConfig = baseConfig;
    if (locales[name] != null && locales[name].parentLocale != null) {
      locales[name].set(mergeConfigs(locales[name]._config, config));
    } else {
      tmpLocale = loadLocale(name);
      if (tmpLocale != null) {
        parentConfig = tmpLocale._config;
      }
      config = mergeConfigs(parentConfig, config);
      if (tmpLocale == null) {
        config.abbr = name;
      }
      locale2 = new Locale(config);
      locale2.parentLocale = locales[name];
      locales[name] = locale2;
    }
    getSetGlobalLocale(name);
  } else {
    if (locales[name] != null) {
      if (locales[name].parentLocale != null) {
        locales[name] = locales[name].parentLocale;
        if (name === getSetGlobalLocale()) {
          getSetGlobalLocale(name);
        }
      } else if (locales[name] != null) {
        delete locales[name];
      }
    }
  }
  return locales[name];
}
function getLocale(key) {
  var locale2;
  if (key && key._locale && key._locale._abbr) {
    key = key._locale._abbr;
  }
  if (!key) {
    return globalLocale;
  }
  if (!isArray$e(key)) {
    locale2 = loadLocale(key);
    if (locale2) {
      return locale2;
    }
    key = [key];
  }
  return chooseLocale(key);
}
function listLocales() {
  return keys$7(locales);
}
function checkOverflow(m2) {
  var overflow, a = m2._a;
  if (a && getParsingFlags(m2).overflow === -2) {
    overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
    if (getParsingFlags(m2)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
      overflow = DATE;
    }
    if (getParsingFlags(m2)._overflowWeeks && overflow === -1) {
      overflow = WEEK;
    }
    if (getParsingFlags(m2)._overflowWeekday && overflow === -1) {
      overflow = WEEKDAY;
    }
    getParsingFlags(m2).overflow = overflow;
  }
  return m2;
}
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, false],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, false],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, false],
  ["YYYY", /\d{4}/, false]
], isoTimes = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function configFromISO(config) {
  var i, l2, string = config._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat, isoDatesLen = isoDates.length, isoTimesLen = isoTimes.length;
  if (match) {
    getParsingFlags(config).iso = true;
    for (i = 0, l2 = isoDatesLen; i < l2; i++) {
      if (isoDates[i][1].exec(match[1])) {
        dateFormat = isoDates[i][0];
        allowTime = isoDates[i][2] !== false;
        break;
      }
    }
    if (dateFormat == null) {
      config._isValid = false;
      return;
    }
    if (match[3]) {
      for (i = 0, l2 = isoTimesLen; i < l2; i++) {
        if (isoTimes[i][1].exec(match[3])) {
          timeFormat = (match[2] || " ") + isoTimes[i][0];
          break;
        }
      }
      if (timeFormat == null) {
        config._isValid = false;
        return;
      }
    }
    if (!allowTime && timeFormat != null) {
      config._isValid = false;
      return;
    }
    if (match[4]) {
      if (tzRegex.exec(match[4])) {
        tzFormat = "Z";
      } else {
        config._isValid = false;
        return;
      }
    }
    config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
    configFromStringAndFormat(config);
  } else {
    config._isValid = false;
  }
}
function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  var result = [
    untruncateYear(yearStr),
    defaultLocaleMonthsShort.indexOf(monthStr),
    parseInt(dayStr, 10),
    parseInt(hourStr, 10),
    parseInt(minuteStr, 10)
  ];
  if (secondStr) {
    result.push(parseInt(secondStr, 10));
  }
  return result;
}
function untruncateYear(yearStr) {
  var year = parseInt(yearStr, 10);
  if (year <= 49) {
    return 2e3 + year;
  } else if (year <= 999) {
    return 1900 + year;
  }
  return year;
}
function preprocessRFC2822(s) {
  return s.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function checkWeekday(weekdayStr, parsedInput, config) {
  if (weekdayStr) {
    var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(
      parsedInput[0],
      parsedInput[1],
      parsedInput[2]
    ).getDay();
    if (weekdayProvided !== weekdayActual) {
      getParsingFlags(config).weekdayMismatch = true;
      config._isValid = false;
      return false;
    }
  }
  return true;
}
function calculateOffset(obsOffset, militaryOffset, numOffset) {
  if (obsOffset) {
    return obsOffsets[obsOffset];
  } else if (militaryOffset) {
    return 0;
  } else {
    var hm = parseInt(numOffset, 10), m2 = hm % 100, h = (hm - m2) / 100;
    return h * 60 + m2;
  }
}
function configFromRFC2822(config) {
  var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
  if (match) {
    parsedArray = extractFromRFC2822Strings(
      match[4],
      match[3],
      match[2],
      match[5],
      match[6],
      match[7]
    );
    if (!checkWeekday(match[1], parsedArray, config)) {
      return;
    }
    config._a = parsedArray;
    config._tzm = calculateOffset(match[8], match[9], match[10]);
    config._d = createUTCDate.apply(null, config._a);
    config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    getParsingFlags(config).rfc2822 = true;
  } else {
    config._isValid = false;
  }
}
function configFromString(config) {
  var matched = aspNetJsonRegex.exec(config._i);
  if (matched !== null) {
    config._d = new Date(+matched[1]);
    return;
  }
  configFromISO(config);
  if (config._isValid === false) {
    delete config._isValid;
  } else {
    return;
  }
  configFromRFC2822(config);
  if (config._isValid === false) {
    delete config._isValid;
  } else {
    return;
  }
  if (config._strict) {
    config._isValid = false;
  } else {
    hooks.createFromInputFallback(config);
  }
}
hooks.createFromInputFallback = deprecate(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(config) {
    config._d = new Date(config._i + (config._useUTC ? " UTC" : ""));
  }
);
function defaults(a, b, c) {
  if (a != null) {
    return a;
  }
  if (b != null) {
    return b;
  }
  return c;
}
function currentDateArray(config) {
  var nowValue = new Date(hooks.now());
  if (config._useUTC) {
    return [
      nowValue.getUTCFullYear(),
      nowValue.getUTCMonth(),
      nowValue.getUTCDate()
    ];
  }
  return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}
function configFromArray(config) {
  var i, date2, input = [], currentDate, expectedWeekday, yearToUse;
  if (config._d) {
    return;
  }
  currentDate = currentDateArray(config);
  if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
    dayOfYearFromWeekInfo(config);
  }
  if (config._dayOfYear != null) {
    yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
    if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
      getParsingFlags(config)._overflowDayOfYear = true;
    }
    date2 = createUTCDate(yearToUse, 0, config._dayOfYear);
    config._a[MONTH] = date2.getUTCMonth();
    config._a[DATE] = date2.getUTCDate();
  }
  for (i = 0; i < 3 && config._a[i] == null; ++i) {
    config._a[i] = input[i] = currentDate[i];
  }
  for (; i < 7; i++) {
    config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
  }
  if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
    config._nextDay = true;
    config._a[HOUR] = 0;
  }
  config._d = (config._useUTC ? createUTCDate : createDate).apply(
    null,
    input
  );
  expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
  if (config._tzm != null) {
    config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
  }
  if (config._nextDay) {
    config._a[HOUR] = 24;
  }
  if (config._w && typeof config._w.d !== "undefined" && config._w.d !== expectedWeekday) {
    getParsingFlags(config).weekdayMismatch = true;
  }
}
function dayOfYearFromWeekInfo(config) {
  var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
  w = config._w;
  if (w.GG != null || w.W != null || w.E != null) {
    dow = 1;
    doy = 4;
    weekYear = defaults(
      w.GG,
      config._a[YEAR],
      weekOfYear(createLocal(), 1, 4).year
    );
    week = defaults(w.W, 1);
    weekday = defaults(w.E, 1);
    if (weekday < 1 || weekday > 7) {
      weekdayOverflow = true;
    }
  } else {
    dow = config._locale._week.dow;
    doy = config._locale._week.doy;
    curWeek = weekOfYear(createLocal(), dow, doy);
    weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
    week = defaults(w.w, curWeek.week);
    if (w.d != null) {
      weekday = w.d;
      if (weekday < 0 || weekday > 6) {
        weekdayOverflow = true;
      }
    } else if (w.e != null) {
      weekday = w.e + dow;
      if (w.e < 0 || w.e > 6) {
        weekdayOverflow = true;
      }
    } else {
      weekday = dow;
    }
  }
  if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
    getParsingFlags(config)._overflowWeeks = true;
  } else if (weekdayOverflow != null) {
    getParsingFlags(config)._overflowWeekday = true;
  } else {
    temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
    config._a[YEAR] = temp.year;
    config._dayOfYear = temp.dayOfYear;
  }
}
hooks.ISO_8601 = function() {
};
hooks.RFC_2822 = function() {
};
function configFromStringAndFormat(config) {
  if (config._f === hooks.ISO_8601) {
    configFromISO(config);
    return;
  }
  if (config._f === hooks.RFC_2822) {
    configFromRFC2822(config);
    return;
  }
  config._a = [];
  getParsingFlags(config).empty = true;
  var string = "" + config._i, i, parsedInput, tokens2, token2, skipped, stringLength = string.length, totalParsedInputLength = 0, era, tokenLen;
  tokens2 = expandFormat(config._f, config._locale).match(formattingTokens) || [];
  tokenLen = tokens2.length;
  for (i = 0; i < tokenLen; i++) {
    token2 = tokens2[i];
    parsedInput = (string.match(getParseRegexForToken(token2, config)) || [])[0];
    if (parsedInput) {
      skipped = string.substr(0, string.indexOf(parsedInput));
      if (skipped.length > 0) {
        getParsingFlags(config).unusedInput.push(skipped);
      }
      string = string.slice(
        string.indexOf(parsedInput) + parsedInput.length
      );
      totalParsedInputLength += parsedInput.length;
    }
    if (formatTokenFunctions[token2]) {
      if (parsedInput) {
        getParsingFlags(config).empty = false;
      } else {
        getParsingFlags(config).unusedTokens.push(token2);
      }
      addTimeToArrayFromToken(token2, parsedInput, config);
    } else if (config._strict && !parsedInput) {
      getParsingFlags(config).unusedTokens.push(token2);
    }
  }
  getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
  if (string.length > 0) {
    getParsingFlags(config).unusedInput.push(string);
  }
  if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
    getParsingFlags(config).bigHour = void 0;
  }
  getParsingFlags(config).parsedDateParts = config._a.slice(0);
  getParsingFlags(config).meridiem = config._meridiem;
  config._a[HOUR] = meridiemFixWrap(
    config._locale,
    config._a[HOUR],
    config._meridiem
  );
  era = getParsingFlags(config).era;
  if (era !== null) {
    config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
  }
  configFromArray(config);
  checkOverflow(config);
}
function meridiemFixWrap(locale2, hour, meridiem2) {
  var isPm;
  if (meridiem2 == null) {
    return hour;
  }
  if (locale2.meridiemHour != null) {
    return locale2.meridiemHour(hour, meridiem2);
  } else if (locale2.isPM != null) {
    isPm = locale2.isPM(meridiem2);
    if (isPm && hour < 12) {
      hour += 12;
    }
    if (!isPm && hour === 12) {
      hour = 0;
    }
    return hour;
  } else {
    return hour;
  }
}
function configFromStringAndArray(config) {
  var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false, configfLen = config._f.length;
  if (configfLen === 0) {
    getParsingFlags(config).invalidFormat = true;
    config._d = new Date(NaN);
    return;
  }
  for (i = 0; i < configfLen; i++) {
    currentScore = 0;
    validFormatFound = false;
    tempConfig = copyConfig({}, config);
    if (config._useUTC != null) {
      tempConfig._useUTC = config._useUTC;
    }
    tempConfig._f = config._f[i];
    configFromStringAndFormat(tempConfig);
    if (isValid(tempConfig)) {
      validFormatFound = true;
    }
    currentScore += getParsingFlags(tempConfig).charsLeftOver;
    currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
    getParsingFlags(tempConfig).score = currentScore;
    if (!bestFormatIsValid) {
      if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
        scoreToBeat = currentScore;
        bestMoment = tempConfig;
        if (validFormatFound) {
          bestFormatIsValid = true;
        }
      }
    } else {
      if (currentScore < scoreToBeat) {
        scoreToBeat = currentScore;
        bestMoment = tempConfig;
      }
    }
  }
  extend(config, bestMoment || tempConfig);
}
function configFromObject(config) {
  if (config._d) {
    return;
  }
  var i = normalizeObjectUnits(config._i), dayOrDate = i.day === void 0 ? i.date : i.day;
  config._a = map$2(
    [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
    function(obj) {
      return obj && parseInt(obj, 10);
    }
  );
  configFromArray(config);
}
function createFromConfig(config) {
  var res = new Moment(checkOverflow(prepareConfig(config)));
  if (res._nextDay) {
    res.add(1, "d");
    res._nextDay = void 0;
  }
  return res;
}
function prepareConfig(config) {
  var input = config._i, format2 = config._f;
  config._locale = config._locale || getLocale(config._l);
  if (input === null || format2 === void 0 && input === "") {
    return createInvalid({ nullInput: true });
  }
  if (typeof input === "string") {
    config._i = input = config._locale.preparse(input);
  }
  if (isMoment(input)) {
    return new Moment(checkOverflow(input));
  } else if (isDate(input)) {
    config._d = input;
  } else if (isArray$e(format2)) {
    configFromStringAndArray(config);
  } else if (format2) {
    configFromStringAndFormat(config);
  } else {
    configFromInput(config);
  }
  if (!isValid(config)) {
    config._d = null;
  }
  return config;
}
function configFromInput(config) {
  var input = config._i;
  if (isUndefined$1(input)) {
    config._d = new Date(hooks.now());
  } else if (isDate(input)) {
    config._d = new Date(input.valueOf());
  } else if (typeof input === "string") {
    configFromString(config);
  } else if (isArray$e(input)) {
    config._a = map$2(input.slice(0), function(obj) {
      return parseInt(obj, 10);
    });
    configFromArray(config);
  } else if (isObject$a(input)) {
    configFromObject(config);
  } else if (isNumber(input)) {
    config._d = new Date(input);
  } else {
    hooks.createFromInputFallback(config);
  }
}
function createLocalOrUTC(input, format2, locale2, strict, isUTC) {
  var c = {};
  if (format2 === true || format2 === false) {
    strict = format2;
    format2 = void 0;
  }
  if (locale2 === true || locale2 === false) {
    strict = locale2;
    locale2 = void 0;
  }
  if (isObject$a(input) && isObjectEmpty(input) || isArray$e(input) && input.length === 0) {
    input = void 0;
  }
  c._isAMomentObject = true;
  c._useUTC = c._isUTC = isUTC;
  c._l = locale2;
  c._i = input;
  c._f = format2;
  c._strict = strict;
  return createFromConfig(c);
}
function createLocal(input, format2, locale2, strict) {
  return createLocalOrUTC(input, format2, locale2, strict, false);
}
var prototypeMin = deprecate(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var other = createLocal.apply(null, arguments);
    if (this.isValid() && other.isValid()) {
      return other < this ? this : other;
    } else {
      return createInvalid();
    }
  }
), prototypeMax = deprecate(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var other = createLocal.apply(null, arguments);
    if (this.isValid() && other.isValid()) {
      return other > this ? this : other;
    } else {
      return createInvalid();
    }
  }
);
function pickBy(fn, moments) {
  var res, i;
  if (moments.length === 1 && isArray$e(moments[0])) {
    moments = moments[0];
  }
  if (!moments.length) {
    return createLocal();
  }
  res = moments[0];
  for (i = 1; i < moments.length; ++i) {
    if (!moments[i].isValid() || moments[i][fn](res)) {
      res = moments[i];
    }
  }
  return res;
}
function min() {
  var args = [].slice.call(arguments, 0);
  return pickBy("isBefore", args);
}
function max() {
  var args = [].slice.call(arguments, 0);
  return pickBy("isAfter", args);
}
var now$2 = function() {
  return Date.now ? Date.now() : +new Date();
};
var ordering = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function isDurationValid(m2) {
  var key, unitHasDecimal = false, i, orderLen = ordering.length;
  for (key in m2) {
    if (hasOwnProp(m2, key) && !(indexOf.call(ordering, key) !== -1 && (m2[key] == null || !isNaN(m2[key])))) {
      return false;
    }
  }
  for (i = 0; i < orderLen; ++i) {
    if (m2[ordering[i]]) {
      if (unitHasDecimal) {
        return false;
      }
      if (parseFloat(m2[ordering[i]]) !== toInt(m2[ordering[i]])) {
        unitHasDecimal = true;
      }
    }
  }
  return true;
}
function isValid$1() {
  return this._isValid;
}
function createInvalid$1() {
  return createDuration(NaN);
}
function Duration(duration) {
  var normalizedInput = normalizeObjectUnits(duration), years2 = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months2 = normalizedInput.month || 0, weeks2 = normalizedInput.week || normalizedInput.isoWeek || 0, days2 = normalizedInput.day || 0, hours2 = normalizedInput.hour || 0, minutes2 = normalizedInput.minute || 0, seconds2 = normalizedInput.second || 0, milliseconds2 = normalizedInput.millisecond || 0;
  this._isValid = isDurationValid(normalizedInput);
  this._milliseconds = +milliseconds2 + seconds2 * 1e3 + minutes2 * 6e4 + hours2 * 1e3 * 60 * 60;
  this._days = +days2 + weeks2 * 7;
  this._months = +months2 + quarters * 3 + years2 * 12;
  this._data = {};
  this._locale = getLocale();
  this._bubble();
}
function isDuration(obj) {
  return obj instanceof Duration;
}
function absRound(number) {
  if (number < 0) {
    return Math.round(-1 * number) * -1;
  } else {
    return Math.round(number);
  }
}
function compareArrays(array1, array2, dontConvert) {
  var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
  for (i = 0; i < len; i++) {
    if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
      diffs++;
    }
  }
  return diffs + lengthDiff;
}
function offset(token2, separator) {
  addFormatToken(token2, 0, 0, function() {
    var offset2 = this.utcOffset(), sign2 = "+";
    if (offset2 < 0) {
      offset2 = -offset2;
      sign2 = "-";
    }
    return sign2 + zeroFill(~~(offset2 / 60), 2) + separator + zeroFill(~~offset2 % 60, 2);
  });
}
offset("Z", ":");
offset("ZZ", "");
addRegexToken("Z", matchShortOffset);
addRegexToken("ZZ", matchShortOffset);
addParseToken(["Z", "ZZ"], function(input, array2, config) {
  config._useUTC = true;
  config._tzm = offsetFromString(matchShortOffset, input);
});
var chunkOffset = /([\+\-]|\d\d)/gi;
function offsetFromString(matcher, string) {
  var matches = (string || "").match(matcher), chunk, parts, minutes2;
  if (matches === null) {
    return null;
  }
  chunk = matches[matches.length - 1] || [];
  parts = (chunk + "").match(chunkOffset) || ["-", 0, 0];
  minutes2 = +(parts[1] * 60) + toInt(parts[2]);
  return minutes2 === 0 ? 0 : parts[0] === "+" ? minutes2 : -minutes2;
}
function cloneWithOffset(input, model) {
  var res, diff2;
  if (model._isUTC) {
    res = model.clone();
    diff2 = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
    res._d.setTime(res._d.valueOf() + diff2);
    hooks.updateOffset(res, false);
    return res;
  } else {
    return createLocal(input).local();
  }
}
function getDateOffset(m2) {
  return -Math.round(m2._d.getTimezoneOffset());
}
hooks.updateOffset = function() {
};
function getSetOffset(input, keepLocalTime, keepMinutes) {
  var offset2 = this._offset || 0, localAdjust;
  if (!this.isValid()) {
    return input != null ? this : NaN;
  }
  if (input != null) {
    if (typeof input === "string") {
      input = offsetFromString(matchShortOffset, input);
      if (input === null) {
        return this;
      }
    } else if (Math.abs(input) < 16 && !keepMinutes) {
      input = input * 60;
    }
    if (!this._isUTC && keepLocalTime) {
      localAdjust = getDateOffset(this);
    }
    this._offset = input;
    this._isUTC = true;
    if (localAdjust != null) {
      this.add(localAdjust, "m");
    }
    if (offset2 !== input) {
      if (!keepLocalTime || this._changeInProgress) {
        addSubtract(
          this,
          createDuration(input - offset2, "m"),
          1,
          false
        );
      } else if (!this._changeInProgress) {
        this._changeInProgress = true;
        hooks.updateOffset(this, true);
        this._changeInProgress = null;
      }
    }
    return this;
  } else {
    return this._isUTC ? offset2 : getDateOffset(this);
  }
}
function getSetZone(input, keepLocalTime) {
  if (input != null) {
    if (typeof input !== "string") {
      input = -input;
    }
    this.utcOffset(input, keepLocalTime);
    return this;
  } else {
    return -this.utcOffset();
  }
}
function setOffsetToUTC(keepLocalTime) {
  return this.utcOffset(0, keepLocalTime);
}
function setOffsetToLocal(keepLocalTime) {
  if (this._isUTC) {
    this.utcOffset(0, keepLocalTime);
    this._isUTC = false;
    if (keepLocalTime) {
      this.subtract(getDateOffset(this), "m");
    }
  }
  return this;
}
function setOffsetToParsedOffset() {
  if (this._tzm != null) {
    this.utcOffset(this._tzm, false, true);
  } else if (typeof this._i === "string") {
    var tZone = offsetFromString(matchOffset, this._i);
    if (tZone != null) {
      this.utcOffset(tZone);
    } else {
      this.utcOffset(0, true);
    }
  }
  return this;
}
function hasAlignedHourOffset(input) {
  if (!this.isValid()) {
    return false;
  }
  input = input ? createLocal(input).utcOffset() : 0;
  return (this.utcOffset() - input) % 60 === 0;
}
function isDaylightSavingTime() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function isDaylightSavingTimeShifted() {
  if (!isUndefined$1(this._isDSTShifted)) {
    return this._isDSTShifted;
  }
  var c = {}, other;
  copyConfig(c, this);
  c = prepareConfig(c);
  if (c._a) {
    other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
    this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
  } else {
    this._isDSTShifted = false;
  }
  return this._isDSTShifted;
}
function isLocal() {
  return this.isValid() ? !this._isUTC : false;
}
function isUtcOffset() {
  return this.isValid() ? this._isUTC : false;
}
function isUtc() {
  return this.isValid() ? this._isUTC && this._offset === 0 : false;
}
var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function createDuration(input, key) {
  var duration = input, match = null, sign2, ret, diffRes;
  if (isDuration(input)) {
    duration = {
      ms: input._milliseconds,
      d: input._days,
      M: input._months
    };
  } else if (isNumber(input) || !isNaN(+input)) {
    duration = {};
    if (key) {
      duration[key] = +input;
    } else {
      duration.milliseconds = +input;
    }
  } else if (match = aspNetRegex.exec(input)) {
    sign2 = match[1] === "-" ? -1 : 1;
    duration = {
      y: 0,
      d: toInt(match[DATE]) * sign2,
      h: toInt(match[HOUR]) * sign2,
      m: toInt(match[MINUTE]) * sign2,
      s: toInt(match[SECOND]) * sign2,
      ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign2
    };
  } else if (match = isoRegex.exec(input)) {
    sign2 = match[1] === "-" ? -1 : 1;
    duration = {
      y: parseIso(match[2], sign2),
      M: parseIso(match[3], sign2),
      w: parseIso(match[4], sign2),
      d: parseIso(match[5], sign2),
      h: parseIso(match[6], sign2),
      m: parseIso(match[7], sign2),
      s: parseIso(match[8], sign2)
    };
  } else if (duration == null) {
    duration = {};
  } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
    diffRes = momentsDifference(
      createLocal(duration.from),
      createLocal(duration.to)
    );
    duration = {};
    duration.ms = diffRes.milliseconds;
    duration.M = diffRes.months;
  }
  ret = new Duration(duration);
  if (isDuration(input) && hasOwnProp(input, "_locale")) {
    ret._locale = input._locale;
  }
  if (isDuration(input) && hasOwnProp(input, "_isValid")) {
    ret._isValid = input._isValid;
  }
  return ret;
}
createDuration.fn = Duration.prototype;
createDuration.invalid = createInvalid$1;
function parseIso(inp, sign2) {
  var res = inp && parseFloat(inp.replace(",", "."));
  return (isNaN(res) ? 0 : res) * sign2;
}
function positiveMomentsDifference(base, other) {
  var res = {};
  res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
  if (base.clone().add(res.months, "M").isAfter(other)) {
    --res.months;
  }
  res.milliseconds = +other - +base.clone().add(res.months, "M");
  return res;
}
function momentsDifference(base, other) {
  var res;
  if (!(base.isValid() && other.isValid())) {
    return { milliseconds: 0, months: 0 };
  }
  other = cloneWithOffset(other, base);
  if (base.isBefore(other)) {
    res = positiveMomentsDifference(base, other);
  } else {
    res = positiveMomentsDifference(other, base);
    res.milliseconds = -res.milliseconds;
    res.months = -res.months;
  }
  return res;
}
function createAdder(direction, name) {
  return function(val, period) {
    var dur, tmp;
    if (period !== null && !isNaN(+period)) {
      deprecateSimple(
        name,
        "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
      );
      tmp = val;
      val = period;
      period = tmp;
    }
    dur = createDuration(val, period);
    addSubtract(this, dur, direction);
    return this;
  };
}
function addSubtract(mom, duration, isAdding, updateOffset) {
  var milliseconds2 = duration._milliseconds, days2 = absRound(duration._days), months2 = absRound(duration._months);
  if (!mom.isValid()) {
    return;
  }
  updateOffset = updateOffset == null ? true : updateOffset;
  if (months2) {
    setMonth(mom, get$5(mom, "Month") + months2 * isAdding);
  }
  if (days2) {
    set$1(mom, "Date", get$5(mom, "Date") + days2 * isAdding);
  }
  if (milliseconds2) {
    mom._d.setTime(mom._d.valueOf() + milliseconds2 * isAdding);
  }
  if (updateOffset) {
    hooks.updateOffset(mom, days2 || months2);
  }
}
var add$1 = createAdder(1, "add"), subtract$1 = createAdder(-1, "subtract");
function isString$1(input) {
  return typeof input === "string" || input instanceof String;
}
function isMomentInput(input) {
  return isMoment(input) || isDate(input) || isString$1(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === void 0;
}
function isMomentInputObject(input) {
  var objectTest = isObject$a(input) && !isObjectEmpty(input), propertyTest = false, properties = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], i, property2, propertyLen = properties.length;
  for (i = 0; i < propertyLen; i += 1) {
    property2 = properties[i];
    propertyTest = propertyTest || hasOwnProp(input, property2);
  }
  return objectTest && propertyTest;
}
function isNumberOrStringArray(input) {
  var arrayTest = isArray$e(input), dataTypeTest = false;
  if (arrayTest) {
    dataTypeTest = input.filter(function(item) {
      return !isNumber(item) && isString$1(input);
    }).length === 0;
  }
  return arrayTest && dataTypeTest;
}
function isCalendarSpec(input) {
  var objectTest = isObject$a(input) && !isObjectEmpty(input), propertyTest = false, properties = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], i, property2;
  for (i = 0; i < properties.length; i += 1) {
    property2 = properties[i];
    propertyTest = propertyTest || hasOwnProp(input, property2);
  }
  return objectTest && propertyTest;
}
function getCalendarFormat(myMoment, now2) {
  var diff2 = myMoment.diff(now2, "days", true);
  return diff2 < -6 ? "sameElse" : diff2 < -1 ? "lastWeek" : diff2 < 0 ? "lastDay" : diff2 < 1 ? "sameDay" : diff2 < 2 ? "nextDay" : diff2 < 7 ? "nextWeek" : "sameElse";
}
function calendar$1(time, formats) {
  if (arguments.length === 1) {
    if (!arguments[0]) {
      time = void 0;
      formats = void 0;
    } else if (isMomentInput(arguments[0])) {
      time = arguments[0];
      formats = void 0;
    } else if (isCalendarSpec(arguments[0])) {
      formats = arguments[0];
      time = void 0;
    }
  }
  var now2 = time || createLocal(), sod = cloneWithOffset(now2, this).startOf("day"), format2 = hooks.calendarFormat(this, sod) || "sameElse", output = formats && (isFunction$5(formats[format2]) ? formats[format2].call(this, now2) : formats[format2]);
  return this.format(
    output || this.localeData().calendar(format2, this, createLocal(now2))
  );
}
function clone() {
  return new Moment(this);
}
function isAfter(input, units) {
  var localInput = isMoment(input) ? input : createLocal(input);
  if (!(this.isValid() && localInput.isValid())) {
    return false;
  }
  units = normalizeUnits(units) || "millisecond";
  if (units === "millisecond") {
    return this.valueOf() > localInput.valueOf();
  } else {
    return localInput.valueOf() < this.clone().startOf(units).valueOf();
  }
}
function isBefore(input, units) {
  var localInput = isMoment(input) ? input : createLocal(input);
  if (!(this.isValid() && localInput.isValid())) {
    return false;
  }
  units = normalizeUnits(units) || "millisecond";
  if (units === "millisecond") {
    return this.valueOf() < localInput.valueOf();
  } else {
    return this.clone().endOf(units).valueOf() < localInput.valueOf();
  }
}
function isBetween(from2, to2, units, inclusivity) {
  var localFrom = isMoment(from2) ? from2 : createLocal(from2), localTo = isMoment(to2) ? to2 : createLocal(to2);
  if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
    return false;
  }
  inclusivity = inclusivity || "()";
  return (inclusivity[0] === "(" ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
}
function isSame(input, units) {
  var localInput = isMoment(input) ? input : createLocal(input), inputMs;
  if (!(this.isValid() && localInput.isValid())) {
    return false;
  }
  units = normalizeUnits(units) || "millisecond";
  if (units === "millisecond") {
    return this.valueOf() === localInput.valueOf();
  } else {
    inputMs = localInput.valueOf();
    return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
  }
}
function isSameOrAfter(input, units) {
  return this.isSame(input, units) || this.isAfter(input, units);
}
function isSameOrBefore(input, units) {
  return this.isSame(input, units) || this.isBefore(input, units);
}
function diff(input, units, asFloat) {
  var that, zoneDelta, output;
  if (!this.isValid()) {
    return NaN;
  }
  that = cloneWithOffset(input, this);
  if (!that.isValid()) {
    return NaN;
  }
  zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
  units = normalizeUnits(units);
  switch (units) {
    case "year":
      output = monthDiff(this, that) / 12;
      break;
    case "month":
      output = monthDiff(this, that);
      break;
    case "quarter":
      output = monthDiff(this, that) / 3;
      break;
    case "second":
      output = (this - that) / 1e3;
      break;
    case "minute":
      output = (this - that) / 6e4;
      break;
    case "hour":
      output = (this - that) / 36e5;
      break;
    case "day":
      output = (this - that - zoneDelta) / 864e5;
      break;
    case "week":
      output = (this - that - zoneDelta) / 6048e5;
      break;
    default:
      output = this - that;
  }
  return asFloat ? output : absFloor(output);
}
function monthDiff(a, b) {
  if (a.date() < b.date()) {
    return -monthDiff(b, a);
  }
  var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()), anchor = a.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
  if (b - anchor < 0) {
    anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
    adjust = (b - anchor) / (anchor - anchor2);
  } else {
    anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
    adjust = (b - anchor) / (anchor2 - anchor);
  }
  return -(wholeMonthDiff + adjust) || 0;
}
hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function toString$4() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function toISOString(keepOffset) {
  if (!this.isValid()) {
    return null;
  }
  var utc = keepOffset !== true, m2 = utc ? this.clone().utc() : this;
  if (m2.year() < 0 || m2.year() > 9999) {
    return formatMoment(
      m2,
      utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
    );
  }
  if (isFunction$5(Date.prototype.toISOString)) {
    if (utc) {
      return this.toDate().toISOString();
    } else {
      return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m2, "Z"));
    }
  }
  return formatMoment(
    m2,
    utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function inspect() {
  if (!this.isValid()) {
    return "moment.invalid(/* " + this._i + " */)";
  }
  var func = "moment", zone = "", prefix, year, datetime, suffix;
  if (!this.isLocal()) {
    func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
    zone = "Z";
  }
  prefix = "[" + func + '("]';
  year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
  datetime = "-MM-DD[T]HH:mm:ss.SSS";
  suffix = zone + '[")]';
  return this.format(prefix + year + datetime + suffix);
}
function format(inputString) {
  if (!inputString) {
    inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
  }
  var output = formatMoment(this, inputString);
  return this.localeData().postformat(output);
}
function from(time, withoutSuffix) {
  if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
    return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
  } else {
    return this.localeData().invalidDate();
  }
}
function fromNow(withoutSuffix) {
  return this.from(createLocal(), withoutSuffix);
}
function to(time, withoutSuffix) {
  if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
    return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
  } else {
    return this.localeData().invalidDate();
  }
}
function toNow(withoutSuffix) {
  return this.to(createLocal(), withoutSuffix);
}
function locale(key) {
  var newLocaleData;
  if (key === void 0) {
    return this._locale._abbr;
  } else {
    newLocaleData = getLocale(key);
    if (newLocaleData != null) {
      this._locale = newLocaleData;
    }
    return this;
  }
}
var lang = deprecate(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(key) {
    if (key === void 0) {
      return this.localeData();
    } else {
      return this.locale(key);
    }
  }
);
function localeData() {
  return this._locale;
}
var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
function mod$1(dividend, divisor) {
  return (dividend % divisor + divisor) % divisor;
}
function localStartOfDate(y, m2, d) {
  if (y < 100 && y >= 0) {
    return new Date(y + 400, m2, d) - MS_PER_400_YEARS;
  } else {
    return new Date(y, m2, d).valueOf();
  }
}
function utcStartOfDate(y, m2, d) {
  if (y < 100 && y >= 0) {
    return Date.UTC(y + 400, m2, d) - MS_PER_400_YEARS;
  } else {
    return Date.UTC(y, m2, d);
  }
}
function startOf(units) {
  var time, startOfDate;
  units = normalizeUnits(units);
  if (units === void 0 || units === "millisecond" || !this.isValid()) {
    return this;
  }
  startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
  switch (units) {
    case "year":
      time = startOfDate(this.year(), 0, 1);
      break;
    case "quarter":
      time = startOfDate(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      time = startOfDate(this.year(), this.month(), 1);
      break;
    case "week":
      time = startOfDate(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      time = startOfDate(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      time = startOfDate(this.year(), this.month(), this.date());
      break;
    case "hour":
      time = this._d.valueOf();
      time -= mod$1(
        time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
        MS_PER_HOUR
      );
      break;
    case "minute":
      time = this._d.valueOf();
      time -= mod$1(time, MS_PER_MINUTE);
      break;
    case "second":
      time = this._d.valueOf();
      time -= mod$1(time, MS_PER_SECOND);
      break;
  }
  this._d.setTime(time);
  hooks.updateOffset(this, true);
  return this;
}
function endOf(units) {
  var time, startOfDate;
  units = normalizeUnits(units);
  if (units === void 0 || units === "millisecond" || !this.isValid()) {
    return this;
  }
  startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
  switch (units) {
    case "year":
      time = startOfDate(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      time = startOfDate(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      time = startOfDate(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      time = startOfDate(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      time = startOfDate(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      time = this._d.valueOf();
      time += MS_PER_HOUR - mod$1(
        time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
        MS_PER_HOUR
      ) - 1;
      break;
    case "minute":
      time = this._d.valueOf();
      time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
      break;
    case "second":
      time = this._d.valueOf();
      time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
      break;
  }
  this._d.setTime(time);
  hooks.updateOffset(this, true);
  return this;
}
function valueOf() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function unix() {
  return Math.floor(this.valueOf() / 1e3);
}
function toDate() {
  return new Date(this.valueOf());
}
function toArray() {
  var m2 = this;
  return [
    m2.year(),
    m2.month(),
    m2.date(),
    m2.hour(),
    m2.minute(),
    m2.second(),
    m2.millisecond()
  ];
}
function toObject() {
  var m2 = this;
  return {
    years: m2.year(),
    months: m2.month(),
    date: m2.date(),
    hours: m2.hours(),
    minutes: m2.minutes(),
    seconds: m2.seconds(),
    milliseconds: m2.milliseconds()
  };
}
function toJSON() {
  return this.isValid() ? this.toISOString() : null;
}
function isValid$2() {
  return isValid(this);
}
function parsingFlags() {
  return extend({}, getParsingFlags(this));
}
function invalidAt() {
  return getParsingFlags(this).overflow;
}
function creationData() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
addFormatToken("N", 0, 0, "eraAbbr");
addFormatToken("NN", 0, 0, "eraAbbr");
addFormatToken("NNN", 0, 0, "eraAbbr");
addFormatToken("NNNN", 0, 0, "eraName");
addFormatToken("NNNNN", 0, 0, "eraNarrow");
addFormatToken("y", ["y", 1], "yo", "eraYear");
addFormatToken("y", ["yy", 2], 0, "eraYear");
addFormatToken("y", ["yyy", 3], 0, "eraYear");
addFormatToken("y", ["yyyy", 4], 0, "eraYear");
addRegexToken("N", matchEraAbbr);
addRegexToken("NN", matchEraAbbr);
addRegexToken("NNN", matchEraAbbr);
addRegexToken("NNNN", matchEraName);
addRegexToken("NNNNN", matchEraNarrow);
addParseToken(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(input, array2, config, token2) {
    var era = config._locale.erasParse(input, token2, config._strict);
    if (era) {
      getParsingFlags(config).era = era;
    } else {
      getParsingFlags(config).invalidEra = input;
    }
  }
);
addRegexToken("y", matchUnsigned);
addRegexToken("yy", matchUnsigned);
addRegexToken("yyy", matchUnsigned);
addRegexToken("yyyy", matchUnsigned);
addRegexToken("yo", matchEraYearOrdinal);
addParseToken(["y", "yy", "yyy", "yyyy"], YEAR);
addParseToken(["yo"], function(input, array2, config, token2) {
  var match;
  if (config._locale._eraYearOrdinalRegex) {
    match = input.match(config._locale._eraYearOrdinalRegex);
  }
  if (config._locale.eraYearOrdinalParse) {
    array2[YEAR] = config._locale.eraYearOrdinalParse(input, match);
  } else {
    array2[YEAR] = parseInt(input, 10);
  }
});
function localeEras(m2, format2) {
  var i, l2, date2, eras = this._eras || getLocale("en")._eras;
  for (i = 0, l2 = eras.length; i < l2; ++i) {
    switch (typeof eras[i].since) {
      case "string":
        date2 = hooks(eras[i].since).startOf("day");
        eras[i].since = date2.valueOf();
        break;
    }
    switch (typeof eras[i].until) {
      case "undefined":
        eras[i].until = Infinity;
        break;
      case "string":
        date2 = hooks(eras[i].until).startOf("day").valueOf();
        eras[i].until = date2.valueOf();
        break;
    }
  }
  return eras;
}
function localeErasParse(eraName, format2, strict) {
  var i, l2, eras = this.eras(), name, abbr, narrow;
  eraName = eraName.toUpperCase();
  for (i = 0, l2 = eras.length; i < l2; ++i) {
    name = eras[i].name.toUpperCase();
    abbr = eras[i].abbr.toUpperCase();
    narrow = eras[i].narrow.toUpperCase();
    if (strict) {
      switch (format2) {
        case "N":
        case "NN":
        case "NNN":
          if (abbr === eraName) {
            return eras[i];
          }
          break;
        case "NNNN":
          if (name === eraName) {
            return eras[i];
          }
          break;
        case "NNNNN":
          if (narrow === eraName) {
            return eras[i];
          }
          break;
      }
    } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
      return eras[i];
    }
  }
}
function localeErasConvertYear(era, year) {
  var dir = era.since <= era.until ? 1 : -1;
  if (year === void 0) {
    return hooks(era.since).year();
  } else {
    return hooks(era.since).year() + (year - era.offset) * dir;
  }
}
function getEraName() {
  var i, l2, val, eras = this.localeData().eras();
  for (i = 0, l2 = eras.length; i < l2; ++i) {
    val = this.clone().startOf("day").valueOf();
    if (eras[i].since <= val && val <= eras[i].until) {
      return eras[i].name;
    }
    if (eras[i].until <= val && val <= eras[i].since) {
      return eras[i].name;
    }
  }
  return "";
}
function getEraNarrow() {
  var i, l2, val, eras = this.localeData().eras();
  for (i = 0, l2 = eras.length; i < l2; ++i) {
    val = this.clone().startOf("day").valueOf();
    if (eras[i].since <= val && val <= eras[i].until) {
      return eras[i].narrow;
    }
    if (eras[i].until <= val && val <= eras[i].since) {
      return eras[i].narrow;
    }
  }
  return "";
}
function getEraAbbr() {
  var i, l2, val, eras = this.localeData().eras();
  for (i = 0, l2 = eras.length; i < l2; ++i) {
    val = this.clone().startOf("day").valueOf();
    if (eras[i].since <= val && val <= eras[i].until) {
      return eras[i].abbr;
    }
    if (eras[i].until <= val && val <= eras[i].since) {
      return eras[i].abbr;
    }
  }
  return "";
}
function getEraYear() {
  var i, l2, dir, val, eras = this.localeData().eras();
  for (i = 0, l2 = eras.length; i < l2; ++i) {
    dir = eras[i].since <= eras[i].until ? 1 : -1;
    val = this.clone().startOf("day").valueOf();
    if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
      return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
    }
  }
  return this.year();
}
function erasNameRegex(isStrict) {
  if (!hasOwnProp(this, "_erasNameRegex")) {
    computeErasParse.call(this);
  }
  return isStrict ? this._erasNameRegex : this._erasRegex;
}
function erasAbbrRegex(isStrict) {
  if (!hasOwnProp(this, "_erasAbbrRegex")) {
    computeErasParse.call(this);
  }
  return isStrict ? this._erasAbbrRegex : this._erasRegex;
}
function erasNarrowRegex(isStrict) {
  if (!hasOwnProp(this, "_erasNarrowRegex")) {
    computeErasParse.call(this);
  }
  return isStrict ? this._erasNarrowRegex : this._erasRegex;
}
function matchEraAbbr(isStrict, locale2) {
  return locale2.erasAbbrRegex(isStrict);
}
function matchEraName(isStrict, locale2) {
  return locale2.erasNameRegex(isStrict);
}
function matchEraNarrow(isStrict, locale2) {
  return locale2.erasNarrowRegex(isStrict);
}
function matchEraYearOrdinal(isStrict, locale2) {
  return locale2._eraYearOrdinalRegex || matchUnsigned;
}
function computeErasParse() {
  var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l2, erasName, erasAbbr, erasNarrow, eras = this.eras();
  for (i = 0, l2 = eras.length; i < l2; ++i) {
    erasName = regexEscape(eras[i].name);
    erasAbbr = regexEscape(eras[i].abbr);
    erasNarrow = regexEscape(eras[i].narrow);
    namePieces.push(erasName);
    abbrPieces.push(erasAbbr);
    narrowPieces.push(erasNarrow);
    mixedPieces.push(erasName);
    mixedPieces.push(erasAbbr);
    mixedPieces.push(erasNarrow);
  }
  this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
  this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
  this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
  this._erasNarrowRegex = new RegExp(
    "^(" + narrowPieces.join("|") + ")",
    "i"
  );
}
addFormatToken(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
addFormatToken(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function addWeekYearFormatToken(token2, getter) {
  addFormatToken(0, [token2, token2.length], 0, getter);
}
addWeekYearFormatToken("gggg", "weekYear");
addWeekYearFormatToken("ggggg", "weekYear");
addWeekYearFormatToken("GGGG", "isoWeekYear");
addWeekYearFormatToken("GGGGG", "isoWeekYear");
addRegexToken("G", matchSigned);
addRegexToken("g", matchSigned);
addRegexToken("GG", match1to2, match2);
addRegexToken("gg", match1to2, match2);
addRegexToken("GGGG", match1to4, match4);
addRegexToken("gggg", match1to4, match4);
addRegexToken("GGGGG", match1to6, match6);
addRegexToken("ggggg", match1to6, match6);
addWeekParseToken(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(input, week, config, token2) {
    week[token2.substr(0, 2)] = toInt(input);
  }
);
addWeekParseToken(["gg", "GG"], function(input, week, config, token2) {
  week[token2] = hooks.parseTwoDigitYear(input);
});
function getSetWeekYear(input) {
  return getSetWeekYearHelper.call(
    this,
    input,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function getSetISOWeekYear(input) {
  return getSetWeekYearHelper.call(
    this,
    input,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function getISOWeeksInYear() {
  return weeksInYear(this.year(), 1, 4);
}
function getISOWeeksInISOWeekYear() {
  return weeksInYear(this.isoWeekYear(), 1, 4);
}
function getWeeksInYear() {
  var weekInfo = this.localeData()._week;
  return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}
function getWeeksInWeekYear() {
  var weekInfo = this.localeData()._week;
  return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
}
function getSetWeekYearHelper(input, week, weekday, dow, doy) {
  var weeksTarget;
  if (input == null) {
    return weekOfYear(this, dow, doy).year;
  } else {
    weeksTarget = weeksInYear(input, dow, doy);
    if (week > weeksTarget) {
      week = weeksTarget;
    }
    return setWeekAll.call(this, input, week, weekday, dow, doy);
  }
}
function setWeekAll(weekYear, week, weekday, dow, doy) {
  var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date2 = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
  this.year(date2.getUTCFullYear());
  this.month(date2.getUTCMonth());
  this.date(date2.getUTCDate());
  return this;
}
addFormatToken("Q", 0, "Qo", "quarter");
addRegexToken("Q", match1);
addParseToken("Q", function(input, array2) {
  array2[MONTH] = (toInt(input) - 1) * 3;
});
function getSetQuarter(input) {
  return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}
addFormatToken("D", ["DD", 2], "Do", "date");
addRegexToken("D", match1to2, match1to2NoLeadingZero);
addRegexToken("DD", match1to2, match2);
addRegexToken("Do", function(isStrict, locale2) {
  return isStrict ? locale2._dayOfMonthOrdinalParse || locale2._ordinalParse : locale2._dayOfMonthOrdinalParseLenient;
});
addParseToken(["D", "DD"], DATE);
addParseToken("Do", function(input, array2) {
  array2[DATE] = toInt(input.match(match1to2)[0]);
});
var getSetDayOfMonth = makeGetSet("Date", true);
addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
addRegexToken("DDD", match1to3);
addRegexToken("DDDD", match3);
addParseToken(["DDD", "DDDD"], function(input, array2, config) {
  config._dayOfYear = toInt(input);
});
function getSetDayOfYear(input) {
  var dayOfYear = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
}
addFormatToken("m", ["mm", 2], 0, "minute");
addRegexToken("m", match1to2, match1to2HasZero);
addRegexToken("mm", match1to2, match2);
addParseToken(["m", "mm"], MINUTE);
var getSetMinute = makeGetSet("Minutes", false);
addFormatToken("s", ["ss", 2], 0, "second");
addRegexToken("s", match1to2, match1to2HasZero);
addRegexToken("ss", match1to2, match2);
addParseToken(["s", "ss"], SECOND);
var getSetSecond = makeGetSet("Seconds", false);
addFormatToken("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
addFormatToken(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
addFormatToken(0, ["SSS", 3], 0, "millisecond");
addFormatToken(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
addFormatToken(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
addFormatToken(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
addFormatToken(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
addRegexToken("S", match1to3, match1);
addRegexToken("SS", match1to3, match2);
addRegexToken("SSS", match1to3, match3);
var token, getSetMillisecond;
for (token = "SSSS"; token.length <= 9; token += "S") {
  addRegexToken(token, matchUnsigned);
}
function parseMs(input, array2) {
  array2[MILLISECOND] = toInt(("0." + input) * 1e3);
}
for (token = "S"; token.length <= 9; token += "S") {
  addParseToken(token, parseMs);
}
getSetMillisecond = makeGetSet("Milliseconds", false);
addFormatToken("z", 0, 0, "zoneAbbr");
addFormatToken("zz", 0, 0, "zoneName");
function getZoneAbbr() {
  return this._isUTC ? "UTC" : "";
}
function getZoneName() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var proto = Moment.prototype;
proto.add = add$1;
proto.calendar = calendar$1;
proto.clone = clone;
proto.diff = diff;
proto.endOf = endOf;
proto.format = format;
proto.from = from;
proto.fromNow = fromNow;
proto.to = to;
proto.toNow = toNow;
proto.get = stringGet;
proto.invalidAt = invalidAt;
proto.isAfter = isAfter;
proto.isBefore = isBefore;
proto.isBetween = isBetween;
proto.isSame = isSame;
proto.isSameOrAfter = isSameOrAfter;
proto.isSameOrBefore = isSameOrBefore;
proto.isValid = isValid$2;
proto.lang = lang;
proto.locale = locale;
proto.localeData = localeData;
proto.max = prototypeMax;
proto.min = prototypeMin;
proto.parsingFlags = parsingFlags;
proto.set = stringSet;
proto.startOf = startOf;
proto.subtract = subtract$1;
proto.toArray = toArray;
proto.toObject = toObject;
proto.toDate = toDate;
proto.toISOString = toISOString;
proto.inspect = inspect;
if (typeof Symbol !== "undefined" && Symbol.for != null) {
  proto[Symbol.for("nodejs.util.inspect.custom")] = function() {
    return "Moment<" + this.format() + ">";
  };
}
proto.toJSON = toJSON;
proto.toString = toString$4;
proto.unix = unix;
proto.valueOf = valueOf;
proto.creationData = creationData;
proto.eraName = getEraName;
proto.eraNarrow = getEraNarrow;
proto.eraAbbr = getEraAbbr;
proto.eraYear = getEraYear;
proto.year = getSetYear;
proto.isLeapYear = getIsLeapYear;
proto.weekYear = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;
proto.quarter = proto.quarters = getSetQuarter;
proto.month = getSetMonth;
proto.daysInMonth = getDaysInMonth;
proto.week = proto.weeks = getSetWeek;
proto.isoWeek = proto.isoWeeks = getSetISOWeek;
proto.weeksInYear = getWeeksInYear;
proto.weeksInWeekYear = getWeeksInWeekYear;
proto.isoWeeksInYear = getISOWeeksInYear;
proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
proto.date = getSetDayOfMonth;
proto.day = proto.days = getSetDayOfWeek;
proto.weekday = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear = getSetDayOfYear;
proto.hour = proto.hours = getSetHour;
proto.minute = proto.minutes = getSetMinute;
proto.second = proto.seconds = getSetSecond;
proto.millisecond = proto.milliseconds = getSetMillisecond;
proto.utcOffset = getSetOffset;
proto.utc = setOffsetToUTC;
proto.local = setOffsetToLocal;
proto.parseZone = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST = isDaylightSavingTime;
proto.isLocal = isLocal;
proto.isUtcOffset = isUtcOffset;
proto.isUtc = isUtc;
proto.isUTC = isUtc;
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;
proto.dates = deprecate(
  "dates accessor is deprecated. Use date instead.",
  getSetDayOfMonth
);
proto.months = deprecate(
  "months accessor is deprecated. Use month instead",
  getSetMonth
);
proto.years = deprecate(
  "years accessor is deprecated. Use year instead",
  getSetYear
);
proto.zone = deprecate(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  getSetZone
);
proto.isDSTShifted = deprecate(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  isDaylightSavingTimeShifted
);
function createUnix(input) {
  return createLocal(input * 1e3);
}
function createInZone() {
  return createLocal.apply(null, arguments).parseZone();
}
function preParsePostFormat(string) {
  return string;
}
var proto$1 = Locale.prototype;
proto$1.calendar = calendar;
proto$1.longDateFormat = longDateFormat;
proto$1.invalidDate = invalidDate;
proto$1.ordinal = ordinal;
proto$1.preparse = preParsePostFormat;
proto$1.postformat = preParsePostFormat;
proto$1.relativeTime = relativeTime;
proto$1.pastFuture = pastFuture;
proto$1.set = set;
proto$1.eras = localeEras;
proto$1.erasParse = localeErasParse;
proto$1.erasConvertYear = localeErasConvertYear;
proto$1.erasAbbrRegex = erasAbbrRegex;
proto$1.erasNameRegex = erasNameRegex;
proto$1.erasNarrowRegex = erasNarrowRegex;
proto$1.months = localeMonths;
proto$1.monthsShort = localeMonthsShort;
proto$1.monthsParse = localeMonthsParse;
proto$1.monthsRegex = monthsRegex;
proto$1.monthsShortRegex = monthsShortRegex;
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;
proto$1.weekdays = localeWeekdays;
proto$1.weekdaysMin = localeWeekdaysMin;
proto$1.weekdaysShort = localeWeekdaysShort;
proto$1.weekdaysParse = localeWeekdaysParse;
proto$1.weekdaysRegex = weekdaysRegex;
proto$1.weekdaysShortRegex = weekdaysShortRegex;
proto$1.weekdaysMinRegex = weekdaysMinRegex;
proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;
function get$1$1(format2, index, field, setter) {
  var locale2 = getLocale(), utc = createUTC().set(setter, index);
  return locale2[field](utc, format2);
}
function listMonthsImpl(format2, index, field) {
  if (isNumber(format2)) {
    index = format2;
    format2 = void 0;
  }
  format2 = format2 || "";
  if (index != null) {
    return get$1$1(format2, index, field, "month");
  }
  var i, out = [];
  for (i = 0; i < 12; i++) {
    out[i] = get$1$1(format2, i, field, "month");
  }
  return out;
}
function listWeekdaysImpl(localeSorted, format2, index, field) {
  if (typeof localeSorted === "boolean") {
    if (isNumber(format2)) {
      index = format2;
      format2 = void 0;
    }
    format2 = format2 || "";
  } else {
    format2 = localeSorted;
    index = format2;
    localeSorted = false;
    if (isNumber(format2)) {
      index = format2;
      format2 = void 0;
    }
    format2 = format2 || "";
  }
  var locale2 = getLocale(), shift2 = localeSorted ? locale2._week.dow : 0, i, out = [];
  if (index != null) {
    return get$1$1(format2, (index + shift2) % 7, field, "day");
  }
  for (i = 0; i < 7; i++) {
    out[i] = get$1$1(format2, (i + shift2) % 7, field, "day");
  }
  return out;
}
function listMonths(format2, index) {
  return listMonthsImpl(format2, index, "months");
}
function listMonthsShort(format2, index) {
  return listMonthsImpl(format2, index, "monthsShort");
}
function listWeekdays(localeSorted, format2, index) {
  return listWeekdaysImpl(localeSorted, format2, index, "weekdays");
}
function listWeekdaysShort(localeSorted, format2, index) {
  return listWeekdaysImpl(localeSorted, format2, index, "weekdaysShort");
}
function listWeekdaysMin(localeSorted, format2, index) {
  return listWeekdaysImpl(localeSorted, format2, index, "weekdaysMin");
}
getSetGlobalLocale("en", {
  eras: [
    {
      since: "0001-01-01",
      until: Infinity,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -Infinity,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(number) {
    var b = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
    return number + output;
  }
});
hooks.lang = deprecate(
  "moment.lang is deprecated. Use moment.locale instead.",
  getSetGlobalLocale
);
hooks.langData = deprecate(
  "moment.langData is deprecated. Use moment.localeData instead.",
  getLocale
);
var mathAbs = Math.abs;
function abs() {
  var data = this._data;
  this._milliseconds = mathAbs(this._milliseconds);
  this._days = mathAbs(this._days);
  this._months = mathAbs(this._months);
  data.milliseconds = mathAbs(data.milliseconds);
  data.seconds = mathAbs(data.seconds);
  data.minutes = mathAbs(data.minutes);
  data.hours = mathAbs(data.hours);
  data.months = mathAbs(data.months);
  data.years = mathAbs(data.years);
  return this;
}
function addSubtract$1(duration, input, value, direction) {
  var other = createDuration(input, value);
  duration._milliseconds += direction * other._milliseconds;
  duration._days += direction * other._days;
  duration._months += direction * other._months;
  return duration._bubble();
}
function add$1$1(input, value) {
  return addSubtract$1(this, input, value, 1);
}
function subtract$1$1(input, value) {
  return addSubtract$1(this, input, value, -1);
}
function absCeil(number) {
  if (number < 0) {
    return Math.floor(number);
  } else {
    return Math.ceil(number);
  }
}
function bubble() {
  var milliseconds2 = this._milliseconds, days2 = this._days, months2 = this._months, data = this._data, seconds2, minutes2, hours2, years2, monthsFromDays;
  if (!(milliseconds2 >= 0 && days2 >= 0 && months2 >= 0 || milliseconds2 <= 0 && days2 <= 0 && months2 <= 0)) {
    milliseconds2 += absCeil(monthsToDays(months2) + days2) * 864e5;
    days2 = 0;
    months2 = 0;
  }
  data.milliseconds = milliseconds2 % 1e3;
  seconds2 = absFloor(milliseconds2 / 1e3);
  data.seconds = seconds2 % 60;
  minutes2 = absFloor(seconds2 / 60);
  data.minutes = minutes2 % 60;
  hours2 = absFloor(minutes2 / 60);
  data.hours = hours2 % 24;
  days2 += absFloor(hours2 / 24);
  monthsFromDays = absFloor(daysToMonths(days2));
  months2 += monthsFromDays;
  days2 -= absCeil(monthsToDays(monthsFromDays));
  years2 = absFloor(months2 / 12);
  months2 %= 12;
  data.days = days2;
  data.months = months2;
  data.years = years2;
  return this;
}
function daysToMonths(days2) {
  return days2 * 4800 / 146097;
}
function monthsToDays(months2) {
  return months2 * 146097 / 4800;
}
function as(units) {
  if (!this.isValid()) {
    return NaN;
  }
  var days2, months2, milliseconds2 = this._milliseconds;
  units = normalizeUnits(units);
  if (units === "month" || units === "quarter" || units === "year") {
    days2 = this._days + milliseconds2 / 864e5;
    months2 = this._months + daysToMonths(days2);
    switch (units) {
      case "month":
        return months2;
      case "quarter":
        return months2 / 3;
      case "year":
        return months2 / 12;
    }
  } else {
    days2 = this._days + Math.round(monthsToDays(this._months));
    switch (units) {
      case "week":
        return days2 / 7 + milliseconds2 / 6048e5;
      case "day":
        return days2 + milliseconds2 / 864e5;
      case "hour":
        return days2 * 24 + milliseconds2 / 36e5;
      case "minute":
        return days2 * 1440 + milliseconds2 / 6e4;
      case "second":
        return days2 * 86400 + milliseconds2 / 1e3;
      case "millisecond":
        return Math.floor(days2 * 864e5) + milliseconds2;
      default:
        throw new Error("Unknown unit " + units);
    }
  }
}
function makeAs(alias) {
  return function() {
    return this.as(alias);
  };
}
var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y"), valueOf$1 = asMilliseconds;
function clone$1() {
  return createDuration(this);
}
function get$2$1(units) {
  units = normalizeUnits(units);
  return this.isValid() ? this[units + "s"]() : NaN;
}
function makeGetter(name) {
  return function() {
    return this.isValid() ? this._data[name] : NaN;
  };
}
var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
function weeks() {
  return absFloor(this.days() / 7);
}
var round = Math.round, thresholds = {
  ss: 44,
  s: 45,
  m: 45,
  h: 22,
  d: 26,
  w: null,
  M: 11
};
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale2) {
  return locale2.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}
function relativeTime$1(posNegDuration, withoutSuffix, thresholds2, locale2) {
  var duration = createDuration(posNegDuration).abs(), seconds2 = round(duration.as("s")), minutes2 = round(duration.as("m")), hours2 = round(duration.as("h")), days2 = round(duration.as("d")), months2 = round(duration.as("M")), weeks2 = round(duration.as("w")), years2 = round(duration.as("y")), a = seconds2 <= thresholds2.ss && ["s", seconds2] || seconds2 < thresholds2.s && ["ss", seconds2] || minutes2 <= 1 && ["m"] || minutes2 < thresholds2.m && ["mm", minutes2] || hours2 <= 1 && ["h"] || hours2 < thresholds2.h && ["hh", hours2] || days2 <= 1 && ["d"] || days2 < thresholds2.d && ["dd", days2];
  if (thresholds2.w != null) {
    a = a || weeks2 <= 1 && ["w"] || weeks2 < thresholds2.w && ["ww", weeks2];
  }
  a = a || months2 <= 1 && ["M"] || months2 < thresholds2.M && ["MM", months2] || years2 <= 1 && ["y"] || ["yy", years2];
  a[2] = withoutSuffix;
  a[3] = +posNegDuration > 0;
  a[4] = locale2;
  return substituteTimeAgo.apply(null, a);
}
function getSetRelativeTimeRounding(roundingFunction) {
  if (roundingFunction === void 0) {
    return round;
  }
  if (typeof roundingFunction === "function") {
    round = roundingFunction;
    return true;
  }
  return false;
}
function getSetRelativeTimeThreshold(threshold, limit) {
  if (thresholds[threshold] === void 0) {
    return false;
  }
  if (limit === void 0) {
    return thresholds[threshold];
  }
  thresholds[threshold] = limit;
  if (threshold === "s") {
    thresholds.ss = limit - 1;
  }
  return true;
}
function humanize(argWithSuffix, argThresholds) {
  if (!this.isValid()) {
    return this.localeData().invalidDate();
  }
  var withSuffix = false, th = thresholds, locale2, output;
  if (typeof argWithSuffix === "object") {
    argThresholds = argWithSuffix;
    argWithSuffix = false;
  }
  if (typeof argWithSuffix === "boolean") {
    withSuffix = argWithSuffix;
  }
  if (typeof argThresholds === "object") {
    th = Object.assign({}, thresholds, argThresholds);
    if (argThresholds.s != null && argThresholds.ss == null) {
      th.ss = argThresholds.s - 1;
    }
  }
  locale2 = this.localeData();
  output = relativeTime$1(this, !withSuffix, th, locale2);
  if (withSuffix) {
    output = locale2.pastFuture(+this, output);
  }
  return locale2.postformat(output);
}
var abs$1 = Math.abs;
function sign(x) {
  return (x > 0) - (x < 0) || +x;
}
function toISOString$1() {
  if (!this.isValid()) {
    return this.localeData().invalidDate();
  }
  var seconds2 = abs$1(this._milliseconds) / 1e3, days2 = abs$1(this._days), months2 = abs$1(this._months), minutes2, hours2, years2, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
  if (!total) {
    return "P0D";
  }
  minutes2 = absFloor(seconds2 / 60);
  hours2 = absFloor(minutes2 / 60);
  seconds2 %= 60;
  minutes2 %= 60;
  years2 = absFloor(months2 / 12);
  months2 %= 12;
  s = seconds2 ? seconds2.toFixed(3).replace(/\.?0+$/, "") : "";
  totalSign = total < 0 ? "-" : "";
  ymSign = sign(this._months) !== sign(total) ? "-" : "";
  daysSign = sign(this._days) !== sign(total) ? "-" : "";
  hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
  return totalSign + "P" + (years2 ? ymSign + years2 + "Y" : "") + (months2 ? ymSign + months2 + "M" : "") + (days2 ? daysSign + days2 + "D" : "") + (hours2 || minutes2 || seconds2 ? "T" : "") + (hours2 ? hmsSign + hours2 + "H" : "") + (minutes2 ? hmsSign + minutes2 + "M" : "") + (seconds2 ? hmsSign + s + "S" : "");
}
var proto$2 = Duration.prototype;
proto$2.isValid = isValid$1;
proto$2.abs = abs;
proto$2.add = add$1$1;
proto$2.subtract = subtract$1$1;
proto$2.as = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds = asSeconds;
proto$2.asMinutes = asMinutes;
proto$2.asHours = asHours;
proto$2.asDays = asDays;
proto$2.asWeeks = asWeeks;
proto$2.asMonths = asMonths;
proto$2.asQuarters = asQuarters;
proto$2.asYears = asYears;
proto$2.valueOf = valueOf$1;
proto$2._bubble = bubble;
proto$2.clone = clone$1;
proto$2.get = get$2$1;
proto$2.milliseconds = milliseconds;
proto$2.seconds = seconds;
proto$2.minutes = minutes;
proto$2.hours = hours;
proto$2.days = days;
proto$2.weeks = weeks;
proto$2.months = months;
proto$2.years = years;
proto$2.humanize = humanize;
proto$2.toISOString = toISOString$1;
proto$2.toString = toISOString$1;
proto$2.toJSON = toISOString$1;
proto$2.locale = locale;
proto$2.localeData = localeData;
proto$2.toIsoString = deprecate(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  toISOString$1
);
proto$2.lang = lang;
addFormatToken("X", 0, 0, "unix");
addFormatToken("x", 0, 0, "valueOf");
addRegexToken("x", matchSigned);
addRegexToken("X", matchTimestamp);
addParseToken("X", function(input, array2, config) {
  config._d = new Date(parseFloat(input) * 1e3);
});
addParseToken("x", function(input, array2, config) {
  config._d = new Date(toInt(input));
});
//! moment.js
hooks.version = "2.30.1";
setHookCallback(createLocal);
hooks.fn = proto;
hooks.min = min;
hooks.max = max;
hooks.now = now$2;
hooks.utc = createUTC;
hooks.unix = createUnix;
hooks.months = listMonths;
hooks.isDate = isDate;
hooks.locale = getSetGlobalLocale;
hooks.invalid = createInvalid;
hooks.duration = createDuration;
hooks.isMoment = isMoment;
hooks.weekdays = listWeekdays;
hooks.parseZone = createInZone;
hooks.localeData = getLocale;
hooks.isDuration = isDuration;
hooks.monthsShort = listMonthsShort;
hooks.weekdaysMin = listWeekdaysMin;
hooks.defineLocale = defineLocale;
hooks.updateLocale = updateLocale;
hooks.locales = listLocales;
hooks.weekdaysShort = listWeekdaysShort;
hooks.normalizeUnits = normalizeUnits;
hooks.relativeTimeRounding = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat = getCalendarFormat;
hooks.prototype = proto;
hooks.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  DATE: "YYYY-MM-DD",
  TIME: "HH:mm",
  TIME_SECONDS: "HH:mm:ss",
  TIME_MS: "HH:mm:ss.SSS",
  WEEK: "GGGG-[W]WW",
  MONTH: "YYYY-MM"
};
var UTILS = {
  addHideClassIf: function addHideClassIf(requirement) {
    return requirement ? " d-none" : "";
  },
  addActiveClassIf: function addActiveClassIf(requirement) {
    return requirement ? " active" : "";
  },
  random16: function random16() {
    return Math.floor(Math.random() * 1e16);
  }
};
UTILS.whenUserClickOutsideTheElement = function(ref, callback) {
  React.useEffect(function() {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return function() {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};
UTILS.getValueByPath = function(data, path) {
  var addr = data;
  var pathPoints = path.split(".");
  var _iterator = _createForOfIteratorHelper(pathPoints), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var point = _step.value;
      addr = addr[point];
      if (addr === void 0)
        return null;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return addr;
};
UTILS.monoArray = function(size, value) {
  var arr = [];
  for (var i = 0; i < size; i++) {
    arr.push(value);
  }
  return arr;
};
UTILS.parseParams = function(props) {
  if (props === false) {
    return {
      show: false
    };
  }
  if (!props) {
    return {
      show: true,
      silent: false
    };
  }
  var show = props.show, silent = props.silent;
  return {
    show: show === void 0 ? true : show,
    silent: silent === void 0 ? false : silent
  };
};
UTILS.textWithSearchContext = function(text, searchContext, withFlag) {
  var getArr = function getArr2() {
    if (!searchContext || !text) {
      return [text];
    }
    var from2 = text.toUpperCase().indexOf(searchContext.toUpperCase());
    if (!~from2) {
      return [text];
    }
    var to2 = from2 + searchContext.length;
    return [text.slice(0, from2), text.slice(from2, to2), text.slice(to2)];
  };
  var arr = getArr();
  var out = "";
  out += !!arr[0] ? arr[0] : "";
  out += !!arr[1] ? "<search>".concat(arr[1], "</search>") : "";
  out += !!arr[2] ? "".concat(arr[2]) : "";
  if (withFlag)
    return {
      html: out,
      find: !!arr[1]
    };
  return out;
};
UTILS.getParamsToString = function(params) {
  var out = "";
  var nextParam = false;
  if (!params) {
    return "";
  }
  for (var name in params) {
    var param = params[name];
    if (param !== null && param !== void 0) {
      out += "".concat(nextParam ? "&" : "?").concat(name, "=").concat(param);
      nextParam = true;
    }
  }
  return out;
};
UTILS.idArrayIncrease = function(arr, _add) {
  var add2 = Array.isArray(_add) ? _add : [_add];
  return arr.concat(add2);
};
UTILS.idArrayDecrease = function(arr, _sub) {
  var sub = Array.isArray(_sub) ? _sub : [_sub];
  return arr.filter(function(item) {
    return !sub.includes(item);
  });
};
UTILS.formats = {
  date: "DD.MM.YYYY",
  dateTime: "DD.MM.YYYY, hh:mm",
  datesSeparator: " - "
};
UTILS.checkingInput = {
  "float": function float(value) {
    return /[-\d\.]/.test(value);
  },
  "int": function int(value) {
    return /[-\d]/.test(value);
  },
  positive: function positive(value) {
    return /\d/.test(value);
  }
};
UTILS.validators = {
  "float": function float2(value) {
    return !(value && isNaN(value));
  },
  "int": function int2(value) {
    return !(isNaN(value) || !(parseInt(value) === parseFloat(value)) && value != "");
  },
  positive: function positive2(value) {
    return !isNaN(value) && value >= 0;
  },
  date: function date(value) {
    return hooks(value, UTILS.formats.date).isValid();
  },
  dateTime: function dateTime(value) {
    return hooks(value, UTILS.formats.dateTime).isValid();
  }
};
var table = "";
var Table = function Table2(data) {
  var _React$useState = React.useState(null), _React$useState2 = _slicedToArray(_React$useState, 2), props = _React$useState2[0], setProps = _React$useState2[1];
  var tablePortalElCurrent = React.useRef(null);
  React.useEffect(function() {
    setProps(data);
  }, []);
  var refresh = function refresh2() {
    setProps(null);
    setTimeout(function() {
      setProps(data);
    }, 0);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "unitable-wrapper",
    ref: tablePortalElCurrent
  }, props && /* @__PURE__ */ React.createElement(TableGo, _extends$g({}, props, {
    refreshTable: refresh,
    tablePortalElCurrent
  })));
};
var TableGo = function TableGo2(props) {
  var tableId = props.tableId, tableClassName = props.tableClassName, _props$options = props.options, options = _props$options === void 0 ? {} : _props$options;
  var _options$showTableSet = options.showTableSettings, showTableSettings = _options$showTableSet === void 0 ? false : _options$showTableSet;
  var tableRootRef = React.useRef(null);
  var utilsCurrent = React.useRef(new Utils(props));
  var utils = utilsCurrent.current;
  React.useEffect(function() {
    utils.connector.refs.unitable = tableRootRef.current;
    utils.storeRememberPage();
  }, []);
  var data = {
    utils,
    connector: utils.connector
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "unitable",
    style: {
      maxWidth: "".concat(utils.getTotalRowWidth(), "px")
    },
    ref: tableRootRef
  }, /* @__PURE__ */ React.createElement("div", {
    id: tableId,
    className: "unitable-inner ".concat(tableClassName)
  }, /* @__PURE__ */ React.createElement(HeaderAndBody, data), /* @__PURE__ */ React.createElement(TablePaginator, data), showTableSettings && /* @__PURE__ */ React.createElement(TableSettings, data)));
};
var HeaderAndBody = function HeaderAndBody2(props) {
  var connector = props.connector;
  var _React$useState3 = React.useState(1), _React$useState4 = _slicedToArray(_React$useState3, 2), _ = _React$useState4[0], setRefresh = _React$useState4[1];
  var refresh = function refresh2() {
    setRefresh(UTILS.random16);
  };
  React.useEffect(function() {
    connector.refresh.headerAndBody = refresh;
  }, []);
  if (!_)
    return null;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(TableHeader, props), /* @__PURE__ */ React.createElement(TableBody, props));
};
var tableHeader = "";
var TableHeader = function TableHeader2(props) {
  var utils = props.utils, connector = props.connector;
  var header = connector.header, headerHeight = connector.sizes.headerHeight, rightParts = connector.refs.rightParts, orderTree = connector.orderTree, numberFixedLeftColumns = connector.numberFixedLeftColumns, _connector$options = connector.options, options = _connector$options === void 0 ? {} : _connector$options;
  var _options$background$h = options.background.header, headerBackground = _options$background$h === void 0 ? false : _options$background$h, _options$resize = options.resize, resize = _options$resize === void 0 ? false : _options$resize;
  var refRightPart = React.useRef(null);
  var wrapperEl = React.useRef(null);
  var startPosition = React.useRef(null);
  var _React$useState = React.useState(0), _React$useState2 = _slicedToArray(_React$useState, 2);
  _React$useState2[0];
  var setRefresh = _React$useState2[1];
  var refresh = function refresh2() {
    return setRefresh(UTILS.random16());
  };
  React.useEffect(function() {
    rightParts.push(refRightPart.current);
    connector.refs.headerRight = refRightPart.current;
    connector.refresh.header = refresh;
  }, []);
  var onMouseUp = function onMouseUp2() {
    document.onmouseup = null;
    document.onmousemove = null;
    utils.refreshTableWidth();
    var bodyHeight = utils.getBodyHeight();
    connector.refs.unitableBody.style["max-height"] = bodyHeight;
    utils.saveTableSettingsToLocaleStorage();
  };
  var onMouseMove = function onMouseMove2(e) {
    var _startPosition$curren = startPosition.current, cursorY = _startPosition$curren.cursorY, wrapperHeight = _startPosition$curren.wrapperHeight;
    var newHeight = Math.max(20, wrapperHeight + (e.clientY - cursorY));
    connector.sizes.headerHeight = newHeight;
    refresh();
  };
  var onMouseDown = function onMouseDown2(e) {
    startPosition.current = {
      cursorY: e.clientY,
      wrapperHeight: wrapperEl.current.getBoundingClientRect().height
    };
    document.onmouseup = onMouseUp;
    document.onmousemove = onMouseMove;
  };
  var _utils$splitRowByLeft = utils.splitRowByLeftAndRight(orderTree, numberFixedLeftColumns), _utils$splitRowByLeft2 = _slicedToArray(_utils$splitRowByLeft, 2), orderLeft = _utils$splitRowByLeft2[0], orderRight = _utils$splitRowByLeft2[1];
  var style = utils.getHeightStyle(headerHeight);
  if (headerBackground)
    style.background = headerBackground;
  return /* @__PURE__ */ React.createElement("div", {
    className: "unitable-header",
    style,
    ref: wrapperEl
  }, /* @__PURE__ */ React.createElement("div", {
    className: "unitable-header-left"
  }, orderLeft.map(function(item) {
    var i = item.i, ch = item.ch;
    var cell = header[i];
    var key = "header-cell-".concat(cell._.ordinalIndex);
    return /* @__PURE__ */ React.createElement(_RootCells, _extends$g({
      key
    }, props, {
      parent: null,
      cell,
      ch,
      isLeft: true
    }));
  })), /* @__PURE__ */ React.createElement("div", {
    className: "unitable-header-right",
    style: {
      width: "(100% - ".concat(utils.getLeftPartRowWidth(), "px")
    },
    ref: refRightPart
  }, orderRight.map(function(item) {
    var i = item.i, ch = item.ch;
    var cell = header[i];
    var key = "header-cell-".concat(cell._.ordinalIndex);
    return /* @__PURE__ */ React.createElement(_RootCells, _extends$g({
      key
    }, props, {
      cell,
      parent: null,
      parentCh: orderTree,
      parentChildren: header,
      ch,
      isRight: true
    }));
  })), /* @__PURE__ */ React.createElement("div", {
    className: "unitable-line left"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "unitable-line right"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "unitable-line top"
  }), resize.headerHeight && /* @__PURE__ */ React.createElement("div", {
    className: "unitable-line bottom header-resize",
    onMouseDown
  }));
};
var _RootCells = function RootCells(props) {
  var cell = props.cell, ch = props.ch;
  var children = cell.children, _cell$_ = cell._, isEnd = _cell$_.isEnd, endIndex = _cell$_.endIndex;
  if (isEnd)
    return /* @__PURE__ */ React.createElement(TableHeaderCell, _extends$g({}, props, {
      cell,
      cellIndex: endIndex
    }));
  return /* @__PURE__ */ React.createElement("div", {
    className: "unitable-header-root"
  }, /* @__PURE__ */ React.createElement(TableHeaderCell, _extends$g({}, props, {
    cell,
    cellIndex: "root"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "unitable-header-children"
  }, ch.map(function(item) {
    var i = item.i, _ch = item.ch;
    var _cell = children[i];
    var key = "header-cell-".concat(_cell._.ordinalIndex);
    return /* @__PURE__ */ React.createElement(_RootCells, _extends$g({
      key
    }, props, {
      cell: _cell,
      parent: cell,
      parentCh: ch,
      parentChildren: children,
      ch: _ch
    }));
  })));
};
var CONSTANTS = {};
CONSTANTS.fieldTypes = {
  string: {
    id: "-34",
    label: "\u0421\u0442\u0440\u043E\u043A\u0430",
    editor: "TableCellEditorString"
  },
  integer: {
    id: "-35",
    label: "\u0426\u0435\u043B\u043E\u0435",
    editor: "TableCellEditorInteger"
  },
  positive: {
    id: "-36",
    label: "\u041D\u0435\u043E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435",
    editor: "TableCellEditorPositive"
  },
  "float": {
    id: "-37",
    label: "\u0427\u0438\u0441\u043B\u043E",
    editor: "TableCellEditorFloat"
  },
  set: {
    id: "-38",
    label: "\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A",
    editor: "TableCellEditorSet"
  },
  bool: {
    id: "-40",
    label: "\u0414\u0430/\u041D\u0435\u0442",
    editor: "TableCellEditorBool"
  },
  date: {
    id: "-41",
    label: "\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F",
    editor: "TableCellEditorDate"
  },
  period: {
    id: "-42",
    label: "\u041F\u0435\u0440\u0438\u043E\u0434",
    editor: "TableCellEditorPeriod"
  },
  file: {
    id: "-43",
    label: "\u0424\u0430\u0439\u043B",
    editor: "TableCellEditorFile"
  },
  setmultiple: {
    id: "-44",
    label: "\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0438\u0437 \u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A\u0430",
    editor: "TableCellEditorSetMultiple"
  },
  filemultiple: {
    id: "-46",
    label: "\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0444\u0430\u0439\u043B",
    editor: "TableCellEditorFileMultiple"
  },
  currency: {
    id: "-1100",
    label: "\u0414\u0435\u043D\u0435\u0436\u043D\u044B\u0439",
    editor: "TableCellEditorFloat"
  }
};
CONSTANTS.fieldTypesById = function() {
  return Object.entries(CONSTANTS.fieldTypes).reduce(function(accumulator, value) {
    accumulator[value[1].id] = {
      type: value[0],
      label: value[1].label,
      editor: value[1].editor
    };
    return accumulator;
  }, {});
}();
CONSTANTS.booleanItems = [{
  serverValue: true,
  name: "\u0414\u0430"
}, {
  serverValue: false,
  name: "\u041D\u0435\u0442"
}];
var tableHeaderCell = "";
var TableHeaderCell = function TableHeaderCell2(props) {
  var utils = props.utils, connector = props.connector, cell = props.cell, cellIndex = props.cellIndex, isRight = props.isRight;
  var value = cell.value, _cell$view = cell.view, cellView = _cell$view === void 0 ? null : _cell$view, _cell$_ = cell._, level = _cell$_.level, isEnd = _cell$_.isEnd, isEndOfLeftPart = _cell$_.isEndOfLeftPart;
  var _connector$sizes = connector.sizes, columnsWidth = _connector$sizes.columnsWidth, headerHeight = _connector$sizes.headerHeight, headerMaxLevel = connector.headerMaxLevel, _connector$options = connector.options, options = _connector$options === void 0 ? {} : _connector$options, tableHasRowsTree = connector.tableHas.rowsTree, _connector$commonForH = connector.commonForHeader, commonForHeader = _connector$commonForH === void 0 ? {} : _connector$commonForH;
  var _commonForHeader$view = commonForHeader.view, headerView = _commonForHeader$view === void 0 ? null : _commonForHeader$view;
  var _options$resize = options.resize, resize = _options$resize === void 0 ? {} : _options$resize, _options$columnsMenu = options.columnsMenu, _options$columnsMenu$ = _options$columnsMenu.hasHideIcon, hasHideIcon = _options$columnsMenu$ === void 0 ? false : _options$columnsMenu$, _options$columnsMenu$2 = _options$columnsMenu.hasOrderIcon, hasOrderIcon = _options$columnsMenu$2 === void 0 ? false : _options$columnsMenu$2, _options$columnsMenu$3 = _options$columnsMenu.hasFormatIcon, hasFormatIcon = _options$columnsMenu$3 === void 0 ? false : _options$columnsMenu$3, _options$columnsMenu$4 = _options$columnsMenu.hasSearchIcon, hasSearchIcon = _options$columnsMenu$4 === void 0 ? false : _options$columnsMenu$4, _options$columnsMenu$5 = _options$columnsMenu.hasSortIcon, hasSortIcon = _options$columnsMenu$5 === void 0 ? false : _options$columnsMenu$5;
  var ExternalCellView = cellView || headerView;
  var isRoot = isNaN(cellIndex);
  var isRowsTreeMenu = tableHasRowsTree && !cellIndex;
  var heightPart = headerHeight / headerMaxLevel;
  var _React$useState = React.useState(0), _React$useState2 = _slicedToArray(_React$useState, 2);
  _React$useState2[0];
  var setRefresh = _React$useState2[1];
  var refresh = function refresh2() {
    return setRefresh(UTILS.random16());
  };
  React.useEffect(function() {
    var _cell$_2;
    var data = {
      refresh,
      ref: wrapperEl.current,
      cell
    };
    connector.data.headerRoot.push(data);
    if ((_cell$_2 = cell._) !== null && _cell$_2 !== void 0 && _cell$_2.endIndex)
      connector.data.headerRootByEndIndex[cell._.endIndex] = data;
    if (isRoot) {
      return;
    }
    connector.refresh.column[cellIndex] = connector.refresh.column[cellIndex] || [];
    connector.refresh.column[cellIndex].push(refresh);
    cell._.refresh = refresh;
    setTimeout(refresh, 0);
  }, []);
  var wrapperEl = React.useRef(null);
  var startPosition = React.useRef(null);
  var onSortCurrent = React.useRef(function() {
  });
  var onMouseUp = function onMouseUp2(e) {
    document.onmouseup = null;
    document.onmousemove = null;
    if (e.ctrlKey && !isRoot) {
      for (var index in connector.sizes.columnsWidth)
        connector.sizes.columnsWidth[index] = startPosition.current.newWidth;
      utils.refreshAllColumns();
    }
    utils.refreshTableWidth();
    utils.saveTableSettingsToLocaleStorage();
    utils.refreshHeaderRoots();
  };
  var onMouseMove = function onMouseMove2(e) {
    var _startPosition$curren = startPosition.current, cursorX = _startPosition$curren.cursorX, wrapperWidth = _startPosition$curren.wrapperWidth;
    var newWidth = Math.max(20, wrapperWidth + (e.clientX - cursorX));
    startPosition.current.newWidth = newWidth;
    if (!isRoot) {
      connector.sizes.columnsWidth[cellIndex] = newWidth;
      utils.refreshColumn(cellIndex);
      return;
    }
    var percent = newWidth * 100 / wrapperWidth;
    var _iterator = _createForOfIteratorHelper(utils.getEndsByHeaderCell(cell)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var child = _step.value;
        var originalIndex = child._.endIndex;
        var w = startPosition.current.columnsWidth[originalIndex];
        columnsWidth[originalIndex] = Math.round(w / 100 * percent);
        utils.refreshColumn(originalIndex);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };
  var onMouseDown = function onMouseDown2(e) {
    startPosition.current = {
      cursorX: e.clientX,
      wrapperWidth: wrapperEl.current.getBoundingClientRect().width,
      columnsWidth: _toConsumableArray(columnsWidth)
    };
    document.onmouseup = onMouseUp;
    document.onmousemove = onMouseMove;
  };
  var showColumn = function showColumn2(show) {
    return function() {
      if (isRoot) {
        var _iterator2 = _createForOfIteratorHelper(utils.getEndsByHeaderCell(cell)), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var child = _step2.value;
            var originalIndex = child._.endIndex;
            connector.showColumns[originalIndex] = show;
            utils.refreshColumn(originalIndex);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } else {
        connector.showColumns[cellIndex] = show;
        utils.refreshColumn(cellIndex);
      }
      utils.refreshTableWidth();
      utils.saveTableSettingsToLocaleStorage();
    };
  };
  var isShow = isRoot || connector.showColumns[cellIndex];
  var style = isShow ? utils.getWidthStyle(columnsWidth[cellIndex]) : {};
  style.height = "".concat(isEnd ? heightPart * (headerMaxLevel - level) : heightPart, "px");
  var _ref = isRight && isShow ? utils.getHeaderRootsPadding(wrapperEl.current) : {
    paddingLeft: 0,
    paddingRight: 0
  }, paddingLeft = _ref.paddingLeft, paddingRight = _ref.paddingRight;
  var cellMenuIsPresent = hasHideIcon || hasOrderIcon || hasSearchIcon || hasFormatIcon || hasSortIcon;
  if (wrapperEl.current)
    cell._.wrapperRefCurrent = wrapperEl;
  return /* @__PURE__ */ React.createElement("div", {
    className: "unitable-header-cell index-".concat(cellIndex).concat(isShow ? "" : " is-hide").concat(isEnd ? " is-end" : ""),
    style,
    ref: wrapperEl
  }, isShow ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "uhc-content".concat(isEnd ? " is-end" : "").concat(isEndOfLeftPart ? " is-end-of-left" : ""),
    style: {
      paddingLeft: "".concat(paddingLeft, "px"),
      paddingRight: "".concat(paddingRight, "px")
    }
  }, isRowsTreeMenu ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(TableHeaderCellRowsTreeMenu, props), /* @__PURE__ */ React.createElement(TableHeaderCellMenu, _extends$g({}, props, {
    onSortCurrent
  }))) : /* @__PURE__ */ React.createElement("div", {
    className: "uhc-content-inner"
  }, ExternalCellView ? /* @__PURE__ */ React.createElement(ExternalCellView, cell) : /* @__PURE__ */ React.createElement(React.Fragment, null, value), cell._.sort && /* @__PURE__ */ React.createElement("i", {
    className: "uhc-content-sort fas fa-sort-".concat(cell._.sort),
    onClick: function onClick() {
      return onSortCurrent.current();
    }
  }), /* @__PURE__ */ React.createElement(React.Fragment, null, cellMenuIsPresent && /* @__PURE__ */ React.createElement(TableHeaderCellMenu, _extends$g({}, props, {
    showColumn,
    onSortCurrent
  }))))), resize.columnsWidth && /* @__PURE__ */ React.createElement("div", {
    className: "uhc-resizer",
    onMouseDown
  })) : /* @__PURE__ */ React.createElement("div", {
    className: "uhc-bookmark",
    title: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u043A\u0440\u044B\u0442\u0443\u044E \u043A\u043E\u043B\u043E\u043D\u043A\u0443",
    onClick: showColumn(true)
  }));
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var lib = {};
var flattenNames$1 = {};
var freeGlobal$3 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$3;
var freeGlobal$2 = _freeGlobal;
var freeSelf$1 = typeof self == "object" && self && self.Object === Object && self;
var root$a = freeGlobal$2 || freeSelf$1 || Function("return this")();
var _root = root$a;
var root$9 = _root;
var Symbol$8 = root$9.Symbol;
var _Symbol = Symbol$8;
var Symbol$7 = _Symbol;
var objectProto$u = Object.prototype;
var hasOwnProperty$o = objectProto$u.hasOwnProperty;
var nativeObjectToString$3 = objectProto$u.toString;
var symToStringTag$3 = Symbol$7 ? Symbol$7.toStringTag : void 0;
function getRawTag$2(value) {
  var isOwn = hasOwnProperty$o.call(value, symToStringTag$3), tag = value[symToStringTag$3];
  try {
    value[symToStringTag$3] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$3.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$3] = tag;
    } else {
      delete value[symToStringTag$3];
    }
  }
  return result;
}
var _getRawTag = getRawTag$2;
var objectProto$t = Object.prototype;
var nativeObjectToString$2 = objectProto$t.toString;
function objectToString$2(value) {
  return nativeObjectToString$2.call(value);
}
var _objectToString = objectToString$2;
var Symbol$6 = _Symbol, getRawTag$1 = _getRawTag, objectToString$1 = _objectToString;
var nullTag$1 = "[object Null]", undefinedTag$1 = "[object Undefined]";
var symToStringTag$2 = Symbol$6 ? Symbol$6.toStringTag : void 0;
function baseGetTag$8(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag$1 : nullTag$1;
  }
  return symToStringTag$2 && symToStringTag$2 in Object(value) ? getRawTag$1(value) : objectToString$1(value);
}
var _baseGetTag = baseGetTag$8;
var isArray$d = Array.isArray;
var isArray_1 = isArray$d;
function isObjectLike$a(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$a;
var baseGetTag$7 = _baseGetTag, isArray$c = isArray_1, isObjectLike$9 = isObjectLike_1;
var stringTag$6 = "[object String]";
function isString(value) {
  return typeof value == "string" || !isArray$c(value) && isObjectLike$9(value) && baseGetTag$7(value) == stringTag$6;
}
var isString_1 = isString;
function createBaseFor$2(fromRight) {
  return function(object2, iteratee, keysFunc) {
    var index = -1, iterable = Object(object2), props = keysFunc(object2), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object2;
  };
}
var _createBaseFor = createBaseFor$2;
var createBaseFor$1 = _createBaseFor;
var baseFor$3 = createBaseFor$1();
var _baseFor = baseFor$3;
function baseTimes$2(n2, iteratee) {
  var index = -1, result = Array(n2);
  while (++index < n2) {
    result[index] = iteratee(index);
  }
  return result;
}
var _baseTimes = baseTimes$2;
var baseGetTag$6 = _baseGetTag, isObjectLike$8 = isObjectLike_1;
var argsTag$6 = "[object Arguments]";
function baseIsArguments$2(value) {
  return isObjectLike$8(value) && baseGetTag$6(value) == argsTag$6;
}
var _baseIsArguments = baseIsArguments$2;
var baseIsArguments$1 = _baseIsArguments, isObjectLike$7 = isObjectLike_1;
var objectProto$s = Object.prototype;
var hasOwnProperty$n = objectProto$s.hasOwnProperty;
var propertyIsEnumerable$3 = objectProto$s.propertyIsEnumerable;
var isArguments$4 = baseIsArguments$1(function() {
  return arguments;
}()) ? baseIsArguments$1 : function(value) {
  return isObjectLike$7(value) && hasOwnProperty$n.call(value, "callee") && !propertyIsEnumerable$3.call(value, "callee");
};
var isArguments_1 = isArguments$4;
var isBuffer$5 = { exports: {} };
function stubFalse$1() {
  return false;
}
var stubFalse_1 = stubFalse$1;
(function(module2, exports2) {
  var root2 = _root, stubFalse2 = stubFalse_1;
  var freeExports2 = exports2 && !exports2.nodeType && exports2;
  var freeModule2 = freeExports2 && true && module2 && !module2.nodeType && module2;
  var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
  var Buffer2 = moduleExports2 ? root2.Buffer : void 0;
  var nativeIsBuffer2 = Buffer2 ? Buffer2.isBuffer : void 0;
  var isBuffer2 = nativeIsBuffer2 || stubFalse2;
  module2.exports = isBuffer2;
})(isBuffer$5, isBuffer$5.exports);
var MAX_SAFE_INTEGER$3 = 9007199254740991;
var reIsUint$1 = /^(?:0|[1-9]\d*)$/;
function isIndex$3(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$3 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint$1.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex$3;
var MAX_SAFE_INTEGER$2 = 9007199254740991;
function isLength$4(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$2;
}
var isLength_1 = isLength$4;
var baseGetTag$5 = _baseGetTag, isLength$3 = isLength_1, isObjectLike$6 = isObjectLike_1;
var argsTag$5 = "[object Arguments]", arrayTag$4 = "[object Array]", boolTag$5 = "[object Boolean]", dateTag$5 = "[object Date]", errorTag$4 = "[object Error]", funcTag$4 = "[object Function]", mapTag$8 = "[object Map]", numberTag$5 = "[object Number]", objectTag$8 = "[object Object]", regexpTag$5 = "[object RegExp]", setTag$8 = "[object Set]", stringTag$5 = "[object String]", weakMapTag$4 = "[object WeakMap]";
var arrayBufferTag$5 = "[object ArrayBuffer]", dataViewTag$7 = "[object DataView]", float32Tag$3 = "[object Float32Array]", float64Tag$3 = "[object Float64Array]", int8Tag$3 = "[object Int8Array]", int16Tag$3 = "[object Int16Array]", int32Tag$3 = "[object Int32Array]", uint8Tag$3 = "[object Uint8Array]", uint8ClampedTag$3 = "[object Uint8ClampedArray]", uint16Tag$3 = "[object Uint16Array]", uint32Tag$3 = "[object Uint32Array]";
var typedArrayTags$1 = {};
typedArrayTags$1[float32Tag$3] = typedArrayTags$1[float64Tag$3] = typedArrayTags$1[int8Tag$3] = typedArrayTags$1[int16Tag$3] = typedArrayTags$1[int32Tag$3] = typedArrayTags$1[uint8Tag$3] = typedArrayTags$1[uint8ClampedTag$3] = typedArrayTags$1[uint16Tag$3] = typedArrayTags$1[uint32Tag$3] = true;
typedArrayTags$1[argsTag$5] = typedArrayTags$1[arrayTag$4] = typedArrayTags$1[arrayBufferTag$5] = typedArrayTags$1[boolTag$5] = typedArrayTags$1[dataViewTag$7] = typedArrayTags$1[dateTag$5] = typedArrayTags$1[errorTag$4] = typedArrayTags$1[funcTag$4] = typedArrayTags$1[mapTag$8] = typedArrayTags$1[numberTag$5] = typedArrayTags$1[objectTag$8] = typedArrayTags$1[regexpTag$5] = typedArrayTags$1[setTag$8] = typedArrayTags$1[stringTag$5] = typedArrayTags$1[weakMapTag$4] = false;
function baseIsTypedArray$2(value) {
  return isObjectLike$6(value) && isLength$3(value.length) && !!typedArrayTags$1[baseGetTag$5(value)];
}
var _baseIsTypedArray = baseIsTypedArray$2;
function baseUnary$4(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$4;
var _nodeUtil = { exports: {} };
(function(module2, exports2) {
  var freeGlobal2 = _freeGlobal;
  var freeExports2 = exports2 && !exports2.nodeType && exports2;
  var freeModule2 = freeExports2 && true && module2 && !module2.nodeType && module2;
  var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
  var freeProcess2 = moduleExports2 && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess2 && freeProcess2.binding && freeProcess2.binding("util");
    } catch (e) {
    }
  }();
  module2.exports = nodeUtil2;
})(_nodeUtil, _nodeUtil.exports);
var baseIsTypedArray$1 = _baseIsTypedArray, baseUnary$3 = _baseUnary, nodeUtil$4 = _nodeUtil.exports;
var nodeIsTypedArray$1 = nodeUtil$4 && nodeUtil$4.isTypedArray;
var isTypedArray$4 = nodeIsTypedArray$1 ? baseUnary$3(nodeIsTypedArray$1) : baseIsTypedArray$1;
var isTypedArray_1 = isTypedArray$4;
var baseTimes$1 = _baseTimes, isArguments$3 = isArguments_1, isArray$b = isArray_1, isBuffer$4 = isBuffer$5.exports, isIndex$2 = _isIndex, isTypedArray$3 = isTypedArray_1;
var objectProto$r = Object.prototype;
var hasOwnProperty$m = objectProto$r.hasOwnProperty;
function arrayLikeKeys$3(value, inherited) {
  var isArr = isArray$b(value), isArg = !isArr && isArguments$3(value), isBuff = !isArr && !isArg && isBuffer$4(value), isType = !isArr && !isArg && !isBuff && isTypedArray$3(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes$1(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$m.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex$2(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$3;
var objectProto$q = Object.prototype;
function isPrototype$4(value) {
  var Ctor = value && value.constructor, proto2 = typeof Ctor == "function" && Ctor.prototype || objectProto$q;
  return value === proto2;
}
var _isPrototype = isPrototype$4;
function overArg$3(func, transform2) {
  return function(arg) {
    return func(transform2(arg));
  };
}
var _overArg = overArg$3;
var overArg$2 = _overArg;
var nativeKeys$3 = overArg$2(Object.keys, Object);
var _nativeKeys = nativeKeys$3;
var isPrototype$3 = _isPrototype, nativeKeys$2 = _nativeKeys;
var objectProto$p = Object.prototype;
var hasOwnProperty$l = objectProto$p.hasOwnProperty;
function baseKeys$2(object2) {
  if (!isPrototype$3(object2)) {
    return nativeKeys$2(object2);
  }
  var result = [];
  for (var key in Object(object2)) {
    if (hasOwnProperty$l.call(object2, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys$2;
function isObject$9(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$9;
var baseGetTag$4 = _baseGetTag, isObject$8 = isObject_1;
var asyncTag$1 = "[object AsyncFunction]", funcTag$3 = "[object Function]", genTag$2 = "[object GeneratorFunction]", proxyTag$1 = "[object Proxy]";
function isFunction$4(value) {
  if (!isObject$8(value)) {
    return false;
  }
  var tag = baseGetTag$4(value);
  return tag == funcTag$3 || tag == genTag$2 || tag == asyncTag$1 || tag == proxyTag$1;
}
var isFunction_1 = isFunction$4;
var isFunction$3 = isFunction_1, isLength$2 = isLength_1;
function isArrayLike$5(value) {
  return value != null && isLength$2(value.length) && !isFunction$3(value);
}
var isArrayLike_1 = isArrayLike$5;
var arrayLikeKeys$2 = _arrayLikeKeys, baseKeys$1 = _baseKeys, isArrayLike$4 = isArrayLike_1;
function keys$6(object2) {
  return isArrayLike$4(object2) ? arrayLikeKeys$2(object2) : baseKeys$1(object2);
}
var keys_1 = keys$6;
var baseFor$2 = _baseFor, keys$5 = keys_1;
function baseForOwn$3(object2, iteratee) {
  return object2 && baseFor$2(object2, iteratee, keys$5);
}
var _baseForOwn = baseForOwn$3;
function identity$3(value) {
  return value;
}
var identity_1 = identity$3;
var identity$2 = identity_1;
function castFunction$2(value) {
  return typeof value == "function" ? value : identity$2;
}
var _castFunction = castFunction$2;
var baseForOwn$2 = _baseForOwn, castFunction$1 = _castFunction;
function forOwn(object2, iteratee) {
  return object2 && baseForOwn$2(object2, castFunction$1(iteratee));
}
var forOwn_1 = forOwn;
var overArg$1 = _overArg;
var getPrototype$5 = overArg$1(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype$5;
var baseGetTag$3 = _baseGetTag, getPrototype$4 = _getPrototype, isObjectLike$5 = isObjectLike_1;
var objectTag$7 = "[object Object]";
var funcProto$5 = Function.prototype, objectProto$o = Object.prototype;
var funcToString$5 = funcProto$5.toString;
var hasOwnProperty$k = objectProto$o.hasOwnProperty;
var objectCtorString$1 = funcToString$5.call(Object);
function isPlainObject$3(value) {
  if (!isObjectLike$5(value) || baseGetTag$3(value) != objectTag$7) {
    return false;
  }
  var proto2 = getPrototype$4(value);
  if (proto2 === null) {
    return true;
  }
  var Ctor = hasOwnProperty$k.call(proto2, "constructor") && proto2.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString$5.call(Ctor) == objectCtorString$1;
}
var isPlainObject_1 = isPlainObject$3;
function arrayMap$3(array2, iteratee) {
  var index = -1, length = array2 == null ? 0 : array2.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array2[index], index, array2);
  }
  return result;
}
var _arrayMap = arrayMap$3;
function listCacheClear$2() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$2;
function eq$5(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$5;
var eq$4 = eq_1;
function assocIndexOf$5(array2, key) {
  var length = array2.length;
  while (length--) {
    if (eq$4(array2[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$5;
var assocIndexOf$4 = _assocIndexOf;
var arrayProto$1 = Array.prototype;
var splice$1 = arrayProto$1.splice;
function listCacheDelete$2(key) {
  var data = this.__data__, index = assocIndexOf$4(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice$1.call(data, index, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$2;
var assocIndexOf$3 = _assocIndexOf;
function listCacheGet$2(key) {
  var data = this.__data__, index = assocIndexOf$3(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var _listCacheGet = listCacheGet$2;
var assocIndexOf$2 = _assocIndexOf;
function listCacheHas$2(key) {
  return assocIndexOf$2(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$2;
var assocIndexOf$1 = _assocIndexOf;
function listCacheSet$2(key, value) {
  var data = this.__data__, index = assocIndexOf$1(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet$2;
var listCacheClear$1 = _listCacheClear, listCacheDelete$1 = _listCacheDelete, listCacheGet$1 = _listCacheGet, listCacheHas$1 = _listCacheHas, listCacheSet$1 = _listCacheSet;
function ListCache$5(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache$5.prototype.clear = listCacheClear$1;
ListCache$5.prototype["delete"] = listCacheDelete$1;
ListCache$5.prototype.get = listCacheGet$1;
ListCache$5.prototype.has = listCacheHas$1;
ListCache$5.prototype.set = listCacheSet$1;
var _ListCache = ListCache$5;
var ListCache$4 = _ListCache;
function stackClear$2() {
  this.__data__ = new ListCache$4();
  this.size = 0;
}
var _stackClear = stackClear$2;
function stackDelete$2(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var _stackDelete = stackDelete$2;
function stackGet$2(key) {
  return this.__data__.get(key);
}
var _stackGet = stackGet$2;
function stackHas$2(key) {
  return this.__data__.has(key);
}
var _stackHas = stackHas$2;
var root$8 = _root;
var coreJsData$3 = root$8["__core-js_shared__"];
var _coreJsData = coreJsData$3;
var coreJsData$2 = _coreJsData;
var maskSrcKey$1 = function() {
  var uid = /[^.]+$/.exec(coreJsData$2 && coreJsData$2.keys && coreJsData$2.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$2(func) {
  return !!maskSrcKey$1 && maskSrcKey$1 in func;
}
var _isMasked = isMasked$2;
var funcProto$4 = Function.prototype;
var funcToString$4 = funcProto$4.toString;
function toSource$3(func) {
  if (func != null) {
    try {
      return funcToString$4.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$3;
var isFunction$2 = isFunction_1, isMasked$1 = _isMasked, isObject$7 = isObject_1, toSource$2 = _toSource;
var reRegExpChar$1 = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor$1 = /^\[object .+?Constructor\]$/;
var funcProto$3 = Function.prototype, objectProto$n = Object.prototype;
var funcToString$3 = funcProto$3.toString;
var hasOwnProperty$j = objectProto$n.hasOwnProperty;
var reIsNative$1 = RegExp(
  "^" + funcToString$3.call(hasOwnProperty$j).replace(reRegExpChar$1, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative$2(value) {
  if (!isObject$7(value) || isMasked$1(value)) {
    return false;
  }
  var pattern = isFunction$2(value) ? reIsNative$1 : reIsHostCtor$1;
  return pattern.test(toSource$2(value));
}
var _baseIsNative = baseIsNative$2;
function getValue$2(object2, key) {
  return object2 == null ? void 0 : object2[key];
}
var _getValue = getValue$2;
var baseIsNative$1 = _baseIsNative, getValue$1 = _getValue;
function getNative$8(object2, key) {
  var value = getValue$1(object2, key);
  return baseIsNative$1(value) ? value : void 0;
}
var _getNative = getNative$8;
var getNative$7 = _getNative, root$7 = _root;
var Map$6 = getNative$7(root$7, "Map");
var _Map = Map$6;
var getNative$6 = _getNative;
var nativeCreate$6 = getNative$6(Object, "create");
var _nativeCreate = nativeCreate$6;
var nativeCreate$5 = _nativeCreate;
function hashClear$2() {
  this.__data__ = nativeCreate$5 ? nativeCreate$5(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$2;
function hashDelete$2(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete$2;
var nativeCreate$4 = _nativeCreate;
var HASH_UNDEFINED$5 = "__lodash_hash_undefined__";
var objectProto$m = Object.prototype;
var hasOwnProperty$i = objectProto$m.hasOwnProperty;
function hashGet$2(key) {
  var data = this.__data__;
  if (nativeCreate$4) {
    var result = data[key];
    return result === HASH_UNDEFINED$5 ? void 0 : result;
  }
  return hasOwnProperty$i.call(data, key) ? data[key] : void 0;
}
var _hashGet = hashGet$2;
var nativeCreate$3 = _nativeCreate;
var objectProto$l = Object.prototype;
var hasOwnProperty$h = objectProto$l.hasOwnProperty;
function hashHas$2(key) {
  var data = this.__data__;
  return nativeCreate$3 ? data[key] !== void 0 : hasOwnProperty$h.call(data, key);
}
var _hashHas = hashHas$2;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$4 = "__lodash_hash_undefined__";
function hashSet$2(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate$2 && value === void 0 ? HASH_UNDEFINED$4 : value;
  return this;
}
var _hashSet = hashSet$2;
var hashClear$1 = _hashClear, hashDelete$1 = _hashDelete, hashGet$1 = _hashGet, hashHas$1 = _hashHas, hashSet$1 = _hashSet;
function Hash$2(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash$2.prototype.clear = hashClear$1;
Hash$2.prototype["delete"] = hashDelete$1;
Hash$2.prototype.get = hashGet$1;
Hash$2.prototype.has = hashHas$1;
Hash$2.prototype.set = hashSet$1;
var _Hash = Hash$2;
var Hash$1 = _Hash, ListCache$3 = _ListCache, Map$5 = _Map;
function mapCacheClear$2() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash$1(),
    "map": new (Map$5 || ListCache$3)(),
    "string": new Hash$1()
  };
}
var _mapCacheClear = mapCacheClear$2;
function isKeyable$2(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable = isKeyable$2;
var isKeyable$1 = _isKeyable;
function getMapData$5(map3, key) {
  var data = map3.__data__;
  return isKeyable$1(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var _getMapData = getMapData$5;
var getMapData$4 = _getMapData;
function mapCacheDelete$2(key) {
  var result = getMapData$4(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete$2;
var getMapData$3 = _getMapData;
function mapCacheGet$2(key) {
  return getMapData$3(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$2;
var getMapData$2 = _getMapData;
function mapCacheHas$2(key) {
  return getMapData$2(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$2;
var getMapData$1 = _getMapData;
function mapCacheSet$2(key, value) {
  var data = getMapData$1(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$2;
var mapCacheClear$1 = _mapCacheClear, mapCacheDelete$1 = _mapCacheDelete, mapCacheGet$1 = _mapCacheGet, mapCacheHas$1 = _mapCacheHas, mapCacheSet$1 = _mapCacheSet;
function MapCache$4(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache$4.prototype.clear = mapCacheClear$1;
MapCache$4.prototype["delete"] = mapCacheDelete$1;
MapCache$4.prototype.get = mapCacheGet$1;
MapCache$4.prototype.has = mapCacheHas$1;
MapCache$4.prototype.set = mapCacheSet$1;
var _MapCache = MapCache$4;
var ListCache$2 = _ListCache, Map$4 = _Map, MapCache$3 = _MapCache;
var LARGE_ARRAY_SIZE$1 = 200;
function stackSet$2(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$2) {
    var pairs = data.__data__;
    if (!Map$4 || pairs.length < LARGE_ARRAY_SIZE$1 - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache$3(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var _stackSet = stackSet$2;
var ListCache$1 = _ListCache, stackClear$1 = _stackClear, stackDelete$1 = _stackDelete, stackGet$1 = _stackGet, stackHas$1 = _stackHas, stackSet$1 = _stackSet;
function Stack$4(entries) {
  var data = this.__data__ = new ListCache$1(entries);
  this.size = data.size;
}
Stack$4.prototype.clear = stackClear$1;
Stack$4.prototype["delete"] = stackDelete$1;
Stack$4.prototype.get = stackGet$1;
Stack$4.prototype.has = stackHas$1;
Stack$4.prototype.set = stackSet$1;
var _Stack = Stack$4;
var HASH_UNDEFINED$3 = "__lodash_hash_undefined__";
function setCacheAdd$2(value) {
  this.__data__.set(value, HASH_UNDEFINED$3);
  return this;
}
var _setCacheAdd = setCacheAdd$2;
function setCacheHas$2(value) {
  return this.__data__.has(value);
}
var _setCacheHas = setCacheHas$2;
var MapCache$2 = _MapCache, setCacheAdd$1 = _setCacheAdd, setCacheHas$1 = _setCacheHas;
function SetCache$2(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache$2();
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache$2.prototype.add = SetCache$2.prototype.push = setCacheAdd$1;
SetCache$2.prototype.has = setCacheHas$1;
var _SetCache = SetCache$2;
function arraySome$2(array2, predicate) {
  var index = -1, length = array2 == null ? 0 : array2.length;
  while (++index < length) {
    if (predicate(array2[index], index, array2)) {
      return true;
    }
  }
  return false;
}
var _arraySome = arraySome$2;
function cacheHas$2(cache2, key) {
  return cache2.has(key);
}
var _cacheHas = cacheHas$2;
var SetCache$1 = _SetCache, arraySome$1 = _arraySome, cacheHas$1 = _cacheHas;
var COMPARE_PARTIAL_FLAG$b = 1, COMPARE_UNORDERED_FLAG$7 = 2;
function equalArrays$3(array2, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$b, arrLength = array2.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array2);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array2;
  }
  var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$7 ? new SetCache$1() : void 0;
  stack.set(array2, other);
  stack.set(other, array2);
  while (++index < arrLength) {
    var arrValue = array2[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array2, stack) : customizer(arrValue, othValue, index, array2, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome$1(other, function(othValue2, othIndex) {
        if (!cacheHas$1(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array2);
  stack["delete"](other);
  return result;
}
var _equalArrays = equalArrays$3;
var root$6 = _root;
var Uint8Array$4 = root$6.Uint8Array;
var _Uint8Array = Uint8Array$4;
function mapToArray$2(map3) {
  var index = -1, result = Array(map3.size);
  map3.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
var _mapToArray = mapToArray$2;
function setToArray$2(set5) {
  var index = -1, result = Array(set5.size);
  set5.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var _setToArray = setToArray$2;
var Symbol$5 = _Symbol, Uint8Array$3 = _Uint8Array, eq$3 = eq_1, equalArrays$2 = _equalArrays, mapToArray$1 = _mapToArray, setToArray$1 = _setToArray;
var COMPARE_PARTIAL_FLAG$a = 1, COMPARE_UNORDERED_FLAG$6 = 2;
var boolTag$4 = "[object Boolean]", dateTag$4 = "[object Date]", errorTag$3 = "[object Error]", mapTag$7 = "[object Map]", numberTag$4 = "[object Number]", regexpTag$4 = "[object RegExp]", setTag$7 = "[object Set]", stringTag$4 = "[object String]", symbolTag$5 = "[object Symbol]";
var arrayBufferTag$4 = "[object ArrayBuffer]", dataViewTag$6 = "[object DataView]";
var symbolProto$4 = Symbol$5 ? Symbol$5.prototype : void 0, symbolValueOf$2 = symbolProto$4 ? symbolProto$4.valueOf : void 0;
function equalByTag$2(object2, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$6:
      if (object2.byteLength != other.byteLength || object2.byteOffset != other.byteOffset) {
        return false;
      }
      object2 = object2.buffer;
      other = other.buffer;
    case arrayBufferTag$4:
      if (object2.byteLength != other.byteLength || !equalFunc(new Uint8Array$3(object2), new Uint8Array$3(other))) {
        return false;
      }
      return true;
    case boolTag$4:
    case dateTag$4:
    case numberTag$4:
      return eq$3(+object2, +other);
    case errorTag$3:
      return object2.name == other.name && object2.message == other.message;
    case regexpTag$4:
    case stringTag$4:
      return object2 == other + "";
    case mapTag$7:
      var convert = mapToArray$1;
    case setTag$7:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$a;
      convert || (convert = setToArray$1);
      if (object2.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object2);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$6;
      stack.set(object2, other);
      var result = equalArrays$2(convert(object2), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object2);
      return result;
    case symbolTag$5:
      if (symbolValueOf$2) {
        return symbolValueOf$2.call(object2) == symbolValueOf$2.call(other);
      }
  }
  return false;
}
var _equalByTag = equalByTag$2;
function arrayPush$3(array2, values) {
  var index = -1, length = values.length, offset2 = array2.length;
  while (++index < length) {
    array2[offset2 + index] = values[index];
  }
  return array2;
}
var _arrayPush = arrayPush$3;
var arrayPush$2 = _arrayPush, isArray$a = isArray_1;
function baseGetAllKeys$3(object2, keysFunc, symbolsFunc) {
  var result = keysFunc(object2);
  return isArray$a(object2) ? result : arrayPush$2(result, symbolsFunc(object2));
}
var _baseGetAllKeys = baseGetAllKeys$3;
function arrayFilter$2(array2, predicate) {
  var index = -1, length = array2 == null ? 0 : array2.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array2[index];
    if (predicate(value, index, array2)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var _arrayFilter = arrayFilter$2;
function stubArray$3() {
  return [];
}
var stubArray_1 = stubArray$3;
var arrayFilter$1 = _arrayFilter, stubArray$2 = stubArray_1;
var objectProto$k = Object.prototype;
var propertyIsEnumerable$2 = objectProto$k.propertyIsEnumerable;
var nativeGetSymbols$2 = Object.getOwnPropertySymbols;
var getSymbols$5 = !nativeGetSymbols$2 ? stubArray$2 : function(object2) {
  if (object2 == null) {
    return [];
  }
  object2 = Object(object2);
  return arrayFilter$1(nativeGetSymbols$2(object2), function(symbol) {
    return propertyIsEnumerable$2.call(object2, symbol);
  });
};
var _getSymbols = getSymbols$5;
var baseGetAllKeys$2 = _baseGetAllKeys, getSymbols$4 = _getSymbols, keys$4 = keys_1;
function getAllKeys$3(object2) {
  return baseGetAllKeys$2(object2, keys$4, getSymbols$4);
}
var _getAllKeys = getAllKeys$3;
var getAllKeys$2 = _getAllKeys;
var COMPARE_PARTIAL_FLAG$9 = 1;
var objectProto$j = Object.prototype;
var hasOwnProperty$g = objectProto$j.hasOwnProperty;
function equalObjects$2(object2, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$9, objProps = getAllKeys$2(object2), objLength = objProps.length, othProps = getAllKeys$2(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$g.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object2);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object2;
  }
  var result = true;
  stack.set(object2, other);
  stack.set(other, object2);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object2[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object2, stack) : customizer(objValue, othValue, key, object2, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object2.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object2 && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object2);
  stack["delete"](other);
  return result;
}
var _equalObjects = equalObjects$2;
var getNative$5 = _getNative, root$5 = _root;
var DataView$3 = getNative$5(root$5, "DataView");
var _DataView = DataView$3;
var getNative$4 = _getNative, root$4 = _root;
var Promise$4 = getNative$4(root$4, "Promise");
var _Promise = Promise$4;
var getNative$3 = _getNative, root$3 = _root;
var Set$4 = getNative$3(root$3, "Set");
var _Set = Set$4;
var getNative$2 = _getNative, root$2 = _root;
var WeakMap$3 = getNative$2(root$2, "WeakMap");
var _WeakMap = WeakMap$3;
var DataView$2 = _DataView, Map$3 = _Map, Promise$3 = _Promise, Set$3 = _Set, WeakMap$2 = _WeakMap, baseGetTag$2 = _baseGetTag, toSource$1 = _toSource;
var mapTag$6 = "[object Map]", objectTag$6 = "[object Object]", promiseTag$1 = "[object Promise]", setTag$6 = "[object Set]", weakMapTag$3 = "[object WeakMap]";
var dataViewTag$5 = "[object DataView]";
var dataViewCtorString$1 = toSource$1(DataView$2), mapCtorString$1 = toSource$1(Map$3), promiseCtorString$1 = toSource$1(Promise$3), setCtorString$1 = toSource$1(Set$3), weakMapCtorString$1 = toSource$1(WeakMap$2);
var getTag$6 = baseGetTag$2;
if (DataView$2 && getTag$6(new DataView$2(new ArrayBuffer(1))) != dataViewTag$5 || Map$3 && getTag$6(new Map$3()) != mapTag$6 || Promise$3 && getTag$6(Promise$3.resolve()) != promiseTag$1 || Set$3 && getTag$6(new Set$3()) != setTag$6 || WeakMap$2 && getTag$6(new WeakMap$2()) != weakMapTag$3) {
  getTag$6 = function(value) {
    var result = baseGetTag$2(value), Ctor = result == objectTag$6 ? value.constructor : void 0, ctorString = Ctor ? toSource$1(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString$1:
          return dataViewTag$5;
        case mapCtorString$1:
          return mapTag$6;
        case promiseCtorString$1:
          return promiseTag$1;
        case setCtorString$1:
          return setTag$6;
        case weakMapCtorString$1:
          return weakMapTag$3;
      }
    }
    return result;
  };
}
var _getTag = getTag$6;
var Stack$3 = _Stack, equalArrays$1 = _equalArrays, equalByTag$1 = _equalByTag, equalObjects$1 = _equalObjects, getTag$5 = _getTag, isArray$9 = isArray_1, isBuffer$3 = isBuffer$5.exports, isTypedArray$2 = isTypedArray_1;
var COMPARE_PARTIAL_FLAG$8 = 1;
var argsTag$4 = "[object Arguments]", arrayTag$3 = "[object Array]", objectTag$5 = "[object Object]";
var objectProto$i = Object.prototype;
var hasOwnProperty$f = objectProto$i.hasOwnProperty;
function baseIsEqualDeep$2(object2, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$9(object2), othIsArr = isArray$9(other), objTag = objIsArr ? arrayTag$3 : getTag$5(object2), othTag = othIsArr ? arrayTag$3 : getTag$5(other);
  objTag = objTag == argsTag$4 ? objectTag$5 : objTag;
  othTag = othTag == argsTag$4 ? objectTag$5 : othTag;
  var objIsObj = objTag == objectTag$5, othIsObj = othTag == objectTag$5, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$3(object2)) {
    if (!isBuffer$3(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack$3());
    return objIsArr || isTypedArray$2(object2) ? equalArrays$1(object2, other, bitmask, customizer, equalFunc, stack) : equalByTag$1(object2, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$8)) {
    var objIsWrapped = objIsObj && hasOwnProperty$f.call(object2, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$f.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object2.value() : object2, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack$3());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack$3());
  return equalObjects$1(object2, other, bitmask, customizer, equalFunc, stack);
}
var _baseIsEqualDeep = baseIsEqualDeep$2;
var baseIsEqualDeep$1 = _baseIsEqualDeep, isObjectLike$4 = isObjectLike_1;
function baseIsEqual$3(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike$4(value) && !isObjectLike$4(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep$1(value, other, bitmask, customizer, baseIsEqual$3, stack);
}
var _baseIsEqual = baseIsEqual$3;
var Stack$2 = _Stack, baseIsEqual$2 = _baseIsEqual;
var COMPARE_PARTIAL_FLAG$7 = 1, COMPARE_UNORDERED_FLAG$5 = 2;
function baseIsMatch$2(object2, source, matchData, customizer) {
  var index = matchData.length, length = index, noCustomizer = !customizer;
  if (object2 == null) {
    return !length;
  }
  object2 = Object(object2);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object2[data[0]] : !(data[0] in object2)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0], objValue = object2[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object2)) {
        return false;
      }
    } else {
      var stack = new Stack$2();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object2, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual$2(srcValue, objValue, COMPARE_PARTIAL_FLAG$7 | COMPARE_UNORDERED_FLAG$5, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
var _baseIsMatch = baseIsMatch$2;
var isObject$6 = isObject_1;
function isStrictComparable$3(value) {
  return value === value && !isObject$6(value);
}
var _isStrictComparable = isStrictComparable$3;
var isStrictComparable$2 = _isStrictComparable, keys$3 = keys_1;
function getMatchData$2(object2) {
  var result = keys$3(object2), length = result.length;
  while (length--) {
    var key = result[length], value = object2[key];
    result[length] = [key, value, isStrictComparable$2(value)];
  }
  return result;
}
var _getMatchData = getMatchData$2;
function matchesStrictComparable$3(key, srcValue) {
  return function(object2) {
    if (object2 == null) {
      return false;
    }
    return object2[key] === srcValue && (srcValue !== void 0 || key in Object(object2));
  };
}
var _matchesStrictComparable = matchesStrictComparable$3;
var baseIsMatch$1 = _baseIsMatch, getMatchData$1 = _getMatchData, matchesStrictComparable$2 = _matchesStrictComparable;
function baseMatches$2(source) {
  var matchData = getMatchData$1(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable$2(matchData[0][0], matchData[0][1]);
  }
  return function(object2) {
    return object2 === source || baseIsMatch$1(object2, source, matchData);
  };
}
var _baseMatches = baseMatches$2;
var baseGetTag$1 = _baseGetTag, isObjectLike$3 = isObjectLike_1;
var symbolTag$4 = "[object Symbol]";
function isSymbol$4(value) {
  return typeof value == "symbol" || isObjectLike$3(value) && baseGetTag$1(value) == symbolTag$4;
}
var isSymbol_1 = isSymbol$4;
var isArray$8 = isArray_1, isSymbol$3 = isSymbol_1;
var reIsDeepProp$1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp$1 = /^\w*$/;
function isKey$4(value, object2) {
  if (isArray$8(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol$3(value)) {
    return true;
  }
  return reIsPlainProp$1.test(value) || !reIsDeepProp$1.test(value) || object2 != null && value in Object(object2);
}
var _isKey = isKey$4;
var MapCache$1 = _MapCache;
var FUNC_ERROR_TEXT$3 = "Expected a function";
function memoize$3(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$3);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache2 = memoized.cache;
    if (cache2.has(key)) {
      return cache2.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache2.set(key, result) || cache2;
    return result;
  };
  memoized.cache = new (memoize$3.Cache || MapCache$1)();
  return memoized;
}
memoize$3.Cache = MapCache$1;
var memoize_1 = memoize$3;
var memoize$2 = memoize_1;
var MAX_MEMOIZE_SIZE$1 = 500;
function memoizeCapped$2(func) {
  var result = memoize$2(func, function(key) {
    if (cache2.size === MAX_MEMOIZE_SIZE$1) {
      cache2.clear();
    }
    return key;
  });
  var cache2 = result.cache;
  return result;
}
var _memoizeCapped = memoizeCapped$2;
var memoizeCapped$1 = _memoizeCapped;
var rePropName$1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar$1 = /\\(\\)?/g;
var stringToPath$3 = memoizeCapped$1(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName$1, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar$1, "$1") : number || match);
  });
  return result;
});
var _stringToPath = stringToPath$3;
var Symbol$4 = _Symbol, arrayMap$2 = _arrayMap, isArray$7 = isArray_1, isSymbol$2 = isSymbol_1;
var INFINITY$3 = 1 / 0;
var symbolProto$3 = Symbol$4 ? Symbol$4.prototype : void 0, symbolToString$1 = symbolProto$3 ? symbolProto$3.toString : void 0;
function baseToString$2(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$7(value)) {
    return arrayMap$2(value, baseToString$2) + "";
  }
  if (isSymbol$2(value)) {
    return symbolToString$1 ? symbolToString$1.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$3 ? "-0" : result;
}
var _baseToString = baseToString$2;
var baseToString$1 = _baseToString;
function toString$3(value) {
  return value == null ? "" : baseToString$1(value);
}
var toString_1 = toString$3;
var isArray$6 = isArray_1, isKey$3 = _isKey, stringToPath$2 = _stringToPath, toString$2 = toString_1;
function castPath$3(value, object2) {
  if (isArray$6(value)) {
    return value;
  }
  return isKey$3(value, object2) ? [value] : stringToPath$2(toString$2(value));
}
var _castPath = castPath$3;
var isSymbol$1 = isSymbol_1;
var INFINITY$2 = 1 / 0;
function toKey$5(value) {
  if (typeof value == "string" || isSymbol$1(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$2 ? "-0" : result;
}
var _toKey = toKey$5;
var castPath$2 = _castPath, toKey$4 = _toKey;
function baseGet$3(object2, path) {
  path = castPath$2(path, object2);
  var index = 0, length = path.length;
  while (object2 != null && index < length) {
    object2 = object2[toKey$4(path[index++])];
  }
  return index && index == length ? object2 : void 0;
}
var _baseGet = baseGet$3;
var baseGet$2 = _baseGet;
function get$4(object2, path, defaultValue) {
  var result = object2 == null ? void 0 : baseGet$2(object2, path);
  return result === void 0 ? defaultValue : result;
}
var get_1 = get$4;
function baseHasIn$2(object2, key) {
  return object2 != null && key in Object(object2);
}
var _baseHasIn = baseHasIn$2;
var castPath$1 = _castPath, isArguments$2 = isArguments_1, isArray$5 = isArray_1, isIndex$1 = _isIndex, isLength$1 = isLength_1, toKey$3 = _toKey;
function hasPath$2(object2, path, hasFunc) {
  path = castPath$1(path, object2);
  var index = -1, length = path.length, result = false;
  while (++index < length) {
    var key = toKey$3(path[index]);
    if (!(result = object2 != null && hasFunc(object2, key))) {
      break;
    }
    object2 = object2[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object2 == null ? 0 : object2.length;
  return !!length && isLength$1(length) && isIndex$1(key, length) && (isArray$5(object2) || isArguments$2(object2));
}
var _hasPath = hasPath$2;
var baseHasIn$1 = _baseHasIn, hasPath$1 = _hasPath;
function hasIn$2(object2, path) {
  return object2 != null && hasPath$1(object2, path, baseHasIn$1);
}
var hasIn_1 = hasIn$2;
var baseIsEqual$1 = _baseIsEqual, get$3 = get_1, hasIn$1 = hasIn_1, isKey$2 = _isKey, isStrictComparable$1 = _isStrictComparable, matchesStrictComparable$1 = _matchesStrictComparable, toKey$2 = _toKey;
var COMPARE_PARTIAL_FLAG$6 = 1, COMPARE_UNORDERED_FLAG$4 = 2;
function baseMatchesProperty$2(path, srcValue) {
  if (isKey$2(path) && isStrictComparable$1(srcValue)) {
    return matchesStrictComparable$1(toKey$2(path), srcValue);
  }
  return function(object2) {
    var objValue = get$3(object2, path);
    return objValue === void 0 && objValue === srcValue ? hasIn$1(object2, path) : baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG$6 | COMPARE_UNORDERED_FLAG$4);
  };
}
var _baseMatchesProperty = baseMatchesProperty$2;
function baseProperty$2(key) {
  return function(object2) {
    return object2 == null ? void 0 : object2[key];
  };
}
var _baseProperty = baseProperty$2;
var baseGet$1 = _baseGet;
function basePropertyDeep$2(path) {
  return function(object2) {
    return baseGet$1(object2, path);
  };
}
var _basePropertyDeep = basePropertyDeep$2;
var baseProperty$1 = _baseProperty, basePropertyDeep$1 = _basePropertyDeep, isKey$1 = _isKey, toKey$1 = _toKey;
function property$2(path) {
  return isKey$1(path) ? baseProperty$1(toKey$1(path)) : basePropertyDeep$1(path);
}
var property_1 = property$2;
var baseMatches$1 = _baseMatches, baseMatchesProperty$1 = _baseMatchesProperty, identity$1 = identity_1, isArray$4 = isArray_1, property$1 = property_1;
function baseIteratee$2(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity$1;
  }
  if (typeof value == "object") {
    return isArray$4(value) ? baseMatchesProperty$1(value[0], value[1]) : baseMatches$1(value);
  }
  return property$1(value);
}
var _baseIteratee = baseIteratee$2;
var isArrayLike$3 = isArrayLike_1;
function createBaseEach$2(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike$3(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
var _createBaseEach = createBaseEach$2;
var baseForOwn$1 = _baseForOwn, createBaseEach$1 = _createBaseEach;
var baseEach$3 = createBaseEach$1(baseForOwn$1);
var _baseEach = baseEach$3;
var baseEach$2 = _baseEach, isArrayLike$2 = isArrayLike_1;
function baseMap$2(collection, iteratee) {
  var index = -1, result = isArrayLike$2(collection) ? Array(collection.length) : [];
  baseEach$2(collection, function(value, key, collection2) {
    result[++index] = iteratee(value, key, collection2);
  });
  return result;
}
var _baseMap = baseMap$2;
var arrayMap$1 = _arrayMap, baseIteratee$1 = _baseIteratee, baseMap$1 = _baseMap, isArray$3 = isArray_1;
function map$1(collection, iteratee) {
  var func = isArray$3(collection) ? arrayMap$1 : baseMap$1;
  return func(collection, baseIteratee$1(iteratee));
}
var map_1 = map$1;
Object.defineProperty(flattenNames$1, "__esModule", {
  value: true
});
flattenNames$1.flattenNames = void 0;
var _isString2 = isString_1;
var _isString3 = _interopRequireDefault$7(_isString2);
var _forOwn2$2 = forOwn_1;
var _forOwn3$2 = _interopRequireDefault$7(_forOwn2$2);
var _isPlainObject2 = isPlainObject_1;
var _isPlainObject3 = _interopRequireDefault$7(_isPlainObject2);
var _map2 = map_1;
var _map3 = _interopRequireDefault$7(_map2);
function _interopRequireDefault$7(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var flattenNames = flattenNames$1.flattenNames = function flattenNames2() {
  var things = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var names2 = [];
  (0, _map3.default)(things, function(thing) {
    if (Array.isArray(thing)) {
      flattenNames2(thing).map(function(name) {
        return names2.push(name);
      });
    } else if ((0, _isPlainObject3.default)(thing)) {
      (0, _forOwn3$2.default)(thing, function(value, key) {
        value === true && names2.push(key);
        names2.push(key + "-" + value);
      });
    } else if ((0, _isString3.default)(thing)) {
      names2.push(thing);
    }
  });
  return names2;
};
flattenNames$1.default = flattenNames;
var mergeClasses$1 = {};
function arrayEach$2(array2, iteratee) {
  var index = -1, length = array2 == null ? 0 : array2.length;
  while (++index < length) {
    if (iteratee(array2[index], index, array2) === false) {
      break;
    }
  }
  return array2;
}
var _arrayEach = arrayEach$2;
var getNative$1 = _getNative;
var defineProperty$4 = function() {
  try {
    var func = getNative$1(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var _defineProperty$6 = defineProperty$4;
var defineProperty$3 = _defineProperty$6;
function baseAssignValue$3(object2, key, value) {
  if (key == "__proto__" && defineProperty$3) {
    defineProperty$3(object2, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object2[key] = value;
  }
}
var _baseAssignValue = baseAssignValue$3;
var baseAssignValue$2 = _baseAssignValue, eq$2 = eq_1;
var objectProto$h = Object.prototype;
var hasOwnProperty$e = objectProto$h.hasOwnProperty;
function assignValue$3(object2, key, value) {
  var objValue = object2[key];
  if (!(hasOwnProperty$e.call(object2, key) && eq$2(objValue, value)) || value === void 0 && !(key in object2)) {
    baseAssignValue$2(object2, key, value);
  }
}
var _assignValue = assignValue$3;
var assignValue$2 = _assignValue, baseAssignValue$1 = _baseAssignValue;
function copyObject$5(source, props, object2, customizer) {
  var isNew = !object2;
  object2 || (object2 = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object2[key], source[key], key, object2, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue$1(object2, key, newValue);
    } else {
      assignValue$2(object2, key, newValue);
    }
  }
  return object2;
}
var _copyObject = copyObject$5;
var copyObject$4 = _copyObject, keys$2 = keys_1;
function baseAssign$1(object2, source) {
  return object2 && copyObject$4(source, keys$2(source), object2);
}
var _baseAssign = baseAssign$1;
function nativeKeysIn$2(object2) {
  var result = [];
  if (object2 != null) {
    for (var key in Object(object2)) {
      result.push(key);
    }
  }
  return result;
}
var _nativeKeysIn = nativeKeysIn$2;
var isObject$5 = isObject_1, isPrototype$2 = _isPrototype, nativeKeysIn$1 = _nativeKeysIn;
var objectProto$g = Object.prototype;
var hasOwnProperty$d = objectProto$g.hasOwnProperty;
function baseKeysIn$2(object2) {
  if (!isObject$5(object2)) {
    return nativeKeysIn$1(object2);
  }
  var isProto = isPrototype$2(object2), result = [];
  for (var key in object2) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$d.call(object2, key)))) {
      result.push(key);
    }
  }
  return result;
}
var _baseKeysIn = baseKeysIn$2;
var arrayLikeKeys$1 = _arrayLikeKeys, baseKeysIn$1 = _baseKeysIn, isArrayLike$1 = isArrayLike_1;
function keysIn$4(object2) {
  return isArrayLike$1(object2) ? arrayLikeKeys$1(object2, true) : baseKeysIn$1(object2);
}
var keysIn_1 = keysIn$4;
var copyObject$3 = _copyObject, keysIn$3 = keysIn_1;
function baseAssignIn$1(object2, source) {
  return object2 && copyObject$3(source, keysIn$3(source), object2);
}
var _baseAssignIn = baseAssignIn$1;
var _cloneBuffer = { exports: {} };
(function(module2, exports2) {
  var root2 = _root;
  var freeExports2 = exports2 && !exports2.nodeType && exports2;
  var freeModule2 = freeExports2 && true && module2 && !module2.nodeType && module2;
  var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
  var Buffer2 = moduleExports2 ? root2.Buffer : void 0, allocUnsafe2 = Buffer2 ? Buffer2.allocUnsafe : void 0;
  function cloneBuffer2(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe2 ? allocUnsafe2(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }
  module2.exports = cloneBuffer2;
})(_cloneBuffer, _cloneBuffer.exports);
function copyArray$2(source, array2) {
  var index = -1, length = source.length;
  array2 || (array2 = Array(length));
  while (++index < length) {
    array2[index] = source[index];
  }
  return array2;
}
var _copyArray = copyArray$2;
var copyObject$2 = _copyObject, getSymbols$3 = _getSymbols;
function copySymbols$1(source, object2) {
  return copyObject$2(source, getSymbols$3(source), object2);
}
var _copySymbols = copySymbols$1;
var arrayPush$1 = _arrayPush, getPrototype$3 = _getPrototype, getSymbols$2 = _getSymbols, stubArray$1 = stubArray_1;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbolsIn$2 = !nativeGetSymbols$1 ? stubArray$1 : function(object2) {
  var result = [];
  while (object2) {
    arrayPush$1(result, getSymbols$2(object2));
    object2 = getPrototype$3(object2);
  }
  return result;
};
var _getSymbolsIn = getSymbolsIn$2;
var copyObject$1 = _copyObject, getSymbolsIn$1 = _getSymbolsIn;
function copySymbolsIn$1(source, object2) {
  return copyObject$1(source, getSymbolsIn$1(source), object2);
}
var _copySymbolsIn = copySymbolsIn$1;
var baseGetAllKeys$1 = _baseGetAllKeys, getSymbolsIn = _getSymbolsIn, keysIn$2 = keysIn_1;
function getAllKeysIn$1(object2) {
  return baseGetAllKeys$1(object2, keysIn$2, getSymbolsIn);
}
var _getAllKeysIn = getAllKeysIn$1;
var objectProto$f = Object.prototype;
var hasOwnProperty$c = objectProto$f.hasOwnProperty;
function initCloneArray$1(array2) {
  var length = array2.length, result = new array2.constructor(length);
  if (length && typeof array2[0] == "string" && hasOwnProperty$c.call(array2, "index")) {
    result.index = array2.index;
    result.input = array2.input;
  }
  return result;
}
var _initCloneArray = initCloneArray$1;
var Uint8Array$2 = _Uint8Array;
function cloneArrayBuffer$4(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$2(result).set(new Uint8Array$2(arrayBuffer));
  return result;
}
var _cloneArrayBuffer = cloneArrayBuffer$4;
var cloneArrayBuffer$3 = _cloneArrayBuffer;
function cloneDataView$1(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$3(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var _cloneDataView = cloneDataView$1;
var reFlags = /\w*$/;
function cloneRegExp$1(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var _cloneRegExp = cloneRegExp$1;
var Symbol$3 = _Symbol;
var symbolProto$2 = Symbol$3 ? Symbol$3.prototype : void 0, symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : void 0;
function cloneSymbol$1(symbol) {
  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}
var _cloneSymbol = cloneSymbol$1;
var cloneArrayBuffer$2 = _cloneArrayBuffer;
function cloneTypedArray$2(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$2(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray = cloneTypedArray$2;
var cloneArrayBuffer$1 = _cloneArrayBuffer, cloneDataView = _cloneDataView, cloneRegExp = _cloneRegExp, cloneSymbol = _cloneSymbol, cloneTypedArray$1 = _cloneTypedArray;
var boolTag$3 = "[object Boolean]", dateTag$3 = "[object Date]", mapTag$5 = "[object Map]", numberTag$3 = "[object Number]", regexpTag$3 = "[object RegExp]", setTag$5 = "[object Set]", stringTag$3 = "[object String]", symbolTag$3 = "[object Symbol]";
var arrayBufferTag$3 = "[object ArrayBuffer]", dataViewTag$4 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
function initCloneByTag$1(object2, tag, isDeep) {
  var Ctor = object2.constructor;
  switch (tag) {
    case arrayBufferTag$3:
      return cloneArrayBuffer$1(object2);
    case boolTag$3:
    case dateTag$3:
      return new Ctor(+object2);
    case dataViewTag$4:
      return cloneDataView(object2, isDeep);
    case float32Tag$2:
    case float64Tag$2:
    case int8Tag$2:
    case int16Tag$2:
    case int32Tag$2:
    case uint8Tag$2:
    case uint8ClampedTag$2:
    case uint16Tag$2:
    case uint32Tag$2:
      return cloneTypedArray$1(object2, isDeep);
    case mapTag$5:
      return new Ctor();
    case numberTag$3:
    case stringTag$3:
      return new Ctor(object2);
    case regexpTag$3:
      return cloneRegExp(object2);
    case setTag$5:
      return new Ctor();
    case symbolTag$3:
      return cloneSymbol(object2);
  }
}
var _initCloneByTag = initCloneByTag$1;
var isObject$4 = isObject_1;
var objectCreate$1 = Object.create;
var baseCreate$3 = function() {
  function object2() {
  }
  return function(proto2) {
    if (!isObject$4(proto2)) {
      return {};
    }
    if (objectCreate$1) {
      return objectCreate$1(proto2);
    }
    object2.prototype = proto2;
    var result = new object2();
    object2.prototype = void 0;
    return result;
  };
}();
var _baseCreate = baseCreate$3;
var baseCreate$2 = _baseCreate, getPrototype$2 = _getPrototype, isPrototype$1 = _isPrototype;
function initCloneObject$2(object2) {
  return typeof object2.constructor == "function" && !isPrototype$1(object2) ? baseCreate$2(getPrototype$2(object2)) : {};
}
var _initCloneObject = initCloneObject$2;
var getTag$4 = _getTag, isObjectLike$2 = isObjectLike_1;
var mapTag$4 = "[object Map]";
function baseIsMap$1(value) {
  return isObjectLike$2(value) && getTag$4(value) == mapTag$4;
}
var _baseIsMap = baseIsMap$1;
var baseIsMap = _baseIsMap, baseUnary$2 = _baseUnary, nodeUtil$3 = _nodeUtil.exports;
var nodeIsMap = nodeUtil$3 && nodeUtil$3.isMap;
var isMap$1 = nodeIsMap ? baseUnary$2(nodeIsMap) : baseIsMap;
var isMap_1 = isMap$1;
var getTag$3 = _getTag, isObjectLike$1 = isObjectLike_1;
var setTag$4 = "[object Set]";
function baseIsSet$1(value) {
  return isObjectLike$1(value) && getTag$3(value) == setTag$4;
}
var _baseIsSet = baseIsSet$1;
var baseIsSet = _baseIsSet, baseUnary$1 = _baseUnary, nodeUtil$2 = _nodeUtil.exports;
var nodeIsSet = nodeUtil$2 && nodeUtil$2.isSet;
var isSet$1 = nodeIsSet ? baseUnary$1(nodeIsSet) : baseIsSet;
var isSet_1 = isSet$1;
var Stack$1 = _Stack, arrayEach$1 = _arrayEach, assignValue$1 = _assignValue, baseAssign = _baseAssign, baseAssignIn = _baseAssignIn, cloneBuffer$1 = _cloneBuffer.exports, copyArray$1 = _copyArray, copySymbols = _copySymbols, copySymbolsIn = _copySymbolsIn, getAllKeys$1 = _getAllKeys, getAllKeysIn = _getAllKeysIn, getTag$2 = _getTag, initCloneArray = _initCloneArray, initCloneByTag = _initCloneByTag, initCloneObject$1 = _initCloneObject, isArray$2 = isArray_1, isBuffer$2 = isBuffer$5.exports, isMap = isMap_1, isObject$3 = isObject_1, isSet = isSet_1, keys$1 = keys_1, keysIn$1 = keysIn_1;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag$3 = "[object Arguments]", arrayTag$2 = "[object Array]", boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", errorTag$2 = "[object Error]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", mapTag$3 = "[object Map]", numberTag$2 = "[object Number]", objectTag$4 = "[object Object]", regexpTag$2 = "[object RegExp]", setTag$3 = "[object Set]", stringTag$2 = "[object String]", symbolTag$2 = "[object Symbol]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$3 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag$3] = cloneableTags[arrayTag$2] = cloneableTags[arrayBufferTag$2] = cloneableTags[dataViewTag$3] = cloneableTags[boolTag$2] = cloneableTags[dateTag$2] = cloneableTags[float32Tag$1] = cloneableTags[float64Tag$1] = cloneableTags[int8Tag$1] = cloneableTags[int16Tag$1] = cloneableTags[int32Tag$1] = cloneableTags[mapTag$3] = cloneableTags[numberTag$2] = cloneableTags[objectTag$4] = cloneableTags[regexpTag$2] = cloneableTags[setTag$3] = cloneableTags[stringTag$2] = cloneableTags[symbolTag$2] = cloneableTags[uint8Tag$1] = cloneableTags[uint8ClampedTag$1] = cloneableTags[uint16Tag$1] = cloneableTags[uint32Tag$1] = true;
cloneableTags[errorTag$2] = cloneableTags[funcTag$2] = cloneableTags[weakMapTag$2] = false;
function baseClone$1(value, bitmask, customizer, key, object2, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result = object2 ? customizer(value, key, object2, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject$3(value)) {
    return value;
  }
  var isArr = isArray$2(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray$1(value, result);
    }
  } else {
    var tag = getTag$2(value), isFunc = tag == funcTag$2 || tag == genTag$1;
    if (isBuffer$2(value)) {
      return cloneBuffer$1(value, isDeep);
    }
    if (tag == objectTag$4 || tag == argsTag$3 || isFunc && !object2) {
      result = isFlat || isFunc ? {} : initCloneObject$1(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object2 ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack$1());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone$1(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone$1(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys$1 : isFlat ? keysIn$1 : keys$1;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach$1(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue$1(result, key2, baseClone$1(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var _baseClone = baseClone$1;
var baseClone = _baseClone;
var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
var cloneDeep_1 = cloneDeep;
Object.defineProperty(mergeClasses$1, "__esModule", {
  value: true
});
mergeClasses$1.mergeClasses = void 0;
var _forOwn2$1 = forOwn_1;
var _forOwn3$1 = _interopRequireDefault$6(_forOwn2$1);
var _cloneDeep2 = cloneDeep_1;
var _cloneDeep3 = _interopRequireDefault$6(_cloneDeep2);
var _extends$f = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function _interopRequireDefault$6(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var mergeClasses = mergeClasses$1.mergeClasses = function mergeClasses2(classes) {
  var activeNames = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var styles = classes.default && (0, _cloneDeep3.default)(classes.default) || {};
  activeNames.map(function(name) {
    var toMerge = classes[name];
    if (toMerge) {
      (0, _forOwn3$1.default)(toMerge, function(value, key) {
        if (!styles[key]) {
          styles[key] = {};
        }
        styles[key] = _extends$f({}, styles[key], toMerge[key]);
      });
    }
    return name;
  });
  return styles;
};
mergeClasses$1.default = mergeClasses;
var autoprefix$1 = {};
Object.defineProperty(autoprefix$1, "__esModule", {
  value: true
});
autoprefix$1.autoprefix = void 0;
var _forOwn2 = forOwn_1;
var _forOwn3 = _interopRequireDefault$5(_forOwn2);
var _extends$e = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function _interopRequireDefault$5(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var transforms = {
  borderRadius: function borderRadius(value) {
    return {
      msBorderRadius: value,
      MozBorderRadius: value,
      OBorderRadius: value,
      WebkitBorderRadius: value,
      borderRadius: value
    };
  },
  boxShadow: function boxShadow(value) {
    return {
      msBoxShadow: value,
      MozBoxShadow: value,
      OBoxShadow: value,
      WebkitBoxShadow: value,
      boxShadow: value
    };
  },
  userSelect: function userSelect(value) {
    return {
      WebkitTouchCallout: value,
      KhtmlUserSelect: value,
      MozUserSelect: value,
      msUserSelect: value,
      WebkitUserSelect: value,
      userSelect: value
    };
  },
  flex: function flex(value) {
    return {
      WebkitBoxFlex: value,
      MozBoxFlex: value,
      WebkitFlex: value,
      msFlex: value,
      flex: value
    };
  },
  flexBasis: function flexBasis(value) {
    return {
      WebkitFlexBasis: value,
      flexBasis: value
    };
  },
  justifyContent: function justifyContent(value) {
    return {
      WebkitJustifyContent: value,
      justifyContent: value
    };
  },
  transition: function transition(value) {
    return {
      msTransition: value,
      MozTransition: value,
      OTransition: value,
      WebkitTransition: value,
      transition: value
    };
  },
  transform: function transform(value) {
    return {
      msTransform: value,
      MozTransform: value,
      OTransform: value,
      WebkitTransform: value,
      transform: value
    };
  },
  absolute: function absolute(value) {
    var direction = value && value.split(" ");
    return {
      position: "absolute",
      top: direction && direction[0],
      right: direction && direction[1],
      bottom: direction && direction[2],
      left: direction && direction[3]
    };
  },
  extend: function extend2(name, otherElementStyles) {
    var otherStyle = otherElementStyles[name];
    if (otherStyle) {
      return otherStyle;
    }
    return {
      "extend": name
    };
  }
};
var autoprefix = autoprefix$1.autoprefix = function autoprefix2(elements) {
  var prefixed = {};
  (0, _forOwn3.default)(elements, function(styles, element) {
    var expanded = {};
    (0, _forOwn3.default)(styles, function(value, key) {
      var transform2 = transforms[key];
      if (transform2) {
        expanded = _extends$e({}, expanded, transform2(value));
      } else {
        expanded[key] = value;
      }
    });
    prefixed[element] = expanded;
  });
  return prefixed;
};
autoprefix$1.default = autoprefix;
var hover$1 = {};
Object.defineProperty(hover$1, "__esModule", {
  value: true
});
hover$1.hover = void 0;
var _extends$d = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _react$3 = React;
var _react2$3 = _interopRequireDefault$4(_react$3);
function _interopRequireDefault$4(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _classCallCheck$9(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$9(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits$9(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var hover = hover$1.hover = function hover2(Component2) {
  var Span = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
  return function(_React$Component) {
    _inherits$9(Hover, _React$Component);
    function Hover() {
      var _ref;
      var _temp, _this, _ret;
      _classCallCheck$9(this, Hover);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp = (_this = _possibleConstructorReturn$9(this, (_ref = Hover.__proto__ || Object.getPrototypeOf(Hover)).call.apply(_ref, [this].concat(args))), _this), _this.state = { hover: false }, _this.handleMouseOver = function() {
        return _this.setState({ hover: true });
      }, _this.handleMouseOut = function() {
        return _this.setState({ hover: false });
      }, _this.render = function() {
        return _react2$3.default.createElement(
          Span,
          { onMouseOver: _this.handleMouseOver, onMouseOut: _this.handleMouseOut },
          _react2$3.default.createElement(Component2, _extends$d({}, _this.props, _this.state))
        );
      }, _temp), _possibleConstructorReturn$9(_this, _ret);
    }
    return Hover;
  }(_react2$3.default.Component);
};
hover$1.default = hover;
var active$1 = {};
Object.defineProperty(active$1, "__esModule", {
  value: true
});
active$1.active = void 0;
var _extends$c = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _react$2 = React;
var _react2$2 = _interopRequireDefault$3(_react$2);
function _interopRequireDefault$3(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _classCallCheck$8(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$8(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits$8(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var active = active$1.active = function active2(Component2) {
  var Span = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
  return function(_React$Component) {
    _inherits$8(Active, _React$Component);
    function Active() {
      var _ref;
      var _temp, _this, _ret;
      _classCallCheck$8(this, Active);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp = (_this = _possibleConstructorReturn$8(this, (_ref = Active.__proto__ || Object.getPrototypeOf(Active)).call.apply(_ref, [this].concat(args))), _this), _this.state = { active: false }, _this.handleMouseDown = function() {
        return _this.setState({ active: true });
      }, _this.handleMouseUp = function() {
        return _this.setState({ active: false });
      }, _this.render = function() {
        return _react2$2.default.createElement(
          Span,
          { onMouseDown: _this.handleMouseDown, onMouseUp: _this.handleMouseUp },
          _react2$2.default.createElement(Component2, _extends$c({}, _this.props, _this.state))
        );
      }, _temp), _possibleConstructorReturn$8(_this, _ret);
    }
    return Active;
  }(_react2$2.default.Component);
};
active$1.default = active;
var loop = {};
Object.defineProperty(loop, "__esModule", {
  value: true
});
var loopable = function loopable2(i, length) {
  var props = {};
  var setProp = function setProp2(name) {
    var value = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    props[name] = value;
  };
  i === 0 && setProp("first-child");
  i === length - 1 && setProp("last-child");
  (i === 0 || i % 2 === 0) && setProp("even");
  Math.abs(i % 2) === 1 && setProp("odd");
  setProp("nth-child", i);
  return props;
};
loop.default = loopable;
Object.defineProperty(lib, "__esModule", {
  value: true
});
lib.ReactCSS = lib.loop = lib.handleActive = handleHover = lib.handleHover = lib.hover = void 0;
var _flattenNames = flattenNames$1;
var _flattenNames2 = _interopRequireDefault$2(_flattenNames);
var _mergeClasses = mergeClasses$1;
var _mergeClasses2 = _interopRequireDefault$2(_mergeClasses);
var _autoprefix = autoprefix$1;
var _autoprefix2 = _interopRequireDefault$2(_autoprefix);
var _hover2 = hover$1;
var _hover3 = _interopRequireDefault$2(_hover2);
var _active = active$1;
var _active2 = _interopRequireDefault$2(_active);
var _loop2 = loop;
var _loop3 = _interopRequireDefault$2(_loop2);
function _interopRequireDefault$2(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
lib.hover = _hover3.default;
var handleHover = lib.handleHover = _hover3.default;
lib.handleActive = _active2.default;
lib.loop = _loop3.default;
var ReactCSS = lib.ReactCSS = function ReactCSS2(classes) {
  for (var _len = arguments.length, activations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    activations[_key - 1] = arguments[_key];
  }
  var activeNames = (0, _flattenNames2.default)(activations);
  var merged = (0, _mergeClasses2.default)(classes, activeNames);
  return (0, _autoprefix2.default)(merged);
};
var _default$2 = lib.default = ReactCSS;
var calculateChange$2 = function calculateChange(e, hsl, direction, initialA, container) {
  var containerWidth = container.clientWidth;
  var containerHeight = container.clientHeight;
  var x = typeof e.pageX === "number" ? e.pageX : e.touches[0].pageX;
  var y = typeof e.pageY === "number" ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);
  if (direction === "vertical") {
    var a = void 0;
    if (top < 0) {
      a = 0;
    } else if (top > containerHeight) {
      a = 1;
    } else {
      a = Math.round(top * 100 / containerHeight) / 100;
    }
    if (hsl.a !== a) {
      return {
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
        a,
        source: "rgb"
      };
    }
  } else {
    var _a = void 0;
    if (left < 0) {
      _a = 0;
    } else if (left > containerWidth) {
      _a = 1;
    } else {
      _a = Math.round(left * 100 / containerWidth) / 100;
    }
    if (initialA !== _a) {
      return {
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
        a: _a,
        source: "rgb"
      };
    }
  }
  return null;
};
var checkboardCache = {};
var render = function render2(c1, c2, size, serverCanvas) {
  if (typeof document === "undefined" && !serverCanvas) {
    return null;
  }
  var canvas = serverCanvas ? new serverCanvas() : document.createElement("canvas");
  canvas.width = size * 2;
  canvas.height = size * 2;
  var ctx = canvas.getContext("2d");
  if (!ctx) {
    return null;
  }
  ctx.fillStyle = c1;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = c2;
  ctx.fillRect(0, 0, size, size);
  ctx.translate(size, size);
  ctx.fillRect(0, 0, size, size);
  return canvas.toDataURL();
};
var get$2 = function get(c1, c2, size, serverCanvas) {
  var key = c1 + "-" + c2 + "-" + size + (serverCanvas ? "-server" : "");
  if (checkboardCache[key]) {
    return checkboardCache[key];
  }
  var checkboard = render(c1, c2, size, serverCanvas);
  checkboardCache[key] = checkboard;
  return checkboard;
};
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = React, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b, d = {}, e = null, h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b in a)
    m$1.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
var _extends$b = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var Checkboard = function Checkboard2(_ref) {
  var white = _ref.white, grey = _ref.grey, size = _ref.size, renderers = _ref.renderers, borderRadius2 = _ref.borderRadius, boxShadow2 = _ref.boxShadow, children = _ref.children;
  var styles = _default$2({
    "default": {
      grid: {
        borderRadius: borderRadius2,
        boxShadow: boxShadow2,
        absolute: "0px 0px 0px 0px",
        background: "url(" + get$2(white, grey, size, renderers.canvas) + ") center left"
      }
    }
  });
  return isValidElement(children) ? React.cloneElement(children, _extends$b({}, children.props, {
    style: _extends$b({}, children.props.style, styles.grid)
  })) : /* @__PURE__ */ jsx("div", {
    style: styles.grid
  });
};
Checkboard.defaultProps = {
  size: 8,
  white: "transparent",
  grey: "rgba(0,0,0,.08)",
  renderers: {}
};
var _extends$a = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _createClass$8 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck$7(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$7(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits$7(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var Alpha = function(_ref) {
  _inherits$7(Alpha2, _ref);
  function Alpha2() {
    var _ref2;
    var _temp, _this, _ret;
    _classCallCheck$7(this, Alpha2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn$7(this, (_ref2 = Alpha2.__proto__ || Object.getPrototypeOf(Alpha2)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChange = function(e) {
      var change = calculateChange$2(e, _this.props.hsl, _this.props.direction, _this.props.a, _this.container);
      change && typeof _this.props.onChange === "function" && _this.props.onChange(change, e);
    }, _this.handleMouseDown = function(e) {
      _this.handleChange(e);
      window.addEventListener("mousemove", _this.handleChange);
      window.addEventListener("mouseup", _this.handleMouseUp);
    }, _this.handleMouseUp = function() {
      _this.unbindEventListeners();
    }, _this.unbindEventListeners = function() {
      window.removeEventListener("mousemove", _this.handleChange);
      window.removeEventListener("mouseup", _this.handleMouseUp);
    }, _temp), _possibleConstructorReturn$7(_this, _ret);
  }
  _createClass$8(Alpha2, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: "render",
    value: function render3() {
      var _this2 = this;
      var rgb = this.props.rgb;
      var styles = _default$2({
        "default": {
          alpha: {
            absolute: "0px 0px 0px 0px",
            borderRadius: this.props.radius
          },
          checkboard: {
            absolute: "0px 0px 0px 0px",
            overflow: "hidden",
            borderRadius: this.props.radius
          },
          gradient: {
            absolute: "0px 0px 0px 0px",
            background: "linear-gradient(to right, rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ", 0) 0%,\n           rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ", 1) 100%)",
            boxShadow: this.props.shadow,
            borderRadius: this.props.radius
          },
          container: {
            position: "relative",
            height: "100%",
            margin: "0 3px"
          },
          pointer: {
            position: "absolute",
            left: rgb.a * 100 + "%"
          },
          slider: {
            width: "4px",
            borderRadius: "1px",
            height: "8px",
            boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
            background: "#fff",
            marginTop: "1px",
            transform: "translateX(-2px)"
          }
        },
        "vertical": {
          gradient: {
            background: "linear-gradient(to bottom, rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ", 0) 0%,\n           rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ", 1) 100%)"
          },
          pointer: {
            left: 0,
            top: rgb.a * 100 + "%"
          }
        },
        "overwrite": _extends$a({}, this.props.style)
      }, {
        vertical: this.props.direction === "vertical",
        overwrite: true
      });
      return /* @__PURE__ */ jsxs("div", {
        style: styles.alpha,
        children: [/* @__PURE__ */ jsx("div", {
          style: styles.checkboard,
          children: /* @__PURE__ */ jsx(Checkboard, {
            renderers: this.props.renderers
          })
        }), /* @__PURE__ */ jsx("div", {
          style: styles.gradient
        }), /* @__PURE__ */ jsx("div", {
          style: styles.container,
          ref: function ref(container) {
            return _this2.container = container;
          },
          onMouseDown: this.handleMouseDown,
          onTouchMove: this.handleChange,
          onTouchStart: this.handleChange,
          children: /* @__PURE__ */ jsx("div", {
            style: styles.pointer,
            children: this.props.pointer ? React.createElement(this.props.pointer, this.props) : /* @__PURE__ */ jsx("div", {
              style: styles.slider
            })
          })
        })]
      });
    }
  }]);
  return Alpha2;
}(PureComponent || Component);
var _createClass$7 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _defineProperty$5(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _classCallCheck$6(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$6(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits$6(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var DEFAULT_ARROW_OFFSET = 1;
var UP_KEY_CODE = 38;
var DOWN_KEY_CODE = 40;
var VALID_KEY_CODES = [UP_KEY_CODE, DOWN_KEY_CODE];
var isValidKeyCode = function isValidKeyCode2(keyCode) {
  return VALID_KEY_CODES.indexOf(keyCode) > -1;
};
var getNumberValue = function getNumberValue2(value) {
  return Number(String(value).replace(/%/g, ""));
};
var idCounter = 1;
var EditableInput = function(_ref) {
  _inherits$6(EditableInput2, _ref);
  function EditableInput2(props) {
    _classCallCheck$6(this, EditableInput2);
    var _this = _possibleConstructorReturn$6(this, (EditableInput2.__proto__ || Object.getPrototypeOf(EditableInput2)).call(this));
    _this.handleBlur = function() {
      if (_this.state.blurValue) {
        _this.setState({
          value: _this.state.blurValue,
          blurValue: null
        });
      }
    };
    _this.handleChange = function(e) {
      _this.setUpdatedValue(e.target.value, e);
    };
    _this.handleKeyDown = function(e) {
      var value = getNumberValue(e.target.value);
      if (!isNaN(value) && isValidKeyCode(e.keyCode)) {
        var offset2 = _this.getArrowOffset();
        var updatedValue = e.keyCode === UP_KEY_CODE ? value + offset2 : value - offset2;
        _this.setUpdatedValue(updatedValue, e);
      }
    };
    _this.handleDrag = function(e) {
      if (_this.props.dragLabel) {
        var newValue = Math.round(_this.props.value + e.movementX);
        if (newValue >= 0 && newValue <= _this.props.dragMax) {
          _this.props.onChange && _this.props.onChange(_this.getValueObjectWithLabel(newValue), e);
        }
      }
    };
    _this.handleMouseDown = function(e) {
      if (_this.props.dragLabel) {
        e.preventDefault();
        _this.handleDrag(e);
        window.addEventListener("mousemove", _this.handleDrag);
        window.addEventListener("mouseup", _this.handleMouseUp);
      }
    };
    _this.handleMouseUp = function() {
      _this.unbindEventListeners();
    };
    _this.unbindEventListeners = function() {
      window.removeEventListener("mousemove", _this.handleDrag);
      window.removeEventListener("mouseup", _this.handleMouseUp);
    };
    _this.state = {
      value: String(props.value).toUpperCase(),
      blurValue: String(props.value).toUpperCase()
    };
    _this.inputId = "rc-editable-input-" + idCounter++;
    return _this;
  }
  _createClass$7(EditableInput2, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.value !== this.state.value && (prevProps.value !== this.props.value || prevState.value !== this.state.value)) {
        if (this.input === document.activeElement) {
          this.setState({
            blurValue: String(this.props.value).toUpperCase()
          });
        } else {
          this.setState({
            value: String(this.props.value).toUpperCase(),
            blurValue: !this.state.blurValue && String(this.props.value).toUpperCase()
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: "getValueObjectWithLabel",
    value: function getValueObjectWithLabel(value) {
      return _defineProperty$5({}, this.props.label, value);
    }
  }, {
    key: "getArrowOffset",
    value: function getArrowOffset() {
      return this.props.arrowOffset || DEFAULT_ARROW_OFFSET;
    }
  }, {
    key: "setUpdatedValue",
    value: function setUpdatedValue(value, e) {
      var onChangeValue = this.props.label ? this.getValueObjectWithLabel(value) : value;
      this.props.onChange && this.props.onChange(onChangeValue, e);
      this.setState({
        value
      });
    }
  }, {
    key: "render",
    value: function render3() {
      var _this2 = this;
      var styles = _default$2({
        "default": {
          wrap: {
            position: "relative"
          }
        },
        "user-override": {
          wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
          input: this.props.style && this.props.style.input ? this.props.style.input : {},
          label: this.props.style && this.props.style.label ? this.props.style.label : {}
        },
        "dragLabel-true": {
          label: {
            cursor: "ew-resize"
          }
        }
      }, {
        "user-override": true
      }, this.props);
      return /* @__PURE__ */ jsxs("div", {
        style: styles.wrap,
        children: [/* @__PURE__ */ jsx("input", {
          id: this.inputId,
          style: styles.input,
          ref: function ref(input) {
            return _this2.input = input;
          },
          value: this.state.value,
          onKeyDown: this.handleKeyDown,
          onChange: this.handleChange,
          onBlur: this.handleBlur,
          placeholder: this.props.placeholder,
          spellCheck: "false"
        }), this.props.label && !this.props.hideLabel ? /* @__PURE__ */ jsx("label", {
          htmlFor: this.inputId,
          style: styles.label,
          onMouseDown: this.handleMouseDown,
          children: this.props.label
        }) : null]
      });
    }
  }]);
  return EditableInput2;
}(PureComponent || Component);
var calculateChange$1 = function calculateChange2(e, direction, hsl, container) {
  var containerWidth = container.clientWidth;
  var containerHeight = container.clientHeight;
  var x = typeof e.pageX === "number" ? e.pageX : e.touches[0].pageX;
  var y = typeof e.pageY === "number" ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);
  if (direction === "vertical") {
    var h = void 0;
    if (top < 0) {
      h = 359;
    } else if (top > containerHeight) {
      h = 0;
    } else {
      var percent = -(top * 100 / containerHeight) + 100;
      h = 360 * percent / 100;
    }
    if (hsl.h !== h) {
      return {
        h,
        s: hsl.s,
        l: hsl.l,
        a: hsl.a,
        source: "hsl"
      };
    }
  } else {
    var _h = void 0;
    if (left < 0) {
      _h = 0;
    } else if (left > containerWidth) {
      _h = 359;
    } else {
      var _percent = left * 100 / containerWidth;
      _h = 360 * _percent / 100;
    }
    if (hsl.h !== _h) {
      return {
        h: _h,
        s: hsl.s,
        l: hsl.l,
        a: hsl.a,
        source: "hsl"
      };
    }
  }
  return null;
};
var _createClass$6 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck$5(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$5(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits$5(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var Hue = function(_ref) {
  _inherits$5(Hue2, _ref);
  function Hue2() {
    var _ref2;
    var _temp, _this, _ret;
    _classCallCheck$5(this, Hue2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn$5(this, (_ref2 = Hue2.__proto__ || Object.getPrototypeOf(Hue2)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChange = function(e) {
      var change = calculateChange$1(e, _this.props.direction, _this.props.hsl, _this.container);
      change && typeof _this.props.onChange === "function" && _this.props.onChange(change, e);
    }, _this.handleMouseDown = function(e) {
      _this.handleChange(e);
      window.addEventListener("mousemove", _this.handleChange);
      window.addEventListener("mouseup", _this.handleMouseUp);
    }, _this.handleMouseUp = function() {
      _this.unbindEventListeners();
    }, _temp), _possibleConstructorReturn$5(_this, _ret);
  }
  _createClass$6(Hue2, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: "unbindEventListeners",
    value: function unbindEventListeners() {
      window.removeEventListener("mousemove", this.handleChange);
      window.removeEventListener("mouseup", this.handleMouseUp);
    }
  }, {
    key: "render",
    value: function render3() {
      var _this2 = this;
      var _props$direction = this.props.direction, direction = _props$direction === void 0 ? "horizontal" : _props$direction;
      var styles = _default$2({
        "default": {
          hue: {
            absolute: "0px 0px 0px 0px",
            borderRadius: this.props.radius,
            boxShadow: this.props.shadow
          },
          container: {
            padding: "0 2px",
            position: "relative",
            height: "100%",
            borderRadius: this.props.radius
          },
          pointer: {
            position: "absolute",
            left: this.props.hsl.h * 100 / 360 + "%"
          },
          slider: {
            marginTop: "1px",
            width: "4px",
            borderRadius: "1px",
            height: "8px",
            boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
            background: "#fff",
            transform: "translateX(-2px)"
          }
        },
        "vertical": {
          pointer: {
            left: "0px",
            top: -(this.props.hsl.h * 100 / 360) + 100 + "%"
          }
        }
      }, {
        vertical: direction === "vertical"
      });
      return /* @__PURE__ */ jsx("div", {
        style: styles.hue,
        children: /* @__PURE__ */ jsxs("div", {
          className: "hue-" + direction,
          style: styles.container,
          ref: function ref(container) {
            return _this2.container = container;
          },
          onMouseDown: this.handleMouseDown,
          onTouchMove: this.handleChange,
          onTouchStart: this.handleChange,
          children: [/* @__PURE__ */ jsx("style", {
            children: ".hue-horizontal { background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%); background: -webkit-linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%); } .hue-vertical { background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%); background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%); }"
          }), /* @__PURE__ */ jsx("div", {
            style: styles.pointer,
            children: this.props.pointer ? React.createElement(this.props.pointer, this.props) : /* @__PURE__ */ jsx("div", {
              style: styles.slider
            })
          })]
        })
      });
    }
  }]);
  return Hue2;
}(PureComponent || Component);
var propTypes = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error(
      "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
    );
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  propTypes.exports = factoryWithThrowingShims();
}
var PropTypes = propTypes.exports;
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function eq$1(value, other) {
  return value === other || value !== value && other !== other;
}
function assocIndexOf(array2, key) {
  var length = array2.length;
  while (length--) {
    if (eq$1(array2[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  return index < 0 ? void 0 : data[index][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
function stackGet(key) {
  return this.__data__.get(key);
}
function stackHas(key) {
  return this.__data__.has(key);
}
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
var root$1 = root;
var Symbol$1 = root$1.Symbol;
var Symbol$2 = Symbol$1;
var objectProto$e = Object.prototype;
var hasOwnProperty$b = objectProto$e.hasOwnProperty;
var nativeObjectToString$1 = objectProto$e.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$b.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$d = Object.prototype;
var nativeObjectToString = objectProto$d.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObject$2(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$1(value) {
  if (!isObject$2(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root$1["__core-js_shared__"];
var coreJsData$1 = coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype, objectProto$c = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$a = objectProto$c.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString$1.call(hasOwnProperty$a).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject$2(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function getValue(object2, key) {
  return object2 == null ? void 0 : object2[key];
}
function getNative(object2, key) {
  var value = getValue(object2, key);
  return baseIsNative(value) ? value : void 0;
}
var Map$1 = getNative(root$1, "Map");
var Map$2 = Map$1;
var nativeCreate = getNative(Object, "create");
var nativeCreate$1 = nativeCreate;
function hashClear() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
  this.size = 0;
}
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$b = Object.prototype;
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate$1) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$9.call(data, key) ? data[key] : void 0;
}
var objectProto$a = Object.prototype;
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$8.call(data, key);
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate$1 && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$2 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map3, key) {
  var data = map3.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function mapCacheDelete(key) {
  var result = getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
var defineProperty$1 = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var defineProperty$2 = defineProperty$1;
function baseAssignValue(object2, key, value) {
  if (key == "__proto__" && defineProperty$2) {
    defineProperty$2(object2, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object2[key] = value;
  }
}
function assignMergeValue(object2, key, value) {
  if (value !== void 0 && !eq$1(object2[key], value) || value === void 0 && !(key in object2)) {
    baseAssignValue(object2, key, value);
  }
}
function createBaseFor(fromRight) {
  return function(object2, iteratee, keysFunc) {
    var index = -1, iterable = Object(object2), props = keysFunc(object2), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object2;
  };
}
var baseFor = createBaseFor();
var baseFor$1 = baseFor;
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
var Buffer$1 = moduleExports$2 ? root$1.Buffer : void 0, allocUnsafe = Buffer$1 ? Buffer$1.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
var Uint8Array = root$1.Uint8Array;
var Uint8Array$1 = Uint8Array;
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
  return result;
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
function copyArray(source, array2) {
  var index = -1, length = source.length;
  array2 || (array2 = Array(length));
  while (++index < length) {
    array2[index] = source[index];
  }
  return array2;
}
var objectCreate = Object.create;
var baseCreate = function() {
  function object2() {
  }
  return function(proto2) {
    if (!isObject$2(proto2)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto2);
    }
    object2.prototype = proto2;
    var result = new object2();
    object2.prototype = void 0;
    return result;
  };
}();
var baseCreate$1 = baseCreate;
function overArg(func, transform2) {
  return function(arg) {
    return func(transform2(arg));
  };
}
var getPrototype = overArg(Object.getPrototypeOf, Object);
var getPrototype$1 = getPrototype;
var objectProto$9 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto2 = typeof Ctor == "function" && Ctor.prototype || objectProto$9;
  return value === proto2;
}
function initCloneObject(object2) {
  return typeof object2.constructor == "function" && !isPrototype(object2) ? baseCreate$1(getPrototype$1(object2)) : {};
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var argsTag$2 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$2;
}
var objectProto$8 = Object.prototype;
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$8.propertyIsEnumerable;
var isArguments = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$7.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments$1 = isArguments;
var isArray = Array.isArray;
var isArray$1 = isArray;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction$1(value);
}
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
function stubFalse() {
  return false;
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var Buffer = moduleExports$1 ? root$1.Buffer : void 0;
var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
var isBuffer$1 = isBuffer;
var objectTag$3 = "[object Object]";
var funcProto = Function.prototype, objectProto$7 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject$2(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag$3) {
    return false;
  }
  var proto2 = getPrototype$1(value);
  if (proto2 === null) {
    return true;
  }
  var Ctor = hasOwnProperty$6.call(proto2, "constructor") && proto2.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", objectTag$2 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", weakMapTag$1 = "[object WeakMap]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] = typedArrayTags[dataViewTag$2] = typedArrayTags[dateTag$1] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag] = typedArrayTags[mapTag$2] = typedArrayTags[numberTag$1] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$1] = typedArrayTags[setTag$2] = typedArrayTags[stringTag$1] = typedArrayTags[weakMapTag$1] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var freeProcess = moduleExports && freeGlobal$1.process;
var nodeUtil = function() {
  try {
    var types = freeModule && freeModule.require && freeModule.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
}();
var nodeUtil$1 = nodeUtil;
var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray$1 = isTypedArray;
function safeGet(object2, key) {
  if (key === "constructor" && typeof object2[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object2[key];
}
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
function assignValue(object2, key, value) {
  var objValue = object2[key];
  if (!(hasOwnProperty$5.call(object2, key) && eq$1(objValue, value)) || value === void 0 && !(key in object2)) {
    baseAssignValue(object2, key, value);
  }
}
function copyObject(source, props, object2, customizer) {
  var isNew = !object2;
  object2 || (object2 = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object2[key], source[key], key, object2, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object2, key, newValue);
    } else {
      assignValue(object2, key, newValue);
    }
  }
  return object2;
}
function baseTimes(n2, iteratee) {
  var index = -1, result = Array(n2);
  while (++index < n2) {
    result[index] = iteratee(index);
  }
  return result;
}
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray$1(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$4.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
function nativeKeysIn(object2) {
  var result = [];
  if (object2 != null) {
    for (var key in Object(object2)) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
function baseKeysIn(object2) {
  if (!isObject$2(object2)) {
    return nativeKeysIn(object2);
  }
  var isProto = isPrototype(object2), result = [];
  for (var key in object2) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$3.call(object2, key)))) {
      result.push(key);
    }
  }
  return result;
}
function keysIn(object2) {
  return isArrayLike(object2) ? arrayLikeKeys(object2, true) : baseKeysIn(object2);
}
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}
function baseMergeDeep(object2, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object2, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue(object2, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object2, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray$1(srcValue), isBuff = !isArr && isBuffer$1(srcValue), isTyped = !isArr && !isBuff && isTypedArray$1(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray$1(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject$2(srcValue) || isArguments$1(srcValue)) {
      newValue = objValue;
      if (isArguments$1(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject$2(objValue) || isFunction$1(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue(object2, key, newValue);
}
function baseMerge(object2, source, srcIndex, customizer, stack) {
  if (object2 === source) {
    return;
  }
  baseFor$1(source, function(srcValue, key) {
    stack || (stack = new Stack());
    if (isObject$2(srcValue)) {
      baseMergeDeep(object2, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object2, key), srcValue, key + "", object2, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue(object2, key, newValue);
    }
  }, keysIn);
}
function identity(value) {
  return value;
}
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var nativeMax$1 = Math.max;
function overRest(func, start, transform2) {
  start = nativeMax$1(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax$1(args.length - start, 0), array2 = Array(length);
    while (++index < length) {
      array2[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform2(array2);
    return apply(func, this, otherArgs);
  };
}
function constant(value) {
  return function() {
    return value;
  };
}
var baseSetToString = !defineProperty$2 ? identity : function(func, string) {
  return defineProperty$2(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var baseSetToString$1 = baseSetToString;
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var setToString = shortOut(baseSetToString$1);
var setToString$1 = setToString;
function baseRest(func, start) {
  return setToString$1(overRest(func, start, identity), func + "");
}
function isIterateeCall(value, index, object2) {
  if (!isObject$2(object2)) {
    return false;
  }
  var type = typeof index;
  if (type == "number" ? isArrayLike(object2) && isIndex(index, object2.length) : type == "string" && index in object2) {
    return eq$1(object2[index], value);
  }
  return false;
}
function createAssigner(assigner) {
  return baseRest(function(object2, sources) {
    var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object2 = Object(object2);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object2, source, index, customizer);
      }
    }
    return object2;
  });
}
var merge = createAssigner(function(object2, source, srcIndex) {
  baseMerge(object2, source, srcIndex);
});
var merge$1 = merge;
var Raised = function Raised2(_ref) {
  var zDepth = _ref.zDepth, radius = _ref.radius, background = _ref.background, children = _ref.children, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles;
  var styles = _default$2(merge$1({
    "default": {
      wrap: {
        position: "relative",
        display: "inline-block"
      },
      content: {
        position: "relative"
      },
      bg: {
        absolute: "0px 0px 0px 0px",
        boxShadow: "0 " + zDepth + "px " + zDepth * 4 + "px rgba(0,0,0,.24)",
        borderRadius: radius,
        background
      }
    },
    "zDepth-0": {
      bg: {
        boxShadow: "none"
      }
    },
    "zDepth-1": {
      bg: {
        boxShadow: "0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)"
      }
    },
    "zDepth-2": {
      bg: {
        boxShadow: "0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)"
      }
    },
    "zDepth-3": {
      bg: {
        boxShadow: "0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)"
      }
    },
    "zDepth-4": {
      bg: {
        boxShadow: "0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)"
      }
    },
    "zDepth-5": {
      bg: {
        boxShadow: "0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)"
      }
    },
    "square": {
      bg: {
        borderRadius: "0"
      }
    },
    "circle": {
      bg: {
        borderRadius: "50%"
      }
    }
  }, passedStyles), { "zDepth-1": zDepth === 1 });
  return React.createElement(
    "div",
    { style: styles.wrap },
    React.createElement("div", { style: styles.bg }),
    React.createElement(
      "div",
      { style: styles.content },
      children
    )
  );
};
Raised.propTypes = {
  background: PropTypes.string,
  zDepth: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  radius: PropTypes.number,
  styles: PropTypes.object
};
Raised.defaultProps = {
  background: "#fff",
  zDepth: 1,
  radius: 2,
  styles: {}
};
var now = function() {
  return root$1.Date.now();
};
var now$1 = now;
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
var symbolTag$1 = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag$1;
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject$2(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$2(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var FUNC_ERROR_TEXT$2 = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  wait = toNumber(wait) || 0;
  if (isObject$2(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now$1());
  }
  function debounced() {
    var time = now$1(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var FUNC_ERROR_TEXT$1 = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  if (isObject$2(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
var calculateChange3 = function calculateChange4(e, hsl, container) {
  var _container$getBoundin = container.getBoundingClientRect(), containerWidth = _container$getBoundin.width, containerHeight = _container$getBoundin.height;
  var x = typeof e.pageX === "number" ? e.pageX : e.touches[0].pageX;
  var y = typeof e.pageY === "number" ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);
  if (left < 0) {
    left = 0;
  } else if (left > containerWidth) {
    left = containerWidth;
  }
  if (top < 0) {
    top = 0;
  } else if (top > containerHeight) {
    top = containerHeight;
  }
  var saturation = left / containerWidth;
  var bright = 1 - top / containerHeight;
  return {
    h: hsl.h,
    s: saturation,
    v: bright,
    a: hsl.a,
    source: "hsv"
  };
};
var _createClass$5 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck$4(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$4(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits$4(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var Saturation = function(_ref) {
  _inherits$4(Saturation2, _ref);
  function Saturation2(props) {
    _classCallCheck$4(this, Saturation2);
    var _this = _possibleConstructorReturn$4(this, (Saturation2.__proto__ || Object.getPrototypeOf(Saturation2)).call(this, props));
    _this.handleChange = function(e) {
      typeof _this.props.onChange === "function" && _this.throttle(_this.props.onChange, calculateChange3(e, _this.props.hsl, _this.container), e);
    };
    _this.handleMouseDown = function(e) {
      _this.handleChange(e);
      var renderWindow = _this.getContainerRenderWindow();
      renderWindow.addEventListener("mousemove", _this.handleChange);
      renderWindow.addEventListener("mouseup", _this.handleMouseUp);
    };
    _this.handleMouseUp = function() {
      _this.unbindEventListeners();
    };
    _this.throttle = throttle(function(fn, data, e) {
      fn(data, e);
    }, 50);
    return _this;
  }
  _createClass$5(Saturation2, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.throttle.cancel();
      this.unbindEventListeners();
    }
  }, {
    key: "getContainerRenderWindow",
    value: function getContainerRenderWindow() {
      var container = this.container;
      var renderWindow = window;
      while (!renderWindow.document.contains(container) && renderWindow.parent !== renderWindow) {
        renderWindow = renderWindow.parent;
      }
      return renderWindow;
    }
  }, {
    key: "unbindEventListeners",
    value: function unbindEventListeners() {
      var renderWindow = this.getContainerRenderWindow();
      renderWindow.removeEventListener("mousemove", this.handleChange);
      renderWindow.removeEventListener("mouseup", this.handleMouseUp);
    }
  }, {
    key: "render",
    value: function render3() {
      var _this2 = this;
      var _ref2 = this.props.style || {}, color = _ref2.color, white = _ref2.white, black = _ref2.black, pointer = _ref2.pointer, circle = _ref2.circle;
      var styles = _default$2({
        "default": {
          color: {
            absolute: "0px 0px 0px 0px",
            background: "hsl(" + this.props.hsl.h + ",100%, 50%)",
            borderRadius: this.props.radius
          },
          white: {
            absolute: "0px 0px 0px 0px",
            borderRadius: this.props.radius
          },
          black: {
            absolute: "0px 0px 0px 0px",
            boxShadow: this.props.shadow,
            borderRadius: this.props.radius
          },
          pointer: {
            position: "absolute",
            top: -(this.props.hsv.v * 100) + 100 + "%",
            left: this.props.hsv.s * 100 + "%",
            cursor: "default"
          },
          circle: {
            width: "4px",
            height: "4px",
            boxShadow: "0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)",
            borderRadius: "50%",
            cursor: "hand",
            transform: "translate(-2px, -2px)"
          }
        },
        "custom": {
          color,
          white,
          black,
          pointer,
          circle
        }
      }, {
        "custom": !!this.props.style
      });
      return /* @__PURE__ */ jsxs("div", {
        style: styles.color,
        ref: function ref(container) {
          return _this2.container = container;
        },
        onMouseDown: this.handleMouseDown,
        onTouchMove: this.handleChange,
        onTouchStart: this.handleChange,
        children: [/* @__PURE__ */ jsx("style", {
          children: ".saturation-white { background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0)); background: linear-gradient(to right, #fff, rgba(255,255,255,0)); } .saturation-black { background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0)); background: linear-gradient(to top, #000, rgba(0,0,0,0)); }"
        }), /* @__PURE__ */ jsxs("div", {
          style: styles.white,
          className: "saturation-white",
          children: [/* @__PURE__ */ jsx("div", {
            style: styles.black,
            className: "saturation-black"
          }), /* @__PURE__ */ jsx("div", {
            style: styles.pointer,
            children: this.props.pointer ? React.createElement(this.props.pointer, this.props) : /* @__PURE__ */ jsx("div", {
              style: styles.circle
            })
          })]
        })]
      });
    }
  }]);
  return Saturation2;
}(PureComponent || Component);
function arrayEach(array2, iteratee) {
  var index = -1, length = array2 == null ? 0 : array2.length;
  while (++index < length) {
    if (iteratee(array2[index], index, array2) === false) {
      break;
    }
  }
  return array2;
}
var nativeKeys = overArg(Object.keys, Object);
var nativeKeys$1 = nativeKeys;
var objectProto$3 = Object.prototype;
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
function baseKeys(object2) {
  if (!isPrototype(object2)) {
    return nativeKeys$1(object2);
  }
  var result = [];
  for (var key in Object(object2)) {
    if (hasOwnProperty$2.call(object2, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
function keys(object2) {
  return isArrayLike(object2) ? arrayLikeKeys(object2) : baseKeys(object2);
}
function baseForOwn(object2, iteratee) {
  return object2 && baseFor$1(object2, iteratee, keys);
}
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
var baseEach = createBaseEach(baseForOwn);
var baseEach$1 = baseEach;
function castFunction(value) {
  return typeof value == "function" ? value : identity;
}
function forEach(collection, iteratee) {
  var func = isArray$1(collection) ? arrayEach : baseEach$1;
  return func(collection, castFunction(iteratee));
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
var trimLeft = /^\s+/;
var trimRight = /\s+$/;
function tinycolor(color, opts) {
  color = color ? color : "";
  opts = opts || {};
  if (color instanceof tinycolor) {
    return color;
  }
  if (!(this instanceof tinycolor)) {
    return new tinycolor(color, opts);
  }
  var rgb = inputToRGB(color);
  this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = Math.round(100 * this._a) / 100, this._format = opts.format || rgb.format;
  this._gradientType = opts.gradientType;
  if (this._r < 1)
    this._r = Math.round(this._r);
  if (this._g < 1)
    this._g = Math.round(this._g);
  if (this._b < 1)
    this._b = Math.round(this._b);
  this._ok = rgb.ok;
}
tinycolor.prototype = {
  isDark: function isDark() {
    return this.getBrightness() < 128;
  },
  isLight: function isLight() {
    return !this.isDark();
  },
  isValid: function isValid2() {
    return this._ok;
  },
  getOriginalInput: function getOriginalInput() {
    return this._originalInput;
  },
  getFormat: function getFormat() {
    return this._format;
  },
  getAlpha: function getAlpha() {
    return this._a;
  },
  getBrightness: function getBrightness() {
    var rgb = this.toRgb();
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
  },
  getLuminance: function getLuminance() {
    var rgb = this.toRgb();
    var RsRGB, GsRGB, BsRGB, R, G, B;
    RsRGB = rgb.r / 255;
    GsRGB = rgb.g / 255;
    BsRGB = rgb.b / 255;
    if (RsRGB <= 0.03928)
      R = RsRGB / 12.92;
    else
      R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    if (GsRGB <= 0.03928)
      G = GsRGB / 12.92;
    else
      G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    if (BsRGB <= 0.03928)
      B = BsRGB / 12.92;
    else
      B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  },
  setAlpha: function setAlpha(value) {
    this._a = boundAlpha(value);
    this._roundA = Math.round(100 * this._a) / 100;
    return this;
  },
  toHsv: function toHsv() {
    var hsv = rgbToHsv(this._r, this._g, this._b);
    return {
      h: hsv.h * 360,
      s: hsv.s,
      v: hsv.v,
      a: this._a
    };
  },
  toHsvString: function toHsvString() {
    var hsv = rgbToHsv(this._r, this._g, this._b);
    var h = Math.round(hsv.h * 360), s = Math.round(hsv.s * 100), v = Math.round(hsv.v * 100);
    return this._a == 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this._roundA + ")";
  },
  toHsl: function toHsl() {
    var hsl = rgbToHsl(this._r, this._g, this._b);
    return {
      h: hsl.h * 360,
      s: hsl.s,
      l: hsl.l,
      a: this._a
    };
  },
  toHslString: function toHslString() {
    var hsl = rgbToHsl(this._r, this._g, this._b);
    var h = Math.round(hsl.h * 360), s = Math.round(hsl.s * 100), l2 = Math.round(hsl.l * 100);
    return this._a == 1 ? "hsl(" + h + ", " + s + "%, " + l2 + "%)" : "hsla(" + h + ", " + s + "%, " + l2 + "%, " + this._roundA + ")";
  },
  toHex: function toHex(allow3Char) {
    return rgbToHex(this._r, this._g, this._b, allow3Char);
  },
  toHexString: function toHexString(allow3Char) {
    return "#" + this.toHex(allow3Char);
  },
  toHex8: function toHex8(allow4Char) {
    return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
  },
  toHex8String: function toHex8String(allow4Char) {
    return "#" + this.toHex8(allow4Char);
  },
  toRgb: function toRgb() {
    return {
      r: Math.round(this._r),
      g: Math.round(this._g),
      b: Math.round(this._b),
      a: this._a
    };
  },
  toRgbString: function toRgbString() {
    return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
  },
  toPercentageRgb: function toPercentageRgb() {
    return {
      r: Math.round(bound01(this._r, 255) * 100) + "%",
      g: Math.round(bound01(this._g, 255) * 100) + "%",
      b: Math.round(bound01(this._b, 255) * 100) + "%",
      a: this._a
    };
  },
  toPercentageRgbString: function toPercentageRgbString() {
    return this._a == 1 ? "rgb(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
  },
  toName: function toName() {
    if (this._a === 0) {
      return "transparent";
    }
    if (this._a < 1) {
      return false;
    }
    return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
  },
  toFilter: function toFilter(secondColor) {
    var hex8String = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a);
    var secondHex8String = hex8String;
    var gradientType = this._gradientType ? "GradientType = 1, " : "";
    if (secondColor) {
      var s = tinycolor(secondColor);
      secondHex8String = "#" + rgbaToArgbHex(s._r, s._g, s._b, s._a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
  },
  toString: function toString(format2) {
    var formatSet = !!format2;
    format2 = format2 || this._format;
    var formattedString = false;
    var hasAlpha = this._a < 1 && this._a >= 0;
    var needsAlphaFormat = !formatSet && hasAlpha && (format2 === "hex" || format2 === "hex6" || format2 === "hex3" || format2 === "hex4" || format2 === "hex8" || format2 === "name");
    if (needsAlphaFormat) {
      if (format2 === "name" && this._a === 0) {
        return this.toName();
      }
      return this.toRgbString();
    }
    if (format2 === "rgb") {
      formattedString = this.toRgbString();
    }
    if (format2 === "prgb") {
      formattedString = this.toPercentageRgbString();
    }
    if (format2 === "hex" || format2 === "hex6") {
      formattedString = this.toHexString();
    }
    if (format2 === "hex3") {
      formattedString = this.toHexString(true);
    }
    if (format2 === "hex4") {
      formattedString = this.toHex8String(true);
    }
    if (format2 === "hex8") {
      formattedString = this.toHex8String();
    }
    if (format2 === "name") {
      formattedString = this.toName();
    }
    if (format2 === "hsl") {
      formattedString = this.toHslString();
    }
    if (format2 === "hsv") {
      formattedString = this.toHsvString();
    }
    return formattedString || this.toHexString();
  },
  clone: function clone2() {
    return tinycolor(this.toString());
  },
  _applyModification: function _applyModification(fn, args) {
    var color = fn.apply(null, [this].concat([].slice.call(args)));
    this._r = color._r;
    this._g = color._g;
    this._b = color._b;
    this.setAlpha(color._a);
    return this;
  },
  lighten: function lighten() {
    return this._applyModification(_lighten, arguments);
  },
  brighten: function brighten() {
    return this._applyModification(_brighten, arguments);
  },
  darken: function darken() {
    return this._applyModification(_darken, arguments);
  },
  desaturate: function desaturate() {
    return this._applyModification(_desaturate, arguments);
  },
  saturate: function saturate() {
    return this._applyModification(_saturate, arguments);
  },
  greyscale: function greyscale() {
    return this._applyModification(_greyscale, arguments);
  },
  spin: function spin() {
    return this._applyModification(_spin, arguments);
  },
  _applyCombination: function _applyCombination(fn, args) {
    return fn.apply(null, [this].concat([].slice.call(args)));
  },
  analogous: function analogous() {
    return this._applyCombination(_analogous, arguments);
  },
  complement: function complement() {
    return this._applyCombination(_complement, arguments);
  },
  monochromatic: function monochromatic() {
    return this._applyCombination(_monochromatic, arguments);
  },
  splitcomplement: function splitcomplement() {
    return this._applyCombination(_splitcomplement, arguments);
  },
  triad: function triad() {
    return this._applyCombination(polyad, [3]);
  },
  tetrad: function tetrad() {
    return this._applyCombination(polyad, [4]);
  }
};
tinycolor.fromRatio = function(color, opts) {
  if (_typeof(color) == "object") {
    var newColor = {};
    for (var i in color) {
      if (color.hasOwnProperty(i)) {
        if (i === "a") {
          newColor[i] = color[i];
        } else {
          newColor[i] = convertToPercentage(color[i]);
        }
      }
    }
    color = newColor;
  }
  return tinycolor(color, opts);
};
function inputToRGB(color) {
  var rgb = {
    r: 0,
    g: 0,
    b: 0
  };
  var a = 1;
  var s = null;
  var v = null;
  var l2 = null;
  var ok = false;
  var format2 = false;
  if (typeof color == "string") {
    color = stringInputToObject(color);
  }
  if (_typeof(color) == "object") {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format2 = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s = convertToPercentage(color.s);
      v = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s, v);
      ok = true;
      format2 = "hsv";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s = convertToPercentage(color.s);
      l2 = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s, l2);
      ok = true;
      format2 = "hsl";
    }
    if (color.hasOwnProperty("a")) {
      a = color.a;
    }
  }
  a = boundAlpha(a);
  return {
    ok,
    format: color.format || format2,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a
  };
}
function rgbToRgb(r, g, b) {
  return {
    r: bound01(r, 255) * 255,
    g: bound01(g, 255) * 255,
    b: bound01(b, 255) * 255
  };
}
function rgbToHsl(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max2 = Math.max(r, g, b), min2 = Math.min(r, g, b);
  var h, s, l2 = (max2 + min2) / 2;
  if (max2 == min2) {
    h = s = 0;
  } else {
    var d = max2 - min2;
    s = l2 > 0.5 ? d / (2 - max2 - min2) : d / (max2 + min2);
    switch (max2) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return {
    h,
    s,
    l: l2
  };
}
function hslToRgb(h, s, l2) {
  var r, g, b;
  h = bound01(h, 360);
  s = bound01(s, 100);
  l2 = bound01(l2, 100);
  function hue2rgb(p3, q3, t) {
    if (t < 0)
      t += 1;
    if (t > 1)
      t -= 1;
    if (t < 1 / 6)
      return p3 + (q3 - p3) * 6 * t;
    if (t < 1 / 2)
      return q3;
    if (t < 2 / 3)
      return p3 + (q3 - p3) * (2 / 3 - t) * 6;
    return p3;
  }
  if (s === 0) {
    r = g = b = l2;
  } else {
    var q2 = l2 < 0.5 ? l2 * (1 + s) : l2 + s - l2 * s;
    var p2 = 2 * l2 - q2;
    r = hue2rgb(p2, q2, h + 1 / 3);
    g = hue2rgb(p2, q2, h);
    b = hue2rgb(p2, q2, h - 1 / 3);
  }
  return {
    r: r * 255,
    g: g * 255,
    b: b * 255
  };
}
function rgbToHsv(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max2 = Math.max(r, g, b), min2 = Math.min(r, g, b);
  var h, s, v = max2;
  var d = max2 - min2;
  s = max2 === 0 ? 0 : d / max2;
  if (max2 == min2) {
    h = 0;
  } else {
    switch (max2) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return {
    h,
    s,
    v
  };
}
function hsvToRgb(h, s, v) {
  h = bound01(h, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);
  var i = Math.floor(h), f2 = h - i, p2 = v * (1 - s), q2 = v * (1 - f2 * s), t = v * (1 - (1 - f2) * s), mod2 = i % 6, r = [v, q2, p2, p2, t, v][mod2], g = [t, v, v, q2, p2, p2][mod2], b = [p2, p2, t, v, v, q2][mod2];
  return {
    r: r * 255,
    g: g * 255,
    b: b * 255
  };
}
function rgbToHex(r, g, b, allow3Char) {
  var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];
  if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}
function rgbaToHex(r, g, b, a, allow4Char) {
  var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16)), pad2(convertDecimalToHex(a))];
  if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
  }
  return hex.join("");
}
function rgbaToArgbHex(r, g, b, a) {
  var hex = [pad2(convertDecimalToHex(a)), pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];
  return hex.join("");
}
tinycolor.equals = function(color1, color2) {
  if (!color1 || !color2)
    return false;
  return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};
tinycolor.random = function() {
  return tinycolor.fromRatio({
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  });
};
function _desaturate(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color).toHsl();
  hsl.s -= amount / 100;
  hsl.s = clamp01(hsl.s);
  return tinycolor(hsl);
}
function _saturate(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color).toHsl();
  hsl.s += amount / 100;
  hsl.s = clamp01(hsl.s);
  return tinycolor(hsl);
}
function _greyscale(color) {
  return tinycolor(color).desaturate(100);
}
function _lighten(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color).toHsl();
  hsl.l += amount / 100;
  hsl.l = clamp01(hsl.l);
  return tinycolor(hsl);
}
function _brighten(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var rgb = tinycolor(color).toRgb();
  rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
  rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
  rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
  return tinycolor(rgb);
}
function _darken(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color).toHsl();
  hsl.l -= amount / 100;
  hsl.l = clamp01(hsl.l);
  return tinycolor(hsl);
}
function _spin(color, amount) {
  var hsl = tinycolor(color).toHsl();
  var hue = (hsl.h + amount) % 360;
  hsl.h = hue < 0 ? 360 + hue : hue;
  return tinycolor(hsl);
}
function _complement(color) {
  var hsl = tinycolor(color).toHsl();
  hsl.h = (hsl.h + 180) % 360;
  return tinycolor(hsl);
}
function polyad(color, number) {
  if (isNaN(number) || number <= 0) {
    throw new Error("Argument to polyad must be a positive number");
  }
  var hsl = tinycolor(color).toHsl();
  var result = [tinycolor(color)];
  var step = 360 / number;
  for (var i = 1; i < number; i++) {
    result.push(tinycolor({
      h: (hsl.h + i * step) % 360,
      s: hsl.s,
      l: hsl.l
    }));
  }
  return result;
}
function _splitcomplement(color) {
  var hsl = tinycolor(color).toHsl();
  var h = hsl.h;
  return [tinycolor(color), tinycolor({
    h: (h + 72) % 360,
    s: hsl.s,
    l: hsl.l
  }), tinycolor({
    h: (h + 216) % 360,
    s: hsl.s,
    l: hsl.l
  })];
}
function _analogous(color, results, slices) {
  results = results || 6;
  slices = slices || 30;
  var hsl = tinycolor(color).toHsl();
  var part = 360 / slices;
  var ret = [tinycolor(color)];
  for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
    hsl.h = (hsl.h + part) % 360;
    ret.push(tinycolor(hsl));
  }
  return ret;
}
function _monochromatic(color, results) {
  results = results || 6;
  var hsv = tinycolor(color).toHsv();
  var h = hsv.h, s = hsv.s, v = hsv.v;
  var ret = [];
  var modification = 1 / results;
  while (results--) {
    ret.push(tinycolor({
      h,
      s,
      v
    }));
    v = (v + modification) % 1;
  }
  return ret;
}
tinycolor.mix = function(color1, color2, amount) {
  amount = amount === 0 ? 0 : amount || 50;
  var rgb1 = tinycolor(color1).toRgb();
  var rgb2 = tinycolor(color2).toRgb();
  var p2 = amount / 100;
  var rgba = {
    r: (rgb2.r - rgb1.r) * p2 + rgb1.r,
    g: (rgb2.g - rgb1.g) * p2 + rgb1.g,
    b: (rgb2.b - rgb1.b) * p2 + rgb1.b,
    a: (rgb2.a - rgb1.a) * p2 + rgb1.a
  };
  return tinycolor(rgba);
};
tinycolor.readability = function(color1, color2) {
  var c1 = tinycolor(color1);
  var c2 = tinycolor(color2);
  return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
};
tinycolor.isReadable = function(color1, color2, wcag2) {
  var readability = tinycolor.readability(color1, color2);
  var wcag2Parms, out;
  out = false;
  wcag2Parms = validateWCAG2Parms(wcag2);
  switch (wcag2Parms.level + wcag2Parms.size) {
    case "AAsmall":
    case "AAAlarge":
      out = readability >= 4.5;
      break;
    case "AAlarge":
      out = readability >= 3;
      break;
    case "AAAsmall":
      out = readability >= 7;
      break;
  }
  return out;
};
tinycolor.mostReadable = function(baseColor, colorList, args) {
  var bestColor = null;
  var bestScore = 0;
  var readability;
  var includeFallbackColors, level, size;
  args = args || {};
  includeFallbackColors = args.includeFallbackColors;
  level = args.level;
  size = args.size;
  for (var i = 0; i < colorList.length; i++) {
    readability = tinycolor.readability(baseColor, colorList[i]);
    if (readability > bestScore) {
      bestScore = readability;
      bestColor = tinycolor(colorList[i]);
    }
  }
  if (tinycolor.isReadable(baseColor, bestColor, {
    level,
    size
  }) || !includeFallbackColors) {
    return bestColor;
  } else {
    args.includeFallbackColors = false;
    return tinycolor.mostReadable(baseColor, ["#fff", "#000"], args);
  }
};
var names = tinycolor.names = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
var hexNames = tinycolor.hexNames = flip(names);
function flip(o) {
  var flipped = {};
  for (var i in o) {
    if (o.hasOwnProperty(i)) {
      flipped[o[i]] = i;
    }
  }
  return flipped;
}
function boundAlpha(a) {
  a = parseFloat(a);
  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }
  return a;
}
function bound01(n2, max2) {
  if (isOnePointZero(n2))
    n2 = "100%";
  var processPercent = isPercentage(n2);
  n2 = Math.min(max2, Math.max(0, parseFloat(n2)));
  if (processPercent) {
    n2 = parseInt(n2 * max2, 10) / 100;
  }
  if (Math.abs(n2 - max2) < 1e-6) {
    return 1;
  }
  return n2 % max2 / parseFloat(max2);
}
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function isOnePointZero(n2) {
  return typeof n2 == "string" && n2.indexOf(".") != -1 && parseFloat(n2) === 1;
}
function isPercentage(n2) {
  return typeof n2 === "string" && n2.indexOf("%") != -1;
}
function pad2(c) {
  return c.length == 1 ? "0" + c : "" + c;
}
function convertToPercentage(n2) {
  if (n2 <= 1) {
    n2 = n2 * 100 + "%";
  }
  return n2;
}
function convertDecimalToHex(d) {
  return Math.round(parseFloat(d) * 255).toString(16);
}
function convertHexToDecimal(h) {
  return parseIntFromHex(h) / 255;
}
var matchers = function() {
  var CSS_INTEGER = "[-\\+]?\\d+%?";
  var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
  var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
  var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
  var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
  return {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
    rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
    hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
    hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
    hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
    hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
}();
function isValidCSSUnit(color) {
  return !!matchers.CSS_UNIT.exec(color);
}
function stringInputToObject(color) {
  color = color.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color == "transparent") {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: "name"
    };
  }
  var match;
  if (match = matchers.rgb.exec(color)) {
    return {
      r: match[1],
      g: match[2],
      b: match[3]
    };
  }
  if (match = matchers.rgba.exec(color)) {
    return {
      r: match[1],
      g: match[2],
      b: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hsl.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      l: match[3]
    };
  }
  if (match = matchers.hsla.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      l: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hsv.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      v: match[3]
    };
  }
  if (match = matchers.hsva.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      v: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hex8.exec(color)) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8"
    };
  }
  if (match = matchers.hex6.exec(color)) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }
  if (match = matchers.hex4.exec(color)) {
    return {
      r: parseIntFromHex(match[1] + "" + match[1]),
      g: parseIntFromHex(match[2] + "" + match[2]),
      b: parseIntFromHex(match[3] + "" + match[3]),
      a: convertHexToDecimal(match[4] + "" + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  if (match = matchers.hex3.exec(color)) {
    return {
      r: parseIntFromHex(match[1] + "" + match[1]),
      g: parseIntFromHex(match[2] + "" + match[2]),
      b: parseIntFromHex(match[3] + "" + match[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function validateWCAG2Parms(parms) {
  var level, size;
  parms = parms || {
    level: "AA",
    size: "small"
  };
  level = (parms.level || "AA").toUpperCase();
  size = (parms.size || "small").toLowerCase();
  if (level !== "AA" && level !== "AAA") {
    level = "AA";
  }
  if (size !== "small" && size !== "large") {
    size = "small";
  }
  return {
    level,
    size
  };
}
var simpleCheckForValidColor = function simpleCheckForValidColor2(data) {
  var keysToCheck = ["r", "g", "b", "a", "h", "s", "l", "v"];
  var checked = 0;
  var passed = 0;
  forEach(keysToCheck, function(letter) {
    if (data[letter]) {
      checked += 1;
      if (!isNaN(data[letter])) {
        passed += 1;
      }
      if (letter === "s" || letter === "l") {
        var percentPatt = /^\d+%$/;
        if (percentPatt.test(data[letter])) {
          passed += 1;
        }
      }
    }
  });
  return checked === passed ? data : false;
};
var toState = function toState2(data, oldHue) {
  var color = data.hex ? tinycolor(data.hex) : tinycolor(data);
  var hsl = color.toHsl();
  var hsv = color.toHsv();
  var rgb = color.toRgb();
  var hex = color.toHex();
  if (hsl.s === 0) {
    hsl.h = oldHue || 0;
    hsv.h = oldHue || 0;
  }
  var transparent = hex === "000000" && rgb.a === 0;
  return {
    hsl,
    hex: transparent ? "transparent" : "#" + hex,
    rgb,
    hsv,
    oldHue: data.h || oldHue || hsl.h,
    source: data.source
  };
};
var isValidHex = function isValidHex2(hex) {
  if (hex === "transparent") {
    return true;
  }
  var lh = String(hex).charAt(0) === "#" ? 1 : 0;
  return hex.length !== 4 + lh && hex.length < 7 + lh && tinycolor(hex).isValid();
};
var getContrastingColor = function getContrastingColor2(data) {
  if (!data) {
    return "#fff";
  }
  var col = toState(data);
  if (col.hex === "transparent") {
    return "rgba(0,0,0,0.4)";
  }
  var yiq = (col.rgb.r * 299 + col.rgb.g * 587 + col.rgb.b * 114) / 1e3;
  return yiq >= 128 ? "#000" : "#fff";
};
var isvalidColorString = function isvalidColorString2(string, type) {
  var stringWithoutDegree = string.replace("\xB0", "");
  return tinycolor(type + " (" + stringWithoutDegree + ")")._ok;
};
var _extends$9 = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _createClass$4 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck$3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$3(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits$3(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var ColorWrap = function ColorWrap2(Picker) {
  var ColorPicker3 = function(_ref) {
    _inherits$3(ColorPicker4, _ref);
    function ColorPicker4(props) {
      _classCallCheck$3(this, ColorPicker4);
      var _this = _possibleConstructorReturn$3(this, (ColorPicker4.__proto__ || Object.getPrototypeOf(ColorPicker4)).call(this));
      _this.handleChange = function(data, event) {
        var isValidColor = simpleCheckForValidColor(data);
        if (isValidColor) {
          var colors = toState(data, data.h || _this.state.oldHue);
          _this.setState(colors);
          _this.props.onChangeComplete && _this.debounce(_this.props.onChangeComplete, colors, event);
          _this.props.onChange && _this.props.onChange(colors, event);
        }
      };
      _this.handleSwatchHover = function(data, event) {
        var isValidColor = simpleCheckForValidColor(data);
        if (isValidColor) {
          var colors = toState(data, data.h || _this.state.oldHue);
          _this.props.onSwatchHover && _this.props.onSwatchHover(colors, event);
        }
      };
      _this.state = _extends$9({}, toState(props.color, 0));
      _this.debounce = debounce(function(fn, data, event) {
        fn(data, event);
      }, 100);
      return _this;
    }
    _createClass$4(ColorPicker4, [{
      key: "render",
      value: function render3() {
        var optionalEvents = {};
        if (this.props.onSwatchHover) {
          optionalEvents.onSwatchHover = this.handleSwatchHover;
        }
        return /* @__PURE__ */ jsx(Picker, {
          ...this.props,
          ...this.state,
          onChange: this.handleChange,
          ...optionalEvents
        });
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, state) {
        return _extends$9({}, toState(nextProps.color, state.oldHue));
      }
    }]);
    return ColorPicker4;
  }(PureComponent || Component);
  ColorPicker3.propTypes = _extends$9({}, Picker.propTypes);
  ColorPicker3.defaultProps = _extends$9({}, Picker.defaultProps, {
    color: {
      h: 250,
      s: 0.5,
      l: 0.2,
      a: 1
    }
  });
  return ColorPicker3;
};
var _extends$8 = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _createClass$3 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$2(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits$2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var handleFocus = function handleFocus2(Component2) {
  var Span = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
  return function(_React$Component) {
    _inherits$2(Focus, _React$Component);
    function Focus() {
      var _ref;
      var _temp, _this, _ret;
      _classCallCheck$2(this, Focus);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp = (_this = _possibleConstructorReturn$2(this, (_ref = Focus.__proto__ || Object.getPrototypeOf(Focus)).call.apply(_ref, [this].concat(args))), _this), _this.state = { focus: false }, _this.handleFocus = function() {
        return _this.setState({ focus: true });
      }, _this.handleBlur = function() {
        return _this.setState({ focus: false });
      }, _temp), _possibleConstructorReturn$2(_this, _ret);
    }
    _createClass$3(Focus, [{
      key: "render",
      value: function render3() {
        return React.createElement(
          Span,
          { onFocus: this.handleFocus, onBlur: this.handleBlur },
          React.createElement(Component2, _extends$8({}, this.props, this.state))
        );
      }
    }]);
    return Focus;
  }(React.Component);
};
var _extends$7 = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var ENTER = 13;
var Swatch = function Swatch2(_ref) {
  var color = _ref.color, style = _ref.style, _ref$onClick = _ref.onClick, onClick = _ref$onClick === void 0 ? function() {
  } : _ref$onClick, onHover = _ref.onHover, _ref$title = _ref.title, title = _ref$title === void 0 ? color : _ref$title, children = _ref.children, focus = _ref.focus, _ref$focusStyle = _ref.focusStyle, focusStyle = _ref$focusStyle === void 0 ? {} : _ref$focusStyle;
  var transparent = color === "transparent";
  var styles = _default$2({
    default: {
      swatch: _extends$7({
        background: color,
        height: "100%",
        width: "100%",
        cursor: "pointer",
        position: "relative",
        outline: "none"
      }, style, focus ? focusStyle : {})
    }
  });
  var handleClick = function handleClick2(e) {
    return onClick(color, e);
  };
  var handleKeyDown = function handleKeyDown2(e) {
    return e.keyCode === ENTER && onClick(color, e);
  };
  var handleHover2 = function handleHover3(e) {
    return onHover(color, e);
  };
  var optionalEvents = {};
  if (onHover) {
    optionalEvents.onMouseOver = handleHover2;
  }
  return React.createElement(
    "div",
    _extends$7({
      style: styles.swatch,
      onClick: handleClick,
      title,
      tabIndex: 0,
      onKeyDown: handleKeyDown
    }, optionalEvents),
    children,
    transparent && React.createElement(Checkboard, {
      borderRadius: styles.swatch.borderRadius,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)"
    })
  );
};
var Swatch$1 = handleFocus(Swatch);
var AlphaPointer = function AlphaPointer2(_ref) {
  var direction = _ref.direction;
  var styles = _default$2({
    "default": {
      picker: {
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        transform: "translate(-9px, -1px)",
        backgroundColor: "rgb(248, 248, 248)",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
      }
    },
    "vertical": {
      picker: {
        transform: "translate(-3px, -9px)"
      }
    }
  }, { vertical: direction === "vertical" });
  return React.createElement("div", { style: styles.picker });
};
var _extends$6 = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var AlphaPicker = function AlphaPicker2(_ref) {
  var rgb = _ref.rgb, hsl = _ref.hsl, width = _ref.width, height = _ref.height, onChange = _ref.onChange, direction = _ref.direction, style = _ref.style, renderers = _ref.renderers, pointer = _ref.pointer, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles = _default$2({
    "default": {
      picker: {
        position: "relative",
        width,
        height
      },
      alpha: {
        radius: "2px",
        style
      }
    }
  });
  return React.createElement(
    "div",
    { style: styles.picker, className: "alpha-picker " + className },
    React.createElement(Alpha, _extends$6({}, styles.alpha, {
      rgb,
      hsl,
      pointer,
      renderers,
      onChange,
      direction
    }))
  );
};
AlphaPicker.defaultProps = {
  width: "316px",
  height: "16px",
  direction: "horizontal",
  pointer: AlphaPointer
};
ColorWrap(AlphaPicker);
function arrayMap(array2, iteratee) {
  var index = -1, length = array2 == null ? 0 : array2.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array2[index], index, array2);
  }
  return result;
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value) {
  return this.__data__.has(value);
}
function SetCache(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arraySome(array2, predicate) {
  var index = -1, length = array2 == null ? 0 : array2.length;
  while (++index < length) {
    if (predicate(array2[index], index, array2)) {
      return true;
    }
  }
  return false;
}
function cacheHas(cache2, key) {
  return cache2.has(key);
}
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays(array2, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array2.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array2);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array2;
  }
  var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
  stack.set(array2, other);
  stack.set(other, array2);
  while (++index < arrLength) {
    var arrValue = array2[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array2, stack) : customizer(arrValue, othValue, index, array2, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array2);
  stack["delete"](other);
  return result;
}
function mapToArray(map3) {
  var index = -1, result = Array(map3.size);
  map3.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
function setToArray(set5) {
  var index = -1, result = Array(set5.size);
  set5.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag$1 = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag$1 = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]";
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function equalByTag(object2, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$1:
      if (object2.byteLength != other.byteLength || object2.byteOffset != other.byteOffset) {
        return false;
      }
      object2 = object2.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object2.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object2), new Uint8Array$1(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq$1(+object2, +other);
    case errorTag:
      return object2.name == other.name && object2.message == other.message;
    case regexpTag:
    case stringTag:
      return object2 == other + "";
    case mapTag$1:
      var convert = mapToArray;
    case setTag$1:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = setToArray);
      if (object2.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object2);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;
      stack.set(object2, other);
      var result = equalArrays(convert(object2), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object2);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object2) == symbolValueOf.call(other);
      }
  }
  return false;
}
function arrayPush(array2, values) {
  var index = -1, length = values.length, offset2 = array2.length;
  while (++index < length) {
    array2[offset2 + index] = values[index];
  }
  return array2;
}
function baseGetAllKeys(object2, keysFunc, symbolsFunc) {
  var result = keysFunc(object2);
  return isArray$1(object2) ? result : arrayPush(result, symbolsFunc(object2));
}
function arrayFilter(array2, predicate) {
  var index = -1, length = array2 == null ? 0 : array2.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array2[index];
    if (predicate(value, index, array2)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
function stubArray() {
  return [];
}
var objectProto$2 = Object.prototype;
var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols ? stubArray : function(object2) {
  if (object2 == null) {
    return [];
  }
  object2 = Object(object2);
  return arrayFilter(nativeGetSymbols(object2), function(symbol) {
    return propertyIsEnumerable.call(object2, symbol);
  });
};
var getSymbols$1 = getSymbols;
function getAllKeys(object2) {
  return baseGetAllKeys(object2, keys, getSymbols$1);
}
var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function equalObjects(object2, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object2), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object2);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object2;
  }
  var result = true;
  stack.set(object2, other);
  stack.set(other, object2);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object2[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object2, stack) : customizer(objValue, othValue, key, object2, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object2.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object2 && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object2);
  stack["delete"](other);
  return result;
}
var DataView = getNative(root$1, "DataView");
var DataView$1 = DataView;
var Promise$1 = getNative(root$1, "Promise");
var Promise$2 = Promise$1;
var Set$1 = getNative(root$1, "Set");
var Set$2 = Set$1;
var WeakMap = getNative(root$1, "WeakMap");
var WeakMap$1 = WeakMap;
var mapTag = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag = "[object DataView]";
var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$2), promiseCtorString = toSource(Promise$2), setCtorString = toSource(Set$2), weakMapCtorString = toSource(WeakMap$1);
var getTag = baseGetTag;
if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag || Map$2 && getTag(new Map$2()) != mapTag || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$2 && getTag(new Set$2()) != setTag || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag) {
  getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
var getTag$1 = getTag;
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseIsEqualDeep(object2, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$1(object2), othIsArr = isArray$1(other), objTag = objIsArr ? arrayTag : getTag$1(object2), othTag = othIsArr ? arrayTag : getTag$1(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$1(object2)) {
    if (!isBuffer$1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray$1(object2) ? equalArrays(object2, other, bitmask, customizer, equalFunc, stack) : equalByTag(object2, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object2, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object2.value() : object2, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object2, other, bitmask, customizer, equalFunc, stack);
}
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch(object2, source, matchData, customizer) {
  var index = matchData.length, length = index, noCustomizer = !customizer;
  if (object2 == null) {
    return !length;
  }
  object2 = Object(object2);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object2[data[0]] : !(data[0] in object2)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0], objValue = object2[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object2)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object2, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
function isStrictComparable(value) {
  return value === value && !isObject$2(value);
}
function getMatchData(object2) {
  var result = keys(object2), length = result.length;
  while (length--) {
    var key = result[length], value = object2[key];
    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}
function matchesStrictComparable(key, srcValue) {
  return function(object2) {
    if (object2 == null) {
      return false;
    }
    return object2[key] === srcValue && (srcValue !== void 0 || key in Object(object2));
  };
}
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object2) {
    return object2 === source || baseIsMatch(object2, source, matchData);
  };
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value, object2) {
  if (isArray$1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object2 != null && value in Object(object2);
}
var FUNC_ERROR_TEXT = "Expected a function";
function memoize$1(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache2 = memoized.cache;
    if (cache2.has(key)) {
      return cache2.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache2.set(key, result) || cache2;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache)();
  return memoized;
}
memoize$1.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize$1(func, function(key) {
    if (cache2.size === MAX_MEMOIZE_SIZE) {
      cache2.clear();
    }
    return key;
  });
  var cache2 = result.cache;
  return result;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var stringToPath$1 = stringToPath;
var INFINITY$1 = 1 / 0;
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$1(value)) {
    return arrayMap(value, baseToString) + "";
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
function toString$1(value) {
  return value == null ? "" : baseToString(value);
}
function castPath(value, object2) {
  if (isArray$1(value)) {
    return value;
  }
  return isKey(value, object2) ? [value] : stringToPath$1(toString$1(value));
}
var INFINITY = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function baseGet(object2, path) {
  path = castPath(path, object2);
  var index = 0, length = path.length;
  while (object2 != null && index < length) {
    object2 = object2[toKey(path[index++])];
  }
  return index && index == length ? object2 : void 0;
}
function get$1(object2, path, defaultValue) {
  var result = object2 == null ? void 0 : baseGet(object2, path);
  return result === void 0 ? defaultValue : result;
}
function baseHasIn(object2, key) {
  return object2 != null && key in Object(object2);
}
function hasPath(object2, path, hasFunc) {
  path = castPath(path, object2);
  var index = -1, length = path.length, result = false;
  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object2 != null && hasFunc(object2, key))) {
      break;
    }
    object2 = object2[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object2 == null ? 0 : object2.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray$1(object2) || isArguments$1(object2));
}
function hasIn(object2, path) {
  return object2 != null && hasPath(object2, path, baseHasIn);
}
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object2) {
    var objValue = get$1(object2, path);
    return objValue === void 0 && objValue === srcValue ? hasIn(object2, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
function baseProperty(key) {
  return function(object2) {
    return object2 == null ? void 0 : object2[key];
  };
}
function basePropertyDeep(path) {
  return function(object2) {
    return baseGet(object2, path);
  };
}
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
function baseIteratee(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == "object") {
    return isArray$1(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}
function baseMap(collection, iteratee) {
  var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
  baseEach$1(collection, function(value, key, collection2) {
    result[++index] = iteratee(value, key, collection2);
  });
  return result;
}
function map(collection, iteratee) {
  var func = isArray$1(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee));
}
var BlockSwatches = function BlockSwatches2(_ref) {
  var colors = _ref.colors, onClick = _ref.onClick, onSwatchHover = _ref.onSwatchHover;
  var styles = _default$2({
    "default": {
      swatches: {
        marginRight: "-10px"
      },
      swatch: {
        width: "22px",
        height: "22px",
        float: "left",
        marginRight: "10px",
        marginBottom: "10px",
        borderRadius: "4px"
      },
      clear: {
        clear: "both"
      }
    }
  });
  return React.createElement(
    "div",
    { style: styles.swatches },
    map(colors, function(c) {
      return React.createElement(Swatch$1, {
        key: c,
        color: c,
        style: styles.swatch,
        onClick,
        onHover: onSwatchHover,
        focusStyle: {
          boxShadow: "0 0 4px " + c
        }
      });
    }),
    React.createElement("div", { style: styles.clear })
  );
};
var Block = function Block2(_ref) {
  var onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, hex = _ref.hex, colors = _ref.colors, width = _ref.width, triangle = _ref.triangle, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var transparent = hex === "transparent";
  var handleChange = function handleChange2(hexCode, e) {
    isValidHex(hexCode) && onChange({
      hex: hexCode,
      source: "hex"
    }, e);
  };
  var styles = _default$2(merge$1({
    "default": {
      card: {
        width,
        background: "#fff",
        boxShadow: "0 1px rgba(0,0,0,.1)",
        borderRadius: "6px",
        position: "relative"
      },
      head: {
        height: "110px",
        background: hex,
        borderRadius: "6px 6px 0 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
      },
      body: {
        padding: "10px"
      },
      label: {
        fontSize: "18px",
        color: getContrastingColor(hex),
        position: "relative"
      },
      triangle: {
        width: "0px",
        height: "0px",
        borderStyle: "solid",
        borderWidth: "0 10px 10px 10px",
        borderColor: "transparent transparent " + hex + " transparent",
        position: "absolute",
        top: "-10px",
        left: "50%",
        marginLeft: "-10px"
      },
      input: {
        width: "100%",
        fontSize: "12px",
        color: "#666",
        border: "0px",
        outline: "none",
        height: "22px",
        boxShadow: "inset 0 0 0 1px #ddd",
        borderRadius: "4px",
        padding: "0 7px",
        boxSizing: "border-box"
      }
    },
    "hide-triangle": {
      triangle: {
        display: "none"
      }
    }
  }, passedStyles), { "hide-triangle": triangle === "hide" });
  return React.createElement(
    "div",
    { style: styles.card, className: "block-picker " + className },
    React.createElement("div", { style: styles.triangle }),
    React.createElement(
      "div",
      { style: styles.head },
      transparent && React.createElement(Checkboard, { borderRadius: "6px 6px 0 0" }),
      React.createElement(
        "div",
        { style: styles.label },
        hex
      )
    ),
    React.createElement(
      "div",
      { style: styles.body },
      React.createElement(BlockSwatches, { colors, onClick: handleChange, onSwatchHover }),
      React.createElement(EditableInput, {
        style: { input: styles.input },
        value: hex,
        onChange: handleChange
      })
    )
  );
};
Block.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  colors: PropTypes.arrayOf(PropTypes.string),
  triangle: PropTypes.oneOf(["top", "hide"]),
  styles: PropTypes.object
};
Block.defaultProps = {
  width: 170,
  colors: ["#D9E3F0", "#F47373", "#697689", "#37D67A", "#2CCCE4", "#555555", "#dce775", "#ff8a65", "#ba68c8"],
  triangle: "top",
  styles: {}
};
ColorWrap(Block);
var red = { "50": "#ffebee", "100": "#ffcdd2", "200": "#ef9a9a", "300": "#e57373", "400": "#ef5350", "500": "#f44336", "600": "#e53935", "700": "#d32f2f", "800": "#c62828", "900": "#b71c1c", "a100": "#ff8a80", "a200": "#ff5252", "a400": "#ff1744", "a700": "#d50000" };
var pink = { "50": "#fce4ec", "100": "#f8bbd0", "200": "#f48fb1", "300": "#f06292", "400": "#ec407a", "500": "#e91e63", "600": "#d81b60", "700": "#c2185b", "800": "#ad1457", "900": "#880e4f", "a100": "#ff80ab", "a200": "#ff4081", "a400": "#f50057", "a700": "#c51162" };
var purple = { "50": "#f3e5f5", "100": "#e1bee7", "200": "#ce93d8", "300": "#ba68c8", "400": "#ab47bc", "500": "#9c27b0", "600": "#8e24aa", "700": "#7b1fa2", "800": "#6a1b9a", "900": "#4a148c", "a100": "#ea80fc", "a200": "#e040fb", "a400": "#d500f9", "a700": "#aa00ff" };
var deepPurple = { "50": "#ede7f6", "100": "#d1c4e9", "200": "#b39ddb", "300": "#9575cd", "400": "#7e57c2", "500": "#673ab7", "600": "#5e35b1", "700": "#512da8", "800": "#4527a0", "900": "#311b92", "a100": "#b388ff", "a200": "#7c4dff", "a400": "#651fff", "a700": "#6200ea" };
var indigo = { "50": "#e8eaf6", "100": "#c5cae9", "200": "#9fa8da", "300": "#7986cb", "400": "#5c6bc0", "500": "#3f51b5", "600": "#3949ab", "700": "#303f9f", "800": "#283593", "900": "#1a237e", "a100": "#8c9eff", "a200": "#536dfe", "a400": "#3d5afe", "a700": "#304ffe" };
var blue = { "50": "#e3f2fd", "100": "#bbdefb", "200": "#90caf9", "300": "#64b5f6", "400": "#42a5f5", "500": "#2196f3", "600": "#1e88e5", "700": "#1976d2", "800": "#1565c0", "900": "#0d47a1", "a100": "#82b1ff", "a200": "#448aff", "a400": "#2979ff", "a700": "#2962ff" };
var lightBlue = { "50": "#e1f5fe", "100": "#b3e5fc", "200": "#81d4fa", "300": "#4fc3f7", "400": "#29b6f6", "500": "#03a9f4", "600": "#039be5", "700": "#0288d1", "800": "#0277bd", "900": "#01579b", "a100": "#80d8ff", "a200": "#40c4ff", "a400": "#00b0ff", "a700": "#0091ea" };
var cyan = { "50": "#e0f7fa", "100": "#b2ebf2", "200": "#80deea", "300": "#4dd0e1", "400": "#26c6da", "500": "#00bcd4", "600": "#00acc1", "700": "#0097a7", "800": "#00838f", "900": "#006064", "a100": "#84ffff", "a200": "#18ffff", "a400": "#00e5ff", "a700": "#00b8d4" };
var teal = { "50": "#e0f2f1", "100": "#b2dfdb", "200": "#80cbc4", "300": "#4db6ac", "400": "#26a69a", "500": "#009688", "600": "#00897b", "700": "#00796b", "800": "#00695c", "900": "#004d40", "a100": "#a7ffeb", "a200": "#64ffda", "a400": "#1de9b6", "a700": "#00bfa5" };
var green = { "50": "#e8f5e9", "100": "#c8e6c9", "200": "#a5d6a7", "300": "#81c784", "400": "#66bb6a", "500": "#4caf50", "600": "#43a047", "700": "#388e3c", "800": "#2e7d32", "900": "#1b5e20", "a100": "#b9f6ca", "a200": "#69f0ae", "a400": "#00e676", "a700": "#00c853" };
var lightGreen = { "50": "#f1f8e9", "100": "#dcedc8", "200": "#c5e1a5", "300": "#aed581", "400": "#9ccc65", "500": "#8bc34a", "600": "#7cb342", "700": "#689f38", "800": "#558b2f", "900": "#33691e", "a100": "#ccff90", "a200": "#b2ff59", "a400": "#76ff03", "a700": "#64dd17" };
var lime = { "50": "#f9fbe7", "100": "#f0f4c3", "200": "#e6ee9c", "300": "#dce775", "400": "#d4e157", "500": "#cddc39", "600": "#c0ca33", "700": "#afb42b", "800": "#9e9d24", "900": "#827717", "a100": "#f4ff81", "a200": "#eeff41", "a400": "#c6ff00", "a700": "#aeea00" };
var yellow = { "50": "#fffde7", "100": "#fff9c4", "200": "#fff59d", "300": "#fff176", "400": "#ffee58", "500": "#ffeb3b", "600": "#fdd835", "700": "#fbc02d", "800": "#f9a825", "900": "#f57f17", "a100": "#ffff8d", "a200": "#ffff00", "a400": "#ffea00", "a700": "#ffd600" };
var amber = { "50": "#fff8e1", "100": "#ffecb3", "200": "#ffe082", "300": "#ffd54f", "400": "#ffca28", "500": "#ffc107", "600": "#ffb300", "700": "#ffa000", "800": "#ff8f00", "900": "#ff6f00", "a100": "#ffe57f", "a200": "#ffd740", "a400": "#ffc400", "a700": "#ffab00" };
var orange = { "50": "#fff3e0", "100": "#ffe0b2", "200": "#ffcc80", "300": "#ffb74d", "400": "#ffa726", "500": "#ff9800", "600": "#fb8c00", "700": "#f57c00", "800": "#ef6c00", "900": "#e65100", "a100": "#ffd180", "a200": "#ffab40", "a400": "#ff9100", "a700": "#ff6d00" };
var deepOrange = { "50": "#fbe9e7", "100": "#ffccbc", "200": "#ffab91", "300": "#ff8a65", "400": "#ff7043", "500": "#ff5722", "600": "#f4511e", "700": "#e64a19", "800": "#d84315", "900": "#bf360c", "a100": "#ff9e80", "a200": "#ff6e40", "a400": "#ff3d00", "a700": "#dd2c00" };
var brown = { "50": "#efebe9", "100": "#d7ccc8", "200": "#bcaaa4", "300": "#a1887f", "400": "#8d6e63", "500": "#795548", "600": "#6d4c41", "700": "#5d4037", "800": "#4e342e", "900": "#3e2723" };
var blueGrey = { "50": "#eceff1", "100": "#cfd8dc", "200": "#b0bec5", "300": "#90a4ae", "400": "#78909c", "500": "#607d8b", "600": "#546e7a", "700": "#455a64", "800": "#37474f", "900": "#263238" };
var CircleSwatch = function CircleSwatch2(_ref) {
  var color = _ref.color, onClick = _ref.onClick, onSwatchHover = _ref.onSwatchHover, hover3 = _ref.hover, active3 = _ref.active, circleSize = _ref.circleSize, circleSpacing = _ref.circleSpacing;
  var styles = _default$2({
    "default": {
      swatch: {
        width: circleSize,
        height: circleSize,
        marginRight: circleSpacing,
        marginBottom: circleSpacing,
        transform: "scale(1)",
        transition: "100ms transform ease"
      },
      Swatch: {
        borderRadius: "50%",
        background: "transparent",
        boxShadow: "inset 0 0 0 " + (circleSize / 2 + 1) + "px " + color,
        transition: "100ms box-shadow ease"
      }
    },
    "hover": {
      swatch: {
        transform: "scale(1.2)"
      }
    },
    "active": {
      Swatch: {
        boxShadow: "inset 0 0 0 3px " + color
      }
    }
  }, { hover: hover3, active: active3 });
  return React.createElement(
    "div",
    { style: styles.swatch },
    React.createElement(Swatch$1, {
      style: styles.Swatch,
      color,
      onClick,
      onHover: onSwatchHover,
      focusStyle: { boxShadow: styles.Swatch.boxShadow + ", 0 0 5px " + color }
    })
  );
};
CircleSwatch.defaultProps = {
  circleSize: 28,
  circleSpacing: 14
};
var CircleSwatch$1 = handleHover(CircleSwatch);
var Circle = function Circle2(_ref) {
  var width = _ref.width, onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, colors = _ref.colors, hex = _ref.hex, circleSize = _ref.circleSize, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, circleSpacing = _ref.circleSpacing, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles = _default$2(merge$1({
    "default": {
      card: {
        width,
        display: "flex",
        flexWrap: "wrap",
        marginRight: -circleSpacing,
        marginBottom: -circleSpacing
      }
    }
  }, passedStyles));
  var handleChange = function handleChange2(hexCode, e) {
    return onChange({ hex: hexCode, source: "hex" }, e);
  };
  return React.createElement(
    "div",
    { style: styles.card, className: "circle-picker " + className },
    map(colors, function(c) {
      return React.createElement(CircleSwatch$1, {
        key: c,
        color: c,
        onClick: handleChange,
        onSwatchHover,
        active: hex === c.toLowerCase(),
        circleSize,
        circleSpacing
      });
    })
  );
};
Circle.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  circleSize: PropTypes.number,
  circleSpacing: PropTypes.number,
  styles: PropTypes.object
};
Circle.defaultProps = {
  width: 252,
  circleSize: 28,
  circleSpacing: 14,
  colors: [red["500"], pink["500"], purple["500"], deepPurple["500"], indigo["500"], blue["500"], lightBlue["500"], cyan["500"], teal["500"], green["500"], lightGreen["500"], lime["500"], yellow["500"], amber["500"], orange["500"], deepOrange["500"], brown["500"], blueGrey["500"]],
  styles: {}
};
ColorWrap(Circle);
function isUndefined(value) {
  return value === void 0;
}
var UnfoldMoreHorizontalIcon = {};
Object.defineProperty(UnfoldMoreHorizontalIcon, "__esModule", {
  value: true
});
var _extends$5 = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _react$1 = React;
var _react2$1 = _interopRequireDefault$1(_react$1);
function _interopRequireDefault$1(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _objectWithoutProperties$2(obj, keys2) {
  var target = {};
  for (var i in obj) {
    if (keys2.indexOf(i) >= 0)
      continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i))
      continue;
    target[i] = obj[i];
  }
  return target;
}
var DEFAULT_SIZE$1 = 24;
var _default$1 = UnfoldMoreHorizontalIcon.default = function(_ref) {
  var _ref$fill = _ref.fill, fill = _ref$fill === void 0 ? "currentColor" : _ref$fill, _ref$width = _ref.width, width = _ref$width === void 0 ? DEFAULT_SIZE$1 : _ref$width, _ref$height = _ref.height, height = _ref$height === void 0 ? DEFAULT_SIZE$1 : _ref$height, _ref$style = _ref.style, style = _ref$style === void 0 ? {} : _ref$style, props = _objectWithoutProperties$2(_ref, ["fill", "width", "height", "style"]);
  return _react2$1.default.createElement(
    "svg",
    _extends$5({
      viewBox: "0 0 " + DEFAULT_SIZE$1 + " " + DEFAULT_SIZE$1,
      style: _extends$5({ fill, width, height }, style)
    }, props),
    _react2$1.default.createElement("path", { d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z" })
  );
};
var _createClass$2 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$1(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var ChromeFields = function(_React$Component) {
  _inherits$1(ChromeFields2, _React$Component);
  function ChromeFields2(props) {
    _classCallCheck$1(this, ChromeFields2);
    var _this = _possibleConstructorReturn$1(this, (ChromeFields2.__proto__ || Object.getPrototypeOf(ChromeFields2)).call(this));
    _this.toggleViews = function() {
      if (_this.state.view === "hex") {
        _this.setState({ view: "rgb" });
      } else if (_this.state.view === "rgb") {
        _this.setState({ view: "hsl" });
      } else if (_this.state.view === "hsl") {
        if (_this.props.hsl.a === 1) {
          _this.setState({ view: "hex" });
        } else {
          _this.setState({ view: "rgb" });
        }
      }
    };
    _this.handleChange = function(data, e) {
      if (data.hex) {
        isValidHex(data.hex) && _this.props.onChange({
          hex: data.hex,
          source: "hex"
        }, e);
      } else if (data.r || data.g || data.b) {
        _this.props.onChange({
          r: data.r || _this.props.rgb.r,
          g: data.g || _this.props.rgb.g,
          b: data.b || _this.props.rgb.b,
          source: "rgb"
        }, e);
      } else if (data.a) {
        if (data.a < 0) {
          data.a = 0;
        } else if (data.a > 1) {
          data.a = 1;
        }
        _this.props.onChange({
          h: _this.props.hsl.h,
          s: _this.props.hsl.s,
          l: _this.props.hsl.l,
          a: Math.round(data.a * 100) / 100,
          source: "rgb"
        }, e);
      } else if (data.h || data.s || data.l) {
        if (typeof data.s === "string" && data.s.includes("%")) {
          data.s = data.s.replace("%", "");
        }
        if (typeof data.l === "string" && data.l.includes("%")) {
          data.l = data.l.replace("%", "");
        }
        if (data.s == 1) {
          data.s = 0.01;
        } else if (data.l == 1) {
          data.l = 0.01;
        }
        _this.props.onChange({
          h: data.h || _this.props.hsl.h,
          s: Number(!isUndefined(data.s) ? data.s : _this.props.hsl.s),
          l: Number(!isUndefined(data.l) ? data.l : _this.props.hsl.l),
          source: "hsl"
        }, e);
      }
    };
    _this.showHighlight = function(e) {
      e.currentTarget.style.background = "#eee";
    };
    _this.hideHighlight = function(e) {
      e.currentTarget.style.background = "transparent";
    };
    if (props.hsl.a !== 1 && props.view === "hex") {
      _this.state = {
        view: "rgb"
      };
    } else {
      _this.state = {
        view: props.view
      };
    }
    return _this;
  }
  _createClass$2(ChromeFields2, [{
    key: "render",
    value: function render3() {
      var _this2 = this;
      var styles = _default$2({
        "default": {
          wrap: {
            paddingTop: "16px",
            display: "flex"
          },
          fields: {
            flex: "1",
            display: "flex",
            marginLeft: "-6px"
          },
          field: {
            paddingLeft: "6px",
            width: "100%"
          },
          alpha: {
            paddingLeft: "6px",
            width: "100%"
          },
          toggle: {
            width: "32px",
            textAlign: "right",
            position: "relative"
          },
          icon: {
            marginRight: "-4px",
            marginTop: "12px",
            cursor: "pointer",
            position: "relative"
          },
          iconHighlight: {
            position: "absolute",
            width: "24px",
            height: "28px",
            background: "#eee",
            borderRadius: "4px",
            top: "10px",
            left: "12px",
            display: "none"
          },
          input: {
            fontSize: "11px",
            color: "#333",
            width: "100%",
            borderRadius: "2px",
            border: "none",
            boxShadow: "inset 0 0 0 1px #dadada",
            height: "21px",
            textAlign: "center"
          },
          label: {
            textTransform: "uppercase",
            fontSize: "11px",
            lineHeight: "11px",
            color: "#969696",
            textAlign: "center",
            display: "block",
            marginTop: "12px"
          },
          svg: {
            fill: "#333",
            width: "24px",
            height: "24px",
            border: "1px transparent solid",
            borderRadius: "5px"
          }
        },
        "disableAlpha": {
          alpha: {
            display: "none"
          }
        }
      }, this.props, this.state);
      var fields = void 0;
      if (this.state.view === "hex") {
        fields = React.createElement(
          "div",
          { style: styles.fields, className: "flexbox-fix" },
          React.createElement(
            "div",
            { style: styles.field },
            React.createElement(EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: "hex",
              value: this.props.hex,
              onChange: this.handleChange
            })
          )
        );
      } else if (this.state.view === "rgb") {
        fields = React.createElement(
          "div",
          { style: styles.fields, className: "flexbox-fix" },
          React.createElement(
            "div",
            { style: styles.field },
            React.createElement(EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: "r",
              value: this.props.rgb.r,
              onChange: this.handleChange
            })
          ),
          React.createElement(
            "div",
            { style: styles.field },
            React.createElement(EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: "g",
              value: this.props.rgb.g,
              onChange: this.handleChange
            })
          ),
          React.createElement(
            "div",
            { style: styles.field },
            React.createElement(EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: "b",
              value: this.props.rgb.b,
              onChange: this.handleChange
            })
          ),
          React.createElement(
            "div",
            { style: styles.alpha },
            React.createElement(EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: "a",
              value: this.props.rgb.a,
              arrowOffset: 0.01,
              onChange: this.handleChange
            })
          )
        );
      } else if (this.state.view === "hsl") {
        fields = React.createElement(
          "div",
          { style: styles.fields, className: "flexbox-fix" },
          React.createElement(
            "div",
            { style: styles.field },
            React.createElement(EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: "h",
              value: Math.round(this.props.hsl.h),
              onChange: this.handleChange
            })
          ),
          React.createElement(
            "div",
            { style: styles.field },
            React.createElement(EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: "s",
              value: Math.round(this.props.hsl.s * 100) + "%",
              onChange: this.handleChange
            })
          ),
          React.createElement(
            "div",
            { style: styles.field },
            React.createElement(EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: "l",
              value: Math.round(this.props.hsl.l * 100) + "%",
              onChange: this.handleChange
            })
          ),
          React.createElement(
            "div",
            { style: styles.alpha },
            React.createElement(EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: "a",
              value: this.props.hsl.a,
              arrowOffset: 0.01,
              onChange: this.handleChange
            })
          )
        );
      }
      return React.createElement(
        "div",
        { style: styles.wrap, className: "flexbox-fix" },
        fields,
        React.createElement(
          "div",
          { style: styles.toggle },
          React.createElement(
            "div",
            { style: styles.icon, onClick: this.toggleViews, ref: function ref(icon) {
              return _this2.icon = icon;
            } },
            React.createElement(_default$1, {
              style: styles.svg,
              onMouseOver: this.showHighlight,
              onMouseEnter: this.showHighlight,
              onMouseOut: this.hideHighlight
            })
          )
        )
      );
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, state) {
      if (nextProps.hsl.a !== 1 && state.view === "hex") {
        return { view: "rgb" };
      }
      return null;
    }
  }]);
  return ChromeFields2;
}(React.Component);
ChromeFields.defaultProps = {
  view: "hex"
};
var ChromePointer = function ChromePointer2() {
  var styles = _default$2({
    "default": {
      picker: {
        width: "12px",
        height: "12px",
        borderRadius: "6px",
        transform: "translate(-6px, -1px)",
        backgroundColor: "rgb(248, 248, 248)",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
      }
    }
  });
  return React.createElement("div", { style: styles.picker });
};
var ChromePointerCircle = function ChromePointerCircle2() {
  var styles = _default$2({
    "default": {
      picker: {
        width: "12px",
        height: "12px",
        borderRadius: "6px",
        boxShadow: "inset 0 0 0 1px #fff",
        transform: "translate(-6px, -6px)"
      }
    }
  });
  return React.createElement("div", { style: styles.picker });
};
var Chrome = function Chrome2(_ref) {
  var width = _ref.width, onChange = _ref.onChange, disableAlpha = _ref.disableAlpha, rgb = _ref.rgb, hsl = _ref.hsl, hsv = _ref.hsv, hex = _ref.hex, renderers = _ref.renderers, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className, defaultView = _ref.defaultView;
  var styles = _default$2(merge$1({
    "default": {
      picker: {
        width,
        background: "#fff",
        borderRadius: "2px",
        boxShadow: "0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)",
        boxSizing: "initial",
        fontFamily: "Menlo"
      },
      saturation: {
        width: "100%",
        paddingBottom: "55%",
        position: "relative",
        borderRadius: "2px 2px 0 0",
        overflow: "hidden"
      },
      Saturation: {
        radius: "2px 2px 0 0"
      },
      body: {
        padding: "16px 16px 12px"
      },
      controls: {
        display: "flex"
      },
      color: {
        width: "32px"
      },
      swatch: {
        marginTop: "6px",
        width: "16px",
        height: "16px",
        borderRadius: "8px",
        position: "relative",
        overflow: "hidden"
      },
      active: {
        absolute: "0px 0px 0px 0px",
        borderRadius: "8px",
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
        background: "rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", " + rgb.a + ")",
        zIndex: "2"
      },
      toggles: {
        flex: "1"
      },
      hue: {
        height: "10px",
        position: "relative",
        marginBottom: "8px"
      },
      Hue: {
        radius: "2px"
      },
      alpha: {
        height: "10px",
        position: "relative"
      },
      Alpha: {
        radius: "2px"
      }
    },
    "disableAlpha": {
      color: {
        width: "22px"
      },
      alpha: {
        display: "none"
      },
      hue: {
        marginBottom: "0px"
      },
      swatch: {
        width: "10px",
        height: "10px",
        marginTop: "0px"
      }
    }
  }, passedStyles), { disableAlpha });
  return React.createElement(
    "div",
    { style: styles.picker, className: "chrome-picker " + className },
    React.createElement(
      "div",
      { style: styles.saturation },
      React.createElement(Saturation, {
        style: styles.Saturation,
        hsl,
        hsv,
        pointer: ChromePointerCircle,
        onChange
      })
    ),
    React.createElement(
      "div",
      { style: styles.body },
      React.createElement(
        "div",
        { style: styles.controls, className: "flexbox-fix" },
        React.createElement(
          "div",
          { style: styles.color },
          React.createElement(
            "div",
            { style: styles.swatch },
            React.createElement("div", { style: styles.active }),
            React.createElement(Checkboard, { renderers })
          )
        ),
        React.createElement(
          "div",
          { style: styles.toggles },
          React.createElement(
            "div",
            { style: styles.hue },
            React.createElement(Hue, {
              style: styles.Hue,
              hsl,
              pointer: ChromePointer,
              onChange
            })
          ),
          React.createElement(
            "div",
            { style: styles.alpha },
            React.createElement(Alpha, {
              style: styles.Alpha,
              rgb,
              hsl,
              pointer: ChromePointer,
              renderers,
              onChange
            })
          )
        )
      ),
      React.createElement(ChromeFields, {
        rgb,
        hsl,
        hex,
        view: defaultView,
        onChange,
        disableAlpha
      })
    )
  );
};
Chrome.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disableAlpha: PropTypes.bool,
  styles: PropTypes.object,
  defaultView: PropTypes.oneOf(["hex", "rgb", "hsl"])
};
Chrome.defaultProps = {
  width: 225,
  disableAlpha: false,
  styles: {}
};
ColorWrap(Chrome);
var CompactColor = function CompactColor2(_ref) {
  var color = _ref.color, _ref$onClick = _ref.onClick, onClick = _ref$onClick === void 0 ? function() {
  } : _ref$onClick, onSwatchHover = _ref.onSwatchHover, active3 = _ref.active;
  var styles = _default$2({
    "default": {
      color: {
        background: color,
        width: "15px",
        height: "15px",
        float: "left",
        marginRight: "5px",
        marginBottom: "5px",
        position: "relative",
        cursor: "pointer"
      },
      dot: {
        absolute: "5px 5px 5px 5px",
        background: getContrastingColor(color),
        borderRadius: "50%",
        opacity: "0"
      }
    },
    "active": {
      dot: {
        opacity: "1"
      }
    },
    "color-#FFFFFF": {
      color: {
        boxShadow: "inset 0 0 0 1px #ddd"
      },
      dot: {
        background: "#000"
      }
    },
    "transparent": {
      dot: {
        background: "#000"
      }
    }
  }, { active: active3, "color-#FFFFFF": color === "#FFFFFF", "transparent": color === "transparent" });
  return React.createElement(
    Swatch$1,
    {
      style: styles.color,
      color,
      onClick,
      onHover: onSwatchHover,
      focusStyle: { boxShadow: "0 0 4px " + color }
    },
    React.createElement("div", { style: styles.dot })
  );
};
var CompactFields = function CompactFields2(_ref) {
  var hex = _ref.hex, rgb = _ref.rgb, onChange = _ref.onChange;
  var styles = _default$2({
    "default": {
      fields: {
        display: "flex",
        paddingBottom: "6px",
        paddingRight: "5px",
        position: "relative"
      },
      active: {
        position: "absolute",
        top: "6px",
        left: "5px",
        height: "9px",
        width: "9px",
        background: hex
      },
      HEXwrap: {
        flex: "6",
        position: "relative"
      },
      HEXinput: {
        width: "80%",
        padding: "0px",
        paddingLeft: "20%",
        border: "none",
        outline: "none",
        background: "none",
        fontSize: "12px",
        color: "#333",
        height: "16px"
      },
      HEXlabel: {
        display: "none"
      },
      RGBwrap: {
        flex: "3",
        position: "relative"
      },
      RGBinput: {
        width: "70%",
        padding: "0px",
        paddingLeft: "30%",
        border: "none",
        outline: "none",
        background: "none",
        fontSize: "12px",
        color: "#333",
        height: "16px"
      },
      RGBlabel: {
        position: "absolute",
        top: "3px",
        left: "0px",
        lineHeight: "16px",
        textTransform: "uppercase",
        fontSize: "12px",
        color: "#999"
      }
    }
  });
  var handleChange = function handleChange2(data, e) {
    if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: "rgb"
      }, e);
    } else {
      onChange({
        hex: data.hex,
        source: "hex"
      }, e);
    }
  };
  return React.createElement(
    "div",
    { style: styles.fields, className: "flexbox-fix" },
    React.createElement("div", { style: styles.active }),
    React.createElement(EditableInput, {
      style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
      label: "hex",
      value: hex,
      onChange: handleChange
    }),
    React.createElement(EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: "r",
      value: rgb.r,
      onChange: handleChange
    }),
    React.createElement(EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: "g",
      value: rgb.g,
      onChange: handleChange
    }),
    React.createElement(EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: "b",
      value: rgb.b,
      onChange: handleChange
    })
  );
};
var Compact = function Compact2(_ref) {
  var onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, colors = _ref.colors, hex = _ref.hex, rgb = _ref.rgb, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles = _default$2(merge$1({
    "default": {
      Compact: {
        background: "#f6f6f6",
        radius: "4px"
      },
      compact: {
        paddingTop: "5px",
        paddingLeft: "5px",
        boxSizing: "initial",
        width: "240px"
      },
      clear: {
        clear: "both"
      }
    }
  }, passedStyles));
  var handleChange = function handleChange2(data, e) {
    if (data.hex) {
      isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: "hex"
      }, e);
    } else {
      onChange(data, e);
    }
  };
  return React.createElement(
    Raised,
    { style: styles.Compact, styles: passedStyles },
    React.createElement(
      "div",
      { style: styles.compact, className: "compact-picker " + className },
      React.createElement(
        "div",
        null,
        map(colors, function(c) {
          return React.createElement(CompactColor, {
            key: c,
            color: c,
            active: c.toLowerCase() === hex,
            onClick: handleChange,
            onSwatchHover
          });
        }),
        React.createElement("div", { style: styles.clear })
      ),
      React.createElement(CompactFields, { hex, rgb, onChange: handleChange })
    )
  );
};
Compact.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
  styles: PropTypes.object
};
Compact.defaultProps = {
  colors: ["#4D4D4D", "#999999", "#FFFFFF", "#F44E3B", "#FE9200", "#FCDC00", "#DBDF00", "#A4DD00", "#68CCCA", "#73D8FF", "#AEA1FF", "#FDA1FF", "#333333", "#808080", "#cccccc", "#D33115", "#E27300", "#FCC400", "#B0BC00", "#68BC00", "#16A5A5", "#009CE0", "#7B64FF", "#FA28FF", "#000000", "#666666", "#B3B3B3", "#9F0500", "#C45100", "#FB9E00", "#808900", "#194D33", "#0C797D", "#0062B1", "#653294", "#AB149E"],
  styles: {}
};
var CompactPicker = ColorWrap(Compact);
var GithubSwatch = function GithubSwatch2(_ref) {
  var hover3 = _ref.hover, color = _ref.color, onClick = _ref.onClick, onSwatchHover = _ref.onSwatchHover;
  var hoverSwatch = {
    position: "relative",
    zIndex: "2",
    outline: "2px solid #fff",
    boxShadow: "0 0 5px 2px rgba(0,0,0,0.25)"
  };
  var styles = _default$2({
    "default": {
      swatch: {
        width: "25px",
        height: "25px",
        fontSize: "0"
      }
    },
    "hover": {
      swatch: hoverSwatch
    }
  }, { hover: hover3 });
  return React.createElement(
    "div",
    { style: styles.swatch },
    React.createElement(Swatch$1, {
      color,
      onClick,
      onHover: onSwatchHover,
      focusStyle: hoverSwatch
    })
  );
};
var GithubSwatch$1 = handleHover(GithubSwatch);
var Github = function Github2(_ref) {
  var width = _ref.width, colors = _ref.colors, onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, triangle = _ref.triangle, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles = _default$2(merge$1({
    "default": {
      card: {
        width,
        background: "#fff",
        border: "1px solid rgba(0,0,0,0.2)",
        boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
        borderRadius: "4px",
        position: "relative",
        padding: "5px",
        display: "flex",
        flexWrap: "wrap"
      },
      triangle: {
        position: "absolute",
        border: "7px solid transparent",
        borderBottomColor: "#fff"
      },
      triangleShadow: {
        position: "absolute",
        border: "8px solid transparent",
        borderBottomColor: "rgba(0,0,0,0.15)"
      }
    },
    "hide-triangle": {
      triangle: {
        display: "none"
      },
      triangleShadow: {
        display: "none"
      }
    },
    "top-left-triangle": {
      triangle: {
        top: "-14px",
        left: "10px"
      },
      triangleShadow: {
        top: "-16px",
        left: "9px"
      }
    },
    "top-right-triangle": {
      triangle: {
        top: "-14px",
        right: "10px"
      },
      triangleShadow: {
        top: "-16px",
        right: "9px"
      }
    },
    "bottom-left-triangle": {
      triangle: {
        top: "35px",
        left: "10px",
        transform: "rotate(180deg)"
      },
      triangleShadow: {
        top: "37px",
        left: "9px",
        transform: "rotate(180deg)"
      }
    },
    "bottom-right-triangle": {
      triangle: {
        top: "35px",
        right: "10px",
        transform: "rotate(180deg)"
      },
      triangleShadow: {
        top: "37px",
        right: "9px",
        transform: "rotate(180deg)"
      }
    }
  }, passedStyles), {
    "hide-triangle": triangle === "hide",
    "top-left-triangle": triangle === "top-left",
    "top-right-triangle": triangle === "top-right",
    "bottom-left-triangle": triangle === "bottom-left",
    "bottom-right-triangle": triangle === "bottom-right"
  });
  var handleChange = function handleChange2(hex, e) {
    return onChange({ hex, source: "hex" }, e);
  };
  return React.createElement(
    "div",
    { style: styles.card, className: "github-picker " + className },
    React.createElement("div", { style: styles.triangleShadow }),
    React.createElement("div", { style: styles.triangle }),
    map(colors, function(c) {
      return React.createElement(GithubSwatch$1, {
        color: c,
        key: c,
        onClick: handleChange,
        onSwatchHover
      });
    })
  );
};
Github.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  colors: PropTypes.arrayOf(PropTypes.string),
  triangle: PropTypes.oneOf(["hide", "top-left", "top-right", "bottom-left", "bottom-right"]),
  styles: PropTypes.object
};
Github.defaultProps = {
  width: 200,
  colors: ["#B80000", "#DB3E00", "#FCCB00", "#008B02", "#006B76", "#1273DE", "#004DCF", "#5300EB", "#EB9694", "#FAD0C3", "#FEF3BD", "#C1E1C5", "#BEDADC", "#C4DEF6", "#BED3F3", "#D4C4FB"],
  triangle: "top-left",
  styles: {}
};
ColorWrap(Github);
var SliderPointer$1 = function SliderPointer(_ref) {
  var direction = _ref.direction;
  var styles = _default$2({
    "default": {
      picker: {
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        transform: "translate(-9px, -1px)",
        backgroundColor: "rgb(248, 248, 248)",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
      }
    },
    "vertical": {
      picker: {
        transform: "translate(-3px, -9px)"
      }
    }
  }, { vertical: direction === "vertical" });
  return React.createElement("div", { style: styles.picker });
};
var _extends$4 = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var HuePicker = function HuePicker2(_ref) {
  var width = _ref.width, height = _ref.height, onChange = _ref.onChange, hsl = _ref.hsl, direction = _ref.direction, pointer = _ref.pointer, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles = _default$2(merge$1({
    "default": {
      picker: {
        position: "relative",
        width,
        height
      },
      hue: {
        radius: "2px"
      }
    }
  }, passedStyles));
  var handleChange = function handleChange2(data) {
    return onChange({ a: 1, h: data.h, l: 0.5, s: 1 });
  };
  return React.createElement(
    "div",
    { style: styles.picker, className: "hue-picker " + className },
    React.createElement(Hue, _extends$4({}, styles.hue, {
      hsl,
      pointer,
      onChange: handleChange,
      direction
    }))
  );
};
HuePicker.propTypes = {
  styles: PropTypes.object
};
HuePicker.defaultProps = {
  width: "316px",
  height: "16px",
  direction: "horizontal",
  pointer: SliderPointer$1,
  styles: {}
};
ColorWrap(HuePicker);
var Material = function Material2(_ref) {
  var onChange = _ref.onChange, hex = _ref.hex, rgb = _ref.rgb, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles = _default$2(merge$1({
    "default": {
      material: {
        width: "98px",
        height: "98px",
        padding: "16px",
        fontFamily: "Roboto"
      },
      HEXwrap: {
        position: "relative"
      },
      HEXinput: {
        width: "100%",
        marginTop: "12px",
        fontSize: "15px",
        color: "#333",
        padding: "0px",
        border: "0px",
        borderBottom: "2px solid " + hex,
        outline: "none",
        height: "30px"
      },
      HEXlabel: {
        position: "absolute",
        top: "0px",
        left: "0px",
        fontSize: "11px",
        color: "#999999",
        textTransform: "capitalize"
      },
      Hex: {
        style: {}
      },
      RGBwrap: {
        position: "relative"
      },
      RGBinput: {
        width: "100%",
        marginTop: "12px",
        fontSize: "15px",
        color: "#333",
        padding: "0px",
        border: "0px",
        borderBottom: "1px solid #eee",
        outline: "none",
        height: "30px"
      },
      RGBlabel: {
        position: "absolute",
        top: "0px",
        left: "0px",
        fontSize: "11px",
        color: "#999999",
        textTransform: "capitalize"
      },
      split: {
        display: "flex",
        marginRight: "-10px",
        paddingTop: "11px"
      },
      third: {
        flex: "1",
        paddingRight: "10px"
      }
    }
  }, passedStyles));
  var handleChange = function handleChange2(data, e) {
    if (data.hex) {
      isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: "hex"
      }, e);
    } else if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: "rgb"
      }, e);
    }
  };
  return React.createElement(
    Raised,
    { styles: passedStyles },
    React.createElement(
      "div",
      { style: styles.material, className: "material-picker " + className },
      React.createElement(EditableInput, {
        style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
        label: "hex",
        value: hex,
        onChange: handleChange
      }),
      React.createElement(
        "div",
        { style: styles.split, className: "flexbox-fix" },
        React.createElement(
          "div",
          { style: styles.third },
          React.createElement(EditableInput, {
            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
            label: "r",
            value: rgb.r,
            onChange: handleChange
          })
        ),
        React.createElement(
          "div",
          { style: styles.third },
          React.createElement(EditableInput, {
            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
            label: "g",
            value: rgb.g,
            onChange: handleChange
          })
        ),
        React.createElement(
          "div",
          { style: styles.third },
          React.createElement(EditableInput, {
            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
            label: "b",
            value: rgb.b,
            onChange: handleChange
          })
        )
      )
    )
  );
};
ColorWrap(Material);
var PhotoshopPicker = function PhotoshopPicker2(_ref) {
  var onChange = _ref.onChange, rgb = _ref.rgb, hsv = _ref.hsv, hex = _ref.hex;
  var styles = _default$2({
    "default": {
      fields: {
        paddingTop: "5px",
        paddingBottom: "9px",
        width: "80px",
        position: "relative"
      },
      divider: {
        height: "5px"
      },
      RGBwrap: {
        position: "relative"
      },
      RGBinput: {
        marginLeft: "40%",
        width: "40%",
        height: "18px",
        border: "1px solid #888888",
        boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
        marginBottom: "5px",
        fontSize: "13px",
        paddingLeft: "3px",
        marginRight: "10px"
      },
      RGBlabel: {
        left: "0px",
        top: "0px",
        width: "34px",
        textTransform: "uppercase",
        fontSize: "13px",
        height: "18px",
        lineHeight: "22px",
        position: "absolute"
      },
      HEXwrap: {
        position: "relative"
      },
      HEXinput: {
        marginLeft: "20%",
        width: "80%",
        height: "18px",
        border: "1px solid #888888",
        boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
        marginBottom: "6px",
        fontSize: "13px",
        paddingLeft: "3px"
      },
      HEXlabel: {
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "14px",
        textTransform: "uppercase",
        fontSize: "13px",
        height: "18px",
        lineHeight: "22px"
      },
      fieldSymbols: {
        position: "absolute",
        top: "5px",
        right: "-7px",
        fontSize: "13px"
      },
      symbol: {
        height: "20px",
        lineHeight: "22px",
        paddingBottom: "7px"
      }
    }
  });
  var handleChange = function handleChange2(data, e) {
    if (data["#"]) {
      isValidHex(data["#"]) && onChange({
        hex: data["#"],
        source: "hex"
      }, e);
    } else if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: "rgb"
      }, e);
    } else if (data.h || data.s || data.v) {
      onChange({
        h: data.h || hsv.h,
        s: data.s || hsv.s,
        v: data.v || hsv.v,
        source: "hsv"
      }, e);
    }
  };
  return React.createElement(
    "div",
    { style: styles.fields },
    React.createElement(EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: "h",
      value: Math.round(hsv.h),
      onChange: handleChange
    }),
    React.createElement(EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: "s",
      value: Math.round(hsv.s * 100),
      onChange: handleChange
    }),
    React.createElement(EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: "v",
      value: Math.round(hsv.v * 100),
      onChange: handleChange
    }),
    React.createElement("div", { style: styles.divider }),
    React.createElement(EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: "r",
      value: rgb.r,
      onChange: handleChange
    }),
    React.createElement(EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: "g",
      value: rgb.g,
      onChange: handleChange
    }),
    React.createElement(EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: "b",
      value: rgb.b,
      onChange: handleChange
    }),
    React.createElement("div", { style: styles.divider }),
    React.createElement(EditableInput, {
      style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
      label: "#",
      value: hex.replace("#", ""),
      onChange: handleChange
    }),
    React.createElement(
      "div",
      { style: styles.fieldSymbols },
      React.createElement(
        "div",
        { style: styles.symbol },
        "\xB0"
      ),
      React.createElement(
        "div",
        { style: styles.symbol },
        "%"
      ),
      React.createElement(
        "div",
        { style: styles.symbol },
        "%"
      )
    )
  );
};
var PhotoshopPointerCircle$1 = function PhotoshopPointerCircle(_ref) {
  var hsl = _ref.hsl;
  var styles = _default$2({
    "default": {
      picker: {
        width: "12px",
        height: "12px",
        borderRadius: "6px",
        boxShadow: "inset 0 0 0 1px #fff",
        transform: "translate(-6px, -6px)"
      }
    },
    "black-outline": {
      picker: {
        boxShadow: "inset 0 0 0 1px #000"
      }
    }
  }, { "black-outline": hsl.l > 0.5 });
  return React.createElement("div", { style: styles.picker });
};
var PhotoshopPointerCircle2 = function PhotoshopPointerCircle3() {
  var styles = _default$2({
    "default": {
      triangle: {
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: "4px 0 4px 6px",
        borderColor: "transparent transparent transparent #fff",
        position: "absolute",
        top: "1px",
        left: "1px"
      },
      triangleBorder: {
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: "5px 0 5px 8px",
        borderColor: "transparent transparent transparent #555"
      },
      left: {
        Extend: "triangleBorder",
        transform: "translate(-13px, -4px)"
      },
      leftInside: {
        Extend: "triangle",
        transform: "translate(-8px, -5px)"
      },
      right: {
        Extend: "triangleBorder",
        transform: "translate(20px, -14px) rotate(180deg)"
      },
      rightInside: {
        Extend: "triangle",
        transform: "translate(-8px, -5px)"
      }
    }
  });
  return React.createElement(
    "div",
    { style: styles.pointer },
    React.createElement(
      "div",
      { style: styles.left },
      React.createElement("div", { style: styles.leftInside })
    ),
    React.createElement(
      "div",
      { style: styles.right },
      React.createElement("div", { style: styles.rightInside })
    )
  );
};
var PhotoshopButton = function PhotoshopButton2(_ref) {
  var onClick = _ref.onClick, label = _ref.label, children = _ref.children, active3 = _ref.active;
  var styles = _default$2({
    "default": {
      button: {
        backgroundImage: "linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)",
        border: "1px solid #878787",
        borderRadius: "2px",
        height: "20px",
        boxShadow: "0 1px 0 0 #EAEAEA",
        fontSize: "14px",
        color: "#000",
        lineHeight: "20px",
        textAlign: "center",
        marginBottom: "10px",
        cursor: "pointer"
      }
    },
    "active": {
      button: {
        boxShadow: "0 0 0 1px #878787"
      }
    }
  }, { active: active3 });
  return React.createElement(
    "div",
    { style: styles.button, onClick },
    label || children
  );
};
var PhotoshopPreviews = function PhotoshopPreviews2(_ref) {
  var rgb = _ref.rgb, currentColor = _ref.currentColor;
  var styles = _default$2({
    "default": {
      swatches: {
        border: "1px solid #B3B3B3",
        borderBottom: "1px solid #F0F0F0",
        marginBottom: "2px",
        marginTop: "1px"
      },
      new: {
        height: "34px",
        background: "rgb(" + rgb.r + "," + rgb.g + ", " + rgb.b + ")",
        boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000"
      },
      current: {
        height: "34px",
        background: currentColor,
        boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000"
      },
      label: {
        fontSize: "14px",
        color: "#000",
        textAlign: "center"
      }
    }
  });
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { style: styles.label },
      "new"
    ),
    React.createElement(
      "div",
      { style: styles.swatches },
      React.createElement("div", { style: styles.new }),
      React.createElement("div", { style: styles.current })
    ),
    React.createElement(
      "div",
      { style: styles.label },
      "current"
    )
  );
};
var _createClass$1 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var Photoshop = function(_React$Component) {
  _inherits(Photoshop2, _React$Component);
  function Photoshop2(props) {
    _classCallCheck(this, Photoshop2);
    var _this = _possibleConstructorReturn(this, (Photoshop2.__proto__ || Object.getPrototypeOf(Photoshop2)).call(this));
    _this.state = {
      currentColor: props.hex
    };
    return _this;
  }
  _createClass$1(Photoshop2, [{
    key: "render",
    value: function render3() {
      var _props = this.props, _props$styles = _props.styles, passedStyles = _props$styles === void 0 ? {} : _props$styles, _props$className = _props.className, className = _props$className === void 0 ? "" : _props$className;
      var styles = _default$2(merge$1({
        "default": {
          picker: {
            background: "#DCDCDC",
            borderRadius: "4px",
            boxShadow: "0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)",
            boxSizing: "initial",
            width: "513px"
          },
          head: {
            backgroundImage: "linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)",
            borderBottom: "1px solid #B1B1B1",
            boxShadow: "inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)",
            height: "23px",
            lineHeight: "24px",
            borderRadius: "4px 4px 0 0",
            fontSize: "13px",
            color: "#4D4D4D",
            textAlign: "center"
          },
          body: {
            padding: "15px 15px 0",
            display: "flex"
          },
          saturation: {
            width: "256px",
            height: "256px",
            position: "relative",
            border: "2px solid #B3B3B3",
            borderBottom: "2px solid #F0F0F0",
            overflow: "hidden"
          },
          hue: {
            position: "relative",
            height: "256px",
            width: "19px",
            marginLeft: "10px",
            border: "2px solid #B3B3B3",
            borderBottom: "2px solid #F0F0F0"
          },
          controls: {
            width: "180px",
            marginLeft: "10px"
          },
          top: {
            display: "flex"
          },
          previews: {
            width: "60px"
          },
          actions: {
            flex: "1",
            marginLeft: "20px"
          }
        }
      }, passedStyles));
      return React.createElement(
        "div",
        { style: styles.picker, className: "photoshop-picker " + className },
        React.createElement(
          "div",
          { style: styles.head },
          this.props.header
        ),
        React.createElement(
          "div",
          { style: styles.body, className: "flexbox-fix" },
          React.createElement(
            "div",
            { style: styles.saturation },
            React.createElement(Saturation, {
              hsl: this.props.hsl,
              hsv: this.props.hsv,
              pointer: PhotoshopPointerCircle$1,
              onChange: this.props.onChange
            })
          ),
          React.createElement(
            "div",
            { style: styles.hue },
            React.createElement(Hue, {
              direction: "vertical",
              hsl: this.props.hsl,
              pointer: PhotoshopPointerCircle2,
              onChange: this.props.onChange
            })
          ),
          React.createElement(
            "div",
            { style: styles.controls },
            React.createElement(
              "div",
              { style: styles.top, className: "flexbox-fix" },
              React.createElement(
                "div",
                { style: styles.previews },
                React.createElement(PhotoshopPreviews, {
                  rgb: this.props.rgb,
                  currentColor: this.state.currentColor
                })
              ),
              React.createElement(
                "div",
                { style: styles.actions },
                React.createElement(PhotoshopButton, { label: "OK", onClick: this.props.onAccept, active: true }),
                React.createElement(PhotoshopButton, { label: "Cancel", onClick: this.props.onCancel }),
                React.createElement(PhotoshopPicker, {
                  onChange: this.props.onChange,
                  rgb: this.props.rgb,
                  hsv: this.props.hsv,
                  hex: this.props.hex
                })
              )
            )
          )
        )
      );
    }
  }]);
  return Photoshop2;
}(React.Component);
Photoshop.propTypes = {
  header: PropTypes.string,
  styles: PropTypes.object
};
Photoshop.defaultProps = {
  header: "Color Picker",
  styles: {}
};
ColorWrap(Photoshop);
var SketchFields = function SketchFields2(_ref) {
  var onChange = _ref.onChange, rgb = _ref.rgb, hsl = _ref.hsl, hex = _ref.hex, disableAlpha = _ref.disableAlpha;
  var styles = _default$2({
    "default": {
      fields: {
        display: "flex",
        paddingTop: "4px"
      },
      single: {
        flex: "1",
        paddingLeft: "6px"
      },
      alpha: {
        flex: "1",
        paddingLeft: "6px"
      },
      double: {
        flex: "2"
      },
      input: {
        width: "80%",
        padding: "4px 10% 3px",
        border: "none",
        boxShadow: "inset 0 0 0 1px #ccc",
        fontSize: "11px"
      },
      label: {
        display: "block",
        textAlign: "center",
        fontSize: "11px",
        color: "#222",
        paddingTop: "3px",
        paddingBottom: "4px",
        textTransform: "capitalize"
      }
    },
    "disableAlpha": {
      alpha: {
        display: "none"
      }
    }
  }, { disableAlpha });
  var handleChange = function handleChange2(data, e) {
    if (data.hex) {
      isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: "hex"
      }, e);
    } else if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        a: rgb.a,
        source: "rgb"
      }, e);
    } else if (data.a) {
      if (data.a < 0) {
        data.a = 0;
      } else if (data.a > 100) {
        data.a = 100;
      }
      data.a /= 100;
      onChange({
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
        a: data.a,
        source: "rgb"
      }, e);
    }
  };
  return React.createElement(
    "div",
    { style: styles.fields, className: "flexbox-fix" },
    React.createElement(
      "div",
      { style: styles.double },
      React.createElement(EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: "hex",
        value: hex.replace("#", ""),
        onChange: handleChange
      })
    ),
    React.createElement(
      "div",
      { style: styles.single },
      React.createElement(EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: "r",
        value: rgb.r,
        onChange: handleChange,
        dragLabel: "true",
        dragMax: "255"
      })
    ),
    React.createElement(
      "div",
      { style: styles.single },
      React.createElement(EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: "g",
        value: rgb.g,
        onChange: handleChange,
        dragLabel: "true",
        dragMax: "255"
      })
    ),
    React.createElement(
      "div",
      { style: styles.single },
      React.createElement(EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: "b",
        value: rgb.b,
        onChange: handleChange,
        dragLabel: "true",
        dragMax: "255"
      })
    ),
    React.createElement(
      "div",
      { style: styles.alpha },
      React.createElement(EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: "a",
        value: Math.round(rgb.a * 100),
        onChange: handleChange,
        dragLabel: "true",
        dragMax: "100"
      })
    )
  );
};
var _extends$3 = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var SketchPresetColors = function SketchPresetColors2(_ref) {
  var colors = _ref.colors, _ref$onClick = _ref.onClick, onClick = _ref$onClick === void 0 ? function() {
  } : _ref$onClick, onSwatchHover = _ref.onSwatchHover;
  var styles = _default$2({
    "default": {
      colors: {
        margin: "0 -10px",
        padding: "10px 0 0 10px",
        borderTop: "1px solid #eee",
        display: "flex",
        flexWrap: "wrap",
        position: "relative"
      },
      swatchWrap: {
        width: "16px",
        height: "16px",
        margin: "0 10px 10px 0"
      },
      swatch: {
        borderRadius: "3px",
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15)"
      }
    },
    "no-presets": {
      colors: {
        display: "none"
      }
    }
  }, {
    "no-presets": !colors || !colors.length
  });
  var handleClick = function handleClick2(hex, e) {
    onClick({
      hex,
      source: "hex"
    }, e);
  };
  return React.createElement(
    "div",
    { style: styles.colors, className: "flexbox-fix" },
    colors.map(function(colorObjOrString) {
      var c = typeof colorObjOrString === "string" ? { color: colorObjOrString } : colorObjOrString;
      var key = "" + c.color + (c.title || "");
      return React.createElement(
        "div",
        { key, style: styles.swatchWrap },
        React.createElement(Swatch$1, _extends$3({}, c, {
          style: styles.swatch,
          onClick: handleClick,
          onHover: onSwatchHover,
          focusStyle: {
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px " + c.color
          }
        }))
      );
    })
  );
};
SketchPresetColors.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
    color: PropTypes.string,
    title: PropTypes.string
  })])).isRequired
};
var _extends$2 = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var Sketch = function Sketch2(_ref) {
  var width = _ref.width, rgb = _ref.rgb, hex = _ref.hex, hsv = _ref.hsv, hsl = _ref.hsl, onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, disableAlpha = _ref.disableAlpha, presetColors = _ref.presetColors, renderers = _ref.renderers, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles = _default$2(merge$1({
    "default": _extends$2({
      picker: {
        width,
        padding: "10px 10px 0",
        boxSizing: "initial",
        background: "#fff",
        borderRadius: "4px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)"
      },
      saturation: {
        width: "100%",
        paddingBottom: "75%",
        position: "relative",
        overflow: "hidden"
      },
      Saturation: {
        radius: "3px",
        shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
      },
      controls: {
        display: "flex"
      },
      sliders: {
        padding: "4px 0",
        flex: "1"
      },
      color: {
        width: "24px",
        height: "24px",
        position: "relative",
        marginTop: "4px",
        marginLeft: "4px",
        borderRadius: "3px"
      },
      activeColor: {
        absolute: "0px 0px 0px 0px",
        borderRadius: "2px",
        background: "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + "," + rgb.a + ")",
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
      },
      hue: {
        position: "relative",
        height: "10px",
        overflow: "hidden"
      },
      Hue: {
        radius: "2px",
        shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
      },
      alpha: {
        position: "relative",
        height: "10px",
        marginTop: "4px",
        overflow: "hidden"
      },
      Alpha: {
        radius: "2px",
        shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
      }
    }, passedStyles),
    "disableAlpha": {
      color: {
        height: "10px"
      },
      hue: {
        height: "10px"
      },
      alpha: {
        display: "none"
      }
    }
  }, passedStyles), { disableAlpha });
  return React.createElement(
    "div",
    { style: styles.picker, className: "sketch-picker " + className },
    React.createElement(
      "div",
      { style: styles.saturation },
      React.createElement(Saturation, {
        style: styles.Saturation,
        hsl,
        hsv,
        onChange
      })
    ),
    React.createElement(
      "div",
      { style: styles.controls, className: "flexbox-fix" },
      React.createElement(
        "div",
        { style: styles.sliders },
        React.createElement(
          "div",
          { style: styles.hue },
          React.createElement(Hue, {
            style: styles.Hue,
            hsl,
            onChange
          })
        ),
        React.createElement(
          "div",
          { style: styles.alpha },
          React.createElement(Alpha, {
            style: styles.Alpha,
            rgb,
            hsl,
            renderers,
            onChange
          })
        )
      ),
      React.createElement(
        "div",
        { style: styles.color },
        React.createElement(Checkboard, null),
        React.createElement("div", { style: styles.activeColor })
      )
    ),
    React.createElement(SketchFields, {
      rgb,
      hsl,
      hex,
      onChange,
      disableAlpha
    }),
    React.createElement(SketchPresetColors, {
      colors: presetColors,
      onClick: onChange,
      onSwatchHover
    })
  );
};
Sketch.propTypes = {
  disableAlpha: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  styles: PropTypes.object
};
Sketch.defaultProps = {
  disableAlpha: false,
  width: 200,
  styles: {},
  presetColors: ["#D0021B", "#F5A623", "#F8E71C", "#8B572A", "#7ED321", "#417505", "#BD10E0", "#9013FE", "#4A90E2", "#50E3C2", "#B8E986", "#000000", "#4A4A4A", "#9B9B9B", "#FFFFFF"]
};
var SketchPicker = ColorWrap(Sketch);
var SliderSwatch = function SliderSwatch2(_ref) {
  var hsl = _ref.hsl, offset2 = _ref.offset, _ref$onClick = _ref.onClick, onClick = _ref$onClick === void 0 ? function() {
  } : _ref$onClick, active3 = _ref.active, first = _ref.first, last = _ref.last;
  var styles = _default$2({
    "default": {
      swatch: {
        height: "12px",
        background: "hsl(" + hsl.h + ", 50%, " + offset2 * 100 + "%)",
        cursor: "pointer"
      }
    },
    "first": {
      swatch: {
        borderRadius: "2px 0 0 2px"
      }
    },
    "last": {
      swatch: {
        borderRadius: "0 2px 2px 0"
      }
    },
    "active": {
      swatch: {
        transform: "scaleY(1.8)",
        borderRadius: "3.6px/2px"
      }
    }
  }, { active: active3, first, last });
  var handleClick = function handleClick2(e) {
    return onClick({
      h: hsl.h,
      s: 0.5,
      l: offset2,
      source: "hsl"
    }, e);
  };
  return React.createElement("div", { style: styles.swatch, onClick: handleClick });
};
var SliderSwatches = function SliderSwatches2(_ref) {
  var onClick = _ref.onClick, hsl = _ref.hsl;
  var styles = _default$2({
    "default": {
      swatches: {
        marginTop: "20px"
      },
      swatch: {
        boxSizing: "border-box",
        width: "20%",
        paddingRight: "1px",
        float: "left"
      },
      clear: {
        clear: "both"
      }
    }
  });
  var epsilon = 0.1;
  return React.createElement(
    "div",
    { style: styles.swatches },
    React.createElement(
      "div",
      { style: styles.swatch },
      React.createElement(SliderSwatch, {
        hsl,
        offset: ".80",
        active: Math.abs(hsl.l - 0.8) < epsilon && Math.abs(hsl.s - 0.5) < epsilon,
        onClick,
        first: true
      })
    ),
    React.createElement(
      "div",
      { style: styles.swatch },
      React.createElement(SliderSwatch, {
        hsl,
        offset: ".65",
        active: Math.abs(hsl.l - 0.65) < epsilon && Math.abs(hsl.s - 0.5) < epsilon,
        onClick
      })
    ),
    React.createElement(
      "div",
      { style: styles.swatch },
      React.createElement(SliderSwatch, {
        hsl,
        offset: ".50",
        active: Math.abs(hsl.l - 0.5) < epsilon && Math.abs(hsl.s - 0.5) < epsilon,
        onClick
      })
    ),
    React.createElement(
      "div",
      { style: styles.swatch },
      React.createElement(SliderSwatch, {
        hsl,
        offset: ".35",
        active: Math.abs(hsl.l - 0.35) < epsilon && Math.abs(hsl.s - 0.5) < epsilon,
        onClick
      })
    ),
    React.createElement(
      "div",
      { style: styles.swatch },
      React.createElement(SliderSwatch, {
        hsl,
        offset: ".20",
        active: Math.abs(hsl.l - 0.2) < epsilon && Math.abs(hsl.s - 0.5) < epsilon,
        onClick,
        last: true
      })
    ),
    React.createElement("div", { style: styles.clear })
  );
};
var SliderPointer2 = function SliderPointer3() {
  var styles = _default$2({
    "default": {
      picker: {
        width: "14px",
        height: "14px",
        borderRadius: "6px",
        transform: "translate(-7px, -1px)",
        backgroundColor: "rgb(248, 248, 248)",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
      }
    }
  });
  return React.createElement("div", { style: styles.picker });
};
var Slider = function Slider2(_ref) {
  var hsl = _ref.hsl, onChange = _ref.onChange, pointer = _ref.pointer, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles = _default$2(merge$1({
    "default": {
      hue: {
        height: "12px",
        position: "relative"
      },
      Hue: {
        radius: "2px"
      }
    }
  }, passedStyles));
  return React.createElement(
    "div",
    { style: styles.wrap || {}, className: "slider-picker " + className },
    React.createElement(
      "div",
      { style: styles.hue },
      React.createElement(Hue, {
        style: styles.Hue,
        hsl,
        pointer,
        onChange
      })
    ),
    React.createElement(
      "div",
      { style: styles.swatches },
      React.createElement(SliderSwatches, { hsl, onClick: onChange })
    )
  );
};
Slider.propTypes = {
  styles: PropTypes.object
};
Slider.defaultProps = {
  pointer: SliderPointer2,
  styles: {}
};
ColorWrap(Slider);
var CheckIcon = {};
Object.defineProperty(CheckIcon, "__esModule", {
  value: true
});
var _extends$1 = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _react = React;
var _react2 = _interopRequireDefault(_react);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _objectWithoutProperties$1(obj, keys2) {
  var target = {};
  for (var i in obj) {
    if (keys2.indexOf(i) >= 0)
      continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i))
      continue;
    target[i] = obj[i];
  }
  return target;
}
var DEFAULT_SIZE = 24;
var _default = CheckIcon.default = function(_ref) {
  var _ref$fill = _ref.fill, fill = _ref$fill === void 0 ? "currentColor" : _ref$fill, _ref$width = _ref.width, width = _ref$width === void 0 ? DEFAULT_SIZE : _ref$width, _ref$height = _ref.height, height = _ref$height === void 0 ? DEFAULT_SIZE : _ref$height, _ref$style = _ref.style, style = _ref$style === void 0 ? {} : _ref$style, props = _objectWithoutProperties$1(_ref, ["fill", "width", "height", "style"]);
  return _react2.default.createElement(
    "svg",
    _extends$1({
      viewBox: "0 0 " + DEFAULT_SIZE + " " + DEFAULT_SIZE,
      style: _extends$1({ fill, width, height }, style)
    }, props),
    _react2.default.createElement("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
  );
};
var SwatchesColor = function SwatchesColor2(_ref) {
  var color = _ref.color, _ref$onClick = _ref.onClick, onClick = _ref$onClick === void 0 ? function() {
  } : _ref$onClick, onSwatchHover = _ref.onSwatchHover, first = _ref.first, last = _ref.last, active3 = _ref.active;
  var styles = _default$2({
    "default": {
      color: {
        width: "40px",
        height: "24px",
        cursor: "pointer",
        background: color,
        marginBottom: "1px"
      },
      check: {
        color: getContrastingColor(color),
        marginLeft: "8px",
        display: "none"
      }
    },
    "first": {
      color: {
        overflow: "hidden",
        borderRadius: "2px 2px 0 0"
      }
    },
    "last": {
      color: {
        overflow: "hidden",
        borderRadius: "0 0 2px 2px"
      }
    },
    "active": {
      check: {
        display: "block"
      }
    },
    "color-#FFFFFF": {
      color: {
        boxShadow: "inset 0 0 0 1px #ddd"
      },
      check: {
        color: "#333"
      }
    },
    "transparent": {
      check: {
        color: "#333"
      }
    }
  }, {
    first,
    last,
    active: active3,
    "color-#FFFFFF": color === "#FFFFFF",
    "transparent": color === "transparent"
  });
  return React.createElement(
    Swatch$1,
    {
      color,
      style: styles.color,
      onClick,
      onHover: onSwatchHover,
      focusStyle: { boxShadow: "0 0 4px " + color }
    },
    React.createElement(
      "div",
      { style: styles.check },
      React.createElement(_default, null)
    )
  );
};
var SwatchesGroup = function SwatchesGroup2(_ref) {
  var onClick = _ref.onClick, onSwatchHover = _ref.onSwatchHover, group = _ref.group, active3 = _ref.active;
  var styles = _default$2({
    "default": {
      group: {
        paddingBottom: "10px",
        width: "40px",
        float: "left",
        marginRight: "10px"
      }
    }
  });
  return React.createElement(
    "div",
    { style: styles.group },
    map(group, function(color, i) {
      return React.createElement(SwatchesColor, {
        key: color,
        color,
        active: color.toLowerCase() === active3,
        first: i === 0,
        last: i === group.length - 1,
        onClick,
        onSwatchHover
      });
    })
  );
};
var Swatches = function Swatches2(_ref) {
  var width = _ref.width, height = _ref.height, onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, colors = _ref.colors, hex = _ref.hex, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles = _default$2(merge$1({
    "default": {
      picker: {
        width,
        height
      },
      overflow: {
        height,
        overflowY: "scroll"
      },
      body: {
        padding: "16px 0 6px 16px"
      },
      clear: {
        clear: "both"
      }
    }
  }, passedStyles));
  var handleChange = function handleChange2(data, e) {
    return onChange({ hex: data, source: "hex" }, e);
  };
  return React.createElement(
    "div",
    { style: styles.picker, className: "swatches-picker " + className },
    React.createElement(
      Raised,
      null,
      React.createElement(
        "div",
        { style: styles.overflow },
        React.createElement(
          "div",
          { style: styles.body },
          map(colors, function(group) {
            return React.createElement(SwatchesGroup, {
              key: group.toString(),
              group,
              active: hex,
              onClick: handleChange,
              onSwatchHover
            });
          }),
          React.createElement("div", { style: styles.clear })
        )
      )
    )
  );
};
Swatches.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  colors: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  styles: PropTypes.object
};
Swatches.defaultProps = {
  width: 320,
  height: 240,
  colors: [[red["900"], red["700"], red["500"], red["300"], red["100"]], [pink["900"], pink["700"], pink["500"], pink["300"], pink["100"]], [purple["900"], purple["700"], purple["500"], purple["300"], purple["100"]], [deepPurple["900"], deepPurple["700"], deepPurple["500"], deepPurple["300"], deepPurple["100"]], [indigo["900"], indigo["700"], indigo["500"], indigo["300"], indigo["100"]], [blue["900"], blue["700"], blue["500"], blue["300"], blue["100"]], [lightBlue["900"], lightBlue["700"], lightBlue["500"], lightBlue["300"], lightBlue["100"]], [cyan["900"], cyan["700"], cyan["500"], cyan["300"], cyan["100"]], [teal["900"], teal["700"], teal["500"], teal["300"], teal["100"]], ["#194D33", green["700"], green["500"], green["300"], green["100"]], [lightGreen["900"], lightGreen["700"], lightGreen["500"], lightGreen["300"], lightGreen["100"]], [lime["900"], lime["700"], lime["500"], lime["300"], lime["100"]], [yellow["900"], yellow["700"], yellow["500"], yellow["300"], yellow["100"]], [amber["900"], amber["700"], amber["500"], amber["300"], amber["100"]], [orange["900"], orange["700"], orange["500"], orange["300"], orange["100"]], [deepOrange["900"], deepOrange["700"], deepOrange["500"], deepOrange["300"], deepOrange["100"]], [brown["900"], brown["700"], brown["500"], brown["300"], brown["100"]], [blueGrey["900"], blueGrey["700"], blueGrey["500"], blueGrey["300"], blueGrey["100"]], ["#000000", "#525252", "#969696", "#D9D9D9", "#FFFFFF"]],
  styles: {}
};
ColorWrap(Swatches);
var Twitter = function Twitter2(_ref) {
  var onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, hex = _ref.hex, colors = _ref.colors, width = _ref.width, triangle = _ref.triangle, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles = _default$2(merge$1({
    "default": {
      card: {
        width,
        background: "#fff",
        border: "0 solid rgba(0,0,0,0.25)",
        boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
        borderRadius: "4px",
        position: "relative"
      },
      body: {
        padding: "15px 9px 9px 15px"
      },
      label: {
        fontSize: "18px",
        color: "#fff"
      },
      triangle: {
        width: "0px",
        height: "0px",
        borderStyle: "solid",
        borderWidth: "0 9px 10px 9px",
        borderColor: "transparent transparent #fff transparent",
        position: "absolute"
      },
      triangleShadow: {
        width: "0px",
        height: "0px",
        borderStyle: "solid",
        borderWidth: "0 9px 10px 9px",
        borderColor: "transparent transparent rgba(0,0,0,.1) transparent",
        position: "absolute"
      },
      hash: {
        background: "#F0F0F0",
        height: "30px",
        width: "30px",
        borderRadius: "4px 0 0 4px",
        float: "left",
        color: "#98A1A4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      input: {
        width: "100px",
        fontSize: "14px",
        color: "#666",
        border: "0px",
        outline: "none",
        height: "28px",
        boxShadow: "inset 0 0 0 1px #F0F0F0",
        boxSizing: "content-box",
        borderRadius: "0 4px 4px 0",
        float: "left",
        paddingLeft: "8px"
      },
      swatch: {
        width: "30px",
        height: "30px",
        float: "left",
        borderRadius: "4px",
        margin: "0 6px 6px 0"
      },
      clear: {
        clear: "both"
      }
    },
    "hide-triangle": {
      triangle: {
        display: "none"
      },
      triangleShadow: {
        display: "none"
      }
    },
    "top-left-triangle": {
      triangle: {
        top: "-10px",
        left: "12px"
      },
      triangleShadow: {
        top: "-11px",
        left: "12px"
      }
    },
    "top-right-triangle": {
      triangle: {
        top: "-10px",
        right: "12px"
      },
      triangleShadow: {
        top: "-11px",
        right: "12px"
      }
    }
  }, passedStyles), {
    "hide-triangle": triangle === "hide",
    "top-left-triangle": triangle === "top-left",
    "top-right-triangle": triangle === "top-right"
  });
  var handleChange = function handleChange2(hexcode, e) {
    isValidHex(hexcode) && onChange({
      hex: hexcode,
      source: "hex"
    }, e);
  };
  return React.createElement(
    "div",
    { style: styles.card, className: "twitter-picker " + className },
    React.createElement("div", { style: styles.triangleShadow }),
    React.createElement("div", { style: styles.triangle }),
    React.createElement(
      "div",
      { style: styles.body },
      map(colors, function(c, i) {
        return React.createElement(Swatch$1, {
          key: i,
          color: c,
          hex: c,
          style: styles.swatch,
          onClick: handleChange,
          onHover: onSwatchHover,
          focusStyle: {
            boxShadow: "0 0 4px " + c
          }
        });
      }),
      React.createElement(
        "div",
        { style: styles.hash },
        "#"
      ),
      React.createElement(EditableInput, {
        label: null,
        style: { input: styles.input },
        value: hex.replace("#", ""),
        onChange: handleChange
      }),
      React.createElement("div", { style: styles.clear })
    )
  );
};
Twitter.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  triangle: PropTypes.oneOf(["hide", "top-left", "top-right"]),
  colors: PropTypes.arrayOf(PropTypes.string),
  styles: PropTypes.object
};
Twitter.defaultProps = {
  width: 276,
  colors: ["#FF6900", "#FCB900", "#7BDCB5", "#00D084", "#8ED1FC", "#0693E3", "#ABB8C3", "#EB144C", "#F78DA7", "#9900EF"],
  triangle: "top-left",
  styles: {}
};
ColorWrap(Twitter);
var GooglePointerCircle = function GooglePointerCircle2(props) {
  var styles = _default$2({
    "default": {
      picker: {
        width: "20px",
        height: "20px",
        borderRadius: "22px",
        border: "2px #fff solid",
        transform: "translate(-12px, -13px)",
        background: "hsl(" + Math.round(props.hsl.h) + ", " + Math.round(props.hsl.s * 100) + "%, " + Math.round(props.hsl.l * 100) + "%)"
      }
    }
  });
  return React.createElement("div", { style: styles.picker });
};
GooglePointerCircle.propTypes = {
  hsl: PropTypes.shape({
    h: PropTypes.number,
    s: PropTypes.number,
    l: PropTypes.number,
    a: PropTypes.number
  })
};
GooglePointerCircle.defaultProps = {
  hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 }
};
var GooglePointer = function GooglePointer2(props) {
  var styles = _default$2({
    "default": {
      picker: {
        width: "20px",
        height: "20px",
        borderRadius: "22px",
        transform: "translate(-10px, -7px)",
        background: "hsl(" + Math.round(props.hsl.h) + ", 100%, 50%)",
        border: "2px white solid"
      }
    }
  });
  return React.createElement("div", { style: styles.picker });
};
GooglePointer.propTypes = {
  hsl: PropTypes.shape({
    h: PropTypes.number,
    s: PropTypes.number,
    l: PropTypes.number,
    a: PropTypes.number
  })
};
GooglePointer.defaultProps = {
  hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 }
};
var GoogleFields = function GoogleFields2(_ref) {
  var onChange = _ref.onChange, rgb = _ref.rgb, hsl = _ref.hsl, hex = _ref.hex, hsv = _ref.hsv;
  var handleChange = function handleChange2(data, e) {
    if (data.hex) {
      isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: "hex"
      }, e);
    } else if (data.rgb) {
      var values = data.rgb.split(",");
      isvalidColorString(data.rgb, "rgb") && onChange({
        r: values[0],
        g: values[1],
        b: values[2],
        a: 1,
        source: "rgb"
      }, e);
    } else if (data.hsv) {
      var _values = data.hsv.split(",");
      if (isvalidColorString(data.hsv, "hsv")) {
        _values[2] = _values[2].replace("%", "");
        _values[1] = _values[1].replace("%", "");
        _values[0] = _values[0].replace("\xB0", "");
        if (_values[1] == 1) {
          _values[1] = 0.01;
        } else if (_values[2] == 1) {
          _values[2] = 0.01;
        }
        onChange({
          h: Number(_values[0]),
          s: Number(_values[1]),
          v: Number(_values[2]),
          source: "hsv"
        }, e);
      }
    } else if (data.hsl) {
      var _values2 = data.hsl.split(",");
      if (isvalidColorString(data.hsl, "hsl")) {
        _values2[2] = _values2[2].replace("%", "");
        _values2[1] = _values2[1].replace("%", "");
        _values2[0] = _values2[0].replace("\xB0", "");
        if (hsvValue[1] == 1) {
          hsvValue[1] = 0.01;
        } else if (hsvValue[2] == 1) {
          hsvValue[2] = 0.01;
        }
        onChange({
          h: Number(_values2[0]),
          s: Number(_values2[1]),
          v: Number(_values2[2]),
          source: "hsl"
        }, e);
      }
    }
  };
  var styles = _default$2({
    "default": {
      wrap: {
        display: "flex",
        height: "100px",
        marginTop: "4px"
      },
      fields: {
        width: "100%"
      },
      column: {
        paddingTop: "10px",
        display: "flex",
        justifyContent: "space-between"
      },
      double: {
        padding: "0px 4.4px",
        boxSizing: "border-box"
      },
      input: {
        width: "100%",
        height: "38px",
        boxSizing: "border-box",
        padding: "4px 10% 3px",
        textAlign: "center",
        border: "1px solid #dadce0",
        fontSize: "11px",
        textTransform: "lowercase",
        borderRadius: "5px",
        outline: "none",
        fontFamily: "Roboto,Arial,sans-serif"
      },
      input2: {
        height: "38px",
        width: "100%",
        border: "1px solid #dadce0",
        boxSizing: "border-box",
        fontSize: "11px",
        textTransform: "lowercase",
        borderRadius: "5px",
        outline: "none",
        paddingLeft: "10px",
        fontFamily: "Roboto,Arial,sans-serif"
      },
      label: {
        textAlign: "center",
        fontSize: "12px",
        background: "#fff",
        position: "absolute",
        textTransform: "uppercase",
        color: "#3c4043",
        width: "35px",
        top: "-6px",
        left: "0",
        right: "0",
        marginLeft: "auto",
        marginRight: "auto",
        fontFamily: "Roboto,Arial,sans-serif"
      },
      label2: {
        left: "10px",
        textAlign: "center",
        fontSize: "12px",
        background: "#fff",
        position: "absolute",
        textTransform: "uppercase",
        color: "#3c4043",
        width: "32px",
        top: "-6px",
        fontFamily: "Roboto,Arial,sans-serif"
      },
      single: {
        flexGrow: "1",
        margin: "0px 4.4px"
      }
    }
  });
  var rgbValue = rgb.r + ", " + rgb.g + ", " + rgb.b;
  var hslValue = Math.round(hsl.h) + "\xB0, " + Math.round(hsl.s * 100) + "%, " + Math.round(hsl.l * 100) + "%";
  var hsvValue = Math.round(hsv.h) + "\xB0, " + Math.round(hsv.s * 100) + "%, " + Math.round(hsv.v * 100) + "%";
  return React.createElement(
    "div",
    { style: styles.wrap, className: "flexbox-fix" },
    React.createElement(
      "div",
      { style: styles.fields },
      React.createElement(
        "div",
        { style: styles.double },
        React.createElement(EditableInput, {
          style: { input: styles.input, label: styles.label },
          label: "hex",
          value: hex,
          onChange: handleChange
        })
      ),
      React.createElement(
        "div",
        { style: styles.column },
        React.createElement(
          "div",
          { style: styles.single },
          React.createElement(EditableInput, {
            style: { input: styles.input2, label: styles.label2 },
            label: "rgb",
            value: rgbValue,
            onChange: handleChange
          })
        ),
        React.createElement(
          "div",
          { style: styles.single },
          React.createElement(EditableInput, {
            style: { input: styles.input2, label: styles.label2 },
            label: "hsv",
            value: hsvValue,
            onChange: handleChange
          })
        ),
        React.createElement(
          "div",
          { style: styles.single },
          React.createElement(EditableInput, {
            style: { input: styles.input2, label: styles.label2 },
            label: "hsl",
            value: hslValue,
            onChange: handleChange
          })
        )
      )
    )
  );
};
var Google = function Google2(_ref) {
  var width = _ref.width, onChange = _ref.onChange, rgb = _ref.rgb, hsl = _ref.hsl, hsv = _ref.hsv, hex = _ref.hex, header = _ref.header, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles = _default$2(merge$1({
    "default": {
      picker: {
        width,
        background: "#fff",
        border: "1px solid #dfe1e5",
        boxSizing: "initial",
        display: "flex",
        flexWrap: "wrap",
        borderRadius: "8px 8px 0px 0px"
      },
      head: {
        height: "57px",
        width: "100%",
        paddingTop: "16px",
        paddingBottom: "16px",
        paddingLeft: "16px",
        fontSize: "20px",
        boxSizing: "border-box",
        fontFamily: "Roboto-Regular,HelveticaNeue,Arial,sans-serif"
      },
      saturation: {
        width: "70%",
        padding: "0px",
        position: "relative",
        overflow: "hidden"
      },
      swatch: {
        width: "30%",
        height: "228px",
        padding: "0px",
        background: "rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", 1)",
        position: "relative",
        overflow: "hidden"
      },
      body: {
        margin: "auto",
        width: "95%"
      },
      controls: {
        display: "flex",
        boxSizing: "border-box",
        height: "52px",
        paddingTop: "22px"
      },
      color: {
        width: "32px"
      },
      hue: {
        height: "8px",
        position: "relative",
        margin: "0px 16px 0px 16px",
        width: "100%"
      },
      Hue: {
        radius: "2px"
      }
    }
  }, passedStyles));
  return React.createElement(
    "div",
    { style: styles.picker, className: "google-picker " + className },
    React.createElement(
      "div",
      { style: styles.head },
      header
    ),
    React.createElement("div", { style: styles.swatch }),
    React.createElement(
      "div",
      { style: styles.saturation },
      React.createElement(Saturation, {
        hsl,
        hsv,
        pointer: GooglePointerCircle,
        onChange
      })
    ),
    React.createElement(
      "div",
      { style: styles.body },
      React.createElement(
        "div",
        { style: styles.controls, className: "flexbox-fix" },
        React.createElement(
          "div",
          { style: styles.hue },
          React.createElement(Hue, {
            style: styles.Hue,
            hsl,
            radius: "4px",
            pointer: GooglePointer,
            onChange
          })
        )
      ),
      React.createElement(GoogleFields, {
        rgb,
        hsl,
        hex,
        hsv,
        onChange
      })
    )
  );
};
Google.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  styles: PropTypes.object,
  header: PropTypes.string
};
Google.defaultProps = {
  width: 652,
  styles: {},
  header: "Color picker"
};
ColorWrap(Google);
var colorPicker = "";
var ColorPicker = function ColorPicker2(props) {
  var _props$pickerType = props.pickerType, pickerType = _props$pickerType === void 0 ? "sketch" : _props$pickerType, _props$color = props.color, color = _props$color === void 0 ? "#fff" : _props$color, _props$onChange = props.onChange, onChange = _props$onChange === void 0 ? function() {
  } : _props$onChange, _props$onClickOutside = props.onClickOutside, onClickOutside = _props$onClickOutside === void 0 ? function() {
  } : _props$onClickOutside;
  var pickers = {
    sketch: ColorPickerSketch,
    compact: ColorPickerCompact
  };
  var colorPickerRef = React.useRef(null);
  var Component2 = pickers[pickerType];
  UTILS.whenUserClickOutsideTheElement(colorPickerRef, onClickOutside);
  if (!Component2)
    return null;
  return /* @__PURE__ */ React.createElement("div", {
    className: "rct-color-picker rct-color-picker-".concat(pickerType),
    ref: colorPickerRef
  }, /* @__PURE__ */ React.createElement(Component2, {
    color,
    onChange
  }));
};
var ColorPickerCompact = function ColorPickerCompact2(props) {
  var onChange = props.onChange;
  return /* @__PURE__ */ React.createElement(CompactPicker, {
    onChangeComplete: function onChangeComplete(color) {
      return onChange(color.hex);
    }
  });
};
var ColorPickerSketch = function ColorPickerSketch2(props) {
  var firstColor = props.color, onChange = props.onChange;
  var _React$useState = React.useState(firstColor), _React$useState2 = _slicedToArray(_React$useState, 2), color = _React$useState2[0], setColor = _React$useState2[1];
  return /* @__PURE__ */ React.createElement(SketchPicker, {
    color,
    onChangeComplete: function onChangeComplete(color2) {
      return onChange(color2.hex);
    },
    onChange: function onChange2(color2) {
      return setColor(color2.hex);
    },
    disableAlpha: true
  });
};
var popup = "";
function Popup(props) {
  var children = props.children, initiator = props.initiator, _props$style = props.style, style = _props$style === void 0 ? {} : _props$style, minWidth = props.minWidth, minHeight = props.minHeight, maxWidth = props.maxWidth, maxHeight = props.maxHeight, _props$extraClass = props.extraClass, extraClass = _props$extraClass === void 0 ? "" : _props$extraClass, _props$onOutsideClick = props.onOutsideClick, onOutsideClick = _props$onOutsideClick === void 0 ? function() {
  } : _props$onOutsideClick, _props$notResize = props.notResize, notResize = _props$notResize === void 0 ? false : _props$notResize, _props$answer = props.answer, answer = _props$answer === void 0 ? {} : _props$answer;
  var utilsCurrent = React.useRef(new Utils$1({
    props
  }));
  var utils = utilsCurrent.current;
  var popupRefCurrent = React.useRef(null);
  var randomClass = React.useRef("id".concat(UTILS.random16()));
  answer.randomClass = randomClass.current;
  answer.popupRefCurrent = popupRefCurrent;
  var checkOutsideClick = function checkOutsideClick2(e) {
    var _e$target;
    if ((_e$target = e.target) !== null && _e$target !== void 0 && _e$target.parentElement && popupRefCurrent.current && !popupRefCurrent.current.contains(e.target))
      onOutsideClick();
  };
  React.useEffect(function() {
    var removeCheckElementScroll = utils.checkElementScroll(initiator);
    if (onOutsideClick) {
      setTimeout(function() {
        document.addEventListener("click", checkOutsideClick);
      }, 0);
    }
    utils.recalcPosition();
    return function() {
      removeCheckElementScroll();
      if (onOutsideClick)
        document.removeEventListener("click", checkOutsideClick);
    };
  }, []);
  utils.data = {
    popupRefCurrent
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "rct-popup ".concat(randomClass.current, " ").concat(extraClass),
    style: _objectSpread2({
      minWidth: minWidth ? utils.getVal(minWidth) : "unset",
      minHeight: minHeight ? utils.getVal(minHeight) : "unset",
      maxWidth: maxWidth ? utils.getVal(maxWidth) : "unset",
      maxHeight: maxHeight ? utils.getVal(maxHeight) : "unset"
    }, style),
    ref: popupRefCurrent
  }, children, !notResize && /* @__PURE__ */ React.createElement(Corner, {
    utils
  }));
}
var createRoot;
var m = ReactDOM;
{
  createRoot = m.createRoot;
  m.hydrateRoot;
}
var callPopup = function callPopup2(props) {
  var externalPortal = props.portal;
  var appRoot = document.createElement("div");
  appRoot.className = "popup-root";
  var portal = externalPortal || document.querySelector("html");
  portal.appendChild(appRoot);
  var root2 = createRoot(appRoot);
  var removeComponent = function removeComponent2() {
    root2.unmount();
    appRoot.remove();
  };
  root2.render(/* @__PURE__ */ React.createElement(Popup, _extends$g({}, props, {
    removeComponent
  })));
  return {
    removeComponent
  };
};
var corner = "";
function Corner(props) {
  var utils = props.utils;
  var cornerRefCurrent = React.useRef(null);
  utils.data.cornerRefCurrent = cornerRefCurrent;
  return /* @__PURE__ */ React.createElement("div", {
    className: utils.positionToCornerClass(),
    ref: cornerRefCurrent,
    onMouseDown: utils.cornerStart.bind(utils)
  });
}
var Utils$1 = /* @__PURE__ */ function() {
  function Utils2(_ref) {
    var props = _ref.props;
    _classCallCheck$a(this, Utils2);
    this.props = _objectSpread2(_objectSpread2({}, props), {}, {
      answer: props !== null && props !== void 0 && props.answer ? props.answer : {}
    });
    this.position = {};
    this.localeStorageName = "popup_sizes";
    var popupSizes = localStorage.getItem(this.localeStorageName);
    this.popupSizes = popupSizes ? JSON.parse(popupSizes) : {};
    this.getPosition();
  }
  return _createClass$9(Utils2, [{
    key: "getPosition",
    value: function getPosition() {
      var _this$data;
      var _this$props = this.props, initiator = _this$props.initiator, minWidth = _this$props.minWidth, minHeight = _this$props.minHeight, id = _this$props.id, autoSize = _this$props.autoSize, fitToParent = _this$props.fitToParent;
      var _initiator$getBoundin = initiator.getBoundingClientRect(), width = _initiator$getBoundin.width, height = _initiator$getBoundin.height, left = _initiator$getBoundin.left, right = _initiator$getBoundin.right, top = _initiator$getBoundin.top, bottom = _initiator$getBoundin.bottom;
      var _this$position = this.position, oldWidth = _this$position.width, oldHeight = _this$position.height;
      if (!oldWidth && this.popupSizes[id]) {
        oldWidth = this.popupSizes[id].width;
        oldHeight = this.popupSizes[id].height;
      }
      var rightSpase = window.innerWidth - left;
      var bottomSpace = window.innerHeight - bottom;
      var popupWidth = oldWidth ? oldWidth : Math.max(width, minWidth);
      var popupHeight = oldHeight ? oldHeight : Math.max(height, minHeight);
      if (autoSize && (_this$data = this.data) !== null && _this$data !== void 0 && (_this$data = _this$data.popupRefCurrent) !== null && _this$data !== void 0 && _this$data.current) {
        var _this$data$popupRefCu = this.data.popupRefCurrent.current.getBoundingClientRect(), _width = _this$data$popupRefCu.width, _height = _this$data$popupRefCu.height;
        popupWidth = _width;
        popupHeight = _height;
      }
      var downDirection = bottomSpace > popupHeight + 20;
      var rightDirection = rightSpase > popupWidth + 20;
      this.props.answer.direction = {
        down: downDirection,
        up: !downDirection,
        right: rightDirection,
        left: !rightDirection
      };
      this.position = {
        downDirection,
        rightDirection,
        left: fitToParent ? left : rightDirection ? left : right - popupWidth,
        top: fitToParent ? top : downDirection ? bottom : top - popupHeight,
        width: fitToParent ? width : popupWidth,
        height: fitToParent ? height : popupHeight
      };
      return this.position;
    }
  }, {
    key: "getVal",
    value: function getVal(size) {
      return isNaN(size) ? size : "".concat(size, "px");
    }
  }, {
    key: "positionToPopupCSS",
    value: function positionToPopupCSS() {
      var _this$props2 = this.props, minWidth = _this$props2.minWidth, minHeight = _this$props2.minHeight, maxWidth = _this$props2.maxWidth, maxHeight = _this$props2.maxHeight, autoSize = _this$props2.autoSize;
      var _this$position2 = this.position, left = _this$position2.left, top = _this$position2.top, width = _this$position2.width, height = _this$position2.height;
      var out = {
        "left": this.getVal(left),
        "top": this.getVal(top),
        "minWidth": this.getVal(minWidth),
        "minHeight": this.getVal(minHeight)
      };
      if (!autoSize) {
        out.width = this.getVal(width);
        out.height = this.getVal(height);
      }
      if (maxWidth)
        out["max-width"] = this.getVal(maxWidth);
      if (maxHeight)
        out["max-height"] = this.getVal(maxHeight);
      return out;
    }
  }, {
    key: "positionToCornerClass",
    value: function positionToCornerClass() {
      var _this$position3 = this.position, downDirection = _this$position3.downDirection, rightDirection = _this$position3.rightDirection;
      return "rct-popup-corner ".concat(downDirection ? "bottom" : "top", "-").concat(rightDirection ? "right" : "left");
    }
  }, {
    key: "recalcPosition",
    value: function recalcPosition() {
      var _this$data2 = this.data, popupRefCurrent = _this$data2.popupRefCurrent, cornerRefCurrent = _this$data2.cornerRefCurrent;
      this.position = this.getPosition();
      var css = this.positionToPopupCSS();
      for (var style in css) {
        var styleValue = css[style];
        popupRefCurrent.current.style[style] = styleValue;
      }
      if (!(cornerRefCurrent !== null && cornerRefCurrent !== void 0 && cornerRefCurrent.current))
        return;
      cornerRefCurrent.current.className = this.positionToCornerClass();
    }
  }, {
    key: "checkElementScroll",
    value: function checkElementScroll() {
      var _this = this;
      var initiator = this.props.initiator;
      if (!initiator) {
        return function() {
        };
      }
      var parentEl = initiator.parentElement;
      var scrolls = [];
      var scrollListener = function scrollListener2() {
        _this.recalcPosition();
      };
      while ((_parentEl = parentEl) !== null && _parentEl !== void 0 && _parentEl.tagName) {
        var _parentEl;
        var scroll = {
          parentEl
        };
        scroll.scrollListener = scrollListener;
        parentEl.addEventListener("scroll", scrollListener);
        scrolls.push(scroll);
        parentEl = parentEl.parentElement;
      }
      return function() {
        for (var _i = 0, _scrolls = scrolls; _i < _scrolls.length; _i++) {
          var item = _scrolls[_i];
          item.parentEl.removeEventListener("scroll", item.scrollListener);
        }
      };
    }
  }, {
    key: "cornerStart",
    value: function cornerStart(e) {
      var popupRefCurrent = this.data.popupRefCurrent;
      var _this$position4 = this.position, width = _this$position4.width, height = _this$position4.height, left = _this$position4.left, top = _this$position4.top;
      this.cornerStartPosition = {
        cursorX: e.clientX,
        cursorY: e.clientY,
        popupWidth: width,
        popupHeight: height,
        popupLeft: left,
        popupTop: top
      };
      popupRefCurrent.current.classList.add("move");
      document.onmouseup = this.cornerStop.bind(this);
      document.onmousemove = this.cornerMove.bind(this);
      document.getElementsByTagName("body")[0].style["user-select"] = "none";
    }
  }, {
    key: "cornerMove",
    value: function cornerMove(e) {
      var popupRefCurrent = this.data.popupRefCurrent;
      var _this$props3 = this.props, minWidth = _this$props3.minWidth, minHeight = _this$props3.minHeight;
      var _this$cornerStartPosi = this.cornerStartPosition, cursorX = _this$cornerStartPosi.cursorX, cursorY = _this$cornerStartPosi.cursorY, popupWidth = _this$cornerStartPosi.popupWidth, popupHeight = _this$cornerStartPosi.popupHeight, popupLeft = _this$cornerStartPosi.popupLeft, popupTop = _this$cornerStartPosi.popupTop;
      var _this$position5 = this.position, downDirection = _this$position5.downDirection, rightDirection = _this$position5.rightDirection;
      var maxDeltaX = popupWidth - minWidth;
      var maxDeltaY = popupHeight - minHeight;
      var deltaX = e.clientX - cursorX;
      var deltaY = e.clientY - cursorY;
      if (rightDirection && deltaX < 0 && deltaX < maxDeltaX * -1)
        deltaX = maxDeltaX * -1;
      if (!rightDirection && deltaX > 0 && deltaX > maxDeltaX)
        deltaX = maxDeltaX;
      if (downDirection && deltaY < 0 && deltaY < maxDeltaY * -1)
        deltaY = maxDeltaY * -1;
      if (!downDirection && deltaY > 0 && deltaY > maxDeltaY)
        deltaY = maxDeltaY;
      this.position = _objectSpread2(_objectSpread2({}, this.position), {}, {
        left: rightDirection ? popupLeft : popupLeft + deltaX,
        top: downDirection ? popupTop : popupTop + deltaY,
        width: rightDirection ? popupWidth + deltaX : popupWidth - deltaX,
        height: downDirection ? popupHeight + deltaY : popupHeight - deltaY
      });
      var css = this.positionToPopupCSS();
      for (var style in css) {
        var styleValue = css[style];
        popupRefCurrent.current.style[style] = styleValue;
      }
    }
  }, {
    key: "cornerStop",
    value: function cornerStop() {
      var popupRefCurrent = this.data.popupRefCurrent;
      var id = this.props.id;
      document.onmouseup = null;
      document.onmousemove = null;
      popupRefCurrent.current.classList.remove("move");
      document.getElementsByTagName("body")[0].style["user-select"] = "";
      this.recalcPosition();
      if (id) {
        var _this$position6 = this.position, width = _this$position6.width, height = _this$position6.height;
        this.popupSizes[id] = {
          width,
          height
        };
        localStorage.setItem(this.localeStorageName, JSON.stringify(this.popupSizes));
      }
    }
  }]);
}();
var listPicker = "";
var elementsPickerHeader = "";
var elementsPickerList = "";
var elementsPickerList_item = "";
var elementsPicker = "";
var alert = "";
var prompt = "";
var reactDatepicker = "";
var datePicker = "";
var useCurrentState = function useCurrentState2(initValue, dataIsObj) {
  var currentValue = React.useRef(initValue);
  var _React$useState = React.useState(initValue), _React$useState2 = _slicedToArray(_React$useState, 2), value = _React$useState2[0], setValue_ = _React$useState2[1];
  var setValue = function setValue2(newValue) {
    var rebuildValue = dataIsObj ? _objectSpread2(_objectSpread2({}, currentValue.current), newValue) : newValue;
    currentValue.current = rebuildValue;
    setValue_(rebuildValue);
  };
  return [value, currentValue, setValue];
};
var filesPicker = "";
var tableHeaderCellMenu = "";
var TableHeaderCellMenu = function TableHeaderCellMenu2(props) {
  var _cell$_;
  var utils = props.utils, connector = props.connector, parentCh = props.parentCh, parentChildren = props.parentChildren, parent = props.parent, showColumn = props.showColumn, isRight = props.isRight, cell = props.cell, onSortCurrent = props.onSortCurrent;
  var header = connector.header, searchContext = connector.searchContext, _connector$onChangeCo = connector.onChangeComponentState.onChangeFilterOrSort, onChangeFilterOrSort = _connector$onChangeCo === void 0 ? function() {
  } : _connector$onChangeCo, _connector$options = connector.options, options = _connector$options === void 0 ? {} : _connector$options;
  var _options$columnsMenu = options.columnsMenu, _options$columnsMenu$ = _options$columnsMenu.hasHideIcon, hasHideIcon = _options$columnsMenu$ === void 0 ? false : _options$columnsMenu$, _options$columnsMenu$2 = _options$columnsMenu.hasOrderIcon, hasOrderIcon = _options$columnsMenu$2 === void 0 ? false : _options$columnsMenu$2, _options$columnsMenu$3 = _options$columnsMenu.hasFormatIcon, hasFormatIcon = _options$columnsMenu$3 === void 0 ? false : _options$columnsMenu$3, _options$columnsMenu$4 = _options$columnsMenu.hasSearchIcon, hasSearchIcon = _options$columnsMenu$4 === void 0 ? false : _options$columnsMenu$4, _options$columnsMenu$5 = _options$columnsMenu.hasSortIcon, hasSortIcon = _options$columnsMenu$5 === void 0 ? false : _options$columnsMenu$5;
  var orderPanelInitiator = React.useRef(null);
  var formatPanelInitiator = React.useRef(null);
  var _React$useState = React.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), showFilter = _React$useState2[0], setShowFilter = _React$useState2[1];
  var _React$useState3 = React.useState(false), _React$useState4 = _slicedToArray(_React$useState3, 2), showFormatter = _React$useState4[0], setShowFormatter = _React$useState4[1];
  var openOrderPanel = function openOrderPanel2() {
    var list = [];
    var _iterator = _createForOfIteratorHelper(parentCh), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var item = _step.value;
        var index = item.i;
        list.push({
          index,
          value: parentChildren[index].value,
          isLeft: !!parentChildren[index]._.isLeft
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var removePopupFunction = function removePopupFunction2() {
    };
    var removePopup = function removePopup2() {
      return removePopupFunction();
    };
    var _callPopup = callPopup({
      initiator: orderPanelInitiator.current,
      id: "unitable-order-panel",
      minWidth: 0,
      minHeight: 0,
      onOutsideClick: removePopup,
      notResize: true,
      autoSize: true,
      children: /* @__PURE__ */ React.createElement(TableSettingsPanelOrder, _extends$g({}, props, {
        list,
        root: parent !== null && parent !== void 0 && parent.value ? parent.value : "ROOT",
        onChange: function onChange(list2) {
          var tmp = {};
          var _iterator2 = _createForOfIteratorHelper(parentCh), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var item2 = _step2.value;
              tmp[item2.i] = item2;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          for (var i in list2)
            parentCh[i] = tmp[list2[i].index];
          utils.orderTreeToOrderEnds();
          connector.refresh.headerAndBody();
          utils.saveTableSettingsToLocaleStorage();
        }
      }))
    }), removeComponent = _callPopup.removeComponent;
    removePopupFunction = removeComponent;
  };
  var onSort = function onSort2() {
    if (cell._.sort) {
      if (cell._.sort === "down") {
        cell._.sort = "up";
      } else {
        delete cell._.sort;
        connector.sortCell = null;
      }
    } else {
      var _connector$sortCell;
      if ((_connector$sortCell = connector.sortCell) !== null && _connector$sortCell !== void 0 && (_connector$sortCell = _connector$sortCell._) !== null && _connector$sortCell !== void 0 && _connector$sortCell.sort) {
        delete connector.sortCell._.sort;
        connector.sortCell._.refresh();
      }
      cell._.sort = "down";
    }
    if (cell._.sort)
      connector.sortCell = cell;
    cell._.refresh();
    var rowsFromStore = utils.storeGetPage({
      pageNum: 0
    });
    if (!rowsFromStore) {
      onChangeFilterOrSort({
        header,
        searchContext,
        sortCell: connector.sortCell
      });
      return;
    }
    console.log("################### GET PAGE FROM STORE", 0);
    utils.refreshBodyWithNewRows({
      newRows: rowsFromStore,
      newPageNum: 0
    });
  };
  onSortCurrent.current = onSort;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, ((_cell$_ = cell._) === null || _cell$_ === void 0 ? void 0 : _cell$_.format) && /* @__PURE__ */ React.createElement("div", {
    className: "uhc-format-label"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "uhc-menu".concat(showFilter ? " show-search-bar" : "").concat(showFormatter ? " show-formatter" : "")
  }, showFilter || showFormatter ? /* @__PURE__ */ React.createElement(React.Fragment, null, showFilter ? /* @__PURE__ */ React.createElement(TableHeaderCellMenuSearchBar, _extends$g({}, props, {
    setShowFilter
  })) : /* @__PURE__ */ React.createElement(TableHeaderCellMenuFormatter, _extends$g({}, props, {
    setShowFormatter
  }))) : /* @__PURE__ */ React.createElement("div", {
    className: "uhc-menu-inner"
  }, hasSortIcon && cell._.isEnd && /* @__PURE__ */ React.createElement("i", {
    className: "sort-button fas fa-sort-amount-".concat(cell._.sort === "up" ? "up" : "down", "-alt").concat(cell._.sort ? " is-present" : ""),
    title: "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E \u0441\u0442\u043E\u043B\u0431\u0446\u0443",
    onClick: onSort
  }), hasSearchIcon && /* @__PURE__ */ React.createElement("i", {
    className: "search-button fas fa-search",
    title: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0441\u0442\u043E\u043B\u0431\u0446\u0443",
    onClick: function onClick() {
      return setShowFilter(true);
    }
  }), hasHideIcon && isRight && /* @__PURE__ */ React.createElement("i", {
    className: "show-column-button fas fa-eye",
    title: "\u0421\u043A\u0440\u044B\u0442\u044C \u0441\u0442\u043E\u043B\u0431\u0435\u0446",
    onClick: showColumn(false)
  }), hasOrderIcon && isRight && /* @__PURE__ */ React.createElement("i", {
    className: "order-column-button fas fa-exchange-alt",
    title: "\u041F\u043E\u0440\u044F\u0434\u043E\u043A \u0441\u0442\u043E\u043B\u0431\u0446\u043E\u0432",
    onClick: openOrderPanel,
    ref: orderPanelInitiator
  }), hasFormatIcon && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("i", {
    className: "format-button fas fa-paragraph",
    title: "\u0424\u043E\u0440\u043C\u0430\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u043E\u043B\u0431\u0446\u0430",
    onClick: function onClick() {
      return setShowFormatter(true);
    }
  }), /* @__PURE__ */ React.createElement("div", {
    ref: formatPanelInitiator
  })))));
};
var tableHeaderCellMenuSearchBar = "";
var TableHeaderCellMenuSearchBar = function TableHeaderCellMenuSearchBar2(props) {
  var connector = props.connector, cell = props.cell, utils = props.utils, setShowFilter = props.setShowFilter;
  var header = connector.header, sortCell = connector.sortCell, _connector$onChangeCo = connector.onChangeComponentState.onChangeFilterOrSort, onChangeFilterOrSort = _connector$onChangeCo === void 0 ? function() {
  } : _connector$onChangeCo;
  var _useCurrentState = useCurrentState(""), _useCurrentState2 = _slicedToArray(_useCurrentState, 3), searchContext = _useCurrentState2[0], searchContextCurrent = _useCurrentState2[1], _setSearchContext = _useCurrentState2[2];
  var setSearchContext = function setSearchContext2(text) {
    _setSearchContext(text);
    utils.refreshColumnsTree({
      data: text,
      cell,
      connectorIndex: "searchContext",
      isObject: false
    });
  };
  var clickToFilter = function clickToFilter2() {
    if (searchContextCurrent.current)
      cell._.searchContext = searchContextCurrent.current;
    else
      delete cell._.searchContext;
    var rowsFromStore = utils.storeGetPage({
      pageNum: 0
    });
    if (!rowsFromStore) {
      onChangeFilterOrSort({
        header,
        searchContext: connector.searchContext,
        sortCell
      });
      return;
    }
    console.log("################### GET PAGE FROM STORE", 0);
    utils.refreshBodyWithNewRows({
      newRows: rowsFromStore,
      newPageNum: 0,
      openAllLevels: true
    });
  };
  var clickToCloseFilter = function clickToCloseFilter2() {
    setSearchContext(null);
    clickToFilter();
    setShowFilter(false);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("input", {
    className: "search-input",
    type: "text",
    value: searchContext,
    onChange: function onChange(e) {
      return setSearchContext(e.target.value);
    },
    autoFocus: true
  }), searchContext && /* @__PURE__ */ React.createElement("i", {
    className: "search-button fas fa-filter",
    title: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u0439\u0434\u0435\u043D\u043D\u044B\u0435",
    onClick: clickToFilter
  }), /* @__PURE__ */ React.createElement("i", {
    className: "cancel-search-button fas fa-times",
    title: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0438\u0441\u043A",
    onClick: clickToCloseFilter
  }));
};
var tableHeaderCellMenuFormatter = "";
var TableHeaderCellMenuFormatter = function TableHeaderCellMenuFormatter2(props) {
  var cell = props.cell, setShowFormatter = props.setShowFormatter, utils = props.utils;
  var _React$useState = React.useState(true), _React$useState2 = _slicedToArray(_React$useState, 2), isActual = _React$useState2[0], setIsActual = _React$useState2[1];
  var _React$useState3 = React.useState(0), _React$useState4 = _slicedToArray(_React$useState3, 2), _ = _React$useState4[0], setRefresh = _React$useState4[1];
  var refresh = function refresh2() {
    setIsActual(false);
    setRefresh(UTILS.random16());
  };
  var format2 = React.useRef(cell._.format || {});
  var _format$current = format2.current, _format$current$align = _format$current.align, align = _format$current$align === void 0 ? "center" : _format$current$align, _format$current$color = _format$current.color, color = _format$current$color === void 0 ? "#000" : _format$current$color, _format$current$backg = _format$current.background, background = _format$current$backg === void 0 ? "#fff" : _format$current$backg, _format$current$wrap = _format$current.wrap, wrap = _format$current$wrap === void 0 ? false : _format$current$wrap;
  var _React$useState5 = React.useState(color), _React$useState6 = _slicedToArray(_React$useState5, 2), pickerColor = _React$useState6[0], _setPickerColor = _React$useState6[1];
  var setPickerColor = function setPickerColor2(color2) {
    _setPickerColor(color2);
  };
  var _React$useState7 = React.useState(background), _React$useState8 = _slicedToArray(_React$useState7, 2), pickerBgrnd = _React$useState8[0], setPickerBgrnd = _React$useState8[1];
  var colorPickerRef = React.useRef(null);
  var selectAlign = function selectAlign2(align2) {
    format2.current.align = align2;
    refresh();
  };
  var selectLeft = function selectLeft2() {
    return selectAlign("left");
  };
  var selectCenter = function selectCenter2() {
    return selectAlign("center");
  };
  var selectRight = function selectRight2() {
    return selectAlign("right");
  };
  var selectWrap = function selectWrap2() {
    format2.current.wrap = !wrap;
    refresh();
  };
  var closeFormatter = function closeFormatter2() {
    return setShowFormatter(false);
  };
  var doApplyOrTrash = function doApplyOrTrash2(format3) {
    setIsActual(true);
    utils.refreshColumnsTree({
      data: format3,
      cell,
      connectorIndex: "format",
      isObject: true
    });
    setShowFormatter(false);
    utils.saveTableSettingsToLocaleStorage();
  };
  var doApply = function doApply2() {
    cell._.format = _objectSpread2({}, format2.current);
    doApplyOrTrash(cell._.format);
  };
  var doTrash = function doTrash2() {
    delete cell._.format;
    format2.current = {};
    doApplyOrTrash(null);
  };
  var openPicker = function openPicker2(color2, setColor, index) {
    var removePopupFunction = function removePopupFunction2() {
    };
    var removePopup = function removePopup2() {
      return removePopupFunction();
    };
    var _callPopup = callPopup({
      initiator: colorPickerRef.current,
      id: "",
      minWidth: 0,
      minHeight: 0,
      onOutsideClick: removePopup,
      notResize: true,
      autoSize: true,
      children: /* @__PURE__ */ React.createElement(ColorPicker, {
        pickerType: "sketch",
        color: color2,
        onChange: function onChange(color3) {
          setColor(color3);
          format2.current[index] = color3;
          refresh();
        }
      })
    }), removeComponent = _callPopup.removeComponent;
    removePopupFunction = removeComponent;
  };
  var openColorPicker = function openColorPicker2() {
    return openPicker(pickerColor, setPickerColor, "color");
  };
  var openBgrndPicker = function openBgrndPicker2() {
    return openPicker(pickerBgrnd, setPickerBgrnd, "background");
  };
  var _left = {
    _class: "align-left",
    title: "\u0432\u043B\u0435\u0432\u043E",
    onClick: selectLeft,
    checked: align === "left",
    color: "#000",
    r: 0
  };
  var _center = {
    _class: "align-center",
    title: "\u043F\u043E \u0446\u0435\u043D\u0442\u0440\u0443",
    onClick: selectCenter,
    checked: align === "center",
    color: "#000",
    r: 0
  };
  var _right = {
    _class: "align-right",
    title: "\u0432\u043F\u0440\u0430\u0432\u043E",
    onClick: selectRight,
    checked: align === "right",
    color: "#000",
    r: 5
  };
  var _color = {
    _class: "pencil-alt",
    title: "\u0446\u0432\u0435\u0442 \u0442\u0435\u043A\u0441\u0442\u0430",
    onClick: openColorPicker,
    checked: !!format2.current.color,
    color: "#000",
    r: 0
  };
  var _bgrnd = {
    _class: "paint-roller",
    title: "\u0446\u0432\u0435\u0442 \u0444\u043E\u043D\u0430",
    onClick: openBgrndPicker,
    checked: !!format2.current.background,
    color: "#000",
    r: 5
  };
  var _wrap = {
    _class: "align-justify",
    title: "\u043F\u0435\u0440\u0435\u043D\u043E\u0441 \u043F\u043E \u0441\u0442\u0440\u043E\u043A\u0430\u043C",
    onClick: selectWrap,
    checked: wrap,
    color: "#000",
    r: 10
  };
  var _apply = {
    _class: "check",
    title: "\u043F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C",
    onClick: doApply,
    checked: isActual,
    r: 0
  };
  var _trash = {
    _class: "trash",
    title: "\u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C",
    onClick: doTrash,
    checked: false,
    r: 0
  };
  var _close = {
    _class: "times",
    title: "\u0437\u0430\u043A\u0440\u044B\u0442\u044C \u043F\u0430\u043D\u0435\u043B\u044C",
    onClick: closeFormatter,
    checked: false,
    r: 5
  };
  var icons = [_left, _center, _right, _color, _bgrnd, _wrap, _apply, _trash, _close];
  _color.color = color;
  _color.background = background;
  _bgrnd.color = background;
  _bgrnd.background = color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, icons.map(function(icon) {
    return /* @__PURE__ */ React.createElement(FormatterIcon, _extends$g({}, icon, {
      _
    }));
  }), /* @__PURE__ */ React.createElement("div", {
    ref: colorPickerRef
  }));
};
var FormatterIcon = function FormatterIcon2(props) {
  var _class = props._class, onClick = props.onClick, checked = props.checked, title = props.title, color = props.color, background = props.background, r = props.r;
  var style = {
    "margin-right": "".concat(r, "px")
  };
  if (color) {
    style.color = color;
    style.background = background;
  }
  return /* @__PURE__ */ React.createElement("i", {
    className: "format-icon fas fa-".concat(_class).concat(checked ? " checked" : ""),
    onClick: onClick ? onClick : function() {
    },
    title,
    style
  });
};
var tableHeaderCellRowsTreeMenu = "";
var TableHeaderCellRowsTreeMenu = function TableHeaderCellRowsTreeMenu2(props) {
  var utils = props.utils, connector = props.connector;
  var refreshRow = connector.refresh.row, showRows = connector.showRows;
  var getLevelsInfo = function getLevelsInfo2() {
    var out = [];
    for (var index in showRows) {
      var _showRows$index = showRows[index], show = _showRows$index.show, level = _showRows$index.level;
      out[level] = out[level] || {};
      if (show)
        out[level].show = true;
      else
        out[level].hide = true;
    }
    return out;
  };
  var openAll = function openAll2() {
    return utils.setShowToAllRows(true);
  };
  var closeAll = function closeAll2() {
    return utils.setShowToAllRows(false);
  };
  var openOne = function openOne2() {
    var info = getLevelsInfo();
    for (var level in info) {
      var item = info[level];
      if (item.hide) {
        for (var index in showRows) {
          var row = showRows[index];
          if (row.level === Number(level) - 1 && !row.showChildren) {
            row.showChildren = true;
            refreshRow[index]();
          }
          if (row.level === Number(level) && !row.show) {
            row.show = true;
            refreshRow[index]();
          }
        }
        return;
      }
    }
  };
  var closeOne = function closeOne2() {
    var info = getLevelsInfo();
    for (var level = info.length - 1; level > 0; level--) {
      var item = info[level];
      if (item.show) {
        for (var index in showRows) {
          var row = showRows[index];
          if (row.level === Number(level) - 1 && row.showChildren) {
            row.showChildren = false;
            refreshRow[index]();
          }
          if (row.level === Number(level) && row.show) {
            row.show = false;
            refreshRow[index]();
          }
        }
        return;
      }
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "rows-tree-menu"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "rtm-open rtm-all rtm-open-all",
    title: "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0441\u0451",
    onClick: openAll
  }, "+"), /* @__PURE__ */ React.createElement("div", {
    className: "rtm-open rtm-open-one",
    title: "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043E\u0434\u0438\u043D \u0443\u0440\u043E\u0432\u0435\u043D\u044C",
    onClick: openOne
  }, "+"), /* @__PURE__ */ React.createElement("div", {
    className: "rtm-close rtm-close-one",
    title: "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043E\u0434\u0438\u043D \u0443\u0440\u043E\u0432\u0435\u043D\u044C",
    onClick: closeOne
  }, "-"), /* @__PURE__ */ React.createElement("div", {
    className: "rtm-close rtm-all rtm-close-all",
    title: "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0441\u0451",
    onClick: closeAll
  }, "-"));
};
var tableBody = "";
var TableBody = function TableBody2(props) {
  var utils = props.utils, connector = props.connector;
  var rows = connector.rows;
  var refUnitableBody = React.useRef(null);
  var refUnitableBodyInner = React.useRef(null);
  var refUnitableRowsWrapper = React.useRef(null);
  var _React$useState = React.useState(0), _React$useState2 = _slicedToArray(_React$useState, 2), _ = _React$useState2[0], setRefresh = _React$useState2[1];
  var refresh = function refresh2() {
    refUnitableBodyInner.current.scrollTop = 0;
    setRefresh(UTILS.random16());
  };
  var refreshHard = function refreshHard2() {
    refUnitableBodyInner.current.scrollTop = 0;
    setRefresh(null);
    setTimeout(function() {
      setRefresh(UTILS.random16());
    }, 1e3);
  };
  React.useEffect(function() {
    connector.refs.unitableBody = refUnitableBody.current;
    connector.refs.unitableBodyInner = refUnitableBodyInner.current;
    connector.refs.unitableRowsWrapper = refUnitableRowsWrapper.current;
    connector.refresh.body = refresh;
    connector.refresh.bodyHard = refreshHard;
    window.addEventListener("resize", onResize);
    utils.recalcHeaderRootsPadding();
    return function() {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  var onWheel = function onWheel2(e) {
    if (!connector.refs.scrollbarVertical || connector.editableCell)
      return;
    var scrollTop = refUnitableBodyInner.current.scrollTop + (e.deltaY > 0 ? 20 : -20);
    refUnitableBodyInner.current.scrollTop = scrollTop;
    connector.refs.scrollbarVertical.scrollTop = scrollTop;
  };
  var onResize = function onResize2(e) {
    connector.refresh.scrollbarHorizontal();
    connector.refresh.scrollbarVertical();
    utils.recalcHeaderRootsPadding();
  };
  var sliding = utils.getSliding();
  if (_ === null)
    return null;
  return /* @__PURE__ */ React.createElement("div", {
    className: "unitable-body",
    style: {
      maxHeight: utils.getBodyHeight()
    },
    onWheel,
    ref: refUnitableBody,
    onMouseLeave: function onMouseLeave() {
      return utils.setHoveredCell(null, null);
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "unitable-body-inner",
    ref: refUnitableBodyInner
  }, /* @__PURE__ */ React.createElement("div", {
    className: "unitable-rows-wrapper",
    ref: refUnitableRowsWrapper
  }, rows.map(function(row, index) {
    return /* @__PURE__ */ React.createElement(TableRow, _extends$g({
      key: "row-".concat(index)
    }, props, {
      row,
      rowIndex: index,
      sliding
    }));
  }), /* @__PURE__ */ React.createElement("div", {
    style: {
      height: "20px",
      minHeight: "20px"
    }
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "unitable-line bottom"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "unitable-line right"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "unitable-line left"
  }), /* @__PURE__ */ React.createElement(TableScrollbarHorizontal, props), /* @__PURE__ */ React.createElement(TableScrollbarVertical, props));
};
var tableScrollbarHorizontal = "";
var TableScrollbarHorizontal = function TableScrollbarHorizontal2(props) {
  var utils = props.utils, connector = props.connector;
  var sizes = connector.sizes, rightParts = connector.refs.rightParts, tableHas = connector.tableHas;
  var _React$useState = React.useState(0), _React$useState2 = _slicedToArray(_React$useState, 2);
  _React$useState2[0];
  var setRefresh = _React$useState2[1];
  var refresh = function refresh2() {
    return setRefresh(UTILS.random16());
  };
  var scrollbarWrapperRef = React.useRef(null);
  React.useEffect(function() {
    connector.refresh.scrollbarHorizontal = refresh;
    connector.refs.scrollbarWrapperRef = scrollbarWrapperRef;
    setTimeout(refresh, 0);
  }, []);
  var onScroll = function onScroll2(e) {
    var scrollLeft = scrollbarWrapperRef.current.scrollLeft;
    var _iterator = _createForOfIteratorHelper(rightParts), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var ref = _step.value;
        ref.scrollLeft = scrollLeft;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    utils.recalcHeaderRootsPadding();
  };
  var headerRight = connector.refs.headerRight;
  var scrollbarIsNeeded = headerRight ? headerRight.scrollWidth > headerRight.clientWidth : false;
  if (scrollbarIsNeeded !== tableHas.scrollbarHorizontal) {
    tableHas.scrollbarHorizontal = scrollbarIsNeeded;
    setTimeout(function() {
      connector.refresh.scrollbarVertical();
    }, 0);
  }
  if (!scrollbarIsNeeded)
    return null;
  var leftWidth = utils.getLeftPartRowWidth();
  var rightWidth = utils.getRightPartRowWidth();
  var scrollbarWrapperWith = headerRight.clientWidth;
  return /* @__PURE__ */ React.createElement("div", {
    className: "unitable-scrollbar-horizontal",
    style: utils.getHeightStyle(sizes.scrollbar)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ush-left",
    style: utils.getWidthStyle(leftWidth)
  }), /* @__PURE__ */ React.createElement("div", {
    className: "ush-body-wrapper",
    style: utils.getWidthStyle(scrollbarWrapperWith),
    ref: scrollbarWrapperRef,
    onScroll
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ush-body-inner",
    style: utils.getWidthStyle(rightWidth)
  })));
};
var tableScrollbarVertical = "";
var TableScrollbarVertical = function TableScrollbarVertical2(props) {
  var utils = props.utils, connector = props.connector;
  var sizes = connector.sizes, tableHas = connector.tableHas, showRows = connector.showRows;
  var scrollbarWrapperRef = React.useRef(null);
  var _React$useState = React.useState(0), _React$useState2 = _slicedToArray(_React$useState, 2);
  _React$useState2[0];
  var setRefresh = _React$useState2[1];
  var refresh = function refresh2() {
    return setRefresh(UTILS.random16());
  };
  React.useEffect(function() {
    connector.refresh.scrollbarVertical = refresh;
    setTimeout(refresh, 0);
  }, []);
  if (!connector.refs.unitableBodyInner)
    return null;
  var showRowsNumber = 0;
  var _iterator = _createForOfIteratorHelper(showRows), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var row = _step.value;
      if (row.show)
        showRowsNumber++;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var heightScrollbar = connector.refs.unitableBodyInner.getBoundingClientRect().height;
  var heightInnerList = showRowsNumber * sizes.rowsHeight + 20;
  var scrollbarIsNeeded = heightScrollbar < heightInnerList;
  if (scrollbarIsNeeded !== tableHas.scrollbarVertical) {
    tableHas.scrollbarVertical = scrollbarIsNeeded;
  }
  if (!scrollbarIsNeeded) {
    connector.refs.scrollbarVertical = null;
    return null;
  }
  if (!connector.refs.scrollbarVertical) {
    setTimeout(function() {
      connector.refs.scrollbarVertical = scrollbarWrapperRef.current;
    }, 0);
  }
  var onScroll = function onScroll2(e) {
    var scrollTop = scrollbarWrapperRef.current.scrollTop;
    connector.refs.unitableBodyInner.scrollTop = scrollTop;
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "unitable-scrollbar-vertical",
    style: utils.getWidthStyle(sizes.scrollbar)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "usv-top",
    style: utils.getHeightStyle(sizes.headerHeight)
  }), /* @__PURE__ */ React.createElement("div", {
    className: "usv-body-wrapper",
    ref: scrollbarWrapperRef,
    style: utils.getHeightStyle(heightScrollbar),
    onScroll
  }, /* @__PURE__ */ React.createElement("div", {
    className: "usv-body-inner",
    style: utils.getHeightStyle(heightInnerList)
  })));
};
var tableRow = "";
var TableRow = function TableRow2(props) {
  var utils = props.utils, connector = props.connector, row = props.row, rowIndex = props.rowIndex, sliding = props.sliding;
  var numberFixedLeftColumnsEnds = connector.numberFixedLeftColumnsEnds, rowsHeight = connector.sizes.rowsHeight, rightParts = connector.refs.rightParts, orderEnds = connector.orderEnds, _connector$options = connector.options, options = _connector$options === void 0 ? {} : _connector$options, showRows = connector.showRows, tableHasRowsTree = connector.tableHas.rowsTree, rowsByOrdinalIndex = connector.data.rowsByOrdinalIndex;
  var _options$background = options.background, _options$background$e = _options$background.evenRows, evenRows = _options$background$e === void 0 ? false : _options$background$e, _options$background$o = _options$background.oddRows, oddRows = _options$background$o === void 0 ? false : _options$background$o, _options$resize = options.resize, resize = _options$resize === void 0 ? false : _options$resize;
  var rowTreeData = showRows[rowIndex];
  var refRightPart = React.useRef(null);
  var wrapperEl = React.useRef(null);
  var startPosition = React.useRef(null);
  var _React$useState = React.useState(0), _React$useState2 = _slicedToArray(_React$useState, 2);
  _React$useState2[0];
  var setRefresh = _React$useState2[1];
  var refresh = function refresh2() {
    return setRefresh(UTILS.random16());
  };
  React.useEffect(function() {
    rightParts.push(refRightPart.current);
    connector.refresh.row[rowIndex] = refresh;
  }, []);
  var isEven = function isEven2(i) {
    return i % 2 === 0;
  };
  var onMouseUp = function onMouseUp2() {
    document.onmouseup = null;
    document.onmousemove = null;
    var _iterator = _createForOfIteratorHelper(connector.refresh.row), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var _refresh = _step.value;
        _refresh();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    connector.refresh.scrollbarVertical();
    utils.saveTableSettingsToLocaleStorage();
  };
  var onMouseMove = function onMouseMove2(e) {
    var _startPosition$curren = startPosition.current, cursorY = _startPosition$curren.cursorY, wrapperHeight = _startPosition$curren.wrapperHeight;
    var newHeight = Math.max(20, wrapperHeight + (e.clientY - cursorY));
    connector.sizes.rowsHeight = newHeight;
    refresh();
  };
  var onMouseDown = function onMouseDown2(e) {
    startPosition.current = {
      cursorY: e.clientY,
      wrapperHeight: wrapperEl.current.getBoundingClientRect().height
    };
    document.onmouseup = onMouseUp;
    document.onmousemove = onMouseMove;
  };
  var _utils$splitRowByLeft = utils.splitRowByLeftAndRight(orderEnds, numberFixedLeftColumnsEnds), _utils$splitRowByLeft2 = _slicedToArray(_utils$splitRowByLeft, 2), rowLeft = _utils$splitRowByLeft2[0], rowRight = _utils$splitRowByLeft2[1];
  var style = {};
  var backgroundColor = null;
  var show = rowTreeData.show;
  if (!show) {
    style.display = "none";
  } else {
    style = utils.getHeightStyle(rowsHeight);
    backgroundColor = isEven(rowTreeData.mainRootIndex) ? evenRows : oddRows;
    if (backgroundColor)
      style.background = backgroundColor;
  }
  var cellData = {
    rowTreeData,
    tableHasRowsTree,
    rowIndex
  };
  if (rowTreeData.isNotFind)
    cellData.isNotFind = true;
  var outOfScreen = !sliding[rowIndex];
  if (outOfScreen) {
    setTimeout(function() {
      sliding[rowIndex] = true;
      refresh();
    }, 0);
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "unitable-row",
    style: _objectSpread2(_objectSpread2({}, style), rowsByOrdinalIndex[rowIndex].css || {}),
    ref: wrapperEl
  }, show && !outOfScreen && /* @__PURE__ */ React.createElement("div", {
    className: "unitable-row-left"
  }, rowLeft.map(function(originalIndex) {
    var cell = row[originalIndex];
    var key = "cell-".concat(rowIndex, "-").concat(originalIndex);
    return /* @__PURE__ */ React.createElement(TableRowCell, _extends$g({
      key
    }, props, {
      cell,
      cellIndex: originalIndex
    }, cellData));
  })), /* @__PURE__ */ React.createElement("div", {
    className: "unitable-row-right",
    style: {
      width: "(100% - ".concat(utils.getLeftPartRowWidth(), "px")
    },
    ref: refRightPart
  }, show && !outOfScreen && /* @__PURE__ */ React.createElement(React.Fragment, null, rowRight.map(function(originalIndex) {
    var cell = row[originalIndex];
    var key = "cell-".concat(rowIndex, "-").concat(originalIndex);
    return /* @__PURE__ */ React.createElement(TableRowCell, _extends$g({
      key
    }, props, {
      cell,
      cellIndex: originalIndex
    }, cellData));
  }))), show && !outOfScreen && resize.rowsHeight && /* @__PURE__ */ React.createElement("div", {
    className: "unitable-line bottom row-resize",
    onMouseDown
  }));
};
var tableRowCell = "";
var TableRowCell = function TableRowCell2(props) {
  var _connector$data$heade, _headerEndCell$_, _headerEndCell$_2, _headerEndCell$_3, _connector$hovered, _connector$hovered2, _cell$_;
  var utils = props.utils, connector = props.connector, cell = props.cell, rowIndex = props.rowIndex, cellIndex = props.cellIndex, rowTreeData = props.rowTreeData, tableHasRowsTree = props.tableHasRowsTree, isNotFind = props.isNotFind;
  var value = cell.value, _cell$view = cell.view, cellView = _cell$view === void 0 ? null : _cell$view;
  var columnsWidth = connector.sizes.columnsWidth, _connector$options = connector.options, options = _connector$options === void 0 ? {} : _connector$options, _connector$commonForB = connector.commonForBody, commonForBody = _connector$commonForB === void 0 ? {} : _connector$commonForB;
  var _commonForBody$view = commonForBody.view, cellsView = _commonForBody$view === void 0 ? null : _commonForBody$view, _commonForBody$css = commonForBody.css, commonCSS = _commonForBody$css === void 0 ? {} : _commonForBody$css, _commonForBody$custom = commonForBody.customizer, commonCustomizer = _commonForBody$custom === void 0 ? [] : _commonForBody$custom;
  var _ref = options.other || {}, _ref$showHints = _ref.showHints, showHints = _ref$showHints === void 0 ? false : _ref$showHints, _ref$highlightHovered = _ref.highlightHovered, highlightHovered = _ref$highlightHovered === void 0 ? false : _ref$highlightHovered;
  var _ref2 = options.background || {}, _ref2$hovered = _ref2.hovered, hoveredBackground = _ref2$hovered === void 0 ? false : _ref2$hovered;
  var headerEndCell = ((_connector$data$heade = connector.data.headerRootByEndIndex[cellIndex]) === null || _connector$data$heade === void 0 ? void 0 : _connector$data$heade.cell) || {};
  var css = ((_headerEndCell$_ = headerEndCell._) === null || _headerEndCell$_ === void 0 ? void 0 : _headerEndCell$_.css) || {};
  var columnCustomizer = (_headerEndCell$_2 = headerEndCell._) === null || _headerEndCell$_2 === void 0 ? void 0 : _headerEndCell$_2.customizer;
  var customizer = (columnCustomizer !== null && columnCustomizer !== void 0 && columnCustomizer.length ? columnCustomizer : null) || (commonCustomizer !== null && commonCustomizer !== void 0 && commonCustomizer.length ? commonCustomizer : null);
  var columnView = (_headerEndCell$_3 = headerEndCell._) === null || _headerEndCell$_3 === void 0 ? void 0 : _headerEndCell$_3.view;
  var CellView = cellView || columnView || cellsView;
  var _useCurrentState = useCurrentState(false), _useCurrentState2 = _slicedToArray(_useCurrentState, 3), hover3 = _useCurrentState2[0], hoverCurrent = _useCurrentState2[1];
  _useCurrentState2[2];
  var _React$useState = React.useState(0), _React$useState2 = _slicedToArray(_React$useState, 2);
  _React$useState2[0];
  var setRefresh = _React$useState2[1];
  var refresh = function refresh2() {
    return setRefresh(UTILS.random16());
  };
  React.useEffect(function() {
    connector.refresh.column[cellIndex] = connector.refresh.column[cellIndex] || [];
    connector.refresh.column[cellIndex].push(refresh);
    setTimeout(refresh, 0);
    return function() {
      return console.log("------------ TableRowCell");
    };
  }, []);
  var cellRef = React.useRef(null);
  var testRef = React.useRef(null);
  var removePopupFunction = React.useRef(null);
  React.useEffect(function() {
    console.log("*** HOVER ***");
    if (highlightHovered && hoverCurrent.current)
      utils.setHoveredCell(cellIndex, rowIndex);
    if (!showHints || !hoverCurrent.current || !testRef.current)
      return;
    var _testRef$current$getB = testRef.current.getBoundingClientRect(), width = _testRef$current$getB.width;
    if (width <= columnsWidth[cellIndex])
      return;
    var popupAnswer = {};
    setTimeout(function() {
      if (removePopupFunction.current)
        removePopupFunction.current();
      if (!hoverCurrent.current)
        return;
      var removePopup = function removePopup2() {
        return removePopupFunction.current();
      };
      var _callPopup = callPopup({
        initiator: cellRef.current,
        extraClass: "table-hint",
        minWidth: columnsWidth[cellIndex],
        minHeight: 10,
        maxWidth: 400,
        onOutsideClick: removePopup,
        notResize: true,
        autoSize: true,
        children: /* @__PURE__ */ React.createElement("div", {
          dangerouslySetInnerHTML: {
            __html: value.replace(/, /g, "<br/>")
          }
        }),
        answer: popupAnswer
      }), removeComponent = _callPopup.removeComponent;
      removePopupFunction.current = removeComponent;
      setTimeout(function() {
        var randomClass = popupAnswer.randomClass, _popupAnswer$directio = popupAnswer.direction, up = _popupAnswer$directio.up, left = _popupAnswer$directio.left;
        var popupEl = document.querySelector(".".concat(randomClass));
        popupEl.classList.add(up ? "up" : "down");
        popupEl.classList.add(left ? "left" : "right");
      }, 0);
    }, 1e3);
  }, [hover3]);
  if (!connector.showColumns[cellIndex])
    return null;
  var onMouseEnter = function onMouseEnter2() {
    var _connector$editableCe;
    if ((_connector$editableCe = connector.editableCell) !== null && _connector$editableCe !== void 0 && _connector$editableCe.cell)
      return;
  };
  var onMouseLeave = function onMouseLeave2() {
    var _connector$editableCe2;
    if ((_connector$editableCe2 = connector.editableCell) !== null && _connector$editableCe2 !== void 0 && _connector$editableCe2.cell)
      return;
    if (removePopupFunction.current)
      removePopupFunction.current();
  };
  var toggleShowRowTree = function toggleShowRowTree2() {
    utils.toggleShowRowTree(rowIndex);
  };
  var style = utils.getWidthStyle(columnsWidth[cellIndex]);
  var isTreeCell = !cellIndex && tableHasRowsTree;
  var isTreeRoot = isTreeCell && rowTreeData.isRoot;
  var format2 = utils.getFormatByCellIndex(cellIndex) || {};
  var align = format2.align, color = format2.color, background = format2.background, wrap = format2.wrap;
  if (align === "left" || align === "right")
    style["text-align"] = align;
  if (color)
    style["color"] = color;
  if (background)
    style["background"] = background;
  var valueStyle = wrap ? {
    "white-space": "normal"
  } : {};
  if (highlightHovered && (((_connector$hovered = connector.hovered) === null || _connector$hovered === void 0 ? void 0 : _connector$hovered.row) === rowIndex || ((_connector$hovered2 = connector.hovered) === null || _connector$hovered2 === void 0 ? void 0 : _connector$hovered2.column) === cellIndex)) {
    style["background"] = hoveredBackground;
  }
  var searchContext = utils.getSearchContextByCellIndex(cellIndex);
  var _ref3 = searchContext && value && !CellView && !isNotFind ? UTILS.textWithSearchContext(String(value), searchContext, true) : {
    html: value
  }, html = _ref3.html, find = _ref3.find;
  var cellData = _objectSpread2(_objectSpread2({}, props), {}, {
    isTreeCell,
    isTreeRoot,
    toggleShowRowTree,
    valueStyle,
    CellView,
    cellRef,
    html,
    refreshCell: refresh
  });
  var conditionalData = customizer !== null && customizer !== void 0 && customizer.length ? utils.getCustomizer({
    customizer,
    cell
  }) : {
    css: {},
    "class": ""
  };
  var conditionalCss = conditionalData.css, conditionalClass = conditionalData["class"];
  var className = "unitable-row-cell".concat(isTreeCell ? " is-tree-cell" : "").concat(isNotFind ? " is-not-find" : "").concat(find ? " cell-with-search-context" : "");
  if (conditionalClass)
    className += " " + conditionalClass;
  if ((_cell$_ = cell._) !== null && _cell$_ !== void 0 && _cell$_.invalidValueFormat)
    className += " invalid-format";
  console.log("++++++++++++ TableRowCell");
  return /* @__PURE__ */ React.createElement("div", {
    className,
    style: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, commonCSS), style), css), conditionalCss),
    ref: cellRef,
    onMouseEnter,
    onMouseLeave
  }, /* @__PURE__ */ React.createElement(TableRowCellContent, cellData), hover3 && /* @__PURE__ */ React.createElement("div", {
    className: "unitable-row-cell unitable-row-cell-test",
    ref: testRef
  }, /* @__PURE__ */ React.createElement(TableRowCellContent, cellData)));
};
var tableRowCellContent = "";
var TableRowCellContent = function TableRowCellContent2(props) {
  var _React$useState = React.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), isEdit = _React$useState2[0], _setIsEdit = _React$useState2[1];
  var aaa = React.useRef(Math.random());
  console.log("+++++++++ TableRowCellContent", isEdit, aaa.current);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "unitable-row-cell-value",
    onClick: function onClick() {
      _setIsEdit(!isEdit);
    }
  }, "aaa"));
};
var tableCellEditor = "";
var tableCellEditorBool = "";
var tableCellEditorString = "";
var tableCellEditorSet = "";
var tableRowCellContentEditor = "";
var tablePaginator = "";
var TablePaginator = function TablePaginator2(props) {
  var utils = props.utils, connector = props.connector;
  var paginatorHeight = connector.sizes.paginatorHeight, tableHas = connector.tableHas, rowsRootNumber = connector.rowsRootNumber, params = connector.params, options = connector.options, onChangeComponentState = connector.onChangeComponentState;
  var _options$paginator$ro = options.paginator.rowsByPage, rowsByPage = _options$paginator$ro === void 0 ? [] : _options$paginator$ro;
  var pageLength = params.pageLength, totalLength = params.totalLength;
  var _onChangeComponentSta = onChangeComponentState.onClickToPaginator_ShowLength, onClickToPaginator_ShowLength = _onChangeComponentSta === void 0 ? function() {
  } : _onChangeComponentSta, _onChangeComponentSta2 = onChangeComponentState.onClickToPaginator_RowsByPage, onClickToPaginator_RowsByPage = _onChangeComponentSta2 === void 0 ? function() {
  } : _onChangeComponentSta2, _onChangeComponentSta3 = onChangeComponentState.onClickToPaginator_GoToPage, onClickToPaginator_GoToPage = _onChangeComponentSta3 === void 0 ? function() {
  } : _onChangeComponentSta3;
  var pageNum = params.pageNum;
  var _React$useState = React.useState(0), _React$useState2 = _slicedToArray(_React$useState, 2), _ = _React$useState2[0], setRefresh = _React$useState2[1];
  var refresh = function refresh2() {
    return setRefresh(UTILS.random16());
  };
  React.useEffect(function() {
    connector.refresh.paginator = refresh;
  }, []);
  if (!tableHas.paginator)
    return null;
  var getPagesNum = function getPagesNum2() {
    var remains = totalLength % pageLength;
    return Math.floor(totalLength / pageLength) + (remains ? 1 : 0);
  };
  var onClickToPaginatorPage = function onClickToPaginatorPage2(pageNum2) {
    var rowsFromStore = utils.storeGetPage({
      pageNum: pageNum2
    });
    if (!rowsFromStore) {
      onClickToPaginator_GoToPage(pageNum2);
      return;
    }
    console.log("################### GET PAGE FROM STORE", pageNum2);
    utils.refreshBodyWithNewRows({
      newRows: rowsFromStore,
      newPageNum: pageNum2
    });
  };
  var toFirstPage = function toFirstPage2() {
    return onClickToPaginatorPage(0);
  };
  var toPrevPage = function toPrevPage2() {
    return onClickToPaginatorPage(pageNum - 1);
  };
  var toNextPage = function toNextPage2() {
    return onClickToPaginatorPage(pageNum + 1);
  };
  var toLastPage = function toLastPage2() {
    return onClickToPaginatorPage(pagesNum - 1);
  };
  var clickToRowsByPage = function clickToRowsByPage2(length) {
    if (!utils.storeRowsIsLoaded()) {
      onClickToPaginator_RowsByPage(length);
      return;
    }
    console.log("################### GET PAGE FROM STORE", 0);
    utils.refreshBodyWithNewRows({
      newRows: utils.storeGetPage({
        pageNum: 0,
        pageLength: length
      }),
      newPageLength: length,
      newPageNum: 0
    });
  };
  var pagesNum = totalLength ? getPagesNum() : void 0;
  var commonClass = "btn pager-control";
  var disabledFirstClass = pageNum ? "" : " disabled";
  var disabledPreClass = disabledFirstClass;
  var disabledNextClass = !pagesNum || pageNum < pagesNum - 1 ? "" : " disabled";
  var disabledLastClass = pagesNum && pageNum < pagesNum - 1 ? "" : " disabled";
  return /* @__PURE__ */ React.createElement("div", {
    className: "unitable-paginator",
    style: utils.getHeightStyle(paginatorHeight)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "slick-pager"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "btn-group slick-pager-nav"
  }, /* @__PURE__ */ React.createElement("a", {
    className: commonClass + disabledFirstClass,
    onClick: disabledFirstClass ? function() {
    } : toFirstPage,
    title: "\u041D\u0430 \u043F\u0435\u0440\u0432\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "icon-step-backward"
  })), /* @__PURE__ */ React.createElement("a", {
    className: commonClass + disabledPreClass,
    onClick: disabledPreClass ? function() {
    } : toPrevPage,
    title: "\u041D\u0430 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "icon-backward"
  })), /* @__PURE__ */ React.createElement("a", {
    className: commonClass + disabledNextClass,
    onClick: disabledNextClass ? function() {
    } : toNextPage,
    title: "\u041D\u0430 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "icon-forward"
  })), /* @__PURE__ */ React.createElement("a", {
    className: commonClass + disabledLastClass,
    onClick: disabledLastClass ? function() {
    } : toLastPage,
    title: "\u041D\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044E\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "icon-step-forward"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "slick-pager-status"
  }, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ", pageNum + 1, " \u0438\u0437", /* @__PURE__ */ React.createElement(Undef, {
    num: pagesNum,
    onClickToShowInPaginator: onClickToPaginator_ShowLength
  }), /* @__PURE__ */ React.createElement("div", {
    className: "between"
  }), "(\u0441\u0442\u0440\u043E\u043A: ", rowsRootNumber, " \u0438\u0437", /* @__PURE__ */ React.createElement(Undef, {
    num: totalLength,
    onClickToShowInPaginator: onClickToPaginator_ShowLength
  }), ")"), rowsByPage.length && /* @__PURE__ */ React.createElement("span", {
    className: "slick-pager-settings"
  }, "\u0421\u0442\u0440\u043E\u043A \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435:", /* @__PURE__ */ React.createElement("div", {
    className: "btn-group",
    "data-toggle": "buttons-radio"
  }, rowsByPage.map(function(num, index) {
    return /* @__PURE__ */ React.createElement("div", {
      key: "pag-index-".concat(index),
      className: "btn".concat(num === pageLength ? " active" : "", " ").concat(_),
      onClick: function onClick() {
        return clickToRowsByPage(num);
      }
    }, num);
  })))));
};
var Undef = function Undef2(props) {
  var num = props.num, onClickToShowInPaginator = props.onClickToShowInPaginator;
  if (!isNaN(num))
    return /* @__PURE__ */ React.createElement("div", {
      className: "num"
    }, num);
  return /* @__PURE__ */ React.createElement("div", {
    className: "undefined-number text-primary",
    onClick: onClickToShowInPaginator
  }, "\u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C");
};
var tableSettings = "";
var TableSettings = function TableSettings2(props) {
  var connector = props.connector;
  var _React$useState = React.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), isShow = _React$useState2[0], setIsShow = _React$useState2[1];
  var settingsRef = React.useRef(null);
  React.useEffect(function() {
    connector.refs.settings = settingsRef.current;
  }, []);
  var toggleShow = function toggleShow2() {
    return setIsShow(!isShow);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "unitable-settings",
    ref: settingsRef
  }, /* @__PURE__ */ React.createElement("i", {
    className: "unitable-settings-icon fas fa-cog",
    title: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0442\u0430\u0431\u043B\u0438\u0446\u044B",
    onClick: toggleShow
  }), isShow && /* @__PURE__ */ React.createElement(Popup, {
    initiator: settingsRef.current,
    id: "unitable",
    maxHeight: "50%",
    onOutsideClick: toggleShow,
    notResize: true,
    autoSize: true
  }, /* @__PURE__ */ React.createElement(TableSettingsPanel, props)));
};
var tableSettingsPanel = "";
var TableSettingsPanel = function TableSettingsPanel2(props) {
  var utils = props.utils, connector = props.connector;
  var editableSettings = connector.options.editableSettings;
  utils.distributeShowColumnsToHeader();
  var parametersPanelIsPresent = false;
  for (var i in editableSettings) {
    if (editableSettings[i]) {
      parametersPanelIsPresent = true;
      break;
    }
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "unitable-settings-panel"
  }, /* @__PURE__ */ React.createElement(TableSettingsPanelList, props), parametersPanelIsPresent && /* @__PURE__ */ React.createElement(TableSettingsPanelParameters, props));
};
var tableSettingsPanelList = "";
var TableSettingsPanelList = function TableSettingsPanelList2(props) {
  var utils = props.utils, connector = props.connector;
  var header = connector.header, orderTree = connector.orderTree, numberFixedLeftColumns = connector.numberFixedLeftColumns;
  var _React$useState = React.useState(0), _React$useState2 = _slicedToArray(_React$useState, 2);
  _React$useState2[0];
  var setRefresh = _React$useState2[1];
  var refresh = function refresh2() {
    return setRefresh(UTILS.random16);
  };
  var _utils$splitRowByLeft = utils.splitRowByLeftAndRight(orderTree, numberFixedLeftColumns), _utils$splitRowByLeft2 = _slicedToArray(_utils$splitRowByLeft, 2), orderLeft = _utils$splitRowByLeft2[0], orderRight = _utils$splitRowByLeft2[1];
  return /* @__PURE__ */ React.createElement("div", {
    className: "usp-list"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "usp-list-left"
  }, orderLeft.map(function(item) {
    var i = item.i, ch = item.ch;
    var cell = header[i];
    var key = "panel-list-".concat(cell._.ordinalIndex);
    return /* @__PURE__ */ React.createElement(_Branch, _extends$g({
      key
    }, props, {
      cell,
      parent: null,
      parentCh: orderTree,
      parentChildren: header,
      ch,
      isLeft: true
    }));
  })), /* @__PURE__ */ React.createElement("div", {
    className: "usp-list-right"
  }, orderRight.map(function(item) {
    var i = item.i, ch = item.ch;
    var cell = header[i];
    var key = "panel-list-".concat(cell._.ordinalIndex);
    return /* @__PURE__ */ React.createElement(_Branch, _extends$g({
      key
    }, props, {
      cell,
      parent: null,
      parentCh: orderTree,
      ch,
      parentChildren: header,
      isRight: true,
      refresh
    }));
  })));
};
var _Branch = function Branch(props) {
  var utils = props.utils, cell = props.cell, ch = props.ch, parentCh = props.parentCh, parentChildren = props.parentChildren, _props$level = props.level, level = _props$level === void 0 ? 0 : _props$level, isLeft = props.isLeft, refresh = props.refresh;
  var value = cell.value, children = cell.children, isEnd = cell._.isEnd;
  var _React$useState3 = React.useState(true), _React$useState4 = _slicedToArray(_React$useState3, 2), collapsed = _React$useState4[0], setCollapsed = _React$useState4[1];
  var toggleCollapsed = function toggleCollapsed2() {
    return setCollapsed(!collapsed);
  };
  var toggleShow = function toggleShow2() {
    utils.toggleCheckedCell(cell);
    utils.distributeHeaderToShowColumns();
    utils.refreshTableWidth();
    utils.saveTableSettingsToLocaleStorage();
    refresh();
  };
  var labelData = _objectSpread2(_objectSpread2({}, props), {}, {
    value,
    collapsed,
    toggleCollapsed,
    isEnd,
    toggleShow,
    isLeft,
    parentCh,
    parentChildren
  });
  return /* @__PURE__ */ React.createElement("div", {
    className: "branch"
  }, /* @__PURE__ */ React.createElement(BranchLabel, labelData), !isEnd && /* @__PURE__ */ React.createElement("div", {
    className: "branch-children".concat(collapsed ? " collapsed" : "")
  }, ch.map(function(item) {
    var i = item.i, _ch = item.ch;
    var _cell = children[i];
    var key = "panel-list-".concat(_cell._.ordinalIndex);
    return /* @__PURE__ */ React.createElement(_Branch, _extends$g({
      key
    }, props, {
      parentChildren: children,
      cell: _cell,
      parent: cell,
      parentCh: ch,
      ch: _ch,
      level: level + 1
    }));
  })));
};
var BranchLabel = function BranchLabel2(props) {
  var utils = props.utils, connector = props.connector, cell = props.cell, parent = props.parent, value = props.value, collapsed = props.collapsed, toggleCollapsed = props.toggleCollapsed, isEnd = props.isEnd, toggleShow = props.toggleShow, isLeft = props.isLeft, parentCh = props.parentCh, parentChildren = props.parentChildren, refresh = props.refresh;
  var show = cell._.checked;
  var branchRef = React.useRef(null);
  var _React$useState5 = React.useState(false), _React$useState6 = _slicedToArray(_React$useState5, 2), showOrderPanel = _React$useState6[0], setShowOrderPanel = _React$useState6[1];
  var openOrderMenu = function openOrderMenu2() {
    var list = [];
    var _iterator = _createForOfIteratorHelper(parentCh), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var item = _step.value;
        var index = item.i;
        list.push({
          index,
          value: parentChildren[index].value,
          isLeft: !!parentChildren[index]._.isLeft
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    setShowOrderPanel({
      list
    });
  };
  var onChangeOrder = function onChangeOrder2(list) {
    var tmp = {};
    var _iterator2 = _createForOfIteratorHelper(parentCh), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var item = _step2.value;
        tmp[item.i] = item;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    for (var i in list)
      parentCh[i] = tmp[list[i].index];
    utils.orderTreeToOrderEnds();
    connector.refresh.headerAndBody();
    utils.saveTableSettingsToLocaleStorage();
    refresh();
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "branch-label-wrapper ".concat(isEnd ? "is-end" : "is-root").concat(show ? " is-show" : " is-hide"),
    ref: branchRef
  }, /* @__PURE__ */ React.createElement("div", {
    className: "branch-collapsed"
  }, !isEnd && /* @__PURE__ */ React.createElement("i", {
    className: "fas fa-chevron-".concat(collapsed ? "up" : "down"),
    onClick: toggleCollapsed
  })), /* @__PURE__ */ React.createElement("div", {
    className: "branch-show"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    checked: show,
    onChange: isLeft ? function() {
    } : toggleShow
  })), /* @__PURE__ */ React.createElement("div", {
    className: "branch-label"
  }, value), /* @__PURE__ */ React.createElement("div", {
    className: "branch-order"
  }, !isLeft && /* @__PURE__ */ React.createElement("i", {
    className: "fas fa-exchange-alt",
    onClick: openOrderMenu
  })), showOrderPanel && /* @__PURE__ */ React.createElement(Popup, {
    initiator: branchRef.current,
    id: "unitable-order-panel",
    minWidth: "0",
    minHeight: "0",
    onOutsideClick: function onOutsideClick() {
      return setShowOrderPanel(false);
    },
    notResize: true,
    autoSize: true
  }, /* @__PURE__ */ React.createElement(TableSettingsPanelOrder, _extends$g({}, props, {
    list: showOrderPanel.list,
    root: parent !== null && parent !== void 0 && parent.value ? parent.value : "ROOT",
    onChange: onChangeOrder
  }))));
};
var tableSettingsPanelParameters = "";
var TableSettingsPanelParameters = function TableSettingsPanelParameters2(props) {
  var utils = props.utils, connector = props.connector;
  var editableSettings = connector.options.editableSettings, _connector$refresh = connector.refresh, refreshHeader = _connector$refresh.header, refreshBody = _connector$refresh.body;
  var reSearch = function reSearch2() {
    var rowsFromStore = utils.storeGetPage();
    if (!rowsFromStore)
      return;
    console.log("################### GET PAGE FROM STORE", 0);
    utils.refreshBodyWithNewRows({
      newRows: rowsFromStore,
      newPageNum: 0,
      openAllLevels: true
    });
  };
  var data = [{
    blockName: "\u0426\u0412\u0415\u0422 \u0424\u041E\u041D\u0410"
  }, {
    alias: "bgrHeader",
    address: "background.header",
    type: "color",
    title: "\u0448\u0430\u043F\u043A\u0438 \u0442\u0430\u0431\u043B\u0438\u0446\u044B",
    refresh: refreshHeader
  }, {
    alias: "bgrEvenRows",
    address: "background.evenRows",
    type: "color",
    title: "\u0447\u0451\u0442\u043D\u044B\u0445 \u0441\u0442\u0440\u043E\u043A",
    refresh: refreshBody
  }, {
    alias: "bgrOddRows",
    address: "background.oddRows",
    type: "color",
    title: "\u043D\u0435\u0447\u0451\u0442\u043D\u044B\u0445 \u0441\u0442\u0440\u043E\u043A",
    refresh: refreshBody
  }, {
    alias: "bgrHover",
    address: "background.hovered",
    type: "color",
    title: "\u0441\u0442\u0440\u043E\u043A\u0430 \u0438 \u0441\u0442\u043E\u043B\u0431\u0435\u0446 \u043F\u043E\u0434 \u043A\u0443\u0440\u0441\u043E\u0440\u043E\u043C",
    refresh: refreshBody
  }, {
    blockName: "\u0418\u0417\u041C\u0415\u041D\u042F\u0422\u042C \u0420\u0410\u0417\u041C\u0415\u0420\u042B"
  }, {
    alias: "resizeHeaderHeight",
    address: "resize.headerHeight",
    type: "bool",
    title: "\u0432\u044B\u0441\u043E\u0442\u0430 \u0448\u0430\u043F\u043A\u0438 \u0442\u0430\u0431\u043B\u0438\u0446\u044B",
    refresh: refreshHeader
  }, {
    alias: "resizeRowsHeight",
    address: "resize.rowsHeight",
    type: "bool",
    title: "\u0432\u044B\u0441\u043E\u0442\u0430 \u0441\u0442\u0440\u043E\u043A",
    refresh: refreshBody
  }, {
    alias: "resizeColumnsWidth",
    address: "resize.columnsWidth",
    type: "bool",
    title: "\u0448\u0438\u0440\u0438\u043D\u0430 \u0441\u0442\u043E\u043B\u0431\u0446\u043E\u0432",
    refresh: refreshHeader
  }, {
    blockName: "\u0421\u041E\u0421\u0422\u0410\u0412 \u041C\u0415\u041D\u042E \u042F\u0427\u0415\u0415\u041A \u0428\u0410\u041F\u041A\u0418"
  }, {
    alias: "colHasHideIcon",
    address: "columnsMenu.hasHideIcon",
    type: "bool",
    title: "\u0441\u043A\u0440\u044B\u0442\u0438\u0435 \u0441\u0442\u043E\u043B\u0431\u0446\u043E\u0432",
    refresh: refreshHeader
  }, {
    alias: "colHasOrderIcon",
    address: "columnsMenu.hasOrderIcon",
    type: "bool",
    title: "\u0441\u043C\u0435\u043D\u0430 \u043F\u043E\u0440\u044F\u0434\u043A\u0430 \u0441\u0442\u043E\u043B\u0431\u0446\u043E\u0432",
    refresh: refreshHeader
  }, {
    alias: "colHasFormatIcon",
    address: "columnsMenu.hasFormatIcon",
    type: "bool",
    title: "\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u043E\u043B\u0431\u0446\u043E\u0432",
    refresh: refreshHeader
  }, {
    alias: "colHasSearchIcon",
    address: "columnsMenu.hasSearchIcon",
    type: "bool",
    title: "\u043F\u043E\u0438\u0441\u043A \u043F\u043E \u0441\u0442\u043E\u043B\u0431\u0446\u0430\u043C",
    refresh: refreshHeader
  }, {
    alias: "colHasSortIcon",
    address: "columnsMenu.hasSortIcon",
    type: "bool",
    title: "\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E \u0441\u0442\u043E\u043B\u0431\u0446\u0430\u043C",
    refresh: refreshHeader
  }, {
    blockName: "\u0420\u0410\u0417\u041D\u041E\u0415"
  }, {
    alias: "showHints",
    address: "other.showHints",
    type: "bool",
    title: "\u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u043F\u043E\u043B\u043D\u0435\u043D\u044B\u0445 \u044F\u0447\u0435\u0435\u043A",
    refresh: refreshBody
  }, {
    alias: "searchLogicAND",
    address: "other.searchLogicAND",
    type: "bool",
    title: '\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0435 "\u0418" \u043F\u043E\u0438\u0441\u043A\u0430',
    refresh: reSearch
  }, {
    alias: "isHovered",
    address: "other.highlightHovered",
    type: "bool",
    title: "\u0432\u044B\u0434\u0435\u043B\u0430\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0443 \u0438 \u0441\u0442\u043E\u043B\u0431\u0435\u0446 \u043F\u043E\u0434 \u043A\u0443\u0440\u0441\u043E\u0440\u043E\u043C",
    refresh: refreshBody
  }];
  var getOptionValue = function getOptionValue2(address) {
    return utils.getValueByAddress("options.".concat(address));
  };
  var setOptionValue = function setOptionValue2(address, value) {
    return utils.setValueByAddress("options.".concat(address), value);
  };
  var lastBlock;
  var showLastBlock = false;
  for (var _i = 0, _data = data; _i < _data.length; _i++) {
    var item = _data[_i];
    if (item.blockName) {
      if (lastBlock) {
        lastBlock.show = showLastBlock;
        showLastBlock = false;
      }
      lastBlock = item;
    } else {
      if (editableSettings[item.alias])
        showLastBlock = true;
    }
  }
  lastBlock.show = showLastBlock;
  return /* @__PURE__ */ React.createElement("div", {
    className: "usp-parameters"
  }, data.map(function(item2, index) {
    var key = "par-".concat(index);
    if (item2.blockName)
      return /* @__PURE__ */ React.createElement("div", {
        key,
        className: "usp-param-block-name".concat(item2.show ? "" : " is-hide")
      }, item2.blockName);
    return /* @__PURE__ */ React.createElement(Parameter, _extends$g({
      key
    }, props, {
      item: item2,
      getOptionValue,
      setOptionValue
    }));
  }));
};
var Parameter = function Parameter2(props) {
  var connector = props.connector, item = props.item;
  var editableSettings = connector.options.editableSettings;
  var alias = item.alias, type = item.type, title = item.title;
  item.isDisable = !editableSettings[alias];
  return /* @__PURE__ */ React.createElement("div", {
    className: "usp-param-item".concat(item.isDisable ? " is-disable" : "")
  }, type === "bool" && /* @__PURE__ */ React.createElement(ParameterCheckbox, props), type === "color" && /* @__PURE__ */ React.createElement(ParameterColor, props), title);
};
var ParameterCheckbox = function ParameterCheckbox2(props) {
  var utils = props.utils, item = props.item, getOptionValue = props.getOptionValue, setOptionValue = props.setOptionValue, key = props.key;
  var address = item.address, isDisable = item.isDisable, refresh = item.refresh;
  var _React$useState = React.useState(getOptionValue(address)), _React$useState2 = _slicedToArray(_React$useState, 2), checked = _React$useState2[0], setChecked = _React$useState2[1];
  var clickToCheckbox = function clickToCheckbox2() {
    setChecked(!checked);
    setOptionValue(address, !checked);
    if (refresh)
      refresh();
    utils.saveTableSettingsToLocaleStorage();
  };
  return /* @__PURE__ */ React.createElement("input", {
    key,
    type: "checkbox",
    checked,
    onChange: isDisable ? function() {
    } : clickToCheckbox
  });
};
var ParameterColor = function ParameterColor2(props) {
  var utils = props.utils, item = props.item, getOptionValue = props.getOptionValue, setOptionValue = props.setOptionValue;
  var address = item.address, isDisable = item.isDisable, refresh = item.refresh;
  var _React$useState3 = React.useState(getOptionValue(address) || "#fff"), _React$useState4 = _slicedToArray(_React$useState3, 2), color = _React$useState4[0], setColor = _React$useState4[1];
  var _React$useState5 = React.useState(false), _React$useState6 = _slicedToArray(_React$useState5, 2), showPicker = _React$useState6[0], setShowPicker = _React$useState6[1];
  return /* @__PURE__ */ React.createElement("div", {
    className: "usp-param-item-color",
    style: {
      background: color
    },
    onClick: isDisable ? null : function() {
      return setShowPicker(true);
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "color-picker-wrapper"
  }, showPicker && /* @__PURE__ */ React.createElement(ColorPicker, {
    pickerType: "sketch",
    color,
    onChange: function onChange(color2) {
      setColor(color2);
      setOptionValue(address, color2);
      if (refresh)
        refresh();
      utils.saveTableSettingsToLocaleStorage();
    },
    onClickOutside: function onClickOutside() {
      return setShowPicker(false);
    }
  })));
};
const DndContext = createContext({
  dragDropManager: void 0
});
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or use the non-minified dev environment for full errors. ";
}
var $$observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
var randomString = function randomString2() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};
function isPlainObject$1(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  var proto2 = obj;
  while (Object.getPrototypeOf(proto2) !== null) {
    proto2 = Object.getPrototypeOf(proto2);
  }
  return Object.getPrototypeOf(obj) === proto2;
}
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(formatProdErrorMessage(0));
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(formatProdErrorMessage(1));
    }
    return enhancer(createStore)(reducer, preloadedState);
  }
  if (typeof reducer !== "function") {
    throw new Error(formatProdErrorMessage(2));
  }
  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(3));
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(formatProdErrorMessage(4));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(5));
    }
    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(formatProdErrorMessage(6));
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  function dispatch(action2) {
    if (!isPlainObject$1(action2)) {
      throw new Error(formatProdErrorMessage(7));
    }
    if (typeof action2.type === "undefined") {
      throw new Error(formatProdErrorMessage(8));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(9));
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action2);
    } finally {
      isDispatching = false;
    }
    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }
    return action2;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(formatProdErrorMessage(10));
    }
    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  function observable2() {
    var _ref;
    var outerSubscribe = subscribe;
    return _ref = {
      subscribe: function subscribe2(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(formatProdErrorMessage(11));
        }
        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }
        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      }
    }, _ref[$$observable] = function() {
      return this;
    }, _ref;
  }
  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch,
    subscribe,
    getState,
    replaceReducer
  }, _ref2[$$observable] = observable2, _ref2;
}
function invariant(condition, format2, ...args) {
  if (isProduction()) {
    if (format2 === void 0) {
      throw new Error("invariant requires an error message argument");
    }
  }
  if (!condition) {
    let error;
    if (format2 === void 0) {
      error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    } else {
      let argIndex = 0;
      error = new Error(format2.replace(/%s/g, function() {
        return args[argIndex++];
      }));
      error.name = "Invariant Violation";
    }
    error.framesToPop = 1;
    throw error;
  }
}
function isProduction() {
  return typeof process !== "undefined" && process.env["NODE_ENV"] === "production";
}
function get2(obj, path, defaultValue) {
  return path.split(".").reduce(
    (a, c) => a && a[c] ? a[c] : defaultValue || null,
    obj
  );
}
function without$1(items, item) {
  return items.filter(
    (i) => i !== item
  );
}
function isObject$1(input) {
  return typeof input === "object";
}
function xor(itemsA, itemsB) {
  const map3 = /* @__PURE__ */ new Map();
  const insertItem = (item) => {
    map3.set(item, map3.has(item) ? map3.get(item) + 1 : 1);
  };
  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  const result = [];
  map3.forEach((count, key) => {
    if (count === 1) {
      result.push(key);
    }
  });
  return result;
}
function intersection(itemsA, itemsB) {
  return itemsA.filter(
    (t) => itemsB.indexOf(t) > -1
  );
}
const INIT_COORDS = "dnd-core/INIT_COORDS";
const BEGIN_DRAG = "dnd-core/BEGIN_DRAG";
const PUBLISH_DRAG_SOURCE = "dnd-core/PUBLISH_DRAG_SOURCE";
const HOVER = "dnd-core/HOVER";
const DROP = "dnd-core/DROP";
const END_DRAG = "dnd-core/END_DRAG";
function setClientOffset(clientOffset, sourceClientOffset) {
  return {
    type: INIT_COORDS,
    payload: {
      sourceClientOffset: sourceClientOffset || null,
      clientOffset: clientOffset || null
    }
  };
}
const ResetCoordinatesAction = {
  type: INIT_COORDS,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function createBeginDrag(manager) {
  return function beginDrag(sourceIds = [], options = {
    publishSource: true
  }) {
    const { publishSource = true, clientOffset, getSourceClientOffset: getSourceClientOffset2 } = options;
    const monitor = manager.getMonitor();
    const registry = manager.getRegistry();
    manager.dispatch(setClientOffset(clientOffset));
    verifyInvariants$1(sourceIds, monitor, registry);
    const sourceId = getDraggableSource(sourceIds, monitor);
    if (sourceId == null) {
      manager.dispatch(ResetCoordinatesAction);
      return;
    }
    let sourceClientOffset = null;
    if (clientOffset) {
      if (!getSourceClientOffset2) {
        throw new Error("getSourceClientOffset must be defined");
      }
      verifyGetSourceClientOffsetIsFunction(getSourceClientOffset2);
      sourceClientOffset = getSourceClientOffset2(sourceId);
    }
    manager.dispatch(setClientOffset(clientOffset, sourceClientOffset));
    const source = registry.getSource(sourceId);
    const item = source.beginDrag(monitor, sourceId);
    if (item == null) {
      return void 0;
    }
    verifyItemIsObject(item);
    registry.pinSource(sourceId);
    const itemType = registry.getSourceType(sourceId);
    return {
      type: BEGIN_DRAG,
      payload: {
        itemType,
        item,
        sourceId,
        clientOffset: clientOffset || null,
        sourceClientOffset: sourceClientOffset || null,
        isSourcePublic: !!publishSource
      }
    };
  };
}
function verifyInvariants$1(sourceIds, monitor, registry) {
  invariant(!monitor.isDragging(), "Cannot call beginDrag while dragging.");
  sourceIds.forEach(function(sourceId) {
    invariant(registry.getSource(sourceId), "Expected sourceIds to be registered.");
  });
}
function verifyGetSourceClientOffsetIsFunction(getSourceClientOffset2) {
  invariant(typeof getSourceClientOffset2 === "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function verifyItemIsObject(item) {
  invariant(isObject$1(item), "Item must be an object.");
}
function getDraggableSource(sourceIds, monitor) {
  let sourceId = null;
  for (let i = sourceIds.length - 1; i >= 0; i--) {
    if (monitor.canDragSource(sourceIds[i])) {
      sourceId = sourceIds[i];
      break;
    }
  }
  return sourceId;
}
function _defineProperty$4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectSpread$4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys3 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys3 = ownKeys3.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys3.forEach(function(key) {
      _defineProperty$4(target, key, source[key]);
    });
  }
  return target;
}
function createDrop(manager) {
  return function drop(options = {}) {
    const monitor = manager.getMonitor();
    const registry = manager.getRegistry();
    verifyInvariants(monitor);
    const targetIds = getDroppableTargets(monitor);
    targetIds.forEach((targetId, index) => {
      const dropResult = determineDropResult(targetId, index, registry, monitor);
      const action2 = {
        type: DROP,
        payload: {
          dropResult: _objectSpread$4({}, options, dropResult)
        }
      };
      manager.dispatch(action2);
    });
  };
}
function verifyInvariants(monitor) {
  invariant(monitor.isDragging(), "Cannot call drop while not dragging.");
  invariant(!monitor.didDrop(), "Cannot call drop twice during one drag operation.");
}
function determineDropResult(targetId, index, registry, monitor) {
  const target = registry.getTarget(targetId);
  let dropResult = target ? target.drop(monitor, targetId) : void 0;
  verifyDropResultType(dropResult);
  if (typeof dropResult === "undefined") {
    dropResult = index === 0 ? {} : monitor.getDropResult();
  }
  return dropResult;
}
function verifyDropResultType(dropResult) {
  invariant(typeof dropResult === "undefined" || isObject$1(dropResult), "Drop result must either be an object or undefined.");
}
function getDroppableTargets(monitor) {
  const targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
  targetIds.reverse();
  return targetIds;
}
function createEndDrag(manager) {
  return function endDrag() {
    const monitor = manager.getMonitor();
    const registry = manager.getRegistry();
    verifyIsDragging(monitor);
    const sourceId = monitor.getSourceId();
    if (sourceId != null) {
      const source = registry.getSource(sourceId, true);
      source.endDrag(monitor, sourceId);
      registry.unpinSource();
    }
    return {
      type: END_DRAG
    };
  };
}
function verifyIsDragging(monitor) {
  invariant(monitor.isDragging(), "Cannot call endDrag while not dragging.");
}
function matchesType(targetType, draggedItemType) {
  if (draggedItemType === null) {
    return targetType === null;
  }
  return Array.isArray(targetType) ? targetType.some(
    (t) => t === draggedItemType
  ) : targetType === draggedItemType;
}
function createHover(manager) {
  return function hover3(targetIdsArg, { clientOffset } = {}) {
    verifyTargetIdsIsArray(targetIdsArg);
    const targetIds = targetIdsArg.slice(0);
    const monitor = manager.getMonitor();
    const registry = manager.getRegistry();
    const draggedItemType = monitor.getItemType();
    removeNonMatchingTargetIds(targetIds, registry, draggedItemType);
    checkInvariants(targetIds, monitor, registry);
    hoverAllTargets(targetIds, monitor, registry);
    return {
      type: HOVER,
      payload: {
        targetIds,
        clientOffset: clientOffset || null
      }
    };
  };
}
function verifyTargetIdsIsArray(targetIdsArg) {
  invariant(Array.isArray(targetIdsArg), "Expected targetIds to be an array.");
}
function checkInvariants(targetIds, monitor, registry) {
  invariant(monitor.isDragging(), "Cannot call hover while not dragging.");
  invariant(!monitor.didDrop(), "Cannot call hover after drop.");
  for (let i = 0; i < targetIds.length; i++) {
    const targetId = targetIds[i];
    invariant(targetIds.lastIndexOf(targetId) === i, "Expected targetIds to be unique in the passed array.");
    const target = registry.getTarget(targetId);
    invariant(target, "Expected targetIds to be registered.");
  }
}
function removeNonMatchingTargetIds(targetIds, registry, draggedItemType) {
  for (let i = targetIds.length - 1; i >= 0; i--) {
    const targetId = targetIds[i];
    const targetType = registry.getTargetType(targetId);
    if (!matchesType(targetType, draggedItemType)) {
      targetIds.splice(i, 1);
    }
  }
}
function hoverAllTargets(targetIds, monitor, registry) {
  targetIds.forEach(function(targetId) {
    const target = registry.getTarget(targetId);
    target.hover(monitor, targetId);
  });
}
function createPublishDragSource(manager) {
  return function publishDragSource() {
    const monitor = manager.getMonitor();
    if (monitor.isDragging()) {
      return {
        type: PUBLISH_DRAG_SOURCE
      };
    }
    return;
  };
}
function createDragDropActions(manager) {
  return {
    beginDrag: createBeginDrag(manager),
    publishDragSource: createPublishDragSource(manager),
    hover: createHover(manager),
    drop: createDrop(manager),
    endDrag: createEndDrag(manager)
  };
}
class DragDropManagerImpl {
  receiveBackend(backend) {
    this.backend = backend;
  }
  getMonitor() {
    return this.monitor;
  }
  getBackend() {
    return this.backend;
  }
  getRegistry() {
    return this.monitor.registry;
  }
  getActions() {
    const manager = this;
    const { dispatch } = this.store;
    function bindActionCreator(actionCreator) {
      return (...args) => {
        const action2 = actionCreator.apply(manager, args);
        if (typeof action2 !== "undefined") {
          dispatch(action2);
        }
      };
    }
    const actions = createDragDropActions(this);
    return Object.keys(actions).reduce((boundActions, key) => {
      const action2 = actions[key];
      boundActions[key] = bindActionCreator(action2);
      return boundActions;
    }, {});
  }
  dispatch(action2) {
    this.store.dispatch(action2);
  }
  constructor(store, monitor) {
    this.isSetUp = false;
    this.handleRefCountChange = () => {
      const shouldSetUp = this.store.getState().refCount > 0;
      if (this.backend) {
        if (shouldSetUp && !this.isSetUp) {
          this.backend.setup();
          this.isSetUp = true;
        } else if (!shouldSetUp && this.isSetUp) {
          this.backend.teardown();
          this.isSetUp = false;
        }
      }
    };
    this.store = store;
    this.monitor = monitor;
    store.subscribe(this.handleRefCountChange);
  }
}
function add(a, b) {
  return {
    x: a.x + b.x,
    y: a.y + b.y
  };
}
function subtract(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
function getSourceClientOffset(state) {
  const { clientOffset, initialClientOffset, initialSourceClientOffset } = state;
  if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
    return null;
  }
  return subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
}
function getDifferenceFromInitialOffset(state) {
  const { clientOffset, initialClientOffset } = state;
  if (!clientOffset || !initialClientOffset) {
    return null;
  }
  return subtract(clientOffset, initialClientOffset);
}
const NONE = [];
const ALL = [];
NONE.__IS_NONE__ = true;
ALL.__IS_ALL__ = true;
function areDirty(dirtyIds, handlerIds) {
  if (dirtyIds === NONE) {
    return false;
  }
  if (dirtyIds === ALL || typeof handlerIds === "undefined") {
    return true;
  }
  const commonIds = intersection(handlerIds, dirtyIds);
  return commonIds.length > 0;
}
class DragDropMonitorImpl {
  subscribeToStateChange(listener, options = {}) {
    const { handlerIds } = options;
    invariant(typeof listener === "function", "listener must be a function.");
    invariant(typeof handlerIds === "undefined" || Array.isArray(handlerIds), "handlerIds, when specified, must be an array of strings.");
    let prevStateId = this.store.getState().stateId;
    const handleChange = () => {
      const state = this.store.getState();
      const currentStateId = state.stateId;
      try {
        const canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !areDirty(state.dirtyHandlerIds, handlerIds);
        if (!canSkipListener) {
          listener();
        }
      } finally {
        prevStateId = currentStateId;
      }
    };
    return this.store.subscribe(handleChange);
  }
  subscribeToOffsetChange(listener) {
    invariant(typeof listener === "function", "listener must be a function.");
    let previousState = this.store.getState().dragOffset;
    const handleChange = () => {
      const nextState = this.store.getState().dragOffset;
      if (nextState === previousState) {
        return;
      }
      previousState = nextState;
      listener();
    };
    return this.store.subscribe(handleChange);
  }
  canDragSource(sourceId) {
    if (!sourceId) {
      return false;
    }
    const source = this.registry.getSource(sourceId);
    invariant(source, `Expected to find a valid source. sourceId=${sourceId}`);
    if (this.isDragging()) {
      return false;
    }
    return source.canDrag(this, sourceId);
  }
  canDropOnTarget(targetId) {
    if (!targetId) {
      return false;
    }
    const target = this.registry.getTarget(targetId);
    invariant(target, `Expected to find a valid target. targetId=${targetId}`);
    if (!this.isDragging() || this.didDrop()) {
      return false;
    }
    const targetType = this.registry.getTargetType(targetId);
    const draggedItemType = this.getItemType();
    return matchesType(targetType, draggedItemType) && target.canDrop(this, targetId);
  }
  isDragging() {
    return Boolean(this.getItemType());
  }
  isDraggingSource(sourceId) {
    if (!sourceId) {
      return false;
    }
    const source = this.registry.getSource(sourceId, true);
    invariant(source, `Expected to find a valid source. sourceId=${sourceId}`);
    if (!this.isDragging() || !this.isSourcePublic()) {
      return false;
    }
    const sourceType = this.registry.getSourceType(sourceId);
    const draggedItemType = this.getItemType();
    if (sourceType !== draggedItemType) {
      return false;
    }
    return source.isDragging(this, sourceId);
  }
  isOverTarget(targetId, options = {
    shallow: false
  }) {
    if (!targetId) {
      return false;
    }
    const { shallow } = options;
    if (!this.isDragging()) {
      return false;
    }
    const targetType = this.registry.getTargetType(targetId);
    const draggedItemType = this.getItemType();
    if (draggedItemType && !matchesType(targetType, draggedItemType)) {
      return false;
    }
    const targetIds = this.getTargetIds();
    if (!targetIds.length) {
      return false;
    }
    const index = targetIds.indexOf(targetId);
    if (shallow) {
      return index === targetIds.length - 1;
    } else {
      return index > -1;
    }
  }
  getItemType() {
    return this.store.getState().dragOperation.itemType;
  }
  getItem() {
    return this.store.getState().dragOperation.item;
  }
  getSourceId() {
    return this.store.getState().dragOperation.sourceId;
  }
  getTargetIds() {
    return this.store.getState().dragOperation.targetIds;
  }
  getDropResult() {
    return this.store.getState().dragOperation.dropResult;
  }
  didDrop() {
    return this.store.getState().dragOperation.didDrop;
  }
  isSourcePublic() {
    return Boolean(this.store.getState().dragOperation.isSourcePublic);
  }
  getInitialClientOffset() {
    return this.store.getState().dragOffset.initialClientOffset;
  }
  getInitialSourceClientOffset() {
    return this.store.getState().dragOffset.initialSourceClientOffset;
  }
  getClientOffset() {
    return this.store.getState().dragOffset.clientOffset;
  }
  getSourceClientOffset() {
    return getSourceClientOffset(this.store.getState().dragOffset);
  }
  getDifferenceFromInitialOffset() {
    return getDifferenceFromInitialOffset(this.store.getState().dragOffset);
  }
  constructor(store, registry) {
    this.store = store;
    this.registry = registry;
  }
}
const scope = typeof global !== "undefined" ? global : self;
const BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
function makeRequestCallFromTimer(callback) {
  return function requestCall() {
    const timeoutHandle = setTimeout(handleTimer, 0);
    const intervalHandle = setInterval(handleTimer, 50);
    function handleTimer() {
      clearTimeout(timeoutHandle);
      clearInterval(intervalHandle);
      callback();
    }
  };
}
function makeRequestCallFromMutationObserver(callback) {
  let toggle = 1;
  const observer = new BrowserMutationObserver(callback);
  const node = document.createTextNode("");
  observer.observe(node, {
    characterData: true
  });
  return function requestCall() {
    toggle = -toggle;
    node.data = toggle;
  };
}
const makeRequestCall = typeof BrowserMutationObserver === "function" ? makeRequestCallFromMutationObserver : makeRequestCallFromTimer;
class AsapQueue {
  enqueueTask(task) {
    const { queue: q2, requestFlush } = this;
    if (!q2.length) {
      requestFlush();
      this.flushing = true;
    }
    q2[q2.length] = task;
  }
  constructor() {
    this.queue = [];
    this.pendingErrors = [];
    this.flushing = false;
    this.index = 0;
    this.capacity = 1024;
    this.flush = () => {
      const { queue: q2 } = this;
      while (this.index < q2.length) {
        const currentIndex = this.index;
        this.index++;
        q2[currentIndex].call();
        if (this.index > this.capacity) {
          for (let scan = 0, newLength = q2.length - this.index; scan < newLength; scan++) {
            q2[scan] = q2[scan + this.index];
          }
          q2.length -= this.index;
          this.index = 0;
        }
      }
      q2.length = 0;
      this.index = 0;
      this.flushing = false;
    };
    this.registerPendingError = (err) => {
      this.pendingErrors.push(err);
      this.requestErrorThrow();
    };
    this.requestFlush = makeRequestCall(this.flush);
    this.requestErrorThrow = makeRequestCallFromTimer(() => {
      if (this.pendingErrors.length) {
        throw this.pendingErrors.shift();
      }
    });
  }
}
class RawTask {
  call() {
    try {
      this.task && this.task();
    } catch (error) {
      this.onError(error);
    } finally {
      this.task = null;
      this.release(this);
    }
  }
  constructor(onError, release) {
    this.onError = onError;
    this.release = release;
    this.task = null;
  }
}
class TaskFactory {
  create(task) {
    const tasks = this.freeTasks;
    const t1 = tasks.length ? tasks.pop() : new RawTask(
      this.onError,
      (t) => tasks[tasks.length] = t
    );
    t1.task = task;
    return t1;
  }
  constructor(onError) {
    this.onError = onError;
    this.freeTasks = [];
  }
}
const asapQueue = new AsapQueue();
const taskFactory = new TaskFactory(asapQueue.registerPendingError);
function asap(task) {
  asapQueue.enqueueTask(taskFactory.create(task));
}
const ADD_SOURCE = "dnd-core/ADD_SOURCE";
const ADD_TARGET = "dnd-core/ADD_TARGET";
const REMOVE_SOURCE = "dnd-core/REMOVE_SOURCE";
const REMOVE_TARGET = "dnd-core/REMOVE_TARGET";
function addSource(sourceId) {
  return {
    type: ADD_SOURCE,
    payload: {
      sourceId
    }
  };
}
function addTarget(targetId) {
  return {
    type: ADD_TARGET,
    payload: {
      targetId
    }
  };
}
function removeSource(sourceId) {
  return {
    type: REMOVE_SOURCE,
    payload: {
      sourceId
    }
  };
}
function removeTarget(targetId) {
  return {
    type: REMOVE_TARGET,
    payload: {
      targetId
    }
  };
}
function validateSourceContract(source) {
  invariant(typeof source.canDrag === "function", "Expected canDrag to be a function.");
  invariant(typeof source.beginDrag === "function", "Expected beginDrag to be a function.");
  invariant(typeof source.endDrag === "function", "Expected endDrag to be a function.");
}
function validateTargetContract(target) {
  invariant(typeof target.canDrop === "function", "Expected canDrop to be a function.");
  invariant(typeof target.hover === "function", "Expected hover to be a function.");
  invariant(typeof target.drop === "function", "Expected beginDrag to be a function.");
}
function validateType(type, allowArray) {
  if (allowArray && Array.isArray(type)) {
    type.forEach(
      (t) => validateType(t, false)
    );
    return;
  }
  invariant(typeof type === "string" || typeof type === "symbol", allowArray ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}
var HandlerRole;
(function(HandlerRole2) {
  HandlerRole2["SOURCE"] = "SOURCE";
  HandlerRole2["TARGET"] = "TARGET";
})(HandlerRole || (HandlerRole = {}));
let nextUniqueId = 0;
function getNextUniqueId() {
  return nextUniqueId++;
}
function getNextHandlerId(role) {
  const id = getNextUniqueId().toString();
  switch (role) {
    case HandlerRole.SOURCE:
      return `S${id}`;
    case HandlerRole.TARGET:
      return `T${id}`;
    default:
      throw new Error(`Unknown Handler Role: ${role}`);
  }
}
function parseRoleFromHandlerId(handlerId) {
  switch (handlerId[0]) {
    case "S":
      return HandlerRole.SOURCE;
    case "T":
      return HandlerRole.TARGET;
    default:
      throw new Error(`Cannot parse handler ID: ${handlerId}`);
  }
}
function mapContainsValue(map3, searchValue) {
  const entries = map3.entries();
  let isDone = false;
  do {
    const { done, value: [, value] } = entries.next();
    if (value === searchValue) {
      return true;
    }
    isDone = !!done;
  } while (!isDone);
  return false;
}
class HandlerRegistryImpl {
  addSource(type, source) {
    validateType(type);
    validateSourceContract(source);
    const sourceId = this.addHandler(HandlerRole.SOURCE, type, source);
    this.store.dispatch(addSource(sourceId));
    return sourceId;
  }
  addTarget(type, target) {
    validateType(type, true);
    validateTargetContract(target);
    const targetId = this.addHandler(HandlerRole.TARGET, type, target);
    this.store.dispatch(addTarget(targetId));
    return targetId;
  }
  containsHandler(handler) {
    return mapContainsValue(this.dragSources, handler) || mapContainsValue(this.dropTargets, handler);
  }
  getSource(sourceId, includePinned = false) {
    invariant(this.isSourceId(sourceId), "Expected a valid source ID.");
    const isPinned = includePinned && sourceId === this.pinnedSourceId;
    const source = isPinned ? this.pinnedSource : this.dragSources.get(sourceId);
    return source;
  }
  getTarget(targetId) {
    invariant(this.isTargetId(targetId), "Expected a valid target ID.");
    return this.dropTargets.get(targetId);
  }
  getSourceType(sourceId) {
    invariant(this.isSourceId(sourceId), "Expected a valid source ID.");
    return this.types.get(sourceId);
  }
  getTargetType(targetId) {
    invariant(this.isTargetId(targetId), "Expected a valid target ID.");
    return this.types.get(targetId);
  }
  isSourceId(handlerId) {
    const role = parseRoleFromHandlerId(handlerId);
    return role === HandlerRole.SOURCE;
  }
  isTargetId(handlerId) {
    const role = parseRoleFromHandlerId(handlerId);
    return role === HandlerRole.TARGET;
  }
  removeSource(sourceId) {
    invariant(this.getSource(sourceId), "Expected an existing source.");
    this.store.dispatch(removeSource(sourceId));
    asap(() => {
      this.dragSources.delete(sourceId);
      this.types.delete(sourceId);
    });
  }
  removeTarget(targetId) {
    invariant(this.getTarget(targetId), "Expected an existing target.");
    this.store.dispatch(removeTarget(targetId));
    this.dropTargets.delete(targetId);
    this.types.delete(targetId);
  }
  pinSource(sourceId) {
    const source = this.getSource(sourceId);
    invariant(source, "Expected an existing source.");
    this.pinnedSourceId = sourceId;
    this.pinnedSource = source;
  }
  unpinSource() {
    invariant(this.pinnedSource, "No source is pinned at the time.");
    this.pinnedSourceId = null;
    this.pinnedSource = null;
  }
  addHandler(role, type, handler) {
    const id = getNextHandlerId(role);
    this.types.set(id, type);
    if (role === HandlerRole.SOURCE) {
      this.dragSources.set(id, handler);
    } else if (role === HandlerRole.TARGET) {
      this.dropTargets.set(id, handler);
    }
    return id;
  }
  constructor(store) {
    this.types = /* @__PURE__ */ new Map();
    this.dragSources = /* @__PURE__ */ new Map();
    this.dropTargets = /* @__PURE__ */ new Map();
    this.pinnedSourceId = null;
    this.pinnedSource = null;
    this.store = store;
  }
}
const strictEquality = (a, b) => a === b;
function areCoordsEqual(offsetA, offsetB) {
  if (!offsetA && !offsetB) {
    return true;
  } else if (!offsetA || !offsetB) {
    return false;
  } else {
    return offsetA.x === offsetB.x && offsetA.y === offsetB.y;
  }
}
function areArraysEqual(a, b, isEqual = strictEquality) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; ++i) {
    if (!isEqual(a[i], b[i])) {
      return false;
    }
  }
  return true;
}
function reduce$5(_state = NONE, action2) {
  switch (action2.type) {
    case HOVER:
      break;
    case ADD_SOURCE:
    case ADD_TARGET:
    case REMOVE_TARGET:
    case REMOVE_SOURCE:
      return NONE;
    case BEGIN_DRAG:
    case PUBLISH_DRAG_SOURCE:
    case END_DRAG:
    case DROP:
    default:
      return ALL;
  }
  const { targetIds = [], prevTargetIds = [] } = action2.payload;
  const result = xor(targetIds, prevTargetIds);
  const didChange = result.length > 0 || !areArraysEqual(targetIds, prevTargetIds);
  if (!didChange) {
    return NONE;
  }
  const prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
  const innermostTargetId = targetIds[targetIds.length - 1];
  if (prevInnermostTargetId !== innermostTargetId) {
    if (prevInnermostTargetId) {
      result.push(prevInnermostTargetId);
    }
    if (innermostTargetId) {
      result.push(innermostTargetId);
    }
  }
  return result;
}
function _defineProperty$3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectSpread$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys3 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys3 = ownKeys3.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys3.forEach(function(key) {
      _defineProperty$3(target, key, source[key]);
    });
  }
  return target;
}
const initialState$1 = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function reduce$4(state = initialState$1, action2) {
  const { payload } = action2;
  switch (action2.type) {
    case INIT_COORDS:
    case BEGIN_DRAG:
      return {
        initialSourceClientOffset: payload.sourceClientOffset,
        initialClientOffset: payload.clientOffset,
        clientOffset: payload.clientOffset
      };
    case HOVER:
      if (areCoordsEqual(state.clientOffset, payload.clientOffset)) {
        return state;
      }
      return _objectSpread$3({}, state, {
        clientOffset: payload.clientOffset
      });
    case END_DRAG:
    case DROP:
      return initialState$1;
    default:
      return state;
  }
}
function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectSpread$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys3 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys3 = ownKeys3.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys3.forEach(function(key) {
      _defineProperty$2(target, key, source[key]);
    });
  }
  return target;
}
const initialState = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: false,
  isSourcePublic: null
};
function reduce$3(state = initialState, action2) {
  const { payload } = action2;
  switch (action2.type) {
    case BEGIN_DRAG:
      return _objectSpread$2({}, state, {
        itemType: payload.itemType,
        item: payload.item,
        sourceId: payload.sourceId,
        isSourcePublic: payload.isSourcePublic,
        dropResult: null,
        didDrop: false
      });
    case PUBLISH_DRAG_SOURCE:
      return _objectSpread$2({}, state, {
        isSourcePublic: true
      });
    case HOVER:
      return _objectSpread$2({}, state, {
        targetIds: payload.targetIds
      });
    case REMOVE_TARGET:
      if (state.targetIds.indexOf(payload.targetId) === -1) {
        return state;
      }
      return _objectSpread$2({}, state, {
        targetIds: without$1(state.targetIds, payload.targetId)
      });
    case DROP:
      return _objectSpread$2({}, state, {
        dropResult: payload.dropResult,
        didDrop: true,
        targetIds: []
      });
    case END_DRAG:
      return _objectSpread$2({}, state, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: false,
        isSourcePublic: null,
        targetIds: []
      });
    default:
      return state;
  }
}
function reduce$2(state = 0, action2) {
  switch (action2.type) {
    case ADD_SOURCE:
    case ADD_TARGET:
      return state + 1;
    case REMOVE_SOURCE:
    case REMOVE_TARGET:
      return state - 1;
    default:
      return state;
  }
}
function reduce$1(state = 0) {
  return state + 1;
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys3 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys3 = ownKeys3.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys3.forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    });
  }
  return target;
}
function reduce(state = {}, action2) {
  return {
    dirtyHandlerIds: reduce$5(state.dirtyHandlerIds, {
      type: action2.type,
      payload: _objectSpread$1({}, action2.payload, {
        prevTargetIds: get2(state, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: reduce$4(state.dragOffset, action2),
    refCount: reduce$2(state.refCount, action2),
    dragOperation: reduce$3(state.dragOperation, action2),
    stateId: reduce$1(state.stateId)
  };
}
function createDragDropManager(backendFactory, globalContext = void 0, backendOptions = {}, debugMode = false) {
  const store = makeStoreInstance(debugMode);
  const monitor = new DragDropMonitorImpl(store, new HandlerRegistryImpl(store));
  const manager = new DragDropManagerImpl(store, monitor);
  const backend = backendFactory(manager, globalContext, backendOptions);
  manager.receiveBackend(backend);
  return manager;
}
function makeStoreInstance(debugMode) {
  const reduxDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return createStore(reduce, debugMode && reduxDevTools && reduxDevTools({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
let refCount = 0;
const INSTANCE_SYM = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");
var DndProvider = /* @__PURE__ */ memo(function DndProvider2(_param) {
  var { children } = _param, props = _objectWithoutProperties(_param, [
    "children"
  ]);
  const [manager, isGlobalInstance] = getDndContextValue(props);
  useEffect(() => {
    if (isGlobalInstance) {
      const context = getGlobalContext();
      ++refCount;
      return () => {
        if (--refCount === 0) {
          context[INSTANCE_SYM] = null;
        }
      };
    }
    return;
  }, []);
  return /* @__PURE__ */ jsx(DndContext.Provider, {
    value: manager,
    children
  });
});
function getDndContextValue(props) {
  if ("manager" in props) {
    const manager2 = {
      dragDropManager: props.manager
    };
    return [
      manager2,
      false
    ];
  }
  const manager = createSingletonDndContext(props.backend, props.context, props.options, props.debugMode);
  const isGlobalInstance = !props.context;
  return [
    manager,
    isGlobalInstance
  ];
}
function createSingletonDndContext(backend, context = getGlobalContext(), options, debugMode) {
  const ctx = context;
  if (!ctx[INSTANCE_SYM]) {
    ctx[INSTANCE_SYM] = {
      dragDropManager: createDragDropManager(backend, context, options, debugMode)
    };
  }
  return ctx[INSTANCE_SYM];
}
function getGlobalContext() {
  return typeof global !== "undefined" ? global : window;
}
var fastDeepEqual = function equal(a, b) {
  if (a === b)
    return true;
  if (a && b && typeof a == "object" && typeof b == "object") {
    if (a.constructor !== b.constructor)
      return false;
    var length, i, keys2;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!equal(a[i], b[i]))
          return false;
      return true;
    }
    if (a.constructor === RegExp)
      return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf)
      return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString)
      return a.toString() === b.toString();
    keys2 = Object.keys(a);
    length = keys2.length;
    if (length !== Object.keys(b).length)
      return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys2[i]))
        return false;
    for (i = length; i-- !== 0; ) {
      var key = keys2[i];
      if (!equal(a[key], b[key]))
        return false;
    }
    return true;
  }
  return a !== a && b !== b;
};
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
function useCollector(monitor, collect, onUpdate) {
  const [collected, setCollected] = useState(
    () => collect(monitor)
  );
  const updateCollected = useCallback(() => {
    const nextValue = collect(monitor);
    if (!fastDeepEqual(collected, nextValue)) {
      setCollected(nextValue);
      if (onUpdate) {
        onUpdate();
      }
    }
  }, [
    collected,
    monitor,
    onUpdate
  ]);
  useIsomorphicLayoutEffect(updateCollected);
  return [
    collected,
    updateCollected
  ];
}
function useMonitorOutput(monitor, collect, onCollect) {
  const [collected, updateCollected] = useCollector(monitor, collect, onCollect);
  useIsomorphicLayoutEffect(function subscribeToMonitorStateChange() {
    const handlerId = monitor.getHandlerId();
    if (handlerId == null) {
      return;
    }
    return monitor.subscribeToStateChange(updateCollected, {
      handlerIds: [
        handlerId
      ]
    });
  }, [
    monitor,
    updateCollected
  ]);
  return collected;
}
function useCollectedProps(collector, monitor, connector) {
  return useMonitorOutput(
    monitor,
    collector || (() => ({})),
    () => connector.reconnect()
  );
}
function useOptionalFactory(arg, deps) {
  const memoDeps = [
    ...deps || []
  ];
  if (deps == null && typeof arg !== "function") {
    memoDeps.push(arg);
  }
  return useMemo(() => {
    return typeof arg === "function" ? arg() : arg;
  }, memoDeps);
}
function useConnectDragSource(connector) {
  return useMemo(
    () => connector.hooks.dragSource(),
    [
      connector
    ]
  );
}
function useConnectDragPreview(connector) {
  return useMemo(
    () => connector.hooks.dragPreview(),
    [
      connector
    ]
  );
}
let isCallingCanDrag = false;
let isCallingIsDragging = false;
class DragSourceMonitorImpl {
  receiveHandlerId(sourceId) {
    this.sourceId = sourceId;
  }
  getHandlerId() {
    return this.sourceId;
  }
  canDrag() {
    invariant(!isCallingCanDrag, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      isCallingCanDrag = true;
      return this.internalMonitor.canDragSource(this.sourceId);
    } finally {
      isCallingCanDrag = false;
    }
  }
  isDragging() {
    if (!this.sourceId) {
      return false;
    }
    invariant(!isCallingIsDragging, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      isCallingIsDragging = true;
      return this.internalMonitor.isDraggingSource(this.sourceId);
    } finally {
      isCallingIsDragging = false;
    }
  }
  subscribeToStateChange(listener, options) {
    return this.internalMonitor.subscribeToStateChange(listener, options);
  }
  isDraggingSource(sourceId) {
    return this.internalMonitor.isDraggingSource(sourceId);
  }
  isOverTarget(targetId, options) {
    return this.internalMonitor.isOverTarget(targetId, options);
  }
  getTargetIds() {
    return this.internalMonitor.getTargetIds();
  }
  isSourcePublic() {
    return this.internalMonitor.isSourcePublic();
  }
  getSourceId() {
    return this.internalMonitor.getSourceId();
  }
  subscribeToOffsetChange(listener) {
    return this.internalMonitor.subscribeToOffsetChange(listener);
  }
  canDragSource(sourceId) {
    return this.internalMonitor.canDragSource(sourceId);
  }
  canDropOnTarget(targetId) {
    return this.internalMonitor.canDropOnTarget(targetId);
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(manager) {
    this.sourceId = null;
    this.internalMonitor = manager.getMonitor();
  }
}
let isCallingCanDrop = false;
class DropTargetMonitorImpl {
  receiveHandlerId(targetId) {
    this.targetId = targetId;
  }
  getHandlerId() {
    return this.targetId;
  }
  subscribeToStateChange(listener, options) {
    return this.internalMonitor.subscribeToStateChange(listener, options);
  }
  canDrop() {
    if (!this.targetId) {
      return false;
    }
    invariant(!isCallingCanDrop, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
    try {
      isCallingCanDrop = true;
      return this.internalMonitor.canDropOnTarget(this.targetId);
    } finally {
      isCallingCanDrop = false;
    }
  }
  isOver(options) {
    if (!this.targetId) {
      return false;
    }
    return this.internalMonitor.isOverTarget(this.targetId, options);
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(manager) {
    this.targetId = null;
    this.internalMonitor = manager.getMonitor();
  }
}
function registerTarget(type, target, manager) {
  const registry = manager.getRegistry();
  const targetId = registry.addTarget(type, target);
  return [
    targetId,
    () => registry.removeTarget(targetId)
  ];
}
function registerSource(type, source, manager) {
  const registry = manager.getRegistry();
  const sourceId = registry.addSource(type, source);
  return [
    sourceId,
    () => registry.removeSource(sourceId)
  ];
}
function shallowEqual(objA, objB, compare, compareContext) {
  let compareResult = compare ? compare.call(compareContext, objA, objB) : void 0;
  if (compareResult !== void 0) {
    return !!compareResult;
  }
  if (objA === objB) {
    return true;
  }
  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (let idx = 0; idx < keysA.length; idx++) {
    const key = keysA[idx];
    if (!bHasOwnProperty(key)) {
      return false;
    }
    const valueA = objA[key];
    const valueB = objB[key];
    compareResult = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
    if (compareResult === false || compareResult === void 0 && valueA !== valueB) {
      return false;
    }
  }
  return true;
}
function isRef(obj) {
  return obj !== null && typeof obj === "object" && Object.prototype.hasOwnProperty.call(obj, "current");
}
function throwIfCompositeComponentElement(element) {
  if (typeof element.type === "string") {
    return;
  }
  const displayName = element.type.displayName || element.type.name || "the component";
  throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${displayName} into a <div>, or turn it into a drag source or a drop target itself.`);
}
function wrapHookToRecognizeElement(hook) {
  return (elementOrNode = null, options = null) => {
    if (!isValidElement(elementOrNode)) {
      const node = elementOrNode;
      hook(node, options);
      return node;
    }
    const element = elementOrNode;
    throwIfCompositeComponentElement(element);
    const ref = options ? (node) => hook(node, options) : hook;
    return cloneWithRef(element, ref);
  };
}
function wrapConnectorHooks(hooks2) {
  const wrappedHooks = {};
  Object.keys(hooks2).forEach((key) => {
    const hook = hooks2[key];
    if (key.endsWith("Ref")) {
      wrappedHooks[key] = hooks2[key];
    } else {
      const wrappedHook = wrapHookToRecognizeElement(hook);
      wrappedHooks[key] = () => wrappedHook;
    }
  });
  return wrappedHooks;
}
function setRef(ref, node) {
  if (typeof ref === "function") {
    ref(node);
  } else {
    ref.current = node;
  }
}
function cloneWithRef(element, newRef) {
  const previousRef = element.ref;
  invariant(typeof previousRef !== "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs");
  if (!previousRef) {
    return cloneElement(element, {
      ref: newRef
    });
  } else {
    return cloneElement(element, {
      ref: (node) => {
        setRef(previousRef, node);
        setRef(newRef, node);
      }
    });
  }
}
class SourceConnector {
  receiveHandlerId(newHandlerId) {
    if (this.handlerId === newHandlerId) {
      return;
    }
    this.handlerId = newHandlerId;
    this.reconnect();
  }
  get connectTarget() {
    return this.dragSource;
  }
  get dragSourceOptions() {
    return this.dragSourceOptionsInternal;
  }
  set dragSourceOptions(options) {
    this.dragSourceOptionsInternal = options;
  }
  get dragPreviewOptions() {
    return this.dragPreviewOptionsInternal;
  }
  set dragPreviewOptions(options) {
    this.dragPreviewOptionsInternal = options;
  }
  reconnect() {
    const didChange = this.reconnectDragSource();
    this.reconnectDragPreview(didChange);
  }
  reconnectDragSource() {
    const dragSource = this.dragSource;
    const didChange = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
    if (didChange) {
      this.disconnectDragSource();
    }
    if (!this.handlerId) {
      return didChange;
    }
    if (!dragSource) {
      this.lastConnectedDragSource = dragSource;
      return didChange;
    }
    if (didChange) {
      this.lastConnectedHandlerId = this.handlerId;
      this.lastConnectedDragSource = dragSource;
      this.lastConnectedDragSourceOptions = this.dragSourceOptions;
      this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, dragSource, this.dragSourceOptions);
    }
    return didChange;
  }
  reconnectDragPreview(forceDidChange = false) {
    const dragPreview = this.dragPreview;
    const didChange = forceDidChange || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
    if (didChange) {
      this.disconnectDragPreview();
    }
    if (!this.handlerId) {
      return;
    }
    if (!dragPreview) {
      this.lastConnectedDragPreview = dragPreview;
      return;
    }
    if (didChange) {
      this.lastConnectedHandlerId = this.handlerId;
      this.lastConnectedDragPreview = dragPreview;
      this.lastConnectedDragPreviewOptions = this.dragPreviewOptions;
      this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, dragPreview, this.dragPreviewOptions);
    }
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didConnectedDragSourceChange() {
    return this.lastConnectedDragSource !== this.dragSource;
  }
  didConnectedDragPreviewChange() {
    return this.lastConnectedDragPreview !== this.dragPreview;
  }
  didDragSourceOptionsChange() {
    return !shallowEqual(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
  }
  didDragPreviewOptionsChange() {
    return !shallowEqual(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
  }
  disconnectDragSource() {
    if (this.dragSourceUnsubscribe) {
      this.dragSourceUnsubscribe();
      this.dragSourceUnsubscribe = void 0;
    }
  }
  disconnectDragPreview() {
    if (this.dragPreviewUnsubscribe) {
      this.dragPreviewUnsubscribe();
      this.dragPreviewUnsubscribe = void 0;
      this.dragPreviewNode = null;
      this.dragPreviewRef = null;
    }
  }
  get dragSource() {
    return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
  }
  get dragPreview() {
    return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
  }
  clearDragSource() {
    this.dragSourceNode = null;
    this.dragSourceRef = null;
  }
  clearDragPreview() {
    this.dragPreviewNode = null;
    this.dragPreviewRef = null;
  }
  constructor(backend) {
    this.hooks = wrapConnectorHooks({
      dragSource: (node, options) => {
        this.clearDragSource();
        this.dragSourceOptions = options || null;
        if (isRef(node)) {
          this.dragSourceRef = node;
        } else {
          this.dragSourceNode = node;
        }
        this.reconnectDragSource();
      },
      dragPreview: (node, options) => {
        this.clearDragPreview();
        this.dragPreviewOptions = options || null;
        if (isRef(node)) {
          this.dragPreviewRef = node;
        } else {
          this.dragPreviewNode = node;
        }
        this.reconnectDragPreview();
      }
    });
    this.handlerId = null;
    this.dragSourceRef = null;
    this.dragSourceOptionsInternal = null;
    this.dragPreviewRef = null;
    this.dragPreviewOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDragSource = null;
    this.lastConnectedDragSourceOptions = null;
    this.lastConnectedDragPreview = null;
    this.lastConnectedDragPreviewOptions = null;
    this.backend = backend;
  }
}
class TargetConnector {
  get connectTarget() {
    return this.dropTarget;
  }
  reconnect() {
    const didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
    if (didChange) {
      this.disconnectDropTarget();
    }
    const dropTarget = this.dropTarget;
    if (!this.handlerId) {
      return;
    }
    if (!dropTarget) {
      this.lastConnectedDropTarget = dropTarget;
      return;
    }
    if (didChange) {
      this.lastConnectedHandlerId = this.handlerId;
      this.lastConnectedDropTarget = dropTarget;
      this.lastConnectedDropTargetOptions = this.dropTargetOptions;
      this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions);
    }
  }
  receiveHandlerId(newHandlerId) {
    if (newHandlerId === this.handlerId) {
      return;
    }
    this.handlerId = newHandlerId;
    this.reconnect();
  }
  get dropTargetOptions() {
    return this.dropTargetOptionsInternal;
  }
  set dropTargetOptions(options) {
    this.dropTargetOptionsInternal = options;
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didDropTargetChange() {
    return this.lastConnectedDropTarget !== this.dropTarget;
  }
  didOptionsChange() {
    return !shallowEqual(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
  }
  disconnectDropTarget() {
    if (this.unsubscribeDropTarget) {
      this.unsubscribeDropTarget();
      this.unsubscribeDropTarget = void 0;
    }
  }
  get dropTarget() {
    return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
  }
  clearDropTarget() {
    this.dropTargetRef = null;
    this.dropTargetNode = null;
  }
  constructor(backend) {
    this.hooks = wrapConnectorHooks({
      dropTarget: (node, options) => {
        this.clearDropTarget();
        this.dropTargetOptions = options;
        if (isRef(node)) {
          this.dropTargetRef = node;
        } else {
          this.dropTargetNode = node;
        }
        this.reconnect();
      }
    });
    this.handlerId = null;
    this.dropTargetRef = null;
    this.dropTargetOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDropTarget = null;
    this.lastConnectedDropTargetOptions = null;
    this.backend = backend;
  }
}
function useDragDropManager() {
  const { dragDropManager } = useContext(DndContext);
  invariant(dragDropManager != null, "Expected drag drop context");
  return dragDropManager;
}
function useDragSourceConnector(dragSourceOptions, dragPreviewOptions) {
  const manager = useDragDropManager();
  const connector = useMemo(
    () => new SourceConnector(manager.getBackend()),
    [
      manager
    ]
  );
  useIsomorphicLayoutEffect(() => {
    connector.dragSourceOptions = dragSourceOptions || null;
    connector.reconnect();
    return () => connector.disconnectDragSource();
  }, [
    connector,
    dragSourceOptions
  ]);
  useIsomorphicLayoutEffect(() => {
    connector.dragPreviewOptions = dragPreviewOptions || null;
    connector.reconnect();
    return () => connector.disconnectDragPreview();
  }, [
    connector,
    dragPreviewOptions
  ]);
  return connector;
}
function useDragSourceMonitor() {
  const manager = useDragDropManager();
  return useMemo(
    () => new DragSourceMonitorImpl(manager),
    [
      manager
    ]
  );
}
class DragSourceImpl {
  beginDrag() {
    const spec = this.spec;
    const monitor = this.monitor;
    let result = null;
    if (typeof spec.item === "object") {
      result = spec.item;
    } else if (typeof spec.item === "function") {
      result = spec.item(monitor);
    } else {
      result = {};
    }
    return result !== null && result !== void 0 ? result : null;
  }
  canDrag() {
    const spec = this.spec;
    const monitor = this.monitor;
    if (typeof spec.canDrag === "boolean") {
      return spec.canDrag;
    } else if (typeof spec.canDrag === "function") {
      return spec.canDrag(monitor);
    } else {
      return true;
    }
  }
  isDragging(globalMonitor, target) {
    const spec = this.spec;
    const monitor = this.monitor;
    const { isDragging } = spec;
    return isDragging ? isDragging(monitor) : target === globalMonitor.getSourceId();
  }
  endDrag() {
    const spec = this.spec;
    const monitor = this.monitor;
    const connector = this.connector;
    const { end } = spec;
    if (end) {
      end(monitor.getItem(), monitor);
    }
    connector.reconnect();
  }
  constructor(spec, monitor, connector) {
    this.spec = spec;
    this.monitor = monitor;
    this.connector = connector;
  }
}
function useDragSource(spec, monitor, connector) {
  const handler = useMemo(
    () => new DragSourceImpl(spec, monitor, connector),
    [
      monitor,
      connector
    ]
  );
  useEffect(() => {
    handler.spec = spec;
  }, [
    spec
  ]);
  return handler;
}
function useDragType(spec) {
  return useMemo(() => {
    const result = spec.type;
    invariant(result != null, "spec.type must be defined");
    return result;
  }, [
    spec
  ]);
}
function useRegisteredDragSource(spec, monitor, connector) {
  const manager = useDragDropManager();
  const handler = useDragSource(spec, monitor, connector);
  const itemType = useDragType(spec);
  useIsomorphicLayoutEffect(function registerDragSource() {
    if (itemType != null) {
      const [handlerId, unregister] = registerSource(itemType, handler, manager);
      monitor.receiveHandlerId(handlerId);
      connector.receiveHandlerId(handlerId);
      return unregister;
    }
    return;
  }, [
    manager,
    monitor,
    connector,
    handler,
    itemType
  ]);
}
function useDrag(specArg, deps) {
  const spec = useOptionalFactory(specArg, deps);
  invariant(!spec.begin, `useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)`);
  const monitor = useDragSourceMonitor();
  const connector = useDragSourceConnector(spec.options, spec.previewOptions);
  useRegisteredDragSource(spec, monitor, connector);
  return [
    useCollectedProps(spec.collect, monitor, connector),
    useConnectDragSource(connector),
    useConnectDragPreview(connector)
  ];
}
function useConnectDropTarget(connector) {
  return useMemo(
    () => connector.hooks.dropTarget(),
    [
      connector
    ]
  );
}
function useDropTargetConnector(options) {
  const manager = useDragDropManager();
  const connector = useMemo(
    () => new TargetConnector(manager.getBackend()),
    [
      manager
    ]
  );
  useIsomorphicLayoutEffect(() => {
    connector.dropTargetOptions = options || null;
    connector.reconnect();
    return () => connector.disconnectDropTarget();
  }, [
    options
  ]);
  return connector;
}
function useDropTargetMonitor() {
  const manager = useDragDropManager();
  return useMemo(
    () => new DropTargetMonitorImpl(manager),
    [
      manager
    ]
  );
}
function useAccept(spec) {
  const { accept } = spec;
  return useMemo(() => {
    invariant(spec.accept != null, "accept must be defined");
    return Array.isArray(accept) ? accept : [
      accept
    ];
  }, [
    accept
  ]);
}
class DropTargetImpl {
  canDrop() {
    const spec = this.spec;
    const monitor = this.monitor;
    return spec.canDrop ? spec.canDrop(monitor.getItem(), monitor) : true;
  }
  hover() {
    const spec = this.spec;
    const monitor = this.monitor;
    if (spec.hover) {
      spec.hover(monitor.getItem(), monitor);
    }
  }
  drop() {
    const spec = this.spec;
    const monitor = this.monitor;
    if (spec.drop) {
      return spec.drop(monitor.getItem(), monitor);
    }
    return;
  }
  constructor(spec, monitor) {
    this.spec = spec;
    this.monitor = monitor;
  }
}
function useDropTarget(spec, monitor) {
  const dropTarget = useMemo(
    () => new DropTargetImpl(spec, monitor),
    [
      monitor
    ]
  );
  useEffect(() => {
    dropTarget.spec = spec;
  }, [
    spec
  ]);
  return dropTarget;
}
function useRegisteredDropTarget(spec, monitor, connector) {
  const manager = useDragDropManager();
  const dropTarget = useDropTarget(spec, monitor);
  const accept = useAccept(spec);
  useIsomorphicLayoutEffect(function registerDropTarget() {
    const [handlerId, unregister] = registerTarget(accept, dropTarget, manager);
    monitor.receiveHandlerId(handlerId);
    connector.receiveHandlerId(handlerId);
    return unregister;
  }, [
    manager,
    monitor,
    dropTarget,
    connector,
    accept.map(
      (a) => a.toString()
    ).join("|")
  ]);
}
function useDrop(specArg, deps) {
  const spec = useOptionalFactory(specArg, deps);
  const monitor = useDropTargetMonitor();
  const connector = useDropTargetConnector(spec.options);
  useRegisteredDropTarget(spec, monitor, connector);
  return [
    useCollectedProps(spec.collect, monitor, connector),
    useConnectDropTarget(connector)
  ];
}
function memoize(fn) {
  let result = null;
  const memoized = () => {
    if (result == null) {
      result = fn();
    }
    return result;
  };
  return memoized;
}
function without(items, item) {
  return items.filter(
    (i) => i !== item
  );
}
function union(itemsA, itemsB) {
  const set5 = /* @__PURE__ */ new Set();
  const insertItem = (item) => set5.add(item);
  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  const result = [];
  set5.forEach(
    (key) => result.push(key)
  );
  return result;
}
class EnterLeaveCounter {
  enter(enteringNode) {
    const previousLength = this.entered.length;
    const isNodeEntered = (node) => this.isNodeInDocument(node) && (!node.contains || node.contains(enteringNode));
    this.entered = union(this.entered.filter(isNodeEntered), [
      enteringNode
    ]);
    return previousLength === 0 && this.entered.length > 0;
  }
  leave(leavingNode) {
    const previousLength = this.entered.length;
    this.entered = without(this.entered.filter(this.isNodeInDocument), leavingNode);
    return previousLength > 0 && this.entered.length === 0;
  }
  reset() {
    this.entered = [];
  }
  constructor(isNodeInDocument) {
    this.entered = [];
    this.isNodeInDocument = isNodeInDocument;
  }
}
class NativeDragSource {
  initializeExposedProperties() {
    Object.keys(this.config.exposeProperties).forEach((property2) => {
      Object.defineProperty(this.item, property2, {
        configurable: true,
        enumerable: true,
        get() {
          console.warn(`Browser doesn't allow reading "${property2}" until the drop event.`);
          return null;
        }
      });
    });
  }
  loadDataTransfer(dataTransfer) {
    if (dataTransfer) {
      const newProperties = {};
      Object.keys(this.config.exposeProperties).forEach((property2) => {
        const propertyFn = this.config.exposeProperties[property2];
        if (propertyFn != null) {
          newProperties[property2] = {
            value: propertyFn(dataTransfer, this.config.matchesTypes),
            configurable: true,
            enumerable: true
          };
        }
      });
      Object.defineProperties(this.item, newProperties);
    }
  }
  canDrag() {
    return true;
  }
  beginDrag() {
    return this.item;
  }
  isDragging(monitor, handle) {
    return handle === monitor.getSourceId();
  }
  endDrag() {
  }
  constructor(config) {
    this.config = config;
    this.item = {};
    this.initializeExposedProperties();
  }
}
const FILE = "__NATIVE_FILE__";
const URL = "__NATIVE_URL__";
const TEXT = "__NATIVE_TEXT__";
const HTML = "__NATIVE_HTML__";
var NativeTypes = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FILE,
  URL,
  TEXT,
  HTML
}, Symbol.toStringTag, { value: "Module" }));
function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
  const result = typesToTry.reduce(
    (resultSoFar, typeToTry) => resultSoFar || dataTransfer.getData(typeToTry),
    ""
  );
  return result != null ? result : defaultValue;
}
const nativeTypesConfig = {
  [FILE]: {
    exposeProperties: {
      files: (dataTransfer) => Array.prototype.slice.call(dataTransfer.files),
      items: (dataTransfer) => dataTransfer.items,
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Files"
    ]
  },
  [HTML]: {
    exposeProperties: {
      html: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, ""),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Html",
      "text/html"
    ]
  },
  [URL]: {
    exposeProperties: {
      urls: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, "").split("\n"),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Url",
      "text/uri-list"
    ]
  },
  [TEXT]: {
    exposeProperties: {
      text: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, ""),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Text",
      "text/plain"
    ]
  }
};
function createNativeDragSource(type, dataTransfer) {
  const config = nativeTypesConfig[type];
  if (!config) {
    throw new Error(`native type ${type} has no configuration`);
  }
  const result = new NativeDragSource(config);
  result.loadDataTransfer(dataTransfer);
  return result;
}
function matchNativeItemType(dataTransfer) {
  if (!dataTransfer) {
    return null;
  }
  const dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);
  return Object.keys(nativeTypesConfig).filter((nativeItemType) => {
    const typeConfig = nativeTypesConfig[nativeItemType];
    if (!(typeConfig === null || typeConfig === void 0 ? void 0 : typeConfig.matchesTypes)) {
      return false;
    }
    return typeConfig.matchesTypes.some(
      (t) => dataTransferTypes.indexOf(t) > -1
    );
  })[0] || null;
}
const isFirefox = memoize(
  () => /firefox/i.test(navigator.userAgent)
);
const isSafari = memoize(
  () => Boolean(window.safari)
);
class MonotonicInterpolant {
  interpolate(x) {
    const { xs, ys, c1s, c2s, c3s } = this;
    let i = xs.length - 1;
    if (x === xs[i]) {
      return ys[i];
    }
    let low = 0;
    let high = c3s.length - 1;
    let mid;
    while (low <= high) {
      mid = Math.floor(0.5 * (low + high));
      const xHere = xs[mid];
      if (xHere < x) {
        low = mid + 1;
      } else if (xHere > x) {
        high = mid - 1;
      } else {
        return ys[mid];
      }
    }
    i = Math.max(0, high);
    const diff2 = x - xs[i];
    const diffSq = diff2 * diff2;
    return ys[i] + c1s[i] * diff2 + c2s[i] * diffSq + c3s[i] * diff2 * diffSq;
  }
  constructor(xs, ys) {
    const { length } = xs;
    const indexes = [];
    for (let i = 0; i < length; i++) {
      indexes.push(i);
    }
    indexes.sort(
      (a, b) => xs[a] < xs[b] ? -1 : 1
    );
    const dxs = [];
    const ms = [];
    let dx;
    let dy;
    for (let i1 = 0; i1 < length - 1; i1++) {
      dx = xs[i1 + 1] - xs[i1];
      dy = ys[i1 + 1] - ys[i1];
      dxs.push(dx);
      ms.push(dy / dx);
    }
    const c1s = [
      ms[0]
    ];
    for (let i2 = 0; i2 < dxs.length - 1; i2++) {
      const m22 = ms[i2];
      const mNext = ms[i2 + 1];
      if (m22 * mNext <= 0) {
        c1s.push(0);
      } else {
        dx = dxs[i2];
        const dxNext = dxs[i2 + 1];
        const common = dx + dxNext;
        c1s.push(3 * common / ((common + dxNext) / m22 + (common + dx) / mNext));
      }
    }
    c1s.push(ms[ms.length - 1]);
    const c2s = [];
    const c3s = [];
    let m2;
    for (let i3 = 0; i3 < c1s.length - 1; i3++) {
      m2 = ms[i3];
      const c1 = c1s[i3];
      const invDx = 1 / dxs[i3];
      const common = c1 + c1s[i3 + 1] - m2 - m2;
      c2s.push((m2 - c1 - common) * invDx);
      c3s.push(common * invDx * invDx);
    }
    this.xs = xs;
    this.ys = ys;
    this.c1s = c1s;
    this.c2s = c2s;
    this.c3s = c3s;
  }
}
const ELEMENT_NODE = 1;
function getNodeClientOffset(node) {
  const el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;
  if (!el) {
    return null;
  }
  const { top, left } = el.getBoundingClientRect();
  return {
    x: left,
    y: top
  };
}
function getEventClientOffset(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function isImageNode(node) {
  var ref;
  return node.nodeName === "IMG" && (isFirefox() || !((ref = document.documentElement) === null || ref === void 0 ? void 0 : ref.contains(node)));
}
function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
  let dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
  let dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;
  if (isSafari() && isImage) {
    dragPreviewHeight /= window.devicePixelRatio;
    dragPreviewWidth /= window.devicePixelRatio;
  }
  return {
    dragPreviewWidth,
    dragPreviewHeight
  };
}
function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
  const isImage = isImageNode(dragPreview);
  const dragPreviewNode = isImage ? sourceNode : dragPreview;
  const dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
  const offsetFromDragPreview = {
    x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
    y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
  };
  const { offsetWidth: sourceWidth, offsetHeight: sourceHeight } = sourceNode;
  const { anchorX, anchorY } = anchorPoint;
  const { dragPreviewWidth, dragPreviewHeight } = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight);
  const calculateYOffset = () => {
    const interpolantY = new MonotonicInterpolant([
      0,
      0.5,
      1
    ], [
      offsetFromDragPreview.y,
      offsetFromDragPreview.y / sourceHeight * dragPreviewHeight,
      offsetFromDragPreview.y + dragPreviewHeight - sourceHeight
    ]);
    let y = interpolantY.interpolate(anchorY);
    if (isSafari() && isImage) {
      y += (window.devicePixelRatio - 1) * dragPreviewHeight;
    }
    return y;
  };
  const calculateXOffset = () => {
    const interpolantX = new MonotonicInterpolant([
      0,
      0.5,
      1
    ], [
      offsetFromDragPreview.x,
      offsetFromDragPreview.x / sourceWidth * dragPreviewWidth,
      offsetFromDragPreview.x + dragPreviewWidth - sourceWidth
    ]);
    return interpolantX.interpolate(anchorX);
  };
  const { offsetX, offsetY } = offsetPoint;
  const isManualOffsetX = offsetX === 0 || offsetX;
  const isManualOffsetY = offsetY === 0 || offsetY;
  return {
    x: isManualOffsetX ? offsetX : calculateXOffset(),
    y: isManualOffsetY ? offsetY : calculateYOffset()
  };
}
class OptionsReader {
  get window() {
    if (this.globalContext) {
      return this.globalContext;
    } else if (typeof window !== "undefined") {
      return window;
    }
    return void 0;
  }
  get document() {
    var ref;
    if ((ref = this.globalContext) === null || ref === void 0 ? void 0 : ref.document) {
      return this.globalContext.document;
    } else if (this.window) {
      return this.window.document;
    } else {
      return void 0;
    }
  }
  get rootElement() {
    var ref;
    return ((ref = this.optionsArgs) === null || ref === void 0 ? void 0 : ref.rootElement) || this.window;
  }
  constructor(globalContext, options) {
    this.ownerDocument = null;
    this.globalContext = globalContext;
    this.optionsArgs = options;
  }
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys3 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys3 = ownKeys3.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys3.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}
class HTML5BackendImpl {
  profile() {
    var ref, ref1;
    return {
      sourcePreviewNodes: this.sourcePreviewNodes.size,
      sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
      sourceNodeOptions: this.sourceNodeOptions.size,
      sourceNodes: this.sourceNodes.size,
      dragStartSourceIds: ((ref = this.dragStartSourceIds) === null || ref === void 0 ? void 0 : ref.length) || 0,
      dropTargetIds: this.dropTargetIds.length,
      dragEnterTargetIds: this.dragEnterTargetIds.length,
      dragOverTargetIds: ((ref1 = this.dragOverTargetIds) === null || ref1 === void 0 ? void 0 : ref1.length) || 0
    };
  }
  get window() {
    return this.options.window;
  }
  get document() {
    return this.options.document;
  }
  get rootElement() {
    return this.options.rootElement;
  }
  setup() {
    const root2 = this.rootElement;
    if (root2 === void 0) {
      return;
    }
    if (root2.__isReactDndBackendSetUp) {
      throw new Error("Cannot have two HTML5 backends at the same time.");
    }
    root2.__isReactDndBackendSetUp = true;
    this.addEventListeners(root2);
  }
  teardown() {
    const root2 = this.rootElement;
    if (root2 === void 0) {
      return;
    }
    root2.__isReactDndBackendSetUp = false;
    this.removeEventListeners(this.rootElement);
    this.clearCurrentDragSourceNode();
    if (this.asyncEndDragFrameId) {
      var ref;
      (ref = this.window) === null || ref === void 0 ? void 0 : ref.cancelAnimationFrame(this.asyncEndDragFrameId);
    }
  }
  connectDragPreview(sourceId, node, options) {
    this.sourcePreviewNodeOptions.set(sourceId, options);
    this.sourcePreviewNodes.set(sourceId, node);
    return () => {
      this.sourcePreviewNodes.delete(sourceId);
      this.sourcePreviewNodeOptions.delete(sourceId);
    };
  }
  connectDragSource(sourceId, node, options) {
    this.sourceNodes.set(sourceId, node);
    this.sourceNodeOptions.set(sourceId, options);
    const handleDragStart = (e) => this.handleDragStart(e, sourceId);
    const handleSelectStart = (e) => this.handleSelectStart(e);
    node.setAttribute("draggable", "true");
    node.addEventListener("dragstart", handleDragStart);
    node.addEventListener("selectstart", handleSelectStart);
    return () => {
      this.sourceNodes.delete(sourceId);
      this.sourceNodeOptions.delete(sourceId);
      node.removeEventListener("dragstart", handleDragStart);
      node.removeEventListener("selectstart", handleSelectStart);
      node.setAttribute("draggable", "false");
    };
  }
  connectDropTarget(targetId, node) {
    const handleDragEnter = (e) => this.handleDragEnter(e, targetId);
    const handleDragOver = (e) => this.handleDragOver(e, targetId);
    const handleDrop = (e) => this.handleDrop(e, targetId);
    node.addEventListener("dragenter", handleDragEnter);
    node.addEventListener("dragover", handleDragOver);
    node.addEventListener("drop", handleDrop);
    return () => {
      node.removeEventListener("dragenter", handleDragEnter);
      node.removeEventListener("dragover", handleDragOver);
      node.removeEventListener("drop", handleDrop);
    };
  }
  addEventListeners(target) {
    if (!target.addEventListener) {
      return;
    }
    target.addEventListener("dragstart", this.handleTopDragStart);
    target.addEventListener("dragstart", this.handleTopDragStartCapture, true);
    target.addEventListener("dragend", this.handleTopDragEndCapture, true);
    target.addEventListener("dragenter", this.handleTopDragEnter);
    target.addEventListener("dragenter", this.handleTopDragEnterCapture, true);
    target.addEventListener("dragleave", this.handleTopDragLeaveCapture, true);
    target.addEventListener("dragover", this.handleTopDragOver);
    target.addEventListener("dragover", this.handleTopDragOverCapture, true);
    target.addEventListener("drop", this.handleTopDrop);
    target.addEventListener("drop", this.handleTopDropCapture, true);
  }
  removeEventListeners(target) {
    if (!target.removeEventListener) {
      return;
    }
    target.removeEventListener("dragstart", this.handleTopDragStart);
    target.removeEventListener("dragstart", this.handleTopDragStartCapture, true);
    target.removeEventListener("dragend", this.handleTopDragEndCapture, true);
    target.removeEventListener("dragenter", this.handleTopDragEnter);
    target.removeEventListener("dragenter", this.handleTopDragEnterCapture, true);
    target.removeEventListener("dragleave", this.handleTopDragLeaveCapture, true);
    target.removeEventListener("dragover", this.handleTopDragOver);
    target.removeEventListener("dragover", this.handleTopDragOverCapture, true);
    target.removeEventListener("drop", this.handleTopDrop);
    target.removeEventListener("drop", this.handleTopDropCapture, true);
  }
  getCurrentSourceNodeOptions() {
    const sourceId = this.monitor.getSourceId();
    const sourceNodeOptions = this.sourceNodeOptions.get(sourceId);
    return _objectSpread({
      dropEffect: this.altKeyPressed ? "copy" : "move"
    }, sourceNodeOptions || {});
  }
  getCurrentDropEffect() {
    if (this.isDraggingNativeItem()) {
      return "copy";
    }
    return this.getCurrentSourceNodeOptions().dropEffect;
  }
  getCurrentSourcePreviewNodeOptions() {
    const sourceId = this.monitor.getSourceId();
    const sourcePreviewNodeOptions = this.sourcePreviewNodeOptions.get(sourceId);
    return _objectSpread({
      anchorX: 0.5,
      anchorY: 0.5,
      captureDraggingState: false
    }, sourcePreviewNodeOptions || {});
  }
  isDraggingNativeItem() {
    const itemType = this.monitor.getItemType();
    return Object.keys(NativeTypes).some(
      (key) => NativeTypes[key] === itemType
    );
  }
  beginDragNativeItem(type, dataTransfer) {
    this.clearCurrentDragSourceNode();
    this.currentNativeSource = createNativeDragSource(type, dataTransfer);
    this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
    this.actions.beginDrag([
      this.currentNativeHandle
    ]);
  }
  setCurrentDragSourceNode(node) {
    this.clearCurrentDragSourceNode();
    this.currentDragSourceNode = node;
    const MOUSE_MOVE_TIMEOUT = 1e3;
    this.mouseMoveTimeoutTimer = setTimeout(() => {
      var ref;
      return (ref = this.rootElement) === null || ref === void 0 ? void 0 : ref.addEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, true);
    }, MOUSE_MOVE_TIMEOUT);
  }
  clearCurrentDragSourceNode() {
    if (this.currentDragSourceNode) {
      this.currentDragSourceNode = null;
      if (this.rootElement) {
        var ref;
        (ref = this.window) === null || ref === void 0 ? void 0 : ref.clearTimeout(this.mouseMoveTimeoutTimer || void 0);
        this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, true);
      }
      this.mouseMoveTimeoutTimer = null;
      return true;
    }
    return false;
  }
  handleDragStart(e, sourceId) {
    if (e.defaultPrevented) {
      return;
    }
    if (!this.dragStartSourceIds) {
      this.dragStartSourceIds = [];
    }
    this.dragStartSourceIds.unshift(sourceId);
  }
  handleDragEnter(_e, targetId) {
    this.dragEnterTargetIds.unshift(targetId);
  }
  handleDragOver(_e, targetId) {
    if (this.dragOverTargetIds === null) {
      this.dragOverTargetIds = [];
    }
    this.dragOverTargetIds.unshift(targetId);
  }
  handleDrop(_e, targetId) {
    this.dropTargetIds.unshift(targetId);
  }
  constructor(manager, globalContext, options) {
    this.sourcePreviewNodes = /* @__PURE__ */ new Map();
    this.sourcePreviewNodeOptions = /* @__PURE__ */ new Map();
    this.sourceNodes = /* @__PURE__ */ new Map();
    this.sourceNodeOptions = /* @__PURE__ */ new Map();
    this.dragStartSourceIds = null;
    this.dropTargetIds = [];
    this.dragEnterTargetIds = [];
    this.currentNativeSource = null;
    this.currentNativeHandle = null;
    this.currentDragSourceNode = null;
    this.altKeyPressed = false;
    this.mouseMoveTimeoutTimer = null;
    this.asyncEndDragFrameId = null;
    this.dragOverTargetIds = null;
    this.lastClientOffset = null;
    this.hoverRafId = null;
    this.getSourceClientOffset = (sourceId) => {
      const source = this.sourceNodes.get(sourceId);
      return source && getNodeClientOffset(source) || null;
    };
    this.endDragNativeItem = () => {
      if (!this.isDraggingNativeItem()) {
        return;
      }
      this.actions.endDrag();
      if (this.currentNativeHandle) {
        this.registry.removeSource(this.currentNativeHandle);
      }
      this.currentNativeHandle = null;
      this.currentNativeSource = null;
    };
    this.isNodeInDocument = (node) => {
      return Boolean(node && this.document && this.document.body && this.document.body.contains(node));
    };
    this.endDragIfSourceWasRemovedFromDOM = () => {
      const node = this.currentDragSourceNode;
      if (node == null || this.isNodeInDocument(node)) {
        return;
      }
      if (this.clearCurrentDragSourceNode() && this.monitor.isDragging()) {
        this.actions.endDrag();
      }
      this.cancelHover();
    };
    this.scheduleHover = (dragOverTargetIds) => {
      if (this.hoverRafId === null && typeof requestAnimationFrame !== "undefined") {
        this.hoverRafId = requestAnimationFrame(() => {
          if (this.monitor.isDragging()) {
            this.actions.hover(dragOverTargetIds || [], {
              clientOffset: this.lastClientOffset
            });
          }
          this.hoverRafId = null;
        });
      }
    };
    this.cancelHover = () => {
      if (this.hoverRafId !== null && typeof cancelAnimationFrame !== "undefined") {
        cancelAnimationFrame(this.hoverRafId);
        this.hoverRafId = null;
      }
    };
    this.handleTopDragStartCapture = () => {
      this.clearCurrentDragSourceNode();
      this.dragStartSourceIds = [];
    };
    this.handleTopDragStart = (e) => {
      if (e.defaultPrevented) {
        return;
      }
      const { dragStartSourceIds } = this;
      this.dragStartSourceIds = null;
      const clientOffset = getEventClientOffset(e);
      if (this.monitor.isDragging()) {
        this.actions.endDrag();
        this.cancelHover();
      }
      this.actions.beginDrag(dragStartSourceIds || [], {
        publishSource: false,
        getSourceClientOffset: this.getSourceClientOffset,
        clientOffset
      });
      const { dataTransfer } = e;
      const nativeType = matchNativeItemType(dataTransfer);
      if (this.monitor.isDragging()) {
        if (dataTransfer && typeof dataTransfer.setDragImage === "function") {
          const sourceId = this.monitor.getSourceId();
          const sourceNode = this.sourceNodes.get(sourceId);
          const dragPreview = this.sourcePreviewNodes.get(sourceId) || sourceNode;
          if (dragPreview) {
            const { anchorX, anchorY, offsetX, offsetY } = this.getCurrentSourcePreviewNodeOptions();
            const anchorPoint = {
              anchorX,
              anchorY
            };
            const offsetPoint = {
              offsetX,
              offsetY
            };
            const dragPreviewOffset = getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint);
            dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
          }
        }
        try {
          dataTransfer === null || dataTransfer === void 0 ? void 0 : dataTransfer.setData("application/json", {});
        } catch (err) {
        }
        this.setCurrentDragSourceNode(e.target);
        const { captureDraggingState } = this.getCurrentSourcePreviewNodeOptions();
        if (!captureDraggingState) {
          setTimeout(
            () => this.actions.publishDragSource(),
            0
          );
        } else {
          this.actions.publishDragSource();
        }
      } else if (nativeType) {
        this.beginDragNativeItem(nativeType);
      } else if (dataTransfer && !dataTransfer.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute("draggable"))) {
        return;
      } else {
        e.preventDefault();
      }
    };
    this.handleTopDragEndCapture = () => {
      if (this.clearCurrentDragSourceNode() && this.monitor.isDragging()) {
        this.actions.endDrag();
      }
      this.cancelHover();
    };
    this.handleTopDragEnterCapture = (e) => {
      this.dragEnterTargetIds = [];
      if (this.isDraggingNativeItem()) {
        var ref;
        (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
      }
      const isFirstEnter = this.enterLeaveCounter.enter(e.target);
      if (!isFirstEnter || this.monitor.isDragging()) {
        return;
      }
      const { dataTransfer } = e;
      const nativeType = matchNativeItemType(dataTransfer);
      if (nativeType) {
        this.beginDragNativeItem(nativeType, dataTransfer);
      }
    };
    this.handleTopDragEnter = (e) => {
      const { dragEnterTargetIds } = this;
      this.dragEnterTargetIds = [];
      if (!this.monitor.isDragging()) {
        return;
      }
      this.altKeyPressed = e.altKey;
      if (dragEnterTargetIds.length > 0) {
        this.actions.hover(dragEnterTargetIds, {
          clientOffset: getEventClientOffset(e)
        });
      }
      const canDrop = dragEnterTargetIds.some(
        (targetId) => this.monitor.canDropOnTarget(targetId)
      );
      if (canDrop) {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = this.getCurrentDropEffect();
        }
      }
    };
    this.handleTopDragOverCapture = (e) => {
      this.dragOverTargetIds = [];
      if (this.isDraggingNativeItem()) {
        var ref;
        (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
      }
    };
    this.handleTopDragOver = (e) => {
      const { dragOverTargetIds } = this;
      this.dragOverTargetIds = [];
      if (!this.monitor.isDragging()) {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = "none";
        }
        return;
      }
      this.altKeyPressed = e.altKey;
      this.lastClientOffset = getEventClientOffset(e);
      this.scheduleHover(dragOverTargetIds);
      const canDrop = (dragOverTargetIds || []).some(
        (targetId) => this.monitor.canDropOnTarget(targetId)
      );
      if (canDrop) {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = this.getCurrentDropEffect();
        }
      } else if (this.isDraggingNativeItem()) {
        e.preventDefault();
      } else {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = "none";
        }
      }
    };
    this.handleTopDragLeaveCapture = (e) => {
      if (this.isDraggingNativeItem()) {
        e.preventDefault();
      }
      const isLastLeave = this.enterLeaveCounter.leave(e.target);
      if (!isLastLeave) {
        return;
      }
      if (this.isDraggingNativeItem()) {
        setTimeout(
          () => this.endDragNativeItem(),
          0
        );
      }
      this.cancelHover();
    };
    this.handleTopDropCapture = (e) => {
      this.dropTargetIds = [];
      if (this.isDraggingNativeItem()) {
        var ref;
        e.preventDefault();
        (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
      } else if (matchNativeItemType(e.dataTransfer)) {
        e.preventDefault();
      }
      this.enterLeaveCounter.reset();
    };
    this.handleTopDrop = (e) => {
      const { dropTargetIds } = this;
      this.dropTargetIds = [];
      this.actions.hover(dropTargetIds, {
        clientOffset: getEventClientOffset(e)
      });
      this.actions.drop({
        dropEffect: this.getCurrentDropEffect()
      });
      if (this.isDraggingNativeItem()) {
        this.endDragNativeItem();
      } else if (this.monitor.isDragging()) {
        this.actions.endDrag();
      }
      this.cancelHover();
    };
    this.handleSelectStart = (e) => {
      const target = e.target;
      if (typeof target.dragDrop !== "function") {
        return;
      }
      if (target.tagName === "INPUT" || target.tagName === "SELECT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
        return;
      }
      e.preventDefault();
      target.dragDrop();
    };
    this.options = new OptionsReader(globalContext, options);
    this.actions = manager.getActions();
    this.monitor = manager.getMonitor();
    this.registry = manager.getRegistry();
    this.enterLeaveCounter = new EnterLeaveCounter(this.isNodeInDocument);
  }
}
const HTML5Backend = function createBackend(manager, context, options) {
  return new HTML5BackendImpl(manager, context, options);
};
var tableSettingsPanelOrder = "";
var TableSettingsPanelOrder = function TableSettingsPanelOrder2(props) {
  var externalList = props.list, root2 = props.root, onChange = props.onChange;
  var _React$useState = React.useState(externalList), _React$useState2 = _slicedToArray(_React$useState, 2), list = _React$useState2[0], selList = _React$useState2[1];
  var moveListItem = React.useCallback(function(dragIndex, hoverIndex) {
    var dragItem = list[dragIndex];
    var hoverItem = list[hoverIndex];
    selList(function(list2) {
      var newList = _toConsumableArray(list2);
      newList[dragIndex] = hoverItem;
      newList[hoverIndex] = dragItem;
      return newList;
    });
  }, [list]);
  var onDrop = function onDrop2() {
    onChange(list);
  };
  return /* @__PURE__ */ React.createElement(DndProvider, {
    backend: HTML5Backend
  }, /* @__PURE__ */ React.createElement("div", {
    className: "order-list"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "order-root"
  }, root2), /* @__PURE__ */ React.createElement("div", {
    className: "order-items"
  }, list.map(function(item, index) {
    if (item.isLeft)
      return null;
    return /* @__PURE__ */ React.createElement(ListItem, _extends$g({}, props, item, {
      index,
      moveListItem,
      onDrop
    }));
  }))));
};
var ListItem = function ListItem2(props) {
  var value = props.value, index = props.index, moveListItem = props.moveListItem, onDrop = props.onDrop;
  var _useDrag = useDrag({
    type: "item",
    item: {
      index
    },
    collect: function collect(monitor) {
      return {
        isDragging: monitor.isDragging()
      };
    }
  }), _useDrag2 = _slicedToArray(_useDrag, 2);
  _useDrag2[0].isDragging;
  var dragRef = _useDrag2[1];
  var _useDrop = useDrop({
    accept: "item",
    hover: function hover3(item, monitor) {
      var _ref$current;
      var dragIndex = item.index;
      var hoverIndex = index;
      var hoverBoundingRect = (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.getBoundingClientRect();
      var hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
      var hoverActualX = monitor.getClientOffset().x - hoverBoundingRect.left;
      if (dragIndex < hoverIndex && hoverActualX < hoverMiddleX || dragIndex > hoverIndex && hoverActualX > hoverMiddleX)
        return;
      moveListItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
    drop: function drop() {
      return onDrop();
    }
  }), _useDrop2 = _slicedToArray(_useDrop, 2);
  _useDrop2[0];
  var dropRef = _useDrop2[1];
  var ref = React.useRef(null);
  var dragDropRef = dragRef(dropRef(ref));
  return /* @__PURE__ */ React.createElement("div", {
    className: "order-list-item",
    ref: dragDropRef
  }, value);
};
var callTable = function callTable2(tablePortalEl, tableProps) {
  var tableRoot = document.createElement("div");
  tableRoot.className = "call-unitable-wrapper";
  tablePortalEl.appendChild(tableRoot);
  var root2 = createRoot(tableRoot);
  var removeComponent = function removeComponent2() {
    root2.unmount();
    tableRoot.remove();
  };
  root2.render(/* @__PURE__ */ React.createElement(Table, _extends$g({}, tableProps, {
    removeComponent
  })));
  return {
    removeComponent
  };
};
function die(error) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  throw new Error(typeof error === "number" ? "[MobX] minified error nr: " + error + (args.length ? " " + args.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + error);
}
var mockGlobal = {};
function getGlobal() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  return mockGlobal;
}
var assign = Object.assign;
var getDescriptor = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var objectPrototype = Object.prototype;
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
var hasProxy = typeof Proxy !== "undefined";
var plainObjectString = /* @__PURE__ */ Object.toString();
function assertProxies() {
  if (!hasProxy) {
    die("Proxy not available");
  }
}
function once(func) {
  var invoked = false;
  return function() {
    if (invoked) {
      return;
    }
    invoked = true;
    return func.apply(this, arguments);
  };
}
var noop = function noop2() {
};
function isFunction(fn) {
  return typeof fn === "function";
}
function isStringish(value) {
  var t = typeof value;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return true;
  }
  return false;
}
function isObject(value) {
  return value !== null && typeof value === "object";
}
function isPlainObject(value) {
  if (!isObject(value)) {
    return false;
  }
  var proto2 = Object.getPrototypeOf(value);
  if (proto2 == null) {
    return true;
  }
  var protoConstructor = Object.hasOwnProperty.call(proto2, "constructor") && proto2.constructor;
  return typeof protoConstructor === "function" && protoConstructor.toString() === plainObjectString;
}
function isGenerator(obj) {
  var constructor = obj == null ? void 0 : obj.constructor;
  if (!constructor) {
    return false;
  }
  if ("GeneratorFunction" === constructor.name || "GeneratorFunction" === constructor.displayName) {
    return true;
  }
  return false;
}
function addHiddenProp(object2, propName, value) {
  defineProperty(object2, propName, {
    enumerable: false,
    writable: true,
    configurable: true,
    value
  });
}
function addHiddenFinalProp(object2, propName, value) {
  defineProperty(object2, propName, {
    enumerable: false,
    writable: false,
    configurable: true,
    value
  });
}
function createInstanceofPredicate(name, theClass) {
  var propName = "isMobX" + name;
  theClass.prototype[propName] = true;
  return function(x) {
    return isObject(x) && x[propName] === true;
  };
}
function isES6Map(thing) {
  return thing != null && Object.prototype.toString.call(thing) === "[object Map]";
}
function isPlainES6Map(thing) {
  var mapProto = Object.getPrototypeOf(thing);
  var objectProto2 = Object.getPrototypeOf(mapProto);
  var nullProto = Object.getPrototypeOf(objectProto2);
  return nullProto === null;
}
function isES6Set(thing) {
  return thing != null && Object.prototype.toString.call(thing) === "[object Set]";
}
var hasGetOwnPropertySymbols = typeof Object.getOwnPropertySymbols !== "undefined";
function getPlainObjectKeys(object2) {
  var keys2 = Object.keys(object2);
  if (!hasGetOwnPropertySymbols) {
    return keys2;
  }
  var symbols = Object.getOwnPropertySymbols(object2);
  if (!symbols.length) {
    return keys2;
  }
  return [].concat(keys2, symbols.filter(function(s) {
    return objectPrototype.propertyIsEnumerable.call(object2, s);
  }));
}
var ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : hasGetOwnPropertySymbols ? function(obj) {
  return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
} : Object.getOwnPropertyNames;
function toPrimitive(value) {
  return value === null ? null : typeof value === "object" ? "" + value : value;
}
function hasProp(target, prop) {
  return objectPrototype.hasOwnProperty.call(target, prop);
}
var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors2(target) {
  var res = {};
  ownKeys(target).forEach(function(key) {
    res[key] = getDescriptor(target, key);
  });
  return res;
};
function getFlag(flags, mask) {
  return !!(flags & mask);
}
function setFlag(flags, mask, newValue) {
  if (newValue) {
    flags |= mask;
  } else {
    flags &= ~mask;
  }
  return flags;
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n2 = Array(a); e < a; e++)
    n2[e] = r[e];
  return n2;
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _createForOfIteratorHelperLoose(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (t)
    return (t = t.call(r)).next.bind(t);
  if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
    t && (r = t);
    var o = 0;
    return function() {
      return o >= r.length ? {
        done: true
      } : {
        done: false,
        value: r[o++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n2) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        ({}).hasOwnProperty.call(t, r) && (n2[r] = t[r]);
    }
    return n2;
  }, _extends.apply(null, arguments);
}
function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r)
      return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
var storedAnnotationsSymbol = /* @__PURE__ */ Symbol("mobx-stored-annotations");
function createDecoratorAnnotation(annotation) {
  function decorator(target, property2) {
    if (is20223Decorator(property2)) {
      return annotation.decorate_20223_(target, property2);
    } else {
      storeAnnotation(target, property2, annotation);
    }
  }
  return Object.assign(decorator, annotation);
}
function storeAnnotation(prototype, key, annotation) {
  if (!hasProp(prototype, storedAnnotationsSymbol)) {
    addHiddenProp(prototype, storedAnnotationsSymbol, _extends({}, prototype[storedAnnotationsSymbol]));
  }
  if (!isOverride(annotation)) {
    prototype[storedAnnotationsSymbol][key] = annotation;
  }
}
function collectStoredAnnotations(target) {
  if (!hasProp(target, storedAnnotationsSymbol)) {
    addHiddenProp(target, storedAnnotationsSymbol, _extends({}, target[storedAnnotationsSymbol]));
  }
  return target[storedAnnotationsSymbol];
}
function is20223Decorator(context) {
  return typeof context == "object" && typeof context["kind"] == "string";
}
var $mobx = /* @__PURE__ */ Symbol("mobx administration");
var Atom = /* @__PURE__ */ function() {
  function Atom2(name_) {
    if (name_ === void 0) {
      name_ = "Atom";
    }
    this.name_ = void 0;
    this.flags_ = 0;
    this.observers_ = /* @__PURE__ */ new Set();
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = IDerivationState_.NOT_TRACKING_;
    this.onBOL = void 0;
    this.onBUOL = void 0;
    this.name_ = name_;
  }
  var _proto = Atom2.prototype;
  _proto.onBO = function onBO() {
    if (this.onBOL) {
      this.onBOL.forEach(function(listener) {
        return listener();
      });
    }
  };
  _proto.onBUO = function onBUO() {
    if (this.onBUOL) {
      this.onBUOL.forEach(function(listener) {
        return listener();
      });
    }
  };
  _proto.reportObserved = function reportObserved$1() {
    return reportObserved(this);
  };
  _proto.reportChanged = function reportChanged() {
    startBatch();
    propagateChanged(this);
    endBatch();
  };
  _proto.toString = function toString3() {
    return this.name_;
  };
  return _createClass(Atom2, [{
    key: "isBeingObserved",
    get: function get5() {
      return getFlag(this.flags_, Atom2.isBeingObservedMask_);
    },
    set: function set5(newValue) {
      this.flags_ = setFlag(this.flags_, Atom2.isBeingObservedMask_, newValue);
    }
  }, {
    key: "isPendingUnobservation",
    get: function get5() {
      return getFlag(this.flags_, Atom2.isPendingUnobservationMask_);
    },
    set: function set5(newValue) {
      this.flags_ = setFlag(this.flags_, Atom2.isPendingUnobservationMask_, newValue);
    }
  }, {
    key: "diffValue",
    get: function get5() {
      return getFlag(this.flags_, Atom2.diffValueMask_) ? 1 : 0;
    },
    set: function set5(newValue) {
      this.flags_ = setFlag(this.flags_, Atom2.diffValueMask_, newValue === 1 ? true : false);
    }
  }]);
}();
Atom.isBeingObservedMask_ = 1;
Atom.isPendingUnobservationMask_ = 2;
Atom.diffValueMask_ = 4;
var isAtom = /* @__PURE__ */ createInstanceofPredicate("Atom", Atom);
function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
  if (onBecomeObservedHandler === void 0) {
    onBecomeObservedHandler = noop;
  }
  if (onBecomeUnobservedHandler === void 0) {
    onBecomeUnobservedHandler = noop;
  }
  var atom = new Atom(name);
  if (onBecomeObservedHandler !== noop) {
    onBecomeObserved(atom, onBecomeObservedHandler);
  }
  if (onBecomeUnobservedHandler !== noop) {
    onBecomeUnobserved(atom, onBecomeUnobservedHandler);
  }
  return atom;
}
function identityComparer(a, b) {
  return a === b;
}
function structuralComparer(a, b) {
  return deepEqual(a, b);
}
function shallowComparer(a, b) {
  return deepEqual(a, b, 1);
}
function defaultComparer(a, b) {
  if (Object.is) {
    return Object.is(a, b);
  }
  return a === b ? a !== 0 || 1 / a === 1 / b : a !== a && b !== b;
}
var comparer = {
  identity: identityComparer,
  structural: structuralComparer,
  "default": defaultComparer,
  shallow: shallowComparer
};
function deepEnhancer(v, _, name) {
  if (isObservable(v)) {
    return v;
  }
  if (Array.isArray(v)) {
    return observable.array(v, {
      name
    });
  }
  if (isPlainObject(v)) {
    return observable.object(v, void 0, {
      name
    });
  }
  if (isES6Map(v)) {
    return observable.map(v, {
      name
    });
  }
  if (isES6Set(v)) {
    return observable.set(v, {
      name
    });
  }
  if (typeof v === "function" && !isAction(v) && !isFlow(v)) {
    if (isGenerator(v)) {
      return flow(v);
    } else {
      return autoAction(name, v);
    }
  }
  return v;
}
function shallowEnhancer(v, _, name) {
  if (v === void 0 || v === null) {
    return v;
  }
  if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v)) {
    return v;
  }
  if (Array.isArray(v)) {
    return observable.array(v, {
      name,
      deep: false
    });
  }
  if (isPlainObject(v)) {
    return observable.object(v, void 0, {
      name,
      deep: false
    });
  }
  if (isES6Map(v)) {
    return observable.map(v, {
      name,
      deep: false
    });
  }
  if (isES6Set(v)) {
    return observable.set(v, {
      name,
      deep: false
    });
  }
}
function referenceEnhancer(newValue) {
  return newValue;
}
function refStructEnhancer(v, oldValue) {
  if (deepEqual(v, oldValue)) {
    return oldValue;
  }
  return v;
}
var OVERRIDE = "override";
function isOverride(annotation) {
  return annotation.annotationType_ === OVERRIDE;
}
function createActionAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$1,
    extend_: extend_$1,
    decorate_20223_: decorate_20223_$1
  };
}
function make_$1(adm, key, descriptor, source) {
  var _this$options_;
  if ((_this$options_ = this.options_) != null && _this$options_.bound) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 : 1;
  }
  if (source === adm.target_) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 : 2;
  }
  if (isAction(descriptor.value)) {
    return 1;
  }
  var actionDescriptor = createActionDescriptor(adm, this, key, descriptor, false);
  defineProperty(source, key, actionDescriptor);
  return 2;
}
function extend_$1(adm, key, descriptor, proxyTrap) {
  var actionDescriptor = createActionDescriptor(adm, this, key, descriptor);
  return adm.defineProperty_(key, actionDescriptor, proxyTrap);
}
function decorate_20223_$1(mthd, context) {
  var kind = context.kind, name = context.name, addInitializer = context.addInitializer;
  var ann = this;
  var _createAction = function _createAction2(m2) {
    var _ann$options_$name, _ann$options_, _ann$options_$autoAct, _ann$options_2;
    return createAction((_ann$options_$name = (_ann$options_ = ann.options_) == null ? void 0 : _ann$options_.name) != null ? _ann$options_$name : name.toString(), m2, (_ann$options_$autoAct = (_ann$options_2 = ann.options_) == null ? void 0 : _ann$options_2.autoAction) != null ? _ann$options_$autoAct : false);
  };
  if (kind == "field") {
    return function(initMthd) {
      var _ann$options_3;
      var mthd2 = initMthd;
      if (!isAction(mthd2)) {
        mthd2 = _createAction(mthd2);
      }
      if ((_ann$options_3 = ann.options_) != null && _ann$options_3.bound) {
        mthd2 = mthd2.bind(this);
        mthd2.isMobxAction = true;
      }
      return mthd2;
    };
  }
  if (kind == "method") {
    var _this$options_2;
    if (!isAction(mthd)) {
      mthd = _createAction(mthd);
    }
    if ((_this$options_2 = this.options_) != null && _this$options_2.bound) {
      addInitializer(function() {
        var self2 = this;
        var bound = self2[name].bind(self2);
        bound.isMobxAction = true;
        self2[name] = bound;
      });
    }
    return mthd;
  }
  die("Cannot apply '" + ann.annotationType_ + "' to '" + String(name) + "' (kind: " + kind + "):" + ("\n'" + ann.annotationType_ + "' can only be used on properties with a function value."));
}
function assertActionDescriptor(adm, _ref, key, _ref2) {
  _ref.annotationType_;
  _ref2.value;
}
function createActionDescriptor(adm, annotation, key, descriptor, safeDescriptors) {
  var _annotation$options_, _annotation$options_$, _annotation$options_2, _annotation$options_$2, _annotation$options_3, _annotation$options_4, _adm$proxy_2;
  if (safeDescriptors === void 0) {
    safeDescriptors = globalState.safeDescriptors;
  }
  assertActionDescriptor(adm, annotation, key, descriptor);
  var value = descriptor.value;
  if ((_annotation$options_ = annotation.options_) != null && _annotation$options_.bound) {
    var _adm$proxy_;
    value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
  }
  return {
    value: createAction(
      (_annotation$options_$ = (_annotation$options_2 = annotation.options_) == null ? void 0 : _annotation$options_2.name) != null ? _annotation$options_$ : key.toString(),
      value,
      (_annotation$options_$2 = (_annotation$options_3 = annotation.options_) == null ? void 0 : _annotation$options_3.autoAction) != null ? _annotation$options_$2 : false,
      (_annotation$options_4 = annotation.options_) != null && _annotation$options_4.bound ? (_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_ : void 0
    ),
    configurable: safeDescriptors ? adm.isPlainObject_ : true,
    enumerable: false,
    writable: safeDescriptors ? false : true
  };
}
function createFlowAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$2,
    extend_: extend_$2,
    decorate_20223_: decorate_20223_$2
  };
}
function make_$2(adm, key, descriptor, source) {
  var _this$options_;
  if (source === adm.target_) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 : 2;
  }
  if ((_this$options_ = this.options_) != null && _this$options_.bound && (!hasProp(adm.target_, key) || !isFlow(adm.target_[key]))) {
    if (this.extend_(adm, key, descriptor, false) === null) {
      return 0;
    }
  }
  if (isFlow(descriptor.value)) {
    return 1;
  }
  var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, false, false);
  defineProperty(source, key, flowDescriptor);
  return 2;
}
function extend_$2(adm, key, descriptor, proxyTrap) {
  var _this$options_2;
  var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, (_this$options_2 = this.options_) == null ? void 0 : _this$options_2.bound);
  return adm.defineProperty_(key, flowDescriptor, proxyTrap);
}
function decorate_20223_$2(mthd, context) {
  var _this$options_3;
  var name = context.name, addInitializer = context.addInitializer;
  if (!isFlow(mthd)) {
    mthd = flow(mthd);
  }
  if ((_this$options_3 = this.options_) != null && _this$options_3.bound) {
    addInitializer(function() {
      var self2 = this;
      var bound = self2[name].bind(self2);
      bound.isMobXFlow = true;
      self2[name] = bound;
    });
  }
  return mthd;
}
function assertFlowDescriptor(adm, _ref, key, _ref2) {
  _ref.annotationType_;
  _ref2.value;
}
function createFlowDescriptor(adm, annotation, key, descriptor, bound, safeDescriptors) {
  if (safeDescriptors === void 0) {
    safeDescriptors = globalState.safeDescriptors;
  }
  assertFlowDescriptor(adm, annotation, key, descriptor);
  var value = descriptor.value;
  if (!isFlow(value)) {
    value = flow(value);
  }
  if (bound) {
    var _adm$proxy_;
    value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
    value.isMobXFlow = true;
  }
  return {
    value,
    configurable: safeDescriptors ? adm.isPlainObject_ : true,
    enumerable: false,
    writable: safeDescriptors ? false : true
  };
}
function createComputedAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$3,
    extend_: extend_$3,
    decorate_20223_: decorate_20223_$3
  };
}
function make_$3(adm, key, descriptor) {
  return this.extend_(adm, key, descriptor, false) === null ? 0 : 1;
}
function extend_$3(adm, key, descriptor, proxyTrap) {
  assertComputedDescriptor(adm, this, key, descriptor);
  return adm.defineComputedProperty_(key, _extends({}, this.options_, {
    get: descriptor.get,
    set: descriptor.set
  }), proxyTrap);
}
function decorate_20223_$3(get5, context) {
  var ann = this;
  var key = context.name, addInitializer = context.addInitializer;
  addInitializer(function() {
    var adm = asObservableObject(this)[$mobx];
    var options = _extends({}, ann.options_, {
      get: get5,
      context: this
    });
    options.name || (options.name = "ObservableObject." + key.toString());
    adm.values_.set(key, new ComputedValue(options));
  });
  return function() {
    return this[$mobx].getObservablePropValue_(key);
  };
}
function assertComputedDescriptor(adm, _ref, key, _ref2) {
  _ref.annotationType_;
  _ref2.get;
}
function createObservableAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$4,
    extend_: extend_$4,
    decorate_20223_: decorate_20223_$4
  };
}
function make_$4(adm, key, descriptor) {
  return this.extend_(adm, key, descriptor, false) === null ? 0 : 1;
}
function extend_$4(adm, key, descriptor, proxyTrap) {
  var _this$options_$enhanc, _this$options_;
  assertObservableDescriptor(adm, this);
  return adm.defineObservableProperty_(key, descriptor.value, (_this$options_$enhanc = (_this$options_ = this.options_) == null ? void 0 : _this$options_.enhancer) != null ? _this$options_$enhanc : deepEnhancer, proxyTrap);
}
function decorate_20223_$4(desc, context) {
  var ann = this;
  var kind = context.kind, name = context.name;
  var initializedObjects = /* @__PURE__ */ new WeakSet();
  function initializeObservable(target, value) {
    var _ann$options_$enhance, _ann$options_;
    var adm = asObservableObject(target)[$mobx];
    var observable2 = new ObservableValue(value, (_ann$options_$enhance = (_ann$options_ = ann.options_) == null ? void 0 : _ann$options_.enhancer) != null ? _ann$options_$enhance : deepEnhancer, "ObservableObject." + name.toString(), false);
    adm.values_.set(name, observable2);
    initializedObjects.add(target);
  }
  if (kind == "accessor") {
    return {
      get: function get5() {
        if (!initializedObjects.has(this)) {
          initializeObservable(this, desc.get.call(this));
        }
        return this[$mobx].getObservablePropValue_(name);
      },
      set: function set5(value) {
        if (!initializedObjects.has(this)) {
          initializeObservable(this, value);
        }
        return this[$mobx].setObservablePropValue_(name, value);
      },
      init: function init(value) {
        if (!initializedObjects.has(this)) {
          initializeObservable(this, value);
        }
        return value;
      }
    };
  }
  return;
}
function assertObservableDescriptor(adm, _ref, key, descriptor) {
  _ref.annotationType_;
}
var AUTO = "true";
var autoAnnotation = /* @__PURE__ */ createAutoAnnotation();
function createAutoAnnotation(options) {
  return {
    annotationType_: AUTO,
    options_: options,
    make_: make_$5,
    extend_: extend_$5,
    decorate_20223_: decorate_20223_$5
  };
}
function make_$5(adm, key, descriptor, source) {
  var _this$options_3, _this$options_4;
  if (descriptor.get) {
    return computed.make_(adm, key, descriptor, source);
  }
  if (descriptor.set) {
    var set5 = createAction(key.toString(), descriptor.set);
    if (source === adm.target_) {
      return adm.defineProperty_(key, {
        configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
        set: set5
      }) === null ? 0 : 2;
    }
    defineProperty(source, key, {
      configurable: true,
      set: set5
    });
    return 2;
  }
  if (source !== adm.target_ && typeof descriptor.value === "function") {
    var _this$options_2;
    if (isGenerator(descriptor.value)) {
      var _this$options_;
      var flowAnnotation2 = (_this$options_ = this.options_) != null && _this$options_.autoBind ? flow.bound : flow;
      return flowAnnotation2.make_(adm, key, descriptor, source);
    }
    var actionAnnotation2 = (_this$options_2 = this.options_) != null && _this$options_2.autoBind ? autoAction.bound : autoAction;
    return actionAnnotation2.make_(adm, key, descriptor, source);
  }
  var observableAnnotation2 = ((_this$options_3 = this.options_) == null ? void 0 : _this$options_3.deep) === false ? observable.ref : observable;
  if (typeof descriptor.value === "function" && (_this$options_4 = this.options_) != null && _this$options_4.autoBind) {
    var _adm$proxy_;
    descriptor.value = descriptor.value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
  }
  return observableAnnotation2.make_(adm, key, descriptor, source);
}
function extend_$5(adm, key, descriptor, proxyTrap) {
  var _this$options_5, _this$options_6;
  if (descriptor.get) {
    return computed.extend_(adm, key, descriptor, proxyTrap);
  }
  if (descriptor.set) {
    return adm.defineProperty_(key, {
      configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
      set: createAction(key.toString(), descriptor.set)
    }, proxyTrap);
  }
  if (typeof descriptor.value === "function" && (_this$options_5 = this.options_) != null && _this$options_5.autoBind) {
    var _adm$proxy_2;
    descriptor.value = descriptor.value.bind((_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_);
  }
  var observableAnnotation2 = ((_this$options_6 = this.options_) == null ? void 0 : _this$options_6.deep) === false ? observable.ref : observable;
  return observableAnnotation2.extend_(adm, key, descriptor, proxyTrap);
}
function decorate_20223_$5(desc, context) {
  die("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var OBSERVABLE = "observable";
var OBSERVABLE_REF = "observable.ref";
var OBSERVABLE_SHALLOW = "observable.shallow";
var OBSERVABLE_STRUCT = "observable.struct";
var defaultCreateObservableOptions = {
  deep: true,
  name: void 0,
  defaultDecorator: void 0,
  proxy: true
};
Object.freeze(defaultCreateObservableOptions);
function asCreateObservableOptions(thing) {
  return thing || defaultCreateObservableOptions;
}
var observableAnnotation = /* @__PURE__ */ createObservableAnnotation(OBSERVABLE);
var observableRefAnnotation = /* @__PURE__ */ createObservableAnnotation(OBSERVABLE_REF, {
  enhancer: referenceEnhancer
});
var observableShallowAnnotation = /* @__PURE__ */ createObservableAnnotation(OBSERVABLE_SHALLOW, {
  enhancer: shallowEnhancer
});
var observableStructAnnotation = /* @__PURE__ */ createObservableAnnotation(OBSERVABLE_STRUCT, {
  enhancer: refStructEnhancer
});
var observableDecoratorAnnotation = /* @__PURE__ */ createDecoratorAnnotation(observableAnnotation);
function getEnhancerFromOptions(options) {
  return options.deep === true ? deepEnhancer : options.deep === false ? referenceEnhancer : getEnhancerFromAnnotation(options.defaultDecorator);
}
function getAnnotationFromOptions(options) {
  var _options$defaultDecor;
  return options ? (_options$defaultDecor = options.defaultDecorator) != null ? _options$defaultDecor : createAutoAnnotation(options) : void 0;
}
function getEnhancerFromAnnotation(annotation) {
  var _annotation$options_$, _annotation$options_;
  return !annotation ? deepEnhancer : (_annotation$options_$ = (_annotation$options_ = annotation.options_) == null ? void 0 : _annotation$options_.enhancer) != null ? _annotation$options_$ : deepEnhancer;
}
function createObservable(v, arg2, arg3) {
  if (is20223Decorator(arg2)) {
    return observableAnnotation.decorate_20223_(v, arg2);
  }
  if (isStringish(arg2)) {
    storeAnnotation(v, arg2, observableAnnotation);
    return;
  }
  if (isObservable(v)) {
    return v;
  }
  if (isPlainObject(v)) {
    return observable.object(v, arg2, arg3);
  }
  if (Array.isArray(v)) {
    return observable.array(v, arg2);
  }
  if (isES6Map(v)) {
    return observable.map(v, arg2);
  }
  if (isES6Set(v)) {
    return observable.set(v, arg2);
  }
  if (typeof v === "object" && v !== null) {
    return v;
  }
  return observable.box(v, arg2);
}
assign(createObservable, observableDecoratorAnnotation);
var observableFactories = {
  box: function box(value, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
  },
  array: function array(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return (globalState.useProxies === false || o.proxy === false ? createLegacyArray : createObservableArray)(initialValues, getEnhancerFromOptions(o), o.name);
  },
  map: function map2(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
  },
  set: function set2(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
  },
  object: function object(props, decorators, options) {
    return initObservable(function() {
      return extendObservable(globalState.useProxies === false || (options == null ? void 0 : options.proxy) === false ? asObservableObject({}, options) : asDynamicObservableObject({}, options), props, decorators);
    });
  },
  ref: /* @__PURE__ */ createDecoratorAnnotation(observableRefAnnotation),
  shallow: /* @__PURE__ */ createDecoratorAnnotation(observableShallowAnnotation),
  deep: observableDecoratorAnnotation,
  struct: /* @__PURE__ */ createDecoratorAnnotation(observableStructAnnotation)
};
var observable = /* @__PURE__ */ assign(createObservable, observableFactories);
var COMPUTED = "computed";
var COMPUTED_STRUCT = "computed.struct";
var computedAnnotation = /* @__PURE__ */ createComputedAnnotation(COMPUTED);
var computedStructAnnotation = /* @__PURE__ */ createComputedAnnotation(COMPUTED_STRUCT, {
  equals: comparer.structural
});
var computed = function computed2(arg1, arg2) {
  if (is20223Decorator(arg2)) {
    return computedAnnotation.decorate_20223_(arg1, arg2);
  }
  if (isStringish(arg2)) {
    return storeAnnotation(arg1, arg2, computedAnnotation);
  }
  if (isPlainObject(arg1)) {
    return createDecoratorAnnotation(createComputedAnnotation(COMPUTED, arg1));
  }
  var opts = isPlainObject(arg2) ? arg2 : {};
  opts.get = arg1;
  opts.name || (opts.name = arg1.name || "");
  return new ComputedValue(opts);
};
Object.assign(computed, computedAnnotation);
computed.struct = /* @__PURE__ */ createDecoratorAnnotation(computedStructAnnotation);
var _getDescriptor$config, _getDescriptor;
var currentActionId = 0;
var nextActionId = 1;
var isFunctionNameConfigurable = (_getDescriptor$config = (_getDescriptor = /* @__PURE__ */ getDescriptor(function() {
}, "name")) == null ? void 0 : _getDescriptor.configurable) != null ? _getDescriptor$config : false;
var tmpNameDescriptor = {
  value: "action",
  configurable: true,
  writable: false,
  enumerable: false
};
function createAction(actionName, fn, autoAction2, ref) {
  if (autoAction2 === void 0) {
    autoAction2 = false;
  }
  function res() {
    return executeAction(actionName, autoAction2, fn, ref || this, arguments);
  }
  res.isMobxAction = true;
  res.toString = function() {
    return fn.toString();
  };
  if (isFunctionNameConfigurable) {
    tmpNameDescriptor.value = actionName;
    defineProperty(res, "name", tmpNameDescriptor);
  }
  return res;
}
function executeAction(actionName, canRunAsDerivation, fn, scope2, args) {
  var runInfo = _startAction(actionName, canRunAsDerivation);
  try {
    return fn.apply(scope2, args);
  } catch (err) {
    runInfo.error_ = err;
    throw err;
  } finally {
    _endAction(runInfo);
  }
}
function _startAction(actionName, canRunAsDerivation, scope2, args) {
  var notifySpy_ = false;
  var startTime_ = 0;
  var prevDerivation_ = globalState.trackingDerivation;
  var runAsAction = !canRunAsDerivation || !prevDerivation_;
  startBatch();
  var prevAllowStateChanges_ = globalState.allowStateChanges;
  if (runAsAction) {
    untrackedStart();
    prevAllowStateChanges_ = allowStateChangesStart(true);
  }
  var prevAllowStateReads_ = allowStateReadsStart(true);
  var runInfo = {
    runAsAction_: runAsAction,
    prevDerivation_,
    prevAllowStateChanges_,
    prevAllowStateReads_,
    notifySpy_,
    startTime_,
    actionId_: nextActionId++,
    parentActionId_: currentActionId
  };
  currentActionId = runInfo.actionId_;
  return runInfo;
}
function _endAction(runInfo) {
  if (currentActionId !== runInfo.actionId_) {
    die(30);
  }
  currentActionId = runInfo.parentActionId_;
  if (runInfo.error_ !== void 0) {
    globalState.suppressReactionErrors = true;
  }
  allowStateChangesEnd(runInfo.prevAllowStateChanges_);
  allowStateReadsEnd(runInfo.prevAllowStateReads_);
  endBatch();
  if (runInfo.runAsAction_) {
    untrackedEnd(runInfo.prevDerivation_);
  }
  globalState.suppressReactionErrors = false;
}
function allowStateChangesStart(allowStateChanges) {
  var prev = globalState.allowStateChanges;
  globalState.allowStateChanges = allowStateChanges;
  return prev;
}
function allowStateChangesEnd(prev) {
  globalState.allowStateChanges = prev;
}
var ObservableValue = /* @__PURE__ */ function(_Atom) {
  function ObservableValue2(value, enhancer, name_, notifySpy, equals) {
    var _this;
    if (name_ === void 0) {
      name_ = "ObservableValue";
    }
    if (equals === void 0) {
      equals = comparer["default"];
    }
    _this = _Atom.call(this, name_) || this;
    _this.enhancer = void 0;
    _this.name_ = void 0;
    _this.equals = void 0;
    _this.hasUnreportedChange_ = false;
    _this.interceptors_ = void 0;
    _this.changeListeners_ = void 0;
    _this.value_ = void 0;
    _this.dehancer = void 0;
    _this.enhancer = enhancer;
    _this.name_ = name_;
    _this.equals = equals;
    _this.value_ = enhancer(value, void 0, name_);
    return _this;
  }
  _inheritsLoose(ObservableValue2, _Atom);
  var _proto = ObservableValue2.prototype;
  _proto.dehanceValue = function dehanceValue(value) {
    if (this.dehancer !== void 0) {
      return this.dehancer(value);
    }
    return value;
  };
  _proto.set = function set5(newValue) {
    this.value_;
    newValue = this.prepareNewValue_(newValue);
    if (newValue !== globalState.UNCHANGED) {
      this.setNewValue_(newValue);
    }
  };
  _proto.prepareNewValue_ = function prepareNewValue_(newValue) {
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this,
        type: UPDATE,
        newValue
      });
      if (!change) {
        return globalState.UNCHANGED;
      }
      newValue = change.newValue;
    }
    newValue = this.enhancer(newValue, this.value_, this.name_);
    return this.equals(this.value_, newValue) ? globalState.UNCHANGED : newValue;
  };
  _proto.setNewValue_ = function setNewValue_(newValue) {
    var oldValue = this.value_;
    this.value_ = newValue;
    this.reportChanged();
    if (hasListeners(this)) {
      notifyListeners(this, {
        type: UPDATE,
        object: this,
        newValue,
        oldValue
      });
    }
  };
  _proto.get = function get5() {
    this.reportObserved();
    return this.dehanceValue(this.value_);
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately) {
      listener({
        observableKind: "value",
        debugObjectName: this.name_,
        object: this,
        type: UPDATE,
        newValue: this.value_,
        oldValue: void 0
      });
    }
    return registerListener(this, listener);
  };
  _proto.raw = function raw() {
    return this.value_;
  };
  _proto.toJSON = function toJSON3() {
    return this.get();
  };
  _proto.toString = function toString3() {
    return this.name_ + "[" + this.value_ + "]";
  };
  _proto.valueOf = function valueOf2() {
    return toPrimitive(this.get());
  };
  _proto[Symbol.toPrimitive] = function() {
    return this.valueOf();
  };
  return ObservableValue2;
}(Atom);
var isObservableValue = /* @__PURE__ */ createInstanceofPredicate("ObservableValue", ObservableValue);
var ComputedValue = /* @__PURE__ */ function() {
  function ComputedValue2(options) {
    this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
    this.observing_ = [];
    this.newObserving_ = null;
    this.observers_ = /* @__PURE__ */ new Set();
    this.runId_ = 0;
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    this.unboundDepsCount_ = 0;
    this.value_ = new CaughtException(null);
    this.name_ = void 0;
    this.triggeredBy_ = void 0;
    this.flags_ = 0;
    this.derivation = void 0;
    this.setter_ = void 0;
    this.isTracing_ = TraceMode.NONE;
    this.scope_ = void 0;
    this.equals_ = void 0;
    this.requiresReaction_ = void 0;
    this.keepAlive_ = void 0;
    this.onBOL = void 0;
    this.onBUOL = void 0;
    if (!options.get) {
      die(31);
    }
    this.derivation = options.get;
    this.name_ = options.name || "ComputedValue";
    if (options.set) {
      this.setter_ = createAction("ComputedValue-setter", options.set);
    }
    this.equals_ = options.equals || (options.compareStructural || options.struct ? comparer.structural : comparer["default"]);
    this.scope_ = options.context;
    this.requiresReaction_ = options.requiresReaction;
    this.keepAlive_ = !!options.keepAlive;
  }
  var _proto = ComputedValue2.prototype;
  _proto.onBecomeStale_ = function onBecomeStale_() {
    propagateMaybeChanged(this);
  };
  _proto.onBO = function onBO() {
    if (this.onBOL) {
      this.onBOL.forEach(function(listener) {
        return listener();
      });
    }
  };
  _proto.onBUO = function onBUO() {
    if (this.onBUOL) {
      this.onBUOL.forEach(function(listener) {
        return listener();
      });
    }
  };
  _proto.get = function get5() {
    if (this.isComputing) {
      die(32, this.name_, this.derivation);
    }
    if (globalState.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_) {
      if (shouldCompute(this)) {
        this.warnAboutUntrackedRead_();
        startBatch();
        this.value_ = this.computeValue_(false);
        endBatch();
      }
    } else {
      reportObserved(this);
      if (shouldCompute(this)) {
        var prevTrackingContext = globalState.trackingContext;
        if (this.keepAlive_ && !prevTrackingContext) {
          globalState.trackingContext = this;
        }
        if (this.trackAndCompute()) {
          propagateChangeConfirmed(this);
        }
        globalState.trackingContext = prevTrackingContext;
      }
    }
    var result = this.value_;
    if (isCaughtException(result)) {
      throw result.cause;
    }
    return result;
  };
  _proto.set = function set5(value) {
    if (this.setter_) {
      if (this.isRunningSetter) {
        die(33, this.name_);
      }
      this.isRunningSetter = true;
      try {
        this.setter_.call(this.scope_, value);
      } finally {
        this.isRunningSetter = false;
      }
    } else {
      die(34, this.name_);
    }
  };
  _proto.trackAndCompute = function trackAndCompute() {
    var oldValue = this.value_;
    var wasSuspended = this.dependenciesState_ === IDerivationState_.NOT_TRACKING_;
    var newValue = this.computeValue_(true);
    var changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals_(oldValue, newValue);
    if (changed) {
      this.value_ = newValue;
    }
    return changed;
  };
  _proto.computeValue_ = function computeValue_(track) {
    this.isComputing = true;
    var prev = allowStateChangesStart(false);
    var res;
    if (track) {
      res = trackDerivedFunction(this, this.derivation, this.scope_);
    } else {
      if (globalState.disableErrorBoundaries === true) {
        res = this.derivation.call(this.scope_);
      } else {
        try {
          res = this.derivation.call(this.scope_);
        } catch (e) {
          res = new CaughtException(e);
        }
      }
    }
    allowStateChangesEnd(prev);
    this.isComputing = false;
    return res;
  };
  _proto.suspend_ = function suspend_() {
    if (!this.keepAlive_) {
      clearObserving(this);
      this.value_ = void 0;
    }
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    var _this = this;
    var firstTime = true;
    var prevValue = void 0;
    return autorun(function() {
      var newValue = _this.get();
      if (!firstTime || fireImmediately) {
        var prevU = untrackedStart();
        listener({
          observableKind: "computed",
          debugObjectName: _this.name_,
          type: UPDATE,
          object: _this,
          newValue,
          oldValue: prevValue
        });
        untrackedEnd(prevU);
      }
      firstTime = false;
      prevValue = newValue;
    });
  };
  _proto.warnAboutUntrackedRead_ = function warnAboutUntrackedRead_() {
    {
      return;
    }
  };
  _proto.toString = function toString3() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  };
  _proto.valueOf = function valueOf2() {
    return toPrimitive(this.get());
  };
  _proto[Symbol.toPrimitive] = function() {
    return this.valueOf();
  };
  return _createClass(ComputedValue2, [{
    key: "isComputing",
    get: function get5() {
      return getFlag(this.flags_, ComputedValue2.isComputingMask_);
    },
    set: function set5(newValue) {
      this.flags_ = setFlag(this.flags_, ComputedValue2.isComputingMask_, newValue);
    }
  }, {
    key: "isRunningSetter",
    get: function get5() {
      return getFlag(this.flags_, ComputedValue2.isRunningSetterMask_);
    },
    set: function set5(newValue) {
      this.flags_ = setFlag(this.flags_, ComputedValue2.isRunningSetterMask_, newValue);
    }
  }, {
    key: "isBeingObserved",
    get: function get5() {
      return getFlag(this.flags_, ComputedValue2.isBeingObservedMask_);
    },
    set: function set5(newValue) {
      this.flags_ = setFlag(this.flags_, ComputedValue2.isBeingObservedMask_, newValue);
    }
  }, {
    key: "isPendingUnobservation",
    get: function get5() {
      return getFlag(this.flags_, ComputedValue2.isPendingUnobservationMask_);
    },
    set: function set5(newValue) {
      this.flags_ = setFlag(this.flags_, ComputedValue2.isPendingUnobservationMask_, newValue);
    }
  }, {
    key: "diffValue",
    get: function get5() {
      return getFlag(this.flags_, ComputedValue2.diffValueMask_) ? 1 : 0;
    },
    set: function set5(newValue) {
      this.flags_ = setFlag(this.flags_, ComputedValue2.diffValueMask_, newValue === 1 ? true : false);
    }
  }]);
}();
ComputedValue.isComputingMask_ = 1;
ComputedValue.isRunningSetterMask_ = 2;
ComputedValue.isBeingObservedMask_ = 4;
ComputedValue.isPendingUnobservationMask_ = 8;
ComputedValue.diffValueMask_ = 16;
var isComputedValue = /* @__PURE__ */ createInstanceofPredicate("ComputedValue", ComputedValue);
var IDerivationState_;
(function(IDerivationState_2) {
  IDerivationState_2[IDerivationState_2["NOT_TRACKING_"] = -1] = "NOT_TRACKING_";
  IDerivationState_2[IDerivationState_2["UP_TO_DATE_"] = 0] = "UP_TO_DATE_";
  IDerivationState_2[IDerivationState_2["POSSIBLY_STALE_"] = 1] = "POSSIBLY_STALE_";
  IDerivationState_2[IDerivationState_2["STALE_"] = 2] = "STALE_";
})(IDerivationState_ || (IDerivationState_ = {}));
var TraceMode;
(function(TraceMode2) {
  TraceMode2[TraceMode2["NONE"] = 0] = "NONE";
  TraceMode2[TraceMode2["LOG"] = 1] = "LOG";
  TraceMode2[TraceMode2["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));
var CaughtException = function CaughtException2(cause) {
  this.cause = void 0;
  this.cause = cause;
};
function isCaughtException(e) {
  return e instanceof CaughtException;
}
function shouldCompute(derivation) {
  switch (derivation.dependenciesState_) {
    case IDerivationState_.UP_TO_DATE_:
      return false;
    case IDerivationState_.NOT_TRACKING_:
    case IDerivationState_.STALE_:
      return true;
    case IDerivationState_.POSSIBLY_STALE_: {
      var prevAllowStateReads = allowStateReadsStart(true);
      var prevUntracked = untrackedStart();
      var obs = derivation.observing_, l2 = obs.length;
      for (var i = 0; i < l2; i++) {
        var obj = obs[i];
        if (isComputedValue(obj)) {
          if (globalState.disableErrorBoundaries) {
            obj.get();
          } else {
            try {
              obj.get();
            } catch (e) {
              untrackedEnd(prevUntracked);
              allowStateReadsEnd(prevAllowStateReads);
              return true;
            }
          }
          if (derivation.dependenciesState_ === IDerivationState_.STALE_) {
            untrackedEnd(prevUntracked);
            allowStateReadsEnd(prevAllowStateReads);
            return true;
          }
        }
      }
      changeDependenciesStateTo0(derivation);
      untrackedEnd(prevUntracked);
      allowStateReadsEnd(prevAllowStateReads);
      return false;
    }
  }
}
function checkIfStateModificationsAreAllowed(atom) {
  {
    return;
  }
}
function trackDerivedFunction(derivation, f2, context) {
  var prevAllowStateReads = allowStateReadsStart(true);
  changeDependenciesStateTo0(derivation);
  derivation.newObserving_ = new Array(
    derivation.runId_ === 0 ? 100 : derivation.observing_.length
  );
  derivation.unboundDepsCount_ = 0;
  derivation.runId_ = ++globalState.runId;
  var prevTracking = globalState.trackingDerivation;
  globalState.trackingDerivation = derivation;
  globalState.inBatch++;
  var result;
  if (globalState.disableErrorBoundaries === true) {
    result = f2.call(context);
  } else {
    try {
      result = f2.call(context);
    } catch (e) {
      result = new CaughtException(e);
    }
  }
  globalState.inBatch--;
  globalState.trackingDerivation = prevTracking;
  bindDependencies(derivation);
  allowStateReadsEnd(prevAllowStateReads);
  return result;
}
function bindDependencies(derivation) {
  var prevObserving = derivation.observing_;
  var observing = derivation.observing_ = derivation.newObserving_;
  var lowestNewObservingDerivationState = IDerivationState_.UP_TO_DATE_;
  var i0 = 0, l2 = derivation.unboundDepsCount_;
  for (var i = 0; i < l2; i++) {
    var dep = observing[i];
    if (dep.diffValue === 0) {
      dep.diffValue = 1;
      if (i0 !== i) {
        observing[i0] = dep;
      }
      i0++;
    }
    if (dep.dependenciesState_ > lowestNewObservingDerivationState) {
      lowestNewObservingDerivationState = dep.dependenciesState_;
    }
  }
  observing.length = i0;
  derivation.newObserving_ = null;
  l2 = prevObserving.length;
  while (l2--) {
    var _dep = prevObserving[l2];
    if (_dep.diffValue === 0) {
      removeObserver(_dep, derivation);
    }
    _dep.diffValue = 0;
  }
  while (i0--) {
    var _dep2 = observing[i0];
    if (_dep2.diffValue === 1) {
      _dep2.diffValue = 0;
      addObserver(_dep2, derivation);
    }
  }
  if (lowestNewObservingDerivationState !== IDerivationState_.UP_TO_DATE_) {
    derivation.dependenciesState_ = lowestNewObservingDerivationState;
    derivation.onBecomeStale_();
  }
}
function clearObserving(derivation) {
  var obs = derivation.observing_;
  derivation.observing_ = [];
  var i = obs.length;
  while (i--) {
    removeObserver(obs[i], derivation);
  }
  derivation.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
}
function untracked(action2) {
  var prev = untrackedStart();
  try {
    return action2();
  } finally {
    untrackedEnd(prev);
  }
}
function untrackedStart() {
  var prev = globalState.trackingDerivation;
  globalState.trackingDerivation = null;
  return prev;
}
function untrackedEnd(prev) {
  globalState.trackingDerivation = prev;
}
function allowStateReadsStart(allowStateReads) {
  var prev = globalState.allowStateReads;
  globalState.allowStateReads = allowStateReads;
  return prev;
}
function allowStateReadsEnd(prev) {
  globalState.allowStateReads = prev;
}
function changeDependenciesStateTo0(derivation) {
  if (derivation.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
    return;
  }
  derivation.dependenciesState_ = IDerivationState_.UP_TO_DATE_;
  var obs = derivation.observing_;
  var i = obs.length;
  while (i--) {
    obs[i].lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
  }
}
var MobXGlobals = function MobXGlobals2() {
  this.version = 6;
  this.UNCHANGED = {};
  this.trackingDerivation = null;
  this.trackingContext = null;
  this.runId = 0;
  this.mobxGuid = 0;
  this.inBatch = 0;
  this.pendingUnobservations = [];
  this.pendingReactions = [];
  this.isRunningReactions = false;
  this.allowStateChanges = false;
  this.allowStateReads = true;
  this.enforceActions = true;
  this.spyListeners = [];
  this.globalReactionErrorHandlers = [];
  this.computedRequiresReaction = false;
  this.reactionRequiresObservable = false;
  this.observableRequiresReaction = false;
  this.disableErrorBoundaries = false;
  this.suppressReactionErrors = false;
  this.useProxies = true;
  this.verifyProxies = false;
  this.safeDescriptors = true;
};
var canMergeGlobalState = true;
var globalState = /* @__PURE__ */ function() {
  var global2 = /* @__PURE__ */ getGlobal();
  if (global2.__mobxInstanceCount > 0 && !global2.__mobxGlobals) {
    canMergeGlobalState = false;
  }
  if (global2.__mobxGlobals && global2.__mobxGlobals.version !== new MobXGlobals().version) {
    canMergeGlobalState = false;
  }
  if (!canMergeGlobalState) {
    setTimeout(function() {
      {
        die(35);
      }
    }, 1);
    return new MobXGlobals();
  } else if (global2.__mobxGlobals) {
    global2.__mobxInstanceCount += 1;
    if (!global2.__mobxGlobals.UNCHANGED) {
      global2.__mobxGlobals.UNCHANGED = {};
    }
    return global2.__mobxGlobals;
  } else {
    global2.__mobxInstanceCount = 1;
    return global2.__mobxGlobals = /* @__PURE__ */ new MobXGlobals();
  }
}();
function addObserver(observable2, node) {
  observable2.observers_.add(node);
  if (observable2.lowestObserverState_ > node.dependenciesState_) {
    observable2.lowestObserverState_ = node.dependenciesState_;
  }
}
function removeObserver(observable2, node) {
  observable2.observers_["delete"](node);
  if (observable2.observers_.size === 0) {
    queueForUnobservation(observable2);
  }
}
function queueForUnobservation(observable2) {
  if (observable2.isPendingUnobservation === false) {
    observable2.isPendingUnobservation = true;
    globalState.pendingUnobservations.push(observable2);
  }
}
function startBatch() {
  globalState.inBatch++;
}
function endBatch() {
  if (--globalState.inBatch === 0) {
    runReactions();
    var list = globalState.pendingUnobservations;
    for (var i = 0; i < list.length; i++) {
      var observable2 = list[i];
      observable2.isPendingUnobservation = false;
      if (observable2.observers_.size === 0) {
        if (observable2.isBeingObserved) {
          observable2.isBeingObserved = false;
          observable2.onBUO();
        }
        if (observable2 instanceof ComputedValue) {
          observable2.suspend_();
        }
      }
    }
    globalState.pendingUnobservations = [];
  }
}
function reportObserved(observable2) {
  var derivation = globalState.trackingDerivation;
  if (derivation !== null) {
    if (derivation.runId_ !== observable2.lastAccessedBy_) {
      observable2.lastAccessedBy_ = derivation.runId_;
      derivation.newObserving_[derivation.unboundDepsCount_++] = observable2;
      if (!observable2.isBeingObserved && globalState.trackingContext) {
        observable2.isBeingObserved = true;
        observable2.onBO();
      }
    }
    return observable2.isBeingObserved;
  } else if (observable2.observers_.size === 0 && globalState.inBatch > 0) {
    queueForUnobservation(observable2);
  }
  return false;
}
function propagateChanged(observable2) {
  if (observable2.lowestObserverState_ === IDerivationState_.STALE_) {
    return;
  }
  observable2.lowestObserverState_ = IDerivationState_.STALE_;
  observable2.observers_.forEach(function(d) {
    if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      d.onBecomeStale_();
    }
    d.dependenciesState_ = IDerivationState_.STALE_;
  });
}
function propagateChangeConfirmed(observable2) {
  if (observable2.lowestObserverState_ === IDerivationState_.STALE_) {
    return;
  }
  observable2.lowestObserverState_ = IDerivationState_.STALE_;
  observable2.observers_.forEach(function(d) {
    if (d.dependenciesState_ === IDerivationState_.POSSIBLY_STALE_) {
      d.dependenciesState_ = IDerivationState_.STALE_;
    } else if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      observable2.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    }
  });
}
function propagateMaybeChanged(observable2) {
  if (observable2.lowestObserverState_ !== IDerivationState_.UP_TO_DATE_) {
    return;
  }
  observable2.lowestObserverState_ = IDerivationState_.POSSIBLY_STALE_;
  observable2.observers_.forEach(function(d) {
    if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      d.dependenciesState_ = IDerivationState_.POSSIBLY_STALE_;
      d.onBecomeStale_();
    }
  });
}
var Reaction = /* @__PURE__ */ function() {
  function Reaction2(name_, onInvalidate_, errorHandler_, requiresObservable_) {
    if (name_ === void 0) {
      name_ = "Reaction";
    }
    this.name_ = void 0;
    this.onInvalidate_ = void 0;
    this.errorHandler_ = void 0;
    this.requiresObservable_ = void 0;
    this.observing_ = [];
    this.newObserving_ = [];
    this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
    this.runId_ = 0;
    this.unboundDepsCount_ = 0;
    this.flags_ = 0;
    this.isTracing_ = TraceMode.NONE;
    this.name_ = name_;
    this.onInvalidate_ = onInvalidate_;
    this.errorHandler_ = errorHandler_;
    this.requiresObservable_ = requiresObservable_;
  }
  var _proto = Reaction2.prototype;
  _proto.onBecomeStale_ = function onBecomeStale_() {
    this.schedule_();
  };
  _proto.schedule_ = function schedule_() {
    if (!this.isScheduled) {
      this.isScheduled = true;
      globalState.pendingReactions.push(this);
      runReactions();
    }
  };
  _proto.runReaction_ = function runReaction_() {
    if (!this.isDisposed) {
      startBatch();
      this.isScheduled = false;
      var prev = globalState.trackingContext;
      globalState.trackingContext = this;
      if (shouldCompute(this)) {
        this.isTrackPending = true;
        try {
          this.onInvalidate_();
          if (false)
            ;
        } catch (e) {
          this.reportExceptionInDerivation_(e);
        }
      }
      globalState.trackingContext = prev;
      endBatch();
    }
  };
  _proto.track = function track(fn) {
    if (this.isDisposed) {
      return;
    }
    startBatch();
    this.isRunning = true;
    var prevReaction = globalState.trackingContext;
    globalState.trackingContext = this;
    var result = trackDerivedFunction(this, fn, void 0);
    globalState.trackingContext = prevReaction;
    this.isRunning = false;
    this.isTrackPending = false;
    if (this.isDisposed) {
      clearObserving(this);
    }
    if (isCaughtException(result)) {
      this.reportExceptionInDerivation_(result.cause);
    }
    endBatch();
  };
  _proto.reportExceptionInDerivation_ = function reportExceptionInDerivation_(error) {
    var _this = this;
    if (this.errorHandler_) {
      this.errorHandler_(error, this);
      return;
    }
    if (globalState.disableErrorBoundaries) {
      throw error;
    }
    var message = "[mobx] uncaught error in '" + this + "'";
    if (!globalState.suppressReactionErrors) {
      console.error(message, error);
    }
    globalState.globalReactionErrorHandlers.forEach(function(f2) {
      return f2(error, _this);
    });
  };
  _proto.dispose = function dispose() {
    if (!this.isDisposed) {
      this.isDisposed = true;
      if (!this.isRunning) {
        startBatch();
        clearObserving(this);
        endBatch();
      }
    }
  };
  _proto.getDisposer_ = function getDisposer_(abortSignal) {
    var _this2 = this;
    var dispose = function dispose2() {
      _this2.dispose();
      abortSignal == null || abortSignal.removeEventListener == null || abortSignal.removeEventListener("abort", dispose2);
    };
    abortSignal == null || abortSignal.addEventListener == null || abortSignal.addEventListener("abort", dispose);
    dispose[$mobx] = this;
    return dispose;
  };
  _proto.toString = function toString3() {
    return "Reaction[" + this.name_ + "]";
  };
  _proto.trace = function trace$1(enterBreakPoint) {
  };
  return _createClass(Reaction2, [{
    key: "isDisposed",
    get: function get5() {
      return getFlag(this.flags_, Reaction2.isDisposedMask_);
    },
    set: function set5(newValue) {
      this.flags_ = setFlag(this.flags_, Reaction2.isDisposedMask_, newValue);
    }
  }, {
    key: "isScheduled",
    get: function get5() {
      return getFlag(this.flags_, Reaction2.isScheduledMask_);
    },
    set: function set5(newValue) {
      this.flags_ = setFlag(this.flags_, Reaction2.isScheduledMask_, newValue);
    }
  }, {
    key: "isTrackPending",
    get: function get5() {
      return getFlag(this.flags_, Reaction2.isTrackPendingMask_);
    },
    set: function set5(newValue) {
      this.flags_ = setFlag(this.flags_, Reaction2.isTrackPendingMask_, newValue);
    }
  }, {
    key: "isRunning",
    get: function get5() {
      return getFlag(this.flags_, Reaction2.isRunningMask_);
    },
    set: function set5(newValue) {
      this.flags_ = setFlag(this.flags_, Reaction2.isRunningMask_, newValue);
    }
  }, {
    key: "diffValue",
    get: function get5() {
      return getFlag(this.flags_, Reaction2.diffValueMask_) ? 1 : 0;
    },
    set: function set5(newValue) {
      this.flags_ = setFlag(this.flags_, Reaction2.diffValueMask_, newValue === 1 ? true : false);
    }
  }]);
}();
Reaction.isDisposedMask_ = 1;
Reaction.isScheduledMask_ = 2;
Reaction.isTrackPendingMask_ = 4;
Reaction.isRunningMask_ = 8;
Reaction.diffValueMask_ = 16;
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function reactionScheduler2(f2) {
  return f2();
};
function runReactions() {
  if (globalState.inBatch > 0 || globalState.isRunningReactions) {
    return;
  }
  reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
  globalState.isRunningReactions = true;
  var allReactions = globalState.pendingReactions;
  var iterations = 0;
  while (allReactions.length > 0) {
    if (++iterations === MAX_REACTION_ITERATIONS) {
      console.error("[mobx] cycle in reaction: " + allReactions[0]);
      allReactions.splice(0);
    }
    var remainingReactions = allReactions.splice(0);
    for (var i = 0, l2 = remainingReactions.length; i < l2; i++) {
      remainingReactions[i].runReaction_();
    }
  }
  globalState.isRunningReactions = false;
}
var isReaction = /* @__PURE__ */ createInstanceofPredicate("Reaction", Reaction);
function isSpyEnabled() {
  return false;
}
function spyReport(event) {
  {
    return;
  }
}
function spyReportStart(event) {
  {
    return;
  }
}
function spyReportEnd(change) {
  {
    return;
  }
}
function spy(listener) {
  {
    console.warn("[mobx.spy] Is a no-op in production builds");
    return function() {
    };
  }
}
var ACTION = "action";
var ACTION_BOUND = "action.bound";
var AUTOACTION = "autoAction";
var AUTOACTION_BOUND = "autoAction.bound";
var DEFAULT_ACTION_NAME = "<unnamed action>";
var actionAnnotation = /* @__PURE__ */ createActionAnnotation(ACTION);
var actionBoundAnnotation = /* @__PURE__ */ createActionAnnotation(ACTION_BOUND, {
  bound: true
});
var autoActionAnnotation = /* @__PURE__ */ createActionAnnotation(AUTOACTION, {
  autoAction: true
});
var autoActionBoundAnnotation = /* @__PURE__ */ createActionAnnotation(AUTOACTION_BOUND, {
  autoAction: true,
  bound: true
});
function createActionFactory(autoAction2) {
  var res = function action2(arg1, arg2) {
    if (isFunction(arg1)) {
      return createAction(arg1.name || DEFAULT_ACTION_NAME, arg1, autoAction2);
    }
    if (isFunction(arg2)) {
      return createAction(arg1, arg2, autoAction2);
    }
    if (is20223Decorator(arg2)) {
      return (autoAction2 ? autoActionAnnotation : actionAnnotation).decorate_20223_(arg1, arg2);
    }
    if (isStringish(arg2)) {
      return storeAnnotation(arg1, arg2, autoAction2 ? autoActionAnnotation : actionAnnotation);
    }
    if (isStringish(arg1)) {
      return createDecoratorAnnotation(createActionAnnotation(autoAction2 ? AUTOACTION : ACTION, {
        name: arg1,
        autoAction: autoAction2
      }));
    }
  };
  return res;
}
var action = /* @__PURE__ */ createActionFactory(false);
Object.assign(action, actionAnnotation);
var autoAction = /* @__PURE__ */ createActionFactory(true);
Object.assign(autoAction, autoActionAnnotation);
action.bound = /* @__PURE__ */ createDecoratorAnnotation(actionBoundAnnotation);
autoAction.bound = /* @__PURE__ */ createDecoratorAnnotation(autoActionBoundAnnotation);
function isAction(thing) {
  return isFunction(thing) && thing.isMobxAction === true;
}
function autorun(view, opts) {
  var _opts$name, _opts, _opts2, _opts3;
  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }
  var name = (_opts$name = (_opts = opts) == null ? void 0 : _opts.name) != null ? _opts$name : "Autorun";
  var runSync = !opts.scheduler && !opts.delay;
  var reaction;
  if (runSync) {
    reaction = new Reaction(name, function() {
      this.track(reactionRunner);
    }, opts.onError, opts.requiresObservable);
  } else {
    var scheduler = createSchedulerFromOptions(opts);
    var isScheduled = false;
    reaction = new Reaction(name, function() {
      if (!isScheduled) {
        isScheduled = true;
        scheduler(function() {
          isScheduled = false;
          if (!reaction.isDisposed) {
            reaction.track(reactionRunner);
          }
        });
      }
    }, opts.onError, opts.requiresObservable);
  }
  function reactionRunner() {
    view(reaction);
  }
  if (!((_opts2 = opts) != null && (_opts2 = _opts2.signal) != null && _opts2.aborted)) {
    reaction.schedule_();
  }
  return reaction.getDisposer_((_opts3 = opts) == null ? void 0 : _opts3.signal);
}
var run = function run2(f2) {
  return f2();
};
function createSchedulerFromOptions(opts) {
  return opts.scheduler ? opts.scheduler : opts.delay ? function(f2) {
    return setTimeout(f2, opts.delay);
  } : run;
}
var ON_BECOME_OBSERVED = "onBO";
var ON_BECOME_UNOBSERVED = "onBUO";
function onBecomeObserved(thing, arg2, arg3) {
  return interceptHook(ON_BECOME_OBSERVED, thing, arg2, arg3);
}
function onBecomeUnobserved(thing, arg2, arg3) {
  return interceptHook(ON_BECOME_UNOBSERVED, thing, arg2, arg3);
}
function interceptHook(hook, thing, arg2, arg3) {
  var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
  var cb = isFunction(arg3) ? arg3 : arg2;
  var listenersKey = hook + "L";
  if (atom[listenersKey]) {
    atom[listenersKey].add(cb);
  } else {
    atom[listenersKey] = /* @__PURE__ */ new Set([cb]);
  }
  return function() {
    var hookListeners = atom[listenersKey];
    if (hookListeners) {
      hookListeners["delete"](cb);
      if (hookListeners.size === 0) {
        delete atom[listenersKey];
      }
    }
  };
}
function extendObservable(target, properties, annotations, options) {
  var descriptors = getOwnPropertyDescriptors(properties);
  initObservable(function() {
    var adm = asObservableObject(target, options)[$mobx];
    ownKeys(descriptors).forEach(function(key) {
      adm.extend_(
        key,
        descriptors[key],
        !annotations ? true : key in annotations ? annotations[key] : true
      );
    });
  });
  return target;
}
var generatorId = 0;
function FlowCancellationError() {
  this.message = "FLOW_CANCELLED";
}
FlowCancellationError.prototype = /* @__PURE__ */ Object.create(Error.prototype);
var flowAnnotation = /* @__PURE__ */ createFlowAnnotation("flow");
var flowBoundAnnotation = /* @__PURE__ */ createFlowAnnotation("flow.bound", {
  bound: true
});
var flow = /* @__PURE__ */ Object.assign(function flow2(arg1, arg2) {
  if (is20223Decorator(arg2)) {
    return flowAnnotation.decorate_20223_(arg1, arg2);
  }
  if (isStringish(arg2)) {
    return storeAnnotation(arg1, arg2, flowAnnotation);
  }
  var generator = arg1;
  var name = generator.name || "<unnamed flow>";
  var res = function res2() {
    var ctx = this;
    var args = arguments;
    var runId = ++generatorId;
    var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
    var rejector;
    var pendingPromise = void 0;
    var promise = new Promise(function(resolve, reject) {
      var stepId = 0;
      rejector = reject;
      function onFulfilled(res3) {
        pendingPromise = void 0;
        var ret;
        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res3);
        } catch (e) {
          return reject(e);
        }
        next(ret);
      }
      function onRejected(err) {
        pendingPromise = void 0;
        var ret;
        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen["throw"]).call(gen, err);
        } catch (e) {
          return reject(e);
        }
        next(ret);
      }
      function next(ret) {
        if (isFunction(ret == null ? void 0 : ret.then)) {
          ret.then(next, reject);
          return;
        }
        if (ret.done) {
          return resolve(ret.value);
        }
        pendingPromise = Promise.resolve(ret.value);
        return pendingPromise.then(onFulfilled, onRejected);
      }
      onFulfilled(void 0);
    });
    promise.cancel = action(name + " - runid: " + runId + " - cancel", function() {
      try {
        if (pendingPromise) {
          cancelPromise(pendingPromise);
        }
        var _res = gen["return"](void 0);
        var yieldedPromise = Promise.resolve(_res.value);
        yieldedPromise.then(noop, noop);
        cancelPromise(yieldedPromise);
        rejector(new FlowCancellationError());
      } catch (e) {
        rejector(e);
      }
    });
    return promise;
  };
  res.isMobXFlow = true;
  return res;
}, flowAnnotation);
flow.bound = /* @__PURE__ */ createDecoratorAnnotation(flowBoundAnnotation);
function cancelPromise(promise) {
  if (isFunction(promise.cancel)) {
    promise.cancel();
  }
}
function isFlow(fn) {
  return (fn == null ? void 0 : fn.isMobXFlow) === true;
}
function _isObservable(value, property2) {
  if (!value) {
    return false;
  }
  if (property2 !== void 0) {
    if (isObservableObject(value)) {
      return value[$mobx].values_.has(property2);
    }
    return false;
  }
  return isObservableObject(value) || !!value[$mobx] || isAtom(value) || isReaction(value) || isComputedValue(value);
}
function isObservable(value) {
  return _isObservable(value);
}
function apiOwnKeys(obj) {
  if (isObservableObject(obj)) {
    return obj[$mobx].ownKeys_();
  }
  die(38);
}
function cache(map3, key, value) {
  map3.set(key, value);
  return value;
}
function toJSHelper(source, __alreadySeen) {
  if (source == null || typeof source !== "object" || source instanceof Date || !isObservable(source)) {
    return source;
  }
  if (isObservableValue(source) || isComputedValue(source)) {
    return toJSHelper(source.get(), __alreadySeen);
  }
  if (__alreadySeen.has(source)) {
    return __alreadySeen.get(source);
  }
  if (isObservableArray(source)) {
    var res = cache(__alreadySeen, source, new Array(source.length));
    source.forEach(function(value, idx) {
      res[idx] = toJSHelper(value, __alreadySeen);
    });
    return res;
  }
  if (isObservableSet(source)) {
    var _res = cache(__alreadySeen, source, /* @__PURE__ */ new Set());
    source.forEach(function(value) {
      _res.add(toJSHelper(value, __alreadySeen));
    });
    return _res;
  }
  if (isObservableMap(source)) {
    var _res2 = cache(__alreadySeen, source, /* @__PURE__ */ new Map());
    source.forEach(function(value, key) {
      _res2.set(key, toJSHelper(value, __alreadySeen));
    });
    return _res2;
  } else {
    var _res3 = cache(__alreadySeen, source, {});
    apiOwnKeys(source).forEach(function(key) {
      if (objectPrototype.propertyIsEnumerable.call(source, key)) {
        _res3[key] = toJSHelper(source[key], __alreadySeen);
      }
    });
    return _res3;
  }
}
function toJS(source, options) {
  return toJSHelper(source, /* @__PURE__ */ new Map());
}
function transaction(action2, thisArg) {
  if (thisArg === void 0) {
    thisArg = void 0;
  }
  startBatch();
  try {
    return action2.apply(thisArg);
  } finally {
    endBatch();
  }
}
function getAdm(target) {
  return target[$mobx];
}
var objectProxyTraps = {
  has: function has(target, name) {
    return getAdm(target).has_(name);
  },
  get: function get3(target, name) {
    return getAdm(target).get_(name);
  },
  set: function set3(target, name, value) {
    var _getAdm$set_;
    if (!isStringish(name)) {
      return false;
    }
    return (_getAdm$set_ = getAdm(target).set_(name, value, true)) != null ? _getAdm$set_ : true;
  },
  deleteProperty: function deleteProperty(target, name) {
    var _getAdm$delete_;
    if (!isStringish(name)) {
      return false;
    }
    return (_getAdm$delete_ = getAdm(target).delete_(name, true)) != null ? _getAdm$delete_ : true;
  },
  defineProperty: function defineProperty2(target, name, descriptor) {
    var _getAdm$definePropert;
    return (_getAdm$definePropert = getAdm(target).defineProperty_(name, descriptor)) != null ? _getAdm$definePropert : true;
  },
  ownKeys: function ownKeys2(target) {
    return getAdm(target).ownKeys_();
  },
  preventExtensions: function preventExtensions(target) {
    die(13);
  }
};
function asDynamicObservableObject(target, options) {
  var _target$$mobx, _target$$mobx$proxy_;
  assertProxies();
  target = asObservableObject(target, options);
  return (_target$$mobx$proxy_ = (_target$$mobx = target[$mobx]).proxy_) != null ? _target$$mobx$proxy_ : _target$$mobx.proxy_ = new Proxy(target, objectProxyTraps);
}
function hasInterceptors(interceptable) {
  return interceptable.interceptors_ !== void 0 && interceptable.interceptors_.length > 0;
}
function registerInterceptor(interceptable, handler) {
  var interceptors = interceptable.interceptors_ || (interceptable.interceptors_ = []);
  interceptors.push(handler);
  return once(function() {
    var idx = interceptors.indexOf(handler);
    if (idx !== -1) {
      interceptors.splice(idx, 1);
    }
  });
}
function interceptChange(interceptable, change) {
  var prevU = untrackedStart();
  try {
    var interceptors = [].concat(interceptable.interceptors_ || []);
    for (var i = 0, l2 = interceptors.length; i < l2; i++) {
      change = interceptors[i](change);
      if (change && !change.type) {
        die(14);
      }
      if (!change) {
        break;
      }
    }
    return change;
  } finally {
    untrackedEnd(prevU);
  }
}
function hasListeners(listenable) {
  return listenable.changeListeners_ !== void 0 && listenable.changeListeners_.length > 0;
}
function registerListener(listenable, handler) {
  var listeners = listenable.changeListeners_ || (listenable.changeListeners_ = []);
  listeners.push(handler);
  return once(function() {
    var idx = listeners.indexOf(handler);
    if (idx !== -1) {
      listeners.splice(idx, 1);
    }
  });
}
function notifyListeners(listenable, change) {
  var prevU = untrackedStart();
  var listeners = listenable.changeListeners_;
  if (!listeners) {
    return;
  }
  listeners = listeners.slice();
  for (var i = 0, l2 = listeners.length; i < l2; i++) {
    listeners[i](change);
  }
  untrackedEnd(prevU);
}
function makeObservable(target, annotations, options) {
  initObservable(function() {
    var _annotations;
    var adm = asObservableObject(target, options)[$mobx];
    if (false)
      ;
    (_annotations = annotations) != null ? _annotations : annotations = collectStoredAnnotations(target);
    ownKeys(annotations).forEach(function(key) {
      return adm.make_(key, annotations[key]);
    });
  });
  return target;
}
var SPLICE = "splice";
var UPDATE = "update";
var MAX_SPLICE_SIZE = 1e4;
var arrayTraps = {
  get: function get4(target, name) {
    var adm = target[$mobx];
    if (name === $mobx) {
      return adm;
    }
    if (name === "length") {
      return adm.getArrayLength_();
    }
    if (typeof name === "string" && !isNaN(name)) {
      return adm.get_(parseInt(name));
    }
    if (hasProp(arrayExtensions, name)) {
      return arrayExtensions[name];
    }
    return target[name];
  },
  set: function set4(target, name, value) {
    var adm = target[$mobx];
    if (name === "length") {
      adm.setArrayLength_(value);
    }
    if (typeof name === "symbol" || isNaN(name)) {
      target[name] = value;
    } else {
      adm.set_(parseInt(name), value);
    }
    return true;
  },
  preventExtensions: function preventExtensions2() {
    die(15);
  }
};
var ObservableArrayAdministration = /* @__PURE__ */ function() {
  function ObservableArrayAdministration2(name, enhancer, owned_, legacyMode_) {
    if (name === void 0) {
      name = "ObservableArray";
    }
    this.owned_ = void 0;
    this.legacyMode_ = void 0;
    this.atom_ = void 0;
    this.values_ = [];
    this.interceptors_ = void 0;
    this.changeListeners_ = void 0;
    this.enhancer_ = void 0;
    this.dehancer = void 0;
    this.proxy_ = void 0;
    this.lastKnownLength_ = 0;
    this.owned_ = owned_;
    this.legacyMode_ = legacyMode_;
    this.atom_ = new Atom(name);
    this.enhancer_ = function(newV, oldV) {
      return enhancer(newV, oldV, "ObservableArray[..]");
    };
  }
  var _proto = ObservableArrayAdministration2.prototype;
  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== void 0) {
      return this.dehancer(value);
    }
    return value;
  };
  _proto.dehanceValues_ = function dehanceValues_(values) {
    if (this.dehancer !== void 0 && values.length > 0) {
      return values.map(this.dehancer);
    }
    return values;
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately === void 0) {
      fireImmediately = false;
    }
    if (fireImmediately) {
      listener({
        observableKind: "array",
        object: this.proxy_,
        debugObjectName: this.atom_.name_,
        type: "splice",
        index: 0,
        added: this.values_.slice(),
        addedCount: this.values_.length,
        removed: [],
        removedCount: 0
      });
    }
    return registerListener(this, listener);
  };
  _proto.getArrayLength_ = function getArrayLength_() {
    this.atom_.reportObserved();
    return this.values_.length;
  };
  _proto.setArrayLength_ = function setArrayLength_(newLength) {
    if (typeof newLength !== "number" || isNaN(newLength) || newLength < 0) {
      die("Out of range: " + newLength);
    }
    var currentLength = this.values_.length;
    if (newLength === currentLength) {
      return;
    } else if (newLength > currentLength) {
      var newItems = new Array(newLength - currentLength);
      for (var i = 0; i < newLength - currentLength; i++) {
        newItems[i] = void 0;
      }
      this.spliceWithArray_(currentLength, 0, newItems);
    } else {
      this.spliceWithArray_(newLength, currentLength - newLength);
    }
  };
  _proto.updateArrayLength_ = function updateArrayLength_(oldLength, delta) {
    if (oldLength !== this.lastKnownLength_) {
      die(16);
    }
    this.lastKnownLength_ += delta;
    if (this.legacyMode_ && delta > 0) {
      reserveArrayBuffer(oldLength + delta + 1);
    }
  };
  _proto.spliceWithArray_ = function spliceWithArray_(index, deleteCount, newItems) {
    var _this = this;
    checkIfStateModificationsAreAllowed(this.atom_);
    var length = this.values_.length;
    if (index === void 0) {
      index = 0;
    } else if (index > length) {
      index = length;
    } else if (index < 0) {
      index = Math.max(0, length + index);
    }
    if (arguments.length === 1) {
      deleteCount = length - index;
    } else if (deleteCount === void 0 || deleteCount === null) {
      deleteCount = 0;
    } else {
      deleteCount = Math.max(0, Math.min(deleteCount, length - index));
    }
    if (newItems === void 0) {
      newItems = EMPTY_ARRAY;
    }
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy_,
        type: SPLICE,
        index,
        removedCount: deleteCount,
        added: newItems
      });
      if (!change) {
        return EMPTY_ARRAY;
      }
      deleteCount = change.removedCount;
      newItems = change.added;
    }
    newItems = newItems.length === 0 ? newItems : newItems.map(function(v) {
      return _this.enhancer_(v, void 0);
    });
    if (this.legacyMode_ || false) {
      var lengthDelta = newItems.length - deleteCount;
      this.updateArrayLength_(length, lengthDelta);
    }
    var res = this.spliceItemsIntoValues_(index, deleteCount, newItems);
    if (deleteCount !== 0 || newItems.length !== 0) {
      this.notifyArraySplice_(index, newItems, res);
    }
    return this.dehanceValues_(res);
  };
  _proto.spliceItemsIntoValues_ = function spliceItemsIntoValues_(index, deleteCount, newItems) {
    if (newItems.length < MAX_SPLICE_SIZE) {
      var _this$values_;
      return (_this$values_ = this.values_).splice.apply(_this$values_, [index, deleteCount].concat(newItems));
    } else {
      var res = this.values_.slice(index, index + deleteCount);
      var oldItems = this.values_.slice(index + deleteCount);
      this.values_.length += newItems.length - deleteCount;
      for (var i = 0; i < newItems.length; i++) {
        this.values_[index + i] = newItems[i];
      }
      for (var _i = 0; _i < oldItems.length; _i++) {
        this.values_[index + newItems.length + _i] = oldItems[_i];
      }
      return res;
    }
  };
  _proto.notifyArrayChildUpdate_ = function notifyArrayChildUpdate_(index, newValue, oldValue) {
    var notifySpy = !this.owned_ && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "array",
      object: this.proxy_,
      type: UPDATE,
      debugObjectName: this.atom_.name_,
      index,
      newValue,
      oldValue
    } : null;
    this.atom_.reportChanged();
    if (notify) {
      notifyListeners(this, change);
    }
  };
  _proto.notifyArraySplice_ = function notifyArraySplice_(index, added, removed) {
    var notifySpy = !this.owned_ && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: SPLICE,
      index,
      removed,
      added,
      removedCount: removed.length,
      addedCount: added.length
    } : null;
    this.atom_.reportChanged();
    if (notify) {
      notifyListeners(this, change);
    }
  };
  _proto.get_ = function get_(index) {
    if (this.legacyMode_ && index >= this.values_.length) {
      console.warn("[mobx] Out of bounds read: " + index);
      return void 0;
    }
    this.atom_.reportObserved();
    return this.dehanceValue_(this.values_[index]);
  };
  _proto.set_ = function set_(index, newValue) {
    var values = this.values_;
    if (this.legacyMode_ && index > values.length) {
      die(17, index, values.length);
    }
    if (index < values.length) {
      checkIfStateModificationsAreAllowed(this.atom_);
      var oldValue = values[index];
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: UPDATE,
          object: this.proxy_,
          index,
          newValue
        });
        if (!change) {
          return;
        }
        newValue = change.newValue;
      }
      newValue = this.enhancer_(newValue, oldValue);
      var changed = newValue !== oldValue;
      if (changed) {
        values[index] = newValue;
        this.notifyArrayChildUpdate_(index, newValue, oldValue);
      }
    } else {
      var newItems = new Array(index + 1 - values.length);
      for (var i = 0; i < newItems.length - 1; i++) {
        newItems[i] = void 0;
      }
      newItems[newItems.length - 1] = newValue;
      this.spliceWithArray_(values.length, 0, newItems);
    }
  };
  return ObservableArrayAdministration2;
}();
function createObservableArray(initialValues, enhancer, name, owned) {
  if (name === void 0) {
    name = "ObservableArray";
  }
  if (owned === void 0) {
    owned = false;
  }
  assertProxies();
  return initObservable(function() {
    var adm = new ObservableArrayAdministration(name, enhancer, owned, false);
    addHiddenFinalProp(adm.values_, $mobx, adm);
    var proxy = new Proxy(adm.values_, arrayTraps);
    adm.proxy_ = proxy;
    if (initialValues && initialValues.length) {
      adm.spliceWithArray_(0, 0, initialValues);
    }
    return proxy;
  });
}
var arrayExtensions = {
  clear: function clear() {
    return this.splice(0);
  },
  replace: function replace(newItems) {
    var adm = this[$mobx];
    return adm.spliceWithArray_(0, adm.values_.length, newItems);
  },
  toJSON: function toJSON2() {
    return this.slice();
  },
  splice: function splice2(index, deleteCount) {
    for (var _len = arguments.length, newItems = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      newItems[_key - 2] = arguments[_key];
    }
    var adm = this[$mobx];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return adm.spliceWithArray_(index);
      case 2:
        return adm.spliceWithArray_(index, deleteCount);
    }
    return adm.spliceWithArray_(index, deleteCount, newItems);
  },
  spliceWithArray: function spliceWithArray(index, deleteCount, newItems) {
    return this[$mobx].spliceWithArray_(index, deleteCount, newItems);
  },
  push: function push() {
    var adm = this[$mobx];
    for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      items[_key2] = arguments[_key2];
    }
    adm.spliceWithArray_(adm.values_.length, 0, items);
    return adm.values_.length;
  },
  pop: function pop() {
    return this.splice(Math.max(this[$mobx].values_.length - 1, 0), 1)[0];
  },
  shift: function shift() {
    return this.splice(0, 1)[0];
  },
  unshift: function unshift() {
    var adm = this[$mobx];
    for (var _len3 = arguments.length, items = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      items[_key3] = arguments[_key3];
    }
    adm.spliceWithArray_(0, 0, items);
    return adm.values_.length;
  },
  reverse: function reverse() {
    if (globalState.trackingDerivation) {
      die(37, "reverse");
    }
    this.replace(this.slice().reverse());
    return this;
  },
  sort: function sort() {
    if (globalState.trackingDerivation) {
      die(37, "sort");
    }
    var copy = this.slice();
    copy.sort.apply(copy, arguments);
    this.replace(copy);
    return this;
  },
  remove: function remove(value) {
    var adm = this[$mobx];
    var idx = adm.dehanceValues_(adm.values_).indexOf(value);
    if (idx > -1) {
      this.splice(idx, 1);
      return true;
    }
    return false;
  }
};
addArrayExtension("at", simpleFunc);
addArrayExtension("concat", simpleFunc);
addArrayExtension("flat", simpleFunc);
addArrayExtension("includes", simpleFunc);
addArrayExtension("indexOf", simpleFunc);
addArrayExtension("join", simpleFunc);
addArrayExtension("lastIndexOf", simpleFunc);
addArrayExtension("slice", simpleFunc);
addArrayExtension("toString", simpleFunc);
addArrayExtension("toLocaleString", simpleFunc);
addArrayExtension("toSorted", simpleFunc);
addArrayExtension("toSpliced", simpleFunc);
addArrayExtension("with", simpleFunc);
addArrayExtension("every", mapLikeFunc);
addArrayExtension("filter", mapLikeFunc);
addArrayExtension("find", mapLikeFunc);
addArrayExtension("findIndex", mapLikeFunc);
addArrayExtension("findLast", mapLikeFunc);
addArrayExtension("findLastIndex", mapLikeFunc);
addArrayExtension("flatMap", mapLikeFunc);
addArrayExtension("forEach", mapLikeFunc);
addArrayExtension("map", mapLikeFunc);
addArrayExtension("some", mapLikeFunc);
addArrayExtension("toReversed", mapLikeFunc);
addArrayExtension("reduce", reduceLikeFunc);
addArrayExtension("reduceRight", reduceLikeFunc);
function addArrayExtension(funcName, funcFactory) {
  if (typeof Array.prototype[funcName] === "function") {
    arrayExtensions[funcName] = funcFactory(funcName);
  }
}
function simpleFunc(funcName) {
  return function() {
    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    return dehancedValues[funcName].apply(dehancedValues, arguments);
  };
}
function mapLikeFunc(funcName) {
  return function(callback, thisArg) {
    var _this2 = this;
    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    return dehancedValues[funcName](function(element, index) {
      return callback.call(thisArg, element, index, _this2);
    });
  };
}
function reduceLikeFunc(funcName) {
  return function() {
    var _this3 = this;
    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    var callback = arguments[0];
    arguments[0] = function(accumulator, currentValue, index) {
      return callback(accumulator, currentValue, index, _this3);
    };
    return dehancedValues[funcName].apply(dehancedValues, arguments);
  };
}
var isObservableArrayAdministration = /* @__PURE__ */ createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
  return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
}
var ObservableMapMarker = {};
var ADD = "add";
var DELETE = "delete";
var ObservableMap = /* @__PURE__ */ function() {
  function ObservableMap2(initialData, enhancer_, name_) {
    var _this = this;
    if (enhancer_ === void 0) {
      enhancer_ = deepEnhancer;
    }
    if (name_ === void 0) {
      name_ = "ObservableMap";
    }
    this.enhancer_ = void 0;
    this.name_ = void 0;
    this[$mobx] = ObservableMapMarker;
    this.data_ = void 0;
    this.hasMap_ = void 0;
    this.keysAtom_ = void 0;
    this.interceptors_ = void 0;
    this.changeListeners_ = void 0;
    this.dehancer = void 0;
    this.enhancer_ = enhancer_;
    this.name_ = name_;
    if (!isFunction(Map)) {
      die(18);
    }
    initObservable(function() {
      _this.keysAtom_ = createAtom(false ? _this.name_ + ".keys()" : "ObservableMap.keys()");
      _this.data_ = /* @__PURE__ */ new Map();
      _this.hasMap_ = /* @__PURE__ */ new Map();
      if (initialData) {
        _this.merge(initialData);
      }
    });
  }
  var _proto = ObservableMap2.prototype;
  _proto.has_ = function has_(key) {
    return this.data_.has(key);
  };
  _proto.has = function has2(key) {
    var _this2 = this;
    if (!globalState.trackingDerivation) {
      return this.has_(key);
    }
    var entry = this.hasMap_.get(key);
    if (!entry) {
      var newEntry = entry = new ObservableValue(this.has_(key), referenceEnhancer, "ObservableMap.key?", false);
      this.hasMap_.set(key, newEntry);
      onBecomeUnobserved(newEntry, function() {
        return _this2.hasMap_["delete"](key);
      });
    }
    return entry.get();
  };
  _proto.set = function set5(key, value) {
    var hasKey = this.has_(key);
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: hasKey ? UPDATE : ADD,
        object: this,
        newValue: value,
        name: key
      });
      if (!change) {
        return this;
      }
      value = change.newValue;
    }
    if (hasKey) {
      this.updateValue_(key, value);
    } else {
      this.addValue_(key, value);
    }
    return this;
  };
  _proto["delete"] = function _delete(key) {
    var _this3 = this;
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: DELETE,
        object: this,
        name: key
      });
      if (!change) {
        return false;
      }
    }
    if (this.has_(key)) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var _change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: DELETE,
        object: this,
        oldValue: this.data_.get(key).value_,
        name: key
      } : null;
      transaction(function() {
        var _this3$hasMap_$get;
        _this3.keysAtom_.reportChanged();
        (_this3$hasMap_$get = _this3.hasMap_.get(key)) == null || _this3$hasMap_$get.setNewValue_(false);
        var observable2 = _this3.data_.get(key);
        observable2.setNewValue_(void 0);
        _this3.data_["delete"](key);
      });
      if (notify) {
        notifyListeners(this, _change);
      }
      return true;
    }
    return false;
  };
  _proto.updateValue_ = function updateValue_(key, newValue) {
    var observable2 = this.data_.get(key);
    newValue = observable2.prepareNewValue_(newValue);
    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: UPDATE,
        object: this,
        oldValue: observable2.value_,
        name: key,
        newValue
      } : null;
      observable2.setNewValue_(newValue);
      if (notify) {
        notifyListeners(this, change);
      }
    }
  };
  _proto.addValue_ = function addValue_(key, newValue) {
    var _this4 = this;
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    transaction(function() {
      var _this4$hasMap_$get;
      var observable2 = new ObservableValue(newValue, _this4.enhancer_, "ObservableMap.key", false);
      _this4.data_.set(key, observable2);
      newValue = observable2.value_;
      (_this4$hasMap_$get = _this4.hasMap_.get(key)) == null || _this4$hasMap_$get.setNewValue_(true);
      _this4.keysAtom_.reportChanged();
    });
    var notifySpy = isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: ADD,
      object: this,
      name: key,
      newValue
    } : null;
    if (notify) {
      notifyListeners(this, change);
    }
  };
  _proto.get = function get5(key) {
    if (this.has(key)) {
      return this.dehanceValue_(this.data_.get(key).get());
    }
    return this.dehanceValue_(void 0);
  };
  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== void 0) {
      return this.dehancer(value);
    }
    return value;
  };
  _proto.keys = function keys2() {
    this.keysAtom_.reportObserved();
    return this.data_.keys();
  };
  _proto.values = function values() {
    var self2 = this;
    var keys2 = this.keys();
    return makeIterableForMap({
      next: function next() {
        var _keys$next = keys2.next(), done = _keys$next.done, value = _keys$next.value;
        return {
          done,
          value: done ? void 0 : self2.get(value)
        };
      }
    });
  };
  _proto.entries = function entries() {
    var self2 = this;
    var keys2 = this.keys();
    return makeIterableForMap({
      next: function next() {
        var _keys$next2 = keys2.next(), done = _keys$next2.done, value = _keys$next2.value;
        return {
          done,
          value: done ? void 0 : [value, self2.get(value)]
        };
      }
    });
  };
  _proto[Symbol.iterator] = function() {
    return this.entries();
  };
  _proto.forEach = function forEach2(callback, thisArg) {
    for (var _iterator = _createForOfIteratorHelperLoose(this), _step; !(_step = _iterator()).done; ) {
      var _step$value = _step.value, key = _step$value[0], value = _step$value[1];
      callback.call(thisArg, value, key, this);
    }
  };
  _proto.merge = function merge2(other) {
    var _this5 = this;
    if (isObservableMap(other)) {
      other = new Map(other);
    }
    transaction(function() {
      if (isPlainObject(other)) {
        getPlainObjectKeys(other).forEach(function(key) {
          return _this5.set(key, other[key]);
        });
      } else if (Array.isArray(other)) {
        other.forEach(function(_ref) {
          var key = _ref[0], value = _ref[1];
          return _this5.set(key, value);
        });
      } else if (isES6Map(other)) {
        if (!isPlainES6Map(other)) {
          die(19, other);
        }
        other.forEach(function(value, key) {
          return _this5.set(key, value);
        });
      } else if (other !== null && other !== void 0) {
        die(20, other);
      }
    });
    return this;
  };
  _proto.clear = function clear2() {
    var _this6 = this;
    transaction(function() {
      untracked(function() {
        for (var _iterator2 = _createForOfIteratorHelperLoose(_this6.keys()), _step2; !(_step2 = _iterator2()).done; ) {
          var key = _step2.value;
          _this6["delete"](key);
        }
      });
    });
  };
  _proto.replace = function replace2(values) {
    var _this7 = this;
    transaction(function() {
      var replacementMap = convertToMap(values);
      var orderedData = /* @__PURE__ */ new Map();
      var keysReportChangedCalled = false;
      for (var _iterator3 = _createForOfIteratorHelperLoose(_this7.data_.keys()), _step3; !(_step3 = _iterator3()).done; ) {
        var key = _step3.value;
        if (!replacementMap.has(key)) {
          var deleted = _this7["delete"](key);
          if (deleted) {
            keysReportChangedCalled = true;
          } else {
            var value = _this7.data_.get(key);
            orderedData.set(key, value);
          }
        }
      }
      for (var _iterator4 = _createForOfIteratorHelperLoose(replacementMap.entries()), _step4; !(_step4 = _iterator4()).done; ) {
        var _step4$value = _step4.value, _key = _step4$value[0], _value = _step4$value[1];
        var keyExisted = _this7.data_.has(_key);
        _this7.set(_key, _value);
        if (_this7.data_.has(_key)) {
          var _value2 = _this7.data_.get(_key);
          orderedData.set(_key, _value2);
          if (!keyExisted) {
            keysReportChangedCalled = true;
          }
        }
      }
      if (!keysReportChangedCalled) {
        if (_this7.data_.size !== orderedData.size) {
          _this7.keysAtom_.reportChanged();
        } else {
          var iter1 = _this7.data_.keys();
          var iter2 = orderedData.keys();
          var next1 = iter1.next();
          var next2 = iter2.next();
          while (!next1.done) {
            if (next1.value !== next2.value) {
              _this7.keysAtom_.reportChanged();
              break;
            }
            next1 = iter1.next();
            next2 = iter2.next();
          }
        }
      }
      _this7.data_ = orderedData;
    });
    return this;
  };
  _proto.toString = function toString3() {
    return "[object ObservableMap]";
  };
  _proto.toJSON = function toJSON3() {
    return Array.from(this);
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    return registerListener(this, listener);
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };
  return _createClass(ObservableMap2, [{
    key: "size",
    get: function get5() {
      this.keysAtom_.reportObserved();
      return this.data_.size;
    }
  }, {
    key: Symbol.toStringTag,
    get: function get5() {
      return "Map";
    }
  }]);
}();
var isObservableMap = /* @__PURE__ */ createInstanceofPredicate("ObservableMap", ObservableMap);
function makeIterableForMap(iterator) {
  iterator[Symbol.toStringTag] = "MapIterator";
  return makeIterable(iterator);
}
function convertToMap(dataStructure) {
  if (isES6Map(dataStructure) || isObservableMap(dataStructure)) {
    return dataStructure;
  } else if (Array.isArray(dataStructure)) {
    return new Map(dataStructure);
  } else if (isPlainObject(dataStructure)) {
    var map3 = /* @__PURE__ */ new Map();
    for (var key in dataStructure) {
      map3.set(key, dataStructure[key]);
    }
    return map3;
  } else {
    return die(21, dataStructure);
  }
}
var ObservableSetMarker = {};
var ObservableSet = /* @__PURE__ */ function() {
  function ObservableSet2(initialData, enhancer, name_) {
    var _this = this;
    if (enhancer === void 0) {
      enhancer = deepEnhancer;
    }
    if (name_ === void 0) {
      name_ = "ObservableSet";
    }
    this.name_ = void 0;
    this[$mobx] = ObservableSetMarker;
    this.data_ = /* @__PURE__ */ new Set();
    this.atom_ = void 0;
    this.changeListeners_ = void 0;
    this.interceptors_ = void 0;
    this.dehancer = void 0;
    this.enhancer_ = void 0;
    this.name_ = name_;
    if (!isFunction(Set)) {
      die(22);
    }
    this.enhancer_ = function(newV, oldV) {
      return enhancer(newV, oldV, name_);
    };
    initObservable(function() {
      _this.atom_ = createAtom(_this.name_);
      if (initialData) {
        _this.replace(initialData);
      }
    });
  }
  var _proto = ObservableSet2.prototype;
  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== void 0) {
      return this.dehancer(value);
    }
    return value;
  };
  _proto.clear = function clear2() {
    var _this2 = this;
    transaction(function() {
      untracked(function() {
        for (var _iterator = _createForOfIteratorHelperLoose(_this2.data_.values()), _step; !(_step = _iterator()).done; ) {
          var value = _step.value;
          _this2["delete"](value);
        }
      });
    });
  };
  _proto.forEach = function forEach2(callbackFn, thisArg) {
    for (var _iterator2 = _createForOfIteratorHelperLoose(this), _step2; !(_step2 = _iterator2()).done; ) {
      var value = _step2.value;
      callbackFn.call(thisArg, value, value, this);
    }
  };
  _proto.add = function add2(value) {
    var _this3 = this;
    checkIfStateModificationsAreAllowed(this.atom_);
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: ADD,
        object: this,
        newValue: value
      });
      if (!change) {
        return this;
      }
    }
    if (!this.has(value)) {
      transaction(function() {
        _this3.data_.add(_this3.enhancer_(value, void 0));
        _this3.atom_.reportChanged();
      });
      var notifySpy = false;
      var notify = hasListeners(this);
      var _change = notify || notifySpy ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: ADD,
        object: this,
        newValue: value
      } : null;
      if (notify) {
        notifyListeners(this, _change);
      }
    }
    return this;
  };
  _proto["delete"] = function _delete(value) {
    var _this4 = this;
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: DELETE,
        object: this,
        oldValue: value
      });
      if (!change) {
        return false;
      }
    }
    if (this.has(value)) {
      var notifySpy = false;
      var notify = hasListeners(this);
      var _change2 = notify || notifySpy ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: DELETE,
        object: this,
        oldValue: value
      } : null;
      transaction(function() {
        _this4.atom_.reportChanged();
        _this4.data_["delete"](value);
      });
      if (notify) {
        notifyListeners(this, _change2);
      }
      return true;
    }
    return false;
  };
  _proto.has = function has2(value) {
    this.atom_.reportObserved();
    return this.data_.has(this.dehanceValue_(value));
  };
  _proto.entries = function entries() {
    var nextIndex = 0;
    var keys2 = Array.from(this.keys());
    var values = Array.from(this.values());
    return makeIterableForSet({
      next: function next() {
        var index = nextIndex;
        nextIndex += 1;
        return index < values.length ? {
          value: [keys2[index], values[index]],
          done: false
        } : {
          value: void 0,
          done: true
        };
      }
    });
  };
  _proto.keys = function keys2() {
    return this.values();
  };
  _proto.values = function values() {
    this.atom_.reportObserved();
    var self2 = this;
    var nextIndex = 0;
    var observableValues = Array.from(this.data_.values());
    return makeIterableForSet({
      next: function next() {
        return nextIndex < observableValues.length ? {
          value: self2.dehanceValue_(observableValues[nextIndex++]),
          done: false
        } : {
          value: void 0,
          done: true
        };
      }
    });
  };
  _proto.intersection = function intersection2(otherSet) {
    if (isES6Set(otherSet) && !isObservableSet(otherSet)) {
      return otherSet.intersection(this);
    } else {
      var dehancedSet = new Set(this);
      return dehancedSet.intersection(otherSet);
    }
  };
  _proto.union = function union2(otherSet) {
    if (isES6Set(otherSet) && !isObservableSet(otherSet)) {
      return otherSet.union(this);
    } else {
      var dehancedSet = new Set(this);
      return dehancedSet.union(otherSet);
    }
  };
  _proto.difference = function difference(otherSet) {
    return new Set(this).difference(otherSet);
  };
  _proto.symmetricDifference = function symmetricDifference(otherSet) {
    if (isES6Set(otherSet) && !isObservableSet(otherSet)) {
      return otherSet.symmetricDifference(this);
    } else {
      var dehancedSet = new Set(this);
      return dehancedSet.symmetricDifference(otherSet);
    }
  };
  _proto.isSubsetOf = function isSubsetOf(otherSet) {
    return new Set(this).isSubsetOf(otherSet);
  };
  _proto.isSupersetOf = function isSupersetOf(otherSet) {
    return new Set(this).isSupersetOf(otherSet);
  };
  _proto.isDisjointFrom = function isDisjointFrom(otherSet) {
    if (isES6Set(otherSet) && !isObservableSet(otherSet)) {
      return otherSet.isDisjointFrom(this);
    } else {
      var dehancedSet = new Set(this);
      return dehancedSet.isDisjointFrom(otherSet);
    }
  };
  _proto.replace = function replace2(other) {
    var _this5 = this;
    if (isObservableSet(other)) {
      other = new Set(other);
    }
    transaction(function() {
      if (Array.isArray(other)) {
        _this5.clear();
        other.forEach(function(value) {
          return _this5.add(value);
        });
      } else if (isES6Set(other)) {
        _this5.clear();
        other.forEach(function(value) {
          return _this5.add(value);
        });
      } else if (other !== null && other !== void 0) {
        die("Cannot initialize set from " + other);
      }
    });
    return this;
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    return registerListener(this, listener);
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };
  _proto.toJSON = function toJSON3() {
    return Array.from(this);
  };
  _proto.toString = function toString3() {
    return "[object ObservableSet]";
  };
  _proto[Symbol.iterator] = function() {
    return this.values();
  };
  return _createClass(ObservableSet2, [{
    key: "size",
    get: function get5() {
      this.atom_.reportObserved();
      return this.data_.size;
    }
  }, {
    key: Symbol.toStringTag,
    get: function get5() {
      return "Set";
    }
  }]);
}();
var isObservableSet = /* @__PURE__ */ createInstanceofPredicate("ObservableSet", ObservableSet);
function makeIterableForSet(iterator) {
  iterator[Symbol.toStringTag] = "SetIterator";
  return makeIterable(iterator);
}
var descriptorCache = /* @__PURE__ */ Object.create(null);
var REMOVE = "remove";
var ObservableObjectAdministration = /* @__PURE__ */ function() {
  function ObservableObjectAdministration2(target_, values_, name_, defaultAnnotation_) {
    if (values_ === void 0) {
      values_ = /* @__PURE__ */ new Map();
    }
    if (defaultAnnotation_ === void 0) {
      defaultAnnotation_ = autoAnnotation;
    }
    this.target_ = void 0;
    this.values_ = void 0;
    this.name_ = void 0;
    this.defaultAnnotation_ = void 0;
    this.keysAtom_ = void 0;
    this.changeListeners_ = void 0;
    this.interceptors_ = void 0;
    this.proxy_ = void 0;
    this.isPlainObject_ = void 0;
    this.appliedAnnotations_ = void 0;
    this.pendingKeys_ = void 0;
    this.target_ = target_;
    this.values_ = values_;
    this.name_ = name_;
    this.defaultAnnotation_ = defaultAnnotation_;
    this.keysAtom_ = new Atom("ObservableObject.keys");
    this.isPlainObject_ = isPlainObject(this.target_);
  }
  var _proto = ObservableObjectAdministration2.prototype;
  _proto.getObservablePropValue_ = function getObservablePropValue_(key) {
    return this.values_.get(key).get();
  };
  _proto.setObservablePropValue_ = function setObservablePropValue_(key, newValue) {
    var observable2 = this.values_.get(key);
    if (observable2 instanceof ComputedValue) {
      observable2.set(newValue);
      return true;
    }
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: UPDATE,
        object: this.proxy_ || this.target_,
        name: key,
        newValue
      });
      if (!change) {
        return null;
      }
      newValue = change.newValue;
    }
    newValue = observable2.prepareNewValue_(newValue);
    if (newValue !== globalState.UNCHANGED) {
      var notify = hasListeners(this);
      var notifySpy = false;
      var _change = notify || notifySpy ? {
        type: UPDATE,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: observable2.value_,
        name: key,
        newValue
      } : null;
      observable2.setNewValue_(newValue);
      if (notify) {
        notifyListeners(this, _change);
      }
    }
    return true;
  };
  _proto.get_ = function get_(key) {
    if (globalState.trackingDerivation && !hasProp(this.target_, key)) {
      this.has_(key);
    }
    return this.target_[key];
  };
  _proto.set_ = function set_(key, value, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    if (hasProp(this.target_, key)) {
      if (this.values_.has(key)) {
        return this.setObservablePropValue_(key, value);
      } else if (proxyTrap) {
        return Reflect.set(this.target_, key, value);
      } else {
        this.target_[key] = value;
        return true;
      }
    } else {
      return this.extend_(key, {
        value,
        enumerable: true,
        writable: true,
        configurable: true
      }, this.defaultAnnotation_, proxyTrap);
    }
  };
  _proto.has_ = function has_(key) {
    if (!globalState.trackingDerivation) {
      return key in this.target_;
    }
    this.pendingKeys_ || (this.pendingKeys_ = /* @__PURE__ */ new Map());
    var entry = this.pendingKeys_.get(key);
    if (!entry) {
      entry = new ObservableValue(key in this.target_, referenceEnhancer, "ObservableObject.key?", false);
      this.pendingKeys_.set(key, entry);
    }
    return entry.get();
  };
  _proto.make_ = function make_(key, annotation) {
    if (annotation === true) {
      annotation = this.defaultAnnotation_;
    }
    if (annotation === false) {
      return;
    }
    if (!(key in this.target_)) {
      var _this$target_$storedA;
      if ((_this$target_$storedA = this.target_[storedAnnotationsSymbol]) != null && _this$target_$storedA[key]) {
        return;
      } else {
        die(1, annotation.annotationType_, this.name_ + "." + key.toString());
      }
    }
    var source = this.target_;
    while (source && source !== objectPrototype) {
      var descriptor = getDescriptor(source, key);
      if (descriptor) {
        var outcome = annotation.make_(this, key, descriptor, source);
        if (outcome === 0) {
          return;
        }
        if (outcome === 1) {
          break;
        }
      }
      source = Object.getPrototypeOf(source);
    }
    recordAnnotationApplied(this, annotation, key);
  };
  _proto.extend_ = function extend_(key, descriptor, annotation, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    if (annotation === true) {
      annotation = this.defaultAnnotation_;
    }
    if (annotation === false) {
      return this.defineProperty_(key, descriptor, proxyTrap);
    }
    var outcome = annotation.extend_(this, key, descriptor, proxyTrap);
    if (outcome) {
      recordAnnotationApplied(this, annotation, key);
    }
    return outcome;
  };
  _proto.defineProperty_ = function defineProperty_(key, descriptor, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    try {
      startBatch();
      var deleteOutcome = this.delete_(key);
      if (!deleteOutcome) {
        return deleteOutcome;
      }
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: descriptor.value
        });
        if (!change) {
          return null;
        }
        var newValue = change.newValue;
        if (descriptor.value !== newValue) {
          descriptor = _extends({}, descriptor, {
            value: newValue
          });
        }
      }
      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }
      this.notifyPropertyAddition_(key, descriptor.value);
    } finally {
      endBatch();
    }
    return true;
  };
  _proto.defineObservableProperty_ = function defineObservableProperty_(key, value, enhancer, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    try {
      startBatch();
      var deleteOutcome = this.delete_(key);
      if (!deleteOutcome) {
        return deleteOutcome;
      }
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: value
        });
        if (!change) {
          return null;
        }
        value = change.newValue;
      }
      var cachedDescriptor = getCachedObservablePropDescriptor(key);
      var descriptor = {
        configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
        enumerable: true,
        get: cachedDescriptor.get,
        set: cachedDescriptor.set
      };
      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }
      var observable2 = new ObservableValue(value, enhancer, false ? this.name_ + "." + key.toString() : "ObservableObject.key", false);
      this.values_.set(key, observable2);
      this.notifyPropertyAddition_(key, observable2.value_);
    } finally {
      endBatch();
    }
    return true;
  };
  _proto.defineComputedProperty_ = function defineComputedProperty_(key, options, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    try {
      startBatch();
      var deleteOutcome = this.delete_(key);
      if (!deleteOutcome) {
        return deleteOutcome;
      }
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: void 0
        });
        if (!change) {
          return null;
        }
      }
      options.name || (options.name = false ? this.name_ + "." + key.toString() : "ObservableObject.key");
      options.context = this.proxy_ || this.target_;
      var cachedDescriptor = getCachedObservablePropDescriptor(key);
      var descriptor = {
        configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
        enumerable: false,
        get: cachedDescriptor.get,
        set: cachedDescriptor.set
      };
      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }
      this.values_.set(key, new ComputedValue(options));
      this.notifyPropertyAddition_(key, void 0);
    } finally {
      endBatch();
    }
    return true;
  };
  _proto.delete_ = function delete_(key, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    if (!hasProp(this.target_, key)) {
      return true;
    }
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy_ || this.target_,
        name: key,
        type: REMOVE
      });
      if (!change) {
        return null;
      }
    }
    try {
      var _this$pendingKeys_;
      startBatch();
      var notify = hasListeners(this);
      var notifySpy = false;
      var observable2 = this.values_.get(key);
      var value = void 0;
      if (!observable2 && (notify || notifySpy)) {
        var _getDescriptor2;
        value = (_getDescriptor2 = getDescriptor(this.target_, key)) == null ? void 0 : _getDescriptor2.value;
      }
      if (proxyTrap) {
        if (!Reflect.deleteProperty(this.target_, key)) {
          return false;
        }
      } else {
        delete this.target_[key];
      }
      if (false)
        ;
      if (observable2) {
        this.values_["delete"](key);
        if (observable2 instanceof ObservableValue) {
          value = observable2.value_;
        }
        propagateChanged(observable2);
      }
      this.keysAtom_.reportChanged();
      (_this$pendingKeys_ = this.pendingKeys_) == null || (_this$pendingKeys_ = _this$pendingKeys_.get(key)) == null || _this$pendingKeys_.set(key in this.target_);
      if (notify || notifySpy) {
        var _change2 = {
          type: REMOVE,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: value,
          name: key
        };
        if (false)
          ;
        if (notify) {
          notifyListeners(this, _change2);
        }
        if (false)
          ;
      }
    } finally {
      endBatch();
    }
    return true;
  };
  _proto.observe_ = function observe_(callback, fireImmediately) {
    return registerListener(this, callback);
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };
  _proto.notifyPropertyAddition_ = function notifyPropertyAddition_(key, value) {
    var _this$pendingKeys_2;
    var notify = hasListeners(this);
    var notifySpy = false;
    if (notify || notifySpy) {
      var change = notify || notifySpy ? {
        type: ADD,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: key,
        newValue: value
      } : null;
      if (notify) {
        notifyListeners(this, change);
      }
    }
    (_this$pendingKeys_2 = this.pendingKeys_) == null || (_this$pendingKeys_2 = _this$pendingKeys_2.get(key)) == null || _this$pendingKeys_2.set(true);
    this.keysAtom_.reportChanged();
  };
  _proto.ownKeys_ = function ownKeys_() {
    this.keysAtom_.reportObserved();
    return ownKeys(this.target_);
  };
  _proto.keys_ = function keys_() {
    this.keysAtom_.reportObserved();
    return Object.keys(this.target_);
  };
  return ObservableObjectAdministration2;
}();
function asObservableObject(target, options) {
  var _options$name;
  if (hasProp(target, $mobx)) {
    return target;
  }
  var name = (_options$name = options == null ? void 0 : options.name) != null ? _options$name : "ObservableObject";
  var adm = new ObservableObjectAdministration(target, /* @__PURE__ */ new Map(), String(name), getAnnotationFromOptions(options));
  addHiddenProp(target, $mobx, adm);
  return target;
}
var isObservableObjectAdministration = /* @__PURE__ */ createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function getCachedObservablePropDescriptor(key) {
  return descriptorCache[key] || (descriptorCache[key] = {
    get: function get5() {
      return this[$mobx].getObservablePropValue_(key);
    },
    set: function set5(value) {
      return this[$mobx].setObservablePropValue_(key, value);
    }
  });
}
function isObservableObject(thing) {
  if (isObject(thing)) {
    return isObservableObjectAdministration(thing[$mobx]);
  }
  return false;
}
function recordAnnotationApplied(adm, annotation, key) {
  var _adm$target_$storedAn;
  (_adm$target_$storedAn = adm.target_[storedAnnotationsSymbol]) == null || delete _adm$target_$storedAn[key];
}
var ENTRY_0 = /* @__PURE__ */ createArrayEntryDescriptor(0);
var safariPrototypeSetterInheritanceBug = /* @__PURE__ */ function() {
  var v = false;
  var p2 = {};
  Object.defineProperty(p2, "0", {
    set: function set5() {
      v = true;
    }
  });
  Object.create(p2)["0"] = 1;
  return v === false;
}();
var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
var StubArray = function StubArray2() {
};
function inherit(ctor, proto2) {
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ctor.prototype, proto2);
  } else if (ctor.prototype.__proto__ !== void 0) {
    ctor.prototype.__proto__ = proto2;
  } else {
    ctor.prototype = proto2;
  }
}
inherit(StubArray, Array.prototype);
var LegacyObservableArray = /* @__PURE__ */ function(_StubArray) {
  function LegacyObservableArray2(initialValues, enhancer, name, owned) {
    var _this;
    if (name === void 0) {
      name = "ObservableArray";
    }
    if (owned === void 0) {
      owned = false;
    }
    _this = _StubArray.call(this) || this;
    initObservable(function() {
      var adm = new ObservableArrayAdministration(name, enhancer, owned, true);
      adm.proxy_ = _this;
      addHiddenFinalProp(_this, $mobx, adm);
      if (initialValues && initialValues.length) {
        _this.spliceWithArray(0, 0, initialValues);
      }
      if (safariPrototypeSetterInheritanceBug) {
        Object.defineProperty(_this, "0", ENTRY_0);
      }
    });
    return _this;
  }
  _inheritsLoose(LegacyObservableArray2, _StubArray);
  var _proto = LegacyObservableArray2.prototype;
  _proto.concat = function concat() {
    this[$mobx].atom_.reportObserved();
    for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
      arrays[_key] = arguments[_key];
    }
    return Array.prototype.concat.apply(
      this.slice(),
      arrays.map(function(a) {
        return isObservableArray(a) ? a.slice() : a;
      })
    );
  };
  _proto[Symbol.iterator] = function() {
    var self2 = this;
    var nextIndex = 0;
    return makeIterable({
      next: function next() {
        return nextIndex < self2.length ? {
          value: self2[nextIndex++],
          done: false
        } : {
          done: true,
          value: void 0
        };
      }
    });
  };
  return _createClass(LegacyObservableArray2, [{
    key: "length",
    get: function get5() {
      return this[$mobx].getArrayLength_();
    },
    set: function set5(newLength) {
      this[$mobx].setArrayLength_(newLength);
    }
  }, {
    key: Symbol.toStringTag,
    get: function get5() {
      return "Array";
    }
  }]);
}(StubArray);
Object.entries(arrayExtensions).forEach(function(_ref) {
  var prop = _ref[0], fn = _ref[1];
  if (prop !== "concat") {
    addHiddenProp(LegacyObservableArray.prototype, prop, fn);
  }
});
function createArrayEntryDescriptor(index) {
  return {
    enumerable: false,
    configurable: true,
    get: function get5() {
      return this[$mobx].get_(index);
    },
    set: function set5(value) {
      this[$mobx].set_(index, value);
    }
  };
}
function createArrayBufferItem(index) {
  defineProperty(LegacyObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}
function reserveArrayBuffer(max2) {
  if (max2 > OBSERVABLE_ARRAY_BUFFER_SIZE) {
    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max2 + 100; index++) {
      createArrayBufferItem(index);
    }
    OBSERVABLE_ARRAY_BUFFER_SIZE = max2;
  }
}
reserveArrayBuffer(1e3);
function createLegacyArray(initialValues, enhancer, name) {
  return new LegacyObservableArray(initialValues, enhancer, name);
}
function getAtom(thing, property2) {
  if (typeof thing === "object" && thing !== null) {
    if (isObservableArray(thing)) {
      if (property2 !== void 0) {
        die(23);
      }
      return thing[$mobx].atom_;
    }
    if (isObservableSet(thing)) {
      return thing.atom_;
    }
    if (isObservableMap(thing)) {
      if (property2 === void 0) {
        return thing.keysAtom_;
      }
      var observable2 = thing.data_.get(property2) || thing.hasMap_.get(property2);
      if (!observable2) {
        die(25, property2, getDebugName(thing));
      }
      return observable2;
    }
    if (isObservableObject(thing)) {
      if (!property2) {
        return die(26);
      }
      var _observable = thing[$mobx].values_.get(property2);
      if (!_observable) {
        die(27, property2, getDebugName(thing));
      }
      return _observable;
    }
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
      return thing;
    }
  } else if (isFunction(thing)) {
    if (isReaction(thing[$mobx])) {
      return thing[$mobx];
    }
  }
  die(28);
}
function getAdministration(thing, property2) {
  if (!thing) {
    die(29);
  }
  if (property2 !== void 0) {
    return getAdministration(getAtom(thing, property2));
  }
  if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
    return thing;
  }
  if (isObservableMap(thing) || isObservableSet(thing)) {
    return thing;
  }
  if (thing[$mobx]) {
    return thing[$mobx];
  }
  die(24, thing);
}
function getDebugName(thing, property2) {
  var named;
  if (property2 !== void 0) {
    named = getAtom(thing, property2);
  } else if (isAction(thing)) {
    return thing.name;
  } else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing)) {
    named = getAdministration(thing);
  } else {
    named = getAtom(thing);
  }
  return named.name_;
}
function initObservable(cb) {
  var derivation = untrackedStart();
  var allowStateChanges = allowStateChangesStart(true);
  startBatch();
  try {
    return cb();
  } finally {
    endBatch();
    allowStateChangesEnd(allowStateChanges);
    untrackedEnd(derivation);
  }
}
var toString2 = objectPrototype.toString;
function deepEqual(a, b, depth) {
  if (depth === void 0) {
    depth = -1;
  }
  return eq(a, b, depth);
}
function eq(a, b, depth, aStack, bStack) {
  if (a === b) {
    return a !== 0 || 1 / a === 1 / b;
  }
  if (a == null || b == null) {
    return false;
  }
  if (a !== a) {
    return b !== b;
  }
  var type = typeof a;
  if (type !== "function" && type !== "object" && typeof b != "object") {
    return false;
  }
  var className = toString2.call(a);
  if (className !== toString2.call(b)) {
    return false;
  }
  switch (className) {
    case "[object RegExp]":
    case "[object String]":
      return "" + a === "" + b;
    case "[object Number]":
      if (+a !== +a) {
        return +b !== +b;
      }
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case "[object Date]":
    case "[object Boolean]":
      return +a === +b;
    case "[object Symbol]":
      return typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b);
    case "[object Map]":
    case "[object Set]":
      if (depth >= 0) {
        depth++;
      }
      break;
  }
  a = unwrap(a);
  b = unwrap(b);
  var areArrays = className === "[object Array]";
  if (!areArrays) {
    if (typeof a != "object" || typeof b != "object") {
      return false;
    }
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) {
      return false;
    }
  }
  if (depth === 0) {
    return false;
  } else if (depth < 0) {
    depth = -1;
  }
  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;
  while (length--) {
    if (aStack[length] === a) {
      return bStack[length] === b;
    }
  }
  aStack.push(a);
  bStack.push(b);
  if (areArrays) {
    length = a.length;
    if (length !== b.length) {
      return false;
    }
    while (length--) {
      if (!eq(a[length], b[length], depth - 1, aStack, bStack)) {
        return false;
      }
    }
  } else {
    var keys2 = Object.keys(a);
    var key;
    length = keys2.length;
    if (Object.keys(b).length !== length) {
      return false;
    }
    while (length--) {
      key = keys2[length];
      if (!(hasProp(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack))) {
        return false;
      }
    }
  }
  aStack.pop();
  bStack.pop();
  return true;
}
function unwrap(a) {
  if (isObservableArray(a)) {
    return a.slice();
  }
  if (isES6Map(a) || isObservableMap(a)) {
    return Array.from(a.entries());
  }
  if (isES6Set(a) || isObservableSet(a)) {
    return Array.from(a.entries());
  }
  return a;
}
var _getGlobal$Iterator;
var maybeIteratorPrototype = ((_getGlobal$Iterator = getGlobal().Iterator) == null ? void 0 : _getGlobal$Iterator.prototype) || {};
function makeIterable(iterator) {
  iterator[Symbol.iterator] = getSelf;
  return Object.assign(Object.create(maybeIteratorPrototype), iterator);
}
function getSelf() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function(m2) {
  var g = getGlobal();
  if (typeof g[m2] === "undefined") {
    die("MobX requires global '" + m2 + "' to be available or polyfilled");
  }
});
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy,
    extras: {
      getDebugName
    },
    $mobx
  });
}
var Store = /* @__PURE__ */ _createClass$9(
  function Store2() {
    var _this = this;
    _classCallCheck$a(this, Store2);
    _defineProperty$7(this, "createStore", function(name, data) {
      _this[name] = data;
      makeObservable(_this, _defineProperty$7({}, name, observable));
    });
    _defineProperty$7(this, "getStore", function() {
      return _this;
    });
    _defineProperty$7(this, "getState", function(addr) {
      var _this$getAddress = _this.getAddress(addr), objName = _this$getAddress.objName, index = _this$getAddress.index;
      return objName[index];
    });
    _defineProperty$7(this, "setState", function(addr, data) {
      var _this$getAddress2 = _this.getAddress(addr), objName = _this$getAddress2.objName, index = _this$getAddress2.index;
      objName[index] = data;
    });
    _defineProperty$7(this, "updateState", function(addr, data) {
      var _this$getAddress3 = _this.getAddress(addr), objName = _this$getAddress3.objName, index = _this$getAddress3.index;
      var oldData = objName[index] || {};
      var newData = _objectSpread2(_objectSpread2({}, oldData), data);
      objName[index] = newData;
    });
    _defineProperty$7(this, "getAddress", function(addr) {
      var address = _this;
      var indexes = addr.split(".");
      var length = indexes.length - 1;
      var index;
      for (var i in indexes) {
        index = indexes[i];
        if (i < length) {
          if (address[index] === void 0) {
            address[index] = {};
          }
          address = address[index];
        }
      }
      return {
        objName: address,
        index
      };
    });
  }
);
var Store$1 = new Store();
var Utils = /* @__PURE__ */ function() {
  function Utils2(props) {
    var _this = this;
    _classCallCheck$a(this, Utils2);
    _defineProperty$7(this, "getHeightStyle", function(height) {
      var _height = isNaN(height) ? height : "".concat(height, "px");
      return {
        height: _height,
        minHeight: _height,
        maxHeight: _height
      };
    });
    _defineProperty$7(this, "getWidthStyle", function(width) {
      var _width = isNaN(width) ? width : "".concat(width, "px");
      return {
        width: _width,
        minWidth: _width,
        maxWidth: _width
      };
    });
    _defineProperty$7(this, "getValueByAddress", function(address) {
      var value = _this.connector;
      var offsets = address.split(".");
      var _iterator = _createForOfIteratorHelper(offsets), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var offset2 = _step.value;
          value = value[offset2];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return value;
    });
    _defineProperty$7(this, "setValueByAddress", function(address, value) {
      var addr = _this.connector;
      var offsets = address.split(".");
      for (var i in offsets) {
        if (Number(i) === offsets.length - 1) {
          addr[offsets[i]] = value;
        } else {
          addr = addr[offsets[i]];
        }
      }
    });
    _defineProperty$7(this, "setHoveredCell", function(column, row) {
      var _this$connector = _this.connector, hovered = _this$connector.hovered, _this$connector$refre = _this$connector.refresh, refreshRow = _this$connector$refre.row, refreshCol = _this$connector$refre.column;
      var oldHoveredColumn = hovered.column, oldHoveredRow = hovered.row;
      var _refreshColumn = function _refreshColumn2(index) {
        if (index !== null && Array.isArray(refreshCol))
          _this.refreshColumn(index);
      };
      var _refreshRow = function _refreshRow2(index) {
        if (index !== null && refreshRow && refreshRow[index])
          refreshRow[index]();
      };
      _this.connector.hovered = {
        column,
        row
      };
      if (column !== oldHoveredColumn) {
        _refreshColumn(oldHoveredColumn);
        _refreshColumn(column);
      }
      if (row !== oldHoveredRow) {
        _refreshRow(oldHoveredRow);
        _refreshRow(row);
      }
    });
    var tablePortalElCurrent = props.tablePortalElCurrent, _props$tableName = props.tableName, tableName = _props$tableName === void 0 ? "" : _props$tableName, data = props.data, _props$commonForHeade = props.commonForHeader, commonForHeader = _props$commonForHeade === void 0 ? {} : _props$commonForHeade, _props$commonForBody = props.commonForBody, commonForBody = _props$commonForBody === void 0 ? {} : _props$commonForBody, _props$editors = props.editors, editors = _props$editors === void 0 ? {} : _props$editors, _props$options = props.options, options = _props$options === void 0 ? {} : _props$options, _props$onChangeCompon = props.onChangeComponentState, onChangeComponentState = _props$onChangeCompon === void 0 ? {} : _props$onChangeCompon, _props$getComponentCo = props.getComponentControlling, getComponentControlling = _props$getComponentCo === void 0 ? function() {
    } : _props$getComponentCo, refreshTable = props.refreshTable;
    var _options$numberFixedL = options.numberFixedLeftColumns, numberFixedLeftColumns = _options$numberFixedL === void 0 ? 0 : _options$numberFixedL, _options$tableHasRows = options.tableHasRowsTree, tableHasRowsTree = _options$tableHasRows === void 0 ? false : _options$tableHasRows;
    var header = data.header, rowsTree = data.rows, _data$params = data.params, params = _data$params === void 0 ? {} : _data$params;
    this.rowsByOrdinalIndex = {};
    var _this$rowsTreeToRows = this.rowsTreeToRows(rowsTree), rows = _this$rowsTreeToRows.rows, rowsMaxLevel = _this$rowsTreeToRows.rowsMaxLevel, rowsRootNumber = _this$rowsTreeToRows.rowsRootNumber;
    this.tableName = tableName;
    this.header = header;
    this.numberFixedLeftColumns = numberFixedLeftColumns;
    this.setHeaderInfo(header);
    this.numberFixedLeftColumnsEnds = this.getNumberFixedLeftColumns(header, numberFixedLeftColumns);
    if (!params.totalLength && rowsTree.length < params.pageLength)
      params.totalLength = rowsTree.length;
    var initialSizes = options.initialSizes || {};
    this.connector = {
      options,
      params,
      commonForHeader,
      commonForBody,
      editors,
      onChangeComponentState,
      tableHas: {
        paginator: rows.length !== params.totalLength,
        scrollbarHorizontal: false,
        scrollbarVertical: false,
        rowsTree: tableHasRowsTree
      },
      header,
      rows: this.correctionRowsLength(rows, this.headerLength),
      rowsTree,
      rowsRootNumber,
      rowsMaxLevel,
      headerMaxLevel: this.headerMaxLevel,
      headerLength: this.headerLength,
      showPageNum: 0,
      numberFixedLeftColumns: this.numberFixedLeftColumns,
      numberFixedLeftColumnsEnds: this.numberFixedLeftColumnsEnds,
      searchContext: UTILS.monoArray(this.headerLength, null),
      format: UTILS.monoArray(this.headerLength, null),
      sortCell: null,
      editableCell: null,
      sizes: {
        columnsWidth: this.getColumnsWidth({
          tablePortalElCurrent,
          initialSizes
        }),
        headerHeight: initialSizes.headerHeight ? initialSizes.headerHeight : this.headerMaxLevel * 45,
        rowsHeight: initialSizes.rowsHeight ? initialSizes.rowsHeight : 25,
        paginatorHeight: 40,
        scrollbar: 18
      },
      refs: {
        tablePortalElCurrent,
        unitableBody: null,
        body: null,
        rightParts: [],
        headerRight: null,
        unitable: null,
        scrollbarVertical: null,
        settings: null
      },
      hovered: {
        column: null,
        row: null
      },
      data: {
        headerRoot: [],
        headerRootByEndIndex: {},
        rowsByOrdinalIndex: this.rowsByOrdinalIndex
      },
      refresh: {
        table: refreshTable,
        headerAndBody: function headerAndBody() {
        },
        header: function header2() {
        },
        body: function body() {
        },
        scrollbarHorizontal: function scrollbarHorizontal() {
        },
        scrollbarVertical: function scrollbarVertical() {
        },
        paginator: function paginator() {
        },
        column: [],
        row: []
      },
      showColumns: UTILS.monoArray(this.headerLength, true),
      showRows: this.showRows,
      orderTree: this.buildTreeOrder(),
      orderEnds: []
    };
    this.restoreTableSettingsFromLocaleStorage();
    this.orderTreeToOrderEnds();
    setTimeout(function() {
      _this.setControlling(getComponentControlling);
    }, 0);
    console.log("--- Utils --->", this);
  }
  return _createClass$9(Utils2, [{
    key: "getColumnsWidth",
    value: function getColumnsWidth(_ref) {
      var _tablePortalElCurrent;
      var _ref$tablePortalElCur = _ref.tablePortalElCurrent, tablePortalElCurrent = _ref$tablePortalElCur === void 0 ? null : _ref$tablePortalElCur, _ref$initialSizes = _ref.initialSizes, initialSizes = _ref$initialSizes === void 0 ? {} : _ref$initialSizes;
      var defaultWidth = 100;
      console.log("tablePortalElCurrent.current", tablePortalElCurrent.current);
      var portalWidth = (_tablePortalElCurrent = tablePortalElCurrent.current) !== null && _tablePortalElCurrent !== void 0 && _tablePortalElCurrent.getBoundingClientRect ? tablePortalElCurrent.current.getBoundingClientRect().width : null;
      if (portalWidth) {
        var portalStyle = tablePortalElCurrent.current.currentStyle || window.getComputedStyle(tablePortalElCurrent.current);
        var portalPadding = Number(portalStyle.paddingLeft.replace("px", "")) + Number(portalStyle.paddingRight.replace("px", ""));
        portalWidth -= portalPadding;
      }
      if (!portalWidth && !(initialSizes !== null && initialSizes !== void 0 && initialSizes.columnsWidth)) {
        return UTILS.monoArray(this.headerLength, defaultWidth);
      }
      if (!initialSizes.columnsWidth) {
        var width = Math.floor(portalWidth / this.headerLength);
        return UTILS.monoArray(this.headerLength, width);
      }
      var columnsWidth = initialSizes.columnsWidth;
      var getPX = function getPX2(text) {
        var sizePercent = text.split("%");
        if (sizePercent.length === 2) {
          return portalWidth ? Math.floor(portalWidth / 100 * Number(sizePercent[0])) : defaultWidth;
        }
        var sizePx = text.split("px");
        return Number(sizePx[0]);
      };
      if (Array.isArray(columnsWidth)) {
        var out = [];
        var undefCount = 0;
        var totalWidth = 0;
        for (var i = 0; i < this.headerLength; i++) {
          if (columnsWidth[i]) {
            var _width2 = getPX(String(columnsWidth[i]));
            out[i] = _width2;
            totalWidth += _width2;
          } else {
            out[i] = "*";
            undefCount++;
          }
        }
        if (undefCount) {
          var remainsTotal = portalWidth ? portalWidth - totalWidth : defaultWidth * undefCount;
          var remainsWidth = remainsTotal / undefCount;
          for (var _i in out) {
            if (out[_i] === "*")
              out[_i] = remainsWidth;
          }
        }
        return out;
      } else {
        return UTILS.monoArray(this.headerLength, getPX(String(columnsWidth)));
      }
    }
  }, {
    key: "setControlling",
    value: function setControlling(getComponentControlling) {
      var controlling = {
        setTableTotalLength: this.setTableTotalLength.bind(this),
        refreshBodyWithNewRows: this.refreshBodyWithNewRows.bind(this),
        refreshPaginator: this.connector.refresh.paginator.bind(this),
        refreshTable: this.refreshTable.bind(this)
      };
      getComponentControlling(controlling);
    }
  }, {
    key: "refreshTable",
    value: function refreshTable() {
      Store$1.setState("unitable.".concat(this.tableName), {});
      this.connector.refresh.table();
    }
  }, {
    key: "refreshBodyWithNewRows",
    value: function refreshBodyWithNewRows(props) {
      var params = this.connector.params;
      var newRows = props.newRows, newPageLength = props.newPageLength, newPageNum = props.newPageNum, openAllLevels = props.openAllLevels;
      var _this$rowsTreeToRows2 = this.rowsTreeToRows(newRows, openAllLevels), rows = _this$rowsTreeToRows2.rows, rowsMaxLevel = _this$rowsTreeToRows2.rowsMaxLevel, rowsRootNumber = _this$rowsTreeToRows2.rowsRootNumber;
      this.connector.rowsTree = newRows;
      this.connector.rows = this.correctionRowsLength(rows, this.headerLength);
      this.connector.rowsRootNumber = rowsRootNumber;
      this.connector.rowsMaxLevel = rowsMaxLevel;
      if (newPageLength)
        params.pageLength = newPageLength;
      if (!isNaN(newPageNum))
        params.pageNum = newPageNum;
      if (!params.totalLength && newRows.length < params.pageLength) {
        this.setTableTotalLength(params.pageNum * params.pageLength + newRows.length);
      }
      if (!openAllLevels)
        this.setShowToAllRows(false);
      this.connector.refresh.body();
      this.connector.refresh.paginator();
      this.storeRememberPage();
    }
  }, {
    key: "getSliding",
    value: function getSliding() {
      var _this$connector2 = this.connector, _this$connector2$size = _this$connector2.sizes, rowsHeight = _this$connector2$size.rowsHeight, headerHeight = _this$connector2$size.headerHeight, paginatorHeight = _this$connector2$size.paginatorHeight, refs = _this$connector2.refs, showRows = _this$connector2.showRows;
      var inner = refs === null || refs === void 0 ? void 0 : refs.unitableBodyInner;
      var getInnerHeight = function getInnerHeight2() {
        var documentHeight = document.getElementsByTagName("body")[0].getBoundingClientRect().height;
        return documentHeight - headerHeight - paginatorHeight;
      };
      var scrollTop = inner ? inner.scrollTop : 0;
      var innerHeight = inner ? inner.getBoundingClientRect().height : getInnerHeight();
      var from2 = Math.round(scrollTop / rowsHeight);
      var to2 = Math.round((scrollTop + innerHeight) / rowsHeight);
      var sliding = [];
      var visualIndex = 0;
      var _iterator2 = _createForOfIteratorHelper(showRows), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var row = _step2.value;
          if (row.show) {
            sliding.push(visualIndex >= from2 && visualIndex <= to2);
            visualIndex++;
          } else {
            sliding.push(true);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return sliding;
    }
  }, {
    key: "setTableTotalLength",
    value: function setTableTotalLength(length) {
      var _this$connector3 = this.connector, params = _this$connector3.params, refresh = _this$connector3.refresh;
      params.totalLength = length;
      refresh.paginator();
    }
  }, {
    key: "setShowToAllRows",
    value: function setShowToAllRows(value) {
      var _this$connector4 = this.connector, refreshBody = _this$connector4.refresh.body, showRows = _this$connector4.showRows;
      for (var index in showRows) {
        var item = showRows[index];
        item.showChildren = value;
        if (item.level)
          item.show = value;
      }
      refreshBody();
    }
  }, {
    key: "rowsTreeToRows",
    value: function rowsTreeToRows(rowsTree, openAllLevels) {
      var _this2 = this;
      var rows = [];
      var showRows = [];
      var mainRootIndex = 0;
      var rowsMaxLevel = 0;
      var myIndex = 0;
      var ordinalIndex = 0;
      var _nextBranch = function nextBranch(branch, level, parentChildren, parentIndex) {
        var _iterator3 = _createForOfIteratorHelper(branch), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var item = _step3.value;
            var row = item.row, children = item.children, _ = item._;
            var isRoot = !!(children !== null && children !== void 0 && children.length);
            rows.push(row);
            _this2.rowsByOrdinalIndex[ordinalIndex] = item;
            var ch = [];
            var el = {
              show: openAllLevels ? true : !level,
              mainRootIndex,
              level,
              isRoot,
              showChildren: !!openAllLevels,
              children: ch,
              parentChildren,
              parentIndex,
              ordinalIndex
            };
            if (_ !== null && _ !== void 0 && _.isNotFind)
              el.isNotFind = true;
            showRows.push(el);
            ordinalIndex++;
            myIndex++;
            rowsMaxLevel = Math.max(rowsMaxLevel, level);
            if (parentChildren)
              parentChildren.push(showRows.length - 1);
            if (isRoot) {
              _nextBranch(children, level + 1, ch, myIndex);
            }
            if (!level)
              mainRootIndex++;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      };
      _nextBranch(this.rootsToUp(rowsTree), 0);
      if (this.connector) {
        this.connector.showRows = showRows;
      }
      this.showRows = showRows;
      return {
        rows,
        rowsMaxLevel,
        rowsRootNumber: rowsTree.length
      };
    }
  }, {
    key: "rootsToUp",
    value: function rootsToUp(rowsTree) {
      var _sort = function sort2(rows) {
        rows.sort(function(a, b) {
          var _a$children, _b$children;
          var aChildren = !!((_a$children = a.children) !== null && _a$children !== void 0 && _a$children.length);
          var bChildren = !!((_b$children = b.children) !== null && _b$children !== void 0 && _b$children.length);
          if (aChildren && !bChildren)
            return -1;
          if (!aChildren && bChildren)
            return 1;
          return 0;
        });
        var _iterator4 = _createForOfIteratorHelper(rows), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            var _row$children;
            var row = _step4.value;
            if ((_row$children = row.children) !== null && _row$children !== void 0 && _row$children.length) {
              _sort(row.children);
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      };
      _sort(rowsTree);
      return rowsTree;
    }
  }, {
    key: "toggleShowRowTree",
    value: function toggleShowRowTree(rowIndex) {
      var _scrollbarWrapperRef$;
      var _this$connector5 = this.connector, showRows = _this$connector5.showRows, refreshRow = _this$connector5.refresh.row, _this$connector5$refs = _this$connector5.refs, rightPartsRefs = _this$connector5$refs.rightParts, scrollbarWrapperRef = _this$connector5$refs.scrollbarWrapperRef, refresh = _this$connector5.refresh;
      var scrollLeft = ((_scrollbarWrapperRef$ = scrollbarWrapperRef.current) === null || _scrollbarWrapperRef$ === void 0 ? void 0 : _scrollbarWrapperRef$.scrollLeft) || 0;
      var show = !showRows[rowIndex].showChildren;
      var _setChildrenShow = function setChildrenShow(index) {
        var rowData = showRows[index];
        rowData.showChildren = show;
        var _iterator5 = _createForOfIteratorHelper(rowData.children), _step5;
        try {
          var _loop = function _loop4() {
            var _childrenData$childre;
            var childIndex = _step5.value;
            var childrenData = showRows[childIndex];
            childrenData.show = show;
            refreshRow[childIndex]();
            setTimeout(function() {
              rightPartsRefs[childIndex + 1].scrollLeft = scrollLeft;
            }, 10);
            if (!show && (_childrenData$childre = childrenData.children) !== null && _childrenData$childre !== void 0 && _childrenData$childre.length) {
              _setChildrenShow(childIndex);
            }
          };
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            _loop();
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      };
      _setChildrenShow(rowIndex);
      setTimeout(function() {
        refresh.scrollbarVertical();
      }, 0);
    }
  }, {
    key: "toggleCheckedCell",
    value: function toggleCheckedCell(cell) {
      if (cell._.isEndOfLeftPart)
        return;
      var checked = !cell._.checked;
      var _setChecked = function setChecked(cell2) {
        cell2._.checked = checked;
        if (!cell2._.isEnd) {
          var _iterator6 = _createForOfIteratorHelper(cell2.children), _step6;
          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
              var child = _step6.value;
              _setChecked(child);
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }
      };
      _setChecked(cell);
      this.checkParentCheckedInHeader();
    }
  }, {
    key: "checkParentCheckedInHeader",
    value: function checkParentCheckedInHeader() {
      var _testChecked = function testChecked(cell) {
        if (cell._.isEnd) {
          return cell._.checked;
        }
        var checked = false;
        var _iterator7 = _createForOfIteratorHelper(cell.children), _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
            var child = _step7.value;
            checked = _testChecked(child) || checked;
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
        cell._.checked = checked;
        return checked;
      };
      var _iterator8 = _createForOfIteratorHelper(this.connector.header), _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
          var root2 = _step8.value;
          if (!root2._.isEndOfLeftPart)
            _testChecked(root2);
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    }
  }, {
    key: "distributeShowColumnsToHeader",
    value: function distributeShowColumnsToHeader() {
      var _this$connector6 = this.connector, showColumns = _this$connector6.showColumns, header = _this$connector6.header;
      var _testChecked2 = function testChecked(cell) {
        if (cell._.isEnd) {
          cell._.checked = showColumns[cell._.endIndex];
          return;
        }
        var _iterator9 = _createForOfIteratorHelper(cell.children), _step9;
        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
            var child = _step9.value;
            _testChecked2(child);
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
      };
      var _iterator10 = _createForOfIteratorHelper(header), _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
          var root2 = _step10.value;
          if (!root2._.isEndOfLeftPart)
            _testChecked2(root2);
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      this.checkParentCheckedInHeader();
    }
  }, {
    key: "distributeHeaderToShowColumns",
    value: function distributeHeaderToShowColumns() {
      var _this3 = this;
      var _this$connector7 = this.connector, showColumns = _this$connector7.showColumns, header = _this$connector7.header, headerRoot = _this$connector7.data.headerRoot;
      var _testChecked3 = function testChecked(cell) {
        var _cell$_ = cell._, checkedInHeader = _cell$_.checked, isEnd = _cell$_.isEnd, endIndex = _cell$_.endIndex;
        if (isEnd) {
          var checkedInShowColumns = showColumns[endIndex];
          if (checkedInHeader === checkedInShowColumns)
            return;
          showColumns[endIndex] = checkedInHeader;
          _this3.refreshColumn(endIndex);
          return;
        }
        var _iterator11 = _createForOfIteratorHelper(cell.children), _step11;
        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
            var child = _step11.value;
            _testChecked3(child);
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }
      };
      var _iterator12 = _createForOfIteratorHelper(header), _step12;
      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) {
          var root2 = _step12.value;
          if (!root2._.isEndOfLeftPart)
            _testChecked3(root2);
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
      setTimeout(function() {
        var _iterator13 = _createForOfIteratorHelper(headerRoot), _step13;
        try {
          for (_iterator13.s(); !(_step13 = _iterator13.n()).done; ) {
            var root3 = _step13.value;
            root3.refresh();
          }
        } catch (err) {
          _iterator13.e(err);
        } finally {
          _iterator13.f();
        }
      }, 0);
    }
  }, {
    key: "buildTreeOrder",
    value: function buildTreeOrder() {
      var originalEndsIndex = 0;
      var _getChildren = function getChildren(children) {
        var out = [];
        for (var i in children) {
          var _cell$children;
          var cell = children[i];
          var item = {
            i: Number(i)
          };
          if ((_cell$children = cell.children) !== null && _cell$children !== void 0 && _cell$children.length) {
            item.ch = _getChildren(cell.children);
          } else {
            item.orig = originalEndsIndex;
            originalEndsIndex++;
          }
          out.push(item);
        }
        return out;
      };
      return _getChildren(this.header);
    }
  }, {
    key: "getNumberFixedLeftColumns",
    value: function getNumberFixedLeftColumns(header, num) {
      var out = 0;
      for (var i = 0; i < num; i++)
        out += header[i]._.length;
      return out;
    }
  }, {
    key: "setHeaderInfo",
    value: function setHeaderInfo(header) {
      var _this4 = this;
      var headerLength = 0;
      var maxLevel = 1;
      var endIndex = 0;
      var ordinalIndex = 0;
      this.headerCellsByCellIndex = {};
      var _getItemLength = function getItemLength(_ref2) {
        var _item$children;
        var item2 = _ref2.item, rootIndex2 = _ref2.rootIndex, level = _ref2.level, parent = _ref2.parent, isLeft = _ref2.isLeft, isEditable = _ref2.isEditable, css = _ref2.css, view = _ref2.view, customizer = _ref2.customizer;
        var out = 0;
        if (level > maxLevel)
          maxLevel = level;
        if ((_item$children = item2.children) !== null && _item$children !== void 0 && _item$children.length) {
          for (var i in item2.children) {
            var child = item2.children[i];
            var childIsEditable = isEditable;
            var childCss = css;
            var childView = view;
            var childCustomizer = customizer;
            if (child.columns) {
              childIsEditable = child.columns.isEditable === void 0 ? isEditable : child.columns.isEditable;
              childCss = child.columns.css === void 0 ? css : _objectSpread2(_objectSpread2({}, css), child.columns.css);
              childView = child.columns.view === void 0 ? view : child.columns.view;
              childCustomizer = child.columns.customizer === void 0 ? customizer : child.columns.customizer;
            }
            out += _getItemLength({
              item: child,
              rootIndex: rootIndex2,
              level: level + 1,
              parent: item2,
              isLeft,
              isEditable: childIsEditable,
              css: childCss,
              view: childView,
              customizer: childCustomizer
            });
          }
          item2._ = {
            level,
            length: out,
            isEnd: false,
            parent,
            checked: true,
            isLeft,
            ordinalIndex,
            isEditable,
            css,
            view,
            customizer
          };
          ordinalIndex++;
          return out;
        }
        headerLength++;
        item2._ = {
          level,
          length: 1,
          isEnd: true,
          rootIndex: rootIndex2,
          endIndex,
          checked: true,
          parent,
          isLeft,
          ordinalIndex,
          isEditable,
          css,
          view,
          customizer
        };
        _this4.headerCellsByCellIndex[endIndex] = item2;
        ordinalIndex++;
        endIndex++;
        return 1;
      };
      for (var rootIndex in header) {
        var _header$rootIndex$col, _header$rootIndex$col2, _header$rootIndex$col3, _header$rootIndex$col4;
        _getItemLength({
          item: header[rootIndex],
          rootIndex: Number(rootIndex),
          level: 0,
          parent: null,
          isLeft: rootIndex < this.numberFixedLeftColumns,
          isEditable: (_header$rootIndex$col = header[rootIndex].columns) === null || _header$rootIndex$col === void 0 ? void 0 : _header$rootIndex$col.isEditable,
          css: ((_header$rootIndex$col2 = header[rootIndex].columns) === null || _header$rootIndex$col2 === void 0 ? void 0 : _header$rootIndex$col2.css) || {},
          view: ((_header$rootIndex$col3 = header[rootIndex].columns) === null || _header$rootIndex$col3 === void 0 ? void 0 : _header$rootIndex$col3.view) || null,
          customizer: ((_header$rootIndex$col4 = header[rootIndex].columns) === null || _header$rootIndex$col4 === void 0 ? void 0 : _header$rootIndex$col4.customizer) || null
        });
      }
      if (this.numberFixedLeftColumns) {
        var setEndOfLeft = function setEndOfLeft2(item2) {
          var _item$children2;
          item2._.isEndOfLeftPart = true;
          if ((_item$children2 = item2.children) !== null && _item$children2 !== void 0 && _item$children2.length)
            return item2.children[item2.children.length - 1];
          return null;
        };
        var item = header[this.numberFixedLeftColumns - 1];
        while (item) {
          item = setEndOfLeft(item);
        }
      }
      this.headerLength = headerLength;
      this.headerMaxLevel = maxLevel + 1;
    }
  }, {
    key: "orderTreeToOrderEnds",
    value: function orderTreeToOrderEnds() {
      var orderTree = this.connector.orderTree;
      var out = [];
      var _checkChildren = function checkChildren(tree) {
        var _iterator14 = _createForOfIteratorHelper(tree), _step14;
        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done; ) {
            var item = _step14.value;
            if (item.ch) {
              _checkChildren(item.ch);
            } else {
              out.push(item.orig);
            }
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }
      };
      _checkChildren(orderTree);
      this.connector.orderEnds = out;
    }
  }, {
    key: "recalcHeaderRootsPadding",
    value: function recalcHeaderRootsPadding() {
      var _this$connector8 = this.connector, headerRoot = _this$connector8.data.headerRoot, headerRight = _this$connector8.refs.headerRight;
      var _headerRight$getBound = headerRight.getBoundingClientRect(), startView = _headerRight$getBound.left, endView = _headerRight$getBound.right;
      var _iterator15 = _createForOfIteratorHelper(headerRoot), _step15;
      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done; ) {
          var root2 = _step15.value;
          var ref = root2.ref, refresh = root2.refresh;
          var _ref$getBoundingClien = ref.getBoundingClientRect(), left = _ref$getBoundingClien.left, right = _ref$getBoundingClien.right;
          if (left < startView && right > startView || left < endView || right > endView)
            refresh();
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }
    }
  }, {
    key: "getHeaderRootsPadding",
    value: function getHeaderRootsPadding(ref) {
      var paddingLeft = 0;
      var paddingRight = 0;
      var minWidth = 200;
      if (!ref)
        return {
          paddingLeft,
          paddingRight
        };
      var headerRight = this.connector.refs.headerRight;
      var _ref$getBoundingClien2 = ref.getBoundingClientRect(), left = _ref$getBoundingClien2.left, right = _ref$getBoundingClien2.right;
      var _headerRight$getBound2 = headerRight.getBoundingClientRect(), startView = _headerRight$getBound2.left, endView = _headerRight$getBound2.right;
      var windowWidth = right - left;
      var maxPadding = windowWidth - minWidth;
      if (left < startView && right > startView)
        paddingLeft = Math.min(maxPadding, startView - left);
      if (left < endView && right > endView)
        paddingRight = Math.min(maxPadding, right - endView);
      return {
        paddingLeft,
        paddingRight
      };
    }
  }, {
    key: "getEndsByHeaderCell",
    value: function getEndsByHeaderCell(cell) {
      var out = [];
      var _getEnds = function getEnds(cell2) {
        var _cell$children2;
        if (cell2._.isEnd) {
          out.push(cell2);
          return;
        }
        if (!((_cell$children2 = cell2.children) !== null && _cell$children2 !== void 0 && _cell$children2.length))
          return;
        var _iterator16 = _createForOfIteratorHelper(cell2.children), _step16;
        try {
          for (_iterator16.s(); !(_step16 = _iterator16.n()).done; ) {
            var _cell = _step16.value;
            _getEnds(_cell);
          }
        } catch (err) {
          _iterator16.e(err);
        } finally {
          _iterator16.f();
        }
      };
      _getEnds(cell);
      return out;
    }
  }, {
    key: "refreshHeaderRoots",
    value: function refreshHeaderRoots() {
      var headerRoot = this.connector.data.headerRoot;
      var _iterator17 = _createForOfIteratorHelper(headerRoot), _step17;
      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done; ) {
          var root2 = _step17.value;
          root2.refresh();
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }
    }
  }, {
    key: "refreshTableWidth",
    value: function refreshTableWidth() {
      var _this5 = this;
      setTimeout(function() {
        _this5.connector.refresh.scrollbarHorizontal();
        _this5.connector.refresh.scrollbarVertical();
        _this5.recalcHeaderRootsPadding();
        _this5.connector.refs.unitable.style["maxWidth"] = "".concat(_this5.getTotalRowWidth(), "px");
      }, 0);
    }
  }, {
    key: "saveTableSettingsToLocaleStorage",
    value: function saveTableSettingsToLocaleStorage() {
      var _this$connector9 = this.connector, _sizes = _this$connector9.sizes, showColumns = _this$connector9.showColumns, orderTree = _this$connector9.orderTree, orderEnds = _this$connector9.orderEnds, header = _this$connector9.header, options = _this$connector9.options;
      var saveSettingsInLocaleStorage = options.saveSettingsInLocaleStorage, background = options.background, resize = options.resize, initialSizes = options.initialSizes, columns = options.columns, editableSettings = options.editableSettings, other = options.other;
      if (!saveSettingsInLocaleStorage)
        return;
      var sizes = JSON.parse(JSON.stringify(_sizes));
      if (initialSizes !== null && initialSizes !== void 0 && initialSizes.columnsWidth && !(resize !== null && resize !== void 0 && resize.columnsWidth) && !(editableSettings !== null && editableSettings !== void 0 && editableSettings.resizeColumnsWidth)) {
        delete sizes.columnsWidth;
      }
      var getTableFormat = function getTableFormat2() {
        var out = [];
        var _next = function next(children) {
          var _iterator18 = _createForOfIteratorHelper(children), _step18;
          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done; ) {
              var _cell$children3;
              var cell = _step18.value;
              if ((_cell$children3 = cell.children) !== null && _cell$children3 !== void 0 && _cell$children3.length) {
                _next(cell.children);
              }
              out.push(cell._.format || null);
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }
        };
        _next(header);
        return out;
      };
      var oldData = JSON.parse(localStorage.getItem("unitables_data") || "{}");
      var savedData = _objectSpread2(_objectSpread2({}, oldData), {}, _defineProperty$7({}, this.tableName, {
        sizes,
        showColumns,
        orderTree,
        orderEnds,
        format: getTableFormat(),
        options: {
          background,
          resize,
          columns,
          other
        }
      }));
      localStorage.setItem("unitables_data", JSON.stringify(savedData));
    }
  }, {
    key: "restoreTableSettingsFromLocaleStorage",
    value: function restoreTableSettingsFromLocaleStorage() {
      var _this6 = this;
      var _this$connector10 = this.connector, header = _this$connector10.header, saveSettingsInLocaleStorage = _this$connector10.options.saveSettingsInLocaleStorage;
      if (!saveSettingsInLocaleStorage)
        return;
      var totalData = JSON.parse(localStorage.getItem("unitables_data") || "{}");
      var data = totalData[this.tableName];
      if (!data)
        return;
      var setTableFormat = function setTableFormat2(format2) {
        var ordinalIndex = 0;
        var _next2 = function next(children) {
          var _iterator19 = _createForOfIteratorHelper(children), _step19;
          try {
            var _loop22 = function _loop23() {
              var _cell$children4;
              var cell = _step19.value;
              if ((_cell$children4 = cell.children) !== null && _cell$children4 !== void 0 && _cell$children4.length) {
                _next2(cell.children);
              }
              if (format2[ordinalIndex]) {
                cell._.format = format2[ordinalIndex];
                setTimeout(function() {
                  _this6.refreshColumnsTree({
                    data: cell._.format,
                    cell,
                    connectorIndex: "format",
                    isObject: true
                  });
                }, 0);
              }
              ordinalIndex++;
            };
            for (_iterator19.s(); !(_step19 = _iterator19.n()).done; ) {
              _loop22();
            }
          } catch (err) {
            _iterator19.e(err);
          } finally {
            _iterator19.f();
          }
        };
        _next2(header);
      };
      for (var key in data) {
        if (key === "format") {
          setTableFormat(data[key]);
        } else {
          if (key === "options") {
            for (var optionKey in data.options) {
              this.connector.options[optionKey] = data.options[optionKey];
            }
          } else {
            this.connector[key] = data[key];
          }
        }
      }
      this.orderTreeToOrderEnds();
    }
  }, {
    key: "refreshColumn",
    value: function refreshColumn(num) {
      var _iterator20 = _createForOfIteratorHelper(this.connector.refresh.column[num]), _step20;
      try {
        for (_iterator20.s(); !(_step20 = _iterator20.n()).done; ) {
          var func = _step20.value;
          func();
        }
      } catch (err) {
        _iterator20.e(err);
      } finally {
        _iterator20.f();
      }
    }
  }, {
    key: "refreshAllColumns",
    value: function refreshAllColumns() {
      var _iterator21 = _createForOfIteratorHelper(this.connector.refresh.column), _step21;
      try {
        for (_iterator21.s(); !(_step21 = _iterator21.n()).done; ) {
          var column = _step21.value;
          var _iterator22 = _createForOfIteratorHelper(column), _step22;
          try {
            for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
              var func = _step22.value;
              func();
            }
          } catch (err) {
            _iterator22.e(err);
          } finally {
            _iterator22.f();
          }
        }
      } catch (err) {
        _iterator21.e(err);
      } finally {
        _iterator21.f();
      }
    }
  }, {
    key: "correctionRowsLength",
    value: function correctionRowsLength(rows, length) {
      var out = [];
      var text = "\u041F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u0412\u0435\u043D\u0435\u0441\u0443\u044D\u043B\u044B \u0440\u0435\u0448\u0438\u043B\u043E \u043E\u0442\u043E\u0437\u0432\u0430\u0442\u044C \u0432\u0435\u0441\u044C \u0434\u0438\u043F\u043B\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B \u0438\u0437 \u0410\u0440\u0433\u0435\u043D\u0442\u0438\u043D\u044B, \u0414\u043E\u043C\u0438\u043D\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0439 \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0438, \u041A\u043E\u0441\u0442\u0430-\u0420\u0438\u043A\u0438, \u041F\u0430\u043D\u0430\u043C\u044B, \u041F\u0435\u0440\u0443, \u0423\u0440\u0443\u0433\u0432\u0430\u044F \u0438 \u0427\u0438\u043B\u0438, \u0432\u043B\u0430\u0441\u0442\u0438 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0440\u0430\u0441\u043A\u0440\u0438\u0442\u0438\u043A\u043E\u0432\u0430\u043B\u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043F\u0440\u043E\u0448\u0435\u0434\u0448\u0438\u0445 \u043F\u0440\u0435\u0437\u0438\u0434\u0435\u043D\u0442\u0441\u043A\u0438\u0445 \u0432\u044B\u0431\u043E\u0440\u043E\u0432. \u0421\u043E\u0433\u043B\u0430\u0441\u043D\u043E \u0431\u044E\u043B\u043B\u0435\u0442\u0435\u043D\u044E \u041D\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0438\u0437\u0431\u0438\u0440\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043E\u0432\u0435\u0442\u0430, \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043D\u043E\u043C\u0443 \u043F\u043E\u0441\u043B\u0435 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 80% \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u043E\u0432, \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0433\u043E \u043B\u0438\u0434\u0435\u0440\u0430 \u041D\u0438\u043A\u043E\u043B\u0430\u0441\u0430 \u041C\u0430\u0434\u0443\u0440\u043E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u043B\u0438 5 150 092 \u0438\u0437\u0431\u0438\u0440\u0430\u0442\u0435\u043B\u044F (51,2% \u043F\u0440\u043E\u0433\u043E\u043B\u043E\u0441\u043E\u0432\u0430\u0432\u0448\u0438\u0445). \u0413\u043B\u0430\u0432\u0430 \u0410\u0440\u0433\u0435\u043D\u0442\u0438\u043D\u044B \u0425\u0430\u0432\u044C\u0435\u0440 \u041C\u0438\u043B\u0435\u0439 \u043D\u0435 \u043F\u0440\u0438\u0437\u043D\u0430\u043B \u043F\u043E\u0431\u0435\u0434\u0443 \u041C\u0430\u0434\u0443\u0440\u043E \u043D\u0430 \u0432\u044B\u0431\u043E\u0440\u0430\u0445 \u0432 \u0412\u0435\u043D\u0435\u0441\u0443\u044D\u043B\u0435.";
      var getRandomInt = function getRandomInt2(min2, max2) {
        min2 = Math.ceil(min2);
        max2 = Math.floor(max2);
        return Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
      };
      if (!(rows !== null && rows !== void 0 && rows.length))
        return out;
      var rowCorrection = function rowCorrection2(row2) {
        var addCount = length - row2.length;
        for (var i = 0; i < addCount; i++) {
          var from2 = getRandomInt(0, 400);
          var _length = getRandomInt(3, 90);
          row2.push({
            value: text.slice(from2, from2 + _length)
          });
        }
        return row2.slice(0, length);
      };
      var _iterator23 = _createForOfIteratorHelper(rows), _step23;
      try {
        for (_iterator23.s(); !(_step23 = _iterator23.n()).done; ) {
          var row = _step23.value;
          out.push(_objectSpread2({}, rowCorrection(row)));
        }
      } catch (err) {
        _iterator23.e(err);
      } finally {
        _iterator23.f();
      }
      return out;
    }
  }, {
    key: "splitRowByLeftAndRight",
    value: function splitRowByLeftAndRight(row, num) {
      return [row.slice(0, num), row.slice(num)];
    }
  }, {
    key: "getBodyHeight",
    value: function getBodyHeight() {
      var _this$connector11 = this.connector, _this$connector11$siz = _this$connector11.sizes, headerHeight = _this$connector11$siz.headerHeight, paginatorHeight = _this$connector11$siz.paginatorHeight, hasPaginator = _this$connector11.tableHas.paginator;
      var additionalHeight = headerHeight + (hasPaginator ? paginatorHeight : 0);
      return "calc(100% - ".concat(additionalHeight, "px)");
    }
  }, {
    key: "getLeftPartRowWidth",
    value: function getLeftPartRowWidth() {
      var _this$connector12 = this.connector, numberFixedLeftColumnsEnds = _this$connector12.numberFixedLeftColumnsEnds, columnsWidth = _this$connector12.sizes.columnsWidth, showColumns = _this$connector12.showColumns;
      var out = 0;
      for (var i = 0; i < numberFixedLeftColumnsEnds; i++) {
        if (showColumns[i]) {
          out += columnsWidth[i];
        }
      }
      return out;
    }
  }, {
    key: "getRightPartRowWidth",
    value: function getRightPartRowWidth() {
      var _this$connector13 = this.connector, numberFixedLeftColumnsEnds = _this$connector13.numberFixedLeftColumnsEnds, columnsWidth = _this$connector13.sizes.columnsWidth, showColumns = _this$connector13.showColumns;
      var out = 0;
      for (var i = numberFixedLeftColumnsEnds; i < columnsWidth.length; i++) {
        if (showColumns[i]) {
          out += columnsWidth[i];
        }
      }
      return out;
    }
  }, {
    key: "getTotalRowWidth",
    value: function getTotalRowWidth() {
      var _this$connector14 = this.connector, columnsWidth = _this$connector14.sizes.columnsWidth, showColumns = _this$connector14.showColumns;
      var out = 0;
      for (var i in columnsWidth) {
        if (showColumns[i]) {
          out += columnsWidth[i];
        }
      }
      return out;
    }
  }, {
    key: "refreshColumnsTree",
    value: function refreshColumnsTree(_ref3) {
      var data = _ref3.data, cell = _ref3.cell, connectorIndex = _ref3.connectorIndex, isObject2 = _ref3.isObject;
      var arr = this.connector[connectorIndex];
      var refreshList = [];
      var _getChildren2 = function getChildren(children) {
        var _iterator24 = _createForOfIteratorHelper(children), _step24;
        try {
          for (_iterator24.s(); !(_step24 = _iterator24.n()).done; ) {
            var _item$children3;
            var item = _step24.value;
            if ((_item$children3 = item.children) !== null && _item$children3 !== void 0 && _item$children3.length) {
              _getChildren2(item.children);
            } else {
              refreshList.push(item._.endIndex);
            }
          }
        } catch (err) {
          _iterator24.e(err);
        } finally {
          _iterator24.f();
        }
      };
      if (isNaN(cell._.endIndex))
        _getChildren2(cell.children);
      else
        refreshList[0] = cell._.endIndex;
      cell._[connectorIndex] = data;
      for (var _i2 = 0, _refreshList = refreshList; _i2 < _refreshList.length; _i2++) {
        var cellIndex = _refreshList[_i2];
        arr[cellIndex] = this.recalcDataByCellIndex(cellIndex, connectorIndex, isObject2);
        this.refreshColumn(cellIndex);
      }
    }
  }, {
    key: "recalcDataByCellIndex",
    value: function recalcDataByCellIndex(cellIndex, connectorIndex, isObject2) {
      var cell = this.headerCellsByCellIndex[cellIndex];
      var data = cell._[connectorIndex] || null;
      var concat = function concat2(_old, _new) {
        var out = _objectSpread2({}, _old);
        for (var index in _new) {
          if (!out[index])
            out[index] = _new[index];
        }
        return out;
      };
      while ((_cell2 = cell) !== null && _cell2 !== void 0 && _cell2._.parent && (!data || isObject2)) {
        var _cell2;
        cell = cell._.parent;
        if (cell._[connectorIndex]) {
          data = isObject2 ? concat(data, cell._[connectorIndex]) : cell._[connectorIndex];
        }
      }
      return data;
    }
  }, {
    key: "getSearchContextByCellIndex",
    value: function getSearchContextByCellIndex(cellIndex) {
      return this.connector.searchContext[cellIndex];
    }
  }, {
    key: "getFormatByCellIndex",
    value: function getFormatByCellIndex(cellIndex) {
      return this.connector.format[cellIndex];
    }
  }, {
    key: "storeGetPagesId",
    value: function storeGetPagesId() {
      var pageLength = this.connector.params.pageLength;
      return "unitable.".concat(this.tableName, ".pages.length ").concat(pageLength);
    }
  }, {
    key: "storeGetPageId",
    value: function storeGetPageId(pNum) {
      var _this$connector15 = this.connector, pageNum = _this$connector15.params.pageNum, sortCell = _this$connector15.sortCell, searchContext = _this$connector15.searchContext;
      var _iterator25 = _createForOfIteratorHelper(searchContext), _step25;
      try {
        for (_iterator25.s(); !(_step25 = _iterator25.n()).done; ) {
          var search = _step25.value;
          if (search)
            return null;
        }
      } catch (err) {
        _iterator25.e(err);
      } finally {
        _iterator25.f();
      }
      if (sortCell)
        return null;
      return "".concat(this.storeGetPagesId(), ".").concat(!isNaN(pNum) ? pNum : pageNum);
    }
  }, {
    key: "storeGetAnyPageId",
    value: function storeGetAnyPageId(pNum) {
      var _this$connector16 = this.connector, _this$connector16$par = _this$connector16.params, pageNum = _this$connector16$par.pageNum, pageLength = _this$connector16$par.pageLength, sortCell = _this$connector16.sortCell, searchContext = _this$connector16.searchContext, searchLogicAND = _this$connector16.options.other.searchLogicAND;
      var out = "unitable.".concat(this.tableName, ".anyPages.length=").concat(pageLength);
      var searchType = "";
      for (var i in searchContext) {
        if (searchContext[i]) {
          out += "&search".concat(i, "=").concat(searchContext[i]);
          searchType = "&searchType=".concat(searchLogicAND ? "AND" : "OR");
        }
      }
      out += searchType;
      if (sortCell) {
        var _sortCell$_ = sortCell._, ordinalIndex = _sortCell$_.ordinalIndex, sort2 = _sortCell$_.sort;
        out += "&sort".concat(ordinalIndex, "=").concat(sort2);
      }
      return out + ".".concat(!isNaN(pNum) ? pNum : pageNum);
    }
  }, {
    key: "storeGetAnyRowsId",
    value: function storeGetAnyRowsId(props) {
      var _ref4 = props || {}, withoutSort = _ref4.withoutSort;
      var _this$connector17 = this.connector, sortCell = _this$connector17.sortCell, searchContext = _this$connector17.searchContext, searchLogicAND = _this$connector17.options.other.searchLogicAND;
      var out = "";
      var searchType = "";
      for (var i in searchContext) {
        if (searchContext[i]) {
          if (out)
            out += "&";
          out += "search".concat(i, "=").concat(searchContext[i]);
          searchType = "&searchType=".concat(searchLogicAND ? "AND" : "OR");
        }
      }
      out += searchType;
      if (sortCell && !withoutSort) {
        var _sortCell$_2 = sortCell._, ordinalIndex = _sortCell$_2.ordinalIndex, sort2 = _sortCell$_2.sort;
        if (out)
          out += "&";
        out += "sort".concat(ordinalIndex, "=").concat(sort2);
      }
      return out ? "unitable.".concat(this.tableName, ".anyRows.").concat(out) : this.storeGetRowsId();
    }
  }, {
    key: "storeGetRowsId",
    value: function storeGetRowsId() {
      return "unitable.".concat(this.tableName, ".rows");
    }
  }, {
    key: "storeGetPages",
    value: function storeGetPages() {
      return this.storeGet(this.storeGetPagesId());
    }
  }, {
    key: "storeRowsIsLoaded",
    value: function storeRowsIsLoaded() {
      return !!this.storeGetRows();
    }
  }, {
    key: "storeGetRows",
    value: function storeGetRows() {
      return this.storeGet(this.storeGetRowsId());
    }
  }, {
    key: "storeSetRows",
    value: function storeSetRows(rows) {
      Store$1.setState(this.storeGetRowsId(), _toConsumableArray(rows));
    }
  }, {
    key: "storeGet",
    value: function storeGet(id) {
      var data = toJS(Store$1.getState(id));
      if (Array.isArray(data))
        return _toConsumableArray(data);
      if (!!data && _typeof$1(data) === "object")
        return _objectSpread2({}, data);
      return data;
    }
  }, {
    key: "storeGetTotalRowsByDownloadedPages",
    value: function storeGetTotalRowsByDownloadedPages() {
      var count = 0;
      var pages = this.storeGet(this.storeGetPagesId());
      for (var index in pages)
        count += pages[index].length;
      return count;
    }
  }, {
    key: "storeRememberPage",
    value: function storeRememberPage() {
      var _ref5;
      var totalLength = this.connector.params.totalLength;
      if (this.storeRowsIsLoaded())
        return;
      var pageId = this.storeGetPageId();
      if (!pageId) {
        var anyPageId = this.storeGetAnyPageId();
        if (!this.storeGet(anyPageId)) {
          Store$1.setState(anyPageId, _toConsumableArray(this.connector.rowsTree));
        }
        return;
      }
      if (this.storeGetPage())
        return;
      Store$1.setState(pageId, _toConsumableArray(this.connector.rowsTree));
      if (!totalLength)
        return;
      if (this.storeGetTotalRowsByDownloadedPages() !== totalLength)
        return;
      var pages = this.storeGetPages();
      this.storeSetRows((_ref5 = []).concat.apply(_ref5, _toConsumableArray(Object.values(pages))));
    }
  }, {
    key: "storeGetPage",
    value: function storeGetPage(props) {
      console.log("store", toJS(Store$1.getStore()));
      console.log("connector", this.connector);
      var _ref6 = props || {}, _pageNum = _ref6.pageNum;
      var params = this.connector.params;
      var pageId = null;
      var rows = null;
      var pageNum = !isNaN(_pageNum) ? _pageNum : params.pageNum;
      if (this.storeRowsIsLoaded()) {
        return this.storeGetPageFromRows(props);
      }
      pageId = this.storeGetPageId(pageNum);
      if (!pageId)
        pageId = this.storeGetAnyPageId(pageNum);
      rows = this.storeGet(pageId);
      return rows;
    }
  }, {
    key: "storeGetPageFromRows",
    value: function storeGetPageFromRows(props) {
      var _ref7 = props || {}, _pageLength = _ref7.pageLength, _pageNum = _ref7.pageNum;
      var params = this.connector.params;
      var pageLength = _pageLength || params.pageLength;
      var pageNum = !isNaN(_pageNum) ? _pageNum : params.pageNum;
      var rowsOrAnyRowsId = this.storeGetAnyRowsId();
      var rows = this.storeGet(rowsOrAnyRowsId);
      if (!rows) {
        rows = this.storeCreateAndRememberAnyRows(rowsOrAnyRowsId);
      }
      this.connector.params.totalLength = rows.length;
      this.connector.refresh.paginator();
      return rows.slice(pageLength * pageNum, pageLength * (pageNum + 1));
    }
  }, {
    key: "storeCreateAndRememberAnyRows",
    value: function storeCreateAndRememberAnyRows(id) {
      var _this$connector18 = this.connector, sortCell = _this$connector18.sortCell, searchContext = _this$connector18.searchContext;
      var rows = [];
      var idWithoutSort = this.storeGetAnyRowsId({
        withoutSort: true
      });
      rows = this.storeGet(idWithoutSort);
      if (!rows) {
        rows = this.storeGetRows();
        rows = this.storeRowsToFilteredRows(rows, searchContext);
        Store$1.setState(idWithoutSort, _toConsumableArray(rows));
      }
      rows = this.storeRowsToSortedRows(rows, sortCell);
      Store$1.setState(id, _toConsumableArray(rows));
      return rows;
    }
  }, {
    key: "storeRowsToFilteredRows",
    value: function storeRowsToFilteredRows(rows, searchContext) {
      var _this$connector$optio;
      var searchLogicAND = (_this$connector$optio = this.connector.options) === null || _this$connector$optio === void 0 || (_this$connector$optio = _this$connector$optio.other) === null || _this$connector$optio === void 0 ? void 0 : _this$connector$optio.searchLogicAND;
      var out = [];
      var search = [];
      for (var index in searchContext) {
        if (searchContext[index]) {
          search.push({
            index: Number(index),
            text: searchContext[index].toLowerCase()
          });
        }
      }
      if (!search.length)
        return rows;
      var compare = function compare2(row2) {
        for (var _i3 = 0, _search = search; _i3 < _search.length; _i3++) {
          var s = _search[_i3];
          var find = ~String(row2[s.index].value).toLowerCase().indexOf(s.text);
          if (searchLogicAND && !find)
            return false;
          if (!searchLogicAND && find)
            return true;
        }
        return searchLogicAND ? true : false;
      };
      var _checkRow = function checkRow(_ref8) {
        var _row$children2;
        var row2 = _ref8.row, to2 = _ref8.to, level = _ref8.level;
        var root2 = {
          children: [],
          row: row2.row
        };
        if ((_row$children2 = row2.children) !== null && _row$children2 !== void 0 && _row$children2.length) {
          var _iterator26 = _createForOfIteratorHelper(row2.children), _step26;
          try {
            for (_iterator26.s(); !(_step26 = _iterator26.n()).done; ) {
              var child = _step26.value;
              _checkRow({
                row: child,
                to: root2.children,
                level: level + 1
              });
            }
          } catch (err) {
            _iterator26.e(err);
          } finally {
            _iterator26.f();
          }
        }
        var find = compare(root2.row);
        if (root2.children.length || find) {
          to2.push(root2);
          if (!find)
            root2._ = {
              isNotFind: true
            };
        }
      };
      var _iterator27 = _createForOfIteratorHelper(rows), _step27;
      try {
        for (_iterator27.s(); !(_step27 = _iterator27.n()).done; ) {
          var row = _step27.value;
          _checkRow({
            row,
            to: out,
            level: 0
          });
        }
      } catch (err) {
        _iterator27.e(err);
      } finally {
        _iterator27.f();
      }
      return out;
    }
  }, {
    key: "storeRowsToSortedRows",
    value: function storeRowsToSortedRows(rows, sortCell) {
      var _sortCell$_3;
      if (!(sortCell !== null && sortCell !== void 0 && (_sortCell$_3 = sortCell._) !== null && _sortCell$_3 !== void 0 && _sortCell$_3.sort))
        return rows;
      var _ref9 = sortCell || {}, _ref9$_ = _ref9._, ordinalIndex = _ref9$_.ordinalIndex, _direction = _ref9$_.sort;
      var direction = _direction === "up" ? -1 : 1;
      var runCollator = new Intl.Collator("ru");
      var convert = function convert2(cell) {
        return String(cell.row[ordinalIndex].value).toLowerCase().replace(/^\s+/, "");
      };
      var sortFunc = function sortFunc2(a, b) {
        return runCollator.compare(convert(a), convert(b)) * direction;
      };
      var _sort2 = function sort2(arr) {
        arr.sort(sortFunc);
        var _iterator28 = _createForOfIteratorHelper(arr), _step28;
        try {
          for (_iterator28.s(); !(_step28 = _iterator28.n()).done; ) {
            var _item$children4;
            var item = _step28.value;
            if ((_item$children4 = item.children) !== null && _item$children4 !== void 0 && _item$children4.length) {
              _sort2(item.children);
            }
          }
        } catch (err) {
          _iterator28.e(err);
        } finally {
          _iterator28.f();
        }
      };
      _sort2(rows);
      return rows;
    }
  }, {
    key: "setEditableCell",
    value: function setEditableCell(props) {
      if (this.connector.editableCell) {
        console.log("*********** setEditableCell -> stopEditor");
        this.connector.editableCell.stopEditor();
      }
      this.connector.editableCell = props;
    }
  }, {
    key: "getCustomizer",
    value: function getCustomizer(_ref10) {
      var rules = _ref10.customizer, cell = _ref10.cell;
      var out = {
        css: {},
        "class": ""
      };
      var _iterator29 = _createForOfIteratorHelper(rules), _step29;
      try {
        for (_iterator29.s(); !(_step29 = _iterator29.n()).done; ) {
          var rule = _step29.value;
          var css = rule.css, _class = rule["class"], condition = rule.condition;
          var _iterator30 = _createForOfIteratorHelper(condition), _step30;
          try {
            for (_iterator30.s(); !(_step30 = _iterator30.n()).done; ) {
              var OR = _step30.value;
              var isSuccess = true;
              var _iterator31 = _createForOfIteratorHelper(OR), _step31;
              try {
                for (_iterator31.s(); !(_step31 = _iterator31.n()).done; ) {
                  var AND = _step31.value;
                  var match = AND.match(/(\S+)\s+(\S+)\s+(.*)/);
                  if (match) {
                    var _match$slice = match.slice(1), _match$slice2 = _slicedToArray(_match$slice, 3), field = _match$slice2[0], operand = _match$slice2[1], _text = _match$slice2[2];
                    var text = _text.replace(/^\s+/, "");
                    isSuccess = isSuccess && this.checkCondition({
                      field,
                      operand,
                      text,
                      cell
                    });
                  } else {
                    var _match = AND.match(/(\S+)\s+(.*)/);
                    if (_match) {
                      var _match$slice3 = _match.slice(1), _match$slice4 = _slicedToArray(_match$slice3, 2), _field = _match$slice4[0], _operand2 = _match$slice4[1];
                      isSuccess = isSuccess && this.checkCondition({
                        field: _field,
                        operand: _operand2,
                        text: null,
                        cell
                      });
                    } else {
                      this.customizerError('\u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 "'.concat(AND, '"'));
                      return out;
                    }
                  }
                }
              } catch (err) {
                _iterator31.e(err);
              } finally {
                _iterator31.f();
              }
              if (isSuccess) {
                out.css = _objectSpread2(_objectSpread2({}, out.css), css);
                out["class"] += (out["class"] ? " " : "") + _class;
              }
            }
          } catch (err) {
            _iterator30.e(err);
          } finally {
            _iterator30.f();
          }
        }
      } catch (err) {
        _iterator29.e(err);
      } finally {
        _iterator29.f();
      }
      return out;
    }
  }, {
    key: "checkCondition",
    value: function checkCondition(_ref11) {
      var field = _ref11.field, _operand = _ref11.operand, text = _ref11.text, cell = _ref11.cell;
      var value = cell[field];
      var matchNOT = _operand.match(/not\((\S+)\)/);
      var operand = matchNOT ? matchNOT[1] : _operand;
      var NOT = !!matchNOT;
      var result;
      switch (operand) {
        case "match":
          result = value !== null && value !== void 0 && value.match ? !!value.match(RegExp(text)) : false;
          break;
        case "contains":
          result = value !== null && value !== void 0 && value.indexOf ? !!~value.indexOf(text) : false;
          break;
        case "isNumber":
          result = !isNaN(value);
          break;
        case "isUndefined":
          result = value === void 0;
          break;
        case "isTrue":
          result = !!value;
          break;
        case "isFalse":
          result = !value;
          break;
        case "==":
          result = value == text;
          break;
        case "!=":
          result = value != text;
          break;
        case ">":
          result = value > text;
          break;
        case "<":
          result = value < text;
          break;
        case ">=":
          result = value >= text;
          break;
        case "<=":
          result = value <= text;
          break;
        default: {
          this.customizerError('\u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u043E\u043F\u0435\u0440\u0430\u043D\u0434 "'.concat(operand, '"'));
          return false;
        }
      }
      return NOT ? !result : result;
    }
  }, {
    key: "customizerError",
    value: function customizerError(text) {
      var _this7 = this;
      if (!this.errorTexts) {
        this.errorTexts = {};
      }
      if (!this.errorTexts[text]) {
        console.error("\u041E\u0428\u0418\u0411\u041A\u0410 \u0412 \u041E\u041F\u0418\u0421\u0410\u041D\u0418\u0418 \u0423\u0421\u041B\u041E\u0412\u041D\u041E\u0413\u041E \u0424\u041E\u0420\u041C\u0410\u0422\u0418\u0420\u041E\u0412\u0410\u041D\u0418\u042F -- ".concat(text));
        this.errorTexts[text] = true;
        setTimeout(function() {
          _this7.errorTexts = {};
        }, 1e3);
      }
    }
  }]);
}();
var app = "";
export { Table, callTable };
