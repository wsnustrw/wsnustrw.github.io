import {
    c as ya,
    d as ia,
    e as la,
    f as za
} from "./chunk.iFD6NlhM.js";
import {
    e as na,
    f as ua,
    j as Q,
    l as U,
    m as ja
} from "./chunk.CeGTj4_V.js";
const ij = U(ja());

function fd(a, {
    $target: b = a,
    rangeX: c = [10, -10],
    rangeY: d,
    damping: e = .2
} = {}) {
    let f, g = {
            x: 0,
            y: 0
        },
        i = za(g, {
            damping: e,
            stiffness: .12
        }),
        j = !1,
        l = la(() => {
            f = a.getBoundingClientRect()
        }, {
            fire: !0
        }),
        o = ya(a, () => {
            f = a.getBoundingClientRect(), j = !0;
            let h = ij.default.range(c[0], c[1]);
            i.target({
                x: 0,
                y: 0
            })
        }),
        r = ua(a, h => {
            if (!j) return;
            let p = ia(h.clientX, f.left, f.left + f.width, c[0], c[1]),
                k = d ? ia(h.clientY, f.top, f.top + f.height, d[0], d[1]) : ij.default.range(c[0], c[1]);
            i.target({
                x: p,
                y: k
            })
        }),
        n = na(a, () => {
            j = !1, i.target({
                x: 0,
                y: 0
            })
        }),
        q = Q(() => {
            i.update(), b.style.setProperty("--txMouse", `${g.x}px`), b.style.setProperty("--tyMouse", `${g.y}px`)
        });
    return () => {
        l(), o(), n(), r()
    }
}
var Rb = fd;
export {
    Rb as a
};