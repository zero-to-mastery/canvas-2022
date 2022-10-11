main();

function main() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    var radius = canvas.height / 2;
    
    context.translate(radius, radius);
    radius *= 0.90;

    setInterval(drawClock, 1000);

    function drawClock() {
        drawClockFace(context, radius);
        drawNumbers(context, radius);
        drawTime(context, radius);
    }
}

function drawClockFace(context, radius) {
    var frame;

    context.beginPath();
    context.arc(0, 0, radius, 0, 2 * Math.PI);
    context.fillStyle = "#CCC"
    context.fill();

    frame = context.arc(0, 0, radius, 0, 2 * Math.PI);
    context.strokeStyle = frame;
    context.lineWidth = radius * 0.1;
    context.strokeStyle = "goldenrod"
    context.stroke();

    context.beginPath();
    context.arc(0, 0, radius * 0.08, 0, 2 * Math.PI);
    context.fillStyle = "#444";
    context.fill();
}

function drawNumbers(context, radius) {
    var ang;

    context.font = radius * 0.15 + "px sans-serif";
    context.textBaseline = "middle";
    context.textAlign = "center";

    for (let num = 1; num <= 12; num++) {
        ang = num * Math.PI / 6;
        context.rotate(ang);
        context.translate(0, -radius * 0.85);
        context.rotate(-ang);
        context.fillText(num.toString(), 0, 0);
        context.rotate(ang);
        context.translate(0, radius * 0.85);
        context.rotate(-ang);
    }
}

function drawTime(context, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    // Hour
    hour = hour % 12;
    hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
    drawHand(context, hour, radius * 0.5, radius * 0.07, "goldenrod");

    // Minute
    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    drawHand(context, minute, radius * 0.8, radius * 0.07, "red"); // Changing the color here changes the color of the 'seconds' arm

    // Second
    second = (second * Math.PI / 30);
    drawHand(context, second, radius * 0.9, radius * 0.02, "#444");
}
  
function drawHand(context, pos, length, width, strokeColor) {
    context.beginPath();
    context.lineWidth = width;
    context.lineCap = "round";
    context.moveTo(0, 0);
    context.rotate(pos);
    context.lineTo(0, -length);
    context.stroke();
    context.strokeStyle = strokeColor
    context.rotate(-pos);
}