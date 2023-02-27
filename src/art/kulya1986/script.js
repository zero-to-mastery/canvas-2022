const canvasElement = document.getElementById("artObject");
// console.log(canvasElement);
const contx = canvasElement.getContext("2d");
// console.log(contx);

function drawCanvas(){
    let n = 30, i = 26, sides = 6 ; 
    
    let xInit = 300;
    let yInit = 300;

    let yCenter = xInit;
    let xCenter = yInit;
    
    contx.fillStyle = "rgb(255,0,0)";
    drawHexagon(xCenter, yCenter, n , i);
    contx.fill();

    // for (let k = 1; k < 5; k++){
    //     for (let l = 1; l < k*sides + 1; l++){

    //     }

    // }


   

    //First circle k = 1, l=6
    yCenter=yInit - 2*i;
    contx.fillStyle = "rgb(255,156,0)";
    drawHexagon(xCenter, yCenter, n , i);
    contx.fill();

    yCenter = yInit - i;
    xCenter = xInit + 1.73*i;
    contx.fillStyle = "rgb(255,255,0)";
    drawHexagon(xCenter, yCenter, n , i);
    contx.fill();
    
    yCenter = yInit + i;
    contx.fillStyle = "rgb(255,0,156)";
    drawHexagon(xCenter, yCenter, n , i);
    contx.fill();

    yCenter=yInit + 2*i;
    xCenter = xInit;
    contx.fillStyle = "rgb(255,0,255)";
    drawHexagon(xCenter, yCenter, n , i);
    contx.fill();

    yCenter = yInit + i;
    xCenter = xInit - 1.73*i;
    contx.fillStyle = "rgb(0,156,255)";
    drawHexagon(xCenter, yCenter, n , i);
    contx.fill();

    yCenter = yInit - i;
    xCenter = xInit - 1.73*i;
    contx.fillStyle = "rgb(0,255,255)";
    drawHexagon(xCenter, yCenter, n , i);
    contx.fill();

    //Second circle k=2, l=12
    yCenter=yInit - 2 * 2 * i;
    xCenter = xInit;
    contx.fillStyle = "rgb(255,0,0)";
    drawHexagon(xCenter, yCenter, n , i);
    contx.fill();

    yCenter = yInit - 2 * i - i;
    xCenter = xInit + 1.73*i;
    contx.fillStyle = "rgb(130,150,0)";
    drawHexagon(xCenter, yCenter, n , i);
    contx.fill();

    yCenter = yInit - 2 * i;
    xCenter = xInit + 3*n;
    contx.fillStyle = "rgb(21,130,0)";
    drawHexagon(xCenter, yCenter, n , i);
    contx.fill();

    yCenter = yInit;
    contx.fillStyle = "rgb(200,130,0)";
    drawHexagon(xCenter, yCenter, n , i);
    contx.fill();

    yCenter = yInit + 2 * i;
    xCenter = xInit + 3*n;
    contx.fillStyle = "rgb(21,44,100)";
    drawHexagon(xCenter, yCenter, n , i);
    contx.fill();

    yCenter = yInit + 2 * i + i;
    xCenter = xInit + 1.73*i;
    contx.fillStyle = "rgb(13,150,99)";
    drawHexagon(xCenter, yCenter, n , i);
    contx.fill();

    yCenter=yInit + 4 * i;
    xCenter = xInit;
    contx.fillStyle = "rgb(150,0,100)";
    drawHexagon(xCenter, yCenter, n , i);
    contx.fill();

    yCenter = yInit + 2 * i + i;
    xCenter = xInit - 1.73*i;
    contx.fillStyle = "rgb(130,0,100)";
    drawHexagon(xCenter, yCenter, n , i);
    contx.fill();

    yCenter = yInit + 2 * i;
    xCenter = xInit - 3*n;
    contx.fillStyle = "rgb(55,130,100)";
    drawHexagon(xCenter, yCenter, n , i);
    contx.fill();

    yCenter = yInit;
    contx.fillStyle = "rgb(200,0,90)";
    drawHexagon(xCenter, yCenter, n , i);
    contx.fill();

    yCenter = yInit - 2 * i;
    xCenter = xInit - 3*n;
    contx.fillStyle = "rgb(21,200,21)";
    drawHexagon(xCenter, yCenter, n , i);
    contx.fill();

    yCenter = yInit - 2 * i - i;
    xCenter = xInit - 1.73*i;
    contx.fillStyle = "rgb(255,15,99)";
    drawHexagon(xCenter, yCenter, n , i);
    contx.fill();

    //Third circle
    xCenter = xInit + 3*1.73*i;
    yCenter = yInit - i;
    contx.fillStyle = "rgb(255,0,0)";
    drawHexagon(xCenter, yCenter, n , i);
    contx.fill();


}

function drawHexagon (x, y, n, i){
    contx.beginPath();
    contx.moveTo(x - n/2, y - i);
    contx.lineTo(x + n/2, y - i); 
    contx.lineTo(x + n, y);
    contx.lineTo(x + n/2, y + i);
    contx.lineTo(x - n/2, y + i);
    contx.lineTo(x - n, y);
    contx.lineTo(x - n/2, y - i);
    contx.closePath();
}