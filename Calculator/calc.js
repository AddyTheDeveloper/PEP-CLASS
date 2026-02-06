const display = document.getElementById("display")
const buttons = document.querySelectorAll("button")

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.innerText

    if (value === "C") {
      display.value = ""
    } 
    else if (value === "=") {
      display.value = eval(display.value)
    } 
    else {
      display.value += value
    }
  })
})
