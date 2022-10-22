var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.moveTo(60,100);
ctx.bezierCurveTo(60,250,240,250,240,100);
ctx.fillStyle = '#0047AB';
ctx.fill();

ctx.scale(3,1);
ctx.beginPath();
ctx.arc(50, 100, 30, 0, 2*Math.PI);
ctx.fillStyle = '#0047AB';
ctx.fill();

ctx.beginPath();
ctx.arc(50, 100, 27, 0, 2*Math.PI);
ctx.fillStyle = '#0047AB';
ctx.fill();

ctx.beginPath();
ctx.arc(50, 110, 25, 0, Math.PI, true);
ctx.fillStyle = '#0096FF';
ctx.fill();
ctx.beginPath();
ctx.arc(50, 102, 26, 0.1*Math.PI, .9*Math.PI);
ctx.fillStyle = '#0096FF';
ctx.fill();
