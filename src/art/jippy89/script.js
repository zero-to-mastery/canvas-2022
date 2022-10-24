let viewWidth, viewHeight

function resizeCanvas (canvas) {
  // console.log('resizeCanvas')
  viewWidth = window.visualViewport.width
  viewHeight = window.visualViewport.height
  canvas.width = viewWidth;
  canvas.height = viewHeight;

  // Drawing Configuration
  // For perfect roundness, so far I use rows * 2
  const rows = 10
  const columns = rows * 2

  draw(canvas, {
    rows,
    columns
  })
}

function start () {
  const canvas = document.getElementById('canvas');

  // Resize canvas to fullscreen
  setTimeout(resizeCanvas.bind(this, canvas), 0)
  window.addEventListener('resize', resizeCanvas.bind(this, canvas), false)
}

function draw(canvas, {
  rows, columns,
}) {
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    const widthPerCol = viewWidth / columns
    const heightPerRow = viewHeight / rows
    const smallLeaf = widthPerCol * 0.25
    const bigLeaf = widthPerCol * 0.1

    ctx.beginPath();
    ctx.fillStyle = 'brown';

    for (let y=0; y<rows; y++) {
      let texHeight = y * heightPerRow
      let texHeight1 = (y+1) * heightPerRow

      for (let x=0; x<columns; x++) {
        let currentX = x * widthPerCol
        let currentX1 = (x+1) * widthPerCol

        if ((x+y)%2 === 0) {
          // Small Leaf 1
          ctx.moveTo(currentX, texHeight);
          ctx.quadraticCurveTo(currentX + smallLeaf, texHeight, currentX + smallLeaf, texHeight + smallLeaf);
          ctx.quadraticCurveTo(currentX, texHeight + smallLeaf, currentX, texHeight);
  
          // // Small Leaf 2
          ctx.moveTo(currentX1, texHeight1);
          ctx.quadraticCurveTo(currentX1, texHeight1 - smallLeaf, currentX1 - smallLeaf, texHeight1 - smallLeaf);
          ctx.quadraticCurveTo(currentX1 - smallLeaf, texHeight1, currentX1, texHeight1);
  
          // Big Leaf
          ctx.moveTo(currentX1, texHeight);
          ctx.quadraticCurveTo(currentX1 - bigLeaf, texHeight1 - bigLeaf, currentX, texHeight1);
          ctx.quadraticCurveTo(currentX + bigLeaf, texHeight + bigLeaf, currentX1, texHeight);

          ctx.fill();

        } else {
          // Same like above but reversed
          ctx.moveTo(currentX1, texHeight);
          ctx.quadraticCurveTo(currentX1 - smallLeaf, texHeight, currentX1 - smallLeaf, texHeight + smallLeaf);
          ctx.quadraticCurveTo(currentX1, texHeight + smallLeaf, currentX1, texHeight);
          ctx.moveTo(currentX, texHeight1);
          ctx.quadraticCurveTo(currentX, texHeight1 - smallLeaf, currentX + smallLeaf, texHeight1 - smallLeaf);
          ctx.quadraticCurveTo(currentX + smallLeaf, texHeight1, currentX, texHeight1);
          ctx.moveTo(currentX, texHeight);
          ctx.quadraticCurveTo(currentX1 - bigLeaf, texHeight + bigLeaf, currentX1, texHeight1);
          ctx.quadraticCurveTo(currentX + bigLeaf, texHeight1 - bigLeaf, currentX, texHeight);
          ctx.fill();
        }

        ctx.fill();
      }
    }
  }
}
