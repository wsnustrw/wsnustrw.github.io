import {
    a as Gc
} from "../chunk.y_z7q_lv.js";
import {
    a as xa,
    b as Ra,
    d as db,
    e as Xb,
    g as tc,
    i as Pb,
    j as cb,
    k as va,
    l as sc,
    m as Za,
    n as xb,
    o as Jc,
    p as Ih,
    q as Hh
} from "../chunk.v7Rg9nYm.js";
import {
    a as Fc
} from "../chunk.6E_bIGju.js";
import {
    a as Hc,
    b as Ic,
    c as cd,
    d as Eh
} from "../chunk.Jp5GJfej.js";
import {
    a as $a,
    b as Mb
} from "../chunk.X9R5jYKj.js";
import {
    a as ab
} from "../chunk.9o_ia7Wv.js";
import {
    a as bd,
    b as sh,
    c as Fh
} from "../chunk.XEtwROWp.js";
import "../chunk.WQj5ZSQd.js";
import {
    a as Rb
} from "../chunk.sEsxgipK.js";
import {
    b as eb
} from "../chunk.UMr-yWWQ.js";
import {
    a as Tb,
    b as Nb
} from "../chunk.AAX0GPHs.js";
import {
    d as ia,
    e as la,
    f as za
} from "../chunk.iFD6NlhM.js";
import {
    c as gi,
    e as cc
} from "../chunk.aenqHFRN.js";
import {
    c as Oa
} from "../chunk.C_jMmbhp.js";
import {
    a as sa,
    f as fa
} from "../chunk.mxUo6q2y.js";
import {
    f as ua,
    j as Q,
    l as U,
    m as ja
} from "../chunk.CeGTj4_V.js";
var qi = Hc;

function mk(a) {
    let b = a.split(";").filter(d => d !== ""),
        c = b.map(d => {
            let [e, f] = d.split(":");
            e = e.trim(), f = f.trim();
            let g = "",
                i = ["%", "deg"];
            for (let j = 0; j < i.length; j++)
                if (f.includes(i[j])) {
                    g = i[j], f = f.split(g)[0];
                    break
                }
            return f = Number(f), {
                name: e,
                value: f,
                unit: g
            }
        });
    return c
}

function Jm(a, b) {
    if (a.length !== b.length) {
        let e = a.map(g => g.name),
            f = b.map(g => g.name);
        e.forEach(g => {
            if (!f.includes(g)) throw new Error(`MediaVideo :: ${g} is not specified in parallax-end parameters`)
        }), f.forEach(g => {
            if (!e.includes(g)) throw new Error(`MediaVideo :: ${g} is not specified in parallax-end parameters`)
        })
    }
    let c = {},
        d = [];
    for (let e = 0; e < a.length; e++) {
        let f = a[e],
            g = b[e],
            {
                name: i,
                unit: j
            } = f;
        d.push(i), c[i] = {
            start: f.value,
            end: g.value,
            unit: j
        }
    }
    return [c, d]
}

function Km(a, b = {}) {
    let c = mk(a.dataset.parallaxStart),
        d = mk(a.dataset.parallaxEnd),
        [e, f] = Jm(c, d),
        g = cd(a, ({
            progress: i
        }) => {
            if (i >= 0 && i <= 1)
                for (let j = 0; j < f.length; j++) {
                    let l = f[j],
                        o = e[l],
                        {
                            start: r,
                            end: n,
                            unit: q
                        } = o,
                        h = ia(i, 0, 1, r, n);
                    a.style.setProperty(l, `${h}${q}`)
                }
        }, b);
    return () => {
        g(), g = null
    }
}
var ii = Km;
let Jj = new Set();

