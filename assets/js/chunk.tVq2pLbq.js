import {
    b as Pa
} from "./chunk.iFD6NlhM.js";
import {
    a as ha,
    j as Q,
    l as U,
    m as ja
} from "./chunk.CeGTj4_V.js";

function Kb(a, b = 1e3) {
    let c = ha(),
        d = Q(({
            time: f
        }) => {
            f - c >= b && (a(), e())
        });

    function e() {
        d && (d(), d = null)
    }
    return () => {
        e()
    }
}
const ek = U(ja());

function yc(a) {
    let b = {
            visible: !1
        },
        c = document.querySelector(".toast"),
        d = window.innerWidth < 480 ? .4 : .15,
        e = d,
        f;
    async function g() {
        if (!b.visible) b.visible = !0, c.classList.add("visible");
        else {
            e += .05;
            if (e <= 1) {
                let l = ek.default.range(-45, 45);
                c.style.setProperty("--duration", "100ms"), c.style.setProperty("--rotation", `${l}deg`), c.style.setProperty("--scale", e)
            }
        }
    }

    function i() {
        c.style.removeProperty("--duration"), c.style.removeProperty("--rotation"), c.style.removeProperty("--scale"), c.classList.remove("visible"), b.visible = !1, e = d
    }
    let j = Pa(a, l => {
        if (navigator.clipboard) {
            l.preventDefault();
            let o = a.href.split("mailto:")[1];
            navigator.clipboard.writeText(o).then(() => {
                g(), f && (f(), f = null), f = Kb(() => {
                    i(), f = null
                }, 1e3)
            }).catch(r => {
                a.click()
            })
        }
    });
    return () => {
        j()
    }
}
export {
    Kb as a, yc as b
};