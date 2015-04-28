var THREE = require('three');

var initRenderer = require('./utils/initRenderer');
var startAnimation = require('./utils/startAnimation');
var vertexShader = require('./marble.vert.glsl');
var fragmentShader = require('./marble.frag.glsl');

require('./main.css');

var marbleShader = new THREE.ShaderMaterial({
    vertexShader: vertexShader(),
    fragmentShader: fragmentShader()
});

var init = (containerEl, width, height) => {
    var renderer = initRenderer(containerEl);

    var scene = new THREE.Scene();
    var camera = new THREE.OrthographicCamera(-width/height, width/height, -1, 1, 0, 100);
    camera.position.z = 1;

    var light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(0, 1, 0);
    scene.add(light);

    var light2 = new THREE.DirectionalLight(0xffffff, 0.5);
    light2.position.set(0, 0, -1);
    scene.add(light2);
    
    var marbleSize = 1;
    var marbleGeometry = new THREE.PlaneGeometry(marbleSize, marbleSize);
    var marbleMesh = new THREE.Mesh(marbleGeometry, marbleShader);
    marbleMesh.rotation.y = Math.PI;
    scene.add(marbleMesh);

    var oldTimestamp = 0;
    var animate = timestamp => {
        //var delta = timestamp - oldTimestamp;
        renderer.render(scene, camera);
        oldTimestamp = timestamp;
    };

    return {
        resize: (width, height) => {
            camera.left = -width/height;
            camera.right = width/height;
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
