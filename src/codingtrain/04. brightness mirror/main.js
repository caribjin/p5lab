var video;
var vScale = 8;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
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
      // var w = vScale;
      fill(brightness);
      noStroke();
      rect(x * vScale, y * vScale, w, w);
    }
  }
}
