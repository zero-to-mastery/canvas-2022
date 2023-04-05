// get canvas context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// draw flag background
ctx.fillStyle = '#0038A8'; // set fill color
ctx.fillRect(0, 0, canvas.width, canvas.height); // draw rectangle

// draw top triangle
ctx.beginPath();
ctx.moveTo(canvas.width / 2, canvas.height / 6);
ctx.lineTo(canvas.width / 6, canvas.height / 2);
ctx.lineTo((canvas.width * 5) / 6, canvas.height / 2);
ctx.closePath();
ctx.fillStyle = '#FFFFFF';
ctx.fill();

// draw bottom triangle
ctx.beginPath();
ctx.moveTo(canvas.width / 2, (canvas.height * 5) / 6);
ctx.lineTo(canvas.width / 6, canvas.height / 2);
ctx.lineTo((canvas.width * 5) / 6, canvas.height / 2);
ctx.closePath();
ctx.fillStyle = '#FF0000';
ctx.fill();

// draw star
let centerX = canvas.width / 2;
let centerY = canvas.height / 2;
let outerRadius = 25;
let innerRadius = 10;
let spikes = 5;
let rot = (Math.PI / 2) * 3;
let x = centerX;
let y = centerY;
let step = Math.PI / spikes;

ctx.beginPath();
ctx.moveTo(centerX, centerY - outerRadius);
for (i = 0; i < spikes; i++) {
	x = centerX + Math.cos(rot) * outerRadius;
	y = centerY + Math.sin(rot) * outerRadius;
	ctx.lineTo(x, y);
	rot += step;

	x = centerX + Math.cos(rot) * innerRadius;
	y = centerY + Math.sin(rot) * innerRadius;
	ctx.lineTo(x, y);
	rot += step;
}
ctx.lineTo(centerX, centerY - outerRadius);
ctx.closePath();
ctx.fillStyle = '#FFFF00';
ctx.fill();
