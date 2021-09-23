import {
    a as Sa
} from "../chunk.NdV9NAmH.js";
import {
    a as xa,
    b as Ra,
    c as ma,
    d as db,
    e as Xb,
    f as Wb,
    g as tc,
    h as Ob,
    i as Pb,
    j as cb,
    k as va,
    l as sc,
    m as Za,
    n as xb,
    p as Ih,
    q as Hh
} from "../chunk.v7Rg9nYm.js";
import {
    a as Fc
} from "../chunk.6E_bIGju.js";
import {
    a as $a,
    b as Mb
} from "../chunk.X9R5jYKj.js";
import "../chunk.9o_ia7Wv.js";
import {
    a as Rb
} from "../chunk.sEsxgipK.js";
import {
    a as Tb,
    b as Nb
} from "../chunk.AAX0GPHs.js";
import {
    b as Pa,
    c as ya,
    d as ia,
    e as la,
    f as za
} from "../chunk.iFD6NlhM.js";
import {
    a as sa,
    b as _a,
    c as ub,
    d as Ja,
    e as Ka,
    f as fa,
    g as Cb
} from "../chunk.mxUo6q2y.js";
import {
    d as Qb,
    e as na,
    f as ua,
    j as Q,
    k as Qa,
    l as U,
    m as ja
} from "../chunk.CeGTj4_V.js";
const zr = U(Wb());

function qn({
    gl: a,
    geometry: b,
    uniforms: c,
    color: d,
    offset: e,
    state: f,
    fragmentInclude: g = ""
}) {
    let i = new va(a),
        j = [],
        l, o, r, n, q = {
            scale: 2,
            pupilScale: 2,
            opacity: 0
        };

    function h() {
        let w = new db(a, {
            vertex: o,
            fragment: r,
            derivatives: !0,
            uniforms: { ...c,
                uOffset: {
                    value: e
                },
                uColor: {
                    value: d
                },
                uPupilScale: {
                    value: q.pupilScale
                },
                opacity: {
                    value: q.opacity
                }
            },
            transparent: !0,
            depthWrite: !1
        });
        l = new cb(a, {
            geometry: b,
            program: w
        }), l.position.set(0, .5, 0), i.addChild(l), n = za(q, {
            stiffness: .1,
            damping: .6
        });
        let x = f.actionHovered.subscribe(D => {
                f.actionClicked.read() || n.target({
                    pupilScale: D ? 2 : 1.5
                })
            }),
            A = f.actionClicked.subscribe(D => {
                n.target({
                    pupilScale: D ? 2.5 : 1.5
                })
            });
        j.push(A, x)
    }
    async function p() {
        async function w() {
            let y = (await
                import ("../shaders/basic.vs.100.js")).default;
            return y
        }
        async function x() {
            let y = (await
                import ("./Home/eye.fs.js")).default;
            return y
        }
        let [A, D] = await Promise.all([w(), x()]);
        o = Za(A, {
            gl: a,
            vertex: !0
        }), r = Za(D, {
            gl: a,
            derivatives: !0
        })
    }

    function k() {
        xb(q, {
            duration: 1e3,
            scale: 1,
            opacity: 1,
            pupilScale: 1.5,
            easing: zr.quartOut
        }), xb(q, {
            duration: 500,
            easing: zr.quartOut,
            opacity: 1,
            onUpdate: () => {
                l.program.uniforms.opacity.value = q.opacity
            }
        })
    }

    function m({
        width: w
    }) {
        if (!l) return;
        let x = w * .2 * Ob();
        l.scale.x0 = x, l.scale.y0 = x, l.scale.set(l.scale.x0, l.scale.y0, 1)
    }

    function s() {
        if (!n) return;
        l.program.uniforms.uPupilScale.value = q.pupilScale, l.scale.set(l.scale.x0 * q.scale, l.scale.y0 * q.scale, 1), n.update()
    }

    function u() {
        sa(j), l && (i.removeChild(l), l = null), n = null
    }
    const t = {
        transform: i,
        resize: m,
        update: s,
        dispose: u,
        load: p,
        init: h,
        display: k
    };
    return t
}
var yj = qn;
const es = U(Wb());

