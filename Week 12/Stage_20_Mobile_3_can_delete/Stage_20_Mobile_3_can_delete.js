// CODE REFERENCES USED
// https://editor.p5js.org/aferriss/sketches/SJtxrLp3M //drop down menu
// https://www.youtube.com/watch?v=118sDpLOClw // What is JSON? by Dan Shiffman -The Coding Train
// https://editor.p5js.org/chesterdols/sketches/SJiW1YvTX // JSON example
// https://editor.p5js.org/bavazzanos1/sketches/Bkkdrs11M // JSON example
// https://p5js.org/reference/#/p5/createButton // Creating buttons


var data; // bucket for the notification data
//each social media notifications count is listed
//value ranges between 0-20 and circles -->map values?
var instagram, snapchat, messenger, facebook, email, instagramCol, snapchatCol, messengerCol, facebookCol, emailCol;
var whichHour=0; //for iterating through data
var whichDay=0; 
// this will make the circles bigger
var sizeMultiplier = 0.5; 
var time, size;
var button1, button2, button3, sel;
var textchange;
var instaslider, messslider, snapslider, sizeslider;
var col2;
var words;
var value;
var mode; // menu page before artwork is displayed on screen

function preload (){
  img = loadImage ('imagew.png');
  data =loadJSON("Sunday.json");
}
function setup() {
  
  createCanvas (displayWidth, displayHeight);
  background (255);
  
  //colorMode (HSB, 255);
  mode =0; // initially before the artwork animation has begun 
 
  
  //create sliders
  
  col2 = color (255, 20);
  instaslider = createSlider (0, 255, 127.5); //this determines the value of the colour range or just range of the slider. Not to be confused with the colour of the slider hehe
  instaslider.style ('fill',col2);
  instaslider.position (width/2-90, height/2 -250);  // x and y
  instaslider.size (200, 1); // width and height
  instaslider.hide ();
    
  messslider = createSlider (0, 255, 127.5);
  messslider.position (width/2-90, height/2 -220);
  messslider.size (200, 1);
  messslider.hide();
  
  snapslider = createSlider (0, 255, 127.5);
  snapslider.position (width/2-90, height/2 -190);
  snapslider.size (200, 1);
  snapslider.hide();
  
  sizeslider = createSlider (0, 200, 100);
  sizeslider.position (width/2-90, height/2 -160);
  sizeslider.size (200, 1);
  sizeslider.hide();
  //bkslider = createSlider (0, 255, 255);
  //bkslider.position (10, 270);
  //bkslider.size (200, 1);
 
  col2 = color (255);
  sel = createSelect();
  sel.selected("Sunday",0);
  sel.position (width/2 +85, height/2-320);
  sel.option ("Sunday",0);
  sel.option ("Monday",1);
  sel.option ("Tuesday",2);
  sel.option ("Wednesday",3);
  sel.option ("Thursday",4);
  sel.option ("Friday",5);
  sel.option ("Saturday",6);
  sel.changed (changeday);
  sel.style ('background-color',col2);
  sel.style ('font-size', '16 px');
  sel.style ('font-family', 'Futura');
  sel.hide ();
  
  button1 = createButton ('Change Pattern');
  button1.style ('background-color',col2);
  button1.style ('line-color',col2);
  button1.style ('font-size', '15px');
  button1.style ('font-family', 'Futura');
  button1.position (width/2 -50, height/2-320);
  button1.mousePressed (changepattern);
  button1.hide ();
  
  button2 = createButton ('Save Image');
  button2.style ('background-color',col2);
  button2.style ('font-size', '15px');
  button2.style ('font-family', 'Futura');
  button2.position (width/2 -160, height/2-320);
  button2.mousePressed (takescreenshot);
  button2.hide ();
  
  button3 = createButton ('Click Here To Enter');
  button3.style ('background-color',col2);
  button3.style ('font-size', '15px');
  button3.style ('font-family', 'Futura');
  button3.position (width/2 -50, height/2-320);
  button3.mousePressed (Enter);

  instagramCol = color (142, 68, 173, 90);
  messengerCol = color (133, 193, 233, 90);
  snapchatCol = color (247, 220, 111, 90);
  facebookCol = color (231, 76, 60, 90);
  emailCol = color (0); 
  frameRate(0.5);
  noStroke();
}
    
