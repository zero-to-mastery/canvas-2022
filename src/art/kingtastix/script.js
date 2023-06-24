const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 600;

class Player {
    constructor(){

        this.radius = 20;

        this.position = {
            x: Math.floor(Math.random() * canvas.width) + this.radius,
            y: Math.floor(Math.random() * canvas.height) + this.radius
        };

        this.velocity = {
            x: Math.floor(Math.random() * 10),
            y: Math.floor(Math.random() * 10),
        }

        this.color = 'white';

    }

    draw(){
        context.beginPath();
        context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }

    update(){

        this.draw();
        const colors = ['white', 'red', 'green', 'purple'];

        if(this.position.x + this.radius > canvas.width){
            this.velocity.x = -this.velocity.x;
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }
        
        if(this.position.x - this.radius < 0){
            this.velocity.x = -this.velocity.x;
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }
        
        if(this.position.y + this.radius > canvas.height){
            this.velocity.y = -this.velocity.y;
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }
        
        if(this.position.y - this.radius < 0){
            this.velocity.y = -this.velocity.y;
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        console.log(this.velocity);

        /*if (radius + x > innerWidth)
            vx = 0 - vx;
  
        if (x - radius < 0)
            vx = 0 - vx;
  
        if (y + radius > innerHeight)
            vy = 0 - vy;
  
        if (y - radius < 0)
            vy = 0 - vy;*/

        
    }
    
}

const player = new Player();


function animate(){

    requestAnimationFrame(animate);
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
    player.update();

}

animate()