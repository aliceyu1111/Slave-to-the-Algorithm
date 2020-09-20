var letter, size, rand, speed;
var wigglyLetters = [];

function setup() {
  createCanvas (windowWidth, windowHeight);
  background (0);
  textSize (32);
  textFont ("Time");

}

function draw() {
  fill (255);
  background (0);
  //each of the wiggly letters that we have
  for (var i=0; i<wigglyLetters.length ; i++){      
   wigglyLetters[i].wiggle(); 
   wigglyLetters[i].display();
}
}
function mousePressed (){
  rand = int(random (65,160));
  letter = char (rand);
  size = int(random(6, 96));
  speed=int(random (1,4));
  wigglyLetters.push(new Wiggle (mouseX, mouseY,size, letter, speed)); 
  
}
class Wiggle {
// means we can apply a set of assests to one thing  
  constructor (x,y, size, letter, speed) {
  // constructor basically ads new members to this class
  this.x=x;
  this.y=y;
  this.textSize=size;
  this.letter=letter;
  this.speed=speed;
}

wiggle () { //randomwalker
// +=1 add 1 to the variable or x=4 which would multiple by 4 to variable
   this.x += random(-this.speed, this.speed);
   this.y += random (-this.speed, this.speed);

}
display (){
   text(this.letter, this.x, this.y);


}
}
