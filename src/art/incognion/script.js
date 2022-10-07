let canvas = document.getElementById('shower')
let ctx = canvas.getContext('2d')

canvas.width = document.body.offsetWidth
canvas.height = document.body.offsetHeight

let w = canvas.width
let h = canvas.height

let rows = Array(w).fill(0)

function shower() {

    ctx.fillStyle = '#0001'
    ctx.fillRect(0, 0, w, h)

    ctx.fillStyle = 'aqua'
    ctx.font = '16pt f'

    rows.forEach((y, i) => {
        ctx.fillText(0, i * 16, y)
        if (y > 400 + Math.random() * 10000) {
            rows[i] = 3
        } else rows[i] = y + 3
    })
}
setInterval(shower, 3)