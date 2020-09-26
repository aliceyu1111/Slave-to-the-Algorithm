
var xPos;
var yPos;
//var d = 36;
var r; //radius
var angle
var step // distance between steps in radians
var daycounter = 1;

function setup() {
  createCanvas (windowWidth, windowHeight);
  r = (100);
  angle = 0;
  step = TWO_PI/20;
  
  frameRate (3);
  textSize (70);
  textFont ("Futura");
  text ('Sunday',600,600);
  textSize (20);
  text ('Press any key', 150, 380);
  text ('click anywhere on screen',1100, 380);
  textSize(40);
  text ('II',200,350);
  text ('≥', 1200, 350);
 
//for (var i = 0; i > 10; i++){
  

}

function draw (){

  translate (width/2, height/2);
  xPos = random(r*sin(angle));
  yPos = random(r*cos(angle));
  
 
  noStroke();
  fill (20, 40, 50, 30);
  ellipse (xPos,yPos,30);
  
  angle = angle + step;



  
  //for (var i=0; i<circle.length; i++) {
  //  circles[i].circle();
  //  circles[i].display();  
  //} 
}

//this allows you to pause the sketch with just pressing any key on the keyboard. 
function keyPressed (){
  noLoop();
}
function keyReleased (){
  loop();
}
  
function mousePressed (){
  background (255);
  fill (0);
    textSize (70);
    textFont ("Futura");
    
    // changing the title days everytime mouse is pressed
  if (mousePressed) {
    daycounter = daycounter +1;
  }
  if (daycounter > 7) {
    counter = 1;
  }
  
  if (daycounter ==2) {
    text ("Monday", 600-width/2,600-height/2);
    }

 if (daycounter ==3) {
    text ("Tuesday", 600-width/2,600-height/2);
    }
    
    
  if (daycounter ==4) {
    text ("Wednesday", 540-width/2,600-height/2);
    }  
    
    if (daycounter ==5) {
    text ("Thursday", 600-width/2,600-height/2);
    }
    
    if (daycounter ==6) {
    text ("Friday", 620-width/2,600-height/2);
    }
    
    if (daycounter ==7) {
    text ("Saturday", 600-width/2,600-height/2);
    }
    
    
    textSize (20);
  text ('Press any key', 150-width/2, 380-height/2);
  text ('click anywhere on screen',1100-width/2, 380-height/2);
  textSize(40);
  text ('II',200-width/2,350-height/2);
  text ('≥', 1200-width/2, 350-height/2);
    
  
}
