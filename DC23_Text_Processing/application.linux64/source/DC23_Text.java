import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class DC23_Text extends PApplet {

/**
 * Words. 
 * 
 * The text() function is used for writing words to the screen.
 * The letters can be aligned left, center, or right with the 
 * textAlign() function. 
 */
  
PFont f;
int esize;


public void setup() {
  size(320, 240);
  smooth(8);
  // Create the font
  //printArray(PFont.list());
  f = createFont("Futura-Medium", 22);
  textFont(f);
  
}

public void draw() {
  background(190);
  textAlign(CENTER);
  drawType(width * 0.5f);
 
}

public void drawType(float x) {
  noStroke();
  
    if (frameCount % 1 == 0) {
    fill(0);
    pushMatrix();
    translate(160, 120);
    rotate(radians(frameCount * .2f  % 360));
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
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "--full-screen", "--bgcolor=#666666", "--hide-stop", "DC23_Text" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
