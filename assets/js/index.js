import {
    a as Sa
} from "./chunk.NdV9NAmH.js";
import {
    a as qm
} from "./chunk.C-y8QDGy.js";
import {
    a as Kb,
    b as yc
} from "./chunk.tVq2pLbq.js";
import "./chunk.2jmj7l5r.js";
import {
    a as ab
} from "./chunk.9o_ia7Wv.js";
import {
    a as kc
} from "./chunk.WQj5ZSQd.js";
import {
    a as Rb
} from "./chunk.sEsxgipK.js";
import {
    a as Ab,
    b as eb
} from "./chunk.UMr-yWWQ.js";
import {
    a as Ma,
    b as Pa,
    c as ya,
    e as la
} from "./chunk.iFD6NlhM.js";
import {
    a as jb,
    b as wb,
    c as Oa
} from "./chunk.C_jMmbhp.js";
import {
    a as ha,
    c as Ib,
    d as Qb,
    e as na,
    i as T,
    j as Q,
    l as U,
    m as ja
} from "./chunk.CeGTj4_V.js";
var Kj = T((a, b) => {
    (function(c, d) {
        typeof a === "object" && typeof b !== "undefined" ? d() : typeof define === "function" && define.amd ? define(d) : d()
    })(a, function() {
        "use strict";

        function c(e) {
            var f = !0,
                g = !1,
                i = null,
                j = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };

            function l(w) {
                return w && w !== document && w.nodeName !== "HTML" && w.nodeName !== "BODY" && "classList" in w && "contains" in w.classList ? !0 : !1
            }

            function o(w) {
                var x = w.type,
                    A = w.tagName;
                return A === "INPUT" && j[x] && !w.readOnly ? !0 : A === "TEXTAREA" && !w.readOnly ? !0 : w.isContentEditable ? !0 : !1
            }

            function r(w) {
                if (w.classList.contains("focus-visible")) return;
                w.classList.add("focus-visible"), w.setAttribute("data-focus-visible-added", "")
            }

            function n(w) {
                if (!w.hasAttribute("data-focus-visible-added")) return;
                w.classList.remove("focus-visible"), w.removeAttribute("data-focus-visible-added")
            }

            function q(w) {
                if (w.metaKey || w.altKey || w.ctrlKey) return;
                l(e.activeElement) && r(e.activeElement), f = !0
            }

            function h(w) {
                f = !1
            }

            function p(w) {
                if (!l(w.target)) return;
                (f || o(w.target)) && r(w.target)
            }

            function k(w) {
                if (!l(w.target)) return;
                (w.target.classList.contains("focus-visible") || w.target.hasAttribute("data-focus-visible-added")) && (g = !0, window.clearTimeout(i), i = window.setTimeout(function() {
                    g = !1
                }, 100), n(w.target))
            }

            function m(w) {
                document.visibilityState === "hidden" && (g && (f = !0), s())
            }

            function s() {
                document.addEventListener("mousemove", t), document.addEventListener("mousedown", t), document.addEventListener("mouseup", t), document.addEventListener("pointermove", t), document.addEventListener("pointerdown", t), document.addEventListener("pointerup", t), document.addEventListener("touchmove", t), document.addEventListener("touchstart", t), document.addEventListener("touchend", t)
            }

            function u() {
                document.removeEventListener("mousemove", t), document.removeEventListener("mousedown", t), document.removeEventListener("mouseup", t), document.removeEventListener("pointermove", t), document.removeEventListener("pointerdown", t), document.removeEventListener("pointerup", t), document.removeEventListener("touchmove", t), document.removeEventListener("touchstart", t), document.removeEventListener("touchend", t)
            }

            function t(w) {
                if (w.target.nodeName && w.target.nodeName.toLowerCase() === "html") return;
                f = !1, u()
            }
            document.addEventListener("keydown", q, !0), document.addEventListener("mousedown", h, !0), document.addEventListener("pointerdown", h, !0), document.addEventListener("touchstart", h, !0), document.addEventListener("visibilitychange", m, !0), s(), e.addEventListener("focus", p, !0), e.addEventListener("blur", k, !0), e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host ? e.host.setAttribute("data-js-focus-visible", "") : e.nodeType === Node.DOCUMENT_NODE && (document.documentElement.classList.add("js-focus-visible"), document.documentElement.setAttribute("data-js-focus-visible", ""))
        }
        if (typeof window !== "undefined" && typeof document !== "undefined") {
            window.applyFocusVisiblePolyfill = c;
            var d;
            try {
                d = new CustomEvent("focus-visible-polyfill-ready")
            } catch (e) {
                d = document.createEvent("CustomEvent"), d.initCustomEvent("focus-visible-polyfill-ready", !1, !1, {})
            }
            window.dispatchEvent(d)
        }
        typeof document !== "undefined" && c(document)
    })
});

function Ud() {
    return Ud = Object.assign || function(a) {
        for (var b = 1; b < arguments.length; b++) {
            var c = arguments[b];
            for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
        }
        return a
    }, Ud.apply(this, arguments)
}

function di(a) {
    return a.charAt(0) === "/"
}

function Ki(a, b) {
    for (var c = b, d = c + 1, e = a.length; d < e; c += 1, d += 1) a[c] = a[d];
    a.pop()
}

function dm(a, b) {
    b === void 0 && (b = "");
    var c = a && a.split("/") || [],
        d = b && b.split("/") || [],
        e = a && di(a),
        f = b && di(b),
        g = e || f;
    a && di(a) ? d = c : c.length && (d.pop(), d = d.concat(c));
    if (!d.length) return "/";
    var i;
    if (d.length) {
        var j = d[d.length - 1];
        i = j === "." || j === ".." || j === ""
    } else i = !1;
    for (var l = 0, o = d.length; o >= 0; o--) {
        var r = d[o];
        r === "." ? Ki(d, o) : r === ".." ? (Ki(d, o), l++) : l && (Ki(d, o), l--)
    }
    if (!g)
        for (; l--; l) d.unshift("..");
    g && d[0] !== "" && (!d[0] || !di(d[0])) && d.unshift("");
    var n = d.join("/");
    return i && n.substr(-1) !== "/" && (n += "/"), n
}
var Lj = dm;
var gm = !1;

function hm(a, b) {
    if (!gm) {
        if (a) return;
        var c = "Warning: " + b;
        typeof console !== "undefined" && console.warn(c);
        try {
            throw Error(c)
        } catch (d) {}
    }
}
var Cc = hm;
var em = !1,
    Zj = "Invariant failed";

function fm(a, b) {
    if (a) return;
    throw em ? new Error(Zj) : new Error(Zj + ": " + (b || ""))
}
var si = fm;

