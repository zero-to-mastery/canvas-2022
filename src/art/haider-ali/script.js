const canvas = document.querySelector('#art')
canvas.width = 200
canvas.height = 200
const ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.fillStyle = "#FFFF00"
ctx.arc(100, 100, 100, 0, 2 * Math.PI)
ctx.fill()
ctx.stroke()

ctx.beginPath()
ctx.fillStyle = "#FFFFFF"
ctx.rect(50,25, 100, 30)
ctx.fill()

ctx.beginPath()
ctx.font = "20px Arial"

ctx.strokeText("ZTM", 80, 45)

ctx.beginPath()
ctx.fillStyle = "#000";
ctx.arc(50, 80, 20, 0, 2 * Math.PI)
ctx.fill()



ctx.beginPath()
ctx.fillStyle = "#000";
ctx.arc(150, 81, 20, 0, 2 * Math.PI)
ctx.fill()


ctx.beginPath()
ctx.arc(100, 150, 30, 50, 3 * Math.PI)
ctx.stroke()



const url = canvas.toDataURL()
console.log(url)