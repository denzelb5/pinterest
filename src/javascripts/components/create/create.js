import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import boardData from '../../helpers/data/boardData';
import allBoards from '../allBoards/allBoards';
import 'bootstrap';
import pinData from '../../helpers/data/pinData';
import allPins from '../allPins/allPins';


const createNewBoard = () => {
  // eslint-disable-next-line no-use-before-define
  $('#create-board').click(newBoard);
};

const newBoard = (e) => {
  e.stopImmediatePropagation();
  const { uid } = firebase.auth().currentUser;
  const newlyCreatedBoard = {
    name: $('#board-name').val(),
    description: $('#board-description').val(),
    imageUrl: $('#board-image-url').val(),
    uid,
  };
  boardData.addBoard(newlyCreatedBoard)
    .then(() => {
      $('#addBoardModal').modal('hide');
      allBoards.buildTheBoards(uid);
    })
    .catch((error) => console.error(error));
};

const newPin = (e) => {
  e.stopImmediatePropagation();
  const { uid } = firebase.auth().currentUser;
  const boardId = $('.board-div').attr('id');
  const newlyCreatedPin = {
    name: $('#pin-name').val(),
    description: $('#pin-description').val(),
    imageUrl: $('#pin-image-url').val(),
    siteUrl: $('#site-url').val(),
    boardId,
    uid,
  };
  pinData.addPin(newlyCreatedPin)
    .then(() => {
      allPins.printPins(boardId);
      $('#addPinModal').modal('hide');
    })
    .catch((error) => console.error(error));
};

const createNewPin = () => {
  $('#add-new-pin').click(newPin);
};

export default { createNewBoard, createNewPin };
