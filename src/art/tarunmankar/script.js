var c = document.getElementById("myCanvas");
c.width  = window.innerWidth;
c.height = window.innerHeight;
var ctx = c.getContext("2d");

var numBalls = 70;
var ballArray = [];

for (i = 0; i < numBalls; i++) {
  ballArray.push(new ball());
}

function ball() {
  var items = [
    "85, 221, 224,",
    "51, 101, 138,",
    "47, 72, 88,",
    "246, 174, 45,",
    "242, 100, 25,"
  ];

  function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  this.x = c.width / 2;
  this.y = c.height / 2;
  this.width = Math.floor(Math.random() * 12) + 4;
  this.color = 'rgba(' + random_item(items) + ' ' + Math.random() + ')';
  this.vx = Math.random() * 8 - 4;
  this.vy = Math.random() * 8 - 4;

  this.reset = function() {
    this.x = c.width / 2;
    this.y = c.height / 2;
    this.width = Math.floor(Math.random() * 12) + 4;
  };
}

drawBall = function() {
  ctx.fillStyle = "black";
  ctx.rect(0, 0, c.width, c.height);
  ctx.fill();

  for (i = 0; i < ballArray.length; i++) {
    var b = ballArray[i];
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.width, 0, 2 * Math.PI);
    ctx.fillStyle = b.color;
    ctx.fill();
    b.x += b.vx;
    b.y += b.vy;
    b.width += 0.1;

    if (b.x > c.width || b.x < 0 || b.y > c.height || b.y < 0) {
      b.reset();
    }
  }

  requestAnimationFrame(drawBall);
};

drawBall();