function Eo(a, b, c) {
    let d = c.querySelector("iframe"),
        e = c.querySelector("img"),
        f = e.parentNode,
        g = [],
        i = {
            loadingIframe: !1,
            loadingCover: !1,
            loadedCover: !1,
            loadedIframe: !1
        };
    const j = c.dataset.hasOwnProperty("parallax");
    let l, o = e.dataset.src,
        r = d.dataset.src,
        n = r.includes("autoplay=1");

    function q() {
        let t = Ic(c, () => {
            !i.loadingCover && !i.loadedCover && p()
        }, {
            threshold: 0,
            rootMargin: "0% 0% 150% 0%"
        });
        if (!n) {
            let x = c.querySelector("button"),
                A = sh(x, f, d);
            g.push(A)
        }
        let w = Ic(c, () => {
            !i.loadingIframe && !i.loadedIframe ? n && m() : l && n && l.play();
            let x = Eh(c, () => {
                l && l.pause()
            });
            g.push(x)
        });
        g.push(w, t);
        if (j) {
            let x = ii(c);
            g.push(x)
        }
        h()
    }
    async function h() {
        await Oa(), Jj.has(o) && p()
    }
    async function p() {
        i.loadingCover = !0, e = await eb.register(Tb(o, {
            img: e
        })), Jj.has(o) || Jj.add(o), k()
    }

    function k() {
        i.loadingCover = !1, i.loadedCover = !0, c.classList.add("loaded"), n && (c.style.cursor = "progress")
    }
    async function m() {
        if (i.loadingIframe || i.loadedIframe) return;
        i.loadingIframe = !0, await eb.register(Fh()), l = await eb.register(bd(d, {
            src: r,
            autoplay: n
        })), i.loadingIframe = !1, i.loadedIframe = !0, e.parentNode.style.opacity = 0, c.style.cursor = null, await Oa(), e.parentNode.parentNode.removeChild(e.parentNode)
    }

    function s() {
        sa(g), l && l.destroy().then(() => {
            l = null
        }), g = null
    }
    const u = {
        dispose: s
    };
    return q(), u
}
var Kk = Eo;
const Vj = new Uint8Array(4);

