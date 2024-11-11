var aS = Object.defineProperty;
var iS = (e, t, r) => t in e ? aS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ae = (e, t, r) => iS(e, typeof t != "symbol" ? t + "" : t, r);
import * as _e from "react";
import f, { isValidElement as b0, PureComponent as ii, Component as tt, useState as Cu, forwardRef as _d, memo as Il, useLayoutEffect as Of, useEffect as na, createElement as oS, cloneElement as $l, createRef as xa, useRef as wd, useCallback as y0, createContext as sS, useMemo as Br, useContext as lS } from "react";
import * as uS from "react-dom";
import _0, { unstable_batchedUpdates as cS, createPortal as dS } from "react-dom";
function Sd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function fS(e) {
  if (Array.isArray(e)) return e;
}
function hS(e) {
  if (Array.isArray(e)) return Sd(e);
}
function go(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function pS(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, w0(n.key), n);
  }
}
function mo(e, t, r) {
  return t && pS(e.prototype, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function ye(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Tf(e)) || t) {
      r && (e = r);
      var n = 0, a = function() {
      };
      return {
        s: a,
        n: function() {
          return n >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[n++]
          };
        },
        e: function(l) {
          throw l;
        },
        f: a
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i, o = !0, s = !1;
  return {
    s: function() {
      r = r.call(e);
    },
    n: function() {
      var l = r.next();
      return o = l.done, l;
    },
    e: function(l) {
      s = !0, i = l;
    },
    f: function() {
      try {
        o || r.return == null || r.return();
      } finally {
        if (s) throw i;
      }
    }
  };
}
function _t(e, t, r) {
  return (t = w0(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function le() {
  return le = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, le.apply(null, arguments);
}
function vS(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function gS(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], l = !0, u = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        l = !1;
      } else for (; !(l = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (c) {
      u = !0, a = c;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw a;
      }
    }
    return s;
  }
}
function mS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bS() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Je(e) {
  if (e == null) throw new TypeError("Cannot destructure " + e);
}
function Op(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Op(Object(r), !0).forEach(function(n) {
      _t(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Op(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function yS(e, t) {
  if (e == null) return {};
  var r, n, a = _S(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  }
  return a;
}
function _S(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
function ve(e, t) {
  return fS(e) || gS(e, t) || Tf(e, t) || mS();
}
function Cr(e) {
  return hS(e) || vS(e) || Tf(e) || bS();
}
function wS(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function w0(e) {
  var t = wS(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function xd(e) {
  "@babel/helpers - typeof";
  return xd = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xd(e);
}
function Tf(e, t) {
  if (e) {
    if (typeof e == "string") return Sd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Sd(e, t) : void 0;
  }
}
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var S0;
function J() {
  return S0.apply(null, arguments);
}
function SS(e) {
  S0 = e;
}
function Qr(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Wa(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function Ye(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function kf(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (Ye(e, t))
      return !1;
  return !0;
}
function rr(e) {
  return e === void 0;
}
function ea(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function ws(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function x0(e, t) {
  var r = [], n, a = e.length;
  for (n = 0; n < a; ++n)
    r.push(t(e[n], n));
  return r;
}
function va(e, t) {
  for (var r in t)
    Ye(t, r) && (e[r] = t[r]);
  return Ye(t, "toString") && (e.toString = t.toString), Ye(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function Rn(e, t, r, n) {
  return G0(e, t, r, n, !0).utc();
}
function xS() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function Ce(e) {
  return e._pf == null && (e._pf = xS()), e._pf;
}
var Ed;
Array.prototype.some ? Ed = Array.prototype.some : Ed = function(e) {
  var t = Object(this), r = t.length >>> 0, n;
  for (n = 0; n < r; n++)
    if (n in t && e.call(this, t[n], n, t))
      return !0;
  return !1;
};
function Rf(e) {
  var t = null, r = !1, n = e._d && !isNaN(e._d.getTime());
  if (n && (t = Ce(e), r = Ed.call(t.parsedDateParts, function(a) {
    return a != null;
  }), n = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r), e._strict && (n = n && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = n;
  else
    return n;
  return e._isValid;
}
function Du(e) {
  var t = Rn(NaN);
  return e != null ? va(Ce(t), e) : Ce(t).userInvalidated = !0, t;
}
var Tp = J.momentProperties = [], Tc = !1;
function Pf(e, t) {
  var r, n, a, i = Tp.length;
  if (rr(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), rr(t._i) || (e._i = t._i), rr(t._f) || (e._f = t._f), rr(t._l) || (e._l = t._l), rr(t._strict) || (e._strict = t._strict), rr(t._tzm) || (e._tzm = t._tzm), rr(t._isUTC) || (e._isUTC = t._isUTC), rr(t._offset) || (e._offset = t._offset), rr(t._pf) || (e._pf = Ce(t)), rr(t._locale) || (e._locale = t._locale), i > 0)
    for (r = 0; r < i; r++)
      n = Tp[r], a = t[n], rr(a) || (e[n] = a);
  return e;
}
function Ss(e) {
  Pf(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Tc === !1 && (Tc = !0, J.updateOffset(this), Tc = !1);
}
function Jr(e) {
  return e instanceof Ss || e != null && e._isAMomentObject != null;
}
function E0(e) {
  J.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function jr(e, t) {
  var r = !0;
  return va(function() {
    if (J.deprecationHandler != null && J.deprecationHandler(null, e), r) {
      var n = [], a, i, o, s = arguments.length;
      for (i = 0; i < s; i++) {
        if (a = "", typeof arguments[i] == "object") {
          a += `
[` + i + "] ";
          for (o in arguments[0])
            Ye(arguments[0], o) && (a += o + ": " + arguments[0][o] + ", ");
          a = a.slice(0, -2);
        } else
          a = arguments[i];
        n.push(a);
      }
      E0(
        e + `
Arguments: ` + Array.prototype.slice.call(n).join("") + `
` + new Error().stack
      ), r = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var kp = {};
function C0(e, t) {
  J.deprecationHandler != null && J.deprecationHandler(e, t), kp[e] || (E0(t), kp[e] = !0);
}
J.suppressDeprecationWarnings = !1;
J.deprecationHandler = null;
function Pn(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function ES(e) {
  var t, r;
  for (r in e)
    Ye(e, r) && (t = e[r], Pn(t) ? this[r] = t : this["_" + r] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Cd(e, t) {
  var r = va({}, e), n;
  for (n in t)
    Ye(t, n) && (Wa(e[n]) && Wa(t[n]) ? (r[n] = {}, va(r[n], e[n]), va(r[n], t[n])) : t[n] != null ? r[n] = t[n] : delete r[n]);
  for (n in e)
    Ye(e, n) && !Ye(t, n) && Wa(e[n]) && (r[n] = va({}, r[n]));
  return r;
}
function Nf(e) {
  e != null && this.set(e);
}
var Dd;
Object.keys ? Dd = Object.keys : Dd = function(e) {
  var t, r = [];
  for (t in e)
    Ye(e, t) && r.push(t);
  return r;
};
var CS = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function DS(e, t, r) {
  var n = this._calendar[e] || this._calendar.sameElse;
  return Pn(n) ? n.call(t, r) : n;
}
function Tn(e, t, r) {
  var n = "" + Math.abs(e), a = t - n.length, i = e >= 0;
  return (i ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + n;
}
var Mf = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Ks = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, kc = {}, zi = {};
function he(e, t, r, n) {
  var a = n;
  typeof n == "string" && (a = function() {
    return this[n]();
  }), e && (zi[e] = a), t && (zi[t[0]] = function() {
    return Tn(a.apply(this, arguments), t[1], t[2]);
  }), r && (zi[r] = function() {
    return this.localeData().ordinal(
      a.apply(this, arguments),
      e
    );
  });
}
function OS(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function TS(e) {
  var t = e.match(Mf), r, n;
  for (r = 0, n = t.length; r < n; r++)
    zi[t[r]] ? t[r] = zi[t[r]] : t[r] = OS(t[r]);
  return function(a) {
    var i = "", o;
    for (o = 0; o < n; o++)
      i += Pn(t[o]) ? t[o].call(a, e) : t[o];
    return i;
  };
}
function ml(e, t) {
  return e.isValid() ? (t = D0(t, e.localeData()), kc[t] = kc[t] || TS(t), kc[t](e)) : e.localeData().invalidDate();
}
function D0(e, t) {
  var r = 5;
  function n(a) {
    return t.longDateFormat(a) || a;
  }
  for (Ks.lastIndex = 0; r >= 0 && Ks.test(e); )
    e = e.replace(
      Ks,
      n
    ), Ks.lastIndex = 0, r -= 1;
  return e;
}
var kS = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function RS(e) {
  var t = this._longDateFormat[e], r = this._longDateFormat[e.toUpperCase()];
  return t || !r ? t : (this._longDateFormat[e] = r.match(Mf).map(function(n) {
    return n === "MMMM" || n === "MM" || n === "DD" || n === "dddd" ? n.slice(1) : n;
  }).join(""), this._longDateFormat[e]);
}
var PS = "Invalid date";
function NS() {
  return this._invalidDate;
}
var MS = "%d", AS = /\d{1,2}/;
function IS(e) {
  return this._ordinal.replace("%d", e);
}
var $S = {
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
function LS(e, t, r, n) {
  var a = this._relativeTime[r];
  return Pn(a) ? a(e, t, r, n) : a.replace(/%d/i, e);
}
function FS(e, t) {
  var r = this._relativeTime[e > 0 ? "future" : "past"];
  return Pn(r) ? r(t) : r.replace(/%s/i, t);
}
var Rp = {
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
function Yr(e) {
  return typeof e == "string" ? Rp[e] || Rp[e.toLowerCase()] : void 0;
}
function Af(e) {
  var t = {}, r, n;
  for (n in e)
    Ye(e, n) && (r = Yr(n), r && (t[r] = e[n]));
  return t;
}
var HS = {
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
function BS(e) {
  var t = [], r;
  for (r in e)
    Ye(e, r) && t.push({ unit: r, priority: HS[r] });
  return t.sort(function(n, a) {
    return n.priority - a.priority;
  }), t;
}
var O0 = /\d/, yr = /\d\d/, T0 = /\d{3}/, If = /\d{4}/, Ou = /[+-]?\d{6}/, dt = /\d\d?/, k0 = /\d\d\d\d?/, R0 = /\d\d\d\d\d\d?/, Tu = /\d{1,3}/, $f = /\d{1,4}/, ku = /[+-]?\d{1,6}/, bo = /\d+/, Ru = /[+-]?\d+/, jS = /Z|[+-]\d\d:?\d\d/gi, Pu = /Z|[+-]\d\d(?::?\d\d)?/gi, YS = /[+-]?\d+(\.\d{1,3})?/, xs = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, yo = /^[1-9]\d?/, Lf = /^([1-9]\d|\d)/, Ll;
Ll = {};
function ue(e, t, r) {
  Ll[e] = Pn(t) ? t : function(n, a) {
    return n && r ? r : t;
  };
}
function WS(e, t) {
  return Ye(Ll, e) ? Ll[e](t._strict, t._locale) : new RegExp(VS(e));
}
function VS(e) {
  return zn(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, r, n, a, i) {
        return r || n || a || i;
      }
    )
  );
}
function zn(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function Dr(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function Ne(e) {
  var t = +e, r = 0;
  return t !== 0 && isFinite(t) && (r = Dr(t)), r;
}
var Od = {};
function et(e, t) {
  var r, n = t, a;
  for (typeof e == "string" && (e = [e]), ea(t) && (n = function(i, o) {
    o[t] = Ne(i);
  }), a = e.length, r = 0; r < a; r++)
    Od[e[r]] = n;
}
function Es(e, t) {
  et(e, function(r, n, a, i) {
    a._w = a._w || {}, t(r, a._w, a, i);
  });
}
function US(e, t, r) {
  t != null && Ye(Od, e) && Od[e](t, r._a, r, e);
}
function Nu(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var qt = 0, Un = 1, pn = 2, Nt = 3, Gr = 4, Gn = 5, Ha = 6, GS = 7, zS = 8;
he("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? Tn(e, 4) : "+" + e;
});
he(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
he(0, ["YYYY", 4], 0, "year");
he(0, ["YYYYY", 5], 0, "year");
he(0, ["YYYYYY", 6, !0], 0, "year");
ue("Y", Ru);
ue("YY", dt, yr);
ue("YYYY", $f, If);
ue("YYYYY", ku, Ou);
ue("YYYYYY", ku, Ou);
et(["YYYYY", "YYYYYY"], qt);
et("YYYY", function(e, t) {
  t[qt] = e.length === 2 ? J.parseTwoDigitYear(e) : Ne(e);
});
et("YY", function(e, t) {
  t[qt] = J.parseTwoDigitYear(e);
});
et("Y", function(e, t) {
  t[qt] = parseInt(e, 10);
});
function rs(e) {
  return Nu(e) ? 366 : 365;
}
J.parseTwoDigitYear = function(e) {
  return Ne(e) + (Ne(e) > 68 ? 1900 : 2e3);
};
var P0 = _o("FullYear", !0);
function qS() {
  return Nu(this.year());
}
function _o(e, t) {
  return function(r) {
    return r != null ? (N0(this, e, r), J.updateOffset(this, t), this) : os(this, e);
  };
}
function os(e, t) {
  if (!e.isValid())
    return NaN;
  var r = e._d, n = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return n ? r.getUTCMilliseconds() : r.getMilliseconds();
    case "Seconds":
      return n ? r.getUTCSeconds() : r.getSeconds();
    case "Minutes":
      return n ? r.getUTCMinutes() : r.getMinutes();
    case "Hours":
      return n ? r.getUTCHours() : r.getHours();
    case "Date":
      return n ? r.getUTCDate() : r.getDate();
    case "Day":
      return n ? r.getUTCDay() : r.getDay();
    case "Month":
      return n ? r.getUTCMonth() : r.getMonth();
    case "FullYear":
      return n ? r.getUTCFullYear() : r.getFullYear();
    default:
      return NaN;
  }
}
function N0(e, t, r) {
  var n, a, i, o, s;
  if (!(!e.isValid() || isNaN(r))) {
    switch (n = e._d, a = e._isUTC, t) {
      case "Milliseconds":
        return void (a ? n.setUTCMilliseconds(r) : n.setMilliseconds(r));
      case "Seconds":
        return void (a ? n.setUTCSeconds(r) : n.setSeconds(r));
      case "Minutes":
        return void (a ? n.setUTCMinutes(r) : n.setMinutes(r));
      case "Hours":
        return void (a ? n.setUTCHours(r) : n.setHours(r));
      case "Date":
        return void (a ? n.setUTCDate(r) : n.setDate(r));
      case "FullYear":
        break;
      default:
        return;
    }
    i = r, o = e.month(), s = e.date(), s = s === 29 && o === 1 && !Nu(i) ? 28 : s, a ? n.setUTCFullYear(i, o, s) : n.setFullYear(i, o, s);
  }
}
function KS(e) {
  return e = Yr(e), Pn(this[e]) ? this[e]() : this;
}
function XS(e, t) {
  if (typeof e == "object") {
    e = Af(e);
    var r = BS(e), n, a = r.length;
    for (n = 0; n < a; n++)
      this[r[n].unit](e[r[n].unit]);
  } else if (e = Yr(e), Pn(this[e]))
    return this[e](t);
  return this;
}
function QS(e, t) {
  return (e % t + t) % t;
}
var xt;
Array.prototype.indexOf ? xt = Array.prototype.indexOf : xt = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Ff(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var r = QS(t, 12);
  return e += (t - r) / 12, r === 1 ? Nu(e) ? 29 : 28 : 31 - r % 7 % 2;
}
he("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
he("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
he("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
ue("M", dt, yo);
ue("MM", dt, yr);
ue("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
ue("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
et(["M", "MM"], function(e, t) {
  t[Un] = Ne(e) - 1;
});
et(["MMM", "MMMM"], function(e, t, r, n) {
  var a = r._locale.monthsParse(e, n, r._strict);
  a != null ? t[Un] = a : Ce(r).invalidMonth = e;
});
var JS = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), M0 = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), A0 = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, ZS = xs, ex = xs;
function tx(e, t) {
  return e ? Qr(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || A0).test(t) ? "format" : "standalone"][e.month()] : Qr(this._months) ? this._months : this._months.standalone;
}
function rx(e, t) {
  return e ? Qr(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[A0.test(t) ? "format" : "standalone"][e.month()] : Qr(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function nx(e, t, r) {
  var n, a, i, o = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n)
      i = Rn([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(
        i,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[n] = this.months(i, "").toLocaleLowerCase();
  return r ? t === "MMM" ? (a = xt.call(this._shortMonthsParse, o), a !== -1 ? a : null) : (a = xt.call(this._longMonthsParse, o), a !== -1 ? a : null) : t === "MMM" ? (a = xt.call(this._shortMonthsParse, o), a !== -1 ? a : (a = xt.call(this._longMonthsParse, o), a !== -1 ? a : null)) : (a = xt.call(this._longMonthsParse, o), a !== -1 ? a : (a = xt.call(this._shortMonthsParse, o), a !== -1 ? a : null));
}
function ax(e, t, r) {
  var n, a, i;
  if (this._monthsParseExact)
    return nx.call(this, e, t, r);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
    if (a = Rn([2e3, n]), r && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp(
      "^" + this.months(a, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[n] = new RegExp(
      "^" + this.monthsShort(a, "").replace(".", "") + "$",
      "i"
    )), !r && !this._monthsParse[n] && (i = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[n] = new RegExp(i.replace(".", ""), "i")), r && t === "MMMM" && this._longMonthsParse[n].test(e))
      return n;
    if (r && t === "MMM" && this._shortMonthsParse[n].test(e))
      return n;
    if (!r && this._monthsParse[n].test(e))
      return n;
  }
}
function I0(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = Ne(t);
    else if (t = e.localeData().monthsParse(t), !ea(t))
      return e;
  }
  var r = t, n = e.date();
  return n = n < 29 ? n : Math.min(n, Ff(e.year(), r)), e._isUTC ? e._d.setUTCMonth(r, n) : e._d.setMonth(r, n), e;
}
function $0(e) {
  return e != null ? (I0(this, e), J.updateOffset(this, !0), this) : os(this, "Month");
}
function ix() {
  return Ff(this.year(), this.month());
}
function ox(e) {
  return this._monthsParseExact ? (Ye(this, "_monthsRegex") || L0.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Ye(this, "_monthsShortRegex") || (this._monthsShortRegex = ZS), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function sx(e) {
  return this._monthsParseExact ? (Ye(this, "_monthsRegex") || L0.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (Ye(this, "_monthsRegex") || (this._monthsRegex = ex), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function L0() {
  function e(l, u) {
    return u.length - l.length;
  }
  var t = [], r = [], n = [], a, i, o, s;
  for (a = 0; a < 12; a++)
    i = Rn([2e3, a]), o = zn(this.monthsShort(i, "")), s = zn(this.months(i, "")), t.push(o), r.push(s), n.push(s), n.push(o);
  t.sort(e), r.sort(e), n.sort(e), this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function lx(e, t, r, n, a, i, o) {
  var s;
  return e < 100 && e >= 0 ? (s = new Date(e + 400, t, r, n, a, i, o), isFinite(s.getFullYear()) && s.setFullYear(e)) : s = new Date(e, t, r, n, a, i, o), s;
}
function ss(e) {
  var t, r;
  return e < 100 && e >= 0 ? (r = Array.prototype.slice.call(arguments), r[0] = e + 400, t = new Date(Date.UTC.apply(null, r)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Fl(e, t, r) {
  var n = 7 + t - r, a = (7 + ss(e, 0, n).getUTCDay() - t) % 7;
  return -a + n - 1;
}
function F0(e, t, r, n, a) {
  var i = (7 + r - n) % 7, o = Fl(e, n, a), s = 1 + 7 * (t - 1) + i + o, l, u;
  return s <= 0 ? (l = e - 1, u = rs(l) + s) : s > rs(e) ? (l = e + 1, u = s - rs(e)) : (l = e, u = s), {
    year: l,
    dayOfYear: u
  };
}
function ls(e, t, r) {
  var n = Fl(e.year(), t, r), a = Math.floor((e.dayOfYear() - n - 1) / 7) + 1, i, o;
  return a < 1 ? (o = e.year() - 1, i = a + qn(o, t, r)) : a > qn(e.year(), t, r) ? (i = a - qn(e.year(), t, r), o = e.year() + 1) : (o = e.year(), i = a), {
    week: i,
    year: o
  };
}
function qn(e, t, r) {
  var n = Fl(e, t, r), a = Fl(e + 1, t, r);
  return (rs(e) - n + a) / 7;
}
he("w", ["ww", 2], "wo", "week");
he("W", ["WW", 2], "Wo", "isoWeek");
ue("w", dt, yo);
ue("ww", dt, yr);
ue("W", dt, yo);
ue("WW", dt, yr);
Es(
  ["w", "ww", "W", "WW"],
  function(e, t, r, n) {
    t[n.substr(0, 1)] = Ne(e);
  }
);
function ux(e) {
  return ls(e, this._week.dow, this._week.doy).week;
}
var cx = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function dx() {
  return this._week.dow;
}
function fx() {
  return this._week.doy;
}
function hx(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function px(e) {
  var t = ls(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
he("d", 0, "do", "day");
he("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
he("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
he("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
he("e", 0, 0, "weekday");
he("E", 0, 0, "isoWeekday");
ue("d", dt);
ue("e", dt);
ue("E", dt);
ue("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
ue("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
ue("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Es(["dd", "ddd", "dddd"], function(e, t, r, n) {
  var a = r._locale.weekdaysParse(e, n, r._strict);
  a != null ? t.d = a : Ce(r).invalidWeekday = e;
});
Es(["d", "e", "E"], function(e, t, r, n) {
  t[n] = Ne(e);
});
function vx(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function gx(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Hf(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var mx = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), H0 = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), bx = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), yx = xs, _x = xs, wx = xs;
function Sx(e, t) {
  var r = Qr(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Hf(r, this._week.dow) : e ? r[e.day()] : r;
}
function xx(e) {
  return e === !0 ? Hf(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Ex(e) {
  return e === !0 ? Hf(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Cx(e, t, r) {
  var n, a, i, o = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n)
      i = Rn([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(
        i,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(
        i,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(i, "").toLocaleLowerCase();
  return r ? t === "dddd" ? (a = xt.call(this._weekdaysParse, o), a !== -1 ? a : null) : t === "ddd" ? (a = xt.call(this._shortWeekdaysParse, o), a !== -1 ? a : null) : (a = xt.call(this._minWeekdaysParse, o), a !== -1 ? a : null) : t === "dddd" ? (a = xt.call(this._weekdaysParse, o), a !== -1 || (a = xt.call(this._shortWeekdaysParse, o), a !== -1) ? a : (a = xt.call(this._minWeekdaysParse, o), a !== -1 ? a : null)) : t === "ddd" ? (a = xt.call(this._shortWeekdaysParse, o), a !== -1 || (a = xt.call(this._weekdaysParse, o), a !== -1) ? a : (a = xt.call(this._minWeekdaysParse, o), a !== -1 ? a : null)) : (a = xt.call(this._minWeekdaysParse, o), a !== -1 || (a = xt.call(this._weekdaysParse, o), a !== -1) ? a : (a = xt.call(this._shortWeekdaysParse, o), a !== -1 ? a : null));
}
function Dx(e, t, r) {
  var n, a, i;
  if (this._weekdaysParseExact)
    return Cx.call(this, e, t, r);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
    if (a = Rn([2e3, 1]).day(n), r && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp(
      "^" + this.weekdays(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[n] || (i = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[n] = new RegExp(i.replace(".", ""), "i")), r && t === "dddd" && this._fullWeekdaysParse[n].test(e))
      return n;
    if (r && t === "ddd" && this._shortWeekdaysParse[n].test(e))
      return n;
    if (r && t === "dd" && this._minWeekdaysParse[n].test(e))
      return n;
    if (!r && this._weekdaysParse[n].test(e))
      return n;
  }
}
function Ox(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = os(this, "Day");
  return e != null ? (e = vx(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Tx(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function kx(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = gx(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Rx(e) {
  return this._weekdaysParseExact ? (Ye(this, "_weekdaysRegex") || Bf.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Ye(this, "_weekdaysRegex") || (this._weekdaysRegex = yx), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Px(e) {
  return this._weekdaysParseExact ? (Ye(this, "_weekdaysRegex") || Bf.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Ye(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = _x), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Nx(e) {
  return this._weekdaysParseExact ? (Ye(this, "_weekdaysRegex") || Bf.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Ye(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = wx), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Bf() {
  function e(c, d) {
    return d.length - c.length;
  }
  var t = [], r = [], n = [], a = [], i, o, s, l, u;
  for (i = 0; i < 7; i++)
    o = Rn([2e3, 1]).day(i), s = zn(this.weekdaysMin(o, "")), l = zn(this.weekdaysShort(o, "")), u = zn(this.weekdays(o, "")), t.push(s), r.push(l), n.push(u), a.push(s), a.push(l), a.push(u);
  t.sort(e), r.sort(e), n.sort(e), a.sort(e), this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function jf() {
  return this.hours() % 12 || 12;
}
function Mx() {
  return this.hours() || 24;
}
he("H", ["HH", 2], 0, "hour");
he("h", ["hh", 2], 0, jf);
he("k", ["kk", 2], 0, Mx);
he("hmm", 0, 0, function() {
  return "" + jf.apply(this) + Tn(this.minutes(), 2);
});
he("hmmss", 0, 0, function() {
  return "" + jf.apply(this) + Tn(this.minutes(), 2) + Tn(this.seconds(), 2);
});
he("Hmm", 0, 0, function() {
  return "" + this.hours() + Tn(this.minutes(), 2);
});
he("Hmmss", 0, 0, function() {
  return "" + this.hours() + Tn(this.minutes(), 2) + Tn(this.seconds(), 2);
});
function B0(e, t) {
  he(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
B0("a", !0);
B0("A", !1);
function j0(e, t) {
  return t._meridiemParse;
}
ue("a", j0);
ue("A", j0);
ue("H", dt, Lf);
ue("h", dt, yo);
ue("k", dt, yo);
ue("HH", dt, yr);
ue("hh", dt, yr);
ue("kk", dt, yr);
ue("hmm", k0);
ue("hmmss", R0);
ue("Hmm", k0);
ue("Hmmss", R0);
et(["H", "HH"], Nt);
et(["k", "kk"], function(e, t, r) {
  var n = Ne(e);
  t[Nt] = n === 24 ? 0 : n;
});
et(["a", "A"], function(e, t, r) {
  r._isPm = r._locale.isPM(e), r._meridiem = e;
});
et(["h", "hh"], function(e, t, r) {
  t[Nt] = Ne(e), Ce(r).bigHour = !0;
});
et("hmm", function(e, t, r) {
  var n = e.length - 2;
  t[Nt] = Ne(e.substr(0, n)), t[Gr] = Ne(e.substr(n)), Ce(r).bigHour = !0;
});
et("hmmss", function(e, t, r) {
  var n = e.length - 4, a = e.length - 2;
  t[Nt] = Ne(e.substr(0, n)), t[Gr] = Ne(e.substr(n, 2)), t[Gn] = Ne(e.substr(a)), Ce(r).bigHour = !0;
});
et("Hmm", function(e, t, r) {
  var n = e.length - 2;
  t[Nt] = Ne(e.substr(0, n)), t[Gr] = Ne(e.substr(n));
});
et("Hmmss", function(e, t, r) {
  var n = e.length - 4, a = e.length - 2;
  t[Nt] = Ne(e.substr(0, n)), t[Gr] = Ne(e.substr(n, 2)), t[Gn] = Ne(e.substr(a));
});
function Ax(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Ix = /[ap]\.?m?\.?/i, $x = _o("Hours", !0);
function Lx(e, t, r) {
  return e > 11 ? r ? "pm" : "PM" : r ? "am" : "AM";
}
var Y0 = {
  calendar: CS,
  longDateFormat: kS,
  invalidDate: PS,
  ordinal: MS,
  dayOfMonthOrdinalParse: AS,
  relativeTime: $S,
  months: JS,
  monthsShort: M0,
  week: cx,
  weekdays: mx,
  weekdaysMin: bx,
  weekdaysShort: H0,
  meridiemParse: Ix
}, pt = {}, Ho = {}, us;
function Fx(e, t) {
  var r, n = Math.min(e.length, t.length);
  for (r = 0; r < n; r += 1)
    if (e[r] !== t[r])
      return r;
  return n;
}
function Pp(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function Hx(e) {
  for (var t = 0, r, n, a, i; t < e.length; ) {
    for (i = Pp(e[t]).split("-"), r = i.length, n = Pp(e[t + 1]), n = n ? n.split("-") : null; r > 0; ) {
      if (a = Mu(i.slice(0, r).join("-")), a)
        return a;
      if (n && n.length >= r && Fx(i, n) >= r - 1)
        break;
      r--;
    }
    t++;
  }
  return us;
}
function Bx(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function Mu(e) {
  var t = null, r;
  if (pt[e] === void 0 && typeof module < "u" && module && module.exports && Bx(e))
    try {
      t = us._abbr, r = require, r("./locale/" + e), ya(t);
    } catch {
      pt[e] = null;
    }
  return pt[e];
}
function ya(e, t) {
  var r;
  return e && (rr(t) ? r = aa(e) : r = Yf(e, t), r ? us = r : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), us._abbr;
}
function Yf(e, t) {
  if (t !== null) {
    var r, n = Y0;
    if (t.abbr = e, pt[e] != null)
      C0(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), n = pt[e]._config;
    else if (t.parentLocale != null)
      if (pt[t.parentLocale] != null)
        n = pt[t.parentLocale]._config;
      else if (r = Mu(t.parentLocale), r != null)
        n = r._config;
      else
        return Ho[t.parentLocale] || (Ho[t.parentLocale] = []), Ho[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return pt[e] = new Nf(Cd(n, t)), Ho[e] && Ho[e].forEach(function(a) {
      Yf(a.name, a.config);
    }), ya(e), pt[e];
  } else
    return delete pt[e], null;
}
function jx(e, t) {
  if (t != null) {
    var r, n, a = Y0;
    pt[e] != null && pt[e].parentLocale != null ? pt[e].set(Cd(pt[e]._config, t)) : (n = Mu(e), n != null && (a = n._config), t = Cd(a, t), n == null && (t.abbr = e), r = new Nf(t), r.parentLocale = pt[e], pt[e] = r), ya(e);
  } else
    pt[e] != null && (pt[e].parentLocale != null ? (pt[e] = pt[e].parentLocale, e === ya() && ya(e)) : pt[e] != null && delete pt[e]);
  return pt[e];
}
function aa(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return us;
  if (!Qr(e)) {
    if (t = Mu(e), t)
      return t;
    e = [e];
  }
  return Hx(e);
}
function Yx() {
  return Dd(pt);
}
function Wf(e) {
  var t, r = e._a;
  return r && Ce(e).overflow === -2 && (t = r[Un] < 0 || r[Un] > 11 ? Un : r[pn] < 1 || r[pn] > Ff(r[qt], r[Un]) ? pn : r[Nt] < 0 || r[Nt] > 24 || r[Nt] === 24 && (r[Gr] !== 0 || r[Gn] !== 0 || r[Ha] !== 0) ? Nt : r[Gr] < 0 || r[Gr] > 59 ? Gr : r[Gn] < 0 || r[Gn] > 59 ? Gn : r[Ha] < 0 || r[Ha] > 999 ? Ha : -1, Ce(e)._overflowDayOfYear && (t < qt || t > pn) && (t = pn), Ce(e)._overflowWeeks && t === -1 && (t = GS), Ce(e)._overflowWeekday && t === -1 && (t = zS), Ce(e).overflow = t), e;
}
var Wx = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Vx = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ux = /Z|[+-]\d\d(?::?\d\d)?/, Xs = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], Rc = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], Gx = /^\/?Date\((-?\d+)/i, zx = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, qx = {
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
function W0(e) {
  var t, r, n = e._i, a = Wx.exec(n) || Vx.exec(n), i, o, s, l, u = Xs.length, c = Rc.length;
  if (a) {
    for (Ce(e).iso = !0, t = 0, r = u; t < r; t++)
      if (Xs[t][1].exec(a[1])) {
        o = Xs[t][0], i = Xs[t][2] !== !1;
        break;
      }
    if (o == null) {
      e._isValid = !1;
      return;
    }
    if (a[3]) {
      for (t = 0, r = c; t < r; t++)
        if (Rc[t][1].exec(a[3])) {
          s = (a[2] || " ") + Rc[t][0];
          break;
        }
      if (s == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!i && s != null) {
      e._isValid = !1;
      return;
    }
    if (a[4])
      if (Ux.exec(a[4]))
        l = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = o + (s || "") + (l || ""), Uf(e);
  } else
    e._isValid = !1;
}
function Kx(e, t, r, n, a, i) {
  var o = [
    Xx(e),
    M0.indexOf(t),
    parseInt(r, 10),
    parseInt(n, 10),
    parseInt(a, 10)
  ];
  return i && o.push(parseInt(i, 10)), o;
}
function Xx(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Qx(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Jx(e, t, r) {
  if (e) {
    var n = H0.indexOf(e), a = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (n !== a)
      return Ce(r).weekdayMismatch = !0, r._isValid = !1, !1;
  }
  return !0;
}
function Zx(e, t, r) {
  if (e)
    return qx[e];
  if (t)
    return 0;
  var n = parseInt(r, 10), a = n % 100, i = (n - a) / 100;
  return i * 60 + a;
}
function V0(e) {
  var t = zx.exec(Qx(e._i)), r;
  if (t) {
    if (r = Kx(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !Jx(t[1], r, e))
      return;
    e._a = r, e._tzm = Zx(t[8], t[9], t[10]), e._d = ss.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), Ce(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function eE(e) {
  var t = Gx.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (W0(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (V0(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : J.createFromInputFallback(e);
}
J.createFromInputFallback = jr(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Ei(e, t, r) {
  return e ?? t ?? r;
}
function tE(e) {
  var t = new Date(J.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Vf(e) {
  var t, r, n = [], a, i, o;
  if (!e._d) {
    for (a = tE(e), e._w && e._a[pn] == null && e._a[Un] == null && rE(e), e._dayOfYear != null && (o = Ei(e._a[qt], a[qt]), (e._dayOfYear > rs(o) || e._dayOfYear === 0) && (Ce(e)._overflowDayOfYear = !0), r = ss(o, 0, e._dayOfYear), e._a[Un] = r.getUTCMonth(), e._a[pn] = r.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = n[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = n[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[Nt] === 24 && e._a[Gr] === 0 && e._a[Gn] === 0 && e._a[Ha] === 0 && (e._nextDay = !0, e._a[Nt] = 0), e._d = (e._useUTC ? ss : lx).apply(
      null,
      n
    ), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Nt] = 24), e._w && typeof e._w.d < "u" && e._w.d !== i && (Ce(e).weekdayMismatch = !0);
  }
}
function rE(e) {
  var t, r, n, a, i, o, s, l, u;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (i = 1, o = 4, r = Ei(
    t.GG,
    e._a[qt],
    ls(ct(), 1, 4).year
  ), n = Ei(t.W, 1), a = Ei(t.E, 1), (a < 1 || a > 7) && (l = !0)) : (i = e._locale._week.dow, o = e._locale._week.doy, u = ls(ct(), i, o), r = Ei(t.gg, e._a[qt], u.year), n = Ei(t.w, u.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (l = !0)) : t.e != null ? (a = t.e + i, (t.e < 0 || t.e > 6) && (l = !0)) : a = i), n < 1 || n > qn(r, i, o) ? Ce(e)._overflowWeeks = !0 : l != null ? Ce(e)._overflowWeekday = !0 : (s = F0(r, n, a, i, o), e._a[qt] = s.year, e._dayOfYear = s.dayOfYear);
}
J.ISO_8601 = function() {
};
J.RFC_2822 = function() {
};
function Uf(e) {
  if (e._f === J.ISO_8601) {
    W0(e);
    return;
  }
  if (e._f === J.RFC_2822) {
    V0(e);
    return;
  }
  e._a = [], Ce(e).empty = !0;
  var t = "" + e._i, r, n, a, i, o, s = t.length, l = 0, u, c;
  for (a = D0(e._f, e._locale).match(Mf) || [], c = a.length, r = 0; r < c; r++)
    i = a[r], n = (t.match(WS(i, e)) || [])[0], n && (o = t.substr(0, t.indexOf(n)), o.length > 0 && Ce(e).unusedInput.push(o), t = t.slice(
      t.indexOf(n) + n.length
    ), l += n.length), zi[i] ? (n ? Ce(e).empty = !1 : Ce(e).unusedTokens.push(i), US(i, n, e)) : e._strict && !n && Ce(e).unusedTokens.push(i);
  Ce(e).charsLeftOver = s - l, t.length > 0 && Ce(e).unusedInput.push(t), e._a[Nt] <= 12 && Ce(e).bigHour === !0 && e._a[Nt] > 0 && (Ce(e).bigHour = void 0), Ce(e).parsedDateParts = e._a.slice(0), Ce(e).meridiem = e._meridiem, e._a[Nt] = nE(
    e._locale,
    e._a[Nt],
    e._meridiem
  ), u = Ce(e).era, u !== null && (e._a[qt] = e._locale.erasConvertYear(u, e._a[qt])), Vf(e), Wf(e);
}
function nE(e, t, r) {
  var n;
  return r == null ? t : e.meridiemHour != null ? e.meridiemHour(t, r) : (e.isPM != null && (n = e.isPM(r), n && t < 12 && (t += 12), !n && t === 12 && (t = 0)), t);
}
function aE(e) {
  var t, r, n, a, i, o, s = !1, l = e._f.length;
  if (l === 0) {
    Ce(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (a = 0; a < l; a++)
    i = 0, o = !1, t = Pf({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[a], Uf(t), Rf(t) && (o = !0), i += Ce(t).charsLeftOver, i += Ce(t).unusedTokens.length * 10, Ce(t).score = i, s ? i < n && (n = i, r = t) : (n == null || i < n || o) && (n = i, r = t, o && (s = !0));
  va(e, r || t);
}
function iE(e) {
  if (!e._d) {
    var t = Af(e._i), r = t.day === void 0 ? t.date : t.day;
    e._a = x0(
      [t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond],
      function(n) {
        return n && parseInt(n, 10);
      }
    ), Vf(e);
  }
}
function oE(e) {
  var t = new Ss(Wf(U0(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function U0(e) {
  var t = e._i, r = e._f;
  return e._locale = e._locale || aa(e._l), t === null || r === void 0 && t === "" ? Du({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), Jr(t) ? new Ss(Wf(t)) : (ws(t) ? e._d = t : Qr(r) ? aE(e) : r ? Uf(e) : sE(e), Rf(e) || (e._d = null), e));
}
function sE(e) {
  var t = e._i;
  rr(t) ? e._d = new Date(J.now()) : ws(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? eE(e) : Qr(t) ? (e._a = x0(t.slice(0), function(r) {
    return parseInt(r, 10);
  }), Vf(e)) : Wa(t) ? iE(e) : ea(t) ? e._d = new Date(t) : J.createFromInputFallback(e);
}
function G0(e, t, r, n, a) {
  var i = {};
  return (t === !0 || t === !1) && (n = t, t = void 0), (r === !0 || r === !1) && (n = r, r = void 0), (Wa(e) && kf(e) || Qr(e) && e.length === 0) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = a, i._l = r, i._i = e, i._f = t, i._strict = n, oE(i);
}
function ct(e, t, r, n) {
  return G0(e, t, r, n, !1);
}
var lE = jr(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = ct.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Du();
  }
), uE = jr(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = ct.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Du();
  }
);
function z0(e, t) {
  var r, n;
  if (t.length === 1 && Qr(t[0]) && (t = t[0]), !t.length)
    return ct();
  for (r = t[0], n = 1; n < t.length; ++n)
    (!t[n].isValid() || t[n][e](r)) && (r = t[n]);
  return r;
}
function cE() {
  var e = [].slice.call(arguments, 0);
  return z0("isBefore", e);
}
function dE() {
  var e = [].slice.call(arguments, 0);
  return z0("isAfter", e);
}
var fE = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Bo = [
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
function hE(e) {
  var t, r = !1, n, a = Bo.length;
  for (t in e)
    if (Ye(e, t) && !(xt.call(Bo, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (n = 0; n < a; ++n)
    if (e[Bo[n]]) {
      if (r)
        return !1;
      parseFloat(e[Bo[n]]) !== Ne(e[Bo[n]]) && (r = !0);
    }
  return !0;
}
function pE() {
  return this._isValid;
}
function vE() {
  return rn(NaN);
}
function Au(e) {
  var t = Af(e), r = t.year || 0, n = t.quarter || 0, a = t.month || 0, i = t.week || t.isoWeek || 0, o = t.day || 0, s = t.hour || 0, l = t.minute || 0, u = t.second || 0, c = t.millisecond || 0;
  this._isValid = hE(t), this._milliseconds = +c + u * 1e3 + // 1000
  l * 6e4 + // 1000 * 60
  s * 1e3 * 60 * 60, this._days = +o + i * 7, this._months = +a + n * 3 + r * 12, this._data = {}, this._locale = aa(), this._bubble();
}
function bl(e) {
  return e instanceof Au;
}
function Td(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function gE(e, t, r) {
  var n = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), i = 0, o;
  for (o = 0; o < n; o++)
    Ne(e[o]) !== Ne(t[o]) && i++;
  return i + a;
}
function q0(e, t) {
  he(e, 0, 0, function() {
    var r = this.utcOffset(), n = "+";
    return r < 0 && (r = -r, n = "-"), n + Tn(~~(r / 60), 2) + t + Tn(~~r % 60, 2);
  });
}
q0("Z", ":");
q0("ZZ", "");
ue("Z", Pu);
ue("ZZ", Pu);
et(["Z", "ZZ"], function(e, t, r) {
  r._useUTC = !0, r._tzm = Gf(Pu, e);
});
var mE = /([\+\-]|\d\d)/gi;
function Gf(e, t) {
  var r = (t || "").match(e), n, a, i;
  return r === null ? null : (n = r[r.length - 1] || [], a = (n + "").match(mE) || ["-", 0, 0], i = +(a[1] * 60) + Ne(a[2]), i === 0 ? 0 : a[0] === "+" ? i : -i);
}
function zf(e, t) {
  var r, n;
  return t._isUTC ? (r = t.clone(), n = (Jr(e) || ws(e) ? e.valueOf() : ct(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + n), J.updateOffset(r, !1), r) : ct(e).local();
}
function kd(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
J.updateOffset = function() {
};
function bE(e, t, r) {
  var n = this._offset || 0, a;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Gf(Pu, e), e === null)
        return this;
    } else Math.abs(e) < 16 && !r && (e = e * 60);
    return !this._isUTC && t && (a = kd(this)), this._offset = e, this._isUTC = !0, a != null && this.add(a, "m"), n !== e && (!t || this._changeInProgress ? Q0(
      this,
      rn(e - n, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, J.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? n : kd(this);
}
function yE(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function _E(e) {
  return this.utcOffset(0, e);
}
function wE(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(kd(this), "m")), this;
}
function SE() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Gf(jS, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function xE(e) {
  return this.isValid() ? (e = e ? ct(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function EE() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function CE() {
  if (!rr(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Pf(e, this), e = U0(e), e._a ? (t = e._isUTC ? Rn(e._a) : ct(e._a), this._isDSTShifted = this.isValid() && gE(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function DE() {
  return this.isValid() ? !this._isUTC : !1;
}
function OE() {
  return this.isValid() ? this._isUTC : !1;
}
function K0() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var TE = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, kE = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function rn(e, t) {
  var r = e, n = null, a, i, o;
  return bl(e) ? r = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : ea(e) || !isNaN(+e) ? (r = {}, t ? r[t] = +e : r.milliseconds = +e) : (n = TE.exec(e)) ? (a = n[1] === "-" ? -1 : 1, r = {
    y: 0,
    d: Ne(n[pn]) * a,
    h: Ne(n[Nt]) * a,
    m: Ne(n[Gr]) * a,
    s: Ne(n[Gn]) * a,
    ms: Ne(Td(n[Ha] * 1e3)) * a
    // the millisecond decimal point is included in the match
  }) : (n = kE.exec(e)) ? (a = n[1] === "-" ? -1 : 1, r = {
    y: Ia(n[2], a),
    M: Ia(n[3], a),
    w: Ia(n[4], a),
    d: Ia(n[5], a),
    h: Ia(n[6], a),
    m: Ia(n[7], a),
    s: Ia(n[8], a)
  }) : r == null ? r = {} : typeof r == "object" && ("from" in r || "to" in r) && (o = RE(
    ct(r.from),
    ct(r.to)
  ), r = {}, r.ms = o.milliseconds, r.M = o.months), i = new Au(r), bl(e) && Ye(e, "_locale") && (i._locale = e._locale), bl(e) && Ye(e, "_isValid") && (i._isValid = e._isValid), i;
}
rn.fn = Au.prototype;
rn.invalid = vE;
function Ia(e, t) {
  var r = e && parseFloat(e.replace(",", "."));
  return (isNaN(r) ? 0 : r) * t;
}
function Np(e, t) {
  var r = {};
  return r.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(r.months, "M").isAfter(t) && --r.months, r.milliseconds = +t - +e.clone().add(r.months, "M"), r;
}
function RE(e, t) {
  var r;
  return e.isValid() && t.isValid() ? (t = zf(t, e), e.isBefore(t) ? r = Np(e, t) : (r = Np(t, e), r.milliseconds = -r.milliseconds, r.months = -r.months), r) : { milliseconds: 0, months: 0 };
}
function X0(e, t) {
  return function(r, n) {
    var a, i;
    return n !== null && !isNaN(+n) && (C0(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), i = r, r = n, n = i), a = rn(r, n), Q0(this, a, e), this;
  };
}
function Q0(e, t, r, n) {
  var a = t._milliseconds, i = Td(t._days), o = Td(t._months);
  e.isValid() && (n = n ?? !0, o && I0(e, os(e, "Month") + o * r), i && N0(e, "Date", os(e, "Date") + i * r), a && e._d.setTime(e._d.valueOf() + a * r), n && J.updateOffset(e, i || o));
}
var PE = X0(1, "add"), NE = X0(-1, "subtract");
function J0(e) {
  return typeof e == "string" || e instanceof String;
}
function ME(e) {
  return Jr(e) || ws(e) || J0(e) || ea(e) || IE(e) || AE(e) || e === null || e === void 0;
}
function AE(e) {
  var t = Wa(e) && !kf(e), r = !1, n = [
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
  ], a, i, o = n.length;
  for (a = 0; a < o; a += 1)
    i = n[a], r = r || Ye(e, i);
  return t && r;
}
function IE(e) {
  var t = Qr(e), r = !1;
  return t && (r = e.filter(function(n) {
    return !ea(n) && J0(e);
  }).length === 0), t && r;
}
function $E(e) {
  var t = Wa(e) && !kf(e), r = !1, n = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], a, i;
  for (a = 0; a < n.length; a += 1)
    i = n[a], r = r || Ye(e, i);
  return t && r;
}
function LE(e, t) {
  var r = e.diff(t, "days", !0);
  return r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse";
}
function FE(e, t) {
  arguments.length === 1 && (arguments[0] ? ME(arguments[0]) ? (e = arguments[0], t = void 0) : $E(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var r = e || ct(), n = zf(r, this).startOf("day"), a = J.calendarFormat(this, n) || "sameElse", i = t && (Pn(t[a]) ? t[a].call(this, r) : t[a]);
  return this.format(
    i || this.localeData().calendar(a, this, ct(r))
  );
}
function HE() {
  return new Ss(this);
}
function BE(e, t) {
  var r = Jr(e) ? e : ct(e);
  return this.isValid() && r.isValid() ? (t = Yr(t) || "millisecond", t === "millisecond" ? this.valueOf() > r.valueOf() : r.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function jE(e, t) {
  var r = Jr(e) ? e : ct(e);
  return this.isValid() && r.isValid() ? (t = Yr(t) || "millisecond", t === "millisecond" ? this.valueOf() < r.valueOf() : this.clone().endOf(t).valueOf() < r.valueOf()) : !1;
}
function YE(e, t, r, n) {
  var a = Jr(e) ? e : ct(e), i = Jr(t) ? t : ct(t);
  return this.isValid() && a.isValid() && i.isValid() ? (n = n || "()", (n[0] === "(" ? this.isAfter(a, r) : !this.isBefore(a, r)) && (n[1] === ")" ? this.isBefore(i, r) : !this.isAfter(i, r))) : !1;
}
function WE(e, t) {
  var r = Jr(e) ? e : ct(e), n;
  return this.isValid() && r.isValid() ? (t = Yr(t) || "millisecond", t === "millisecond" ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) : !1;
}
function VE(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function UE(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function GE(e, t, r) {
  var n, a, i;
  if (!this.isValid())
    return NaN;
  if (n = zf(e, this), !n.isValid())
    return NaN;
  switch (a = (n.utcOffset() - this.utcOffset()) * 6e4, t = Yr(t), t) {
    case "year":
      i = yl(this, n) / 12;
      break;
    case "month":
      i = yl(this, n);
      break;
    case "quarter":
      i = yl(this, n) / 3;
      break;
    case "second":
      i = (this - n) / 1e3;
      break;
    case "minute":
      i = (this - n) / 6e4;
      break;
    case "hour":
      i = (this - n) / 36e5;
      break;
    case "day":
      i = (this - n - a) / 864e5;
      break;
    case "week":
      i = (this - n - a) / 6048e5;
      break;
    default:
      i = this - n;
  }
  return r ? i : Dr(i);
}
function yl(e, t) {
  if (e.date() < t.date())
    return -yl(t, e);
  var r = (t.year() - e.year()) * 12 + (t.month() - e.month()), n = e.clone().add(r, "months"), a, i;
  return t - n < 0 ? (a = e.clone().add(r - 1, "months"), i = (t - n) / (n - a)) : (a = e.clone().add(r + 1, "months"), i = (t - n) / (a - n)), -(r + i) || 0;
}
J.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
J.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function zE() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function qE(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, r = t ? this.clone().utc() : this;
  return r.year() < 0 || r.year() > 9999 ? ml(
    r,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : Pn(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", ml(r, "Z")) : ml(
    r,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function KE() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", r, n, a, i;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), r = "[" + e + '("]', n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", i = t + '[")]', this.format(r + n + a + i);
}
function XE(e) {
  e || (e = this.isUtc() ? J.defaultFormatUtc : J.defaultFormat);
  var t = ml(this, e);
  return this.localeData().postformat(t);
}
function QE(e, t) {
  return this.isValid() && (Jr(e) && e.isValid() || ct(e).isValid()) ? rn({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function JE(e) {
  return this.from(ct(), e);
}
function ZE(e, t) {
  return this.isValid() && (Jr(e) && e.isValid() || ct(e).isValid()) ? rn({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function eC(e) {
  return this.to(ct(), e);
}
function Z0(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = aa(e), t != null && (this._locale = t), this);
}
var eb = jr(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function tb() {
  return this._locale;
}
var Hl = 1e3, qi = 60 * Hl, Bl = 60 * qi, rb = (365 * 400 + 97) * 24 * Bl;
function Ki(e, t) {
  return (e % t + t) % t;
}
function nb(e, t, r) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, r) - rb : new Date(e, t, r).valueOf();
}
function ab(e, t, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - rb : Date.UTC(e, t, r);
}
function tC(e) {
  var t, r;
  if (e = Yr(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? ab : nb, e) {
    case "year":
      t = r(this.year(), 0, 1);
      break;
    case "quarter":
      t = r(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = r(this.year(), this.month(), 1);
      break;
    case "week":
      t = r(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = r(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = r(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= Ki(
        t + (this._isUTC ? 0 : this.utcOffset() * qi),
        Bl
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= Ki(t, qi);
      break;
    case "second":
      t = this._d.valueOf(), t -= Ki(t, Hl);
      break;
  }
  return this._d.setTime(t), J.updateOffset(this, !0), this;
}
function rC(e) {
  var t, r;
  if (e = Yr(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? ab : nb, e) {
    case "year":
      t = r(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = r(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = r(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = r(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = r(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = r(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += Bl - Ki(
        t + (this._isUTC ? 0 : this.utcOffset() * qi),
        Bl
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += qi - Ki(t, qi) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Hl - Ki(t, Hl) - 1;
      break;
  }
  return this._d.setTime(t), J.updateOffset(this, !0), this;
}
function nC() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function aC() {
  return Math.floor(this.valueOf() / 1e3);
}
function iC() {
  return new Date(this.valueOf());
}
function oC() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function sC() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function lC() {
  return this.isValid() ? this.toISOString() : null;
}
function uC() {
  return Rf(this);
}
function cC() {
  return va({}, Ce(this));
}
function dC() {
  return Ce(this).overflow;
}
function fC() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
he("N", 0, 0, "eraAbbr");
he("NN", 0, 0, "eraAbbr");
he("NNN", 0, 0, "eraAbbr");
he("NNNN", 0, 0, "eraName");
he("NNNNN", 0, 0, "eraNarrow");
he("y", ["y", 1], "yo", "eraYear");
he("y", ["yy", 2], 0, "eraYear");
he("y", ["yyy", 3], 0, "eraYear");
he("y", ["yyyy", 4], 0, "eraYear");
ue("N", qf);
ue("NN", qf);
ue("NNN", qf);
ue("NNNN", xC);
ue("NNNNN", EC);
et(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, r, n) {
    var a = r._locale.erasParse(e, n, r._strict);
    a ? Ce(r).era = a : Ce(r).invalidEra = e;
  }
);
ue("y", bo);
ue("yy", bo);
ue("yyy", bo);
ue("yyyy", bo);
ue("yo", CC);
et(["y", "yy", "yyy", "yyyy"], qt);
et(["yo"], function(e, t, r, n) {
  var a;
  r._locale._eraYearOrdinalRegex && (a = e.match(r._locale._eraYearOrdinalRegex)), r._locale.eraYearOrdinalParse ? t[qt] = r._locale.eraYearOrdinalParse(e, a) : t[qt] = parseInt(e, 10);
});
function hC(e, t) {
  var r, n, a, i = this._eras || aa("en")._eras;
  for (r = 0, n = i.length; r < n; ++r) {
    switch (typeof i[r].since) {
      case "string":
        a = J(i[r].since).startOf("day"), i[r].since = a.valueOf();
        break;
    }
    switch (typeof i[r].until) {
      case "undefined":
        i[r].until = 1 / 0;
        break;
      case "string":
        a = J(i[r].until).startOf("day").valueOf(), i[r].until = a.valueOf();
        break;
    }
  }
  return i;
}
function pC(e, t, r) {
  var n, a, i = this.eras(), o, s, l;
  for (e = e.toUpperCase(), n = 0, a = i.length; n < a; ++n)
    if (o = i[n].name.toUpperCase(), s = i[n].abbr.toUpperCase(), l = i[n].narrow.toUpperCase(), r)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (s === e)
            return i[n];
          break;
        case "NNNN":
          if (o === e)
            return i[n];
          break;
        case "NNNNN":
          if (l === e)
            return i[n];
          break;
      }
    else if ([o, s, l].indexOf(e) >= 0)
      return i[n];
}
function vC(e, t) {
  var r = e.since <= e.until ? 1 : -1;
  return t === void 0 ? J(e.since).year() : J(e.since).year() + (t - e.offset) * r;
}
function gC() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].name;
  return "";
}
function mC() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].narrow;
  return "";
}
function bC() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].abbr;
  return "";
}
function yC() {
  var e, t, r, n, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (r = a[e].since <= a[e].until ? 1 : -1, n = this.clone().startOf("day").valueOf(), a[e].since <= n && n <= a[e].until || a[e].until <= n && n <= a[e].since)
      return (this.year() - J(a[e].since).year()) * r + a[e].offset;
  return this.year();
}
function _C(e) {
  return Ye(this, "_erasNameRegex") || Kf.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function wC(e) {
  return Ye(this, "_erasAbbrRegex") || Kf.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function SC(e) {
  return Ye(this, "_erasNarrowRegex") || Kf.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function qf(e, t) {
  return t.erasAbbrRegex(e);
}
function xC(e, t) {
  return t.erasNameRegex(e);
}
function EC(e, t) {
  return t.erasNarrowRegex(e);
}
function CC(e, t) {
  return t._eraYearOrdinalRegex || bo;
}
function Kf() {
  var e = [], t = [], r = [], n = [], a, i, o, s, l, u = this.eras();
  for (a = 0, i = u.length; a < i; ++a)
    o = zn(u[a].name), s = zn(u[a].abbr), l = zn(u[a].narrow), t.push(o), e.push(s), r.push(l), n.push(o), n.push(s), n.push(l);
  this._erasRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  );
}
he(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
he(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Iu(e, t) {
  he(0, [e, e.length], 0, t);
}
Iu("gggg", "weekYear");
Iu("ggggg", "weekYear");
Iu("GGGG", "isoWeekYear");
Iu("GGGGG", "isoWeekYear");
ue("G", Ru);
ue("g", Ru);
ue("GG", dt, yr);
ue("gg", dt, yr);
ue("GGGG", $f, If);
ue("gggg", $f, If);
ue("GGGGG", ku, Ou);
ue("ggggg", ku, Ou);
Es(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, r, n) {
    t[n.substr(0, 2)] = Ne(e);
  }
);
Es(["gg", "GG"], function(e, t, r, n) {
  t[n] = J.parseTwoDigitYear(e);
});
function DC(e) {
  return ib.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function OC(e) {
  return ib.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function TC() {
  return qn(this.year(), 1, 4);
}
function kC() {
  return qn(this.isoWeekYear(), 1, 4);
}
function RC() {
  var e = this.localeData()._week;
  return qn(this.year(), e.dow, e.doy);
}
function PC() {
  var e = this.localeData()._week;
  return qn(this.weekYear(), e.dow, e.doy);
}
function ib(e, t, r, n, a) {
  var i;
  return e == null ? ls(this, n, a).year : (i = qn(e, n, a), t > i && (t = i), NC.call(this, e, t, r, n, a));
}
function NC(e, t, r, n, a) {
  var i = F0(e, t, r, n, a), o = ss(i.year, 0, i.dayOfYear);
  return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this;
}
he("Q", 0, "Qo", "quarter");
ue("Q", O0);
et("Q", function(e, t) {
  t[Un] = (Ne(e) - 1) * 3;
});
function MC(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
he("D", ["DD", 2], "Do", "date");
ue("D", dt, yo);
ue("DD", dt, yr);
ue("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
et(["D", "DD"], pn);
et("Do", function(e, t) {
  t[pn] = Ne(e.match(dt)[0]);
});
var ob = _o("Date", !0);
he("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
ue("DDD", Tu);
ue("DDDD", T0);
et(["DDD", "DDDD"], function(e, t, r) {
  r._dayOfYear = Ne(e);
});
function AC(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
he("m", ["mm", 2], 0, "minute");
ue("m", dt, Lf);
ue("mm", dt, yr);
et(["m", "mm"], Gr);
var IC = _o("Minutes", !1);
he("s", ["ss", 2], 0, "second");
ue("s", dt, Lf);
ue("ss", dt, yr);
et(["s", "ss"], Gn);
var $C = _o("Seconds", !1);
he("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
he(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
he(0, ["SSS", 3], 0, "millisecond");
he(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
he(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
he(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
he(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
he(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
he(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
ue("S", Tu, O0);
ue("SS", Tu, yr);
ue("SSS", Tu, T0);
var ga, sb;
for (ga = "SSSS"; ga.length <= 9; ga += "S")
  ue(ga, bo);
function LC(e, t) {
  t[Ha] = Ne(("0." + e) * 1e3);
}
for (ga = "S"; ga.length <= 9; ga += "S")
  et(ga, LC);
sb = _o("Milliseconds", !1);
he("z", 0, 0, "zoneAbbr");
he("zz", 0, 0, "zoneName");
function FC() {
  return this._isUTC ? "UTC" : "";
}
function HC() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var W = Ss.prototype;
W.add = PE;
W.calendar = FE;
W.clone = HE;
W.diff = GE;
W.endOf = rC;
W.format = XE;
W.from = QE;
W.fromNow = JE;
W.to = ZE;
W.toNow = eC;
W.get = KS;
W.invalidAt = dC;
W.isAfter = BE;
W.isBefore = jE;
W.isBetween = YE;
W.isSame = WE;
W.isSameOrAfter = VE;
W.isSameOrBefore = UE;
W.isValid = uC;
W.lang = eb;
W.locale = Z0;
W.localeData = tb;
W.max = uE;
W.min = lE;
W.parsingFlags = cC;
W.set = XS;
W.startOf = tC;
W.subtract = NE;
W.toArray = oC;
W.toObject = sC;
W.toDate = iC;
W.toISOString = qE;
W.inspect = KE;
typeof Symbol < "u" && Symbol.for != null && (W[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
W.toJSON = lC;
W.toString = zE;
W.unix = aC;
W.valueOf = nC;
W.creationData = fC;
W.eraName = gC;
W.eraNarrow = mC;
W.eraAbbr = bC;
W.eraYear = yC;
W.year = P0;
W.isLeapYear = qS;
W.weekYear = DC;
W.isoWeekYear = OC;
W.quarter = W.quarters = MC;
W.month = $0;
W.daysInMonth = ix;
W.week = W.weeks = hx;
W.isoWeek = W.isoWeeks = px;
W.weeksInYear = RC;
W.weeksInWeekYear = PC;
W.isoWeeksInYear = TC;
W.isoWeeksInISOWeekYear = kC;
W.date = ob;
W.day = W.days = Ox;
W.weekday = Tx;
W.isoWeekday = kx;
W.dayOfYear = AC;
W.hour = W.hours = $x;
W.minute = W.minutes = IC;
W.second = W.seconds = $C;
W.millisecond = W.milliseconds = sb;
W.utcOffset = bE;
W.utc = _E;
W.local = wE;
W.parseZone = SE;
W.hasAlignedHourOffset = xE;
W.isDST = EE;
W.isLocal = DE;
W.isUtcOffset = OE;
W.isUtc = K0;
W.isUTC = K0;
W.zoneAbbr = FC;
W.zoneName = HC;
W.dates = jr(
  "dates accessor is deprecated. Use date instead.",
  ob
);
W.months = jr(
  "months accessor is deprecated. Use month instead",
  $0
);
W.years = jr(
  "years accessor is deprecated. Use year instead",
  P0
);
W.zone = jr(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  yE
);
W.isDSTShifted = jr(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  CE
);
function BC(e) {
  return ct(e * 1e3);
}
function jC() {
  return ct.apply(null, arguments).parseZone();
}
function lb(e) {
  return e;
}
var We = Nf.prototype;
We.calendar = DS;
We.longDateFormat = RS;
We.invalidDate = NS;
We.ordinal = IS;
We.preparse = lb;
We.postformat = lb;
We.relativeTime = LS;
We.pastFuture = FS;
We.set = ES;
We.eras = hC;
We.erasParse = pC;
We.erasConvertYear = vC;
We.erasAbbrRegex = wC;
We.erasNameRegex = _C;
We.erasNarrowRegex = SC;
We.months = tx;
We.monthsShort = rx;
We.monthsParse = ax;
We.monthsRegex = sx;
We.monthsShortRegex = ox;
We.week = ux;
We.firstDayOfYear = fx;
We.firstDayOfWeek = dx;
We.weekdays = Sx;
We.weekdaysMin = Ex;
We.weekdaysShort = xx;
We.weekdaysParse = Dx;
We.weekdaysRegex = Rx;
We.weekdaysShortRegex = Px;
We.weekdaysMinRegex = Nx;
We.isPM = Ax;
We.meridiem = Lx;
function jl(e, t, r, n) {
  var a = aa(), i = Rn().set(n, t);
  return a[r](i, e);
}
function ub(e, t, r) {
  if (ea(e) && (t = e, e = void 0), e = e || "", t != null)
    return jl(e, t, r, "month");
  var n, a = [];
  for (n = 0; n < 12; n++)
    a[n] = jl(e, n, r, "month");
  return a;
}
function Xf(e, t, r, n) {
  typeof e == "boolean" ? (ea(t) && (r = t, t = void 0), t = t || "") : (t = e, r = t, e = !1, ea(t) && (r = t, t = void 0), t = t || "");
  var a = aa(), i = e ? a._week.dow : 0, o, s = [];
  if (r != null)
    return jl(t, (r + i) % 7, n, "day");
  for (o = 0; o < 7; o++)
    s[o] = jl(t, (o + i) % 7, n, "day");
  return s;
}
function YC(e, t) {
  return ub(e, t, "months");
}
function WC(e, t) {
  return ub(e, t, "monthsShort");
}
function VC(e, t, r) {
  return Xf(e, t, r, "weekdays");
}
function UC(e, t, r) {
  return Xf(e, t, r, "weekdaysShort");
}
function GC(e, t, r) {
  return Xf(e, t, r, "weekdaysMin");
}
ya("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, r = Ne(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + r;
  }
});
J.lang = jr(
  "moment.lang is deprecated. Use moment.locale instead.",
  ya
);
J.langData = jr(
  "moment.langData is deprecated. Use moment.localeData instead.",
  aa
);
var Ln = Math.abs;
function zC() {
  var e = this._data;
  return this._milliseconds = Ln(this._milliseconds), this._days = Ln(this._days), this._months = Ln(this._months), e.milliseconds = Ln(e.milliseconds), e.seconds = Ln(e.seconds), e.minutes = Ln(e.minutes), e.hours = Ln(e.hours), e.months = Ln(e.months), e.years = Ln(e.years), this;
}
function cb(e, t, r, n) {
  var a = rn(t, r);
  return e._milliseconds += n * a._milliseconds, e._days += n * a._days, e._months += n * a._months, e._bubble();
}
function qC(e, t) {
  return cb(this, e, t, 1);
}
function KC(e, t) {
  return cb(this, e, t, -1);
}
function Mp(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function XC() {
  var e = this._milliseconds, t = this._days, r = this._months, n = this._data, a, i, o, s, l;
  return e >= 0 && t >= 0 && r >= 0 || e <= 0 && t <= 0 && r <= 0 || (e += Mp(Rd(r) + t) * 864e5, t = 0, r = 0), n.milliseconds = e % 1e3, a = Dr(e / 1e3), n.seconds = a % 60, i = Dr(a / 60), n.minutes = i % 60, o = Dr(i / 60), n.hours = o % 24, t += Dr(o / 24), l = Dr(db(t)), r += l, t -= Mp(Rd(l)), s = Dr(r / 12), r %= 12, n.days = t, n.months = r, n.years = s, this;
}
function db(e) {
  return e * 4800 / 146097;
}
function Rd(e) {
  return e * 146097 / 4800;
}
function QC(e) {
  if (!this.isValid())
    return NaN;
  var t, r, n = this._milliseconds;
  if (e = Yr(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + n / 864e5, r = this._months + db(t), e) {
      case "month":
        return r;
      case "quarter":
        return r / 3;
      case "year":
        return r / 12;
    }
  else
    switch (t = this._days + Math.round(Rd(this._months)), e) {
      case "week":
        return t / 7 + n / 6048e5;
      case "day":
        return t + n / 864e5;
      case "hour":
        return t * 24 + n / 36e5;
      case "minute":
        return t * 1440 + n / 6e4;
      case "second":
        return t * 86400 + n / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + n;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function ia(e) {
  return function() {
    return this.as(e);
  };
}
var fb = ia("ms"), JC = ia("s"), ZC = ia("m"), eD = ia("h"), tD = ia("d"), rD = ia("w"), nD = ia("M"), aD = ia("Q"), iD = ia("y"), oD = fb;
function sD() {
  return rn(this);
}
function lD(e) {
  return e = Yr(e), this.isValid() ? this[e + "s"]() : NaN;
}
function oi(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var uD = oi("milliseconds"), cD = oi("seconds"), dD = oi("minutes"), fD = oi("hours"), hD = oi("days"), pD = oi("months"), vD = oi("years");
function gD() {
  return Dr(this.days() / 7);
}
var Bn = Math.round, Vi = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function mD(e, t, r, n, a) {
  return a.relativeTime(t || 1, !!r, e, n);
}
function bD(e, t, r, n) {
  var a = rn(e).abs(), i = Bn(a.as("s")), o = Bn(a.as("m")), s = Bn(a.as("h")), l = Bn(a.as("d")), u = Bn(a.as("M")), c = Bn(a.as("w")), d = Bn(a.as("y")), h = i <= r.ss && ["s", i] || i < r.s && ["ss", i] || o <= 1 && ["m"] || o < r.m && ["mm", o] || s <= 1 && ["h"] || s < r.h && ["hh", s] || l <= 1 && ["d"] || l < r.d && ["dd", l];
  return r.w != null && (h = h || c <= 1 && ["w"] || c < r.w && ["ww", c]), h = h || u <= 1 && ["M"] || u < r.M && ["MM", u] || d <= 1 && ["y"] || ["yy", d], h[2] = t, h[3] = +e > 0, h[4] = n, mD.apply(null, h);
}
function yD(e) {
  return e === void 0 ? Bn : typeof e == "function" ? (Bn = e, !0) : !1;
}
function _D(e, t) {
  return Vi[e] === void 0 ? !1 : t === void 0 ? Vi[e] : (Vi[e] = t, e === "s" && (Vi.ss = t - 1), !0);
}
function wD(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var r = !1, n = Vi, a, i;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (r = e), typeof t == "object" && (n = Object.assign({}, Vi, t), t.s != null && t.ss == null && (n.ss = t.s - 1)), a = this.localeData(), i = bD(this, !r, n, a), r && (i = a.pastFuture(+this, i)), a.postformat(i);
}
var Pc = Math.abs;
function _i(e) {
  return (e > 0) - (e < 0) || +e;
}
function $u() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Pc(this._milliseconds) / 1e3, t = Pc(this._days), r = Pc(this._months), n, a, i, o, s = this.asSeconds(), l, u, c, d;
  return s ? (n = Dr(e / 60), a = Dr(n / 60), e %= 60, n %= 60, i = Dr(r / 12), r %= 12, o = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", l = s < 0 ? "-" : "", u = _i(this._months) !== _i(s) ? "-" : "", c = _i(this._days) !== _i(s) ? "-" : "", d = _i(this._milliseconds) !== _i(s) ? "-" : "", l + "P" + (i ? u + i + "Y" : "") + (r ? u + r + "M" : "") + (t ? c + t + "D" : "") + (a || n || e ? "T" : "") + (a ? d + a + "H" : "") + (n ? d + n + "M" : "") + (e ? d + o + "S" : "")) : "P0D";
}
var $e = Au.prototype;
$e.isValid = pE;
$e.abs = zC;
$e.add = qC;
$e.subtract = KC;
$e.as = QC;
$e.asMilliseconds = fb;
$e.asSeconds = JC;
$e.asMinutes = ZC;
$e.asHours = eD;
$e.asDays = tD;
$e.asWeeks = rD;
$e.asMonths = nD;
$e.asQuarters = aD;
$e.asYears = iD;
$e.valueOf = oD;
$e._bubble = XC;
$e.clone = sD;
$e.get = lD;
$e.milliseconds = uD;
$e.seconds = cD;
$e.minutes = dD;
$e.hours = fD;
$e.days = hD;
$e.weeks = gD;
$e.months = pD;
$e.years = vD;
$e.humanize = wD;
$e.toISOString = $u;
$e.toString = $u;
$e.toJSON = $u;
$e.locale = Z0;
$e.localeData = tb;
$e.toIsoString = jr(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  $u
);
$e.lang = eb;
he("X", 0, 0, "unix");
he("x", 0, 0, "valueOf");
ue("x", Ru);
ue("X", YS);
et("X", function(e, t, r) {
  r._d = new Date(parseFloat(e) * 1e3);
});
et("x", function(e, t, r) {
  r._d = new Date(Ne(e));
});
//! moment.js
J.version = "2.30.1";
SS(ct);
J.fn = W;
J.min = cE;
J.max = dE;
J.now = fE;
J.utc = Rn;
J.unix = BC;
J.months = YC;
J.isDate = ws;
J.locale = ya;
J.invalid = Du;
J.duration = rn;
J.isMoment = Jr;
J.weekdays = VC;
J.parseZone = jC;
J.localeData = aa;
J.isDuration = bl;
J.monthsShort = WC;
J.weekdaysMin = GC;
J.defineLocale = Yf;
J.updateLocale = jx;
J.locales = Yx;
J.weekdaysShort = UC;
J.normalizeUnits = Yr;
J.relativeTimeRounding = yD;
J.relativeTimeThreshold = _D;
J.calendarFormat = LE;
J.prototype = W;
J.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
var fe = {
  addHideClassIf: function(t) {
    return t ? " d-none" : "";
  },
  addActiveClassIf: function(t) {
    return t ? " active" : "";
  },
  random16: function() {
    return Math.floor(Math.random() * 1e16);
  }
};
fe.whenUserClickOutsideTheElement = function(e, t) {
  f.useEffect(function() {
    function r(n) {
      e.current && !e.current.contains(n.target) && t();
    }
    return document.addEventListener("mousedown", r), function() {
      document.removeEventListener("mousedown", r);
    };
  }, [e]);
};
fe.getValueByPath = function(e, t) {
  var r = e, n = t.split("."), a = ye(n), i;
  try {
    for (a.s(); !(i = a.n()).done; ) {
      var o = i.value;
      if (r = r[o], r === void 0) return null;
    }
  } catch (s) {
    a.e(s);
  } finally {
    a.f();
  }
  return r;
};
fe.monoArray = function(e, t) {
  for (var r = [], n = 0; n < e; n++)
    r.push(t);
  return r;
};
fe.parseParams = function(e) {
  if (e === !1)
    return {
      show: !1
    };
  if (!e)
    return {
      show: !0,
      silent: !1
    };
  var t = e.show, r = e.silent;
  return {
    show: t === void 0 ? !0 : t,
    silent: r === void 0 ? !1 : r
  };
};
fe.textWithSearchContext = function(e, t, r) {
  var n = function() {
    if (!t || !e)
      return [e];
    var s = e.toUpperCase().indexOf(t.toUpperCase());
    if (!~s)
      return [e];
    var l = s + t.length;
    return [e.slice(0, s), e.slice(s, l), e.slice(l)];
  }, a = n(), i = "";
  return i += a[0] ? a[0] : "", i += a[1] ? "<search>".concat(a[1], "</search>") : "", i += a[2] ? "".concat(a[2]) : "", r ? {
    html: i,
    find: !!a[1]
  } : i;
};
fe.getParamsToString = function(e) {
  var t = "", r = !1;
  if (!e)
    return "";
  for (var n in e) {
    var a = e[n];
    a != null && (t += "".concat(r ? "&" : "?").concat(n, "=").concat(a), r = !0);
  }
  return t;
};
fe.idArrayIncrease = function(e, t) {
  var r = Array.isArray(t) ? t : [t];
  return e.concat(r);
};
fe.idArrayDecrease = function(e, t) {
  var r = Array.isArray(t) ? t : [t];
  return e.filter(function(n) {
    return !r.includes(n);
  });
};
fe.formats = {
  date: "DD.MM.YYYY",
  dateTime: "DD.MM.YYYY, hh:mm",
  datesSeparator: " - "
};
fe.checkingInput = {
  float: function(t) {
    return /[-\d\.]/.test(t);
  },
  int: function(t) {
    return /[-\d]/.test(t);
  },
  positive: function(t) {
    return /\d/.test(t);
  }
};
fe.validators = {
  float: function(t) {
    return !(t && isNaN(t));
  },
  int: function(t) {
    return !(isNaN(t) || parseInt(t) !== parseFloat(t) && t != "");
  },
  positive: function(t) {
    return !isNaN(t) && t >= 0;
  },
  date: function(t) {
    return J(t, fe.formats.date).isValid();
  },
  dateTime: function(t) {
    return J(t, fe.formats.dateTime).isValid();
  }
};
var SD = function(t) {
  var r = f.useState(null), n = ve(r, 2), a = n[0], i = n[1], o = f.useRef(null);
  f.useEffect(function() {
    i(t);
  }, []);
  var s = function() {
    i(null), setTimeout(function() {
      i(t);
    }, 0);
  };
  return /* @__PURE__ */ f.createElement("div", {
    className: "unitable-wrapper",
    ref: o
  }, a && /* @__PURE__ */ f.createElement(xD, le({}, a, {
    refreshTable: s,
    tablePortalElCurrent: o
  })));
}, xD = function(t) {
  var r = t.tableId, n = t.tableClassName, a = t.options, i = a === void 0 ? {} : a, o = i.showTableSettings, s = o === void 0 ? !1 : o, l = f.useRef(null), u = f.useRef(new dK(t)), c = u.current;
  f.useEffect(function() {
    c.connector.refs.unitable = l.current, c.storeRememberPage();
  }, []);
  var d = {
    utils: c,
    connector: c.connector
  };
  return /* @__PURE__ */ f.createElement("div", {
    className: "unitable",
    style: {
      maxWidth: "".concat(c.getTotalRowWidth(), "px")
    },
    ref: l
  }, /* @__PURE__ */ f.createElement("div", {
    id: r,
    className: "unitable-inner ".concat(n)
  }, /* @__PURE__ */ f.createElement(ED, d), /* @__PURE__ */ f.createElement(Yz, d), s && /* @__PURE__ */ f.createElement(Wz, d)));
}, ED = function(t) {
  var r = t.connector, n = f.useState(1), a = ve(n, 2), i = a[0], o = a[1], s = function() {
    o(fe.random16);
  };
  return f.useEffect(function() {
    r.refresh.headerAndBody = s;
  }, []), i ? /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement(CD, t), /* @__PURE__ */ f.createElement(Cz, t)) : null;
}, CD = function(t) {
  var r = t.utils, n = t.connector, a = n.header, i = n.sizes.headerHeight, o = n.refs.rightParts, s = n.orderTree, l = n.numberFixedLeftColumns, u = n.options, c = u === void 0 ? {} : u, d = c.background.header, h = d === void 0 ? !1 : d, p = c.resize, v = p === void 0 ? !1 : p, m = f.useRef(null), g = f.useRef(null), b = f.useRef(null), y = f.useState(0), w = ve(y, 2);
  w[0];
  var S = w[1], _ = function() {
    return S(fe.random16());
  };
  f.useEffect(function() {
    o.push(m.current), n.refs.headerRight = m.current, n.refresh.header = _;
  }, []);
  var E = function() {
    document.onmouseup = null, document.onmousemove = null, r.refreshTableWidth();
    var K = r.getBodyHeight();
    n.refs.unitableBody.style["max-height"] = K, r.saveTableSettingsToLocaleStorage();
  }, C = function(K) {
    var L = b.current, I = L.cursorY, F = L.wrapperHeight, de = Math.max(20, F + (K.clientY - I));
    n.sizes.headerHeight = de, _();
  }, D = function(K) {
    b.current = {
      cursorY: K.clientY,
      wrapperHeight: g.current.getBoundingClientRect().height
    }, document.onmouseup = E, document.onmousemove = C;
  }, O = r.splitRowByLeftAndRight(s, l), R = ve(O, 2), P = R[0], A = R[1], B = r.getHeightStyle(i);
  return h && (B.background = h), /* @__PURE__ */ f.createElement("div", {
    className: "unitable-header",
    style: B,
    ref: g
  }, /* @__PURE__ */ f.createElement("div", {
    className: "unitable-header-left"
  }, P.map(function($) {
    var K = $.i, L = $.ch, I = a[K], F = "header-cell-".concat(I._.ordinalIndex);
    return /* @__PURE__ */ f.createElement(Pd, le({
      key: F
    }, t, {
      parent: null,
      cell: I,
      ch: L,
      isLeft: !0
    }));
  })), /* @__PURE__ */ f.createElement("div", {
    className: "unitable-header-right",
    style: {
      width: "(100% - ".concat(r.getLeftPartRowWidth(), "px")
    },
    ref: m
  }, A.map(function($) {
    var K = $.i, L = $.ch, I = a[K], F = "header-cell-".concat(I._.ordinalIndex);
    return /* @__PURE__ */ f.createElement(Pd, le({
      key: F
    }, t, {
      cell: I,
      parent: null,
      parentCh: s,
      parentChildren: a,
      ch: L,
      isRight: !0
    }));
  })), /* @__PURE__ */ f.createElement("div", {
    className: "unitable-line left"
  }), /* @__PURE__ */ f.createElement("div", {
    className: "unitable-line right"
  }), /* @__PURE__ */ f.createElement("div", {
    className: "unitable-line top"
  }), v.headerHeight && /* @__PURE__ */ f.createElement("div", {
    className: "unitable-line bottom header-resize",
    onMouseDown: D
  }));
}, Pd = function(t) {
  var r = t.cell, n = t.ch, a = r.children, i = r._, o = i.isEnd, s = i.endIndex;
  return o ? /* @__PURE__ */ f.createElement(Ap, le({}, t, {
    cell: r,
    cellIndex: s
  })) : /* @__PURE__ */ f.createElement("div", {
    className: "unitable-header-root"
  }, /* @__PURE__ */ f.createElement(Ap, le({}, t, {
    cell: r,
    cellIndex: "root"
  })), /* @__PURE__ */ f.createElement("div", {
    className: "unitable-header-children"
  }, n.map(function(l) {
    var u = l.i, c = l.ch, d = a[u], h = "header-cell-".concat(d._.ordinalIndex);
    return /* @__PURE__ */ f.createElement(Pd, le({
      key: h
    }, t, {
      cell: d,
      parent: r,
      parentCh: n,
      parentChildren: a,
      ch: c
    }));
  })));
}, Fn = window, ke = Fn.Backbone ? {
  Backbone: Fn.Backbone,
  views: Fn.NetDB.namespace("views"),
  utils: Fn.NetDB.namespace("utils"),
  assets: Fn.NetDB.namespace("assets"),
  widgets: Fn.NetDB.namespace("widgets"),
  slickUtils: Fn.NetdbSlickgrid.Utils(),
  interpolate: Fn.interpolate,
  api: Fn.NetDB.namespace("API")
} : {
  isAbsent: !0
};
ke.notify = function(e) {
  var t = e.isError, r = e.isSpinner, n = e.isUnclosable, a = e.text, i = e.delay;
  if (ke.isAbsent) return null;
  var o = ke.utils.notify({
    type: t ? "error" : r ? "info" : "success",
    message: {
      text: a
    },
    closable: !n,
    fadeOut: i ? {
      delay: i
    } : {
      enabled: !1
    }
  });
  return o;
};
ke.prompt = function(e) {
  var t = e.text, r = e.buttons, n = e.confirmFn;
  if (ke.isAbsent) return null;
  var a = {
    error: "tf_btn-error",
    primary: "tf_btn-primary",
    cancel: "tf_btn-transparent"
  }, i = r.map(function(o) {
    return {
      text: o.text,
      class: a[o.type],
      fn: o.fn
    };
  });
  new ke.views.PromptsView().show({
    confirmFn: n,
    text: t,
    buttons: i
  });
};
ke.getFileMultiple = function(e, t) {
  return ke.isAbsent ? null : new ke.Backbone.FileMultiple(e, t);
};
ke.getPeriodpicker = function(e, t) {
  return ke.isAbsent ? null : new ke.assets.Periodpicker(e, t);
};
ke.getDatepicker = function(e, t) {
  return ke.isAbsent ? null : new ke.Backbone.Datetimepicker(e, t);
};
ke.getSetpicker = function(e, t) {
  return ke.isAbsent ? null : new ke.widgets.Setpicker(e, t);
};
ke.getPf = function(e) {
  return ke.isAbsent ? null : ke.api.predefined.pf(e);
};
ke.getDescriptor = function(e) {
  return ke.isAbsent ? null : ke.api.descriptors.get(e) || ke.api.descriptors.find(function(t) {
    return t.is_lineset_multiple();
  });
};
ke.datetimeToHuman = function() {
  var e;
  return ke.isAbsent ? null : (e = ke.slickUtils).datetimeToHuman.apply(e, arguments);
};
ke.fileMultipleToHuman = function(e) {
  return ke.isAbsent ? null : ke.slickUtils.fileMultipleToHuman(e);
};
ke.prepareChangesToSave = function() {
  var e;
  if (ke.isAbsent) return null;
  (e = ke.slickUtils).prepareChangesToSave.apply(e, arguments);
};
ke.keyCodes = ke.isAbsent ? null : ke.assets.keyCodes(!0);
var qa = {};
qa.fieldTypes = {
  string: {
    id: "-34",
    label: "Строка",
    editor: "TableCellEditorString"
  },
  integer: {
    id: "-35",
    label: "Целое",
    editor: "TableCellEditorInteger"
  },
  positive: {
    id: "-36",
    label: "Неотрицательное",
    editor: "TableCellEditorPositive"
  },
  float: {
    id: "-37",
    label: "Число",
    editor: "TableCellEditorFloat"
  },
  set: {
    id: "-38",
    label: "Справочник",
    editor: "TableCellEditorSet"
  },
  bool: {
    id: "-40",
    label: "Да/Нет",
    editor: "TableCellEditorBool"
  },
  date: {
    id: "-41",
    label: "Дата и время",
    editor: "TableCellEditorDate"
  },
  period: {
    id: "-42",
    label: "Период",
    editor: "TableCellEditorPeriod"
  },
  file: {
    id: "-43",
    label: "Файл",
    editor: "TableCellEditorFile"
  },
  setmultiple: {
    id: "-44",
    label: "Множество значений из справочника",
    editor: "TableCellEditorSetMultiple"
  },
  filemultiple: {
    id: "-46",
    label: "Множественный файл",
    editor: "TableCellEditorFileMultiple"
  },
  currency: {
    id: "-1100",
    label: "Денежный",
    editor: "TableCellEditorFloat"
  }
};
qa.fieldTypesById = function() {
  return Object.entries(qa.fieldTypes).reduce(function(e, t) {
    return e[t[1].id] = {
      type: t[0],
      label: t[1].label,
      editor: t[1].editor
    }, e;
  }, {});
}();
qa.booleanItems = [{
  serverValue: !0,
  name: "Да"
}, {
  serverValue: !1,
  name: "Нет"
}];
var Ap = function(t) {
  var r = t.utils, n = t.connector, a = t.cell, i = t.cellIndex, o = t.isRight, s = a.value, l = a.view, u = l === void 0 ? null : l, c = a._, d = c.level, h = c.isEnd, p = c.isEndOfLeftPart, v = n.sizes, m = v.columnsWidth, g = v.headerHeight, b = n.headerMaxLevel, y = n.options, w = y === void 0 ? {} : y, S = n.tableHas.rowsTree, _ = n.commonForHeader, E = _ === void 0 ? {} : _, C = E.view, D = C === void 0 ? null : C, O = w.resize, R = O === void 0 ? {} : O, P = w.columnsMenu, A = P.hasHideIcon, B = A === void 0 ? !1 : A, $ = P.hasOrderIcon, K = $ === void 0 ? !1 : $, L = P.hasFormatIcon, I = L === void 0 ? !1 : L, F = P.hasSearchIcon, de = F === void 0 ? !1 : F, T = P.hasSortIcon, M = T === void 0 ? !1 : T, ie = u || D, z = isNaN(i), V = S && !i, oe = g / b, X = f.useState(0), Z = ve(X, 2);
  Z[0];
  var se = Z[1], Q = function() {
    return se(fe.random16());
  };
  f.useEffect(function() {
    var It, ht = {
      refresh: Q,
      ref: re.current,
      cell: a
    };
    n.data.headerRoot.push(ht), (It = a._) !== null && It !== void 0 && It.endIndex && (n.data.headerRootByEndIndex[a._.endIndex] = ht), !z && (n.refresh.column[i] = n.refresh.column[i] || [], n.refresh.column[i].push(Q), a._.refresh = Q, setTimeout(Q, 0));
  }, []);
  var re = f.useRef(null), De = f.useRef(null), Y = f.useRef(function() {
  }), He = function(ht) {
    if (document.onmouseup = null, document.onmousemove = null, ht.ctrlKey && !z) {
      for (var bt in n.sizes.columnsWidth) n.sizes.columnsWidth[bt] = De.current.newWidth;
      r.refreshAllColumns();
    }
    r.refreshTableWidth(), r.saveTableSettingsToLocaleStorage(), r.refreshHeaderRoots();
  }, kt = function(ht) {
    var bt = De.current, er = bt.cursorX, rt = bt.wrapperWidth, Rt = Math.max(20, rt + (ht.clientX - er));
    if (De.current.newWidth = Rt, !z) {
      n.sizes.columnsWidth[i] = Rt, r.refreshColumn(i);
      return;
    }
    var tr = Rt * 100 / rt, Yt = ye(r.getEndsByHeaderCell(a)), ln;
    try {
      for (Yt.s(); !(ln = Yt.n()).done; ) {
        var un = ln.value, Wt = un._.endIndex, An = De.current.columnsWidth[Wt];
        m[Wt] = Math.round(An / 100 * tr), r.refreshColumn(Wt);
      }
    } catch (Na) {
      Yt.e(Na);
    } finally {
      Yt.f();
    }
  }, ft = function(ht) {
    De.current = {
      cursorX: ht.clientX,
      wrapperWidth: re.current.getBoundingClientRect().width,
      columnsWidth: Cr(m)
    }, document.onmouseup = He, document.onmousemove = kt;
  }, jt = function(ht) {
    return function() {
      if (z) {
        var bt = ye(r.getEndsByHeaderCell(a)), er;
        try {
          for (bt.s(); !(er = bt.n()).done; ) {
            var rt = er.value, Rt = rt._.endIndex;
            n.showColumns[Rt] = ht, r.refreshColumn(Rt);
          }
        } catch (tr) {
          bt.e(tr);
        } finally {
          bt.f();
        }
      } else
        n.showColumns[i] = ht, r.refreshColumn(i);
      r.refreshTableWidth(), r.saveTableSettingsToLocaleStorage();
    };
  }, Mt = z || n.showColumns[i], At = Mt ? r.getWidthStyle(m[i]) : {};
  At.height = "".concat(h ? oe * (b - d) : oe, "px");
  var Ot = o && Mt ? r.getHeaderRootsPadding(re.current) : {
    paddingLeft: 0,
    paddingRight: 0
  }, Le = Ot.paddingLeft, Ve = Ot.paddingRight, lr = B || K || de || I || M;
  return re.current && (a._.wrapperRefCurrent = re), /* @__PURE__ */ f.createElement("div", {
    className: "unitable-header-cell index-".concat(i).concat(Mt ? "" : " is-hide").concat(h ? " is-end" : ""),
    style: At,
    ref: re
  }, Mt ? /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("div", {
    className: "uhc-content".concat(h ? " is-end" : "").concat(p ? " is-end-of-left" : ""),
    style: {
      paddingLeft: "".concat(Le, "px"),
      paddingRight: "".concat(Ve, "px")
    }
  }, V ? /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement(Ez, t), /* @__PURE__ */ f.createElement(t0, le({}, t, {
    onSortCurrent: Y
  }))) : /* @__PURE__ */ f.createElement("div", {
    className: "uhc-content-inner"
  }, ie ? /* @__PURE__ */ f.createElement(ie, a) : /* @__PURE__ */ f.createElement(f.Fragment, null, s), a._.sort && /* @__PURE__ */ f.createElement("i", {
    className: "uhc-content-sort fas fa-sort-".concat(a._.sort),
    onClick: function() {
      return Y.current();
    }
  }), /* @__PURE__ */ f.createElement(f.Fragment, null, lr && /* @__PURE__ */ f.createElement(t0, le({}, t, {
    showColumn: jt,
    onSortCurrent: Y
  }))))), R.columnsWidth && /* @__PURE__ */ f.createElement("div", {
    className: "uhc-resizer",
    onMouseDown: ft
  })) : /* @__PURE__ */ f.createElement("div", {
    className: "uhc-bookmark",
    title: "Показать скрытую колонку",
    onClick: jt(!0)
  }));
}, Qs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function hb(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var kr = {}, Cs = {}, DD = typeof Qs == "object" && Qs && Qs.Object === Object && Qs, pb = DD, OD = pb, TD = typeof self == "object" && self && self.Object === Object && self, kD = OD || TD || Function("return this")(), Nn = kD, RD = Nn, PD = RD.Symbol, Ds = PD, Ip = Ds, vb = Object.prototype, ND = vb.hasOwnProperty, MD = vb.toString, jo = Ip ? Ip.toStringTag : void 0;
function AD(e) {
  var t = ND.call(e, jo), r = e[jo];
  try {
    e[jo] = void 0;
    var n = !0;
  } catch {
  }
  var a = MD.call(e);
  return n && (t ? e[jo] = r : delete e[jo]), a;
}
var ID = AD, $D = Object.prototype, LD = $D.toString;
function FD(e) {
  return LD.call(e);
}
var HD = FD, $p = Ds, BD = ID, jD = HD, YD = "[object Null]", WD = "[object Undefined]", Lp = $p ? $p.toStringTag : void 0;
function VD(e) {
  return e == null ? e === void 0 ? WD : YD : Lp && Lp in Object(e) ? BD(e) : jD(e);
}
var si = VD, UD = Array.isArray, nn = UD;
function GD(e) {
  return e != null && typeof e == "object";
}
var oa = GD, zD = si, qD = nn, KD = oa, XD = "[object String]";
function QD(e) {
  return typeof e == "string" || !qD(e) && KD(e) && zD(e) == XD;
}
var JD = QD;
function ZD(e) {
  return function(t, r, n) {
    for (var a = -1, i = Object(t), o = n(t), s = o.length; s--; ) {
      var l = o[e ? s : ++a];
      if (r(i[l], l, i) === !1)
        break;
    }
    return t;
  };
}
var eO = ZD, tO = eO, rO = tO(), nO = rO;
function aO(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var iO = aO, oO = si, sO = oa, lO = "[object Arguments]";
function uO(e) {
  return sO(e) && oO(e) == lO;
}
var cO = uO, Fp = cO, dO = oa, gb = Object.prototype, fO = gb.hasOwnProperty, hO = gb.propertyIsEnumerable, pO = Fp(/* @__PURE__ */ function() {
  return arguments;
}()) ? Fp : function(e) {
  return dO(e) && fO.call(e, "callee") && !hO.call(e, "callee");
}, mb = pO, Yl = { exports: {} };
function vO() {
  return !1;
}
var gO = vO;
Yl.exports;
(function(e, t) {
  var r = Nn, n = gO, a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, o = i && i.exports === a, s = o ? r.Buffer : void 0, l = s ? s.isBuffer : void 0, u = l || n;
  e.exports = u;
})(Yl, Yl.exports);
var Qf = Yl.exports, mO = 9007199254740991, bO = /^(?:0|[1-9]\d*)$/;
function yO(e, t) {
  var r = typeof e;
  return t = t ?? mO, !!t && (r == "number" || r != "symbol" && bO.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var bb = yO, _O = 9007199254740991;
function wO(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= _O;
}
var Jf = wO, SO = si, xO = Jf, EO = oa, CO = "[object Arguments]", DO = "[object Array]", OO = "[object Boolean]", TO = "[object Date]", kO = "[object Error]", RO = "[object Function]", PO = "[object Map]", NO = "[object Number]", MO = "[object Object]", AO = "[object RegExp]", IO = "[object Set]", $O = "[object String]", LO = "[object WeakMap]", FO = "[object ArrayBuffer]", HO = "[object DataView]", BO = "[object Float32Array]", jO = "[object Float64Array]", YO = "[object Int8Array]", WO = "[object Int16Array]", VO = "[object Int32Array]", UO = "[object Uint8Array]", GO = "[object Uint8ClampedArray]", zO = "[object Uint16Array]", qO = "[object Uint32Array]", ot = {};
ot[BO] = ot[jO] = ot[YO] = ot[WO] = ot[VO] = ot[UO] = ot[GO] = ot[zO] = ot[qO] = !0;
ot[CO] = ot[DO] = ot[FO] = ot[OO] = ot[HO] = ot[TO] = ot[kO] = ot[RO] = ot[PO] = ot[NO] = ot[MO] = ot[AO] = ot[IO] = ot[$O] = ot[LO] = !1;
function KO(e) {
  return EO(e) && xO(e.length) && !!ot[SO(e)];
}
var XO = KO;
function QO(e) {
  return function(t) {
    return e(t);
  };
}
var Zf = QO, Wl = { exports: {} };
Wl.exports;
(function(e, t) {
  var r = pb, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i && r.process, s = function() {
    try {
      var l = a && a.require && a.require("util").types;
      return l || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = s;
})(Wl, Wl.exports);
var eh = Wl.exports, JO = XO, ZO = Zf, Hp = eh, Bp = Hp && Hp.isTypedArray, e1 = Bp ? ZO(Bp) : JO, yb = e1, t1 = iO, r1 = mb, n1 = nn, a1 = Qf, i1 = bb, o1 = yb, s1 = Object.prototype, l1 = s1.hasOwnProperty;
function u1(e, t) {
  var r = n1(e), n = !r && r1(e), a = !r && !n && a1(e), i = !r && !n && !a && o1(e), o = r || n || a || i, s = o ? t1(e.length, String) : [], l = s.length;
  for (var u in e)
    (t || l1.call(e, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    i1(u, l))) && s.push(u);
  return s;
}
var _b = u1, c1 = Object.prototype;
function d1(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || c1;
  return e === r;
}
var th = d1;
function f1(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var wb = f1, h1 = wb, p1 = h1(Object.keys, Object), v1 = p1, g1 = th, m1 = v1, b1 = Object.prototype, y1 = b1.hasOwnProperty;
function _1(e) {
  if (!g1(e))
    return m1(e);
  var t = [];
  for (var r in Object(e))
    y1.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var w1 = _1;
function S1(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var wo = S1, x1 = si, E1 = wo, C1 = "[object AsyncFunction]", D1 = "[object Function]", O1 = "[object GeneratorFunction]", T1 = "[object Proxy]";
function k1(e) {
  if (!E1(e))
    return !1;
  var t = x1(e);
  return t == D1 || t == O1 || t == C1 || t == T1;
}
var Sb = k1, R1 = Sb, P1 = Jf;
function N1(e) {
  return e != null && P1(e.length) && !R1(e);
}
var Lu = N1, M1 = _b, A1 = w1, I1 = Lu;
function $1(e) {
  return I1(e) ? M1(e) : A1(e);
}
var Os = $1, L1 = nO, F1 = Os;
function H1(e, t) {
  return e && L1(e, t, F1);
}
var xb = H1;
function B1(e) {
  return e;
}
var Eb = B1, j1 = Eb;
function Y1(e) {
  return typeof e == "function" ? e : j1;
}
var W1 = Y1, V1 = xb, U1 = W1;
function G1(e, t) {
  return e && V1(e, U1(t));
}
var rh = G1, z1 = wb, q1 = z1(Object.getPrototypeOf, Object), nh = q1, K1 = si, X1 = nh, Q1 = oa, J1 = "[object Object]", Z1 = Function.prototype, eT = Object.prototype, Cb = Z1.toString, tT = eT.hasOwnProperty, rT = Cb.call(Object);
function nT(e) {
  if (!Q1(e) || K1(e) != J1)
    return !1;
  var t = X1(e);
  if (t === null)
    return !0;
  var r = tT.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Cb.call(r) == rT;
}
var aT = nT;
function iT(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var Db = iT;
function oT() {
  this.__data__ = [], this.size = 0;
}
var sT = oT;
function lT(e, t) {
  return e === t || e !== e && t !== t;
}
var ah = lT, uT = ah;
function cT(e, t) {
  for (var r = e.length; r--; )
    if (uT(e[r][0], t))
      return r;
  return -1;
}
var Fu = cT, dT = Fu, fT = Array.prototype, hT = fT.splice;
function pT(e) {
  var t = this.__data__, r = dT(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : hT.call(t, r, 1), --this.size, !0;
}
var vT = pT, gT = Fu;
function mT(e) {
  var t = this.__data__, r = gT(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var bT = mT, yT = Fu;
function _T(e) {
  return yT(this.__data__, e) > -1;
}
var wT = _T, ST = Fu;
function xT(e, t) {
  var r = this.__data__, n = ST(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var ET = xT, CT = sT, DT = vT, OT = bT, TT = wT, kT = ET;
function So(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
So.prototype.clear = CT;
So.prototype.delete = DT;
So.prototype.get = OT;
So.prototype.has = TT;
So.prototype.set = kT;
var Hu = So, RT = Hu;
function PT() {
  this.__data__ = new RT(), this.size = 0;
}
var NT = PT;
function MT(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var AT = MT;
function IT(e) {
  return this.__data__.get(e);
}
var $T = IT;
function LT(e) {
  return this.__data__.has(e);
}
var FT = LT, HT = Nn, BT = HT["__core-js_shared__"], jT = BT, Nc = jT, jp = function() {
  var e = /[^.]+$/.exec(Nc && Nc.keys && Nc.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function YT(e) {
  return !!jp && jp in e;
}
var WT = YT, VT = Function.prototype, UT = VT.toString;
function GT(e) {
  if (e != null) {
    try {
      return UT.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ob = GT, zT = Sb, qT = WT, KT = wo, XT = Ob, QT = /[\\^$.*+?()[\]{}|]/g, JT = /^\[object .+?Constructor\]$/, ZT = Function.prototype, ek = Object.prototype, tk = ZT.toString, rk = ek.hasOwnProperty, nk = RegExp(
  "^" + tk.call(rk).replace(QT, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ak(e) {
  if (!KT(e) || qT(e))
    return !1;
  var t = zT(e) ? nk : JT;
  return t.test(XT(e));
}
var ik = ak;
function ok(e, t) {
  return e == null ? void 0 : e[t];
}
var sk = ok, lk = ik, uk = sk;
function ck(e, t) {
  var r = uk(e, t);
  return lk(r) ? r : void 0;
}
var li = ck, dk = li, fk = Nn, hk = dk(fk, "Map"), ih = hk, pk = li, vk = pk(Object, "create"), Bu = vk, Yp = Bu;
function gk() {
  this.__data__ = Yp ? Yp(null) : {}, this.size = 0;
}
var mk = gk;
function bk(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var yk = bk, _k = Bu, wk = "__lodash_hash_undefined__", Sk = Object.prototype, xk = Sk.hasOwnProperty;
function Ek(e) {
  var t = this.__data__;
  if (_k) {
    var r = t[e];
    return r === wk ? void 0 : r;
  }
  return xk.call(t, e) ? t[e] : void 0;
}
var Ck = Ek, Dk = Bu, Ok = Object.prototype, Tk = Ok.hasOwnProperty;
function kk(e) {
  var t = this.__data__;
  return Dk ? t[e] !== void 0 : Tk.call(t, e);
}
var Rk = kk, Pk = Bu, Nk = "__lodash_hash_undefined__";
function Mk(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Pk && t === void 0 ? Nk : t, this;
}
var Ak = Mk, Ik = mk, $k = yk, Lk = Ck, Fk = Rk, Hk = Ak;
function xo(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
xo.prototype.clear = Ik;
xo.prototype.delete = $k;
xo.prototype.get = Lk;
xo.prototype.has = Fk;
xo.prototype.set = Hk;
var Bk = xo, Wp = Bk, jk = Hu, Yk = ih;
function Wk() {
  this.size = 0, this.__data__ = {
    hash: new Wp(),
    map: new (Yk || jk)(),
    string: new Wp()
  };
}
var Vk = Wk;
function Uk(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Gk = Uk, zk = Gk;
function qk(e, t) {
  var r = e.__data__;
  return zk(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var ju = qk, Kk = ju;
function Xk(e) {
  var t = Kk(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Qk = Xk, Jk = ju;
function Zk(e) {
  return Jk(this, e).get(e);
}
var eR = Zk, tR = ju;
function rR(e) {
  return tR(this, e).has(e);
}
var nR = rR, aR = ju;
function iR(e, t) {
  var r = aR(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var oR = iR, sR = Vk, lR = Qk, uR = eR, cR = nR, dR = oR;
function Eo(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Eo.prototype.clear = sR;
Eo.prototype.delete = lR;
Eo.prototype.get = uR;
Eo.prototype.has = cR;
Eo.prototype.set = dR;
var oh = Eo, fR = Hu, hR = ih, pR = oh, vR = 200;
function gR(e, t) {
  var r = this.__data__;
  if (r instanceof fR) {
    var n = r.__data__;
    if (!hR || n.length < vR - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new pR(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var mR = gR, bR = Hu, yR = NT, _R = AT, wR = $T, SR = FT, xR = mR;
function Co(e) {
  var t = this.__data__ = new bR(e);
  this.size = t.size;
}
Co.prototype.clear = yR;
Co.prototype.delete = _R;
Co.prototype.get = wR;
Co.prototype.has = SR;
Co.prototype.set = xR;
var sh = Co, ER = "__lodash_hash_undefined__";
function CR(e) {
  return this.__data__.set(e, ER), this;
}
var DR = CR;
function OR(e) {
  return this.__data__.has(e);
}
var TR = OR, kR = oh, RR = DR, PR = TR;
function Vl(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new kR(); ++t < r; )
    this.add(e[t]);
}
Vl.prototype.add = Vl.prototype.push = RR;
Vl.prototype.has = PR;
var NR = Vl;
function MR(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var AR = MR;
function IR(e, t) {
  return e.has(t);
}
var $R = IR, LR = NR, FR = AR, HR = $R, BR = 1, jR = 2;
function YR(e, t, r, n, a, i) {
  var o = r & BR, s = e.length, l = t.length;
  if (s != l && !(o && l > s))
    return !1;
  var u = i.get(e), c = i.get(t);
  if (u && c)
    return u == t && c == e;
  var d = -1, h = !0, p = r & jR ? new LR() : void 0;
  for (i.set(e, t), i.set(t, e); ++d < s; ) {
    var v = e[d], m = t[d];
    if (n)
      var g = o ? n(m, v, d, t, e, i) : n(v, m, d, e, t, i);
    if (g !== void 0) {
      if (g)
        continue;
      h = !1;
      break;
    }
    if (p) {
      if (!FR(t, function(b, y) {
        if (!HR(p, y) && (v === b || a(v, b, r, n, i)))
          return p.push(y);
      })) {
        h = !1;
        break;
      }
    } else if (!(v === m || a(v, m, r, n, i))) {
      h = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), h;
}
var Tb = YR, WR = Nn, VR = WR.Uint8Array, kb = VR;
function UR(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
var GR = UR;
function zR(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var qR = zR, Vp = Ds, Up = kb, KR = ah, XR = Tb, QR = GR, JR = qR, ZR = 1, eP = 2, tP = "[object Boolean]", rP = "[object Date]", nP = "[object Error]", aP = "[object Map]", iP = "[object Number]", oP = "[object RegExp]", sP = "[object Set]", lP = "[object String]", uP = "[object Symbol]", cP = "[object ArrayBuffer]", dP = "[object DataView]", Gp = Vp ? Vp.prototype : void 0, Mc = Gp ? Gp.valueOf : void 0;
function fP(e, t, r, n, a, i, o) {
  switch (r) {
    case dP:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case cP:
      return !(e.byteLength != t.byteLength || !i(new Up(e), new Up(t)));
    case tP:
    case rP:
    case iP:
      return KR(+e, +t);
    case nP:
      return e.name == t.name && e.message == t.message;
    case oP:
    case lP:
      return e == t + "";
    case aP:
      var s = QR;
    case sP:
      var l = n & ZR;
      if (s || (s = JR), e.size != t.size && !l)
        return !1;
      var u = o.get(e);
      if (u)
        return u == t;
      n |= eP, o.set(e, t);
      var c = XR(s(e), s(t), n, a, i, o);
      return o.delete(e), c;
    case uP:
      if (Mc)
        return Mc.call(e) == Mc.call(t);
  }
  return !1;
}
var hP = fP;
function pP(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var Rb = pP, vP = Rb, gP = nn;
function mP(e, t, r) {
  var n = t(e);
  return gP(e) ? n : vP(n, r(e));
}
var Pb = mP;
function bP(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (i[a++] = o);
  }
  return i;
}
var yP = bP;
function _P() {
  return [];
}
var Nb = _P, wP = yP, SP = Nb, xP = Object.prototype, EP = xP.propertyIsEnumerable, zp = Object.getOwnPropertySymbols, CP = zp ? function(e) {
  return e == null ? [] : (e = Object(e), wP(zp(e), function(t) {
    return EP.call(e, t);
  }));
} : SP, lh = CP, DP = Pb, OP = lh, TP = Os;
function kP(e) {
  return DP(e, TP, OP);
}
var Mb = kP, qp = Mb, RP = 1, PP = Object.prototype, NP = PP.hasOwnProperty;
function MP(e, t, r, n, a, i) {
  var o = r & RP, s = qp(e), l = s.length, u = qp(t), c = u.length;
  if (l != c && !o)
    return !1;
  for (var d = l; d--; ) {
    var h = s[d];
    if (!(o ? h in t : NP.call(t, h)))
      return !1;
  }
  var p = i.get(e), v = i.get(t);
  if (p && v)
    return p == t && v == e;
  var m = !0;
  i.set(e, t), i.set(t, e);
  for (var g = o; ++d < l; ) {
    h = s[d];
    var b = e[h], y = t[h];
    if (n)
      var w = o ? n(y, b, h, t, e, i) : n(b, y, h, e, t, i);
    if (!(w === void 0 ? b === y || a(b, y, r, n, i) : w)) {
      m = !1;
      break;
    }
    g || (g = h == "constructor");
  }
  if (m && !g) {
    var S = e.constructor, _ = t.constructor;
    S != _ && "constructor" in e && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof _ == "function" && _ instanceof _) && (m = !1);
  }
  return i.delete(e), i.delete(t), m;
}
var AP = MP, IP = li, $P = Nn, LP = IP($P, "DataView"), FP = LP, HP = li, BP = Nn, jP = HP(BP, "Promise"), YP = jP, WP = li, VP = Nn, UP = WP(VP, "Set"), GP = UP, zP = li, qP = Nn, KP = zP(qP, "WeakMap"), XP = KP, Nd = FP, Md = ih, Ad = YP, Id = GP, $d = XP, Ab = si, Do = Ob, Kp = "[object Map]", QP = "[object Object]", Xp = "[object Promise]", Qp = "[object Set]", Jp = "[object WeakMap]", Zp = "[object DataView]", JP = Do(Nd), ZP = Do(Md), eN = Do(Ad), tN = Do(Id), rN = Do($d), La = Ab;
(Nd && La(new Nd(new ArrayBuffer(1))) != Zp || Md && La(new Md()) != Kp || Ad && La(Ad.resolve()) != Xp || Id && La(new Id()) != Qp || $d && La(new $d()) != Jp) && (La = function(e) {
  var t = Ab(e), r = t == QP ? e.constructor : void 0, n = r ? Do(r) : "";
  if (n)
    switch (n) {
      case JP:
        return Zp;
      case ZP:
        return Kp;
      case eN:
        return Xp;
      case tN:
        return Qp;
      case rN:
        return Jp;
    }
  return t;
});
var Yu = La, Ac = sh, nN = Tb, aN = hP, iN = AP, ev = Yu, tv = nn, rv = Qf, oN = yb, sN = 1, nv = "[object Arguments]", av = "[object Array]", Js = "[object Object]", lN = Object.prototype, iv = lN.hasOwnProperty;
function uN(e, t, r, n, a, i) {
  var o = tv(e), s = tv(t), l = o ? av : ev(e), u = s ? av : ev(t);
  l = l == nv ? Js : l, u = u == nv ? Js : u;
  var c = l == Js, d = u == Js, h = l == u;
  if (h && rv(e)) {
    if (!rv(t))
      return !1;
    o = !0, c = !1;
  }
  if (h && !c)
    return i || (i = new Ac()), o || oN(e) ? nN(e, t, r, n, a, i) : aN(e, t, l, r, n, a, i);
  if (!(r & sN)) {
    var p = c && iv.call(e, "__wrapped__"), v = d && iv.call(t, "__wrapped__");
    if (p || v) {
      var m = p ? e.value() : e, g = v ? t.value() : t;
      return i || (i = new Ac()), a(m, g, r, n, i);
    }
  }
  return h ? (i || (i = new Ac()), iN(e, t, r, n, a, i)) : !1;
}
var cN = uN, dN = cN, ov = oa;
function Ib(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !ov(e) && !ov(t) ? e !== e && t !== t : dN(e, t, r, n, Ib, a);
}
var $b = Ib, fN = sh, hN = $b, pN = 1, vN = 2;
function gN(e, t, r, n) {
  var a = r.length, i = a, o = !n;
  if (e == null)
    return !i;
  for (e = Object(e); a--; ) {
    var s = r[a];
    if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++a < i; ) {
    s = r[a];
    var l = s[0], u = e[l], c = s[1];
    if (o && s[2]) {
      if (u === void 0 && !(l in e))
        return !1;
    } else {
      var d = new fN();
      if (n)
        var h = n(u, c, l, e, t, d);
      if (!(h === void 0 ? hN(c, u, pN | vN, n, d) : h))
        return !1;
    }
  }
  return !0;
}
var mN = gN, bN = wo;
function yN(e) {
  return e === e && !bN(e);
}
var Lb = yN, _N = Lb, wN = Os;
function SN(e) {
  for (var t = wN(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, _N(a)];
  }
  return t;
}
var xN = SN;
function EN(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var Fb = EN, CN = mN, DN = xN, ON = Fb;
function TN(e) {
  var t = DN(e);
  return t.length == 1 && t[0][2] ? ON(t[0][0], t[0][1]) : function(r) {
    return r === e || CN(r, e, t);
  };
}
var kN = TN, RN = si, PN = oa, NN = "[object Symbol]";
function MN(e) {
  return typeof e == "symbol" || PN(e) && RN(e) == NN;
}
var uh = MN, AN = nn, IN = uh, $N = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, LN = /^\w*$/;
function FN(e, t) {
  if (AN(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || IN(e) ? !0 : LN.test(e) || !$N.test(e) || t != null && e in Object(t);
}
var ch = FN, Hb = oh, HN = "Expected a function";
function dh(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(HN);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], i = r.cache;
    if (i.has(a))
      return i.get(a);
    var o = e.apply(this, n);
    return r.cache = i.set(a, o) || i, o;
  };
  return r.cache = new (dh.Cache || Hb)(), r;
}
dh.Cache = Hb;
var BN = dh, jN = BN, YN = 500;
function WN(e) {
  var t = jN(e, function(n) {
    return r.size === YN && r.clear(), n;
  }), r = t.cache;
  return t;
}
var VN = WN, UN = VN, GN = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, zN = /\\(\\)?/g, qN = UN(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(GN, function(r, n, a, i) {
    t.push(a ? i.replace(zN, "$1") : n || r);
  }), t;
}), KN = qN, sv = Ds, XN = Db, QN = nn, JN = uh, ZN = 1 / 0, lv = sv ? sv.prototype : void 0, uv = lv ? lv.toString : void 0;
function Bb(e) {
  if (typeof e == "string")
    return e;
  if (QN(e))
    return XN(e, Bb) + "";
  if (JN(e))
    return uv ? uv.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ZN ? "-0" : t;
}
var eM = Bb, tM = eM;
function rM(e) {
  return e == null ? "" : tM(e);
}
var nM = rM, aM = nn, iM = ch, oM = KN, sM = nM;
function lM(e, t) {
  return aM(e) ? e : iM(e, t) ? [e] : oM(sM(e));
}
var jb = lM, uM = uh, cM = 1 / 0;
function dM(e) {
  if (typeof e == "string" || uM(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -cM ? "-0" : t;
}
var Wu = dM, fM = jb, hM = Wu;
function pM(e, t) {
  t = fM(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[hM(t[r++])];
  return r && r == n ? e : void 0;
}
var Yb = pM, vM = Yb;
function gM(e, t, r) {
  var n = e == null ? void 0 : vM(e, t);
  return n === void 0 ? r : n;
}
var mM = gM;
function bM(e, t) {
  return e != null && t in Object(e);
}
var yM = bM, _M = jb, wM = mb, SM = nn, xM = bb, EM = Jf, CM = Wu;
function DM(e, t, r) {
  t = _M(t, e);
  for (var n = -1, a = t.length, i = !1; ++n < a; ) {
    var o = CM(t[n]);
    if (!(i = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return i || ++n != a ? i : (a = e == null ? 0 : e.length, !!a && EM(a) && xM(o, a) && (SM(e) || wM(e)));
}
var OM = DM, TM = yM, kM = OM;
function RM(e, t) {
  return e != null && kM(e, t, TM);
}
var PM = RM, NM = $b, MM = mM, AM = PM, IM = ch, $M = Lb, LM = Fb, FM = Wu, HM = 1, BM = 2;
function jM(e, t) {
  return IM(e) && $M(t) ? LM(FM(e), t) : function(r) {
    var n = MM(r, e);
    return n === void 0 && n === t ? AM(r, e) : NM(t, n, HM | BM);
  };
}
var YM = jM;
function WM(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var VM = WM, UM = Yb;
function GM(e) {
  return function(t) {
    return UM(t, e);
  };
}
var zM = GM, qM = VM, KM = zM, XM = ch, QM = Wu;
function JM(e) {
  return XM(e) ? qM(QM(e)) : KM(e);
}
var ZM = JM, eA = kN, tA = YM, rA = Eb, nA = nn, aA = ZM;
function iA(e) {
  return typeof e == "function" ? e : e == null ? rA : typeof e == "object" ? nA(e) ? tA(e[0], e[1]) : eA(e) : aA(e);
}
var oA = iA, sA = Lu;
function lA(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!sA(r))
      return e(r, n);
    for (var a = r.length, i = t ? a : -1, o = Object(r); (t ? i-- : ++i < a) && n(o[i], i, o) !== !1; )
      ;
    return r;
  };
}
var uA = lA, cA = xb, dA = uA, fA = dA(cA), hA = fA, pA = hA, vA = Lu;
function gA(e, t) {
  var r = -1, n = vA(e) ? Array(e.length) : [];
  return pA(e, function(a, i, o) {
    n[++r] = t(a, i, o);
  }), n;
}
var mA = gA, bA = Db, yA = oA, _A = mA, wA = nn;
function SA(e, t) {
  var r = wA(e) ? bA : _A;
  return r(e, yA(t));
}
var xA = SA;
Object.defineProperty(Cs, "__esModule", {
  value: !0
});
Cs.flattenNames = void 0;
var EA = JD, CA = Vu(EA), DA = rh, OA = Vu(DA), TA = aT, kA = Vu(TA), RA = xA, PA = Vu(RA);
function Vu(e) {
  return e && e.__esModule ? e : { default: e };
}
var NA = Cs.flattenNames = function e() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = [];
  return (0, PA.default)(t, function(n) {
    Array.isArray(n) ? e(n).map(function(a) {
      return r.push(a);
    }) : (0, kA.default)(n) ? (0, OA.default)(n, function(a, i) {
      a === !0 && r.push(i), r.push(i + "-" + a);
    }) : (0, CA.default)(n) && r.push(n);
  }), r;
};
Cs.default = NA;
var Ts = {};
function MA(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var AA = MA, IA = li, $A = function() {
  try {
    var e = IA(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), LA = $A, cv = LA;
function FA(e, t, r) {
  t == "__proto__" && cv ? cv(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Wb = FA, HA = Wb, BA = ah, jA = Object.prototype, YA = jA.hasOwnProperty;
function WA(e, t, r) {
  var n = e[t];
  (!(YA.call(e, t) && BA(n, r)) || r === void 0 && !(t in e)) && HA(e, t, r);
}
var Vb = WA, VA = Vb, UA = Wb;
function GA(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var i = -1, o = t.length; ++i < o; ) {
    var s = t[i], l = n ? n(r[s], e[s], s, r, e) : void 0;
    l === void 0 && (l = e[s]), a ? UA(r, s, l) : VA(r, s, l);
  }
  return r;
}
var Uu = GA, zA = Uu, qA = Os;
function KA(e, t) {
  return e && zA(t, qA(t), e);
}
var XA = KA;
function QA(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var JA = QA, ZA = wo, eI = th, tI = JA, rI = Object.prototype, nI = rI.hasOwnProperty;
function aI(e) {
  if (!ZA(e))
    return tI(e);
  var t = eI(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !nI.call(e, n)) || r.push(n);
  return r;
}
var iI = aI, oI = _b, sI = iI, lI = Lu;
function uI(e) {
  return lI(e) ? oI(e, !0) : sI(e);
}
var fh = uI, cI = Uu, dI = fh;
function fI(e, t) {
  return e && cI(t, dI(t), e);
}
var hI = fI, Ul = { exports: {} };
Ul.exports;
(function(e, t) {
  var r = Nn, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i ? r.Buffer : void 0, s = o ? o.allocUnsafe : void 0;
  function l(u, c) {
    if (c)
      return u.slice();
    var d = u.length, h = s ? s(d) : new u.constructor(d);
    return u.copy(h), h;
  }
  e.exports = l;
})(Ul, Ul.exports);
var pI = Ul.exports;
function vI(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var gI = vI, mI = Uu, bI = lh;
function yI(e, t) {
  return mI(e, bI(e), t);
}
var _I = yI, wI = Rb, SI = nh, xI = lh, EI = Nb, CI = Object.getOwnPropertySymbols, DI = CI ? function(e) {
  for (var t = []; e; )
    wI(t, xI(e)), e = SI(e);
  return t;
} : EI, Ub = DI, OI = Uu, TI = Ub;
function kI(e, t) {
  return OI(e, TI(e), t);
}
var RI = kI, PI = Pb, NI = Ub, MI = fh;
function AI(e) {
  return PI(e, MI, NI);
}
var II = AI, $I = Object.prototype, LI = $I.hasOwnProperty;
function FI(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && LI.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var HI = FI, dv = kb;
function BI(e) {
  var t = new e.constructor(e.byteLength);
  return new dv(t).set(new dv(e)), t;
}
var hh = BI, jI = hh;
function YI(e, t) {
  var r = t ? jI(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var WI = YI, VI = /\w*$/;
function UI(e) {
  var t = new e.constructor(e.source, VI.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var GI = UI, fv = Ds, hv = fv ? fv.prototype : void 0, pv = hv ? hv.valueOf : void 0;
function zI(e) {
  return pv ? Object(pv.call(e)) : {};
}
var qI = zI, KI = hh;
function XI(e, t) {
  var r = t ? KI(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var QI = XI, JI = hh, ZI = WI, e$ = GI, t$ = qI, r$ = QI, n$ = "[object Boolean]", a$ = "[object Date]", i$ = "[object Map]", o$ = "[object Number]", s$ = "[object RegExp]", l$ = "[object Set]", u$ = "[object String]", c$ = "[object Symbol]", d$ = "[object ArrayBuffer]", f$ = "[object DataView]", h$ = "[object Float32Array]", p$ = "[object Float64Array]", v$ = "[object Int8Array]", g$ = "[object Int16Array]", m$ = "[object Int32Array]", b$ = "[object Uint8Array]", y$ = "[object Uint8ClampedArray]", _$ = "[object Uint16Array]", w$ = "[object Uint32Array]";
function S$(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case d$:
      return JI(e);
    case n$:
    case a$:
      return new n(+e);
    case f$:
      return ZI(e, r);
    case h$:
    case p$:
    case v$:
    case g$:
    case m$:
    case b$:
    case y$:
    case _$:
    case w$:
      return r$(e, r);
    case i$:
      return new n();
    case o$:
    case u$:
      return new n(e);
    case s$:
      return e$(e);
    case l$:
      return new n();
    case c$:
      return t$(e);
  }
}
var x$ = S$, E$ = wo, vv = Object.create, C$ = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!E$(t))
      return {};
    if (vv)
      return vv(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), D$ = C$, O$ = D$, T$ = nh, k$ = th;
function R$(e) {
  return typeof e.constructor == "function" && !k$(e) ? O$(T$(e)) : {};
}
var P$ = R$, N$ = Yu, M$ = oa, A$ = "[object Map]";
function I$(e) {
  return M$(e) && N$(e) == A$;
}
var $$ = I$, L$ = $$, F$ = Zf, gv = eh, mv = gv && gv.isMap, H$ = mv ? F$(mv) : L$, B$ = H$, j$ = Yu, Y$ = oa, W$ = "[object Set]";
function V$(e) {
  return Y$(e) && j$(e) == W$;
}
var U$ = V$, G$ = U$, z$ = Zf, bv = eh, yv = bv && bv.isSet, q$ = yv ? z$(yv) : G$, K$ = q$, X$ = sh, Q$ = AA, J$ = Vb, Z$ = XA, e2 = hI, t2 = pI, r2 = gI, n2 = _I, a2 = RI, i2 = Mb, o2 = II, s2 = Yu, l2 = HI, u2 = x$, c2 = P$, d2 = nn, f2 = Qf, h2 = B$, p2 = wo, v2 = K$, g2 = Os, m2 = fh, b2 = 1, y2 = 2, _2 = 4, Gb = "[object Arguments]", w2 = "[object Array]", S2 = "[object Boolean]", x2 = "[object Date]", E2 = "[object Error]", zb = "[object Function]", C2 = "[object GeneratorFunction]", D2 = "[object Map]", O2 = "[object Number]", qb = "[object Object]", T2 = "[object RegExp]", k2 = "[object Set]", R2 = "[object String]", P2 = "[object Symbol]", N2 = "[object WeakMap]", M2 = "[object ArrayBuffer]", A2 = "[object DataView]", I2 = "[object Float32Array]", $2 = "[object Float64Array]", L2 = "[object Int8Array]", F2 = "[object Int16Array]", H2 = "[object Int32Array]", B2 = "[object Uint8Array]", j2 = "[object Uint8ClampedArray]", Y2 = "[object Uint16Array]", W2 = "[object Uint32Array]", nt = {};
nt[Gb] = nt[w2] = nt[M2] = nt[A2] = nt[S2] = nt[x2] = nt[I2] = nt[$2] = nt[L2] = nt[F2] = nt[H2] = nt[D2] = nt[O2] = nt[qb] = nt[T2] = nt[k2] = nt[R2] = nt[P2] = nt[B2] = nt[j2] = nt[Y2] = nt[W2] = !0;
nt[E2] = nt[zb] = nt[N2] = !1;
function _l(e, t, r, n, a, i) {
  var o, s = t & b2, l = t & y2, u = t & _2;
  if (r && (o = a ? r(e, n, a, i) : r(e)), o !== void 0)
    return o;
  if (!p2(e))
    return e;
  var c = d2(e);
  if (c) {
    if (o = l2(e), !s)
      return r2(e, o);
  } else {
    var d = s2(e), h = d == zb || d == C2;
    if (f2(e))
      return t2(e, s);
    if (d == qb || d == Gb || h && !a) {
      if (o = l || h ? {} : c2(e), !s)
        return l ? a2(e, e2(o, e)) : n2(e, Z$(o, e));
    } else {
      if (!nt[d])
        return a ? e : {};
      o = u2(e, d, s);
    }
  }
  i || (i = new X$());
  var p = i.get(e);
  if (p)
    return p;
  i.set(e, o), v2(e) ? e.forEach(function(g) {
    o.add(_l(g, t, r, g, e, i));
  }) : h2(e) && e.forEach(function(g, b) {
    o.set(b, _l(g, t, r, b, e, i));
  });
  var v = u ? l ? o2 : i2 : l ? m2 : g2, m = c ? void 0 : v(e);
  return Q$(m || e, function(g, b) {
    m && (b = g, g = e[b]), J$(o, b, _l(g, t, r, b, e, i));
  }), o;
}
var V2 = _l, U2 = V2, G2 = 1, z2 = 4;
function q2(e) {
  return U2(e, G2 | z2);
}
var K2 = q2;
Object.defineProperty(Ts, "__esModule", {
  value: !0
});
Ts.mergeClasses = void 0;
var X2 = rh, Q2 = Kb(X2), J2 = K2, Z2 = Kb(J2), eL = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }
  return e;
};
function Kb(e) {
  return e && e.__esModule ? e : { default: e };
}
var tL = Ts.mergeClasses = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = t.default && (0, Z2.default)(t.default) || {};
  return r.map(function(a) {
    var i = t[a];
    return i && (0, Q2.default)(i, function(o, s) {
      n[s] || (n[s] = {}), n[s] = eL({}, n[s], i[s]);
    }), a;
  }), n;
};
Ts.default = tL;
var ks = {};
Object.defineProperty(ks, "__esModule", {
  value: !0
});
ks.autoprefix = void 0;
var rL = rh, _v = aL(rL), nL = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }
  return e;
};
function aL(e) {
  return e && e.__esModule ? e : { default: e };
}
var iL = {
  borderRadius: function(t) {
    return {
      msBorderRadius: t,
      MozBorderRadius: t,
      OBorderRadius: t,
      WebkitBorderRadius: t,
      borderRadius: t
    };
  },
  boxShadow: function(t) {
    return {
      msBoxShadow: t,
      MozBoxShadow: t,
      OBoxShadow: t,
      WebkitBoxShadow: t,
      boxShadow: t
    };
  },
  userSelect: function(t) {
    return {
      WebkitTouchCallout: t,
      KhtmlUserSelect: t,
      MozUserSelect: t,
      msUserSelect: t,
      WebkitUserSelect: t,
      userSelect: t
    };
  },
  flex: function(t) {
    return {
      WebkitBoxFlex: t,
      MozBoxFlex: t,
      WebkitFlex: t,
      msFlex: t,
      flex: t
    };
  },
  flexBasis: function(t) {
    return {
      WebkitFlexBasis: t,
      flexBasis: t
    };
  },
  justifyContent: function(t) {
    return {
      WebkitJustifyContent: t,
      justifyContent: t
    };
  },
  transition: function(t) {
    return {
      msTransition: t,
      MozTransition: t,
      OTransition: t,
      WebkitTransition: t,
      transition: t
    };
  },
  transform: function(t) {
    return {
      msTransform: t,
      MozTransform: t,
      OTransform: t,
      WebkitTransform: t,
      transform: t
    };
  },
  absolute: function(t) {
    var r = t && t.split(" ");
    return {
      position: "absolute",
      top: r && r[0],
      right: r && r[1],
      bottom: r && r[2],
      left: r && r[3]
    };
  },
  extend: function(t, r) {
    var n = r[t];
    return n || {
      extend: t
    };
  }
}, oL = ks.autoprefix = function(t) {
  var r = {};
  return (0, _v.default)(t, function(n, a) {
    var i = {};
    (0, _v.default)(n, function(o, s) {
      var l = iL[s];
      l ? i = nL({}, i, l(o)) : i[s] = o;
    }), r[a] = i;
  }), r;
};
ks.default = oL;
var Rs = {};
Object.defineProperty(Rs, "__esModule", {
  value: !0
});
Rs.hover = void 0;
var sL = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }
  return e;
}, lL = f, Ic = uL(lL);
function uL(e) {
  return e && e.__esModule ? e : { default: e };
}
function cL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function wv(e, t) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function dL(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
var fL = Rs.hover = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
  return function(n) {
    dL(a, n);
    function a() {
      var i, o, s, l;
      cL(this, a);
      for (var u = arguments.length, c = Array(u), d = 0; d < u; d++)
        c[d] = arguments[d];
      return l = (o = (s = wv(this, (i = a.__proto__ || Object.getPrototypeOf(a)).call.apply(i, [this].concat(c))), s), s.state = { hover: !1 }, s.handleMouseOver = function() {
        return s.setState({ hover: !0 });
      }, s.handleMouseOut = function() {
        return s.setState({ hover: !1 });
      }, s.render = function() {
        return Ic.default.createElement(
          r,
          { onMouseOver: s.handleMouseOver, onMouseOut: s.handleMouseOut },
          Ic.default.createElement(t, sL({}, s.props, s.state))
        );
      }, o), wv(s, l);
    }
    return a;
  }(Ic.default.Component);
};
Rs.default = fL;
var Ps = {};
Object.defineProperty(Ps, "__esModule", {
  value: !0
});
Ps.active = void 0;
var hL = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }
  return e;
}, pL = f, $c = vL(pL);
function vL(e) {
  return e && e.__esModule ? e : { default: e };
}
function gL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Sv(e, t) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function mL(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
var bL = Ps.active = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
  return function(n) {
    mL(a, n);
    function a() {
      var i, o, s, l;
      gL(this, a);
      for (var u = arguments.length, c = Array(u), d = 0; d < u; d++)
        c[d] = arguments[d];
      return l = (o = (s = Sv(this, (i = a.__proto__ || Object.getPrototypeOf(a)).call.apply(i, [this].concat(c))), s), s.state = { active: !1 }, s.handleMouseDown = function() {
        return s.setState({ active: !0 });
      }, s.handleMouseUp = function() {
        return s.setState({ active: !1 });
      }, s.render = function() {
        return $c.default.createElement(
          r,
          { onMouseDown: s.handleMouseDown, onMouseUp: s.handleMouseUp },
          $c.default.createElement(t, hL({}, s.props, s.state))
        );
      }, o), Sv(s, l);
    }
    return a;
  }($c.default.Component);
};
Ps.default = bL;
var ph = {};
Object.defineProperty(ph, "__esModule", {
  value: !0
});
var yL = function(t, r) {
  var n = {}, a = function(o) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    n[o] = s;
  };
  return t === 0 && a("first-child"), t === r - 1 && a("last-child"), (t === 0 || t % 2 === 0) && a("even"), Math.abs(t % 2) === 1 && a("odd"), a("nth-child", t), n;
};
ph.default = yL;
Object.defineProperty(kr, "__esModule", {
  value: !0
});
kr.ReactCSS = kr.loop = kr.handleActive = vh = kr.handleHover = kr.hover = void 0;
var _L = Cs, wL = Oo(_L), SL = Ts, xL = Oo(SL), EL = ks, CL = Oo(EL), DL = Rs, Xb = Oo(DL), OL = Ps, TL = Oo(OL), kL = ph, RL = Oo(kL);
function Oo(e) {
  return e && e.__esModule ? e : { default: e };
}
kr.hover = Xb.default;
var vh = kr.handleHover = Xb.default;
kr.handleActive = TL.default;
kr.loop = RL.default;
var PL = kr.ReactCSS = function(t) {
  for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    n[a - 1] = arguments[a];
  var i = (0, wL.default)(n), o = (0, xL.default)(t, i);
  return (0, CL.default)(o);
}, we = kr.default = PL, NL = function(t, r, n, a, i) {
  var o = i.clientWidth, s = i.clientHeight, l = typeof t.pageX == "number" ? t.pageX : t.touches[0].pageX, u = typeof t.pageY == "number" ? t.pageY : t.touches[0].pageY, c = l - (i.getBoundingClientRect().left + window.pageXOffset), d = u - (i.getBoundingClientRect().top + window.pageYOffset);
  if (n === "vertical") {
    var h = void 0;
    if (d < 0 ? h = 0 : d > s ? h = 1 : h = Math.round(d * 100 / s) / 100, r.a !== h)
      return {
        h: r.h,
        s: r.s,
        l: r.l,
        a: h,
        source: "rgb"
      };
  } else {
    var p = void 0;
    if (c < 0 ? p = 0 : c > o ? p = 1 : p = Math.round(c * 100 / o) / 100, a !== p)
      return {
        h: r.h,
        s: r.s,
        l: r.l,
        a: p,
        source: "rgb"
      };
  }
  return null;
}, Lc = {}, ML = function(t, r, n, a) {
  if (typeof document > "u" && !a)
    return null;
  var i = a ? new a() : document.createElement("canvas");
  i.width = n * 2, i.height = n * 2;
  var o = i.getContext("2d");
  return o ? (o.fillStyle = t, o.fillRect(0, 0, i.width, i.height), o.fillStyle = r, o.fillRect(0, 0, n, n), o.translate(n, n), o.fillRect(0, 0, n, n), i.toDataURL()) : null;
}, AL = function(t, r, n, a) {
  var i = t + "-" + r + "-" + n + (a ? "-server" : "");
  if (Lc[i])
    return Lc[i];
  var o = ML(t, r, n, a);
  return Lc[i] = o, o;
}, Ld = { exports: {} }, Yo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xv;
function IL() {
  if (xv) return Yo;
  xv = 1;
  var e = f, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(s, l, u) {
    var c, d = {}, h = null, p = null;
    u !== void 0 && (h = "" + u), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (p = l.ref);
    for (c in l) n.call(l, c) && !i.hasOwnProperty(c) && (d[c] = l[c]);
    if (s && s.defaultProps) for (c in l = s.defaultProps, l) d[c] === void 0 && (d[c] = l[c]);
    return { $$typeof: t, type: s, key: h, ref: p, props: d, _owner: a.current };
  }
  return Yo.Fragment = r, Yo.jsx = o, Yo.jsxs = o, Yo;
}
var Wo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ev;
function $L() {
  return Ev || (Ev = 1, process.env.NODE_ENV !== "production" && function() {
    var e = f, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v = Symbol.iterator, m = "@@iterator";
    function g(x) {
      if (x === null || typeof x != "object")
        return null;
      var H = v && x[v] || x[m];
      return typeof H == "function" ? H : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(x) {
      {
        for (var H = arguments.length, G = new Array(H > 1 ? H - 1 : 0), me = 1; me < H; me++)
          G[me - 1] = arguments[me];
        w("error", x, G);
      }
    }
    function w(x, H, G) {
      {
        var me = b.ReactDebugCurrentFrame, Be = me.getStackAddendum();
        Be !== "" && (H += "%s", G = G.concat([Be]));
        var Ke = G.map(function(Pe) {
          return String(Pe);
        });
        Ke.unshift("Warning: " + H), Function.prototype.apply.call(console[x], console, Ke);
      }
    }
    var S = !1, _ = !1, E = !1, C = !1, D = !1, O;
    O = Symbol.for("react.module.reference");
    function R(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === n || x === i || D || x === a || x === u || x === c || C || x === p || S || _ || E || typeof x == "object" && x !== null && (x.$$typeof === h || x.$$typeof === d || x.$$typeof === o || x.$$typeof === s || x.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === O || x.getModuleId !== void 0));
    }
    function P(x, H, G) {
      var me = x.displayName;
      if (me)
        return me;
      var Be = H.displayName || H.name || "";
      return Be !== "" ? G + "(" + Be + ")" : G;
    }
    function A(x) {
      return x.displayName || "Context";
    }
    function B(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
        return x.displayName || x.name || null;
      if (typeof x == "string")
        return x;
      switch (x) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case u:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case s:
            var H = x;
            return A(H) + ".Consumer";
          case o:
            var G = x;
            return A(G._context) + ".Provider";
          case l:
            return P(x, x.render, "ForwardRef");
          case d:
            var me = x.displayName || null;
            return me !== null ? me : B(x.type) || "Memo";
          case h: {
            var Be = x, Ke = Be._payload, Pe = Be._init;
            try {
              return B(Pe(Ke));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, K = 0, L, I, F, de, T, M, ie;
    function z() {
    }
    z.__reactDisabledLog = !0;
    function V() {
      {
        if (K === 0) {
          L = console.log, I = console.info, F = console.warn, de = console.error, T = console.group, M = console.groupCollapsed, ie = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: z,
            writable: !0
          };
          Object.defineProperties(console, {
            info: x,
            log: x,
            warn: x,
            error: x,
            group: x,
            groupCollapsed: x,
            groupEnd: x
          });
        }
        K++;
      }
    }
    function oe() {
      {
        if (K--, K === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, x, {
              value: L
            }),
            info: $({}, x, {
              value: I
            }),
            warn: $({}, x, {
              value: F
            }),
            error: $({}, x, {
              value: de
            }),
            group: $({}, x, {
              value: T
            }),
            groupCollapsed: $({}, x, {
              value: M
            }),
            groupEnd: $({}, x, {
              value: ie
            })
          });
        }
        K < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = b.ReactCurrentDispatcher, Z;
    function se(x, H, G) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (Be) {
            var me = Be.stack.trim().match(/\n( *(at )?)/);
            Z = me && me[1] || "";
          }
        return `
` + Z + x;
      }
    }
    var Q = !1, re;
    {
      var De = typeof WeakMap == "function" ? WeakMap : Map;
      re = new De();
    }
    function Y(x, H) {
      if (!x || Q)
        return "";
      {
        var G = re.get(x);
        if (G !== void 0)
          return G;
      }
      var me;
      Q = !0;
      var Be = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ke;
      Ke = X.current, X.current = null, V();
      try {
        if (H) {
          var Pe = function() {
            throw Error();
          };
          if (Object.defineProperty(Pe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Pe, []);
            } catch ($n) {
              me = $n;
            }
            Reflect.construct(x, [], Pe);
          } else {
            try {
              Pe.call();
            } catch ($n) {
              me = $n;
            }
            x.call(Pe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($n) {
            me = $n;
          }
          x();
        }
      } catch ($n) {
        if ($n && me && typeof $n.stack == "string") {
          for (var Te = $n.stack.split(`
`), Xt = me.stack.split(`
`), St = Te.length - 1, Tt = Xt.length - 1; St >= 1 && Tt >= 0 && Te[St] !== Xt[Tt]; )
            Tt--;
          for (; St >= 1 && Tt >= 0; St--, Tt--)
            if (Te[St] !== Xt[Tt]) {
              if (St !== 1 || Tt !== 1)
                do
                  if (St--, Tt--, Tt < 0 || Te[St] !== Xt[Tt]) {
                    var Sr = `
` + Te[St].replace(" at new ", " at ");
                    return x.displayName && Sr.includes("<anonymous>") && (Sr = Sr.replace("<anonymous>", x.displayName)), typeof x == "function" && re.set(x, Sr), Sr;
                  }
                while (St >= 1 && Tt >= 0);
              break;
            }
        }
      } finally {
        Q = !1, X.current = Ke, oe(), Error.prepareStackTrace = Be;
      }
      var yi = x ? x.displayName || x.name : "", Dp = yi ? se(yi) : "";
      return typeof x == "function" && re.set(x, Dp), Dp;
    }
    function He(x, H, G) {
      return Y(x, !1);
    }
    function kt(x) {
      var H = x.prototype;
      return !!(H && H.isReactComponent);
    }
    function ft(x, H, G) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return Y(x, kt(x));
      if (typeof x == "string")
        return se(x);
      switch (x) {
        case u:
          return se("Suspense");
        case c:
          return se("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case l:
            return He(x.render);
          case d:
            return ft(x.type, H, G);
          case h: {
            var me = x, Be = me._payload, Ke = me._init;
            try {
              return ft(Ke(Be), H, G);
            } catch {
            }
          }
        }
      return "";
    }
    var jt = Object.prototype.hasOwnProperty, Mt = {}, At = b.ReactDebugCurrentFrame;
    function Ot(x) {
      if (x) {
        var H = x._owner, G = ft(x.type, x._source, H ? H.type : null);
        At.setExtraStackFrame(G);
      } else
        At.setExtraStackFrame(null);
    }
    function Le(x, H, G, me, Be) {
      {
        var Ke = Function.call.bind(jt);
        for (var Pe in x)
          if (Ke(x, Pe)) {
            var Te = void 0;
            try {
              if (typeof x[Pe] != "function") {
                var Xt = Error((me || "React class") + ": " + G + " type `" + Pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[Pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Xt.name = "Invariant Violation", Xt;
              }
              Te = x[Pe](H, Pe, me, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (St) {
              Te = St;
            }
            Te && !(Te instanceof Error) && (Ot(Be), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", me || "React class", G, Pe, typeof Te), Ot(null)), Te instanceof Error && !(Te.message in Mt) && (Mt[Te.message] = !0, Ot(Be), y("Failed %s type: %s", G, Te.message), Ot(null));
          }
      }
    }
    var Ve = Array.isArray;
    function lr(x) {
      return Ve(x);
    }
    function It(x) {
      {
        var H = typeof Symbol == "function" && Symbol.toStringTag, G = H && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return G;
      }
    }
    function ht(x) {
      try {
        return bt(x), !1;
      } catch {
        return !0;
      }
    }
    function bt(x) {
      return "" + x;
    }
    function er(x) {
      if (ht(x))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", It(x)), bt(x);
    }
    var rt = b.ReactCurrentOwner, Rt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, tr, Yt, ln;
    ln = {};
    function un(x) {
      if (jt.call(x, "ref")) {
        var H = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function Wt(x) {
      if (jt.call(x, "key")) {
        var H = Object.getOwnPropertyDescriptor(x, "key").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function An(x, H) {
      if (typeof x.ref == "string" && rt.current && H && rt.current.stateNode !== H) {
        var G = B(rt.current.type);
        ln[G] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(rt.current.type), x.ref), ln[G] = !0);
      }
    }
    function Na(x, H) {
      {
        var G = function() {
          tr || (tr = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        G.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: G,
          configurable: !0
        });
      }
    }
    function mi(x, H) {
      {
        var G = function() {
          Yt || (Yt = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        G.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: G,
          configurable: !0
        });
      }
    }
    var bi = function(x, H, G, me, Be, Ke, Pe) {
      var Te = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: x,
        key: H,
        ref: G,
        props: Pe,
        // Record the component responsible for creating this element.
        _owner: Ke
      };
      return Te._store = {}, Object.defineProperty(Te._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Te, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: me
      }), Object.defineProperty(Te, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Be
      }), Object.freeze && (Object.freeze(Te.props), Object.freeze(Te)), Te;
    };
    function ca(x, H, G, me, Be) {
      {
        var Ke, Pe = {}, Te = null, Xt = null;
        G !== void 0 && (er(G), Te = "" + G), Wt(H) && (er(H.key), Te = "" + H.key), un(H) && (Xt = H.ref, An(H, Be));
        for (Ke in H)
          jt.call(H, Ke) && !Rt.hasOwnProperty(Ke) && (Pe[Ke] = H[Ke]);
        if (x && x.defaultProps) {
          var St = x.defaultProps;
          for (Ke in St)
            Pe[Ke] === void 0 && (Pe[Ke] = St[Ke]);
        }
        if (Te || Xt) {
          var Tt = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          Te && Na(Pe, Tt), Xt && mi(Pe, Tt);
        }
        return bi(x, Te, Xt, Be, me, rt.current, Pe);
      }
    }
    var da = b.ReactCurrentOwner, Ma = b.ReactDebugCurrentFrame;
    function wr(x) {
      if (x) {
        var H = x._owner, G = ft(x.type, x._source, H ? H.type : null);
        Ma.setExtraStackFrame(G);
      } else
        Ma.setExtraStackFrame(null);
    }
    var ur;
    ur = !1;
    function Vt(x) {
      return typeof x == "object" && x !== null && x.$$typeof === t;
    }
    function In() {
      {
        if (da.current) {
          var x = B(da.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function qe(x) {
      return "";
    }
    var pe = {};
    function Me(x) {
      {
        var H = In();
        if (!H) {
          var G = typeof x == "string" ? x : x.displayName || x.name;
          G && (H = `

Check the top-level render call using <` + G + ">.");
        }
        return H;
      }
    }
    function Re(x, H) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var G = Me(H);
        if (pe[G])
          return;
        pe[G] = !0;
        var me = "";
        x && x._owner && x._owner !== da.current && (me = " It was passed a child from " + B(x._owner.type) + "."), wr(x), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, me), wr(null);
      }
    }
    function it(x, H) {
      {
        if (typeof x != "object")
          return;
        if (lr(x))
          for (var G = 0; G < x.length; G++) {
            var me = x[G];
            Vt(me) && Re(me, H);
          }
        else if (Vt(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var Be = g(x);
          if (typeof Be == "function" && Be !== x.entries)
            for (var Ke = Be.call(x), Pe; !(Pe = Ke.next()).done; )
              Vt(Pe.value) && Re(Pe.value, H);
        }
      }
    }
    function yt(x) {
      {
        var H = x.type;
        if (H == null || typeof H == "string")
          return;
        var G;
        if (typeof H == "function")
          G = H.propTypes;
        else if (typeof H == "object" && (H.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        H.$$typeof === d))
          G = H.propTypes;
        else
          return;
        if (G) {
          var me = B(H);
          Le(G, x.props, "prop", me, x);
        } else if (H.PropTypes !== void 0 && !ur) {
          ur = !0;
          var Be = B(H);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Be || "Unknown");
        }
        typeof H.getDefaultProps == "function" && !H.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Kt(x) {
      {
        for (var H = Object.keys(x.props), G = 0; G < H.length; G++) {
          var me = H[G];
          if (me !== "children" && me !== "key") {
            wr(x), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", me), wr(null);
            break;
          }
        }
        x.ref !== null && (wr(x), y("Invalid attribute `ref` supplied to `React.Fragment`."), wr(null));
      }
    }
    function Ut(x, H, G, me, Be, Ke) {
      {
        var Pe = R(x);
        if (!Pe) {
          var Te = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (Te += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Xt = qe();
          Xt ? Te += Xt : Te += In();
          var St;
          x === null ? St = "null" : lr(x) ? St = "array" : x !== void 0 && x.$$typeof === t ? (St = "<" + (B(x.type) || "Unknown") + " />", Te = " Did you accidentally export a JSX literal instead of a component?") : St = typeof x, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", St, Te);
        }
        var Tt = ca(x, H, G, Be, Ke);
        if (Tt == null)
          return Tt;
        if (Pe) {
          var Sr = H.children;
          if (Sr !== void 0)
            if (me)
              if (lr(Sr)) {
                for (var yi = 0; yi < Sr.length; yi++)
                  it(Sr[yi], x);
                Object.freeze && Object.freeze(Sr);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              it(Sr, x);
        }
        return x === n ? Kt(Tt) : yt(Tt), Tt;
      }
    }
    function Gt(x, H, G) {
      return Ut(x, H, G, !0);
    }
    function cn(x, H, G) {
      return Ut(x, H, G, !1);
    }
    var dn = cn, Aa = Gt;
    Wo.Fragment = n, Wo.jsx = dn, Wo.jsxs = Aa;
  }()), Wo;
}
process.env.NODE_ENV === "production" ? Ld.exports = IL() : Ld.exports = $L();
var gh = Ld.exports;
const N = gh.jsx, lt = gh.jsxs, Qb = gh.Fragment;
var Cv = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }
  return e;
}, To = function(t) {
  var r = t.white, n = t.grey, a = t.size, i = t.renderers, o = t.borderRadius, s = t.boxShadow, l = t.children, u = we({
    default: {
      grid: {
        borderRadius: o,
        boxShadow: s,
        absolute: "0px 0px 0px 0px",
        background: "url(" + AL(r, n, a, i.canvas) + ") center left"
      }
    }
  });
  return b0(l) ? f.cloneElement(l, Cv({}, l.props, {
    style: Cv({}, l.props.style, u.grid)
  })) : /* @__PURE__ */ N("div", {
    style: u.grid
  });
};
To.defaultProps = {
  size: 8,
  white: "transparent",
  grey: "rgba(0,0,0,.08)",
  renderers: {}
};
var LL = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }
  return e;
}, FL = /* @__PURE__ */ function() {
  function e(t, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
    }
  }
  return function(t, r, n) {
    return r && e(t.prototype, r), n && e(t, n), t;
  };
}();
function HL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Dv(e, t) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function BL(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
var mh = function(e) {
  BL(t, e);
  function t() {
    var r, n, a, i;
    HL(this, t);
    for (var o = arguments.length, s = Array(o), l = 0; l < o; l++)
      s[l] = arguments[l];
    return i = (n = (a = Dv(this, (r = t.__proto__ || Object.getPrototypeOf(t)).call.apply(r, [this].concat(s))), a), a.handleChange = function(u) {
      var c = NL(u, a.props.hsl, a.props.direction, a.props.a, a.container);
      c && typeof a.props.onChange == "function" && a.props.onChange(c, u);
    }, a.handleMouseDown = function(u) {
      a.handleChange(u), window.addEventListener("mousemove", a.handleChange), window.addEventListener("mouseup", a.handleMouseUp);
    }, a.handleMouseUp = function() {
      a.unbindEventListeners();
    }, a.unbindEventListeners = function() {
      window.removeEventListener("mousemove", a.handleChange), window.removeEventListener("mouseup", a.handleMouseUp);
    }, n), Dv(a, i);
  }
  return FL(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.unbindEventListeners();
    }
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props.rgb, i = we({
        default: {
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
            background: "linear-gradient(to right, rgba(" + a.r + "," + a.g + "," + a.b + `, 0) 0%,
           rgba(` + a.r + "," + a.g + "," + a.b + ", 1) 100%)",
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
            left: a.a * 100 + "%"
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
        vertical: {
          gradient: {
            background: "linear-gradient(to bottom, rgba(" + a.r + "," + a.g + "," + a.b + `, 0) 0%,
           rgba(` + a.r + "," + a.g + "," + a.b + ", 1) 100%)"
          },
          pointer: {
            left: 0,
            top: a.a * 100 + "%"
          }
        },
        overwrite: LL({}, this.props.style)
      }, {
        vertical: this.props.direction === "vertical",
        overwrite: !0
      });
      return /* @__PURE__ */ lt("div", {
        style: i.alpha,
        children: [/* @__PURE__ */ N("div", {
          style: i.checkboard,
          children: /* @__PURE__ */ N(To, {
            renderers: this.props.renderers
          })
        }), /* @__PURE__ */ N("div", {
          style: i.gradient
        }), /* @__PURE__ */ N("div", {
          style: i.container,
          ref: function(s) {
            return n.container = s;
          },
          onMouseDown: this.handleMouseDown,
          onTouchMove: this.handleChange,
          onTouchStart: this.handleChange,
          children: /* @__PURE__ */ N("div", {
            style: i.pointer,
            children: this.props.pointer ? f.createElement(this.props.pointer, this.props) : /* @__PURE__ */ N("div", {
              style: i.slider
            })
          })
        })]
      });
    }
  }]), t;
}(ii || tt), jL = /* @__PURE__ */ function() {
  function e(t, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
    }
  }
  return function(t, r, n) {
    return r && e(t.prototype, r), n && e(t, n), t;
  };
}();
function YL(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function WL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function VL(e, t) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function UL(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
var GL = 1, Jb = 38, zL = 40, qL = [Jb, zL], KL = function(t) {
  return qL.indexOf(t) > -1;
}, XL = function(t) {
  return Number(String(t).replace(/%/g, ""));
}, QL = 1, Ae = function(e) {
  UL(t, e);
  function t(r) {
    WL(this, t);
    var n = VL(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
    return n.handleBlur = function() {
      n.state.blurValue && n.setState({
        value: n.state.blurValue,
        blurValue: null
      });
    }, n.handleChange = function(a) {
      n.setUpdatedValue(a.target.value, a);
    }, n.handleKeyDown = function(a) {
      var i = XL(a.target.value);
      if (!isNaN(i) && KL(a.keyCode)) {
        var o = n.getArrowOffset(), s = a.keyCode === Jb ? i + o : i - o;
        n.setUpdatedValue(s, a);
      }
    }, n.handleDrag = function(a) {
      if (n.props.dragLabel) {
        var i = Math.round(n.props.value + a.movementX);
        i >= 0 && i <= n.props.dragMax && n.props.onChange && n.props.onChange(n.getValueObjectWithLabel(i), a);
      }
    }, n.handleMouseDown = function(a) {
      n.props.dragLabel && (a.preventDefault(), n.handleDrag(a), window.addEventListener("mousemove", n.handleDrag), window.addEventListener("mouseup", n.handleMouseUp));
    }, n.handleMouseUp = function() {
      n.unbindEventListeners();
    }, n.unbindEventListeners = function() {
      window.removeEventListener("mousemove", n.handleDrag), window.removeEventListener("mouseup", n.handleMouseUp);
    }, n.state = {
      value: String(r.value).toUpperCase(),
      blurValue: String(r.value).toUpperCase()
    }, n.inputId = "rc-editable-input-" + QL++, n;
  }
  return jL(t, [{
    key: "componentDidUpdate",
    value: function(n, a) {
      this.props.value !== this.state.value && (n.value !== this.props.value || a.value !== this.state.value) && (this.input === document.activeElement ? this.setState({
        blurValue: String(this.props.value).toUpperCase()
      }) : this.setState({
        value: String(this.props.value).toUpperCase(),
        blurValue: !this.state.blurValue && String(this.props.value).toUpperCase()
      }));
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.unbindEventListeners();
    }
  }, {
    key: "getValueObjectWithLabel",
    value: function(n) {
      return YL({}, this.props.label, n);
    }
  }, {
    key: "getArrowOffset",
    value: function() {
      return this.props.arrowOffset || GL;
    }
  }, {
    key: "setUpdatedValue",
    value: function(n, a) {
      var i = this.props.label ? this.getValueObjectWithLabel(n) : n;
      this.props.onChange && this.props.onChange(i, a), this.setState({
        value: n
      });
    }
  }, {
    key: "render",
    value: function() {
      var n = this, a = we({
        default: {
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
        "user-override": !0
      }, this.props);
      return /* @__PURE__ */ lt("div", {
        style: a.wrap,
        children: [/* @__PURE__ */ N("input", {
          id: this.inputId,
          style: a.input,
          ref: function(o) {
            return n.input = o;
          },
          value: this.state.value,
          onKeyDown: this.handleKeyDown,
          onChange: this.handleChange,
          onBlur: this.handleBlur,
          placeholder: this.props.placeholder,
          spellCheck: "false"
        }), this.props.label && !this.props.hideLabel ? /* @__PURE__ */ N("label", {
          htmlFor: this.inputId,
          style: a.label,
          onMouseDown: this.handleMouseDown,
          children: this.props.label
        }) : null]
      });
    }
  }]), t;
}(ii || tt), JL = function(t, r, n, a) {
  var i = a.clientWidth, o = a.clientHeight, s = typeof t.pageX == "number" ? t.pageX : t.touches[0].pageX, l = typeof t.pageY == "number" ? t.pageY : t.touches[0].pageY, u = s - (a.getBoundingClientRect().left + window.pageXOffset), c = l - (a.getBoundingClientRect().top + window.pageYOffset);
  if (r === "vertical") {
    var d = void 0;
    if (c < 0)
      d = 359;
    else if (c > o)
      d = 0;
    else {
      var h = -(c * 100 / o) + 100;
      d = 360 * h / 100;
    }
    if (n.h !== d)
      return {
        h: d,
        s: n.s,
        l: n.l,
        a: n.a,
        source: "hsl"
      };
  } else {
    var p = void 0;
    if (u < 0)
      p = 0;
    else if (u > i)
      p = 359;
    else {
      var v = u * 100 / i;
      p = 360 * v / 100;
    }
    if (n.h !== p)
      return {
        h: p,
        s: n.s,
        l: n.l,
        a: n.a,
        source: "hsl"
      };
  }
  return null;
}, ZL = /* @__PURE__ */ function() {
  function e(t, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
    }
  }
  return function(t, r, n) {
    return r && e(t.prototype, r), n && e(t, n), t;
  };
}();
function e4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ov(e, t) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function t4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
var ko = function(e) {
  t4(t, e);
  function t() {
    var r, n, a, i;
    e4(this, t);
    for (var o = arguments.length, s = Array(o), l = 0; l < o; l++)
      s[l] = arguments[l];
    return i = (n = (a = Ov(this, (r = t.__proto__ || Object.getPrototypeOf(t)).call.apply(r, [this].concat(s))), a), a.handleChange = function(u) {
      var c = JL(u, a.props.direction, a.props.hsl, a.container);
      c && typeof a.props.onChange == "function" && a.props.onChange(c, u);
    }, a.handleMouseDown = function(u) {
      a.handleChange(u), window.addEventListener("mousemove", a.handleChange), window.addEventListener("mouseup", a.handleMouseUp);
    }, a.handleMouseUp = function() {
      a.unbindEventListeners();
    }, n), Ov(a, i);
  }
  return ZL(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.unbindEventListeners();
    }
  }, {
    key: "unbindEventListeners",
    value: function() {
      window.removeEventListener("mousemove", this.handleChange), window.removeEventListener("mouseup", this.handleMouseUp);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props.direction, i = a === void 0 ? "horizontal" : a, o = we({
        default: {
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
        vertical: {
          pointer: {
            left: "0px",
            top: -(this.props.hsl.h * 100 / 360) + 100 + "%"
          }
        }
      }, {
        vertical: i === "vertical"
      });
      return /* @__PURE__ */ N("div", {
        style: o.hue,
        children: /* @__PURE__ */ lt("div", {
          className: "hue-" + i,
          style: o.container,
          ref: function(l) {
            return n.container = l;
          },
          onMouseDown: this.handleMouseDown,
          onTouchMove: this.handleChange,
          onTouchStart: this.handleChange,
          children: [/* @__PURE__ */ N("style", {
            children: ".hue-horizontal { background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%); background: -webkit-linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%); } .hue-vertical { background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%); background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%); }"
          }), /* @__PURE__ */ N("div", {
            style: o.pointer,
            children: this.props.pointer ? f.createElement(this.props.pointer, this.props) : /* @__PURE__ */ N("div", {
              style: o.slider
            })
          })]
        })
      });
    }
  }]), t;
}(ii || tt), Fd = { exports: {} }, Zs = { exports: {} }, Ge = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tv;
function r4() {
  if (Tv) return Ge;
  Tv = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function w(_) {
    if (typeof _ == "object" && _ !== null) {
      var E = _.$$typeof;
      switch (E) {
        case t:
          switch (_ = _.type, _) {
            case l:
            case u:
            case n:
            case i:
            case a:
            case d:
              return _;
            default:
              switch (_ = _ && _.$$typeof, _) {
                case s:
                case c:
                case v:
                case p:
                case o:
                  return _;
                default:
                  return E;
              }
          }
        case r:
          return E;
      }
    }
  }
  function S(_) {
    return w(_) === u;
  }
  return Ge.AsyncMode = l, Ge.ConcurrentMode = u, Ge.ContextConsumer = s, Ge.ContextProvider = o, Ge.Element = t, Ge.ForwardRef = c, Ge.Fragment = n, Ge.Lazy = v, Ge.Memo = p, Ge.Portal = r, Ge.Profiler = i, Ge.StrictMode = a, Ge.Suspense = d, Ge.isAsyncMode = function(_) {
    return S(_) || w(_) === l;
  }, Ge.isConcurrentMode = S, Ge.isContextConsumer = function(_) {
    return w(_) === s;
  }, Ge.isContextProvider = function(_) {
    return w(_) === o;
  }, Ge.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === t;
  }, Ge.isForwardRef = function(_) {
    return w(_) === c;
  }, Ge.isFragment = function(_) {
    return w(_) === n;
  }, Ge.isLazy = function(_) {
    return w(_) === v;
  }, Ge.isMemo = function(_) {
    return w(_) === p;
  }, Ge.isPortal = function(_) {
    return w(_) === r;
  }, Ge.isProfiler = function(_) {
    return w(_) === i;
  }, Ge.isStrictMode = function(_) {
    return w(_) === a;
  }, Ge.isSuspense = function(_) {
    return w(_) === d;
  }, Ge.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === n || _ === u || _ === i || _ === a || _ === d || _ === h || typeof _ == "object" && _ !== null && (_.$$typeof === v || _.$$typeof === p || _.$$typeof === o || _.$$typeof === s || _.$$typeof === c || _.$$typeof === g || _.$$typeof === b || _.$$typeof === y || _.$$typeof === m);
  }, Ge.typeOf = w, Ge;
}
var ze = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kv;
function n4() {
  return kv || (kv = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function w(Y) {
      return typeof Y == "string" || typeof Y == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      Y === n || Y === u || Y === i || Y === a || Y === d || Y === h || typeof Y == "object" && Y !== null && (Y.$$typeof === v || Y.$$typeof === p || Y.$$typeof === o || Y.$$typeof === s || Y.$$typeof === c || Y.$$typeof === g || Y.$$typeof === b || Y.$$typeof === y || Y.$$typeof === m);
    }
    function S(Y) {
      if (typeof Y == "object" && Y !== null) {
        var He = Y.$$typeof;
        switch (He) {
          case t:
            var kt = Y.type;
            switch (kt) {
              case l:
              case u:
              case n:
              case i:
              case a:
              case d:
                return kt;
              default:
                var ft = kt && kt.$$typeof;
                switch (ft) {
                  case s:
                  case c:
                  case v:
                  case p:
                  case o:
                    return ft;
                  default:
                    return He;
                }
            }
          case r:
            return He;
        }
      }
    }
    var _ = l, E = u, C = s, D = o, O = t, R = c, P = n, A = v, B = p, $ = r, K = i, L = a, I = d, F = !1;
    function de(Y) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), T(Y) || S(Y) === l;
    }
    function T(Y) {
      return S(Y) === u;
    }
    function M(Y) {
      return S(Y) === s;
    }
    function ie(Y) {
      return S(Y) === o;
    }
    function z(Y) {
      return typeof Y == "object" && Y !== null && Y.$$typeof === t;
    }
    function V(Y) {
      return S(Y) === c;
    }
    function oe(Y) {
      return S(Y) === n;
    }
    function X(Y) {
      return S(Y) === v;
    }
    function Z(Y) {
      return S(Y) === p;
    }
    function se(Y) {
      return S(Y) === r;
    }
    function Q(Y) {
      return S(Y) === i;
    }
    function re(Y) {
      return S(Y) === a;
    }
    function De(Y) {
      return S(Y) === d;
    }
    ze.AsyncMode = _, ze.ConcurrentMode = E, ze.ContextConsumer = C, ze.ContextProvider = D, ze.Element = O, ze.ForwardRef = R, ze.Fragment = P, ze.Lazy = A, ze.Memo = B, ze.Portal = $, ze.Profiler = K, ze.StrictMode = L, ze.Suspense = I, ze.isAsyncMode = de, ze.isConcurrentMode = T, ze.isContextConsumer = M, ze.isContextProvider = ie, ze.isElement = z, ze.isForwardRef = V, ze.isFragment = oe, ze.isLazy = X, ze.isMemo = Z, ze.isPortal = se, ze.isProfiler = Q, ze.isStrictMode = re, ze.isSuspense = De, ze.isValidElementType = w, ze.typeOf = S;
  }()), ze;
}
var Rv;
function Zb() {
  return Rv || (Rv = 1, process.env.NODE_ENV === "production" ? Zs.exports = r4() : Zs.exports = n4()), Zs.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Fc, Pv;
function a4() {
  if (Pv) return Fc;
  Pv = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var o = {}, s = 0; s < 10; s++)
        o["_" + String.fromCharCode(s)] = s;
      var l = Object.getOwnPropertyNames(o).map(function(c) {
        return o[c];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        u[c] = c;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Fc = a() ? Object.assign : function(i, o) {
    for (var s, l = n(i), u, c = 1; c < arguments.length; c++) {
      s = Object(arguments[c]);
      for (var d in s)
        t.call(s, d) && (l[d] = s[d]);
      if (e) {
        u = e(s);
        for (var h = 0; h < u.length; h++)
          r.call(s, u[h]) && (l[u[h]] = s[u[h]]);
      }
    }
    return l;
  }, Fc;
}
var Hc, Nv;
function bh() {
  if (Nv) return Hc;
  Nv = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Hc = e, Hc;
}
var Bc, Mv;
function ey() {
  return Mv || (Mv = 1, Bc = Function.call.bind(Object.prototype.hasOwnProperty)), Bc;
}
var jc, Av;
function i4() {
  if (Av) return jc;
  Av = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = bh(), r = {}, n = ey();
    e = function(i) {
      var o = "Warning: " + i;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function a(i, o, s, l, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in i)
        if (n(i, c)) {
          var d;
          try {
            if (typeof i[c] != "function") {
              var h = Error(
                (l || "React class") + ": " + s + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            d = i[c](o, c, l, s, null, t);
          } catch (v) {
            d = v;
          }
          if (d && !(d instanceof Error) && e(
            (l || "React class") + ": type specification of " + s + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in r)) {
            r[d.message] = !0;
            var p = u ? u() : "";
            e(
              "Failed " + s + " type: " + d.message + (p ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, jc = a, jc;
}
var Yc, Iv;
function o4() {
  if (Iv) return Yc;
  Iv = 1;
  var e = Zb(), t = a4(), r = bh(), n = ey(), a = i4(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var l = "Warning: " + s;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return Yc = function(s, l) {
    var u = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function d(T) {
      var M = T && (u && T[u] || T[c]);
      if (typeof M == "function")
        return M;
    }
    var h = "<<anonymous>>", p = {
      array: b("array"),
      bigint: b("bigint"),
      bool: b("boolean"),
      func: b("function"),
      number: b("number"),
      object: b("object"),
      string: b("string"),
      symbol: b("symbol"),
      any: y(),
      arrayOf: w,
      element: S(),
      elementType: _(),
      instanceOf: E,
      node: R(),
      objectOf: D,
      oneOf: C,
      oneOfType: O,
      shape: A,
      exact: B
    };
    function v(T, M) {
      return T === M ? T !== 0 || 1 / T === 1 / M : T !== T && M !== M;
    }
    function m(T, M) {
      this.message = T, this.data = M && typeof M == "object" ? M : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function g(T) {
      if (process.env.NODE_ENV !== "production")
        var M = {}, ie = 0;
      function z(oe, X, Z, se, Q, re, De) {
        if (se = se || h, re = re || Z, De !== r) {
          if (l) {
            var Y = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw Y.name = "Invariant Violation", Y;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var He = se + ":" + Z;
            !M[He] && // Avoid spamming the console because they are often not actionable except for lib authors
            ie < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + re + "` prop on `" + se + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), M[He] = !0, ie++);
          }
        }
        return X[Z] == null ? oe ? X[Z] === null ? new m("The " + Q + " `" + re + "` is marked as required " + ("in `" + se + "`, but its value is `null`.")) : new m("The " + Q + " `" + re + "` is marked as required in " + ("`" + se + "`, but its value is `undefined`.")) : null : T(X, Z, se, Q, re);
      }
      var V = z.bind(null, !1);
      return V.isRequired = z.bind(null, !0), V;
    }
    function b(T) {
      function M(ie, z, V, oe, X, Z) {
        var se = ie[z], Q = L(se);
        if (Q !== T) {
          var re = I(se);
          return new m(
            "Invalid " + oe + " `" + X + "` of type " + ("`" + re + "` supplied to `" + V + "`, expected ") + ("`" + T + "`."),
            { expectedType: T }
          );
        }
        return null;
      }
      return g(M);
    }
    function y() {
      return g(o);
    }
    function w(T) {
      function M(ie, z, V, oe, X) {
        if (typeof T != "function")
          return new m("Property `" + X + "` of component `" + V + "` has invalid PropType notation inside arrayOf.");
        var Z = ie[z];
        if (!Array.isArray(Z)) {
          var se = L(Z);
          return new m("Invalid " + oe + " `" + X + "` of type " + ("`" + se + "` supplied to `" + V + "`, expected an array."));
        }
        for (var Q = 0; Q < Z.length; Q++) {
          var re = T(Z, Q, V, oe, X + "[" + Q + "]", r);
          if (re instanceof Error)
            return re;
        }
        return null;
      }
      return g(M);
    }
    function S() {
      function T(M, ie, z, V, oe) {
        var X = M[ie];
        if (!s(X)) {
          var Z = L(X);
          return new m("Invalid " + V + " `" + oe + "` of type " + ("`" + Z + "` supplied to `" + z + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(T);
    }
    function _() {
      function T(M, ie, z, V, oe) {
        var X = M[ie];
        if (!e.isValidElementType(X)) {
          var Z = L(X);
          return new m("Invalid " + V + " `" + oe + "` of type " + ("`" + Z + "` supplied to `" + z + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(T);
    }
    function E(T) {
      function M(ie, z, V, oe, X) {
        if (!(ie[z] instanceof T)) {
          var Z = T.name || h, se = de(ie[z]);
          return new m("Invalid " + oe + " `" + X + "` of type " + ("`" + se + "` supplied to `" + V + "`, expected ") + ("instance of `" + Z + "`."));
        }
        return null;
      }
      return g(M);
    }
    function C(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), o;
      function M(ie, z, V, oe, X) {
        for (var Z = ie[z], se = 0; se < T.length; se++)
          if (v(Z, T[se]))
            return null;
        var Q = JSON.stringify(T, function(De, Y) {
          var He = I(Y);
          return He === "symbol" ? String(Y) : Y;
        });
        return new m("Invalid " + oe + " `" + X + "` of value `" + String(Z) + "` " + ("supplied to `" + V + "`, expected one of " + Q + "."));
      }
      return g(M);
    }
    function D(T) {
      function M(ie, z, V, oe, X) {
        if (typeof T != "function")
          return new m("Property `" + X + "` of component `" + V + "` has invalid PropType notation inside objectOf.");
        var Z = ie[z], se = L(Z);
        if (se !== "object")
          return new m("Invalid " + oe + " `" + X + "` of type " + ("`" + se + "` supplied to `" + V + "`, expected an object."));
        for (var Q in Z)
          if (n(Z, Q)) {
            var re = T(Z, Q, V, oe, X + "." + Q, r);
            if (re instanceof Error)
              return re;
          }
        return null;
      }
      return g(M);
    }
    function O(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var M = 0; M < T.length; M++) {
        var ie = T[M];
        if (typeof ie != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + F(ie) + " at index " + M + "."
          ), o;
      }
      function z(V, oe, X, Z, se) {
        for (var Q = [], re = 0; re < T.length; re++) {
          var De = T[re], Y = De(V, oe, X, Z, se, r);
          if (Y == null)
            return null;
          Y.data && n(Y.data, "expectedType") && Q.push(Y.data.expectedType);
        }
        var He = Q.length > 0 ? ", expected one of type [" + Q.join(", ") + "]" : "";
        return new m("Invalid " + Z + " `" + se + "` supplied to " + ("`" + X + "`" + He + "."));
      }
      return g(z);
    }
    function R() {
      function T(M, ie, z, V, oe) {
        return $(M[ie]) ? null : new m("Invalid " + V + " `" + oe + "` supplied to " + ("`" + z + "`, expected a ReactNode."));
      }
      return g(T);
    }
    function P(T, M, ie, z, V) {
      return new m(
        (T || "React class") + ": " + M + " type `" + ie + "." + z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + V + "`."
      );
    }
    function A(T) {
      function M(ie, z, V, oe, X) {
        var Z = ie[z], se = L(Z);
        if (se !== "object")
          return new m("Invalid " + oe + " `" + X + "` of type `" + se + "` " + ("supplied to `" + V + "`, expected `object`."));
        for (var Q in T) {
          var re = T[Q];
          if (typeof re != "function")
            return P(V, oe, X, Q, I(re));
          var De = re(Z, Q, V, oe, X + "." + Q, r);
          if (De)
            return De;
        }
        return null;
      }
      return g(M);
    }
    function B(T) {
      function M(ie, z, V, oe, X) {
        var Z = ie[z], se = L(Z);
        if (se !== "object")
          return new m("Invalid " + oe + " `" + X + "` of type `" + se + "` " + ("supplied to `" + V + "`, expected `object`."));
        var Q = t({}, ie[z], T);
        for (var re in Q) {
          var De = T[re];
          if (n(T, re) && typeof De != "function")
            return P(V, oe, X, re, I(De));
          if (!De)
            return new m(
              "Invalid " + oe + " `" + X + "` key `" + re + "` supplied to `" + V + "`.\nBad object: " + JSON.stringify(ie[z], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(T), null, "  ")
            );
          var Y = De(Z, re, V, oe, X + "." + re, r);
          if (Y)
            return Y;
        }
        return null;
      }
      return g(M);
    }
    function $(T) {
      switch (typeof T) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !T;
        case "object":
          if (Array.isArray(T))
            return T.every($);
          if (T === null || s(T))
            return !0;
          var M = d(T);
          if (M) {
            var ie = M.call(T), z;
            if (M !== T.entries) {
              for (; !(z = ie.next()).done; )
                if (!$(z.value))
                  return !1;
            } else
              for (; !(z = ie.next()).done; ) {
                var V = z.value;
                if (V && !$(V[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function K(T, M) {
      return T === "symbol" ? !0 : M ? M["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && M instanceof Symbol : !1;
    }
    function L(T) {
      var M = typeof T;
      return Array.isArray(T) ? "array" : T instanceof RegExp ? "object" : K(M, T) ? "symbol" : M;
    }
    function I(T) {
      if (typeof T > "u" || T === null)
        return "" + T;
      var M = L(T);
      if (M === "object") {
        if (T instanceof Date)
          return "date";
        if (T instanceof RegExp)
          return "regexp";
      }
      return M;
    }
    function F(T) {
      var M = I(T);
      switch (M) {
        case "array":
        case "object":
          return "an " + M;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + M;
        default:
          return M;
      }
    }
    function de(T) {
      return !T.constructor || !T.constructor.name ? h : T.constructor.name;
    }
    return p.checkPropTypes = a, p.resetWarningCache = a.resetWarningCache, p.PropTypes = p, p;
  }, Yc;
}
var Wc, $v;
function s4() {
  if ($v) return Wc;
  $v = 1;
  var e = bh();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Wc = function() {
    function n(o, s, l, u, c, d) {
      if (d !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    n.isRequired = n;
    function a() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: a,
      element: n,
      elementType: n,
      instanceOf: a,
      node: n,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Wc;
}
if (process.env.NODE_ENV !== "production") {
  var l4 = Zb(), u4 = !0;
  Fd.exports = o4()(l4.isElement, u4);
} else
  Fd.exports = s4()();
var c4 = Fd.exports;
const q = /* @__PURE__ */ hb(c4);
function d4() {
  this.__data__ = [], this.size = 0;
}
function Ns(e, t) {
  return e === t || e !== e && t !== t;
}
function Gu(e, t) {
  for (var r = e.length; r--; )
    if (Ns(e[r][0], t))
      return r;
  return -1;
}
var f4 = Array.prototype, h4 = f4.splice;
function p4(e) {
  var t = this.__data__, r = Gu(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : h4.call(t, r, 1), --this.size, !0;
}
function v4(e) {
  var t = this.__data__, r = Gu(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function g4(e) {
  return Gu(this.__data__, e) > -1;
}
function m4(e, t) {
  var r = this.__data__, n = Gu(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function sa(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
sa.prototype.clear = d4;
sa.prototype.delete = p4;
sa.prototype.get = v4;
sa.prototype.has = g4;
sa.prototype.set = m4;
function b4() {
  this.__data__ = new sa(), this.size = 0;
}
function y4(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function _4(e) {
  return this.__data__.get(e);
}
function w4(e) {
  return this.__data__.has(e);
}
var ty = typeof global == "object" && global && global.Object === Object && global, S4 = typeof self == "object" && self && self.Object === Object && self, an = ty || S4 || Function("return this")(), Ea = an.Symbol, ry = Object.prototype, x4 = ry.hasOwnProperty, E4 = ry.toString, Vo = Ea ? Ea.toStringTag : void 0;
function C4(e) {
  var t = x4.call(e, Vo), r = e[Vo];
  try {
    e[Vo] = void 0;
    var n = !0;
  } catch {
  }
  var a = E4.call(e);
  return n && (t ? e[Vo] = r : delete e[Vo]), a;
}
var D4 = Object.prototype, O4 = D4.toString;
function T4(e) {
  return O4.call(e);
}
var k4 = "[object Null]", R4 = "[object Undefined]", Lv = Ea ? Ea.toStringTag : void 0;
function ui(e) {
  return e == null ? e === void 0 ? R4 : k4 : Lv && Lv in Object(e) ? C4(e) : T4(e);
}
function $r(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var P4 = "[object AsyncFunction]", N4 = "[object Function]", M4 = "[object GeneratorFunction]", A4 = "[object Proxy]";
function yh(e) {
  if (!$r(e))
    return !1;
  var t = ui(e);
  return t == N4 || t == M4 || t == P4 || t == A4;
}
var Vc = an["__core-js_shared__"], Fv = function() {
  var e = /[^.]+$/.exec(Vc && Vc.keys && Vc.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function I4(e) {
  return !!Fv && Fv in e;
}
var $4 = Function.prototype, L4 = $4.toString;
function ci(e) {
  if (e != null) {
    try {
      return L4.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var F4 = /[\\^$.*+?()[\]{}|]/g, H4 = /^\[object .+?Constructor\]$/, B4 = Function.prototype, j4 = Object.prototype, Y4 = B4.toString, W4 = j4.hasOwnProperty, V4 = RegExp(
  "^" + Y4.call(W4).replace(F4, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function U4(e) {
  if (!$r(e) || I4(e))
    return !1;
  var t = yh(e) ? V4 : H4;
  return t.test(ci(e));
}
function G4(e, t) {
  return e == null ? void 0 : e[t];
}
function di(e, t) {
  var r = G4(e, t);
  return U4(r) ? r : void 0;
}
var cs = di(an, "Map"), ds = di(Object, "create");
function z4() {
  this.__data__ = ds ? ds(null) : {}, this.size = 0;
}
function q4(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var K4 = "__lodash_hash_undefined__", X4 = Object.prototype, Q4 = X4.hasOwnProperty;
function J4(e) {
  var t = this.__data__;
  if (ds) {
    var r = t[e];
    return r === K4 ? void 0 : r;
  }
  return Q4.call(t, e) ? t[e] : void 0;
}
var Z4 = Object.prototype, eF = Z4.hasOwnProperty;
function tF(e) {
  var t = this.__data__;
  return ds ? t[e] !== void 0 : eF.call(t, e);
}
var rF = "__lodash_hash_undefined__";
function nF(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ds && t === void 0 ? rF : t, this;
}
function Ka(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ka.prototype.clear = z4;
Ka.prototype.delete = q4;
Ka.prototype.get = J4;
Ka.prototype.has = tF;
Ka.prototype.set = nF;
function aF() {
  this.size = 0, this.__data__ = {
    hash: new Ka(),
    map: new (cs || sa)(),
    string: new Ka()
  };
}
function iF(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function zu(e, t) {
  var r = e.__data__;
  return iF(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function oF(e) {
  var t = zu(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function sF(e) {
  return zu(this, e).get(e);
}
function lF(e) {
  return zu(this, e).has(e);
}
function uF(e, t) {
  var r = zu(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function la(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
la.prototype.clear = aF;
la.prototype.delete = oF;
la.prototype.get = sF;
la.prototype.has = lF;
la.prototype.set = uF;
var cF = 200;
function dF(e, t) {
  var r = this.__data__;
  if (r instanceof sa) {
    var n = r.__data__;
    if (!cs || n.length < cF - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new la(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function wn(e) {
  var t = this.__data__ = new sa(e);
  this.size = t.size;
}
wn.prototype.clear = b4;
wn.prototype.delete = y4;
wn.prototype.get = _4;
wn.prototype.has = w4;
wn.prototype.set = dF;
var Gl = function() {
  try {
    var e = di(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function _h(e, t, r) {
  t == "__proto__" && Gl ? Gl(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function Hd(e, t, r) {
  (r !== void 0 && !Ns(e[t], r) || r === void 0 && !(t in e)) && _h(e, t, r);
}
function fF(e) {
  return function(t, r, n) {
    for (var a = -1, i = Object(t), o = n(t), s = o.length; s--; ) {
      var l = o[++a];
      if (r(i[l], l, i) === !1)
        break;
    }
    return t;
  };
}
var ny = fF(), ay = typeof exports == "object" && exports && !exports.nodeType && exports, Hv = ay && typeof module == "object" && module && !module.nodeType && module, hF = Hv && Hv.exports === ay, Bv = hF ? an.Buffer : void 0;
Bv && Bv.allocUnsafe;
function pF(e, t) {
  return e.slice();
}
var zl = an.Uint8Array;
function vF(e) {
  var t = new e.constructor(e.byteLength);
  return new zl(t).set(new zl(e)), t;
}
function gF(e, t) {
  var r = vF(e.buffer);
  return new e.constructor(r, e.byteOffset, e.length);
}
function mF(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var jv = Object.create, bF = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!$r(t))
      return {};
    if (jv)
      return jv(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function iy(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var oy = iy(Object.getPrototypeOf, Object), yF = Object.prototype;
function wh(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || yF;
  return e === r;
}
function _F(e) {
  return typeof e.constructor == "function" && !wh(e) ? bF(oy(e)) : {};
}
function Ca(e) {
  return e != null && typeof e == "object";
}
var wF = "[object Arguments]";
function Yv(e) {
  return Ca(e) && ui(e) == wF;
}
var sy = Object.prototype, SF = sy.hasOwnProperty, xF = sy.propertyIsEnumerable, ql = Yv(/* @__PURE__ */ function() {
  return arguments;
}()) ? Yv : function(e) {
  return Ca(e) && SF.call(e, "callee") && !xF.call(e, "callee");
}, br = Array.isArray, EF = 9007199254740991;
function Sh(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= EF;
}
function Ro(e) {
  return e != null && Sh(e.length) && !yh(e);
}
function CF(e) {
  return Ca(e) && Ro(e);
}
function DF() {
  return !1;
}
var ly = typeof exports == "object" && exports && !exports.nodeType && exports, Wv = ly && typeof module == "object" && module && !module.nodeType && module, OF = Wv && Wv.exports === ly, Vv = OF ? an.Buffer : void 0, TF = Vv ? Vv.isBuffer : void 0, Kl = TF || DF, kF = "[object Object]", RF = Function.prototype, PF = Object.prototype, uy = RF.toString, NF = PF.hasOwnProperty, MF = uy.call(Object);
function AF(e) {
  if (!Ca(e) || ui(e) != kF)
    return !1;
  var t = oy(e);
  if (t === null)
    return !0;
  var r = NF.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && uy.call(r) == MF;
}
var IF = "[object Arguments]", $F = "[object Array]", LF = "[object Boolean]", FF = "[object Date]", HF = "[object Error]", BF = "[object Function]", jF = "[object Map]", YF = "[object Number]", WF = "[object Object]", VF = "[object RegExp]", UF = "[object Set]", GF = "[object String]", zF = "[object WeakMap]", qF = "[object ArrayBuffer]", KF = "[object DataView]", XF = "[object Float32Array]", QF = "[object Float64Array]", JF = "[object Int8Array]", ZF = "[object Int16Array]", e3 = "[object Int32Array]", t3 = "[object Uint8Array]", r3 = "[object Uint8ClampedArray]", n3 = "[object Uint16Array]", a3 = "[object Uint32Array]", st = {};
st[XF] = st[QF] = st[JF] = st[ZF] = st[e3] = st[t3] = st[r3] = st[n3] = st[a3] = !0;
st[IF] = st[$F] = st[qF] = st[LF] = st[KF] = st[FF] = st[HF] = st[BF] = st[jF] = st[YF] = st[WF] = st[VF] = st[UF] = st[GF] = st[zF] = !1;
function i3(e) {
  return Ca(e) && Sh(e.length) && !!st[ui(e)];
}
function o3(e) {
  return function(t) {
    return e(t);
  };
}
var cy = typeof exports == "object" && exports && !exports.nodeType && exports, ns = cy && typeof module == "object" && module && !module.nodeType && module, s3 = ns && ns.exports === cy, Uc = s3 && ty.process, Uv = function() {
  try {
    var e = ns && ns.require && ns.require("util").types;
    return e || Uc && Uc.binding && Uc.binding("util");
  } catch {
  }
}(), Gv = Uv && Uv.isTypedArray, xh = Gv ? o3(Gv) : i3;
function Bd(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var l3 = Object.prototype, u3 = l3.hasOwnProperty;
function c3(e, t, r) {
  var n = e[t];
  (!(u3.call(e, t) && Ns(n, r)) || r === void 0 && !(t in e)) && _h(e, t, r);
}
function d3(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var i = -1, o = t.length; ++i < o; ) {
    var s = t[i], l = void 0;
    l === void 0 && (l = e[s]), a ? _h(r, s, l) : c3(r, s, l);
  }
  return r;
}
function f3(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var h3 = 9007199254740991, p3 = /^(?:0|[1-9]\d*)$/;
function Eh(e, t) {
  var r = typeof e;
  return t = t ?? h3, !!t && (r == "number" || r != "symbol" && p3.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var v3 = Object.prototype, g3 = v3.hasOwnProperty;
function dy(e, t) {
  var r = br(e), n = !r && ql(e), a = !r && !n && Kl(e), i = !r && !n && !a && xh(e), o = r || n || a || i, s = o ? f3(e.length, String) : [], l = s.length;
  for (var u in e)
    (t || g3.call(e, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Eh(u, l))) && s.push(u);
  return s;
}
function m3(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var b3 = Object.prototype, y3 = b3.hasOwnProperty;
function _3(e) {
  if (!$r(e))
    return m3(e);
  var t = wh(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !y3.call(e, n)) || r.push(n);
  return r;
}
function fy(e) {
  return Ro(e) ? dy(e, !0) : _3(e);
}
function w3(e) {
  return d3(e, fy(e));
}
function S3(e, t, r, n, a, i, o) {
  var s = Bd(e, r), l = Bd(t, r), u = o.get(l);
  if (u) {
    Hd(e, r, u);
    return;
  }
  var c = i ? i(s, l, r + "", e, t, o) : void 0, d = c === void 0;
  if (d) {
    var h = br(l), p = !h && Kl(l), v = !h && !p && xh(l);
    c = l, h || p || v ? br(s) ? c = s : CF(s) ? c = mF(s) : p ? (d = !1, c = pF(l)) : v ? (d = !1, c = gF(l)) : c = [] : AF(l) || ql(l) ? (c = s, ql(s) ? c = w3(s) : (!$r(s) || yh(s)) && (c = _F(l))) : d = !1;
  }
  d && (o.set(l, c), a(c, l, n, i, o), o.delete(l)), Hd(e, r, c);
}
function hy(e, t, r, n, a) {
  e !== t && ny(t, function(i, o) {
    if (a || (a = new wn()), $r(i))
      S3(e, t, o, r, hy, n, a);
    else {
      var s = n ? n(Bd(e, o), i, o + "", e, t, a) : void 0;
      s === void 0 && (s = i), Hd(e, o, s);
    }
  }, fy);
}
function qu(e) {
  return e;
}
function x3(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var zv = Math.max;
function E3(e, t, r) {
  return t = zv(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, i = zv(n.length - t, 0), o = Array(i); ++a < i; )
      o[a] = n[t + a];
    a = -1;
    for (var s = Array(t + 1); ++a < t; )
      s[a] = n[a];
    return s[t] = r(o), x3(e, this, s);
  };
}
function C3(e) {
  return function() {
    return e;
  };
}
var D3 = Gl ? function(e, t) {
  return Gl(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: C3(t),
    writable: !0
  });
} : qu, O3 = 800, T3 = 16, k3 = Date.now;
function R3(e) {
  var t = 0, r = 0;
  return function() {
    var n = k3(), a = T3 - (n - r);
    if (r = n, a > 0) {
      if (++t >= O3)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var P3 = R3(D3);
function N3(e, t) {
  return P3(E3(e, t, qu), e + "");
}
function M3(e, t, r) {
  if (!$r(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? Ro(r) && Eh(t, r.length) : n == "string" && t in r) ? Ns(r[t], e) : !1;
}
function A3(e) {
  return N3(function(t, r) {
    var n = -1, a = r.length, i = a > 1 ? r[a - 1] : void 0, o = a > 2 ? r[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (a--, i) : void 0, o && M3(r[0], r[1], o) && (i = a < 3 ? void 0 : i, a = 1), t = Object(t); ++n < a; ) {
      var s = r[n];
      s && e(t, s, n, i);
    }
    return t;
  });
}
var or = A3(function(e, t, r) {
  hy(e, t, r);
}), Ms = function(t) {
  var r = t.zDepth, n = t.radius, a = t.background, i = t.children, o = t.styles, s = o === void 0 ? {} : o, l = we(or({
    default: {
      wrap: {
        position: "relative",
        display: "inline-block"
      },
      content: {
        position: "relative"
      },
      bg: {
        absolute: "0px 0px 0px 0px",
        boxShadow: "0 " + r + "px " + r * 4 + "px rgba(0,0,0,.24)",
        borderRadius: n,
        background: a
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
    square: {
      bg: {
        borderRadius: "0"
      }
    },
    circle: {
      bg: {
        borderRadius: "50%"
      }
    }
  }, s), { "zDepth-1": r === 1 });
  return f.createElement(
    "div",
    { style: l.wrap },
    f.createElement("div", { style: l.bg }),
    f.createElement(
      "div",
      { style: l.content },
      i
    )
  );
};
Ms.propTypes = {
  background: q.string,
  zDepth: q.oneOf([0, 1, 2, 3, 4, 5]),
  radius: q.number,
  styles: q.object
};
Ms.defaultProps = {
  background: "#fff",
  zDepth: 1,
  radius: 2,
  styles: {}
};
var Gc = function() {
  return an.Date.now();
}, I3 = /\s/;
function $3(e) {
  for (var t = e.length; t-- && I3.test(e.charAt(t)); )
    ;
  return t;
}
var L3 = /^\s+/;
function F3(e) {
  return e && e.slice(0, $3(e) + 1).replace(L3, "");
}
var H3 = "[object Symbol]";
function Ku(e) {
  return typeof e == "symbol" || Ca(e) && ui(e) == H3;
}
var qv = NaN, B3 = /^[-+]0x[0-9a-f]+$/i, j3 = /^0b[01]+$/i, Y3 = /^0o[0-7]+$/i, W3 = parseInt;
function Kv(e) {
  if (typeof e == "number")
    return e;
  if (Ku(e))
    return qv;
  if ($r(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = $r(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = F3(e);
  var r = j3.test(e);
  return r || Y3.test(e) ? W3(e.slice(2), r ? 2 : 8) : B3.test(e) ? qv : +e;
}
var V3 = "Expected a function", U3 = Math.max, G3 = Math.min;
function py(e, t, r) {
  var n, a, i, o, s, l, u = 0, c = !1, d = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(V3);
  t = Kv(t) || 0, $r(r) && (c = !!r.leading, d = "maxWait" in r, i = d ? U3(Kv(r.maxWait) || 0, t) : i, h = "trailing" in r ? !!r.trailing : h);
  function p(E) {
    var C = n, D = a;
    return n = a = void 0, u = E, o = e.apply(D, C), o;
  }
  function v(E) {
    return u = E, s = setTimeout(b, t), c ? p(E) : o;
  }
  function m(E) {
    var C = E - l, D = E - u, O = t - C;
    return d ? G3(O, i - D) : O;
  }
  function g(E) {
    var C = E - l, D = E - u;
    return l === void 0 || C >= t || C < 0 || d && D >= i;
  }
  function b() {
    var E = Gc();
    if (g(E))
      return y(E);
    s = setTimeout(b, m(E));
  }
  function y(E) {
    return s = void 0, h && n ? p(E) : (n = a = void 0, o);
  }
  function w() {
    s !== void 0 && clearTimeout(s), u = 0, n = l = a = s = void 0;
  }
  function S() {
    return s === void 0 ? o : y(Gc());
  }
  function _() {
    var E = Gc(), C = g(E);
    if (n = arguments, a = this, l = E, C) {
      if (s === void 0)
        return v(l);
      if (d)
        return clearTimeout(s), s = setTimeout(b, t), p(l);
    }
    return s === void 0 && (s = setTimeout(b, t)), o;
  }
  return _.cancel = w, _.flush = S, _;
}
var z3 = "Expected a function";
function q3(e, t, r) {
  var n = !0, a = !0;
  if (typeof e != "function")
    throw new TypeError(z3);
  return $r(r) && (n = "leading" in r ? !!r.leading : n, a = "trailing" in r ? !!r.trailing : a), py(e, t, {
    leading: n,
    maxWait: t,
    trailing: a
  });
}
var K3 = function(t, r, n) {
  var a = n.getBoundingClientRect(), i = a.width, o = a.height, s = typeof t.pageX == "number" ? t.pageX : t.touches[0].pageX, l = typeof t.pageY == "number" ? t.pageY : t.touches[0].pageY, u = s - (n.getBoundingClientRect().left + window.pageXOffset), c = l - (n.getBoundingClientRect().top + window.pageYOffset);
  u < 0 ? u = 0 : u > i && (u = i), c < 0 ? c = 0 : c > o && (c = o);
  var d = u / i, h = 1 - c / o;
  return {
    h: r.h,
    s: d,
    v: h,
    a: r.a,
    source: "hsv"
  };
}, X3 = /* @__PURE__ */ function() {
  function e(t, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
    }
  }
  return function(t, r, n) {
    return r && e(t.prototype, r), n && e(t, n), t;
  };
}();
function Q3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function J3(e, t) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function Z3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
var Xu = function(e) {
  Z3(t, e);
  function t(r) {
    Q3(this, t);
    var n = J3(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, r));
    return n.handleChange = function(a) {
      typeof n.props.onChange == "function" && n.throttle(n.props.onChange, K3(a, n.props.hsl, n.container), a);
    }, n.handleMouseDown = function(a) {
      n.handleChange(a);
      var i = n.getContainerRenderWindow();
      i.addEventListener("mousemove", n.handleChange), i.addEventListener("mouseup", n.handleMouseUp);
    }, n.handleMouseUp = function() {
      n.unbindEventListeners();
    }, n.throttle = q3(function(a, i, o) {
      a(i, o);
    }, 50), n;
  }
  return X3(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.throttle.cancel(), this.unbindEventListeners();
    }
  }, {
    key: "getContainerRenderWindow",
    value: function() {
      for (var n = this.container, a = window; !a.document.contains(n) && a.parent !== a; )
        a = a.parent;
      return a;
    }
  }, {
    key: "unbindEventListeners",
    value: function() {
      var n = this.getContainerRenderWindow();
      n.removeEventListener("mousemove", this.handleChange), n.removeEventListener("mouseup", this.handleMouseUp);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props.style || {}, i = a.color, o = a.white, s = a.black, l = a.pointer, u = a.circle, c = we({
        default: {
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
            boxShadow: `0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),
            0 0 1px 2px rgba(0,0,0,.4)`,
            borderRadius: "50%",
            cursor: "hand",
            transform: "translate(-2px, -2px)"
          }
        },
        custom: {
          color: i,
          white: o,
          black: s,
          pointer: l,
          circle: u
        }
      }, {
        custom: !!this.props.style
      });
      return /* @__PURE__ */ lt("div", {
        style: c.color,
        ref: function(h) {
          return n.container = h;
        },
        onMouseDown: this.handleMouseDown,
        onTouchMove: this.handleChange,
        onTouchStart: this.handleChange,
        children: [/* @__PURE__ */ N("style", {
          children: ".saturation-white { background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0)); background: linear-gradient(to right, #fff, rgba(255,255,255,0)); } .saturation-black { background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0)); background: linear-gradient(to top, #000, rgba(0,0,0,0)); }"
        }), /* @__PURE__ */ lt("div", {
          style: c.white,
          className: "saturation-white",
          children: [/* @__PURE__ */ N("div", {
            style: c.black,
            className: "saturation-black"
          }), /* @__PURE__ */ N("div", {
            style: c.pointer,
            children: this.props.pointer ? f.createElement(this.props.pointer, this.props) : /* @__PURE__ */ N("div", {
              style: c.circle
            })
          })]
        })]
      });
    }
  }]), t;
}(ii || tt);
function eH(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var tH = iy(Object.keys, Object), rH = Object.prototype, nH = rH.hasOwnProperty;
function aH(e) {
  if (!wh(e))
    return tH(e);
  var t = [];
  for (var r in Object(e))
    nH.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Ch(e) {
  return Ro(e) ? dy(e) : aH(e);
}
function iH(e, t) {
  return e && ny(e, t, Ch);
}
function oH(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!Ro(r))
      return e(r, n);
    for (var a = r.length, i = -1, o = Object(r); ++i < a && n(o[i], i, o) !== !1; )
      ;
    return r;
  };
}
var vy = oH(iH);
function sH(e) {
  return typeof e == "function" ? e : qu;
}
function lH(e, t) {
  var r = br(e) ? eH : vy;
  return r(e, sH(t));
}
function Xl(e) {
  "@babel/helpers - typeof";
  return Xl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xl(e);
}
var uH = /^\s+/, cH = /\s+$/;
function ce(e, t) {
  if (e = e || "", t = t || {}, e instanceof ce)
    return e;
  if (!(this instanceof ce))
    return new ce(e, t);
  var r = dH(e);
  this._originalInput = e, this._r = r.r, this._g = r.g, this._b = r.b, this._a = r.a, this._roundA = Math.round(100 * this._a) / 100, this._format = t.format || r.format, this._gradientType = t.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = r.ok;
}
ce.prototype = {
  isDark: function() {
    return this.getBrightness() < 128;
  },
  isLight: function() {
    return !this.isDark();
  },
  isValid: function() {
    return this._ok;
  },
  getOriginalInput: function() {
    return this._originalInput;
  },
  getFormat: function() {
    return this._format;
  },
  getAlpha: function() {
    return this._a;
  },
  getBrightness: function() {
    var t = this.toRgb();
    return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
  },
  getLuminance: function() {
    var t = this.toRgb(), r, n, a, i, o, s;
    return r = t.r / 255, n = t.g / 255, a = t.b / 255, r <= 0.03928 ? i = r / 12.92 : i = Math.pow((r + 0.055) / 1.055, 2.4), n <= 0.03928 ? o = n / 12.92 : o = Math.pow((n + 0.055) / 1.055, 2.4), a <= 0.03928 ? s = a / 12.92 : s = Math.pow((a + 0.055) / 1.055, 2.4), 0.2126 * i + 0.7152 * o + 0.0722 * s;
  },
  setAlpha: function(t) {
    return this._a = gy(t), this._roundA = Math.round(100 * this._a) / 100, this;
  },
  toHsv: function() {
    var t = Qv(this._r, this._g, this._b);
    return {
      h: t.h * 360,
      s: t.s,
      v: t.v,
      a: this._a
    };
  },
  toHsvString: function() {
    var t = Qv(this._r, this._g, this._b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), a = Math.round(t.v * 100);
    return this._a == 1 ? "hsv(" + r + ", " + n + "%, " + a + "%)" : "hsva(" + r + ", " + n + "%, " + a + "%, " + this._roundA + ")";
  },
  toHsl: function() {
    var t = Xv(this._r, this._g, this._b);
    return {
      h: t.h * 360,
      s: t.s,
      l: t.l,
      a: this._a
    };
  },
  toHslString: function() {
    var t = Xv(this._r, this._g, this._b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), a = Math.round(t.l * 100);
    return this._a == 1 ? "hsl(" + r + ", " + n + "%, " + a + "%)" : "hsla(" + r + ", " + n + "%, " + a + "%, " + this._roundA + ")";
  },
  toHex: function(t) {
    return Jv(this._r, this._g, this._b, t);
  },
  toHexString: function(t) {
    return "#" + this.toHex(t);
  },
  toHex8: function(t) {
    return vH(this._r, this._g, this._b, this._a, t);
  },
  toHex8String: function(t) {
    return "#" + this.toHex8(t);
  },
  toRgb: function() {
    return {
      r: Math.round(this._r),
      g: Math.round(this._g),
      b: Math.round(this._b),
      a: this._a
    };
  },
  toRgbString: function() {
    return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
  },
  toPercentageRgb: function() {
    return {
      r: Math.round(vt(this._r, 255) * 100) + "%",
      g: Math.round(vt(this._g, 255) * 100) + "%",
      b: Math.round(vt(this._b, 255) * 100) + "%",
      a: this._a
    };
  },
  toPercentageRgbString: function() {
    return this._a == 1 ? "rgb(" + Math.round(vt(this._r, 255) * 100) + "%, " + Math.round(vt(this._g, 255) * 100) + "%, " + Math.round(vt(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(vt(this._r, 255) * 100) + "%, " + Math.round(vt(this._g, 255) * 100) + "%, " + Math.round(vt(this._b, 255) * 100) + "%, " + this._roundA + ")";
  },
  toName: function() {
    return this._a === 0 ? "transparent" : this._a < 1 ? !1 : OH[Jv(this._r, this._g, this._b, !0)] || !1;
  },
  toFilter: function(t) {
    var r = "#" + Zv(this._r, this._g, this._b, this._a), n = r, a = this._gradientType ? "GradientType = 1, " : "";
    if (t) {
      var i = ce(t);
      n = "#" + Zv(i._r, i._g, i._b, i._a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + a + "startColorstr=" + r + ",endColorstr=" + n + ")";
  },
  toString: function(t) {
    var r = !!t;
    t = t || this._format;
    var n = !1, a = this._a < 1 && this._a >= 0, i = !r && a && (t === "hex" || t === "hex6" || t === "hex3" || t === "hex4" || t === "hex8" || t === "name");
    return i ? t === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (n = this.toRgbString()), t === "prgb" && (n = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (n = this.toHexString()), t === "hex3" && (n = this.toHexString(!0)), t === "hex4" && (n = this.toHex8String(!0)), t === "hex8" && (n = this.toHex8String()), t === "name" && (n = this.toName()), t === "hsl" && (n = this.toHslString()), t === "hsv" && (n = this.toHsvString()), n || this.toHexString());
  },
  clone: function() {
    return ce(this.toString());
  },
  _applyModification: function(t, r) {
    var n = t.apply(null, [this].concat([].slice.call(r)));
    return this._r = n._r, this._g = n._g, this._b = n._b, this.setAlpha(n._a), this;
  },
  lighten: function() {
    return this._applyModification(yH, arguments);
  },
  brighten: function() {
    return this._applyModification(_H, arguments);
  },
  darken: function() {
    return this._applyModification(wH, arguments);
  },
  desaturate: function() {
    return this._applyModification(gH, arguments);
  },
  saturate: function() {
    return this._applyModification(mH, arguments);
  },
  greyscale: function() {
    return this._applyModification(bH, arguments);
  },
  spin: function() {
    return this._applyModification(SH, arguments);
  },
  _applyCombination: function(t, r) {
    return t.apply(null, [this].concat([].slice.call(r)));
  },
  analogous: function() {
    return this._applyCombination(CH, arguments);
  },
  complement: function() {
    return this._applyCombination(xH, arguments);
  },
  monochromatic: function() {
    return this._applyCombination(DH, arguments);
  },
  splitcomplement: function() {
    return this._applyCombination(EH, arguments);
  },
  // Disabled until https://github.com/bgrins/TinyColor/issues/254
  // polyad: function (number) {
  //   return this._applyCombination(polyad, [number]);
  // },
  triad: function() {
    return this._applyCombination(eg, [3]);
  },
  tetrad: function() {
    return this._applyCombination(eg, [4]);
  }
};
ce.fromRatio = function(e, t) {
  if (Xl(e) == "object") {
    var r = {};
    for (var n in e)
      e.hasOwnProperty(n) && (n === "a" ? r[n] = e[n] : r[n] = Qo(e[n]));
    e = r;
  }
  return ce(e, t);
};
function dH(e) {
  var t = {
    r: 0,
    g: 0,
    b: 0
  }, r = 1, n = null, a = null, i = null, o = !1, s = !1;
  return typeof e == "string" && (e = PH(e)), Xl(e) == "object" && (Hn(e.r) && Hn(e.g) && Hn(e.b) ? (t = fH(e.r, e.g, e.b), o = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Hn(e.h) && Hn(e.s) && Hn(e.v) ? (n = Qo(e.s), a = Qo(e.v), t = pH(e.h, n, a), o = !0, s = "hsv") : Hn(e.h) && Hn(e.s) && Hn(e.l) && (n = Qo(e.s), i = Qo(e.l), t = hH(e.h, n, i), o = !0, s = "hsl"), e.hasOwnProperty("a") && (r = e.a)), r = gy(r), {
    ok: o,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
function fH(e, t, r) {
  return {
    r: vt(e, 255) * 255,
    g: vt(t, 255) * 255,
    b: vt(r, 255) * 255
  };
}
function Xv(e, t, r) {
  e = vt(e, 255), t = vt(t, 255), r = vt(r, 255);
  var n = Math.max(e, t, r), a = Math.min(e, t, r), i, o, s = (n + a) / 2;
  if (n == a)
    i = o = 0;
  else {
    var l = n - a;
    switch (o = s > 0.5 ? l / (2 - n - a) : l / (n + a), n) {
      case e:
        i = (t - r) / l + (t < r ? 6 : 0);
        break;
      case t:
        i = (r - e) / l + 2;
        break;
      case r:
        i = (e - t) / l + 4;
        break;
    }
    i /= 6;
  }
  return {
    h: i,
    s: o,
    l: s
  };
}
function hH(e, t, r) {
  var n, a, i;
  e = vt(e, 360), t = vt(t, 100), r = vt(r, 100);
  function o(u, c, d) {
    return d < 0 && (d += 1), d > 1 && (d -= 1), d < 1 / 6 ? u + (c - u) * 6 * d : d < 1 / 2 ? c : d < 2 / 3 ? u + (c - u) * (2 / 3 - d) * 6 : u;
  }
  if (t === 0)
    n = a = i = r;
  else {
    var s = r < 0.5 ? r * (1 + t) : r + t - r * t, l = 2 * r - s;
    n = o(l, s, e + 1 / 3), a = o(l, s, e), i = o(l, s, e - 1 / 3);
  }
  return {
    r: n * 255,
    g: a * 255,
    b: i * 255
  };
}
function Qv(e, t, r) {
  e = vt(e, 255), t = vt(t, 255), r = vt(r, 255);
  var n = Math.max(e, t, r), a = Math.min(e, t, r), i, o, s = n, l = n - a;
  if (o = n === 0 ? 0 : l / n, n == a)
    i = 0;
  else {
    switch (n) {
      case e:
        i = (t - r) / l + (t < r ? 6 : 0);
        break;
      case t:
        i = (r - e) / l + 2;
        break;
      case r:
        i = (e - t) / l + 4;
        break;
    }
    i /= 6;
  }
  return {
    h: i,
    s: o,
    v: s
  };
}
function pH(e, t, r) {
  e = vt(e, 360) * 6, t = vt(t, 100), r = vt(r, 100);
  var n = Math.floor(e), a = e - n, i = r * (1 - t), o = r * (1 - a * t), s = r * (1 - (1 - a) * t), l = n % 6, u = [r, o, i, i, s, r][l], c = [s, r, r, o, i, i][l], d = [i, i, s, r, r, o][l];
  return {
    r: u * 255,
    g: c * 255,
    b: d * 255
  };
}
function Jv(e, t, r, n) {
  var a = [zr(Math.round(e).toString(16)), zr(Math.round(t).toString(16)), zr(Math.round(r).toString(16))];
  return n && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function vH(e, t, r, n, a) {
  var i = [zr(Math.round(e).toString(16)), zr(Math.round(t).toString(16)), zr(Math.round(r).toString(16)), zr(my(n))];
  return a && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) && i[3].charAt(0) == i[3].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function Zv(e, t, r, n) {
  var a = [zr(my(n)), zr(Math.round(e).toString(16)), zr(Math.round(t).toString(16)), zr(Math.round(r).toString(16))];
  return a.join("");
}
ce.equals = function(e, t) {
  return !e || !t ? !1 : ce(e).toRgbString() == ce(t).toRgbString();
};
ce.random = function() {
  return ce.fromRatio({
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  });
};
function gH(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = ce(e).toHsl();
  return r.s -= t / 100, r.s = Qu(r.s), ce(r);
}
function mH(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = ce(e).toHsl();
  return r.s += t / 100, r.s = Qu(r.s), ce(r);
}
function bH(e) {
  return ce(e).desaturate(100);
}
function yH(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = ce(e).toHsl();
  return r.l += t / 100, r.l = Qu(r.l), ce(r);
}
function _H(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = ce(e).toRgb();
  return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), ce(r);
}
function wH(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = ce(e).toHsl();
  return r.l -= t / 100, r.l = Qu(r.l), ce(r);
}
function SH(e, t) {
  var r = ce(e).toHsl(), n = (r.h + t) % 360;
  return r.h = n < 0 ? 360 + n : n, ce(r);
}
function xH(e) {
  var t = ce(e).toHsl();
  return t.h = (t.h + 180) % 360, ce(t);
}
function eg(e, t) {
  if (isNaN(t) || t <= 0)
    throw new Error("Argument to polyad must be a positive number");
  for (var r = ce(e).toHsl(), n = [ce(e)], a = 360 / t, i = 1; i < t; i++)
    n.push(ce({
      h: (r.h + i * a) % 360,
      s: r.s,
      l: r.l
    }));
  return n;
}
function EH(e) {
  var t = ce(e).toHsl(), r = t.h;
  return [ce(e), ce({
    h: (r + 72) % 360,
    s: t.s,
    l: t.l
  }), ce({
    h: (r + 216) % 360,
    s: t.s,
    l: t.l
  })];
}
function CH(e, t, r) {
  t = t || 6, r = r || 30;
  var n = ce(e).toHsl(), a = 360 / r, i = [ce(e)];
  for (n.h = (n.h - (a * t >> 1) + 720) % 360; --t; )
    n.h = (n.h + a) % 360, i.push(ce(n));
  return i;
}
function DH(e, t) {
  t = t || 6;
  for (var r = ce(e).toHsv(), n = r.h, a = r.s, i = r.v, o = [], s = 1 / t; t--; )
    o.push(ce({
      h: n,
      s: a,
      v: i
    })), i = (i + s) % 1;
  return o;
}
ce.mix = function(e, t, r) {
  r = r === 0 ? 0 : r || 50;
  var n = ce(e).toRgb(), a = ce(t).toRgb(), i = r / 100, o = {
    r: (a.r - n.r) * i + n.r,
    g: (a.g - n.g) * i + n.g,
    b: (a.b - n.b) * i + n.b,
    a: (a.a - n.a) * i + n.a
  };
  return ce(o);
};
ce.readability = function(e, t) {
  var r = ce(e), n = ce(t);
  return (Math.max(r.getLuminance(), n.getLuminance()) + 0.05) / (Math.min(r.getLuminance(), n.getLuminance()) + 0.05);
};
ce.isReadable = function(e, t, r) {
  var n = ce.readability(e, t), a, i;
  switch (i = !1, a = NH(r), a.level + a.size) {
    case "AAsmall":
    case "AAAlarge":
      i = n >= 4.5;
      break;
    case "AAlarge":
      i = n >= 3;
      break;
    case "AAAsmall":
      i = n >= 7;
      break;
  }
  return i;
};
ce.mostReadable = function(e, t, r) {
  var n = null, a = 0, i, o, s, l;
  r = r || {}, o = r.includeFallbackColors, s = r.level, l = r.size;
  for (var u = 0; u < t.length; u++)
    i = ce.readability(e, t[u]), i > a && (a = i, n = ce(t[u]));
  return ce.isReadable(e, n, {
    level: s,
    size: l
  }) || !o ? n : (r.includeFallbackColors = !1, ce.mostReadable(e, ["#fff", "#000"], r));
};
var jd = ce.names = {
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
}, OH = ce.hexNames = TH(jd);
function TH(e) {
  var t = {};
  for (var r in e)
    e.hasOwnProperty(r) && (t[e[r]] = r);
  return t;
}
function gy(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function vt(e, t) {
  kH(e) && (e = "100%");
  var r = RH(e);
  return e = Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(e * t, 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : e % t / parseFloat(t);
}
function Qu(e) {
  return Math.min(1, Math.max(0, e));
}
function cr(e) {
  return parseInt(e, 16);
}
function kH(e) {
  return typeof e == "string" && e.indexOf(".") != -1 && parseFloat(e) === 1;
}
function RH(e) {
  return typeof e == "string" && e.indexOf("%") != -1;
}
function zr(e) {
  return e.length == 1 ? "0" + e : "" + e;
}
function Qo(e) {
  return e <= 1 && (e = e * 100 + "%"), e;
}
function my(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function tg(e) {
  return cr(e) / 255;
}
var Vr = function() {
  var e = "[-\\+]?\\d+%?", t = "[-\\+]?\\d*\\.\\d+%?", r = "(?:" + t + ")|(?:" + e + ")", n = "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?", a = "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?";
  return {
    CSS_UNIT: new RegExp(r),
    rgb: new RegExp("rgb" + n),
    rgba: new RegExp("rgba" + a),
    hsl: new RegExp("hsl" + n),
    hsla: new RegExp("hsla" + a),
    hsv: new RegExp("hsv" + n),
    hsva: new RegExp("hsva" + a),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
}();
function Hn(e) {
  return !!Vr.CSS_UNIT.exec(e);
}
function PH(e) {
  e = e.replace(uH, "").replace(cH, "").toLowerCase();
  var t = !1;
  if (jd[e])
    e = jd[e], t = !0;
  else if (e == "transparent")
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: "name"
    };
  var r;
  return (r = Vr.rgb.exec(e)) ? {
    r: r[1],
    g: r[2],
    b: r[3]
  } : (r = Vr.rgba.exec(e)) ? {
    r: r[1],
    g: r[2],
    b: r[3],
    a: r[4]
  } : (r = Vr.hsl.exec(e)) ? {
    h: r[1],
    s: r[2],
    l: r[3]
  } : (r = Vr.hsla.exec(e)) ? {
    h: r[1],
    s: r[2],
    l: r[3],
    a: r[4]
  } : (r = Vr.hsv.exec(e)) ? {
    h: r[1],
    s: r[2],
    v: r[3]
  } : (r = Vr.hsva.exec(e)) ? {
    h: r[1],
    s: r[2],
    v: r[3],
    a: r[4]
  } : (r = Vr.hex8.exec(e)) ? {
    r: cr(r[1]),
    g: cr(r[2]),
    b: cr(r[3]),
    a: tg(r[4]),
    format: t ? "name" : "hex8"
  } : (r = Vr.hex6.exec(e)) ? {
    r: cr(r[1]),
    g: cr(r[2]),
    b: cr(r[3]),
    format: t ? "name" : "hex"
  } : (r = Vr.hex4.exec(e)) ? {
    r: cr(r[1] + "" + r[1]),
    g: cr(r[2] + "" + r[2]),
    b: cr(r[3] + "" + r[3]),
    a: tg(r[4] + "" + r[4]),
    format: t ? "name" : "hex8"
  } : (r = Vr.hex3.exec(e)) ? {
    r: cr(r[1] + "" + r[1]),
    g: cr(r[2] + "" + r[2]),
    b: cr(r[3] + "" + r[3]),
    format: t ? "name" : "hex"
  } : !1;
}
function NH(e) {
  var t, r;
  return e = e || {
    level: "AA",
    size: "small"
  }, t = (e.level || "AA").toUpperCase(), r = (e.size || "small").toLowerCase(), t !== "AA" && t !== "AAA" && (t = "AA"), r !== "small" && r !== "large" && (r = "small"), {
    level: t,
    size: r
  };
}
var rg = function(t) {
  var r = ["r", "g", "b", "a", "h", "s", "l", "v"], n = 0, a = 0;
  return lH(r, function(i) {
    if (t[i] && (n += 1, isNaN(t[i]) || (a += 1), i === "s" || i === "l")) {
      var o = /^\d+%$/;
      o.test(t[i]) && (a += 1);
    }
  }), n === a ? t : !1;
}, Jo = function(t, r) {
  var n = t.hex ? ce(t.hex) : ce(t), a = n.toHsl(), i = n.toHsv(), o = n.toRgb(), s = n.toHex();
  a.s === 0 && (a.h = r || 0, i.h = r || 0);
  var l = s === "000000" && o.a === 0;
  return {
    hsl: a,
    hex: l ? "transparent" : "#" + s,
    rgb: o,
    hsv: i,
    oldHue: t.h || r || a.h,
    source: t.source
  };
}, ka = function(t) {
  if (t === "transparent")
    return !0;
  var r = String(t).charAt(0) === "#" ? 1 : 0;
  return t.length !== 4 + r && t.length < 7 + r && ce(t).isValid();
}, Dh = function(t) {
  if (!t)
    return "#fff";
  var r = Jo(t);
  if (r.hex === "transparent")
    return "rgba(0,0,0,0.4)";
  var n = (r.rgb.r * 299 + r.rgb.g * 587 + r.rgb.b * 114) / 1e3;
  return n >= 128 ? "#000" : "#fff";
}, zc = function(t, r) {
  var n = t.replace("°", "");
  return ce(r + " (" + n + ")")._ok;
}, el = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }
  return e;
}, MH = /* @__PURE__ */ function() {
  function e(t, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
    }
  }
  return function(t, r, n) {
    return r && e(t.prototype, r), n && e(t, n), t;
  };
}();
function AH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function IH(e, t) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function $H(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
var sr = function(t) {
  var r = function(n) {
    $H(a, n);
    function a(i) {
      AH(this, a);
      var o = IH(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this));
      return o.handleChange = function(s, l) {
        var u = rg(s);
        if (u) {
          var c = Jo(s, s.h || o.state.oldHue);
          o.setState(c), o.props.onChangeComplete && o.debounce(o.props.onChangeComplete, c, l), o.props.onChange && o.props.onChange(c, l);
        }
      }, o.handleSwatchHover = function(s, l) {
        var u = rg(s);
        if (u) {
          var c = Jo(s, s.h || o.state.oldHue);
          o.props.onSwatchHover && o.props.onSwatchHover(c, l);
        }
      }, o.state = el({}, Jo(i.color, 0)), o.debounce = py(function(s, l, u) {
        s(l, u);
      }, 100), o;
    }
    return MH(a, [{
      key: "render",
      value: function() {
        var o = {};
        return this.props.onSwatchHover && (o.onSwatchHover = this.handleSwatchHover), /* @__PURE__ */ N(t, {
          ...this.props,
          ...this.state,
          onChange: this.handleChange,
          ...o
        });
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(o, s) {
        return el({}, Jo(o.color, s.oldHue));
      }
    }]), a;
  }(ii || tt);
  return r.propTypes = el({}, t.propTypes), r.defaultProps = el({}, t.defaultProps, {
    color: {
      h: 250,
      s: 0.5,
      l: 0.2,
      a: 1
    }
  }), r;
}, LH = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }
  return e;
}, FH = /* @__PURE__ */ function() {
  function e(t, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
    }
  }
  return function(t, r, n) {
    return r && e(t.prototype, r), n && e(t, n), t;
  };
}();
function HH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ng(e, t) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function BH(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
var jH = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
  return function(n) {
    BH(a, n);
    function a() {
      var i, o, s, l;
      HH(this, a);
      for (var u = arguments.length, c = Array(u), d = 0; d < u; d++)
        c[d] = arguments[d];
      return l = (o = (s = ng(this, (i = a.__proto__ || Object.getPrototypeOf(a)).call.apply(i, [this].concat(c))), s), s.state = { focus: !1 }, s.handleFocus = function() {
        return s.setState({ focus: !0 });
      }, s.handleBlur = function() {
        return s.setState({ focus: !1 });
      }, o), ng(s, l);
    }
    return FH(a, [{
      key: "render",
      value: function() {
        return f.createElement(
          r,
          { onFocus: this.handleFocus, onBlur: this.handleBlur },
          f.createElement(t, LH({}, this.props, this.state))
        );
      }
    }]), a;
  }(f.Component);
}, ag = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }
  return e;
}, YH = 13, WH = function(t) {
  var r = t.color, n = t.style, a = t.onClick, i = a === void 0 ? function() {
  } : a, o = t.onHover, s = t.title, l = s === void 0 ? r : s, u = t.children, c = t.focus, d = t.focusStyle, h = d === void 0 ? {} : d, p = r === "transparent", v = we({
    default: {
      swatch: ag({
        background: r,
        height: "100%",
        width: "100%",
        cursor: "pointer",
        position: "relative",
        outline: "none"
      }, n, c ? h : {})
    }
  }), m = function(S) {
    return i(r, S);
  }, g = function(S) {
    return S.keyCode === YH && i(r, S);
  }, b = function(S) {
    return o(r, S);
  }, y = {};
  return o && (y.onMouseOver = b), f.createElement(
    "div",
    ag({
      style: v.swatch,
      onClick: m,
      title: l,
      tabIndex: 0,
      onKeyDown: g
    }, y),
    u,
    p && f.createElement(To, {
      borderRadius: v.swatch.borderRadius,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)"
    })
  );
};
const fi = jH(WH);
var VH = function(t) {
  var r = t.direction, n = we({
    default: {
      picker: {
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        transform: "translate(-9px, -1px)",
        backgroundColor: "rgb(248, 248, 248)",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
      }
    },
    vertical: {
      picker: {
        transform: "translate(-3px, -9px)"
      }
    }
  }, { vertical: r === "vertical" });
  return f.createElement("div", { style: n.picker });
}, UH = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }
  return e;
}, by = function(t) {
  var r = t.rgb, n = t.hsl, a = t.width, i = t.height, o = t.onChange, s = t.direction, l = t.style, u = t.renderers, c = t.pointer, d = t.className, h = d === void 0 ? "" : d, p = we({
    default: {
      picker: {
        position: "relative",
        width: a,
        height: i
      },
      alpha: {
        radius: "2px",
        style: l
      }
    }
  });
  return f.createElement(
    "div",
    { style: p.picker, className: "alpha-picker " + h },
    f.createElement(mh, UH({}, p.alpha, {
      rgb: r,
      hsl: n,
      pointer: c,
      renderers: u,
      onChange: o,
      direction: s
    }))
  );
};
by.defaultProps = {
  width: "316px",
  height: "16px",
  direction: "horizontal",
  pointer: VH
};
sr(by);
function yy(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var GH = "__lodash_hash_undefined__";
function zH(e) {
  return this.__data__.set(e, GH), this;
}
function qH(e) {
  return this.__data__.has(e);
}
function Ql(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new la(); ++t < r; )
    this.add(e[t]);
}
Ql.prototype.add = Ql.prototype.push = zH;
Ql.prototype.has = qH;
function KH(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function XH(e, t) {
  return e.has(t);
}
var QH = 1, JH = 2;
function _y(e, t, r, n, a, i) {
  var o = r & QH, s = e.length, l = t.length;
  if (s != l && !(o && l > s))
    return !1;
  var u = i.get(e), c = i.get(t);
  if (u && c)
    return u == t && c == e;
  var d = -1, h = !0, p = r & JH ? new Ql() : void 0;
  for (i.set(e, t), i.set(t, e); ++d < s; ) {
    var v = e[d], m = t[d];
    if (n)
      var g = o ? n(m, v, d, t, e, i) : n(v, m, d, e, t, i);
    if (g !== void 0) {
      if (g)
        continue;
      h = !1;
      break;
    }
    if (p) {
      if (!KH(t, function(b, y) {
        if (!XH(p, y) && (v === b || a(v, b, r, n, i)))
          return p.push(y);
      })) {
        h = !1;
        break;
      }
    } else if (!(v === m || a(v, m, r, n, i))) {
      h = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), h;
}
function ZH(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
function eB(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var tB = 1, rB = 2, nB = "[object Boolean]", aB = "[object Date]", iB = "[object Error]", oB = "[object Map]", sB = "[object Number]", lB = "[object RegExp]", uB = "[object Set]", cB = "[object String]", dB = "[object Symbol]", fB = "[object ArrayBuffer]", hB = "[object DataView]", ig = Ea ? Ea.prototype : void 0, qc = ig ? ig.valueOf : void 0;
function pB(e, t, r, n, a, i, o) {
  switch (r) {
    case hB:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case fB:
      return !(e.byteLength != t.byteLength || !i(new zl(e), new zl(t)));
    case nB:
    case aB:
    case sB:
      return Ns(+e, +t);
    case iB:
      return e.name == t.name && e.message == t.message;
    case lB:
    case cB:
      return e == t + "";
    case oB:
      var s = ZH;
    case uB:
      var l = n & tB;
      if (s || (s = eB), e.size != t.size && !l)
        return !1;
      var u = o.get(e);
      if (u)
        return u == t;
      n |= rB, o.set(e, t);
      var c = _y(s(e), s(t), n, a, i, o);
      return o.delete(e), c;
    case dB:
      if (qc)
        return qc.call(e) == qc.call(t);
  }
  return !1;
}
function vB(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
function gB(e, t, r) {
  var n = t(e);
  return br(e) ? n : vB(n, r(e));
}
function mB(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (i[a++] = o);
  }
  return i;
}
function bB() {
  return [];
}
var yB = Object.prototype, _B = yB.propertyIsEnumerable, og = Object.getOwnPropertySymbols, wB = og ? function(e) {
  return e == null ? [] : (e = Object(e), mB(og(e), function(t) {
    return _B.call(e, t);
  }));
} : bB;
function sg(e) {
  return gB(e, Ch, wB);
}
var SB = 1, xB = Object.prototype, EB = xB.hasOwnProperty;
function CB(e, t, r, n, a, i) {
  var o = r & SB, s = sg(e), l = s.length, u = sg(t), c = u.length;
  if (l != c && !o)
    return !1;
  for (var d = l; d--; ) {
    var h = s[d];
    if (!(o ? h in t : EB.call(t, h)))
      return !1;
  }
  var p = i.get(e), v = i.get(t);
  if (p && v)
    return p == t && v == e;
  var m = !0;
  i.set(e, t), i.set(t, e);
  for (var g = o; ++d < l; ) {
    h = s[d];
    var b = e[h], y = t[h];
    if (n)
      var w = o ? n(y, b, h, t, e, i) : n(b, y, h, e, t, i);
    if (!(w === void 0 ? b === y || a(b, y, r, n, i) : w)) {
      m = !1;
      break;
    }
    g || (g = h == "constructor");
  }
  if (m && !g) {
    var S = e.constructor, _ = t.constructor;
    S != _ && "constructor" in e && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof _ == "function" && _ instanceof _) && (m = !1);
  }
  return i.delete(e), i.delete(t), m;
}
var Yd = di(an, "DataView"), Wd = di(an, "Promise"), Vd = di(an, "Set"), Ud = di(an, "WeakMap"), lg = "[object Map]", DB = "[object Object]", ug = "[object Promise]", cg = "[object Set]", dg = "[object WeakMap]", fg = "[object DataView]", OB = ci(Yd), TB = ci(cs), kB = ci(Wd), RB = ci(Vd), PB = ci(Ud), pa = ui;
(Yd && pa(new Yd(new ArrayBuffer(1))) != fg || cs && pa(new cs()) != lg || Wd && pa(Wd.resolve()) != ug || Vd && pa(new Vd()) != cg || Ud && pa(new Ud()) != dg) && (pa = function(e) {
  var t = ui(e), r = t == DB ? e.constructor : void 0, n = r ? ci(r) : "";
  if (n)
    switch (n) {
      case OB:
        return fg;
      case TB:
        return lg;
      case kB:
        return ug;
      case RB:
        return cg;
      case PB:
        return dg;
    }
  return t;
});
var NB = 1, hg = "[object Arguments]", pg = "[object Array]", tl = "[object Object]", MB = Object.prototype, vg = MB.hasOwnProperty;
function AB(e, t, r, n, a, i) {
  var o = br(e), s = br(t), l = o ? pg : pa(e), u = s ? pg : pa(t);
  l = l == hg ? tl : l, u = u == hg ? tl : u;
  var c = l == tl, d = u == tl, h = l == u;
  if (h && Kl(e)) {
    if (!Kl(t))
      return !1;
    o = !0, c = !1;
  }
  if (h && !c)
    return i || (i = new wn()), o || xh(e) ? _y(e, t, r, n, a, i) : pB(e, t, l, r, n, a, i);
  if (!(r & NB)) {
    var p = c && vg.call(e, "__wrapped__"), v = d && vg.call(t, "__wrapped__");
    if (p || v) {
      var m = p ? e.value() : e, g = v ? t.value() : t;
      return i || (i = new wn()), a(m, g, r, n, i);
    }
  }
  return h ? (i || (i = new wn()), CB(e, t, r, n, a, i)) : !1;
}
function Oh(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !Ca(e) && !Ca(t) ? e !== e && t !== t : AB(e, t, r, n, Oh, a);
}
var IB = 1, $B = 2;
function LB(e, t, r, n) {
  var a = r.length, i = a;
  if (e == null)
    return !i;
  for (e = Object(e); a--; ) {
    var o = r[a];
    if (o[2] ? o[1] !== e[o[0]] : !(o[0] in e))
      return !1;
  }
  for (; ++a < i; ) {
    o = r[a];
    var s = o[0], l = e[s], u = o[1];
    if (o[2]) {
      if (l === void 0 && !(s in e))
        return !1;
    } else {
      var c = new wn(), d;
      if (!(d === void 0 ? Oh(u, l, IB | $B, n, c) : d))
        return !1;
    }
  }
  return !0;
}
function wy(e) {
  return e === e && !$r(e);
}
function FB(e) {
  for (var t = Ch(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, wy(a)];
  }
  return t;
}
function Sy(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function HB(e) {
  var t = FB(e);
  return t.length == 1 && t[0][2] ? Sy(t[0][0], t[0][1]) : function(r) {
    return r === e || LB(r, e, t);
  };
}
var BB = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, jB = /^\w*$/;
function Th(e, t) {
  if (br(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Ku(e) ? !0 : jB.test(e) || !BB.test(e) || t != null && e in Object(t);
}
var YB = "Expected a function";
function kh(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(YB);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], i = r.cache;
    if (i.has(a))
      return i.get(a);
    var o = e.apply(this, n);
    return r.cache = i.set(a, o) || i, o;
  };
  return r.cache = new (kh.Cache || la)(), r;
}
kh.Cache = la;
var WB = 500;
function VB(e) {
  var t = kh(e, function(n) {
    return r.size === WB && r.clear(), n;
  }), r = t.cache;
  return t;
}
var UB = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, GB = /\\(\\)?/g, zB = VB(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(UB, function(r, n, a, i) {
    t.push(a ? i.replace(GB, "$1") : n || r);
  }), t;
}), qB = 1 / 0, gg = Ea ? Ea.prototype : void 0, mg = gg ? gg.toString : void 0;
function xy(e) {
  if (typeof e == "string")
    return e;
  if (br(e))
    return yy(e, xy) + "";
  if (Ku(e))
    return mg ? mg.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -qB ? "-0" : t;
}
function KB(e) {
  return e == null ? "" : xy(e);
}
function Ey(e, t) {
  return br(e) ? e : Th(e, t) ? [e] : zB(KB(e));
}
var XB = 1 / 0;
function Ju(e) {
  if (typeof e == "string" || Ku(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -XB ? "-0" : t;
}
function Cy(e, t) {
  t = Ey(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Ju(t[r++])];
  return r && r == n ? e : void 0;
}
function QB(e, t, r) {
  var n = e == null ? void 0 : Cy(e, t);
  return n === void 0 ? r : n;
}
function JB(e, t) {
  return e != null && t in Object(e);
}
function ZB(e, t, r) {
  t = Ey(t, e);
  for (var n = -1, a = t.length, i = !1; ++n < a; ) {
    var o = Ju(t[n]);
    if (!(i = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return i || ++n != a ? i : (a = e == null ? 0 : e.length, !!a && Sh(a) && Eh(o, a) && (br(e) || ql(e)));
}
function ej(e, t) {
  return e != null && ZB(e, t, JB);
}
var tj = 1, rj = 2;
function nj(e, t) {
  return Th(e) && wy(t) ? Sy(Ju(e), t) : function(r) {
    var n = QB(r, e);
    return n === void 0 && n === t ? ej(r, e) : Oh(t, n, tj | rj);
  };
}
function aj(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function ij(e) {
  return function(t) {
    return Cy(t, e);
  };
}
function oj(e) {
  return Th(e) ? aj(Ju(e)) : ij(e);
}
function sj(e) {
  return typeof e == "function" ? e : e == null ? qu : typeof e == "object" ? br(e) ? nj(e[0], e[1]) : HB(e) : oj(e);
}
function lj(e, t) {
  var r = -1, n = Ro(e) ? Array(e.length) : [];
  return vy(e, function(a, i, o) {
    n[++r] = t(a, i, o);
  }), n;
}
function hi(e, t) {
  var r = br(e) ? yy : lj;
  return r(e, sj(t));
}
var uj = function(t) {
  var r = t.colors, n = t.onClick, a = t.onSwatchHover, i = we({
    default: {
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
  return f.createElement(
    "div",
    { style: i.swatches },
    hi(r, function(o) {
      return f.createElement(fi, {
        key: o,
        color: o,
        style: i.swatch,
        onClick: n,
        onHover: a,
        focusStyle: {
          boxShadow: "0 0 4px " + o
        }
      });
    }),
    f.createElement("div", { style: i.clear })
  );
}, Rh = function(t) {
  var r = t.onChange, n = t.onSwatchHover, a = t.hex, i = t.colors, o = t.width, s = t.triangle, l = t.styles, u = l === void 0 ? {} : l, c = t.className, d = c === void 0 ? "" : c, h = a === "transparent", p = function(g, b) {
    ka(g) && r({
      hex: g,
      source: "hex"
    }, b);
  }, v = we(or({
    default: {
      card: {
        width: o,
        background: "#fff",
        boxShadow: "0 1px rgba(0,0,0,.1)",
        borderRadius: "6px",
        position: "relative"
      },
      head: {
        height: "110px",
        background: a,
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
        color: Dh(a),
        position: "relative"
      },
      triangle: {
        width: "0px",
        height: "0px",
        borderStyle: "solid",
        borderWidth: "0 10px 10px 10px",
        borderColor: "transparent transparent " + a + " transparent",
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
  }, u), { "hide-triangle": s === "hide" });
  return f.createElement(
    "div",
    { style: v.card, className: "block-picker " + d },
    f.createElement("div", { style: v.triangle }),
    f.createElement(
      "div",
      { style: v.head },
      h && f.createElement(To, { borderRadius: "6px 6px 0 0" }),
      f.createElement(
        "div",
        { style: v.label },
        a
      )
    ),
    f.createElement(
      "div",
      { style: v.body },
      f.createElement(uj, { colors: i, onClick: p, onSwatchHover: n }),
      f.createElement(Ae, {
        style: { input: v.input },
        value: a,
        onChange: p
      })
    )
  );
};
Rh.propTypes = {
  width: q.oneOfType([q.string, q.number]),
  colors: q.arrayOf(q.string),
  triangle: q.oneOf(["top", "hide"]),
  styles: q.object
};
Rh.defaultProps = {
  width: 170,
  colors: ["#D9E3F0", "#F47373", "#697689", "#37D67A", "#2CCCE4", "#555555", "#dce775", "#ff8a65", "#ba68c8"],
  triangle: "top",
  styles: {}
};
sr(Rh);
var Ci = { 50: "#ffebee", 100: "#ffcdd2", 200: "#ef9a9a", 300: "#e57373", 400: "#ef5350", 500: "#f44336", 600: "#e53935", 700: "#d32f2f", 800: "#c62828", 900: "#b71c1c", a100: "#ff8a80", a200: "#ff5252", a400: "#ff1744", a700: "#d50000" }, Di = { 50: "#fce4ec", 100: "#f8bbd0", 200: "#f48fb1", 300: "#f06292", 400: "#ec407a", 500: "#e91e63", 600: "#d81b60", 700: "#c2185b", 800: "#ad1457", 900: "#880e4f", a100: "#ff80ab", a200: "#ff4081", a400: "#f50057", a700: "#c51162" }, Oi = { 50: "#f3e5f5", 100: "#e1bee7", 200: "#ce93d8", 300: "#ba68c8", 400: "#ab47bc", 500: "#9c27b0", 600: "#8e24aa", 700: "#7b1fa2", 800: "#6a1b9a", 900: "#4a148c", a100: "#ea80fc", a200: "#e040fb", a400: "#d500f9", a700: "#aa00ff" }, Ti = { 50: "#ede7f6", 100: "#d1c4e9", 200: "#b39ddb", 300: "#9575cd", 400: "#7e57c2", 500: "#673ab7", 600: "#5e35b1", 700: "#512da8", 800: "#4527a0", 900: "#311b92", a100: "#b388ff", a200: "#7c4dff", a400: "#651fff", a700: "#6200ea" }, ki = { 50: "#e8eaf6", 100: "#c5cae9", 200: "#9fa8da", 300: "#7986cb", 400: "#5c6bc0", 500: "#3f51b5", 600: "#3949ab", 700: "#303f9f", 800: "#283593", 900: "#1a237e", a100: "#8c9eff", a200: "#536dfe", a400: "#3d5afe", a700: "#304ffe" }, Ri = { 50: "#e3f2fd", 100: "#bbdefb", 200: "#90caf9", 300: "#64b5f6", 400: "#42a5f5", 500: "#2196f3", 600: "#1e88e5", 700: "#1976d2", 800: "#1565c0", 900: "#0d47a1", a100: "#82b1ff", a200: "#448aff", a400: "#2979ff", a700: "#2962ff" }, Pi = { 50: "#e1f5fe", 100: "#b3e5fc", 200: "#81d4fa", 300: "#4fc3f7", 400: "#29b6f6", 500: "#03a9f4", 600: "#039be5", 700: "#0288d1", 800: "#0277bd", 900: "#01579b", a100: "#80d8ff", a200: "#40c4ff", a400: "#00b0ff", a700: "#0091ea" }, Ni = { 50: "#e0f7fa", 100: "#b2ebf2", 200: "#80deea", 300: "#4dd0e1", 400: "#26c6da", 500: "#00bcd4", 600: "#00acc1", 700: "#0097a7", 800: "#00838f", 900: "#006064", a100: "#84ffff", a200: "#18ffff", a400: "#00e5ff", a700: "#00b8d4" }, Mi = { 50: "#e0f2f1", 100: "#b2dfdb", 200: "#80cbc4", 300: "#4db6ac", 400: "#26a69a", 500: "#009688", 600: "#00897b", 700: "#00796b", 800: "#00695c", 900: "#004d40", a100: "#a7ffeb", a200: "#64ffda", a400: "#1de9b6", a700: "#00bfa5" }, Zo = { 50: "#e8f5e9", 100: "#c8e6c9", 200: "#a5d6a7", 300: "#81c784", 400: "#66bb6a", 500: "#4caf50", 600: "#43a047", 700: "#388e3c", 800: "#2e7d32", 900: "#1b5e20", a100: "#b9f6ca", a200: "#69f0ae", a400: "#00e676", a700: "#00c853" }, Ai = { 50: "#f1f8e9", 100: "#dcedc8", 200: "#c5e1a5", 300: "#aed581", 400: "#9ccc65", 500: "#8bc34a", 600: "#7cb342", 700: "#689f38", 800: "#558b2f", 900: "#33691e", a100: "#ccff90", a200: "#b2ff59", a400: "#76ff03", a700: "#64dd17" }, Ii = { 50: "#f9fbe7", 100: "#f0f4c3", 200: "#e6ee9c", 300: "#dce775", 400: "#d4e157", 500: "#cddc39", 600: "#c0ca33", 700: "#afb42b", 800: "#9e9d24", 900: "#827717", a100: "#f4ff81", a200: "#eeff41", a400: "#c6ff00", a700: "#aeea00" }, $i = { 50: "#fffde7", 100: "#fff9c4", 200: "#fff59d", 300: "#fff176", 400: "#ffee58", 500: "#ffeb3b", 600: "#fdd835", 700: "#fbc02d", 800: "#f9a825", 900: "#f57f17", a100: "#ffff8d", a200: "#ffff00", a400: "#ffea00", a700: "#ffd600" }, Li = { 50: "#fff8e1", 100: "#ffecb3", 200: "#ffe082", 300: "#ffd54f", 400: "#ffca28", 500: "#ffc107", 600: "#ffb300", 700: "#ffa000", 800: "#ff8f00", 900: "#ff6f00", a100: "#ffe57f", a200: "#ffd740", a400: "#ffc400", a700: "#ffab00" }, Fi = { 50: "#fff3e0", 100: "#ffe0b2", 200: "#ffcc80", 300: "#ffb74d", 400: "#ffa726", 500: "#ff9800", 600: "#fb8c00", 700: "#f57c00", 800: "#ef6c00", 900: "#e65100", a100: "#ffd180", a200: "#ffab40", a400: "#ff9100", a700: "#ff6d00" }, Hi = { 50: "#fbe9e7", 100: "#ffccbc", 200: "#ffab91", 300: "#ff8a65", 400: "#ff7043", 500: "#ff5722", 600: "#f4511e", 700: "#e64a19", 800: "#d84315", 900: "#bf360c", a100: "#ff9e80", a200: "#ff6e40", a400: "#ff3d00", a700: "#dd2c00" }, Bi = { 50: "#efebe9", 100: "#d7ccc8", 200: "#bcaaa4", 300: "#a1887f", 400: "#8d6e63", 500: "#795548", 600: "#6d4c41", 700: "#5d4037", 800: "#4e342e", 900: "#3e2723" }, ji = { 50: "#eceff1", 100: "#cfd8dc", 200: "#b0bec5", 300: "#90a4ae", 400: "#78909c", 500: "#607d8b", 600: "#546e7a", 700: "#455a64", 800: "#37474f", 900: "#263238" }, Dy = function(t) {
  var r = t.color, n = t.onClick, a = t.onSwatchHover, i = t.hover, o = t.active, s = t.circleSize, l = t.circleSpacing, u = we({
    default: {
      swatch: {
        width: s,
        height: s,
        marginRight: l,
        marginBottom: l,
        transform: "scale(1)",
        transition: "100ms transform ease"
      },
      Swatch: {
        borderRadius: "50%",
        background: "transparent",
        boxShadow: "inset 0 0 0 " + (s / 2 + 1) + "px " + r,
        transition: "100ms box-shadow ease"
      }
    },
    hover: {
      swatch: {
        transform: "scale(1.2)"
      }
    },
    active: {
      Swatch: {
        boxShadow: "inset 0 0 0 3px " + r
      }
    }
  }, { hover: i, active: o });
  return f.createElement(
    "div",
    { style: u.swatch },
    f.createElement(fi, {
      style: u.Swatch,
      color: r,
      onClick: n,
      onHover: a,
      focusStyle: { boxShadow: u.Swatch.boxShadow + ", 0 0 5px " + r }
    })
  );
};
Dy.defaultProps = {
  circleSize: 28,
  circleSpacing: 14
};
const cj = vh(Dy);
var Ph = function(t) {
  var r = t.width, n = t.onChange, a = t.onSwatchHover, i = t.colors, o = t.hex, s = t.circleSize, l = t.styles, u = l === void 0 ? {} : l, c = t.circleSpacing, d = t.className, h = d === void 0 ? "" : d, p = we(or({
    default: {
      card: {
        width: r,
        display: "flex",
        flexWrap: "wrap",
        marginRight: -c,
        marginBottom: -c
      }
    }
  }, u)), v = function(g, b) {
    return n({ hex: g, source: "hex" }, b);
  };
  return f.createElement(
    "div",
    { style: p.card, className: "circle-picker " + h },
    hi(i, function(m) {
      return f.createElement(cj, {
        key: m,
        color: m,
        onClick: v,
        onSwatchHover: a,
        active: o === m.toLowerCase(),
        circleSize: s,
        circleSpacing: c
      });
    })
  );
};
Ph.propTypes = {
  width: q.oneOfType([q.string, q.number]),
  circleSize: q.number,
  circleSpacing: q.number,
  styles: q.object
};
Ph.defaultProps = {
  width: 252,
  circleSize: 28,
  circleSpacing: 14,
  colors: [Ci[500], Di[500], Oi[500], Ti[500], ki[500], Ri[500], Pi[500], Ni[500], Mi[500], Zo[500], Ai[500], Ii[500], $i[500], Li[500], Fi[500], Hi[500], Bi[500], ji[500]],
  styles: {}
};
sr(Ph);
function bg(e) {
  return e === void 0;
}
var Oy = {};
Object.defineProperty(Oy, "__esModule", {
  value: !0
});
var yg = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }
  return e;
}, dj = f, _g = fj(dj);
function fj(e) {
  return e && e.__esModule ? e : { default: e };
}
function hj(e, t) {
  var r = {};
  for (var n in e)
    t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
  return r;
}
var rl = 24, pj = Oy.default = function(e) {
  var t = e.fill, r = t === void 0 ? "currentColor" : t, n = e.width, a = n === void 0 ? rl : n, i = e.height, o = i === void 0 ? rl : i, s = e.style, l = s === void 0 ? {} : s, u = hj(e, ["fill", "width", "height", "style"]);
  return _g.default.createElement(
    "svg",
    yg({
      viewBox: "0 0 " + rl + " " + rl,
      style: yg({ fill: r, width: a, height: o }, l)
    }, u),
    _g.default.createElement("path", { d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z" })
  );
}, vj = /* @__PURE__ */ function() {
  function e(t, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
    }
  }
  return function(t, r, n) {
    return r && e(t.prototype, r), n && e(t, n), t;
  };
}();
function gj(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function mj(e, t) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function bj(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
var Ty = function(e) {
  bj(t, e);
  function t(r) {
    gj(this, t);
    var n = mj(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
    return n.toggleViews = function() {
      n.state.view === "hex" ? n.setState({ view: "rgb" }) : n.state.view === "rgb" ? n.setState({ view: "hsl" }) : n.state.view === "hsl" && (n.props.hsl.a === 1 ? n.setState({ view: "hex" }) : n.setState({ view: "rgb" }));
    }, n.handleChange = function(a, i) {
      a.hex ? ka(a.hex) && n.props.onChange({
        hex: a.hex,
        source: "hex"
      }, i) : a.r || a.g || a.b ? n.props.onChange({
        r: a.r || n.props.rgb.r,
        g: a.g || n.props.rgb.g,
        b: a.b || n.props.rgb.b,
        source: "rgb"
      }, i) : a.a ? (a.a < 0 ? a.a = 0 : a.a > 1 && (a.a = 1), n.props.onChange({
        h: n.props.hsl.h,
        s: n.props.hsl.s,
        l: n.props.hsl.l,
        a: Math.round(a.a * 100) / 100,
        source: "rgb"
      }, i)) : (a.h || a.s || a.l) && (typeof a.s == "string" && a.s.includes("%") && (a.s = a.s.replace("%", "")), typeof a.l == "string" && a.l.includes("%") && (a.l = a.l.replace("%", "")), a.s == 1 ? a.s = 0.01 : a.l == 1 && (a.l = 0.01), n.props.onChange({
        h: a.h || n.props.hsl.h,
        s: Number(bg(a.s) ? n.props.hsl.s : a.s),
        l: Number(bg(a.l) ? n.props.hsl.l : a.l),
        source: "hsl"
      }, i));
    }, n.showHighlight = function(a) {
      a.currentTarget.style.background = "#eee";
    }, n.hideHighlight = function(a) {
      a.currentTarget.style.background = "transparent";
    }, r.hsl.a !== 1 && r.view === "hex" ? n.state = {
      view: "rgb"
    } : n.state = {
      view: r.view
    }, n;
  }
  return vj(t, [{
    key: "render",
    value: function() {
      var n = this, a = we({
        default: {
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
        disableAlpha: {
          alpha: {
            display: "none"
          }
        }
      }, this.props, this.state), i = void 0;
      return this.state.view === "hex" ? i = f.createElement(
        "div",
        { style: a.fields, className: "flexbox-fix" },
        f.createElement(
          "div",
          { style: a.field },
          f.createElement(Ae, {
            style: { input: a.input, label: a.label },
            label: "hex",
            value: this.props.hex,
            onChange: this.handleChange
          })
        )
      ) : this.state.view === "rgb" ? i = f.createElement(
        "div",
        { style: a.fields, className: "flexbox-fix" },
        f.createElement(
          "div",
          { style: a.field },
          f.createElement(Ae, {
            style: { input: a.input, label: a.label },
            label: "r",
            value: this.props.rgb.r,
            onChange: this.handleChange
          })
        ),
        f.createElement(
          "div",
          { style: a.field },
          f.createElement(Ae, {
            style: { input: a.input, label: a.label },
            label: "g",
            value: this.props.rgb.g,
            onChange: this.handleChange
          })
        ),
        f.createElement(
          "div",
          { style: a.field },
          f.createElement(Ae, {
            style: { input: a.input, label: a.label },
            label: "b",
            value: this.props.rgb.b,
            onChange: this.handleChange
          })
        ),
        f.createElement(
          "div",
          { style: a.alpha },
          f.createElement(Ae, {
            style: { input: a.input, label: a.label },
            label: "a",
            value: this.props.rgb.a,
            arrowOffset: 0.01,
            onChange: this.handleChange
          })
        )
      ) : this.state.view === "hsl" && (i = f.createElement(
        "div",
        { style: a.fields, className: "flexbox-fix" },
        f.createElement(
          "div",
          { style: a.field },
          f.createElement(Ae, {
            style: { input: a.input, label: a.label },
            label: "h",
            value: Math.round(this.props.hsl.h),
            onChange: this.handleChange
          })
        ),
        f.createElement(
          "div",
          { style: a.field },
          f.createElement(Ae, {
            style: { input: a.input, label: a.label },
            label: "s",
            value: Math.round(this.props.hsl.s * 100) + "%",
            onChange: this.handleChange
          })
        ),
        f.createElement(
          "div",
          { style: a.field },
          f.createElement(Ae, {
            style: { input: a.input, label: a.label },
            label: "l",
            value: Math.round(this.props.hsl.l * 100) + "%",
            onChange: this.handleChange
          })
        ),
        f.createElement(
          "div",
          { style: a.alpha },
          f.createElement(Ae, {
            style: { input: a.input, label: a.label },
            label: "a",
            value: this.props.hsl.a,
            arrowOffset: 0.01,
            onChange: this.handleChange
          })
        )
      )), f.createElement(
        "div",
        { style: a.wrap, className: "flexbox-fix" },
        i,
        f.createElement(
          "div",
          { style: a.toggle },
          f.createElement(
            "div",
            { style: a.icon, onClick: this.toggleViews, ref: function(s) {
              return n.icon = s;
            } },
            f.createElement(pj, {
              style: a.svg,
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
    value: function(n, a) {
      return n.hsl.a !== 1 && a.view === "hex" ? { view: "rgb" } : null;
    }
  }]), t;
}(f.Component);
Ty.defaultProps = {
  view: "hex"
};
var wg = function() {
  var t = we({
    default: {
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
  return f.createElement("div", { style: t.picker });
}, yj = function() {
  var t = we({
    default: {
      picker: {
        width: "12px",
        height: "12px",
        borderRadius: "6px",
        boxShadow: "inset 0 0 0 1px #fff",
        transform: "translate(-6px, -6px)"
      }
    }
  });
  return f.createElement("div", { style: t.picker });
}, Nh = function(t) {
  var r = t.width, n = t.onChange, a = t.disableAlpha, i = t.rgb, o = t.hsl, s = t.hsv, l = t.hex, u = t.renderers, c = t.styles, d = c === void 0 ? {} : c, h = t.className, p = h === void 0 ? "" : h, v = t.defaultView, m = we(or({
    default: {
      picker: {
        width: r,
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
        background: "rgba(" + i.r + ", " + i.g + ", " + i.b + ", " + i.a + ")",
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
    disableAlpha: {
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
  }, d), { disableAlpha: a });
  return f.createElement(
    "div",
    { style: m.picker, className: "chrome-picker " + p },
    f.createElement(
      "div",
      { style: m.saturation },
      f.createElement(Xu, {
        style: m.Saturation,
        hsl: o,
        hsv: s,
        pointer: yj,
        onChange: n
      })
    ),
    f.createElement(
      "div",
      { style: m.body },
      f.createElement(
        "div",
        { style: m.controls, className: "flexbox-fix" },
        f.createElement(
          "div",
          { style: m.color },
          f.createElement(
            "div",
            { style: m.swatch },
            f.createElement("div", { style: m.active }),
            f.createElement(To, { renderers: u })
          )
        ),
        f.createElement(
          "div",
          { style: m.toggles },
          f.createElement(
            "div",
            { style: m.hue },
            f.createElement(ko, {
              style: m.Hue,
              hsl: o,
              pointer: wg,
              onChange: n
            })
          ),
          f.createElement(
            "div",
            { style: m.alpha },
            f.createElement(mh, {
              style: m.Alpha,
              rgb: i,
              hsl: o,
              pointer: wg,
              renderers: u,
              onChange: n
            })
          )
        )
      ),
      f.createElement(Ty, {
        rgb: i,
        hsl: o,
        hex: l,
        view: v,
        onChange: n,
        disableAlpha: a
      })
    )
  );
};
Nh.propTypes = {
  width: q.oneOfType([q.string, q.number]),
  disableAlpha: q.bool,
  styles: q.object,
  defaultView: q.oneOf(["hex", "rgb", "hsl"])
};
Nh.defaultProps = {
  width: 225,
  disableAlpha: !1,
  styles: {}
};
sr(Nh);
var _j = function(t) {
  var r = t.color, n = t.onClick, a = n === void 0 ? function() {
  } : n, i = t.onSwatchHover, o = t.active, s = we({
    default: {
      color: {
        background: r,
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
        background: Dh(r),
        borderRadius: "50%",
        opacity: "0"
      }
    },
    active: {
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
    transparent: {
      dot: {
        background: "#000"
      }
    }
  }, { active: o, "color-#FFFFFF": r === "#FFFFFF", transparent: r === "transparent" });
  return f.createElement(
    fi,
    {
      style: s.color,
      color: r,
      onClick: a,
      onHover: i,
      focusStyle: { boxShadow: "0 0 4px " + r }
    },
    f.createElement("div", { style: s.dot })
  );
}, wj = function(t) {
  var r = t.hex, n = t.rgb, a = t.onChange, i = we({
    default: {
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
        background: r
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
  }), o = function(l, u) {
    l.r || l.g || l.b ? a({
      r: l.r || n.r,
      g: l.g || n.g,
      b: l.b || n.b,
      source: "rgb"
    }, u) : a({
      hex: l.hex,
      source: "hex"
    }, u);
  };
  return f.createElement(
    "div",
    { style: i.fields, className: "flexbox-fix" },
    f.createElement("div", { style: i.active }),
    f.createElement(Ae, {
      style: { wrap: i.HEXwrap, input: i.HEXinput, label: i.HEXlabel },
      label: "hex",
      value: r,
      onChange: o
    }),
    f.createElement(Ae, {
      style: { wrap: i.RGBwrap, input: i.RGBinput, label: i.RGBlabel },
      label: "r",
      value: n.r,
      onChange: o
    }),
    f.createElement(Ae, {
      style: { wrap: i.RGBwrap, input: i.RGBinput, label: i.RGBlabel },
      label: "g",
      value: n.g,
      onChange: o
    }),
    f.createElement(Ae, {
      style: { wrap: i.RGBwrap, input: i.RGBinput, label: i.RGBlabel },
      label: "b",
      value: n.b,
      onChange: o
    })
  );
}, Mh = function(t) {
  var r = t.onChange, n = t.onSwatchHover, a = t.colors, i = t.hex, o = t.rgb, s = t.styles, l = s === void 0 ? {} : s, u = t.className, c = u === void 0 ? "" : u, d = we(or({
    default: {
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
  }, l)), h = function(v, m) {
    v.hex ? ka(v.hex) && r({
      hex: v.hex,
      source: "hex"
    }, m) : r(v, m);
  };
  return f.createElement(
    Ms,
    { style: d.Compact, styles: l },
    f.createElement(
      "div",
      { style: d.compact, className: "compact-picker " + c },
      f.createElement(
        "div",
        null,
        hi(a, function(p) {
          return f.createElement(_j, {
            key: p,
            color: p,
            active: p.toLowerCase() === i,
            onClick: h,
            onSwatchHover: n
          });
        }),
        f.createElement("div", { style: d.clear })
      ),
      f.createElement(wj, { hex: i, rgb: o, onChange: h })
    )
  );
};
Mh.propTypes = {
  colors: q.arrayOf(q.string),
  styles: q.object
};
Mh.defaultProps = {
  colors: ["#4D4D4D", "#999999", "#FFFFFF", "#F44E3B", "#FE9200", "#FCDC00", "#DBDF00", "#A4DD00", "#68CCCA", "#73D8FF", "#AEA1FF", "#FDA1FF", "#333333", "#808080", "#cccccc", "#D33115", "#E27300", "#FCC400", "#B0BC00", "#68BC00", "#16A5A5", "#009CE0", "#7B64FF", "#FA28FF", "#000000", "#666666", "#B3B3B3", "#9F0500", "#C45100", "#FB9E00", "#808900", "#194D33", "#0C797D", "#0062B1", "#653294", "#AB149E"],
  styles: {}
};
const Sj = sr(Mh);
var xj = function(t) {
  var r = t.hover, n = t.color, a = t.onClick, i = t.onSwatchHover, o = {
    position: "relative",
    zIndex: "2",
    outline: "2px solid #fff",
    boxShadow: "0 0 5px 2px rgba(0,0,0,0.25)"
  }, s = we({
    default: {
      swatch: {
        width: "25px",
        height: "25px",
        fontSize: "0"
      }
    },
    hover: {
      swatch: o
    }
  }, { hover: r });
  return f.createElement(
    "div",
    { style: s.swatch },
    f.createElement(fi, {
      color: n,
      onClick: a,
      onHover: i,
      focusStyle: o
    })
  );
};
const Ej = vh(xj);
var Ah = function(t) {
  var r = t.width, n = t.colors, a = t.onChange, i = t.onSwatchHover, o = t.triangle, s = t.styles, l = s === void 0 ? {} : s, u = t.className, c = u === void 0 ? "" : u, d = we(or({
    default: {
      card: {
        width: r,
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
  }, l), {
    "hide-triangle": o === "hide",
    "top-left-triangle": o === "top-left",
    "top-right-triangle": o === "top-right",
    "bottom-left-triangle": o === "bottom-left",
    "bottom-right-triangle": o === "bottom-right"
  }), h = function(v, m) {
    return a({ hex: v, source: "hex" }, m);
  };
  return f.createElement(
    "div",
    { style: d.card, className: "github-picker " + c },
    f.createElement("div", { style: d.triangleShadow }),
    f.createElement("div", { style: d.triangle }),
    hi(n, function(p) {
      return f.createElement(Ej, {
        color: p,
        key: p,
        onClick: h,
        onSwatchHover: i
      });
    })
  );
};
Ah.propTypes = {
  width: q.oneOfType([q.string, q.number]),
  colors: q.arrayOf(q.string),
  triangle: q.oneOf(["hide", "top-left", "top-right", "bottom-left", "bottom-right"]),
  styles: q.object
};
Ah.defaultProps = {
  width: 200,
  colors: ["#B80000", "#DB3E00", "#FCCB00", "#008B02", "#006B76", "#1273DE", "#004DCF", "#5300EB", "#EB9694", "#FAD0C3", "#FEF3BD", "#C1E1C5", "#BEDADC", "#C4DEF6", "#BED3F3", "#D4C4FB"],
  triangle: "top-left",
  styles: {}
};
sr(Ah);
var Cj = function(t) {
  var r = t.direction, n = we({
    default: {
      picker: {
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        transform: "translate(-9px, -1px)",
        backgroundColor: "rgb(248, 248, 248)",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
      }
    },
    vertical: {
      picker: {
        transform: "translate(-3px, -9px)"
      }
    }
  }, { vertical: r === "vertical" });
  return f.createElement("div", { style: n.picker });
}, Dj = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }
  return e;
}, Ih = function(t) {
  var r = t.width, n = t.height, a = t.onChange, i = t.hsl, o = t.direction, s = t.pointer, l = t.styles, u = l === void 0 ? {} : l, c = t.className, d = c === void 0 ? "" : c, h = we(or({
    default: {
      picker: {
        position: "relative",
        width: r,
        height: n
      },
      hue: {
        radius: "2px"
      }
    }
  }, u)), p = function(m) {
    return a({ a: 1, h: m.h, l: 0.5, s: 1 });
  };
  return f.createElement(
    "div",
    { style: h.picker, className: "hue-picker " + d },
    f.createElement(ko, Dj({}, h.hue, {
      hsl: i,
      pointer: s,
      onChange: p,
      direction: o
    }))
  );
};
Ih.propTypes = {
  styles: q.object
};
Ih.defaultProps = {
  width: "316px",
  height: "16px",
  direction: "horizontal",
  pointer: Cj,
  styles: {}
};
sr(Ih);
var Oj = function(t) {
  var r = t.onChange, n = t.hex, a = t.rgb, i = t.styles, o = i === void 0 ? {} : i, s = t.className, l = s === void 0 ? "" : s, u = we(or({
    default: {
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
        borderBottom: "2px solid " + n,
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
  }, o)), c = function(h, p) {
    h.hex ? ka(h.hex) && r({
      hex: h.hex,
      source: "hex"
    }, p) : (h.r || h.g || h.b) && r({
      r: h.r || a.r,
      g: h.g || a.g,
      b: h.b || a.b,
      source: "rgb"
    }, p);
  };
  return f.createElement(
    Ms,
    { styles: o },
    f.createElement(
      "div",
      { style: u.material, className: "material-picker " + l },
      f.createElement(Ae, {
        style: { wrap: u.HEXwrap, input: u.HEXinput, label: u.HEXlabel },
        label: "hex",
        value: n,
        onChange: c
      }),
      f.createElement(
        "div",
        { style: u.split, className: "flexbox-fix" },
        f.createElement(
          "div",
          { style: u.third },
          f.createElement(Ae, {
            style: { wrap: u.RGBwrap, input: u.RGBinput, label: u.RGBlabel },
            label: "r",
            value: a.r,
            onChange: c
          })
        ),
        f.createElement(
          "div",
          { style: u.third },
          f.createElement(Ae, {
            style: { wrap: u.RGBwrap, input: u.RGBinput, label: u.RGBlabel },
            label: "g",
            value: a.g,
            onChange: c
          })
        ),
        f.createElement(
          "div",
          { style: u.third },
          f.createElement(Ae, {
            style: { wrap: u.RGBwrap, input: u.RGBinput, label: u.RGBlabel },
            label: "b",
            value: a.b,
            onChange: c
          })
        )
      )
    )
  );
};
sr(Oj);
var Tj = function(t) {
  var r = t.onChange, n = t.rgb, a = t.hsv, i = t.hex, o = we({
    default: {
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
  }), s = function(u, c) {
    u["#"] ? ka(u["#"]) && r({
      hex: u["#"],
      source: "hex"
    }, c) : u.r || u.g || u.b ? r({
      r: u.r || n.r,
      g: u.g || n.g,
      b: u.b || n.b,
      source: "rgb"
    }, c) : (u.h || u.s || u.v) && r({
      h: u.h || a.h,
      s: u.s || a.s,
      v: u.v || a.v,
      source: "hsv"
    }, c);
  };
  return f.createElement(
    "div",
    { style: o.fields },
    f.createElement(Ae, {
      style: { wrap: o.RGBwrap, input: o.RGBinput, label: o.RGBlabel },
      label: "h",
      value: Math.round(a.h),
      onChange: s
    }),
    f.createElement(Ae, {
      style: { wrap: o.RGBwrap, input: o.RGBinput, label: o.RGBlabel },
      label: "s",
      value: Math.round(a.s * 100),
      onChange: s
    }),
    f.createElement(Ae, {
      style: { wrap: o.RGBwrap, input: o.RGBinput, label: o.RGBlabel },
      label: "v",
      value: Math.round(a.v * 100),
      onChange: s
    }),
    f.createElement("div", { style: o.divider }),
    f.createElement(Ae, {
      style: { wrap: o.RGBwrap, input: o.RGBinput, label: o.RGBlabel },
      label: "r",
      value: n.r,
      onChange: s
    }),
    f.createElement(Ae, {
      style: { wrap: o.RGBwrap, input: o.RGBinput, label: o.RGBlabel },
      label: "g",
      value: n.g,
      onChange: s
    }),
    f.createElement(Ae, {
      style: { wrap: o.RGBwrap, input: o.RGBinput, label: o.RGBlabel },
      label: "b",
      value: n.b,
      onChange: s
    }),
    f.createElement("div", { style: o.divider }),
    f.createElement(Ae, {
      style: { wrap: o.HEXwrap, input: o.HEXinput, label: o.HEXlabel },
      label: "#",
      value: i.replace("#", ""),
      onChange: s
    }),
    f.createElement(
      "div",
      { style: o.fieldSymbols },
      f.createElement(
        "div",
        { style: o.symbol },
        "°"
      ),
      f.createElement(
        "div",
        { style: o.symbol },
        "%"
      ),
      f.createElement(
        "div",
        { style: o.symbol },
        "%"
      )
    )
  );
}, kj = function(t) {
  var r = t.hsl, n = we({
    default: {
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
  }, { "black-outline": r.l > 0.5 });
  return f.createElement("div", { style: n.picker });
}, Rj = function() {
  var t = we({
    default: {
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
  return f.createElement(
    "div",
    { style: t.pointer },
    f.createElement(
      "div",
      { style: t.left },
      f.createElement("div", { style: t.leftInside })
    ),
    f.createElement(
      "div",
      { style: t.right },
      f.createElement("div", { style: t.rightInside })
    )
  );
}, Sg = function(t) {
  var r = t.onClick, n = t.label, a = t.children, i = t.active, o = we({
    default: {
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
    active: {
      button: {
        boxShadow: "0 0 0 1px #878787"
      }
    }
  }, { active: i });
  return f.createElement(
    "div",
    { style: o.button, onClick: r },
    n || a
  );
}, Pj = function(t) {
  var r = t.rgb, n = t.currentColor, a = we({
    default: {
      swatches: {
        border: "1px solid #B3B3B3",
        borderBottom: "1px solid #F0F0F0",
        marginBottom: "2px",
        marginTop: "1px"
      },
      new: {
        height: "34px",
        background: "rgb(" + r.r + "," + r.g + ", " + r.b + ")",
        boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000"
      },
      current: {
        height: "34px",
        background: n,
        boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000"
      },
      label: {
        fontSize: "14px",
        color: "#000",
        textAlign: "center"
      }
    }
  });
  return f.createElement(
    "div",
    null,
    f.createElement(
      "div",
      { style: a.label },
      "new"
    ),
    f.createElement(
      "div",
      { style: a.swatches },
      f.createElement("div", { style: a.new }),
      f.createElement("div", { style: a.current })
    ),
    f.createElement(
      "div",
      { style: a.label },
      "current"
    )
  );
}, Nj = /* @__PURE__ */ function() {
  function e(t, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
    }
  }
  return function(t, r, n) {
    return r && e(t.prototype, r), n && e(t, n), t;
  };
}();
function Mj(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Aj(e, t) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function Ij(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
var $h = function(e) {
  Ij(t, e);
  function t(r) {
    Mj(this, t);
    var n = Aj(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
    return n.state = {
      currentColor: r.hex
    }, n;
  }
  return Nj(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.styles, i = a === void 0 ? {} : a, o = n.className, s = o === void 0 ? "" : o, l = we(or({
        default: {
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
      }, i));
      return f.createElement(
        "div",
        { style: l.picker, className: "photoshop-picker " + s },
        f.createElement(
          "div",
          { style: l.head },
          this.props.header
        ),
        f.createElement(
          "div",
          { style: l.body, className: "flexbox-fix" },
          f.createElement(
            "div",
            { style: l.saturation },
            f.createElement(Xu, {
              hsl: this.props.hsl,
              hsv: this.props.hsv,
              pointer: kj,
              onChange: this.props.onChange
            })
          ),
          f.createElement(
            "div",
            { style: l.hue },
            f.createElement(ko, {
              direction: "vertical",
              hsl: this.props.hsl,
              pointer: Rj,
              onChange: this.props.onChange
            })
          ),
          f.createElement(
            "div",
            { style: l.controls },
            f.createElement(
              "div",
              { style: l.top, className: "flexbox-fix" },
              f.createElement(
                "div",
                { style: l.previews },
                f.createElement(Pj, {
                  rgb: this.props.rgb,
                  currentColor: this.state.currentColor
                })
              ),
              f.createElement(
                "div",
                { style: l.actions },
                f.createElement(Sg, { label: "OK", onClick: this.props.onAccept, active: !0 }),
                f.createElement(Sg, { label: "Cancel", onClick: this.props.onCancel }),
                f.createElement(Tj, {
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
  }]), t;
}(f.Component);
$h.propTypes = {
  header: q.string,
  styles: q.object
};
$h.defaultProps = {
  header: "Color Picker",
  styles: {}
};
sr($h);
var $j = function(t) {
  var r = t.onChange, n = t.rgb, a = t.hsl, i = t.hex, o = t.disableAlpha, s = we({
    default: {
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
    disableAlpha: {
      alpha: {
        display: "none"
      }
    }
  }, { disableAlpha: o }), l = function(c, d) {
    c.hex ? ka(c.hex) && r({
      hex: c.hex,
      source: "hex"
    }, d) : c.r || c.g || c.b ? r({
      r: c.r || n.r,
      g: c.g || n.g,
      b: c.b || n.b,
      a: n.a,
      source: "rgb"
    }, d) : c.a && (c.a < 0 ? c.a = 0 : c.a > 100 && (c.a = 100), c.a /= 100, r({
      h: a.h,
      s: a.s,
      l: a.l,
      a: c.a,
      source: "rgb"
    }, d));
  };
  return f.createElement(
    "div",
    { style: s.fields, className: "flexbox-fix" },
    f.createElement(
      "div",
      { style: s.double },
      f.createElement(Ae, {
        style: { input: s.input, label: s.label },
        label: "hex",
        value: i.replace("#", ""),
        onChange: l
      })
    ),
    f.createElement(
      "div",
      { style: s.single },
      f.createElement(Ae, {
        style: { input: s.input, label: s.label },
        label: "r",
        value: n.r,
        onChange: l,
        dragLabel: "true",
        dragMax: "255"
      })
    ),
    f.createElement(
      "div",
      { style: s.single },
      f.createElement(Ae, {
        style: { input: s.input, label: s.label },
        label: "g",
        value: n.g,
        onChange: l,
        dragLabel: "true",
        dragMax: "255"
      })
    ),
    f.createElement(
      "div",
      { style: s.single },
      f.createElement(Ae, {
        style: { input: s.input, label: s.label },
        label: "b",
        value: n.b,
        onChange: l,
        dragLabel: "true",
        dragMax: "255"
      })
    ),
    f.createElement(
      "div",
      { style: s.alpha },
      f.createElement(Ae, {
        style: { input: s.input, label: s.label },
        label: "a",
        value: Math.round(n.a * 100),
        onChange: l,
        dragLabel: "true",
        dragMax: "100"
      })
    )
  );
}, Lj = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }
  return e;
}, ky = function(t) {
  var r = t.colors, n = t.onClick, a = n === void 0 ? function() {
  } : n, i = t.onSwatchHover, o = we({
    default: {
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
    "no-presets": !r || !r.length
  }), s = function(u, c) {
    a({
      hex: u,
      source: "hex"
    }, c);
  };
  return f.createElement(
    "div",
    { style: o.colors, className: "flexbox-fix" },
    r.map(function(l) {
      var u = typeof l == "string" ? { color: l } : l, c = "" + u.color + (u.title || "");
      return f.createElement(
        "div",
        { key: c, style: o.swatchWrap },
        f.createElement(fi, Lj({}, u, {
          style: o.swatch,
          onClick: s,
          onHover: i,
          focusStyle: {
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px " + u.color
          }
        }))
      );
    })
  );
};
ky.propTypes = {
  colors: q.arrayOf(q.oneOfType([q.string, q.shape({
    color: q.string,
    title: q.string
  })])).isRequired
};
var Fj = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }
  return e;
}, Lh = function(t) {
  var r = t.width, n = t.rgb, a = t.hex, i = t.hsv, o = t.hsl, s = t.onChange, l = t.onSwatchHover, u = t.disableAlpha, c = t.presetColors, d = t.renderers, h = t.styles, p = h === void 0 ? {} : h, v = t.className, m = v === void 0 ? "" : v, g = we(or({
    default: Fj({
      picker: {
        width: r,
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
        background: "rgba(" + n.r + "," + n.g + "," + n.b + "," + n.a + ")",
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
    }, p),
    disableAlpha: {
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
  }, p), { disableAlpha: u });
  return f.createElement(
    "div",
    { style: g.picker, className: "sketch-picker " + m },
    f.createElement(
      "div",
      { style: g.saturation },
      f.createElement(Xu, {
        style: g.Saturation,
        hsl: o,
        hsv: i,
        onChange: s
      })
    ),
    f.createElement(
      "div",
      { style: g.controls, className: "flexbox-fix" },
      f.createElement(
        "div",
        { style: g.sliders },
        f.createElement(
          "div",
          { style: g.hue },
          f.createElement(ko, {
            style: g.Hue,
            hsl: o,
            onChange: s
          })
        ),
        f.createElement(
          "div",
          { style: g.alpha },
          f.createElement(mh, {
            style: g.Alpha,
            rgb: n,
            hsl: o,
            renderers: d,
            onChange: s
          })
        )
      ),
      f.createElement(
        "div",
        { style: g.color },
        f.createElement(To, null),
        f.createElement("div", { style: g.activeColor })
      )
    ),
    f.createElement($j, {
      rgb: n,
      hsl: o,
      hex: a,
      onChange: s,
      disableAlpha: u
    }),
    f.createElement(ky, {
      colors: c,
      onClick: s,
      onSwatchHover: l
    })
  );
};
Lh.propTypes = {
  disableAlpha: q.bool,
  width: q.oneOfType([q.string, q.number]),
  styles: q.object
};
Lh.defaultProps = {
  disableAlpha: !1,
  width: 200,
  styles: {},
  presetColors: ["#D0021B", "#F5A623", "#F8E71C", "#8B572A", "#7ED321", "#417505", "#BD10E0", "#9013FE", "#4A90E2", "#50E3C2", "#B8E986", "#000000", "#4A4A4A", "#9B9B9B", "#FFFFFF"]
};
const Hj = sr(Lh);
var Uo = function(t) {
  var r = t.hsl, n = t.offset, a = t.onClick, i = a === void 0 ? function() {
  } : a, o = t.active, s = t.first, l = t.last, u = we({
    default: {
      swatch: {
        height: "12px",
        background: "hsl(" + r.h + ", 50%, " + n * 100 + "%)",
        cursor: "pointer"
      }
    },
    first: {
      swatch: {
        borderRadius: "2px 0 0 2px"
      }
    },
    last: {
      swatch: {
        borderRadius: "0 2px 2px 0"
      }
    },
    active: {
      swatch: {
        transform: "scaleY(1.8)",
        borderRadius: "3.6px/2px"
      }
    }
  }, { active: o, first: s, last: l }), c = function(h) {
    return i({
      h: r.h,
      s: 0.5,
      l: n,
      source: "hsl"
    }, h);
  };
  return f.createElement("div", { style: u.swatch, onClick: c });
}, Bj = function(t) {
  var r = t.onClick, n = t.hsl, a = we({
    default: {
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
  }), i = 0.1;
  return f.createElement(
    "div",
    { style: a.swatches },
    f.createElement(
      "div",
      { style: a.swatch },
      f.createElement(Uo, {
        hsl: n,
        offset: ".80",
        active: Math.abs(n.l - 0.8) < i && Math.abs(n.s - 0.5) < i,
        onClick: r,
        first: !0
      })
    ),
    f.createElement(
      "div",
      { style: a.swatch },
      f.createElement(Uo, {
        hsl: n,
        offset: ".65",
        active: Math.abs(n.l - 0.65) < i && Math.abs(n.s - 0.5) < i,
        onClick: r
      })
    ),
    f.createElement(
      "div",
      { style: a.swatch },
      f.createElement(Uo, {
        hsl: n,
        offset: ".50",
        active: Math.abs(n.l - 0.5) < i && Math.abs(n.s - 0.5) < i,
        onClick: r
      })
    ),
    f.createElement(
      "div",
      { style: a.swatch },
      f.createElement(Uo, {
        hsl: n,
        offset: ".35",
        active: Math.abs(n.l - 0.35) < i && Math.abs(n.s - 0.5) < i,
        onClick: r
      })
    ),
    f.createElement(
      "div",
      { style: a.swatch },
      f.createElement(Uo, {
        hsl: n,
        offset: ".20",
        active: Math.abs(n.l - 0.2) < i && Math.abs(n.s - 0.5) < i,
        onClick: r,
        last: !0
      })
    ),
    f.createElement("div", { style: a.clear })
  );
}, jj = function() {
  var t = we({
    default: {
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
  return f.createElement("div", { style: t.picker });
}, Fh = function(t) {
  var r = t.hsl, n = t.onChange, a = t.pointer, i = t.styles, o = i === void 0 ? {} : i, s = t.className, l = s === void 0 ? "" : s, u = we(or({
    default: {
      hue: {
        height: "12px",
        position: "relative"
      },
      Hue: {
        radius: "2px"
      }
    }
  }, o));
  return f.createElement(
    "div",
    { style: u.wrap || {}, className: "slider-picker " + l },
    f.createElement(
      "div",
      { style: u.hue },
      f.createElement(ko, {
        style: u.Hue,
        hsl: r,
        pointer: a,
        onChange: n
      })
    ),
    f.createElement(
      "div",
      { style: u.swatches },
      f.createElement(Bj, { hsl: r, onClick: n })
    )
  );
};
Fh.propTypes = {
  styles: q.object
};
Fh.defaultProps = {
  pointer: jj,
  styles: {}
};
sr(Fh);
var Ry = {};
Object.defineProperty(Ry, "__esModule", {
  value: !0
});
var xg = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }
  return e;
}, Yj = f, Eg = Wj(Yj);
function Wj(e) {
  return e && e.__esModule ? e : { default: e };
}
function Vj(e, t) {
  var r = {};
  for (var n in e)
    t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
  return r;
}
var nl = 24, Uj = Ry.default = function(e) {
  var t = e.fill, r = t === void 0 ? "currentColor" : t, n = e.width, a = n === void 0 ? nl : n, i = e.height, o = i === void 0 ? nl : i, s = e.style, l = s === void 0 ? {} : s, u = Vj(e, ["fill", "width", "height", "style"]);
  return Eg.default.createElement(
    "svg",
    xg({
      viewBox: "0 0 " + nl + " " + nl,
      style: xg({ fill: r, width: a, height: o }, l)
    }, u),
    Eg.default.createElement("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
  );
}, Gj = function(t) {
  var r = t.color, n = t.onClick, a = n === void 0 ? function() {
  } : n, i = t.onSwatchHover, o = t.first, s = t.last, l = t.active, u = we({
    default: {
      color: {
        width: "40px",
        height: "24px",
        cursor: "pointer",
        background: r,
        marginBottom: "1px"
      },
      check: {
        color: Dh(r),
        marginLeft: "8px",
        display: "none"
      }
    },
    first: {
      color: {
        overflow: "hidden",
        borderRadius: "2px 2px 0 0"
      }
    },
    last: {
      color: {
        overflow: "hidden",
        borderRadius: "0 0 2px 2px"
      }
    },
    active: {
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
    transparent: {
      check: {
        color: "#333"
      }
    }
  }, {
    first: o,
    last: s,
    active: l,
    "color-#FFFFFF": r === "#FFFFFF",
    transparent: r === "transparent"
  });
  return f.createElement(
    fi,
    {
      color: r,
      style: u.color,
      onClick: a,
      onHover: i,
      focusStyle: { boxShadow: "0 0 4px " + r }
    },
    f.createElement(
      "div",
      { style: u.check },
      f.createElement(Uj, null)
    )
  );
}, zj = function(t) {
  var r = t.onClick, n = t.onSwatchHover, a = t.group, i = t.active, o = we({
    default: {
      group: {
        paddingBottom: "10px",
        width: "40px",
        float: "left",
        marginRight: "10px"
      }
    }
  });
  return f.createElement(
    "div",
    { style: o.group },
    hi(a, function(s, l) {
      return f.createElement(Gj, {
        key: s,
        color: s,
        active: s.toLowerCase() === i,
        first: l === 0,
        last: l === a.length - 1,
        onClick: r,
        onSwatchHover: n
      });
    })
  );
}, Hh = function(t) {
  var r = t.width, n = t.height, a = t.onChange, i = t.onSwatchHover, o = t.colors, s = t.hex, l = t.styles, u = l === void 0 ? {} : l, c = t.className, d = c === void 0 ? "" : c, h = we(or({
    default: {
      picker: {
        width: r,
        height: n
      },
      overflow: {
        height: n,
        overflowY: "scroll"
      },
      body: {
        padding: "16px 0 6px 16px"
      },
      clear: {
        clear: "both"
      }
    }
  }, u)), p = function(m, g) {
    return a({ hex: m, source: "hex" }, g);
  };
  return f.createElement(
    "div",
    { style: h.picker, className: "swatches-picker " + d },
    f.createElement(
      Ms,
      null,
      f.createElement(
        "div",
        { style: h.overflow },
        f.createElement(
          "div",
          { style: h.body },
          hi(o, function(v) {
            return f.createElement(zj, {
              key: v.toString(),
              group: v,
              active: s,
              onClick: p,
              onSwatchHover: i
            });
          }),
          f.createElement("div", { style: h.clear })
        )
      )
    )
  );
};
Hh.propTypes = {
  width: q.oneOfType([q.string, q.number]),
  height: q.oneOfType([q.string, q.number]),
  colors: q.arrayOf(q.arrayOf(q.string)),
  styles: q.object
  /* eslint-disable max-len */
};
Hh.defaultProps = {
  width: 320,
  height: 240,
  colors: [[Ci[900], Ci[700], Ci[500], Ci[300], Ci[100]], [Di[900], Di[700], Di[500], Di[300], Di[100]], [Oi[900], Oi[700], Oi[500], Oi[300], Oi[100]], [Ti[900], Ti[700], Ti[500], Ti[300], Ti[100]], [ki[900], ki[700], ki[500], ki[300], ki[100]], [Ri[900], Ri[700], Ri[500], Ri[300], Ri[100]], [Pi[900], Pi[700], Pi[500], Pi[300], Pi[100]], [Ni[900], Ni[700], Ni[500], Ni[300], Ni[100]], [Mi[900], Mi[700], Mi[500], Mi[300], Mi[100]], ["#194D33", Zo[700], Zo[500], Zo[300], Zo[100]], [Ai[900], Ai[700], Ai[500], Ai[300], Ai[100]], [Ii[900], Ii[700], Ii[500], Ii[300], Ii[100]], [$i[900], $i[700], $i[500], $i[300], $i[100]], [Li[900], Li[700], Li[500], Li[300], Li[100]], [Fi[900], Fi[700], Fi[500], Fi[300], Fi[100]], [Hi[900], Hi[700], Hi[500], Hi[300], Hi[100]], [Bi[900], Bi[700], Bi[500], Bi[300], Bi[100]], [ji[900], ji[700], ji[500], ji[300], ji[100]], ["#000000", "#525252", "#969696", "#D9D9D9", "#FFFFFF"]],
  styles: {}
};
sr(Hh);
var Bh = function(t) {
  var r = t.onChange, n = t.onSwatchHover, a = t.hex, i = t.colors, o = t.width, s = t.triangle, l = t.styles, u = l === void 0 ? {} : l, c = t.className, d = c === void 0 ? "" : c, h = we(or({
    default: {
      card: {
        width: o,
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
  }, u), {
    "hide-triangle": s === "hide",
    "top-left-triangle": s === "top-left",
    "top-right-triangle": s === "top-right"
  }), p = function(m, g) {
    ka(m) && r({
      hex: m,
      source: "hex"
    }, g);
  };
  return f.createElement(
    "div",
    { style: h.card, className: "twitter-picker " + d },
    f.createElement("div", { style: h.triangleShadow }),
    f.createElement("div", { style: h.triangle }),
    f.createElement(
      "div",
      { style: h.body },
      hi(i, function(v, m) {
        return f.createElement(fi, {
          key: m,
          color: v,
          hex: v,
          style: h.swatch,
          onClick: p,
          onHover: n,
          focusStyle: {
            boxShadow: "0 0 4px " + v
          }
        });
      }),
      f.createElement(
        "div",
        { style: h.hash },
        "#"
      ),
      f.createElement(Ae, {
        label: null,
        style: { input: h.input },
        value: a.replace("#", ""),
        onChange: p
      }),
      f.createElement("div", { style: h.clear })
    )
  );
};
Bh.propTypes = {
  width: q.oneOfType([q.string, q.number]),
  triangle: q.oneOf(["hide", "top-left", "top-right"]),
  colors: q.arrayOf(q.string),
  styles: q.object
};
Bh.defaultProps = {
  width: 276,
  colors: ["#FF6900", "#FCB900", "#7BDCB5", "#00D084", "#8ED1FC", "#0693E3", "#ABB8C3", "#EB144C", "#F78DA7", "#9900EF"],
  triangle: "top-left",
  styles: {}
};
sr(Bh);
var jh = function(t) {
  var r = we({
    default: {
      picker: {
        width: "20px",
        height: "20px",
        borderRadius: "22px",
        border: "2px #fff solid",
        transform: "translate(-12px, -13px)",
        background: "hsl(" + Math.round(t.hsl.h) + ", " + Math.round(t.hsl.s * 100) + "%, " + Math.round(t.hsl.l * 100) + "%)"
      }
    }
  });
  return f.createElement("div", { style: r.picker });
};
jh.propTypes = {
  hsl: q.shape({
    h: q.number,
    s: q.number,
    l: q.number,
    a: q.number
  })
};
jh.defaultProps = {
  hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 }
};
var Yh = function(t) {
  var r = we({
    default: {
      picker: {
        width: "20px",
        height: "20px",
        borderRadius: "22px",
        transform: "translate(-10px, -7px)",
        background: "hsl(" + Math.round(t.hsl.h) + ", 100%, 50%)",
        border: "2px white solid"
      }
    }
  });
  return f.createElement("div", { style: r.picker });
};
Yh.propTypes = {
  hsl: q.shape({
    h: q.number,
    s: q.number,
    l: q.number,
    a: q.number
  })
};
Yh.defaultProps = {
  hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 }
};
var qj = function(t) {
  var r = t.onChange, n = t.rgb, a = t.hsl, i = t.hex, o = t.hsv, s = function(p, v) {
    if (p.hex)
      ka(p.hex) && r({
        hex: p.hex,
        source: "hex"
      }, v);
    else if (p.rgb) {
      var m = p.rgb.split(",");
      zc(p.rgb, "rgb") && r({
        r: m[0],
        g: m[1],
        b: m[2],
        a: 1,
        source: "rgb"
      }, v);
    } else if (p.hsv) {
      var g = p.hsv.split(",");
      zc(p.hsv, "hsv") && (g[2] = g[2].replace("%", ""), g[1] = g[1].replace("%", ""), g[0] = g[0].replace("°", ""), g[1] == 1 ? g[1] = 0.01 : g[2] == 1 && (g[2] = 0.01), r({
        h: Number(g[0]),
        s: Number(g[1]),
        v: Number(g[2]),
        source: "hsv"
      }, v));
    } else if (p.hsl) {
      var b = p.hsl.split(",");
      zc(p.hsl, "hsl") && (b[2] = b[2].replace("%", ""), b[1] = b[1].replace("%", ""), b[0] = b[0].replace("°", ""), d[1] == 1 ? d[1] = 0.01 : d[2] == 1 && (d[2] = 0.01), r({
        h: Number(b[0]),
        s: Number(b[1]),
        v: Number(b[2]),
        source: "hsl"
      }, v));
    }
  }, l = we({
    default: {
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
  }), u = n.r + ", " + n.g + ", " + n.b, c = Math.round(a.h) + "°, " + Math.round(a.s * 100) + "%, " + Math.round(a.l * 100) + "%", d = Math.round(o.h) + "°, " + Math.round(o.s * 100) + "%, " + Math.round(o.v * 100) + "%";
  return f.createElement(
    "div",
    { style: l.wrap, className: "flexbox-fix" },
    f.createElement(
      "div",
      { style: l.fields },
      f.createElement(
        "div",
        { style: l.double },
        f.createElement(Ae, {
          style: { input: l.input, label: l.label },
          label: "hex",
          value: i,
          onChange: s
        })
      ),
      f.createElement(
        "div",
        { style: l.column },
        f.createElement(
          "div",
          { style: l.single },
          f.createElement(Ae, {
            style: { input: l.input2, label: l.label2 },
            label: "rgb",
            value: u,
            onChange: s
          })
        ),
        f.createElement(
          "div",
          { style: l.single },
          f.createElement(Ae, {
            style: { input: l.input2, label: l.label2 },
            label: "hsv",
            value: d,
            onChange: s
          })
        ),
        f.createElement(
          "div",
          { style: l.single },
          f.createElement(Ae, {
            style: { input: l.input2, label: l.label2 },
            label: "hsl",
            value: c,
            onChange: s
          })
        )
      )
    )
  );
}, Wh = function(t) {
  var r = t.width, n = t.onChange, a = t.rgb, i = t.hsl, o = t.hsv, s = t.hex, l = t.header, u = t.styles, c = u === void 0 ? {} : u, d = t.className, h = d === void 0 ? "" : d, p = we(or({
    default: {
      picker: {
        width: r,
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
        background: "rgba(" + a.r + ", " + a.g + ", " + a.b + ", 1)",
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
  }, c));
  return f.createElement(
    "div",
    { style: p.picker, className: "google-picker " + h },
    f.createElement(
      "div",
      { style: p.head },
      l
    ),
    f.createElement("div", { style: p.swatch }),
    f.createElement(
      "div",
      { style: p.saturation },
      f.createElement(Xu, {
        hsl: i,
        hsv: o,
        pointer: jh,
        onChange: n
      })
    ),
    f.createElement(
      "div",
      { style: p.body },
      f.createElement(
        "div",
        { style: p.controls, className: "flexbox-fix" },
        f.createElement(
          "div",
          { style: p.hue },
          f.createElement(ko, {
            style: p.Hue,
            hsl: i,
            radius: "4px",
            pointer: Yh,
            onChange: n
          })
        )
      ),
      f.createElement(qj, {
        rgb: a,
        hsl: i,
        hex: s,
        hsv: o,
        onChange: n
      })
    )
  );
};
Wh.propTypes = {
  width: q.oneOfType([q.string, q.number]),
  styles: q.object,
  header: q.string
};
Wh.defaultProps = {
  width: 652,
  styles: {},
  header: "Color picker"
};
sr(Wh);
var Py = function(t) {
  var r = t.pickerType, n = r === void 0 ? "sketch" : r, a = t.color, i = a === void 0 ? "#fff" : a, o = t.onChange, s = o === void 0 ? function() {
  } : o, l = t.onClickOutside, u = l === void 0 ? function() {
  } : l, c = {
    sketch: Xj,
    compact: Kj
  }, d = f.useRef(null), h = c[n];
  return fe.whenUserClickOutsideTheElement(d, u), h ? /* @__PURE__ */ f.createElement("div", {
    className: "rct-color-picker rct-color-picker-".concat(n),
    ref: d
  }, /* @__PURE__ */ f.createElement(h, {
    color: i,
    onChange: s
  })) : null;
}, Kj = function(t) {
  var r = t.onChange;
  return /* @__PURE__ */ f.createElement(Sj, {
    onChangeComplete: function(a) {
      return r(a.hex);
    }
  });
}, Xj = function(t) {
  var r = t.color, n = t.onChange, a = f.useState(r), i = ve(a, 2), o = i[0], s = i[1];
  return /* @__PURE__ */ f.createElement(Hj, {
    color: o,
    onChangeComplete: function(u) {
      return n(u.hex);
    },
    onChange: function(u) {
      return s(u.hex);
    },
    disableAlpha: !0
  });
};
function As(e) {
  var t = e.children, r = e.initiator, n = e.style, a = n === void 0 ? {} : n, i = e.minWidth, o = e.minHeight, s = e.maxWidth, l = e.maxHeight, u = e.extraClass, c = u === void 0 ? "" : u, d = e.onOutsideClick, h = d === void 0 ? function() {
  } : d, p = e.notResize, v = p === void 0 ? !1 : p, m = e.answer, g = m === void 0 ? {} : m, b = f.useRef(new Jj({
    props: e
  })), y = b.current, w = f.useRef(null), S = f.useRef("id".concat(fe.random16()));
  g.randomClass = S.current, g.popupRefCurrent = w;
  var _ = function(C) {
    var D;
    (D = C.target) !== null && D !== void 0 && D.parentElement && w.current && !w.current.contains(C.target) && h();
  };
  return f.useEffect(function() {
    var E = y.checkElementScroll(r);
    return h && setTimeout(function() {
      document.addEventListener("click", _);
    }, 0), y.recalcPosition(), function() {
      E(), h && document.removeEventListener("click", _);
    };
  }, []), y.data = {
    popupRefCurrent: w
  }, /* @__PURE__ */ f.createElement("div", {
    className: "rct-popup ".concat(S.current, " ").concat(c),
    style: U({
      minWidth: i ? y.getVal(i) : "unset",
      minHeight: o ? y.getVal(o) : "unset",
      maxWidth: s ? y.getVal(s) : "unset",
      maxHeight: l ? y.getVal(l) : "unset"
    }, a),
    ref: w
  }, t, !v && /* @__PURE__ */ f.createElement(Qj, {
    utils: y
  }));
}
var Jl, al = _0;
if (process.env.NODE_ENV === "production")
  Jl = al.createRoot, al.hydrateRoot;
else {
  var Cg = al.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Jl = function(e, t) {
    Cg.usingClientEntryPoint = !0;
    try {
      return al.createRoot(e, t);
    } finally {
      Cg.usingClientEntryPoint = !1;
    }
  };
}
var Zu = function(t) {
  var r = t.portal, n = document.createElement("div");
  n.className = "popup-root";
  var a = r || document.querySelector("html");
  a.appendChild(n);
  var i = Jl(n), o = function() {
    i.unmount(), n.remove();
  };
  return i.render(/* @__PURE__ */ f.createElement(As, le({}, t, {
    removeComponent: o
  }))), {
    removeComponent: o
  };
};
function Qj(e) {
  var t = e.utils, r = f.useRef(null);
  return t.data.cornerRefCurrent = r, /* @__PURE__ */ f.createElement("div", {
    className: t.positionToCornerClass(),
    ref: r,
    onMouseDown: t.cornerStart.bind(t)
  });
}
var Jj = /* @__PURE__ */ function() {
  function e(t) {
    var r = t.props;
    go(this, e), this.props = U(U({}, r), {}, {
      answer: r != null && r.answer ? r.answer : {}
    }), this.position = {}, this.localeStorageName = "popup_sizes";
    var n = localStorage.getItem(this.localeStorageName);
    this.popupSizes = n ? JSON.parse(n) : {}, this.getPosition();
  }
  return mo(e, [{
    key: "getPosition",
    value: function() {
      var r, n = this.props, a = n.initiator, i = n.minWidth, o = n.minHeight, s = n.id, l = n.autoSize, u = n.fitToParent, c = a.getBoundingClientRect(), d = c.width, h = c.height, p = c.left, v = c.right, m = c.top, g = c.bottom, b = this.position, y = b.width, w = b.height;
      !y && this.popupSizes[s] && (y = this.popupSizes[s].width, w = this.popupSizes[s].height);
      var S = window.innerWidth - p, _ = window.innerHeight - g, E = y || Math.max(d, i), C = w || Math.max(h, o);
      if (l && (r = this.data) !== null && r !== void 0 && (r = r.popupRefCurrent) !== null && r !== void 0 && r.current) {
        var D = this.data.popupRefCurrent.current.getBoundingClientRect(), O = D.width, R = D.height;
        E = O, C = R;
      }
      var P = _ > C + 20, A = S > E + 20;
      return this.props.answer.direction = {
        down: P,
        up: !P,
        right: A,
        left: !A
      }, this.position = {
        downDirection: P,
        rightDirection: A,
        left: u || A ? p : v - E,
        top: u ? m : P ? g : m - C,
        width: u ? d : E,
        height: u ? h : C
      }, this.position;
    }
  }, {
    key: "getVal",
    value: function(r) {
      return isNaN(r) ? r : "".concat(r, "px");
    }
  }, {
    key: "positionToPopupCSS",
    value: function() {
      var r = this.props, n = r.minWidth, a = r.minHeight, i = r.maxWidth, o = r.maxHeight, s = r.autoSize, l = this.position, u = l.left, c = l.top, d = l.width, h = l.height, p = {
        left: this.getVal(u),
        top: this.getVal(c),
        minWidth: this.getVal(n),
        minHeight: this.getVal(a)
      };
      return s || (p.width = this.getVal(d), p.height = this.getVal(h)), i && (p["max-width"] = this.getVal(i)), o && (p["max-height"] = this.getVal(o)), p;
    }
  }, {
    key: "positionToCornerClass",
    value: function() {
      var r = this.position, n = r.downDirection, a = r.rightDirection;
      return "rct-popup-corner ".concat(n ? "bottom" : "top", "-").concat(a ? "right" : "left");
    }
  }, {
    key: "recalcPosition",
    value: function() {
      var r = this.data, n = r.popupRefCurrent, a = r.cornerRefCurrent;
      this.position = this.getPosition();
      var i = this.positionToPopupCSS();
      for (var o in i) {
        var s = i[o];
        n.current.style[o] = s;
      }
      a != null && a.current && (a.current.className = this.positionToCornerClass());
    }
  }, {
    key: "checkElementScroll",
    value: function() {
      var r = this, n = this.props.initiator;
      if (!n)
        return function() {
        };
      for (var a = n.parentElement, i = [], o = function() {
        r.recalcPosition();
      }; (s = a) !== null && s !== void 0 && s.tagName; ) {
        var s, l = {
          parentEl: a
        };
        l.scrollListener = o, a.addEventListener("scroll", o), i.push(l), a = a.parentElement;
      }
      return function() {
        for (var u = 0, c = i; u < c.length; u++) {
          var d = c[u];
          d.parentEl.removeEventListener("scroll", d.scrollListener);
        }
      };
    }
  }, {
    key: "cornerStart",
    value: function(r) {
      var n = this.data.popupRefCurrent, a = this.position, i = a.width, o = a.height, s = a.left, l = a.top;
      this.cornerStartPosition = {
        cursorX: r.clientX,
        cursorY: r.clientY,
        popupWidth: i,
        popupHeight: o,
        popupLeft: s,
        popupTop: l
      }, n.current.classList.add("move"), document.onmouseup = this.cornerStop.bind(this), document.onmousemove = this.cornerMove.bind(this), document.getElementsByTagName("body")[0].style["user-select"] = "none";
    }
  }, {
    key: "cornerMove",
    value: function(r) {
      var n = this.data.popupRefCurrent, a = this.props, i = a.minWidth, o = a.minHeight, s = this.cornerStartPosition, l = s.cursorX, u = s.cursorY, c = s.popupWidth, d = s.popupHeight, h = s.popupLeft, p = s.popupTop, v = this.position, m = v.downDirection, g = v.rightDirection, b = c - i, y = d - o, w = r.clientX - l, S = r.clientY - u;
      g && w < 0 && w < b * -1 && (w = b * -1), !g && w > 0 && w > b && (w = b), m && S < 0 && S < y * -1 && (S = y * -1), !m && S > 0 && S > y && (S = y), this.position = U(U({}, this.position), {}, {
        left: g ? h : h + w,
        top: m ? p : p + S,
        width: g ? c + w : c - w,
        height: m ? d + S : d - S
      });
      var _ = this.positionToPopupCSS();
      for (var E in _) {
        var C = _[E];
        n.current.style[E] = C;
      }
    }
  }, {
    key: "cornerStop",
    value: function() {
      var r = this.data.popupRefCurrent, n = this.props.id;
      if (document.onmouseup = null, document.onmousemove = null, r.current.classList.remove("move"), document.getElementsByTagName("body")[0].style["user-select"] = "", this.recalcPosition(), n) {
        var a = this.position, i = a.width, o = a.height;
        this.popupSizes[n] = {
          width: i,
          height: o
        }, localStorage.setItem(this.localeStorageName, JSON.stringify(this.popupSizes));
      }
    }
  }]);
}(), Zj = {
  0: "Invalid value for configuration 'enforceActions', expected 'never', 'always' or 'observed'",
  1: function(t, r) {
    return "Cannot apply '" + t + "' to '" + r.toString() + "': Field not found.";
  },
  /*
  2(prop) {
      return `invalid decorator for '${prop.toString()}'`
  },
  3(prop) {
      return `Cannot decorate '${prop.toString()}': action can only be used on properties with a function value.`
  },
  4(prop) {
      return `Cannot decorate '${prop.toString()}': computed can only be used on getter properties.`
  },
  */
  5: "'keys()' can only be used on observable objects, arrays, sets and maps",
  6: "'values()' can only be used on observable objects, arrays, sets and maps",
  7: "'entries()' can only be used on observable objects, arrays and maps",
  8: "'set()' can only be used on observable objects, arrays and maps",
  9: "'remove()' can only be used on observable objects, arrays and maps",
  10: "'has()' can only be used on observable objects, arrays and maps",
  11: "'get()' can only be used on observable objects, arrays and maps",
  12: "Invalid annotation",
  13: "Dynamic observable objects cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)",
  14: "Intercept handlers should return nothing or a change object",
  15: "Observable arrays cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)",
  16: "Modification exception: the internal structure of an observable array was changed.",
  17: function(t, r) {
    return "[mobx.array] Index out of bounds, " + t + " is larger than " + r;
  },
  18: "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js",
  19: function(t) {
    return "Cannot initialize from classes that inherit from Map: " + t.constructor.name;
  },
  20: function(t) {
    return "Cannot initialize map from " + t;
  },
  21: function(t) {
    return "Cannot convert to map from '" + t + "'";
  },
  22: "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js",
  23: "It is not possible to get index atoms from arrays",
  24: function(t) {
    return "Cannot obtain administration from " + t;
  },
  25: function(t, r) {
    return "the entry '" + t + "' does not exist in the observable map '" + r + "'";
  },
  26: "please specify a property",
  27: function(t, r) {
    return "no observable property '" + t.toString() + "' found on the observable object '" + r + "'";
  },
  28: function(t) {
    return "Cannot obtain atom from " + t;
  },
  29: "Expecting some object",
  30: "invalid action stack. did you forget to finish an action?",
  31: "missing option for computed: get",
  32: function(t, r) {
    return "Cycle detected in computation " + t + ": " + r;
  },
  33: function(t) {
    return "The setter of computed value '" + t + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?";
  },
  34: function(t) {
    return "[ComputedValue '" + t + "'] It is not possible to assign a new value to a computed value.";
  },
  35: "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`",
  36: "isolateGlobalState should be called before MobX is running any reactions",
  37: function(t) {
    return "[mobx] `observableArray." + t + "()` mutates the array in-place, which is not allowed inside a derivation. Use `array.slice()." + t + "()` instead";
  },
  38: "'ownKeys()' can only be used on observable objects",
  39: "'defineProperty()' can only be used on observable objects"
}, eY = process.env.NODE_ENV !== "production" ? Zj : {};
function te(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  if (process.env.NODE_ENV !== "production") {
    var a = typeof e == "string" ? e : eY[e];
    throw typeof a == "function" && (a = a.apply(null, r)), new Error("[MobX] " + a);
  }
  throw new Error(typeof e == "number" ? "[MobX] minified error nr: " + e + (r.length ? " " + r.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + e);
}
var tY = {};
function ec() {
  return typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : tY;
}
var Ny = Object.assign, Zl = Object.getOwnPropertyDescriptor, Sn = Object.defineProperty, Is = Object.prototype, eu = [];
Object.freeze(eu);
var Vh = {};
Object.freeze(Vh);
var rY = typeof Proxy < "u", nY = /* @__PURE__ */ Object.toString();
function My() {
  rY || te(process.env.NODE_ENV !== "production" ? "`Proxy` objects are not available in the current environment. Please configure MobX to enable a fallback implementation.`" : "Proxy not available");
}
function Go(e) {
  process.env.NODE_ENV !== "production" && j.verifyProxies && te("MobX is currently configured to be able to run in ES5 mode, but in ES5 MobX won't be able to " + e);
}
function Wr() {
  return ++j.mobxGuid;
}
function Uh(e) {
  var t = !1;
  return function() {
    if (!t)
      return t = !0, e.apply(this, arguments);
  };
}
var Ui = function() {
};
function Dt(e) {
  return typeof e == "function";
}
function Xa(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function tc(e) {
  return e !== null && typeof e == "object";
}
function Zr(e) {
  if (!tc(e))
    return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null)
    return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === nY;
}
function Ay(e) {
  var t = e == null ? void 0 : e.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function rc(e, t, r) {
  Sn(e, t, {
    enumerable: !1,
    writable: !0,
    configurable: !0,
    value: r
  });
}
function Iy(e, t, r) {
  Sn(e, t, {
    enumerable: !1,
    writable: !1,
    configurable: !0,
    value: r
  });
}
function Ra(e, t) {
  var r = "isMobX" + e;
  return t.prototype[r] = !0, function(n) {
    return tc(n) && n[r] === !0;
  };
}
function Po(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function aY(e) {
  var t = Object.getPrototypeOf(e), r = Object.getPrototypeOf(t), n = Object.getPrototypeOf(r);
  return n === null;
}
function Yn(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var $y = typeof Object.getOwnPropertySymbols < "u";
function iY(e) {
  var t = Object.keys(e);
  if (!$y)
    return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length ? [].concat(t, r.filter(function(n) {
    return Is.propertyIsEnumerable.call(e, n);
  })) : t;
}
var nc = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : $y ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : (
  /* istanbul ignore next */
  Object.getOwnPropertyNames
);
function Gd(e) {
  return typeof e == "string" ? e : typeof e == "symbol" ? e.toString() : new String(e).toString();
}
function Ly(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function Ar(e, t) {
  return Is.hasOwnProperty.call(e, t);
}
var oY = Object.getOwnPropertyDescriptors || function(t) {
  var r = {};
  return nc(t).forEach(function(n) {
    r[n] = Zl(t, n);
  }), r;
};
function fr(e, t) {
  return !!(e & t);
}
function hr(e, t, r) {
  return r ? e |= t : e &= ~t, e;
}
function Dg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function sY(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, uY(n.key), n);
  }
}
function No(e, t, r) {
  return t && sY(e.prototype, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Gi(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = cY(e)) || t) {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? {
        done: !0
      } : {
        done: !1,
        value: e[n++]
      };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ta() {
  return ta = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ta.apply(null, arguments);
}
function Fy(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, zd(e, t);
}
function zd(e, t) {
  return zd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, zd(e, t);
}
function lY(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function uY(e) {
  var t = lY(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function cY(e, t) {
  if (e) {
    if (typeof e == "string") return Dg(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Dg(e, t) : void 0;
  }
}
var nr = /* @__PURE__ */ Symbol("mobx-stored-annotations");
function xn(e) {
  function t(r, n) {
    if (Ls(n))
      return e.decorate_20223_(r, n);
    $s(r, n, e);
  }
  return Object.assign(t, e);
}
function $s(e, t, r) {
  if (Ar(e, nr) || rc(e, nr, ta({}, e[nr])), process.env.NODE_ENV !== "production" && tu(r) && !Ar(e[nr], t)) {
    var n = e.constructor.name + ".prototype." + t.toString();
    te("'" + n + "' is decorated with 'override', but no such decorated member was found on prototype.");
  }
  dY(e, r, t), tu(r) || (e[nr][t] = r);
}
function dY(e, t, r) {
  if (process.env.NODE_ENV !== "production" && !tu(t) && Ar(e[nr], r)) {
    var n = e.constructor.name + ".prototype." + r.toString(), a = e[nr][r].annotationType_, i = t.annotationType_;
    te("Cannot apply '@" + i + "' to '" + n + "':" + (`
The field is already decorated with '@` + a + "'.") + `
Re-decorating fields is not allowed.
Use '@override' decorator for methods overridden by subclass.`);
  }
}
function fY(e) {
  return Ar(e, nr) || rc(e, nr, ta({}, e[nr])), e[nr];
}
function Ls(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
function ac(e, t) {
  process.env.NODE_ENV !== "production" && !t.includes(e.kind) && te("The decorator applied to '" + String(e.name) + "' cannot be used on a " + e.kind + " element");
}
var be = /* @__PURE__ */ Symbol("mobx administration"), Pa = /* @__PURE__ */ function() {
  function e(r) {
    r === void 0 && (r = process.env.NODE_ENV !== "production" ? "Atom@" + Wr() : "Atom"), this.name_ = void 0, this.flags_ = 0, this.observers_ = /* @__PURE__ */ new Set(), this.lastAccessedBy_ = 0, this.lowestObserverState_ = je.NOT_TRACKING_, this.onBOL = void 0, this.onBUOL = void 0, this.name_ = r;
  }
  var t = e.prototype;
  return t.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(n) {
      return n();
    });
  }, t.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(n) {
      return n();
    });
  }, t.reportObserved = function() {
    return e_(this);
  }, t.reportChanged = function() {
    Nr(), t_(this), Mr();
  }, t.toString = function() {
    return this.name_;
  }, No(e, [{
    key: "isBeingObserved",
    get: function() {
      return fr(this.flags_, e.isBeingObservedMask_);
    },
    set: function(n) {
      this.flags_ = hr(this.flags_, e.isBeingObservedMask_, n);
    }
  }, {
    key: "isPendingUnobservation",
    get: function() {
      return fr(this.flags_, e.isPendingUnobservationMask_);
    },
    set: function(n) {
      this.flags_ = hr(this.flags_, e.isPendingUnobservationMask_, n);
    }
  }, {
    key: "diffValue",
    get: function() {
      return fr(this.flags_, e.diffValueMask_) ? 1 : 0;
    },
    set: function(n) {
      this.flags_ = hr(this.flags_, e.diffValueMask_, n === 1);
    }
  }]);
}();
Pa.isBeingObservedMask_ = 1;
Pa.isPendingUnobservationMask_ = 2;
Pa.diffValueMask_ = 4;
var Gh = /* @__PURE__ */ Ra("Atom", Pa);
function zh(e, t, r) {
  t === void 0 && (t = Ui), r === void 0 && (r = Ui);
  var n = new Pa(e);
  return t !== Ui && TW(n, t), r !== Ui && l_(n, r), n;
}
function hY(e, t) {
  return e === t;
}
function pY(e, t) {
  return Jh(e, t);
}
function vY(e, t) {
  return Jh(e, t, 1);
}
function gY(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var ro = {
  identity: hY,
  structural: pY,
  default: gY,
  shallow: vY
};
function Qa(e, t, r) {
  return io(e) ? e : Array.isArray(e) ? Pt.array(e, {
    name: r
  }) : Zr(e) ? Pt.object(e, void 0, {
    name: r
  }) : Po(e) ? Pt.map(e, {
    name: r
  }) : Yn(e) ? Pt.set(e, {
    name: r
  }) : typeof e == "function" && !no(e) && !hs(e) ? Ay(e) ? ao(e) : fs(r, e) : e;
}
function mY(e, t, r) {
  if (e == null || Ao(e) || Ys(e) || ua(e) || Ur(e))
    return e;
  if (Array.isArray(e))
    return Pt.array(e, {
      name: r,
      deep: !1
    });
  if (Zr(e))
    return Pt.object(e, void 0, {
      name: r,
      deep: !1
    });
  if (Po(e))
    return Pt.map(e, {
      name: r,
      deep: !1
    });
  if (Yn(e))
    return Pt.set(e, {
      name: r,
      deep: !1
    });
  process.env.NODE_ENV !== "production" && te("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function ic(e) {
  return e;
}
function bY(e, t) {
  return process.env.NODE_ENV !== "production" && io(e) && te("observable.struct should not be used with observable values"), Jh(e, t) ? t : e;
}
var yY = "override";
function tu(e) {
  return e.annotationType_ === yY;
}
function Fs(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: _Y,
    extend_: wY,
    decorate_20223_: SY
  };
}
function _Y(e, t, r, n) {
  var a;
  if ((a = this.options_) != null && a.bound)
    return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_)
    return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (no(r.value))
    return 1;
  var i = Hy(e, this, t, r, !1);
  return Sn(n, t, i), 2;
}
function wY(e, t, r, n) {
  var a = Hy(e, this, t, r);
  return e.defineProperty_(t, a, n);
}
function SY(e, t) {
  process.env.NODE_ENV !== "production" && ac(t, ["method", "field"]);
  var r = t.kind, n = t.name, a = t.addInitializer, i = this, o = function(u) {
    var c, d, h, p;
    return Ja((c = (d = i.options_) == null ? void 0 : d.name) != null ? c : n.toString(), u, (h = (p = i.options_) == null ? void 0 : p.autoAction) != null ? h : !1);
  };
  if (r == "field")
    return function(l) {
      var u, c = l;
      return no(c) || (c = o(c)), (u = i.options_) != null && u.bound && (c = c.bind(this), c.isMobxAction = !0), c;
    };
  if (r == "method") {
    var s;
    return no(e) || (e = o(e)), (s = this.options_) != null && s.bound && a(function() {
      var l = this, u = l[n].bind(l);
      u.isMobxAction = !0, l[n] = u;
    }), e;
  }
  te("Cannot apply '" + i.annotationType_ + "' to '" + String(n) + "' (kind: " + r + "):" + (`
'` + i.annotationType_ + "' can only be used on properties with a function value."));
}
function xY(e, t, r, n) {
  var a = t.annotationType_, i = n.value;
  process.env.NODE_ENV !== "production" && !Dt(i) && te("Cannot apply '" + a + "' to '" + e.name_ + "." + r.toString() + "':" + (`
'` + a + "' can only be used on properties with a function value."));
}
function Hy(e, t, r, n, a) {
  var i, o, s, l, u, c, d;
  a === void 0 && (a = j.safeDescriptors), xY(e, t, r, n);
  var h = n.value;
  if ((i = t.options_) != null && i.bound) {
    var p;
    h = h.bind((p = e.proxy_) != null ? p : e.target_);
  }
  return {
    value: Ja(
      (o = (s = t.options_) == null ? void 0 : s.name) != null ? o : r.toString(),
      h,
      (l = (u = t.options_) == null ? void 0 : u.autoAction) != null ? l : !1,
      // https://github.com/mobxjs/mobx/discussions/3140
      (c = t.options_) != null && c.bound ? (d = e.proxy_) != null ? d : e.target_ : void 0
    ),
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: a ? e.isPlainObject_ : !0,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: !1,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: !a
  };
}
function By(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: EY,
    extend_: CY,
    decorate_20223_: DY
  };
}
function EY(e, t, r, n) {
  var a;
  if (n === e.target_)
    return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if ((a = this.options_) != null && a.bound && (!Ar(e.target_, t) || !hs(e.target_[t])) && this.extend_(e, t, r, !1) === null)
    return 0;
  if (hs(r.value))
    return 1;
  var i = jy(e, this, t, r, !1, !1);
  return Sn(n, t, i), 2;
}
function CY(e, t, r, n) {
  var a, i = jy(e, this, t, r, (a = this.options_) == null ? void 0 : a.bound);
  return e.defineProperty_(t, i, n);
}
function DY(e, t) {
  var r;
  process.env.NODE_ENV !== "production" && ac(t, ["method"]);
  var n = t.name, a = t.addInitializer;
  return hs(e) || (e = ao(e)), (r = this.options_) != null && r.bound && a(function() {
    var i = this, o = i[n].bind(i);
    o.isMobXFlow = !0, i[n] = o;
  }), e;
}
function OY(e, t, r, n) {
  var a = t.annotationType_, i = n.value;
  process.env.NODE_ENV !== "production" && !Dt(i) && te("Cannot apply '" + a + "' to '" + e.name_ + "." + r.toString() + "':" + (`
'` + a + "' can only be used on properties with a generator function value."));
}
function jy(e, t, r, n, a, i) {
  i === void 0 && (i = j.safeDescriptors), OY(e, t, r, n);
  var o = n.value;
  if (hs(o) || (o = ao(o)), a) {
    var s;
    o = o.bind((s = e.proxy_) != null ? s : e.target_), o.isMobXFlow = !0;
  }
  return {
    value: o,
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: i ? e.isPlainObject_ : !0,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: !1,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: !i
  };
}
function qh(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: TY,
    extend_: kY,
    decorate_20223_: RY
  };
}
function TY(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function kY(e, t, r, n) {
  return PY(e, this, t, r), e.defineComputedProperty_(t, ta({}, this.options_, {
    get: r.get,
    set: r.set
  }), n);
}
function RY(e, t) {
  process.env.NODE_ENV !== "production" && ac(t, ["getter"]);
  var r = this, n = t.name, a = t.addInitializer;
  return a(function() {
    var i = Mo(this)[be], o = ta({}, r.options_, {
      get: e,
      context: this
    });
    o.name || (o.name = process.env.NODE_ENV !== "production" ? i.name_ + "." + n.toString() : "ObservableObject." + n.toString()), i.values_.set(n, new Lr(o));
  }), function() {
    return this[be].getObservablePropValue_(n);
  };
}
function PY(e, t, r, n) {
  var a = t.annotationType_, i = n.get;
  process.env.NODE_ENV !== "production" && !i && te("Cannot apply '" + a + "' to '" + e.name_ + "." + r.toString() + "':" + (`
'` + a + "' can only be used on getter(+setter) properties."));
}
function oc(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: NY,
    extend_: MY,
    decorate_20223_: AY
  };
}
function NY(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function MY(e, t, r, n) {
  var a, i;
  return IY(e, this, t, r), e.defineObservableProperty_(t, r.value, (a = (i = this.options_) == null ? void 0 : i.enhancer) != null ? a : Qa, n);
}
function AY(e, t) {
  if (process.env.NODE_ENV !== "production") {
    if (t.kind === "field")
      throw te("Please use `@observable accessor " + String(t.name) + "` instead of `@observable " + String(t.name) + "`");
    ac(t, ["accessor"]);
  }
  var r = this, n = t.kind, a = t.name, i = /* @__PURE__ */ new WeakSet();
  function o(s, l) {
    var u, c, d = Mo(s)[be], h = new _a(l, (u = (c = r.options_) == null ? void 0 : c.enhancer) != null ? u : Qa, process.env.NODE_ENV !== "production" ? d.name_ + "." + a.toString() : "ObservableObject." + a.toString(), !1);
    d.values_.set(a, h), i.add(s);
  }
  if (n == "accessor")
    return {
      get: function() {
        return i.has(this) || o(this, e.get.call(this)), this[be].getObservablePropValue_(a);
      },
      set: function(l) {
        return i.has(this) || o(this, l), this[be].setObservablePropValue_(a, l);
      },
      init: function(l) {
        return i.has(this) || o(this, l), l;
      }
    };
}
function IY(e, t, r, n) {
  var a = t.annotationType_;
  process.env.NODE_ENV !== "production" && !("value" in n) && te("Cannot apply '" + a + "' to '" + e.name_ + "." + r.toString() + "':" + (`
'` + a + "' cannot be used on getter/setter properties"));
}
var $Y = "true", LY = /* @__PURE__ */ Yy();
function Yy(e) {
  return {
    annotationType_: $Y,
    options_: e,
    make_: FY,
    extend_: HY,
    decorate_20223_: BY
  };
}
function FY(e, t, r, n) {
  var a, i;
  if (r.get)
    return sc.make_(e, t, r, n);
  if (r.set) {
    var o = Ja(t.toString(), r.set);
    return n === e.target_ ? e.defineProperty_(t, {
      configurable: j.safeDescriptors ? e.isPlainObject_ : !0,
      set: o
    }) === null ? 0 : 2 : (Sn(n, t, {
      configurable: !0,
      set: o
    }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var s;
    if (Ay(r.value)) {
      var l, u = (l = this.options_) != null && l.autoBind ? ao.bound : ao;
      return u.make_(e, t, r, n);
    }
    var c = (s = this.options_) != null && s.autoBind ? fs.bound : fs;
    return c.make_(e, t, r, n);
  }
  var d = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? Pt.ref : Pt;
  if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
    var h;
    r.value = r.value.bind((h = e.proxy_) != null ? h : e.target_);
  }
  return d.make_(e, t, r, n);
}
function HY(e, t, r, n) {
  var a, i;
  if (r.get)
    return sc.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(t, {
      configurable: j.safeDescriptors ? e.isPlainObject_ : !0,
      set: Ja(t.toString(), r.set)
    }, n);
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var o;
    r.value = r.value.bind((o = e.proxy_) != null ? o : e.target_);
  }
  var s = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? Pt.ref : Pt;
  return s.extend_(e, t, r, n);
}
function BY(e, t) {
  te("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var jY = "observable", YY = "observable.ref", WY = "observable.shallow", VY = "observable.struct", Wy = {
  deep: !0,
  name: void 0,
  defaultDecorator: void 0,
  proxy: !0
};
Object.freeze(Wy);
function il(e) {
  return e || Wy;
}
var qd = /* @__PURE__ */ oc(jY), UY = /* @__PURE__ */ oc(YY, {
  enhancer: ic
}), GY = /* @__PURE__ */ oc(WY, {
  enhancer: mY
}), zY = /* @__PURE__ */ oc(VY, {
  enhancer: bY
}), Vy = /* @__PURE__ */ xn(qd);
function ol(e) {
  return e.deep === !0 ? Qa : e.deep === !1 ? ic : KY(e.defaultDecorator);
}
function qY(e) {
  var t;
  return e ? (t = e.defaultDecorator) != null ? t : Yy(e) : void 0;
}
function KY(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : Qa;
}
function Uy(e, t, r) {
  if (Ls(t))
    return qd.decorate_20223_(e, t);
  if (Xa(t)) {
    $s(e, t, qd);
    return;
  }
  return io(e) ? e : Zr(e) ? Pt.object(e, t, r) : Array.isArray(e) ? Pt.array(e, t) : Po(e) ? Pt.map(e, t) : Yn(e) ? Pt.set(e, t) : typeof e == "object" && e !== null ? e : Pt.box(e, t);
}
Ny(Uy, Vy);
var XY = {
  box: function(t, r) {
    var n = il(r);
    return new _a(t, ol(n), n.name, !0, n.equals);
  },
  array: function(t, r) {
    var n = il(r);
    return (j.useProxies === !1 || n.proxy === !1 ? e5 : VW)(t, ol(n), n.name);
  },
  map: function(t, r) {
    var n = il(r);
    return new v_(t, ol(n), n.name);
  },
  set: function(t, r) {
    var n = il(r);
    return new g_(t, ol(n), n.name);
  },
  object: function(t, r, n) {
    return vi(function() {
      return NW(j.useProxies === !1 || (n == null ? void 0 : n.proxy) === !1 ? Mo({}, n) : jW({}, n), t, r);
    });
  },
  ref: /* @__PURE__ */ xn(UY),
  shallow: /* @__PURE__ */ xn(GY),
  deep: Vy,
  struct: /* @__PURE__ */ xn(zY)
}, Pt = /* @__PURE__ */ Ny(Uy, XY), Gy = "computed", QY = "computed.struct", Kd = /* @__PURE__ */ qh(Gy), JY = /* @__PURE__ */ qh(QY, {
  equals: ro.structural
}), sc = function(t, r) {
  if (Ls(r))
    return Kd.decorate_20223_(t, r);
  if (Xa(r))
    return $s(t, r, Kd);
  if (Zr(t))
    return xn(qh(Gy, t));
  process.env.NODE_ENV !== "production" && (Dt(t) || te("First argument to `computed` should be an expression."), Dt(r) && te("A setter as second argument is no longer supported, use `{ set: fn }` option instead"));
  var n = Zr(r) ? r : {};
  return n.get = t, n.name || (n.name = t.name || ""), new Lr(n);
};
Object.assign(sc, Kd);
sc.struct = /* @__PURE__ */ xn(JY);
var Og, Tg, ru = 0, ZY = 1, eW = (Og = (Tg = /* @__PURE__ */ Zl(function() {
}, "name")) == null ? void 0 : Tg.configurable) != null ? Og : !1, kg = {
  value: "action",
  configurable: !0,
  writable: !1,
  enumerable: !1
};
function Ja(e, t, r, n) {
  r === void 0 && (r = !1), process.env.NODE_ENV !== "production" && (Dt(t) || te("`action` can only be invoked on functions"), (typeof e != "string" || !e) && te("actions should have valid names, got: '" + e + "'"));
  function a() {
    return tW(e, r, t, n || this, arguments);
  }
  return a.isMobxAction = !0, a.toString = function() {
    return t.toString();
  }, eW && (kg.value = e, Sn(a, "name", kg)), a;
}
function tW(e, t, r, n, a) {
  var i = rW(e, t, n, a);
  try {
    return r.apply(n, a);
  } catch (o) {
    throw i.error_ = o, o;
  } finally {
    nW(i);
  }
}
function rW(e, t, r, n) {
  var a = process.env.NODE_ENV !== "production" && Bt() && !!e, i = 0;
  if (process.env.NODE_ENV !== "production" && a) {
    i = Date.now();
    var o = n ? Array.from(n) : eu;
    pr({
      type: Kh,
      name: e,
      object: r,
      arguments: o
    });
  }
  var s = j.trackingDerivation, l = !t || !s;
  Nr();
  var u = j.allowStateChanges;
  l && (pi(), u = lc(!0));
  var c = Xi(!0), d = {
    runAsAction_: l,
    prevDerivation_: s,
    prevAllowStateChanges_: u,
    prevAllowStateReads_: c,
    notifySpy_: a,
    startTime_: i,
    actionId_: ZY++,
    parentActionId_: ru
  };
  return ru = d.actionId_, d;
}
function nW(e) {
  ru !== e.actionId_ && te(30), ru = e.parentActionId_, e.error_ !== void 0 && (j.suppressReactionErrors = !0), uc(e.prevAllowStateChanges_), wa(e.prevAllowStateReads_), Mr(), e.runAsAction_ && Kn(e.prevDerivation_), process.env.NODE_ENV !== "production" && e.notifySpy_ && vr({
    time: Date.now() - e.startTime_
  }), j.suppressReactionErrors = !1;
}
function zy(e, t) {
  var r = lc(e);
  try {
    return t();
  } finally {
    uc(r);
  }
}
function lc(e) {
  var t = j.allowStateChanges;
  return j.allowStateChanges = e, t;
}
function uc(e) {
  j.allowStateChanges = e;
}
var aW = "create", _a = /* @__PURE__ */ function(e) {
  function t(n, a, i, o, s) {
    var l;
    return i === void 0 && (i = process.env.NODE_ENV !== "production" ? "ObservableValue@" + Wr() : "ObservableValue"), o === void 0 && (o = !0), s === void 0 && (s = ro.default), l = e.call(this, i) || this, l.enhancer = void 0, l.name_ = void 0, l.equals = void 0, l.hasUnreportedChange_ = !1, l.interceptors_ = void 0, l.changeListeners_ = void 0, l.value_ = void 0, l.dehancer = void 0, l.enhancer = a, l.name_ = i, l.equals = s, l.value_ = a(n, void 0, i), process.env.NODE_ENV !== "production" && o && Bt() && Za({
      type: aW,
      object: l,
      observableKind: "value",
      debugObjectName: l.name_,
      newValue: "" + l.value_
    }), l;
  }
  Fy(t, e);
  var r = t.prototype;
  return r.dehanceValue = function(a) {
    return this.dehancer !== void 0 ? this.dehancer(a) : a;
  }, r.set = function(a) {
    var i = this.value_;
    if (a = this.prepareNewValue_(a), a !== j.UNCHANGED) {
      var o = Bt();
      process.env.NODE_ENV !== "production" && o && pr({
        type: qr,
        object: this,
        observableKind: "value",
        debugObjectName: this.name_,
        newValue: a,
        oldValue: i
      }), this.setNewValue_(a), process.env.NODE_ENV !== "production" && o && vr();
    }
  }, r.prepareNewValue_ = function(a) {
    if (yn(this), Rr(this)) {
      var i = Pr(this, {
        object: this,
        type: qr,
        newValue: a
      });
      if (!i)
        return j.UNCHANGED;
      a = i.newValue;
    }
    return a = this.enhancer(a, this.value_, this.name_), this.equals(this.value_, a) ? j.UNCHANGED : a;
  }, r.setNewValue_ = function(a) {
    var i = this.value_;
    this.value_ = a, this.reportChanged(), Kr(this) && Xr(this, {
      type: qr,
      object: this,
      newValue: a,
      oldValue: i
    });
  }, r.get = function() {
    return this.reportObserved(), this.dehanceValue(this.value_);
  }, r.intercept_ = function(a) {
    return Bs(this, a);
  }, r.observe_ = function(a, i) {
    return i && a({
      observableKind: "value",
      debugObjectName: this.name_,
      object: this,
      type: qr,
      newValue: this.value_,
      oldValue: void 0
    }), js(this, a);
  }, r.raw = function() {
    return this.value_;
  }, r.toJSON = function() {
    return this.get();
  }, r.toString = function() {
    return this.name_ + "[" + this.value_ + "]";
  }, r.valueOf = function() {
    return Ly(this.get());
  }, r[Symbol.toPrimitive] = function() {
    return this.valueOf();
  }, t;
}(Pa), iW = /* @__PURE__ */ Ra("ObservableValue", _a), Lr = /* @__PURE__ */ function() {
  function e(r) {
    this.dependenciesState_ = je.NOT_TRACKING_, this.observing_ = [], this.newObserving_ = null, this.observers_ = /* @__PURE__ */ new Set(), this.runId_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = je.UP_TO_DATE_, this.unboundDepsCount_ = 0, this.value_ = new nu(null), this.name_ = void 0, this.triggeredBy_ = void 0, this.flags_ = 0, this.derivation = void 0, this.setter_ = void 0, this.isTracing_ = Ir.NONE, this.scope_ = void 0, this.equals_ = void 0, this.requiresReaction_ = void 0, this.keepAlive_ = void 0, this.onBOL = void 0, this.onBUOL = void 0, r.get || te(31), this.derivation = r.get, this.name_ = r.name || (process.env.NODE_ENV !== "production" ? "ComputedValue@" + Wr() : "ComputedValue"), r.set && (this.setter_ = Ja(process.env.NODE_ENV !== "production" ? this.name_ + "-setter" : "ComputedValue-setter", r.set)), this.equals_ = r.equals || (r.compareStructural || r.struct ? ro.structural : ro.default), this.scope_ = r.context, this.requiresReaction_ = r.requiresReaction, this.keepAlive_ = !!r.keepAlive;
  }
  var t = e.prototype;
  return t.onBecomeStale_ = function() {
    fW(this);
  }, t.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(n) {
      return n();
    });
  }, t.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(n) {
      return n();
    });
  }, t.get = function() {
    if (this.isComputing && te(32, this.name_, this.derivation), j.inBatch === 0 && // !globalState.trackingDerivatpion &&
    this.observers_.size === 0 && !this.keepAlive_)
      Xd(this) && (this.warnAboutUntrackedRead_(), Nr(), this.value_ = this.computeValue_(!1), Mr());
    else if (e_(this), Xd(this)) {
      var n = j.trackingContext;
      this.keepAlive_ && !n && (j.trackingContext = this), this.trackAndCompute() && dW(this), j.trackingContext = n;
    }
    var a = this.value_;
    if (wl(a))
      throw a.cause;
    return a;
  }, t.set = function(n) {
    if (this.setter_) {
      this.isRunningSetter && te(33, this.name_), this.isRunningSetter = !0;
      try {
        this.setter_.call(this.scope_, n);
      } finally {
        this.isRunningSetter = !1;
      }
    } else
      te(34, this.name_);
  }, t.trackAndCompute = function() {
    var n = this.value_, a = (
      /* see #1208 */
      this.dependenciesState_ === je.NOT_TRACKING_
    ), i = this.computeValue_(!0), o = a || wl(n) || wl(i) || !this.equals_(n, i);
    return o && (this.value_ = i, process.env.NODE_ENV !== "production" && Bt() && Za({
      observableKind: "computed",
      debugObjectName: this.name_,
      object: this.scope_,
      type: "update",
      oldValue: n,
      newValue: i
    })), o;
  }, t.computeValue_ = function(n) {
    this.isComputing = !0;
    var a = lc(!1), i;
    if (n)
      i = qy(this, this.derivation, this.scope_);
    else if (j.disableErrorBoundaries === !0)
      i = this.derivation.call(this.scope_);
    else
      try {
        i = this.derivation.call(this.scope_);
      } catch (o) {
        i = new nu(o);
      }
    return uc(a), this.isComputing = !1, i;
  }, t.suspend_ = function() {
    this.keepAlive_ || (Qd(this), this.value_ = void 0, process.env.NODE_ENV !== "production" && this.isTracing_ !== Ir.NONE && console.log("[mobx.trace] Computed value '" + this.name_ + "' was suspended and it will recompute on the next access."));
  }, t.observe_ = function(n, a) {
    var i = this, o = !0, s = void 0;
    return SW(function() {
      var l = i.get();
      if (!o || a) {
        var u = pi();
        n({
          observableKind: "computed",
          debugObjectName: i.name_,
          type: qr,
          object: i,
          newValue: l,
          oldValue: s
        }), Kn(u);
      }
      o = !1, s = l;
    });
  }, t.warnAboutUntrackedRead_ = function() {
    process.env.NODE_ENV !== "production" && (this.isTracing_ !== Ir.NONE && console.log("[mobx.trace] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute."), (typeof this.requiresReaction_ == "boolean" ? this.requiresReaction_ : j.computedRequiresReaction) && console.warn("[mobx] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute."));
  }, t.toString = function() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  }, t.valueOf = function() {
    return Ly(this.get());
  }, t[Symbol.toPrimitive] = function() {
    return this.valueOf();
  }, No(e, [{
    key: "isComputing",
    get: function() {
      return fr(this.flags_, e.isComputingMask_);
    },
    set: function(n) {
      this.flags_ = hr(this.flags_, e.isComputingMask_, n);
    }
  }, {
    key: "isRunningSetter",
    get: function() {
      return fr(this.flags_, e.isRunningSetterMask_);
    },
    set: function(n) {
      this.flags_ = hr(this.flags_, e.isRunningSetterMask_, n);
    }
  }, {
    key: "isBeingObserved",
    get: function() {
      return fr(this.flags_, e.isBeingObservedMask_);
    },
    set: function(n) {
      this.flags_ = hr(this.flags_, e.isBeingObservedMask_, n);
    }
  }, {
    key: "isPendingUnobservation",
    get: function() {
      return fr(this.flags_, e.isPendingUnobservationMask_);
    },
    set: function(n) {
      this.flags_ = hr(this.flags_, e.isPendingUnobservationMask_, n);
    }
  }, {
    key: "diffValue",
    get: function() {
      return fr(this.flags_, e.diffValueMask_) ? 1 : 0;
    },
    set: function(n) {
      this.flags_ = hr(this.flags_, e.diffValueMask_, n === 1);
    }
  }]);
}();
Lr.isComputingMask_ = 1;
Lr.isRunningSetterMask_ = 2;
Lr.isBeingObservedMask_ = 4;
Lr.isPendingUnobservationMask_ = 8;
Lr.diffValueMask_ = 16;
var Hs = /* @__PURE__ */ Ra("ComputedValue", Lr), je;
(function(e) {
  e[e.NOT_TRACKING_ = -1] = "NOT_TRACKING_", e[e.UP_TO_DATE_ = 0] = "UP_TO_DATE_", e[e.POSSIBLY_STALE_ = 1] = "POSSIBLY_STALE_", e[e.STALE_ = 2] = "STALE_";
})(je || (je = {}));
var Ir;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.LOG = 1] = "LOG", e[e.BREAK = 2] = "BREAK";
})(Ir || (Ir = {}));
var nu = function(t) {
  this.cause = void 0, this.cause = t;
};
function wl(e) {
  return e instanceof nu;
}
function Xd(e) {
  switch (e.dependenciesState_) {
    case je.UP_TO_DATE_:
      return !1;
    case je.NOT_TRACKING_:
    case je.STALE_:
      return !0;
    case je.POSSIBLY_STALE_: {
      for (var t = Xi(!0), r = pi(), n = e.observing_, a = n.length, i = 0; i < a; i++) {
        var o = n[i];
        if (Hs(o)) {
          if (j.disableErrorBoundaries)
            o.get();
          else
            try {
              o.get();
            } catch {
              return Kn(r), wa(t), !0;
            }
          if (e.dependenciesState_ === je.STALE_)
            return Kn(r), wa(t), !0;
        }
      }
      return Xy(e), Kn(r), wa(t), !1;
    }
  }
}
function yn(e) {
  if (process.env.NODE_ENV !== "production") {
    var t = e.observers_.size > 0;
    !j.allowStateChanges && (t || j.enforceActions === "always") && console.warn("[MobX] " + (j.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ") + e.name_);
  }
}
function oW(e) {
  process.env.NODE_ENV !== "production" && !j.allowStateReads && j.observableRequiresReaction && console.warn("[mobx] Observable '" + e.name_ + "' being read outside a reactive context.");
}
function qy(e, t, r) {
  var n = Xi(!0);
  Xy(e), e.newObserving_ = new Array(
    // Reserve constant space for initial dependencies, dynamic space otherwise.
    // See https://github.com/mobxjs/mobx/pull/3833
    e.runId_ === 0 ? 100 : e.observing_.length
  ), e.unboundDepsCount_ = 0, e.runId_ = ++j.runId;
  var a = j.trackingDerivation;
  j.trackingDerivation = e, j.inBatch++;
  var i;
  if (j.disableErrorBoundaries === !0)
    i = t.call(r);
  else
    try {
      i = t.call(r);
    } catch (o) {
      i = new nu(o);
    }
  return j.inBatch--, j.trackingDerivation = a, lW(e), sW(e), wa(n), i;
}
function sW(e) {
  process.env.NODE_ENV !== "production" && e.observing_.length === 0 && (typeof e.requiresObservable_ == "boolean" ? e.requiresObservable_ : j.reactionRequiresObservable) && console.warn("[mobx] Derivation '" + e.name_ + "' is created/updated without reading any observable value.");
}
function lW(e) {
  for (var t = e.observing_, r = e.observing_ = e.newObserving_, n = je.UP_TO_DATE_, a = 0, i = e.unboundDepsCount_, o = 0; o < i; o++) {
    var s = r[o];
    s.diffValue === 0 && (s.diffValue = 1, a !== o && (r[a] = s), a++), s.dependenciesState_ > n && (n = s.dependenciesState_);
  }
  for (r.length = a, e.newObserving_ = null, i = t.length; i--; ) {
    var l = t[i];
    l.diffValue === 0 && Jy(l, e), l.diffValue = 0;
  }
  for (; a--; ) {
    var u = r[a];
    u.diffValue === 1 && (u.diffValue = 0, cW(u, e));
  }
  n !== je.UP_TO_DATE_ && (e.dependenciesState_ = n, e.onBecomeStale_());
}
function Qd(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; )
    Jy(t[r], e);
  e.dependenciesState_ = je.NOT_TRACKING_;
}
function Ky(e) {
  var t = pi();
  try {
    return e();
  } finally {
    Kn(t);
  }
}
function pi() {
  var e = j.trackingDerivation;
  return j.trackingDerivation = null, e;
}
function Kn(e) {
  j.trackingDerivation = e;
}
function Xi(e) {
  var t = j.allowStateReads;
  return j.allowStateReads = e, t;
}
function wa(e) {
  j.allowStateReads = e;
}
function Xy(e) {
  if (e.dependenciesState_ !== je.UP_TO_DATE_) {
    e.dependenciesState_ = je.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; )
      t[r].lowestObserverState_ = je.UP_TO_DATE_;
  }
}
var Sl = function() {
  this.version = 6, this.UNCHANGED = {}, this.trackingDerivation = null, this.trackingContext = null, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !1, this.allowStateReads = !0, this.enforceActions = !0, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.reactionRequiresObservable = !1, this.observableRequiresReaction = !1, this.disableErrorBoundaries = !1, this.suppressReactionErrors = !1, this.useProxies = !0, this.verifyProxies = !1, this.safeDescriptors = !0;
}, xl = !0, Qy = !1, j = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ ec();
  return e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (xl = !1), e.__mobxGlobals && e.__mobxGlobals.version !== new Sl().version && (xl = !1), xl ? e.__mobxGlobals ? (e.__mobxInstanceCount += 1, e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals) : (e.__mobxInstanceCount = 1, e.__mobxGlobals = /* @__PURE__ */ new Sl()) : (setTimeout(function() {
    Qy || te(35);
  }, 1), new Sl());
}();
function uW() {
  if ((j.pendingReactions.length || j.inBatch || j.isRunningReactions) && te(36), Qy = !0, xl) {
    var e = ec();
    --e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), j = new Sl();
  }
}
function cW(e, t) {
  e.observers_.add(t), e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_);
}
function Jy(e, t) {
  e.observers_.delete(t), e.observers_.size === 0 && Zy(e);
}
function Zy(e) {
  e.isPendingUnobservation === !1 && (e.isPendingUnobservation = !0, j.pendingUnobservations.push(e));
}
function Nr() {
  j.inBatch++;
}
function Mr() {
  if (--j.inBatch === 0) {
    a_();
    for (var e = j.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      r.isPendingUnobservation = !1, r.observers_.size === 0 && (r.isBeingObserved && (r.isBeingObserved = !1, r.onBUO()), r instanceof Lr && r.suspend_());
    }
    j.pendingUnobservations = [];
  }
}
function e_(e) {
  oW(e);
  var t = j.trackingDerivation;
  return t !== null ? (t.runId_ !== e.lastAccessedBy_ && (e.lastAccessedBy_ = t.runId_, t.newObserving_[t.unboundDepsCount_++] = e, !e.isBeingObserved && j.trackingContext && (e.isBeingObserved = !0, e.onBO())), e.isBeingObserved) : (e.observers_.size === 0 && j.inBatch > 0 && Zy(e), !1);
}
function t_(e) {
  e.lowestObserverState_ !== je.STALE_ && (e.lowestObserverState_ = je.STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === je.UP_TO_DATE_ && (process.env.NODE_ENV !== "production" && t.isTracing_ !== Ir.NONE && r_(t, e), t.onBecomeStale_()), t.dependenciesState_ = je.STALE_;
  }));
}
function dW(e) {
  e.lowestObserverState_ !== je.STALE_ && (e.lowestObserverState_ = je.STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === je.POSSIBLY_STALE_ ? (t.dependenciesState_ = je.STALE_, process.env.NODE_ENV !== "production" && t.isTracing_ !== Ir.NONE && r_(t, e)) : t.dependenciesState_ === je.UP_TO_DATE_ && (e.lowestObserverState_ = je.UP_TO_DATE_);
  }));
}
function fW(e) {
  e.lowestObserverState_ === je.UP_TO_DATE_ && (e.lowestObserverState_ = je.POSSIBLY_STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === je.UP_TO_DATE_ && (t.dependenciesState_ = je.POSSIBLY_STALE_, t.onBecomeStale_());
  }));
}
function r_(e, t) {
  if (console.log("[mobx.trace] '" + e.name_ + "' is invalidated due to a change in: '" + t.name_ + "'"), e.isTracing_ === Ir.BREAK) {
    var r = [];
    n_(c_(e), r, 1), new Function(`debugger;
/*
Tracing '` + e.name_ + `'

You are entering this break point because derivation '` + e.name_ + "' is being traced and '" + t.name_ + `' is now forcing it to update.
Just follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update
The stackframe you are looking for is at least ~6-8 stack-frames up.

` + (e instanceof Lr ? e.derivation.toString().replace(/[*]\//g, "/") : "") + `

The dependencies for this derivation are:

` + r.join(`
`) + `
*/
    `)();
  }
}
function n_(e, t, r) {
  if (t.length >= 1e3) {
    t.push("(and many more)");
    return;
  }
  t.push("" + "	".repeat(r - 1) + e.name), e.dependencies && e.dependencies.forEach(function(n) {
    return n_(n, t, r + 1);
  });
}
var Fr = /* @__PURE__ */ function() {
  function e(r, n, a, i) {
    r === void 0 && (r = process.env.NODE_ENV !== "production" ? "Reaction@" + Wr() : "Reaction"), this.name_ = void 0, this.onInvalidate_ = void 0, this.errorHandler_ = void 0, this.requiresObservable_ = void 0, this.observing_ = [], this.newObserving_ = [], this.dependenciesState_ = je.NOT_TRACKING_, this.runId_ = 0, this.unboundDepsCount_ = 0, this.flags_ = 0, this.isTracing_ = Ir.NONE, this.name_ = r, this.onInvalidate_ = n, this.errorHandler_ = a, this.requiresObservable_ = i;
  }
  var t = e.prototype;
  return t.onBecomeStale_ = function() {
    this.schedule_();
  }, t.schedule_ = function() {
    this.isScheduled || (this.isScheduled = !0, j.pendingReactions.push(this), a_());
  }, t.runReaction_ = function() {
    if (!this.isDisposed) {
      Nr(), this.isScheduled = !1;
      var n = j.trackingContext;
      if (j.trackingContext = this, Xd(this)) {
        this.isTrackPending = !0;
        try {
          this.onInvalidate_(), process.env.NODE_ENV !== "production" && this.isTrackPending && Bt() && Za({
            name: this.name_,
            type: "scheduled-reaction"
          });
        } catch (a) {
          this.reportExceptionInDerivation_(a);
        }
      }
      j.trackingContext = n, Mr();
    }
  }, t.track = function(n) {
    if (!this.isDisposed) {
      Nr();
      var a = Bt(), i;
      process.env.NODE_ENV !== "production" && a && (i = Date.now(), pr({
        name: this.name_,
        type: "reaction"
      })), this.isRunning = !0;
      var o = j.trackingContext;
      j.trackingContext = this;
      var s = qy(this, n, void 0);
      j.trackingContext = o, this.isRunning = !1, this.isTrackPending = !1, this.isDisposed && Qd(this), wl(s) && this.reportExceptionInDerivation_(s.cause), process.env.NODE_ENV !== "production" && a && vr({
        time: Date.now() - i
      }), Mr();
    }
  }, t.reportExceptionInDerivation_ = function(n) {
    var a = this;
    if (this.errorHandler_) {
      this.errorHandler_(n, this);
      return;
    }
    if (j.disableErrorBoundaries)
      throw n;
    var i = process.env.NODE_ENV !== "production" ? "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'" : "[mobx] uncaught error in '" + this + "'";
    j.suppressReactionErrors ? process.env.NODE_ENV !== "production" && console.warn("[mobx] (error in reaction '" + this.name_ + "' suppressed, fix error of causing action below)") : console.error(i, n), process.env.NODE_ENV !== "production" && Bt() && Za({
      type: "error",
      name: this.name_,
      message: i,
      error: "" + n
    }), j.globalReactionErrorHandlers.forEach(function(o) {
      return o(n, a);
    });
  }, t.dispose = function() {
    this.isDisposed || (this.isDisposed = !0, this.isRunning || (Nr(), Qd(this), Mr()));
  }, t.getDisposer_ = function(n) {
    var a = this, i = function o() {
      a.dispose(), n == null || n.removeEventListener == null || n.removeEventListener("abort", o);
    };
    return n == null || n.addEventListener == null || n.addEventListener("abort", i), i[be] = this, i;
  }, t.toString = function() {
    return "Reaction[" + this.name_ + "]";
  }, t.trace = function(n) {
    n === void 0 && (n = !1), FW(this, n);
  }, No(e, [{
    key: "isDisposed",
    get: function() {
      return fr(this.flags_, e.isDisposedMask_);
    },
    set: function(n) {
      this.flags_ = hr(this.flags_, e.isDisposedMask_, n);
    }
  }, {
    key: "isScheduled",
    get: function() {
      return fr(this.flags_, e.isScheduledMask_);
    },
    set: function(n) {
      this.flags_ = hr(this.flags_, e.isScheduledMask_, n);
    }
  }, {
    key: "isTrackPending",
    get: function() {
      return fr(this.flags_, e.isTrackPendingMask_);
    },
    set: function(n) {
      this.flags_ = hr(this.flags_, e.isTrackPendingMask_, n);
    }
  }, {
    key: "isRunning",
    get: function() {
      return fr(this.flags_, e.isRunningMask_);
    },
    set: function(n) {
      this.flags_ = hr(this.flags_, e.isRunningMask_, n);
    }
  }, {
    key: "diffValue",
    get: function() {
      return fr(this.flags_, e.diffValueMask_) ? 1 : 0;
    },
    set: function(n) {
      this.flags_ = hr(this.flags_, e.diffValueMask_, n === 1);
    }
  }]);
}();
Fr.isDisposedMask_ = 1;
Fr.isScheduledMask_ = 2;
Fr.isTrackPendingMask_ = 4;
Fr.isRunningMask_ = 8;
Fr.diffValueMask_ = 16;
var Rg = 100, Jd = function(t) {
  return t();
};
function a_() {
  j.inBatch > 0 || j.isRunningReactions || Jd(hW);
}
function hW() {
  j.isRunningReactions = !0;
  for (var e = j.pendingReactions, t = 0; e.length > 0; ) {
    ++t === Rg && (console.error(process.env.NODE_ENV !== "production" ? "Reaction doesn't converge to a stable state after " + Rg + " iterations." + (" Probably there is a cycle in the reactive function: " + e[0]) : "[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, a = r.length; n < a; n++)
      r[n].runReaction_();
  }
  j.isRunningReactions = !1;
}
var au = /* @__PURE__ */ Ra("Reaction", Fr);
function pW(e) {
  var t = Jd;
  Jd = function(n) {
    return e(function() {
      return t(n);
    });
  };
}
function Bt() {
  return process.env.NODE_ENV !== "production" && !!j.spyListeners.length;
}
function Za(e) {
  if (process.env.NODE_ENV !== "production" && j.spyListeners.length)
    for (var t = j.spyListeners, r = 0, n = t.length; r < n; r++)
      t[r](e);
}
function pr(e) {
  if (process.env.NODE_ENV !== "production") {
    var t = ta({}, e, {
      spyReportStart: !0
    });
    Za(t);
  }
}
var vW = {
  type: "report-end",
  spyReportEnd: !0
};
function vr(e) {
  process.env.NODE_ENV !== "production" && Za(e ? ta({}, e, {
    type: "report-end",
    spyReportEnd: !0
  }) : vW);
}
function gW(e) {
  return process.env.NODE_ENV === "production" ? (console.warn("[mobx.spy] Is a no-op in production builds"), function() {
  }) : (j.spyListeners.push(e), Uh(function() {
    j.spyListeners = j.spyListeners.filter(function(t) {
      return t !== e;
    });
  }));
}
var Kh = "action", mW = "action.bound", i_ = "autoAction", bW = "autoAction.bound", yW = "<unnamed action>", Zd = /* @__PURE__ */ Fs(Kh), _W = /* @__PURE__ */ Fs(mW, {
  bound: !0
}), ef = /* @__PURE__ */ Fs(i_, {
  autoAction: !0
}), wW = /* @__PURE__ */ Fs(bW, {
  autoAction: !0,
  bound: !0
});
function o_(e) {
  var t = function(n, a) {
    if (Dt(n))
      return Ja(n.name || yW, n, e);
    if (Dt(a))
      return Ja(n, a, e);
    if (Ls(a))
      return (e ? ef : Zd).decorate_20223_(n, a);
    if (Xa(a))
      return $s(n, a, e ? ef : Zd);
    if (Xa(n))
      return xn(Fs(e ? i_ : Kh, {
        name: n,
        autoAction: e
      }));
    process.env.NODE_ENV !== "production" && te("Invalid arguments for `action`");
  };
  return t;
}
var Ba = /* @__PURE__ */ o_(!1);
Object.assign(Ba, Zd);
var fs = /* @__PURE__ */ o_(!0);
Object.assign(fs, ef);
Ba.bound = /* @__PURE__ */ xn(_W);
fs.bound = /* @__PURE__ */ xn(wW);
function no(e) {
  return Dt(e) && e.isMobxAction === !0;
}
function SW(e, t) {
  var r, n, a, i;
  t === void 0 && (t = Vh), process.env.NODE_ENV !== "production" && (Dt(e) || te("Autorun expects a function as first argument"), no(e) && te("Autorun does not accept actions since actions are untrackable"));
  var o = (r = (n = t) == null ? void 0 : n.name) != null ? r : process.env.NODE_ENV !== "production" ? e.name || "Autorun@" + Wr() : "Autorun", s = !t.scheduler && !t.delay, l;
  if (s)
    l = new Fr(o, function() {
      this.track(d);
    }, t.onError, t.requiresObservable);
  else {
    var u = s_(t), c = !1;
    l = new Fr(o, function() {
      c || (c = !0, u(function() {
        c = !1, l.isDisposed || l.track(d);
      }));
    }, t.onError, t.requiresObservable);
  }
  function d() {
    e(l);
  }
  return (a = t) != null && (a = a.signal) != null && a.aborted || l.schedule_(), l.getDisposer_((i = t) == null ? void 0 : i.signal);
}
var xW = function(t) {
  return t();
};
function s_(e) {
  return e.scheduler ? e.scheduler : e.delay ? function(t) {
    return setTimeout(t, e.delay);
  } : xW;
}
function EW(e, t, r) {
  var n, a, i;
  r === void 0 && (r = Vh), process.env.NODE_ENV !== "production" && ((!Dt(e) || !Dt(t)) && te("First and second argument to reaction should be functions"), Zr(r) || te("Third argument of reactions should be an object"));
  var o = (n = r.name) != null ? n : process.env.NODE_ENV !== "production" ? "Reaction@" + Wr() : "Reaction", s = Ba(o, r.onError ? CW(r.onError, t) : t), l = !r.scheduler && !r.delay, u = s_(r), c = !0, d = !1, h, p = r.compareStructural ? ro.structural : r.equals || ro.default, v = new Fr(o, function() {
    c || l ? m() : d || (d = !0, u(m));
  }, r.onError, r.requiresObservable);
  function m() {
    if (d = !1, !v.isDisposed) {
      var g = !1, b = h;
      v.track(function() {
        var y = zy(!1, function() {
          return e(v);
        });
        g = c || !p(h, y), h = y;
      }), (c && r.fireImmediately || !c && g) && s(h, b, v), c = !1;
    }
  }
  return (a = r) != null && (a = a.signal) != null && a.aborted || v.schedule_(), v.getDisposer_((i = r) == null ? void 0 : i.signal);
}
function CW(e, t) {
  return function() {
    try {
      return t.apply(this, arguments);
    } catch (r) {
      e.call(this, r);
    }
  };
}
var DW = "onBO", OW = "onBUO";
function TW(e, t, r) {
  return u_(DW, e, t, r);
}
function l_(e, t, r) {
  return u_(OW, e, t, r);
}
function u_(e, t, r, n) {
  var a = oo(t), i = Dt(n) ? n : r, o = e + "L";
  return a[o] ? a[o].add(i) : a[o] = /* @__PURE__ */ new Set([i]), function() {
    var s = a[o];
    s && (s.delete(i), s.size === 0 && delete a[o]);
  };
}
var kW = "never", sl = "always", RW = "observed";
function PW(e) {
  e.isolateGlobalState === !0 && uW();
  var t = e.useProxies, r = e.enforceActions;
  if (t !== void 0 && (j.useProxies = t === sl ? !0 : t === kW ? !1 : typeof Proxy < "u"), t === "ifavailable" && (j.verifyProxies = !0), r !== void 0) {
    var n = r === sl ? sl : r === RW;
    j.enforceActions = n, j.allowStateChanges = !(n === !0 || n === sl);
  }
  ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach(function(a) {
    a in e && (j[a] = !!e[a]);
  }), j.allowStateReads = !j.observableRequiresReaction, process.env.NODE_ENV !== "production" && j.disableErrorBoundaries === !0 && console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled."), e.reactionScheduler && pW(e.reactionScheduler);
}
function NW(e, t, r, n) {
  process.env.NODE_ENV !== "production" && (arguments.length > 4 && te("'extendObservable' expected 2-4 arguments"), typeof e != "object" && te("'extendObservable' expects an object as first argument"), ua(e) && te("'extendObservable' should not be used on maps, use map.merge instead"), Zr(t) || te("'extendObservable' only accepts plain objects as second argument"), (io(t) || io(r)) && te("Extending an object with another observable (object) is not supported"));
  var a = oY(t);
  return vi(function() {
    var i = Mo(e, n)[be];
    nc(a).forEach(function(o) {
      i.extend_(
        o,
        a[o],
        // must pass "undefined" for { key: undefined }
        r && o in r ? r[o] : !0
      );
    });
  }), e;
}
function c_(e, t) {
  return d_(oo(e, t));
}
function d_(e) {
  var t = {
    name: e.name_
  };
  return e.observing_ && e.observing_.length > 0 && (t.dependencies = MW(e.observing_).map(d_)), t;
}
function MW(e) {
  return Array.from(new Set(e));
}
var AW = 0;
function f_() {
  this.message = "FLOW_CANCELLED";
}
f_.prototype = /* @__PURE__ */ Object.create(Error.prototype);
var Kc = /* @__PURE__ */ By("flow"), IW = /* @__PURE__ */ By("flow.bound", {
  bound: !0
}), ao = /* @__PURE__ */ Object.assign(function(t, r) {
  if (Ls(r))
    return Kc.decorate_20223_(t, r);
  if (Xa(r))
    return $s(t, r, Kc);
  process.env.NODE_ENV !== "production" && arguments.length !== 1 && te("Flow expects single argument with generator function");
  var n = t, a = n.name || "<unnamed flow>", i = function() {
    var s = this, l = arguments, u = ++AW, c = Ba(a + " - runid: " + u + " - init", n).apply(s, l), d, h = void 0, p = new Promise(function(v, m) {
      var g = 0;
      d = m;
      function b(S) {
        h = void 0;
        var _;
        try {
          _ = Ba(a + " - runid: " + u + " - yield " + g++, c.next).call(c, S);
        } catch (E) {
          return m(E);
        }
        w(_);
      }
      function y(S) {
        h = void 0;
        var _;
        try {
          _ = Ba(a + " - runid: " + u + " - yield " + g++, c.throw).call(c, S);
        } catch (E) {
          return m(E);
        }
        w(_);
      }
      function w(S) {
        if (Dt(S == null ? void 0 : S.then)) {
          S.then(w, m);
          return;
        }
        return S.done ? v(S.value) : (h = Promise.resolve(S.value), h.then(b, y));
      }
      b(void 0);
    });
    return p.cancel = Ba(a + " - runid: " + u + " - cancel", function() {
      try {
        h && Pg(h);
        var v = c.return(void 0), m = Promise.resolve(v.value);
        m.then(Ui, Ui), Pg(m), d(new f_());
      } catch (g) {
        d(g);
      }
    }), p;
  };
  return i.isMobXFlow = !0, i;
}, Kc);
ao.bound = /* @__PURE__ */ xn(IW);
function Pg(e) {
  Dt(e.cancel) && e.cancel();
}
function hs(e) {
  return (e == null ? void 0 : e.isMobXFlow) === !0;
}
function $W(e, t) {
  return e ? Ao(e) || !!e[be] || Gh(e) || au(e) || Hs(e) : !1;
}
function io(e) {
  return process.env.NODE_ENV !== "production" && arguments.length !== 1 && te("isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property"), $W(e);
}
function LW(e) {
  if (Ao(e))
    return e[be].ownKeys_();
  te(38);
}
function ll(e, t, r) {
  return e.set(t, r), r;
}
function Yi(e, t) {
  if (e == null || typeof e != "object" || e instanceof Date || !io(e))
    return e;
  if (iW(e) || Hs(e))
    return Yi(e.get(), t);
  if (t.has(e))
    return t.get(e);
  if (Ys(e)) {
    var r = ll(t, e, new Array(e.length));
    return e.forEach(function(o, s) {
      r[s] = Yi(o, t);
    }), r;
  }
  if (Ur(e)) {
    var n = ll(t, e, /* @__PURE__ */ new Set());
    return e.forEach(function(o) {
      n.add(Yi(o, t));
    }), n;
  }
  if (ua(e)) {
    var a = ll(t, e, /* @__PURE__ */ new Map());
    return e.forEach(function(o, s) {
      a.set(s, Yi(o, t));
    }), a;
  } else {
    var i = ll(t, e, {});
    return LW(e).forEach(function(o) {
      Is.propertyIsEnumerable.call(e, o) && (i[o] = Yi(e[o], t));
    }), i;
  }
}
function Zt(e, t) {
  return process.env.NODE_ENV !== "production" && t && te("toJS no longer supports options"), Yi(e, /* @__PURE__ */ new Map());
}
function FW() {
  if (process.env.NODE_ENV !== "production") {
    for (var e = !1, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    typeof r[r.length - 1] == "boolean" && (e = r.pop());
    var a = HW(r);
    if (!a)
      return te("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    a.isTracing_ === Ir.NONE && console.log("[mobx.trace] '" + a.name_ + "' tracing enabled"), a.isTracing_ = e ? Ir.BREAK : Ir.LOG;
  }
}
function HW(e) {
  switch (e.length) {
    case 0:
      return j.trackingDerivation;
    case 1:
      return oo(e[0]);
    case 2:
      return oo(e[0], e[1]);
  }
}
function Wn(e, t) {
  t === void 0 && (t = void 0), Nr();
  try {
    return e.apply(t);
  } finally {
    Mr();
  }
}
function $a(e) {
  return e[be];
}
var BW = {
  has: function(t, r) {
    return process.env.NODE_ENV !== "production" && j.trackingDerivation && Go("detect new properties using the 'in' operator. Use 'has' from 'mobx' instead."), $a(t).has_(r);
  },
  get: function(t, r) {
    return $a(t).get_(r);
  },
  set: function(t, r, n) {
    var a;
    return Xa(r) ? (process.env.NODE_ENV !== "production" && !$a(t).values_.has(r) && Go("add a new observable property through direct assignment. Use 'set' from 'mobx' instead."), (a = $a(t).set_(r, n, !0)) != null ? a : !0) : !1;
  },
  deleteProperty: function(t, r) {
    var n;
    return process.env.NODE_ENV !== "production" && Go("delete properties from an observable object. Use 'remove' from 'mobx' instead."), Xa(r) ? (n = $a(t).delete_(r, !0)) != null ? n : !0 : !1;
  },
  defineProperty: function(t, r, n) {
    var a;
    return process.env.NODE_ENV !== "production" && Go("define property on an observable object. Use 'defineProperty' from 'mobx' instead."), (a = $a(t).defineProperty_(r, n)) != null ? a : !0;
  },
  ownKeys: function(t) {
    return process.env.NODE_ENV !== "production" && j.trackingDerivation && Go("iterate keys to detect added / removed properties. Use 'keys' from 'mobx' instead."), $a(t).ownKeys_();
  },
  preventExtensions: function(t) {
    te(13);
  }
};
function jW(e, t) {
  var r, n;
  return My(), e = Mo(e, t), (n = (r = e[be]).proxy_) != null ? n : r.proxy_ = new Proxy(e, BW);
}
function Rr(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Bs(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return r.push(t), Uh(function() {
    var n = r.indexOf(t);
    n !== -1 && r.splice(n, 1);
  });
}
function Pr(e, t) {
  var r = pi();
  try {
    for (var n = [].concat(e.interceptors_ || []), a = 0, i = n.length; a < i && (t = n[a](t), t && !t.type && te(14), !!t); a++)
      ;
    return t;
  } finally {
    Kn(r);
  }
}
function Kr(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function js(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return r.push(t), Uh(function() {
    var n = r.indexOf(t);
    n !== -1 && r.splice(n, 1);
  });
}
function Xr(e, t) {
  var r = pi(), n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var a = 0, i = n.length; a < i; a++)
      n[a](t);
    Kn(r);
  }
}
function h_(e, t, r) {
  return vi(function() {
    var n, a = Mo(e, r)[be];
    process.env.NODE_ENV !== "production" && t && e[nr] && te("makeObservable second arg must be nullish when using decorators. Mixing @decorator syntax with annotations is not supported."), (n = t) != null || (t = fY(e)), nc(t).forEach(function(i) {
      return a.make_(i, t[i]);
    });
  }), e;
}
var Ng = "splice", qr = "update", YW = 1e4, WW = {
  get: function(t, r) {
    var n = t[be];
    return r === be ? n : r === "length" ? n.getArrayLength_() : typeof r == "string" && !isNaN(r) ? n.get_(parseInt(r)) : Ar(iu, r) ? iu[r] : t[r];
  },
  set: function(t, r, n) {
    var a = t[be];
    return r === "length" && a.setArrayLength_(n), typeof r == "symbol" || isNaN(r) ? t[r] = n : a.set_(parseInt(r), n), !0;
  },
  preventExtensions: function() {
    te(15);
  }
}, Xh = /* @__PURE__ */ function() {
  function e(r, n, a, i) {
    r === void 0 && (r = process.env.NODE_ENV !== "production" ? "ObservableArray@" + Wr() : "ObservableArray"), this.owned_ = void 0, this.legacyMode_ = void 0, this.atom_ = void 0, this.values_ = [], this.interceptors_ = void 0, this.changeListeners_ = void 0, this.enhancer_ = void 0, this.dehancer = void 0, this.proxy_ = void 0, this.lastKnownLength_ = 0, this.owned_ = a, this.legacyMode_ = i, this.atom_ = new Pa(r), this.enhancer_ = function(o, s) {
      return n(o, s, process.env.NODE_ENV !== "production" ? r + "[..]" : "ObservableArray[..]");
    };
  }
  var t = e.prototype;
  return t.dehanceValue_ = function(n) {
    return this.dehancer !== void 0 ? this.dehancer(n) : n;
  }, t.dehanceValues_ = function(n) {
    return this.dehancer !== void 0 && n.length > 0 ? n.map(this.dehancer) : n;
  }, t.intercept_ = function(n) {
    return Bs(this, n);
  }, t.observe_ = function(n, a) {
    return a === void 0 && (a = !1), a && n({
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: "splice",
      index: 0,
      added: this.values_.slice(),
      addedCount: this.values_.length,
      removed: [],
      removedCount: 0
    }), js(this, n);
  }, t.getArrayLength_ = function() {
    return this.atom_.reportObserved(), this.values_.length;
  }, t.setArrayLength_ = function(n) {
    (typeof n != "number" || isNaN(n) || n < 0) && te("Out of range: " + n);
    var a = this.values_.length;
    if (n !== a)
      if (n > a) {
        for (var i = new Array(n - a), o = 0; o < n - a; o++)
          i[o] = void 0;
        this.spliceWithArray_(a, 0, i);
      } else
        this.spliceWithArray_(n, a - n);
  }, t.updateArrayLength_ = function(n, a) {
    n !== this.lastKnownLength_ && te(16), this.lastKnownLength_ += a, this.legacyMode_ && a > 0 && y_(n + a + 1);
  }, t.spliceWithArray_ = function(n, a, i) {
    var o = this;
    yn(this.atom_);
    var s = this.values_.length;
    if (n === void 0 ? n = 0 : n > s ? n = s : n < 0 && (n = Math.max(0, s + n)), arguments.length === 1 ? a = s - n : a == null ? a = 0 : a = Math.max(0, Math.min(a, s - n)), i === void 0 && (i = eu), Rr(this)) {
      var l = Pr(this, {
        object: this.proxy_,
        type: Ng,
        index: n,
        removedCount: a,
        added: i
      });
      if (!l)
        return eu;
      a = l.removedCount, i = l.added;
    }
    if (i = i.length === 0 ? i : i.map(function(d) {
      return o.enhancer_(d, void 0);
    }), this.legacyMode_ || process.env.NODE_ENV !== "production") {
      var u = i.length - a;
      this.updateArrayLength_(s, u);
    }
    var c = this.spliceItemsIntoValues_(n, a, i);
    return (a !== 0 || i.length !== 0) && this.notifyArraySplice_(n, i, c), this.dehanceValues_(c);
  }, t.spliceItemsIntoValues_ = function(n, a, i) {
    if (i.length < YW) {
      var o;
      return (o = this.values_).splice.apply(o, [n, a].concat(i));
    } else {
      var s = this.values_.slice(n, n + a), l = this.values_.slice(n + a);
      this.values_.length += i.length - a;
      for (var u = 0; u < i.length; u++)
        this.values_[n + u] = i[u];
      for (var c = 0; c < l.length; c++)
        this.values_[n + i.length + c] = l[c];
      return s;
    }
  }, t.notifyArrayChildUpdate_ = function(n, a, i) {
    var o = !this.owned_ && Bt(), s = Kr(this), l = s || o ? {
      observableKind: "array",
      object: this.proxy_,
      type: qr,
      debugObjectName: this.atom_.name_,
      index: n,
      newValue: a,
      oldValue: i
    } : null;
    process.env.NODE_ENV !== "production" && o && pr(l), this.atom_.reportChanged(), s && Xr(this, l), process.env.NODE_ENV !== "production" && o && vr();
  }, t.notifyArraySplice_ = function(n, a, i) {
    var o = !this.owned_ && Bt(), s = Kr(this), l = s || o ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: Ng,
      index: n,
      removed: i,
      added: a,
      removedCount: i.length,
      addedCount: a.length
    } : null;
    process.env.NODE_ENV !== "production" && o && pr(l), this.atom_.reportChanged(), s && Xr(this, l), process.env.NODE_ENV !== "production" && o && vr();
  }, t.get_ = function(n) {
    if (this.legacyMode_ && n >= this.values_.length) {
      console.warn(process.env.NODE_ENV !== "production" ? "[mobx.array] Attempt to read an array index (" + n + ") that is out of bounds (" + this.values_.length + "). Please check length first. Out of bound indices will not be tracked by MobX" : "[mobx] Out of bounds read: " + n);
      return;
    }
    return this.atom_.reportObserved(), this.dehanceValue_(this.values_[n]);
  }, t.set_ = function(n, a) {
    var i = this.values_;
    if (this.legacyMode_ && n > i.length && te(17, n, i.length), n < i.length) {
      yn(this.atom_);
      var o = i[n];
      if (Rr(this)) {
        var s = Pr(this, {
          type: qr,
          object: this.proxy_,
          // since "this" is the real array we need to pass its proxy
          index: n,
          newValue: a
        });
        if (!s)
          return;
        a = s.newValue;
      }
      a = this.enhancer_(a, o);
      var l = a !== o;
      l && (i[n] = a, this.notifyArrayChildUpdate_(n, a, o));
    } else {
      for (var u = new Array(n + 1 - i.length), c = 0; c < u.length - 1; c++)
        u[c] = void 0;
      u[u.length - 1] = a, this.spliceWithArray_(i.length, 0, u);
    }
  }, e;
}();
function VW(e, t, r, n) {
  return r === void 0 && (r = process.env.NODE_ENV !== "production" ? "ObservableArray@" + Wr() : "ObservableArray"), n === void 0 && (n = !1), My(), vi(function() {
    var a = new Xh(r, t, n, !1);
    Iy(a.values_, be, a);
    var i = new Proxy(a.values_, WW);
    return a.proxy_ = i, e && e.length && a.spliceWithArray_(0, 0, e), i;
  });
}
var iu = {
  clear: function() {
    return this.splice(0);
  },
  replace: function(t) {
    var r = this[be];
    return r.spliceWithArray_(0, r.values_.length, t);
  },
  // Used by JSON.stringify
  toJSON: function() {
    return this.slice();
  },
  /*
   * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
   * since these functions alter the inner structure of the array, the have side effects.
   * Because the have side effects, they should not be used in computed function,
   * and for that reason the do not call dependencyState.notifyObserved
   */
  splice: function(t, r) {
    for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
      a[i - 2] = arguments[i];
    var o = this[be];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return o.spliceWithArray_(t);
      case 2:
        return o.spliceWithArray_(t, r);
    }
    return o.spliceWithArray_(t, r, a);
  },
  spliceWithArray: function(t, r, n) {
    return this[be].spliceWithArray_(t, r, n);
  },
  push: function() {
    for (var t = this[be], r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return t.spliceWithArray_(t.values_.length, 0, n), t.values_.length;
  },
  pop: function() {
    return this.splice(Math.max(this[be].values_.length - 1, 0), 1)[0];
  },
  shift: function() {
    return this.splice(0, 1)[0];
  },
  unshift: function() {
    for (var t = this[be], r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return t.spliceWithArray_(0, 0, n), t.values_.length;
  },
  reverse: function() {
    return j.trackingDerivation && te(37, "reverse"), this.replace(this.slice().reverse()), this;
  },
  sort: function() {
    j.trackingDerivation && te(37, "sort");
    var t = this.slice();
    return t.sort.apply(t, arguments), this.replace(t), this;
  },
  remove: function(t) {
    var r = this[be], n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  }
};
at("at", _r);
at("concat", _r);
at("flat", _r);
at("includes", _r);
at("indexOf", _r);
at("join", _r);
at("lastIndexOf", _r);
at("slice", _r);
at("toString", _r);
at("toLocaleString", _r);
at("toSorted", _r);
at("toSpliced", _r);
at("with", _r);
at("every", on);
at("filter", on);
at("find", on);
at("findIndex", on);
at("findLast", on);
at("findLastIndex", on);
at("flatMap", on);
at("forEach", on);
at("map", on);
at("some", on);
at("toReversed", on);
at("reduce", p_);
at("reduceRight", p_);
function at(e, t) {
  typeof Array.prototype[e] == "function" && (iu[e] = t(e));
}
function _r(e) {
  return function() {
    var t = this[be];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function on(e) {
  return function(t, r) {
    var n = this, a = this[be];
    a.atom_.reportObserved();
    var i = a.dehanceValues_(a.values_);
    return i[e](function(o, s) {
      return t.call(r, o, s, n);
    });
  };
}
function p_(e) {
  return function() {
    var t = this, r = this[be];
    r.atom_.reportObserved();
    var n = r.dehanceValues_(r.values_), a = arguments[0];
    return arguments[0] = function(i, o, s) {
      return a(i, o, s, t);
    }, n[e].apply(n, arguments);
  };
}
var UW = /* @__PURE__ */ Ra("ObservableArrayAdministration", Xh);
function Ys(e) {
  return tc(e) && UW(e[be]);
}
var GW = {}, ma = "add", ou = "delete", v_ = /* @__PURE__ */ function() {
  function e(r, n, a) {
    var i = this;
    n === void 0 && (n = Qa), a === void 0 && (a = process.env.NODE_ENV !== "production" ? "ObservableMap@" + Wr() : "ObservableMap"), this.enhancer_ = void 0, this.name_ = void 0, this[be] = GW, this.data_ = void 0, this.hasMap_ = void 0, this.keysAtom_ = void 0, this.interceptors_ = void 0, this.changeListeners_ = void 0, this.dehancer = void 0, this.enhancer_ = n, this.name_ = a, Dt(Map) || te(18), vi(function() {
      i.keysAtom_ = zh(process.env.NODE_ENV !== "production" ? i.name_ + ".keys()" : "ObservableMap.keys()"), i.data_ = /* @__PURE__ */ new Map(), i.hasMap_ = /* @__PURE__ */ new Map(), r && i.merge(r);
    });
  }
  var t = e.prototype;
  return t.has_ = function(n) {
    return this.data_.has(n);
  }, t.has = function(n) {
    var a = this;
    if (!j.trackingDerivation)
      return this.has_(n);
    var i = this.hasMap_.get(n);
    if (!i) {
      var o = i = new _a(this.has_(n), ic, process.env.NODE_ENV !== "production" ? this.name_ + "." + Gd(n) + "?" : "ObservableMap.key?", !1);
      this.hasMap_.set(n, o), l_(o, function() {
        return a.hasMap_.delete(n);
      });
    }
    return i.get();
  }, t.set = function(n, a) {
    var i = this.has_(n);
    if (Rr(this)) {
      var o = Pr(this, {
        type: i ? qr : ma,
        object: this,
        newValue: a,
        name: n
      });
      if (!o)
        return this;
      a = o.newValue;
    }
    return i ? this.updateValue_(n, a) : this.addValue_(n, a), this;
  }, t.delete = function(n) {
    var a = this;
    if (yn(this.keysAtom_), Rr(this)) {
      var i = Pr(this, {
        type: ou,
        object: this,
        name: n
      });
      if (!i)
        return !1;
    }
    if (this.has_(n)) {
      var o = Bt(), s = Kr(this), l = s || o ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: ou,
        object: this,
        oldValue: this.data_.get(n).value_,
        name: n
      } : null;
      return process.env.NODE_ENV !== "production" && o && pr(l), Wn(function() {
        var u;
        a.keysAtom_.reportChanged(), (u = a.hasMap_.get(n)) == null || u.setNewValue_(!1);
        var c = a.data_.get(n);
        c.setNewValue_(void 0), a.data_.delete(n);
      }), s && Xr(this, l), process.env.NODE_ENV !== "production" && o && vr(), !0;
    }
    return !1;
  }, t.updateValue_ = function(n, a) {
    var i = this.data_.get(n);
    if (a = i.prepareNewValue_(a), a !== j.UNCHANGED) {
      var o = Bt(), s = Kr(this), l = s || o ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: qr,
        object: this,
        oldValue: i.value_,
        name: n,
        newValue: a
      } : null;
      process.env.NODE_ENV !== "production" && o && pr(l), i.setNewValue_(a), s && Xr(this, l), process.env.NODE_ENV !== "production" && o && vr();
    }
  }, t.addValue_ = function(n, a) {
    var i = this;
    yn(this.keysAtom_), Wn(function() {
      var u, c = new _a(a, i.enhancer_, process.env.NODE_ENV !== "production" ? i.name_ + "." + Gd(n) : "ObservableMap.key", !1);
      i.data_.set(n, c), a = c.value_, (u = i.hasMap_.get(n)) == null || u.setNewValue_(!0), i.keysAtom_.reportChanged();
    });
    var o = Bt(), s = Kr(this), l = s || o ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: ma,
      object: this,
      name: n,
      newValue: a
    } : null;
    process.env.NODE_ENV !== "production" && o && pr(l), s && Xr(this, l), process.env.NODE_ENV !== "production" && o && vr();
  }, t.get = function(n) {
    return this.has(n) ? this.dehanceValue_(this.data_.get(n).get()) : this.dehanceValue_(void 0);
  }, t.dehanceValue_ = function(n) {
    return this.dehancer !== void 0 ? this.dehancer(n) : n;
  }, t.keys = function() {
    return this.keysAtom_.reportObserved(), this.data_.keys();
  }, t.values = function() {
    var n = this, a = this.keys();
    return Mg({
      next: function() {
        var o = a.next(), s = o.done, l = o.value;
        return {
          done: s,
          value: s ? void 0 : n.get(l)
        };
      }
    });
  }, t.entries = function() {
    var n = this, a = this.keys();
    return Mg({
      next: function() {
        var o = a.next(), s = o.done, l = o.value;
        return {
          done: s,
          value: s ? void 0 : [l, n.get(l)]
        };
      }
    });
  }, t[Symbol.iterator] = function() {
    return this.entries();
  }, t.forEach = function(n, a) {
    for (var i = Gi(this), o; !(o = i()).done; ) {
      var s = o.value, l = s[0], u = s[1];
      n.call(a, u, l, this);
    }
  }, t.merge = function(n) {
    var a = this;
    return ua(n) && (n = new Map(n)), Wn(function() {
      Zr(n) ? iY(n).forEach(function(i) {
        return a.set(i, n[i]);
      }) : Array.isArray(n) ? n.forEach(function(i) {
        var o = i[0], s = i[1];
        return a.set(o, s);
      }) : Po(n) ? (aY(n) || te(19, n), n.forEach(function(i, o) {
        return a.set(o, i);
      })) : n != null && te(20, n);
    }), this;
  }, t.clear = function() {
    var n = this;
    Wn(function() {
      Ky(function() {
        for (var a = Gi(n.keys()), i; !(i = a()).done; ) {
          var o = i.value;
          n.delete(o);
        }
      });
    });
  }, t.replace = function(n) {
    var a = this;
    return Wn(function() {
      for (var i = zW(n), o = /* @__PURE__ */ new Map(), s = !1, l = Gi(a.data_.keys()), u; !(u = l()).done; ) {
        var c = u.value;
        if (!i.has(c)) {
          var d = a.delete(c);
          if (d)
            s = !0;
          else {
            var h = a.data_.get(c);
            o.set(c, h);
          }
        }
      }
      for (var p = Gi(i.entries()), v; !(v = p()).done; ) {
        var m = v.value, g = m[0], b = m[1], y = a.data_.has(g);
        if (a.set(g, b), a.data_.has(g)) {
          var w = a.data_.get(g);
          o.set(g, w), y || (s = !0);
        }
      }
      if (!s)
        if (a.data_.size !== o.size)
          a.keysAtom_.reportChanged();
        else
          for (var S = a.data_.keys(), _ = o.keys(), E = S.next(), C = _.next(); !E.done; ) {
            if (E.value !== C.value) {
              a.keysAtom_.reportChanged();
              break;
            }
            E = S.next(), C = _.next();
          }
      a.data_ = o;
    }), this;
  }, t.toString = function() {
    return "[object ObservableMap]";
  }, t.toJSON = function() {
    return Array.from(this);
  }, t.observe_ = function(n, a) {
    return process.env.NODE_ENV !== "production" && a === !0 && te("`observe` doesn't support fireImmediately=true in combination with maps."), js(this, n);
  }, t.intercept_ = function(n) {
    return Bs(this, n);
  }, No(e, [{
    key: "size",
    get: function() {
      return this.keysAtom_.reportObserved(), this.data_.size;
    }
  }, {
    key: Symbol.toStringTag,
    get: function() {
      return "Map";
    }
  }]);
}(), ua = /* @__PURE__ */ Ra("ObservableMap", v_);
function Mg(e) {
  return e[Symbol.toStringTag] = "MapIterator", Zh(e);
}
function zW(e) {
  if (Po(e) || ua(e))
    return e;
  if (Array.isArray(e))
    return new Map(e);
  if (Zr(e)) {
    var t = /* @__PURE__ */ new Map();
    for (var r in e)
      t.set(r, e[r]);
    return t;
  } else
    return te(21, e);
}
var qW = {}, g_ = /* @__PURE__ */ function() {
  function e(r, n, a) {
    var i = this;
    n === void 0 && (n = Qa), a === void 0 && (a = process.env.NODE_ENV !== "production" ? "ObservableSet@" + Wr() : "ObservableSet"), this.name_ = void 0, this[be] = qW, this.data_ = /* @__PURE__ */ new Set(), this.atom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.dehancer = void 0, this.enhancer_ = void 0, this.name_ = a, Dt(Set) || te(22), this.enhancer_ = function(o, s) {
      return n(o, s, a);
    }, vi(function() {
      i.atom_ = zh(i.name_), r && i.replace(r);
    });
  }
  var t = e.prototype;
  return t.dehanceValue_ = function(n) {
    return this.dehancer !== void 0 ? this.dehancer(n) : n;
  }, t.clear = function() {
    var n = this;
    Wn(function() {
      Ky(function() {
        for (var a = Gi(n.data_.values()), i; !(i = a()).done; ) {
          var o = i.value;
          n.delete(o);
        }
      });
    });
  }, t.forEach = function(n, a) {
    for (var i = Gi(this), o; !(o = i()).done; ) {
      var s = o.value;
      n.call(a, s, s, this);
    }
  }, t.add = function(n) {
    var a = this;
    if (yn(this.atom_), Rr(this)) {
      var i = Pr(this, {
        type: ma,
        object: this,
        newValue: n
      });
      if (!i)
        return this;
    }
    if (!this.has(n)) {
      Wn(function() {
        a.data_.add(a.enhancer_(n, void 0)), a.atom_.reportChanged();
      });
      var o = process.env.NODE_ENV !== "production" && Bt(), s = Kr(this), l = s || o ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: ma,
        object: this,
        newValue: n
      } : null;
      o && process.env.NODE_ENV !== "production" && pr(l), s && Xr(this, l), o && process.env.NODE_ENV !== "production" && vr();
    }
    return this;
  }, t.delete = function(n) {
    var a = this;
    if (Rr(this)) {
      var i = Pr(this, {
        type: ou,
        object: this,
        oldValue: n
      });
      if (!i)
        return !1;
    }
    if (this.has(n)) {
      var o = process.env.NODE_ENV !== "production" && Bt(), s = Kr(this), l = s || o ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: ou,
        object: this,
        oldValue: n
      } : null;
      return o && process.env.NODE_ENV !== "production" && pr(l), Wn(function() {
        a.atom_.reportChanged(), a.data_.delete(n);
      }), s && Xr(this, l), o && process.env.NODE_ENV !== "production" && vr(), !0;
    }
    return !1;
  }, t.has = function(n) {
    return this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(n));
  }, t.entries = function() {
    var n = 0, a = Array.from(this.keys()), i = Array.from(this.values());
    return Ag({
      next: function() {
        var s = n;
        return n += 1, s < i.length ? {
          value: [a[s], i[s]],
          done: !1
        } : {
          value: void 0,
          done: !0
        };
      }
    });
  }, t.keys = function() {
    return this.values();
  }, t.values = function() {
    this.atom_.reportObserved();
    var n = this, a = 0, i = Array.from(this.data_.values());
    return Ag({
      next: function() {
        return a < i.length ? {
          value: n.dehanceValue_(i[a++]),
          done: !1
        } : {
          value: void 0,
          done: !0
        };
      }
    });
  }, t.intersection = function(n) {
    if (Yn(n) && !Ur(n))
      return n.intersection(this);
    var a = new Set(this);
    return a.intersection(n);
  }, t.union = function(n) {
    if (Yn(n) && !Ur(n))
      return n.union(this);
    var a = new Set(this);
    return a.union(n);
  }, t.difference = function(n) {
    return new Set(this).difference(n);
  }, t.symmetricDifference = function(n) {
    if (Yn(n) && !Ur(n))
      return n.symmetricDifference(this);
    var a = new Set(this);
    return a.symmetricDifference(n);
  }, t.isSubsetOf = function(n) {
    return new Set(this).isSubsetOf(n);
  }, t.isSupersetOf = function(n) {
    return new Set(this).isSupersetOf(n);
  }, t.isDisjointFrom = function(n) {
    if (Yn(n) && !Ur(n))
      return n.isDisjointFrom(this);
    var a = new Set(this);
    return a.isDisjointFrom(n);
  }, t.replace = function(n) {
    var a = this;
    return Ur(n) && (n = new Set(n)), Wn(function() {
      Array.isArray(n) ? (a.clear(), n.forEach(function(i) {
        return a.add(i);
      })) : Yn(n) ? (a.clear(), n.forEach(function(i) {
        return a.add(i);
      })) : n != null && te("Cannot initialize set from " + n);
    }), this;
  }, t.observe_ = function(n, a) {
    return process.env.NODE_ENV !== "production" && a === !0 && te("`observe` doesn't support fireImmediately=true in combination with sets."), js(this, n);
  }, t.intercept_ = function(n) {
    return Bs(this, n);
  }, t.toJSON = function() {
    return Array.from(this);
  }, t.toString = function() {
    return "[object ObservableSet]";
  }, t[Symbol.iterator] = function() {
    return this.values();
  }, No(e, [{
    key: "size",
    get: function() {
      return this.atom_.reportObserved(), this.data_.size;
    }
  }, {
    key: Symbol.toStringTag,
    get: function() {
      return "Set";
    }
  }]);
}(), Ur = /* @__PURE__ */ Ra("ObservableSet", g_);
function Ag(e) {
  return e[Symbol.toStringTag] = "SetIterator", Zh(e);
}
var Ig = /* @__PURE__ */ Object.create(null), $g = "remove", tf = /* @__PURE__ */ function() {
  function e(r, n, a, i) {
    n === void 0 && (n = /* @__PURE__ */ new Map()), i === void 0 && (i = LY), this.target_ = void 0, this.values_ = void 0, this.name_ = void 0, this.defaultAnnotation_ = void 0, this.keysAtom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.proxy_ = void 0, this.isPlainObject_ = void 0, this.appliedAnnotations_ = void 0, this.pendingKeys_ = void 0, this.target_ = r, this.values_ = n, this.name_ = a, this.defaultAnnotation_ = i, this.keysAtom_ = new Pa(process.env.NODE_ENV !== "production" ? this.name_ + ".keys" : "ObservableObject.keys"), this.isPlainObject_ = Zr(this.target_), process.env.NODE_ENV !== "production" && !w_(this.defaultAnnotation_) && te("defaultAnnotation must be valid annotation"), process.env.NODE_ENV !== "production" && (this.appliedAnnotations_ = {});
  }
  var t = e.prototype;
  return t.getObservablePropValue_ = function(n) {
    return this.values_.get(n).get();
  }, t.setObservablePropValue_ = function(n, a) {
    var i = this.values_.get(n);
    if (i instanceof Lr)
      return i.set(a), !0;
    if (Rr(this)) {
      var o = Pr(this, {
        type: qr,
        object: this.proxy_ || this.target_,
        name: n,
        newValue: a
      });
      if (!o)
        return null;
      a = o.newValue;
    }
    if (a = i.prepareNewValue_(a), a !== j.UNCHANGED) {
      var s = Kr(this), l = process.env.NODE_ENV !== "production" && Bt(), u = s || l ? {
        type: qr,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: i.value_,
        name: n,
        newValue: a
      } : null;
      process.env.NODE_ENV !== "production" && l && pr(u), i.setNewValue_(a), s && Xr(this, u), process.env.NODE_ENV !== "production" && l && vr();
    }
    return !0;
  }, t.get_ = function(n) {
    return j.trackingDerivation && !Ar(this.target_, n) && this.has_(n), this.target_[n];
  }, t.set_ = function(n, a, i) {
    return i === void 0 && (i = !1), Ar(this.target_, n) ? this.values_.has(n) ? this.setObservablePropValue_(n, a) : i ? Reflect.set(this.target_, n, a) : (this.target_[n] = a, !0) : this.extend_(n, {
      value: a,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }, this.defaultAnnotation_, i);
  }, t.has_ = function(n) {
    if (!j.trackingDerivation)
      return n in this.target_;
    this.pendingKeys_ || (this.pendingKeys_ = /* @__PURE__ */ new Map());
    var a = this.pendingKeys_.get(n);
    return a || (a = new _a(n in this.target_, ic, process.env.NODE_ENV !== "production" ? this.name_ + "." + Gd(n) + "?" : "ObservableObject.key?", !1), this.pendingKeys_.set(n, a)), a.get();
  }, t.make_ = function(n, a) {
    if (a === !0 && (a = this.defaultAnnotation_), a !== !1) {
      if (Hg(this, a, n), !(n in this.target_)) {
        var i;
        if ((i = this.target_[nr]) != null && i[n])
          return;
        te(1, a.annotationType_, this.name_ + "." + n.toString());
      }
      for (var o = this.target_; o && o !== Is; ) {
        var s = Zl(o, n);
        if (s) {
          var l = a.make_(this, n, s, o);
          if (l === 0)
            return;
          if (l === 1)
            break;
        }
        o = Object.getPrototypeOf(o);
      }
      Fg(this, a, n);
    }
  }, t.extend_ = function(n, a, i, o) {
    if (o === void 0 && (o = !1), i === !0 && (i = this.defaultAnnotation_), i === !1)
      return this.defineProperty_(n, a, o);
    Hg(this, i, n);
    var s = i.extend_(this, n, a, o);
    return s && Fg(this, i, n), s;
  }, t.defineProperty_ = function(n, a, i) {
    i === void 0 && (i = !1), yn(this.keysAtom_);
    try {
      Nr();
      var o = this.delete_(n);
      if (!o)
        return o;
      if (Rr(this)) {
        var s = Pr(this, {
          object: this.proxy_ || this.target_,
          name: n,
          type: ma,
          newValue: a.value
        });
        if (!s)
          return null;
        var l = s.newValue;
        a.value !== l && (a = ta({}, a, {
          value: l
        }));
      }
      if (i) {
        if (!Reflect.defineProperty(this.target_, n, a))
          return !1;
      } else
        Sn(this.target_, n, a);
      this.notifyPropertyAddition_(n, a.value);
    } finally {
      Mr();
    }
    return !0;
  }, t.defineObservableProperty_ = function(n, a, i, o) {
    o === void 0 && (o = !1), yn(this.keysAtom_);
    try {
      Nr();
      var s = this.delete_(n);
      if (!s)
        return s;
      if (Rr(this)) {
        var l = Pr(this, {
          object: this.proxy_ || this.target_,
          name: n,
          type: ma,
          newValue: a
        });
        if (!l)
          return null;
        a = l.newValue;
      }
      var u = Lg(n), c = {
        configurable: j.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !0,
        get: u.get,
        set: u.set
      };
      if (o) {
        if (!Reflect.defineProperty(this.target_, n, c))
          return !1;
      } else
        Sn(this.target_, n, c);
      var d = new _a(a, i, process.env.NODE_ENV !== "production" ? this.name_ + "." + n.toString() : "ObservableObject.key", !1);
      this.values_.set(n, d), this.notifyPropertyAddition_(n, d.value_);
    } finally {
      Mr();
    }
    return !0;
  }, t.defineComputedProperty_ = function(n, a, i) {
    i === void 0 && (i = !1), yn(this.keysAtom_);
    try {
      Nr();
      var o = this.delete_(n);
      if (!o)
        return o;
      if (Rr(this)) {
        var s = Pr(this, {
          object: this.proxy_ || this.target_,
          name: n,
          type: ma,
          newValue: void 0
        });
        if (!s)
          return null;
      }
      a.name || (a.name = process.env.NODE_ENV !== "production" ? this.name_ + "." + n.toString() : "ObservableObject.key"), a.context = this.proxy_ || this.target_;
      var l = Lg(n), u = {
        configurable: j.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !1,
        get: l.get,
        set: l.set
      };
      if (i) {
        if (!Reflect.defineProperty(this.target_, n, u))
          return !1;
      } else
        Sn(this.target_, n, u);
      this.values_.set(n, new Lr(a)), this.notifyPropertyAddition_(n, void 0);
    } finally {
      Mr();
    }
    return !0;
  }, t.delete_ = function(n, a) {
    if (a === void 0 && (a = !1), yn(this.keysAtom_), !Ar(this.target_, n))
      return !0;
    if (Rr(this)) {
      var i = Pr(this, {
        object: this.proxy_ || this.target_,
        name: n,
        type: $g
      });
      if (!i)
        return null;
    }
    try {
      var o;
      Nr();
      var s = Kr(this), l = process.env.NODE_ENV !== "production" && Bt(), u = this.values_.get(n), c = void 0;
      if (!u && (s || l)) {
        var d;
        c = (d = Zl(this.target_, n)) == null ? void 0 : d.value;
      }
      if (a) {
        if (!Reflect.deleteProperty(this.target_, n))
          return !1;
      } else
        delete this.target_[n];
      if (process.env.NODE_ENV !== "production" && delete this.appliedAnnotations_[n], u && (this.values_.delete(n), u instanceof _a && (c = u.value_), t_(u)), this.keysAtom_.reportChanged(), (o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(n in this.target_), s || l) {
        var h = {
          type: $g,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: c,
          name: n
        };
        process.env.NODE_ENV !== "production" && l && pr(h), s && Xr(this, h), process.env.NODE_ENV !== "production" && l && vr();
      }
    } finally {
      Mr();
    }
    return !0;
  }, t.observe_ = function(n, a) {
    return process.env.NODE_ENV !== "production" && a === !0 && te("`observe` doesn't support the fire immediately property for observable objects."), js(this, n);
  }, t.intercept_ = function(n) {
    return Bs(this, n);
  }, t.notifyPropertyAddition_ = function(n, a) {
    var i, o = Kr(this), s = process.env.NODE_ENV !== "production" && Bt();
    if (o || s) {
      var l = o || s ? {
        type: ma,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: n,
        newValue: a
      } : null;
      process.env.NODE_ENV !== "production" && s && pr(l), o && Xr(this, l), process.env.NODE_ENV !== "production" && s && vr();
    }
    (i = this.pendingKeys_) == null || (i = i.get(n)) == null || i.set(!0), this.keysAtom_.reportChanged();
  }, t.ownKeys_ = function() {
    return this.keysAtom_.reportObserved(), nc(this.target_);
  }, t.keys_ = function() {
    return this.keysAtom_.reportObserved(), Object.keys(this.target_);
  }, e;
}();
function Mo(e, t) {
  var r;
  if (process.env.NODE_ENV !== "production" && t && Ao(e) && te("Options can't be provided for already observable objects."), Ar(e, be))
    return process.env.NODE_ENV !== "production" && !(__(e) instanceof tf) && te("Cannot convert '" + su(e) + `' into observable object:
The target is already observable of different type.
Extending builtins is not supported.`), e;
  process.env.NODE_ENV !== "production" && !Object.isExtensible(e) && te("Cannot make the designated object observable; it is not extensible");
  var n = (r = t == null ? void 0 : t.name) != null ? r : process.env.NODE_ENV !== "production" ? (Zr(e) ? "ObservableObject" : e.constructor.name) + "@" + Wr() : "ObservableObject", a = new tf(e, /* @__PURE__ */ new Map(), String(n), qY(t));
  return rc(e, be, a), e;
}
var KW = /* @__PURE__ */ Ra("ObservableObjectAdministration", tf);
function Lg(e) {
  return Ig[e] || (Ig[e] = {
    get: function() {
      return this[be].getObservablePropValue_(e);
    },
    set: function(r) {
      return this[be].setObservablePropValue_(e, r);
    }
  });
}
function Ao(e) {
  return tc(e) ? KW(e[be]) : !1;
}
function Fg(e, t, r) {
  var n;
  process.env.NODE_ENV !== "production" && (e.appliedAnnotations_[r] = t), (n = e.target_[nr]) == null || delete n[r];
}
function Hg(e, t, r) {
  if (process.env.NODE_ENV !== "production" && !w_(t) && te("Cannot annotate '" + e.name_ + "." + r.toString() + "': Invalid annotation."), process.env.NODE_ENV !== "production" && !tu(t) && Ar(e.appliedAnnotations_, r)) {
    var n = e.name_ + "." + r.toString(), a = e.appliedAnnotations_[r].annotationType_, i = t.annotationType_;
    te("Cannot apply '" + i + "' to '" + n + "':" + (`
The field is already annotated with '` + a + "'.") + `
Re-annotating fields is not allowed.
Use 'override' annotation for methods overridden by subclass.`);
  }
}
var XW = /* @__PURE__ */ b_(0), QW = /* @__PURE__ */ function() {
  var e = !1, t = {};
  return Object.defineProperty(t, "0", {
    set: function() {
      e = !0;
    }
  }), Object.create(t)[0] = 1, e === !1;
}(), Xc = 0, m_ = function() {
};
function JW(e, t) {
  Object.setPrototypeOf ? Object.setPrototypeOf(e.prototype, t) : e.prototype.__proto__ !== void 0 ? e.prototype.__proto__ = t : e.prototype = t;
}
JW(m_, Array.prototype);
var Qh = /* @__PURE__ */ function(e) {
  function t(n, a, i, o) {
    var s;
    return i === void 0 && (i = process.env.NODE_ENV !== "production" ? "ObservableArray@" + Wr() : "ObservableArray"), o === void 0 && (o = !1), s = e.call(this) || this, vi(function() {
      var l = new Xh(i, a, o, !0);
      l.proxy_ = s, Iy(s, be, l), n && n.length && s.spliceWithArray(0, 0, n), QW && Object.defineProperty(s, "0", XW);
    }), s;
  }
  Fy(t, e);
  var r = t.prototype;
  return r.concat = function() {
    this[be].atom_.reportObserved();
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return Array.prototype.concat.apply(
      this.slice(),
      //@ts-ignore
      i.map(function(s) {
        return Ys(s) ? s.slice() : s;
      })
    );
  }, r[Symbol.iterator] = function() {
    var n = this, a = 0;
    return Zh({
      next: function() {
        return a < n.length ? {
          value: n[a++],
          done: !1
        } : {
          done: !0,
          value: void 0
        };
      }
    });
  }, No(t, [{
    key: "length",
    get: function() {
      return this[be].getArrayLength_();
    },
    set: function(a) {
      this[be].setArrayLength_(a);
    }
  }, {
    key: Symbol.toStringTag,
    get: function() {
      return "Array";
    }
  }]);
}(m_);
Object.entries(iu).forEach(function(e) {
  var t = e[0], r = e[1];
  t !== "concat" && rc(Qh.prototype, t, r);
});
function b_(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function() {
      return this[be].get_(e);
    },
    set: function(r) {
      this[be].set_(e, r);
    }
  };
}
function ZW(e) {
  Sn(Qh.prototype, "" + e, b_(e));
}
function y_(e) {
  if (e > Xc) {
    for (var t = Xc; t < e + 100; t++)
      ZW(t);
    Xc = e;
  }
}
y_(1e3);
function e5(e, t, r) {
  return new Qh(e, t, r);
}
function oo(e, t) {
  if (typeof e == "object" && e !== null) {
    if (Ys(e))
      return t !== void 0 && te(23), e[be].atom_;
    if (Ur(e))
      return e.atom_;
    if (ua(e)) {
      if (t === void 0)
        return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return r || te(25, t, su(e)), r;
    }
    if (Ao(e)) {
      if (!t)
        return te(26);
      var n = e[be].values_.get(t);
      return n || te(27, t, su(e)), n;
    }
    if (Gh(e) || Hs(e) || au(e))
      return e;
  } else if (Dt(e) && au(e[be]))
    return e[be];
  te(28);
}
function __(e, t) {
  if (e || te(29), Gh(e) || Hs(e) || au(e) || ua(e) || Ur(e))
    return e;
  if (e[be])
    return e[be];
  te(24, e);
}
function su(e, t) {
  var r;
  if (t !== void 0)
    r = oo(e, t);
  else {
    if (no(e))
      return e.name;
    Ao(e) || ua(e) || Ur(e) ? r = __(e) : r = oo(e);
  }
  return r.name_;
}
function vi(e) {
  var t = pi(), r = lc(!0);
  Nr();
  try {
    return e();
  } finally {
    Mr(), uc(r), Kn(t);
  }
}
var Bg = Is.toString;
function Jh(e, t, r) {
  return r === void 0 && (r = -1), rf(e, t, r);
}
function rf(e, t, r, n, a) {
  if (e === t)
    return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null)
    return !1;
  if (e !== e)
    return t !== t;
  var i = typeof e;
  if (i !== "function" && i !== "object" && typeof t != "object")
    return !1;
  var o = Bg.call(e);
  if (o !== Bg.call(t))
    return !1;
  switch (o) {
    case "[object RegExp]":
    case "[object String]":
      return "" + e == "" + t;
    case "[object Number]":
      return +e != +e ? +t != +t : +e == 0 ? 1 / +e === 1 / t : +e == +t;
    case "[object Date]":
    case "[object Boolean]":
      return +e == +t;
    case "[object Symbol]":
      return typeof Symbol < "u" && Symbol.valueOf.call(e) === Symbol.valueOf.call(t);
    case "[object Map]":
    case "[object Set]":
      r >= 0 && r++;
      break;
  }
  e = jg(e), t = jg(t);
  var s = o === "[object Array]";
  if (!s) {
    if (typeof e != "object" || typeof t != "object")
      return !1;
    var l = e.constructor, u = t.constructor;
    if (l !== u && !(Dt(l) && l instanceof l && Dt(u) && u instanceof u) && "constructor" in e && "constructor" in t)
      return !1;
  }
  if (r === 0)
    return !1;
  r < 0 && (r = -1), n = n || [], a = a || [];
  for (var c = n.length; c--; )
    if (n[c] === e)
      return a[c] === t;
  if (n.push(e), a.push(t), s) {
    if (c = e.length, c !== t.length)
      return !1;
    for (; c--; )
      if (!rf(e[c], t[c], r - 1, n, a))
        return !1;
  } else {
    var d = Object.keys(e), h;
    if (c = d.length, Object.keys(t).length !== c)
      return !1;
    for (; c--; )
      if (h = d[c], !(Ar(t, h) && rf(e[h], t[h], r - 1, n, a)))
        return !1;
  }
  return n.pop(), a.pop(), !0;
}
function jg(e) {
  return Ys(e) ? e.slice() : Po(e) || ua(e) || Yn(e) || Ur(e) ? Array.from(e.entries()) : e;
}
var Yg, t5 = ((Yg = ec().Iterator) == null ? void 0 : Yg.prototype) || {};
function Zh(e) {
  return e[Symbol.iterator] = r5, Object.assign(Object.create(t5), e);
}
function r5() {
  return this;
}
function w_(e) {
  return (
    // Can be function
    e instanceof Object && typeof e.annotationType_ == "string" && Dt(e.make_) && Dt(e.extend_)
  );
}
["Symbol", "Map", "Set"].forEach(function(e) {
  var t = ec();
  typeof t[e] > "u" && te("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
  spy: gW,
  extras: {
    getDebugName: su
  },
  $mobx: be
});
var En = function(t, r) {
  var n = f.useRef(t), a = f.useState(t), i = ve(a, 2), o = i[0], s = i[1], l = function(c) {
    var d = r ? U(U({}, n.current), c) : c;
    n.current = d, s(d);
  };
  return [o, n, l];
}, Qi = {
  baseURL: window.location.origin,
  // url стенда
  listBlockLength: 1e3,
  // длина блока списков для пагинации
  simpleList: !1
  // с сервера будет приходить простой array со строковыми значениями
};
function S_(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: n5 } = Object.prototype, { getPrototypeOf: ep } = Object, cc = /* @__PURE__ */ ((e) => (t) => {
  const r = n5.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), sn = (e) => (e = e.toLowerCase(), (t) => cc(t) === e), dc = (e) => (t) => typeof t === e, { isArray: Io } = Array, ps = dc("undefined");
function a5(e) {
  return e !== null && !ps(e) && e.constructor !== null && !ps(e.constructor) && gr(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const x_ = sn("ArrayBuffer");
function i5(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && x_(e.buffer), t;
}
const o5 = dc("string"), gr = dc("function"), E_ = dc("number"), fc = (e) => e !== null && typeof e == "object", s5 = (e) => e === !0 || e === !1, El = (e) => {
  if (cc(e) !== "object")
    return !1;
  const t = ep(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, l5 = sn("Date"), u5 = sn("File"), c5 = sn("Blob"), d5 = sn("FileList"), f5 = (e) => fc(e) && gr(e.pipe), h5 = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || gr(e.append) && ((t = cc(e)) === "formdata" || // detect form-data instance
  t === "object" && gr(e.toString) && e.toString() === "[object FormData]"));
}, p5 = sn("URLSearchParams"), [v5, g5, m5, b5] = ["ReadableStream", "Request", "Response", "Headers"].map(sn), y5 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ws(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, a;
  if (typeof e != "object" && (e = [e]), Io(e))
    for (n = 0, a = e.length; n < a; n++)
      t.call(null, e[n], n, e);
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let s;
    for (n = 0; n < o; n++)
      s = i[n], t.call(null, e[s], s, e);
  }
}
function C_(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, a;
  for (; n-- > 0; )
    if (a = r[n], t === a.toLowerCase())
      return a;
  return null;
}
const ja = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, D_ = (e) => !ps(e) && e !== ja;
function nf() {
  const { caseless: e } = D_(this) && this || {}, t = {}, r = (n, a) => {
    const i = e && C_(t, a) || a;
    El(t[i]) && El(n) ? t[i] = nf(t[i], n) : El(n) ? t[i] = nf({}, n) : Io(n) ? t[i] = n.slice() : t[i] = n;
  };
  for (let n = 0, a = arguments.length; n < a; n++)
    arguments[n] && Ws(arguments[n], r);
  return t;
}
const _5 = (e, t, r, { allOwnKeys: n } = {}) => (Ws(t, (a, i) => {
  r && gr(a) ? e[i] = S_(a, r) : e[i] = a;
}, { allOwnKeys: n }), e), w5 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), S5 = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, x5 = (e, t, r, n) => {
  let a, i, o;
  const s = {};
  if (t = t || {}, e == null) return t;
  do {
    for (a = Object.getOwnPropertyNames(e), i = a.length; i-- > 0; )
      o = a[i], (!n || n(o, e, t)) && !s[o] && (t[o] = e[o], s[o] = !0);
    e = r !== !1 && ep(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, E5 = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, C5 = (e) => {
  if (!e) return null;
  if (Io(e)) return e;
  let t = e.length;
  if (!E_(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, D5 = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ep(Uint8Array)), O5 = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = n.next()) && !a.done; ) {
    const i = a.value;
    t.call(e, i[0], i[1]);
  }
}, T5 = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, k5 = sn("HTMLFormElement"), R5 = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, a) {
    return n.toUpperCase() + a;
  }
), Wg = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), P5 = sn("RegExp"), O_ = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Ws(r, (a, i) => {
    let o;
    (o = t(a, i, e)) !== !1 && (n[i] = o || a);
  }), Object.defineProperties(e, n);
}, N5 = (e) => {
  O_(e, (t, r) => {
    if (gr(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (gr(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, M5 = (e, t) => {
  const r = {}, n = (a) => {
    a.forEach((i) => {
      r[i] = !0;
    });
  };
  return Io(e) ? n(e) : n(String(e).split(t)), r;
}, A5 = () => {
}, I5 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, Qc = "abcdefghijklmnopqrstuvwxyz", Vg = "0123456789", T_ = {
  DIGIT: Vg,
  ALPHA: Qc,
  ALPHA_DIGIT: Qc + Qc.toUpperCase() + Vg
}, $5 = (e = 16, t = T_.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function L5(e) {
  return !!(e && gr(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const F5 = (e) => {
  const t = new Array(10), r = (n, a) => {
    if (fc(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[a] = n;
        const i = Io(n) ? [] : {};
        return Ws(n, (o, s) => {
          const l = r(o, a + 1);
          !ps(l) && (i[s] = l);
        }), t[a] = void 0, i;
      }
    }
    return n;
  };
  return r(e, 0);
}, H5 = sn("AsyncFunction"), B5 = (e) => e && (fc(e) || gr(e)) && gr(e.then) && gr(e.catch), k_ = ((e, t) => e ? setImmediate : t ? ((r, n) => (ja.addEventListener("message", ({ source: a, data: i }) => {
  a === ja && i === r && n.length && n.shift()();
}, !1), (a) => {
  n.push(a), ja.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  gr(ja.postMessage)
), j5 = typeof queueMicrotask < "u" ? queueMicrotask.bind(ja) : typeof process < "u" && process.nextTick || k_, k = {
  isArray: Io,
  isArrayBuffer: x_,
  isBuffer: a5,
  isFormData: h5,
  isArrayBufferView: i5,
  isString: o5,
  isNumber: E_,
  isBoolean: s5,
  isObject: fc,
  isPlainObject: El,
  isReadableStream: v5,
  isRequest: g5,
  isResponse: m5,
  isHeaders: b5,
  isUndefined: ps,
  isDate: l5,
  isFile: u5,
  isBlob: c5,
  isRegExp: P5,
  isFunction: gr,
  isStream: f5,
  isURLSearchParams: p5,
  isTypedArray: D5,
  isFileList: d5,
  forEach: Ws,
  merge: nf,
  extend: _5,
  trim: y5,
  stripBOM: w5,
  inherits: S5,
  toFlatObject: x5,
  kindOf: cc,
  kindOfTest: sn,
  endsWith: E5,
  toArray: C5,
  forEachEntry: O5,
  matchAll: T5,
  isHTMLForm: k5,
  hasOwnProperty: Wg,
  hasOwnProp: Wg,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: O_,
  freezeMethods: N5,
  toObjectSet: M5,
  toCamelCase: R5,
  noop: A5,
  toFiniteNumber: I5,
  findKey: C_,
  global: ja,
  isContextDefined: D_,
  ALPHABET: T_,
  generateString: $5,
  isSpecCompliantForm: L5,
  toJSONObject: F5,
  isAsyncFn: H5,
  isThenable: B5,
  setImmediate: k_,
  asap: j5
};
function Se(e, t, r, n, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), a && (this.response = a, this.status = a.status ? a.status : null);
}
k.inherits(Se, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: k.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const R_ = Se.prototype, P_ = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  P_[e] = { value: e };
});
Object.defineProperties(Se, P_);
Object.defineProperty(R_, "isAxiosError", { value: !0 });
Se.from = (e, t, r, n, a, i) => {
  const o = Object.create(R_);
  return k.toFlatObject(e, o, function(l) {
    return l !== Error.prototype;
  }, (s) => s !== "isAxiosError"), Se.call(o, e.message, t, r, n, a), o.cause = e, o.name = e.name, i && Object.assign(o, i), o;
};
const Y5 = null;
function af(e) {
  return k.isPlainObject(e) || k.isArray(e);
}
function N_(e) {
  return k.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ug(e, t, r) {
  return e ? e.concat(t).map(function(a, i) {
    return a = N_(a), !r && i ? "[" + a + "]" : a;
  }).join(r ? "." : "") : t;
}
function W5(e) {
  return k.isArray(e) && !e.some(af);
}
const V5 = k.toFlatObject(k, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function hc(e, t, r) {
  if (!k.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = k.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, g) {
    return !k.isUndefined(g[m]);
  });
  const n = r.metaTokens, a = r.visitor || c, i = r.dots, o = r.indexes, l = (r.Blob || typeof Blob < "u" && Blob) && k.isSpecCompliantForm(t);
  if (!k.isFunction(a))
    throw new TypeError("visitor must be a function");
  function u(v) {
    if (v === null) return "";
    if (k.isDate(v))
      return v.toISOString();
    if (!l && k.isBlob(v))
      throw new Se("Blob is not supported. Use a Buffer instead.");
    return k.isArrayBuffer(v) || k.isTypedArray(v) ? l && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v;
  }
  function c(v, m, g) {
    let b = v;
    if (v && !g && typeof v == "object") {
      if (k.endsWith(m, "{}"))
        m = n ? m : m.slice(0, -2), v = JSON.stringify(v);
      else if (k.isArray(v) && W5(v) || (k.isFileList(v) || k.endsWith(m, "[]")) && (b = k.toArray(v)))
        return m = N_(m), b.forEach(function(w, S) {
          !(k.isUndefined(w) || w === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Ug([m], S, i) : o === null ? m : m + "[]",
            u(w)
          );
        }), !1;
    }
    return af(v) ? !0 : (t.append(Ug(g, m, i), u(v)), !1);
  }
  const d = [], h = Object.assign(V5, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: af
  });
  function p(v, m) {
    if (!k.isUndefined(v)) {
      if (d.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      d.push(v), k.forEach(v, function(b, y) {
        (!(k.isUndefined(b) || b === null) && a.call(
          t,
          b,
          k.isString(y) ? y.trim() : y,
          m,
          h
        )) === !0 && p(b, m ? m.concat(y) : [y]);
      }), d.pop();
    }
  }
  if (!k.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), t;
}
function Gg(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function tp(e, t) {
  this._pairs = [], e && hc(e, this, t);
}
const M_ = tp.prototype;
M_.append = function(t, r) {
  this._pairs.push([t, r]);
};
M_.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Gg);
  } : Gg;
  return this._pairs.map(function(a) {
    return r(a[0]) + "=" + r(a[1]);
  }, "").join("&");
};
function U5(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function A_(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || U5, a = r && r.serialize;
  let i;
  if (a ? i = a(t, r) : i = k.isURLSearchParams(t) ? t.toString() : new tp(t, r).toString(n), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class zg {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    k.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const I_ = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, G5 = typeof URLSearchParams < "u" ? URLSearchParams : tp, z5 = typeof FormData < "u" ? FormData : null, q5 = typeof Blob < "u" ? Blob : null, K5 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: G5,
    FormData: z5,
    Blob: q5
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, rp = typeof window < "u" && typeof document < "u", of = typeof navigator == "object" && navigator || void 0, X5 = rp && (!of || ["ReactNative", "NativeScript", "NS"].indexOf(of.product) < 0), Q5 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", J5 = rp && window.location.href || "http://localhost", Z5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: rp,
  hasStandardBrowserEnv: X5,
  hasStandardBrowserWebWorkerEnv: Q5,
  navigator: of,
  origin: J5
}, Symbol.toStringTag, { value: "Module" })), ar = {
  ...Z5,
  ...K5
};
function eV(e, t) {
  return hc(e, new ar.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, a, i) {
      return ar.isNode && k.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function tV(e) {
  return k.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function rV(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const a = r.length;
  let i;
  for (n = 0; n < a; n++)
    i = r[n], t[i] = e[i];
  return t;
}
function $_(e) {
  function t(r, n, a, i) {
    let o = r[i++];
    if (o === "__proto__") return !0;
    const s = Number.isFinite(+o), l = i >= r.length;
    return o = !o && k.isArray(a) ? a.length : o, l ? (k.hasOwnProp(a, o) ? a[o] = [a[o], n] : a[o] = n, !s) : ((!a[o] || !k.isObject(a[o])) && (a[o] = []), t(r, n, a[o], i) && k.isArray(a[o]) && (a[o] = rV(a[o])), !s);
  }
  if (k.isFormData(e) && k.isFunction(e.entries)) {
    const r = {};
    return k.forEachEntry(e, (n, a) => {
      t(tV(n), a, r, 0);
    }), r;
  }
  return null;
}
function nV(e, t, r) {
  if (k.isString(e))
    try {
      return (t || JSON.parse)(e), k.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (0, JSON.stringify)(e);
}
const Vs = {
  transitional: I_,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", a = n.indexOf("application/json") > -1, i = k.isObject(t);
    if (i && k.isHTMLForm(t) && (t = new FormData(t)), k.isFormData(t))
      return a ? JSON.stringify($_(t)) : t;
    if (k.isArrayBuffer(t) || k.isBuffer(t) || k.isStream(t) || k.isFile(t) || k.isBlob(t) || k.isReadableStream(t))
      return t;
    if (k.isArrayBufferView(t))
      return t.buffer;
    if (k.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return eV(t, this.formSerializer).toString();
      if ((s = k.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return hc(
          s ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return i || a ? (r.setContentType("application/json", !1), nV(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Vs.transitional, n = r && r.forcedJSONParsing, a = this.responseType === "json";
    if (k.isResponse(t) || k.isReadableStream(t))
      return t;
    if (t && k.isString(t) && (n && !this.responseType || a)) {
      const o = !(r && r.silentJSONParsing) && a;
      try {
        return JSON.parse(t);
      } catch (s) {
        if (o)
          throw s.name === "SyntaxError" ? Se.from(s, Se.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: ar.classes.FormData,
    Blob: ar.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
k.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Vs.headers[e] = {};
});
const aV = k.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), iV = (e) => {
  const t = {};
  let r, n, a;
  return e && e.split(`
`).forEach(function(o) {
    a = o.indexOf(":"), r = o.substring(0, a).trim().toLowerCase(), n = o.substring(a + 1).trim(), !(!r || t[r] && aV[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, qg = Symbol("internals");
function zo(e) {
  return e && String(e).trim().toLowerCase();
}
function Cl(e) {
  return e === !1 || e == null ? e : k.isArray(e) ? e.map(Cl) : String(e);
}
function oV(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const sV = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Jc(e, t, r, n, a) {
  if (k.isFunction(n))
    return n.call(this, t, r);
  if (a && (t = r), !!k.isString(t)) {
    if (k.isString(n))
      return t.indexOf(n) !== -1;
    if (k.isRegExp(n))
      return n.test(t);
  }
}
function lV(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function uV(e, t) {
  const r = k.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(a, i, o) {
        return this[n].call(this, t, a, i, o);
      },
      configurable: !0
    });
  });
}
class ir {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const a = this;
    function i(s, l, u) {
      const c = zo(l);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const d = k.findKey(a, c);
      (!d || a[d] === void 0 || u === !0 || u === void 0 && a[d] !== !1) && (a[d || l] = Cl(s));
    }
    const o = (s, l) => k.forEach(s, (u, c) => i(u, c, l));
    if (k.isPlainObject(t) || t instanceof this.constructor)
      o(t, r);
    else if (k.isString(t) && (t = t.trim()) && !sV(t))
      o(iV(t), r);
    else if (k.isHeaders(t))
      for (const [s, l] of t.entries())
        i(l, s, n);
    else
      t != null && i(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = zo(t), t) {
      const n = k.findKey(this, t);
      if (n) {
        const a = this[n];
        if (!r)
          return a;
        if (r === !0)
          return oV(a);
        if (k.isFunction(r))
          return r.call(this, a, n);
        if (k.isRegExp(r))
          return r.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = zo(t), t) {
      const n = k.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Jc(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let a = !1;
    function i(o) {
      if (o = zo(o), o) {
        const s = k.findKey(n, o);
        s && (!r || Jc(n, n[s], s, r)) && (delete n[s], a = !0);
      }
    }
    return k.isArray(t) ? t.forEach(i) : i(t), a;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, a = !1;
    for (; n--; ) {
      const i = r[n];
      (!t || Jc(this, this[i], i, t, !0)) && (delete this[i], a = !0);
    }
    return a;
  }
  normalize(t) {
    const r = this, n = {};
    return k.forEach(this, (a, i) => {
      const o = k.findKey(n, i);
      if (o) {
        r[o] = Cl(a), delete r[i];
        return;
      }
      const s = t ? lV(i) : String(i).trim();
      s !== i && delete r[i], r[s] = Cl(a), n[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return k.forEach(this, (n, a) => {
      n != null && n !== !1 && (r[a] = t && k.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((a) => n.set(a)), n;
  }
  static accessor(t) {
    const n = (this[qg] = this[qg] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function i(o) {
      const s = zo(o);
      n[s] || (uV(a, o), n[s] = !0);
    }
    return k.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
ir.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
k.reduceDescriptors(ir.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
k.freezeMethods(ir);
function Zc(e, t) {
  const r = this || Vs, n = t || r, a = ir.from(n.headers);
  let i = n.data;
  return k.forEach(e, function(s) {
    i = s.call(r, i, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), i;
}
function L_(e) {
  return !!(e && e.__CANCEL__);
}
function $o(e, t, r) {
  Se.call(this, e ?? "canceled", Se.ERR_CANCELED, t, r), this.name = "CanceledError";
}
k.inherits($o, Se, {
  __CANCEL__: !0
});
function F_(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new Se(
    "Request failed with status code " + r.status,
    [Se.ERR_BAD_REQUEST, Se.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function cV(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function dV(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let a = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const u = Date.now(), c = n[i];
    o || (o = u), r[a] = l, n[a] = u;
    let d = i, h = 0;
    for (; d !== a; )
      h += r[d++], d = d % e;
    if (a = (a + 1) % e, a === i && (i = (i + 1) % e), u - o < t)
      return;
    const p = c && u - c;
    return p ? Math.round(h * 1e3 / p) : void 0;
  };
}
function fV(e, t) {
  let r = 0, n = 1e3 / t, a, i;
  const o = (u, c = Date.now()) => {
    r = c, a = null, i && (clearTimeout(i), i = null), e.apply(null, u);
  };
  return [(...u) => {
    const c = Date.now(), d = c - r;
    d >= n ? o(u, c) : (a = u, i || (i = setTimeout(() => {
      i = null, o(a);
    }, n - d)));
  }, () => a && o(a)];
}
const lu = (e, t, r = 3) => {
  let n = 0;
  const a = dV(50, 250);
  return fV((i) => {
    const o = i.loaded, s = i.lengthComputable ? i.total : void 0, l = o - n, u = a(l), c = o <= s;
    n = o;
    const d = {
      loaded: o,
      total: s,
      progress: s ? o / s : void 0,
      bytes: l,
      rate: u || void 0,
      estimated: u && s && c ? (s - o) / u : void 0,
      event: i,
      lengthComputable: s != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, r);
}, Kg = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, Xg = (e) => (...t) => k.asap(() => e(...t)), hV = ar.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = ar.navigator && /(msie|trident)/i.test(ar.navigator.userAgent), r = document.createElement("a");
    let n;
    function a(i) {
      let o = i;
      return t && (r.setAttribute("href", o), o = r.href), r.setAttribute("href", o), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return n = a(window.location.href), function(o) {
      const s = k.isString(o) ? a(o) : o;
      return s.protocol === n.protocol && s.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), pV = ar.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, a, i) {
      const o = [e + "=" + encodeURIComponent(t)];
      k.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()), k.isString(n) && o.push("path=" + n), k.isString(a) && o.push("domain=" + a), i === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function vV(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function gV(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function H_(e, t) {
  return e && !vV(t) ? gV(e, t) : t;
}
const Qg = (e) => e instanceof ir ? { ...e } : e;
function ei(e, t) {
  t = t || {};
  const r = {};
  function n(u, c, d) {
    return k.isPlainObject(u) && k.isPlainObject(c) ? k.merge.call({ caseless: d }, u, c) : k.isPlainObject(c) ? k.merge({}, c) : k.isArray(c) ? c.slice() : c;
  }
  function a(u, c, d) {
    if (k.isUndefined(c)) {
      if (!k.isUndefined(u))
        return n(void 0, u, d);
    } else return n(u, c, d);
  }
  function i(u, c) {
    if (!k.isUndefined(c))
      return n(void 0, c);
  }
  function o(u, c) {
    if (k.isUndefined(c)) {
      if (!k.isUndefined(u))
        return n(void 0, u);
    } else return n(void 0, c);
  }
  function s(u, c, d) {
    if (d in t)
      return n(u, c);
    if (d in e)
      return n(void 0, u);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: s,
    headers: (u, c) => a(Qg(u), Qg(c), !0)
  };
  return k.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
    const d = l[c] || a, h = d(e[c], t[c], c);
    k.isUndefined(h) && d !== s || (r[c] = h);
  }), r;
}
const B_ = (e) => {
  const t = ei({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: a, xsrfCookieName: i, headers: o, auth: s } = t;
  t.headers = o = ir.from(o), t.url = A_(H_(t.baseURL, t.url), e.params, e.paramsSerializer), s && o.set(
    "Authorization",
    "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))
  );
  let l;
  if (k.isFormData(r)) {
    if (ar.hasStandardBrowserEnv || ar.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((l = o.getContentType()) !== !1) {
      const [u, ...c] = l ? l.split(";").map((d) => d.trim()).filter(Boolean) : [];
      o.setContentType([u || "multipart/form-data", ...c].join("; "));
    }
  }
  if (ar.hasStandardBrowserEnv && (n && k.isFunction(n) && (n = n(t)), n || n !== !1 && hV(t.url))) {
    const u = a && i && pV.read(i);
    u && o.set(a, u);
  }
  return t;
}, mV = typeof XMLHttpRequest < "u", bV = mV && function(e) {
  return new Promise(function(r, n) {
    const a = B_(e);
    let i = a.data;
    const o = ir.from(a.headers).normalize();
    let { responseType: s, onUploadProgress: l, onDownloadProgress: u } = a, c, d, h, p, v;
    function m() {
      p && p(), v && v(), a.cancelToken && a.cancelToken.unsubscribe(c), a.signal && a.signal.removeEventListener("abort", c);
    }
    let g = new XMLHttpRequest();
    g.open(a.method.toUpperCase(), a.url, !0), g.timeout = a.timeout;
    function b() {
      if (!g)
        return;
      const w = ir.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), _ = {
        data: !s || s === "text" || s === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: w,
        config: e,
        request: g
      };
      F_(function(C) {
        r(C), m();
      }, function(C) {
        n(C), m();
      }, _), g = null;
    }
    "onloadend" in g ? g.onloadend = b : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, g.onabort = function() {
      g && (n(new Se("Request aborted", Se.ECONNABORTED, e, g)), g = null);
    }, g.onerror = function() {
      n(new Se("Network Error", Se.ERR_NETWORK, e, g)), g = null;
    }, g.ontimeout = function() {
      let S = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const _ = a.transitional || I_;
      a.timeoutErrorMessage && (S = a.timeoutErrorMessage), n(new Se(
        S,
        _.clarifyTimeoutError ? Se.ETIMEDOUT : Se.ECONNABORTED,
        e,
        g
      )), g = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in g && k.forEach(o.toJSON(), function(S, _) {
      g.setRequestHeader(_, S);
    }), k.isUndefined(a.withCredentials) || (g.withCredentials = !!a.withCredentials), s && s !== "json" && (g.responseType = a.responseType), u && ([h, v] = lu(u, !0), g.addEventListener("progress", h)), l && g.upload && ([d, p] = lu(l), g.upload.addEventListener("progress", d), g.upload.addEventListener("loadend", p)), (a.cancelToken || a.signal) && (c = (w) => {
      g && (n(!w || w.type ? new $o(null, e, g) : w), g.abort(), g = null);
    }, a.cancelToken && a.cancelToken.subscribe(c), a.signal && (a.signal.aborted ? c() : a.signal.addEventListener("abort", c)));
    const y = cV(a.url);
    if (y && ar.protocols.indexOf(y) === -1) {
      n(new Se("Unsupported protocol " + y + ":", Se.ERR_BAD_REQUEST, e));
      return;
    }
    g.send(i || null);
  });
}, yV = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), a;
    const i = function(u) {
      if (!a) {
        a = !0, s();
        const c = u instanceof Error ? u : this.reason;
        n.abort(c instanceof Se ? c : new $o(c instanceof Error ? c.message : c));
      }
    };
    let o = t && setTimeout(() => {
      o = null, i(new Se(`timeout ${t} of ms exceeded`, Se.ETIMEDOUT));
    }, t);
    const s = () => {
      e && (o && clearTimeout(o), o = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", i));
    const { signal: l } = n;
    return l.unsubscribe = () => k.asap(s), l;
  }
}, _V = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, a;
  for (; n < r; )
    a = n + t, yield e.slice(n, a), n = a;
}, wV = async function* (e, t) {
  for await (const r of SV(e))
    yield* _V(r, t);
}, SV = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await t.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, Jg = (e, t, r, n) => {
  const a = wV(e, t);
  let i = 0, o, s = (l) => {
    o || (o = !0, n && n(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: u, value: c } = await a.next();
        if (u) {
          s(), l.close();
          return;
        }
        let d = c.byteLength;
        if (r) {
          let h = i += d;
          r(h);
        }
        l.enqueue(new Uint8Array(c));
      } catch (u) {
        throw s(u), u;
      }
    },
    cancel(l) {
      return s(l), a.return();
    }
  }, {
    highWaterMark: 2
  });
}, pc = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", j_ = pc && typeof ReadableStream == "function", xV = pc && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Y_ = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, EV = j_ && Y_(() => {
  let e = !1;
  const t = new Request(ar.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Zg = 64 * 1024, sf = j_ && Y_(() => k.isReadableStream(new Response("").body)), uu = {
  stream: sf && ((e) => e.body)
};
pc && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !uu[t] && (uu[t] = k.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new Se(`Response type '${t}' is not supported`, Se.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const CV = async (e) => {
  if (e == null)
    return 0;
  if (k.isBlob(e))
    return e.size;
  if (k.isSpecCompliantForm(e))
    return (await new Request(ar.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (k.isArrayBufferView(e) || k.isArrayBuffer(e))
    return e.byteLength;
  if (k.isURLSearchParams(e) && (e = e + ""), k.isString(e))
    return (await xV(e)).byteLength;
}, DV = async (e, t) => {
  const r = k.toFiniteNumber(e.getContentLength());
  return r ?? CV(t);
}, OV = pc && (async (e) => {
  let {
    url: t,
    method: r,
    data: n,
    signal: a,
    cancelToken: i,
    timeout: o,
    onDownloadProgress: s,
    onUploadProgress: l,
    responseType: u,
    headers: c,
    withCredentials: d = "same-origin",
    fetchOptions: h
  } = B_(e);
  u = u ? (u + "").toLowerCase() : "text";
  let p = yV([a, i && i.toAbortSignal()], o), v;
  const m = p && p.unsubscribe && (() => {
    p.unsubscribe();
  });
  let g;
  try {
    if (l && EV && r !== "get" && r !== "head" && (g = await DV(c, n)) !== 0) {
      let _ = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), E;
      if (k.isFormData(n) && (E = _.headers.get("content-type")) && c.setContentType(E), _.body) {
        const [C, D] = Kg(
          g,
          lu(Xg(l))
        );
        n = Jg(_.body, Zg, C, D);
      }
    }
    k.isString(d) || (d = d ? "include" : "omit");
    const b = "credentials" in Request.prototype;
    v = new Request(t, {
      ...h,
      signal: p,
      method: r.toUpperCase(),
      headers: c.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: b ? d : void 0
    });
    let y = await fetch(v);
    const w = sf && (u === "stream" || u === "response");
    if (sf && (s || w && m)) {
      const _ = {};
      ["status", "statusText", "headers"].forEach((O) => {
        _[O] = y[O];
      });
      const E = k.toFiniteNumber(y.headers.get("content-length")), [C, D] = s && Kg(
        E,
        lu(Xg(s), !0)
      ) || [];
      y = new Response(
        Jg(y.body, Zg, C, () => {
          D && D(), m && m();
        }),
        _
      );
    }
    u = u || "text";
    let S = await uu[k.findKey(uu, u) || "text"](y, e);
    return !w && m && m(), await new Promise((_, E) => {
      F_(_, E, {
        data: S,
        headers: ir.from(y.headers),
        status: y.status,
        statusText: y.statusText,
        config: e,
        request: v
      });
    });
  } catch (b) {
    throw m && m(), b && b.name === "TypeError" && /fetch/i.test(b.message) ? Object.assign(
      new Se("Network Error", Se.ERR_NETWORK, e, v),
      {
        cause: b.cause || b
      }
    ) : Se.from(b, b && b.code, e, v);
  }
}), lf = {
  http: Y5,
  xhr: bV,
  fetch: OV
};
k.forEach(lf, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const em = (e) => `- ${e}`, TV = (e) => k.isFunction(e) || e === null || e === !1, W_ = {
  getAdapter: (e) => {
    e = k.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const a = {};
    for (let i = 0; i < t; i++) {
      r = e[i];
      let o;
      if (n = r, !TV(r) && (n = lf[(o = String(r)).toLowerCase()], n === void 0))
        throw new Se(`Unknown adapter '${o}'`);
      if (n)
        break;
      a[o || "#" + i] = n;
    }
    if (!n) {
      const i = Object.entries(a).map(
        ([s, l]) => `adapter ${s} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? i.length > 1 ? `since :
` + i.map(em).join(`
`) : " " + em(i[0]) : "as no adapter specified";
      throw new Se(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: lf
};
function ed(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new $o(null, e);
}
function tm(e) {
  return ed(e), e.headers = ir.from(e.headers), e.data = Zc.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), W_.getAdapter(e.adapter || Vs.adapter)(e).then(function(n) {
    return ed(e), n.data = Zc.call(
      e,
      e.transformResponse,
      n
    ), n.headers = ir.from(n.headers), n;
  }, function(n) {
    return L_(n) || (ed(e), n && n.response && (n.response.data = Zc.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = ir.from(n.response.headers))), Promise.reject(n);
  });
}
const V_ = "1.7.7", np = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  np[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const rm = {};
np.transitional = function(t, r, n) {
  function a(i, o) {
    return "[Axios v" + V_ + "] Transitional option '" + i + "'" + o + (n ? ". " + n : "");
  }
  return (i, o, s) => {
    if (t === !1)
      throw new Se(
        a(o, " has been removed" + (r ? " in " + r : "")),
        Se.ERR_DEPRECATED
      );
    return r && !rm[o] && (rm[o] = !0, console.warn(
      a(
        o,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, o, s) : !0;
  };
};
function kV(e, t, r) {
  if (typeof e != "object")
    throw new Se("options must be an object", Se.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let a = n.length;
  for (; a-- > 0; ) {
    const i = n[a], o = t[i];
    if (o) {
      const s = e[i], l = s === void 0 || o(s, i, e);
      if (l !== !0)
        throw new Se("option " + i + " must be " + l, Se.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Se("Unknown option " + i, Se.ERR_BAD_OPTION);
  }
}
const uf = {
  assertOptions: kV,
  validators: np
}, fa = uf.validators;
class Va {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new zg(),
      response: new zg()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let a;
        Error.captureStackTrace ? Error.captureStackTrace(a = {}) : a = new Error();
        const i = a.stack ? a.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? i && !String(n.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + i) : n.stack = i;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = ei(this.defaults, r);
    const { transitional: n, paramsSerializer: a, headers: i } = r;
    n !== void 0 && uf.assertOptions(n, {
      silentJSONParsing: fa.transitional(fa.boolean),
      forcedJSONParsing: fa.transitional(fa.boolean),
      clarifyTimeoutError: fa.transitional(fa.boolean)
    }, !1), a != null && (k.isFunction(a) ? r.paramsSerializer = {
      serialize: a
    } : uf.assertOptions(a, {
      encode: fa.function,
      serialize: fa.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let o = i && k.merge(
      i.common,
      i[r.method]
    );
    i && k.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (v) => {
        delete i[v];
      }
    ), r.headers = ir.concat(o, i);
    const s = [];
    let l = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(r) === !1 || (l = l && m.synchronous, s.unshift(m.fulfilled, m.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(m) {
      u.push(m.fulfilled, m.rejected);
    });
    let c, d = 0, h;
    if (!l) {
      const v = [tm.bind(this), void 0];
      for (v.unshift.apply(v, s), v.push.apply(v, u), h = v.length, c = Promise.resolve(r); d < h; )
        c = c.then(v[d++], v[d++]);
      return c;
    }
    h = s.length;
    let p = r;
    for (d = 0; d < h; ) {
      const v = s[d++], m = s[d++];
      try {
        p = v(p);
      } catch (g) {
        m.call(this, g);
        break;
      }
    }
    try {
      c = tm.call(this, p);
    } catch (v) {
      return Promise.reject(v);
    }
    for (d = 0, h = u.length; d < h; )
      c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(t) {
    t = ei(this.defaults, t);
    const r = H_(t.baseURL, t.url);
    return A_(r, t.params, t.paramsSerializer);
  }
}
k.forEach(["delete", "get", "head", "options"], function(t) {
  Va.prototype[t] = function(r, n) {
    return this.request(ei(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
k.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(i, o, s) {
      return this.request(ei(s || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  Va.prototype[t] = r(), Va.prototype[t + "Form"] = r(!0);
});
class ap {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(i) {
      r = i;
    });
    const n = this;
    this.promise.then((a) => {
      if (!n._listeners) return;
      let i = n._listeners.length;
      for (; i-- > 0; )
        n._listeners[i](a);
      n._listeners = null;
    }), this.promise.then = (a) => {
      let i;
      const o = new Promise((s) => {
        n.subscribe(s), i = s;
      }).then(a);
      return o.cancel = function() {
        n.unsubscribe(i);
      }, o;
    }, t(function(i, o, s) {
      n.reason || (n.reason = new $o(i, o, s), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (n) => {
      t.abort(n);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new ap(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
}
function RV(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function PV(e) {
  return k.isObject(e) && e.isAxiosError === !0;
}
const cf = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(cf).forEach(([e, t]) => {
  cf[t] = e;
});
function U_(e) {
  const t = new Va(e), r = S_(Va.prototype.request, t);
  return k.extend(r, Va.prototype, t, { allOwnKeys: !0 }), k.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(a) {
    return U_(ei(e, a));
  }, r;
}
const mt = U_(Vs);
mt.Axios = Va;
mt.CanceledError = $o;
mt.CancelToken = ap;
mt.isCancel = L_;
mt.VERSION = V_;
mt.toFormData = hc;
mt.AxiosError = Se;
mt.Cancel = mt.CanceledError;
mt.all = function(t) {
  return Promise.all(t);
};
mt.spread = RV;
mt.isAxiosError = PV;
mt.mergeConfig = ei;
mt.AxiosHeaders = ir;
mt.formToJSON = (e) => $_(k.isHTMLForm(e) ? new FormData(e) : e);
mt.getAdapter = W_.getAdapter;
mt.HttpStatusCode = cf;
mt.default = mt;
var NV = ["url", "headers"], MV = {
  Accept: "application/json, text/javascript, */*; q=0.01",
  "Content-Type": "application/json"
};
mt.defaults.withCredentials = !0;
mt.defaults.xsrfCookieName = "csrftoken";
mt.defaults.xsrfHeaderName = "X-CSRFToken";
var AV = /* @__PURE__ */ function() {
  function e() {
    go(this, e);
  }
  return mo(e, [{
    key: "fetch",
    value: function(r) {
      return mt.request(U(U({}, r), {}, {
        baseURL: Qi.baseURL,
        headers: U(U({}, MV), r.headers)
      }));
    }
  }, {
    key: "get",
    value: function(r) {
      var n = le({}, (Je(r), r)), a = n.url, i = a === void 0 ? "" : a, o = n.headers, s = o === void 0 ? {} : o, l = yS(n, NV);
      return this.fetch(U({
        url: i,
        method: "GET",
        headers: s
      }, l));
    }
  }, {
    key: "post",
    value: function(r) {
      var n = r.url, a = n === void 0 ? "" : n, i = r.body, o = i === void 0 ? {} : i, s = r.form, l = r.headers, u = l === void 0 ? {} : l;
      return this.fetch({
        url: a,
        method: "POST",
        data: s || JSON.stringify(o),
        headers: u
      });
    }
  }, {
    key: "put",
    value: function(r) {
      var n = r.url, a = n === void 0 ? "" : n, i = r.body, o = i === void 0 ? {} : i, s = r.headers, l = s === void 0 ? {} : s;
      return this.fetch({
        url: a,
        method: "PUT",
        data: JSON.stringify(o),
        headers: l
      });
    }
  }, {
    key: "delete",
    value: function(r) {
      var n = r.url, a = n === void 0 ? "" : n, i = r.body, o = i === void 0 ? {} : i, s = r.headers, l = s === void 0 ? {} : s;
      return this.fetch({
        url: a,
        method: "DELETE",
        data: JSON.stringify(o),
        headers: l
      });
    }
  }, {
    key: "toStr",
    value: function(r) {
      var n = "";
      for (var a in r)
        n += "".concat(a, "=").concat(r[a], "&");
      return n.substring(0, n.length - 1);
    }
  }]);
}();
const nm = new AV();
var IV = /* @__PURE__ */ function() {
  function e() {
    go(this, e);
  }
  return mo(e, [{
    key: "get",
    value: function(r) {
      var n = le({}, (Je(r), r)), a = n.url, i = n.getParams, o = n.success, s = n.error, l = n.dataConverter;
      return nm.get({
        url: a + fe.getParamsToString(i)
      }).then(function(u) {
        var c = l ? l(u.data) : u.data;
        return o && o(c), c;
      }).catch(function(u) {
        return s && s(u.message), u.message;
      });
    }
  }, {
    key: "post",
    value: function(r) {
      var n = le({}, (Je(r), r));
      return this.post_put_delete(U(U({}, n), {}, {
        method: "post"
      }));
    }
  }, {
    key: "put",
    value: function(r) {
      var n = le({}, (Je(r), r));
      return this.post_put_delete(U(U({}, n), {}, {
        method: "put"
      }));
    }
  }, {
    key: "delete",
    value: function(r) {
      var n = le({}, (Je(r), r));
      return this.post_put_delete(U(U({}, n), {}, {
        method: "delete"
      }));
    }
  }, {
    key: "post_put_delete",
    value: function(r) {
      var n = le({}, (Je(r), r)), a = n.url, i = n.body, o = n.form, s = n.headers, l = n.success, u = n.error, c = n.method, d = n.dataConverter;
      return nm[c]({
        url: a,
        body: i,
        form: o,
        headers: s
      }).then(function(h) {
        var p = d ? d(h.data) : h.data;
        return l && l(p), {
          response: h,
          data: p
        };
      }).catch(function(h) {
        u && u(h);
        var p = h.message;
        return {
          response: h,
          message: p
        };
      });
    }
  }]);
}();
const td = new IV();
var $V = /* @__PURE__ */ mo(
  function e() {
    var t = this;
    go(this, e), _t(this, "createStore", function(r, n) {
      t[r] = n, h_(t, _t({}, r, Pt));
    }), _t(this, "getStore", function() {
      return t;
    }), _t(this, "getState", function(r) {
      var n = t.getAddress(r), a = n.objName, i = n.index;
      return a[i];
    }), _t(this, "setState", function(r, n) {
      var a = t.getAddress(r), i = a.objName, o = a.index;
      i[o] = n;
    }), _t(this, "updateState", function(r, n) {
      var a = t.getAddress(r), i = a.objName, o = a.index, s = i[o] || {}, l = U(U({}, s), n);
      i[o] = l;
    }), _t(this, "getAddress", function(r) {
      var n = t, a = r.split("."), i = a.length - 1, o;
      for (var s in a)
        o = a[s], s < i && (n[o] === void 0 && (n[o] = {}), n = n[o]);
      return {
        objName: n,
        index: o
      };
    });
  }
  //        makeAutoObservable(this, {}, {autoBind: true});
);
const Oe = new $V();
var LV = function(t) {
  var r, n = le({}, (Je(t), t)), a = n.options, i = n.setPickerConnector, o = n.componentCallback, s = n.componentReturn, l = n.initStore, u = a.listName, c = a.request, d = a.finalList;
  a.unavailableItemsList;
  var h = a.singleChoiceOnly, p = h === void 0 ? !0 : h;
  a.title;
  var v = a.selectable, m = v === void 0 ? !0 : v, g = a.selectedList, b = g === void 0 ? [] : g, y = a.strHeight, w = y === void 0 ? $t.lineHeight : y, S = a.callbackOnReadyComponentDOM, _ = a.listBlockLength, E = a.hideSearchBar;
  a.hideCountersBar, a.ItemViewName, f.useRef(l ? function() {
    var qe = ge.currentListName();
    Oe.getState(qe) !== u && Oe.setState(qe, u);
    var pe = ge.commonStates();
    Zt(Oe.getState(pe)) || Oe.createStore(pe, U({}, ge.initCommonStates));
    var Me = ge.pagesData(u), Re = ge.states(u);
    Zt(Oe.getState(Me)) || (Oe.createStore(Me, {}), Oe.createStore(Re, U({}, ge.initStates))), Oe.setState(ge.currentListName(), u), Oe.updateState(ge.listNams(), _t({}, u, !0));
  }() : null), u || console.error("!!! ВНИМАНИЕ !!! Не назначено уникальное имя списка для сетпикера - возможна путаница в данных!!!");
  var C = f.useRef(new yU({
    finalList: d
  })), D = C.current;
  _ && (Qi.listBlockLength = _);
  var O = $t.operationCodes, R = f.useRef(Zt(Oe.getState(ge.pagesData(u)))), P = f.useRef(null), A = f.useRef({}), B = f.useRef({}), $ = f.useRef({}), K = f.useState(void 0), L = ve(K, 2), I = L[0], F = L[1], de = function(pe, Me) {
    if (D.showSelectedListMode = pe ? Me ? "search" : "full" : !1, pe) {
      var Re = Me ? rt.current.searchSelectedList : rt.current.selectedList;
      D.goToSelectedListMode({
        listName: u,
        list: Re
      });
    } else
      D.goFromSelectedListMode({
        listName: u
      });
    F(D.showSelectedListMode);
  }, T = f.useState(0), M = ve(T, 2), ie = M[0], z = M[1], V = function() {
    return z(ie + 1);
  }, oe = En([]), X = ve(oe, 3), Z = X[0], se = X[1], Q = X[2], re = f.useState(null), De = ve(re, 2), Y = De[0], He = De[1], kt = function(pe) {
    return He(pe === Y ? null : pe);
  }, ft = f.useRef(0), jt = function() {
    ft.current++, D.spinner(u, !0);
  }, Mt = function() {
    ft.current = Math.max(ft.current - 1, 0), ft.current || D.spinner(u, !1);
  }, At = En(void 0), Ot = ve(At, 3), Le = Ot[0], Ve = Ot[1], lr = Ot[2], It = function(pe) {
    if (!(Ve != null && Ve.current)) return pe;
    var Me = Ve.current.toLowerCase();
    return pe.filter(function(Re) {
      return ~Re.toLowerCase().indexOf(Me);
    });
  }, ht = En({
    selectedList: b,
    // array с id заселекченых элементов
    searchSelectedList: It(b),
    show: !!(R != null && (r = R.current) !== null && r !== void 0 && r._mainOptions)
  }), bt = ve(ht, 3), er = bt[0], rt = bt[1], Rt = bt[2], tr = f.useRef(null), Yt = function() {
    return Rt(U(U({}, rt.current), {}, {
      show: !0
    }));
  }, ln = function() {
    return Rt(U(U({}, rt.current), {}, {
      show: !1
    }));
  }, un = f.useRef(0), Wt = function(pe) {
    var Me = pe || rt.current, Re = Me.selectedList, it = {
      selectedList: Re,
      searchSelectedList: It(Re),
      show: Me.show === void 0 ? rt.current.show : Me.show
    };
    rt.current = it, un.current && clearTimeout(un.current), un.current = setTimeout(function() {
      un.current = 0, Rt(it);
    }, 0);
  }, An = function(pe) {
    lr(pe), o({
      code: $t.operationCodes.changeSearchContext,
      value: pe
    }), Wt();
  }, Na = function() {
    setTimeout(function() {
      Vt({
        subList: B.current.current.subList
      });
    }, 10);
  }, mi = function(pe) {
    o(U(U({}, pe), {}, {
      common: {
        searchContext: Ve.current,
        pages: R.current
      }
    }));
  }, bi = function(pe, Me) {
    var Re = pe.id;
    if (m) {
      var it = p ? !0 : Me, yt = er.selectedList;
      p ? yt = [Re] : yt = it ? fe.idArrayIncrease(yt, Re) : fe.idArrayDecrease(yt, Re), Wt({
        selectedList: yt
      }), mi({
        code: O.itemSelect,
        item: U(U({}, pe), {}, {
          id: Re
        }),
        isSelected: it,
        selectedList: yt
      });
    }
  }, ca = function(pe) {
    var Me = le({}, (Je(pe), pe)), Re = Me.page, it = Me.trace;
    if (isNaN(Re)) {
      console.error("getBlock error --- page = ".concat(Re, " (trace: ").concat(it, ")"));
      return;
    }
    var yt = D.getPagesIndex(Ve.current), Kt = D.getPageIndex(yt, Re);
    if (!A[Kt]) {
      A[Kt] = $t.loadingText, jt();
      var Ut = function() {
        return A[Kt] = null;
      }, Gt = D.requestGetPage({
        listName: u,
        // имя списка данных ('reportsList', ...)
        request: c,
        // параметры запроса на сервер
        searchContext: Ve.current,
        // контекст поиска ('*' - все)
        page: Re,
        // индекс загружаемой страницы
        pages: R.current,
        callbackForGetBlock: function() {
          Mt(), Yt();
        }
      });
      Gt != null && Gt.then && Gt.then(Ut);
    }
  };
  f.useEffect(function() {
    setTimeout(function() {
      Ve.current && kt($t.actionModes.search);
    }, 0);
    var qe = EW(function() {
      return Oe.getState(ge.pagesData(u));
    }, function(pe) {
      var Me = Zt(pe), Re = R.current, it = Me._change.pageIndex;
      R.current = Me, !(Re[it] && !Me._change.forceReBuild) && (P.current && clearTimeout(P.current), P.current = setTimeout(function() {
        P.current = null, ur(), Wt(), Na();
      }, 0));
    });
    return da(), Wt(), Yt(), i.setSelected = function(pe) {
      return Wt({
        selectedList: pe,
        show: rt.current.show
      });
    }, i.showSpinner = function(pe) {
      D.spinner(u, pe), pe || Yt();
    }, i.selectedInfo = function(pe) {
      tr.current = pe, Wt(), Yt();
    }, s.getMainStates = function() {
      return {
        searchContext: Ve.current
      };
    }, S && S(), function() {
      qe();
    };
  }, []);
  var da = function() {
    var pe = D.getPagesIndex(Ve.current, 0), Me = D.getPageIndex(pe, 0);
    R.current[Me] ? ur() : ca({
      page: 0,
      trace: "startNewList"
    });
  }, Ma = function(pe) {
    var Me;
    if (V(), Q([{
      i: 0,
      p: 0,
      l: 0
    }]), da(), pe) {
      var Re = ge.sessionOptionsIndex(u);
      Oe.updateState(Re, pe);
    }
    var it = D.getPagesIndex(pe.searchContext, 0), yt = (Me = R.current) === null || Me === void 0 ? void 0 : Me._mainOptions;
    if (yt && yt[it]) {
      var Kt = U({}, Zt(Oe.getState(ge.pagesData(u))));
      Kt._mainOptions = U(U({}, yt), {}, {
        totalCount: void 0
      }, yt[it]), Oe.setState(ge.pagesData(u), Kt);
    }
  };
  f.useEffect(function() {
    if (Le === void 0) {
      var qe = ge.sessionOptionsIndex(u), pe = Zt(Oe.getState(qe));
      An((pe == null ? void 0 : pe.searchContext) || "");
      return;
    }
    Ma({
      searchContext: Le
    });
  }, [Le]), f.useEffect(function() {
    I !== void 0 && (V(), ur());
  }, [I]);
  var wr = function(pe) {
    for (var Me = 0, Re = D.getPagesIndex(Ve.current), it = R.current._rootsOptions[Re], yt = it ? it.childrenItems : 0, Kt = it.pagesCounts.length, Ut = [], Gt = 0; Gt < Kt; Gt++) {
      var cn = D.getPageIndex(Re, Gt), dn = R.current[cn];
      if (dn != null && dn.length)
        for (var Aa in dn) {
          var x = dn[Aa];
          Ut.push(U(U({}, x), {}, {
            pagesIndex: Re,
            pageIndex: cn,
            page: Gt,
            index: Number(Aa),
            searchContext: Ve.current
          }));
        }
      else
        for (var H = Math.min(yt - Qi.listBlockLength * Gt, Qi.listBlockLength), G = 0; G < H; G++)
          Ut.push({
            i: Me,
            p: Gt
          });
    }
    return Ut;
  }, ur = function() {
    var pe = wr();
    Q(pe);
  }, Vt = function(pe) {
    var Me = pe.subListTo, Re = pe.subList, it = function(Be, Ke, Pe) {
      var Te = D.getPagesIndex(Be, Ke);
      return D.getPageIndex(Te, Pe);
    }, yt = Ve.current, Kt = it(yt, 0, 0), Ut = ye(Re), Gt;
    try {
      for (Ut.s(); !(Gt = Ut.n()).done; ) {
        var cn = Gt.value;
        if (!cn.id) {
          var dn = cn.i, Aa = cn.p, x = it(yt, dn, Aa);
          x !== Kt && ca({
            parentID: dn,
            page: Aa,
            trace: "endOfScroll-1"
          }), Kt = x;
        }
      }
    } catch (me) {
      Ut.e(me);
    } finally {
      Ut.f();
    }
    var H = Zt(Oe.getState(ge.pagesData(u))), G = H._mainOptions;
    Me && !(G != null && G.isFinalTotalCount) && Me >= (G == null ? void 0 : G.totalItems) && ca({
      parentID: 0,
      page: Re[Re.length - 1].page + 1,
      trace: "endOfScroll-2"
    });
  }, In = U(U({}, n), {}, {
    utils: D,
    ItemView: XV,
    listName: u,
    endOfScroll: Vt,
    setSearchContext: An,
    onClickToLineCheckbox: bi,
    options: a,
    list: Z,
    currentList: se,
    strHeight: w,
    resetScrollbar: ie,
    scrollData: B,
    request: c,
    counterRequest: $,
    showSelectedCounts: Yt,
    hideSelectedCounts: ln,
    componentCallback: mi,
    loadingText: $t.loadingText,
    wheelTimeout: $t.wheelTimeout,
    searchTimeout: $t.searchTimeout,
    pages: R.current,
    searchContext: Ve.current,
    selected: er,
    setSelected: Wt,
    actionsMode: Y,
    setActionsMode: kt,
    showSelectedList: I,
    setShowSelectedList: de
  });
  return /* @__PURE__ */ f.createElement(f.Fragment, null, !E && /* @__PURE__ */ f.createElement(FV, In), /* @__PURE__ */ f.createElement(jV, In));
}, FV = function(t) {
  var r = le({}, (Je(t), t)), n = r.options, a = r.showSelectedList, i = n.title, o = n.componentContent, s = n.hideCountersBar, l = (o == null ? void 0 : o.actions) !== !1, u = !!i;
  return !l && !u ? null : /* @__PURE__ */ f.createElement("div", {
    className: "clearfix inline-set-header set-picker-actions".concat(a ? " is-hidden" : "")
  }, /* @__PURE__ */ f.createElement("div", {
    className: "search-wrapper"
  }, l && !s && /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement(BV, r)), /* @__PURE__ */ f.createElement("div", {
    className: "d-flex justify-content-between"
  }, /* @__PURE__ */ f.createElement("div", null, i), l && /* @__PURE__ */ f.createElement(HV, r))));
}, HV = function(t) {
  var r = le({}, (Je(t), t)), n = r.actionsMode, a = r.setActionsMode, i = r.options, o = i.componentContent, s = $t.actionModes, l = s.search, u = s.addLine, c = s.edit, d = f.useRef([
    {
      name: l,
      className: "b-search",
      icon: "fa-search",
      title: "Поиск по справочнику",
      activeIf: [l]
    }
    //        {name: addLine, className: 'b-addLine',  icon: 'fa-plus',   title: 'Добавить строку в верхний уровень', activeIf: [addLine], showIf: [addLine, edit]},
    //        {name: edit,    className: 'b-editlist', icon: 'fa-pen',    title: 'Режим редактирования',              activeIf: [addLine, edit]},
  ]), h = function(m) {
    return !(o != null && o.actions) || fe.parseParams(o == null ? void 0 : o.actions[m]).show;
  }, p = function(m) {
    return function() {
      var g = m;
      switch ("".concat(n, "->").concat(m)) {
        case "".concat(u, "->").concat(c):
          g = null;
          break;
        case "".concat(u, "->").concat(u):
          g = c;
          break;
      }
      a(g);
    };
  };
  return /* @__PURE__ */ f.createElement("div", {
    className: "d-flex g-1"
  }, d.current.map(function(v, m) {
    var g = v.name, b = v.activeIf, y = v.showIf, w = v.className, S = v.title, _ = v.icon, E = b.includes(n), C = h(g) && (!y || y.includes(n));
    return C ? /* @__PURE__ */ f.createElement("button", {
      index: m,
      className: "tf_btn tf_btn-xs tf_btn-transparent tf_btn-icon ".concat(w).concat(fe.addActiveClassIf(E)),
      title: S,
      onClick: p(g)
    }, /* @__PURE__ */ f.createElement("i", {
      className: "fas fa-fw ".concat(_)
    })) : null;
  }));
}, BV = function(t) {
  var r = le({}, (Je(t), t)), n = r.actionsMode, a = r.searchContext, i = r.setSearchContext, o = f.useState(a), s = ve(o, 2), l = s[0], u = s[1], c = f.useRef(null), d = f.useRef(null), h = function(m) {
    var g = m.target.value;
    u(g), c.current && clearTimeout(c.current), c.current = setTimeout(function() {
      c.current = null, i(g);
    }, $t.searchTimeout);
  }, p = function() {
    u(""), i("");
  };
  return f.useEffect(function() {
    n === $t.actionModes.search && d.current.focus();
  }, [n]), f.useEffect(function() {
    a !== l && u(a);
  }, [a]), /* @__PURE__ */ f.createElement("div", {
    className: "c-search tf_input-group flex-grow-1".concat(fe.addHideClassIf(n !== $t.actionModes.search))
  }, /* @__PURE__ */ f.createElement("input", {
    className: "tf_form-control tf_form-control-xs tf_form-control-secondary",
    type: "text",
    value: l,
    placeholder: "Поиск...",
    onChange: h,
    autoFocus: !0,
    ref: d
  }), /* @__PURE__ */ f.createElement("button", {
    className: "tf_btn tf_btn-xs tf_btn-secondary tf_btn-icon",
    title: "Очистить",
    onClick: p
  }, /* @__PURE__ */ f.createElement("i", {
    className: "fas fa-backspace fa-fw"
  })));
}, jV = function(t) {
  var r = le({}, (Je(t), t)), n = r.options, a = n.componentContent, i = n.hideSearchBar;
  return /* @__PURE__ */ f.createElement("div", {
    className: "tf_smartwindow-body".concat(i ? " without-searchbar" : "")
  }, /* @__PURE__ */ f.createElement("div", {
    className: "tf_smartlist"
  }, (a == null ? void 0 : a.header) !== !1 && /* @__PURE__ */ f.createElement(YV, r), /* @__PURE__ */ f.createElement(KV, r)));
}, YV = function(t) {
  var r, n = le({}, (Je(t), t)), a = n.options, i = a.componentContent, o = a.hideCountersBar;
  return o ? /* @__PURE__ */ f.createElement("div", {
    className: "tf_smartlist-header tf_smartlist-header-hidden"
  }) : /* @__PURE__ */ f.createElement("div", {
    className: "tf_smartlist-header"
  }, /* @__PURE__ */ f.createElement("div", {
    className: "d-flex g-2 align-items-end p-1 overflow-hidden"
  }, fe.parseParams(i == null || (r = i.header) === null || r === void 0 ? void 0 : r.counts).show && /* @__PURE__ */ f.createElement(WV, n)), /* @__PURE__ */ f.createElement(bU, n));
}, WV = function(t) {
  var r, n, a, i = le({}, (Je(t), t)), o = i.utils, s = i.selected, l = s.show, u = s.selectedList, c = s.searchSelectedList, d = i.showSelectedList, h = i.setShowSelectedList, p = i.pages, v = i.searchContext, m = i.setSearchContext, g = i.setSelected, b = i.options.singleChoiceOnly, y = i.componentCallback, w = i.listName, S = p._mainOptions;
  o.showSelectedListMode = !1;
  var _ = o.getPagesIndex("", 0), E = o.getPagesIndex(v, 0);
  o.showSelectedListMode = d;
  var C = function() {
    if (d) {
      h(!1);
      return;
    }
    if (!(S != null && S.totalCount)) {
      o.spinner(w, !0);
      var B = function() {
        return o.spinner(w, !1);
      }, $ = o.requestGetTotalCounter(i);
      $ != null && $.then && $.then(B);
      return;
    }
  }, D = function() {
    var B;
    if (d) {
      h(!1), m("");
      return;
    }
    if (!((B = S[_]) !== null && B !== void 0 && B.totalCount)) {
      o.requestGetGlobalTotalCounter(i);
      return;
    }
    m("");
  }, O = function() {
    g({
      selectedList: []
    }), y({
      code: $t.operationCodes.unselectAll
    });
  }, R = S && ((r = S[E]) === null || r === void 0 ? void 0 : r.totalCount) !== void 0 ? (n = S[E]) === null || n === void 0 ? void 0 : n.totalCount : d ? "всех" : "показать", P = S && ((a = S[_]) === null || a === void 0 ? void 0 : a.totalCount) !== void 0 ? S[_].totalCount : d ? "всех" : "показать";
  return /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("div", {
    className: "flex-grow-1"
  }, !b && !!u.length && /* @__PURE__ */ f.createElement("div", {
    className: "tf_form-check"
  }, /* @__PURE__ */ f.createElement("i", {
    className: "fas fa-times unselect",
    onClick: O
  }))), /* @__PURE__ */ f.createElement("div", {
    className: "lh-1 text-end",
    style: {
      visibility: l ? "unset" : "hidden"
    }
  }, /* @__PURE__ */ f.createElement("span", {
    className: "text-nowrap"
  }, "выбрано ", /* @__PURE__ */ f.createElement("span", {
    className: "text-primary",
    tabIndex: "1",
    role: "button",
    style: {
      "font-weight": d === "search" ? "bold" : ""
    },
    onClick: function() {
      return h(!0, !0);
    }
  }, c.length || 0), " из ", /* @__PURE__ */ f.createElement("span", {
    className: "text-primary",
    tabIndex: "1",
    role: "button",
    style: {
      "font-weight": d ? "" : "bold"
    },
    onClick: C
  }, R), v && /* @__PURE__ */ f.createElement(f.Fragment, null, " (всего ", /* @__PURE__ */ f.createElement("span", {
    className: "text-primary",
    tabIndex: "1",
    role: "button",
    style: {
      "font-weight": d === "full" ? "bold" : ""
    },
    onClick: function() {
      return h(!0, !1);
    }
  }, u.length || 0), " из ", /* @__PURE__ */ f.createElement("span", {
    className: "text-primary",
    tabIndex: "1",
    role: "button",
    onClick: D
  }, P), ")"))));
}, VV = function(t) {
  var r, n = le({}, (Je(t), t)), a = n.list, i = n.currentList, o = n.resetScrollbar, s = n.scrollData, l = n.strHeight, u = f.useRef(null), c = function(_) {
    var E = _.listHeight, C = _.wrapperHeight, D = _.scroll, O = E - C, R = O / 100 * D, P = R + C, A = Math.ceil(R / l), B = Math.ceil(P / l), $ = i.current.slice(A, B + 1);
    return {
      subListFrom: A,
      subListTo: B,
      subList: $
    };
  }, d = En({
    wrapperHeight: void 0,
    // высота окна
    wrapperWidth: void 0,
    // ширина окна
    scroll: 0,
    // текущее значение скролла (в %)
    listHeight: i.current.length * l,
    // высота листаемого списка
    upDownHeight: l * 3,
    // смещение списка при прокрутке колёсика мышки (в пикселях)
    subListFrom: 0,
    // индекс первого элемента subList в list
    subListTo: 0,
    // индекс последнего элемента subList в list
    subList: []
    // вырезанный кусок из list
  }, !0), h = ve(d, 3), p = h[0], v = h[1], m = h[2], g = function(_) {
    var E = v.current;
    _.listHeight && _.listHeight !== E.listHeight && E.scroll === 100 && (_.scroll = (E.listHeight - E.wrapperHeight + l) * 100 / (_.listHeight - E.wrapperHeight)), m(_);
    var C = c(v.current);
    Object.assign(v.current, C);
  }, b = f.useRef(!1);
  f.useEffect(function() {
    s && (s.current = v);
    var S = function() {
      g({
        wrapperWidth: u.current.clientWidth,
        wrapperHeight: u.current.clientHeight
      });
    };
    setTimeout(function() {
      S();
    }, 0), u.current.onmouseover = function() {
      b.current = !0;
    }, u.current.onmouseleave = function() {
      b.current = !1;
    };
  }, []), f.useEffect(function() {
    g({
      scroll: 0
    });
  }, [o]), f.useEffect(function() {
    g({
      listHeight: a.length * l
    });
  }, [a]);
  var y = function(_) {
    var E = _.deltaY > 0 ? 1 : -1;
    if (!(E === -1 && p.scroll === 0)) {
      var C = p.listHeight - p.wrapperHeight, D = p.upDownHeight * 100 / C, O = Math.max(0, Math.min(100, p.scroll + D * E));
      g({
        scroll: O
      });
    }
  }, w = (r = u.current) === null || r === void 0 ? void 0 : r.clientHeight;
  return w && w !== v.current.wrapperHeight && g({
    wrapperWidth: u.current.clientWidth,
    wrapperHeight: u.current.clientHeight
  }), /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("div", {
    className: "tf_smartlist-items",
    onWheel: y,
    ref: u
  }, /* @__PURE__ */ f.createElement(GV, le({}, n, {
    list: p.subList,
    subListFrom: p.subListFrom,
    subListTo: p.subListTo
  }))), /* @__PURE__ */ f.createElement(UV, le({}, n, {
    strHeight: l,
    data: p,
    setData: g,
    mouseOverTheSmartList: b.current
  })));
}, UV = function(t) {
  var r = le({}, (Je(t), t)), n = r.data, a = r.setData, i = r.wheelTimeout, o = r.endOfScroll, s = r.mouseOverTheSmartList, l = n.listHeight, u = n.wrapperHeight, c = n.scroll, d = n.subListFrom, h = n.subListTo, p = n.subList, v = Math.min(1e4, l), m = f.useRef(null), g = f.useRef(!1), b = f.useRef(0), y = f.useRef(i), w = f.useRef(void 0), S = function(R) {
    return R * (v - u) / 100;
  }, _ = function(R) {
    return R * 100 / (v - u);
  }, E = function() {
    b.current && clearTimeout(b.current), b.current = setTimeout(function() {
      b.current = 0, o({
        subListFrom: d,
        subListTo: h,
        subList: p
      });
    }, y.current);
  }, C = function(R) {
    if (g.current) {
      g.current = !1, E();
      return;
    }
    g.current = !0, a({
      scroll: _(R.target.scrollTop)
    }), E();
  }, D = function(R) {
    if (w.current) {
      var P = 0;
      switch (R.code) {
        case "ArrowUp":
          P = -1;
          break;
        case "ArrowDown":
          P = 1;
          break;
        default:
          return;
      }
      y.current = 0, m.current.scrollBy({
        top: P
      }), setTimeout(function() {
        y.current = i;
      }, 10);
    }
  };
  return f.useEffect(function() {
    return document.addEventListener("keyup", D), function() {
      return document.removeEventListener("keyup", D);
    };
  }, []), f.useEffect(function() {
    w.current = s;
  }, [s]), f.useEffect(function() {
    if (g.current) {
      g.current = !1, E();
      return;
    }
    var O = S(c);
    m.current.scrollTop !== O && (g.current = !0, m.current.scrollTop = O, E());
  }, [c]), /* @__PURE__ */ f.createElement("div", {
    className: "tf_smartscroll",
    onScroll: C,
    ref: m
  }, /* @__PURE__ */ f.createElement("div", {
    className: "tf_smartscroll-wrapper",
    style: {
      height: "".concat(v, "px")
    }
  }));
}, GV = function(t) {
  var r = le({}, (Je(t), t)), n = f.useRef(0);
  n.current++;
  var a = n.current % 2 === 0;
  return /* @__PURE__ */ f.createElement(f.Fragment, null, a ? /* @__PURE__ */ f.createElement(zV, r) : /* @__PURE__ */ f.createElement(qV, r));
}, zV = function(t) {
  var r = le({}, (Je(t), t));
  return /* @__PURE__ */ f.createElement(G_, r);
}, qV = function(t) {
  var r = le({}, (Je(t), t));
  return /* @__PURE__ */ f.createElement(G_, r);
}, G_ = function(t) {
  var r = le({}, (Je(t), t)), n = r.list, a = r.ItemView, i = r.subListFrom;
  return /* @__PURE__ */ f.createElement(f.Fragment, null, n.map(function(o, s) {
    return /* @__PURE__ */ f.createElement(a, le({
      key: "scrlbr-".concat(s)
    }, r, {
      item: o,
      subListFrom: i,
      index: s
    }));
  }));
}, KV = function(t) {
  var r = le({}, (Je(t), t)), n = r.options, a = r.componentReturn, i = n.strHeight, o = f.useRef(null), s = f.useState(0), l = ve(s, 2), u = l[0], c = l[1], d = function() {
    var p = o.current.clientHeight;
    c(Math.floor(p / i));
  };
  return f.useEffect(function() {
    a.onResize = d, d();
  }, []), /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("div", {
    ref: o,
    className: "tf_smartlist-body"
  }, /* @__PURE__ */ f.createElement(VV, le({}, r, {
    listHeight: u
  }))));
}, XV = function(t) {
  var r, n = le({}, (Je(t), t)), a = n.item, i = n.selected, o = n.options, s = n.index, l = n.onClickToLineCheckbox, u = o.componentContent, c = o.strHeight, d = o.highlightNodes, h = o.singleChoiceOnly, p = o.unavailableItemsList, v = o.ItemViewName, m = a.id, g = a.hasChildren, b = 4, y = "#ddd", w = 4, S = 20, _ = 5, E = 60, C = p ? p.includes(m) : !1, D = function() {
    for (var oe = function(Q, re) {
      return Math.floor(Q + Math.random() * (re + 1 - Q));
    }, X = [], Z = 0; Z < oe(w, S); Z++)
      X.push(oe(_, E));
    return X;
  }, O = f.useRef(D()), R = function() {
    return i.selectedList.includes(m);
  }, P = f.useState(R()), A = ve(P, 2), B = A[0], $ = A[1], K = f.useRef(null), L = f.useRef(h ? "radio" : "check"), I = f.useRef(h ? "radio" : "checkbox");
  f.useEffect(function() {
    var V = R();
    V !== B && $(V);
  }, [i]);
  var F = function(oe) {
    var X = [], Z = 0, se = function(He) {
      return "".concat(y, " ").concat(Z, "px, ").concat(y, " ").concat(Z + He, "px, #fff ").concat(Z + He, "px, #fff ").concat(Z + He + b, "px");
    }, Q = ye(oe), re;
    try {
      for (Q.s(); !(re = Q.n()).done; ) {
        var De = re.value;
        X.push(se(De)), Z += De + b;
      }
    } catch (Y) {
      Q.e(Y);
    } finally {
      Q.f();
    }
    return "linear-gradient(to right, ".concat(X.join(","), ")");
  }, de = function() {
    C || l(a, !B);
  }, T = m ? "" : " item-is-empty", M = g && d ? " item-has-children" : "", ie = C ? " item-is-unavailable" : "", z = v || JV;
  return /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("div", {
    className: "tf_smartlist-item".concat(T).concat(M).concat(ie).concat(B ? " selected" : ""),
    style: {
      height: "".concat(c, "px")
    },
    index: s,
    onClick: de
  }, /* @__PURE__ */ f.createElement("div", {
    className: "tf_smartitem"
  }, /* @__PURE__ */ f.createElement(QV, n), fe.parseParams(u == null || (r = u.line) === null || r === void 0 ? void 0 : r.select).show && /* @__PURE__ */ f.createElement("div", {
    className: "tf_form-".concat(L.current)
  }, /* @__PURE__ */ f.createElement("input", {
    ref: K,
    className: "tf_form-".concat(L.current, "-input"),
    name: "selectedGroup",
    type: I.current,
    checked: B,
    onChange: function() {
    }
  })), /* @__PURE__ */ f.createElement(z, le({}, n, {
    skeleton: typeof m > "u" ? F(O.current) : null,
    itemIsEmptyClass: T,
    getChecked: R,
    checked: B,
    onChange: function() {
    }
  })))));
}, QV = function(t) {
  var r = le({}, (Je(t), t)), n = r.item, a = r.options, i = r.deltaLevel, o = a.selectedRoots, s = n.level, l = n.l, u = n.id, c = n.hasChildren, d = !u, h = d ? l : s;
  h += i || 0;
  var p = o !== !1, v = fe.monoArray(h + (!c && p), !0);
  return /* @__PURE__ */ f.createElement(f.Fragment, null, v.map(function() {
    return /* @__PURE__ */ f.createElement("div", {
      className: "s-em"
    });
  }));
}, JV = function(t) {
  var r = le({}, (Je(t), t)), n = r.actionsMode, a = r.item, i = r.searchContext, o = r.options, s = r.skeleton, l = o.highlightFound, u = a.id, c = a.label, d = f.useRef(u && c === $t.newItemLabel), h = function() {
    return d.current ? "" : u ? i && l ? fe.textWithSearchContext(c, i || "") : c : $t.emptyText;
  }, p = f.useRef(h()), v = n === $t.actionModes.edit || n === $t.actionModes.addLine;
  return /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("div", {
    className: "tf_smartitem-name".concat(d.current ? " no-name" : ""),
    contentEditable: v,
    dangerouslySetInnerHTML: {
      __html: p.current
    },
    style: s ? {
      backgroundImage: s
    } : {}
  }));
};
if (!Cu)
  throw new Error("mobx-react-lite requires React with Hooks support");
if (!h_)
  throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function ZV(e) {
  e();
}
function eU(e) {
  e || (e = ZV, process.env.NODE_ENV !== "production" && console.warn("[MobX] Failed to get unstable_batched updates from react-dom / react-native")), PW({ reactionScheduler: e });
}
function tU(e) {
  return c_(e);
}
var rU = 1e4, nU = 1e4, aU = (
  /** @class */
  function() {
    function e(t) {
      var r = this;
      Object.defineProperty(this, "finalize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
      }), Object.defineProperty(this, "registrations", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /* @__PURE__ */ new Map()
      }), Object.defineProperty(this, "sweepTimeout", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "sweep", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: function(n) {
          n === void 0 && (n = rU), clearTimeout(r.sweepTimeout), r.sweepTimeout = void 0;
          var a = Date.now();
          r.registrations.forEach(function(i, o) {
            a - i.registeredAt >= n && (r.finalize(i.value), r.registrations.delete(o));
          }), r.registrations.size > 0 && r.scheduleSweep();
        }
      }), Object.defineProperty(this, "finalizeAllImmediately", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: function() {
          r.sweep(0);
        }
      });
    }
    return Object.defineProperty(e.prototype, "register", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function(t, r, n) {
        this.registrations.set(n, {
          value: r,
          registeredAt: Date.now()
        }), this.scheduleSweep();
      }
    }), Object.defineProperty(e.prototype, "unregister", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function(t) {
        this.registrations.delete(t);
      }
    }), Object.defineProperty(e.prototype, "scheduleSweep", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function() {
        this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, nU));
      }
    }), e;
  }()
), iU = typeof FinalizationRegistry < "u" ? FinalizationRegistry : aU, df = new iU(function(e) {
  var t;
  (t = e.reaction) === null || t === void 0 || t.dispose(), e.reaction = null;
}), am = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e), a, i = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = n.next()).done; ) i.push(a.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return i;
};
function im(e) {
  return "observer".concat(e);
}
var oU = (
  /** @class */
  /* @__PURE__ */ function() {
    function e() {
    }
    return e;
  }()
);
function sU() {
  return new oU();
}
function lU(e, t) {
  t === void 0 && (t = "observed");
  var r = am(f.useState(sU), 1), n = r[0], a = am(f.useState(), 2), i = a[1], o = function() {
    return i([]);
  }, s = f.useRef(null);
  s.current || (s.current = {
    reaction: null,
    mounted: !1,
    changedBeforeMount: !1
  });
  var l = s.current;
  l.reaction || (l.reaction = new Fr(im(t), function() {
    l.mounted ? o() : l.changedBeforeMount = !0;
  }), df.register(n, l, l)), f.useDebugValue(l.reaction, tU), f.useEffect(function() {
    return df.unregister(l), l.mounted = !0, l.reaction ? l.changedBeforeMount && (l.changedBeforeMount = !1, o()) : (l.reaction = new Fr(im(t), function() {
      o();
    }), o()), function() {
      l.reaction.dispose(), l.reaction = null, l.mounted = !1, l.changedBeforeMount = !1;
    };
  }, []);
  var u, c;
  if (l.reaction.track(function() {
    try {
      u = e();
    } catch (d) {
      c = d;
    }
  }), c)
    throw c;
  return u;
}
var om = !0, z_ = typeof Symbol == "function" && Symbol.for, sm = z_ ? Symbol.for("react.forward_ref") : typeof _d == "function" && _d(function(e) {
  return null;
}).$$typeof, lm = z_ ? Symbol.for("react.memo") : typeof Il == "function" && Il(function(e) {
  return null;
}).$$typeof;
function uU(e, t) {
  var r;
  if (process.env.NODE_ENV !== "production" && om && t && (om = !1, console.warn("[mobx-react-lite] `observer(fn, { forwardRef: true })` is deprecated, use `observer(React.forwardRef(fn))`")), lm && e.$$typeof === lm)
    throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");
  var n = (r = void 0) !== null && r !== void 0 ? r : !1, a = e, i = e.displayName || e.name;
  if (sm && e.$$typeof === sm && (n = !0, a = e.render, typeof a != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var o = function(s, l) {
    return lU(function() {
      return a(s, l);
    }, i);
  };
  return i !== "" && (o.displayName = i), e.contextTypes && (o.contextTypes = e.contextTypes), n && (o = _d(o)), o = Il(o), dU(e, o), process.env.NODE_ENV !== "production" && Object.defineProperty(o, "contextTypes", {
    set: function() {
      var s;
      throw new Error("[mobx-react-lite] `".concat(this.displayName || ((s = this.type) === null || s === void 0 ? void 0 : s.displayName) || "Component", ".contextTypes` must be set before applying `observer`."));
    }
  }), o;
}
var cU = {
  $$typeof: !0,
  render: !0,
  compare: !0,
  type: !0,
  // Don't redefine `displayName`,
  // it's defined as getter-setter pair on `memo` (see #3192).
  displayName: !0
};
function dU(e, t) {
  Object.keys(e).forEach(function(r) {
    cU[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
process.env.NODE_ENV;
var rd;
eU(cS);
rd = df.finalizeAllImmediately;
var um = 0;
function fU(e) {
  if (typeof Symbol == "function")
    return Symbol(e);
  var t = "__$mobx-react " + e + " (" + um + ")";
  return um++, t;
}
var nd = {};
function Da(e) {
  return nd[e] || (nd[e] = fU(e)), nd[e];
}
function q_(e, t) {
  if (cm(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length)
    return !1;
  for (var a = 0; a < r.length; a++)
    if (!Object.hasOwnProperty.call(t, r[a]) || !cm(e[r[a]], t[r[a]]))
      return !1;
  return !0;
}
function cm(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Vn(e, t, r) {
  Object.hasOwnProperty.call(e, t) ? e[t] = r : Object.defineProperty(e, t, {
    enumerable: !1,
    configurable: !0,
    writable: !0,
    value: r
  });
}
var dm = /* @__PURE__ */ Da("patchMixins"), K_ = /* @__PURE__ */ Da("patchedDefinition");
function hU(e, t) {
  var r = e[dm] = e[dm] || {}, n = r[t] = r[t] || {};
  return n.locks = n.locks || 0, n.methods = n.methods || [], n;
}
function fm(e, t) {
  for (var r = this, n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    a[i - 2] = arguments[i];
  t.locks++;
  try {
    var o;
    return e != null && (o = e.apply(this, a)), o;
  } finally {
    t.locks--, t.locks === 0 && t.methods.forEach(function(s) {
      s.apply(r, a);
    });
  }
}
function hm(e, t) {
  var r = function() {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    fm.call.apply(fm, [this, e, t].concat(i));
  };
  return r;
}
function pm(e, t, r) {
  var n = hU(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var a = Object.getOwnPropertyDescriptor(e, t);
  if (!(a && a[K_])) {
    var i = e[t], o = X_(e, t, a ? a.enumerable : void 0, n, i);
    Object.defineProperty(e, t, o);
  }
}
function X_(e, t, r, n, a) {
  var i, o = hm(a, n);
  return i = {}, i[K_] = !0, i.get = function() {
    return o;
  }, i.set = function(l) {
    if (this === e)
      o = hm(l, n);
    else {
      var u = X_(this, t, r, n, l);
      Object.defineProperty(this, t, u);
    }
  }, i.configurable = !0, i.enumerable = r, i;
}
var Ji = be || "$mobx", vm = /* @__PURE__ */ Da("isMobXReactObserver"), ff = /* @__PURE__ */ Da("isUnmounted"), cu = /* @__PURE__ */ Da("skipRender"), Dl = /* @__PURE__ */ Da("isForcingUpdate");
function pU(e) {
  var t = e.prototype;
  if (e[vm]) {
    var r = Ol(t);
    console.warn("The provided component class (" + r + `)
                has already been declared as an observer component.`);
  } else
    e[vm] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== ii) {
    if (!t.shouldComponentUpdate)
      t.shouldComponentUpdate = gm;
    else if (t.shouldComponentUpdate !== gm)
      throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.");
  }
  ad(t, "props"), ad(t, "state"), e.contextType && ad(t, "context");
  var n = t.render;
  if (typeof n != "function") {
    var a = Ol(t);
    throw new Error("[mobx-react] class component (" + a + ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.");
  }
  return t.render = function() {
    return this.render = vU.call(this, n), this.render();
  }, pm(t, "componentDidMount", function() {
    this[ff] = !1, this.render[Ji] || tt.prototype.forceUpdate.call(this);
  }), pm(t, "componentWillUnmount", function() {
    var i = this.render[Ji];
    if (i)
      i.dispose(), this.render[Ji] = null;
    else {
      var o = Ol(this);
      console.warn("The reactive render of an observer class component (" + o + `)
                was overridden after MobX attached. This may result in a memory leak if the
                overridden reactive render was not properly disposed.`);
    }
    this[ff] = !0;
  }), e;
}
function Ol(e) {
  return e.displayName || e.name || e.constructor && (e.constructor.displayName || e.constructor.name) || "<component>";
}
function vU(e) {
  var t = this;
  Vn(this, cu, !1), Vn(this, Dl, !1);
  var r = Ol(this), n = e.bind(this), a = !1, i = function() {
    var l = new Fr(r + ".render()", function() {
      if (!a && (a = !0, t[ff] !== !0)) {
        var u = !0;
        try {
          Vn(t, Dl, !0), t[cu] || tt.prototype.forceUpdate.call(t), u = !1;
        } finally {
          Vn(t, Dl, !1), u && (l.dispose(), t.render[Ji] = null);
        }
      }
    });
    return l.reactComponent = t, l;
  };
  function o() {
    var s;
    a = !1;
    var l = (s = o[Ji]) != null ? s : o[Ji] = i(), u = void 0, c = void 0;
    if (l.track(function() {
      try {
        c = zy(!1, n);
      } catch (d) {
        u = d;
      }
    }), u)
      throw u;
    return c;
  }
  return o;
}
function gm(e, t) {
  return this.state !== t ? !0 : !q_(this.props, e);
}
function ad(e, t) {
  var r = Da("reactProp_" + t + "_valueHolder"), n = Da("reactProp_" + t + "_atomHolder");
  function a() {
    return this[n] || Vn(this, n, zh("reactive " + t)), this[n];
  }
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !0,
    get: function() {
      var o = !1;
      return Xi && wa && (o = Xi(!0)), a.call(this).reportObserved(), Xi && wa && wa(o), this[r];
    },
    set: function(o) {
      !this[Dl] && !q_(this[r], o) ? (Vn(this, r, o), Vn(this, cu, !0), a.call(this).reportChanged(), Vn(this, cu, !1)) : Vn(this, r, o);
    }
  });
}
function gU(e) {
  return e.isMobxInjector === !0 && console.warn("Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`"), Object.prototype.isPrototypeOf.call(tt, e) || Object.prototype.isPrototypeOf.call(ii, e) ? pU(e) : uU(e);
}
if (!tt) throw new Error("mobx-react requires React to be available");
if (!Pt) throw new Error("mobx-react requires mobx to be available");
var mU = function(t) {
  var r = le({}, (Je(t), t)), n = r.listName, a = Oe.getState(ge.stateSpinner(n));
  return /* @__PURE__ */ f.createElement("div", {
    className: "spinner",
    style: {
      background: a ? "" : "#fff"
    }
  });
};
const bU = gU(mU);
var $t = {
  lineHeight: 23,
  // высота строки списка по умолчанию в pх
  wheelTimeout: 200,
  // задержка (ms) на запрос к серверу при прокрутке странцы (дребезг скролла)
  searchTimeout: 500,
  // задержка (ms) на запрос к серверу при изменении контекста поиска
  newItemLabel: " ",
  // label нового элемента до тех пор пока его не поменял юзер
  emptyText: "",
  // текст, выводимый в строке, когда она еще не подгружена с сервера и загрузка еще не началась
  emptyId: "",
  // id для пустой строки
  loadingText: "Загрузка...",
  // текст, выводимый в строке во время её загрузки с сервера
  actionModes: {
    // кнопки из Actions
    search: "search",
    // искать
    addLine: "addLine",
    // добавить строку
    edit: "edit"
    // редактировать
  },
  operationCodes: {
    // коды операций из Actions
    actionsAddNewLine: "actions-add-new-line",
    // Добавить строку
    actionsRenameLine: "actions-rename-line",
    // Переименовываем строку
    actionsChangeSelectedLevels: "actions-change-selected-levels",
    // Чекаем по выбору уровня
    // коды операций из меню строки
    itemMenuSelectAllLevels: "item-menu-select-all-levels",
    // Выделить все уровни
    itemMenuSelectChild: "item-menu-select-child",
    // Выделить дочерние
    itemMenuRaiseLevel: "item-menu-raise-level",
    // Повысить уровень
    itemMenuLowerLevel: "item-menu-lower-level",
    // Понизить уровень
    itemMenuAddChild: "item-menu-add-child",
    // Добавить дочерний
    itemMenuDeleteWithLevels: "item-menu-delete-with-levels",
    // Удалить с уровнями
    itemMenuDelete: "item-menu-delete",
    // Удалить
    // коды операций над строкой
    itemSelect: "item-select",
    // Чекнуть строку
    unselectell: "unselect-all",
    // погасить всё
    // коды операций по смене фильтров
    changeSearchContext: "change-search-context",
    // Смена контекста поиска
    changeSearchFilter: "change-search-filter"
    // Смена фильтра
  },
  url: function(t, r) {
    return {
      //            getSearchConstraints:   `/rspa/set/${set_id}/filter_by/`,
      getBlock: "/rspa/set/".concat(t, "/page2/"),
      getCounters: "/rspa/set/".concat(t, "/counters2/"),
      addNewItem: "/rspa/set/".concat(t, "/elements/"),
      renameItem: "/rspa/set/".concat(t, "/elements/").concat(r, "/"),
      deleteItem: "/rspa/set/".concat(t, "/elements/").concat(r, "/"),
      constraints: "/rspa/set/".concat(t, "/constraints/")
    };
  }
}, ge = {
  widgetName: "setpicker",
  // имя хранилища данных виджета setPicker
  dataName: {
    // наименования полей в хранилище
    sessionOptions: "_sessionOptions",
    mainOptions: "_mainOptions",
    pagesOptions: "_pagesOptions",
    rootsOptions: "_rootsOptions",
    //        searchConstraints: '_searchConstraints',
    pagesIndexes: "_pagesIndexes"
  },
  initStates: {
    spinner: !1,
    spinner2: !1
  },
  initCommonStates: {
    currentListName: void 0,
    listNames: {}
  }
};
ge.pagesData = function(e) {
  return "".concat(ge.widgetName, "-pagesData-").concat(e);
};
ge.pageData = function(e, t, r) {
  return "".concat(ge.pagesData(e), ".").concat(t, ".").concat(r);
};
ge.sessionOptionsIndex = function(e) {
  return "".concat(ge.pagesData(e), ".").concat(ge.dataName.sessionOptions);
};
ge.rootsOptionsIndex = function(e) {
  return "".concat(ge.pagesData(e), ".").concat(ge.dataName.rootsOptions);
};
ge.states = function(e) {
  return "".concat(ge.widgetName, "-states-").concat(e);
};
ge.state = function(e, t) {
  return "".concat(ge.states(e), ".").concat(t);
};
ge.stateSpinner = function(e) {
  return "".concat(ge.states(e), ".spinner");
};
ge.stateSpinner2 = function(e) {
  return "".concat(ge.states(e), ".spinner2");
};
ge.commonStates = function() {
  return "".concat(ge.widgetName, "-commonStates");
};
ge.currentListName = function() {
  return "".concat(ge.commonStates(), ".currentListName");
};
ge.listNams = function() {
  return "".concat(ge.commonStates(), ".listNames");
};
var yU = /* @__PURE__ */ function() {
  function e(t) {
    var r = t.finalList;
    go(this, e), _t(this, "blockDataConverter", function(n) {
      var a = n.searchContext, i = n.page;
      return function(o) {
        var s = Array.isArray(o) ? o : [o], l = {
          data: s.map(function(u) {
            return {
              id: u || $t.emptyId,
              label: u
            };
          }),
          searchContext: a || "",
          page: i
        };
        return l;
      };
    }), this.finalList = r || null, this.indexDetails = {
      zeroSearch: "<ALL>",
      selectedSearch: "<SELECTED ONLY>"
    }, this.showSelectedListMode = !1, this.error = {
      pageReadingError: "*** ОШИБКА ЧТЕНИЯ СТРАНИЦЫ ***"
    };
  }
  return mo(e, [{
    key: "getFilterIndex",
    value: function(r) {
      return "search=".concat(this.showSelectedListMode ? this.indexDetails.selectedSearch : r || this.indexDetails.zeroSearch);
    }
  }, {
    key: "getPagesIndex",
    value: function(r, n) {
      return "".concat(this.getFilterIndex(r), " id=").concat(n || 0);
    }
  }, {
    key: "getPageIndex",
    value: function(r, n) {
      return "".concat(r, " page=").concat(n || 0);
    }
  }, {
    key: "spinner",
    value: function(r, n) {
      var a = ge.stateSpinner(r), i = Oe.getState(a);
      i !== n && Oe.setState(a, n);
    }
  }, {
    key: "storeSavePage",
    value: (
      /*************************************************************************************************************** */
      /********************************************* STORE *********************************************************** */
      /*************************************************************************************************************** */
      function(r) {
        var n = le({}, (Je(r), r)), a = n.listName, i = n.pagesIndex, o = n.pageIndex, s = n.oldList, l = n.data, u = n.callbackForGetBlock, c = l.data, d = l.page, h = l.searchContext, p = h === void 0 ? "" : h, v = i || this.getPagesIndex(p, 0), m = o || this.getPageIndex(v, d), g = s || U({}, Zt(Oe.getState(ge.pagesData(a))));
        g[m] = c, g._rootsOptions = g._rootsOptions || {}, g._rootsOptions[v] = g._rootsOptions[v] || {
          childrenItems: 0,
          pagesCounts: []
        };
        var b = g._rootsOptions[v].childrenItems + c.length;
        g._rootsOptions[v].childrenItems = b, g._rootsOptions[v].pagesCounts.push(c.length), g._items = g._items || {};
        var y = ye(c), w;
        try {
          for (y.s(); !(w = y.n()).done; ) {
            var S = w.value;
            g._items[S.id] = S.label;
          }
        } catch (C) {
          y.e(C);
        } finally {
          y.f();
        }
        if (g._mainOptions || (g._mainOptions = {
          hasParent: !1,
          totalItems: 0,
          pagesCounts: []
        }), !(g._mainOptions[v] && d === 0)) {
          g._pagesOptions = g._pagesOptions || {}, g._pagesOptions[v] = {
            parentID: 0,
            page: d
          };
          var _ = 0;
          g._pagesIndexes = g._pagesIndexes || {}, g._pagesIndexes[v] = {
            searchContext: p,
            parentID: 0,
            pagesIndex: v,
            pageIndex: m,
            pageLevel: _
          }, g._pagesIndexes[m] = {
            searchContext: p,
            parentID: 0,
            page: d,
            pagesIndex: v,
            pageIndex: m,
            pageLevel: _
          }, g._change = {
            searchContext: p,
            parentID: 0,
            pagesIndex: v,
            pageIndex: m,
            page: d
          }, s || Oe.setState(ge.pagesData(a), g);
          var E = {
            childrenItems: b,
            pagesCounts: g._rootsOptions[v].pagesCounts,
            totalItems: b
          };
          (c.length < Qi.listBlockLength || this.finalList) && (E.isFinalTotalCount = !0, E.totalCount = b), this.storeSaveCounters(U(U({}, n), {}, {
            data: E
          })), u && u();
        }
      }
    )
  }, {
    key: "storeSaveCounters",
    value: function(r) {
      var n, a = le({}, (Je(r), r)), i = a.listName, o = a.searchContext, s = o === void 0 ? "" : o, l = a.parentID, u = a.callbackForGetBlock, c = a.data, d = c.totalItems, h = c.totalCount, p = c.childrenItems, v = c.pagesCounts, m = c.isFinalTotalCount, g = this.getPagesIndex(s, l), b = U({}, Zt(Oe.getState(ge.pagesData(i)))), y = h !== void 0 ? h : (n = b._mainOptions[g]) === null || n === void 0 ? void 0 : n.totalCount;
      if (d !== void 0) {
        var w = {
          totalItems: d,
          isFinalTotalCount: !!m,
          totalCount: y,
          pagesCounts: v
        };
        b._mainOptions = U(U(U({}, b._mainOptions), w), {}, _t({}, g, U({}, w)));
      }
      b._rootsOptions[g] = {
        childrenItems: p,
        pagesCounts: v
      }, b._change.forceReBuild = !0, Oe.setState(ge.pagesData(i), b), u && u();
    }
  }, {
    key: "storeSaveTotalCounter",
    value: function(r) {
      var n = le({}, (Je(r), r)), a = n.listName, i = n.searchContext, o = i === void 0 ? "" : i, s = n.parentID, l = n.data, u = this.getPagesIndex(o, s), c = U({}, Zt(Oe.getState(ge.pagesData(a))));
      c._mainOptions.totalCount = l, c._mainOptions[u].totalCount = l, Oe.setState(ge.pagesData(a), c);
    }
  }, {
    key: "storeSaveGlobalTotalCounter",
    value: function(r) {
      var n = le({}, (Je(r), r)), a = n.listName, i = n.searchContext, o = i === void 0 ? "" : i, s = n.parentID, l = n.data, u = this.getPagesIndex("", s), c = U({}, Zt(Oe.getState(ge.pagesData(a))));
      o || (c._mainOptions.totalCount = l), c._mainOptions[u].totalCount = l, Oe.setState(ge.pagesData(a), c);
    }
  }, {
    key: "getSearchArr",
    value: function(r, n) {
      if (!n) return r;
      var a = n.toLowerCase();
      return r.filter(function(i) {
        return ~i.toLowerCase().indexOf(a);
      });
    }
  }, {
    key: "requestGetPage",
    value: function(r) {
      var n = this, a = r.request, i = r.searchContext, o = r.page, s = r.callbackForGetBlock;
      if (this.finalList) {
        var l = this.getSearchArr(this.finalList, i), u = this.blockDataConverter({
          searchContext: i,
          page: o
        })(l);
        this.storeSavePage(U(U({}, r), {}, {
          data: u
        }));
        return;
      }
      var c = a.method, d = c === void 0 ? "get" : c, h = a.url, p = a.registryId, v = a.keys, m = v === void 0 ? {} : v, g = m.pageLength, b = g === void 0 ? "length" : g, y = m.pageNum, w = y === void 0 ? "page_num" : y, S = m.searchContext, _ = S === void 0 ? "search" : S, E = p ? h.replace("<registryId>", p) : h, C = "?".concat(b, "=").concat(Qi.listBlockLength), D = "&".concat(w, "=").concat(o), O = i ? "&".concat(_, "=").concat(i) : "";
      return td[d]({
        url: "".concat(E).concat(C).concat(D).concat(O),
        dataConverter: this.blockDataConverter({
          searchContext: i,
          page: o
        }),
        success: function(P) {
          n.storeSavePage(U(U({}, r), {}, {
            data: P
          }));
        },
        error: function(P) {
          console.error(n.error.pageReadingError, "requestGetPage", P), s();
        }
      });
    }
  }, {
    key: "requestGetTotalCounter",
    value: function(r) {
      var n = this, a = r.request, i = r.searchContext, o = r.callbackForGetBlock, s = r.counterRequest, l = a.method, u = l === void 0 ? "get" : l, c = a.url, d = a.registryId, h = a.keys, p = h === void 0 ? {} : h, v = p.searchContext, m = v === void 0 ? "search" : v, g = p.count, b = g === void 0 ? "count" : g;
      if (!s.current[i]) {
        s.current[i] = !0;
        var y = d ? c.replace("<registryId>", d) : c, w = "?".concat(b, "=true"), S = i ? "&".concat(m, "=").concat(i) : "";
        return td[u]({
          url: "".concat(y).concat(w).concat(S),
          success: function(E) {
            n.storeSaveTotalCounter(U(U({}, r), {}, {
              data: E
            })), s.current[i] = !1;
          },
          error: function(E) {
            console.error(n.error.pageReadingError, "requestGetTotalCounter", E), o(), s.current[i] = !1;
          }
        });
      }
    }
  }, {
    key: "requestGetGlobalTotalCounter",
    value: function(r) {
      var n = this, a = r.request, i = r.callbackForGetBlock, o = r.counterRequest, s = a.method, l = s === void 0 ? "get" : s, u = a.url, c = a.registryId, d = a.keys, h = d === void 0 ? {} : d, p = h.count, v = p === void 0 ? "count" : p, m = this.indexDetails.zeroSearch;
      if (!o.current[m]) {
        o.current[m] = !0;
        var g = c ? u.replace("<registryId>", c) : u, b = "?".concat(v, "=true");
        return td[l]({
          url: "".concat(g).concat(b),
          success: function(w) {
            n.storeSaveGlobalTotalCounter(U(U({}, r), {}, {
              data: w
            })), o.current[m] = !1;
          },
          error: function(w) {
            console.error(n.error.pageReadingError, "requestGetGlobalTotalCounter", w), i(), o.current[m] = !1;
          }
        });
      }
    }
    /*************************************************************************************************************** */
    /********************************************* SELECTED ******************************************************** */
    /*************************************************************************************************************** */
  }, {
    key: "goToSelectedListMode",
    value: function(r) {
      var n = r.listName, a = r.list, i = a.length, o = U({}, Zt(Oe.getState(ge.pagesData(n)))), s = o._items, l = this.getPagesIndex(null, 0), u = this.getPageIndex(l, 0), c = [], d = ye(a), h;
      try {
        for (d.s(); !(h = d.n()).done; ) {
          var p = h.value;
          c.push({
            id: p,
            label: s[p]
          });
        }
      } catch (g) {
        d.e(g);
      } finally {
        d.f();
      }
      o[u] = c, o._rootsOptions[l] = {
        childrenItems: i,
        pagesCounts: [i]
      };
      var v = {
        isFinalTotalCount: !0,
        totalItems: i,
        totalCount: i
      }, m = JSON.parse(JSON.stringify(o._mainOptions));
      o._mainOptions = U(U(U({}, o._mainOptions), v), {}, _t(_t({}, l, U({}, v)), "oldMainOptions", m)), Oe.setState(ge.pagesData(n), o);
    }
  }, {
    key: "goFromSelectedListMode",
    value: function(r) {
      var n = r.listName, a = U({}, Zt(Oe.getState(ge.pagesData(n))));
      a._mainOptions = a._mainOptions.oldMainOptions, Oe.setState(ge.pagesData(n), a);
    }
  }]);
}();
function _U(e) {
  var t = e.label, r = t === void 0 ? "" : t, n = e.list, a = n === void 0 ? [] : n, i = e.selectedValue, o = i === void 0 ? "" : i, s = e.selectedValues, l = s === void 0 ? [] : s, u = e.onChange, c = u === void 0 ? function() {
  } : u, d = e.isMultiSelect, h = d === void 0 ? !1 : d, p = e.hideSearchBar, v = p === void 0 ? !1 : p, m = e.hideCountersBar, g = m === void 0 ? !1 : m, b = e.ItemViewName, y = b === void 0 ? !1 : b, w = e.extraClass, S = w === void 0 ? "" : w, _ = f.useRef(null), E = function(A) {
    var B = A.code, $ = A.selectedList;
    B === "item-select" && c({
      inputType: "select",
      label: r,
      list: a,
      selectedValues: $
    });
  }, C = function() {
    return o ? o.split(", ") : l ? Array.isArray(l) ? l : [l] : [];
  }, D = function() {
    return {
      listName: r,
      request: null,
      singleChoiceOnly: !h,
      title: !1,
      selectable: !0,
      finalList: a.map(function(A) {
        return A.label ? A.label : A;
      }),
      unavailableItemsList: a.filter(function(A) {
        return A.notAvailable;
      }).map(function(A) {
        return A.label;
      }),
      highlightFound: !0,
      selectedList: C(),
      strHeight: 18,
      //            callbackOnReadyComponentDOM,
      listBlockLength: a.length,
      hideSearchBar: v,
      hideCountersBar: g,
      ItemViewName: y
    };
  }, O = f.useRef({}), R = f.useRef({});
  return /* @__PURE__ */ f.createElement("div", {
    className: "setpicker-component-root".concat(S ? " " + S : ""),
    ref: _
  }, /* @__PURE__ */ f.createElement(LV, {
    options: D(),
    componentCallback: E,
    componentReturn: O.current,
    setPickerConnector: R.current,
    initStore: !0
  }));
}
function Q_(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (r = Q_(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Lt() {
  for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++) (e = arguments[r]) && (t = Q_(e)) && (n && (n += " "), n += t);
  return n;
}
function ne(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function Qe(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ra(e, t) {
  const r = ne(e);
  return isNaN(t) ? Qe(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function en(e, t) {
  const r = ne(e);
  if (isNaN(t)) return Qe(e, NaN);
  if (!t)
    return r;
  const n = r.getDate(), a = Qe(e, r.getTime());
  a.setMonth(r.getMonth() + t + 1, 0);
  const i = a.getDate();
  return n >= i ? a : (r.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    n
  ), r);
}
function ip(e, t) {
  const r = +ne(e);
  return Qe(e, r + t);
}
const J_ = 6048e5, wU = 864e5, vc = 6e4, gc = 36e5, SU = 1e3;
function xU(e, t) {
  return ip(e, t * gc);
}
let EU = {};
function gi() {
  return EU;
}
function tn(e, t) {
  var s, l, u, c;
  const r = gi(), n = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? r.weekStartsOn ?? ((c = (u = r.locale) == null ? void 0 : u.options) == null ? void 0 : c.weekStartsOn) ?? 0, a = ne(e), i = a.getDay(), o = (i < n ? 7 : 0) + i - n;
  return a.setDate(a.getDate() - o), a.setHours(0, 0, 0, 0), a;
}
function so(e) {
  return tn(e, { weekStartsOn: 1 });
}
function Z_(e) {
  const t = ne(e), r = t.getFullYear(), n = Qe(e, 0);
  n.setFullYear(r + 1, 0, 4), n.setHours(0, 0, 0, 0);
  const a = so(n), i = Qe(e, 0);
  i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
  const o = so(i);
  return t.getTime() >= a.getTime() ? r + 1 : t.getTime() >= o.getTime() ? r : r - 1;
}
function ti(e) {
  const t = ne(e);
  return t.setHours(0, 0, 0, 0), t;
}
function du(e) {
  const t = ne(e), r = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return r.setUTCFullYear(t.getFullYear()), +e - +r;
}
function lo(e, t) {
  const r = ti(e), n = ti(t), a = +r - du(r), i = +n - du(n);
  return Math.round((a - i) / wU);
}
function CU(e) {
  const t = Z_(e), r = Qe(e, 0);
  return r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0), so(r);
}
function hf(e, t) {
  return ip(e, t * vc);
}
function op(e, t) {
  const r = t * 3;
  return en(e, r);
}
function DU(e, t) {
  return ip(e, t * 1e3);
}
function fu(e, t) {
  const r = t * 7;
  return ra(e, r);
}
function Xn(e, t) {
  return en(e, t * 12);
}
function mm(e) {
  let t;
  return e.forEach(function(r) {
    const n = ne(r);
    (t === void 0 || t < n || isNaN(Number(n))) && (t = n);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function bm(e) {
  let t;
  return e.forEach((r) => {
    const n = ne(r);
    (!t || t > n || isNaN(+n)) && (t = n);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function OU(e, t) {
  const r = ti(e), n = ti(t);
  return +r == +n;
}
function Qn(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function hu(e) {
  if (!Qn(e) && typeof e != "number")
    return !1;
  const t = ne(e);
  return !isNaN(Number(t));
}
function pu(e, t) {
  const r = ne(e), n = ne(t), a = r.getFullYear() - n.getFullYear(), i = r.getMonth() - n.getMonth();
  return a * 12 + i;
}
function Ua(e) {
  const t = ne(e);
  return Math.trunc(t.getMonth() / 3) + 1;
}
function vu(e, t) {
  const r = ne(e), n = ne(t), a = r.getFullYear() - n.getFullYear(), i = Ua(r) - Ua(n);
  return a * 4 + i;
}
function gu(e, t) {
  const r = ne(e), n = ne(t);
  return r.getFullYear() - n.getFullYear();
}
function TU(e, t) {
  const r = ne(e), n = ne(t), a = ym(r, n), i = Math.abs(lo(r, n));
  r.setDate(r.getDate() - a * i);
  const o = +(ym(r, n) === -a), s = a * (i - o);
  return s === 0 ? 0 : s;
}
function ym(e, t) {
  const r = e.getFullYear() - t.getFullYear() || e.getMonth() - t.getMonth() || e.getDate() - t.getDate() || e.getHours() - t.getHours() || e.getMinutes() - t.getMinutes() || e.getSeconds() - t.getSeconds() || e.getMilliseconds() - t.getMilliseconds();
  return r < 0 ? -1 : r > 0 ? 1 : r;
}
function ew(e) {
  const t = ne(e);
  return t.setHours(23, 59, 59, 999), t;
}
function tw(e) {
  const t = ne(e), r = t.getMonth();
  return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function pf(e) {
  const t = ne(e), r = t.getMonth(), n = r - r % 3;
  return t.setMonth(n, 1), t.setHours(0, 0, 0, 0), t;
}
function rw(e) {
  const t = ne(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function nw(e) {
  const t = ne(e), r = t.getFullYear();
  return t.setFullYear(r + 1, 0, 0), t.setHours(23, 59, 59, 999), t;
}
function mc(e) {
  const t = ne(e), r = Qe(e, 0);
  return r.setFullYear(t.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
function kU(e, t) {
  var s, l;
  const r = gi(), n = r.weekStartsOn ?? ((l = (s = r.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? 0, a = ne(e), i = a.getDay(), o = (i < n ? -7 : 0) + 6 - (i - n);
  return a.setDate(a.getDate() + o), a.setHours(23, 59, 59, 999), a;
}
const RU = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, PU = (e, t, r) => {
  let n;
  const a = RU[e];
  return typeof a == "string" ? n = a : t === 1 ? n = a.one : n = a.other.replace("{{count}}", t.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
function Zi(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const NU = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, MU = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, AU = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, IU = {
  date: Zi({
    formats: NU,
    defaultWidth: "full"
  }),
  time: Zi({
    formats: MU,
    defaultWidth: "full"
  }),
  dateTime: Zi({
    formats: AU,
    defaultWidth: "full"
  })
}, $U = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, LU = (e, t, r, n) => $U[e];
function vn(e) {
  return (t, r) => {
    const n = r != null && r.context ? String(r.context) : "standalone";
    let a;
    if (n === "formatting" && e.formattingValues) {
      const o = e.defaultFormattingWidth || e.defaultWidth, s = r != null && r.width ? String(r.width) : o;
      a = e.formattingValues[s] || e.formattingValues[o];
    } else {
      const o = e.defaultWidth, s = r != null && r.width ? String(r.width) : e.defaultWidth;
      a = e.values[s] || e.values[o];
    }
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[i];
  };
}
const FU = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, HU = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, BU = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, jU = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, YU = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, WU = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, VU = (e, t) => {
  const r = Number(e), n = r % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, UU = {
  ordinalNumber: VU,
  era: vn({
    values: FU,
    defaultWidth: "wide"
  }),
  quarter: vn({
    values: HU,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: vn({
    values: BU,
    defaultWidth: "wide"
  }),
  day: vn({
    values: jU,
    defaultWidth: "wide"
  }),
  dayPeriod: vn({
    values: YU,
    defaultWidth: "wide",
    formattingValues: WU,
    defaultFormattingWidth: "wide"
  })
};
function gn(e) {
  return (t, r = {}) => {
    const n = r.width, a = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], i = t.match(a);
    if (!i)
      return null;
    const o = i[0], s = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(s) ? zU(s, (d) => d.test(o)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      GU(s, (d) => d.test(o))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(l) : l, u = r.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      r.valueCallback(u)
    ) : u;
    const c = t.slice(o.length);
    return { value: u, rest: c };
  };
}
function GU(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function zU(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function aw(e) {
  return (t, r = {}) => {
    const n = t.match(e.matchPattern);
    if (!n) return null;
    const a = n[0], i = t.match(e.parsePattern);
    if (!i) return null;
    let o = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    o = r.valueCallback ? r.valueCallback(o) : o;
    const s = t.slice(a.length);
    return { value: o, rest: s };
  };
}
const qU = /^(\d+)(th|st|nd|rd)?/i, KU = /\d+/i, XU = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, QU = {
  any: [/^b/i, /^(a|c)/i]
}, JU = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, ZU = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, e6 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, t6 = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, r6 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, n6 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, a6 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, i6 = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, o6 = {
  ordinalNumber: aw({
    matchPattern: qU,
    parsePattern: KU,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: gn({
    matchPatterns: XU,
    defaultMatchWidth: "wide",
    parsePatterns: QU,
    defaultParseWidth: "any"
  }),
  quarter: gn({
    matchPatterns: JU,
    defaultMatchWidth: "wide",
    parsePatterns: ZU,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: gn({
    matchPatterns: e6,
    defaultMatchWidth: "wide",
    parsePatterns: t6,
    defaultParseWidth: "any"
  }),
  day: gn({
    matchPatterns: r6,
    defaultMatchWidth: "wide",
    parsePatterns: n6,
    defaultParseWidth: "any"
  }),
  dayPeriod: gn({
    matchPatterns: a6,
    defaultMatchWidth: "any",
    parsePatterns: i6,
    defaultParseWidth: "any"
  })
}, iw = {
  code: "en-US",
  formatDistance: PU,
  formatLong: IU,
  formatRelative: LU,
  localize: UU,
  match: o6,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function s6(e) {
  const t = ne(e);
  return lo(t, mc(t)) + 1;
}
function sp(e) {
  const t = ne(e), r = +so(t) - +CU(t);
  return Math.round(r / J_) + 1;
}
function lp(e, t) {
  var c, d, h, p;
  const r = ne(e), n = r.getFullYear(), a = gi(), i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (c = t == null ? void 0 : t.locale) == null ? void 0 : c.options) == null ? void 0 : d.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((p = (h = a.locale) == null ? void 0 : h.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, o = Qe(e, 0);
  o.setFullYear(n + 1, 0, i), o.setHours(0, 0, 0, 0);
  const s = tn(o, t), l = Qe(e, 0);
  l.setFullYear(n, 0, i), l.setHours(0, 0, 0, 0);
  const u = tn(l, t);
  return r.getTime() >= s.getTime() ? n + 1 : r.getTime() >= u.getTime() ? n : n - 1;
}
function l6(e, t) {
  var s, l, u, c;
  const r = gi(), n = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((c = (u = r.locale) == null ? void 0 : u.options) == null ? void 0 : c.firstWeekContainsDate) ?? 1, a = lp(e, t), i = Qe(e, 0);
  return i.setFullYear(a, 0, n), i.setHours(0, 0, 0, 0), tn(i, t);
}
function ow(e, t) {
  const r = ne(e), n = +tn(r, t) - +l6(r, t);
  return Math.round(n / J_) + 1;
}
function Xe(e, t) {
  const r = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(t, "0");
  return r + n;
}
const ha = {
  // Year
  y(e, t) {
    const r = e.getFullYear(), n = r > 0 ? r : 1 - r;
    return Xe(t === "yy" ? n % 100 : n, t.length);
  },
  // Month
  M(e, t) {
    const r = e.getMonth();
    return t === "M" ? String(r + 1) : Xe(r + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Xe(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const r = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return Xe(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Xe(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Xe(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Xe(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const r = t.length, n = e.getMilliseconds(), a = Math.trunc(
      n * Math.pow(10, r - 3)
    );
    return Xe(a, t.length);
  }
}, wi = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, _m = {
  // Era
  G: function(e, t, r) {
    const n = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(n, { width: "abbreviated" });
      case "GGGGG":
        return r.era(n, { width: "narrow" });
      case "GGGG":
      default:
        return r.era(n, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, r) {
    if (t === "yo") {
      const n = e.getFullYear(), a = n > 0 ? n : 1 - n;
      return r.ordinalNumber(a, { unit: "year" });
    }
    return ha.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, r, n) {
    const a = lp(e, n), i = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const o = i % 100;
      return Xe(o, 2);
    }
    return t === "Yo" ? r.ordinalNumber(i, { unit: "year" }) : Xe(i, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const r = Z_(e);
    return Xe(r, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const r = e.getFullYear();
    return Xe(r, t.length);
  },
  // Quarter
  Q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(n);
      case "QQ":
        return Xe(n, 2);
      case "Qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      case "QQQ":
        return r.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(n);
      case "qq":
        return Xe(n, 2);
      case "qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      case "qqq":
        return r.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, r) {
    const n = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return ha.M(e, t);
      case "Mo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      case "MMM":
        return r.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(n, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(n, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, r) {
    const n = e.getMonth();
    switch (t) {
      case "L":
        return String(n + 1);
      case "LL":
        return Xe(n + 1, 2);
      case "Lo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      case "LLL":
        return r.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(n, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(n, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, r, n) {
    const a = ow(e, n);
    return t === "wo" ? r.ordinalNumber(a, { unit: "week" }) : Xe(a, t.length);
  },
  // ISO week of year
  I: function(e, t, r) {
    const n = sp(e);
    return t === "Io" ? r.ordinalNumber(n, { unit: "week" }) : Xe(n, t.length);
  },
  // Day of the month
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : ha.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    const n = s6(e);
    return t === "Do" ? r.ordinalNumber(n, { unit: "dayOfYear" }) : Xe(n, t.length);
  },
  // Day of week
  E: function(e, t, r) {
    const n = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, r, n) {
    const a = e.getDay(), i = (a - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(i);
      case "ee":
        return Xe(i, 2);
      case "eo":
        return r.ordinalNumber(i, { unit: "day" });
      case "eee":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, r, n) {
    const a = e.getDay(), i = (a - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(i);
      case "cc":
        return Xe(i, t.length);
      case "co":
        return r.ordinalNumber(i, { unit: "day" });
      case "ccc":
        return r.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, r) {
    const n = e.getDay(), a = n === 0 ? 7 : n;
    switch (t) {
      case "i":
        return String(a);
      case "ii":
        return Xe(a, t.length);
      case "io":
        return r.ordinalNumber(a, { unit: "day" });
      case "iii":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, r) {
    const a = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, r) {
    const n = e.getHours();
    let a;
    switch (n === 12 ? a = wi.noon : n === 0 ? a = wi.midnight : a = n / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, r) {
    const n = e.getHours();
    let a;
    switch (n >= 17 ? a = wi.evening : n >= 12 ? a = wi.afternoon : n >= 4 ? a = wi.morning : a = wi.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, r) {
    if (t === "ho") {
      let n = e.getHours() % 12;
      return n === 0 && (n = 12), r.ordinalNumber(n, { unit: "hour" });
    }
    return ha.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, r) {
    return t === "Ho" ? r.ordinalNumber(e.getHours(), { unit: "hour" }) : ha.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, r) {
    const n = e.getHours() % 12;
    return t === "Ko" ? r.ordinalNumber(n, { unit: "hour" }) : Xe(n, t.length);
  },
  // Hour [1-24]
  k: function(e, t, r) {
    let n = e.getHours();
    return n === 0 && (n = 24), t === "ko" ? r.ordinalNumber(n, { unit: "hour" }) : Xe(n, t.length);
  },
  // Minute
  m: function(e, t, r) {
    return t === "mo" ? r.ordinalNumber(e.getMinutes(), { unit: "minute" }) : ha.m(e, t);
  },
  // Second
  s: function(e, t, r) {
    return t === "so" ? r.ordinalNumber(e.getSeconds(), { unit: "second" }) : ha.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return ha.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (t) {
      case "X":
        return Sm(n);
      case "XXXX":
      case "XX":
        return Fa(n);
      case "XXXXX":
      case "XXX":
      default:
        return Fa(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return Sm(n);
      case "xxxx":
      case "xx":
        return Fa(n);
      case "xxxxx":
      case "xxx":
      default:
        return Fa(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + wm(n, ":");
      case "OOOO":
      default:
        return "GMT" + Fa(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + wm(n, ":");
      case "zzzz":
      default:
        return "GMT" + Fa(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, r) {
    const n = Math.trunc(e.getTime() / 1e3);
    return Xe(n, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, r) {
    const n = e.getTime();
    return Xe(n, t.length);
  }
};
function wm(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), a = Math.trunc(n / 60), i = n % 60;
  return i === 0 ? r + String(a) : r + String(a) + t + Xe(i, 2);
}
function Sm(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Xe(Math.abs(e) / 60, 2) : Fa(e, t);
}
function Fa(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), a = Xe(Math.trunc(n / 60), 2), i = Xe(n % 60, 2);
  return r + a + t + i;
}
const xm = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, sw = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, u6 = (e, t) => {
  const r = e.match(/(P+)(p+)?/) || [], n = r[1], a = r[2];
  if (!a)
    return xm(e, t);
  let i;
  switch (n) {
    case "P":
      i = t.dateTime({ width: "short" });
      break;
    case "PP":
      i = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      i = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      i = t.dateTime({ width: "full" });
      break;
  }
  return i.replace("{{date}}", xm(n, t)).replace("{{time}}", sw(a, t));
}, mu = {
  p: sw,
  P: u6
}, c6 = /^D+$/, d6 = /^Y+$/, f6 = ["D", "DD", "YY", "YYYY"];
function lw(e) {
  return c6.test(e);
}
function uw(e) {
  return d6.test(e);
}
function vf(e, t, r) {
  const n = h6(e, t, r);
  if (console.warn(n), f6.includes(e)) throw new RangeError(n);
}
function h6(e, t, r) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const p6 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, v6 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, g6 = /^'([^]*?)'?$/, m6 = /''/g, b6 = /[a-zA-Z]/;
function Em(e, t, r) {
  var c, d, h, p, v, m, g, b;
  const n = gi(), a = (r == null ? void 0 : r.locale) ?? n.locale ?? iw, i = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((d = (c = r == null ? void 0 : r.locale) == null ? void 0 : c.options) == null ? void 0 : d.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((p = (h = n.locale) == null ? void 0 : h.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, o = (r == null ? void 0 : r.weekStartsOn) ?? ((m = (v = r == null ? void 0 : r.locale) == null ? void 0 : v.options) == null ? void 0 : m.weekStartsOn) ?? n.weekStartsOn ?? ((b = (g = n.locale) == null ? void 0 : g.options) == null ? void 0 : b.weekStartsOn) ?? 0, s = ne(e);
  if (!hu(s))
    throw new RangeError("Invalid time value");
  let l = t.match(v6).map((y) => {
    const w = y[0];
    if (w === "p" || w === "P") {
      const S = mu[w];
      return S(y, a.formatLong);
    }
    return y;
  }).join("").match(p6).map((y) => {
    if (y === "''")
      return { isToken: !1, value: "'" };
    const w = y[0];
    if (w === "'")
      return { isToken: !1, value: y6(y) };
    if (_m[w])
      return { isToken: !0, value: y };
    if (w.match(b6))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + w + "`"
      );
    return { isToken: !1, value: y };
  });
  a.localize.preprocessor && (l = a.localize.preprocessor(s, l));
  const u = {
    firstWeekContainsDate: i,
    weekStartsOn: o,
    locale: a
  };
  return l.map((y) => {
    if (!y.isToken) return y.value;
    const w = y.value;
    (!(r != null && r.useAdditionalWeekYearTokens) && uw(w) || !(r != null && r.useAdditionalDayOfYearTokens) && lw(w)) && vf(w, t, String(e));
    const S = _m[w[0]];
    return S(s, w, a.localize, u);
  }).join("");
}
function y6(e) {
  const t = e.match(g6);
  return t ? t[1].replace(m6, "'") : e;
}
function Cm(e) {
  return ne(e).getDate();
}
function _6(e) {
  return ne(e).getDay();
}
function w6(e) {
  const t = ne(e), r = t.getFullYear(), n = t.getMonth(), a = Qe(e, 0);
  return a.setFullYear(r, n + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function S6() {
  return Object.assign({}, gi());
}
function Cn(e) {
  return ne(e).getHours();
}
function x6(e) {
  let r = ne(e).getDay();
  return r === 0 && (r = 7), r;
}
function Dn(e) {
  return ne(e).getMinutes();
}
function Ht(e) {
  return ne(e).getMonth();
}
function Jn(e) {
  return ne(e).getSeconds();
}
function gf(e) {
  return ne(e).getTime();
}
function xe(e) {
  return ne(e).getFullYear();
}
function Oa(e, t) {
  const r = ne(e), n = ne(t);
  return r.getTime() > n.getTime();
}
function ri(e, t) {
  const r = ne(e), n = ne(t);
  return +r < +n;
}
function E6(e, t) {
  const r = ne(e), n = ne(t);
  return +r == +n;
}
function C6(e, t) {
  const r = t instanceof Date ? Qe(t, 0) : new t(0);
  return r.setFullYear(
    e.getFullYear(),
    e.getMonth(),
    e.getDate()
  ), r.setHours(
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  ), r;
}
const D6 = 10;
class cw {
  constructor() {
    ae(this, "subPriority", 0);
  }
  validate(t, r) {
    return !0;
  }
}
class O6 extends cw {
  constructor(t, r, n, a, i) {
    super(), this.value = t, this.validateValue = r, this.setValue = n, this.priority = a, i && (this.subPriority = i);
  }
  validate(t, r) {
    return this.validateValue(t, this.value, r);
  }
  set(t, r, n) {
    return this.setValue(t, r, this.value, n);
  }
}
class T6 extends cw {
  constructor() {
    super(...arguments);
    ae(this, "priority", D6);
    ae(this, "subPriority", -1);
  }
  set(r, n) {
    return n.timestampIsSet ? r : Qe(r, C6(r, Date));
  }
}
class Ue {
  run(t, r, n, a) {
    const i = this.parse(t, r, n, a);
    return i ? {
      setter: new O6(
        i.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: i.rest
    } : null;
  }
  validate(t, r, n) {
    return !0;
  }
}
class k6 extends Ue {
  constructor() {
    super(...arguments);
    ae(this, "priority", 140);
    ae(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(r, n, a) {
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return a.era(r, { width: "abbreviated" }) || a.era(r, { width: "narrow" });
      case "GGGGG":
        return a.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return a.era(r, { width: "wide" }) || a.era(r, { width: "abbreviated" }) || a.era(r, { width: "narrow" });
    }
  }
  set(r, n, a) {
    return n.era = a, r.setFullYear(a, 0, 1), r.setHours(0, 0, 0, 0), r;
  }
}
const Et = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, mn = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function Ct(e, t) {
  return e && {
    value: t(e.value),
    rest: e.rest
  };
}
function gt(e, t) {
  const r = t.match(e);
  return r ? {
    value: parseInt(r[0], 10),
    rest: t.slice(r[0].length)
  } : null;
}
function bn(e, t) {
  const r = t.match(e);
  if (!r)
    return null;
  if (r[0] === "Z")
    return {
      value: 0,
      rest: t.slice(1)
    };
  const n = r[1] === "+" ? 1 : -1, a = r[2] ? parseInt(r[2], 10) : 0, i = r[3] ? parseInt(r[3], 10) : 0, o = r[5] ? parseInt(r[5], 10) : 0;
  return {
    value: n * (a * gc + i * vc + o * SU),
    rest: t.slice(r[0].length)
  };
}
function dw(e) {
  return gt(Et.anyDigitsSigned, e);
}
function wt(e, t) {
  switch (e) {
    case 1:
      return gt(Et.singleDigit, t);
    case 2:
      return gt(Et.twoDigits, t);
    case 3:
      return gt(Et.threeDigits, t);
    case 4:
      return gt(Et.fourDigits, t);
    default:
      return gt(new RegExp("^\\d{1," + e + "}"), t);
  }
}
function bu(e, t) {
  switch (e) {
    case 1:
      return gt(Et.singleDigitSigned, t);
    case 2:
      return gt(Et.twoDigitsSigned, t);
    case 3:
      return gt(Et.threeDigitsSigned, t);
    case 4:
      return gt(Et.fourDigitsSigned, t);
    default:
      return gt(new RegExp("^-?\\d{1," + e + "}"), t);
  }
}
function up(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function fw(e, t) {
  const r = t > 0, n = r ? t : 1 - t;
  let a;
  if (n <= 50)
    a = e || 100;
  else {
    const i = n + 50, o = Math.trunc(i / 100) * 100, s = e >= i % 100;
    a = e + o - (s ? 100 : 0);
  }
  return r ? a : 1 - a;
}
function hw(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
class R6 extends Ue {
  constructor() {
    super(...arguments);
    ae(this, "priority", 130);
    ae(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(r, n, a) {
    const i = (o) => ({
      year: o,
      isTwoDigitYear: n === "yy"
    });
    switch (n) {
      case "y":
        return Ct(wt(4, r), i);
      case "yo":
        return Ct(
          a.ordinalNumber(r, {
            unit: "year"
          }),
          i
        );
      default:
        return Ct(wt(n.length, r), i);
    }
  }
  validate(r, n) {
    return n.isTwoDigitYear || n.year > 0;
  }
  set(r, n, a) {
    const i = r.getFullYear();
    if (a.isTwoDigitYear) {
      const s = fw(
        a.year,
        i
      );
      return r.setFullYear(s, 0, 1), r.setHours(0, 0, 0, 0), r;
    }
    const o = !("era" in n) || n.era === 1 ? a.year : 1 - a.year;
    return r.setFullYear(o, 0, 1), r.setHours(0, 0, 0, 0), r;
  }
}
class P6 extends Ue {
  constructor() {
    super(...arguments);
    ae(this, "priority", 130);
    ae(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(r, n, a) {
    const i = (o) => ({
      year: o,
      isTwoDigitYear: n === "YY"
    });
    switch (n) {
      case "Y":
        return Ct(wt(4, r), i);
      case "Yo":
        return Ct(
          a.ordinalNumber(r, {
            unit: "year"
          }),
          i
        );
      default:
        return Ct(wt(n.length, r), i);
    }
  }
  validate(r, n) {
    return n.isTwoDigitYear || n.year > 0;
  }
  set(r, n, a, i) {
    const o = lp(r, i);
    if (a.isTwoDigitYear) {
      const l = fw(
        a.year,
        o
      );
      return r.setFullYear(
        l,
        0,
        i.firstWeekContainsDate
      ), r.setHours(0, 0, 0, 0), tn(r, i);
    }
    const s = !("era" in n) || n.era === 1 ? a.year : 1 - a.year;
    return r.setFullYear(s, 0, i.firstWeekContainsDate), r.setHours(0, 0, 0, 0), tn(r, i);
  }
}
class N6 extends Ue {
  constructor() {
    super(...arguments);
    ae(this, "priority", 130);
    ae(this, "incompatibleTokens", [
      "G",
      "y",
      "Y",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(r, n) {
    return bu(n === "R" ? 4 : n.length, r);
  }
  set(r, n, a) {
    const i = Qe(r, 0);
    return i.setFullYear(a, 0, 4), i.setHours(0, 0, 0, 0), so(i);
  }
}
class M6 extends Ue {
  constructor() {
    super(...arguments);
    ae(this, "priority", 130);
    ae(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(r, n) {
    return bu(n === "u" ? 4 : n.length, r);
  }
  set(r, n, a) {
    return r.setFullYear(a, 0, 1), r.setHours(0, 0, 0, 0), r;
  }
}
class A6 extends Ue {
  constructor() {
    super(...arguments);
    ae(this, "priority", 120);
    ae(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(r, n, a) {
    switch (n) {
      case "Q":
      case "QQ":
        return wt(n.length, r);
      case "Qo":
        return a.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return a.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        }) || a.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQQ":
        return a.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return a.quarter(r, {
          width: "wide",
          context: "formatting"
        }) || a.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        }) || a.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(r, n) {
    return n >= 1 && n <= 4;
  }
  set(r, n, a) {
    return r.setMonth((a - 1) * 3, 1), r.setHours(0, 0, 0, 0), r;
  }
}
class I6 extends Ue {
  constructor() {
    super(...arguments);
    ae(this, "priority", 120);
    ae(this, "incompatibleTokens", [
      "Y",
      "R",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(r, n, a) {
    switch (n) {
      case "q":
      case "qq":
        return wt(n.length, r);
      case "qo":
        return a.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return a.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        }) || a.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqqq":
        return a.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return a.quarter(r, {
          width: "wide",
          context: "standalone"
        }) || a.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        }) || a.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(r, n) {
    return n >= 1 && n <= 4;
  }
  set(r, n, a) {
    return r.setMonth((a - 1) * 3, 1), r.setHours(0, 0, 0, 0), r;
  }
}
class $6 extends Ue {
  constructor() {
    super(...arguments);
    ae(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "L",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
    ae(this, "priority", 110);
  }
  parse(r, n, a) {
    const i = (o) => o - 1;
    switch (n) {
      case "M":
        return Ct(
          gt(Et.month, r),
          i
        );
      case "MM":
        return Ct(wt(2, r), i);
      case "Mo":
        return Ct(
          a.ordinalNumber(r, {
            unit: "month"
          }),
          i
        );
      case "MMM":
        return a.month(r, {
          width: "abbreviated",
          context: "formatting"
        }) || a.month(r, { width: "narrow", context: "formatting" });
      case "MMMMM":
        return a.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return a.month(r, { width: "wide", context: "formatting" }) || a.month(r, {
          width: "abbreviated",
          context: "formatting"
        }) || a.month(r, { width: "narrow", context: "formatting" });
    }
  }
  validate(r, n) {
    return n >= 0 && n <= 11;
  }
  set(r, n, a) {
    return r.setMonth(a, 1), r.setHours(0, 0, 0, 0), r;
  }
}
class L6 extends Ue {
  constructor() {
    super(...arguments);
    ae(this, "priority", 110);
    ae(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(r, n, a) {
    const i = (o) => o - 1;
    switch (n) {
      case "L":
        return Ct(
          gt(Et.month, r),
          i
        );
      case "LL":
        return Ct(wt(2, r), i);
      case "Lo":
        return Ct(
          a.ordinalNumber(r, {
            unit: "month"
          }),
          i
        );
      case "LLL":
        return a.month(r, {
          width: "abbreviated",
          context: "standalone"
        }) || a.month(r, { width: "narrow", context: "standalone" });
      case "LLLLL":
        return a.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return a.month(r, { width: "wide", context: "standalone" }) || a.month(r, {
          width: "abbreviated",
          context: "standalone"
        }) || a.month(r, { width: "narrow", context: "standalone" });
    }
  }
  validate(r, n) {
    return n >= 0 && n <= 11;
  }
  set(r, n, a) {
    return r.setMonth(a, 1), r.setHours(0, 0, 0, 0), r;
  }
}
function F6(e, t, r) {
  const n = ne(e), a = ow(n, r) - t;
  return n.setDate(n.getDate() - a * 7), n;
}
class H6 extends Ue {
  constructor() {
    super(...arguments);
    ae(this, "priority", 100);
    ae(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(r, n, a) {
    switch (n) {
      case "w":
        return gt(Et.week, r);
      case "wo":
        return a.ordinalNumber(r, { unit: "week" });
      default:
        return wt(n.length, r);
    }
  }
  validate(r, n) {
    return n >= 1 && n <= 53;
  }
  set(r, n, a, i) {
    return tn(F6(r, a, i), i);
  }
}
function B6(e, t) {
  const r = ne(e), n = sp(r) - t;
  return r.setDate(r.getDate() - n * 7), r;
}
class j6 extends Ue {
  constructor() {
    super(...arguments);
    ae(this, "priority", 100);
    ae(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(r, n, a) {
    switch (n) {
      case "I":
        return gt(Et.week, r);
      case "Io":
        return a.ordinalNumber(r, { unit: "week" });
      default:
        return wt(n.length, r);
    }
  }
  validate(r, n) {
    return n >= 1 && n <= 53;
  }
  set(r, n, a) {
    return so(B6(r, a));
  }
}
const Y6 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], W6 = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
class V6 extends Ue {
  constructor() {
    super(...arguments);
    ae(this, "priority", 90);
    ae(this, "subPriority", 1);
    ae(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(r, n, a) {
    switch (n) {
      case "d":
        return gt(Et.date, r);
      case "do":
        return a.ordinalNumber(r, { unit: "date" });
      default:
        return wt(n.length, r);
    }
  }
  validate(r, n) {
    const a = r.getFullYear(), i = hw(a), o = r.getMonth();
    return i ? n >= 1 && n <= W6[o] : n >= 1 && n <= Y6[o];
  }
  set(r, n, a) {
    return r.setDate(a), r.setHours(0, 0, 0, 0), r;
  }
}
class U6 extends Ue {
  constructor() {
    super(...arguments);
    ae(this, "priority", 90);
    ae(this, "subpriority", 1);
    ae(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "E",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(r, n, a) {
    switch (n) {
      case "D":
      case "DD":
        return gt(Et.dayOfYear, r);
      case "Do":
        return a.ordinalNumber(r, { unit: "date" });
      default:
        return wt(n.length, r);
    }
  }
  validate(r, n) {
    const a = r.getFullYear();
    return hw(a) ? n >= 1 && n <= 366 : n >= 1 && n <= 365;
  }
  set(r, n, a) {
    return r.setMonth(0, a), r.setHours(0, 0, 0, 0), r;
  }
}
function cp(e, t, r) {
  var d, h, p, v;
  const n = gi(), a = (r == null ? void 0 : r.weekStartsOn) ?? ((h = (d = r == null ? void 0 : r.locale) == null ? void 0 : d.options) == null ? void 0 : h.weekStartsOn) ?? n.weekStartsOn ?? ((v = (p = n.locale) == null ? void 0 : p.options) == null ? void 0 : v.weekStartsOn) ?? 0, i = ne(e), o = i.getDay(), l = (t % 7 + 7) % 7, u = 7 - a, c = t < 0 || t > 6 ? t - (o + u) % 7 : (l + u) % 7 - (o + u) % 7;
  return ra(i, c);
}
class G6 extends Ue {
  constructor() {
    super(...arguments);
    ae(this, "priority", 90);
    ae(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(r, n, a) {
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return a.day(r, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(r, { width: "short", context: "formatting" }) || a.day(r, { width: "narrow", context: "formatting" });
      case "EEEEE":
        return a.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return a.day(r, { width: "short", context: "formatting" }) || a.day(r, { width: "narrow", context: "formatting" });
      case "EEEE":
      default:
        return a.day(r, { width: "wide", context: "formatting" }) || a.day(r, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(r, { width: "short", context: "formatting" }) || a.day(r, { width: "narrow", context: "formatting" });
    }
  }
  validate(r, n) {
    return n >= 0 && n <= 6;
  }
  set(r, n, a, i) {
    return r = cp(r, a, i), r.setHours(0, 0, 0, 0), r;
  }
}
class z6 extends Ue {
  constructor() {
    super(...arguments);
    ae(this, "priority", 90);
    ae(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "c",
      "t",
      "T"
    ]);
  }
  parse(r, n, a, i) {
    const o = (s) => {
      const l = Math.floor((s - 1) / 7) * 7;
      return (s + i.weekStartsOn + 6) % 7 + l;
    };
    switch (n) {
      case "e":
      case "ee":
        return Ct(wt(n.length, r), o);
      case "eo":
        return Ct(
          a.ordinalNumber(r, {
            unit: "day"
          }),
          o
        );
      case "eee":
        return a.day(r, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(r, { width: "short", context: "formatting" }) || a.day(r, { width: "narrow", context: "formatting" });
      case "eeeee":
        return a.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return a.day(r, { width: "short", context: "formatting" }) || a.day(r, { width: "narrow", context: "formatting" });
      case "eeee":
      default:
        return a.day(r, { width: "wide", context: "formatting" }) || a.day(r, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(r, { width: "short", context: "formatting" }) || a.day(r, { width: "narrow", context: "formatting" });
    }
  }
  validate(r, n) {
    return n >= 0 && n <= 6;
  }
  set(r, n, a, i) {
    return r = cp(r, a, i), r.setHours(0, 0, 0, 0), r;
  }
}
class q6 extends Ue {
  constructor() {
    super(...arguments);
    ae(this, "priority", 90);
    ae(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "e",
      "t",
      "T"
    ]);
  }
  parse(r, n, a, i) {
    const o = (s) => {
      const l = Math.floor((s - 1) / 7) * 7;
      return (s + i.weekStartsOn + 6) % 7 + l;
    };
    switch (n) {
      case "c":
      case "cc":
        return Ct(wt(n.length, r), o);
      case "co":
        return Ct(
          a.ordinalNumber(r, {
            unit: "day"
          }),
          o
        );
      case "ccc":
        return a.day(r, {
          width: "abbreviated",
          context: "standalone"
        }) || a.day(r, { width: "short", context: "standalone" }) || a.day(r, { width: "narrow", context: "standalone" });
      case "ccccc":
        return a.day(r, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return a.day(r, { width: "short", context: "standalone" }) || a.day(r, { width: "narrow", context: "standalone" });
      case "cccc":
      default:
        return a.day(r, { width: "wide", context: "standalone" }) || a.day(r, {
          width: "abbreviated",
          context: "standalone"
        }) || a.day(r, { width: "short", context: "standalone" }) || a.day(r, { width: "narrow", context: "standalone" });
    }
  }
  validate(r, n) {
    return n >= 0 && n <= 6;
  }
  set(r, n, a, i) {
    return r = cp(r, a, i), r.setHours(0, 0, 0, 0), r;
  }
}
function K6(e, t) {
  const r = ne(e), n = x6(r), a = t - n;
  return ra(r, a);
}
class X6 extends Ue {
  constructor() {
    super(...arguments);
    ae(this, "priority", 90);
    ae(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "E",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(r, n, a) {
    const i = (o) => o === 0 ? 7 : o;
    switch (n) {
      case "i":
      case "ii":
        return wt(n.length, r);
      case "io":
        return a.ordinalNumber(r, { unit: "day" });
      case "iii":
        return Ct(
          a.day(r, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(r, {
            width: "short",
            context: "formatting"
          }) || a.day(r, {
            width: "narrow",
            context: "formatting"
          }),
          i
        );
      case "iiiii":
        return Ct(
          a.day(r, {
            width: "narrow",
            context: "formatting"
          }),
          i
        );
      case "iiiiii":
        return Ct(
          a.day(r, {
            width: "short",
            context: "formatting"
          }) || a.day(r, {
            width: "narrow",
            context: "formatting"
          }),
          i
        );
      case "iiii":
      default:
        return Ct(
          a.day(r, {
            width: "wide",
            context: "formatting"
          }) || a.day(r, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(r, {
            width: "short",
            context: "formatting"
          }) || a.day(r, {
            width: "narrow",
            context: "formatting"
          }),
          i
        );
    }
  }
  validate(r, n) {
    return n >= 1 && n <= 7;
  }
  set(r, n, a) {
    return r = K6(r, a), r.setHours(0, 0, 0, 0), r;
  }
}
class Q6 extends Ue {
  constructor() {
    super(...arguments);
    ae(this, "priority", 80);
    ae(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(r, n, a) {
    switch (n) {
      case "a":
      case "aa":
      case "aaa":
        return a.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return a.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return a.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(r, n, a) {
    return r.setHours(up(a), 0, 0, 0), r;
  }
}
class J6 extends Ue {
  constructor() {
    super(...arguments);
    ae(this, "priority", 80);
    ae(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(r, n, a) {
    switch (n) {
      case "b":
      case "bb":
      case "bbb":
        return a.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return a.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return a.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(r, n, a) {
    return r.setHours(up(a), 0, 0, 0), r;
  }
}
class Z6 extends Ue {
  constructor() {
    super(...arguments);
    ae(this, "priority", 80);
    ae(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(r, n, a) {
    switch (n) {
      case "B":
      case "BB":
      case "BBB":
        return a.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return a.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return a.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(r, n, a) {
    return r.setHours(up(a), 0, 0, 0), r;
  }
}
class eG extends Ue {
  constructor() {
    super(...arguments);
    ae(this, "priority", 70);
    ae(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(r, n, a) {
    switch (n) {
      case "h":
        return gt(Et.hour12h, r);
      case "ho":
        return a.ordinalNumber(r, { unit: "hour" });
      default:
        return wt(n.length, r);
    }
  }
  validate(r, n) {
    return n >= 1 && n <= 12;
  }
  set(r, n, a) {
    const i = r.getHours() >= 12;
    return i && a < 12 ? r.setHours(a + 12, 0, 0, 0) : !i && a === 12 ? r.setHours(0, 0, 0, 0) : r.setHours(a, 0, 0, 0), r;
  }
}
class tG extends Ue {
  constructor() {
    super(...arguments);
    ae(this, "priority", 70);
    ae(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(r, n, a) {
    switch (n) {
      case "H":
        return gt(Et.hour23h, r);
      case "Ho":
        return a.ordinalNumber(r, { unit: "hour" });
      default:
        return wt(n.length, r);
    }
  }
  validate(r, n) {
    return n >= 0 && n <= 23;
  }
  set(r, n, a) {
    return r.setHours(a, 0, 0, 0), r;
  }
}
class rG extends Ue {
  constructor() {
    super(...arguments);
    ae(this, "priority", 70);
    ae(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(r, n, a) {
    switch (n) {
      case "K":
        return gt(Et.hour11h, r);
      case "Ko":
        return a.ordinalNumber(r, { unit: "hour" });
      default:
        return wt(n.length, r);
    }
  }
  validate(r, n) {
    return n >= 0 && n <= 11;
  }
  set(r, n, a) {
    return r.getHours() >= 12 && a < 12 ? r.setHours(a + 12, 0, 0, 0) : r.setHours(a, 0, 0, 0), r;
  }
}
class nG extends Ue {
  constructor() {
    super(...arguments);
    ae(this, "priority", 70);
    ae(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(r, n, a) {
    switch (n) {
      case "k":
        return gt(Et.hour24h, r);
      case "ko":
        return a.ordinalNumber(r, { unit: "hour" });
      default:
        return wt(n.length, r);
    }
  }
  validate(r, n) {
    return n >= 1 && n <= 24;
  }
  set(r, n, a) {
    const i = a <= 24 ? a % 24 : a;
    return r.setHours(i, 0, 0, 0), r;
  }
}
class aG extends Ue {
  constructor() {
    super(...arguments);
    ae(this, "priority", 60);
    ae(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(r, n, a) {
    switch (n) {
      case "m":
        return gt(Et.minute, r);
      case "mo":
        return a.ordinalNumber(r, { unit: "minute" });
      default:
        return wt(n.length, r);
    }
  }
  validate(r, n) {
    return n >= 0 && n <= 59;
  }
  set(r, n, a) {
    return r.setMinutes(a, 0, 0), r;
  }
}
class iG extends Ue {
  constructor() {
    super(...arguments);
    ae(this, "priority", 50);
    ae(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(r, n, a) {
    switch (n) {
      case "s":
        return gt(Et.second, r);
      case "so":
        return a.ordinalNumber(r, { unit: "second" });
      default:
        return wt(n.length, r);
    }
  }
  validate(r, n) {
    return n >= 0 && n <= 59;
  }
  set(r, n, a) {
    return r.setSeconds(a, 0), r;
  }
}
class oG extends Ue {
  constructor() {
    super(...arguments);
    ae(this, "priority", 30);
    ae(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(r, n) {
    const a = (i) => Math.trunc(i * Math.pow(10, -n.length + 3));
    return Ct(wt(n.length, r), a);
  }
  set(r, n, a) {
    return r.setMilliseconds(a), r;
  }
}
class sG extends Ue {
  constructor() {
    super(...arguments);
    ae(this, "priority", 10);
    ae(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(r, n) {
    switch (n) {
      case "X":
        return bn(
          mn.basicOptionalMinutes,
          r
        );
      case "XX":
        return bn(mn.basic, r);
      case "XXXX":
        return bn(
          mn.basicOptionalSeconds,
          r
        );
      case "XXXXX":
        return bn(
          mn.extendedOptionalSeconds,
          r
        );
      case "XXX":
      default:
        return bn(mn.extended, r);
    }
  }
  set(r, n, a) {
    return n.timestampIsSet ? r : Qe(
      r,
      r.getTime() - du(r) - a
    );
  }
}
class lG extends Ue {
  constructor() {
    super(...arguments);
    ae(this, "priority", 10);
    ae(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(r, n) {
    switch (n) {
      case "x":
        return bn(
          mn.basicOptionalMinutes,
          r
        );
      case "xx":
        return bn(mn.basic, r);
      case "xxxx":
        return bn(
          mn.basicOptionalSeconds,
          r
        );
      case "xxxxx":
        return bn(
          mn.extendedOptionalSeconds,
          r
        );
      case "xxx":
      default:
        return bn(mn.extended, r);
    }
  }
  set(r, n, a) {
    return n.timestampIsSet ? r : Qe(
      r,
      r.getTime() - du(r) - a
    );
  }
}
class uG extends Ue {
  constructor() {
    super(...arguments);
    ae(this, "priority", 40);
    ae(this, "incompatibleTokens", "*");
  }
  parse(r) {
    return dw(r);
  }
  set(r, n, a) {
    return [Qe(r, a * 1e3), { timestampIsSet: !0 }];
  }
}
class cG extends Ue {
  constructor() {
    super(...arguments);
    ae(this, "priority", 20);
    ae(this, "incompatibleTokens", "*");
  }
  parse(r) {
    return dw(r);
  }
  set(r, n, a) {
    return [Qe(r, a), { timestampIsSet: !0 }];
  }
}
const dG = {
  G: new k6(),
  y: new R6(),
  Y: new P6(),
  R: new N6(),
  u: new M6(),
  Q: new A6(),
  q: new I6(),
  M: new $6(),
  L: new L6(),
  w: new H6(),
  I: new j6(),
  d: new V6(),
  D: new U6(),
  E: new G6(),
  e: new z6(),
  c: new q6(),
  i: new X6(),
  a: new Q6(),
  b: new J6(),
  B: new Z6(),
  h: new eG(),
  H: new tG(),
  K: new rG(),
  k: new nG(),
  m: new aG(),
  s: new iG(),
  S: new oG(),
  X: new sG(),
  x: new lG(),
  t: new uG(),
  T: new cG()
}, fG = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, hG = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, pG = /^'([^]*?)'?$/, vG = /''/g, gG = /\S/, mG = /[a-zA-Z]/;
function id(e, t, r, n) {
  var m, g, b, y, w, S, _, E;
  const a = S6(), i = (n == null ? void 0 : n.locale) ?? a.locale ?? iw, o = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((g = (m = n == null ? void 0 : n.locale) == null ? void 0 : m.options) == null ? void 0 : g.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((y = (b = a.locale) == null ? void 0 : b.options) == null ? void 0 : y.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((S = (w = n == null ? void 0 : n.locale) == null ? void 0 : w.options) == null ? void 0 : S.weekStartsOn) ?? a.weekStartsOn ?? ((E = (_ = a.locale) == null ? void 0 : _.options) == null ? void 0 : E.weekStartsOn) ?? 0;
  if (t === "")
    return e === "" ? ne(r) : Qe(r, NaN);
  const l = {
    firstWeekContainsDate: o,
    weekStartsOn: s,
    locale: i
  }, u = [new T6()], c = t.match(hG).map((C) => {
    const D = C[0];
    if (D in mu) {
      const O = mu[D];
      return O(C, i.formatLong);
    }
    return C;
  }).join("").match(fG), d = [];
  for (let C of c) {
    !(n != null && n.useAdditionalWeekYearTokens) && uw(C) && vf(C, t, e), !(n != null && n.useAdditionalDayOfYearTokens) && lw(C) && vf(C, t, e);
    const D = C[0], O = dG[D];
    if (O) {
      const { incompatibleTokens: R } = O;
      if (Array.isArray(R)) {
        const A = d.find(
          (B) => R.includes(B.token) || B.token === D
        );
        if (A)
          throw new RangeError(
            `The format string mustn't contain \`${A.fullToken}\` and \`${C}\` at the same time`
          );
      } else if (O.incompatibleTokens === "*" && d.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${C}\` and any other token at the same time`
        );
      d.push({ token: D, fullToken: C });
      const P = O.run(
        e,
        C,
        i.match,
        l
      );
      if (!P)
        return Qe(r, NaN);
      u.push(P.setter), e = P.rest;
    } else {
      if (D.match(mG))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + D + "`"
        );
      if (C === "''" ? C = "'" : D === "'" && (C = bG(C)), e.indexOf(C) === 0)
        e = e.slice(C.length);
      else
        return Qe(r, NaN);
    }
  }
  if (e.length > 0 && gG.test(e))
    return Qe(r, NaN);
  const h = u.map((C) => C.priority).sort((C, D) => D - C).filter((C, D, O) => O.indexOf(C) === D).map(
    (C) => u.filter((D) => D.priority === C).sort((D, O) => O.subPriority - D.subPriority)
  ).map((C) => C[0]);
  let p = ne(r);
  if (isNaN(p.getTime()))
    return Qe(r, NaN);
  const v = {};
  for (const C of h) {
    if (!C.validate(p, l))
      return Qe(r, NaN);
    const D = C.set(p, v, l);
    Array.isArray(D) ? (p = D[0], Object.assign(v, D[1])) : p = D;
  }
  return Qe(r, p);
}
function bG(e) {
  return e.match(pG)[1].replace(vG, "'");
}
function Dm(e, t, r) {
  const n = tn(e, r), a = tn(t, r);
  return +n == +a;
}
function yG(e, t) {
  const r = ne(e), n = ne(t);
  return r.getFullYear() === n.getFullYear() && r.getMonth() === n.getMonth();
}
function _G(e, t) {
  const r = pf(e), n = pf(t);
  return +r == +n;
}
function wG(e, t) {
  const r = ne(e), n = ne(t);
  return r.getFullYear() === n.getFullYear();
}
function vs(e, t) {
  const r = +ne(e), [n, a] = [
    +ne(t.start),
    +ne(t.end)
  ].sort((i, o) => i - o);
  return r >= n && r <= a;
}
function SG(e, t) {
  return ra(e, -t);
}
function xG(e, t) {
  const n = OG(e);
  let a;
  if (n.date) {
    const l = TG(n.date, 2);
    a = kG(l.restDateString, l.year);
  }
  if (!a || isNaN(a.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  const i = a.getTime();
  let o = 0, s;
  if (n.time && (o = RG(n.time), isNaN(o)))
    return /* @__PURE__ */ new Date(NaN);
  if (n.timezone) {
    if (s = PG(n.timezone), isNaN(s))
      return /* @__PURE__ */ new Date(NaN);
  } else {
    const l = new Date(i + o), u = /* @__PURE__ */ new Date(0);
    return u.setFullYear(
      l.getUTCFullYear(),
      l.getUTCMonth(),
      l.getUTCDate()
    ), u.setHours(
      l.getUTCHours(),
      l.getUTCMinutes(),
      l.getUTCSeconds(),
      l.getUTCMilliseconds()
    ), u;
  }
  return new Date(i + o + s);
}
const ul = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, EG = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, CG = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, DG = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function OG(e) {
  const t = {}, r = e.split(ul.dateTimeDelimiter);
  let n;
  if (r.length > 2)
    return t;
  if (/:/.test(r[0]) ? n = r[0] : (t.date = r[0], n = r[1], ul.timeZoneDelimiter.test(t.date) && (t.date = e.split(ul.timeZoneDelimiter)[0], n = e.substr(
    t.date.length,
    e.length
  ))), n) {
    const a = ul.timezone.exec(n);
    a ? (t.time = n.replace(a[1], ""), t.timezone = a[1]) : t.time = n;
  }
  return t;
}
function TG(e, t) {
  const r = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"
  ), n = e.match(r);
  if (!n) return { year: NaN, restDateString: "" };
  const a = n[1] ? parseInt(n[1]) : null, i = n[2] ? parseInt(n[2]) : null;
  return {
    year: i === null ? a : i * 100,
    restDateString: e.slice((n[1] || n[2]).length)
  };
}
function kG(e, t) {
  if (t === null) return /* @__PURE__ */ new Date(NaN);
  const r = e.match(EG);
  if (!r) return /* @__PURE__ */ new Date(NaN);
  const n = !!r[4], a = qo(r[1]), i = qo(r[2]) - 1, o = qo(r[3]), s = qo(r[4]), l = qo(r[5]) - 1;
  if (n)
    return $G(t, s, l) ? NG(t, s, l) : /* @__PURE__ */ new Date(NaN);
  {
    const u = /* @__PURE__ */ new Date(0);
    return !AG(t, i, o) || !IG(t, a) ? /* @__PURE__ */ new Date(NaN) : (u.setUTCFullYear(t, i, Math.max(a, o)), u);
  }
}
function qo(e) {
  return e ? parseInt(e) : 1;
}
function RG(e) {
  const t = e.match(CG);
  if (!t) return NaN;
  const r = od(t[1]), n = od(t[2]), a = od(t[3]);
  return LG(r, n, a) ? r * gc + n * vc + a * 1e3 : NaN;
}
function od(e) {
  return e && parseFloat(e.replace(",", ".")) || 0;
}
function PG(e) {
  if (e === "Z") return 0;
  const t = e.match(DG);
  if (!t) return 0;
  const r = t[1] === "+" ? -1 : 1, n = parseInt(t[2]), a = t[3] && parseInt(t[3]) || 0;
  return FG(n, a) ? r * (n * gc + a * vc) : NaN;
}
function NG(e, t, r) {
  const n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(e, 0, 4);
  const a = n.getUTCDay() || 7, i = (t - 1) * 7 + r + 1 - a;
  return n.setUTCDate(n.getUTCDate() + i), n;
}
const MG = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function pw(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function AG(e, t, r) {
  return t >= 0 && t <= 11 && r >= 1 && r <= (MG[t] || (pw(e) ? 29 : 28));
}
function IG(e, t) {
  return t >= 1 && t <= (pw(e) ? 366 : 365);
}
function $G(e, t, r) {
  return t >= 1 && t <= 53 && r >= 0 && r <= 6;
}
function LG(e, t, r) {
  return e === 24 ? t === 0 && r === 0 : r >= 0 && r < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function FG(e, t) {
  return t >= 0 && t <= 59;
}
function dr(e, t) {
  const r = ne(e), n = r.getFullYear(), a = r.getDate(), i = Qe(e, 0);
  i.setFullYear(n, t, 15), i.setHours(0, 0, 0, 0);
  const o = w6(i);
  return r.setMonth(t, Math.min(a, o)), r;
}
function HG(e, t) {
  let r = ne(e);
  return isNaN(+r) ? Qe(e, NaN) : (t.year != null && r.setFullYear(t.year), t.month != null && (r = dr(r, t.month)), t.date != null && r.setDate(t.date), t.hours != null && r.setHours(t.hours), t.minutes != null && r.setMinutes(t.minutes), t.seconds != null && r.setSeconds(t.seconds), t.milliseconds != null && r.setMilliseconds(t.milliseconds), r);
}
function Tl(e, t) {
  const r = ne(e);
  return r.setHours(t), r;
}
function kl(e, t) {
  const r = ne(e);
  return r.setMinutes(t), r;
}
function Wi(e, t) {
  const r = ne(e), n = Math.trunc(r.getMonth() / 3) + 1, a = t - n;
  return dr(r, r.getMonth() + a * 3);
}
function Rl(e, t) {
  const r = ne(e);
  return r.setSeconds(t), r;
}
function fn(e, t) {
  const r = ne(e);
  return isNaN(+r) ? Qe(e, NaN) : (r.setFullYear(t), r);
}
function uo(e, t) {
  return en(e, -t);
}
function vw(e, t) {
  return op(e, -t);
}
function Om(e, t) {
  return fu(e, -t);
}
function co(e, t) {
  return Xn(e, -t);
}
function bc() {
  return typeof window < "u";
}
function Lo(e) {
  return gw(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function mr(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Mn(e) {
  var t;
  return (t = (gw(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function gw(e) {
  return bc() ? e instanceof Node || e instanceof mr(e).Node : !1;
}
function zt(e) {
  return bc() ? e instanceof Element || e instanceof mr(e).Element : !1;
}
function kn(e) {
  return bc() ? e instanceof HTMLElement || e instanceof mr(e).HTMLElement : !1;
}
function Tm(e) {
  return !bc() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof mr(e).ShadowRoot;
}
function Us(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: a
  } = Hr(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(a);
}
function BG(e) {
  return ["table", "td", "th"].includes(Lo(e));
}
function yc(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function dp(e) {
  const t = fp(), r = zt(e) ? Hr(e) : e;
  return r.transform !== "none" || r.perspective !== "none" || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function jG(e) {
  let t = Ta(e);
  for (; kn(t) && !fo(t); ) {
    if (dp(t))
      return t;
    if (yc(t))
      return null;
    t = Ta(t);
  }
  return null;
}
function fp() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function fo(e) {
  return ["html", "body", "#document"].includes(Lo(e));
}
function Hr(e) {
  return mr(e).getComputedStyle(e);
}
function _c(e) {
  return zt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ta(e) {
  if (Lo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Tm(e) && e.host || // Fallback.
    Mn(e)
  );
  return Tm(t) ? t.host : t;
}
function mw(e) {
  const t = Ta(e);
  return fo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : kn(t) && Us(t) ? t : mw(t);
}
function gs(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const a = mw(e), i = a === ((n = e.ownerDocument) == null ? void 0 : n.body), o = mr(a);
  if (i) {
    const s = mf(o);
    return t.concat(o, o.visualViewport || [], Us(a) ? a : [], s && r ? gs(s) : []);
  }
  return t.concat(a, gs(a, [], r));
}
function mf(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
const ho = Math.min, Ga = Math.max, yu = Math.round, cl = Math.floor, On = (e) => ({
  x: e,
  y: e
}), YG = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, WG = {
  start: "end",
  end: "start"
};
function VG(e, t, r) {
  return Ga(e, ho(t, r));
}
function wc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function po(e) {
  return e.split("-")[0];
}
function Gs(e) {
  return e.split("-")[1];
}
function UG(e) {
  return e === "x" ? "y" : "x";
}
function hp(e) {
  return e === "y" ? "height" : "width";
}
function ms(e) {
  return ["top", "bottom"].includes(po(e)) ? "y" : "x";
}
function pp(e) {
  return UG(ms(e));
}
function GG(e, t, r) {
  r === void 0 && (r = !1);
  const n = Gs(e), a = pp(e), i = hp(a);
  let o = a === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (o = _u(o)), [o, _u(o)];
}
function zG(e) {
  const t = _u(e);
  return [bf(e), t, bf(t)];
}
function bf(e) {
  return e.replace(/start|end/g, (t) => WG[t]);
}
function qG(e, t, r) {
  const n = ["left", "right"], a = ["right", "left"], i = ["top", "bottom"], o = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? a : n : t ? n : a;
    case "left":
    case "right":
      return t ? i : o;
    default:
      return [];
  }
}
function KG(e, t, r, n) {
  const a = Gs(e);
  let i = qG(po(e), r === "start", n);
  return a && (i = i.map((o) => o + "-" + a), t && (i = i.concat(i.map(bf)))), i;
}
function _u(e) {
  return e.replace(/left|right|bottom|top/g, (t) => YG[t]);
}
function XG(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function bw(e) {
  return typeof e != "number" ? XG(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function wu(e) {
  const {
    x: t,
    y: r,
    width: n,
    height: a
  } = e;
  return {
    width: n,
    height: a,
    top: r,
    left: t,
    right: t + n,
    bottom: r + a,
    x: t,
    y: r
  };
}
function km(e, t, r) {
  let {
    reference: n,
    floating: a
  } = e;
  const i = ms(t), o = pp(t), s = hp(o), l = po(t), u = i === "y", c = n.x + n.width / 2 - a.width / 2, d = n.y + n.height / 2 - a.height / 2, h = n[s] / 2 - a[s] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: c,
        y: n.y - a.height
      };
      break;
    case "bottom":
      p = {
        x: c,
        y: n.y + n.height
      };
      break;
    case "right":
      p = {
        x: n.x + n.width,
        y: d
      };
      break;
    case "left":
      p = {
        x: n.x - a.width,
        y: d
      };
      break;
    default:
      p = {
        x: n.x,
        y: n.y
      };
  }
  switch (Gs(t)) {
    case "start":
      p[o] -= h * (r && u ? -1 : 1);
      break;
    case "end":
      p[o] += h * (r && u ? -1 : 1);
      break;
  }
  return p;
}
const QG = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: a = "absolute",
    middleware: i = [],
    platform: o
  } = r, s = i.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let u = await o.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: c,
    y: d
  } = km(u, n, l), h = n, p = {}, v = 0;
  for (let m = 0; m < s.length; m++) {
    const {
      name: g,
      fn: b
    } = s[m], {
      x: y,
      y: w,
      data: S,
      reset: _
    } = await b({
      x: c,
      y: d,
      initialPlacement: n,
      placement: h,
      strategy: a,
      middlewareData: p,
      rects: u,
      platform: o,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = y ?? c, d = w ?? d, p = {
      ...p,
      [g]: {
        ...p[g],
        ...S
      }
    }, _ && v <= 50 && (v++, typeof _ == "object" && (_.placement && (h = _.placement), _.rects && (u = _.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : _.rects), {
      x: c,
      y: d
    } = km(u, h, l)), m = -1);
  }
  return {
    x: c,
    y: d,
    placement: h,
    strategy: a,
    middlewareData: p
  };
};
async function JG(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: n,
    y: a,
    platform: i,
    rects: o,
    elements: s,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: d = "floating",
    altBoundary: h = !1,
    padding: p = 0
  } = wc(t, e), v = bw(p), g = s[h ? d === "floating" ? "reference" : "floating" : d], b = wu(await i.getClippingRect({
    element: (r = await (i.isElement == null ? void 0 : i.isElement(g))) == null || r ? g : g.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), y = d === "floating" ? {
    x: n,
    y: a,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, w = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), S = await (i.isElement == null ? void 0 : i.isElement(w)) ? await (i.getScale == null ? void 0 : i.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, _ = wu(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: y,
    offsetParent: w,
    strategy: l
  }) : y);
  return {
    top: (b.top - _.top + v.top) / S.y,
    bottom: (_.bottom - b.bottom + v.bottom) / S.y,
    left: (b.left - _.left + v.left) / S.x,
    right: (_.right - b.right + v.right) / S.x
  };
}
const ZG = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: n,
      placement: a,
      rects: i,
      platform: o,
      elements: s,
      middlewareData: l
    } = t, {
      element: u,
      padding: c = 0
    } = wc(e, t) || {};
    if (u == null)
      return {};
    const d = bw(c), h = {
      x: r,
      y: n
    }, p = pp(a), v = hp(p), m = await o.getDimensions(u), g = p === "y", b = g ? "top" : "left", y = g ? "bottom" : "right", w = g ? "clientHeight" : "clientWidth", S = i.reference[v] + i.reference[p] - h[p] - i.floating[v], _ = h[p] - i.reference[p], E = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u));
    let C = E ? E[w] : 0;
    (!C || !await (o.isElement == null ? void 0 : o.isElement(E))) && (C = s.floating[w] || i.floating[v]);
    const D = S / 2 - _ / 2, O = C / 2 - m[v] / 2 - 1, R = ho(d[b], O), P = ho(d[y], O), A = R, B = C - m[v] - P, $ = C / 2 - m[v] / 2 + D, K = VG(A, $, B), L = !l.arrow && Gs(a) != null && $ !== K && i.reference[v] / 2 - ($ < A ? R : P) - m[v] / 2 < 0, I = L ? $ < A ? $ - A : $ - B : 0;
    return {
      [p]: h[p] + I,
      data: {
        [p]: K,
        centerOffset: $ - K - I,
        ...L && {
          alignmentOffset: I
        }
      },
      reset: L
    };
  }
}), e8 = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: a,
        middlewareData: i,
        rects: o,
        initialPlacement: s,
        platform: l,
        elements: u
      } = t, {
        mainAxis: c = !0,
        crossAxis: d = !0,
        fallbackPlacements: h,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: m = !0,
        ...g
      } = wc(e, t);
      if ((r = i.arrow) != null && r.alignmentOffset)
        return {};
      const b = po(a), y = ms(s), w = po(s) === s, S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), _ = h || (w || !m ? [_u(s)] : zG(s)), E = v !== "none";
      !h && E && _.push(...KG(s, m, v, S));
      const C = [s, ..._], D = await JG(t, g), O = [];
      let R = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (c && O.push(D[b]), d) {
        const $ = GG(a, o, S);
        O.push(D[$[0]], D[$[1]]);
      }
      if (R = [...R, {
        placement: a,
        overflows: O
      }], !O.every(($) => $ <= 0)) {
        var P, A;
        const $ = (((P = i.flip) == null ? void 0 : P.index) || 0) + 1, K = C[$];
        if (K)
          return {
            data: {
              index: $,
              overflows: R
            },
            reset: {
              placement: K
            }
          };
        let L = (A = R.filter((I) => I.overflows[0] <= 0).sort((I, F) => I.overflows[1] - F.overflows[1])[0]) == null ? void 0 : A.placement;
        if (!L)
          switch (p) {
            case "bestFit": {
              var B;
              const I = (B = R.filter((F) => {
                if (E) {
                  const de = ms(F.placement);
                  return de === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  de === "y";
                }
                return !0;
              }).map((F) => [F.placement, F.overflows.filter((de) => de > 0).reduce((de, T) => de + T, 0)]).sort((F, de) => F[1] - de[1])[0]) == null ? void 0 : B[0];
              I && (L = I);
              break;
            }
            case "initialPlacement":
              L = s;
              break;
          }
        if (a !== L)
          return {
            reset: {
              placement: L
            }
          };
      }
      return {};
    }
  };
};
async function t8(e, t) {
  const {
    placement: r,
    platform: n,
    elements: a
  } = e, i = await (n.isRTL == null ? void 0 : n.isRTL(a.floating)), o = po(r), s = Gs(r), l = ms(r) === "y", u = ["left", "top"].includes(o) ? -1 : 1, c = i && l ? -1 : 1, d = wc(t, e);
  let {
    mainAxis: h,
    crossAxis: p,
    alignmentAxis: v
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return s && typeof v == "number" && (p = s === "end" ? v * -1 : v), l ? {
    x: p * c,
    y: h * u
  } : {
    x: h * u,
    y: p * c
  };
}
const r8 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, n;
      const {
        x: a,
        y: i,
        placement: o,
        middlewareData: s
      } = t, l = await t8(t, e);
      return o === ((r = s.offset) == null ? void 0 : r.placement) && (n = s.arrow) != null && n.alignmentOffset ? {} : {
        x: a + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: o
        }
      };
    }
  };
};
function yw(e) {
  const t = Hr(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const a = kn(e), i = a ? e.offsetWidth : r, o = a ? e.offsetHeight : n, s = yu(r) !== i || yu(n) !== o;
  return s && (r = i, n = o), {
    width: r,
    height: n,
    $: s
  };
}
function vp(e) {
  return zt(e) ? e : e.contextElement;
}
function eo(e) {
  const t = vp(e);
  if (!kn(t))
    return On(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: a,
    $: i
  } = yw(t);
  let o = (i ? yu(r.width) : r.width) / n, s = (i ? yu(r.height) : r.height) / a;
  return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: o,
    y: s
  };
}
const n8 = /* @__PURE__ */ On(0);
function _w(e) {
  const t = mr(e);
  return !fp() || !t.visualViewport ? n8 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function a8(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== mr(e) ? !1 : t;
}
function ni(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const a = e.getBoundingClientRect(), i = vp(e);
  let o = On(1);
  t && (n ? zt(n) && (o = eo(n)) : o = eo(e));
  const s = a8(i, r, n) ? _w(i) : On(0);
  let l = (a.left + s.x) / o.x, u = (a.top + s.y) / o.y, c = a.width / o.x, d = a.height / o.y;
  if (i) {
    const h = mr(i), p = n && zt(n) ? mr(n) : n;
    let v = h, m = mf(v);
    for (; m && n && p !== v; ) {
      const g = eo(m), b = m.getBoundingClientRect(), y = Hr(m), w = b.left + (m.clientLeft + parseFloat(y.paddingLeft)) * g.x, S = b.top + (m.clientTop + parseFloat(y.paddingTop)) * g.y;
      l *= g.x, u *= g.y, c *= g.x, d *= g.y, l += w, u += S, v = mr(m), m = mf(v);
    }
  }
  return wu({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function gp(e, t) {
  const r = _c(e).scrollLeft;
  return t ? t.left + r : ni(Mn(e)).left + r;
}
function ww(e, t, r) {
  r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(), a = n.left + t.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    gp(e, n)
  )), i = n.top + t.scrollTop;
  return {
    x: a,
    y: i
  };
}
function i8(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: a
  } = e;
  const i = a === "fixed", o = Mn(n), s = t ? yc(t.floating) : !1;
  if (n === o || s && i)
    return r;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = On(1);
  const c = On(0), d = kn(n);
  if ((d || !d && !i) && ((Lo(n) !== "body" || Us(o)) && (l = _c(n)), kn(n))) {
    const p = ni(n);
    u = eo(n), c.x = p.x + n.clientLeft, c.y = p.y + n.clientTop;
  }
  const h = o && !d && !i ? ww(o, l, !0) : On(0);
  return {
    width: r.width * u.x,
    height: r.height * u.y,
    x: r.x * u.x - l.scrollLeft * u.x + c.x + h.x,
    y: r.y * u.y - l.scrollTop * u.y + c.y + h.y
  };
}
function o8(e) {
  return Array.from(e.getClientRects());
}
function s8(e) {
  const t = Mn(e), r = _c(e), n = e.ownerDocument.body, a = Ga(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), i = Ga(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -r.scrollLeft + gp(e);
  const s = -r.scrollTop;
  return Hr(n).direction === "rtl" && (o += Ga(t.clientWidth, n.clientWidth) - a), {
    width: a,
    height: i,
    x: o,
    y: s
  };
}
function l8(e, t) {
  const r = mr(e), n = Mn(e), a = r.visualViewport;
  let i = n.clientWidth, o = n.clientHeight, s = 0, l = 0;
  if (a) {
    i = a.width, o = a.height;
    const u = fp();
    (!u || u && t === "fixed") && (s = a.offsetLeft, l = a.offsetTop);
  }
  return {
    width: i,
    height: o,
    x: s,
    y: l
  };
}
function u8(e, t) {
  const r = ni(e, !0, t === "fixed"), n = r.top + e.clientTop, a = r.left + e.clientLeft, i = kn(e) ? eo(e) : On(1), o = e.clientWidth * i.x, s = e.clientHeight * i.y, l = a * i.x, u = n * i.y;
  return {
    width: o,
    height: s,
    x: l,
    y: u
  };
}
function Rm(e, t, r) {
  let n;
  if (t === "viewport")
    n = l8(e, r);
  else if (t === "document")
    n = s8(Mn(e));
  else if (zt(t))
    n = u8(t, r);
  else {
    const a = _w(e);
    n = {
      x: t.x - a.x,
      y: t.y - a.y,
      width: t.width,
      height: t.height
    };
  }
  return wu(n);
}
function Sw(e, t) {
  const r = Ta(e);
  return r === t || !zt(r) || fo(r) ? !1 : Hr(r).position === "fixed" || Sw(r, t);
}
function c8(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = gs(e, [], !1).filter((s) => zt(s) && Lo(s) !== "body"), a = null;
  const i = Hr(e).position === "fixed";
  let o = i ? Ta(e) : e;
  for (; zt(o) && !fo(o); ) {
    const s = Hr(o), l = dp(o);
    !l && s.position === "fixed" && (a = null), (i ? !l && !a : !l && s.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || Us(o) && !l && Sw(e, o)) ? n = n.filter((c) => c !== o) : a = s, o = Ta(o);
  }
  return t.set(e, n), n;
}
function d8(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: a
  } = e;
  const o = [...r === "clippingAncestors" ? yc(t) ? [] : c8(t, this._c) : [].concat(r), n], s = o[0], l = o.reduce((u, c) => {
    const d = Rm(t, c, a);
    return u.top = Ga(d.top, u.top), u.right = ho(d.right, u.right), u.bottom = ho(d.bottom, u.bottom), u.left = Ga(d.left, u.left), u;
  }, Rm(t, s, a));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function f8(e) {
  const {
    width: t,
    height: r
  } = yw(e);
  return {
    width: t,
    height: r
  };
}
function h8(e, t, r) {
  const n = kn(t), a = Mn(t), i = r === "fixed", o = ni(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = On(0);
  if (n || !n && !i)
    if ((Lo(t) !== "body" || Us(a)) && (s = _c(t)), n) {
      const h = ni(t, !0, i, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else a && (l.x = gp(a));
  const u = a && !n && !i ? ww(a, s) : On(0), c = o.left + s.scrollLeft - l.x - u.x, d = o.top + s.scrollTop - l.y - u.y;
  return {
    x: c,
    y: d,
    width: o.width,
    height: o.height
  };
}
function sd(e) {
  return Hr(e).position === "static";
}
function Pm(e, t) {
  if (!kn(e) || Hr(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return Mn(e) === r && (r = r.ownerDocument.body), r;
}
function xw(e, t) {
  const r = mr(e);
  if (yc(e))
    return r;
  if (!kn(e)) {
    let a = Ta(e);
    for (; a && !fo(a); ) {
      if (zt(a) && !sd(a))
        return a;
      a = Ta(a);
    }
    return r;
  }
  let n = Pm(e, t);
  for (; n && BG(n) && sd(n); )
    n = Pm(n, t);
  return n && fo(n) && sd(n) && !dp(n) ? r : n || jG(e) || r;
}
const p8 = async function(e) {
  const t = this.getOffsetParent || xw, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: h8(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function v8(e) {
  return Hr(e).direction === "rtl";
}
const g8 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: i8,
  getDocumentElement: Mn,
  getClippingRect: d8,
  getOffsetParent: xw,
  getElementRects: p8,
  getClientRects: o8,
  getDimensions: f8,
  getScale: eo,
  isElement: zt,
  isRTL: v8
};
function m8(e, t) {
  let r = null, n;
  const a = Mn(e);
  function i() {
    var s;
    clearTimeout(n), (s = r) == null || s.disconnect(), r = null;
  }
  function o(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), i();
    const {
      left: u,
      top: c,
      width: d,
      height: h
    } = e.getBoundingClientRect();
    if (s || t(), !d || !h)
      return;
    const p = cl(c), v = cl(a.clientWidth - (u + d)), m = cl(a.clientHeight - (c + h)), g = cl(u), y = {
      rootMargin: -p + "px " + -v + "px " + -m + "px " + -g + "px",
      threshold: Ga(0, ho(1, l)) || 1
    };
    let w = !0;
    function S(_) {
      const E = _[0].intersectionRatio;
      if (E !== l) {
        if (!w)
          return o();
        E ? o(!1, E) : n = setTimeout(() => {
          o(!1, 1e-7);
        }, 1e3);
      }
      w = !1;
    }
    try {
      r = new IntersectionObserver(S, {
        ...y,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(S, y);
    }
    r.observe(e);
  }
  return o(!0), i;
}
function b8(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: i = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, u = vp(e), c = a || i ? [...u ? gs(u) : [], ...gs(t)] : [];
  c.forEach((b) => {
    a && b.addEventListener("scroll", r, {
      passive: !0
    }), i && b.addEventListener("resize", r);
  });
  const d = u && s ? m8(u, r) : null;
  let h = -1, p = null;
  o && (p = new ResizeObserver((b) => {
    let [y] = b;
    y && y.target === u && p && (p.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var w;
      (w = p) == null || w.observe(t);
    })), r();
  }), u && !l && p.observe(u), p.observe(t));
  let v, m = l ? ni(e) : null;
  l && g();
  function g() {
    const b = ni(e);
    m && (b.x !== m.x || b.y !== m.y || b.width !== m.width || b.height !== m.height) && r(), m = b, v = requestAnimationFrame(g);
  }
  return r(), () => {
    var b;
    c.forEach((y) => {
      a && y.removeEventListener("scroll", r), i && y.removeEventListener("resize", r);
    }), d == null || d(), (b = p) == null || b.disconnect(), p = null, l && cancelAnimationFrame(v);
  };
}
const y8 = r8, _8 = e8, Nm = ZG, w8 = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), a = {
    platform: g8,
    ...r
  }, i = {
    ...a.platform,
    _c: n
  };
  return QG(e, t, {
    ...a,
    platform: i
  });
};
var Pl = typeof document < "u" ? Of : na;
function Su(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let r, n, a;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (r = e.length, r !== t.length) return !1;
      for (n = r; n-- !== 0; )
        if (!Su(e[n], t[n]))
          return !1;
      return !0;
    }
    if (a = Object.keys(e), r = a.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!{}.hasOwnProperty.call(t, a[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      const i = a[n];
      if (!(i === "_owner" && e.$$typeof) && !Su(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Ew(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Mm(e, t) {
  const r = Ew(e);
  return Math.round(t * r) / r;
}
function ld(e) {
  const t = _e.useRef(e);
  return Pl(() => {
    t.current = e;
  }), t;
}
function S8(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: a,
    elements: {
      reference: i,
      floating: o
    } = {},
    transform: s = !0,
    whileElementsMounted: l,
    open: u
  } = e, [c, d] = _e.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, p] = _e.useState(n);
  Su(h, n) || p(n);
  const [v, m] = _e.useState(null), [g, b] = _e.useState(null), y = _e.useCallback((F) => {
    F !== E.current && (E.current = F, m(F));
  }, []), w = _e.useCallback((F) => {
    F !== C.current && (C.current = F, b(F));
  }, []), S = i || v, _ = o || g, E = _e.useRef(null), C = _e.useRef(null), D = _e.useRef(c), O = l != null, R = ld(l), P = ld(a), A = ld(u), B = _e.useCallback(() => {
    if (!E.current || !C.current)
      return;
    const F = {
      placement: t,
      strategy: r,
      middleware: h
    };
    P.current && (F.platform = P.current), w8(E.current, C.current, F).then((de) => {
      const T = {
        ...de,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: A.current !== !1
      };
      $.current && !Su(D.current, T) && (D.current = T, uS.flushSync(() => {
        d(T);
      }));
    });
  }, [h, t, r, P, A]);
  Pl(() => {
    u === !1 && D.current.isPositioned && (D.current.isPositioned = !1, d((F) => ({
      ...F,
      isPositioned: !1
    })));
  }, [u]);
  const $ = _e.useRef(!1);
  Pl(() => ($.current = !0, () => {
    $.current = !1;
  }), []), Pl(() => {
    if (S && (E.current = S), _ && (C.current = _), S && _) {
      if (R.current)
        return R.current(S, _, B);
      B();
    }
  }, [S, _, B, R, O]);
  const K = _e.useMemo(() => ({
    reference: E,
    floating: C,
    setReference: y,
    setFloating: w
  }), [y, w]), L = _e.useMemo(() => ({
    reference: S,
    floating: _
  }), [S, _]), I = _e.useMemo(() => {
    const F = {
      position: r,
      left: 0,
      top: 0
    };
    if (!L.floating)
      return F;
    const de = Mm(L.floating, c.x), T = Mm(L.floating, c.y);
    return s ? {
      ...F,
      transform: "translate(" + de + "px, " + T + "px)",
      ...Ew(L.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: de,
      top: T
    };
  }, [r, s, L.floating, c.x, c.y]);
  return _e.useMemo(() => ({
    ...c,
    update: B,
    refs: K,
    elements: L,
    floatingStyles: I
  }), [c, B, K, L, I]);
}
const x8 = (e) => {
  function t(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(r) {
      const {
        element: n,
        padding: a
      } = typeof e == "function" ? e(r) : e;
      return n && t(n) ? n.current != null ? Nm({
        element: n.current,
        padding: a
      }).fn(r) : {} : n ? Nm({
        element: n,
        padding: a
      }).fn(r) : {};
    }
  };
}, E8 = (e, t) => ({
  ...y8(e),
  options: [e, t]
}), C8 = (e, t) => ({
  ..._8(e),
  options: [e, t]
}), D8 = (e, t) => ({
  ...x8(e),
  options: [e, t]
}), Cw = {
  ..._e
}, O8 = Cw.useInsertionEffect, T8 = O8 || ((e) => e());
function k8(e) {
  const t = _e.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return T8(() => {
    t.current = e;
  }), _e.useCallback(function() {
    for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return t.current == null ? void 0 : t.current(...n);
  }, []);
}
var xu = typeof document < "u" ? Of : na;
function yf() {
  return yf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, yf.apply(this, arguments);
}
let Am = !1, R8 = 0;
const Im = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + R8++
);
function P8() {
  const [e, t] = _e.useState(() => Am ? Im() : void 0);
  return xu(() => {
    e == null && t(Im());
  }, []), _e.useEffect(() => {
    Am = !0;
  }, []), e;
}
const N8 = Cw.useId, Dw = N8 || P8;
let bs;
process.env.NODE_ENV !== "production" && (bs = /* @__PURE__ */ new Set());
function M8() {
  for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  const a = "Floating UI: " + r.join(" ");
  if (!((e = bs) != null && e.has(a))) {
    var i;
    (i = bs) == null || i.add(a), console.warn(a);
  }
}
function A8() {
  for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  const a = "Floating UI: " + r.join(" ");
  if (!((e = bs) != null && e.has(a))) {
    var i;
    (i = bs) == null || i.add(a), console.error(a);
  }
}
const I8 = /* @__PURE__ */ _e.forwardRef(function(t, r) {
  const {
    context: {
      placement: n,
      elements: {
        floating: a
      },
      middlewareData: {
        arrow: i,
        shift: o
      }
    },
    width: s = 14,
    height: l = 7,
    tipRadius: u = 0,
    strokeWidth: c = 0,
    staticOffset: d,
    stroke: h,
    d: p,
    style: {
      transform: v,
      ...m
    } = {},
    ...g
  } = t;
  process.env.NODE_ENV !== "production" && (r || M8("The `ref` prop is required for `FloatingArrow`."));
  const b = Dw(), [y, w] = _e.useState(!1);
  if (xu(() => {
    if (!a) return;
    Hr(a).direction === "rtl" && w(!0);
  }, [a]), !a)
    return null;
  const [S, _] = n.split("-"), E = S === "top" || S === "bottom";
  let C = d;
  (E && o != null && o.x || !E && o != null && o.y) && (C = null);
  const D = c * 2, O = D / 2, R = s / 2 * (u / -8 + 1), P = l / 2 * u / 4, A = !!p, B = C && _ === "end" ? "bottom" : "top";
  let $ = C && _ === "end" ? "right" : "left";
  C && y && ($ = _ === "end" ? "left" : "right");
  const K = (i == null ? void 0 : i.x) != null ? C || i.x : "", L = (i == null ? void 0 : i.y) != null ? C || i.y : "", I = p || "M0,0" + (" H" + s) + (" L" + (s - R) + "," + (l - P)) + (" Q" + s / 2 + "," + l + " " + R + "," + (l - P)) + " Z", F = {
    top: A ? "rotate(180deg)" : "",
    left: A ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: A ? "" : "rotate(180deg)",
    right: A ? "rotate(-90deg)" : "rotate(90deg)"
  }[S];
  return /* @__PURE__ */ _e.createElement("svg", yf({}, g, {
    "aria-hidden": !0,
    ref: r,
    width: A ? s : s + D,
    height: s,
    viewBox: "0 0 " + s + " " + (l > s ? l : s),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [$]: K,
      [B]: L,
      [S]: E || A ? "100%" : "calc(100% - " + D / 2 + "px)",
      transform: [F, v].filter((de) => !!de).join(" "),
      ...m
    }
  }), D > 0 && /* @__PURE__ */ _e.createElement("path", {
    clipPath: "url(#" + b + ")",
    fill: "none",
    stroke: h,
    strokeWidth: D + (p ? 0 : 1),
    d: I
  }), /* @__PURE__ */ _e.createElement("path", {
    stroke: D && !p ? g.fill : "none",
    d: I
  }), /* @__PURE__ */ _e.createElement("clipPath", {
    id: b
  }, /* @__PURE__ */ _e.createElement("rect", {
    x: -O,
    y: O * (A ? -1 : 1),
    width: s + D,
    height: s
  })));
});
function $8() {
  const e = /* @__PURE__ */ new Map();
  return {
    emit(t, r) {
      var n;
      (n = e.get(t)) == null || n.forEach((a) => a(r));
    },
    on(t, r) {
      e.set(t, [...e.get(t) || [], r]);
    },
    off(t, r) {
      var n;
      e.set(t, ((n = e.get(t)) == null ? void 0 : n.filter((a) => a !== r)) || []);
    }
  };
}
const L8 = /* @__PURE__ */ _e.createContext(null), F8 = /* @__PURE__ */ _e.createContext(null), H8 = () => {
  var e;
  return ((e = _e.useContext(L8)) == null ? void 0 : e.id) || null;
}, B8 = () => _e.useContext(F8);
function j8(e) {
  const {
    open: t = !1,
    onOpenChange: r,
    elements: n
  } = e, a = Dw(), i = _e.useRef({}), [o] = _e.useState(() => $8()), s = H8() != null;
  if (process.env.NODE_ENV !== "production") {
    const p = n.reference;
    p && !zt(p) && A8("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [l, u] = _e.useState(n.reference), c = k8((p, v, m) => {
    i.current.openEvent = p ? v : void 0, o.emit("openchange", {
      open: p,
      event: v,
      reason: m,
      nested: s
    }), r == null || r(p, v, m);
  }), d = _e.useMemo(() => ({
    setPositionReference: u
  }), []), h = _e.useMemo(() => ({
    reference: l || n.reference || null,
    floating: n.floating || null,
    domReference: n.reference
  }), [l, n.reference, n.floating]);
  return _e.useMemo(() => ({
    dataRef: i,
    open: t,
    onOpenChange: c,
    elements: h,
    events: o,
    floatingId: a,
    refs: d
  }), [t, c, h, o, a, d]);
}
function Y8(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, r = j8({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), n = e.rootContext || r, a = n.elements, [i, o] = _e.useState(null), [s, l] = _e.useState(null), c = (a == null ? void 0 : a.domReference) || i, d = _e.useRef(null), h = B8();
  xu(() => {
    c && (d.current = c);
  }, [c]);
  const p = S8({
    ...e,
    elements: {
      ...a,
      ...s && {
        reference: s
      }
    }
  }), v = _e.useCallback((w) => {
    const S = zt(w) ? {
      getBoundingClientRect: () => w.getBoundingClientRect(),
      contextElement: w
    } : w;
    l(S), p.refs.setReference(S);
  }, [p.refs]), m = _e.useCallback((w) => {
    (zt(w) || w === null) && (d.current = w, o(w)), (zt(p.refs.reference.current) || p.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    w !== null && !zt(w)) && p.refs.setReference(w);
  }, [p.refs]), g = _e.useMemo(() => ({
    ...p.refs,
    setReference: m,
    setPositionReference: v,
    domReference: d
  }), [p.refs, m, v]), b = _e.useMemo(() => ({
    ...p.elements,
    domReference: c
  }), [p.elements, c]), y = _e.useMemo(() => ({
    ...p,
    ...n,
    refs: g,
    elements: b,
    nodeId: t
  }), [p, g, b, t, n]);
  return xu(() => {
    n.dataRef.current.floatingContext = y;
    const w = h == null ? void 0 : h.nodesRef.current.find((S) => S.id === t);
    w && (w.context = y);
  }), _e.useMemo(() => ({
    ...p,
    context: y,
    refs: g,
    elements: b
  }), [p, g, b, y]);
}
var _f = function(t, r) {
  return _f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
    n.__proto__ = a;
  } || function(n, a) {
    for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (n[i] = a[i]);
  }, _f(t, r);
};
function Ft(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  _f(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var Fe = function() {
  return Fe = Object.assign || function(r) {
    for (var n, a = 1, i = arguments.length; a < i; a++) {
      n = arguments[a];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
    }
    return r;
  }, Fe.apply(this, arguments);
};
function _n(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, i; n < a; n++)
    (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var W8 = function(e) {
  var t = e.showTimeSelectOnly, r = t === void 0 ? !1 : t, n = e.showTime, a = n === void 0 ? !1 : n, i = e.className, o = e.children, s = r ? "Choose Time" : "Choose Date".concat(a ? " and Time" : "");
  return /* @__PURE__ */ N("div", { className: i, role: "dialog", "aria-label": s, "aria-modal": "true", children: o });
}, V8 = function(e, t) {
  var r = wd(null), n = wd(e);
  n.current = e;
  var a = y0(function(i) {
    var o;
    r.current && !r.current.contains(i.target) && (t && i.target instanceof HTMLElement && i.target.classList.contains(t) || (o = n.current) === null || o === void 0 || o.call(n, i));
  }, [t]);
  return na(function() {
    return document.addEventListener("mousedown", a), function() {
      document.removeEventListener("mousedown", a);
    };
  }, [a]), r;
}, Sc = function(e) {
  var t = e.children, r = e.onClickOutside, n = e.className, a = e.containerRef, i = e.style, o = e.ignoreClass, s = V8(r, o);
  return /* @__PURE__ */ N("div", { className: n, style: i, ref: function(l) {
    s.current = l, a && (a.current = l);
  }, children: t });
}, ee;
(function(e) {
  e.ArrowUp = "ArrowUp", e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Home = "Home", e.End = "End", e.Enter = "Enter", e.Space = " ", e.Tab = "Tab", e.Escape = "Escape", e.Backspace = "Backspace", e.X = "x";
})(ee || (ee = {}));
function Ow() {
  var e = typeof window < "u" ? window : globalThis;
  return e;
}
var zs = 12, U8 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
function Ze(e) {
  if (e == null)
    return /* @__PURE__ */ new Date();
  var t = typeof e == "string" ? xG(e) : ne(e);
  return jn(t) ? t : /* @__PURE__ */ new Date();
}
function ud(e, t, r, n, a) {
  var i, o = null, s = za(r) || za(as()), l = !0;
  if (Array.isArray(t))
    return t.forEach(function(c) {
      var d = id(e, c, /* @__PURE__ */ new Date(), { locale: s, useAdditionalWeekYearTokens: !0, useAdditionalDayOfYearTokens: !0 });
      n && (l = jn(d, a) && e === ut(d, c, r)), jn(d, a) && l && (o = d);
    }), o;
  if (o = id(e, t, /* @__PURE__ */ new Date(), { locale: s, useAdditionalWeekYearTokens: !0, useAdditionalDayOfYearTokens: !0 }), n)
    l = jn(o) && e === ut(o, t, r);
  else if (!jn(o)) {
    var u = ((i = t.match(U8)) !== null && i !== void 0 ? i : []).map(function(c) {
      var d = c[0];
      if (d === "p" || d === "P") {
        var h = mu[d];
        return s ? h(c, s.formatLong) : d;
      }
      return c;
    }).join("");
    e.length > 0 && (o = id(e, u.slice(0, e.length), /* @__PURE__ */ new Date(), { useAdditionalWeekYearTokens: !0, useAdditionalDayOfYearTokens: !0 })), jn(o) || (o = new Date(e));
  }
  return jn(o) && l ? o : null;
}
function jn(e, t) {
  return hu(e) && !ri(e, t ?? /* @__PURE__ */ new Date("1/1/1800"));
}
function ut(e, t, r) {
  if (r === "en")
    return Em(e, t, { useAdditionalWeekYearTokens: !0, useAdditionalDayOfYearTokens: !0 });
  var n = r ? za(r) : void 0;
  return r && !n && console.warn('A locale object was not found for the provided string ["'.concat(r, '"].')), !n && as() && za(as()) && (n = za(as())), Em(e, t, { locale: n, useAdditionalWeekYearTokens: !0, useAdditionalDayOfYearTokens: !0 });
}
function Er(e, t) {
  var r = t.dateFormat, n = t.locale, a = Array.isArray(r) && r.length > 0 ? r[0] : r;
  return e && ut(e, a, n) || "";
}
function G8(e, t, r) {
  if (!e)
    return "";
  var n = Er(e, r), a = t ? Er(t, r) : "";
  return "".concat(n, " - ").concat(a);
}
function z8(e, t) {
  if (!(e != null && e.length))
    return "";
  var r = e[0] ? Er(e[0], t) : "";
  if (e.length === 1)
    return r;
  if (e.length === 2 && e[1]) {
    var n = Er(e[1], t);
    return "".concat(r, ", ").concat(n);
  }
  var a = e.length - 1;
  return "".concat(r, " (+").concat(a, ")");
}
function cd(e, t) {
  var r = t.hour, n = r === void 0 ? 0 : r, a = t.minute, i = a === void 0 ? 0 : a, o = t.second, s = o === void 0 ? 0 : o;
  return Tl(kl(Rl(e, s), i), n);
}
function q8(e) {
  return sp(e);
}
function K8(e, t) {
  return ut(e, "ddd", t);
}
function Nl(e) {
  return ti(e);
}
function Sa(e, t, r) {
  var n = za(t || as());
  return tn(e, { locale: n, weekStartsOn: r });
}
function Zn(e) {
  return rw(e);
}
function es(e) {
  return mc(e);
}
function $m(e) {
  return pf(e);
}
function Lm() {
  return ti(Ze());
}
function Fm(e) {
  return ew(e);
}
function X8(e) {
  return kU(e);
}
function Q8(e) {
  return tw(e);
}
function hn(e, t) {
  return e && t ? wG(e, t) : !e && !t;
}
function Jt(e, t) {
  return e && t ? yG(e, t) : !e && !t;
}
function Eu(e, t) {
  return e && t ? _G(e, t) : !e && !t;
}
function Ie(e, t) {
  return e && t ? OU(e, t) : !e && !t;
}
function Ya(e, t) {
  return e && t ? E6(e, t) : !e && !t;
}
function ts(e, t, r) {
  var n, a = ti(t), i = ew(r);
  try {
    n = vs(e, { start: a, end: i });
  } catch {
    n = !1;
  }
  return n;
}
function as() {
  var e = Ow();
  return e.__localeId__;
}
function za(e) {
  if (typeof e == "string") {
    var t = Ow();
    return t.__localeData__ ? t.__localeData__[e] : void 0;
  } else
    return e;
}
function J8(e, t, r) {
  return t(ut(e, "EEEE", r));
}
function Z8(e, t) {
  return ut(e, "EEEEEE", t);
}
function e9(e, t) {
  return ut(e, "EEE", t);
}
function mp(e, t) {
  return ut(dr(Ze(), e), "LLLL", t);
}
function Tw(e, t) {
  return ut(dr(Ze(), e), "LLL", t);
}
function t9(e, t) {
  return ut(Wi(Ze(), e), "QQQ", t);
}
function Or(e, t) {
  var r = t === void 0 ? {} : t, n = r.minDate, a = r.maxDate, i = r.excludeDates, o = r.excludeDateIntervals, s = r.includeDates, l = r.includeDateIntervals, u = r.filterDate;
  return qs(e, { minDate: n, maxDate: a }) || i && i.some(function(c) {
    return c instanceof Date ? Ie(e, c) : Ie(e, c.date);
  }) || o && o.some(function(c) {
    var d = c.start, h = c.end;
    return vs(e, { start: d, end: h });
  }) || s && !s.some(function(c) {
    return Ie(e, c);
  }) || l && !l.some(function(c) {
    var d = c.start, h = c.end;
    return vs(e, { start: d, end: h });
  }) || u && !u(Ze(e)) || !1;
}
function bp(e, t) {
  var r = t === void 0 ? {} : t, n = r.excludeDates, a = r.excludeDateIntervals;
  return a && a.length > 0 ? a.some(function(i) {
    var o = i.start, s = i.end;
    return vs(e, { start: o, end: s });
  }) : n && n.some(function(i) {
    var o;
    return i instanceof Date ? Ie(e, i) : Ie(e, (o = i.date) !== null && o !== void 0 ? o : /* @__PURE__ */ new Date());
  }) || !1;
}
function kw(e, t) {
  var r = t === void 0 ? {} : t, n = r.minDate, a = r.maxDate, i = r.excludeDates, o = r.includeDates, s = r.filterDate;
  return qs(e, { minDate: n ? rw(n) : void 0, maxDate: a ? tw(a) : void 0 }) || (i == null ? void 0 : i.some(function(l) {
    return Jt(e, l instanceof Date ? l : l.date);
  })) || o && !o.some(function(l) {
    return Jt(e, l);
  }) || s && !s(Ze(e)) || !1;
}
function dl(e, t, r, n) {
  var a = xe(e), i = Ht(e), o = xe(t), s = Ht(t), l = xe(n);
  return a === o && a === l ? i <= r && r <= s : a < o ? l === a && i <= r || l === o && s >= r || l < o && l > a : !1;
}
function r9(e, t) {
  var r = t === void 0 ? {} : t, n = r.minDate, a = r.maxDate, i = r.excludeDates, o = r.includeDates;
  return qs(e, { minDate: n, maxDate: a }) || i && i.some(function(s) {
    return Jt(s instanceof Date ? s : s.date, e);
  }) || o && !o.some(function(s) {
    return Jt(s, e);
  }) || !1;
}
function fl(e, t) {
  var r = t === void 0 ? {} : t, n = r.minDate, a = r.maxDate, i = r.excludeDates, o = r.includeDates, s = r.filterDate;
  return qs(e, { minDate: n, maxDate: a }) || (i == null ? void 0 : i.some(function(l) {
    return Eu(e, l instanceof Date ? l : l.date);
  })) || o && !o.some(function(l) {
    return Eu(e, l);
  }) || s && !s(Ze(e)) || !1;
}
function hl(e, t, r) {
  if (!t || !r || !hu(t) || !hu(r)) return !1;
  var n = xe(t), a = xe(r);
  return n <= e && a >= e;
}
function Ml(e, t) {
  var r = t === void 0 ? {} : t, n = r.minDate, a = r.maxDate, i = r.excludeDates, o = r.includeDates, s = r.filterDate, l = new Date(e, 0, 1);
  return qs(l, { minDate: n ? mc(n) : void 0, maxDate: a ? nw(a) : void 0 }) || (i == null ? void 0 : i.some(function(u) {
    return hn(l, u instanceof Date ? u : u.date);
  })) || o && !o.some(function(u) {
    return hn(l, u);
  }) || s && !s(Ze(l)) || !1;
}
function pl(e, t, r, n) {
  var a = xe(e), i = Ua(e), o = xe(t), s = Ua(t), l = xe(n);
  return a === o && a === l ? i <= r && r <= s : a < o ? l === a && i <= r || l === o && s >= r || l < o && l > a : !1;
}
function qs(e, t) {
  var r, n = t === void 0 ? {} : t, a = n.minDate, i = n.maxDate;
  return (r = a && lo(e, a) < 0 || i && lo(e, i) > 0) !== null && r !== void 0 ? r : !1;
}
function Hm(e, t) {
  return t.some(function(r) {
    return Cn(r) === Cn(e) && Dn(r) === Dn(e) && Jn(r) === Jn(e);
  });
}
function Bm(e, t) {
  var r = t === void 0 ? {} : t, n = r.excludeTimes, a = r.includeTimes, i = r.filterTime;
  return n && Hm(e, n) || a && !Hm(e, a) || i && !i(e) || !1;
}
function jm(e, t) {
  var r = t.minTime, n = t.maxTime;
  if (!r || !n)
    throw new Error("Both minTime and maxTime props required");
  var a = Ze();
  a = Tl(a, Cn(e)), a = kl(a, Dn(e)), a = Rl(a, Jn(e));
  var i = Ze();
  i = Tl(i, Cn(r)), i = kl(i, Dn(r)), i = Rl(i, Jn(r));
  var o = Ze();
  o = Tl(o, Cn(n)), o = kl(o, Dn(n)), o = Rl(o, Jn(n));
  var s;
  try {
    s = !vs(a, { start: i, end: o });
  } catch {
    s = !1;
  }
  return s;
}
function Ym(e, t) {
  var r = t === void 0 ? {} : t, n = r.minDate, a = r.includeDates, i = uo(e, 1);
  return n && pu(n, i) > 0 || a && a.every(function(o) {
    return pu(o, i) > 0;
  }) || !1;
}
function Wm(e, t) {
  var r = t === void 0 ? {} : t, n = r.maxDate, a = r.includeDates, i = en(e, 1);
  return n && pu(i, n) > 0 || a && a.every(function(o) {
    return pu(i, o) > 0;
  }) || !1;
}
function n9(e, t) {
  var r = t === void 0 ? {} : t, n = r.minDate, a = r.includeDates, i = mc(e), o = vw(i, 1);
  return n && vu(n, o) > 0 || a && a.every(function(s) {
    return vu(s, o) > 0;
  }) || !1;
}
function a9(e, t) {
  var r = t === void 0 ? {} : t, n = r.maxDate, a = r.includeDates, i = nw(e), o = op(i, 1);
  return n && vu(o, n) > 0 || a && a.every(function(s) {
    return vu(o, s) > 0;
  }) || !1;
}
function Vm(e, t) {
  var r = t === void 0 ? {} : t, n = r.minDate, a = r.includeDates, i = co(e, 1);
  return n && gu(n, i) > 0 || a && a.every(function(o) {
    return gu(o, i) > 0;
  }) || !1;
}
function i9(e, t) {
  var r = t === void 0 ? {} : t, n = r.minDate, a = r.yearItemNumber, i = a === void 0 ? zs : a, o = es(co(e, i)), s = ba(o, i).endPeriod, l = n && xe(n);
  return l && l > s || !1;
}
function Um(e, t) {
  var r = t === void 0 ? {} : t, n = r.maxDate, a = r.includeDates, i = Xn(e, 1);
  return n && gu(i, n) > 0 || a && a.every(function(o) {
    return gu(i, o) > 0;
  }) || !1;
}
function o9(e, t) {
  var r = t === void 0 ? {} : t, n = r.maxDate, a = r.yearItemNumber, i = a === void 0 ? zs : a, o = Xn(e, i), s = ba(o, i).startPeriod, l = n && xe(n);
  return l && l < s || !1;
}
function Rw(e) {
  var t = e.minDate, r = e.includeDates;
  if (r && t) {
    var n = r.filter(function(a) {
      return lo(a, t) >= 0;
    });
    return bm(n);
  } else return r ? bm(r) : t;
}
function Pw(e) {
  var t = e.maxDate, r = e.includeDates;
  if (r && t) {
    var n = r.filter(function(a) {
      return lo(a, t) <= 0;
    });
    return mm(n);
  } else return r ? mm(r) : t;
}
function Gm(e, t) {
  var r;
  e === void 0 && (e = []), t === void 0 && (t = "react-datepicker__day--highlighted");
  for (var n = /* @__PURE__ */ new Map(), a = 0, i = e.length; a < i; a++) {
    var o = e[a];
    if (Qn(o)) {
      var s = ut(o, "MM.dd.yyyy"), l = n.get(s) || [];
      l.includes(t) || (l.push(t), n.set(s, l));
    } else if (typeof o == "object") {
      var u = Object.keys(o), c = (r = u[0]) !== null && r !== void 0 ? r : "", d = o[c];
      if (typeof c == "string" && Array.isArray(d))
        for (var h = 0, p = d.length; h < p; h++) {
          var v = d[h];
          if (v) {
            var s = ut(v, "MM.dd.yyyy"), l = n.get(s) || [];
            l.includes(c) || (l.push(c), n.set(s, l));
          }
        }
    }
  }
  return n;
}
function s9(e, t) {
  return e.length !== t.length ? !1 : e.every(function(r, n) {
    return r === t[n];
  });
}
function l9(e, t) {
  e === void 0 && (e = []), t === void 0 && (t = "react-datepicker__day--holidays");
  var r = /* @__PURE__ */ new Map();
  return e.forEach(function(n) {
    var a = n.date, i = n.holidayName;
    if (Qn(a)) {
      var o = ut(a, "MM.dd.yyyy"), s = r.get(o) || { className: "", holidayNames: [] };
      if (!("className" in s && s.className === t && s9(s.holidayNames, [i]))) {
        s.className = t;
        var l = s.holidayNames;
        s.holidayNames = l ? _n(_n([], l, !0), [i], !1) : [i], r.set(o, s);
      }
    }
  }), r;
}
function u9(e, t, r, n, a) {
  for (var i = a.length, o = [], s = 0; s < i; s++) {
    var l = e, u = a[s];
    u && (l = xU(l, Cn(u)), l = hf(l, Dn(u)), l = DU(l, Jn(u)));
    var c = hf(e, (r + 1) * n);
    Oa(l, t) && ri(l, c) && u != null && o.push(u);
  }
  return o;
}
function zm(e) {
  return e < 10 ? "0".concat(e) : "".concat(e);
}
function ba(e, t) {
  t === void 0 && (t = zs);
  var r = Math.ceil(xe(e) / t) * t, n = r - (t - 1);
  return { startPeriod: n, endPeriod: r };
}
function c9(e) {
  var t = new Date(e.getFullYear(), e.getMonth(), e.getDate()), r = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 24);
  return Math.round((+r - +t) / 36e5);
}
function qm(e) {
  var t = e.getSeconds(), r = e.getMilliseconds();
  return ne(e.getTime() - t * 1e3 - r);
}
function d9(e, t) {
  return qm(e).getTime() === qm(t).getTime();
}
function Km(e) {
  if (!Qn(e))
    throw new Error("Invalid date");
  var t = new Date(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Xm(e, t) {
  if (!Qn(e) || !Qn(t))
    throw new Error("Invalid date received");
  var r = Km(e), n = Km(t);
  return ri(r, n);
}
function Nw(e) {
  return e.key === ee.Space;
}
var f9 = (
  /** @class */
  function(e) {
    Ft(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.inputRef = f.createRef(), n.onTimeChange = function(a) {
        var i, o;
        n.setState({ time: a });
        var s = n.props.date, l = s instanceof Date && !isNaN(+s), u = l ? s : /* @__PURE__ */ new Date();
        if (a != null && a.includes(":")) {
          var c = a.split(":"), d = c[0], h = c[1];
          u.setHours(Number(d)), u.setMinutes(Number(h));
        }
        (o = (i = n.props).onChange) === null || o === void 0 || o.call(i, u);
      }, n.renderTimeInput = function() {
        var a = n.state.time, i = n.props, o = i.date, s = i.timeString, l = i.customTimeInput;
        return l ? $l(l, { date: o, value: a, onChange: n.onTimeChange }) : /* @__PURE__ */ N("input", { type: "time", className: "react-datepicker-time__input", placeholder: "Time", name: "time-input", ref: n.inputRef, onClick: function() {
          var u;
          (u = n.inputRef.current) === null || u === void 0 || u.focus();
        }, required: !0, value: a, onChange: function(u) {
          n.onTimeChange(u.target.value || s);
        } });
      }, n.state = { time: n.props.timeString }, n;
    }
    return t.getDerivedStateFromProps = function(r, n) {
      return r.timeString !== n.time ? { time: r.timeString } : null;
    }, t.prototype.render = function() {
      return /* @__PURE__ */ lt("div", { className: "react-datepicker__input-time-container", children: [/* @__PURE__ */ N("div", { className: "react-datepicker-time__caption", children: this.props.timeInputLabel }), /* @__PURE__ */ N("div", { className: "react-datepicker-time__input-container", children: /* @__PURE__ */ N("div", { className: "react-datepicker-time__input", children: this.renderTimeInput() }) })] });
    }, t;
  }(tt)
), h9 = (
  /** @class */
  function(e) {
    Ft(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.dayEl = xa(), r.handleClick = function(n) {
        !r.isDisabled() && r.props.onClick && r.props.onClick(n);
      }, r.handleMouseEnter = function(n) {
        !r.isDisabled() && r.props.onMouseEnter && r.props.onMouseEnter(n);
      }, r.handleOnKeyDown = function(n) {
        var a, i, o = n.key;
        o === ee.Space && (n.preventDefault(), n.key = ee.Enter), (i = (a = r.props).handleOnKeyDown) === null || i === void 0 || i.call(a, n);
      }, r.isSameDay = function(n) {
        return Ie(r.props.day, n);
      }, r.isKeyboardSelected = function() {
        var n;
        if (r.props.disabledKeyboardNavigation)
          return !1;
        var a = r.props.selectsMultiple ? (n = r.props.selectedDates) === null || n === void 0 ? void 0 : n.some(function(o) {
          return r.isSameDayOrWeek(o);
        }) : r.isSameDayOrWeek(r.props.selected), i = r.props.preSelection && r.isDisabled(r.props.preSelection);
        return !a && r.isSameDayOrWeek(r.props.preSelection) && !i;
      }, r.isDisabled = function(n) {
        return n === void 0 && (n = r.props.day), Or(n, { minDate: r.props.minDate, maxDate: r.props.maxDate, excludeDates: r.props.excludeDates, excludeDateIntervals: r.props.excludeDateIntervals, includeDateIntervals: r.props.includeDateIntervals, includeDates: r.props.includeDates, filterDate: r.props.filterDate });
      }, r.isExcluded = function() {
        return bp(r.props.day, { excludeDates: r.props.excludeDates, excludeDateIntervals: r.props.excludeDateIntervals });
      }, r.isStartOfWeek = function() {
        return Ie(r.props.day, Sa(r.props.day, r.props.locale, r.props.calendarStartDay));
      }, r.isSameWeek = function(n) {
        return r.props.showWeekPicker && Ie(n, Sa(r.props.day, r.props.locale, r.props.calendarStartDay));
      }, r.isSameDayOrWeek = function(n) {
        return r.isSameDay(n) || r.isSameWeek(n);
      }, r.getHighLightedClass = function() {
        var n = r.props, a = n.day, i = n.highlightDates;
        if (!i)
          return !1;
        var o = ut(a, "MM.dd.yyyy");
        return i.get(o);
      }, r.getHolidaysClass = function() {
        var n, a = r.props, i = a.day, o = a.holidays;
        if (!o)
          return [void 0];
        var s = ut(i, "MM.dd.yyyy");
        return o.has(s) ? [(n = o.get(s)) === null || n === void 0 ? void 0 : n.className] : [void 0];
      }, r.isInRange = function() {
        var n = r.props, a = n.day, i = n.startDate, o = n.endDate;
        return !i || !o ? !1 : ts(a, i, o);
      }, r.isInSelectingRange = function() {
        var n, a = r.props, i = a.day, o = a.selectsStart, s = a.selectsEnd, l = a.selectsRange, u = a.selectsDisabledDaysInRange, c = a.startDate, d = a.endDate, h = (n = r.props.selectingDate) !== null && n !== void 0 ? n : r.props.preSelection;
        return !(o || s || l) || !h || !u && r.isDisabled() ? !1 : o && d && (ri(h, d) || Ya(h, d)) ? ts(i, h, d) : s && c && (Oa(h, c) || Ya(h, c)) || l && c && !d && (Oa(h, c) || Ya(h, c)) ? ts(i, c, h) : !1;
      }, r.isSelectingRangeStart = function() {
        var n;
        if (!r.isInSelectingRange())
          return !1;
        var a = r.props, i = a.day, o = a.startDate, s = a.selectsStart, l = (n = r.props.selectingDate) !== null && n !== void 0 ? n : r.props.preSelection;
        return s ? Ie(i, l) : Ie(i, o);
      }, r.isSelectingRangeEnd = function() {
        var n;
        if (!r.isInSelectingRange())
          return !1;
        var a = r.props, i = a.day, o = a.endDate, s = a.selectsEnd, l = a.selectsRange, u = (n = r.props.selectingDate) !== null && n !== void 0 ? n : r.props.preSelection;
        return s || l ? Ie(i, u) : Ie(i, o);
      }, r.isRangeStart = function() {
        var n = r.props, a = n.day, i = n.startDate, o = n.endDate;
        return !i || !o ? !1 : Ie(i, a);
      }, r.isRangeEnd = function() {
        var n = r.props, a = n.day, i = n.startDate, o = n.endDate;
        return !i || !o ? !1 : Ie(o, a);
      }, r.isWeekend = function() {
        var n = _6(r.props.day);
        return n === 0 || n === 6;
      }, r.isAfterMonth = function() {
        return r.props.month !== void 0 && (r.props.month + 1) % 12 === Ht(r.props.day);
      }, r.isBeforeMonth = function() {
        return r.props.month !== void 0 && (Ht(r.props.day) + 1) % 12 === r.props.month;
      }, r.isCurrentDay = function() {
        return r.isSameDay(Ze());
      }, r.isSelected = function() {
        var n;
        return r.props.selectsMultiple ? (n = r.props.selectedDates) === null || n === void 0 ? void 0 : n.some(function(a) {
          return r.isSameDayOrWeek(a);
        }) : r.isSameDayOrWeek(r.props.selected);
      }, r.getClassNames = function(n) {
        var a = r.props.dayClassName ? r.props.dayClassName(n) : void 0;
        return Lt("react-datepicker__day", a, "react-datepicker__day--" + K8(r.props.day), { "react-datepicker__day--disabled": r.isDisabled(), "react-datepicker__day--excluded": r.isExcluded(), "react-datepicker__day--selected": r.isSelected(), "react-datepicker__day--keyboard-selected": r.isKeyboardSelected(), "react-datepicker__day--range-start": r.isRangeStart(), "react-datepicker__day--range-end": r.isRangeEnd(), "react-datepicker__day--in-range": r.isInRange(), "react-datepicker__day--in-selecting-range": r.isInSelectingRange(), "react-datepicker__day--selecting-range-start": r.isSelectingRangeStart(), "react-datepicker__day--selecting-range-end": r.isSelectingRangeEnd(), "react-datepicker__day--today": r.isCurrentDay(), "react-datepicker__day--weekend": r.isWeekend(), "react-datepicker__day--outside-month": r.isAfterMonth() || r.isBeforeMonth() }, r.getHighLightedClass(), r.getHolidaysClass());
      }, r.getAriaLabel = function() {
        var n = r.props, a = n.day, i = n.ariaLabelPrefixWhenEnabled, o = i === void 0 ? "Choose" : i, s = n.ariaLabelPrefixWhenDisabled, l = s === void 0 ? "Not available" : s, u = r.isDisabled() || r.isExcluded() ? l : o;
        return "".concat(u, " ").concat(ut(a, "PPPP", r.props.locale));
      }, r.getTitle = function() {
        var n = r.props, a = n.day, i = n.holidays, o = i === void 0 ? /* @__PURE__ */ new Map() : i, s = n.excludeDates, l = ut(a, "MM.dd.yyyy"), u = [];
        return o.has(l) && u.push.apply(u, o.get(l).holidayNames), r.isExcluded() && u.push(s == null ? void 0 : s.filter(function(c) {
          return c instanceof Date ? Ie(c, a) : Ie(c == null ? void 0 : c.date, a);
        }).map(function(c) {
          if (!(c instanceof Date))
            return c == null ? void 0 : c.message;
        })), u.join(", ");
      }, r.getTabIndex = function() {
        var n = r.props.selected, a = r.props.preSelection, i = !(r.props.showWeekPicker && (r.props.showWeekNumber || !r.isStartOfWeek())) && (r.isKeyboardSelected() || r.isSameDay(n) && Ie(a, n)) ? 0 : -1;
        return i;
      }, r.handleFocusDay = function() {
        var n;
        r.shouldFocusDay() && ((n = r.dayEl.current) === null || n === void 0 || n.focus({ preventScroll: !0 }));
      }, r.renderDayContents = function() {
        return r.props.monthShowsDuplicateDaysEnd && r.isAfterMonth() || r.props.monthShowsDuplicateDaysStart && r.isBeforeMonth() ? null : r.props.renderDayContents ? r.props.renderDayContents(Cm(r.props.day), r.props.day) : Cm(r.props.day);
      }, r.render = function() {
        return (
          // TODO: Use <option> instead of the "option" role to ensure accessibility across all devices.
          /* @__PURE__ */ lt("div", { ref: r.dayEl, className: r.getClassNames(r.props.day), onKeyDown: r.handleOnKeyDown, onClick: r.handleClick, onMouseEnter: r.props.usePointerEvent ? void 0 : r.handleMouseEnter, onPointerEnter: r.props.usePointerEvent ? r.handleMouseEnter : void 0, tabIndex: r.getTabIndex(), "aria-label": r.getAriaLabel(), role: "option", title: r.getTitle(), "aria-disabled": r.isDisabled(), "aria-current": r.isCurrentDay() ? "date" : void 0, "aria-selected": r.isSelected() || r.isInRange(), children: [r.renderDayContents(), r.getTitle() !== "" && /* @__PURE__ */ N("span", { className: "overlay", children: r.getTitle() })] })
        );
      }, r;
    }
    return t.prototype.componentDidMount = function() {
      this.handleFocusDay();
    }, t.prototype.componentDidUpdate = function() {
      this.handleFocusDay();
    }, t.prototype.shouldFocusDay = function() {
      var r = !1;
      return this.getTabIndex() === 0 && this.isSameDay(this.props.preSelection) && ((!document.activeElement || document.activeElement === document.body) && (r = !0), this.props.inline && !this.props.shouldFocusDayInline && (r = !1), this.isDayActiveElement() && (r = !0), this.isDuplicateDay() && (r = !1)), r;
    }, t.prototype.isDayActiveElement = function() {
      var r, n, a;
      return ((n = (r = this.props.containerRef) === null || r === void 0 ? void 0 : r.current) === null || n === void 0 ? void 0 : n.contains(document.activeElement)) && ((a = document.activeElement) === null || a === void 0 ? void 0 : a.classList.contains("react-datepicker__day"));
    }, t.prototype.isDuplicateDay = function() {
      return (
        //day is one of the non rendered duplicate days
        this.props.monthShowsDuplicateDaysEnd && this.isAfterMonth() || this.props.monthShowsDuplicateDaysStart && this.isBeforeMonth()
      );
    }, t;
  }(tt)
), p9 = (
  /** @class */
  function(e) {
    Ft(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.weekNumberEl = xa(), r.handleClick = function(n) {
        r.props.onClick && r.props.onClick(n);
      }, r.handleOnKeyDown = function(n) {
        var a, i, o = n.key;
        o === ee.Space && (n.preventDefault(), n.key = ee.Enter), (i = (a = r.props).handleOnKeyDown) === null || i === void 0 || i.call(a, n);
      }, r.isKeyboardSelected = function() {
        return !r.props.disabledKeyboardNavigation && !Ie(r.props.date, r.props.selected) && Ie(r.props.date, r.props.preSelection);
      }, r.getTabIndex = function() {
        return r.props.showWeekPicker && r.props.showWeekNumber && (r.isKeyboardSelected() || Ie(r.props.date, r.props.selected) && Ie(r.props.preSelection, r.props.selected)) ? 0 : -1;
      }, r.handleFocusWeekNumber = function(n) {
        var a = !1;
        r.getTabIndex() === 0 && !(n != null && n.isInputFocused) && Ie(r.props.date, r.props.preSelection) && ((!document.activeElement || document.activeElement === document.body) && (a = !0), r.props.inline && !r.props.shouldFocusDayInline && (a = !1), r.props.containerRef && r.props.containerRef.current && r.props.containerRef.current.contains(document.activeElement) && document.activeElement && document.activeElement.classList.contains("react-datepicker__week-number") && (a = !0)), a && r.weekNumberEl.current && r.weekNumberEl.current.focus({ preventScroll: !0 });
      }, r;
    }
    return Object.defineProperty(t, "defaultProps", { get: function() {
      return { ariaLabelPrefix: "week " };
    }, enumerable: !1, configurable: !0 }), t.prototype.componentDidMount = function() {
      this.handleFocusWeekNumber();
    }, t.prototype.componentDidUpdate = function(r) {
      this.handleFocusWeekNumber(r);
    }, t.prototype.render = function() {
      var r = this.props, n = r.weekNumber, a = r.ariaLabelPrefix, i = a === void 0 ? t.defaultProps.ariaLabelPrefix : a, o = r.onClick, s = { "react-datepicker__week-number": !0, "react-datepicker__week-number--clickable": !!o, "react-datepicker__week-number--selected": !!o && Ie(this.props.date, this.props.selected), "react-datepicker__week-number--keyboard-selected": this.isKeyboardSelected() };
      return /* @__PURE__ */ N("div", { ref: this.weekNumberEl, className: Lt(s), "aria-label": "".concat(i, " ").concat(this.props.weekNumber), onClick: this.handleClick, onKeyDown: this.handleOnKeyDown, tabIndex: this.getTabIndex(), children: n });
    }, t;
  }(tt)
), v9 = (
  /** @class */
  function(e) {
    Ft(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.isDisabled = function(n) {
        return Or(n, { minDate: r.props.minDate, maxDate: r.props.maxDate, excludeDates: r.props.excludeDates, excludeDateIntervals: r.props.excludeDateIntervals, includeDateIntervals: r.props.includeDateIntervals, includeDates: r.props.includeDates, filterDate: r.props.filterDate });
      }, r.handleDayClick = function(n, a) {
        r.props.onDayClick && r.props.onDayClick(n, a);
      }, r.handleDayMouseEnter = function(n) {
        r.props.onDayMouseEnter && r.props.onDayMouseEnter(n);
      }, r.handleWeekClick = function(n, a, i) {
        for (var o, s, l, u = new Date(n), c = 0; c < 7; c++) {
          var d = new Date(n);
          d.setDate(d.getDate() + c);
          var h = !r.isDisabled(d);
          if (h) {
            u = d;
            break;
          }
        }
        typeof r.props.onWeekSelect == "function" && r.props.onWeekSelect(u, a, i), r.props.showWeekPicker && r.handleDayClick(u, i), ((o = r.props.shouldCloseOnSelect) !== null && o !== void 0 ? o : t.defaultProps.shouldCloseOnSelect) && ((l = (s = r.props).setOpen) === null || l === void 0 || l.call(s, !1));
      }, r.formatWeekNumber = function(n) {
        return r.props.formatWeekNumber ? r.props.formatWeekNumber(n) : q8(n);
      }, r.renderDays = function() {
        var n = r.startOfWeek(), a = [], i = r.formatWeekNumber(n);
        if (r.props.showWeekNumber) {
          var o = r.props.onWeekSelect || r.props.showWeekPicker ? r.handleWeekClick.bind(r, n, i) : void 0;
          a.push(/* @__PURE__ */ N(p9, { ...Fe({ key: "W" }, t.defaultProps, r.props, { weekNumber: i, date: n, onClick: o }) }));
        }
        return a.concat([0, 1, 2, 3, 4, 5, 6].map(function(s) {
          var l = ra(n, s);
          return /* @__PURE__ */ N(h9, { ...Fe({}, t.defaultProps, r.props, { ariaLabelPrefixWhenEnabled: r.props.chooseDayAriaLabelPrefix, ariaLabelPrefixWhenDisabled: r.props.disabledDayAriaLabelPrefix, key: l.valueOf(), day: l, onClick: r.handleDayClick.bind(r, l), onMouseEnter: r.handleDayMouseEnter.bind(r, l) }) });
        }));
      }, r.startOfWeek = function() {
        return Sa(r.props.day, r.props.locale, r.props.calendarStartDay);
      }, r.isKeyboardSelected = function() {
        return !r.props.disabledKeyboardNavigation && !Ie(r.startOfWeek(), r.props.selected) && Ie(r.startOfWeek(), r.props.preSelection);
      }, r;
    }
    return Object.defineProperty(t, "defaultProps", { get: function() {
      return { shouldCloseOnSelect: !0 };
    }, enumerable: !1, configurable: !0 }), t.prototype.render = function() {
      var r = { "react-datepicker__week": !0, "react-datepicker__week--selected": Ie(this.startOfWeek(), this.props.selected), "react-datepicker__week--keyboard-selected": this.isKeyboardSelected() };
      return /* @__PURE__ */ N("div", { className: Lt(r), children: this.renderDays() });
    }, t;
  }(tt)
), Ko, g9 = 6, to = { TWO_COLUMNS: "two_columns", THREE_COLUMNS: "three_columns", FOUR_COLUMNS: "four_columns" }, dd = (Ko = {}, Ko[to.TWO_COLUMNS] = { grid: [[0, 1], [2, 3], [4, 5], [6, 7], [8, 9], [10, 11]], verticalNavigationOffset: 2 }, Ko[to.THREE_COLUMNS] = { grid: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11]], verticalNavigationOffset: 3 }, Ko[to.FOUR_COLUMNS] = { grid: [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]], verticalNavigationOffset: 4 }, Ko), vl = 1;
function Qm(e, t) {
  return e ? to.FOUR_COLUMNS : t ? to.TWO_COLUMNS : to.THREE_COLUMNS;
}
var m9 = (
  /** @class */
  function(e) {
    Ft(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.MONTH_REFS = _n([], Array(12), !0).map(function() {
        return xa();
      }), r.QUARTER_REFS = _n([], Array(4), !0).map(function() {
        return xa();
      }), r.isDisabled = function(n) {
        return Or(n, { minDate: r.props.minDate, maxDate: r.props.maxDate, excludeDates: r.props.excludeDates, excludeDateIntervals: r.props.excludeDateIntervals, includeDateIntervals: r.props.includeDateIntervals, includeDates: r.props.includeDates, filterDate: r.props.filterDate });
      }, r.isExcluded = function(n) {
        return bp(n, { excludeDates: r.props.excludeDates, excludeDateIntervals: r.props.excludeDateIntervals });
      }, r.handleDayClick = function(n, a) {
        var i, o;
        (o = (i = r.props).onDayClick) === null || o === void 0 || o.call(i, n, a, r.props.orderInDisplay);
      }, r.handleDayMouseEnter = function(n) {
        var a, i;
        (i = (a = r.props).onDayMouseEnter) === null || i === void 0 || i.call(a, n);
      }, r.handleMouseLeave = function() {
        var n, a;
        (a = (n = r.props).onMouseLeave) === null || a === void 0 || a.call(n);
      }, r.isRangeStartMonth = function(n) {
        var a = r.props, i = a.day, o = a.startDate, s = a.endDate;
        return !o || !s ? !1 : Jt(dr(i, n), o);
      }, r.isRangeStartQuarter = function(n) {
        var a = r.props, i = a.day, o = a.startDate, s = a.endDate;
        return !o || !s ? !1 : Eu(Wi(i, n), o);
      }, r.isRangeEndMonth = function(n) {
        var a = r.props, i = a.day, o = a.startDate, s = a.endDate;
        return !o || !s ? !1 : Jt(dr(i, n), s);
      }, r.isRangeEndQuarter = function(n) {
        var a = r.props, i = a.day, o = a.startDate, s = a.endDate;
        return !o || !s ? !1 : Eu(Wi(i, n), s);
      }, r.isInSelectingRangeMonth = function(n) {
        var a, i = r.props, o = i.day, s = i.selectsStart, l = i.selectsEnd, u = i.selectsRange, c = i.startDate, d = i.endDate, h = (a = r.props.selectingDate) !== null && a !== void 0 ? a : r.props.preSelection;
        return !(s || l || u) || !h ? !1 : s && d ? dl(h, d, n, o) : l && c || u && c && !d ? dl(c, h, n, o) : !1;
      }, r.isSelectingMonthRangeStart = function(n) {
        var a;
        if (!r.isInSelectingRangeMonth(n))
          return !1;
        var i = r.props, o = i.day, s = i.startDate, l = i.selectsStart, u = dr(o, n), c = (a = r.props.selectingDate) !== null && a !== void 0 ? a : r.props.preSelection;
        return l ? Jt(u, c) : Jt(u, s);
      }, r.isSelectingMonthRangeEnd = function(n) {
        var a;
        if (!r.isInSelectingRangeMonth(n))
          return !1;
        var i = r.props, o = i.day, s = i.endDate, l = i.selectsEnd, u = i.selectsRange, c = dr(o, n), d = (a = r.props.selectingDate) !== null && a !== void 0 ? a : r.props.preSelection;
        return l || u ? Jt(c, d) : Jt(c, s);
      }, r.isInSelectingRangeQuarter = function(n) {
        var a, i = r.props, o = i.day, s = i.selectsStart, l = i.selectsEnd, u = i.selectsRange, c = i.startDate, d = i.endDate, h = (a = r.props.selectingDate) !== null && a !== void 0 ? a : r.props.preSelection;
        return !(s || l || u) || !h ? !1 : s && d ? pl(h, d, n, o) : l && c || u && c && !d ? pl(c, h, n, o) : !1;
      }, r.isWeekInMonth = function(n) {
        var a = r.props.day, i = ra(n, 6);
        return Jt(n, a) || Jt(i, a);
      }, r.isCurrentMonth = function(n, a) {
        return xe(n) === xe(Ze()) && a === Ht(Ze());
      }, r.isCurrentQuarter = function(n, a) {
        return xe(n) === xe(Ze()) && a === Ua(Ze());
      }, r.isSelectedMonth = function(n, a, i) {
        return Ht(i) === a && xe(n) === xe(i);
      }, r.isSelectMonthInList = function(n, a, i) {
        return i.some(function(o) {
          return r.isSelectedMonth(n, a, o);
        });
      }, r.isSelectedQuarter = function(n, a, i) {
        return Ua(n) === a && xe(n) === xe(i);
      }, r.renderWeeks = function() {
        for (var n = [], a = r.props.fixedHeight, i = 0, o = !1, s = Sa(Zn(r.props.day), r.props.locale, r.props.calendarStartDay), l = function(v) {
          return r.props.showWeekPicker ? Sa(v, r.props.locale, r.props.calendarStartDay) : r.props.preSelection;
        }, u = function(v) {
          return r.props.showWeekPicker ? Sa(v, r.props.locale, r.props.calendarStartDay) : r.props.selected;
        }, c = r.props.selected ? u(r.props.selected) : void 0, d = r.props.preSelection ? l(r.props.preSelection) : void 0; n.push(/* @__PURE__ */ N(v9, { ...Fe({}, r.props, { ariaLabelPrefix: r.props.weekAriaLabelPrefix, key: i, day: s, month: Ht(r.props.day), onDayClick: r.handleDayClick, onDayMouseEnter: r.handleDayMouseEnter, selected: c, preSelection: d, showWeekNumber: r.props.showWeekNumbers }) })), !o; ) {
          i++, s = fu(s, 1);
          var h = a && i >= g9, p = !a && !r.isWeekInMonth(s);
          if (h || p)
            if (r.props.peekNextMonth)
              o = !0;
            else
              break;
        }
        return n;
      }, r.onMonthClick = function(n, a) {
        var i = r.isMonthDisabledForLabelDate(a), o = i.isDisabled, s = i.labelDate;
        o || r.handleDayClick(Zn(s), n);
      }, r.onMonthMouseEnter = function(n) {
        var a = r.isMonthDisabledForLabelDate(n), i = a.isDisabled, o = a.labelDate;
        i || r.handleDayMouseEnter(Zn(o));
      }, r.handleMonthNavigation = function(n, a) {
        var i, o, s, l;
        (o = (i = r.props).setPreSelection) === null || o === void 0 || o.call(i, a), (l = (s = r.MONTH_REFS[n]) === null || s === void 0 ? void 0 : s.current) === null || l === void 0 || l.focus();
      }, r.handleKeyboardNavigation = function(n, a, i) {
        var o, s = r.props, l = s.selected, u = s.preSelection, c = s.setPreSelection, d = s.minDate, h = s.maxDate, p = s.showFourColumnMonthYearPicker, v = s.showTwoColumnMonthYearPicker;
        if (u) {
          var m = Qm(p, v), g = r.getVerticalOffset(m), b = (o = dd[m]) === null || o === void 0 ? void 0 : o.grid, y = function(C, D, O) {
            var R, P, A = D, B = O;
            switch (C) {
              case ee.ArrowRight:
                A = en(D, vl), B = O === 11 ? 0 : O + vl;
                break;
              case ee.ArrowLeft:
                A = uo(D, vl), B = O === 0 ? 11 : O - vl;
                break;
              case ee.ArrowUp:
                A = uo(D, g), B = !((R = b == null ? void 0 : b[0]) === null || R === void 0) && R.includes(O) ? O + 12 - g : O - g;
                break;
              case ee.ArrowDown:
                A = en(D, g), B = !((P = b == null ? void 0 : b[b.length - 1]) === null || P === void 0) && P.includes(O) ? O - 12 + g : O + g;
                break;
            }
            return { newCalculatedDate: A, newCalculatedMonth: B };
          }, w = function(C, D, O) {
            for (var R = 40, P = C, A = !1, B = 0, $ = y(P, D, O), K = $.newCalculatedDate, L = $.newCalculatedMonth; !A; ) {
              if (B >= R) {
                K = D, L = O;
                break;
              }
              if (d && K < d) {
                P = ee.ArrowRight;
                var I = y(P, K, L);
                K = I.newCalculatedDate, L = I.newCalculatedMonth;
              }
              if (h && K > h) {
                P = ee.ArrowLeft;
                var I = y(P, K, L);
                K = I.newCalculatedDate, L = I.newCalculatedMonth;
              }
              if (r9(K, r.props)) {
                var I = y(P, K, L);
                K = I.newCalculatedDate, L = I.newCalculatedMonth;
              } else
                A = !0;
              B++;
            }
            return { newCalculatedDate: K, newCalculatedMonth: L };
          };
          if (a === ee.Enter) {
            r.isMonthDisabled(i) || (r.onMonthClick(n, i), c == null || c(l));
            return;
          }
          var S = w(a, u, i), _ = S.newCalculatedDate, E = S.newCalculatedMonth;
          switch (a) {
            case ee.ArrowRight:
            case ee.ArrowLeft:
            case ee.ArrowUp:
            case ee.ArrowDown:
              r.handleMonthNavigation(E, _);
              break;
          }
        }
      }, r.getVerticalOffset = function(n) {
        var a, i;
        return (i = (a = dd[n]) === null || a === void 0 ? void 0 : a.verticalNavigationOffset) !== null && i !== void 0 ? i : 0;
      }, r.onMonthKeyDown = function(n, a) {
        var i = r.props, o = i.disabledKeyboardNavigation, s = i.handleOnMonthKeyDown, l = n.key;
        l !== ee.Tab && n.preventDefault(), o || r.handleKeyboardNavigation(n, l, a), s && s(n);
      }, r.onQuarterClick = function(n, a) {
        var i = Wi(r.props.day, a);
        fl(i, r.props) || r.handleDayClick($m(i), n);
      }, r.onQuarterMouseEnter = function(n) {
        var a = Wi(r.props.day, n);
        fl(a, r.props) || r.handleDayMouseEnter($m(a));
      }, r.handleQuarterNavigation = function(n, a) {
        var i, o, s, l;
        r.isDisabled(a) || r.isExcluded(a) || ((o = (i = r.props).setPreSelection) === null || o === void 0 || o.call(i, a), (l = (s = r.QUARTER_REFS[n - 1]) === null || s === void 0 ? void 0 : s.current) === null || l === void 0 || l.focus());
      }, r.onQuarterKeyDown = function(n, a) {
        var i, o, s = n.key;
        if (!r.props.disabledKeyboardNavigation)
          switch (s) {
            case ee.Enter:
              r.onQuarterClick(n, a), (o = (i = r.props).setPreSelection) === null || o === void 0 || o.call(i, r.props.selected);
              break;
            case ee.ArrowRight:
              if (!r.props.preSelection)
                break;
              r.handleQuarterNavigation(a === 4 ? 1 : a + 1, op(r.props.preSelection, 1));
              break;
            case ee.ArrowLeft:
              if (!r.props.preSelection)
                break;
              r.handleQuarterNavigation(a === 1 ? 4 : a - 1, vw(r.props.preSelection, 1));
              break;
          }
      }, r.isMonthDisabledForLabelDate = function(n) {
        var a, i = r.props, o = i.day, s = i.minDate, l = i.maxDate, u = i.excludeDates, c = i.includeDates, d = dr(o, n);
        return { isDisabled: (a = (s || l || u || c) && kw(d, r.props)) !== null && a !== void 0 ? a : !1, labelDate: d };
      }, r.isMonthDisabled = function(n) {
        var a = r.isMonthDisabledForLabelDate(n).isDisabled;
        return a;
      }, r.getMonthClassNames = function(n) {
        var a = r.props, i = a.day, o = a.startDate, s = a.endDate, l = a.preSelection, u = a.monthClassName, c = u ? u(dr(i, n)) : void 0, d = r.getSelection();
        return Lt("react-datepicker__month-text", "react-datepicker__month-".concat(n), c, { "react-datepicker__month-text--disabled": r.isMonthDisabled(n), "react-datepicker__month-text--selected": d ? r.isSelectMonthInList(i, n, d) : void 0, "react-datepicker__month-text--keyboard-selected": !r.props.disabledKeyboardNavigation && l && r.isSelectedMonth(i, n, l) && !r.isMonthDisabled(n), "react-datepicker__month-text--in-selecting-range": r.isInSelectingRangeMonth(n), "react-datepicker__month-text--in-range": o && s ? dl(o, s, n, i) : void 0, "react-datepicker__month-text--range-start": r.isRangeStartMonth(n), "react-datepicker__month-text--range-end": r.isRangeEndMonth(n), "react-datepicker__month-text--selecting-range-start": r.isSelectingMonthRangeStart(n), "react-datepicker__month-text--selecting-range-end": r.isSelectingMonthRangeEnd(n), "react-datepicker__month-text--today": r.isCurrentMonth(i, n) });
      }, r.getTabIndex = function(n) {
        if (r.props.preSelection == null)
          return "-1";
        var a = Ht(r.props.preSelection), i = r.isMonthDisabledForLabelDate(a).isDisabled, o = n === a && !(i || r.props.disabledKeyboardNavigation) ? "0" : "-1";
        return o;
      }, r.getQuarterTabIndex = function(n) {
        if (r.props.preSelection == null)
          return "-1";
        var a = Ua(r.props.preSelection), i = fl(r.props.day, r.props), o = n === a && !(i || r.props.disabledKeyboardNavigation) ? "0" : "-1";
        return o;
      }, r.getAriaLabel = function(n) {
        var a = r.props, i = a.chooseDayAriaLabelPrefix, o = i === void 0 ? "Choose" : i, s = a.disabledDayAriaLabelPrefix, l = s === void 0 ? "Not available" : s, u = a.day, c = a.locale, d = dr(u, n), h = r.isDisabled(d) || r.isExcluded(d) ? l : o;
        return "".concat(h, " ").concat(ut(d, "MMMM yyyy", c));
      }, r.getQuarterClassNames = function(n) {
        var a = r.props, i = a.day, o = a.startDate, s = a.endDate, l = a.selected, u = a.minDate, c = a.maxDate, d = a.excludeDates, h = a.includeDates, p = a.filterDate, v = a.preSelection, m = a.disabledKeyboardNavigation, g = (u || c || d || h || p) && fl(Wi(i, n), r.props);
        return Lt("react-datepicker__quarter-text", "react-datepicker__quarter-".concat(n), { "react-datepicker__quarter-text--disabled": g, "react-datepicker__quarter-text--selected": l ? r.isSelectedQuarter(i, n, l) : void 0, "react-datepicker__quarter-text--keyboard-selected": !m && v && r.isSelectedQuarter(i, n, v) && !g, "react-datepicker__quarter-text--in-selecting-range": r.isInSelectingRangeQuarter(n), "react-datepicker__quarter-text--in-range": o && s ? pl(o, s, n, i) : void 0, "react-datepicker__quarter-text--range-start": r.isRangeStartQuarter(n), "react-datepicker__quarter-text--range-end": r.isRangeEndQuarter(n) });
      }, r.getMonthContent = function(n) {
        var a = r.props, i = a.showFullMonthYearPicker, o = a.renderMonthContent, s = a.locale, l = a.day, u = Tw(n, s), c = mp(n, s);
        return o ? o(n, u, c, l) : i ? c : u;
      }, r.getQuarterContent = function(n) {
        var a, i = r.props, o = i.renderQuarterContent, s = i.locale, l = t9(n, s);
        return (a = o == null ? void 0 : o(n, l)) !== null && a !== void 0 ? a : l;
      }, r.renderMonths = function() {
        var n, a = r.props, i = a.showTwoColumnMonthYearPicker, o = a.showFourColumnMonthYearPicker, s = a.day, l = a.selected, u = (n = dd[Qm(o, i)]) === null || n === void 0 ? void 0 : n.grid;
        return u == null ? void 0 : u.map(function(c, d) {
          return /* @__PURE__ */ N("div", { className: "react-datepicker__month-wrapper", children: c.map(function(h, p) {
            return /* @__PURE__ */ N("div", { ref: r.MONTH_REFS[h], onClick: function(v) {
              r.onMonthClick(v, h);
            }, onKeyDown: function(v) {
              Nw(v) && (v.preventDefault(), v.key = ee.Enter), r.onMonthKeyDown(v, h);
            }, onMouseEnter: r.props.usePointerEvent ? void 0 : function() {
              return r.onMonthMouseEnter(h);
            }, onPointerEnter: r.props.usePointerEvent ? function() {
              return r.onMonthMouseEnter(h);
            } : void 0, tabIndex: Number(r.getTabIndex(h)), className: r.getMonthClassNames(h), "aria-disabled": r.isMonthDisabled(h), role: "option", "aria-label": r.getAriaLabel(h), "aria-current": r.isCurrentMonth(s, h) ? "date" : void 0, "aria-selected": l ? r.isSelectedMonth(s, h, l) : void 0, children: r.getMonthContent(h) }, p);
          }) }, d);
        });
      }, r.renderQuarters = function() {
        var n = r.props, a = n.day, i = n.selected, o = [1, 2, 3, 4];
        return /* @__PURE__ */ N("div", { className: "react-datepicker__quarter-wrapper", children: o.map(function(s, l) {
          return /* @__PURE__ */ N("div", { ref: r.QUARTER_REFS[l], role: "option", onClick: function(u) {
            r.onQuarterClick(u, s);
          }, onKeyDown: function(u) {
            r.onQuarterKeyDown(u, s);
          }, onMouseEnter: r.props.usePointerEvent ? void 0 : function() {
            return r.onQuarterMouseEnter(s);
          }, onPointerEnter: r.props.usePointerEvent ? function() {
            return r.onQuarterMouseEnter(s);
          } : void 0, className: r.getQuarterClassNames(s), "aria-selected": i ? r.isSelectedQuarter(a, s, i) : void 0, tabIndex: Number(r.getQuarterTabIndex(s)), "aria-current": r.isCurrentQuarter(a, s) ? "date" : void 0, children: r.getQuarterContent(s) }, l);
        }) });
      }, r.getClassNames = function() {
        var n = r.props, a = n.selectingDate, i = n.selectsStart, o = n.selectsEnd, s = n.showMonthYearPicker, l = n.showQuarterYearPicker, u = n.showWeekPicker;
        return Lt("react-datepicker__month", { "react-datepicker__month--selecting-range": a && (i || o) }, { "react-datepicker__monthPicker": s }, { "react-datepicker__quarterPicker": l }, { "react-datepicker__weekPicker": u });
      }, r;
    }
    return t.prototype.getSelection = function() {
      var r = this.props, n = r.selected, a = r.selectedDates, i = r.selectsMultiple;
      if (i)
        return a;
      if (n)
        return [n];
    }, t.prototype.render = function() {
      var r = this.props, n = r.showMonthYearPicker, a = r.showQuarterYearPicker, i = r.day, o = r.ariaLabelPrefix, s = o === void 0 ? "Month " : o, l = s ? s.trim() + " " : "";
      return /* @__PURE__ */ N("div", { className: this.getClassNames(), onMouseLeave: this.props.usePointerEvent ? void 0 : this.handleMouseLeave, onPointerLeave: this.props.usePointerEvent ? this.handleMouseLeave : void 0, "aria-label": "".concat(l).concat(ut(i, "MMMM, yyyy", this.props.locale)), role: "listbox", children: n ? this.renderMonths() : a ? this.renderQuarters() : this.renderWeeks() });
    }, t;
  }(tt)
), b9 = (
  /** @class */
  function(e) {
    Ft(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.isSelectedMonth = function(n) {
        return r.props.month === n;
      }, r.renderOptions = function() {
        return r.props.monthNames.map(function(n, a) {
          return /* @__PURE__ */ lt("div", { className: r.isSelectedMonth(a) ? "react-datepicker__month-option react-datepicker__month-option--selected_month" : "react-datepicker__month-option", onClick: r.onChange.bind(r, a), "aria-selected": r.isSelectedMonth(a) ? "true" : void 0, children: [r.isSelectedMonth(a) ? /* @__PURE__ */ N("span", { className: "react-datepicker__month-option--selected", children: "✓" }) : "", n] }, n);
        });
      }, r.onChange = function(n) {
        return r.props.onChange(n);
      }, r.handleClickOutside = function() {
        return r.props.onCancel();
      }, r;
    }
    return t.prototype.render = function() {
      return /* @__PURE__ */ N(Sc, { className: "react-datepicker__month-dropdown", onClickOutside: this.handleClickOutside, children: this.renderOptions() });
    }, t;
  }(tt)
), y9 = (
  /** @class */
  function(e) {
    Ft(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.state = { dropdownVisible: !1 }, r.renderSelectOptions = function(n) {
        return n.map(function(a, i) {
          return /* @__PURE__ */ N("option", { value: i, children: a }, a);
        });
      }, r.renderSelectMode = function(n) {
        return /* @__PURE__ */ N("select", { value: r.props.month, className: "react-datepicker__month-select", onChange: function(a) {
          return r.onChange(parseInt(a.target.value));
        }, children: r.renderSelectOptions(n) });
      }, r.renderReadView = function(n, a) {
        return /* @__PURE__ */ lt("div", { style: { visibility: n ? "visible" : "hidden" }, className: "react-datepicker__month-read-view", onClick: r.toggleDropdown, children: [/* @__PURE__ */ N("span", { className: "react-datepicker__month-read-view--down-arrow" }), /* @__PURE__ */ N("span", { className: "react-datepicker__month-read-view--selected-month", children: a[r.props.month] })] }, "read");
      }, r.renderDropdown = function(n) {
        return /* @__PURE__ */ N(b9, { ...Fe({ key: "dropdown" }, r.props, { monthNames: n, onChange: r.onChange, onCancel: r.toggleDropdown }) });
      }, r.renderScrollMode = function(n) {
        var a = r.state.dropdownVisible, i = [r.renderReadView(!a, n)];
        return a && i.unshift(r.renderDropdown(n)), i;
      }, r.onChange = function(n) {
        r.toggleDropdown(), n !== r.props.month && r.props.onChange(n);
      }, r.toggleDropdown = function() {
        return r.setState({ dropdownVisible: !r.state.dropdownVisible });
      }, r;
    }
    return t.prototype.render = function() {
      var r = this, n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(this.props.useShortMonthInDropdown ? function(i) {
        return Tw(i, r.props.locale);
      } : function(i) {
        return mp(i, r.props.locale);
      }), a;
      switch (this.props.dropdownMode) {
        case "scroll":
          a = this.renderScrollMode(n);
          break;
        case "select":
          a = this.renderSelectMode(n);
          break;
      }
      return /* @__PURE__ */ N("div", { className: "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(this.props.dropdownMode), children: a });
    }, t;
  }(tt)
);
function _9(e, t) {
  for (var r = [], n = Zn(e), a = Zn(t); !Oa(n, a); )
    r.push(Ze(n)), n = en(n, 1);
  return r;
}
var w9 = (
  /** @class */
  function(e) {
    Ft(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.renderOptions = function() {
        return n.state.monthYearsList.map(function(a) {
          var i = gf(a), o = hn(n.props.date, a) && Jt(n.props.date, a);
          return /* @__PURE__ */ lt("div", { className: o ? "react-datepicker__month-year-option--selected_month-year" : "react-datepicker__month-year-option", onClick: n.onChange.bind(n, i), "aria-selected": o ? "true" : void 0, children: [o ? /* @__PURE__ */ N("span", { className: "react-datepicker__month-year-option--selected", children: "✓" }) : "", ut(a, n.props.dateFormat, n.props.locale)] }, i);
        });
      }, n.onChange = function(a) {
        return n.props.onChange(a);
      }, n.handleClickOutside = function() {
        n.props.onCancel();
      }, n.state = { monthYearsList: _9(n.props.minDate, n.props.maxDate) }, n;
    }
    return t.prototype.render = function() {
      var r = Lt({ "react-datepicker__month-year-dropdown": !0, "react-datepicker__month-year-dropdown--scrollable": this.props.scrollableMonthYearDropdown });
      return /* @__PURE__ */ N(Sc, { className: r, onClickOutside: this.handleClickOutside, children: this.renderOptions() });
    }, t;
  }(tt)
), S9 = (
  /** @class */
  function(e) {
    Ft(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.state = { dropdownVisible: !1 }, r.renderSelectOptions = function() {
        for (var n = Zn(r.props.minDate), a = Zn(r.props.maxDate), i = []; !Oa(n, a); ) {
          var o = gf(n);
          i.push(/* @__PURE__ */ N("option", { value: o, children: ut(n, r.props.dateFormat, r.props.locale) }, o)), n = en(n, 1);
        }
        return i;
      }, r.onSelectChange = function(n) {
        r.onChange(parseInt(n.target.value));
      }, r.renderSelectMode = function() {
        return /* @__PURE__ */ N("select", { value: gf(Zn(r.props.date)), className: "react-datepicker__month-year-select", onChange: r.onSelectChange, children: r.renderSelectOptions() });
      }, r.renderReadView = function(n) {
        var a = ut(r.props.date, r.props.dateFormat, r.props.locale);
        return /* @__PURE__ */ lt("div", { style: { visibility: n ? "visible" : "hidden" }, className: "react-datepicker__month-year-read-view", onClick: r.toggleDropdown, children: [/* @__PURE__ */ N("span", { className: "react-datepicker__month-year-read-view--down-arrow" }), /* @__PURE__ */ N("span", { className: "react-datepicker__month-year-read-view--selected-month-year", children: a })] }, "read");
      }, r.renderDropdown = function() {
        return /* @__PURE__ */ N(w9, { ...Fe({ key: "dropdown" }, r.props, { onChange: r.onChange, onCancel: r.toggleDropdown }) });
      }, r.renderScrollMode = function() {
        var n = r.state.dropdownVisible, a = [r.renderReadView(!n)];
        return n && a.unshift(r.renderDropdown()), a;
      }, r.onChange = function(n) {
        r.toggleDropdown();
        var a = Ze(n);
        hn(r.props.date, a) && Jt(r.props.date, a) || r.props.onChange(a);
      }, r.toggleDropdown = function() {
        return r.setState({ dropdownVisible: !r.state.dropdownVisible });
      }, r;
    }
    return t.prototype.render = function() {
      var r;
      switch (this.props.dropdownMode) {
        case "scroll":
          r = this.renderScrollMode();
          break;
        case "select":
          r = this.renderSelectMode();
          break;
      }
      return /* @__PURE__ */ N("div", { className: "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(this.props.dropdownMode), children: r });
    }, t;
  }(tt)
), x9 = (
  /** @class */
  function(e) {
    Ft(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.state = { height: null }, r.scrollToTheSelectedTime = function() {
        requestAnimationFrame(function() {
          var n, a, i;
          r.list && (r.list.scrollTop = (i = r.centerLi && t.calcCenterPosition(r.props.monthRef ? r.props.monthRef.clientHeight - ((a = (n = r.header) === null || n === void 0 ? void 0 : n.clientHeight) !== null && a !== void 0 ? a : 0) : r.list.clientHeight, r.centerLi)) !== null && i !== void 0 ? i : 0);
        });
      }, r.handleClick = function(n) {
        var a, i;
        (r.props.minTime || r.props.maxTime) && jm(n, r.props) || (r.props.excludeTimes || r.props.includeTimes || r.props.filterTime) && Bm(n, r.props) || (i = (a = r.props).onChange) === null || i === void 0 || i.call(a, n);
      }, r.isSelectedTime = function(n) {
        return r.props.selected && d9(r.props.selected, n);
      }, r.isDisabledTime = function(n) {
        return (r.props.minTime || r.props.maxTime) && jm(n, r.props) || (r.props.excludeTimes || r.props.includeTimes || r.props.filterTime) && Bm(n, r.props);
      }, r.liClasses = function(n) {
        var a, i = ["react-datepicker__time-list-item", r.props.timeClassName ? r.props.timeClassName(n) : void 0];
        return r.isSelectedTime(n) && i.push("react-datepicker__time-list-item--selected"), r.isDisabledTime(n) && i.push("react-datepicker__time-list-item--disabled"), r.props.injectTimes && (Cn(n) * 3600 + Dn(n) * 60 + Jn(n)) % (((a = r.props.intervals) !== null && a !== void 0 ? a : t.defaultProps.intervals) * 60) !== 0 && i.push("react-datepicker__time-list-item--injected"), i.join(" ");
      }, r.handleOnKeyDown = function(n, a) {
        var i, o;
        n.key === ee.Space && (n.preventDefault(), n.key = ee.Enter), (n.key === ee.ArrowUp || n.key === ee.ArrowLeft) && n.target instanceof HTMLElement && n.target.previousSibling && (n.preventDefault(), n.target.previousSibling instanceof HTMLElement && n.target.previousSibling.focus()), (n.key === ee.ArrowDown || n.key === ee.ArrowRight) && n.target instanceof HTMLElement && n.target.nextSibling && (n.preventDefault(), n.target.nextSibling instanceof HTMLElement && n.target.nextSibling.focus()), n.key === ee.Enter && r.handleClick(a), (o = (i = r.props).handleOnKeyDown) === null || o === void 0 || o.call(i, n);
      }, r.renderTimes = function() {
        for (var n, a = [], i = typeof r.props.format == "string" ? r.props.format : "p", o = (n = r.props.intervals) !== null && n !== void 0 ? n : t.defaultProps.intervals, s = r.props.selected || r.props.openToDate || Ze(), l = Nl(s), u = r.props.injectTimes && r.props.injectTimes.sort(function(g, b) {
          return g.getTime() - b.getTime();
        }), c = 60 * c9(s), d = c / o, h = 0; h < d; h++) {
          var p = hf(l, h * o);
          if (a.push(p), u) {
            var v = u9(l, p, h, o, u);
            a = a.concat(v);
          }
        }
        var m = a.reduce(function(g, b) {
          return b.getTime() <= s.getTime() ? b : g;
        }, a[0]);
        return a.map(function(g) {
          return /* @__PURE__ */ N("li", { onClick: r.handleClick.bind(r, g), className: r.liClasses(g), ref: function(b) {
            g === m && (r.centerLi = b);
          }, onKeyDown: function(b) {
            r.handleOnKeyDown(b, g);
          }, tabIndex: g === m ? 0 : -1, role: "option", "aria-selected": r.isSelectedTime(g) ? "true" : void 0, "aria-disabled": r.isDisabledTime(g) ? "true" : void 0, children: ut(g, i, r.props.locale) }, g.valueOf());
        });
      }, r.renderTimeCaption = function() {
        return r.props.showTimeCaption === !1 ? /* @__PURE__ */ N(Qb, {}) : /* @__PURE__ */ N("div", { className: "react-datepicker__header react-datepicker__header--time ".concat(r.props.showTimeSelectOnly ? "react-datepicker__header--time--only" : ""), ref: function(n) {
          r.header = n;
        }, children: /* @__PURE__ */ N("div", { className: "react-datepicker-time__header", children: r.props.timeCaption }) });
      }, r;
    }
    return Object.defineProperty(t, "defaultProps", { get: function() {
      return { intervals: 30, todayButton: null, timeCaption: "Time", showTimeCaption: !0 };
    }, enumerable: !1, configurable: !0 }), t.prototype.componentDidMount = function() {
      this.scrollToTheSelectedTime(), this.props.monthRef && this.header && this.setState({ height: this.props.monthRef.clientHeight - this.header.clientHeight });
    }, t.prototype.render = function() {
      var r = this, n, a = this.state.height;
      return /* @__PURE__ */ lt("div", { className: "react-datepicker__time-container ".concat(((n = this.props.todayButton) !== null && n !== void 0 ? n : t.defaultProps.todayButton) ? "react-datepicker__time-container--with-today-button" : ""), children: [this.renderTimeCaption(), /* @__PURE__ */ N("div", { className: "react-datepicker__time", children: /* @__PURE__ */ N("div", { className: "react-datepicker__time-box", children: /* @__PURE__ */ N("ul", { className: "react-datepicker__time-list", ref: function(i) {
        r.list = i;
      }, style: a ? { height: a } : {}, role: "listbox", "aria-label": this.props.timeCaption, children: this.renderTimes() }) }) })] });
    }, t.calcCenterPosition = function(r, n) {
      return n.offsetTop - (r / 2 - n.clientHeight / 2);
    }, t;
  }(tt)
), Jm = 3, E9 = (
  /** @class */
  function(e) {
    Ft(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.YEAR_REFS = _n([], Array(n.props.yearItemNumber), !0).map(function() {
        return xa();
      }), n.isDisabled = function(a) {
        return Or(a, { minDate: n.props.minDate, maxDate: n.props.maxDate, excludeDates: n.props.excludeDates, includeDates: n.props.includeDates, filterDate: n.props.filterDate });
      }, n.isExcluded = function(a) {
        return bp(a, { excludeDates: n.props.excludeDates });
      }, n.selectingDate = function() {
        var a;
        return (a = n.props.selectingDate) !== null && a !== void 0 ? a : n.props.preSelection;
      }, n.updateFocusOnPaginate = function(a) {
        var i = function() {
          var o, s;
          (s = (o = n.YEAR_REFS[a]) === null || o === void 0 ? void 0 : o.current) === null || s === void 0 || s.focus();
        };
        window.requestAnimationFrame(i);
      }, n.handleYearClick = function(a, i) {
        n.props.onDayClick && n.props.onDayClick(a, i);
      }, n.handleYearNavigation = function(a, i) {
        var o, s, l, u, c = n.props, d = c.date, h = c.yearItemNumber;
        if (!(d === void 0 || h === void 0)) {
          var p = ba(d, h).startPeriod;
          n.isDisabled(i) || n.isExcluded(i) || ((s = (o = n.props).setPreSelection) === null || s === void 0 || s.call(o, i), a - p < 0 ? n.updateFocusOnPaginate(h - (p - a)) : a - p >= h ? n.updateFocusOnPaginate(Math.abs(h - (a - p))) : (u = (l = n.YEAR_REFS[a - p]) === null || l === void 0 ? void 0 : l.current) === null || u === void 0 || u.focus());
        }
      }, n.isSameDay = function(a, i) {
        return Ie(a, i);
      }, n.isCurrentYear = function(a) {
        return a === xe(Ze());
      }, n.isRangeStart = function(a) {
        return n.props.startDate && n.props.endDate && hn(fn(Ze(), a), n.props.startDate);
      }, n.isRangeEnd = function(a) {
        return n.props.startDate && n.props.endDate && hn(fn(Ze(), a), n.props.endDate);
      }, n.isInRange = function(a) {
        return hl(a, n.props.startDate, n.props.endDate);
      }, n.isInSelectingRange = function(a) {
        var i = n.props, o = i.selectsStart, s = i.selectsEnd, l = i.selectsRange, u = i.startDate, c = i.endDate;
        return !(o || s || l) || !n.selectingDate() ? !1 : o && c ? hl(a, n.selectingDate(), c) : s && u || l && u && !c ? hl(a, u, n.selectingDate()) : !1;
      }, n.isSelectingRangeStart = function(a) {
        var i;
        if (!n.isInSelectingRange(a))
          return !1;
        var o = n.props, s = o.startDate, l = o.selectsStart, u = fn(Ze(), a);
        return l ? hn(u, (i = n.selectingDate()) !== null && i !== void 0 ? i : null) : hn(u, s ?? null);
      }, n.isSelectingRangeEnd = function(a) {
        var i;
        if (!n.isInSelectingRange(a))
          return !1;
        var o = n.props, s = o.endDate, l = o.selectsEnd, u = o.selectsRange, c = fn(Ze(), a);
        return l || u ? hn(c, (i = n.selectingDate()) !== null && i !== void 0 ? i : null) : hn(c, s ?? null);
      }, n.isKeyboardSelected = function(a) {
        if (!(n.props.date === void 0 || n.props.selected == null || n.props.preSelection == null)) {
          var i = n.props, o = i.minDate, s = i.maxDate, l = i.excludeDates, u = i.includeDates, c = i.filterDate, d = es(fn(n.props.date, a)), h = (o || s || l || u || c) && Ml(a, n.props);
          return !n.props.disabledKeyboardNavigation && !n.props.inline && !Ie(d, es(n.props.selected)) && Ie(d, es(n.props.preSelection)) && !h;
        }
      }, n.onYearClick = function(a, i) {
        var o = n.props.date;
        o !== void 0 && n.handleYearClick(es(fn(o, i)), a);
      }, n.onYearKeyDown = function(a, i) {
        var o, s, l = a.key, u = n.props, c = u.date, d = u.yearItemNumber, h = u.handleOnKeyDown;
        if (l !== ee.Tab && a.preventDefault(), !n.props.disabledKeyboardNavigation)
          switch (l) {
            case ee.Enter:
              if (n.props.selected == null)
                break;
              n.onYearClick(a, i), (s = (o = n.props).setPreSelection) === null || s === void 0 || s.call(o, n.props.selected);
              break;
            case ee.ArrowRight:
              if (n.props.preSelection == null)
                break;
              n.handleYearNavigation(i + 1, Xn(n.props.preSelection, 1));
              break;
            case ee.ArrowLeft:
              if (n.props.preSelection == null)
                break;
              n.handleYearNavigation(i - 1, co(n.props.preSelection, 1));
              break;
            case ee.ArrowUp: {
              if (c === void 0 || d === void 0 || n.props.preSelection == null)
                break;
              var p = ba(c, d).startPeriod, v = Jm, m = i - v;
              if (m < p) {
                var g = d % v;
                i >= p && i < p + g ? v = g : v += g, m = i - v;
              }
              n.handleYearNavigation(m, co(n.props.preSelection, v));
              break;
            }
            case ee.ArrowDown: {
              if (c === void 0 || d === void 0 || n.props.preSelection == null)
                break;
              var b = ba(c, d).endPeriod, v = Jm, m = i + v;
              if (m > b) {
                var g = d % v;
                i <= b && i > b - g ? v = g : v += g, m = i + v;
              }
              n.handleYearNavigation(m, Xn(n.props.preSelection, v));
              break;
            }
          }
        h && h(a);
      }, n.getYearClassNames = function(a) {
        var i = n.props, o = i.date, s = i.minDate, l = i.maxDate, u = i.selected, c = i.excludeDates, d = i.includeDates, h = i.filterDate, p = i.yearClassName;
        return Lt("react-datepicker__year-text", "react-datepicker__year-".concat(a), o ? p == null ? void 0 : p(fn(o, a)) : void 0, { "react-datepicker__year-text--selected": u ? a === xe(u) : void 0, "react-datepicker__year-text--disabled": (s || l || c || d || h) && Ml(a, n.props), "react-datepicker__year-text--keyboard-selected": n.isKeyboardSelected(a), "react-datepicker__year-text--range-start": n.isRangeStart(a), "react-datepicker__year-text--range-end": n.isRangeEnd(a), "react-datepicker__year-text--in-range": n.isInRange(a), "react-datepicker__year-text--in-selecting-range": n.isInSelectingRange(a), "react-datepicker__year-text--selecting-range-start": n.isSelectingRangeStart(a), "react-datepicker__year-text--selecting-range-end": n.isSelectingRangeEnd(a), "react-datepicker__year-text--today": n.isCurrentYear(a) });
      }, n.getYearTabIndex = function(a) {
        if (n.props.disabledKeyboardNavigation || n.props.preSelection == null)
          return "-1";
        var i = xe(n.props.preSelection), o = Ml(a, n.props);
        return a === i && !o ? "0" : "-1";
      }, n.getYearContainerClassNames = function() {
        var a = n.props, i = a.selectingDate, o = a.selectsStart, s = a.selectsEnd, l = a.selectsRange;
        return Lt("react-datepicker__year", { "react-datepicker__year--selecting-range": i && (o || s || l) });
      }, n.getYearContent = function(a) {
        return n.props.renderYearContent ? n.props.renderYearContent(a) : a;
      }, n;
    }
    return t.prototype.render = function() {
      var r = this, n = [], a = this.props, i = a.date, o = a.yearItemNumber, s = a.onYearMouseEnter, l = a.onYearMouseLeave;
      if (i === void 0)
        return null;
      for (var u = ba(i, o), c = u.startPeriod, d = u.endPeriod, h = function(m) {
        n.push(/* @__PURE__ */ N("div", { ref: p.YEAR_REFS[m - c], onClick: function(g) {
          r.onYearClick(g, m);
        }, onKeyDown: function(g) {
          Nw(g) && (g.preventDefault(), g.key = ee.Enter), r.onYearKeyDown(g, m);
        }, tabIndex: Number(p.getYearTabIndex(m)), className: p.getYearClassNames(m), onMouseEnter: p.props.usePointerEvent ? void 0 : function(g) {
          return s(g, m);
        }, onPointerEnter: p.props.usePointerEvent ? function(g) {
          return s(g, m);
        } : void 0, onMouseLeave: p.props.usePointerEvent ? void 0 : function(g) {
          return l(g, m);
        }, onPointerLeave: p.props.usePointerEvent ? function(g) {
          return l(g, m);
        } : void 0, "aria-current": p.isCurrentYear(m) ? "date" : void 0, children: p.getYearContent(m) }, m));
      }, p = this, v = c; v <= d; v++)
        h(v);
      return /* @__PURE__ */ N("div", { className: this.getYearContainerClassNames(), children: /* @__PURE__ */ N("div", { className: "react-datepicker__year-wrapper", onMouseLeave: this.props.usePointerEvent ? void 0 : this.props.clearSelectingDate, onPointerLeave: this.props.usePointerEvent ? this.props.clearSelectingDate : void 0, children: n }) });
    }, t;
  }(tt)
);
function C9(e, t, r, n) {
  for (var a = [], i = 0; i < 2 * t + 1; i++) {
    var o = e + t - i, s = !0;
    r && (s = xe(r) <= o), n && s && (s = xe(n) >= o), s && a.push(o);
  }
  return a;
}
var D9 = (
  /** @class */
  function(e) {
    Ft(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      n.renderOptions = function() {
        var s = n.props.year, l = n.state.yearsList.map(function(d) {
          return /* @__PURE__ */ lt("div", { className: s === d ? "react-datepicker__year-option react-datepicker__year-option--selected_year" : "react-datepicker__year-option", onClick: n.onChange.bind(n, d), "aria-selected": s === d ? "true" : void 0, children: [s === d ? /* @__PURE__ */ N("span", { className: "react-datepicker__year-option--selected", children: "✓" }) : "", d] }, d);
        }), u = n.props.minDate ? xe(n.props.minDate) : null, c = n.props.maxDate ? xe(n.props.maxDate) : null;
        return (!c || !n.state.yearsList.find(function(d) {
          return d === c;
        })) && l.unshift(/* @__PURE__ */ N("div", { className: "react-datepicker__year-option", onClick: n.incrementYears, children: /* @__PURE__ */ N("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming" }) }, "upcoming")), (!u || !n.state.yearsList.find(function(d) {
          return d === u;
        })) && l.push(/* @__PURE__ */ N("div", { className: "react-datepicker__year-option", onClick: n.decrementYears, children: /* @__PURE__ */ N("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous" }) }, "previous")), l;
      }, n.onChange = function(s) {
        n.props.onChange(s);
      }, n.handleClickOutside = function() {
        n.props.onCancel();
      }, n.shiftYears = function(s) {
        var l = n.state.yearsList.map(function(u) {
          return u + s;
        });
        n.setState({ yearsList: l });
      }, n.incrementYears = function() {
        return n.shiftYears(1);
      }, n.decrementYears = function() {
        return n.shiftYears(-1);
      };
      var a = r.yearDropdownItemNumber, i = r.scrollableYearDropdown, o = a || (i ? 10 : 5);
      return n.state = { yearsList: C9(n.props.year, o, n.props.minDate, n.props.maxDate) }, n.dropdownRef = xa(), n;
    }
    return t.prototype.componentDidMount = function() {
      var r = this.dropdownRef.current;
      if (r) {
        var n = r.children ? Array.from(r.children) : null, a = n ? n.find(function(i) {
          return i.ariaSelected;
        }) : null;
        r.scrollTop = a && a instanceof HTMLElement ? a.offsetTop + (a.clientHeight - r.clientHeight) / 2 : (r.scrollHeight - r.clientHeight) / 2;
      }
    }, t.prototype.render = function() {
      var r = Lt({ "react-datepicker__year-dropdown": !0, "react-datepicker__year-dropdown--scrollable": this.props.scrollableYearDropdown });
      return /* @__PURE__ */ N(Sc, { className: r, containerRef: this.dropdownRef, onClickOutside: this.handleClickOutside, children: this.renderOptions() });
    }, t;
  }(tt)
), O9 = (
  /** @class */
  function(e) {
    Ft(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.state = { dropdownVisible: !1 }, r.renderSelectOptions = function() {
        for (var n = r.props.minDate ? xe(r.props.minDate) : 1900, a = r.props.maxDate ? xe(r.props.maxDate) : 2100, i = [], o = n; o <= a; o++)
          i.push(/* @__PURE__ */ N("option", { value: o, children: o }, o));
        return i;
      }, r.onSelectChange = function(n) {
        r.onChange(parseInt(n.target.value));
      }, r.renderSelectMode = function() {
        return /* @__PURE__ */ N("select", { value: r.props.year, className: "react-datepicker__year-select", onChange: r.onSelectChange, children: r.renderSelectOptions() });
      }, r.renderReadView = function(n) {
        return /* @__PURE__ */ lt("div", { style: { visibility: n ? "visible" : "hidden" }, className: "react-datepicker__year-read-view", onClick: function(a) {
          return r.toggleDropdown(a);
        }, children: [/* @__PURE__ */ N("span", { className: "react-datepicker__year-read-view--down-arrow" }), /* @__PURE__ */ N("span", { className: "react-datepicker__year-read-view--selected-year", children: r.props.year })] }, "read");
      }, r.renderDropdown = function() {
        return /* @__PURE__ */ N(D9, { ...Fe({ key: "dropdown" }, r.props, { onChange: r.onChange, onCancel: r.toggleDropdown }) });
      }, r.renderScrollMode = function() {
        var n = r.state.dropdownVisible, a = [r.renderReadView(!n)];
        return n && a.unshift(r.renderDropdown()), a;
      }, r.onChange = function(n) {
        r.toggleDropdown(), n !== r.props.year && r.props.onChange(n);
      }, r.toggleDropdown = function(n) {
        r.setState({ dropdownVisible: !r.state.dropdownVisible }, function() {
          r.props.adjustDateOnChange && r.handleYearChange(r.props.date, n);
        });
      }, r.handleYearChange = function(n, a) {
        var i;
        (i = r.onSelect) === null || i === void 0 || i.call(r, n, a), r.setOpen();
      }, r.onSelect = function(n, a) {
        var i, o;
        (o = (i = r.props).onSelect) === null || o === void 0 || o.call(i, n, a);
      }, r.setOpen = function() {
        var n, a;
        (a = (n = r.props).setOpen) === null || a === void 0 || a.call(n, !0);
      }, r;
    }
    return t.prototype.render = function() {
      var r;
      switch (this.props.dropdownMode) {
        case "scroll":
          r = this.renderScrollMode();
          break;
        case "select":
          r = this.renderSelectMode();
          break;
      }
      return /* @__PURE__ */ N("div", { className: "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(this.props.dropdownMode), children: r });
    }, t;
  }(tt)
), T9 = ["react-datepicker__year-select", "react-datepicker__month-select", "react-datepicker__month-year-select"], k9 = function(e) {
  var t = (e.className || "").split(/\s+/);
  return T9.some(function(r) {
    return t.indexOf(r) >= 0;
  });
}, R9 = (
  /** @class */
  function(e) {
    Ft(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.monthContainer = void 0, n.handleClickOutside = function(a) {
        n.props.onClickOutside(a);
      }, n.setClickOutsideRef = function() {
        return n.containerRef.current;
      }, n.handleDropdownFocus = function(a) {
        var i, o;
        k9(a.target) && ((o = (i = n.props).onDropdownFocus) === null || o === void 0 || o.call(i, a));
      }, n.getDateInView = function() {
        var a = n.props, i = a.preSelection, o = a.selected, s = a.openToDate, l = Rw(n.props), u = Pw(n.props), c = Ze(), d = s || o || i;
        return d || (l && ri(c, l) ? l : u && Oa(c, u) ? u : c);
      }, n.increaseMonth = function() {
        n.setState(function(a) {
          var i = a.date;
          return { date: en(i, 1) };
        }, function() {
          return n.handleMonthChange(n.state.date);
        });
      }, n.decreaseMonth = function() {
        n.setState(function(a) {
          var i = a.date;
          return { date: uo(i, 1) };
        }, function() {
          return n.handleMonthChange(n.state.date);
        });
      }, n.handleDayClick = function(a, i, o) {
        n.props.onSelect(a, i, o), n.props.setPreSelection && n.props.setPreSelection(a);
      }, n.handleDayMouseEnter = function(a) {
        n.setState({ selectingDate: a }), n.props.onDayMouseEnter && n.props.onDayMouseEnter(a);
      }, n.handleMonthMouseLeave = function() {
        n.setState({ selectingDate: void 0 }), n.props.onMonthMouseLeave && n.props.onMonthMouseLeave();
      }, n.handleYearMouseEnter = function(a, i) {
        n.setState({ selectingDate: fn(Ze(), i) }), n.props.onYearMouseEnter && n.props.onYearMouseEnter(a, i);
      }, n.handleYearMouseLeave = function(a, i) {
        n.props.onYearMouseLeave && n.props.onYearMouseLeave(a, i);
      }, n.handleYearChange = function(a) {
        var i, o, s, l;
        (o = (i = n.props).onYearChange) === null || o === void 0 || o.call(i, a), n.setState({ isRenderAriaLiveMessage: !0 }), n.props.adjustDateOnChange && (n.props.onSelect(a), (l = (s = n.props).setOpen) === null || l === void 0 || l.call(s, !0)), n.props.setPreSelection && n.props.setPreSelection(a);
      }, n.getEnabledPreSelectionDateForMonth = function(a) {
        if (!Or(a, n.props))
          return a;
        for (var i = Zn(a), o = Q8(a), s = TU(o, i), l = null, u = 0; u <= s; u++) {
          var c = ra(i, u);
          if (!Or(c, n.props)) {
            l = c;
            break;
          }
        }
        return l;
      }, n.handleMonthChange = function(a) {
        var i, o, s, l = (i = n.getEnabledPreSelectionDateForMonth(a)) !== null && i !== void 0 ? i : a;
        n.handleCustomMonthChange(l), n.props.adjustDateOnChange && (n.props.onSelect(l), (s = (o = n.props).setOpen) === null || s === void 0 || s.call(o, !0)), n.props.setPreSelection && n.props.setPreSelection(l);
      }, n.handleCustomMonthChange = function(a) {
        var i, o;
        (o = (i = n.props).onMonthChange) === null || o === void 0 || o.call(i, a), n.setState({ isRenderAriaLiveMessage: !0 });
      }, n.handleMonthYearChange = function(a) {
        n.handleYearChange(a), n.handleMonthChange(a);
      }, n.changeYear = function(a) {
        n.setState(function(i) {
          var o = i.date;
          return { date: fn(o, Number(a)) };
        }, function() {
          return n.handleYearChange(n.state.date);
        });
      }, n.changeMonth = function(a) {
        n.setState(function(i) {
          var o = i.date;
          return { date: dr(o, Number(a)) };
        }, function() {
          return n.handleMonthChange(n.state.date);
        });
      }, n.changeMonthYear = function(a) {
        n.setState(function(i) {
          var o = i.date;
          return { date: fn(dr(o, Ht(a)), xe(a)) };
        }, function() {
          return n.handleMonthYearChange(n.state.date);
        });
      }, n.header = function(a) {
        a === void 0 && (a = n.state.date);
        var i = Sa(a, n.props.locale, n.props.calendarStartDay), o = [];
        return n.props.showWeekNumbers && o.push(/* @__PURE__ */ N("div", { className: "react-datepicker__day-name", children: n.props.weekLabel || "#" }, "W")), o.concat([0, 1, 2, 3, 4, 5, 6].map(function(s) {
          var l = ra(i, s), u = n.formatWeekday(l, n.props.locale), c = n.props.weekDayClassName ? n.props.weekDayClassName(l) : void 0;
          return /* @__PURE__ */ N("div", { "aria-label": ut(l, "EEEE", n.props.locale), className: Lt("react-datepicker__day-name", c), children: u }, s);
        }));
      }, n.formatWeekday = function(a, i) {
        return n.props.formatWeekDay ? J8(a, n.props.formatWeekDay, i) : n.props.useWeekdaysShort ? e9(a, i) : Z8(a, i);
      }, n.decreaseYear = function() {
        n.setState(function(a) {
          var i, o = a.date;
          return { date: co(o, n.props.showYearPicker ? (i = n.props.yearItemNumber) !== null && i !== void 0 ? i : t.defaultProps.yearItemNumber : 1) };
        }, function() {
          return n.handleYearChange(n.state.date);
        });
      }, n.clearSelectingDate = function() {
        n.setState({ selectingDate: void 0 });
      }, n.renderPreviousButton = function() {
        var a;
        if (!n.props.renderCustomHeader) {
          var i;
          switch (!0) {
            case n.props.showMonthYearPicker:
              i = Vm(n.state.date, n.props);
              break;
            case n.props.showYearPicker:
              i = i9(n.state.date, n.props);
              break;
            case n.props.showQuarterYearPicker:
              i = n9(n.state.date, n.props);
              break;
            default:
              i = Ym(n.state.date, n.props);
              break;
          }
          if (!(!((a = n.props.forceShowMonthNavigation) !== null && a !== void 0 ? a : t.defaultProps.forceShowMonthNavigation) && !n.props.showDisabledMonthNavigation && i || n.props.showTimeSelectOnly)) {
            var o = ["react-datepicker__navigation-icon", "react-datepicker__navigation-icon--previous"], s = ["react-datepicker__navigation", "react-datepicker__navigation--previous"], l = n.decreaseMonth;
            (n.props.showMonthYearPicker || n.props.showQuarterYearPicker || n.props.showYearPicker) && (l = n.decreaseYear), i && n.props.showDisabledMonthNavigation && (s.push("react-datepicker__navigation--previous--disabled"), l = void 0);
            var u = n.props.showMonthYearPicker || n.props.showQuarterYearPicker || n.props.showYearPicker, c = n.props, d = c.previousMonthButtonLabel, h = d === void 0 ? t.defaultProps.previousMonthButtonLabel : d, p = c.previousYearButtonLabel, v = p === void 0 ? t.defaultProps.previousYearButtonLabel : p, m = n.props, g = m.previousMonthAriaLabel, b = g === void 0 ? typeof h == "string" ? h : "Previous Month" : g, y = m.previousYearAriaLabel, w = y === void 0 ? typeof v == "string" ? v : "Previous Year" : y;
            return /* @__PURE__ */ N("button", { type: "button", className: s.join(" "), onClick: l, onKeyDown: n.props.handleOnKeyDown, "aria-label": u ? w : b, children: /* @__PURE__ */ N("span", { className: o.join(" "), children: u ? v : h }) });
          }
        }
      }, n.increaseYear = function() {
        n.setState(function(a) {
          var i, o = a.date;
          return { date: Xn(o, n.props.showYearPicker ? (i = n.props.yearItemNumber) !== null && i !== void 0 ? i : t.defaultProps.yearItemNumber : 1) };
        }, function() {
          return n.handleYearChange(n.state.date);
        });
      }, n.renderNextButton = function() {
        var a;
        if (!n.props.renderCustomHeader) {
          var i;
          switch (!0) {
            case n.props.showMonthYearPicker:
              i = Um(n.state.date, n.props);
              break;
            case n.props.showYearPicker:
              i = o9(n.state.date, n.props);
              break;
            case n.props.showQuarterYearPicker:
              i = a9(n.state.date, n.props);
              break;
            default:
              i = Wm(n.state.date, n.props);
              break;
          }
          if (!(!((a = n.props.forceShowMonthNavigation) !== null && a !== void 0 ? a : t.defaultProps.forceShowMonthNavigation) && !n.props.showDisabledMonthNavigation && i || n.props.showTimeSelectOnly)) {
            var o = ["react-datepicker__navigation", "react-datepicker__navigation--next"], s = ["react-datepicker__navigation-icon", "react-datepicker__navigation-icon--next"];
            n.props.showTimeSelect && o.push("react-datepicker__navigation--next--with-time"), n.props.todayButton && o.push("react-datepicker__navigation--next--with-today-button");
            var l = n.increaseMonth;
            (n.props.showMonthYearPicker || n.props.showQuarterYearPicker || n.props.showYearPicker) && (l = n.increaseYear), i && n.props.showDisabledMonthNavigation && (o.push("react-datepicker__navigation--next--disabled"), l = void 0);
            var u = n.props.showMonthYearPicker || n.props.showQuarterYearPicker || n.props.showYearPicker, c = n.props, d = c.nextMonthButtonLabel, h = d === void 0 ? t.defaultProps.nextMonthButtonLabel : d, p = c.nextYearButtonLabel, v = p === void 0 ? t.defaultProps.nextYearButtonLabel : p, m = n.props, g = m.nextMonthAriaLabel, b = g === void 0 ? typeof h == "string" ? h : "Next Month" : g, y = m.nextYearAriaLabel, w = y === void 0 ? typeof v == "string" ? v : "Next Year" : y;
            return /* @__PURE__ */ N("button", { type: "button", className: o.join(" "), onClick: l, onKeyDown: n.props.handleOnKeyDown, "aria-label": u ? w : b, children: /* @__PURE__ */ N("span", { className: s.join(" "), children: u ? v : h }) });
          }
        }
      }, n.renderCurrentMonth = function(a) {
        a === void 0 && (a = n.state.date);
        var i = ["react-datepicker__current-month"];
        return n.props.showYearDropdown && i.push("react-datepicker__current-month--hasYearDropdown"), n.props.showMonthDropdown && i.push("react-datepicker__current-month--hasMonthDropdown"), n.props.showMonthYearDropdown && i.push("react-datepicker__current-month--hasMonthYearDropdown"), /* @__PURE__ */ N("h2", { className: i.join(" "), children: ut(a, n.props.dateFormat, n.props.locale) });
      }, n.renderYearDropdown = function(a) {
        if (a === void 0 && (a = !1), !(!n.props.showYearDropdown || a))
          return /* @__PURE__ */ N(O9, { ...Fe({}, t.defaultProps, n.props, { date: n.state.date, onChange: n.changeYear, year: xe(n.state.date) }) });
      }, n.renderMonthDropdown = function(a) {
        if (a === void 0 && (a = !1), !(!n.props.showMonthDropdown || a))
          return /* @__PURE__ */ N(y9, { ...Fe({}, t.defaultProps, n.props, { month: Ht(n.state.date), onChange: n.changeMonth }) });
      }, n.renderMonthYearDropdown = function(a) {
        if (a === void 0 && (a = !1), !(!n.props.showMonthYearDropdown || a))
          return /* @__PURE__ */ N(S9, { ...Fe({}, t.defaultProps, n.props, { date: n.state.date, onChange: n.changeMonthYear }) });
      }, n.handleTodayButtonClick = function(a) {
        n.props.onSelect(Lm(), a), n.props.setPreSelection && n.props.setPreSelection(Lm());
      }, n.renderTodayButton = function() {
        if (!(!n.props.todayButton || n.props.showTimeSelectOnly))
          return /* @__PURE__ */ N("div", { className: "react-datepicker__today-button", onClick: n.handleTodayButtonClick, children: n.props.todayButton });
      }, n.renderDefaultHeader = function(a) {
        var i = a.monthDate, o = a.i;
        return /* @__PURE__ */ lt("div", { className: "react-datepicker__header ".concat(n.props.showTimeSelect ? "react-datepicker__header--has-time-select" : ""), children: [n.renderCurrentMonth(i), /* @__PURE__ */ lt("div", { className: "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(n.props.dropdownMode), onFocus: n.handleDropdownFocus, children: [n.renderMonthDropdown(o !== 0), n.renderMonthYearDropdown(o !== 0), n.renderYearDropdown(o !== 0)] }), /* @__PURE__ */ N("div", { className: "react-datepicker__day-names", children: n.header(i) })] });
      }, n.renderCustomHeader = function(a) {
        var i, o, s = a.monthDate, l = a.i;
        if (n.props.showTimeSelect && !n.state.monthContainer || n.props.showTimeSelectOnly)
          return null;
        var u = Ym(n.state.date, n.props), c = Wm(n.state.date, n.props), d = Vm(n.state.date, n.props), h = Um(n.state.date, n.props), p = !n.props.showMonthYearPicker && !n.props.showQuarterYearPicker && !n.props.showYearPicker;
        return /* @__PURE__ */ lt("div", { className: "react-datepicker__header react-datepicker__header--custom", onFocus: n.props.onDropdownFocus, children: [(o = (i = n.props).renderCustomHeader) === null || o === void 0 ? void 0 : o.call(i, Fe(Fe({}, n.state), { customHeaderCount: l, monthDate: s, changeMonth: n.changeMonth, changeYear: n.changeYear, decreaseMonth: n.decreaseMonth, increaseMonth: n.increaseMonth, decreaseYear: n.decreaseYear, increaseYear: n.increaseYear, prevMonthButtonDisabled: u, nextMonthButtonDisabled: c, prevYearButtonDisabled: d, nextYearButtonDisabled: h })), p && /* @__PURE__ */ N("div", { className: "react-datepicker__day-names", children: n.header(s) })] });
      }, n.renderYearHeader = function(a) {
        var i = a.monthDate, o = n.props, s = o.showYearPicker, l = o.yearItemNumber, u = l === void 0 ? t.defaultProps.yearItemNumber : l, c = ba(i, u), d = c.startPeriod, h = c.endPeriod;
        return /* @__PURE__ */ N("div", { className: "react-datepicker__header react-datepicker-year-header", children: s ? "".concat(d, " - ").concat(h) : xe(i) });
      }, n.renderHeader = function(a) {
        var i = a.monthDate, o = a.i, s = o === void 0 ? 0 : o, l = { monthDate: i, i: s };
        switch (!0) {
          case n.props.renderCustomHeader !== void 0:
            return n.renderCustomHeader(l);
          case (n.props.showMonthYearPicker || n.props.showQuarterYearPicker || n.props.showYearPicker):
            return n.renderYearHeader(l);
          default:
            return n.renderDefaultHeader(l);
        }
      }, n.renderMonths = function() {
        var a, i;
        if (!(n.props.showTimeSelectOnly || n.props.showYearPicker)) {
          for (var o = [], s = (a = n.props.monthsShown) !== null && a !== void 0 ? a : t.defaultProps.monthsShown, l = n.props.showPreviousMonths ? s - 1 : 0, u = n.props.showMonthYearPicker || n.props.showQuarterYearPicker ? Xn(n.state.date, l) : uo(n.state.date, l), c = (i = n.props.monthSelectedIn) !== null && i !== void 0 ? i : l, d = 0; d < s; ++d) {
            var h = d - c + l, p = n.props.showMonthYearPicker || n.props.showQuarterYearPicker ? Xn(u, h) : en(u, h), v = "month-".concat(d), m = d < s - 1, g = d > 0;
            o.push(/* @__PURE__ */ lt("div", { ref: function(b) {
              n.monthContainer = b ?? void 0;
            }, className: "react-datepicker__month-container", children: [n.renderHeader({ monthDate: p, i: d }), /* @__PURE__ */ N(m9, { ...Fe({}, t.defaultProps, n.props, { ariaLabelPrefix: n.props.monthAriaLabelPrefix, day: p, onDayClick: n.handleDayClick, handleOnKeyDown: n.props.handleOnDayKeyDown, handleOnMonthKeyDown: n.props.handleOnKeyDown, onDayMouseEnter: n.handleDayMouseEnter, onMouseLeave: n.handleMonthMouseLeave, orderInDisplay: d, selectingDate: n.state.selectingDate, monthShowsDuplicateDaysEnd: m, monthShowsDuplicateDaysStart: g }) })] }, v));
          }
          return o;
        }
      }, n.renderYears = function() {
        if (!n.props.showTimeSelectOnly && n.props.showYearPicker)
          return /* @__PURE__ */ lt("div", { className: "react-datepicker__year--container", children: [n.renderHeader({ monthDate: n.state.date }), /* @__PURE__ */ N(E9, { ...Fe({}, t.defaultProps, n.props, { selectingDate: n.state.selectingDate, date: n.state.date, onDayClick: n.handleDayClick, clearSelectingDate: n.clearSelectingDate, onYearMouseEnter: n.handleYearMouseEnter, onYearMouseLeave: n.handleYearMouseLeave }) })] });
      }, n.renderTimeSection = function() {
        if (n.props.showTimeSelect && (n.state.monthContainer || n.props.showTimeSelectOnly))
          return /* @__PURE__ */ N(x9, { ...Fe({}, t.defaultProps, n.props, { onChange: n.props.onTimeChange, format: n.props.timeFormat, intervals: n.props.timeIntervals, monthRef: n.state.monthContainer }) });
      }, n.renderInputTimeSection = function() {
        var a = n.props.selected ? new Date(n.props.selected) : void 0, i = a && jn(a) && !!n.props.selected, o = i ? "".concat(zm(a.getHours()), ":").concat(zm(a.getMinutes())) : "";
        if (n.props.showTimeInput)
          return /* @__PURE__ */ N(f9, { ...Fe({}, t.defaultProps, n.props, { date: a, timeString: o, onChange: n.props.onTimeChange }) });
      }, n.renderAriaLiveRegion = function() {
        var a, i = ba(n.state.date, (a = n.props.yearItemNumber) !== null && a !== void 0 ? a : t.defaultProps.yearItemNumber), o = i.startPeriod, s = i.endPeriod, l;
        return n.props.showYearPicker ? l = "".concat(o, " - ").concat(s) : n.props.showMonthYearPicker || n.props.showQuarterYearPicker ? l = xe(n.state.date) : l = "".concat(mp(Ht(n.state.date), n.props.locale), " ").concat(xe(n.state.date)), /* @__PURE__ */ N("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live", children: n.state.isRenderAriaLiveMessage && l });
      }, n.renderChildren = function() {
        if (n.props.children)
          return /* @__PURE__ */ N("div", { className: "react-datepicker__children-container", children: n.props.children });
      }, n.containerRef = xa(), n.state = { date: n.getDateInView(), selectingDate: void 0, monthContainer: void 0, isRenderAriaLiveMessage: !1 }, n;
    }
    return Object.defineProperty(t, "defaultProps", { get: function() {
      return { monthsShown: 1, forceShowMonthNavigation: !1, timeCaption: "Time", previousYearButtonLabel: "Previous Year", nextYearButtonLabel: "Next Year", previousMonthButtonLabel: "Previous Month", nextMonthButtonLabel: "Next Month", yearItemNumber: zs };
    }, enumerable: !1, configurable: !0 }), t.prototype.componentDidMount = function() {
      var r = this;
      this.props.showTimeSelect && (this.assignMonthContainer = function() {
        r.setState({ monthContainer: r.monthContainer });
      }());
    }, t.prototype.componentDidUpdate = function(r) {
      var n = this;
      if (this.props.preSelection && (!Ie(this.props.preSelection, r.preSelection) || this.props.monthSelectedIn !== r.monthSelectedIn)) {
        var a = !Jt(this.state.date, this.props.preSelection);
        this.setState({ date: this.props.preSelection }, function() {
          return a && n.handleCustomMonthChange(n.state.date);
        });
      } else this.props.openToDate && !Ie(this.props.openToDate, r.openToDate) && this.setState({ date: this.props.openToDate });
    }, t.prototype.render = function() {
      var r = this.props.container || W8;
      return /* @__PURE__ */ N(Sc, { onClickOutside: this.handleClickOutside, style: { display: "contents" }, containerRef: this.containerRef, ignoreClass: this.props.outsideClickIgnoreClass, children: /* @__PURE__ */ lt(r, { className: Lt("react-datepicker", this.props.className, { "react-datepicker--time-only": this.props.showTimeSelectOnly }), showTime: this.props.showTimeSelect || this.props.showTimeInput, showTimeSelectOnly: this.props.showTimeSelectOnly, children: [this.renderAriaLiveRegion(), this.renderPreviousButton(), this.renderNextButton(), this.renderMonths(), this.renderYears(), this.renderTodayButton(), this.renderTimeSection(), this.renderInputTimeSection(), this.renderChildren()] }) });
    }, t;
  }(tt)
), P9 = function(e) {
  var t = e.icon, r = e.className, n = r === void 0 ? "" : r, a = e.onClick, i = "react-datepicker__calendar-icon";
  return typeof t == "string" ? /* @__PURE__ */ N("i", { className: "".concat(i, " ").concat(t, " ").concat(n), "aria-hidden": "true", onClick: a }) : f.isValidElement(t) ? f.cloneElement(t, { className: "".concat(t.props.className || "", " ").concat(i, " ").concat(n), onClick: function(o) {
    typeof t.props.onClick == "function" && t.props.onClick(o), typeof a == "function" && a(o);
  } }) : /* @__PURE__ */ N("svg", { className: "".concat(i, " ").concat(n), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", onClick: a, children: /* @__PURE__ */ N("path", { d: "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" }) });
}, Mw = (
  /** @class */
  function(e) {
    Ft(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.portalRoot = null, n.el = document.createElement("div"), n;
    }
    return t.prototype.componentDidMount = function() {
      this.portalRoot = (this.props.portalHost || document).getElementById(this.props.portalId), this.portalRoot || (this.portalRoot = document.createElement("div"), this.portalRoot.setAttribute("id", this.props.portalId), (this.props.portalHost || document.body).appendChild(this.portalRoot)), this.portalRoot.appendChild(this.el);
    }, t.prototype.componentWillUnmount = function() {
      this.portalRoot && this.portalRoot.removeChild(this.el);
    }, t.prototype.render = function() {
      return _0.createPortal(this.props.children, this.el);
    }, t;
  }(tt)
), N9 = "[tabindex], a, button, input, select, textarea", M9 = function(e) {
  return (e instanceof HTMLAnchorElement || !e.disabled) && e.tabIndex !== -1;
}, Aw = (
  /** @class */
  function(e) {
    Ft(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.getTabChildren = function() {
        var a;
        return Array.prototype.slice.call((a = n.tabLoopRef.current) === null || a === void 0 ? void 0 : a.querySelectorAll(N9), 1, -1).filter(M9);
      }, n.handleFocusStart = function() {
        var a = n.getTabChildren();
        a && a.length > 1 && a[a.length - 1].focus();
      }, n.handleFocusEnd = function() {
        var a = n.getTabChildren();
        a && a.length > 1 && a[0].focus();
      }, n.tabLoopRef = xa(), n;
    }
    return t.prototype.render = function() {
      var r;
      return ((r = this.props.enableTabLoop) !== null && r !== void 0 ? r : t.defaultProps.enableTabLoop) ? /* @__PURE__ */ lt("div", { className: "react-datepicker__tab-loop", ref: this.tabLoopRef, children: [/* @__PURE__ */ N("div", { className: "react-datepicker__tab-loop__start", tabIndex: 0, onFocus: this.handleFocusStart }), this.props.children, /* @__PURE__ */ N("div", { className: "react-datepicker__tab-loop__end", tabIndex: 0, onFocus: this.handleFocusEnd })] }) : this.props.children;
    }, t.defaultProps = { enableTabLoop: !0 }, t;
  }(tt)
);
function A9(e) {
  var t = function(r) {
    var n, a = typeof r.hidePopper == "boolean" ? r.hidePopper : !0, i = wd(null), o = Y8(Fe({ open: !a, whileElementsMounted: b8, placement: r.popperPlacement, middleware: _n([C8({ padding: 15 }), E8(10), D8({ element: i })], (n = r.popperModifiers) !== null && n !== void 0 ? n : [], !0) }, r.popperProps)), s = Fe(Fe({}, r), { hidePopper: a, popperProps: Fe(Fe({}, o), { arrowRef: i }) });
    return /* @__PURE__ */ N(e, { ...Fe({}, s) });
  };
  return t;
}
var I9 = (
  /** @class */
  function(e) {
    Ft(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return Object.defineProperty(t, "defaultProps", { get: function() {
      return { hidePopper: !0 };
    }, enumerable: !1, configurable: !0 }), t.prototype.render = function() {
      var r = this.props, n = r.className, a = r.wrapperClassName, i = r.hidePopper, o = i === void 0 ? t.defaultProps.hidePopper : i, s = r.popperComponent, l = r.targetComponent, u = r.enableTabLoop, c = r.popperOnKeyDown, d = r.portalId, h = r.portalHost, p = r.popperProps, v = r.showArrow, m = void 0;
      if (!o) {
        var g = Lt("react-datepicker-popper", n);
        m = /* @__PURE__ */ N(Aw, { enableTabLoop: u, children: /* @__PURE__ */ lt("div", { ref: p.refs.setFloating, style: p.floatingStyles, className: g, "data-placement": p.placement, onKeyDown: c, children: [s, v && /* @__PURE__ */ N(I8, { ref: p.arrowRef, context: p.context, fill: "currentColor", strokeWidth: 1, height: 8, width: 16, style: { transform: "translateY(-1px)" }, className: "react-datepicker__triangle" })] }) });
      }
      this.props.popperContainer && (m = oS(this.props.popperContainer, {}, m)), d && !o && (m = /* @__PURE__ */ N(Mw, { portalId: d, portalHost: h, children: m }));
      var b = Lt("react-datepicker-wrapper", a);
      return /* @__PURE__ */ lt(Qb, { children: [/* @__PURE__ */ N("div", { ref: p.refs.setReference, className: b, children: l }), m] });
    }, t;
  }(tt)
), $9 = A9(I9), Zm = "react-datepicker-ignore-onclickoutside";
function L9(e, t) {
  return e && t ? Ht(e) !== Ht(t) || xe(e) !== xe(t) : e !== t;
}
var fd = "Date input not valid.", Iw = (
  /** @class */
  function(e) {
    Ft(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.calendar = null, n.input = null, n.getPreSelection = function() {
        return n.props.openToDate ? n.props.openToDate : n.props.selectsEnd && n.props.startDate ? n.props.startDate : n.props.selectsStart && n.props.endDate ? n.props.endDate : Ze();
      }, n.modifyHolidays = function() {
        var a;
        return (a = n.props.holidays) === null || a === void 0 ? void 0 : a.reduce(function(i, o) {
          var s = new Date(o.date);
          return jn(s) ? _n(_n([], i, !0), [Fe(Fe({}, o), { date: s })], !1) : i;
        }, []);
      }, n.calcInitialState = function() {
        var a, i = n.getPreSelection(), o = Rw(n.props), s = Pw(n.props), l = o && ri(i, Nl(o)) ? o : s && Oa(i, Fm(s)) ? s : i;
        return {
          open: n.props.startOpen || !1,
          preventFocus: !1,
          inputValue: null,
          preSelection: (a = n.props.selectsRange ? n.props.startDate : n.props.selected) !== null && a !== void 0 ? a : l,
          // transforming highlighted days (perhaps nested array)
          // to flat Map for faster access in day.jsx
          highlightDates: Gm(n.props.highlightDates),
          focused: !1,
          // used to focus day in inline version after month has changed, but not on
          // initial render
          shouldFocusDayInline: !1,
          isRenderAriaLiveMessage: !1,
          wasHidden: !1
        };
      }, n.resetHiddenStatus = function() {
        n.setState(Fe(Fe({}, n.state), { wasHidden: !1 }));
      }, n.setHiddenStatus = function() {
        n.setState(Fe(Fe({}, n.state), { wasHidden: !0 }));
      }, n.setHiddenStateOnVisibilityHidden = function() {
        document.visibilityState === "hidden" && n.setHiddenStatus();
      }, n.clearPreventFocusTimeout = function() {
        n.preventFocusTimeout && clearTimeout(n.preventFocusTimeout);
      }, n.setFocus = function() {
        n.input && n.input.focus && n.input.focus({ preventScroll: !0 });
      }, n.setBlur = function() {
        n.input && n.input.blur && n.input.blur(), n.cancelFocusInput();
      }, n.setOpen = function(a, i) {
        i === void 0 && (i = !1), n.setState({ open: a, preSelection: a && n.state.open ? n.state.preSelection : n.calcInitialState().preSelection, lastPreSelectChange: hd }, function() {
          a || n.setState(function(o) {
            return { focused: i ? o.focused : !1 };
          }, function() {
            !i && n.setBlur(), n.setState({ inputValue: null });
          });
        });
      }, n.inputOk = function() {
        return Qn(n.state.preSelection);
      }, n.isCalendarOpen = function() {
        return n.props.open === void 0 ? n.state.open && !n.props.disabled && !n.props.readOnly : n.props.open;
      }, n.handleFocus = function(a) {
        var i, o, s = n.state.wasHidden, l = s ? n.state.open : !0;
        s && n.resetHiddenStatus(), !n.state.preventFocus && l && ((o = (i = n.props).onFocus) === null || o === void 0 || o.call(i, a), !n.props.preventOpenOnFocus && !n.props.readOnly && n.setOpen(!0)), n.setState({ focused: !0 });
      }, n.sendFocusBackToInput = function() {
        n.preventFocusTimeout && n.clearPreventFocusTimeout(), n.setState({ preventFocus: !0 }, function() {
          n.preventFocusTimeout = setTimeout(function() {
            n.setFocus(), n.setState({ preventFocus: !1 });
          });
        });
      }, n.cancelFocusInput = function() {
        clearTimeout(n.inputFocusTimeout), n.inputFocusTimeout = void 0;
      }, n.deferFocusInput = function() {
        n.cancelFocusInput(), n.inputFocusTimeout = setTimeout(function() {
          return n.setFocus();
        }, 1);
      }, n.handleDropdownFocus = function() {
        n.cancelFocusInput();
      }, n.handleBlur = function(a) {
        var i, o;
        (!n.state.open || n.props.withPortal || n.props.showTimeInput) && ((o = (i = n.props).onBlur) === null || o === void 0 || o.call(i, a)), n.setState({ focused: !1 });
      }, n.handleCalendarClickOutside = function(a) {
        var i, o;
        n.props.inline || n.setOpen(!1), (o = (i = n.props).onClickOutside) === null || o === void 0 || o.call(i, a), n.props.withPortal && a.preventDefault();
      }, n.handleChange = function() {
        for (var a, i, o = [], s = 0; s < arguments.length; s++)
          o[s] = arguments[s];
        var l = o[0];
        if (!(n.props.onChangeRaw && (n.props.onChangeRaw.apply(n, o), !l || typeof l.isDefaultPrevented != "function" || l.isDefaultPrevented()))) {
          n.setState({ inputValue: (l == null ? void 0 : l.target) instanceof HTMLInputElement ? l.target.value : null, lastPreSelectChange: F9 });
          var u = n.props, c = u.dateFormat, d = c === void 0 ? t.defaultProps.dateFormat : c, h = u.strictParsing, p = h === void 0 ? t.defaultProps.strictParsing : h, v = u.selectsRange, m = u.startDate, g = u.endDate, b = (l == null ? void 0 : l.target) instanceof HTMLInputElement ? l.target.value : "";
          if (v) {
            var y = b.split("-", 2).map(function(R) {
              return R.trim();
            }), w = y[0], S = y[1], _ = ud(w ?? "", d, n.props.locale, p), E = ud(S ?? "", d, n.props.locale, p), C = (m == null ? void 0 : m.getTime()) !== (_ == null ? void 0 : _.getTime()), D = (g == null ? void 0 : g.getTime()) !== (E == null ? void 0 : E.getTime());
            if (!C && !D || _ && Or(_, n.props) || E && Or(E, n.props))
              return;
            (i = (a = n.props).onChange) === null || i === void 0 || i.call(a, [_, E], l);
          } else {
            var O = ud(b, d, n.props.locale, p, n.props.minDate);
            n.props.showTimeSelectOnly && n.props.selected && O && !Ie(O, n.props.selected) && (O = HG(n.props.selected, { hours: Cn(O), minutes: Dn(O), seconds: Jn(O) })), (O || !b) && n.setSelected(O, l, !0);
          }
        }
      }, n.handleSelect = function(a, i, o) {
        if (n.props.shouldCloseOnSelect && !n.props.showTimeSelect && n.sendFocusBackToInput(), n.props.onChangeRaw && n.props.onChangeRaw(i), n.setSelected(a, i, !1, o), n.props.showDateSelect && n.setState({ isRenderAriaLiveMessage: !0 }), !n.props.shouldCloseOnSelect || n.props.showTimeSelect)
          n.setPreSelection(a);
        else if (!n.props.inline) {
          n.props.selectsRange || n.setOpen(!1);
          var s = n.props, l = s.startDate, u = s.endDate;
          l && !u && (n.props.swapRange || !Xm(a, l)) && n.setOpen(!1);
        }
      }, n.setSelected = function(a, i, o, s) {
        var l, u, c = a;
        if (n.props.showYearPicker) {
          if (c !== null && Ml(xe(c), n.props))
            return;
        } else if (n.props.showMonthYearPicker) {
          if (c !== null && kw(c, n.props))
            return;
        } else if (c !== null && Or(c, n.props))
          return;
        var d = n.props, h = d.onChange, p = d.selectsRange, v = d.startDate, m = d.endDate, g = d.selectsMultiple, b = d.selectedDates, y = d.minTime, w = d.swapRange;
        if (!Ya(n.props.selected, c) || n.props.allowSameDay || p || g)
          if (c !== null && (n.props.selected && (!o || !n.props.showTimeSelect && !n.props.showTimeSelectOnly && !n.props.showTimeInput) && (c = cd(c, { hour: Cn(n.props.selected), minute: Dn(n.props.selected), second: Jn(n.props.selected) })), !o && (n.props.showTimeSelect || n.props.showTimeSelectOnly) && y && (c = cd(c, { hour: y.getHours(), minute: y.getMinutes(), second: y.getSeconds() })), n.props.inline || n.setState({ preSelection: c }), n.props.focusSelectedMonth || n.setState({ monthSelectedIn: s })), p) {
            var S = !v && !m, _ = v && !m, E = v && m;
            S ? h == null || h([c, null], i) : _ && (c === null ? h == null || h([null, null], i) : Xm(c, v) ? w ? h == null || h([c, v], i) : h == null || h([c, null], i) : h == null || h([v, c], i)), E && (h == null || h([c, null], i));
          } else if (g) {
            if (c !== null)
              if (!(b != null && b.length))
                h == null || h([c], i);
              else {
                var C = b.some(function(O) {
                  return Ie(O, c);
                });
                if (C) {
                  var D = b.filter(function(O) {
                    return !Ie(O, c);
                  });
                  h == null || h(D, i);
                } else
                  h == null || h(_n(_n([], b, !0), [c], !1), i);
              }
          } else
            h == null || h(c, i);
        o || ((u = (l = n.props).onSelect) === null || u === void 0 || u.call(l, c, i), n.setState({ inputValue: null }));
      }, n.setPreSelection = function(a) {
        var i = Qn(n.props.minDate), o = Qn(n.props.maxDate), s = !0;
        if (a) {
          var l = Nl(a);
          if (i && o)
            s = ts(a, n.props.minDate, n.props.maxDate);
          else if (i) {
            var u = Nl(n.props.minDate);
            s = Oa(a, u) || Ya(l, u);
          } else if (o) {
            var c = Fm(n.props.maxDate);
            s = ri(a, c) || Ya(l, c);
          }
        }
        s && n.setState({ preSelection: a });
      }, n.toggleCalendar = function() {
        n.setOpen(!n.state.open);
      }, n.handleTimeChange = function(a) {
        var i, o;
        if (!(n.props.selectsRange || n.props.selectsMultiple)) {
          var s = n.props.selected ? n.props.selected : n.getPreSelection(), l = n.props.selected ? a : cd(s, { hour: Cn(a), minute: Dn(a) });
          n.setState({ preSelection: l }), (o = (i = n.props).onChange) === null || o === void 0 || o.call(i, l), n.props.shouldCloseOnSelect && !n.props.showTimeInput && (n.sendFocusBackToInput(), n.setOpen(!1)), n.props.showTimeInput && n.setOpen(!0), (n.props.showTimeSelectOnly || n.props.showTimeSelect) && n.setState({ isRenderAriaLiveMessage: !0 }), n.setState({ inputValue: null });
        }
      }, n.onInputClick = function() {
        var a, i;
        !n.props.disabled && !n.props.readOnly && n.setOpen(!0), (i = (a = n.props).onInputClick) === null || i === void 0 || i.call(a);
      }, n.onInputKeyDown = function(a) {
        var i, o, s, l, u, c;
        (o = (i = n.props).onKeyDown) === null || o === void 0 || o.call(i, a);
        var d = a.key;
        if (!n.state.open && !n.props.inline && !n.props.preventOpenOnFocus) {
          (d === ee.ArrowDown || d === ee.ArrowUp || d === ee.Enter) && ((s = n.onInputClick) === null || s === void 0 || s.call(n));
          return;
        }
        if (n.state.open) {
          if (d === ee.ArrowDown || d === ee.ArrowUp) {
            a.preventDefault();
            var h = n.props.showTimeSelectOnly ? ".react-datepicker__time-list-item[tabindex='0']" : n.props.showWeekPicker && n.props.showWeekNumbers ? '.react-datepicker__week-number[tabindex="0"]' : n.props.showFullMonthYearPicker || n.props.showMonthYearPicker ? '.react-datepicker__month-text[tabindex="0"]' : '.react-datepicker__day[tabindex="0"]', p = ((l = n.calendar) === null || l === void 0 ? void 0 : l.containerRef.current) instanceof Element && n.calendar.containerRef.current.querySelector(h);
            p instanceof HTMLElement && p.focus({ preventScroll: !0 });
            return;
          }
          var v = Ze(n.state.preSelection);
          d === ee.Enter ? (a.preventDefault(), n.inputOk() && n.state.lastPreSelectChange === hd ? (n.handleSelect(v, a), !n.props.shouldCloseOnSelect && n.setPreSelection(v)) : n.setOpen(!1)) : d === ee.Escape ? (a.preventDefault(), n.sendFocusBackToInput(), n.setOpen(!1)) : d === ee.Tab && n.setOpen(!1), n.inputOk() || (c = (u = n.props).onInputError) === null || c === void 0 || c.call(u, { code: 1, msg: fd });
        }
      }, n.onPortalKeyDown = function(a) {
        var i = a.key;
        i === ee.Escape && (a.preventDefault(), n.setState({ preventFocus: !0 }, function() {
          n.setOpen(!1), setTimeout(function() {
            n.setFocus(), n.setState({ preventFocus: !1 });
          });
        }));
      }, n.onDayKeyDown = function(a) {
        var i, o, s, l, u, c, d = n.props, h = d.minDate, p = d.maxDate, v = d.disabledKeyboardNavigation, m = d.showWeekPicker, g = d.shouldCloseOnSelect, b = d.locale, y = d.calendarStartDay, w = d.adjustDateOnChange, S = d.inline;
        if ((o = (i = n.props).onKeyDown) === null || o === void 0 || o.call(i, a), !v) {
          var _ = a.key, E = a.shiftKey, C = Ze(n.state.preSelection), D = function(K, L) {
            var I = L;
            switch (K) {
              case ee.ArrowRight:
                I = m ? fu(L, 1) : ra(L, 1);
                break;
              case ee.ArrowLeft:
                I = m ? Om(L, 1) : SG(L, 1);
                break;
              case ee.ArrowUp:
                I = Om(L, 1);
                break;
              case ee.ArrowDown:
                I = fu(L, 1);
                break;
              case ee.PageUp:
                I = E ? co(L, 1) : uo(L, 1);
                break;
              case ee.PageDown:
                I = E ? Xn(L, 1) : en(L, 1);
                break;
              case ee.Home:
                I = Sa(L, b, y);
                break;
              case ee.End:
                I = X8(L);
                break;
            }
            return I;
          }, O = function(K, L) {
            for (var I = 40, F = K, de = !1, T = 0, M = D(K, L); !de; ) {
              if (T >= I) {
                M = L;
                break;
              }
              h && M < h && (F = ee.ArrowRight, M = Or(h, n.props) ? D(F, M) : h), p && M > p && (F = ee.ArrowLeft, M = Or(p, n.props) ? D(F, M) : p), Or(M, n.props) ? ((F === ee.PageUp || F === ee.Home) && (F = ee.ArrowRight), (F === ee.PageDown || F === ee.End) && (F = ee.ArrowLeft), M = D(F, M)) : de = !0, T++;
            }
            return M;
          };
          if (_ === ee.Enter) {
            a.preventDefault(), n.handleSelect(C, a), !g && n.setPreSelection(C);
            return;
          } else if (_ === ee.Escape) {
            a.preventDefault(), n.setOpen(!1), n.inputOk() || (l = (s = n.props).onInputError) === null || l === void 0 || l.call(s, { code: 1, msg: fd });
            return;
          }
          var R = null;
          switch (_) {
            case ee.ArrowLeft:
            case ee.ArrowRight:
            case ee.ArrowUp:
            case ee.ArrowDown:
            case ee.PageUp:
            case ee.PageDown:
            case ee.Home:
            case ee.End:
              R = O(_, C);
              break;
          }
          if (!R) {
            (c = (u = n.props).onInputError) === null || c === void 0 || c.call(u, { code: 1, msg: fd });
            return;
          }
          if (a.preventDefault(), n.setState({ lastPreSelectChange: hd }), w && n.setSelected(R), n.setPreSelection(R), S) {
            var P = Ht(C), A = Ht(R), B = xe(C), $ = xe(R);
            P !== A || B !== $ ? n.setState({ shouldFocusDayInline: !0 }) : n.setState({ shouldFocusDayInline: !1 });
          }
        }
      }, n.onPopperKeyDown = function(a) {
        var i = a.key;
        i === ee.Escape && (a.preventDefault(), n.sendFocusBackToInput());
      }, n.onClearClick = function(a) {
        a && a.preventDefault && a.preventDefault(), n.sendFocusBackToInput();
        var i = n.props, o = i.selectsRange, s = i.onChange;
        o ? s == null || s([null, null], a) : s == null || s(null, a), n.setState({ inputValue: null });
      }, n.clear = function() {
        n.onClearClick();
      }, n.onScroll = function(a) {
        typeof n.props.closeOnScroll == "boolean" && n.props.closeOnScroll ? (a.target === document || a.target === document.documentElement || a.target === document.body) && n.setOpen(!1) : typeof n.props.closeOnScroll == "function" && n.props.closeOnScroll(a) && n.setOpen(!1);
      }, n.renderCalendar = function() {
        var a, i;
        return !n.props.inline && !n.isCalendarOpen() ? null : /* @__PURE__ */ N(R9, { ...Fe({ showMonthYearDropdown: void 0, ref: function(o) {
          n.calendar = o;
        } }, n.props, n.state, { setOpen: n.setOpen, dateFormat: (a = n.props.dateFormatCalendar) !== null && a !== void 0 ? a : t.defaultProps.dateFormatCalendar, onSelect: n.handleSelect, onClickOutside: n.handleCalendarClickOutside, holidays: l9(n.modifyHolidays()), outsideClickIgnoreClass: Zm, onDropdownFocus: n.handleDropdownFocus, onTimeChange: n.handleTimeChange, className: n.props.calendarClassName, container: n.props.calendarContainer, handleOnKeyDown: n.props.onKeyDown, handleOnDayKeyDown: n.onDayKeyDown, setPreSelection: n.setPreSelection, dropdownMode: (i = n.props.dropdownMode) !== null && i !== void 0 ? i : t.defaultProps.dropdownMode }), children: n.props.children });
      }, n.renderAriaLiveRegion = function() {
        var a = n.props, i = a.dateFormat, o = i === void 0 ? t.defaultProps.dateFormat : i, s = a.locale, l = n.props.showTimeInput || n.props.showTimeSelect, u = l ? "PPPPp" : "PPPP", c;
        return n.props.selectsRange ? c = "Selected start date: ".concat(Er(n.props.startDate, { dateFormat: u, locale: s }), ". ").concat(n.props.endDate ? "End date: " + Er(n.props.endDate, { dateFormat: u, locale: s }) : "") : n.props.showTimeSelectOnly ? c = "Selected time: ".concat(Er(n.props.selected, { dateFormat: o, locale: s })) : n.props.showYearPicker ? c = "Selected year: ".concat(Er(n.props.selected, { dateFormat: "yyyy", locale: s })) : n.props.showMonthYearPicker ? c = "Selected month: ".concat(Er(n.props.selected, { dateFormat: "MMMM yyyy", locale: s })) : n.props.showQuarterYearPicker ? c = "Selected quarter: ".concat(Er(n.props.selected, { dateFormat: "yyyy, QQQ", locale: s })) : c = "Selected date: ".concat(Er(n.props.selected, { dateFormat: u, locale: s })), /* @__PURE__ */ N("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live", children: c });
      }, n.renderDateInput = function() {
        var a, i, o, s = Lt(n.props.className, (a = {}, a[Zm] = n.state.open, a)), l = n.props.customInput || /* @__PURE__ */ N("input", { type: "text" }), u = n.props.customInputRef || "ref", c = n.props, d = c.dateFormat, h = d === void 0 ? t.defaultProps.dateFormat : d, p = c.locale, v = typeof n.props.value == "string" ? n.props.value : typeof n.state.inputValue == "string" ? n.state.inputValue : n.props.selectsRange ? G8(n.props.startDate, n.props.endDate, { dateFormat: h, locale: p }) : n.props.selectsMultiple ? z8((o = n.props.selectedDates) !== null && o !== void 0 ? o : [], { dateFormat: h, locale: p }) : Er(n.props.selected, { dateFormat: h, locale: p });
        return $l(l, (i = {}, i[u] = function(m) {
          n.input = m;
        }, i.value = v, i.onBlur = n.handleBlur, i.onChange = n.handleChange, i.onClick = n.onInputClick, i.onFocus = n.handleFocus, i.onKeyDown = n.onInputKeyDown, i.id = n.props.id, i.name = n.props.name, i.form = n.props.form, i.autoFocus = n.props.autoFocus, i.placeholder = n.props.placeholderText, i.disabled = n.props.disabled, i.autoComplete = n.props.autoComplete, i.className = Lt(l.props.className, s), i.title = n.props.title, i.readOnly = n.props.readOnly, i.required = n.props.required, i.tabIndex = n.props.tabIndex, i["aria-describedby"] = n.props.ariaDescribedBy, i["aria-invalid"] = n.props.ariaInvalid, i["aria-labelledby"] = n.props.ariaLabelledBy, i["aria-required"] = n.props.ariaRequired, i));
      }, n.renderClearButton = function() {
        var a = n.props, i = a.isClearable, o = a.disabled, s = a.selected, l = a.startDate, u = a.endDate, c = a.clearButtonTitle, d = a.clearButtonClassName, h = d === void 0 ? "" : d, p = a.ariaLabelClose, v = p === void 0 ? "Close" : p, m = a.selectedDates;
        return i && (s != null || l != null || u != null || m != null && m.length) ? /* @__PURE__ */ N("button", { type: "button", className: Lt("react-datepicker__close-icon", h, { "react-datepicker__close-icon--disabled": o }), disabled: o, "aria-label": v, onClick: n.onClearClick, title: c, tabIndex: -1 }) : null;
      }, n.state = n.calcInitialState(), n.preventFocusTimeout = void 0, n;
    }
    return Object.defineProperty(t, "defaultProps", { get: function() {
      return { allowSameDay: !1, dateFormat: "MM/dd/yyyy", dateFormatCalendar: "LLLL yyyy", disabled: !1, disabledKeyboardNavigation: !1, dropdownMode: "scroll", preventOpenOnFocus: !1, monthsShown: 1, readOnly: !1, withPortal: !1, selectsDisabledDaysInRange: !1, shouldCloseOnSelect: !0, showTimeSelect: !1, showTimeInput: !1, showPreviousMonths: !1, showMonthYearPicker: !1, showFullMonthYearPicker: !1, showTwoColumnMonthYearPicker: !1, showFourColumnMonthYearPicker: !1, showYearPicker: !1, showQuarterYearPicker: !1, showWeekPicker: !1, strictParsing: !1, swapRange: !1, timeIntervals: 30, timeCaption: "Time", previousMonthAriaLabel: "Previous Month", previousMonthButtonLabel: "Previous Month", nextMonthAriaLabel: "Next Month", nextMonthButtonLabel: "Next Month", previousYearAriaLabel: "Previous Year", previousYearButtonLabel: "Previous Year", nextYearAriaLabel: "Next Year", nextYearButtonLabel: "Next Year", timeInputLabel: "Time", enableTabLoop: !0, yearItemNumber: zs, focusSelectedMonth: !1, showPopperArrow: !0, excludeScrollbar: !0, customTimeInput: null, calendarStartDay: void 0, toggleCalendarOnIconClick: !1, usePointerEvent: !1 };
    }, enumerable: !1, configurable: !0 }), t.prototype.componentDidMount = function() {
      window.addEventListener("scroll", this.onScroll, !0), document.addEventListener("visibilitychange", this.setHiddenStateOnVisibilityHidden);
    }, t.prototype.componentDidUpdate = function(r, n) {
      var a, i, o, s;
      r.inline && L9(r.selected, this.props.selected) && this.setPreSelection(this.props.selected), this.state.monthSelectedIn !== void 0 && r.monthsShown !== this.props.monthsShown && this.setState({ monthSelectedIn: 0 }), r.highlightDates !== this.props.highlightDates && this.setState({ highlightDates: Gm(this.props.highlightDates) }), !n.focused && !Ya(r.selected, this.props.selected) && this.setState({ inputValue: null }), n.open !== this.state.open && (n.open === !1 && this.state.open === !0 && ((i = (a = this.props).onCalendarOpen) === null || i === void 0 || i.call(a)), n.open === !0 && this.state.open === !1 && ((s = (o = this.props).onCalendarClose) === null || s === void 0 || s.call(o)));
    }, t.prototype.componentWillUnmount = function() {
      this.clearPreventFocusTimeout(), window.removeEventListener("scroll", this.onScroll, !0), document.removeEventListener("visibilitychange", this.setHiddenStateOnVisibilityHidden);
    }, t.prototype.renderInputContainer = function() {
      var r = this.props, n = r.showIcon, a = r.icon, i = r.calendarIconClassname, o = r.calendarIconClassName, s = r.toggleCalendarOnIconClick, l = this.state.open;
      return i && console.warn("calendarIconClassname props is deprecated. should use calendarIconClassName props."), /* @__PURE__ */ lt("div", { className: "react-datepicker__input-container".concat(n ? " react-datepicker__view-calendar-icon" : ""), children: [n && /* @__PURE__ */ N(P9, { ...Fe({ icon: a, className: Lt(o, !o && i, l && "react-datepicker-ignore-onclickoutside") }, s ? { onClick: this.toggleCalendar } : null) }), this.state.isRenderAriaLiveMessage && this.renderAriaLiveRegion(), this.renderDateInput(), this.renderClearButton()] });
    }, t.prototype.render = function() {
      var r = this.renderCalendar();
      if (this.props.inline) return r;
      if (this.props.withPortal) {
        var n = this.state.open ? /* @__PURE__ */ N(Aw, { enableTabLoop: this.props.enableTabLoop, children: /* @__PURE__ */ N("div", { className: "react-datepicker__portal", tabIndex: -1, onKeyDown: this.onPortalKeyDown, children: r }) }) : null;
        return this.state.open && this.props.portalId && (n = /* @__PURE__ */ N(Mw, { ...Fe({ portalId: this.props.portalId }, this.props), children: n })), /* @__PURE__ */ lt("div", { children: [this.renderInputContainer(), n] });
      }
      return /* @__PURE__ */ N($9, { ...Fe({}, this.props, { className: this.props.popperClassName, hidePopper: !this.isCalendarOpen(), targetComponent: this.renderInputContainer(), popperComponent: r, popperOnKeyDown: this.onPopperKeyDown, showArrow: this.props.showPopperArrow }) });
    }, t;
  }(tt)
), F9 = "input", hd = "navigate";
function Xo(e, t) {
  if (e.one !== void 0 && t === 1)
    return e.one;
  const r = t % 10, n = t % 100;
  return r === 1 && n !== 11 ? e.singularNominative.replace("{{count}}", String(t)) : r >= 2 && r <= 4 && (n < 10 || n > 20) ? e.singularGenitive.replace("{{count}}", String(t)) : e.pluralGenitive.replace("{{count}}", String(t));
}
function Qt(e) {
  return (t, r) => r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? e.future ? Xo(e.future, t) : "через " + Xo(e.regular, t) : e.past ? Xo(e.past, t) : Xo(e.regular, t) + " назад" : Xo(e.regular, t);
}
const H9 = {
  lessThanXSeconds: Qt({
    regular: {
      one: "меньше секунды",
      singularNominative: "меньше {{count}} секунды",
      singularGenitive: "меньше {{count}} секунд",
      pluralGenitive: "меньше {{count}} секунд"
    },
    future: {
      one: "меньше, чем через секунду",
      singularNominative: "меньше, чем через {{count}} секунду",
      singularGenitive: "меньше, чем через {{count}} секунды",
      pluralGenitive: "меньше, чем через {{count}} секунд"
    }
  }),
  xSeconds: Qt({
    regular: {
      singularNominative: "{{count}} секунда",
      singularGenitive: "{{count}} секунды",
      pluralGenitive: "{{count}} секунд"
    },
    past: {
      singularNominative: "{{count}} секунду назад",
      singularGenitive: "{{count}} секунды назад",
      pluralGenitive: "{{count}} секунд назад"
    },
    future: {
      singularNominative: "через {{count}} секунду",
      singularGenitive: "через {{count}} секунды",
      pluralGenitive: "через {{count}} секунд"
    }
  }),
  halfAMinute: (e, t) => t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "через полминуты" : "полминуты назад" : "полминуты",
  lessThanXMinutes: Qt({
    regular: {
      one: "меньше минуты",
      singularNominative: "меньше {{count}} минуты",
      singularGenitive: "меньше {{count}} минут",
      pluralGenitive: "меньше {{count}} минут"
    },
    future: {
      one: "меньше, чем через минуту",
      singularNominative: "меньше, чем через {{count}} минуту",
      singularGenitive: "меньше, чем через {{count}} минуты",
      pluralGenitive: "меньше, чем через {{count}} минут"
    }
  }),
  xMinutes: Qt({
    regular: {
      singularNominative: "{{count}} минута",
      singularGenitive: "{{count}} минуты",
      pluralGenitive: "{{count}} минут"
    },
    past: {
      singularNominative: "{{count}} минуту назад",
      singularGenitive: "{{count}} минуты назад",
      pluralGenitive: "{{count}} минут назад"
    },
    future: {
      singularNominative: "через {{count}} минуту",
      singularGenitive: "через {{count}} минуты",
      pluralGenitive: "через {{count}} минут"
    }
  }),
  aboutXHours: Qt({
    regular: {
      singularNominative: "около {{count}} часа",
      singularGenitive: "около {{count}} часов",
      pluralGenitive: "около {{count}} часов"
    },
    future: {
      singularNominative: "приблизительно через {{count}} час",
      singularGenitive: "приблизительно через {{count}} часа",
      pluralGenitive: "приблизительно через {{count}} часов"
    }
  }),
  xHours: Qt({
    regular: {
      singularNominative: "{{count}} час",
      singularGenitive: "{{count}} часа",
      pluralGenitive: "{{count}} часов"
    }
  }),
  xDays: Qt({
    regular: {
      singularNominative: "{{count}} день",
      singularGenitive: "{{count}} дня",
      pluralGenitive: "{{count}} дней"
    }
  }),
  aboutXWeeks: Qt({
    regular: {
      singularNominative: "около {{count}} недели",
      singularGenitive: "около {{count}} недель",
      pluralGenitive: "около {{count}} недель"
    },
    future: {
      singularNominative: "приблизительно через {{count}} неделю",
      singularGenitive: "приблизительно через {{count}} недели",
      pluralGenitive: "приблизительно через {{count}} недель"
    }
  }),
  xWeeks: Qt({
    regular: {
      singularNominative: "{{count}} неделя",
      singularGenitive: "{{count}} недели",
      pluralGenitive: "{{count}} недель"
    }
  }),
  aboutXMonths: Qt({
    regular: {
      singularNominative: "около {{count}} месяца",
      singularGenitive: "около {{count}} месяцев",
      pluralGenitive: "около {{count}} месяцев"
    },
    future: {
      singularNominative: "приблизительно через {{count}} месяц",
      singularGenitive: "приблизительно через {{count}} месяца",
      pluralGenitive: "приблизительно через {{count}} месяцев"
    }
  }),
  xMonths: Qt({
    regular: {
      singularNominative: "{{count}} месяц",
      singularGenitive: "{{count}} месяца",
      pluralGenitive: "{{count}} месяцев"
    }
  }),
  aboutXYears: Qt({
    regular: {
      singularNominative: "около {{count}} года",
      singularGenitive: "около {{count}} лет",
      pluralGenitive: "около {{count}} лет"
    },
    future: {
      singularNominative: "приблизительно через {{count}} год",
      singularGenitive: "приблизительно через {{count}} года",
      pluralGenitive: "приблизительно через {{count}} лет"
    }
  }),
  xYears: Qt({
    regular: {
      singularNominative: "{{count}} год",
      singularGenitive: "{{count}} года",
      pluralGenitive: "{{count}} лет"
    }
  }),
  overXYears: Qt({
    regular: {
      singularNominative: "больше {{count}} года",
      singularGenitive: "больше {{count}} лет",
      pluralGenitive: "больше {{count}} лет"
    },
    future: {
      singularNominative: "больше, чем через {{count}} год",
      singularGenitive: "больше, чем через {{count}} года",
      pluralGenitive: "больше, чем через {{count}} лет"
    }
  }),
  almostXYears: Qt({
    regular: {
      singularNominative: "почти {{count}} год",
      singularGenitive: "почти {{count}} года",
      pluralGenitive: "почти {{count}} лет"
    },
    future: {
      singularNominative: "почти через {{count}} год",
      singularGenitive: "почти через {{count}} года",
      pluralGenitive: "почти через {{count}} лет"
    }
  })
}, B9 = (e, t, r) => H9[e](t, r), j9 = {
  full: "EEEE, d MMMM y 'г.'",
  long: "d MMMM y 'г.'",
  medium: "d MMM y 'г.'",
  short: "dd.MM.y"
}, Y9 = {
  full: "H:mm:ss zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, W9 = {
  any: "{{date}}, {{time}}"
}, V9 = {
  date: Zi({
    formats: j9,
    defaultWidth: "full"
  }),
  time: Zi({
    formats: Y9,
    defaultWidth: "full"
  }),
  dateTime: Zi({
    formats: W9,
    defaultWidth: "any"
  })
}, yp = [
  "воскресенье",
  "понедельник",
  "вторник",
  "среду",
  "четверг",
  "пятницу",
  "субботу"
];
function U9(e) {
  const t = yp[e];
  switch (e) {
    case 0:
      return "'в прошлое " + t + " в' p";
    case 1:
    case 2:
    case 4:
      return "'в прошлый " + t + " в' p";
    case 3:
    case 5:
    case 6:
      return "'в прошлую " + t + " в' p";
  }
}
function e0(e) {
  const t = yp[e];
  return e === 2 ? "'во " + t + " в' p" : "'в " + t + " в' p";
}
function G9(e) {
  const t = yp[e];
  switch (e) {
    case 0:
      return "'в следующее " + t + " в' p";
    case 1:
    case 2:
    case 4:
      return "'в следующий " + t + " в' p";
    case 3:
    case 5:
    case 6:
      return "'в следующую " + t + " в' p";
  }
}
const z9 = {
  lastWeek: (e, t, r) => {
    const n = e.getDay();
    return Dm(e, t, r) ? e0(n) : U9(n);
  },
  yesterday: "'вчера в' p",
  today: "'сегодня в' p",
  tomorrow: "'завтра в' p",
  nextWeek: (e, t, r) => {
    const n = e.getDay();
    return Dm(e, t, r) ? e0(n) : G9(n);
  },
  other: "P"
}, q9 = (e, t, r, n) => {
  const a = z9[e];
  return typeof a == "function" ? a(t, r, n) : a;
}, K9 = {
  narrow: ["до н.э.", "н.э."],
  abbreviated: ["до н. э.", "н. э."],
  wide: ["до нашей эры", "нашей эры"]
}, X9 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1-й кв.", "2-й кв.", "3-й кв.", "4-й кв."],
  wide: ["1-й квартал", "2-й квартал", "3-й квартал", "4-й квартал"]
}, Q9 = {
  narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
  abbreviated: [
    "янв.",
    "фев.",
    "март",
    "апр.",
    "май",
    "июнь",
    "июль",
    "авг.",
    "сент.",
    "окт.",
    "нояб.",
    "дек."
  ],
  wide: [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь"
  ]
}, J9 = {
  narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
  abbreviated: [
    "янв.",
    "фев.",
    "мар.",
    "апр.",
    "мая",
    "июн.",
    "июл.",
    "авг.",
    "сент.",
    "окт.",
    "нояб.",
    "дек."
  ],
  wide: [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря"
  ]
}, Z9 = {
  narrow: ["В", "П", "В", "С", "Ч", "П", "С"],
  short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
  abbreviated: ["вск", "пнд", "втр", "срд", "чтв", "птн", "суб"],
  wide: [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота"
  ]
}, ez = {
  narrow: {
    am: "ДП",
    pm: "ПП",
    midnight: "полн.",
    noon: "полд.",
    morning: "утро",
    afternoon: "день",
    evening: "веч.",
    night: "ночь"
  },
  abbreviated: {
    am: "ДП",
    pm: "ПП",
    midnight: "полн.",
    noon: "полд.",
    morning: "утро",
    afternoon: "день",
    evening: "веч.",
    night: "ночь"
  },
  wide: {
    am: "ДП",
    pm: "ПП",
    midnight: "полночь",
    noon: "полдень",
    morning: "утро",
    afternoon: "день",
    evening: "вечер",
    night: "ночь"
  }
}, tz = {
  narrow: {
    am: "ДП",
    pm: "ПП",
    midnight: "полн.",
    noon: "полд.",
    morning: "утра",
    afternoon: "дня",
    evening: "веч.",
    night: "ночи"
  },
  abbreviated: {
    am: "ДП",
    pm: "ПП",
    midnight: "полн.",
    noon: "полд.",
    morning: "утра",
    afternoon: "дня",
    evening: "веч.",
    night: "ночи"
  },
  wide: {
    am: "ДП",
    pm: "ПП",
    midnight: "полночь",
    noon: "полдень",
    morning: "утра",
    afternoon: "дня",
    evening: "вечера",
    night: "ночи"
  }
}, rz = (e, t) => {
  const r = Number(e), n = t == null ? void 0 : t.unit;
  let a;
  return n === "date" ? a = "-е" : n === "week" || n === "minute" || n === "second" ? a = "-я" : a = "-й", r + a;
}, nz = {
  ordinalNumber: rz,
  era: vn({
    values: K9,
    defaultWidth: "wide"
  }),
  quarter: vn({
    values: X9,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: vn({
    values: Q9,
    defaultWidth: "wide",
    formattingValues: J9,
    defaultFormattingWidth: "wide"
  }),
  day: vn({
    values: Z9,
    defaultWidth: "wide"
  }),
  dayPeriod: vn({
    values: ez,
    defaultWidth: "any",
    formattingValues: tz,
    defaultFormattingWidth: "wide"
  })
}, az = /^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i, iz = /\d+/i, oz = {
  narrow: /^((до )?н\.?\s?э\.?)/i,
  abbreviated: /^((до )?н\.?\s?э\.?)/i,
  wide: /^(до нашей эры|нашей эры|наша эра)/i
}, sz = {
  any: [/^д/i, /^н/i]
}, lz = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234](-?[ыои]?й?)? кв.?/i,
  wide: /^[1234](-?[ыои]?й?)? квартал/i
}, uz = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, cz = {
  narrow: /^[яфмаисонд]/i,
  abbreviated: /^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,
  wide: /^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i
}, dz = {
  narrow: [
    /^я/i,
    /^ф/i,
    /^м/i,
    /^а/i,
    /^м/i,
    /^и/i,
    /^и/i,
    /^а/i,
    /^с/i,
    /^о/i,
    /^н/i,
    /^я/i
  ],
  any: [
    /^я/i,
    /^ф/i,
    /^мар/i,
    /^ап/i,
    /^ма[йя]/i,
    /^июн/i,
    /^июл/i,
    /^ав/i,
    /^с/i,
    /^о/i,
    /^н/i,
    /^д/i
  ]
}, fz = {
  narrow: /^[впсч]/i,
  short: /^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,
  abbreviated: /^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,
  wide: /^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i
}, hz = {
  narrow: [/^в/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
  any: [/^в[ос]/i, /^п[он]/i, /^в/i, /^ср/i, /^ч/i, /^п[ят]/i, /^с[уб]/i]
}, pz = {
  narrow: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
  abbreviated: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
  wide: /^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i
}, vz = {
  any: {
    am: /^дп/i,
    pm: /^пп/i,
    midnight: /^полн/i,
    noon: /^полд/i,
    morning: /^у/i,
    afternoon: /^д[ен]/i,
    evening: /^в/i,
    night: /^н/i
  }
}, gz = {
  ordinalNumber: aw({
    matchPattern: az,
    parsePattern: iz,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: gn({
    matchPatterns: oz,
    defaultMatchWidth: "wide",
    parsePatterns: sz,
    defaultParseWidth: "any"
  }),
  quarter: gn({
    matchPatterns: lz,
    defaultMatchWidth: "wide",
    parsePatterns: uz,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: gn({
    matchPatterns: cz,
    defaultMatchWidth: "wide",
    parsePatterns: dz,
    defaultParseWidth: "any"
  }),
  day: gn({
    matchPatterns: fz,
    defaultMatchWidth: "wide",
    parsePatterns: hz,
    defaultParseWidth: "any"
  }),
  dayPeriod: gn({
    matchPatterns: pz,
    defaultMatchWidth: "wide",
    parsePatterns: vz,
    defaultParseWidth: "any"
  })
}, $w = {
  code: "ru",
  formatDistance: B9,
  formatLong: V9,
  formatRelative: q9,
  localize: nz,
  match: gz,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
var ys = {};
ys.range = function(e, t, r) {
  var n = Array.from(Array(t));
  return r = r === void 0 ? 1 : r, n.map(function(a, i) {
    var o = r;
    return typeof r == "function" && (o = r(i, e, t)), e + i * o;
  });
};
ys.renderCustomHeader = function(e) {
  var t = e.date, r = e.changeYear, n = e.changeMonth, a = e.decreaseMonth, i = e.increaseMonth, o = e.prevMonthButtonDisabled, s = e.nextMonthButtonDisabled, l = ys.range(1990, xe(/* @__PURE__ */ new Date()) + 1, 1), u = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  return /* @__PURE__ */ f.createElement("div", {
    style: {
      margin: 10,
      display: "flex",
      justifyContent: "center"
    }
  }, /* @__PURE__ */ f.createElement("button", {
    className: "date-arrow-style",
    onClick: a,
    disabled: o
  }, "<"), /* @__PURE__ */ f.createElement("select", {
    className: "date-select-style",
    value: xe(t),
    onChange: function(d) {
      var h = d.target.value;
      return r(h);
    }
  }, l.map(function(c) {
    return /* @__PURE__ */ f.createElement("option", {
      key: c,
      value: c
    }, c);
  })), /* @__PURE__ */ f.createElement("select", {
    className: "date-select-style",
    value: u[Ht(t)],
    onChange: function(d) {
      var h = d.target.value;
      return n(u.indexOf(h));
    }
  }, u.map(function(c) {
    return /* @__PURE__ */ f.createElement("option", {
      key: c,
      value: c
    }, c);
  })), /* @__PURE__ */ f.createElement("button", {
    className: "date-arrow-style",
    onClick: i,
    disabled: s
  }, ">"));
};
var mz = function(t) {
  var r = t.value, n = t.onChange, a = n === void 0 ? function() {
  } : n, i = t.className, o = i === void 0 ? "" : i, s = t.withTime, l = s === void 0 ? !1 : s, u = l ? fe.formats.dateTime : fe.formats.date, c = l ? fe.validators.dateTime : fe.validators.date, d, h;
  c(r) ? d = new Date(J(r, u).format()) : d = /* @__PURE__ */ new Date();
  var p = Cu(d), v = ve(p, 2), m = v[0], g = v[1];
  return na(function() {
    h.setOpen(!0);
  }), /* @__PURE__ */ f.createElement("div", {
    className: "rct-date-picker".concat(o ? " " + o : "")
  }, /* @__PURE__ */ f.createElement(Iw, {
    popperPlacement: "top-end",
    dateFormat: l ? "Pp" : "P",
    locale: $w,
    selected: m,
    onChange: function(y) {
      g(y), a(J(y).format(u));
    },
    showTimeInput: l,
    timeFormat: "p",
    ref: function(y) {
      return h = y;
    },
    renderCustomHeader: ys.renderCustomHeader
  }));
}, bz = function(t) {
  var r = t.value, n = t.onClick, a = n === void 0 ? function() {
  } : n, i = t.onChange, o = i === void 0 ? function() {
  } : i, s = t.className, l = s === void 0 ? "" : s, u = function(C) {
    return C.map(function(D) {
      if (fe.validators.date(D))
        return new Date(J(D, fe.formats.date).format());
    });
  }, c = r.split(fe.formats.datesSeparator), d = u(c), h = Cu(d), p = ve(h, 2), v = p[0], m = p[1], g = Array.isArray(v) ? v : d, b = ve(g, 2), y = b[0], w = b[1], S, _ = function(C) {
    if (m(C), !C[0] || !C[1]) {
      a();
      return;
    }
    var D = C.map(function(O) {
      return J(O).format(fe.formats.date);
    });
    o(D.join(fe.formats.datesSeparator));
  };
  return na(function() {
    S.setOpen(!0);
  }), /* @__PURE__ */ f.createElement("div", {
    className: "rct-period-picker".concat(l ? " " + l : "")
  }, /* @__PURE__ */ f.createElement(Iw, {
    selectsRange: !0,
    startDate: y,
    endDate: w,
    dateFormat: "dd.MM.yyyy",
    onChange: _,
    isClearable: !0,
    locale: $w,
    ref: function(C) {
      return S = C;
    },
    renderCustomHeader: ys.renderCustomHeader
  }));
}, yz = function(t) {
  var r = t.fileName, n = t.files, a = t.index, i = t.setFiles, o = t.filesDataCurrent, s = f.useRef(null), l = function(d) {
    var h = d.target.files[0], p = h.name;
    o.current[p] = h;
    var v = Cr(n);
    v[a] = p, setTimeout(function() {
      i(v);
    }, 0);
  }, u = function() {
    var d = Cr(n);
    d.splice(a, 1), setTimeout(function() {
      i(d);
    }, 0);
  };
  return /* @__PURE__ */ f.createElement("div", {
    className: "rct-file".concat(o.current[r] ? " is-new-file" : "")
  }, /* @__PURE__ */ f.createElement("div", {
    className: "rct-file-name",
    title: r
  }, r), /* @__PURE__ */ f.createElement("input", {
    type: "file",
    style: {
      display: "none"
    },
    ref: s,
    onChange: l
  }), /* @__PURE__ */ f.createElement("i", {
    className: "fas fa-sync-alt fa-fw",
    title: "заменить на другой файл",
    onClick: function() {
      return s.current.click();
    }
  }), /* @__PURE__ */ f.createElement("i", {
    className: "fas fa-trash fa-fw",
    title: "удалить файл из списка",
    onClick: u
  }));
}, _z = function(t) {
  var r = t.className, n = t.value, a = n === void 0 ? "" : n, i = t.isMultiple, o = i === void 0 ? !1 : i, s = t.onChange, l = function(S) {
    var _ = S.split(", ");
    return _.length === 1 && !_[0] ? [] : _;
  }, u = En(l(a)), c = ve(u, 3), d = c[0], h = c[1], p = c[2], v = f.useRef({}), m = f.useRef(null), g = f.useRef(0), b = function() {
    g.current = setTimeout(function() {
      g.current = 0;
    }, 100), s({
      value: h.current.join(", "),
      files: h.current,
      newFilesData: v.current
    });
  };
  f.useEffect(function() {
    return (!o || !d.length) && m.current.click(), function() {
      g.current || b();
    };
  }, []);
  var y = function(S) {
    var _ = S.target.files, E = o ? Cr(d) : [];
    if (_ != null && _.length) {
      var C = ye(_), D;
      try {
        for (C.s(); !(D = C.n()).done; ) {
          var O = D.value, R = O.name;
          v.current[R] = O, E.push(R);
        }
      } catch (P) {
        C.e(P);
      } finally {
        C.f();
      }
      setTimeout(function() {
        p(E), o || b();
      }, 0);
    }
  };
  return /* @__PURE__ */ f.createElement(f.Fragment, null, o && /* @__PURE__ */ f.createElement("div", {
    className: "rct-files-picker".concat(r ? " " + r : "")
  }, /* @__PURE__ */ f.createElement("div", {
    className: "rct-files-wrapper"
  }, /* @__PURE__ */ f.createElement("div", {
    className: "rct-files"
  }, d.map(function(w, S) {
    return /* @__PURE__ */ f.createElement(yz, {
      fileName: w,
      index: S,
      files: d,
      setFiles: p,
      filesDataCurrent: v
    });
  }), !d.length && /* @__PURE__ */ f.createElement("div", {
    className: "empty-files-list"
  }, "Пока ничего не выбрано"))), /* @__PURE__ */ f.createElement("div", {
    className: "p-1 rct-files-menu"
  }, /* @__PURE__ */ f.createElement("button", {
    className: "tf_btn tf_btn-transparent tf_btn-sm tf_btn-icon add-file",
    title: "Добавить еще файлов"
  }, /* @__PURE__ */ f.createElement("i", {
    className: "fas fa-plus fa-fw",
    onClick: function() {
      return m.current.click();
    }
  })), /* @__PURE__ */ f.createElement("button", {
    className: "tf_btn tf_btn-sm tf_btn-primary ok",
    onClick: b
  }, "OK"))), /* @__PURE__ */ f.createElement("input", {
    type: "file",
    style: {
      display: "none"
    },
    ref: m,
    onChange: y,
    multiple: o
  }));
}, t0 = function(t) {
  var r, n = t.utils, a = t.connector, i = t.parentCh, o = t.parentChildren, s = t.parent, l = t.showColumn, u = t.isRight, c = t.cell, d = t.onSortCurrent, h = a.header, p = a.searchContext, v = a.onChangeComponentState.onChangeFilterOrSort, m = v === void 0 ? function() {
  } : v, g = a.options, b = g === void 0 ? {} : g, y = b.columnsMenu, w = y.hasHideIcon, S = w === void 0 ? !1 : w, _ = y.hasOrderIcon, E = _ === void 0 ? !1 : _, C = y.hasFormatIcon, D = C === void 0 ? !1 : C, O = y.hasSearchIcon, R = O === void 0 ? !1 : O, P = y.hasSortIcon, A = P === void 0 ? !1 : P, B = f.useRef(null), $ = f.useRef(null), K = f.useState(!1), L = ve(K, 2), I = L[0], F = L[1], de = f.useState(!1), T = ve(de, 2), M = T[0], ie = T[1], z = function() {
    var X = [], Z = ye(i), se;
    try {
      for (Z.s(); !(se = Z.n()).done; ) {
        var Q = se.value, re = Q.i;
        X.push({
          index: re,
          value: o[re].value,
          isLeft: !!o[re]._.isLeft
        });
      }
    } catch (ft) {
      Z.e(ft);
    } finally {
      Z.f();
    }
    var De = function() {
    }, Y = function() {
      return De();
    }, He = Zu({
      initiator: B.current,
      id: "unitable-order-panel",
      minWidth: 0,
      minHeight: 0,
      onOutsideClick: Y,
      notResize: !0,
      autoSize: !0,
      children: /* @__PURE__ */ f.createElement(nS, le({}, t, {
        list: X,
        root: s != null && s.value ? s.value : "ROOT",
        onChange: function(jt) {
          var Mt = {}, At = ye(i), Ot;
          try {
            for (At.s(); !(Ot = At.n()).done; ) {
              var Le = Ot.value;
              Mt[Le.i] = Le;
            }
          } catch (lr) {
            At.e(lr);
          } finally {
            At.f();
          }
          for (var Ve in jt) i[Ve] = Mt[jt[Ve].index];
          n.orderTreeToOrderEnds(), a.refresh.headerAndBody(), n.saveTableSettingsToLocaleStorage();
        }
      }))
    }), kt = He.removeComponent;
    De = kt;
  }, V = function() {
    if (c._.sort)
      c._.sort === "down" ? c._.sort = "up" : (delete c._.sort, a.sortCell = null);
    else {
      var X;
      (X = a.sortCell) !== null && X !== void 0 && (X = X._) !== null && X !== void 0 && X.sort && (delete a.sortCell._.sort, a.sortCell._.refresh()), c._.sort = "down";
    }
    c._.sort && (a.sortCell = c), c._.refresh();
    var Z = n.storeGetPage({
      pageNum: 0
    });
    if (!Z) {
      m({
        header: h,
        searchContext: p,
        sortCell: a.sortCell
      });
      return;
    }
    console.log("################### GET PAGE FROM STORE", 0), n.refreshBodyWithNewRows({
      newRows: Z,
      newPageNum: 0
    });
  };
  return d.current = V, /* @__PURE__ */ f.createElement(f.Fragment, null, ((r = c._) === null || r === void 0 ? void 0 : r.format) && /* @__PURE__ */ f.createElement("div", {
    className: "uhc-format-label"
  }), /* @__PURE__ */ f.createElement("div", {
    className: "uhc-menu".concat(I ? " show-search-bar" : "").concat(M ? " show-formatter" : "")
  }, I || M ? /* @__PURE__ */ f.createElement(f.Fragment, null, I ? /* @__PURE__ */ f.createElement(wz, le({}, t, {
    setShowFilter: F
  })) : /* @__PURE__ */ f.createElement(Sz, le({}, t, {
    setShowFormatter: ie
  }))) : /* @__PURE__ */ f.createElement("div", {
    className: "uhc-menu-inner"
  }, A && c._.isEnd && /* @__PURE__ */ f.createElement("i", {
    className: "sort-button fas fa-sort-amount-".concat(c._.sort === "up" ? "up" : "down", "-alt").concat(c._.sort ? " is-present" : ""),
    title: "Сортировка по столбцу",
    onClick: V
  }), R && /* @__PURE__ */ f.createElement("i", {
    className: "search-button fas fa-search",
    title: "Поиск по столбцу",
    onClick: function() {
      return F(!0);
    }
  }), S && u && /* @__PURE__ */ f.createElement("i", {
    className: "show-column-button fas fa-eye",
    title: "Скрыть столбец",
    onClick: l(!1)
  }), E && u && /* @__PURE__ */ f.createElement("i", {
    className: "order-column-button fas fa-exchange-alt",
    title: "Порядок столбцов",
    onClick: z,
    ref: B
  }), D && /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("i", {
    className: "format-button fas fa-paragraph",
    title: "Форматирование столбца",
    onClick: function() {
      return ie(!0);
    }
  }), /* @__PURE__ */ f.createElement("div", {
    ref: $
  })))));
}, wz = function(t) {
  var r = t.connector, n = t.cell, a = t.utils, i = t.setShowFilter, o = r.header, s = r.sortCell, l = r.onChangeComponentState.onChangeFilterOrSort, u = l === void 0 ? function() {
  } : l, c = En(""), d = ve(c, 3), h = d[0], p = d[1], v = d[2], m = function(w) {
    v(w), a.refreshColumnsTree({
      data: w,
      cell: n,
      connectorIndex: "searchContext",
      isObject: !1
    });
  }, g = function() {
    p.current ? n._.searchContext = p.current : delete n._.searchContext;
    var w = a.storeGetPage({
      pageNum: 0
    });
    if (!w) {
      u({
        header: o,
        searchContext: r.searchContext,
        sortCell: s
      });
      return;
    }
    console.log("################### GET PAGE FROM STORE", 0), a.refreshBodyWithNewRows({
      newRows: w,
      newPageNum: 0,
      openAllLevels: !0
    });
  }, b = function() {
    m(null), g(), i(!1);
  };
  return /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("input", {
    className: "search-input",
    type: "text",
    value: h,
    onChange: function(w) {
      return m(w.target.value);
    },
    autoFocus: !0
  }), h && /* @__PURE__ */ f.createElement("i", {
    className: "search-button fas fa-filter",
    title: "Показать только найденные",
    onClick: g
  }), /* @__PURE__ */ f.createElement("i", {
    className: "cancel-search-button fas fa-times",
    title: "Отменить поиск",
    onClick: b
  }));
}, Sz = function(t) {
  var r = t.cell, n = t.setShowFormatter, a = t.utils, i = f.useState(!0), o = ve(i, 2), s = o[0], l = o[1], u = f.useState(0), c = ve(u, 2), d = c[0], h = c[1], p = function() {
    l(!1), h(fe.random16());
  }, v = f.useRef(r._.format || {}), m = v.current, g = m.align, b = g === void 0 ? "center" : g, y = m.color, w = y === void 0 ? "#000" : y, S = m.background, _ = S === void 0 ? "#fff" : S, E = m.wrap, C = E === void 0 ? !1 : E, D = f.useState(w), O = ve(D, 2), R = O[0], P = O[1], A = function(Ve) {
    P(Ve);
  }, B = f.useState(_), $ = ve(B, 2), K = $[0], L = $[1], I = f.useRef(null), F = function(Ve) {
    v.current.align = Ve, p();
  }, de = function() {
    return F("left");
  }, T = function() {
    return F("center");
  }, M = function() {
    return F("right");
  }, ie = function() {
    v.current.wrap = !C, p();
  }, z = function() {
    return n(!1);
  }, V = function(Ve) {
    l(!0), a.refreshColumnsTree({
      data: Ve,
      cell: r,
      connectorIndex: "format",
      isObject: !0
    }), n(!1), a.saveTableSettingsToLocaleStorage();
  }, oe = function() {
    r._.format = U({}, v.current), V(r._.format);
  }, X = function() {
    delete r._.format, v.current = {}, V(null);
  }, Z = function(Ve, lr, It) {
    var ht = function() {
    }, bt = function() {
      return ht();
    }, er = Zu({
      initiator: I.current,
      id: "",
      minWidth: 0,
      minHeight: 0,
      onOutsideClick: bt,
      notResize: !0,
      autoSize: !0,
      children: /* @__PURE__ */ f.createElement(Py, {
        pickerType: "sketch",
        color: Ve,
        onChange: function(tr) {
          lr(tr), v.current[It] = tr, p();
        }
      })
    }), rt = er.removeComponent;
    ht = rt;
  }, se = function() {
    return Z(R, A, "color");
  }, Q = function() {
    return Z(K, L, "background");
  }, re = {
    _class: "align-left",
    title: "влево",
    onClick: de,
    checked: b === "left",
    color: "#000",
    r: 0
  }, De = {
    _class: "align-center",
    title: "по центру",
    onClick: T,
    checked: b === "center",
    color: "#000",
    r: 0
  }, Y = {
    _class: "align-right",
    title: "вправо",
    onClick: M,
    checked: b === "right",
    color: "#000",
    r: 5
  }, He = {
    _class: "pencil-alt",
    title: "цвет текста",
    onClick: se,
    checked: !!v.current.color,
    color: "#000",
    r: 0
  }, kt = {
    _class: "paint-roller",
    title: "цвет фона",
    onClick: Q,
    checked: !!v.current.background,
    color: "#000",
    r: 5
  }, ft = {
    _class: "align-justify",
    title: "перенос по строкам",
    onClick: ie,
    checked: C,
    color: "#000",
    r: 10
  }, jt = {
    _class: "check",
    title: "применить",
    onClick: oe,
    checked: s,
    r: 0
  }, Mt = {
    _class: "trash",
    title: "очистить",
    onClick: X,
    checked: !1,
    r: 0
  }, At = {
    _class: "times",
    title: "закрыть панель",
    onClick: z,
    checked: !1,
    r: 5
  }, Ot = [re, De, Y, He, kt, ft, jt, Mt, At];
  return He.color = w, He.background = _, kt.color = _, kt.background = w, /* @__PURE__ */ f.createElement(f.Fragment, null, Ot.map(function(Le) {
    return /* @__PURE__ */ f.createElement(xz, le({}, Le, {
      _: d
    }));
  }), /* @__PURE__ */ f.createElement("div", {
    ref: I
  }));
}, xz = function(t) {
  var r = t._class, n = t.onClick, a = t.checked, i = t.title, o = t.color, s = t.background, l = t.r, u = {
    "margin-right": "".concat(l, "px")
  };
  return o && (u.color = o, u.background = s), /* @__PURE__ */ f.createElement("i", {
    className: "format-icon fas fa-".concat(r).concat(a ? " checked" : ""),
    onClick: n || function() {
    },
    title: i,
    style: u
  });
}, Ez = function(t) {
  var r = t.utils, n = t.connector, a = n.refresh.row, i = n.showRows, o = function() {
    var h = [];
    for (var p in i) {
      var v = i[p], m = v.show, g = v.level;
      h[g] = h[g] || {}, m ? h[g].show = !0 : h[g].hide = !0;
    }
    return h;
  }, s = function() {
    return r.setShowToAllRows(!0);
  }, l = function() {
    return r.setShowToAllRows(!1);
  }, u = function() {
    var h = o();
    for (var p in h) {
      var v = h[p];
      if (v.hide) {
        for (var m in i) {
          var g = i[m];
          g.level === Number(p) - 1 && !g.showChildren && (g.showChildren = !0, a[m]()), g.level === Number(p) && !g.show && (g.show = !0, a[m]());
        }
        return;
      }
    }
  }, c = function() {
    for (var h = o(), p = h.length - 1; p > 0; p--) {
      var v = h[p];
      if (v.show) {
        for (var m in i) {
          var g = i[m];
          g.level === Number(p) - 1 && g.showChildren && (g.showChildren = !1, a[m]()), g.level === Number(p) && g.show && (g.show = !1, a[m]());
        }
        return;
      }
    }
  };
  return /* @__PURE__ */ f.createElement("div", {
    className: "rows-tree-menu"
  }, /* @__PURE__ */ f.createElement("div", {
    className: "rtm-open rtm-all rtm-open-all",
    title: "Развернуть всё",
    onClick: s
  }, "+"), /* @__PURE__ */ f.createElement("div", {
    className: "rtm-open rtm-open-one",
    title: "Развернуть один уровень",
    onClick: u
  }, "+"), /* @__PURE__ */ f.createElement("div", {
    className: "rtm-close rtm-close-one",
    title: "Свернуть один уровень",
    onClick: c
  }, "-"), /* @__PURE__ */ f.createElement("div", {
    className: "rtm-close rtm-all rtm-close-all",
    title: "Свернуть всё",
    onClick: l
  }, "-"));
}, Cz = function(t) {
  var r = t.utils, n = t.connector, a = n.rows, i = f.useRef(null), o = f.useRef(null), s = f.useRef(null), l = f.useState(0), u = ve(l, 2), c = u[0], d = u[1], h = function() {
    o.current.scrollTop = 0, d(fe.random16());
  }, p = function() {
    o.current.scrollTop = 0, d(null), setTimeout(function() {
      d(fe.random16());
    }, 1e3);
  };
  f.useEffect(function() {
    return n.refs.unitableBody = i.current, n.refs.unitableBodyInner = o.current, n.refs.unitableRowsWrapper = s.current, n.refresh.body = h, n.refresh.bodyHard = p, window.addEventListener("resize", m), r.recalcHeaderRootsPadding(), function() {
      window.removeEventListener("resize", m);
    };
  }, []);
  var v = function(y) {
    if (!(!n.refs.scrollbarVertical || n.editableCell)) {
      var w = o.current.scrollTop + (y.deltaY > 0 ? 20 : -20);
      o.current.scrollTop = w, n.refs.scrollbarVertical.scrollTop = w;
    }
  }, m = function(y) {
    n.refresh.scrollbarHorizontal(), n.refresh.scrollbarVertical(), r.recalcHeaderRootsPadding();
  }, g = r.getSliding();
  return c === null ? null : /* @__PURE__ */ f.createElement("div", {
    className: "unitable-body",
    style: {
      maxHeight: r.getBodyHeight()
    },
    onWheel: v,
    ref: i,
    onMouseLeave: function() {
      return r.setHoveredCell(null, null);
    }
  }, /* @__PURE__ */ f.createElement("div", {
    className: "unitable-body-inner",
    ref: o
  }, /* @__PURE__ */ f.createElement("div", {
    className: "unitable-rows-wrapper",
    ref: s
  }, a.map(function(b, y) {
    return /* @__PURE__ */ f.createElement(Tz, le({
      key: "row-".concat(y)
    }, t, {
      row: b,
      rowIndex: y,
      sliding: g
    }));
  }), /* @__PURE__ */ f.createElement("div", {
    style: {
      height: "20px",
      minHeight: "20px"
    }
  }))), /* @__PURE__ */ f.createElement("div", {
    className: "unitable-line bottom"
  }), /* @__PURE__ */ f.createElement("div", {
    className: "unitable-line right"
  }), /* @__PURE__ */ f.createElement("div", {
    className: "unitable-line left"
  }), /* @__PURE__ */ f.createElement(Dz, t), /* @__PURE__ */ f.createElement(Oz, t));
}, Dz = function(t) {
  var r = t.utils, n = t.connector, a = n.sizes, i = n.refs.rightParts, o = n.tableHas, s = f.useState(0), l = ve(s, 2);
  l[0];
  var u = l[1], c = function() {
    return u(fe.random16());
  }, d = f.useRef(null);
  f.useEffect(function() {
    n.refresh.scrollbarHorizontal = c, n.refs.scrollbarWrapperRef = d, setTimeout(c, 0);
  }, []);
  var h = function(w) {
    var S = d.current.scrollLeft, _ = ye(i), E;
    try {
      for (_.s(); !(E = _.n()).done; ) {
        var C = E.value;
        C.scrollLeft = S;
      }
    } catch (D) {
      _.e(D);
    } finally {
      _.f();
    }
    r.recalcHeaderRootsPadding();
  }, p = n.refs.headerRight, v = p ? p.scrollWidth > p.clientWidth : !1;
  if (v !== o.scrollbarHorizontal && (o.scrollbarHorizontal = v, setTimeout(function() {
    n.refresh.scrollbarVertical();
  }, 0)), !v) return null;
  var m = r.getLeftPartRowWidth(), g = r.getRightPartRowWidth(), b = p.clientWidth;
  return /* @__PURE__ */ f.createElement("div", {
    className: "unitable-scrollbar-horizontal",
    style: r.getHeightStyle(a.scrollbar)
  }, /* @__PURE__ */ f.createElement("div", {
    className: "ush-left",
    style: r.getWidthStyle(m)
  }), /* @__PURE__ */ f.createElement("div", {
    className: "ush-body-wrapper",
    style: r.getWidthStyle(b),
    ref: d,
    onScroll: h
  }, /* @__PURE__ */ f.createElement("div", {
    className: "ush-body-inner",
    style: r.getWidthStyle(g)
  })));
}, Oz = function(t) {
  var r = t.utils, n = t.connector, a = n.sizes, i = n.tableHas, o = n.showRows, s = f.useRef(null), l = f.useState(0), u = ve(l, 2);
  u[0];
  var c = u[1], d = function() {
    return c(fe.random16());
  };
  if (f.useEffect(function() {
    n.refresh.scrollbarVertical = d, setTimeout(d, 0);
  }, []), !n.refs.unitableBodyInner) return null;
  var h = 0, p = ye(o), v;
  try {
    for (p.s(); !(v = p.n()).done; ) {
      var m = v.value;
      m.show && h++;
    }
  } catch (S) {
    p.e(S);
  } finally {
    p.f();
  }
  var g = n.refs.unitableBodyInner.getBoundingClientRect().height, b = h * a.rowsHeight + 20, y = g < b;
  if (y !== i.scrollbarVertical && (i.scrollbarVertical = y), !y)
    return n.refs.scrollbarVertical = null, null;
  n.refs.scrollbarVertical || setTimeout(function() {
    n.refs.scrollbarVertical = s.current;
  }, 0);
  var w = function(_) {
    var E = s.current.scrollTop;
    n.refs.unitableBodyInner.scrollTop = E;
  };
  return /* @__PURE__ */ f.createElement("div", {
    className: "unitable-scrollbar-vertical",
    style: r.getWidthStyle(a.scrollbar)
  }, /* @__PURE__ */ f.createElement("div", {
    className: "usv-top",
    style: r.getHeightStyle(a.headerHeight)
  }), /* @__PURE__ */ f.createElement("div", {
    className: "usv-body-wrapper",
    ref: s,
    style: r.getHeightStyle(g),
    onScroll: w
  }, /* @__PURE__ */ f.createElement("div", {
    className: "usv-body-inner",
    style: r.getHeightStyle(b)
  })));
}, Tz = function(t) {
  var r = t.utils, n = t.connector, a = t.row, i = t.rowIndex, o = t.sliding, s = n.numberFixedLeftColumnsEnds, l = n.sizes.rowsHeight, u = n.refs.rightParts, c = n.orderEnds, d = n.options, h = d === void 0 ? {} : d, p = n.showRows, v = n.tableHas.rowsTree, m = n.data.rowsByOrdinalIndex, g = h.background, b = g.evenRows, y = b === void 0 ? !1 : b, w = g.oddRows, S = w === void 0 ? !1 : w, _ = h.resize, E = _ === void 0 ? !1 : _, C = p[i], D = f.useRef(null), O = f.useRef(null), R = f.useRef(null), P = f.useState(0), A = ve(P, 2);
  A[0];
  var B = A[1], $ = function() {
    return B(fe.random16());
  };
  f.useEffect(function() {
    u.push(D.current), n.refresh.row[i] = $;
  }, []);
  var K = function(Q) {
    return Q % 2 === 0;
  }, L = function() {
    document.onmouseup = null, document.onmousemove = null;
    var Q = ye(n.refresh.row), re;
    try {
      for (Q.s(); !(re = Q.n()).done; ) {
        var De = re.value;
        De();
      }
    } catch (Y) {
      Q.e(Y);
    } finally {
      Q.f();
    }
    n.refresh.scrollbarVertical(), r.saveTableSettingsToLocaleStorage();
  }, I = function(Q) {
    var re = R.current, De = re.cursorY, Y = re.wrapperHeight, He = Math.max(20, Y + (Q.clientY - De));
    n.sizes.rowsHeight = He, $();
  }, F = function(Q) {
    R.current = {
      cursorY: Q.clientY,
      wrapperHeight: O.current.getBoundingClientRect().height
    }, document.onmouseup = L, document.onmousemove = I;
  }, de = r.splitRowByLeftAndRight(c, s), T = ve(de, 2), M = T[0], ie = T[1], z = {}, V = null, oe = C.show;
  oe ? (z = r.getHeightStyle(l), V = K(C.mainRootIndex) ? y : S, V && (z.background = V)) : z.display = "none";
  var X = {
    rowTreeData: C,
    tableHasRowsTree: v,
    rowIndex: i
  };
  C.isNotFind && (X.isNotFind = !0);
  var Z = !o[i];
  return Z && setTimeout(function() {
    o[i] = !0, $();
  }, 0), /* @__PURE__ */ f.createElement("div", {
    className: "unitable-row",
    style: U(U({}, z), m[i].css || {}),
    ref: O
  }, oe && !Z && /* @__PURE__ */ f.createElement("div", {
    className: "unitable-row-left"
  }, M.map(function(se) {
    var Q = a[se], re = "cell-".concat(i, "-").concat(se);
    return /* @__PURE__ */ f.createElement(r0, le({
      key: re
    }, t, {
      cell: Q,
      cellIndex: se
    }, X));
  })), /* @__PURE__ */ f.createElement("div", {
    className: "unitable-row-right",
    style: {
      width: "(100% - ".concat(r.getLeftPartRowWidth(), "px")
    },
    ref: D
  }, oe && !Z && /* @__PURE__ */ f.createElement(f.Fragment, null, ie.map(function(se) {
    var Q = a[se], re = "cell-".concat(i, "-").concat(se);
    return /* @__PURE__ */ f.createElement(r0, le({
      key: re
    }, t, {
      cell: Q,
      cellIndex: se
    }, X));
  }))), oe && !Z && E.rowsHeight && /* @__PURE__ */ f.createElement("div", {
    className: "unitable-line bottom row-resize",
    onMouseDown: F
  }));
}, r0 = function(t) {
  var r, n, a, i, o, s, l, u = t.utils, c = t.connector, d = t.cell, h = t.rowIndex, p = t.cellIndex, v = t.rowTreeData, m = t.tableHasRowsTree, g = t.isNotFind, b = d.value, y = d.view, w = y === void 0 ? null : y, S = c.sizes.columnsWidth, _ = c.options, E = _ === void 0 ? {} : _, C = c.commonForBody, D = C === void 0 ? {} : C, O = D.view, R = O === void 0 ? null : O, P = D.css, A = P === void 0 ? {} : P, B = D.customizer, $ = B === void 0 ? [] : B, K = E.other || {}, L = K.showHints, I = L === void 0 ? !1 : L, F = K.highlightHovered, de = F === void 0 ? !1 : F, T = E.background || {}, M = T.hovered, ie = M === void 0 ? !1 : M, z = ((r = c.data.headerRootByEndIndex[p]) === null || r === void 0 ? void 0 : r.cell) || {}, V = ((n = z._) === null || n === void 0 ? void 0 : n.css) || {}, oe = (a = z._) === null || a === void 0 ? void 0 : a.customizer, X = (oe != null && oe.length ? oe : null) || ($ != null && $.length ? $ : null), Z = (i = z._) === null || i === void 0 ? void 0 : i.view, se = w || Z || R, Q = En(!1), re = ve(Q, 3), De = re[0], Y = re[1], He = re[2], kt = f.useState(0), ft = ve(kt, 2);
  ft[0];
  var jt = ft[1], Mt = function() {
    return jt(fe.random16());
  };
  f.useEffect(function() {
    c.refresh.column[p] = c.refresh.column[p] || [], c.refresh.column[p].push(Mt), setTimeout(Mt, 0);
  }, []);
  var At = f.useRef(null), Ot = f.useRef(null), Le = f.useRef(null);
  if (f.useEffect(function() {
    if (de && Y.current && u.setHoveredCell(p, h), !(!I || !Y.current || !Ot.current)) {
      var ur = Ot.current.getBoundingClientRect(), Vt = ur.width;
      if (!(Vt <= S[p])) {
        var In = {};
        setTimeout(function() {
          if (Le.current && Le.current(), !!Y.current) {
            He(!1);
            var qe = function() {
              return Le.current();
            }, pe = Zu({
              initiator: At.current,
              extraClass: "table-hint",
              minWidth: S[p],
              minHeight: 10,
              maxWidth: 400,
              onOutsideClick: qe,
              notResize: !0,
              autoSize: !0,
              children: /* @__PURE__ */ f.createElement("div", {
                dangerouslySetInnerHTML: {
                  __html: b.replace(/, /g, "<br/>")
                }
              }),
              answer: In
            }), Me = pe.removeComponent;
            Le.current = Me, setTimeout(function() {
              var Re = In.randomClass, it = In.direction, yt = it.up, Kt = it.left, Ut = document.querySelector(".".concat(Re));
              Ut.classList.add(yt ? "up" : "down"), Ut.classList.add(Kt ? "left" : "right");
            }, 0);
          }
        }, 1e3);
      }
    }
  }, [De]), !c.showColumns[p]) return null;
  var Ve = function() {
    var Vt;
    (Vt = c.editableCell) !== null && Vt !== void 0 && Vt.cell || He(!0);
  }, lr = function() {
    var Vt;
    (Vt = c.editableCell) !== null && Vt !== void 0 && Vt.cell || (He(!1), Le.current && Le.current());
  }, It = function() {
    u.toggleShowRowTree(h);
  }, ht = u.getWidthStyle(S[p]), bt = !p && m, er = bt && v.isRoot, rt = u.getFormatByCellIndex(p) || {}, Rt = rt.align, tr = rt.color, Yt = rt.background, ln = rt.wrap;
  (Rt === "left" || Rt === "right") && (ht["text-align"] = Rt), tr && (ht.color = tr), Yt && (ht.background = Yt);
  var un = ln ? {
    "white-space": "normal"
  } : {};
  de && (((o = c.hovered) === null || o === void 0 ? void 0 : o.row) === h || ((s = c.hovered) === null || s === void 0 ? void 0 : s.column) === p) && (ht.background = ie);
  var Wt = u.getSearchContextByCellIndex(p), An = Wt && b && !se && !g ? fe.textWithSearchContext(String(b), Wt, !0) : {
    html: b
  }, Na = An.html, mi = An.find, bi = U(U({}, t), {}, {
    isTreeCell: bt,
    isTreeRoot: er,
    toggleShowRowTree: It,
    valueStyle: un,
    CellView: se,
    cellRef: At,
    html: Na,
    refreshCell: Mt
  }), ca = X != null && X.length ? u.getCustomizer({
    customizer: X,
    cell: d
  }) : {
    css: {},
    class: ""
  }, da = ca.css, Ma = ca.class, wr = "unitable-row-cell".concat(bt ? " is-tree-cell" : "").concat(g ? " is-not-find" : "").concat(mi ? " cell-with-search-context" : "");
  return Ma && (wr += " " + Ma), (l = d._) !== null && l !== void 0 && l.invalidValueFormat && (wr += " invalid-format"), /* @__PURE__ */ f.createElement("div", {
    className: wr,
    style: U(U(U(U({}, A), ht), V), da),
    ref: At,
    onMouseEnter: Ve,
    onMouseLeave: lr
  }, /* @__PURE__ */ f.createElement(n0, bi), De && /* @__PURE__ */ f.createElement("div", {
    className: "unitable-row-cell unitable-row-cell-test",
    ref: Ot
  }, /* @__PURE__ */ f.createElement(n0, bi)));
}, n0 = function(t) {
  var r, n, a, i = t.connector, o = t.utils, s = t.cellIndex, l = t.rowIndex, u = t.isTreeCell, c = t.isTreeRoot, d = t.rowTreeData, h = t.toggleShowRowTree, p = t.cell, v = t.valueStyle, m = t.CellView, g = t.cellRef, b = t.html, y = t.refreshCell, w = i.onChangeComponentState.onChangeCell, S = w === void 0 ? function() {
  } : w, _ = i.rowsTree, E = i.commonForBody, C = E === void 0 ? {} : E, D = p.isEditable, O = C.isEditable, R = O === void 0 ? !1 : O, P = ((r = i.data.headerRootByEndIndex[s]) === null || r === void 0 ? void 0 : r.cell) || {}, A = (n = P._) === null || n === void 0 ? void 0 : n.isEditable, B = D === void 0 ? A : D;
  B = B === void 0 ? R : B;
  var $ = f.useRef(null), K = En(p === ((a = i.editableCell) === null || a === void 0 ? void 0 : a.cell)), L = ve(K, 3), I = L[0], F = L[1], de = L[2], T = function() {
    $.current = p.value, de(!0);
  }, M = function() {
    F.current && (p.value !== $.current && S({
      cell: p,
      oldValue: $.current,
      newValue: p.value,
      rows: _
    }), de(!1), i.editableCell = null, y());
  }, ie = function() {
    u || !B || (o.setEditableCell({
      cell: p,
      stopEditor: M,
      cellRef: g.current
    }), T());
  }, z = (p == null ? void 0 : p._) || {};
  return p._ = U(U({}, z), {}, {
    cellIndex: s,
    rowIndex: l,
    isTreeCell: u,
    isTreeRoot: c,
    rowTreeData: d,
    wrapperRefCurrent: g,
    refreshCell: y,
    stopEditor: M
  }), /* @__PURE__ */ f.createElement(f.Fragment, null, u && /* @__PURE__ */ f.createElement("div", {
    className: "unitable-row-cell-tree",
    style: {
      width: "".concat(d.level * 30 + 20, "px")
    }
  }, c && /* @__PURE__ */ f.createElement("div", {
    className: "toggle-tree",
    onClick: h
  }, d.showChildren ? "-" : "+")), m ? /* @__PURE__ */ f.createElement("div", {
    className: "unitable-row-cell-value",
    style: v,
    onClick: u ? null : ie
  }, /* @__PURE__ */ f.createElement(m, p)) : /* @__PURE__ */ f.createElement("div", {
    className: "unitable-row-cell-value",
    style: v,
    dangerouslySetInnerHTML: {
      __html: b
    },
    onClick: u ? null : ie
  }), I && /* @__PURE__ */ f.createElement(Bz, le({}, t, {
    stopEditor: M
  })));
}, vo = {
  texts: {
    placeholder: "Введите имя...",
    addFileMessage: "Будет добавлен файл %s",
    removeFileMessage: "Файл будет удален.",
    positiveError: "Введите целое неотрицательное число",
    integerError: "Введите целое число",
    floatError: "Введите число"
  }
};
vo.range = function(e, t, r) {
  var n = Array.from(Array(t));
  return r = r === void 0 ? 1 : r, n.map(function(a, i) {
    var o = r;
    return typeof r == "function" && (o = r(i, e, t)), e + i * o;
  });
};
vo.renderCustomHeader = function(e) {
  var t = e.date, r = e.changeYear, n = e.changeMonth, a = e.decreaseMonth, i = e.increaseMonth, o = e.prevMonthButtonDisabled, s = e.nextMonthButtonDisabled, l = vo.range(1990, xe(/* @__PURE__ */ new Date()) + 1, 1), u = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      margin: 10,
      display: "flex",
      justifyContent: "center"
    }
  }, /* @__PURE__ */ React.createElement("button", {
    className: "date-arrow-style",
    onClick: a,
    disabled: o
  }, "<"), /* @__PURE__ */ React.createElement("select", {
    className: "date-select-style",
    value: xe(t),
    onChange: function(d) {
      var h = d.target.value;
      return r(h);
    }
  }, l.map(function(c) {
    return /* @__PURE__ */ React.createElement("option", {
      key: c,
      value: c
    }, c);
  })), /* @__PURE__ */ React.createElement("select", {
    className: "date-select-style",
    value: u[Ht(t)],
    onChange: function(d) {
      var h = d.target.value;
      return n(u.indexOf(h));
    }
  }, u.map(function(c) {
    return /* @__PURE__ */ React.createElement("option", {
      key: c,
      value: c
    }, c);
  })), /* @__PURE__ */ React.createElement("button", {
    className: "date-arrow-style",
    onClick: i,
    disabled: s
  }, ">"));
};
var kz = function(t) {
  var r, n = t.cell, a = n.fieldTypeId, i = n.value, o = f.useRef(null), s = f.useRef(null), l = f.useRef(i), u = function(g) {
    g.code == "Escape" && setTimeout(function() {
      n.value = l.current, setTimeout(function() {
        h();
      }, 0);
    }, 100);
  };
  f.useEffect(function() {
    return document.addEventListener("keydown", u), function() {
      document.removeEventListener("keydown", u);
    };
  }, []);
  var c = {
    TableCellEditorBool: Rz,
    TableCellEditorString: _s,
    TableCellEditorFloat: Pz,
    TableCellEditorInteger: Nz,
    TableCellEditorPositive: Mz,
    TableCellEditorDate: Az,
    TableCellEditorPeriod: Iz,
    TableCellEditorFile: $z,
    TableCellEditorFileMultiple: Lw,
    TableCellEditorSet: Fw,
    TableCellEditorSetMultiple: Hz
  }, d = c[(r = qa.fieldTypesById[a]) === null || r === void 0 ? void 0 : r.editor] || _s, h = function() {
    n._.invalidValueFormat && setTimeout(function() {
      ke.notify({
        isError: !0,
        text: n._.invalidValueFormat
      });
    }), n._.stopEditor();
  }, p = function(g) {
    s.current && (s.current.textContent = g);
  }, v = a ? " table-cell-editor-".concat(qa.fieldTypesById[a].type) : "";
  return /* @__PURE__ */ f.createElement("div", {
    ref: o,
    className: "table-cell-editor selected".concat(v)
  }, /* @__PURE__ */ f.createElement("div", {
    className: "table-cell-editor-hint",
    ref: s
  }), /* @__PURE__ */ f.createElement(d, le({}, t, {
    startValue: n.value,
    onCellBlur: h,
    setEditorHint: p
  })));
}, a0 = qa.booleanItems, Rz = function(t) {
  var r = t.cell, n = t.onCellBlur, a = f.useRef(null), i = function(s) {
    r.value = s.selectedValues[0], r.server_value = a0.find(function(l) {
      return l.name === s.selectedValues[0];
    }).serverValue, r._.refreshCell(), n();
  };
  return /* @__PURE__ */ f.createElement("div", {
    className: "tce-bool",
    ref: a
  }, r.value, /* @__PURE__ */ dS(/* @__PURE__ */ f.createElement(As, _t(_t(_t({
    initiator: r._.wrapperRefCurrent.current,
    autoSize: !0,
    id: "boolean",
    minWidth: "200",
    minHeight: "55",
    maxHeight: "55"
  }, "autoSize", !0), "notResize", !0), "onOutsideClick", function() {
  }), /* @__PURE__ */ f.createElement(_U, le({}, t, {
    label: "boolean",
    list: a0.map(function(o) {
      return o.name;
    }),
    onChange: i,
    selectedValue: r.value,
    hideSearchBar: !0,
    hideCountersBar: !0
  }))), document.body));
}, _s = function(t) {
  var r = t.cell, n = t.startValue, a = t.onCellBlur, i = t.validator, o = i === void 0 ? null : i, s = En(n), l = ve(s, 3);
  l[0];
  var u = l[1], c = l[2], d = En(""), h = ve(d, 3);
  h[0];
  var p = h[1], v = h[2], m = f.useRef(null), g = function(_) {
    var E = _.target.value;
    c(E), r.value = E;
  }, b = function(_) {
    _.code === "Enter" && y(), _.code === "Escape" && (c(n), r.value = n, setTimeout(function() {
      w(n), setTimeout(function() {
        y();
      }, 0);
    }, 0));
  };
  f.useEffect(function() {
    return document.addEventListener("keydown", b), function() {
      document.removeEventListener("keydown", b);
    };
  }, []);
  var y = function() {
    return a();
  }, w = function(_) {
    if (o) {
      var E = o(_), C = E.valid, D = E.msg, O = C ? "" : D;
      C ? delete r._.invalidValueFormat : r._.invalidValueFormat = D, O !== p.current && v(O);
    }
  };
  return w(u.current), /* @__PURE__ */ f.createElement("div", {
    className: "tce-string".concat(p.current ? " invalid" : ""),
    ref: m
  }, p.current && /* @__PURE__ */ f.createElement("div", {
    className: "tce-error"
  }, p.current), /* @__PURE__ */ f.createElement("input", {
    type: "text",
    value: u.current,
    placeholder: "...",
    onChange: g,
    autoFocus: !0,
    onBlur: y
  }));
}, Pz = function(t) {
  var r = vo.texts, n = fe.validators, a = function(o) {
    return n.float(o) ? {
      valid: !0
    } : {
      valid: !1,
      msg: r.floatError
    };
  };
  return /* @__PURE__ */ f.createElement(_s, le({}, t, {
    validator: a
  }));
}, Nz = function(t) {
  var r = vo.texts, n = fe.validators, a = function(o) {
    return n.int(o) ? {
      valid: !0
    } : {
      valid: !1,
      msg: r.integerError
    };
  };
  return /* @__PURE__ */ f.createElement(_s, le({}, t, {
    validator: a
  }));
}, Mz = function(t) {
  var r = vo.texts, n = fe.validators, a = function(o) {
    return n.positive(o) ? {
      valid: !0
    } : {
      valid: !1,
      msg: r.positiveError
    };
  };
  return /* @__PURE__ */ f.createElement(_s, le({}, t, {
    validator: a
  }));
}, Az = function(t) {
  var r = t.cell, n = function(i) {
    r.value = i, r._.refreshCell();
  };
  return /* @__PURE__ */ f.createElement(mz, {
    value: r.value,
    onChange: n,
    withTime: !0
  });
}, Iz = function(t) {
  var r = t.cell, n = function(i) {
    r.value = i, r._.refreshCell();
  };
  return /* @__PURE__ */ f.createElement(bz, {
    value: r.value,
    onChange: n
  });
}, Lw = function(t) {
  var r = t.cell, n = t.onCellBlur, a = t.isNotMultiple, i = a === void 0 ? !1 : a, o = function(l) {
    var u = l.newFilesData, c = l.value;
    r.value = c, r.__ = {
      newFilesData: u
    }, n();
  };
  return /* @__PURE__ */ f.createElement(_z, {
    value: r.value,
    onChange: o,
    isMultiple: !i
  });
}, $z = function(t) {
  return /* @__PURE__ */ f.createElement(Lw, le({}, t, {
    isNotMultiple: !0
  }));
}, Fw = function(t) {
  t.cell.value;
  var r = f.useRef(null);
  return f.useEffect(function() {
    Zu({
      portal: r.current,
      initiator: r.current,
      children: /* @__PURE__ */ f.createElement(Lz, t),
      notResize: !0,
      autoSize: !0,
      style: {
        background: "beige"
      }
    });
  }, []), /* @__PURE__ */ f.createElement("div", {
    className: "tce-set-popup",
    ref: r
  });
}, Lz = function(t) {
  var r = t.cell, n = t.isMultiSelect, a = n === void 0 ? !1 : n, i = t.setEditorHint, o = t.onCellBlur, s = r.value, l = r.set, u = l === void 0 ? ['нет параметра "set"'] : l, c = r.setValuePath, d = c === void 0 ? "" : c, h = function(_) {
    var E = {}, C = _.split(", "), D = ye(C), O;
    try {
      for (D.s(); !(O = D.n()).done; ) {
        var R = O.value;
        R && (E[R] = !0);
      }
    } catch (P) {
      D.e(P);
    } finally {
      D.f();
    }
    return E;
  }, p = function(_) {
    var E = [];
    for (var C in _) E.push(C);
    return E.join(", ");
  }, v = f.useState(h(s)), m = ve(v, 2), g = m[0], b = m[1], y = function(_) {
    w(_), a || o(), b(_);
  }, w = function(_) {
    r.value = p(_), r.__ = {
      selected: _
    };
  };
  return f.useEffect(function() {
    i(p(g));
  }, [g]), /* @__PURE__ */ f.createElement("div", {
    className: "tce-set-wrapper"
  }, /* @__PURE__ */ f.createElement("div", {
    className: "tce-set"
  }, /* @__PURE__ */ f.createElement("div", {
    className: "tce-set-inner"
  }, u.map(function(S, _) {
    return /* @__PURE__ */ f.createElement(Fz, {
      item: S,
      setValuePath: d,
      index: _,
      isMultiSelect: a,
      selected: g,
      setSelected: y
    });
  }))), a && /* @__PURE__ */ f.createElement("div", {
    className: "p-1 rct-set-menu"
  }, /* @__PURE__ */ f.createElement("button", {
    className: "tf_btn tf_btn-sm tf_btn-primary ok",
    onClick: o
  }, "OK")));
}, Fz = function(t) {
  var r = t.item, n = t.setValuePath, a = t.isMultiSelect, i = t.selected, o = t.setSelected, s = a ? "check" : "radio", l = a ? "checkbox" : "radio", u = typeof r == "string" ? r : fe.getValueByPath(r, n), c = function() {
    var h = a ? U({}, i) : {};
    h[u] ? delete h[u] : h[u] = r, setTimeout(function() {
      o(h);
    }, 0);
  };
  return /* @__PURE__ */ f.createElement("div", {
    className: "tce-set-item"
  }, /* @__PURE__ */ f.createElement("div", {
    className: "tce-set-item-checkbox tf_form-".concat(s)
  }, /* @__PURE__ */ f.createElement("input", {
    className: "tf_form-".concat(s, "-input"),
    name: "selectedGroup",
    type: l,
    checked: !!i[u],
    onChange: c
  })), /* @__PURE__ */ f.createElement("div", {
    className: "tce-set-item-value"
  }, u));
}, Hz = function(t) {
  return /* @__PURE__ */ f.createElement(Fw, le({}, t, {
    isMultiSelect: !0
  }));
}, Bz = function(t) {
  var r = t.connector, n = t.utils, a = t.cell, i = t.cellRef, o = t.stopEditor, s = r.editors, l = s === void 0 ? {} : s, u = l.cellEditor, c = u === void 0 ? "internal" : u, d = function() {
    o(), n.setEditableCell(null);
  }, h = typeof c == "function" ? c : c === "TableCellEditor" ? kz : jz;
  return a._.popupData = {}, /* @__PURE__ */ f.createElement(As, {
    initiator: i.current,
    notResize: !0,
    fitToParent: !0,
    onOutsideClick: d,
    style: {
      background: "transparent",
      overflow: "visible",
      boxShadow: "none"
    },
    extraClass: "unitable-row-cell-value-editor",
    answer: a._.popupData
  }, /* @__PURE__ */ f.createElement(h, {
    cell: a
  }));
}, jz = function(t) {
  var r = t.cell, n = f.useState(r.value), a = ve(n, 2), i = a[0], o = a[1], s = function(u) {
    var c = u.target.value;
    o(c), r.value = c, r._.refreshCell();
  };
  return /* @__PURE__ */ f.createElement("input", {
    className: "tf_form-control tf_form-control-xs unitable-row-cell-internal-editor",
    type: "text",
    value: i,
    onChange: s,
    autoFocus: !0
  });
}, Yz = function(t) {
  var r = t.utils, n = t.connector, a = n.sizes.paginatorHeight, i = n.tableHas, o = n.rowsRootNumber, s = n.params, l = n.options, u = n.onChangeComponentState, c = l.paginator.rowsByPage, d = c === void 0 ? [] : c, h = s.pageLength, p = s.totalLength, v = u.onClickToPaginator_ShowLength, m = v === void 0 ? function() {
  } : v, g = u.onClickToPaginator_RowsByPage, b = g === void 0 ? function() {
  } : g, y = u.onClickToPaginator_GoToPage, w = y === void 0 ? function() {
  } : y, S = s.pageNum, _ = f.useState(0), E = ve(_, 2), C = E[0], D = E[1], O = function() {
    return D(fe.random16());
  };
  if (f.useEffect(function() {
    n.refresh.paginator = O;
  }, []), !i.paginator) return null;
  var R = function() {
    var V = p % h;
    return Math.floor(p / h) + (V ? 1 : 0);
  }, P = function(V) {
    var oe = r.storeGetPage({
      pageNum: V
    });
    if (!oe) {
      w(V);
      return;
    }
    console.log("################### GET PAGE FROM STORE", V), r.refreshBodyWithNewRows({
      newRows: oe,
      newPageNum: V
    });
  }, A = function() {
    return P(0);
  }, B = function() {
    return P(S - 1);
  }, $ = function() {
    return P(S + 1);
  }, K = function() {
    return P(I - 1);
  }, L = function(V) {
    if (!r.storeRowsIsLoaded()) {
      b(V);
      return;
    }
    console.log("################### GET PAGE FROM STORE", 0), r.refreshBodyWithNewRows({
      newRows: r.storeGetPage({
        pageNum: 0,
        pageLength: V
      }),
      newPageLength: V,
      newPageNum: 0
    });
  }, I = p ? R() : void 0, F = "btn pager-control", de = S ? "" : " disabled", T = de, M = !I || S < I - 1 ? "" : " disabled", ie = I && S < I - 1 ? "" : " disabled";
  return /* @__PURE__ */ f.createElement("div", {
    className: "unitable-paginator",
    style: r.getHeightStyle(a)
  }, /* @__PURE__ */ f.createElement("div", {
    className: "slick-pager"
  }, /* @__PURE__ */ f.createElement("span", {
    className: "btn-group slick-pager-nav"
  }, /* @__PURE__ */ f.createElement("a", {
    className: F + de,
    onClick: de ? function() {
    } : A,
    title: "На первую страницу"
  }, /* @__PURE__ */ f.createElement("i", {
    className: "icon-step-backward"
  })), /* @__PURE__ */ f.createElement("a", {
    className: F + T,
    onClick: T ? function() {
    } : B,
    title: "На предыдущую страницу"
  }, /* @__PURE__ */ f.createElement("i", {
    className: "icon-backward"
  })), /* @__PURE__ */ f.createElement("a", {
    className: F + M,
    onClick: M ? function() {
    } : $,
    title: "На следующую страницу"
  }, /* @__PURE__ */ f.createElement("i", {
    className: "icon-forward"
  })), /* @__PURE__ */ f.createElement("a", {
    className: F + ie,
    onClick: ie ? function() {
    } : K,
    title: "На последнюю страницу"
  }, /* @__PURE__ */ f.createElement("i", {
    className: "icon-step-forward"
  }))), /* @__PURE__ */ f.createElement("div", {
    className: "slick-pager-status"
  }, "Страница ", S + 1, " из", /* @__PURE__ */ f.createElement(i0, {
    num: I,
    onClickToShowInPaginator: m
  }), /* @__PURE__ */ f.createElement("div", {
    className: "between"
  }), "(строк: ", o, " из", /* @__PURE__ */ f.createElement(i0, {
    num: p,
    onClickToShowInPaginator: m
  }), ")"), d.length && /* @__PURE__ */ f.createElement("span", {
    className: "slick-pager-settings"
  }, "Строк на странице:", /* @__PURE__ */ f.createElement("div", {
    className: "btn-group",
    "data-toggle": "buttons-radio"
  }, d.map(function(z, V) {
    return /* @__PURE__ */ f.createElement("div", {
      key: "pag-index-".concat(V),
      className: "btn".concat(z === h ? " active" : "", " ").concat(C),
      onClick: function() {
        return L(z);
      }
    }, z);
  })))));
}, i0 = function(t) {
  var r = t.num, n = t.onClickToShowInPaginator;
  return isNaN(r) ? /* @__PURE__ */ f.createElement("div", {
    className: "undefined-number text-primary",
    onClick: n
  }, "показать") : /* @__PURE__ */ f.createElement("div", {
    className: "num"
  }, r);
}, Wz = function(t) {
  var r = t.connector, n = f.useState(!1), a = ve(n, 2), i = a[0], o = a[1], s = f.useRef(null);
  f.useEffect(function() {
    r.refs.settings = s.current;
  }, []);
  var l = function() {
    return o(!i);
  };
  return /* @__PURE__ */ f.createElement("div", {
    className: "unitable-settings",
    ref: s
  }, /* @__PURE__ */ f.createElement("i", {
    className: "unitable-settings-icon fas fa-cog",
    title: "Настройки таблицы",
    onClick: l
  }), i && /* @__PURE__ */ f.createElement(As, {
    initiator: s.current,
    id: "unitable",
    maxHeight: "50%",
    onOutsideClick: l,
    notResize: !0,
    autoSize: !0
  }, /* @__PURE__ */ f.createElement(Vz, t)));
}, Vz = function(t) {
  var r = t.utils, n = t.connector, a = n.options.editableSettings;
  r.distributeShowColumnsToHeader();
  var i = !1;
  for (var o in a)
    if (a[o]) {
      i = !0;
      break;
    }
  return /* @__PURE__ */ f.createElement("div", {
    className: "unitable-settings-panel"
  }, /* @__PURE__ */ f.createElement(Uz, t), i && /* @__PURE__ */ f.createElement(zz, t));
}, Uz = function(t) {
  var r = t.utils, n = t.connector, a = n.header, i = n.orderTree, o = n.numberFixedLeftColumns, s = f.useState(0), l = ve(s, 2);
  l[0];
  var u = l[1], c = function() {
    return u(fe.random16);
  }, d = r.splitRowByLeftAndRight(i, o), h = ve(d, 2), p = h[0], v = h[1];
  return /* @__PURE__ */ f.createElement("div", {
    className: "usp-list"
  }, /* @__PURE__ */ f.createElement("div", {
    className: "usp-list-left"
  }, p.map(function(m) {
    var g = m.i, b = m.ch, y = a[g], w = "panel-list-".concat(y._.ordinalIndex);
    return /* @__PURE__ */ f.createElement(wf, le({
      key: w
    }, t, {
      cell: y,
      parent: null,
      parentCh: i,
      parentChildren: a,
      ch: b,
      isLeft: !0
    }));
  })), /* @__PURE__ */ f.createElement("div", {
    className: "usp-list-right"
  }, v.map(function(m) {
    var g = m.i, b = m.ch, y = a[g], w = "panel-list-".concat(y._.ordinalIndex);
    return /* @__PURE__ */ f.createElement(wf, le({
      key: w
    }, t, {
      cell: y,
      parent: null,
      parentCh: i,
      ch: b,
      parentChildren: a,
      isRight: !0,
      refresh: c
    }));
  })));
}, wf = function(t) {
  var r = t.utils, n = t.cell, a = t.ch, i = t.parentCh, o = t.parentChildren, s = t.level, l = s === void 0 ? 0 : s, u = t.isLeft, c = t.refresh, d = n.value, h = n.children, p = n._.isEnd, v = f.useState(!0), m = ve(v, 2), g = m[0], b = m[1], y = function() {
    return b(!g);
  }, w = function() {
    r.toggleCheckedCell(n), r.distributeHeaderToShowColumns(), r.refreshTableWidth(), r.saveTableSettingsToLocaleStorage(), c();
  }, S = U(U({}, t), {}, {
    value: d,
    collapsed: g,
    toggleCollapsed: y,
    isEnd: p,
    toggleShow: w,
    isLeft: u,
    parentCh: i,
    parentChildren: o
  });
  return /* @__PURE__ */ f.createElement("div", {
    className: "branch"
  }, /* @__PURE__ */ f.createElement(Gz, S), !p && /* @__PURE__ */ f.createElement("div", {
    className: "branch-children".concat(g ? " collapsed" : "")
  }, a.map(function(_) {
    var E = _.i, C = _.ch, D = h[E], O = "panel-list-".concat(D._.ordinalIndex);
    return /* @__PURE__ */ f.createElement(wf, le({
      key: O
    }, t, {
      parentChildren: h,
      cell: D,
      parent: n,
      parentCh: a,
      ch: C,
      level: l + 1
    }));
  })));
}, Gz = function(t) {
  var r = t.utils, n = t.connector, a = t.cell, i = t.parent, o = t.value, s = t.collapsed, l = t.toggleCollapsed, u = t.isEnd, c = t.toggleShow, d = t.isLeft, h = t.parentCh, p = t.parentChildren, v = t.refresh, m = a._.checked, g = f.useRef(null), b = f.useState(!1), y = ve(b, 2), w = y[0], S = y[1], _ = function() {
    var D = [], O = ye(h), R;
    try {
      for (O.s(); !(R = O.n()).done; ) {
        var P = R.value, A = P.i;
        D.push({
          index: A,
          value: p[A].value,
          isLeft: !!p[A]._.isLeft
        });
      }
    } catch (B) {
      O.e(B);
    } finally {
      O.f();
    }
    S({
      list: D
    });
  }, E = function(D) {
    var O = {}, R = ye(h), P;
    try {
      for (R.s(); !(P = R.n()).done; ) {
        var A = P.value;
        O[A.i] = A;
      }
    } catch ($) {
      R.e($);
    } finally {
      R.f();
    }
    for (var B in D) h[B] = O[D[B].index];
    r.orderTreeToOrderEnds(), n.refresh.headerAndBody(), r.saveTableSettingsToLocaleStorage(), v();
  };
  return /* @__PURE__ */ f.createElement("div", {
    className: "branch-label-wrapper ".concat(u ? "is-end" : "is-root").concat(m ? " is-show" : " is-hide"),
    ref: g
  }, /* @__PURE__ */ f.createElement("div", {
    className: "branch-collapsed"
  }, !u && /* @__PURE__ */ f.createElement("i", {
    className: "fas fa-chevron-".concat(s ? "up" : "down"),
    onClick: l
  })), /* @__PURE__ */ f.createElement("div", {
    className: "branch-show"
  }, /* @__PURE__ */ f.createElement("input", {
    type: "checkbox",
    checked: m,
    onChange: d ? function() {
    } : c
  })), /* @__PURE__ */ f.createElement("div", {
    className: "branch-label"
  }, o), /* @__PURE__ */ f.createElement("div", {
    className: "branch-order"
  }, !d && /* @__PURE__ */ f.createElement("i", {
    className: "fas fa-exchange-alt",
    onClick: _
  })), w && /* @__PURE__ */ f.createElement(As, {
    initiator: g.current,
    id: "unitable-order-panel",
    minWidth: "0",
    minHeight: "0",
    onOutsideClick: function() {
      return S(!1);
    },
    notResize: !0,
    autoSize: !0
  }, /* @__PURE__ */ f.createElement(nS, le({}, t, {
    list: w.list,
    root: i != null && i.value ? i.value : "ROOT",
    onChange: E
  }))));
}, zz = function(t) {
  for (var r = t.utils, n = t.connector, a = n.options.editableSettings, i = n.refresh, o = i.header, s = i.body, l = function() {
    var y = r.storeGetPage();
    y && (console.log("################### GET PAGE FROM STORE", 0), r.refreshBodyWithNewRows({
      newRows: y,
      newPageNum: 0,
      openAllLevels: !0
    }));
  }, u = [{
    blockName: "ЦВЕТ ФОНА"
  }, {
    alias: "bgrHeader",
    address: "background.header",
    type: "color",
    title: "шапки таблицы",
    refresh: o
  }, {
    alias: "bgrEvenRows",
    address: "background.evenRows",
    type: "color",
    title: "чётных строк",
    refresh: s
  }, {
    alias: "bgrOddRows",
    address: "background.oddRows",
    type: "color",
    title: "нечётных строк",
    refresh: s
  }, {
    alias: "bgrHover",
    address: "background.hovered",
    type: "color",
    title: "строка и столбец под курсором",
    refresh: s
  }, {
    blockName: "ИЗМЕНЯТЬ РАЗМЕРЫ"
  }, {
    alias: "resizeHeaderHeight",
    address: "resize.headerHeight",
    type: "bool",
    title: "высота шапки таблицы",
    refresh: o
  }, {
    alias: "resizeRowsHeight",
    address: "resize.rowsHeight",
    type: "bool",
    title: "высота строк",
    refresh: s
  }, {
    alias: "resizeColumnsWidth",
    address: "resize.columnsWidth",
    type: "bool",
    title: "ширина столбцов",
    refresh: o
  }, {
    blockName: "СОСТАВ МЕНЮ ЯЧЕЕК ШАПКИ"
  }, {
    alias: "colHasHideIcon",
    address: "columnsMenu.hasHideIcon",
    type: "bool",
    title: "скрытие столбцов",
    refresh: o
  }, {
    alias: "colHasOrderIcon",
    address: "columnsMenu.hasOrderIcon",
    type: "bool",
    title: "смена порядка столбцов",
    refresh: o
  }, {
    alias: "colHasFormatIcon",
    address: "columnsMenu.hasFormatIcon",
    type: "bool",
    title: "форматирование столбцов",
    refresh: o
  }, {
    alias: "colHasSearchIcon",
    address: "columnsMenu.hasSearchIcon",
    type: "bool",
    title: "поиск по столбцам",
    refresh: o
  }, {
    alias: "colHasSortIcon",
    address: "columnsMenu.hasSortIcon",
    type: "bool",
    title: "сортировка по столбцам",
    refresh: o
  }, {
    blockName: "РАЗНОЕ"
  }, {
    alias: "showHints",
    address: "other.showHints",
    type: "bool",
    title: "подсказка для переполненых ячеек",
    refresh: s
  }, {
    alias: "searchLogicAND",
    address: "other.searchLogicAND",
    type: "bool",
    title: 'логическое "И" поиска',
    refresh: l
  }, {
    alias: "isHovered",
    address: "other.highlightHovered",
    type: "bool",
    title: "выделать строку и столбец под курсором",
    refresh: s
  }], c = function(y) {
    return r.getValueByAddress("options.".concat(y));
  }, d = function(y, w) {
    return r.setValueByAddress("options.".concat(y), w);
  }, h, p = !1, v = 0, m = u; v < m.length; v++) {
    var g = m[v];
    g.blockName ? (h && (h.show = p, p = !1), h = g) : a[g.alias] && (p = !0);
  }
  return h.show = p, /* @__PURE__ */ f.createElement("div", {
    className: "usp-parameters"
  }, u.map(function(b, y) {
    var w = "par-".concat(y);
    return b.blockName ? /* @__PURE__ */ f.createElement("div", {
      key: w,
      className: "usp-param-block-name".concat(b.show ? "" : " is-hide")
    }, b.blockName) : /* @__PURE__ */ f.createElement(qz, le({
      key: w
    }, t, {
      item: b,
      getOptionValue: c,
      setOptionValue: d
    }));
  }));
}, qz = function(t) {
  var r = t.connector, n = t.item, a = r.options.editableSettings, i = n.alias, o = n.type, s = n.title;
  return n.isDisable = !a[i], /* @__PURE__ */ f.createElement("div", {
    className: "usp-param-item".concat(n.isDisable ? " is-disable" : "")
  }, o === "bool" && /* @__PURE__ */ f.createElement(Kz, t), o === "color" && /* @__PURE__ */ f.createElement(Xz, t), s);
}, Kz = function(t) {
  var r = t.utils, n = t.item, a = t.getOptionValue, i = t.setOptionValue, o = t.key, s = n.address, l = n.isDisable, u = n.refresh, c = f.useState(a(s)), d = ve(c, 2), h = d[0], p = d[1], v = function() {
    p(!h), i(s, !h), u && u(), r.saveTableSettingsToLocaleStorage();
  };
  return /* @__PURE__ */ f.createElement("input", {
    key: o,
    type: "checkbox",
    checked: h,
    onChange: l ? function() {
    } : v
  });
}, Xz = function(t) {
  var r = t.utils, n = t.item, a = t.getOptionValue, i = t.setOptionValue, o = n.address, s = n.isDisable, l = n.refresh, u = f.useState(a(o) || "#fff"), c = ve(u, 2), d = c[0], h = c[1], p = f.useState(!1), v = ve(p, 2), m = v[0], g = v[1];
  return /* @__PURE__ */ f.createElement("div", {
    className: "usp-param-item-color",
    style: {
      background: d
    },
    onClick: s ? null : function() {
      return g(!0);
    }
  }, /* @__PURE__ */ f.createElement("div", {
    className: "color-picker-wrapper"
  }, m && /* @__PURE__ */ f.createElement(Py, {
    pickerType: "sketch",
    color: d,
    onChange: function(y) {
      h(y), i(o, y), l && l(), r.saveTableSettingsToLocaleStorage();
    },
    onClickOutside: function() {
      return g(!1);
    }
  })));
};
const Hw = sS({
  dragDropManager: void 0
});
function xr(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var o0 = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), pd = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, s0 = {
  INIT: "@@redux/INIT" + pd(),
  REPLACE: "@@redux/REPLACE" + pd(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + pd();
  }
};
function Qz(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Jz(e) {
  if (e === void 0) return "undefined";
  if (e === null) return "null";
  var t = typeof e;
  switch (t) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return t;
  }
  if (Array.isArray(e)) return "array";
  if (t7(e)) return "date";
  if (e7(e)) return "error";
  var r = Zz(e);
  switch (r) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return r;
  }
  return t.slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function Zz(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function e7(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function t7(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function Si(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Jz(e)), t;
}
function Bw(e, t, r) {
  var n;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? xr(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? xr(1) : "Expected the enhancer to be a function. Instead, received: '" + Si(r) + "'");
    return r(Bw)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? xr(2) : "Expected the root reducer to be a function. Instead, received: '" + Si(e) + "'");
  var a = e, i = t, o = [], s = o, l = !1;
  function u() {
    s === o && (s = o.slice());
  }
  function c() {
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? xr(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function d(m) {
    if (typeof m != "function")
      throw new Error(process.env.NODE_ENV === "production" ? xr(4) : "Expected the listener to be a function. Instead, received: '" + Si(m) + "'");
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? xr(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var g = !0;
    return u(), s.push(m), function() {
      if (g) {
        if (l)
          throw new Error(process.env.NODE_ENV === "production" ? xr(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        g = !1, u();
        var y = s.indexOf(m);
        s.splice(y, 1), o = null;
      }
    };
  }
  function h(m) {
    if (!Qz(m))
      throw new Error(process.env.NODE_ENV === "production" ? xr(7) : "Actions must be plain objects. Instead, the actual type was: '" + Si(m) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof m.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? xr(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? xr(9) : "Reducers may not dispatch actions.");
    try {
      l = !0, i = a(i, m);
    } finally {
      l = !1;
    }
    for (var g = o = s, b = 0; b < g.length; b++) {
      var y = g[b];
      y();
    }
    return m;
  }
  function p(m) {
    if (typeof m != "function")
      throw new Error(process.env.NODE_ENV === "production" ? xr(10) : "Expected the nextReducer to be a function. Instead, received: '" + Si(m));
    a = m, h({
      type: s0.REPLACE
    });
  }
  function v() {
    var m, g = d;
    return m = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(y) {
        if (typeof y != "object" || y === null)
          throw new Error(process.env.NODE_ENV === "production" ? xr(11) : "Expected the observer to be an object. Instead, received: '" + Si(y) + "'");
        function w() {
          y.next && y.next(c());
        }
        w();
        var S = g(w);
        return {
          unsubscribe: S
        };
      }
    }, m[o0] = function() {
      return this;
    }, m;
  }
  return h({
    type: s0.INIT
  }), n = {
    dispatch: h,
    subscribe: d,
    getState: c,
    replaceReducer: p
  }, n[o0] = v, n;
}
function Ee(e, t, ...r) {
  if (r7() && t === void 0)
    throw new Error("invariant requires an error message argument");
  if (!e) {
    let n;
    if (t === void 0)
      n = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      let a = 0;
      n = new Error(t.replace(/%s/g, function() {
        return r[a++];
      })), n.name = "Invariant Violation";
    }
    throw n.framesToPop = 1, n;
  }
}
function r7() {
  return typeof process < "u" && process.env.NODE_ENV === "production";
}
function n7(e, t, r) {
  return t.split(".").reduce(
    (n, a) => n && n[a] ? n[a] : r || null,
    e
  );
}
function a7(e, t) {
  return e.filter(
    (r) => r !== t
  );
}
function jw(e) {
  return typeof e == "object";
}
function i7(e, t) {
  const r = /* @__PURE__ */ new Map(), n = (i) => {
    r.set(i, r.has(i) ? r.get(i) + 1 : 1);
  };
  e.forEach(n), t.forEach(n);
  const a = [];
  return r.forEach((i, o) => {
    i === 1 && a.push(o);
  }), a;
}
function o7(e, t) {
  return e.filter(
    (r) => t.indexOf(r) > -1
  );
}
const _p = "dnd-core/INIT_COORDS", xc = "dnd-core/BEGIN_DRAG", wp = "dnd-core/PUBLISH_DRAG_SOURCE", Ec = "dnd-core/HOVER", Cc = "dnd-core/DROP", Dc = "dnd-core/END_DRAG";
function l0(e, t) {
  return {
    type: _p,
    payload: {
      sourceClientOffset: t || null,
      clientOffset: e || null
    }
  };
}
const s7 = {
  type: _p,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function l7(e) {
  return function(r = [], n = {
    publishSource: !0
  }) {
    const { publishSource: a = !0, clientOffset: i, getSourceClientOffset: o } = n, s = e.getMonitor(), l = e.getRegistry();
    e.dispatch(l0(i)), u7(r, s, l);
    const u = f7(r, s);
    if (u == null) {
      e.dispatch(s7);
      return;
    }
    let c = null;
    if (i) {
      if (!o)
        throw new Error("getSourceClientOffset must be defined");
      c7(o), c = o(u);
    }
    e.dispatch(l0(i, c));
    const h = l.getSource(u).beginDrag(s, u);
    if (h == null)
      return;
    d7(h), l.pinSource(u);
    const p = l.getSourceType(u);
    return {
      type: xc,
      payload: {
        itemType: p,
        item: h,
        sourceId: u,
        clientOffset: i || null,
        sourceClientOffset: c || null,
        isSourcePublic: !!a
      }
    };
  };
}
function u7(e, t, r) {
  Ee(!t.isDragging(), "Cannot call beginDrag while dragging."), e.forEach(function(n) {
    Ee(r.getSource(n), "Expected sourceIds to be registered.");
  });
}
function c7(e) {
  Ee(typeof e == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function d7(e) {
  Ee(jw(e), "Item must be an object.");
}
function f7(e, t) {
  let r = null;
  for (let n = e.length - 1; n >= 0; n--)
    if (t.canDragSource(e[n])) {
      r = e[n];
      break;
    }
  return r;
}
function h7(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function p7(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    }))), n.forEach(function(a) {
      h7(e, a, r[a]);
    });
  }
  return e;
}
function v7(e) {
  return function(r = {}) {
    const n = e.getMonitor(), a = e.getRegistry();
    g7(n), y7(n).forEach((o, s) => {
      const l = m7(o, s, a, n), u = {
        type: Cc,
        payload: {
          dropResult: p7({}, r, l)
        }
      };
      e.dispatch(u);
    });
  };
}
function g7(e) {
  Ee(e.isDragging(), "Cannot call drop while not dragging."), Ee(!e.didDrop(), "Cannot call drop twice during one drag operation.");
}
function m7(e, t, r, n) {
  const a = r.getTarget(e);
  let i = a ? a.drop(n, e) : void 0;
  return b7(i), typeof i > "u" && (i = t === 0 ? {} : n.getDropResult()), i;
}
function b7(e) {
  Ee(typeof e > "u" || jw(e), "Drop result must either be an object or undefined.");
}
function y7(e) {
  const t = e.getTargetIds().filter(e.canDropOnTarget, e);
  return t.reverse(), t;
}
function _7(e) {
  return function() {
    const r = e.getMonitor(), n = e.getRegistry();
    w7(r);
    const a = r.getSourceId();
    return a != null && (n.getSource(a, !0).endDrag(r, a), n.unpinSource()), {
      type: Dc
    };
  };
}
function w7(e) {
  Ee(e.isDragging(), "Cannot call endDrag while not dragging.");
}
function Sf(e, t) {
  return t === null ? e === null : Array.isArray(e) ? e.some(
    (r) => r === t
  ) : e === t;
}
function S7(e) {
  return function(r, { clientOffset: n } = {}) {
    x7(r);
    const a = r.slice(0), i = e.getMonitor(), o = e.getRegistry(), s = i.getItemType();
    return C7(a, o, s), E7(a, i, o), D7(a, i, o), {
      type: Ec,
      payload: {
        targetIds: a,
        clientOffset: n || null
      }
    };
  };
}
function x7(e) {
  Ee(Array.isArray(e), "Expected targetIds to be an array.");
}
function E7(e, t, r) {
  Ee(t.isDragging(), "Cannot call hover while not dragging."), Ee(!t.didDrop(), "Cannot call hover after drop.");
  for (let n = 0; n < e.length; n++) {
    const a = e[n];
    Ee(e.lastIndexOf(a) === n, "Expected targetIds to be unique in the passed array.");
    const i = r.getTarget(a);
    Ee(i, "Expected targetIds to be registered.");
  }
}
function C7(e, t, r) {
  for (let n = e.length - 1; n >= 0; n--) {
    const a = e[n], i = t.getTargetType(a);
    Sf(i, r) || e.splice(n, 1);
  }
}
function D7(e, t, r) {
  e.forEach(function(n) {
    r.getTarget(n).hover(t, n);
  });
}
function O7(e) {
  return function() {
    if (e.getMonitor().isDragging())
      return {
        type: wp
      };
  };
}
function T7(e) {
  return {
    beginDrag: l7(e),
    publishDragSource: O7(e),
    hover: S7(e),
    drop: v7(e),
    endDrag: _7(e)
  };
}
class k7 {
  receiveBackend(t) {
    this.backend = t;
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
    const t = this, { dispatch: r } = this.store;
    function n(i) {
      return (...o) => {
        const s = i.apply(t, o);
        typeof s < "u" && r(s);
      };
    }
    const a = T7(this);
    return Object.keys(a).reduce((i, o) => {
      const s = a[o];
      return i[o] = n(s), i;
    }, {});
  }
  dispatch(t) {
    this.store.dispatch(t);
  }
  constructor(t, r) {
    this.isSetUp = !1, this.handleRefCountChange = () => {
      const n = this.store.getState().refCount > 0;
      this.backend && (n && !this.isSetUp ? (this.backend.setup(), this.isSetUp = !0) : !n && this.isSetUp && (this.backend.teardown(), this.isSetUp = !1));
    }, this.store = t, this.monitor = r, t.subscribe(this.handleRefCountChange);
  }
}
function R7(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
function Yw(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function P7(e) {
  const { clientOffset: t, initialClientOffset: r, initialSourceClientOffset: n } = e;
  return !t || !r || !n ? null : Yw(R7(t, n), r);
}
function N7(e) {
  const { clientOffset: t, initialClientOffset: r } = e;
  return !t || !r ? null : Yw(t, r);
}
const is = [], Sp = [];
is.__IS_NONE__ = !0;
Sp.__IS_ALL__ = !0;
function M7(e, t) {
  return e === is ? !1 : e === Sp || typeof t > "u" ? !0 : o7(t, e).length > 0;
}
class A7 {
  subscribeToStateChange(t, r = {}) {
    const { handlerIds: n } = r;
    Ee(typeof t == "function", "listener must be a function."), Ee(typeof n > "u" || Array.isArray(n), "handlerIds, when specified, must be an array of strings.");
    let a = this.store.getState().stateId;
    const i = () => {
      const o = this.store.getState(), s = o.stateId;
      try {
        s === a || s === a + 1 && !M7(o.dirtyHandlerIds, n) || t();
      } finally {
        a = s;
      }
    };
    return this.store.subscribe(i);
  }
  subscribeToOffsetChange(t) {
    Ee(typeof t == "function", "listener must be a function.");
    let r = this.store.getState().dragOffset;
    const n = () => {
      const a = this.store.getState().dragOffset;
      a !== r && (r = a, t());
    };
    return this.store.subscribe(n);
  }
  canDragSource(t) {
    if (!t)
      return !1;
    const r = this.registry.getSource(t);
    return Ee(r, `Expected to find a valid source. sourceId=${t}`), this.isDragging() ? !1 : r.canDrag(this, t);
  }
  canDropOnTarget(t) {
    if (!t)
      return !1;
    const r = this.registry.getTarget(t);
    if (Ee(r, `Expected to find a valid target. targetId=${t}`), !this.isDragging() || this.didDrop())
      return !1;
    const n = this.registry.getTargetType(t), a = this.getItemType();
    return Sf(n, a) && r.canDrop(this, t);
  }
  isDragging() {
    return !!this.getItemType();
  }
  isDraggingSource(t) {
    if (!t)
      return !1;
    const r = this.registry.getSource(t, !0);
    if (Ee(r, `Expected to find a valid source. sourceId=${t}`), !this.isDragging() || !this.isSourcePublic())
      return !1;
    const n = this.registry.getSourceType(t), a = this.getItemType();
    return n !== a ? !1 : r.isDragging(this, t);
  }
  isOverTarget(t, r = {
    shallow: !1
  }) {
    if (!t)
      return !1;
    const { shallow: n } = r;
    if (!this.isDragging())
      return !1;
    const a = this.registry.getTargetType(t), i = this.getItemType();
    if (i && !Sf(a, i))
      return !1;
    const o = this.getTargetIds();
    if (!o.length)
      return !1;
    const s = o.indexOf(t);
    return n ? s === o.length - 1 : s > -1;
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
    return !!this.store.getState().dragOperation.isSourcePublic;
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
    return P7(this.store.getState().dragOffset);
  }
  getDifferenceFromInitialOffset() {
    return N7(this.store.getState().dragOffset);
  }
  constructor(t, r) {
    this.store = t, this.registry = r;
  }
}
const u0 = typeof global < "u" ? global : self, Ww = u0.MutationObserver || u0.WebKitMutationObserver;
function Vw(e) {
  return function() {
    const r = setTimeout(a, 0), n = setInterval(a, 50);
    function a() {
      clearTimeout(r), clearInterval(n), e();
    }
  };
}
function I7(e) {
  let t = 1;
  const r = new Ww(e), n = document.createTextNode("");
  return r.observe(n, {
    characterData: !0
  }), function() {
    t = -t, n.data = t;
  };
}
const $7 = typeof Ww == "function" ? (
  // reliably everywhere they are implemented.
  // They are implemented in all modern browsers.
  //
  // - Android 4-4.3
  // - Chrome 26-34
  // - Firefox 14-29
  // - Internet Explorer 11
  // - iPad Safari 6-7.1
  // - iPhone Safari 7-7.1
  // - Safari 6-7
  I7
) : (
  // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
  // 11-12, and in web workers in many engines.
  // Although message channels yield to any queued rendering and IO tasks, they
  // would be better than imposing the 4ms delay of timers.
  // However, they do not work reliably in Internet Explorer or Safari.
  // Internet Explorer 10 is the only browser that has setImmediate but does
  // not have MutationObservers.
  // Although setImmediate yields to the browser's renderer, it would be
  // preferrable to falling back to setTimeout since it does not have
  // the minimum 4ms penalty.
  // Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
  // Desktop to a lesser extent) that renders both setImmediate and
  // MessageChannel useless for the purposes of ASAP.
  // https://github.com/kriskowal/q/issues/396
  // Timers are implemented universally.
  // We fall back to timers in workers in most engines, and in foreground
  // contexts in the following browsers.
  // However, note that even this simple case requires nuances to operate in a
  // broad spectrum of browsers.
  //
  // - Firefox 3-13
  // - Internet Explorer 6-9
  // - iPad Safari 4.3
  // - Lynx 2.8.7
  Vw
);
class L7 {
  // Use the fastest means possible to execute a task in its own turn, with
  // priority over other events including IO, animation, reflow, and redraw
  // events in browsers.
  //
  // An exception thrown by a task will permanently interrupt the processing of
  // subsequent tasks. The higher level `asap` function ensures that if an
  // exception is thrown by a task, that the task queue will continue flushing as
  // soon as possible, but if you use `rawAsap` directly, you are responsible to
  // either ensure that no exceptions are thrown from your task, or to manually
  // call `rawAsap.requestFlush` if an exception is thrown.
  enqueueTask(t) {
    const { queue: r, requestFlush: n } = this;
    r.length || (n(), this.flushing = !0), r[r.length] = t;
  }
  constructor() {
    this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = () => {
      const { queue: t } = this;
      for (; this.index < t.length; ) {
        const r = this.index;
        if (this.index++, t[r].call(), this.index > this.capacity) {
          for (let n = 0, a = t.length - this.index; n < a; n++)
            t[n] = t[n + this.index];
          t.length -= this.index, this.index = 0;
        }
      }
      t.length = 0, this.index = 0, this.flushing = !1;
    }, this.registerPendingError = (t) => {
      this.pendingErrors.push(t), this.requestErrorThrow();
    }, this.requestFlush = $7(this.flush), this.requestErrorThrow = Vw(() => {
      if (this.pendingErrors.length)
        throw this.pendingErrors.shift();
    });
  }
}
class F7 {
  call() {
    try {
      this.task && this.task();
    } catch (t) {
      this.onError(t);
    } finally {
      this.task = null, this.release(this);
    }
  }
  constructor(t, r) {
    this.onError = t, this.release = r, this.task = null;
  }
}
class H7 {
  create(t) {
    const r = this.freeTasks, n = r.length ? r.pop() : new F7(
      this.onError,
      (a) => r[r.length] = a
    );
    return n.task = t, n;
  }
  constructor(t) {
    this.onError = t, this.freeTasks = [];
  }
}
const Uw = new L7(), B7 = new H7(Uw.registerPendingError);
function j7(e) {
  Uw.enqueueTask(B7.create(e));
}
const xp = "dnd-core/ADD_SOURCE", Ep = "dnd-core/ADD_TARGET", Cp = "dnd-core/REMOVE_SOURCE", Oc = "dnd-core/REMOVE_TARGET";
function Y7(e) {
  return {
    type: xp,
    payload: {
      sourceId: e
    }
  };
}
function W7(e) {
  return {
    type: Ep,
    payload: {
      targetId: e
    }
  };
}
function V7(e) {
  return {
    type: Cp,
    payload: {
      sourceId: e
    }
  };
}
function U7(e) {
  return {
    type: Oc,
    payload: {
      targetId: e
    }
  };
}
function G7(e) {
  Ee(typeof e.canDrag == "function", "Expected canDrag to be a function."), Ee(typeof e.beginDrag == "function", "Expected beginDrag to be a function."), Ee(typeof e.endDrag == "function", "Expected endDrag to be a function.");
}
function z7(e) {
  Ee(typeof e.canDrop == "function", "Expected canDrop to be a function."), Ee(typeof e.hover == "function", "Expected hover to be a function."), Ee(typeof e.drop == "function", "Expected beginDrag to be a function.");
}
function xf(e, t) {
  if (t && Array.isArray(e)) {
    e.forEach(
      (r) => xf(r, !1)
    );
    return;
  }
  Ee(typeof e == "string" || typeof e == "symbol", t ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}
var Tr;
(function(e) {
  e.SOURCE = "SOURCE", e.TARGET = "TARGET";
})(Tr || (Tr = {}));
let q7 = 0;
function K7() {
  return q7++;
}
function X7(e) {
  const t = K7().toString();
  switch (e) {
    case Tr.SOURCE:
      return `S${t}`;
    case Tr.TARGET:
      return `T${t}`;
    default:
      throw new Error(`Unknown Handler Role: ${e}`);
  }
}
function c0(e) {
  switch (e[0]) {
    case "S":
      return Tr.SOURCE;
    case "T":
      return Tr.TARGET;
    default:
      throw new Error(`Cannot parse handler ID: ${e}`);
  }
}
function d0(e, t) {
  const r = e.entries();
  let n = !1;
  do {
    const { done: a, value: [, i] } = r.next();
    if (i === t)
      return !0;
    n = !!a;
  } while (!n);
  return !1;
}
class Q7 {
  addSource(t, r) {
    xf(t), G7(r);
    const n = this.addHandler(Tr.SOURCE, t, r);
    return this.store.dispatch(Y7(n)), n;
  }
  addTarget(t, r) {
    xf(t, !0), z7(r);
    const n = this.addHandler(Tr.TARGET, t, r);
    return this.store.dispatch(W7(n)), n;
  }
  containsHandler(t) {
    return d0(this.dragSources, t) || d0(this.dropTargets, t);
  }
  getSource(t, r = !1) {
    return Ee(this.isSourceId(t), "Expected a valid source ID."), r && t === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(t);
  }
  getTarget(t) {
    return Ee(this.isTargetId(t), "Expected a valid target ID."), this.dropTargets.get(t);
  }
  getSourceType(t) {
    return Ee(this.isSourceId(t), "Expected a valid source ID."), this.types.get(t);
  }
  getTargetType(t) {
    return Ee(this.isTargetId(t), "Expected a valid target ID."), this.types.get(t);
  }
  isSourceId(t) {
    return c0(t) === Tr.SOURCE;
  }
  isTargetId(t) {
    return c0(t) === Tr.TARGET;
  }
  removeSource(t) {
    Ee(this.getSource(t), "Expected an existing source."), this.store.dispatch(V7(t)), j7(() => {
      this.dragSources.delete(t), this.types.delete(t);
    });
  }
  removeTarget(t) {
    Ee(this.getTarget(t), "Expected an existing target."), this.store.dispatch(U7(t)), this.dropTargets.delete(t), this.types.delete(t);
  }
  pinSource(t) {
    const r = this.getSource(t);
    Ee(r, "Expected an existing source."), this.pinnedSourceId = t, this.pinnedSource = r;
  }
  unpinSource() {
    Ee(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
  }
  addHandler(t, r, n) {
    const a = X7(t);
    return this.types.set(a, r), t === Tr.SOURCE ? this.dragSources.set(a, n) : t === Tr.TARGET && this.dropTargets.set(a, n), a;
  }
  constructor(t) {
    this.types = /* @__PURE__ */ new Map(), this.dragSources = /* @__PURE__ */ new Map(), this.dropTargets = /* @__PURE__ */ new Map(), this.pinnedSourceId = null, this.pinnedSource = null, this.store = t;
  }
}
const J7 = (e, t) => e === t;
function Z7(e, t) {
  return !e && !t ? !0 : !e || !t ? !1 : e.x === t.x && e.y === t.y;
}
function eq(e, t, r = J7) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; ++n)
    if (!r(e[n], t[n]))
      return !1;
  return !0;
}
function tq(e = is, t) {
  switch (t.type) {
    case Ec:
      break;
    case xp:
    case Ep:
    case Oc:
    case Cp:
      return is;
    case xc:
    case wp:
    case Dc:
    case Cc:
    default:
      return Sp;
  }
  const { targetIds: r = [], prevTargetIds: n = [] } = t.payload, a = i7(r, n);
  if (!(a.length > 0 || !eq(r, n)))
    return is;
  const o = n[n.length - 1], s = r[r.length - 1];
  return o !== s && (o && a.push(o), s && a.push(s)), a;
}
function rq(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function nq(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    }))), n.forEach(function(a) {
      rq(e, a, r[a]);
    });
  }
  return e;
}
const f0 = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function aq(e = f0, t) {
  const { payload: r } = t;
  switch (t.type) {
    case _p:
    case xc:
      return {
        initialSourceClientOffset: r.sourceClientOffset,
        initialClientOffset: r.clientOffset,
        clientOffset: r.clientOffset
      };
    case Ec:
      return Z7(e.clientOffset, r.clientOffset) ? e : nq({}, e, {
        clientOffset: r.clientOffset
      });
    case Dc:
    case Cc:
      return f0;
    default:
      return e;
  }
}
function iq(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function xi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    }))), n.forEach(function(a) {
      iq(e, a, r[a]);
    });
  }
  return e;
}
const oq = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: !1,
  isSourcePublic: null
};
function sq(e = oq, t) {
  const { payload: r } = t;
  switch (t.type) {
    case xc:
      return xi({}, e, {
        itemType: r.itemType,
        item: r.item,
        sourceId: r.sourceId,
        isSourcePublic: r.isSourcePublic,
        dropResult: null,
        didDrop: !1
      });
    case wp:
      return xi({}, e, {
        isSourcePublic: !0
      });
    case Ec:
      return xi({}, e, {
        targetIds: r.targetIds
      });
    case Oc:
      return e.targetIds.indexOf(r.targetId) === -1 ? e : xi({}, e, {
        targetIds: a7(e.targetIds, r.targetId)
      });
    case Cc:
      return xi({}, e, {
        dropResult: r.dropResult,
        didDrop: !0,
        targetIds: []
      });
    case Dc:
      return xi({}, e, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null,
        targetIds: []
      });
    default:
      return e;
  }
}
function lq(e = 0, t) {
  switch (t.type) {
    case xp:
    case Ep:
      return e + 1;
    case Cp:
    case Oc:
      return e - 1;
    default:
      return e;
  }
}
function uq(e = 0) {
  return e + 1;
}
function cq(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function dq(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    }))), n.forEach(function(a) {
      cq(e, a, r[a]);
    });
  }
  return e;
}
function fq(e = {}, t) {
  return {
    dirtyHandlerIds: tq(e.dirtyHandlerIds, {
      type: t.type,
      payload: dq({}, t.payload, {
        prevTargetIds: n7(e, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: aq(e.dragOffset, t),
    refCount: lq(e.refCount, t),
    dragOperation: sq(e.dragOperation, t),
    stateId: uq(e.stateId)
  };
}
function hq(e, t = void 0, r = {}, n = !1) {
  const a = pq(n), i = new A7(a, new Q7(a)), o = new k7(a, i), s = e(o, t, r);
  return o.receiveBackend(s), o;
}
function pq(e) {
  const t = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return Bw(fq, e && t && t({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}
function vq(e, t) {
  if (e == null) return {};
  var r = gq(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function gq(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
let h0 = 0;
const Al = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");
var mq = /* @__PURE__ */ Il(function(t) {
  var { children: r } = t, n = vq(t, [
    "children"
  ]);
  const [a, i] = bq(n);
  return na(() => {
    if (i) {
      const o = Gw();
      return ++h0, () => {
        --h0 === 0 && (o[Al] = null);
      };
    }
  }, []), /* @__PURE__ */ N(Hw.Provider, {
    value: a,
    children: r
  });
});
function bq(e) {
  if ("manager" in e)
    return [
      {
        dragDropManager: e.manager
      },
      !1
    ];
  const t = yq(e.backend, e.context, e.options, e.debugMode), r = !e.context;
  return [
    t,
    r
  ];
}
function yq(e, t = Gw(), r, n) {
  const a = t;
  return a[Al] || (a[Al] = {
    dragDropManager: hq(e, t, r, n)
  }), a[Al];
}
function Gw() {
  return typeof global < "u" ? global : window;
}
var _q = function e(t, r) {
  if (t === r) return !0;
  if (t && r && typeof t == "object" && typeof r == "object") {
    if (t.constructor !== r.constructor) return !1;
    var n, a, i;
    if (Array.isArray(t)) {
      if (n = t.length, n != r.length) return !1;
      for (a = n; a-- !== 0; )
        if (!e(t[a], r[a])) return !1;
      return !0;
    }
    if (t.constructor === RegExp) return t.source === r.source && t.flags === r.flags;
    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf();
    if (t.toString !== Object.prototype.toString) return t.toString() === r.toString();
    if (i = Object.keys(t), n = i.length, n !== Object.keys(r).length) return !1;
    for (a = n; a-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(r, i[a])) return !1;
    for (a = n; a-- !== 0; ) {
      var o = i[a];
      if (!e(t[o], r[o])) return !1;
    }
    return !0;
  }
  return t !== t && r !== r;
};
const wq = /* @__PURE__ */ hb(_q), ai = typeof window < "u" ? Of : na;
function Sq(e, t, r) {
  const [n, a] = Cu(
    () => t(e)
  ), i = y0(() => {
    const o = t(e);
    wq(n, o) || (a(o), r && r());
  }, [
    n,
    e,
    r
  ]);
  return ai(i), [
    n,
    i
  ];
}
function xq(e, t, r) {
  const [n, a] = Sq(e, t, r);
  return ai(function() {
    const o = e.getHandlerId();
    if (o != null)
      return e.subscribeToStateChange(a, {
        handlerIds: [
          o
        ]
      });
  }, [
    e,
    a
  ]), n;
}
function zw(e, t, r) {
  return xq(
    t,
    e || (() => ({})),
    () => r.reconnect()
  );
}
function qw(e, t) {
  const r = [];
  return typeof e != "function" && r.push(e), Br(() => typeof e == "function" ? e() : e, r);
}
function Eq(e) {
  return Br(
    () => e.hooks.dragSource(),
    [
      e
    ]
  );
}
function Cq(e) {
  return Br(
    () => e.hooks.dragPreview(),
    [
      e
    ]
  );
}
let vd = !1, gd = !1;
class Dq {
  receiveHandlerId(t) {
    this.sourceId = t;
  }
  getHandlerId() {
    return this.sourceId;
  }
  canDrag() {
    Ee(!vd, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      return vd = !0, this.internalMonitor.canDragSource(this.sourceId);
    } finally {
      vd = !1;
    }
  }
  isDragging() {
    if (!this.sourceId)
      return !1;
    Ee(!gd, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      return gd = !0, this.internalMonitor.isDraggingSource(this.sourceId);
    } finally {
      gd = !1;
    }
  }
  subscribeToStateChange(t, r) {
    return this.internalMonitor.subscribeToStateChange(t, r);
  }
  isDraggingSource(t) {
    return this.internalMonitor.isDraggingSource(t);
  }
  isOverTarget(t, r) {
    return this.internalMonitor.isOverTarget(t, r);
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
  subscribeToOffsetChange(t) {
    return this.internalMonitor.subscribeToOffsetChange(t);
  }
  canDragSource(t) {
    return this.internalMonitor.canDragSource(t);
  }
  canDropOnTarget(t) {
    return this.internalMonitor.canDropOnTarget(t);
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
  constructor(t) {
    this.sourceId = null, this.internalMonitor = t.getMonitor();
  }
}
let md = !1;
class Oq {
  receiveHandlerId(t) {
    this.targetId = t;
  }
  getHandlerId() {
    return this.targetId;
  }
  subscribeToStateChange(t, r) {
    return this.internalMonitor.subscribeToStateChange(t, r);
  }
  canDrop() {
    if (!this.targetId)
      return !1;
    Ee(!md, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
    try {
      return md = !0, this.internalMonitor.canDropOnTarget(this.targetId);
    } finally {
      md = !1;
    }
  }
  isOver(t) {
    return this.targetId ? this.internalMonitor.isOverTarget(this.targetId, t) : !1;
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
  constructor(t) {
    this.targetId = null, this.internalMonitor = t.getMonitor();
  }
}
function Tq(e, t, r) {
  const n = r.getRegistry(), a = n.addTarget(e, t);
  return [
    a,
    () => n.removeTarget(a)
  ];
}
function kq(e, t, r) {
  const n = r.getRegistry(), a = n.addSource(e, t);
  return [
    a,
    () => n.removeSource(a)
  ];
}
function Ef(e, t, r, n) {
  let a;
  if (a !== void 0)
    return !!a;
  if (e === t)
    return !0;
  if (typeof e != "object" || !e || typeof t != "object" || !t)
    return !1;
  const i = Object.keys(e), o = Object.keys(t);
  if (i.length !== o.length)
    return !1;
  const s = Object.prototype.hasOwnProperty.bind(t);
  for (let l = 0; l < i.length; l++) {
    const u = i[l];
    if (!s(u))
      return !1;
    const c = e[u], d = t[u];
    if (a = void 0, a === !1 || a === void 0 && c !== d)
      return !1;
  }
  return !0;
}
function Cf(e) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    e !== null && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Rq(e) {
  if (typeof e.type == "string")
    return;
  const t = e.type.displayName || e.type.name || "the component";
  throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${t} into a <div>, or turn it into a drag source or a drop target itself.`);
}
function Pq(e) {
  return (t = null, r = null) => {
    if (!b0(t)) {
      const i = t;
      return e(i, r), i;
    }
    const n = t;
    return Rq(n), Nq(n, r ? (i) => e(i, r) : e);
  };
}
function Kw(e) {
  const t = {};
  return Object.keys(e).forEach((r) => {
    const n = e[r];
    if (r.endsWith("Ref"))
      t[r] = e[r];
    else {
      const a = Pq(n);
      t[r] = () => a;
    }
  }), t;
}
function p0(e, t) {
  typeof e == "function" ? e(t) : e.current = t;
}
function Nq(e, t) {
  const r = e.ref;
  return Ee(typeof r != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), r ? $l(e, {
    ref: (n) => {
      p0(r, n), p0(t, n);
    }
  }) : $l(e, {
    ref: t
  });
}
class Mq {
  receiveHandlerId(t) {
    this.handlerId !== t && (this.handlerId = t, this.reconnect());
  }
  get connectTarget() {
    return this.dragSource;
  }
  get dragSourceOptions() {
    return this.dragSourceOptionsInternal;
  }
  set dragSourceOptions(t) {
    this.dragSourceOptionsInternal = t;
  }
  get dragPreviewOptions() {
    return this.dragPreviewOptionsInternal;
  }
  set dragPreviewOptions(t) {
    this.dragPreviewOptionsInternal = t;
  }
  reconnect() {
    const t = this.reconnectDragSource();
    this.reconnectDragPreview(t);
  }
  reconnectDragSource() {
    const t = this.dragSource, r = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
    return r && this.disconnectDragSource(), this.handlerId ? t ? (r && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = t, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, t, this.dragSourceOptions)), r) : (this.lastConnectedDragSource = t, r) : r;
  }
  reconnectDragPreview(t = !1) {
    const r = this.dragPreview, n = t || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
    if (n && this.disconnectDragPreview(), !!this.handlerId) {
      if (!r) {
        this.lastConnectedDragPreview = r;
        return;
      }
      n && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = r, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, r, this.dragPreviewOptions));
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
    return !Ef(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
  }
  didDragPreviewOptionsChange() {
    return !Ef(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
  }
  disconnectDragSource() {
    this.dragSourceUnsubscribe && (this.dragSourceUnsubscribe(), this.dragSourceUnsubscribe = void 0);
  }
  disconnectDragPreview() {
    this.dragPreviewUnsubscribe && (this.dragPreviewUnsubscribe(), this.dragPreviewUnsubscribe = void 0, this.dragPreviewNode = null, this.dragPreviewRef = null);
  }
  get dragSource() {
    return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
  }
  get dragPreview() {
    return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
  }
  clearDragSource() {
    this.dragSourceNode = null, this.dragSourceRef = null;
  }
  clearDragPreview() {
    this.dragPreviewNode = null, this.dragPreviewRef = null;
  }
  constructor(t) {
    this.hooks = Kw({
      dragSource: (r, n) => {
        this.clearDragSource(), this.dragSourceOptions = n || null, Cf(r) ? this.dragSourceRef = r : this.dragSourceNode = r, this.reconnectDragSource();
      },
      dragPreview: (r, n) => {
        this.clearDragPreview(), this.dragPreviewOptions = n || null, Cf(r) ? this.dragPreviewRef = r : this.dragPreviewNode = r, this.reconnectDragPreview();
      }
    }), this.handlerId = null, this.dragSourceRef = null, this.dragSourceOptionsInternal = null, this.dragPreviewRef = null, this.dragPreviewOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDragSource = null, this.lastConnectedDragSourceOptions = null, this.lastConnectedDragPreview = null, this.lastConnectedDragPreviewOptions = null, this.backend = t;
  }
}
class Aq {
  get connectTarget() {
    return this.dropTarget;
  }
  reconnect() {
    const t = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
    t && this.disconnectDropTarget();
    const r = this.dropTarget;
    if (this.handlerId) {
      if (!r) {
        this.lastConnectedDropTarget = r;
        return;
      }
      t && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = r, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, r, this.dropTargetOptions));
    }
  }
  receiveHandlerId(t) {
    t !== this.handlerId && (this.handlerId = t, this.reconnect());
  }
  get dropTargetOptions() {
    return this.dropTargetOptionsInternal;
  }
  set dropTargetOptions(t) {
    this.dropTargetOptionsInternal = t;
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didDropTargetChange() {
    return this.lastConnectedDropTarget !== this.dropTarget;
  }
  didOptionsChange() {
    return !Ef(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
  }
  disconnectDropTarget() {
    this.unsubscribeDropTarget && (this.unsubscribeDropTarget(), this.unsubscribeDropTarget = void 0);
  }
  get dropTarget() {
    return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
  }
  clearDropTarget() {
    this.dropTargetRef = null, this.dropTargetNode = null;
  }
  constructor(t) {
    this.hooks = Kw({
      dropTarget: (r, n) => {
        this.clearDropTarget(), this.dropTargetOptions = n, Cf(r) ? this.dropTargetRef = r : this.dropTargetNode = r, this.reconnect();
      }
    }), this.handlerId = null, this.dropTargetRef = null, this.dropTargetOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDropTarget = null, this.lastConnectedDropTargetOptions = null, this.backend = t;
  }
}
function Fo() {
  const { dragDropManager: e } = lS(Hw);
  return Ee(e != null, "Expected drag drop context"), e;
}
function Iq(e, t) {
  const r = Fo(), n = Br(
    () => new Mq(r.getBackend()),
    [
      r
    ]
  );
  return ai(() => (n.dragSourceOptions = e || null, n.reconnect(), () => n.disconnectDragSource()), [
    n,
    e
  ]), ai(() => (n.dragPreviewOptions = t || null, n.reconnect(), () => n.disconnectDragPreview()), [
    n,
    t
  ]), n;
}
function $q() {
  const e = Fo();
  return Br(
    () => new Dq(e),
    [
      e
    ]
  );
}
class Lq {
  beginDrag() {
    const t = this.spec, r = this.monitor;
    let n = null;
    return typeof t.item == "object" ? n = t.item : typeof t.item == "function" ? n = t.item(r) : n = {}, n ?? null;
  }
  canDrag() {
    const t = this.spec, r = this.monitor;
    return typeof t.canDrag == "boolean" ? t.canDrag : typeof t.canDrag == "function" ? t.canDrag(r) : !0;
  }
  isDragging(t, r) {
    const n = this.spec, a = this.monitor, { isDragging: i } = n;
    return i ? i(a) : r === t.getSourceId();
  }
  endDrag() {
    const t = this.spec, r = this.monitor, n = this.connector, { end: a } = t;
    a && a(r.getItem(), r), n.reconnect();
  }
  constructor(t, r, n) {
    this.spec = t, this.monitor = r, this.connector = n;
  }
}
function Fq(e, t, r) {
  const n = Br(
    () => new Lq(e, t, r),
    [
      t,
      r
    ]
  );
  return na(() => {
    n.spec = e;
  }, [
    e
  ]), n;
}
function Hq(e) {
  return Br(() => {
    const t = e.type;
    return Ee(t != null, "spec.type must be defined"), t;
  }, [
    e
  ]);
}
function Bq(e, t, r) {
  const n = Fo(), a = Fq(e, t, r), i = Hq(e);
  ai(function() {
    if (i != null) {
      const [s, l] = kq(i, a, n);
      return t.receiveHandlerId(s), r.receiveHandlerId(s), l;
    }
  }, [
    n,
    t,
    r,
    a,
    i
  ]);
}
function jq(e, t) {
  const r = qw(e);
  Ee(!r.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  const n = $q(), a = Iq(r.options, r.previewOptions);
  return Bq(r, n, a), [
    zw(r.collect, n, a),
    Eq(a),
    Cq(a)
  ];
}
function Yq(e) {
  return Br(
    () => e.hooks.dropTarget(),
    [
      e
    ]
  );
}
function Wq(e) {
  const t = Fo(), r = Br(
    () => new Aq(t.getBackend()),
    [
      t
    ]
  );
  return ai(() => (r.dropTargetOptions = e || null, r.reconnect(), () => r.disconnectDropTarget()), [
    e
  ]), r;
}
function Vq() {
  const e = Fo();
  return Br(
    () => new Oq(e),
    [
      e
    ]
  );
}
function Uq(e) {
  const { accept: t } = e;
  return Br(() => (Ee(e.accept != null, "accept must be defined"), Array.isArray(t) ? t : [
    t
  ]), [
    t
  ]);
}
class Gq {
  canDrop() {
    const t = this.spec, r = this.monitor;
    return t.canDrop ? t.canDrop(r.getItem(), r) : !0;
  }
  hover() {
    const t = this.spec, r = this.monitor;
    t.hover && t.hover(r.getItem(), r);
  }
  drop() {
    const t = this.spec, r = this.monitor;
    if (t.drop)
      return t.drop(r.getItem(), r);
  }
  constructor(t, r) {
    this.spec = t, this.monitor = r;
  }
}
function zq(e, t) {
  const r = Br(
    () => new Gq(e, t),
    [
      t
    ]
  );
  return na(() => {
    r.spec = e;
  }, [
    e
  ]), r;
}
function qq(e, t, r) {
  const n = Fo(), a = zq(e, t), i = Uq(e);
  ai(function() {
    const [s, l] = Tq(i, a, n);
    return t.receiveHandlerId(s), r.receiveHandlerId(s), l;
  }, [
    n,
    t,
    a,
    r,
    i.map(
      (o) => o.toString()
    ).join("|")
  ]);
}
function Kq(e, t) {
  const r = qw(e), n = Vq(), a = Wq(r.options);
  return qq(r, n, a), [
    zw(r.collect, n, a),
    Yq(a)
  ];
}
function Xw(e) {
  let t = null;
  return () => (t == null && (t = e()), t);
}
function Xq(e, t) {
  return e.filter(
    (r) => r !== t
  );
}
function Qq(e, t) {
  const r = /* @__PURE__ */ new Set(), n = (i) => r.add(i);
  e.forEach(n), t.forEach(n);
  const a = [];
  return r.forEach(
    (i) => a.push(i)
  ), a;
}
class Jq {
  enter(t) {
    const r = this.entered.length, n = (a) => this.isNodeInDocument(a) && (!a.contains || a.contains(t));
    return this.entered = Qq(this.entered.filter(n), [
      t
    ]), r === 0 && this.entered.length > 0;
  }
  leave(t) {
    const r = this.entered.length;
    return this.entered = Xq(this.entered.filter(this.isNodeInDocument), t), r > 0 && this.entered.length === 0;
  }
  reset() {
    this.entered = [];
  }
  constructor(t) {
    this.entered = [], this.isNodeInDocument = t;
  }
}
class Zq {
  initializeExposedProperties() {
    Object.keys(this.config.exposeProperties).forEach((t) => {
      Object.defineProperty(this.item, t, {
        configurable: !0,
        enumerable: !0,
        get() {
          return console.warn(`Browser doesn't allow reading "${t}" until the drop event.`), null;
        }
      });
    });
  }
  loadDataTransfer(t) {
    if (t) {
      const r = {};
      Object.keys(this.config.exposeProperties).forEach((n) => {
        const a = this.config.exposeProperties[n];
        a != null && (r[n] = {
          value: a(t, this.config.matchesTypes),
          configurable: !0,
          enumerable: !0
        });
      }), Object.defineProperties(this.item, r);
    }
  }
  canDrag() {
    return !0;
  }
  beginDrag() {
    return this.item;
  }
  isDragging(t, r) {
    return r === t.getSourceId();
  }
  endDrag() {
  }
  constructor(t) {
    this.config = t, this.item = {}, this.initializeExposedProperties();
  }
}
const Qw = "__NATIVE_FILE__", Jw = "__NATIVE_URL__", Zw = "__NATIVE_TEXT__", eS = "__NATIVE_HTML__", v0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FILE: Qw,
  HTML: eS,
  TEXT: Zw,
  URL: Jw
}, Symbol.toStringTag, { value: "Module" }));
function bd(e, t, r) {
  const n = t.reduce(
    (a, i) => a || e.getData(i),
    ""
  );
  return n ?? r;
}
const Df = {
  [Qw]: {
    exposeProperties: {
      files: (e) => Array.prototype.slice.call(e.files),
      items: (e) => e.items,
      dataTransfer: (e) => e
    },
    matchesTypes: [
      "Files"
    ]
  },
  [eS]: {
    exposeProperties: {
      html: (e, t) => bd(e, t, ""),
      dataTransfer: (e) => e
    },
    matchesTypes: [
      "Html",
      "text/html"
    ]
  },
  [Jw]: {
    exposeProperties: {
      urls: (e, t) => bd(e, t, "").split(`
`),
      dataTransfer: (e) => e
    },
    matchesTypes: [
      "Url",
      "text/uri-list"
    ]
  },
  [Zw]: {
    exposeProperties: {
      text: (e, t) => bd(e, t, ""),
      dataTransfer: (e) => e
    },
    matchesTypes: [
      "Text",
      "text/plain"
    ]
  }
};
function eK(e, t) {
  const r = Df[e];
  if (!r)
    throw new Error(`native type ${e} has no configuration`);
  const n = new Zq(r);
  return n.loadDataTransfer(t), n;
}
function yd(e) {
  if (!e)
    return null;
  const t = Array.prototype.slice.call(e.types || []);
  return Object.keys(Df).filter((r) => {
    const n = Df[r];
    return n != null && n.matchesTypes ? n.matchesTypes.some(
      (a) => t.indexOf(a) > -1
    ) : !1;
  })[0] || null;
}
const tK = Xw(
  () => /firefox/i.test(navigator.userAgent)
), tS = Xw(
  () => !!window.safari
);
class g0 {
  interpolate(t) {
    const { xs: r, ys: n, c1s: a, c2s: i, c3s: o } = this;
    let s = r.length - 1;
    if (t === r[s])
      return n[s];
    let l = 0, u = o.length - 1, c;
    for (; l <= u; ) {
      c = Math.floor(0.5 * (l + u));
      const p = r[c];
      if (p < t)
        l = c + 1;
      else if (p > t)
        u = c - 1;
      else
        return n[c];
    }
    s = Math.max(0, u);
    const d = t - r[s], h = d * d;
    return n[s] + a[s] * d + i[s] * h + o[s] * d * h;
  }
  constructor(t, r) {
    const { length: n } = t, a = [];
    for (let p = 0; p < n; p++)
      a.push(p);
    a.sort(
      (p, v) => t[p] < t[v] ? -1 : 1
    );
    const i = [], o = [];
    let s, l;
    for (let p = 0; p < n - 1; p++)
      s = t[p + 1] - t[p], l = r[p + 1] - r[p], i.push(s), o.push(l / s);
    const u = [
      o[0]
    ];
    for (let p = 0; p < i.length - 1; p++) {
      const v = o[p], m = o[p + 1];
      if (v * m <= 0)
        u.push(0);
      else {
        s = i[p];
        const g = i[p + 1], b = s + g;
        u.push(3 * b / ((b + g) / v + (b + s) / m));
      }
    }
    u.push(o[o.length - 1]);
    const c = [], d = [];
    let h;
    for (let p = 0; p < u.length - 1; p++) {
      h = o[p];
      const v = u[p], m = 1 / i[p], g = v + u[p + 1] - h - h;
      c.push((h - v - g) * m), d.push(g * m * m);
    }
    this.xs = t, this.ys = r, this.c1s = u, this.c2s = c, this.c3s = d;
  }
}
const rK = 1;
function rS(e) {
  const t = e.nodeType === rK ? e : e.parentElement;
  if (!t)
    return null;
  const { top: r, left: n } = t.getBoundingClientRect();
  return {
    x: n,
    y: r
  };
}
function gl(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function nK(e) {
  var t;
  return e.nodeName === "IMG" && (tK() || !(!((t = document.documentElement) === null || t === void 0) && t.contains(e)));
}
function aK(e, t, r, n) {
  let a = e ? t.width : r, i = e ? t.height : n;
  return tS() && e && (i /= window.devicePixelRatio, a /= window.devicePixelRatio), {
    dragPreviewWidth: a,
    dragPreviewHeight: i
  };
}
function iK(e, t, r, n, a) {
  const i = nK(t), s = rS(i ? e : t), l = {
    x: r.x - s.x,
    y: r.y - s.y
  }, { offsetWidth: u, offsetHeight: c } = e, { anchorX: d, anchorY: h } = n, { dragPreviewWidth: p, dragPreviewHeight: v } = aK(i, t, u, c), m = () => {
    let E = new g0([
      0,
      0.5,
      1
    ], [
      // Dock to the top
      l.y,
      // Align at the center
      l.y / c * v,
      // Dock to the bottom
      l.y + v - c
    ]).interpolate(h);
    return tS() && i && (E += (window.devicePixelRatio - 1) * v), E;
  }, g = () => new g0([
    0,
    0.5,
    1
  ], [
    // Dock to the left
    l.x,
    // Align at the center
    l.x / u * p,
    // Dock to the right
    l.x + p - u
  ]).interpolate(d), { offsetX: b, offsetY: y } = a, w = b === 0 || b, S = y === 0 || y;
  return {
    x: w ? b : g(),
    y: S ? y : m()
  };
}
class oK {
  get window() {
    if (this.globalContext)
      return this.globalContext;
    if (typeof window < "u")
      return window;
  }
  get document() {
    var t;
    return !((t = this.globalContext) === null || t === void 0) && t.document ? this.globalContext.document : this.window ? this.window.document : void 0;
  }
  get rootElement() {
    var t;
    return ((t = this.optionsArgs) === null || t === void 0 ? void 0 : t.rootElement) || this.window;
  }
  constructor(t, r) {
    this.ownerDocument = null, this.globalContext = t, this.optionsArgs = r;
  }
}
function sK(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function m0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    }))), n.forEach(function(a) {
      sK(e, a, r[a]);
    });
  }
  return e;
}
class lK {
  /**
  * Generate profiling statistics for the HTML5Backend.
  */
  profile() {
    var t, r;
    return {
      sourcePreviewNodes: this.sourcePreviewNodes.size,
      sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
      sourceNodeOptions: this.sourceNodeOptions.size,
      sourceNodes: this.sourceNodes.size,
      dragStartSourceIds: ((t = this.dragStartSourceIds) === null || t === void 0 ? void 0 : t.length) || 0,
      dropTargetIds: this.dropTargetIds.length,
      dragEnterTargetIds: this.dragEnterTargetIds.length,
      dragOverTargetIds: ((r = this.dragOverTargetIds) === null || r === void 0 ? void 0 : r.length) || 0
    };
  }
  // public for test
  get window() {
    return this.options.window;
  }
  get document() {
    return this.options.document;
  }
  /**
  * Get the root element to use for event subscriptions
  */
  get rootElement() {
    return this.options.rootElement;
  }
  setup() {
    const t = this.rootElement;
    if (t !== void 0) {
      if (t.__isReactDndBackendSetUp)
        throw new Error("Cannot have two HTML5 backends at the same time.");
      t.__isReactDndBackendSetUp = !0, this.addEventListeners(t);
    }
  }
  teardown() {
    const t = this.rootElement;
    if (t !== void 0 && (t.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId)) {
      var r;
      (r = this.window) === null || r === void 0 || r.cancelAnimationFrame(this.asyncEndDragFrameId);
    }
  }
  connectDragPreview(t, r, n) {
    return this.sourcePreviewNodeOptions.set(t, n), this.sourcePreviewNodes.set(t, r), () => {
      this.sourcePreviewNodes.delete(t), this.sourcePreviewNodeOptions.delete(t);
    };
  }
  connectDragSource(t, r, n) {
    this.sourceNodes.set(t, r), this.sourceNodeOptions.set(t, n);
    const a = (o) => this.handleDragStart(o, t), i = (o) => this.handleSelectStart(o);
    return r.setAttribute("draggable", "true"), r.addEventListener("dragstart", a), r.addEventListener("selectstart", i), () => {
      this.sourceNodes.delete(t), this.sourceNodeOptions.delete(t), r.removeEventListener("dragstart", a), r.removeEventListener("selectstart", i), r.setAttribute("draggable", "false");
    };
  }
  connectDropTarget(t, r) {
    const n = (o) => this.handleDragEnter(o, t), a = (o) => this.handleDragOver(o, t), i = (o) => this.handleDrop(o, t);
    return r.addEventListener("dragenter", n), r.addEventListener("dragover", a), r.addEventListener("drop", i), () => {
      r.removeEventListener("dragenter", n), r.removeEventListener("dragover", a), r.removeEventListener("drop", i);
    };
  }
  addEventListeners(t) {
    t.addEventListener && (t.addEventListener("dragstart", this.handleTopDragStart), t.addEventListener("dragstart", this.handleTopDragStartCapture, !0), t.addEventListener("dragend", this.handleTopDragEndCapture, !0), t.addEventListener("dragenter", this.handleTopDragEnter), t.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), t.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), t.addEventListener("dragover", this.handleTopDragOver), t.addEventListener("dragover", this.handleTopDragOverCapture, !0), t.addEventListener("drop", this.handleTopDrop), t.addEventListener("drop", this.handleTopDropCapture, !0));
  }
  removeEventListeners(t) {
    t.removeEventListener && (t.removeEventListener("dragstart", this.handleTopDragStart), t.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), t.removeEventListener("dragend", this.handleTopDragEndCapture, !0), t.removeEventListener("dragenter", this.handleTopDragEnter), t.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), t.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), t.removeEventListener("dragover", this.handleTopDragOver), t.removeEventListener("dragover", this.handleTopDragOverCapture, !0), t.removeEventListener("drop", this.handleTopDrop), t.removeEventListener("drop", this.handleTopDropCapture, !0));
  }
  getCurrentSourceNodeOptions() {
    const t = this.monitor.getSourceId(), r = this.sourceNodeOptions.get(t);
    return m0({
      dropEffect: this.altKeyPressed ? "copy" : "move"
    }, r || {});
  }
  getCurrentDropEffect() {
    return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect;
  }
  getCurrentSourcePreviewNodeOptions() {
    const t = this.monitor.getSourceId(), r = this.sourcePreviewNodeOptions.get(t);
    return m0({
      anchorX: 0.5,
      anchorY: 0.5,
      captureDraggingState: !1
    }, r || {});
  }
  isDraggingNativeItem() {
    const t = this.monitor.getItemType();
    return Object.keys(v0).some(
      (r) => v0[r] === t
    );
  }
  beginDragNativeItem(t, r) {
    this.clearCurrentDragSourceNode(), this.currentNativeSource = eK(t, r), this.currentNativeHandle = this.registry.addSource(t, this.currentNativeSource), this.actions.beginDrag([
      this.currentNativeHandle
    ]);
  }
  setCurrentDragSourceNode(t) {
    this.clearCurrentDragSourceNode(), this.currentDragSourceNode = t;
    const r = 1e3;
    this.mouseMoveTimeoutTimer = setTimeout(() => {
      var n;
      return (n = this.rootElement) === null || n === void 0 ? void 0 : n.addEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
    }, r);
  }
  clearCurrentDragSourceNode() {
    if (this.currentDragSourceNode) {
      if (this.currentDragSourceNode = null, this.rootElement) {
        var t;
        (t = this.window) === null || t === void 0 || t.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
      }
      return this.mouseMoveTimeoutTimer = null, !0;
    }
    return !1;
  }
  handleDragStart(t, r) {
    t.defaultPrevented || (this.dragStartSourceIds || (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(r));
  }
  handleDragEnter(t, r) {
    this.dragEnterTargetIds.unshift(r);
  }
  handleDragOver(t, r) {
    this.dragOverTargetIds === null && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(r);
  }
  handleDrop(t, r) {
    this.dropTargetIds.unshift(r);
  }
  constructor(t, r, n) {
    this.sourcePreviewNodes = /* @__PURE__ */ new Map(), this.sourcePreviewNodeOptions = /* @__PURE__ */ new Map(), this.sourceNodes = /* @__PURE__ */ new Map(), this.sourceNodeOptions = /* @__PURE__ */ new Map(), this.dragStartSourceIds = null, this.dropTargetIds = [], this.dragEnterTargetIds = [], this.currentNativeSource = null, this.currentNativeHandle = null, this.currentDragSourceNode = null, this.altKeyPressed = !1, this.mouseMoveTimeoutTimer = null, this.asyncEndDragFrameId = null, this.dragOverTargetIds = null, this.lastClientOffset = null, this.hoverRafId = null, this.getSourceClientOffset = (a) => {
      const i = this.sourceNodes.get(a);
      return i && rS(i) || null;
    }, this.endDragNativeItem = () => {
      this.isDraggingNativeItem() && (this.actions.endDrag(), this.currentNativeHandle && this.registry.removeSource(this.currentNativeHandle), this.currentNativeHandle = null, this.currentNativeSource = null);
    }, this.isNodeInDocument = (a) => !!(a && this.document && this.document.body && this.document.body.contains(a)), this.endDragIfSourceWasRemovedFromDOM = () => {
      const a = this.currentDragSourceNode;
      a == null || this.isNodeInDocument(a) || (this.clearCurrentDragSourceNode() && this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover());
    }, this.scheduleHover = (a) => {
      this.hoverRafId === null && typeof requestAnimationFrame < "u" && (this.hoverRafId = requestAnimationFrame(() => {
        this.monitor.isDragging() && this.actions.hover(a || [], {
          clientOffset: this.lastClientOffset
        }), this.hoverRafId = null;
      }));
    }, this.cancelHover = () => {
      this.hoverRafId !== null && typeof cancelAnimationFrame < "u" && (cancelAnimationFrame(this.hoverRafId), this.hoverRafId = null);
    }, this.handleTopDragStartCapture = () => {
      this.clearCurrentDragSourceNode(), this.dragStartSourceIds = [];
    }, this.handleTopDragStart = (a) => {
      if (a.defaultPrevented)
        return;
      const { dragStartSourceIds: i } = this;
      this.dragStartSourceIds = null;
      const o = gl(a);
      this.monitor.isDragging() && (this.actions.endDrag(), this.cancelHover()), this.actions.beginDrag(i || [], {
        publishSource: !1,
        getSourceClientOffset: this.getSourceClientOffset,
        clientOffset: o
      });
      const { dataTransfer: s } = a, l = yd(s);
      if (this.monitor.isDragging()) {
        if (s && typeof s.setDragImage == "function") {
          const c = this.monitor.getSourceId(), d = this.sourceNodes.get(c), h = this.sourcePreviewNodes.get(c) || d;
          if (h) {
            const { anchorX: p, anchorY: v, offsetX: m, offsetY: g } = this.getCurrentSourcePreviewNodeOptions(), w = iK(d, h, o, {
              anchorX: p,
              anchorY: v
            }, {
              offsetX: m,
              offsetY: g
            });
            s.setDragImage(h, w.x, w.y);
          }
        }
        try {
          s == null || s.setData("application/json", {});
        } catch {
        }
        this.setCurrentDragSourceNode(a.target);
        const { captureDraggingState: u } = this.getCurrentSourcePreviewNodeOptions();
        u ? this.actions.publishDragSource() : setTimeout(
          () => this.actions.publishDragSource(),
          0
        );
      } else if (l)
        this.beginDragNativeItem(l);
      else {
        if (s && !s.types && (a.target && !a.target.hasAttribute || !a.target.hasAttribute("draggable")))
          return;
        a.preventDefault();
      }
    }, this.handleTopDragEndCapture = () => {
      this.clearCurrentDragSourceNode() && this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover();
    }, this.handleTopDragEnterCapture = (a) => {
      if (this.dragEnterTargetIds = [], this.isDraggingNativeItem()) {
        var i;
        (i = this.currentNativeSource) === null || i === void 0 || i.loadDataTransfer(a.dataTransfer);
      }
      if (!this.enterLeaveCounter.enter(a.target) || this.monitor.isDragging())
        return;
      const { dataTransfer: s } = a, l = yd(s);
      l && this.beginDragNativeItem(l, s);
    }, this.handleTopDragEnter = (a) => {
      const { dragEnterTargetIds: i } = this;
      if (this.dragEnterTargetIds = [], !this.monitor.isDragging())
        return;
      this.altKeyPressed = a.altKey, i.length > 0 && this.actions.hover(i, {
        clientOffset: gl(a)
      }), i.some(
        (s) => this.monitor.canDropOnTarget(s)
      ) && (a.preventDefault(), a.dataTransfer && (a.dataTransfer.dropEffect = this.getCurrentDropEffect()));
    }, this.handleTopDragOverCapture = (a) => {
      if (this.dragOverTargetIds = [], this.isDraggingNativeItem()) {
        var i;
        (i = this.currentNativeSource) === null || i === void 0 || i.loadDataTransfer(a.dataTransfer);
      }
    }, this.handleTopDragOver = (a) => {
      const { dragOverTargetIds: i } = this;
      if (this.dragOverTargetIds = [], !this.monitor.isDragging()) {
        a.preventDefault(), a.dataTransfer && (a.dataTransfer.dropEffect = "none");
        return;
      }
      this.altKeyPressed = a.altKey, this.lastClientOffset = gl(a), this.scheduleHover(i), (i || []).some(
        (s) => this.monitor.canDropOnTarget(s)
      ) ? (a.preventDefault(), a.dataTransfer && (a.dataTransfer.dropEffect = this.getCurrentDropEffect())) : this.isDraggingNativeItem() ? a.preventDefault() : (a.preventDefault(), a.dataTransfer && (a.dataTransfer.dropEffect = "none"));
    }, this.handleTopDragLeaveCapture = (a) => {
      this.isDraggingNativeItem() && a.preventDefault(), this.enterLeaveCounter.leave(a.target) && (this.isDraggingNativeItem() && setTimeout(
        () => this.endDragNativeItem(),
        0
      ), this.cancelHover());
    }, this.handleTopDropCapture = (a) => {
      if (this.dropTargetIds = [], this.isDraggingNativeItem()) {
        var i;
        a.preventDefault(), (i = this.currentNativeSource) === null || i === void 0 || i.loadDataTransfer(a.dataTransfer);
      } else yd(a.dataTransfer) && a.preventDefault();
      this.enterLeaveCounter.reset();
    }, this.handleTopDrop = (a) => {
      const { dropTargetIds: i } = this;
      this.dropTargetIds = [], this.actions.hover(i, {
        clientOffset: gl(a)
      }), this.actions.drop({
        dropEffect: this.getCurrentDropEffect()
      }), this.isDraggingNativeItem() ? this.endDragNativeItem() : this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover();
    }, this.handleSelectStart = (a) => {
      const i = a.target;
      typeof i.dragDrop == "function" && (i.tagName === "INPUT" || i.tagName === "SELECT" || i.tagName === "TEXTAREA" || i.isContentEditable || (a.preventDefault(), i.dragDrop()));
    }, this.options = new oK(r, n), this.actions = t.getActions(), this.monitor = t.getMonitor(), this.registry = t.getRegistry(), this.enterLeaveCounter = new Jq(this.isNodeInDocument);
  }
}
const uK = function(t, r, n) {
  return new lK(t, r, n);
};
var nS = function(t) {
  var r = t.list, n = t.root, a = t.onChange, i = f.useState(r), o = ve(i, 2), s = o[0], l = o[1], u = f.useCallback(function(d, h) {
    var p = s[d], v = s[h];
    l(function(m) {
      var g = Cr(m);
      return g[d] = v, g[h] = p, g;
    });
  }, [s]), c = function() {
    a(s);
  };
  return /* @__PURE__ */ f.createElement(mq, {
    backend: uK
  }, /* @__PURE__ */ f.createElement("div", {
    className: "order-list"
  }, /* @__PURE__ */ f.createElement("div", {
    className: "order-root"
  }, n), /* @__PURE__ */ f.createElement("div", {
    className: "order-items"
  }, s.map(function(d, h) {
    return d.isLeft ? null : /* @__PURE__ */ f.createElement(cK, le({}, t, d, {
      index: h,
      moveListItem: u,
      onDrop: c
    }));
  }))));
}, cK = function(t) {
  var r = t.value, n = t.index, a = t.moveListItem, i = t.onDrop, o = jq({
    type: "item",
    item: {
      index: n
    },
    collect: function(m) {
      return {
        isDragging: m.isDragging()
      };
    }
  }), s = ve(o, 2);
  s[0].isDragging;
  var l = s[1], u = Kq({
    accept: "item",
    hover: function(m, g) {
      var b, y = m.index, w = n, S = (b = h.current) === null || b === void 0 ? void 0 : b.getBoundingClientRect(), _ = (S.right - S.left) / 2, E = g.getClientOffset().x - S.left;
      y < w && E < _ || y > w && E > _ || (a(y, w), m.index = w);
    },
    drop: function() {
      return i();
    }
  }), c = ve(u, 2);
  c[0];
  var d = c[1], h = f.useRef(null), p = l(d(h));
  return /* @__PURE__ */ f.createElement("div", {
    className: "order-list-item",
    ref: p
  }, r);
}, vK = function(t, r) {
  var n = document.createElement("div");
  n.className = "call-unitable-wrapper", t.appendChild(n);
  var a = Jl(n), i = function() {
    a.unmount(), n.remove();
  };
  return a.render(/* @__PURE__ */ f.createElement(SD, le({}, r, {
    removeComponent: i
  }))), {
    removeComponent: i
  };
}, dK = /* @__PURE__ */ function() {
  function e(t) {
    var r = this;
    go(this, e), _t(this, "getHeightStyle", function(I) {
      var F = isNaN(I) ? I : "".concat(I, "px");
      return {
        height: F,
        minHeight: F,
        maxHeight: F
      };
    }), _t(this, "getWidthStyle", function(I) {
      var F = isNaN(I) ? I : "".concat(I, "px");
      return {
        width: F,
        minWidth: F,
        maxWidth: F
      };
    }), _t(this, "getValueByAddress", function(I) {
      var F = r.connector, de = I.split("."), T = ye(de), M;
      try {
        for (T.s(); !(M = T.n()).done; ) {
          var ie = M.value;
          F = F[ie];
        }
      } catch (z) {
        T.e(z);
      } finally {
        T.f();
      }
      return F;
    }), _t(this, "setValueByAddress", function(I, F) {
      var de = r.connector, T = I.split(".");
      for (var M in T)
        Number(M) === T.length - 1 ? de[T[M]] = F : de = de[T[M]];
    }), _t(this, "setHoveredCell", function(I, F) {
      var de = r.connector, T = de.hovered, M = de.refresh, ie = M.row, z = M.column, V = T.column, oe = T.row, X = function(Q) {
        Q !== null && Array.isArray(z) && r.refreshColumn(Q);
      }, Z = function(Q) {
        Q !== null && ie && ie[Q] && ie[Q]();
      };
      r.connector.hovered = {
        column: I,
        row: F
      }, I !== V && (X(V), X(I)), F !== oe && (Z(oe), Z(F));
    });
    var n = t.tablePortalElCurrent, a = t.tableName, i = a === void 0 ? "" : a, o = t.data, s = t.commonForHeader, l = s === void 0 ? {} : s, u = t.commonForBody, c = u === void 0 ? {} : u, d = t.editors, h = d === void 0 ? {} : d, p = t.options, v = p === void 0 ? {} : p, m = t.onChangeComponentState, g = m === void 0 ? {} : m, b = t.getComponentControlling, y = b === void 0 ? function() {
    } : b, w = t.refreshTable, S = v.numberFixedLeftColumns, _ = S === void 0 ? 0 : S, E = v.tableHasRowsTree, C = E === void 0 ? !1 : E, D = o.header, O = o.rows, R = o.params, P = R === void 0 ? {} : R;
    this.rowsByOrdinalIndex = {};
    var A = this.rowsTreeToRows(O), B = A.rows, $ = A.rowsMaxLevel, K = A.rowsRootNumber;
    this.tableName = i, this.header = D, this.numberFixedLeftColumns = _, this.setHeaderInfo(D), this.numberFixedLeftColumnsEnds = this.getNumberFixedLeftColumns(D, _), !P.totalLength && O.length < P.pageLength && (P.totalLength = O.length);
    var L = v.initialSizes || {};
    this.connector = {
      options: v,
      params: P,
      commonForHeader: l,
      commonForBody: c,
      editors: h,
      onChangeComponentState: g,
      tableHas: {
        paginator: B.length !== P.totalLength,
        scrollbarHorizontal: !1,
        scrollbarVertical: !1,
        rowsTree: C
      },
      header: D,
      rows: this.correctionRowsLength(B, this.headerLength),
      rowsTree: O,
      rowsRootNumber: K,
      rowsMaxLevel: $,
      headerMaxLevel: this.headerMaxLevel,
      headerLength: this.headerLength,
      showPageNum: 0,
      numberFixedLeftColumns: this.numberFixedLeftColumns,
      numberFixedLeftColumnsEnds: this.numberFixedLeftColumnsEnds,
      searchContext: fe.monoArray(this.headerLength, null),
      format: fe.monoArray(this.headerLength, null),
      sortCell: null,
      editableCell: null,
      sizes: {
        columnsWidth: this.getColumnsWidth({
          tablePortalElCurrent: n,
          initialSizes: L
        }),
        headerHeight: L.headerHeight ? L.headerHeight : this.headerMaxLevel * 45,
        rowsHeight: L.rowsHeight ? L.rowsHeight : 25,
        paginatorHeight: 40,
        scrollbar: 18
      },
      refs: {
        tablePortalElCurrent: n,
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
        table: w,
        headerAndBody: function() {
        },
        header: function() {
        },
        body: function() {
        },
        scrollbarHorizontal: function() {
        },
        scrollbarVertical: function() {
        },
        paginator: function() {
        },
        column: [],
        row: []
      },
      showColumns: fe.monoArray(this.headerLength, !0),
      showRows: this.showRows,
      orderTree: this.buildTreeOrder(),
      orderEnds: []
    }, this.restoreTableSettingsFromLocaleStorage(), this.orderTreeToOrderEnds(), setTimeout(function() {
      r.setControlling(y);
    }, 0), console.log("--- Utils --->", this);
  }
  return mo(e, [{
    key: "getColumnsWidth",
    value: function(r) {
      var n, a = r.tablePortalElCurrent, i = a === void 0 ? null : a, o = r.initialSizes, s = o === void 0 ? {} : o, l = 100;
      console.log("tablePortalElCurrent.current", i.current);
      var u = (n = i.current) !== null && n !== void 0 && n.getBoundingClientRect ? i.current.getBoundingClientRect().width : null;
      if (u) {
        var c = i.current.currentStyle || window.getComputedStyle(i.current), d = Number(c.paddingLeft.replace("px", "")) + Number(c.paddingRight.replace("px", ""));
        u -= d;
      }
      if (!u && !(s != null && s.columnsWidth))
        return fe.monoArray(this.headerLength, l);
      if (!s.columnsWidth) {
        var h = Math.floor(u / this.headerLength);
        return fe.monoArray(this.headerLength, h);
      }
      var p = s.columnsWidth, v = function(D) {
        var O = D.split("%");
        if (O.length === 2)
          return u ? Math.floor(u / 100 * Number(O[0])) : l;
        var R = D.split("px");
        return Number(R[0]);
      };
      if (Array.isArray(p)) {
        for (var m = [], g = 0, b = 0, y = 0; y < this.headerLength; y++)
          if (p[y]) {
            var w = v(String(p[y]));
            m[y] = w, b += w;
          } else
            m[y] = "*", g++;
        if (g) {
          var S = u ? u - b : l * g, _ = S / g;
          for (var E in m)
            m[E] === "*" && (m[E] = _);
        }
        return m;
      } else
        return fe.monoArray(this.headerLength, v(String(p)));
    }
  }, {
    key: "setControlling",
    value: function(r) {
      var n = {
        setTableTotalLength: this.setTableTotalLength.bind(this),
        refreshBodyWithNewRows: this.refreshBodyWithNewRows.bind(this),
        refreshPaginator: this.connector.refresh.paginator.bind(this),
        refreshTable: this.refreshTable.bind(this)
      };
      r(n);
    }
  }, {
    key: "refreshTable",
    value: function() {
      Oe.setState("unitable.".concat(this.tableName), {}), this.connector.refresh.table();
    }
  }, {
    key: "refreshBodyWithNewRows",
    value: function(r) {
      var n = this.connector.params, a = r.newRows, i = r.newPageLength, o = r.newPageNum, s = r.openAllLevels, l = this.rowsTreeToRows(a, s), u = l.rows, c = l.rowsMaxLevel, d = l.rowsRootNumber;
      this.connector.rowsTree = a, this.connector.rows = this.correctionRowsLength(u, this.headerLength), this.connector.rowsRootNumber = d, this.connector.rowsMaxLevel = c, i && (n.pageLength = i), isNaN(o) || (n.pageNum = o), !n.totalLength && a.length < n.pageLength && this.setTableTotalLength(n.pageNum * n.pageLength + a.length), s || this.setShowToAllRows(!1), this.connector.refresh.body(), this.connector.refresh.paginator(), this.storeRememberPage();
    }
  }, {
    key: "getSliding",
    value: function() {
      var r = this.connector, n = r.sizes, a = n.rowsHeight, i = n.headerHeight, o = n.paginatorHeight, s = r.refs, l = r.showRows, u = s == null ? void 0 : s.unitableBodyInner, c = function() {
        var _ = document.getElementsByTagName("body")[0].getBoundingClientRect().height;
        return _ - i - o;
      }, d = u ? u.scrollTop : 0, h = u ? u.getBoundingClientRect().height : c(), p = Math.round(d / a), v = Math.round((d + h) / a), m = [], g = 0, b = ye(l), y;
      try {
        for (b.s(); !(y = b.n()).done; ) {
          var w = y.value;
          w.show ? (m.push(g >= p && g <= v), g++) : m.push(!0);
        }
      } catch (S) {
        b.e(S);
      } finally {
        b.f();
      }
      return m;
    }
  }, {
    key: "setTableTotalLength",
    value: function(r) {
      var n = this.connector, a = n.params, i = n.refresh;
      a.totalLength = r, i.paginator();
    }
  }, {
    key: "setShowToAllRows",
    value: function(r) {
      var n = this.connector, a = n.refresh.body, i = n.showRows;
      for (var o in i) {
        var s = i[o];
        s.showChildren = r, s.level && (s.show = r);
      }
      a();
    }
  }, {
    key: "rowsTreeToRows",
    value: function(r, n) {
      var a = this, i = [], o = [], s = 0, l = 0, u = 0, c = 0, d = function(p, v, m, g) {
        var b = ye(p), y;
        try {
          for (b.s(); !(y = b.n()).done; ) {
            var w = y.value, S = w.row, _ = w.children, E = w._, C = !!(_ != null && _.length);
            i.push(S), a.rowsByOrdinalIndex[c] = w;
            var D = [], O = {
              show: n ? !0 : !v,
              mainRootIndex: s,
              level: v,
              isRoot: C,
              showChildren: !!n,
              children: D,
              parentChildren: m,
              parentIndex: g,
              ordinalIndex: c
            };
            E != null && E.isNotFind && (O.isNotFind = !0), o.push(O), c++, u++, l = Math.max(l, v), m && m.push(o.length - 1), C && d(_, v + 1, D, u), v || s++;
          }
        } catch (R) {
          b.e(R);
        } finally {
          b.f();
        }
      };
      return d(this.rootsToUp(r), 0), this.connector && (this.connector.showRows = o), this.showRows = o, {
        rows: i,
        rowsMaxLevel: l,
        rowsRootNumber: r.length
      };
    }
  }, {
    key: "rootsToUp",
    value: function(r) {
      var n = function(i) {
        i.sort(function(c, d) {
          var h, p, v = !!((h = c.children) !== null && h !== void 0 && h.length), m = !!((p = d.children) !== null && p !== void 0 && p.length);
          return v && !m ? -1 : !v && m ? 1 : 0;
        });
        var o = ye(i), s;
        try {
          for (o.s(); !(s = o.n()).done; ) {
            var l, u = s.value;
            (l = u.children) !== null && l !== void 0 && l.length && n(u.children);
          }
        } catch (c) {
          o.e(c);
        } finally {
          o.f();
        }
      };
      return n(r), r;
    }
  }, {
    key: "toggleShowRowTree",
    value: function(r) {
      var n, a = this.connector, i = a.showRows, o = a.refresh.row, s = a.refs, l = s.rightParts, u = s.scrollbarWrapperRef, c = a.refresh, d = ((n = u.current) === null || n === void 0 ? void 0 : n.scrollLeft) || 0, h = !i[r].showChildren, p = function(m) {
        var g = i[m];
        g.showChildren = h;
        var b = ye(g.children), y;
        try {
          var w = function() {
            var _, E = y.value, C = i[E];
            C.show = h, o[E](), setTimeout(function() {
              l[E + 1].scrollLeft = d;
            }, 10), !h && (_ = C.children) !== null && _ !== void 0 && _.length && p(E);
          };
          for (b.s(); !(y = b.n()).done; )
            w();
        } catch (S) {
          b.e(S);
        } finally {
          b.f();
        }
      };
      p(r), setTimeout(function() {
        c.scrollbarVertical();
      }, 0);
    }
  }, {
    key: "toggleCheckedCell",
    value: function(r) {
      if (!r._.isEndOfLeftPart) {
        var n = !r._.checked, a = function(o) {
          if (o._.checked = n, !o._.isEnd) {
            var s = ye(o.children), l;
            try {
              for (s.s(); !(l = s.n()).done; ) {
                var u = l.value;
                a(u);
              }
            } catch (c) {
              s.e(c);
            } finally {
              s.f();
            }
          }
        };
        a(r), this.checkParentCheckedInHeader();
      }
    }
  }, {
    key: "checkParentCheckedInHeader",
    value: function() {
      var r = function(s) {
        if (s._.isEnd)
          return s._.checked;
        var l = !1, u = ye(s.children), c;
        try {
          for (u.s(); !(c = u.n()).done; ) {
            var d = c.value;
            l = r(d) || l;
          }
        } catch (h) {
          u.e(h);
        } finally {
          u.f();
        }
        return s._.checked = l, l;
      }, n = ye(this.connector.header), a;
      try {
        for (n.s(); !(a = n.n()).done; ) {
          var i = a.value;
          i._.isEndOfLeftPart || r(i);
        }
      } catch (o) {
        n.e(o);
      } finally {
        n.f();
      }
    }
  }, {
    key: "distributeShowColumnsToHeader",
    value: function() {
      var r = this.connector, n = r.showColumns, a = r.header, i = function(c) {
        if (c._.isEnd) {
          c._.checked = n[c._.endIndex];
          return;
        }
        var d = ye(c.children), h;
        try {
          for (d.s(); !(h = d.n()).done; ) {
            var p = h.value;
            i(p);
          }
        } catch (v) {
          d.e(v);
        } finally {
          d.f();
        }
      }, o = ye(a), s;
      try {
        for (o.s(); !(s = o.n()).done; ) {
          var l = s.value;
          l._.isEndOfLeftPart || i(l);
        }
      } catch (u) {
        o.e(u);
      } finally {
        o.f();
      }
      this.checkParentCheckedInHeader();
    }
  }, {
    key: "distributeHeaderToShowColumns",
    value: function() {
      var r = this, n = this.connector, a = n.showColumns, i = n.header, o = n.data.headerRoot, s = function(h) {
        var p = h._, v = p.checked, m = p.isEnd, g = p.endIndex;
        if (m) {
          var b = a[g];
          if (v === b) return;
          a[g] = v, r.refreshColumn(g);
          return;
        }
        var y = ye(h.children), w;
        try {
          for (y.s(); !(w = y.n()).done; ) {
            var S = w.value;
            s(S);
          }
        } catch (_) {
          y.e(_);
        } finally {
          y.f();
        }
      }, l = ye(i), u;
      try {
        for (l.s(); !(u = l.n()).done; ) {
          var c = u.value;
          c._.isEndOfLeftPart || s(c);
        }
      } catch (d) {
        l.e(d);
      } finally {
        l.f();
      }
      setTimeout(function() {
        var d = ye(o), h;
        try {
          for (d.s(); !(h = d.n()).done; ) {
            var p = h.value;
            p.refresh();
          }
        } catch (v) {
          d.e(v);
        } finally {
          d.f();
        }
      }, 0);
    }
  }, {
    key: "buildTreeOrder",
    value: function() {
      var r = 0, n = function(i) {
        var o = [];
        for (var s in i) {
          var l, u = i[s], c = {
            i: Number(s)
          };
          (l = u.children) !== null && l !== void 0 && l.length ? c.ch = n(u.children) : (c.orig = r, r++), o.push(c);
        }
        return o;
      };
      return n(this.header);
    }
  }, {
    key: "getNumberFixedLeftColumns",
    value: function(r, n) {
      for (var a = 0, i = 0; i < n; i++) a += r[i]._.length;
      return a;
    }
  }, {
    key: "setHeaderInfo",
    value: function(r) {
      var n = this, a = 0, i = 1, o = 0, s = 0;
      this.headerCellsByCellIndex = {};
      var l = function(b) {
        var y, w = b.item, S = b.rootIndex, _ = b.level, E = b.parent, C = b.isLeft, D = b.isEditable, O = b.css, R = b.view, P = b.customizer, A = 0;
        if (_ > i && (i = _), (y = w.children) !== null && y !== void 0 && y.length) {
          for (var B in w.children) {
            var $ = w.children[B], K = D, L = O, I = R, F = P;
            $.columns && (K = $.columns.isEditable === void 0 ? D : $.columns.isEditable, L = $.columns.css === void 0 ? O : U(U({}, O), $.columns.css), I = $.columns.view === void 0 ? R : $.columns.view, F = $.columns.customizer === void 0 ? P : $.columns.customizer), A += l({
              item: $,
              rootIndex: S,
              level: _ + 1,
              parent: w,
              isLeft: C,
              isEditable: K,
              css: L,
              view: I,
              customizer: F
            });
          }
          return w._ = {
            level: _,
            length: A,
            isEnd: !1,
            parent: E,
            checked: !0,
            isLeft: C,
            ordinalIndex: s,
            isEditable: D,
            css: O,
            view: R,
            customizer: P
          }, s++, A;
        }
        return a++, w._ = {
          level: _,
          length: 1,
          isEnd: !0,
          rootIndex: S,
          endIndex: o,
          checked: !0,
          parent: E,
          isLeft: C,
          ordinalIndex: s,
          isEditable: D,
          css: O,
          view: R,
          customizer: P
        }, n.headerCellsByCellIndex[o] = w, s++, o++, 1;
      };
      for (var u in r) {
        var c, d, h, p;
        l({
          item: r[u],
          rootIndex: Number(u),
          level: 0,
          parent: null,
          isLeft: u < this.numberFixedLeftColumns,
          isEditable: (c = r[u].columns) === null || c === void 0 ? void 0 : c.isEditable,
          css: ((d = r[u].columns) === null || d === void 0 ? void 0 : d.css) || {},
          view: ((h = r[u].columns) === null || h === void 0 ? void 0 : h.view) || null,
          customizer: ((p = r[u].columns) === null || p === void 0 ? void 0 : p.customizer) || null
        });
      }
      if (this.numberFixedLeftColumns)
        for (var v = function(b) {
          var y;
          return b._.isEndOfLeftPart = !0, (y = b.children) !== null && y !== void 0 && y.length ? b.children[b.children.length - 1] : null;
        }, m = r[this.numberFixedLeftColumns - 1]; m; )
          m = v(m);
      this.headerLength = a, this.headerMaxLevel = i + 1;
    }
  }, {
    key: "orderTreeToOrderEnds",
    value: function() {
      var r = this.connector.orderTree, n = [], a = function(o) {
        var s = ye(o), l;
        try {
          for (s.s(); !(l = s.n()).done; ) {
            var u = l.value;
            u.ch ? a(u.ch) : n.push(u.orig);
          }
        } catch (c) {
          s.e(c);
        } finally {
          s.f();
        }
      };
      a(r), this.connector.orderEnds = n;
    }
  }, {
    key: "recalcHeaderRootsPadding",
    value: function() {
      var r = this.connector, n = r.data.headerRoot, a = r.refs.headerRight, i = a.getBoundingClientRect(), o = i.left, s = i.right, l = ye(n), u;
      try {
        for (l.s(); !(u = l.n()).done; ) {
          var c = u.value, d = c.ref, h = c.refresh, p = d.getBoundingClientRect(), v = p.left, m = p.right;
          (v < o && m > o || v < s || m > s) && h();
        }
      } catch (g) {
        l.e(g);
      } finally {
        l.f();
      }
    }
  }, {
    key: "getHeaderRootsPadding",
    value: function(r) {
      var n = 0, a = 0, i = 200;
      if (!r) return {
        paddingLeft: n,
        paddingRight: a
      };
      var o = this.connector.refs.headerRight, s = r.getBoundingClientRect(), l = s.left, u = s.right, c = o.getBoundingClientRect(), d = c.left, h = c.right, p = u - l, v = p - i;
      return l < d && u > d && (n = Math.min(v, d - l)), l < h && u > h && (a = Math.min(v, u - h)), {
        paddingLeft: n,
        paddingRight: a
      };
    }
  }, {
    key: "getEndsByHeaderCell",
    value: function(r) {
      var n = [], a = function(o) {
        var s;
        if (o._.isEnd) {
          n.push(o);
          return;
        }
        if ((s = o.children) !== null && s !== void 0 && s.length) {
          var l = ye(o.children), u;
          try {
            for (l.s(); !(u = l.n()).done; ) {
              var c = u.value;
              a(c);
            }
          } catch (d) {
            l.e(d);
          } finally {
            l.f();
          }
        }
      };
      return a(r), n;
    }
  }, {
    key: "refreshHeaderRoots",
    value: function() {
      var r = this.connector.data.headerRoot, n = ye(r), a;
      try {
        for (n.s(); !(a = n.n()).done; ) {
          var i = a.value;
          i.refresh();
        }
      } catch (o) {
        n.e(o);
      } finally {
        n.f();
      }
    }
  }, {
    key: "refreshTableWidth",
    value: function() {
      var r = this;
      setTimeout(function() {
        r.connector.refresh.scrollbarHorizontal(), r.connector.refresh.scrollbarVertical(), r.recalcHeaderRootsPadding(), r.connector.refs.unitable.style.maxWidth = "".concat(r.getTotalRowWidth(), "px");
      }, 0);
    }
  }, {
    key: "saveTableSettingsToLocaleStorage",
    value: function() {
      var r = this.connector, n = r.sizes, a = r.showColumns, i = r.orderTree, o = r.orderEnds, s = r.header, l = r.options, u = l.saveSettingsInLocaleStorage, c = l.background, d = l.resize, h = l.initialSizes, p = l.columns, v = l.editableSettings, m = l.other;
      if (u) {
        var g = JSON.parse(JSON.stringify(n));
        h != null && h.columnsWidth && !(d != null && d.columnsWidth) && !(v != null && v.resizeColumnsWidth) && delete g.columnsWidth;
        var b = function() {
          var _ = [], E = function(D) {
            var O = ye(D), R;
            try {
              for (O.s(); !(R = O.n()).done; ) {
                var P, A = R.value;
                (P = A.children) !== null && P !== void 0 && P.length && E(A.children), _.push(A._.format || null);
              }
            } catch (B) {
              O.e(B);
            } finally {
              O.f();
            }
          };
          return E(s), _;
        }, y = JSON.parse(localStorage.getItem("unitables_data") || "{}"), w = U(U({}, y), {}, _t({}, this.tableName, {
          sizes: g,
          showColumns: a,
          orderTree: i,
          orderEnds: o,
          format: b(),
          options: {
            background: c,
            resize: d,
            columns: p,
            other: m
          }
        }));
        localStorage.setItem("unitables_data", JSON.stringify(w));
      }
    }
  }, {
    key: "restoreTableSettingsFromLocaleStorage",
    value: function() {
      var r = this, n = this.connector, a = n.header, i = n.options.saveSettingsInLocaleStorage;
      if (i) {
        var o = JSON.parse(localStorage.getItem("unitables_data") || "{}"), s = o[this.tableName];
        if (s) {
          var l = function(h) {
            var p = 0, v = function(g) {
              var b = ye(g), y;
              try {
                var w = function() {
                  var _, E = y.value;
                  (_ = E.children) !== null && _ !== void 0 && _.length && v(E.children), h[p] && (E._.format = h[p], setTimeout(function() {
                    r.refreshColumnsTree({
                      data: E._.format,
                      cell: E,
                      connectorIndex: "format",
                      isObject: !0
                    });
                  }, 0)), p++;
                };
                for (b.s(); !(y = b.n()).done; )
                  w();
              } catch (S) {
                b.e(S);
              } finally {
                b.f();
              }
            };
            v(a);
          };
          for (var u in s)
            if (u === "format")
              l(s[u]);
            else if (u === "options")
              for (var c in s.options)
                this.connector.options[c] = s.options[c];
            else
              this.connector[u] = s[u];
          this.orderTreeToOrderEnds();
        }
      }
    }
  }, {
    key: "refreshColumn",
    value: function(r) {
      var n = ye(this.connector.refresh.column[r]), a;
      try {
        for (n.s(); !(a = n.n()).done; ) {
          var i = a.value;
          i();
        }
      } catch (o) {
        n.e(o);
      } finally {
        n.f();
      }
    }
  }, {
    key: "refreshAllColumns",
    value: function() {
      var r = ye(this.connector.refresh.column), n;
      try {
        for (r.s(); !(n = r.n()).done; ) {
          var a = n.value, i = ye(a), o;
          try {
            for (i.s(); !(o = i.n()).done; ) {
              var s = o.value;
              s();
            }
          } catch (l) {
            i.e(l);
          } finally {
            i.f();
          }
        }
      } catch (l) {
        r.e(l);
      } finally {
        r.f();
      }
    }
  }, {
    key: "correctionRowsLength",
    value: function(r, n) {
      var a = [], i = "Правительство Венесуэлы решило отозвать весь дипломатический персонал из Аргентины, Доминиканской Республики, Коста-Рики, Панамы, Перу, Уругвая и Чили, власти которых раскритиковали результаты прошедших президентских выборов. Согласно бюллетеню Национального избирательного совета, опубликованному после обработки 80% протоколов, действующего лидера Николаса Мадуро поддержали 5 150 092 избирателя (51,2% проголосовавших). Глава Аргентины Хавьер Милей не признал победу Мадуро на выборах в Венесуэле.", o = function(h, p) {
        return h = Math.ceil(h), p = Math.floor(p), Math.floor(Math.random() * (p - h + 1)) + h;
      };
      if (!(r != null && r.length)) return a;
      var s = function(h) {
        for (var p = n - h.length, v = 0; v < p; v++) {
          var m = o(0, 400), g = o(3, 90);
          h.push({
            value: i.slice(m, m + g)
            //                    isEditable: true,
          });
        }
        return h.slice(0, n);
      }, l = ye(r), u;
      try {
        for (l.s(); !(u = l.n()).done; ) {
          var c = u.value;
          a.push(U({}, s(c)));
        }
      } catch (d) {
        l.e(d);
      } finally {
        l.f();
      }
      return a;
    }
  }, {
    key: "splitRowByLeftAndRight",
    value: function(r, n) {
      return [r.slice(0, n), r.slice(n)];
    }
  }, {
    key: "getBodyHeight",
    value: function() {
      var r = this.connector, n = r.sizes, a = n.headerHeight, i = n.paginatorHeight, o = r.tableHas.paginator, s = a + /*(hasScrollbar ? scrollbarHeight : 0) + */
      (o ? i : 0);
      return "calc(100% - ".concat(s, "px)");
    }
  }, {
    key: "getLeftPartRowWidth",
    value: function() {
      for (var r = this.connector, n = r.numberFixedLeftColumnsEnds, a = r.sizes.columnsWidth, i = r.showColumns, o = 0, s = 0; s < n; s++)
        i[s] && (o += a[s]);
      return o;
    }
  }, {
    key: "getRightPartRowWidth",
    value: function() {
      for (var r = this.connector, n = r.numberFixedLeftColumnsEnds, a = r.sizes.columnsWidth, i = r.showColumns, o = 0, s = n; s < a.length; s++)
        i[s] && (o += a[s]);
      return o;
    }
  }, {
    key: "getTotalRowWidth",
    value: function() {
      var r = this.connector, n = r.sizes.columnsWidth, a = r.showColumns, i = 0;
      for (var o in n)
        a[o] && (i += n[o]);
      return i;
    }
  }, {
    key: "refreshColumnsTree",
    value: function(r) {
      var n = r.data, a = r.cell, i = r.connectorIndex, o = r.isObject, s = this.connector[i], l = [], u = function(v) {
        var m = ye(v), g;
        try {
          for (m.s(); !(g = m.n()).done; ) {
            var b, y = g.value;
            (b = y.children) !== null && b !== void 0 && b.length ? u(y.children) : l.push(y._.endIndex);
          }
        } catch (w) {
          m.e(w);
        } finally {
          m.f();
        }
      };
      isNaN(a._.endIndex) ? u(a.children) : l[0] = a._.endIndex, a._[i] = n;
      for (var c = 0, d = l; c < d.length; c++) {
        var h = d[c];
        s[h] = this.recalcDataByCellIndex(h, i, o), this.refreshColumn(h);
      }
    }
  }, {
    key: "recalcDataByCellIndex",
    value: function(r, n, a) {
      for (var i = this.headerCellsByCellIndex[r], o = i._[n] || null, s = function(c, d) {
        var h = U({}, c);
        for (var p in d)
          h[p] || (h[p] = d[p]);
        return h;
      }; (l = i) !== null && l !== void 0 && l._.parent && (!o || a); ) {
        var l;
        i = i._.parent, i._[n] && (o = a ? s(o, i._[n]) : i._[n]);
      }
      return o;
    }
  }, {
    key: "getSearchContextByCellIndex",
    value: function(r) {
      return this.connector.searchContext[r];
    }
  }, {
    key: "getFormatByCellIndex",
    value: function(r) {
      return this.connector.format[r];
    }
  }, {
    key: "storeGetPagesId",
    value: function() {
      var r = this.connector.params.pageLength;
      return "unitable.".concat(this.tableName, ".pages.length ").concat(r);
    }
  }, {
    key: "storeGetPageId",
    value: function(r) {
      var n = this.connector, a = n.params.pageNum, i = n.sortCell, o = n.searchContext, s = ye(o), l;
      try {
        for (s.s(); !(l = s.n()).done; ) {
          var u = l.value;
          if (u) return null;
        }
      } catch (c) {
        s.e(c);
      } finally {
        s.f();
      }
      return i ? null : "".concat(this.storeGetPagesId(), ".").concat(isNaN(r) ? a : r);
    }
  }, {
    key: "storeGetAnyPageId",
    value: function(r) {
      var n = this.connector, a = n.params, i = a.pageNum, o = a.pageLength, s = n.sortCell, l = n.searchContext, u = n.options.other.searchLogicAND, c = "unitable.".concat(this.tableName, ".anyPages.length=").concat(o), d = "";
      for (var h in l)
        l[h] && (c += "&search".concat(h, "=").concat(l[h]), d = "&searchType=".concat(u ? "AND" : "OR"));
      if (c += d, s) {
        var p = s._, v = p.ordinalIndex, m = p.sort;
        c += "&sort".concat(v, "=").concat(m);
      }
      return c + ".".concat(isNaN(r) ? i : r);
    }
  }, {
    key: "storeGetAnyRowsId",
    value: function(r) {
      var n = r || {}, a = n.withoutSort, i = this.connector, o = i.sortCell, s = i.searchContext, l = i.options.other.searchLogicAND, u = "", c = "";
      for (var d in s)
        s[d] && (u && (u += "&"), u += "search".concat(d, "=").concat(s[d]), c = "&searchType=".concat(l ? "AND" : "OR"));
      if (u += c, o && !a) {
        var h = o._, p = h.ordinalIndex, v = h.sort;
        u && (u += "&"), u += "sort".concat(p, "=").concat(v);
      }
      return u ? "unitable.".concat(this.tableName, ".anyRows.").concat(u) : this.storeGetRowsId();
    }
  }, {
    key: "storeGetRowsId",
    value: function() {
      return "unitable.".concat(this.tableName, ".rows");
    }
  }, {
    key: "storeGetPages",
    value: function() {
      return this.storeGet(this.storeGetPagesId());
    }
  }, {
    key: "storeRowsIsLoaded",
    value: function() {
      return !!this.storeGetRows();
    }
  }, {
    key: "storeGetRows",
    value: function() {
      return this.storeGet(this.storeGetRowsId());
    }
  }, {
    key: "storeSetRows",
    value: function(r) {
      Oe.setState(this.storeGetRowsId(), Cr(r));
    }
  }, {
    key: "storeGet",
    value: function(r) {
      var n = Zt(Oe.getState(r));
      return Array.isArray(n) ? Cr(n) : n && xd(n) === "object" ? U({}, n) : n;
    }
  }, {
    key: "storeGetTotalRowsByDownloadedPages",
    value: function() {
      var r = 0, n = this.storeGet(this.storeGetPagesId());
      for (var a in n) r += n[a].length;
      return r;
    }
  }, {
    key: "storeRememberPage",
    value: function() {
      var r, n = this.connector.params.totalLength;
      if (!this.storeRowsIsLoaded()) {
        var a = this.storeGetPageId();
        if (!a) {
          var i = this.storeGetAnyPageId();
          this.storeGet(i) || Oe.setState(i, Cr(this.connector.rowsTree));
          return;
        }
        if (!this.storeGetPage() && (Oe.setState(a, Cr(this.connector.rowsTree)), !!n && this.storeGetTotalRowsByDownloadedPages() === n)) {
          var o = this.storeGetPages();
          this.storeSetRows((r = []).concat.apply(r, Cr(Object.values(o))));
        }
      }
    }
  }, {
    key: "storeGetPage",
    value: function(r) {
      console.log("store", Zt(Oe.getStore())), console.log("connector", this.connector);
      var n = r || {}, a = n.pageNum, i = this.connector.params, o = null, s = null, l = isNaN(a) ? i.pageNum : a;
      return this.storeRowsIsLoaded() ? this.storeGetPageFromRows(r) : (o = this.storeGetPageId(l), o || (o = this.storeGetAnyPageId(l)), s = this.storeGet(o), s);
    }
  }, {
    key: "storeGetPageFromRows",
    value: function(r) {
      var n = r || {}, a = n.pageLength, i = n.pageNum, o = this.connector.params, s = a || o.pageLength, l = isNaN(i) ? o.pageNum : i, u = this.storeGetAnyRowsId(), c = this.storeGet(u);
      return c || (c = this.storeCreateAndRememberAnyRows(u)), this.connector.params.totalLength = c.length, this.connector.refresh.paginator(), c.slice(s * l, s * (l + 1));
    }
  }, {
    key: "storeCreateAndRememberAnyRows",
    value: function(r) {
      var n = this.connector, a = n.sortCell, i = n.searchContext, o = [], s = this.storeGetAnyRowsId({
        withoutSort: !0
      });
      return o = this.storeGet(s), o || (o = this.storeGetRows(), o = this.storeRowsToFilteredRows(o, i), Oe.setState(s, Cr(o))), o = this.storeRowsToSortedRows(o, a), Oe.setState(r, Cr(o)), o;
    }
  }, {
    key: "storeRowsToFilteredRows",
    value: function(r, n) {
      var a, i = (a = this.connector.options) === null || a === void 0 || (a = a.other) === null || a === void 0 ? void 0 : a.searchLogicAND, o = [], s = [];
      for (var l in n)
        n[l] && s.push({
          index: Number(l),
          text: n[l].toLowerCase()
        });
      if (!s.length) return r;
      var u = function(m) {
        for (var g = 0, b = s; g < b.length; g++) {
          var y = b[g], w = ~String(m[y.index].value).toLowerCase().indexOf(y.text);
          if (i && !w) return !1;
          if (!i && w) return !0;
        }
        return !!i;
      }, c = function(m) {
        var g, b = m.row, y = m.to, w = m.level, S = {
          children: [],
          row: b.row
        };
        if ((g = b.children) !== null && g !== void 0 && g.length) {
          var _ = ye(b.children), E;
          try {
            for (_.s(); !(E = _.n()).done; ) {
              var C = E.value;
              c({
                row: C,
                to: S.children,
                level: w + 1
              });
            }
          } catch (O) {
            _.e(O);
          } finally {
            _.f();
          }
        }
        var D = u(S.row);
        (S.children.length || D) && (y.push(S), D || (S._ = {
          isNotFind: !0
        }));
      }, d = ye(r), h;
      try {
        for (d.s(); !(h = d.n()).done; ) {
          var p = h.value;
          c({
            row: p,
            to: o,
            level: 0
          });
        }
      } catch (v) {
        d.e(v);
      } finally {
        d.f();
      }
      return o;
    }
  }, {
    key: "storeRowsToSortedRows",
    value: function(r, n) {
      var a;
      if (!(n != null && (a = n._) !== null && a !== void 0 && a.sort)) return r;
      var i = n || {}, o = i._, s = o.ordinalIndex, l = o.sort, u = l === "up" ? -1 : 1, c = new Intl.Collator("ru"), d = function(m) {
        return String(m.row[s].value).toLowerCase().replace(/^\s+/, "");
      }, h = function(m, g) {
        return c.compare(d(m), d(g)) * u;
      }, p = function(m) {
        m.sort(h);
        var g = ye(m), b;
        try {
          for (g.s(); !(b = g.n()).done; ) {
            var y, w = b.value;
            (y = w.children) !== null && y !== void 0 && y.length && p(w.children);
          }
        } catch (S) {
          g.e(S);
        } finally {
          g.f();
        }
      };
      return p(r), r;
    }
  }, {
    key: "setEditableCell",
    value: function(r) {
      this.connector.editableCell && this.connector.editableCell.stopEditor(), this.connector.editableCell = r;
    }
  }, {
    key: "getCustomizer",
    value: function(r) {
      var n = r.customizer, a = r.cell, i = {
        css: {},
        class: ""
      }, o = ye(n), s;
      try {
        for (o.s(); !(s = o.n()).done; ) {
          var l = s.value, u = l.css, c = l.class, d = l.condition, h = ye(d), p;
          try {
            for (h.s(); !(p = h.n()).done; ) {
              var v = p.value, m = !0, g = ye(v), b;
              try {
                for (g.s(); !(b = g.n()).done; ) {
                  var y = b.value, w = y.match(/(\S+)\s+(\S+)\s+(.*)/);
                  if (w) {
                    var S = w.slice(1), _ = ve(S, 3), E = _[0], C = _[1], D = _[2], O = D.replace(/^\s+/, "");
                    m = m && this.checkCondition({
                      field: E,
                      operand: C,
                      text: O,
                      cell: a
                    });
                  } else {
                    var R = y.match(/(\S+)\s+(.*)/);
                    if (R) {
                      var P = R.slice(1), A = ve(P, 2), B = A[0], $ = A[1];
                      m = m && this.checkCondition({
                        field: B,
                        operand: $,
                        text: null,
                        cell: a
                      });
                    } else
                      return this.customizerError('неверный формат "'.concat(y, '"')), i;
                  }
                }
              } catch (K) {
                g.e(K);
              } finally {
                g.f();
              }
              m && (i.css = U(U({}, i.css), u), i.class += (i.class ? " " : "") + c);
            }
          } catch (K) {
            h.e(K);
          } finally {
            h.f();
          }
        }
      } catch (K) {
        o.e(K);
      } finally {
        o.f();
      }
      return i;
    }
  }, {
    key: "checkCondition",
    value: function(r) {
      var n = r.field, a = r.operand, i = r.text, o = r.cell, s = o[n], l = a.match(/not\((\S+)\)/), u = l ? l[1] : a, c = !!l, d;
      switch (u) {
        case "match":
          d = s != null && s.match ? !!s.match(RegExp(i)) : !1;
          break;
        case "contains":
          d = s != null && s.indexOf ? !!~s.indexOf(i) : !1;
          break;
        case "isNumber":
          d = !isNaN(s);
          break;
        case "isUndefined":
          d = s === void 0;
          break;
        case "isTrue":
          d = !!s;
          break;
        case "isFalse":
          d = !s;
          break;
        case "==":
          d = s == i;
          break;
        case "!=":
          d = s != i;
          break;
        case ">":
          d = s > i;
          break;
        case "<":
          d = s < i;
          break;
        case ">=":
          d = s >= i;
          break;
        case "<=":
          d = s <= i;
          break;
        default:
          return this.customizerError('неизвестный операнд "'.concat(u, '"')), !1;
      }
      return c ? !d : d;
    }
  }, {
    key: "customizerError",
    value: function(r) {
      var n = this;
      this.errorTexts || (this.errorTexts = {}), this.errorTexts[r] || (console.error("ОШИБКА В ОПИСАНИИ УСЛОВНОГО ФОРМАТИРОВАНИЯ -- ".concat(r)), this.errorTexts[r] = !0, setTimeout(function() {
        n.errorTexts = {};
      }, 1e3));
    }
  }]);
}();
export {
  SD as Table,
  vK as callTable
};
