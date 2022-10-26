function start () {
  const canvas = document.getElementById('canvas');

  draw(canvas)
}

function draw(canvas) {
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    const radius = 90
    
    ctx.beginPath()
    ctx.lineWidth = 40
    ctx.strokeStyle = '#ea4335'
    ctx.arc(150, 150, radius, - Math.PI / 4, Math.PI + Math.PI / 5, true)
    ctx.stroke()

    ctx.beginPath()
    ctx.strokeStyle = '#f0b501'
    ctx.arc(150, 150, radius, Math.PI + Math.PI / 5, Math.PI - Math.PI / 8, true)
    ctx.stroke()

    ctx.beginPath()
    ctx.strokeStyle = '#2ba24c'
    ctx.arc(150, 150, radius, Math.PI - Math.PI / 8, 1, true)
    ctx.stroke()

    ctx.beginPath()
    ctx.strokeStyle = '#3b7ded'
    ctx.arc(150, 150, radius, 1, 0 - Math.PI / 30, true)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(250, 160)
    ctx.lineTo(150, 160)
    ctx.stroke()
    ctx.fill()

    ctx.beginPath()
    ctx.clearRect(150, 130, 150, 12)
  }
}
