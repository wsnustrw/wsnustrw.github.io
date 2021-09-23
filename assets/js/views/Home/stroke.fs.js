import {
    a as ec
} from "../../chunk.tgBRGb3Z.js";
import {
    a as Lb
} from "../../chunk.uQUSPs72.js";
var io = `
precision highp float;

varying vec2 vUv;
varying vec2 vUv2;

uniform float uTime;
uniform float uOffset;
uniform vec3 uColor;
uniform float uOpacity;
uniform float opacity;
uniform float uScale;
uniform float uRadius;
uniform float uSize;

${Lb}
${ec}

const vec2 center = vec2(0.5);

float noisyStroke (vec2 st, vec2 pos, float radius, float strength, float offset, float force) {
    vec2 diff = pos - st;
    float l = length(diff);

    l += circleNoise(diff, vec2(0., 1.), strength, offset) * force;
    l -= circleNoise(diff, vec2(1., 0.), strength, offset) * force;

    float r = radius;

    float full = 1. - aastep(r, l);
    float stroke = min(full, aastep(r - uSize, l));

    return stroke;
}

float outsideCircle (vec2 st) {
    float radius = uRadius;
    float strength = 5.;
    float offset = uTime * 0.002;
    float force = 1.;

    vec2 pos = center;

    return noisyStroke(st, pos, radius, strength, offset, force);
}

void main() {
    float alpha = outsideCircle(vUv2);

    vec4 color = vec4(uColor, alpha);
    color.a *= uOpacity;
    color.a *= opacity;

    gl_FragColor = color;
    // gl_FragColor = mix(color, vec4(0., 1., 0., 1.), 1. - alpha);
}
`;
export {
    io as
    default
};