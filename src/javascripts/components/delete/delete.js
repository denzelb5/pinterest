import $ from 'jquery';
import boardData from '../../helpers/data/boardData';
import allBoards from '../allBoards/allBoards';
import pinData from '../../helpers/data/pinData';
import allPins from '../allPins/allPins';

const deleteBoardButton = () => {
  $('body').on('click', '.delete-board', (e) => {
    // eslint-disable-next-line no-use-before-define
    deleteSingleBoard(e);
  });
};

const deleteSingleBoard = (e) => {
  const boardId = e.target.id;
  boardData.deleteBoard(boardId)
    .then(() => {
      pinData.getPinsByBoardId(boardId)
        .then((thesePins) => {
          thesePins.forEach((pin) => {
            pinData.deletePin(pin.id);
          });
          allBoards.buildTheBoards();
        })
        .catch((error) => console.error(error));
    });
};

const deleteSinglePin = (e) => {
  pinData.getPinsByBoardId();
  const pinId = e.target.id;
  const boardId = $('.board-div').attr('id');
  pinData.deletePin(pinId)
    .then(() => {
      allPins.printPins(boardId);
    })
    .catch((error) => console.error(error));
};

const pinEvent = () => {
  $('body').on('click', '.remove-pin', (e) => {
    deleteSinglePin(e);
  });
};

export default { deleteBoardButton, pinEvent };
