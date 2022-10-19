
var canvass = document.getElementById("myCanvas");
var ctx = canvass.getContext("2d");


// Creating Gradient
var grad = ctx.createRadialGradient(65,20,20,80,80,100);
grad.addColorStop(0,"blue");
grad.addColorStop(1,"violet");

ctx.fillStyle= grad;
ctx.fillRect(80,100,130,80);
