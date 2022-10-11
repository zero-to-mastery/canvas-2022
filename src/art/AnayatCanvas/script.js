
var canvas = document.querySelector('canvas'); 
canvas.width = window.innerWidth;
canvas.height  = window.innerHeight;

var context = canvas.getContext('2d'); // getCOntext method is used for making line, draw & so on.

var mouse = {
    
    x: undefined,
    y: undefined
}

var maxRadius = 40;
// var minRadius = 2;

var colorArray = [
    "#FDFF00",
    "#9CFF2E",
    "#FF731D",
    "#FFF7E9",
    "#87A2FB"
]

// add EventListener to detect mouse behave

window.addEventListener('mousemove', function(event){

    mouse.x = event.x;
    mouse.y = event.y;
});

// web browser dynamically fixing

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
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)]; // math.Floor is used for lowest Whole number

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

// console.log(circleArray);


// This function is used for making Animation
function Animate()

{
    requestAnimationFrame(Animate); // requestAnimationFrame is function which provides looping callback over and over again
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

// Below Code is for practicing for making animation, canvas and So on.

// context.fillStyle = 'rgba(255,0,0,0.5)';
// context.fillRect(100,100,100,100);
// context.fillStyle = 'rgba(0,255,0,0.5)';
// context.fillRect(400,100,100,100);
// context.fillStyle = 'rgba(0,0,255,0.5)';
// context.fillRect(300,300,100,100);

// console.log(canvas);

// // lIne

// context.beginPath();
// context.moveTo(50,300);
// context.lineTo(300,100);
// context.lineTo(400,300);
// context.strokeStyle = "green";
// context.stroke();

// Arc / Cricle

// for(var i = 0  ; i<100 ; i++)
// {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     context.beginPath();
//     context.arc(x,y,30,0, Math.PI * 2, false);
//     context.strokeStyle = "red";
//     context.stroke();

// }