function Rk(a) {
    return a.charAt(0) === "/" ? a : "/" + a
}

function Mj(a, b) {
    return a.toLowerCase().indexOf(b.toLowerCase()) === 0 && "/?#".indexOf(a.charAt(b.length)) !== -1
}

function Sk(a, b) {
    return Mj(a, b) ? a.substr(b.length) : a
}

function Tk(a) {
    return a.charAt(a.length - 1) === "/" ? a.slice(0, -1) : a
}

function Vd(a) {
    var b = a || "/",
        c = "",
        d = "",
        e = b.indexOf("#");
    e !== -1 && (d = b.substr(e), b = b.substr(0, e));
    var f = b.indexOf("?");
    return f !== -1 && (c = b.substr(f), b = b.substr(0, f)), {
        pathname: b,
        search: c === "?" ? "" : c,
        hash: d === "#" ? "" : d
    }
}

function Uk(a) {
    var b = a.pathname,
        c = a.search,
        d = a.hash,
        e = b || "/";
    return c && c !== "?" && (e += c.charAt(0) === "?" ? c : "?" + c), d && d !== "#" && (e += d.charAt(0) === "#" ? d : "#" + d), e
}

function ti(a, b, c, d) {
    var e;
    typeof a === "string" ? (e = Vd(a), e.state = b) : (e = Ud({}, a), e.pathname === void 0 && (e.pathname = ""), e.search ? e.search.charAt(0) !== "?" && (e.search = "?" + e.search) : e.search = "", e.hash ? e.hash.charAt(0) !== "#" && (e.hash = "#" + e.hash) : e.hash = "", b !== void 0 && e.state === void 0 && (e.state = b));
    try {
        e.pathname = decodeURI(e.pathname)
    } catch (f) {
        throw f instanceof URIError ? new URIError('Pathname "' + e.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : f
    }
    return c && (e.key = c), d ? e.pathname ? e.pathname.charAt(0) !== "/" && (e.pathname = Lj(e.pathname, d.pathname)) : e.pathname = d.pathname : e.pathname || (e.pathname = "/"), e
}

function Vk() {
    var a = null;

    function b(g) {
        return Cc(a == null, "A history supports only one prompt at a time"), a = g,
            function() {
                a === g && (a = null)
            }
    }

    function c(g, i, j, l) {
        if (a != null) {
            var o = typeof a === "function" ? a(g, i) : a;
            typeof o === "string" ? typeof j === "function" ? j(o, l) : (Cc(!1, "A history needs a getUserConfirmation function in order to use a prompt message"), l(!0)) : l(o !== !1)
        } else l(!0)
    }
    var d = [];

    function e(g) {
        var i = !0;

        function j() {
            i && g.apply(void 0, arguments)
        }
        return d.push(j),
            function() {
                i = !1, d = d.filter(function(l) {
                    return l !== j
                })
            }
    }

    function f() {
        for (var g = arguments.length, i = new Array(g), j = 0; j < g; j++) i[j] = arguments[j];
        d.forEach(function(l) {
            return l.apply(void 0, i)
        })
    }
    return {
        setPrompt: b,
        confirmTransitionTo: c,
        appendListener: e,
        notifyListeners: f
    }
}
var Wk = !!(typeof window !== "undefined" && window.document && window.document.createElement);

function Xk(a, b) {
    b(window.confirm(a))
}

function Yk() {
    var a = window.navigator.userAgent;
    return (a.indexOf("Android 2.") !== -1 || a.indexOf("Android 4.0") !== -1) && a.indexOf("Mobile Safari") !== -1 && a.indexOf("Chrome") === -1 && a.indexOf("Windows Phone") === -1 ? !1 : window.history && "pushState" in window.history
}

function Zk() {
    return window.navigator.userAgent.indexOf("Trident") === -1
}

function _k(a) {
    return a.state === void 0 && navigator.userAgent.indexOf("CriOS") === -1
}
var Nj = "popstate",
    Oj = "hashchange";

function Pj() {
    try {
        return window.history.state || {}
    } catch (a) {
        return {}
    }
}

function Qj(a) {
    a === void 0 && (a = {}), Wk || si(!1, "Browser history needs a DOM");
    var b = window.history,
        c = Yk(),
        d = !Zk(),
        e = a,
        f = e.forceRefresh,
        g = f === void 0 ? !1 : f,
        i = e.getUserConfirmation,
        j = i === void 0 ? Xk : i,
        l = e.keyLength,
        o = l === void 0 ? 6 : l,
        r = a.basename ? Tk(Rk(a.basename)) : "";

    function n(E) {
        var G = E || {},
            N = G.key,
            K = G.state,
            M = window.location,
            O = M.pathname,
            P = M.search,
            R = M.hash,
            V = O + P + R;
        return Cc(!r || Mj(V, r), 'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "' + V + '" to begin with "' + r + '".'), r && (V = Sk(V, r)), ti(V, K, N)
    }

    function q() {
        return Math.random().toString(36).substr(2, o)
    }
    var h = Vk();

    function p(E) {
        Ud(C, E), C.length = b.length, h.notifyListeners(C.location, C.action)
    }

    function k(E) {
        if (_k(E)) return;
        u(n(E.state))
    }

    function m() {
        u(n(Pj()))
    }
    var s = !1;

    function u(E) {
        if (s) s = !1, p();
        else {
            var G = "POP";
            h.confirmTransitionTo(E, G, j, function(N) {
                N ? p({
                    action: G,
                    location: E
                }) : t(E)
            })
        }
    }

    function t(E) {
        var G = C.location,
            N = x.indexOf(G.key);
        N === -1 && (N = 0);
        var K = x.indexOf(E.key);
        K === -1 && (K = 0);
        var M = N - K;
        M && (s = !0, v(M))
    }
    var w = n(Pj()),
        x = [w.key];

    function A(E) {
        return r + Uk(E)
    }

    function D(E, G) {
        Cc(!(typeof E === "object" && E.state !== void 0 && G !== void 0), "You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");
        var N = "PUSH",
            K = ti(E, G, q(), C.location);
        h.confirmTransitionTo(K, N, j, function(M) {
            if (!M) return;
            var O = A(K),
                P = K.key,
                R = K.state;
            if (c) {
                b.pushState({
                    key: P,
                    state: R
                }, null, O);
                if (g) window.location.href = O;
                else {
                    var V = x.indexOf(C.location.key),
                        W = x.slice(0, V + 1);
                    W.push(K.key), x = W, p({
                        action: N,
                        location: K
                    })
                }
            } else Cc(R === void 0, "Browser history cannot push state in browsers that do not support HTML5 history"), window.location.href = O
        })
    }

    function y(E, G) {
        Cc(!(typeof E === "object" && E.state !== void 0 && G !== void 0), "You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");
        var N = "REPLACE",
            K = ti(E, G, q(), C.location);
        h.confirmTransitionTo(K, N, j, function(M) {
            if (!M) return;
            var O = A(K),
                P = K.key,
                R = K.state;
            if (c) {
                b.replaceState({
                    key: P,
                    state: R
                }, null, O);
                if (g) window.location.replace(O);
                else {
                    var V = x.indexOf(C.location.key);
                    V !== -1 && (x[V] = K.key), p({
                        action: N,
                        location: K
                    })
                }
            } else Cc(R === void 0, "Browser history cannot replace state in browsers that do not support HTML5 history"), window.location.replace(O)
        })
    }

    function v(E) {
        b.go(E)
    }

    function z() {
        v(-1)
    }

    function J() {
        v(1)
    }
    var F = 0;

    function B(E) {
        F += E, F === 1 && E === 1 ? (window.addEventListener(Nj, k), d && window.addEventListener(Oj, m)) : F === 0 && (window.removeEventListener(Nj, k), d && window.removeEventListener(Oj, m))
    }
    var H = !1;

    function L(E) {
        E === void 0 && (E = !1);
        var G = h.setPrompt(E);
        return H || (B(1), H = !0),
            function() {
                return H && (H = !1, B(-1)), G()
            }
    }

    function I(E) {
        var G = h.appendListener(E);
        return B(1),
            function() {
                B(-1), G()
            }
    }
    var C = {
        length: b.length,
        action: "POP",
        location: w,
        createHref: A,
        push: D,
        replace: y,
        go: v,
        goBack: z,
        goForward: J,
        block: L,
        listen: I
    };
    return C
}

function Zl(a) {
    for (var b = [], c = 0; c < a.length;) {
        var d = a[c];
        if (d === "*" || d === "+" || d === "?") {
            b.push({
                type: "MODIFIER",
                index: c,
                value: a[c++]
            });
            continue
        }
        if (d === "\\") {
            b.push({
                type: "ESCAPED_CHAR",
                index: c++,
                value: a[c++]
            });
            continue
        }
        if (d === "{") {
            b.push({
                type: "OPEN",
                index: c,
                value: a[c++]
            });
            continue
        }
        if (d === "}") {
            b.push({
                type: "CLOSE",
                index: c,
                value: a[c++]
            });
            continue
        }
        if (d === ":") {
            for (var e = "", f = c + 1; f < a.length;) {
                var g = a.charCodeAt(f);
                if (g >= 48 && g <= 57 || g >= 65 && g <= 90 || g >= 97 && g <= 122 || g === 95) {
                    e += a[f++];
                    continue
                }
                break
            }
            if (!e) throw new TypeError("Missing parameter name at " + c);
            b.push({
                type: "NAME",
                index: c,
                value: e
            }), c = f;
            continue
        }
        if (d === "(") {
            var i = 1,
                j = "",
                f = c + 1;
            if (a[f] === "?") throw new TypeError('Pattern cannot start with "?" at ' + f);
            for (; f < a.length;) {
                if (a[f] === "\\") {
                    j += a[f++] + a[f++];
                    continue
                }
                if (a[f] === ")") {
                    i--;
                    if (i === 0) {
                        f++;
                        break
                    }
                } else if (a[f] === "(") {
                    i++;
                    if (a[f + 1] !== "?") throw new TypeError("Capturing groups are not allowed at " + f)
                }
                j += a[f++]
            }
            if (i) throw new TypeError("Unbalanced pattern at " + c);
            if (!j) throw new TypeError("Missing pattern at " + c);
            b.push({
                type: "PATTERN",
                index: c,
                value: j
            }), c = f;
            continue
        }
        b.push({
            type: "CHAR",
            index: c,
            value: a[c++]
        })
    }
    return b.push({
        type: "END",
        index: c,
        value: ""
    }), b
}

function _l(a, b) {
    b === void 0 && (b = {});
    for (var c = Zl(a), d = b.prefixes, e = d === void 0 ? "./" : d, f = "[^" + Td(b.delimiter || "/#?") + "]+?", g = [], i = 0, j = 0, l = "", o = function(x) {
            if (j < c.length && c[j].type === x) return c[j++].value
        }, r = function(x) {
            var A = o(x);
            if (A !== void 0) return A;
            var D = c[j],
                y = D.type,
                v = D.index;
            throw new TypeError("Unexpected " + y + " at " + v + ", expected " + x)
        }, n = function() {
            for (var x = "", A; A = o("CHAR") || o("ESCAPED_CHAR");) x += A;
            return x
        }; j < c.length;) {
        var q = o("CHAR"),
            h = o("NAME"),
            p = o("PATTERN");
        if (h || p) {
            var k = q || "";
            e.indexOf(k) === -1 && (l += k, k = ""), l && (g.push(l), l = ""), g.push({
                name: h || i++,
                prefix: k,
                suffix: "",
                pattern: p || f,
                modifier: o("MODIFIER") || ""
            });
            continue
        }
        var m = q || o("ESCAPED_CHAR");
        if (m) {
            l += m;
            continue
        }
        l && (g.push(l), l = "");
        var s = o("OPEN");
        if (s) {
            var k = n(),
                u = o("NAME") || "",
                t = o("PATTERN") || "",
                w = n();
            r("CLOSE"), g.push({
                name: u || (t ? i++ : ""),
                pattern: u && !t ? f : t,
                prefix: k,
                suffix: w,
                modifier: o("MODIFIER") || ""
            });
            continue
        }
        r("END")
    }
    return g
}

function Td(a) {
    return a.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
}

function Yj(a) {
    return a && a.sensitive ? "" : "i"
}

function $l(a, b) {
    if (!b) return a;
    var c = a.source.match(/\((?!\?)/g);
    if (c)
        for (var d = 0; d < c.length; d++) b.push({
            name: d,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: ""
        });
    return a
}

function am(a, b, c) {
    var d = a.map(function(e) {
        return vi(e, b, c).source
    });
    return new RegExp("(?:" + d.join("|") + ")", Yj(c))
}

function bm(a, b, c) {
    return cm(_l(a, c), b, c)
}

function cm(a, b, c) {
    c === void 0 && (c = {});
    for (var d = c.strict, e = d === void 0 ? !1 : d, f = c.start, g = f === void 0 ? !0 : f, i = c.end, j = i === void 0 ? !0 : i, l = c.encode, o = l === void 0 ? function(x) {
            return x
        } : l, r = "[" + Td(c.endsWith || "") + "]|$", n = "[" + Td(c.delimiter || "/#?") + "]", q = g ? "^" : "", h = 0, p = a; h < p.length; h++) {
        var k = p[h];
        if (typeof k === "string") q += Td(o(k));
        else {
            var m = Td(o(k.prefix)),
                s = Td(o(k.suffix));
            if (k.pattern) {
                b && b.push(k);
                if (m || s)
                    if (k.modifier === "+" || k.modifier === "*") {
                        var u = k.modifier === "*" ? "?" : "";
                        q += "(?:" + m + "((?:" + k.pattern + ")(?:" + s + m + "(?:" + k.pattern + "))*)" + s + ")" + u
                    } else q += "(?:" + m + "(" + k.pattern + ")" + s + ")" + k.modifier;
                else q += "(" + k.pattern + ")" + k.modifier
            } else q += "(?:" + m + s + ")" + k.modifier
        }
    }
    if (j) e || (q += n + "?"), q += c.endsWith ? "(?=" + r + ")" : "$";
    else {
        var t = a[a.length - 1],
            w = typeof t === "string" ? n.indexOf(t[t.length - 1]) > -1 : t === void 0;
        e || (q += "(?:" + n + "(?=" + r + "))?"), w || (q += "(?=" + n + "|" + r + ")")
    }
    return new RegExp(q, Yj(c))
}

function vi(a, b, c) {
    return a instanceof RegExp ? $l(a, b) : Array.isArray(a) ? am(a, b, c) : bm(a, b, c)
}

function Sd(a) {
    return $k(a).path
}

function $k(a) {
    let b = a.replace(window.location.origin, "");
    return {
        path: b
    }
}

function al(a, b) {
    return new RegExp("^" + b + "(\\/|\\?|#|$)", "i").test(a)
}

function Hf(a, b) {
    return al(a, b) ? a.substr(b.length) : a
}

function wi(a) {
    return a.charAt(a.length - 1) === "/" ? a.slice(0, -1) : a
}

function bi(a) {
    if (a) {
        const b = a.getAttribute && a.getAttribute("xlink:href");
        if (typeof b === "string") return b;
        if (a.href) return a.href
    }
    return !1
}

function Tj(a, b) {
    const c = bi(b),
        d = a.which > 1 || a.metaKey || a.ctrlKey || a.shiftKey || a.altKey,
        e = b.target && b.target === "_blank",
        f = window.location.protocol !== b.protocol || window.location.hostname !== b.hostname,
        g = b.getAttribute("download") === "string",
        i = c && c.includes("mailto:"),
        j = !d && !e && !f && !g && !i;
    return j
}

function Rj() {
    function a(b, c) {
        b && b.leave(c), c.enter(b)
    }
    return {
        play: a
    }
}

function ui({
    defaultTransition: a = Rj(),
    basename: b = "",
    transitionParams: c = {}
} = {}) {
    const d = [],
        e = [],
        f = new Map();
    let g = Qj({
            basename: b
        }),
        i = null,
        j = null;

    function l(k, m) {
        Array.isArray(k) || (k = [k]), d.push({
            urls: k,
            fn: m
        })
    }

    function o(k, m, s, u = !0) {
        k = Array.isArray(k) ? k : [k], m = Array.isArray(m) ? m : [m], e.push({
            fromURLs: k,
            toURLs: m,
            fn: s,
            backAndForth: u
        })
    }

    function r(k, m) {
        const s = m();
        Array.isArray(k) || (k = [k]);
        for (let u = 0; u < k.length; u++) {
            let t = wi(k[u]);
            f.set(t, s)
        }
    }

    function n(k) {
        const {
            pathname: m,
            search: s,
            hash: u
        } = Vd(Sd(window.location.href)), t = Sd(k), {
            pathname: w,
            search: x,
            hash: A
        } = Vd(t);
        if (m === w && s === x && u === A) return;
        g.push(Hf(t, b))
    }
    async function q(k, m) {
        try {
            const s = wi(k.pathname);
            let u;
            if (f.has(s)) u = f.get(s);
            else
                for (let t = 0; t < d.length; t++) {
                    const {
                        urls: w,
                        fn: x
                    } = d[t];
                    for (let A = 0; A < w.length; A++) {
                        const D = [],
                            y = w[A] === "*" ? /^\/.*(?:\/)?$/i : vi(w[A], D),
                            v = s !== "" ? y.exec(s) : y.exec("/");
                        if (v && v.length > 0) {
                            const [z, ...J] = v, F = D.reduce((H, L, I) => (H[L.name] = J[I], H), {}), B = [...w, s].filter(H => !H.includes(":"));
                            await x({
                                urls: B,
                                url: s,
                                params: F
                            }), f.has(s) && (u = f.get(s));
                            break
                        }
                    }
                    if (u) break
                }
            if (u) {
                p.nextLocation = g.createHref(k);
                if (e.length > 0)
                    for (let t = 0; t < e.length; t++) {
                        const {
                            fromURLs: w,
                            toURLs: x,
                            backAndForth: A,
                            fn: D
                        } = e[t], y = w.includes("*") || w.includes(m), v = A && w.includes(s), z = x.includes("*") || x.includes(s), J = A && x.includes(m);
                        if (y && z || v && J) {
                            const F = await D();
                            let B = i,
                                H = u;
                            i = u, await F.play(B, H, c)
                        } else {
                            let F = i,
                                B = u;
                            i = u, await a.play(F, B, c)
                        }
                    } else {
                        let t = i,
                            w = u;
                        i = u, await a.play(t, w, c)
                    }
            } else console.error("Router :: View not found", f)
        } catch (s) {
            console.error(s)
        }
    }

    function h({
        clickEvents: k = !1,
        clickIgnoreClass: m = "no-router"
    } = {}) {
        p.clickIgnoreClass = m, j = Hf(Vd(Sd(window.location.href)).pathname, b), g.listen(s => {
            q(s, j), j = Hf(s.pathname, b)
        }), q(g.location, null), k && document.addEventListener("click", s => {
            let u = s.target;
            for (; u && !bi(u);) u = u.parentNode;
            if (u && Tj(s, u) && !u.classList.contains(p.clickIgnoreClass)) {
                s.preventDefault(), s.stopPropagation();
                const t = bi(u),
                    w = Sd(t);
                p.goTo(w)
            }
        })
    }
    const p = {
        nextLocation: null,
        clickIgnoreClass: "no-router",
        match: l,
        transition: o,
        view: r,
        listen: h,
        goTo: n,
        history: g,
        getPath: k => Hf(Sd(k), b)
    };
    return p
}

function Sj() {
    async function a(b, c, {
        loadView: d,
        appendView: e,
        removeView: f
    }) {
        b && (await b.leave(c), await d(), e(), f()), await c.enter(b)
    }
    return {
        play: a
    }
}

function Gf({
    wrapperQuery: a = () => document.querySelector(".lemonade-wrapper"),
    containerQuery: b = g => g.querySelector(".lemonade-container"),
    cacheEnabled: c = !0,
    defaultTransition: d = Sj(),
    transitionParams: e = {},
    basename: f = ""
} = {}) {
    let g = ui({
            defaultTransition: d,
            basename: f,
            transitionParams: { ...e,
                loadView: n,
                appendView: q,
                removeView: h,
                wrapperQuery: a,
                containerQuery: b
            }
        }),
        i = new Map(),
        j, l, o;

    function r({
        clickEvents: k = !1,
        clickIgnoreClass: m = "no-router"
    } = {}) {
        j = a(), l = b(j), g.listen({
            clickEvents: k,
            clickIgnoreClass: m
        });
        let s = g.getPath(window.location.href);
        c && !i.has(s) && i.set(s, document.documentElement.innerHTML)
    }
    async function n() {
        let k, {
                nextLocation: m
            } = g,
            s = g.getPath(m);
        c && p.cache.get(s) ? k = i.get(s) : (k = await Gf.fetch(m), c && i.set(s, k));
        const u = document.createElement("html");
        u.innerHTML = k;
        const t = u.querySelector("title");
        return t && (document.title = t.textContent), l = b(j), o = b(u), {
            prevContainer: l,
            nextContainer: o,
            temp: u
        }
    }

    function q() {
        j.appendChild(o)
    }

    function h() {
        j.removeChild(l)
    }
    const p = {
        listen: r,
        history: g.history,
        match: g.match,
        view: g.view,
        transition: g.transition,
        goTo: g.goTo,
        getPath: g.getPath,
        cache: i
    };
    return p
}
Gf.fetch = async a => {
    let b = await fetch(a),
        c = await b.text();
    return c
};
const oh = 1e3;

function zm(a) {
    let b = .1,
        c = 0,
        d = b,
        e = 0,
        f = 0,
        g = s();
    const i = 1,
        j = 1 / 60 * i,
        l = 1;
    let o = 5e-4,
        r = !1,
        n = 0;

    function q() {}

    function h({
        deltaTime: A
    }) {
        let D = k();
        m(D), r && m(5e-4 * .5)
    }

    function p({
        deltaTime: A
    }) {
        h({
            deltaTime: A
        }), c -= .1, c = ab(c, 0, b), e += f, d += e, f *= 0, d < 0 && (c = 0);
        let D = d * n;
        a.style.setProperty("--ty", `${-D}px`)
    }

    function k() {
        let A = c - d,
            D = A * A,
            y = 1;
        return A = Math.sign(A), A *= o, A
    }

    function m(A) {
        const D = A / g;
        f += D
    }

    function s() {
        return qm.default.range(.5, 1.5)
    }

    function u() {
        d = b, e = 0, f = 0, g = s(), r = !1
    }

    function t() {
        r = !0
    }

    function w() {
        n = window.innerWidth > window.innerHeight ? window.innerWidth * .5 : window.innerWidth * .7
    }
    const x = {
        update: p,
        reset: u,
        applyForce: m,
        goUp: t,
        resize: w
    };
    return q(), x
}

function Am(a) {
    let b = qm.default.range(.3, .45),
        c = qm.default.range(0, 360);

    function d({
        deltaTime: f
    }) {
        c += f * b, a.style.setProperty("--rotation", `${c}deg`)
    }
    const e = {
        update: d
    };
    return e
}

function Bm() {
    let a = document.querySelector(".transition");
    a.style.setProperty("--duration", `${oh}ms`);
    let b = [...document.querySelectorAll(".transition__eye")],
        c = a.querySelector(".transition__smiles"),
        d = b.map(h => zm(h)),
        e = b.map(h => Am(h.querySelector(".pupil__group"))),
        f, g, i, j = [
            ["red", "purple"],
            ["orange", "yellow"],
            ["green", "red"],
            ["purple", "orange"],
            ["blue", "green"],
            ["yellow", "purple"],
            ["purple", "green"],
            ["blue", "red"]
        ];
    la(() => {
        l(), d.forEach(h => {
            h.resize()
        })
    }, {
        fire: !0
    });

    function l() {
        let h = window.innerWidth > window.innerHeight ? window.innerHeight * .5 : window.innerWidth * .5,
            p = window.innerHeight - 1,
            k = `M 0 ${p} C 0 ${p} ${window.innerWidth*.5} ${p+h} ${window.innerWidth} ${p}`;
        c.innerHTML = `
            <svg class="transition__smile" style="--size: ${p+h}px;" viewBox="0 0 ${window.innerWidth} ${p+h}" xmlns="http://www.w3.org/2000/svg">
                <g class="smile__group">
                    <rect x="0" y="0" fill="var(--currentColor, var(--color-green))" class="secondary" width="${window.innerWidth}" height="${window.innerHeight}" />
                    <path
                        d="${k}"
                        fill="var(--currentColor, var(--color-green))" class="secondary" />
                </g>
                <g class="smile__group">
                    <rect x="0" y="0" fill="var(--currentColor, var(--color-blue))" class="primary" width="${window.innerWidth}" height="${window.innerHeight}" />
                    <path
                        d="${k}"
                        fill="var(--currentColor, var(--color-blue))" class="primary" />
                </g>
            </svg>
        `, g = [...c.querySelectorAll(".primary")], i = [...c.querySelectorAll(".secondary")]
    }
    async function o() {
        n(), d.forEach(h => {
            h.reset()
        }), a.classList.add("visible"), f = Q(q), await wb(oh + 1)
    }
    async function r() {
        d.forEach(h => {
            h.goUp()
        }), a.classList.remove("visible"), await wb(oh), f()
    }

    function n() {
        let h = document.querySelector(".view"),
            p = h.dataset.color ? h.dataset.color : null,
            k = p ? j.filter(([u]) => u !== p) : j,
            [m, s] = qm.default.pick(k);
        g.forEach(u => {
            u.style.setProperty("--currentColor", `var(--color-${m}`)
        }), i.forEach(u => {
            u.style.setProperty("--currentColor", `var(--color-${s}`)
        })
    }

    function q({
        deltaTime: h
    }) {
        for (let p = 0; p < e.length; p++) e[p].update({
            deltaTime: h
        });
        for (let p = 0; p < d.length; p++) d[p].update({
            deltaTime: h
        })
    }
    return {
        display: o,
        hide: r
    }
}
var dk = Bm;
const Cp = U(ja());

function pm() {
    let a = document.querySelector(".header"),
        b = document.querySelector(".nav"),
        c = document.querySelector(".nav__toggle"),
        d = [...b.querySelectorAll(".nav__link")],
        e = d.map(u => u.querySelector(".nav__sticker")),
        f = -1,
        g = d[0],
        i = b.querySelector(".nav__item--contact .nav__link"),
        j = ["blue", "red", "orange", "purple"],
        l = 0,
        o = {
            isNavOpen: !1
        };

    function r() {
        function u(t) {
            d.forEach(w => {
                w !== t && w.blur()
            })
        }
        d.forEach((t, w) => {
            e[w] && Rb(t, {
                $target: e[w],
                rangeX: [-5, 5],
                rangeY: [-5, 5]
            }), ya(t, x => {
                k(x, t, w), u(t)
            }), Pa(t, async () => {
                window.location.href !== t.href && await wb(oh), t === g && Qb.update(x => !x), p()
            })
        }), Qb.subscribe(t => {
            t ? g.classList.add("active") : g.classList.remove("active")
        }), yc(i), ya(a, () => {
            Ib.set(!0)
        }), na(a, () => {
            Ib.set(!1)
        }), Pa(c, t => {
            t.preventDefault(), o.isNavOpen ? p() : h()
        }), la(s, {
            fire: !0
        }), window.router.history.listen(({
            pathname: t
        }) => {
            n(t)
        }), n(window.router.getPath(window.location.href))
    }

    function n(u) {
        d.forEach(t => {
            let w = window.router.getPath(t.href) === u;
            if (w) {
                if (u === "/") return;
                t.classList.add("active")
            } else t.classList.remove("active")
        })
    }

    function q(u) {
        u.preventDefault()
    }

    function h() {
        c.classList.add("open"), document.documentElement.addEventListener("touchmove", q, {
            passive: !1
        }), b.classList.add("visible"), o.isNavOpen = !0
    }

    function p() {
        c.classList.remove("open"), document.documentElement.removeEventListener("touchmove", q, {
            passive: !1
        }), b.classList.remove("visible"), o.isNavOpen = !1
    }

    function k(u, t, w) {
        if (jb()) return;
        let x = e[w];
        if (x && f !== w) {
            f = w, l++, l %= j.length;
            let A = j[l];
            x.style.setProperty("--currentColor", `var(--color-${A})`);
            let D = Cp.default.range(-10, 10);
            x.style.setProperty("--rotation", `${D}deg`)
        }
    }

    function m() {
        a.classList.add("visible")
    }

    function s() {}
    return r(), {
        enter: m
    }
}
var ck = pm;

function $m({
    element: a = document.documentElement,
    target: b = window,
    smooth: c = !1,
    smoothElement: d = a
}) {
    let e = {
            x: 0,
            y: 0,
            sx: 0,
            sy: 0,
            xLast: 0,
            yLast: 0,
            ease: .1
        },
        f = {
            width: 0,
            height: 0
        },
        g = {
            x: 0,
            y: 0,
            sx: 0,
            sy: 0,
            ease: .05,
            xUp: !1,
            yUp: !1
        },
        i = {
            x: 0,
            y: 0
        },
        j = {
            x: 0,
            y: 0,
            sx: 0,
            sy: 0,
            ease: .05
        },
        l = {
            isScrolling: !1,
            isLocked: !1,
            isForced: !1
        },
        o = null,
        r = 0,
        n = [],
        q = [],
        h = null,
        p = null,
        k = -1;

    function m() {
        const L = c ? d : b;
        b.addEventListener("scroll", D);
        if (c) {
            let K = [];
            document.addEventListener("keydown", M => {
                if ((M.keyCode || M.which) == 9) {
                    K = [...document.querySelectorAll("a, button")];
                    let O = K.filter(R => {
                        let V = window.getComputedStyle(R),
                            W = V.display === "none",
                            Z = V.visibility === "hidden",
                            aa = V.pointerEvents === "none";
                        return !(W || Z || aa)
                    });
                    k += M.shiftKey ? -1 : 1;
                    let P = O[k];
                    if (P) {
                        M.preventDefault(), M.stopPropagation();
                        let R = P.getBoundingClientRect(),
                            V = R.top + a.scrollTop,
                            W = !P.classList.contains("nav__link") && !P.classList.contains("logo__link");
                        if (W && document.body.clientHeight - 1 > window.innerHeight && V > window.innerHeight * .5) {
                            let Z = R.top + a.scrollTop - window.innerHeight * .5;
                            a.scrollTop = Z, document.body.scrollTop = Z, y(0, Z)
                        }
                        P.focus({
                            preventScroll: !0
                        })
                    }
                }
            }), window.addEventListener("blur", () => {
                k = -1
            })
        }
        const I = "onwheel" in document,
            C = "onmousewheel" in document,
            E = "onkeydown" in document,
            G = "ontouchstart" in document;

        function N() {
            l.isScrolling = !0, r = ha()
        }
        I && a.addEventListener("wheel", N, {
            passive: !0
        }), C && a.addEventListener("mousewheel", N, {
            passive: !0
        }), E && a.addEventListener("keydown", N), G && a.addEventListener("touchmove", N, {
            passive: !0
        }), H.isSmooth && w(d), Q(F), la(A, {
            fire: !0
        })
    }

    function s() {
        a.scrollTop = 0, document.body.scrollTop = 0, y(0, 0), k = -1
    }

    function u(L) {
        L.preventDefault()
    }
    let t;

    function w(L) {
        document.documentElement.classList.add("has-smooth-scroll"), H.isSmooth = !0;
        let I = L.offsetHeight;
        h = document.createElement("div"), h.style.width = "100%", h.style.height = `${I}px`, h.classList.add("scroll-height");
        const C = document.createElement("div");
        C.style.position = "fixed", C.style.top = "0", C.style.left = "0", C.style.height = "calc(100 * var(--vh, 1vh))", C.style.overflow = "hidden", C.classList.add("scroll-wrapper");
        const E = document.createElement("div");
        E.style.width = "100%", E.classList.add("scroll-content"), C.appendChild(E);
        let G = [];
        for (let K = 0; K < L.children.length; K++) G.push(L.children[K]), E.appendChild(L.children[K].cloneNode(!0));
        for (let K = 0; K < G.length; K++) G[K].parentNode.removeChild(G[K]);
        L.style.position = "relative", L.appendChild(h), L.appendChild(C), C.style.width = `${h.offsetWidth}px`, t = C, p = E;
        const N = new ResizeObserver(K => {
            K.forEach(M => {
                if (M.target === E) {
                    let O = h.offsetWidth,
                        P = M.contentRect.height;
                    f.width = O, f.height = P, C.style.width = `${f.width}px`, h.style.height = `${f.height}px`, y(H.position.x, H.position.y)
                }
            })
        });
        N.observe(E, {
            childList: !0,
            attributes: !0,
            characterData: !0,
            subtree: !0,
            attributeFilter: ["class"]
        })
    }

    function x() {
        if (l.isForced || !H.isSmooth) return
    }

    function A() {
        if (H.isSmooth) {
            let L = window.innerWidth;
            f.width = L, t.style.width = `${f.width}px`
        }
    }

    function D(L) {
        e.x = a.scrollLeft, e.y = window.scrollY, i.x = e.xLast <= e.x ? 1 : -1, i.y = e.yLast <= e.y ? 1 : -1
    }

    function y(L, I, C = !1) {
        i.x = L <= e.x ? 1 : -1, i.y = I <= e.y ? 1 : -1, e.x = e.sx = e.xLast = L, e.y = e.sy = e.yLast = I, C && (o.x = L, o.y = I), F()
    }

    function v(L) {
        return forced = !0, h.style.height = `${L}px`, () => {
            forced = !1
        }
    }

    function z() {
        if (l.isLocked) return;
        o = {
            x: e.x,
            y: e.y
        }, l.isLocked = !0;
        const L = window.innerWidth - document.documentElement.clientWidth;
        document.documentElement.style.setProperty("--scrollBarGap", `${L}px`), document.getElementById("root").style.overflow = "hidden", document.getElementById("root").style.height = `${window.innerHeight}px`, a.addEventListener("touchmove", u, {
            passive: !1
        })
    }

    function J() {
        if (!H.isLocked) return;
        H.isLocked = !1, document.documentElement.style.setProperty("--scrollBarGap", "0px"), document.getElementById("root").style.overflow = null, document.getElementById("root").style.height = null, a.removeEventListener("touchmove", u, {
            passive: !1
        }), y(o.x, o.y)
    }

    function F({
        deltaTime: L
    } = {}) {
        if (l.isLocked) return;
        const I = 1;
        e.sx += (e.x - e.sx) * e.ease * I, e.sy += (e.y - e.sy) * e.ease * I;
        const C = e.x - e.xLast,
            E = e.y - e.yLast;
        g.xUp = C - g.sx > 0, g.yUp = E - g.sy > 0, g.x = C, g.y = E, g.sx += (g.x - g.sx) * g.ease * I, g.sy += (g.y - g.sy) * g.ease * I, e.xLast = e.x, e.yLast = e.y, j.sx += (j.x - j.sx) * j.ease * I, j.sy += (j.y - j.sy) * j.ease * I, ha() - r > 200 && (l.isScrolling = !1);
        if (H.isSmooth)
            if (n.length > 0)
                for (let G = 0; G < n.length; G++) {
                    let N = n[G],
                        K = H.position.sx,
                        M = -H.position.sy,
                        O = H.position.sy + window.innerHeight >= N.top && H.position.sy <= N.bottom;
                    N.position.x = K, N.position.y = M;
                    const P = `translate3d(0, ${M.toFixed()}px, 0)`;
                    P !== n[G].transform && (n[G].transform = P, n[G].domElement.style.transform = P)
                } else {
                    const G = -e.sx,
                        N = -e.sy,
                        K = `translate3d(${G.toFixed()}px,${N.toFixed()}px, 0)`;
                    p.style.transform = K
                }
        for (let G = 0; G < q.length; G++) q[G]()
    }

    function B(L, {
        speed: I = 1,
        delay: C = 0,
        onEnter: E = Ma,
        onLeave: G = Ma
    } = {}) {
        let N = L.getBoundingClientRect(),
            K = N.top,
            M = K + N.height,
            O = !1;
        return n.push({
            transform: "",
            domElement: L,
            position: {
                x: 0,
                y: 0
            },
            top: K,
            bottom: M,
            visible: O,
            onEnter: E,
            onLeave: G,
            options: {
                speed: I,
                delay: C
            }
        }), () => {
            let P = n.findIndex(({
                domElement: R
            }) => L === R);
            P >= 0 && n.splice(P, 1)
        }
    }
    const H = {
        velocity: g,
        position: e,
        dimensions: f,
        direction: i,
        isScrolling: () => l.isScrolling,
        isLocked: () => l.isLocked,
        isSmooth: c,
        refresh: x,
        listeners: q,
        bind: B,
        lock: z,
        unlock: J,
        set: y,
        force: v,
        smooth: c,
        progress: j,
        reset: s
    };
    return m(), H
}
var nk = $m;
const lm = function() {
    let a, b;

    function c({
        onHide: e
    } = {}) {
        b = e, a = document.querySelector(".splashscreen")
    }

    function d() {
        a.classList.add("hidden"), b();
        let e = Kb(() => {
            e(), e = null, document.documentElement.classList.add("loaded")
        }, 2e3)
    }
    return {
        init: c,
        hide: d
    }
}();
var ei = lm;
const Wm = function() {
    let a = new Set();

    function b() {
        d()
    }

    function c(e) {
        const f = e.href ? e.href : e.id;
        return new Promise((g, i) => {
            function j() {
                g(), e.removeEventListener("load", j), e.removeEventListener("error", l)
            }

            function l(o) {
                console.error(o), i(o)
            }
            e.addEventListener("load", j), e.addEventListener("error", l), document.head.appendChild(e)
        })
    }
    async function d(e = document.head) {
        let f = [...e.querySelectorAll('link[rel="stylesheet"]')],
            g = [];
        f.forEach(j => {
            const {
                href: l
            } = j;
            a.has(l) || (a.add(l), e !== document.head && g.push(j))
        });
        let i = [...e.querySelectorAll("style")];
        return i.forEach(j => {
            const {
                id: l
            } = j;
            a.has(l) || (a.add(l), e !== document.head && g.push(j))
        }), Promise.all(g.map(j => c(j)))
    }
    return {
        init: b,
        check: d
    }
}();
var fi = Wm;
const im = window.requestIdleCallback || function(a) {
    const b = Date.now();
    return setTimeout(() => a({
        didTimeout: !1,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - b))
    }), 1)
};

