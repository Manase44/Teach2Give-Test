// Question 2: Fibonacci Sequence

// Write a program to generate the Fibonacci sequence up to 100.

let firstNumber = 0;
let secondNumber = 1;
let thirdNumber;

do {
    thirdNumber = firstNumber + secondNumber;
    if (thirdNumber < 100) {
        console.log(thirdNumber);
    }
    firstNumber = secondNumber;
    secondNumber = thirdNumber;
   
} 
while(thirdNumber < 100)

