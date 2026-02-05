// Question 12: Display text live as the user types in an input field.

const textInput = document.getElementById("textInput");
const displayText = document.getElementById("displayText");

textInput.addEventListener("input", function () {
    displayText.textContent = textInput.value;
});
