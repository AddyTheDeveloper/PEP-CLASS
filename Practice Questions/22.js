// Question 22: Using filter(), extract only strings from ['a',1,'b',2,'c'].

const mixedArray = ['a', 1, 'b', 2, 'c'];

const onlyStrings = mixedArray.filter(item => typeof item === 'string');

console.log("Original array:", mixedArray);
console.log("Only strings:", onlyStrings);
