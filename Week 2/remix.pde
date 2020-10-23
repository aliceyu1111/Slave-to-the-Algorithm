//self portrait by Shane Lee
//remix by Alice Yu 1/08/2020

void setup(){
 size (1000, 1000);
 background (mouseX/2, mouseY/2, (mouseX+mouseY)/4, 255-mouseX/2); 
}

void draw(){
  //hair
  stroke  (0);
fill (161, 45, 45); 
ellipse (500, 480, 550, 500);
rect (230, 480, 540, 400);
  
  //face
 noStroke ();
fill (236, 188, 180);
  ellipse (500, 500, 500, 450);
ellipse (270, 500, 150, 150); //left ear
ellipse (730, 500, 150, 150); //right ear

//fringe
//stroke (0);
fill (161, 45, 45);
ellipse (450, 380, 450, 280);

//eyes
stroke (0);
fill (0);
strokeWeight (10);
line (310, 550, 410, 550);
line (590, 550, 690, 550);
ellipse (360, 560, 30, 20);
ellipse (640, 560, 30, 20);

//glasses
noFill();
strokeWeight (10);
ellipse (360, 560, 220, 220);
ellipse (640, 560, 220, 220);
strokeWeight (20);
line (480, 580, 520, 580);
strokeWeight (10);
line (480, 650, 520, 650);

arc (230, 260, 340, 250, 0, HALF_PI);
arc (250, 260, 380, 340, 0, HALF_PI);
arc (320, 270, 380, 340, 0, HALF_PI);
arc (390, 290, 380, 340, 0, HALF_PI);
arc (450, 320, 380, 340, 0, HALF_PI);

 
}

void keyPressed(){
  
  background (mouseX/2, mouseY/2, (mouseX+mouseY)/4, 255-mouseX/2);
}

void mousePressed(){
  fill(0);
 rect (mouseX, mouseY, 30, 30); 
}

//headphones
//fill (0);
//arc(270/2, 500/2, 200, 200, -HALF_PI, HALF_PI);

//attempt #2
//translate (270, 500);
//rotate (90);
//fill (0);
//arc(3, 500, 200, 200, 0, PI);
