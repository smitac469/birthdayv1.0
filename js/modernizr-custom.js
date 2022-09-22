/*! modernizr 3.1.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-csstransitions-prefixed !*/
!(function (e, n, t) {
  function r(e, n) {
    return typeof e === n;
  }
  function o() {
    var e, n, t, o, s, i, a;
    for (var f in C) {
      if (
        ((e = []),
        (n = C[f]),
        n.name &&
          (e.push(n.name.toLowerCase()),
          n.options && n.options.aliases && n.options.aliases.length))
      )
        for (t = 0; t < n.options.aliases.length; t++)
          e.push(n.options.aliases[t].toLowerCase());
      for (o = r(n.fn, "function") ? n.fn() : n.fn, s = 0; s < e.length; s++)
        (i = e[s]),
          (a = i.split(".")),
          1 === a.length
            ? (Modernizr[a[0]] = o)
            : (!Modernizr[a[0]] ||
                Modernizr[a[0]] instanceof Boolean ||
                (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])),
              (Modernizr[a[0]][a[1]] = o)),
          g.push((o ? "" : "no-") + a.join("-"));
    }
  }
  function s(e) {
    var n = x.className,
      t = Modernizr._config.classPrefix || "";
    if ((w && (n = n.baseVal), Modernizr._config.enableJSClass)) {
      var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
      n = n.replace(r, "$1" + t + "js$2");
    }
    Modernizr._config.enableClasses &&
      ((n += " " + t + e.join(" " + t)),
      w ? (x.className.baseVal = n) : (x.className = n));
  }
  function i(e) {
    return e
      .replace(/([a-z])-([a-z])/g, function (e, n, t) {
        return n + t.toUpperCase();
      })
      .replace(/^-/, "");
  }
  function a(e, n) {
    return !!~("" + e).indexOf(n);
  }
  function f() {
    return "function" != typeof n.createElement
      ? n.createElement(arguments[0])
      : w
      ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0])
      : n.createElement.apply(n, arguments);
  }
  function l(e, n) {
    return function () {
      return e.apply(n, arguments);
    };
  }
  function u(e, n, t) {
    var o;
    for (var s in e)
      if (e[s] in n)
        return t === !1
          ? e[s]
          : ((o = n[e[s]]), r(o, "function") ? l(o, t || n) : o);
    return !1;
  }
  function p(e) {
    return e
      .replace(/([A-Z])/g, function (e, n) {
        return "-" + n.toLowerCase();
      })
      .replace(/^ms-/, "-ms-");
  }
  function d() {
    var e = n.body;
    return e || ((e = f(w ? "svg" : "body")), (e.fake = !0)), e;
  }
  function c(e, t, r, o) {
    var s,
      i,
      a,
      l,
      u = "modernizr",
      p = f("div"),
      c = d();
    if (parseInt(r, 10))
      for (; r--; )
        (a = f("div")), (a.id = o ? o[r] : u + (r + 1)), p.appendChild(a);
    return (
      (s = f("style")),
      (s.type = "text/css"),
      (s.id = "s" + u),
      (c.fake ? c : p).appendChild(s),
      c.appendChild(p),
      s.styleSheet
        ? (s.styleSheet.cssText = e)
        : s.appendChild(n.createTextNode(e)),
      (p.id = u),
      c.fake &&
        ((c.style.background = ""),
        (c.style.overflow = "hidden"),
        (l = x.style.overflow),
        (x.style.overflow = "hidden"),
        x.appendChild(c)),
      (i = t(p, e)),
      c.fake
        ? (c.parentNode.removeChild(c), (x.style.overflow = l), x.offsetHeight)
        : p.parentNode.removeChild(p),
      !!i
    );
  }
  function m(n, r) {
    var o = n.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; o--; ) if (e.CSS.supports(p(n[o]), r)) return !0;
      return !1;
    }
    if ("CSSSupportsRule" in e) {
      for (var s = []; o--; ) s.push("(" + p(n[o]) + ":" + r + ")");
      return (
        (s = s.join(" or ")),
        c(
          "@supports (" + s + ") { #modernizr { position: absolute; } }",
          function (e) {
            return "absolute" == getComputedStyle(e, null).position;
          }
        )
      );
    }
    return t;
  }
  function v(e, n, o, s) {
    function l() {
      p && (delete P.style, delete P.modElem);
    }
    if (((s = r(s, "undefined") ? !1 : s), !r(o, "undefined"))) {
      var u = m(e, o);
      if (!r(u, "undefined")) return u;
    }
    for (var p, d, c, v, h, y = ["modernizr", "tspan"]; !P.style; )
      (p = !0), (P.modElem = f(y.shift())), (P.style = P.modElem.style);
    for (c = e.length, d = 0; c > d; d++)
      if (
        ((v = e[d]),
        (h = P.style[v]),
        a(v, "-") && (v = i(v)),
        P.style[v] !== t)
      ) {
        if (s || r(o, "undefined")) return l(), "pfx" == n ? v : !0;
        try {
          P.style[v] = o;
        } catch (g) {}
        if (P.style[v] != h) return l(), "pfx" == n ? v : !0;
      }
    return l(), !1;
  }
  function h(e, n, t, o, s) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
      a = (e + " " + b.join(i + " ") + i).split(" ");
    return r(n, "string") || r(n, "undefined")
      ? v(a, n, o, s)
      : ((a = (e + " " + z.join(i + " ") + i).split(" ")), u(a, n, t));
  }
  function y(e, n, r) {
    return h(e, t, t, n, r);
  }
  var g = [],
    C = [],
    _ = {
      _version: "3.1.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (e, n) {
        var t = this;
        setTimeout(function () {
          n(t[e]);
        }, 0);
      },
      addTest: function (e, n, t) {
        C.push({ name: e, fn: n, options: t });
      },
      addAsyncTest: function (e) {
        C.push({ name: null, fn: e });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = _), (Modernizr = new Modernizr());
  var x = n.documentElement,
    w = "svg" === x.nodeName.toLowerCase(),
    S = "Moz O ms Webkit",
    b = _._config.usePrefixes ? S.split(" ") : [];
  _._cssomPrefixes = b;
  var E = function (n) {
    var r,
      o = prefixes.length,
      s = e.CSSRule;
    if ("undefined" == typeof s) return t;
    if (!n) return !1;
    if (
      ((n = n.replace(/^@/, "")),
      (r = n.replace(/-/g, "_").toUpperCase() + "_RULE"),
      r in s)
    )
      return "@" + n;
    for (var i = 0; o > i; i++) {
      var a = prefixes[i],
        f = a.toUpperCase() + "_" + r;
      if (f in s) return "@-" + a.toLowerCase() + "-" + n;
    }
    return !1;
  };
  _.atRule = E;
  var z = _._config.usePrefixes ? S.toLowerCase().split(" ") : [];
  _._domPrefixes = z;
  var N = { elem: f("modernizr") };
  Modernizr._q.push(function () {
    delete N.elem;
  });
  var P = { style: N.elem.style };
  Modernizr._q.unshift(function () {
    delete P.style;
  }),
    (_.testAllProps = h);
  _.prefixed = function (e, n, t) {
    return 0 === e.indexOf("@")
      ? E(e)
      : (-1 != e.indexOf("-") && (e = i(e)), n ? h(e, n, t) : h(e, "pfx"));
  };
  (_.testAllProps = y),
    Modernizr.addTest("csstransitions", y("transition", "all", !0)),
    o(),
    s(g),
    delete _.addTest,
    delete _.addAsyncTest;
  for (var T = 0; T < Modernizr._q.length; T++) Modernizr._q[T]();
  e.Modernizr = Modernizr;
})(window, document);
