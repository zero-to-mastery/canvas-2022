let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.fillStyle="slategrey";
ctx.strokeStyle="#000";
ctx.lineWidth=2;
ctx.moveTo(200, 50);
ctx.lineTo(50, 200);
ctx.lineTo(350, 200);
ctx.lineTo(200, 50);
ctx.fill();
ctx.stroke();
ctx.closePath();
