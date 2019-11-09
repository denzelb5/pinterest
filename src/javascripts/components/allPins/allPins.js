import $ from 'jquery';
import pinData from '../../helpers/data/pinData';
import singlePin from '../singlePin/singlePin';
import utilities from '../../helpers/utilities';
import './allPins.scss';

const getBoardId = () => {
  $('.card-body').click((e) => {
    const boardId = e.target.id;
    console.error('chicken butt', boardId);
  });
};

const printPins = (boardId) => {
  pinData.getPinsByBoardId(boardId)
    .then((pins) => {
      // eslint-disable-next-line no-param-reassign
      let domString = '';
      pins.forEach((pin) => {
        domString += singlePin.createSinglePin(pin);
      });
      utilities.printToDom(domString, 'pins');
    })
    .catch((error) => console.error(error));
};

export default { printPins, getBoardId };