function jm() {
    const a = [];
    let b = !1;
    const c = () => a.sort((g, i) => i._priority - g._priority),
        d = () => (im(e, {
            timeout: 50
        }), b = !0);

    function e(g) {
        for (;
            (g.timeRemaining() > 0 || g.didTimeout) && a.length > 0;) {
            const i = a.shift();
            i._scheduled = !1, i(...i._args)
        }
        a.length > 0 ? d() : b = !1
    }

    function f(g) {
        g._scheduled ? (g._priority++, c()) : (a.push(g), g._scheduled = !0, g._priority = 0), a.length && !b && d()
    }
    return function(g, {
        force: i = !1,
        priority: j = 0
    } = {}) {
        return (...l) => {
            g._args = l, i ? (g._scheduled = !1, g(...l)) : g._scheduled ? (g._priority++, c()) : (a.push(g), g._scheduled = !0, g._priority = j, j !== 0 && c()), a.length && !b && d()
        }
    }
}
var ip = jm();
const an = window.requestIdleCallback || function(a) {
    const b = Date.now();
    return setTimeout(() => a({
        didTimeout: !1,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - b))
    }), 1)
};
var hi = an;

function cn(a) {
    let b = !1;
    return c => new Promise((d, e) => {
        function f() {
            hi(g, {
                timeout: 50
            }), b = !0
        }

        function g(i) {
            for (;
                (i.timeRemaining() > 0 || i.didTimeout) && c.length > 0;) {
                const j = c.shift();
                let l = performance.now();
                a(j), console.log(`${performance.now()-l}ms`, j)
            }
            c.length > 0 ? f() : (b = !1, d())
        }
        c.length && !b && f()
    })
}
var _j = cn;

