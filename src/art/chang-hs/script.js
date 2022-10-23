const colors = ["yellow", "red", "green"];
let currentColor = "yellow";
function getRandomInt(max){
	return Math.floor(Math.random()*max);
}

function drawLine(ctx, start, end, color, width){
	ctx.moveTo(start[0], start[1]);
	ctx.lineTo(end[0], end[1]);
	ctx.strokeStyle = color;
	ctx.lineWidth = width;
	ctx.stroke();
}

function polarToCartesian(r, theta){
	const x = r * Math.cos(theta);
	const y = r * Math.sin(theta);
	return [x, y];
}
function range(num){
	return [...Array(num).keys()];
}
function addVectors2D(a, b){
	return [a[0] + b[0], a[1] + b[1]];
}

function drawFireWork(){
	ctx.fillStyle = "#000000";
	ctx.beginPath();
	ctx.fillRect(0,0,500,500);
	const thetas = range(rayNum).map(x => x * 2*Math.PI/rayNum);
	let startPolarVects = thetas.map(x => [startPeri, x]);
	let endPolarVects = thetas.map(x => [endPeri, x]);
	let startCartVects = startPolarVects.map(x => polarToCartesian(x[0], x[1]));
	let endCartVects = endPolarVects.map(x => polarToCartesian(x[0], x[1]));
	let startPoints = startCartVects.map(x => addVectors2D(startCoord, x));
	let endPoints = endCartVects.map(x => addVectors2D(startCoord, x));
	ctx.strokeStyle = currentColor;
	ctx.lineWidth = 3;
	for (const [index, coord] of Object.entries(startPoints)){
		ctx.moveTo(coord[0], coord[1]);
		ctx.lineTo(endPoints[index][0], endPoints[index][1]);
		ctx.stroke();
	}
	startPeri = startPeri + moveStep;
	endPeri = endPeri + moveStep;
	if (startPeri > 500){
		startPeri = 0;
		endPeri = rayLength;
		currentColor = colors[getRandomInt(3)];
		startCoord = [getRandomInt(500), getRandomInt(500)];
	}
	requestAnimationFrame(drawFireWork);
}

const r = 100;
let x = -r;
const ctx = document.getElementById("firework").getContext('2d');

function draw(){
	ctx.clearRect(0,0,500,500);
	ctx.beginPath();
	ctx.lineWidth = 1;
	ctx.fillStyle = "green";
	ctx.strokeStyle = "green";
	ctx.arc(x, 250, r, 0, 2*Math.PI, false);
	ctx.fill();
	x = x + 5;
	if (x >= 500 + 100){
		x = -r;
	}
	requestAnimationFrame(draw);
}

let rayNum = 16;
let startCoord = [250, 250];
let startPeri = 0;
let endPeri = 30;
let moveStep = 5;
let rayLength = 20;
drawFireWork();