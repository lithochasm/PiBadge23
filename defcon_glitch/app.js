function Glitcher (image, canvas) {
    this.interval = 100;
    this.intervalId = null;
    this.context = canvas.getContext('2d');
    this.context.drawImage(image, 0, 0);
    this.imageData = this.context.getImageData(0, 0, image.width, image.height);
    this.context.putImageData(this.imageData, 0, 0);
    this.repeat = 0;
    this.onlySometimes = 1;
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

    if(this.onlySometimes = 1){
     if( (Math.random() * 99) > 95){
 	this.repeat = 5;
     }

     if(this.repeat != 0){
        glitch(this.imageData, params, this.drawGlitch.bind(this));
        this.repeat--;
     }
     else{
         this.context.putImageData(this.imageData, 0, 0);
     }
    }
    else{
      glitch(this.imageData, params, this.drawGlitch.bind(this));
    }
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
