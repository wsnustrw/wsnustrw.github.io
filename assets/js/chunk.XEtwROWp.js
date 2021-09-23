import {
    a as kc
} from "./chunk.WQj5ZSQd.js";
import {
    b as eb
} from "./chunk.UMr-yWWQ.js";
import {
    b as Pa
} from "./chunk.iFD6NlhM.js";
import {
    f as fa
} from "./chunk.mxUo6q2y.js";
import {
    a as ha
} from "./chunk.CeGTj4_V.js";

function bd(a, {
    src: b = a.dataset.src,
    autoplay: c = !1
} = {}) {
    let d = ha();
    return new Promise((e, f) => {
        a.src = b;
        let g = new Vimeo.Player(a);

        function i() {
            g.off("play", i), g.off("ready", i), g.off("error", j), e(g)
        }

        function j(l) {
            console.error(l), f(l)
        }
        g.on("error", j), c ? (g.on("play", i), b.includes("autoplay=1") || g.play()) : g.ready().then(i)
    })
}
let md;

function Fh() {
    return md || (md = kc("https://player.vimeo.com/api/player.js")), md
}
var rh = Fh;

function Si(a, b, c) {
    let d = b.parentNode,
        e = Pa(a, () => {
            g()
        }),
        f;
    async function g() {
        await eb.register(rh()), d.classList.add("loaded"), f = await eb.register(bd(c, {
            autoplay: !1
        })), fa(a, "opacity", 0), fa(b, "opacity", 0), f.play(), b.parentNode.removeChild(b), e(), a.parentNode.removeChild(a), a = null
    }
    return () => {
        f && f.destroy().then(() => {
            f = null
        }), e && (e(), e = null), d = null, c = null, b = null
    }
}
var sh = Si;
export {
    bd as a, sh as b, Fh as c
};