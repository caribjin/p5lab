var canvas;
var socket;
var dragging = false;

function setup() {
  canvas = createCanvas(320, 240);
  initSocket();
  background(51);
}

function initSocket() {
  socket = io.connect('http://localhost:3000');
  socket.on('draw', onDraw);
}

function displayFPS() {
  fill(0);
  rect(0, 0, 110, 30);
  fill('#00FF00');
  textSize(15);
  textStyle(BOLD);
  text('FPS: ' + frameRate().toFixed(2), 20, 20);
}

function mousePressed() {
  dragging = true;
}

function mouseReleased() {
  dragging = false;
}

function mouseDragging() {
  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 20, 20);

  var data = {
    x: mouseX,
    y: mouseY
  };

  socket.emit('draw', data);
}

function onDraw(data) {
  noStroke();
  fill(255, 0, 100);
  ellipse(data.x, data.y, 20, 20);

}

function draw() {
  if (dragging) {
    mouseDragging();
  }

  displayFPS();
}
