const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
let hue = 0;

const mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 6 + 3;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.color = 'white';
  }

  #draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  #boundries() {
    if (this.x - this.size > canvas.width) this.x = 0;
    else if (this.x + this.size < 0) this.x = canvas.width;

    if (this.y - this.size > canvas.height) this.y = 0;
    else if (this.y + this.size < 0) this.y = canvas.height;
  }

  update() {
    this.#draw();
    this.#boundries();
    this.color = 'hsl(' + hue + ', 100%, 50%)';

    this.x += this.speedX;
    this.y += this.speedY;
  }
}

function particleControl() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    for (let j = i; j < particles.length; j++) {
      const disPartX = particles[i].x - particles[j].x;
      const disPartY = particles[i].y - particles[j].y;
      const disBetweenParticles = Math.sqrt(
        disPartX * disPartX + disPartY * disPartY
      );

      const disMouseX = particles[i].x - mouse.x;
      const disMouseY = particles[i].y - mouse.y;
      const disBetweenMouse = Math.sqrt(
        disMouseX * disMouseX + disMouseY * disMouseY
      );

      if (disBetweenParticles < 200) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = 'hsl(' + hue + ', 100%, 50%)';
        ctx.stroke();
        ctx.closePath();
      }

      if (disBetweenMouse < 500) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = 'hsl(' + hue + ', 100%, 50%)';
        ctx.stroke();
        ctx.closePath();
      }
    }
  }
}

function spawnParticles(amount) {
  for (let i = 0; i < amount; i++) {
    particles.push(
      new Particle(Math.random() * canvas.width, Math.random() * canvas.height)
    );
  }
}
spawnParticles(100);

function animate() {
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgb(20, 20, 20, 0.1';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  particleControl();
  hue += 0.5;
  requestAnimationFrame(animate);
}

animate();
