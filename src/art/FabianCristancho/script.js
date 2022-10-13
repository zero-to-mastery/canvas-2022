var canvas = document.getElementById('jack');
var context = canvas.getContext('2d');

context.beginPath();
context.fillStyle = '#e3dac9';

context.beginPath();
context.fillRect(265, 200, 33, 60);
context.fill();

context.ellipse(280, 110, 97, 90, Math.PI/2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.fillStyle = '#000';
context.ellipse(240, 90, 30, 37, Math.PI/90, 0, 2*Math.PI);
context.ellipse(320, 90, 30, 37, Math.PI/-90, 0, 2*Math.PI);
context.fill();

context.beginPath();
context.ellipse(270, 130, 5, 10, Math.PI/6, 0, 2*Math.PI);
context.ellipse(270, 130, 5, 10, Math.PI/6, 0, 2*Math.PI);
context.ellipse(290, 130, 5, 10, Math.PI/-6, 0, 2*Math.PI);
context.fill();

context.fillStyle = '#000';
context.beginPath();
context.ellipse(280, 320, 90, 90, Math.PI, 0, 2*Math.PI);
context.fill();

context.fillStyle = '#fff';
context.beginPath();
context.ellipse(280, 300, 50, 70, Math.PI, 0, 2*Math.PI);
context.fill();

context.fillStyle = '#171716';
context.beginPath();
context.ellipse(280, 250, 20, 40, Math.PI/2, 0, 2*Math.PI);
context.fill();

context.beginPath();
context.arc(280, 100, 85, (160*Math.PI)/180, 380 * (2*Math.PI)/360, true);
context.lineWidth = 5;
context.strokeStyle = '#000';
context.strokeStyle = '#171716';
context.stroke();

context.beginPath();
context.arc(280, 109, 80, (160*Math.PI)/180, 380 * (2*Math.PI)/360, true);
context.stroke();

context.beginPath();
context.arc(280, 118, 75, (160*Math.PI)/180, 380 * (2*Math.PI)/360, true);
context.stroke();

context.lineWidth = 2;

drawLine(207, 130, 209, 140);
drawLine(215, 137, 216, 154);
drawLine(230, 150, 232, 170);
drawLine(245, 160, 246, 175);
drawLine(260, 167, 261, 185);
drawLine(275, 168, 276, 185);
drawLine(290, 168, 291, 185);
drawLine(305, 167, 308, 185);
drawLine(320, 160, 325, 180);
drawLine(335, 148, 338, 167);
drawLine(348, 130, 352, 147);
drawLine(357, 120, 363, 135);

drawLine(215, 170, 216, 178);
drawLine(230, 185, 232, 193);
drawLine(250, 196, 252, 203);
drawLine(270, 202, 271, 207);
drawLine(300, 200, 301, 205);
drawLine(320, 192, 322, 196);
drawLine(345, 170, 347, 175);

context.strokeStyle = '#c4bdaf';
context.lineWidth = 3;
drawLine(262, 118, 245, 138);
drawLine(298, 118, 318, 138);

function drawLine(x, y, xLine, yLine){
   context.beginPath();
   context.moveTo(x, y);
   context.lineTo(xLine, yLine);
   context.stroke();
}