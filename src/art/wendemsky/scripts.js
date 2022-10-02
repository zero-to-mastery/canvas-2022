var canvas = document.querySelector('canvas')
canvas.width = 700;
canvas.height = 700;

var c = canvas.getContext('2d');

c.fillStyle = 'rgba(255, 0, 0, 0.5)'
c.fillRect(0, 0, 100, 100);
c.fillRect(0, 200, 100, 100);
c.fillRect(0, 400, 100, 100);
c.fillRect(0, 600, 100, 100);

c.fillStyle = 'rgba(255, 0, 0, 0.5)'
c.fillRect(100, 100, 100, 100);
c.fillRect(100, 300, 100, 100);
c.fillRect(100, 500, 100, 100);

c.fillStyle = 'rgba(255, 0, 0, 0.5)'
c.fillRect(200, 0, 100, 100);
c.fillRect(200, 200, 100, 100);
c.fillRect(200, 400, 100, 100);
c.fillRect(200, 600, 100, 100);

c.fillStyle = 'rgba(255, 0, 0, 0.5)'
c.fillRect(300, 100, 100, 100);
c.fillRect(300, 300, 100, 100);
c.fillRect(300, 500, 100, 100);

c.fillStyle = 'rgba(255, 0, 0, 0.5)'
c.fillRect(400, 0, 100, 100);
c.fillRect(400, 200, 100, 100);
c.fillRect(400, 400, 100, 100);
c.fillRect(400, 600, 100, 100);

c.fillStyle = 'rgba(255, 0, 0, 0.5)'
c.fillRect(500, 100, 100, 100);
c.fillRect(500, 300, 100, 100);
c.fillRect(500, 500, 100, 100);

c.fillStyle = 'rgba(255, 0, 0, 0.5)'
c.fillRect(600, 0, 100, 100);
c.fillRect(600, 200, 100, 100);
c.fillRect(600, 400, 100, 100);
c.fillRect(600, 600, 100, 100);





c.beginPath();
c.lineWidth = 20;
c.moveTo(100, 100);
c.lineTo(200,600);
c.lineTo(350,350);
c.lineTo(500,600);
c.lineTo(600,100)
c.strokeStyle = "teal";
c.stroke();


const circle = {
    x: 200,
    y: 200,
    size: 40,
    dx: 5,
    dy: 4
}

function drawCircle() {
   
    c.beginPath();
    // c.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
    c.rect(circle.x, circle.y, circle.size, circle.size );
    c.fillStyle = 'pink';
    c.fill();
}

function update(){
    // c.clearRect(0, 0, canvas.width, canvas.height);
    
 
    drawCircle();
    c.clearRect(circle.x + circle.size, circle.y + circle.size, 40, 40);
    circle.x += circle.dx;
    circle.y += circle.dy;
    
    //Collision Detection
    if(circle.x + circle.size > canvas.width || circle.x - circle.size < 0){
        circle.dx *= -1;
    }
    if(circle.y + circle.size > canvas.height || circle.y - circle.size < 0){
        circle.dy *= -1;
    }
   

    
    requestAnimationFrame(update);
    
}

update();