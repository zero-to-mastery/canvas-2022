var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ww = window.innerWidth;
var wh = window.innerHeight;

var myCanvas = canvas.getContext('2d');

var count = 100;
var lcount = 6;
var layer = [];
var layery = [];
myCanvas.fillStyle = 'rgba(255,255,255,0.5)';
for (var l = 0; l < lcount; l++) {
  myCanvas.clearRect(0, 0, ww, wh);
  for (var i = 0; i < (count * (lcount - l)) / 1.5; i++) {
    var myx = Math.floor(Math.random() * ww);
    var myy = Math.floor(Math.random() * wh);
    var myh = l * 6 + 8;
    var myw = myh / 10;
    myCanvas.beginPath();
    myCanvas.moveTo(myx, myy);
    myCanvas.lineTo(myx + myw, myy + myh);
    myCanvas.arc(myx, myy + myh, myw, 0, 1 * Math.PI);
    myCanvas.lineTo(myx - myw, myy + myh);
    myCanvas.closePath();
    myCanvas.fill();
  }
  layer[l] = new Image();
  layer[l].src = canvas.toDataURL('image/png');
  layery[l] = 0;
}
function animate() {
  myCanvas.clearRect(0, 0, ww, wh);
  for (var l = 0; l < lcount; l++) {
    layery[l] += (l + 1.5) * 3.5;
    if (layery[l] > wh) {
      layery[l] = layery[l] - wh;
    }
    myCanvas.drawImage(layer[l], 0, layery[l]);
    myCanvas.drawImage(layer[l], 0, layery[l] - wh);
  }
  requestAnimationFrame(animate);
}

animate(animate);
