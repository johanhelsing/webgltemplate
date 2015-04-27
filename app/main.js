var THREE = require('three');

var initRenderer = require('./utils/initRenderer');
var startAnimation = require('./utils/startAnimation');

require('./main.css');

var init = (containerEl, width, height) => {
    var renderer = initRenderer(containerEl);

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, width / height, 1, 10000);
    camera.position.z = 1000;
    var geometry = new THREE.IcosahedronGeometry(200, 0);
    var material = new THREE.MeshPhongMaterial({
        color: 0x3399ff,
        shading: THREE.FlatShading
    });
    var mesh = new THREE.Mesh( geometry, material );
    scene.add(mesh);

    var light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(0, 1, 0);
    scene.add(light);

    var light2 = new THREE.DirectionalLight(0xffffff, 0.5);
    light2.position.set(0, 0, 1);
    scene.add(light2);

    var oldTimestamp = 0;
    var animate = timestamp => {
        var delta = timestamp - oldTimestamp;
        mesh.rotation.x += 0.001 * delta;
        mesh.rotation.y += 0.002 * delta;
        renderer.render(scene, camera);
        oldTimestamp = timestamp;
    };

    return {
        resize: (width, height) => {
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        },
        animate: animate
    };
};


document.addEventListener('DOMContentLoaded', () => {
    var app = init(document.body, window.innerWidth, window.innerHeight);
    window.addEventListener('resize', () => {
        app.resize(window.innerWidth, window.innerHeight);
    });
    startAnimation(timestamp => app.animate(timestamp));
});
