let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 1; i++) {
    circles.push({
      x: width / 2,
      y: height / 2,
      timeX: random(0, 10000),
      timeY: random(0, 10000),
    });
  }
}

function draw() {
  // for each circle in array circles, update coordinates and draw
  circles.map(moveAndDrawCircle);
}

let moveAndDrawCircle = (c) => {
  let nextXValue = noise(c.timeX);
  c.x = map(nextXValue, 0, 1, 0, width);
  c.timeX += 0.005;

  let nextYValue = noise(c.timeY);
  c.y = map(nextYValue, 0, 1, 0, height);
  c.timeY += 0.005;

  circle(c.x, c.y, 40);
};
