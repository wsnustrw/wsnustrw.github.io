var jo = `
precision highp float;
precision highp int;

attribute vec2 uv;
attribute vec2 uv2;
attribute vec3 position;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float uScale;
uniform float uTime;

varying vec2 vUv;
varying vec2 vUv2;

void main() {
    vUv = uv;
    vUv2 = uv2;

    vec3 transformed = vec3(position);

    transformed *= uScale + sin(uTime * 0.001) * 0.005;
    transformed.x -= cos(uTime * 0.0004 + 3000.) * 0.03;
    transformed.y += sin(uTime * 0.0004 - 20000.) * 0.03;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
}
`;
export {
    jo as
    default
};