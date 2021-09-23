import {
    a as $a
} from "./chunk.X9R5jYKj.js";
import {
    a as ab
} from "./chunk.9o_ia7Wv.js";
import {
    a as Ma,
    d as ia,
    f as za
} from "./chunk.iFD6NlhM.js";
import {
    a as sa
} from "./chunk.mxUo6q2y.js";
import {
    i as T,
    j as Q,
    l as U,
    m as ja
} from "./chunk.CeGTj4_V.js";
var od = T((b, c) => {
    function a(d) {
        var e = 1.70158 * 1.525;
        return (d *= 2) < 1 ? .5 * (d * d * ((e + 1) * d - e)) : .5 * ((d -= 2) * d * ((e + 1) * d + e) + 2)
    }
    c.exports = a
});
var pd = T((b, c) => {
    function a(d) {
        var e = 1.70158;
        return d * d * ((e + 1) * d - e)
    }
    c.exports = a
});
var qd = T((b, c) => {
    function a(d) {
        var e = 1.70158;
        return --d * d * ((e + 1) * d + e) + 1
    }
    c.exports = a
});
var Vb = T((b, c) => {
    function a(d) {
        var e = 4 / 11,
            f = 8 / 11,
            g = 9 / 10,
            i = 4356 / 361,
            j = 35442 / 1805,
            l = 16061 / 1805,
            o = d * d;
        return d < e ? 7.5625 * o : d < f ? 9.075 * o - 9.9 * d + 3.4 : d < g ? i * o - j * d + l : 10.8 * d * d - 20.52 * d + 10.72
    }
    c.exports = a
});
var rd = T((c, d) => {
    var a = Vb();

    function b(e) {
        return e < .5 ? .5 * (1 - a(1 - e * 2)) : .5 * a(e * 2 - 1) + .5
    }
    d.exports = b
});
var sd = T((c, d) => {
    var a = Vb();

    function b(e) {
        return 1 - a(1 - e)
    }
    d.exports = b
});
var td = T((b, c) => {
    function a(d) {
        return (d *= 2) < 1 ? -.5 * (Math.sqrt(1 - d * d) - 1) : .5 * (Math.sqrt(1 - (d -= 2) * d) + 1)
    }
    c.exports = a
});
var ud = T((b, c) => {
    function a(d) {
        return 1 - Math.sqrt(1 - d * d)
    }
    c.exports = a
});
var vd = T((b, c) => {
    function a(d) {
        return Math.sqrt(1 - --d * d)
    }
    c.exports = a
});
var wd = T((b, c) => {
    function a(d) {
        return d < .5 ? 4 * d * d * d : .5 * Math.pow(2 * d - 2, 3) + 1
    }
    c.exports = a
});
var xd = T((b, c) => {
    function a(d) {
        return d * d * d
    }
    c.exports = a
});
var yd = T((b, c) => {
    function a(d) {
        var e = d - 1;
        return e * e * e + 1
    }
    c.exports = a
});
var zd = T((b, c) => {
    function a(d) {
        return d < .5 ? .5 * Math.sin(13 * Math.PI / 2 * 2 * d) * Math.pow(2, 10 * (2 * d - 1)) : .5 * Math.sin(-13 * Math.PI / 2 * (2 * d - 1 + 1)) * Math.pow(2, -10 * (2 * d - 1)) + 1
    }
    c.exports = a
});
var Ad = T((b, c) => {
    function a(d) {
        return Math.sin(13 * d * Math.PI / 2) * Math.pow(2, 10 * (d - 1))
    }
    c.exports = a
});
var Bd = T((b, c) => {
    function a(d) {
        return Math.sin(-13 * (d + 1) * Math.PI / 2) * Math.pow(2, -10 * d) + 1
    }
    c.exports = a
});
var Cd = T((b, c) => {
    function a(d) {
        return d === 0 || d === 1 ? d : d < .5 ? .5 * Math.pow(2, 20 * d - 10) : -.5 * Math.pow(2, 10 - d * 20) + 1
    }
    c.exports = a
});
var Dd = T((b, c) => {
    function a(d) {
        return d === 0 ? d : Math.pow(2, 10 * (d - 1))
    }
    c.exports = a
});
var Ed = T((b, c) => {
    function a(d) {
        return d === 1 ? d : 1 - Math.pow(2, -10 * d)
    }
    c.exports = a
});
var Fd = T((b, c) => {
    function a(d) {
        return d
    }
    c.exports = a
});
var Gd = T((b, c) => {
    function a(d) {
        return d /= .5, d < 1 ? .5 * d * d : (d--, -.5 * (d * (d - 2) - 1))
    }
    c.exports = a
});
var Hd = T((b, c) => {
    function a(d) {
        return d * d
    }
    c.exports = a
});
var Id = T((b, c) => {
    function a(d) {
        return -d * (d - 2)
    }
    c.exports = a
});
var Jd = T((b, c) => {
    function a(d) {
        return d < .5 ? 8 * Math.pow(d, 4) : -8 * Math.pow(d - 1, 4) + 1
    }
    c.exports = a
});
var Kd = T((b, c) => {
    function a(d) {
        return Math.pow(d, 4)
    }
    c.exports = a
});
var Ld = T((b, c) => {
    function a(d) {
        return Math.pow(d - 1, 3) * (1 - d) + 1
    }
    c.exports = a
});
var Md = T((b, c) => {
    function a(d) {
        return (d *= 2) < 1 ? .5 * d * d * d * d * d : .5 * ((d -= 2) * d * d * d * d + 2)
    }
    c.exports = a
});
var Nd = T((b, c) => {
    function a(d) {
        return d * d * d * d * d
    }
    c.exports = a
});
var Od = T((b, c) => {
    function a(d) {
        return --d * d * d * d * d + 1
    }
    c.exports = a
});
var Pd = T((b, c) => {
    function a(d) {
        return -.5 * (Math.cos(Math.PI * d) - 1)
    }
    c.exports = a
});
var Qd = T((b, c) => {
    function a(d) {
        var e = Math.cos(d * Math.PI * .5);
        return Math.abs(e) < 1e-14 ? 1 : 1 - e
    }
    c.exports = a
});
var Rd = T((b, c) => {
    function a(d) {
        return Math.sin(d * Math.PI / 2)
    }
    c.exports = a
});
var Wb = T((a, b) => {
    b.exports = {
        backInOut: od(),
        backIn: pd(),
        backOut: qd(),
        bounceInOut: rd(),
        bounceIn: sd(),
        bounceOut: Vb(),
        circInOut: td(),
        circIn: ud(),
        circOut: vd(),
        cubicInOut: wd(),
        cubicIn: xd(),
        cubicOut: yd(),
        elasticInOut: zd(),
        elasticIn: Ad(),
        elasticOut: Bd(),
        expoInOut: Cd(),
        expoIn: Dd(),
        expoOut: Ed(),
        linear: Fd(),
        quadInOut: Gd(),
        quadIn: Hd(),
        quadOut: Id(),
        quartInOut: Jd(),
        quartIn: Kd(),
        quartOut: Ld(),
        quintInOut: Md(),
        quintIn: Nd(),
        quintOut: Od(),
        sineInOut: Pd(),
        sineIn: Qd(),
        sineOut: Rd()
    }
});
var Jc = T((p, k) => {
    var a = 4,
        b = .001,
        c = 1e-7,
        d = 10,
        e = 11,
        f = 1 / (e - 1),
        g = typeof Float32Array === "function";

    function i(m, s) {
        return 1 - 3 * s + 3 * m
    }

    function j(m, s) {
        return 3 * s - 6 * m
    }

    function l(m) {
        return 3 * m
    }

    function o(m, s, u) {
        return ((i(s, u) * m + j(s, u)) * m + l(s)) * m
    }

    function r(m, s, u) {
        return 3 * i(s, u) * m * m + 2 * j(s, u) * m + l(s)
    }

    function n(m, s, u, t, w) {
        var x, A, D = 0;
        do A = s + (u - s) / 2, x = o(A, t, w) - m, x > 0 ? u = A : s = A; while (Math.abs(x) > c && ++D < d);
        return A
    }

    function q(m, s, u, t) {
        for (var w = 0; w < a; ++w) {
            var x = r(s, u, t);
            if (x === 0) return s;
            var A = o(s, u, t) - m;
            s -= A / x
        }
        return s
    }

    function h(m) {
        return m
    }
    k.exports = function m(s, u, t, w) {
        if (!(0 <= s && s <= 1 && 0 <= t && t <= 1)) throw new Error("bezier x values must be in [0, 1] range");
        if (s === u && t === w) return h;
        for (var x = g ? new Float32Array(e) : new Array(e), A = 0; A < e; ++A) x[A] = o(A * f, s, t);

        function D(y) {
            for (var v = 0, z = 1, J = e - 1; z !== J && x[z] <= y; ++z) v += f;
            --z;
            var F = (y - x[z]) / (x[z + 1] - x[z]),
                B = v + F * f,
                H = r(B, s, t);
            return H >= b ? q(y, B, s, t) : H === 0 ? B : n(y, v, v + f, s, t)
        }
        return function y(v) {
            return v === 0 ? 0 : v === 1 ? 1 : o(D(v), u, w)
        }
    }
});

function jc(a, b, c) {
    return (1 - c) * a + c * b
}

function Yc(a) {
    let b = a[0],
        c = a[1],
        d = a[2];
    return Math.sqrt(b * b + c * c + d * d)
}

function vc(a, b) {
    return a[0] = b[0], a[1] = b[1], a[2] = b[2], a
}

function Tg(a, b, c, d) {
    return a[0] = b, a[1] = c, a[2] = d, a
}

function Wc(a, b, c) {
    return a[0] = b[0] + c[0], a[1] = b[1] + c[1], a[2] = b[2] + c[2], a
}

function Xc(a, b, c) {
    return a[0] = b[0] - c[0], a[1] = b[1] - c[1], a[2] = b[2] - c[2], a
}

function Ug(a, b, c) {
    return a[0] = b[0] * c[0], a[1] = b[1] * c[1], a[2] = b[2] * c[2], a
}

function Vg(a, b, c) {
    return a[0] = b[0] / c[0], a[1] = b[1] / c[1], a[2] = b[2] / c[2], a
}

function wc(a, b, c) {
    return a[0] = b[0] * c, a[1] = b[1] * c, a[2] = b[2] * c, a
}

function Xg(a, b) {
    let c = b[0] - a[0],
        d = b[1] - a[1],
        e = b[2] - a[2];
    return Math.sqrt(c * c + d * d + e * e)
}

function Yg(a, b) {
    let c = b[0] - a[0],
        d = b[1] - a[1],
        e = b[2] - a[2];
    return c * c + d * d + e * e
}

function Zc(a) {
    let b = a[0],
        c = a[1],
        d = a[2];
    return b * b + c * c + d * d
}

function Zg(a, b) {
    return a[0] = -b[0], a[1] = -b[1], a[2] = -b[2], a
}

function Wg(a, b) {
    return a[0] = 1 / b[0], a[1] = 1 / b[1], a[2] = 1 / b[2], a
}

function xc(a, b) {
    let c = b[0],
        d = b[1],
        e = b[2],
        f = c * c + d * d + e * e;
    return f > 0 && (f = 1 / Math.sqrt(f)), a[0] = b[0] * f, a[1] = b[1] * f, a[2] = b[2] * f, a
}

function $c(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
}

function _c(a, b, c) {
    let d = b[0],
        e = b[1],
        f = b[2],
        g = c[0],
        i = c[1],
        j = c[2];
    return a[0] = e * j - f * i, a[1] = f * g - d * j, a[2] = d * i - e * g, a
}

function dh(a, b, c, d) {
    let e = b[0],
        f = b[1],
        g = b[2];
    return a[0] = e + d * (c[0] - e), a[1] = f + d * (c[1] - f), a[2] = g + d * (c[2] - g), a
}

function $g(a, b, c) {
    let d = b[0],
        e = b[1],
        f = b[2],
        g = c[3] * d + c[7] * e + c[11] * f + c[15];
    return g = g || 1, a[0] = (c[0] * d + c[4] * e + c[8] * f + c[12]) / g, a[1] = (c[1] * d + c[5] * e + c[9] * f + c[13]) / g, a[2] = (c[2] * d + c[6] * e + c[10] * f + c[14]) / g, a
}

function ah(a, b, c) {
    let d = b[0],
        e = b[1],
        f = b[2],
        g = c[3] * d + c[7] * e + c[11] * f + c[15];
    return g = g || 1, a[0] = (c[0] * d + c[4] * e + c[8] * f) / g, a[1] = (c[1] * d + c[5] * e + c[9] * f) / g, a[2] = (c[2] * d + c[6] * e + c[10] * f) / g, a
}

function bh(a, b, c) {
    let d = b[0],
        e = b[1],
        f = b[2],
        g = c[0],
        i = c[1],
        j = c[2],
        l = c[3],
        o = i * f - j * e,
        r = j * d - g * f,
        n = g * e - i * d,
        q = i * n - j * r,
        h = j * o - g * n,
        p = g * r - i * o,
        k = l * 2;
    return o *= k, r *= k, n *= k, q *= 2, h *= 2, p *= 2, a[0] = d + o + q, a[1] = e + r + h, a[2] = f + n + p, a
}
const ch = function() {
    const a = [0, 0, 0],
        b = [0, 0, 0];
    return function(c, d) {
        vc(a, c), vc(b, d), xc(a, a), xc(b, b);
        let e = $c(a, b);
        return e > 1 ? 0 : e < -1 ? Math.PI : Math.acos(e)
    }
}();

