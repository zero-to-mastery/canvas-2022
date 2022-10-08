const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");
let newImage = new Image();
newImage.src = 'plumbob-removebg.jpg'

// When it loads
newImage.onload = () => {
    // Draw the image onto the context
    ctx.drawImage(newImage, 200, 0,100 , 208);
}
// Create gradient
const grd = ctx.createRadialGradient(100,80,0,90,60,180);
grd.addColorStop(0,"purple");
grd.addColorStop(1,"white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(5,5,300,30000);

ctx.font = "55px Arial";
ctx.strokeText("Sul Sul", 15, 120);
