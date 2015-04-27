varying vec2 uvx;

void main() {
    uvx = position.xy;
    gl_Position = projectionMatrix *
        modelViewMatrix *
        vec4(position, 1.0);
}
