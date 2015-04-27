varying vec2 uvx;

vec3 hsv2rgb(vec3 c){
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
    float radian = atan(uvx.y, uvx.x);
    float distSqr = uvx.x * uvx.x + uvx.y * uvx.y;
    float edge = smoothstep(0.9,0.95,1.0-distSqr);
    vec3 hsv = vec3(radian, 18.5*distSqr, edge);
    gl_FragColor = vec4(hsv2rgb(hsv), 1.0);
}
