// Question 13: Disable a submit button until terms checkbox is selected.

const termsCheckbox = document.getElementById("termsCheckbox");
const submitButton = document.getElementById("submitButton");

termsCheckbox.addEventListener("change", function () {
    submitButton.disabled = !termsCheckbox.checked;
});
