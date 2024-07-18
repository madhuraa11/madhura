function setup() {
  createCanvas(700, 480);

//R,G&B values
  background(224, 123, 160);

  //take a big brush
  strokeWeight(10);

  //dip it in colour purple ');
  stroke('rgb(252, 3, 107)');
  frameRate(10);
}
  
  function draw() {
  //declare variables;
  let posX= mouseX;
  let posY=mouseY;
  //place a dot on a screen
  point(posX,posY);
}