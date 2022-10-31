var canvas = null;   
var context = null;   
var c_width;   
var c_height;   

initFace();

function initFace() {
   canvas = document.getElementById("face");
   context = canvas.getContext("2d");

   c_width = canvas.offsetWidth;
   c_height = canvas.offsetHeight;

   drawSmileyFace();
}

function drawSmileyFace() {
   drawFace();
   drawLeftEye();
   drawRightEye();
   drawNose();
   drawSmile();
}

function drawFace() {
   context.beginPath();
   context.arc(c_width/2,  
         c_height/2,  
         150,     
         0,         
         degreesToRadians(360), 
         true);        
   context.fillStyle = "#FFFF00";
   context.fill();
   context.stroke();
}
function drawLeftEye(dx, dy) {
   x = 300;
   y = 230;

   dx = dx || 0;
   x1 = x + parseFloat(dx);

   dy = dy || 0;
   y1 = y + parseFloat(dy);

   
   context.beginPath();
   context.arc(x, y, 25, 0, degreesToRadians(360), true);
   context.fillStyle = "#FFFFFF";
   context.fill();
   context.strokeStyle = '#000000';
   context.stroke();
   
   context.beginPath();
   context.arc(x1, y1, 20, 0, degreesToRadians(360), true);
   context.fillStyle = "#04B4AE";
   context.fill();
   context.strokeStyle = '#04B4AE';
   context.stroke();
}

function drawRightEye(dx, dy) {
   x = 400;
   y = 250;

   dx = dx || 0;
   x1 = x + parseFloat(dx);

   dy = dy || 0;
   y1 = y + parseFloat(dy);

  
   context.beginPath();
   context.arc(x, y, 25, 0, degreesToRadians(360), true);
   context.fillStyle = "#FFFFFF";
   context.fill();
   context.strokeStyle = '#000000';
   context.stroke();
 
   context.beginPath();
   context.arc(x1, y1, 20, 0, degreesToRadians(360), true);
   context.fillStyle = "#04B4AE";
   context.fill();
   context.strokeStyle = '#04B4AE';
   context.stroke();
}
function drawNose() {
   // nose
   context.strokeStyle = '#000000';
   context.fillStyle = "#000000";
   context.beginPath();
   context.moveTo(250, 275);
   context.lineTo(330, 300);
   context.lineTo(300, 325);
   context.lineTo(300, 300);
   context.closePath();
   context.fill();
}
function drawSmile() {
   context.beginPath();
   context.arc(300, 350, 70, degreesToRadians(0), degreesToRadians(180), false);
   context.stroke();
}

function getMousePos(canvas, evt) {
   var rect = canvas.getBoundingClientRect();
   return {
     x: evt.clientX - rect.left,
     y: evt.clientY - rect.top
   };
}
canvas.addEventListener('mousemove', function(evt) {
   var mousePos = getMousePos(canvas, evt);
   context.clearRect(0, 0, canvas.width, canvas.height);
   var eyeY = 250;    
   var leyeX = 200;   
   var reyeX = 400;   
   var ldx = 0;    
   var rdx = 0;     
   var ldy = 0;     

   if (eyeY > mousePos.y) {
     ldy = 100 - (mousePos.y/eyeY * 100);
     ldy = (ldy * 5) / 100;
     ldy = 0 - ldy;
   } else {
     ldy = 100 - ((c_height - mousePos.y)/(c_height - eyeY) * 100);
     ldy = (ldy * 5) / 100;
   }

   if (leyeX < mousePos.x) {
    //left eye
    ldx = 100 - ((c_width - mousePos.x)/(c_width - leyeX) * 100);
    ldx = (ldx * 5) / 100;

    //right eye
    rdx = 100 - ((c_width - mousePos.x)/(c_width - reyeX) * 100);
    rdx = (rdx * 5) / 100;
   } else {
    //left eye
    ldx = 100 - (mousePos.x/leyeX) * 100;
    ldx = (ldx * 5) / 100;
    ldx = 0 - ldx;

    //right eye
    rdx = 100 - (mousePos.x/reyeX) * 100;
    rdx = (rdx * 5) / 100;
    rdx = 0 - rdx;
   }

   drawFace();
   drawLeftEye(ldx, ldy);
   drawRightEye(rdx, ldy);
   drawNose();
   drawSmile();

}, false);

function degreesToRadians(degrees) {
   radians = (degrees * Math.PI)/180;
   return radians;
}
