// Question 4: Capitalize Words

// Write a program that accepts a string as input, capitalizes the first letter of each word in the
// string, and then returns the result string.
// Examples:
// "hi"=> returns "Hi"
// "i love programming"=> returns "I Love Programming"

const prompt = require("prompt-sync")({ sigint: true });
let string = prompt('Enter string: ');

let words = string.split(' ');
let newString = '';

for (i = 0; i < words.length; i++ ){
    let word = words[i];
    let firstLetter = word[0];
    let capitalizeFirstLetter = firstLetter.toUpperCase();
    let sliceddWord = word.slice(1);
    let newWord = `${capitalizeFirstLetter}${sliceddWord} `;
    newString += newWord;
}

console.log(newString);