function _g(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2]
}
class ma extends Array {
    constructor(a = 0, b = a, c = a) {
        return super(a, b, c), this
    }
    get x() {
        return this[0]
    }
    get y() {
        return this[1]
    }
    get z() {
        return this[2]
    }
    set x(a) {
        this[0] = a
    }
    set y(a) {
        this[1] = a
    }
    set z(a) {
        this[2] = a
    }
    set(a, b = a, c = a) {
        return a.length ? this.copy(a) : (Tg(this, a, b, c), this)
    }
    copy(a) {
        return vc(this, a), this
    }
    add(a, b) {
        return b ? Wc(this, a, b) : Wc(this, this, a), this
    }
    sub(a, b) {
        return b ? Xc(this, a, b) : Xc(this, this, a), this
    }
    multiply(a) {
        return a.length ? Ug(this, this, a) : wc(this, this, a), this
    }
    divide(a) {
        return a.length ? Vg(this, this, a) : wc(this, this, 1 / a), this
    }
    inverse(a = this) {
        return Wg(this, a), this
    }
    len() {
        return Yc(this)
    }
    distance(a) {
        return a ? Xg(this, a) : Yc(this)
    }
    squaredLen() {
        return Zc(this)
    }
    squaredDistance(a) {
        return a ? Yg(this, a) : Zc(this)
    }
    negate(a = this) {
        return Zg(this, a), this
    }
    cross(a, b) {
        return b ? _c(this, a, b) : _c(this, this, a), this
    }
    scale(a) {
        return wc(this, this, a), this
    }
    normalize() {
        return xc(this, this), this
    }
    dot(a) {
        return $c(this, a)
    }
    equals(a) {
        return _g(this, a)
    }
    applyMatrix4(a) {
        return $g(this, this, a), this
    }
    scaleRotateMatrix4(a) {
        return ah(this, this, a), this
    }
    applyQuaternion(a) {
        return bh(this, this, a), this
    }
    angle(a) {
        return ch(this, a)
    }
    lerp(a, b) {
        return dh(this, this, a, b), this
    }
    clone() {
        return new ma(this[0], this[1], this[2])
    }
    fromArray(a, b = 0) {
        return this[0] = a[b], this[1] = a[b + 1], this[2] = a[b + 2], this
    }
    toArray(a = [], b = 0) {
        return a[b] = this[0], a[b + 1] = this[1], a[b + 2] = this[2], a
    }
    transformDirection(a) {
        const b = this[0],
            c = this[1],
            d = this[2];
        return this[0] = a[0] * b + a[4] * c + a[8] * d, this[1] = a[1] * b + a[5] * c + a[9] * d, this[2] = a[2] * b + a[6] * c + a[10] * d, this.normalize()
    }
}

function fh(a, b) {
    return a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3], a
}

function eh(a, b, c, d, e) {
    return a[0] = b, a[1] = c, a[2] = d, a[3] = e, a
}

function jh(a, b, c) {
    return a[0] = b[0] + c[0], a[1] = b[1] + c[1], a[2] = b[2] + c[2], a[3] = b[3] + c[3], a
}

function kh(a, b, c) {
    return a[0] = b[0] * c, a[1] = b[1] * c, a[2] = b[2] * c, a[3] = b[3] * c, a
}

function nh(a) {
    let b = a[0],
        c = a[1],
        d = a[2],
        e = a[3];
    return Math.sqrt(b * b + c * c + d * d + e * e)
}

function gh(a, b) {
    let c = b[0],
        d = b[1],
        e = b[2],
        f = b[3],
        g = c * c + d * d + e * e + f * f;
    return g > 0 && (g = 1 / Math.sqrt(g)), a[0] = c * g, a[1] = d * g, a[2] = e * g, a[3] = f * g, a
}

function lh(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
}

function mh(a, b, c, d) {
    let e = b[0],
        f = b[1],
        g = b[2],
        i = b[3];
    return a[0] = e + d * (c[0] - e), a[1] = f + d * (c[1] - f), a[2] = g + d * (c[2] - g), a[3] = i + d * (c[3] - i), a
}

function qg(a) {
    return a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 1, a
}

function Cg(a, b, c) {
    c = c * .5;
    let d = Math.sin(c);
    return a[0] = d * b[0], a[1] = d * b[1], a[2] = d * b[2], a[3] = Math.cos(c), a
}

function Rc(a, b, c) {
    let d = b[0],
        e = b[1],
        f = b[2],
        g = b[3],
        i = c[0],
        j = c[1],
        l = c[2],
        o = c[3];
    return a[0] = d * o + g * i + e * l - f * j, a[1] = e * o + g * j + f * i - d * l, a[2] = f * o + g * l + d * j - e * i, a[3] = g * o - d * i - e * j - f * l, a
}

function sg(a, b, c) {
    c *= .5;
    let d = b[0],
        e = b[1],
        f = b[2],
        g = b[3],
        i = Math.sin(c),
        j = Math.cos(c);
    return a[0] = d * j + g * i, a[1] = e * j + f * i, a[2] = f * j - e * i, a[3] = g * j - d * i, a
}

function tg(a, b, c) {
    c *= .5;
    let d = b[0],
        e = b[1],
        f = b[2],
        g = b[3],
        i = Math.sin(c),
        j = Math.cos(c);
    return a[0] = d * j - f * i, a[1] = e * j + g * i, a[2] = f * j + d * i, a[3] = g * j - e * i, a
}

function ug(a, b, c) {
    c *= .5;
    let d = b[0],
        e = b[1],
        f = b[2],
        g = b[3],
        i = Math.sin(c),
        j = Math.cos(c);
    return a[0] = d * j + e * i, a[1] = e * j - d * i, a[2] = f * j + g * i, a[3] = g * j - f * i, a
}

function Dg(a, b, c, d) {
    let e = b[0],
        f = b[1],
        g = b[2],
        i = b[3],
        j = c[0],
        l = c[1],
        o = c[2],
        r = c[3],
        n, q, h, p, k;
    return q = e * j + f * l + g * o + i * r, q < 0 && (q = -q, j = -j, l = -l, o = -o, r = -r), 1 - q > 1e-6 ? (n = Math.acos(q), h = Math.sin(n), p = Math.sin((1 - d) * n) / h, k = Math.sin(d * n) / h) : (p = 1 - d, k = d), a[0] = p * e + k * j, a[1] = p * f + k * l, a[2] = p * g + k * o, a[3] = p * i + k * r, a
}

function vg(a, b) {
    let c = b[0],
        d = b[1],
        e = b[2],
        f = b[3],
        g = c * c + d * d + e * e + f * f,
        i = g ? 1 / g : 0;
    return a[0] = -c * i, a[1] = -d * i, a[2] = -e * i, a[3] = f * i, a
}

function wg(a, b) {
    return a[0] = -b[0], a[1] = -b[1], a[2] = -b[2], a[3] = b[3], a
}

function Ag(a, b) {
    let c = b[0] + b[4] + b[8],
        d;
    if (c > 0) d = Math.sqrt(c + 1), a[3] = .5 * d, d = .5 / d, a[0] = (b[5] - b[7]) * d, a[1] = (b[6] - b[2]) * d, a[2] = (b[1] - b[3]) * d;
    else {
        let e = 0;
        b[4] > b[0] && (e = 1), b[8] > b[e * 3 + e] && (e = 2);
        let f = (e + 1) % 3,
            g = (e + 2) % 3;
        d = Math.sqrt(b[e * 3 + e] - b[f * 3 + f] - b[g * 3 + g] + 1), a[e] = .5 * d, d = .5 / d, a[3] = (b[f * 3 + g] - b[g * 3 + f]) * d, a[f] = (b[f * 3 + e] + b[e * 3 + f]) * d, a[g] = (b[g * 3 + e] + b[e * 3 + g]) * d
    }
    return a
}

function Bg(a, b, c = "YXZ") {
    let d = Math.sin(b[0] * .5),
        e = Math.cos(b[0] * .5),
        f = Math.sin(b[1] * .5),
        g = Math.cos(b[1] * .5),
        i = Math.sin(b[2] * .5),
        j = Math.cos(b[2] * .5);
    return c === "XYZ" ? (a[0] = d * g * j + e * f * i, a[1] = e * f * j - d * g * i, a[2] = e * g * i + d * f * j, a[3] = e * g * j - d * f * i) : c === "YXZ" ? (a[0] = d * g * j + e * f * i, a[1] = e * f * j - d * g * i, a[2] = e * g * i - d * f * j, a[3] = e * g * j + d * f * i) : c === "ZXY" ? (a[0] = d * g * j - e * f * i, a[1] = e * f * j + d * g * i, a[2] = e * g * i + d * f * j, a[3] = e * g * j - d * f * i) : c === "ZYX" ? (a[0] = d * g * j - e * f * i, a[1] = e * f * j + d * g * i, a[2] = e * g * i - d * f * j, a[3] = e * g * j + d * f * i) : c === "YZX" ? (a[0] = d * g * j + e * f * i, a[1] = e * f * j + d * g * i, a[2] = e * g * i - d * f * j, a[3] = e * g * j - d * f * i) : c === "XZY" && (a[0] = d * g * j - e * f * i, a[1] = e * f * j - d * g * i, a[2] = e * g * i + d * f * j, a[3] = e * g * j + d * f * i), a
}
const xg = fh,
    rg = eh,
    Rl = jh,
    Sl = kh,
    zg = lh,
    Tl = mh,
    Ul = nh,
    yg = gh;
class Of extends Array {
    constructor(a = 0, b = 0, c = 0, d = 1) {
        return super(a, b, c, d), this.onChange = () => {}, this
    }
    get x() {
        return this[0]
    }
    get y() {
        return this[1]
    }
    get z() {
        return this[2]
    }
    get w() {
        return this[3]
    }
    set x(a) {
        this[0] = a, this.onChange()
    }
    set y(a) {
        this[1] = a, this.onChange()
    }
    set z(a) {
        this[2] = a, this.onChange()
    }
    set w(a) {
        this[3] = a, this.onChange()
    }
    identity() {
        return qg(this), this.onChange(), this
    }
    set(a, b, c, d) {
        return a.length ? this.copy(a) : (rg(this, a, b, c, d), this.onChange(), this)
    }
    rotateX(a) {
        return sg(this, this, a), this.onChange(), this
    }
    rotateY(a) {
        return tg(this, this, a), this.onChange(), this
    }
    rotateZ(a) {
        return ug(this, this, a), this.onChange(), this
    }
    inverse(a = this) {
        return vg(this, a), this.onChange(), this
    }
    conjugate(a = this) {
        return wg(this, a), this.onChange(), this
    }
    copy(a) {
        return xg(this, a), this.onChange(), this
    }
    normalize(a = this) {
        return yg(this, a), this.onChange(), this
    }
    multiply(a, b) {
        return b ? Rc(this, a, b) : Rc(this, this, a), this.onChange(), this
    }
    dot(a) {
        return zg(this, a)
    }
    fromMatrix3(a) {
        return Ag(this, a), this.onChange(), this
    }
    fromEuler(a) {
        return Bg(this, a, a.order), this
    }
    fromAxisAngle(a, b) {
        return Cg(this, a, b), this
    }
    slerp(a, b) {
        return Dg(this, this, a, b), this
    }
    fromArray(a, b = 0) {
        return this[0] = a[b], this[1] = a[b + 1], this[2] = a[b + 2], this[3] = a[b + 3], this
    }
    toArray(a = [], b = 0) {
        return a[b] = this[0], a[b + 1] = this[1], a[b + 2] = this[2], a[b + 3] = this[3], a
    }
}
const Ji = 1e-6;

function fg(a, b) {
    return a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3], a[4] = b[4], a[5] = b[5], a[6] = b[6], a[7] = b[7], a[8] = b[8], a[9] = b[9], a[10] = b[10], a[11] = b[11], a[12] = b[12], a[13] = b[13], a[14] = b[14], a[15] = b[15], a
}

function ag(a, b, c, d, e, f, g, i, j, l, o, r, n, q, h, p, k) {
    return a[0] = b, a[1] = c, a[2] = d, a[3] = e, a[4] = f, a[5] = g, a[6] = i, a[7] = j, a[8] = l, a[9] = o, a[10] = r, a[11] = n, a[12] = q, a[13] = h, a[14] = p, a[15] = k, a
}

function eg(a) {
    return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 1, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = 1, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, a
}

function jg(a, b) {
    let c = b[0],
        d = b[1],
        e = b[2],
        f = b[3],
        g = b[4],
        i = b[5],
        j = b[6],
        l = b[7],
        o = b[8],
        r = b[9],
        n = b[10],
        q = b[11],
        h = b[12],
        p = b[13],
        k = b[14],
        m = b[15],
        s = c * i - d * g,
        u = c * j - e * g,
        t = c * l - f * g,
        w = d * j - e * i,
        x = d * l - f * i,
        A = e * l - f * j,
        D = o * p - r * h,
        y = o * k - n * h,
        v = o * m - q * h,
        z = r * k - n * p,
        J = r * m - q * p,
        F = n * m - q * k,
        B = s * F - u * J + t * z + w * v - x * y + A * D;
    return B ? (B = 1 / B, a[0] = (i * F - j * J + l * z) * B, a[1] = (e * J - d * F - f * z) * B, a[2] = (p * A - k * x + m * w) * B, a[3] = (n * x - r * A - q * w) * B, a[4] = (j * v - g * F - l * y) * B, a[5] = (c * F - e * v + f * y) * B, a[6] = (k * t - h * A - m * u) * B, a[7] = (o * A - n * t + q * u) * B, a[8] = (g * J - i * v + l * D) * B, a[9] = (d * v - c * J - f * D) * B, a[10] = (h * x - p * t + m * s) * B, a[11] = (r * t - o * x - q * s) * B, a[12] = (i * y - g * z - j * D) * B, a[13] = (c * z - d * y + e * D) * B, a[14] = (p * u - h * w - k * s) * B, a[15] = (o * w - r * u + n * s) * B, a) : null
}

