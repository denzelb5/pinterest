import boardData from '../../helpers/data/boardData';
import soloBoard from '../board/board';
import utilities from '../../helpers/utilities';
import './allBoards.scss';

const buildTheBoards = (uid) => {
  boardData.getBoardsByUid(uid)
    .then((boards) => {
      let domString = '';
      boards.forEach((board) => {
        domString += soloBoard.makeABoard(board);
      });
      utilities.printToDom(domString, 'boards2');
    })
    .catch((error) => console.error(error));
};

export default { buildTheBoards };
