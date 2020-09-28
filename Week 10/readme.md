# Week10
So based on last week class, I decided to continue editing my json data on p5.js, which I'm still trying to wrap my head around converting the data information to code words.



### My Goals for this week!
I also wanted to start a new sketch in which later I can input my data into this sketch. My aim is too start of simple and then build from there. For the past weeks, admitely I have been trying to either alter hard code that I'm not entirely confident with or trying to hybrid two types of code hoping something would happen. (It doesn't) So here goes...

### Friday Night code WIP - STAGE 1 & 2 (Code in Github Respository of Week 10)
![Alt Text](https://media.giphy.com/media/hG4bqajnPHGoHn6SYx/giphy.gif)

I also tried to do "Random Circles with No Code" YouTube tutorial by Dan Shiffman, but to no avail, since I couldn't figure out how to make the circles appear one by one as they do now in this sketch. So I decided to leave it alone for now and move onto something else

![Alt Text](https://media.giphy.com/media/ES96DRsPCDozKRFX2v/giphy.gif)

I successfully managed to start a new sketch with mousePressed function and add text, but I'm still trying to figure out how I can get the days of the week to continously change, so from Sunday, to Monday and so forth. I also tried to randomise the circle sizes, trying both r and d and using the random (); function, but somehow this wasn't working! 


### Saturday code WIP - STAGE 3 & 4 (code in Github Respository of Week 10)
![Alt Text](https://media.giphy.com/media/YoUnNyHHx0lDDoRtEb/giphy.gif)

So here I've managed to contain my circles within a circle shape. I used https://editor.p5js.org/ftobon@heartofla.org/sketches/SkBy9XP97 this help me do it. I also managed to pause the sketch with the keyPressed and noLoop(); function, which I found through https://p5js.org/reference/#/p5/noLoop. I thought this would be a good way for people to stop a sketch and see the notifications tracking data at a certain hour of the day. Now this is where the timer comes into play. Since I thought it was going to be a little tricky to display a 24 time within a clock, I thought a timer would be another good way of tracking the data. However, whislt I have found a couple of timers through the reference examples page on p5.js.org, none of them to be working when I attempted to code them into my code. Something I'm going to have to debug later on....

![Alt Text](https://media.giphy.com/media/lXZs2deKRIy89ZkQ8J/giphy.gif)

So with a little more researching and a looot of trials, I finally figured out how to change the days with just a mouse click!

**Things still need to figure out:**
1. Adapting my JSON code
2. How to get timer on there and make it count from 1-24, not 24-1
3. How to stop or loop back to Sunday, rather than it keep going when I mousepress...
4. Consider trying to plot the circles according to their time of day when notifications are recieved

### Sunday code WIP - WIP 7
Kind of a slow day today...
I had a mini breakthrough in terms of getting the data to determine the size of my circles. I used this reference https://editor.p5js.org/bavazzanos1/sketches/Bkkdrs11M and it worked! Yay! Now all I have to figure out is how to apply that to a bigger data set. I think I'm getting there... but not quite yet. I also figured out that if I were to reference one particular array, I should name my hours oneam, rather than 1:00 am, because when I entered data.1:00am.instagram, the system freaked out and couldn't understand what I was doing, but when I changed it to data.oneam.instagram, it was fine. Don't know if they'll be helpful in the future...

### Monday code WIP
Okay so Karen sent over a template for me to work on. She solved out how to display my time through an hourly rate just by adding "hours" at the start of my JSON file, which actually makes a lot of sense haha.....
"
