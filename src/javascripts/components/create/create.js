// import firebase from 'firebase/auth';
// import 'firebase/app';
// import boardData from '../../helpers/data/boardData';
// import allBoards from '../allBoards/allBoards';
import 'bootstrap';
import utilities from '../../helpers/utilities';

// const newBoard = (e) => {
//   e.stopImmediatePropagation();
//   const { uid } = firebase.auth().currentUser;
//   const inputText = $(e.target).siblings().val()
//     .then((boards) => {
//       const selectedBoard = boards.find((x) => x.board.toLowerCase() === inputText.toLowerCase());
//       if (selectedBoard) {
//         const newlyCreatedBoard = {
//           name: selectedBoard.name,
//           boardId: e.target.id,
//           imageUrl: selectedBoard.imageUrl,
//           uid,
//         };
//         boardData.addBoard(newlyCreatedBoard).then(() => {
//         // eslint-disable-next-line no-use-before-define
//           buildNewBoard(uid);
//           allBoards.buildTheBoards(uid);
//         });
//       }
//     })
//     .catch((error) => console.error(error));
// };

// const buildNewBoard = (uid) => {
//   boardData.getBoardsByUid(uid)
//     .then((boards) => {
//       let domString = '<h2>Add New Board</h2>';
//       domString += `<button type="button" id="add-board" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
//       +
//     </button>`;
//       domString += '<div class="d-flex flex-wrap">';
//       boards.forEach((board) => {
//         domString += allBoards.buildTheBoards(board);
//       });
//       domString += '</div>';
//       utilities.printToDom(domString, 'boards2');
//       // eslint-disable-next-line no-use-before-define
//       // $('#add-board').click(newBoard);
//     })
//     .catch((error) => console.error(error));
// };

const modal = () => {
  let domString = '<h2>Add New Board</h2>';
  domString += `<div><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button></div>`;
  domString += '<div><button class="btn btn-primary">Help!</button></div>';
  // domString += '<div class="d-flex flex-wrap">';
  // boards.forEach((board) => {
  //   domString += allBoards.buildTheBoards(board);
  // });
  // domString += '</div>';
  utilities.printToDom(domString, 'boards');
  console.error('where is my modal?');
};

export default { modal };
