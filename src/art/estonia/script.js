var canvasElement = document.getElementById("myCanvas");
var ctx = canvasElement.getContext("2d");

ctx.beginPath();
ctx.fillStyle = '#0072CE';
ctx.fillRect(0, 0, 1000, 50);
ctx.fillStyle = '#000000';
ctx.fillRect(0, 50, 1000, 100);
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 100, 1000, 150);
ctx.fill();