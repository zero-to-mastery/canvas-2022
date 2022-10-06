var canvas = document.querySelector('canvas')
const dark = document.querySelector('button')
canvas.width = 307
canvas.height = 307
var w = 307;
var h = 307
var c = canvas.getContext('2d');

c.beginPath();
c.moveTo(0,h);
c.lineTo(w/6,h/2)
c.stroke()
c.lineTo(100,h/1.4)
c.strokeStyle = "white"
c.fillStyle = "white"
c.fill()
c.stroke()
c.lineTo(160,h/3)
c.fillStyle = "white"
c.fill()
c.stroke()
c.lineTo(200,h/2)
c.fillStyle = "white"
c.fill()
c.stroke()
c.lineTo(260,h/7)
c.fillStyle = "white"
c.fill()
c.stroke()

c.lineTo(w,h/2.1)
c.fillStyle = "white"
c.fill()
c.stroke()
c.beginPath();
c.moveTo(w,h/2.1)
c.lineTo(400,h);
c.strokeStyle = "green"
c.fillStyle = "green"
c.fill()
c.stroke();
c.lineTo(1,h);
c.strokeStyle = "green"
c.fillStyle = "green"
c.fill()
c.stroke();
c.beginPath()
c.arc(100, 75, 20, 0, 2 * Math.PI);
c.strokeStyle = "orange"
c.fillStyle = "orange"
c.fill();

c.stroke();

function setDark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    
  }