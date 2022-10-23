const canvas = document.getElementById("logo");
const ctx = canvas.getContext("2d");

// Blue line
ctx.beginPath();
ctx.rect(50, 125, 100, 450);
ctx.fillStyle = "#4086f4";
ctx.fill();

// Green line
ctx.beginPath();
ctx.rect(550, 125, 100, 450);
ctx.fillStyle = "#30a952";
ctx.fill();

// Red line
ctx.beginPath();
ctx.moveTo(50, 125);
ctx.moveTo(150, 125);
ctx.lineTo(350, 300);
ctx.lineTo(550, 125);
ctx.lineTo(650, 125);
ctx.lineTo(650, 200);
ctx.lineTo(350, 400);
ctx.lineTo(50, 200);
ctx.lineTo(50, 125);
ctx.fillStyle = "#eb4132";
ctx.fill();