// Question 25: Count numbers greater than 50 in [20,60,80,40,90].

const numbers = [20, 60, 80, 40, 90];

const count = numbers.filter(num => num > 50).length;

console.log("Array:", numbers);
console.log("Count of numbers > 50:", count);
