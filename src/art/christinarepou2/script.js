var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "bold italic 50px serif";
ctx.fillStyle = "purple";
ctx.fillText("Mickey", 120, 50);
ctx.strokeText("Mickey", 120, 50);

ctx.fillStyle = "black";
//left ear
ctx.beginPath();
ctx.arc(145, 110, 30, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();


//right ear
ctx.beginPath();
ctx.arc(245, 110, 30, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

//head
ctx.beginPath();
ctx.arc(195, 175, 50, 0, 2 * Math.PI);
ctx.stroke();

//left eye
ctx.beginPath();
ctx.arc(175, 170, 15, 0, 2 * Math.PI);
ctx.stroke();

//right eye
ctx.beginPath();
ctx.arc(215, 170, 15, 0, 2 * Math.PI);
ctx.stroke();

//fill left eye
ctx.beginPath();
ctx.arc(182, 170, 7, 0, 2 * Math.PI);
ctx.fill()
ctx.stroke();

//fill right eye
ctx.beginPath();
ctx.arc(222, 170, 7, 0, 2 * Math.PI);
ctx.fill()
ctx.stroke();

//smile
ctx.beginPath();
ctx.arc(195, 195, 20, 0, 1 * Math.PI);
ctx.stroke();

ctx.fillStyle = "palevioletred"
//fill left chick
ctx.beginPath();
ctx.arc(172, 200, 7, 0, 2 * Math.PI);
ctx.fill()
ctx.stroke();

//fill right chick
ctx.beginPath();
ctx.arc(218, 200, 7, 0, 2 * Math.PI);
ctx.fill()
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "bold italic 50px serif";
ctx.fillStyle = "purple";
ctx.fillText("Mouse", 120, 280);
ctx.strokeText("Mouse", 120, 280);