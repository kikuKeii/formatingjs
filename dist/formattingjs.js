!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.FormattingJS = e())
    : (t.FormattingJS = e());
})(self, () => {
  return (
    (t = {
      427: (t) => {
        t.exports = function (t) {
          return "string" != typeof t ? "Input mush be a string!" : t.length;
        };
      },
      378: (t) => {
        t.exports = function (t, e, r, n) {
          return "number" != typeof t ||
            "string" != typeof e ||
            "string" != typeof r ||
            "string" != typeof n
            ? "Input mush be a number, string (us-US), string (currency), and string (USD)!"
            : new Intl.NumberFormat(e, { style: r, currency: n }).format(t);
        };
      },
      54: (t) => {
        t.exports = function (t, e) {
          return "string" != typeof t || "number" != typeof e
            ? "Input mush be a string and length must be a number!"
            : t.slice(0, e);
        };
      },
      103: (t) => {
        t.exports = function (t) {
          if (!Array.isArray(t)) return "Input mush be an array!";
          let e = "";
          for (let r = 0; r < t.length; r++)
            (e += t[r]), r < t.length - 1 && (e += " ");
          return e;
        };
      },
      559: (t) => {
        t.exports = function (t, e, r, n = !0) {
          return "string" != typeof e || "string" != typeof r
            ? "Input mush be a string!"
            : n
            ? t.replace(new RegExp(`${e}`, "g"), r)
            : t.replace(e, r);
        };
      },
      42: (t) => {
        t.exports = function (t) {
          return "string" != typeof t
            ? "Input mush be a string!"
            : t.split("").reverse().join("");
        };
      },
      138: (t, e, r) => {
        t.exports = {
          joinString: r(103),
          countCharacters: r(427),
          reverseString: r(42),
          cutString: r(54),
          currencyFormat: r(378),
          replaceString: r(559),
        };
      },
    }),
    (e = {}),
    (function r(n) {
      var o = e[n];
      if (void 0 !== o) return o.exports;
      var s = (e[n] = { exports: {} });
      return t[n](s, s.exports, r), s.exports;
    })(138)
  );
  var t, e;
});
