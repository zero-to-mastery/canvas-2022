const canv = document.getElementById("canvas");

const ctx = canv.getContext("2d");

ctx.lineWidth = 1.7;
ctx.strokeRect(20, 35, 115.5, 63);

ctx.fillStyle = "red";
ctx.fillRect(20, 35, 21, 63);

ctx.fillStyle = "green";
ctx.fillRect(41, 35, 94, 21);

ctx.fillStyle = "black";
ctx.fillRect(41, 77, 94, 21);
