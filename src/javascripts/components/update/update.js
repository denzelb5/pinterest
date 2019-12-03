import $ from 'jquery';
import board from '../allBoards/allBoards';
import pinData from '../../helpers/data/pinData';
import allPins from '../allPins/allPins';

const getPrefilledPinModal = (e) => {
  e.stopImmediatePropagation();
  const pinId = e.target.id.split('update-')[1];
  pinData.getPinById(pinId)
    .then((response) => {
      $('#move-pin-modal').modal('show');
      const pins = response.data;
      $('#new-board').val(pins.boardId);
      $('#new-board-name').val(pins.name);
      $('#new-board-imageUrl').val(pins.imageUrl);
      $('#new-board-siteUrl').val(pins.siteUrl);
      $('#new-board-description').val(pins.description);
      $('.edit-pin-modal').attr('id', pinId);
    })
    .catch((error) => console.error(error));
};

const editPin = (event) => {
  console.error(event);
  event.stopImmediatePropagation();
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
      console.error('updatedPin', updatedPin, 'pinId', pinId);
      pinData.updatePin(event.target.id, updatedPin)
        .then(() => {
          $('#move-pin-modal').modal('hide');
          allPins.printPins(boardId);
          board.buildTheBoards(boardId);
        });
    })
    .catch((error) => console.error(error));
};

const moveSelectedPin = () => {
  $('body').on('click', '.edit-pin-modal', editPin);
  $('body').on('click', '.pin-move', getPrefilledPinModal);
};

export default { moveSelectedPin };
