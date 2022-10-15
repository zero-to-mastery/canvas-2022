const canvas = document.getElementById("circle");
const ctx = canvas.getContext("2d");
var colors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#8B00FF"];

const mainCircleRadius = 300;
const mainCircleX = 350;
const mainCircleY = 350;

var smallCircleRadius = 50;
var totalSmallCircles = 180;

var angle = 360;
var angleIncrement = -Math.ceil(360 / totalSmallCircles);

var colorIndex = 0;
var circlesPerColor = Math.ceil(totalSmallCircles / colors.length);
var tempColorCount = 0;

var distanceFromEdge = 0;

var colorDir = 1;

for(var j = 0; j <= 7; j++) {
    var distanceIncrement = (smallCircleRadius / totalSmallCircles) * 1.5;
    for (var i = 0; i < totalSmallCircles; i++) {
        var x = mainCircleX + (mainCircleRadius - distanceFromEdge) * Math.cos(toRadians(angle));
        var y = mainCircleY + (mainCircleRadius - distanceFromEdge) * Math.sin(toRadians(angle));
        if(smallCircleRadius < 0) {
            break;
        }
        ctx.beginPath();
        ctx.arc(x, y, smallCircleRadius, 0, 2 * Math.PI);
        ctx.strokeStyle = colors[colorIndex];
        ctx.stroke();
    
        tempColorCount++;
        if(tempColorCount >= circlesPerColor) {
            tempColorCount = 0;
            colorIndex += colorDir;

            if(colorIndex == colors.length || colorIndex < 0) colorDir = -colorDir;
        }


    
        angle += angleIncrement;
        distanceFromEdge += distanceIncrement;
        smallCircleRadius -= 0.040;

        if(smallCircleRadius < 0) {
            break;
        }
    }

}

function toRadians(angle) {
    return angle * (Math.PI / 180)
}