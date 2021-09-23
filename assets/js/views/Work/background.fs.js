import {
    a as th,
    b as vh
} from "../../chunk.9skNqwPE.js";
import {
    a as Gc
} from "../../chunk.y_z7q_lv.js";
import {
    a as Fc
} from "../../chunk.6E_bIGju.js";
import {
    a as Lb
} from "../../chunk.uQUSPs72.js";
var rk = `
float rectangle(vec2 st, vec2 size) {
    size = vec2(0.5) - size * 0.5;
    vec2 uv = vec2(aastep(size.x, st.x), aastep(size.y, st.y));
    uv *= vec2(aastep(size.x, 1.0 - st.x), aastep(size.y, 1.0 - st.y));

    return uv.x * uv.y;
}
`;
var Fo = `
precision highp float;
precision highp int;

uniform vec3 diffuse;
uniform float uTime;
uniform vec2 uMouse;

${Lb}
${rk}
${vh}
${Fc}
${Gc}
${th}

varying vec2 vUv;

void main() {
    vec2 uv = vUv;
    vec2 size = vec2(0.95, 0.8) * 1.;

    // rotate
    // uv = uvRotate(uv, 0.02, vec2(0.5));

    // distord bottom
    float dx = mapRange(vUv.x, 0.5 - size.x * 0.5, 0.5 + size.x * 0.5, 0., 1.);
    dx = clamp(dx, 0., 1.);

    // distord bottom
    float tBottom = 0.04;
    float fy = size.y * tBottom + noise(vUv.x * 10.) * size.y * tBottom * 0.5;
    uv.y += sin(dx * 3.14) * fy * step(vUv.y, size.y * 0.5);

    // distord top
    float tTop = 0.05;
    float fyTop = size.y * tTop + noise(vUv.x * 20. + 20.) * size.y * tTop * 0.5;
    float top = clamp(mapRange(vUv.y, 0.5, 1., 0., 1.), 0., 1.);

    uv.y -= sin((dx) * 3.14) * fyTop * top;
    uv.y -= vUv.x * 0.1 * top;
    uv.y += 0.1 * top;

    // offset from center
    vec2 offsetCenter = vec2(0., -0.015);
    uv += offsetCenter;

    float rect = rectangle(uv, size);
    // float rect = rectangle(uv, vec2(0.2, 0.2));

    vec4 color = vec4(diffuse, 1.);
    color.a *= rect;

    gl_FragColor = color;
}
`;
export {
    Fo as
    default
};