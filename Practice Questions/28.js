// Question 28: Find the average of numbers in [10,20,30,40].

const numbers = [10, 20, 30, 40];

const average = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;

console.log("Numbers:", numbers);
console.log("Average:", average);
