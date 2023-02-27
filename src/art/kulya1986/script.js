const canvasElement = document.getElementById("artObject");
const contx = canvasElement.getContext("2d");

function drawCanvas(){
    let n = 30, i = 26, sides = 6 ; 
    let xInit = 300, yInit = 300; //center of canvas
    let xCenter = [], yCenter = [];//arrays storing center coordinates of each hexagon
    
    //Drawing central hexagon(RED)
    contx.fillStyle = "rgb(255,0,0)";
    drawHexagon(xInit, yInit, n , i);
    contx.fill();

    for (let k = 1; k < 6; k++){
        let steps1 = k*sides/2;
        for (let l = 0; l < steps1; l++){
            xCenter[l] = xCenter[steps1 - l] = xInit + l*1.73*i;
            xCenter[l+steps1] = xCenter[2*steps1-l]= xInit - l*1.73*i;
            yCenter[l] =yCenter[2*steps1-l] = yInit - (steps1-k-l)*i;
            yCenter[l+steps1] = yCenter[steps1 - l] = yInit + (steps1-k-l)*i;
            if (l===k)
            {
                let a=0, b=0;
                for(a=0; a<=k;a++)
                {
                    xCenter[l+a]=xInit + l*1.73*i;
                    xCenter[l+steps1+a] = xInit - l*1.73*i;
                }
                let steps2 = ((a%2)=== 0) ? a/2 : Math.floor(a/2) + 1;
                for(b=0,koef = k; b<steps2, koef>=0;b++, koef-=2)
                {
                    yCenter[l+b] = yCenter[l+steps1+a-1-b] = yInit - koef*i;
                    yCenter[l+a-1-b] = yCenter[l+steps1+b] = yInit + koef*i;
                }
                l+=a;
                break;
            }   
        }
        for (let m=0; m<k*sides; m++)
        {
            contx.strokeStyle = "rgb(255,0,0)";
            drawHexagon(xCenter[m], yCenter[m], n , i);
            contx.stroke();
        }
    }    
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