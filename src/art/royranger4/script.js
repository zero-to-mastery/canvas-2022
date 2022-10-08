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
	context.save();
	const firstBallMiddleX = middleX - (ballRadius * (numBalls - 1));
	const frontFrameFirstLineX = middleX - Math.floor(numBalls / 2) * frontFrameSingleSegment;
	const backFrameFirstLineX = middleX - Math.floor(numBalls / 2) * backFrameSingleSegment;
	for (let i = 0; i < 5; i++) {
		// ball
		context.save();
		context.translate(firstBallMiddleX, ballMiddleY);
		const x = i * 2 * ballRadius;
		const y  = 0;
		context.beginPath();
		context.arc(x, y, ballRadius, 0, 2 * Math.PI);
		const gradient = context.createRadialGradient(x, y, 4, x, y, ballRadius);
		gradient.addColorStop(0, 'white');
		gradient.addColorStop(1, '#121414');
		context.fillStyle = gradient;
		context.fill();
		context.restore();

		// line from front frame
		context.save();
		context.translate(0, 0);
		context.beginPath();
		context.moveTo(x + firstBallMiddleX, ballMiddleY - ballRadius);
		context.lineTo(frontFrameFirstLineX + i * frontFrameSingleSegment, frontFrameBottomY - frontFrameHeight);
		context.strokeStyle = '#4e4e4e';
		context.lineWidth = 2;
		context.stroke();

		// line from back frame
		context.beginPath();
		context.moveTo(x + firstBallMiddleX, ballMiddleY - ballRadius);
		context.lineTo(backFrameFirstLineX + i * backFrameSingleSegment, backFrameBottomY - backFrameHeight);
		context.stroke();
		context.restore();

	}
	context.restore();
}

drawPlatform();
drawBackFrame();
drawBalls();
drawFrontFrame();