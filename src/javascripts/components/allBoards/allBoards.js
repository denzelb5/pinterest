import $ from 'jquery';
import boardData from '../../helpers/data/boardData';
import soloBoard from '../board/board';
import utilities from '../../helpers/utilities';
import allPins from '../allPins/allPins';
import './allBoards.scss';

const printPins = (event) => {
  const boardId = event.target.id;
  allPins.printPins(boardId);
  $('#boards2').html('');
  $('h1').hide();
};

const buildTheBoards = (uid) => {
  boardData.getBoardsByUid(uid)
    .then((boards) => {
      let domString = '';
      boards.forEach((board) => {
        domString += soloBoard.makeABoard(board);
      });
      utilities.printToDom(domString, 'boards2');
      // eslint-disable-next-line no-use-before-define
      $('body').on('click', '.soloBoard', printPins);
    })
    .catch((error) => console.error(error));
};

const closePin = () => {
  $('.close-button').click(() => {
    $('.pin-card').hide();
    buildTheBoards();
  });
};

export default { buildTheBoards, closePin };
