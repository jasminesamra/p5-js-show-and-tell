let circles = [];
let numCircles, prevNumCircles, numCirclesSlider;
let stepSize, prevStepSize, stepSizeSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);

  numCirclesSlider = createSlider(1, 100, 2, 1);
  numCirclesSlider.position(10, 10);
  numCirclesSlider.size(width / 2);

  numCircles = numCirclesSlider.value();
  prevNumCircles = numCircles;

  stepSizeSlider = createSlider(1, 20, 2, 1);
  stepSizeSlider.position(10, 60);
  stepSizeSlider.size(width / 4);

  stepSize = stepSizeSlider.value();
  prevStepSize = stepSize;

  populateCircles();
  printValues();
}

function draw() {
  numCircles = numCirclesSlider.value();
  if (numCircles != prevNumCircles) {
    prevNumCircles = numCircles;
    background("#ffffff");
    circles = [];
    populateCircles();
    printValues();
  }

  stepSize = stepSizeSlider.value();
    if (stepSize != prevStepSize) {
      prevStepSize = stepSize;
      background('#ffffff');
      printValues();
    }

  // for each circle in array circles, update coordinates and draw
  circles.map(moveAndDrawCircle);
}

let moveAndDrawCircle = (c) => {
  let nextXValue = noise(c.timeX);
  c.x = map(nextXValue, 0, 1, 0, width);
  c.timeX += 0.001 * stepSize;

  let nextYValue = noise(c.timeY);
  c.y = map(nextYValue, 0, 1, 0, height);
  c.timeY += 0.001 * stepSize;

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

const printValues = () => {
text(`dancers: ${numCircles}`, 20, 35);
text(`step size: ${stepSize}`, 20, 85);
}