
const canvas = document.querySelector("#myCanvas")

const width = 500
const height = 500

canvas.width = width
canvas.height = height

const ctx = canvas.getContext("2d")


const drawFillRect = (x, y, width, height, hexColor, ctx) => {
    ctx.beginPath()
    ctx.rect(x, y, width, height)
    ctx.fillStyle = hexColor
    ctx.fill()
}

drawFillRect(20, 20, 460, 460, "#1c2ab8", ctx)



drawFillRect((width / 2) - 100, (height / 2) - 150, 200, 300, "#F26D85", ctx)


drawFillRect(280, 20, 120, 190, "#E97FF4", ctx)

ctx.beginPath()
ctx.arc(347, 260, 50, 0, 2 * Math.PI)
ctx.fillStyle = "#1cb700"
ctx.fill()

drawFillRect(80, 300, 100, 110, "#A4F3F8", ctx)

ctx.beginPath();
ctx.moveTo(250, 400);
ctx.lineTo(200, 450);
ctx.lineTo(300, 450);
ctx.closePath()
ctx.fillStyle = "#B6FAC1"
ctx.fill();




