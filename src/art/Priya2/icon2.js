var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100, 75, 20, 0, 2 * Math.PI);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.stroke();
var canvas = document.getElementById('myCanvas');
  if (canvas.getContext){
    var ctx1 = canvas.getContext('2d');
    let height = 200 * Math.cos(Math.PI / 6);
    ctx1.beginPath();
    ctx1.moveTo(100,300);
    ctx1.lineTo(300,300);
    ctx1.lineTo(200,300-height);
    ctx1.closePath();
    
    ctx1.fillStyle = "red";
    ctx1.fill();
    ctx1.stroke();
  }