function setup() {
  createCanvas(320, 240);
  pixelDensity(1);
}

function draw() {
  background(51);

  loadPixels();
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var idx = (x + y * width) * 4;
      pixels[idx] = map(x, 0, width, 0, 255);
      pixels[idx + 1] = random(255);
      pixels[idx + 2] = map(y, 0, height, 0, 255);
      pixels[idx + 3] = 255;
    }
  }
  updatePixels();
}
