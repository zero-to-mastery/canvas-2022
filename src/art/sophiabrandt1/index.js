let canvas = document.getElementById("franceFlagCanvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "#001E96";
ctx.fillRect(0, 0, canvas.width / 3, canvas.height);

ctx.fillStyle = "#FFFFFF";
ctx.fillRect(canvas.width / 3, 0, canvas.width / 3, canvas.height);

ctx.fillStyle = "#EE2436";
ctx.fillRect((canvas.width / 3) * 2, 0, canvas.width / 3, canvas.height);