function km() {
    async function a(c, d) {
        let e = [...d.children];
        d.innerHTML = "", c.appendChild(d);

        function f(i) {
            d.appendChild(i)
        }
        let g = performance.now();
        await _j(f)(e), console.log(`${performance.now()-g}ms`, args)
    }
    async function b(c, d, {
        loadView: e,
        removeView: f,
        appendView: g,
        transition: i
    }) {
        if (c) {
            await i.display(), eb.invalidate(), await Oa(), await c.leave(d);
            const {
                temp: j,
                nextContainer: l,
                prevContainer: o
            } = await e();
            await fi.check(j.querySelector("head"));
            const r = j.querySelector("body");
            document.body.removeAttribute("class"), r.classList.forEach(q => {
                document.body.classList.add(q)
            });
            let n = o.parentNode;
            f(), g(), window.scroll.reset()
        }
        await d.enter(c), c ? (await Oa(), d.load && eb.register(d.load()), d.preload && await eb.register(d.preload()), i.hide()) : (d.load && await eb.register(d.load()), d.preload && await eb.register(d.preload()), ei.hide())
    }
    return {
        play: b
    }
}
var $j = km;
let wj;

function ak() {
    return wj || (wj = kc("https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.3/lottie_light.min.js")), wj
}
const up = U(ja());

