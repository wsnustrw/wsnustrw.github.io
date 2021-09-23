import {
    a as uh
} from "../../chunk.sEAATHYM.js";
import {
    a as ec
} from "../../chunk.tgBRGb3Z.js";
import {
    a as Lb
} from "../../chunk.uQUSPs72.js";
var go = `
precision highp float;

varying vec2 vUv;

uniform float uTime;
uniform float uOffset;
uniform vec3 uColor;

${Lb}
${ec}
${uh}

void main() {
    float t = uTime / 1000. + uOffset;
    vec2 center = vec2(0.5, 0.5);

    float ring = noisyCircle(vUv, center, 0.35, 4., vec2(t), 1.);

    vec4 color = vec4(uColor, ring);
    gl_FragColor = color;
}
`;
export {
    go as
    default
};