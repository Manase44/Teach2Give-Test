// Question 3: Power of Two

// Write a program that takes an integer as input and returns true if the input is a power of two.
// Examples:
// 8=> returns true
// 6=> returns false


const prompt = require("prompt-sync")({ sigint: true });
let integer = prompt('Input integer: ');

while(integer % 2 == 0){
    console.log(typeof integer);
    integer = integer / 2;
}

if(integer == 1){
    console.log('true');
}else{
    console.log('false');
}