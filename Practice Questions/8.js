// Question 8: Create a counter using closure that increments by a custom step value.

function createCounter(step = 1) {
    let count = 0;

    return function () {
        count += step;
        console.log(`Counter: ${count}`);
        return count;
    };
}

const incrementByOne = createCounter(1);
incrementByOne();
incrementByOne();

const incrementByFive = createCounter(5);
incrementByFive();
incrementByFive();
incrementByFive();
