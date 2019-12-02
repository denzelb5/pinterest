import $ from 'jquery';
// import firebase from 'firebase/app';
// import 'firebase/auth';
import board from '../allBoards/allBoards';
import pinData from '../../helpers/data/pinData';
import boardData from '../../helpers/data/boardData';
// import allPins from '../allPins/allPins';
// import boardData from '../../helpers/data/boardData';

const getPrefilledPinModal = (e) => {
  e.stopImmediatePropagation();
  // const { uid } = firebase.auth().currentUser;
  const pinId = e.target.id.split('update-')[1];
  const boardId = $('.board-div').attr('id');
  pinData.getPinById(pinId)
    .then((response) => {
      $('#move-pin-modal').modal('show');
      const pins = response.data;
      $('#new-board').val(pins.boardId);
      $('#new-board-name').val(pins.name);
      $('#new-board-imageUrl').val(pins.imageUrl);
      $('#new-board-siteUrl').val(pins.siteUrl);
      $('#new-board-description').val(pins.description);
      $('.edit-pin-modal').attr('id', boardId);
    })
    .catch((error) => console.error(error));
};

const editPin = (event) => {
  event.stopImmediatePropagation();
  // const { uid } = firebase.auth().currentUser;
  const boardId = $('.board-div').attr('id');
  const pinId = event.target.id.split('update-')[1];
  pinData.getPinsByBoardId(boardId)
    .then(() => {
      const updatedPin = {
        boardId: $('#new-board').val(),
        name: $('#new-board-name').val(),
        imageUrl: $('#new-board-imageUrl').val(),
        siteUrl: $('#new-board-siteUrl').val(),
        description: $('#new-board-description').val(),
      };
      pinData.updatePin(pinId, updatedPin)
        .then(() => {
          const newBoardId = $('#new-board').val();
          boardData.updateBoard((boardId, newBoardId))
            .then(() => {
              console.error('newBoardId', newBoardId);
              $('#move-pin-modal').modal('hide');
              pinData.deletePin(newBoardId);
              board.buildTheBoards(newBoardId);
            });
        });
    })
    .catch((error) => console.error(error));
};

const moveSelectedPin = () => {
  // $('').click(movePin);
  $('body').on('click', '.edit-pin-modal', editPin);
  $('body').on('click', '.pin-move', getPrefilledPinModal);
};

export default { moveSelectedPin };
