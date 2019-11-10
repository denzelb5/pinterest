import 'bootstrap';
import firebase from 'firebase';
import apiKeys from './helpers/apiKeys.json';
import home from './components/home/home';
import authData from './helpers/data/authData';
import board from './components/board/board';
// import allPins from './components/allPins/allPins';
import allBoards from './components/allBoards/allBoards';


import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  home.loginButton();
  authData.checkLoginStatus();
  board.logoutEvent();
  allBoards.closePin();
};

init();