function draw (){
 
  if (mode==0) {

    img.resize (155, 43);
    image (img, width/2 - 155, height/2 - 183);
    fill (0);
    textAlign (CENTER);
    textSize (50);
    textFont ("Futura"); 
    text ('N   O          T   I   F   Y', windowWidth/2 +12, windowHeight/2 -142);
    text ('M Y', width/2 - 10, height/2 - 50);
    text ('A', width/2 -280, height/2 +30); //windowWidth - 730, windowHeight - 300);
    text ('D', width/2 -200, height/2 +50);
    text ('D', width/2 -130, height/2 +90);
    text ('!', width/2 -60, height/2 +50);
    text ('C', width/2 +10, height/2 +70);
    text ('T', width/2 +80, height/2 +50);
    text ('!', width/2 +150, height/2 +30);
    text ('O', width/2 +220, height/2 +100);
    text ('N', width/2 +290, height/2 +70);
    text ('.', width/2 + 360, height/2 +75);
    text ('.', width/2 +430, height/2 +75);
    text ('.', width/2 +500, height/2 +75);
    
    textSize (15);
    text ('This is an interactive generative artwork based off the data notification that Alice Yu received within a week. Move the sliders around to see what happens! Just have fun with it!',windowWidth/2 -250 ,windowHeight/2 +200, 525, 100);
    //text ('Click anywhere on screen to begin', windowWidth/2 - 78, windowHeight/2 -190);
   
    noFill ();
    strokeWeight (1);
    stroke (0);
   rect (windowWidth/2 -155, windowHeight/2 -181, 155, 40, 50);
   noLoop ();
     
  }
  if (mode==1) {
    loop();
    
    instaslider.show();
    snapslider.show();
    messslider.show();
    sizeslider.show();
    button1.show();
    button2.show();
    sel.show();
    button3.hide ();
  
  for (whichHour=0; whichHour<data.Days[whichDay].hours.length ; whichHour++){
    noStroke();
    
    fill (instaslider.value(), 142, 68, 173, 10); // somehow I can't write (instagramCol instead of number value. If I do, the colour only changes from white to black)
    size = data.Days[whichDay].hours[whichHour].instagram*sizeMultiplier;
    ellipse (random(10, 1600), random (10, 600), (sizeslider.value()*size), (sizeslider.value()*size));
    
    fill (messslider.value(),133, 193, 233, 10);
    size = data.Days[whichDay].hours[whichHour].messenger*sizeMultiplier; 
    ellipse(random(10, 1600), random(10, 600), (sizeslider.value()*size), (sizeslider.value()*size));
      
    fill (snapslider.value(),247, 220, 111, 10);
    size = data.Days[whichDay].hours[whichHour].snapchat*sizeMultiplier; 
    rect(random(10, 1600), random(10, 600), (sizeslider.value()*size), (sizeslider.value()*size));
    
    fill (facebookCol);
    size = data.Days[whichDay].hours[whichHour].facebook*sizeMultiplier; 
    square (random(10, 1600), random(10, 600), (sizeslider.value()*size), (sizeslider.value()*size));
    
    fill (emailCol);
    size = data.Days[whichDay].hours[whichHour].email*sizeMultiplier; 
    ellipse(random(10, 1600), random(10, 600), (sizeslider.value()*size), (sizeslider.value()*size));

      
}
  } 
}

 function windowResized () {
  resizeCanvas (windowWidth, windowHeight);
  instaslider.position (width/2-90, height/2 -250);
  messslider.position (width/2-90, height/2 -220);
  snapslider.position (width/2-90, height/2 -190);
  sizeslider.position (width/2-90, height/2 -160);
  sel.position (width/2 +85, height/2-320);
  button2.position (width/2 -160, height/2-320);
  button2.position (width/2 -160, height/2-320);
  button1.position (width/2 -50, height/2-320);
  button3.position (width/2 -50, height/2-320);

}



function changeday(){
  whichDay = sel.value();
} 

function Enter (){
    if (mode === 0){
      mode = 1;
    loop();
  }
}

function changepattern () {
  background (255);
  //fill (255);
  //noStroke ();
  //rect (380, 10, 700, 520);   

}

function takescreenshot (){
  save ('NotifyMyAddiction.jpg');
}
