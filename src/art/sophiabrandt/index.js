let canvas = document.getElementById("irelandFlagCanvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "#169B62";
ctx.fillRect(0, 0, canvas.width / 3, canvas.height);

ctx.fillStyle = "#FFFFFF";
ctx.fillRect(canvas.width / 3, 0, canvas.width / 3, canvas.height);

ctx.fillStyle = "#FF883E";
ctx.fillRect((canvas.width / 3) * 2, 0, canvas.width / 3, canvas.height);
