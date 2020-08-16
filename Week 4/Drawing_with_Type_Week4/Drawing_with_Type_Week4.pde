// textdraw Week4 

PFont myfont;
int randchar, randSize;
char letter;
color randColorR, randColorG, randColorB;
void setup(){
 size (500, 500);
 background (200);
 myfont =loadFont ("GillSans-Bold-24.vlw");
}

void draw (){
 //smooth (10); didnt really do anything tbh
 
 fill (0);
 textFont (myfont);
 randchar=int(random (120));
 randSize=int(random (60));
 letter=char(randchar);
 textSize(int(randSize)+1);
 text(letter, mouseX, mouseY);
 if (mousePressed){
   text (letter, mouseX, mouseY);
 }
}

void keyPressed (){
 color randColorR=int (map (mouseX, 0, width, 0, 255));
 color randcolorG=int (map(mouseY, 0, height, 0, 255));
 color randColorB=int (map (mouseX+mouseY,0,width+height,0,255));
  background (randColorR, randColorG, randColorB); 
  //the above code allows for you to change color whilst you press the spacebar
}
