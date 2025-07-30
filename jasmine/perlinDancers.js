let circles = [];
let slider;
let numCircles;
let prevNumCircles;

function setup() {
  createCanvas(windowWidth, windowHeight);

  slider = createSlider(1, 100, 2, 1);
  slider.position(10, 10);
  slider.size(width / 2);

  numCircles = slider.value();

  populateCircles();
}

function draw() {
  numCircles = slider.value();
  if (numCircles != prevNumCircles) {
    background("#ffffff");
    prevNumCircles = numCircles;
    circles = [];
    populateCircles();
  }

  // for each circle in array circles, update coordinates and draw
  circles.map(moveAndDrawCircle);

  text(`dancers: ${numCircles}`, 20, 40);
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

const populateCircles = () => {
  for (let i = 0; i < numCircles; i++) {
    circles.push({
      x: width / 2,
      y: height / 2,
      timeX: random(0, 10000),
      timeY: random(0, 10000),
    });
  }
};
