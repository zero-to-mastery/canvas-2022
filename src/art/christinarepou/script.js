var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createLinearGradient(50, 0, 300, 100);
grd.addColorStop(0, "red");
grd.addColorStop(1, "blue");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 500, 300);

ctx.font = "70px Arial";
ctx.strokeText("We", 20, 60);

ctx.beginPath();
ctx.arc(105, 140, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(185, 140, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.moveTo(150, 220);
ctx.lineTo(78, 170);
ctx.stroke();

ctx.moveTo(210, 170);
ctx.lineTo(150, 220);
ctx.stroke();

ctx.font = "40px Arial";
ctx.strokeText("Hackoctoberfest", 5, 280);