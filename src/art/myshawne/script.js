console.log('CONNECTED JS');

const canvas = document.getElementById('tutorial');
function createTriangle(context){

  //C1 - Shape Prime
  context.beginPath();
  context.moveTo(100,-20);
  context.lineTo(50,50);
  context.lineTo(150,50);
  context.closePath();

  context.lineWidth = 5;
  context.strokeStyle = 'white';
  context.stroke();

  context.fillStyle = "white";
  context.fill();

  // C2 - Shape Prime
  context.beginPath();
  context.moveTo(210,-20);
  context.lineTo(180,50);
  context.lineTo(250,50);
  context.closePath();

  context.lineWidth = 5;
  context.strokeStyle = 'white';
  context.stroke();

  context.fillStyle = "white";
  context.fill();

  // C3 - Shape Prime
  context.beginPath();
  context.moveTo(310,-20);
  context.lineTo(280,50);
  context.lineTo(350,50);
  context.closePath();

  context.lineWidth = 5;
  context.strokeStyle = 'white';
  context.stroke();

  context.fillStyle = "white";
  context.fill();

  // C4 - Shape Prime
  context.beginPath();
  context.moveTo(410,-20);
  context.lineTo(380,50);
  context.lineTo(450,50);
  context.closePath();

  context.lineWidth = 5;
  context.strokeStyle = 'white';
  context.stroke();

  context.fillStyle = "white";
  context.fill();

  //C1 - Shape One
  context.beginPath();
  context.moveTo(100,70);
  context.lineTo(50,150);
  context.lineTo(150,150);
  context.closePath();

  context.lineWidth = 5;
  context.strokeStyle = 'white';
  context.stroke();

  context.fillStyle = "white";
  context.fill();

  // C2 - Shape One
  context.beginPath();
  context.moveTo(210,70);
  context.lineTo(180,150);
  context.lineTo(250,150);
  context.closePath();

  context.lineWidth = 5;
  context.strokeStyle = 'white';
  context.stroke();

  context.fillStyle = "white";
  context.fill();

  // C3 - Shape One
  context.beginPath();
  context.moveTo(310,70);
  context.lineTo(280,150);
  context.lineTo(350,150);
  context.closePath();

  context.lineWidth = 5;
  context.strokeStyle = 'white';
  context.stroke();

  context.fillStyle = "white";
  context.fill();

  // C4 - Shape One
  context.beginPath();
  context.moveTo(410,70);
  context.lineTo(380,150);
  context.lineTo(450,150);
  context.closePath();

  context.lineWidth = 5;
  context.strokeStyle = 'white';
  context.stroke();

  context.fillStyle = "white";
  context.fill();

  //C1 - Shape two
  context.beginPath();
  context.moveTo(100,170);
  context.lineTo(50,250);
  context.lineTo(150,250);
  context.closePath();

  context.lineWidth = 5;
  context.strokeStyle = 'white';
  context.stroke();

  context.fillStyle = "white";
  context.fill();

  // C2 - Shape Two
  context.beginPath();
  context.moveTo(210,170);
  context.lineTo(180,250);
  context.lineTo(250,250);
  context.closePath();

  context.lineWidth = 5;
  context.strokeStyle = 'white';
  context.stroke();

  context.fillStyle = "white";
  context.fill();

  // C3 - Shape Two
  context.beginPath();
  context.moveTo(310,170);
  context.lineTo(280,250);
  context.lineTo(350,250);
  context.closePath();

  context.lineWidth = 5;
  context.strokeStyle = 'white';
  context.stroke();

  context.fillStyle = "white";
  context.fill();

  // C4 - Shape Two
  context.beginPath();
  context.moveTo(410,170);
  context.lineTo(380,250);
  context.lineTo(450,250);
  context.closePath();

  context.lineWidth = 5;
  context.strokeStyle = 'white';
  context.stroke();

  context.fillStyle = "white";
  context.fill();

  //C1 - Shape Three
  context.beginPath();
  context.moveTo(100,270);
  context.lineTo(50,360);
  context.lineTo(150,360);
  context.closePath();

  context.lineWidth = 5;
  context.strokeStyle = 'white';
  context.stroke();

  context.fillStyle = "white";
  context.fill();

  // C2 - Shape Three
  context.beginPath();
  context.moveTo(210,270);
  context.lineTo(180,360);
  context.lineTo(250,360);
  context.closePath();

  context.lineWidth = 5;
  context.strokeStyle = 'white';
  context.stroke();

  context.fillStyle = "white";
  context.fill();

  // C3 - Shape Three
  context.beginPath();
  context.moveTo(310,270);
  context.lineTo(280,360);
  context.lineTo(350,360);
  context.closePath();

  context.lineWidth = 5;
  context.strokeStyle = 'white';
  context.stroke();

  context.fillStyle = "white";
  context.fill();

  // C4 - Shape Three
  context.beginPath();
  context.moveTo(410,270);
  context.lineTo(380,360);
  context.lineTo(450,360);
  context.closePath();

  context.lineWidth = 5;
  context.strokeStyle = 'white';
  context.stroke();

  context.fillStyle = "white";
  context.fill();

  //C1 - Shape Four
  context.beginPath();
  context.moveTo(100,375);
  context.lineTo(50,475);
  context.lineTo(150,475);
  context.closePath();

  context.lineWidth = 5;
  context.strokeStyle = 'white';
  context.stroke();

  context.fillStyle = "white";
  context.fill();

  // C2 - Shape Four
  context.beginPath();
  context.moveTo(210,375);
  context.lineTo(180,475);
  context.lineTo(250,475);
  context.closePath();

  context.lineWidth = 5;
  context.strokeStyle = 'white';
  context.stroke();

  context.fillStyle = "white";
  context.fill();

  // C3 - Shape Four
  context.beginPath();
  context.moveTo(310,375);
  context.lineTo(280,475);
  context.lineTo(350,475);
  context.closePath();

  context.lineWidth = 5;
  context.strokeStyle = 'white';
  context.stroke();

  context.fillStyle = "white";
  context.fill();

  // C4 - Shape Four
  context.beginPath();
  context.moveTo(410,375);
  context.lineTo(380,475);
  context.lineTo(450,475);
  context.closePath();

  context.lineWidth = 5;
  context.strokeStyle = 'white';
  context.stroke();

  context.fillStyle = "white";
  context.fill();
};

if (canvas.getContext) {
  const context = canvas.getContext('2d');
  createTriangle(context);

} else {
  window.alert("OH NO!! Unfortunately, your browser does not support the rendering of this page.");
}