function zn({
    gl: a,
    geometry: b,
    uniforms: c,
    color: d
}) {
    let e = new va(a),
        f, g, i, j = {
            scale: 0
        };

    function l() {
        let p = new db(a, {
            vertex: g,
            fragment: i,
            derivatives: !0,
            uniforms: { ...c,
                uOffset: {
                    value: Math.random() * 1e3
                },
                uColor: {
                    value: d
                }
            },
            transparent: !0,
            depthWrite: !1
        });
        f = new cb(a, {
            geometry: b,
            program: p
        }), f.position.set(0, .5, 0), e.addChild(f)
    }
    async function o() {
        async function p() {
            let u = (await
                import ("../shaders/basic.vs.100.js")).default;
            return u
        }
        async function k() {
            let u = (await
                import ("./Home/nose.fs.js")).default;
            return u
        }
        let [m, s] = await Promise.all([p(), k()]);
        g = Za(m, {
            gl: a,
            vertex: !0
        }), i = Za(s, {
            gl: a,
            derivatives: !0
        })
    }

    function r() {
        xb(j, {
            duration: 1e3,
            delay: 500,
            scale: 1,
            easing: es.quartInOut,
            onUpdate: () => {
                f.scale.set(f.scale.x0 * j.scale, f.scale.y0 * j.scale, 1)
            }
        })
    }

    function n({
        width: p,
        height: k
    }) {
        if (!f) return;
        f.scale.x0 = p * .22 * Ob(), f.scale.y0 = p * .22 * Ob(), f.scale.set(f.scale.x0 * j.scale, f.scale.y0 * j.scale, 1)
    }

    function q() {
        f && e.removeChild(f)
    }
    const h = {
        transform: e,
        resize: n,
        dispose: q,
        load: o,
        init: l,
        display: r
    };
    return h
}
var zk = zn;

function tn(a, b) {
    const c = {
        x: a,
        y: b
    };
    return c
}

function un(a = 0, b = 0) {
    function c(l) {
        j.x = l.x, j.y = l.y
    }

    function d(l, o) {
        const r = l + Math.PI / 2;
        j.x = j.x + Math.sin(r) * o, j.y = j.y - Math.cos(r) * o
    }

    function e(l) {
        return j.x === l.x && j.y === l.y
    }

    function f(l) {
        return tn(j.x - l.x, j.y - l.y)
    }

    function g(l) {
        const o = f(l);
        return Math.sqrt(Math.pow(o.x, 2) + Math.pow(o.y, 2))
    }

    function i(l) {
        const o = f(l);
        return Math.atan2(o.y, o.x)
    }
    const j = {
        x: a,
        y: b,
        getAngleTo: i,
        getDifferenceTo: f,
        getDistanceTo: g,
        equalsTo: e,
        moveByAngle: d,
        update: c
    };
    return j
}
var zj = un;
const rn = 20;

