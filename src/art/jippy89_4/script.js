/**
 * The goal of this canvas is to support other canvases,
 * by making your canvas art pixel perfect. This will help the OCDs. Including me ;D.
 * 
 * You can simply use it two ways.
 * You simply just have to run the `drawGridlines` function the last to create the grid lines
 * This way it will read the canvas `width` and `height` if you resize in your code.
 * My recommendation is keep the canvas `width` and `height` in the form of multiplication by 5
 * 
 * Then you can draw the things you wanted.
 * Or if you have your own flow just copy the function to your code and just tinker around with it.
 * 
 * --- ONCE YOU'RE DONE
 * Once you're done with your art, just remove the whole `drawGridlines` function
 * and submit it. Why?
 * 1. It could make your canvas art ugly. Hence you will probably comment the code.
 * 2. If you just keep it in the script, maintainers will tell you to remove unused code.
 *    Because maintainers doesn't accept unused code.
 */

function start () {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    draw(canvas)
    drawGridlines(canvas, {
      guides: {
        lineWidth: 1,
        vertical: [30, 270],
        horizontal: [30, 270],
        strokeStyle: 'blue'
      },
      grid: {
        size: 10,
        lineWidth: .25,
        strokeStyle: 'rgba(0,0,0,1)'
      }
    })
  }
}

/** Do your actual drawings here! */
function draw(canvas) {
  const ctx = canvas.getContext('2d');

  const radius = 90

  // Keep your canvas awesome.
  ctx.beginPath()
  ctx.lineWidth = 40
  ctx.strokeStyle = '#ea4335'
  ctx.arc(150, 150, radius, - Math.PI / 4, Math.PI + Math.PI / 5, true)
  ctx.stroke()

  ctx.beginPath()
  ctx.strokeStyle = '#f0b501'
  ctx.arc(150, 150, radius, Math.PI + Math.PI / 5, Math.PI - Math.PI / 8, true)
  ctx.stroke()

  ctx.beginPath()
  ctx.strokeStyle = '#2ba24c'
  ctx.arc(150, 150, radius, Math.PI - Math.PI / 8, 1, true)
  ctx.stroke()

  ctx.beginPath()
  ctx.strokeStyle = '#3b7ded'
  ctx.arc(150, 150, radius, 1, 0 - Math.PI / 30, true)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(250, 160)
  ctx.lineTo(150, 160)
  ctx.stroke()
  ctx.fill()

  ctx.beginPath()
  ctx.clearRect(150, 130, 150, 12)
}


/**
 * Expect to get `canvas`
 * @param {*} canvas 
 * @param {Object} options  
 * @param {*} options.padding number 
 * @param {*} options.guides object
 * @param {number} options.guides.lineWidth object
 * @param {string=} [options.guides.grid.strokeStyle=black] For colors like hex, rgb, rgba
 * @param {*} options.guides.vertical array [x, x1, x2]
 * @param {*} options.guides.horizontal array [y, y1, y2]
 * @param {*} options.grid object 
 * @param {*} options.grid.size number 
 * @param {*} options.grid.lineWidth number
 * @param {string=} [options.grid.strokeStyle=black] For colors like hex, rgb, rgba
 */
function drawGridlines (canvas, options) {
  const {
    grid
  } = options

  const ctx = canvas.getContext('2d');

  ctx.beginPath()
  ctx.strokeStyle = grid.lineWidth
  ctx.lineWidth = grid.lineWidth

  // Draw vertical line
  for(let x=grid.size; x < canvas.width; x+=grid.size) {
    console.log('x', x)
    ctx.moveTo(x, 0)
    ctx.lineTo(x, canvas.height)
  }
  // Draw horizontal line
  for(let y=grid.size; y < canvas.width; y+=grid.size) {
    console.log('y', y)
    ctx.moveTo(0, y)
    ctx.lineTo(canvas.width, y)
  }
  ctx.stroke()
  // Get canvas `width` and `height`
  // Draw padding lines with a line that is thicker.
  // Draw the gridline
  // Optional: Allow bool value to show coordinates (x, y) and a dot(?)
}