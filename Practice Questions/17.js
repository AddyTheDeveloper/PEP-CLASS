// Question 17: Increase font size of text when a button is clicked.

const myText = document.getElementById("myText");
const increaseButton = document.getElementById("increaseButton");

let fontSize = 16;

increaseButton.addEventListener("click", function () {
    fontSize += 2;
    myText.style.fontSize = fontSize + "px";
});
