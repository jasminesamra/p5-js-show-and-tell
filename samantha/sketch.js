let circleSize, time, stepSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  circleSize = width / 4;
  time = random(0, 1000);
  stepSize = 10;
}

function draw() {
  background('#aaaaaa');

  fill('#fdbde0ff');

  stroke('#affe90ff');

  strokeWeight(5);

  let x = 300;
  let y = height / 2;

  let unmappedSize = noise(time);
  let size = map(unmappedSize, 0, 1, 0, width / 4);
  time += 0.001 * stepSize;

  circle(x, y, size);
}
