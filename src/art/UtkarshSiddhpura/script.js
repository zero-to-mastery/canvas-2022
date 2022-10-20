// To Work on smaller devices the image resolution has to be lowered
window.addEventListener("load", () => {
	const canvas = document.getElementById("canvas");
	const ctx = canvas.getContext("2d");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	const width = canvas.width;
	const height = canvas.height;


	class Particle {
		constructor(effect, x, y, color) {
			this.effect = effect;
			this.originX = Math.floor(x);
			this.originY = Math.floor(y);
			this.x = x;
			this.y = y;
			this.color = color;
			this.size = this.effect.gap;
			this.vx = 0;
			this.vy = 0;
			this.ease = 0.08;
			this.dx = 0;
			this.dy = 0;
			this.dist = 0;
			this.angle = 0;
			this.drag = 0.9;
		}
		draw(ctx) {
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x, this.y, this.size, this.size);
		}
		update() {
			this.dx = this.effect.mouse.x - this.x;
			this.dy = this.effect.mouse.y - this.y;
			// Not using sqrt as it's an expensive operation
			this.dist = this.dx * this.dx + this.dy * this.dy;

			if (this.dist < this.effect.mouse.radius) {
				this.force = -this.effect.mouse.radius / this.dist;
				this.angle = Math.atan2(this.dy, this.dx);
				this.vx = this.force * Math.cos(this.angle);
				this.vy = this.force * Math.sin(this.angle);
			}

			this.x += (this.vx *= this.drag) + (this.originX - this.x) * this.ease;
			this.y += (this.vy *= this.drag) +(this.originY - this.y) * this.ease;
		}
	}

	class Effect {
		constructor(width, height) {
			this.width = width;
			this.height = height;
			this.particles = [];
			this.img = document.getElementById("ztm-img");
			this.centerX = this.width * .5;
			this.centerY = this.height * .5;
			this.x = this.centerX - this.img.width * .5;
			this.y = this.centerY - this.img.height * .5;
			this.gap = 6;
			this.mouse = {
				radius: 5500,
				x: undefined,
				y: undefined,
			}
			canvas.addEventListener("mousemove", (e) => {
				this.mouse.x = e.x; 
				this.mouse.y = e.y; 
			});
			canvas.addEventListener("touchmove", (e) => {
				this.mouse.x = e.x; 
				this.mouse.y = e.y; 
			});
		}
		init(ctx) {
			ctx.drawImage(this.img, this.x, this.y);
			const pixels = ctx.getImageData(0, 0, this.width, this.height).data;
			for (let y = 0; y < this.height; y+=this.gap) {
				for (let x = 0; x < this.width; x+=this.gap) {
					const redIndex = y * (this.width * 4) + (x * 4);
					const alpha = pixels[redIndex+3];
					if(alpha > 0) {
						const red = pixels[redIndex];
						const green = pixels[redIndex+1];
						const blue = pixels[redIndex+2];
						const rgbaColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
						this.particles.push(new Particle(this, x, y, rgbaColor));	
					}
				}
			}
		}
		addParticle() {
			this.particles.push(new Particle(this));
		}
		draw(ctx) {
			this.particles.forEach(particle => particle.draw(ctx));
		}
		update() {
			this.particles.forEach(particle => particle.update());
		}
	}

	const effect = new Effect(width, height);
	effect.init(ctx);
	function animate() {
		ctx.clearRect(0, 0, width, height);
		effect.draw(ctx);
		effect.update();
		requestAnimationFrame(animate);
	}
	animate();
});
