const canvas = document.getElementById('art');
const c = canvas.getContext('2d');

// GTR
c.beginPath();
c.fillStyle = '#2dcc7d';
c.moveTo(192, 8);
c.lineTo(192, 66);
c.lineTo(376, 174);
c.lineTo(376, 116);
c.lineTo(192, 8);
c.fill();
c.closePath()

// GBL
c.beginPath();
c.fillStyle = '#2dcc7d';
c.moveTo(8, 116);
c.lineTo(8, 174);
c.lineTo(192, 282);
c.lineTo(192, 224);
c.lineTo(8, 116);
c.fill();
c.closePath()

// GTL
c.beginPath();
c.fillStyle = '#32dd88';
c.moveTo(8, 116);
c.lineTo(192, 8);
c.lineTo(192, 66);
c.lineTo(8, 174);
c.lineTo(8, 116);
c.fill();
c.closePath()

// RTR
c.beginPath();
c.fillStyle = '#d31157';
c.moveTo(192, 116);
c.lineTo(192, 174);
c.lineTo(376, 282);
c.lineTo(376, 224);
c.lineTo(192, 116);
c.fill();
c.closePath()

// GBR
c.beginPath();
c.fillStyle = '#32dd88';
c.moveTo(192, 224);
c.lineTo(192, 282);
c.lineTo(376, 174);
c.lineTo(376, 116);
c.lineTo(192, 224);
c.fill();
c.closePath()

// RBL
c.beginPath();
c.fillStyle = '#d31157';
c.moveTo(8, 224);
c.lineTo(8, 282);
c.lineTo(192, 390);
c.lineTo(192, 330);
c.lineTo(8, 224);
c.fill();
c.closePath()

// RTL
c.beginPath();
c.fillStyle = '#f41868';
c.moveTo(8, 224);
c.lineTo(8, 282);
c.lineTo(192, 174);
c.lineTo(192, 116);
c.lineTo(8, 224);
c.fill();
c.closePath()

// RBR
c.beginPath();
c.fillStyle = '#f41868';
c.moveTo(192, 330);
c.lineTo(192, 390);
c.lineTo(376, 282);
c.lineTo(376, 224);
c.lineTo(192, 330);
c.fill();
c.closePath()
