var canvas = document.querySelector('canvas'); 
canvas.width = window.innerWidth;
canvas.height  = window.innerHeight;
var context = canvas.getContext('2d'); 

var mouse = {
    
    x: undefined,
    y: undefined
}

var maxRadius = 40;


var colorArray = [
    "#FDFF00",
    "#9CFF2E",
    "#FF731D",
    "#FFF7E9",
    "#87A2FB"
]

window.addEventListener('mousemove', function(event){

    mouse.x = event.x;
    mouse.y = event.y;
});


window.addEventListener('resize', function(){

    canvas.width = window.innerWidth;
    canvas.height  = window.innerHeight;

    init();
});

function Circle(x,y, dx, dy, radius)

{
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)]; 

    this.draw = function(){

        context.beginPath();
        context.arc( this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
    }

    this.update = function(){
        
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0)
        {
            this.dx = -this.dx;
        }

        if(this.y + this.radius > innerHeight || this.y - this.radius < 0)
        {
            this.dy = -this.dy;
        }
        
        this.x += this.dx;
        this.y += this.dy;

        // interactivity

        if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && 
           mouse.y - this.y < 50 && mouse.y - this.y > -50)
        {
            this.radius += 1;

            if(this.radius < maxRadius)
            {
                this.radius += 1;
            }
        }

       
        else if(this.radius > this.minRadius)
        {
            this.radius -= 1;
        }
        
        this.draw();

    }
}

// init Function of creating Circle

var circleArray = [];
function init()
{
    circleArray = [];
    for(var i = 0; i<1900 ; i++)
{
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 3;
    var dy = (Math.random() - 0.5) * 3;
    var radius = Math.random() * 3 + 1;

    circleArray.push(new Circle(x,y, dx, dy, radius));
    
}

}

function Animate()

{
    requestAnimationFrame(Animate); 
    context.clearRect(0,0,innerWidth, innerHeight);

    for(var i  = 0  ; i<circleArray.length ; i++)
    {
        circleArray[i].update();
    }

    circle.update();

    context.beginPath();
    context.arc(x,y,radius,0, Math.PI * 2, false);
    context.strokeStyle = "blue";
    context.stroke();
    
}
// Calling Function

init();
Animate();