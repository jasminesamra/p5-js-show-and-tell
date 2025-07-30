var speed = 100;

function setup() {
  createCanvas(400, 400);

  centerX = width / 2;
  centerY = width / 2;

  background(200);
}

function draw() {
  background(220);
  fill('red');

  circle(200, 200, 300);
  fill('white');

  circle(speed, 200, 10, 10);
  speed++;
}
