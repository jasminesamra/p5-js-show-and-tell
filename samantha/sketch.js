let x, y, size, timeX, timeY, img;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = width / 2;
  size = 40; //star size of circle

  timeX = 0;
  timeY = 10000;
  //img = loadImage('smitskisitting.jpg')
}

function draw() {
  background(200);
  size += 1; //increasing size of circle
  moveAndDrawCircle();
  //drawThoughtBubble();
  //image(img, 0, 0);
}

let moveAndDrawCircle = () => {
  stepSize = 10;

  updateCoordinatesWithRandom();

  fill(255, 0, 0);
  circle(x, y, size);
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
