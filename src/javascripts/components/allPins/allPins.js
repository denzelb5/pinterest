
import pinData from '../../helpers/data/pinData';
import singlePin from '../singlePin/singlePin';
import utilities from '../../helpers/utilities';
import './allPins.scss';

const printPins = (boardId) => {
  pinData.getPinsByBoardId(boardId)
    .then((pins) => {
      let domString = '<div id="pin-button" class="text-center"><button class="btn btn-danger" id="close-button">Close Pins</button></div>';
      domString += '</div>';
      domString += `<div class="board-div" id="${boardId}">`;
      domString += '<div class="d-flex flex-wrap pin-container">';
      pins.forEach((pin) => {
        domString += singlePin.createSinglePin(pin);
      });
      domString += '</div>';
      domString += `
      <!-- Button trigger addPin modal -->
        <div id="add-pin-div">
          <button id="add-pin" type="button" class="btn btn-secondary" data-toggle="modal" data-target="#addPinModal">
            +
          </button>
        </div>`;
      utilities.printToDom(domString, 'pins');
    })
    .catch((error) => console.error(error));
};


export default { printPins };
