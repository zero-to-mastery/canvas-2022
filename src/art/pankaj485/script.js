let canvas = document.getElementById("canvas");

canvas.width = 400;
canvas.height = 500;
canvas.style.zIndex = -2;

let blueOutline = canvas.getContext("2d");
let redOutline = canvas.getContext("2d");

// create blue outlines
blueOutline.fillStyle = "#0000ff";
blueOutline.beginPath();

blueOutline.moveTo(40, 30);
blueOutline.lineTo(270, 228);
blueOutline.lineTo(40, 228);

blueOutline.moveTo(40, 200);
blueOutline.lineTo(380, 410);
blueOutline.lineTo(40, 410);

blueOutline.fill();

// create red fills
redOutline.fillStyle = "#ff0000";
redOutline.beginPath();

redOutline.moveTo(50, 50);
redOutline.lineTo(250, 220);
redOutline.lineTo(50, 220);

redOutline.moveTo(50, 215);
redOutline.lineTo(350, 400);
redOutline.lineTo(50, 399);

redOutline.fill();
