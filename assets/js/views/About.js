import {
    a as Kb,
    b as yc
} from "../chunk.tVq2pLbq.js";
import "../chunk.2jmj7l5r.js";
import {
    b as sh
} from "../chunk.XEtwROWp.js";
import "../chunk.WQj5ZSQd.js";
import {
    a as Rb
} from "../chunk.sEsxgipK.js";
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
    a as yb,
    d as Sb,
    e as cc
} from "../chunk.aenqHFRN.js";
import {
    a as jb,
    c as Oa
} from "../chunk.C_jMmbhp.js";
import {
    a as sa,
    f as fa
} from "../chunk.mxUo6q2y.js";
import {
    e as na,
    f as ua,
    j as Q,
    l as U,
    m as ja
} from "../chunk.CeGTj4_V.js";
const Jq = U(ja());

function ln(a, b = a) {
    let c = ["yellow", "red", "purple", "orange", "blue"],
        d = [],
        e = [],
        f = [],
        g = [],
        i = [],
        j = Jq.default.rangeFloor(0, c.length),
        l, o = {
            baseX: -1,
            entered: !1,
            moved: !1
        };
    const {
        characters: r
    } = Nb(b);
    d.push(...r), g.push(...d.map(() => 0)), f.push(...g);
    let n = za(f, {
            stiffness: .1,
            damping: .17,
            precision: .01
        }),
        q = la(() => {
            l = b.getBoundingClientRect()
        }, {
            fire: !0
        }),
        h, p = ya(a, D => {
            u(D), jb() && (h && (h(), h = null), h = Kb(() => {
                t()
            }, 500))
        }),
        k = na(a, () => {
            t()
        }),
        m = ua(a, D => {
            w(D)
        }),
        s = Q(() => {
            for (let D = 0; D < d.length; D++) f[D] !== i[D] && (i[D] = f[D], d[D].style.setProperty("--ty", `${f[D]}px`));
            n.update()
        });
    e.push(s, q, p, k, m);

    function u(D) {
        let y = ia(D.clientX, l.left, l.left + l.width, -.5, .5);
        Ab() || x(y), A(), o.baseX = D.clientX, o.entered = !0
    }

    function t() {
        n.target(g), o.entered = !1, o.moved = !1;
        for (let D = 0; D < d.length; D++) {
            let y = (D + j) % c.length;
            d[D].style.setProperty("--color", null)
        }
    }

    function w(D) {
        if (!o.entered || Ab()) return;
        let y = D.clientX > o.baseX + 2 || D.clientX < o.baseX - 2;
        !o.moved && y && (o.moved = !0, o.baseX = -1);
        if (o.moved) {
            let v = ia(D.clientX, l.left, l.left + l.width, -.5, .5);
            x(v)
        }
    }

    function x(D) {
        let y = -10,
            v = [];
        for (let z = 0; z < d.length; z++) {
            let J = (Math.sin((z / (d.length - 1) - D) * Math.PI) + 1) * .5;
            J *= y, v[z] = J
        }
        n.target(v)
    }

    function A() {
        j += 1, j %= c.length;
        for (let D = 0; D < d.length; D++) {
            let y = (D + j) % c.length,
                v = c[y],
                z = D * 20;
            d[D].style.setProperty("--delay", `${z}ms`), d[D].style.setProperty("--color", `var(--color-${v})`)
        }
    }
    return () => {
        sa(e), e = null, f = null, g = null, i = null
    }
}
var ri = ln;
const wq = U(ja());