function sn({
    radius: a = rn,
    enabled: b = !0,
    initialPoint: c = {
        x: 0,
        y: 0
    }
} = {}) {
    let d = b,
        e = zj(c.x, c.y),
        f = zj(c.x, c.y),
        g = 0,
        i = 0,
        j = !1;

    function l() {
        k.isEnabled = !0
    }

    function o() {
        k.isEnabled = !1
    }

    function r(m) {
        k.radius = m
    }

    function n() {
        return {
            x: k.brush.x,
            y: k.brush.y
        }
    }

    function q() {
        return {
            x: k.pointer.x,
            y: k.pointer.y
        }
    }

    function h() {
        return k.hasMoved
    }

    function p(m, {
        both: s = !1
    } = {}) {
        return k.hasMoved = !1, e.equalsTo(m) && !s ? !1 : (e.update(m), s ? (k.hasMoved = !0, f.update(m), !0) : (k.isEnabled ? (k.distance = k.pointer.getDistanceTo(k.brush), k.angle = k.pointer.getAngleTo(k.brush), k.distance > k.radius && (k.brush.moveByAngle(k.angle, k.distance - k.radius), k.hasMoved = !0)) : (k.distance = 0, k.angle = 0, k.brush.update(m), k.hasMoved = !0), !0))
    }
    const k = {
        enable: l,
        disable: o,
        update: p,
        brushHasMoved: h,
        angle: g,
        distance: i,
        isEnabled: d,
        brush: f,
        radius: a,
        pointer: e,
        hasMoved: j
    };
    return k
}
var Ck = sn;
var Ek = `
precision highp float;
precision highp int;

attribute vec2 uv;
attribute vec3 position;
attribute vec3 previous;
attribute vec3 next;
attribute vec3 color;
attribute float width;
attribute float counters;
attribute float side;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform vec2 uResolution;
uniform float uLineWidth;

varying vec2 vUv;
varying float vCounters;
varying vec3 vColor;

vec2 fix (vec4 i, float aspect) {
    vec2 res = i.xy / i.w;
    res.x *= aspect;

    return res;
}

void main() {
    vUv = uv;
    vColor = color;
    vCounters = counters;

    float aspect = uResolution.x / uResolution.y;

    mat4 m = projectionMatrix * modelViewMatrix;
    vec4 finalPosition = m * vec4( position, 1.0 );
    vec4 prevPos = m * vec4( previous, 1.0 );
    vec4 nextPos = m * vec4( next, 1.0 );
    
    vec2 currentP = fix( finalPosition, aspect );
    vec2 prevP = fix( prevPos, aspect );
    vec2 nextP = fix( nextPos, aspect );
    
    float w = uLineWidth * width;

    vec2 dir;
    if( nextP == currentP ) dir = normalize( currentP - prevP );
    else if( prevP == currentP ) dir = normalize( nextP - currentP );
    else {
        vec2 dir1 = normalize( currentP - prevP );
        vec2 dir2 = normalize( nextP - currentP );
        dir = normalize( dir1 + dir2 );
    
        vec2 perp = vec2( -dir1.y, dir1.x );
        vec2 miter = vec2( -dir.y, dir.x );
        //w = clamp( w / dot( miter, perp ), 0., 4. * uLineWidth * width );
    
    }
    
    vec4 normal = vec4( -dir.y, dir.x, 0., 1. );
    normal.xy *= .5 * w;
    normal *= projectionMatrix;
    normal.xy *= finalPosition.w;
    normal.xy /= ( vec4( uResolution, 0., 1. ) * projectionMatrix ).xy;
    
    finalPosition.xy += normal.xy * side;
    
    gl_Position = finalPosition;
}
`;
var Fk = `
precision highp float;
precision highp int;

uniform float uLength;
uniform float uDashOffset;
uniform float uLineWidth;

varying vec2 vUv;
varying vec3 vColor;
varying float vCounters;

${Fc}

void main() {
    float aaAmount = 0.01;

    float distY = 0.05;
    float distYInverse = 1. - distY;
    float aaTop = smoothstep(distY - aaAmount, distY + aaAmount, vUv.y);
    float aaBottom = 1. - smoothstep(distYInverse - aaAmount, distYInverse + aaAmount, vUv.y);

    float alpha = min(aaTop, aaBottom);
    
    vec3 color = vColor;

    float lx = (uLineWidth * 0.75) / (uLength);

    float currentX = vCounters - uDashOffset;

    if (currentX < lx) {
        vec2 uv = vec2(currentX, vUv.y);
        uv.x = mapRange(uv.x, 0., lx, 0., 0.5);
        alpha *= 1. - smoothstep(0.5 - 0.008, 0.5 + 0.008, length(uv - vec2(0.5, 0.5)));
    }

    if (vCounters > 1. - lx) {
        vec2 uv = vec2(vCounters, vUv.y);
        uv.x = mapRange(uv.x, 1. - lx, 1., 0.5, 0.);
        alpha *= 1. - smoothstep(0.5 - 0.008, 0.5 + 0.008, length(uv - vec2(0.5, 0.5)));
    }

    gl_FragColor = vec4(color, alpha);
}
`;
class xn extends Pb {
    constructor(a, {
        currentColor: b
    }) {
        super(a, {});
        this.currentColor = b, this.previous = [], this.next = [], this.side = [], this.width = [], this.indices_array = [], this.uvs = [], this.counters = [], this._points = [], this._geom = null, this.widthCallback = null
    }
    setPoints(a = [], b = () => 1) {
        this._points = a, this.widthCallback = b, this.positions = [], this.counters = [], this.pathLength = 0;
        if (a.length && a[0] instanceof ma)
            for (var c = 0; c < a.length; c++) {
                var d = a[c],
                    e = c / a.length;
                this.positions.push(d.x, d.y, d.z), this.positions.push(d.x, d.y, d.z), this.counters.push(e), this.counters.push(e);
                if (c > 0) {
                    let f = a[c] - 1;
                    this.pathLength += Math.sqrt((d.x - f.x) * (d.x - f.x) + (d.y - f.y) * (d.y - f.y))
                }
            } else {
                for (var c = 0; c < a.length; c += 3) {
                    var e = c / a.length;
                    this.positions.push(a[c], a[c + 1], a[c + 2]), this.positions.push(a[c], a[c + 1], a[c + 2]);
                    if (c > 0) {
                        const g = a[c] - a[c - 3],
                            i = a[c + 1] - a[c + 1 - 3],
                            j = Math.sqrt(g * g + i * i);
                        this.pathLength += j
                    }
                }
                let f = 0;
                for (var c = 0; c < a.length; c += 3) {
                    var e = c / a.length;
                    if (c > 0) {
                        const g = a[c] - a[c - 3],
                            i = a[c + 1] - a[c + 1 - 3],
                            j = Math.sqrt(g * g + i * i);
                        f += j;
                        const l = f / this.pathLength;
                        this.counters.push(l), this.counters.push(l)
                    } else this.counters.push(0), this.counters.push(0)
                }
            }
        this.process()
    }
    compareV3(a, b) {
        var c = a * 6,
            d = b * 6;
        return this.positions[c] === this.positions[d] && this.positions[c + 1] === this.positions[d + 1] && this.positions[c + 2] === this.positions[d + 2]
    }
    copyV3(a) {
        var b = a * 6;
        return [this.positions[b], this.positions[b + 1], this.positions[b + 2]]
    }
    process() {
        var a = this.positions.length / 6;
        this.previous = [], this.next = [], this.side = [], this.width = [], this.indices_array = [], this.uvs = [];
        var b, c;
        this.compareV3(0, a - 1) ? c = this.copyV3(a - 2) : c = this.copyV3(0), this.previous.push(c[0], c[1], c[2]), this.previous.push(c[0], c[1], c[2]);
        for (var d = 0; d < a; d++) {
            this.side.push(1), this.side.push(-1), this.widthCallback ? b = this.widthCallback(d / (a - 1)) : b = 1, this.width.push(b), this.width.push(b);
            const f = d / (a - 1);
            this.uvs.push(f, 0), this.uvs.push(f, 1);
            if (d < a - 1) {
                c = this.copyV3(d), this.previous.push(c[0], c[1], c[2]), this.previous.push(c[0], c[1], c[2]);
                var e = d * 2;
                this.indices_array.push(e, e + 1, e + 2), this.indices_array.push(e + 2, e + 1, e + 3)
            }
            d > 0 && (c = this.copyV3(d), this.next.push(c[0], c[1], c[2]), this.next.push(c[0], c[1], c[2]))
        }
        this.compareV3(a - 1, 0) ? c = this.copyV3(1) : c = this.copyV3(a - 1), this.next.push(c[0], c[1], c[2]), this.next.push(c[0], c[1], c[2]), this.colors = [];
        for (let f = 0; f < this.positions.length; f += 3) this.colors.push(this.currentColor.r, this.currentColor.g, this.currentColor.b);
        this._attributes = {
            position: {
                data: new Float32Array(this.positions),
                size: 3
            },
            color: {
                data: new Float32Array(this.colors),
                size: 3
            },
            previous: {
                data: new Float32Array(this.previous),
                size: 3
            },
            next: {
                data: new Float32Array(this.next),
                size: 3
            },
            side: {
                data: new Float32Array(this.side),
                size: 1
            },
            width: {
                data: new Float32Array(this.width),
                size: 1
            },
            uv: {
                data: new Float32Array(this.uvs),
                size: 2
            },
            index: {
                data: new Uint16Array(this.indices_array)
            },
            counters: {
                data: new Float32Array(this.counters),
                size: 1
            }
        }, this.addAttribute("position", this._attributes.position), this.addAttribute("previous", this._attributes.previous), this.addAttribute("next", this._attributes.next), this.addAttribute("color", this._attributes.color), this.addAttribute("side", this._attributes.side), this.addAttribute("width", this._attributes.width), this.addAttribute("uv", this._attributes.uv), this.addAttribute("counters", this._attributes.counters), this.addAttribute("index", this._attributes.index)
    }
}
var Gk = xn;
const Kr = U(ja()),
    Yr = U(Wb());

