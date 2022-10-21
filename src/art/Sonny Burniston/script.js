let drawing = document.getElementById("drawing");
let c = drawing.getContext("2d");


c.beginPath();
c.fillStyle="red";
c.strokeStyle="#000";
c.lineWidth=2;
c.moveTo(200, 50);
c.lineTo(50, 200);
c.lineTo(350, 200);
c.lineTo(200, 50);
c.fillRect(50, 200, 300, 75);
c.fill();
c.stroke();
c.closePath();