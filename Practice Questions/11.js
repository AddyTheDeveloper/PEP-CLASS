// Question 11: Create a button that changes its label text after clicking.

const button = document.getElementById("myButton");

button.addEventListener("click", function () {
    button.textContent = "Clicked!";
});
