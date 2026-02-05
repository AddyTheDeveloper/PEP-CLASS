// Question 19: Prevent form submission and display a custom message.

const myForm = document.getElementById("myForm");
const message = document.getElementById("message");

myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    message.textContent = "Form submission prevented! Custom message displayed.";
    message.style.color = "green";
});
