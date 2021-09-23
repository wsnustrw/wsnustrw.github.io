var uh = `
float noisyCircle(vec2 st, vec2 pos, float radius, float strength, vec2 offset, float force) {
    vec2 diff = pos - st;
    float l = length(diff);

    l += circleNoise(diff, vec2(0., 1.), strength, offset.x) * force;
    l -= circleNoise(diff, vec2(1., 0.), strength, offset.y) * force;

    float p = 1. - aastep(radius, l);

    return p;
}
`;
export {
    uh as a
};