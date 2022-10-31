const canvas = document.getElementById("canvas")
const canvas2 = document.getElementById("canvas2")
const ctx = canvas.getContext("2d")
const ctx2 = canvas.getContext("2d")

let x = 1

function object() {
  ctx.beginPath()
  ctx.arc(200, 200, 100, 0, Math.PI * 2, true)
  ctx.fillStyle = "rgb(255, 189, 0)"
  ctx.fill()
  ctx.lineWidth = 2
  ctx.strokeStyle = "black"
  ctx.shadowBlur = 10
  ctx.shadowColor = "black"
  ctx.stroke()
}

function blackHole() {
  ctx2.beginPath()
  ctx2.arc(200, 200, 20, 0, Math.PI * 2, true)
  ctx2.fillStyle = "rgb(180, 189, 0)"
  ctx2.fill()
  ctx2.lineWidth = x
  ctx2.strokeStyle = "black"
  ctx2.shadowBlur = 10
  ctx2.shadowColor = "black"
  ctx2.stroke()
  x++
}

function animate() {
  object()
  blackHole()
  if (x > 200) return
  requestAnimationFrame(animate)
}

animate()
