"use strict";


// Make an array containing 20 random numbers between 1 and 6.
//



function makeArray (){
    var randomArray = [];
    for (var i = 1; i <=20; i++){
        var randomNumber = Math.floor((Math.random()*5)+1);
        var addToArray = randomArray.push(randomNumber);
        // console.log(addToArray);
    }
    console.log(randomArray);
    return randomArray;
}
console.log("-----Output Random Array-----------")

// makeArray();
var newArray = makeArray();

//
// Make a forEach that only outputs the even numbers
//
console.log("-----Output Even Numbers------------")

newArray.forEach(
    function (element) {
        if (element %2 === 0){
            console.log(element);
        }

    }
)

// Make a forEach that adds 10 to each number
//
console.log("------Output forEach with +10----------")
newArray.forEach(
    function (element){
       element = element + 10;
       console.log(element);
    }
)

// Make a forEach that gets the average of all the numbers
//
console.log("------Output forEach with total average----------")

var sum = 0;

newArray.forEach(
    function(element){
        sum += element;
        console.log("The sum is " + sum);
        var avg = sum/newArray.length;
        console.log("The average is " + avg);
        return avg;
    }
)



// more loop and array challenges
// Loop and Array challenges
// ​


// Make a function called randomIntBetween(min, max) that returns a random number between the min and the max.
// ​

function randomIntBetween(min, max){
    return Math.round((Math.random()*(max-min))+min);
}
console.log(randomIntBetween(2, 10));
// Make a function called coinFlip() that returns either 0 or 1, randomly

function coinFlip(){
    return randomIntBetween(0, 1);
}
console.log(coinFlip());

// Make a function called rollDie() that returns an integer between 1 and 6.

function rollDie(){
    return randomIntBetween(1, 6);
}

// Make a function called twoDice() that returns the sum of rolling two six sided dice.

function twoDice(){
    return  rollDie() + rollDie();
}
//Make a function called twentySidedDie() that returns a random integer between 1 and 20.

function twentySidedDie() {
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

// ​
// Use what you know about functions, loops, and arrays to complete the following:
//     ​
// Make a function called listOfRolls(num) that takes in a number containing how
// many 6-sided dice rolls you want to make. The listOfRolls function should return
// an array of that length, where each element of the array is the result of the rollDie function.
// ​

var rollArray = [];

function listOfRolls(num){

    for (var i = 1; i <= num; i++){
        rollDie();
        rollArray.push(rollDie());

    }
    return rollArray;
}
// // var number = prompt("How many times do you want to roll the dice?");
console.log(listOfRolls(3));


// ​
// Make a function called
// listOfRollsFromDieFunc(numberOfRoles, diceFunction) that takes in two arguments:
//     The first argument is the number of rolls you want to make.
//     The second argument is a function that contains the function definition for the
//     type of die you want to roll.
//     For example, if we call listOfDieRollsFromDieFunc(1, tetrahedron), then the function
// will return an array containing one value that is the result of calling the tetrahedron function.


var rollArrayTest = [];

function listOfRollsFromDieFunc(numberOfRoles, diceFunction) {
    for (var i = 1; i <= numberOfRoles; i++) {

        diceFunction();
        rollArrayTest.unshift(diceFunction());

    }
    return rollArrayTest;
}
console.log(listOfRollsFromDieFunc(20, twoDice));




//Coding Challenges
console.log("----------------------Coding Challenges----------------------")


console.log("----------------------Sum of Squares----------------------")


function sumOfSquare(a, b, c){
    if (Math.pow(a,2)+Math.pow(b,2)===Math.pow(c,2)){
        return true;
    }else{
        return false;
    }
}

console.log(sumOfSquare(3, 4, 5));
console.log(sumOfSquare(4,5,6));






console.log("----------------------Longest Word in Sentence----------------------")

function wordLength (input){
    var arrayInput = [];
    arrayInput = input.split(" ");
    var wordLength = [];

    arrayInput.forEach(
        function (element) {
            var wordSplit = [];
            if ((element === arrayInput[0]) || (element === arrayInput[arrayInput.length - 1])){
                wordSplit = element.split('');
                var num = wordSplit.length;
                wordLength.push(num);
            }else {
                wordSplit = element.split('');
                var num = wordSplit.length;
                wordLength.push(num);
            }
        }
    )
    console.log(wordLength);
    return Math.max(...wordLength);
}


console.log(wordLength("1234567890 is a test 12345678 case for 123456789"));







console.log("----------------------Title Case----------------------")

function titleCase (input){
    input.toLowerCase();
    var arrayTitle = [];
    arrayTitle = input.split(" ");
    var output = [];
    arrayTitle.forEach(

        function (element) {
            element = element.toLowerCase();
            var arrayWord = [];
            arrayWord = element.split("");
            arrayWord[0] = arrayWord[0].toUpperCase();
            element = arrayWord.join("");
            output.push(element);
            console.log(element);
        }
    )
    input = output.join(" ");
    return input;

}
console.log(titleCase("THIS is A tESt FoR title CASE."));








