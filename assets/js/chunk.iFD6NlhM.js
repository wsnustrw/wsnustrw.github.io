import {
    b as wa
} from "./chunk.CeGTj4_V.js";

function Ma() {}

function Pa(a, b, c = {}) {
    return a.addEventListener("click", b, c), () => {
        a.removeEventListener("click", b, c)
    }
}

function ya(a, b, c = {}) {
    return a.addEventListener("mouseenter", b, c), () => {
        a.removeEventListener("mouseenter", b, c)
    }
}
let lc = 0;

function la(a, {
    fire: b = !1
} = {}) {
    let c = lc++;
    return wa.push({
        index: c,
        fn: a
    }), b && a(), () => {
        let d;
        for (let e = 0; e < wa.length; e++)
            if (wa[e].index === c) {
                d = e;
                break
            }
        wa.splice(d, 1)
    }
}

function ia(a, b, c, d, e) {
    return (a - b) / (c - b) * (e - d) + d
}
const S = {
    stiffness: .1,
    damping: .8,
    mass: 1,
    precision: .01
};

function La() {}

function zb(a, b, c = S.precision) {
    return a < b + c && a > b - c
}

function oc(a, {
    stiffness: b = S.stiffness,
    damping: c = S.damping,
    mass: d = S.mass,
    precision: e = S.precision,
    onUpdate: f = La,
    onComplete: g = La
} = S) {
    let i, j, l = null,
        o = !1;

    function r(k) {
        l = k, o = !1
    }

    function n() {
        if (l !== null) {
            let k = j - i,
                m = (l - j) * p.stiffness - k * p.damping;
            m /= p.mass, i = j, j += k + m, zb(j, l, p.precision) && !o ? (o = !0, j = l, f(q()), g(q())) : o || f(q())
        }
    }

    function q() {
        return j
    }

    function h(k) {
        i = k, j = k, o = !1
    }
    const p = {
        stiffness: b,
        damping: c,
        precision: e,
        mass: d,
        update: n,
        getValue: q,
        setValue: h,
        target: r
    };
    return p.setValue(a), p
}

function pc(a, {
    stiffness: b = S.stiffness,
    damping: c = S.damping,
    mass: d = S.mass,
    precision: e = S.precision,
    onUpdate: f = La,
    onComplete: g = La
} = S) {
    let i, j, l, o = {},
        r = [],
        n = !1;

    function q(s) {
        n = !1, Object.keys(s).forEach(u => {
            let t = r.indexOf(u);
            t >= 0 && r.splice(t, 1), o[u] = s[u]
        })
    }

    function h() {
        if (Object.keys(o).length > 0) {
            for (let u = 0; u < i.length; u++) {
                let t = i[u];
                if (o[t] !== void 0 && !r.includes(t)) {
                    let w = l[t] - j[t],
                        x = (o[t] - l[t]) * m.stiffness - w * m.damping;
                    x /= m.mass, j[t] = l[t], l[t] += w + x, a[t] = l[t], zb(l[t], o[t], m.precision) && !r.includes(t) && r.push(t)
                }
            }
            let s = Object.keys(o).every(u => r.includes(u));
            s && !n ? (n = !0, Object.keys(o).forEach(u => {
                l[u] = o[u]
            }), f(k()), g(k())) : n || f(k())
        }
    }

    function p(s) {
        i = Object.keys(s), j = i.reduce((u, t) => (u[t] = s[t], u), {}), l = i.reduce((u, t) => (u[t] = s[t], u), {}), n = []
    }

    function k() {
        return l
    }
    const m = {
        stiffness: b,
        damping: c,
        precision: e,
        mass: d,
        update: h,
        getValue: k,
        setValue: p,
        target: q
    };
    return m.setValue(a), m
}

function qc(a, {
    stiffness: b = S.stiffness,
    damping: c = S.damping,
    mass: d = S.mass,
    precision: e = S.precision,
    onUpdate: f = La,
    onComplete: g = La
} = S) {
    let i = [],
        j = [],
        l = null,
        o = [];

    function r(k) {
        if (!Array.isArray(k)) {
            console.error("Spring: target must match the type of startValue");
            return
        }
        if (k.length !== j.length) {
            console.error("Spring: target length must match the length of the first argument.");
            return
        }
        l = k, o = []
    }

    function n() {
        l !== null && j.forEach((k, m) => {
            let s = j[m] - i[m],
                u = (l[m] - j[m]) * p.stiffness - s * p.damping;
            u /= p.mass, i[m] = j[m], j[m] += s + u, a[m] = j[m], zb(j[m], l[m], p.precision) && !o.includes(m) ? (o.push(m), o.length === a.length && (f(l), g())) : !o.length === a.length && f(q())
        })
    }

    function q() {
        return j
    }

    function h(k) {
        j = k.map(m => m), i = k.map(m => m), o = []
    }
    const p = {
        stiffness: b,
        damping: c,
        precision: e,
        mass: d,
        update: n,
        getValue: q,
        setValue: h,
        target: r
    };
    return p.setValue(a), p
}

function rc(a, b) {
    return Array.isArray(a) ? qc(a, b) : typeof a === "object" ? pc(a, b) : oc(a, b)
}
var za = rc;
const mc = Math.PI / 180;
const nc = 180 / Math.PI;
export {
    Ma as a, Pa as b, ya as c, ia as d, la as e, za as f
};