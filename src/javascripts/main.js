import 'bootstrap';
import firebase from 'firebase';
import apiKeys from './helpers/apiKeys.json';
import home from './components/home/home';
import authData from './helpers/data/authData';
import board from './components/board/board';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  home.loginButton();
  authData.checkLoginStatus();
  board.logoutEvent();
};

init();
