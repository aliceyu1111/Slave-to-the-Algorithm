var data = {
  "day": "Sunday",
         "oneam": {
        "instagram": "10",
        "messenger": "2",
        "snapchat": "0",
        "email": "0",
        "facebook": "0",
        "totalNotification": "3"
         }
    };


var Size; 
var sizeMultiplier = 20;

function setup() {
createCanvas (windowWidth, windowHeight);

 //for (var i =0; i < data.length; i++) {
    //size = data[i] * sizeMultiplier;
    


Size = data.oneam.instagram * sizeMultiplier;

}


function draw() {
background (220);
fill (20, 40, 80);
ellipse (width/2, height/2, Number(Size), Number(Size));
}
