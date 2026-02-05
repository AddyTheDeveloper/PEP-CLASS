// Question 20: Highlight only the clicked list item using event handling.

const myList = document.getElementById("myList");

myList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        const allItems = myList.querySelectorAll("li");
        allItems.forEach(item => item.classList.remove("highlight"));
        event.target.classList.add("highlight");
    }
});
