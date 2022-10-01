import clockController from './clockController.js';

class mainController {
  constructor(mainContainer = null) {
    this.mainContainer = mainContainer;
    this.clockContainerProps = {
      id: 'clockContainer',
      class: 'container',
      bgColor: '#fff',
    };
    this.clockCanvasProps = {
      id: 'clockCanvas',
      width: 400,
      height: 400,
    };
    this.clockController;
    this.createHtmlElements();
    this.setClockProperties();
  }
  createHtmlElements() {
    const mainContainer = document.getElementById(this.mainContainer);
    const clockContainer = document.createElement('div');
    const clockCanvas = document.createElement('canvas');
    clockContainer.setAttribute('id', this.clockContainerProps.id);
    clockContainer.setAttribute('class', this.clockContainerProps.class);
    clockContainer.style.backgroundColor = this.clockContainerProps.bgColor;
    clockCanvas.setAttribute('id', this.clockCanvasProps.id);
    clockCanvas.setAttribute('width', this.clockCanvasProps.width);
    clockCanvas.setAttribute('height', this.clockCanvasProps.height);
    mainContainer.appendChild(clockContainer);
    clockContainer.appendChild(clockCanvas);
  }
  setClockProperties() {
    this.clockController = new clockController(
      new Date(),
      this.clockContainerProps.id,
      this.clockCanvasProps.id,
      this.clockContainerProps.bgColor
    );
  }
}

export default mainController;
