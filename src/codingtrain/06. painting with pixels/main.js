var video;
var vScale = 16;
var particles = [];
var pcount = 500;
var slider;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);

  for (var i = 0; i < pcount; i++) {
    particles[i] = new Particle(random(width), random(height));
  }

  slider = createSlider(10, 255)
  background(51);
}

function displayFPS() {
  fill(0);
  rect(0, 0, 110, 30);
  fill('#00FF00');
  textSize(15);
  textStyle(BOLD);
  text('FPS: ' + frameRate().toFixed(2), 20, 20);
}

function draw() {
  video.loadPixels();

  for (var i = 0; i < pcount; i++) {
    particles[i].update();
    particles[i].show();
  }

  displayFPS();
}

function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.r = random(4, 8);
}

Particle.prototype.update = function() {
  this.x += random(-10, 10);
  this.y += random(-10, 10);
  this.x = constrain(this.x, 0, width);
  this.y = constrain(this.y, 0, height);
};

Particle.prototype.show = function() {
  noStroke();
  var px = floor(this.x / vScale);
  var py = floor(this.y / vScale) ;
  var col = video.get(px, py);
  fill(col[0], col[1], col[2], 150);
  ellipse(this.x, this.y, this.r, this.r);
}
