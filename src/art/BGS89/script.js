function draw() {
    const canvas = document.getElementById('test');
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        //FACE
        ctx.beginPath();
        ctx.arc(250, 150, 100, 0, Math.PI * 2, true);
        ctx.fillStyle = 'rgb(255, 189, 0)';
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'black';
        ctx.stroke();
        
        //LEFT EYE
        ctx.beginPath();
        ctx.arc(225, 140, 10, 0, Math.PI * 2, true);
        ctx.fillStyle = 'rgb(255, 189, 0)';
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'black';
        ctx.stroke();

        //RIGHT EYE
        ctx.beginPath();
        ctx.arc(275, 140, 10, 0, Math.PI * 2, true);
        ctx.fillStyle = 'rgb(255, 189, 0)';
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'black';
        ctx.stroke();
        
        //MOUTH
        ctx.beginPath();
        ctx.arc(250, 210, 10, 0, Math.PI);
        ctx.fillStyle = 'rgb(255, 189, 0)';
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'black';
        ctx.stroke();
    }
}

draw();