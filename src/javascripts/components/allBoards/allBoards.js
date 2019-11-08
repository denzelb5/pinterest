import boardData from '../../helpers/data/boardData';
import soloBoard from '../board/board';
import utilities from '../../helpers/utilities';

const buildTheBoards = (uid) => {
  boardData.getBoardsByUid(uid)
    .then((boards) => {
      let domString = '<div class="d-flex flex-wrap" id="boards-section">';
      boards.forEach((board) => {
        domString += soloBoard.makeABoard(board);
        domString += '</div>';
      });
      utilities.printToDom(domString, 'boards');
    })
    .catch((error) => console.error(error));
};

export default { buildTheBoards };
