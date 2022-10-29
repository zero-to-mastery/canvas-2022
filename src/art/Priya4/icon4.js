var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100, 75, 48, 0,  2*Math.PI);
ctx.fillStyle = "#36486b";
ctx.fill();
ctx.beginPath();
ctx.arc(100, 75, 45, 0, 2 * Math.PI);
ctx.fillStyle = "#ffef96";
ctx.fill();

ctx.beginPath();
ctx.arc(100, 75, 45, 0,  Math.PI);
ctx.fillStyle = "#A4C639";
ctx.fill();

ctx.beginPath();
ctx.arc(100, 75, 30, 0,  2*Math.PI);
ctx.fillStyle = "#36486b";
ctx.fill();
ctx.beginPath();
ctx.rect(85, 64, 30, 20);
ctx.fillStyle = "#9fa9a3";
ctx.fill();
