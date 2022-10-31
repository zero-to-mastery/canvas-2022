const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

let x = 1

function drawCircle() {
  ctx.fillStyle = "#000000"
  ctx.beginPath()

  for (let i = 0; i < 4; i++) {
    const x = 30 + Math.random() * 120
    const y = 30 + Math.random() * 120

    ctx.beginPath()

    ctx.arc(x + 150, y + 150, 30, 0, Math.PI * 2, false)

    ctx.stroke()
    ctx.fill()
    ctx.fillStyle = `rgba(${x}, ${y}, ${x + y})`
  }
  x = x + 2
}

function animate() {
  if (x > 200) return
  drawCircle()
  requestAnimationFrame(animate)
}

animate()
