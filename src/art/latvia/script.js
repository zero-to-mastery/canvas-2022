var canvasElement = document.getElementById("myCanvas");
var ctx = canvasElement.getContext("2d");

ctx.beginPath();
ctx.fillStyle = '#9D2235';
ctx.fillRect(0, 0, 1000, 50);
ctx.fillStyle = '#FFFFFF';
ctx.fillRect(0, 60, 1000, 100);
ctx.fillStyle = "#9D2235";
ctx.fillRect(0, 90, 1000, 150);
ctx.fill();