"use strict";
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouse = {
	x: window.innerWidth / 2,
	y: window.innerHeight / 2,
	isDown: false
};

window.addEventListener("mousedown", function() {
	mouse.isDown = true;
});

window.addEventListener("mouseup", function() {
	mouse.isDown = false;
});

window.addEventListener("mousemove", function(event) {
	mouse.x = event.clientX;
	mouse.y = event.clientY;
});

window.addEventListener("resize", function() {
	canvas.width = window.innerWidth;	
	canvas.height = window.innerHeight;
});

window.addEventListener("click", function() {

});

canvas.addEventListener("touchstart", function() {
	mouse.isDown = true;
});

canvas.addEventListener("touchmove", function(event) {
  event.preventDefault();
  mouse.x = event.touches[0].pageX;
  mouse.y = event.touches[0].pageY;
});

canvas.addEventListener("touchend", function() {
  mouse.isDown = false;
});

function Particle(position, radius, color, radians, ringRadius, travelRate) {
	this.position = {
		x: position.x,
		y: position.y	
	};
	this.radius = radius;
	this.color = color;
	this.distanceFromCenter = 0;
	this.radians = {
		x: radians,
		y: radians
	};
	this.travelRate = {
		x: travelRate.x,
		y: travelRate.y
	};
	this.velocity = 1;

	this.update = function() {
		this.radians.x += this.travelRate.x;
		this.radians.y += this.travelRate.y;
		
		
		this.distanceFromCenter += this.velocity;

		if (this.distanceFromCenter > ringRadius || this.distanceFromCenter < -ringRadius)
			this.velocity = -this.velocity;

		this.position.x = this.position.x + Math.cos(this.radians.x) * this.distanceFromCenter;
		this.position.y = this.position.y + Math.sin(this.radians.y) * this.distanceFromCenter;

		this.draw();
	};

	this.draw = function() {
		c.beginPath();
		c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);	
		c.fillStyle = this.color;
		c.fill();
		c.closePath();
	};
}

function Ring(radius) {
	this.particles = [];
	this.radius = radius;

	this.init = function() {
		let radianDifference = (Math.PI * 2) / 30;
		let amount = 0;

		for (let i = 0; i < 30; i++) {
			let position = {x: Math.cos(amount) + (canvas.width / 2), y: Math.sin(amount) + (canvas.height / 2)};
			this.particles.push(new Particle(position, 3, 'white', amount, this.radius, {x: 0.01,  y: 0.008 }));
			amount += radianDifference;
		}
	};

	this.init();

	this.update = function() {
		this.particles.forEach(function(particle) {
			particle.update();
		});
	};
}

let rings = [];
let distance = 0;
for (let i = 1; i < 10; i++) {
	distance += i / 2;
	rings.push(new Ring(distance));
}


function animate() {
	window.requestAnimationFrame(animate);
	c.fillStyle = '#111';
	c.fillRect(0, 0, canvas.width, canvas.height);

	for (let i = 0; i < rings.length; i++)
		rings[i].update();
}

animate();