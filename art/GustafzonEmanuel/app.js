function draw() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      
      ctx.shadowOffsetX = 5; // base
      ctx.shadowOffsetY = 4;
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
      ctx.fillStyle = 'blue';
      ctx.fillRect(100, 50, 300, 200);

      ctx.beginPath(); // horizontal
      ctx.moveTo(200, 50)
      ctx.strokeStyle = 'yellow';
      ctx.lineWidth = 35;
      ctx.lineTo(200, 250)
      ctx.stroke()
      
      ctx.beginPath(); // vertical
      ctx.moveTo(100, 150)
      ctx.strokeStyle = 'yellow';
      ctx.lineWidth = 35;
      ctx.lineTo(400, 150)
      ctx.stroke()



    }
  }