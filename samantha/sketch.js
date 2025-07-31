let x, y, size, timeX, timeY, img, img2;
let delayTime = 1000; //2 seconds delay
let startTime;
let showImageTwo = false;

function preload() {
  //loading in image
  img = loadImage('IMG_7050.PNG');
  img2 = loadImage('IMG_3815.PNG');
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('display', 'block');
  
  x = width / 2;
  y = width / 2;
  size = 40; //star size of circle

  timeX = 0;
  timeY = 10000;

  //making a timer
  startTime = millis(); //record when program starts
}

function draw() {
  background(200);

  //showing first image
  if (!showImageTwo) {
    //displaying where the image goes
    imageMode(CENTER);
    image(img, width / 2, height / 2, 250, 286);
  }

  //wait for delaytime to pass before showing panic (red circle)
  if (millis() - startTime > delayTime) {
    size += 5; //increase size of circle
    moveAndDrawCircle();

    //check if red circle filled the screen
    if (size >= max(width, height) * 1.75) {
      showImageTwo = true;
    }
  }

  //if red filled screen, show second image
  if (showImageTwo) {
    imageMode(CENTER);
    image(img2, width / 2, height / 2, 251, 100);
  }
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
