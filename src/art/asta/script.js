
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');


let rect1 = { x: 50, y: 50, dx: 5, dy: 3 };
let rect2 = { x: 150, y: 150, dx: 3, dy: 5 };
let rect3 = { x: 250, y: 250, dx: 4, dy: 6 };


function drawRectangles() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);


  ctx.fillStyle = '#FF5733';
  ctx.fillRect(rect1.x, rect1.y, 50, 50);
  ctx.fillStyle = '#FFE733';
  ctx.fillRect(rect2.x, rect2.y, 50, 50);
  ctx.fillStyle = '#33FFBD';
  ctx.fillRect(rect3.x, rect3.y, 50, 50);
}


function updateRectangles() {
 
  rect1.x += rect1.dx;
  rect1.y += rect1.dy;
  rect2.x += rect2.dx;
  rect2.y += rect2.dy;
  rect3.x += rect3.dx;
  rect3.y += rect3.dy;


  if (rect1.x + 50 > canvas.width || rect1.x < 0) {
    rect1.dx = -rect1.dx;
  }
  if (rect1.y + 50 > canvas.height || rect1.y < 0) {
    rect1.dy = -rect1.dy;
  }
  if (rect2.x + 50 > canvas.width || rect2.x < 0) {
    rect2.dx = -rect2.dx;
  }
  if (rect2.y + 50 > canvas.height || rect2.y < 0) {
    rect2.dy = -rect2.dy;
  }
  if (rect3.x + 50 > canvas.width || rect3.x < 0) {
    rect3.dx = -rect3.dx;
  }
  if (rect3.y + 50 > canvas.height || rect3.y < 0) {
    rect3.dy = -rect3.dy;
  }
}


function animate() {
  requestAnimationFrame(animate);
  updateRectangles();
  drawRectangles();
}

animate();
