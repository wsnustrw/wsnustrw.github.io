import {
    a as uh
} from "../../chunk.sEAATHYM.js";
import {
    a as ec
} from "../../chunk.tgBRGb3Z.js";
import {
    a as Lb
} from "../../chunk.uQUSPs72.js";
var fo = `
precision highp float;
precision highp int;

varying vec2 vUv;

uniform float uTime;
uniform vec2 uOffset;
uniform vec3 uColor;
uniform vec2 uMouse;
uniform float uPupilScale;
uniform float opacity;

${Lb}
${ec}
${uh}

float pupil(vec2 st) {
    vec2 center = vec2(0.5, 0.5) - uOffset + uMouse * 0.3;
    float radius = (0.05) * uPupilScale;
    float strength = 4.;

    vec2 offset = vec2(0.);
    offset.x = uOffset.x * 100.;
    offset.y = -uOffset.y * 1000.;

    float force = 0.2;

    return noisyCircle(st, center, radius, strength, offset, force);
}

float eye (vec2 st) {
    float radius = 0.35;
    float strength = 4.;
    vec2 offset = vec2((uOffset.x + uOffset.y) * 100.);
    vec2 center = vec2(0.5);
    float force = 0.65;

    return noisyCircle(st, center, radius, 4., offset, force);
}

void main() {
    float e = eye(vUv);
    float p = pupil(vUv);

    vec4 color = vec4(mix(vec3(1.), vec3(0.), min(e, p)), e);
    color.a *= opacity;

    gl_FragColor = color;
}
`;
export {
    fo as
    default
};