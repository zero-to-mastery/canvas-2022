const canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height= window.innerHeight;

const ctx = canvas.getContext('2d');

function chooseColor () {
  const colors = ['red', 'pink', 'yellow', 'white', 'aqua', 'magenta', 'lightgreen', 'orange','blue','purple','lightblue','lavender', 'goldenrod', 'cyan', 'darkcyan', 'coral', 'lime'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function draw() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const num = width < 600 ? 10 : 20;
  for (let i = 0; i < num; i++) {
    const x1 = Math.floor(Math.random() * (width - 150))
    const y1 = Math.floor(Math.random() * (height - 150))
    const x2 = x1 + Math.floor(Math.random() * 50) + 50;
    const x3 = x2 - Math.floor(Math.random() * 50);
    const y2 = y1 + Math.floor(Math.random() * 50) +50;
    const y3 = y2 + Math.floor(Math.random() * 50) + 50;

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.fillStyle = chooseColor();
    ctx.fill();
  }
}

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height= window.innerHeight;
  draw();
})

draw();