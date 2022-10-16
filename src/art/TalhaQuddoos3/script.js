const canvas = document.getElementById("circle");
const ctx = canvas.getContext("2d");
var colors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#8B00FF"];

const mainCircleRadius = 300;
const mainCircleX = 350;
const mainCircleY = 350;

var angle1 = 180;
var angle2 = 30;
var colorIndex = 0;
var linesPerColor = 10;
var tempColorCount = 0;

while(angle2 < 360) {
    drawLine(angle1, angle2, colors[colorIndex]);
    tempColorCount++;
    if(tempColorCount >= linesPerColor) {
        tempColorCount = 0;
        colorIndex++;
        if(colorIndex == colors.length) colorIndex = 0;
    }

    angle1 += 2;
    angle2 += 2;
}



function drawLine(angle1, angle2, color) {
    var x1 = mainCircleX + mainCircleRadius * Math.cos(angle1 * Math.PI / 180);
    var y1 = mainCircleY + mainCircleRadius * Math.sin(angle1 * Math.PI / 180);

    var x2 = mainCircleX + mainCircleRadius * Math.cos(angle2 * Math.PI / 180);
    var y2 = mainCircleY + mainCircleRadius * Math.sin(angle2 * Math.PI / 180);

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.stroke();
}


function toRadians(angle) {
    return angle * (Math.PI / 180)
}