import "../chunk.C-y8QDGy.js";
import {
    b as yc
} from "../chunk.tVq2pLbq.js";

import {
    b as Ic,
    c as cd,
    d as Eh
} from "../chunk.Jp5GJfej.js";
import {
    a as $a,
    b as Mb
} from "../chunk.X9R5jYKj.js";
import {
    a as ab
} from "../chunk.9o_ia7Wv.js";
import {
    a as Ab,
    b as eb
} from "../chunk.UMr-yWWQ.js";
import {
    a as Tb,
    b as Nb
} from "../chunk.AAX0GPHs.js";
import {
    c as ya,
    d as ia,
    e as la,
    f as za
} from "../chunk.iFD6NlhM.js";
import {
    b as vb,
    e as cc
} from "../chunk.aenqHFRN.js";
import {
    a as jb,
    b as wb
} from "../chunk.C_jMmbhp.js";
import {
    f as fa
} from "../chunk.mxUo6q2y.js";
import {
    e as na,
    g as gd,
    j as Q,
    l as U,
    m as ja
} from "../chunk.CeGTj4_V.js";

function Dc(a, b) {
    return a.addEventListener("blur", b), () => {
        a.removeEventListener("blur", b)
    }
}

function Ec(a, b, c = {}) {
    return a.addEventListener("focus", b, c), () => {
        a.removeEventListener("focus", b, c)
    }
}
let Hj = new Map();

function po(a, b, c) {
    let d = b.dataset.id,
        e = b.dataset.type,
        f = b.querySelector(".lab__picture"),
        g = f.querySelector("img"),
        i = b.querySelector(".lab__title a"),
        j, l, o, r, n = {
            loading: !1,
            loaded: !1
        };
    const q = e === "video";
    let h;
    q && (j = ya(f, () => m()), l = na(f, () => s()), o = Ec(i, () => m()), r = Dc(i, () => s()));

    function p() {
        return new Promise((x, A) => {
            let D = b.dataset.video;
            if (Hj.has(D)) h = Hj.get(D), h.play(), n.loaded = !0, k(), x();
            else {
                h = document.createElement("video"), h.loop = !0, h.muted = !0, h.setAttribute("muted", ""), h.setAttribute("autoplay", ""), h.setAttribute("playsinline", ""), Hj.set(D, h), n.loading = !0, fa(f, "cursor", "progress");

                function y() {
                    h.removeEventListener("canplaythrough", y), h.removeEventListener("error", v), n.loading = !1, n.loaded = !0, fa(f, "cursor", null), Ab() || h.play(), x()
                }

                function v(z) {
                    console.error(z), A(z)
                }
                h.addEventListener("canplaythrough", y), h.addEventListener("error", v), h.src = D, k()
            }
        })
    }

    function k() {
        f.innerHTML = "", f.appendChild(h)
    }

    function m() {
        n.loaded && h.play()
    }

    function s() {
        if (!n.loaded) return;
        Ab() && (h.currentTime = 0, h.pause())
    }
    async function u() {
        fa(b, "cursor", "progress"), q ? await p() : await Tb(g.dataset.src, {
            srcset: g.dataset.srcset,
            sizes: g.dataset.sizes,
            img: g
        }), fa(b, "cursor", null), Mb(() => {
            f.classList.add("loaded")
        })
    }

    function t() {
        j && j(), l && l(), o && o(), r && r()
    }
    const w = {
        $view: b,
        load: u,
        speed: c,
        dispose: t
    };
    return w
}
var Hk = po;
const kt = U(ja());

