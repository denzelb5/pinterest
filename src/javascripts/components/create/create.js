import firebase from 'firebase/auth';
import 'firebase/app';
import boardData from '../../helpers/data/boardData';
import allBoards from '../allBoards/allBoards';
import 'bootstrap';
import utilities from '../../helpers/utilities';

const newBoard = (e) => {
  const boardId = e.target.id;
  e.stopImmediatePropagation();
  const { uid } = firebase.auth().currentUser;
  const inputText = $(e.target).siblings().val()
    .then((boards) => {
      const selectedBoard = boards.find((x) => x.board.toLowerCase() === inputText.toLowerCase());
      if (selectedBoard) {
        const newlyCreatedBoard = {
          name: selectedBoard.name,
          boardId,
          imageUrl: selectedBoard.imageUrl,
          uid,
        };
        boardData.addBoard(newlyCreatedBoard).then(() => {
        // eslint-disable-next-line no-use-before-define
          buildNewBoard();
          allBoards.buildTheBoards();
        });
      }
    })
    .catch((error) => console.error(error));
};

const buildNewBoard = (uid) => {
  boardData.getBoardsByUid(uid)
    .then((boards) => {
      let domString = '';
      boards.forEach((board) => {
        domString += allBoards.buildTheBoards(board);
      });
      utilities.printToDom(domString, 'boards2');
      // eslint-disable-next-line no-use-before-define
      $('#add-board').click(newBoard);
    })
    .catch((error) => console.error(error));
};

export default { newBoard };
