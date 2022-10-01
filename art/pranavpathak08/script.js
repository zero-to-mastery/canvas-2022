const canvas = document.getElementById('canvasid');

const ctx = canvas.getContext("2d");

ctx.beginPath();

ctx.fillStyle = "blue"
ctx.fillRect(150, 150, 200, 200);
ctx.fillStyle = "red";
ctx.fillRect(200, 75, 100, 75);
ctx.arc(250, 112.5, 25, 0, 2 * Math.PI);
ctx.fillStyle = "brown";
ctx.fillRect(125, 150, 25, 150);
ctx.fillRect(350, 150, 25, 150);
ctx.fillStyle = "wheat";
ctx.fillRect(125, 300, 25, 25);
ctx.fillRect(350, 300, 25, 25);
ctx.fillStyle = "orange";
ctx.arc(250, 112.5, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "darkblue";
ctx.fillRect(175, 350, 50, 90);
ctx.fillRect(275, 350, 50, 90);
ctx.fillStyle = "brown";
ctx.fillRect(150, 440, 75, 25);
ctx.fillRect(275, 440, 75, 25);
ctx.fillStyle = "orange";
ctx.font = '24px roboto';
ctx.fillText("Hacktober Fest", 168, 200);
ctx.font = '60px MV Boli';
ctx.fillText("2022", 170, 270);
ctx.fill();
