import clock from './analog.js';

class clockController {
  constructor(time = new Date(), containerId, canvasId, contBgColor) {
    this.clock = new clock();
    this.time = time;
    this.containerId = containerId;
    this.canvasId = canvasId;
    this.contBgColor = contBgColor;
    this.setClockEnv();
    this.runClock();
    this.startInterval();
  }
  setClockEnv() {
    this.clock.setCanvas(this.canvasId);
    this.clock.setContainer(this.containerId);
    this.clock.setBgColor(this.contBgColor);
    this.clock.initialSetup();
  }
  runClock() {
    this.clock.run(this.time);
    this.time.setSeconds(this.time.getSeconds() + 1);
  }
  startInterval() {
    this.isRunning = setInterval(this.runClock.bind(this), 1000);
  }
}

export default clockController;
