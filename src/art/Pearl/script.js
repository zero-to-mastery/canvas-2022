var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createRadialGradient(100,50,50,90,80,90);


grd.addColorStop(0,"green");
grd.addColorStop(1,"yellow");


// Fill with gradient

ctx.fillStyle = grd;
ctx.fillRect(10,10,360,800);
ctx.font = "30px Arial";
ctx.strokeText("Hacktoberfest 2022", 80, 200);
ctx.fillRect(100,100,30,80);
ctx.font = "30px Arial";

