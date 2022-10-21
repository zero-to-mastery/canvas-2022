canvas=document.querySelector("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;



var c=canvas.getContext("2d");




//object-oriented javascript for multiple circles
function Circle(x,y,radius, dx,dy){
  this.x=x;
  this.y=y;
  this.radius=radius;
  this.dx=dx;
  this.dy=dy;

  this.draw=function()
  {

    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);

    c.strokeStyle='salmon';
    c.stroke();

  }

  this.update=function(){

    if(this.x+this.radius>innerWidth || this.x-this.radius<0)
    {
      this.dx=-this.dx;

    }

    if(this.y+radius>innerHeight || this.y-radius<0)
    {
      this.dy=-this.dy;
    }
    this.x+=this.dx;             //1px per frame refresh to the right
    this.y+=this.dy;

    this.draw();
  }
}

var circleArray=[];

for(var i=0;i<100;i++)
{
  var radius=30;
  var x=Math.random()* (innerWidth-radius*2) + radius;   //the +radius is so that it doesnt get caught in the left side of the window
  var dx=(Math.random()-0.5)*8;                                  //x-velocity
  var y=Math.random()* (innerHeight-radius*2) +radius;
  var dy=(Math.random()-0.5)*8;                                   //y-velocity positive means downward velocity
  var circle=new Circle(x, y, 30, dx, dy);
  circleArray.push(circle);
  //circle.draw();
}

console.log(circleArray);






//animating a moving circle V2

function animate()
{
  requestAnimationFrame(animate);
  c.clearRect(0,0,innerWidth,innerHeight);
  //circle.draw();
  //circle.update();

for (var i = 0; i < circleArray.length; i++) {
  circleArray[i].update();
}
}
animate();
