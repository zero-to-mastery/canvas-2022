let canvas = document.getElementById("artCanvas");
let ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

ctx.strokeStyle = "black";
ctx.lineWidth = 10;


// Blue squares
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.rect(-5, -5, 60, 100);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.rect(700, -5, 105, 120);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.rect(620, 115, 80, 60);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.rect(-5, 395, 60, 150);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.rect(55, 105, 150, 150);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.rect(205, 285, 130, 50);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.rect(515, 375, 295, 170);
ctx.fill();
ctx.stroke();

// Yellow squares
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.rect(55, -5, 150, 110);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.rect(-5, 155, 60, 240);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.rect(205, 175, 310, 110);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.rect(620, 175, 190, 200);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.rect(205, 545, 100, 65);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.rect(605, 545, 100, 65);
ctx.fill();
ctx.stroke();

// Red squares
ctx.fillStyle = "red";
ctx.beginPath();
ctx.rect(420, -5, 200, 180);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.rect(335, 285, 70, 260);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.rect(515, 230, 105, 145);
ctx.fill();
ctx.stroke();

// Single lines
ctx.fillStyle = "black";
ctx.beginPath();
ctx.rect(50, 550, 10, 50);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.rect(200, 340, 10, 260);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.rect(0, 540, 800, 10);
ctx.fill();