function Wj(a) {
    return (a & a - 1) === 0
}
let pl = 1;
class Uj {
    constructor(a, {
        image: b,
        target: c = a.TEXTURE_2D,
        type: d = a.UNSIGNED_BYTE,
        format: e = a.RGBA,
        internalFormat: f = e,
        wrapS: g = a.CLAMP_TO_EDGE,
        wrapT: i = a.CLAMP_TO_EDGE,
        generateMipmaps: j = !0,
        minFilter: l = j ? a.NEAREST_MIPMAP_LINEAR : a.LINEAR,
        magFilter: o = a.LINEAR,
        premultiplyAlpha: r = !1,
        unpackAlignment: n = 4,
        flipY: q = c == a.TEXTURE_2D ? !0 : !1,
        anisotropy: h = 0,
        level: p = 0,
        width: k,
        height: m = k
    } = {}) {
        this.gl = a, this.id = pl++, this.image = b, this.target = c, this.type = d, this.format = e, this.internalFormat = f, this.minFilter = l, this.magFilter = o, this.wrapS = g, this.wrapT = i, this.generateMipmaps = j, this.premultiplyAlpha = r, this.unpackAlignment = n, this.flipY = q, this.anisotropy = Math.min(h, this.gl.renderer.parameters.maxAnisotropy), this.level = p, this.width = k, this.height = m, this.texture = this.gl.createTexture(), this.store = {
            image: null
        }, this.glState = this.gl.renderer.state, this.state = {}, this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR, this.state.magFilter = this.gl.LINEAR, this.state.wrapS = this.gl.REPEAT, this.state.wrapT = this.gl.REPEAT, this.state.anisotropy = 0
    }
    bind() {
        if (this.glState.textureUnits[this.glState.activeTextureUnit] === this.id) return;
        this.gl.bindTexture(this.target, this.texture), this.glState.textureUnits[this.glState.activeTextureUnit] = this.id
    }
    update(a = 0) {
        const b = !(this.image === this.store.image && !this.needsUpdate);
        (b || this.glState.textureUnits[a] !== this.id) && (this.gl.renderer.activeTexture(a), this.bind());
        if (!b) return;
        this.needsUpdate = !1, this.flipY !== this.glState.flipY && (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY), this.glState.flipY = this.flipY), this.premultiplyAlpha !== this.glState.premultiplyAlpha && (this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha), this.glState.premultiplyAlpha = this.premultiplyAlpha), this.unpackAlignment !== this.glState.unpackAlignment && (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment), this.glState.unpackAlignment = this.unpackAlignment), this.minFilter !== this.state.minFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter), this.state.minFilter = this.minFilter), this.magFilter !== this.state.magFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter), this.state.magFilter = this.magFilter), this.wrapS !== this.state.wrapS && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS), this.state.wrapS = this.wrapS), this.wrapT !== this.state.wrapT && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT), this.state.wrapT = this.wrapT), this.anisotropy && this.anisotropy !== this.state.anisotropy && (this.gl.texParameterf(this.target, this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropy), this.state.anisotropy = this.anisotropy);
        if (this.image) {
            this.image.width && (this.width = this.image.width, this.height = this.image.height);
            if (this.target === this.gl.TEXTURE_CUBE_MAP)
                for (let c = 0; c < 6; c++) this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + c, this.level, this.internalFormat, this.format, this.type, this.image[c]);
            else if (ArrayBuffer.isView(this.image)) this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image);
            else if (this.image.isCompressedTexture)
                for (let c = 0; c < this.image.length; c++) this.gl.compressedTexImage2D(this.target, c, this.internalFormat, this.image[c].width, this.image[c].height, 0, this.image[c].data);
            else this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image);
            this.generateMipmaps && (!this.gl.renderer.isWebgl2 && (!Wj(this.image.width) || !Wj(this.image.height)) ? (this.generateMipmaps = !1, this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE, this.minFilter = this.gl.LINEAR) : this.gl.generateMipmap(this.target)), this.onUpdate && this.onUpdate()
        } else if (this.target === this.gl.TEXTURE_CUBE_MAP)
            for (let c = 0; c < 6; c++) this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + c, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, Vj);
        else this.width ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null) : this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, Vj);
        this.store.image = this.image
    }
}
class Xj extends Pb {
    constructor(a, {
        attributes: b = {}
    } = {}) {
        Object.assign(b, {
            position: {
                size: 2,
                data: new Float32Array([-1, -1, 3, -1, -1, 3])
            },
            uv: {
                size: 2,
                data: new Float32Array([0, 0, 2, 0, 0, 2])
            }
        }), super(a, b)
    }
}
var sk = `
vec2 uvCover (vec2 st, vec2 size, vec2 resolution) {
    vec2 uv = st;
    vec2 s = resolution; // Screen
    vec2 i = size; // Image

    float rs = s.x / s.y;
    float ri = i.x / i.y;
    vec2 new = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
    vec2 offset = (rs < ri ? vec2((new.x - s.x) / 2.0, 0.0) : vec2(0.0, (new.y - s.y) / 2.0)) / new;
    
    uv = uv * s / new + offset;

    return uv;
}
`;
const pu = U(Jc()),
    Ao = `
    attribute vec2 uv;
    attribute vec2 position;
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`,
    Bo = `
    precision highp float;

    uniform sampler2D tMap;
    uniform vec2 uResolution;
    uniform vec2 uMapSize;
    uniform vec3 uDiffuseBkg;
    uniform vec3 uDiffuse;
    uniform float uLoading;
    uniform float uTime;
    uniform vec2 uOffset;

    varying vec2 vUv;

    ${sk}
    ${Gc}
    ${Fc}

    void main() {
        vec2 uv = vUv;
        uv.y = mapRange(uv.y, 0., 1., uOffset.x, uOffset.y);

        vec4 mapTexel = texture2D(tMap, uv);
        vec4 bkgColor = vec4(uDiffuseBkg, 1.);

        float margin = 0.02;

        float m = margin + noise(vUv.x * 10.) * margin * 0.5;

        // antialiasing
        float border = 1. - smoothstep(m - 0.001, m + 0.001, vUv.y);
        border = max(border, 1. - smoothstep(m - 0.001, m + 0.001, 1. - vUv.y));

        vec4 color = mix(vec4(uDiffuse, 1.), mapTexel, step(1. - vUv.y, uLoading));

        vec4 finalColor = mix(color, bkgColor, border);

        gl_FragColor = finalColor;
    }
`;

