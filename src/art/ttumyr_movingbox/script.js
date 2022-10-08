const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function () {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});

const rect = {
  color: [240, 0, 0],
  colDir: [1, 0, 0],
  colSwitch: 0,
  minW: 100,
  minH: 50,
  maxW: 300,
  maxH: 200,
  width: 150,
  height: 100,
  wDir: -1,
  hDir: -1,
  posX: 0,
  posY: 0,
  velX: 0,
  velY: 2,
  vel: 2,
};

const checkBoundaries = () => {
  if (ctx.getTransform().e > canvas.width - rect.width) rect.velX = -rect.vel;
  if (ctx.getTransform().e <= 0) rect.velX = rect.vel;
  if (ctx.getTransform().f > canvas.height - rect.height) rect.velY = -rect.vel;
  if (ctx.getTransform().f <= 0) rect.velY = rect.vel;
  if (rect.color[rect.colSwitch] > 254) rect.colDir[rect.colSwitch] = -1;
  if (rect.color[rect.colSwitch] < 1) {
    rect.color[rect.colSwitch] = 0;
    rect.colDir[rect.colSwitch] = 1;
    if (rect.colSwitch > 1) rect.colSwitch = 0;
    else rect.colSwitch++;
  }
  if (rect.width < rect.minW) rect.wDir = 1 + Math.random();
  if (rect.height < rect.minH) rect.hDir = 1 + Math.random();
  if (rect.width > rect.maxW) rect.wDir = -1 - Math.random();
  if (rect.height > rect.maxH) rect.hDir = -1 - Math.random();
  setRectProps();
};
const setRectProps = () => {
  rect.width = rect.width + rect.wDir;
  rect.height = rect.height + rect.hDir;
  rect.color[rect.colSwitch] += rect.colDir[rect.colSwitch];
};
const draw = () => {
  checkBoundaries();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.translate(rect.velX, rect.velY);
  ctx.fillStyle = `rgb(${rect.color})`;
  ctx.fillRect(rect.posX, rect.posY, rect.posX + rect.width, rect.posY + rect.height);
  ctx.stroke();
  requestAnimationFrame(draw);
};

window.requestAnimationFrame(draw);
