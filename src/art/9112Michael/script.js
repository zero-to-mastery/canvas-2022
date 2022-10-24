function draw() {
    const canvas = document.getElementById("9112canvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
      const x = canvas.width / 2;
  
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
  
      ctx.fillStyle = "rgb(500, 0, 0)";
      ctx.fillRect(0, 0, 150, 150);
  
      ctx.fillStyle = "rgba(0, 0, 50, 0.35)";
      ctx.fillRect(75, 75, 150, 150);
  
      ctx.fillStyle = "rgb(0, 0, 400)";
      ctx.fillRect(150, 150, 300, 300);
  
      ctx.font = "1.5rem cursive";
      ctx.textBaseline = "ideographic";
      ctx.textAlign = "center";
      ctx.strokeText("Hacktoberfest 2022", 150, 260);
      ctx.fillText("Zero to Mastery", x, 70);
    }
  }