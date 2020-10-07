var data; // bucket for the notification data
//each social media notifications count is listed
//value ranges between 0-20 and circles -->map values?
var instagram, snapchat, messenger, facebook, email, instagramCol, snapchatCol, messengerCol, facebookCol, emailCol;
var whichHour=0; //for iterating through data
var whichDay=0; 
// this will make the circles bigger
var sizeMultiplier = 2; 
var time, size;
var button1;
var sel;
var textchange;
var instaslider;
var messslider;
var snapslider;

function preload (){
  data =loadJSON("Sunday.json");
}
function setup() {
  //colorMode (HSB, 255);
  
  //create sliders
  instaslider = createSlider (0, 255, 255); //this determines the value of the colour range or just range of the slider. Not to be confused with the colour of the slider hehe
  instaslider.position (10, 150); // x and y
  instaslider.size (200, 20); // width and height
  
  messslider = createSlider (0, 255, 255);
  messslider.position (10, 180);
  messslider.size (200, 20);
  
  snapslider = createSlider (0, 255, 255);
  snapslider.position (10, 210);
  snapslider.size (200, 20);
  
  
  sel = createSelect();
  sel.selected("Sunday",0);
  sel.position (250, 380);
  sel.option ("Sunday",0);
  sel.option ("Monday",1);
  sel.option ("Tuesday",2);
  sel.option ("Wednesday",3);
  sel.option ("Thursday",4);
  sel.option ("Friday",5);
  sel.option ("Saturday",6);
  sel.changed (changeday);
 
  button1 = createButton ('Change Pattern');
  button1.position (0, 0);
  button1.mousePressed (changepattern);
 
  createCanvas (windowWidth, windowHeight);
  background (255);

  instagramCol = color (142, 68, 173, 90);
  messengerCol = color (133, 193, 233, 90);
  snapchatCol = color (247, 220, 111, 90);
  facebookCol = color (231, 76, 60, 90);
  emailCol = color (0); 
  frameRate(0.5);
  
  //Set up texts & controls
  noStroke();
  textSize(40);
  //text ('II',1150,350);
  textSize (20);
  //text ('Press any key to pause', 1100, 380);
  //text ('Days of the Week', 220, 350);
  
  textSize (70);
  fill (0);
  textFont ("Futura");
  text (data.Days[whichDay].Day.value, 600,600);
}
 
   
function draw (){
  //background(255);
  //noStroke();
  //textSize(40);
  //text ('II',1150,350);
  //textSize (20);
  //text ('Press any key to pause', 1100, 380);
  //text ('Days of the Week', 220, 350);
  
  //textSize (70);
  //fill (0);
  //textFont ("Futura");
  //text (data.Days[whichDay].Day, 600,600);

  //strokeWeight(1);
  //stroke(0);
  
  for (whichHour=0; whichHour<data.Days[whichDay].hours.length ; whichHour++){
    
    fill (instaslider.value(), 142, 68, 173, 10); // somehow I can't write (instagramCol instead of number value. If I do, the colour only changes from white to black)
    size = data.Days[whichDay].hours[whichHour].instagram*sizeMultiplier;
    ellipse (random(600, 800), random (150, 300), size, size);

    fill (messslider.value(),133, 193, 233, 10);
    size = data.Days[whichDay].hours[whichHour].messenger*sizeMultiplier; 
    ellipse(random(600, 800), random(150, 300), size, size);
      
    fill (snapslider.value(),247, 220, 111, 10);
    size = data.Days[whichDay].hours[whichHour].snapchat*sizeMultiplier; 
    rect(random(600, 800), random(150, 300), size, size);
    
    fill (facebookCol);
    size = data.Days[whichDay].hours[whichHour].facebook*sizeMultiplier; 
    square (random(600, 800), random(150, 300), size, size);
    
    fill (emailCol);
    size = data.Days[whichDay].hours[whichHour].email*sizeMultiplier; 
    ellipse(random(600, 800), random(150, 300), size, size);
  }
  
}

//this allows you to pause the sketch with just pressing any key on the keyboard. 
function keyPressed (){
  noLoop();
}
function keyReleased (){
  loop();
}

function changeday(){
  whichDay = sel.value();
} 

function changepattern () {
  fill (255);
  noStroke ();
  rect (380, 10, 700, 520);   

}
