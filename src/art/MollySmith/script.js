const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 2;
        this.weight = 2;
        this.directionX = -2;
    }
    update() {
        if (this.y > canvas.height) {
         this.y = 0 - this.size;
         this.weight = 2;
         this.x = Math.random() * canvas.width * 1.4;
        }
        this.weight += 0.06;
        this.y += this.weight; 
        this.x += this.directionX;
    }
    draw() {
        ctx.fillStyle = "purple";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

const particle1 = new Particle(400, 800);
const particle2 = new Particle(200, 400);

function animateRain() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.01)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    particle1.update();
    particle1.draw();
    particle2.update();
    particle2.draw();
    requestAnimationFrame(animateRain);
}

animateRain();