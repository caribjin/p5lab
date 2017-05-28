var s = function (p) {
  var canvas,
    pg,
    img;

  p.preload = function () {
    img = p.loadImage('1.jpg');
  };

  p.setup = function () {
    canvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
  };

  p.draw = function () {
    var start = p.millis();
    p.ambientLight(255,0,0);

    // var fps = p.frameRate();
    // p.fill(255);
    // p.stroke(0);
    // console.log('FPS: ' + fps.toFixed(2));

    var dirX = (p.mouseX / p.width - 0.5) * 2;
    var dirY = (p.mouseY / p.height - 0.5) * 2;
    p.directionalLight(250, 250, 250, dirX, -dirY, 0.25);

    p.background(0);
    p.sphere(50, 50);
    p.texture(img);
    p.translate(300, 100, 100);
    p.box(300);

    var end = p.millis();
    var elapsed = end - start;
    // console.log('This took: ' + elapsed + 'ms.');
  };
};

var myp5 = new p5(s);
