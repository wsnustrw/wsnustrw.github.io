import {
    a as Ma,
    f as za
} from "./chunk.iFD6NlhM.js";
import {
    j as Q
} from "./chunk.CeGTj4_V.js";

function id({
    onStart: a = Ma,
    onComplete: b = Ma
}) {
    let c = [],
        d = 0;

    function e() {
        a()
    }

    function f() {
        g(), c = []
    }

    function g() {
        b()
    }

    function i(j) {
        let l = d++;
        return c.length === 0 && e(), c.push(l), j.then(o => (c.splice(c.findIndex(r => r === l), 1), c.length === 0 && g(), o)), j
    }
    return {
        register: i,
        invalidate: f
    }
}
var $b = id;

function kd() {
    const a = window.matchMedia("(prefers-reduced-motion: reduce)");
    return a.matches
}
var Ab = kd;
const ad = function() {
    let a = document.querySelector(".loading"),
        b = a.querySelector("svg"),
        c = {
            rotationSpeed: 0,
            rotation: 0,
            rotationSmooth: 0,
            rotationSmoothRound: 0,
            opacity: 0
        };
    const d = .005,
        e = 1 / 60,
        f = .1;
    let g = {
            opacity: c.opacity
        },
        i = za(g, {
            precision: .01
        }),
        j = Q(l);

    function l({
        deltaTime: o
    }) {
        i.update(), c.rotation += c.rotationSpeed * d * o / e, c.rotationSmooth += (c.rotation - c.rotationSmooth) * f;
        let r = Math.floor(c.rotationSmooth * 100) / 100;
        r !== c.rotationSmoothRound && (c.rotationSmoothRound = r, b.style.setProperty("--rotation", `${r}deg`));
        let n = Math.floor(g.opacity * 100) / 100;
        n !== c.opacity && (c.opacity = n, b.style.setProperty("--opacity", c.opacity))
    }
    return $b({
        onStart: () => {
            Ab() || (c.rotationSpeed = 1), i.target({
                opacity: 1
            })
        },
        onComplete: () => {
            i.target({
                opacity: 0
            }), c.rotationSpeed = 0
        }
    })
}();
var eb = ad;
export {
    Ab as a, eb as b
};