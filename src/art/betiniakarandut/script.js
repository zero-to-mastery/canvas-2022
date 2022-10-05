const canvas = document.getElementById("canvas00");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation = 'destination-over';

let num = 0;
let scale = 10;
let endSize = Math.PI * 2;

// Function for adjusting shell parameters
function adjustParameter() {
	angle = num * 0.018;
	radialSize = scale * Math.sqrt(num); // The radial size of shell
	startingX = radialSize * Math.sin(angle) + canvas.width/2; // Position of shell relative to x-axis
	startingY = radialSize * Math.cos(angle) + canvas.height/1.5; // Position of shell relative to y-axis

}
// Function to draw myGreenShell
function myGreenShell(){
	ctx.fillStyle = "green";
	ctx.strokeStyle = "black";
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.arc(startingX, startingY, num, 0, endSize)
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	num++;
}

function animate(){
	adjustParameter();
	myGreenShell();
	if(num > 200) return;
	requestAnimationFrame(animate);
}

animate();