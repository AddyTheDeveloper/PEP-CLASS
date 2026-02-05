// Question 4: Create a function createUser(role) that returns a function to check role-based access.

function createUser(role) {
    return function (requiredRole) {
        if (role === requiredRole) {
            console.log(`Access granted for ${role}`);
            return true;
        } else {
            console.log(`Access denied. Required: ${requiredRole}, Current: ${role}`);
            return false;
        }
    };
}

const adminUser = createUser("admin");
adminUser("admin");
adminUser("user");

const normalUser = createUser("user");
normalUser("admin");
normalUser("user");
