import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import allBoards from '../../components/allBoards/allBoards';

const googleDiv = $('#google');
const logoutButton = $('#logout-button');
const boardsDiv = $('#boards');
const loginButton = $('#login');
const boardsPage = $('#boards2');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      googleDiv.addClass('hide');
      logoutButton.removeClass('hide');
      loginButton.addClass('hide');
      boardsDiv.removeClass('hide');
      allBoards.buildTheBoards(user.uid);
      boardsPage.removeClass('hide');
    } else {
      boardsDiv.addClass('hide');
      logoutButton.addClass('hide');
      loginButton.removeClass('hide');
      boardsDiv.addClass('hide');
      googleDiv.removeClass('hide');
      boardsPage.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
