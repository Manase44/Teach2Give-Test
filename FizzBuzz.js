// Question 1: FizzBuzz

// Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz"; for
// multiples of 5, print "Buzz"; and for numbers that are multiples of both 3 and 5, print
// "FizzBuzz".

for (let number = 1; number <= 100; number++) {
  if (number % 3 == 0 && number % 5 == 0) {
    console.log(`${number} FizzBUzz`);
  } else if (number % 3 == 0) {
    console.log(`${number} Fizz`);
  } else if (number % 5 == 0) {
    console.log(`${number} Buzz`);
  } else {
    console.log(number);
  }
}

