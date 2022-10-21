const canvas = document.getElementById('canvas-container');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Prevent distortion when resizing window
window.addEventListener('resize', function () {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});

const bubblesArray = []; //initial array of bubbles

let hue = 0; // initial color value

// Initial bubble position relative to mouse
const mouse = {
	x: undefined,
	y: undefined,
};

// A blueprint for each component on the canvas using a class
class Components {
	constructor() {
		//this connects the bubble position to the mouse position
		this.x = mouse.x;
		this.y = mouse.y;

		this.size = Math.random() * 15 + 1; // produces a random size value

		this.speedX = Math.random() * 4 - 1.5; // produces a random speed value in the x direction
		this.speedY = Math.random() * 4 - 1.5; // produces a random speed value in the x direction
		this.color = 'hsl(' + hue + ', 100%, 50%)'; // produces a random color
	}

	update() {
		this.x += this.speedX; //moves the bubble in x direction
		this.y += this.speedY; //moves the bubble in y direction
	}

	draw() {
		//draw circular bubbles using values from the constructor blueprint
		ctx.strokeStyle = this.color;
		ctx.lineWidth = 2;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		ctx.stroke();

		// Canvas Text
		ctx.font = '30px sans-serif';
		ctx.fillStyle = this.color;
		ctx.fillText('Interconnectivity', 50, 80);
	}
}

// Click event listener
canvas.addEventListener('click', function (event) {
	mouse.x = event.x;
	mouse.y = event.y;
	for (let i = 0; i < 10; i++) {
		bubblesArray.push(new Components());
	}
});

function handleComponents() {
	for (let i = 0; i < bubblesArray.length; i++) {
		bubblesArray[i].update();
		bubblesArray[i].draw();

		// Calculates the distance between 2 bubbles
		for (let j = i; j < bubblesArray.length; j++) {
			const dx = bubblesArray[i].x - bubblesArray[j].x;
			const dy = bubblesArray[i].y - bubblesArray[j].y;
			const distance = Math.sqrt(dx * dx + dy * dy);

			// Draws a line between any 2 bubbles 150px close to each other
			if (distance < 150) {
				ctx.beginPath();
				ctx.strokeStyle = bubblesArray[i].color;
				ctx.moveTo(bubblesArray[i].x, bubblesArray[i].y);
				ctx.lineTo(bubblesArray[j].x, bubblesArray[j].y);
				ctx.stroke();
			}
		}
	}
}

// a looping animation function
function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	hue += 7;
	handleComponents();
	requestAnimationFrame(animate);
}
animate();
