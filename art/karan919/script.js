const canvas = document.getElementById("flag");

const ctx = canvas.getContext("2d");

const radius = 40;
const centreX = 200;
const centreY = 150;

ctx.fillStyle = "#ff9933";
ctx.fillRect(0, 0, 400, 100);

ctx.fillStyle = "white";
ctx.fillRect(0, 100, 400, 100);

ctx.fillStyle = "green";
ctx.fillRect(0, centreX, 400, 100);

ctx.beginPath();
ctx.arc(centreX, centreY, radius, 0, Math.PI * 2, false);
ctx.strokeStyle = "#000080";
ctx.lineWidth = 3;
ctx.stroke();

for (let i = 0; i < Math.PI * 2 - Math.PI / 12; i += Math.PI / 12) {
  ctx.beginPath();
  ctx.moveTo(centreX, centreY);
  ctx.lineTo(centreX + radius * Math.sin(i), centreY + radius * Math.cos(i));
  ctx.strokeStyle = "#000080";
  ctx.lineWidth = 2;
  ctx.stroke();
}
