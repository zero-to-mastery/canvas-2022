let canvas = document.getElementById('Brazil')
let c = canvas.getContext('2d');

c.fillStyle = '#16B83E'
c.fillRect(0,0,canvas.width, canvas.height)

c.fillStyle = '#FFE11F'
c.moveTo(250,0)
c.lineTo(0,170)
c.lineTo(500,170)
c.lineTo(250, 0)
c.fill()

c.fillStyle = '#FFE11F'
c.moveTo(250,330)
c.lineTo(0,170)
c.lineTo(500,170)
c.lineTo(250, 330)
c.fill()

