var video;
var vScale = 8;
var threshold = 127;
var slider;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
  slider = createSlider(0, 255, 127);
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
  background(51);

  video.loadPixels();
  loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var idx = (x + y * video.width) * 4;

      var r = video.pixels[idx];
      var g = video.pixels[idx + 1];
      var b = video.pixels[idx + 2];
      var brightness = (r + g + b) / 3;
      var w = map(brightness, 0, 255, 0, vScale);

      if (brightness > slider.value()) {
        fill(255);
      } else {
        fill(0);
      }

      // noStroke();
      rect(x * vScale, y * vScale, vScale, vScale);
    }
  }

  displayFPS();
}
