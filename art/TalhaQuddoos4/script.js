const canvas = document.getElementById("circle");
const ctx = canvas.getContext("2d");
var colors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#8B00FF"];

const mainCircleRadius = 300;
const mainCircleX = 350;
const mainCircleY = 350;

var smallCircleRadius = 170;
var totalSmallCircles = 90;

var angle = 0;
var angleIncrement = Math.ceil(360 / totalSmallCircles);

var colorIndex = 0;
var circlesPerColor = Math.ceil(totalSmallCircles / colors.length);
var tempColorCount = 0;


for (var i = 0; i < totalSmallCircles; i++) {
    var x = mainCircleX + smallCircleRadius * Math.cos(toRadians(angle));
    var y = mainCircleY + smallCircleRadius * Math.sin(toRadians(angle));

    ctx.beginPath();
    ctx.arc(x + 2, y-2, smallCircleRadius, 0, 2 * Math.PI);
    ctx.strokeStyle = colors[colorIndex];
    ctx.stroke();

    tempColorCount++;
    if (tempColorCount >= circlesPerColor) {
        tempColorCount = 0;
        colorIndex++;

        if (colorIndex == colors.length || colorIndex < 0) colorIndex = 0;
    }



    angle += angleIncrement;
    
    
}


function toRadians(angle) {
    return angle * (Math.PI / 180)
}