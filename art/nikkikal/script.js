const canvas = document.querySelector("canvas");
const c = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
c.globalCompositeOperation = 'destination-over';
hue = 180;

let number = 7;
let scale = 8;

function drawShell() {
    let angle = number * 19;
    let radius = scale * Math.sqrt(number);
    let positionX = radius * Math.sin(angle) + canvas.width/2;
    let positionY = radius * Math.cos(angle) + canvas.height/2;

    c.fillStyle = 'hsl('+ hue + ' , 100%, 50%)';
    c.strokeStyle = '#3655b3';
    c.lineWidth = 5;
    c.beginPath();
    c.arc(positionX, positionY, number, 0, Math.PI * 2);
    c.closePath();
    c.fill();
    c.stroke();



    number++
    hue+=0.5;
}


function animate() {

    drawShell();
    if (number > 125) return;
    requestAnimationFrame(animate);
    }
animate();
