class Notify {
  constructor (x, y, time, app, number) {
    this.x = x;
    this.y = y;
    this.time =(x,y);
    this.app = color;
    this.number = size;
        
  }

    //this. diameter = number;
    //this. radius = diameter / 2;
    //this. time = time;
    //this. app = app;
       

var data = {};
var Sunday =[];
var instagram, snapchat, messenger, facebook, email, time;


function preload (){
  data =loadJSON ("Sunday.js");
}

function loadData (){
  let SundayData = data ['Sunday'];
  for (let i = 0; i < SundayData.length; i++) {
    let Sunday = SundayData [i];
    let position = time ['position'];
    let x = position ['x'];
    let y = position ['y'];
    //let time = ['x, y'];
    let app = ['colour'];
    let number = circle ['diameter'];
  }
}
    
     
function setup() {
   createCanvas (windowWidth, windowHeight);
   loadData ();
   background (0);
   var instagram = color (90);
   var snapchat = color (126);
   var messenger = color (200);
   var facebook = color (50);
   var email = color (100);
   var time = x, y ;
   var number = size
   if (size < (5-10)) {
     ellipse (x,y, 10, 10);
     fill (this.app);
   }
   if (size > (15)) {
     ellipse (x,y 20, 20);
     fill (this.app);
   }
   if (size <(5)) {
     ellipse (x,y 5, 5);
     fill (this.app);
   } 
   if (ellipse.length > 24){
     ellipse.shift();
   }
}

function draw() {
  fill (this.app);
  background (0);
for (var i=0; i<Sunday.length; i++) {
  Sunday [i].Sunday();
  Sunday [i].display ();
  
}
}

//placement of circles???
this.x += random (-this.time, this.time);
this.y +- random (-this.time, this.time);

//display the circles?
display (); {
  ellipse (this.x, this.y, this.number, this.number);
  
}
