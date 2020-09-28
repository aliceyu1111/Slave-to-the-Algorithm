var data; // bucket for the notification data
//each social media notifications count is listed
//value ranges between 0-20 â†’ circles -->map values?
var instagram, snapchat, messenger, facebook, email, instagramCol, snapchatCol, messengerCol, facebookCol, emailCol;
var whichHour=0; //for iterating through data
// this will make the circles bigger
var sizeMultiplier = 10; 
var time, size;
var daycounter= 1;


function preload (){
  data =loadJSON("Sunday.json");
}
function setup() {

 
   createCanvas (windowWidth, windowHeight);
   background (255);
  
   instagramCol = color (142, 68, 173, 90);
   messengerCol = color (133, 193, 233, 90);
   snapchatCol = color (247, 220, 111, 90);
   facebookCol = color (118, 215, 196, 90);
   emailCol = color (178, 186, 187, 90); 
   frameRate(0.5);
 
   
 textSize (70);
 fill (0);
  textFont ("Futura");
  text ('Sunday',600,600);
  textSize (20);
  text ('Press any key', 150, 380);
  text ('click anywhere on screen',1100, 380);
  textSize(40);
  text ('II',200,350);
  text ('≥', 1200, 350);
  var yplay;
  angleMode (DEGREES);
   }
  
 
   
function draw () {
  for (whichHour=0; whichHour<data.hours.length; whichHour++){
    //if (frameCount > 100 * whichHour) {
    //  if (mouseX<200) {
    //    yplay = int(random(100,5));}
    //    else {yplay=1;}
    //translate (200, 200);
    //rotate(angle);
    //ellipseMode (CENTER);
    
    fill (instagramCol);
    size = data.hours[whichHour].instagram*sizeMultiplier;
    //ellipse (data[whichHour], whichHour*yplay, whichHour*20, size, size);
    ellipse (random(600, 800), random (150, 300), size, size);
    //angle++;
    
    
    fill (messengerCol);
    size = data.hours[whichHour].messenger*sizeMultiplier; 
    ellipse(random(600, 800), random(150, 300), size, size);
   
    
    fill (snapchatCol);
    size = data.hours[whichHour].snapchat*sizeMultiplier; 
    rect(random(600, 800), random(150, 300), size, size);
    
    fill (facebookCol);
    size = data.hours[whichHour].facebook*sizeMultiplier; 
    square (random(600, 800), random(150, 300), size, size);
    
    fill (emailCol);
    size = data.hours[whichHour].email*sizeMultiplier; 
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
    daycounter = 1;
  }
  
  if (daycounter ==2) {
    text ("Monday", 600, 600);
    }

 if (daycounter ==3) {
    text ("Tuesday", 600,600);
    }
    
    
  if (daycounter ==4) {
    text ("Wednesday", 540,600);
    }  
    
    if (daycounter ==5) {
    text ("Thursday", 600,600);
    }
    
    if (daycounter ==6) {
    text ("Friday", 620,600);
    }
    
    if (daycounter ==7) {
    text ("Saturday", 600,600);
    }
    
    
    textSize (20);
  text ('Press any key', 150, 380);
  text ('click anywhere on screen',1100, 380);
  textSize(40);
  text ('II',200,350);
  text ('≥', 1200, 350);
    
  
}
