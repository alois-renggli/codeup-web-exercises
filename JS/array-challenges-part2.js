"use strict";



// Challenge #0
// Define a function named countOccurences(array, item) that takes in two arguments.
// The first argument is the array you want to search. the second argument is the value you wish to count.
// if there are no occurences of the value in the array then return 0.
// countOccurences (bugs, "ant") should return 3
// countOccurences(fruits, "apple") should return 3
// countOccurences(bugs, "mosquito") should return 2

var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
var fruits = ["apple", "banana", "apple", "orange", "apple", "pineapple"];


function countOccurences(array, item){
    var occurenceTotal = 0;
    for (var i = 0; i <= array.length; i++){
        if (array[i] === item){
            occurenceTotal += 1;
        }
    }
    console.log(occurenceTotal);
    return occurenceTotal;
}

countOccurences(bugs, "ant");
countOccurences(fruits, "apple");
countOccurences(bugs, "mosquito");



// Challenge #1:
//
// Define a function named allIndexesOf that takes in two arguments. The first argument should
// be the array to search and the second argument should be the value you want to search for.
// If the item does not exist in the provided array, return an empty array;
//
// Given:
//     var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
// allIndexesOf(fruits, "apple") should return the array [0, 3]
// allIndexesOf(fruits, "guava") should return the array []
// allIndexesOf(fruits, "pineapple") should return [4]
//


function allIndexesOf (arrayItem, value){
    var arrayItemIndex = [];
    for (var i = 0; i <= arrayItem.length-1; i++){
        if(arrayItem.indexOf(value, i) >= 0 && arrayItem[i] === value){
           arrayItemIndex.push(arrayItem.indexOf(value, i));
        }
    }
    console.log(arrayItemIndex);
    return  arrayItemIndex;

}

allIndexesOf(fruits, "apple");
allIndexesOf(fruits, "guava");
allIndexesOf(fruits, "pineapple");
allIndexesOf(bugs, "ant");






//
// Challenge #2
// Define a function named removeAll(array, value) that takes in two arguments.
// The first argument should be an array and the second argument should be a value you wish to
//
// Given:
// var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
//
// removeAll(bugs, "ant") should return ["mosquito", "scorpion", "mosquito", "typo", "reference error", "type error"]
//
// removeAll(bugs, "mosquito") should return ["ant", "scorpion", "ant", "ant", "typo", "reference error", "type error"]
//
// removeAll(bugs, "roach") should return the original array b/c "roach" has no occurrences.
//

function removeAll(array, value){

    while (array.indexOf(value) >= 0) {
        for (var i = 0; i <= array.length - 1; i++) {
            if (array[i] === value) {
                array.splice(i, 1);
            }
        }
    }
    console.log(array);
}

removeAll(bugs, "ant");


// should return ["mosquito", "scorpion", "mosquito", "typo", "reference error", "type error"]

// removeAll(bugs, "mosquito");
// should return ["ant", "scorpion", "ant", "ant", "typo", "reference error", "type error"]
//
// removeAll(bugs, "roach");
// should return the original array b/c "roach" has no occurrences.

// var antsArray = ['ant','ant','ant','ant','ant','ant','ant','ant','ant']
//
// removeAll(antsArray, 'ant');

removeAll(fruits, "apple");



