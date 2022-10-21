let canvas = document.getElementById("belgiumFlagCanvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "#000000";
ctx.fillRect(0, 0, canvas.width / 3, canvas.height);

ctx.fillStyle = "#ffd90c";
ctx.fillRect(canvas.width / 3, 0, canvas.width / 3, canvas.height);

ctx.fillStyle = "#f31830";
ctx.fillRect((canvas.width / 3) * 2, 0, canvas.width / 3, canvas.height);
