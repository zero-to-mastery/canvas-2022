// Set up German flag
var flag = document.getElementById("flag");
var fctx = flag.getContext("2d");

flag.width = 300;
flag.height = 200;
drawRect(fctx, 0, 0, flag.width, flag.height / 3, "rgba(0, 0, 0, 1.0)");
drawRect(fctx, 0, flag.height / 3, flag.width, (flag.height * 2) / 3, "rgba(255, 0, 0, 1.0)");
drawRect(fctx, 0, (flag.height * 2) / 3, flag.width, flag.height, "rgba(255, 204, 0, 1.0)");

function drawLine(ctx, startX, startY, endX, endY, color, lineWidth) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.stroke();
}

// Function to draw a rectangle
function drawRect(ctx, startX, startY, width, height, color) {
  ctx.beginPath();
  ctx.rect(startX, startY, width, height);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 1;
  ctx.fill();
  ctx.stroke();
}

// Function to draw a circle
function drawCircle(ctx, centerX, centerY, radius, color) {
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 1;
  // ctx.fill();
  ctx.stroke();
}

// Function to draw a triangle
function drawTriangle(ctx, p1X, p1Y, p2X, p2Y, p3X, p3Y, color) {
  ctx.beginPath();
  ctx.moveTo(p1X, p1Y);
  ctx.lineTo(p2X, p2Y);
  ctx.lineTo(p3X, p3Y);
  ctx.closePath();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 1;
  ctx.fill();
  ctx.stroke();
}

// Function to draw a star
function drawStar(ctx, cx, cy, radius, color) {
  var d1 = Math.sin((2 * Math.PI) / 5) * radius;
  var d2 = Math.cos((2 * Math.PI) / 5) * radius;
  var d3 = Math.sin((2 * Math.PI) / 10) * radius;
  var d4 = Math.cos((2 * Math.PI) / 10) * radius;
  ctx.beginPath();
  ctx.moveTo(cx, cy - radius);
  ctx.lineTo(cx + d3, cy + d4);
  ctx.lineTo(cx - d1, cy - d2);
  ctx.lineTo(cx + d1, cy - d2);
  ctx.lineTo(cx - d3, cy + d4);
  ctx.closePath();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 1;
  ctx.fill();
  ctx.stroke();
}

