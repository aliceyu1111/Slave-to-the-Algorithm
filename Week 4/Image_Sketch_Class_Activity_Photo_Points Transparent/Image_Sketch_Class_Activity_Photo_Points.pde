//sketch 14th August 2020
PImage photo;
int smallPoint, largePoint;
color pix;

void setup(){
  smallPoint=4; // so this will set the smallest pixel
  largePoint=40; // this will set the largest pixel
 size (500, 500);
 background (240);
 imageMode (CENTER);
 photo = loadImage ("Nightshot.jpg");
}

void draw () {
  //image (photo, 250, 250);// this loads the image to fill the sketch

  int x=int (random(photo.width)); //this finds random point across the sketch (x)
  int y=int (random (photo.height));
  float pointillise =map(mouseX, 0, photo.width, smallPoint, largePoint); 
  int dotSize=int(pointillise);
  pix=photo.get (x,y);//this gets the color value from the random points of x and y
  int t=int(random (256));
  fill (pix,t);//this updates the color of the fill () to the pixel values as set by color
  noStroke ();//this removes te outline of the circle
  //stroke (pix,t); 
  ellipse (x, y, dotSize, dotSize);//this draws the circle
  //line (x,y, x+dotSize, y+dotSize); //this draws the lines
}