function nm() {
    let a = document.querySelector(".logo__link"),
        b = a.querySelector(".logo__svg"),
        c = b.querySelector("svg"),
        d = {
            isLoaded: !1,
            isPlaying: !1,
            lastTimePlayed: 0
        };
    const e = 15e3;
    async function f() {
        await ak(), d.isLoaded = !0
    }

    function g() {
        if (jb()) return;
        i()
    }
    async function i() {
        d.isLoaded || await f(), h()
    }
    let j = 4,
        l = -1,
        o = ["", "", "/", ""],
        r = up.default.shuffle(o),
        n = [],
        q = [];

    function h() {
        if (d.isPlaying) return;
        l++, l %= j, d.isPlaying = !0;
        if (n[l]) c.style.opacity = 0, q[l].style.opacity = 1, n[l].goToAndPlay(0);
        else {
            let p = r[l];
            lottie.setQuality("low");
            let k = lottie.loadAnimation({
                container: b,
                path: p,
                renderer: "svg",
                loop: !1,
                autoplay: !0,
                name: "Hello World"
            });
            k.addEventListener("DOMLoaded", m => {
                let s = b.children[b.children.length - 1];
                c.style.opacity = 0, q[l] = s, k.addEventListener("complete", () => {
                    c.style.opacity = 1, s.style.opacity = 0, d.lastTimePlayed = ha(), d.isPlaying = !1
                })
            }), n[l] = k
        }
    }
    ya(a, g), Sa(a, p => {
        window.location.pathname === "/" && (p.preventDefault(), i())
    }, {
        passive: !1
    }), hi(() => {
        let p = Kb(async () => {
            await f(), h(), p(), p = null
        }, 1e3)
    }), Q(() => {
        ha() - d.lastTimePlayed > e && !d.isPlaying && d.isLoaded && !Ab() && h()
    })
}
var bk = nm;

