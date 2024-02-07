// Question 5: Reverse Integer

// Write a program that takes an integer as input and returns an integer with reversed digit
// ordering.
// Examples:
// For input 500, the program should return 5.
// For input -56, the program should return -65.
// For input -90, the program should return -9.
// For input 91, the program should return 19.


const prompt = require("prompt-sync")({ sigint: true });
let integer = prompt('Input integer: ');

let integerElements = integer.split('');
let negative = '';

for (i = 0; i < integerElements.length; i++){
    if (integerElements[i] === '-') {
        integerElements.splice(i,1);
        negative = '-';
    }
}

let reversedIntegerElements = integerElements.reverse();
let reversedInteger =Number( reversedIntegerElements.join(''));
console.log(`${negative}${reversedInteger}`);