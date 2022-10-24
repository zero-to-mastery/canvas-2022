function drawFace() {
  const canvasEl = document.getElementById('canvas');
  const ctx = canvasEl.getContext('2d');
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 10;

  ctx.beginPath();

  // left eyebrow
  ctx.moveTo(50, 150);
  ctx.lineTo(175, 150);

  // left eye
  ctx.moveTo(100, 175);
  ctx.lineTo(125, 175);

  // right eyebrow
  ctx.moveTo(225, 150);
  ctx.lineTo(350, 150);

  // right eye
  ctx.moveTo(275, 175);
  ctx.lineTo(300, 175);

  // mouth
  ctx.moveTo(100, 250);
  ctx.lineTo(300, 250);

  ctx.stroke();
}

drawFace();
