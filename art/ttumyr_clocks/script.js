import mainController from './components/mainController.js';

const htmlProps = {
  mainContainer: 'mainContainer', //app entry point - value must match corresponding html id
};

new mainController(htmlProps.mainContainer);
