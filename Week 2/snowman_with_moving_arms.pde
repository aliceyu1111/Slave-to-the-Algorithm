// snowman with semaphor arms 1/08/20 by Alice Yu

void setup (){
  size (500, 500);
  background (0);
}

void draw (){
  background (0);
  noStroke();
  fill (255);
  ellipse (250, 200, 100, 100);
  ellipse (250, 320, 150, 150);
  fill (255, 165, 0);
  triangle (235, 210, 250, 220, 255, 210); //ngl this was a happy accident after 30000 trial errors
  fill (27);
  ellipse (230, 190, 10, 10); //eyes
  ellipse (270, 190, 10, 10); //eyes
  ellipse (250, 235, 5, 5);
  ellipse (245, 234, 5, 5);
  ellipse (255, 234, 5, 5);
  ellipse (260, 232, 5, 5);
  ellipse (240, 232, 5, 5);
  ellipse (235, 230, 5, 5);
  ellipse (265, 230, 5, 5);
  
  stroke (139, 69, 19);
  line(mouseX/2.5, mouseX/1.5,180, 300); //left arm
  line (500-mouseY/2.5, mouseY/1.5, 320, 300); //right arm
  
  //line (180, 300, 130, 250); //left arm
  //line (320, 300, 360, 250); //right arm
  
}
