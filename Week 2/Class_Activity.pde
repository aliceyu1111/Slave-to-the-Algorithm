//Sketch made 31/7/2020 by Alice Yu


void setup () {
size (500, 500); //this is the size of the canvas
background (64, 120, 240); //this chooses out background colour
}

void draw(){
stroke (0); //this choses black as the outline
line (mouseX, mouseY, 250, 250);
stroke (0, 255, 0);
fill (255, 0, 0);
//rect (20, 20, 40, 60);
fill (mouseX/2, mouseY/2, (mouseX+mouseY)/4);
noStroke (); //turns stroke off
ellipse (mouseX, mouseY, 20, 20);
 
}

void keyPressed (){
background (mouseY/2, (mouseY+mouseX)/4, 255-mouseX/2);
  
}
