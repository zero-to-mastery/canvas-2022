class clock {
  constructor() {
    this.canvas;
    this.container;
    this.ctx;
    this.radius;
    this.bgColor = '#fff';
    this.time;
    this.numOnColor = '#00ffff';
    this.numOffColor = '#001818';
    this.topMargin = 0;
    this.leftMargin = 0;
    this.digitWidth = 40;
    this.digitHeight = 34;
    this.digitSeparator = 60;
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
  setBgColor(color) {
    this.bgColor = color;
  }
  setBgCss(color) {
    this.container = document.getElementById(color);
  }
  setNumOnColor(color) {
    this.numOnColor = color;
  }
  setNumOffColor(color) {
    this.numOffColor = color;
  }
  setTopMargin(topMargin) {
    this.topMargin = topMargin;
  }
  setLeftMargin(leftMargin) {
    this.leftMargin = leftMargin;
  }
  setTime(time) {
    this.time = time;
  }

  initialSetup() {
    this.setCtx(this.canvas.getContext('2d'));
    this.setBgCss(window.getComputedStyle(this.container).getPropertyValue('background-color'));
    this.setTopMargin(this.canvas.height / 2 - this.digitHeight);
    this.setLeftMargin(
      this.canvas.width / 2 - (this.digitWidth * 3 + this.digitSeparator * 2) / 2 - this.digitWidth / 2
    );
  }
  drawClock() {
    const hour = this.returnTime(this.time.getHours());
    const minutes = this.returnTime(this.time.getMinutes());
    const seconds = this.returnTime(this.time.getSeconds());
    const digits = [
      [hour[0], 0 + this.leftMargin, this.topMargin],
      [hour[1], this.digitWidth + this.leftMargin, this.topMargin],
      [minutes[0], this.digitWidth + this.digitSeparator + this.leftMargin, this.topMargin],
      [minutes[1], this.digitWidth * 2 + this.digitSeparator + this.leftMargin, this.topMargin],
      [seconds[0], this.digitWidth * 2 + this.digitSeparator * 2 + this.leftMargin, this.topMargin],
      [seconds[1], this.digitWidth * 3 + this.digitSeparator * 2 + this.leftMargin, this.topMargin],
    ];
    for (let i = 0; i < digits.length; i++) {
      this.clearDigit(
        digits[i][1],
        digits[i][2],
        digits[i][1] + this.digitWidth,
        digits[i][1] + this.digitHeight,
        this.bgColor
      );
      this.drawDigit(digits[i][0], digits[i][1], digits[i][2]);
    }
  }
  returnTime(time = 11) {
    if (String(time).length > 1) {
      return [Number(String(time)[0]), Number(String(time)[1])];
    }
    return [0, time];
  }
  clearDigit(x, y, endX, endY, color) {
    this.ctx.beginPath();
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, endX, endY);
  }
  drawDigit(num = 1, x = 0, y = 0) {
    const numPattern = this.numbers[num];
    const fullEight = ['top', 'topLeft', 'botLeft', 'topRight', 'botRight', 'middle', 'bottom'];
    const digit = [
      [0 + x, 0 + y, this.numShapes.top],
      [-2 + x, 2 + y, this.numShapes.topLeft],
      [-2 + x, 36 + y, this.numShapes.botLeft],
      [34 + x, 2 + y, this.numShapes.topRight],
      [34 + x, 36 + y, this.numShapes.botRight],
      [0 + x, 36 + y, this.numShapes.middle],
      [0 + x, 70 + y, this.numShapes.bottom],
    ];
    for (let i = 0; i < digit.length; i++) {
      let color = this.numOffColor;
      if (numPattern.includes(fullEight[i])) color = this.numOnColor;
      this.drawShape(digit[i][0], digit[i][1], digit[i][2], color);
    }
  }
  drawShape(x = 0, y = 0, shape = this.numShapes.top, color = '#111111') {
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    for (let i = 0; i < shape.length; i++) {
      this.ctx.lineTo(shape[i][0] + x, shape[i][1] + y);
    }
    this.ctx.fillStyle = color;
    this.ctx.fill();
  }
  numbers = {
    0: ['top', 'topLeft', 'botLeft', 'topRight', 'botRight', 'bottom'],
    1: ['topRight', 'botRight'],
    2: ['top', 'botLeft', 'topRight', 'middle', 'bottom'],
    3: ['top', 'topRight', 'botRight', 'middle', 'bottom'],
    4: ['topLeft', 'topRight', 'botRight', 'middle'],
    5: ['top', 'topLeft', 'botRight', 'middle', 'bottom'],
    6: ['top', 'topLeft', 'botLeft', 'botRight', 'middle', 'bottom'],
    7: ['top', 'topRight', 'botRight'],
    8: ['top', 'topLeft', 'botLeft', 'topRight', 'botRight', 'middle', 'bottom'],
    9: ['top', 'topLeft', 'topRight', 'botRight', 'middle', 'bottom'],
  };
  numShapes = {
    top: [
      [32, 0],
      [26, 8],
      [6, 8],
      [0, 0],
    ],
    topLeft: [
      [8, 10],
      [8, 26],
      [0, 32],
      [0, 0],
    ],
    botLeft: [
      [8, 10],
      [8, 22],
      [0, 32],
      [0, 0],
    ],
    topRight: [
      [-8, 10],
      [-8, 26],
      [0, 32],
      [0, 0],
    ],
    botRight: [
      [-8, 10],
      [-8, 22],
      [0, 32],
      [0, 0],
    ],
    middle: [
      [6, -4],
      [26, -4],
      [32, 0],
      [26, 4],
      [6, 4],
      [0, 0],
    ],
    bottom: [
      [32, 0],
      [26, -8],
      [6, -8],
      [0, 0],
    ],
  };
  run(time = new Date()) {
    this.setTime(time);
    this.drawClock();
  }
}

export default clock;
