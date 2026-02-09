let dragged = null
let correct = 0

document.querySelectorAll(".piece").forEach(p => {
  p.addEventListener("dragstart", () => dragged = p)
})

document.querySelectorAll(".slot").forEach(slot => {
  slot.addEventListener("dragover", e => e.preventDefault())

  slot.addEventListener("drop", () => {
    if (slot.children.length === 0 && dragged.dataset.pos === slot.dataset.pos) {
      slot.appendChild(dragged)
      dragged.style.width = "100%"
      dragged.style.height = "100%"
      correct++
      if (correct === 4) {
        document.getElementById("status").textContent = "🎉 Puzzle Completed!"
      }
    }
  })
})
