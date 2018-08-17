"use strict";

var writeOut = function (input) {
    for (var i = 0; i < input.length; i++){
        console.log(input[i]);
    }
}



var fruits = ["apple", "oranges", "bananas", "grapfruit", "clementines", "pear"];

var dogs = ['schnauzer', 'catahoulla', 'german shepard', 'beagle', 'golden retriever'];

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

writeOut(fruits);
writeOut(dogs);
writeOut(colors);

function typeOfDog(dog) {
    if (dog == "beagle"){
        console.log("My favorite dog is a " + dog + "!")
    }else
    console.log("I have owned " + dog + " before.")
}
dogs.forEach(typeOfDog);