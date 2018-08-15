"use strict";

// Loop and Array challenges
//
// Make a function called randomIntBetween(min, max) that returns a random number between the min and the max.
//

function randomIntBetween(min, max) {
    return Math.round(Math.random()*(max-min) + min);
}
//     Make a function called coinFlip() that returns either 0 or 1, randomly

function coinFlip(){
    return randomIntBetween(0, 1);
}

// Make a function called rollDie() that returns an integer between 1 and 6.

function rollDie(){
    return randomIntBetween(1, 6);
}

// Make a function called twoDice() that returns the sum of rolling two six sided dice.

function twoDice(){
    return rollDie() + rollDie();
}

//     Make a function called twentySidedDie() that returns a random integer between 1 and 20.

function twentySidedDie(){
    return randomIntBetween(1, 20);
}


// Make a function called twelveSidedDie() that returns a random integer between 1 and 12.

function twelveSidedDie(){
    return randomIntBetween(1, 12);
}

// Make a function called tetrahedron() that returns a random integer between 1 and 4.

function tetrahedron(){
    return randomIntBetween(1, 4);
}

//
// Use what you know about functions, loops, and arrays to complete the following:
//
//     Make a function called listOfRolls(num) that takes in a number containing how many 6-sided dice
// rolls you want to make. The listOfRolls function should return an array of that length, where each
// element of the array is the result of the rollDie function.
//

function listOfRolls(num){
    var arrayList = [];
    for (var i = 1; i <= num; i++){
        rollDie();
        arrayList.push(rollDie());
    }
    console.log(arrayList);
    return arrayList;
}

listOfRolls(30);

//
// Make a function called
// listOfRollsFromDieFunc(numberOfRoles, diceFunction) that takes in two arguments:
//  The first argument is the number of rolls you want to make.
//  The second argument is a function that contains the function definition for
// the type of die you want to roll.
// For example, if we call listOfDieRollsFromDieFunc(1, tetrahedron), then the
// function will return an array containing one value that is the result of calling the tetrahedron function.

function listOfRollsFromDieFunc(numberOfRoles, diceFunction){
    var arrayList = [];
    for(var i = 1; i <= numberOfRoles; i++){
        diceFunction();
        arrayList.push(diceFunction());
    }
    console.log(arrayList);
    return arrayList;
}

listOfRollsFromDieFunc(6, twelveSidedDie);
listOfRollsFromDieFunc(9, twentySidedDie);
listOfRollsFromDieFunc(5, tetrahedron);




