function Co(a, b, c, d) {
    let e, f, g, i, j, l, o, r = [],
        n = new xa("#FCF8F7"),
        q = new Ra(),
        h = {
            renderable: !0,
            loaded: !1,
            diff: 0
        };

    function p() {
        e = new tc({
            dpr: window.devicePixelRatio,
            depth: !1
        }), f = e.gl, f.clearColor(0, 0, 1, 1), g = new va(f), i = new sc(f), o = new Uj(f), o.minFilter = f.LINEAR, o.magFilter = f.LINEAR, j = {
            uTime: {
                value: 0
            },
            uMouse: {
                value: new Ra()
            },
            uResolution: {
                value: q
            },
            tMap: {
                value: o
            },
            uDiffuseBkg: {
                value: n
            },
            uDiffuse: {
                value: new xa(d)
            },
            uMapSize: {
                value: new Ra()
            },
            uLoading: {
                value: 0
            },
            uViewportProgress: {
                value: 0
            },
            uOffset: {
                value: new Ra(0, 1)
            }
        }, c.innerHTML = "", c.appendChild(f.canvas);
        let y = new Xj(f),
            v = new db(f, {
                vertex: Ao,
                fragment: Bo,
                uniforms: j
            });
        l = new cb(f, {
            geometry: y,
            program: v
        }), g.addChild(l);
        let z = la(k, {
                fire: !0
            }),
            J = Q(t);
        r.push(z, J)
    }

    function k() {
        let y = c.offsetWidth,
            v = c.offsetHeight;
        q.x = y, q.y = v, e.dpr = window.devicePixelRatio, e.setSize(y, v), h.loaded && u()
    }

    function m(y) {
        h.diff > 0 && (j.uOffset.value.x = h.diff * (1 - y), j.uOffset.value.y = 1 - h.diff * y)
    }

    function s(y) {
        o.image = y, l.program.uniforms.uMapSize.value.x = y.naturalWidth, l.program.uniforms.uMapSize.value.y = y.naturalHeight, h.loaded = !0, u(), xb(l.program.uniforms.uLoading, {
            duration: 1e3,
            easing: pu.default(.86, 0, .07, 1),
            value: 1
        })
    }

    function u() {
        let y = window.innerWidth * o.image.naturalHeight / o.image.naturalWidth,
            v = (y - c.offsetHeight) / y;
        h.diff = v
    }

    function t({
        deltaTime: y,
        time: v
    }) {
        if (!h.renderable) return;
        j.uTime.value += y, e.render({
            scene: g
        })
    }

    function w() {
        h.renderable = !0
    }

    function x() {
        h.renderable = !1
    }

    function A() {
        for (let y = 0; y < r.length; y++) r[y](), r[y] = null;
        g = null, e = null, i = null
    }
    const D = {
        onViewportEnter: w,
        onViewportLeave: x,
        setViewportProgress: m,
        setTexture: s,
        dispose: A
    };
    return p(), D
}
var Qk = Co;

function Do(a, b, c, d) {
    let e = [...b.querySelectorAll("img")],
        f = {
            isFullWidth: b.classList.contains("block--full-width"),
            isDouble: b.classList.contains("block--double"),
            loading: !1,
            loaded: !1
        },
        g = [],
        i, j, l, o;
    const r = c.dataset.hasOwnProperty("parallax");

    function n() {
        let k = Ic(c, () => {
            if (f.loading || f.loaded) return;
            q()
        }, {
            threshold: 0,
            rootMargin: "0% 0% 100% 0%"
        });
        g.push(k);
        if (f.isFullWidth) {
            o = Qk(a, b, c, d);
            let m = Hc(c, ({
                    isIntersecting: u
                }) => {
                    if (!o) return;
                    u ? o.onViewportEnter() : o.onViewportLeave()
                }),
                s = cd(c, ({
                    progress: u
                }) => {
                    o && u >= 0 && u <= 1 && o.setViewportProgress(u)
                }, {}, {
                    threshold: .5
                });
            g.push(m, s)
        }
        if (r) {
            let m = ii(c);
            g.push(m)
        }
    }
    async function q() {
        e = await Promise.all(e.map(k => eb.register(Tb(k.dataset.src, {
            img: k
        })))), f.loading = !1, f.loaded = !0, o && o.setTexture(e[0]), c.classList.add("loaded")
    }

    function h() {
        sa(g), g = null, o && (o.dispose(), o = null), f = null
    }
    const p = {
        dispose: h
    };
    return n(), p
}
var Lk = Do;

function yo({
    gl: a,
    uniforms: b,
    color: c,
    offset: d,
    fragmentInclude: e = ""
}) {
    let f = new va(a),
        g;

    function i({
        vertex: n,
        fragment: q
    }) {
        let h = new Xb(a, {
                width: 1,
                height: 1
            }),
            p = new db(a, {
                vertex: n,
                fragment: q,
                uniforms: { ...b,
                    uOffset: {
                        value: d
                    },
                    uColor: {
                        value: c
                    },
                    uPupilScale: {
                        value: 3.5
                    },
                    opacity: {
                        value: 1
                    }
                },
                transparent: !0,
                depthWrite: !1
            });
        g = new cb(a, {
            geometry: h,
            program: p
        }), g.position.set(0, .5, 0), f.addChild(g)
    }

    function j(n, q) {
        if (!g) return;
        $a() ? g.scale.set(n * .25, n * .25, 1) : g.scale.set(n * .35, n * .35, 1)
    }

    function l() {}

    function o() {
        sa(listeners), g && (f.removeChild(g), g = null)
    }
    const r = {
        init: i,
        transform: f,
        resize: j,
        update: l,
        dispose: o
    };
    return r
}
var Ij = yo;
const $t = U(ja());

