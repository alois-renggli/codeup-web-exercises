"use strict";

// console.log("Hello from external JavaScript");
//
// alert("Welcome to my Website!");
//
// var favoriteColor = prompt("What is your favorite color?")
// alert("Great, " + favoriteColor + " is my favorite color too!")
//

// Write some JavaScript code, that is, variables and operators, to describe the following scenarios.
// Do not worry about the real operations to get the values, the goal of these exercises is to understand how
// real world conditions can be represented with code.
//
// You have rented some movies for your kids: The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?

var littleMermaid = prompt("How many days did you rent the Little Mermaid?");
var brotherBear = prompt("How many days did you rent Brother Bear?");
var hercules = prompt("How many days did you rent Hercules?");
var rentalPrice = prompt("How much does it cost per day to rent a movie?");
var totalPrice = rentalPrice * (parseInt(littleMermaid) + parseInt(brotherBear) + parseInt(hercules));

alert("The total price is $" + totalPrice + " for renting The Little Mermaid for " + littleMermaid + " days, " +
    "Brother Bear for " + brotherBear + " days, and Hercules for " + hercules + " days.");



//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
// they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
// How much will you receive in payment for this week? You worked 10 hours for Facebook,
// 6 hours for Google and 4 hours for Amazon.

var googlePay = prompt("How much does Google pay per hour?");
var amazonPay = prompt("How much does Amazon pay per hour?");
var facebookPay = prompt("How much does Facebook pay per hour?");
var facebookHours = prompt("How many hours did you work at Facebook?");
var googleHours = prompt("How many hours did you work at Google?");
var amazonHours = prompt("How many hours did you work at Amazon");
var totalPay = (googlePay*googleHours) + (amazonPay*amazonHours) + (facebookPay*facebookHours);

alert("You earned $" + totalPay + " this week from working at Google for " + googleHours +
    " hours at $" + googlePay + " per hour, at Amazon for " + amazonHours + " hours at $" + amazonPay + " per hour, and " +
    "at Facebook for " + facebookHours + " hours at $" + facebookPay + ".");



// A student can be enrolled to a class only if the class is not full and the class schedule
// does not conflict with her current schedule.


var classNotFull = confirm("Is the class NOT full?");
var scheduleNotConflict = confirm("Does the schedule NOT conflict with the student's current schedule?");
var studentEnroll = classNotFull && scheduleNotConflict;

if (studentEnroll == true) {
    alert("The student can enroll.")
}
else {
    alert("The student can not enroll.")
}

// A product offer can be applied only if people buys more than 2 items, and the offer has not expired.
// Premium members do not need to buy a specific amount of products.

var premiumMember = confirm("Are you a Premium Member?");
var buyTwoItems = confirm("Did you buy more than 2 items?");
var offerNotExpired = confirm("Has the offer not expired yet?");
var productOffer = offerNotExpired && (premiumMember || buyTwoItems);

if (productOffer == true){
    alert("You can use the offer at this time!")
}
else{
    alert("Sorry, but you are unable to use this offer.")
}