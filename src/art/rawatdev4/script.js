const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

//smiley face
ctx.fillStyle = "#FFD700"
ctx.strokeStyle = "grey"
ctx.lineWidth = 2
ctx.beginPath()
ctx.arc(250, 250, 200, 0, 2 * Math.PI)
ctx.shadowOffsetX = 1
ctx.shadowBlur = 40
ctx.shadowColor = "black"
ctx.fill()
ctx.stroke()
ctx.closePath()

//eye1
ctx.fillStyle = "black"
ctx.beginPath()
ctx.arc(250, 220, 30, 0, 2 * Math.PI)
ctx.fill()
ctx.stroke()
ctx.closePath()

// eye 2
ctx.beginPath()
ctx.arc(370, 175, 30, 0, 2 * Math.PI)
ctx.fill()
ctx.stroke()
ctx.closePath()

//mouth
ctx.strokeStyle = "black"
ctx.lineWidth = 5
ctx.beginPath()
ctx.arc(320, 260, 100, 0, -1 * Math.PI - 20)
ctx.strokeStyle = "black"
ctx.stroke()
ctx.closePath()
