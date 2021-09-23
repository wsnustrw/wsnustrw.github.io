var th = `
float blob(vec2 p, float r)
{
	return r / dot(p, p);
}
`;
var vh = `
vec2 uvRotate (vec2 st, float angle, vec2 center ) {
    vec2 uv = st;
    uv -= center;

    mat2 m = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    uv = m * uv;

    uv += center;

    return uv;
}`;
export {
    th as a, vh as b
};