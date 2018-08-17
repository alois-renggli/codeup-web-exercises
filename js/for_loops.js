"use strict";


function showMultiplicationTable (num){
    for (var i = 1; i < 11; i++){
        console.log( num + " x " + i + " = " + num * i);
    }
}

showMultiplicationTable(7);





for (var i = 0; i <10; i++){
    // This is how you get a random number between 20 and 200
    var randomNumber = Math.floor(Math.random() * 180) + 20;
    if (randomNumber%2 === 0){
        console.log(randomNumber + " is even.")
    }else{
        console.log(randomNumber + " is odd.")
    }

}

var multiple = "1";

// for (var i = 1; i < 10; i++){
//     console.log(i * multiple);
//     multiple = multiple + "1";
//
// }


for (var i = 1; i < 10; i++){
    console.log(i * multiple.repeat(i));
}


var num = 100;

for (var i = 0; i < 20; i++){
    console.log(num);
    num = num - 5;
}


