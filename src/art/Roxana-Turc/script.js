class Spinner {
  _rotation = 0;
  _listener = null;
  _radius = 50;

  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;
    this.beginTime = new Date().getTime();

    this.ctx.translate(this.width / 2, this.height / 2);
  }

  init(index) {
    this.drawHexagon();
  }

  start() {
    this._rotation = 0;
    window.requestAnimationFrame(() => this.draw());
  }

  addListener(listener) {
    this._listener = listener;
  }

  draw() {
    if (Math.floor(this._rotation * 100) < Math.floor((Math.PI / 3) * 100)) {
      const delta = new Date().getTime() - this.beginTime;
      if (delta > 17) {
        this.ctx.clearRect(-50, -50, this.width, this.height); // clear canvas

        this._rotation += Math.PI / 60;
        this.ctx.rotate(Math.PI / 60);

        this.drawHexagon();

        this.beginTime = new Date().getTime();
      }

      window.requestAnimationFrame(() => this.draw());
    } else {
      if (this._listener !== null) {
        this._listener();
      }
    }
  }

  drawHexagon() {
    const a = (2 * Math.PI) / 6; // 60

    this.ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      this.ctx.lineTo(
        this._radius * Math.cos(a * i),
        this._radius * Math.sin(a * i)
      );
    }

    this.ctx.closePath();
    this.ctx.stroke();
  }
}

let spinners = [];
const spinnerCount = 19;

for (let i = 1; i <= spinnerCount; i++) {
  const canvas = document.querySelector(`.myCanvas_${i}`);
  const spinner = new Spinner(canvas);
  spinner.init(i);
  spinners.push(spinner);
}

const second = [
  spinners[4],
  spinners[5],
  spinners[8],
  spinners[10],
  spinners[13],
  spinners[14],
];
const third = [
  spinners[0],
  spinners[1],
  spinners[2],
  spinners[3],
  spinners[6],
  spinners[7],
  spinners[11],
  spinners[12],
  spinners[15],
  spinners[16],
  spinners[17],
  spinners[18],
];

spinners[9].addListener(function () {
  second.forEach(it => it.start());
});

spinners[4].addListener(function () {
  third.forEach(it => it.start());
});
spinners[0].addListener(function () {
  spinners[9].start();
});

document.getElementById("start").addEventListener("click", function () {
  spinners.forEach(it => it.init());
  spinners[9].start();
});
