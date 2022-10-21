const gameCanvasArea = document.getElementById('gameCanvas')
gameCanvasArea.width = innerWidth;
gameCanvasArea.height = innerHeight;

window.addEventListener('resize', () => {
  gameCanvasArea.width = innerWidth
  gameCanvasArea.height = innerHeight
  endGame()
})

const ctx = gameCanvasArea.getContext('2d')
const scoreItem = document.getElementById('scoreItem')
const hiscoreItem = document.getElementById('hiscoreItem')
const beginGame = document.getElementById('beginGame')
const modelItem = document.getElementById('modelItem')
const lgScoreItem = document.getElementById('lgScoreItem')

const gravity = 0.98
let x = gameCanvasArea.width / 2
let y = gameCanvasArea.height / 2
let projectiles = []
let enemies = []
let particles = []
let score = 0
let hiScore = localStorage.getItem('hiScore') || 0
let animationId
let spanEnemiesInterval
let spawnTime = 1000
hiscoreItem.innerHTML = hiScore

class Ball {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
  }

  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, Math.PI * 2, 0, false)
    ctx.fillStyle = this.color
    ctx.fill()
  }
}

class Shooter extends Ball {
  constructor(x, y, radius, color, velocity) {
    super(x, y, radius, color)
    this.velocity = velocity
  }

  update() {
    this.draw()
    this.x = this.x + this.velocity.x
    this.y = this.y + this.velocity.y
  }
}

class Particle extends Shooter {
  constructor(x, y, radius, color, velocity) {
    super(x, y, radius, color, velocity)
    this.alpha = 1
  }

  draw() {
    ctx.save()
    ctx.globalAlpha = this.alpha
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, Math.PI * 2, 0, false)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.restore()
  }

  update() {
    this.draw()
    this.velocity.x += gravity
    this.velocity.y += gravity
    this.x = this.x + this.velocity.x * 2
    this.y = this.y + this.velocity.y * 2
    this.alpha -= 0.01
  }
}

function updateScore(times = 1) {
  spawnTime *= 0.9995
  score += 100 * times
  scoreItem.innerHTML = score
}

function calculateVelocity(x, y, x1 = gameCanvasArea.width / 2, y1 = gameCanvasArea.height / 2) {
  const angle = Math.atan2(y1 - y, x1 - x)
  const velocity = {
    x: Math.cos(angle),
    y: Math.sin(angle)
  }
  return velocity
}

function animate() {
  animationId = requestAnimationFrame(animate)
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
  ctx.fillRect(0, 0, gameCanvasArea.width, gameCanvasArea.height)
  player.draw()

  particles.forEach((particle, index) => {
    if (particle.alpha <= 0) {
      setTimeout(() => {
        particles.splice(index, 1)
      }, 0)
    } else {
      particle.update()
    }
  })

  projectiles.forEach((projectile, index) => {
    projectile.update()
    if (projectile.x + projectile.radius < 1 || projectile.x - projectile.radius > gameCanvasArea.width || projectile.y + projectile.radius < 0 || projectile.y - projectile.radius > gameCanvasArea.height) {
      setTimeout(() => {
        projectiles.splice(index, 1)
      }, 0)
    }
  })

  enemies.forEach((enemy, index) => {
    enemy.update()

    const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y)

    if (dist - enemy.radius - player.radius < 1) {
      endGame()
    }

    projectiles.forEach((projectile, projectileIndex) => {
      const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y)

      if (dist - enemy.radius - projectile.radius < 0) {
        for (let i = 0; i < enemy.radius * 1; i++) {
          particles.push(new Particle(projectile.x, projectile.y, Math.random() * 3, enemy.color, {
            x: (Math.random() - 0.5) * (Math.random() * 9.8 - 0.5),
            y: (Math.random() - 0.5) * (Math.random() * 9.8 - 0.5)
          }))
        }

        if (enemy.radius - 10 > 10) {
          updateScore()
          enemy.radius -= 8
          setTimeout(() => {
            projectiles.splice(projectileIndex, 1)
          }, 0)
        } else {
          updateScore(2.5)
          setTimeout(() => {
            enemies.splice(index, 1)
            projectiles.splice(index, 1)
            projectiles.splice(projectileIndex, 1)
          }, 0)
        }
      }
    })
  })
}

function shootEnemy(e) {
  let x = gameCanvasArea.width / 2,
    y = gameCanvasArea.height / 2

  calculatedVelocity = calculateVelocity(x, y, e.clientX, e.clientY)
  calculatedVelocity.x *= 5.5
  calculatedVelocity.y *= 5.5

  projectiles.push(new Shooter(x, y, 5, 'white', calculatedVelocity))
}

function init() {
  player = new Ball(x, y, 10, 'white')
  projectiles = []
  enemies = []
  particles = []
  score = 0
  spawnTime = 1000
  hiscoreItem.innerHTML = score
  scoreItem.innerHTML = score
  hiscoreItem.innerHTML = hiScore
}

function endGame() {
  clearInterval(spanEnemiesInterval)
  cancelAnimationFrame(animationId)
  gameCanvasArea.removeEventListener('click', shootEnemy)
  modelItem.style.display = 'flex'
  if (score > hiScore) {
    hiScore = score
    localStorage.setItem('hiScore', hiScore)
  }
  lgScoreItem.innerHTML = score
}

function spanEnemies() {
  spanEnemiesInterval = setTimeout(() => {
    let x, y
    const radius = Math.random() * 16 + 14
    if (Math.random() < 0.5) {
      x = Math.random() < 0.5 ? 0 - radius : gameCanvasArea.width + radius
      y = Math.random() * gameCanvasArea.height
    } else {
      x = Math.random() * gameCanvasArea.width
      y = Math.random() < 0.5 ? 0 - radius : gameCanvasArea.height + radius
    }
    const color = `hsl(${Math.floor(Math.random() * 360)}, 50%, 50%)`
    enemies.push(new Shooter(x, y, radius, color, calculateVelocity(x, y)))
    spanEnemies()
  }, spawnTime)
}

function startGame() {
  x = gameCanvasArea.width / 2,
    y = gameCanvasArea.height / 2
  gameCanvasArea.addEventListener('click', shootEnemy)
  init()
  animate()
  clearInterval(spanEnemiesInterval)
  spanEnemies()
  modelItem.style.display = 'none'
}

beginGame.addEventListener('click', startGame)