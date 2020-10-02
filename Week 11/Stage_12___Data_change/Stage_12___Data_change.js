var data; // bucket for the notification data
//each social media notifications count is listed
//value ranges between 0-20 Ã¢â€ â€™ circles -->map values?
var instagram, snapchat, messenger, facebook, email, instagramCol, snapchatCol, messengerCol, facebookCol, emailCol;
var whichHour=0; //for iterating through data
// this will make the circles bigger
var sizeMultiplier = 10; 
var time, size;
var button1;
var sel;
var textchange;
var whichDay; 

function preload (){
  data =loadJSON("Sunday.json");
}
function setup() {
  
 
 whichDay= 'Sunday';
 
 sel = createSelect();
 sel.position (250, 380);
 sel.option ('Sunday');
 sel.option ('Monday');
 sel.option ('Tuesday');
 sel.option ('Wednesday');
 sel.option ('Thursday');
 sel.option ('Friday');
 sel.option ('Saturday');
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
 
  textSize(40);
  text ('II',1150,350);
  textSize (20);
  text ('Press any key', 1100, 380);
  text ('Days of the Week', 220, 350);
  
 textSize (70);
 fill (0);
  textFont ("Futura");
  textchange = text ('',600,600);
  
 
}
 
   
function draw (){

  //whichDay = data.[Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday];
  
  //for var (i=0, i<data.length, i++);
  
  for (whichHour=0; whichHour<data.whichDay.hours.length; whichHour++){
  
 
    fill (instagramCol);
     stroke (0);
    size = data.whichDay.hours[whichHour].instagram*sizeMultiplier;
    ellipse (random(600, 800), random (150, 300), size, size);
   
  
    fill (messengerCol);
     stroke (0);
    size = data.whichDay.hours[whichHour].messenger*sizeMultiplier; 
    ellipse(random(600, 800), random(150, 300), size, size);
   
    
    fill (snapchatCol);
     stroke (0);
    size = data.whichDay.hours[whichHour].snapchat*sizeMultiplier; 
    rect(random(600, 800), random(150, 300), size, size);
    
    fill (facebookCol);
     stroke (0);
    size = data.whichDay.hours[whichHour].facebook*sizeMultiplier; 
    square (random(600, 800), random(150, 300), size, size);
    
    fill (emailCol);
     stroke (0);
    size = data.whichDay.hours[whichHour].email*sizeMultiplier; 
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
  let val = sel.value();
  if (val == 'Sunday') {
    background (255);
    textSize (70);
    textchange = text ('Sunday',600,600);
    datachange1 = data.Sunday.hours.length;
    whichDay = Sunday;
     textSize(40);
  text ('II',1150,350);
  textSize (20);
  text ('Press any key', 1100, 380);
  text ('Days of the Week', 220, 350);
    
  } else if(val == 'Monday') {
     background (255);
     textSize (70);
    textchange = text ('Monday',600,600);
    datachange2 = data.Monday.hours.length;
    whichDay = Monday;
     textSize(40);
  text ('II',1150,350);
  textSize (20);
  text ('Press any key', 1100, 380);
  text ('Days of the Week', 220, 350);
  
  } else if (val == 'Tuesday') {
     background (255);
     textSize (70);
    textchange = text ('Tuesday',600,600);
    whichDay = Tuesday;
     textSize(40);
  text ('II',1150,350);
  textSize (20);
  text ('Press any key', 1100, 380);
  text ('Days of the Week', 220, 350);
  
  } else if (val == 'Wednesday') {
     background (255);
     textSize (70);
    textchange = text ('Wednesday',600,600);
    whichDay = Wednesday;
     textSize(40);
  text ('II',1150,350);
  textSize (20);
  text ('Press any key', 1100, 380);
  text ('Days of the Week', 220, 350);
  
  } else if (val == 'Thursday') {
     background (255);
     textSize (70);
    textchange = text ('Thursday',600,600);
    whichDay = Thursday;
     textSize(40);
  text ('II',1150,350);
  textSize (20);
  text ('Press any key', 1100, 380);
  text ('Days of the Week', 220, 350);
  
  } else if (val == 'Friday') {
     background (255);
     textSize (70);
    textchange = text ('Friday',600,600);
    whichDay = Thursday;
     textSize(40);
  text ('II',1150,350);
  textSize (20);
  text ('Press any key', 1100, 380);
  text ('Days of the Week', 220, 350);
  
  } else if (val == 'Saturday') {
     background (255);
     textSize (70);
    textchange = text ('Saturday',600,600);
    whichDay = Thursday;
     textSize(40);
  text ('II',1150,350);
  textSize (20);
  text ('Press any key', 1100, 380);
  text ('Days of the Week', 220, 350);
}
}
   
  function changepattern () {
  fill (255);
  noStroke ();
  rect (380, 10, 700, 520);   

}
