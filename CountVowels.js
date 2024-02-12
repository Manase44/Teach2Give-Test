// Question 6: Count Vowels

// Write a program that counts the number of vowels in a sentence.
// eg " Hello World " => returns 2

const prompt = require("prompt-sync")({ sigint: true });
let sentence = prompt("Enter the sentence: ");
let numberOfVowels = new Set();

const vowels = ["a", "e", "i", "o", "u"];

let sentenceLetters = sentence.toLowerCase().split("");

for (i = 0; i < sentenceLetters.length; i++) {
  if (vowels.includes(sentenceLetters[i])) {
    numberOfVowels.add(sentenceLetters[i])
  }
}

console.log(numberOfVowels.size)
