var centreX = 100;var centreY = 100;
var radius = 75;
var rotateAngle = 18 * Math.PI/360;
var startAngle = 18 * Math.PI/360;
var endAngle = 18 * Math.PI/360;
var counter = 0;
var animFlag;
var colours = ["black","white", "black", "white", "black", "white", "black", "white", "black", "white","black","white","black","white", "black", "white", "black", "white", "black", "white", "black", "white","black"];

function init() {
var canvas = document.getElementById("canvas");
if (canvas.getContext)
{
var ctx = canvas.getContext("2d");
ctx.lineWidth = 3.0;
ctx.fillStyle = "teal";
ctx.fillRect(200, 100, 75, 20);
ctx.fillStyle = "white";
ctx.font = "12px verdana";
ctx.fillText("Pedal", 215, 114);
drawWheel();
}
}

function drawWheel()
{
var canvas = document.getElementById("canvas");
if (canvas.getContext)
{
var ctx = canvas.getContext("2d");
for(i = 0; i < 20; i++)
{
ctx.fillStyle = colours[i];
ctx.translate(centreX,centreY);
ctx.rotate(rotateAngle);
ctx.translate(-centreX,-centreY);
ctx.beginPath();
ctx.moveTo(centreX, centreY);
ctx.lineTo(centreX+radius, centreY);
ctx.arc(centreX,centreY,radius,startAngle,endAngle,false);
ctx.closePath();
ctx.fill();
}
}
}

function rotateWheel(rnd)
{
var canvas = document.getElementById("canvas");
if (canvas.getContext)
{
var ctx = canvas.getContext("2d");
ctx.translate(centreX,centreY);
ctx.rotate(rotateAngle);
ctx.translate(-centreX,-centreY);
drawWheel();
counter++;
if(counter>rnd)
{
counter = 0;
clearInterval(animFlag);
}
}
}

function mouseClick(event)
{
var x = event.clientX;
var y = event.clientY;
var rnd = Math.ceil(Math.random() * 100);
if((x > 200) &&(x < 275) && (y>100) && (y<120))
animFlag = setInterval(function() {rotateWheel(rnd)},125);
}
window.addEventListener("click",mouseClick,false);
