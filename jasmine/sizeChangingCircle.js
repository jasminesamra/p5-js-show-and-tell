let size,
  slider,
  stepSize,
  changeType,
  perlinButton,
  randomButton,
  regularButton,
  time,
  isGrowing;

const changeTypes = {
  perlin: 'perlin',
  random: 'random',
  regular: 'regular',
};

function setup() {
  createCanvas(400, 400);
  size = width / 2;
  isGrowing = false;

  slider = createSlider(0, 10, 5, 1);
  slider.position(width + 25, 5);
  slider.size(100);

  perlinButton = createButton('use perlin noise');
  perlinButton.position(width + 25, 50);
  perlinButton.mousePressed(() => (changeType = changeTypes.perlin));

  randomButton = createButton('use random values');
  randomButton.position(width + 25, 100);
  randomButton.mousePressed(() => (changeType = changeTypes.random));

  regularButton = createButton('use regular changes');
  regularButton.position(width + 25, 150);
  regularButton.mousePressed(() => (changeType = changeTypes.regular));

  changeType = changeTypes.random;

  stepSize = slider.value();

  time = random(0, 10000);

  noStroke();
}

function draw() {
  background('#b6e4e7ff');
  drawCircles();
}

let drawCircles = () => {
  stepSize = slider.value();

  switch (changeType) {
    case changeTypes.perlin:
      changeWithPerlin();
      break;
    case changeTypes.random:
      changeWithRandom();
      break;
    case changeTypes.regular:
      changeWithRegular();
      break;
  }

  fill('#c2ebeeff');
  circle(width / 2, height / 2, size + 0.2 * size);

  fill('#e6f3f4ff');
  circle(width / 2, height / 2, size);

  fill('#ffffffff');
  circle(width / 2, height / 2, size - 0.3 * size);
};

let changeWithPerlin = () => {
  unmappedSize = noise(time);
  size = map(unmappedSize, 0, 1, 0, width);
  time += 0.001 * stepSize;
};

let changeWithRandom = () => {
  size += random(-stepSize, stepSize);
  size = constrain(size, 0, width);
};

let changeWithRegular = () => {
  if (size <= 0) {
    isGrowing = true;
  } else if (size >= width) {
    isGrowing = false;
  }

  if (isGrowing) {
    size = size + stepSize;
  } else {
    size = size - stepSize;
  }
};
