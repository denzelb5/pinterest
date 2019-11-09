import $ from 'jquery';
import pinData from '../../helpers/data/pinData';
import singlePin from '../singlePin/singlePin';
import utilities from '../../helpers/utilities';
import './allPins.scss';


const printPins = (boardId) => {
  pinData.getPinsByBoardId(boardId)
    .then((pins) => {
      // eslint-disable-next-line no-param-reassign
      let domString = '<div><button id="close-button">Close Pins</button></div>';
      pins.forEach((pin) => {
        domString += singlePin.createSinglePin(pin);
      });
      utilities.printToDom(domString, 'pins');
      $('#close-button').on('click', () => {
        $('#pins').addClass('hide');
        $('#boards2').removeClass('hide');
      });
    })
    .catch((error) => console.error(error));
};

export default { printPins };
