import {
    a as jb,
    b as wb,
    c as Oa
} from "./chunk.C_jMmbhp.js";
import {
    a as sa,
    b as _a,
    c as ub,
    d as Ja,
    e as Ka,
    f as fa,
    g as Cb
} from "./chunk.mxUo6q2y.js";
import {
    c as Ib,
    e as na,
    f as ua,
    j as Q,
    l as U,
    m as ja
} from "./chunk.CeGTj4_V.js";

function fb(a, b, c = {}) {
    let d = ua(a, b, c),
        e = Ka(a, b, c);
    return () => {
        d(), d = null, e(), e = null
    }
}

function gb(a, b, c) {
    let d = ub(a, b, c),
        e = Ja(a, b, c);
    return () => {
        d(), d = null, e(), e = null
    }
}

function yb(a, b) {
    for (let c in b) fa(a, c, b[c])
}
const vb = ["blue", "yellow", "red", "green", "purple", "orange"];
let gi = function() {
    let a = getComputedStyle(document.documentElement);
    return vb.reduce((b, c) => {
        let d = a.getPropertyValue(`--color-${c}`);
        d = d.replace(" ", ""), b[c] = d;
        let e = a.getPropertyValue(`--color-${c}-dark`);
        return e = e.replace(" ", ""), b[`${c}Dark`] = e, b
    }, {})
}();

function jd({
    name: a = "01",
    vw: b = 540,
    vh: c = 540,
    classes: d = []
} = {}) {
    let e = `<svg aria-hidden="true"
        class="${d.join(" ")} svg svg-${a}"
        viewBox="0 0 ${b} ${c}"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <use xlink:href="/assets/svg/sprite.svg#${a}" x="0"></use>
    </svg>`;
    return e
}
var ac = jd;

function hd(a) {
    let b = [];

    function c() {
        return b.length === 0 ? a() : b.pop()
    }

    function d(e) {
        b.push(e)
    }
    return {
        get: c,
        release: d
    }
}
var Sb = hd;

function bc(a, b) {
    let c = a,
        d = !1;
    for (; c && !d;) b.includes(c) && (d = !0), c = c.parentNode;
    return d
}
const Vi = U(ja());

function dd(a, {
    disallowList: b = [],
    bindToSmoothScroll: c = !0
} = {}) {
    let d = 0,
        e = 24,
        f = [],
        g = [],
        i = 1e3,
        j = 75,
        l = {
            mousedown: !1,
            autoMode: !1,
            mouseX: 0,
            mouseY: 0,
            minDelay: i
        },
        o = 0,
        r = Sb(x),
        n, q = ["SPAN", "P", "H1", "H2"],
        h = a;
    if (window.scroll.isSmooth && c) {
        let v = document.createElement("div");
        h = v, yb(v, {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none"
        }), a.appendChild(v);
        let z = window.scroll.bind(v);
        g.push(z)
    }

    function p(v) {
        if (v.which === 3 || v.button === 2) return;
        let z = v.touches && v.touches.length > 0;
        if (Cb(v.target, ["A", "BUTTON"]) || bc(v.target, b)) return;
        Cb(v.target, ["P", "SPAN", "H1", "H2"]) || v.preventDefault(), l.mouseX = z ? v.touches[0].pageX : v.pageX, l.mouseY = z ? v.touches[0].pageY : v.pageY, D({
            x: l.mouseX,
            y: l.mouseY
        }), q.includes(v.target.nodeName) || (o = 0, l.mousedown = !0, a.style.pointerEvents = "none")
    }

    function k() {
        l.autoMode || (l.autoMode = !0, l.minDelay = j, a.style.userSelect = "none"), o = 0
    }

    function m() {
        l.mousedown = !1, l.autoMode = !1, l.minDelay = i, a.style.pointerEvents = null, a.style.userSelect = null
    }
    let s = _a(a, v => {
            if (Ib.read() || jb()) return;
            p(v)
        }, {
            passive: !1
        }),
        u = gb(window, () => {
            m()
        }),
        t = na(window, () => {
            m()
        }),
        w = fb(window, v => {
            let z = v.touches && v.touches.length > 0;
            z && l.autoMode && v.preventDefault(), l.mouseX = z ? v.touches[0].pageX : v.pageX, l.mouseY = z ? v.touches[0].pageY : v.pageY
        }, {
            passive: !1
        });
    g.push(s, u, t, w);

    function x() {
        let v = document.createElement("div"),
            z = Math.floor(Math.random() * e),
            J = `sticker-${z}`;
        v.innerHTML = ac({
            name: J
        }), v.classList.add("sticker"), fa(v, "zIndex", d), h.appendChild(v);
        let F = ed(v);
        return F
    }
    let A = [...vb];

    function D(v) {
        d++;
        let z = Vi.default.range(.7, 1),
            J = Vi.default.rangeFloor(-10, 10),
            [F] = A.splice(Vi.default.rangeFloor(0, A.length - 1), 1);
        A.length === 0 && (A = [...vb]);
        let B = r.get();
        B.set({
            zIndex: d,
            x: v.x,
            y: v.y,
            rotation: J,
            scale: z,
            color: F
        }), f.push(B), f.length > 0 && !n && (n = Q(y))
    }

    function y({
        deltaTime: v
    }) {
        o += v, o > l.minDelay && l.mousedown && (k(), D({
            x: l.mouseX,
            y: l.mouseY
        }));
        for (let z = 0; z < f.length; z++) f[z].update({
            deltaTime: v
        }), f[z].hidden && (r.release(f[z]), f.splice(z, 1));
        f.length === 0 && (n(), n = null)
    }
    return () => {
        sa(g), g = null
    }
}
var cc = dd;

function ed(a) {
    let b = 300,
        c = j(),
        d = {
            visible: !1
        },
        e = {
            x: 0,
            y: 0,
            scale: 1,
            rotation: 0
        };
    async function f() {
        await Oa(), a.style.setProperty("--duration", `${b}ms`), await Oa(), d.visible = !0, a.style.setProperty("--opacity", 1), a.style.setProperty("--scale", e.scale), a.style.setProperty("--rotation", `${e.rotation}deg`)
    }
    async function g() {
        d.visible = !1, a.style.setProperty("--easing", "var(--easing-in)"), a.style.setProperty("--opacity", 0), a.style.setProperty("--scale", 0), await wb(b), r.hidden = !0
    }
    async function i({
        x: n,
        y: q,
        zIndex: h,
        rotation: p,
        scale: k,
        color: m
    }) {
        e.x = n, e.y = q, e.scale = k, e.rotation = p, r.hidden = !1, c = j(), a.style.setProperty("--duration", "0ms"), fa(a, "zIndex", h), await Oa(), a.style.setProperty("--tx", `${n}px`), a.style.setProperty("--ty", `${q}px`), a.style.setProperty("--easing", "var(--easing-out)"), a.style.setProperty("--currentColor", `var(--color-${m})`), f()
    }

    function j() {
        return Vi.default.range(2e3, 4e3)
    }

    function l({
        deltaTime: n = 0
    } = {}) {
        c -= n, c <= 0 && d.visible && g()
    }

    function o() {
        a.parentNode.removeChild(a)
    }
    const r = {
        hiding: !1,
        hidden: !1,
        update: l,
        destroy: o,
        set: i
    };
    return r
}
export {
    yb as a, vb as b, gi as c, Sb as d, cc as e
};