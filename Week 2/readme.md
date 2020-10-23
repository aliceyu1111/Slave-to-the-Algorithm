# Week 2
 
# Class Overview
This week was all about Processing! Prior to class I did play with the program, but I honestly had zero clue what I was doing beside changing the numbers around from someone else code. The results were definitely interesting to see and I was intrigued to learn more.  

### In Class Activity 
We started off pretty simple and this is the result of what Karen had showed us! 

![Alt Text](https://media.giphy.com/media/xIvMKfV3phghRcOjnF/giphy.gif)

A self-portrait that was inspired by the tv show 'Regular Show'. I don’t really know what it was, but when I inputted the code of a circle with the skin colour, I instinctively thought of the character 'Pops'. So, I just kind of based my own portrait off that and added my own spin to it. I quite liked the end result. 

<img src=https://github.com/aliceyu1111/Slave-to-the-Algorithm/blob/master/Week%202/Self%20Portrait.png >

![Alt Text](https://media.giphy.com/media/9V23g1oEC8zDZWxxFp/giphy.gif)

<img src= "https://github.com/aliceyu1111/Slave-to-the-Algorithm/blob/master/Week%202/Pops_character.png" width ="200" /> 

###### this was my inspiration hehe



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

### SnowMan with Moving Arms

I also wanted to attempt another thing that Karen showed us in the class which was moving the arms of a character around. I created this snowman and incorporate the use of a triangle, which was quite tricky when trying to figure out where the points would go. Then I had a look at the code that Karen remixed for Maddy’s self-portrait and attempted it myself. And it worked! 

<img src= "https://github.com/aliceyu1111/Slave-to-the-Algorithm/blob/master/Week%202/Snowman%201.png" width = "250" />

<img src= "https://github.com/aliceyu1111/Slave-to-the-Algorithm/blob/master/Week%202/Snowman%203.png" width = "250" />

**The Code**
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

**Animal Creation with the 24 Hr Challenge**

Also, for the 24hr Challenge I tried to create a set of rules for creating a unique animal made out of shapes that I would create on Processing. This wasn’t my favorite result and I did improvise on the tail because I realized I didn’t know what the code was for squiggly line. Again, the triangles were little annoying to figure out but we got there in the end!  

<img src= https://github.com/aliceyu1111/Slave-to-the-Algorithm/blob/master/Week%202/Animal%20Creation%20.png >

**The Code**
//Animal Creation made 31/7/2020 by Alice Yu

void setup (){
  size (500, 500);
  background (0);
}

void draw (){
  noStroke();
  fill (255);
 rect (195, 100, 100, 100);
 ellipse (245, 250, 50, 200);
 
 fill (90);
 rect (220, 130, 10, 15); //head
 rect (250, 130, 30, 30);
 rect (235, 170, 10, 15);
 fill (30, 70, 100);
 triangle (220, 110, 200, 120, 190, 40); //ears
 fill (90, 285, 20);
 triangle (270, 120, 300, 20, 380, 60); //ears
 fill (200, 20, 190);
 rect (270, 250, 15, 15); //legs
 rect (270, 270, 15, 15); //legs
 rect (265, 290, 15, 15); //legs
 rect (260, 310, 15, 15); //legs
 
 rect (205, 250, 15, 15); //legs
 rect (205, 270, 15, 15); //legs
 rect (210, 290, 15, 15); //legs
 rect (215, 310, 15, 15); //legs
 stroke (mouseX/2, mouseY/2, (mouseX+mouseY)/4);
 line (mouseX, mouseY, 260, 320); 
// stroke (20);
// line (235,160, -10, 1);
 //fill (30);
 //arc (250, 170, 15, 15, 0,HALF_PI);
}
 void keyPressed (){
 
}

### More Artist Research

**Artist: Jansz Jurek**

I love how intricate and detailed his artworks are, especially in his series Papilarnie. It got me thinking about how this pandemic has forced us into the virtual world so much so that we have a stronger online presence than ever before. It’s as if our bodies and minds have molded and intertwined with the algorithms of our social media presence, and facetimes or zoom calls. This kind of makes me wonder of how our non – virtual beings are being formed and shaped by what we feed into an algorithm. By the end of this pandemic most of us will have a fully shaped virtual replica of us, mirroring our every move and possibly knows more about ourselves than we do. Kind of creepy when you really think about it. Will we be walking around like dummies on a leash whilst our superior non – virtual replicas feed us with their power? 


<img src= "https://github.com/aliceyu1111/Slave-to-the-Algorithm/blob/master/Week%202/Janusz%20Jurek.jpg" width = "250" />

###### Artwork Reference: https://www.behance.net/gallery/30852511/Papilarnie-III 
