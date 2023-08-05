const canvasElement = document.getElementById("artObject");
const contx = canvasElement.getContext("2d");

function drawCanvas(){
    let n = 30, i = 26, sides = 6 ; 
    let xInit = 300, yInit = 300; //center of canvas
    let xCenter = [], yCenter = [];//arrays storing center coordinates of each hexagon
    let r=0, g=0, b=0, rStep, gStep, bStep; 
    let color = [];//color components


    let value = 42.5, j=0;
    for( rStep = 0, r = 0; rStep < 6; rStep++) {    
        for( gStep = 0, g = 0; gStep < 6; gStep++ ) {       
            for( bStep = 0, b = 0; bStep < 6; bStep++ ) {  
                color[j] = "" + r + "," + g + "," + b;
                b += Math.floor(value);
                j++;
            }
            g += Math.floor(value);
        }
        r += Math.floor(value);
    }
    // Drawing central hexagon
    j-=12;
    contx.fillStyle = `rgb(${color[j]})`;
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
                let a=0, s=0;
                for(a=0; a<=k;a++)
                {
                    xCenter[l+a]=xInit + l*1.73*i;
                    xCenter[l+steps1+a] = xInit - l*1.73*i;
                }
                let steps2 = ((a%2)=== 0) ? a/2 : Math.floor(a/2) + 1;
                for(s=0,koef = k; s<steps2, koef>=0;s++, koef-=2)
                {
                    yCenter[l+s] = yCenter[l+steps1+a-1-s] = yInit - koef*i;
                    yCenter[l+a-1-s] = yCenter[l+steps1+s] = yInit + koef*i;
                }
                l+=a;
                break;
            }   
        }
        
        for (let m=0; m<k*sides; m++)
        {
            j--;
            contx.fillStyle = `rgb(${color[j]})`;
            drawHexagon(xCenter[m], yCenter[m], n , i);
            contx.fill();
        }
        j-=12;
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