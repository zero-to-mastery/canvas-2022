const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');
const maxRadius = 40;
const minRadius = 2;
const mouse = {
  x: undefined,
  y: undefined,
};
let circleArray = [];

const drawCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height =  window.innerHeight;
};

const random_hex_color_code = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

const colorArray = [
  `${random_hex_color_code()}`,
  `${random_hex_color_code()}`,
  `${random_hex_color_code()}`,
  `${random_hex_color_code()}`,
  `${random_hex_color_code()}`,
];

window.addEventListener('mousemove', function(e) {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener('resize', function() {
  drawCanvas();
  init(); 
});

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = () => {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  };

  this.update = () => {
    if (this.x + this.radius > innerWidth || this.x -this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y -this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    // interactivity
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 
      && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
        if (this.radius < maxRadius) {
          this.radius += 1;
        }
    } else if (this.radius > this.minRadius) {
      this.radius -=1;
    }

    this.draw();
  }
};

const drawCircles = () => {
  for (let i = 0; i < 800; i++) {
    const radius = Math.random() * 3 + 1;
    const x = Math.random() * (window.innerWidth - radius * 2) + radius;
    const y = Math.random() * (window.innerHeight - radius * 2) + radius;
    const dx = (Math.random() - 0.5);
    const dy = (Math.random() - 0.5);

    circleArray.push(new Circle(x, y, dx, dy, radius));
  };
};

const animate = () => {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  circleArray.forEach(circle => {
    circle.update();
  });
};

function init() {
  circleArray = [];
  drawCircles();
};

function draw() {
  drawCanvas();
  init();
  animate();
}

window.onload = draw;
