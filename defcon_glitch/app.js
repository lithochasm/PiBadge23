function Glitcher (image, canvas) {
    this.interval = 200;
    this.intervalId = null;
    this.context = canvas.getContext('2d');
    this.context.drawImage(image, 0, 0);
    this.imageData = this.context.getImageData(0, 0, image.width, image.height);
}

Glitcher.prototype.drawGlitch = function(imageData) {
    this.context.putImageData(imageData, 0, 0);
}

Glitcher.prototype.loop = function() {
    var a = (Math.random() * 30);
    var s = (Math.random() * 99);
    var i = (Math.random() * 10);
    var q = (Math.random() * 50) + 50;
    var params = { amount: a, seed: s, iterations: i, quality: q};
    glitch(this.imageData, params, this.drawGlitch.bind(this));
}

Glitcher.prototype.start = function() {
    this.intervalId = setInterval(this.loop.bind(this), this.interval);
}

Glitcher.prototype.stop = function() {
    if (this.intervalId) {
	clearInterval(this.intervalId);
    }
}

Glitcher.prototype.setInterval = function(interval) {
    this.interval = interval;
    this.stop();
    this.start();
}

window.onload = function() {
    var image = document.getElementById("defcon-logo");
    var canvas = document.getElementById("glitch-canvas");
    canvas.height = image.height;
    canvas.width = image.width;
    var g = new Glitcher(image, canvas);
    g.start();
    window.glitcher = g;
}
