function setup() {
  frameRate(60);
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(51, 20);

  var x = width / 2;
  var y = height / 2;

  stroke(255);
  strokeWeight(8);
  point(x, y);

  var angle = map(mouseX, 0, width, -90, 270);
  var r = 100;

  var dx = r * cos(angle);
  var dy = r * sin(angle);

  point(x + dx, y + dy);
  line(x, y, x + dx, y + dy);
}
