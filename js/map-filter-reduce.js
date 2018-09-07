"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Create a file named map-filter-reduce.js in your js directory and copy
// the users data below into it.
//     Use .filter to create an array of user objects where each user object has
// at least 3 languages in the languages array.

const threeLanguages = users.filter(function (n) {
    if (n.languages.length >= 3){
        return n;
    }
});

console.log(threeLanguages);


//     Use .map to create an array of strings where each element is a user's email address

const emailArray = users.map(function(n){
    return n.email;
});

console.log(emailArray);

// Use reduce to get the total years of experience from the list of users.
// Once you get the total of years you can use the result to calculate the average.
const totalExperience = users.reduce(function (accumulator, n){
    return accumulator + n.yearsOfExperience;
}, 0);
console.log(totalExperience);

//     Use reduce to get the longest email from the list of users.

let emailLengths = users.map(function(n){
        return n.email.length;
});

const longestEmail = users.reduce(function(accumulator, n){
    // if (n.email.length ===
       return  Math.max(...emailLengths)
// ){
        // return n.email
    // }
    // else {
    //     return accumulator + n.email;
    // }

}, '');
console.log(longestEmail);


//     Use reduce to get the list of user's names in a single string.
// const words = sentence.split(' '); // transform a sentence into an array of words
// const longestEmail = users.reduce((wordCounts, user) => {
//     let letters = user.email.length;
//     if
//
// }, {}); // start with an empty object
//
// console.log(longestEmail);





const userNames = users.reduce(function (accumulator, n) {
        return accumulator + ", " + n.name ;
}, "Your instructors are: ");
console.log(userNames);

// Example: Your instructors are: ryan, luis, zach, fernando, justin.


// Use reduce to get the unique list of languages from the list of users.
//
//
// function countWords(users) {
//         const wordCountObject = users.reduce(function(wordCounts, word){
//             // const words = users.word.split(' ');
//             const wordString = wordCounts + word.languages;
//             // if (typeof wordCounts[wordArray] === 'undefined') {
//             // // if the word is not yet present in our object, set it's value to 1
//             // wordCounts[word] = 1;
//         // }
//         // else {
//         //     // otherwise increment the existing count
//         //     wordCounts[word] += 1;
//         // }
//             console.log(wordCounts);
//
//             return wordCounts;
//     }, {}); // start with an empty object
//     return wordCountObject;
//
// };
//
// console.log(countWords(users));







