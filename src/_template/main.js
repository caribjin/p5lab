function setup() {
  createCanvas(320, 240);
  pixelDensity(1);
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
  displayFPS();
}
