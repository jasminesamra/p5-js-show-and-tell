let x, y, slider, stepSize, button, useNoise, timeX, timeY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = width / 2;

  slider = createSlider(0, 10, 5, 1);
  slider.position(10, 10);
  slider.size(100);

  button = createButton('use perlin noise');
  button.position(10, 60);
  button.mousePressed(toggleUseNoise);

  stepSize = slider.value();

  useNoise = false;
  timeX = 0;
  timeY = 10000;
}

function draw() {
  background(200);
  printSettingsInfoOnCanvas();
  moveAndDrawCircle();
}

let moveAndDrawCircle = () => {
  stepSize = slider.value();

  if (useNoise) {
    updateCoordinatesWithPerlin();
  } else {
    updateCoordinatesWithRandom();
  }

  circle(x, y, 40);
};

let updateCoordinatesWithRandom = () => {
  x += random(-stepSize, stepSize);
  x = constrain(x, 0, width);

  y += random(-stepSize, stepSize);
  y = constrain(y, 0, width);
};

let updateCoordinatesWithPerlin = () => {
  let unmappedX = noise(timeX);
  x = map(unmappedX, 0, 1, 0, width);
  timeX += 0.001 * stepSize;

  let unmappedY = noise(timeY);
  y = map(unmappedY, 0, 1, 0, width);
  timeY += 0.001 * stepSize;
};

let toggleUseNoise = () => {
  useNoise = !useNoise;
  if (useNoise) {
    button.html('use random values');
  } else {
    button.html('use perlin noise');
  }
};

let printSettingsInfoOnCanvas = () => {
  text(`step size: ${slider.value()}`, 10, 40);
  text(
    `currently using ${useNoise ? 'perlin noise' : 'random noise'}`,
    10,
    100
  );
};
