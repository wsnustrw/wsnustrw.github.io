import {
    d as ia,
    e as la
} from "./chunk.iFD6NlhM.js";
import {
    j as Q
} from "./chunk.CeGTj4_V.js";

function kj(a, b, {
    scrollY: c = window.scroll.isSmooth ? () => window.scroll.position.sy : () => window.pageYOffset
} = {}) {
    let d = -1,
        e = -1,
        f = -1,
        g = la(j, {
            fire: !0
        }),
        i = Q(l);

    function j() {
        let o = a.getBoundingClientRect();
        d = o.top + c() - window.innerHeight, e = d + o.height + window.innerHeight
    }

    function l() {
        let o = c();
        f = ia(o, d, e, 0, 1), b({
            progress: f
        })
    }
    return () => {
        g(), g = null, i(), i = null
    }
}
var cd = kj;

function Hc(a, b, {
    root: c,
    threshold: d = 0,
    rootMargin: e = "0px"
} = {}) {
    let f = !1,
        g = new IntersectionObserver(i => {
            i.forEach(j => {
                j.isIntersecting ? (f = !0, b(j)) : !j.isIntersecting && f && (f = !1, b(j))
            })
        }, {
            root: c,
            rootMargin: e,
            threshold: d
        });
    return g.observe(a), () => {
        g.unobserve(a), g.disconnect(), g = null
    }
}

function Ic(a, b, c = {}) {
    let d = Hc(a, e => {
        e.isIntersecting && b(e)
    }, c);
    return () => {
        d(), d = null
    }
}

function Eh(a, b, c = {}) {
    let d = Hc(a, e => {
        e.isIntersecting || b(e)
    }, c);
    return () => {
        d(), d = null
    }
}
export {
    Hc as a, Ic as b, cd as c, Eh as d
};