function wo({
    gl: a,
    uniforms: b,
    color: c
}) {
    let d = new va(a),
        e, f, g;

    function i() {
        let n = new Xb(a, {
                width: 1,
                height: 1
            }),
            q = new db(a, {
                vertex: f,
                fragment: g,
                uniforms: { ...b,
                    diffuse: {
                        value: new xa(c)
                    },
                    uStrokeScale: {
                        value: 1
                    }
                },
                transparent: !0
            });
        e = new cb(a, {
            geometry: n,
            program: q
        }), e.rotation.z = .08, d.addChild(e)
    }
    async function j() {
        async function n() {
            let k = (await
                import ("../shaders/basic.vs.100.js")).default;
            return k
        }
        async function q() {
            let k = (await
                import ("./Work/background.fs.js")).default;
            return k
        }
        let [h, p] = await Promise.all([n(), q()]);
        f = Za(h, {
            gl: a,
            vertex: !0
        }), g = Za(p, {
            gl: a,
            derivatives: !0
        }), i()
    }

    function l(n, q) {
        if (!e) return;
        $a() ? (e.scale.set(n * 1.05, q * 1, 1), e.position.y = q * .05) : (e.scale.set(n * 2, q * .9, 1), e.position.y = q * .04)
    }

    function o() {
        e && (d.removeChild(e), e = null)
    }
    const r = {
        transform: d,
        resize: l,
        load: j,
        dispose: o
    };
    return r
}

