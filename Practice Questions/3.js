// Question 3: Create a function that limits an action to run only a fixed number of times.

function limitAction(fn, limit) {
    let count = 0;

    return function (...args) {
        if (count < limit) {
            count++;
            console.log(`Execution ${count} of ${limit}`);
            return fn(...args);
        } else {
            console.log("Action limit reached!");
        }
    };
}

const limitedGreet = limitAction(() => console.log("Hello!"), 3);
limitedGreet();
limitedGreet();
limitedGreet();
limitedGreet();
