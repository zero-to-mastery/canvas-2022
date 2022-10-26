function draw() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      
      ctx.shadowOffsetX = 5; // base
      ctx.shadowOffsetY = 4;
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
      const gradient = ctx.createLinearGradient(20, 0, 220, 0);
      gradient.addColorStop(0, "#61C9A8");
      gradient.addColorStop(0.5, "#61C9A8");
      gradient.addColorStop(1, "#026C7C");
      ctx.fillStyle = gradient;
      ctx.fillRect(100, 50, 300, 200);

      ctx.beginPath(); // line on top
      ctx.moveTo(100, 100)
      ctx.strokeStyle = '#FCB07E';
      ctx.lineTo(187, 100)
      ctx.moveTo(312, 100)
      ctx.lineTo(400, 100)
      ctx.stroke()


      ctx.beginPath(); // button left top
      ctx.moveTo(130, 50)
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#FCB07E';
      ctx.lineTo(130, 40)
      ctx.lineTo(180, 40)
      ctx.lineTo(180, 50)
      ctx.fill('evenodd');
      ctx.stroke()


      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      ctx.shadowBlur = 2;
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';

      ctx.beginPath();
      ctx.strokeStyle = '#FCB07E';
      ctx.arc(250, 150, 80, 0, Math.PI * 2, true); // big circle
      ctx.moveTo(320, 150)

      ctx.arc(250, 150, 70, 0, Math.PI * 2, true); // medium circle
      ctx.moveTo(275, 150)

      ctx.arc(250, 150, 25, 0, Math.PI * 2, true); // medium circle
      ctx.moveTo(170, 80)
      
      ctx.arc(160, 80, 10, 0, Math.PI * 2, true); // circle left corner
      ctx.stroke()



    }
  }