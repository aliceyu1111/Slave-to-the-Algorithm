// Self Portrait made 31/7/2020 by Alice Yu


void setup () {
size (500, 500);
background (231, 161, 176);
    
}

void draw(){
fill (0);
stroke (0);
//line (20, 20, 20, 20);
fill (mouseX/2, mouseY/2, (mouseX+mouseY)/4);
ellipse (mouseX, mouseY, 20, 20); 
line (mouseX, mouseY, 250, 150);
fill (255, 220, 177);
ellipse (250, 200, 200, 200);
fill (255);
ellipse (220, 200, 20, 20);
ellipse (260, 200, 20, 20);
fill (68, 0, 0);
ellipse (220, 202, 10, 10);
ellipse (260, 202, 10, 10);
fill (255, 173, 164);
ellipse (200, 220, 20, 10);
ellipse (280, 220, 20, 10);
fill (0);
ellipse (200,100, 50, 50);
ellipse (300, 100, 50, 50);
ellipse (250, 120, 100, 40);

fill (0);
ellipse (240, 250, 10, 10);

}
