// Question 7: Store a secret message using closure and allow access only through a returned function.

function createSecret(secretMessage) {
    return function () {
        return secretMessage;
    };
}

const getSecret = createSecret("This is a top secret message!");
console.log(getSecret());
