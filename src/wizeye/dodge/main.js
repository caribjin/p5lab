var total = 500;
var circles = [];
var maxx = 500;
var maxy = 600;
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
	drawCircle();
	displayFPS();
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

	circles.map(function(c) {
		c.display();
	});
}

function Circle(id) {
	this.id = id;
	this.vx = 0;
	this.vy = 0;
	this.left = random(0 + (circleRadius * 2), maxx - (circleRadius * 2));
	this.top = random(0 + (circleRadius * 2), maxy - (circleRadius * 2));
}

Circle.prototype.display = function() {
	var dx = this.left - mouseX;
	var dy = this.top - mouseY;
	var vx = this.vx;
	var vy = this.vy;

	if (dx * dx + dy * dy <= 10000) {
		vx += dx * 0.01;
		vy += dy * 0.01;
	}
	vx *= 0.95;
	vy *= 0.95;

//   vx += Math.random() - 0.5;
//   vy += Math.random() - 0.5;

	var x = this.left += vx;
	var y = this.top += vy;

	if (x < 0 || x > maxx || y < 0 || y > maxy) {
		var r = Math.atan2(y - maxy / 2, x - maxx / 2);
		vx = -Math.cos(r);
		vy = -Math.sin(r);
	}

	this.vx = vx;
	this.vy = vy;

	ellipse(this.left, this.top, circleRadius * 2, circleRadius * 2);
};
