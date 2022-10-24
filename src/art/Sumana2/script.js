const canvas = document.getElementById('sumanaCanvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, 1000, 103);
ctx.fillStyle = 'green';
ctx.fillRect(0, 103, 1000, 104);
ctx.fillStyle = 'red';
ctx.fillRect(0, 207, 1000, 103);