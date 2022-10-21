const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];

// mouse
let mouse = {
    x: null,
    y: null,
    radius: 100
}
window.addEventListener('mousemove' ,
    function(event){
        mouse.x = event.x + canvas.clientLeft/2
        mouse.y = event.y + canvas.clientTop/2
    }
);

function drawImage(){
    let imageWidth = png.width;
    let imageHeight = png.height;
    const data = ctx.getImageData(0,0, imageWidth, imageHeight);
    ctx.clearRect(0,0, imageWidth, imageHeight);

    class Particle {
        constructor(x,y, color, size){
            this.x = x + canvas.width/2 - png.width * 2;
            this.y = y + canvas.height/2 - png.height * 2;
            this.color = color;
            this.size = 2;
            this.baseX = x + canvas.width/2 - png.width * 2;
            this.bsaeY = y + canvas.height/2 - png.height * 2;
            this.density = (Math.random() * 10) + 2;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }
        update() {
            ctx.fillStyle = this.color;

            //collision detction
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            
            // max distance, past that the force will be 0
            const maxDistance = 100;
            let force = (maxDistance - distance) / maxDistance;
            if (force < 0) force = 0;

            let directionX = (forceDirectionX * force * this.density * 0.6);
            let directionY = (forceDirectionY * force * this.density * 0.6);

            if (distance < mouse.radius + this.size) {
                this.x -= directionX;
                this.y -= directionY;
            } else{
                if (this.x !== this.baseX){
                    let dx = this.x - this. baseX;
                    this.x -= dx/20;
                } if (this.y !== this.bsaeY){
                    let dy = this.y - this.bsaeY;
                    this.y -= dy/20;
                }
            }
            this.draw()

        }
    }

    function init(){
        particleArray = [];

        for (let y = 0, y2 = data.height; y < y2; y++) {
            for (let x = 0, x2 = data .width; x < x2; x++){
                if (data.data[(y * 4 * data.width) + (x * 4) + 3] > 128){
                    let positionX = x;
                    let positionY = y;
                    let color = `rgb(${data.data[(y * 4 * data.width) + (x * 4)]},
                                     ${data.data[(y * 4 * data.width) + (x * 4) + 1]},
                                     ${data.data[(y * 4 * data.width) + (x * 4) + 2]})`;
                    particleArray.push(new Particle(positionX * 4, positionY * 4, color));
                }
            }
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.fillStyle = 'rgba(0,0,0,.05)';
        ctx.fillRect(0, 0, innerWidth, innerHeight);

        for (let i = 0; i < particleArray.length; i++){
            particleArray[i].update();
        }
    }
    init();
    animate();

    window.addEventListener('resize',
        function(){
            canvas.width = innerWidth;
            canvas.height = innerHeight;
            init();
        }
    );
}

const png = new Image();
png.src = "data:image/png;base64,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";

window.addEventListener('load', (event) =>{
    ctx.drawImage(png, 0, 0);
    drawImage();
})