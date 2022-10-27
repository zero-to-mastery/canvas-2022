const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth / 1.5
canvas.height = window.innerHeight / 1.5

let lowerMouth = 0.3 // 0 limit lower 0.3 limit upper
let upperMouth = 1.7 // 2 limit upper 1.7 limit lower


const colors = ['red', 'orange', 'yellow', 'green', 'blue','indigo','violet']
let closeMouth = true
let moveSquare = window.innerWidth / 2
let currColor = 3
let prevColor = currColor - 1
function animate() {
    if (closeMouth) {
        upperMouth += 0.1
        lowerMouth -= 0.1
    } else {
        upperMouth -= 0.1
        lowerMouth += 0.1
    }
    if (upperMouth < 1.6) {
        closeMouth = true
    }
    if (upperMouth > 2 && 300 < moveSquare ) {
            closeMouth = false
            
    }
    if (moveSquare < 200 && upperMouth > 2) {
        moveSquare = window.innerWidth / 1.75
        currColor != colors.length - 1 ? currColor++ : currColor = 0; 
        prevColor != colors.length - 1 ? prevColor++ : prevColor = 0;
    }
        moveSquare -= 20
        // clear canvas
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        context.beginPath();
        context.rect(moveSquare, 200, 50, 50);
        context.fillStyle = colors[currColor]
        context.fill();
         
        context.beginPath();
        context.arc(200, 200, 160, lowerMouth * Math.PI, upperMouth * Math.PI);
        context.lineTo(200, 200);
        context.fillStyle = colors[prevColor];
        context.fill();
        
        
}


    setInterval(animate,110)
