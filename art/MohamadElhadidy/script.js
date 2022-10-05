var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var image = document.getElementById("source");

const img = {
     w: 70,
     h: 80,
     x: 170,
     y: 310,
     dx: 2
}
function draw() {
     ctx.font = "50px serif";
     ctx.strokeStyle = "red";
     ctx.strokeText("Egyp", 60, 180);
     ctx.strokeStyle = "white";
     ctx.strokeText("tian", 165, 180);
     ctx.strokeStyle = "black";
     ctx.strokeText("Flag", 250, 180);
     ctx.fillStyle = 'red';
     ctx.fillRect(0, 200, 400, 100);
     ctx.fillStyle = 'white';
     ctx.fillRect(0, 300, 400, 100);
     ctx.fillStyle = 'black';
     ctx.fillRect(0, 400, 400, 100);
     ctx.drawImage(image, img.x, img.y, img.w, img.h)
}
function clear() {
     ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function update() {
     clear()
     draw()
     img.x += img.dx
     if (img.x + img.w > 400 || img.x - img.w < -img.w) {
          img.dx *= -1
     }
     requestAnimationFrame(update)
}

update()