function pg(a) {
    let b = a[0],
        c = a[1],
        d = a[2],
        e = a[3],
        f = a[4],
        g = a[5],
        i = a[6],
        j = a[7],
        l = a[8],
        o = a[9],
        r = a[10],
        n = a[11],
        q = a[12],
        h = a[13],
        p = a[14],
        k = a[15],
        m = b * g - c * f,
        s = b * i - d * f,
        u = b * j - e * f,
        t = c * i - d * g,
        w = c * j - e * g,
        x = d * j - e * i,
        A = l * h - o * q,
        D = l * p - r * q,
        y = l * k - n * q,
        v = o * p - r * h,
        z = o * k - n * h,
        J = r * k - n * p;
    return m * J - s * z + u * v + t * y - w * D + x * A
}

function Pc(a, b, c) {
    let d = b[0],
        e = b[1],
        f = b[2],
        g = b[3],
        i = b[4],
        j = b[5],
        l = b[6],
        o = b[7],
        r = b[8],
        n = b[9],
        q = b[10],
        h = b[11],
        p = b[12],
        k = b[13],
        m = b[14],
        s = b[15],
        u = c[0],
        t = c[1],
        w = c[2],
        x = c[3];
    return a[0] = u * d + t * i + w * r + x * p, a[1] = u * e + t * j + w * n + x * k, a[2] = u * f + t * l + w * q + x * m, a[3] = u * g + t * o + w * h + x * s, u = c[4], t = c[5], w = c[6], x = c[7], a[4] = u * d + t * i + w * r + x * p, a[5] = u * e + t * j + w * n + x * k, a[6] = u * f + t * l + w * q + x * m, a[7] = u * g + t * o + w * h + x * s, u = c[8], t = c[9], w = c[10], x = c[11], a[8] = u * d + t * i + w * r + x * p, a[9] = u * e + t * j + w * n + x * k, a[10] = u * f + t * l + w * q + x * m, a[11] = u * g + t * o + w * h + x * s, u = c[12], t = c[13], w = c[14], x = c[15], a[12] = u * d + t * i + w * r + x * p, a[13] = u * e + t * j + w * n + x * k, a[14] = u * f + t * l + w * q + x * m, a[15] = u * g + t * o + w * h + x * s, a
}

function bg(a, b, c) {
    let d = c[0],
        e = c[1],
        f = c[2],
        g, i, j, l, o, r, n, q, h, p, k, m;
    return b === a ? (a[12] = b[0] * d + b[4] * e + b[8] * f + b[12], a[13] = b[1] * d + b[5] * e + b[9] * f + b[13], a[14] = b[2] * d + b[6] * e + b[10] * f + b[14], a[15] = b[3] * d + b[7] * e + b[11] * f + b[15]) : (g = b[0], i = b[1], j = b[2], l = b[3], o = b[4], r = b[5], n = b[6], q = b[7], h = b[8], p = b[9], k = b[10], m = b[11], a[0] = g, a[1] = i, a[2] = j, a[3] = l, a[4] = o, a[5] = r, a[6] = n, a[7] = q, a[8] = h, a[9] = p, a[10] = k, a[11] = m, a[12] = g * d + o * e + h * f + b[12], a[13] = i * d + r * e + p * f + b[13], a[14] = j * d + n * e + k * f + b[14], a[15] = l * d + q * e + m * f + b[15]), a
}

function dg(a, b, c) {
    let d = c[0],
        e = c[1],
        f = c[2];
    return a[0] = b[0] * d, a[1] = b[1] * d, a[2] = b[2] * d, a[3] = b[3] * d, a[4] = b[4] * e, a[5] = b[5] * e, a[6] = b[6] * e, a[7] = b[7] * e, a[8] = b[8] * f, a[9] = b[9] * f, a[10] = b[10] * f, a[11] = b[11] * f, a[12] = b[12], a[13] = b[13], a[14] = b[14], a[15] = b[15], a
}

function cg(a, b, c, d) {
    let e = d[0],
        f = d[1],
        g = d[2],
        i = Math.hypot(e, f, g),
        j, l, o, r, n, q, h, p, k, m, s, u, t, w, x, A, D, y, v, z, J, F, B, H;
    return Math.abs(i) < Ji ? null : (i = 1 / i, e *= i, f *= i, g *= i, j = Math.sin(c), l = Math.cos(c), o = 1 - l, r = b[0], n = b[1], q = b[2], h = b[3], p = b[4], k = b[5], m = b[6], s = b[7], u = b[8], t = b[9], w = b[10], x = b[11], A = e * e * o + l, D = f * e * o + g * j, y = g * e * o - f * j, v = e * f * o - g * j, z = f * f * o + l, J = g * f * o + e * j, F = e * g * o + f * j, B = f * g * o - e * j, H = g * g * o + l, a[0] = r * A + p * D + u * y, a[1] = n * A + k * D + t * y, a[2] = q * A + m * D + w * y, a[3] = h * A + s * D + x * y, a[4] = r * v + p * z + u * J, a[5] = n * v + k * z + t * J, a[6] = q * v + m * z + w * J, a[7] = h * v + s * z + x * J, a[8] = r * F + p * B + u * H, a[9] = n * F + k * B + t * H, a[10] = q * F + m * B + w * H, a[11] = h * F + s * B + x * H, b !== a && (a[12] = b[12], a[13] = b[13], a[14] = b[14], a[15] = b[15]), a)
}

function mg(a, b) {
    return a[0] = b[12], a[1] = b[13], a[2] = b[14], a
}

function Qc(a, b) {
    let c = b[0],
        d = b[1],
        e = b[2],
        f = b[4],
        g = b[5],
        i = b[6],
        j = b[8],
        l = b[9],
        o = b[10];
    return a[0] = Math.hypot(c, d, e), a[1] = Math.hypot(f, g, i), a[2] = Math.hypot(j, l, o), a
}

function ng(a) {
    let b = a[0],
        c = a[1],
        d = a[2],
        e = a[4],
        f = a[5],
        g = a[6],
        i = a[8],
        j = a[9],
        l = a[10];
    const o = b * b + c * c + d * d,
        r = e * e + f * f + g * g,
        n = i * i + j * j + l * l;
    return Math.sqrt(Math.max(o, r, n))
}
const lg = function() {
    const a = [0, 0, 0];
    return function(b, c) {
        let d = a;
        Qc(d, c);
        let e = 1 / d[0],
            f = 1 / d[1],
            g = 1 / d[2],
            i = c[0] * e,
            j = c[1] * f,
            l = c[2] * g,
            o = c[4] * e,
            r = c[5] * f,
            n = c[6] * g,
            q = c[8] * e,
            h = c[9] * f,
            p = c[10] * g,
            k = i + r + p,
            m = 0;
        return k > 0 ? (m = Math.sqrt(k + 1) * 2, b[3] = .25 * m, b[0] = (n - h) / m, b[1] = (q - l) / m, b[2] = (j - o) / m) : i > r && i > p ? (m = Math.sqrt(1 + i - r - p) * 2, b[3] = (n - h) / m, b[0] = .25 * m, b[1] = (j + o) / m, b[2] = (q + l) / m) : r > p ? (m = Math.sqrt(1 + r - i - p) * 2, b[3] = (q - l) / m, b[0] = (j + o) / m, b[1] = .25 * m, b[2] = (n + h) / m) : (m = Math.sqrt(1 + p - i - r) * 2, b[3] = (j - o) / m, b[0] = (q + l) / m, b[1] = (n + h) / m, b[2] = .25 * m), b
    }
}();

function kg(a, b, c, d) {
    let e = b[0],
        f = b[1],
        g = b[2],
        i = b[3],
        j = e + e,
        l = f + f,
        o = g + g,
        r = e * j,
        n = e * l,
        q = e * o,
        h = f * l,
        p = f * o,
        k = g * o,
        m = i * j,
        s = i * l,
        u = i * o,
        t = d[0],
        w = d[1],
        x = d[2];
    return a[0] = (1 - (h + k)) * t, a[1] = (n + u) * t, a[2] = (q - s) * t, a[3] = 0, a[4] = (n - u) * w, a[5] = (1 - (r + k)) * w, a[6] = (p + m) * w, a[7] = 0, a[8] = (q + s) * x, a[9] = (p - m) * x, a[10] = (1 - (r + h)) * x, a[11] = 0, a[12] = c[0], a[13] = c[1], a[14] = c[2], a[15] = 1, a
}

function ig(a, b) {
    let c = b[0],
        d = b[1],
        e = b[2],
        f = b[3],
        g = c + c,
        i = d + d,
        j = e + e,
        l = c * g,
        o = d * g,
        r = d * i,
        n = e * g,
        q = e * i,
        h = e * j,
        p = f * g,
        k = f * i,
        m = f * j;
    return a[0] = 1 - r - h, a[1] = o + m, a[2] = n - k, a[3] = 0, a[4] = o - m, a[5] = 1 - l - h, a[6] = q + p, a[7] = 0, a[8] = n + k, a[9] = q - p, a[10] = 1 - l - r, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, a
}

function gg(a, b, c, d, e) {
    let f = 1 / Math.tan(b / 2),
        g = 1 / (d - e);
    return a[0] = f / c, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = f, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = (e + d) * g, a[11] = -1, a[12] = 0, a[13] = 0, a[14] = 2 * e * d * g, a[15] = 0, a
}

function hg(a, b, c, d, e, f, g) {
    let i = 1 / (b - c),
        j = 1 / (d - e),
        l = 1 / (f - g);
    return a[0] = -2 * i, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = -2 * j, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = 2 * l, a[11] = 0, a[12] = (b + c) * i, a[13] = (e + d) * j, a[14] = (g + f) * l, a[15] = 1, a
}

function og(a, b, c, d) {
    let e = b[0],
        f = b[1],
        g = b[2],
        i = d[0],
        j = d[1],
        l = d[2],
        o = e - c[0],
        r = f - c[1],
        n = g - c[2],
        q = o * o + r * r + n * n;
    q === 0 ? n = 1 : (q = 1 / Math.sqrt(q), o *= q, r *= q, n *= q);
    let h = j * n - l * r,
        p = l * o - i * n,
        k = i * r - j * o;
    return q = h * h + p * p + k * k, q === 0 && (l ? i += 1e-6 : j ? l += 1e-6 : j += 1e-6, h = j * n - l * r, p = l * o - i * n, k = i * r - j * o, q = h * h + p * p + k * k), q = 1 / Math.sqrt(q), h *= q, p *= q, k *= q, a[0] = h, a[1] = p, a[2] = k, a[3] = 0, a[4] = r * k - n * p, a[5] = n * h - o * k, a[6] = o * p - r * h, a[7] = 0, a[8] = o, a[9] = r, a[10] = n, a[11] = 0, a[12] = e, a[13] = f, a[14] = g, a[15] = 1, a
}
class bb extends Array {
    constructor(a = 1, b = 0, c = 0, d = 0, e = 0, f = 1, g = 0, i = 0, j = 0, l = 0, o = 1, r = 0, n = 0, q = 0, h = 0, p = 1) {
        return super(a, b, c, d, e, f, g, i, j, l, o, r, n, q, h, p), this
    }
    get x() {
        return this[12]
    }
    get y() {
        return this[13]
    }
    get z() {
        return this[14]
    }
    get w() {
        return this[15]
    }
    set x(a) {
        this[12] = a
    }
    set y(a) {
        this[13] = a
    }
    set z(a) {
        this[14] = a
    }
    set w(a) {
        this[15] = a
    }
    set(a, b, c, d, e, f, g, i, j, l, o, r, n, q, h, p) {
        return a.length ? this.copy(a) : (ag(this, a, b, c, d, e, f, g, i, j, l, o, r, n, q, h, p), this)
    }
    translate(a, b = this) {
        return bg(this, b, a), this
    }
    rotate(a, b, c = this) {
        return cg(this, c, a, b), this
    }
    scale(a, b = this) {
        return dg(this, b, typeof a === "number" ? [a, a, a] : a), this
    }
    multiply(a, b) {
        return b ? Pc(this, a, b) : Pc(this, this, a), this
    }
    identity() {
        return eg(this), this
    }
    copy(a) {
        return fg(this, a), this
    }
    fromPerspective({
        fov: a,
        aspect: b,
        near: c,
        far: d
    } = {}) {
        return gg(this, a, b, c, d), this
    }
    fromOrthogonal({
        left: a,
        right: b,
        bottom: c,
        top: d,
        near: e,
        far: f
    }) {
        return hg(this, a, b, c, d, e, f), this
    }
    fromQuaternion(a) {
        return ig(this, a), this
    }
    setPosition(a) {
        return this.x = a[0], this.y = a[1], this.z = a[2], this
    }
    inverse(a = this) {
        return jg(this, a), this
    }
    compose(a, b, c) {
        return kg(this, a, b, c), this
    }
    getRotation(a) {
        return lg(a, this), this
    }
    getTranslation(a) {
        return mg(a, this), this
    }
    getScaling(a) {
        return Qc(a, this), this
    }
    getMaxScaleOnAxis() {
        return ng(this)
    }
    lookAt(a, b, c) {
        return og(this, a, b, c), this
    }
    determinant() {
        return pg(this)
    }
    fromArray(a, b = 0) {
        return this[0] = a[b], this[1] = a[b + 1], this[2] = a[b + 2], this[3] = a[b + 3], this[4] = a[b + 4], this[5] = a[b + 5], this[6] = a[b + 6], this[7] = a[b + 7], this[8] = a[b + 8], this[9] = a[b + 9], this[10] = a[b + 10], this[11] = a[b + 11], this[12] = a[b + 12], this[13] = a[b + 13], this[14] = a[b + 14], this[15] = a[b + 15], this
    }
    toArray(a = [], b = 0) {
        return a[b] = this[0], a[b + 1] = this[1], a[b + 2] = this[2], a[b + 3] = this[3], a[b + 4] = this[4], a[b + 5] = this[5], a[b + 6] = this[6], a[b + 7] = this[7], a[b + 8] = this[8], a[b + 9] = this[9], a[b + 10] = this[10], a[b + 11] = this[11], a[b + 12] = this[12], a[b + 13] = this[13], a[b + 14] = this[14], a[b + 15] = this[15], a
    }
}

