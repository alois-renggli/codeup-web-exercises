"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number.
 * If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */


var enterNumber = confirm("Would you like to enter a number?");

if (enterNumber === true){
    var number = prompt("Please enter a number...")
    alert("You entered " + number)
}

if (number%2 === 0){
    alert(number + " is even.")
}
else {
    alert(number + " is odd.")
}

alert(number + " plus 100 is " + (parseFloat(number) + 100))

if (number >= 0){
    alert(number + " is positive.")
}
else {
    alert(number + " is negative.")
}


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
//
function analyzeColor (colorName) {
    if (colorName === "blue"){
        return("Blue is the color of the sky.")
    }
    else if (colorName === "red"){
        return("Red is the color of strawberries.")
    }
    else if (colorName === "cyan"){
        return("I don't know anything about cyan.")
    }
    else {
        return("I can't think of anything that has that color.")
    }
}

// console.log(analyzeColor(randomColor));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
    console.log(randomColor);
    console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

var selectColor = prompt("Enter the name of a color...")
alert("You selected " + selectColor)

function analyzeColor(colorName){
    switch (colorName){
        case "blue":
            return("Blue is the color of the sky.");
            break;
        case "red":
            return("Red is the color of strawberries.");
            break;
        case "cyan":
            return("I don't know anything about cyan.");
            break;
        default:
            return("I don't know anything by that color.");
            break;
    }
}

alert(analyzeColor(selectColor));


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

//modified random number for 0-5 for the dicount..
// var random = Math.floor(Math.random() * 6);
var luckyNumber = Math.floor(Math.random() * 6);

var totalAmount = prompt("Enter the total amount of your Walmart bill...");

alert("Your lucky number is " + luckyNumber);
// var randomNumber = prompt("Enter a number from 0-5:")
function calculateTotal(luckyNumber, totalAmount){

    switch (luckyNumber) {
        case 0:
            var discount = 0;
            var discountedPrice = totalAmount - (discount * totalAmount);
            return (discountedPrice.toFixed(2));
            break;
        case 1:
            var discount = .10;
            var discountedPrice = totalAmount - (discount * totalAmount);
            return (discountedPrice.toFixed(2));
            break;
        case 2:
            var discount = 0.25;
            var discountedPrice = totalAmount - (discount * totalAmount);
            return (discountedPrice.toFixed(2));
            break;
        case 3:
            var discount = 0.35;
            var discountedPrice = totalAmount - (discount * totalAmount);
            return (discountedPrice.toFixed(2));
            break;
        case 4:
            var discount = 0.5;
            var discountedPrice = totalAmount - (discount * totalAmount);
            return (discountedPrice.toFixed(2));
            break;
        case 5:
            var discount = 1.0;
            var discountedPrice = totalAmount - (discount * totalAmount);
            return (discountedPrice.toFixed(2));
            break;
    }
}
// console.log(calculateTotal(random, totalAmount));
// var discount = calculateTotal(random, totalAmount);
alert("Your bill was $" + totalAmount + " and your lucky number was " + luckyNumber +". Your discounted bill is $" + calculateTotal(luckyNumber, totalAmount));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
