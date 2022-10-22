window.addEventListener("load", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width =  window.innerWidth;

    const baseX =  200;
    const baseY =  200;
    const outerHeight = 110;

    ctx.font = 'bold 100px Liberation Sans';
    ctx.fillText('Unity', 450, 300);  

    // left face
    ctx.beginPath();
    ctx.moveTo(baseX, baseY);
    ctx.lineTo(baseX + 100, baseY + 50) // right
    ctx.lineTo(baseX + 100, baseY + 50 + outerHeight); // down
    ctx.lineTo(baseX, baseY + outerHeight); // left
    ctx.closePath(); // up
    ctx.fillStyle = "red";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(baseX + 25, baseY + 30);
    ctx.lineTo(baseX + 100 - 20, baseY + 50 + 10); // right
    ctx.lineTo(baseX + 100 - 20, baseY + 50 + outerHeight - 35); // down
    ctx.lineTo(baseX + 25, baseY + outerHeight - 12); // left
    ctx.closePath(); // up
    ctx.fillStyle = "antiquewhite";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(baseX - 1, baseY + outerHeight);
    ctx.lineTo(baseX, baseY + outerHeight - 10);
    ctx.lineTo(baseX + 25, baseY + outerHeight - 10 - 15);
    ctx.lineTo(baseX + 25, baseY + outerHeight - 13);
    ctx.lineTo(baseX + 35, baseY + outerHeight - 9);
    ctx.lineTo(baseX + 9, baseY + outerHeight + 7);
    ctx.closePath();
    ctx.fill();


    // top face
    ctx.beginPath();
    ctx.moveTo(baseX, baseY);
    ctx.lineTo(baseX + 100, baseY + 50);
    ctx.lineTo(baseX + 200, baseY);
    ctx.lineTo(baseX + 100, baseY - 50);
    ctx.fillStyle = "yellow";
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(baseX + 25 + 5, baseY + 2);
    ctx.lineTo(baseX + 100, baseY + 50 - 15);
    ctx.lineTo(baseX + 200 - 25 - 5, baseY + 2);
    ctx.lineTo(baseX + 100, baseY - 50 + 19);
    ctx.closePath();
    ctx.fillStyle = "antiquewhite";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(baseX + 100, baseY - 50);
    ctx.lineTo(baseX + 100 + 10, baseY - 50 + 5);
    ctx.lineTo(baseX + 100 + 10, baseY - 50 + 38);
    ctx.lineTo(baseX + 100 - 10, baseY - 50 + 38)
    ctx.lineTo(baseX + 100 - 10, baseY - 50 + 5)
    ctx.closePath();
    ctx.fillStyle = "antiquewhite";
    ctx.fill();

    // right face
    const secondBaseX = baseX + 200;
    ctx.beginPath();
    ctx.moveTo(secondBaseX, baseY);
    ctx.lineTo(secondBaseX, baseY + outerHeight); // down
    ctx.lineTo(secondBaseX - 100, baseY + outerHeight + 50) // left
    ctx.lineTo(secondBaseX - 100, baseY + 50); // up
    ctx.fillStyle = "blue";
    ctx.closePath(); // right
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(secondBaseX - 25, baseY + 30);
    ctx.lineTo(secondBaseX - 25, baseY + outerHeight - 12); // down
    ctx.lineTo(secondBaseX - 100 + 25, baseY + outerHeight + 50 - 38) // left
    ctx.lineTo(secondBaseX - 100 +25, baseY + 50 + 6); // up
    ctx.closePath(); // right
    ctx.fillStyle = "antiquewhite";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(secondBaseX, baseY + outerHeight + 2); // down
    ctx.lineTo(secondBaseX - 13, baseY + outerHeight + 8);
    ctx.lineTo(secondBaseX - 20 - 15, baseY + outerHeight + 10 - 18);
    ctx.lineTo(secondBaseX - 25, baseY + outerHeight - 12 - 10);
    ctx.lineTo(secondBaseX, baseY + outerHeight - 5);
    ctx.closePath();
    ctx.fill();
})


