const $canvas = document.querySelector('.canvas');
const context = $canvas.getContext('2d');
const pixelRatio = window.devicePixelRatio || 1;
const canvasStyleWidth = $canvas.clientWidth;
const canvasStyleHeight = $canvas.clientHeight;
$canvas.width = canvasStyleWidth * pixelRatio;
$canvas.height = canvasStyleHeight * pixelRatio;
context.scale(pixelRatio, pixelRatio);
const middleX = canvasStyleWidth / 2;

const platFormYPos = 450;
const platformWidth = 500;
const platformFrontHeight = 50;
const backWidth = 300;
const backFrameBottomY = 410;
const backFrameWidth = 270;
const backFrameHeight = 200;
const frontFrameBottomY = 440;
const frontFrameWidth = 360;
const frontFrameHeight = 270;
const numBalls = 5;
const ballRadius = backFrameWidth / numBalls / 2;
const ballMiddleY = 380;
const frontFrameSingleSegment = frontFrameWidth / (numBalls + 1);
const backFrameSingleSegment = backFrameWidth / (numBalls + 1);
let rotationA = 0;
let backRotationA = 0;
let rotationB = 0;
let backRotationB = 0;
let swingTurn = 1;
let rotationACounter = 0;
let rotationBCounter = 0;


function drawPlatform() {
	// front edge
	context.save();
	context.translate(middleX, platFormYPos);
	let x = - (platformWidth / 2);
	let y = 0;
	context.fillStyle = '#000';
	context.fillRect(x, y, platformWidth, platformFrontHeight);
	const stripHeight = 20;
	y = (platformFrontHeight - stripHeight) / 2;
	context.fillStyle = '#626262';
	context.fillRect(x, y, platformWidth, stripHeight);
	const tinyStripHeight = 6;
	y = (platformFrontHeight - tinyStripHeight) / 2;
	context.fillStyle = '#000';
	context.fillRect(x, y, platformWidth, tinyStripHeight);

	// base
	context.translate(x, 0);
	context.beginPath();
	context.moveTo(0, 0);
	context.lineTo((platformWidth - backWidth) / 2, -50);
	context.lineTo((platformWidth - backWidth) / 2 + backWidth, -50);
	context.lineTo(platformWidth, 0);
	context.fillStyle = '#303030';
	context.fill();
	context.restore();
}

function drawFrame(startingBottomY, width, topY) {
	context.save();
	context.translate(middleX, startingBottomY);
	let x = - (width / 2);
	context.beginPath();
	context.moveTo(x, 0);
	context.arcTo(x, topY, x + width, topY, 30);
	context.arcTo(x + width, topY, x + width, 0, 30);
	context.lineTo(x + width, 0);
	context.strokeStyle = '#afb2b1';
	context.lineWidth = 6;
	context.stroke();
	context.restore();
}

function drawBackFrame() {
	drawFrame(backFrameBottomY, backFrameWidth, -backFrameHeight);
}

function drawFrontFrame() {
	drawFrame(frontFrameBottomY, frontFrameWidth, -frontFrameHeight);
}

function drawBalls() {
	const firstBallMiddleX = middleX - (ballRadius * (numBalls - 1));
	const frontFrameFirstLineX = middleX - Math.floor(numBalls / 2) * frontFrameSingleSegment;
	const backFrameFirstLineX = middleX - Math.floor(numBalls / 2) * backFrameSingleSegment;
	const frontFrameAnchorY = frontFrameBottomY - frontFrameHeight;
	const backFrameAnchorY =  backFrameBottomY - backFrameHeight;

	for (let i = 0; i < numBalls; i++) {
		const frontFrameAnchorX = frontFrameFirstLineX + i * frontFrameSingleSegment;
		const backFrameAnchorX = backFrameFirstLineX + i * backFrameSingleSegment;
		const x = firstBallMiddleX + i * 2 * ballRadius;
		const y  = ballMiddleY;
		const isFirstBall = i === 0;
		const isLastBall = i === numBalls - 1;

		// line from back frame
		context.save();
		if (isFirstBall || isLastBall) {
			context.translate(backFrameAnchorX, backFrameAnchorY);
			context.rotate(isFirstBall ? backRotationA : backRotationB);
			context.translate(-backFrameAnchorX, -backFrameAnchorY);
		}
		context.beginPath();
		context.moveTo(x, ballMiddleY + 10);
		context.lineTo(backFrameAnchorX, backFrameAnchorY);
		context.stroke();
		context.restore();

		// ball
		context.save();
		if (isFirstBall || isLastBall) {
			context.translate(frontFrameAnchorX, frontFrameAnchorY);
			context.rotate(isFirstBall ? rotationA : rotationB);
			context.translate(-frontFrameAnchorX, -frontFrameAnchorY);
		}
		context.beginPath();
		context.arc(x, y, ballRadius, 0, 2 * Math.PI);
		const gradient = context.createRadialGradient(x, y, 4, x, y, ballRadius);
		gradient.addColorStop(0, '#FFF');
		gradient.addColorStop(1, '#121414');
		context.fillStyle = gradient;
		context.fill();

		// line from front frame
		context.translate(0, 0);
		context.beginPath();
		context.moveTo(x, ballMiddleY - ballRadius);
		context.lineTo(frontFrameAnchorX, frontFrameAnchorY);
		context.strokeStyle = '#4e4e4e';
		context.lineWidth = 2;
		context.stroke();
		context.restore();
	}
}

function tick() {
	if (swingTurn === 1) {
		rotationACounter = Math.min(rotationACounter + 0.1, Math.PI);
		rotationA = Math.sin(rotationACounter) * Math.PI / 4;
		backRotationA = Math.sin(rotationACounter) * Math.PI / 3.5;
		if (rotationACounter >= Math.PI) {
			alternate();
		}
	}
	
	if (swingTurn === 2) {
		rotationBCounter = Math.min(rotationBCounter += 0.1, Math.PI);
		rotationB = - Math.sin(rotationBCounter) * Math.PI / 4;
		backRotationB = - Math.sin(rotationBCounter) * Math.PI / 3.5;
		if (rotationBCounter >= Math.PI) {
			alternate();
		}
	} 

	context.clearRect(0, 0, $canvas.width, $canvas.height);
	drawPlatform();
	drawBackFrame();
	drawBalls();
	drawFrontFrame();
	requestAnimationFrame(tick);
}

function alternate() {
	if (swingTurn === 1) {
		swingTurn = 2;
		rotationBCounter = 0;
	} else if (swingTurn === 2) {
		swingTurn = 1;
		rotationACounter = 0;
	}
}

tick();