function ok() {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1
}
const Sp = U(Kj());

function Om() {
    return new Promise((a, b) => {
        document.addEventListener("DOMContentLoaded", () => {
            a()
        })
    })
}
async function Pm() {
    window.ResizeObserver || await kc("/assets/js/polyfills/ResizeObserver.js")
}

function Qm() {
    let a = window.innerWidth,
        b = document.documentElement.clientHeight;

    function c() {
        a = window.innerWidth, b = document.documentElement.clientHeight, document.documentElement.style.setProperty("--viewport-h", `${b}px`), document.documentElement.style.setProperty("--vh", `${b/100}px`)
    }
    c(), la(() => {
        let d = document.documentElement.clientHeight,
            e = d > window.innerWidth,
            f = window.innerHeight / b,
            g = window.innerHeight - b;
        document.documentElement.style.setProperty("--viewport-scale", f), document.documentElement.style.setProperty("--viewport-delta", `${g}px`), (window.innerWidth !== a || Math.abs(d - b) > 100 && !e) && c()
    })
}
async function Rm() {
    Qm(), fi.init(), await Om(), await Pm();
    let a = window.scroll = nk({
            smooth: !ok(),
            smoothElement: document.querySelector(".scroll-container")
        }),
        b = dk(),
        c = window.router = Gf({
            wrapperQuery: () => document.querySelector(".main"),
            containerQuery: f => f.querySelector(".view"),
            defaultTransition: $j(),
            transitionParams: {
                transition: b
            }
        });
    window.history.scrollRestoration = "manual", c.match(["", "/"], async ({
        url: f
    }) => {
        const {
            default: g
        } = await
        import ("./views/Home.js");
        c.view(f, () => g())
    }), c.match("/lab", async ({
        url: f
    }) => {
        const {
            default: g
        } = await
        import ("./views/Lab.js");
        c.view(f, () => g())
    }), c.match("/about", async ({
        url: f
    }) => {
        const {
            default: g
        } = await
        import ("./views/About.js");
        c.view(f, () => g())
    }), c.match("/work/:slug", async ({
        url: f,
        params: g
    }) => {
        const {
            default: i
        } = await
        import ("./views/Work.js");
        c.view(f, () => i({
            slug: g.slug
        }))
    }), c.match("*", async ({
        url: f
    }) => {
        const {
            default: g
        } = await
        import ("./views/NotFound.js");
        c.view(f, () => g())
    });
    let d = ck(),
        e = bk();
    ei.init({
        onHide: () => {
            d.enter()
        }
    }), c.listen({
        clickEvents: !0
    })
}
Rm();