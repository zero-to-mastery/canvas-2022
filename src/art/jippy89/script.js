function resizeCanvas (canvas) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function start () {
  const canvas = document.getElementById('canvas');

  // Resize canvas to fullscreen
  resizeCanvas(canvas)
  window.addEventListener('resize', resizeCanvas.bind(this, canvas), false)

  // Draw
  // draw()
}

function draw() {
  const canvas = document.getElementById('canvas');

  console.log(canvas)
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    // Batik Kawung 1 (x, y)
    ctx.beginPath();
    ctx.moveTo(0, 0); // Small Leaf 1
    ctx.quadraticCurveTo(40, 0, 40, 40);
    ctx.quadraticCurveTo(0, 40, 0, 0);
    ctx.moveTo(150, 150); // Small Leaf 2
    ctx.quadraticCurveTo(150, 110, 110, 110);
    ctx.quadraticCurveTo(110, 150, 150, 150);
    ctx.moveTo(150, 0); // Big Leaf
    ctx.quadraticCurveTo(135, 135, 0, 150);
    ctx.quadraticCurveTo(15, 15, 150, 0);

    // Batik Kawung 2 - Reversed Motive (x, y) => (x+300, y=0)
    ctx.moveTo(0 + 300, 0);
    ctx.quadraticCurveTo(300 - 30, 0, 300 - 30, 30);
    ctx.quadraticCurveTo(0 + 300, 30, 0 + 300, 0);
    ctx.moveTo(150, 150);
    ctx.quadraticCurveTo(150, 120, 120 + 60, 120);
    ctx.quadraticCurveTo(120 + 60, 150, 150, 150);
    ctx.moveTo(150 + 0, 0);
    ctx.quadraticCurveTo(135 + 150, 135 - 105, 0 + 300, 150 + 0);
    ctx.quadraticCurveTo(15 + 150, 15 + 150, 150, 0);

    // Batik Kawung 3 - Reversed Motive (x, y) => (x+0, y=0+150)
    ctx.moveTo(0 + 150, 0 + 150);
    ctx.quadraticCurveTo(150 - 30, 150 + 0, 150 - 30, 150 + 30);
    ctx.quadraticCurveTo(150 - 0, 150 + 30, 150 - 0, 150 + 0);
    ctx.moveTo(0, 300);
    ctx.quadraticCurveTo(0, 300 - 30, 0 + 30, 300 - 30);
    ctx.quadraticCurveTo(30, 300, 0, 300);
    ctx.moveTo(0, 0 + 150);
    ctx.quadraticCurveTo(135 + 0, 150 + 30, 0 + 150, 150 + 150);
    ctx.quadraticCurveTo(30, 300 - 30, 0, 0 + 150);
    // ctx.quadraticCurveTo(15 + 150, 15 + 150, 150, 0);

    // Batik Kawung 4 (just add 150 from Batik Kawing 1)
    ctx.moveTo(150, 150);
    ctx.quadraticCurveTo(180, 150, 180, 180);
    ctx.quadraticCurveTo(150, 180, 150, 150);
    ctx.moveTo(150 + 150, 150 + 150);
    ctx.quadraticCurveTo(150 + 150, 120 + 150, 120 + 150, 120 + 150);
    ctx.quadraticCurveTo(120 + 150, 150 + 150, 150 + 150, 150 + 150);
    ctx.moveTo(150+150, 0+150);
    ctx.quadraticCurveTo(135 + 150, 135 + 150, 0 + 150, 150 + 150);
    ctx.quadraticCurveTo(15 + 150, 15 + 150, 150 + 150, 0 + 150);


    // ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    // ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    // ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    // ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    // ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    // ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fill();

    // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
    // Rectangle
    // ctx.fillRect(25, 25, 100, 100);
    // ctx.clearRect(45, 45, 60, 60);
    // ctx.strokeRect(50, 50, 50, 50);

    // Triangle
    // ctx.beginPath()
    // ctx.moveTo(75,50)
    // ctx.lineTo(100, 75);
    // ctx.lineTo(100, 25);
    // ctx.fill();

    // Smiley Face
    // ctx.beginPath();
    // ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    // ctx.moveTo(110, 75);
    // ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
    // ctx.moveTo(65, 65);
    // ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
    // ctx.moveTo(95, 65);
    // ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
    // ctx.stroke();

    // // Filled triangle
    // ctx.beginPath();
    // ctx.moveTo(25, 25);
    // ctx.lineTo(105, 25);
    // ctx.lineTo(25, 105);
    // ctx.fill();

    // // Stroked triangle
    // ctx.beginPath();
    // ctx.moveTo(125, 125);
    // ctx.lineTo(125, 45);
    // ctx.lineTo(45, 125);
    // ctx.closePath();
    // ctx.stroke();

    // Example for `arc`
    // for (let i = 0; i < 4; i++) {
    //   for (let j = 0; j < 3; j++) {
    //     ctx.beginPath();
    //     const x = 25 + j * 50; // x coordinate
    //     const y = 25 + i * 50; // y coordinate
    //     const radius = 20; // Arc radius
    //     const startAngle = 0; // Starting point on circle
    //     const endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
    //     const counterclockwise = i % 2 !== 0; // clockwise or counterclockwise

    //     ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

    //     if (i > 1) {
    //       ctx.fill();
    //     } else {
    //       ctx.stroke();
    //     }
    //   }
    // }
    // ctx.beginPath();
    // const x = 25; // x coordinate
    // const y = 25; // y coordinate
    // const radius = 20; // Arc radius
    // const startAngle = 0; // Starting point on circle
    // const endAngle = Math.PI + (Math.PI * 0) / 2; // End point on circle
    // const counterclockwise = 0 % 2 !== 0; // clockwise or counterclockwise

    // ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
    // ctx.stroke();

    // Quadratic curves example
    // ctx.beginPath();
    // ctx.moveTo(75, 25);
    // ctx.quadraticCurveTo(25, 25, 25, 62.5);
    // ctx.quadraticCurveTo(25, 100, 50, 100);
    // ctx.quadraticCurveTo(50, 120, 30, 125);
    // ctx.quadraticCurveTo(60, 120, 65, 100);
    // ctx.quadraticCurveTo(125, 100, 125, 62.5);
    // ctx.quadraticCurveTo(125, 25, 75, 25);
    // ctx.stroke();

    // Cubic curves example
    // ctx.beginPath();
    // ctx.moveTo(75, 40);
    // ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    // ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    // ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    // ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    // ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    // ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    // ctx.fill();
  }
}
