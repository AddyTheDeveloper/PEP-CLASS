// Question 23: Using reduce(), find the product of numbers in [1,2,3,4].

const numbers = [1, 2, 3, 4];

const product = numbers.reduce((acc, num) => acc * num, 1);

console.log("Array:", numbers);
console.log("Product:", product);
