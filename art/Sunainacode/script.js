var canvasElement = document.getElementById("myCanvas");
var ctx = canvasElement.getContext("2d");

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(50, 100);
ctx.lineTo(75, 75);
ctx.closePath();

ctx.lineWidth = 10;
ctx.strokeStyle = '#ffffff';
ctx.stroke();
ctx.font = "40px Arial";
ctx.fillStyle = "white"
ctx.fillText("YouTube", 125, 90);
ctx.fillStyle = "#ffffff";
ctx.fill();