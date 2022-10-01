const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Red line on top
ctx.fillStyle = '#F00';
ctx.fillRect(0, 0, 1000, 75);

// White line after red line on top
ctx.fillStyle = '#FFF';
ctx.fillRect(0, 70, 1000, 75);

// Red line on bottom
ctx.fillStyle = '#F00';
ctx.fillRect(0, 235, 1000, 75);

// White line before red line on bottom
ctx.fillStyle = '#FFF';
ctx.fillRect(0, 175, 1000, 75);

// Navy line on center
ctx.fillStyle = '#16213E';
ctx.fillRect(0, 125, 1000, 75);