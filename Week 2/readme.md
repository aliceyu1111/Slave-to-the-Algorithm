# Week 2

This week was all about Processing! Prior to class I did play with the program, but I honestly had zero clue what I was doing beside changing the numbers around from someone else code. The results were definitely interesting to see and I was intrigued to learn more.  

### In Class Activity 

A self-portrait that was inspired by the tv show 'Regular Show'. I don’t really know what it was, but when I inputted the code of a circle with the skin colour, I instinctively thought of the character 'Pops'. So, I just kind of based my own portrait off that and added my own spin to it. I quite liked the end result. 

<img src=https://github.com/aliceyu1111/Slave-to-the-Algorithm/blob/master/Week%202/Self%20Portrait.png >

<img src= "https://github.com/aliceyu1111/Slave-to-the-Algorithm/blob/master/Week%202/Pops_character.png" width ="200" /> 

###### this was my inspiration hehe


**The Code**


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


After class I did feel a little more confident with the basics of processing and it was actually quite fun to play around with. It was also really interesting to see the different results of everyone else's self-portraits given the fact that we all had the same amount of knowledge about processing and the same set of rules.  

I think the biggest challenge for me was trying to figure out where the points would go. Admittedly a lot of the times were me just guessing around with the numbers. A lot of trial and error, but drawing the shapes out beforehand on a graph paper did help a little bit.  

I also remixed Shane Lee self-portrait as well. When I saw her work, I thought of the character Daria from the 90’s. So, using her code and adding more of my code onto it, I created another character! I also had a look at other student's codes that we didn’t learn in class such as the **arc** or **triangle** one and I attempted to use those as well.

<img src= "https://github.com/aliceyu1111/Slave-to-the-Algorithm/blob/master/Week%202/Shane%20Lee%20Remix%201.png" width = "250" />

<img src= "https://github.com/aliceyu1111/Slave-to-the-Algorithm/blob/master/Week%202/Shane%20Lee%20Remix%202.png" width = "250" />

<img src= "https://github.com/aliceyu1111/Slave-to-the-Algorithm/blob/master/Week%202/Shane%20Lee%20Remix%203.png" width = "250" />

<img src= "https://github.com/aliceyu1111/Slave-to-the-Algorithm/blob/master/Week%202/Shane%20Lee%20Remix%204.png" width = "250" />

**The Code**

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
