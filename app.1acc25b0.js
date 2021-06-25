const parcelRequire = (function(e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function(r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function(e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function(r, t) {
      e[r] = [
        function(e, r) {
          r.exports = t;
        },
        {}
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function() {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    J9Nv: [
      function(require, module, exports) {
        "use strict";
        var r =
          (this && this.__spreadArrays) ||
          function() {
            for (var r = 0, e = 0, t = arguments.length; e < t; e++)
              r += arguments[e].length;
            var o = Array(r),
              n = 0;
            for (e = 0; e < t; e++)
              for (var u = arguments[e], a = 0, l = u.length; a < l; a++, n++)
                o[n] = u[a];
            return o;
          };
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.$$ = exports.$ = void 0);
        var e = function() {
          for (var r = [], e = 0; e < arguments.length; e++)
            r[e] = arguments[e];
          return document.querySelector.apply(document, r);
        };
        exports.$ = e;
        var t = function() {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          return r(document.querySelectorAll.apply(document, e));
        };
        exports.$$ = t;
      },
      {}
    ],
    nVwK: [
      function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var e = {
          en: { description: "Student and Computer Science Enthusiast" },
          fr: { description: "Étudiant et passionné d'informatique" }
        };
        exports.default = e;
      },
      {}
    ],
    haqf: [
      function(require, module, exports) {
        "use strict";
        var e =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var t = require("./dom-utils"),
          a = e(require("./locales")),
          n = function() {
            var e = !(
                "not all" ===
                window.matchMedia("(prefers-color-scheme: dark)").media
              ),
              t = window.matchMedia("(prefers-color-scheme: dark)").matches;
            e && t
              ? document.documentElement.classList.add("theme-dark")
              : document.documentElement.classList.add("theme-light");
          },
          r = function() {
            var e,
              n = navigator.language.substring(0, 2).toLowerCase(),
              r =
                null !== (e = a.default[n]) && void 0 !== e ? e : a.default.en;
            document.documentElement.setAttribute(
              "lang",
              a.default[n] ? n : "en"
            ),
              (t.$("#description").innerText = r.description);
          };
        n(), r();
      },
      { "./dom-utils": "J9Nv", "./locales": "nVwK" }
    ]
  },
  {},
  ["haqf"],
  null
);
//# sourceMappingURL=/app.1acc25b0.js.map