function wn({
    gl: a,
    uniforms: b,
    colors: c
}) {
    let d = [],
        e = new va(a),
        f = Za(Ek, {
            gl: a,
            vertex: !0
        }),
        g = Za(Fk, {
            gl: a,
            derivatives: !0
        }),
        i = h(),
        j = {
            pointerMoved: !0,
            valuesChanged: !0,
            isDrawing: !1,
            isPressing: !1,
            mousedown: !1,
            mouseX: 0,
            mouseY: 0,
            lastX: 0,
            lastY: 0,
            mouseSX: 0,
            mouseSY: 0,
            drawn: !1,
            points: []
        },
        l, o = Ck(),
        r = Kr.default.weightedSet(c),
        n = [];

    function q(C) {
        l && (e.removeChild(l), l = null);
        let E = new Gk(a, {
            currentColor: r
        });
        E.setPoints(C);
        let G = new cb(a, {
            geometry: E,
            program: i
        });
        l = G, e.addChild(G)
    }

    function h(C = {}) {
        return new db(a, {
            vertex: f,
            fragment: g,
            uniforms: { ...b,
                uLineWidth: {
                    value: .05 * window.innerWidth * Ob()
                },
                uLength: {
                    value: 0
                },
                uDashOffset: {
                    value: 0
                },
                ...C
            },
            transparent: !0
        })
    }

    function p(C) {
        if (!Cb(C.target, ["BUTTON", "A"])) {
            const E = C.changedTouches[0].clientX,
                G = C.changedTouches[0].clientY;
            o.update({
                x: E,
                y: G
            }, {
                both: !0
            }), s(C), j.pointerMoved = !0
        }
    }

    function k(C) {
        C.preventDefault(), w(C.changedTouches[0].clientX, C.changedTouches[0].clientY)
    }

    function m(C) {
        Cb(C.target, ["BUTTON", "A"]) || (u(C), o.update({
            x: o.brush.x,
            y: o.brush.y
        }, {
            both: !0
        }), j.pointerMoved = !0)
    }

    function s(C) {
        C.preventDefault(), j.isPressing = !0, r = Kr.default.weightedSet(c), i = h({
            uLength: {
                value: 0
            },
            uDashOffset: {
                value: 0
            }
        })
    }

    function u(C) {
        C.preventDefault();
        if (j.isDrawing || j.isPressing) {
            j.isDrawing = !1, j.isPressing = !1, j.points.length = 0;
            if (!l) return;
            n.push(l);
            let E = l;
            l = null;
            const G = 800,
                N = 800;
            let K = E.program.uniforms.uLength.value * G / N;
            K = Math.min(K, 1300), xb(E.program.uniforms.uDashOffset, {
                duration: K,
                delay: 1500,
                value: 1,
                easing: Yr.quadInOut,
                onUpdate: () => {},
                onComplete: () => {
                    e.removeChild(E)
                }
            }), l = null
        }
    }

    function t(C, E) {
        return [C[0] + (E[0] - C[0]) / 2, C[1] + (E[1] - C[1]) / 2]
    }

    function w(C, E) {
        j.mouseX = C, j.mouseY = E, (j.isPressing && !j.isDrawing || j.isPressing) && (j.isDrawing = !0), j.pointerMoved = !0
    }
    let x = document.querySelector(".view"),
        A = x.querySelector(".action__button"),
        D = _a(x, s),
        y = Sa(window, p, {
            passive: !1
        }),
        v = ub(window, u),
        z = Ja(x, m, {
            passive: !1
        }),
        J = ua(window, C => w(C.clientX, C.clientY)),
        F = Ka(x, k, {
            passive: !1
        }),
        B = Q(H);
    d.push(D, y, v, z, J, F, B);

    function H() {
        l && (l.program.uniforms.uLength.value = l.geometry.pathLength);
        const C = o.update({
            x: j.mouseX,
            y: j.mouseY
        });
        j.pointerMoved && j.isDrawing && o.brushHasMoved() && (j.points.push({
            x: o.brush.x,
            y: o.brush.y
        }), q(j.points.reduce((E, G) => (E.push(G.x - window.innerWidth * .5, -(G.y - window.innerHeight * .5), 0), E), [])), j.pointerMoved = !1)
    }

    function L() {
        sa(d)
    }

    function I() {
        n.forEach(C => {})
    }
    return {
        transform: e,
        dispose: L
    }
}
var Ak = wn;

