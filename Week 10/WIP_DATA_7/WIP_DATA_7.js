var data; // bucket for the notification data
//each social media notifications count is listed
//value ranges between 0-20 → circles -->map values?
var instagram, snapchat, messenger, facebook, email, instagramCol, snapchatCol, messengerCol, facebookCol, emailCol; 
// this will make the circles bigger
var sizeMultiplier = 20; 
var time;
var Size;

function preload (){
  data =loadJSON ("Sunday.json");
}
function setup() {
   createCanvas (windowWidth, windowHeight);
   //background (255);
   //instagramCol = color (142, 68, 173);
   //messengerCol = color (133, 193, 233);
   //snapchatCol = color (247, 220, 111);
   //facebookCol = color (118, 215, 196);
   //emailCol = color (178, 186, 187); 
   //c = [instagramCol, messengerCol, snapchatCol,  facebookCol, emailCol];
   
   
   Size = data.oneam.instagram * sizeMultiplier;
   
   }
   
   
function draw () { 
background (220); 
fill (20, 40, 50); 
ellipse (width/2, height/2, Number(Size), Number(Size));

//fill (snapchatCol);
  //ellipse (90,90,60,60);
}
