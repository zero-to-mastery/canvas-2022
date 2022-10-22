var particleNumber = 1800;
//try to change the particle number

window.requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 100 / 10);
    }
  );
})();


var c = document.getElementById("c");
var ctx = c.getContext("2d");
//context and id of canvas

var w = window.innerWidth;
var h = window.innerHeight;
//height and width

c.width = w;
c.height = h;
//settin the height and width

function between(min, max) {
  return Math.random() * (max - min) + min;
}

var particles = [];
// storage for particles

for (i = 0; i < particleNumber; i++) {
  setTimeout(function () {
    particles.push(new createParticle());
  }, i * 4.5);
  // particle adding
}


function createParticle() {
  this.x = c.width / 2;
  this.y = c.height / 2;

  this.angle = between(3, 10);
  this.speed = c.width / 450;

  this.size = 4;

  var r = "#FFECEF";
  var o = "#FFCACA";
  var y = "#FFECEF";
  var array = [r, o, y];
  this.color = array[Math.floor(Math.random() * 3)];
}

function draw() {
  requestAnimFrame(draw);

  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, c.width, c.height);

  for (t = 0; t < particles.length; t++) {
    var p = particles[t];

    ctx.beginPath();
    ctx.fillStyle = p.color;
    ctx.arc(p.x, p.y, p.size, Math.PI * 2, false);
    ctx.fill();

    p.x += Math.cos(Math.PI + p.angle) * p.speed;
    p.y += Math.sin(Math.PI + p.angle) * p.speed;
  }
}

draw();
