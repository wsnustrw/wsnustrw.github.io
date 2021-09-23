var Ta = Object.defineProperty,
    Gb = Object.prototype.hasOwnProperty,
    T = (a, b) => () => (b || (b = {
        exports: {}
    }, a(b.exports, b)), b.exports),
    Hb = a => Ta(a, "__esModule", {
        value: !0
    }),
    hc = (a, b) => {
        Hb(a);
        for (var c in b) Ta(a, c, {
            get: b[c],
            enumerable: !0
        })
    },
    ic = (a, b) => {
        Hb(a);
        if (typeof b === "object" || typeof b === "function")
            for (let c in b) Gb.call(b, c) && !Gb.call(a, c) && c !== "default" && Ta(a, c, {
                get: () => b[c],
                enumerable: !0
            });
        return a
    },
    U = a => a && a.__esModule ? a : ic(Ta({}, "default", {
        value: a,
        enumerable: !0
    }), a);
var Na = T((a, b) => {
    (function() {
        "use strict";
        var c = .5 * (Math.sqrt(3) - 1),
            d = (3 - Math.sqrt(3)) / 6,
            e = 1 / 3,
            f = 1 / 6,
            g = (Math.sqrt(5) - 1) / 4,
            i = (5 - Math.sqrt(5)) / 20;

        function j(n) {
            var q;
            typeof n == "function" ? q = n : n ? q = o(n) : q = Math.random, this.p = l(q), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
            for (var h = 0; h < 512; h++) this.perm[h] = this.p[h & 255], this.permMod12[h] = this.perm[h] % 12
        }
        j.prototype = {
            grad3: new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
            grad4: new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]),
            noise2D: function(n, q) {
                var h = this.permMod12,
                    p = this.perm,
                    k = this.grad3,
                    m = 0,
                    s = 0,
                    u = 0,
                    t = (n + q) * c,
                    w = Math.floor(n + t),
                    x = Math.floor(q + t),
                    A = (w + x) * d,
                    D = w - A,
                    y = x - A,
                    v = n - D,
                    z = q - y,
                    J, F;
                v > z ? (J = 1, F = 0) : (J = 0, F = 1);
                var B = v - J + d,
                    H = z - F + d,
                    L = v - 1 + 2 * d,
                    I = z - 1 + 2 * d,
                    C = w & 255,
                    E = x & 255,
                    G = .5 - v * v - z * z;
                if (G >= 0) {
                    var N = h[C + p[E]] * 3;
                    G *= G, m = G * G * (k[N] * v + k[N + 1] * z)
                }
                var K = .5 - B * B - H * H;
                if (K >= 0) {
                    var M = h[C + J + p[E + F]] * 3;
                    K *= K, s = K * K * (k[M] * B + k[M + 1] * H)
                }
                var O = .5 - L * L - I * I;
                if (O >= 0) {
                    var P = h[C + 1 + p[E + 1]] * 3;
                    O *= O, u = O * O * (k[P] * L + k[P + 1] * I)
                }
                return 70 * (m + s + u)
            },
            noise3D: function(n, q, h) {
                var p = this.permMod12,
                    k = this.perm,
                    m = this.grad3,
                    s, u, t, w, x = (n + q + h) * e,
                    A = Math.floor(n + x),
                    D = Math.floor(q + x),
                    y = Math.floor(h + x),
                    v = (A + D + y) * f,
                    z = A - v,
                    J = D - v,
                    F = y - v,
                    B = n - z,
                    H = q - J,
                    L = h - F,
                    I, C, E, G, N, K;
                B >= H ? H >= L ? (I = 1, C = 0, E = 0, G = 1, N = 1, K = 0) : B >= L ? (I = 1, C = 0, E = 0, G = 1, N = 0, K = 1) : (I = 0, C = 0, E = 1, G = 1, N = 0, K = 1) : H < L ? (I = 0, C = 0, E = 1, G = 0, N = 1, K = 1) : B < L ? (I = 0, C = 1, E = 0, G = 0, N = 1, K = 1) : (I = 0, C = 1, E = 0, G = 1, N = 1, K = 0);
                var M = B - I + f,
                    O = H - C + f,
                    P = L - E + f,
                    R = B - G + 2 * f,
                    V = H - N + 2 * f,
                    W = L - K + 2 * f,
                    Z = B - 1 + 3 * f,
                    aa = H - 1 + 3 * f,
                    ea = L - 1 + 3 * f,
                    _ = A & 255,
                    $ = D & 255,
                    Y = y & 255,
                    X = .6 - B * B - H * H - L * L;
                if (X < 0) s = 0;
                else {
                    var ka = p[_ + k[$ + k[Y]]] * 3;
                    X *= X, s = X * X * (m[ka] * B + m[ka + 1] * H + m[ka + 2] * L)
                }
                var ba = .6 - M * M - O * O - P * P;
                if (ba < 0) u = 0;
                else {
                    var oa = p[_ + I + k[$ + C + k[Y + E]]] * 3;
                    ba *= ba, u = ba * ba * (m[oa] * M + m[oa + 1] * O + m[oa + 2] * P)
                }
                var ca = .6 - R * R - V * V - W * W;
                if (ca < 0) t = 0;
                else {
                    var pa = p[_ + G + k[$ + N + k[Y + K]]] * 3;
                    ca *= ca, t = ca * ca * (m[pa] * R + m[pa + 1] * V + m[pa + 2] * W)
                }
                var da = .6 - Z * Z - aa * aa - ea * ea;
                if (da < 0) w = 0;
                else {
                    var qa = p[_ + 1 + k[$ + 1 + k[Y + 1]]] * 3;
                    da *= da, w = da * da * (m[qa] * Z + m[qa + 1] * aa + m[qa + 2] * ea)
                }
                return 32 * (s + u + t + w)
            },
            noise4D: function(n, q, h, p) {
                var k = this.perm,
                    m = this.grad4,
                    s, u, t, w, x, A = (n + q + h + p) * g,
                    D = Math.floor(n + A),
                    y = Math.floor(q + A),
                    v = Math.floor(h + A),
                    z = Math.floor(p + A),
                    J = (D + y + v + z) * i,
                    F = D - J,
                    B = y - J,
                    H = v - J,
                    L = z - J,
                    I = n - F,
                    C = q - B,
                    E = h - H,
                    G = p - L,
                    N = 0,
                    K = 0,
                    M = 0,
                    O = 0;
                I > C ? N++ : K++, I > E ? N++ : M++, I > G ? N++ : O++, C > E ? K++ : M++, C > G ? K++ : O++, E > G ? M++ : O++;
                var P, R, V, W, Z, aa, ea, _, $, Y, X, ka;
                P = N >= 3 ? 1 : 0, R = K >= 3 ? 1 : 0, V = M >= 3 ? 1 : 0, W = O >= 3 ? 1 : 0, Z = N >= 2 ? 1 : 0, aa = K >= 2 ? 1 : 0, ea = M >= 2 ? 1 : 0, _ = O >= 2 ? 1 : 0, $ = N >= 1 ? 1 : 0, Y = K >= 1 ? 1 : 0, X = M >= 1 ? 1 : 0, ka = O >= 1 ? 1 : 0;
                var ba = I - P + i,
                    oa = C - R + i,
                    ca = E - V + i,
                    pa = G - W + i,
                    da = I - Z + 2 * i,
                    qa = C - aa + 2 * i,
                    kb = E - ea + 2 * i,
                    lb = G - _ + 2 * i,
                    mb = I - $ + 3 * i,
                    nb = C - Y + 3 * i,
                    ob = E - X + 3 * i,
                    pb = G - ka + 3 * i,
                    qb = I - 1 + 4 * i,
                    rb = C - 1 + 4 * i,
                    sb = E - 1 + 4 * i,
                    tb = G - 1 + 4 * i,
                    Aa = D & 255,
                    Ba = y & 255,
                    Ca = v & 255,
                    Da = z & 255,
                    Ea = .6 - I * I - C * C - E * E - G * G;
                if (Ea < 0) s = 0;
                else {
                    var Ua = k[Aa + k[Ba + k[Ca + k[Da]]]] % 32 * 4;
                    Ea *= Ea, s = Ea * Ea * (m[Ua] * I + m[Ua + 1] * C + m[Ua + 2] * E + m[Ua + 3] * G)
                }
                var Fa = .6 - ba * ba - oa * oa - ca * ca - pa * pa;
                if (Fa < 0) u = 0;
                else {
                    var Va = k[Aa + P + k[Ba + R + k[Ca + V + k[Da + W]]]] % 32 * 4;
                    Fa *= Fa, u = Fa * Fa * (m[Va] * ba + m[Va + 1] * oa + m[Va + 2] * ca + m[Va + 3] * pa)
                }
                var Ga = .6 - da * da - qa * qa - kb * kb - lb * lb;
                if (Ga < 0) t = 0;
                else {
                    var Wa = k[Aa + Z + k[Ba + aa + k[Ca + ea + k[Da + _]]]] % 32 * 4;
                    Ga *= Ga, t = Ga * Ga * (m[Wa] * da + m[Wa + 1] * qa + m[Wa + 2] * kb + m[Wa + 3] * lb)
                }
                var Ha = .6 - mb * mb - nb * nb - ob * ob - pb * pb;
                if (Ha < 0) w = 0;
                else {
                    var Xa = k[Aa + $ + k[Ba + Y + k[Ca + X + k[Da + ka]]]] % 32 * 4;
                    Ha *= Ha, w = Ha * Ha * (m[Xa] * mb + m[Xa + 1] * nb + m[Xa + 2] * ob + m[Xa + 3] * pb)
                }
                var Ia = .6 - qb * qb - rb * rb - sb * sb - tb * tb;
                if (Ia < 0) x = 0;
                else {
                    var Ya = k[Aa + 1 + k[Ba + 1 + k[Ca + 1 + k[Da + 1]]]] % 32 * 4;
                    Ia *= Ia, x = Ia * Ia * (m[Ya] * qb + m[Ya + 1] * rb + m[Ya + 2] * sb + m[Ya + 3] * tb)
                }
                return 27 * (s + u + t + w + x)
            }
        };

        function l(n) {
            var q, h = new Uint8Array(256);
            for (q = 0; q < 256; q++) h[q] = q;
            for (q = 0; q < 255; q++) {
                var p = q + ~~(n() * (256 - q)),
                    k = h[q];
                h[q] = h[p], h[p] = k
            }
            return h
        }
        j._buildPermutationTable = l;

        function o() {
            var n = 0,
                q = 0,
                h = 0,
                p = 1,
                k = r();
            n = k(" "), q = k(" "), h = k(" ");
            for (var m = 0; m < arguments.length; m++) n -= k(arguments[m]), n < 0 && (n += 1), q -= k(arguments[m]), q < 0 && (q += 1), h -= k(arguments[m]), h < 0 && (h += 1);
            return k = null,
                function() {
                    var s = 2091639 * n + p * 23283064365386963e-26;
                    return n = q, q = h, h = s - (p = s | 0)
                }
        }

        function r() {
            var n = 4022871197;
            return function(q) {
                q = q.toString();
                for (var h = 0; h < q.length; h++) {
                    n += q.charCodeAt(h);
                    var p = .02519603282416938 * n;
                    n = p >>> 0, p -= n, p *= n, n = p >>> 0, p -= n, n += p * 4294967296
                }
                return (n >>> 0) * 23283064365386963e-26
            }
        }
        typeof define !== "undefined" && define.amd && define(function() {
            return j
        }), typeof a !== "undefined" ? a.SimplexNoise = j : typeof window !== "undefined" && (window.SimplexNoise = j), typeof b !== "undefined" && (b.exports = j)
    })()
});
var ja = T((n, q) => {
    hc(n, {
        noise3D: () => d,
        pick: () => g,
        range: () => e,
        rangeFloor: () => f,
        shuffle: () => j,
        value: () => i,
        weighted: () => r,
        weightedSet: () => l,
        weightedSetIndex: () => o
    });
    const a = U(Na());
    let c = new a.default();

    function d(h, p, k, m = 1, s = 1) {
        if (!isFinite(h)) throw new TypeError("x component for noise() must be finite");
        if (!isFinite(p)) throw new TypeError("y component for noise() must be finite");
        if (!isFinite(k)) throw new TypeError("z component for noise() must be finite");
        return s * c.noise3D(h * m, p * m, k * m)
    }

    function e(h, p) {
        p === void 0 && (p = h, h = 0);
        if (typeof h !== "number" || typeof p !== "number") throw new TypeError("Expected all arguments to be numbers");
        return i() * (p - h) + h
    }

    function f(h, p) {
        p === void 0 && (p = h, h = 0);
        if (typeof h !== "number" || typeof p !== "number") throw new TypeError("Expected all arguments to be numbers");
        return Math.floor(e(h, p))
    }

    function g(h) {
        return h.length === 0 ? void 0 : h[f(0, h.length)]
    }

    function i() {
        return Math.random()
    }

    function j(h) {
        if (!Array.isArray(h)) throw new TypeError("Expected Array, got " + typeof h);
        for (var p, k, m = h.length, s = h.slice(); m;) p = Math.floor(i() * m--), k = s[m], s[m] = s[p], s[p] = k;
        return s
    }

    function l(h) {
        return h = h || [], h.length === 0 ? null : h[o(h)].value
    }

    function o(h) {
        return h = h || [], h.length === 0 ? -1 : r(h.map(function(p) {
            return p.weight
        }))
    }

    function r(h) {
        h = h || [];
        if (h.length === 0) return -1;
        var p = 0,
            k;
        for (k = 0; k < h.length; k++) p += h[k];
        if (p <= 0) throw new Error("Weights must sum to > 0");
        var m = i() * p;
        for (k = 0; k < h.length; k++) {
            if (m < h[k]) return k;
            m -= h[k]
        }
        return 0
    }
    q.exports = {
        range: e,
        rangeFloor: f,
        shuffle: j,
        pick: g,
        value: i,
        weightedSet: l,
        noise3D: d
    }
});
const ha = function() {
    return performance && performance.now ? function a() {
        return performance.now()
    } : Date.now
}();

