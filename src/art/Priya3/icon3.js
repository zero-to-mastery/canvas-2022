var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.rect(20, 20, 150, 100);
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.rect(60, 65, 75, 15);
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.rect(90, 36, 15, 75);
ctx.fillStyle = "white";
ctx.fill();
