import {
    a as th,
    b as vh
} from "../../chunk.9skNqwPE.js";
import {
    a as Gc
} from "../../chunk.y_z7q_lv.js";
import {
    a as ec
} from "../../chunk.tgBRGb3Z.js";
import {
    a as Lb
} from "../../chunk.uQUSPs72.js";
var cq = `
float circle(vec2 st, float radius) {
    return aastep(radius, length(st - vec2(0.5)));
}
`;
var tk = `
vec2 uvScale (vec2 st, vec2 scale) {
    vec2 uv = vec2(0.);
    float sx = 1. / scale.x;
    float sy = 1. / scale.y;

    uv.x = st.x * sx - ( sx - 1.) * 0.5;
    uv.y = st.y * sy - ( sx - 1.) * 0.5;

    return uv;
}

vec2 uvScale (vec2 st, float scale) {
    vec2 uv = st;
    float s = 1. / scale;

    uv = uv * s - ( s - 1. ) * 0.5;

    return uv;
}
`;
var ho = `
precision highp float;
precision highp int;

varying vec2 vUv;

uniform float uTime;
uniform float uOffset;
uniform vec3 uColor;
uniform float uType;
uniform vec2 uDiff;
uniform float uStrokeRadius;

${Lb}
${vh}
${tk}
${Gc}
${th}
${ec}

void main() {
    float t = uTime / 1000. + uOffset;

    float rotationAngle = t;

    vec2 uv = vUv;
    // uv = uvRotate(uv, rotationAngle, vec2(0.5));
    // uv = uvScale(uv, 1. + sin(t + uOffset) * 0.2);
    uv = uv * 2. - 1.;


    vec2 center = vec2(0.5);
    vec2 st = vUv;

    float radius = 0.4;
    vec2 diff = center - st;
    float l = length(diff);

    float strength = uDiff.x;
    float offset = uDiff.y;
    l += circleNoise(diff, vec2(0., 1.), strength, offset);
    l -= circleNoise(diff, vec2(1., 0.), strength, offset);

    float full = 1. - aastep(radius, l);
    float stroke = min(full, aastep(radius - uStrokeRadius, l));

    float alpha = mix(full, stroke, uType);

    vec4 color = vec4(uColor, alpha);

    gl_FragColor = color;
}
`;
export {
    ho as
    default
};