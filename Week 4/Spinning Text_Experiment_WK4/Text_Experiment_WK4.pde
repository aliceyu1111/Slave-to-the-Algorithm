//playing with text August 2020
PFont helv;
float spin=0;
void setup(){
  size (500, 500);
  background (255);
  fill (0);
  smooth (4);
  helv = loadFont ("Helvetica-48.vlw");
  textFont (helv);
  textAlign(CENTER, CENTER); //horizontal align, vertical align
  frameRate (33); // this sets the animation speed (frames per sec)
}

void draw(){
  fill (0);
  textFont (helv);
  textSize (48);
  translate (width/2, height/2); // this will center everything so basically the middle pt would be 0,0 not 250, 250
  spin+=.1; // this increments the rotation value
  rotate (spin);
  text ("Slave to the Algorithm", 0, 0); //text (font, x, y)
  fill (255,20);//or you could do (255, 255, 255, 20), so the last number is 
  noStroke ();
  rect(-width/2, -height/2, width, height);//the -width/2 basically means you are cancelling out the translate corrdinates
 
}

void keyPressed (){
  background (255); // this clears the background when you press spacebar becasue you are adding a new layer of white background
}
