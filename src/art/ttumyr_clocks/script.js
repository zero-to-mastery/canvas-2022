import clock from './analog.js';

const htmlProps = {
  mainContainer: 'mainContainer',
  clockContainer: 'clockContainer',
  clockCanvas: 'clockCanvas',
};

class clockController {
  constructor(time = new Date()) {
    this.clock = new clock();
    this.time = time;
    this.setClockEnv();
    this.runClock();
    this.startInterval();
  }
  setClockEnv() {
    this.clock.setCanvas(htmlProps.clockCanvas);
    this.clock.setContainer(htmlProps.clockContainer);
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

new clockController();
