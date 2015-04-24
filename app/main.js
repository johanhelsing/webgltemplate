var THREE = require('three');
require('./main.css');
var initRenderer = require('./utils/initRenderer');
var startAnimation = require('./utils/startAnimation');

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

    var updateHelpers = () => {};

    return {
        renderer: renderer,
        mesh: mesh,
        scene: scene,
        camera: camera,
        updateHelpers: updateHelpers,
        resize: (width, height) => {
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        }
    };
};

var animate = app => {
    app.mesh.rotation.x += 0.01;
    app.mesh.rotation.y += 0.02;
    app.updateHelpers();
    app.renderer.render(app.scene, app.camera);
};

document.addEventListener('DOMContentLoaded', () => {
    var app = init(document.body, window.innerWidth, window.innerHeight);
    window.addEventListener('resize', () => {
        app.resize(window.innerWidth, window.innerHeight);
    });
    startAnimation(() => animate(app));
});
