// var hitMe = function(){
//     return Math.floor((Math.random()*11)+1);
// }

// var count = 0;
// if (confirm ("Do you want to play a game?")) {
//     while (count <= 21) {
//             if (confirm("Your current score is " + count + ". Do you want another card?")){
//                 var hit = hitMe();
//                 alert("Your card is " + hit);
//                 count += hit;
//             } else {
//                 break;
//             }
//     }if (count > 21){
//         alert("Your score is " + count + ". You busted!");
//     } else {
//         alert("Your score is " + count);
//     }
// }


// if(confirm ("Do you want to play a game?")){
//     var majicNumber = Math.floor((Math.random()*100)+1);
//     var ourGuess;
//
//     while (ourGuess !== majicNumber){
//         ourGuess = parseInt(prompt("Guess a number between 1 and 100"))
//         if (ourGuess < majicNumber){
//             alert("Your guess is too low.")
//         }else if (ourGuess > majicNumber){
//             alert("Your guess is too high.")
//         }
//     }else{
//         alert("You guessed the correct number of " + majicNumber)
//     }
// }

// if(confirm ("Do you want to play a game?")){
//     var majicNumber = Math.floor((Math.random()*100)+1);
//     var ourGuess;
//
//     do {
//         ourGuess = parseInt(prompt("Guess a number between 1 and 100"))
//         if (ourGuess < majicNumber){
//             alert("Your guess is too low.")
//         }else if (ourGuess > majicNumber){
//             alert("Your guess is too high.")
//         }
//     } while (ourGuess !== majicNumber);
//
//     alert("You guessed the correct number of " + majicNumber)
//
// }

var count = 0;
while (count < 10) {
    console.log(count);
    count++;
}

for (var i = 0; i < 10; i++){
    console.log(count);
}
























