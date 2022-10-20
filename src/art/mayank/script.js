const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const container = document.getElementById("container");
let boxSize = 0;
let canvasSize = 0;
let x = 0;
let y = 0;

if (
  parseInt(getComputedStyle(container).width) >
  parseInt(getComputedStyle(container).height)
) {
  canvasSize = 0.7 * parseInt(getComputedStyle(container).height);
  boxSize = canvasSize / 8;
} else {
  canvasSize = 0.9 * parseInt(getComputedStyle(container).width);
  boxSize = canvasSize / 8;
}

let draw = () => {
  x = 0;
  y = 0;
  canvas.height = canvasSize;
  canvas.width = canvasSize;
  ctx.fillStyle = "black";
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (ctx.fillStyle == "#ffffff") {
        ctx.fillStyle = "black";
      } else ctx.fillStyle = "white";
      ctx.fillRect(x, y, boxSize, boxSize);
      x += boxSize;
    }
    if (ctx.fillStyle == "#ffffff") {
      ctx.fillStyle = "black";
    } else ctx.fillStyle = "white";
    y += boxSize;
    x = 0;
  }
};

draw();

window.addEventListener("resize", () => {
  if (
    parseInt(getComputedStyle(container).width) >
    parseInt(getComputedStyle(container).height)
  ) {
    canvasSize = 0.7 * parseInt(getComputedStyle(container).height);
    boxSize = canvasSize / 8;
  } else {
    canvasSize = 0.9 * parseInt(getComputedStyle(container).width);
    boxSize = canvasSize / 8;
  }

  draw();
});
