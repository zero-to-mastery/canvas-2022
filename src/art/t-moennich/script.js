const createRange = n => Array.from(Array(n).keys())

const getRandom = (min = 0, max = 1) => Math.random() * (max - min) + min;

class IoHelper {
    constructor() {
        this.mousePosition = new Vector();

        this.registerEventHandler();
    }

    registerEventHandler() {
        window.addEventListener('mousemove', ({x, y}) => {
            this.mousePosition.x = x;
            this.mousePosition.y = y;
        });
    }
}

class Vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    add(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    subtract(vector) {
        return new Vector(this.x - vector.x, this.y - vector.y);
    }

    scale(scalar = 1) {
        return new Vector(this.x * scalar, this.y * scalar);
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

class Point {
    constructor({position = new Vector(), color = '#f00', size = 3}) {
        this.position = position;
        this.color = color;
        this.size = size;
    }

    render(ctx) {
        ctx.beginPath();

        ctx.fillStyle = this.color;
        ctx.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
        ctx.fill();

        ctx.closePath();
    }
}

class SpringPoint extends Point {
    constructor({target = new Vector(), elasticity = 1e-1, color = 'rgba(255, 0, 0, .6)', size = 3, damping = 1e-1}) {
        super({position: target, color, size});
        this.velocity = new Vector();
        this.target = target;
        this.elasticity = elasticity;
        this.damping = damping;
    }

    updateVelocity() {
        let damping = this.velocity.scale(this.damping);
        let force = this.target
            .subtract(this.position)
            .scale(this.elasticity)
            .subtract(damping);

        this.velocity = this.velocity.add(force);
    }

    updatePosition() {
        this.position = this.position.add(this.velocity);
    }

    update() {
        this.updatePosition();
        this.updateVelocity();
    }
}

class SpringTrail extends SpringPoint {
    constructor(config) {
        super(config);

        const size = config.trailSize || 12;
        this.trail = createRange(size)
            .map(index => new SpringPoint({
                ...config,
                target: this.position,
                elasticity: 1 / (index * 7),
                damping: 7 / (index * 10 + 5),
            }));
    }

    update() {
        super.update();

        this.trail.forEach(point => point.update());
    }

    render(ctx) {
        super.render(ctx);

        this.trail.forEach(point => point.render(ctx));
    }
}


class Renderer {
    constructor(ctx, size = {width: 500, height: 500}) {
        this.ctx = ctx;
        this.size = size;
    }

    render(objects) {
        objects.forEach(object => object.render(ctx));
    }

    clear() {
        this.ctx.fillStyle = '#1f1f1f';
        this.ctx.fillRect(0, 0, this.size.width, this.size.height);
    }
}

class ObjectManager {
    constructor(renderer, objects = []) {
        this.renderer = renderer;
        this.objects = objects;
    }

    add(...objects) {
        this.objects = this.objects.concat(objects);
    }

    tick() {
        this.objects.forEach(object => object.update());
    }

    render() {
        this.renderer.render(this.objects);
    }

    clear() {
        this.renderer.clear();
    }
}


const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

const io = new IoHelper();
const objectManager = new ObjectManager(
    new Renderer(ctx, {width: canvas.width, height: canvas.height})
);

const origin = new Vector(canvas.width / 2, canvas.height / 2);

const createPolarVector = (rad, time) => {
    rad += Math.sin(time / 100);
    let x = 17 * Math.sin(rad) ** 3;
    let y = 14 * Math.cos(rad) - 5 * Math.cos(2 * rad) - 2 * Math.cos(3 * rad) - Math.cos(4 * rad);
    let scale = (Math.sin(time / 20) + 3) * 4;

    return new Vector(x * scale, -y * scale)
        .add(origin.add(io.mousePosition.subtract(origin).scale(0.8)));
};

const amountPoints = 120;

let targets = [];
for (let i = 0; i < amountPoints; i++) {
    const target = new Vector(
        getRandom(0, canvas.width),
        getRandom(0, canvas.height)
    );

    objectManager.add(new SpringTrail({
        target,
        size: 1.3,
        trailSize: 10,
        color: "rgba(230, 10, 17, 0.7)"
    }));

    targets.push(target);
}

function updateTargets() {
    for (let i = 0; i < amountPoints; i++) {
        const lerp = i / (amountPoints - 1) * Math.PI * 2 + getRandom() / 10;
        const result = createPolarVector(lerp, time);

        targets[i].x = result.x;
        targets[i].y = result.y;
    }
}

let time = 0;
(function animationLoop() {
    time++;
    objectManager.clear();
    objectManager.tick();
    objectManager.render();

    updateTargets();

    window.requestAnimationFrame(animationLoop);
})();
