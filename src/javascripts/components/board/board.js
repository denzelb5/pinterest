import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import boardData from '../../helpers/data/boardData';
import utilities from '../../helpers/utilities';

const googleDiv = $('#google');
const logoutButton = $('#logout-button');
const boardsDiv = $('#boards');

const logoutEvent = () => {
  logoutButton.click((e) => {
    e.preventDefault();
    firebase.auth().signOut()
      .then(() => {
        logoutButton.classList.add('hide');
        boardsDiv.classList.add('hide');
        googleDiv.classList.add('hide');
      }).catch((err) => console.error('still logged in', err));
  });
};

const makeABoard = () => {
  boardData.getBoards()
    .then((boards) => {
      let domString = '<h1>Boards</h1>';
      boards.forEach((board) => {
        domString += `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${board.name}</h5>
        <p class="card-text">${board.description}</p>
      </div>
    </div>`;
      });
      utilities.printToDom(domString, 'boards');
    })
    .catch((error) => console.error(error));
};

export default { logoutEvent, makeABoard };
