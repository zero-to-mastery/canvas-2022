var canvas = document.getElementById('jack');
var context = canvas.getContext('2d');
context.fillStyle = '#6666ff';
context.fillRect(10, 10, 50, 50);
context.fillStyle = 'rgba(255, 255, 0, 0.7)';
context.fillRect(35, 35, 50, 50);

context.beginPath();
context.fillStyle = '#f7f4e6';

context.ellipse(340, 150, 100, 120, Math.PI/2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.fillStyle = '#000';
context.ellipse(300, 200, 10, 15, Math.PI/10, 0, 2*Math.PI);

// context.arc(340,150,118,0,Math.PI*2,false);
context.fill();

for (i=0;i<=100;i+=10){
    context.fillRect(i,i,5,5);
 }

 for (i=100;i>=0;i-=10){
    context.strokeRect(i,100-i,5,5);
 }