"use strict";

// #1 & #2
var i = 1;

while (i < 65536){
    console.log(i + i);
    i += i;
}


//#3

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
console.log("I have a total of " + allCones + " in my inventory.");
// This expression will generate a random number between 1 and 5
    do{
        var conesBought = Math.floor(Math.random() * 5) + 1;
        console.log("There are a total of " + allCones + " that I need to sell.")
            if (allCones < conesBought) {
                console.log("Cannont sell you " + conesBought + ". We only have " + allCones + " left.")
            } else if (allCones >= conesBought) {
                console.log(conesBought + " cones sold! There are " + (allCones - conesBought) + " left.");
                allCones = allCones - conesBought;
            }
    } while(allCones > 0);
    console.log("Yay! I sold them all!");




