window.addEventListener("load", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width =  window.innerWidth;

    // Outer circle
    Cir_baseX = 600;
    Cir_baseY = 400;
    ctx.beginPath();
    //ctx.moveTo(Cir_baseX, Cir_baseY);
    ctx.arc(Cir_baseX, Cir_baseY, radius = 200, startangle = 0, endangle = Math.PI * 2, counterclockwise = true); 
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.stroke();

    //stem
    S_baseX = 600;
    S_baseY = 200;
    ctx.beginPath();
    ctx.moveTo(S_baseX, S_baseY);
    ctx.lineTo(S_baseX+20, S_baseY-30);
    ctx.lineTo(S_baseX+40, S_baseY-30);
    ctx.lineTo(S_baseX+20, S_baseY);
    ctx.fillStyle = "green";
    ctx.fill();

    // Left Eye
    LE_baseX = 525;
    LE_baseY = 300;
    ctx.beginPath();
    ctx.moveTo(LE_baseX, LE_baseY);
    ctx.lineTo(LE_baseX+50, LE_baseY+50);
    ctx.lineTo(LE_baseX-50, LE_baseY+50);
    ctx.closePath();
    ctx.fillStyle = "black";
    ctx.fill();

    // Right Eye
    RE_baseX = LE_baseX + 150;
    RE_baseY = LE_baseY;
    ctx.beginPath();
    ctx.moveTo(RE_baseX, RE_baseY);
    ctx.lineTo(RE_baseX+50, RE_baseY+50);
    ctx.lineTo(RE_baseX-50, RE_baseY+50);
    ctx.closePath();
    ctx.fillStyle = "black";
    ctx.fill();

    // Nose
    N_baseX = LE_baseX + (RE_baseX - LE_baseX)/2; //put nose right in the middle of the eyes
    N_baseY = LE_baseY + 100;
    ctx.beginPath();
    ctx.moveTo(N_baseX, N_baseY);
    ctx.lineTo(N_baseX+50, N_baseY+50);
    ctx.lineTo(N_baseX-50, N_baseY+50);
    ctx.closePath();
    ctx.fillStyle = "black";
    ctx.fill();

    // mouth
    M_baseX = LE_baseX-25;
    M_baseY = N_baseY+75;
    ctx.beginPath();
    ctx.moveTo(M_baseX, M_baseY);
    ctx.lineTo(M_baseX+50, M_baseY+30);
    ctx.lineTo(M_baseX+100, M_baseY);
    ctx.lineTo(M_baseX+150, M_baseY+30);
    ctx.lineTo(M_baseX+200, M_baseY);
    ctx.lineTo(M_baseX+250, M_baseY+35);
    ctx.lineTo(M_baseX+200, M_baseY+80);
    ctx.lineTo(M_baseX+150, M_baseY+50);
    ctx.lineTo(M_baseX+100, M_baseY+80);
    ctx.lineTo(M_baseX+50, M_baseY+50);
    ctx.lineTo(M_baseX, M_baseY+80);
    ctx.lineTo(M_baseX-50, M_baseY+35);
    ctx.closePath();
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke()
})


