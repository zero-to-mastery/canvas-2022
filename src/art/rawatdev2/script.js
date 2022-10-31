const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

ctx.globalCompositeOperation = "destination-over"
hue = 260

let number = 5
let scale = 10

function draw() {
  let angle = number * 20
  let radius = scale * Math.sqrt(number)
  let positionX = radius * Math.sin(angle) + canvas.width / 2
  let positionY = radius * Math.cos(angle) + canvas.height / 2

  ctx.fillStyle = `hsl(${hue}, 100%, 50%)`
  ctx.strokeStyle = "#3345ee"
  ctx.lineWidth = 5
  ctx.beginPath()
  ctx.arc(positionX, positionY, number, 0, Math.PI * 2)
  ctx.closePath()
  ctx.fill()
  ctx.stroke()

  number++
  hue += 0.5
}

function animate() {
  if (number > 125) return
  draw()
  requestAnimationFrame(animate)
}

animate()