function xo(a, {
    color: b,
    colorDark: c
} = {}) {
    let d = a.querySelector("canvas"),
        e, f, g, i, j, l, o, r, n, q = {
            width: 0,
            height: 0
        },
        h = {
            x: 0,
            y: 0
        },
        p = za(h, {
            stiffness: .1,
            damping: .9
        }),
        k = [],
        m = {
            renderable: !0
        };

    function s() {
        e = new tc({
            canvas: d,
            dpr: window.devicePixelRatio,
            depth: !1
        }), f = e.gl;
        let y = new xa("#FCF8F7");
        f.clearColor(y.r, y.g, y.b, 1), g = new va(f), i = new sc(f), i.position.set(0, 0, 1), j = {
            uTime: {
                value: 0
            },
            uMouse: {
                value: new Ra()
            },
            uResolution: {
                value: new Ra()
            },
            uResolutionRatio: {
                value: 0
            }
        }, l = wo({
            gl: f,
            uniforms: j,
            color: b
        }), g.addChild(l.transform);
        let v = new Xb(f, {
            width: 1,
            height: 1
        });
        n = Hh({
            gl: f,
            uniforms: j,
            geometry: v,
            color: new xa(c),
            opacity: .2
        }), n.transform.position.z = .05, g.addChild(n.transform), o = Ij({
            gl: f,
            uniforms: j,
            color: new xa("#FFFFFF"),
            offset: new Ra(.02, -.02, $t.default.rangeFloor(0, 400))
        }), o.transform.position.z = .1, g.addChild(o.transform), r = Ij({
            gl: f,
            uniforms: j,
            color: new xa("#FFFFFF"),
            offset: new Ra(.02, -.01, $t.default.rangeFloor(0, 400))
        }), r.transform.position.z = .1, g.addChild(r.transform);
        let z = ua(window, H => {
                let L = H.clientX / window.innerWidth * 2 - 1,
                    I = -(H.clientY / window.innerHeight * 2 - 1);
                p.target({
                    x: L,
                    y: I
                })
            }),
            J = la(x, {
                fire: !0
            }),
            F = Q(w);
        k.push(J, F, z);
        let B = qi(a, ({
            isIntersecting: H
        }) => {
            m.renderable = H
        })
    }

    function u() {
        n.display()
    }
    async function t() {
        async function y() {
            let F = (await
                import ("../shaders/basic.vs.100.js")).default;
            return F
        }
        async function v() {
            let F = (await
                import ("./Home/eye.fs.js")).default;
            return F
        }
        let [, z, J] = await Promise.all([l.load(), y(), v(), n.load()]);
        Mb(() => {
            n.init();
            const F = Za(z, {
                    gl: f,
                    vertex: !0
                }),
                B = Za(J, {
                    gl: f,
                    derivatives: !0
                });
            o.init({
                vertex: F,
                fragment: B
            }), r.init({
                vertex: F,
                fragment: B
            }), x(), u()
        })
    }

    function w({
        deltaTime: y
    }) {
        if (!m.renderable) return;
        p.update(), j.uTime.value += y, j.uMouse.value.x = h.x * .2, j.uMouse.value.y = h.y * .2;
        let v = $a() ? window.innerHeight : window.innerHeight * .75,
            z = ia(window.scroll.position.sy, 0, v, 1, 0);
        z = ab(z, 0, 1);
        let J = -window.scroll.position.sy * z;
        o.transform.position.x = o.transform.position.x0 + h.x * q.width * .03, o.transform.position.y = o.transform.position.y0 + J + h.y * q.height * .03, r.transform.position.x = r.transform.position.x0 + h.x * q.width * .03, r.transform.position.y = r.transform.position.y0 + J * 1.5 + h.y * q.height * .03, e.render({
            scene: g,
            camera: i
        })
    }

    function x() {
        let y = d.parentNode.offsetWidth,
            v = d.parentNode.offsetHeight;
        q.width = y, q.height = v, j.uResolution.value.x = y, j.uResolution.value.y = v, j.uResolutionRatio.value = y / v, e.dpr = window.devicePixelRatio, e.setSize(y, v), i.orthographic({
            left: -y * .5,
            right: y * .5,
            top: v * .5,
            bottom: -v * .5
        }), l.resize(y, v), o.resize(y, v), r.resize(y, v), n.resize({
            width: y,
            height: v
        }), $a() ? (o.transform.position.x0 = -y * .18, o.transform.position.y0 = window.innerHeight * .12, r.transform.position.x0 = y * .23, r.transform.position.y0 = window.innerHeight * .3) : window.innerWidth < 768 ? (o.transform.position.x0 = -y * .32, o.transform.position.y0 = v * .1, r.transform.position.x0 = y * .3, r.transform.position.y0 = v * .16) : (o.transform.position.x0 = -y * .27, o.transform.position.y0 = v * .1, r.transform.position.x0 = y * .26, r.transform.position.y0 = v * .18)
    }

    function A() {
        sa(k), g = null, f = null, e = null, n.dispose(), n = null
    }
    s();
    const D = {
        display: u,
        dispose: A,
        load: t
    };
    return D
}
var Mk = xo;
var Qi = gi;

