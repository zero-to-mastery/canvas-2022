var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

let cw = canvas.width = 300;// the width of the canvas
let ch = canvas.height = 300;// the height of the canvas

let c={// the circle: coords of the center and the radius
  x:75,y:100,r:55
}

let angle = (2*Math.PI)/3;// the angle between vertices

points = [];// the vertices array
   

for(let i = 0; i < 3; i++){
  let o = {}
  o.x = c.x + c.r*Math.cos(i*angle);
  o.y = c.y + c.r*Math.sin(i*angle);
  points.push(o); 
}

// draw the circle
context.beginPath();
context.arc(c.x,c.y,c.r,0,2 * Math.PI);
context.fillStyle = "blue";
context.fill();
context.stroke();


// draw the triangle
context.beginPath();
context.moveTo(points[0].x,points[0].y);
for(let i = 1; i < points.length; i++){
  context.lineTo(points[i].x,points[i].y);
}
context.closePath();
context.fillStyle = "green";
context.fill();
context.stroke();