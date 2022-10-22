const flagCanvas = document.getElementById("flag");
const flagCtx = flagCanvas.getContext("2d");

//? References:
//? https://en.wikipedia.org/wiki/Flag_of_the_Philippines
//? https://en.wikipedia.org/wiki/File:Flag_of_the_Philippines_(construction_sheet).svg
// For easier calculations, we'll be calculating lengths
// relative to the original flag dimensions (180x90).
const SCALE = 3;
const COLOR_BLUE = "#0038A8";
const COLOR_RED = "#CE1126";
const COLOR_WHITE = "#FFFFFF";
const COLOR_YELLOW = "#FCD116";

//* Top blue rectangle
flagCtx.fillStyle = COLOR_BLUE;
flagCtx.fillRect(0, 0, 180 * SCALE, 45 * SCALE);

//* Bottom red rectangle
flagCtx.fillStyle = COLOR_RED;
flagCtx.fillRect(0, 45 * SCALE, 180 * SCALE, 90 * SCALE);

//* Left white triangle
flagCtx.beginPath();
flagCtx.fillStyle = COLOR_WHITE;
flagCtx.moveTo(0, 0);
flagCtx.lineTo(
	90 * SCALE * Math.cos(Math.PI / 6),
	90 * SCALE * Math.sin(Math.PI / 6)
);
flagCtx.lineTo(0, 90 * SCALE);
flagCtx.fill();

/**
 * Utility function to draw a 5-point star in the canvas.
 *
 * Adapted from: https://stackoverflow.com/a/25840319
 * @param {CanvasRenderingContext2D} ctx - The rendering context for the canvas element
 * @param {number} angle - The angle (in radians) to rotate the star
 * @param {number} cx - The X-coordinate of the center of the star
 * @param {number} cy - The Y-coordinate of the center of the star
 * @param {number} innerRadius - The inner radius of the star
 * @param {number} outerRadius - The outer radius of the star
 */
function drawStar(ctx, angle, cx, cy, innerRadius, outerRadius) {
	ctx.save();

	let rot = (Math.PI / 2) * 3;
	let x = 0;
	let y = 0;
	const step = Math.PI / 5;

	ctx.translate(cx, cy);
	ctx.rotate(angle);
	ctx.beginPath();

	for (let i = 0; i < 5; i++) {
		x = Math.cos(rot) * outerRadius;
		y = Math.sin(rot) * outerRadius;
		ctx.lineTo(x, y);
		rot += step;

		x = Math.cos(rot) * innerRadius;
		y = Math.sin(rot) * innerRadius;
		ctx.lineTo(x, y);
		rot += step;
	}

	ctx.closePath();
	ctx.lineWidth = 5;
	ctx.fillStyle = COLOR_YELLOW;
	ctx.fill();

	ctx.restore();
}

//* Top yellow star
drawStar(
	flagCtx,
	(Math.PI * 11) / 6, //? 330deg
	14 * SCALE * Math.cos(Math.PI / 3),
	14 * SCALE * Math.sin(Math.PI / 3),
	2 * SCALE,
	5 * SCALE
);

//* Bottom yellow star
drawStar(
	flagCtx,
	(Math.PI * 7) / 6, //? 210deg
	14 * SCALE * Math.cos(Math.PI / 3),
	90 * SCALE - 14 * SCALE * Math.sin(Math.PI / 3),
	2 * SCALE,
	5 * SCALE
);

//* Right yellow star
drawStar(
	flagCtx,
	Math.PI / 2, //? 90deg
	90 * SCALE * Math.cos(Math.PI / 6) - 14 * SCALE,
	45 * SCALE,
	2 * SCALE,
	5 * SCALE
);

//* Center yellow sun
const SUN_CX = 28 * SCALE;
const SUN_CY = 45 * SCALE;

// Body
flagCtx.beginPath();
flagCtx.arc(SUN_CX, SUN_CY, 9 * SCALE, 0, Math.PI * 2);
flagCtx.fillStyle = COLOR_YELLOW;
flagCtx.fill();

// Rays
/**
 * Utility function to draw sun rays on opposite sides.
 * @param {CanvasRenderingContext2D} ctx - The rendering context for the canvas element
 * @param {number} [angle = 0] - The angle (in radians) to rotate the ray
 */
function drawRays(ctx, angle = 0) {
	const LONG_RAY_LENGTH = 19 * SCALE;
	const SHORT_RAY_LENGTH = 17 * SCALE;
	const THETA = Math.PI / 48; //? 3.75deg

	ctx.save();

	ctx.fillStyle = COLOR_YELLOW;
	ctx.translate(SUN_CX, SUN_CY);
	ctx.rotate(angle);

	//* Top left/Bottom Right short ray
	ctx.beginPath();
	ctx.lineTo(-3.164 * SCALE, -15.909 * SCALE);
	ctx.lineTo(-2.219 * SCALE, -SHORT_RAY_LENGTH * Math.cos(2 * THETA));
	ctx.lineTo(3.164 * SCALE, 15.909 * SCALE);
	ctx.lineTo(2.219 * SCALE, SHORT_RAY_LENGTH * Math.cos(2 * THETA));
	ctx.closePath();
	ctx.fill();

	//* Top/Bottom long ray
	ctx.beginPath();
	ctx.lineTo(-1.169 * SCALE, -17.831 * SCALE);
	ctx.lineTo(0, -LONG_RAY_LENGTH);
	ctx.lineTo(1.169 * SCALE, -17.831 * SCALE);
	ctx.lineTo(-1.169 * SCALE, 17.831 * SCALE);
	ctx.lineTo(0, LONG_RAY_LENGTH);
	ctx.lineTo(1.169 * SCALE, 17.831 * SCALE);
	ctx.closePath();
	ctx.fill();

	//* Top right/Bottom left short ray
	ctx.beginPath();
	ctx.lineTo(2.219 * SCALE, -SHORT_RAY_LENGTH * Math.cos(2 * THETA));
	ctx.lineTo(3.164 * SCALE, -15.909 * SCALE);
	ctx.lineTo(-2.219 * SCALE, SHORT_RAY_LENGTH * Math.cos(2 * THETA));
	ctx.lineTo(-3.164 * SCALE, 15.909 * SCALE);
	ctx.closePath();
	ctx.fill();

	ctx.restore();
}

drawRays(flagCtx); //? 0deg
drawRays(flagCtx, Math.PI / 4); //? 45deg
drawRays(flagCtx, Math.PI / 2); //? 90deg
drawRays(flagCtx, (Math.PI * 3) / 4); //? 135deg
