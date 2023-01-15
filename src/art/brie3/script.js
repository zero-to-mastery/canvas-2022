let canvas = document.getElementById("Canvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "#008753";
ctx.fillRect(0, 0, canvas.width / 3, canvas.height);

ctx.fillStyle = "#ffffff";
ctx.fillRect(canvas.width / 3, 0, canvas.width / 3, canvas.height);

ctx.fillStyle = "#008753";
ctx.fillRect((canvas.width / 3) * 2, 0, canvas.width / 3, canvas.height);
