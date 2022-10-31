var canvasElement = document.getElementById("sarthakCzechiaFlagCanvas");
var ctx = canvasElement.getContext("2d");

ctx.beginPath();
ctx.moveTo(0, 145);
ctx.lineTo(0, 5);
ctx.lineTo(130, 75);
ctx.closePath();
ctx.fillStyle = '#ff0000';
ctx.fillRect(0, 75, 1000, 75);
ctx.lineWidth = 10;
ctx.strokeStyle = '#1467b5';
ctx.stroke();
ctx.fillStyle = "#1467b5";
ctx.fill();

