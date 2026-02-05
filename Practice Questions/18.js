// Question 18: Increase counter on single click and decrease on double click.

const counter = document.getElementById("counter");
const counterButton = document.getElementById("counterButton");

let count = 0;

counterButton.addEventListener("click", function () {
    count++;
    counter.textContent = count;
});

counterButton.addEventListener("dblclick", function () {
    count -= 2;
    counter.textContent = count;
});
