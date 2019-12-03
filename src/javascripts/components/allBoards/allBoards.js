import $ from 'jquery';
import boardData from '../../helpers/data/boardData';
import soloBoard from '../board/board';
import utilities from '../../helpers/utilities';
import allPins from '../allPins/allPins';
import './allBoards.scss';

const printPins = (event) => {
  const boardId = event.target.id;
  allPins.printPins(boardId);
  $('#boards2').addClass('hide');
  $('#pins').removeClass('hide');
  $('h1').hide();
};

const buildTheBoards = () => {
  boardData.getBoardsByUid()
    .then((boards) => {
      let domString = '';
      boards.forEach((board) => {
        domString += soloBoard.makeABoard(board);
      });
      domString += `<div id="board-button"><button id="add-board" type="button" class="btn btn-secondary" data-toggle="modal" data-target="#addBoardModal">
      +
    </button></div>`;
      utilities.printToDom(domString, 'boards2');
      $('body').on('click', '.pin-button', printPins);
    })
    .catch((error) => console.error(error));
};

const closePin = () => {
  $('body').on('click', '#close-button', () => {
    $('#pins').addClass('hide');
    $('#boards2').removeClass('hide');
  });
};


export default { buildTheBoards, closePin };
