var video;
var button;
var snapshots = [];
var bVideoReady = false;
var counter = 0;

function setup() {
  frameRate(60);
  createCanvas(640, 240);
  background(51);

  var constraints = {
    video: {
      mandatory: {
        minWidth: 320,
        minHeight: 240
      },
      optional: [
        { maxFrameRate: 60}
      ]
    },
    audio: false
  };
  video = createCapture(constraints, function() {
    bVideoReady = true;
  });
  video.size(320, 240);
}

function draw() {
  if (bVideoReady) {
    snapshots[counter] = video.get();

    if (counter < 43) {
      counter++;
    } else {
      counter = 0;
    }
  }

  var x = 0;
  var y = 0;
  var w = 80;
  var h = 60;

  for (var i = 0; i < snapshots.length; i++) {
    var index = (i + frameCount) % snapshots.length;
    image(snapshots[index], x, y, w, h);

    x += w;
    if (x > width) {
      x = 0;
      y += h;
    }
  }
}
