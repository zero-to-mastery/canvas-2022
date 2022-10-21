const canvas = document.getElementById("pakFlag");
const ctx = canvas.getContext("2d");

// White strip
ctx.fillStyle = "#fff";
ctx.fillRect(0, 0, 225, 600);

// Green strip
ctx.fillStyle = "#006600";
ctx.fillRect(225, 0, 675, 600);

// Crescent
var crescent_x = parseInt(225 + (675 / 2));
var crescent_y = 600 / 2;
ctx.beginPath();
ctx.arc(crescent_x, crescent_y, 180, 0, 2 * Math.PI);
ctx.fillStyle = "#fff";
ctx.fill();

// anti-crescent
ctx.beginPath();
ctx.arc(610, 260, 165, 0, 2 * Math.PI);
ctx.fillStyle = "#006600";
ctx.fill();

// Star
// http://www.drawingteachers.com/how-to-draw-a-star.html
// https://stackoverflow.com/questions/43641798/how-to-find-x-and-y-coordinates-on-a-flipped-circle-using-javascript-methods 

var star_coords = [{"x": 697, "y": 155}, {"x": 627, "y": 148}, {"x": 598, "y": 212}, {"x": 651, "y": 260}, {"x": 712, "y": 224}]

ctx.beginPath();
ctx.moveTo(star_coords[0].x, star_coords[0].y);
ctx.lineTo(star_coords[2].x, star_coords[2].y);
ctx.lineTo(star_coords[4].x, star_coords[4].y);
ctx.lineTo(star_coords[1].x, star_coords[1].y);
ctx.lineTo(star_coords[3].x, star_coords[3].y);
ctx.lineTo(star_coords[0].x, star_coords[0].y);

ctx.closePath();
ctx.fillStyle = "#fff";
ctx.fill();

// add a thin line below the flag
ctx.beginPath();
ctx.moveTo(0, 600);
ctx.lineTo(900, 600);
ctx.lineWidth = 10;
ctx.strokeStyle = "#999";
ctx.stroke();


ctx.font = "bold 50px Bahnschrift";
ctx.fillStyle = "#fff";
ctx.fillText("💕❤️ Pakistan ❤️💕", 225, 760);