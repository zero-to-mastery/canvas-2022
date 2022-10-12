//layer 2 on top of layer 1
//layer 2 is dark.
// layer 1 contains the ball

//layer1 canvas
layer1=document.getElementById('layer1');
layer1.width=window.innerWidth;
layer1.height=window.innerHeight;

var c1=layer1.getContext('2d');



//layer2 Canvas
layer2=document.getElementById('layer2');
layer2.width=window.innerWidth;
layer2.height=window.innerHeight;

var c2=layer2.getContext('2d');

c2.fillRect(0,0,innerWidth,innerHeight);



//make a circle object
function Circle(x,y,radius){
  this.x=x;
  this.y=y;
  this.radius=radius;

 //This is done so that we don't get a half-circle at the edges
  if(this.x<this.radius )
  {
    this.x=this.radius;
  }

  if(this.x>innerWidth-this.radius)
  {
    this.x=innerWidth-this.radius;
  }

  if(this.y<this.radius)
  {
    this.y=this.radius;
  }
  if(this.y>innerHeight-this.radius)
  {
    this.y=innerHeight-this.radius;
  }

// the ball is made on layer 1
  c1.beginPath();
  c1.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
  c1.fillStyle='salmon';
  c1.fill();

}

var x=Math.random()*innerWidth;
var y=Math.random()*innerHeight;
var radius=30;
//instantiate the circle
new Circle(x,y,radius);





window.addEventListener('mousemove',function(event){
             clearCircle(event.x,event.y,100);
             setTimeout(function(){
               c2.fillRect(0,0,innerWidth,innerHeight);
             },5);
             clearCircle(event.x,event.y,100);
             });


var clearCircle = function(x, y, radius)
             {
                 c2.save();
                 c2.globalCompositeOperation = 'destination-out';
                 c2.beginPath();
                 c2.arc(x, y, radius, 0, 2 * Math.PI, false);
                 c2.fill();
                 c2.restore();
             };
