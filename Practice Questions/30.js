// Question 30: From an array of users, return names of users who are active.

const users = [
    { name: "John", active: true },
    { name: "Alice", active: false },
    { name: "Bob", active: true },
    { name: "Charlie", active: false },
    { name: "Diana", active: true }
];

const activeUserNames = users
    .filter(user => user.active)
    .map(user => user.name);

console.log("All users:", users);
console.log("Active user names:", activeUserNames);
