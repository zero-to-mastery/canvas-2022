import { default as analog } from './analog.js';
import { default as digital } from './digital.js';

class clockController {
  constructor(time = new Date(), type = 'analog', containerId, canvasId, contBgColor) {
    this.clock;
    this.time = time;
    this.containerId = containerId;
    this.canvasId = canvasId;
    this.contBgColor = contBgColor;
    this.setClockType(type);
    this.setClockEnv();
    this.runClock();
    this.startInterval();
  }
  setClockType(type) {
    if (type == 'digital') this.clock = new digital();
    else this.clock = new analog();
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
