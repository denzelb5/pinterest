// import $ from 'jquery';
import pinData from '../../helpers/data/pinData';
import singlePin from '../singlePin/singlePin';
import utilities from '../../helpers/utilities';
import './allPins.scss';


const printPins = (boardId) => {
  pinData.getPinsByBoardId(boardId)
    .then((pins) => {
      let domString = `<div id="${boardId}" class="pin-container">`;
      domString += '<div id="pin-button"><button class="btn btn-danger" id="close-button">Close Pins</button></div>';
      pins.forEach((pin) => {
        domString += singlePin.createSinglePin(pin);
      });
      domString += '</div>';
      utilities.printToDom(domString, 'pins');
    })
    .catch((error) => console.error(error));
};

export default { printPins };