function Rf(a, b, c = "YXZ") {
    return c === "XYZ" ? (a[1] = Math.asin(Math.min(Math.max(b[8], -1), 1)), Math.abs(b[8]) < .99999 ? (a[0] = Math.atan2(-b[9], b[10]), a[2] = Math.atan2(-b[4], b[0])) : (a[0] = Math.atan2(b[6], b[5]), a[2] = 0)) : c === "YXZ" ? (a[0] = Math.asin(-Math.min(Math.max(b[9], -1), 1)), Math.abs(b[9]) < .99999 ? (a[1] = Math.atan2(b[8], b[10]), a[2] = Math.atan2(b[1], b[5])) : (a[1] = Math.atan2(-b[2], b[0]), a[2] = 0)) : c === "ZXY" ? (a[0] = Math.asin(Math.min(Math.max(b[6], -1), 1)), Math.abs(b[6]) < .99999 ? (a[1] = Math.atan2(-b[2], b[10]), a[2] = Math.atan2(-b[4], b[5])) : (a[1] = 0, a[2] = Math.atan2(b[1], b[0]))) : c === "ZYX" ? (a[1] = Math.asin(-Math.min(Math.max(b[2], -1), 1)), Math.abs(b[2]) < .99999 ? (a[0] = Math.atan2(b[6], b[10]), a[2] = Math.atan2(b[1], b[0])) : (a[0] = 0, a[2] = Math.atan2(-b[4], b[5]))) : c === "YZX" ? (a[2] = Math.asin(Math.min(Math.max(b[1], -1), 1)), Math.abs(b[1]) < .99999 ? (a[0] = Math.atan2(-b[9], b[5]), a[1] = Math.atan2(-b[2], b[0])) : (a[0] = 0, a[1] = Math.atan2(b[8], b[10]))) : c === "XZY" && (a[2] = Math.asin(-Math.min(Math.max(b[4], -1), 1)), Math.abs(b[4]) < .99999 ? (a[0] = Math.atan2(b[6], b[5]), a[1] = Math.atan2(b[8], b[0])) : (a[0] = Math.atan2(-b[9], b[10]), a[1] = 0)), a
}
const Qf = new bb();
class Pf extends Array {
    constructor(a = 0, b = a, c = a, d = "YXZ") {
        return super(a, b, c), this.order = d, this.onChange = () => {}, this
    }
    get x() {
        return this[0]
    }
    get y() {
        return this[1]
    }
    get z() {
        return this[2]
    }
    set x(a) {
        this[0] = a, this.onChange()
    }
    set y(a) {
        this[1] = a, this.onChange()
    }
    set z(a) {
        this[2] = a, this.onChange()
    }
    set(a, b = a, c = a) {
        return a.length ? this.copy(a) : (this[0] = a, this[1] = b, this[2] = c, this.onChange(), this)
    }
    copy(a) {
        return this[0] = a[0], this[1] = a[1], this[2] = a[2], this.onChange(), this
    }
    reorder(a) {
        return this.order = a, this.onChange(), this
    }
    fromRotationMatrix(a, b = this.order) {
        return Rf(this, a, b), this
    }
    fromQuaternion(a, b = this.order) {
        return Qf.fromQuaternion(a), this.fromRotationMatrix(Qf, b)
    }
}
class va {
    constructor() {
        this.parent = null, this.children = [], this.visible = !0, this.matrix = new bb(), this.worldMatrix = new bb(), this.matrixAutoUpdate = !0, this.position = new ma(), this.quaternion = new Of(), this.scale = new ma(1), this.rotation = new Pf(), this.up = new ma(0, 1, 0), this.rotation.onChange = () => this.quaternion.fromEuler(this.rotation), this.quaternion.onChange = () => this.rotation.fromQuaternion(this.quaternion)
    }
    setParent(a, b = !0) {
        b && this.parent && a !== this.parent && this.parent.removeChild(this, !1), this.parent = a, b && a && a.addChild(this, !1)
    }
    addChild(a, b = !0) {
        ~this.children.indexOf(a) || this.children.push(a), b && a.setParent(this, !1)
    }
    removeChild(a, b = !0) {
        ~this.children.indexOf(a) && this.children.splice(this.children.indexOf(a), 1), b && a.setParent(null, !1)
    }
    updateMatrixWorld(a) {
        this.matrixAutoUpdate && this.updateMatrix(), (this.worldMatrixNeedsUpdate || a) && (this.parent === null ? this.worldMatrix.copy(this.matrix) : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix), this.worldMatrixNeedsUpdate = !1, a = !0);
        for (let b = 0, c = this.children.length; b < c; b++) this.children[b].updateMatrixWorld(a)
    }
    updateMatrix() {
        this.matrix.compose(this.quaternion, this.position, this.scale), this.worldMatrixNeedsUpdate = !0
    }
    traverse(a) {
        if (a(this)) return;
        for (let b = 0, c = this.children.length; b < c; b++) this.children[b].traverse(a)
    }
    decompose() {
        this.matrix.getTranslation(this.position), this.matrix.getRotation(this.quaternion), this.matrix.getScaling(this.scale), this.rotation.fromQuaternion(this.quaternion)
    }
    lookAt(a, b = !1) {
        b ? this.matrix.lookAt(this.position, a, this.up) : this.matrix.lookAt(a, this.position, this.up), this.matrix.getRotation(this.quaternion), this.rotation.fromQuaternion(this.quaternion)
    }
}
const xi = new bb(),
    yi = new ma(),
    zi = new ma();
class sc extends va {
    constructor(a, {
        near: b = .1,
        far: c = 100,
        fov: d = 45,
        aspect: e = 1,
        left: f,
        right: g,
        bottom: i,
        top: j,
        zoom: l = 1
    } = {}) {
        super();
        Object.assign(this, {
            near: b,
            far: c,
            fov: d,
            aspect: e,
            left: f,
            right: g,
            bottom: i,
            top: j,
            zoom: l
        }), this.projectionMatrix = new bb(), this.viewMatrix = new bb(), this.projectionViewMatrix = new bb(), this.worldPosition = new ma(), this.type = f || g ? "orthographic" : "perspective", this.type === "orthographic" ? this.orthographic() : this.perspective()
    }
    perspective({
        near: a = this.near,
        far: b = this.far,
        fov: c = this.fov,
        aspect: d = this.aspect
    } = {}) {
        return Object.assign(this, {
            near: a,
            far: b,
            fov: c,
            aspect: d
        }), this.projectionMatrix.fromPerspective({
            fov: c * (Math.PI / 180),
            aspect: d,
            near: a,
            far: b
        }), this.type = "perspective", this
    }
    orthographic({
        near: a = this.near,
        far: b = this.far,
        left: c = this.left,
        right: d = this.right,
        bottom: e = this.bottom,
        top: f = this.top,
        zoom: g = this.zoom
    } = {}) {
        return Object.assign(this, {
            near: a,
            far: b,
            left: c,
            right: d,
            bottom: e,
            top: f,
            zoom: g
        }), c /= g, d /= g, e /= g, f /= g, this.projectionMatrix.fromOrthogonal({
            left: c,
            right: d,
            bottom: e,
            top: f,
            near: a,
            far: b
        }), this.type = "orthographic", this
    }
    updateMatrixWorld() {
        return super.updateMatrixWorld(), this.viewMatrix.inverse(this.worldMatrix), this.worldMatrix.getTranslation(this.worldPosition), this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix), this
    }
    lookAt(a) {
        return super.lookAt(a, !0), this
    }
    project(a) {
        return a.applyMatrix4(this.viewMatrix), a.applyMatrix4(this.projectionMatrix), this
    }
    unproject(a) {
        return a.applyMatrix4(xi.inverse(this.projectionMatrix)), a.applyMatrix4(this.worldMatrix), this
    }
    updateFrustum() {
        this.frustum || (this.frustum = [new ma(), new ma(), new ma(), new ma(), new ma(), new ma()]);
        const a = this.projectionViewMatrix;
        this.frustum[0].set(a[3] - a[0], a[7] - a[4], a[11] - a[8]).constant = a[15] - a[12], this.frustum[1].set(a[3] + a[0], a[7] + a[4], a[11] + a[8]).constant = a[15] + a[12], this.frustum[2].set(a[3] + a[1], a[7] + a[5], a[11] + a[9]).constant = a[15] + a[13], this.frustum[3].set(a[3] - a[1], a[7] - a[5], a[11] - a[9]).constant = a[15] - a[13], this.frustum[4].set(a[3] - a[2], a[7] - a[6], a[11] - a[10]).constant = a[15] - a[14], this.frustum[5].set(a[3] + a[2], a[7] + a[6], a[11] + a[10]).constant = a[15] + a[14];
        for (let b = 0; b < 6; b++) {
            const c = 1 / this.frustum[b].distance();
            this.frustum[b].multiply(c), this.frustum[b].constant *= c
        }
    }
    frustumIntersectsMesh(a) {
        if (!a.geometry.attributes.position) return !0;
        (!a.geometry.bounds || a.geometry.bounds.radius === Infinity) && a.geometry.computeBoundingSphere();
        if (!a.geometry.bounds) return !0;
        const b = yi;
        b.copy(a.geometry.bounds.center), b.applyMatrix4(a.worldMatrix);
        const c = a.geometry.bounds.radius * a.worldMatrix.getMaxScaleOnAxis();
        return this.frustumIntersectsSphere(b, c)
    }
    frustumIntersectsSphere(a, b) {
        const c = zi;
        for (let d = 0; d < 6; d++) {
            const e = this.frustum[d],
                f = c.copy(e).dot(a) + e.constant;
            if (f < -b) return !1
        }
        return !0
    }
}

function Yf(a, b) {
    return a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[4], a[4] = b[5], a[5] = b[6], a[6] = b[8], a[7] = b[9], a[8] = b[10], a
}

function Zf(a, b) {
    let c = b[0],
        d = b[1],
        e = b[2],
        f = b[3],
        g = c + c,
        i = d + d,
        j = e + e,
        l = c * g,
        o = d * g,
        r = d * i,
        n = e * g,
        q = e * i,
        h = e * j,
        p = f * g,
        k = f * i,
        m = f * j;
    return a[0] = 1 - r - h, a[3] = o - m, a[6] = n + k, a[1] = o + m, a[4] = 1 - l - h, a[7] = q - p, a[2] = n - k, a[5] = q + p, a[8] = 1 - l - r, a
}

function Xf(a, b) {
    return a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3], a[4] = b[4], a[5] = b[5], a[6] = b[6], a[7] = b[7], a[8] = b[8], a
}

function Sf(a, b, c, d, e, f, g, i, j, l) {
    return a[0] = b, a[1] = c, a[2] = d, a[3] = e, a[4] = f, a[5] = g, a[6] = i, a[7] = j, a[8] = l, a
}

function Wf(a) {
    return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 1, a[5] = 0, a[6] = 0, a[7] = 0, a[8] = 1, a
}

function _f(a, b) {
    let c = b[0],
        d = b[1],
        e = b[2],
        f = b[3],
        g = b[4],
        i = b[5],
        j = b[6],
        l = b[7],
        o = b[8],
        r = o * g - i * l,
        n = -o * f + i * j,
        q = l * f - g * j,
        h = c * r + d * n + e * q;
    return h ? (h = 1 / h, a[0] = r * h, a[1] = (-o * d + e * l) * h, a[2] = (i * d - e * g) * h, a[3] = n * h, a[4] = (o * c - e * j) * h, a[5] = (-i * c + e * f) * h, a[6] = q * h, a[7] = (-l * c + d * j) * h, a[8] = (g * c - d * f) * h, a) : null
}

function Oc(a, b, c) {
    let d = b[0],
        e = b[1],
        f = b[2],
        g = b[3],
        i = b[4],
        j = b[5],
        l = b[6],
        o = b[7],
        r = b[8],
        n = c[0],
        q = c[1],
        h = c[2],
        p = c[3],
        k = c[4],
        m = c[5],
        s = c[6],
        u = c[7],
        t = c[8];
    return a[0] = n * d + q * g + h * l, a[1] = n * e + q * i + h * o, a[2] = n * f + q * j + h * r, a[3] = p * d + k * g + m * l, a[4] = p * e + k * i + m * o, a[5] = p * f + k * j + m * r, a[6] = s * d + u * g + t * l, a[7] = s * e + u * i + t * o, a[8] = s * f + u * j + t * r, a
}

function Tf(a, b, c) {
    let d = b[0],
        e = b[1],
        f = b[2],
        g = b[3],
        i = b[4],
        j = b[5],
        l = b[6],
        o = b[7],
        r = b[8],
        n = c[0],
        q = c[1];
    return a[0] = d, a[1] = e, a[2] = f, a[3] = g, a[4] = i, a[5] = j, a[6] = n * d + q * g + l, a[7] = n * e + q * i + o, a[8] = n * f + q * j + r, a
}