function vo(a) {
    let b = a.querySelector("canvas"),
        c, d, e, f, g, i, j = {
            width: 0,
            height: 0
        },
        l = [],
        o = {
            renderable: !1
        };

    function r() {
        c = new tc({
            canvas: b,
            dpr: window.devicePixelRatio,
            depth: !1
        }), d = c.gl;
        let s = new xa("#FCF8F7");
        d.clearColor(s.r, s.g, s.b, 1), e = new va(d), f = new sc(d), f.position.set(0, 0, 1), g = {
            uTime: {
                value: 0
            },
            uMouse: {
                value: new Ra()
            },
            uResolution: {
                value: new Ra()
            },
            uResolutionRatio: {
                value: 0
            }
        };
        let u = new Xb(d, {
                width: 1,
                height: 1
            }),
            t = [{
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
        i = Ih({
            gl: d,
            geometry: u,
            uniforms: g,
            colors: t,
            mouse: new Ra(),
            dimensions: j,
            count: 40,
            globalScale: $a() ? .4 : .9,
            shadowMinRdm: 1
        }), e.addChild(i.transform);
        let w = la(p, {
                fire: !0
            }),
            x = Q(h),
            A = qi(a, ({
                isIntersecting: D
            }) => {
                o.renderable = D
            });
        l.push(w, x, A), q()
    }

    function n() {}
    async function q() {
        await i.load(), i.init(), i.display(), o.renderable = !0, h(), o.renderable = !1
    }

    function h({
        deltaTime: s = 0
    } = {}) {
        if (!o.renderable) return;
        g.uTime.value += s, i.update({
            deltaTime: s
        }), c.render({
            scene: e,
            camera: f
        })
    }

    function p() {
        let s = b.parentNode.offsetWidth,
            u = b.parentNode.offsetHeight;
        j.width = s, j.height = u, g.uResolution.value.x = s, g.uResolution.value.y = u, g.uResolutionRatio.value = s / u, c.dpr = window.devicePixelRatio, c.setSize(s, u), f.orthographic({
            left: -s * .5,
            right: s * .5,
            top: u * .5,
            bottom: -u * .5
        })
    }

    function k() {
        sa(l), e.removeChild(i.transform), i.dispose(), e = null, d = null, c = null
    }
    r();
    const m = {
        display: n,
        dispose: k,
        load: q
    };
    return m
}
var Nk = vo;
const Ht = U(ja());

function to({
    slug: a
}) {
    let b = [],
        c, d, e = [],
        f;

    function g() {
        f = document.querySelector(".view--work");
        let h = f.dataset.color,
            p = Qi[h],
            k = Qi[`${h}Dark`];
        c = Mk(f.querySelector(".work__canvas"), {
            color: p,
            colorDark: k
        });
        let m = [...f.querySelectorAll(".block")],
            s = cc(f, {
                disallowList: [...f.querySelectorAll(".media__button")],
                bindToSmoothScroll: !0
            });
        e.push(s);
        for (let w = 0; w < m.length; w++) {
            let x = m[w],
                A = [...x.querySelectorAll(".block__media")];
            for (let D = 0; D < A.length; D++) {
                let y = A[D],
                    v = y.dataset.type,
                    z = v === "vimeo" ? Kk(w, m[w], y, p) : Lk(w, m[w], y, p);
                b.push(z)
            }
        }
        let u = [...f.querySelectorAll(".end__link")];
        for (let w = 0; w < u.length; w++) {
            let x = Rb(u[w], {
                rangeX: [-10, 10],
                rangeY: [-10, 10]
            });
            e.push(x)
        }
        let t = f.querySelector(".external__link");
        if (t) {
            let w = Rb(t, {
                rangeX: [-10, 10],
                rangeY: [-10, 10]
            });
            e.push(w)
        }
        if (window.scroll.isSmooth) {
            let w = [f.querySelector(".work__hero"), f.querySelector(".work__start"), ...f.querySelectorAll(".work__blocks .block"), f.querySelector(".work__footer"), f.querySelector(".work__end")],
                x = w.map(A => window.scroll.bind(A));
            e.push(...x)
        }
        Mb(() => {
            d = Nk(f.querySelector(".work__end"))
        }, {
            frameCount: 3
        })
    }
    async function i() {
        await c.load(), await Oa(), j()
    }

    function j() {
        l(), o(), r()
    }

    function l() {
        let h = f.querySelector(".work__baseline"),
            p = [...h.querySelectorAll(".baseline__part")],
            k = p.reduce((t, w) => {
                const {
                    characters: x
                } = Nb(w, {
                    accessible: !1
                });
                return [...t, ...x.map(A => {
                    let D = Ht.default.value() * -50;
                    return fa(A, "transform", `translate3d(0, ${D}%, 0)`), A
                })]
            }, []),
            m = 1e3,
            s = 200,
            u = k.filter(t => t.innerHTML !== " ");
        u.forEach((t, w) => {
            let x = m + Ht.default.value() * s;
            fa(t, "transitionDelay", `${x}ms`)
        }), Mb(() => {
            u.forEach((t, w) => {
                fa(t, "opacity", 1), fa(t, "transform", "translate3d(0, 0%, 0)")
            })
        }, {
            frameCount: 3
        })
    }

    function o() {
        let h = f.querySelector(".category__text");
        const {
            characters: p
        } = Nb(h);
        let k = 1e3,
            m = 20,
            s = p.filter(u => u.innerHTML !== " ");
        s.forEach((u, t) => {
            let w = k + t * m;
            fa(u, "transitionDelay", `${w}ms`)
        }), Mb(() => {
            h.classList.add("visible")
        })
    }

    function r() {
        let h = document.querySelector(".work__hint");
        Mb(() => {
            h.classList.add("visible")
        })
    }

    function n() {
        c.dispose();
        for (let h = 0; h < b.length; h++) b[h].dispose(), b[h] = null;
        b = [], sa(e), e = [], f = null
    }
    const q = {
        enter: g,
        leave: n,
        preload: i
    };
    return q
}
var uo = to;
export {
    uo as
    default
};