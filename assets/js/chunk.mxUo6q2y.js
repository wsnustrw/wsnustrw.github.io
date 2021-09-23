function _a(a, b, c = {}) {
    return a.addEventListener("mousedown", b, c), () => {
        a.removeEventListener("mousedown", b, c)
    }
}

function ub(a, b, c = {}) {
    return a.addEventListener("mouseup", b, c), () => {
        a.removeEventListener("mouseup", b, c)
    }
}

function Ja(a, b, {
    passive: c = !0
} = {}) {
    return a.addEventListener("touchend", b, {
        passive: c
    }), () => {
        a.removeEventListener("touchend", b)
    }
}

function Ka(a, b, {
    passive: c = !0
} = {}) {
    return a.addEventListener("touchmove", b, {
        passive: c
    }), () => {
        a.removeEventListener("touchmove", b, {
            passive: c
        })
    }
}

function fa(a, b, c) {
    a.style[b] = c
}

function sa(a) {
    for (let b = 0; b < a.length; b++) a[b](), a[b] = null;
    a.splice(0, a.length)
}

function Cb(a, b) {
    let c = a,
        d = !1;
    for (; c && !d;) b.includes(c.nodeName) && (d = !0), c = c.parentNode;
    return d
}
export {
    sa as a, _a as b, ub as c, Ja as d, Ka as e, fa as f, Cb as g
};