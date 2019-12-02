import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import board from '../allBoards/allBoards';
import pinData from '../../helpers/data/pinData';

const movePin = (event) => {
  event.stopImmediatePropagation();
  const { uid } = firebase.auth().currentUser;
  const boardId = $('.board-div').attr('id');
  const pinId = event.target.id.split('update-')[1];
  pinData.getPinsByBoardId(boardId)
    .then(() => {
      const updatedPin = {
        boardId: $('#new-board').val(),
      };
      pinData.updatePin(pinId, updatedPin)
        .then(() => {
          $('move-pin-modal').modal('hide');
          board.buildTheBoards(uid);
        });
    })
    .catch((error) => console.error(error));
};

const moveSelectedPin = () => {
  // $('').click(movePin);
  $('body').on('click', '.edit-pin-modal', movePin);
};

export default { moveSelectedPin };
