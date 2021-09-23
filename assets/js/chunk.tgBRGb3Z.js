var ec = `
float circleNoise(vec2 v1, vec2 v2, float strength, float offset) {
    return sin(
        dot(normalize(v1), normalize(v2)) * strength + offset
    ) / 100.0;
}
`;
export {
    ec as a
};