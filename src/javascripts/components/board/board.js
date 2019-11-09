import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

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

const makeABoard = (board) => {
  let domString = '';
  if (board.name) {
    domString += `<div id="${board.id}" class="card col-3 soloBoard">
    <div class="card-body">
    <img src="${board.imageUrl}" class="card-img-top" alt="...">
      <h5 class="card-title">${board.name}</h5>
      <p class="card-text">${board.description}</p>
    </div>
  </div>`;
  } else {
    domString = '';
  }
  return domString;
};

export default { logoutEvent, makeABoard };
