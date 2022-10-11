window.requestAnimationFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webKitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 16);
    }
  );
})();

function Leader(x, y) {
  this.x = x;
  this.y = y;
  this.size = 40;
  this.colour =
    "hsl(" + parseInt(Math.floor(Math.random() * 360) + 1) + ", 100%, 50%)";
}

Leader.prototype.draw = function (c) {
  c.fillStyle = this.colour;
  c.beginPath();
  c.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
  c.fill();
  c.closePath;
};

Leader.prototype.step = function (width, height) {
  if (this.size > 0) {
    this.size -= 1;
  }

  if (this.size == 0) {
  }
};

window.addEventListener("load", function () {
  var canvas = document.getElementById("animation"),
    c = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight),
    entities = [],
    max = 300;

  c.fillStyle = "#101010";
  c.fillRect(0, 0, width, height);

  window.addEventListener("resize", function () {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  window.addEventListener("mousemove", function (e) {
    var posX = e.clientX,
      posY = e.clientY;

    var l = new Leader(posX, posY);
    entities.push(l);
  });

  function render() {
    c.fillStyle = "rgba(0, 0, 0, 0.1)";
    c.fillRect(0, 0, width, height);
    for (var i in entities) {
      entities[i].draw(c);
    }

    for (var i in entities) {
      entities[i].step(width, height);
    }

    requestAnimationFrame(render);
  }

  render();
});