function ua(a, b, c = {}) {
    return a.addEventListener("mousemove", b, c), () => {
        a.removeEventListener("mousemove", b, c)
    }
}

function na(a, b, c = {}) {
    return a.addEventListener("mouseleave", b, c), () => {
        a.removeEventListener("mouseleave", b, c)
    }
}
let Eb, ga = [],
    _b = 0,
    ta, hb, ib;

function Fb() {
    Eb = requestAnimationFrame(Fb), ta = ha(), hb = ta - ib, ib = ta;
    for (let a = 0; a < ga.length; a++) ga[a].fn({
        time: ta,
        deltaTime: hb
    })
}

function Q(a, {
    fire: b = !1
} = {}) {
    b && a(), ga.length === 0 && (ta = ha(), ib = ta, hb = 0, Fb());
    let c = _b++;
    return ga.push({
        index: c,
        fn: a
    }), () => {
        let d;
        for (let e = 0; e < ga.length; e++)
            if (ga[e].index === c) {
                d = e;
                break
            }
        ga.splice(d, 1), ga.length === 0 && cancelAnimationFrame(Eb)
    }
}
let wa = [];
window.addEventListener("resize", () => {
    for (let a = 0; a < wa.length; a++) wa[a].fn()
});

function fc(a) {
    let b = null,
        c = a,
        d = [];

    function e(l) {
        c !== l && (b = c, c = l, i())
    }

    function f(l) {
        e(l(c))
    }

    function g(l) {
        return d.push(l), () => {
            let o = d.indexOf(l);
            d.splice(o, 1)
        }
    }

    function i() {
        d.forEach(l => l(c, b))
    }

    function j() {
        return c
    }
    return {
        set: e,
        read: j,
        subscribe: g,
        update: f
    }
}
var Qa = fc;
const Ib = Qa(!1),
    Qb = Qa(!1),
    gd = Qa(!1);

function Ub(a, {
    frameCount: b = 1
} = {}) {
    let c = 0,
        d = Q(() => {
            c++;
            if (c === b) {
                try {
                    a(), d()
                } catch (e) {
                    console.error(e), d()
                }
                d = null
            }
        })
}
export {
    ha as a, wa as b, Ib as c, Qb as d, na as e, ua as f, gd as g, Ub as h, T as i, Q as j, Qa as k, U as l, ja as m
};