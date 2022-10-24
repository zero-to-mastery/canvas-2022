const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let topY = 200;
let topVelocity = 4;
let botY = 400;
let botVelocity = 4;
let radius = 50;

function animateTop() {
  requestAnimationFrame(animateTop);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  ctx.beginPath();
  ctx.arc(innerWidth / 2, topY, radius, Math.PI, 0, false);
  ctx.strokeStyle = "orange";
  ctx.stroke();

  if (topY + radius === innerHeight / 2) {
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.shadowBlur = 20;
    ctx.shadowColor = "lightblue";
    animateTop.pause();
    ctx.closePath();
  }

  topY += topVelocity;
}

animateTop();
