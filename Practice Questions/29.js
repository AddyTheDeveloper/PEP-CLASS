// Question 29: Separate even and odd numbers from [1,2,3,4,5,6].

const numbers = [1, 2, 3, 4, 5, 6];

const even = numbers.filter(num => num % 2 === 0);
const odd = numbers.filter(num => num % 2 !== 0);

console.log("Numbers:", numbers);
console.log("Even numbers:", even);
console.log("Odd numbers:", odd);
