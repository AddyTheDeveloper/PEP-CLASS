// Question 6: Create a simple incremental ID generator using closure.

function createIDGenerator() {
    let id = 0;

    return function () {
        id++;
        return id;
    };
}

const generateID = createIDGenerator();
console.log(generateID());
console.log(generateID());
console.log(generateID());

const anotherGenerator = createIDGenerator();
console.log(anotherGenerator());