function Uf(a, b, c) {
    let d = b[0],
        e = b[1],
        f = b[2],
        g = b[3],
        i = b[4],
        j = b[5],
        l = b[6],
        o = b[7],
        r = b[8],
        n = Math.sin(c),
        q = Math.cos(c);
    return a[0] = q * d + n * g, a[1] = q * e + n * i, a[2] = q * f + n * j, a[3] = q * g - n * d, a[4] = q * i - n * e, a[5] = q * j - n * f, a[6] = l, a[7] = o, a[8] = r, a
}

function Vf(a, b, c) {
    let d = c[0],
        e = c[1];
    return a[0] = d * b[0], a[1] = d * b[1], a[2] = d * b[2], a[3] = e * b[3], a[4] = e * b[4], a[5] = e * b[5], a[6] = b[6], a[7] = b[7], a[8] = b[8], a
}

function $f(a, b) {
    let c = b[0],
        d = b[1],
        e = b[2],
        f = b[3],
        g = b[4],
        i = b[5],
        j = b[6],
        l = b[7],
        o = b[8],
        r = b[9],
        n = b[10],
        q = b[11],
        h = b[12],
        p = b[13],
        k = b[14],
        m = b[15],
        s = c * i - d * g,
        u = c * j - e * g,
        t = c * l - f * g,
        w = d * j - e * i,
        x = d * l - f * i,
        A = e * l - f * j,
        D = o * p - r * h,
        y = o * k - n * h,
        v = o * m - q * h,
        z = r * k - n * p,
        J = r * m - q * p,
        F = n * m - q * k,
        B = s * F - u * J + t * z + w * v - x * y + A * D;
    return B ? (B = 1 / B, a[0] = (i * F - j * J + l * z) * B, a[1] = (j * v - g * F - l * y) * B, a[2] = (g * J - i * v + l * D) * B, a[3] = (e * J - d * F - f * z) * B, a[4] = (c * F - e * v + f * y) * B, a[5] = (d * v - c * J - f * D) * B, a[6] = (p * A - k * x + m * w) * B, a[7] = (k * t - h * A - m * u) * B, a[8] = (h * x - p * t + m * s) * B, a) : null
}
class Kf extends Array {
    constructor(a = 1, b = 0, c = 0, d = 0, e = 1, f = 0, g = 0, i = 0, j = 1) {
        return super(a, b, c, d, e, f, g, i, j), this
    }
    set(a, b, c, d, e, f, g, i, j) {
        return a.length ? this.copy(a) : (Sf(this, a, b, c, d, e, f, g, i, j), this)
    }
    translate(a, b = this) {
        return Tf(this, b, a), this
    }
    rotate(a, b = this) {
        return Uf(this, b, a), this
    }
    scale(a, b = this) {
        return Vf(this, b, a), this
    }
    multiply(a, b) {
        return b ? Oc(this, a, b) : Oc(this, this, a), this
    }
    identity() {
        return Wf(this), this
    }
    copy(a) {
        return Xf(this, a), this
    }
    fromMatrix4(a) {
        return Yf(this, a), this
    }
    fromQuaternion(a) {
        return Zf(this, a), this
    }
    fromBasis(a, b, c) {
        return this.set(a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2]), this
    }
    inverse(a = this) {
        return _f(this, a), this
    }
    getNormalMatrix(a) {
        return $f(this, a), this
    }
}
let Ci = 0;
class cb extends va {
    constructor(a, {
        geometry: b,
        program: c,
        mode: d = a.TRIANGLES,
        frustumCulled: e = !0,
        renderOrder: f = 0
    } = {}) {
        super();
        a.canvas || console.error("gl not passed as first argument to Mesh"), this.gl = a, this.id = Ci++, this.geometry = b, this.program = c, this.mode = d, this.frustumCulled = e, this.renderOrder = f, this.modelViewMatrix = new bb(), this.normalMatrix = new Kf(), this.beforeRenderCallbacks = [], this.afterRenderCallbacks = []
    }
    onBeforeRender(a) {
        return this.beforeRenderCallbacks.push(a), this
    }
    onAfterRender(a) {
        return this.afterRenderCallbacks.push(a), this
    }
    draw({
        camera: a
    } = {}) {
        this.beforeRenderCallbacks.forEach(c => c && c({
            mesh: this,
            camera: a
        })), a && (this.program.uniforms.modelMatrix || Object.assign(this.program.uniforms, {
            modelMatrix: {
                value: null
            },
            viewMatrix: {
                value: null
            },
            modelViewMatrix: {
                value: null
            },
            normalMatrix: {
                value: null
            },
            projectionMatrix: {
                value: null
            },
            cameraPosition: {
                value: null
            }
        }), this.program.uniforms.projectionMatrix.value = a.projectionMatrix, this.program.uniforms.cameraPosition.value = a.worldPosition, this.program.uniforms.viewMatrix.value = a.viewMatrix, this.modelViewMatrix.multiply(a.viewMatrix, this.worldMatrix), this.normalMatrix.getNormalMatrix(this.modelViewMatrix), this.program.uniforms.modelMatrix.value = this.worldMatrix, this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix, this.program.uniforms.normalMatrix.value = this.normalMatrix);
        let b = this.program.cullFace && this.worldMatrix.determinant() < 0;
        this.program.use({
            flipFaces: b
        }), this.geometry.draw({
            mode: this.mode,
            program: this.program
        }), this.afterRenderCallbacks.forEach(c => c && c({
            mesh: this,
            camera: a
        }))
    }
}
let Di = 1;
const Lf = {};
class db {
    constructor(a, {
        vertex: b,
        fragment: c,
        uniforms: d = {},
        transparent: e = !1,
        cullFace: f = a.BACK,
        frontFace: g = a.CCW,
        depthTest: i = !0,
        depthWrite: j = !0,
        depthFunc: l = a.LESS
    } = {}) {
        a.canvas || console.error("gl not passed as fist argument to Program"), this.gl = a, this.uniforms = d, this.id = Di++, b || console.warn("vertex shader not supplied"), c || console.warn("fragment shader not supplied"), this.transparent = e, this.cullFace = f, this.frontFace = g, this.depthTest = i, this.depthWrite = j, this.depthFunc = l, this.blendFunc = {}, this.blendEquation = {}, this.transparent && !this.blendFunc.src && (this.gl.renderer.premultipliedAlpha ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA));
        const o = a.createShader(a.VERTEX_SHADER);
        a.shaderSource(o, b), a.compileShader(o), a.getShaderInfoLog(o) !== "" && console.warn(`${a.getShaderInfoLog(o)}
Vertex Shader
${Mf(b)}`);
        const r = a.createShader(a.FRAGMENT_SHADER);
        a.shaderSource(r, c), a.compileShader(r), a.getShaderInfoLog(r) !== "" && console.warn(`${a.getShaderInfoLog(r)}
Fragment Shader
${Mf(c)}`), this.program = a.createProgram(), a.attachShader(this.program, o), a.attachShader(this.program, r), a.linkProgram(this.program);
        if (!a.getProgramParameter(this.program, a.LINK_STATUS)) return console.warn(a.getProgramInfoLog(this.program));
        a.deleteShader(o), a.deleteShader(r), this.uniformLocations = new Map();
        let n = a.getProgramParameter(this.program, a.ACTIVE_UNIFORMS);
        for (let p = 0; p < n; p++) {
            let k = a.getActiveUniform(this.program, p);
            this.uniformLocations.set(k, a.getUniformLocation(this.program, k.name));
            const m = k.name.match(/(\w+)/g);
            k.uniformName = m[0], m.length === 3 ? (k.isStructArray = !0, k.structIndex = Number(m[1]), k.structProperty = m[2]) : m.length === 2 && isNaN(Number(m[1])) && (k.isStruct = !0, k.structProperty = m[1])
        }
        this.attributeLocations = new Map();
        const q = [],
            h = a.getProgramParameter(this.program, a.ACTIVE_ATTRIBUTES);
        for (let p = 0; p < h; p++) {
            const k = a.getActiveAttrib(this.program, p),
                m = a.getAttribLocation(this.program, k.name);
            q[m] = k.name, this.attributeLocations.set(k, m)
        }
        this.attributeOrder = q.join("")
    }
    setBlendFunc(a, b, c, d) {
        this.blendFunc.src = a, this.blendFunc.dst = b, this.blendFunc.srcAlpha = c, this.blendFunc.dstAlpha = d, a && (this.transparent = !0)
    }
    setBlendEquation(a, b) {
        this.blendEquation.modeRGB = a, this.blendEquation.modeAlpha = b
    }
    applyState() {
        this.depthTest ? this.gl.renderer.enable(this.gl.DEPTH_TEST) : this.gl.renderer.disable(this.gl.DEPTH_TEST), this.cullFace ? this.gl.renderer.enable(this.gl.CULL_FACE) : this.gl.renderer.disable(this.gl.CULL_FACE), this.blendFunc.src ? this.gl.renderer.enable(this.gl.BLEND) : this.gl.renderer.disable(this.gl.BLEND), this.cullFace && this.gl.renderer.setCullFace(this.cullFace), this.gl.renderer.setFrontFace(this.frontFace), this.gl.renderer.setDepthMask(this.depthWrite), this.gl.renderer.setDepthFunc(this.depthFunc), this.blendFunc.src && this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha), this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha)
    }
    use({
        flipFaces: a = !1
    } = {}) {
        let b = -1;
        const c = this.gl.renderer.currentProgram === this.id;
        c || (this.gl.useProgram(this.program), this.gl.renderer.currentProgram = this.id), this.uniformLocations.forEach((d, e) => {
            let f = e.uniformName,
                g = this.uniforms[f];
            e.isStruct && (g = g[e.structProperty], f += `.${e.structProperty}`), e.isStructArray && (g = g[e.structIndex][e.structProperty], f += `[${e.structIndex}].${e.structProperty}`);
            if (!g) return Nf(`Active uniform ${f} has not been supplied`);
            if (g && g.value === void 0) return Nf(`${f} uniform is missing a value parameter`);
            if (g.value.texture) return b = b + 1, g.value.update(b), Kc(this.gl, e.type, d, b);
            if (g.value.length && g.value[0].texture) {
                const i = [];
                return g.value.forEach(j => {
                    b = b + 1, j.update(b), i.push(b)
                }), Kc(this.gl, e.type, d, i)
            }
            Kc(this.gl, e.type, d, g.value)
        }), this.applyState(), a && this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW)
    }
    remove() {
        this.gl.deleteProgram(this.program)
    }
}

function Kc(a, b, c, d) {
    d = d.length ? Ei(d) : d;
    const e = a.renderer.state.uniformLocations.get(c);
    if (d.length)
        if (e === void 0 || e.length !== d.length) a.renderer.state.uniformLocations.set(c, d.slice(0));
        else {
            if (Fi(e, d)) return;
            e.set ? e.set(d) : Gi(e, d), a.renderer.state.uniformLocations.set(c, e)
        }
    else {
        if (e === d) return;
        a.renderer.state.uniformLocations.set(c, d)
    }
    switch (b) {
        case 5126:
            return d.length ? a.uniform1fv(c, d) : a.uniform1f(c, d);
        case 35664:
            return a.uniform2fv(c, d);
        case 35665:
            return a.uniform3fv(c, d);
        case 35666:
            return a.uniform4fv(c, d);
        case 35670:
        case 5124:
        case 35678:
        case 35680:
            return d.length ? a.uniform1iv(c, d) : a.uniform1i(c, d);
        case 35671:
        case 35667:
            return a.uniform2iv(c, d);
        case 35672:
        case 35668:
            return a.uniform3iv(c, d);
        case 35673:
        case 35669:
            return a.uniform4iv(c, d);
        case 35674:
            return a.uniformMatrix2fv(c, !1, d);
        case 35675:
            return a.uniformMatrix3fv(c, !1, d);
        case 35676:
            return a.uniformMatrix4fv(c, !1, d)
    }
}

function Mf(a) {
    let b = a.split(`
`);
    for (let c = 0; c < b.length; c++) b[c] = c + 1 + ": " + b[c];
    return b.join(`
`)
}

function Ei(a) {
    const b = a.length,
        c = a[0].length;
    if (c === void 0) return a;
    const d = b * c;
    let e = Lf[d];
    e || (Lf[d] = e = new Float32Array(d));
    for (let f = 0; f < b; f++) e.set(a[f], f * c);
    return e
}

function Fi(a, b) {
    if (a.length !== b.length) return !1;
    for (let c = 0, d = a.length; c < d; c++)
        if (a[c] !== b[c]) return !1;
    return !0
}

function Gi(a, b) {
    for (let c = 0, d = a.length; c < d; c++) a[c] = b[c]
}
let Lc = 0;

