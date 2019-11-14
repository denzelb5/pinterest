import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import boardData from '../../helpers/data/boardData';
import allBoards from '../allBoards/allBoards';
import 'bootstrap';
// import utilities from '../../helpers/utilities';

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
      // $('#addBoardModal').modal('hide');
      // eslint-disable-next-line no-use-before-define
      allBoards.buildTheBoards(uid);
    })
    .catch((error) => console.error(error));
};

// const buildNewBoard = (uid) => {
//   boardData.getBoardsByUid(uid)
//     .then((boards) => {
//       let domString = '';
//       boards.forEach((board) => {
//         domString += allBoards.buildTheBoards(board);
//       });
//       utilities.printToDom(domString, 'boards2');
//       // eslint-disable-next-line no-use-before-define
//       $('#create-board').click(newBoard);
//     })
//     .catch((error) => console.error(error));
// };

export default { createNewBoard };
