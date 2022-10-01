class clock {
  constructor() {
    this.canvas;
    this.container;
    this.ctx;
    this.radius;
    this.bgColor = '#fff';
    this.dialColor = '#fff';
    this.frameColor1 = '#009966';
    this.frameColor2 = '#003333';
    this.numColor = '#000';
    this.numFontWeight = 'bold';
    this.centerSize = 0.07;
    this.centerColor = '#009966';
    this.hHandColor = '#003311';
    this.mHandColor = '#004422';
    this.sHandColor = '#ffaaaa';
    this.time;
  }

  setCanvas(id) {
    this.canvas = document.getElementById(id);
  }
  setContainer(id) {
    this.container = document.getElementById(id);
  }
  setCtx(ctx) {
    this.ctx = ctx;
  }
  setRadius(radius) {
    this.radius = radius;
  }
  setBgColor(color) {
    this.container = document.getElementById(color);
  }
  setTime(time) {
    this.time = time;
  }

  initialSetup() {
    this.setCtx(this.canvas.getContext('2d'));
    this.setRadius(this.canvas.height / 2);
    this.ctx.translate(this.radius, this.radius);
    this.setRadius(this.radius * 0.9);
    this.setBgColor(window.getComputedStyle(this.container).getPropertyValue('background-color'));
  }
  drawClock() {
    this.drawFace(this.ctx, this.radius);
    this.drawNumbers(this.ctx, this.radius);
    this.drawTime(this.ctx, this.radius);
    this.drawCenter();
  }
  drawFace(ctx, radius) {
    let grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.dialColor;
    ctx.fill();

    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, this.dialColor);
    grad.addColorStop(0.2, this.frameColor2);
    grad.addColorStop(0.4, this.frameColor1);
    grad.addColorStop(0.8, this.frameColor2);
    grad.addColorStop(1, this.bgColor);
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();
  }
  drawNumbers(ctx, radius) {
    ctx.fillStyle = this.numColor;
    var ang;
    var num;
    ctx.font = `${this.numFontWeight} ${radius * 0.15}px combo, arial, sans-serif`;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    for (num = 1; num < 13; num++) {
      ang = (num * Math.PI) / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius * 0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius * 0.85);
      ctx.rotate(-ang);
    }
  }
  drawTime(ctx, radius) {
    var hour = this.time.getHours();
    var minute = this.time.getMinutes();
    var second = this.time.getSeconds();

    hour = hour % 12;
    hour = (hour * Math.PI) / 6 + (minute * Math.PI) / (6 * 60) + (second * Math.PI) / (360 * 60);
    this.drawHand(ctx, hour, radius * 0.5, radius * 0.07, this.hHandColor);

    minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60);
    this.drawHand(ctx, minute, radius * 0.8, radius * 0.05, this.mHandColor);

    second = (second * Math.PI) / 30;
    this.drawHand(ctx, second, radius * 0.9, radius * 0.02, this.sHandColor);
  }
  drawHand(ctx, pos, length, width, clr = '#009966') {
    ctx.strokeStyle = clr;
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = 'round';
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
  }
  drawCenter() {
    this.ctx.beginPath();
    this.ctx.arc(0, 0, this.radius * this.centerSize, 0, 2 * Math.PI);
    this.ctx.fillStyle = this.centerColor;
    this.ctx.fill();
  }
  run(time = new Date()) {
    this.setTime(time);
    this.drawClock();
  }
}

export default clock;
