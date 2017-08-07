var canvas;
var video;
var slider;

function setup() {
  canvas = createCanvas(320, 240, WEBGL);
  canvas.id('p5canvas');
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.id('p5video');

  slider = createSlider(0, 1, 0.1, 0.01);
  slider.id('blur-range');

  var seriously = new Seriously();

  var src = seriously.source('#p5video');
  var target = seriously.target('#p5canvas');

  var blur = seriously.effect('blur');
  blur.amount = '#blur-range';
  blur.source = src;
  target.source = blur;
  // var chroma = seriously.effect('chroma');
  // chroma.source = src;
  // target.source = chroma;
  // var r = 25 / 255;
  // var g = 24 / 255;
  // var b = 37 / 255;
  // chroma.screen = [r,g,b,1];

  seriously.go();

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
  // displayFPS();
}
