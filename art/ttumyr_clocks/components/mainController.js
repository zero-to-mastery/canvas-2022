import clockController from './clockController.js';

class mainController {
  constructor(mainContainer = null) {
    this.mainContainer = mainContainer;
    this.analogController;
    this.analogContainerProps = {
      id: 'analogContainer',
      class: 'container',
      bgColor: '#fff',
    };
    this.analogCanvasProps = {
      id: 'analogCanvas',
      width: 400,
      height: 400,
    };
    this.digitalController;
    this.digitalContainerProps = {
      id: 'digitalContainer',
      class: 'container',
      bgColor: '#000',
    };
    this.digitalCanvasProps = {
      id: 'digitalCanvas',
      width: 400,
      height: 200,
    };

    this.createHtmlElements(this.analogContainerProps, this.analogCanvasProps);
    this.createHtmlElements(this.digitalContainerProps, this.digitalCanvasProps);
    this.setClockProperties();
  }
  createHtmlElements(clockContainerProps, clockCanvasProps) {
    const mainContainer = document.getElementById(this.mainContainer);
    const clockContainer = document.createElement('div');
    const clockCanvas = document.createElement('canvas');
    clockContainer.setAttribute('id', clockContainerProps.id);
    clockContainer.setAttribute('class', clockContainerProps.class);
    clockContainer.style.backgroundColor = clockContainerProps.bgColor;
    clockCanvas.setAttribute('id', clockCanvasProps.id);
    clockCanvas.setAttribute('width', clockCanvasProps.width);
    clockCanvas.setAttribute('height', clockCanvasProps.height);
    mainContainer.appendChild(clockContainer);
    clockContainer.appendChild(clockCanvas);
  }
  setClockProperties() {
    this.analogController = new clockController(
      new Date(),
      'analog',
      this.analogContainerProps.id,
      this.analogCanvasProps.id,
      this.analogContainerProps.bgColor
    );
    this.digitalController = new clockController(
      new Date(),
      'digital',
      this.digitalContainerProps.id,
      this.digitalCanvasProps.id,
      this.digitalContainerProps.bgColor
    );
  }
}

export default mainController;
