let r, g, b;
let timeR, timeG, timeB;
let changeType, isGrowing, stepSize;
let perlinButton, randomButton, regularButton;

const changeTypes = {
  perlin: 'perlin',
  random: 'random',
  rollTheDice: 'rollTheDice',
};

function setup() {
  createCanvas(400, 400);

  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);

  timeR = random(0, 10000);
  timeG = random(0, 10000);
  timeB = random(0, 10000);

  changeType = changeTypes.random;
  isGrowing = false;

  stepSize = 10;

  perlinButton = createButton('perlin noise');
  perlinButton.position(windowWidth / 2 - 200, 0);
  perlinButton.mousePressed(() => (changeType = changeTypes.perlin));

  randomButton = createButton('random change');
  randomButton.position(windowWidth / 2 - 100, 0);
  randomButton.mousePressed(() => (changeType = changeTypes.random));

  rollTheDiceButton = createButton('roll the dice');
  rollTheDiceButton.position(windowWidth / 2 + 20, 0);
  rollTheDiceButton.mousePressed(() => (changeType = changeTypes.rollTheDice));
}

function draw() {
  updateColor();
  background(r, g, b);
}

let updateColor = () => {
  switch (changeType) {
    case changeTypes.perlin:
      changeWithPerlin();
      break;
    case changeTypes.random:
      changeWithRandom();
      break;
    case changeTypes.rollTheDice:
      changeWithRollTheDice();
      break;
  }
};

let changeWithPerlin = () => {
  let nextRValue = noise(timeR);
  r = map(nextRValue, 0, 1, 0, 255);
  timeR += 0.005;

  let nextGValue = noise(timeG);
  g = map(nextGValue, 0, 1, 0, 255);
  timeG += 0.005;

  let nextBValue = noise(timeB);
  b = map(nextBValue, 0, 1, 0, 255);
  timeB += 0.005;
};

let changeWithRandom = () => {
  r += random(-stepSize, stepSize);
  r = constrain(r, 0, 255);

  g += random(-stepSize, stepSize);
  g = constrain(g, 0, 255);

  b += random(-stepSize, stepSize);
  b = constrain(b, 0, 255);
};

let changeWithRollTheDice = () => {
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
};
