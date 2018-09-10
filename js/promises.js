"use strict";

const wait = (num) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, num)
    }
     )};


// let wait = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//
//     })
// })


wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));



// Generate a Personal Access Token for the github api.
//
//     We will use this so that we don't get rate limited when talking to the
// github api. You can add the token to your requests like this:
//
// Copied to clipboard
// fetch(url, {headers: {'Authorization': '8efb67a6a7d2186a2f6ff341041da10c20182699'}})
// Create a function that accepts a github username, and returns a promise
// that resolves with the date of the last commit that user made. Reference the
// github api documentation to achieve this.


// console.log(fetch('https://api.github.com/users/alois-renggli/events/public', {headers: {'Authorization': '8efb67a6a7d2186a2f6ff341041da10c20182699'}}));
//
const lastCommit = (username) => {
    // console.log(fetch('https://api.github.com/users/' + username + '/events', {headers: {'Authorization': '8efb67a6a7d2186a2f6ff341041da10c20182699'}}));
    fetch('https://api.github.com/users/' + username + '/events', {headers: {'Authorization': '8efb67a6a7d2186a2f6ff341041da10c20182699'}}).then((response) => {
        console.log(response.json());
        response.json();
    }).then((user) => {

    });
};
lastCommit('alois-renggli');
//
// lastCommit('alois-renggli').then(() => console.log("The last commit is "));
// lastCommit('alois-renggli').catch(() => console.log("Error: Invalid username"));
