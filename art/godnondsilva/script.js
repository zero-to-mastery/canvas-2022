var canvas = document.querySelector("#root-canvas");
var context = canvas.getContext("2d");

// Warning sign triangle
context.beginPath();
context.moveTo(200, 100);
context.lineTo(100, 300);
context.lineTo(300, 300);
context.closePath();

// Black outline for the warning sign
context.lineWidth = 10;
context.strokeStyle = '#666666';
context.stroke();

// Warning sign color (Global used #FFCC00)
context.fillStyle = "#FFCC00";
context.fill();

// Warning sign text (Exclamation mark)
context.font = "120px serif";
context.fillStyle = "black";
context.fillText("!", 180, 260);