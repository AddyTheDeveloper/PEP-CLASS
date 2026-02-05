// Question 1: Create a function createGreeting(name) that returns a function which prints a greeting using the given name.

function createGreeting(name) {
    return function () {
        console.log(`Hello, ${name}! Welcome!`);
    };
}

const greetJohn = createGreeting("John");
greetJohn();

const greetAlice = createGreeting("Alice");
greetAlice();
