const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let scale = 8;
let scaleFrame = 0;
let scaleX = 1;
let scaleY = 1;
let scaling = {
    FULL_PUMP: 1,
    HALF_RELEASE: 2,
    FULL_RELEASE: 3,
    REFILL: 4
};
let scaleState = scaling.FULL_PUMP;
let pointArray = [];
let heartColor = "#CCCCFF";

ctx.translate(canvas.width / 2, canvas.height / 2);

createPoints()
    .then(() => drawHeart())
    .then(() => makeHeartBeat())
    .catch((err) => console.error(err));

function createPoints() {
    let i = 0.15;
    let halfpoint = false;
    let heartComplete = false;
    return new Promise((resolve, reject) => {
        while (heartComplete != true) {
            let xValue = scale * 16 * Math.pow(Math.sin(i), 3);
            let yValue =
                -scale * (13 * Math.cos(i)
                    - 5 * Math.cos(2 * i)
                    - 2 * Math.cos(3 * i)
                    - Math.cos(4 * i));

            if (xValue < 0) {
                halfpoint = true;
            }

            if (halfpoint) {
                if (xValue > 0) {
                    heartComplete = true;
                }
            }
            let point = { x: xValue, y: yValue };
            pointArray.push(point);
            i += 0.03;

        }
        resolve();
    });
}

function drawHeart() {
    return new Promise((resolve, reject) => {
        if (pointArray.length != 0) {
            let interval;
            let index = 0;
            ctx.fillStyle = heartColor;
            ctx.lineWidth = 2;
            ctx.strokeStyle = "#455a64";
            ctx.beginPath();
            interval = setInterval(() => {
                ctx.lineTo(pointArray[index].x, pointArray[index].y);
                ctx.fill();
                ctx.stroke();
                if (index < pointArray.length - 1) {
                    index++;
                } else {
                    ctx.closePath();
                    clearInterval(interval);
                    resolve();
                }
            }, 20);
        } else {
            reject(console.error("The existing pointArray does not have any elements."));
        }
    });
}

function makeHeartBeat() {
    ctx.fillStyle = heartColor;
    setInterval(() => {
        clearCanvas();
        simulateHeartPump();
        paintHeart();
    }, 50);
}

function clearCanvas() {
    ctx.fillStyle = "#eee";
    ctx.fillRect(-canvas.width, -canvas.height, canvas.width * 2, canvas.height * 2);
}

function paintHeart() {
    ctx.beginPath();
    ctx.fillStyle = heartColor;
    pointArray.forEach(point => {
        ctx.lineTo(point.x, point.y);
        ctx.fill();
    });
    ctx.closePath();
}

function simulateHeartPump() {

    let scaleUpX = 1.05;
    let scaleUpY = 1.05;

    let reverseX = 1 / scaleUpX;
    let reverseY = 1 / scaleUpY;

    let frameFullPump = 6; // The number of frames after which the heart should reach its fully-pumped shape.
    resetScaleXY();

    if (scaleState == scaling.FULL_PUMP || scaleState == scaling.REFILL) {
        scaleX *= scaleUpX;
        scaleY *= scaleUpY;
        scaleFrame++;
    } else if (scaleState == scaling.HALF_RELEASE || scaleState == scaling.FULL_RELEASE) {
        scaleX *= reverseX;
        scaleY *= reverseY;
        scaleFrame--;
    }

    ctx.scale(scaleX, scaleY);

    if (scaleFrame == frameFullPump) {
        if (scaleState == scaling.FULL_PUMP) {
            scaleState = scaling.HALF_RELEASE;
        } else if (scaleState == scaling.REFILL) {
            scaleState = scaling.FULL_RELEASE;
        }
    }

    if (scaleFrame < frameFullPump) {
        if (scaleState == scaling.HALF_RELEASE && scaleFrame <= frameFullPump / 2) {
            scaleState = scaling.REFILL;
        } else if (scaleState == scaling.FULL_RELEASE && scaleFrame == 1) {
            scaleFrame = 1;
            scaleState = scaling.FULL_PUMP;
        }
    }
}

function resetScaleXY() {
    scaleX = 1;
    scaleY = 1;
}