function hn() {
    let a = [],
        b, c, d, e, f, g, i;

    function j() {
        b = document.querySelector(".view--about"), c = b.querySelector(".intro__text"), e = b.querySelector(".about__media"), f = e.querySelector(".media__content"), d = b.querySelector(".social__list");
        const {
            words: m,
            characters: s
        } = Nb(c, {
            splitInCharacters: !0
        });
        g = m, i = s;
        let u = f.querySelector("button"),
            t = f.querySelector("picture"),
            w = f.querySelector("iframe"),
            x = sh(u, t, w);
        a.push(x);
        let A = cc(b, {
            disallowList: []
        });
        a.push(A);
        let D = r(b);
        a.push(D);
        let y = q(b);
        a.push(y);
        let v = n(i);
        a.push(v);
        let z = b.querySelector(".about__desc"),
            J = [...z.querySelectorAll("a")];
        a.push(...J.map(H => ri(H)));
        let F = b.querySelector(".about__credits"),
            B = h(F.querySelector("a"));
        if (window.scroll.isSmooth) {
            let H = [b.querySelector(".about__intro"), b.querySelector(".about__social"), b.querySelector(".about__media"), z, b.querySelector(".about__contact"), F],
                L = H.map(I => window.scroll.bind(I));
            a.push(...L)
        }
    }
    async function l() {
        let m = f.querySelector("img");
        await eb.register(Tb(m.dataset.src, {
            img: m
        })), e.classList.add("loaded"), o()
    }
    async function o() {
        await Oa();
        let m = -1,
            s = [];
        for (let A = 0; A < g.length; A++) {
            let D = g[A],
                y = D.getBoundingClientRect().y;
            y !== m && (m = y, s[s.length] = []), s[s.length - 1].push(D)
        }
        let u = 1e3,
            t = 75;
        for (let A = 0; A < s.length; A++) {
            let D = u + A * t;
            s[A].forEach(y => {
                fa(y, "transitionDelay", `${D}ms`)
            })
        }
        c.classList.add("visible"), d.classList.add("visible");
        let w = e.getBoundingClientRect(),
            x = window.innerHeight - w.top;
        f.style.setProperty("--ty", `${x}px`), await Oa(), f.style.setProperty("--ty", null), e.classList.add("visible"), await Oa()
    }

    function r(m) {
        let s = [],
            u = [...m.querySelectorAll(".social__link")];
        s.push(...u.map(x => ri(x)));
        let t = u.find(x => x.href.includes("mailto:")),
            w = yc(t);
        return () => {
            w(), w = null, sa(s), s = null, u = null, t = null
        }
    }

    function n(m) {
        let s = b.querySelector(".about__image"),
            u = [],
            t = [];
        for (let z = 0; z < g.length; z++)
            if (g[z].dataset.word === "Philippe") {
                t.push(g[z], g[z].nextSibling, g[z + 1]);
                break
            }
        let w = {
                x: 0,
                y: 0
            },
            x = !1,
            A = ua(window, z => {
                s.style.setProperty("--tx", `${z.clientX}px`), s.style.setProperty("--ty", `${z.clientY}px`)
            }),
            D = Q(() => {
                if (!x) return
            });
        u.push(A);

        function y() {
            if (x) return;
            s.style.setProperty("--tx", `${w.x}px`), s.style.setProperty("--ty", `${w.y}px`), s.style.setProperty("--opacity", 1), s.style.setProperty("--scale", 1), s.style.setProperty("--rotation", `${wq.default.range(-10,10)}deg`)
        }

        function v() {
            if (!x) return;
            s.style.setProperty("--opacity", 0), s.style.setProperty("--scale", .5), s.style.setProperty("--rotation", `${wq.default.range(-45,45)}deg`)
        }
        for (let z = 0; z < t.length; z++) {
            let J = t[z],
                F = ya(J, H => {
                    y(), x = !0
                }),
                B = na(J, () => {
                    v(), x = !1
                });
            u.push(F, B)
        }
        return () => {
            sa(u)
        }
    }

    function q(m) {
        let s = m.querySelector(".contact__link"),
            u = m.querySelector(".contact__content .svg"),
            t = s.querySelector(".contact__label"),
            w = ri(s, t),
            x = Rb(s, {
                $target: u,
                damping: .1,
                rangeY: [5, -5]
            }),
            A = yc(s);
        return () => {
            x(), x = null, A(), A = null, w(), w = null
        }
    }

    function h(m) {
        let s = m.getBoundingClientRect(),
            u = {
                hovered: !1,
                elapsed: 0,
                px: s.left + s.width * .5,
                pxs: s.left + s.width * .5,
                delta: t()
            };

        function t() {
            return wq.default.range(30, 150)
        }
        let w = ya(m, () => {
                if (jb()) return;
                u.hovered = !0
            }),
            x = ua(m, J => {
                u.px = J.clientX
            }),
            A = na(m, () => {
                u.hovered = !1
            });

        function D(J) {
            let F = {
                    x: 0,
                    y: 0
                },
                B = {
                    x: 0,
                    y: 0
                },
                H = {
                    x: 0,
                    y: 0
                },
                L = {
                    x: wq.default.range(-.05, .05),
                    y: wq.default.range(-.15, -.05)
                };

            function I({
                deltaTime: E
            }) {
                H.x += L.x, H.y += L.y, B.x += H.x, B.y += H.y, L.y += .005, C.life -= 5e-4 * E, J.style.opacity = C.life, J.style.transform = `translate3d(${C.startPos.x+B.x}px, ${F.y+B.y}px, 0)`
            }
            const C = {
                $node: J,
                life: 1,
                update: I,
                startPos: F
            };
            return C
        }
        let y = [],
            v = Sb(() => {
                let J = document.createElement("div");
                return yb(J, {
                    position: "fixed",
                    bottom: "25px",
                    left: "0",
                    zIndex: 0,
                    width: "20px",
                    height: "20px",
                    pointerEvents: "none"
                }), J.innerHTML = "👀", document.body.appendChild(J), J
            }),
            z = Q(({
                deltaTime: J
            }) => {
                u.pxs += (u.px - u.pxs) * .1;
                if (u.hovered) {
                    u.elapsed += J;
                    if (u.elapsed > u.delta) {
                        u.delta = t(), u.elapsed = 0;
                        let B = v.get(),
                            H = D(B);
                        H.startPos.x = u.pxs, y.push(H)
                    }
                }
                let F = [];
                for (let B = 0; B < y.length; B++) y[B].update({
                    deltaTime: J
                }), y[B].life <= 0 && F.push({
                    index: B,
                    el: y[B].$node
                });
                F.forEach(({
                    index: B,
                    el: H
                }) => {
                    y.splice(B, 1), v.release(H)
                })
            });
        return () => {
            z(), w(), A(), x()
        }
    }

    function p() {
        sa(a), b = null, c = null
    }
    const k = {
        enter: j,
        leave: p,
        preload: l
    };
    return k
}
var jn = hn;
export {
    jn as
    default
};