function pn({
    canvas: a,
    view: b,
    state: c
}) {
    let d, e, f, g, i, j, l, o, r, n, q, h = {
            x: 0,
            y: 0
        },
        p = { ...h
        },
        k = za(p, {
            stiffness: .1,
            damping: .9
        }),
        m = {
            width: 0,
            height: 0
        },
        s, u = {
            eyeDistanceFactor: 0,
            eyeDistanceActive: {
                x: 0,
                y: 0
            },
            eyeMouseOffset: {
                x: 0,
                y: 0
            },
            noseMouseOffset: {
                x: 0,
                y: 0
            }
        },
        t = za(u, {
            stiffness: .03,
            damping: .4
        }),
        w;
    async function x() {
        s = [], d = new tc({
            canvas: a,
            dpr: window.devicePixelRatio,
            depth: !1
        }), e = d.gl;
        let F = new xa("#d7d2d6");
        e.clearColor(F.r, F.g, F.b, 1), f = new va(e), g = new sc(e), g.position.set(0, 0, 1), d.render({
            scene: f,
            camera: g
        }), i = {
            uTime: {
                value: 0
            },
            uMouse: {
                value: new Ra()
            },
            uResolution: {
                value: new Ra()
            }
        };
        let B = new Xb(e, {
            width: 1,
            height: 1
        });
        j = zk({
            gl: e,
            geometry: B,
            uniforms: i,
            color: new xa("#8EF3CE")
        }), f.addChild(j.transform);
        let H = [{
            value: new xa("#3D60E2"),
            weight: 10
        }, {
            value: new xa("#FD8D54"),
            weight: 10
        }, {
            value: new xa("#FFBF30"),
            weight: 10
        }, {
            value: new xa("#EF3547"),
            weight: 10
        }, {
            value: new xa("#8EF3CE"),
            weight: 2.5
        }, {
            value: new xa("#9E164D"),
            weight: 10
        }];
        q = Ak({
            gl: e,
            colors: H,
            uniforms: i
        }), q.transform.position.z = .3, f.addChild(q.transform), l = yj({
            gl: e,
            geometry: B,
            uniforms: i,
            state: c,
            color: new xa("#FFFFFF"),
            offset: new Ra(.03, -.08)
        }), f.addChild(l.transform), o = yj({
            gl: e,
            geometry: B,
            uniforms: i,
            state: c,
            color: new xa("#FFFFFF"),
            offset: new Ra(.03, .01)
        }), f.addChild(o.transform), r = Hh({
            gl: e,
            geometry: B,
            uniforms: i,
            color: new xa("#c1bdba")
        }), r.transform.position.z = .1, f.addChild(r.transform), n = Ih({
            gl: e,
            colors: H,
            geometry: B,
            uniforms: i,
            mouse: h,
            dimensions: m
        }), f.addChild(n.transform);
        let L = la(v, {
                fire: !0
            }),
            I = ua(b, G => {
                h.x = G.clientX / a.parentNode.offsetWidth * 2 - 1, h.y = -(G.clientY / a.parentNode.offsetHeight * 2 - 1), k.target({
                    x: h.x,
                    y: h.y
                })
            }),
            C = Q(z);
        s.push(L, C, I);
        let E = c.actionClicked.subscribe(G => {
            G ? y(1) : y(0)
        });
        s.push(E)
    }
    async function A() {
        await Promise.all([l.load(), o.load(), j.load(), n.load(), r.load()]), l.init(), l.resize(m), o.init(), o.resize(m), j.init(), j.resize(m), n.init(), n.resize(m), r.init(), r.resize(m)
    }

    function D() {
        l.display(), o.display(), r.display(), j.display(), n.display()
    }

    function y(F) {
        t.target({
            eyeDistanceFactor: F
        })
    }

    function v() {
        let F = a.parentNode.offsetWidth,
            B = a.parentNode.offsetHeight;
        m.width = F, m.height = B, i.uResolution.value.x = F, i.uResolution.value.y = B, d.setSize(F, B), g.orthographic({
            left: -F * .5,
            right: F * .5,
            top: B * .5,
            bottom: -B * .5
        }), r.resize(m), j.resize(m), l.resize(m), o.resize(m), n.resize(m);
        let H = $a() ? 1 : ia(window.innerWidth, 320, 1024, 1.5, 1);
        l.transform.position.x0 = -F * .2 * H, l.transform.position.y0 = B * .16, o.transform.position.x0 = F * .18 * H, o.transform.position.y0 = B * .12, u.eyeDistanceActive.x = F * .1, u.eyeDistanceActive.y = B * .1, u.eyeMouseOffset.x = m.width * .01, u.eyeMouseOffset.y = m.height * .01, u.noseMouseOffset.x = m.width * .007, u.noseMouseOffset.y = m.height * .007
    }

    function z({
        deltaTime: F
    }) {
        k.update(), n.update({
            deltaTime: F
        }), l.update(), o.update(), t.update(), r.update(), i.uTime.value += F, i.uMouse.value.x = p.x * .5, i.uMouse.value.y = p.y * .5, l.transform.position.x = l.transform.position.x0 + p.x * u.eyeMouseOffset.x + u.eyeDistanceFactor * u.eyeDistanceActive.x * -1, l.transform.position.y = l.transform.position.y0 + p.y * u.eyeMouseOffset.y + u.eyeDistanceFactor * u.eyeDistanceActive.y * -1, o.transform.position.x = o.transform.position.x0 + p.x * u.eyeMouseOffset.x + u.eyeDistanceFactor * u.eyeDistanceActive.x, o.transform.position.y = o.transform.position.y0 + p.y * u.eyeMouseOffset.y + u.eyeDistanceFactor * u.eyeDistanceActive.y * .75, j.transform.position.x = p.x * u.noseMouseOffset.x, j.transform.position.y = p.y * u.noseMouseOffset.y, d.render({
            scene: f,
            camera: g
        })
    }

    function J() {
        for (let F = 0; F < s.length; F++) s[F](), s[F] = null;
        s = null, f.removeChild(q.transform), q.dispose(), q = null, f.removeChild(n.transform), n.dispose(), n = null, f.removeChild(r.transform), r.dispose(), r = null, f.removeChild(l.transform), l.dispose(), l = null, f.removeChild(o.transform), o.dispose(), o = null, f.removeChild(j.transform), j.dispose(), j = null, f = null, d = null, g = null, m = null, h = null, p = null, k = null
    }
    return x(), {
        display: D,
        load: A,
        dispose: J
    }
}
var yk = pn;
const br = U(ja());