function qo(a, b, c) {
    let d = b.querySelector(".mail__link"),
        e = b.querySelector(".mail__text--big"),
        f = b.querySelector(".svg"),
        g = yc(d),
        i = kt.default.pick(vb.filter(C => C !== "yellow"));
    b.style.setProperty("--backgroundColor", `var(--color-${i})`);
    let j = {
            underlinePY: 0,
            underlineVY: 0,
            underlineAY: 0,
            applyGravity: 0,
            ty: null
        },
        l, o, r, n = 0,
        q = 0,
        h = 0;

    function p(C) {
        let E = C.getBoundingClientRect(),
            G = E.width,
            N = E.height,
            K = E.top,
            M = E.left,
            O = E.right,
            P = K + E.height;
        return {
            width: G,
            height: N,
            top: K,
            bottom: P,
            right: O,
            left: M
        }
    }
    let k = la(() => {
            l = p(d), o = p(e), r = p(f), n = l.bottom - o.bottom, q = Math.asin(n * .5 / o.width) * 180 / Math.PI, h = 0, b.style.setProperty("--ty", "0%")
        }, {
            fire: !0
        }),
        m = Q(H),
        s = cd(d, ({
            progress: C
        }) => {
            let E = $a() ? ia(C, 0, 1, 65, -65) : 0;
            E = Math.round(E * 100) / 100, E !== j.ty && (j.ty = E, b.style.setProperty("--ty", `${E}%`))
        }),
        u = "ROTATE_LEFT",
        t = "ROTATE_RIGHT",
        w = "ROTATE_LEFT",
        x = [u, t, w],
        A = kt.default.rangeFloor(0, x.length - 1),
        D = za({
            x: 0,
            y: 0,
            scale: 1
        }, {
            stiffness: .1,
            damping: .01,
            onUpdate: ({
                x: C,
                y: E,
                scale: G
            }) => {}
        }),
        y = ya(d, () => {
            F()
        }),
        v = na(d, () => {
            B()
        }),
        z = Ic(d, () => {
            jb() && F()
        }, {
            threshold: 1
        }),
        J = Eh(d, () => {
            jb() && B()
        }, {
            threshold: 1
        });

    function F() {
        f.style.setProperty("--scale", .9), f.style.setProperty("--rotation", "0deg"), A += 1, A %= x.length;
        let C = "50%";
        A === 0 ? (C = "0%", h = q) : A === 1 && (C = "100%", h = -q), d.style.setProperty("--originX", C), d.style.setProperty("--duration", "0ms"), j.underlineVY = 0, j.applyGravity = !0
    }

    function B() {
        f.style.setProperty("--scale", .5), f.style.setProperty("--rotation", "10deg"), j.underlineAY = 0, j.underlineVY = 0, j.underlinePY = 0, j.applyGravity = !1, d.style.setProperty("--duration", "250ms"), d.style.setProperty("--tyUnderline", "0px"), d.style.setProperty("--rotation", "0deg")
    }

    function H() {
        D.update();
        if (j.applyGravity) {
            j.underlineAY = .03, j.underlineVY += j.underlineAY, j.underlinePY += j.underlineVY, j.underlinePY >= 1 && (j.underlineVY *= -1), j.underlinePY = ab(j.underlinePY, 0, 1);
            if (A === 0 || A === 1) {
                let C = j.underlinePY * h;
                d.style.setProperty("--rotation", `${C}deg`)
            } else if (A === 2) {
                let C = j.underlinePY * n * .5;
                d.style.setProperty("--tyUnderline", `${C}px`)
            }
        }
    }

    function L() {
        m(), y(), v(), k(), z(), J(), s(), g(), g = null, d = null
    }
    const I = {
        $view: b,
        speed: c,
        dispose: L
    };
    return I
}
var Ik = qo;

function xk(a) {
    let b = -1,
        c = [];
    for (let d = 0; d < a.length; d++) {
        let e = a[d],
            f = e.getBoundingClientRect().y;
        f !== b && (b = f, c[c.length] = []), c[c.length - 1].push(e)
    }
    return c
}

function no() {
    let a = [],
        b = [];

    function c() {
        let i = document.querySelector(".view--lab"),
            j = i.querySelector(".intro__title"),
            l = i.querySelector(".intro__text"),
            o = [...i.querySelectorAll(".lab-item")];
        for (let k = 0; k < o.length; k++) {
            let m = o[k],
                s = k % 2 === 0 ? .8 : .4;
            if (m.dataset.type === "mailto") {
                let u = Ik(k, m, s);
                a.push(u)
            } else {
                let u = Hk(k, m, s);
                a.push(u)
            }
        }
        let {
            words: r
        } = Nb(l, {
            splitInCharacters: !1
        }), n = xk(r), q = 1e3, h = 75;
        for (let k = 0; k < n.length; k++) {
            let m = q + k * h;
            n[k].forEach(s => {
                fa(s, "transitionDelay", `${m}ms`)
            })
        }
        if (window.scroll.isSmooth) {
            let k = window.scroll.bind(i);
            b.push(k)
        }
        let p = cc(i, {
            bindToSmoothScroll: !1
        });
        b.push(p), e(j, l)
    }
    async function d() {
        return Promise.all(a.filter(i => i.load).map(i => eb.register(i.load())))
    }
    async function e(i, j) {
        let l = gd.read() ? 0 : 500;
        await wb(l), i.classList.add("visible"), j.classList.add("visible"), await wb(2e3), d()
    }

    function f() {
        for (let i = 0; i < b.length; i++) b[i]();
        b = [];
        for (let i = 0; i < a.length; i++) a[i].dispose(), a[i] = null;
        a = []
    }
    const g = {
        enter: c,
        leave: f
    };
    return g
}
var oo = no;
export {
    oo as
    default
};