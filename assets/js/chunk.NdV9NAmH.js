function Sa(a, b, {
    passive: c = !0
} = {}) {
    return a.addEventListener("touchstart", b, {
        passive: c
    }), () => {
        a.removeEventListener("touchstart", b)
    }
}
export {
    Sa as a
};