const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.height = innerHeight;
canvas.width = innerWidth;
let w = parseInt(getComputedStyle(canvas).width);
let h = parseInt(getComputedStyle(canvas).height);
let x = 0;
let y = 0;
let r = 0;
let randomX = () => {
  return Math.floor(Math.random() * (w - 0 + 1) + 0);
};
let randomY = () => {
  return Math.floor(Math.random() * (h - 0 + 1) + 0);
};
let randomR = () => {
  return (Math.floor(Math.random() * (10000 - 0 + 1) + 0) % 6) + 2;
};
let draw = () => {
  x = randomX();
  y = randomY();
  r = randomR();
  ctx.filter = "blur(3px)";
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, true);
  ctx.fill();
};

draw100 = () => {
  for (let i = 0; i < 100; i++) draw();
};

draw100();
window.addEventListener("resize", () => {
  canvas.height = innerHeight;
  canvas.width = innerWidth;
  w = parseInt(getComputedStyle(canvas).width);
  h = parseInt(getComputedStyle(canvas).height);
  draw100();
});
