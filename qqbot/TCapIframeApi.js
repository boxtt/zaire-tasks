!function (e, t) {
  var n = t(e);
  "undefined" != typeof define && (define.cmd || define.amd) && define(function () {
    return n
  })
}(window, function (e) {
  function t(e) {
    for (var t = [2052, 1033, 1028], n = t.length; n--;)
      if (t[n] === parseInt(e))
        return !0;
    return !1
  }

  function n(t) {
    var n = 0;
    C = !1;
    for (var a = (new Date).getTime(), o = 0; o < t.length; o++) {
      var c = e.document.createElement("script");
      c.type = "text/javascript",
      c.async = !0,
      c.src = t[o],
      c.onload = c.onreadystatechange = function () {
        if (("undefined" == typeof this.readyState || "loaded" === this.readyState || "complete" === this.readyState) && (C = ++n >= t.length)) {
          var e = (new Date).getTime();
          T = e - a,
          j(),
          j = function () {
          }
        }
      }
      ,
      e.document.getElementsByTagName("head").item(0).appendChild(c)
    }
  }

  function a() {
    if ("undefined" == typeof JSON.stringify || "undefined" == typeof TCapMsg || "undefined" == typeof AqSCode)
      return void (e.console && e.console.log("script onload not ready"));
    L && L.lang && t(L.lang) && (w = L.lang),
    L && "boolean" == typeof L.needFeedBack && (E = L.needFeedBack ? 1 : 0),
    L && L.theme && (k = L.theme),
    L && L.pos && (S = L.pos);
    var n = f({
      ele: A,
      src: q[0],
      domain: b,
      s_type: q[1],
      slide_src: q[2],
      s_type_suffix: _,
      uin: $,
      lang: w,
      fb: E,
      theme: k,
      pos: S,
      htdoc_path: m,
      TCapIframeLoadTime: T
    }, L || {});
    I = new AqSCode(n),
    I.listen(D, F),
    I.start(O),
    I.end(x)
  }

  function o() {
    return I.getTicket()
  }

  function c(e, t, n) {
    "function" == typeof t ? (D = t,
    L = n) : (L = t,
    L.callback && "function" == typeof L.callback ? D = L.callback : "function" == typeof n && (D = n),
    L.ready && "function" == typeof L.ready && (F = L.ready)),
    L && L.start && "[object Function]" == Object.prototype.toString.call(L.start) && (O = function () {
      L.start && L.start(),
      l.start()
    }
    ),
    L && L.end && "[object Function]" == Object.prototype.toString.call(L.end) && (x = function () {
      L.end && L.end(),
      l.end()
    }
    ),
    A = e,
    C ? a() : j = a
  }

  function r(e) {
    I && I.refresh && I.refresh(e)
  }

  function i() {
    I && I.destroy && I.destroy()
  }

  function d(e) {
    var t = new AqSCode({
      ele: e,
      src: q[0],
      domain: b,
      s_type: q[1],
      slide_src: q[2],
      s_type_suffix: _,
      uin: $,
      lang: w,
      fb: E,
      theme: k,
      pos: S,
      htdoc_path: m
    });
    return t
  }

  var p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
  , u = window.btoa || function (e) {
    for (var t, n, a = String(e), o = 0, c = p, r = ""; a.charAt(0 | o) || (c = "=",
    o % 1); r += c.charAt(63 & t >> 8 - o % 1 * 8)) {
      if (n = a.charCodeAt(o += .75),
      n > 255)
        return "base64encode outside range";
      t = t << 8 | n
    }
    return r
  }
  , s = {
    add: function (t, n, a) {
      e.document.addEventListener ? t.addEventListener(n, a, !1) : e.document.attachEvent ? t.attachEvent("on" + n, a) : t["on" + n] = a
    },
    remove: function (t, n, a) {
      e.document.removeEventListener ? t.removeEventListener(n, a, !1) : e.document.detachEvent ? t.detachEvent("on" + n, a) : t["on" + n] = null
    }
  }
  , f = function (e, t, n) {
    n = n || !1;
    var a = {};
    for (var o in t)
      e[o] = t[o];
    if (n) {
      for (var o in e)
        a[o] = e[o];
      return a
    }
    return e
  }
  , l = {
    id: 0,
    start: function () {
      this.id || (s.add(e.document, "click", r),
      this.id = 1)
    },
    end: function () {
      s.remove(e.document, "click", r),
      this.id = 0
    }
  }
  , h = "https"
  , m = "https://captcha.gtimg.com/2"
  , v = "inner"
  , y = "https" == h ? "https://ssl.captcha.qq.com" : "http://captcha.qq.com"
  , g = "https" == h ? "https://captcha.guard.qcloud.com" : "http://captcha.guard.qcloud.com"
  , b = "inner" == v ? y : g;
  m = "" != m ? m : b;
  var _ = "?aid=501004106&asig=&captype=&protocol=https&clientype=2&disturblevel=&apptype=2&curenv=inner";
  _ += "&ua=" + u(navigator.userAgent);
  var $ = ""
  , k = ""
  , w = "2052";
  0 == t(w) && (w = "2052");
  var E = 1
  , S = ""
  , T = 0
  ,
  q = [b + "/template/new_placeholder.html" + _, b + "/cap_union_prehandle" + _, b + "/template/new_slide_placeholder.html" + _]
  , C = !1
  , j = function () {
  };
  n([m + "/JsonMsg.js", m + "/TCapIframe.js?v=1.0"]);
  var A, I, L, D = function () {
  }, F = function () {
  }, O = function () {
    l.start()
  }, x = function () {
    l.end()
  };
  return e.capInit = c,
  e.capGetTicket = o,
  e.capRefresh = r,
  e.capDestroy = i,
  e.CapObj = d,
  {
    capInit: c,
    capGetTicket: o,
    capRefresh: r,
    capDestroy: i
  }
});
