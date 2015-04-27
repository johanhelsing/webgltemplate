module.exports = animate => {
    var reanimate = timestamp => {
        animate(timestamp);
        window.requestAnimationFrame(reanimate);
    };
    reanimate(0);
};
