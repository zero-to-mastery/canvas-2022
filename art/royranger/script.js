const slices = [
	{
		color: '#fbf8cc',
		content: '😃',
		text: '£100'
	},
	{
		color: '#fde4cf',
		content: '🧜‍♀️',
		text: '£2000'
	},
	{
		color: '#ffcfd2',
		content: '☂️',
		text: '£350'
	},
	{
		color: '#f1c0e8',
		content: '👾',
		text: '£10'
	},
	{
		color: '#cfbaf0',
		content: '💄',
		text: '£50'
	},
	{
		color: '#a3c4f3',
		content: '🎩',
		text: '£1000'
	},
	{
		color: '#90dbf4',
		content: '🤗',
		text: '£650'
	},
	{
		color: '#8eecf5',
		content: '🧵',
		text: '£700'
	},
	{
		color: '#98f5e1',
		content: '👩🏻‍💻',
		text: '£3500'
	},
	{
		color: '#b9fbc0',
		content: '🏄🏾‍♀️',
		text: '£200'
	},
];

const $canvas = document.querySelector('.canvas');
const context = $canvas.getContext('2d');
const pixelRatio = window.devicePixelRatio || 1;
const wheelRadius = scaled(150);
const singleSliceAngle = 2 * Math.PI / slices.length;
const topPosition = - Math.PI / 2;
resizeCanvas();
setCanvasTransform();

function resizeCanvas() {
	const canvasStyleWidth = $canvas.clientWidth;
	const canvasStyleHeight = $canvas.clientHeight;
	$canvas.width = canvasStyleWidth * pixelRatio;
	$canvas.height = canvasStyleHeight * pixelRatio;
}

function setCanvasTransform() {
	context.translate($canvas.width / 2, $canvas.height / 2);
}

function scaled(val) {
	return val * pixelRatio;
}

function drawRim() {
	context.save();
	context.moveTo(0, 0);
	context.arc(0, 0, wheelRadius + scaled(8), 0, 2 * Math.PI, false);
	context.fillStyle = '#000';
	context.strokeStyle = '#000';
	context.fill();
	context.stroke();
	context.restore();
}

function drawWheel() {
	slices.forEach((slice, index) => {
		context.save();
		const middleSliceAngularPosition = topPosition + singleSliceAngle * index;
		context.rotate(middleSliceAngularPosition);

		// slice
		context.beginPath();
		context.moveTo(0, 0);
		context.arc(0, 0, wheelRadius, - singleSliceAngle / 2, singleSliceAngle / 2, false);
		context.closePath();
		context.fillStyle = slice.color;
		context.strokeStyle = slice.color;
		context.fill();
		context.stroke();

		// content
		context.textBaseline = 'middle';
		context.font = `500 ${scaled(18)}px sans-serif`;
		const x = scaled(120);
		const y = 0;
		context.fillStyle = '#000';
		context.fillText(slice.content, x, y, wheelRadius);
		context.fillText(slice.text, x - 10 - context.measureText(slice.text).width, 0, wheelRadius);
		context.restore();
	});
}

function drawPegs() {
	slices.forEach((slice, index) => {
		context.save();
		const edgeSliceAngularPosition = topPosition + singleSliceAngle * index - singleSliceAngle / 2;
		context.rotate(edgeSliceAngularPosition);
		context.translate(wheelRadius + scaled(5), 0);
		context.beginPath();
		context.moveTo(0, 0);
		context.arc(0, 0, scaled(3), 0, 2 * Math.PI, false);
		context.closePath();
		context.fillStyle = 'gold';
		context.strokeStyle = 'gold';
		context.fill();
		context.stroke();
		context.restore();
	});
}

function drawPointer() {
	context.save();
	context.translate(0, - wheelRadius);
	context.beginPath();
	context.moveTo(0, 0);
	context.lineTo(scaled(-10), scaled(-18));
	context.lineTo(scaled(10), scaled(-18));
	context.closePath();
	context.fillStyle = '#FFF';
	context.fill();
	context.restore();
}

function tick() {
	context.save();
	context.rotate(performance.now() * 0.001);
	drawRim();
	drawWheel();
	drawPegs();
	context.restore();
	drawPointer();
	window.requestAnimationFrame(tick);
}


tick();
