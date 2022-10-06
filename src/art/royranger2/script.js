const colors = {
	x: 'transparent',
	r: '#ee4266',
	g: '#3bceac',
	b: '#540d6e',
	y: '#ffd23f'
};

const pattern = [
	'xrrrrrrrrrrrrrrrrrrrrrrrrrrrxx',
	'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrx',
	'rggggrrggggrrrggggrrrggggrrrrx',
	'rggggrrggggrrrggggrrrggggrrrrx',
	'rggggrrggggrrrggggrrrggggrrrrx',
	'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrx',
	'rryyyyyyyyyyyyyyyyyyyyyyyyyrrx',
	'rryyyyyyyyyyyyyyyyyyyyyyyyyrrx',
	'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrx',
	'gggggrrggggrrrggggrrrggggrxxxx',
	'gggggrrggggrrrggggrrrggggrxxxx',
	'gggggrrggggrrrggggrrrggggrxxxx',
	'ggggrrrggggrrrggggrrrggggrxxxx',
	'gggrgrrggggrrrggggrrrggggrrxxx',
	'gggrgrrrrrrrrrrrrrrrrrrrrrrrxx',
	'ggggrrrrrrrrrrrrrrrrrrrrrrrrrx',
	'gggggrbbbrrrrrrrrrrrbbbrrrrrrx',
	'gggggbbybbrrrrrrrrrbbybbrrrrrx',
	'rrrrrbyyybrrrrrrrrrbyyybrrrrrx',
	'xxxxxbbybbxxxxxxxxxbbybbxxxxxx',
	'xxxxxxbbbxxxxxxxxxxxbbbxxxxxxx'
];

const $canvas = document.querySelector('.canvas');
const context = $canvas.getContext('2d');
const pixelRatio = window.devicePixelRatio || 1;
const canvasStyleWidth = $canvas.clientWidth;
const canvasStyleHeight = $canvas.clientHeight;
$canvas.width = canvasStyleWidth * pixelRatio;
$canvas.height = canvasStyleHeight * pixelRatio;
const tileLength = Math.floor($canvas.width / pattern[0].length);
const topHeight = tileLength * 5;
const offset = ($canvas.width - pattern[0].length * tileLength) / 2;

pattern.forEach((row, index) => {
	drawRow(row, index);
});

function drawRow(row, rowIndex) {
	const rowYPos = topHeight + tileLength * rowIndex;
	const tiles = row.split('');
	tiles.forEach((tile, index) => {
		let xPos = tileLength * index;
		context.fillStyle = colors[tile];
		context.fillRect(xPos + offset, rowYPos + offset, tileLength, tileLength);
	});
}



