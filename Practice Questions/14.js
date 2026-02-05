// Question 14: Change background color of a box on mouse enter and mouse leave.

const colorBox = document.getElementById("colorBox");

colorBox.addEventListener("mouseenter", function () {
    colorBox.style.backgroundColor = "lightcoral";
});

colorBox.addEventListener("mouseleave", function () {
    colorBox.style.backgroundColor = "lightblue";
});
