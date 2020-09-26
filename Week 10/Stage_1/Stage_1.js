//var circles = [];
var xPos;
var yPos;
var r = 48;

function setup() {
  createCanvas (windowWidth, windowHeight);
  frameRate (3);
  
//for (var i = 0; i < 10; i++){
  //background (140);
   xPos = random(width);
   yPos = random(height);
   r: random (6, 40)

}

function draw() {
  noStroke();
  fill (20, 40, 50, 30);
  //background (0);
  circle (random(width), random(height), r*2);
  
  //for (var i=0; i<circle.length; i++) {
  //  circles[i].circle();
  //  circles[i].display();
    
  //} 
}
