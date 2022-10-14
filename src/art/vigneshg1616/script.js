// Owl Eyebrows

var c = document.getElementById("canvas-eyebrow-1");
var ctx = c.getContext("2d");
ctx.moveTo(0, 10);
ctx.lineTo(350, 80);
ctx.lineWidth = 10;
ctx.stroke();

var c = document.getElementById("canvas-eyebrow-2");
var ctx = c.getContext("2d");
ctx.moveTo(50, 50);
ctx.lineTo(450, 0);
ctx.lineWidth = 10;
ctx.stroke();

// Owl Eyes
var d = document.getElementById("canvas-1");
var ctx = d.getContext("2d");

// Create gradient
var grd = ctx.createRadialGradient(75,50,15,90,40,50);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

var e = document.getElementById("canvas-2");
var ctx = e.getContext("2d");
ctx.beginPath();
ctx.arc(96,50,95,0,2*Math.PI);
ctx.lineWidth = 3;
ctx.stroke();

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(13,7,150,85);


var f = document.getElementById("canvas-3");
var ctx = f.getContext("2d");

// Create gradient
var grd = ctx.createRadialGradient(75,50,15,90,40,50);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

var g = document.getElementById("canvas-4");
var ctx = g.getContext("2d");
ctx.beginPath();
ctx.arc(96,50,95,0,2*Math.PI);
ctx.lineWidth = 3;
ctx.stroke();

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(13,7,150,85);

var h = document.getElementById("canvas-5");
const context = h.getContext("2d");

context.beginPath()
context.moveTo(0, 50)
context.lineTo(50, 0)
context.lineTo(100, 50)
context.lineTo(0, 50)
context.lineWidth = 3;
context.stroke()
context.closePath()


var i = document.getElementById("canvas-6");
var ctx = i.getContext("2d");
ctx.beginPath();
ctx.arc(98, 0, 96, 0, 2 * Math.PI);
ctx.lineWidth = 3;
ctx.stroke();