const canvas = document.getElementById('randomCanva');
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#000';
ctx.fillRect(0, 100, 1000, 50);

ctx.fillStyle = '#000';
ctx.fillRect(0, 100, 1000, 50);

ctx.rotate(90 * Math.PI / 180);
ctx.fillStyle = 'red';
ctx.fillRect(100, -400, 500, 50);
