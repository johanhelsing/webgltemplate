var THREE = require('three');

module.exports = (containerEl, opts) => {
    var renderer = new THREE.WebGLRenderer(opts);
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerEl.appendChild(renderer.domElement);
    return renderer;
};
