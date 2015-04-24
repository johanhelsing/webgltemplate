var THREE = require('three');

module.exports = containerEl => {
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerEl.appendChild(renderer.domElement);
    return renderer;
};
