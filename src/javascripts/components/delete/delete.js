import $ from 'jquery';
// import firebase from 'firebase/auth'; import 'firebase/app';
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
      allBoards.buildTheBoards();
    })
    .catch((error) => console.error(error));
};

const deleteSinglePin = (e) => {
  pinData.getPinsByBoardId();
  const pinId = e.target.id;
  console.error('pinId', pinId);
  const boardId = $(e.target).closest('.pin-container').attr('id');
  console.error('boardId', boardId);
  pinData.deletePin(pinId)
    .then(() => {
      allPins.printPins(boardId);
    })
    .catch((error) => console.error(error));
};

const pinEvent = () => {
  $('body').on('click', '.remove-pin', (e) => {
    console.error('delete pin');
    deleteSinglePin(e);
  });
};

export default { deleteBoardButton, pinEvent };