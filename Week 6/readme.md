# Week 6

# Class Overview
This week we touched base on what sort of area we would group ourselves in according to our presentations pitch and intended goals and ideas. I placed myself somewhere in-between sensory data and sound, however the more I think about my approach, the more I want to focus on the visual aspects of the project, whilst including sound as a background approach to further elevate my overall concept.  

Also, during the first half of the class, Andy got us to quickly do a paper prototype of an arcade video game within 10mins. This was a super fun exercise and it got us think about how we can present our ideas through a paper prototype not only for this class, but for future projects as well. This prototype was based on Super Mario 


<img src= "https://github.com/aliceyu1111/Slave-to-the-Algorithm/blob/master/Week%206/Paper%20Prototype%201.png" width ="500" />
<img src= "https://github.com/aliceyu1111/Slave-to-the-Algorithm/blob/master/Week%206/Paper%20Prototype%202.png" width ="500" />


During the second half of the class, Karen showed us how to use P5.js which is different to Java. We learnt how to incorporate sound into a simple piece of artwork, which was actually pretty cool! Although the annoying thing I’m still trying to get over is the fact that if you enter one word or letter incorrectly your whole code doesn’t work. Super frustrating, but I’m learning to take deep breaths in-between. (Okay and some meditation in-between as well heheh) It was fun getting to learn how to incorporate sound and how we can make that volume of the sound affect and change the circle shape within the artwork. This is something I might try to incorporate into my code later down the track. 

### Recap of things I learnt during this class in P5.js 

 **P5.js** = different to Javascript! 

**Java** = Good for standalone Apps 

**Javascript** = Good for browser/webs 

 
### How to P5.js and import/code sound 

 
**createCanvas** - Automatically launches it to a webpage 

**createCanvas (windowWidth, windowHeight)** - This makes it show full screen on your web browser window 

**song = loadSound ('title of song');** - here we link our song to our variable 

**preload is used for larger files usually** 

**analyzer = new p5.Amplitude ();**  

**analyzer.setInput (song);** 

set analyzer to check amplitude 

**var volume=analyzer.getLevel();** - this will exact the volume of the song that we have sent to the volumizer of the song  

**volume=(volume*200)+10;** - using the volume in the song as a numeric value. We are not changing the volume of the song 

**song.loop** 

**song.noloop** 

**song.play** 

 
### How to imput sound: 

Sketch – Import Library – P5.sound - This should be then added to our sketch library folder  
Then Cmd+K to access the folder



### Idea Time!!!!!!

**As for further ideas development, I firstly wrote down a list of things that I think represent what my project is.**  

- No patterns, because notifications come at random times 

- Complete randomness 

- Distractions  

- Avoidance 

- Alert!!! 

- Alarming!, some more than others ngl 

- Places on emotions 

- Hypnotizing 

- Brainwashed 

- Controlled 

- Data 

- Overwhelming ??? 


**1st Idea???** 

The idea of raindrops. Plays on the idea of impermanence. Notifications don’t have a lasting impression on us. Social reminders that we are still here. We exist. Because when unexpected rain touches us, it jolts us in a way to act. Example beginning to run, or walk a little faster to get out of rain, cover our heads with our clothes or an umbrella.   

Processing rain or how like water drips onto paper towels. It leaves a mark but eventually it dries up. Notifications are not that important??? 

The more times the notification appears in a row from the same app, the color could deepen??? 



**2nd Idea** 

Idea of a spinning record player or just a circular spinning artboard. The more notifications that appear the faster it spins and the more colour drips onto the CD cover. By the end have a colourful arrangement of colours . The spinning would also act as a hypnotizing effect as well.  

- One piece would take up to around 24 mins.  

- Every hr has x amount of notifications. So therefore, every 1min = 1hr of the day.  

- 1min = speed of turning wheel depending on how many notifications occur within an hr. If there is a lot, the faster it spins, and vice versa.  

- 1min = number of drops, again depending on number of notifications 

- Every drop colour will be different depending on what app it came from.  

 

Here is a simple sketch that I drew out to help with my explanation. 

<img src= "https://github.com/aliceyu1111/Slave-to-the-Algorithm/blob/master/Week%206/Untitled_Artwork.jpg" width ="500" />

### Inspirational Artists & Projects

<img src= "https://github.com/aliceyu1111/Slave-to-the-Algorithm/blob/master/Week%206/Callen%20Schaub%201.png" width ="500" />
<img src= "https://github.com/aliceyu1111/Slave-to-the-Algorithm/blob/master/Week%206/Callen%20Schaub%202.png" width ="500" />

###### Image References: https://callenschaub.com/pages/about 

As I was thinking of my idea, I realised where I got the inspiration from! Acrylic paint that’s trending on TicTok. I love how colourful and playful Schaubs artworks are and not two are the same. I also enjoyed how hypotising these works are and how mesmersing it would look and feel to actually watch it being made in the process.  


This idea is okay, but it just seems as though it’s nothing really new. I see it all the time on TikTok and Instagram. I feel like I could push it to make it represent more of me and my data.  

So how can I turn this idea into a digital artform???  

Similar concept as Idea 2, but, 

- Maybe on processing, the longer the colour is on the canvas, the more it starts to form the notification words? 

- Maybe on processing, the longer the colour is on the canvas, colour deepens, gets blurrier, splatters more, starts melting off the canvas page? 

- The starting point of each drip is located on a different position to make it more interesting. The point will be determined according to time of day notification. Clock thing 

- The sound or intensity of each notification will affect the size and opacity of the drops of colour onto the canvas? 