function nn() {
    let a, b = [],
        c = [],
        d, e, f, g, i, j;

    function l() {
        let m = document.querySelector(".view--home");
        e = m.querySelector(".home__intro"), d = e.querySelector(".intro__text p");
        let s = m.querySelector(".home__projects");
        c.push(...s.querySelectorAll(".project__item")), g = [...m.querySelectorAll(".media__item")];
        for (let H = 0; H < c.length; H++) {
            let L = c[H],
                I = L.dataset.slug,
                C = L.querySelector(".project__link"),
                E = g.find(M => M.dataset.slug === I);

            function u() {
                E.classList.add("visible");
                for (let M = 0; M < c.length; M++) c[M].style.setProperty("--delay", "0ms"), c[M] !== L || c[M].style.setProperty("--scale", 1.1)
            }

            function t() {
                E.classList.remove("visible");
                for (let M = 0; M < c.length; M++) c[M].style.setProperty("--delay", "0ms"), c[M].style.setProperty("--scale", 1)
            }
            let G = ya(C, u),
                N = na(C, t);
            b.push(G, N);
            let K = Rb(C, {
                rangeX: [-10, 10],
                rangeY: [-10, 10],
                $target: C.parentNode
            });
            b.push(K)
        }
        const {
            words: w
        } = Nb(d, {
            splitInCharacters: !1
        });
        f = w;
        let x = m.querySelector(".canvas");
        i = m.querySelector(".home__action .action__button"), j = m.querySelector(".home__hint");
        let A = Rb(i, {
            rangeX: [-20, 20],
            rangeY: [-20, 20]
        });
        b.push(A);
        let D = Qa(!1),
            y = {
                actionHovered: D,
                actionClicked: Qb
            },
            v = ya(i, () => {
                D.set(!0)
            }),
            z = na(i, () => {
                D.set(!1)
            }),
            J = Pa(i, () => {
                Qb.update(H => !H)
            });
        a = yk({
            canvas: x,
            view: m,
            state: y
        });

        function F(H) {
            if (H) {
                let L = br.shuffle(c);
                for (let I = 0; I < L.length; I++) {
                    let C = 50 + I * 50;
                    L[I].style.setProperty("--delay", `${C}ms`)
                }
                i.classList.add("active"), s.classList.add("visible"), e.classList.add("hidden"), j.classList.add("hidden")
            } else i.classList.remove("active"), s.classList.remove("visible"), e.classList.remove("hidden"), j.classList.remove("hidden")
        }
        let B = Qb.subscribe(F);
        Qb.read() && F(!0), b.push(v, z, J, B)
    }
    async function o() {
        let m = [];
        g.forEach(s => {
            m.push(...s.querySelectorAll("img"))
        }), await Promise.all(m.map(s => Tb(s.dataset.src, {
            img: s
        }))), n()
    }
    async function r() {
        await a.load()
    }

    function n() {
        a.display(), q(), h()
    }

    function q() {
        Mb(() => {
            i.classList.add("visible"), j.classList.add("visible")
        })
    }

    function h() {
        let m = -1,
            s = [];
        for (let w = 0; w < f.length; w++) {
            let x = f[w],
                A = x.getBoundingClientRect().y;
            A !== m && (m = A, s[s.length] = []), s[s.length - 1].push(x)
        }
        let u = 1e3,
            t = 75;
        for (let w = 0; w < s.length; w++) {
            let x = u + w * t;
            s[w].forEach(A => {
                fa(A, "transitionDelay", `${x}ms`)
            })
        }
        Mb(() => {
            e.classList.add("visible")
        })
    }

    function p() {
        sa(b), a.dispose(), g = []
    }
    const k = {
        enter: l,
        leave: p,
        load: r,
        preload: o
    };
    return k
}
var on = nn;
export {
    on as
    default
};
