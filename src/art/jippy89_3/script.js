function start () {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    draw(canvas)
  }
}

/** Do your actual drawings here! */
function draw(canvas) {
  const ctx = canvas.getContext('2d');

  // Digital Ocean Logo
  ctx.beginPath()
  ctx.strokeStyle = 'white'
  ctx.lineWidth = 70
  ctx.arc(300, 300, 150, Math.PI, Math.PI / 2)
  ctx.stroke()

  ctx.fillStyle = 'white'
  ctx.fillRect(230, 350, 70, 70)
  ctx.fillRect(180, 420, 50, 50)
  ctx.fillRect(135, 375, 45, 45)
}