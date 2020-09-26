//var circles = [];
var xPos;
var yPos;
var d = 36;
//var day: [Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday];

function setup() {
  createCanvas (windowWidth, windowHeight);
  frameRate (3);
  textSize (70);
  textFont ("Futura");
  text ('Sunday', 600, 600);
  
//for (var i = 0; i > 10; i++){
  //background (140);
   xPos = random(width);
   yPos = random(height);
   d: random (6, 40);


}

function draw() {
  noStroke();
  fill (20, 40, 50, 30);
  //background (0);
  circle (random(width), random(height), d*2);
  
  //for (var i=0; i<circle.length; i++) {
  //  circles[i].circle();
  //  circles[i].display();
    
  //} 
}

function mousePressed (){
  background (255);
  if (mousePressed) {
    textSize (70);
  textFont ("Futura");
  text ('Monday', 600, 600);
    
  }
}
