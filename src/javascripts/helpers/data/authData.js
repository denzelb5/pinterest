import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import allBoards from '../../components/allBoards/allBoards';

const googleDiv = $('#google');
const logoutButton = $('#logout-button');
const boardsDiv = $('#boards');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      googleDiv.addClass('hide');
      logoutButton.removeClass('hide');
      boardsDiv.removeClass('hide');
      allBoards.buildTheBoards(user.uid);
    } else {
      boardsDiv.addClass('hide');
      logoutButton.addClass('hide');
      googleDiv.removeClass('hide');
    }
  });
};

export default { checkLoginStatus };
