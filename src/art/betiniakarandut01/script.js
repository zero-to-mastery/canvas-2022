const canvas = document.getElementById("canvas01");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//uncomment line six(6) if you want to see the back of your flower
// ctx.globalCompositeOperation = 'destination-over'; 

colorVariance = 0.5;

let num = 0;
let scale = 10;
let endSize  = Math.PI * 2;

function myHactoberfestFlower(){
	let angle = num * 8; // varies the shape of flower
	let radialSize = scale * Math.sqrt(num);
	let axisX = radialSize * Math.sin(angle) + canvas.width/2;
	let axisY = radialSize * Math.cos(angle) + canvas.height/2;
	ctx.fillStyle = 'hsl('+colorVariance+', 100%, 100%)';
	ctx.strokeStyle = "red";
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.arc(axisX, axisY, 40, 0, endSize);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	num++;
	colorVariance++
}

// Function to animate flower or make it glow
function animate(){
	myHactoberfestFlower();
	if(num > 350) return;
	requestAnimationFrame(animate);
}

animate();