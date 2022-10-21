var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//radius of windmill
var radius = canvas.height / 3;

//field
ctx.fillStyle = "#008080";
ctx.fillRect(0, 270, 400, 400);

//circle
ctx.globalAlpha = 0.5
ctx.beginPath();
ctx.arc(200, 170, radius, 0, 2 * Math.PI, false);
ctx.fillStyle = '#bcb8f0';
ctx.fill();
ctx.strokeStyle = '#bcb8f0';
ctx.stroke();

//windmill body
ctx.globalAlpha = 1;
ctx.beginPath();
ctx.lineWidth = 10;
ctx.moveTo(200,170);
ctx.lineTo(197,350);
ctx.strokeStyle = "#f1f1f1";
ctx.stroke();

ctx.moveTo(200,170);
ctx.lineTo(203,350);
ctx.stroke();


//radius of windmill
var radius = canvas.height / 3;

//vanes
ctx.translate(200,170);
ctx.lineCap = "round";

ctx.beginPath();
ctx.lineWidth = 9;
ctx.moveTo(0,0);
ctx.rotate(110*Math.PI / 180);
ctx.lineTo(0,-100 );
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 9;
ctx.moveTo(0,0);
ctx.rotate(120*Math.PI / 180);
ctx.lineTo(0,-100 );
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 9;
ctx.moveTo(0,0);
ctx.rotate(120*Math.PI / 180);
ctx.lineTo(0,-100 );
ctx.stroke();



