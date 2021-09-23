var Sm = `
precision highp float;
precision highp int;

attribute vec2 uv;
attribute vec3 position;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

varying vec2 vUv;

void main() {
    vUv = uv;

    vec3 transformed = vec3(position);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
}
`;
export {
    Sm as
    default
};