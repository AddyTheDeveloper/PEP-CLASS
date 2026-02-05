// Question 16: Create a simple image switcher using click events.

const myImage = document.getElementById("myImage");
const switchButton = document.getElementById("switchButton");

const images = [
    "https://via.placeholder.com/300x200/FF0000/FFFFFF?text=Image+1",
    "https://via.placeholder.com/300x200/00FF00/FFFFFF?text=Image+2",
    "https://via.placeholder.com/300x200/0000FF/FFFFFF?text=Image+3"
];

let currentIndex = 0;

switchButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    myImage.src = images[currentIndex];
});
