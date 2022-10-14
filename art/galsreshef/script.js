const canvas = document.getElementById("canvas001");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class MyDot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

let getTriangleCenter = (d1, d2, d3) =>
    new MyDot((x = (d1.x + d2.x + d3.x) / 3), (y = (d1.y + d2.y + d3.y) / 3));

let dot1 = new MyDot(300, 300);
let dot2 = new MyDot(100, 600);
let dot3 = new MyDot(500, 600);

// Triangle center
let tCenter = getTriangleCenter(dot1, dot2, dot3);

// Warning triangle
context.beginPath();
context.moveTo(dot1.x, dot1.y);
context.lineTo(dot2.x, dot2.y);
context.lineTo(dot3.x, dot3.y);
context.closePath();
context.lineWidth = 10;
context.strokeStyle = "#eb4034";
context.stroke();
context.fillStyle = "#f78d8d";
context.fill();

//outer circle
context.beginPath();
context.fillStyle = "#FFFF00";
context.arc(tCenter.x, tCenter.y - 5, 100, 0, 2 * Math.PI);
context.fill();
context.stroke();

// left eye
context.beginPath();
context.fillStyle = "#000";
context.arc(dot3.x * (10 / 20), (dot1.y + dot2.y) / 2, 20, 0, 2 * Math.PI);
context.fill();

// right eye
context.beginPath();
context.fillStyle = "#000";
context.arc(dot3.x * (14 / 20), (dot1.y + dot3.y) / 2, 20, 0, 2 * Math.PI);
context.fill();

// mouth
context.beginPath();
context.arc(dot1.x, (dot1.y + dot2.y) / 1.8, 30, 0, Math.PI);
context.stroke();
