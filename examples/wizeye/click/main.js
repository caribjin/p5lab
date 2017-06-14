var total = 10000;
var circles = [];
var maxx = 1000;
var maxy = 800;
var fps = 60;
var updateTime = 1000/fps;
var circleRadius = 10;
var lastLoop = new Date();
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
	var before = new Date();
	drawCircle();
	var after = new Date();
	console.log('draw spend: ' + circles.length + ' - ' + (after - before) + 'ms');

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

function calcFPS() {
	var thisLoop = new Date();
	var fps = 1000 / (thisLoop - lastLoop);
	lastLoop = thisLoop;
	count += fps;

	return ((count / frameCount).toFixed(1));
}

function drawCircle(x, radius, level) {
	clear();
	background('#cf0000');

	for (var i = 0; i < total; i++) {
		circles[i].display();
	}

	fill('#000');
	text('FPS: ' + calcFPS(), 10, 30);
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
