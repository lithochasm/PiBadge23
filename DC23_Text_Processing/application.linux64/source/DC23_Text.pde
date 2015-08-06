/**
 * Words. 
 * 
 * The text() function is used for writing words to the screen.
 * The letters can be aligned left, center, or right with the 
 * textAlign() function. 
 */
  
PFont f;
int esize;


void setup() {
  size(320, 240);
  smooth(8);
  // Create the font
  //printArray(PFont.list());
  f = createFont("Futura-Medium", 22);
  textFont(f);
  
}

void draw() {
  background(190);
  textAlign(CENTER);
  drawType(width * 0.5);
 
}

void drawType(float x) {
  noStroke();
  
    if (frameCount % 1 == 0) {
    fill(0);
    pushMatrix();
    translate(160, 120);
    rotate(radians(frameCount * .2  % 360));
    rect(0, 0, 200, 6);
    popMatrix();
    }
    stroke(0);
  fill(220);
  ellipse(width/2, height/2, 200, 200);
  line(x, 0, x, 20);
  line(x, 220, x, height);
  fill(0);
  text("DefCon", x, 80);
  fill(50);
  text("23", x, 115);
  fill(0);
  text("The Tilted", x, 150);
  fill(100);
  text("Kupiters", x, 180);
  

}