function Nf(a) {
    if (Lc > 100) return;
    console.warn(a), Lc++, Lc > 100 && console.warn("More than 100 program warnings - stopping logs.")
}
const Mc = new ma();
let Hi = 1;
class tc {
    constructor({
        canvas: a = document.createElement("canvas"),
        width: b = 300,
        height: c = 150,
        dpr: d = 1,
        alpha: e = !1,
        depth: f = !0,
        stencil: g = !1,
        antialias: i = !1,
        premultipliedAlpha: j = !1,
        preserveDrawingBuffer: l = !1,
        powerPreference: o = "default",
        autoClear: r = !0,
        webgl: n = 2
    } = {}) {
        const q = {
            alpha: e,
            depth: f,
            stencil: g,
            antialias: i,
            premultipliedAlpha: j,
            preserveDrawingBuffer: l,
            powerPreference: o
        };
        this.dpr = d, this.alpha = e, this.color = !0, this.depth = f, this.stencil = g, this.premultipliedAlpha = j, this.autoClear = r, this.id = Hi++, n === 2 && (this.gl = a.getContext("webgl2", q)), this.isWebgl2 = !!this.gl, this.gl || (this.gl = a.getContext("webgl", q) || a.getContext("experimental-webgl", q)), this.gl.renderer = this, this.setSize(b, c), this.state = {}, this.state.blendFunc = {
            src: this.gl.ONE,
            dst: this.gl.ZERO
        }, this.state.blendEquation = {
            modeRGB: this.gl.FUNC_ADD
        }, this.state.cullFace = null, this.state.frontFace = this.gl.CCW, this.state.depthMask = !0, this.state.depthFunc = this.gl.LESS, this.state.premultiplyAlpha = !1, this.state.flipY = !1, this.state.unpackAlignment = 4, this.state.framebuffer = null, this.state.viewport = {
            width: null,
            height: null
        }, this.state.textureUnits = [], this.state.activeTextureUnit = 0, this.state.boundBuffer = null, this.state.uniformLocations = new Map(), this.extensions = {}, this.isWebgl2 ? (this.getExtension("EXT_color_buffer_float"), this.getExtension("OES_texture_float_linear")) : (this.getExtension("OES_texture_float"), this.getExtension("OES_texture_float_linear"), this.getExtension("OES_texture_half_float"), this.getExtension("OES_texture_half_float_linear"), this.getExtension("OES_element_index_uint"), this.getExtension("OES_standard_derivatives"), this.getExtension("EXT_sRGB"), this.getExtension("WEBGL_depth_texture"), this.getExtension("WEBGL_draw_buffers")), this.vertexAttribDivisor = this.getExtension("ANGLE_instanced_arrays", "vertexAttribDivisor", "vertexAttribDivisorANGLE"), this.drawArraysInstanced = this.getExtension("ANGLE_instanced_arrays", "drawArraysInstanced", "drawArraysInstancedANGLE"), this.drawElementsInstanced = this.getExtension("ANGLE_instanced_arrays", "drawElementsInstanced", "drawElementsInstancedANGLE"), this.createVertexArray = this.getExtension("OES_vertex_array_object", "createVertexArray", "createVertexArrayOES"), this.bindVertexArray = this.getExtension("OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES"), this.deleteVertexArray = this.getExtension("OES_vertex_array_object", "deleteVertexArray", "deleteVertexArrayOES"), this.drawBuffers = this.getExtension("WEBGL_draw_buffers", "drawBuffers", "drawBuffersWEBGL"), this.parameters = {}, this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS), this.parameters.maxAnisotropy = this.getExtension("EXT_texture_filter_anisotropic") ? this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
    }
    setSize(a, b) {
        this.width = a, this.height = b, this.gl.canvas.width = a * this.dpr, this.gl.canvas.height = b * this.dpr, Object.assign(this.gl.canvas.style, {
            width: a + "px",
            height: b + "px"
        })
    }
    setViewport(a, b) {
        if (this.state.viewport.width === a && this.state.viewport.height === b) return;
        this.state.viewport.width = a, this.state.viewport.height = b, this.gl.viewport(0, 0, a, b)
    }
    enable(a) {
        if (this.state[a] === !0) return;
        this.gl.enable(a), this.state[a] = !0
    }
    disable(a) {
        if (this.state[a] === !1) return;
        this.gl.disable(a), this.state[a] = !1
    }
    setBlendFunc(a, b, c, d) {
        if (this.state.blendFunc.src === a && this.state.blendFunc.dst === b && this.state.blendFunc.srcAlpha === c && this.state.blendFunc.dstAlpha === d) return;
        this.state.blendFunc.src = a, this.state.blendFunc.dst = b, this.state.blendFunc.srcAlpha = c, this.state.blendFunc.dstAlpha = d, c !== void 0 ? this.gl.blendFuncSeparate(a, b, c, d) : this.gl.blendFunc(a, b)
    }
    setBlendEquation(a, b) {
        a = a || this.gl.FUNC_ADD;
        if (this.state.blendEquation.modeRGB === a && this.state.blendEquation.modeAlpha === b) return;
        this.state.blendEquation.modeRGB = a, this.state.blendEquation.modeAlpha = b, b !== void 0 ? this.gl.blendEquationSeparate(a, b) : this.gl.blendEquation(a)
    }
    setCullFace(a) {
        if (this.state.cullFace === a) return;
        this.state.cullFace = a, this.gl.cullFace(a)
    }
    setFrontFace(a) {
        if (this.state.frontFace === a) return;
        this.state.frontFace = a, this.gl.frontFace(a)
    }
    setDepthMask(a) {
        if (this.state.depthMask === a) return;
        this.state.depthMask = a, this.gl.depthMask(a)
    }
    setDepthFunc(a) {
        if (this.state.depthFunc === a) return;
        this.state.depthFunc = a, this.gl.depthFunc(a)
    }
    activeTexture(a) {
        if (this.state.activeTextureUnit === a) return;
        this.state.activeTextureUnit = a, this.gl.activeTexture(this.gl.TEXTURE0 + a)
    }
    bindFramebuffer({
        target: a = this.gl.FRAMEBUFFER,
        buffer: b = null
    } = {}) {
        if (this.state.framebuffer === b) return;
        this.state.framebuffer = b, this.gl.bindFramebuffer(a, b)
    }
    getExtension(a, b, c) {
        return b && this.gl[b] ? this.gl[b].bind(this.gl) : (this.extensions[a] || (this.extensions[a] = this.gl.getExtension(a)), b ? this.extensions[a] ? this.extensions[a][c].bind(this.extensions[a]) : null : this.extensions[a])
    }
    sortOpaque(a, b) {
        return a.renderOrder !== b.renderOrder ? a.renderOrder - b.renderOrder : a.program.id !== b.program.id ? a.program.id - b.program.id : a.zDepth !== b.zDepth ? a.zDepth - b.zDepth : b.id - a.id
    }
    sortTransparent(a, b) {
        return a.renderOrder !== b.renderOrder ? a.renderOrder - b.renderOrder : a.zDepth !== b.zDepth ? b.zDepth - a.zDepth : b.id - a.id
    }
    sortUI(a, b) {
        return a.renderOrder !== b.renderOrder ? a.renderOrder - b.renderOrder : a.program.id !== b.program.id ? a.program.id - b.program.id : b.id - a.id
    }
    getRenderList({
        scene: a,
        camera: b,
        frustumCull: c,
        sort: d
    }) {
        let e = [];
        b && c && b.updateFrustum(), a.traverse(f => {
            if (!f.visible) return !0;
            if (!f.draw) return;
            if (c && f.frustumCulled && b) {
                if (!b.frustumIntersectsMesh(f)) return
            }
            e.push(f)
        });
        if (d) {
            const f = [],
                g = [],
                i = [];
            e.forEach(j => {
                j.program.transparent ? j.program.depthTest ? g.push(j) : i.push(j) : f.push(j), j.zDepth = 0;
                if (j.renderOrder !== 0 || !j.program.depthTest || !b) return;
                j.worldMatrix.getTranslation(Mc), Mc.applyMatrix4(b.projectionViewMatrix), j.zDepth = Mc.z
            }), f.sort(this.sortOpaque), g.sort(this.sortTransparent), i.sort(this.sortUI), e = f.concat(g, i)
        }
        return e
    }
    render({
        scene: a,
        camera: b,
        target: c = null,
        update: d = !0,
        sort: e = !0,
        frustumCull: f = !0,
        clear: g
    }) {
        c === null ? (this.bindFramebuffer(), this.setViewport(this.width * this.dpr, this.height * this.dpr)) : (this.bindFramebuffer(c), this.setViewport(c.width, c.height)), (g || this.autoClear && g !== !1) && (this.depth && (!c || c.depth) && (this.enable(this.gl.DEPTH_TEST), this.setDepthMask(!0)), this.gl.clear((this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0))), d && a.updateMatrixWorld(), b && b.updateMatrixWorld();
        const i = this.getRenderList({
            scene: a,
            camera: b,
            frustumCull: f,
            sort: e
        });
        i.forEach(j => {
            j.draw({
                camera: b
            })
        })
    }
}
const If = new ma();
let Ai = 1,
    Bi = 1,
    Jf = !1;
class Pb {
    constructor(a, b = {}) {
        a.canvas || console.error("gl not passed as first argument to Geometry"), this.gl = a, this.attributes = b, this.id = Ai++, this.VAOs = {}, this.drawRange = {
            start: 0,
            count: 0
        }, this.instancedCount = 0, this.gl.renderer.bindVertexArray(null), this.gl.renderer.currentGeometry = null, this.glState = this.gl.renderer.state;
        for (let c in b) this.addAttribute(c, b[c])
    }
    addAttribute(a, b) {
        this.attributes[a] = b, b.id = Bi++, b.size = b.size || 1, b.type = b.type || (b.data.constructor === Float32Array ? this.gl.FLOAT : b.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT), b.target = a === "index" ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER, b.normalized = b.normalized || !1, b.stride = b.stride || 0, b.offset = b.offset || 0, b.count = b.count || (b.stride ? b.data.byteLength / b.stride : b.data.length / b.size), b.divisor = b.instanced || 0, b.needsUpdate = !1, b.buffer || (b.buffer = this.gl.createBuffer(), this.updateAttribute(b));
        if (b.divisor) {
            this.isInstanced = !0;
            if (this.instancedCount && this.instancedCount !== b.count * b.divisor) return console.warn("geometry has multiple instanced buffers of different length"), this.instancedCount = Math.min(this.instancedCount, b.count * b.divisor);
            this.instancedCount = b.count * b.divisor
        } else a === "index" ? this.drawRange.count = b.count : this.attributes.index || (this.drawRange.count = Math.max(this.drawRange.count, b.count))
    }
    updateAttribute(a) {
        this.glState.boundBuffer !== a.buffer && (this.gl.bindBuffer(a.target, a.buffer), this.glState.boundBuffer = a.buffer), this.gl.bufferData(a.target, a.data, this.gl.STATIC_DRAW), a.needsUpdate = !1
    }
    setIndex(a) {
        this.addAttribute("index", a)
    }
    setDrawRange(a, b) {
        this.drawRange.start = a, this.drawRange.count = b
    }
    setInstancedCount(a) {
        this.instancedCount = a
    }
    createVAO(a) {
        this.VAOs[a.attributeOrder] = this.gl.renderer.createVertexArray(), this.gl.renderer.bindVertexArray(this.VAOs[a.attributeOrder]), this.bindAttributes(a)
    }
    bindAttributes(a) {
        a.attributeLocations.forEach((b, {
            name: c,
            type: d
        }) => {
            if (!this.attributes[c]) {
                console.warn(`active attribute ${c} not being supplied`);
                return
            }
            const e = this.attributes[c];
            this.gl.bindBuffer(e.target, e.buffer), this.glState.boundBuffer = e.buffer;
            let f = 1;
            d === 35674 && (f = 2), d === 35675 && (f = 3), d === 35676 && (f = 4);
            const g = e.size / f,
                i = f === 1 ? 0 : f * f * f,
                j = f === 1 ? 0 : f * f;
            for (let l = 0; l < f; l++) this.gl.vertexAttribPointer(b + l, g, e.type, e.normalized, e.stride + i, e.offset + l * j), this.gl.enableVertexAttribArray(b + l), this.gl.renderer.vertexAttribDivisor(b + l, e.divisor)
        }), this.attributes.index && this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer)
    }
    draw({
        program: a,
        mode: b = this.gl.TRIANGLES
    }) {
        this.gl.renderer.currentGeometry !== `${this.id}_${a.attributeOrder}` && (this.VAOs[a.attributeOrder] || this.createVAO(a), this.gl.renderer.bindVertexArray(this.VAOs[a.attributeOrder]), this.gl.renderer.currentGeometry = `${this.id}_${a.attributeOrder}`), a.attributeLocations.forEach((c, {
            name: d
        }) => {
            const e = this.attributes[d];
            e.needsUpdate && this.updateAttribute(e)
        }), this.isInstanced ? this.attributes.index ? this.gl.renderer.drawElementsInstanced(b, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * 2, this.instancedCount) : this.gl.renderer.drawArraysInstanced(b, this.drawRange.start, this.drawRange.count, this.instancedCount) : this.attributes.index ? this.gl.drawElements(b, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * 2) : this.gl.drawArrays(b, this.drawRange.start, this.drawRange.count)
    }
    getPositionArray() {
        const a = this.attributes.position;
        return a.data ? a.data : Jf ? void 0 : (console.warn("No position buffer data found to compute bounds"), Jf = !0)
    }
    computeBoundingBox(a) {
        a || (a = this.getPositionArray()), this.bounds || (this.bounds = {
            min: new ma(),
            max: new ma(),
            center: new ma(),
            scale: new ma(),
            radius: Infinity
        });
        const b = this.bounds.min,
            c = this.bounds.max,
            d = this.bounds.center,
            e = this.bounds.scale;
        b.set(Infinity), c.set(-Infinity);
        for (let f = 0, g = a.length; f < g; f += 3) {
            const i = a[f],
                j = a[f + 1],
                l = a[f + 2];
            b.x = Math.min(i, b.x), b.y = Math.min(j, b.y), b.z = Math.min(l, b.z), c.x = Math.max(i, c.x), c.y = Math.max(j, c.y), c.z = Math.max(l, c.z)
        }
        e.sub(c, b), d.add(b, c).divide(2)
    }
    computeBoundingSphere(a) {
        a || (a = this.getPositionArray()), this.bounds || this.computeBoundingBox(a);
        let b = 0;
        for (let c = 0, d = a.length; c < d; c += 3) If.fromArray(a, c), b = Math.max(b, this.bounds.center.squaredDistance(If));
        this.bounds.radius = Math.sqrt(b)
    }
    remove() {
        this.vao && this.gl.renderer.deleteVertexArray(this.vao);
        for (let a in this.attributes) this.gl.deleteBuffer(this.attributes[a].buffer), delete this.attributes[a]
    }
}
class Xb extends Pb {
    constructor(a, {
        width: b = 1,
        height: c = 1,
        widthSegments: d = 1,
        heightSegments: e = 1,
        attributes: f = {}
    } = {}) {
        const g = d,
            i = e,
            j = (g + 1) * (i + 1),
            l = g * i * 6,
            o = new Float32Array(j * 3),
            r = new Float32Array(j * 3),
            n = new Float32Array(j * 2),
            q = j > 65536 ? new Uint32Array(l) : new Uint16Array(l);
        Xb.buildPlane(o, r, n, q, b, c, 0, g, i), Object.assign(f, {
            position: {
                size: 3,
                data: o
            },
            normal: {
                size: 3,
                data: r
            },
            uv: {
                size: 2,
                data: n
            },
            index: {
                data: q
            }
        }), super(a, f)
    }
    static buildPlane(a, b, c, d, e, f, g, i, j, l = 0, o = 1, r = 2, n = 1, q = -1, h = 0, p = 0) {
        const k = h,
            m = e / i,
            s = f / j;
        for (let u = 0; u <= j; u++) {
            let t = u * s - f / 2;
            for (let w = 0; w <= i; w++, h++) {
                let x = w * m - e / 2;
                a[h * 3 + l] = x * n, a[h * 3 + o] = t * q, a[h * 3 + r] = g / 2, b[h * 3 + l] = 0, b[h * 3 + o] = 0, b[h * 3 + r] = g >= 0 ? 1 : -1, c[h * 2] = w / i, c[h * 2 + 1] = 1 - u / j;
                if (u === j || w === i) continue;
                let A = k + w + u * (i + 1),
                    D = k + w + (u + 1) * (i + 1),
                    y = k + w + (u + 1) * (i + 1) + 1,
                    v = k + w + u * (i + 1) + 1;
                d[p * 6] = A, d[p * 6 + 1] = D, d[p * 6 + 2] = v, d[p * 6 + 3] = D, d[p * 6 + 4] = y, d[p * 6 + 5] = v, p++
            }
        }
    }
}
const hh = {
    black: "#000000",
    white: "#ffffff",
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    fuchsia: "#ff00ff",
    cyan: "#00ffff",
    yellow: "#ffff00",
    orange: "#ff8000"
};

