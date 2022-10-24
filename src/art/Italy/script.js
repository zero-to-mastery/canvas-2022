var canvasElement = document.getElementById("myCanvas");
var ctx = canvasElement.getContext("2d");

ctx.beginPath();
ctx.fillStyle = '#008C45';
ctx.fillRect(0, 0, 100, 150);
ctx.fillStyle = '#F4F9FF';
ctx.fillRect(100, 0, 100, 150);
ctx.fillStyle = "#CD212A";
ctx.fillRect(200, 0, 100, 150);
ctx.fill();