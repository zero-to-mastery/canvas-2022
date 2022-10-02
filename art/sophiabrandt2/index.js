let canvas = document.getElementById("germanyFlagCanvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "#000";
ctx.fillRect(0, 0, canvas.width, canvas.height / 3);

ctx.fillStyle = "#DD0000";
ctx.fillRect(0, canvas.height / 3, canvas.width, canvas.height / 3);

ctx.fillStyle = "#FFCE00";
ctx.fillRect(0, (canvas.height / 3) * 2, canvas.width, canvas.height / 3);