function ih(a) {
    a.length === 4 && (a = a[0] + a[1] + a[1] + a[2] + a[2] + a[3] + a[3]);
    const b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
    return b || console.warn(`Unable to convert hex string ${a} to rgb values`), [parseInt(b[1], 16) / 255, parseInt(b[2], 16) / 255, parseInt(b[3], 16) / 255]
}

function Ii(a) {
    return a = parseInt(a), [(a >> 16 & 255) / 255, (a >> 8 & 255) / 255, (a & 255) / 255]
}

function Nc(a) {
    return a === void 0 ? [0, 0, 0] : arguments.length === 3 ? arguments : isNaN(a) ? a[0] === "#" ? ih(a) : hh[a.toLowerCase()] ? ih(hh[a.toLowerCase()]) : (console.warn("Color format not recognised"), [0, 0, 0]) : Ii(a)
}
class xa extends Array {
    constructor(a) {
        return Array.isArray(a) ? super(...a) : super(...Nc(...arguments))
    }
    get r() {
        return this[0]
    }
    get g() {
        return this[1]
    }
    get b() {
        return this[2]
    }
    set r(a) {
        this[0] = a
    }
    set g(a) {
        this[1] = a
    }
    set b(a) {
        this[2] = a
    }
    set(a) {
        return Array.isArray(a) ? this.copy(a) : this.copy(Nc(...arguments))
    }
    copy(a) {
        return this[0] = a[0], this[1] = a[1], this[2] = a[2], this
    }
}

function Fg(a, b) {
    return a[0] = b[0], a[1] = b[1], a
}

function Eg(a, b, c) {
    return a[0] = b, a[1] = c, a
}

function Sc(a, b, c) {
    return a[0] = b[0] + c[0], a[1] = b[1] + c[1], a
}

function Tc(a, b, c) {
    return a[0] = b[0] - c[0], a[1] = b[1] - c[1], a
}

function Gg(a, b, c) {
    return a[0] = b[0] * c[0], a[1] = b[1] * c[1], a
}

function Hg(a, b, c) {
    return a[0] = b[0] / c[0], a[1] = b[1] / c[1], a
}

function uc(a, b, c) {
    return a[0] = b[0] * c, a[1] = b[1] * c, a
}

function Jg(a, b) {
    var c = b[0] - a[0],
        d = b[1] - a[1];
    return Math.sqrt(c * c + d * d)
}

function Kg(a, b) {
    var c = b[0] - a[0],
        d = b[1] - a[1];
    return c * c + d * d
}

function Uc(a) {
    var b = a[0],
        c = a[1];
    return Math.sqrt(b * b + c * c)
}

function Lg(a) {
    var b = a[0],
        c = a[1];
    return b * b + c * c
}

function Mg(a, b) {
    return a[0] = -b[0], a[1] = -b[1], a
}

function Ig(a, b) {
    return a[0] = 1 / b[0], a[1] = 1 / b[1], a
}

function Ng(a, b) {
    var c = b[0],
        d = b[1],
        e = c * c + d * d;
    return e > 0 && (e = 1 / Math.sqrt(e)), a[0] = b[0] * e, a[1] = b[1] * e, a
}

function Og(a, b) {
    return a[0] * b[0] + a[1] * b[1]
}

function Vc(a, b) {
    return a[0] * b[1] - a[1] * b[0]
}

function Sg(a, b, c, d) {
    var e = b[0],
        f = b[1];
    return a[0] = e + d * (c[0] - e), a[1] = f + d * (c[1] - f), a
}

function Qg(a, b, c) {
    var d = b[0],
        e = b[1];
    return a[0] = c[0] * d + c[3] * e + c[6], a[1] = c[1] * d + c[4] * e + c[7], a
}

function Rg(a, b, c) {
    let d = b[0],
        e = b[1];
    return a[0] = c[0] * d + c[4] * e + c[12], a[1] = c[1] * d + c[5] * e + c[13], a
}

function Pg(a, b) {
    return a[0] === b[0] && a[1] === b[1]
}
class Ra extends Array {
    constructor(a = 0, b = a) {
        return super(a, b), this
    }
    get x() {
        return this[0]
    }
    get y() {
        return this[1]
    }
    set x(a) {
        this[0] = a
    }
    set y(a) {
        this[1] = a
    }
    set(a, b = a) {
        return a.length ? this.copy(a) : (Eg(this, a, b), this)
    }
    copy(a) {
        return Fg(this, a), this
    }
    add(a, b) {
        return b ? Sc(this, a, b) : Sc(this, this, a), this
    }
    sub(a, b) {
        return b ? Tc(this, a, b) : Tc(this, this, a), this
    }
    multiply(a) {
        return a.length ? Gg(this, this, a) : uc(this, this, a), this
    }
    divide(a) {
        return a.length ? Hg(this, this, a) : uc(this, this, 1 / a), this
    }
    inverse(a = this) {
        return Ig(this, a), this
    }
    len() {
        return Uc(this)
    }
    distance(a) {
        return a ? Jg(this, a) : Uc(this)
    }
    squaredLen() {
        return this.squaredDistance()
    }
    squaredDistance(a) {
        return a ? Kg(this, a) : Lg(this)
    }
    negate(a = this) {
        return Mg(this, a), this
    }
    cross(a, b) {
        return b ? Vc(a, b) : Vc(this, a)
    }
    scale(a) {
        return uc(this, this, a), this
    }
    normalize() {
        return Ng(this, this), this
    }
    dot(a) {
        return Og(this, a)
    }
    equals(a) {
        return Pg(this, a)
    }
    applyMatrix3(a) {
        return Qg(this, this, a), this
    }
    applyMatrix4(a) {
        return Rg(this, this, a), this
    }
    lerp(a, b) {
        Sg(this, this, a, b)
    }
    clone() {
        return new Ra(this[0], this[1])
    }
    fromArray(a, b = 0) {
        return this[0] = a[b], this[1] = a[b + 1], this
    }
    toArray(a = [], b = 0) {
        return a[b] = this[0], a[b + 1] = this[1], a
    }
}
let nj = 1e3,
    oj = 0;

function xb(a = {}, {
    duration: b = nj,
    paused: c = !1,
    repeat: d = !1,
    repeatDelay: e = 0,
    yoyo: f = !1,
    delay: g = 0,
    easing: i = q => q,
    yoyoEasing: j = i,
    onUpdate: l = Ma,
    onRepeat: o = Ma,
    onComplete: r = Ma,
    ...n
} = {}) {
    let q = oj++,
        h = 0,
        p = -g,
        k = -g,
        m = 0,
        s = 1,
        u = {},
        t, w = Object.keys(n).reduce((B, H) => (B[`${H}`] = n[H], B), {});

    function x({
        deltaTime: B
    }) {
        if (!F.paused && !F.completed) {
            k += B, p += B * s, h = Math.max(p, 0) / b % b, h = ab(h, 0, 1);
            let H = !f || f && (!j || s > 0) ? i(h) : j(h);
            for (let I in n) a[I] = jc(u[I], w[I], H);
            const L = Math.floor(Math.max(k - g, 0) / b);
            l({
                progress: H
            });
            if (d) {
                const I = f ? d * 2 : d;
                if (L > m && (L <= I || d < 0)) {
                    m++;
                    if (m === I) {
                        for (let C in n) a[C] = s > 0 ? w[C] : u[C];
                        F.completed = !0, A()
                    } else !f && s > 0 ? o({
                        repeatCount: m
                    }) : f && s < 0 && o({
                        repeatCount: m / 2
                    }), k -= e, p = f && s > 0 ? b : 0, s = f ? -s : 1
                }
            } else L >= 1 && !F.completed && A()
        }
    }

    function A() {
        F.completed = !0, r({
            repeatCount: m
        }), d || (t(), t = null)
    }

    function D() {
        u = Object.keys(n).reduce((B, H) => (B[`${H}`] = a[H], B), {}), F.started || (t = Q(x), F.started = !0), F.paused = !1
    }

    function y() {
        F.paused || (F.paused = !0)
    }

    function v() {
        F.paused = !1, h = 0, p = 0, m = 0
    }

    function z() {
        t && (t(), t = null), F.started = !1
    }

    function J() {
        t && (t(), t = null)
    }
    const F = {
        _id: q,
        paused: c,
        completed: !1,
        started: !1,
        duration: b,
        play: D,
        pause: y,
        restart: v,
        reset: z,
        kill: J
    };
    return F.paused || D(), F
}

function yh(a) {
    for (let b = 0; b < a.length; b++) a[b].kill(), a[b] = null;
    a = []
}

function Za(a, {
    gl: b,
    derivatives: c,
    vertex: d = !1
}) {
    let e = "",
        f = d ? "out" : "in";
    if (b.renderer.isWebgl2) {
        let g = "void main() {",
            [i, j] = a.split(g);
        e += `#version 300 es
#define attribute in
#define attribute in
#define varying ${f}
#define texture2D texture
#define gl_FragColor FragColor

${i}
out vec4 FragColor;

${g}
${j}
`
    } else c ? e += `
#extension GL_OES_standard_derivatives : enable

${a}
            ` : e += a;
    return e
}

function Ob() {
    return $a() ? 1 : ia(window.innerWidth, 320, 1024, 2.5, 1.5)
}
const Cn = U(ja()),
    En = U(Wb()),
    Gn = U(Jc()),
    Bc = "STROKE",
    Jb = "FULL";

