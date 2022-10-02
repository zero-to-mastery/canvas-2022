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
c.strokeStyle = "rgba(0, 0, 0, 1)";
c.stroke();