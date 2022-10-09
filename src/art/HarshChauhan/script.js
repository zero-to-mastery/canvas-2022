const canvas = document.querySelector("canvas");
const ctx1 = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");

canvas2.width = innerWidth;
canvas2.height = innerHeight;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

//Defining Mouse.
var mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

//Consistent size(design), while resizing
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
});

window.addEventListener("mousemove", function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

// Function are first-class Object in Javascript :) Creating Object
function Atom(x, y, radius, color, xOssze, yOssze, forgSzog, startRadian) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  this.radians = startRadian;
  this.velocity = 0.04;

  this.distanceFromCenter = 180;
  this.currentCenter = { x: x, y: y };

  this.xOssze = xOssze;
  this.yOssze = yOssze;
  this.forgSzog = forgSzog;

  this.update = () => {
    const lastPoint = { x: this.x, y: this.y };

    this.radians += this.velocity;

    const xkoo = Math.cos(this.radians) * this.distanceFromCenter * xOssze;
    const ykoo = Math.sin(this.radians) * this.distanceFromCenter * yOssze;

    const xkootr =
      xkoo * Math.cos(this.forgSzog) - ykoo * Math.sin(this.forgSzog);
    const ykootr =
      xkoo * Math.sin(this.forgSzog) + ykoo * Math.cos(this.forgSzog);

    this.x = this.currentCenter.x + xkootr;
    this.y = this.currentCenter.y + ykootr;
    this.draw(lastPoint);
  };

  this.draw = (lastPoint) => {
    ctx1.beginPath();
    ctx1.strokeStyle = this.color;
    ctx1.lineWidth = this.radius;
    ctx1.moveTo(lastPoint.x, lastPoint.y);
    ctx1.lineTo(this.x, this.y);
    ctx1.stroke();
    ctx1.closePath();
  };
}

const colors = ["#fff44f", "#9acd32", "#fffafa"];

let atoms;

function init() {
  atoms = [];
  atoms.push(
    new Atom(
      canvas.width / 2,
      canvas.height / 2,
      5,
      colors[0],
      1,
      0.3,
      Math.PI / 6,
      0
    )
  );
  atoms.push(
    new Atom(
      canvas.width / 2,
      canvas.height / 2,
      5,
      colors[1],
      1,
      0.3,
      -Math.PI / 6,
      Math.PI
    )
  );
  atoms.push(
    new Atom(
      canvas.width / 2,
      canvas.height / 2,
      5,
      colors[2],
      1,
      0.3,
      Math.PI / 2,
      -Math.PI
    )
  );
  ctx2.clearRect(0, 0, canvas.width, canvas.height);
  ctx2.beginPath();
  ctx2.globalCompositeOperation = "destination-over";
  ctx2.arc(canvas.width / 2, canvas.height / 2, 30, 0, Math.PI * 2, false);
  const gradient = ctx2.createRadialGradient(
    canvas.width / 2,
    canvas.height / 2,
    0,
    canvas.width / 2,
    canvas.height / 2,
    35
  );
  gradient.addColorStop(0, "white");
  gradient.addColorStop(1, "#FEE715FF");
  ctx2.fillStyle = gradient;
  ctx2.fill();
  ctx2.closePath();
}

// Animating
function animate() {
  requestAnimationFrame(animate);
  ctx1.fillStyle = "rgba(16, 24, 32, 0.09)";
  ctx1.fillRect(0, 0, canvas.width, canvas.height);
  atoms.forEach((atom) => {
    atom.update();
  });
  ctx1.rotate(Math.PI * 2);
}

init();
animate();
