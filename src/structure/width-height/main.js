var s = function (p) {
  var canvas;

  p.setup = function () {
    canvas = p.createCanvas(720, 400);
  };

  p.draw = function () {
    p.background(127);
    p.noStroke();

    console.log(p.width + ' / ' + p.height);
  };
};

var myp5 = new p5(s);
