const canvas = document.getElementById('englandFlag');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';
ctx.fillRect(0, 150, 1000, 50);
ctx.rotate(90 * Math.PI / 180);
ctx.fillStyle = 'red';
ctx.fillRect(0, -280, 500, 50);
