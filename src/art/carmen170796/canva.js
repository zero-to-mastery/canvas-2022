const canvas = document.getElementById('conejo')
const ctx = canvas.getContext('2d');

// 
//canvas.height = window.innerHeight;

var heightRatio = 1.5;
canvas.width = window.innerWidth;
canvas.height = canvas.width * heightRatio;

const startWidth = canvas.width/12
const startHeight = canvas.height/12

ctx.lineWidth = 15;
//draw head shape
ctx.moveTo(startWidth, startHeight)
ctx.quadraticCurveTo( startWidth+200, startHeight-200 , startWidth+400, startHeight )
ctx.lineTo(startWidth+400,startHeight+300)
ctx.quadraticCurveTo( startWidth+380, startHeight+360, startWidth+350 , startHeight + 350 )
ctx.lineTo(startWidth+350-300 , startHeight + 350)
ctx.quadraticCurveTo( startWidth + 10, startHeight + 350 - 15, startWidth, startHeight+ 350 -50 )
ctx.closePath()
ctx.stroke()

// draw left eye
ctx.beginPath();
ctx.arc(startWidth + 115, startHeight+ 100, 20, 0, 2 * Math.PI)
ctx.arc(startWidth + 285, startHeight+ 100, 20, 0, 2 * Math.PI)
ctx.fill()


// draw muzzle 
const startNoseX = startWidth + 275 //275
const startNoseY =startHeight + 200 //200
ctx.beginPath(); 
ctx.moveTo(startNoseX, startNoseY)
ctx.bezierCurveTo(startNoseX + 75 , startNoseY, startNoseX + 75 ,startNoseY + 100, startNoseX, startNoseY + 100 )
ctx.lineTo( startNoseX-150 ,startNoseY+100)
ctx.bezierCurveTo(startNoseX - 150 - 75, startNoseY + 100 , startNoseX -150 - 75 , startNoseY, startNoseX - 150, startNoseY )
ctx.closePath()
ctx.moveTo(startNoseX - 75 , startNoseY)
ctx.lineTo(startNoseX - 75 , startNoseY + 100)
ctx.stroke()

// draw nose 
const noseX = startWidth+200
const noseY = startHeight+150

ctx.beginPath()
ctx.moveTo(noseX,noseY)
ctx.lineTo(noseX+50, noseY)
ctx.lineTo(noseX+50, noseY+50)
ctx.bezierCurveTo( noseX + 50 , noseY + 100  , noseX - 50, noseY   + 100, noseX - 50, noseY+50)
ctx.lineTo(noseX-50, noseY)
ctx.closePath()
ctx.fill()

// draw ears 
ctx.beginPath()
ctx.moveTo(startWidth+370,startHeight-30)
ctx.bezierCurveTo( startWidth+400 , startHeight -40, startWidth +470, startHeight -20, startWidth + 470, startHeight + 30)
ctx.lineTo(startWidth+470 , startHeight +200)
ctx.quadraticCurveTo( startWidth+ 470, startHeight+ 210, startWidth+400 , startHeight + 200 )
ctx.moveTo(startWidth+30,startHeight-30)
ctx.bezierCurveTo( startWidth-20 , startHeight -40, startWidth-70 , startHeight -20, startWidth -70 , startHeight + 30)
ctx.lineTo(startWidth - 70 , startHeight +200)
ctx.quadraticCurveTo( startWidth -70, startHeight+ 210, startWidth, startHeight + 200 )





ctx.stroke()










