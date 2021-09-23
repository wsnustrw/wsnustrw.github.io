import {
    h as Ub,
    j as Q
} from "./chunk.CeGTj4_V.js";

function zc(a) {
    return new Promise((b, c) => {
        let d = 0,
            e = Q(({
                deltaTime: f
            }) => {
                d += f, d >= a && (b(), e())
            })
    })
}
var wb = zc;
const Ac = function() {
    let a = !1;

    function b() {
        a = !0, document.documentElement.classList.add("touch"), document.body.removeEventListener("touchstart", b, {
            passive: !0
        })
    }
    return document.body.addEventListener("touchstart", b, {
        passive: !0
    }), () => a
}();
var jb = Ac;

function Oa(a = 1) {
    return new Promise((b, c) => {
        Ub(() => {
            b()
        }, {
            frameCount: a
        })
    })
}
export {
    jb as a, wb as b, Oa as c
};