var canvas = document.getElementById("mycanvas");
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var mousex = canvas.width / 2, 
	mousey = canvas.height / 2;

var shrinkCircles = false;


/*
* *-----------------------------
*  Event Listeners
* *-----------------------------
*/

window.addEventListener("mousemove", function(e) {
	mousex = e.clientX;
	mousey = e.clientY;
});

window.addEventListener("mousedown", function(e) {
	shrinkCircles = true;
});

window.addEventListener("mouseup", function(e) {
	shrinkCircles = false;
});

window.addEventListener("resize", function(e) {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});

function Circle(xDisplacement, yDisplacement, distanceFromCenter, travelsClockwise, color) {
	this.timer = 0;
	this.xCoord = 0;
	this.yCoord = 0;
	this.xDelay = mousex;
	this.yDelay = mousey;
	this.distanceFromCenter = distanceFromCenter;

	this.update = function() {
		if (travelsClockwise == true) {
			this.timer -= 0.05; 
		} else {
			this.timer += 0.05;
		}

		// Shrink / expand circles during events
		if (shrinkCircles == true) {
			this.distanceFromCenter -= 1; 
		} else {
			if (this.distanceFromCenter < distanceFromCenter) {
				this.distanceFromCenter += 1; 
			}
		}

		this.xDelay += (mousex - this.xDelay) * 0.05;
		this.yDelay += (mousey - this.yDelay) * 0.05;

  	this.xCoord = this.xDelay + Math.sin(this.timer) * this.distanceFromCenter + xDisplacement;
		this.yCoord = this.yDelay + Math.cos(this.timer) * this.distanceFromCenter + yDisplacement;

		// Prevent circles from going off screen
		this.xCoord = Math.max(Math.min(this.xCoord, canvas.width), 0);
		this.yCoord = Math.max(Math.min(this.yCoord, canvas.height), 0);

		this.draw();	
	}

	this.draw = function() {
		c.beginPath();
		c.arc(this.xCoord, this.yCoord, 15, 0, 2*Math.PI, true);
		c.strokeStyle = color;	
		c.stroke();
		c.fillStyle = color;
		c.fill();
		c.closePath();
	}
}

var circles = [
	new Circle(null, null, 100, true, "#9FF75C"),
	new Circle(null, null, 100, false, "9FF75C"),

	new Circle(100, 0, 50, false, "#29D2EA"),
	new Circle(-100, 0, 50, true, "#29D2EA"),
	new Circle(0, 100, 50, false, "#29D2EA"),
	new Circle(0, -100, 50, true, "#29D2EA"),

	new Circle(170, 0, 25, true, "#9FF75C"),
	new Circle(-170, 0, 25, false, "#9FF75C"),
	new Circle(0, 170, 25, true, "#9FF75C"),
	new Circle(0, -170, 25, false, "#9FF75C"),
];

function run() {
  
	c.fillStyle = 'rgba(0,0,0,0.05)';
	c.fillRect(0,0,canvas.width,canvas.height);

	for (var i = 0; i < circles.length; i++) {
		circles[i].update();
	}
  
  window.requestAnimationFrame(run);
}

run();
