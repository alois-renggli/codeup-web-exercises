"use strict";

var num = prompt("Enter an odd number between 1- 50:");

while (num%2 === 0 || num > 50 || num < 1 || typeof num !== "number") {
    num = prompt("Invalid Entry! Enter an odd number between 1 - 50.");
    if (num%2 !== 0 && num <= 50 && num >= 1){
        console.log("You entered " + num);
        break;
    }
}

console.log("Number to skip is: " + num);

for (var i = 0; i < 50; i++){
    if (i == num){
        console.log("Yikes! Skipping number: " + num);
    }else if (i%2 !== 0){
        console.log("This is an odd number: " + i);

    }
}



