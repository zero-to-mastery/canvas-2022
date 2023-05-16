const canvas = document.getElementById("tree");
const ctx = canvas.getContext("2d");


var grd = ctx.createLinearGradient(0, 0, 0, 150);
grd.addColorStop(0, "rgba(2, 5, 36)");
grd.addColorStop(1, "rgba(136, 139, 179)");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, 150, 150);


ctx.beginPath();
ctx.arc(75, 50, 25, Math.PI, -Math.PI);
ctx.fillStyle = "rgba(239, 245, 208)";
ctx.fill()


ctx.beginPath();
ctx.moveTo(25, 80);
ctx.lineTo(10, 150);
ctx.lineTo(40, 150);
ctx.lineTo(25, 80);
ctx.fillStyle = "rgba(20, 87, 3)";
ctx.fill();
ctx.strokeStyle= "rgba(150, 235, 162)"
ctx.stroke();


ctx.beginPath();
ctx.moveTo(110, 75);
ctx.lineTo(90, 150);
ctx.lineTo(130, 150);
ctx.lineTo(110, 75);
ctx.fillStyle = "rgba(20, 87, 3)";
ctx.fill();
ctx.strokeStyle= "rgba(150, 235, 162)"
ctx.stroke();

ctx.beginPath();
ctx.moveTo(125, 80);
ctx.lineTo(110, 150);
ctx.lineTo(140, 150);
ctx.lineTo(125, 80);
ctx.fillStyle = "rgba(5, 33, 9)";
ctx.fill();
ctx.strokeStyle= "rgba(150, 235, 162)"
ctx.stroke();

ctx.beginPath();
ctx.moveTo(75, 50);
ctx.lineTo(50, 150);
ctx.lineTo(100, 150);
ctx.lineTo(75, 50);
ctx.fillStyle = "rgba(5, 33, 9)";
ctx.fill();
ctx.strokeStyle= "rgba(150, 235, 162)"
ctx.stroke();

ctx.beginPath();
ctx.moveTo(50, 100);
ctx.lineTo(35, 150);
ctx.lineTo(70, 150);
ctx.lineTo(50, 100);
ctx.fillStyle = "rgba(5, 33, 9)";
ctx.fill();
ctx.strokeStyle= "rgba(150, 235, 162)"
ctx.stroke();

ctx.beginPath();
ctx.moveTo(145, 100);
ctx.lineTo(135, 150);
ctx.lineTo(155, 150);
ctx.lineTo(145, 100);
ctx.fillStyle = "rgba(5, 33, 9)";
ctx.fill();
ctx.strokeStyle= "rgba(150, 235, 162)"
ctx.stroke();

ctx.beginPath();
ctx.moveTo(5, 85);
ctx.lineTo(-10, 150);
ctx.lineTo(25, 150);
ctx.lineTo(5, 85);
ctx.fillStyle = "rgba(5, 33, 9)";
ctx.fill();
ctx.strokeStyle= "rgba(150, 235, 162)"
ctx.stroke();




document.querySelector("body").addEventListener("load", draw());
