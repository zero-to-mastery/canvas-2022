
function getRandomInt(min, max){
	return Math.floor(min + Math.random() * (max - min));
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
	const thetas = range(rayNum).map(x => x * 2*Math.PI/rayNum + thetaDiff);
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
		rayLength = getRandomInt(20, 100)
		endPeri = rayLength;
		currentColor = colors[getRandomInt(0, 4)];
		startCoord = [getRandomInt(0, 500), getRandomInt(0, 500)];
		rayNum = getRandomInt(3, 32);
		thetaStep = getRandomInt(-2, 2)
	}
	thetaDiff = thetaDiff + thetaStep;
	requestAnimationFrame(drawFireWork);
}

const r = 100;
let x = -r;
const ctx = document.getElementById("firework").getContext('2d');
const colors = ["yellow", "red", "green", "white"];
let currentColor = "yellow";
let rayNum = 16;
let startCoord = [250, 250];
let startPeri = 0;
let endPeri = 30;
let moveStep = 5;
let thetaDiff = 0;
let thetaStep = 2;
let rayLength = 20;
drawFireWork();