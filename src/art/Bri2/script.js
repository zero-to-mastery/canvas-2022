let canvas = document.getElementById("Canvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "#002B7F";
ctx.fillRect(0, 0, canvas.width / 3, canvas.height);

ctx.fillStyle = "#FCD116";
ctx.fillRect(canvas.width / 3, 0, canvas.width / 3, canvas.height);

ctx.fillStyle = "#CE1126";
ctx.fillRect((canvas.width / 3) * 2, 0, canvas.width / 3, canvas.height);
