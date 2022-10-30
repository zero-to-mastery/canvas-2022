const canvas = document.querySelector("canvas");
const scoreElement = document.querySelector("#score");
const ctx = canvas.getContext("2d");

let frame = 0;
let animationRequest = null;
let score = 0;
let gameStarted = false;

const tileSize = 20;
const tileCount = 20;

canvas.width = tileCount * tileSize;
canvas.height = tileCount * tileSize;

class Apple {
  constructor(position) {
    this.position = position;
  }

  draw() {
    ctx.fillStyle = "#e74c3c";
    ctx.fillRect(
      this.position.x * tileSize,
      this.position.y * tileSize,
      tileSize,
      tileSize
    );
  }
}

let apple = new Apple({ x: 15, y: 15 });

class Snake {
  constructor(position, velocity) {
    this.position = position;
    this.velocity = velocity;
    this.trail = [];
    this.tail = 5;
  }

  update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    for (let i = 0; i < this.trail.length; i++) {
      if (
        this.trail[i].x === this.position.x &&
        this.trail[i].y === this.position.y &&
        gameStarted
      ) {
        gameOver();
      }
    }

    this.trail.push({
      x: this.position.x,
      y: this.position.y,
    });

    while (this.trail.length > this.tail) {
      this.trail.shift();
    }
  }

  draw() {
    ctx.fillStyle = "#2ecc71";

    for (let i = 0; i < this.trail.length; i++) {
      ctx.fillRect(
        this.trail[i].x * tileSize,
        this.trail[i].y * tileSize,
        tileSize,
        tileSize
      );
    }
  }
}

const snake = new Snake({ x: 10, y: 10 }, { x: 0, y: 0 });

const animate = () => {
  animationRequest = requestAnimationFrame(animate);
  frame++;

  if (frame % 5 === 0) {
    ctx.fillStyle = "#2c3e50";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    snake.update();

    snake.draw();
    apple.draw();

    if (
      snake.position.x == apple.position.x &&
      snake.position.y === apple.position.y
    ) {
      snake.tail++;
      score++;
      apple = new Apple({
        x: Math.floor(Math.random() * tileCount),
        y: Math.floor(Math.random() * tileCount),
      });
      scoreElement.innerHTML = score;
    }

    if (
      snake.position.x < 0 ||
      snake.position.x >= tileCount ||
      snake.position.y < 0 ||
      snake.position.y >= tileCount
    ) {
      gameOver();
    }
  }
};

const gameOver = () => {
  cancelAnimationFrame(animationRequest);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "white";
  ctx.font = "30px monospace";
  ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2);
};

animationRequest = animate();

const handleKeyDown = (event) => {
  gameStarted = true;

  switch (event.key) {
    case "ArrowUp":
      if (snake.velocity.y === 0) {
        snake.velocity.x = 0;
        snake.velocity.y = -1;
      }
      break;
    case "ArrowRight":
      if (snake.velocity.x === 0) {
        snake.velocity.x = 1;
        snake.velocity.y = 0;
      }
      break;
    case "ArrowDown":
      if (snake.velocity.y === 0) {
        snake.velocity.x = 0;
        snake.velocity.y = 1;
      }
      break;
    case "ArrowLeft":
      if (snake.velocity.x === 0) {
        snake.velocity.x = -1;
        snake.velocity.y = 0;
      }
      break;
  }
};

window.addEventListener("keydown", handleKeyDown);
