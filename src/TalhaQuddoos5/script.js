const canvas = document.getElementById("nightStars");
const ctx = canvas.getContext("2d");

const maxX = canvas.width;
const maxY = canvas.height;

var [circleX, circleY, circleRadius] = [0, 0, 350];

drawCircle(circleX, circleY, circleRadius, "darkblue");

// angle of the lines from a straight vertical line,
// which is tangent to the circle on the right side
var linesAngle = 210;
var linesSlope = Math.tan(toRadians(linesAngle));
var linesYIntercept = -100;
var lineLength = 400;


var x1 = circleX + circleRadius;
var y1 = circleY;


for(var i = 0; i < 10; i++) {

    x1 = (Math.sin(y1 / circleRadius));
    console.log(x1)

    x2 = x1 - lineLength;    
    y2 = linesSlope * x2 + linesYIntercept;

    drawLine(x1, y1, x2, y2, "white", 1);

    linesYIntercept += 40;
    y1 += 40;

}


function drawStar(x, y, radius, angle, color = "white") {
    var angles = [0, 72, 144, 216, 288];
    // add the angle to each of the angles
    angles = angles.map(function (a) {
        return a + angle;
    });

    const starLines = angles.map(function (a) {
        return {
            x: x + radius * Math.cos(a * Math.PI / 180),
            y: y + radius * Math.sin(a * Math.PI / 180)
        };
    });


    ctx.beginPath();

    ctx.moveTo(starLines[0].x, starLines[0].y);
    ctx.lineTo(starLines[2].x, starLines[2].y);
    ctx.lineTo(starLines[4].x, starLines[4].y);
    ctx.lineTo(starLines[1].x, starLines[1].y);
    ctx.lineTo(starLines[3].x, starLines[3].y);
    ctx.lineTo(starLines[0].x, starLines[0].y);

    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
}


var starX = 350;
var starY = 350;
var starRadius = 100;
var starAngle = 0;

function toRadians(angle) {
    return angle * (Math.PI / 180);
}



function getX(x) {
    return x + maxX / 2;
}

function getY(y) {
    return -y + maxY / 2;
}

function drawCircle(x, y, radius, color = "white") {
    ctx.beginPath();
    ctx.arc(getX(x), getY(y), radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2, color = "white", width = 1) {
    ctx.beginPath();
    ctx.moveTo(getX(x1), getY(y1));
    ctx.lineTo(getX(x2), getY(y2));
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.stroke();
}
    