function Bj({
    gl: a,
    geometry: b,
    uniforms: c,
    colors: d,
    mouse: e,
    globalScale: f = 1,
    shadowMinRdm: g = .5,
    position: i
}) {
    let j = new va(a),
        l = [{
            value: Jb,
            weight: 100
        }, {
            value: Bc,
            weight: 30
        }],
        o = Cn.default.weightedSet(l),
        r = {
            x: 0,
            y: 0
        },
        n, q, h = 0,
        p = 0;
    const k = [{
            value: .25,
            weight: 50
        }, {
            value: .35,
            weight: 30
        }, {
            value: .85,
            weight: 12
        }],
        m = [{
            value: {
                s: .15,
                types: [{
                    value: Jb,
                    weight: 100
                }, {
                    value: Bc,
                    weight: 10
                }]
            },
            weight: .2
        }, {
            value: {
                s: .11,
                types: [{
                    value: Jb,
                    weight: 100
                }, {
                    value: Bc,
                    weight: 25
                }]
            },
            weight: 20
        }, {
            value: {
                s: .035,
                types: [{
                    value: Jb,
                    weight: 100
                }, {
                    value: Bc,
                    weight: 100
                }]
            },
            weight: 20
        }];
    let s = m[0].value;
    s += s * .33;
    let u = m[2].value;
    u += u * .33;
    let t = {
            scale: 0,
            growth: 1,
            size: 0
        },
        w = za(1, {
            onUpdate: M => {
                t.growth = M
            }
        });
    const x = [{
        value: 1,
        weight: 1
    }, {
        value: 2,
        weight: .1
    }];
    let A = 0;

    function D({
        vertex: M,
        fragment: O
    }) {
        let P = new db(a, {
            vertex: M,
            fragment: O,
            uniforms: { ...c,
                uColor: {
                    value: new xa()
                },
                uType: {
                    value: o === Jb ? 0 : 1
                },
                uDiff: {
                    value: new Ra()
                },
                uStrokeRadius: {
                    value: .03
                }
            },
            transparent: !0,
            depthWrite: !1
        });
        n = new cb(a, {
            geometry: b,
            program: P
        }), n.velocity = new Ra(), n.acceleration = new Ra(), j.addChild(n), o === Jb && Math.random() > 1 && (q = new cb(a, {
            geometry: b,
            program: new db(a, {
                vertex: M,
                fragment: O,
                uniforms: { ...c,
                    uColor: {
                        value: new xa("#000000")
                    },
                    uType: {
                        value: P.uniforms.uType.value
                    },
                    uDiff: P.uniforms.uDiff,
                    uStrokeRadius: P.uniforms.uStrokeRadius
                },
                transparent: !0,
                depthWrite: !1
            })
        }), j.addChild(q)), z(i), B()
    }
    let y = 0,
        v = {
            x: 0,
            y: 0
        };

    function z(M) {
        h = Cn.default.range(3, 15), p = 0;
        let O = Cn.default.weightedSet(k);
        O = Cn.default.range(O - O * .1, O + O * .1), O *= window.innerWidth * .5 * Ob();
        const P = Cn.default.value() * 2 * Math.PI;
        let R = M ? M.x : O * Math.cos(P),
            V = M ? M.y : O * Math.sin(P),
            W = Cn.default.range(-.5, .2);
        q && (W = .3 + Math.random() * .01), A = Cn.default.weightedSet(x), n.position.x0 = R, n.position.y0 = V, n.position.set(R, V, 0), j.position.z = W;
        let Z = Cn.default.weightedSet(d),
            aa = window.innerWidth * .5,
            ea = window.innerHeight * .5,
            _ = Math.sqrt(R * R + V * V),
            $ = Math.sqrt(aa * aa + ea * ea);
        y = _ / $, y *= y, v.x = Math.sign(Cn.default.range(-1, 1)), v.y = Math.sign(Cn.default.range(-1, 1));
        let Y = Cn.default.weightedSet(m),
            {
                s: X
            } = Y,
            ka = Cn.default.weightedSet(Y.types);
        Y = Cn.default.range(X - X * .33, X + X * .33), n.scale.x0 = Y, n.scale.y0 = Y, n.program.uniforms.uColor.value.copy(Z), n.program.uniforms.uType.value = ka === Jb ? 0 : 1, n.program.uniforms.uDiff.value.x = Cn.default.range(4, 5), n.program.uniforms.uDiff.value.y = Cn.default.range(0, 1e3), n.program.uniforms.uStrokeRadius.value = .003 / n.scale.x0
    }

    function J() {
        let M = t.growth + .1;
        w.target(M)
    }

    function F() {
        if (!n) return;
        let M = $a() ? window.innerWidth * f : window.innerWidth * f * Ob();
        t.size = M
    }

    function B() {
        r.x = Cn.default.range(-1, 1), r.y = Cn.default.range(-1, 1)
    }
    let H = 0,
        L = Gn.default(.755, .05, .855, .06);
    L = Gn.default(.23, 1, .32, 1);
    let I = Gn.default(.23, 1, .32, 1);
    I = Gn.default(.175, 1, .32, 1), I = Gn.default(.44, 2.2, .46, .93);
    let C = {
        x: 0,
        y: 0
    };

    function E({
        deltaTime: M,
        time: O
    }) {
        if (!n) return;
        w.update(), p += M / 1e3, p >= h && !i && z();
        let P = 1.2,
            R = ia(p, 0, P, 0, 1);
        R = ab(R, 0, 1), R = I(R);
        let V = .5,
            W = ia(p, h - V, h, 0, 1);
        W = 1 - ab(W, 0, 1), W = L(W);
        let Z = ia(y, 0, 1, .1, .01);
        C.x += (e.x * v.x - C.x) * Z, C.y += (e.y * v.y - C.y) * Z;
        let aa = C.x * window.innerWidth * .5,
            ea = C.y * window.innerHeight * .5;
        H += M * (R * W);
        const _ = 2;
        let $ = Cn.default.noise3D(n.position.x0, n.position.y0, H * 1e-4, _, A),
            Y = Cn.default.noise3D(n.position.y0, n.position.x0, H * 1e-4, _, A);
        $ *= window.innerWidth * ia(y, 0, 1, .1, .3), Y *= window.innerWidth * ia(y, 0, 1, .1, .3), n.position.x = n.position.x0 + (aa * y + $), n.position.y = n.position.y0 + (ea * y + Y), n.scale.x = n.scale.x0 * t.scale * t.size * R * W * t.growth, n.scale.y = n.scale.x;
        if (q) {
            let X = 2 * R * W;
            q.position.x = n.position.x + X, q.position.y = n.position.y - X, q.scale.copy(n.scale), q.position.z = -1e-4
        }
    }

    function G({
        delay: M = Cn.default.range(200, 800)
    } = {}) {
        xb(t, {
            duration: Cn.default.range(1e3, 1500),
            delay: M,
            scale: 1,
            easing: En.quartInOut,
            onUpdate: () => {
                F()
            }
        })
    }

    function N() {
        n && (j.removeChild(n), n = null)
    }
    const K = {
        transform: j,
        init: D,
        resize: F,
        update: E,
        dispose: N,
        grow: J,
        display: G
    };
    return K
}
var nd = Bj;

function Cj({
    gl: a,
    colors: b,
    geometry: c,
    uniforms: d,
    mouse: e,
    dimensions: f,
    count: g = 25,
    globalScale: i,
    shadowMinRdm: j
}) {
    let l = new va(a),
        o = [],
        r, n, q = [];
    for (let y = 0; y < g; y++) {
        let v = nd({
            gl: a,
            geometry: c,
            uniforms: d,
            colors: b,
            mouse: e,
            dimensions: f,
            globalScale: i,
            shadowMinRdm: j
        });
        o.push(v), l.addChild(v.transform)
    }

    function h() {
        for (let y = 0; y < o.length; y++) o[y].init({
            vertex: r,
            fragment: n
        })
    }
    async function p() {
        async function y() {
            let F = (await
                import ("./shaders/basic.vs.100.js")).default;
            return F
        }
        async function v() {
            let F = (await
                import ("./views/Home/particle.fs.js")).default;
            return F
        }
        let [z, J] = await Promise.all([y(), v()]);
        r = Za(z, {
            gl: a,
            vertex: !0
        }), n = Za(J, {
            gl: a,
            derivatives: !0
        })
    }

    function k() {
        for (let y = 0; y < o.length; y++) o[y].display()
    }
    let m = {
            x: 0,
            y: 0
        },
        s = 0;

    function u() {
        return .01
    }

    function t({
        x: y,
        y: v
    }, {
        x: z,
        y: J
    }) {
        let F = z - y,
            B = J - v;
        return Math.sqrt(F * F + B * B)
    }

    function w({
        deltaTime: y,
        time: v
    }) {
        for (let J = 0; J < o.length; J++) o[J].update({
            deltaTime: y,
            time: v
        });
        let z = t(m, e);
        z > s && (m.x = e.x, m.y = e.y, s = u())
    }

    function x() {
        if (r && n) {
            let y = {
                    x: e.x * window.innerWidth * .5,
                    y: e.y * window.innerHeight * .5
                },
                v = nd({
                    gl: a,
                    geometry: c,
                    uniforms: d,
                    colors: b,
                    mouse: e,
                    dimensions: f,
                    globalScale: i,
                    shadowMinRdm: j,
                    position: y
                });
            v.init({
                vertex: r,
                fragment: n
            }), o.push(v), l.addChild(v.transform), v.display({
                delay: 0
            })
        }
    }

    function A({
        width: y,
        height: v
    }) {
        for (let z = 0; z < o.length; z++) o[z].resize({
            width: y,
            height: v
        })
    }

    function D() {
        sa(q), q = null;
        if (o.length > 0)
            for (let y = 0; y < o.length; y++) o[y].dispose(), o[y] = null;
        o = null
    }
    return {
        transform: l,
        init: h,
        load: p,
        update: w,
        dispose: D,
        display: k,
        resize: A
    }
}
var Ih = Cj;
const Un = U(Wb());
class Fj extends Pb {
    constructor(a, {
        innerRadius: b = .5,
        outerRadius: c = .5,
        thetaSegments: d = 8,
        phiSegments: e = 1,
        thetaStart: f = 0,
        thetaLength: g = 2 * Math.PI,
        attributes: i = {}
    }) {
        const j = [],
            l = [],
            o = [],
            r = [],
            n = (c - b) / e;
        let q = b;
        for (let h = 0; h <= e; h++) {
            for (let p = 0; p <= d; p++) {
                const k = f + p / d * g,
                    m = q * Math.cos(k),
                    s = q * Math.sin(k);
                l.push(m, s, 0);
                const u = (m / c + 1) / 2,
                    t = (s / c + 1) / 2;
                o.push(u, t);
                const w = m / c + .5,
                    x = s / c + .5;
                r.push(w, x)
            }
            q += n
        }
        for (let h = 0; h < e; h++) {
            const p = h * (d + 1);
            for (let k = 0; k < d; k++) {
                const m = k + p,
                    s = m,
                    u = m + d + 1,
                    t = m + d + 2,
                    w = m + 1;
                j.push(s, u, w), j.push(u, t, w)
            }
        }
        Object.assign(i, {
            position: {
                size: 3,
                data: new Float32Array(l)
            },
            uv: {
                size: 2,
                data: new Float32Array(o)
            },
            uv2: {
                size: 2,
                data: new Float32Array(r)
            },
            index: {
                data: new Uint32Array(j)
            }
        }), super(a, i)
    }
}

function Gj({
    gl: a,
    uniforms: b,
    color: c,
    opacity: d = 1
}) {
    let e = new va(a),
        f, g, i, j, l, o = [],
        r = {
            scale: 0,
            opacity: 0
        },
        n = [];

    function q() {
        const t = .9,
            w = 1;
        let x = new Fj(a, {
            innerRadius: t,
            outerRadius: w,
            thetaSegments: 32
        });
        const A = t + (w - t) * .5;
        g = new db(a, {
            vertex: j,
            fragment: l,
            uniforms: { ...b,
                uSize: {
                    value: .003
                },
                uRadius: {
                    value: A
                },
                uOffset: {
                    value: Math.random() * 1e3
                },
                uColor: {
                    value: c
                },
                opacity: {
                    value: r.opacity
                },
                uOpacity: {
                    value: d
                },
                uScale: {
                    value: r.scale
                }
            },
            transparent: !0,
            depthWrite: !1
        });
        let D = new cb(a, {
            geometry: x,
            program: g
        });
        e.addChild(D), i = new db(a, {
            vertex: j,
            fragment: l,
            uniforms: { ...b,
                uSize: {
                    value: .002
                },
                uRadius: {
                    value: A
                },
                uOffset: {
                    value: Math.random() * 1e3
                },
                uColor: {
                    value: c
                },
                opacity: {
                    value: r.opacity
                },
                uOpacity: {
                    value: d
                },
                uScale: {
                    value: r.scale
                }
            },
            transparent: !0,
            depthWrite: !1
        });
        let y = new cb(a, {
            geometry: x,
            program: i
        });
        e.addChild(y), o.push(D, y)
    }
    async function h() {
        async function t() {
            let D = (await
                import ("./views/Home/stroke.vs.js")).default;
            return D
        }
        async function w() {
            let D = (await
                import ("./views/Home/stroke.fs.js")).default;
            return D
        }
        let [x, A] = await Promise.all([t(), w()]);
        j = Za(x, {
            gl: a,
            vertex: !0
        }), l = Za(A, {
            gl: a,
            derivatives: !0
        })
    }

    function p() {
        let t = xb(r, {
                duration: 500,
                opacity: 1,
                delay: 300,
                easing: Un.quartOut,
                onUpdate: () => {
                    g.uniforms.opacity.value = r.opacity, i.uniforms.opacity.value = r.opacity
                }
            }),
            w = xb(r, {
                duration: 1500,
                delay: 300,
                scale: 1,
                easing: Un.quartInOut,
                onUpdate: () => {
                    g.uniforms.uScale.value = r.scale, i.uniforms.uScale.value = r.scale
                }
            });
        n.push(t, w)
    }

    function k() {
        if (o.length <= 0) return;
        o[0].position.x = Math.cos(b.uTime.value * 5e-4 + 3e3) * .1 * o[0].scale.x, o[0].position.y = Math.sin(b.uTime.value * 5e-4 - 2e4) * .1 * o[0].scale.x, o[1].position.x = Math.cos(b.uTime.value * 4e-4 + 3e3) * .03 * o[1].scale.x, o[1].position.y = Math.sin(b.uTime.value * 4e-4 - 2e4) * .03 * o[1].scale.x
    }

    function m({
        width: t
    }) {
        if (o.length <= 0) return;
        if ($a()) o[0].scale.set(t * .22, t * .22, 1), o[1].scale.set(t * .45, t * .45, 1);
        else {
            let w = window.innerWidth < 768 ? .4 : .35,
                x = window.innerWidth < 768 ? .75 : .68;
            o[0].scale.set(t * w, t * w, 1), o[1].scale.set(t * x, t * x, 1)
        }
    }

    function s() {
        yh(n), f && (e.removeChild(f), f = null)
    }
    const u = {
        transform: e,
        init: q,
        load: h,
        resize: m,
        display: p,
        update: k,
        dispose: s
    };
    return u
}
var Hh = Gj;
export {
    xa as a, Ra as b, ma as c, db as d, Xb as e, Wb as f, tc as g, Ob as h, Pb as i, cb as j, va as k, sc as l, Za as m, xb as n, Jc as o, Ih as p, Hh as q
};