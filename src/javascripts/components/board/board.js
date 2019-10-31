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

export default { logoutEvent };
