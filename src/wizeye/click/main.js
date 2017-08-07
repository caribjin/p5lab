var total = 5000;
var circles = [];
var maxx = 1000;
var maxy = 800;
var fps = 60;
var circleRadius = 10;
var count = 0;

function setup() {
	frameRate(fps);
	createCanvas(maxx, maxy);
	textSize(20);

	for (var i = 0; i < total; i++) {
		circles.push(new Circle(i));
	}
}

function draw() {
	var before = window.performance.now();
	drawCircle();
	var after = window.performance.now();
	console.log('draw spend: ' + circles.length + ' - ' + (after - before).toFixed(2) + 'ms');

}

function mousePressed() {
	var d;
	for (var i = circles.length - 1; i > 0; i--) {
		d = dist(mouseX, mouseY, circles[i].left, circles[i].top);
		if (d < circleRadius) {
			circles[i].mousePressed(mouseX, mouseY);
			break;
		}
	}
}

function displayFPS() {
  push();
  fill(0);
  rect(0, 0, 110, 30);
  fill('#00FF00');
  textSize(15);
  textStyle(BOLD);
  text('FPS: ' + frameRate().toFixed(2), 20, 20);
  pop();
}

function drawCircle(x, radius, level) {
	clear();
	background('#cf0000');

	for (var i = 0; i < total; i++) {
		circles[i].display();
	}

	displayFPS();
}

function Circle(id) {
	this.id = id;
	this.vx = 0;
	this.vy = 0;
	this.left = random(0 + (circleRadius * 2), maxx - (circleRadius * 2));
	this.top = random(0 + (circleRadius * 2), maxy - (circleRadius * 2));
	this.color = '#ffffff';
}

Circle.prototype.display = function() {
	fill(this.color);
	ellipse(this.left, this.top, circleRadius * 2, circleRadius * 2);
};

Circle.prototype.mousePressed = function(x, y) {
	console.log(this.id + ' - x: ' + x + ' / y: ' + y);
	this.color = 'blue';
}
