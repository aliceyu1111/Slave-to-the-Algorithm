//sketch 14th August 2020
PImage photo;

void setup(){
 size (500, 500);
 background (0);
 imageMode (CENTER);
 photo = loadImage ("Nightshot.jpg");
}

void draw () {
  image (photo, 250, 250);// this loads the image to fill the sketch
  color pix=photo.get (mouseX,mouseY);//this gets the color value from where my mouse is
  fill (pix);//this updates the color of the fill () to the pixel values as set by color
  noStroke ();//this removes te outline of the circle
  ellipse (mouseX, mouseY, 60, 60);//this draws the circle
}
