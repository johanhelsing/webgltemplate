module.exports = animate => {
    var reanimate = () => {
        animate();
        window.requestAnimationFrame(reanimate);
    };
    reanimate();
};
