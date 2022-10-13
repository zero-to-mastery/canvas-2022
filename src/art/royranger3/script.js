const colors = {
	x: 'transparent',
	// heart
	h: '#d41e40',
	// body of bird
	b: '#91e89c',
	// wing
	w: '#f0b731',
	// feet and beak
	f: '#e9798f',
	// eye
	e: '#0b0a09',
	// sclera
	s: '#fbfcf5'
};

const bcolors = {
	// body of bird
	b: '#07a7bb',
	// wing
	w: '#d1aeb0',
	// feet and beak
	f: '#d7ab50'
};

const pattern = [
	// heart
	'xxxxxxxxxxxxxxxxxhhhhxxxhhhhxxxxxxxxxxxxxxxxx',
	'xxxxxxxxxxxxxxxxhhhhhhxhhhhhhxxxxxxxxxxxxxxxx',
	'xxxxxxxxxxxxxxxhhhhhhhhhhhhhhhxxxxxxxxxxxxxxx',
	'xxxxxxxxxxxxxxhhhhhhhhhhhhhhhhhxxxxxxxxxxxxxx',
	'xxxxxxxxxxxxxxhhhhhhhhhhhhhhhhhxxxxxxxxxxxxxx',
	'xxxxxxxxxxxxxxhhhhhhhhhhhhhhhhhxxxxxxxxxxxxxx',
	'xxxxxxxxxxxxxxhhhhhhhhhhhhhhhhhxxxxxxxxxxxxxx',
	'xxxxxxxxxxxxxxxhhhhhhhhhhhhhhhxxxxxxxxxxxxxxx',
	'xxxxxxxxxxxxxxxxhhhhhhhhhhhhhxxxxxxxxxxxxxxxx',
	'xxxxxxxxxxxxxxxxxhhhhhhhhhhhxxxxxxxxxxxxxxxxx',
	'xxxxxxxxxxxxxxxxxxhhhhhhhhhxxxxxxxxxxxxxxxxxx',
	'xxxxxxxxxxxxxxxxxxxhhhhhhhxxxxxxxxxxxxxxxxxxx',
	'xxxxxxxxxxxxxxxxxxxxhhhhhxxxxxxxxxxxxxxxxxxxx',
	'xxxxxxxxxxxxxxxxxxxxxhhhxxxxxxxxxxxxxxxxxxxxx',
	'xxxxxxxxxxxxxxxxxxxxxxhxxxxxxxxxxxxxxxxxxxxxx',
	// birds
	'xxxxxxxxxxxxbbbbxxxxxxxxxxxxxbbbbxxxxxxxxxxxx',
	'xxxxxxxxxxxbbbbbbbxxxxxxxxxbbbbbbbxxxxxxxxxxx',
	'bxxxxxxxxxbbbbbbbbbxxxxxxxbbbbbbbbbxxxxxxxxxb',
	'bbxxxxxxxbbbbbbbbbbxxxxxxxbbbbbbbbbbxxxxxxxbb',
	'bbbbxxxxbbbbbbbesbbbxxxxxbbbsebbbbbbbxxxxbbbb',
	'xbbbbbbbbbbbbbbeebbbffxffbbbeebbbbbbbbbbbbbbx',
	'xbbbbbbbbwwwwbbbbbbbfxxxfbbbbbbbwwwwbbbbbbbbx',
	'xxbbbbbbwwwwwwbbbbbbxxxxxbbbbbbwwwwwwbbbbbbxx',
	'xxxbbbbwwwwwwwbbbbbxxxxxxxbbbbbwwwwwwwbbbbxxx',
	'xxxxbbbbwwwwwbbbbbbxxxxxxxbbbbbbwwwwwbbbbxxxx',
	'xxxxxbbbbwwwbbbbbbxxxxxxxxxbbbbbbwwwbbbbxxxxx',
	'xxxxxxbbbbbbbbbbxxxxxxxxxxxxxbbbbbbbbbbxxxxxx',
	'xxxxxxxxbbbbbbbxxxxxxxxxxxxxxxbbbbbbbxxxxxxxx',
	'xxxxxxxxxfxxfxxxxxxxxxxxxxxxxxxxfxxfxxxxxxxxx',
	'xxxxxxxxxfxxfxxxxxxxxxxxxxxxxxxxfxxfxxxxxxxxx',
	'xxxxxxxxxfxxfxxxxxxxxxxxxxxxxxxxfxxfxxxxxxxxx',
	'xxxxxxxxxxfxxfxxxxxxxxxxxxxxxxxfxxfxxxxxxxxxx'
];

const weaveLength = 49;
const $canvas = document.querySelector('.canvas');
const context = $canvas.getContext('2d');
const pixelRatio = window.devicePixelRatio || 1;
const canvasStyleWidth = $canvas.clientWidth;
const canvasStyleHeight = $canvas.clientHeight;
$canvas.width = canvasStyleWidth * pixelRatio;
$canvas.height = canvasStyleHeight * pixelRatio;

const stitchLength = $canvas.width / weaveLength;
const patternStartY = stitchLength * 9;
const patternStartX = stitchLength * 2;

function scaled(val) {
	return val * pixelRatio;
}

function createWeave() {
	for (let row = 0; row < weaveLength; row++) {
		for (let col = 0; col < weaveLength; col++) {
			context.save();
			context.translate(col * stitchLength, row * stitchLength);
			context.beginPath();
			context.moveTo(stitchLength / 2, 0);
			context.lineTo(stitchLength / 2, stitchLength);
			context.strokeStyle = 'floralwhite';
			context.lineWidth = scaled(5);
			context.stroke();
			context.moveTo(0, stitchLength / 2);
			context.lineTo(stitchLength, stitchLength / 2);
			context.stroke();
			context.restore();
		}
	}
}

function getStitchColor(square, numSquares, index) {
	if (!bcolors[square]) {
		return colors[square];
	}
	return index < numSquares / 2 ?  colors[square] : bcolors[square];
}

function drawRow(row, rowIndex) {
	const rowYPos = patternStartY + stitchLength * rowIndex;
	const squares = row.split('');
	squares.forEach((square, index) => {
		let xPos = patternStartX + stitchLength * index;
		context.save();
		context.translate(xPos, rowYPos);
		context.beginPath();
		context.moveTo(0, 0);
		context.lineTo(stitchLength, stitchLength);
		context.strokeStyle = getStitchColor(square, squares.length, index); 
		context.lineWidth = scaled(4.5);
		context.stroke();
		context.moveTo(0, stitchLength);
		context.lineTo(stitchLength, 0);
		context.stroke();
		context.restore();
	});
}

createWeave();
pattern.forEach((row, index) => {
	drawRow(row, index);
});





