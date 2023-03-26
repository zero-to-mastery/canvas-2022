let c = document.querySelector('#myArt')
let ctx = c.getContext('2d')

// create gradient
let grd = ctx.createLinearGradient(200, 0, 200, 200)
grd.addColorStop(0, 'violet')
grd.addColorStop(1, 'grey')

ctx.fillStyle = grd
ctx.fillRect(0, 0, 200, 200)

// draw a line
ctx.moveTo(0, 0)
ctx.lineTo(200, 200)
ctx.stroke()

// draw an array of lines
let widthRange = 200
let heightRange = 200
let lineArray = [
  [0, 0, 200, 0],
  [0, 0, 200, 50],
  [0, 0, 200, 100],
  [0, 0, 200, 150],
  [200, 0, 0, 200],
  [100, 0, 200, 100],
  [100, 0, 100, 100],
  [100, 100, 200, 100]
]

lineArray.forEach(item => {
  ctx.moveTo(item[0], item[1])
  ctx.lineTo(item[2], item[3])
  ctx.stroke()
})

// draw a circle
ctx.beginPath()
ctx.arc(150, 50, 50, 0, 2 * Math.PI)
ctx.stroke()

// fill a triangle
ctx.fillStyle = 'grey'
ctx.beginPath()
ctx.beginPath()
ctx.moveTo(150, 50)
ctx.lineTo(200, 100)
ctx.lineTo(100, 100)
ctx.closePath()
ctx.fill()

// now for the grant finale: draw a transparent shape

let grd0 = ctx.createLinearGradient(0, 100, 200, 100)
grd0.addColorStop(0, '#cc00ff')
grd0.addColorStop(1, '#6600cc')

ctx.globalAlpha = 0.7

ctx.fillStyle = grd0
ctx.beginPath()
ctx.moveTo(0, 0)
ctx.lineTo(200, 100)
ctx.lineTo(0, 200)
ctx.closePath()
ctx.fill()
