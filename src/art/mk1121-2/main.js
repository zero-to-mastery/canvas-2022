var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

//background 
ctx.fillStyle = "#F4BA1A";
ctx.arc(320, 213, 210, 0, Math.PI * 2, true); // Outer circle
ctx.fill();

  ctx.fillStyle = "#000"
 roundedRect(ctx, (640 -200)/2, (426-200)/2, 200, 200, [15,15,15,15]);

  ctx.fillStyle = "#fff"
 roundedRect(ctx, ((640 -200)/2) + 10 , ((426-200)/2) + 50, 180, 140, [15,15,0,0]);

//1st colums
 roundedRect(ctx, ((640 -200)/2) + 15 , ((426-200)/2) + 0, 30, 30, [15,15,0,0]);
  ctx.fillStyle = "#000"
 roundedRect(ctx, ((640 -200)/2) + 25 , ((426-200)/2) - 10, 10, 30, [5,5,5,5]);

//2nd colums
  ctx.fillStyle = "#fff"
 roundedRect(ctx, ((640 -200)/2) + 85 , ((426-200)/2) + 0, 30, 30, [15,15,0,0]);
  ctx.fillStyle = "#000"
 roundedRect(ctx, ((640 -200)/2) + 95 , ((426-200)/2) - 10, 10, 30, [5,5,5,5]);

//3rd colums
  ctx.fillStyle = "#fff"
 roundedRect(ctx, ((640 -200)/2) + 155 , ((426-200)/2) + 0, 30, 30, [15,15,0,0]);
  ctx.fillStyle = "#000"
 roundedRect(ctx, ((640 -200)/2) + 165 , ((426-200)/2) - 10, 10, 30, [5,5,5,5]);


//1st row
 roundedRect(ctx, ((640 -200)/2) + 20 , ((426-200)/2) + 60, 25, 25, [5,5,0,0]);

 roundedRect(ctx, ((640 -200)/2) + 65 , ((426-200)/2) + 60, 25, 25, [5,5,0,0]);

 roundedRect(ctx, ((640 -200)/2) + 110 , ((426-200)/2) + 60, 25, 25, [5,5,0,0]);

 roundedRect(ctx, ((640 -200)/2) + 155 , ((426-200)/2) + 60, 25, 25, [5,5,0,0]);


//2nd row
 roundedRect(ctx, ((640 -200)/2) + 20 , ((426-200)/2) + 100, 25, 25, [5,5,0,0]);

 roundedRect(ctx, ((640 -200)/2) + 65 , ((426-200)/2) + 100, 25, 25, [5,5,0,0]);

 roundedRect(ctx, ((640 -200)/2) + 110 , ((426-200)/2) + 100, 25, 25, [5,5,0,0]);

 roundedRect(ctx, ((640 -200)/2) + 155 , ((426-200)/2) + 100, 25, 25, [5,5,0,0]);

//3rd row
 roundedRect(ctx, ((640 -200)/2) + 20 , ((426-200)/2) + 140, 25, 25, [5,5,0,0]);

 roundedRect(ctx, ((640 -200)/2) + 65 , ((426-200)/2) + 140, 25, 25, [5,5,0,0]);

 roundedRect(ctx, ((640 -200)/2) + 110 , ((426-200)/2) + 140, 25, 25, [5,5,0,0]);


function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius[0]);
  ctx.arcTo(x, y + height, x + radius[0], y + height, radius[0]);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius[1], radius[1]);
  ctx.arcTo(x + width, y, x + width - radius[2], y, radius[2]);
  ctx.arcTo(x, y, x, y + radius[3], radius[3]);
  ctx.fill();
}
