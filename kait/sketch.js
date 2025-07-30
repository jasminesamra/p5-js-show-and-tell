let x = 200;
let y = 200;
let xspeed = 2;
let yspeed = 1;
let r = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(21, 0, 0);

  // if the ball hits the button, change the background to bright orange!
  if (y + r > 382 && x + r >= 200 && x - r <= 200) {
    background(236, 126, 66);
  } else {
    background(21, 0, 0);
  }

  noStroke();
  fill(227, 175, 12);
  rect(175, 382, 50, 20, 5);

  fill(174, 103, 167);
  ellipse(x, y, r * 2);

  x += xspeed;
  y += yspeed;

  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }

  if (r >= 25) {
    r -= 0.05;
  }
}
