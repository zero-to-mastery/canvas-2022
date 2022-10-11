var canvas = document.getElementById("shapescanvas");
canvas.height=100;
canvas.width=200;
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);

ctx.moveTo(20, 0);
ctx.lineTo(40, 30);
ctx.lineTo(0, 30);
ctx.lineTo(20, 0);

ctx.fillStyle = '#ae4445';
ctx.fill();

ctx.stroke();