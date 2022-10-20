var canvasElement = document.getElementById("myCanvas");
var ctx = canvasElement.getContext("2d");

ctx.beginPath();
ctx.fillStyle = '#CE1126';
ctx.fillRect(0, 0, 1000, 75);
ctx.fillStyle = '#FFFFFF';
ctx.fillRect(0, 75, 1000, 100);
ctx.fill();