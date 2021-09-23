function Bh(a) {
    return new Promise((b, c) => {
        let d = document.createElement("script");

        function e() {
            d.removeEventListener("load", e), d.removeEventListener("error", f), b(d)
        }

        function f(g) {
            console.error(g), c(g)
        }
        d.addEventListener("load", e), d.addEventListener("error", f), d.src = a, document.body.appendChild(d)
    })
}
var kc = Bh;
export {
    kc as a
};