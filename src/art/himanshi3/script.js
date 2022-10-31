var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.rect(10, 10, 100, 100);
ctx.fillStyle = "pink";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.rect(20, 20, 80,80);
ctx.fillStyle = "blue";
ctx.fill();

ctx.beginPath();
ctx.rect(30, 30, 60,60);
ctx.fillStyle = "orange";
ctx.fill();

ctx.beginPath();
ctx.rect(40, 40, 40,40);
ctx.fillStyle = "green";
ctx.fill();

ctx.beginPath();
ctx.rect(50, 50, 20,20);
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.rect(60, 60, 1,1);
ctx.fillStyle = "red";
ctx.fill();