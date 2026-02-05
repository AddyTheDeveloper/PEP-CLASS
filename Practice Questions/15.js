// Question 15: Log selected value when a dropdown value changes.

const dropdown = document.getElementById("myDropdown");

dropdown.addEventListener("change", function () {
    console.log("Selected value:", dropdown.value);
});
