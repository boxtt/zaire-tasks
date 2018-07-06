var pt_logout = {
  ret: 0,
  appDomain: "",
  mainDomain: "",
  httpWhiteDomain: {
    "qq.com": 1,
    "soso.com": 1,
    "paipai.com": 1,
    "tenpay.com": 1,
    "taotao.com": 1,
    "tencent.com": 1,
    "oa.com": 1,
    "webdev.com": 1,
    "3366.com": 1,
    "imqq.com": 1,
    "pengyou.com": 1,
    "qplus.com": 1,
    "qzone.com": 1,
    "server.com": 1,
    "myapp.com": 1,
    "kuyoo.cn": 1,
    "weiyun.com": 1,
    "wechatapp.com": 1,
    "51buy.com": 1,
    "yixun.com": 1,
    "qcloud.com": 1,
    "wechat.com": 1,
    "weishi.com": 1,
    "superfix.cn": 1,
    "bkcloud.cc": 1,
    "bkclouds.cc": 1,
    "xinyong.com.cn": 1,
    "we.game": 1
  },
  getCookie: function (o) {
    var t;
    return function (o) {
      if (!o) return o;
      for (; o != unescape(o);) o = unescape(o);
      for (var t = ["<", ">", "'", '"', "%3c", "%3e", "%27", "%22", "%253c", "%253e", "%2527", "%2522"], e = ["&#x3c;", "&#x3e;", "&#x27;", "&#x22;", "%26%23x3c%3B", "%26%23x3e%3B", "%26%23x27%3B", "%26%23x22%3B", "%2526%2523x3c%253B", "%2526%2523x3e%253B", "%2526%2523x27%253B", "%2526%2523x22%253B"], n = 0; n < t.length; n++) o = o.replace(new RegExp(t[n], "gi"), e[n]);
      return o
    }((t = document.cookie.match(RegExp("(^|;\\s*)" + o + "=([^;]*)(;|$)"))) ? unescape(t[2]) : "")
  },
  delCookie: function (o, t, e) {
    document.cookie = o + "=; expires=Mon, 26 Jul 1997 05:00:00 GMT; path=" + (e || "/") + "; " + (t ? "domain=" + t + ";" : "")
  },
  jsonp: function (o) {
    var t = document.createElement("script");
    t.setAttribute("src", o), document.getElementsByTagName("head")[0].appendChild(t), t.onerror = function () {
      t.onerror = null, pt_logout.set_ret(0, "")
    }
  },
  nlog: function (o, t, e) {
    if (Math.random() <= (e || 1)) {
      var n = location.href, p = encodeURIComponent(o + "|_|" + n + "|_|" + window.navigator.userAgent),
      c = "//ui.ptlogin2.qq.com/cgi-bin/report?mid=" + t + "&msg=" + p + "&v=" + Math.random();
      (new Image).src = c
    }
  },
  init: function () {
    var o = location.hostname.match(/\w*\.(cc|com|cn|com\.cn|game)$/);
    pt_logout.mainDomain = o ? o[0] : "", pt_logout.httpWhiteDomain[pt_logout.mainDomain] || pt_logout.nlog("公司外部域名引用logout", "350448");
    var t = location.hostname.match(/\w+(\.\w+)\.(cc|com|cn|com\.cn|game)$/);
    pt_logout.appDomain = t ? t[0] : "", "qq.com" != pt_logout.mainDomain && (pt_logout.appDomain = pt_logout.mainDomain), pt_logout.nlog("logout pv", "365716", .05)
  },
  getLogoutUrl: function (o) {
    var t = pt_logout.getCookie("pt4_token"), e = pt_logout.getCookie("skey"), n = pt_logout.time33(e),
    p = pt_logout.getCookie("ptcz"), c = pt_logout.hash33(p), i = "", l = o ? "qq.com" : pt_logout.mainDomain;
    if (i = ("https:" == location.protocol ? "https://ssl." : "http://") + "ptlogin2." + l + "/logout?", "https:" === location.protocol) switch (l) {
      case"tencent.com":
      case"bkclouds.cc":
      case"bkcloud.cc":
        i = "https://ptlogin2." + l + "/logout?"
    }
    return i += "pt4_token=" + t + "&pt4_hkey=" + n + "&pt4_ptcz=" + c + "&deep_logout=1"
  },
  time33: function (o) {
    for (var t = 0, e = 0, n = o.length; e < n; e++) t = 33 * t + o.charCodeAt(e);
    return t % 4294967296
  },
  hash33: function (o) {
    for (var t = 0, e = 0, n = o.length; e < n; ++e) t += (t << 5) + o.charCodeAt(e);
    return 2147483647 & t
  },
  clearCookie: function (o) {
    o = o || pt_logout.appDomain, pt_logout.delCookie("p_uin", o), pt_logout.delCookie("p_skey", o), pt_logout.delCookie("p_luin", o), pt_logout.delCookie("p_lskey", o), pt_logout.delCookie("pt4_token", o), pt_logout.delCookie("pt_mbkey", pt_logout.mainDomain || "qq.com"), "" != pt_logout.appDomain && "" != pt_logout.getCookie("skey_m") && (pt_logout.delCookie("uin_m", pt_logout.appDomain), pt_logout.delCookie("skey_m", pt_logout.appDomain))
  },
  set_ret: function (o, t) {
    try {
      var e = pt_logout.getCookie("pt4_token");
      pt_logout.clearCookie(t), o > 0 || (pt_logout.delCookie("uin", pt_logout.mainDomain), pt_logout.delCookie("skey", pt_logout.mainDomain), pt_logout.nlog("logout fail", "285851", .1)), "function" == typeof pt_logout.callback && pt_logout.callback(2), "" != t && t != pt_logout.appDomain && pt_logout.nlog("domain unsame:n=" + o + ":pt4_token=" + e + ":cgi_domain=" + t + ":js_domain=" + pt_logout.appDomain, "285852", .1)
    } catch (o) {
      return
    }
  },
  logout: function (o, t) {
    pt_logout.init();
    var e = pt_logout.getCookie("pt4_token"), n = pt_logout.getCookie("skey"), p = pt_logout.getCookie("ptcz");
    "function" == typeof o && (pt_logout.callback = o);
    var c = pt_logout.getLogoutUrl(t);
    e || n || p ? pt_logout.jsonp(c) : ("function" == typeof o && o(2), pt_logout.nlog("logout without cookie", 365715))
  },
  logoutQQCom: function (o) {
    pt_logout.logout(o, !0), pt_logout.delCookie("uin", pt_logout.mainDomain), pt_logout.delCookie("skey", pt_logout.mainDomain)
  }
};