let Db = new Map();

function Tb(a, {
    srcset: b,
    sizes: c,
    img: d = new Image()
} = {}) {
    return new Promise((e, f) => {
        function g(j) {
            console.error(`Error while loading image ${a}`), console.error(j), f(j)
        }

        function i() {
            e(d)
        }
        if (Db.has(a)) d.parentNode && d.parentNode.replaceChild(Db.get(a), d), e(Db.get(a));
        else {
            Db.set(a, d);
            if (d.parentNode && d.parentNode instanceof HTMLPictureElement) {
                let j = [...d.parentNode.querySelectorAll("source")];
                j.forEach(l => {
                    l.srcset = l.dataset.srcset
                })
            }
            b && (d.srcset = b), c && (d.sizes = c), d.addEventListener("load", i), d.addEventListener("error", g), d.src = a
        }
    })
}

function ld(a, {
    accessible: b = !0,
    splitInCharacters: c = !0
} = {}) {
    let d = document.createDocumentFragment(),
        e = a.innerHTML;
    if (b) {
        let l = document.createElement("span");
        l.innerHTML = e, l.classList.add("visually-hidden"), d.appendChild(l)
    }
    let f = [],
        g = e.split(" "),
        i = [],
        j = [];
    for (let l = 0; l < g.length; l++) {
        let o = document.createElement("span");
        o.setAttribute("data-word", g[l]), o.setAttribute("aria-hidden", !0), o.classList.add("word"), d.appendChild(o), i.push(o);
        if (c) {
            let r = g[l].startsWith("&") ? [g[l]] : g[l].split("");
            for (let n = 0; n < r.length; n++) {
                let q = r[n],
                    h = document.createElement("span");
                h.classList.add("character"), h.innerHTML = q, o.appendChild(h), f.push(h), j.push(h)
            }
        } else o.innerHTML = g[l], f.push(o);
        if (l < g.length - 1) {
            let r = document.createElement("span");
            r.innerHTML = " ", r.classList.add("whitespace"), r.setAttribute("aria-hidden", !0), d.appendChild(r)
        }
    }
    return a.innerHTML = "", a.appendChild(d), {
        characters: j,
        words: i
    }
}
var Nb = ld;
export {
    Tb as a, Nb as b
};