var canvasElement = document.getElementById("ishanYoutubeCanvas");
var ctx = canvasElement.getContext("2d");

ctx.beginPath();
ctx.moveTo(130, 100);
ctx.lineTo(130, 50);
ctx.lineTo(170, 75);
ctx.closePath();

ctx.lineWidth = 10;
ctx.strokeStyle = '#ffffff';
ctx.stroke();
ctx.fillStyle = "#ffffff";
ctx.fill();