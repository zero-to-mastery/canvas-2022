const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight;


// find which measure is smaller between screen width and heigh, that way the animation will always fit the screen size
const minMeasure = Math.min(canvas.width, canvas.height);

// drawing will start at the center of screen
const startWidth = canvas.width/2;    
const startHeight = canvas.height/2;

// Used for drawing the sun, moon, earth and their orbits 
function drawCelestial ( centerX, centerY, diameter, shadowIntensity, shadowColor, strokeWidth, strokeColor, fillColor){
    ctx.shadowBlur = shadowIntensity;
    ctx.shadowColor = shadowColor;
    ctx.lineWidth = strokeWidth;
    ctx.beginPath()
    ctx.arc( centerX, centerY, minMeasure * diameter, 0 , 2 * Math.PI)
    ctx.fillStyle= fillColor
    ctx.fill()
    ctx.strokeStyle = strokeColor;
    ctx.stroke()
    ctx.closePath()
}



function animation (){
    // start with a clean canvas
    ctx.clearRect(0,0,canvas.width,canvas.height)
    // save the origin 
    ctx.save()
    // change the origin  to the center of screen
    ctx.translate(startWidth, startHeight);
    // draw sun 
    drawCelestial ( 0, 0, 0.05, 15, "#F4D780", 2, "#ffcc33", "#ffe484")
    // draw earth orbit
    drawCelestial ( 0, 0, 0.3, 15, "#e1e0e4", 0.75, "#e1e0e4", "transparent")
    // get actual date 
    const actualDate = new Date()
    // get seconds incluiding milliseconds to know where earth will be 
    const seconds = ((actualDate.getSeconds()*1000)+actualDate.getMilliseconds()) / 1000 
    // a full round around the sun would be 360deg  and we divided that by a number depending on how long we want the earth to take to complete a full round
    const rotationAngle = ((Math.PI*2)/12)
    ctx.rotate(rotationAngle * seconds)
    //draw  earth
    drawCelestial(0, minMeasure*0.3 , 0.02, 5, "skyblue", 2, "skyblue", "#14C9CB")
    // draw moon orbit
    drawCelestial(0, minMeasure*0.3 , 0.070, 5, "#e1e0e4", 0.5, "#e1e0e4", "transparent")
    // save changed origin 
    ctx.save()
    // change origin to be earth center 
    ctx.translate(0,minMeasure*0.3)
    ctx.rotate(rotationAngle * seconds) 
    // draw orbit
    drawCelestial(0, minMeasure*0.07, 0.005, 6, "#F5F3CE", 2, "#c9c9c9","#c9c9c9")
    ctx.restore()
    // restore origin to left upper edge of canvas 
    ctx.restore()
    window.requestAnimationFrame(animation)
}



window.requestAnimationFrame(animation)




