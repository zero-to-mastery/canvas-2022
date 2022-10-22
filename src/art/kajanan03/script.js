const canvas = document.getElementById('faceCanva');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(400, 75, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(370, 200);
ctx.lineTo(150, 200);
ctx.stroke();