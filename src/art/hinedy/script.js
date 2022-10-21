var canvas = document.getElementById("pyramids");
var ctx = canvas.getContext("2d");

// Background
const grd = ctx.createLinearGradient(1600,0, 0,720)
grd.addColorStop(0, '#feff91')
grd.addColorStop(1, '#c0e4df')
ctx.fillStyle = grd;
ctx.fillRect(0,0,1600,720)

// Pyramid of Menkaure -shadow-
ctx.fillStyle = '#A08638';
ctx.beginPath();
ctx.moveTo(950, 720);
ctx.lineTo(1220,420);
ctx.lineTo(1500,720);
ctx.closePath();
ctx.fill();

// Pyramid of Menkaure -light-
ctx.fillStyle = '#FFD350';
ctx.beginPath();
ctx.moveTo(1150, 720);
ctx.lineTo(1220,420);
ctx.lineTo(1500,720);
ctx.closePath();
ctx.fill();

// Pyramid of Khafre -shadow-
ctx.fillStyle = '#A08638';
ctx.beginPath();
ctx.moveTo(440, 720);
ctx.lineTo(800,280);
ctx.lineTo(1170,720);
ctx.closePath();
ctx.fill();
// Pyramid of Khafre -light-
ctx.fillStyle = '#FFD350';
ctx.beginPath();
ctx.moveTo(680, 720);
ctx.lineTo(800,280);
ctx.lineTo(1170,720);
ctx.closePath();
ctx.fill();

//  The Great Pyramid of Khufu -shadow-
ctx.fillStyle = '#A08638';
ctx.beginPath();
ctx.moveTo(0, 720);
ctx.lineTo(400,320);
ctx.lineTo(700,720);
ctx.closePath();
ctx.fill();

//  The Great Pyramid of Khufu -light-
ctx.fillStyle = '#FFD350';
ctx.beginPath();
ctx.moveTo(260, 720);
ctx.lineTo(400,320);
ctx.lineTo(700,720);
ctx.closePath();
ctx.fill();


